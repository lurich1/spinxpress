"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [9879], {
        9879(e, t, n) {
            function r(e) {
                return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
            n.r(t), n.d(t, {
                ReducerType: () => ft,
                SHOULD_AUTOBATCH: () => $e,
                TaskAbortError: () => zt,
                Tuple: () => ke,
                __DO_NOT_USE__ActionTypes: () => c,
                addListener: () => Zt,
                applyMiddleware: () => y,
                asyncThunkCreator: () => lt,
                autoBatchEnhancer: () => We,
                bindActionCreators: () => d,
                buildCreateSlice: () => pt,
                clearAllListeners: () => en,
                combineReducers: () => l,
                combineSlices: () => dn,
                compose: () => p,
                configureStore: () => Be,
                createAction: () => Se,
                createActionCreatorInvariantMiddleware: () => Pe,
                createAsyncThunk: () => at,
                createDraftSafeSelector: () => ve,
                createDraftSafeSelectorCreator: () => _e,
                createDynamicMiddleware: () => cn,
                createEntityAdapter: () => At,
                createImmutableStateInvariantMiddleware: () => xe,
                createListenerMiddleware: () => rn,
                createNextState: () => ce,
                createReducer: () => Ue,
                createSelector: () => he,
                createSelectorCreator: () => ye,
                createSerializableStateInvariantMiddleware: () => De,
                createSlice: () => ht,
                createStore: () => s,
                current: () => re,
                findNonSerializableValue: () => Ie,
                formatProdErrorMessage: () => pn,
                freeze: () => z,
                isAction: () => h,
                isActionCreator: () => je,
                isAllOf: () => Xe,
                isAnyOf: () => Ke,
                isAsyncThunkAction: () => et,
                isDraft: () => v,
                isFluxStandardAction: () => Ae,
                isFulfilled: () => Ze,
                isImmutableDefault: () => Re,
                isPending: () => Je,
                isPlain: () => ze,
                isPlainObject: () => a,
                isRejected: () => Qe,
                isRejectedWithValue: () => Ye,
                legacy_createStore: () => u,
                lruMemoize: () => le,
                miniSerializeError: () => it,
                nanoid: () => tt,
                original: () => j,
                prepareAutoBatched: () => Fe,
                removeListener: () => tn,
                unwrapResult: () => st,
                weakMapMemoize: () => pe
            });
            var o = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")(),
                i = () => Math.random().toString(36).substring(7).split("").join("."),
                c = {
                    INIT: `@@redux/INIT${i()}`,
                    REPLACE: `@@redux/REPLACE${i()}`,
                    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${i()}`
                };

            function a(e) {
                if ("object" != typeof e || null === e) return !1;
                let t = e;
                for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
            }

            function s(e, t, n) {
                if ("function" != typeof e) throw new Error(r(2));
                if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(r(0));
                if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
                    if ("function" != typeof n) throw new Error(r(1));
                    return n(s)(e, t)
                }
                let i = e,
                    u = t,
                    l = new Map,
                    f = l,
                    d = 0,
                    p = !1;

                function y() {
                    f === l && (f = new Map, l.forEach((e, t) => {
                        f.set(t, e)
                    }))
                }

                function h() {
                    if (p) throw new Error(r(3));
                    return u
                }

                function m(e) {
                    if ("function" != typeof e) throw new Error(r(4));
                    if (p) throw new Error(r(5));
                    let t = !0;
                    y();
                    const n = d++;
                    return f.set(n, e),
                        function() {
                            if (t) {
                                if (p) throw new Error(r(6));
                                t = !1, y(), f.delete(n), l = null
                            }
                        }
                }

                function g(e) {
                    if (!a(e)) throw new Error(r(7));
                    if (void 0 === e.type) throw new Error(r(8));
                    if ("string" != typeof e.type) throw new Error(r(17));
                    if (p) throw new Error(r(9));
                    try {
                        p = !0, u = i(u, e)
                    } finally {
                        p = !1
                    }
                    return (l = f).forEach(e => {
                        e()
                    }), e
                }
                return g({
                    type: c.INIT
                }), {
                    dispatch: g,
                    subscribe: m,
                    getState: h,
                    replaceReducer: function(e) {
                        if ("function" != typeof e) throw new Error(r(10));
                        i = e, g({
                            type: c.REPLACE
                        })
                    },
                    [o]: function() {
                        const e = m;
                        return {
                            subscribe(t) {
                                if ("object" != typeof t || null === t) throw new Error(r(11));

                                function n() {
                                    const e = t;
                                    e.next && e.next(h())
                                }
                                return n(), {
                                    unsubscribe: e(n)
                                }
                            },
                            [o]() {
                                return this
                            }
                        }
                    }
                }
            }

            function u(e, t, n) {
                return s(e, t, n)
            }

            function l(e) {
                const t = Object.keys(e),
                    n = {};
                for (let r = 0; r < t.length; r++) {
                    const o = t[r];
                    "function" == typeof e[o] && (n[o] = e[o])
                }
                const o = Object.keys(n);
                let i;
                try {
                    ! function(e) {
                        Object.keys(e).forEach(t => {
                            const n = e[t];
                            if (void 0 === n(void 0, {
                                    type: c.INIT
                                })) throw new Error(r(12));
                            if (void 0 === n(void 0, {
                                    type: c.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(r(13))
                        })
                    }(n)
                } catch (e) {
                    i = e
                }
                return function(e = {}, t) {
                    if (i) throw i;
                    let c = !1;
                    const a = {};
                    for (let i = 0; i < o.length; i++) {
                        const s = o[i],
                            u = n[s],
                            l = e[s],
                            f = u(l, t);
                        if (void 0 === f) throw t && t.type, new Error(r(14));
                        a[s] = f, c = c || f !== l
                    }
                    return c = c || o.length !== Object.keys(e).length, c ? a : e
                }
            }

            function f(e, t) {
                return function(...n) {
                    return t(e.apply(this, n))
                }
            }

            function d(e, t) {
                if ("function" == typeof e) return f(e, t);
                if ("object" != typeof e || null === e) throw new Error(r(16));
                const n = {};
                for (const r in e) {
                    const o = e[r];
                    "function" == typeof o && (n[r] = f(o, t))
                }
                return n
            }

            function p(...e) {
                return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)))
            }

            function y(...e) {
                return t => (n, o) => {
                    const i = t(n, o);
                    let c = () => {
                        throw new Error(r(15))
                    };
                    const a = {
                            getState: i.getState,
                            dispatch: (e, ...t) => c(e, ...t)
                        },
                        s = e.map(e => e(a));
                    return c = p(...s)(i.dispatch), { ...i,
                        dispatch: c
                    }
                }
            }

            function h(e) {
                return a(e) && "type" in e && "string" == typeof e.type
            }
            var m = Symbol.for("immer-nothing"),
                g = Symbol.for("immer-draftable"),
                b = Symbol.for("immer-state");

            function w(e, ...t) {
                throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var _ = Object.getPrototypeOf;

            function v(e) {
                return !!e && !!e[b]
            }

            function O(e) {
                return !!e && (S(e) || Array.isArray(e) || !!e[g] || !!e.constructor ? .[g] || M(e) || T(e))
            }
            var E = Object.prototype.constructor.toString();

            function S(e) {
                if (!e || "object" != typeof e) return !1;
                const t = _(e);
                if (null === t) return !0;
                const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === E
            }

            function j(e) {
                return v(e) || w(15), e[b].base_
            }

            function A(e, t) {
                0 === C(e) ? Reflect.ownKeys(e).forEach(n => {
                    t(n, e[n], e)
                }) : e.forEach((n, r) => t(r, n, e))
            }

            function C(e) {
                const t = e[b];
                return t ? t.type_ : Array.isArray(e) ? 1 : M(e) ? 2 : T(e) ? 3 : 0
            }

            function P(e, t) {
                return 2 === C(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function k(e, t, n) {
                const r = C(e);
                2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
            }

            function M(e) {
                return e instanceof Map
            }

            function T(e) {
                return e instanceof Set
            }

            function R(e) {
                return e.copy_ || e.base_
            }

            function x(e, t) {
                if (M(e)) return new Map(e);
                if (T(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                const n = S(e);
                if (!0 === t || "class_only" === t && !n) {
                    const t = Object.getOwnPropertyDescriptors(e);
                    delete t[b];
                    let n = Reflect.ownKeys(t);
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r],
                            i = t[o];
                        !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[o] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: i.enumerable,
                            value: e[o]
                        })
                    }
                    return Object.create(_(e), t)
                } {
                    const t = _(e);
                    if (null !== t && n) return { ...e
                    };
                    const r = Object.create(t);
                    return Object.assign(r, e)
                }
            }

            function z(e, t = !1) {
                return N(e) || v(e) || !O(e) || (C(e) > 1 && (e.set = e.add = e.clear = e.delete = I), Object.freeze(e), t && Object.entries(e).forEach(([e, t]) => z(t, !0))), e
            }

            function I() {
                w(2)
            }

            function N(e) {
                return Object.isFrozen(e)
            }
            var D, $ = {};

            function F(e) {
                const t = $[e];
                return t || w(0), t
            }

            function L() {
                return D
            }

            function W(e, t) {
                t && (F("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function B(e) {
                q(e), e.drafts_.forEach(V), e.drafts_ = null
            }

            function q(e) {
                e === D && (D = e.parent_)
            }

            function U(e) {
                return D = {
                    drafts_: [],
                    parent_: D,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function V(e) {
                const t = e[b];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function K(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                const n = t.drafts_[0];
                return void 0 !== e && e !== n ? (n[b].modified_ && (B(t), w(4)), O(e) && (e = X(t, e), t.parent_ || H(t, e)), t.patches_ && F("Patches").generateReplacementPatches_(n[b].base_, e, t.patches_, t.inversePatches_)) : e = X(t, n, []), B(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== m ? e : void 0
            }

            function X(e, t, n) {
                if (N(t)) return t;
                const r = t[b];
                if (!r) return A(t, (o, i) => G(e, r, t, o, i, n)), t;
                if (r.scope_ !== e) return t;
                if (!r.modified_) return H(e, r.base_, !0), r.base_;
                if (!r.finalized_) {
                    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
                    const t = r.copy_;
                    let o = t,
                        i = !1;
                    3 === r.type_ && (o = new Set(t), t.clear(), i = !0), A(o, (o, c) => G(e, r, t, o, c, n, i)), H(e, t, !1), n && e.patches_ && F("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
                }
                return r.copy_
            }

            function G(e, t, n, r, o, i, c) {
                if (v(o)) {
                    const c = X(e, o, i && t && 3 !== t.type_ && !P(t.assigned_, r) ? i.concat(r) : void 0);
                    if (k(n, r, c), !v(c)) return;
                    e.canAutoFreeze_ = !1
                } else c && n.add(o);
                if (O(o) && !N(o)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    X(e, o), t && t.scope_.parent_ || "symbol" == typeof r || !Object.prototype.propertyIsEnumerable.call(n, r) || H(e, o)
                }
            }

            function H(e, t, n = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && z(t, n)
            }
            var J = {
                    get(e, t) {
                        if (t === b) return e;
                        const n = R(e);
                        if (!P(n, t)) return function(e, t, n) {
                            const r = Z(t, n);
                            return r ? "value" in r ? r.value : r.get ? .call(e.draft_) : void 0
                        }(e, n, t);
                        const r = n[t];
                        return e.finalized_ || !O(r) ? r : r === Y(e.base_, t) ? (te(e), e.copy_[t] = ne(r, e)) : r
                    },
                    has: (e, t) => t in R(e),
                    ownKeys: e => Reflect.ownKeys(R(e)),
                    set(e, t, n) {
                        const r = Z(R(e), t);
                        if (r ? .set) return r.set.call(e.draft_, n), !0;
                        if (!e.modified_) {
                            const r = Y(R(e), t),
                                c = r ? .[b];
                            if (c && c.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                            if (((o = n) === (i = r) ? 0 !== o || 1 / o == 1 / i : o != o && i != i) && (void 0 !== n || P(e.base_, t))) return !0;
                            te(e), ee(e)
                        }
                        var o, i;
                        return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
                    },
                    deleteProperty: (e, t) => (void 0 !== Y(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, te(e), ee(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        const n = R(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: r.enumerable,
                            value: n[t]
                        } : r
                    },
                    defineProperty() {
                        w(11)
                    },
                    getPrototypeOf: e => _(e.base_),
                    setPrototypeOf() {
                        w(12)
                    }
                },
                Q = {};

            function Y(e, t) {
                const n = e[b];
                return (n ? R(n) : e)[t]
            }

            function Z(e, t) {
                if (!(t in e)) return;
                let n = _(e);
                for (; n;) {
                    const e = Object.getOwnPropertyDescriptor(n, t);
                    if (e) return e;
                    n = _(n)
                }
            }

            function ee(e) {
                e.modified_ || (e.modified_ = !0, e.parent_ && ee(e.parent_))
            }

            function te(e) {
                e.copy_ || (e.copy_ = x(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function ne(e, t) {
                const n = M(e) ? F("MapSet").proxyMap_(e, t) : T(e) ? F("MapSet").proxySet_(e, t) : function(e, t) {
                    const n = Array.isArray(e),
                        r = {
                            type_: n ? 1 : 0,
                            scope_: t ? t.scope_ : L(),
                            modified_: !1,
                            finalized_: !1,
                            assigned_: {},
                            parent_: t,
                            base_: e,
                            draft_: null,
                            copy_: null,
                            revoke_: null,
                            isManual_: !1
                        };
                    let o = r,
                        i = J;
                    n && (o = [r], i = Q);
                    const {
                        revoke: c,
                        proxy: a
                    } = Proxy.revocable(o, i);
                    return r.draft_ = a, r.revoke_ = c, a
                }(e, t);
                return (t ? t.scope_ : L()).drafts_.push(n), n
            }

            function re(e) {
                return v(e) || w(10), oe(e)
            }

            function oe(e) {
                if (!O(e) || N(e)) return e;
                const t = e[b];
                let n;
                if (t) {
                    if (!t.modified_) return t.base_;
                    t.finalized_ = !0, n = x(e, t.scope_.immer_.useStrictShallowCopy_)
                } else n = x(e, !0);
                return A(n, (e, t) => {
                    k(n, e, oe(t))
                }), t && (t.finalized_ = !1), n
            }
            A(J, (e, t) => {
                Q[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), Q.deleteProperty = function(e, t) {
                return Q.set.call(this, e, t, void 0)
            }, Q.set = function(e, t, n) {
                return J.set.call(this, e[0], t, n, e[0])
            };
            var ie = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
                            if ("function" == typeof e && "function" != typeof t) {
                                const n = t;
                                t = e;
                                const r = this;
                                return function(e = n, ...o) {
                                    return r.produce(e, e => t.call(this, e, ...o))
                                }
                            }
                            let r;
                            if ("function" != typeof t && w(6), void 0 !== n && "function" != typeof n && w(7), O(e)) {
                                const o = U(this),
                                    i = ne(e, void 0);
                                let c = !0;
                                try {
                                    r = t(i), c = !1
                                } finally {
                                    c ? B(o) : q(o)
                                }
                                return W(o, n), K(r, o)
                            }
                            if (!e || "object" != typeof e) {
                                if (r = t(e), void 0 === r && (r = e), r === m && (r = void 0), this.autoFreeze_ && z(r, !0), n) {
                                    const t = [],
                                        o = [];
                                    F("Patches").generateReplacementPatches_(e, r, t, o), n(t, o)
                                }
                                return r
                            }
                            w(1)
                        }, this.produceWithPatches = (e, t) => {
                            if ("function" == typeof e) return (t, ...n) => this.produceWithPatches(t, t => e(t, ...n));
                            let n, r;
                            return [this.produce(e, t, (e, t) => {
                                n = e, r = t
                            }), n, r]
                        }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        O(e) || w(8), v(e) && (e = re(e));
                        const t = U(this),
                            n = ne(e, void 0);
                        return n[b].isManual_ = !0, q(t), n
                    }
                    finishDraft(e, t) {
                        const n = e && e[b];
                        n && n.isManual_ || w(9);
                        const {
                            scope_: r
                        } = n;
                        return W(r, t), K(void 0, r)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let n;
                        for (n = t.length - 1; n >= 0; n--) {
                            const r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        const r = F("Patches").applyPatches_;
                        return v(e) ? r(e, t) : this.produce(e, e => r(e, t))
                    }
                },
                ce = ie.produce;
            ie.produceWithPatches.bind(ie), ie.setAutoFreeze.bind(ie), ie.setUseStrictShallowCopy.bind(ie), ie.applyPatches.bind(ie), ie.createDraft.bind(ie), ie.finishDraft.bind(ie);
            var ae = Symbol("NOT_FOUND");
            var se = e => Array.isArray(e) ? e : [e];
            Symbol(), Object.getPrototypeOf({});
            var ue = (e, t) => e === t;

            function le(e, t) {
                const n = "object" == typeof t ? t : {
                        equalityCheck: t
                    },
                    {
                        equalityCheck: r = ue,
                        maxSize: o = 1,
                        resultEqualityCheck: i
                    } = n,
                    c = function(e) {
                        return function(t, n) {
                            if (null === t || null === n || t.length !== n.length) return !1;
                            const {
                                length: r
                            } = t;
                            for (let o = 0; o < r; o++)
                                if (!e(t[o], n[o])) return !1;
                            return !0
                        }
                    }(r);
                let a = 0;
                const s = o <= 1 ? function(e) {
                    let t;
                    return {
                        get: n => t && e(t.key, n) ? t.value : ae,
                        put(e, n) {
                            t = {
                                key: e,
                                value: n
                            }
                        },
                        getEntries: () => t ? [t] : [],
                        clear() {
                            t = void 0
                        }
                    }
                }(c) : function(e, t) {
                    let n = [];

                    function r(e) {
                        const r = n.findIndex(n => t(e, n.key));
                        if (r > -1) {
                            const e = n[r];
                            return r > 0 && (n.splice(r, 1), n.unshift(e)), e.value
                        }
                        return ae
                    }
                    return {
                        get: r,
                        put: function(t, o) {
                            r(t) === ae && (n.unshift({
                                key: t,
                                value: o
                            }), n.length > e && n.pop())
                        },
                        getEntries: function() {
                            return n
                        },
                        clear: function() {
                            n = []
                        }
                    }
                }(o, c);

                function u() {
                    let t = s.get(arguments);
                    if (t === ae) {
                        if (t = e.apply(null, arguments), a++, i) {
                            const e = s.getEntries().find(e => i(e.value, t));
                            e && (t = e.value, 0 !== a && a--)
                        }
                        s.put(arguments, t)
                    }
                    return t
                }
                return u.clearCache = () => {
                    s.clear(), u.resetResultsCount()
                }, u.resultsCount = () => a, u.resetResultsCount = () => {
                    a = 0
                }, u
            }
            var fe = "undefined" != typeof WeakRef ? WeakRef : class {
                constructor(e) {
                    this.value = e
                }
                deref() {
                    return this.value
                }
            };

            function de() {
                return {
                    s: 0,
                    v: void 0,
                    o: null,
                    p: null
                }
            }

            function pe(e, t = {}) {
                let n = {
                    s: 0,
                    v: void 0,
                    o: null,
                    p: null
                };
                const {
                    resultEqualityCheck: r
                } = t;
                let o, i = 0;

                function c() {
                    let t = n;
                    const {
                        length: c
                    } = arguments;
                    for (let e = 0, n = c; e < n; e++) {
                        const n = arguments[e];
                        if ("function" == typeof n || "object" == typeof n && null !== n) {
                            let e = t.o;
                            null === e && (t.o = e = new WeakMap);
                            const r = e.get(n);
                            void 0 === r ? (t = de(), e.set(n, t)) : t = r
                        } else {
                            let e = t.p;
                            null === e && (t.p = e = new Map);
                            const r = e.get(n);
                            void 0 === r ? (t = de(), e.set(n, t)) : t = r
                        }
                    }
                    const a = t;
                    let s;
                    if (1 === t.s) s = t.v;
                    else if (s = e.apply(null, arguments), i++, r) {
                        const e = o ? .deref ? .() ? ? o;
                        null != e && r(e, s) && (s = e, 0 !== i && i--), o = "object" == typeof s && null !== s || "function" == typeof s ? new fe(s) : s
                    }
                    return a.s = 1, a.v = s, s
                }
                return c.clearCache = () => {
                    n = {
                        s: 0,
                        v: void 0,
                        o: null,
                        p: null
                    }, c.resetResultsCount()
                }, c.resultsCount = () => i, c.resetResultsCount = () => {
                    i = 0
                }, c
            }

            function ye(e, ...t) {
                const n = "function" == typeof e ? {
                        memoize: e,
                        memoizeOptions: t
                    } : e,
                    r = (...e) => {
                        let t, r = 0,
                            o = 0,
                            i = {},
                            c = e.pop();
                        "object" == typeof c && (i = c, c = e.pop()),
                            function(e, t = "expected a function, instead received " + typeof e) {
                                if ("function" != typeof e) throw new TypeError(t)
                            }(c, `createSelector expects an output function after the inputs, but received: [${typeof c}]`);
                        const a = { ...n,
                                ...i
                            },
                            {
                                memoize: s,
                                memoizeOptions: u = [],
                                argsMemoize: l = pe,
                                argsMemoizeOptions: f = [],
                                devModeChecks: d = {}
                            } = a,
                            p = se(u),
                            y = se(f),
                            h = function(e) {
                                const t = Array.isArray(e[0]) ? e[0] : e;
                                return function(e, t = "expected all items to be functions, instead received the following types: ") {
                                    if (!e.every(e => "function" == typeof e)) {
                                        const n = e.map(e => "function" == typeof e ? `function ${e.name||"unnamed"}()` : typeof e).join(", ");
                                        throw new TypeError(`${t}[${n}]`)
                                    }
                                }(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t
                            }(e),
                            m = s(function() {
                                return r++, c.apply(null, arguments)
                            }, ...p),
                            g = l(function() {
                                o++;
                                const e = function(e, t) {
                                    const n = [],
                                        {
                                            length: r
                                        } = e;
                                    for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
                                    return n
                                }(h, arguments);
                                return t = m.apply(null, e), t
                            }, ...y);
                        return Object.assign(g, {
                            resultFunc: c,
                            memoizedResultFunc: m,
                            dependencies: h,
                            dependencyRecomputations: () => o,
                            resetDependencyRecomputations: () => {
                                o = 0
                            },
                            lastResult: () => t,
                            recomputations: () => r,
                            resetRecomputations: () => {
                                r = 0
                            },
                            memoize: s,
                            argsMemoize: l
                        })
                    };
                return Object.assign(r, {
                    withTypes: () => r
                }), r
            }
            var he = ye(pe),
                me = Object.assign((e, t = he) => {
                    ! function(e, t = "expected an object, instead received " + typeof e) {
                        if ("object" != typeof e) throw new TypeError(t)
                    }(e, "createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
                    const n = Object.keys(e);
                    return t(n.map(t => e[t]), (...e) => e.reduce((e, t, r) => (e[n[r]] = t, e), {}))
                }, {
                    withTypes: () => me
                });

            function ge(e) {
                return ({
                    dispatch: t,
                    getState: n
                }) => r => o => "function" == typeof o ? o(t, n, e) : r(o)
            }
            var be = ge(),
                we = ge,
                _e = (...e) => {
                    const t = ye(...e),
                        n = Object.assign((...e) => {
                            const n = t(...e),
                                r = (e, ...t) => n(v(e) ? re(e) : e, ...t);
                            return Object.assign(r, n), r
                        }, {
                            withTypes: () => n
                        });
                    return n
                },
                ve = _e(pe),
                Oe = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                    if (0 !== arguments.length) return "object" == typeof arguments[0] ? p : p.apply(null, arguments)
                },
                Ee = ("undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__, e => e && "function" == typeof e.match);

            function Se(e, t) {
                function n(...n) {
                    if (t) {
                        let r = t(...n);
                        if (!r) throw new Error(pn(0));
                        return {
                            type: e,
                            payload: r.payload,
                            ..."meta" in r && {
                                meta: r.meta
                            },
                            ..."error" in r && {
                                error: r.error
                            }
                        }
                    }
                    return {
                        type: e,
                        payload: n[0]
                    }
                }
                return n.toString = () => `${e}`, n.type = e, n.match = t => h(t) && t.type === e, n
            }

            function je(e) {
                return "function" == typeof e && "type" in e && Ee(e)
            }

            function Ae(e) {
                return h(e) && Object.keys(e).every(Ce)
            }

            function Ce(e) {
                return ["type", "payload", "error", "meta"].indexOf(e) > -1
            }

            function Pe(e = {}) {
                return () => e => t => e(t)
            }
            var ke = class e extends Array {
                constructor(...t) {
                    super(...t), Object.setPrototypeOf(this, e.prototype)
                }
                static get[Symbol.species]() {
                    return e
                }
                concat(...e) {
                    return super.concat.apply(this, e)
                }
                prepend(...t) {
                    return 1 === t.length && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this))
                }
            };

            function Me(e) {
                return O(e) ? ce(e, () => {}) : e
            }

            function Te(e, t, n) {
                return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t)
            }

            function Re(e) {
                return "object" != typeof e || null == e || Object.isFrozen(e)
            }

            function xe(e = {}) {
                return () => e => t => e(t)
            }

            function ze(e) {
                const t = typeof e;
                return null == e || "string" === t || "boolean" === t || "number" === t || Array.isArray(e) || a(e)
            }

            function Ie(e, t = "", n = ze, r, o = [], i) {
                let c;
                if (!n(e)) return {
                    keyPath: t || "<root>",
                    value: e
                };
                if ("object" != typeof e || null === e) return !1;
                if (i ? .has(e)) return !1;
                const a = null != r ? r(e) : Object.entries(e),
                    s = o.length > 0;
                for (const [e, u] of a) {
                    const a = t ? t + "." + e : e;
                    if (!s || !o.some(e => e instanceof RegExp ? e.test(a) : a === e)) {
                        if (!n(u)) return {
                            keyPath: a,
                            value: u
                        };
                        if ("object" == typeof u && (c = Ie(u, a, n, r, o, i), c)) return c
                    }
                }
                return i && Ne(e) && i.add(e), !1
            }

            function Ne(e) {
                if (!Object.isFrozen(e)) return !1;
                for (const t of Object.values(e))
                    if ("object" == typeof t && null !== t && !Ne(t)) return !1;
                return !0
            }

            function De(e = {}) {
                return () => e => t => e(t)
            }
            var $e = "RTK_autoBatch",
                Fe = () => e => ({
                    payload: e,
                    meta: {
                        [$e]: !0
                    }
                }),
                Le = e => t => {
                    setTimeout(t, e)
                },
                We = (e = {
                    type: "raf"
                }) => t => (...n) => {
                    const r = t(...n);
                    let o = !0,
                        i = !1,
                        c = !1;
                    const a = new Set,
                        s = "tick" === e.type ? queueMicrotask : "raf" === e.type ? "undefined" != typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : Le(10) : "callback" === e.type ? e.queueNotification : Le(e.timeout),
                        u = () => {
                            c = !1, i && (i = !1, a.forEach(e => e()))
                        };
                    return Object.assign({}, r, {
                        subscribe(e) {
                            const t = r.subscribe(() => o && e());
                            return a.add(e), () => {
                                t(), a.delete(e)
                            }
                        },
                        dispatch(e) {
                            try {
                                return o = !e ? .meta ? .[$e], i = !o, i && (c || (c = !0, s(u))), r.dispatch(e)
                            } finally {
                                o = !0
                            }
                        }
                    })
                };

            function Be(e) {
                const t = function(e) {
                        const {
                            thunk: t = !0,
                            immutableCheck: n = !0,
                            serializableCheck: r = !0,
                            actionCreatorCheck: o = !0
                        } = e ? ? {};
                        let i = new ke;
                        return t && ("boolean" == typeof t ? i.push(be) : i.push(we(t.extraArgument))), i
                    },
                    {
                        reducer: n,
                        middleware: r,
                        devTools: o = !0,
                        duplicateMiddlewareCheck: i = !0,
                        preloadedState: c,
                        enhancers: u
                    } = e || {};
                let f, d;
                if ("function" == typeof n) f = n;
                else {
                    if (!a(n)) throw new Error(pn(1));
                    f = l(n)
                }
                d = "function" == typeof r ? r(t) : t();
                let h = p;
                o && (h = Oe({
                    trace: !1,
                    ..."object" == typeof o && o
                }));
                const m = (g = y(...d), function(e) {
                    const {
                        autoBatch: t = !0
                    } = e ? ? {};
                    let n = new ke(g);
                    return t && n.push(We("object" == typeof t ? t : void 0)), n
                });
                var g;
                return s(f, c, h(..."function" == typeof u ? u(m) : m()))
            }

            function qe(e) {
                const t = {},
                    n = [];
                let r;
                const o = {
                    addCase(e, n) {
                        const r = "string" == typeof e ? e : e.type;
                        if (!r) throw new Error(pn(28));
                        if (r in t) throw new Error(pn(29));
                        return t[r] = n, o
                    },
                    addMatcher: (e, t) => (n.push({
                        matcher: e,
                        reducer: t
                    }), o),
                    addDefaultCase: e => (r = e, o)
                };
                return e(o), [t, n, r]
            }

            function Ue(e, t) {
                let n, [r, o, i] = qe(t);
                if ("function" == typeof e) n = () => Me(e());
                else {
                    const t = Me(e);
                    n = () => t
                }

                function c(e = n(), t) {
                    let c = [r[t.type], ...o.filter(({
                        matcher: e
                    }) => e(t)).map(({
                        reducer: e
                    }) => e)];
                    return 0 === c.filter(e => !!e).length && (c = [i]), c.reduce((e, n) => {
                        if (n) {
                            if (v(e)) {
                                const r = n(e, t);
                                return void 0 === r ? e : r
                            }
                            if (O(e)) return ce(e, e => n(e, t)); {
                                const r = n(e, t);
                                if (void 0 === r) {
                                    if (null === e) return e;
                                    throw Error("A case reducer on a non-draftable value must not return undefined")
                                }
                                return r
                            }
                        }
                        return e
                    }, e)
                }
                return c.getInitialState = n, c
            }
            var Ve = (e, t) => Ee(e) ? e.match(t) : e(t);

            function Ke(...e) {
                return t => e.some(e => Ve(e, t))
            }

            function Xe(...e) {
                return t => e.every(e => Ve(e, t))
            }

            function Ge(e, t) {
                if (!e || !e.meta) return !1;
                const n = "string" == typeof e.meta.requestId,
                    r = t.indexOf(e.meta.requestStatus) > -1;
                return n && r
            }

            function He(e) {
                return "function" == typeof e[0] && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0]
            }

            function Je(...e) {
                return 0 === e.length ? e => Ge(e, ["pending"]) : He(e) ? Ke(...e.map(e => e.pending)) : Je()(e[0])
            }

            function Qe(...e) {
                return 0 === e.length ? e => Ge(e, ["rejected"]) : He(e) ? Ke(...e.map(e => e.rejected)) : Qe()(e[0])
            }

            function Ye(...e) {
                return 0 === e.length || He(e) ? Xe(Qe(...e), e => e && e.meta && e.meta.rejectedWithValue) : Ye()(e[0])
            }

            function Ze(...e) {
                return 0 === e.length ? e => Ge(e, ["fulfilled"]) : He(e) ? Ke(...e.map(e => e.fulfilled)) : Ze()(e[0])
            }

            function et(...e) {
                return 0 === e.length ? e => Ge(e, ["pending", "fulfilled", "rejected"]) : He(e) ? Ke(...e.flatMap(e => [e.pending, e.rejected, e.fulfilled])) : et()(e[0])
            }
            var tt = (e = 21) => {
                    let t = "",
                        n = e;
                    for (; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                    return t
                },
                nt = ["name", "message", "stack", "code"],
                rt = class {
                    constructor(e, t) {
                        this.payload = e, this.meta = t
                    }
                    _type
                },
                ot = class {
                    constructor(e, t) {
                        this.payload = e, this.meta = t
                    }
                    _type
                },
                it = e => {
                    if ("object" == typeof e && null !== e) {
                        const t = {};
                        for (const n of nt) "string" == typeof e[n] && (t[n] = e[n]);
                        return t
                    }
                    return {
                        message: String(e)
                    }
                },
                ct = "External signal was aborted",
                at = (() => {
                    function e(e, t, n) {
                        const r = Se(e + "/fulfilled", (e, t, n, r) => ({
                                payload: e,
                                meta: { ...r || {},
                                    arg: n,
                                    requestId: t,
                                    requestStatus: "fulfilled"
                                }
                            })),
                            o = Se(e + "/pending", (e, t, n) => ({
                                payload: void 0,
                                meta: { ...n || {},
                                    arg: t,
                                    requestId: e,
                                    requestStatus: "pending"
                                }
                            })),
                            i = Se(e + "/rejected", (e, t, r, o, i) => ({
                                payload: o,
                                error: (n && n.serializeError || it)(e || "Rejected"),
                                meta: { ...i || {},
                                    arg: r,
                                    requestId: t,
                                    rejectedWithValue: !!o,
                                    requestStatus: "rejected",
                                    aborted: "AbortError" === e ? .name,
                                    condition: "ConditionError" === e ? .name
                                }
                            }));
                        return Object.assign(function(e, {
                            signal: c
                        } = {}) {
                            return (a, s, u) => {
                                const l = n ? .idGenerator ? n.idGenerator(e) : tt(),
                                    f = new AbortController;
                                let d, p;

                                function y(e) {
                                    p = e, f.abort()
                                }
                                c && (c.aborted ? y(ct) : c.addEventListener("abort", () => y(ct), {
                                    once: !0
                                }));
                                const h = async function() {
                                    let c;
                                    try {
                                        let i = n ? .condition ? .(e, {
                                            getState: s,
                                            extra: u
                                        });
                                        if (null !== (h = i) && "object" == typeof h && "function" == typeof h.then && (i = await i), !1 === i || f.signal.aborted) throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                        const m = new Promise((e, t) => {
                                            d = () => {
                                                t({
                                                    name: "AbortError",
                                                    message: p || "Aborted"
                                                })
                                            }, f.signal.addEventListener("abort", d)
                                        });
                                        a(o(l, e, n ? .getPendingMeta ? .({
                                            requestId: l,
                                            arg: e
                                        }, {
                                            getState: s,
                                            extra: u
                                        }))), c = await Promise.race([m, Promise.resolve(t(e, {
                                            dispatch: a,
                                            getState: s,
                                            extra: u,
                                            requestId: l,
                                            signal: f.signal,
                                            abort: y,
                                            rejectWithValue: (e, t) => new rt(e, t),
                                            fulfillWithValue: (e, t) => new ot(e, t)
                                        })).then(t => {
                                            if (t instanceof rt) throw t;
                                            return t instanceof ot ? r(t.payload, l, e, t.meta) : r(t, l, e)
                                        })])
                                    } catch (t) {
                                        c = t instanceof rt ? i(null, l, e, t.payload, t.meta) : i(t, l, e)
                                    } finally {
                                        d && f.signal.removeEventListener("abort", d)
                                    }
                                    var h;
                                    return n && !n.dispatchConditionRejection && i.match(c) && c.meta.condition || a(c), c
                                }();
                                return Object.assign(h, {
                                    abort: y,
                                    requestId: l,
                                    arg: e,
                                    unwrap: () => h.then(st)
                                })
                            }
                        }, {
                            pending: o,
                            rejected: i,
                            fulfilled: r,
                            settled: Ke(i, r),
                            typePrefix: e
                        })
                    }
                    return e.withTypes = () => e, e
                })();

            function st(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload
            }
            var ut = Symbol.for("rtk-slice-createasyncthunk"),
                lt = {
                    [ut]: at
                },
                ft = (e => (e.reducer = "reducer", e.reducerWithPrepare = "reducerWithPrepare", e.asyncThunk = "asyncThunk", e))(ft || {});

            function dt(e, t) {
                return `${e}/${t}`
            }

            function pt({
                creators: e
            } = {}) {
                const t = e ? .asyncThunk ? .[ut];
                return function(e) {
                    const {
                        name: n,
                        reducerPath: r = n
                    } = e;
                    if (!n) throw new Error(pn(11));
                    const o = ("function" == typeof e.reducers ? e.reducers(function() {
                            function e(e, t) {
                                return {
                                    _reducerDefinitionType: "asyncThunk",
                                    payloadCreator: e,
                                    ...t
                                }
                            }
                            return e.withTypes = () => e, {
                                reducer: e => Object.assign({
                                    [e.name]: (...t) => e(...t)
                                }[e.name], {
                                    _reducerDefinitionType: "reducer"
                                }),
                                preparedReducer: (e, t) => ({
                                    _reducerDefinitionType: "reducerWithPrepare",
                                    prepare: e,
                                    reducer: t
                                }),
                                asyncThunk: e
                            }
                        }()) : e.reducers) || {},
                        i = Object.keys(o),
                        c = {
                            sliceCaseReducersByName: {},
                            sliceCaseReducersByType: {},
                            actionCreators: {},
                            sliceMatchers: []
                        },
                        a = {
                            addCase(e, t) {
                                const n = "string" == typeof e ? e : e.type;
                                if (!n) throw new Error(pn(12));
                                if (n in c.sliceCaseReducersByType) throw new Error(pn(13));
                                return c.sliceCaseReducersByType[n] = t, a
                            },
                            addMatcher: (e, t) => (c.sliceMatchers.push({
                                matcher: e,
                                reducer: t
                            }), a),
                            exposeAction: (e, t) => (c.actionCreators[e] = t, a),
                            exposeCaseReducer: (e, t) => (c.sliceCaseReducersByName[e] = t, a)
                        };

                    function s() {
                        const [t = {}, n = [], r] = "function" == typeof e.extraReducers ? qe(e.extraReducers) : [e.extraReducers], o = { ...t,
                            ...c.sliceCaseReducersByType
                        };
                        return Ue(e.initialState, e => {
                            for (let t in o) e.addCase(t, o[t]);
                            for (let t of c.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
                            for (let t of n) e.addMatcher(t.matcher, t.reducer);
                            r && e.addDefaultCase(r)
                        })
                    }
                    i.forEach(r => {
                        const i = o[r],
                            c = {
                                reducerName: r,
                                type: dt(n, r),
                                createNotation: "function" == typeof e.reducers
                            };
                        ! function(e) {
                            return "asyncThunk" === e._reducerDefinitionType
                        }(i) ? function({
                            type: e,
                            reducerName: t,
                            createNotation: n
                        }, r, o) {
                            let i, c;
                            if ("reducer" in r) {
                                if (n && ! function(e) {
                                        return "reducerWithPrepare" === e._reducerDefinitionType
                                    }(r)) throw new Error(pn(17));
                                i = r.reducer, c = r.prepare
                            } else i = r;
                            o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, c ? Se(e, c) : Se(e))
                        }(c, i, a) : function({
                            type: e,
                            reducerName: t
                        }, n, r, o) {
                            if (!o) throw new Error(pn(18));
                            const {
                                payloadCreator: i,
                                fulfilled: c,
                                pending: a,
                                rejected: s,
                                settled: u,
                                options: l
                            } = n, f = o(e, i, l);
                            r.exposeAction(t, f), c && r.addCase(f.fulfilled, c), a && r.addCase(f.pending, a), s && r.addCase(f.rejected, s), u && r.addMatcher(f.settled, u), r.exposeCaseReducer(t, {
                                fulfilled: c || mt,
                                pending: a || mt,
                                rejected: s || mt,
                                settled: u || mt
                            })
                        }(c, i, a, t)
                    });
                    const u = e => e,
                        l = new Map,
                        f = new WeakMap;
                    let d;

                    function p(e, t) {
                        return d || (d = s()), d(e, t)
                    }

                    function y() {
                        return d || (d = s()), d.getInitialState()
                    }

                    function h(t, n = !1) {
                        function r(e) {
                            let o = e[t];
                            return void 0 === o && n && (o = Te(f, r, y)), o
                        }

                        function o(t = u) {
                            const r = Te(l, n, () => new WeakMap);
                            return Te(r, t, () => {
                                const r = {};
                                for (const [o, i] of Object.entries(e.selectors ? ? {})) r[o] = yt(i, t, () => Te(f, t, y), n);
                                return r
                            })
                        }
                        return {
                            reducerPath: t,
                            getSelectors: o,
                            get selectors() {
                                return o(r)
                            },
                            selectSlice: r
                        }
                    }
                    const m = {
                        name: n,
                        reducer: p,
                        actions: c.actionCreators,
                        caseReducers: c.sliceCaseReducersByName,
                        getInitialState: y,
                        ...h(r),
                        injectInto(e, {
                            reducerPath: t,
                            ...n
                        } = {}) {
                            const o = t ? ? r;
                            return e.inject({
                                reducerPath: o,
                                reducer: p
                            }, n), { ...m,
                                ...h(o, !0)
                            }
                        }
                    };
                    return m
                }
            }

            function yt(e, t, n, r) {
                function o(o, ...i) {
                    let c = t(o);
                    return void 0 === c && r && (c = n()), e(c, ...i)
                }
                return o.unwrapped = e, o
            }
            var ht = pt();

            function mt() {}
            var gt = v;

            function bt(e) {
                const t = wt((t, n) => e(n));
                return function(e) {
                    return t(e, void 0)
                }
            }

            function wt(e) {
                return function(t, n) {
                    const r = t => {
                        Ae(n) ? e(n.payload, t) : e(n, t)
                    };
                    return gt(t) ? (r(t), t) : ce(t, r)
                }
            }

            function _t(e, t) {
                return t(e)
            }

            function vt(e) {
                return Array.isArray(e) || (e = Object.values(e)), e
            }

            function Ot(e) {
                return v(e) ? re(e) : e
            }

            function Et(e, t, n) {
                e = vt(e);
                const r = Ot(n.ids),
                    o = new Set(r),
                    i = [],
                    c = new Set([]),
                    a = [];
                for (const n of e) {
                    const e = _t(n, t);
                    o.has(e) || c.has(e) ? a.push({
                        id: e,
                        changes: n
                    }) : (c.add(e), i.push(n))
                }
                return [i, a, r]
            }

            function St(e) {
                function t(t, n) {
                    const r = _t(t, e);
                    r in n.entities || (n.ids.push(r), n.entities[r] = t)
                }

                function n(e, n) {
                    e = vt(e);
                    for (const r of e) t(r, n)
                }

                function r(t, n) {
                    const r = _t(t, e);
                    r in n.entities || n.ids.push(r), n.entities[r] = t
                }

                function o(e, t) {
                    let n = !1;
                    e.forEach(e => {
                        e in t.entities && (delete t.entities[e], n = !0)
                    }), n && (t.ids = t.ids.filter(e => e in t.entities))
                }

                function i(t, n) {
                    const r = {},
                        o = {};
                    if (t.forEach(e => {
                            e.id in n.entities && (o[e.id] = {
                                id: e.id,
                                changes: { ...o[e.id] ? .changes,
                                    ...e.changes
                                }
                            })
                        }), (t = Object.values(o)).length > 0) {
                        const o = t.filter(t => function(t, n, r) {
                            const o = r.entities[n.id];
                            if (void 0 === o) return !1;
                            const i = Object.assign({}, o, n.changes),
                                c = _t(i, e),
                                a = c !== n.id;
                            return a && (t[n.id] = c, delete r.entities[n.id]), r.entities[c] = i, a
                        }(r, t, n)).length > 0;
                        o && (n.ids = Object.values(n.entities).map(t => _t(t, e)))
                    }
                }

                function c(t, r) {
                    const [o, c] = Et(t, e, r);
                    n(o, r), i(c, r)
                }
                return {
                    removeAll: bt(function(e) {
                        Object.assign(e, {
                            ids: [],
                            entities: {}
                        })
                    }),
                    addOne: wt(t),
                    addMany: wt(n),
                    setOne: wt(r),
                    setMany: wt(function(e, t) {
                        e = vt(e);
                        for (const n of e) r(n, t)
                    }),
                    setAll: wt(function(e, t) {
                        e = vt(e), t.ids = [], t.entities = {}, n(e, t)
                    }),
                    updateOne: wt(function(e, t) {
                        return i([e], t)
                    }),
                    updateMany: wt(i),
                    upsertOne: wt(function(e, t) {
                        return c([e], t)
                    }),
                    upsertMany: wt(c),
                    removeOne: wt(function(e, t) {
                        return o([e], t)
                    }),
                    removeMany: wt(o)
                }
            }

            function jt(e, t, n) {
                const r = function(e, t, n) {
                    let r = 0,
                        o = e.length;
                    for (; r < o;) {
                        let i = r + o >>> 1;
                        n(t, e[i]) >= 0 ? r = i + 1 : o = i
                    }
                    return r
                }(e, t, n);
                return e.splice(r, 0, t), e
            }

            function At(e = {}) {
                const {
                    selectId: t,
                    sortComparer: n
                } = {
                    sortComparer: !1,
                    selectId: e => e.id,
                    ...e
                }, r = n ? function(e, t) {
                    const {
                        removeOne: n,
                        removeMany: r,
                        removeAll: o
                    } = St(e);

                    function i(t, n, r) {
                        t = vt(t);
                        const o = new Set(r ? ? Ot(n.ids)),
                            i = t.filter(t => !o.has(_t(t, e)));
                        0 !== i.length && u(n, i)
                    }

                    function c(t, n) {
                        if (0 !== (t = vt(t)).length) {
                            for (const r of t) delete n.entities[e(r)];
                            u(n, t)
                        }
                    }

                    function a(t, n) {
                        let r = !1,
                            o = !1;
                        for (let i of t) {
                            const t = n.entities[i.id];
                            if (!t) continue;
                            r = !0, Object.assign(t, i.changes);
                            const c = e(t);
                            if (i.id !== c) {
                                o = !0, delete n.entities[i.id];
                                const e = n.ids.indexOf(i.id);
                                n.ids[e] = c, n.entities[c] = t
                            }
                        }
                        r && u(n, [], r, o)
                    }

                    function s(t, n) {
                        const [r, o, c] = Et(t, e, n);
                        r.length && i(r, n, c), o.length && a(o, n)
                    }
                    const u = (n, r, o, i) => {
                        const c = Ot(n.entities),
                            a = Ot(n.ids),
                            s = n.entities;
                        let u = a;
                        i && (u = new Set(a));
                        let l = [];
                        for (const e of u) {
                            const t = c[e];
                            t && l.push(t)
                        }
                        const f = 0 === l.length;
                        for (const n of r) s[e(n)] = n, f || jt(l, n, t);
                        f ? l = r.slice().sort(t) : o && l.sort(t);
                        const d = l.map(e);
                        (function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        })(a, d) || (n.ids = d)
                    };
                    return {
                        removeOne: n,
                        removeMany: r,
                        removeAll: o,
                        addOne: wt(function(e, t) {
                            return i([e], t)
                        }),
                        updateOne: wt(function(e, t) {
                            return a([e], t)
                        }),
                        upsertOne: wt(function(e, t) {
                            return s([e], t)
                        }),
                        setOne: wt(function(e, t) {
                            return c([e], t)
                        }),
                        setMany: wt(c),
                        setAll: wt(function(e, t) {
                            e = vt(e), t.entities = {}, t.ids = [], i(e, t, [])
                        }),
                        addMany: wt(i),
                        updateMany: wt(a),
                        upsertMany: wt(s)
                    }
                }(t, n) : St(t), o = function(e) {
                    return {
                        getInitialState: function(t = {}, n) {
                            const r = Object.assign({
                                ids: [],
                                entities: {}
                            }, t);
                            return n ? e.setAll(r, n) : r
                        }
                    }
                }(r), i = {
                    getSelectors: function(e, t = {}) {
                        const {
                            createSelector: n = ve
                        } = t, r = e => e.ids, o = e => e.entities, i = n(r, o, (e, t) => e.map(e => t[e])), c = (e, t) => t, a = (e, t) => e[t], s = n(r, e => e.length);
                        if (!e) return {
                            selectIds: r,
                            selectEntities: o,
                            selectAll: i,
                            selectTotal: s,
                            selectById: n(o, c, a)
                        };
                        const u = n(e, o);
                        return {
                            selectIds: n(e, r),
                            selectEntities: u,
                            selectAll: n(e, i),
                            selectTotal: n(e, s),
                            selectById: n(u, c, a)
                        }
                    }
                };
                return {
                    selectId: t,
                    sortComparer: n,
                    ...o,
                    ...i,
                    ...r
                }
            }
            var Ct = "listener",
                Pt = "completed",
                kt = "cancelled",
                Mt = `task-${kt}`,
                Tt = `task-${Pt}`,
                Rt = `${Ct}-${kt}`,
                xt = `${Ct}-${Pt}`,
                zt = class {
                    constructor(e) {
                        this.code = e, this.message = `task ${kt} (reason: ${e})`
                    }
                    name = "TaskAbortError";
                    message
                },
                It = (e, t) => {
                    if ("function" != typeof e) throw new TypeError(pn(32))
                },
                Nt = () => {},
                Dt = (e, t = Nt) => (e.catch(t), e),
                $t = (e, t) => (e.addEventListener("abort", t, {
                    once: !0
                }), () => e.removeEventListener("abort", t)),
                Ft = (e, t) => {
                    const n = e.signal;
                    n.aborted || ("reason" in n || Object.defineProperty(n, "reason", {
                        enumerable: !0,
                        value: t,
                        configurable: !0,
                        writable: !0
                    }), e.abort(t))
                },
                Lt = e => {
                    if (e.aborted) {
                        const {
                            reason: t
                        } = e;
                        throw new zt(t)
                    }
                };

            function Wt(e, t) {
                let n = Nt;
                return new Promise((r, o) => {
                    const i = () => o(new zt(e.reason));
                    e.aborted ? i() : (n = $t(e, i), t.finally(() => n()).then(r, o))
                }).finally(() => {
                    n = Nt
                })
            }
            var Bt = e => t => Dt(Wt(e, t).then(t => (Lt(e), t))),
                qt = e => {
                    const t = Bt(e);
                    return e => t(new Promise(t => setTimeout(t, e)))
                },
                {
                    assign: Ut
                } = Object,
                Vt = {},
                Kt = "listenerMiddleware",
                Xt = (e, t) => (n, r) => {
                    It(n);
                    const o = new AbortController;
                    var i;
                    i = o, $t(e, () => Ft(i, e.reason));
                    const c = (async () => {
                        try {
                            return await Promise.resolve(), {
                                status: "ok",
                                value: await (async () => {
                                    Lt(e), Lt(o.signal);
                                    const t = await n({
                                        pause: Bt(o.signal),
                                        delay: qt(o.signal),
                                        signal: o.signal
                                    });
                                    return Lt(o.signal), t
                                })()
                            }
                        } catch (e) {
                            return {
                                status: e instanceof zt ? "cancelled" : "rejected",
                                error: e
                            }
                        } finally {
                            Ft(o, Tt)
                        }
                    })();
                    return r ? .autoJoin && t.push(c.catch(Nt)), {
                        result: Bt(e)(c),
                        cancel() {
                            Ft(o, Mt)
                        }
                    }
                },
                Gt = e => {
                    let {
                        type: t,
                        actionCreator: n,
                        matcher: r,
                        predicate: o,
                        effect: i
                    } = e;
                    if (t) o = Se(t).match;
                    else if (n) t = n.type, o = n.match;
                    else if (r) o = r;
                    else if (!o) throw new Error(pn(21));
                    return It(i), {
                        predicate: o,
                        type: t,
                        effect: i
                    }
                },
                Ht = Ut(e => {
                    const {
                        type: t,
                        predicate: n,
                        effect: r
                    } = Gt(e);
                    return {
                        id: tt(),
                        effect: r,
                        type: t,
                        predicate: n,
                        pending: new Set,
                        unsubscribe: () => {
                            throw new Error(pn(22))
                        }
                    }
                }, {
                    withTypes: () => Ht
                }),
                Jt = (e, t) => {
                    const {
                        type: n,
                        effect: r,
                        predicate: o
                    } = Gt(t);
                    return Array.from(e.values()).find(e => ("string" == typeof n ? e.type === n : e.predicate === o) && e.effect === r)
                },
                Qt = e => {
                    e.pending.forEach(e => {
                        Ft(e, Rt)
                    })
                },
                Yt = (e, t, n) => {
                    try {
                        e(t, n)
                    } catch (e) {
                        setTimeout(() => {
                            throw e
                        }, 0)
                    }
                },
                Zt = Ut(Se(`${Kt}/add`), {
                    withTypes: () => Zt
                }),
                en = Se(`${Kt}/removeAll`),
                tn = Ut(Se(`${Kt}/remove`), {
                    withTypes: () => tn
                }),
                nn = (...e) => {
                    console.error(`${Kt}/error`, ...e)
                },
                rn = (e = {}) => {
                    const t = new Map,
                        {
                            extra: n,
                            onError: r = nn
                        } = e;
                    It(r);
                    const o = e => {
                        return (n = Jt(t, e) ? ? Ht(e)).unsubscribe = () => t.delete(n.id), t.set(n.id, n), e => {
                            n.unsubscribe(), e ? .cancelActive && Qt(n)
                        };
                        var n
                    };
                    Ut(o, {
                        withTypes: () => o
                    });
                    const i = e => {
                        const n = Jt(t, e);
                        return n && (n.unsubscribe(), e.cancelActive && Qt(n)), !!n
                    };
                    Ut(i, {
                        withTypes: () => i
                    });
                    const c = async (e, i, c, a) => {
                            const s = new AbortController,
                                u = ((e, t) => (n, r) => Dt((async (n, r) => {
                                    Lt(t);
                                    let o = () => {};
                                    const i = [new Promise((t, r) => {
                                        let i = e({
                                            predicate: n,
                                            effect: (e, n) => {
                                                n.unsubscribe(), t([e, n.getState(), n.getOriginalState()])
                                            }
                                        });
                                        o = () => {
                                            i(), r()
                                        }
                                    })];
                                    null != r && i.push(new Promise(e => setTimeout(e, r, null)));
                                    try {
                                        const e = await Wt(t, Promise.race(i));
                                        return Lt(t), e
                                    } finally {
                                        o()
                                    }
                                })(n, r)))(o, s.signal),
                                l = [];
                            try {
                                e.pending.add(s), await Promise.resolve(e.effect(i, Ut({}, c, {
                                    getOriginalState: a,
                                    condition: (e, t) => u(e, t).then(Boolean),
                                    take: u,
                                    delay: qt(s.signal),
                                    pause: Bt(s.signal),
                                    extra: n,
                                    signal: s.signal,
                                    fork: Xt(s.signal, l),
                                    unsubscribe: e.unsubscribe,
                                    subscribe: () => {
                                        t.set(e.id, e)
                                    },
                                    cancelActiveListeners: () => {
                                        e.pending.forEach((e, t, n) => {
                                            e !== s && (Ft(e, Rt), n.delete(e))
                                        })
                                    },
                                    cancel: () => {
                                        Ft(s, Rt), e.pending.delete(s)
                                    },
                                    throwIfCancelled: () => {
                                        Lt(s.signal)
                                    }
                                })))
                            } catch (e) {
                                e instanceof zt || Yt(r, e, {
                                    raisedBy: "effect"
                                })
                            } finally {
                                await Promise.all(l), Ft(s, xt), e.pending.delete(s)
                            }
                        },
                        a = (e => () => {
                            e.forEach(Qt), e.clear()
                        })(t);
                    return {
                        middleware: e => n => s => {
                            if (!h(s)) return n(s);
                            if (Zt.match(s)) return o(s.payload);
                            if (en.match(s)) return void a();
                            if (tn.match(s)) return i(s.payload);
                            let u = e.getState();
                            const l = () => {
                                if (u === Vt) throw new Error(pn(23));
                                return u
                            };
                            let f;
                            try {
                                if (f = n(s), t.size > 0) {
                                    const n = e.getState(),
                                        o = Array.from(t.values());
                                    for (const t of o) {
                                        let o = !1;
                                        try {
                                            o = t.predicate(s, n, u)
                                        } catch (e) {
                                            o = !1, Yt(r, e, {
                                                raisedBy: "predicate"
                                            })
                                        }
                                        o && c(t, s, e, l)
                                    }
                                }
                            } finally {
                                u = Vt
                            }
                            return f
                        },
                        startListening: o,
                        stopListening: i,
                        clearListeners: a
                    }
                },
                on = e => ({
                    middleware: e,
                    applied: new Map
                }),
                cn = () => {
                    const e = tt(),
                        t = new Map,
                        n = Object.assign(Se("dynamicMiddleware/add", (...t) => ({
                            payload: t,
                            meta: {
                                instanceId: e
                            }
                        })), {
                            withTypes: () => n
                        }),
                        r = Object.assign(function(...e) {
                            e.forEach(e => {
                                Te(t, e, on)
                            })
                        }, {
                            withTypes: () => r
                        }),
                        o = Xe(n, (e => t => t ? .meta ? .instanceId === e)(e));
                    return {
                        middleware: e => n => i => o(i) ? (r(...i.payload), e.dispatch) : (e => p(...Array.from(t.values()).map(t => Te(t.applied, e, t.middleware))))(e)(n)(i),
                        addMiddleware: r,
                        withMiddleware: n,
                        instanceId: e
                    }
                },
                an = Symbol.for("rtk-state-proxy-original"),
                sn = new WeakMap,
                un = e => {
                    if (!(t = e) || !t[an]) throw new Error(pn(25));
                    var t;
                    return e[an]
                },
                ln = {},
                fn = (e = ln) => e;

            function dn(...e) {
                const t = Object.fromEntries((e => e.flatMap(e => {
                        return "reducerPath" in (t = e) && "string" == typeof t.reducerPath ? [
                            [e.reducerPath, e.reducer]
                        ] : Object.entries(e);
                        var t
                    }))(e)),
                    n = () => Object.keys(t).length ? l(t) : fn;
                let r = n();

                function o(e, t) {
                    return r(e, t)
                }
                o.withLazyLoadedSlices = () => o;
                const i = {},
                    c = Object.assign(function(e, n) {
                        return function(r, ...o) {
                            return e(((e, t, n) => Te(sn, e, () => new Proxy(e, {
                                get: (e, r, o) => {
                                    if (r === an) return e;
                                    const i = Reflect.get(e, r, o);
                                    if (void 0 === i) {
                                        const e = n[r];
                                        if (void 0 !== e) return e;
                                        const o = t[r];
                                        if (o) {
                                            const e = o(void 0, {
                                                type: tt()
                                            });
                                            if (void 0 === e) throw new Error(pn(24));
                                            return n[r] = e, e
                                        }
                                    }
                                    return i
                                }
                            })))(n ? n(r, ...o) : r, t, i), ...o)
                        }
                    }, {
                        original: un
                    });
                return Object.assign(o, {
                    inject: (e, c = {}) => {
                        const {
                            reducerPath: a,
                            reducer: s
                        } = e, u = t[a];
                        return !c.overrideExisting && u && u !== s || (c.overrideExisting && u !== s && delete i[a], t[a] = s, r = n()), o
                    },
                    selector: c
                })
            }

            function pn(e) {
                return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
            }
        }
    }
]);