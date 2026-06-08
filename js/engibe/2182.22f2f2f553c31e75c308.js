"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2182], {
        4721(e, t, n) {
            n.d(t, {
                mF: () => d,
                aK: () => f,
                lz: () => v
            });
            var r = n(1551),
                o = n(1703),
                i = n.n(o);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        var r, o, i, s;
                        r = e, o = t, i = n[t], s = function(e) {
                            if ("object" != a(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != a(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == a(s) ? s : s + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var d = {
                    openBonusNotification: function(e, t) {
                        var n = t.payload;
                        e.services.bonuses.isBonusNotificationOpen = n
                    },
                    addBonusList: function(e, t) {
                        var n = t.payload;
                        e.services.bonuses.list = n
                    },
                    addBonusesNotificationList: function(e, t) {
                        var n, r = t.payload,
                            o = (null === (n = e.services) || void 0 === n || null === (n = n.bonuses) || void 0 === n ? void 0 : n.notificationList) || [];
                        e.services.bonuses.notificationList = [].concat(l(o), l(r))
                    },
                    addOrUpdateBonusById: function(e, t) {
                        var n, r = t.payload,
                            o = null === (n = e.services.bonuses) || void 0 === n || null === (n = n.list) || void 0 === n ? void 0 : n.findIndex(function(e) {
                                return (null == e ? void 0 : e.id) === (null == r ? void 0 : r.id)
                            });
                        if (-1 !== o) {
                            e.services.bonuses.list[o] = r;
                            var a = i().getItem("active_bonus_id"); + a && +a === e.services.bonuses.list[o].id && (e.services.bonuses.selected = e.services.bonuses.list[o])
                        } else e.services.bonuses.list.push(r)
                    },
                    removeBonusById: function(e, t) {
                        var n, r, o, a, s, c, l = t.payload,
                            u = l.playerBonusId,
                            d = l.totalWin,
                            p = l.initialValue,
                            f = null === (n = e.services) || void 0 === n || null === (n = n.bonuses) || void 0 === n || null === (n = n.selected) || void 0 === n ? void 0 : n.id,
                            v = null === (r = e.services.bonuses) || void 0 === r || null === (r = r.list) || void 0 === r ? void 0 : r.find(function(e) {
                                return e.id === u
                            });
                        null !== (o = e.services.bonuses) && void 0 !== o && null !== (o = o.finishedBonuses) && void 0 !== o && o.length || (e.services.bonuses.finishedBonuses = []), +d > 0 && v && (v.totalWin = d, v.initialValue = p, null === (c = e.services.bonuses) || void 0 === c || c.finishedBonuses.push(v)), f === u && (e.services.bonuses.selected = null, e.services.bonuses.enabled = !1), e.services.bonuses.list = e.services.bonuses.list.filter(function(e) {
                            return e.id !== u
                        }), null !== (a = e.services.bonuses) && void 0 !== a && null !== (a = a.notificationList) && void 0 !== a && a.length && (e.services.bonuses.notificationList = e.services.bonuses.notificationList.filter(function(e) {
                            return e.id !== u
                        }), i().removeItem("bonus_id_".concat(u))), null !== (s = e.services) && void 0 !== s && null !== (s = s.bonuses) && void 0 !== s && null !== (s = s.notificationList) && void 0 !== s && s.length || (e.services.bonuses.isBonusNotificationOpen = !1)
                    },
                    removeBonusNotification: function(e) {
                        e.services.bonuses.notificationList.shift()
                    },
                    toggleDisableSwitcher: function(e, t) {
                        var n = t.payload;
                        e.services.bonuses.disabledSwitcher = n
                    },
                    setBonusEnabled: function(e, t) {
                        var n = t.payload,
                            r = n.status,
                            o = n.selected;
                        e.services.bonuses.enabled = !!r, e.services.bonuses.selected = o
                    },
                    removeFinishedBonus: function(e, t) {
                        var n, r = t.payload;
                        null !== (n = e.services.bonuses.finishedBonuses) && void 0 !== n && n.length && (e.services.bonuses.finishedBonuses = e.services.bonuses.finishedBonuses.filter(function(e) {
                            return e.id !== r
                        }))
                    },
                    addBonus: function(e, t) {
                        var n = t.payload,
                            r = e.services.bonuses,
                            o = n;
                        r.list.forEach(function(e) {
                            o = o.filter(function(t) {
                                return e.id !== t.id
                            })
                        }), e.services.bonuses = c(c({}, r), {}, {
                            list: [].concat(l(r.list), l(o))
                        })
                    },
                    removeEmptyBonus: function(e) {
                        e.services.bonuses.list = e.services.bonuses.list.filter(function(e) {
                            return e.remainingBet > 0 && "freeamount" === e.type.toLowerCase() || e.remainingCount > 0 && "freebet" === e.type.toLowerCase()
                        })
                    },
                    cleanBonus: function(e) {
                        e.services.bonuses.list = []
                    },
                    updateBonuses: function(e, t) {
                        var n = t.payload,
                            r = n.remainingBet,
                            o = n.addBet,
                            i = n.remainingCount,
                            a = n.addCount,
                            s = e.services.bonuses,
                            l = s.selected,
                            u = s.list.map(function(e, t) {
                                if (l && e.id === l.id || 0 === t) {
                                    var n = c({}, e);
                                    return "number" == typeof r && (n = c(c({}, e), {}, {
                                        remainingBet: r
                                    })), "number" == typeof i && (n = c(c({}, e), {}, {
                                        remainingCount: i
                                    })), "number" == typeof o && (n = c(c({}, e), {}, {
                                        remainingBet: e.remainingBet + o
                                    })), "number" == typeof a && (n = c(c({}, e), {}, {
                                        remainingCount: e.remainingCount + a
                                    })), n
                                }
                                return e
                            }).filter(function(e) {
                                return e.remainingBet >= 0 && "freeamount" === e.type.toLowerCase() || e.remainingCount >= 0 && "freebet" === e.type.toLowerCase()
                            });
                        e.services.bonuses.list = u
                    },
                    cleanAndFillBonus: function(e, t) {
                        var n = t.payload;
                        e.services.bonuses.list = n
                    }
                },
                p = (0, r.createSlice)({
                    name: "launcher",
                    initialState: {
                        enabled: null,
                        disabledSwitcher: !1,
                        selected: null,
                        list: []
                    },
                    reducers: d
                }),
                f = function(e) {
                    return e.services.bonuses
                },
                v = function(e) {
                    return !e.playerInfo.isDisconnected && !e.playerInfo.isExpired
                };
            p.actions, p.reducer
        },
        728(e, t, n) {
            n.d(t, {
                Cq: () => r,
                tg: () => o
            });
            var r = {
                    OnJackpotInitialData: "OnJackpotInitialData",
                    GetActiveJackpotData: "GetActiveJackpotData",
                    OnJackpotData: "OnJackpotData",
                    OnJackpotDataError: "OnJackpotDataError",
                    OnJackpotPrizeUpdates: "OnJackpotPrizeUpdates",
                    OnJackpotPrizeError: "OnJackpotPrizeError",
                    AcknowledgeJackpotPrizes: "AcknowledgeJackpotPrizes",
                    OnJackpotAcknowledgments: "OnJackpotAcknowledgments",
                    OnJackpotAcknowledgmentsError: "OnJackpotAcknowledgmentsError",
                    OnJackpotOtherPrizeUpdates: "OnJackpotOtherPrizeUpdates",
                    OnJackpotStateUpdate: "OnJackpotStateUpdate",
                    OnJackpotDetails: "OnJackpotDetails",
                    OnJackpotLevelUpdate: "OnJackpotLevelUpdate"
                },
                o = {
                    mini: 1,
                    major: 2,
                    mega: 3,
                    grand: 4
                }
        },
        2925(e, t, n) {
            n.d(t, {
                mF: () => a,
                Ay: () => l,
                LG: () => c
            });
            var r = n(1551);
            const o = {
                addNotification: function(e, t) {
                    var n = t.payload,
                        r = n.message,
                        o = n.status,
                        i = Math.round(Math.random() * Math.random() * 1e4);
                    e.services.notifications.list = [{
                        guid: i,
                        message: r,
                        status: o
                    }]
                },
                removeNotification: function(e) {
                    e.services.notifications.list = []
                },
                initializeConfigs: function(e, t) {
                    var n = t.payload,
                        r = n.second,
                        o = n.maxLength;
                    e.services.notifications || (e.services.notifications = {}), e.services.notifications.second = r, e.services.notifications.maxLength = o
                }
            };
            var i = {
                    list: [],
                    second: 2,
                    maxLength: (0, n(6295).getIsMobile)() ? 2 : 5
                },
                a = o,
                s = (0, r.createSlice)({
                    name: "launcher",
                    initialState: i,
                    reducers: a
                }),
                c = function(e) {
                    return e.services.notifications.list
                };
            s.actions;
            const l = s.reducer
        },
        6024(e, t, n) {
            n.d(t, {
                mF: () => d,
                o1: () => y,
                zk: () => v,
                Io: () => f
            });
            var r = n(1551),
                o = n(6337);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
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
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function u(e, t, n) {
                var r;
                return r = function(e) {
                    if ("object" != i(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != i(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t), (t = "symbol" == i(r) ? r : r + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var d = {
                    openPopup: function(e, t) {
                        var n = t.payload,
                            r = n.name,
                            o = n.args,
                            i = void 0 === o ? {} : o;
                        e.services.popups[r] = {
                            open: !0,
                            data: l({}, i)
                        }, e.services.isAnyPopupOpen = !0
                    },
                    setPendingPopups: function(e, t) {
                        var n = t.payload,
                            r = n.type,
                            i = n.data,
                            s = !0,
                            c = null;
                        if ("mission" === n.checkMyCurrencyByPromitionName && ((c = (0, o.checkIsMyMission)(i, e.partnerInfo.currencyLogicalId)) || (s = !1)), s) {
                            e.services.pendingPopups || (e.services.pendingPopups = []);
                            var l = e.services.pendingPopups.find(function(e) {
                                return e.type === r && e.data.id === i.id
                            });
                            l ? (l.data = c || i, e.services.pendingPopups = a(e.services.pendingPopups)) : e.services.pendingPopups = [{
                                type: r,
                                data: c || i
                            }].concat(a(e.services.pendingPopups))
                        }
                    },
                    closePendingPopup: function(e, t) {
                        var n = t.payload.type;
                        e.services.pendingPopups = a(e.services.pendingPopups.filter(function(e) {
                            return e.type !== n
                        }))
                    },
                    closePendingPopups: function(e) {
                        e.services.pendingPopups = []
                    },
                    closePopup: function(e, t) {
                        var n, r, o = t.payload.name,
                            i = l({}, e.services.popups);
                        null != i && null !== (n = i[o]) && void 0 !== n && n.open && (delete i[o], e.services.popups = i), null !== (r = Object.values(i)) && void 0 !== r && r.every(function(e) {
                            return !(null != e && e.open)
                        }) && (e.services.isAnyPopupOpen = !1)
                    },
                    closeAllPopups: function(e) {
                        e.services.popups = {}, e.services.isAnyPopupOpen = !1
                    },
                    closePopupsList: function(e, t) {
                        var n, r = t.payload.names,
                            o = l({}, e.services.popups);
                        r.forEach(function(e) {
                            var t;
                            null !== (t = o[e]) && void 0 !== t && t.open && delete o[e]
                        }), e.services.popups = o, null !== (n = Object.values(o)) && void 0 !== n && n.every(function(e) {
                            return !(null != e && e.open)
                        }) && (e.services.isAnyPopupOpen = !1)
                    },
                    closeAllPopupsExcept: function(e, t) {
                        var n, r = t.payload.names,
                            o = l({}, e.services.popups),
                            i = {};
                        r.forEach(function(e) {
                            var t;
                            null !== (t = o[e]) && void 0 !== t && t.open && (i[e] = o[e])
                        }), e.services.popups = i, null !== (n = Object.values(i)) && void 0 !== n && n.every(function(e) {
                            return !(null != e && e.open)
                        }) && (e.services.isAnyPopupOpen = !1)
                    },
                    changePopupData: function(e, t) {
                        var n = t.payload.name;
                        e.services.popups = l(l({}, e.services.popups), {}, u({}, n, l(l({}, e.services.popups[n]), {}, {
                            data: {}
                        })))
                    }
                },
                p = (0, r.createSlice)({
                    name: "launcher",
                    initialState: {},
                    reducers: d
                }),
                f = function(e) {
                    return e.services.popups
                },
                v = function(e) {
                    return e.services.pendingPopups || []
                },
                y = p.actions;
            p.reducer
        },
        8579(e, t, n) {
            n.d(t, {
                Eo: () => c,
                Gz: () => s,
                JU: () => i,
                Vx: () => l,
                yM: () => a
            });
            var r = n(3387),
                o = n(6337),
                i = {
                    GetActivePromotions: "GetActivePromotions",
                    ActivePromotionsInfo: "ActivePromotionsInfo"
                },
                a = {
                    soundUrl: "".concat(r.CDN_URL, "/sounds/moneyLand/sound.mp3"),
                    soundObj: {
                        winPopupMoneyLand: [0, 7e3]
                    }
                },
                s = function(e) {
                    return "".concat(r.CDN_URL, "/images/promotions/").concat(o.isMobile ? e ? "landscape" : "mobile" : "desktop", "/crashback/crashbackBg.webp")
                },
                c = {
                    LeaderBoard: 23,
                    MoneyLand: 54,
                    BankSystem: 65,
                    MatchDay: 87,
                    Missions: 52,
                    Crashback: 85
                },
                l = [{
                    id: c.LeaderBoard,
                    title: "LeaderBoard",
                    promotionType: r.PROMOTIONS_TYPES.leaderboard,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }, {
                    id: c.Missions,
                    title: "Missions",
                    promotionType: r.PROMOTIONS_TYPES.missions,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }, {
                    id: c.MatchDay,
                    title: "MatchDay",
                    promotionType: r.PROMOTIONS_TYPES.matchday,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }, {
                    id: c.BankSystem,
                    title: "BankPromo",
                    promotionType: r.PROMOTIONS_TYPES.banksystem,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }, {
                    id: c.MoneyLand,
                    title: "MoneyLand",
                    promotionType: r.PROMOTIONS_TYPES.moneyland,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }, {
                    id: c.Crashback,
                    title: "Crashback",
                    promotionType: r.PROMOTIONS_TYPES.crashback,
                    description: "_It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                }]
        },
        6025(e, t, n) {
            n.d(t, {
                mF: () => d,
                CQ: () => v,
                i0: () => f,
                T3: () => y,
                cd: () => m
            });
            var r = n(1551),
                o = n(1703),
                i = n.n(o);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        var r, o, i, s;
                        r = e, o = t, i = n[t], s = function(e) {
                            if ("object" != a(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != a(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == a(s) ? s : s + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const l = {
                setSettings: function(e, t) {
                    var n = t.payload,
                        r = n.sound,
                        o = n.music;
                    e.services.settings || (e.services.settings = {}), r && (e.services.settings.sound = c({}, r)), o && (e.services.settings.music = c({}, o))
                },
                setSoundSetting: function(e, t) {
                    var n = t.payload;
                    e.services.settings.sound = c(c({}, e.services.settings.sound), n)
                },
                setMusicSetting: function(e, t) {
                    var n = t.payload;
                    e.services.settings.music = c(c({}, e.services.settings.music), n)
                },
                changeIsAnimate: function(e, t) {
                    var n = t.payload;
                    e.services.settings.isAnimate = n
                }
            };
            var u = {
                    sound: {
                        isLoaded: !1,
                        isOn: !1
                    },
                    music: {
                        isLoaded: !1,
                        isOn: !1
                    },
                    isAnimate: null === (null === i() || void 0 === i() ? void 0 : i().getItem("isAnimationOn")) || "true" === (null === i() || void 0 === i() ? void 0 : i().getItem("isAnimationOn"))
                },
                d = l,
                p = (0, r.createSlice)({
                    name: "launcher",
                    initialState: u,
                    reducers: d
                }),
                f = function(e) {
                    return e.services.settings
                },
                v = function(e) {
                    return e.services.settings.isAnimate
                },
                y = function(e) {
                    var t;
                    return null === (t = e.services.settings.sound) || void 0 === t ? void 0 : t.isOn
                },
                m = function(e) {
                    return e.services.settings.withSeparatedSounds
                };
            p.actions, p.reducer
        },
        4508(e, t, n) {
            n.d(t, {
                H: () => r,
                T: () => o
            });
            var r = {
                    OnChatReceive: "OnChatReceive",
                    ReceiveMessage: "ReceiveMessage",
                    SendMessage: "SendMessage",
                    LikeMessage: "LikeMessage",
                    UnLikeMessage: "UnLikeMessage",
                    UpdateMessage: "UpdateMessage",
                    UpdatePlayer: "UpdatePlayer",
                    DeactivateChat: "DeactivateChat",
                    Error: "Error",
                    DeleteMessage: "DeleteMessage"
                },
                o = {
                    Text: 0,
                    Emoji: 1,
                    ShareWin: 2,
                    Gif: 3
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
        9789(e, t, n) {
            n.d(t, {
                A: () => i,
                u: () => o
            });
            var r = n(6337),
                o = {
                    PushPrizeDrops: "PushPrizeDrops",
                    GetActiveMoneyLandRule: "GetActiveMoneyLandRule",
                    GetActiveMoneyLandInfo: "GetActiveMoneyLandInfo",
                    GetPendingMoneyLandInfo: "GetPendingMoneyLandInfo",
                    GetPendingMoneyLandRule: "GetPendingMoneyLandRule",
                    GetActiveMoneyLandPrizes: "GetActiveMoneyLandPrizes",
                    PushJoinPromotionResponse: "PushJoinPromotionResponse",
                    GetPendingMoneyLandPrizes: "GetPendingMoneyLandPrizes",
                    GetActiveMoneyLandWinners: "GetActiveMoneyLandWinners",
                    ConfirmPrizeDrops: "ConfirmPrizeDrops"
                },
                i = new function() {
                    return {
                        ConfirmPrizeDrops: function(e) {
                            this.name = o.ConfirmPrizeDrops, this.model = {
                                prizeDropIds: e
                            }, this.messagePackModel = (0, r.parseObjectToArray)([e])
                        }
                    }
                }
        },
        632(e, t, n) {
            n.r(t), n.d(t, {
                default: () => c
            });
            var r = n(8517),
                o = n(8914);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
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

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        var r, o, a, s;
                        r = e, o = t, a = n[t], s = function(e) {
                            if ("object" != i(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != i(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == i(s) ? s : s + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
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
                    0: s({}, r.defaultAutoPlayOptions),
                    1: s({}, r.defaultAutoPlayOptions)
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
                    jackpot: o.w
                }
            }
        },
        2182(e, t, n) {
            n.r(t), n.d(t, {
                actionCreators: () => Me,
                actions: () => At,
                default: () => Et,
                selectActiveLeaderBoardId: () => Ye,
                selectActivePromotions: () => fe,
                selectAnimationToggle: () => Pt,
                selectAutoBetPopupData: () => Mt,
                selectBonusServiceSlotData: () => wt,
                selectBonuses: () => ue.aK,
                selectBottomMenuWrapperData: () => Xe,
                selectCashBackInfo: () => Te,
                selectChatConfigs: () => Le,
                selectChatIsActive: () => Be,
                selectCoinRate: () => ft,
                selectCrashbackPrize: () => je,
                selectCurrencyId: () => pt,
                selectCurrencyInfo: () => dt,
                selectDataLoaded: () => Ge,
                selectFallBackInfo: () => yt,
                selectFallBackInfoSlot: () => mt,
                selectFooterData: () => Qe,
                selectGameAssetsAreLoading: () => et,
                selectGameHeader: () => Bt,
                selectGameId: () => it,
                selectGameType: () => ht,
                selectGameTypeNames: () => gt,
                selectGlobalBonusHistory: () => ot,
                selectGlobalHistory: () => rt,
                selectGlobalHistoryWrapperData: () => St,
                selectHostName: () => Je,
                selectHubIsConnected: () => Ie,
                selectIsAnimate: () => ce.CQ,
                selectIsChatOpened: () => Se,
                selectIsDeactivated: () => _e,
                selectIsFallBackSlot: () => bt,
                selectKenoGameType: () => qe,
                selectLauncherData2: () => Ne,
                selectLauncherDataLoaded: () => Ze,
                selectLauncherFishingData: () => $e,
                selectLauncherGlassData: () => Ke,
                selectLeaderBoardPlayerWin: () => Fe,
                selectMinMaxBetWin: () => at,
                selectMobileSelectedTab: () => tt,
                selectNetPosition: () => Ct,
                selectNewMessageNotify: () => ke,
                selectNotifications: () => Oe.LG,
                selectNotificationsData: () => It,
                selectPartnerUIConfig: () => jt,
                selectPing: () => ct,
                selectPlayerBalance: () => lt,
                selectPlayerHashCode: () => ut,
                selectPopups: () => le.Io,
                selectPopupsData: () => Ot,
                selectPrecision: () => vt,
                selectQuickBets: () => st,
                selectReloadSite: () => nt,
                selectResources: () => Ue,
                selectSettings: () => ce.i0,
                selectShowLeaderboardIcon: () => Lt,
                selectShowPromotionsPopupService: () => Ee,
                selectSoundIsOn: () => ce.T3,
                selectStrNotifWentWrong: () => Dt,
                selectToken: () => He,
                selectUpcomingLeaderboard: () => Ve,
                selectUrlParams: () => Re,
                selectUseLauncherDataSlot: () => xe,
                selectUseNumberInputData: () => We,
                selectUseNumberValidationData: () => ze,
                selectWithSeparatedSounds: () => ce.cd,
                shallowSelector: () => kt
            });
            var r = n(1551),
                o = n(6653),
                i = n(3387),
                a = n(632),
                s = n(1703),
                c = n.n(s),
                l = n(6337),
                u = n(8517);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        v(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function v(e, t, n) {
                var r;
                return r = function(e) {
                    if ("object" != d(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != d(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t), (t = "symbol" == d(r) ? r : r + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const y = {
                setParamsFromUrl: function(e, t) {
                    var n = t.payload,
                        r = n.activeGameId,
                        o = n.culture,
                        i = n.playerId,
                        a = n.partnerId,
                        s = n.token,
                        c = n.mode,
                        u = n.gameTypeName,
                        d = n.referer,
                        p = n.backUrl,
                        f = n.isMobile;
                    e.partnerInfo.mode = c || "1", e.partnerInfo.partnerId = +a || 0, e.partnerInfo.referer = d || "", e.partnerInfo.backUrl = p || "", e.partnerInfo.gameTypeName = u || "", e.gameInfo.activeGameId = +r || 0, e.playerInfo.culture = o, e.playerInfo.isDemo = l.isDemo, e.playerInfo.isMobile = "true" === f, e.playerInfo.playerId = +i || 0, e.playerInfo.token = s, e.isUrlLoaded = !0
                },
                setPing: function(e, t) {
                    var n = t.payload.ping;
                    e.playerInfo.ping = n
                },
                setBalance: function(e, t) {
                    var n = t.payload.balance;
                    e.playerInfo.balance = n
                },
                setPlayerHashCode: function(e, t) {
                    var n = t.payload.hashCode;
                    e.playerInfo.hashCode = n
                },
                setGlobalHistory: function(e, t) {
                    var n = t.payload.history;
                    e.playerInfo.globalHistory = n, e.initialStateHistoryLoaded = !0
                },
                setGlobalBonusHistory: function(e, t) {
                    var n = t.payload;
                    e.playerInfo.globalBonusHistory = n
                },
                setExpiredToken: function(e, t) {
                    var n = t.payload,
                        r = n.isExpired,
                        o = n.token;
                    e.playerInfo.isExpired = r, e.playerInfo.token = o
                },
                setSlotFallbackError: function(e, t) {
                    var n = t.payload;
                    e.playerInfo.isFallback = !0, e.services.settings.sound.isOn = !1, e.services.settings.music.isOn = !1, e.playerInfo.fallbackErrorMessage = n.message, e.playerInfo.fallbackErrorCode = n.id
                },
                setDisconnected: function(e, t) {
                    var n = t.payload.isDisconnected;
                    e.playerInfo.isDisconnected = n, n || (e.isDataLoaded = !1)
                },
                setUserInactive: function(e, t) {
                    var n = t.payload.isInactive;
                    e.playerInfo.isExpired = n
                },
                reloadSite: function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).reloadSite = !0
                },
                setHostName: function(e, t) {
                    var n = t.payload;
                    e.playerInfo.hostName = n
                },
                setDeactivated: function(e, t) {
                    var n = t.payload;
                    e.partnerInfo.isDeactivated = n
                },
                setGameAssetsAreLoading: function(e, t) {
                    var n = t.payload;
                    e.gameAssetsAreLoading = n
                },
                setAutoSwitchBonusDisabled: function(e, t) {
                    var n = t.payload;
                    e.services.bonuses.autoSwitchDisabled = n
                },
                setPayTable: function(e, t) {
                    var n = t.payload;
                    e.partnerInfo.payTable = n
                },
                setExternalAutoPlayOptions: function(e, t) {
                    var n = t.payload,
                        r = n.data,
                        o = n.index || 0,
                        i = f(f({}, u.defaultAutoPlayOptions), r);
                    l.isDemo || null === c() || void 0 === c() || c().setItem("externalAutoPlayOptions_".concat(o), JSON.stringify(i)), e.externalAutoPlayOptions[o] = i
                },
                updateExternalOptions: function(e, t) {
                    var n = t.payload,
                        r = n.name,
                        o = n.value,
                        i = n.index || 0,
                        a = f(f({}, e.externalAutoPlayOptions[i]), {}, v({}, r, (+e.externalAutoPlayOptions[i][r] + o).toFixed(2)), n);
                    "singleTotalWin" === r && (a.singleTotalWin = +o.toFixed(2)), l.isDemo || null === c() || void 0 === c() || c().setItem("externalAutoPlayOptions_".concat(i), JSON.stringify(a)), e.externalAutoPlayOptions[i] = a
                },
                resetExternalOptions: function(e, t) {
                    var n = t.payload,
                        r = (null == n ? void 0 : n.index) || 0;
                    null === c() || void 0 === c() || c().removeItem("externalAutoPlayOptions_".concat(r)), e.externalAutoPlayOptions[r] = f({}, u.defaultAutoPlayOptions)
                },
                updateNetPosition: function(e, t) {
                    var n = t.payload;
                    e.playerInfo.netPosition = n
                }
            };
            var m = n(6295),
                b = n(5114),
                g = n.n(b);

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != h(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != h(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == h(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const O = {
                setLauncherInitialState: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                        n = t.gameInfo,
                        r = t.partnerInfo,
                        o = t.partnerConfiguration,
                        i = t.underConstruction,
                        s = t.resources,
                        u = t.token,
                        d = t.uiConfigs,
                        p = t.netPosition,
                        f = (n || {}).gameId,
                        v = r || o || {},
                        y = v.coinRate,
                        b = v.currencyId,
                        h = v.currencyDisplayName,
                        P = v.precision,
                        O = v.minBet,
                        S = v.maxBet,
                        B = v.maxWin,
                        k = v.quickBets,
                        L = v.partnerInstanceName,
                        j = v.defaultBet;
                    g().set("precision", P), g().set("currencyId", b);
                    var D = e.resources;
                    s && (D = I(I({}, e.resources), JSON.parse(s))), e.uiConfigs || (e.uiConfigs = {}), null == d || d.forEach(function(t) {
                        e.uiConfigs[t.key] = t.configValue
                    }), e.playerInfo.playerId = +l.playerId, e.playerInfo.token = u || e.playerInfo.token;
                    var w = JSON.parse((null === c() || void 0 === c() ? void 0 : c().getItem("externalAutoPlayOptions_0")) || "{}");
                    w && (e.externalAutoPlayOptions[0] = w);
                    var C = JSON.parse((null === c() || void 0 === c() ? void 0 : c().getItem("externalAutoPlayOptions_1")) || "{}");
                    C && (e.externalAutoPlayOptions[1] = C), e.gameInfo.gameId = f;
                    var M = h || b;
                    e.partnerInfo.minBet = O, e.partnerInfo.maxBet = S, e.partnerInfo.maxWin = B, e.partnerInfo.currencyId = e.playerInfo.isDemo ? "Fun" : D[M] || M, e.partnerInfo.currencyLogicalId = e.playerInfo.isDemo ? "Fun" : D[b] || b, e.partnerInfo.currencyCode = e.playerInfo.isDemo ? "Fun" : b, e.partnerInfo.coinRate = y, e.partnerInfo.precision = P, e.partnerInfo.quickBets = k, e.partnerInfo.defaultBet = j || e.partnerInfo.defaultBet, e.resources = D, e.isLauncherDataLoaded = !0, e.underConstruction = i ? {
                        show: i.show,
                        startTime: (0, m.getFormattedDateTime)(i.startTime, !0),
                        endTime: (0, m.getFormattedDateTime)(i.endTime, !0)
                    } : null, e.partnerInstanceName = L, e.playerInfo.netPosition = p
                },
                setLauncherSlotInitialState: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                        n = t.gameInfo,
                        r = t.partnerInfo,
                        o = t.partnerConfiguration,
                        i = t.underConstruction,
                        s = t.token,
                        c = t.uiConfigs,
                        u = t.netPosition,
                        d = n || {},
                        p = d.gameId,
                        f = d.stakeId,
                        v = r || o || {},
                        y = v.coinRate,
                        b = v.currencyId,
                        h = v.currencyDisplayName,
                        P = v.precision,
                        I = v.minBet,
                        O = v.maxBet,
                        S = v.maxWin,
                        B = v.quickBets,
                        k = v.partnerInstanceName,
                        L = v.defaultBet;
                    g().set("precision", P), e.uiConfigs || (e.uiConfigs = {}), null == c || c.forEach(function(t) {
                        e.uiConfigs[t.key] = t.configValue
                    }), console.log(e.uiConfigs), "Enabled" === e.uiConfigs.ShowIntroWithCoefficient && (e.gameInfo.isIntroShow = !0), e.playerInfo.playerId = +l.playerId, e.playerInfo.token = s || e.playerInfo.token, e.gameInfo.gameId = p || f;
                    var j = h || b;
                    e.partnerInfo.minBet = I, e.partnerInfo.maxBet = O, e.partnerInfo.maxWin = S, e.partnerInfo.currencyId = e.playerInfo.isDemo ? "Fun" : e.resources[j] || j, e.partnerInfo.currencyLogicalId = e.playerInfo.isDemo ? "Fun" : e.resources[b] || b, e.partnerInfo.currencyCode = e.playerInfo.isDemo ? "Fun" : b, e.partnerInfo.coinRate = y, e.partnerInfo.precision = P, e.partnerInfo.quickBets = B, e.partnerInfo.defaultBet = L || e.partnerInfo.defaultBet, e.isLauncherDataLoaded = !0, e.underConstruction = i ? {
                        show: i.show,
                        startTime: (0, m.getFormattedDateTime)(i.startTime, !0),
                        endTime: (0, m.getFormattedDateTime)(i.endTime, !0)
                    } : null, e.partnerInstanceName = k, e.playerInfo.netPosition = u
                },
                setSimilarGames: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                        n = t.games,
                        r = t.gameType;
                    e.partnerInfo.gameTypeNames = n, e.gameInfo.gameType = r
                },
                setInitialStateHistory: function(e, t) {
                    var n, r = t.payload.historyTickets;
                    if (e.initialStateHistoryLoaded = !0, null === (n = e.history) || void 0 === n || !n.length)
                        if (r) {
                            var o, i = null === (o = e.gameInfo) || void 0 === o ? void 0 : o.gameId;
                            e.history && Object.keys(e.history).length || (e.history = (null == r ? void 0 : r.filter(function(e) {
                                var t, n;
                                return e.gameId !== i && null !== e.win && (null !== (null === (t = e.betInfo) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.win) || null !== (null === (n = e.betInfo) || void 0 === n || null === (n = n[1]) || void 0 === n ? void 0 : n.win))
                            })) || [])
                        } else e.history = []
                },
                setInitialStateGameTicketsLoaded: function(e) {
                    e.initialGameTicketsLoaded = !0
                },
                setMaxWinnersResponse: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload,
                        n = t.winners,
                        r = t.coinRate,
                        o = t.precision,
                        i = t.currencyId,
                        s = n || {},
                        c = s.dailyMaxWinners,
                        u = s.monthlyMaxWinners,
                        d = s.currentWinners,
                        p = i || e.partnerInfo.currencyLogicalId,
                        f = r || e.partnerInfo.coinRate,
                        v = o || e.partnerInfo.precision,
                        y = (0, l.mapWinnersList)(d, p, f, v),
                        m = (0, l.mapWinnersList)(c, p, f, v),
                        b = (0, l.mapWinnersList)(u, p, f, v);
                    e.leadersCurrent = y, e.leadersDaily = m, e.leadersMonthly = b, e.initialMaxWinnersLoaded = !0
                },
                setInitialStateResults: function(e, t) {
                    var n, r = t.payload.results;
                    e.initialGameResultsLoaded = !0, null !== (n = e.results) && void 0 !== n && n.length || (e.results = r || [])
                },
                setInitialStateLeaders: function(e, t) {
                    var n = t.payload.leaders;
                    e.initialLeadersLoaded = !0, !n || e.leaders && Object.keys(e.leaders).length || (e.leaders = n || [])
                },
                setInitialStateStatistics: function(e, t) {
                    var n, r = t.payload.statistics;
                    e.initialStatisticsLoaded = !0, null !== (n = e.statistics) && void 0 !== n && n.length || (e.statistics = r || [])
                },
                setMobileSelectedTab: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                    e.mobileSelectedTab = t || "game"
                },
                setTranslations: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                    e.resources = t
                },
                setIsGameUnderConstruction: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload.underConstrcurtion;
                    e.underConstruction = t ? {
                        show: t.show,
                        startTime: (0, m.getFormattedDateTime)(t.startTime, !0),
                        endTime: (0, m.getFormattedDateTime)(t.endTime, !0)
                    } : null
                }
            };

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return B(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return B(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? B(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            const k = {
                setLeaderBoardInfo: function(e, t) {
                    var n = t.payload,
                        r = (null == n ? void 0 : n.response) || (null == n ? void 0 : n.data) || {},
                        o = r.id,
                        i = r.name,
                        a = r.players,
                        s = r.currentPlayerInfo,
                        c = r.startDate,
                        l = r.endDate,
                        u = r.prizeFund,
                        d = r.gameTypes,
                        p = r.prizes;
                    e.services.leaderBoard.activeLeaderBoard = {
                        id: o,
                        name: i,
                        players: a,
                        startDate: c,
                        endDate: l,
                        prizeFund: u,
                        gameTypes: d,
                        currentPlayerInfo: s,
                        prizes: p
                    }, e.services.leaderBoard.currentLeaderBoard = e.services.leaderBoard.activeLeaderBoard
                },
                setActiveLeaderBoardPlayers: function(e, t) {
                    var n = t.payload,
                        r = (null == n ? void 0 : n.response) || (null == n ? void 0 : n.data) || {},
                        o = r.leaderboardId,
                        i = r.players;
                    e.services.leaderBoard.activeLeaderBoard.id = o, e.services.leaderBoard.activeLeaderBoard.players = i
                },
                setLeaderBoardCurrentPlayer: function(e, t) {
                    var n, r = t.payload;
                    if (null !== (n = e.services) && void 0 !== n && null !== (n = n.leaderBoard) && void 0 !== n && null !== (n = n.activeLeaderBoard) && void 0 !== n && null !== (n = n.currentPlayerInfo) && void 0 !== n && n.score) {
                        var o, i, a, s, c, l = null === (o = e.services) || void 0 === o || null === (o = o.leaderBoard) || void 0 === o || null === (o = o.activeLeaderBoard) || void 0 === o || null === (o = o.currentPlayerInfo) || void 0 === o ? void 0 : o.score;
                        if (null != r && null !== (i = r.response) && void 0 !== i && i.score && l > (null == r || null === (a = r.response) || void 0 === a ? void 0 : a.score) || null != r && null !== (s = r.data) && void 0 !== s && s.score && l > (null == r || null === (c = r.data) || void 0 === c ? void 0 : c.score)) return
                    }
                    e.services.leaderBoard.activeLeaderBoard.currentPlayerInfo = (null == r ? void 0 : r.response) || (null == r ? void 0 : r.data) || {}
                },
                setCurrentLeaderBoard: function(e, t) {
                    var n = t.payload,
                        r = (null == n ? void 0 : n.response) || (null == n ? void 0 : n.data) || {},
                        o = r.currentPlayerInfo,
                        i = r.id,
                        a = r.name,
                        s = r.players,
                        c = r.prizes,
                        l = r.rules,
                        u = r.status,
                        d = r.gameTypes,
                        p = r.prizeFund,
                        f = r.startDate,
                        v = r.endDate,
                        y = r.minBet;
                    4 === u && (e.services.leaderBoard.currentHistoryItem = {
                        currentPlayerInfo: o,
                        id: i,
                        name: a,
                        status: u,
                        players: s,
                        prizes: c,
                        rules: l,
                        gameTypes: d,
                        prizeFund: p,
                        startDate: f,
                        endDate: v,
                        minBet: y
                    }), e.services.leaderBoard.currentLeaderBoard = {
                        currentPlayerInfo: o,
                        id: i,
                        name: a,
                        status: u,
                        players: s,
                        prizes: c,
                        rules: l,
                        gameTypes: d,
                        prizeFund: p,
                        startDate: f,
                        endDate: v,
                        minBet: y
                    }
                },
                setLeaderboardHistory: function(e, t) {
                    var n = t.payload;
                    e.services.leaderBoard.leaderBoardHistory = (null == n ? void 0 : n.response) || (null == n ? void 0 : n.data) || {}
                },
                setLeaderboardStart: function(e, t) {
                    var n = t.payload.data,
                        r = n.id,
                        o = n.name;
                    e.services.leaderBoard.activeLeaderBoard.id = r, e.services.leaderBoard.activeLeaderBoard.name = o, e.services.leaderBoard.activeLeaderBoard.isFinished = !1, e.services.leaderBoard.upcomingLeaderboards = S(e.services.leaderBoard.upcomingLeaderboards.filter(function(e) {
                        return e.id !== r
                    })), e.services.pendingPopups = S(e.services.pendingPopups.filter(function(e) {
                        return e.data.id !== r
                    }))
                },
                setLeaderboardFinish: function(e, t) {
                    var n = t.payload;
                    ((null == n ? void 0 : n.response) || (null == n ? void 0 : n.data) || {}).id === e.services.leaderBoard.activeLeaderBoard.id && (e.services.leaderBoard.activeLeaderBoard = {
                        currentPlayerInfo: {},
                        id: null,
                        name: "",
                        players: [],
                        isFinished: !0
                    })
                },
                setLeaderboardPlayerWin: function(e, t) {
                    var n = t.payload,
                        r = n.currencyCode,
                        o = n.currencyId,
                        i = n.partnerId,
                        a = n.playerId,
                        s = n.position,
                        c = n.winAmount,
                        l = n.leaderboardId,
                        u = n.name;
                    null === e.services.leaderBoard.playerWin && (e.services.leaderBoard.playerWin = []), e.services.leaderBoard.playerWin = [].concat(S(e.services.leaderBoard.playerWin), [{
                        currencyCode: r,
                        currencyId: o,
                        partnerId: i,
                        playerId: a,
                        position: s,
                        winAmount: c,
                        leaderboardId: l,
                        name: u
                    }])
                },
                clearPlayerLeaderboardWinById: function(e, t) {
                    var n = t.payload.leaderboardId;
                    e.services.leaderBoard.playerWin = e.services.leaderBoard.playerWin.filter(function(e) {
                        return e.leaderboardId !== n
                    })
                },
                setUpcomingLeaderboards: function(e, t) {
                    var n = t.payload;
                    e.services.leaderBoard.upcomingLeaderboards = S(n)
                },
                clearUpcomingLeaderboards: function(e) {
                    e.services.leaderBoard.upcomingLeaderboards = []
                },
                clearUpcomingLeaderboardById: function(e, t) {
                    var n = t.payload.upcomingLeaderboardId;
                    e.services.leaderBoard.upcomingLeaderboards = e.services.leaderBoard.upcomingLeaderboards.filter(function(e) {
                        return e.id !== n
                    })
                },
                clearCurrentLeaderBoard: function(e) {
                    e.services.leaderBoard.currentLeaderBoard = {
                        currentLeaderBoard: {},
                        id: null,
                        status: "",
                        name: "",
                        players: [],
                        prizes: [],
                        rules: ""
                    }
                },
                deactivateLeaderboard: function(e, t) {
                    var n, r, o, i, a, s = t.payload.leaderboardId;
                    s === (null === (n = e.services) || void 0 === n || null === (n = n.leaderBoard) || void 0 === n ? void 0 : n.activeLeaderBoard.id) && (e.services.leaderBoard.activeLeaderBoard = {
                        currentPlayerInfo: {},
                        id: null,
                        name: "",
                        players: []
                    }), null !== (r = e.services) && void 0 !== r && null !== (r = r.leaderBoard) && void 0 !== r && null !== (r = r.upcomingLeaderboards) && void 0 !== r && r.find(function(e) {
                        return e.id === s
                    }) && (e.services.leaderBoard.upcomingLeaderboards = null === (a = e.services) || void 0 === a || null === (a = a.leaderBoard) || void 0 === a || null === (a = a.upcomingLeaderboards) || void 0 === a ? void 0 : a.filter(function(e) {
                        return e.id !== s
                    })), e.services.pendingPopups && (e.services.pendingPopups = S(e.services.pendingPopups.filter(function(e) {
                        return e.data.id !== s
                    }))), null !== (o = e.services.leaderBoard.upcomingLeaderboards) && void 0 !== o && o.length || e.services.leaderBoard.leaderBoardHistory.length || null !== (i = e.services) && void 0 !== i && null !== (i = i.leaderBoard) && void 0 !== i && i.activeLeaderBoard.id || e.services.promotions && (e.services.promotions.activePromotions = e.services.promotions.activePromotions.filter(function(e) {
                        return 23 !== e.id
                    }))
                }
            };
            var L = n(8579),
                j = n(9789);

            function D(e) {
                return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, D(e)
            }

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != D(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != D(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == D(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const M = {
                    setMoneyLandInfo: function(e, t) {
                        var n = t.payload,
                            r = n.data,
                            o = n.hubName;
                        e.services.promotions || (e.services.promotions = {}), e.services.moneyLand || (e.services.moneyLand = {});
                        var i, a, s = r.startDate,
                            c = r.endDate,
                            l = r.name,
                            u = r.calculatedStatus,
                            d = r.id,
                            p = r.poolData;
                        if (3 === u || 2 === u && o === j.u.GetPendingMoneyLandInfo) e.services.moneyLand.upcomingMoneyLand = {
                            id: d,
                            startDate: s,
                            endDate: c,
                            name: l,
                            status: u,
                            eligibleBet: p.eligibleBet,
                            totalPrizePool: p.totalPrizePool,
                            realMoneySum: p.realMoneySum,
                            freeAmountSum: p.freeAmountSum,
                            freeBetSum: p.freeBetSum
                        }, null === (i = e.services.promotions) || void 0 === i || !i.activePromotions || 2 !== u || e.services.moneyLand.activeMoneyLand && 0 !== (null === (a = e.services.moneyLand.activeMoneyLand) || void 0 === a ? void 0 : a.id) || (e.services.promotions.activePromotions = e.services.promotions.activePromotions.filter(function(e) {
                            return e.id !== L.Eo.MoneyLand
                        }));
                        else if (1 === u || 2 === u && o === j.u.GetActiveMoneyLandInfo) {
                            var f, v;
                            e.services.moneyLand.activeMoneyLand = {
                                id: d,
                                startDate: s,
                                endDate: c,
                                name: l,
                                status: u,
                                eligibleBet: p.eligibleBet,
                                totalPrizePool: p.totalPrizePool,
                                realMoneySum: p.realMoneySum,
                                freeAmountSum: p.freeAmountSum,
                                freeBetSum: p.freeBetSum
                            }, e.services.moneyLand.upcomingMoneyLand && e.services.moneyLand.upcomingMoneyLand.id === d && (e.services.moneyLand.upcomingMoneyLand = {}), null === (f = e.services.promotions) || void 0 === f || !f.activePromotions || 2 !== u || e.services.moneyLand.upcomingMoneyLand && 0 !== (null === (v = e.services.moneyLand.upcomingMoneyLand) || void 0 === v ? void 0 : v.id) || (e.services.promotions.activePromotions = e.services.promotions.activePromotions.filter(function(e) {
                                return e.id !== L.Eo.MoneyLand
                            }))
                        }
                    },
                    setMoneyLandPrizeInfo: function(e, t) {
                        var n, r = t.payload.data;
                        !e.services.moneyLand.upcomingMoneyLand || null !== (n = e.services.moneyLand.upcomingMoneyLand) && void 0 !== n && n.totalPrizePool || (e.services.moneyLand.upcomingMoneyLand.totalPrizePool = r.totalPrizePool, e.services.moneyLand.upcomingMoneyLand.realMoneySum = r.realMoneySum, e.services.moneyLand.upcomingMoneyLand.freeAmountSum = r.freeAmountSum, e.services.moneyLand.upcomingMoneyLand.freeBetSum = r.freeBetSum, e.services.moneyLand.upcomingMoneyLand.eligibleBet = r.eligibleBet), e.services.moneyLand.activeMoneyLand && !e.services.moneyLand.activeMoneyLand.totalPrizePool && (e.services.moneyLand.activeMoneyLand.totalPrizePool = r.totalPrizePool, e.services.moneyLand.activeMoneyLand.realMoneySum = r.realMoneySum, e.services.moneyLand.activeMoneyLand.freeAmountSum = r.freeAmountSum, e.services.moneyLand.activeMoneyLand.freeBetSum = r.freeBetSum, e.services.moneyLand.activeMoneyLand.eligibleBet = r.eligibleBet)
                    },
                    setMoneyLandPrizesList: function(e, t) {
                        var n = t.payload,
                            r = n.data,
                            o = n.hubName;
                        e.services.moneyLand.upcomingMoneyLand && o === j.u.GetPendingMoneyLandPrizes && (e.services.moneyLand.upcomingMoneyLand = C(C({}, e.services.moneyLand.upcomingMoneyLand), {}, {
                            prizes: r.prizes || r
                        })), e.services.moneyLand.activeMoneyLand && o === j.u.GetActiveMoneyLandPrizes && (e.services.moneyLand.activeMoneyLand = C(C({}, e.services.moneyLand.activeMoneyLand), {}, {
                            prizes: r.prizes || r
                        }))
                    },
                    setMoneyLandWinnersList: function(e, t) {
                        var n = t.payload.data;
                        e.services.moneyLand.activeMoneyLand && (e.services.moneyLand.activeMoneyLand = C(C({}, e.services.moneyLand.activeMoneyLand), {}, {
                            winners: n.winners || n
                        }))
                    },
                    setMoneyLandRules: function(e, t) {
                        var n, r = t.payload.data;
                        !e.services.moneyLand.upcomingMoneyLand || null !== (n = e.services.moneyLand.upcomingMoneyLand) && void 0 !== n && n.rules || (e.services.moneyLand.upcomingMoneyLand.rules = r), e.services.moneyLand.activeMoneyLand && !e.services.moneyLand.activeMoneyLand.rules && (e.services.moneyLand.activeMoneyLand.rules = r)
                    }
                },
                A = {
                    setActiveBankSystemInfo: function(e, t) {
                        var n = t.payload.data,
                            r = n.promotionId,
                            o = n.promotionName,
                            i = n.startDate,
                            a = n.endDate,
                            s = n.calculatedStatus,
                            c = n.remainingJars,
                            l = n.startBankValue,
                            u = n.coinValue,
                            d = n.coinBetAmount,
                            p = n.currencyId,
                            f = n.currencyName;
                        e.services.promotions || (e.services.promotions = {}), e.services.bankSystem || (e.services.bankSystem = {});
                        var v = {
                            promotionId: r,
                            promotionName: o,
                            startDate: i,
                            endDate: a,
                            calculatedStatus: s,
                            remainingJars: c,
                            startBankValue: l,
                            coinValue: u,
                            coinBetAmount: d,
                            currencyId: p,
                            currencyName: f
                        };
                        1 === s ? (e.services.bankSystem.activeBankInfo = v, e.services.bankSystem.upcomingBankInfo = null) : e.services.bankSystem.upcomingBankInfo = r ? v : null
                    },
                    setActivePlayerProgress: function(e, t) {
                        var n, r = t.payload.data;
                        e.services.bankSystem || (e.services.bankSystem = {});
                        var o = null === (n = e.services.bankSystem.playerProgress) || void 0 === n ? void 0 : n.playerAvailableCoinsCount,
                            a = r.playerAvailableCoinsCount,
                            s = r.playerProgressValueToNextCoin;
                        void 0 !== o && o !== a && (e.services.promotions.activeNotification = {
                            name: i.PROMOTIONS_TYPES.banksystem
                        }), e.services.bankSystem.playerProgress = {
                            playerAvailableCoinsCount: a,
                            playerProgressValueToNextCoin: s
                        }
                    },
                    setActiveBankSystemWinners: function(e, t) {
                        var n = t.payload.data;
                        e.services.bankSystem.winners = n
                    },
                    setPromotionRule: function(e, t) {
                        var n = t.payload.data;
                        e.services.bankSystem || (e.services.bankSystem = {}), e.services.bankSystem.rules = n.ruleText
                    },
                    setPushPromotionDeactivation: function(e, t) {
                        var n, r, o, i, a, s = null === (n = t.payload.data) || void 0 === n ? void 0 : n.promotionId;
                        (null === (r = e.services.bankSystem.activeBankInfo) || void 0 === r ? void 0 : r.promotionId) === s && (e.services.bankSystem.activeBankInfo = null, e.services.bankSystem.playerProgress = null, e.services.bankSystem.winners = null, e.services.bankSystem.playerBetInfo = null), (null === (o = e.services.bankSystem.upcomingBankInfo) || void 0 === o ? void 0 : o.promotionId) === s && (e.services.bankSystem.upcomingBankInfo = null), null !== (i = e.services.promotions) && void 0 !== i && i.activePromotions && (e.services.promotions.activePromotions = e.services.promotions.activePromotions.filter(function(e) {
                            return e.promotionId !== s
                        })), e.services.pendingPopups = null === (a = e.services.pendingPopups) || void 0 === a ? void 0 : a.filter(function(e) {
                            var t;
                            return (null === (t = e.data) || void 0 === t ? void 0 : t.promotionId) !== s
                        })
                    },
                    setPushPrizeDrop: function(e, t) {
                        var n = t.payload.data,
                            r = e.services.bankSystem.playerProgress.playerAvailableCoinsCount - 1;
                        e.services.bankSystem.prize = n, e.services.bankSystem.playerBetInfo = n, e.services.bankSystem.playerProgress.playerAvailableCoinsCount = r > 0 ? r : 0, e.services.bankSystem.currentJar.totalBankAmount = n.currentJarResponse.totalBankAmount
                    },
                    setCurrentJar: function(e, t) {
                        var n = t.payload.data;
                        e.services.bankSystem.currentJar = n
                    },
                    resetCurrentJarTotalAmount: function(e) {
                        e.services.bankSystem.currentJar && (e.services.bankSystem.currentJar.totalBankAmount = 0)
                    },
                    resetPlayerBetInfo: function(e) {
                        e.services.bankSystem.playerBetInfo = null, e.services.bankSystem.prize = null, e.services.bankSystem.currentJar && (e.services.bankSystem.currentJar.otherPlayerWonAmount = 0)
                    },
                    setConfirmCoinReceived: function(e, t) {
                        t.payload.data.coinReceived || (e.services.bankSystem.playerBetInfo = null, e.services.bankSystem.currentJar.otherPlayerWonAmount = 0)
                    }
                };

            function E(e) {
                return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, E(e)
            }

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != E(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != E(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == E(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const x = {
                setCashbackValues: function(e, t) {
                    var n = t.payload;
                    e.services.cashback.fillPercentage < 100 && 100 === +(null == n ? void 0 : n.fillPercentage) && (e.services.popups[i.BASE_POPUP_NAMES.CASH_BACK] = {
                        open: !0,
                        data: {
                            isAutomaticallyOpenPopup: !0
                        }
                    }), e.services.cashback = N(N({}, e.services.cashback), n)
                },
                setCashbackRule: function(e, t) {
                    var n = t.payload;
                    e.services.cashback || (e.services.cashback = {}), e.services.cashback.rule = n.rule
                }
            };

            function z(e) {
                return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, z(e)
            }

            function W(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != z(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != z(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == z(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const H = {
                setActiveMatchDay: function(e, t) {
                    var n = t.payload;
                    e.services.matchDay = R(R({}, e.services.matchDay), {}, {
                        activeMatchDayData: n,
                        selectedPredictions: []
                    })
                },
                setActiveMatchesPageIndex: function(e, t) {
                    var n = t.payload;
                    e.services.matchDay.pageIndex = n
                },
                setActiveMatchDaySubmitted: function(e, t) {
                    var n, r = t.payload,
                        o = e.services.matchDay.activeMatchDayData.matchInfo;
                    r.pageIndex >= o.length - 1 && (e.services.matchDay.pageIndex = 0, e.services.pendingPopups = function(e) {
                        if (Array.isArray(e)) return W(e)
                    }(n = e.services.pendingPopups.filter(function(e) {
                        return e.type !== i.BASE_POPUP_NAMES.ACTIVE_MATCHDAY_POPUP
                    })) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return W(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? W(e, t) : void 0
                        }
                    }(n) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()), o[r.pageIndex].submitted = r.submitted
                },
                setSelectedPredictions: function(e, t) {
                    var n = t.payload,
                        r = n.promotionMatchId,
                        o = n.prediction,
                        i = e.services.matchDay.selectedPredictions,
                        a = i.find(function(e) {
                            return e.promotionMatchId === r
                        });
                    a ? a.prediction = o : i.push({
                        promotionMatchId: r,
                        prediction: o
                    })
                },
                resetSelectedPredictions: function(e) {
                    e.services.matchDay.selectedPredictions = []
                },
                setMatchDayHistory: function(e, t) {
                    var n = t.payload;
                    e.services.matchDay.history = n
                },
                setMatchDayRules: function(e, t) {
                    var n = t.payload;
                    e.services.matchDay.rules = n
                },
                cancelMatchDay: function(e, t) {
                    var n, r = t.payload;
                    e.services.matchDay = null, e.services.promotions.activePromotions = null === (n = e.services.promotions.activePromotions) || void 0 === n ? void 0 : n.filter(function(e) {
                        return e.id !== r
                    })
                }
            };

            function J(e) {
                return J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, J(e)
            }

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != J(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != J(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == J(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const F = {
                setAvailableMissions: function(e, t) {
                    var n = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.availableMissions = n
                },
                setClaimRewardResult: function(e, t) {
                    var n = t.payload || {},
                        r = n.playerCampaignId,
                        o = n.status;
                    if (n.isSuccessed) {
                        var i, a, s = e.services.missions || {},
                            c = s.topCampaigns,
                            l = s.activeDetails;
                        null === (i = e.services.pendingPopups) || void 0 === i || i.forEach(function(e) {
                            e.data.playerCampaignId === r && (e.data.playerCampaignStatus = o)
                        }), null === (a = e.services.missions) || void 0 === a || null === (a = a.completedCampaigns) || void 0 === a || a.forEach(function(e) {
                            e.playerCampaignId === r && (e.playerCampaignStatus = o)
                        }), c && (e.services.missions.topCampaigns = c.filter(function(e) {
                            return e.playerCampaignId !== r
                        })), l && (l.playerCampaignStatus = o)
                    } else e.services.missions.claimRewardIsError = !0;
                    e.services.missions.campaignsLoading[r] = !1
                },
                setCampaignDetails: function(e, t) {
                    var n = t.payload;
                    e.services.missions.activeDetails = n
                },
                setSelectedCampaignDetails: function(e, t) {
                    var n = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.selectedCampaignDetails = n
                },
                setCompletedCampaigns: function(e, t) {
                    var n = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.completedCampaigns = n.campaigns || []
                },
                setStandardCampaigns: function(e, t) {
                    var n = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.standardCampaigns = n.campaigns
                },
                setTopCampaigns: function(e, t) {
                    var n, r = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.topCampaigns = null === (n = r.campaigns) || void 0 === n ? void 0 : n.map(function(e) {
                        return _(_({}, e), {}, {
                            id: e.campaignId
                        })
                    })
                },
                setCampaignStart: function(e, t) {
                    var n, r = t.payload;
                    (0, l.checkIsMyMission)(r, e.partnerInfo.currencyLogicalId) && (null !== (n = e.services.missions) && void 0 !== n && n.availableMissions || (e.services.missions = {
                        availableMissions: []
                    }), e.services.missions.availableMissions.push(r))
                },
                setCampaignStatusUpdate: function(e, t) {
                    var n, r = t.payload,
                        o = r.campaignId,
                        i = r.campaignStatus,
                        a = (null === (n = e.services) || void 0 === n ? void 0 : n.missions) || {},
                        s = a.availableMissions,
                        c = a.completedCampaigns,
                        l = a.topCampaigns,
                        u = a.activeDetails,
                        d = a.standardCampaigns,
                        p = a.selectedCampaignDetails,
                        f = e.services.pendingPopups;
                    3 === i ? (null != f && f.length && e.services.pendingPopups.forEach(function(e) {
                        var t;
                        (null === (t = e.data) || void 0 === t ? void 0 : t.campaignId) === o && (e.data.campaignStatus = i)
                    }), s && e.services.missions.availableMissions.forEach(function(e) {
                        e.campaignId === o && (e.campaignStatus = i)
                    }), c && e.services.missions.completedCampaigns.forEach(function(e) {
                        e.campaignId === o && (e.campaignStatus = i)
                    }), l && e.services.missions.topCampaigns.forEach(function(e) {
                        e.campaignId === o && (e.campaignStatus = i)
                    }), d && e.services.missions.standardCampaigns.forEach(function(e) {
                        e.campaignId === o && (e.campaignStatus = i)
                    })) : 4 !== i && 5 !== i || (null != f && f.length && (e.services.pendingPopups = f.filter(function(e) {
                        var t;
                        return (null === (t = e.data) || void 0 === t ? void 0 : t.campaignId) !== o
                    })), s && (e.services.missions.availableMissions = s.filter(function(e) {
                        return e.campaignId !== o
                    })), c && (e.services.missions.completedCampaigns = c.filter(function(e) {
                        return e.campaignId !== o
                    })), l && (e.services.missions.topCampaigns = l.filter(function(e) {
                        return e.campaignId !== o
                    })), d && (e.services.missions.standardCampaigns = d.filter(function(e) {
                        return e.campaignId !== o
                    })), (null == u ? void 0 : u.campaignId) === o && (e.services.missions.activeDetails = null), (null == p ? void 0 : p.campaignId) === o && (e.services.missions.selectedCampaignDetails = null))
                },
                setCampaignAlmostCompleted: function(e, t) {
                    var n = t.payload;
                    e.services.promotions || (e.services.promotions = {}), e.services.promotions.activeNotification = _({
                        name: i.PROMOTIONS_TYPES.missions
                    }, n)
                },
                setCampaignCompleted: function(e, t) {
                    var n = t.payload;
                    e.services.promotions || (e.services.promotions = {}), e.services.promotions.activeNotification = {
                        name: i.PROMOTIONS_TYPES.missions,
                        playerCampaignId: n.playerCampaignId,
                        rewardInfo: n.rewardInfo
                    }
                },
                closeErrorPopup: function(e) {
                    e.services.missions.claimRewardIsError = !1
                },
                updateCampaignsLoading: function(e, t) {
                    var n = t.payload;
                    e.services.missions || (e.services.missions = {}), e.services.missions.campaignsLoading || (e.services.missions.campaignsLoading = {}), e.services.missions.campaignsLoading = _(_({}, e.services.missions.campaignsLoading), n)
                }
            };
            var V = n(728),
                Y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        grand: e.find(function(e) {
                            return e.levelId === V.tg.grand
                        }),
                        mega: e.find(function(e) {
                            return e.levelId === V.tg.mega
                        }),
                        major: e.find(function(e) {
                            return e.levelId === V.tg.major
                        }),
                        mini: e.find(function(e) {
                            return e.levelId === V.tg.mini
                        })
                    }
                },
                q = n(8914);

            function K(e) {
                return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, K(e)
            }

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != K(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != K(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == K(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const X = {
                setJackpotInfo: function(e, t) {
                    var n = (t.payload || {}).metadata;
                    e.services.jackpot = Q(Q({}, q.w), {}, {
                        jackpotActive: null == n ? void 0 : n.jackpotActive
                    })
                },
                setJackpotMeterPopupOpenState: function(e, t) {
                    var n = t.payload;
                    n && (e.services.jackpot.data.levels = void 0, e.services.jackpot.isDataError = !1, e.services.jackpot.data.otherPrize = void 0), e.services.jackpot.stateOfPopups.isMeterPopupOpen = n
                },
                setJackpotData: function(e, t) {
                    var n = t.payload;
                    e.services.jackpot.data.levels = Y(null == n ? void 0 : n.levels), e.services.jackpot.data.otherPrize = void 0
                },
                setJackpotDataDetails: function(e, t) {
                    var n = t.payload;
                    e.services.jackpot.data.details = Q({}, n), e.services.jackpot.data.details.levels = Y(null == n ? void 0 : n.levels)
                },
                setJackpotPrizes: function(e, t) {
                    var n = t.payload;
                    n.length && (e.services.jackpot.stateOfPopups.isMeterPopupOpen = !1, e.services.jackpot.stateOfPopups.isAboutPopupOpen = !1, n.forEach(function(t) {
                        e.services.jackpot.prizes.unshift(t)
                    }), e.services.jackpot.stateOfPopups.isWinPopupOpen = !0)
                },
                setJackpotOtherPrizes: function(e, t) {
                    var n = t.payload;
                    n && (e.services.jackpot.otherPrizes.push(n), e.services.promotions = e.services.promotions || {}, e.services.promotions.activeNotification = {
                        name: i.PROMOTIONS_TYPES.jackpot
                    }, e.services.jackpot.data.otherPrize = n)
                },
                setJackpotDataError: function(e) {
                    e.services.jackpot.isDataError = !0
                },
                setJackpotAboutPopupOpenState: function(e, t) {
                    var n = t.payload;
                    n && (e.services.jackpot.data.details.levels = void 0, e.services.jackpot.isDataError = !1), e.services.jackpot.stateOfPopups.isAboutPopupOpen = n
                },
                closeJackpotWinPopup: function(e) {
                    e.services.jackpot.prizes.pop(), e.services.jackpot.stateOfPopups.isWinPopupOpen = !1, e.services.jackpot.prizesAknowledgedIndex = 0
                },
                checkRemainingPlayerPrizes: function(e) {
                    e.services.jackpot.stateOfPopups.isWinPopupOpen = e.services.jackpot.prizes.length > 0
                },
                clearJackpotOtherPrizeData: function(e) {
                    e.services.jackpot.otherPrizes.pop(), e.services.promotions.activeNotification = {}, e.services.jackpot.otherPrizes.length && (e.services.promotions.activeNotification = {
                        name: i.PROMOTIONS_TYPES.jackpot
                    })
                },
                setJackpotDetailsUpdated: function(e) {
                    e.services.jackpot.data.details.updateNumber += 1
                },
                setJackpotAknowledgmentIndex: function(e) {
                    e.services.jackpot.prizesAknowledgedIndex += 1
                }
            };
            var Z = n(4508);

            function ee(e) {
                return ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ee(e)
            }

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != ee(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != ee(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == ee(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const re = {
                chatInitialState: function(e, t) {
                    var n = t.payload;
                    e.services.chat = ne(ne({}, n), {}, {
                        likedMessages: [],
                        showChatIndicator: !0,
                        isInputFocused: !1
                    })
                },
                addReceiveNewMessage: function(e, t) {
                    var n, r, o, a = t.payload.message;
                    null !== (n = e.services.popups[i.BASE_POPUP_NAMES.CHAT_POPUP]) && void 0 !== n && n.open || null !== (r = e.services) && void 0 !== r && null !== (r = r.chat) && void 0 !== r && r.showChatIndicator || (e.services.chat.showChatIndicator = !0), 100 === (null === (o = e.services.chat.messages) || void 0 === o ? void 0 : o.length) && e.services.chat.messages.shift(), e.services.chat.messages.push(ne(ne({}, a), {}, {
                        likeCount: 0
                    }))
                },
                setShowChatIndicator: function(e, t) {
                    var n = t.payload;
                    e.services.chat.showChatIndicator = n
                },
                setReplyMessage: function(e, t) {
                    var n = t.payload;
                    e.services.chat.repliedMessage = n
                },
                setMessageLikeCount: function(e, t) {
                    var n = t.payload,
                        r = n.id,
                        o = n.likesCount;
                    e.services.chat.messages.find(function(e) {
                        return (null == e ? void 0 : e.id) === r
                    }).likeCount = o
                },
                deleteMessage: function(e, t) {
                    var n = t.payload,
                        r = n.messageId,
                        o = n.repliedMessageIds,
                        i = n.nickName;
                    e.services.chat.messages.find(function(e) {
                        return (null == e ? void 0 : e.id) === r
                    }).hidden = !0, null != o && o.length && o.forEach(function(t) {
                        var n = e.services.chat.messages.find(function(e) {
                            return e.id === t
                        });
                        n && (n.baseMessage = ne(ne({}, n.baseMessage), {}, {
                            type: Z.T.Text,
                            nickName: i,
                            content: e.resources.strMessageUnavailable || "_Message Unavailable"
                        }))
                    })
                },
                setUserLikedMessages: function(e, t) {
                    var n = t.payload;
                    e.services.chat.messages.find(function(e) {
                        return (null == e ? void 0 : e.id) === n
                    }).isLiked = !e.services.chat.messages.find(function(e) {
                        return (null == e ? void 0 : e.id) === n
                    }).isLiked
                },
                setSmileBlockOpened: function(e, t) {
                    var n = t.payload;
                    e.services.chat.isSmileBlockOpened = n
                },
                setInputFocused: function(e, t) {
                    var n = t.payload;
                    e.services.chat.isInputFocused = n
                },
                setChatPlayer: function(e, t) {
                    var n = t.payload,
                        r = n.nickName,
                        o = n.avatarUrl,
                        i = n.isBlocked,
                        a = e.services.chat.player.nickName !== r || e.services.chat.player.avatarUrl !== o;
                    if (e.services.chat.player = n, a) {
                        var s = (0, m.getNotificationById)(e.resources, 114),
                            c = s.message,
                            l = s.status,
                            u = Math.round(Math.random() * Math.random() * 1e4);
                        e.services.notifications.list = [{
                            guid: u,
                            message: c,
                            status: l
                        }]
                    }
                    i && e.services.chat.isSmileBlockOpened && (e.services.chat.isSmileBlockOpened = !1)
                },
                setChatError: function(e, t) {
                    var n, r = t.payload.error;
                    null !== (n = e.services) && void 0 !== n && n.chat && (e.services.chat.error = r)
                },
                updateSharedBigWinCoefficient: function(e, t) {
                    var n = t.payload,
                        r = e.gameInfo.sharedBigWinCoefficient;
                    e.gameInfo.sharedBigWinCoefficient = r ? n > r ? n : r : n, e.gameInfo.forceSharedBigWinCoefficient = 0
                },
                setForceSharedBigWinCoefficient: function(e, t) {
                    var n = t.payload;
                    e.gameInfo.forceSharedBigWinCoefficient = n, e.gameInfo.sharedBigWinCoefficient = 0
                },
                setSharedBigWinCoeff: function(e, t) {
                    var n = t.payload;
                    e.gameInfo.sharedBigWinCoefficient = n, e.gameInfo.forceSharedBigWinCoefficient = 0
                },
                resetChatState: function(e) {
                    delete e.services.popups[i.BASE_POPUP_NAMES.CHAT_POPUP], delete e.services.popups[i.BASE_POPUP_NAMES.CHAT_REGISTRY_POPUP], e.services.chat = {
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
                    }
                }
            };

            function oe(e) {
                return oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, oe(e)
            }

            function ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ie(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != oe(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != oe(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == oe(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            const se = {
                setCrashback: function(e, t) {
                    var n = t.payload,
                        r = e.services;
                    r.crashback || (r.crashback = {}), r.crashback.activeCrashback = n
                },
                setResetCrashback: function(e, t) {
                    var n, r = t.payload,
                        o = e.services;
                    o.pendingPopups = null === (n = o.pendingPopups) || void 0 === n ? void 0 : n.filter(function(e) {
                        var t;
                        return (null === (t = e.data) || void 0 === t ? void 0 : t.promotionId) !== r.promotionId
                    }), o.crashback = null
                },
                setCrashbackRules: function(e, t) {
                    var n = t.payload;
                    e.services.crashback.rules = n
                },
                setCrashbackWinners: function(e, t) {
                    var n = t.payload;
                    e.services.crashback.winners = n
                },
                setCrashBackPrize: function(e, t) {
                    var n = t.payload,
                        r = e.services;
                    r.crashback || (r.crashback = {}), r.crashback.prize = n, r.promotions || (r.promotions = {}), r.promotions.activeNotification = ae({
                        name: i.PROMOTIONS_TYPES.crashback
                    }, n)
                },
                setPendingCrashback: function(e, t) {
                    var n = t.payload,
                        r = e.services,
                        o = e.gameInfo;
                    r.crashback || (r.crashback = {}), r.crashback.pendingPopup = ae(ae({}, n), {}, {
                        gameId: o.gameId
                    })
                },
                resetCrashbackPendingPopup: function(e) {
                    e.services.crashback.pendingPopup = null
                }
            };
            var ce = n(6025),
                le = n(6024),
                ue = n(4721),
                de = {
                    setActivePromotions: function(e, t) {
                        var n, r = t.payload;
                        null !== (n = e.services) && void 0 !== n && n.promotions || (e.services.promotions = {}), e.services.promotions.activePromotions = r
                    }
                },
                pe = (0, r.createSlice)({
                    name: "launcher",
                    initialState: {
                        services: {
                            promotions: {
                                activePromotions: null
                            }
                        }
                    },
                    reducers: de
                }),
                fe = function(e) {
                    var t;
                    return (null === (t = e.services) || void 0 === t || null === (t = t.promotions) || void 0 === t ? void 0 : t.activePromotions) || null
                };

            function ve(e) {
                return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ve(e)
            }

            function ye(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ye(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != ve(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != ve(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == ve(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            pe.actions, pe.reducer;
            const be = {
                setHubConnected: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            services: {
                                connection: {}
                            }
                        },
                        t = (arguments.length > 1 ? arguments[1] : void 0).payload;
                    e.services.connection.isConnected = me(me({}, e.services.connection.isConnected), t)
                }
            };
            var ge = {},
                he = be,
                Pe = (0, r.createSlice)({
                    name: "launcher",
                    initialState: ge,
                    reducers: he
                }),
                Ie = function() {
                    var e;
                    return null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge).services.connection) || void 0 === e || null === (e = e.isConnected) || void 0 === e ? void 0 : e.game
                };
            Pe.actions, Pe.reducer;
            var Oe = n(2925),
                Se = function(e) {
                    var t;
                    return (null === (t = e.services) || void 0 === t || null === (t = t.popups) || void 0 === t || null === (t = t[i.BASE_POPUP_NAMES.CHAT_POPUP]) || void 0 === t ? void 0 : t.open) || !1
                },
                Be = function(e) {
                    var t;
                    return (null === (t = e.services) || void 0 === t || null === (t = t.chat) || void 0 === t ? void 0 : t.id) || !1
                },
                ke = function(e) {
                    var t;
                    return null === (t = e.services) || void 0 === t || null === (t = t.chat) || void 0 === t ? void 0 : t.showChatIndicator
                },
                Le = function(e) {
                    var t, n, r;
                    return {
                        showChatIcon: !e.hideChatIconFromHeader && "Crasher" !== l.gameKindName && !(null === (t = e.services) || void 0 === t || null === (t = t.chat) || void 0 === t || !t.id),
                        showAvatar: !(null === (n = e.services) || void 0 === n || null === (n = n.chat) || void 0 === n || null === (n = n.player) || void 0 === n || !n.nickName),
                        avatarUrl: null === (r = e.services) || void 0 === r || null === (r = r.chat) || void 0 === r || null === (r = r.player) || void 0 === r ? void 0 : r.avatarUrl,
                        newMessageNotify: ke(e),
                        chatPopupOpened: Se(e)
                    }
                },
                je = function(e) {
                    var t;
                    return null === (t = e.services.crashback) || void 0 === t ? void 0 : t.prize
                };

            function De(e) {
                return De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, De(e)
            }

            function we(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(n), !0).forEach(function(t) {
                        var r, o, i, a;
                        r = e, o = t, i = n[t], a = function(e) {
                            if ("object" != De(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != De(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == De(a) ? a : a + "") in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Me = Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce({}, he), le.mF), ue.mF), Oe.mF), ce.mF), y), O), k), re), x), H), de), M), A), F), X), se),
                Ae = (0, r.createSlice)({
                    name: "launcher",
                    initialState: a.default,
                    reducers: Me
                }),
                Ee = function(e) {
                    var t, n = e.playerInfo,
                        r = e.partnerInfo,
                        o = e.underConstruction,
                        a = n.isDisconnected,
                        s = n.isExpired,
                        c = r.isDeactivated,
                        u = (0, le.Io)(e),
                        d = (0, le.zk)(e);
                    return !(!(Object.keys(u || {}).length <= (l.isMobile ? 0 : 1)) || a || s || c || null != o && o.show || null !== (t = u[i.BASE_POPUP_NAMES.CASH_BACK_INTRO_POPUP]) && void 0 !== t && t.open || null == d || !d.length)
                },
                Te = function(e) {
                    var t;
                    return (null === (t = e.services) || void 0 === t ? void 0 : t.cashback) || {}
                },
                Ne = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        hubConnected: null === (e = n.services) || void 0 === e || null === (e = e.connection.isConnected) || void 0 === e ? void 0 : e.game,
                        featuresHubConnected: null === (t = n.services) || void 0 === t || null === (t = t.connection.isConnected) || void 0 === t ? void 0 : t.features,
                        reloadSite: n.reloadSite,
                        isDataLoaded: n.isDataLoaded
                    }
                },
                xe = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        n = t.resources,
                        r = t.services,
                        o = t.reloadSite,
                        i = t.isDataLoaded;
                    return {
                        balance: lt(t),
                        resources: n,
                        reloadSite: o,
                        isDataLoaded: i,
                        hubConnected: null == r || null === (e = r.connection.isConnected) || void 0 === e ? void 0 : e.game
                    }
                },
                ze = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = e.partnerInfo,
                        n = t.minBet,
                        r = t.maxBet;
                    return {
                        resources: e.resources,
                        minBet: n,
                        maxBet: r
                    }
                },
                We = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = e.services.bonuses,
                        n = e.playerInfo.balance,
                        r = e.partnerInfo;
                    return {
                        minBet: r.minBet,
                        maxBet: r.maxBet,
                        precision: r.precision,
                        bonusesEnabled: t.enabled,
                        selectedBonus: t.selected,
                        balance: n
                    }
                },
                Ue = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).resources || {}
                },
                Re = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        activeGameId: e.gameInfo.activeGameId,
                        culture: e.playerInfo.culture,
                        isDemo: e.playerInfo.isDemo,
                        isMobile: e.playerInfo.isMobile,
                        playerId: e.playerInfo.playerId,
                        partnerId: e.partnerInfo.partnerId,
                        token: e.playerInfo.token,
                        mode: e.partnerInfo.mode,
                        gameTypeName: e.partnerInfo.gameTypeName,
                        gameKindName: e.partnerInfo.gameTypeName,
                        referer: e.partnerInfo.referer,
                        backUrl: e.partnerInfo.backUrl,
                        isUrlLoaded: e.isUrlLoaded
                    }
                },
                He = function(e) {
                    return e.playerInfo.token
                },
                Je = function(e) {
                    return e.playerInfo.hostName
                },
                Ge = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).isDataLoaded
                },
                _e = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.isDeactivated
                },
                Fe = function() {
                    var e;
                    return null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).services) || void 0 === e || null === (e = e.leaderBoard) || void 0 === e ? void 0 : e.playerWin
                },
                Ve = function() {
                    var e;
                    return null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).services) || void 0 === e || null === (e = e.leaderBoard) || void 0 === e ? void 0 : e.upcomingLeaderboards
                },
                Ye = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).services.leaderBoard.activeLeaderBoard.id
                },
                qe = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return null == t || null === (e = t.gameInfo) || void 0 === e ? void 0 : e.kenoGameType
                },
                Ke = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = Ue(e),
                        n = tt(e),
                        r = (0, ce.i0)(e);
                    return {
                        resources: t,
                        selectedTab: n,
                        sound: r.sound,
                        music: r.music
                    }
                },
                $e = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = Ue(e),
                        n = tt(e),
                        r = (0, ce.i0)(e);
                    return {
                        resources: t,
                        selectedTab: n,
                        sound: r.sound,
                        music: r.music
                    }
                },
                Qe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = Ue(e),
                        n = e.playerInfo,
                        r = n.balance,
                        o = n.bet,
                        i = e.partnerInfo,
                        s = i.currencyId,
                        c = i.precision;
                    return {
                        gameId: e.gameInfo.gameId,
                        balance: r,
                        bet: o,
                        currencyId: s,
                        precision: c,
                        resources: t
                    }
                },
                Xe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = e.services.leaderBoard.activeLeaderBoard.id,
                        n = e.uiConfigs;
                    return {
                        isHideBetsSection: n.isHideBetsSection,
                        isHideStatisticsSection: n.isHideStatisticsSection && !t
                    }
                },
                Ze = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).isLauncherDataLoaded
                },
                et = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = e.partnerInfo,
                        n = e.underConstruction;
                    return e.gameAssetsAreLoading && !t.isDeactivated && !(null != n && n.show)
                },
                tt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).mobileSelectedTab
                },
                nt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).reloadSite
                },
                rt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).playerInfo.globalHistory
                },
                ot = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).playerInfo.globalBonusHistory
                },
                it = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).gameInfo.gameId
                },
                at = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        minBet: e.partnerInfo.minBet,
                        maxBet: e.partnerInfo.maxBet,
                        maxWin: e.partnerInfo.maxWin,
                        defaultBet: e.partnerInfo.defaultBet,
                        initialBet: e.playerInfo.initialBet
                    }
                },
                st = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.quickBets
                },
                ct = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).playerInfo.ping
                },
                lt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).playerInfo.balance
                },
                ut = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).playerInfo.hashCode
                },
                dt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        currencyId: e.partnerInfo.currencyId,
                        currencyLogicalId: e.partnerInfo.currencyLogicalId,
                        coinRate: e.partnerInfo.coinRate,
                        precision: e.partnerInfo.precision
                    }
                },
                pt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.currencyId
                },
                ft = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.coinRate
                },
                vt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.precision
                },
                yt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        isDisconnected: e.playerInfo.isDisconnected,
                        isExpired: e.playerInfo.isExpired,
                        underConstruction: e.underConstruction,
                        isDeactivated: e.partnerInfo.isDeactivated
                    }
                },
                mt = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        isDisconnected: e.playerInfo.isDisconnected,
                        isExpired: e.playerInfo.isExpired,
                        underConstruction: e.underConstruction,
                        isDeactivated: e.partnerInfo.isDeactivated,
                        isFallback: e.playerInfo.isFallback,
                        fallbackErrorMessage: e.playerInfo.fallbackErrorMessage,
                        fallbackErrorCode: e.playerInfo.fallbackErrorCode,
                        resources: e.resources
                    }
                },
                bt = function(e) {
                    var t = e.underConstruction,
                        n = e.partnerInfo.isDeactivated,
                        r = e.playerInfo,
                        o = r.isExpired,
                        i = r.isDisconnected,
                        a = r.isFallback,
                        s = r.fallbackErrorMessage;
                    return o || i || (null == t ? void 0 : t.show) || n || a || !!s
                },
                gt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).partnerInfo.gameTypeNames
                },
                ht = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).gameInfo.gameType
                },
                Pt = function() {
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default).animationToggle
                },
                It = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default;
                    return {
                        isDisconnected: t.playerInfo.isDisconnected,
                        activeNotification: null === (e = t.services.promotions) || void 0 === e ? void 0 : e.activeNotification
                    }
                },
                Ot = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default,
                        t = e.resources || {};
                    return {
                        strCollect: t.strCollect,
                        strPickBox: t.strPickBox,
                        chatIsActive: Be(e),
                        bonuses: e.services.bonuses,
                        popups: e.services.popups,
                        resources: e.resources,
                        partnerId: e.partnerInfo.partnerId,
                        gameTypeNames: e.partnerInfo.gameTypeNames,
                        precision: e.partnerInfo.precision,
                        isDisconnected: e.playerInfo.isDisconnected,
                        isDeactivated: e.partnerInfo.isDeactivated,
                        minBet: e.partnerInfo.minBet,
                        maxBet: e.partnerInfo.maxBet,
                        maxWin: e.partnerInfo.maxWin,
                        quickBets: e.partnerInfo.quickBets,
                        hashCode: e.playerInfo.hashCode,
                        globalHistory: e.playerInfo.globalHistory,
                        globalBonusHistory: e.playerInfo.globalBonusHistory,
                        isExpired: e.playerInfo.isExpired,
                        underConstruction: e.underConstruction
                    }
                },
                St = function(e) {
                    var t = e.playerInfo,
                        n = e.resources,
                        r = n.strLastGames,
                        o = n.strBigWins;
                    return {
                        globalHistory: t.globalHistory,
                        strLastGames: r,
                        strBigWins: o
                    }
                },
                Bt = function(e) {
                    return {
                        resources: e.resources,
                        notifications: e.services.notifications.list,
                        bonuses: e.services.bonuses,
                        selectedBonus: e.services.bonuses.selected,
                        balance: e.playerInfo.balance,
                        currencyId: e.partnerInfo.currencyId,
                        gameId: e.gameInfo.gameId,
                        isToggleBalance: e.isToggleBalance && "Crasher" === l.gameKindName,
                        activeLeaderBoardId: e.services.leaderBoard.activeLeaderBoard.id,
                        token: e.playerInfo.token
                    }
                };

            function kt(e) {
                return (0, o.useSelector)(e, o.shallowEqual)
            }
            var Lt = function(e) {
                    return e.showLeaderboardIconInHeader && e.services.leaderBoard.activeLeaderBoard.id
                },
                jt = function(e) {
                    var t = e.uiConfigs || {},
                        n = t.AutoBet,
                        r = t.HashCode,
                        o = t.Players,
                        i = t.History,
                        a = t.BonusHistory,
                        s = t.Daily,
                        c = t.Monthly,
                        l = t.Results,
                        u = t.Top,
                        d = t.Leaders,
                        p = t.Leaderboard,
                        f = t.HomeButton,
                        v = t.Menu,
                        y = t.SingleBetPart,
                        m = t.TurboAutoBet,
                        b = t.AutoCashout,
                        g = t.TurboMode,
                        h = t.Combination,
                        P = t.Statistics,
                        I = t.PartnerSiteId,
                        O = t.Pixel,
                        S = t.DownloadRules,
                        B = t.HistoryHighlightAnyWin,
                        k = t.BuyBonus,
                        L = t.Balance,
                        j = t.Intro,
                        D = t.PartnerPixelId,
                        w = t.Ping,
                        C = t.Clock,
                        M = t.IntroWithCoefficient,
                        A = t.ShowTime,
                        E = t.BetsInterval,
                        T = t.ShowWinByConfig,
                        N = t.ShowIntroWithCoefficient,
                        x = t.GalaxsysLoader,
                        z = t.HideShare,
                        W = t.MinAutoCashout,
                        U = t.Promotion,
                        R = t.Music,
                        H = t.DefaultBackgroundID,
                        J = t.NetPosition,
                        G = t.AutoBetTotalAmount,
                        _ = t.LuckyBoost,
                        F = t.AutoBetPopupOptions,
                        V = t.showUploadImageButton;
                    return {
                        hideAutoBetButton: "Disabled" === n,
                        hideAutoCashout: "Disabled" === b,
                        hideHashCode: "Disabled" === r,
                        hidePlayers: "Disabled" === o,
                        hideHistory: "Disabled" === i,
                        hideBonusHistory: "Disabled" === a,
                        hideDaily: "Disabled" === s,
                        hideMonthly: "Disabled" === c,
                        hideResults: "Disabled" === l,
                        hideTop: "Disabled" === u,
                        hideLeaders: "Disabled" === d,
                        hideStatistics: "Disabled" === P,
                        hideLeaderboard: "Disabled" === p,
                        hideHomeButton: "Disabled" === f,
                        hideMenu: "Disabled" === v,
                        singleBetPart: "Disabled" === y,
                        hideTurboAutoBet: "Disabled" === m,
                        hideTurboMode: "Disabled" === g,
                        hideDownloadRules: "Disabled" === S,
                        isPixelEnabled: "Enabled" === O,
                        historyHighlightAnyWin: "Enabled" === B,
                        partnerSiteId: I,
                        combination: h,
                        hideBuyBonus: "Disabled" === k,
                        hideBalance: "Disabled" === L,
                        hideIntro: "Disabled" === j,
                        hidePing: "Disabled" === w,
                        hideClock: "Disabled" === C,
                        showIntroWithCoefficient: "Enabled" === M,
                        introShowCheckbox: "Enabled" === N,
                        PartnerPixelId: D,
                        showTimer: "Enabled" === A,
                        betsInterval: E,
                        showWinByConfig: "Enabled" === T,
                        isHiddenGalaxsysLoader: "Disabled" === x,
                        hideShare: z,
                        minAutoCashout: W,
                        hidePromotions: "Disabled" === U,
                        hideMusic: "Disabled" === R,
                        defaultBackgroundID: Number(H || 0),
                        showNetPosition: "Enabled" === J,
                        showAutoBetTotalAmount: "Enabled" === G,
                        hideLuckyBoost: "Disabled" === _,
                        showAutoBetPopupOptions: "Enabled" === F,
                        showUploadImageButton: "Enabled" === V
                    }
                },
                Dt = function(e) {
                    return e.resources.strNotifWentWrong || "Something went wrong"
                },
                wt = function(e) {
                    return {
                        popups: (0, le.Io)(e),
                        similarGames: gt(e),
                        bonuses: (0, ue.aK)(e),
                        resources: Ue(e),
                        showBonus: (0, ue.lz)(e),
                        hostName: Je(e),
                        isRoundStatusStart: "start" === e.gameInfo.roundStatus
                    }
                },
                Ct = function(e) {
                    return e.playerInfo.netPosition
                },
                Mt = function(e) {
                    var t, n = jt(e),
                        r = n.showAutoBetTotalAmount,
                        o = n.showAutoBetPopupOptions,
                        a = null === (t = (0, ue.aK)(e)) || void 0 === t ? void 0 : t.selected;
                    return {
                        showAutoBetTotalAmount: r,
                        showAutoBetPopupOptions: o,
                        isFreeBet: (null == a ? void 0 : a.type) === i.BonusTypes.FreeBet
                    }
                },
                At = Ae.actions;
            const Et = Ae.reducer
        }
    }
]);