"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [632, 8517], {
        8517(e, t, n) {
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.r(t), n.d(t, {
                IS_MUSIC_ON: () => P,
                IS_ON: () => d,
                IS_SOUND_ON: () => C,
                MAX_AUTOBET: () => s,
                MAX_AUTOCASHOUT: () => _,
                REMOTE_CLIENT_URLS: () => T,
                defaultAutoPlayOptions: () => L,
                isFeatureMessagePackEnabled: () => u,
                isMessagePackEnabled: () => A
            });
            var i, o = (0, n(6295).getParamsFromUrl)(),
                a = o.isMessagePackEnabled,
                l = o.isFeatureMessagePackEnabled,
                c = o.isHistory,
                s = 100,
                _ = 699999.99,
                A = "true" === (null == a ? void 0 : a.toLowerCase()),
                u = "true" === (null == l ? void 0 : l.toLowerCase()),
                E = c ? "History" : "",
                C = "isSoundOn".concat(E),
                P = "isMusicOn".concat(E),
                d = "isOn".concat(E),
                T = (i = {}, Object.entries({
                    leaderboard: "REACT_APP_LEADERBOARD_CLIENT_URL",
                    jackpot: "REACT_APP_JACKPOT_CLIENT_URL",
                    chat: "REACT_APP_CHAT_CLIENT_URL",
                    rules: "REACT_APP_RULES_CLIENT_URL",
                    cashback: "REACT_APP_CASHBACK_CLIENT_URL",
                    moneyland: "REACT_APP_MONEYLAND_CLIENT_URL",
                    banksystem: "REACT_APP_BANKSYSTEM_CLIENT_URL",
                    matchday: "REACT_APP_MATCHDAY_CLIENT_URL",
                    missions: "REACT_APP_MISSIONS_CLIENT_URL",
                    crashback: "REACT_APP_CRASHBACK_CLIENT_URL",
                    slotEngine: "REACT_APP_SLOT_ENGINE_CLIENT_URL"
                }).forEach(function(e) {
                    var t, n, o, a, l = (a = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(o = e) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var r, i, o, a, l = [],
                                    c = !0,
                                    s = !1;
                                try {
                                    if (o = (n = n.call(e)).next, 0 === t) {
                                        if (Object(n) !== n) return;
                                        c = !1
                                    } else
                                        for (; !(c = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); c = !0);
                                } catch (e) {
                                    s = !0, i = e
                                } finally {
                                    try {
                                        if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                                    } finally {
                                        if (s) throw i
                                    }
                                }
                                return l
                            }
                        }(o, a) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return r(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                            }
                        }(o, a) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        c = l[0],
                        s = l[1];
                    i[c] = (t = s, ((n = new URL(window.location.href).origin).includes("localhost") ? {
                        REACT_APP_LAUNCHER_BACKEND_API_URL: "https://lobby-api.jdduuee-54rg78cw.com",
                        REACT_APP_ENGINE_CLIENT_URL: "/gx-engine-client",
                        REACT_APP_LEADERBOARD_CLIENT_URL: "/gx-leaderboard-client",
                        REACT_APP_CHAT_CLIENT_URL: "/gx-chat-client",
                        REACT_APP_CASHBACK_CLIENT_URL: "/gx-cashback-client",
                        REACT_APP_RULES_CLIENT_URL: "/gx-rules-client",
                        REACT_APP_MONEYLAND_CLIENT_URL: "/gx-moneyland-client",
                        REACT_APP_BANKSYSTEM_CLIENT_URL: "/gx-banksystem-client",
                        REACT_APP_SLOT_ENGINE_CLIENT_URL: "/gsl-engine-client",
                        REACT_APP_MISSIONS_CLIENT_URL: "/gx-missions-client",
                        REACT_APP_JACKPOT_CLIENT_URL: "/gx-jackpot-client",
                        REACT_APP_CRASHBACK_CLIENT_URL: "/gx-crashback-client",
                        REACT_APP_LOBBY_SERVICE_PATH: "/gx-lobby-service",
                        REACT_APP_MATCHDAY_CLIENT_URL: "/gx-matchday-client",
                        IS_DEVELOPMENT: !1
                    }.REACT_APP_DOMAIN : n) + {
                        REACT_APP_LAUNCHER_BACKEND_API_URL: "https://lobby-api.jdduuee-54rg78cw.com",
                        REACT_APP_ENGINE_CLIENT_URL: "/gx-engine-client",
                        REACT_APP_LEADERBOARD_CLIENT_URL: "/gx-leaderboard-client",
                        REACT_APP_CHAT_CLIENT_URL: "/gx-chat-client",
                        REACT_APP_CASHBACK_CLIENT_URL: "/gx-cashback-client",
                        REACT_APP_RULES_CLIENT_URL: "/gx-rules-client",
                        REACT_APP_MONEYLAND_CLIENT_URL: "/gx-moneyland-client",
                        REACT_APP_BANKSYSTEM_CLIENT_URL: "/gx-banksystem-client",
                        REACT_APP_SLOT_ENGINE_CLIENT_URL: "/gsl-engine-client",
                        REACT_APP_MISSIONS_CLIENT_URL: "/gx-missions-client",
                        REACT_APP_JACKPOT_CLIENT_URL: "/gx-jackpot-client",
                        REACT_APP_CRASHBACK_CLIENT_URL: "/gx-crashback-client",
                        REACT_APP_LOBBY_SERVICE_PATH: "/gx-lobby-service",
                        REACT_APP_MATCHDAY_CLIENT_URL: "/gx-matchday-client",
                        IS_DEVELOPMENT: !1
                    }[t])
                }), i),
                L = {
                    betAmount: {
                        number: 0,
                        checked: !0
                    },
                    totalLose: {
                        number: 0,
                        checked: !1
                    },
                    totalWin: {
                        number: 0,
                        checked: !1
                    },
                    singleWin: {
                        number: 0,
                        checked: !1
                    },
                    wins: 0,
                    bets: 0,
                    singleTotalWin: 0
                }
        },
        8914(e, t, n) {
            n.d(t, {
                w: () => r
            });
            var r = {
                jackpotActive: !1,
                stateOfPopups: {
                    isAboutPopupOpen: !1,
                    isMeterPopupOpen: !1,
                    isWinPopupOpen: !1
                },
                data: {
                    details: {
                        levels: void 0,
                        updateNumber: 0
                    },
                    levels: void 0,
                    otherPrize: void 0
                },
                prizes: [],
                prizesAknowledgedIndex: 0,
                otherPrizes: [],
                isDataError: !1
            }
        },
        632(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var r = n(8517),
                i = n(8914);

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        var r, i, a, l;
                        r = e, i = t, a = n[t], l = function(e) {
                            if ("object" != o(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != o(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(i), (i = "symbol" == o(l) ? l : l + "") in r ? Object.defineProperty(r, i, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[i] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const c = {
                partnerInfo: {
                    partnerId: 0,
                    coinRate: 0,
                    currencyId: "",
                    currencyCode: "",
                    precision: 0,
                    minBet: 0,
                    maxBet: 0,
                    maxWin: 0,
                    defaultBet: 0,
                    quickBets: [0, 0, 0, 0, 0],
                    gameTypeName: "",
                    gameTypeNames: [""],
                    partnerInstanceName: "",
                    mode: 0,
                    referer: "",
                    backUrl: "",
                    isDeactivated: !1
                },
                gameInfo: {
                    gameId: 0
                },
                playerInfo: {
                    netPosition: null,
                    playerId: 0,
                    ping: 0,
                    token: "",
                    culture: "",
                    isDisconnected: null,
                    isDemo: null,
                    isExpired: null,
                    isMobile: null,
                    globalHistory: [],
                    globalBonusHistory: [],
                    hashCode: "",
                    balance: 0,
                    initialBet: 0,
                    bet: 0,
                    stakeId: 0,
                    possibleWin: null,
                    win: null,
                    stepList: [],
                    pressed: !1,
                    demoStakeId: 0,
                    hostName: ""
                },
                externalAutoPlayOptions: {
                    0: l({}, r.defaultAutoPlayOptions),
                    1: l({}, r.defaultAutoPlayOptions)
                },
                uiConfigs: {},
                isDataLoaded: !1,
                isUrlLoaded: !1,
                reloadSite: !1,
                bonusInfo: {},
                history: [],
                underConstruction: {},
                resources: "",
                mobileSelectedTab: "game",
                services: {
                    popups: {},
                    bonuses: {
                        isBonusNotificationOpen: null,
                        enabled: null,
                        disabledSwitcher: !1,
                        selected: null,
                        list: [],
                        finishedBonuses: []
                    },
                    notifications: {
                        list: [],
                        second: 2,
                        maxLength: 2
                    },
                    connection: {
                        isConnected: !1
                    },
                    settings: {
                        sound: {
                            isLoaded: !1,
                            isOn: !1
                        },
                        music: {
                            isLoaded: !1,
                            isOn: !1
                        }
                    },
                    chat: {
                        id: 0,
                        name: "",
                        configuration: {
                            minShareCoefficient: 1e4
                        },
                        player: {
                            id: 0,
                            isBlocked: !1,
                            isInfluencer: !1,
                            nickName: "",
                            avatarUrl: "",
                            canChangeNickName: !1
                        },
                        messages: [],
                        pinnedMessages: [],
                        defaultAvatars: [],
                        emojis: []
                    },
                    cashback: {
                        id: void 0,
                        boxCount: 0,
                        fillPercentage: 0,
                        rule: ""
                    },
                    leaderBoard: {
                        showLeaderBoard: !1,
                        playerWin: [],
                        currentPlayerInfo: {},
                        activeLeaderBoard: {
                            id: null,
                            name: "",
                            players: []
                        },
                        currentLeaderBoard: {
                            id: 0,
                            name: "",
                            players: [],
                            prizes: [{
                                id: 0,
                                placeFrom: 1,
                                placeTo: 2,
                                prize: 0,
                                currencyCode: ""
                            }],
                            rules: ""
                        },
                        upcomingLeaderboards: [],
                        leaderBoardHistory: []
                    },
                    jackpot: i.w
                }
            }
        }
    }
]);