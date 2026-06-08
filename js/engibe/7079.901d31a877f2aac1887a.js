(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [7079], {
        7079(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: () => b
            });
            var n = t(8283),
                o = t(5556),
                i = t.n(o);

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function u(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s(n.key), n)
                }
            }

            function a(e, r, t) {
                return r = f(r),
                    function(e, r) {
                        if (r && ("object" === c(r) || "function" == typeof r)) return r;
                        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, l() ? Reflect.construct(r, t || [], f(e).constructor) : r.apply(e, t))
            }

            function l() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                } catch (e) {}
                return (l = function() {
                    return !!e
                })()
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function p(e, r) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
                    return e.__proto__ = r, e
                }, p(e, r)
            }

            function s(e) {
                var r = function(e) {
                    if ("object" != c(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var t = r.call(e, "string");
                        if ("object" != c(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" == c(r) ? r : r + ""
            }
            var y = function(e) {
                    console.error("Error Boundary catches this error: ", e)
                },
                d = function(e) {
                    function r(e) {
                        var t, n, o, i, c;
                        return function(e, r) {
                            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), n = t = a(this, r, [e]), i = function(e) {
                            y(e)
                        }, (o = s(o = "errorHandler")) in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i, e.dynamicMiddleware && e.dynamicMiddleware.addMiddleware((c = t.errorHandler, function() {
                            return function(e) {
                                return function(r) {
                                    try {
                                        e(r)
                                    } catch (e) {
                                        c(e)
                                    }
                                }
                            }
                        })), window.addEventListener("error", t.errorHandler), window.addEventListener("unhandledrejection", t.errorHandler), t
                    }
                    return function(e, r) {
                        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(r && r.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), r && p(e, r)
                    }(r, e), t = r, (n = [{
                        key: "componentDidCatch",
                        value: function(e) {
                            y(e)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("error", this.errorHandler), window.removeEventListener("unhandledrejection", this.errorHandler)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children
                        }
                    }]) && u(t.prototype, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, n
                }(n.Component);
            d.defaultProps = {
                dynamicMiddleware: null
            }, d.propTypes = {
                dynamicMiddleware: i().object,
                children: i().element.isRequired
            };
            const b = d
        },
        2694(e, r, t) {
            "use strict";
            var n = t(6925);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, r, t, o, i, c) {
                    if (c !== n) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function r() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: r,
                    element: e,
                    elementType: e,
                    instanceOf: r,
                    node: e,
                    objectOf: r,
                    oneOf: r,
                    oneOfType: r,
                    shape: r,
                    exact: r,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        5556(e, r, t) {
            e.exports = t(2694)()
        },
        6925(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    }
]);