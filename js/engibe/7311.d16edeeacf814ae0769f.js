"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [687, 7311], {
        687(e, n, t) {
            t.r(n), t.d(n, {
                BaseHubMethodNames: () => i,
                BaseHubRequests: () => a,
                BaseHubResponseModels: () => r,
                types: () => o,
                useBaseRequests: () => s
            });
            var o = {
                    string: "",
                    number: 0,
                    array: [],
                    object: {},
                    bool: !1,
                    date: new Date
                },
                i = {
                    Ping: "Ping",
                    GetBalance: "GetBalance",
                    GetInitialState: "GetInitialState",
                    BonusHistory: "BonusHistory",
                    BonusInfo: "BonusInfo",
                    ExpiredToken: "ExpiredToken",
                    Deactivated: "Deactivated",
                    ValidationError: "ValidationError",
                    MockConnectionInitialized: "MockConnectionInitialized",
                    GetHistory: "GetHistory",
                    History: "History",
                    GetPayTable: "GetPayTable",
                    UnderConstruction: "UnderConstruction"
                },
                a = function() {
                    return {
                        Ping: function() {
                            this.name = i.Ping
                        },
                        GetBalance: function(e) {
                            var n = e.token,
                                t = void 0 === n ? 0 : n;
                            this.name = i.GetBalance, this.model = {
                                token: t
                            }, this.messagePackModel = this.model
                        },
                        GetInitialState: function(e) {
                            var n = e.activeGameId,
                                t = void 0 === n ? 0 : n,
                                o = e.token,
                                a = void 0 === o ? "" : o,
                                s = e.isDemo,
                                r = void 0 !== s && s,
                                u = e.partnerId,
                                l = void 0 === u ? 0 : u,
                                c = e.culture,
                                P = void 0 === c ? "" : c;
                            this.name = i.GetInitialState, this.model = {
                                activeGameId: t,
                                token: a,
                                isDemo: r,
                                partnerId: l,
                                culture: P
                            }, this.messagePackModel = this.model
                        },
                        BonusInfo: function(e) {
                            var n = e.token,
                                t = void 0 === n ? "" : n,
                                o = e.activeGameId,
                                a = void 0 === o ? 0 : o;
                            this.name = i.BonusInfo, this.model = {
                                token: t,
                                activeGameId: a
                            }, this.messagePackModel = this.model
                        },
                        GetHistory: function(e) {
                            var n = e.token,
                                t = void 0 === n ? "" : n,
                                o = e.partnerId,
                                a = void 0 === o ? "" : o;
                            this.name = i.GetHistory, this.model = {
                                token: t,
                                partnerId: a
                            }, this.messagePackModel = this.model
                        },
                        GetPayTable: function(e) {
                            e.token;
                            var n = e.partnerId,
                                t = void 0 === n ? "" : n;
                            this.name = i.GetPayTable, this.model = {
                                partnerId: t
                            }, this.messagePackModel = this.model
                        }
                    }
                };

            function s(e, n) {
                var t = a(),
                    o = e || {},
                    i = o.token,
                    s = o.activeGameId,
                    r = o.isDemo,
                    u = o.partnerId,
                    l = o.culture;
                return {
                    getPing: function() {
                        var e = new t.Ping;
                        n(e)
                    },
                    getBonusInfo: function() {
                        var e = new t.BonusInfo({
                            token: i,
                            activeGameId: s
                        });
                        n(e)
                    },
                    getInitialState: function() {
                        var e = new t.GetInitialState({
                            activeGameId: s,
                            token: i,
                            isDemo: r,
                            partnerId: u,
                            culture: l
                        });
                        n(e)
                    },
                    getHistory: function() {
                        var e = new t.GetHistory({
                            token: i,
                            partnerId: u
                        });
                        n(e)
                    },
                    getPayTable: function() {
                        var e = new t.GetPayTable({
                            partnerId: u
                        });
                        n(e)
                    }
                }
            }
            var r = {
                Ping: {},
                GetBalance: {
                    balance: 0
                },
                Deactivated: {
                    partnerIds: []
                },
                ValidationError: {
                    id: void 0
                },
                UnderConstruction: {
                    underConstructionInfo: []
                }
            }
        },
        8713(e, n, t) {
            t.r(n), t.d(n, {
                checkAutoBetValidation: () => m,
                handleGetPayTable: () => _,
                handleOpenChatPopup: () => E,
                handleOpenRulesPopup: () => A,
                handleSoundsClickController: () => O,
                openPopupDetails: () => d
            });
            var o = t(6295),
                i = t(3387),
                a = t(2182),
                s = t(6337),
                r = t(6723),
                u = t(687),
                l = t(1620),
                c = t(8517);

            function P(e) {
                return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, P(e)
            }

            function S(e, n, t) {
                var o;
                return o = function(e) {
                    if ("object" != P(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var t = n.call(e, "string");
                        if ("object" != P(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(n), (n = "symbol" == P(o) ? o : o + "") in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            var O = function() {
                    return function(e, n) {
                        var t = n().services.settings,
                            o = t.sound,
                            i = t.music[c.IS_ON] || o[c.IS_ON];
                        e(a.actions.setSoundSetting(S({}, c.IS_ON, !i))), e(a.actions.setMusicSetting(S({}, c.IS_ON, !i)))
                    }
                },
                d = function(e, n, t, o, u) {
                    (0, r.N)(), !s.isMobile && e(a.actions.openPopup({
                        name: i.BASE_POPUP_NAMES.MAIN_MENU,
                        args: {
                            current: "promotions"
                        }
                    })), e(a.actions.openPopup({
                        name: i.BASE_POPUP_NAMES.PROMOTIONS,
                        args: {
                            promotionType: n,
                            tabList: t,
                            id: o,
                            isFromDetails: !0,
                            styles: u
                        }
                    }))
                },
                _ = function() {
                    var e = (0, o.getParamsFromUrl)();
                    (0, (0, u.useBaseRequests)(e, l.requestToServer).getPayTable)()
                },
                A = function() {
                    return function(e) {
                        e(a.actions.openPopup({
                            name: i.BASE_POPUP_NAMES.RULES
                        })), e(a.actions.closePopupsList({
                            names: [i.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, i.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, i.BASE_POPUP_NAMES.GLOBAL_HISTORY, i.BASE_POPUP_NAMES.PROMOTIONS]
                        }))
                    }
                },
                E = function() {
                    return function(e) {
                        e(a.actions.openPopup({
                            name: i.BASE_POPUP_NAMES.CHAT_POPUP
                        }))
                    }
                },
                m = function(e) {
                    var n = e.checkValidation,
                        t = e.dispatch,
                        i = e.onCancel,
                        s = e.externalAutoPlayOptions,
                        r = e.win,
                        u = e.bet;
                    if (n) {
                        var l = s[0],
                            c = l.wins,
                            P = l.bets,
                            S = l.totalLose,
                            O = l.totalWin,
                            d = l.singleWin;
                        if (S.checked || O.checked || d.checked) {
                            var _ = (0, o.sumWithPrecision)(c, r),
                                A = (0, o.sumWithPrecision)(P, u);
                            S.checked && S.number <= +A - +_ || O.checked && O.number <= +_ || d.checked && d.number <= r ? (t(a.actions.resetExternalOptions()), i()) : t(a.actions.updateExternalOptions({
                                wins: _,
                                bets: A,
                                singleTotalWin: r
                            }))
                        }
                    } else t(a.actions.resetExternalOptions())
                }
        },
        7311(e, n, t) {
            t.r(n), t.d(n, {
                default: () => p
            });
            var o = t(5556),
                i = t.n(o),
                a = t(8283),
                s = t(6653),
                r = t(1703),
                u = t.n(r),
                l = t(3387),
                c = t(5114),
                P = t.n(c),
                S = t(2182),
                O = t(6337),
                d = t(1663),
                _ = t(2593),
                A = t(8713),
                E = t(4848),
                m = (0, a.lazy)(function() {
                    return t.e(1048).then(t.t.bind(t, 1048, 23))
                }),
                B = function(e) {
                    var n = e.style,
                        t = e.getBetHistory,
                        o = e.menuRef,
                        i = e.isSlotSettingsUsed,
                        r = (0, s.useDispatch)(),
                        c = (0, S.shallowSelector)(S.selectPartnerUIConfig),
                        B = c.hideHistory,
                        p = c.hideBonusHistory,
                        I = c.hideLeaderboard,
                        f = c.hidePromotions,
                        N = c.hideMusic,
                        M = (0, S.shallowSelector)(S.selectGameTypeNames),
                        h = P().get("gameType"),
                        v = (0, S.shallowSelector)(S.selectResources),
                        b = (0, a.useCallback)(function(e) {
                            return r(S.actions.closePopupsList({
                                names: e
                            }))
                        }, []),
                        y = (0, S.shallowSelector)(S.selectSettings),
                        U = y.sound,
                        R = y.music,
                        g = y.isAnimate,
                        H = (0, s.useSelector)(S.selectAnimationToggle),
                        k = (0, s.useSelector)(S.selectWithSeparatedSounds),
                        T = (0, a.useCallback)(function(e, n) {
                            r(S.actions.openPopup({
                                name: e,
                                args: n
                            }))
                        }, []),
                        G = (0, a.useCallback)(function() {
                            T(l.BASE_POPUP_NAMES.RULES), b([l.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, l.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, l.BASE_POPUP_NAMES.GLOBAL_HISTORY, l.BASE_POPUP_NAMES.PROMOTIONS])
                        }, []),
                        L = (0, a.useCallback)(function() {
                            if (i) r((0, A.handleSoundsClickController)());
                            else {
                                var e = R.isOn || U.isOn;
                                d.settings.setOnSound(!e), d.settings.setOnMusic(!e), U.isLoaded && (null === u() || void 0 === u() || u().setItem("isSoundOn", e)), R.isLoaded && (null === u() || void 0 === u() || u().setItem("isMusicOn", e))
                            }
                        }, [R, U]),
                        C = (0, a.useCallback)(function() {
                            var e = !g;
                            r(S.actions.changeIsAnimate(e)), null === u() || void 0 === u() || u().setItem("isAnimationOn", e)
                        }, [g]),
                        D = (0, a.useCallback)(function() {
                            b([l.BASE_POPUP_NAMES.MAIN_MENU, l.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, l.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, l.BASE_POPUP_NAMES.CHECK_HASH_CODE, l.BASE_POPUP_NAMES.ABOUT_HASH_CODE, l.BASE_POPUP_NAMES.RULES, l.BASE_POPUP_NAMES.GLOBAL_HISTORY, l.BASE_POPUP_NAMES.PROMOTIONS])
                        }, []),
                        w = (0, a.useCallback)(function() {
                            t(), b([l.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, l.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, l.BASE_POPUP_NAMES.RULES, l.BASE_POPUP_NAMES.PROMOTIONS]), T(l.BASE_POPUP_NAMES.GLOBAL_HISTORY)
                        }, []),
                        Y = (0, a.useCallback)(function() {
                            b([l.BASE_POPUP_NAMES.GLOBAL_HISTORY, l.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, l.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, l.BASE_POPUP_NAMES.RULES]), T(l.BASE_POPUP_NAMES.PROMOTIONS)
                        }, []),
                        W = (0, a.useCallback)(function() {
                            (0, _.W)(), b([l.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, l.BASE_POPUP_NAMES.CHECK_HASH_CODE, l.BASE_POPUP_NAMES.ABOUT_HASH_CODE, l.BASE_POPUP_NAMES.GLOBAL_HISTORY, l.BASE_POPUP_NAMES.RULES, l.BASE_POPUP_NAMES.PROMOTIONS]), T(l.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY)
                        }, []);
                    return (0, E.jsx)(m, {
                        menuRef: o,
                        onCloseMainMenu: D,
                        onOpenWebGlobalHistory: w,
                        onOpenWebPromotions: Y,
                        onOpenWebGlobalBonusHistory: W,
                        showHistory: !B && !!Number(O.playerId),
                        showBonusHistory: !p && !B && !!Number(O.playerId),
                        showPromotions: !!Number(O.playerId) && !f,
                        showLeaderboard: !I && !!Number(O.playerId),
                        resources: v,
                        gameType: h,
                        currentGameName: null === O.gameKindName || void 0 === O.gameKindName ? void 0 : O.gameKindName.toLowerCase(),
                        similarGameNames: M,
                        animationToggle: H,
                        styles: n.mainMenu,
                        handleSoundsClick: L,
                        handleSoundClick: function() {
                            d.settings.setOnSound(!U.isOn), null === u() || void 0 === u() || u().setItem("isSoundOn", U.isOn)
                        },
                        handleMusicClick: function() {
                            d.settings.setOnMusic(!R.isOn), null === u() || void 0 === u() || u().setItem("isMusicOn", R.isOn)
                        },
                        handleAnimationOnClick: C,
                        isAnimationOn: g,
                        openRulesPopup: G,
                        sound: U,
                        music: R,
                        hideMusic: N,
                        withSeparatedSounds: k
                    })
                };
            B.defaultProps = {
                menuRef: null,
                style: {},
                getBetHistory: function() {}
            }, B.propTypes = {
                menuRef: i().node,
                style: i().object,
                getBetHistory: i().func
            };
            const p = (0, a.memo)(B)
        }
    }
]);