// Real matter-js physics for Tower Rush — same engine (0.18.0) the original game
// uses. Blocks are rigid bodies that fall, collide and topple; a thrown floor
// only "sticks" if it settles on top of the stack, otherwise the tower comes
// down. Coordinates are screen pixels (y grows downward), matching the DOM
// layer that renders each body.
import Matter from 'matter-js'

export interface TowerCfg {
  width: number       // stage width in px
  platformTopY: number // screen-y of the shop roof (where floor 1 rests)
  blockW: number      // building width
  bodyH: number       // building (body) height = stack stride
}

export type ThrowResult = 'success' | 'fail' | null

let idSeq = 1

export class TowerPhysics {
  engine: Matter.Engine
  world: Matter.World
  platform!: Matter.Body
  blocks: Matter.Body[] = [] // placed floors, bottom → top
  thrown: Matter.Body | null = null
  byId = new Map<string, Matter.Body>()
  cfg: TowerCfg

  constructor(cfg: TowerCfg) {
    this.cfg = cfg
    this.engine = Matter.Engine.create({ enableSleeping: true })
    this.engine.gravity.y = 1.1
    this.world = this.engine.world
    this.buildPlatform()
  }

  private buildPlatform() {
    const { width, platformTopY, blockW } = this.cfg
    this.platform = Matter.Bodies.rectangle(width / 2, platformTopY + 50, blockW * 1.55, 100, {
      isStatic: true,
      friction: 1,
      label: 'platform',
    })
    Matter.Composite.add(this.world, this.platform)
  }

  reset(cfg?: Partial<TowerCfg>) {
    if (cfg) this.cfg = { ...this.cfg, ...cfg }
    Matter.Composite.clear(this.world, false, true)
    this.blocks = []
    this.thrown = null
    this.byId.clear()
    this.buildPlatform()
  }

  private mkBlock(x: number, y: number): { body: Matter.Body; id: string } {
    const { blockW, bodyH } = this.cfg
    const id = 'b' + idSeq++
    const body = Matter.Bodies.rectangle(x, y, blockW * 0.9, bodyH, {
      friction: 0.95,
      frictionStatic: 1,
      restitution: 0,
      density: 0.004,
      chamfer: { radius: 5 },
      label: id,
    })
    this.byId.set(id, body)
    return { body, id }
  }

  bodyById(id: string) { return this.byId.get(id) }

  topBody(): Matter.Body | null { return this.blocks[this.blocks.length - 1] ?? null }

  // Floor 1 is laid directly on the roof (no throw needed).
  placeBase(): string {
    const { width, platformTopY, bodyH } = this.cfg
    const { body, id } = this.mkBlock(width / 2, platformTopY - bodyH / 2)
    this.blocks.push(body)
    Matter.Composite.add(this.world, body)
    return id
  }

  // Drop the next floor from above the current top, carrying the swing's
  // horizontal velocity so timing matters.
  throwFloor(x: number, vx: number): string {
    const top = this.topBody()
    const { bodyH, platformTopY } = this.cfg
    const y = (top ? top.position.y : platformTopY) - bodyH * 3.2
    const { body, id } = this.mkBlock(x, y)
    Matter.Body.setVelocity(body, { x: vx, y: 7 })
    this.thrown = body
    Matter.Composite.add(this.world, body)
    return id
  }

  update(ms: number) {
    Matter.Engine.update(this.engine, Math.min(1000 / 30, ms))
  }

  // Evaluate the in-flight floor: null = still resolving.
  resolveThrow(): ThrowResult {
    const b = this.thrown
    if (!b) return null
    const below = this.topBody()
    const refY = below ? below.position.y : this.cfg.platformTopY
    const refX = below ? below.position.x : this.cfg.width / 2
    const { blockW, bodyH } = this.cfg

    // slid off the side / fell past the floor below
    if (b.position.y > refY + bodyH * 0.85) return 'fail'
    if (Math.abs(b.angle) > 0.65) return 'fail'

    const speed = Math.hypot(b.velocity.x, b.velocity.y)
    if (speed < 0.4) {
      const dx = Math.abs(b.position.x - refX)
      const onTop = b.position.y < refY - bodyH * 0.45
      if (onTop && dx <= blockW * 0.72) {
        this.blocks.push(b)
        this.thrown = null
        return 'success'
      }
      return 'fail'
    }
    return null
  }

  // True once the stack has clearly collapsed.
  toppled(): boolean {
    return this.blocks.some((b) => b.position.y > this.cfg.platformTopY + this.cfg.bodyH * 2.2)
  }

  // Highest point of the stack (smallest y) for the camera.
  topY(): number {
    let y = this.cfg.platformTopY
    for (const b of this.blocks) if (b.position.y < y) y = b.position.y
    if (this.thrown && this.thrown.position.y < y) y = this.thrown.position.y
    return y
  }
}
