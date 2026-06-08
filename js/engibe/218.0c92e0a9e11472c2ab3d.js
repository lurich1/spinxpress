"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [218], {
        661(e, t, n) {
            n.d(t, {
                A: () => s
            });
            var o = n(5556),
                r = n.n(o),
                i = n(8874),
                a = n(4848),
                l = (0, i.default)("div").withConfig({
                    componentId: "sc-c8gdi6-0"
                })(['display:flex;flex-direction:column;flex:0 0 21.5em;width:21.5em;height:100%;font-size:1em;position:relative;[data-items="popup-open"] &{pointer-events:none;filter:brightness(30%);opacity:0.98;}']);

            function s(e) {
                var t = e.style,
                    n = e.children;
                return (0, a.jsx)(l, {
                    style: t.gameAside,
                    children: n
                })
            }
            s.defaultProps = {
                children: null,
                style: {}
            }, s.propTypes = {
                children: r().element,
                style: r().object
            }
        },
        8437(e, t, n) {
            n.d(t, {
                N: () => o,
                o: () => r
            });
            var o = function(e) {
                    var t;
                    return null === (t = e.services.jackpot) || void 0 === t ? void 0 : t.jackpotActive
                },
                r = function(e) {
                    var t, n, o;
                    return Boolean((null === (t = e.services.jackpot) || void 0 === t ? void 0 : t.jackpotActive) && ((null === (n = e.services.jackpot) || void 0 === n || null === (n = n.stateOfPopups) || void 0 === n ? void 0 : n.isMeterPopupOpen) || (null === (o = e.services.jackpot) || void 0 === o || null === (o = o.prizes) || void 0 === o ? void 0 : o.length)))
                }
        },
        2093(e, t, n) {
            n.d(t, {
                A: () => d
            });
            var o = n(8715),
                r = n(8283),
                i = n(5556),
                a = n.n(i),
                l = n(6653),
                s = n(8517),
                c = n(4848),
                u = (0, r.lazy)(function() {
                    return (0, o.G)({
                        url: s.REMOTE_CLIENT_URLS.chat,
                        bustRemoteEntryCache: !1,
                        scope: "chat",
                        module: "chatService"
                    })
                });

            function p(e) {
                var t = e.style;
                return !!(0, l.useSelector)(function(e) {
                    var t;
                    return null === (t = e.services) || void 0 === t || null === (t = t.chat) || void 0 === t ? void 0 : t.id
                }) && (0, c.jsx)(r.Suspense, {
                    fallback: null,
                    children: (0, c.jsx)(u, {
                        style: t
                    })
                })
            }
            p.propTypes = {
                style: a().object.isRequired
            };
            const d = (0, r.memo)(p)
        },
        4458(e, t, n) {
            n.d(t, {
                A: () => N
            });
            var o = n(8283),
                r = n(6653),
                i = n(5556),
                a = n.n(i),
                l = n(1703),
                s = n.n(l),
                c = n(3387),
                u = n(2384),
                p = n(4544),
                d = n.n(p),
                f = n(9776),
                m = n.n(f),
                y = n(3820),
                h = n(2182),
                b = n(6337),
                P = n(8437),
                v = n(1663),
                g = n(4848);

            function S(e) {
                return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, S(e)
            }

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach(function(t) {
                        var o, r, i, a;
                        o = e, r = t, i = n[t], a = function(e) {
                            if ("object" != S(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != S(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(r), (r = "symbol" == S(a) ? a : a + "") in o ? Object.defineProperty(o, r, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[r] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, r, i, a, l = [],
                            s = !0,
                            c = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                s = !1
                            } else
                                for (; !(s = (o = i.call(n)).done) && (l.push(o.value), l.length !== t); s = !0);
                        } catch (e) {
                            c = !0, r = e
                        } finally {
                            try {
                                if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (c) throw r
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return j(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var C = (0, o.lazy)(function() {
                    return n.e(9478).then(n.t.bind(n, 9478, 23))
                }),
                k = (0, o.lazy)(function() {
                    return n.e(7369).then(n.t.bind(n, 7369, 23))
                }),
                E = (0, o.lazy)(function() {
                    return n.e(7090).then(n.t.bind(n, 7090, 23))
                }),
                _ = (0, o.lazy)(function() {
                    return n.e(5079).then(n.t.bind(n, 5079, 23))
                }),
                B = (0, o.lazy)(function() {
                    return Promise.all([n.e(3672), n.e(2051)]).then(n.bind(n, 2051))
                }),
                I = ["Crasher"];

            function M(e) {
                var t = e.isFullScreenGames,
                    n = e.hasMobileFooter,
                    i = e.style,
                    a = e.openMenu,
                    l = e.isGlass,
                    p = O((0, o.useState)(!1), 2),
                    f = p[0],
                    S = p[1],
                    w = O((0, o.useState)(!1), 2),
                    j = w[0],
                    M = w[1],
                    N = (0, r.useDispatch)(),
                    T = (0, h.shallowSelector)(h.selectCashBackInfo),
                    x = (0, r.useSelector)(h.selectActiveLeaderBoardId),
                    U = (0, r.useSelector)(h.selectShowLeaderboardIcon),
                    L = (0, r.useSelector)(h.selectGameAssetsAreLoading),
                    G = (0, h.shallowSelector)(h.selectChatConfigs),
                    R = (0, r.useSelector)(P.N),
                    z = (0, h.shallowSelector)(h.selectPartnerUIConfig),
                    H = z.showTimer,
                    D = z.hideMusic,
                    $ = z.showNetPosition,
                    K = (0, r.useSelector)(h.selectNetPosition);
                (0, o.useEffect)(function() {
                    D && (v.settings.setOnMusic(!1), null === s() || void 0 === s() || s().setItem("isMusicOn", !1))
                }, [D]);
                var F = null == T ? void 0 : T.fillPercentage,
                    J = (0, y.A)(),
                    W = J.removeNotification,
                    q = J.openPopup,
                    V = J.closePopup,
                    Y = J.selectedBonus,
                    Q = J.isMobile,
                    X = J.mode,
                    Z = J.props,
                    ee = J.isToggleBalance,
                    te = (0, o.useMemo)(function() {
                        return -1 === I.indexOf(b.gameKindName)
                    }, [b.gameKindName]),
                    ne = Q && !(0, u.useOrientationChange)(),
                    oe = (0, o.useCallback)(function() {
                        q(c.BASE_POPUP_NAMES.CASH_BACK, {
                            isAutomaticallyOpenPopup: !1
                        })
                    }, []),
                    re = (0, o.useCallback)(function() {
                        N(h.actions.setJackpotMeterPopupOpenState(!0))
                    }, []),
                    ie = (0, o.useCallback)(function() {
                        null != G && G.chatPopupOpened ? V(c.BASE_POPUP_NAMES.CHAT_POPUP) : q(c.BASE_POPUP_NAMES.CHAT_POPUP)
                    }, [G]),
                    ae = (0, o.useCallback)(function() {
                        q(c.BASE_POPUP_NAMES.CHAT_REGISTRY_POPUP)
                    }, []),
                    le = (0, o.useCallback)(function() {
                        return q(c.BASE_POPUP_NAMES.BONUS_LIST_BAR)
                    }, []),
                    se = (0, o.useCallback)(function() {
                        q(c.BASE_POPUP_NAMES.MAIN_MENU)
                    }, []),
                    ce = (0, o.useCallback)(function() {
                        return q(c.BASE_POPUP_NAMES.LEADER_BOARD, {
                            leaderBoardId: x
                        })
                    }, [x]);
                (0, o.useEffect)(function() {
                    if ("true" !== s().getItem("cashbackIntroShowed") && F > 0 && !Y && (N(h.actions.openPopup({
                            name: c.BASE_POPUP_NAMES.CASH_BACK_INTRO_POPUP
                        })), s().setItem("cashbackIntroShowed", !0)), f) {
                        if (L) return;
                        M(!0), 0 === F || 100 === F ? M(!1) : F < 100 && setTimeout(function() {
                            M(!1)
                        }, 4e3)
                    } else S(!0)
                }, [f, F, L]);
                var ue = A({
                        isGlow: j,
                        cashBackInfo: T,
                        openCashBackPopup: oe,
                        openMainMenu: se,
                        openBonusListPopup: le,
                        openLeaderboardPopup: ce,
                        onChatIconClick: ie,
                        openChatRegistryPopup: ae,
                        removeNotification: W,
                        notificationStyles: i.notificationContainer,
                        selectedBonus: Y,
                        isToggleBalance: ee,
                        styles: i.gameHeader,
                        isLeaderBoard: U,
                        showNotification: te,
                        chatConfigs: G,
                        showTimer: H,
                        showJackpot: R,
                        openJackpotMeterPopup: re,
                        isHistory: b.isHistory,
                        openMenu: a,
                        mode: X,
                        activeLeaderBoardId: x,
                        isDataLoaded: f,
                        netPosition: $ && K
                    }, Z),
                    pe = A({
                        isGlow: j,
                        isGlass: l,
                        cashBackInfo: T,
                        openCashBackPopup: oe,
                        openChatRegistryPopup: ae,
                        styles: i.gameHeader,
                        isToggleBalance: ee,
                        openMenu: a,
                        openPopup: q,
                        mode: X,
                        selectedBonus: Y,
                        activeLeaderBoardId: x,
                        chatConfigs: G,
                        showTimer: H,
                        showJackpot: R,
                        openJackpotMeterPopup: re,
                        openBonusListPopup: le,
                        isHistory: b.isHistory,
                        isDataLoaded: f,
                        netPosition: $ && K
                    }, Z);
                return (0, g.jsxs)(o.Suspense, {
                    fallback: null,
                    children: [!L && (0, g.jsx)(o.Suspense, {
                        fallback: null,
                        children: (0, g.jsx)(B, {
                            style: i
                        })
                    }), Q ? ne ? n ? (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(E, A({
                            isLandscape: !0
                        }, pe)), (0, g.jsx)(_, A({}, pe))]
                    }) : (0, g.jsx)(k, A({}, pe)) : (0, g.jsx)(C, A({}, pe)) : t ? (0, g.jsx)(m(), A({}, ue)) : (0, g.jsx)(d(), A({}, ue))]
                })
            }
            M.defaultProps = {
                isFullScreenGames: !1,
                hasMobileFooter: !1,
                style: {},
                openMenu: function() {}
            }, M.propTypes = {
                isFullScreenGames: a().bool,
                hasMobileFooter: a().bool,
                style: a().object,
                openMenu: a().func
            };
            const N = (0, o.memo)(M)
        },
        3820(e, t, n) {
            n.d(t, {
                A: () => u
            });
            var o = n(8283),
                r = n(6653),
                i = n(2384),
                a = n(6295),
                l = n(2182),
                s = n(6337);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            const u = function() {
                var e, t, n = (0, r.useDispatch)(),
                    u = (0, l.shallowSelector)(l.selectGameHeader),
                    p = u.resources,
                    d = u.notifications,
                    f = u.bonuses,
                    m = u.selectedBonus,
                    y = u.ping,
                    h = u.balance,
                    b = u.currencyId,
                    P = u.gameId,
                    v = u.isToggleBalance,
                    g = (0, l.shallowSelector)(l.selectPartnerUIConfig),
                    S = g.hideMenu,
                    w = g.hideBalance,
                    A = g.hidePing,
                    O = g.hideClock,
                    j = (e = (0, i.useHostUrl)(null === s.gameKindName || void 0 === s.gameKindName ? void 0 : s.gameKindName.toLowerCase(), s.backUrl), t = 1, function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var o, r, i, a, l = [],
                                s = !0,
                                c = !1;
                            try {
                                if (i = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1
                                } else
                                    for (; !(s = (o = i.call(n)).done) && (l.push(o.value), l.length !== t); s = !0);
                            } catch (e) {
                                c = !0, r = e
                            } finally {
                                try {
                                    if (!s && null != n.return && (a = n.return(), Object(a) !== a)) return
                                } finally {
                                    if (c) throw r
                                }
                            }
                            return l
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[0],
                    C = (0, o.useCallback)(function() {
                        return n(l.actions.removeNotification())
                    }, []),
                    k = (0, o.useCallback)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return n(l.actions.openPopup({
                            name: e,
                            args: t
                        }))
                    }, []),
                    E = (0, o.useCallback)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return n(l.actions.closePopup({
                            name: e,
                            args: t
                        }))
                    }, []),
                    _ = (0, o.useCallback)(function(e) {
                        return n(l.actions.closeAllPopupsExcept({
                            names: e
                        }))
                    }, []),
                    B = (0, o.useCallback)(function() {
                        (0, a.redirectToRealGameGalaxsys)({
                            playerId: s.playerId,
                            partnerId: s.partnerId,
                            gameKindName: s.gameKindName,
                            referer: s.referer,
                            hostName: j
                        })
                    }, [s.playerId, s.partnerId, s.gameKindName, s.referer, j]),
                    I = {
                        demo: s.isDemo,
                        balance: h,
                        currencyId: b,
                        culture: s.culture,
                        gameId: P,
                        bonuses: f,
                        selectedBonus: m,
                        ping: y,
                        redirectToGame: B,
                        resources: p,
                        notifications: d,
                        hideMenu: S,
                        hideBalance: w,
                        hidePing: A,
                        hideClock: O
                    };
                return {
                    removeNotification: C,
                    openPopup: k,
                    closePopup: E,
                    selectedBonus: m,
                    isMobile: s.isMobile,
                    mode: s.mode,
                    props: I,
                    isToggleBalance: v,
                    onCloseAllPopupExcept: _
                }
            }
        },
        8715(e, t, n) {
            n.d(t, {
                G: () => l
            });
            const o = "remoteEntry.js",
                r = (e, t, o) => new Promise((r, i) => {
                    const a = o ? `?t=${(new Date).getTime()}` : "";
                    n.l(`${e}${a}`, e => {
                        if ("load" === e ? .type) return r();
                        const t = e ? .target ? .src,
                            n = e ? .type,
                            o = new Error;
                        o.message = `Loading script failed.\nMissing: ${t}\nEvent type: ${n}`, o.name = "ScriptExternalLoadError", i(o)
                    }, t)
                }),
                i = async () => {
                    n.S ? .default || await n.I("default")
                },
                a = async e => {
                    try {
                        e.__initialized || e.__initializing || (e.__initializing = !0, await e.init(n.S.default), e.__initialized = !0, delete e.__initializing)
                    } catch (e) {
                        console.error(e)
                    }
                },
                l = async e => {
                    let {
                        url: t,
                        scope: n,
                        module: l,
                        remoteEntryFileName: s = o,
                        bustRemoteEntryCache: c = !0
                    } = e;
                    if (window[n]) return (await window[n].get(l.startsWith("./") ? l : `./${l}`))(); {
                        if (await Promise.all([r(`${t}/${s}`, n, c), i()]), !window[n]) throw new Error(`Remote loaded successfully but ${n} could not be found! Verify that the name is correct in the Webpack configuration!`);
                        const [, e] = await Promise.all([a(window[n]), window[n].get(l.startsWith("./") ? l : `./${l}`)]);
                        return e()
                    }
                }
        }
    }
]);