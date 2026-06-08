/*! For license information please see 5544.20ad2111394574475204.js.LICENSE.txt */
"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2467, 4848, 5544], {
        8361(e, t, r) {
            r.r(t), r.d(t, {
                useBetPartInput: () => m,
                useNumberValidation: () => f
            });
            var n = r(8283),
                o = r(6295),
                u = r(3387),
                i = r(6653),
                a = r(2182);

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, i.useDispatch)(),
                        r = (0, a.shallowSelector)(a.selectUseNumberValidationData),
                        u = r.resources,
                        f = r.minBet,
                        s = r.maxBet,
                        p = (0, n.useMemo)(function() {
                            return Object.values(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                                        var n, o, u, i;
                                        n = e, o = t, u = r[t], i = function(e) {
                                            if ("object" != l(e) || !e) return e;
                                            var t = e[Symbol.toPrimitive];
                                            if (void 0 !== t) {
                                                var r = t.call(e, "string");
                                                if ("object" != l(r)) return r;
                                                throw new TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(e)
                                        }(o), (o = "symbol" == l(i) ? i : i + "") in n ? Object.defineProperty(n, o, {
                                            value: u,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : n[o] = u
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({
                                minBet: {
                                    pattern: f,
                                    operator: "<",
                                    notification: {
                                        id: 2,
                                        value: f
                                    }
                                },
                                maxBet: {
                                    pattern: s,
                                    operator: ">",
                                    notification: {
                                        id: 12,
                                        value: s
                                    }
                                }
                            }, e))
                        }, [e]);
                    return function(e) {
                        var r = p.find(function(t) {
                            var r = t.pattern,
                                n = t.operator;
                            return function(e, t, r) {
                                switch (t) {
                                    case "===":
                                        return e === r;
                                    case "<=":
                                        return e <= r;
                                    case ">=":
                                        return e >= r;
                                    case ">":
                                        return e > r;
                                    case "<":
                                        return e < r;
                                    default:
                                        return !1
                                }
                            }(e, n, r)
                        });
                        r && t(a.actions.addNotification((0, o.getNotificationById)(u, r.notification.id, r.notification.value)))
                    }
                },
                s = r(6337);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var v = u.BonusTypes.FreeBet,
                b = u.BonusTypes.FreeAmount,
                m = function(e) {
                    var t, r, u = e.defaultValue,
                        i = void 0 === u ? 0 : u,
                        l = e.maxValue,
                        c = e.customValidationPoitns,
                        m = void 0 === c ? {} : c,
                        y = e.isValidate,
                        d = void 0 === y || y,
                        h = e.maxCharLength,
                        g = void 0 === h ? 12 : h,
                        S = (t = (0, n.useState)(i), r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, o, u, i, a = [],
                                    l = !0,
                                    c = !1;
                                try {
                                    if (u = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        l = !1
                                    } else
                                        for (; !(l = (n = u.call(r)).done) && (a.push(n.value), a.length !== t); l = !0);
                                } catch (e) {
                                    c = !0, o = e
                                } finally {
                                    try {
                                        if (!l && null != r.return && (i = r.return(), Object(i) !== i)) return
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                                return a
                            }
                        }(t, r) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return p(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
                            }
                        }(t, r) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        O = S[0],
                        N = S[1],
                        j = d && f(m),
                        w = (0, a.shallowSelector)(a.selectUseNumberInputData),
                        B = w.minBet,
                        P = w.maxBet,
                        k = w.precision,
                        V = (w.bonusesEnabled, w.selectedBonus),
                        C = w.balance,
                        I = (0, n.useCallback)(function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            N(function(r) {
                                var n, o, u = null !== (n = null == e ? void 0 : e.value) && void 0 !== n ? n : e,
                                    i = Number(String(null !== (o = null == e ? void 0 : e.validationValue) && void 0 !== o ? o : e).replaceAll(" ", "")),
                                    a = "function" == typeof u ? u(r) : u;
                                return t && (null == j || j(null != i ? i : a)), a
                            })
                        }, []),
                        _ = (0, n.useCallback)(function(e, t, r) {
                            if (s.isDemo || (null == V ? void 0 : V.type) !== v) {
                                var n = t || P;
                                N(function(t) {
                                    var u = (0, o.sumWithPrecision)(+(0, o.toNumberString)(t), e || B, k);
                                    return "function" == typeof r ? r(u) : null == j || j(u), u > n ? n : u
                                })
                            }
                        }, [V, B, P, k]),
                        D = (0, n.useCallback)(function(e, t, r) {
                            if (s.isDemo || (null == V ? void 0 : V.type) !== v) {
                                var n = t || P;
                                N(function(t) {
                                    var u = (0, o.subtractWithPrecision)(+(0, o.toNumberString)(t), e || B, k);
                                    return "function" == typeof r ? r(u) : null == j || j(u), u < B ? B : u > n ? n : u
                                })
                            }
                        }, [V, B, P, k]),
                        E = (0, n.useCallback)(function(e) {
                            if (s.isDemo || (null == V ? void 0 : V.type) !== v) {
                                var t = e || {},
                                    r = t.customMaxBet,
                                    n = t.customValidator,
                                    u = r || P;
                                N(function(e) {
                                    var t = (0, o.sumWithPrecision)(+(0, o.toNumberString)(e), +(0, o.toNumberString)(e), k);
                                    return "function" == typeof n ? n(t) : null == j || j(t), t >= u ? u : t <= B ? B : t
                                })
                            }
                        }, [V, P, B]),
                        x = (0, n.useCallback)(function(e) {
                            if (s.isDemo || (null == V ? void 0 : V.type) !== v) {
                                var t = e || {},
                                    r = t.customMaxBet,
                                    n = t.customValidator,
                                    u = r || P;
                                N(function(e) {
                                    var t = (0, o.multiplyWithPrecision)(+(0, o.toNumberString)(e), 4, k);
                                    return "function" == typeof n ? n(t) : null == j || j(t), t >= u ? u : t <= B ? B : t
                                })
                            }
                        }, [V, P, B]),
                        A = (0, n.useCallback)(function(e) {
                            if ((null == V ? void 0 : V.type) !== v) {
                                var t = e || {},
                                    r = t.customMaxBet,
                                    n = t.checkValidation,
                                    o = r || P;
                                if ((null == V ? void 0 : V.type) === b) {
                                    var u = V.remainingBet;
                                    I(u >= o ? o : u, n)
                                } else I(C <= o ? C : o, n)
                            }
                        }, [V, C, P]);
                    (0, n.useEffect)(function() {
                        N(i)
                    }, [i]), (0, n.useEffect)(function() {
                        (null == V ? void 0 : V.type) === v && N(V.bet)
                    }, [V]);
                    var T = (0, n.useCallback)(function(e) {
                            var t = e.target.value;
                            e.target.value = "", e.target.value = t;
                            var r = e.target.value;
                            if (!(0, o.isValidInputForNumberInput)(e.keyCode) || Number.isNaN(+(0, o.toNumberString)(r))) return e.preventDefault();
                            if (l && +(0, o.toNumberString)(r) > l) return N(l), e.preventDefault();
                            var n = (0, o.validInputWithEveryCase)(e, k, g);
                            if (n) N(n);
                            else {
                                var u = r.split(".")[1];
                                u && !k ? (u = u.length > k ? u.slice(0, k) : u, N(+"".concat(Math.floor(r), ".").concat(u))) : N(r)
                            }
                        }, [i, k, O]),
                        M = (0, n.useCallback)(function(e) {
                            var t = e.target.value;
                            l && +(0, o.toNumberString)(t) > l ? N(l) : Number.isNaN(+(0, o.toNumberString)(t)) || N(t)
                        }, []);
                    return {
                        inputValue: O,
                        handleSetInputValue: I,
                        handleNumberInputChange: M,
                        handleNumberInputKey: T,
                        incrementBetValue: _,
                        decrementBetValue: D,
                        doubleBetValue: E,
                        quadrupleBetValue: x,
                        handleAllIn: A,
                        numberValue: +(0, o.toNumberString)(O)
                    }
                }
        },
        1020(e, t, r) {
            var n = r(8283),
                o = Symbol.for("react.element"),
                u = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, r) {
                var n, u = {},
                    c = null,
                    f = null;
                for (n in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (f = t.ref), t) i.call(t, n) && !l.hasOwnProperty(n) && (u[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === u[n] && (u[n] = t[n]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: f,
                    props: u,
                    _owner: a.current
                }
            }
            t.Fragment = u, t.jsx = c, t.jsxs = c
        },
        4848(e, t, r) {
            e.exports = r(1020)
        }
    }
]);