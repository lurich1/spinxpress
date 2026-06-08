"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [1260], {
        4825(e, s, n) {
            n.r(s), n.d(s, {
                default: () => F
            });
            var t = n(8283),
                l = n(5556),
                i = n.n(l),
                o = n(6295),
                a = n(3387),
                r = n(2182),
                d = n(5072),
                c = n.n(d),
                u = n(7825),
                h = n.n(u),
                m = n(7659),
                g = n.n(m),
                y = n(5056),
                p = n.n(y),
                b = n(540),
                x = n.n(b),
                j = n(1113),
                f = n.n(j),
                A = n(4805),
                v = {};
            v.styleTagTransform = f(), v.setAttributes = p(), v.insert = g().bind(null, "head"), v.domAPI = h(), v.insertStyleElement = x(), c()(A.A, v);
            const C = A.A && A.A.locals ? A.A.locals : void 0;
            var S = n(4553),
                L = {};
            L.styleTagTransform = f(), L.setAttributes = p(), L.insert = g().bind(null, "head"), L.domAPI = h(), L.insertStyleElement = x(), c()(S.A, L);
            const w = S.A && S.A.locals ? S.A.locals : void 0;
            var N = n(4848),
                M = (0, t.lazy)(function() {
                    return n.e(7770).then(n.t.bind(n, 7770, 23))
                }),
                k = (0, t.lazy)(function() {
                    return n.e(7999).then(n.t.bind(n, 7999, 23))
                }),
                P = (0, t.lazy)(function() {
                    return n.e(4840).then(n.t.bind(n, 4840, 23))
                }),
                T = (0, o.getIsMobile)(),
                B = "".concat(a.CDN_URL, "/images/global/").concat(T ? "mobile" : "desktop", "/underconstruction.webp"),
                I = T ? C : w;

            function O(e) {
                var s = e.className,
                    l = e.style,
                    i = e.children,
                    o = (0, r.shallowSelector)(r.selectFallBackInfo),
                    a = o.isExpired,
                    d = o.isDisconnected,
                    c = o.underConstruction,
                    u = o.isDeactivated,
                    h = (0, r.shallowSelector)(r.selectResources),
                    m = h.strWaitingForInternetConnection,
                    g = h.strSessionExpired;
                return (0, t.useEffect)(function() {
                    n.e(7770).then(n.t.bind(n, 7770, 23))
                }, []), (0, N.jsx)("div", {
                    className: "".concat(I.gameLayout, " ").concat(s),
                    children: u || null != c && c.show ? (0, N.jsx)(k, {
                        url: B,
                        startTime: null == c ? void 0 : c.startTime,
                        endTime: null == c ? void 0 : c.endTime,
                        resources: h,
                        styles: l.underConstruction
                    }) : a ? (0, N.jsx)(P, {
                        text: g
                    }) : d ? (0, N.jsx)(M, {
                        text: m
                    }) : (0, N.jsx)("div", {
                        className: I.gameCenter,
                        children: i
                    })
                })
            }
            const F = (0, t.memo)(O);
            O.defaultProps = {
                className: "",
                style: {
                    loader: {},
                    underConstruction: {}
                },
                children: null
            }, O.propTypes = {
                className: i().string,
                style: i().shape({
                    loader: i().object,
                    underConstruction: i().object
                }),
                children: i().oneOfType([i().element, i().array])
            }
        },
        1259(e, s, n) {
            n.d(s, {
                A: () => r
            });
            var t = n(5556),
                l = n.n(t),
                i = n(8874),
                o = n(4848),
                a = (0, i.default)("div").withConfig({
                    componentId: "sc-12omhix-0"
                })(["position:relative;height:43.1875em;flex:0 0 43.1875em;padding:1em 0.4375em 1em 0.9375em;border-radius:1em;background:var(--mainBackground);border:1px solid;border-color:var(--mainLayoutBorderColor);"]);

            function r(e) {
                var s = e.style,
                    n = e.children;
                return (0, o.jsx)(a, {
                    style: s.gameAsideInner,
                    children: n
                })
            }
            r.defaultProps = {
                children: null,
                style: {}
            }, r.propTypes = {
                children: l().element,
                style: l().object
            }
        },
        1519(e, s, n) {
            n.r(s), n.d(s, {
                default: () => u
            });
            var t = n(5556),
                l = n.n(t),
                i = n(892),
                o = n.n(i),
                a = n(3387),
                r = n(661),
                d = n(1259),
                c = n(4848);

            function u(e) {
                var s = e.gameName,
                    n = e.logoUrlAddition,
                    t = e.style,
                    l = e.children,
                    i = n || "".concat(s, "/desktop/logo.webp"),
                    u = "".concat(a.CDN_URL, "/images/").concat(i);
                return (0, c.jsxs)(r.A, {
                    style: t,
                    children: [(0, c.jsx)(o(), {
                        logoImg: u,
                        gameKindName: s,
                        styles: t.logoContainer
                    }), (0, c.jsx)(d.A, {
                        style: t,
                        children: l
                    })]
                })
            }
            u.defaultProps = {
                gameName: "",
                logoUrlAddition: "",
                style: {
                    logoContainer: {},
                    logo: {},
                    gameAsideInner: {}
                },
                children: null
            }, u.propTypes = {
                gameName: l().string,
                logoUrlAddition: l().string,
                style: l().object,
                children: l().element
            }
        },
        6750(e, s, n) {
            n.r(s), n.d(s, {
                default: () => c
            });
            var t = n(5556),
                l = n.n(t),
                i = n(4458),
                o = n(661),
                a = n(1259),
                r = n(2093),
                d = n(4848);

            function c(e) {
                var s = e.style,
                    n = e.children;
                return (0, d.jsxs)(o.A, {
                    style: s,
                    children: [(0, d.jsx)(i.A, {
                        style: s
                    }), (0, d.jsxs)(a.A, {
                        style: s,
                        children: [(0, d.jsx)(r.A, {
                            style: s.chatAside
                        }), n]
                    })]
                })
            }
            c.defaultProps = {
                children: null,
                style: {
                    chatAside: {}
                }
            }, c.propTypes = {
                children: l().element,
                style: l().object
            }
        },
        1260(e, s, n) {
            n.r(s), n.d(s, {
                default: () => O
            });
            var t = n(8283),
                l = n(6653),
                i = n(8874),
                o = n(1931),
                a = n.n(o),
                r = n(3387),
                d = n(6295),
                c = n(6337),
                u = n(4825),
                h = n(1519),
                m = n(6750),
                g = n(2182),
                y = n(5772),
                p = n(3125),
                b = n(1620),
                x = n(3745),
                j = n(851),
                f = n(7649),
                A = n(463),
                v = n(1264),
                C = n(4458),
                S = n(2093),
                L = n(1352),
                w = n(7260),
                N = (n(8466), n(4848)),
                M = (0, t.lazy)(function() {
                    return n.e(5308).then(n.t.bind(n, 5308, 23))
                }),
                k = (0, t.lazy)(function() {
                    return n.e(4003).then(n.bind(n, 4003))
                }),
                P = (0, t.lazy)(function() {
                    return n.e(1644).then(n.t.bind(n, 1644, 23))
                }),
                T = (0, t.lazy)(function() {
                    return n.e(8874).then(n.t.bind(n, 6493, 23))
                }),
                B = (0, t.lazy)(function() {
                    return Promise.all([n.e(1048), n.e(4023)]).then(n.bind(n, 4023))
                }),
                I = i.default.div.withConfig({
                    componentId: "sc-umxpie-0"
                })(["position:relative;overflow:", ";width:100%;height:", ";"], c.isMobile ? "visible" : "hidden", c.isMobile ? "auto" : "100%");

            function O(e) {
                var s = e.LeftPane,
                    n = e.RightPane,
                    i = e.MobilePane,
                    o = e.style,
                    d = e.socketListeners,
                    O = e.children,
                    F = e.version,
                    z = e.gameName,
                    G = e.className,
                    U = e.mappedGlobalHistory,
                    V = e.settingsConfig,
                    E = e.isToggleBalance,
                    R = e.isWaterFall,
                    H = void 0 === R || R,
                    K = e.logoUrlAddition,
                    D = e.mediaList,
                    _ = e.isFullScreenGames,
                    W = void 0 !== _ && _,
                    q = e.hasMobileFooter,
                    Z = void 0 !== q && q,
                    Q = e.isNinjaLoader,
                    J = e.isPartnerLogo,
                    X = e.onlyBaseRightAside,
                    Y = e.gameAnalyticScripts,
                    $ = e.selectShowOutsidePopups,
                    ee = e.settingsServiceAfterLoading,
                    se = void 0 === ee || ee,
                    ne = (0, w.g)({
                        mediaList: D,
                        version: F,
                        gameName: z,
                        gameAnalyticScripts: Y,
                        socketListeners: d
                    }),
                    te = ne.setIsCssVariablesLoaded,
                    le = ne.setIsContentLoaded,
                    ie = ne.menuOpened,
                    oe = ne.blurred,
                    ae = ne.showBackdrop,
                    re = ne.openPopup,
                    de = ne.getHashCode,
                    ce = ne.getBetHistory,
                    ue = ne.isDeactivated,
                    he = ne.gameAssetsAreLoading,
                    me = ne.handleMenuClick,
                    ge = ne.mediaIsLoaded,
                    ye = ne.openTab,
                    pe = ne.isBaseDataLoaded,
                    be = ne.setSocketListeners,
                    xe = (0, t.useRef)(null),
                    je = (0, g.shallowSelector)(g.selectLauncherGlassData),
                    fe = je.resources,
                    Ae = je.selectedTab,
                    ve = je.sound,
                    Ce = je.music,
                    Se = (0, l.useSelector)(g.selectShowPromotionsPopupService),
                    Le = pe && !he,
                    we = (0, t.useCallback)(function() {
                        return ye(r.BASE_POPUP_NAMES.RULES)
                    }, []);
                return (0, N.jsxs)(L.A, {
                    setIsCssVariablesLoaded: te,
                    children: [pe && !he || ue ? se && V && (0, N.jsx)(A.A, {
                        configs: V
                    }) : (0, N.jsx)(a(), {
                        isMobile: c.isMobile,
                        setContentLoaded: le,
                        styles: o.loader,
                        isNinjaLoader: Q,
                        isPartnerLogo: J
                    }), (0, N.jsxs)(t.Suspense, {
                        fallback: null,
                        children: [D && (0, N.jsx)(T, {
                            images: null == D ? void 0 : D.images,
                            videos: null == D ? void 0 : D.videos,
                            onLoaded: ge
                        }), !se && V && (0, N.jsx)(A.A, {
                            configs: V
                        }), (0, N.jsx)(b.ConnectionService, {
                            gameName: z,
                            socketListeners: be
                        }), pe && (0, N.jsxs)(u.default, {
                            style: o,
                            className: G,
                            children: [c.isMobile && (0, N.jsxs)(N.Fragment, {
                                children: [(0, N.jsx)("div", {
                                    className: oe ? "blurred" : "",
                                    children: (0, N.jsx)(t.Suspense, {
                                        fallback: null,
                                        children: (0, N.jsx)(B, {
                                            openTab: ye,
                                            menuRef: xe,
                                            style: o,
                                            isMobileMenuOpen: ie,
                                            selectedTab: Ae
                                        })
                                    })
                                }), (0, N.jsx)("div", {
                                    children: (0, N.jsx)(C.A, {
                                        style: o,
                                        openMenu: me,
                                        isToggleBalance: E,
                                        isFullScreenGames: W,
                                        hasMobileFooter: Z,
                                        isGlass: !0
                                    })
                                })]
                            }), (0, N.jsx)(t.Suspense, {
                                fallback: null,
                                children: !c.isMobile && s && (0, N.jsx)(h.default, {
                                    logoUrlAddition: K,
                                    gameName: z,
                                    style: o,
                                    children: (0, N.jsx)(I, {
                                        style: o.sliderViewContainer,
                                        children: (0, N.jsx)(s, {
                                            style: o
                                        })
                                    })
                                })
                            }), ie && (0, N.jsx)(t.Suspense, {
                                fallback: null,
                                children: (0, N.jsx)(P, {
                                    styles: o.backdrop,
                                    onClick: me
                                })
                            }), (0, N.jsx)("div", {
                                className: Ae && "game" !== Ae ? "hide" : "",
                                style: o.childrenContainer,
                                children: O
                            }), !c.isMobile && (W ? (0, N.jsxs)(N.Fragment, {
                                children: [(0, N.jsx)(C.A, {
                                    isFullScreenGames: !0
                                }), (0, N.jsx)(S.A, {
                                    style: o.chatAside
                                })]
                            }) : n && (0, N.jsx)(m.default, {
                                style: o,
                                children: (0, N.jsx)(I, {
                                    style: o.sliderViewContainer,
                                    children: (0, N.jsx)(n, {
                                        style: o
                                    })
                                })
                            })), (0, N.jsx)(t.Suspense, {
                                fallback: null,
                                children: !c.isMobile && X && (0, N.jsx)(m.default, {
                                    style: o
                                })
                            }), c.isMobile && H && i ? (0, N.jsx)(I, {
                                style: o.sliderViewContainer,
                                children: (0, N.jsx)(t.Suspense, {
                                    fallback: null,
                                    children: (0, N.jsx)(i, {
                                        style: o
                                    })
                                })
                            }) : (0, N.jsxs)(N.Fragment, {
                                children: ["bets" === Ae || "statistics" === Ae ? (0, N.jsx)(I, {
                                    style: o.sliderViewContainer,
                                    children: (0, N.jsx)(i, {
                                        style: o,
                                        selectedTab: Ae
                                    })
                                }) : null, (0, N.jsxs)(t.Suspense, {
                                    fallback: null,
                                    children: ["settings" === Ae && (0, N.jsx)(M, {
                                        haveCustomization: (0, c.getSettingsMenuHaveCustomization)(),
                                        resources: fe,
                                        sound: ve,
                                        music: Ce,
                                        setSound: A.W.setOnSound,
                                        setMusic: A.W.setOnMusic,
                                        openRules: we,
                                        styles: o.settings,
                                        openPopup: re
                                    }), c.isMobile && !H && (0, N.jsx)(k, {
                                        theme: "glass",
                                        selectedTab: Ae,
                                        style: o,
                                        currentGameName: c.gameKindName,
                                        resources: fe
                                    })]
                                })]
                            })]
                        }), (0, N.jsx)(j.A, {
                            menuRef: xe,
                            style: o,
                            mappedGlobalHistory: U,
                            getHashCode: de,
                            getBetHistory: ce,
                            isGameLoaded: Le,
                            selectShowOutsidePopups: $
                        }), Se && Le && (0, N.jsx)(f.A, {
                            style: o,
                            selectShowOutsidePopups: $
                        }), (0, N.jsx)(v.A, {
                            styles: o.promotionNotificationWrapper
                        }), (0, N.jsx)(p.A, {
                            style: o,
                            theme: "glass"
                        }), (0, N.jsx)(x.A, {}), ae && (0, N.jsx)(P, {}), (0, N.jsx)(y.A, {
                            styles: o,
                            selectShowOutsidePopups: $
                        })]
                    })]
                })
            }
            c.isMobile && c.isTablet && (0, d.replaceIsMobileQueryAndAssignLocation)()
        },
        4553(e, s, n) {
            n.d(s, {
                A: () => a
            });
            var t = n(1601),
                l = n.n(t),
                i = n(6314),
                o = n.n(i)()(l());
            o.push([e.id, ".LZBL9Xbl_iElgVjxAhJn{display:flex;flex-direction:row;height:50.625em;width:89em;margin:auto;position:relative}.m39UUZV0xKd1O6Ofg1qt{height:100%}", ""]), o.locals = {
                gameCenter: "LZBL9Xbl_iElgVjxAhJn",
                gameLayout: "m39UUZV0xKd1O6Ofg1qt"
            };
            const a = o
        },
        4805(e, s, n) {
            n.d(s, {
                A: () => a
            });
            var t = n(1601),
                l = n.n(t),
                i = n(6314),
                o = n.n(i)()(l());
            o.push([e.id, ".cMnblziyKBAjFO7y0HNB{color:#fff;width:100%;height:100%;padding:calc(env(safe-area-inset-top) + 2.75em) 0 env(safe-area-inset-bottom)}.IvCnwQ5KzFVqbGS7Gn23{width:100%;height:100%}", ""]), o.locals = {
                gameLayout: "cMnblziyKBAjFO7y0HNB",
                gameCenter: "IvCnwQ5KzFVqbGS7Gn23"
            };
            const a = o
        }
    }
]);