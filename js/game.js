/* ============================================================
   TOWER RUSH  —  crash-style tower builder
   Real art is used where assets are intact; the tower blocks,
   crane, clouds and sun are drawn procedurally because the
   original sprite atlas (global.webp / tr_all.webp) shipped as
   empty placeholders.
   ============================================================ */
(() => {
  'use strict';

  // ---------- DOM ----------
  const canvas   = document.getElementById('scene');
  const ctx      = canvas.getContext('2d');
  const elBal    = document.getElementById('balance');
  const elMult   = document.getElementById('multiplier');
  const elStatus = document.getElementById('statusMsg');
  const elBet    = document.getElementById('betValue');
  const elAction = document.getElementById('actionBtn');
  const bgm      = document.getElementById('bgm');

  // ---------- Assets ----------
  const IMG = {};
  const SOURCES = {
    sky:   'images/bajjjs/desktop/background-back.webp',
    city:  'images/bajjjs/desktop/background-front.webp',
    shop:  'images/bajjjs/desktop/basis-tower.webp',
    block: 'images/bajjjs/desktop/intro/boardItem.webp',
  };

  function loadImages(cb) {
    const keys = Object.keys(SOURCES);
    let left = keys.length;
    if (!left) return cb();
    keys.forEach(k => {
      const im = new Image();
      im.onload = im.onerror = () => { if (--left === 0) cb(); };
      im.src = SOURCES[k];
      IMG[k] = im;
    });
  }

  // ---------- Layout (virtual design space, 720 tall) ----------
  const DESIGN_H = 720;
  let DW = 960, DH = 720, scale = 1, dpr = 1;

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    scale = h / DESIGN_H;
    DH = DESIGN_H;
    DW = w / scale;        // virtual width depends on real aspect ratio
  }
  window.addEventListener('resize', resize);

  // ---------- Game constants ----------
  const GROUND_Y     = 560;      // virtual Y of the pavement (shop sits here)
  const SHOP_W       = 250;      // drawn shop width
  const SHOP_H       = SHOP_W * (1140 / 1860);
  // Tower block = the boardItem building art (279x302). The top slice of the
  // image is the crane cable/sky, so the actual building body is shorter and
  // that body height is what governs how blocks stack.
  const BLOCK_W      = 162;                         // drawn building width
  const BLOCK_RATIO  = 302 / 279;                   // image h/w
  const BLOCK_DRAW_H = BLOCK_W * BLOCK_RATIO;       // full image draw height
  const CABLE_FRAC   = 0.16;                         // top fraction = cable/sky padding
  const BLOCK_BODY_H = BLOCK_DRAW_H * (1 - CABLE_FRAC); // visible building = stack step
  const DROP_TOP     = -300;     // where a new block starts (above viewport)
  const CAM_ANCHOR   = 0.42;     // keep newest block around 42% down the screen

  // Multiplier ladder — n = blocks placed. Grows super-linearly so the
  // longer you build the bigger (and riskier) the payout.
  function multForBlock(n) {
    if (n <= 0) return 1;
    return +(1 + 0.18 * n + 0.045 * n * n).toFixed(2);
  }

  // ---------- State ----------
  const S = { IDLE: 'idle', DROPPING: 'dropping', RUNNING: 'running',
              CASHOUT: 'cashout', CRASH: 'crash' };

  const game = {
    state: S.IDLE,
    balance: 1000,
    bet: 100,
    blocks: [],          // placed blocks {x, y, w, h, hue, win}
    falling: null,       // current block being lowered
    crashAt: 0,          // block index where the tower collapses
    mult: 1,
    camY: 0,             // camera vertical offset (world units)
    camTarget: 0,
    dropTimer: 0,
    collapseT: 0,
    shake: 0,
    clouds: [],
    particles: [],
    soundOn: true,
  };

  // initialise a few parallax clouds
  for (let i = 0; i < 5; i++) {
    game.clouds.push({
      x: Math.random(),
      y: 60 + Math.random() * 260,
      s: 0.5 + Math.random() * 0.8,
      v: 0.004 + Math.random() * 0.006,
    });
  }

  // ---------- Helpers ----------
  const fmt = n => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function setBalance(v) { game.balance = v; elBal.textContent = fmt(v); }
  function setMult(v, cls) {
    game.mult = v;
    elMult.textContent = v.toFixed(2) + 'x';
    elMult.className = cls || '';
    if (typeof updateCashoutLabel === 'function') updateCashoutLabel();
  }

  // choose a crash block from a crash-game style distribution (~3% edge)
  function rollCrashBlock() {
    const r = Math.random();
    if (r < 0.03) return 1;                        // unlucky: collapses on the 1st block
    const crashMult = Math.max(1.0, 0.97 / (1 - r)); // classic crash curve
    // find first block whose multiplier exceeds crashMult
    let n = 1;
    while (multForBlock(n) < crashMult && n < 60) n++;
    return n;
  }

  // ---------- Audio (SFX via WebAudio so we don't need the sprite map) ----------
  let actx = null;
  function ac() { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); return actx; }
  function beep(freq, dur, type = 'sine', gain = 0.18) {
    if (!game.soundOn) return;
    try {
      const c = ac(), o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.value = gain;
      o.connect(g); g.connect(c.destination);
      const t = c.currentTime;
      g.gain.setValueAtTime(gain, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.start(t); o.stop(t + dur);
    } catch (e) {}
  }
  const sfxPlace   = () => { beep(420, 0.12, 'square', 0.15); setTimeout(() => beep(620, 0.10, 'square', 0.12), 60); };
  const sfxCash    = () => { [600,800,1000,1300].forEach((f,i) => setTimeout(() => beep(f,0.14,'triangle',0.2), i*70)); };
  const sfxCrash   = () => { beep(160, 0.5, 'sawtooth', 0.25); setTimeout(() => beep(90,0.5,'sawtooth',0.22), 80); };

  // ============================================================
  //  GAME FLOW
  // ============================================================
  function startRound() {
    const bet = parseFloat(elBet.value) || 0;
    if (bet < 1) { flashStatus('MIN BET 1.00'); return; }
    if (bet > game.balance) { flashStatus('INSUFFICIENT BALANCE'); return; }

    game.bet = bet;
    setBalance(game.balance - bet);
    game.blocks = [];
    game.falling = null;
    game.particles = [];
    game.camY = 0; game.camTarget = 0;
    game.collapseT = 0; game.shake = 0;
    game.crashAt = rollCrashBlock();
    game.state = S.DROPPING;
    game.dropTimer = 0;
    setMult(1, '');
    elStatus.textContent = 'BUILDING…';
    setActionMode('cashout');
    spawnBlock();
    startMusic();
  }

  function spawnBlock() {
    const idx = game.blocks.length;                 // 0-based index of the block we're about to drop
    const baseX = DW / 2;
    // slight horizontal wobble so the stack looks hand-stacked
    const offset = idx === 0 ? 0 : (Math.sin(idx * 1.3) * 10);
    const topOfStack = stackTopWorldY();            // body-top of last block / shop roof
    game.falling = {
      x: baseX + offset,
      worldY: topOfStack - BLOCK_BODY_H + DROP_TOP, // start high above the stack
      targetY: topOfStack - BLOCK_BODY_H,           // rest: body sits on the stack
      flip: idx % 2 === 1,                          // mirror alternate floors for variety
      idx,
    };
    game.state = S.DROPPING;
  }

  // world Y (smaller = higher up) of the current top surface of the tower
  function stackTopWorldY() {
    if (game.blocks.length === 0) return GROUND_Y - SHOP_H; // top of the shop roof
    return game.blocks[game.blocks.length - 1].worldY;       // top edge of last block
  }

  function placeBlock() {
    const b = game.falling;
    game.blocks.push({ x: b.x, worldY: b.targetY, flip: b.flip, idx: b.idx });
    game.falling = null;
    const placed = game.blocks.length;               // blocks now standing
    sfxPlace();
    smokePuff(game.blocks[placed - 1]);

    // does the tower collapse on this block?
    if (placed === game.crashAt) {
      crash();
      return;
    }
    setMult(multForBlock(placed), '');
    elStatus.textContent = 'CASH OUT TO WIN';
    game.state = S.RUNNING;
    game.dropTimer = 0;
    game.camTarget = cameraForStack();
  }

  function cashOut() {
    if (game.state !== S.RUNNING && game.state !== S.DROPPING) return;
    if (game.blocks.length === 0) return;            // nothing built yet
    const win = game.bet * game.mult;
    setBalance(game.balance + win);
    game.state = S.CASHOUT;
    setMult(game.mult, 'win');
    elStatus.textContent = 'CASHED OUT!';
    sfxCash();
    burstCoins();
    pushResult(game.mult, true);
    setActionMode('build');
    showPopup(true, win);
    setTimeout(resetScene, 1800);
  }

  function crash() {
    game.state = S.CRASH;
    game.collapseT = 0;
    game.shake = 18;
    setMult(game.mult, 'crash');
    elStatus.textContent = 'TOWER COLLAPSED!';
    sfxCrash();
    pushResult(game.mult, false);
    // give every block a tumble velocity
    game.blocks.forEach((b, i) => {
      b.vx = (Math.random() - 0.5) * 6 + (b.x < DW/2 ? -2 : 2);
      b.vy = -3 - Math.random() * 3;
      b.va = (Math.random() - 0.5) * 0.3;
      b.rot = 0;
    });
    setActionMode('build');
    showPopup(false, game.bet);
    setTimeout(resetScene, 1900);
  }

  function resetScene() {
    game.state = S.IDLE;
    game.blocks = [];
    game.falling = null;
    game.particles = [];
    game.camY = 0; game.camTarget = 0;
    game.shake = 0;
    setMult(1, '');
    elStatus.textContent = '';
    setActionMode('build');
  }

  // Keep the top of the stack at the anchor line once it rises past it.
  function cameraTarget() {
    const top = stackTopWorldY();             // screen Y when camY = 0
    const anchor = DH * CAM_ANCHOR;
    return Math.max(0, anchor - top);
  }

  // ---------- particles ----------
  function smokePuff(b) {
    for (let i = 0; i < 10; i++) {
      game.particles.push({
        x: b.x + (Math.random() - 0.5) * BLOCK_W,
        worldY: b.worldY + BLOCK_BODY_H,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -0.4 - Math.random() * 0.8,
        r: 6 + Math.random() * 10,
        life: 1, decay: 0.02 + Math.random() * 0.02,
        kind: 'smoke',
      });
    }
  }
  function burstCoins() {
    const top = stackTopWorldY();
    for (let i = 0; i < 26; i++) {
      game.particles.push({
        x: DW/2 + (Math.random()-0.5)*120,
        worldY: top - 20,
        vx: (Math.random()-0.5)*7,
        vy: -4 - Math.random()*5,
        r: 7 + Math.random()*5,
        life: 1, decay: 0.012,
        kind: 'coin', g: 0.22, rot: Math.random()*6,
      });
    }
  }

  // ============================================================
  //  UPDATE
  // ============================================================
  let last = performance.now();
  function update(now) {
    const dt = Math.min(40, now - last) / 16.6667; // normalised to ~60fps steps
    last = now;

    // camera easing
    game.camTarget = (game.state === S.IDLE || game.state === S.CRASH) ? game.camTarget : cameraTarget();
    game.camY += (game.camTarget - game.camY) * 0.12 * dt;

    // clouds drift
    game.clouds.forEach(c => { c.x += c.v * 0.01 * dt; if (c.x > 1.2) c.x = -0.2; });

    if (game.state === S.DROPPING && game.falling) {
      const f = game.falling;
      const dist = f.targetY - f.worldY;
      const step = Math.max(2.2, Math.abs(dist) * 0.14) * dt;
      f.worldY += Math.min(dist, step);
      if (f.targetY - f.worldY < 0.6) {
        f.worldY = f.targetY;
        placeBlock();
      }
    }

    if (game.state === S.RUNNING) {
      game.dropTimer += dt;
      // brief pause on top of each block, then drop the next one
      if (game.dropTimer > 26) spawnBlock();
    }

    if (game.state === S.CRASH) {
      game.collapseT += dt;
      game.blocks.forEach(b => {
        b.vy += 0.35 * dt;
        b.x += b.vx * dt;
        b.worldY += b.vy * dt;
        b.rot += b.va * dt;
      });
      game.shake *= Math.pow(0.9, dt);
    }

    // particles
    for (let i = game.particles.length - 1; i >= 0; i--) {
      const p = game.particles[i];
      p.x += p.vx * dt;
      p.worldY += p.vy * dt;
      if (p.g) p.vy += p.g * dt;
      if (p.kind === 'smoke') { p.vy -= 0.01 * dt; p.r += 0.4 * dt; }
      if (p.rot !== undefined) p.rot += 0.1 * dt;
      p.life -= p.decay * dt;
      if (p.life <= 0) game.particles.splice(i, 1);
    }
  }

  // ============================================================
  //  RENDER
  // ============================================================
  // world Y -> screen Y
  function sy(worldY) { return worldY + game.camY; }

  function render() {
    ctx.save();
    ctx.scale(dpr * scale, dpr * scale);

    let shx = 0, shy = 0;
    if (game.shake > 0.5) { shx = (Math.random()-0.5)*game.shake; shy = (Math.random()-0.5)*game.shake; }
    ctx.translate(shx, shy);

    drawSky();
    drawSun();
    drawClouds();
    drawCity();
    drawShop();
    drawTower();
    drawFalling();
    drawCrane();
    drawParticles();

    ctx.restore();
  }

  function drawSky() {
    const img = IMG.sky;
    // The sky image is tall; we pan it down as the camera rises.
    if (img && img.naturalWidth) {
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const drawW = DW, drawH = DW * (ih / iw);
      // anchor bottom of sky to ground; reveal more as camY grows
      let y = DH - drawH + game.camY * 0.9;
      // keep it covering the screen
      if (y > 0) y = 0;
      if (y + drawH < DH) y = DH - drawH;
      ctx.drawImage(img, 0, y, drawW, drawH);
    } else {
      const g = ctx.createLinearGradient(0, 0, 0, DH);
      g.addColorStop(0, '#13204a'); g.addColorStop(1, '#7fb0e0');
      ctx.fillStyle = g; ctx.fillRect(0, 0, DW, DH);
    }
  }

  function drawSun() {
    const cx = DW * 0.5, cy = sy(GROUND_Y - SHOP_H - 10) ;
    const r = 120;
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
    grad.addColorStop(0, 'rgba(255,236,170,0.95)');
    grad.addColorStop(0.4, 'rgba(255,214,120,0.45)');
    grad.addColorStop(1, 'rgba(255,214,120,0)');
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
  }

  function drawClouds() {
    ctx.save();
    game.clouds.forEach(c => {
      const x = c.x * (DW + 200) - 100;
      const y = c.y + game.camY * 0.4;
      if (y > DH + 80 || y < -120) return;
      cloud(x, y, 70 * c.s);
    });
    ctx.restore();
  }
  function cloud(x, y, r) {
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(x, y, r*0.6, 0, Math.PI*2);
    ctx.arc(x + r*0.55, y + r*0.1, r*0.5, 0, Math.PI*2);
    ctx.arc(x - r*0.55, y + r*0.12, r*0.45, 0, Math.PI*2);
    ctx.arc(x + r*0.1, y - r*0.25, r*0.45, 0, Math.PI*2);
    ctx.fill();
  }

  function drawCity() {
    const img = IMG.city;
    if (img && img.naturalWidth) {
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const drawW = DW;
      const drawH = DW * (ih / iw);
      // anchor the pavement of the city art to GROUND_Y, moving with the camera
      const y = sy(GROUND_Y) - drawH * 0.80;
      ctx.drawImage(img, 0, y, drawW, drawH);
    }
  }

  function drawShop() {
    const img = IMG.shop;
    const w = SHOP_W, h = SHOP_H;
    const x = DW/2 - w/2;
    const y = sy(GROUND_Y) - h;
    if (img && img.naturalWidth) ctx.drawImage(img, x, y, w, h);
  }

  // ---------- tower block (boardItem building art) ----------
  // bodyTopWorldY = world Y of the TOP of the building body (cable sits above it).
  function drawBlock(cx, bodyTopWorldY, flip, rot) {
    const img = IMG.block;
    const w = BLOCK_W, dh = BLOCK_DRAW_H;
    const imgTopY = sy(bodyTopWorldY) - dh * CABLE_FRAC;  // full image top (incl. cable)
    const cy = sy(bodyTopWorldY) + BLOCK_BODY_H / 2;       // building centre (rotation pivot)
    ctx.save();
    if (rot) { ctx.translate(cx, cy); ctx.rotate(rot); ctx.translate(-cx, -cy); }
    if (img && img.naturalWidth) {
      if (flip) { ctx.translate(cx, 0); ctx.scale(-1, 1); ctx.translate(-cx, 0); }
      ctx.drawImage(img, cx - w / 2, imgTopY, w, dh);
    } else {
      ctx.fillStyle = '#c98a3a';
      roundRect(cx - w/2, sy(bodyTopWorldY), w, BLOCK_BODY_H, 8); ctx.fill();
    }
    ctx.restore();
  }

  function drawTower() {
    game.blocks.forEach(b => drawBlock(b.x, b.worldY, b.flip, b.rot || 0));
  }

  function drawFalling() {
    if (game.falling) {
      const f = game.falling;
      drawBlock(f.x, f.worldY, f.flip, 0);
    }
  }

  // crane cable connecting the falling block up to the off-screen crane
  function drawCrane() {
    if (!game.falling || game.state !== S.DROPPING) return;
    const f = game.falling;
    const cableTop = sy(f.worldY) - BLOCK_DRAW_H * CABLE_FRAC; // top of the block image
    ctx.strokeStyle = 'rgba(40,40,46,0.9)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(f.x, -10); ctx.lineTo(f.x, cableTop + 6); ctx.stroke();
  }

  function drawParticles() {
    game.particles.forEach(p => {
      const y = sy(p.worldY);
      ctx.globalAlpha = clamp(p.life, 0, 1);
      if (p.kind === 'smoke') {
        ctx.fillStyle = 'rgba(220,220,225,0.8)';
        ctx.beginPath(); ctx.arc(p.x, y, p.r, 0, Math.PI*2); ctx.fill();
      } else if (p.kind === 'coin') {
        ctx.save(); ctx.translate(p.x, y); ctx.rotate(p.rot || 0);
        ctx.fillStyle = '#ffd24a';
        ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * Math.abs(Math.cos(p.rot)), 0, 0, Math.PI*2); ctx.fill();
        ctx.strokeStyle = '#b9860c'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.restore();
      }
    });
    ctx.globalAlpha = 1;
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // ============================================================
  //  MAIN LOOP
  // ============================================================
  function frame(now) {
    update(now);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    requestAnimationFrame(frame);
  }

  // ============================================================
  //  UI WIRING
  // ============================================================
  function setActionMode(mode) {
    if (mode === 'cashout') {
      updateCashoutLabel();
      elAction.classList.add('cashout');
      elAction.classList.remove('build');
    } else {
      elAction.innerHTML = 'BUILD';
      elAction.classList.remove('cashout');
      elAction.classList.add('build');
    }
  }

  // live payout shown on the CASH OUT button while a round is in progress
  function updateCashoutLabel() {
    if (!elAction.classList.contains('cashout')) return;
    const payout = game.blocks.length > 0 ? game.bet * game.mult : 0;
    elAction.innerHTML = 'CASH OUT<small>' + fmt(payout) + '</small>';
  }

  // recent-results history column (newest on top, keeps last 6)
  const elHistory = document.getElementById('history');
  const history = [];
  function pushResult(mult, won) {
    history.unshift({ mult, won });
    if (history.length > 6) history.pop();
    elHistory.innerHTML = '';
    history.forEach(h => {
      const pill = document.createElement('div');
      pill.className = 'histPill ' + (h.won ? 'win' : 'lose');
      pill.textContent = 'x' + h.mult.toFixed(2);
      elHistory.appendChild(pill);
    });
  }

  let statusTimer = null;
  function flashStatus(msg) {
    elStatus.textContent = msg;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { if (game.state === S.IDLE) elStatus.textContent = ''; }, 1500);
  }

  function onAction() {
    if (game.state === S.IDLE) startRound();
    else if (game.state === S.RUNNING || game.state === S.DROPPING) cashOut();
  }

  function adjustBet(delta) {
    if (game.state !== S.IDLE) return;
    let v = parseFloat(elBet.value) || 0;
    v = Math.max(1, Math.round((v + delta) * 100) / 100);
    elBet.value = v % 1 === 0 ? v : v.toFixed(2);
  }

  // popup
  const popup = document.getElementById('popup');
  const popupCard = document.getElementById('popupCard');
  function showPopup(won, amount) {
    popupCard.classList.toggle('lose', !won);
    document.getElementById('popupTitle').textContent = won ? 'YOU WON' : 'TOWER FELL';
    document.getElementById('popupAmount').textContent = won ? fmt(amount) : '-' + fmt(amount);
    popup.classList.remove('hidden');
    clearTimeout(popup._t);
    popup._t = setTimeout(() => popup.classList.add('hidden'), 1700);
  }

  // music
  let musicStarted = false;
  function startMusic() {
    if (!game.soundOn) return;
    if (!musicStarted) { bgm.volume = 0.4; bgm.play().catch(()=>{}); musicStarted = true; }
  }

  // events
  elAction.addEventListener('click', onAction);
  document.getElementById('betMinus').addEventListener('click', () => adjustBet(-10));
  document.getElementById('betPlus').addEventListener('click', () => adjustBet(10));
  document.getElementById('allIn').addEventListener('click', () => {
    if (game.state === S.IDLE) elBet.value = fmt(game.balance);
  });
  document.getElementById('timesTwo').addEventListener('click', () => {
    if (game.state === S.IDLE) {
      let v = (parseFloat(elBet.value) || 0) * 2;
      v = Math.min(v, game.balance);
      elBet.value = v % 1 === 0 ? v : v.toFixed(2);
    }
  });
  elBet.addEventListener('change', () => {
    let v = parseFloat(elBet.value) || 1;
    v = clamp(v, 1, Math.max(1, game.balance));
    elBet.value = v % 1 === 0 ? v : v.toFixed(2);
  });
  document.getElementById('popupClose').addEventListener('click', () => popup.classList.add('hidden'));

  const soundBtn = document.getElementById('soundToggle');
  soundBtn.addEventListener('click', () => {
    game.soundOn = !game.soundOn;
    soundBtn.classList.toggle('muted', !game.soundOn);
    soundBtn.textContent = game.soundOn ? '🔊' : '🔇';
    if (!game.soundOn) { bgm.pause(); } else if (musicStarted) { bgm.play().catch(()=>{}); }
  });

  // keyboard: space = action
  window.addEventListener('keydown', e => {
    if (e.code === 'Space') { e.preventDefault(); onAction(); }
  });

  // ---------- boot ----------
  function boot() {
    resize();
    setBalance(game.balance);
    setMult(1, '');
    loadImages(() => { requestAnimationFrame(frame); });
  }
  boot();
})();
