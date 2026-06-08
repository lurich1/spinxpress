"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [851], {
        851(e, n, l) {
            l.d(n, {
                A: () => k
            });
            var o = l(5556),
                t = l.n(o),
                s = l(8283),
                i = l(6653),
                u = l(8715),
                a = l(2384),
                r = l(3387),
                d = l(8517),
                c = l(6024),
                P = l(2182),
                A = l(6337),
                E = l(2093),
                S = l(4848);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var l = 0, o = new Array(n); l < n; l++) o[l] = e[l];
                return o
            }
            var O, f = (0, s.lazy)(function() {
                    return l.e(6364).then(l.t.bind(l, 6364, 23))
                }),
                p = (0, s.lazy)(function() {
                    return l.e(7311).then(l.bind(l, 7311))
                }),
                B = (0, s.lazy)(function() {
                    return l.e(1644).then(l.t.bind(l, 1644, 23))
                }),
                v = (0, s.lazy)(function() {
                    return l.e(130).then(l.t.bind(l, 130, 23))
                }),
                h = (0, s.lazy)(function() {
                    return l.e(9512).then(l.t.bind(l, 9512, 23))
                }),
                b = (0, s.lazy)(function() {
                    return l.e(5095).then(l.t.bind(l, 5095, 23))
                }),
                y = (0, s.lazy)(function() {
                    return l.e(9094).then(l.t.bind(l, 9094, 23))
                }),
                R = (0, s.lazy)(function() {
                    return Promise.all([l.e(3321), l.e(2466)]).then(l.bind(l, 2466))
                }),
                U = (0, s.lazy)(function() {
                    return (0, u.G)({
                        url: d.REMOTE_CLIENT_URLS.chat,
                        bustRemoteEntryCache: !1,
                        scope: "chat",
                        module: "ChatRegistryPopup"
                    })
                }),
                M = (0, s.lazy)(function() {
                    return (0, u.G)({
                        url: d.REMOTE_CLIENT_URLS.leaderboard,
                        bustRemoteEntryCache: !1,
                        scope: "leaderboard",
                        module: "components/LeaderboardPopup"
                    })
                }),
                C = (0, s.lazy)(function() {
                    return (0, u.G)({
                        url: d.REMOTE_CLIENT_URLS.leaderboard,
                        bustRemoteEntryCache: !1,
                        scope: "leaderboard",
                        module: "components/LeaderboardTable"
                    })
                }),
                N = (0, s.lazy)(function() {
                    return (0, u.G)({
                        url: d.REMOTE_CLIENT_URLS.rules,
                        bustRemoteEntryCache: !1,
                        scope: "rules",
                        module: "RulesService"
                    })
                }),
                m = (0, s.lazy)(function() {
                    return (0, u.G)({
                        url: d.REMOTE_CLIENT_URLS.cashback,
                        bustRemoteEntryCache: !1,
                        scope: "cashback",
                        module: "CashbackService"
                    })
                }),
                H = function(e) {
                    if (Array.isArray(e)) return e
                }(O = A.GFA) || function(e) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var l, o, t, s, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = (n = n.call(e)).next, !3; !(u = (l = t.call(n)).done) && (i.push(l.value), 3 !== i.length); u = !0);
                        } catch (e) {
                            a = !0, o = e
                        } finally {
                            try {
                                if (!u && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(O) || function(e) {
                    if (e) {
                        if ("string" == typeof e) return _(e, 3);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(e, 3) : void 0
                    }
                }(O) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }(),
                x = H[0],
                L = H[2];

            function j(e) {
                var n, o, t, u, _, O, H, j, k, T, D, g, I, Y, G, K, w, z, q, V, F, W, X, $, J, Q, Z, ee, ne, le, oe, te, se, ie = e.style,
                    ue = e.mappedGlobalHistory,
                    ae = e.getHashCode,
                    re = e.getBetHistory,
                    de = e.menuRef,
                    ce = e.isGameLoaded,
                    Pe = e.selectShowOutsidePopups,
                    Ae = (0, i.useDispatch)(),
                    Ee = (0, P.shallowSelector)(c.Io),
                    Se = (0, P.shallowSelector)(P.selectPopupsData),
                    _e = Se.hashCode,
                    Oe = Se.isDisconnected,
                    fe = Se.maxBet,
                    pe = Se.maxWin,
                    Be = Se.minBet,
                    ve = Se.quickBets,
                    he = Se.resources,
                    be = Se.globalHistory,
                    ye = Se.globalBonusHistory,
                    Re = Se.precision,
                    Ue = Se.isDeactivated,
                    Me = Se.underConstruction,
                    Ce = Se.isExpired,
                    Ne = (0, P.shallowSelector)(P.selectPartnerUIConfig).hideHashCode,
                    me = (0, s.useCallback)(function(e, n) {
                        return Ae(P.actions.openPopup({
                            name: e,
                            args: n
                        }))
                    }, []),
                    He = (0, s.useCallback)(function(e) {
                        return Ae(P.actions.closePopup({
                            name: e
                        }))
                    }, []),
                    xe = (0, s.useMemo)(function() {
                        return ce ? ue(be, me, he, Ne) : null
                    }, [be, he, ce]),
                    Le = (0, s.useMemo)(function() {
                        return ce ? (0, A.mappedGlobalBonusHistory)(ye, he) : null
                    }, [ye, he, ce]),
                    je = (0, s.useCallback)(function() {
                        Ae(P.actions.setPlayerHashCode({
                            hashCode: ""
                        }))
                    }, []),
                    ke = (0, s.useCallback)(function() {
                        return He(r.BASE_POPUP_NAMES.GLOBAL_HISTORY)
                    }, []),
                    Te = (0, s.useCallback)(function() {
                        return He(r.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY)
                    }, []),
                    De = (0, s.useCallback)(function() {
                        return He(r.BASE_POPUP_NAMES.ABOUT_HASH_CODE)
                    }, []),
                    ge = (0, s.useCallback)(function() {
                        return me(r.BASE_POPUP_NAMES.ABOUT_HASH_CODE)
                    }, []),
                    Ie = (0, s.useCallback)(function() {
                        je(), He(r.BASE_POPUP_NAMES.CHECK_HASH_CODE)
                    }, []),
                    Ye = (0, s.useCallback)(function() {
                        return He(r.BASE_POPUP_NAMES.KEYBOARD)
                    }, []),
                    Ge = (0, s.useCallback)(function() {
                        return He(r.BASE_POPUP_NAMES.PROMOTIONS)
                    }, []);
                (0, s.useEffect)(function() {
                    if (A.isMobile) {
                        var e = Object.values(Ee),
                            n = null == e ? void 0 : e.some(function(e) {
                                return e.open
                            });
                        Object.keys(Ee).some(function(e) {
                            var n;
                            return e.includes("BonusAside") && (null === (n = Ee[e]) || void 0 === n ? void 0 : n.open)
                        }) || document.body.classList[n ? "add" : "remove"]("fix-body")
                    }
                    return x("GalaxsysRules", function(e) {
                            var n;
                            "hide" === e.state || null !== (n = Ee[r.BASE_POPUP_NAMES.RULES]) && void 0 !== n && n.open ? He(r.BASE_POPUP_NAMES.RULES) : me(r.BASE_POPUP_NAMES.RULES)
                        }), x("GalaxsysHistory", function(e) {
                            "show" === e.state && (0, i.batch)(function() {
                                Ae(P.actions.openPopup({
                                    name: r.BASE_POPUP_NAMES.GLOBAL_HISTORY
                                })), Ae(P.actions.openPopup({
                                    name: r.BASE_POPUP_NAMES.MAIN_MENU
                                }))
                            })
                        }),
                        function() {
                            L("GalaxsysRules"), L("GalaxsysHistory")
                        }
                }, [Ee]);
                var Ke = (0, s.useRef)(null),
                    we = (0, s.useRef)(null),
                    ze = (0, s.useRef)(null),
                    qe = (0, s.useRef)(null),
                    Ve = (0, s.useRef)(null),
                    Fe = (0, s.useRef)(null),
                    We = (0, s.useRef)(null),
                    Xe = (0, s.useRef)(null);
                return (0, a.useOutsideClickV2)([de, Ke, we, Ve, ze, qe, Fe, We, Xe], function() {
                    var e;
                    [r.BASE_POPUP_NAMES.MAIN_MENU, r.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY, r.BASE_POPUP_NAMES.PROMOTIONS, r.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY, r.BASE_POPUP_NAMES.RULES].forEach(function(e) {
                        var n;
                        null !== (n = Ee[e]) && void 0 !== n && n.open && He(e)
                    }), null !== (e = Ee[r.BASE_POPUP_NAMES.GLOBAL_HISTORY]) && void 0 !== e && e.open && ke()
                }), (0, s.useEffect)(function() {
                    ce && (l.e(6364).then(l.t.bind(l, 6364, 23)), l.e(7311).then(l.bind(l, 7311)), Promise.all([l.e(3321), l.e(2466)]).then(l.bind(l, 2466)))
                }, [ce]), Oe || null != Me && Me.show || Ue || Ce || !ce ? null : (0, S.jsxs)(S.Fragment, {
                    children: [(null === (n = Ee[r.BASE_POPUP_NAMES.MAIN_MENU]) || void 0 === n ? void 0 : n.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(p, {
                            style: ie,
                            getBetHistory: re,
                            menuRef: de
                        })
                    }), !A.isMobile && (null === (o = Ee[r.BASE_POPUP_NAMES.GLOBAL_HISTORY]) || void 0 === o ? void 0 : o.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(f, {
                            historyRef: Ke,
                            history: xe,
                            styles: ie.globalHistory
                        })
                    }), !A.isMobile && (null === (t = Ee[r.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY]) || void 0 === t ? void 0 : t.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(f, {
                            historyRef: we,
                            history: Le,
                            styles: ie.globalHistory
                        })
                    }), (null === (u = Ee[r.BASE_POPUP_NAMES.PROMOTIONS]) || void 0 === u ? void 0 : u.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(R, {
                            styles: ie.promotions,
                            onClose: Ge,
                            promotionsRef: qe,
                            data: Ee[r.BASE_POPUP_NAMES.PROMOTIONS].data
                        })
                    }), (null === (_ = Ee[r.BASE_POPUP_NAMES.LEADER_BOARD]) || void 0 === _ ? void 0 : _.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(M, {
                            leaderboardPopupRef: Ve,
                            leaderboardId: null === (O = Ee[r.BASE_POPUP_NAMES.LEADER_BOARD]) || void 0 === O || null === (O = O.data) || void 0 === O ? void 0 : O.leaderBoardId
                        })
                    }), (null === (H = Ee[r.BASE_POPUP_NAMES.LEADER_BOARD_HISTORY]) || void 0 === H ? void 0 : H.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(C, {
                            styles: ie.globalHistory,
                            leaderboardRef: ze
                        })
                    }), (null === (j = Ee[r.BASE_POPUP_NAMES.CHECK_HASH_CODE]) || void 0 === j ? void 0 : j.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsxs)("div", {
                            ref: Fe,
                            children: [(0, S.jsx)(B, {
                                styles: ie.backdrop
                            }), (0, S.jsx)(h, {
                                codes: null === (k = Ee[r.BASE_POPUP_NAMES.CHECK_HASH_CODE]) || void 0 === k ? void 0 : k.data,
                                hashCode: _e,
                                inputDisabled: !0,
                                onAboutHashCode: ge,
                                onCheckHashCode: ae,
                                onClose: Ie,
                                resources: he,
                                styles: ie.checkHashCode
                            })]
                        })
                    }), A.isMobile && (null === (T = Ee[r.BASE_POPUP_NAMES.GLOBAL_HISTORY]) || void 0 === T ? void 0 : T.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(y, {
                            historyRef: Ke,
                            history: xe,
                            strHistory: he.strHistory,
                            onClose: ke,
                            styles: ie.mobileHistory
                        })
                    }), A.isMobile && (null === (D = Ee[r.BASE_POPUP_NAMES.GLOBAL_BONUS_HISTORY]) || void 0 === D ? void 0 : D.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(y, {
                            historyRef: Ke,
                            history: Le,
                            strHistory: he.strBonusHistory,
                            onClose: Te,
                            styles: ie.mobileHistory
                        })
                    }), A.isMobile && (null === (g = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === g ? void 0 : g.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(b, {
                            minBet: null !== (I = Ee[r.BASE_POPUP_NAMES.KEYBOARD].data) && void 0 !== I && null !== (I = I.config) && void 0 !== I && I.extended ? Be : (null === (Y = Ee[r.BASE_POPUP_NAMES.KEYBOARD].data) || void 0 === Y || null === (Y = Y.config) || void 0 === Y ? void 0 : Y.minBet) || 0,
                            maxBet: null !== (G = Ee[r.BASE_POPUP_NAMES.KEYBOARD].data) && void 0 !== G && null !== (G = G.config) && void 0 !== G && G.extended ? fe : (null === (K = Ee[r.BASE_POPUP_NAMES.KEYBOARD].data) || void 0 === K || null === (K = K.config) || void 0 === K ? void 0 : K.maxBet) || 0,
                            maxWin: pe,
                            quickBets: null !== (w = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) && void 0 !== w && null !== (w = w.data) && void 0 !== w && null !== (w = w.config) && void 0 !== w && w.extended ? ve : (null === (z = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === z || null === (z = z.data) || void 0 === z || null === (z = z.config) || void 0 === z ? void 0 : z.quickBets) || null,
                            withDot: null === (q = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === q || null === (q = q.data) || void 0 === q || null === (q = q.config) || void 0 === q ? void 0 : q.dot,
                            getter: null === (V = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === V ? void 0 : V.data.getter,
                            setter: null === (F = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === F ? void 0 : F.data.setter,
                            title: null === (W = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === W ? void 0 : W.data.title,
                            maxCharLength: null === (X = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === X ? void 0 : X.data.maxCharLength,
                            precision: (null === ($ = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === $ || null === ($ = $.data) || void 0 === $ ? void 0 : $.precision) || Re,
                            customValidation: null === (J = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === J ? void 0 : J.data.customValidation,
                            resources: he,
                            styles: ie.keyboard,
                            onClose: Ye,
                            type: null === (Q = Ee[r.BASE_POPUP_NAMES.KEYBOARD]) || void 0 === Q ? void 0 : Q.data.type,
                            maxAutoCashout: d.MAX_AUTOCASHOUT,
                            maxAutoBet: d.MAX_AUTOBET
                        })
                    }), (null === (Z = Ee[r.BASE_POPUP_NAMES.ABOUT_HASH_CODE]) || void 0 === Z ? void 0 : Z.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)("div", {
                            ref: We,
                            children: (0, S.jsx)(v, {
                                onClose: De,
                                iconColor: "#ccc",
                                culture: A.culture,
                                resources: he,
                                styles: ie.aboutHashCode
                            })
                        })
                    }), (null === (ee = Ee[r.BASE_POPUP_NAMES.RULES]) || void 0 === ee ? void 0 : ee.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(N, {
                            rulesRef: Xe,
                            styles: ie.rules,
                            theme: "glass",
                            onClose: He
                        })
                    }), ((null === (ne = Ee[r.BASE_POPUP_NAMES.CASH_BACK]) || void 0 === ne ? void 0 : ne.open) || (null === (le = Ee[r.BASE_POPUP_NAMES.CASH_BACK_INTRO_POPUP]) || void 0 === le ? void 0 : le.open)) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(m, {
                            openPopup: me,
                            closePopup: He,
                            selectShowOutsidePopups: Pe,
                            isAutomaticallyOpenPopup: null === (oe = Ee[r.BASE_POPUP_NAMES.CASH_BACK]) || void 0 === oe || null === (oe = oe.data) || void 0 === oe ? void 0 : oe.isAutomaticallyOpenPopup
                        })
                    }), (null === (te = Ee[r.BASE_POPUP_NAMES.CHAT_REGISTRY_POPUP]) || void 0 === te ? void 0 : te.open) && (0, S.jsx)(s.Suspense, {
                        fallback: null,
                        children: (0, S.jsx)(U, {
                            style: ie.chatRegistry
                        })
                    }), (null === (se = Ee[r.BASE_POPUP_NAMES.CHAT_POPUP]) || void 0 === se ? void 0 : se.open) && A.isMobile && (0, S.jsx)(E.A, {
                        style: ie.chatAside
                    })]
                })
            }
            j.defaultProps = {
                style: {},
                mappedGlobalHistory: function() {},
                getHashCode: function() {},
                getBetHistory: function() {},
                menuRef: {},
                isGameLoaded: !1,
                selectShowOutsidePopups: function() {}
            }, j.propTypes = {
                style: t().object,
                mappedGlobalHistory: t().func,
                getHashCode: t().func,
                getBetHistory: t().func,
                menuRef: t().object,
                isGameLoaded: t().bool,
                selectShowOutsidePopups: t().bool
            };
            const k = (0, s.memo)(j)
        }
    }
]);