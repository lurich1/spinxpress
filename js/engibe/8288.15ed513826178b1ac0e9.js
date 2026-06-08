/*! For license information please see 8288.15ed513826178b1ac0e9.js.LICENSE.txt */
"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [6299, 8288], {
        6299(e, t, n) {
            n.r(t), n.d(t, {
                BaseHubMethodNames: () => a,
                BaseHubRequests: () => r,
                BaseHubResponseModels: () => i,
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
                a = {
                    Ping: "Ping",
                    GetBalance: "GetBalance",
                    GetInitialState: "GetInitialState",
                    GetInitialStateGameTickets: "GetInitialStateGameTickets",
                    GetInitialStateHistory: "GetInitialStateHistory",
                    GetInitialStateMaxWinners: "GetInitialStateMaxWinners",
                    GetInitialStateLeaders: "GetInitialStateLeaders",
                    GetInitialStateGameResults: "GetInitialStateGameResults",
                    GetInitialStateStatistics: "GetInitialStateStatistics",
                    GetInitialStateCashBackInfo: "GetInitialStateCashBackInfo",
                    GetInitialStateLastRoundTickets: "GetInitialStateLastRoundTickets",
                    GenerateHashCode: "GenerateHashCode",
                    History: "History",
                    BonusHistory: "BonusHistory",
                    BonusInfo: "BonusInfo",
                    BonusNotify: "BonusNotify",
                    Error: "Error",
                    LogOutPlayer: "LogOutPlayer",
                    ExpiredToken: "ExpiredToken",
                    Deactivated: "Deactivated",
                    UpdateWinners: "UpdateWinners",
                    GetMaxWinners: "GetMaxWinners",
                    ActiveLeaderboardInfo: "ActiveLeaderboardInfo",
                    LeaderboardPlayersListUpdate: "LeaderboardPlayersListUpdate",
                    LeaderboardPlayerScoreUpdate: "LeaderboardPlayerScoreUpdate",
                    LeaderboardInfo: "LeaderboardInfo",
                    LeaderboardHistory: "LeaderboardHistory",
                    LeaderboardStart: "LeaderboardStart",
                    LeaderboardFinish: "LeaderboardFinish",
                    LeaderboardPlayerWin: "LeaderboardPlayerWin",
                    UpcomingLeaderboards: "UpcomingLeaderboards",
                    Validation: "Validation",
                    UnderConstruction: "UnderConstruction",
                    Reload: "Reload",
                    MaxWinnersResponse: "MaxWinnersResponse",
                    GameTicketsResponse: "GameTicketsResponse",
                    GetLeaders: "GetLeaders",
                    GetLeadersResponse: "GetLeadersResponse",
                    GetStatistics: "GetStatistics",
                    StatisticsResponse: "StatisticsResponse",
                    GetGameResults: "GetGameResults",
                    GameResultsResponse: "GameResultsResponse",
                    GetGameTickets: "GetGameTickets",
                    GetLastRoundTickets: "GetLastRoundTickets",
                    LastRoundTicketsResponse: "LastRoundTicketsResponse",
                    NetPosition: "NetPosition"
                },
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    return {
                        Ping: function() {
                            this.name = a.Ping, this.model = {
                                version: e
                            }, this.messagePackModel = this.model
                        },
                        GetBalance: function(t) {
                            var n = t.token,
                                o = void 0 === n ? 0 : n;
                            this.name = a.GetBalance, this.model = {
                                version: e,
                                token: o
                            }, this.messagePackModel = this.model
                        },
                        GetInitialState: function(e) {
                            var t = e.culture,
                                n = void 0 === t ? "" : t;
                            this.name = a.GetInitialState, this.model = {
                                culture: n
                            }, this.messagePackModel = this.model
                        },
                        GenerateHashCode: function(t) {
                            var n = t.key,
                                o = void 0 === n ? "" : n,
                                r = t.salt,
                                s = void 0 === r ? "" : r;
                            this.name = a.GenerateHashCode, this.model = {
                                version: e,
                                key: o,
                                salt: s
                            }, this.messagePackModel = this.model
                        },
                        History: function() {
                            this.name = a.History
                        },
                        GetLeaders: function() {
                            this.name = a.GetLeaders
                        },
                        GetStatistics: function() {
                            this.name = a.GetStatistics
                        },
                        GetGameResults: function() {
                            this.name = a.GetGameResults
                        },
                        BonusHistory: function(t) {
                            var n = t.token,
                                o = void 0 === n ? "" : n;
                            this.name = a.BonusHistory, this.model = {
                                version: e,
                                token: o
                            }, this.messagePackModel = this.model
                        },
                        BonusInfo: function(t) {
                            var n = t.token,
                                o = void 0 === n ? "" : n,
                                r = t.activeGameId,
                                s = void 0 === r ? 0 : r;
                            this.name = a.BonusInfo, this.model = {
                                version: e,
                                token: o,
                                activeGameId: s
                            }, this.messagePackModel = this.model
                        },
                        GetMaxWinners: function() {
                            this.name = a.GetMaxWinners
                        },
                        GetGameTickets: function() {
                            this.name = a.GetGameTickets
                        },
                        GetLastRoundTickets: function() {
                            this.name = a.GetLastRoundTickets
                        }
                    }
                };

            function s(e, t, n) {
                var o = r(n),
                    a = e || {},
                    s = a.token,
                    i = a.activeGameId,
                    c = a.isDemo,
                    u = a.partnerId,
                    l = a.culture;
                return {
                    getPing: function() {
                        var e = new o.Ping;
                        t(e)
                    },
                    getHashCode: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            a = new o.GenerateHashCode({
                                key: e,
                                salt: n
                            });
                        t(a)
                    },
                    getBetHistory: function() {
                        var e = new o.History({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    },
                    getBonusHistory: function() {
                        var e = new o.BonusHistory({
                            token: s
                        });
                        t(e)
                    },
                    getBonusInfo: function() {
                        var e = new o.BonusInfo({
                            token: s,
                            activeGameId: i
                        });
                        t(e)
                    },
                    getInitialState: function() {
                        var e = new o.GetInitialState({
                            activeGameId: i,
                            token: s,
                            isDemo: c,
                            partnerId: u,
                            culture: l
                        });
                        t(e)
                    },
                    getMaxWinners: function(e) {
                        var n = new o.GetMaxWinners({
                            activeGameId: i,
                            isDemo: c,
                            partnerId: u,
                            token: s || e
                        });
                        t(n)
                    },
                    getLeaders: function() {
                        var e = new o.GetLeaders({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    },
                    getStatistics: function() {
                        var e = new o.GetStatistics({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    },
                    getGameResults: function() {
                        var e = new o.GetGameResults({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    },
                    getInitialGameTickets: function() {
                        var e = new o.GetGameTickets({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    },
                    getLastRoundTickets: function() {
                        var e = new o.GetLastRoundTickets({
                            token: s,
                            isDemo: c,
                            partnerId: u
                        });
                        t(e)
                    }
                }
            }
            var i = {
                Ping: {},
                GetInitialStateCashBackInfo: {
                    id: 0,
                    fillPercentage: 0,
                    boxCount: 0,
                    boxAmounts: []
                },
                GetBalance: {
                    balance: 0
                },
                GenerateHashCode: {
                    hashCode: ""
                },
                BonusHistory: {
                    bonusHistory: [{
                        type: "string",
                        quantity: 0,
                        bet: 0,
                        date: "1 January, 1970, 00:00:00 UTC",
                        expireDate: "1 January, 1970, 00:00:00 UTC",
                        totalWin: 0
                    }]
                },
                ActiveLeaderboardInfo: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayersListUpdate: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayerScoreUpdate: {
                    leaderBoard: [{}]
                },
                LeaderboardInfo: {
                    leaderBoard: [{}]
                },
                LeaderboardHistory: {
                    leaderBoard: [{}]
                },
                LeaderboardStart: {
                    leaderBoard: [{}]
                },
                LeaderboardFinish: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayerWin: {
                    leaderBoard: [{}]
                },
                Error: {},
                LogOutPlayer: {},
                ExpiredToken: {
                    isExpired: !1,
                    token: ""
                },
                Deactivated: {
                    partnerIds: []
                },
                Validation: {
                    validation: void 0
                },
                UnderConstruction: {
                    underConstructionInfo: []
                }
            }
        },
        7260(e, t, n) {
            n.d(t, {
                g: () => Y
            });
            var o = n(8283),
                a = n(6653),
                r = n(6295),
                s = n(3387),
                i = n(2182),
                c = n(2593),
                u = n(6337),
                l = n(2384),
                d = n(5114),
                f = n.n(d),
                h = n(6299),
                p = n(7749),
                m = n(1620);

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, a, r, s, i = [],
                            c = !0,
                            u = !1;
                        try {
                            if (r = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (o = r.call(n)).done) && (i.push(o.value), i.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var b = (0, r.getParamsFromUrl)(),
                g = Date.now(),
                B = null,
                S = v(u.GFA, 3),
                G = S[0],
                I = S[1],
                H = S[2],
                P = n(1703),
                w = n.n(P),
                L = n(5206);

            function k(e) {
                return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, k(e)
            }

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach(function(t) {
                        var o, a, r, s;
                        o = e, a = t, r = n[t], s = function(e) {
                            if ("object" != k(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != k(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(a), (a = "symbol" == k(s) ? s : s + "") in o ? Object.defineProperty(o, a, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o[a] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function E() {
                E = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    o = n.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    s = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

                function u(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    u({}, "")
                } catch (e) {
                    u = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, o) {
                    var r = t && t.prototype instanceof y ? t : y,
                        s = Object.create(r.prototype),
                        i = new x(o || []);
                    return a(s, "_invoke", {
                        value: w(e, n, i)
                    }), s
                }

                function d(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = l;
                var f = "suspendedStart",
                    h = "suspendedYield",
                    p = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var B = {};
                u(B, s, function() {
                    return this
                });
                var S = Object.getPrototypeOf,
                    G = S && S(S(R([])));
                G && G !== n && o.call(G, s) && (B = G);
                var I = g.prototype = y.prototype = Object.create(B);

                function H(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        u(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function P(e, t) {
                    function n(a, r, s, i) {
                        var c = d(e[a], e, r);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == k(l) && o.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                                n("next", e, s, i)
                            }, function(e) {
                                n("throw", e, s, i)
                            }) : t.resolve(l).then(function(e) {
                                u.value = e, s(u)
                            }, function(e) {
                                return n("throw", e, s, i)
                            })
                        }
                        i(c.arg)
                    }
                    var r;
                    a(this, "_invoke", {
                        value: function(e, o) {
                            function a() {
                                return new t(function(t, a) {
                                    n(e, o, t, a)
                                })
                            }
                            return r = r ? r.then(a, a) : a()
                        }
                    })
                }

                function w(t, n, o) {
                    var a = f;
                    return function(r, s) {
                        if (a === p) throw Error("Generator is already running");
                        if (a === m) {
                            if ("throw" === r) throw s;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (o.method = r, o.arg = s;;) {
                            var i = o.delegate;
                            if (i) {
                                var c = L(i, o);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === o.method) o.sent = o._sent = o.arg;
                            else if ("throw" === o.method) {
                                if (a === f) throw a = m, o.arg;
                                o.dispatchException(o.arg)
                            } else "return" === o.method && o.abrupt("return", o.arg);
                            a = p;
                            var u = d(t, n, o);
                            if ("normal" === u.type) {
                                if (a = o.done ? m : h, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: o.done
                                }
                            }
                            "throw" === u.type && (a = m, o.method = "throw", o.arg = u.arg)
                        }
                    }
                }

                function L(t, n) {
                    var o = n.method,
                        a = t.iterator[o];
                    if (a === e) return n.delegate = null, "throw" === o && t.iterator.return && (n.method = "return", n.arg = e, L(t, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + o + "' method")), v;
                    var r = d(a, t.iterator, n.arg);
                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, v;
                    var s = r.arg;
                    return s ? s.done ? (n[t.resultName] = s.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : s : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
                }

                function M(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(M, this), this.reset(!0)
                }

                function R(t) {
                    if (t || "" === t) {
                        var n = t[s];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var a = -1,
                                r = function n() {
                                    for (; ++a < t.length;)
                                        if (o.call(t, a)) return n.value = t[a], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return r.next = r
                        }
                    }
                    throw new TypeError(k(t) + " is not iterable")
                }
                return b.prototype = g, a(I, "constructor", {
                    value: g,
                    configurable: !0
                }), a(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, u(e, c, "GeneratorFunction")), e.prototype = Object.create(I), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, H(P.prototype), u(P.prototype, i, function() {
                    return this
                }), t.AsyncIterator = P, t.async = function(e, n, o, a, r) {
                    void 0 === r && (r = Promise);
                    var s = new P(l(e, n, o, a), r);
                    return t.isGeneratorFunction(n) ? s : s.next().then(function(e) {
                        return e.done ? e.value : s.next()
                    })
                }, H(I), u(I, c, "Generator"), u(I, s, function() {
                    return this
                }), u(I, "toString", function() {
                    return "[object Generator]"
                }), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var o in t) n.push(o);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var o = n.pop();
                                if (o in t) return e.value = o, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = R, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !t)
                            for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var n = this;

                        function a(o, a) {
                            return i.type = "throw", i.arg = t, n.next = o, a && (n.method = "next", n.arg = e), !!a
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var s = this.tryEntries[r],
                                i = s.completion;
                            if ("root" === s.tryLoc) return a("end");
                            if (s.tryLoc <= this.prev) {
                                var c = o.call(s, "catchLoc"),
                                    u = o.call(s, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < s.catchLoc) return a(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return a(s.finallyLoc)
                                } else if (c) {
                                    if (this.prev < s.catchLoc) return a(s.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return a(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && o.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, v) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), v
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    N(n)
                                }
                                return a
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, o) {
                        return this.delegate = {
                            iterator: R(t),
                            resultName: n,
                            nextLoc: o
                        }, "next" === this.method && (this.arg = e), v
                    }
                }, t
            }

            function x(e, t, n, o, a, r, s) {
                try {
                    var i = e[r](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, a, r, s, i = [],
                            c = !0,
                            u = !1;
                        try {
                            if (r = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (o = r.call(n)).done) && (i.push(o.value), i.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return C(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var T = (0, r.getParamsFromUrl)(),
                A = Date.now(),
                O = R(u.GFA, 3),
                D = O[0],
                j = O[1],
                _ = O[2],
                U = n(6723),
                F = n(2908),
                W = n(7863);

            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, a, r, s, i = [],
                            c = !0,
                            u = !1;
                        try {
                            if (r = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (o = r.call(n)).done) && (i.push(o.value), i.length !== t); c = !0);
                        } catch (e) {
                            u = !0, a = e
                        } finally {
                            try {
                                if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (u) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return z(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var V = K(u.GFA, 3),
                q = V[0],
                J = V[2],
                Y = function(e) {
                    var t = e.mediaList,
                        n = e.version,
                        d = e.gameName,
                        y = e.gameAnalyticScripts,
                        S = void 0 === y ? function() {} : y,
                        P = e.socketListeners,
                        k = (0, o.useRef)(null),
                        M = (0, a.useDispatch)(),
                        C = K((0, o.useState)(!1), 2),
                        O = C[0],
                        z = C[1],
                        V = K((0, o.useState)(!1), 2),
                        Y = V[0],
                        $ = V[1],
                        Q = K((0, o.useState)(!t), 2),
                        X = Q[0],
                        Z = Q[1],
                        ee = K((0, o.useState)(!1), 2),
                        te = ee[0],
                        ne = ee[1],
                        oe = K((0, o.useState)(!1), 2),
                        ae = oe[0],
                        re = oe[1],
                        se = K((0, o.useState)(!1), 2),
                        ie = se[0],
                        ce = se[1],
                        ue = (0, o.useCallback)(function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return M(i.actions.openPopup({
                                name: e,
                                args: t
                            }))
                        }, []),
                        le = null;
                    le = 2 === n ? function(e) {
                        var t = e.version,
                            n = e.gameName,
                            c = (0, a.useDispatch)(),
                            d = (0, a.useSelector)(i.selectToken),
                            v = (0, a.useSelector)(i.selectPlayerBalance),
                            y = (0, i.shallowSelector)(i.selectLauncherData2),
                            b = y.hubConnected,
                            g = y.reloadSite,
                            B = y.isDataLoaded,
                            S = (0, i.shallowSelector)(i.selectPartnerUIConfig),
                            G = S.isPixelEnabled,
                            I = S.PartnerPixelId,
                            H = R((0, l.useHostUrl)(n, u.backUrl), 1)[0],
                            P = (0, h.useBaseRequests)(T, m.requestToServer, t),
                            k = P.getPing,
                            M = P.getHashCode,
                            C = P.getBetHistory,
                            O = P.getInitialState;
                        (0, o.useEffect)(function() {
                            return j("GalaxsysBalance", {
                                    balance: v
                                }), D("GalaxsysBalance", function() {
                                    j("GalaxsysBalance", {
                                        balance: v
                                    })
                                }),
                                function() {
                                    _("GalaxsysBalance")
                                }
                        }, [v]), (0, o.useEffect)(function() {
                            return D("GalaxsysJackpot", function(e) {
                                    var t = e.isShow;
                                    console.log("Listening to Jackpot: ", t), null === w() || void 0 === w() || w().setItem("GalaxsysJackpot", t)
                                }),
                                function() {
                                    _("GalaxsysJackpot")
                                }
                        }, []), (0, o.useEffect)(function() {
                            c(i.actions.setParamsFromUrl((0, r.getParamsFromUrl)()))
                        }, []), (0, o.useEffect)(function() {
                            c(i.actions.setHostName(H))
                        }, [H]), (0, o.useEffect)(function() {
                            g && window.location.reload()
                        }, [g]), (0, o.useEffect)(function() {
                            var e = (0, m.getHubConnection)();
                            if (null != e && e.dontReconnect || (c(i.actions.setDisconnected({
                                    isDisconnected: !b
                                })), c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups())), b || void 0 === b || (c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups())), b) {
                                var t = setInterval(k, 5e3);
                                return function() {
                                    return clearInterval(t)
                                }
                            }
                        }, [b]), (0, o.useEffect)(function() {
                            var e = (0, m.getHubConnection)();
                            if (b && null != e && e.invoke && G) {
                                var t = e.invoke.bind(e);
                                e.invoke = function(e) {
                                    "AddStake" === e && (0, r.sendPixelEvent)({
                                        PartnerPixelId: I
                                    });
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                                    return t.apply(void 0, [e].concat(o))
                                }
                            }
                        }, [b, G, I]);
                        var U = (0, o.useCallback)(function(e) {
                            e.on(h.BaseHubMethodNames.GetInitialState, function() {
                                var e, t = (e = E().mark(function e(t) {
                                    var n, o, r;
                                    return E().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t && !t.validation) {
                                                    e.next = 2;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 2:
                                                n = new URL(window.location.href).origin, o = n.includes("localhost") ? p.LU : "".concat(n).concat(p.xP), fetch("".concat(o, "/Lobby/SimilarGames?partnerId=").concat(u.partnerId)).then(function(e) {
                                                    return (null == e ? void 0 : e.json()) || []
                                                }).then(function(e) {
                                                    var t = e.games;
                                                    f().set("gameType", s.gameTypes.FAST_GAME), c(i.actions.setSimilarGames({
                                                        games: t
                                                    }))
                                                }).catch(function(e) {
                                                    return console.error(e)
                                                }), r = function(e) {
                                                    (0, a.batch)(function() {
                                                        c(i.actions.setTranslations(e)), c(i.actions.setLauncherInitialState(t))
                                                    })
                                                }, t.translationVersion ? (0, L.H)(t.translationVersion, r) : (c(i.actions.setLauncherInitialState(t)), console.log("Get Initial State Handling Completed"));
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }), function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function(o, a) {
                                        var r = e.apply(t, n);

                                        function s(e) {
                                            x(r, o, a, s, i, "next", e)
                                        }

                                        function i(e) {
                                            x(r, o, a, s, i, "throw", e)
                                        }
                                        s(void 0)
                                    })
                                });
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()), e.on(h.BaseHubMethodNames.GetBalance, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetBalance;
                                c(i.actions.setBalance(e))
                            }), e.on(h.BaseHubMethodNames.GetInitialStateHistory, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetInitialStateHistory;
                                c(i.actions.setInitialStateHistory(e))
                            }), e.on(h.BaseHubMethodNames.GetInitialStateGameResults, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetInitialStateGameResults;
                                c(i.actions.setInitialStateResults({
                                    results: (null == e ? void 0 : e.results) || e
                                }))
                            }), e.on(h.BaseHubMethodNames.GetInitialStateLeaders, function(e) {
                                null != e && e.winners ? c(i.actions.setMaxWinnersResponse(e)) : c(i.actions.setInitialStateLeaders(e))
                            }), e.on(h.BaseHubMethodNames.GetInitialStateStatistics, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetInitialStateStatistics;
                                c(i.actions.setInitialStateStatistics(e))
                            }), e.on(h.BaseHubMethodNames.BonusInfo, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.BonusInfo;
                                if (e) {
                                    var t = e.bonuses.map(function(e) {
                                        return N(N({}, e), {}, {
                                            type: e.type.toLowerCase(),
                                            expireDate: (0, r.getFormattedDateTime)(e.expireDate)
                                        })
                                    }) || [];
                                    c(i.actions.cleanAndFillBonus(t))
                                }
                            }), e.on(h.BaseHubMethodNames.Deactivated, function() {
                                var e;
                                null !== (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.Deactivated).partnerIds) && void 0 !== e && e.includes(u.partnerId) && (c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups()), c(i.actions.setDeactivated(!0)))
                            }), e.on(h.BaseHubMethodNames.UnderConstruction, function() {
                                var e, t = null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.UnderConstruction).underConstructionInfo) || void 0 === e ? void 0 : e.find(function(e) {
                                    return e.partnerId === u.partnerId
                                });
                                t && (c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups()), c(i.actions.setDeactivated(!0)), c(i.actions.setIsGameUnderConstruction({
                                    underConstrcurtion: t
                                })))
                            }), e.on(h.BaseHubMethodNames.Reload, function() {
                                window.location.reload()
                            }), O()
                        }, []);
                        return (0, o.useEffect)(function() {
                            if (!b) {
                                var e = (0, m.getHubConnection)();
                                null == e || e.off(h.BaseHubMethodNames.GetInitialState), null == e || e.off(h.BaseHubMethodNames.BonusInfo), null == e || e.off(h.BaseHubMethodNames.Deactivated), null == e || e.off(h.BaseHubMethodNames.GetBalance)
                            }
                        }, [b]), (0, o.useEffect)(function() {
                            if (B) {
                                var e = (0, m.getHubConnection)(),
                                    t = new Map;
                                t.set(h.BaseHubMethodNames.History, function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.History;
                                    e && c(i.actions.setGlobalHistory({
                                        history: e.history || e
                                    }))
                                }).set(h.BaseHubMethodNames.GameTicketsResponse, function(e) {
                                    e.validation || c(i.actions.setInitialStateGameTicketsLoaded())
                                }).set(h.BaseHubMethodNames.MaxWinnersResponse, function(e) {
                                    c(i.actions.setMaxWinnersResponse(e))
                                }).set(h.BaseHubMethodNames.UpdateWinners, function(e) {
                                    c(i.actions.setMaxWinnersResponse({
                                        winners: e
                                    }))
                                }).set(h.BaseHubMethodNames.GetLeadersResponse, function(e) {
                                    c(i.actions.setInitialStateLeaders(e))
                                }).set(h.BaseHubMethodNames.GameResultsResponse, function(e) {
                                    c(i.actions.setInitialStateResults({
                                        results: (null == e ? void 0 : e.results) || e
                                    }))
                                }).set(h.BaseHubMethodNames.StatisticsResponse, function(e) {
                                    c(i.actions.setInitialStateStatistics(e))
                                }).set(h.BaseHubMethodNames.BonusHistory, function() {
                                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.BonusHistory).bonusHistory;
                                    c(i.actions.setGlobalBonusHistory({
                                        bonusHistory: e
                                    }))
                                }).set(h.BaseHubMethodNames.Ping, function() {
                                    A = 5e3 - (Date.now() - A), c(i.actions.setPing({
                                        ping: A > 0 ? A : 0
                                    })), A = Date.now()
                                }).set(h.BaseHubMethodNames.GenerateHashCode, function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GenerateHashCode;
                                    c(i.actions.setPlayerHashCode({
                                        hashCode: e.hashCode
                                    }))
                                }).set(h.BaseHubMethodNames.Error, function() {
                                    console.error("Backend called error message")
                                }).set(h.BaseHubMethodNames.LogOutPlayer, function() {
                                    window.location.href = "".concat(window.location.origin, "/?PartnerId=").concat(u.partnerId, "&culture=").concat(u.culture, "&gameType=").concat(u.gameKindName, "&isMobile=").concat(u.isMobile, "&isLogout=true")
                                }).set(h.BaseHubMethodNames.ExpiredToken, function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.ExpiredToken,
                                        n = (0, m.getFeaturesHubConnection)();
                                    c(i.actions.setExpiredToken(t)), c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups()), e.dontReconnect = !0, n.unauthorizedPlayer = !0, e.stop(), null == n || n.stop()
                                }).set(h.BaseHubMethodNames.NetPosition, function(e) {
                                    c(i.actions.updateNetPosition(e.netPosition))
                                }), t.forEach(function(t, n) {
                                    null == e || e.on(n, t)
                                })
                            }
                        }, [B, b]), (0, o.useMemo)(function() {
                            return {
                                getHashCode: M,
                                getBetHistory: C,
                                setHubConnectionListeners: U
                            }
                        }, [u.partnerId, u.referer, d, u.culture, u.playerId, u.gameKindName, H])
                    }({
                        version: n,
                        gameName: d
                    }) : function(e) {
                        var t = e.version,
                            n = e.gameName,
                            c = (0, a.useDispatch)(),
                            d = (0, a.useSelector)(i.selectToken),
                            y = (0, a.useSelector)(i.selectHubIsConnected),
                            S = (0, a.useSelector)(i.selectReloadSite),
                            P = (0, a.useSelector)(i.selectPlayerBalance),
                            w = (0, a.useSelector)(i.selectStrNotifWentWrong),
                            L = (0, i.shallowSelector)(i.selectPartnerUIConfig).isPixelEnabled,
                            k = v((0, l.useHostUrl)(n, u.backUrl), 1)[0],
                            M = (0, h.useBaseRequests)(b, m.requestToServer, t),
                            N = M.getPing,
                            E = M.getHashCode,
                            x = M.getBetHistory,
                            R = M.getInitialState;
                        (0, o.useEffect)(function() {
                            return I("GalaxsysBalance", {
                                    balance: P
                                }), G("GalaxsysBalance", function() {
                                    I("GalaxsysBalance", {
                                        balance: P
                                    })
                                }),
                                function() {
                                    H("GalaxsysBalance")
                                }
                        }, [P]), (0, o.useEffect)(function() {
                            c(i.actions.setHostName(k))
                        }, [k]), (0, o.useEffect)(function() {
                            S && window.location.reload()
                        }, [S]), (0, o.useEffect)(function() {
                            c(i.actions.setParamsFromUrl((0, r.getParamsFromUrl)()))
                        }, []), (0, o.useEffect)(function() {
                            var e = (0, m.getHubConnection)();
                            if (y && null != e && e.invoke && L) {
                                var t = e.invoke.bind(e);
                                e.invoke = function(e) {
                                    "AddStake" === e && (0, r.sendPixelEvent)();
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                                    return t.apply(void 0, [e].concat(o))
                                }
                            }
                        }, [y, L]);
                        var C = (0, o.useCallback)(function(e) {
                            null == e || e.on(h.BaseHubMethodNames.GetInitialState, function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetInitialState;
                                if (t.gameData) {
                                    var n = new URL(window.location.href).origin,
                                        o = n.includes("localhost") ? p.LU : "".concat(n).concat(p.xP);
                                    fetch("".concat(o, "/Lobby/SimilarGames?partnerId=").concat(u.partnerId)).then(function(e) {
                                            return e.json()
                                        }).then(function(e) {
                                            var t = e.games;
                                            c(i.actions.setSimilarGames({
                                                games: t
                                            })), f().set("gameType", s.gameTypes.FAST_GAME)
                                        }), c(i.actions.setLauncherInitialState(t.gameData)),
                                        function(e) {
                                            var t = new Map;
                                            t.set(h.BaseHubMethodNames.History, function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.History;
                                                c(i.actions.setGlobalHistory({
                                                    history: e
                                                }))
                                            }).set(h.BaseHubMethodNames.BonusHistory, function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.BonusHistory;
                                                c(i.actions.setGlobalBonusHistory({
                                                    bonusHistory: e
                                                }))
                                            }).set(h.BaseHubMethodNames.Ping, function() {
                                                g = 5e3 - (Date.now() - g), c(i.actions.setPing({
                                                    ping: g > 0 ? g : 0
                                                })), g = Date.now()
                                            }).set(h.BaseHubMethodNames.GenerateHashCode, function() {
                                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GenerateHashCode).hashCode;
                                                c(i.actions.setPlayerHashCode({
                                                    hashCode: e
                                                }))
                                            }).set(h.BaseHubMethodNames.Error, function() {
                                                console.error("Backend called error message")
                                            }).set(h.BaseHubMethodNames.LogOutPlayer, function() {
                                                window.location.href = "".concat(window.location.origin, "/?PartnerId=").concat(u.partnerId, "&culture=").concat(u.culture, "&gameType=").concat(u.gameKindName, "&isMobile=").concat(u.isMobile, "&isLogout=true")
                                            }).set(h.BaseHubMethodNames.BonusNotify, function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.BonusNotify,
                                                    t = e.id,
                                                    n = e.bet,
                                                    o = e.count,
                                                    a = e.expireDate,
                                                    s = e.type;
                                                c(i.actions.addBonus([{
                                                    id: t,
                                                    remainingCount: o,
                                                    remainingBet: n,
                                                    type: s.toLowerCase(),
                                                    expireDate: (0, r.getFormattedDateTime)(a)
                                                }]))
                                            }).set(h.BaseHubMethodNames.ExpiredToken, function() {
                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.ExpiredToken;
                                                c(i.actions.setExpiredToken(t)), c(i.actions.closePendingPopups()), e.dontReconnect = !0, e.stop()
                                            }), t.forEach(function(t, n) {
                                                null == e || e.on(n, t)
                                            })
                                        }(e), B = setInterval(N, 5e3)
                                } else console.error(h.BaseHubMethodNames.GetInitialState, t)
                            }), null == e || e.on(h.BaseHubMethodNames.Deactivated, function() {
                                var e;
                                null !== (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.Deactivated).partnerIds) && void 0 !== e && e.includes(u.partnerId) && c(i.actions.setDeactivated(!0))
                            }), null == e || e.on(h.BaseHubMethodNames.GetBalance, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.GetBalance;
                                c(i.actions.setBalance(e))
                            }), null == e || e.on(h.BaseHubMethodNames.Validation, function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.BaseHubResponseModels.Validation;
                                c(i.actions.addNotification({
                                    message: "".concat(w, ": ").concat(e.validation),
                                    status: "error"
                                }))
                            }), R()
                        }, []);
                        return (0, o.useEffect)(function() {
                            var e = (0, m.getHubConnection)();
                            return e.dontReconnect || c(i.actions.setDisconnected({
                                    isDisconnected: !y
                                })), y || (null == e || e.off(h.BaseHubMethodNames.GetInitialState), null == e || e.off(h.BaseHubMethodNames.Deactivated), null == e || e.off(h.BaseHubMethodNames.GetBalance), clearInterval(B), c(i.actions.closeAllPopups()), c(i.actions.closePendingPopups())),
                                function() {
                                    return clearInterval(B)
                                }
                        }, [y]), (0, o.useMemo)(function() {
                            return {
                                getHashCode: E,
                                getBetHistory: x,
                                setHubConnectionListeners: C
                            }
                        }, [u.partnerId, u.referer, d, u.culture, u.playerId, u.gameKindName, k])
                    }({
                        version: n,
                        gameName: d
                    });
                    var de = le,
                        fe = de.getHashCode,
                        he = de.getBetHistory,
                        pe = de.setHubConnectionListeners,
                        me = (0, a.useSelector)(i.selectDataLoaded),
                        ve = (0, a.useSelector)(i.selectIsDeactivated),
                        ye = (0, a.useSelector)(i.selectLauncherDataLoaded),
                        be = (0, a.useSelector)(i.selectGameAssetsAreLoading),
                        ge = (0, i.shallowSelector)(i.selectToken),
                        Be = Y && me && ye && X && O || ve,
                        Se = (0, o.useCallback)(function() {
                            ne(function(e) {
                                return !e
                            })
                        }, [te]),
                        Ge = (0, o.useCallback)(function() {
                            (0, r.redirectToHomeGalaxsys)({
                                partnerId: u.partnerId,
                                referer: u.referer
                            })
                        }, [u.partnerId, u.referer]),
                        Ie = (0, o.useCallback)(function() {
                            Z(!0)
                        }, []),
                        He = (0, o.useCallback)(function(e) {
                            switch (ne(!1), e) {
                                case "home":
                                    Ge();
                                    break;
                                case "game":
                                    break;
                                case "history":
                                    he(), ue(s.BASE_POPUP_NAMES.GLOBAL_HISTORY);
                                    break;
                                case "bonusHistory":
                                    (0, c.W)(), ue(s.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY);
                                    break;
                                case "promotions":
                                    (0, U.N)(), ue(s.BASE_POPUP_NAMES.PROMOTIONS);
                                    break;
                                case "rules":
                                    ue(s.BASE_POPUP_NAMES.RULES);
                                    break;
                                case "leaderboard":
                                    ue(s.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY)
                            }
                        }, [u.partnerId, ge, u.culture]);
                    (0, o.useEffect)(function() {
                        k.current || (k.current = document.getElementsByTagName("body")[0]), re(te), k.current.style.overflow = te ? "hidden" : ""
                    }, [te]), (0, o.useEffect)(function() {
                        return W.A.init(), q("GalaxsysFreeze", function(e) {
                                var t = e.isFreezed;
                                ce(t)
                            }),
                            function() {
                                W.A.remove(), J("GalaxsysFreeze")
                            }
                    }, []), (0, o.useEffect)(function() {
                        Be && !be && ((0, F.x)(), S())
                    }, [Be, be]);
                    var Pe = (0, o.useCallback)(function(e) {
                        P(e), pe(e)
                    }, []);
                    return {
                        setIsCssVariablesLoaded: z,
                        setIsContentLoaded: $,
                        menuOpened: te,
                        blurred: ae,
                        showBackdrop: ie,
                        openPopup: ue,
                        getHashCode: fe,
                        getBetHistory: he,
                        isDeactivated: ve,
                        gameAssetsAreLoading: be,
                        handleMenuClick: Se,
                        mediaIsLoaded: Ie,
                        openTab: He,
                        isBaseDataLoaded: Be,
                        setSocketListeners: Pe
                    }
                }
        },
        3125(e, t, n) {
            n.d(t, {
                A: () => G
            });
            var o = n(5556),
                a = n.n(o),
                r = n(8283),
                s = n(6653),
                i = n(1703),
                c = n.n(i),
                u = n(5114),
                l = n.n(u),
                d = n(6295),
                f = n(3387),
                h = n(2182),
                p = n(6337),
                m = n(4721),
                v = n(4848),
                y = (0, r.lazy)(function() {
                    return n.e(1045).then(n.t.bind(n, 1045, 23))
                }),
                b = (0, r.lazy)(function() {
                    return n.e(5222).then(n.t.bind(n, 5222, 23))
                }),
                g = (0, r.lazy)(function() {
                    return n.e(4518).then(n.t.bind(n, 4518, 23))
                }),
                B = (0, r.lazy)(function() {
                    return n.e(5487).then(n.t.bind(n, 5487, 23))
                });

            function S(e) {
                var t, n = e.style,
                    o = e.theme,
                    a = (0, s.useDispatch)(),
                    i = (0, h.shallowSelector)(h.selectPopups),
                    u = (0, h.shallowSelector)(h.selectGameTypeNames),
                    S = (0, h.shallowSelector)(h.selectBonuses),
                    G = (0, h.shallowSelector)(h.selectResources),
                    I = (0, h.shallowSelector)(m.lz),
                    H = l().get("gameType"),
                    P = (0, s.useSelector)(h.selectHostName),
                    w = S.notificationList,
                    L = S.selected,
                    k = S.disabledSwitcher,
                    M = S.finishedBonuses,
                    N = S.isBonusNotificationOpen,
                    E = (0, r.useCallback)(function() {
                        (0, d.redirectToRealGameGalaxsys)({
                            playerId: p.playerId,
                            partnerId: p.partnerId,
                            gameKindName: p.gameKindName,
                            referer: p.referer,
                            hostName: P
                        })
                    }, [p.playerId, p.partnerId, p.gameKindName, p.referer, P]),
                    x = (0, r.useCallback)(function(e) {
                        return a(h.actions.closePopup({
                            name: e
                        }))
                    }, []),
                    R = (0, r.useCallback)(function() {
                        p.isMobile ? (1 === w.length && a(h.actions.openBonusNotification(null)), a(h.actions.removeBonusNotification()), c().setItem("bonus_id_".concat(w[0].id), !0)) : (a(h.actions.openBonusNotification(null)), w.forEach(function(e) {
                            a(h.actions.removeBonusNotification()), c().setItem("bonus_id_".concat(e.id), !0)
                        }))
                    }, [w]),
                    C = (0, r.useCallback)(function() {
                        return x(f.BASE_POPUP_NAMES.BONUS_LIST_BAR)
                    }, []),
                    T = (0, r.useCallback)(function(e) {
                        if (N && R(), !k) {
                            if ((null == L ? void 0 : L.id) === e.id) return a(h.actions.setBonusEnabled({
                                status: !1,
                                selected: null
                            })), void c().removeItem("active_bonus_id");
                            a(h.actions.setBonusEnabled({
                                status: !0,
                                selected: e
                            })), c().setItem("active_bonus_id", e.id)
                        }
                    }, [L, k, S, i, R]),
                    A = (0, r.useCallback)(function() {
                        var e;
                        S.disabledSwitcher || (a(h.actions.setBonusEnabled({
                            status: !0,
                            selected: null == w ? void 0 : w[0]
                        })), c().setItem("active_bonus_id", null == w || null === (e = w[0]) || void 0 === e ? void 0 : e.id), p.isDemo ? E() : R())
                    }, [S, w]),
                    O = (0, r.useCallback)(function(e) {
                        a(h.actions.removeFinishedBonus(e))
                    }, []);
                return I ? (0, v.jsxs)(v.Fragment, {
                    children: [(0, v.jsx)(r.Suspense, {
                        fallback: null,
                        children: (null === (t = i[f.BASE_POPUP_NAMES.BONUS_LIST_BAR]) || void 0 === t ? void 0 : t.open) && (0, v.jsx)(g, {
                            theme: o,
                            onClose: C,
                            styles: n.bonusListBar,
                            resources: G,
                            bonuses: S,
                            onButtonClick: T,
                            gameName: p.gameTypeName,
                            gameType: H,
                            similarGames: u
                        })
                    }), (0, v.jsx)(r.Suspense, {
                        fallback: null,
                        children: N ? p.isMobile ? (0, v.jsx)(y, {
                            iconColor: "rgba(var(--white),0.6)",
                            currencyId: w[0].currencyId,
                            culture: p.culture,
                            bonus: w[0],
                            resources: G,
                            onClose: R,
                            onClick: function() {
                                a(h.actions.openPopup({
                                    name: f.BASE_POPUP_NAMES.BONUS_LIST_BAR
                                })), a(h.actions.openBonusNotification(null))
                            },
                            styles: n.bonusNotification,
                            gameKindName: p.gameKindName
                        }, w[0].id) : (0, v.jsx)(b, {
                            iconColor: "rgba(var(--white),0.8)",
                            culture: p.culture,
                            bonuses: w,
                            resources: G,
                            onClose: R,
                            onUseClick: A,
                            styles: n.bonusAside,
                            gameKindName: p.gameKindName,
                            showUseBonus: !(null != S && S.selected || null != S && S.disabledSwitcher)
                        }) : null
                    }), (0, v.jsx)(r.Suspense, {
                        fallback: null,
                        children: !(null == M || !M.length) && (0, v.jsx)(B, {
                            finishedBonus: null == M ? void 0 : M[0],
                            styles: n.bonusWinPopup,
                            resources: G,
                            culture: p.culture,
                            onClick: O
                        })
                    })]
                }) : null
            }
            S.defaultProps = {
                style: {},
                theme: ""
            }, S.propTypes = {
                style: a().object,
                theme: a().string
            };
            const G = (0, r.memo)(S)
        }
    }
]);