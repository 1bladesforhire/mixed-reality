<!doctype html>
<html class="no-js grunticon skrollr skrollr-desktop exp-singlestack-v2 picture eventlistener js" lang="en" dir="ltr">

<head>
    <title>Windows Mixed Reality</title>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Example page structure on Microsoft Web Framework">
    <meta name="keywords" content="Development Site">
    <meta name="author" content="Microsoft Corporation">

    
    <!-- Stylesheet requirements -->
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.2.min.js"></script>
    <link rel="stylesheet" href="https://statics-uhf-eus.akamaized.net/west-european/shell/_scrf/css/themes=default.device=uplevel_web_pc/66-41abaf/ad-ec92c6/98-847609/e9-c399ba/8e-9c6412/cc-c21898/9c-3df1cf?ver=2.0" type="text/css" media="all" />

    <!-- Include as a single optimized css file on CDN. -->

    <link rel="stylesheet" href="https://assets.onestore.ms/cdnfiles/external/mwf/short/v1/latest/css/mwf-west-european-default.min.css">
    <link rel="preload" as="font" crossorigin="crossorigin" type="font/woff" href="https://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.30.0/fonts/MWFMDL2.woff">
    <!-- Stylesheet additions -->
    <link rel="stylesheet" href="styles/main.min.css" type="text/css" media="all" />

    <script>
        /** vim: et:ts=4:sw=4:sts=4
         * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
         */
        var requirejs, require, define;
        (function(n) {
            function dt(n, t, i, r) {
                return r || ""
            }

            function l(n) {
                return st.call(n) === "[object Function]"
            }

            function a(n) {
                return st.call(n) === "[object Array]"
            }

            function u(n, t) {
                if (n)
                    for (var i = 0; i < n.length; i += 1)
                        if (n[i] && t(n[i], i, n)) break
            }

            function rt(n, t) {
                if (n)
                    for (var i = n.length - 1; i > -1; i -= 1)
                        if (n[i] && t(n[i], i, n)) break
            }

            function r(n, t) {
                return bt.call(n, t)
            }

            function i(n, t) {
                return r(n, t) && n[t]
            }

            function h(n, t) {
                for (var i in n)
                    if (r(n, i) && t(n[i], i)) break
            }

            function ut(n, t, i, u) {
                return t && h(t, function(t, f) {
                    (i || !r(n, f)) && (!u || typeof t != "object" || !t || a(t) || l(t) || t instanceof RegExp ? n[f] = t : (n[f] || (n[f] = {}), ut(n[f], t, i, u)))
                }), n
            }

            function f(n, t) {
                return function() {
                    return t.apply(n, arguments)
                }
            }

            function ft() {
                return document.getElementsByTagName("script")
            }

            function at(n) {
                throw n;
            }

            function vt(t) {
                if (!t) return t;
                var i = n;
                return u(t.split("."), function(n) {
                    i = i[n]
                }), i
            }

            function c(n, t, i, r) {
                var u = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + n);
                return u.requireType = n, u.requireModules = r, i && (u.originalError = i), u
            }

            function gt(e) {
                function yi(n) {
                    for (var i, t = 0; t < n.length; t++)
                        if (i = n[t], i === ".") n.splice(t, 1), t -= 1;
                        else if (i === "..")
                        if (t === 0 || t === 1 && n[2] === ".." || n[t - 1] === "..") continue;
                        else t > 0 && (n.splice(t - 1, 2), t -= 2)
                }

                function it(n, t, r) {
                    var w, f, o, e, h, c, l, s, b, a, k, d, u = t && t.split("/"),
                        y = v.map,
                        p = y && y["*"];
                    if (n && (n = n.split("/"), l = n.length - 1, v.nodeIdCompat && g.test(n[l]) && (n[l] = n[l].replace(g, "")), n[0].charAt(0) === "." && u && (d = u.slice(0, u.length - 1), n = d.concat(n)), yi(n), n = n.join("/")), r && y && (u || p)) {
                        o = n.split("/");
                        n: for (e = o.length; e > 0; e -= 1) {
                            if (c = o.slice(0, e).join("/"), u)
                                for (h = u.length; h > 0; h -= 1)
                                    if (f = i(y, u.slice(0, h).join("/")), f && (f = i(f, c), f)) {
                                        s = f;
                                        b = e;
                                        break n
                                    }!a && p && i(p, c) && (a = i(p, c), k = e)
                        }!s && a && (s = a, b = k);
                        s && (o.splice(0, b, s), n = o.join("/"))
                    }
                    return w = i(v.pkgs, n), w ? w : n
                }

                function ei(n) {
                    o && u(ft(), function(t) {
                        if (t.getAttribute("data-requiremodule") === n && t.getAttribute("data-requirecontext") === s.contextName) return t.parentNode.removeChild(t), !0
                    })
                }

                function ti(n) {
                    var t = i(v.paths, n);
                    if (t && a(t) && t.length > 1) return t.shift(), s.require.undef(n), s.makeRequire(null, {
                        skipMap: !0
                    })([n]), !0
                }

                function oi(n) {
                    var i, t = n ? n.indexOf("!") : -1;
                    return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n]
                }

                function k(n, t, r, u) {
                    var a, h, l, o, f = null,
                        c = t ? t.name : null,
                        y = n,
                        v = !0,
                        e = "";
                    return n || (v = !1, n = "_@r" + (ai += 1)), o = oi(n), f = o[0], n = o[1], f && (f = it(f, c, u), h = i(w, f)), n && (f ? e = h && h.normalize ? h.normalize(n, function(n) {
                        return it(n, c, u)
                    }) : n.indexOf("!") === -1 ? it(n, c, u) : n : (e = it(n, c, u), o = oi(e), f = o[0], e = o[1], r = !0, a = s.nameToUrl(e))), l = f && !h && !r ? "_unnormalized" + (vi += 1) : "", {
                        prefix: f,
                        name: e,
                        parentMap: t,
                        unnormalized: !!l,
                        url: a,
                        originalName: y,
                        isDefine: v,
                        id: (f ? f + "!" + e : e) + l
                    }
                }

                function ot(n) {
                    var r = n.id,
                        t = i(p, r);
                    return t || (t = p[r] = new s.Module(n)), t
                }

                function st(n, t, u) {
                    var e = n.id,
                        f = i(p, e);
                    if (r(w, e) && (!f || f.defineEmitComplete)) t === "defined" && u(w[e]);
                    else if (f = ot(n), f.error && t === "error") u(f.error);
                    else f.on(t, u)
                }

                function d(n, r) {
                    var e = n.requireModules,
                        f = !1;
                    if (r) r(n);
                    else if (u(e, function(t) {
                            var r = i(p, t);
                            r && (r.error = n, r.events.error && (f = !0, r.emit("error", n)))
                        }), !f) t.onError(n)
                }

                function ii() {
                    nt.length && (u(nt, function(n) {
                        var t = n[0];
                        typeof t == "string" && (s.defQueueMap[t] = !0);
                        tt.push(n)
                    }), nt = [])
                }

                function ri(n) {
                    delete p[n];
                    delete dt[n]
                }

                function si(n, t, r) {
                    var f = n.map.id;
                    n.error ? n.emit("error", n.error) : (t[f] = !0, u(n.depMaps, function(u, f) {
                        var e = u.id,
                            o = i(p, e);
                        !o || n.depMatched[f] || r[e] || (i(t, e) ? (n.defineDep(f, w[e]), n.check()) : si(o, t, r))
                    }), r[f] = !0)
                }

                function ui() {
                    var t, f, e = v.waitSeconds * 1e3,
                        i = e && s.startTime + e < (new Date).getTime(),
                        n = [],
                        l = [],
                        r = !1,
                        a = !0;
                    if (!yt) {
                        if (yt = !0, h(dt, function(t) {
                                var u = t.map,
                                    e = u.id;
                                if (t.enabled && (u.isDefine || l.push(t), !t.error))
                                    if (!t.inited && i) ti(e) ? (f = !0, r = !0) : (n.push(e), ei(e));
                                    else if (!t.inited && t.fetched && u.isDefine && (r = !0, !u.prefix)) return a = !1
                            }), i && n.length) return t = c("timeout", "Load timeout for modules: " + n, null, n), t.contextName = s.contextName, d(t);
                        a && u(l, function(n) {
                            si(n, {}, {})
                        });
                        (!i || f) && r && (o || ht) && !bt && (bt = setTimeout(function() {
                            bt = 0;
                            ui()
                        }, 50));
                        yt = !1
                    }
                }

                function fi(n) {
                    r(w, n[0]) || ot(k(n[0], null, !0)).init(n[1], n[2])
                }

                function hi(n, t, i, r) {
                    n.detachEvent && !lt ? r && n.detachEvent(r, t) : n.removeEventListener(i, t, !1)
                }

                function ci(n) {
                    var t = n.currentTarget || n.srcElement;
                    return hi(t, s.onScriptLoad, "load", "onreadystatechange"), hi(t, s.onScriptError, "error"), {
                        node: t,
                        id: t && t.getAttribute("data-requiremodule")
                    }
                }

                function li() {
                    var n;
                    for (ii(); tt.length;) {
                        if (n = tt.shift(), n[0] === null) return d(c("mismatch", "Mismatched anonymous define() module: " + n[n.length - 1]));
                        fi(n)
                    }
                    s.defQueueMap = {}
                }
                var yt, pt, s, et, bt, v = {
                        waitSeconds: 7,
                        baseUrl: "./",
                        paths: {},
                        bundles: {},
                        pkgs: {},
                        shim: {},
                        config: {}
                    },
                    p = {},
                    dt = {},
                    gt = {},
                    tt = [],
                    w = {},
                    ct = {},
                    ni = {},
                    ai = 1,
                    vi = 1;
                return et = {
                    require: function(n) {
                        return n.require ? n.require : n.require = s.makeRequire(n.map)
                    },
                    exports: function(n) {
                        return n.usingExports = !0, n.map.isDefine ? n.exports ? w[n.map.id] = n.exports : n.exports = w[n.map.id] = {} : void 0
                    },
                    module: function(n) {
                        return n.module ? n.module : n.module = {
                            id: n.map.id,
                            uri: n.map.url,
                            config: function() {
                                return i(v.config, n.map.id) || {}
                            },
                            exports: n.exports || (n.exports = {})
                        }
                    }
                }, pt = function(n) {
                    this.events = i(gt, n.id) || {};
                    this.map = n;
                    this.shim = i(v.shim, n.id);
                    this.depExports = [];
                    this.depMaps = [];
                    this.depMatched = [];
                    this.pluginMaps = {};
                    this.depCount = 0
                }, pt.prototype = {
                    init: function(n, t, i, r) {
                        if (r = r || {}, !this.inited) {
                            if (this.factory = t, i) this.on("error", i);
                            else this.events.error && (i = f(this, function(n) {
                                this.emit("error", n)
                            }));
                            this.depMaps = n && n.slice(0);
                            this.errback = i;
                            this.inited = !0;
                            this.ignore = r.ignore;
                            r.enabled || this.enabled ? this.enable() : this.check()
                        }
                    },
                    defineDep: function(n, t) {
                        this.depMatched[n] || (this.depMatched[n] = !0, this.depCount -= 1, this.depExports[n] = t)
                    },
                    fetch: function() {
                        if (!this.fetched) {
                            this.fetched = !0;
                            s.startTime = (new Date).getTime();
                            var n = this.map;
                            if (this.shim) s.makeRequire(this.map, {
                                enableBuildCallback: !0
                            })(this.shim.deps || [], f(this, function() {
                                return n.prefix ? this.callPlugin() : this.load()
                            }));
                            else return n.prefix ? this.callPlugin() : this.load()
                        }
                    },
                    load: function() {
                        var n = this.map.url;
                        ct[n] || (ct[n] = !0, s.load(this.map.id, n))
                    },
                    check: function() {
                        var h;
                        if (this.enabled && !this.enabling) {
                            var i, o, f = this.map.id,
                                c = this.depExports,
                                n = this.exports,
                                e = this.factory;
                            if (this.inited) {
                                if (this.error) this.emit("error", this.error);
                                else if (!this.defining) {
                                    if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                        if (l(e)) {
                                            if (this.events.error && this.map.isDefine || t.onError !== at) try {
                                                n = s.execCb(f, e, c, n)
                                            } catch (a) {
                                                i = a
                                            } else n = s.execCb(f, e, c, n);
                                            if (this.map.isDefine && n === undefined && (o = this.module, o ? n = o.exports : this.usingExports && (n = this.exports)), i) return i.requireMap = this.map, i.requireModules = this.map.isDefine ? [this.map.id] : null, i.requireType = this.map.isDefine ? "define" : "require", d(this.error = i)
                                        } else n = e;
                                        if (this.exports = n, this.map.isDefine && !this.ignore && (w[f] = n, t.onResourceLoad)) {
                                            h = [];
                                            u(this.depMaps, function(n) {
                                                h.push(n.normalizedMap || n)
                                            });
                                            t.onResourceLoad(s, this.map, h)
                                        }
                                        ri(f);
                                        this.defined = !0
                                    }
                                    this.defining = !1;
                                    this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                }
                            } else r(s.defQueueMap, f) || this.fetch()
                        }
                    },
                    callPlugin: function() {
                        var n = this.map,
                            u = n.id,
                            e = k(n.prefix);
                        this.depMaps.push(e);
                        st(e, "defined", f(this, function(e) {
                            var o, l, a, w = i(ni, this.map.id),
                                y = this.map.name,
                                nt = this.map.parentMap ? this.map.parentMap.name : null,
                                g = s.makeRequire(n.parentMap, {
                                    enableBuildCallback: !0
                                });
                            if (this.map.unnormalized) {
                                if (e.normalize && (y = e.normalize(y, function(n) {
                                        return it(n, nt, !0)
                                    }) || ""), l = k(n.prefix + "!" + y, this.map.parentMap), st(l, "defined", f(this, function(n) {
                                        this.map.normalizedMap = l;
                                        this.init([], function() {
                                            return n
                                        }, null, {
                                            enabled: !0,
                                            ignore: !0
                                        })
                                    })), a = i(p, l.id), a) {
                                    if (this.depMaps.push(l), this.events.error) a.on("error", f(this, function(n) {
                                        this.emit("error", n)
                                    }));
                                    a.enable()
                                }
                                return
                            }
                            if (w) {
                                this.map.url = s.nameToUrl(w);
                                this.load();
                                return
                            }
                            o = f(this, function(n) {
                                this.init([], function() {
                                    return n
                                }, null, {
                                    enabled: !0
                                })
                            });
                            o.error = f(this, function(n) {
                                this.inited = !0;
                                this.error = n;
                                n.requireModules = [u];
                                h(p, function(n) {
                                    n.map.id.indexOf(u + "_unnormalized") === 0 && ri(n.map.id)
                                });
                                d(n)
                            });
                            o.fromText = f(this, function(i, f) {
                                var e = n.name,
                                    h = k(e),
                                    l = b;
                                f && (i = f);
                                l && (b = !1);
                                ot(h);
                                r(v.config, u) && (v.config[e] = v.config[u]);
                                try {
                                    t.exec(i)
                                } catch (a) {
                                    return d(c("fromtexteval", "fromText eval for " + u + " failed: " + a, a, [u]))
                                }
                                l && (b = !0);
                                this.depMaps.push(h);
                                s.completeLoad(e);
                                g([e], o)
                            });
                            e.load(n.name, g, o, v)
                        }));
                        s.enable(e, this);
                        this.pluginMaps[e.id] = e
                    },
                    enable: function() {
                        dt[this.map.id] = this;
                        this.enabled = !0;
                        this.enabling = !0;
                        u(this.depMaps, f(this, function(n, t) {
                            var u, e, o;
                            if (typeof n == "string") {
                                if (n = k(n, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = n, o = i(et, n.id), o) {
                                    this.depExports[t] = o(this);
                                    return
                                }
                                this.depCount += 1;
                                st(n, "defined", f(this, function(n) {
                                    this.undefed || (this.defineDep(t, n), this.check())
                                }));
                                this.errback ? st(n, "error", f(this, this.errback)) : this.events.error && st(n, "error", f(this, function(n) {
                                    this.emit("error", n)
                                }))
                            }
                            u = n.id;
                            e = p[u];
                            r(et, u) || !e || e.enabled || s.enable(n, this)
                        }));
                        h(this.pluginMaps, f(this, function(n) {
                            var t = i(p, n.id);
                            t && !t.enabled && s.enable(n, this)
                        }));
                        this.enabling = !1;
                        this.check()
                    },
                    on: function(n, t) {
                        var i = this.events[n];
                        i || (i = this.events[n] = []);
                        i.push(t)
                    },
                    emit: function(n, t) {
                        u(this.events[n], function(n) {
                            n(t)
                        });
                        n === "error" && delete this.events[n]
                    }
                }, s = {
                    config: v,
                    contextName: e,
                    registry: p,
                    defined: w,
                    urlFetched: ct,
                    defQueue: tt,
                    defQueueMap: {},
                    Module: pt,
                    makeModuleMap: k,
                    nextTick: t.nextTick,
                    onError: d,
                    configure: function(n) {
                        var i, t, r;
                        n.baseUrl && n.baseUrl.charAt(n.baseUrl.length - 1) !== "/" && (n.baseUrl += "/");
                        typeof n.urlArgs == "string" && (i = n.urlArgs, n.urlArgs = function(n, t) {
                            return (t.indexOf("?") === -1 ? "?" : "&") + i
                        });
                        t = v.shim;
                        r = {
                            paths: !0,
                            bundles: !0,
                            config: !0,
                            map: !0
                        };
                        h(n, function(n, t) {
                            r[t] ? (v[t] || (v[t] = {}), ut(v[t], n, !0, !0)) : v[t] = n
                        });
                        n.bundles && h(n.bundles, function(n, t) {
                            u(n, function(n) {
                                n !== t && (ni[n] = t)
                            })
                        });
                        n.shim && (h(n.shim, function(n, i) {
                            a(n) && (n = {
                                deps: n
                            });
                            (n.exports || n.init) && !n.exportsFn && (n.exportsFn = s.makeShimExports(n));
                            t[i] = n
                        }), v.shim = t);
                        n.packages && u(n.packages, function(n) {
                            var i, t;
                            n = typeof n == "string" ? {
                                name: n
                            } : n;
                            t = n.name;
                            i = n.location;
                            i && (v.paths[t] = n.location);
                            v.pkgs[t] = n.name + "/" + (n.main || "main").replace(wt, "").replace(g, "")
                        });
                        h(p, function(n, t) {
                            n.inited || n.map.unnormalized || (n.map = k(t, null, !0))
                        });
                        (n.deps || n.callback) && s.require(n.deps || [], n.callback)
                    },
                    makeShimExports: function(t) {
                        function i() {
                            var i;
                            return t.init && (i = t.init.apply(n, arguments)), i || t.exports && vt(t.exports)
                        }
                        return i
                    },
                    makeRequire: function(n, u) {
                        function f(i, o, h) {
                            var a, y, v;
                            return (u.enableBuildCallback && o && l(o) && (o.__requireJsBuild = !0), typeof i == "string") ? l(o) ? d(c("requireargs", "Invalid require call"), h) : n && r(et, i) ? et[i](p[n.id]) : t.get ? t.get(s, i, n, f) : (y = k(i, n, !1, !0), a = y.id, !r(w, a)) ? d(c("notloaded", 'Module name "' + a + '" has not been loaded yet for context: ' + e + (n ? "" : ". Use require([])"))) : w[a] : (li(), s.nextTick(function() {
                                li();
                                v = ot(k(null, n));
                                v.skipMap = u.skipMap;
                                v.init(i, o, h, {
                                    enabled: !0
                                });
                                ui()
                            }), f)
                        }
                        return u = u || {}, ut(f, {
                            isBrowser: o,
                            toUrl: function(t) {
                                var r, i = t.lastIndexOf("."),
                                    u = t.split("/")[0],
                                    f = u === "." || u === "..";
                                return i !== -1 && (!f || i > 1) && (r = t.substring(i, t.length), t = t.substring(0, i)), s.nameToUrl(it(t, n && n.id, !0), r, !0)
                            },
                            defined: function(t) {
                                return r(w, k(t, n, !1, !0).id)
                            },
                            specified: function(t) {
                                return t = k(t, n, !1, !0).id, r(w, t) || r(p, t)
                            }
                        }), n || (f.undef = function(t) {
                            ii();
                            var u = k(t, n, !0),
                                r = i(p, t);
                            r.undefed = !0;
                            ei(t);
                            delete w[t];
                            delete ct[u.url];
                            delete gt[t];
                            rt(tt, function(n, i) {
                                n[0] === t && tt.splice(i, 1)
                            });
                            delete s.defQueueMap[t];
                            r && (r.events.defined && (gt[t] = r.events), ri(t))
                        }), f
                    },
                    enable: function(n) {
                        var t = i(p, n.id);
                        t && ot(n).enable()
                    },
                    completeLoad: function(n) {
                        var u, t, f, e = i(v.shim, n) || {},
                            o = e.exports;
                        for (ii(); tt.length;) {
                            if (t = tt.shift(), t[0] === null) {
                                if (t[0] = n, u) break;
                                u = !0
                            } else t[0] === n && (u = !0);
                            fi(t)
                        }
                        if (s.defQueueMap = {}, f = i(p, n), !u && !r(w, n) && f && !f.inited)
                            if (!v.enforceDefine || o && vt(o)) fi([n, e.deps || [], e.exportsFn]);
                            else return ti(n) ? void 0 : d(c("nodefine", "No define call for " + n, null, [n]));
                        ui()
                    },
                    nameToUrl: function(n, r, u) {
                        var l, o, h, y, f, e, c, p = i(v.pkgs, n);
                        if (p && (n = p), c = i(ni, n), c) return s.nameToUrl(c, r, u);
                        if (t.jsExtRegExp.test(n)) f = n + (r || "");
                        else {
                            for (l = v.paths, o = n.split("/"), h = o.length; h > 0; h -= 1)
                                if (y = o.slice(0, h).join("/"), e = i(l, y), e) {
                                    a(e) && (e = e[0]);
                                    o.splice(0, h, e);
                                    break
                                }
                            f = o.join("/");
                            f += r || (/^data\:|^blob\:|\?/.test(f) || u ? "" : ".js");
                            f = (f.charAt(0) === "/" || f.match(/^[\w\+\.\-]+:/) ? "" : v.baseUrl) + f
                        }
                        return v.urlArgs && !/^blob\:/.test(f) ? f + v.urlArgs(n, f) : f
                    },
                    load: function(n, i) {
                        t.load(s, n, i)
                    },
                    execCb: function(n, t, i, r) {
                        return t.apply(r, i)
                    },
                    onScriptLoad: function(n) {
                        if (n.type === "load" || kt.test((n.currentTarget || n.srcElement).readyState)) {
                            y = null;
                            var t = ci(n);
                            s.completeLoad(t.id)
                        }
                    },
                    onScriptError: function(n) {
                        var t = ci(n),
                            i;
                        if (!ti(t.id)) return i = [], h(p, function(n, r) {
                            r.indexOf("_@r") !== 0 && u(n.depMaps, function(n) {
                                if (n.id === t.id) return i.push(r), !0
                            })
                        }), d(c("scripterror", 'Script error for "' + t.id + (i.length ? '", needed by: ' + i.join(", ") : '"'), n, [t.id]))
                    }
                }, s.require = s.makeRequire(), s
            }

            function ni() {
                return y && y.readyState === "interactive" ? y : (rt(ft(), function(n) {
                    if (n.readyState === "interactive") return y = n
                }), y)
            }
            var t, tt, v, p, k, d, y, it, e, et, yt = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
                pt = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                g = /\.js$/,
                wt = /^\.\//,
                ot = Object.prototype,
                st = ot.toString,
                bt = ot.hasOwnProperty,
                o = !!(typeof window != "undefined" && typeof navigator != "undefined" && window.document),
                ht = !o && typeof importScripts != "undefined",
                kt = o && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
                ct = "_",
                lt = typeof opera != "undefined" && opera.toString() === "[object Opera]",
                w = {},
                s = {},
                nt = [],
                b = !1;
            if (typeof define == "undefined") {
                if (typeof requirejs != "undefined") {
                    if (l(requirejs)) return;
                    s = requirejs;
                    requirejs = undefined
                }
                typeof require == "undefined" || l(require) || (s = require, require = undefined);
                t = requirejs = function(n, r, u, f) {
                    var o, e, s = ct;
                    return a(n) || typeof n == "string" || (e = n, a(r) ? (n = r, r = u, u = f) : n = []), e && e.context && (s = e.context), o = i(w, s), o || (o = w[s] = t.s.newContext(s)), e && o.configure(e), o.require(n, r, u)
                };
                t.config = function(n) {
                    return t(n)
                };
                t.nextTick = typeof setTimeout != "undefined" ? function(n) {
                    setTimeout(n, 4)
                } : function(n) {
                    n()
                };
                require || (require = t);
                t.version = "2.2.0";
                t.jsExtRegExp = /^\/|:|\?|\.js$/;
                t.isBrowser = o;
                tt = t.s = {
                    contexts: w,
                    newContext: gt
                };
                t({});
                u(["toUrl", "undef", "defined", "specified"], function(n) {
                    t[n] = function() {
                        var t = w[ct];
                        return t.require[n].apply(t, arguments)
                    }
                });
                o && (v = tt.head = document.getElementsByTagName("head")[0], p = document.getElementsByTagName("base")[0], p && (v = tt.head = p.parentNode));
                t.onError = at;
                t.createNode = function(n) {
                    var t = n.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                    return t.type = n.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
                };
                t.load = function(n, i, r) {
                    var f = n && n.config || {},
                        u;
                    if (o) {
                        if (u = t.createNode(f, i, r), u.setAttribute("data-requirecontext", n.contextName), u.setAttribute("data-requiremodule", i), !u.attachEvent || u.attachEvent.toString && u.attachEvent.toString().indexOf("[native code") < 0 || lt ? (u.addEventListener("load", n.onScriptLoad, !1), u.addEventListener("error", n.onScriptError, !1)) : (b = !0, u.attachEvent("onreadystatechange", n.onScriptLoad)), u.src = r, f.onNodeCreated) f.onNodeCreated(u, f, i, r);
                        return it = u, p ? v.insertBefore(u, p) : v.appendChild(u), it = null, u
                    }
                    if (ht) try {
                        setTimeout(function() {}, 0);
                        importScripts(r);
                        n.completeLoad(i)
                    } catch (e) {
                        n.onError(c("importscripts", "importScripts failed for " + i + " at " + r, e, [i]))
                    }
                };
                o && !s.skipDataMain && rt(ft(), function(n) {
                    return v || (v = n.parentNode), k = n.getAttribute("data-main"), k ? (e = k, s.baseUrl || e.indexOf("!") !== -1 || (d = e.split("/"), e = d.pop(), et = d.length ? d.join("/") + "/" : "./", s.baseUrl = et), e = e.replace(g, ""), t.jsExtRegExp.test(e) && (e = k), s.deps = s.deps ? s.deps.concat(e) : [e], !0) : void 0
                });
                define = function(n, t, i) {
                    var r, u;
                    typeof n != "string" && (i = t, t = n, n = null);
                    a(t) || (i = t, t = null);
                    !t && l(i) && (t = [], i.length && (i.toString().replace(yt, dt).replace(pt, function(n, i) {
                        t.push(i)
                    }), t = (i.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t)));
                    b && (r = it || ni(), r && (n || (n = r.getAttribute("data-requiremodule")), u = w[r.getAttribute("data-requirecontext")]));
                    u ? (u.defQueue.push([n, t, i]), u.defQueueMap[n] = !0) : nt.push([n, t, i])
                };
                define.amd = {
                    jQuery: !0
                };
                t.exec = function(n) {
                    return eval(n)
                };
                t(s)
            }
        })(this),
        function(n) {
            function u(n) {
                return r ? n ? t.now() : Math.round(t.now()) : new Date - i
            }
            var t = n.performance,
                i = ((t || {}).timing || {}).navigationStart || (n._timing || {}).start || +new Date,
                r = t && typeof t.now == "function";
            typeof requirejs != "undefined" && requirejs && requirejs.config({
                waitSeconds: 0
            });
            define("date", function() {
                return Date
            });
            define("document", function() {
                return document
            });
            define("image", function() {
                return Image
            });
            define("location", function() {
                return document.location
            });
            define("navigator", function() {
                return navigator
            });
            define("pageStart", function() {
                return i
            });
            define("pageTime", function() {
                return u
            });
            define("screen", function() {
                return screen
            });
            define("window", function() {
                return n
            })
        }(window);
        define("jqReady", function() {
            "use strict";

            function n(i) {
                require(["_jq"]);
                window.jQuery ? i(window.jQuery) : setTimeout(function() {
                    n(i)
                }, t)
            }
            var t = 50;
            return define("_jq", !0), n.load = function(t, i, r, u) {
                u.isBuild ? r(null) : n(r)
            }, n
        });
        /**
         * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
         * Available via the MIT or new BSD license.
         * see: http://github.com/requirejs/domReady for details
         */
        define("domReady", function() {
            "use strict";

            function h(n) {
                for (var t = 0; t < n.length; t += 1) n[t](s)
            }

            function c() {
                var n = e;
                i && n.length && (e = [], h(n))
            }

            function n() {
                i || (i = !0, u && clearInterval(u), c())
            }

            function t(n) {
                return i ? n(s) : e.push(n), t
            }
            var o, r, u, f = typeof window != "undefined" && window.document,
                i = !f,
                s = f ? document : null,
                e = [];
            if (f) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                else if (window.attachEvent) {
                    window.attachEvent("onload", n);
                    r = document.createElement("div");
                    try {
                        o = window.frameElement === null
                    } catch (l) {}
                    r.doScroll && o && window.external && (u = setInterval(function() {
                        try {
                            r.doScroll();
                            n()
                        } catch (t) {}
                    }, 30))
                }
                document.readyState === "complete" && n()
            }
            return t.version = "2.0.1", t.load = function(n, i, r, u) {
                u.isBuild ? r(null) : t(r)
            }, t
        });
        define("deferExec", function() {
            "use strict";

            function h(n) {
                for (var t = 0; t < n.length; t += 1) Number.isInteger(Number(n[t][1])) ? setTimeout(n[t][0], n[t][1]) : n[t][0]()
            }

            function s() {
                window._pageTimings || (window._pageTimings = {});
                window._pageTimings.didDeferExecTimeout = e;
                var n = f;
                n.length && (f = [], h(n))
            }

            function n() {
                clearTimeout(o);
                u = !0;
                s()
            }

            function c() {
                window.removeEventListener ? window.removeEventListener("load", n, !1) : window.detachEvent && window.detachEvent("load", n);
                r = !0;
                e = !0;
                s()
            }

            function t(n, i) {
                return u || r ? Number.isInteger(Number(i)) ? setTimeout(n, i) : n() : f.push([n, i]), t
            }
            var i = typeof window != "undefined" && window.document,
                r = !i,
                u = !i,
                f = [],
                e = !1,
                o;
            return Number.isInteger = Number.isInteger || function(n) {
                return typeof n == "number" && isFinite(n) && Math.floor(n) === n
            }, i && (window.addEventListener ? window.addEventListener("load", n, !1) : window.attachEvent && window.attachEvent("onload", n), u && r || (o = setTimeout(c, 5e3))), t.load = function(n, i, r, u) {
                u.isBuild ? r(null) : t(r, n)
            }, t
        });
        require(["domReady!", "deferExec!"])
    </script>
    <script src="../scripts/jq2.1.1.js"></script>

    <!-- <script type="text/javascript" src="https://www.microsoft.com/videoplayer/js/oneplayeriframe.js"></script> -->
</head>

<body class="b_video">
<?php
include('modules/nav-waffle-2.php');
?>