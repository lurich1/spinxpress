/*! For license information please see 6337.b9f1435e67481fba883c.js.LICENSE.txt */
"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [6337, 8517], {
        7749(t, e, r) {
            r.d(e, {
                DS: () => i,
                LU: () => n,
                xP: () => o
            });
            var n = "https://lobby-api.jdduuee-54rg78cw.com",
                o = "/gx-lobby-service",
                i = !1
        },
        8517(t, e, r) {
            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            r.r(e), r.d(e, {
                IS_MUSIC_ON: () => p,
                IS_ON: () => d,
                IS_SOUND_ON: () => _,
                MAX_AUTOBET: () => s,
                MAX_AUTOCASHOUT: () => l,
                REMOTE_CLIENT_URLS: () => m,
                defaultAutoPlayOptions: () => E,
                isFeatureMessagePackEnabled: () => h,
                isMessagePackEnabled: () => f
            });
            var o, i = (0, r(6295).getParamsFromUrl)(),
                a = i.isMessagePackEnabled,
                c = i.isFeatureMessagePackEnabled,
                u = i.isHistory,
                s = 100,
                l = 699999.99,
                f = "true" === (null == a ? void 0 : a.toLowerCase()),
                h = "true" === (null == c ? void 0 : c.toLowerCase()),
                y = u ? "History" : "",
                _ = "isSoundOn".concat(y),
                p = "isMusicOn".concat(y),
                d = "isOn".concat(y),
                m = (o = {}, Object.entries({
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
                }).forEach(function(t) {
                    var e, r, i, a, c = (a = 2, function(t) {
                            if (Array.isArray(t)) return t
                        }(i = t) || function(t, e) {
                            var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != r) {
                                var n, o, i, a, c = [],
                                    u = !0,
                                    s = !1;
                                try {
                                    if (i = (r = r.call(t)).next, 0 === e) {
                                        if (Object(r) !== r) return;
                                        u = !1
                                    } else
                                        for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
                                } catch (t) {
                                    s = !0, o = t
                                } finally {
                                    try {
                                        if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                                    } finally {
                                        if (s) throw o
                                    }
                                }
                                return c
                            }
                        }(i, a) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return n(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
                            }
                        }(i, a) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = c[0],
                        s = c[1];
                    o[u] = (e = s, ((r = new URL(window.location.href).origin).includes("localhost") ? {
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
                    }.REACT_APP_DOMAIN : r) + {
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
                    }[e])
                }), o),
                E = {
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
        6337(t, e, r) {
            r.r(e), r.d(e, {
                GFA: () => E,
                IEnumerable: () => z,
                activeGameId: () => w,
                addQueryParams: () => B,
                backUrl: () => g,
                betDate: () => U,
                checkIsMyMission: () => $,
                connectionQuery: () => M,
                culture: () => N,
                fetchTranslations: () => Q,
                gameKindName: () => R,
                gameTypeName: () => I,
                getSettingsMenuHaveCustomization: () => X,
                isDemo: () => O,
                isHistory: () => x,
                isMobile: () => C,
                isTablet: () => A,
                mapWinnersList: () => Z,
                mappedGlobalBonusHistory: () => G,
                mode: () => b,
                parseObjectToArray: () => J,
                partnerId: () => j,
                playerId: () => D,
                referer: () => P,
                responseFromServerToObject: () => W,
                responseFromServerToObjectForFeature: () => V,
                setRulesVersionInStorage: () => H,
                skinningName: () => S,
                sortTickets: () => Y
            });
            var n = r(8283),
                o = r(6884),
                i = r(6295),
                a = r(1703),
                c = r.n(a),
                u = r(3387),
                s = r(8517),
                l = r(7749),
                f = r(4848);

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }

            function y() {
                y = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    c = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof A ? e : A,
                        a = Object.create(i.prototype),
                        c = new S(n || []);
                    return o(a, "_invoke", {
                        value: I(t, r, c)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var _ = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    E = {};

                function A() {}

                function v() {}

                function b() {}
                var g = {};
                s(g, a, function() {
                    return this
                });
                var L = Object.getPrototypeOf,
                    T = L && L(L(x([])));
                T && T !== r && n.call(T, a) && (g = T);
                var P = b.prototype = A.prototype = Object.create(g);

                function C(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        s(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function R(t, e) {
                    function r(o, i, a, c) {
                        var u = f(t[o], t, i);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                l = s.value;
                            return l && "object" == h(l) && n.call(l, "__await") ? e.resolve(l.__await).then(function(t) {
                                r("next", t, a, c)
                            }, function(t) {
                                r("throw", t, a, c)
                            }) : e.resolve(l).then(function(t) {
                                s.value = t, a(s)
                            }, function(t) {
                                return r("throw", t, a, c)
                            })
                        }
                        c(u.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e(function(e, o) {
                                    r(t, n, e, o)
                                })
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function I(e, r, n) {
                    var o = _;
                    return function(i, a) {
                        if (o === d) throw Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var c = n.delegate;
                            if (c) {
                                var u = w(c, n);
                                if (u) {
                                    if (u === E) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === _) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var s = f(e, r, n);
                            if ("normal" === s.type) {
                                if (o = n.done ? m : p, s.arg === E) continue;
                                return {
                                    value: s.arg,
                                    done: n.done
                                }
                            }
                            "throw" === s.type && (o = m, n.method = "throw", n.arg = s.arg)
                        }
                    }
                }

                function w(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, w(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), E;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, E;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, E) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, E)
                }

                function N(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(N, this), this.reset(!0)
                }

                function x(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(h(e) + " is not iterable")
                }
                return v.prototype = b, o(P, "constructor", {
                    value: b,
                    configurable: !0
                }), o(b, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = s(b, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, s(t, u, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, C(R.prototype), s(R.prototype, c, function() {
                    return this
                }), e.AsyncIterator = R, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new R(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next()
                    })
                }, C(P), s(P, u, "Generator"), s(P, a, function() {
                    return this
                }), s(P, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = x, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(O), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return c.type = "throw", c.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                c = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                    s = n.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, E) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), E
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), E
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), E
                    }
                }, e
            }

            function _(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(r), !0).forEach(function(e) {
                        var n, o, i, a;
                        n = t, o = e, i = r[e], a = function(t) {
                            if ("object" != h(t) || !t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var r = e.call(t, "string");
                                if ("object" != h(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(t)
                        }(o), (o = "symbol" == h(a) ? a : a + "") in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function d(t, e, r, n, o, i, a) {
                try {
                    var c = t[i](a),
                        u = c.value
                } catch (t) {
                    return void r(t)
                }
                c.done ? e(u) : Promise.resolve(u).then(n, o)
            }
            var m = (0, n.lazy)(function() {
                    return r.e(2419).then(r.t.bind(r, 2419, 23))
                }),
                E = (0, o.GalaxsysFrontendApi)(),
                A = (0, i.getIsTablet)(),
                v = (0, i.getTypedParamsFromURL)() || {},
                b = v.mode,
                g = v.backUrl,
                L = v.partnerId,
                T = v.playerId,
                P = v.referer,
                C = v.isMobile,
                R = v.gameKindName,
                I = v.gameTypeName,
                w = v.activeGameId,
                N = v.culture,
                O = v.isDemo,
                S = v.skinningName,
                x = v.isHistory,
                U = v.betDate,
                k = v.token,
                j = +L,
                D = +T,
                M = {
                    partnerId: j,
                    token: k,
                    isDemo: O
                },
                B = function(t, e) {
                    var r = "";
                    return Object.keys(e).forEach(function(t) {
                        r.length > 0 && (r += "&"), r += "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
                    }), t + r
                },
                H = function(t, e) {
                    if (t) {
                        var r = "rule_".concat(null == R ? void 0 : R.toLowerCase(), "_").concat(N, "_").concat(j),
                            n = null === c() || void 0 === c() ? void 0 : c().getItem(r);
                        n ? n !== t.toString() && (null === c() || void 0 === c() || c().setItem(r, t), setTimeout(function() {
                            e()
                        }, 1e4)) : null === c() || void 0 === c() || c().setItem(r, t)
                    }
                },
                F = {
                    main: {
                        flexDirection: C ? "row" : "row-reverse"
                    },
                    indicator: {
                        flex: "0 0 0.833em",
                        width: "0.833em",
                        height: "0.833em"
                    },
                    text: {
                        fontSize: "1.2em",
                        textTransform: "capitalize"
                    }
                },
                G = function(t, e) {
                    var r = e.strBet,
                        o = e.strExpireDate,
                        a = e.strType,
                        c = e.strQuantity,
                        l = e.strTotalWin,
                        h = e.strDate,
                        y = e.strStatus,
                        _ = e.strActive,
                        p = e.strInactive;
                    return {
                        headers: [a, c, r, l, h, o, y],
                        body: null == t ? void 0 : t.map(function(t) {
                            var r = t.type,
                                o = t.count,
                                a = t.quantity,
                                c = t.bet,
                                l = t.totalWin,
                                h = t.assignDate,
                                y = t.date,
                                d = t.expireDate,
                                E = t.status;
                            return {
                                type: u.BonusTypesById[+r] && e["str".concat(u.BonusTypesById[+r])] || "Free Bonus",
                                quantity: o || a || "-",
                                bet: c,
                                totalWin: l,
                                date: (0, i.getFormattedDateTime)(h || y, s.isFeatureMessagePackEnabled),
                                expireDate: (0, i.getFormattedDateTime)(d, s.isFeatureMessagePackEnabled),
                                status: (0, f.jsx)(n.Suspense, {
                                    fallback: null,
                                    children: (0, f.jsx)(m, {
                                        styles: F,
                                        status: E,
                                        children: 1 === E ? _ : p
                                    })
                                })
                            }
                        }),
                        winBy: "totalWin"
                    }
                },
                K = function(t) {
                    return (null == t ? void 0 : t.sort(function(t, e) {
                        return e.betInfo[0].betCoin + e.betInfo[1].betCoin - t.betInfo[0].betCoin - t.betInfo[1].betCoin
                    })) || []
                },
                Y = function(t) {
                    var e = [],
                        r = [];
                    return null == t || t.forEach(function(t) {
                        t.playerId === +D ? e.push(t) : r.push(t)
                    }), K(e), K(r), [].concat(e, r)
                };

            function W(t, e) {
                return s.isMessagePackEnabled ? t(e) : e
            }

            function V(t, e) {
                return s.isFeatureMessagePackEnabled ? t(e) : e
            }
            var z = {
                map: function(t, e) {
                    return null == t ? void 0 : t.map(function(t) {
                        return e(t)
                    })
                }
            };

            function J(t) {
                return t ? Object.values(t).map(function(t) {
                    return t instanceof Date ? t.toISOString() : t instanceof Set ? Array.from(t) : t instanceof Object && !Array.isArray(t) ? J(t) : t
                }) : []
            }

            function Q() {
                return q.apply(this, arguments)
            }

            function q() {
                var t;
                return t = y().mark(function t() {
                    var e, r;
                    return y().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = new URL(window.location.href).origin, r = e.includes("localhost") ? l.LU : "".concat(e).concat(l.xP), t.abrupt("return", fetch("".concat(r, "/Lobby/GetGameTranslations/?partnerId=").concat(j, "&gameType=").concat(I, "&culture=").concat(N)).then(function(t) {
                                    return t.ok ? t.json() : Promise.reject()
                                }).catch(function() {
                                    return Promise.reject()
                                }));
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }), q = function() {
                    var e = this,
                        r = arguments;
                    return new Promise(function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            d(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            d(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    })
                }, q.apply(this, arguments)
            }
            var X = function() {
                    return {
                        blackjack: !0,
                        blackjack94: !0
                    }[null == I ? void 0 : I.toLowerCase()]
                },
                $ = function(t, e) {
                    var r, n = null === (r = t.reward.currencyAmounts) || void 0 === r ? void 0 : r.find(function(t) {
                        return t.currencyCode === e
                    });
                    return n ? p(p({}, t), {}, {
                        reward: p(p({}, t.reward), {}, {
                            rewardAmount: t.reward.rewardAmount || n.amount
                        })
                    }) : t.reward.currencyAmounts || !t.conditions.find(function(t) {
                        var r;
                        return null === (r = t.inputs.currnecies) || void 0 === r ? void 0 : r.find(function(t) {
                            return t.currencyCode === e
                        })
                    }) && !t.conditions.every(function(t) {
                        return !t.inputs.currnecies
                    }) ? null : t
                },
                Z = function(t, e, r, n) {
                    return (null == t ? void 0 : t.map(function(t) {
                        var o = t.currencyId === e,
                            a = o ? t.bet : (0, i.multiplyWithPrecision)(t.betCoin, r, n),
                            c = o ? t.win : (0, i.multiplyWithPrecision)(t.winCoin, r, n);
                        return {
                            betTime: t.betTime,
                            playerId: t.playerNickName,
                            coefficient: t.coefficent,
                            bet: a,
                            win: c
                        }
                    })) || []
                }
        }
    }
]);