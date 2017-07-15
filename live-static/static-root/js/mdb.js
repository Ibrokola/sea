function dropdownEffectData(t) {
    var e = null,
        n = null,
        i = $(t),
        r = $(".dropdown-menu", t),
        o = i.parents("ul.nav");
    return o.height > 0 && (e = o.data("dropdown-in") || null, n = o.data("dropdown-out") || null), {
        target: t,
        dropdown: i,
        dropdownMenu: r,
        effectIn: r.data("dropdown-in") || e,
        effectOut: r.data("dropdown-out") || n
    }
}

function dropdownEffectStart(t, e) {
    e && (t.dropdown.addClass("dropdown-animating"), t.dropdownMenu.addClass("animated"), t.dropdownMenu.addClass(e))
}

function dropdownEffectEnd(t, e) {
    var n = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    t.dropdown.one(n, function() {
        t.dropdown.removeClass("dropdown-animating"), t.dropdownMenu.removeClass("animated"), t.dropdownMenu.removeClass(t.effectIn), t.dropdownMenu.removeClass(t.effectOut), "function" == typeof e && e()
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, r) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a)) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return e < 1 ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
        },
        easeOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    function(t) {
        t.Package ? Materialize = {} : t.Materialize = {}
    }(window), Materialize.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }(), Materialize.elementOrParentIsFixed = function(t) {
        var e = $(t),
            n = e.add(e.parents()),
            i = !1;
        return n.each(function() {
            if ("fixed" === $(this).css("position")) return i = !0, !1
        }), i
    };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(t) {
        function e(t) {
            var e = t.length,
                i = n.type(t);
            return "function" !== i && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }
        if (!t.jQuery) {
            var n = function(t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function(t) {
                return null != t && t == t.window
            }, n.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[a.call(t)] || "object" : typeof t
            }, n.isArray = Array.isArray || function(t) {
                return "array" === n.type(t)
            }, n.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t)) return !1;
                try {
                    if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                for (e in t);
                return void 0 === e || o.call(t, e)
            }, n.each = function(t, n, i) {
                var r, o = 0,
                    a = t.length,
                    s = e(t);
                if (i) {
                    if (s)
                        for (; a > o && (r = n.apply(t[o], i), r !== !1); o++);
                    else
                        for (o in t)
                            if (r = n.apply(t[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = n.call(t[o], o, t[o]), r !== !1); o++);
                else
                    for (o in t)
                        if (r = n.call(t[o], o, t[o]), r === !1) break;
                return t
            }, n.data = function(t, e, r) {
                if (void 0 === r) {
                    var o = t[n.expando],
                        a = o && i[o];
                    if (void 0 === e) return a;
                    if (a && e in a) return a[e]
                } else if (void 0 !== e) {
                    var o = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return i[o] = i[o] || {}, i[o][e] = r, r
                }
            }, n.removeData = function(t, e) {
                var r = t[n.expando],
                    o = r && i[r];
                o && n.each(e, function(t, e) {
                    delete o[e]
                })
            }, n.extend = function() {
                var t, e, i, r, o, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) t = s[r], i = o[r], s !== i && (u && i && (n.isPlainObject(i) || (e = n.isArray(i))) ? (e ? (e = !1, a = t && n.isArray(t) ? t : []) : a = t && n.isPlainObject(t) ? t : {}, s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
                return s
            }, n.queue = function(t, i, r) {
                function o(t, n) {
                    var i = n || [];
                    return null != t && (e(Object(t)) ? ! function(t, e) {
                        for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
                        if (n !== n)
                            for (; void 0 !== e[i];) t[r++] = e[i++];
                        return t.length = r, t
                    }(i, "string" == typeof t ? [t] : t) : [].push.call(i, t)), i
                }
                if (t) {
                    i = (i || "fx") + "queue";
                    var a = n.data(t, i);
                    return r ? (!a || n.isArray(r) ? a = n.data(t, i, o(r)) : a.push(r), a) : a || []
                }
            }, n.dequeue = function(t, e) {
                n.each(t.nodeType ? [t] : t, function(t, i) {
                    e = e || "fx";
                    var r = n.queue(i, e),
                        o = r.shift();
                    "inprogress" === o && (o = r.shift()), o && ("fx" === e && r.unshift("inprogress"), o.call(i, function() {
                        n.dequeue(i, e)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document
                    }
                    var e = this[0],
                        t = t.apply(e),
                        i = this.offset(),
                        r = /^(?:body|html)$/i.test(t.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(t).offset();
                    return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0, r.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: i.top - r.top,
                        left: i.left - r.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            n.fn.init.prototype = n.fn, t.Velocity = {
                Utilities: n
            }
        }
    }(window), function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
    }(function() {
        return function(t, e, n, i) {
            function r(t) {
                for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                    var r = t[e];
                    r && i.push(r)
                }
                return i
            }

            function o(t) {
                return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t
            }

            function a(t) {
                var e = p.data(t, "velocity");
                return null === e ? i : e
            }

            function s(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function l(t, n, i, r) {
                function o(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function a(t, e) {
                    return 3 * e - 6 * t
                }

                function s(t) {
                    return 3 * t
                }

                function l(t, e, n) {
                    return ((o(e, n) * t + a(e, n)) * t + s(e)) * t
                }

                function c(t, e, n) {
                    return 3 * o(e, n) * t * t + 2 * a(e, n) * t + s(e)
                }

                function u(e, n) {
                    for (var r = 0; v > r; ++r) {
                        var o = c(n, t, i);
                        if (0 === o) return n;
                        var a = l(n, t, i) - e;
                        n -= a / o
                    }
                    return n
                }

                function d() {
                    for (var e = 0; b > e; ++e) S[e] = l(e * w, t, i)
                }

                function p(e, n, r) {
                    var o, a, s = 0;
                    do a = n + (r - n) / 2, o = l(a, t, i) - e, o > 0 ? r = a : n = a; while (Math.abs(o) > m && ++s < y);
                    return a
                }

                function f(e) {
                    for (var n = 0, r = 1, o = b - 1; r != o && S[r] <= e; ++r) n += w;
                    --r;
                    var a = (e - S[r]) / (S[r + 1] - S[r]),
                        s = n + a * w,
                        l = c(s, t, i);
                    return l >= g ? u(e, s) : 0 == l ? s : p(e, n, n + w)
                }

                function h() {
                    C = !0, (t != n || i != r) && d()
                }
                var v = 4,
                    g = .001,
                    m = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var T = 0; 4 > T; ++T)
                    if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T])) return !1;
                t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
                var S = x ? new Float32Array(b) : new Array(b),
                    C = !1,
                    E = function(e) {
                        return C || h(), t === n && i === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), n, r)
                    };
                E.getControlPoints = function() {
                    return [{
                        x: t,
                        y: n
                    }, {
                        x: i,
                        y: r
                    }]
                };
                var P = "generateBezier(" + [t, n, i, r] + ")";
                return E.toString = function() {
                    return P
                }, E
            }

            function c(t, e) {
                var n = t;
                return v.isString(t) ? b.Easings[t] || (n = !1) : n = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : !(!v.isArray(t) || 4 !== t.length) && l.apply(null, t), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
            }

            function u(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        n = b.State.calls.length;
                    n > 1e4 && (b.State.calls = r(b.State.calls));
                    for (var o = 0; n > o; o++)
                        if (b.State.calls[o]) {
                            var s = b.State.calls[o],
                                l = s[0],
                                c = s[2],
                                f = s[3],
                                h = !!f,
                                g = null;
                            f || (f = b.State.calls[o][3] = e - 16);
                            for (var m = Math.min((e - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var T = l[y],
                                    C = T.element;
                                if (a(C)) {
                                    var E = !1;
                                    if (c.display !== i && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(P, function(t, e) {
                                                x.setPropertyValue(C, "display", e)
                                            })
                                        }
                                        x.setPropertyValue(C, "display", c.display)
                                    }
                                    c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(C, "visibility", c.visibility);
                                    for (var k in T)
                                        if ("element" !== k) {
                                            var A, X = T[k],
                                                O = v.isString(X.easing) ? b.Easings[X.easing] : X.easing;
                                            if (1 === m) A = X.endValue;
                                            else {
                                                var Y = X.endValue - X.startValue;
                                                if (A = X.startValue + Y * O(m, c, Y), !h && A === X.currentValue) continue
                                            }
                                            if (X.currentValue = A, "tween" === k) g = A;
                                            else {
                                                if (x.Hooks.registered[k]) {
                                                    var W = x.Hooks.getRoot(k),
                                                        M = a(C).rootPropertyValueCache[W];
                                                    M && (X.rootPropertyValue = M)
                                                }
                                                var I = x.setPropertyValue(C, k, X.currentValue + (0 === parseFloat(A) ? "" : X.unitType), X.rootPropertyValue, X.scrollData);
                                                x.Hooks.registered[k] && (a(C).rootPropertyValueCache[W] = x.Normalizations.registered[W] ? x.Normalizations.registered[W]("extract", null, I[1]) : I[1]), "transform" === I[0] && (E = !0)
                                            }
                                        }
                                    c.mobileHA && a(C).transformCache.translate3d === i && (a(C).transformCache.translate3d = "(0px, 0px, 0px)", E = !0), E && x.flushTransformCache(C)
                                }
                            }
                            c.display !== i && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], m, Math.max(0, f + c.duration - e), f, g), 1 === m && d(o)
                        }
                }
                b.State.isTicking && S(u)
            }

            function d(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var n = b.State.calls[t][0], r = b.State.calls[t][1], o = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = n.length; u > c; c++) {
                    var d = n[c].element;
                    if (e || o.loop || ("none" === o.display && x.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (p.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && a(d)) {
                        a(d).isAnimating = !1, a(d).rootPropertyValueCache = {};
                        var f = !1;
                        p.each(x.Lists.transforms3D, function(t, e) {
                            var n = /^scale/.test(e) ? 1 : 0,
                                r = a(d).transformCache[e];
                            a(d).transformCache[e] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (f = !0, delete a(d).transformCache[e])
                        }), o.mobileHA && (f = !0, delete a(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && c === u - 1) try {
                        o.complete.call(r, r)
                    } catch (t) {
                        setTimeout(function() {
                            throw t
                        }, 1)
                    }
                    s && o.loop !== !0 && s(r), a(d) && o.loop === !0 && !e && (p.each(a(d).tweensContainer, function(t, e) {
                        /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })), o.queue !== !1 && p.dequeue(d, o.queue)
                }
                b.State.calls[t] = !1;
                for (var h = 0, v = b.State.calls.length; v > h; h++)
                    if (b.State.calls[h] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var p, f = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = n.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                    }
                    return i
                }(),
                h = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function() {
                            e(i + n)
                        }, n)
                    }
                }(),
                v = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== i && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                g = !1;
            if (t.fn && t.fn.jquery ? (p = t, g = !0) : p = e.Velocity.Utilities, 8 >= f && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var m = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: m,
                        easing: y,
                        begin: i,
                        complete: i,
                        progress: i,
                        display: i,
                        visibility: i,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(t) {
                        p.data(t, "velocity", {
                            isSVG: v.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== i ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, n, i) {
                    var r = {
                        x: e.x + i.dx * n,
                        v: e.v + i.dv * n,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: r.v,
                        dv: t(r)
                    }
                }

                function n(n, i) {
                    var r = {
                            dx: n.v,
                            dv: t(n)
                        },
                        o = e(n, .5 * i, r),
                        a = e(n, .5 * i, o),
                        s = e(n, i, a),
                        l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                        c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                    return n.x = n.x + l * i, n.v = n.v + c * i, n
                }
                return function t(e, i, r) {
                    var o, a, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0,
                        d = 1e-4,
                        p = .016;
                    for (e = parseFloat(e) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = e, l.friction = i, o = null !== r, o ? (u = t(e, i), a = u / r * p) : a = p; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                    return o ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    } : u
                }
            }();
            b.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            }, p.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(t, e) {
                b.Easings[e[0]] = l.apply(null, e[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var n, i, r;
                        if (f)
                            for (n in x.Hooks.templates) {
                                i = x.Hooks.templates[n], r = i[0].split(" ");
                                var o = i[1].match(x.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), x.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                            }
                        for (n in x.Hooks.templates) {
                            i = x.Hooks.templates[n], r = i[0].split(" ");
                            for (var t in r) {
                                var a = n + r[t],
                                    s = t;
                                x.Hooks.registered[a] = [n, s]
                            }
                        }
                    },
                    getRoot: function(t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var i = n[0],
                                r = n[1];
                            return e = x.Hooks.cleanRootPropertyValue(i, e), e.toString().match(x.RegEx.valueSplit)[r]
                        }
                        return e
                    },
                    injectValue: function(t, e, n) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var r, o, a = i[0],
                                s = i[1];
                            return n = x.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(x.RegEx.valueSplit), r[s] = e, o = r.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, n) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                case "inject":
                                    return "rect(" + n + ")"
                            }
                        },
                        blur: function(t, e, n) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(n);
                                    if (!i && 0 !== i) {
                                        var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = r ? r[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(t, e, n) {
                            if (8 >= f) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = i ? i[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return n;
                                case "inject":
                                    return n
                            }
                        }
                    },
                    register: function() {
                        9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++) ! function() {
                            var e = x.Lists.transformsBase[t];
                            x.Normalizations.registered[e] = function(t, n, r) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(n) === i || a(n).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : a(n).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && a(n).transformCache[e] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                o = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                o = !/(deg|\d)$/i.test(r)
                                        }
                                        return o || (a(n).transformCache[e] = "(" + r + ")"), a(n).transformCache[e]
                                }
                            }
                        }();
                        for (var t = 0; t < x.Lists.colors.length; t++) ! function() {
                            var e = x.Lists.colors[t];
                            x.Normalizations.registered[e] = function(t, n, r) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var o;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;
                                        else {
                                            var a, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : x.RegEx.isHex.test(r) ? a = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                                    case "inject":
                                        return 8 >= f ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                            var r;
                            if (r = 0 === n ? t : e[n] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase()
                                }), v.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[t] = r, [r, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(n, function(t, e, n, i) {
                            return e + e + n + n + i + i
                        }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(t, n, r, o) {
                    function s(t, n) {
                        function r() {
                            c && x.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= f) l = p.css(t, n);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !o) {
                                if ("height" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return r(), u
                                }
                                if ("width" === n && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var d = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return r(), d
                                }
                            }
                            var h;
                            h = a(t) === i ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === f && "filter" === n ? h.getPropertyValue(n) : h[n], ("" === l || null === l) && (l = t.style[n]), r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                            var v = s(t, "position");
                            ("fixed" === v || "absolute" === v && /top|left/i.test(n)) && (l = p(t).position()[n] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[n]) {
                        var c = n,
                            u = x.Hooks.getRoot(c);
                        r === i && (r = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (r = x.Normalizations.registered[u]("extract", t, r)), l = x.Hooks.extractValue(c, r)
                    } else if (x.Normalizations.registered[n]) {
                        var d, h;
                        d = x.Normalizations.registered[n]("name", t), "transform" !== d && (h = s(t, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[n] && (h = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", t, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(t) && a(t).isSVG && x.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n)) try {
                                l = t.getBBox()[n]
                            } catch (t) {
                                l = 0
                            } else l = t.getAttribute(n);
                            else l = s(t, x.Names.prefixCheck(n)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                },
                setPropertyValue: function(t, n, i, r, o) {
                    var s = n;
                    if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? e.scrollTo(i, o.alternateValue) : e.scrollTo(o.alternateValue, i);
                    else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", t)) x.Normalizations.registered[n]("inject", t, i), s = "transform", i = a(t).transformCache[n];
                    else {
                        if (x.Hooks.registered[n]) {
                            var l = n,
                                c = x.Hooks.getRoot(n);
                            r = r || x.getPropertyValue(t, c), i = x.Hooks.injectValue(l, i, r), n = c
                        }
                        if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", t, i), n = x.Normalizations.registered[n]("name", t)), s = x.Names.prefixCheck(n)[0], 8 >= f) try {
                            t.style[s] = i
                        } catch (t) {
                            b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                        } else a(t) && a(t).isSVG && x.Names.SVGAttribute(n) ? t.setAttribute(n, i) : t.style[s] = i;
                        b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                    }
                    return [s, i]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e))
                    }
                    var n = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                        var i = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        p.each(a(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), i[t] && (n += t + "(" + i[t].join(" ") + ") ", delete i[t])
                        })
                    } else {
                        var r, o;
                        p.each(a(t).transformCache, function(e) {
                            return r = a(t).transformCache[e], "transformPerspective" === e ? (o = r, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(n += e + r + " "))
                        }), o && (n = "perspective" + o + " " + n)
                    }
                    x.setPropertyValue(t, "transform", n)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(t, e, n) {
                var r = i;
                return t = o(t), p.each(t, function(t, o) {
                    if (a(o) === i && b.init(o), n === i) r === i && (r = b.CSS.getPropertyValue(o, e));
                    else {
                        var s = b.CSS.setPropertyValue(o, e, n);
                        "transform" === s[0] && b.CSS.flushTransformCache(o), r = s
                    }
                }), r
            };
            var T = function() {
                function t() {
                    return s ? k.promise || null : l
                }

                function r() {
                    function t(t) {
                        function d(t, e) {
                            var n = i,
                                r = i,
                                a = i;
                            return v.isArray(t) ? (n = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? a = t[1] : (v.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (r = e ? t[1] : c(t[1], s.duration), t[2] !== i && (a = t[2]))) : n = t, e || (r = r || s.easing), v.isFunction(n) && (n = n.call(o, C, S)), v.isFunction(a) && (a = a.call(o, C, S)), [n || 0, r, a]
                        }

                        function f(t, e) {
                            var n, i;
                            return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return n = t, ""
                            }), n || (n = x.Values.getUnitType(t)), [i, n]
                        }

                        function m() {
                            var t = {
                                    myParent: o.parentNode || n.body,
                                    position: x.getPropertyValue(o, "position"),
                                    fontSize: x.getPropertyValue(o, "fontSize")
                                },
                                i = t.position === I.lastPosition && t.myParent === I.lastParent,
                                r = t.fontSize === I.lastFontSize;
                            I.lastParent = t.myParent, I.lastPosition = t.position, I.lastFontSize = t.fontSize;
                            var s = 100,
                                l = {};
                            if (r && i) l.emToPx = I.lastEmToPx, l.percentToPxWidth = I.lastPercentToPxWidth, l.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var c = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                b.init(c), t.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, "hidden")
                                }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                    b.CSS.setPropertyValue(c, e, s + "%")
                                }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = I.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c)
                            }
                            return null === I.remToPx && (I.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(e.innerWidth) / 100, I.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = I.remToPx, l.vwToPx = I.vwToPx, l.vhToPx = I.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                        }
                        if (s.begin && 0 === C) try {
                            s.begin.call(h, h)
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                        if ("scroll" === A) {
                            var w, T, E, P = /^x$/i.test(s.axis) ? "Left" : "Top",
                                X = parseFloat(s.offset) || 0;
                            s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, w = s.container["scroll" + P], E = w + p(o).position()[P.toLowerCase()] + X) : s.container = null : (w = b.State.scrollAnchor[b.State["scrollProperty" + P]], T = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], E = p(o).offset()[P.toLowerCase()] + X), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: w,
                                    currentValue: w,
                                    endValue: E,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: P,
                                        alternateValue: T
                                    }
                                },
                                element: o
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                        } else if ("reverse" === A) {
                            if (!a(o).tweensContainer) return void p.dequeue(o, s.queue);
                            "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, a(o).opts, s);
                            var O = p.extend(!0, {}, a(o).tweensContainer);
                            for (var Y in O)
                                if ("element" !== Y) {
                                    var W = O[Y].startValue;
                                    O[Y].startValue = O[Y].currentValue = O[Y].endValue, O[Y].endValue = W, v.isEmptyObject(y) || (O[Y].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + Y + "): " + JSON.stringify(O[Y]), o)
                                }
                            l = O
                        } else if ("start" === A) {
                            var O;
                            a(o).tweensContainer && a(o).isAnimating === !0 && (O = a(o).tweensContainer), p.each(g, function(t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var n = d(e, !0),
                                        r = n[0],
                                        o = n[1],
                                        a = n[2];
                                    if (x.RegEx.isHex.test(r)) {
                                        for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), c = a ? x.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                            var p = [l[u]];
                                            o && p.push(o),
                                                c !== i && p.push(c[u]), g[t + s[u]] = p
                                        }
                                        delete g[t]
                                    }
                                }
                            });
                            for (var M in g) {
                                var R = d(g[M]),
                                    V = R[0],
                                    H = R[1],
                                    N = R[2];
                                M = x.Names.camelCase(M);
                                var j = x.Hooks.getRoot(M),
                                    D = !1;
                                if (a(o).isSVG || "tween" === j || x.Names.prefixCheck(j)[1] !== !1 || x.Normalizations.registered[j] !== i) {
                                    (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(M) && !N && 0 !== V && (N = 0), s._cacheValues && O && O[M] ? (N === i && (N = O[M].endValue + O[M].unitType), D = a(o).rootPropertyValueCache[j]) : x.Hooks.registered[M] ? N === i ? (D = x.getPropertyValue(o, j), N = x.getPropertyValue(o, M, D)) : D = x.Hooks.templates[j][1] : N === i && (N = x.getPropertyValue(o, M));
                                    var z, q, F, $ = !1;
                                    if (z = f(M, N), N = z[0], F = z[1], z = f(M, V), V = z[0].replace(/^([+-\/*])=/, function(t, e) {
                                            return $ = e, ""
                                        }), q = z[1], N = parseFloat(N) || 0, V = parseFloat(V) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(M) ? (V /= 100, q = "em") : /^scale/.test(M) ? (V /= 100, q = "") : /(Red|Green|Blue)$/i.test(M) && (V = V / 100 * 255, q = "")), /[\/*]/.test($)) q = F;
                                    else if (F !== q && 0 !== N)
                                        if (0 === V) q = F;
                                        else {
                                            r = r || m();
                                            var Q = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                                            switch (F) {
                                                case "%":
                                                    N *= "x" === Q ? r.percentToPxWidth : r.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    N *= r[F + "ToPx"]
                                            }
                                            switch (q) {
                                                case "%":
                                                    N *= 1 / ("x" === Q ? r.percentToPxWidth : r.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    N *= 1 / r[q + "ToPx"]
                                            }
                                        }
                                    switch ($) {
                                        case "+":
                                            V = N + V;
                                            break;
                                        case "-":
                                            V = N - V;
                                            break;
                                        case "*":
                                            V *= N;
                                            break;
                                        case "/":
                                            V = N / V
                                    }
                                    l[M] = {
                                        rootPropertyValue: D,
                                        startValue: N,
                                        currentValue: N,
                                        endValue: V,
                                        unitType: q,
                                        easing: H
                                    }, b.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), o)
                                } else b.debug && console.log("Skipping [" + j + "] due to a lack of browser support.")
                            }
                            l.element = o
                        }
                        l.element && (x.Values.addClass(o, "velocity-animating"), L.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, C === S - 1 ? (b.State.calls.push([L, h, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : C++)
                    }
                    var r, o = this,
                        s = p.extend({}, b.defaults, y),
                        l = {};
                    switch (a(o) === i && b.init(o), parseFloat(s.delay) && s.queue !== !1 && p.queue(o, s.queue, function(t) {
                        b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(s.delay)),
                            next: t
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = m;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(t, s.delay) : t() : p.queue(o, s.queue, function(e, n) {
                        return n === !0 ? (k.promise && k.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o)
                }
                var s, l, f, h, g, y, w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
                if (v.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
                    w ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[f], y = arguments[f + 1]);
                    var S = h.length,
                        C = 0;
                    if (!/^(stop|finish)$/i.test(g) && !p.isPlainObject(y)) {
                        var E = f + 1;
                        y = {};
                        for (var P = E; P < arguments.length; P++) v.isArray(arguments[P]) || !/^(fast|normal|slow)$/i.test(arguments[P]) && !/^\d/.test(arguments[P]) ? v.isString(arguments[P]) || v.isArray(arguments[P]) ? y.easing = arguments[P] : v.isFunction(arguments[P]) && (y.complete = arguments[P]) : y.duration = arguments[P]
                    }
                    var k = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && (k.promise = new b.Promise(function(t, e) {
                        k.resolver = t, k.rejecter = e
                    }));
                    var A;
                    switch (g) {
                        case "scroll":
                            A = "scroll";
                            break;
                        case "reverse":
                            A = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            p.each(h, function(t, e) {
                                a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                            });
                            var X = [];
                            return p.each(b.State.calls, function(t, e) {
                                e && p.each(e[1], function(n, r) {
                                    var o = y === i ? "" : y;
                                    return o !== !0 && e[2].queue !== o && (y !== i || e[2].queue !== !1) || void p.each(h, function(n, i) {
                                        i === r && ((y === !0 || v.isString(y)) && (p.each(p.queue(i, v.isString(y) ? y : ""), function(t, e) {
                                            v.isFunction(e) && e(null, !0)
                                        }), p.queue(i, v.isString(y) ? y : "", [])), "stop" === g ? (a(i) && a(i).tweensContainer && o !== !1 && p.each(a(i).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), X.push(t)) : "finish" === g && (e[2].duration = 1))
                                    })
                                })
                            }), "stop" === g && (p.each(X, function(t, e) {
                                d(e, !0)
                            }), k.promise && k.resolver(h)), t();
                        default:
                            if (!p.isPlainObject(g) || v.isEmptyObject(g)) {
                                if (v.isString(g) && b.Redirects[g]) {
                                    var O = p.extend({}, y),
                                        Y = O.duration,
                                        W = O.delay || 0;
                                    return O.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function(t, e) {
                                        parseFloat(O.stagger) ? O.delay = W + parseFloat(O.stagger) * t : v.isFunction(O.stagger) && (O.delay = W + O.stagger.call(e, t, S)), O.drag && (O.duration = parseFloat(Y) || (/^(callout|transition)/.test(g) ? 1e3 : m), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / S : (t + 1) / S), .75 * O.duration, 200)), b.Redirects[g].call(e, e, O || {}, t, S, h, k.promise ? k : i)
                                    }), t()
                                }
                                var M = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return k.promise ? k.rejecter(new Error(M)) : console.log(M), t()
                            }
                            A = "start"
                    }
                    var I = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        L = [];
                    p.each(h, function(t, e) {
                        v.isNode(e) && r.call(e)
                    });
                    var R, O = p.extend({}, b.defaults, y);
                    if (O.loop = parseInt(O.loop), R = 2 * O.loop - 1, O.loop)
                        for (var V = 0; R > V; V++) {
                            var H = {
                                delay: O.delay,
                                progress: O.progress
                            };
                            V === R - 1 && (H.display = O.display, H.visibility = O.visibility, H.complete = O.complete), T(h, "reverse", H)
                        }
                    return t()
                }
            };
            b = p.extend(T, b), b.animate = T;
            var S = e.requestAnimationFrame || h;
            return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                n.hidden ? (S = function(t) {
                    return setTimeout(function() {
                        t(!0)
                    }, 16)
                }, u()) : S = e.requestAnimationFrame || h
            }), t.Velocity = b, t !== e && (t.fn.velocity = T, t.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function(t, e) {
                b.Redirects["slide" + e] = function(t, n, r, o, a, s) {
                    var l = p.extend({}, n),
                        c = l.begin,
                        u = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        f = {};
                    l.display === i && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                        c && c.call(a, a);
                        for (var n in d) {
                            f[n] = t.style[n];
                            var i = b.CSS.getPropertyValue(t, n);
                            d[n] = "Down" === e ? [i, 0] : [0, i]
                        }
                        f.overflow = t.style.overflow, t.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var e in f) t.style[e] = f[e];
                        u && u.call(a, a), s && s.resolver(a)
                    }, b(t, d, l)
                }
            }), p.each(["In", "Out"], function(t, e) {
                b.Redirects["fade" + e] = function(t, n, r, o, a, s) {
                    var l = p.extend({}, n),
                        c = {
                            opacity: "In" === e ? 1 : 0
                        },
                        u = l.complete;
                    l.complete = r !== o - 1 ? l.begin = null : function() {
                        u && u.call(a, a), s && s.resolver(a)
                    }, l.display === i && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function() {
        var t, e, n, i, r, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            a = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var n, i;
                for (n in e) i = e[n], null == t[n] && (t[n] = i);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t.prototype.createEvent = function(t, e, n, i) {
                var r;
                return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = t) : r.eventName = t, r
            }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
            }, t.prototype.addEvent = function(t, e, n) {
                return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
            }, t.prototype.removeEvent = function(t, e, n) {
                return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
            }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, t
        }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, n, i, r, o;
                for (o = this.keys, e = i = 0, r = o.length; i < r; e = ++i)
                    if (n = o[e], n === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var n, i, r, o, a;
                for (a = this.keys, n = r = 0, o = a.length; r < o; n = ++r)
                    if (i = a[n], i === t) return void(this.values[n] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return t.notSupported = !0, t.prototype.observe = function() {}, t
        }()), i = this.getComputedStyle || function(t, e) {
            return this.getPropertyValue = function(e) {
                var n;
                return "float" === e && (e = "styleFloat"), r.test(e) && e.replace(r, function(t, e) {
                    return e.toUpperCase()
                }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
            }, this
        }, r = /(\-([a-z]){1})/g, this.WOW = function() {
            function r(t) {
                null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return r.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, r.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, r.prototype.start = function() {
                var e, n, i, r;
                if (this.stopped = !1, this.boxes = function() {
                        var t, n, i, r;
                        for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], t = 0, n = i.length; t < n; t++) e = i[t], r.push(e);
                        return r
                    }.call(this), this.all = function() {
                        var t, n, i, r;
                        for (i = this.boxes, r = [], t = 0, n = i.length; t < n; t++) e = i[t], r.push(e);
                        return r
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (r = this.boxes, n = 0, i = r.length; n < i; n++) e = r[n], this.applyStyle(e, !0);
                if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t(function(t) {
                    return function(e) {
                        var n, i, r, o, a;
                        for (a = [], n = 0, i = e.length; n < i; n++) o = e[n], a.push(function() {
                            var t, e, n, i;
                            for (n = o.addedNodes || [], i = [], t = 0, e = n.length; t < e; t++) r = n[t], i.push(this.doSync(r));
                            return i
                        }.call(t));
                        return a
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }, r.prototype.stop = function() {
                if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
            }, r.prototype.sync = function(e) {
                if (t.notSupported) return this.doSync(this.element)
            }, r.prototype.doSync = function(t) {
                var e, n, i, r, o;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, r = t.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; n < i; n++) e = r[n], a.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                    return o
                }
            }, r.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
            }, r.prototype.applyStyle = function(t, e) {
                var n, i, r;
                return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), r = t.getAttribute("data-wow-iteration"), this.animate(function(o) {
                    return function() {
                        return o.customStyle(t, e, i, n, r)
                    }
                }(this))
            }, r.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), r.prototype.resetStyle = function() {
                var t, e, n, i, r;
                for (i = this.boxes, r = [], e = 0, n = i.length; e < n; e++) t = i[e], r.push(t.style.visibility = "visible");
                return r
            }, r.prototype.resetAnimation = function(t) {
                var e;
                if (t.type.toLowerCase().indexOf("animationend") >= 0) return e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()
            }, r.prototype.customStyle = function(t, e, n, i, r) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                    animationDuration: n
                }), i && this.vendorSet(t.style, {
                    animationDelay: i
                }), r && this.vendorSet(t.style, {
                    animationIterationCount: r
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(t, e) {
                var n, i, r, o;
                i = [];
                for (n in e) r = e[n], t["" + n] = r, i.push(function() {
                    var e, i, a, s;
                    for (a = this.vendors, s = [], e = 0, i = a.length; e < i; e++) o = a[e], s.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                    return s
                }.call(this));
                return i
            }, r.prototype.vendorCSS = function(t, e) {
                var n, r, o, a, s, l;
                for (s = i(t), a = s.getPropertyCSSValue(e), o = this.vendors, n = 0, r = o.length; n < r; n++) l = o[n], a = a || s.getPropertyCSSValue("-" + l + "-" + e);
                return a
            }, r.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (n) {
                    e = i(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, r.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, r.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, r.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, r.prototype.scrollCallback = function() {
                var t;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                        var e, n, i, r;
                        for (i = this.boxes, r = [], e = 0, n = i.length; e < n; e++) t = i[e], t && (this.isVisible(t) ? this.show(t) : r.push(t));
                        return r
                    }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
            }, r.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, r.prototype.isVisible = function(t) {
                var e, n, i, r, o;
                return n = t.getAttribute("data-wow-offset") || this.config.offset, o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, i <= r && e >= o
            }, r.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e
            }, r.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, r
        }()
    }.call(this), $(window).scroll(function() {
        $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
    }), $(function() {
        $("a.page-scroll").bind("click", function(t) {
            var e = $(this);
            $("html, body").stop().animate({
                scrollTop: $(e.attr("href")).offset().top
            }, 1500, "easeInOutExpo"), t.preventDefault()
        })
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
    }("object" == typeof global ? global : this, function() {
        "use strict";

        function t(t) {
            return null !== t && t === t.window
        }

        function e(e) {
            return t(e) ? e : 9 === e.nodeType && e.defaultView
        }

        function n(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }

        function i(t) {
            return n(t) && t.nodeType > 0
        }

        function r(t) {
            var e = p.call(t);
            return "[object String]" === e ? d(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : i(t) ? [t] : []
        }

        function o(t) {
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                o = t && t.ownerDocument;
            return n = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (r = t.getBoundingClientRect()), i = e(o), {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }
        }

        function a(t) {
            var e = "";
            for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
            return e
        }

        function s(t, e, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    r = n.getAttribute("data-y"),
                    o = n.getAttribute("data-scale"),
                    s = n.getAttribute("data-translate"),
                    l = Date.now() - Number(n.getAttribute("data-hold")),
                    c = 350 - l;
                c < 0 && (c = 0), "mousemove" === t.type && (c = 150);
                var u = "mousemove" === t.type ? 2500 : h.duration;
                setTimeout(function() {
                    var t = {
                        top: r + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": o + " " + s,
                        "-moz-transform": o + " " + s,
                        "-ms-transform": o + " " + s,
                        "-o-transform": o + " " + s,
                        transform: o + " " + s
                    };
                    n.setAttribute("style", a(t)), setTimeout(function() {
                        try {
                            e.removeChild(n)
                        } catch (t) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }

        function l(t) {
            if (g.allowEvent(t) === !1) return null;
            for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
                if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                    e = n;
                    break
                }
                n = n.parentElement
            }
            return e
        }

        function c(t) {
            var e = l(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (g.registerEvent(t), "touchstart" === t.type && h.delay) {
                    var n = !1,
                        i = setTimeout(function() {
                            i = null, h.show(t, e)
                        }, h.delay),
                        r = function(r) {
                            i && (clearTimeout(i), i = null, h.show(t, e)), n || (n = !0, h.hide(r, e))
                        },
                        o = function(t) {
                            i && (clearTimeout(i), i = null), r(t)
                        };
                    e.addEventListener("touchmove", o, !1), e.addEventListener("touchend", r, !1), e.addEventListener("touchcancel", r, !1)
                } else h.show(t, e), f && (e.addEventListener("touchend", h.hide, !1), e.addEventListener("touchcancel", h.hide, !1)), e.addEventListener("mouseup", h.hide, !1), e.addEventListener("mouseleave", h.hide, !1)
            }
        }
        var u = u || {},
            d = document.querySelectorAll.bind(document),
            p = Object.prototype.toString,
            f = "ontouchstart" in window,
            h = {
                duration: 750,
                delay: 200,
                show: function(t, e, n) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", e.appendChild(i);
                    var r = o(e),
                        s = 0,
                        l = 0;
                    "touches" in t && t.touches.length ? (s = t.touches[0].pageY - r.top, l = t.touches[0].pageX - r.left) : (s = t.pageY - r.top, l = t.pageX - r.left), l = l >= 0 ? l : 0, s = s >= 0 ? s : 0;
                    var c = "scale(" + e.clientWidth / 100 * 3 + ")",
                        u = "translate(0,0)";
                    n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", s), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
                    var d = {
                        top: s + "px",
                        left: l + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", a(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
                    var p = "mousemove" === t.type ? 2500 : h.duration;
                    d["-webkit-transition-duration"] = p + "ms", d["-moz-transition-duration"] = p + "ms", d["-o-transition-duration"] = p + "ms", d["transition-duration"] = p + "ms", i.setAttribute("style", a(d))
                },
                hide: function(t, e) {
                    e = e || this;
                    for (var n = e.getElementsByClassName("waves-rippling"), i = 0, r = n.length; i < r; i++) s(t, e, n[i])
                }
            },
            v = {
                input: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t);
                        var i = window.getComputedStyle(t, null),
                            r = i.color,
                            o = i.backgroundColor;
                        n.setAttribute("style", "color:" + r + ";background:" + o), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
                    }
                },
                img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        e.replaceChild(n, t), n.appendChild(t)
                    }
                }
            },
            g = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && g.touches && (e = !1), e
                },
                registerEvent: function(t) {
                    var e = t.type;
                    "touchstart" === e ? g.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() {
                        g.touches && (g.touches -= 1)
                    }, 500)
                }
            };
        return u.init = function(t) {
            var e = document.body;
            t = t || {}, "duration" in t && (h.duration = t.duration), "delay" in t && (h.delay = t.delay), f && (e.addEventListener("touchstart", c, !1), e.addEventListener("touchcancel", g.registerEvent, !1), e.addEventListener("touchend", g.registerEvent, !1)), e.addEventListener("mousedown", c, !1)
        }, u.attach = function(t, e) {
            t = r(t), "[object Array]" === p.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var n, i, o = 0, a = t.length; o < a; o++) n = t[o], i = n.tagName.toLowerCase(), ["input", "img"].indexOf(i) !== -1 && (v[i](n), n = n.parentElement), n.className.indexOf("waves-effect") === -1 && (n.className += " waves-effect" + e)
        }, u.ripple = function(t, e) {
            t = r(t);
            var n = t.length;
            if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n)
                for (var i, a, s, l = {}, c = 0, u = {
                        type: "mousedown",
                        button: 1
                    }, d = function(t, e) {
                        return function() {
                            h.hide(t, e)
                        }
                    }; c < n; c++)
                    if (i = t[c], a = e.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, s = o(i), l.x = s.left + a.x, l.y = s.top + a.y, u.pageX = l.x, u.pageY = l.y, h.show(u, i), e.wait >= 0 && null !== e.wait) {
                        var p = {
                            type: "mouseup",
                            button: 1
                        };
                        setTimeout(d(p, i), e.wait)
                    }
        }, u.calm = function(t) {
            t = r(t);
            for (var e = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = t.length; n < i; n++) h.hide(e, t[n])
        }, u.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(t)
        }, u
    }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
    function(t) {
        t(document).ready(function() {
            t(document).on("click.card", ".card", function(e) {
                t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        t(this).css({
                            display: "none"
                        })
                    }
                }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))
            })
        })
    }(jQuery), $(document).ready(function(t) {
        t(".card-share > a").on("click", function(e) {
            e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded")
        })
    }),
    function(t) {
        function e() {
            var e = +t(this).attr("length"),
                n = +t(this).val().length,
                i = n <= e;
            t(this).parent().find('span[class="character-counter"]').html(n + "/" + e), r(i, t(this))
        }

        function n(e) {
            var n = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            e.parent().append(n)
        }

        function i() {
            t(this).parent().find('span[class="character-counter"]').html("")
        }

        function r(t, e) {
            var n = e.hasClass("invalid");
            t && n ? e.removeClass("invalid") : t || n || (e.removeClass("valid"), e.addClass("invalid"))
        }
        t.fn.characterCounter = function() {
            return this.each(function() {
                var r = void 0 !== t(this).attr("length");
                r && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", i), n(t(this)))
            })
        }, t(document).ready(function() {
            t("input, textarea").characterCounter()
        })
    }(jQuery), $(".smooth-scroll").on("click", "a", function(t) {
        t.preventDefault();
        var e = $(this).attr("href"),
            n = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0;
        $("body,html").animate({
            scrollTop: $(e).offset().top - n
        }, 700)
    }),
    function(t) {
        t.fn.scrollTo = function(e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function(e) {
            var n = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function i() {
                    void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"))
                }

                function r(e) {
                    "focus" === e && (l = !0), i(), c.addClass("active"), a.addClass("active"), s.constrain_width === !0 ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
                    var n = window.innerHeight,
                        r = a.innerHeight(),
                        o = a.offset().left,
                        u = a.offset().top - t(window).scrollTop(),
                        d = s.alignment,
                        p = 0,
                        f = 0,
                        h = 0;
                    s.belowOrigin === !0 && (h = r);
                    var v = 0,
                        g = a.parent();
                    if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (v = g[0].scrollTop), o + c.innerWidth() > t(window).width() ? d = "right" : o - c.innerWidth() + a.innerWidth() < 0 && (d = "left"), u + c.innerHeight() > n)
                        if (u + r - c.innerHeight() < 0) {
                            var m = n - u - h;
                            c.css("max-height", m)
                        } else h || (h += r), h -= c.innerHeight();
                    if ("left" === d) p = s.gutter, f = a.position().left + p;
                    else if ("right" === d) {
                        var y = a.position().left + a.outerWidth() - c.outerWidth();
                        p = -s.gutter, f = y + p
                    }
                    c.css({
                        position: "absolute",
                        top: a.position().top + h + v,
                        left: f
                    }), c.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function o() {
                    l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function() {
                        c.css("max-height", "")
                    }, s.outDuration)
                }
                var a = t(this),
                    s = t.extend({}, n, e),
                    l = !1,
                    c = t("#" + a.attr("data-activates"));
                if (i(), a.after(c), s.hover) {
                    var u = !1;
                    a.unbind("click." + a.attr("id")), a.on("mouseenter", function(t) {
                        u === !1 && (r(), u = !0)
                    }), a.on("mouseleave", function(e) {
                        var n = e.toElement || e.relatedTarget;
                        t(n).closest(".dropdown-content").is(c) || (c.stop(!0, !0), o(), u = !1)
                    }), c.on("mouseleave", function(e) {
                        var n = e.toElement || e.relatedTarget;
                        t(n).closest(".dropdown-button").is(a) || (c.stop(!0, !0), o(), u = !1)
                    })
                } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function(e) {
                    l || (a[0] != e.currentTarget || a.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? a.hasClass("active") && (o(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), r("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function(e) {
                        c.is(e.target) || a.is(e.target) || a.find(e.target).length || (o(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                    }))
                });
                a.on("open", function(t, e) {
                    r(e)
                }), a.on("close", o)
            })
        }, t(document).ready(function() {
            t(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var t = dropdownEffectData(this);
            dropdownEffectStart(t, t.effectIn)
        },
        "shown.bs.dropdown": function() {
            var t = dropdownEffectData(this);
            t.effectIn && t.effectOut && dropdownEffectEnd(t, function() {})
        },
        "hide.bs.dropdown": function(t) {
            var e = dropdownEffectData(this);
            e.effectOut && (t.preventDefault(), dropdownEffectStart(e, e.effectOut), dropdownEffectEnd(e, function() {
                e.dropdown.removeClass("open"), e.dropdown.removeClass("show")
            }))
        }
    }), $(".rotate-btn").on("click", function() {
        var t = $(this).attr("data-card");
        $("#" + t).toggleClass("flipped")
    }),
    function(t) {
        function e(e) {
            if ($this = e, $this.hasClass("active") === !1) {
                $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                    scaleY: ".4",
                    scaleX: ".4",
                    translateY: "40px"
                }, {
                    duration: 0
                });
                var n = 0;
                $this.find("ul .btn-floating").reverse().each(function() {
                    t(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 80,
                        delay: n
                    }), n += 40
                })
            } else {
                $this.removeClass("active");
                var n = 0;
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 80
                })
            }
        }
        t(document).ready(function() {
            t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
                var i = t(this);
                n(i)
            }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
                var n = t(this);
                i(n)
            }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(e) {
                var r = t(this),
                    o = r.parent();
                o.hasClass("active") ? i(o) : n(o)
            })
        }), t.fn.extend({
            openFAB: function() {
                n(t(this))
            },
            closeFAB: function() {
                i(t(this))
            }
        });
        var n = function(e) {
                if ($this = e, $this.hasClass("active") === !1) {
                    var n, i, r = $this.hasClass("horizontal");
                    r === !0 ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: n + "px",
                        translateX: i + "px"
                    }, {
                        duration: 0
                    });
                    var o = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        t(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: o
                        }), o += 40
                    })
                }
            },
            i = function(t) {
                $this = t;
                var e, n, i = $this.hasClass("horizontal");
                i === !0 ? n = 40 : e = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: e + "px",
                    translateX: n + "px"
                }, {
                    duration: 80
                })
            };
        t(".fixed-action-btn").on({
            click: function(n) {
                return n.preventDefault(), e(t(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(t, e, n, i) {
        "use strict";

        function r(t, e, n) {
            return setTimeout(c(t, n), e)
        }

        function o(t, e, n) {
            return !!Array.isArray(t) && (a(t, n[e], n), !0)
        }

        function a(t, e, n) {
            var r;
            if (t)
                if (t.forEach) t.forEach(e, n);
                else if (t.length !== i)
                for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
            else
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
        }

        function s(e, n, i) {
            var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
            return function() {
                var n = new Error("get-stack-trace"),
                    i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = t.console && (t.console.warn || t.console.log);
                return o && o.call(t.console, r, i), e.apply(this, arguments)
            }
        }

        function l(t, e, n) {
            var i, r = e.prototype;
            i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && dt(i, n)
        }

        function c(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function u(t, e) {
            return typeof t == ht ? t.apply(e ? e[0] || i : i, e) : t
        }

        function d(t, e) {
            return t === i ? e : t
        }

        function p(t, e, n) {
            a(g(e), function(e) {
                t.addEventListener(e, n, !1)
            })
        }

        function f(t, e, n) {
            a(g(e), function(e) {
                t.removeEventListener(e, n, !1)
            })
        }

        function h(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function v(t, e) {
            return t.indexOf(e) > -1
        }

        function g(t) {
            return t.trim().split(/\s+/g)
        }

        function m(t, e, n) {
            if (t.indexOf && !n) return t.indexOf(e);
            for (var i = 0; i < t.length;) {
                if (n && t[i][n] == e || !n && t[i] === e) return i;
                i++
            }
            return -1
        }

        function y(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function b(t, e, n) {
            for (var i = [], r = [], o = 0; o < t.length;) {
                var a = e ? t[o][e] : t[o];
                m(r, a) < 0 && i.push(t[o]), r[o] = a, o++
            }
            return n && (i = e ? i.sort(function(t, n) {
                return t[e] > n[e]
            }) : i.sort()), i
        }

        function w(t, e) {
            for (var n, r, o = e[0].toUpperCase() + e.slice(1), a = 0; a < pt.length;) {
                if (n = pt[a], r = n ? n + o : e, r in t) return r;
                a++
            }
            return i
        }

        function x() {
            return wt++
        }

        function T(e) {
            var n = e.ownerDocument || e;
            return n.defaultView || n.parentWindow || t
        }

        function S(t, e) {
            var n = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                u(t.options.enable, [t]) && n.handler(e)
            }, this.init()
        }

        function C(t) {
            var e, n = t.options.inputClass;
            return new(e = n ? n : St ? H : Ct ? D : Tt ? q : V)(t, E)
        }

        function E(t, e, n) {
            var i = n.pointers.length,
                r = n.changedPointers.length,
                o = e & Ot && i - r === 0,
                a = e & (Wt | Mt) && i - r === 0;
            n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, P(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function P(t, e) {
            var n = t.session,
                i = e.pointers,
                r = i.length;
            n.firstInput || (n.firstInput = X(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = X(e) : 1 === r && (n.firstMultiple = !1);
            var o = n.firstInput,
                a = n.firstMultiple,
                s = a ? a.center : o.center,
                l = e.center = O(i);
            e.timeStamp = mt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = I(s, l), e.distance = M(s, l), k(n, e), e.offsetDirection = W(e.deltaX, e.deltaY);
            var c = Y(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = gt(c.x) > gt(c.y) ? c.x : c.y, e.scale = a ? R(a.pointers, i) : 1, e.rotation = a ? L(a.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, A(n, e);
            var u = t.element;
            h(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
        }

        function k(t, e) {
            var n = e.center,
                i = t.offsetDelta || {},
                r = t.prevDelta || {},
                o = t.prevInput || {};
            e.eventType !== Ot && o.eventType !== Wt || (r = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, i = t.offsetDelta = {
                x: n.x,
                y: n.y
            }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
        }

        function A(t, e) {
            var n, r, o, a, s = t.lastInterval || e,
                l = e.timeStamp - s.timeStamp;
            if (e.eventType != Mt && (l > Xt || s.velocity === i)) {
                var c = e.deltaX - s.deltaX,
                    u = e.deltaY - s.deltaY,
                    d = Y(l, c, u);
                r = d.x, o = d.y, n = gt(d.x) > gt(d.y) ? d.x : d.y, a = W(c, u), t.lastInterval = e
            } else n = s.velocity, r = s.velocityX, o = s.velocityY, a = s.direction;
            e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = a
        }

        function X(t) {
            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                clientX: vt(t.pointers[n].clientX),
                clientY: vt(t.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: mt(),
                pointers: e,
                center: O(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function O(t) {
            var e = t.length;
            if (1 === e) return {
                x: vt(t[0].clientX),
                y: vt(t[0].clientY)
            };
            for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
            return {
                x: vt(n / e),
                y: vt(i / e)
            }
        }

        function Y(t, e, n) {
            return {
                x: e / t || 0,
                y: n / t || 0
            }
        }

        function W(t, e) {
            return t === e ? It : gt(t) >= gt(e) ? t < 0 ? Lt : Rt : e < 0 ? Vt : Ht
        }

        function M(t, e, n) {
            n || (n = zt);
            var i = e[n[0]] - t[n[0]],
                r = e[n[1]] - t[n[1]];
            return Math.sqrt(i * i + r * r)
        }

        function I(t, e, n) {
            n || (n = zt);
            var i = e[n[0]] - t[n[0]],
                r = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(r, i) / Math.PI
        }

        function L(t, e) {
            return I(e[1], e[0], qt) + I(t[1], t[0], qt)
        }

        function R(t, e) {
            return M(e[0], e[1], qt) / M(t[0], t[1], qt)
        }

        function V() {
            this.evEl = $t, this.evWin = Qt, this.pressed = !1, S.apply(this, arguments)
        }

        function H() {
            this.evEl = Ut, this.evWin = Gt, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function N() {
            this.evTarget = Kt, this.evWin = Jt, this.started = !1, S.apply(this, arguments)
        }

        function j(t, e) {
            var n = y(t.touches),
                i = y(t.changedTouches);
            return e & (Wt | Mt) && (n = b(n.concat(i), "identifier", !0)), [n, i]
        }

        function D() {
            this.evTarget = ee, this.targetIds = {}, S.apply(this, arguments)
        }

        function z(t, e) {
            var n = y(t.touches),
                i = this.targetIds;
            if (e & (Ot | Yt) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var r, o, a = y(t.changedTouches),
                s = [],
                l = this.target;
            if (o = n.filter(function(t) {
                    return h(t.target, l)
                }), e === Ot)
                for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
            for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), e & (Wt | Mt) && delete i[a[r].identifier], r++;
            return s.length ? [b(o.concat(s), "identifier", !0), s] : void 0
        }

        function q() {
            S.apply(this, arguments);
            var t = c(this.handler, this);
            this.touch = new D(this.manager, t), this.mouse = new V(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function F(t, e) {
            t & Ot ? (this.primaryTouch = e.changedPointers[0].identifier, $.call(this, e)) : t & (Wt | Mt) && $.call(this, e)
        }

        function $(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var n = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(n);
                var i = this.lastTouches,
                    r = function() {
                        var t = i.indexOf(n);
                        t > -1 && i.splice(t, 1)
                    };
                setTimeout(r, ne)
            }
        }

        function Q(t) {
            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                var r = this.lastTouches[i],
                    o = Math.abs(e - r.x),
                    a = Math.abs(n - r.y);
                if (o <= ie && a <= ie) return !0
            }
            return !1
        }

        function B(t, e) {
            this.manager = t, this.set(e)
        }

        function _(t) {
            if (v(t, ce)) return ce;
            var e = v(t, ue),
                n = v(t, de);
            return e && n ? ce : e || n ? e ? ue : de : v(t, le) ? le : se
        }

        function U() {
            if (!oe) return !1;
            var e = {},
                n = t.CSS && t.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
                e[i] = !n || t.CSS.supports("touch-action", i)
            }), e
        }

        function G(t) {
            this.options = dt({}, this.defaults, t || {}), this.id = x(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = fe, this.simultaneous = {}, this.requireFail = []
        }

        function Z(t) {
            return t & ye ? "cancel" : t & ge ? "end" : t & ve ? "move" : t & he ? "start" : ""
        }

        function K(t) {
            return t == Ht ? "down" : t == Vt ? "up" : t == Lt ? "left" : t == Rt ? "right" : ""
        }

        function J(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }

        function tt() {
            G.apply(this, arguments)
        }

        function et() {
            tt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function nt() {
            tt.apply(this, arguments)
        }

        function it() {
            G.apply(this, arguments), this._timer = null, this._input = null
        }

        function rt() {
            tt.apply(this, arguments)
        }

        function ot() {
            tt.apply(this, arguments)
        }

        function at() {
            G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function st(t, e) {
            return e = e || {}, e.recognizers = d(e.recognizers, st.defaults.preset), new lt(t, e)
        }

        function lt(t, e) {
            this.options = dt({}, st.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = C(this), this.touchAction = new B(this, this.options.touchAction), ct(this, !0), a(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function ct(t, e) {
            var n = t.element;
            if (n.style) {
                var i;
                a(t.options.cssProps, function(r, o) {
                    i = w(n.style, o), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function ut(t, n) {
            var i = e.createEvent("Event");
            i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
        }
        var dt, pt = ["", "webkit", "Moz", "MS", "ms", "o"],
            ft = e.createElement("div"),
            ht = "function",
            vt = Math.round,
            gt = Math.abs,
            mt = Date.now;
        dt = "function" != typeof Object.assign ? function(t) {
            if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== i && null !== r)
                    for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
            }
            return e
        } : Object.assign;
        var yt = s(function(t, e, n) {
                for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]), o++;
                return t
            }, "extend", "Use `assign`."),
            bt = s(function(t, e) {
                return yt(t, e, !0)
            }, "merge", "Use `assign`."),
            wt = 1,
            xt = /mobile|tablet|ip(ad|hone|od)|android/i,
            Tt = "ontouchstart" in t,
            St = w(t, "PointerEvent") !== i,
            Ct = Tt && xt.test(navigator.userAgent),
            Et = "touch",
            Pt = "pen",
            kt = "mouse",
            At = "kinect",
            Xt = 25,
            Ot = 1,
            Yt = 2,
            Wt = 4,
            Mt = 8,
            It = 1,
            Lt = 2,
            Rt = 4,
            Vt = 8,
            Ht = 16,
            Nt = Lt | Rt,
            jt = Vt | Ht,
            Dt = Nt | jt,
            zt = ["x", "y"],
            qt = ["clientX", "clientY"];
        S.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(T(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
            }
        };
        var Ft = {
                mousedown: Ot,
                mousemove: Yt,
                mouseup: Wt
            },
            $t = "mousedown",
            Qt = "mousemove mouseup";
        l(V, S, {
            handler: function(t) {
                var e = Ft[t.type];
                e & Ot && 0 === t.button && (this.pressed = !0), e & Yt && 1 !== t.which && (e = Wt), this.pressed && (e & Wt && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: kt,
                    srcEvent: t
                }))
            }
        });
        var Bt = {
                pointerdown: Ot,
                pointermove: Yt,
                pointerup: Wt,
                pointercancel: Mt,
                pointerout: Mt
            },
            _t = {
                2: Et,
                3: Pt,
                4: kt,
                5: At
            },
            Ut = "pointerdown",
            Gt = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (Ut = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel"), l(H, S, {
            handler: function(t) {
                var e = this.store,
                    n = !1,
                    i = t.type.toLowerCase().replace("ms", ""),
                    r = Bt[i],
                    o = _t[t.pointerType] || t.pointerType,
                    a = o == Et,
                    s = m(e, t.pointerId, "pointerId");
                r & Ot && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : r & (Wt | Mt) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: o,
                    srcEvent: t
                }), n && e.splice(s, 1))
            }
        });
        var Zt = {
                touchstart: Ot,
                touchmove: Yt,
                touchend: Wt,
                touchcancel: Mt
            },
            Kt = "touchstart",
            Jt = "touchstart touchmove touchend touchcancel";
        l(N, S, {
            handler: function(t) {
                var e = Zt[t.type];
                if (e === Ot && (this.started = !0), this.started) {
                    var n = j.call(this, t, e);
                    e & (Wt | Mt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: Et,
                        srcEvent: t
                    })
                }
            }
        });
        var te = {
                touchstart: Ot,
                touchmove: Yt,
                touchend: Wt,
                touchcancel: Mt
            },
            ee = "touchstart touchmove touchend touchcancel";
        l(D, S, {
            handler: function(t) {
                var e = te[t.type],
                    n = z.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: Et,
                    srcEvent: t
                })
            }
        });
        var ne = 2500,
            ie = 25;
        l(q, S, {
            handler: function(t, e, n) {
                var i = n.pointerType == Et,
                    r = n.pointerType == kt;
                if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i) F.call(this, e, n);
                    else if (r && Q.call(this, n)) return;
                    this.callback(t, e, n)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var re = w(ft.style, "touchAction"),
            oe = re !== i,
            ae = "compute",
            se = "auto",
            le = "manipulation",
            ce = "none",
            ue = "pan-x",
            de = "pan-y",
            pe = U();
        B.prototype = {
            set: function(t) {
                t == ae && (t = this.compute()), oe && this.manager.element.style && pe[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return a(this.manager.recognizers, function(e) {
                    u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), _(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var i = this.actions,
                    r = v(i, ce) && !pe[ce],
                    o = v(i, de) && !pe[de],
                    a = v(i, ue) && !pe[ue];
                if (r) {
                    var s = 1 === t.pointers.length,
                        l = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (s && l && c) return
                }
                return a && o ? void 0 : r || o && n & Nt || a && n & jt ? this.preventSrc(e) : void 0
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var fe = 1,
            he = 2,
            ve = 4,
            ge = 8,
            me = ge,
            ye = 16,
            be = 32;
        G.prototype = {
            defaults: {},
            set: function(t) {
                return dt(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (o(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return o(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (o(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = J(t, this), m(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (o(t, "dropRequireFailure", this)) return this;
                t = J(t, this);
                var e = m(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function e(e) {
                    n.manager.emit(e, t)
                }
                var n = this,
                    i = this.state;
                i < ge && e(n.options.event + Z(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ge && e(n.options.event + Z(i))
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = be)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (be | fe))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = dt({}, t);
                return u(this.options.enable, [this, e]) ? (this.state & (me | ye | be) && (this.state = fe), this.state = this.process(e), void(this.state & (he | ve | ge | ye) && this.tryEmit(e))) : (this.reset(), void(this.state = be))
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, l(tt, G, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    n = t.eventType,
                    i = e & (he | ve),
                    r = this.attrTest(t);
                return i && (n & Mt || !r) ? e | ye : i || r ? n & Wt ? e | ge : e & he ? e | ve : he : be
            }
        }), l(et, tt, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Dt
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & Nt && e.push(de), t & jt && e.push(ue), e
            },
            directionTest: function(t) {
                var e = this.options,
                    n = !0,
                    i = t.distance,
                    r = t.direction,
                    o = t.deltaX,
                    a = t.deltaY;
                return r & e.direction || (e.direction & Nt ? (r = 0 === o ? It : o < 0 ? Lt : Rt, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === a ? It : a < 0 ? Vt : Ht, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
            },
            attrTest: function(t) {
                return tt.prototype.attrTest.call(this, t) && (this.state & he || !(this.state & he) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = K(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), l(nt, tt, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ce]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & he)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), l(it, G, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [se]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    o = t.deltaTime > e.time;
                if (this._input = t, !i || !n || t.eventType & (Wt | Mt) && !o) this.reset();
                else if (t.eventType & Ot) this.reset(), this._timer = r(function() {
                    this.state = me, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & Wt) return me;
                return be
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === me && (t && t.eventType & Wt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(), this.manager.emit(this.options.event, this._input)))
            }
        }), l(rt, tt, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [ce]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & he)
            }
        }), l(ot, tt, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Nt | jt,
                pointers: 1
            },
            getTouchAction: function() {
                return et.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, n = this.options.direction;
                return n & (Nt | jt) ? e = t.overallVelocity : n & Nt ? e = t.overallVelocityX : n & jt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Wt
            },
            emit: function(t) {
                var e = K(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), l(at, G, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [le]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    o = t.deltaTime < e.time;
                if (this.reset(), t.eventType & Ot && 0 === this.count) return this.failTimeout();
                if (i && o && n) {
                    if (t.eventType != Wt) return this.failTimeout();
                    var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        s = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t;
                    var l = this.count % e.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = me, this.tryEmit()
                    }, e.interval, this), he) : me
                }
                return be
            },
            failTimeout: function() {
                return this._timer = r(function() {
                    this.state = be
                }, this.options.interval, this), be
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == me && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), st.VERSION = "2.0.7", st.defaults = {
            domEvents: !1,
            touchAction: ae,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [rt, {
                    enable: !1
                }],
                [nt, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ot, {
                    direction: Nt
                }],
                [et, {
                        direction: Nt
                    },
                    ["swipe"]
                ],
                [at],
                [at, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [it]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var we = 1,
            xe = 2;
        lt.prototype = {
            set: function(t) {
                return dt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? xe : we
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, i = this.recognizers,
                        r = e.curRecognizer;
                    (!r || r && r.state & me) && (r = e.curRecognizer = null);
                    for (var o = 0; o < i.length;) n = i[o], e.stopped === xe || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (he | ve | ge) && (r = e.curRecognizer = n), o++
                }
            },
            get: function(t) {
                if (t instanceof G) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t) return e[n];
                return null
            },
            add: function(t) {
                if (o(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (o(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        n = m(e, t);
                    n !== -1 && (e.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== i && e !== i) {
                    var n = this.handlers;
                    return a(g(t), function(t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== i) {
                    var n = this.handlers;
                    return a(g(t), function(t) {
                        e ? n[t] && n[t].splice(m(n[t], e), 1) : delete n[t]
                    }), this
                }
            },
            emit: function(t, e) {
                this.options.domEvents && ut(t, e);
                var n = this.handlers[t] && this.handlers[t].slice();
                if (n && n.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](e), i++
                }
            },
            destroy: function() {
                this.element && ct(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, dt(st, {
            INPUT_START: Ot,
            INPUT_MOVE: Yt,
            INPUT_END: Wt,
            INPUT_CANCEL: Mt,
            STATE_POSSIBLE: fe,
            STATE_BEGAN: he,
            STATE_CHANGED: ve,
            STATE_ENDED: ge,
            STATE_RECOGNIZED: me,
            STATE_CANCELLED: ye,
            STATE_FAILED: be,
            DIRECTION_NONE: It,
            DIRECTION_LEFT: Lt,
            DIRECTION_RIGHT: Rt,
            DIRECTION_UP: Vt,
            DIRECTION_DOWN: Ht,
            DIRECTION_HORIZONTAL: Nt,
            DIRECTION_VERTICAL: jt,
            DIRECTION_ALL: Dt,
            Manager: lt,
            Input: S,
            TouchAction: B,
            TouchInput: D,
            MouseInput: V,
            PointerEventInput: H,
            TouchMouseInput: q,
            SingleTouchInput: N,
            Recognizer: G,
            AttrRecognizer: tt,
            Tap: at,
            Pan: et,
            Swipe: ot,
            Pinch: nt,
            Rotate: rt,
            Press: it,
            on: p,
            off: f,
            each: a,
            merge: bt,
            extend: yt,
            assign: dt,
            inherit: l,
            bindFn: c,
            prefixed: w
        });
        var Te = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
        Te.Hammer = st, "function" == typeof define && define.amd ? define(function() {
            return st
        }) : "undefined" != typeof module && module.exports ? module.exports = st : t[n] = st
    }(window, document, "Hammer"),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function(t, e) {
        function n(n, i) {
            var r = t(n);
            r.data("hammer") || r.data("hammer", new e(r[0], i))
        }
        t.fn.hammer = function(t) {
            return this.each(function() {
                n(this, t)
            })
        }, e.Manager.prototype.emit = function(e) {
            return function(n, i) {
                e.call(this, n, i), t(this.element).trigger({
                    type: n,
                    gesture: i
                })
            }
        }(e.Manager.prototype.emit)
    }),
    function(t) {
        var e = {
            init: function(e) {
                var n = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                e = t.extend(n, e), t(this).each(function() {
                    function n(n) {
                        a = !1, s = !1, t("body").css({
                            overflow: "",
                            width: ""
                        }), t("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(this).remove()
                            }
                        }), "left" === e.edge ? (o.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), r.velocity({
                            translateX: "-100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", e.menuWidth))
                            }
                        })) : (o.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), r.velocity({
                            translateX: "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                n === !0 && (r.removeAttr("style"), r.css("width", e.menuWidth))
                            }
                        }))
                    }
                    var i = t(this),
                        r = t("#" + i.attr("data-activates"));
                    240 != e.menuWidth && r.css("width", e.menuWidth);
                    var o = t('<div class="drag-target"></div>');
                    t("body").append(o), "left" == e.edge ? (r.css("transform", "translateX(-100%)"), o.css({
                        left: 0
                    })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({
                        right: 0
                    })), r.hasClass("fixed") && window.innerWidth > 1440 && r.css("transform", "translateX(0)"), r.hasClass("fixed") && t(window).resize(function() {
                        window.innerWidth > 1440 ? 0 != t("#sidenav-overlay").length && s ? n(!0) : r.css("transform", "translateX(0%)") : s === !1 && ("left" === e.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"))
                    }), e.closeOnClick === !0 && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        n()
                    });
                    var a = !1,
                        s = !1;
                    o.on("click", function() {
                        n()
                    }), o.hammer({
                        prevent_default: !1
                    }).bind("pan", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var o = (i.gesture.direction, i.gesture.center.x),
                                a = (i.gesture.center.y, i.gesture.velocityX, t("body")),
                                l = a.innerWidth();
                            if (a.css("overflow", "hidden"), a.width(l), 0 === t("#sidenav-overlay").length) {
                                var c = t('<div id="sidenav-overlay"></div>');
                                c.css("opacity", 0).click(function() {
                                    n()
                                }), t("body").append(c)
                            }
                            if ("left" === e.edge && (o > e.menuWidth ? o = e.menuWidth : o < 0 && (o = 0)), "left" === e.edge) o < e.menuWidth / 2 ? s = !1 : o >= e.menuWidth / 2 && (s = !0), r.css("transform", "translateX(" + (o - e.menuWidth) + "px)");
                            else {
                                o < window.innerWidth - e.menuWidth / 2 ? s = !0 : o >= window.innerWidth - e.menuWidth / 2 && (s = !1);
                                var u = o - e.menuWidth / 2;
                                u < 0 && (u = 0), r.css("transform", "translateX(" + u + "px)")
                            }
                            var d;
                            "left" === e.edge ? (d = o / e.menuWidth, t("#sidenav-overlay").velocity({
                                opacity: d
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (d = Math.abs((o - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({
                                opacity: d
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(n) {
                        if ("touch" == n.gesture.pointerType) {
                            var i = n.gesture.velocityX,
                                l = n.gesture.center.x,
                                c = l - e.menuWidth,
                                u = l - e.menuWidth / 2;
                            c > 0 && (c = 0), u < 0 && (u = 0), a = !1, "left" === e.edge ? s && i <= .3 || i < -.5 ? (0 != c && r.velocity({
                                translateX: [0, c]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!s || i > .3) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), r.velocity({
                                translateX: [-1 * e.menuWidth - 10, c]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : s && i >= -.3 || i > .5 ? (r.velocity({
                                translateX: [0, u]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!s || i < -.3) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), r.velocity({
                                translateX: [e.menuWidth + 10, u]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), i.click(function() {
                        if (s === !0) s = !1, a = !1, n();
                        else {
                            var i = t("body"),
                                l = i.innerWidth();
                            i.css("overflow", "hidden"), i.width(l), t("body").append(o), "left" === e.edge ? (o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), r.velocity({
                                translateX: [0, -1 * e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), r.velocity({
                                translateX: [0, e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }));
                            var c = t('<div id="sidenav-overlay"></div>');
                            c.css("opacity", 0).click(function() {
                                s = !1, a = !1, n(), c.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        t(this).remove()
                                    }
                                })
                            }), t("body").append(c), c.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    s = !0, a = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                t("#sidenav-overlay").trigger("click")
            }
        };
        t.fn.sideNav = function(n) {
            return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        t.fn.collapsible = function(e) {
            var n = {
                accordion: void 0
            };
            return e = t.extend(n, e), this.each(function() {
                function n(e) {
                    s = a.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function i(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function r(t) {
                    var e = o(t);
                    return e.length > 0
                }

                function o(t) {
                    return t.closest("li > .collapsible-header")
                }
                var a = t(this),
                    s = t(this).find("> li > .collapsible-header"),
                    l = a.data("collapsible");
                a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), e.accordion || "accordion" === l || void 0 === l ? (s = a.find("> li > .collapsible-header"), s.on("click.collapse", function(e) {
                    var i = t(e.target);
                    r(i) && (i = o(i)), i.toggleClass("active"), n(i)
                }), n(s.filter(".active").first())) : s.each(function() {
                    t(this).on("click.collapse", function(e) {
                        var n = t(e.target);
                        r(n) && (n = o(n)), n.toggleClass("active"), i(n)
                    }), t(this).hasClass("active") && i(t(this))
                })
            })
        }, t(document).ready(function() {
            t(".collapsible").collapsible()
        })
    }(jQuery), $(function() {
        var t = !0;
        $("#accordion").on("show.bs.collapse", function() {
            t && $("#accordion .in").collapse("hide")
        })
    }),
    function(t) {
        t(document).ready(function() {
            function e(e) {
                var n = e.css("font-family"),
                    r = e.css("font-size");
                r && i.css("font-size", r), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                var o = i.html().replace(/\n/g, "<br>");
                i.html(o), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height())
            }
            Materialize.updateTextFields = function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                t(e).each(function(e, n) {
                    t(n).val().length > 0 || n.autofocus || void 0 !== t(this).attr("placeholder") || t(n)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
                })
            };
            var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(document).on("change", n, function() {
                0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"), validate_field(t(this))
            }), t(document).ready(function() {
                Materialize.updateTextFields()
            }), t(document).on("reset", function(e) {
                var i = t(e.target);
                i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function() {
                    "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
                }), i.find("select.initialized").each(function() {
                    var t = i.find("option[selected]").text();
                    i.siblings("input.select-dropdown").val(t)
                }))
            }), t(document).on("focus", n, function() {
                t(this).siblings("label, i").addClass("active")
            }), t(document).on("blur", n, function() {
                var e = t(this);
                0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e)
            }), window.validate_field = function(t) {
                var e = void 0 !== t.attr("length"),
                    n = parseInt(t.attr("length")),
                    i = t.val().length;
                0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i <= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
            };
            var i = t(".hiddendiv").first();
            i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
            var r = ".materialize-textarea";
            t(r).each(function() {
                var n = t(this);
                n.val().length && e(n)
            }), t("body").on("keyup keydown autoresize", r, function() {
                e(t(this))
            }), t(document).on("change", '.file-field input[type="file"]', function() {
                for (var e = t(this).closest(".file-field"), n = e.find("input.file-path"), i = t(this)[0].files, r = [], o = 0; o < i.length; o++) r.push(i[o].name);
                n.val(r.join(", ")), n.trigger("change")
            });
            var o, a = "input[type=range]",
                s = !1;
            t(a).each(function() {
                var e = t('<span class="thumb"><span class="value"></span></span>');
                t(this).after(e)
            });
            var l = ".range-field";
            t(document).on("change", a, function(e) {
                var n = t(this).siblings(".thumb");
                n.find(".value").html(t(this).val())
            }), t(document).on("input mousedown touchstart", a, function(e) {
                var n = t(this).siblings(".thumb"),
                    i = t(this).outerWidth();
                n.length <= 0 && (n = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(n)), n.find(".value").html(t(this).val()), s = !0, t(this).addClass("active"), n.hasClass("active") || n.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== e.type && (o = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, o < 0 ? o = 0 : o > i && (o = i), n.addClass("active").css("left", o)), n.find(".value").html(t(this).val())
            }), t(document).on("mouseup touchend", l, function() {
                s = !1, t(this).removeClass("active")
            }), t(document).on("mousemove touchmove", l, function(e) {
                var n, i = t(this).children(".thumb");
                if (s) {
                    i.hasClass("active") || i.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                    var r = t(this).outerWidth();
                    n < 0 ? n = 0 : n > r && (n = r), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(a).val())
                }
            }), t(document).on("mouseout touchleave", l, function() {
                if (!s) {
                    var e = t(this).children(".thumb");
                    e.hasClass("active") && e.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), e.removeClass("active")
                }
            })
        }), t.fn.material_select = function(e) {
            function n(t, e, n) {
                var r = t.indexOf(e),
                    o = r === -1;
                return o ? t.push(e) : t.splice(r, 1), n.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), n.find("option").eq(e).prop("selected", o), i(t, n), o
            }

            function i(t, e) {
                for (var n = "", i = 0, r = t.length; i < r; i++) {
                    var o = e.find("option").eq(t[i]).text();
                    n += 0 === i ? o : ", " + o
                }
                "" === n && (n = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(n)
            }
            t(this).each(function() {
                var i = t(this);
                if (!i.hasClass("browser-default")) {
                    var r = !!i.attr("multiple"),
                        o = i.data("select-id");
                    if (o && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), t("ul#select-options-" + o).remove()), "destroy" === e) return void i.data("select-id", null).removeClass("initialized");
                    var a = Materialize.guid();
                    i.data("select-id", a);
                    var s = t('<div class="select-wrapper"></div>');
                    s.addClass(i.attr("class"));
                    var l = t('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                        c = i.children("option, optgroup"),
                        u = [],
                        d = !1,
                        p = i.find("option:selected").html() || i.find("option:first").html() || "",
                        f = function() {
                            var e = t(this).closest("ul"),
                                n = t(this).val(),
                                i = e.find("li").find("span.filtrable");
                            i.each(function() {
                                if ("string" == typeof this.outerText) {
                                    var e = this.outerText.toLowerCase();
                                    e.indexOf(n.toLowerCase()) === -1 ? (t(this).hide(), t(this).parent().hide()) : (t(this).show(), t(this).parent().show())
                                }
                            })
                        },
                        h = function() {
                            var e = i.attr("searchable"),
                                n = t('<span><input type="text" class="search" style="margin: 5px 0px 16px 15px; width: 96%;" placeholder="' + e + '"></span>');
                            l.append(n), n.find(".search").keyup(f)
                        },
                        v = !!i.attr("searchable");
                    v && h();
                    var g = function(e, n, i) {
                        var r = n.is(":disabled") ? "disabled " : "",
                            o = "optgroup-option" === i ? "optgroup-option " : "",
                            a = n.data("icon"),
                            s = n.attr("class");
                        if (a) {
                            var c = "";
                            return s && (c = ' class="' + s + '"'), "multiple" === i ? l.append(t('<li class="' + r + '"><img alt="" src="' + a + '"' + c + '><span class="filtrable"><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(t('<li class="' + r + o + '"><img alt="" src="' + a + '"' + c + '><span class="filtrable">' + n.html() + "</span></li>")), !0
                        }
                        "multiple" === i ? l.append(t('<li class="' + r + '"><span class="filtrable"><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(t('<li class="' + r + o + '"><span class="filtrable">' + n.html() + "</span></li>"))
                    };
                    c.length && c.each(function() {
                        if (t(this).is("option")) r ? g(i, t(this), "multiple") : g(i, t(this));
                        else if (t(this).is("optgroup")) {
                            var e = t(this).children("option");
                            l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() {
                                g(i, t(this), "optgroup-option")
                            })
                        }
                    }), l.find("li:not(.optgroup)").each(function(o) {
                        t(this).click(function(a) {
                            if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                var s = !0;
                                r ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                    return !e
                                }), s = n(u, t(this).index() - 1, i), b.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), b.val(t(this).text())), w(l, t(this)), i.find("option").eq(o).prop("selected", s), i.trigger("change"), "undefined" != typeof e && e()
                            }
                            a.stopPropagation()
                        })
                    }), i.wrap(s);
                    var m = t('<span class="caret">&#9660;</span>');
                    i.is(":disabled") && m.addClass("disabled");
                    var y = p.replace(/"/g, "&quot;"),
                        b = t('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + y + '"/>');
                    i.before(b), b.before(m), b.after(l), i.is(":disabled") || b.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), i.attr("tabindex") && t(b[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), b.on({
                        focus: function() {
                            if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                                t(this).trigger("open", ["focus"]);
                                var e = t(this).val(),
                                    n = l.find("li").filter(function() {
                                        return t(this).text().toLowerCase() === e.toLowerCase()
                                    })[0];
                                w(l, n)
                            }
                        },
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }), b.on("blur", function() {
                        r || v || t(this).trigger("close"), l.find("li.selected").removeClass("selected")
                    }), !r && v && l.find("li").on("click", function() {
                        b.trigger("close")
                    }), l.hover(function() {
                        d = !0
                    }, function() {
                        d = !1
                    }), t(window).on({
                        click: function() {
                            (r || v) && (d || b.trigger("close"))
                        }
                    }), r && i.find("option:selected:not(:disabled)").each(function() {
                        var e = t(this).index();
                        n(u, e, i), l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                    });
                    var w = function(e, n) {
                            if (n) {
                                e.find("li.selected").removeClass("selected");
                                var i = t(n);
                                i.addClass("selected"), l.scrollTo(i)
                            }
                        },
                        x = [],
                        T = function(e) {
                            if (9 == e.which) return void b.trigger("close");
                            if (40 == e.which && !l.is(":visible")) return void b.trigger("open");
                            if (13 != e.which || l.is(":visible")) {
                                e.preventDefault();
                                var n = String.fromCharCode(e.which).toLowerCase(),
                                    i = [9, 13, 27, 38, 40];
                                if (n && i.indexOf(e.which) === -1) {
                                    x.push(n);
                                    var o = x.join(""),
                                        a = l.find("li").filter(function() {
                                            return 0 === t(this).text().toLowerCase().indexOf(o)
                                        })[0];
                                    a && w(l, a)
                                }
                                if (13 == e.which) {
                                    var s = l.find("li.selected:not(.disabled)")[0];
                                    s && (t(s).trigger("click"), r || b.trigger("close"))
                                }
                                40 == e.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], w(l, a)), 27 == e.which && b.trigger("close"), 38 == e.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0], a && w(l, a)), setTimeout(function() {
                                    x = []
                                }, 1e3)
                            }
                        };
                    b.on("keydown", T)
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(t) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
    }),
    function(t) {
        t.fn.sticky = function(e) {
            function n() {
                return "number" == typeof o.zIndex
            }

            function i() {
                return 0 < t(o.stopper).length || "number" == typeof o.stopper
            }
            var r = {
                    topSpacing: 0,
                    zIndex: "",
                    stopper: ".sticky-stopper"
                },
                o = t.extend({}, r, e),
                a = n(),
                s = i();
            return this.each(function() {
                function e() {
                    var e = f.scrollTop();
                    if (s && "string" == typeof p) var r = t(p).offset().top,
                        o = r - i - l;
                    else if (s && "number" == typeof p) var o = p;
                    if (u < e) {
                        if (n.after(d).css({
                                position: "fixed",
                                top: l
                            }), a && n.css({
                                zIndex: c
                            }), s && o < e) {
                            var h = o - e + l;
                            n.css({
                                top: h
                            })
                        }
                    } else n.css({
                        position: "static",
                        top: null,
                        left: null
                    }), d.remove()
                }
                var n = t(this),
                    i = n.outerHeight(),
                    r = n.outerWidth(),
                    l = o.topSpacing,
                    c = o.zIndex,
                    u = n.offset().top - l,
                    d = t("<div></div>").width(r).height(i).addClass("sticky-placeholder"),
                    p = o.stopper,
                    f = t(window);
                f.bind("scroll", e)
            })
        }
    }(jQuery), ! function t(e, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {
                    exports: {}
                };
                e[a][0].call(u.exports, function(t) {
                    var n = e[a][1][t];
                    return r(n ? n : t)
                }, u, u.exports, t, e, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(t, e, n) {
            "use strict";
            var i = t("../main");
            "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, "undefined" == typeof window.Ps && (window.Ps = i))
        }, {
            "../main": 7
        }],
        2: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                var n = t.className.split(" ");
                n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
            }

            function r(t, e) {
                var n = t.className.split(" "),
                    i = n.indexOf(e);
                i >= 0 && n.splice(i, 1), t.className = n.join(" ")
            }
            n.add = function(t, e) {
                t.classList ? t.classList.add(e) : i(t, e)
            }, n.remove = function(t, e) {
                t.classList ? t.classList.remove(e) : r(t, e)
            }, n.list = function(t) {
                return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
            }
        }, {}],
        3: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                return window.getComputedStyle(t)[e]
            }

            function r(t, e, n) {
                return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
            }

            function o(t, e) {
                for (var n in e) {
                    var i = e[n];
                    "number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
                }
                return t
            }
            var a = {};
            a.e = function(t, e) {
                var n = document.createElement(t);
                return n.className = e, n
            }, a.appendTo = function(t, e) {
                return e.appendChild(t), t
            }, a.css = function(t, e, n) {
                return "object" == typeof e ? o(t, e) : "undefined" == typeof n ? i(t, e) : r(t, e, n)
            }, a.matches = function(t, e) {
                return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
            }, a.remove = function(t) {
                "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
            }, a.queryChildren = function(t, e) {
                return Array.prototype.filter.call(t.childNodes, function(t) {
                    return a.matches(t, e)
                })
            }, e.exports = a
        }, {}],
        4: [function(t, e, n) {
            "use strict";
            var i = function(t) {
                this.element = t, this.events = {}
            };
            i.prototype.bind = function(t, e) {
                "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
            }, i.prototype.unbind = function(t, e) {
                var n = "undefined" != typeof e;
                this.events[t] = this.events[t].filter(function(i) {
                    return !(!n || i === e) || (this.element.removeEventListener(t, i, !1), !1)
                }, this)
            }, i.prototype.unbindAll = function() {
                for (var t in this.events) this.unbind(t)
            };
            var r = function() {
                this.eventElements = []
            };
            r.prototype.eventElement = function(t) {
                var e = this.eventElements.filter(function(e) {
                    return e.element === t
                })[0];
                return "undefined" == typeof e && (e = new i(t), this.eventElements.push(e)), e
            }, r.prototype.bind = function(t, e, n) {
                this.eventElement(t).bind(e, n)
            }, r.prototype.unbind = function(t, e, n) {
                this.eventElement(t).unbind(e, n)
            }, r.prototype.unbindAll = function() {
                for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
            }, r.prototype.once = function(t, e, n) {
                var i = this.eventElement(t),
                    r = function(t) {
                        i.unbind(e, r), n(t)
                    };
                i.bind(e, r)
            }, e.exports = r
        }, {}],
        5: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                function t() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
                }
            }()
        }, {}],
        6: [function(t, e, n) {
            "use strict";
            var i = t("./class"),
                r = t("./dom"),
                o = n.toInt = function(t) {
                    return parseInt(t, 10) || 0
                },
                a = n.clone = function(t) {
                    if (null === t) return null;
                    if (t.constructor === Array) return t.map(a);
                    if ("object" == typeof t) {
                        var e = {};
                        for (var n in t) e[n] = a(t[n]);
                        return e
                    }
                    return t
                };
            n.extend = function(t, e) {
                var n = a(t);
                for (var i in e) n[i] = a(e[i]);
                return n
            }, n.isEditable = function(t) {
                return r.matches(t, "input,[contenteditable]") || r.matches(t, "select,[contenteditable]") || r.matches(t, "textarea,[contenteditable]") || r.matches(t, "button,[contenteditable]")
            }, n.removePsClasses = function(t) {
                for (var e = i.list(t), n = 0; n < e.length; n++) {
                    var r = e[n];
                    0 === r.indexOf("ps-") && i.remove(t, r)
                }
            }, n.outerWidth = function(t) {
                return o(r.css(t, "width")) + o(r.css(t, "paddingLeft")) + o(r.css(t, "paddingRight")) + o(r.css(t, "borderLeftWidth")) + o(r.css(t, "borderRightWidth"))
            }, n.startScrolling = function(t, e) {
                i.add(t, "ps-in-scrolling"), "undefined" != typeof e ? i.add(t, "ps-" + e) : (i.add(t, "ps-x"), i.add(t, "ps-y"))
            }, n.stopScrolling = function(t, e) {
                i.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? i.remove(t, "ps-" + e) : (i.remove(t, "ps-x"), i.remove(t, "ps-y"))
            }, n.env = {
                isWebKit: "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                supportsIePointer: null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(t, e, n) {
            "use strict";
            var i = t("./plugin/destroy"),
                r = t("./plugin/initialize"),
                o = t("./plugin/update");
            e.exports = {
                initialize: r,
                update: o,
                destroy: i
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(t, e, n) {
            "use strict";
            e.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                stopPropagationOnClick: !0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(t, e, n) {
            "use strict";
            var i = t("../lib/helper"),
                r = t("../lib/dom"),
                o = t("./instances");
            e.exports = function(t) {
                var e = o.get(t);
                e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), i.removePsClasses(t), o.remove(t))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                function n(t) {
                    return t.getBoundingClientRect()
                }
                var i = function(t) {
                    t.stopPropagation()
                };
                e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", i), e.event.bind(e.scrollbarYRail, "click", function(i) {
                    var o = r.toInt(e.scrollbarYHeight / 2),
                        l = e.railYRatio * (i.pageY - window.pageYOffset - n(e.scrollbarYRail).top - o),
                        c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                        u = l / c;
                    u < 0 ? u = 0 : u > 1 && (u = 1), s(t, "top", (e.contentHeight - e.containerHeight) * u), a(t), i.stopPropagation()
                }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", i), e.event.bind(e.scrollbarXRail, "click", function(i) {
                    var o = r.toInt(e.scrollbarXWidth / 2),
                        l = e.railXRatio * (i.pageX - window.pageXOffset - n(e.scrollbarXRail).left - o),
                        c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                        u = l / c;
                    u < 0 ? u = 0 : u > 1 && (u = 1), s(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), a(t), i.stopPropagation()
                })
            }
            var r = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                s = t("../update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                i(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                function n(n) {
                    var r = i + n * e.railXRatio,
                        a = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                    r < 0 ? e.scrollbarXLeft = 0 : r > a ? e.scrollbarXLeft = a : e.scrollbarXLeft = r;
                    var s = o.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                    c(t, "left", s)
                }
                var i = null,
                    r = null,
                    s = function(e) {
                        n(e.pageX - r), l(t), e.stopPropagation(), e.preventDefault()
                    },
                    u = function() {
                        o.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
                    };
                e.event.bind(e.scrollbarX, "mousedown", function(n) {
                    r = n.pageX, i = o.toInt(a.css(e.scrollbarX, "left")) * e.railXRatio, o.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                })
            }

            function r(t, e) {
                function n(n) {
                    var r = i + n * e.railYRatio,
                        a = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                    r < 0 ? e.scrollbarYTop = 0 : r > a ? e.scrollbarYTop = a : e.scrollbarYTop = r;
                    var s = o.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                    c(t, "top", s)
                }
                var i = null,
                    r = null,
                    s = function(e) {
                        n(e.pageY - r), l(t), e.stopPropagation(), e.preventDefault()
                    },
                    u = function() {
                        o.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
                    };
                e.event.bind(e.scrollbarY, "mousedown", function(n) {
                    r = n.pageY, i = o.toInt(a.css(e.scrollbarY, "top")) * e.railYRatio, o.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
                })
            }
            var o = t("../../lib/helper"),
                a = t("../../lib/dom"),
                s = t("../instances"),
                l = t("../update-geometry"),
                c = t("../update-scroll");
            e.exports = function(t) {
                var e = s.get(t);
                i(t, e), r(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                function n(n, i) {
                    var r = t.scrollTop;
                    if (0 === n) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                    }
                    var o = t.scrollLeft;
                    if (0 === i) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }
                var i = !1;
                e.event.bind(t, "mouseenter", function() {
                    i = !0
                }), e.event.bind(t, "mouseleave", function() {
                    i = !1
                });
                var a = !1;
                e.event.bind(e.ownerDocument, "keydown", function(c) {
                    if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                        var u = o.matches(e.scrollbarX, ":focus") || o.matches(e.scrollbarY, ":focus");
                        if (i || u) {
                            var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (d) {
                                if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                                else
                                    for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                                if (r.isEditable(d)) return
                            }
                            var p = 0,
                                f = 0;
                            switch (c.which) {
                                case 37:
                                    p = -30;
                                    break;
                                case 38:
                                    f = 30;
                                    break;
                                case 39:
                                    p = 30;
                                    break;
                                case 40:
                                    f = -30;
                                    break;
                                case 33:
                                    f = 90;
                                    break;
                                case 32:
                                    f = c.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    f = -90;
                                    break;
                                case 35:
                                    f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                    break;
                                case 36:
                                    f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(t, "top", t.scrollTop - f), l(t, "left", t.scrollLeft + p), s(t), a = n(p, f), a && c.preventDefault()
                        }
                    }
                })
            }
            var r = t("../../lib/helper"),
                o = t("../../lib/dom"),
                a = t("../instances"),
                s = t("../update-geometry"),
                l = t("../update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                i(t, e)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                function n(n, i) {
                    var r = t.scrollTop;
                    if (0 === n) {
                        if (!e.scrollbarYActive) return !1;
                        if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                    }
                    var o = t.scrollLeft;
                    if (0 === i) {
                        if (!e.scrollbarXActive) return !1;
                        if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                    }
                    return !0
                }

                function i(t) {
                    var e = t.deltaX,
                        n = -1 * t.deltaY;
                    return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n]
                }

                function r(e, n) {
                    var i = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (i) {
                        if ("TEXTAREA" !== i.tagName && !window.getComputedStyle(i).overflow.match(/(scroll|auto)/)) return !1;
                        var r = i.scrollHeight - i.clientHeight;
                        if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && n < 0)) return !0;
                        var o = i.scrollLeft - i.clientWidth;
                        if (o > 0 && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === o && e > 0)) return !0
                    }
                    return !1
                }

                function s(s) {
                    var c = i(s),
                        u = c[0],
                        d = c[1];
                    r(u, d) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? a(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : a(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : a(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), l = !0) : (a(t, "top", t.scrollTop - d * e.settings.wheelSpeed), a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), o(t), l = l || n(u, d), l && (s.stopPropagation(), s.preventDefault()))
                }
                var l = !1;
                "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
            }
            var r = t("../instances"),
                o = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) {
                var e = r.get(t);
                i(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                e.event.bind(t, "scroll", function() {
                    o(t)
                })
            }
            var r = t("../instances"),
                o = t("../update-geometry");
            e.exports = function(t) {
                var e = r.get(t);
                i(t, e)
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                function n() {
                    var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
                }

                function i() {
                    c || (c = setInterval(function() {
                        return o.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void a(t)) : void clearInterval(c)
                    }, 50))
                }

                function l() {
                    c && (clearInterval(c), c = null), r.stopScrolling(t)
                }
                var c = null,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = !1;
                e.event.bind(e.ownerDocument, "selectionchange", function() {
                    t.contains(n()) ? d = !0 : (d = !1, l())
                }), e.event.bind(window, "mouseup", function() {
                    d && (d = !1, l())
                }), e.event.bind(window, "mousemove", function(e) {
                    if (d) {
                        var n = {
                                x: e.pageX,
                                y: e.pageY
                            },
                            o = {
                                left: t.offsetLeft,
                                right: t.offsetLeft + t.offsetWidth,
                                top: t.offsetTop,
                                bottom: t.offsetTop + t.offsetHeight
                            };
                        n.x < o.left + 3 ? (u.left = -5, r.startScrolling(t, "x")) : n.x > o.right - 3 ? (u.left = 5, r.startScrolling(t, "x")) : u.left = 0, n.y < o.top + 3 ? (o.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, r.startScrolling(t, "y")) : n.y > o.bottom - 3 ? (n.y - o.bottom + 3 < 5 ? u.top = 5 : u.top = 20, r.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
                    }
                })
            }
            var r = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                s = t("../update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                i(t, e)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(t, e, n) {
            "use strict";

            function i(t, e, n, i) {
                function r(n, i) {
                    var r = t.scrollTop,
                        o = t.scrollLeft,
                        a = Math.abs(n),
                        s = Math.abs(i);
                    if (s > a) {
                        if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return !e.settings.swipePropagation
                    } else if (a > s && (n < 0 && o === e.contentWidth - e.containerWidth || n > 0 && 0 === o)) return !e.settings.swipePropagation;
                    return !0
                }

                function l(e, n) {
                    s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), a(t)
                }

                function c() {
                    w = !0
                }

                function u() {
                    w = !1
                }

                function d(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function p(t) {
                    return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
                }

                function f(t) {
                    if (p(t)) {
                        x = !0;
                        var e = d(t);
                        g.pageX = e.pageX, g.pageY = e.pageY, m = (new Date).getTime(), null !== b && clearInterval(b), t.stopPropagation()
                    }
                }

                function h(t) {
                    if (!x && e.settings.swipePropagation && f(t), !w && x && p(t)) {
                        var n = d(t),
                            i = {
                                pageX: n.pageX,
                                pageY: n.pageY
                            },
                            o = i.pageX - g.pageX,
                            a = i.pageY - g.pageY;
                        l(o, a), g = i;
                        var s = (new Date).getTime(),
                            c = s - m;
                        c > 0 && (y.x = o / c, y.y = a / c, m = s), r(o, a) && (t.stopPropagation(), t.preventDefault())
                    }
                }

                function v() {
                    !w && x && (x = !1, clearInterval(b), b = setInterval(function() {
                        return o.get(t) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                    }, 10))
                }
                var g = {},
                    m = 0,
                    y = {},
                    b = null,
                    w = !1,
                    x = !1;
                n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", v)), i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", v)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", v)))
            }
            var r = t("../../lib/helper"),
                o = t("../instances"),
                a = t("../update-geometry"),
                s = t("../update-scroll");
            e.exports = function(t) {
                if (r.env.supportsTouch || r.env.supportsIePointer) {
                    var e = o.get(t);
                    i(t, e, r.env.supportsTouch, r.env.supportsIePointer)
                }
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(t, e, n) {
            "use strict";
            var i = t("../lib/helper"),
                r = t("../lib/class"),
                o = t("./instances"),
                a = t("./update-geometry"),
                s = {
                    "click-rail": t("./handler/click-rail"),
                    "drag-scrollbar": t("./handler/drag-scrollbar"),
                    keyboard: t("./handler/keyboard"),
                    wheel: t("./handler/mouse-wheel"),
                    touch: t("./handler/touch"),
                    selection: t("./handler/selection")
                },
                l = t("./handler/native-scroll");
            e.exports = function(t, e) {
                e = "object" == typeof e ? e : {}, r.add(t, "ps-container");
                var n = o.add(t);
                n.settings = i.extend(n.settings, e), r.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(e) {
                    s[e](t)
                }), l(t), a(t)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(t, e, n) {
            "use strict";

            function i(t) {
                function e() {
                    l.add(t, "ps-focus")
                }

                function n() {
                    l.remove(t, "ps-focus")
                }
                var i = this;
                i.settings = s.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(t, "direction"), i.isNegativeScroll = function() {
                    var e = t.scrollLeft,
                        n = null;
                    return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
                }(), i.negativeScrollAdjustment = i.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, i.event = new d, i.ownerDocument = t.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), i.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", e), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = s.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(u.css(i.scrollbarXRail, "marginLeft")) + s.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), i.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", e), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(u.css(i.scrollbarYRail, "marginTop")) + s.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
            }

            function r(t) {
                return t.getAttribute("data-ps-id")
            }

            function o(t, e) {
                t.setAttribute("data-ps-id", e)
            }

            function a(t) {
                t.removeAttribute("data-ps-id")
            }
            var s = t("../lib/helper"),
                l = t("../lib/class"),
                c = t("./default-setting"),
                u = t("../lib/dom"),
                d = t("../lib/event-manager"),
                p = t("../lib/guid"),
                f = {};
            n.add = function(t) {
                var e = p();
                return o(t, e), f[e] = new i(t), f[e]
            }, n.remove = function(t) {
                delete f[r(t)], a(t)
            }, n.get = function(t) {
                return f[r(t)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(t, e, n) {
            "use strict";

            function i(t, e) {
                return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
            }

            function r(t, e) {
                var n = {
                    width: e.railXWidth
                };
                e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
                var i = {
                    top: t.scrollTop,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, i), s.css(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }), s.css(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }
            var o = t("../lib/helper"),
                a = t("../lib/class"),
                s = t("../lib/dom"),
                l = t("./instances"),
                c = t("./update-scroll");
            e.exports = function(t) {
                var e = l.get(t);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
                var n;
                t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
                    s.remove(t)
                }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
                    s.remove(t)
                }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = i(e, o.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = o.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = i(e, o.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = o.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), r(t, e), e.scrollbarXActive ? a.add(t, "ps-active-x") : (a.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? a.add(t, "ps-active-y") : (a.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(t, e, n) {
            "use strict";
            var i, r, o = t("./instances"),
                a = document.createEvent("Event"),
                s = document.createEvent("Event"),
                l = document.createEvent("Event"),
                c = document.createEvent("Event"),
                u = document.createEvent("Event"),
                d = document.createEvent("Event"),
                p = document.createEvent("Event"),
                f = document.createEvent("Event"),
                h = document.createEvent("Event"),
                v = document.createEvent("Event");
            a.initEvent("ps-scroll-up", !0, !0), s.initEvent("ps-scroll-down", !0, !0), l.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), v.initEvent("ps-y-reach-end", !0, !0), e.exports = function(t, e, n) {
                if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
                if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
                if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
                "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(p));
                var g = o.get(t);
                "top" === e && n >= g.contentHeight - g.containerHeight && (n = g.contentHeight - g.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(v)), "left" === e && n >= g.contentWidth - g.containerWidth && (n = g.contentWidth - g.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(f)), i || (i = t.scrollTop), r || (r = t.scrollLeft), "top" === e && n < i && t.dispatchEvent(a), "top" === e && n > i && t.dispatchEvent(s), "left" === e && n < r && t.dispatchEvent(l), "left" === e && n > r && t.dispatchEvent(c), "top" === e && (t.scrollTop = i = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = r = n, t.dispatchEvent(d))
            }
        }, {
            "./instances": 18
        }],
        21: [function(t, e, n) {
            "use strict";
            var i = t("../lib/helper"),
                r = t("../lib/dom"),
                o = t("./instances"),
                a = t("./update-geometry"),
                s = t("./update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(r.css(e.scrollbarXRail, "marginLeft")) + i.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(r.css(e.scrollbarYRail, "marginTop")) + i.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), a(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]), $(function() {
        $(".arrow-r").on("click", function() {
            $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"), $(this).find(".fa-angle-down").toggleClass("rotate-element")
        })
    });