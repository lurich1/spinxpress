/*! For license information please see 7439.a9c0d8231e0761b0b4fb.js.LICENSE.txt */
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [7439], {
        1352(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => l
            });
            var r = n(8283),
                o = n(5556),
                a = n.n(o),
                i = n(6337),
                s = n(4848);

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = function(t) {
                var e = t.setIsCssVariablesLoaded,
                    o = t.children;
                return (0, r.useEffect)(function() {
                    i.skinningName && i.gameKindName ? n(2208)("./".concat(i.gameKindName.toLowerCase(), "/").concat(i.skinningName, ".json")).then(function(t) {
                        var e = document.querySelector(":root");
                        Object.entries(t).forEach(function(t) {
                            var n, r, o = (r = 2, function(t) {
                                    if (Array.isArray(t)) return t
                                }(n = t) || function(t, e) {
                                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != n) {
                                        var r, o, a, i, s = [],
                                            c = !0,
                                            u = !1;
                                        try {
                                            if (a = (n = n.call(t)).next, 0 === e) {
                                                if (Object(n) !== n) return;
                                                c = !1
                                            } else
                                                for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                                        } catch (t) {
                                            u = !0, o = t
                                        } finally {
                                            try {
                                                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return
                                            } finally {
                                                if (u) throw o
                                            }
                                        }
                                        return s
                                    }
                                }(n, r) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return c(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                                    }
                                }(n, r) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                a = o[0],
                                i = o[1];
                            e.style.setProperty(a, i)
                        })
                    }).catch(function(t) {
                        return console.log("skinningName:", t)
                    }).finally(function() {
                        return e(!0)
                    }) : e(!0)
                }, []), (0, s.jsx)("div", {
                    style: {
                        height: "100%",
                        width: "100%"
                    },
                    children: o
                })
            };
            u.propTypes = {
                children: a().object.isRequired,
                setIsCssVariablesLoaded: a().func.isRequired
            };
            const l = (0, r.memo)(u)
        },
        2908(t, e, n) {
            "use strict";
            n.d(e, {
                x: () => s
            });
            var r = n(6337),
                o = {},
                a = {},
                i = {
                    yandexMetrica: function() {
                        ! function(t, e, n, r, o, a, i) {
                            t[o] = t[o] || function() {
                                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                (t[o].a = t[o].a || []).push(n)
                            }, t[o].l = 1 * new Date;
                            for (var s = 0; s < document.scripts.length; s++)
                                if (document.scripts[s].src === r) return;
                            a = e.createElement(n), i = e.getElementsByTagName(n)[0], a.async = 1, a.src = r, i.parentNode.insertBefore(a, i)
                        }(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"), window.ym(92574052, "init", {
                            clickmap: !0,
                            trackLinks: !0,
                            accurateTrackBounce: !0,
                            webvisor: !0
                        })
                    },
                    googleTagManager: function() {
                        ! function(t, e, n, r) {
                            t[r] = t[r] || [], t[r].push({
                                "gtm.start": (new Date).getTime(),
                                event: "gtm.js"
                            });
                            var o = e.getElementsByTagName(n)[0],
                                a = e.createElement(n);
                            a.async = !0, a.src = "https://www.googletagmanager.com/gtm.js?id=".concat("GTM-PTCTMK86").concat(""), o.parentNode.insertBefore(a, o)
                        }(window, document, "script", "dataLayer")
                    }
                },
                s = function() {
                    if (!a[null === r.gameKindName || void 0 === r.gameKindName ? void 0 : r.gameKindName.toLowerCase()]) {
                        var t, e = Object.keys(o[null === r.gameKindName || void 0 === r.gameKindName ? void 0 : r.gameKindName.toLowerCase()] || {});
                        e.length ? e.forEach(function(t) {
                            var e;
                            o[null === r.gameKindName || void 0 === r.gameKindName ? void 0 : r.gameKindName.toLowerCase()][t] && (null === (e = i[t]) || void 0 === e || e.call(i))
                        }) : null === (t = i.googleTagManager) || void 0 === t || t.call(i)
                    }
                }
        },
        2593(t, e, n) {
            "use strict";
            n.d(e, {
                W: () => a
            });
            var r = n(1620),
                o = n(8718),
                a = function() {
                    (0, r.requestFeaturesToServer)({
                        name: o.O.BonusHistory
                    })
                }
        },
        5206(t, e, n) {
            "use strict";
            n.d(e, {
                H: () => d
            });
            var r = n(1703),
                o = n.n(r),
                a = n(6337);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function s() {
                s = function() {
                    return e
                };
                var t, e = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, n) {
                        t[e] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    c = a.iterator || "@@iterator",
                    u = a.asyncIterator || "@@asyncIterator",
                    l = a.toStringTag || "@@toStringTag";

                function f(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function p(t, e, n, r) {
                    var a = e && e.prototype instanceof g ? e : g,
                        i = Object.create(a.prototype),
                        s = new k(r || []);
                    return o(i, "_invoke", {
                        value: N(t, n, s)
                    }), i
                }

                function d(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = p;
                var m = "suspendedStart",
                    h = "suspendedYield",
                    y = "executing",
                    v = "completed",
                    b = {};

                function g() {}

                function j() {}

                function w() {}
                var E = {};
                f(E, c, function() {
                    return this
                });
                var P = Object.getPrototypeOf,
                    S = P && P(P(x([])));
                S && S !== n && r.call(S, c) && (E = S);
                var O = w.prototype = g.prototype = Object.create(E);

                function _(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        f(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function A(t, e) {
                    function n(o, a, s, c) {
                        var u = d(t[o], t, a);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                f = l.value;
                            return f && "object" == i(f) && r.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                n("next", t, s, c)
                            }, function(t) {
                                n("throw", t, s, c)
                            }) : e.resolve(f).then(function(t) {
                                l.value = t, s(l)
                            }, function(t) {
                                return n("throw", t, s, c)
                            })
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(t, r) {
                            function o() {
                                return new e(function(e, o) {
                                    n(t, r, e, o)
                                })
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function N(e, n, r) {
                    var o = m;
                    return function(a, i) {
                        if (o === y) throw Error("Generator is already running");
                        if (o === v) {
                            if ("throw" === a) throw i;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var s = r.delegate;
                            if (s) {
                                var c = L(s, r);
                                if (c) {
                                    if (c === b) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === m) throw o = v, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = y;
                            var u = d(e, n, r);
                            if ("normal" === u.type) {
                                if (o = r.done ? v : h, u.arg === b) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (o = v, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function L(e, n) {
                    var r = n.method,
                        o = e.iterator[r];
                    if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, L(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
                    var a = d(o, e.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, b;
                    var i = a.arg;
                    return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, b) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                }

                function M(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function C(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(M, this), this.reset(!0)
                }

                function x(e) {
                    if (e || "" === e) {
                        var n = e[c];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(i(e) + " is not iterable")
                }
                return j.prototype = w, o(O, "constructor", {
                    value: w,
                    configurable: !0
                }), o(w, "constructor", {
                    value: j,
                    configurable: !0
                }), j.displayName = f(w, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === j || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, f(t, l, "GeneratorFunction")), t.prototype = Object.create(O), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, _(A.prototype), f(A.prototype, u, function() {
                    return this
                }), e.AsyncIterator = A, e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new A(p(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next()
                    })
                }, _(O), f(O, l, "Generator"), f(O, c, function() {
                    return this
                }), f(O, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(t) {
                    var e = Object(t),
                        n = [];
                    for (var r in e) n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = x, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(C), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function o(r, o) {
                            return s.type = "throw", s.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                s = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var c = r.call(i, "catchLoc"),
                                    u = r.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, b) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), b
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), b
                    }
                }, e
            }

            function c(t, e, n, r, o, a, i) {
                try {
                    var s = t[a](i),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t) {
                var e = {};
                return t.forEach(function(t) {
                    var n = t.key,
                        r = t.value;
                    e[n] = r
                }), e
            }
            var f = function(t, e) {
                    window.indexedDB.open("store_".concat(a.partnerId, "_").concat(a.culture, "_").concat(a.gameKindName)).onsuccess = function(n) {
                        var r = n.target.result;
                        r.objectStoreNames.contains("translations") ? r.transaction("translations", "readwrite").objectStore("translations").getAll().onsuccess = function(n) {
                            var r;
                            null != n && null !== (r = n.target) && void 0 !== r && null !== (r = r.result) && void 0 !== r && r.length ? t(l(n.target.result)) : (o().removeItem("translationVersion_".concat(a.culture)), d(e, t))
                        } : d(1, t)
                    }
                },
                p = function(t, e, n, r) {
                    if (n.objectStoreNames.contains("translations")) {
                        var o = n.transaction("translations", "readwrite"),
                            a = o.objectStore("translations");
                        Object.entries(JSON.parse(r.translation)).forEach(function(t) {
                            var e, n, r = (n = 2, function(t) {
                                    if (Array.isArray(t)) return t
                                }(e = t) || function(t, e) {
                                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                    if (null != n) {
                                        var r, o, a, i, s = [],
                                            c = !0,
                                            u = !1;
                                        try {
                                            if (a = (n = n.call(t)).next, 0 === e) {
                                                if (Object(n) !== n) return;
                                                c = !1
                                            } else
                                                for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                                        } catch (t) {
                                            u = !0, o = t
                                        } finally {
                                            try {
                                                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return
                                            } finally {
                                                if (u) throw o
                                            }
                                        }
                                        return s
                                    }
                                }(e, n) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return u(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                                    }
                                }(e, n) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                o = {
                                    key: r[0],
                                    value: r[1]
                                },
                                i = a.add(o);
                            i.onsuccess = function() {}, i.onerror = function() {
                                console.log("Store Error: ", i.error)
                            }
                        });
                        var i = a.getAll();
                        i.onsuccess = function(e) {
                            t(l(e.target.result))
                        }, i.onerror = function() {}, o.oncomplete = function() {
                            console.log("Transaction is complete")
                        }, o.onerror = function() {}
                    }
                },
                d = function() {
                    var t, e = (t = s().mark(function t(e, n) {
                        var r, i, c, u;
                        return s().wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, 10 * e === Number(o().getItem("translationVersion_".concat(a.culture)))) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 4, (0, a.fetchTranslations)();
                                case 4:
                                    if ((i = t.sent) && "" !== (null == i ? void 0 : i.translation) && "[]" !== (null == i ? void 0 : i.translation) && null != i && null !== (r = i.translation) && void 0 !== r && r.length) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", Promise.reject());
                                case 7:
                                    c = 10 * e, o().setItem("translationVersion_".concat(a.culture), c), (u = window.indexedDB.open("store_".concat(a.partnerId, "_").concat(a.culture, "_").concat(a.gameKindName), c)).onsuccess = function(t) {
                                        var e;
                                        if ((null == t || null === (e = t.target) || void 0 === e || null === (e = e.result) || void 0 === e ? void 0 : e.version) === c) {
                                            var r = t.target.result;
                                            if (r.objectStoreNames.contains("translations")) {
                                                var o = r.transaction("translations", "readonly").objectStore("translations").getAll();
                                                o.onsuccess = function(t) {
                                                    t.target.result.length ? n(l(t.target.result)) : p(n, 0, r, i)
                                                }, o.onerror = function(t) {
                                                    console.log(t)
                                                }
                                            }
                                        }
                                    }, u.onerror = function(t) {
                                        console.log("Open DB with version error:", t), f(n)
                                    }, u.onupgradeneeded = function(t) {
                                        if (console.log("Upgraded Store version: (".concat(t.oldVersion, " => ").concat(t.newVersion, ")")), t.oldVersion !== t.newVersion) {
                                            var e = u.result;
                                            e.objectStoreNames.contains("translations") && (console.log("Translation deleted from DB!"), e.deleteObjectStore("translations"));
                                            var r = e.createObjectStore("translations", {
                                                keyPath: "key"
                                            });
                                            r.createIndex("key", "key", {
                                                unique: !0
                                            }), r.transaction.oncomplete = function() {
                                                p(n, t.newVersion, e, i)
                                            }
                                        }
                                    }, t.next = 16;
                                    break;
                                case 15:
                                    f(n, e);
                                case 16:
                                    t.next = 22;
                                    break;
                                case 18:
                                    t.prev = 18, t.t0 = t.catch(0), setTimeout(function() {
                                        f(n, e)
                                    }, 2e3), console.log(t.t0);
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [0, 18]
                        ])
                    }), function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var a = t.apply(e, n);

                            function i(t) {
                                c(a, r, o, i, s, "next", t)
                            }

                            function s(t) {
                                c(a, r, o, i, s, "throw", t)
                            }
                            i(void 0)
                        })
                    });
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        5772(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => d
            });
            var r = n(5556),
                o = n.n(r),
                a = n(8715),
                i = n(8283),
                s = n(2182),
                c = n(8437),
                u = n(8517),
                l = n(4848),
                f = (0, i.lazy)(function() {
                    return (0, a.G)({
                        url: u.REMOTE_CLIENT_URLS.jackpot,
                        bustRemoteEntryCache: !1,
                        scope: "jackpot",
                        module: "Jackpot"
                    })
                });

            function p(t) {
                var e = t.styles,
                    n = t.selectShowOutsidePopups;
                return (0, s.shallowSelector)(c.o) && (0, l.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, l.jsx)(f, {
                        style: e.jackpot,
                        selectShowOutsidePopups: n
                    })
                })
            }
            p.defaultProps = {
                styles: {},
                selectShowOutsidePopups: function() {}
            }, p.propTypes = {
                styles: o().shape({
                    jackpot: o().object
                }),
                selectShowOutsidePopups: o().func
            };
            const d = (0, i.memo)(p)
        },
        7649(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => nt
            });
            var r, o = n(8283),
                a = n(6653),
                i = n(5556),
                s = n.n(i),
                c = n(8715),
                u = n(8874),
                l = n(5474),
                f = n(2384),
                p = n(3387),
                d = n(2182),
                m = n(6024),
                h = n(6337),
                y = n(8579),
                v = n(9789),
                b = n(1620),
                g = n(8517),
                j = n(4848);

            function w(t) {
                return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, w(t)
            }

            function E(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(n), !0).forEach(function(e) {
                        _(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function S(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, o, a, i, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (a = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return O(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function _(t, e, n) {
                var r;
                return r = function(t) {
                    if ("object" != w(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != w(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(e), (e = "symbol" == w(r) ? r : r + "") in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var A = (0, o.lazy)(function() {
                    return n.e(1769).then(n.t.bind(n, 1769, 23))
                }),
                N = (0, o.lazy)(function() {
                    return n.e(772).then(n.t.bind(n, 772, 23))
                }),
                L = {
                    dotStyles: {
                        bg: "#9640F54D",
                        bgActive: "#9640F5",
                        borderColor: "rgba(150, 64, 245, 0.50)",
                        shadow: "0 0 0.25em 0 #9640F5"
                    },
                    arrowColor: "#9640F5",
                    slideWrapperPaddingX: h.isMobile ? 1 : 4.5
                },
                M = u.default.div.withConfig({
                    componentId: "sc-1dyemoh-0"
                })(["", ";position:absolute;top:", ";left:50%;transform:", ";width:", ";z-index:1;", ";", ""], (0, l.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), h.isMobile ? "50%" : "3.25em", h.isMobile ? "translate(-50%, -50%)" : "translateX(-50%)", h.isMobile ? "calc(100% - 2em)" : "33.5em", function(t) {
                    return t.isCongratulationsPopup && (0, u.css)(["top:", ";"], h.isMobile ? "50%" : "12.5em")
                }, function(t) {
                    return t.isLarge && (0, u.css)(["width:41em;"])
                }),
                C = (0, o.memo)(u.default.div.withConfig({
                    componentId: "sc-1dyemoh-1"
                })(["", ";", ";position:fixed;left:0;top:0;z-index:4;", ";"], (0, l.styledFlex)({
                    alignItems: "center",
                    justifyContent: "center"
                }), l.fullSize, function(t) {
                    return t.isLandscape && (0, u.css)(["", "{top:50%;transform:translate(-50%,-50%);width:27.5em;}"], M)
                })),
                k = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.leaderboard,
                        bustRemoteEntryCache: !1,
                        scope: "leaderboard",
                        module: "components/LeaderboardWinPopup"
                    })
                }),
                x = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.leaderboard,
                        bustRemoteEntryCache: !1,
                        scope: "leaderboard",
                        module: "components/UpcomingLeaderboardPopup"
                    })
                }),
                T = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.banksystem,
                        bustRemoteEntryCache: !1,
                        scope: "banksystem",
                        module: "UpcomingBankSystemPopup"
                    })
                }),
                I = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.matchday,
                        bustRemoteEntryCache: !1,
                        scope: "matchday",
                        module: "ActiveMatchDayPopup"
                    })
                }),
                U = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.matchday,
                        bustRemoteEntryCache: !1,
                        scope: "matchday",
                        module: "MatchDayWinPopup"
                    })
                }),
                R = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.moneyland,
                        bustRemoteEntryCache: !1,
                        scope: "moneyland",
                        module: "MoneyLandWinPopup"
                    })
                }),
                D = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.moneyland,
                        bustRemoteEntryCache: !1,
                        scope: "moneyland",
                        module: "UpcomingMoneyLandPopup"
                    })
                }),
                B = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.missions,
                        bustRemoteEntryCache: !1,
                        scope: "missions",
                        module: "UpcomingMissionItem"
                    })
                }),
                G = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.missions,
                        bustRemoteEntryCache: !1,
                        scope: "missions",
                        module: "MissionCompleted"
                    })
                }),
                z = (0, o.lazy)(function() {
                    return (0, c.G)({
                        url: g.REMOTE_CLIENT_URLS.crashback,
                        bustRemoteEntryCache: !1,
                        scope: "crashback",
                        module: "ActiveCrashbackPopup"
                    })
                }),
                F = p.BASE_POPUP_NAMES.MONEYLAND_WIN_POPUP,
                K = p.BASE_POPUP_NAMES.UPCOMING_LEADERBOARD_POPUP,
                V = p.BASE_POPUP_NAMES.UPCOMING_MONEYLAND_POPUP,
                W = p.BASE_POPUP_NAMES.LEADERBOARD_WIN_POPUP,
                H = p.BASE_POPUP_NAMES.ACTIVE_MONEYLAND_POPUP,
                Y = p.BASE_POPUP_NAMES.UPCOMING_BANKSYSTEM_POPUP,
                q = p.BASE_POPUP_NAMES.ACTIVE_BANKSYSTEM_POPUP,
                J = p.BASE_POPUP_NAMES.AVAILABLE_MISSIONS_POPUP,
                $ = p.BASE_POPUP_NAMES.MISSIONS_COMPLETED_POPUP,
                X = p.BASE_POPUP_NAMES.ACTIVE_MATCHDAY_POPUP,
                Q = p.BASE_POPUP_NAMES.MATCHDAY_WIN_POPUP,
                Z = p.BASE_POPUP_NAMES.ACTIVE_CRASHBACK_POPUP,
                tt = (_(_(_(_(_(_(_(_(_(_(r = {}, F, R), K, x), W, k), V, D), H, D), Y, T), q, T), X, I), Q, U), J, B), _(_(r, $, G), Z, z));

            function et(t) {
                var e = t.style,
                    r = t.selectShowOutsidePopups,
                    i = (0, a.useDispatch)(),
                    s = h.isMobile && !(0, f.useOrientationChange)(),
                    c = (0, d.shallowSelector)(r),
                    u = (0, d.shallowSelector)(d.selectSettings).sound,
                    l = S((0, o.useState)(!1), 2),
                    g = l[0],
                    w = l[1],
                    E = S((0, f.useSounds)(!1, y.yM.soundUrl, y.yM.soundObj), 3),
                    O = E[0],
                    _ = E[1],
                    k = E[2],
                    x = (0, d.shallowSelector)(m.zk),
                    T = (0, o.useCallback)(function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        !h.isMobile && i(d.actions.openPopup({
                            name: p.BASE_POPUP_NAMES.MAIN_MENU
                        })), i(d.actions.openPopup({
                            name: p.BASE_POPUP_NAMES.PROMOTIONS,
                            args: P({
                                promotionType: t
                            }, e)
                        })), i(d.actions.closePendingPopups())
                    }, []),
                    I = (0, o.useMemo)(function() {
                        return {
                            slidesToShow: 1,
                            arrows: !0,
                            centerMode: !1
                        }
                    }, [s]);
                (0, o.useEffect)(function() {
                    u.isOn && O && x[0] && x[0].type === F && !g && (_("winPopupMoneyLand"), w(!0)), 0 === (null == x ? void 0 : x.length) && w(!1)
                }, [u.isOn, O, null == x ? void 0 : x.length]), (0, o.useEffect)(function() {
                    console.log("did mount1"), n.e(1769).then(n.t.bind(n, 1769, 23)), n.e(772).then(n.t.bind(n, 772, 23)), console.log("did Mount 2")
                }, []);
                var U = function() {
                    var t, e = null == x || null === (t = x.filter(function(t) {
                        return t.type === F
                    })) || void 0 === t ? void 0 : t.map(function(t) {
                        return t.data.prizeDropId
                    });
                    if ((null == e ? void 0 : e.length) > 0) {
                        var n = new v.A.ConfirmPrizeDrops(e);
                        (0, b.requestFeaturesToServer)(n)
                    }
                    g && k("winPopupMoneyLand"), i(d.actions.closePendingPopups())
                };
                return c ? x.length > 1 ? (0, j.jsx)(o.Suspense, {
                    fallback: null,
                    children: (0, j.jsx)(A, {
                        settings: I,
                        list: x,
                        promotionsPopups: tt,
                        styles: e.slickSlider,
                        styleProps: L,
                        onClose: U,
                        onSlideChange: function() {
                            return k("winPopupMoneyLand")
                        },
                        openPromotionByName: T
                    })
                }) : function() {
                    var t = x[0];
                    if (!t) return null;
                    var n = t.type,
                        r = t.data,
                        a = tt[n];
                    return (0, j.jsx)(o.Suspense, {
                        fallback: null,
                        children: (0, j.jsxs)(C, {
                            style: e.container,
                            isLandscape: s,
                            children: [(0, j.jsx)(N, {
                                onClick: U,
                                styles: e.promotionBackdrop
                            }), (0, j.jsx)(M, {
                                style: e.content,
                                isCongratulationsPopup: n === W || n === F || n === $,
                                isLarge: !h.isMobile && n === X,
                                children: (0, j.jsx)(a, {
                                    styles: e,
                                    onClose: U,
                                    openPromotionByName: T,
                                    data: r
                                })
                            })]
                        })
                    })
                }() : null
            }
            et.defaultProps = {
                style: {},
                selectShowOutsidePopups: function() {}
            }, et.propTypes = {
                style: s().object,
                selectShowOutsidePopups: s().func
            };
            const nt = (0, o.memo)(et)
        },
        7863(t, e, n) {
            "use strict";
            var r;
            n.d(e, {
                A: () => o
            });
            const o = (r = function(t) {
                t.isTrusted || (t.preventDefault(), t.stopImmediatePropagation())
            }, {
                init: function() {
                    document.getElementById("root").addEventListener("click", r, !0)
                },
                remove: function() {
                    document.getElementById("root").removeEventListener("click", r, !0)
                }
            })
        },
        6723(t, e, n) {
            "use strict";
            n.d(e, {
                N: () => a
            });
            var r = n(1620),
                o = n(8579),
                a = function() {
                    (0, r.requestFeaturesToServer)({
                        name: o.JU.GetActivePromotions
                    })
                }
        },
        3745(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => l
            });
            var r = n(8283),
                o = n(6653),
                a = n(2182),
                i = n(1620),
                s = n(6337),
                c = ["mousedown", "mousemove", "keydown", "scroll", "touchstart"];

            function u() {
                var t = (0, o.useDispatch)(),
                    e = (0, r.useRef)(new Date);
                return (0, r.useEffect)(function() {
                    var t = function() {
                        e.current = new Date
                    };
                    return c.forEach(function(e) {
                            document.addEventListener(e, t)
                        }),
                        function() {
                            c.forEach(function(e) {
                                document.removeEventListener(e, t)
                            })
                        }
                }, []), (0, r.useEffect)(function() {
                    var n = setInterval(function() {
                        if (new Date - e.current >= 60 * (s.isDemo ? 480 : 30) * 1e3) {
                            var r = (0, i.getHubConnection)();
                            t(a.actions.setUserInactive({
                                isInactive: !0
                            })), r.dontReconnect = !0, r.stop(), clearInterval(n)
                        }
                    }, 1e3);
                    return function() {
                        clearInterval(n)
                    }
                }, []), null
            }
            const l = (0, r.memo)(u)
        },
        1264(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => y
            });
            var r = n(8283),
                o = n(8874),
                a = n(5094),
                i = n.n(a),
                s = n(5556),
                c = n.n(s),
                u = n(2182),
                l = n(6337),
                f = n(4848);

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var d = (0, r.lazy)(function() {
                    return n.e(9550).then(n.bind(n, 9550))
                }),
                m = (0, r.memo)(o.default.div.withConfig({
                    componentId: "sc-1hmzvsb-0"
                })(["position:absolute;right:0;top:0;z-index:15;overflow:hidden;height:", ";width:", ";", ";", ";"], l.isMobile ? "2.875em" : "var(--notificationContainerHeight, 6.875em)", l.isMobile ? "var(--notificationContainerWidthMob, 100%)" : "var(--notificationContainerWidth, 21.5em)", !l.isMobile && "border-radius: 1em", function(t) {
                    return t.isLandscape && (0, o.css)(["top:1em;left:50%;transform:translateX(-50%);width:23.5em;"])
                }));

            function h(t) {
                var e, n, o = t.styles,
                    a = (e = (0, r.useState)(!1), n = 2, function(t) {
                        if (Array.isArray(t)) return t
                    }(e) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, a, i, s = [],
                                c = !0,
                                u = !1;
                            try {
                                if (a = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    c = !1
                                } else
                                    for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                            } catch (t) {
                                u = !0, o = t
                            } finally {
                                try {
                                    if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return
                                } finally {
                                    if (u) throw o
                                }
                            }
                            return s
                        }
                    }(e, n) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    s = a[0],
                    c = a[1],
                    h = l.isMobile && !i()(),
                    y = (0, u.shallowSelector)(u.selectNotificationsData),
                    v = y.isDisconnected,
                    b = y.activeNotification;
                return (0, r.useEffect)(function() {
                    null != b && b.name && c(!0)
                }, [b]), s && !v && (0, f.jsx)(m, {
                    style: o.container,
                    isLandscape: h,
                    children: (0, f.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, f.jsx)(d, {
                            activeNotification: b,
                            styles: o,
                            setOpen: c
                        })
                    })
                })
            }
            h.defaultProps = {
                styles: {
                    container: c().object,
                    missionNotification: c().object,
                    bankNotification: c().object
                }
            }, h.propTypes = {
                styles: c().shape({
                    container: c().object,
                    missionNotification: c().object,
                    bankNotification: c().object
                })
            };
            const y = (0, r.memo)(h)
        },
        5437(t, e, n) {
            "use strict";
            n.d(e, {
                A: () => s
            });
            var r = n(1601),
                o = n.n(r),
                a = n(6314),
                i = n.n(a)()(o());
            i.push([t.id, "html,body,#root{-webkit-touch-callout:none;-webkit-user-select:none}", ""]);
            const s = i
        },
        6314(t) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(e) {
                        var n = "",
                            r = void 0 !== e[5];
                        return e[4] && (n += "@supports (".concat(e[4], ") {")), e[2] && (n += "@media ".concat(e[2], " {")), r && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), n += t(e), r && (n += "}"), e[2] && (n += "}"), e[4] && (n += "}"), n
                    }).join("")
                }, e.i = function(t, n, r, o, a) {
                    "string" == typeof t && (t = [
                        [null, t, void 0]
                    ]);
                    var i = {};
                    if (r)
                        for (var s = 0; s < this.length; s++) {
                            var c = this[s][0];
                            null != c && (i[c] = !0)
                        }
                    for (var u = 0; u < t.length; u++) {
                        var l = [].concat(t[u]);
                        r && i[l[0]] || (void 0 !== a && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = a), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), e.push(l))
                    }
                }, e
            }
        },
        1601(t) {
            "use strict";
            t.exports = function(t) {
                return t[1]
            }
        },
        8466(t, e, n) {
            "use strict";
            var r = n(5072),
                o = n.n(r),
                a = n(7825),
                i = n.n(a),
                s = n(7659),
                c = n.n(s),
                u = n(5056),
                l = n.n(u),
                f = n(540),
                p = n.n(f),
                d = n(1113),
                m = n.n(d),
                h = n(5437),
                y = {};
            y.styleTagTransform = m(), y.setAttributes = l(), y.insert = c().bind(null, "head"), y.domAPI = i(), y.insertStyleElement = p(), o()(h.A, y), h.A && h.A.locals && h.A.locals
        },
        5072(t) {
            "use strict";
            var e = [];

            function n(t) {
                for (var n = -1, r = 0; r < e.length; r++)
                    if (e[r].identifier === t) {
                        n = r;
                        break
                    }
                return n
            }

            function r(t, r) {
                for (var a = {}, i = [], s = 0; s < t.length; s++) {
                    var c = t[s],
                        u = r.base ? c[0] + r.base : c[0],
                        l = a[u] || 0,
                        f = "".concat(u, " ").concat(l);
                    a[u] = l + 1;
                    var p = n(f),
                        d = {
                            css: c[1],
                            media: c[2],
                            sourceMap: c[3],
                            supports: c[4],
                            layer: c[5]
                        };
                    if (-1 !== p) e[p].references++, e[p].updater(d);
                    else {
                        var m = o(d, r);
                        r.byIndex = s, e.splice(s, 0, {
                            identifier: f,
                            updater: m,
                            references: 1
                        })
                    }
                    i.push(f)
                }
                return i
            }

            function o(t, e) {
                var n = e.domAPI(e);
                return n.update(t),
                    function(e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                            n.update(t = e)
                        } else n.remove()
                    }
            }
            t.exports = function(t, o) {
                var a = r(t = t || [], o = o || {});
                return function(t) {
                    t = t || [];
                    for (var i = 0; i < a.length; i++) {
                        var s = n(a[i]);
                        e[s].references--
                    }
                    for (var c = r(t, o), u = 0; u < a.length; u++) {
                        var l = n(a[u]);
                        0 === e[l].references && (e[l].updater(), e.splice(l, 1))
                    }
                    a = c
                }
            }
        },
        7659(t) {
            "use strict";
            var e = {};
            t.exports = function(t, n) {
                var r = function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                        e[t] = n
                    }
                    return e[t]
                }(t);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        },
        540(t) {
            "use strict";
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
            }
        },
        5056(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = n.nc;
                e && t.setAttribute("nonce", e)
            }
        },
        7825(t) {
            "use strict";
            t.exports = function(t) {
                if ("undefined" == typeof document) return {
                    update: function() {},
                    remove: function() {}
                };
                var e = t.insertStyleElement(t);
                return {
                    update: function(n) {
                        ! function(t, e, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleTagTransform(r, t, e.options)
                        }(e, t, n)
                    },
                    remove: function() {
                        ! function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        },
        1113(t) {
            "use strict";
            t.exports = function(t, e) {
                if (e.styleSheet) e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        },
        2208(t, e, n) {
            var r = {
                "./blackjack/novibet.json": [5685, [5685]],
                "./blackjack94/crowncoins.json": [1572, [1572]],
                "./chickencrash/crownCoins.json": [664, [8283]],
                "./chickencrash/totogaming.json": [85, [85]],
                "./crasher/betera.json": [9539, [9539]],
                "./crasher/betgar.json": [8727, [8727]],
                "./crasher/betpark.json": [1271, [1271]],
                "./crasher/betplays.json": [7722, [7722]],
                "./crasher/casibom.json": [6722, [6722]],
                "./crasher/cenabet.json": [7152, [7152]],
                "./crasher/dafabet.json": [9869, [9869]],
                "./crasher/ecuabet.json": [6365, [6365]],
                "./crasher/fonbet.json": [9458, [9458]],
                "./crasher/fun88.json": [4433, [4433]],
                "./crasher/gettobet.json": [7864, [7864]],
                "./crasher/jbo.json": [3385, [3385]],
                "./crasher/khanbet.json": [9859, [9859]],
                "./crasher/king.json": [2155, [2155]],
                "./crasher/kobet.json": [3297, [3297]],
                "./crasher/leon.json": [3390, [3390]],
                "./crasher/luckystar.json": [636, [636]],
                "./crasher/megabahis.json": [2733, [2733]],
                "./crasher/melbet.json": [5285, [5285]],
                "./crasher/meritking.json": [8154, [8154]],
                "./crasher/mostbet.json": [4038, [4038]],
                "./crasher/novibet.json": [6189, [6189]],
                "./crasher/parabet.json": [9581, [9581]],
                "./crasher/pinup.json": [5346, [5346]],
                "./crasher/sterlinbet.json": [8294, [8294]],
                "./hamstermania/leon.json": [7700, [7700]],
                "./hamstermania/onewin.json": [7600, [7600]],
                "./hamstermania/onewin_axis.json": [3668, [3668]],
                "./hamstermania/totogaming.json": [583, [583]],
                "./hamstermania/twin.json": [2472, [2472]],
                "./hamstermania/yolo.json": [3115, [3115]],
                "./penalty/croatia.json": [5120, [5120]],
                "./penalty/maxbet.json": [6298, [6298]],
                "./penalty/nexttoyou.json": [6734, [6734]],
                "./towerrush/1xbet.json": [6459, [6459]],
                "./turbomines/betgit.json": [2595, [2595]],
                "./turbomines/betpark.json": [7693, [7693]],
                "./turbomines/betriyal.json": [3902, [3902]],
                "./turbomines/betrupi.json": [9139, [9139]],
                "./turbomines/casibom.json": [8700, [8700]],
                "./turbomines/fun88.json": [8395, [8395]],
                "./turbomines/gettobet.json": [8370, [8370]],
                "./turbomines/hattrick.json": [2770, [2770]],
                "./turbomines/havanabet.json": [9228, [9228]],
                "./turbomines/jbo.json": [2175, [2175]],
                "./turbomines/leon.json": [3444, [3444]],
                "./turbomines/onewin_axis.json": [6740, [6740]],
                "./turbomines/portbet.json": [6600, [6600]],
                "./turbomines/sterlinbet.json": [4668, [4668]],
                "./turbomines/twin.json": [408, [408]]
            };

            function o(t) {
                try {
                    if (!n.o(r, t)) return Promise.resolve().then(() => {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
                var e = r[t],
                    o = e[0];
                return n.e(e[1][0]).then(() => n.t(o, 19))
            }
            o.keys = () => Object.keys(r), o.id = 2208, t.exports = o
        }
    }
]);