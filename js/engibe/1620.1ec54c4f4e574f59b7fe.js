/*! For license information please see 1620.1ec54c4f4e574f59b7fe.js.LICENSE.txt */
"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [1620], {
        6866(e, t, n) {
            n.r(t), n.d(t, {
                default: () => d
            });
            var r = n(8283),
                o = n(2384),
                a = n(1703),
                i = n.n(a),
                c = n(6025),
                u = n(2182);

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a, i, c = [],
                            u = !0,
                            s = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                u = !1
                            } else
                                for (; !(u = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
                        } catch (e) {
                            s = !0, o = e
                        } finally {
                            try {
                                if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (s) throw o
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var f = "isSoundOn",
                p = "isMusicOn";

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.soundUrl,
                    n = void 0 === t ? "" : t,
                    a = e.soundObj,
                    l = void 0 === a ? {} : a,
                    d = e.musicUrl,
                    m = void 0 === d ? "" : d,
                    v = e.musicObj,
                    y = void 0 === v ? {} : v,
                    h = (0, o.useWindowVisibility)(),
                    b = (0, u.shallowSelector)(c.cd),
                    g = (0, u.shallowSelector)(u.selectPartnerUIConfig).hideMusic,
                    P = s((0, r.useState)(!!n && (null === (null === i() || void 0 === i() ? void 0 : i().getItem(f)) || "true" === (null === i() || void 0 === i() ? void 0 : i().getItem(f)))), 2),
                    O = P[0],
                    S = P[1],
                    w = s((0, r.useState)(!(g || !m || null !== (null === i() || void 0 === i() ? void 0 : i().getItem(p)) && "true" !== (null === i() || void 0 === i() ? void 0 : i().getItem(p)))), 2),
                    k = w[0],
                    I = w[1],
                    j = s((0, o.useSounds)(!O, n, l), 5),
                    E = j[0],
                    F = j[1],
                    A = j[2],
                    C = j[3],
                    L = j[4],
                    _ = s((0, o.useSounds)(!k, m, y), 6),
                    T = _[0],
                    N = _[1],
                    M = _[2],
                    D = (_[3], _[4], _[5]);
                (0, r.useEffect)(function() {
                    null === i() || void 0 === i() || i().setItem(f, h ? E && O : null === i() || void 0 === i() ? void 0 : i().getItem(f))
                }, [O, E]), (0, r.useEffect)(function() {
                    null === i() || void 0 === i() || i().setItem(p, h ? T && k : null === i() || void 0 === i() ? void 0 : i().getItem(p))
                }, [k, T]), (0, o.useDidUpdate)(function() {
                    h ? (S("true" === (null === i() || void 0 === i() ? void 0 : i().getItem(f))), I("true" === (null === i() || void 0 === i() ? void 0 : i().getItem(p))), "true" === (null === i() || void 0 === i() ? void 0 : i().getItem(p)) && N("background")) : (S(!1), I(!1))
                }, [h]);
                var x = (0, r.useMemo)(function() {
                        return {
                            isLoaded: E,
                            isOn: O,
                            play: F,
                            stop: A,
                            stopAll: L,
                            setOn: n ? S : function() {},
                            playedSounds: C
                        }
                    }, [E, O, F, A, S, L]),
                    U = (0, r.useMemo)(function() {
                        return {
                            isLoaded: T,
                            isOn: k,
                            play: N,
                            stop: M,
                            setOn: m ? I : function() {},
                            setVolume: D
                        }
                    }, [T, k, N, M, I]);
                return (0, r.useEffect)(function() {
                    b || !k && !O || (n && S(!0), m && I(!g))
                }, [b]), {
                    sound: x,
                    music: U
                }
            }
        },
        8718(e, t, n) {
            n.d(t, {
                O: () => r
            });
            var r = {
                BonusHistory: "BonusHistory",
                BonusInfo: "BonusInfo",
                UpdateBonusInfo: "UpdateBonusInfo",
                FinishBonus: "FinishBonus"
            }
        },
        1620(e, t, n) {
            n.r(t), n.d(t, {
                ConnectionService: () => Z,
                featuresHubConnection: () => V.FS,
                getFeaturesHubConnection: () => V.tx,
                getHubConnection: () => W,
                hubConnection: () => z,
                requestFeaturesToServer: () => V.dt,
                requestToServer: () => H,
                useSignalR: () => G
            });
            var r = n(8283),
                o = n(5556),
                a = n.n(o),
                i = n(2384),
                c = n(6295),
                u = n(6653),
                s = n(291),
                l = n(2521),
                f = n(250),
                p = n(6235),
                d = n(3387),
                m = n(2182),
                v = n(8517);

            function y(e) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, y(e)
            }

            function h() {
                h = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var a = t && t.prototype instanceof g ? t : g,
                        i = Object.create(a.prototype),
                        c = new _(r || []);
                    return o(i, "_invoke", {
                        value: F(e, n, c)
                    }), i
                }

                function f(e, t, n) {
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
                var p = "suspendedStart",
                    d = "suspendedYield",
                    m = "executing",
                    v = "completed",
                    b = {};

                function g() {}

                function P() {}

                function O() {}
                var S = {};
                s(S, i, function() {
                    return this
                });
                var w = Object.getPrototypeOf,
                    k = w && w(w(T([])));
                k && k !== n && r.call(k, i) && (S = k);
                var I = O.prototype = g.prototype = Object.create(S);

                function j(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        s(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function E(e, t) {
                    function n(o, a, i, c) {
                        var u = f(e[o], e, a);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                l = s.value;
                            return l && "object" == y(l) && r.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                                n("next", e, i, c)
                            }, function(e) {
                                n("throw", e, i, c)
                            }) : t.resolve(l).then(function(e) {
                                s.value = e, i(s)
                            }, function(e) {
                                return n("throw", e, i, c)
                            })
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t(function(t, o) {
                                    n(e, r, t, o)
                                })
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function F(t, n, r) {
                    var o = p;
                    return function(a, i) {
                        if (o === m) throw Error("Generator is already running");
                        if (o === v) {
                            if ("throw" === a) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var c = r.delegate;
                            if (c) {
                                var u = A(c, r);
                                if (u) {
                                    if (u === b) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p) throw o = v, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = m;
                            var s = f(t, n, r);
                            if ("normal" === s.type) {
                                if (o = r.done ? v : d, s.arg === b) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (o = v, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function A(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
                    var a = f(o, t.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, b;
                    var i = a.arg;
                    return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, b) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function L(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function _(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function T(t) {
                    if (t || "" === t) {
                        var n = t[i];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(y(t) + " is not iterable")
                }
                return P.prototype = O, o(I, "constructor", {
                    value: O,
                    configurable: !0
                }), o(O, "constructor", {
                    value: P,
                    configurable: !0
                }), P.displayName = s(O, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === P || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, O) : (e.__proto__ = O, s(e, u, "GeneratorFunction")), e.prototype = Object.create(I), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, j(E.prototype), s(E.prototype, c, function() {
                    return this
                }), t.AsyncIterator = E, t.async = function(e, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new E(l(e, n, r, o), a);
                    return t.isGeneratorFunction(n) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, j(I), s(I, u, "Generator"), s(I, i, function() {
                    return this
                }), s(I, "toString", function() {
                    return "[object Generator]"
                }), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = T, _.prototype = {
                    constructor: _,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
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

                        function o(r, o) {
                            return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                c = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    s = r.call(i, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, b) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), b
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    L(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: T(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), b
                    }
                }, t
            }

            function b(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, P(r.key), r)
                }
            }

            function P(e) {
                var t = function(e) {
                    if ("object" != y(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != y(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == y(t) ? t : t + ""
            }

            function O(e, t, n) {
                return t = w(t),
                    function(e, t) {
                        if (t && ("object" === y(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, S() ? Reflect.construct(t, n || [], w(e).constructor) : t.apply(e, n))
            }

            function S() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (S = function() {
                    return !!e
                })()
            }

            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, w(e)
            }

            function k(e, t) {
                return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, k(e, t)
            }

            function I(e, t, n) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.set(e, n)
            }

            function j(e, t) {
                return e.get(F(e, t))
            }

            function E(e, t, n) {
                return e.set(F(e, t), n), n
            }

            function F(e, t, n) {
                if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
                throw new TypeError("Private element is not present on this object")
            }
            var A = new WeakMap,
                C = new WeakMap,
                L = new WeakMap,
                _ = function(e) {
                    function t(e) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), I(n = O(this, t), A, 0), I(n, C, 0), I(n, L, !0), n.listeners = {}, e && (e.invokeResponseDelay && E(A, n, e.invokeResponseDelay), e.connectionInitializeDelay && E(C, n, e.connectionInitializeDelay), e.connectionInitializeDelay && E(L, n, e.setUpListenersOnce)), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && k(e, t)
                    }(t, e), n = t, r = [{
                        key: "on",
                        value: function(e, t) {
                            this.listeners[e] ? j(L, this) || this.listeners[e].push(t) : this.listeners[e] = [t]
                        }
                    }, {
                        key: "invoke",
                        value: function(e, t) {
                            var n = this;
                            return new Promise(function() {
                                setTimeout(function() {
                                    var r;
                                    null === (r = n.listeners[e]) || void 0 === r || r.forEach(function(e) {
                                        e(t)
                                    })
                                }, j(A, n))
                            })
                        }
                    }, {
                        key: "onclose",
                        value: function() {}
                    }, {
                        key: "start",
                        value: (o = h().mark(function e() {
                            var t = this;
                            return h().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise(function(e, n) {
                                            setTimeout(function() {
                                                e(t), console.log("Mock connection is initialized -----------------")
                                            }, j(C, t))
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), a = function() {
                            var e = this,
                                t = arguments;
                            return new Promise(function(n, r) {
                                var a = o.apply(e, t);

                                function i(e) {
                                    b(a, n, r, i, c, "next", e)
                                }

                                function c(e) {
                                    b(a, n, r, i, c, "throw", e)
                                }
                                i(void 0)
                            })
                        }, function() {
                            return a.apply(this, arguments)
                        })
                    }], r && g(n.prototype, r), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, r, o, a
                }(s.$);
            const T = _;
            var N = n(6337);

            function M(e) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, M(e)
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function x() {
                x = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var a = t && t.prototype instanceof h ? t : h,
                        i = Object.create(a.prototype),
                        c = new C(r || []);
                    return o(i, "_invoke", {
                        value: j(e, n, c)
                    }), i
                }

                function f(e, t, n) {
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
                var p = "suspendedStart",
                    d = "suspendedYield",
                    m = "executing",
                    v = "completed",
                    y = {};

                function h() {}

                function b() {}

                function g() {}
                var P = {};
                s(P, i, function() {
                    return this
                });
                var O = Object.getPrototypeOf,
                    S = O && O(O(L([])));
                S && S !== n && r.call(S, i) && (P = S);
                var w = g.prototype = h.prototype = Object.create(P);

                function k(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        s(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function I(e, t) {
                    function n(o, a, i, c) {
                        var u = f(e[o], e, a);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                l = s.value;
                            return l && "object" == M(l) && r.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                                n("next", e, i, c)
                            }, function(e) {
                                n("throw", e, i, c)
                            }) : t.resolve(l).then(function(e) {
                                s.value = e, i(s)
                            }, function(e) {
                                return n("throw", e, i, c)
                            })
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t(function(t, o) {
                                    n(e, r, t, o)
                                })
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function j(t, n, r) {
                    var o = p;
                    return function(a, i) {
                        if (o === m) throw Error("Generator is already running");
                        if (o === v) {
                            if ("throw" === a) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var c = r.delegate;
                            if (c) {
                                var u = E(c, r);
                                if (u) {
                                    if (u === y) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p) throw o = v, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = m;
                            var s = f(t, n, r);
                            if ("normal" === s.type) {
                                if (o = r.done ? v : d, s.arg === y) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (o = v, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function E(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var a = f(o, t.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                    var i = a.arg;
                    return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function F(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function A(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(F, this), this.reset(!0)
                }

                function L(t) {
                    if (t || "" === t) {
                        var n = t[i];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(M(t) + " is not iterable")
                }
                return b.prototype = g, o(w, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = s(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, s(e, u, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, k(I.prototype), s(I.prototype, c, function() {
                    return this
                }), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new I(l(e, n, r, o), a);
                    return t.isGeneratorFunction(n) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, k(w), s(w, u, "Generator"), s(w, i, function() {
                    return this
                }), s(w, "toString", function() {
                    return "[object Generator]"
                }), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = L, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
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

                        function o(r, o) {
                            return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                c = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    s = r.call(i, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    A(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: L(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, t
            }

            function U(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function B(e, t, n) {
                var r;
                return r = function(e) {
                    if ("object" != M(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != M(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t), (t = "symbol" == M(r) ? r : r + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var R = {
                hubConnection: null
            };

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = (0, u.useSelector)(m.selectHubIsConnected),
                    a = (0, u.useDispatch)(),
                    i = (0, r.useRef)(null),
                    y = (0, r.useRef)(null),
                    h = (0, r.useRef)(null);
                (0, r.useEffect)(function() {
                    var e = function() {
                        a(m.actions.setHubConnected(B({}, t.name, !1))), y.current && y.current.stop()
                    };
                    return window.addEventListener("offline", e),
                        function() {
                            window.removeEventListener("offline", e)
                        }
                }, []), (0, r.useEffect)(function() {
                    return y.current = function() {
                            var r = null,
                                o = i.current;
                            if (null !== o) return o;
                            (r = t.isMockConnection || t.isHistory ? new T(t) : v.isMessagePackEnabled ? (new s.$).withUrl((0, N.addQueryParams)("".concat(e, "?"), N.connectionQuery), {
                                skipNegotiation: !0,
                                transport: l.w.WebSockets
                            }).configureLogging(f.$.None).withHubProtocol(new p.E).build() : (new s.$).withUrl((0, N.addQueryParams)("".concat(e, "?"), N.connectionQuery), {
                                skipNegotiation: !0,
                                transport: l.w.WebSockets
                            }).configureLogging(f.$.Information).build()).serverTimeoutInMilliseconds = t.serverTimeoutInMilliseconds || 3e4, r.keepAliveIntervalInMilliseconds = t.keepAliveIntervalInMilliseconds || 5e3, i.current = r;
                            var u = function() {
                                var e, o = (e = x().mark(function e() {
                                    return x().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    function() {
                                                        var e;
                                                        return e = "slot" === t.gameType ? "".concat(d.SLOT_CDN_URL, "/common/fonts/index.css") : "".concat(d.CDN_URL, "/fonts/index.css"), (0, c.getIsAPIAvailable)(e)
                                                    }();
                                            case 2:
                                                e.sent && null === h.current || t.isMockConnection || null != t && t.isHistory ? (console.log("SignalR connected, waiting for actions"), a(m.actions.setHubConnected(B({}, t.name, !0))), h.current = !0, "function" == typeof n && n(r), t.isMockConnection && r.invoke("MockConnectionInitialized"), t.isHistory && r.invoke("HistoryConnectionInitialized")) : (console.log("Reloading..."), window.location.reload());
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }), function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise(function(r, o) {
                                        var a = e.apply(t, n);

                                        function i(e) {
                                            U(a, r, o, i, c, "next", e)
                                        }

                                        function c(e) {
                                            U(a, r, o, i, c, "throw", e)
                                        }
                                        i(void 0)
                                    })
                                });
                                return function() {
                                    return o.apply(this, arguments)
                                }
                            }();

                            function y() {
                                r.start().then(u).catch(function(e) {
                                    console.log(e), setTimeout(y, t.reconnectTimeInMilliseconds || 5e3)
                                })
                            }
                            return r.start().then(u).catch(function(e) {
                                console.log(e), a(m.actions.setHubConnected(B({}, t.name, !1))), h.current = !1
                            }), r.onClosed = function(e) {
                                console.log(e ? "Connection closed with error: ".concat(e) : "Disconnected"), a(m.actions.setHubConnected(B({}, t.name, !1)))
                            }, r.onclose(function() {
                                console.log("Disconnected", Date.now()), a(m.actions.setHubConnected(B({}, t.name, !1))), h.current = !1, r.dontReconnect || y()
                            }), R.hubConnection = r, r
                        }(),
                        function() {
                            y.current = null
                        }
                }, [o])
            }
            var H = function(e) {
                    var t, n = e.name,
                        r = void 0 === n ? "" : n,
                        o = e.model,
                        a = void 0 === o ? null : o,
                        i = e.messagePackModel,
                        c = R.hubConnection;
                    c && (a ? Array.isArray(a) ? c.invoke.apply(c, [r].concat((t = a, function(e) {
                        if (Array.isArray(e)) return D(e)
                    }(t) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return D(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? D(e, t) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))).catch(console.error) : v.isMessagePackEnabled ? c.invoke(r, i).catch(console.error) : c.invoke(r, a).catch(console.error) : c.invoke(r).catch(console.error))
                },
                W = function() {
                    return R.hubConnection
                },
                z = R.hubConnection,
                V = n(6965),
                J = n(7749);

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var $ = (0, c.getParamsFromUrl)(),
                q = $.backUrl,
                K = $.token,
                Q = {
                    gameType: $.gameTypeName,
                    partnerId: $.partnerId,
                    token: K,
                    culture: $.culture
                };

            function X(e) {
                var t, n, r, o, a, c = e.gameName,
                    u = e.socketListeners,
                    s = (o = (0, i.useHostUrl)(c, q), a = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(o) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, a, i, c = [],
                                u = !0,
                                s = !1;
                            try {
                                if (a = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    u = !1
                                } else
                                    for (; !(u = (r = a.call(n)).done) && (c.push(r.value), c.length !== t); u = !0);
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return c
                        }
                    }(o, a) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return Y(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(e, t) : void 0
                        }
                    }(o, a) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())[1],
                    l = new URL(window.location.href).origin,
                    f = l.includes("localhost") ? J.LU : "".concat(l, "/").concat(J.xP);
                return (0, V.Ay)((t = "".concat(f, "/features?"), n = Q, r = "", Object.keys(n).forEach(function(e) {
                    r.length > 0 && (r += "&"), r += "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(n[e]))
                }), t + r), {
                    name: "features"
                }), G(s, {
                    name: "game"
                }, u), null
            }
            X.defaultProps = {
                gameName: "",
                socketListeners: function() {}
            }, X.propTypes = {
                gameName: a().string,
                socketListeners: a().func
            };
            const Z = (0, r.memo)(X)
        },
        6965(e, t, n) {
            n.d(t, {
                Ay: () => pn,
                FS: () => vn,
                tx: () => mn,
                dt: () => dn
            });
            var r = n(6653),
                o = n(291),
                a = n(250),
                i = n(2521),
                c = n(6235),
                u = n(6295),
                s = n(3387),
                l = n(4508),
                f = n(6337),
                p = function e(t) {
                    var n, r;
                    return {
                        id: t[0],
                        nickName: t[1],
                        type: t[2],
                        content: null !== (n = t[3]) && void 0 !== n ? n : null,
                        gameType: null !== (r = t[4]) && void 0 !== r ? r : null,
                        likeCount: t[5],
                        isLiked: t[6],
                        isInfluencer: t[7],
                        profanityCount: t[8],
                        date: t[9],
                        avatarUrl: t[10],
                        baseMessage: t[11] ? e(t[11]) : null,
                        hidden: t[12],
                        playerId: t[13],
                        skinningName: t[14]
                    }
                },
                d = function(e) {
                    var t;
                    return {
                        minShareCoefficient: null !== (t = +e[0]) && void 0 !== t ? t : null
                    }
                },
                m = function(e) {
                    return {
                        id: e[0],
                        isBlocked: e[1],
                        isInfluencer: e[2],
                        nickName: e[3],
                        avatarUrl: e[4],
                        canChangeNickName: e[5],
                        blockType: e[6],
                        unblockingDate: e[7] ? e[7] : null
                    }
                },
                v = function(e) {
                    return {
                        id: e[0],
                        url: e[1]
                    }
                },
                y = function(e) {
                    var t, n;
                    return {
                        id: e[0],
                        name: null !== (t = e[1]) && void 0 !== t ? t : null,
                        url: null !== (n = e[2]) && void 0 !== n ? n : null
                    }
                },
                h = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        configuration: d(e[2]),
                        player: e[3] ? m(e[3]) : null,
                        messages: f.IEnumerable.map(e[4], p),
                        pinnedMessages: f.IEnumerable.map(e[5], p),
                        defaultAvatars: f.IEnumerable.map(e[6], v),
                        emojis: f.IEnumerable.map(e[7], y)
                    }
                },
                b = function(e) {
                    return {
                        chatId: e[0],
                        message: g(e[1]),
                        baseMessage: e[2] ? g(e[2]) : null
                    }
                },
                g = function(e) {
                    var t, n;
                    return {
                        id: e[0],
                        partnerPlayerId: e[1],
                        nickName: e[2],
                        avatarUrl: e[3],
                        isInfluencer: e[4],
                        type: e[5],
                        gameType: null !== (t = e[6]) && void 0 !== t ? t : null,
                        content: null !== (n = e[7]) && void 0 !== n ? n : null,
                        date: e[8] ? e[8] : null,
                        containsProfanity: e[9],
                        partnerId: e[10],
                        playerId: e[11],
                        skinningName: e[12]
                    }
                },
                P = function(e) {
                    return {
                        id: e[0],
                        likesCount: e[1]
                    }
                },
                O = function(e) {
                    return {
                        error: e[0]
                    }
                },
                S = function(e) {
                    return {
                        messageId: e[0],
                        repliedMessageIds: e[1],
                        nickName: e[2]
                    }
                },
                w = n(2182);

            function k(e) {
                return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, k(e)
            }

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != k(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != k(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == k(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var E = [{
                    name: l.H.OnChatReceive,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(h, n);
                        r(w.actions.chatInitialState(o))
                    }
                }, {
                    name: l.H.ReceiveMessage,
                    callback: function(e) {
                        var t = e.data,
                            n = e.dispatch,
                            r = (0, f.responseFromServerToObjectForFeature)(b, t),
                            o = r.message,
                            a = r.baseMessage;
                        n(w.actions.addReceiveNewMessage({
                            message: j(j({}, o), {}, {
                                baseMessage: a
                            })
                        }))
                    }
                }, {
                    name: l.H.UpdateMessage,
                    callback: function(e) {
                        var t = e.data,
                            n = e.dispatch,
                            r = (0, f.responseFromServerToObjectForFeature)(P, t);
                        n(w.actions.setMessageLikeCount(r))
                    }
                }, {
                    name: l.H.UpdatePlayer,
                    callback: function(e) {
                        var t = e.data,
                            n = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(m, t);
                        (0, r.batch)(function() {
                            n(w.actions.setChatPlayer(o)), n(w.actions.closePopup({
                                name: s.BASE_POPUP_NAMES.CHAT_REGISTRY_POPUP
                            }))
                        })
                    }
                }, {
                    name: l.H.Error,
                    callback: function(e) {
                        var t = e.data,
                            n = e.dispatch,
                            r = (0, f.responseFromServerToObjectForFeature)(O, t);
                        n(w.actions.setChatError(r))
                    }
                }, {
                    name: l.H.DeactivateChat,
                    callback: function(e) {
                        e._, (0, e.dispatch)(w.actions.resetChatState())
                    }
                }, {
                    name: l.H.DeleteMessage,
                    callback: function(e) {
                        var t = e.data,
                            n = e.dispatch,
                            r = (0, f.responseFromServerToObjectForFeature)(S, t);
                        n(w.actions.deleteMessage(r))
                    }
                }],
                F = ("".concat(s.CDN_URL, "/images/cashback/popupBannerMobile.webp"), "".concat(s.CDN_URL, "/images/cashback/popupBannerWeb.webp"), "".concat(s.CDN_URL, "/images/cashback/cashbackBonus.webp"), "".concat(s.CDN_URL, "/images/cashback/sprite/burst.webp"), "".concat(s.CDN_URL, "/images/cashback/default.webp"), "".concat(s.CDN_URL, "/images/cashback/dots.webp"), function(e) {
                    var t;
                    return {
                        id: e[0],
                        fillPercentage: +e[1],
                        boxCount: e[2],
                        expirationTime: null === (t = e[3]) || void 0 === t ? void 0 : t.toString(),
                        isActiveIcon: e[4]
                    }
                }),
                A = function(e) {
                    return {
                        rule: e[0]
                    }
                },
                C = function(e) {
                    return {
                        boxAmounts: e[0]
                    }
                },
                L = n(1663);

            function _(e) {
                return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, _(e)
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
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != _(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != _(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == _(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var M = [{
                    name: "GetInitialStateCashBackInfo",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(F, n),
                            a = N(N({}, o), {}, {
                                fillPercentage: +(null == o ? void 0 : o.fillPercentage)
                            });
                        r(w.actions.setCashbackValues(a))
                    }
                }, {
                    name: "SelectBox",
                    callback: function(e) {
                        var t, n = e.data,
                            r = void 0 === n ? {} : n,
                            o = e.dispatch,
                            a = (0, f.responseFromServerToObjectForFeature)(C, r);
                        o(w.actions.setCashbackValues({
                            boxAmounts: a.boxAmounts,
                            fillPercentage: 0,
                            expirationTime: null
                        })), (null === (t = a.boxAmounts) || void 0 === t ? void 0 : t.length) > 0 && L.settings.playSound("win")
                    }
                }, {
                    name: "CashBackRule",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(A, n);
                        r(w.actions.setCashbackRule(o))
                    }
                }],
                D = ("".concat(s.CDN_URL, "/images/cashback/popupBannerMobile.webp"), "".concat(s.CDN_URL, "/images/cashback/popupBannerWeb.webp"), "".concat(s.CDN_URL, "/images/cashback/cashbackBonus.webp"), "".concat(s.CDN_URL, "/images/cashback/sprite/burst.webp"), "".concat(s.CDN_URL, "/images/cashback/default.webp"), "".concat(s.CDN_URL, "/images/cashback/dots.webp"), function(e) {
                    var t;
                    return {
                        id: e[0],
                        fillPercentage: +e[1],
                        boxCount: e[2],
                        expirationTime: null === (t = e[3]) || void 0 === t ? void 0 : t.toString(),
                        isActiveIcon: e[4]
                    }
                }),
                x = function(e) {
                    return {
                        rule: e[0]
                    }
                },
                U = function(e) {
                    return {
                        boxAmounts: e[0]
                    }
                },
                B = [{
                    name: "ActiveMatchDay",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(D, n),
                            a = o.activeMatches,
                            i = o.lastWin;
                        if (r(w.actions.setActiveMatchDay(a)), a && a.matchInfo.length) {
                            var c = a.matchInfo.findIndex(function(e) {
                                return !e.submitted
                            });
                            c > -1 ? r(w.actions.setPendingPopups({
                                type: s.BASE_POPUP_NAMES.ACTIVE_MATCHDAY_POPUP
                            })) : c = 0, r(w.actions.setActiveMatchesPageIndex(c))
                        }
                        i && r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.MATCHDAY_WIN_POPUP,
                            data: i
                        }))
                    }
                }, {
                    name: "SubmitMatchResponse",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(U, n),
                            a = o.pageIndex;
                        200 === o.resultCode && (r(w.actions.resetSelectedPredictions()), r(w.actions.setActiveMatchesPageIndex(a + 1)), r(w.actions.setActiveMatchDaySubmitted({
                            submitted: !0,
                            pageIndex: a
                        })))
                    }
                }, {
                    name: "MatchDayPredictionHistory",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(x, n);
                        r(w.actions.setMatchDayHistory(o))
                    }
                }, {
                    name: "MatchDayRule",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(x, n);
                        r(w.actions.setMatchDayRules(o))
                    }
                }, {
                    name: "MatchDayWin",
                    callback: function(e) {
                        var t = e.data;
                        (0, e.dispatch)(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.MATCHDAY_WIN_POPUP,
                            data: t
                        }))
                    }
                }, {
                    name: "MatchDayCancel",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch;
                        r(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.ACTIVE_MATCHDAY_POPUP
                        })), r(w.actions.closePopup({
                            name: s.BASE_POPUP_NAMES.PROMOTIONS
                        })), r(w.actions.cancelMatchDay(n.promotionId))
                    }
                }],
                R = function(e) {
                    return {
                        promotionId: e[0],
                        startDate: e[1],
                        endDate: e[2],
                        calculatedStatus: e[3],
                        remainingJars: e[4],
                        startBankValue: e[5],
                        coinValue: e[6],
                        coinBetAmount: e[7],
                        currencyId: e[8],
                        currencyName: e[9],
                        promotionName: e[10]
                    }
                },
                G = function(e) {
                    return {
                        playerNickName: e[0],
                        winAmount: e[1],
                        betTime: e[2]
                    }
                },
                H = function(e) {
                    return f.IEnumerable.map(e, G)
                },
                W = function(e) {
                    return {
                        playerAvailableCoinsCount: e[0],
                        playerProgressValueToNextCoin: e[1]
                    }
                },
                z = function(e) {
                    return {
                        coinsInJarCount: e[0],
                        startBankValue: e[1],
                        totalBankAmount: e[2],
                        jarId: e[3],
                        otherPlayerWonAmount: e[4],
                        wonByPlayerId: e[5]
                    }
                },
                V = function(e) {
                    return {
                        promotionId: e[0],
                        ruleText: e[1]
                    }
                },
                J = function(e) {
                    return {
                        promotionId: e[0]
                    }
                },
                Y = function(e) {
                    return {
                        isSuccess: e[0],
                        wonAmount: e[1],
                        currentJarResponse: z(e[2])
                    }
                },
                $ = function(e) {
                    return {
                        coinReceived: e[0]
                    }
                };

            function q(e) {
                return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, q(e)
            }

            function K(e, t) {
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
                    t % 2 ? K(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != q(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != q(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == q(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var X = "GetActiveBankSystemInfo",
                Z = "GetActiveBankSystemWinners",
                ee = "GetActivePlayerProgress",
                te = "GetCurrentJar",
                ne = "GetPendingBankSystemInfo",
                re = "GetPromotionRule",
                oe = "PushPromotionDeactivation",
                ae = "PushPrizeDrop",
                ie = "PushEarningCoins",
                ce = "ConfirmCoinReceived",
                ue = [{
                    name: X,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(R, n);
                        o.promotionId ? r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.ACTIVE_BANKSYSTEM_POPUP,
                            data: Q(Q({}, o), {}, {
                                id: o.promotionId
                            })
                        })) : r(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.ACTIVE_BANKSYSTEM_POPUP
                        })), r(w.actions.setActiveBankSystemInfo({
                            data: Q(Q({}, o), {}, {
                                id: o.promotionId
                            }),
                            hubName: X
                        }))
                    }
                }, {
                    name: Z,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(H, n);
                        setTimeout(function() {
                            r(w.actions.setActiveBankSystemWinners({
                                data: o,
                                hubName: Z
                            }))
                        }, 1e3)
                    }
                }, {
                    name: ee,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(W, n);
                        r(w.actions.setActivePlayerProgress({
                            data: o,
                            hubName: ee
                        }))
                    }
                }, {
                    name: te,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(z, n);
                        r(w.actions.setCurrentJar({
                            data: o,
                            hubName: te
                        }))
                    }
                }, {
                    name: ne,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(R, n);
                        o.promotionId ? r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.UPCOMING_BANKSYSTEM_POPUP,
                            data: o
                        })) : r(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.UPCOMING_BANKSYSTEM_POPUP
                        })), r(w.actions.setActiveBankSystemInfo({
                            data: o,
                            hubName: ne
                        }))
                    }
                }, {
                    name: re,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(V, n);
                        r(w.actions.setPromotionRule({
                            data: o,
                            hubName: re
                        }))
                    }
                }, {
                    name: oe,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(J, n);
                        r(w.actions.setPushPromotionDeactivation({
                            data: o,
                            hubName: oe
                        })), r(w.actions.closePopup({
                            name: s.BASE_POPUP_NAMES.MAIN_MENU
                        })), r(w.actions.closePopup({
                            name: s.BASE_POPUP_NAMES.PROMOTIONS
                        }))
                    }
                }, {
                    name: ae,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Y, n);
                        r(w.actions.setPushPrizeDrop({
                            data: o,
                            hubName: ae
                        }))
                    }
                }, {
                    name: ie,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(W, n);
                        r(w.actions.setActivePlayerProgress({
                            data: o,
                            hubName: ie
                        }))
                    }
                }, {
                    name: ce,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)($, n);
                        r(w.actions.setConfirmCoinReceived({
                            data: o,
                            hubName: ce
                        }))
                    }
                }],
                se = function(e) {
                    return {
                        id: e[0],
                        name: e[1]
                    }
                },
                le = function(e) {
                    return {
                        id: e[0]
                    }
                },
                fe = function(e) {
                    return {
                        leaderboardId: e[0]
                    }
                },
                pe = function(e) {
                    return {
                        leaderboardId: e[0],
                        name: e[1],
                        partnerId: e[2],
                        playerId: e[3],
                        gameTypes: e[4],
                        partnerPlayerId: e[5],
                        playerNickName: e[6],
                        currencyCode: e[7],
                        currencyId: e[8],
                        winAmount: e[9],
                        position: e[10]
                    }
                },
                de = function(e) {
                    return {
                        id: e[0],
                        playerNickname: e[1],
                        score: e[2],
                        position: e[3],
                        isWinPosition: e[4]
                    }
                },
                me = function(e) {
                    return {
                        leaderboardId: e[0],
                        players: f.IEnumerable.map(e[1], Oe)
                    }
                },
                ve = function(e) {
                    return e ? f.IEnumerable.map(e, ye) : null
                },
                ye = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        currencyId: e[2],
                        currencyCode: e[3],
                        prizeFund: e[4],
                        startDate: e[5],
                        endDate: e[6],
                        minBet: e[7],
                        gameTypes: e[8]
                    }
                },
                he = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        currencyId: e[2],
                        currencyCode: e[3],
                        prizeFund: e[4],
                        startDate: e[5],
                        endDate: e[6],
                        minBet: e[7],
                        gameTypes: e[8],
                        currentPlayerInfo: e[9] ? Oe(e[9]) : null,
                        players: e[10] ? f.IEnumerable.map(e[10], Oe) : null
                    }
                },
                be = function(e) {
                    return e ? f.IEnumerable.map(e, ge) : null
                },
                ge = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        prizePool: e[2],
                        minBet: e[3],
                        games: e[4],
                        startDate: e[5],
                        endDate: e[6],
                        status: e[7]
                    }
                },
                Pe = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        currencyId: e[2],
                        currencyCode: e[3],
                        prizeFund: e[4],
                        startDate: e[5],
                        endDate: e[6],
                        minBet: e[7],
                        gameTypes: e[8],
                        status: e[9],
                        currentPlayerInfo: e[10] ? Oe(e[10]) : null,
                        players: e[11] ? f.IEnumerable.map(e[11], Oe) : null,
                        prizes: e[12] ? f.IEnumerable.map(e[12], Se) : null,
                        rules: e[13]
                    }
                },
                Oe = function(e) {
                    return {
                        id: e[0],
                        position: e[1],
                        playerNickName: e[2],
                        score: e[3],
                        isWinPosition: e[4]
                    }
                },
                Se = function(e) {
                    var t;
                    return {
                        id: e[0],
                        placeFrom: e[1],
                        placeTo: null !== (t = e[2]) && void 0 !== t ? t : null,
                        prize: e[3],
                        currencyCode: e[4]
                    }
                },
                we = [{
                    name: "ActiveLeaderboardInfo",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(he, n);
                        r(w.actions.setLeaderBoardInfo({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardPlayersListUpdate",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(me, n);
                        r(w.actions.setActiveLeaderBoardPlayers({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardPlayerScoreUpdate",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(de, n);
                        r(w.actions.setLeaderBoardCurrentPlayer({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardInfo",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Pe, n);
                        r(w.actions.setCurrentLeaderBoard({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardHistory",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(be, n);
                        r(w.actions.setLeaderboardHistory({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardStart",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(se, n);
                        r(w.actions.setLeaderboardStart({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardFinish",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(le, n);
                        r(w.actions.setLeaderboardFinish({
                            data: o
                        }))
                    }
                }, {
                    name: "LeaderboardPlayerWin",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(pe, n);
                        r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.LEADERBOARD_WIN_POPUP,
                            data: o
                        })), r(w.actions.setLeaderboardPlayerWin(o))
                    }
                }, {
                    name: "DeactivateLeaderboard",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(fe, n);
                        r(w.actions.deactivateLeaderboard(o))
                    }
                }, {
                    name: "UpcomingLeaderboards",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(ve, n);
                        null == o || o.forEach(function(e) {
                            r(w.actions.setPendingPopups({
                                type: s.BASE_POPUP_NAMES.UPCOMING_LEADERBOARD_POPUP,
                                data: e
                            }))
                        }), r(w.actions.setUpcomingLeaderboards(o))
                    }
                }],
                ke = n(9789),
                Ie = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        calculatedStatus: e[2],
                        announceDate: e[3],
                        startDate: e[4],
                        endDate: e[5],
                        poolData: je(e[6])
                    }
                },
                je = function(e) {
                    return {
                        realMoneySum: e[0],
                        freeAmountSum: e[1],
                        freeBetSum: e[2],
                        totalPrizePool: e[3],
                        eligibleBet: e[4]
                    }
                },
                Ee = function(e) {
                    return e
                },
                Fe = function(e) {
                    return {
                        winners: f.IEnumerable.map(e, Ae)
                    }
                },
                Ae = function(e) {
                    return {
                        prizeTypeId: e[0],
                        prizeAmount: e[1],
                        freeBetsCount: e[2],
                        wonDate: e[3],
                        playerNickName: e[4],
                        prizeDropId: e[5]
                    }
                },
                Ce = function(e) {
                    return {
                        prizes: f.IEnumerable.map(e, Le)
                    }
                },
                Le = function(e) {
                    return {
                        prizeType: e[0],
                        amount: e[1],
                        freeBetsCount: e[2],
                        quantity: e[3],
                        wonQuantity: e[4],
                        remainingQuantity: e[3] - e[4]
                    }
                },
                _e = function(e) {
                    return f.IEnumerable.map(e, Ae)
                };

            function Te(e) {
                return Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Te(e)
            }

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != Te(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != Te(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == Te(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var De = ke.u.GetActiveMoneyLandInfo,
                xe = ke.u.GetActiveMoneyLandRule,
                Ue = ke.u.GetActiveMoneyLandWinners,
                Be = ke.u.GetActiveMoneyLandPrizes,
                Re = ke.u.GetPendingMoneyLandInfo,
                Ge = ke.u.PushPrizeDrops,
                He = ke.u.GetPendingMoneyLandRule,
                We = ke.u.GetPendingMoneyLandPrizes,
                ze = [{
                    name: De,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ie, n);
                        o.id ? r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.ACTIVE_MONEYLAND_POPUP,
                            data: o
                        })) : r(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.ACTIVE_MONEYLAND_POPUP
                        })), r(w.actions.setMoneyLandInfo({
                            data: o,
                            hubName: De
                        }))
                    }
                }, {
                    name: xe,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ee, n);
                        r(w.actions.setMoneyLandRules({
                            data: o
                        }))
                    }
                }, {
                    name: Ue,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Fe, n);
                        r(w.actions.setMoneyLandWinnersList({
                            data: o
                        }))
                    }
                }, {
                    name: Be,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ce, n);
                        r(w.actions.setMoneyLandPrizesList({
                            data: o,
                            hubName: Be
                        }))
                    }
                }, {
                    name: Re,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ie, n);
                        o.id ? r(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.UPCOMING_MONEYLAND_POPUP,
                            data: o
                        })) : r(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.UPCOMING_MONEYLAND_POPUP
                        })), r(w.actions.setMoneyLandInfo({
                            data: o,
                            hubName: Re
                        }))
                    }
                }, {
                    name: He,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ee, n);
                        r(w.actions.setMoneyLandRules({
                            data: o
                        }))
                    }
                }, {
                    name: We,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ce, n);
                        r(w.actions.setMoneyLandPrizesList({
                            data: o,
                            hubName: We
                        }))
                    }
                }, {
                    name: Ge,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(_e, n);
                        null == o || o.map(function(e) {
                            return r(w.actions.setPendingPopups({
                                type: s.BASE_POPUP_NAMES.MONEYLAND_WIN_POPUP,
                                data: Me(Me({}, e), {}, {
                                    id: e.prizeDropId
                                })
                            }))
                        })
                    }
                }],
                Ve = n(5114),
                Je = n.n(Ve),
                Ye = function(e) {
                    return {
                        campaignId: e[0],
                        campaignStatus: e[1]
                    }
                },
                $e = function(e) {
                    return {
                        playerCampaignId: e[0],
                        status: e[1],
                        isSuccessed: e[2]
                    }
                },
                qe = function(e) {
                    return {
                        filledValue: e[0],
                        requiredValue: e[1],
                        inputType: e[2],
                        usedForCalculations: e[3]
                    }
                },
                Ke = function(e) {
                    return {
                        games: e[0],
                        inputs: f.IEnumerable.map(e[1], qe)
                    }
                },
                Qe = function(e) {
                    return {
                        rewardType: e[0],
                        rewardCount: e[1],
                        rewardAmount: e[2],
                        cashbackPercent: e[3],
                        games: e[4],
                        bonusExpireInDays: e[5]
                    }
                },
                Xe = function(e) {
                    return {
                        campaignId: e[0],
                        name: e[1],
                        conditions: f.IEnumerable.map(e[2], Ke),
                        reward: Qe(e[3]),
                        startDate: e[4],
                        endDate: e[5],
                        badgeIndex: e[6]
                    }
                },
                Ze = function(e) {
                    return f.IEnumerable.map(e, Xe)
                },
                et = function(e) {
                    return {
                        id: e[0],
                        name: e[1]
                    }
                },
                tt = function(e) {
                    return {
                        playerCampaignId: e[0],
                        campaignId: e[1],
                        name: e[2],
                        games: e[3],
                        rewardInfo: Qe(e[4]),
                        progress: e[5],
                        startDate: e[6],
                        endDate: e[7],
                        category: e[8] && et(e[8]),
                        campaignStatus: e[9],
                        playerCampaignStatus: e[10],
                        badgeIndex: e[11]
                    }
                },
                nt = function(e) {
                    return {
                        playerCampaignId: e[0],
                        campaignId: e[1],
                        name: e[2],
                        conditions: f.IEnumerable.map(e[3], Ke),
                        reward: Qe(e[4]),
                        startDate: e[5],
                        endDate: e[6],
                        completionDate: e[7],
                        description: e[8],
                        playerCampaignStatus: e[9],
                        replayCount: e[10],
                        includeBonusBets: e[11],
                        badgeIndex: e[12]
                    }
                },
                rt = function(e) {
                    return {
                        campaigns: f.IEnumerable.map(e[0], tt)
                    }
                },
                ot = function(e) {
                    return {
                        playerCampaignId: e[0]
                    }
                },
                at = function(e) {
                    return {
                        playerCampaignId: e[0],
                        rewardInfo: Qe(e[1])
                    }
                },
                it = function(e) {
                    return {
                        languageCode: e[0],
                        name: e[1]
                    }
                },
                ct = function(e) {
                    return {
                        id: e[0],
                        name: e[1],
                        nameTranslations: e[2] && f.IEnumerable.map(e[2], it),
                        fillPercentForVisibilityInTopMissions: e[3]
                    }
                },
                ut = function(e) {
                    return {
                        currencyCode: e[0],
                        amount: e[1]
                    }
                },
                st = function(e) {
                    return {
                        inputTypeId: e[0],
                        inputValue: e[1],
                        usedForCalculations: e[2],
                        currencies: e[3] && f.IEnumerable.map(e[3], ut)
                    }
                },
                lt = function(e) {
                    return {
                        games: e[0],
                        inputs: f.IEnumerable.map(e[1], st)
                    }
                },
                ft = function(e) {
                    return {
                        rewardType: e[0],
                        rewardCount: e[1],
                        cashbackPercent: e[2],
                        games: e[3],
                        currencyAmounts: e[4] && f.IEnumerable.map(e[4], ut)
                    }
                },
                pt = function(e) {
                    return {
                        campaignId: e[0],
                        name: e[1],
                        nameTranslations: e[2] && f.IEnumerable.map(e[2], it),
                        category: ct(e[3]),
                        conditions: f.IEnumerable.map(e[4], lt),
                        reward: ft(e[5]),
                        startDate: e[6],
                        endDate: e[7],
                        fillPercentForVisibilityInTopMissions: e[8]
                    }
                };

            function dt(e) {
                return dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, dt(e)
            }

            function mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != dt(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != dt(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == dt(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var yt = [{
                    name: "AvailableMissions",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ze, n);
                        null != o && o.length && (o.forEach(function(e) {
                            e.campaignId ? r(w.actions.setPendingPopups({
                                type: s.BASE_POPUP_NAMES.AVAILABLE_MISSIONS_POPUP,
                                data: vt(vt({}, e), {}, {
                                    id: e.campaignId
                                })
                            })) : r(w.actions.closePendingPopup({
                                type: s.BASE_POPUP_NAMES.AVAILABLE_MISSIONS_POPUP
                            }))
                        }), r(w.actions.setAvailableMissions(o)))
                    }
                }, {
                    name: "ClaimRewardResult",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)($e, n);
                        r(w.actions.setClaimRewardResult(o))
                    }
                }, {
                    name: "CampaignDetails",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(nt, n);
                        r(w.actions.setCampaignDetails(o))
                    }
                }, {
                    name: "CompletedCampaigns",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(rt, n);
                        r(w.actions.setCompletedCampaigns(o))
                    }
                }, {
                    name: "StandardCampaigns",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(rt, n);
                        r(w.actions.setStandardCampaigns(o))
                    }
                }, {
                    name: "TopCampaigns",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(rt, n);
                        r(w.actions.setTopCampaigns(o))
                    }
                }, {
                    name: "CampaignStart",
                    callback: function(e) {
                        var t, n, r, o = e.data,
                            a = void 0 === o ? {} : o,
                            i = e.dispatch,
                            c = Je().get("currencyId"),
                            u = (0, f.responseFromServerToObjectForFeature)(pt, a),
                            l = vt(vt({}, u), {}, {
                                id: u.campaignId,
                                name: (null === (t = u.nameTranslations) || void 0 === t || null === (t = t.find(function(e) {
                                    return e.languageCode === f.culture
                                })) || void 0 === t ? void 0 : t.name) || u.name,
                                category: vt(vt({}, u.category), {}, {
                                    name: (null === (n = u.category.nameTranslations) || void 0 === n || null === (n = n.find(function(e) {
                                        return e.languageCode === f.culture
                                    })) || void 0 === n ? void 0 : n.name) || u.category.name
                                }),
                                reward: vt(vt({}, u.reward), {}, {
                                    rewardAmount: null === (r = u.reward.currencyAmounts) || void 0 === r || null === (r = r.find(function(e) {
                                        return e.currencyCode === c
                                    })) || void 0 === r ? void 0 : r.amount
                                }),
                                conditions: u.conditions.map(function(e) {
                                    return vt(vt({}, e), {}, {
                                        inputs: e.inputs.map(function(e) {
                                            var t;
                                            return {
                                                filledValue: 0,
                                                requiredValue: (null === (t = e.currencies) || void 0 === t || null === (t = t.find(function(e) {
                                                    return e.currencyCode === c
                                                })) || void 0 === t ? void 0 : t.amount) || e.inputValue,
                                                inputType: e.inputTypeId,
                                                usedForCalculations: e.usedForCalculations
                                            }
                                        })
                                    })
                                })
                            });
                        u.campaignId ? i(w.actions.setPendingPopups({
                            type: s.BASE_POPUP_NAMES.AVAILABLE_MISSIONS_POPUP,
                            data: l,
                            checkMyCurrencyByPromitionName: "mission"
                        })) : i(w.actions.closePendingPopup({
                            type: s.BASE_POPUP_NAMES.AVAILABLE_MISSIONS_POPUP
                        })), i(w.actions.setCampaignStart(l))
                    }
                }, {
                    name: "CampaignStatusUpdate",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ye, n);
                        r(w.actions.setCampaignStatusUpdate(o))
                    }
                }, {
                    name: "CampaignAlmostCompleted",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(ot, n);
                        r(w.actions.setCampaignAlmostCompleted(o))
                    }
                }, {
                    name: "CampaignCompleted",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(at, n);
                        r(w.actions.setCampaignCompleted(o))
                    }
                }],
                ht = n(1703),
                bt = n.n(ht),
                gt = function(e) {
                    return {
                        minBetMultiplierFrom: e[0],
                        minBetMultiplierTo: e[1],
                        cashBackPercentage: e[2]
                    }
                },
                Pt = function(e) {
                    return {
                        promotionId: e[0],
                        name: e[1],
                        prizeType: e[2],
                        gameOdd: e[3],
                        settings: f.IEnumerable.map(e[4], gt),
                        startDate: e[5],
                        endDate: e[6],
                        services: e[7],
                        showFromNextRound: e[8]
                    }
                },
                Ot = function(e) {
                    return {
                        playerId: e[0],
                        serviceName: e[1],
                        winAmount: e[2]
                    }
                },
                St = function(e) {
                    return e.map(Ot)
                },
                wt = function(e) {
                    return {
                        promoWinAmount: e[0],
                        prizeType: e[1],
                        services: e[2]
                    }
                },
                kt = function(e) {
                    return {
                        promotionId: e[0]
                    }
                };

            function It(e) {
                return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, It(e)
            }

            function jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jt(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != It(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != It(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == It(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ft = function(e) {
                    var t = e.data,
                        n = void 0 === t ? {} : t,
                        r = e.dispatch,
                        o = (0, f.responseFromServerToObjectForFeature)(Pt, n),
                        a = null === bt() || void 0 === bt() ? void 0 : bt().getItem("activeCrashbackId");
                    r(w.actions.setCrashback(o)), +a !== o.promotionId && (o.showFromNextRound ? r(w.actions.setPendingCrashback({
                        type: s.BASE_POPUP_NAMES.ACTIVE_CRASHBACK_POPUP,
                        data: Et(Et({}, o), {}, {
                            id: o.promotionId
                        })
                    })) : r(w.actions.setPendingPopups({
                        type: s.BASE_POPUP_NAMES.ACTIVE_CRASHBACK_POPUP,
                        data: Et(Et({}, o), {}, {
                            id: o.promotionId
                        })
                    })))
                },
                At = function(e) {
                    var t = e.data,
                        n = void 0 === t ? {} : t,
                        r = e.dispatch,
                        o = (0, f.responseFromServerToObjectForFeature)(kt, n);
                    r(w.actions.setResetCrashback(o)), r(w.actions.closePopup({
                        name: s.BASE_POPUP_NAMES.MAIN_MENU
                    })), r(w.actions.closePopup({
                        name: s.BASE_POPUP_NAMES.PROMOTIONS
                    }))
                },
                Ct = [{
                    name: "ActiveCrashBack",
                    callback: Ft
                }, {
                    name: "CrashBackUpdate",
                    callback: Ft
                }, {
                    name: "CrashBackStart",
                    callback: Ft
                }, {
                    name: "CrashBackRule",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t;
                        (0, e.dispatch)(w.actions.setCrashbackRules(n))
                    }
                }, {
                    name: "CrashBackWinners",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(St, n);
                        r(w.actions.setCrashbackWinners(o))
                    }
                }, {
                    name: "CrashBackCancel",
                    callback: At
                }, {
                    name: "CrashBackFinish",
                    callback: At
                }, {
                    name: "CrashBackPrize",
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(wt, n);
                        r(w.actions.setCrashBackPrize(o))
                    }
                }],
                Lt = n(728),
                _t = function(e) {
                    return {
                        culture: e[0],
                        name: e[1]
                    }
                },
                Tt = function(e) {
                    return {
                        jackpotActive: e[0]
                    }
                },
                Nt = function(e) {
                    return {
                        metadata: Tt(e[0])
                    }
                },
                Mt = function(e) {
                    return {
                        jackpotLevelId: e[0],
                        levelName: e[1],
                        contributionPercentage: e[2],
                        largestWinner: e[3],
                        latestWinner: e[4],
                        minBetAmount: e[5],
                        levelId: e[6]
                    }
                },
                Dt = function(e) {
                    return {
                        jackpotId: e[0],
                        games: e[1],
                        endDate: e[2],
                        strategy: e[3],
                        mainWinnerPercentage: e[4],
                        communityWinnerPercentage: e[5],
                        communityWinnerCount: e[6],
                        levels: f.IEnumerable.map(e[7], Mt)
                    }
                },
                xt = function(e) {
                    return {
                        jackpotLevelId: e[0],
                        collectedContributionAmount: e[1],
                        largestWinner: e[2],
                        latestWinner: e[3],
                        levelId: e[4],
                        levelName: e[5],
                        hitCycle: e[6]
                    }
                },
                Ut = function(e) {
                    return {
                        levels: f.IEnumerable.map(e[0], xt)
                    }
                },
                Bt = function(e) {
                    return e.map(function(e) {
                        return {
                            prizeId: e[0],
                            jackpotLevelId: e[1],
                            levelId: e[2],
                            levelName: e[3],
                            wonAmount: e[4],
                            currencyCode: e[5],
                            translations: f.IEnumerable.map(e[6], _t)
                        }
                    })
                },
                Rt = function(e) {
                    e[0], e[1], e[2], f.IEnumerable.map(e[3], _t), e[4]
                },
                Gt = [{
                    name: Lt.Cq.OnJackpotInitialData,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Nt, n);
                        r(w.actions.setJackpotInfo(o))
                    }
                }, {
                    name: Lt.Cq.OnJackpotData,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Ut, n);
                        r(w.actions.setJackpotData(o))
                    }
                }, {
                    name: Lt.Cq.OnJackpotDetails,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Dt, n);
                        r(w.actions.setJackpotDataDetails(o))
                    }
                }, {
                    name: Lt.Cq.OnJackpotDataError,
                    callback: function(e) {
                        (0, e.dispatch)(w.actions.setJackpotDataError())
                    }
                }, {
                    name: Lt.Cq.OnJackpotPrizeUpdates,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Bt, n);
                        r(w.actions.setJackpotPrizes(o))
                    }
                }, {
                    name: Lt.Cq.OnJackpotOtherPrizeUpdates,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Rt, n);
                        r(w.actions.setJackpotOtherPrizes(o))
                    }
                }, {
                    name: Lt.Cq.OnJackpotAcknowledgmentsError,
                    callback: function(e) {
                        (0, e.dispatch)(w.actions.setJackpotAknowledgmentIndex())
                    }
                }, {
                    name: Lt.Cq.OnJackpotLevelUpdate,
                    callback: function(e) {
                        (0, e.dispatch)(w.actions.setJackpotDetailsUpdated())
                    }
                }],
                Ht = n(8718),
                Wt = function(e) {
                    return {
                        id: e[0],
                        remainingCount: e[1],
                        remainingBet: e[2],
                        bet: e[3],
                        expireDate: e[4],
                        type: e[5],
                        currencyId: e[6],
                        isGalaxsysBonus: e[7],
                        availableGames: e[8]
                    }
                },
                zt = function(e) {
                    return {
                        id: e[0],
                        remainingCount: e[1],
                        remainingBet: e[2],
                        bet: e[3],
                        expireDate: e[4],
                        type: e[5],
                        currencyId: e[6],
                        isGalaxsysBonus: e[7],
                        availableGames: e[8]
                    }
                },
                Vt = function(e) {
                    return {
                        playerBonusId: e[0],
                        totalWin: e[1],
                        initialValue: e[2]
                    }
                },
                Jt = function(e) {
                    return {
                        totalWin: e[0],
                        bet: e[1],
                        count: e[2],
                        date: e[3],
                        expireDate: e[4],
                        type: e[5],
                        status: e[6]
                    }
                },
                Yt = n(8517);

            function $t(e) {
                return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, $t(e)
            }

            function qt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qt(Object(n), !0).forEach(function(t) {
                        var r, o, a, i;
                        r = e, o = t, a = n[t], i = function(e) {
                            if ("object" != $t(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var n = t.call(e, "string");
                                if ("object" != $t(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == $t(i) ? i : i + "") in r ? Object.defineProperty(r, o, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = a
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Qt = [{
                    name: Ht.O.BonusInfo,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            o = e.dispatch,
                            a = [],
                            i = bt().getItem("active_bonus_id");
                        if (null != n && n.length) {
                            var c = n.map(function(e) {
                                var t = (0, f.responseFromServerToObjectForFeature)(Wt, e),
                                    n = Kt(Kt({}, t), {}, {
                                        type: t.type.toLowerCase(),
                                        expireDate: (0, u.getFormattedDateTime)(t.expireDate, Yt.isFeatureMessagePackEnabled)
                                    });
                                return i && +i === (null == n ? void 0 : n.id) && o(w.actions.setBonusEnabled({
                                    status: !0,
                                    selected: n
                                })), bt().getItem("bonus_id_".concat(null == n ? void 0 : n.id)) || a.push(n), n
                            });
                            (0, r.batch)(function() {
                                o(w.actions.addBonusList(c)), a.length && (o(w.actions.addBonusesNotificationList(a)), o(w.actions.openBonusNotification(!0)))
                            })
                        } else bt().getItem("active_bonus_id") && bt().removeItem("active_bonus_id")
                    }
                }, {
                    name: Ht.O.UpdateBonusInfo,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(zt, n),
                            a = Kt(Kt({}, o), {}, {
                                type: o.type.toLowerCase(),
                                expireDate: (0, u.getFormattedDateTime)(o.expireDate, Yt.isFeatureMessagePackEnabled)
                            });
                        bt().getItem("bonus_id_".concat(null == a ? void 0 : a.id)) || (r(w.actions.addBonusesNotificationList([a])), r(w.actions.openBonusNotification(!0))), r(w.actions.addOrUpdateBonusById(a))
                    }
                }, {
                    name: Ht.O.FinishBonus,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Vt, n);
                        bt().removeItem("bonus_id_".concat(null == o ? void 0 : o.playerBonusId)), bt().removeItem("active_bonus_id"), r(w.actions.removeBonusById(o))
                    }
                }, {
                    name: Ht.O.BonusHistory,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = n.map(function(e) {
                                return (0, f.responseFromServerToObjectForFeature)(Jt, e)
                            });
                        r(w.actions.setGlobalBonusHistory(o))
                    }
                }],
                Xt = n(8579),
                Zt = function(e) {
                    return {
                        promotions: f.IEnumerable.map(e[0], en)
                    }
                },
                en = function(e) {
                    return {
                        id: e[0],
                        hasHistory: e[1]
                    }
                },
                tn = [{
                    name: Xt.JU.ActivePromotionsInfo,
                    callback: function(e) {
                        var t = e.data,
                            n = void 0 === t ? {} : t,
                            r = e.dispatch,
                            o = (0, f.responseFromServerToObjectForFeature)(Zt, n);
                        r(w.actions.setActivePromotions(null == o ? void 0 : o.promotions))
                    }
                }];

            function nn(e) {
                return nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, nn(e)
            }

            function rn() {
                rn = function() {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag";

                function s(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, r) {
                    var a = t && t.prototype instanceof h ? t : h,
                        i = Object.create(a.prototype),
                        c = new C(r || []);
                    return o(i, "_invoke", {
                        value: j(e, n, c)
                    }), i
                }

                function f(e, t, n) {
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
                var p = "suspendedStart",
                    d = "suspendedYield",
                    m = "executing",
                    v = "completed",
                    y = {};

                function h() {}

                function b() {}

                function g() {}
                var P = {};
                s(P, i, function() {
                    return this
                });
                var O = Object.getPrototypeOf,
                    S = O && O(O(L([])));
                S && S !== n && r.call(S, i) && (P = S);
                var w = g.prototype = h.prototype = Object.create(P);

                function k(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        s(e, t, function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }

                function I(e, t) {
                    function n(o, a, i, c) {
                        var u = f(e[o], e, a);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                l = s.value;
                            return l && "object" == nn(l) && r.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                                n("next", e, i, c)
                            }, function(e) {
                                n("throw", e, i, c)
                            }) : t.resolve(l).then(function(e) {
                                s.value = e, i(s)
                            }, function(e) {
                                return n("throw", e, i, c)
                            })
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t(function(t, o) {
                                    n(e, r, t, o)
                                })
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function j(t, n, r) {
                    var o = p;
                    return function(a, i) {
                        if (o === m) throw Error("Generator is already running");
                        if (o === v) {
                            if ("throw" === a) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var c = r.delegate;
                            if (c) {
                                var u = E(c, r);
                                if (u) {
                                    if (u === y) continue;
                                    return u
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p) throw o = v, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = m;
                            var s = f(t, n, r);
                            if ("normal" === s.type) {
                                if (o = r.done ? v : d, s.arg === y) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (o = v, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function E(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var a = f(o, t.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                    var i = a.arg;
                    return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function F(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function A(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(F, this), this.reset(!0)
                }

                function L(t) {
                    if (t || "" === t) {
                        var n = t[i];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(nn(t) + " is not iterable")
                }
                return b.prototype = g, o(w, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = s(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, s(e, u, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, k(I.prototype), s(I.prototype, c, function() {
                    return this
                }), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new I(l(e, n, r, o), a);
                    return t.isGeneratorFunction(n) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, k(w), s(w, u, "Generator"), s(w, i, function() {
                    return this
                }), s(w, "toString", function() {
                    return "[object Generator]"
                }), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = L, C.prototype = {
                    constructor: C,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
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

                        function o(r, o) {
                            return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                c = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var u = r.call(i, "catchLoc"),
                                    s = r.call(i, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    A(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: L(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, t
            }

            function on(e, t, n, r, o, a, i) {
                try {
                    var c = e[a](i),
                        u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }

            function an(e, t, n) {
                var r;
                return r = function(e) {
                    if ("object" != nn(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != nn(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(t), (t = "symbol" == nn(r) ? r : r + "") in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function cn(e) {
                return function(e) {
                    if (Array.isArray(e)) return un(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return un(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? un(e, t) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function un(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var sn = [].concat(cn(Qt), cn(E), cn(we), cn(M), cn(B), cn(tn), cn(ze), cn(ze), cn(ue), cn(yt), cn(Gt), cn(Ct)),
                ln = {
                    featuresHubConnection: null
                },
                fn = null;

            function pn() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, r.useDispatch)(),
                    s = (0, w.shallowSelector)(w.selectResources),
                    l = (0, r.useSelector)(w.selectHubIsConnected);
                if (!ln.featuresHubConnection && l) {
                    var p;
                    p = null != t && t.isHistory ? new o.$ : Yt.isFeatureMessagePackEnabled ? (new o.$).withUrl(e, {
                        skipNegotiation: !0,
                        transport: i.w.WebSockets
                    }).configureLogging(a.$.None).withHubProtocol(new c.E).build() : (new o.$).withUrl(e, {
                        skipNegotiation: !0,
                        transport: i.w.WebSockets
                    }).configureLogging(a.$.None).build();
                    var d = function e() {
                        var r;
                        null != t && t.isHistory ? n(w.actions.setHubConnected(an({}, t.name, !0))) : null === (r = p) || void 0 === r || r.start().then(function() {
                            sn.forEach(function(e) {
                                p.on(e.name, function(t) {
                                    e.callback({
                                        data: t,
                                        dispatch: n
                                    })
                                })
                            }), p.on("Error", function(e) {
                                4001 === (Yt.isFeatureMessagePackEnabled ? e[0] : e.error) && (p.unauthorizedPlayer = !0, p.stop(), n(w.actions.setHubConnected(an({}, t.name, !1))), fn && clearInterval(fn))
                            }), p.on("OnRuleVersionReceive", function(e) {
                                var t = Yt.isFeatureMessagePackEnabled ? e.ruleVersion : e[0];
                                (0, f.setRulesVersionInStorage)(t, function() {
                                    n(w.actions.addNotification((0, u.getNotificationById)(s, 116)))
                                })
                            }), n(w.actions.setHubConnected(an({}, t.name, !0))), fn && clearInterval(fn), fn = setInterval(function() {
                                p.invoke("UpdatePlayerSessions").catch(function(e) {
                                    return console.warn(e)
                                })
                            }, 5e3)
                        }).catch(function(t) {
                            console.warn(t), setTimeout(e, 5e3)
                        })
                    };
                    p.serverTimeoutInMilliseconds = t.serverTimeoutInMilliseconds || 3e4, p.keepAliveIntervalInMilliseconds = t.keepAliveIntervalInMilliseconds || 5e3, d(), window.addEventListener("offline", function() {
                        n(w.actions.setHubConnected(an({}, t.name, !1))), p && p.stop()
                    }), null != t && t.isHistory || p.onclose(function() {
                        var e, t = (e = rn().mark(function e(t) {
                            return rn().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (console.log("Connection closed:", t), p.unauthorizedPlayer) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, d();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }), function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(r, o) {
                                var a = e.apply(t, n);

                                function i(e) {
                                    on(a, r, o, i, c, "next", e)
                                }

                                function c(e) {
                                    on(a, r, o, i, c, "throw", e)
                                }
                                i(void 0)
                            })
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()), ln.featuresHubConnection = p
                }
            }
            var dn = function(e) {
                    var t = e.name,
                        n = void 0 === t ? "" : t,
                        r = e.model,
                        o = void 0 === r ? null : r,
                        a = e.messagePackModel,
                        i = ln.featuresHubConnection;
                    i && (o ? Array.isArray(o) ? i.invoke.apply(i, [n].concat(cn(o))).catch(console.error) : Yt.isFeatureMessagePackEnabled ? i.invoke(n, a).catch(console.error) : i.invoke(n, o).catch(console.error) : i.invoke(n).catch(console.error))
                },
                mn = function() {
                    return ln.featuresHubConnection
                },
                vn = ln.featuresHubConnection
        },
        463(e, t, n) {
            n.d(t, {
                A: () => g,
                W: () => h
            });
            var r = n(5556),
                o = n.n(r),
                a = n(8283),
                i = n(6653),
                c = n(1703),
                u = n.n(c),
                s = n(2182),
                l = n(6866);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var p, d = function(e) {
                    if (Array.isArray(e)) return e
                }(p = n(6337).GFA) || function(e) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, r, o, a, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (o = (t = t.call(e)).next, !3; !(c = (n = o.call(t)).done) && (i.push(n.value), 3 !== i.length); c = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                if (!c && null != t.return && (a = t.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(p) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return f(e, 3);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(e, 3) : void 0
                    }
                }(p) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(),
                m = d[0],
                v = d[1],
                y = d[2],
                h = {
                    playSound: function() {},
                    stopSound: function() {},
                    stopAllSounds: function() {},
                    setOnSound: function() {},
                    playMusic: function() {},
                    stopMusic: function() {},
                    setOnMusic: function() {},
                    setMusicVolume: function() {},
                    playedSounds: {}
                };

            function b(e) {
                var t = e.configs,
                    n = (0, i.useDispatch)(),
                    r = (0, l.default)(t),
                    o = r.sound,
                    c = r.music,
                    f = (0, s.shallowSelector)(s.selectSettings),
                    p = (0, i.useSelector)(s.selectWithSeparatedSounds),
                    d = o.isOn,
                    b = o.isLoaded,
                    g = c.isOn,
                    P = c.isLoaded;
                return (0, a.useEffect)(function() {
                    return m("GalaxsysSettings", function(e) {
                            var t = e.isSoundOn;
                            h.setOnSound(t), h.setOnMusic(t)
                        }),
                        function() {
                            y("GalaxsysSettings")
                        }
                }, []), (0, a.useEffect)(function() {
                    n(s.actions.changeIsAnimate("false" !== (null === u() || void 0 === u() ? void 0 : u().getItem("isAnimationOn"))))
                }, []), (0, a.useEffect)(function() {
                    var e, t;
                    b && P && v("GalaxsysSettings", {
                        isSoundOn: (null == f || null === (e = f.sound) || void 0 === e ? void 0 : e.isOn) || (null == f || null === (t = f.music) || void 0 === t ? void 0 : t.isOn),
                        isAnimationOn: null == f ? void 0 : f.isAnimate
                    })
                }, [f]), (0, a.useEffect)(function() {
                    t.soundUrl && o.isLoaded && (h.playSound = o.play, h.stopSound = o.stop, h.stopAllSounds = o.stopAll, h.setOnSound = o.setOn, h.playedSounds = (null == o ? void 0 : o.playedSounds) || {}), t.musicUrl && c.isLoaded && (h.playMusic = c.play, h.stopMusic = c.stop, h.setOnMusic = c.setOn, h.setMusicVolume = c.setVolume)
                }, [o, c]), (0, a.useEffect)(function() {
                    (0, i.batch)(function() {
                        t.soundUrl && b && n(s.actions.setSettings({
                            sound: {
                                isOn: d || !p && g,
                                isLoaded: b
                            }
                        })), t.musicUrl && P && n(s.actions.setSettings({
                            music: {
                                isOn: g || !p && d,
                                isLoaded: P
                            }
                        }))
                    })
                }, [d, b, g, P]), (0, a.useEffect)(function() {
                    void 0 !== (null == f ? void 0 : f.isAnimate) && (null === u() || void 0 === u() || u().setItem("isAnimationOn", null == f ? void 0 : f.isAnimate))
                }, [null == f ? void 0 : f.isAnimate]), null
            }
            b.defaultProps = {
                configs: {
                    soundUrl: "",
                    soundObj: {},
                    musicUrl: "",
                    musicObj: {}
                }
            }, b.propTypes = {
                configs: o().shape({
                    soundUrl: o().string,
                    soundObj: o().object,
                    musicUrl: o().oneOfType([o().string, o().array]),
                    musicObj: o().object
                })
            };
            const g = (0, a.memo)(b)
        },
        1663(e, t, n) {
            n.r(t), n.d(t, {
                SettingsService: () => r.A,
                settings: () => r.W
            });
            var r = n(463)
        }
    }
]);