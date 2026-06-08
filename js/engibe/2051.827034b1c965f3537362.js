"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [2051], {
        2051(e, t, n) {
            n.r(t), n.d(t, {
                default: () => d
            });
            var i, o = n(5556),
                s = n.n(o),
                c = n(8283),
                u = n(6653),
                a = n(6295),
                r = n(2384),
                l = n(3672),
                f = n.n(l),
                m = n(2182),
                h = n(4848),
                g = (0, a.getIsMobile)(),
                p = ((0, a.getParamsFromUrl)() || {}).culture;

            function b(e) {
                var t = e.style,
                    n = e.second,
                    o = e.maxLength,
                    s = (0, u.useDispatch)(),
                    a = (0, u.useSelector)(m.selectNotifications),
                    l = (0, c.useCallback)(function() {
                        return s(m.actions.removeNotification())
                    }, []),
                    b = g && !(0, r.useOrientationChange)();
                return (0, c.useEffect)(function() {
                    s(m.actions.initializeConfigs({
                        second: n,
                        maxLength: o
                    }))
                }, [n, o]), (0, c.useEffect)(function() {
                    return a.length && 0 !== n && (i = setTimeout(function() {
                            l()
                        }, 1e3 * (n + .4))),
                        function() {
                            return clearTimeout(i)
                        }
                }, [a]), g ? a.length > 0 && (0, h.jsx)(f(), {
                    culture: p,
                    isMobile: !0,
                    isLandscape: b,
                    style: t.notificationContainer,
                    notificationList: a,
                    removeNotification: l,
                    closeTime: n,
                    isSmall: !0
                }) : null
            }
            b.defaultProps = {
                style: {},
                second: 1.7,
                maxLength: g ? 2 : 5
            }, b.propTypes = {
                style: s().object,
                second: s().number,
                maxLength: s().number
            };
            const d = (0, c.memo)(b)
        }
    }
]);