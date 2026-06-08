"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2466], {
        2466(e, t, r) {
            r.r(t), r.d(t, {
                default: () => F
            });
            var n = r(5556),
                o = r.n(n),
                l = r(6653),
                s = r(8715),
                a = r(8283),
                i = r(2384),
                u = r(3387),
                c = r(4340),
                y = r.n(c),
                f = r(9900),
                d = r.n(f),
                p = r(8579),
                b = r(6337),
                m = r(2182),
                O = r(6723),
                v = r(8517),
                S = r(4848);

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }
            var E = ["type"];

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, l, s, a = [],
                            i = !0,
                            u = !1;
                        try {
                            if (l = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                i = !1
                            } else
                                for (; !(i = (n = l.call(r)).done) && (a.push(n.value), a.length !== t); i = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                if (!i && null != r.return && (s = r.return(), Object(s) !== s)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return P(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function R(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(r), !0).forEach(function(t) {
                        var n, o, l, s;
                        n = e, o = t, l = r[t], s = function(e) {
                            if ("object" != h(e) || !e) return e;
                            var t = e[Symbol.toPrimitive];
                            if (void 0 !== t) {
                                var r = t.call(e, "string");
                                if ("object" != h(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o), (o = "symbol" == h(s) ? s : s + "") in n ? Object.defineProperty(n, o, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = l
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var T = (0, a.lazy)(function() {
                    return r.e(5717).then(r.t.bind(r, 5717, 23))
                }),
                _ = (0, a.lazy)(function() {
                    return r.e(2447).then(r.t.bind(r, 2447, 23))
                }),
                k = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.banksystem,
                        bustRemoteEntryCache: !1,
                        scope: "banksystem",
                        module: "BankSystem"
                    })
                }),
                C = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.matchday,
                        bustRemoteEntryCache: !1,
                        scope: "matchday",
                        module: "MatchDay"
                    })
                }),
                I = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.missions,
                        bustRemoteEntryCache: !1,
                        scope: "missions",
                        module: "Missions"
                    })
                }),
                A = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.moneyland,
                        bustRemoteEntryCache: !1,
                        scope: "moneyland",
                        module: "MoneyLand"
                    })
                }),
                M = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.leaderboard,
                        bustRemoteEntryCache: !1,
                        scope: "leaderboard",
                        module: "Leaderboard"
                    })
                }),
                w = (0, a.lazy)(function() {
                    return (0, s.G)({
                        url: v.REMOTE_CLIENT_URLS.crashback,
                        bustRemoteEntryCache: !1,
                        scope: "crashback",
                        module: "Crashback"
                    })
                }),
                N = u.PROMOTIONS_TYPES.leaderboard,
                L = u.PROMOTIONS_TYPES.missions,
                x = u.PROMOTIONS_TYPES.banksystem,
                B = u.PROMOTIONS_TYPES.moneyland,
                D = u.PROMOTIONS_TYPES.matchday,
                U = u.PROMOTIONS_TYPES.crashback,
                z = function(e) {
                    var t = e.type,
                        r = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
                                if (null == e) return {};
                                var r, n, o = {},
                                    l = Object.keys(e);
                                for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, E);
                    switch (t) {
                        case L:
                            var n;
                            return (0, S.jsx)(I, j(j({}, r), {}, {
                                styles: null == r || null === (n = r.styles) || void 0 === n ? void 0 : n.missions
                            }));
                        case N:
                            var o;
                            return (0, S.jsx)(M, j(j({}, r), {}, {
                                styles: null == r || null === (o = r.styles) || void 0 === o ? void 0 : o.leaderboard
                            }));
                        case B:
                            var l;
                            return (0, S.jsx)(A, j(j({}, r), {}, {
                                styles: null == r || null === (l = r.styles) || void 0 === l ? void 0 : l.moneyland
                            }));
                        case x:
                            var s;
                            return (0, S.jsx)(k, j(j({}, r), {}, {
                                styles: null == r || null === (s = r.styles) || void 0 === s ? void 0 : s.banksystem
                            }));
                        case D:
                            var a;
                            return (0, S.jsx)(C, j(j({}, r), {}, {
                                styles: null == r || null === (a = r.styles) || void 0 === a ? void 0 : a.matchday
                            }));
                        case U:
                            var i;
                            return (0, S.jsx)(w, j(j({}, r), {}, {
                                styles: null == r || null === (i = r.styles) || void 0 === i ? void 0 : i.crashback
                            }));
                        default:
                            return t
                    }
                };

            function Y(e) {
                var t, r, n = e.styles,
                    o = e.onClose,
                    s = e.promotionsRef,
                    c = e.data,
                    f = (0, l.useDispatch)(),
                    v = (0, m.shallowSelector)(m.selectResources),
                    h = (0, l.useSelector)(m.selectActivePromotions),
                    E = (0, l.useSelector)(m.selectIsDeactivated),
                    P = g((0, a.useState)([]), 2),
                    R = P[0],
                    k = P[1],
                    C = g((0, a.useState)({}), 2),
                    I = C[0],
                    A = C[1],
                    M = g((0, a.useState)(!0), 2),
                    w = M[0],
                    Y = M[1],
                    F = (0, l.useSelector)(m.selectPopups),
                    G = b.isMobile && !(0, i.useOrientationChange)();
                (0, a.useEffect)(function() {
                    return (0, O.N)(),
                        function() {
                            f(m.actions.setActivePromotions(null))
                        }
                }, []), (0, a.useEffect)(function() {
                    if (h) {
                        if (h.length) {
                            var e = h.map(function(e) {
                                    return e.id
                                }),
                                t = p.Vx.filter(function(t) {
                                    return e.includes(t.id)
                                });
                            k(t), t.find(function(e) {
                                return e.promotionType === I.type
                            }) || A({
                                type: ""
                            })
                        }
                        Y(!1)
                    }
                }, [h]);
                var q = (0, a.useCallback)(function(e) {
                    e === L ? A({
                        type: e,
                        backgroundColor: "radial-gradient(50% 50% at 50% 50%, #000 0%, #00050F 100%)",
                        fromPromotionMenu: !0
                    }) : e === B ? A({
                        type: e,
                        backgroundColor: "#070112"
                    }) : e === N ? A({
                        type: e,
                        backgroundColor: "linear-gradient(180deg, #0F0F0F 0%, #010101 100%)"
                    }) : e === x || e === D ? A({
                        type: e,
                        backgroundColor: "#010A00"
                    }) : e === U && A({
                        type: e,
                        backgroundImage: (0, p.Gz)(G),
                        backgroundColor: "linear-gradient(186deg, #553800 4.49%, #0A0701 55.46%)"
                    })
                }, []);
                (0, a.useEffect)(function() {
                    null != c && c.promotionType && q(c.promotionType)
                }, [null == c ? void 0 : c.promotionType]);
                var H = (0, a.useCallback)(function() {
                    var e;
                    null !== (e = F[u.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY_INFO]) && void 0 !== e && e.open ? f(m.actions.closePopup({
                        name: u.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY_INFO
                    })) : (A({
                        type: ""
                    }), (0, O.N)())
                }, [F]);
                return E ? null : (0, S.jsx)(y(), {
                    layerBgImg: I.backgroundImage,
                    layerBgColor: (null == c || null === (t = c.styles) || void 0 === t ? void 0 : t.bgLayer) || I.backgroundColor,
                    promotionsRef: s,
                    onClose: o,
                    styles: n,
                    strPromotions: null !== (r = F[u.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY_INFO]) && void 0 !== r && r.open ? v.strHistory : v.strPromotions || "__Promotions",
                    goToBack: I.type && I.type !== L ? H : null,
                    children: w ? (0, S.jsx)(d(), {}) : h.length ? (0, S.jsx)(a.Suspense, {
                        fallback: null,
                        children: I.type ? z(j({
                            styles: n,
                            data: c,
                            goBack: H
                        }, I)) : (0, S.jsx)(_, {
                            styles: null == n ? void 0 : n.promotionItems,
                            list: R.map(function(e) {
                                return j(j({}, e), {}, {
                                    title: v["str".concat(e.title)] || "_".concat(e.title),
                                    description: v["str".concat(e.title, "Description")] || e.description
                                })
                            }),
                            onViewMore: q,
                            goBack: H,
                            viewMoreText: v.strViewMore
                        })
                    }) : (0, S.jsx)(a.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(T, {
                            styles: null == n ? void 0 : n.emptyState,
                            strNoAvailablePromotions: v.strNoAvailablePromotions,
                            strCheckBack: v.strCheckBack
                        })
                    })
                })
            }
            Y.propTypes = {
                styles: o().object.isRequired,
                promotionsRef: o().object.isRequired,
                onClose: o().func.isRequired,
                data: o().object.isRequired
            };
            const F = (0, a.memo)(Y)
        }
    }
]);