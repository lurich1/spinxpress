/*! For license information please see 2502.f56e84876361f4abb5a5.js.LICENSE.txt */
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2467, 2502, 4848, 9083], {
        6866(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: () => p
            });
            var o = n(8283),
                r = n(2384),
                i = n(1703),
                s = n.n(i),
                u = n(6025),
                l = n(2182);

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var o, r, i, s, u = [],
                            l = !0,
                            a = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (o = i.call(n)).done) && (u.push(o.value), u.length !== e); l = !0);
                        } catch (t) {
                            a = !0, r = t
                        } finally {
                            try {
                                if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (a) throw r
                            }
                        }
                        return u
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }
            var d = "isSoundOn",
                f = "isMusicOn";

            function p() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.soundUrl,
                    n = void 0 === e ? "" : e,
                    i = t.soundObj,
                    c = void 0 === i ? {} : i,
                    p = t.musicUrl,
                    y = void 0 === p ? "" : p,
                    v = t.musicObj,
                    m = void 0 === v ? {} : v,
                    O = (0, r.useWindowVisibility)(),
                    S = (0, l.shallowSelector)(u.cd),
                    g = (0, l.shallowSelector)(l.selectPartnerUIConfig).hideMusic,
                    b = a((0, o.useState)(!!n && (null === (null === s() || void 0 === s() ? void 0 : s().getItem(d)) || "true" === (null === s() || void 0 === s() ? void 0 : s().getItem(d)))), 2),
                    h = b[0],
                    A = b[1],
                    I = a((0, o.useState)(!(g || !y || null !== (null === s() || void 0 === s() ? void 0 : s().getItem(f)) && "true" !== (null === s() || void 0 === s() ? void 0 : s().getItem(f)))), 2),
                    _ = I[0],
                    j = I[1],
                    E = a((0, r.useSounds)(!h, n, c), 5),
                    w = E[0],
                    U = E[1],
                    T = E[2],
                    M = E[3],
                    k = E[4],
                    L = a((0, r.useSounds)(!_, y, m), 6),
                    x = L[0],
                    P = L[1],
                    C = L[2],
                    R = (L[3], L[4], L[5]);
                (0, o.useEffect)(function() {
                    null === s() || void 0 === s() || s().setItem(d, O ? w && h : null === s() || void 0 === s() ? void 0 : s().getItem(d))
                }, [h, w]), (0, o.useEffect)(function() {
                    null === s() || void 0 === s() || s().setItem(f, O ? x && _ : null === s() || void 0 === s() ? void 0 : s().getItem(f))
                }, [_, x]), (0, r.useDidUpdate)(function() {
                    O ? (A("true" === (null === s() || void 0 === s() ? void 0 : s().getItem(d))), j("true" === (null === s() || void 0 === s() ? void 0 : s().getItem(f))), "true" === (null === s() || void 0 === s() ? void 0 : s().getItem(f)) && P("background")) : (A(!1), j(!1))
                }, [O]);
                var W = (0, o.useMemo)(function() {
                        return {
                            isLoaded: w,
                            isOn: h,
                            play: U,
                            stop: T,
                            stopAll: k,
                            setOn: n ? A : function() {},
                            playedSounds: M
                        }
                    }, [w, h, U, T, A, k]),
                    D = (0, o.useMemo)(function() {
                        return {
                            isLoaded: x,
                            isOn: _,
                            play: P,
                            stop: C,
                            setOn: y ? j : function() {},
                            setVolume: R
                        }
                    }, [x, _, P, C, j]);
                return (0, o.useEffect)(function() {
                    S || !_ && !h || (n && A(!0), y && j(!g))
                }, [S]), {
                    sound: W,
                    music: D
                }
            }
        },
        463(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => g,
                W: () => O
            });
            var o = n(5556),
                r = n.n(o),
                i = n(8283),
                s = n(6653),
                u = n(1703),
                l = n.n(u),
                a = n(2182),
                c = n(6866);

            function d(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }
            var f, p = function(t) {
                    if (Array.isArray(t)) return t
                }(f = n(6337).GFA) || function(t) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var n, o, r, i, s = [],
                            u = !0,
                            l = !1;
                        try {
                            for (r = (e = e.call(t)).next, !3; !(u = (n = r.call(e)).done) && (s.push(n.value), 3 !== s.length); u = !0);
                        } catch (t) {
                            l = !0, o = t
                        } finally {
                            try {
                                if (!u && null != e.return && (i = e.return(), Object(i) !== i)) return
                            } finally {
                                if (l) throw o
                            }
                        }
                        return s
                    }
                }(f) || function(t) {
                    if (t) {
                        if ("string" == typeof t) return d(t, 3);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? d(t, 3) : void 0
                    }
                }(f) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(),
                y = p[0],
                v = p[1],
                m = p[2],
                O = {
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

            function S(t) {
                var e = t.configs,
                    n = (0, s.useDispatch)(),
                    o = (0, c.default)(e),
                    r = o.sound,
                    u = o.music,
                    d = (0, a.shallowSelector)(a.selectSettings),
                    f = (0, s.useSelector)(a.selectWithSeparatedSounds),
                    p = r.isOn,
                    S = r.isLoaded,
                    g = u.isOn,
                    b = u.isLoaded;
                return (0, i.useEffect)(function() {
                    return y("GalaxsysSettings", function(t) {
                            var e = t.isSoundOn;
                            O.setOnSound(e), O.setOnMusic(e)
                        }),
                        function() {
                            m("GalaxsysSettings")
                        }
                }, []), (0, i.useEffect)(function() {
                    n(a.actions.changeIsAnimate("false" !== (null === l() || void 0 === l() ? void 0 : l().getItem("isAnimationOn"))))
                }, []), (0, i.useEffect)(function() {
                    var t, e;
                    S && b && v("GalaxsysSettings", {
                        isSoundOn: (null == d || null === (t = d.sound) || void 0 === t ? void 0 : t.isOn) || (null == d || null === (e = d.music) || void 0 === e ? void 0 : e.isOn),
                        isAnimationOn: null == d ? void 0 : d.isAnimate
                    })
                }, [d]), (0, i.useEffect)(function() {
                    e.soundUrl && r.isLoaded && (O.playSound = r.play, O.stopSound = r.stop, O.stopAllSounds = r.stopAll, O.setOnSound = r.setOn, O.playedSounds = (null == r ? void 0 : r.playedSounds) || {}), e.musicUrl && u.isLoaded && (O.playMusic = u.play, O.stopMusic = u.stop, O.setOnMusic = u.setOn, O.setMusicVolume = u.setVolume)
                }, [r, u]), (0, i.useEffect)(function() {
                    (0, s.batch)(function() {
                        e.soundUrl && S && n(a.actions.setSettings({
                            sound: {
                                isOn: p || !f && g,
                                isLoaded: S
                            }
                        })), e.musicUrl && b && n(a.actions.setSettings({
                            music: {
                                isOn: g || !f && p,
                                isLoaded: b
                            }
                        }))
                    })
                }, [p, S, g, b]), (0, i.useEffect)(function() {
                    void 0 !== (null == d ? void 0 : d.isAnimate) && (null === l() || void 0 === l() || l().setItem("isAnimationOn", null == d ? void 0 : d.isAnimate))
                }, [null == d ? void 0 : d.isAnimate]), null
            }
            S.defaultProps = {
                configs: {
                    soundUrl: "",
                    soundObj: {},
                    musicUrl: "",
                    musicObj: {}
                }
            }, S.propTypes = {
                configs: r().shape({
                    soundUrl: r().string,
                    soundObj: r().object,
                    musicUrl: r().oneOfType([r().string, r().array]),
                    musicObj: r().object
                })
            };
            const g = (0, i.memo)(S)
        },
        1663(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SettingsService: () => o.A,
                settings: () => o.W
            });
            var o = n(463)
        },
        2694(t, e, n) {
            "use strict";
            var o = n(6925);

            function r() {}

            function i() {}
            i.resetWarningCache = r, t.exports = function() {
                function t(t, e, n, r, i, s) {
                    if (s !== o) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: r
                };
                return n.PropTypes = n, n
            }
        },
        5556(t, e, n) {
            t.exports = n(2694)()
        },
        6925(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        1020(t, e, n) {
            "use strict";
            var o = n(8283),
                r = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function a(t, e, n) {
                var o, i = {},
                    a = null,
                    c = null;
                for (o in void 0 !== n && (a = "" + n), void 0 !== e.key && (a = "" + e.key), void 0 !== e.ref && (c = e.ref), e) s.call(e, o) && !l.hasOwnProperty(o) && (i[o] = e[o]);
                if (t && t.defaultProps)
                    for (o in e = t.defaultProps) void 0 === i[o] && (i[o] = e[o]);
                return {
                    $$typeof: r,
                    type: t,
                    key: a,
                    ref: c,
                    props: i,
                    _owner: u.current
                }
            }
            e.Fragment = i, e.jsx = a, e.jsxs = a
        },
        4848(t, e, n) {
            "use strict";
            t.exports = n(1020)
        }
    }
]);