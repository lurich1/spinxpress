/*! For license information please see 4848.1e8ac566442721821024.js.LICENSE.txt */
"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2467, 4848], {
        1020(e, r, o) {
            var t = o(8283),
                n = Symbol.for("react.element"),
                f = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function _(e, r, o) {
                var t, f = {},
                    _ = null,
                    u = null;
                for (t in void 0 !== o && (_ = "" + o), void 0 !== r.key && (_ = "" + r.key), void 0 !== r.ref && (u = r.ref), r) a.call(r, t) && !s.hasOwnProperty(t) && (f[t] = r[t]);
                if (e && e.defaultProps)
                    for (t in r = e.defaultProps) void 0 === f[t] && (f[t] = r[t]);
                return {
                    $$typeof: n,
                    type: e,
                    key: _,
                    ref: u,
                    props: f,
                    _owner: l.current
                }
            }
            r.Fragment = f, r.jsx = _, r.jsxs = _
        },
        4848(e, r, o) {
            e.exports = o(1020)
        }
    }
]);