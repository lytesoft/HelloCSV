var Wc = Object.defineProperty;
var Gc = (e, t, n) => t in e ? Wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => Gc(e, typeof t != "symbol" ? t + "" : t, n);
var $n, de, zs, Mt, Ri, Bs, eo, js, ko, to, no, Us, bn = {}, Ws = [], qc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, cr = Array.isArray;
function dt(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function No(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function B(e, t, n) {
  var r, o, i, s = {};
  for (i in t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : s[i] = t[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? $n.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return hn(e, s, r, o, null);
}
function hn(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++zs, __i: -1, __u: 0 };
  return o == null && de.vnode != null && de.vnode(i), i;
}
function ur() {
  return { current: null };
}
function pe(e) {
  return e.children;
}
function je(e, t) {
  this.props = e, this.context = t;
}
function Yt(e, t) {
  if (t == null) return e.__ ? Yt(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? Yt(e) : null;
}
function Gs(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
      e.__e = e.__c.base = n.__e;
      break;
    }
    return Gs(e);
  }
}
function ro(e) {
  (!e.__d && (e.__d = !0) && Mt.push(e) && !Jn.__r++ || Ri !== de.debounceRendering) && ((Ri = de.debounceRendering) || Bs)(Jn);
}
function Jn() {
  var e, t, n, r, o, i, s, l;
  for (Mt.sort(eo); e = Mt.shift(); ) e.__d && (t = Mt.length, r = void 0, i = (o = (n = e).__v).__e, s = [], l = [], n.__P && ((r = dt({}, o)).__v = o.__v + 1, de.vnode && de.vnode(r), Lo(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [i] : null, s, i ?? Yt(o), !!(32 & o.__u), l), r.__v = o.__v, r.__.__k[r.__i] = r, Ks(s, r, l), r.__e != i && Gs(r)), Mt.length > t && Mt.sort(eo));
  Jn.__r = 0;
}
function qs(e, t, n, r, o, i, s, l, a, c, u) {
  var d, p, f, v, w, m, _ = r && r.__k || Ws, y = t.length;
  for (a = Yc(n, t, _, a, y), d = 0; d < y; d++) (f = n.__k[d]) != null && (p = f.__i === -1 ? bn : _[f.__i] || bn, f.__i = d, m = Lo(e, f, p, o, i, s, l, a, c, u), v = f.__e, f.ref && p.ref != f.ref && (p.ref && Vo(p.ref, null, f), u.push(f.ref, f.__c || v, f)), w == null && v != null && (w = v), 4 & f.__u || p.__k === f.__k ? a = Ys(f, a, e) : typeof f.type == "function" && m !== void 0 ? a = m : v && (a = v.nextSibling), f.__u &= -7);
  return n.__e = w, a;
}
function Yc(e, t, n, r, o) {
  var i, s, l, a, c, u = n.length, d = u, p = 0;
  for (e.__k = new Array(o), i = 0; i < o; i++) (s = t[i]) != null && typeof s != "boolean" && typeof s != "function" ? (a = i + p, (s = e.__k[i] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? hn(null, s, null, null, null) : cr(s) ? hn(pe, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? hn(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e, s.__b = e.__b + 1, l = null, (c = s.__i = Kc(s, n, a, d)) !== -1 && (d--, (l = n[c]) && (l.__u |= 2)), l == null || l.__v === null ? (c == -1 && p--, typeof s.type != "function" && (s.__u |= 4)) : c != a && (c == a - 1 ? p-- : c == a + 1 ? p++ : (c > a ? p-- : p++, s.__u |= 4))) : e.__k[i] = null;
  if (d) for (i = 0; i < u; i++) (l = n[i]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = Yt(l)), Zs(l, l));
  return r;
}
function Ys(e, t, n) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && (r[o].__ = e, t = Ys(r[o], t, n));
    return t;
  }
  e.__e != t && (t && e.type && !n.contains(t) && (t = Yt(e)), n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function ft(e, t) {
  return t = t || [], e == null || typeof e == "boolean" || (cr(e) ? e.some(function(n) {
    ft(n, t);
  }) : t.push(e)), t;
}
function Kc(e, t, n, r) {
  var o, i, s = e.key, l = e.type, a = t[n];
  if (a === null || a && s == a.key && l === a.type && (2 & a.__u) == 0) return n;
  if (r > (a != null && (2 & a.__u) == 0 ? 1 : 0)) for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
    if (o >= 0) {
      if ((a = t[o]) && (2 & a.__u) == 0 && s == a.key && l === a.type) return o;
      o--;
    }
    if (i < t.length) {
      if ((a = t[i]) && (2 & a.__u) == 0 && s == a.key && l === a.type) return i;
      i++;
    }
  }
  return -1;
}
function $i(e, t, n) {
  t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || qc.test(t) ? n : n + "px";
}
function Nn(e, t, n, r, o) {
  var i;
  e: if (t == "style") if (typeof n == "string") e.style.cssText = n;
  else {
    if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || $i(e.style, t, "");
    if (n) for (t in n) r && n[t] === r[t] || $i(e.style, t, n[t]);
  }
  else if (t[0] == "o" && t[1] == "n") i = t != (t = t.replace(js, "$1")), t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = ko, e.addEventListener(t, i ? no : to, i)) : e.removeEventListener(t, i ? no : to, i);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
      e[t] = n ?? "";
      break e;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
  }
}
function Ti(e) {
  return function(t) {
    if (this.l) {
      var n = this.l[t.type + e];
      if (t.t == null) t.t = ko++;
      else if (t.t < n.u) return;
      return n(de.event ? de.event(t) : t);
    }
  };
}
function Lo(e, t, n, r, o, i, s, l, a, c) {
  var u, d, p, f, v, w, m, _, y, S, E, T, P, I, x, g, b, C = t.type;
  if (t.constructor !== void 0) return null;
  128 & n.__u && (a = !!(32 & n.__u), i = [l = t.__e = n.__e]), (u = de.__b) && u(t);
  e: if (typeof C == "function") try {
    if (_ = t.props, y = "prototype" in C && C.prototype.render, S = (u = C.contextType) && r[u.__c], E = u ? S ? S.props.value : u.__ : r, n.__c ? m = (d = t.__c = n.__c).__ = d.__E : (y ? t.__c = d = new C(_, E) : (t.__c = d = new je(_, E), d.constructor = C, d.render = Xc), S && S.sub(d), d.props = _, d.state || (d.state = {}), d.context = E, d.__n = r, p = d.__d = !0, d.__h = [], d._sb = []), y && d.__s == null && (d.__s = d.state), y && C.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = dt({}, d.__s)), dt(d.__s, C.getDerivedStateFromProps(_, d.__s))), f = d.props, v = d.state, d.__v = t, p) y && C.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), y && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (y && C.getDerivedStateFromProps == null && _ !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(_, E), !d.__e && (d.shouldComponentUpdate != null && d.shouldComponentUpdate(_, d.__s, E) === !1 || t.__v == n.__v)) {
        for (t.__v != n.__v && (d.props = _, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(R) {
          R && (R.__ = t);
        }), T = 0; T < d._sb.length; T++) d.__h.push(d._sb[T]);
        d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(_, d.__s, E), y && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(f, v, w);
      });
    }
    if (d.context = E, d.props = _, d.__P = e, d.__e = !1, P = de.__r, I = 0, y) {
      for (d.state = d.__s, d.__d = !1, P && P(t), u = d.render(d.props, d.state, d.context), x = 0; x < d._sb.length; x++) d.__h.push(d._sb[x]);
      d._sb = [];
    } else do
      d.__d = !1, P && P(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++I < 25);
    d.state = d.__s, d.getChildContext != null && (r = dt(dt({}, r), d.getChildContext())), y && !p && d.getSnapshotBeforeUpdate != null && (w = d.getSnapshotBeforeUpdate(f, v)), l = qs(e, cr(g = u != null && u.type === pe && u.key == null ? u.props.children : u) ? g : [g], t, n, r, o, i, s, l, a, c), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), m && (d.__E = d.__ = null);
  } catch (R) {
    if (t.__v = null, a || i != null) if (R.then) {
      for (t.__u |= a ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      i[i.indexOf(l)] = null, t.__e = l;
    } else for (b = i.length; b--; ) No(i[b]);
    else t.__e = n.__e, t.__k = n.__k;
    de.__e(R, t, n);
  }
  else i == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : l = t.__e = Zc(n.__e, t, n, r, o, i, s, a, c);
  return (u = de.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Ks(e, t, n) {
  for (var r = 0; r < n.length; r++) Vo(n[r], n[++r], n[++r]);
  de.__c && de.__c(t, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      de.__e(i, o.__v);
    }
  });
}
function Zc(e, t, n, r, o, i, s, l, a) {
  var c, u, d, p, f, v, w, m = n.props, _ = t.props, y = t.type;
  if (y == "svg" ? o = "http://www.w3.org/2000/svg" : y == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((f = i[c]) && "setAttribute" in f == !!y && (y ? f.localName == y : f.nodeType == 3)) {
      e = f, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (y == null) return document.createTextNode(_);
    e = document.createElementNS(o, y, _.is && _), l && (de.__m && de.__m(t, i), l = !1), i = null;
  }
  if (y === null) m === _ || l && e.data === _ || (e.data = _);
  else {
    if (i = i && $n.call(e.childNodes), m = n.props || bn, !l && i != null) for (m = {}, c = 0; c < e.attributes.length; c++) m[(f = e.attributes[c]).name] = f.value;
    for (c in m) if (f = m[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") d = f;
      else if (!(c in _)) {
        if (c == "value" && "defaultValue" in _ || c == "checked" && "defaultChecked" in _) continue;
        Nn(e, c, null, f, o);
      }
    }
    for (c in _) f = _[c], c == "children" ? p = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? v = f : c == "checked" ? w = f : l && typeof f != "function" || m[c] === f || Nn(e, c, f, m[c], o);
    if (u) l || d && (u.__html === d.__html || u.__html === e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
    else if (d && (e.innerHTML = ""), qs(e, cr(p) ? p : [p], t, n, r, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, s, i ? i[0] : n.__k && Yt(n, 0), l, a), i != null) for (c = i.length; c--; ) No(i[c]);
    l || (c = "value", y == "progress" && v == null ? e.removeAttribute("value") : v !== void 0 && (v !== e[c] || y == "progress" && !v || y == "option" && v !== m[c]) && Nn(e, c, v, m[c], o), c = "checked", w !== void 0 && w !== e[c] && Nn(e, c, w, m[c], o));
  }
  return e;
}
function Vo(e, t, n) {
  try {
    if (typeof e == "function") {
      var r = typeof e.__u == "function";
      r && e.__u(), r && t == null || (e.__u = e(t));
    } else e.current = t;
  } catch (o) {
    de.__e(o, n);
  }
}
function Zs(e, t, n) {
  var r, o;
  if (de.unmount && de.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Vo(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (i) {
      de.__e(i, t);
    }
    r.base = r.__P = null;
  }
  if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && Zs(r[o], t, n || typeof e.type != "function");
  n || No(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Xc(e, t, n) {
  return this.constructor(e, n);
}
function _n(e, t, n) {
  var r, o, i, s;
  t == document && (t = document.documentElement), de.__ && de.__(e, t), o = (r = typeof n == "function") ? null : n && n.__k || t.__k, i = [], s = [], Lo(t, e = (!r && n || t).__k = B(pe, null, [e]), o || bn, bn, t.namespaceURI, !r && n ? [n] : o ? null : t.firstChild ? $n.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r, s), Ks(i, e, s);
}
function Xs(e, t) {
  _n(e, t, Xs);
}
function Jc(e, t, n) {
  var r, o, i, s, l = dt({}, e.props);
  for (i in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) i == "key" ? r = t[i] : i == "ref" ? o = t[i] : l[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? $n.call(arguments, 2) : n), hn(e.type, l, r || e.key, o || e.ref, null);
}
function ge(e, t) {
  var n = { __c: t = "__cC" + Us++, __: e, Consumer: function(r, o) {
    return r.children(o);
  }, Provider: function(r) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[t] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(s) {
      this.props.value !== s.value && o.forEach(function(l) {
        l.__e = !0, ro(l);
      });
    }, this.sub = function(s) {
      o.add(s);
      var l = s.componentWillUnmount;
      s.componentWillUnmount = function() {
        o && o.delete(s), l && l.call(s);
      };
    }), r.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
$n = Ws.slice, de = { __e: function(e, t, n, r) {
  for (var o, i, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    e = l;
  }
  throw e;
} }, zs = 0, je.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = dt({}, this.state), typeof e == "function" && (e = e(dt({}, n), this.props)), e && dt(n, e), e != null && this.__v && (t && this._sb.push(t), ro(this));
}, je.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ro(this));
}, je.prototype.render = pe, Mt = [], Bs = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, eo = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Jn.__r = 0, js = /(PointerCapture)$|Capture$/i, ko = 0, to = Ti(!1), no = Ti(!0), Us = 0;
var pt, we, Dr, Mi, Kt = 0, Js = [], xe = de, Oi = xe.__b, Ii = xe.__r, Di = xe.diffed, Ai = xe.__c, Fi = xe.unmount, Pi = xe.__;
function Lt(e, t) {
  xe.__h && xe.__h(we, e, Kt || t), Kt = 0;
  var n = we.__H || (we.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Y(e) {
  return Kt = 1, tt(Qs, e);
}
function tt(e, t, n) {
  var r = Lt(pt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Qs(void 0, t), function(l) {
    var a = r.__N ? r.__N[0] : r.__[0], c = r.t(a, l);
    a !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = we, !we.u)) {
    var o = function(l, a, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (u.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, l, a, c);
      var d = r.__c.props !== l;
      return u.forEach(function(p) {
        if (p.__N) {
          var f = p.__[0];
          p.__ = p.__N, p.__N = void 0, f !== p.__[0] && (d = !0);
        }
      }), i && i.call(this, l, a, c) || d;
    };
    we.u = !0;
    var i = we.shouldComponentUpdate, s = we.componentWillUpdate;
    we.componentWillUpdate = function(l, a, c) {
      if (this.__e) {
        var u = i;
        i = void 0, o(l, a, c), i = u;
      }
      s && s.call(this, l, a, c);
    }, we.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function se(e, t) {
  var n = Lt(pt++, 3);
  !xe.__s && Bo(n.__H, t) && (n.__ = e, n.i = t, we.__H.__h.push(n));
}
function Ge(e, t) {
  var n = Lt(pt++, 4);
  !xe.__s && Bo(n.__H, t) && (n.__ = e, n.i = t, we.__h.push(n));
}
function U(e) {
  return Kt = 5, ne(function() {
    return { current: e };
  }, []);
}
function Ho(e, t, n) {
  Kt = 6, Ge(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = Lt(pt++, 7);
  return Bo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ee(e, t) {
  return Kt = 8, ne(function() {
    return e;
  }, t);
}
function he(e) {
  var t = we.context[e.__c], n = Lt(pt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(we)), t.props.value) : e.__;
}
function zo(e, t) {
  xe.useDebugValue && xe.useDebugValue(t ? t(e) : e);
}
function Qc(e) {
  var t = Lt(pt++, 10), n = Y();
  return t.__ = e, we.componentDidCatch || (we.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Ie() {
  var e = Lt(pt++, 11);
  if (!e.__) {
    for (var t = we.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function eu() {
  for (var e; e = Js.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Gn), e.__H.__h.forEach(oo), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], xe.__e(t, e.__v);
  }
}
xe.__b = function(e) {
  we = null, Oi && Oi(e);
}, xe.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Pi && Pi(e, t);
}, xe.__r = function(e) {
  Ii && Ii(e), pt = 0;
  var t = (we = e.__c).__H;
  t && (Dr === we ? (t.__h = [], we.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Gn), t.__h.forEach(oo), t.__h = [], pt = 0)), Dr = we;
}, xe.diffed = function(e) {
  Di && Di(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Js.push(t) !== 1 && Mi === xe.requestAnimationFrame || ((Mi = xe.requestAnimationFrame) || tu)(eu)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), Dr = we = null;
}, xe.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Gn), n.__h = n.__h.filter(function(r) {
        return !r.__ || oo(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], xe.__e(r, n.__v);
    }
  }), Ai && Ai(e, t);
}, xe.unmount = function(e) {
  Fi && Fi(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Gn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && xe.__e(t, n.__v));
};
var ki = typeof requestAnimationFrame == "function";
function tu(e) {
  var t, n = function() {
    clearTimeout(r), ki && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  ki && (t = requestAnimationFrame(n));
}
function Gn(e) {
  var t = we, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), we = t;
}
function oo(e) {
  var t = we;
  e.__c = e.__(), we = t;
}
function Bo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Qs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function el(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function io(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function dr(e, t) {
  var n = t(), r = Y({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return Ge(function() {
    o.__ = n, o.u = t, Ar(o) && i({ t: o });
  }, [e, n, t]), se(function() {
    return Ar(o) && i({ t: o }), e(function() {
      Ar(o) && i({ t: o });
    });
  }, [e]), n;
}
function Ar(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function jo(e) {
  e();
}
function Uo(e) {
  return e;
}
function Wo() {
  return [!1, jo];
}
var Go = Ge;
function Qn(e, t) {
  this.props = e, this.context = t;
}
function tl(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : io(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, B(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Qn.prototype = new je()).isPureReactComponent = !0, Qn.prototype.shouldComponentUpdate = function(e, t) {
  return io(this.props, e) || io(this.state, t);
};
var Ni = de.__b;
de.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ni && Ni(e);
};
var nu = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function fe(e) {
  function t(n) {
    var r = el({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = nu, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var Li = function(e, t) {
  return e == null ? null : ft(ft(e).map(t));
}, nl = { map: Li, forEach: Li, count: function(e) {
  return e ? ft(e).length : 0;
}, only: function(e) {
  var t = ft(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: ft }, ru = de.__e;
de.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  ru(e, t, n, r);
};
var Vi = de.unmount;
function rl(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = el({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return rl(r, t, n);
  })), e;
}
function ol(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return ol(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function pn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function il(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function sl(e) {
  var t, n, r;
  function o(i) {
    if (t || (t = e()).then(function(s) {
      n = s.default || s;
    }, function(s) {
      r = s;
    }), r) throw r;
    if (!n) throw t;
    return B(n, i);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function Ut() {
  this.i = null, this.l = null;
}
de.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Vi && Vi(e);
}, (pn.prototype = new je()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = il(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = ol(a, a.__c.__P, a.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.o.pop(); ) c.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, pn.prototype.componentWillUnmount = function() {
  this.o = [];
}, pn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = rl(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && B(pe, null, e.fallback);
  return o && (o.__u &= -33), [B(pe, null, t.__a ? null : e.children), o];
};
var Hi = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function ou(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function iu(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    _n(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), _n(B(ou, { context: t.context }, e.__v), t.v);
}
function Qt(e, t) {
  var n = B(iu, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Ut.prototype = new je()).__a = function(e) {
  var t = this, n = il(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), Hi(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Ut.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = ft(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Ut.prototype.componentDidUpdate = Ut.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    Hi(e, n, t);
  });
};
var ll = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, su = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, lu = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, au = /[A-Z0-9]/g, cu = typeof document < "u", uu = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function qo(e, t, n) {
  return t.__k == null && (t.textContent = ""), _n(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function al(e, t, n) {
  return Xs(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
je.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(je.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var zi = de.event;
function du() {
}
function fu() {
  return this.cancelBubble;
}
function hu() {
  return this.defaultPrevented;
}
de.event = function(e) {
  return zi && (e = zi(e)), e.persist = du, e.isPropagationStopped = fu, e.isDefaultPrevented = hu, e.nativeEvent = e;
};
var Yo, pu = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Bi = de.vnode;
de.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var l = n[s];
      if (!(s === "value" && "defaultValue" in n && l == null || cu && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : a === "translate" && l === "no" ? l = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || uu(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : lu.test(s) && (s = a) : a = s = "oninput" : i && su.test(s) ? s = s.replace(au, "-$&").toLowerCase() : l === null && (l = void 0), a === "oninput" && o[s = a] && (s = "oninputCapture"), o[s] = l;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = ft(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = ft(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", pu)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = ll, Bi && Bi(e);
};
var ji = de.__r;
de.__r = function(e) {
  ji && ji(e), Yo = e.__c;
};
var Ui = de.diffed;
de.diffed = function(e) {
  Ui && Ui(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Yo = null;
};
var cl = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Yo.__n[e.__c].props.value;
}, useCallback: ee, useContext: he, useDebugValue: zo, useDeferredValue: Uo, useEffect: se, useId: Ie, useImperativeHandle: Ho, useInsertionEffect: Go, useLayoutEffect: Ge, useMemo: ne, useReducer: tt, useRef: U, useState: Y, useSyncExternalStore: dr, useTransition: Wo } } }, mu = "18.3.1";
function ul(e) {
  return B.bind(null, e);
}
function en(e) {
  return !!e && e.$$typeof === ll;
}
function dl(e) {
  return en(e) && e.type === pe;
}
function fl(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Ko(e) {
  return en(e) ? Jc.apply(null, arguments) : e;
}
function Zo(e) {
  return !!e.__k && (_n(null, e), !0);
}
function hl(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var pl = function(e, t) {
  return e(t);
}, Ne = function(e, t) {
  return e(t);
}, ml = pe, gl = en, K = { useState: Y, useId: Ie, useReducer: tt, useEffect: se, useLayoutEffect: Ge, useInsertionEffect: Go, useTransition: Wo, useDeferredValue: Uo, useSyncExternalStore: dr, startTransition: jo, useRef: U, useImperativeHandle: Ho, useMemo: ne, useCallback: ee, useContext: he, useDebugValue: zo, version: "18.3.1", Children: nl, render: qo, hydrate: al, unmountComponentAtNode: Zo, createPortal: Qt, createElement: B, createContext: ge, createFactory: ul, cloneElement: Ko, createRef: ur, Fragment: pe, isValidElement: en, isElement: gl, isFragment: dl, isMemo: fl, findDOMNode: hl, Component: je, PureComponent: Qn, memo: tl, forwardRef: fe, flushSync: Ne, unstable_batchedUpdates: pl, StrictMode: ml, Suspense: pn, SuspenseList: Ut, lazy: sl, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cl };
const so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: nl,
  Component: je,
  Fragment: pe,
  PureComponent: Qn,
  StrictMode: ml,
  Suspense: pn,
  SuspenseList: Ut,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: cl,
  cloneElement: Ko,
  createContext: ge,
  createElement: B,
  createFactory: ul,
  createPortal: Qt,
  createRef: ur,
  default: K,
  findDOMNode: hl,
  flushSync: Ne,
  forwardRef: fe,
  hydrate: al,
  isElement: gl,
  isFragment: dl,
  isMemo: fl,
  isValidElement: en,
  lazy: sl,
  memo: tl,
  render: qo,
  startTransition: jo,
  unmountComponentAtNode: Zo,
  unstable_batchedUpdates: pl,
  useCallback: ee,
  useContext: he,
  useDebugValue: zo,
  useDeferredValue: Uo,
  useEffect: se,
  useErrorBoundary: Qc,
  useId: Ie,
  useImperativeHandle: Ho,
  useInsertionEffect: Go,
  useLayoutEffect: Ge,
  useMemo: ne,
  useReducer: tt,
  useRef: U,
  useState: Y,
  useSyncExternalStore: dr,
  useTransition: Wo,
  version: mu
}, Symbol.toStringTag, { value: "Module" }));
function gu(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      qo(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      Zo(e);
    }
  };
}
var vu = 0;
function h(e, t, n, r, o, i) {
  t || (t = {});
  var s, l, a = t;
  if ("ref" in a) for (l in a = {}, t) l == "ref" ? s = t[l] : a[l] = t[l];
  var c = { type: e, props: a, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --vu, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) a[l] === void 0 && (a[l] = s[l]);
  return de.vnode && de.vnode(c), c;
}
function vl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function wu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vl(e)) && (r && (r += " "), r += t);
  return r;
}
const Wi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Gi = wu, Ct = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Gi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], d = i == null ? void 0 : i[c];
    if (u === null) return null;
    const p = Wi(u) || Wi(d);
    return o[c][p];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [d, p] = u;
    return p === void 0 || (c[d] = p), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: p, ...f } = u;
    return Object.entries(f).every((v) => {
      let [w, m] = v;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...l
      }[w]) : {
        ...i,
        ...l
      }[w] === m;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return Gi(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, yu = Ct(
  "hc:text-center hc:inline-block hc:font-semibold hc:px-3 hc:py-2 hc:rounded-md hc:text-sm",
  {
    variants: {
      variant: {
        primary: "hc:shadow-xs hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast",
        secondary: "hc:bg-hello-csv-surface hc:text-hello-csv-primary hc:ring-1 hc:shadow-xs hc:ring-hello-csv-primary hc:ring-inset",
        tertiary: "hc:bg-hello-csv-surface hc:text-hello-csv-text hc:ring-1 hc:shadow-xs hc:ring-hello-csv-tertiary hc:ring-inset",
        success: "hc:shadow-xs hc:bg-hello-csv-success hc:text-hello-csv-success-contrast",
        danger: "hc:shadow-xs hc:bg-hello-csv-danger hc:text-hello-csv-danger-contrast"
      },
      withFullWidth: {
        true: "hc:w-full",
        false: ""
      },
      disabled: {
        true: "hc:opacity-50 hc:cursor-not-allowed hc:pointer-events-none",
        false: "hc:cursor-pointer"
      }
    },
    compoundVariants: [
      {
        variant: "primary",
        disabled: !1,
        className: "hc:hover:bg-hello-csv-primary-light hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-primary"
      },
      {
        variant: "secondary",
        disabled: !1,
        className: "hc:hover:opacity-80 hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-secondary"
      },
      {
        variant: "tertiary",
        disabled: !1,
        className: "hc:hover:bg-hello-csv-tertiary-light"
      },
      {
        variant: "success",
        disabled: !1,
        className: "hc:hover:opacity-80 hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-success"
      },
      {
        variant: "danger",
        disabled: !1,
        className: "hc:hover:bg-hello-csv-danger-light hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-danger"
      }
    ],
    defaultVariants: {
      withFullWidth: !1,
      variant: "primary",
      disabled: !1
    }
  }
);
function Ve({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = yu({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ h(
    "div",
    {
      role: "button",
      tabIndex: 0,
      className: i,
      onClick: r,
      "aria-disabled": n,
      children: e
    }
  );
}
const bu = Ct(
  "hc:overflow-hidden hc:rounded-md hc:border hc:border-hello-csv-border",
  {
    variants: {
      variant: {
        default: "hc:bg-hello-csv-surface",
        muted: "hc:bg-hello-csv-muted"
      },
      withPadding: {
        true: "hc:px-4 hc:py-5 hc:sm:p-6",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      withPadding: !0
    }
  }
), wl = fe(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = bu({ variant: n, withPadding: r });
    return /* @__PURE__ */ h("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function yl({ checked: e, setChecked: t, label: n }) {
  const r = Ie();
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:gap-3", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex hc:h-6 hc:shrink-0 hc:items-center", children: /* @__PURE__ */ h("div", { className: "hc:group hc:grid hc:size-4 hc:grid-cols-1", children: [
      /* @__PURE__ */ h(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "hc:checked:border-hello-csv-primary hc:checked:bg-hello-csv-primary hc:indeterminate:border-hello-csv-primary hc:indeterminate:bg-hello-csv-primary hc:focus-visible:outline-hello-csv-primary hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:disabled:border-hello-csv-border-strong hc:disabled:bg-hello-csv-surface-sunken hc:disabled:checked:bg-hello-csv-surface-sunken hc:col-start-1 hc:row-start-1 hc:appearance-none hc:rounded-sm hc:border hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ h(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "hc:stroke-hello-csv-primary-contrast hc:group-has-disabled:stroke-hello-csv-text-subtle hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:size-3.5 hc:self-center hc:justify-self-center",
          children: [
            /* @__PURE__ */ h(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "hc:opacity-0 hc:group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ h(
              "path",
              {
                d: "M3 7H11",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "hc:opacity-0 hc:group-has-indeterminate:opacity-100"
              }
            )
          ]
        }
      )
    ] }) }),
    n && /* @__PURE__ */ h("div", { className: "hc:text-sm/6", children: /* @__PURE__ */ h("label", { htmlFor: r, className: "hc:text-hello-csv-text hc:font-medium", children: n }) })
  ] });
}
let _u = !1;
function Xo() {
  return _u;
}
const bl = typeof document < "u" ? K.useLayoutEffect : () => {
};
function xu(e) {
  const t = U(null);
  return bl(() => {
    t.current = e;
  }, [
    e
  ]), ee((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Et = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, It = (e) => e && "window" in e && e.window === e ? e : Et(e).defaultView || window;
function Su(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Cu(e) {
  return Su(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function _l(e, t) {
  if (!Xo()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Cu(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const lo = (e = document) => {
  var t;
  if (!Xo()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function xl(e) {
  return Xo() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Eu(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Ru(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Sl(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const $u = Sl(function() {
  return Ru(/^Mac/i);
}), Tu = Sl(function() {
  return Eu(/Android/i);
});
function Cl() {
  let e = U(/* @__PURE__ */ new Map()), t = ee((o, i, s, l) => {
    let a = l != null && l.once ? (...c) => {
      e.current.delete(s), s(...c);
    } : s;
    e.current.set(s, {
      type: i,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(i, a, l);
  }, []), n = ee((o, i, s, l) => {
    var a;
    let c = ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
    o.removeEventListener(i, c, l), e.current.delete(s);
  }, []), r = ee(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return se(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Mu(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Tu() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function El(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ou(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Rl(e) {
  let t = U({
    isFocused: !1,
    observer: null
  });
  bl(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = xu((r) => {
    e == null || e(r);
  });
  return ee((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = El(s);
          n(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let Iu = !1, Tn = null, ao = /* @__PURE__ */ new Set(), mn = /* @__PURE__ */ new Map(), Pt = !1, co = !1;
const Du = {
  Tab: !0,
  Escape: !0
};
function Jo(e, t) {
  for (let n of ao) n(e, t);
}
function Au(e) {
  return !(e.metaKey || !$u() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function er(e) {
  Pt = !0, Au(e) && (Tn = "keyboard", Jo("keyboard", e));
}
function Gt(e) {
  Tn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Pt = !0, Jo("pointer", e));
}
function $l(e) {
  Mu(e) && (Pt = !0, Tn = "virtual");
}
function Tl(e) {
  e.target === window || e.target === document || Iu || !e.isTrusted || (!Pt && !co && (Tn = "virtual", Jo("virtual", e)), Pt = !1, co = !1);
}
function Ml() {
  Pt = !1, co = !0;
}
function uo(e) {
  if (typeof window > "u" || mn.get(It(e))) return;
  const t = It(e), n = Et(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Pt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", er, !0), n.addEventListener("keyup", er, !0), n.addEventListener("click", $l, !0), t.addEventListener("focus", Tl, !0), t.addEventListener("blur", Ml, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Gt, !0), n.addEventListener("pointermove", Gt, !0), n.addEventListener("pointerup", Gt, !0)), t.addEventListener("beforeunload", () => {
    Ol(e);
  }, {
    once: !0
  }), mn.set(t, {
    focus: r
  });
}
const Ol = (e, t) => {
  const n = It(e), r = Et(e);
  t && r.removeEventListener("DOMContentLoaded", t), mn.has(n) && (n.HTMLElement.prototype.focus = mn.get(n).focus, r.removeEventListener("keydown", er, !0), r.removeEventListener("keyup", er, !0), r.removeEventListener("click", $l, !0), n.removeEventListener("focus", Tl, !0), n.removeEventListener("blur", Ml, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Gt, !0), r.removeEventListener("pointermove", Gt, !0), r.removeEventListener("pointerup", Gt, !0)), mn.delete(n));
};
function Fu(e) {
  const t = Et(e);
  let n;
  return t.readyState !== "loading" ? uo(e) : (n = () => {
    uo(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ol(e, n);
}
typeof document < "u" && Fu();
function Il() {
  return Tn !== "pointer";
}
const Pu = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ku(e, t, n) {
  let r = Et(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? It(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? It(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? It(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? It(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Pu.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Du[n.key]);
}
function Nu(e, t, n) {
  uo(), se(() => {
    let r = (o, i) => {
      ku(!!(n != null && n.isTextInput), o, i) && e(Il());
    };
    return ao.add(r), () => {
      ao.delete(r);
    };
  }, t);
}
function Lu(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ee((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = Rl(i), l = ee((a) => {
    const c = Et(a.target), u = c ? lo(c) : lo();
    a.target === a.currentTarget && u === xl(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
  }, [
    o,
    n,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
function Vu(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = U({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = Cl(), a = ee((d) => {
    d.currentTarget.contains(d.target) && i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(d), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), c = Rl(a), u = ee((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const p = Et(d.target), f = lo(p);
    if (!i.current.isFocusWithin && f === xl(d.nativeEvent)) {
      r && r(d), o && o(!0), i.current.isFocusWithin = !0, c(d);
      let v = d.currentTarget;
      s(p, "focus", (w) => {
        if (i.current.isFocusWithin && !_l(v, w.target)) {
          let m = new p.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          Ou(m, v);
          let _ = El(m);
          a(_);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    o,
    c,
    s,
    a
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: a
    }
  };
}
let fo = !1, Fr = 0;
function Hu() {
  fo = !0, setTimeout(() => {
    fo = !1;
  }, 50);
}
function qi(e) {
  e.pointerType === "touch" && Hu();
}
function zu() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", qi), Fr++, () => {
      Fr--, !(Fr > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", qi);
    };
}
function Dl(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = Y(!1), l = U({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(zu, []);
  let { addGlobalListener: a, removeAllGlobalListeners: c } = Cl(), { hoverProps: u, triggerHoverEnd: d } = ne(() => {
    let p = (w, m) => {
      if (l.pointerType = m, o || m === "touch" || l.isHovered || !w.currentTarget.contains(w.target)) return;
      l.isHovered = !0;
      let _ = w.currentTarget;
      l.target = _, a(Et(w.target), "pointerover", (y) => {
        l.isHovered && l.target && !_l(l.target, y.target) && f(y, y.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: _,
        pointerType: m
      }), n && n(!0), s(!0);
    }, f = (w, m) => {
      let _ = l.target;
      l.pointerType = "", l.target = null, !(m === "touch" || !l.isHovered || !_) && (l.isHovered = !1, c(), r && r({
        type: "hoverend",
        target: _,
        pointerType: m
      }), n && n(!1), s(!1));
    }, v = {};
    return typeof PointerEvent < "u" && (v.onPointerEnter = (w) => {
      fo && w.pointerType === "mouse" || p(w, w.pointerType);
    }, v.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && f(w, w.pointerType);
    }), {
      hoverProps: v,
      triggerHoverEnd: f
    };
  }, [
    t,
    n,
    r,
    o,
    l,
    a,
    c
  ]);
  return se(() => {
    o && d({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function Al(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = U({
    isFocused: !1,
    isFocusVisible: t || Il()
  }), [i, s] = Y(!1), [l, a] = Y(() => o.current.isFocused && o.current.isFocusVisible), c = ee(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = ee((f) => {
    o.current.isFocused = f, s(f), c();
  }, [
    c
  ]);
  Nu((f) => {
    o.current.isFocusVisible = f, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = Lu({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: p } = Vu({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? p : d
  };
}
var Bu = Object.defineProperty, ju = (e, t, n) => t in e ? Bu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pr = (e, t, n) => (ju(e, typeof t != "symbol" ? t + "" : t, n), n);
let Uu = class {
  constructor() {
    Pr(this, "current", this.detect()), Pr(this, "handoffState", "pending"), Pr(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Ft = new Uu();
function tn(e) {
  return Ft.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function fr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Qe() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return fr(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = Qe();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function Vt() {
  let [e] = Y(Qe);
  return se(() => () => e.dispose(), [e]), e;
}
let me = (e, t) => {
  Ft.isServer ? se(e, t) : Ge(e, t);
};
function Rt(e) {
  let t = U(e);
  return me(() => {
    t.current = e;
  }, [e]), t;
}
let Q = function(e) {
  let t = Rt(e);
  return K.useCallback((...n) => t.current(...n), [t]);
};
function Wu(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Gu(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function qu({ disabled: e = !1 } = {}) {
  let t = U(null), [n, r] = Y(!1), o = Vt(), i = Q(() => {
    t.current = null, r(!1), o.dispose();
  }), s = Q((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = tn(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (c) => {
          if (t.current) {
            let u = Wu(c);
            r(Gu(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let Yu = ge(void 0);
function Qo() {
  return he(Yu);
}
function ho(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function ke(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ke), r;
}
var Zt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Zt || {}), wt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(wt || {});
function Re() {
  let e = Zu();
  return ee((t) => Ku({ mergeRefs: e, ...t }), [e]);
}
function Ku({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? Xu;
  let a = Fl(t, e);
  if (i) return Ln(a, n, r, s, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...d } = a;
    if (u) return Ln(d, n, r, s, l);
  }
  if (c & 1) {
    let { unmount: u = !0, ...d } = a;
    return ke(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Ln({ ...d, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return Ln(a, n, r, s, l);
}
function Ln(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = kr(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, u = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let p = !1, f = [];
    for (let [v, w] of Object.entries(t)) typeof w == "boolean" && (p = !0), w === !0 && f.push(v.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`));
    if (p) {
      d["data-headlessui-state"] = f.join(" ");
      for (let v of f) d[`data-${v}`] = "";
    }
  }
  if (i === pe && (Object.keys(vt(a)).length > 0 || Object.keys(vt(d)).length > 0)) if (!en(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(vt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(vt(a)).concat(Object.keys(vt(d))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = u.props, f = p == null ? void 0 : p.className, v = typeof f == "function" ? (..._) => ho(f(..._), a.className) : ho(f, a.className), w = v ? { className: v } : {}, m = Fl(u.props, vt(kr(a, ["ref"])));
    for (let _ in d) _ in m && delete d[_];
    return Ko(u, Object.assign({}, m, d, c, { ref: o(Ju(u), c.ref) }, w));
  }
  return B(i, Object.assign({}, kr(a, ["ref"]), i !== pe && c, i !== pe && d), u);
}
function Zu() {
  let e = U([]), t = ee((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Xu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Fl(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let s = n[r];
    for (let l of s) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      l(o, ...i);
    }
  } });
  return t;
}
function ei(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let s of i) s == null || s(...o);
  } });
  return t;
}
function Ce(e) {
  var t;
  return Object.assign(fe(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function vt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function kr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ju(e) {
  return K.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Qu(e, t, n) {
  let [r, o] = Y(n), i = e !== void 0, s = U(i), l = U(!1), a = U(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Q((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function ed(e) {
  let [t] = Y(e);
  return t;
}
function Pl(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Nl(n, kl(t, r), o);
  return n;
}
function kl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Nl(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Nl(e, kl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Pl(n, t, e);
}
let td = "span";
var Xt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Xt || {});
function nd(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Re()({ ourProps: i, theirProps: o, slot: {}, defaultTag: td, name: "Hidden" });
}
let xn = Ce(nd), rd = ge(null);
function od({ children: e }) {
  let t = he(rd);
  if (!t) return K.createElement(K.Fragment, null, e);
  let { target: n } = t;
  return n ? Qt(K.createElement(K.Fragment, null, e), n) : null;
}
function id({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = Y(null), l = Vt();
  return se(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), K.createElement(od, null, K.createElement(sd, { setForm: s, formId: t }), Pl(e).map(([a, c]) => K.createElement(xn, { features: Xt.Hidden, ...vt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: c, ...o }) })));
}
function sd({ setForm: e, formId: t }) {
  return se(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : K.createElement(xn, { features: Xt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let ld = ge(void 0);
function Ll() {
  return he(ld);
}
function ad(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && cd(n) ? !1 : r;
}
function cd(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Vl = Symbol();
function ud(e, t = !0) {
  return Object.assign(e, { [Vl]: t });
}
function Fe(...e) {
  let t = U(e);
  se(() => {
    t.current = e;
  }, [e]);
  let n = Q((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Vl])) ? void 0 : n;
}
let hr = ge(null);
hr.displayName = "DescriptionContext";
function Hl() {
  let e = he(hr);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Hl), t;
  }
  return e;
}
function dd() {
  var e, t;
  return (t = (e = he(hr)) == null ? void 0 : e.value) != null ? t : void 0;
}
function fd() {
  let [e, t] = Y([]);
  return [e.length > 0 ? e.join(" ") : void 0, ne(() => function(n) {
    let r = Q((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ne(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return K.createElement(hr.Provider, { value: o }, n.children);
  }, [t])];
}
let hd = "p";
function pd(e, t) {
  let n = Ie(), r = Qo(), { id: o = `headlessui-description-${n}`, ...i } = e, s = Hl(), l = Fe(t);
  me(() => s.register(o), [o, s.register]);
  let a = r || !1, c = ne(() => ({ ...s.slot, disabled: a }), [s.slot, a]), u = { ref: l, ...s.props, id: o };
  return Re()({ ourProps: u, theirProps: i, slot: c, defaultTag: hd, name: s.name || "Description" });
}
let md = Ce(pd), gd = Object.assign(md, {});
var Me = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Me || {});
let pr = ge(null);
pr.displayName = "LabelContext";
function zl() {
  let e = he(pr);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, zl), t;
  }
  return e;
}
function mr(e) {
  var t, n, r;
  let o = (n = (t = he(pr)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function vd({ inherit: e = !1 } = {}) {
  let t = mr(), [n, r] = Y([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ne(() => function(i) {
    let s = Q((a) => (r((c) => [...c, a]), () => r((c) => {
      let u = c.slice(), d = u.indexOf(a);
      return d !== -1 && u.splice(d, 1), u;
    }))), l = ne(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return K.createElement(pr.Provider, { value: l }, i.children);
  }, [r])];
}
let wd = "label";
function yd(e, t) {
  var n;
  let r = Ie(), o = zl(), i = Ll(), s = Qo(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...u } = e, d = Fe(t);
  me(() => o.register(l), [l, o.register]);
  let p = Q((m) => {
    let _ = m.currentTarget;
    if (_ instanceof HTMLLabelElement && m.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(m), _ instanceof HTMLLabelElement) {
      let y = document.getElementById(_.htmlFor);
      if (y) {
        let S = y.getAttribute("disabled");
        if (S === "true" || S === "") return;
        let E = y.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (y instanceof HTMLInputElement && (y.type === "radio" || y.type === "checkbox") || y.role === "radio" || y.role === "checkbox" || y.role === "switch") && y.click(), y.focus({ preventScroll: !0 });
      }
    }
  }), f = s || !1, v = ne(() => ({ ...o.slot, disabled: f }), [o.slot, f]), w = { ref: d, ...o.props, id: l, htmlFor: a, onClick: p };
  return c && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Re()({ ourProps: w, theirProps: u, slot: v, defaultTag: a ? wd : "div", name: o.name || "Label" });
}
let bd = Ce(yd), _d = Object.assign(bd, {}), xd = ge(() => {
});
function Sd({ value: e, children: t }) {
  return K.createElement(xd.Provider, { value: e }, t);
}
function jt(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, l, a, c;
    let u;
    n.key && ((s = n.debug) != null && s.call(n)) && (u = Date.now());
    const d = e();
    if (!(d.length !== r.length || d.some((v, w) => r[w] !== v)))
      return o;
    r = d;
    let f;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (f = Date.now()), o = t(...d), n.key && ((a = n.debug) != null && a.call(n))) {
      const v = Math.round((Date.now() - u) * 100) / 100, w = Math.round((Date.now() - f) * 100) / 100, m = w / 16, _ = (y, S) => {
        for (y = String(y); y.length < S; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${_(w, 5)} /${_(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (c = n == null ? void 0 : n.onChange) == null || c.call(n, o), o;
  }
  return i.updateDeps = (s) => {
    r = s;
  }, i;
}
function Yi(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Cd = (e, t) => Math.abs(e - t) <= 1, Ed = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var cn = { NODE_ENV: "production" };
const Ki = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Rd = (e) => e, $d = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Td = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (s) => {
    const { width: l, height: a } = s;
    t({ width: Math.round(l), height: Math.round(a) });
  };
  if (o(Ki(n)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((s) => {
    const l = () => {
      const a = s[0];
      if (a != null && a.borderBoxSize) {
        const c = a.borderBoxSize[0];
        if (c) {
          o({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      o(Ki(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Zi = {
  passive: !0
}, Xi = typeof window > "u" ? !0 : "onscrollend" in window, Md = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && Xi ? () => {
  } : Ed(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (u) => () => {
    const { horizontal: d, isRtl: p } = e.options;
    o = d ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, u);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, Zi);
  const c = e.options.useScrollendEvent && Xi;
  return c && n.addEventListener("scrollend", a, Zi), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
  };
}, Od = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Id = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var o, i;
  const s = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, {
    [r.options.horizontal ? "left" : "top"]: s,
    behavior: n
  });
};
class Dd {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const s = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), n = null;
        },
        observe: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Rd,
        rangeExtractor: $d,
        onChange: () => {
        },
        measureElement: Od,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = jt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: cn.NODE_ENV !== "production",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let s = r - 1; s >= 0; s--) {
        const l = n[s];
        if (o.has(l.lane))
          continue;
        const a = i.get(
          l.lane
        );
        if (a == null || l.end > a.end ? i.set(l.lane, l) : l.end < a.end && o.set(l.lane, !0), o.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((s, l) => s.end === l.end ? s.index - l.index : s.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = jt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, o, i, s) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: i,
        enabled: s
      }),
      {
        key: !1
      }
    ), this.getMeasurements = jt(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: s }, l) => {
        if (!s)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const a = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, a);
        for (let u = a; u < n; u++) {
          const d = i(u), p = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), f = p ? p.end + this.options.gap : r + o, v = l.get(d), w = typeof v == "number" ? v : this.options.estimateSize(u), m = f + w, _ = p ? p.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: f,
            size: w,
            end: m,
            key: d,
            lane: _
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: cn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = jt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Ad({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: cn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = jt(
      () => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, o, i, s) => i === null || s === null ? [] : n({
        startIndex: i,
        endIndex: s,
        overscan: r,
        count: o
      }),
      {
        key: cn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i)
        return;
      const s = i.key, l = this.elementsCache.get(s);
      l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(s, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, s = r - i;
      s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, s, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = jt(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const o = [];
        for (let i = 0, s = n.length; i < s; i++) {
          const l = n[i], a = r[l];
          o.push(a);
        }
        return o;
      },
      {
        key: cn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Yi(
          r[Bl(
            0,
            r.length - 1,
            (o) => Yi(r[o]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      const i = this.getSize(), s = this.getScrollOffset();
      r === "auto" && (r = n >= s + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const l = this.getTotalSize() - i;
      return Math.max(Math.min(l, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o)
        return;
      const i = this.getSize(), s = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= s + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= s + this.options.scrollPaddingStart)
          r = "start";
        else
          return [s, r];
      const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(l, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      n = Math.max(0, Math.min(n, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const i = this.getOffsetForIndex(n, r);
      if (!i) return;
      const [s, l] = i;
      this._scrollToOffset(s, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(n)
        )) {
          const c = this.getOffsetForIndex(n, l);
          if (!c) return;
          const [u] = c, d = this.getScrollOffset();
          Cd(u, d) || this.scrollToIndex(n, { align: l, behavior: o });
        } else
          this.scrollToIndex(n, { align: l, behavior: o });
      }));
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let s = r.length - 1;
        for (; s >= 0 && i.some((l) => l === null); ) {
          const l = r[s];
          i[l.lane] === null && (i[l.lane] = l.end), s--;
        }
        o = Math.max(...i.filter((l) => l !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const Bl = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r)
      e = o + 1;
    else if (i > r)
      t = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Ad({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const o = e.length - 1, i = (a) => e[a].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let s = Bl(
    0,
    o,
    i,
    n
  ), l = s;
  if (r === 1)
    for (; l < o && e[l].end < n + t; )
      l++;
  else if (r > 1) {
    const a = Array(r).fill(0);
    for (; l < o && a.some((u) => u < n + t); ) {
      const u = e[l];
      a[u.lane] = u.end, l++;
    }
    const c = Array(r).fill(n + t);
    for (; s >= 0 && c.some((u) => u >= n); ) {
      const u = e[s];
      c[u.lane] = u.start, s--;
    }
    s = Math.max(0, s - s % r), l = Math.min(o, l + (r - 1 - l % r));
  }
  return { startIndex: s, endIndex: l };
}
const Ji = typeof document < "u" ? Ge : se;
function Fd(e) {
  const t = tt(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? Ne(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = Y(
    () => new Dd(n)
  );
  return r.setOptions(n), Ji(() => r._didMount(), []), Ji(() => r._willUpdate()), r;
}
function jl(e) {
  return Fd({
    observeElementRect: Td,
    observeElementOffset: Md,
    scrollToFn: Id,
    ...e
  });
}
function Pd(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function kd(e = Pd) {
  return ee((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Nd(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Qi(e, t = !1) {
  let [n, r] = tt(() => ({}), {}), o = ne(() => Nd(e), [e, n]);
  return me(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let Ld = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Ul(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let s = t[o].call(n, ...i);
    s && (n = s, r.forEach((l) => l()));
  } };
}
function Wl(e) {
  return dr(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Vd = new Ld(() => Ul(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function nn(e, t) {
  let n = Vd.get(t), r = Ie(), o = Wl(n);
  if (me(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let po = /* @__PURE__ */ new Map(), gn = /* @__PURE__ */ new Map();
function es(e) {
  var t;
  let n = (t = gn.get(e)) != null ? t : 0;
  return gn.set(e, n + 1), n !== 0 ? () => ts(e) : (po.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => ts(e));
}
function ts(e) {
  var t;
  let n = (t = gn.get(e)) != null ? t : 1;
  if (n === 1 ? gn.delete(e) : gn.set(e, n - 1), n !== 1) return;
  let r = po.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, po.delete(e));
}
function Gl(e, { allowed: t, disallowed: n } = {}) {
  let r = nn(e, "inert-others");
  me(() => {
    var o, i;
    if (!r) return;
    let s = Qe();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(es(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let c = tn(a);
      if (!c) continue;
      let u = a.parentElement;
      for (; u && u !== c.body; ) {
        for (let d of u.children) l.some((p) => d.contains(p)) || s.add(es(d));
        u = u.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function ql(e, t, n) {
  let r = Rt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  se(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Qe();
    if (typeof ResizeObserver < "u") {
      let s = new ResizeObserver(() => r.current(o));
      s.observe(o), i.add(() => s.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let s = new IntersectionObserver(() => r.current(o));
      s.observe(o), i.add(() => s.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let tr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Hd = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(ct || {}), mo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(mo || {}), zd = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(zd || {});
function Bd(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(tr)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function jd(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Hd)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Yl = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Yl || {});
function Ud(e, t = 0) {
  var n;
  return e === ((n = tn(e)) == null ? void 0 : n.body) ? !1 : ke(t, { 0() {
    return e.matches(tr);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(tr)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Wd = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Wd || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ht(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Gd = ["textarea", "input"].join(",");
function qd(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Gd)) != null ? n : !1;
}
function Kl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function vn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? Kl(e) : e : t & 64 ? jd(e) : Bd(e);
  o.length > 0 && s.length > 1 && (s = s.filter((f) => !o.some((v) => v != null && "current" in v ? (v == null ? void 0 : v.current) === f : v === f))), r = r ?? i.activeElement;
  let l = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, u = 0, d = s.length, p;
  do {
    if (u >= d || u + d <= 0) return 0;
    let f = a + u;
    if (t & 16) f = (f + d) % d;
    else {
      if (f < 0) return 3;
      if (f >= d) return 1;
    }
    p = s[f], p == null || p.focus(c), u += l;
  } while (p !== i.activeElement);
  return t & 6 && qd(p) && p.select(), 2;
}
function Zl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Yd() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Xl() {
  return Zl() || Yd();
}
function un(e, t, n, r) {
  let o = Rt(n);
  se(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Jl(e, t, n, r) {
  let o = Rt(n);
  se(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const ns = 30;
function Ql(e, t, n) {
  let r = nn(e, "outside-click"), o = Rt(n), i = ee(function(a, c) {
    if (a.defaultPrevented) return;
    let u = c(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let d = function p(f) {
      return typeof f == "function" ? p(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let p of d) if (p !== null && (p.contains(u) || a.composed && a.composedPath().includes(p))) return;
    return !Ud(u, Yl.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), s = U(null);
  un(r, "pointerdown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), un(r, "mousedown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), un(r, "click", (a) => {
    Xl() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = U({ x: 0, y: 0 });
  un(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), un(r, "touchend", (a) => {
    let c = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= ns || Math.abs(c.y - l.current.y) >= ns)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Jl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Ht(...e) {
  return ne(() => tn(...e), [...e]);
}
function ti(e, t, n, r) {
  let o = Rt(n);
  se(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ea(e) {
  let t = U({ value: "", selectionStart: null, selectionEnd: null });
  return ti(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), Q(() => {
    if (document.activeElement !== e && e instanceof HTMLInputElement && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Kd(e, t) {
  return ne(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Zd() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function Xd() {
  return Zl() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = Qe();
        l.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => l.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, s = null;
      t.addEventListener(e, "click", (l) => {
        if (l.target instanceof HTMLElement) try {
          let a = l.target.closest("a");
          if (!a) return;
          let { hash: c } = new URL(a.href), u = e.querySelector(c);
          u && !r(u) && (s = u);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (l) => {
        if (l.target instanceof HTMLElement) if (r(l.target)) {
          let a = l.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(l.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (l) => {
        if (l.target instanceof HTMLElement) {
          if (l.target.tagName === "INPUT") return;
          if (r(l.target)) {
            let a = l.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && l.preventDefault();
          } else l.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var l;
        let a = (l = window.scrollY) != null ? l : window.pageYOffset;
        i !== a && window.scrollTo(0, i), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
      });
    });
  } } : {};
}
function Jd() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Qd(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Dt = Ul(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Qe(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Qd(n) }, o = [Xd(), Zd(), Jd()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Dt.subscribe(() => {
  let e = Dt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Dt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Dt.dispatch("TEARDOWN", n);
  }
});
function ef(e, t, n = () => ({ containers: [] })) {
  let r = Wl(Dt), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return me(() => {
    if (!(!t || !e)) return Dt.dispatch("PUSH", t, n), () => Dt.dispatch("POP", t, n);
  }, [e, t]), i;
}
function ta(e, t, n = () => [document.body]) {
  let r = nn(e, "scroll-lock");
  ef(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function rs(e) {
  return [e.screenX, e.screenY];
}
function tf() {
  let e = U([-1, -1]);
  return { wasMoved(t) {
    let n = rs(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = rs(t);
  } };
}
function nf(e = 0) {
  let [t, n] = Y(e), r = ee((a) => n(a), [t]), o = ee((a) => n((c) => c | a), [t]), i = ee((a) => (t & a) === a, [t]), s = ee((a) => n((c) => c & ~a), [n]), l = ee((a) => n((c) => c ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var rf = { NODE_ENV: "production" }, os, is;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((os = process == null ? void 0 : rf) == null ? void 0 : os.NODE_ENV) === "test" && typeof ((is = Element == null ? void 0 : Element.prototype) == null ? void 0 : is.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var of = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(of || {});
function na(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ra(e, t, n, r) {
  let [o, i] = Y(n), { hasFlag: s, addFlag: l, removeFlag: a } = nf(e && o ? 3 : 0), c = U(!1), u = U(!1), d = Vt();
  return me(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), sf(t, { inFlight: c, prepare() {
        u.current ? u.current = !1 : u.current = c.current, c.current = !0, !u.current && (n ? (l(3), a(4)) : (l(4), a(2)));
      }, run() {
        u.current ? n ? (a(3), l(4)) : (a(4), l(3)) : n ? a(1) : l(1);
      }, done() {
        var f;
        u.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (c.current = !1, a(7), n || i(!1), (f = r == null ? void 0 : r.end) == null || f.call(r, n));
      } });
    }
  }, [e, n, t, d]), e ? [o, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function sf(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Qe();
  return af(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(lf(e, r));
    });
  }), i.dispose;
}
function lf(e, t) {
  var n, r;
  let o = Qe();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let s = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((l) => l instanceof CSSTransition)) != null ? r : [];
  return s.length === 0 ? (t(), o.dispose) : (Promise.allSettled(s.map((l) => l.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function af(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function cf(e, { container: t, accept: n, walk: r }) {
  let o = U(n), i = U(r);
  se(() => {
    o.current = n, i.current = r;
  }, [n, r]), me(() => {
    if (!t || !e) return;
    let s = tn(t);
    if (!s) return;
    let l = o.current, a = i.current, c = Object.assign((d) => l(d), { acceptNode: l }), u = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, c, !1);
    for (; u.nextNode(); ) a(u.currentNode);
  }, [t, e, o, i]);
}
function Sn(e, t) {
  let n = U([]), r = Q(e);
  se(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function gr() {
  return typeof window < "u";
}
function rn(e) {
  return oa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nt(e) {
  var t;
  return (t = (oa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function oa(e) {
  return gr() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function De(e) {
  return gr() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function et(e) {
  return gr() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function ss(e) {
  return !gr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function Mn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function uf(e) {
  return ["table", "td", "th"].includes(rn(e));
}
function vr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ni(e) {
  const t = ri(), n = De(e) ? We(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function df(e) {
  let t = _t(e);
  for (; et(t) && !Jt(t); ) {
    if (ni(t))
      return t;
    if (vr(t))
      return null;
    t = _t(t);
  }
  return null;
}
function ri() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Jt(e) {
  return ["html", "body", "#document"].includes(rn(e));
}
function We(e) {
  return Le(e).getComputedStyle(e);
}
function wr(e) {
  return De(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _t(e) {
  if (rn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ss(e) && e.host || // Fallback.
    nt(e)
  );
  return ss(t) ? t.host : t;
}
function ia(e) {
  const t = _t(e);
  return Jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : et(t) && Mn(t) ? t : ia(t);
}
function Cn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ia(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Le(o);
  if (i) {
    const l = go(s);
    return t.concat(s, s.visualViewport || [], Mn(o) ? o : [], l && n ? Cn(l) : []);
  }
  return t.concat(o, Cn(o, [], n));
}
function go(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ff() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const kt = Math.min, Oe = Math.max, En = Math.round, Vn = Math.floor, Je = (e) => ({
  x: e,
  y: e
}), hf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pf = {
  start: "end",
  end: "start"
};
function ls(e, t, n) {
  return Oe(e, kt(t, n));
}
function on(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xt(e) {
  return e.split("-")[0];
}
function On(e) {
  return e.split("-")[1];
}
function sa(e) {
  return e === "x" ? "y" : "x";
}
function la(e) {
  return e === "y" ? "height" : "width";
}
function bt(e) {
  return ["top", "bottom"].includes(xt(e)) ? "y" : "x";
}
function aa(e) {
  return sa(bt(e));
}
function mf(e, t, n) {
  n === void 0 && (n = !1);
  const r = On(e), o = aa(e), i = la(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = nr(s)), [s, nr(s)];
}
function gf(e) {
  const t = nr(e);
  return [vo(e), t, vo(t)];
}
function vo(e) {
  return e.replace(/start|end/g, (t) => pf[t]);
}
function vf(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function wf(e, t, n, r) {
  const o = On(e);
  let i = vf(xt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(vo)))), i;
}
function nr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hf[t]);
}
function yf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bf(e) {
  return typeof e != "number" ? yf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function rr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function as(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = bt(t), s = aa(t), l = la(s), a = xt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (On(t)) {
    case "start":
      f[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += p * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const _f = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = as(c, r, a), p = r, f = {}, v = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: m,
      fn: _
    } = l[w], {
      x: y,
      y: S,
      data: E,
      reset: T
    } = await _({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: f,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, d = S ?? d, f = {
      ...f,
      [m]: {
        ...f[m],
        ...E
      }
    }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: u,
      y: d
    } = as(c, p, a)), w = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: f
  };
};
async function yr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = on(t, e), v = bf(f), m = l[p ? d === "floating" ? "reference" : "floating" : d], _ = rr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), y = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), E = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = rr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: y,
    offsetParent: S,
    strategy: a
  }) : y);
  return {
    top: (_.top - T.top + v.top) / E.y,
    bottom: (T.bottom - _.bottom + v.bottom) / E.y,
    left: (_.left - T.left + v.left) / E.x,
    right: (T.right - _.right + v.right) / E.x
  };
}
const xf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: w = !0,
        ...m
      } = on(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = xt(o), y = bt(l), S = xt(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), T = p || (S || !w ? [nr(l)] : gf(l)), P = v !== "none";
      !p && P && T.push(...wf(l, w, v, E));
      const I = [l, ...T], x = await yr(t, m), g = [];
      let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && g.push(x[_]), d) {
        const k = mf(o, s, E);
        g.push(x[k[0]], x[k[1]]);
      }
      if (b = [...b, {
        placement: o,
        overflows: g
      }], !g.every((k) => k <= 0)) {
        var C, R;
        const k = (((C = i.flip) == null ? void 0 : C.index) || 0) + 1, $ = I[k];
        if ($) {
          var N;
          const O = d === "alignment" ? y !== bt($) : !1, A = ((N = b[0]) == null ? void 0 : N.overflows[0]) > 0;
          if (!O || A)
            return {
              data: {
                index: k,
                overflows: b
              },
              reset: {
                placement: $
              }
            };
        }
        let M = (R = b.filter((O) => O.overflows[0] <= 0).sort((O, A) => O.overflows[1] - A.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!M)
          switch (f) {
            case "bestFit": {
              var D;
              const O = (D = b.filter((A) => {
                if (P) {
                  const H = bt(A.placement);
                  return H === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((A, H) => A[1] - H[1])[0]) == null ? void 0 : D[0];
              O && (M = O);
              break;
            }
            case "initialPlacement":
              M = l;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function Sf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = xt(n), l = On(n), a = bt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && a ? -1 : 1, d = on(t, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof v == "number" && (f = l === "end" ? v * -1 : v), a ? {
    x: f * u,
    y: p * c
  } : {
    x: p * c,
    y: f * u
  };
}
const Cf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, a = await Sf(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, Ef = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (m) => {
            let {
              x: _,
              y
            } = m;
            return {
              x: _,
              y
            };
          }
        },
        ...a
      } = on(e, t), c = {
        x: n,
        y: r
      }, u = await yr(t, a), d = bt(xt(o)), p = sa(d);
      let f = c[p], v = c[d];
      if (i) {
        const m = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", y = f + u[m], S = f - u[_];
        f = ls(y, f, S);
      }
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", y = v + u[m], S = v - u[_];
        v = ls(y, v, S);
      }
      const w = l.fn({
        ...t,
        [p]: f,
        [d]: v
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [p]: i,
            [d]: s
          }
        }
      };
    }
  };
}, Rf = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...c
      } = on(e, t), u = await yr(t, c), d = xt(o), p = On(o), f = bt(o) === "y", {
        width: v,
        height: w
      } = i.floating;
      let m, _;
      d === "top" || d === "bottom" ? (m = d, _ = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, m = p === "end" ? "top" : "bottom");
      const y = w - u.top - u.bottom, S = v - u.left - u.right, E = kt(w - u[m], y), T = kt(v - u[_], S), P = !t.middlewareData.shift;
      let I = E, x = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (x = S), (r = t.middlewareData.shift) != null && r.enabled.y && (I = y), P && !p) {
        const b = Oe(u.left, 0), C = Oe(u.right, 0), R = Oe(u.top, 0), N = Oe(u.bottom, 0);
        f ? x = v - 2 * (b !== 0 || C !== 0 ? b + C : Oe(u.left, u.right)) : I = w - 2 * (R !== 0 || N !== 0 ? R + N : Oe(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: x,
        availableHeight: I
      });
      const g = await s.getDimensions(l.floating);
      return v !== g.width || w !== g.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ca(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = et(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = En(n) !== i || En(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function oi(e) {
  return De(e) ? e : e.contextElement;
}
function qt(e) {
  const t = oi(e);
  if (!et(t))
    return Je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ca(t);
  let s = (i ? En(n.width) : n.width) / r, l = (i ? En(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const $f = /* @__PURE__ */ Je(0);
function ua(e) {
  const t = Le(e);
  return !ri() || !t.visualViewport ? $f : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Nt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = oi(e);
  let s = Je(1);
  t && (r ? De(r) && (s = qt(r)) : s = qt(e));
  const l = Tf(i, n, r) ? ua(i) : Je(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const p = Le(i), f = r && De(r) ? Le(r) : r;
    let v = p, w = go(v);
    for (; w && r && f !== v; ) {
      const m = qt(w), _ = w.getBoundingClientRect(), y = We(w), S = _.left + (w.clientLeft + parseFloat(y.paddingLeft)) * m.x, E = _.top + (w.clientTop + parseFloat(y.paddingTop)) * m.y;
      a *= m.x, c *= m.y, u *= m.x, d *= m.y, a += S, c += E, v = Le(w), w = go(v);
    }
  }
  return rr({
    width: u,
    height: d,
    x: a,
    y: c
  });
}
function ii(e, t) {
  const n = wr(e).scrollLeft;
  return t ? t.left + n : Nt(nt(e)).left + n;
}
function da(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ii(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Mf(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = nt(r), l = t ? vr(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Je(1);
  const u = Je(0), d = et(r);
  if ((d || !d && !i) && ((rn(r) !== "body" || Mn(s)) && (a = wr(r)), et(r))) {
    const f = Nt(r);
    c = qt(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  const p = s && !d && !i ? da(s, a, !0) : Je(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + p.y
  };
}
function Of(e) {
  return Array.from(e.getClientRects());
}
function If(e) {
  const t = nt(e), n = wr(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ii(e);
  const l = -n.scrollTop;
  return We(r).direction === "rtl" && (s += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Df(e, t) {
  const n = Le(e), r = nt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = ri();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Af(e, t) {
  const n = Nt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = et(e) ? qt(e) : Je(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function cs(e, t, n) {
  let r;
  if (t === "viewport")
    r = Df(e, n);
  else if (t === "document")
    r = If(nt(e));
  else if (De(t))
    r = Af(t, n);
  else {
    const o = ua(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return rr(r);
}
function fa(e, t) {
  const n = _t(e);
  return n === t || !De(n) || Jt(n) ? !1 : We(n).position === "fixed" || fa(n, t);
}
function Ff(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Cn(e, [], !1).filter((l) => De(l) && rn(l) !== "body"), o = null;
  const i = We(e).position === "fixed";
  let s = i ? _t(e) : e;
  for (; De(s) && !Jt(s); ) {
    const l = We(s), a = ni(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Mn(s) && !a && fa(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = _t(s);
  }
  return t.set(e, r), r;
}
function Pf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? vr(t) ? [] : Ff(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, u) => {
    const d = cs(t, u, o);
    return c.top = Oe(d.top, c.top), c.right = kt(d.right, c.right), c.bottom = kt(d.bottom, c.bottom), c.left = Oe(d.left, c.left), c;
  }, cs(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function kf(e) {
  const {
    width: t,
    height: n
  } = ca(e);
  return {
    width: t,
    height: n
  };
}
function Nf(e, t, n) {
  const r = et(t), o = nt(t), i = n === "fixed", s = Nt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Je(0);
  function c() {
    a.x = ii(o);
  }
  if (r || !r && !i)
    if ((rn(t) !== "body" || Mn(o)) && (l = wr(t)), r) {
      const f = Nt(t, !0, i, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? da(o, l) : Je(0), d = s.left + l.scrollLeft - a.x - u.x, p = s.top + l.scrollTop - a.y - u.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Nr(e) {
  return We(e).position === "static";
}
function us(e, t) {
  if (!et(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return nt(e) === n && (n = n.ownerDocument.body), n;
}
function ha(e, t) {
  const n = Le(e);
  if (vr(e))
    return n;
  if (!et(e)) {
    let o = _t(e);
    for (; o && !Jt(o); ) {
      if (De(o) && !Nr(o))
        return o;
      o = _t(o);
    }
    return n;
  }
  let r = us(e, t);
  for (; r && uf(r) && Nr(r); )
    r = us(r, t);
  return r && Jt(r) && Nr(r) && !ni(r) ? n : r || df(e) || n;
}
const Lf = async function(e) {
  const t = this.getOffsetParent || ha, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vf(e) {
  return We(e).direction === "rtl";
}
const Hf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mf,
  getDocumentElement: nt,
  getClippingRect: Pf,
  getOffsetParent: ha,
  getElementRects: Lf,
  getClientRects: Of,
  getDimensions: kf,
  getScale: qt,
  isElement: De,
  isRTL: Vf
};
function pa(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zf(e, t) {
  let n = null, r;
  const o = nt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: p,
      height: f
    } = c;
    if (l || t(), !p || !f)
      return;
    const v = Vn(d), w = Vn(o.clientWidth - (u + p)), m = Vn(o.clientHeight - (d + f)), _ = Vn(u), S = {
      rootMargin: -v + "px " + -w + "px " + -m + "px " + -_ + "px",
      threshold: Oe(0, kt(1, a)) || 1
    };
    let E = !0;
    function T(P) {
      const I = P[0].intersectionRatio;
      if (I !== a) {
        if (!E)
          return s();
        I ? s(!1, I) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !pa(c, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, S);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Bf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = oi(e), u = o || i ? [...c ? Cn(c) : [], ...Cn(t)] : [];
  u.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), i && _.addEventListener("resize", n);
  });
  const d = c && l ? zf(c, n) : null;
  let p = -1, f = null;
  s && (f = new ResizeObserver((_) => {
    let [y] = _;
    y && y.target === c && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = f) == null || S.observe(t);
    })), n();
  }), c && !a && f.observe(c), f.observe(t));
  let v, w = a ? Nt(e) : null;
  a && m();
  function m() {
    const _ = Nt(e);
    w && !pa(w, _) && n(), w = _, v = requestAnimationFrame(m);
  }
  return n(), () => {
    var _;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), d == null || d(), (_ = f) == null || _.disconnect(), f = null, a && cancelAnimationFrame(v);
  };
}
const Lr = yr, jf = Cf, Uf = Ef, Wf = xf, Gf = Rf, qf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Hf,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return _f(e, t, {
    ...o,
    platform: i
  });
};
var qn = typeof document < "u" ? Ge : se;
function or(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!or(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !or(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ma(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ds(e, t) {
  const n = ma(e);
  return Math.round(t * n) / n;
}
function Vr(e) {
  const t = U(e);
  return qn(() => {
    t.current = e;
  }), t;
}
function Yf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: a,
    open: c
  } = e, [u, d] = Y({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = Y(r);
  or(p, r) || f(r);
  const [v, w] = Y(null), [m, _] = Y(null), y = ee((O) => {
    O !== P.current && (P.current = O, w(O));
  }, []), S = ee((O) => {
    O !== I.current && (I.current = O, _(O));
  }, []), E = i || v, T = s || m, P = U(null), I = U(null), x = U(u), g = a != null, b = Vr(a), C = Vr(o), R = Vr(c), N = ee(() => {
    if (!P.current || !I.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: p
    };
    C.current && (O.platform = C.current), qf(P.current, I.current, O).then((A) => {
      const H = {
        ...A,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      D.current && !or(x.current, H) && (x.current = H, Ne(() => {
        d(H);
      }));
    });
  }, [p, t, n, C, R]);
  qn(() => {
    c === !1 && x.current.isPositioned && (x.current.isPositioned = !1, d((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [c]);
  const D = U(!1);
  qn(() => (D.current = !0, () => {
    D.current = !1;
  }), []), qn(() => {
    if (E && (P.current = E), T && (I.current = T), E && T) {
      if (b.current)
        return b.current(E, T, N);
      N();
    }
  }, [E, T, N, b, g]);
  const k = ne(() => ({
    reference: P,
    floating: I,
    setReference: y,
    setFloating: S
  }), [y, S]), $ = ne(() => ({
    reference: E,
    floating: T
  }), [E, T]), M = ne(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return O;
    const A = ds($.floating, u.x), H = ds($.floating, u.y);
    return l ? {
      ...O,
      transform: "translate(" + A + "px, " + H + "px)",
      ...ma($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: H
    };
  }, [n, l, $.floating, u.x, u.y]);
  return ne(() => ({
    ...u,
    update: N,
    refs: k,
    elements: $,
    floatingStyles: M
  }), [u, N, k, $, M]);
}
const ga = (e, t) => ({
  ...jf(e),
  options: [e, t]
}), Kf = (e, t) => ({
  ...Uf(e),
  options: [e, t]
}), Zf = (e, t) => ({
  ...Wf(e),
  options: [e, t]
}), Xf = (e, t) => ({
  ...Gf(e),
  options: [e, t]
}), va = {
  ...so
}, Jf = va.useInsertionEffect, Qf = Jf || ((e) => e());
function wa(e) {
  const t = U(() => {
  });
  return Qf(() => {
    t.current = e;
  }), ee(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var wo = typeof document < "u" ? Ge : se;
let fs = !1, eh = 0;
const hs = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + eh++
);
function th() {
  const [e, t] = Y(() => fs ? hs() : void 0);
  return wo(() => {
    e == null && t(hs());
  }, []), se(() => {
    fs = !0;
  }, []), e;
}
const nh = va.useId, rh = nh || th;
function oh() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const ih = /* @__PURE__ */ ge(null), sh = /* @__PURE__ */ ge(null), lh = () => {
  var e;
  return ((e = he(ih)) == null ? void 0 : e.id) || null;
}, ah = () => he(sh), ch = "data-floating-ui-focusable";
function uh(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = rh(), i = U({}), [s] = Y(() => oh()), l = lh() != null, [a, c] = Y(r.reference), u = wa((f, v, w) => {
    i.current.openEvent = f ? v : void 0, s.emit("openchange", {
      open: f,
      event: v,
      reason: w,
      nested: l
    }), n == null || n(f, v, w);
  }), d = ne(() => ({
    setPositionReference: c
  }), []), p = ne(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return ne(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: p,
    events: s,
    floatingId: o,
    refs: d
  }), [t, u, p, s, o, d]);
}
function dh(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = uh({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = Y(null), [l, a] = Y(null), u = (o == null ? void 0 : o.domReference) || i, d = U(null), p = ah();
  wo(() => {
    u && (d.current = u);
  }, [u]);
  const f = Yf({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), v = ee((S) => {
    const E = De(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    a(E), f.refs.setReference(E);
  }, [f.refs]), w = ee((S) => {
    (De(S) || S === null) && (d.current = S, s(S)), (De(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    S !== null && !De(S)) && f.refs.setReference(S);
  }, [f.refs]), m = ne(() => ({
    ...f.refs,
    setReference: w,
    setPositionReference: v,
    domReference: d
  }), [f.refs, w, v]), _ = ne(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), y = ne(() => ({
    ...f,
    ...r,
    refs: m,
    elements: _,
    nodeId: t
  }), [f, m, _, t, r]);
  return wo(() => {
    r.dataRef.current.floatingContext = y;
    const S = p == null ? void 0 : p.nodesRef.current.find((E) => E.id === t);
    S && (S.context = y);
  }), ne(() => ({
    ...f,
    context: y,
    refs: m,
    elements: _
  }), [f, m, _, y]);
}
const ps = "active", ms = "selected";
function Hr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [ps]: s,
      [ms]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [ch]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [c, u] = a;
      if (!(o && [ps, ms].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var d;
            (d = r.get(c)) == null || d.push(u), s[c] = function() {
              for (var p, f = arguments.length, v = new Array(f), w = 0; w < f; w++)
                v[w] = arguments[w];
              return (p = r.get(c)) == null ? void 0 : p.map((m) => m(...v)).find((m) => m !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function fh(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = ee(
    (l) => Hr(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = ee(
    (l) => Hr(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = ee(
    (l) => Hr(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return ne(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function gs(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const hh = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: s = 0,
      minItemsVisible: l = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: c,
      ...u
    } = on(e, t), {
      rects: d,
      elements: {
        floating: p
      }
    } = t, f = n.current[s], v = (c == null ? void 0 : c.current) || p, w = p.clientTop || v.clientTop, m = p.clientTop !== 0, _ = v.clientTop !== 0, y = p === v;
    if (!f)
      return {};
    const S = {
      ...t,
      ...await ga(-f.offsetTop - p.clientTop - d.reference.height / 2 - f.offsetHeight / 2 - i).fn(t)
    }, E = await Lr(gs(S, v.scrollHeight + w + p.clientTop), u), T = await Lr(S, {
      ...u,
      elementContext: "reference"
    }), P = Oe(0, E.top), I = S.y + P, b = (v.scrollHeight > v.clientHeight ? (C) => C : En)(Oe(0, v.scrollHeight + (m && y || _ ? w * 2 : 0) - P - Oe(0, E.bottom)));
    if (v.style.maxHeight = b + "px", v.scrollTop = P, o) {
      const C = v.offsetHeight < f.offsetHeight * kt(l, n.current.length) - 1 || T.top >= -a || T.bottom >= -a;
      Ne(() => o(C));
    }
    return r && (r.current = await Lr(gs({
      ...S,
      y: I
    }, v.offsetHeight + w + p.clientTop), u)), {
      y: I
    };
  }
});
function ph(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = wa(l), c = U(!1), u = U(null), d = U(null);
  se(() => {
    if (!o) return;
    function f(w) {
      if (w.ctrlKey || !v || i.current == null)
        return;
      const m = w.deltaY, _ = i.current.top >= -0.5, y = i.current.bottom >= -0.5, S = v.scrollHeight - v.clientHeight, E = m < 0 ? -1 : 1, T = m < 0 ? "max" : "min";
      v.scrollHeight <= v.clientHeight || (!_ && m > 0 || !y && m < 0 ? (w.preventDefault(), Ne(() => {
        a((P) => P + Math[T](m, S * E));
      })) : /firefox/i.test(ff()) && (v.scrollTop += m));
    }
    const v = (s == null ? void 0 : s.current) || r.floating;
    if (n && v)
      return v.addEventListener("wheel", f), requestAnimationFrame(() => {
        u.current = v.scrollTop, i.current != null && (d.current = {
          ...i.current
        });
      }), () => {
        u.current = null, d.current = null, v.removeEventListener("wheel", f);
      };
  }, [o, n, r.floating, i, s, a]);
  const p = ne(() => ({
    onKeyDown() {
      c.current = !0;
    },
    onWheel() {
      c.current = !1;
    },
    onPointerMove() {
      c.current = !1;
    },
    onScroll() {
      const f = (s == null ? void 0 : s.current) || r.floating;
      if (!(!i.current || !f || !c.current)) {
        if (u.current !== null) {
          const v = f.scrollTop - u.current;
          (i.current.bottom < -0.5 && v < -1 || i.current.top < -0.5 && v > 1) && Ne(() => a((w) => w + v));
        }
        requestAnimationFrame(() => {
          u.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, s]);
  return ne(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let In = ge({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
In.displayName = "FloatingContext";
let si = ge(null);
si.displayName = "PlacementContext";
function mh(e) {
  return ne(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function gh() {
  return he(In).setReference;
}
function vh() {
  let { getFloatingProps: e, slot: t } = he(In);
  return ee((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function wh(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = he(si), n = ne(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  me(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = he(In);
  return ne(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let vs = 4;
function yh({ children: e, enabled: t = !0 }) {
  let [n, r] = Y(null), [o, i] = Y(0), s = U(null), [l, a] = Y(null);
  bh(l);
  let c = t && n !== null && l !== null, { to: u = "bottom", gap: d = 0, offset: p = 0, padding: f = 0, inner: v } = _h(n, l), [w, m = "center"] = u.split(" ");
  me(() => {
    c && i(0);
  }, [c]);
  let { refs: _, floatingStyles: y, context: S } = dh({ open: c, placement: w === "selection" ? m === "center" ? "bottom" : `bottom-${m}` : m === "center" ? `${w}` : `${w}-${m}`, strategy: "absolute", transform: !1, middleware: [ga({ mainAxis: w === "selection" ? 0 : d, crossAxis: p }), Kf({ padding: f }), w !== "selection" && Zf({ padding: f }), w === "selection" && v ? hh({ ...v, padding: f, overflowRef: s, offset: o, minItemsVisible: vs, referenceOverflowThreshold: f, onFallbackChange(C) {
    var R, N;
    if (!C) return;
    let D = S.elements.floating;
    if (!D) return;
    let k = parseFloat(getComputedStyle(D).scrollPaddingBottom) || 0, $ = Math.min(vs, D.childElementCount), M = 0, O = 0;
    for (let A of (N = (R = S.elements.floating) == null ? void 0 : R.childNodes) != null ? N : []) if (A instanceof HTMLElement) {
      let H = A.offsetTop, V = H + A.clientHeight + k, L = D.scrollTop, F = L + D.clientHeight;
      if (H >= L && V <= F) $--;
      else {
        O = Math.max(0, Math.min(V, F) - Math.max(H, L)), M = A.clientHeight;
        break;
      }
    }
    $ >= 1 && i((A) => {
      let H = M * $ - O + k;
      return A >= H ? A : H;
    });
  } }) : null, Xf({ padding: f, apply({ availableWidth: C, availableHeight: R, elements: N }) {
    Object.assign(N.floating.style, { overflow: "auto", maxWidth: `${C}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${R}px)` });
  } })].filter(Boolean), whileElementsMounted: Bf }), [E = w, T = m] = S.placement.split("-");
  w === "selection" && (E = "selection");
  let P = ne(() => ({ anchor: [E, T].filter(Boolean).join(" ") }), [E, T]), I = ph(S, { overflowRef: s, onChange: i }), { getReferenceProps: x, getFloatingProps: g } = fh([I]), b = Q((C) => {
    a(C), _.setFloating(C);
  });
  return B(si.Provider, { value: r }, B(In.Provider, { value: { setFloating: b, setReference: _.setReference, styles: y, getReferenceProps: x, getFloatingProps: g, slot: P } }, e));
}
function bh(e) {
  me(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function _h(e, t) {
  var n, r, o;
  let i = zr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = zr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = zr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function zr(e, t, n = void 0) {
  let r = Vt(), o = Q((a, c) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!c) return [n, null];
      let u = ws(a, c);
      return [u, (d) => {
        let p = ya(a);
        {
          let f = p.map((v) => window.getComputedStyle(c).getPropertyValue(v));
          r.requestAnimationFrame(function v() {
            r.nextFrame(v);
            let w = !1;
            for (let [_, y] of p.entries()) {
              let S = window.getComputedStyle(c).getPropertyValue(y);
              if (f[_] !== S) {
                f[_] = S, w = !0;
                break;
              }
            }
            if (!w) return;
            let m = ws(a, c);
            u !== m && (d(m), u = m);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = ne(() => o(e, t)[0], [e, t]), [s = i, l] = Y();
  return me(() => {
    let [a, c] = o(e, t);
    if (l(a), !!c) return c(l);
  }, [e, t]), s;
}
function ya(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...ya(o)] : [r];
  }
  return [];
}
function ws(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function xh({ children: e, freeze: t }) {
  let n = yo(t, e);
  return K.createElement(K.Fragment, null, n);
}
function yo(e, t) {
  let [n, r] = Y(t);
  return !e && n !== t && r(t), e ? n : t;
}
let br = ge(null);
br.displayName = "OpenClosedContext";
var Ae = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ae || {});
function Dn() {
  return he(br);
}
function ba({ value: e, children: t }) {
  return K.createElement(br.Provider, { value: e }, t);
}
function Sh({ children: e }) {
  return K.createElement(br.Provider, { value: null }, e);
}
function Ch(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ze = [];
Ch(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ze[0] === t.target) return;
    let n = t.target;
    n = n.closest(tr), Ze.unshift(n ?? t.target), Ze = Ze.filter((r) => r != null && r.isConnected), Ze.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Eh(e) {
  throw new Error("Unexpected object: " + e);
}
var Se = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Se || {});
function ys(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Eh(e);
  }
}
var li = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(li || {});
function _a(e) {
  let t = Q(e), n = U(!1);
  se(() => (n.current = !1, () => {
    n.current = !0, fr(() => {
      n.current && t();
    });
  }), [t]);
}
function Rh() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in so ? ((t) => t.useSyncExternalStore)(so)(() => () => {
  }, () => !1, () => !e) : !1;
}
function An() {
  let e = Rh(), [t, n] = Y(Ft.isHandoffComplete);
  return t && Ft.isHandoffComplete === !1 && n(!1), se(() => {
    t !== !0 && n(!0);
  }, [t]), se(() => Ft.handoff(), []), e ? !1 : t;
}
let xa = ge(!1);
function $h() {
  return he(xa);
}
function bs(e) {
  return K.createElement(xa.Provider, { value: e.force }, e.children);
}
function Th(e) {
  let t = $h(), n = he(Ca), r = Ht(e), [o, i] = Y(() => {
    var s;
    if (!t && n !== null) return (s = n.current) != null ? s : null;
    if (Ft.isServer) return null;
    let l = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (l) return l;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return se(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), se(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Sa = pe, Mh = Ce(function(e, t) {
  let n = e, r = U(null), o = Fe(ud((d) => {
    r.current = d;
  }), t), i = Ht(r), s = Th(r), [l] = Y(() => {
    var d;
    return Ft.isServer ? null : (d = i == null ? void 0 : i.createElement("div")) != null ? d : null;
  }), a = he(bo), c = An();
  me(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), me(() => {
    if (l && a) return a.register(l);
  }, [a, l]), _a(() => {
    var d;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((d = s.parentElement) == null || d.removeChild(s)));
  });
  let u = Re();
  return c ? !s || !l ? null : Qt(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Sa, name: "Portal" }), l) : null;
});
function Oh(e, t) {
  let n = Fe(t), { enabled: r = !0, ...o } = e, i = Re();
  return r ? K.createElement(Mh, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Sa, name: "Portal" });
}
let Ih = pe, Ca = ge(null);
function Dh(e, t) {
  let { target: n, ...r } = e, o = { ref: Fe(t) }, i = Re();
  return K.createElement(Ca.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Ih, name: "Popover.Group" }));
}
let bo = ge(null);
function Ah() {
  let e = he(bo), t = U([]), n = Q((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Q((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ne(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ne(() => function({ children: i }) {
    return K.createElement(bo.Provider, { value: o }, i);
  }, [o])];
}
let Fh = Ce(Oh), Ea = Ce(Dh), Ra = Object.assign(Fh, { Group: Ea });
var Ph = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ph || {}), kh = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(kh || {}), Nh = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Nh || {}), Lh = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(Lh || {});
function Br(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : Kl(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Vh = { 1(e) {
  var t;
  return (t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var t, n;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
  if ((n = e.dataRef.current) != null && n.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, t) {
  return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping };
}, 2(e, t) {
  var n, r, o, i;
  if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: c, disabled: u } = e.virtual, d = t.focus === Se.Specific ? t.idx : ys(t, { resolveItems: () => c, resolveActiveIndex: () => {
      var f, v;
      return (v = (f = e.activeOptionIndex) != null ? f : c.findIndex((w) => !u(w))) != null ? v : null;
    }, resolveDisabled: u, resolveId() {
      throw new Error("Function not implemented.");
    } }), p = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === d && e.activationTrigger === p ? e : { ...e, activeOptionIndex: d, activationTrigger: p, isTyping: !1, __demoMode: !1 };
  }
  let s = Br(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((u) => !u.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = t.focus === Se.Specific ? t.idx : ys(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = Br(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = Br(e, (o) => {
    let i = o.findIndex((s) => s.id === t.id);
    return i !== -1 && o.splice(i, 1), o;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }, 7: (e, t) => {
  var n, r;
  if (e.virtual === null) return { ...e, virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 } };
  if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
  let o = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    i !== -1 ? o = i : o = null;
  }
  return { ...e, activeOptionIndex: o, virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 } };
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, ai = ge(null);
ai.displayName = "ComboboxActionsContext";
function Fn(e) {
  let t = he(ai);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Fn), n;
  }
  return t;
}
let $a = ge(null);
function Hh(e) {
  let t = sn("VirtualProvider"), { options: n } = t.virtual, [r, o] = ne(() => {
    let c = t.optionsElement;
    if (!c) return [0, 0];
    let u = window.getComputedStyle(c);
    return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
  }, [t.optionsElement]), i = jl({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = Y(0);
  me(() => {
    l((c) => c + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : K.createElement($a.Provider, { value: i }, K.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (c) => {
    c && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((c) => {
    var u;
    return K.createElement(pe, { key: c.key }, K.cloneElement((u = e.children) == null ? void 0 : u.call(e, { ...e.slot, option: n[c.index] }), { key: `${s}-${c.key}`, "data-index": c.index, "aria-setsize": n.length, "aria-posinset": c.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c.start}px)`, overflowAnchor: "none" } }));
  })));
}
let Rn = ge(null);
Rn.displayName = "ComboboxDataContext";
function sn(e) {
  let t = he(Rn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, sn), n;
  }
  return t;
}
function zh(e, t) {
  return ke(t.type, Vh, e, t);
}
let Bh = pe;
function jh(e, t) {
  var n, r;
  let o = Qo(), { value: i, defaultValue: s, onChange: l, form: a, name: c, by: u, disabled: d = o || !1, onClose: p, __demoMode: f = !1, multiple: v = !1, immediate: w = !1, virtual: m = null, nullable: _, ...y } = e, S = ed(s), [E = v ? [] : void 0, T] = Qu(i, l, S), [P, I] = tt(zh, { dataRef: ur(), comboboxState: f ? 0 : 1, isTyping: !1, options: [], virtual: m ? { options: m.options, disabled: (n = m.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: f }), x = U(!1), g = U({ static: !1, hold: !1 }), b = kd(u), C = Q((j) => m ? u === null ? m.options.indexOf(j) : m.options.findIndex((Z) => b(Z, j)) : P.options.findIndex((Z) => b(Z.dataRef.current.value, j))), R = ee((j) => ke(D.mode, { 1: () => E.some((Z) => b(Z, j)), 0: () => b(E, j) }), [E]), N = Q((j) => P.activeOptionIndex === C(j)), D = ne(() => ({ ...P, immediate: w, optionsPropsRef: g, value: E, defaultValue: S, disabled: d, mode: v ? 1 : 0, virtual: m ? P.virtual : null, get activeOptionIndex() {
    if (x.current && P.activeOptionIndex === null && (m ? m.options.length > 0 : P.options.length > 0)) {
      if (m) {
        let Z = m.options.findIndex((oe) => {
          var _e, ce;
          return !((ce = (_e = m.disabled) == null ? void 0 : _e.call(m, oe)) != null && ce);
        });
        if (Z !== -1) return Z;
      }
      let j = P.options.findIndex((Z) => !Z.dataRef.current.disabled);
      if (j !== -1) return j;
    }
    return P.activeOptionIndex;
  }, calculateIndex: C, compare: b, isSelected: R, isActive: N }), [E, S, d, v, f, P, m]);
  me(() => {
    var j;
    m && I({ type: 7, options: m.options, disabled: (j = m.disabled) != null ? j : null });
  }, [m, m == null ? void 0 : m.options, m == null ? void 0 : m.disabled]), me(() => {
    P.dataRef.current = D;
  }, [D]);
  let k = D.comboboxState === 0;
  Ql(k, [D.buttonElement, D.inputElement, D.optionsElement], () => z.closeCombobox());
  let $ = ne(() => {
    var j, Z, oe;
    return { open: D.comboboxState === 0, disabled: d, activeIndex: D.activeOptionIndex, activeOption: D.activeOptionIndex === null ? null : D.virtual ? D.virtual.options[(j = D.activeOptionIndex) != null ? j : 0] : (oe = (Z = D.options[D.activeOptionIndex]) == null ? void 0 : Z.dataRef.current.value) != null ? oe : null, value: E };
  }, [D, d, E]), M = Q(() => {
    if (D.activeOptionIndex !== null) {
      if (z.setIsTyping(!1), D.virtual) F(D.virtual.options[D.activeOptionIndex]);
      else {
        let { dataRef: j } = D.options[D.activeOptionIndex];
        F(j.current.value);
      }
      z.goToOption(Se.Specific, D.activeOptionIndex);
    }
  }), O = Q(() => {
    I({ type: 0 }), x.current = !0;
  }), A = Q(() => {
    I({ type: 1 }), x.current = !1, p == null || p();
  }), H = Q((j) => {
    I({ type: 3, isTyping: j });
  }), V = Q((j, Z, oe) => (x.current = !1, j === Se.Specific ? I({ type: 2, focus: Se.Specific, idx: Z, trigger: oe }) : I({ type: 2, focus: j, trigger: oe }))), L = Q((j, Z) => (I({ type: 4, payload: { id: j, dataRef: Z } }), () => {
    D.isActive(Z.current.value) && (x.current = !0), I({ type: 5, id: j });
  })), F = Q((j) => ke(D.mode, { 0() {
    return T == null ? void 0 : T(j);
  }, 1() {
    let Z = D.value.slice(), oe = Z.findIndex((_e) => b(_e, j));
    return oe === -1 ? Z.push(j) : Z.splice(oe, 1), T == null ? void 0 : T(Z);
  } })), te = Q((j) => {
    I({ type: 6, trigger: j });
  }), X = Q((j) => {
    I({ type: 8, element: j });
  }), ue = Q((j) => {
    I({ type: 9, element: j });
  }), ie = Q((j) => {
    I({ type: 10, element: j });
  }), z = ne(() => ({ onChange: F, registerOption: L, goToOption: V, setIsTyping: H, closeCombobox: A, openCombobox: O, setActivationTrigger: te, selectActiveOption: M, setInputElement: X, setButtonElement: ue, setOptionsElement: ie }), []), [W, re] = vd(), q = t === null ? {} : { ref: t }, G = ee(() => {
    if (S !== void 0) return T == null ? void 0 : T(S);
  }, [T, S]), J = Re();
  return K.createElement(re, { value: W, props: { htmlFor: (r = D.inputElement) == null ? void 0 : r.id }, slot: { open: D.comboboxState === 0, disabled: d } }, K.createElement(yh, null, K.createElement(ai.Provider, { value: z }, K.createElement(Rn.Provider, { value: D }, K.createElement(ba, { value: ke(D.comboboxState, { 0: Ae.Open, 1: Ae.Closed }) }, c != null && K.createElement(id, { disabled: d, data: E != null ? { [c]: E } : {}, form: a, onReset: G }), J({ ourProps: q, theirProps: y, slot: $, defaultTag: Bh, name: "Combobox" }))))));
}
let Uh = "input";
function Wh(e, t) {
  var n, r, o, i, s;
  let l = sn("Combobox.Input"), a = Fn("Combobox.Input"), c = Ie(), u = Ll(), { id: d = u || `headlessui-combobox-input-${c}`, onChange: p, displayValue: f, disabled: v = l.disabled || !1, autoFocus: w = !1, type: m = "text", ..._ } = e, y = U(null), S = Fe(y, t, gh(), a.setInputElement), E = Ht(l.inputElement), T = Vt(), P = Q(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(Se.Nothing);
  }), I = ne(() => {
    var F;
    return typeof f == "function" && l.value !== void 0 ? (F = f(l.value)) != null ? F : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, f]);
  Sn(([F, te], [X, ue]) => {
    if (l.isTyping) return;
    let ie = y.current;
    ie && ((ue === 0 && te === 1 || F !== X) && (ie.value = F), requestAnimationFrame(() => {
      if (l.isTyping || !ie || (E == null ? void 0 : E.activeElement) !== ie) return;
      let { selectionStart: z, selectionEnd: W } = ie;
      Math.abs((W ?? 0) - (z ?? 0)) === 0 && z === 0 && ie.setSelectionRange(ie.value.length, ie.value.length);
    }));
  }, [I, l.comboboxState, E, l.isTyping]), Sn(([F], [te]) => {
    if (F === 0 && te === 1) {
      if (l.isTyping) return;
      let X = y.current;
      if (!X) return;
      let ue = X.value, { selectionStart: ie, selectionEnd: z, selectionDirection: W } = X;
      X.value = "", X.value = ue, W !== null ? X.setSelectionRange(ie, z, W) : X.setSelectionRange(ie, z);
    }
  }, [l.comboboxState]);
  let x = U(!1), g = Q(() => {
    x.current = !0;
  }), b = Q(() => {
    T.nextFrame(() => {
      x.current = !1;
    });
  }), C = Q((F) => {
    switch (a.setIsTyping(!0), F.key) {
      case Me.Enter:
        if (l.comboboxState !== 0 || x.current) return;
        if (F.preventDefault(), F.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Me.ArrowDown:
        return F.preventDefault(), F.stopPropagation(), ke(l.comboboxState, { 0: () => a.goToOption(Se.Next), 1: () => a.openCombobox() });
      case Me.ArrowUp:
        return F.preventDefault(), F.stopPropagation(), ke(l.comboboxState, { 0: () => a.goToOption(Se.Previous), 1: () => {
          Ne(() => a.openCombobox()), l.value || a.goToOption(Se.Last);
        } });
      case Me.Home:
        if (F.shiftKey) break;
        return F.preventDefault(), F.stopPropagation(), a.goToOption(Se.First);
      case Me.PageUp:
        return F.preventDefault(), F.stopPropagation(), a.goToOption(Se.First);
      case Me.End:
        if (F.shiftKey) break;
        return F.preventDefault(), F.stopPropagation(), a.goToOption(Se.Last);
      case Me.PageDown:
        return F.preventDefault(), F.stopPropagation(), a.goToOption(Se.Last);
      case Me.Escape:
        return l.comboboxState !== 0 ? void 0 : (F.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && F.stopPropagation(), l.mode === 0 && l.value === null && P(), a.closeCombobox());
      case Me.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), R = Q((F) => {
    p == null || p(F), l.mode === 0 && F.target.value === "" && P(), a.openCombobox();
  }), N = Q((F) => {
    var te, X, ue;
    let ie = (te = F.relatedTarget) != null ? te : Ze.find((z) => z !== F.currentTarget);
    if (!((X = l.optionsElement) != null && X.contains(ie)) && !((ue = l.buttonElement) != null && ue.contains(ie)) && l.comboboxState === 0) return F.preventDefault(), l.mode === 0 && l.value === null && P(), a.closeCombobox();
  }), D = Q((F) => {
    var te, X, ue;
    let ie = (te = F.relatedTarget) != null ? te : Ze.find((z) => z !== F.currentTarget);
    (X = l.buttonElement) != null && X.contains(ie) || (ue = l.optionsElement) != null && ue.contains(ie) || l.disabled || l.immediate && l.comboboxState !== 0 && T.microTask(() => {
      Ne(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), k = mr(), $ = dd(), { isFocused: M, focusProps: O } = Al({ autoFocus: w }), { isHovered: A, hoverProps: H } = Dl({ isDisabled: v }), V = ne(() => ({ open: l.comboboxState === 0, disabled: v, hover: A, focus: M, autofocus: w }), [l, A, M, w, v]), L = ei({ ref: S, id: d, role: "combobox", type: m, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((F) => !F.dataRef.current.disabled && l.compare(F.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": k, "aria-describedby": $, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? f == null ? void 0 : f(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: v || void 0, autoFocus: w, onCompositionStart: g, onCompositionEnd: b, onKeyDown: C, onChange: R, onFocus: D, onBlur: N }, O, H);
  return Re()({ ourProps: L, theirProps: _, slot: V, defaultTag: Uh, name: "Combobox.Input" });
}
let Gh = "button";
function qh(e, t) {
  var n;
  let r = sn("Combobox.Button"), o = Fn("Combobox.Button"), i = Fe(t, o.setButtonElement), s = Ie(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: c = !1, ...u } = e, d = ea(r.inputElement), p = Q((I) => {
    switch (I.key) {
      case Me.Space:
      case Me.Enter:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && Ne(() => o.openCombobox()), d();
        return;
      case Me.ArrowDown:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && (Ne(() => o.openCombobox()), r.value || o.goToOption(Se.First)), d();
        return;
      case Me.ArrowUp:
        I.preventDefault(), I.stopPropagation(), r.comboboxState === 1 && (Ne(() => o.openCombobox()), r.value || o.goToOption(Se.Last)), d();
        return;
      case Me.Escape:
        if (r.comboboxState !== 0) return;
        I.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && I.stopPropagation(), Ne(() => o.closeCombobox()), d();
        return;
      default:
        return;
    }
  }), f = Q((I) => {
    I.preventDefault(), !ad(I.currentTarget) && (I.button === li.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), d());
  }), v = mr([l]), { isFocusVisible: w, focusProps: m } = Al({ autoFocus: c }), { isHovered: _, hoverProps: y } = Dl({ isDisabled: a }), { pressed: S, pressProps: E } = qu({ disabled: a }), T = ne(() => ({ open: r.comboboxState === 0, active: S || r.comboboxState === 0, disabled: a, value: r.value, hover: _, focus: w }), [r, _, w, S, a]), P = ei({ ref: i, id: l, type: Kd(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": v, disabled: a || void 0, autoFocus: c, onMouseDown: f, onKeyDown: p }, m, y, E);
  return Re()({ ourProps: P, theirProps: u, slot: T, defaultTag: Gh, name: "Combobox.Button" });
}
let Yh = "div", Kh = Zt.RenderStrategy | Zt.Static;
function Zh(e, t) {
  var n, r, o;
  let i = Ie(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: c = !1, modal: u = !0, transition: d = !1, ...p } = e, f = sn("Combobox.Options"), v = Fn("Combobox.Options"), w = mh(a);
  w && (c = !0);
  let [m, _] = wh(w), [y, S] = Y(null), E = vh(), T = Fe(t, w ? m : null, v.setOptionsElement, S), P = Ht(f.optionsElement), I = Dn(), [x, g] = ra(d, y, I !== null ? (I & Ae.Open) === Ae.Open : f.comboboxState === 0);
  ql(x, f.inputElement, v.closeCombobox);
  let b = f.__demoMode ? !1 : u && f.comboboxState === 0;
  ta(b, P);
  let C = f.__demoMode ? !1 : u && f.comboboxState === 0;
  Gl(C, { allowed: ee(() => [f.inputElement, f.buttonElement, f.optionsElement], [f.inputElement, f.buttonElement, f.optionsElement]) }), me(() => {
    var L;
    f.optionsPropsRef.current.static = (L = e.static) != null ? L : !1;
  }, [f.optionsPropsRef, e.static]), me(() => {
    f.optionsPropsRef.current.hold = l;
  }, [f.optionsPropsRef, l]), cf(f.comboboxState === 0, { container: f.optionsElement, accept(L) {
    return L.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : L.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(L) {
    L.setAttribute("role", "none");
  } });
  let R = mr([(n = f.buttonElement) == null ? void 0 : n.id]), N = ne(() => ({ open: f.comboboxState === 0, option: void 0 }), [f.comboboxState]), D = Q(() => {
    v.setActivationTrigger(0);
  }), k = Q((L) => {
    L.preventDefault(), v.setActivationTrigger(0);
  }), $ = ei(w ? E() : {}, { "aria-labelledby": R, role: "listbox", "aria-multiselectable": f.mode === 1 ? !0 : void 0, id: s, ref: T, style: { ...p.style, ..._, "--input-width": Qi(f.inputElement, !0).width, "--button-width": Qi(f.buttonElement, !0).width }, onWheel: f.activationTrigger === 0 ? void 0 : D, onMouseDown: k, ...na(g) }), M = x && f.comboboxState === 1, O = yo(M, (r = f.virtual) == null ? void 0 : r.options), A = yo(M, f.value), H = Q((L) => f.compare(A, L));
  if (f.virtual) {
    if (O === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: K.createElement(Rn.Provider, { value: O !== f.virtual.options ? { ...f, virtual: { ...f.virtual, options: O } } : f }, K.createElement(Hh, { slot: N }, p.children)) });
  }
  let V = Re();
  return K.createElement(Ra, { enabled: c ? e.static || x : !1 }, K.createElement(Rn.Provider, { value: f.mode === 1 ? f : { ...f, isSelected: H } }, V({ ourProps: $, theirProps: { ...p, children: K.createElement(xh, { freeze: M }, typeof p.children == "function" ? (o = p.children) == null ? void 0 : o.call(p, N) : p.children) }, slot: N, defaultTag: Yh, features: Kh, visible: x, name: "Combobox.Options" })));
}
let Xh = "div";
function Jh(e, t) {
  var n, r, o, i;
  let s = sn("Combobox.Option"), l = Fn("Combobox.Option"), a = Ie(), { id: c = `headlessui-combobox-option-${a}`, value: u, disabled: d = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? o : !1, order: p = null, ...f } = e, v = ea(s.inputElement), w = s.virtual ? s.activeOptionIndex === s.calculateIndex(u) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === c, m = s.isSelected(u), _ = U(null), y = Rt({ disabled: d, value: u, domRef: _, order: p }), S = he($a), E = Fe(t, _, S ? S.measureElement : null), T = Q(() => {
    l.setIsTyping(!1), l.onChange(u);
  });
  me(() => l.registerOption(c, y), [y, c]);
  let P = U(!(s.virtual || s.__demoMode));
  me(() => {
    if (!s.virtual && !s.__demoMode) return Qe().requestAnimationFrame(() => {
      P.current = !0;
    });
  }, [s.virtual, s.__demoMode]), me(() => {
    if (P.current && s.comboboxState === 0 && w && s.activationTrigger !== 0) return Qe().requestAnimationFrame(() => {
      var k, $;
      ($ = (k = _.current) == null ? void 0 : k.scrollIntoView) == null || $.call(k, { block: "nearest" });
    });
  }, [_, w, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let I = Q((k) => {
    k.preventDefault(), k.button === li.Left && (d || (T(), Xl() || requestAnimationFrame(() => v()), s.mode === 0 && l.closeCombobox()));
  }), x = Q(() => {
    if (d) return l.goToOption(Se.Nothing);
    let k = s.calculateIndex(u);
    l.goToOption(Se.Specific, k);
  }), g = tf(), b = Q((k) => g.update(k)), C = Q((k) => {
    if (!g.wasMoved(k) || d || w) return;
    let $ = s.calculateIndex(u);
    l.goToOption(Se.Specific, $, 0);
  }), R = Q((k) => {
    g.wasMoved(k) && (d || w && (s.optionsPropsRef.current.hold || l.goToOption(Se.Nothing)));
  }), N = ne(() => ({ active: w, focus: w, selected: m, disabled: d }), [w, m, d]), D = { id: c, ref: E, role: "option", tabIndex: d === !0 ? void 0 : -1, "aria-disabled": d === !0 ? !0 : void 0, "aria-selected": m, disabled: void 0, onMouseDown: I, onFocus: x, onPointerEnter: b, onMouseEnter: b, onPointerMove: C, onMouseMove: C, onPointerLeave: R, onMouseLeave: R };
  return Re()({ ourProps: D, theirProps: f, slot: N, defaultTag: Xh, name: "Combobox.Option" });
}
let Qh = Ce(jh), _o = Ce(qh), Ta = Ce(Wh), ep = _d, Ma = Ce(Zh), xo = Ce(Jh), tp = Object.assign(Qh, { Input: Ta, Button: _o, Label: ep, Options: Ma, Option: xo });
function np(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = nn(e, "escape");
  ti(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Me.Escape && n(o));
  });
}
function rp() {
  var e;
  let [t] = Y(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = Y((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return me(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function op({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Ht(n), o = Q(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((c) => a.contains(c)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: Q((i) => o().some((s) => s.contains(i))) };
}
let Oa = ge(null);
function _s({ children: e, node: t }) {
  let [n, r] = Y(null), o = Ia(t ?? n);
  return K.createElement(Oa.Provider, { value: o }, e, o === null && K.createElement(xn, { features: Xt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = tn(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Ia(e = null) {
  var t;
  return (t = he(Oa)) != null ? t : e;
}
function ci() {
  let e = U(!1);
  return me(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var fn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fn || {});
function ip() {
  let e = U(0);
  return Jl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Da(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let sp = "div";
var Ot = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(Ot || {});
function lp(e, t) {
  let n = U(null), r = Fe(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  An() || (l = 0);
  let c = Ht(n);
  dp(l, { ownerDocument: c });
  let u = fp(l, { ownerDocument: c, container: n, initialFocus: o, initialFocusFallback: i });
  hp(l, { ownerDocument: c, container: n, containers: s, previousActiveElement: u });
  let d = ip(), p = Q((y) => {
    let S = n.current;
    S && ((E) => E())(() => {
      ke(d.current, { [fn.Forwards]: () => {
        vn(S, ct.First, { skipElements: [y.relatedTarget, i] });
      }, [fn.Backwards]: () => {
        vn(S, ct.Last, { skipElements: [y.relatedTarget, i] });
      } });
    });
  }), f = nn(!!(l & 2), "focus-trap#tab-lock"), v = Vt(), w = U(!1), m = { ref: r, onKeyDown(y) {
    y.key == "Tab" && (w.current = !0, v.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(y) {
    if (!(l & 4)) return;
    let S = Da(s);
    n.current instanceof HTMLElement && S.add(n.current);
    let E = y.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (Aa(S, E) || (w.current ? vn(n.current, ke(d.current, { [fn.Forwards]: () => ct.Next, [fn.Backwards]: () => ct.Previous }) | ct.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && ht(y.target)));
  } }, _ = Re();
  return K.createElement(K.Fragment, null, f && K.createElement(xn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Xt.Focusable }), _({ ourProps: m, theirProps: a, defaultTag: sp, name: "FocusTrap" }), f && K.createElement(xn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Xt.Focusable }));
}
let ap = Ce(lp), cp = Object.assign(ap, { features: Ot });
function up(e = !0) {
  let t = U(Ze.slice());
  return Sn(([n], [r]) => {
    r === !0 && n === !1 && fr(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ze.slice());
  }, [e, Ze, t]), Q(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function dp(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = up(n);
  Sn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && ht(r());
  }, [n]), _a(() => {
    n && ht(r());
  });
}
function fp(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = U(null), s = nn(!!(e & 1), "focus-trap#initial-focus"), l = ci();
  return Sn(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && ht(o.current);
      return;
    }
    let a = n.current;
    a && fr(() => {
      if (!l.current) return;
      let c = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === c) {
          i.current = c;
          return;
        }
      } else if (a.contains(c)) {
        i.current = c;
        return;
      }
      if (r != null && r.current) ht(r.current);
      else {
        if (e & 16) {
          if (vn(a, ct.First | ct.AutoFocus) !== mo.Error) return;
        } else if (vn(a, ct.First) !== mo.Error) return;
        if (o != null && o.current && (ht(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function hp(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = ci(), s = !!(e & 4);
  ti(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = Da(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let c = o.current;
    if (!c) return;
    let u = l.target;
    u && u instanceof HTMLElement ? Aa(a, u) ? (o.current = u, ht(u)) : (l.preventDefault(), l.stopPropagation(), ht(c)) : ht(o.current);
  }, !0);
}
function Aa(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Fa(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ka) !== pe || K.Children.count(e.children) === 1;
}
let _r = ge(null);
_r.displayName = "TransitionContext";
var pp = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(pp || {});
function mp() {
  let e = he(_r);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function gp() {
  let e = he(xr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let xr = ge(null);
xr.displayName = "NestingContext";
function Sr(e) {
  return "children" in e ? Sr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Pa(e, t) {
  let n = Rt(e), r = U([]), o = ci(), i = Vt(), s = Q((f, v = wt.Hidden) => {
    let w = r.current.findIndex(({ el: m }) => m === f);
    w !== -1 && (ke(v, { [wt.Unmount]() {
      r.current.splice(w, 1);
    }, [wt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var m;
      !Sr(r) && o.current && ((m = n.current) == null || m.call(n));
    }));
  }), l = Q((f) => {
    let v = r.current.find(({ el: w }) => w === f);
    return v ? v.state !== "visible" && (v.state = "visible") : r.current.push({ el: f, state: "visible" }), () => s(f, wt.Unmount);
  }), a = U([]), c = U(Promise.resolve()), u = U({ enter: [], leave: [] }), d = Q((f, v, w) => {
    a.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([m]) => m !== f)), t == null || t.chains.current[v].push([f, new Promise((m) => {
      a.current.push(m);
    })]), t == null || t.chains.current[v].push([f, new Promise((m) => {
      Promise.all(u.current[v].map(([_, y]) => y)).then(() => m());
    })]), v === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(v)) : w(v);
  }), p = Q((f, v, w) => {
    Promise.all(u.current[v].splice(0).map(([m, _]) => _)).then(() => {
      var m;
      (m = a.current.shift()) == null || m();
    }).then(() => w(v));
  });
  return ne(() => ({ children: r, register: l, unregister: s, onStart: d, onStop: p, wait: c, chains: u }), [l, s, r, d, p, u, c]);
}
let ka = pe, Na = Zt.RenderStrategy;
function vp(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: c, enterFrom: u, enterTo: d, entered: p, leave: f, leaveFrom: v, leaveTo: w, ...m } = e, [_, y] = Y(null), S = U(null), E = Fa(e), T = Fe(...E ? [S, t, y] : t === null ? [] : [t]), P = (n = m.unmount) == null || n ? wt.Unmount : wt.Hidden, { show: I, appear: x, initial: g } = mp(), [b, C] = Y(I ? "visible" : "hidden"), R = gp(), { register: N, unregister: D } = R;
  me(() => N(S), [N, S]), me(() => {
    if (P === wt.Hidden && S.current) {
      if (I && b !== "visible") {
        C("visible");
        return;
      }
      return ke(b, { hidden: () => D(S), visible: () => N(S) });
    }
  }, [b, S, N, D, I, P]);
  let k = An();
  me(() => {
    if (E && k && b === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [S, b, k, E]);
  let $ = g && !x, M = x && I && g, O = U(!1), A = Pa(() => {
    O.current || (C("hidden"), D(S));
  }, R), H = Q((ie) => {
    O.current = !0;
    let z = ie ? "enter" : "leave";
    A.onStart(S, z, (W) => {
      W === "enter" ? i == null || i() : W === "leave" && (l == null || l());
    });
  }), V = Q((ie) => {
    let z = ie ? "enter" : "leave";
    O.current = !1, A.onStop(S, z, (W) => {
      W === "enter" ? s == null || s() : W === "leave" && (a == null || a());
    }), z === "leave" && !Sr(A) && (C("hidden"), D(S));
  });
  se(() => {
    E && o || (H(I), V(I));
  }, [I, E, o]);
  let L = !(!o || !E || !k || $), [, F] = ra(L, _, I, { start: H, end: V }), te = vt({ ref: T, className: ((r = ho(m.className, M && c, M && u, F.enter && c, F.enter && F.closed && u, F.enter && !F.closed && d, F.leave && f, F.leave && !F.closed && v, F.leave && F.closed && w, !F.transition && I && p)) == null ? void 0 : r.trim()) || void 0, ...na(F) }), X = 0;
  b === "visible" && (X |= Ae.Open), b === "hidden" && (X |= Ae.Closed), F.enter && (X |= Ae.Opening), F.leave && (X |= Ae.Closing);
  let ue = Re();
  return K.createElement(xr.Provider, { value: A }, K.createElement(ba, { value: X }, ue({ ourProps: te, theirProps: m, defaultTag: ka, features: Na, visible: b === "visible", name: "Transition.Child" })));
}
function wp(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = U(null), l = Fa(e), a = Fe(...l ? [s, t] : t === null ? [] : [t]);
  An();
  let c = Dn();
  if (n === void 0 && c !== null && (n = (c & Ae.Open) === Ae.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, d] = Y(n ? "visible" : "hidden"), p = Pa(() => {
    n || d("hidden");
  }), [f, v] = Y(!0), w = U([n]);
  me(() => {
    f !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), v(!1));
  }, [w, n]);
  let m = ne(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  me(() => {
    n ? d("visible") : !Sr(p) && s.current !== null && d("hidden");
  }, [n, p]);
  let _ = { unmount: o }, y = Q(() => {
    var T;
    f && v(!1), (T = e.beforeEnter) == null || T.call(e);
  }), S = Q(() => {
    var T;
    f && v(!1), (T = e.beforeLeave) == null || T.call(e);
  }), E = Re();
  return K.createElement(xr.Provider, { value: p }, K.createElement(_r.Provider, { value: m }, E({ ourProps: { ..._, as: pe, children: K.createElement(La, { ref: a, ..._, ...i, beforeEnter: y, beforeLeave: S }) }, theirProps: {}, defaultTag: pe, features: Na, visible: u === "visible", name: "Transition" })));
}
function yp(e, t) {
  let n = he(_r) !== null, r = Dn() !== null;
  return K.createElement(K.Fragment, null, !n && r ? K.createElement(So, { ref: t, ...e }) : K.createElement(La, { ref: t, ...e }));
}
let So = Ce(wp), La = Ce(vp), ui = Ce(yp), bp = Object.assign(So, { Child: ui, Root: So });
var _p = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_p || {}), xp = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(xp || {});
let Sp = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, di = ge(null);
di.displayName = "DialogContext";
function Cr(e) {
  let t = he(di);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Cr), n;
  }
  return t;
}
function Cp(e, t) {
  return ke(t.type, Sp, e, t);
}
let xs = Ce(function(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: c = !1, unmount: u = !1, ...d } = e, p = U(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (p.current || (p.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = Dn();
  o === void 0 && f !== null && (o = (f & Ae.Open) === Ae.Open);
  let v = U(null), w = Fe(v, t), m = Ht(v), _ = o ? 0 : 1, [y, S] = tt(Cp, { titleId: null, descriptionId: null, panelRef: ur() }), E = Q(() => i(!1)), T = Q((V) => S({ type: 0, id: V })), P = An() ? _ === 0 : !1, [I, x] = Ah(), g = { get current() {
    var V;
    return (V = y.panelRef.current) != null ? V : v.current;
  } }, b = Ia(), { resolveContainers: C } = op({ mainTreeNode: b, portals: I, defaultContainers: [g] }), R = f !== null ? (f & Ae.Closing) === Ae.Closing : !1;
  Gl(c || R ? !1 : P, { allowed: Q(() => {
    var V, L;
    return [(L = (V = v.current) == null ? void 0 : V.closest("[data-headlessui-portal]")) != null ? L : null];
  }), disallowed: Q(() => {
    var V;
    return [(V = b == null ? void 0 : b.closest("body > *:not(#headlessui-portal-root)")) != null ? V : null];
  }) }), Ql(P, C, (V) => {
    V.preventDefault(), E();
  }), np(P, m == null ? void 0 : m.defaultView, (V) => {
    V.preventDefault(), V.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), ta(c || R ? !1 : P, m, C), ql(P, v, E);
  let [N, D] = fd(), k = ne(() => [{ dialogState: _, close: E, setTitleId: T, unmount: u }, y], [_, y, E, T, u]), $ = ne(() => ({ open: _ === 0 }), [_]), M = { ref: w, id: r, role: l, tabIndex: -1, "aria-modal": c ? void 0 : _ === 0 ? !0 : void 0, "aria-labelledby": y.titleId, "aria-describedby": N, unmount: u }, O = !rp(), A = Ot.None;
  P && !c && (A |= Ot.RestoreFocus, A |= Ot.TabLock, a && (A |= Ot.AutoFocus), O && (A |= Ot.InitialFocus));
  let H = Re();
  return K.createElement(Sh, null, K.createElement(bs, { force: !0 }, K.createElement(Ra, null, K.createElement(di.Provider, { value: k }, K.createElement(Ea, { target: v }, K.createElement(bs, { force: !1 }, K.createElement(D, { slot: $ }, K.createElement(x, null, K.createElement(cp, { initialFocus: s, initialFocusFallback: v, containers: C, features: A }, K.createElement(Sd, { value: E }, H({ ourProps: M, theirProps: d, slot: $, defaultTag: Ep, features: Rp, visible: _ === 0, name: "Dialog" })))))))))));
}), Ep = "div", Rp = Zt.RenderStrategy | Zt.Static;
function $p(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = Dn(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? K.createElement(_s, null, K.createElement(bp, { show: r, transition: n, unmount: o.unmount }, K.createElement(xs, { ref: t, ...o }))) : K.createElement(_s, null, K.createElement(xs, { ref: t, open: r, ...o }));
}
let Tp = "div";
function Mp(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = Cr("Dialog.Panel"), c = Fe(t, a.panelRef), u = ne(() => ({ open: s === 0 }), [s]), d = Q((m) => {
    m.stopPropagation();
  }), p = { ref: c, id: r, onClick: d }, f = o ? ui : pe, v = o ? { unmount: l } : {}, w = Re();
  return K.createElement(f, { ...v }, w({ ourProps: p, theirProps: i, slot: u, defaultTag: Tp, name: "Dialog.Panel" }));
}
let Op = "div";
function Ip(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = Cr("Dialog.Backdrop"), s = ne(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? ui : pe, c = n ? { unmount: i } : {}, u = Re();
  return K.createElement(a, { ...c }, u({ ourProps: l, theirProps: r, slot: s, defaultTag: Op, name: "Dialog.Backdrop" }));
}
let Dp = "h2";
function Ap(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = Cr("Dialog.Title"), l = Fe(t);
  se(() => (s(r), () => s(null)), [r, s]);
  let a = ne(() => ({ open: i === 0 }), [i]), c = { ref: l, id: r };
  return Re()({ ourProps: c, theirProps: o, slot: a, defaultTag: Dp, name: "Dialog.Title" });
}
let Fp = Ce($p), Va = Ce(Mp), Pp = Ce(Ip), Ha = Ce(Ap), kp = Object.assign(Fp, { Panel: Va, Title: Ha, Description: gd });
function Np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const Lp = /* @__PURE__ */ fe(Np);
function Vp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Hp = /* @__PURE__ */ fe(Vp);
function zp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
  }));
}
const Bp = /* @__PURE__ */ fe(zp);
function jp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const Up = /* @__PURE__ */ fe(jp);
function Wp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Gp = /* @__PURE__ */ fe(Wp);
function qp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const Yp = /* @__PURE__ */ fe(qp);
function Kp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Zp = /* @__PURE__ */ fe(Kp);
function Xp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Jp = /* @__PURE__ */ fe(Xp);
function Qp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const em = /* @__PURE__ */ fe(Qp);
function tm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const nm = /* @__PURE__ */ fe(tm);
function rm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const om = /* @__PURE__ */ fe(rm);
function im({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const sm = /* @__PURE__ */ fe(im);
function lm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const am = /* @__PURE__ */ fe(lm);
function cm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const um = /* @__PURE__ */ fe(cm);
function dm({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const za = /* @__PURE__ */ fe(dm), fm = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear", invalidOption: "{{value}} (invalid)" }, input: { clear: "Clear" }, datePicker: { calendarLabel: "Choose date", pickerLabel: "Date picker", hours: "Hours", minutes: "Minutes", seconds: "Seconds", today: "Today", clear: "Clear", done: "Done", weekdays: { sun: "Su", mon: "Mo", tue: "Tu", wed: "We", thu: "Th", fri: "Fr", sat: "Sa" }, previous: "Previous", next: "Next", am: "AM", pm: "PM" } }, hm = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", rowLimitExceeded: '"{{sheet}}" has {{count}} rows, which exceeds the maximum of {{limit}}. Remove rows to continue.', rowLimitExceededMultiple: "These sheets exceed their row limit: {{sheets}}. Remove rows to continue.", sheetValidationErrors: "This sheet has validation errors. Fix them before uploading.", processing: "Processing data, please wait…", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, pm = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data", unsupportedFileType: "Unsupported file type. Please upload a {{formats}} file.", fileTooLarge: "File is too large. Maximum size is {{size}}." }, mm = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, gm = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", undoTooltip: "Undo", redoTooltip: "Redo", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, vm = { boolean: "This value must be true or false", includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique", date: "This is not a valid date", datetime: "This is not a valid date and time", time: "This is not a valid time", dateOutOfRange: "This date is outside the allowed range", asyncError: "This value could not be validated" }, wm = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, ym = {
  components: fm,
  importer: hm,
  uploader: pm,
  mapper: mm,
  sheet: gm,
  validators: vm,
  importStatus: wm
}, bm = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer", invalidOption: "{{value}} (invalide)" }, input: { clear: "Effacer" }, datePicker: { calendarLabel: "Choisir une date", pickerLabel: "Sélecteur de date", hours: "Heures", minutes: "Minutes", seconds: "Secondes", today: "Aujourd'hui", clear: "Effacer", done: "Terminé", weekdays: { sun: "Di", mon: "Lu", tue: "Ma", wed: "Me", thu: "Je", fri: "Ve", sat: "Sa" }, previous: "Précédent", next: "Suivant", am: "AM", pm: "PM" } }, _m = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", rowLimitExceeded: "« {{sheet}} » comporte {{count}} lignes, ce qui dépasse le maximum de {{limit}}. Supprimez des lignes pour continuer.", rowLimitExceededMultiple: "Ces feuilles dépassent leur limite de lignes : {{sheets}}. Supprimez des lignes pour continuer.", sheetValidationErrors: "Cette feuille comporte des erreurs de validation. Corrigez-les avant de télécharger.", processing: "Traitement des données, veuillez patienter…", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, xm = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement", unsupportedFileType: "Type de fichier non pris en charge. Veuillez télécharger un fichier {{formats}}.", fileTooLarge: "Le fichier est trop volumineux. La taille maximale est {{size}}." }, Sm = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, Cm = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", undoTooltip: "Annuler", redoTooltip: "Rétablir", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Em = { boolean: "Cette valeur doit être vraie ou fausse", includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique", date: "Cette date n'est pas valide", datetime: "Cette date et heure ne sont pas valides", time: "Cette heure n'est pas valide", dateOutOfRange: "Cette date est en dehors de la plage autorisée", asyncError: "Cette valeur n'a pas pu être validée" }, Rm = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, $m = {
  components: bm,
  importer: _m,
  uploader: xm,
  mapper: Sm,
  sheet: Cm,
  validators: Em,
  importStatus: Rm
}, Tm = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar", invalidOption: "{{value}} (inválido)" }, input: { clear: "Limpar" }, datePicker: { calendarLabel: "Escolher data", pickerLabel: "Seletor de data", hours: "Horas", minutes: "Minutos", seconds: "Segundos", today: "Hoje", clear: "Limpar", done: "Concluído", weekdays: { sun: "Dom", mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb" }, previous: "Anterior", next: "Próximo", am: "AM", pm: "PM" } }, Mm = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", rowLimitExceeded: '"{{sheet}}" tem {{count}} linhas, o que excede o máximo de {{limit}}. Remova linhas para continuar.', rowLimitExceededMultiple: "Estas planilhas excedem o limite de linhas: {{sheets}}. Remova linhas para continuar.", sheetValidationErrors: "Esta planilha tem erros de validação. Corrija-os antes de enviar.", processing: "Processando dados, aguarde…", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Om = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente", unsupportedFileType: "Tipo de arquivo não suportado. Por favor, envie um arquivo {{formats}}.", fileTooLarge: "O arquivo é muito grande. O tamanho máximo é {{size}}." }, Im = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Dm = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", undoTooltip: "Desfazer", redoTooltip: "Refazer", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Am = { boolean: "Este valor deve ser verdadeiro ou falso", includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único", date: "Esta data não é válida", datetime: "Esta data e hora não são válidas", time: "Este horário não é válido", dateOutOfRange: "Esta data está fora do intervalo permitido", asyncError: "Não foi possível validar este valor" }, Fm = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, Pm = {
  components: Tm,
  importer: Mm,
  uploader: Om,
  mapper: Im,
  sheet: Dm,
  validators: Am,
  importStatus: Fm
}, Ba = ge(
  {}
);
function km({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ h(Ba.Provider, { value: e, children: t });
}
function ze() {
  return he(Ba);
}
const Nm = {
  en: ym,
  fr: $m,
  "pt-BR": Pm
}, Lm = "en";
function Ss(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Nm[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Vm(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Hm(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ h("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const s = o[1];
      i = t[s] ?? `{${s}}`;
    }
    return /* @__PURE__ */ h(pe, { children: i }, r);
  }) });
}
const ja = ge(
  {}
);
function zm({ children: e }) {
  const { translationResources: t, locale: n } = ze(), r = n ?? Lm;
  function o(s, l = {}) {
    const a = Ss(r, s, t);
    return Vm(a, l);
  }
  function i(s, l = {}) {
    const a = Ss(r, s, t);
    return Hm(a, l);
  }
  return /* @__PURE__ */ h(ja.Provider, { value: { t: o, tHtml: i }, children: e });
}
function ye() {
  return he(ja);
}
function Co({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: s,
  variant: l = "default"
}) {
  const { t: a } = ye(), c = {
    danger: {
      icon: /* @__PURE__ */ h(
        Jp,
        {
          className: "hc:text-hello-csv-danger hc:size-6",
          "aria-hidden": "true"
        }
      ),
      btnVariant: "danger",
      bgColor: "hc:bg-hello-csv-danger-extra-light"
    },
    default: {
      btnVariant: "primary"
    }
  }, { icon: u, btnVariant: d, bgColor: p } = c[l];
  return /* @__PURE__ */ h(kp, { open: e, onClose: t, className: "hc:relative hc:z-10", children: [
    /* @__PURE__ */ h(
      Pp,
      {
        transition: !0,
        className: "hc:bg-hello-csv-overlay/75 hc:fixed hc:inset-0 hc:transition-opacity hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ h("div", { className: "hc:fixed hc:inset-0 hc:z-10 hc:w-screen hc:overflow-y-auto", children: /* @__PURE__ */ h("div", { className: "hc:flex hc:min-h-full hc:items-end hc:justify-center hc:p-4 hc:text-center hc:sm:items-center hc:sm:p-0", children: /* @__PURE__ */ h(
      Va,
      {
        transition: !0,
        className: "hc:bg-hello-csv-surface-raised hc:relative hc:transform hc:overflow-hidden hc:rounded-lg hc:px-4 hc:pt-5 hc:pb-4 hc:text-left hc:shadow-xl hc:transition-all hc:data-closed:translate-y-4 hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in hc:sm:my-8 hc:sm:w-full hc:sm:max-w-lg hc:sm:p-6 hc:data-closed:sm:translate-y-0 hc:data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ h("div", { className: "hc:sm:flex hc:sm:items-start", children: [
            u && /* @__PURE__ */ h(
              "div",
              {
                className: `hc:mx-auto hc:flex hc:size-12 hc:shrink-0 hc:items-center hc:justify-center hc:rounded-full ${p} hc:sm:mx-0 hc:sm:size-10`,
                children: u
              }
            ),
            /* @__PURE__ */ h("div", { className: "hc:mt-3 hc:text-center hc:sm:mt-0 hc:sm:ml-4 hc:sm:text-left", children: [
              /* @__PURE__ */ h(
                Ha,
                {
                  as: "h3",
                  className: "hc:text-hello-csv-text hc:text-base hc:font-semibold",
                  children: n
                }
              ),
              r && /* @__PURE__ */ h("div", { className: "hc:mt-2", children: /* @__PURE__ */ h("p", { className: "hc:text-hello-csv-text-muted hc:text-sm", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "hc:mt-5 hc:sm:mt-4 hc:sm:flex hc:sm:flex-row-reverse", children: [
            /* @__PURE__ */ h("div", { className: "hc:sm:ml-3 hc:sm:w-auto", children: /* @__PURE__ */ h(
              Ve,
              {
                variant: d,
                onClick: () => {
                  s(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ h("div", { className: "hc:mt-3 hc:sm:mt-0 hc:sm:w-auto", children: /* @__PURE__ */ h(
              Ve,
              {
                variant: "tertiary",
                "data-autofocus": !0,
                onClick: () => t(!1),
                withFullWidth: !0,
                children: i ?? a("components.confirmationModal.cancel")
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const Bm = 100, Ua = 8, jm = 50, Wa = 5, Um = [
  "text/csv",
  "text/tab-separated-values"
], Wm = [".csv", ".tsv"], Gm = ",", qm = 500, Ym = "headlessui-portal-root", ir = "hello-csv", Ga = "data-hellocsv-datepicker", Er = {
  autoComplete: "off",
  "data-bwignore": !0,
  "data-1p-ignore": !0,
  "data-lpignore": "true",
  "data-form-type": "other"
}, qa = 52.62, Eo = "checkbox-column-id", Ya = 110, Km = 50, Zm = 500, Xm = 150, Ka = "Yes", Za = "No", Jm = ["true", "1", "yes", "y"], Qm = ["false", "0", "no", "n"], eg = fe(function({ children: t }, n) {
  return se(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === Ym && s.classList.add(ir);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ h(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${ir}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: n,
          className: "hc:bg-hello-csv-surface hc:min-h-0 hc:w-full hc:overflow-auto",
          children: t
        }
      )
    }
  );
});
function tg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    d: "M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"
  }), /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z",
    clipRule: "evenodd"
  }));
}
const ng = /* @__PURE__ */ fe(tg);
function rg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const og = /* @__PURE__ */ fe(rg);
function ig({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const sg = /* @__PURE__ */ fe(ig);
function lg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const ag = /* @__PURE__ */ fe(lg);
function cg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ug = /* @__PURE__ */ fe(cg);
function dg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const fg = /* @__PURE__ */ fe(dg);
function hg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const pg = /* @__PURE__ */ fe(hg);
function mg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z",
    clipRule: "evenodd"
  }));
}
const gg = /* @__PURE__ */ fe(mg);
function vg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const wg = /* @__PURE__ */ fe(vg);
function yg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const Xa = /* @__PURE__ */ fe(yg), Ja = fe(
  ({
    value: e,
    onBlur: t,
    onChange: n,
    placeholder: r,
    iconBuilder: o,
    classes: i,
    clearable: s,
    type: l = "text",
    ...a
  }, c) => {
    const { t: u } = ye(), [d, p] = Y(e);
    se(() => {
      p(e);
    }, [e]);
    const f = s && e != null && e !== "";
    function v(w) {
      const m = w.target, _ = l === "number" ? m == null ? void 0 : m.valueAsNumber : m == null ? void 0 : m.value;
      return (typeof _ == "number" && isNaN(_) ? "" : _) ?? "";
    }
    return /* @__PURE__ */ h("div", { className: "hc:grid hc:grid-cols-1", children: [
      /* @__PURE__ */ h(
        "input",
        {
          ...Er,
          "aria-label": a["aria-label"],
          ref: c,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof d == "boolean" ? d.toString() : Array.isArray(d) ? "" : d ?? "",
          onChange: (w) => (n == null ? void 0 : n(v(w))) ?? p(v(w)),
          className: `${i} ${o != null ? "hc:pl-10" : ""} ${s ? "hc:pr-10" : ""} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:col-start-1 hc:row-start-1 hc:block hc:rounded-md hc:px-3 hc:py-1.5 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6`,
          onBlur: (w) => t == null ? void 0 : t(v(w))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:ml-3 hc:size-5 hc:self-center hc:text-hello-csv-text-subtle hc:sm:size-4"
      }),
      f && /* @__PURE__ */ h(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": u("components.input.clear"),
          onClick: (w) => {
            w.stopPropagation(), n == null || n("");
          },
          className: "hc:col-end-2 hc:row-start-1 hc:flex hc:cursor-pointer hc:items-center hc:justify-self-end hc:pr-2",
          children: /* @__PURE__ */ h(
            Xa,
            {
              className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
              "aria-hidden": "true"
            }
          )
        }
      )
    ] });
  }
);
function bg(e, t, n) {
  return n.searchInputAsFilter && e == null ? { type: "ignore" } : e != null && t != null && n.compareFunction(e, t) ? { type: "change", value: null } : { type: "change", value: e };
}
function At({
  value: e,
  options: t,
  onChange: n,
  onClose: r,
  multiple: o = !1,
  compareFunction: i = (w, m) => w === m,
  clearable: s = !1,
  searchable: l = !1,
  placeholder: a,
  classes: c,
  displayPlaceholderWhenSelected: u = !1,
  autoFocus: d = !1,
  immediate: p = !1,
  searchInputAsFilter: f = !1,
  ...v
}) {
  const { t: w } = ye(), [m, _] = Y(""), y = U(null);
  se(() => {
    var $;
    d && (($ = y.current) == null || $.focus());
  }, []);
  const S = ($) => o && Array.isArray(e) ? e.some((M) => i(M, $)) : i(e, $), E = ($) => {
    if (_(""), o) {
      const O = Array.isArray($) ? $ : [$];
      n(O);
      return;
    }
    const M = bg(
      $ ?? null,
      e,
      { searchInputAsFilter: f, compareFunction: i }
    );
    M.type === "change" && n(M.value);
  }, T = () => {
    _(""), n(o ? [] : null);
  }, P = t.filter(($) => S($.value)), I = P.map(($) => $.label).join(", "), x = m && l ? t.filter(
    ($) => String($.label).toLowerCase().includes(m.toLowerCase())
  ) : t, g = a ?? w("components.select.optionPlaceholder"), b = () => f ? m : l ? I : P.length > 0 ? u ? `${g}: ${I}` : I : "", R = x.some(($) => $.group) ? Object.entries(
    x.reduce(
      ($, M) => {
        const O = M.group || "ungrouped";
        return $[O] = $[O] || [], $[O].push(M), $;
      },
      {}
    )
  ).map(([$, M]) => ({
    label: $,
    items: M
  })) : [{ label: null, items: x }], N = R.every(({ items: $ }) => $.length === 0), D = f ? m.length > 0 : s && P.length > 0, k = () => {
    var $;
    f ? (_(""), y.current && (y.current.value = ""), ($ = y.current) == null || $.focus()) : T();
  };
  return /* @__PURE__ */ h(
    tp,
    {
      value: e ?? (o ? [] : null),
      onChange: E,
      onClose: r,
      multiple: o,
      immediate: p,
      children: /* @__PURE__ */ h("div", { className: "hc:relative", children: [
        /* @__PURE__ */ h(
          _o,
          {
            className: "hc:w-full",
            "aria-label": v["aria-label"] ?? a,
            children: /* @__PURE__ */ h(
              Ta,
              {
                ...Er,
                ref: y,
                className: `${c} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:block hc:w-full hc:cursor-pointer hc:truncate hc:rounded-md hc:py-1.5 hc:focus:cursor-text ${D ? "hc:pr-12" : "hc:pr-2"} hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:pl-3 hc:text-left hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm`,
                displayValue: b,
                onChange: ($) => l && _($.target.value),
                placeholder: g,
                readOnly: !l
              }
            )
          }
        ),
        D && /* @__PURE__ */ h(
          "span",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": w("components.select.clear"),
            onMouseDown: ($) => {
              $.preventDefault(), $.stopPropagation();
            },
            onClick: ($) => {
              $.stopPropagation(), k();
            },
            className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-6 hc:flex hc:cursor-pointer hc:items-center",
            children: /* @__PURE__ */ h(
              Xa,
              {
                className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ h(_o, { className: "hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2", children: /* @__PURE__ */ h(
          fg,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:col-start-1 hc:row-start-1 hc:size-5 hc:self-center hc:justify-self-end hc:sm:size-4"
          }
        ) }),
        /* @__PURE__ */ h(
          Ma,
          {
            anchor: "bottom",
            transition: !0,
            className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:absolute hc:z-99 hc:mt-1 hc:max-h-60 hc:w-[var(--input-width)] hc:overflow-auto hc:rounded-md hc:py-1 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:data-leave:transition hc:data-leave:duration-100 hc:data-leave:ease-in hc:data-closed:data-leave:opacity-0 hc:sm:text-sm",
            children: [
              N && /* @__PURE__ */ h(
                xo,
                {
                  disabled: !0,
                  value: null,
                  className: "hc:text-hello-csv-text-subtle hc:pointer-events-none hc:relative hc:flex hc:items-center hc:justify-center hc:py-2 hc:pr-9 hc:pl-3 hc:select-none",
                  children: /* @__PURE__ */ h("span", { className: "hc:block hc:truncate hc:font-normal", children: w("components.select.noOptions") })
                },
                "no-options"
              ),
              R.map(({ label: $, items: M }) => /* @__PURE__ */ h("div", { children: [
                $ && /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-subtle hc:py-2 hc:pr-9 hc:pl-3 hc:uppercase", children: $ }),
                M.map((O) => /* @__PURE__ */ h(
                  xo,
                  {
                    value: O.value,
                    className: ({ focus: A }) => `hc:cursor-default hc:items-center hc:py-2 hc:pr-9 hc:pl-3 hc:outline-hidden hc:select-none hc:relative hc:flex ${A ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text"}`,
                    children: ({ focus: A, selected: H }) => /* @__PURE__ */ h(pe, { children: [
                      O.icon,
                      /* @__PURE__ */ h(
                        "span",
                        {
                          className: `hc:block hc:truncate ${H ? "hc:font-semibold" : "hc:font-normal"}`,
                          children: O.label
                        }
                      ),
                      H && /* @__PURE__ */ h(
                        "span",
                        {
                          className: `hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:items-center hc:pr-4 ${A ? "hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-primary"}`,
                          children: /* @__PURE__ */ h(
                            og,
                            {
                              "aria-hidden": "true",
                              className: "hc:h-5 hc:w-5"
                            }
                          )
                        }
                      )
                    ] })
                  },
                  typeof O.value == "object" ? JSON.stringify(O.value) : String(O.value)
                ))
              ] }, `${$ || "all"}:${m}`))
            ]
          }
        )
      ] })
    }
  );
}
function fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = { exports: {} }, _g = Yn.exports, Cs;
function xg() {
  return Cs || (Cs = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(_g, function() {
      var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", a = "hour", c = "day", u = "week", d = "month", p = "quarter", f = "year", v = "date", w = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
        var k = ["th", "st", "nd", "rd"], $ = D % 100;
        return "[" + D + (k[($ - 20) % 10] || k[$] || k[0]) + "]";
      } }, S = function(D, k, $) {
        var M = String(D);
        return !M || M.length >= k ? D : "" + Array(k + 1 - M.length).join($) + D;
      }, E = { s: S, z: function(D) {
        var k = -D.utcOffset(), $ = Math.abs(k), M = Math.floor($ / 60), O = $ % 60;
        return (k <= 0 ? "+" : "-") + S(M, 2, "0") + ":" + S(O, 2, "0");
      }, m: function D(k, $) {
        if (k.date() < $.date()) return -D($, k);
        var M = 12 * ($.year() - k.year()) + ($.month() - k.month()), O = k.clone().add(M, d), A = $ - O < 0, H = k.clone().add(M + (A ? -1 : 1), d);
        return +(-(M + ($ - O) / (A ? O - H : H - O)) || 0);
      }, a: function(D) {
        return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
      }, p: function(D) {
        return { M: d, y: f, w: u, d: c, D: v, h: a, m: l, s, ms: i, Q: p }[D] || String(D || "").toLowerCase().replace(/s$/, "");
      }, u: function(D) {
        return D === void 0;
      } }, T = "en", P = {};
      P[T] = y;
      var I = "$isDayjsObject", x = function(D) {
        return D instanceof R || !(!D || !D[I]);
      }, g = function D(k, $, M) {
        var O;
        if (!k) return T;
        if (typeof k == "string") {
          var A = k.toLowerCase();
          P[A] && (O = A), $ && (P[A] = $, O = A);
          var H = k.split("-");
          if (!O && H.length > 1) return D(H[0]);
        } else {
          var V = k.name;
          P[V] = k, O = V;
        }
        return !M && O && (T = O), O || !M && T;
      }, b = function(D, k) {
        if (x(D)) return D.clone();
        var $ = typeof k == "object" ? k : {};
        return $.date = D, $.args = arguments, new R($);
      }, C = E;
      C.l = g, C.i = x, C.w = function(D, k) {
        return b(D, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
      };
      var R = function() {
        function D($) {
          this.$L = g($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[I] = !0;
        }
        var k = D.prototype;
        return k.parse = function($) {
          this.$d = function(M) {
            var O = M.date, A = M.utc;
            if (O === null) return /* @__PURE__ */ new Date(NaN);
            if (C.u(O)) return /* @__PURE__ */ new Date();
            if (O instanceof Date) return new Date(O);
            if (typeof O == "string" && !/Z$/i.test(O)) {
              var H = O.match(m);
              if (H) {
                var V = H[2] - 1 || 0, L = (H[7] || "0").substring(0, 3);
                return A ? new Date(Date.UTC(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, L)) : new Date(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, L);
              }
            }
            return new Date(O);
          }($), this.init();
        }, k.init = function() {
          var $ = this.$d;
          this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
        }, k.$utils = function() {
          return C;
        }, k.isValid = function() {
          return this.$d.toString() !== w;
        }, k.isSame = function($, M) {
          var O = b($);
          return this.startOf(M) <= O && O <= this.endOf(M);
        }, k.isAfter = function($, M) {
          return b($) < this.startOf(M);
        }, k.isBefore = function($, M) {
          return this.endOf(M) < b($);
        }, k.$g = function($, M, O) {
          return C.u($) ? this[M] : this.set(O, $);
        }, k.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, k.valueOf = function() {
          return this.$d.getTime();
        }, k.startOf = function($, M) {
          var O = this, A = !!C.u(M) || M, H = C.p($), V = function(W, re) {
            var q = C.w(O.$u ? Date.UTC(O.$y, re, W) : new Date(O.$y, re, W), O);
            return A ? q : q.endOf(c);
          }, L = function(W, re) {
            return C.w(O.toDate()[W].apply(O.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), O);
          }, F = this.$W, te = this.$M, X = this.$D, ue = "set" + (this.$u ? "UTC" : "");
          switch (H) {
            case f:
              return A ? V(1, 0) : V(31, 11);
            case d:
              return A ? V(1, te) : V(0, te + 1);
            case u:
              var ie = this.$locale().weekStart || 0, z = (F < ie ? F + 7 : F) - ie;
              return V(A ? X - z : X + (6 - z), te);
            case c:
            case v:
              return L(ue + "Hours", 0);
            case a:
              return L(ue + "Minutes", 1);
            case l:
              return L(ue + "Seconds", 2);
            case s:
              return L(ue + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, k.endOf = function($) {
          return this.startOf($, !1);
        }, k.$set = function($, M) {
          var O, A = C.p($), H = "set" + (this.$u ? "UTC" : ""), V = (O = {}, O[c] = H + "Date", O[v] = H + "Date", O[d] = H + "Month", O[f] = H + "FullYear", O[a] = H + "Hours", O[l] = H + "Minutes", O[s] = H + "Seconds", O[i] = H + "Milliseconds", O)[A], L = A === c ? this.$D + (M - this.$W) : M;
          if (A === d || A === f) {
            var F = this.clone().set(v, 1);
            F.$d[V](L), F.init(), this.$d = F.set(v, Math.min(this.$D, F.daysInMonth())).$d;
          } else V && this.$d[V](L);
          return this.init(), this;
        }, k.set = function($, M) {
          return this.clone().$set($, M);
        }, k.get = function($) {
          return this[C.p($)]();
        }, k.add = function($, M) {
          var O, A = this;
          $ = Number($);
          var H = C.p(M), V = function(te) {
            var X = b(A);
            return C.w(X.date(X.date() + Math.round(te * $)), A);
          };
          if (H === d) return this.set(d, this.$M + $);
          if (H === f) return this.set(f, this.$y + $);
          if (H === c) return V(1);
          if (H === u) return V(7);
          var L = (O = {}, O[l] = r, O[a] = o, O[s] = n, O)[H] || 1, F = this.$d.getTime() + $ * L;
          return C.w(F, this);
        }, k.subtract = function($, M) {
          return this.add(-1 * $, M);
        }, k.format = function($) {
          var M = this, O = this.$locale();
          if (!this.isValid()) return O.invalidDate || w;
          var A = $ || "YYYY-MM-DDTHH:mm:ssZ", H = C.z(this), V = this.$H, L = this.$m, F = this.$M, te = O.weekdays, X = O.months, ue = O.meridiem, ie = function(re, q, G, J) {
            return re && (re[q] || re(M, A)) || G[q].slice(0, J);
          }, z = function(re) {
            return C.s(V % 12 || 12, re, "0");
          }, W = ue || function(re, q, G) {
            var J = re < 12 ? "AM" : "PM";
            return G ? J.toLowerCase() : J;
          };
          return A.replace(_, function(re, q) {
            return q || function(G) {
              switch (G) {
                case "YY":
                  return String(M.$y).slice(-2);
                case "YYYY":
                  return C.s(M.$y, 4, "0");
                case "M":
                  return F + 1;
                case "MM":
                  return C.s(F + 1, 2, "0");
                case "MMM":
                  return ie(O.monthsShort, F, X, 3);
                case "MMMM":
                  return ie(X, F);
                case "D":
                  return M.$D;
                case "DD":
                  return C.s(M.$D, 2, "0");
                case "d":
                  return String(M.$W);
                case "dd":
                  return ie(O.weekdaysMin, M.$W, te, 2);
                case "ddd":
                  return ie(O.weekdaysShort, M.$W, te, 3);
                case "dddd":
                  return te[M.$W];
                case "H":
                  return String(V);
                case "HH":
                  return C.s(V, 2, "0");
                case "h":
                  return z(1);
                case "hh":
                  return z(2);
                case "a":
                  return W(V, L, !0);
                case "A":
                  return W(V, L, !1);
                case "m":
                  return String(L);
                case "mm":
                  return C.s(L, 2, "0");
                case "s":
                  return String(M.$s);
                case "ss":
                  return C.s(M.$s, 2, "0");
                case "SSS":
                  return C.s(M.$ms, 3, "0");
                case "Z":
                  return H;
              }
              return null;
            }(re) || H.replace(":", "");
          });
        }, k.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, k.diff = function($, M, O) {
          var A, H = this, V = C.p(M), L = b($), F = (L.utcOffset() - this.utcOffset()) * r, te = this - L, X = function() {
            return C.m(H, L);
          };
          switch (V) {
            case f:
              A = X() / 12;
              break;
            case d:
              A = X();
              break;
            case p:
              A = X() / 3;
              break;
            case u:
              A = (te - F) / 6048e5;
              break;
            case c:
              A = (te - F) / 864e5;
              break;
            case a:
              A = te / o;
              break;
            case l:
              A = te / r;
              break;
            case s:
              A = te / n;
              break;
            default:
              A = te;
          }
          return O ? A : C.a(A);
        }, k.daysInMonth = function() {
          return this.endOf(d).$D;
        }, k.$locale = function() {
          return P[this.$L];
        }, k.locale = function($, M) {
          if (!$) return this.$L;
          var O = this.clone(), A = g($, M, !0);
          return A && (O.$L = A), O;
        }, k.clone = function() {
          return C.w(this.$d, this);
        }, k.toDate = function() {
          return new Date(this.valueOf());
        }, k.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, k.toISOString = function() {
          return this.$d.toISOString();
        }, k.toString = function() {
          return this.$d.toUTCString();
        }, D;
      }(), N = R.prototype;
      return b.prototype = N, [["$ms", i], ["$s", s], ["$m", l], ["$H", a], ["$W", c], ["$M", d], ["$y", f], ["$D", v]].forEach(function(D) {
        N[D[1]] = function(k) {
          return this.$g(k, D[0], D[1]);
        };
      }), b.extend = function(D, k) {
        return D.$i || (D(k, R, b), D.$i = !0), b;
      }, b.locale = g, b.isDayjs = x, b.unix = function(D) {
        return b(1e3 * D);
      }, b.en = P[T], b.Ls = P, b.p = {}, b;
    });
  }(Yn)), Yn.exports;
}
var Qa = xg();
const lt = /* @__PURE__ */ fi(Qa);
var Kn = { exports: {} }, Sg = Kn.exports, Es;
function Cg() {
  return Es || (Es = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Sg, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, s = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, a = {}, c = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, u = function(m) {
        return function(_) {
          this[m] = +_;
        };
      }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(_) {
          if (!_ || _ === "Z") return 0;
          var y = _.match(/([+-]|\d\d)/g), S = 60 * y[1] + (+y[2] || 0);
          return S === 0 ? 0 : y[0] === "+" ? -S : S;
        }(m);
      }], p = function(m) {
        var _ = a[m];
        return _ && (_.indexOf ? _ : _.s.concat(_.f));
      }, f = function(m, _) {
        var y, S = a.meridiem;
        if (S) {
          for (var E = 1; E <= 24; E += 1) if (m.indexOf(S(E, 0, _)) > -1) {
            y = E > 12;
            break;
          }
        } else y = m === (_ ? "pm" : "PM");
        return y;
      }, v = { A: [l, function(m) {
        this.afternoon = f(m, !1);
      }], a: [l, function(m) {
        this.afternoon = f(m, !0);
      }], Q: [o, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [o, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [i, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [s, u("seconds")], ss: [s, u("seconds")], m: [s, u("minutes")], mm: [s, u("minutes")], H: [s, u("hours")], h: [s, u("hours")], HH: [s, u("hours")], hh: [s, u("hours")], D: [s, u("day")], DD: [i, u("day")], Do: [l, function(m) {
        var _ = a.ordinal, y = m.match(/\d+/);
        if (this.day = y[0], _) for (var S = 1; S <= 31; S += 1) _(S).replace(/\[|\]/g, "") === m && (this.day = S);
      }], w: [s, u("week")], ww: [i, u("week")], M: [s, u("month")], MM: [i, u("month")], MMM: [l, function(m) {
        var _ = p("months"), y = (p("monthsShort") || _.map(function(S) {
          return S.slice(0, 3);
        })).indexOf(m) + 1;
        if (y < 1) throw new Error();
        this.month = y % 12 || y;
      }], MMMM: [l, function(m) {
        var _ = p("months").indexOf(m) + 1;
        if (_ < 1) throw new Error();
        this.month = _ % 12 || _;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(m) {
        this.year = c(m);
      }], YYYY: [/\d{4}/, u("year")], Z: d, ZZ: d };
      function w(m) {
        var _, y;
        _ = m, y = a && a.formats;
        for (var S = (m = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(b, C, R) {
          var N = R && R.toUpperCase();
          return C || y[R] || n[R] || y[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, k, $) {
            return k || $.slice(1);
          });
        })).match(r), E = S.length, T = 0; T < E; T += 1) {
          var P = S[T], I = v[P], x = I && I[0], g = I && I[1];
          S[T] = g ? { regex: x, parser: g } : P.replace(/^\[|\]$/g, "");
        }
        return function(b) {
          for (var C = {}, R = 0, N = 0; R < E; R += 1) {
            var D = S[R];
            if (typeof D == "string") N += D.length;
            else {
              var k = D.regex, $ = D.parser, M = b.slice(N), O = k.exec(M)[0];
              $.call(C, O), b = b.replace(O, "");
            }
          }
          return function(A) {
            var H = A.afternoon;
            if (H !== void 0) {
              var V = A.hours;
              H ? V < 12 && (A.hours += 12) : V === 12 && (A.hours = 0), delete A.afternoon;
            }
          }(C), C;
        };
      }
      return function(m, _, y) {
        y.p.customParseFormat = !0, m && m.parseTwoDigitYear && (c = m.parseTwoDigitYear);
        var S = _.prototype, E = S.parse;
        S.parse = function(T) {
          var P = T.date, I = T.utc, x = T.args;
          this.$u = I;
          var g = x[1];
          if (typeof g == "string") {
            var b = x[2] === !0, C = x[3] === !0, R = b || C, N = x[2];
            C && (N = x[2]), a = this.$locale(), !b && N && (a = y.Ls[N]), this.$d = function(M, O, A, H) {
              try {
                if (["x", "X"].indexOf(O) > -1) return new Date((O === "X" ? 1e3 : 1) * M);
                var V = w(O)(M), L = V.year, F = V.month, te = V.day, X = V.hours, ue = V.minutes, ie = V.seconds, z = V.milliseconds, W = V.zone, re = V.week, q = /* @__PURE__ */ new Date(), G = te || (L || F ? 1 : q.getDate()), J = L || q.getFullYear(), j = 0;
                L && !F || (j = F > 0 ? F - 1 : q.getMonth());
                var Z, oe = X || 0, _e = ue || 0, ce = ie || 0, ve = z || 0;
                return W ? new Date(Date.UTC(J, j, G, oe, _e, ce, ve + 60 * W.offset * 1e3)) : A ? new Date(Date.UTC(J, j, G, oe, _e, ce, ve)) : (Z = new Date(J, j, G, oe, _e, ce, ve), re && (Z = H(Z).week(re).toDate()), Z);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(P, g, I, y), this.init(), N && N !== !0 && (this.$L = this.locale(N).$L), R && P != this.format(g) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (g instanceof Array) for (var D = g.length, k = 1; k <= D; k += 1) {
            x[1] = g[k - 1];
            var $ = y.apply(this, x);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            k === D && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, T);
        };
      };
    });
  }(Kn)), Kn.exports;
}
var Eg = Cg();
const Rg = /* @__PURE__ */ fi(Eg);
Qa.extend(Rg);
const ec = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DDTHH:mm:ss",
  time: "HH:mm:ss"
};
function Ro(e, t = !1) {
  return e === "date" || t ? ec[e] : e === "time" ? "HH:mm" : "YYYY-MM-DDTHH:mm";
}
function hi(e, t = !1, n = "12h") {
  const r = n === "24h" ? t ? "HH:mm:ss" : "HH:mm" : t ? "h:mm:ss A" : "h:mm A";
  switch (e) {
    case "date":
      return "MMM D, YYYY";
    case "time":
      return r;
    case "datetime":
      return `MMM D, YYYY ${r}`;
  }
}
function $g(e, t = {}) {
  const n = [
    t.outputFormat,
    t.displayFormat,
    ec[e],
    Ro(e, !0),
    Ro(e, !1)
  ];
  for (const r of ["12h", "24h"])
    for (const o of [!0, !1])
      n.push(hi(e, o, r));
  return n.filter((r) => !!r);
}
function Xe(e, t, n = {}) {
  if (e == null || e.trim() === "")
    return null;
  const r = lt(e.trim(), $g(t, n), !0);
  return r.isValid() ? r : null;
}
function $o(e, t, n = {}) {
  return !e || !e.isValid() ? "" : e.format(
    n.outputFormat ?? Ro(t, n.showSeconds)
  );
}
function Tg(e, t, n = {}) {
  if (e.trim() === "")
    return "";
  const r = Xe(e, t, n);
  return r ? $o(r, t, n) : e;
}
function tc(e, t, n = {}) {
  if (e == null || e === "")
    return "";
  const r = Xe(e, t, n);
  return r ? r.format(
    n.displayFormat ?? hi(
      t,
      n.showSeconds,
      n.hourFormat
    )
  ) : e;
}
function Mg(e) {
  const t = e.startOf("month").startOf("week"), n = [];
  let r = t;
  for (let o = 0; o < 6; o++) {
    const i = [];
    for (let s = 0; s < 7; s++)
      i.push(r), r = r.add(1, "day");
    n.push(i);
  }
  return n;
}
function nc(e, t, n) {
  return !!(t && e.isBefore(t, "day") || n && e.isAfter(n, "day"));
}
function Og(e, t, n) {
  return !!(t && e.isBefore(t) || n && e.isAfter(n));
}
function Ig({
  mode: e,
  value: t,
  outputFormat: n,
  displayFormat: r,
  min: o,
  max: i,
  showSeconds: s,
  hourFormat: l,
  seedText: a,
  onCommit: c,
  dayRefs: u
}) {
  const d = { outputFormat: n, displayFormat: r, showSeconds: s, hourFormat: l }, p = l !== "24h", f = e === "date" || e === "datetime", v = e === "time" || e === "datetime", w = Xe(a ?? t, e, d), [m, _] = Y(w), [y, S] = Y(
    a ?? tc(t, e, d)
  ), [E, T] = Y(
    w ?? lt().startOf("month")
  ), [P, I] = Y(!0), [x, g] = Y("days"), b = Xe(o, e, d), C = Xe(i, e, d);
  function R(G) {
    return G.format(
      r ?? hi(e, s, l)
    );
  }
  function N() {
    const G = y.trim();
    if (G === "") {
      c("");
      return;
    }
    const J = Xe(G, e, d);
    c(J ? $o(J, e, d) : G);
  }
  const D = U(() => {
  });
  D.current = N;
  function k(G, { commit: J }) {
    _(G), T(G.startOf("month")), S(R(G)), J && c($o(G, e, d));
  }
  function $(G) {
    const J = G.target.value;
    S(J);
    const j = Xe(J, e, d);
    j && (_(j), T(j.startOf("month")));
  }
  function M(G) {
    var j, Z;
    const J = G.format("YYYY-MM-DD");
    (Z = (j = u.current) == null ? void 0 : j[J]) == null || Z.focus();
  }
  function O(G) {
    if (G.key === "Enter")
      G.preventDefault(), G.stopPropagation(), N();
    else if (G.key === "Escape" && P)
      G.preventDefault(), G.stopPropagation(), I(!1);
    else if (G.key === "ArrowDown" && f) {
      G.preventDefault(), I(!0);
      const J = m ?? lt();
      T(J.startOf("month")), requestAnimationFrame(() => M(J));
    }
  }
  function A(G) {
    if (nc(G, b, C)) return;
    const J = m ?? lt().startOf("day"), j = G.hour(J.hour()).minute(J.minute()).second(J.second());
    k(j, { commit: e === "date" });
  }
  function H(G, J) {
    let j = null;
    switch (G.key) {
      case "ArrowLeft":
        j = J.subtract(1, "day");
        break;
      case "ArrowRight":
        j = J.add(1, "day");
        break;
      case "ArrowUp":
        j = J.subtract(1, "week");
        break;
      case "ArrowDown":
        j = J.add(1, "week");
        break;
      case "PageUp":
        j = J.subtract(1, "month");
        break;
      case "PageDown":
        j = J.add(1, "month");
        break;
      case "Enter":
      case " ":
        G.preventDefault(), G.stopPropagation(), A(J);
        return;
      default:
        return;
    }
    G.preventDefault(), G.stopPropagation(), T(j.startOf("month")), requestAnimationFrame(() => M(j));
  }
  function V(G, J) {
    const j = Number(J);
    if (Number.isNaN(j)) return;
    const oe = (m ?? lt().startOf("day"))[G](j);
    _(oe), S(R(oe));
  }
  const L = (m == null ? void 0 : m.hour()) ?? 0, F = L >= 12 ? "PM" : "AM", te = p ? L % 12 || 12 : L;
  function X(G) {
    const J = Number(G);
    if (Number.isNaN(J)) return;
    const j = m ?? lt().startOf("day");
    let Z = J;
    if (p) {
      const _e = (J % 12 + 12) % 12;
      Z = F === "PM" ? _e + 12 : _e;
    }
    const oe = j.hour(Z);
    _(oe), S(R(oe));
  }
  function ue(G) {
    if (G === F) return;
    const J = m ?? lt().startOf("day"), j = J.hour() % 12, Z = J.hour(G === "PM" ? j + 12 : j);
    _(Z), S(R(Z));
  }
  function ie() {
    T(x === "days" ? E.subtract(1, "month") : x === "months" ? E.subtract(1, "year") : E.subtract(10, "year"));
  }
  function z() {
    T(x === "days" ? E.add(1, "month") : x === "months" ? E.add(1, "year") : E.add(10, "year"));
  }
  function W() {
    g(x === "days" ? "months" : "years");
  }
  function re(G) {
    T(E.month(G)), g("days");
  }
  function q(G) {
    T(E.year(G)), g("months");
  }
  return {
    // state
    open: P,
    setOpen: I,
    text: y,
    draft: m,
    viewMonth: E,
    view: x,
    minBound: b,
    maxBound: C,
    // derived
    is12h: p,
    hasCalendar: f,
    hasTime: v,
    meridiem: F,
    hourFieldValue: te,
    commitTextRef: D,
    // trigger handlers
    handleInput: $,
    handleInputKeyDown: O,
    commitText: N,
    // calendar handlers
    handlePrev: ie,
    handleNext: z,
    handleTitleClick: W,
    selectDay: A,
    selectMonth: re,
    selectYear: q,
    handleGridKeyDown: H,
    // time handlers
    setHour: X,
    setTimePart: V,
    setMeridiem: ue
  };
}
function Rr(e) {
  return e.type === "date" || e.type === "datetime" || e.type === "time";
}
const Dg = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep",
  "undoRedo"
], Ag = (e) => e == null, rc = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Fg(e, t) {
  return e.flatMap((n) => {
    if (n.maxRows == null)
      return [];
    const r = t.find((i) => i.sheetId === n.id), o = r != null ? rc(r).length : 0;
    return [
      {
        sheetId: n.id,
        label: n.label,
        count: o,
        maxRows: n.maxRows,
        exceeded: o > n.maxRows
      }
    ];
  });
}
function $t(e) {
  return Ag(e) ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
}
const Rs = (e) => [...new Set(e)];
function Wt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function sr(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Pg(e, t) {
  if (e == null)
    return "";
  let n = String(e);
  return n = n.replace(/"/g, '""'), (n.includes('"') || n.includes(t) || /[\n\r]/.test(n)) && (n = `"${n}"`), n;
}
function oc(e, t) {
  return e.map(
    (n) => n.map((r) => Pg(r, t)).join(t)
  ).join(`
`);
}
function pi(e, t, n, r) {
  const o = e.columns.map(
    (l) => r === "label" ? l.label : l.id
  ), i = t.map(
    (l) => e.columns.map((a) => {
      const c = l[a.id];
      return r === "value" || c == null ? Array.isArray(c) ? c.join(", ") : c : lc(
        e,
        a,
        c,
        n
      );
    })
  ), s = oc([o, ...i], Gm);
  return new Blob([s], { type: "text/csv" });
}
function ic(e, t, n, r) {
  const o = pi(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function sc(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function To(e, t) {
  return Array.isArray(t) ? t.map((n) => e[n] ?? n).join(", ") : typeof t != "string" ? t : e[t] ?? t;
}
function lc(e, t, n, r) {
  var o, i, s;
  if (t.type === "enum")
    return To(
      ((o = r[e.id]) == null ? void 0 : o[t.id]) ?? {},
      n
    );
  if (t.type === "reference" && n != null)
    return To(
      sc(t, r),
      n
    );
  if (t.type === "boolean") {
    if (n === !0)
      return ((i = t.typeArguments) == null ? void 0 : i.trueLabel) ?? Ka;
    if (n === !1)
      return ((s = t.typeArguments) == null ? void 0 : s.falseLabel) ?? Za;
  }
  return Rr(t) && typeof n == "string" ? tc(
    n,
    t.type,
    t.typeArguments
  ) : n;
}
function mi(e) {
  return e.map((t) => ({ ...t, rows: rc(t) }));
}
const $s = 4, Hn = 8;
function kg({
  open: e,
  inputRef: t,
  panelRef: n,
  onScrollAway: r
}) {
  const [o, i] = Y({
    top: 0,
    left: 0
  });
  return Ge(() => {
    if (!e) return;
    const s = () => {
      const l = t.current, a = n.current;
      if (!l || !a) return;
      const c = l.getBoundingClientRect(), u = window.innerHeight, d = window.innerWidth;
      if (c.bottom <= 0 || c.top >= u || c.right <= 0 || c.left >= d) {
        r();
        return;
      }
      const f = a.offsetHeight, v = a.offsetWidth, w = u - c.bottom, _ = w < f && c.top > w ? c.top - f - $s : c.bottom + $s, y = Wt(
        _,
        Hn,
        u - f - Hn
      ), S = Wt(
        c.left,
        Hn,
        d - v - Hn
      );
      i({ top: y + window.scrollY, left: S + window.scrollX });
    };
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [e]), o;
}
const Ng = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Lg({
  view: e,
  viewMonth: t,
  draft: n,
  minBound: r,
  maxBound: o,
  dayRefs: i,
  onPrev: s,
  onNext: l,
  onTitleClick: a,
  onSelectDay: c,
  onSelectMonth: u,
  onSelectYear: d,
  onDayKeyDown: p
}) {
  const { t: f } = ye(), v = Math.floor(t.year() / 10) * 10, w = Mg(t), m = lt(), _ = n ?? t.startOf("month"), y = e === "days" ? t.format("MMMM YYYY") : e === "months" ? t.format("YYYY") : `${v} - ${v + 9}`;
  return /* @__PURE__ */ h("div", { className: "hc:w-56", children: [
    /* @__PURE__ */ h("div", { className: "hc:mb-2 hc:flex hc:items-center hc:justify-between", children: [
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          "aria-label": f("components.datePicker.previous"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: s,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ h(ag, { "aria-hidden": "true", className: "hc:size-5" })
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          "aria-live": "polite",
          onMouseDown: (S) => S.preventDefault(),
          onClick: a,
          className: "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:px-2 hc:py-1 hc:font-semibold",
          children: y
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          "aria-label": f("components.datePicker.next"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: l,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ h(ug, { "aria-hidden": "true", className: "hc:size-5" })
        }
      )
    ] }),
    e === "days" && /* @__PURE__ */ h("div", { role: "grid", "aria-label": f("components.datePicker.calendarLabel"), children: [
      /* @__PURE__ */ h("div", { role: "row", className: "hc:mb-1 hc:grid hc:grid-cols-7", children: Ng.map((S) => /* @__PURE__ */ h(
        "div",
        {
          role: "columnheader",
          className: "hc:text-hello-csv-text-subtle hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:text-xs hc:font-medium",
          children: f(`components.datePicker.weekdays.${S}`)
        },
        S
      )) }),
      w.map((S) => /* @__PURE__ */ h(
        "div",
        {
          role: "row",
          className: "hc:grid hc:grid-cols-7",
          children: S.map((E) => {
            const T = E.format("YYYY-MM-DD"), P = n != null && E.isSame(n, "day"), I = E.isSame(m, "day"), x = !E.isSame(t, "month"), g = nc(E, r, o), b = E.isSame(_, "day");
            return /* @__PURE__ */ h("div", { role: "gridcell", children: /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                ref: (C) => {
                  i.current && (i.current[T] = C);
                },
                tabIndex: b ? 0 : -1,
                disabled: g,
                "aria-label": E.format("dddd, MMMM D, YYYY"),
                "aria-selected": P,
                "aria-current": I ? "date" : void 0,
                onClick: () => c(E),
                onKeyDown: (C) => p(C, E),
                className: `hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:rounded hc:text-sm ${P ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast hc:cursor-pointer" : g ? "hc:text-hello-csv-text-subtle hc:cursor-not-allowed hc:opacity-50" : x ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted hc:cursor-pointer" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer"} ${I && !P ? "hc:ring-hello-csv-primary hc:ring-1" : ""}`,
                children: E.date()
              }
            ) }, T);
          })
        },
        S[0].format("YYYY-MM-DD")
      ))
    ] }),
    e === "months" && /* @__PURE__ */ h("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const T = E === t.month();
      return /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onMouseDown: (P) => P.preventDefault(),
          onClick: () => u(E),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${T ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: lt().month(E).format("MMM")
        },
        E
      );
    }) }),
    e === "years" && /* @__PURE__ */ h("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const T = v - 1 + E, P = T === t.year(), I = T < v || T > v + 9;
      return /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          onMouseDown: (x) => x.preventDefault(),
          onClick: () => d(T),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${P ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : I ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: T
        },
        T
      );
    }) })
  ] });
}
function Vg({
  draft: e,
  is12h: t,
  showSeconds: n,
  hasCalendar: r,
  meridiem: o,
  hourFieldValue: i,
  onHourChange: s,
  onPartChange: l,
  onMeridiem: a
}) {
  const { t: c } = ye();
  return /* @__PURE__ */ h(
    "div",
    {
      className: `hc:flex hc:items-end hc:gap-2 ${r ? "hc:border-hello-csv-border hc:mt-3 hc:border-t hc:pt-3" : ""}`,
      children: [
        /* @__PURE__ */ h(
          jr,
          {
            label: c("components.datePicker.hours"),
            min: t ? 1 : 0,
            max: t ? 12 : 23,
            value: i,
            onChange: s
          }
        ),
        /* @__PURE__ */ h("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
        /* @__PURE__ */ h(
          jr,
          {
            label: c("components.datePicker.minutes"),
            max: 59,
            value: (e == null ? void 0 : e.minute()) ?? 0,
            onChange: (u) => l("minute", u)
          }
        ),
        n && /* @__PURE__ */ h(pe, { children: [
          /* @__PURE__ */ h("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
          /* @__PURE__ */ h(
            jr,
            {
              label: c("components.datePicker.seconds"),
              max: 59,
              value: (e == null ? void 0 : e.second()) ?? 0,
              onChange: (u) => l("second", u)
            }
          )
        ] }),
        t && /* @__PURE__ */ h("div", { className: "hc:ring-hello-csv-border-strong hc:ml-1 hc:flex hc:overflow-hidden hc:rounded-md hc:ring-1", children: ["AM", "PM"].map((u, d) => /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            "aria-pressed": o === u,
            onMouseDown: (p) => p.preventDefault(),
            onClick: () => a(u),
            className: `hc:cursor-pointer hc:px-2 hc:py-1 hc:text-sm ${d === 1 ? "hc:border-hello-csv-border-strong hc:border-l" : ""} ${o === u ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
            children: c(`components.datePicker.${u === "AM" ? "am" : "pm"}`)
          },
          u
        )) })
      ]
    }
  );
}
function jr({ label: e, value: t, max: n, min: r = 0, onChange: o }) {
  return /* @__PURE__ */ h("label", { className: "hc:flex hc:flex-col hc:text-xs", children: [
    /* @__PURE__ */ h("span", { className: "hc:text-hello-csv-text-subtle hc:mb-1", children: e }),
    /* @__PURE__ */ h(
      "input",
      {
        ...Er,
        type: "number",
        min: r,
        max: n,
        "aria-label": e,
        value: String(t).padStart(2, "0"),
        onInput: (i) => o(i.target.value),
        className: "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:w-14 hc:rounded-md hc:px-2 hc:py-1 hc:text-center hc:text-sm hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2"
      }
    )
  ] });
}
const Hg = "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:block hc:w-full hc:rounded-md hc:py-1.5 hc:pr-10 hc:pl-3 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6";
function zg({
  value: e,
  mode: t,
  outputFormat: n,
  displayFormat: r,
  min: o,
  max: i,
  showSeconds: s = !1,
  hourFormat: l = "12h",
  onCommit: a,
  seedText: c,
  ...u
}) {
  const { t: d } = ye(), p = U(null), f = U(null), v = U(null), w = U({}), m = Ig({
    value: e,
    mode: t,
    outputFormat: n,
    displayFormat: r,
    min: o,
    max: i,
    showSeconds: s,
    hourFormat: l,
    onCommit: a,
    seedText: c,
    dayRefs: w
  }), { open: _, setOpen: y, hasCalendar: S, hasTime: E, commitTextRef: T } = m, P = kg({
    open: _,
    inputRef: f,
    panelRef: v,
    onScrollAway: () => T.current()
  });
  return se(() => {
    var x, g, b;
    (x = f.current) == null || x.focus();
    const I = ((g = f.current) == null ? void 0 : g.value.length) ?? 0;
    (b = f.current) == null || b.setSelectionRange(I, I);
  }, []), se(() => {
    const I = (g) => {
      var b, C;
      return !!g && (!!((b = p.current) != null && b.contains(g)) || !!((C = v.current) != null && C.contains(g)));
    }, x = (g) => {
      I(g.target) && (I(g.relatedTarget) || T.current());
    };
    return document.addEventListener("focusout", x), () => document.removeEventListener("focusout", x);
  }, [T]), /* @__PURE__ */ h("div", { ref: p, className: "hc:relative hc:w-full", children: [
    /* @__PURE__ */ h("div", { className: "hc:relative", children: [
      /* @__PURE__ */ h(
        "input",
        {
          ...Er,
          ref: f,
          "aria-label": u["aria-label"],
          type: "text",
          className: Hg,
          value: m.text,
          onInput: m.handleInput,
          onKeyDown: m.handleInputKeyDown
        }
      ),
      /* @__PURE__ */ h(
        "button",
        {
          type: "button",
          "aria-label": d("components.datePicker.pickerLabel"),
          "aria-expanded": _,
          onClick: () => y((I) => !I),
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2 hc:outline-hidden",
          children: E && !S ? /* @__PURE__ */ h(gg, { "aria-hidden": "true", className: "hc:size-5 hc:sm:size-4" }) : /* @__PURE__ */ h(
            ng,
            {
              "aria-hidden": "true",
              className: "hc:size-5 hc:sm:size-4"
            }
          )
        }
      )
    ] }),
    _ && Qt(
      // Portaled out of the grid so the popover escapes the scroll
      // container's overflow clipping and the editing cell's stacking
      // context. The wrapper carries ROOT_CLASS (`hello-csv`) because the
      // library's Tailwind utilities are scoped under it — without a
      // `.hello-csv` ancestor the panel would render unstyled (the theme
      // CSS variables live on <html>, so those resolve regardless). This
      // mirrors how Root.tsx styles the headlessui portal root.
      /* @__PURE__ */ h("div", { className: ir, children: /* @__PURE__ */ h(
        "div",
        {
          ref: v,
          [Ga]: "",
          onMouseDown: (I) => {
            I.target.closest("input, button, select, textarea") || I.preventDefault();
          },
          onKeyDown: (I) => {
            var x;
            I.key === "Escape" && (I.stopPropagation(), y(!1), (x = f.current) == null || x.focus());
          },
          style: { position: "absolute", top: P.top, left: P.left },
          className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:z-99 hc:w-max hc:rounded-md hc:p-3 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:sm:text-sm",
          role: "dialog",
          "aria-label": d("components.datePicker.pickerLabel"),
          children: [
            S && /* @__PURE__ */ h(
              Lg,
              {
                view: m.view,
                viewMonth: m.viewMonth,
                draft: m.draft,
                minBound: m.minBound,
                maxBound: m.maxBound,
                dayRefs: w,
                onPrev: m.handlePrev,
                onNext: m.handleNext,
                onTitleClick: m.handleTitleClick,
                onSelectDay: m.selectDay,
                onSelectMonth: m.selectMonth,
                onSelectYear: m.selectYear,
                onDayKeyDown: m.handleGridKeyDown
              }
            ),
            E && /* @__PURE__ */ h(
              Vg,
              {
                draft: m.draft,
                is12h: m.is12h,
                showSeconds: s,
                hasCalendar: S,
                meridiem: m.meridiem,
                hourFieldValue: m.hourFieldValue,
                onHourChange: m.setHour,
                onPartChange: m.setTimePart,
                onMeridiem: m.setMeridiem
              }
            ),
            /* @__PURE__ */ h("div", { className: "hc:mt-3 hc:flex hc:justify-end", children: /* @__PURE__ */ h(Ve, { variant: "primary", onClick: m.commitText, children: d("components.datePicker.done") }) })
          ]
        }
      ) }),
      document.body
    )
  ] });
}
function Bg({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ h("div", { children: [
    /* @__PURE__ */ h("div", { className: "hc:grid hc:grid-cols-1 hc:sm:hidden", children: /* @__PURE__ */ h(
      At,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "hc:hidden hc:sm:block", children: /* @__PURE__ */ h("div", { className: "hc:border-hello-csv-border hc:border-b", children: /* @__PURE__ */ h(
      "nav",
      {
        "aria-label": "Tabs",
        className: "hc:-mb-px hc:flex hc:space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ h(
          "button",
          {
            id: `${r}-tab-${o.value}`,
            role: "tab",
            "aria-selected": o.value === t,
            "aria-current": o.value === t ? "page" : void 0,
            "aria-controls": `${r}-tabpanel-${o.value}`,
            onClick: () => n(o.value),
            className: ` ${o.value === t ? "hc:border-hello-csv-primary hc:text-hello-csv-primary" : "hc:text-hello-csv-text-muted hc:hover:border-hello-csv-border-strong hc:hover:text-hello-csv-text hc:border-transparent"} hc:flex hc:cursor-pointer hc:items-center hc:border-b-2 hc:px-1 hc:py-4 hc:text-sm hc:font-medium hc:whitespace-nowrap`,
            children: [
              o.icon,
              o.label
            ]
          },
          o.label
        ))
      }
    ) }) })
  ] });
}
const jg = Ct(
  "hc:bg-hello-csv-tooltip-surface hc:text-hello-csv-tooltip-text hc:absolute hc:left-0 hc:z-20 hc:hidden hc:w-max hc:max-w-xs hc:whitespace-normal hc:rounded-md hc:border-l-4 hc:py-2 hc:pr-3 hc:pl-2.5 hc:text-xs hc:shadow-lg hc:group-focus-within:block hc:group-hover:block",
  {
    variants: {
      variant: {
        error: "hc:border-hello-csv-danger",
        info: "hc:border-hello-csv-border-strong"
      },
      placement: {
        bottom: "hc:top-full hc:mt-2",
        top: "hc:bottom-full hc:mb-2"
      }
    },
    defaultVariants: {
      variant: "info",
      placement: "bottom"
    }
  }
), Ug = Ct(
  "hc:group hc:relative hc:h-full hc:w-full",
  {
    variants: {
      withOutline: {
        true: "hc:hover:z-5 hc:focus-within:z-5",
        false: ""
      }
    },
    defaultVariants: {
      withOutline: !1
    }
  }
);
function Wg({
  variant: e,
  children: t,
  tooltipText: n,
  focusable: r = !0,
  placement: o = "bottom"
}) {
  const i = jg({ variant: e, placement: o }), s = Ug({
    withOutline: !!n
  });
  return /* @__PURE__ */ h(
    "div",
    {
      className: s,
      tabIndex: r ? 0 : void 0,
      children: [
        t,
        n && /* @__PURE__ */ h("span", { className: i, children: [
          /* @__PURE__ */ h("span", { "aria-hidden": "true", className: `hc:absolute hc:left-3 hc:h-2 hc:w-2 hc:rotate-45 hc:bg-hello-csv-tooltip-surface ${o === "top" ? "hc:-bottom-1" : "hc:-top-1"}` }),
          n
        ] })
      ]
    }
  );
}
const Gg = Ct(
  "hc:relative hc:inline-flex hc:cursor-pointer hc:items-center hc:px-3 hc:py-2 hc:text-sm hc:font-semibold hc:ring-hello-csv-border-strong hc:ring-1 hc:ring-inset hc:focus:z-10",
  {
    variants: {
      active: {
        true: "",
        false: "hc:bg-hello-csv-surface hc:hover:bg-hello-csv-surface-sunken"
      },
      variant: {
        default: "",
        danger: "hc:text-hello-csv-danger"
      },
      location: {
        left: "hc:rounded-l-md",
        center: "hc:-ml-px",
        right: "hc:rounded-r-md hc:-ml-px "
      }
    },
    compoundVariants: [
      {
        active: !0,
        variant: "default",
        className: "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast"
      },
      {
        active: !0,
        variant: "danger",
        className: "hc:bg-hello-csv-danger hc:text-hello-csv-danger-contrast"
      },
      {
        active: !1,
        variant: "default",
        className: "hc:text-hello-csv-text"
      },
      {
        active: !1,
        variant: "danger",
        className: "hc:text-hello-csv-danger"
      }
    ]
  }
);
function qg({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ h("span", { className: "hc:isolate hc:inline-flex hc:rounded-md hc:shadow-xs", children: t.map((n, r) => /* @__PURE__ */ h(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: Gg({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const Tt = 8, zn = 8, gt = 8, Bn = -4, Yg = Ct(
  "hc:absolute hc:z-50 hc:w-max hc:rounded-md hc:bg-hello-csv-tooltip-surface hc:px-3 hc:py-2 hc:text-xs hc:text-hello-csv-tooltip-text hc:shadow-lg hc:transition-opacity hc:duration-200",
  {
    variants: {
      visible: {
        true: "hc:opacity-100",
        false: "hc:opacity-0 hc:pointer-events-none"
      },
      hidden: {
        true: "hc:hidden",
        false: ""
      }
    }
  }
);
function at({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = Y(!1), [s, l] = Y({ top: 0, left: 0 }), [a, c] = Y("bottom"), [u, d] = Y(0), p = U(null), f = U(null), [v, w] = Y(null);
  se(() => {
    const S = document.createElement("div");
    return S.classList.add(ir), document.body.appendChild(S), w(S), () => {
      document.body.removeChild(S);
    };
  }, []);
  const m = () => {
    requestAnimationFrame(() => {
      if (!p.current || !f.current) return;
      const S = p.current.getBoundingClientRect(), E = f.current.getBoundingClientRect(), T = window.innerWidth, P = window.innerHeight, I = P - S.bottom, x = S.top, g = T - S.right;
      let b = "bottom";
      I >= E.height + Tt ? b = "bottom" : x >= E.height + Tt ? b = "top" : g >= E.width + Tt ? b = "right" : b = "left";
      let C = 0, R = 0;
      switch (b) {
        case "bottom":
          C = S.bottom + Tt + window.scrollY, R = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "top":
          C = S.top - E.height - Tt + window.scrollY, R = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "right":
          C = S.top + S.height / 2 - E.height / 2 + window.scrollY, R = S.right + Tt + window.scrollX;
          break;
        case "left":
          C = S.top + S.height / 2 - E.height / 2 + window.scrollY, R = S.left - E.width - Tt + window.scrollX;
          break;
      }
      C = Wt(
        C,
        zn + window.scrollY,
        window.scrollY + P - E.height - zn
      ), R = Wt(
        R,
        zn + window.scrollX,
        window.scrollX + T - E.width - zn
      );
      const N = S.left + S.width / 2 + window.scrollX, D = S.top + S.height / 2 + window.scrollY;
      let k = 0;
      if (b === "top" || b === "bottom") {
        const $ = N - R;
        k = Wt(
          $,
          gt,
          E.width - gt
        );
      } else {
        const $ = D - C;
        k = Wt(
          $,
          gt,
          E.height - gt
        );
      }
      c(b), l({ top: C, left: R }), d(k), i(!0);
    });
  }, _ = () => i(!1), y = Ie();
  return /* @__PURE__ */ h(
    "div",
    {
      ref: p,
      tabIndex: 0,
      className: `${n ?? ""} hc:relative hc:inline-block`,
      onMouseEnter: m,
      onMouseLeave: _,
      onFocus: m,
      onBlur: _,
      "aria-describedby": y,
      children: [
        t,
        v && Qt(
          /* @__PURE__ */ h(
            "div",
            {
              id: y,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: f,
              className: Yg({ visible: o, hidden: r }),
              style: {
                top: `${s.top}px`,
                left: `${s.left}px`
              },
              children: [
                e,
                /* @__PURE__ */ h(
                  "div",
                  {
                    className: "hc:bg-hello-csv-tooltip-surface hc:absolute hc:h-2 hc:w-2 hc:rotate-45",
                    style: a === "bottom" ? { top: Bn, left: u - gt / 2 } : a === "top" ? {
                      bottom: Bn,
                      left: u - gt / 2
                    } : a === "left" ? {
                      right: Bn,
                      top: u - gt / 2
                    } : {
                      left: Bn,
                      top: u - gt / 2
                    }
                  }
                )
              ]
            }
          ),
          v
        )
      ]
    }
  );
}
const Kg = Ct(
  "hc:inline-flex hc:items-center hc:rounded-md hc:px-1.5 hc:py-0.5",
  {
    variants: {
      variant: {
        primary: "hc:bg-hello-csv-primary-extra-light hc:text-xs hc:font-medium",
        success: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:text-xs hc:font-medium",
        error: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:text-xs hc:font-medium"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);
function gi({ children: e, variant: t }) {
  const n = Kg({ variant: t });
  return /* @__PURE__ */ h("div", { className: n, children: e });
}
function Zg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const ac = /* @__PURE__ */ fe(Zg);
function Xg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Jg = /* @__PURE__ */ fe(Xg);
function Qg({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Mo = /* @__PURE__ */ fe(Qg);
function ev({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const tv = /* @__PURE__ */ fe(ev), nv = {
  info: {
    icon: /* @__PURE__ */ h(
      tv,
      {
        className: "hc:text-hello-csv-primary-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-primary-extra-light hc:text-hello-csv-primary hc:rounded-md hc:p-4"
  },
  success: {
    icon: /* @__PURE__ */ h(
      ac,
      {
        className: "hc:text-hello-csv-success-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:rounded-md hc:p-4"
  },
  error: {
    icon: /* @__PURE__ */ h(
      Mo,
      {
        className: "hc:text-hello-csv-danger-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:rounded-md hc:p-4"
  },
  warning: {
    icon: /* @__PURE__ */ h(
      Mo,
      {
        className: "hc:text-hello-csv-warning-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-warning-extra-light hc:text-hello-csv-warning hc:rounded-md hc:p-4"
  }
};
function vi({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = nv[e];
  return /* @__PURE__ */ h("div", { className: o, children: /* @__PURE__ */ h("div", { className: "hc:flex", children: [
    /* @__PURE__ */ h("div", { className: "hc:mt-1 hc:shrink-0", children: r }),
    /* @__PURE__ */ h("div", { className: "hc:ml-3", children: [
      t && /* @__PURE__ */ h("div", { className: "hc:text-base", children: t }),
      /* @__PURE__ */ h("div", { className: "hc:text-sm", children: n })
    ] })
  ] }) });
}
function cc({ children: e }) {
  return /* @__PURE__ */ h("div", { className: "hc:flex", children: [
    /* @__PURE__ */ h("div", { className: "hc:shrink-0", children: /* @__PURE__ */ h(
      um,
      {
        "aria-hidden": "true",
        className: "hc:text-hello-csv-danger hc:size-5"
      }
    ) }),
    /* @__PURE__ */ h("div", { className: "hc:ml-3 hc:flex-1 hc:md:flex hc:md:justify-between", children: /* @__PURE__ */ h("p", { className: "hc:text-hello-csv-danger hc:text-sm", children: e }) })
  ] });
}
const rv = Ct(
  "hc:inline-block hc:rounded-full hc:animate-spin hc:border-t-transparent hc:h-4 hc:w-4 hc:border-2",
  {
    variants: {
      color: {
        light: "hc:border-hello-csv-primary-contrast",
        dark: "hc:border-hello-csv-text"
      }
    },
    defaultVariants: {
      color: "dark"
    }
  }
);
function uc({ color: e = "dark" }) {
  return /* @__PURE__ */ h("span", { className: `${rv({ color: e })}` });
}
function dc(e, t) {
  return e.indexOf(t) !== -1;
}
function fc(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function hc(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
async function pc(e, t, n) {
  if (e.length === 0) return [];
  const r = Math.max(1, Math.min(t, e.length)), o = new Array(e.length);
  let i = 0;
  async function s() {
    for (; i < e.length; ) {
      const l = i++;
      o[l] = await n(e[l], l);
    }
  }
  return await Promise.all(Array.from({ length: r }, () => s())), o;
}
class mt {
  constructor(t) {
    be(this, "definition");
    // Empty cells only reach validators that opt in; presence is `required`'s job.
    be(this, "validatesEmptyValues", !1);
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class ov extends mt {
  isValid(t) {
    if (!$t(t) && typeof t != "boolean")
      return this.definition.error || "validators.boolean";
  }
}
class iv extends mt {
  constructor(n) {
    super(n);
    be(this, "key");
    be(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn, this.validatesEmptyValues = n.validatesEmptyValues ?? !0;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
class sv extends mt {
  constructor(n) {
    super(n);
    be(this, "dateType");
    be(this, "typeArguments");
    be(this, "min");
    be(this, "max");
    this.dateType = n.dateType, this.typeArguments = {
      outputFormat: n.outputFormat,
      displayFormat: n.displayFormat,
      showSeconds: n.showSeconds
    }, this.min = n.min, this.max = n.max;
  }
  isValid(n) {
    if ($t(n))
      return;
    if (typeof n != "string")
      return this.definition.error || `validators.${this.dateType}`;
    const r = Xe(n, this.dateType, this.typeArguments);
    if (!r)
      return this.definition.error || `validators.${this.dateType}`;
    const o = Xe(this.min, this.dateType, this.typeArguments), i = Xe(this.max, this.dateType, this.typeArguments);
    if (Og(r, o, i))
      return this.definition.error || "validators.dateOutOfRange";
  }
}
function lv(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class $r extends mt {
  constructor(n) {
    super(n);
    be(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(lv(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class av extends $r {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class cv extends mt {
  constructor(n) {
    super(n);
    be(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class uv extends mt {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class dv extends mt {
  constructor(n) {
    super(n);
    be(this, "delimiter");
    be(this, "values");
    if (this.delimiter = n.delimiter || /[,|]/, this.values = n.values, !this.values)
      throw new Error("Missing values for `multi_includes` validator");
  }
  isValid(n) {
    var o;
    if (Array.isArray(n))
      return n.some((i) => !this.values.includes(i)) ? this.definition.error || "validators.multiIncludes" : void 0;
    if ((((o = n == null ? void 0 : n.toString()) == null ? void 0 : o.split(this.delimiter)) ?? []).some((i) => !this.values.includes(i.trim())))
      return this.definition.error || "validators.multiIncludes";
  }
}
class fv extends $r {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class hv extends $r {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class pv extends mt {
  constructor(n) {
    super(n);
    be(this, "when");
    be(this, "validatesEmptyValues", !0);
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && $t(n))
      return this.definition.error || "validators.required";
  }
}
class mv extends mt {
  constructor(n) {
    super(n);
    be(this, "seen");
    be(this, "caseInsensitive");
    this.caseInsensitive = n.caseInsensitive || !1, this.seen = /* @__PURE__ */ new Set();
  }
  comparableValue(n) {
    if (Array.isArray(n)) {
      const r = [...n].sort();
      return this.caseInsensitive ? JSON.stringify(r.map((o) => o.toLocaleLowerCase())) : JSON.stringify(r);
    }
    return this.caseInsensitive && typeof n == "string" ? n.toLocaleLowerCase() : n;
  }
  isValid(n) {
    const r = this.comparableValue(n);
    if (this.seen.has(r))
      return this.definition.error || "validators.unique";
    this.seen.add(r);
  }
}
function gv(e) {
  const t = {
    regex_matches: $r,
    required: pv,
    unique: mv,
    includes: cv,
    multi_includes: dv,
    boolean: ov,
    is_integer: uv,
    postal_code: hv,
    phone_number: fv,
    email: av,
    date: sv,
    custom: iv
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function mc(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !$t(l))) == null ? void 0 : s.filter((l, a, c) => c.indexOf(l) === a)) ?? [];
}
function wi(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function vv(e, t, n, r, o, i, s, l) {
  return ne(() => {
    let c = e.rows;
    switch (n) {
      case "errors":
        c = e.rows.filter(
          (u, d) => r.some((p) => p.rowIndex === d)
        );
        break;
      case "valid":
        c = e.rows.filter(
          (u, d) => !r.some((p) => p.rowIndex === d)
        );
        break;
      case "all":
      default:
        c = e.rows;
    }
    if (o != null && (c = c.filter((u) => {
      const d = wi(t, i.id, u);
      return r.find(
        (f) => f.rowIndex === d && f.columnId === o
      ) != null;
    })), s.trim() !== "") {
      const u = sr(s);
      c = c.filter(
        (d) => i.columns.some((p) => {
          var w;
          const f = d[p.id], { displayValue: v } = gc(
            i,
            p,
            f,
            l
          );
          return (w = sr(v)) == null ? void 0 : w.includes(u);
        })
      );
    }
    return c;
  }, [
    e,
    n,
    r,
    o,
    i,
    t,
    s,
    l
  ]);
}
function yi(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function wv(e) {
  return Object.fromEntries(
    e.map((t) => [
      t.id,
      Object.fromEntries(
        t.columns.filter((n) => n.type === "enum").map((n) => [
          n.id,
          Object.fromEntries(
            n.typeArguments.values.map(({ label: r, value: o }) => [
              o,
              r
            ])
          )
        ])
      )
    ])
  );
}
function yv(e, t, n, r) {
  const o = Array.isArray(e) ? e : [], i = new Set(t.map((l) => l.value));
  return [...o.filter((l) => !i.has(l)).map((l) => ({
    label: n(String(l)),
    value: l,
    icon: r
  })), ...t];
}
function gc(e, t, n, r) {
  const o = lc(
    e,
    t,
    n,
    r
  ), i = $t(o);
  return { displayValue: i ? " " : o, valueEmpty: i };
}
function Tr(e) {
  if (e.validators && e.validators.length > 0) {
    const t = e.validators.find(
      (n) => n.validate === "required"
    );
    return t != null && t.when == null;
  }
  return !1;
}
function bv(e, t) {
  const n = [];
  if (e.type === "enum") {
    const { values: r, multiple: o } = e.typeArguments, i = r.map((s) => s.value);
    o ? n.push({
      values: i,
      validate: "multi_includes"
    }) : n.push({
      values: i,
      validate: "includes"
    });
  }
  if (e.type === "reference") {
    const r = mc(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  if (e.type === "boolean" && n.push({ validate: "boolean" }), Rr(e)) {
    const { outputFormat: r, displayFormat: o, min: i, max: s, showSeconds: l } = e.typeArguments ?? {};
    n.push({
      validate: "date",
      dateType: e.type,
      outputFormat: r,
      displayFormat: o,
      min: i,
      max: s,
      showSeconds: l
    });
  }
  return n;
}
async function _v(e, t, n, r, o) {
  const i = fc(e.columns, (a, c) => {
    c[a.id] = [], [
      ...(a.validators ?? []).filter(
        (d) => (d.runOn ?? "change") === r
      ),
      ...r === "change" ? bv(a, n) : []
    ].forEach((d) => {
      c[a.id].push(
        gv(d)
      );
    });
  }), s = [];
  return e.columns.forEach((a) => {
    const c = i[a.id];
    c.length !== 0 && t.rows.forEach((u, d) => {
      if (!hc(u))
        return;
      const p = u[a.id], f = $t(p);
      c.forEach((v) => {
        f && !v.validatesEmptyValues || s.push({
          columnId: a.id,
          rowIndex: d,
          value: p,
          row: u,
          validator: v
        });
      });
    });
  }), (await pc(
    s,
    o,
    async (a) => {
      let c;
      try {
        c = await a.validator.isValid(a.value, a.row);
      } catch {
        c = a.validator.definition.error ?? "validators.asyncError";
      }
      return c != null ? {
        sheetId: e.id,
        columnId: a.columnId,
        rowIndex: a.rowIndex,
        message: c
      } : null;
    }
  )).filter(
    (a) => a != null
  );
}
async function xv(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? Ua, i = e.map(async (l) => {
    const a = t.find(
      (c) => c.sheetId === l.id
    );
    return a ? await _v(
      l,
      a,
      t,
      r,
      o
    ) : [];
  });
  return (await Promise.all(i)).flat();
}
const Sv = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, vc = Math.pow(2, 53), Cv = -vc;
function Ev(e) {
  if (Sv.test(e)) {
    const t = parseFloat(e);
    return t > Cv && t < vc;
  }
  return !1;
}
function Rv(e, t = {}) {
  const n = e.trim().toLowerCase(), r = [
    ...t.trueValues ?? Jm,
    ...t.trueLabel ? [t.trueLabel] : []
  ].map((i) => i.toString().toLowerCase()), o = [
    ...t.falseValues ?? Qm,
    ...t.falseLabel ? [t.falseLabel] : []
  ].map((i) => i.toString().toLowerCase());
  return r.includes(n) ? !0 : o.includes(n) ? !1 : e;
}
function Ts(e, t) {
  const n = e.trim(), r = t.find((i) => String(i.value) === n);
  if (r)
    return String(r.value);
  const o = t.find((i) => i.label === n);
  return o ? String(o.value) : n;
}
function bi(e, t) {
  switch (e.type) {
    case "number":
      return t.trim() === "" ? t : Ev(t) ? parseFloat(t) : t;
    case "boolean":
      return Rv(t, e.typeArguments);
    case "enum": {
      const n = e.typeArguments.values;
      if (e.typeArguments.multiple) {
        const r = e.typeArguments.delimiter ?? ",";
        return t.split(r).map((o) => o.trim()).filter((o) => o !== "").map((o) => Ts(o, n));
      }
      return t.trim() === "" ? t : Ts(t, n);
    }
    case "date":
    case "datetime":
    case "time":
      return Tg(t, e.type, e.typeArguments);
    default:
      return t;
  }
}
function $v(e, t) {
  var n, r;
  switch (e.type) {
    case "enum":
      if (e.typeArguments.multiple && Array.isArray(t)) {
        const o = e.typeArguments.delimiter;
        return t.join(typeof o == "string" ? o : ",");
      }
      return t == null ? "" : String(t);
    case "boolean": {
      const o = e.typeArguments ?? {};
      return t === !0 ? ((n = o.trueValues) == null ? void 0 : n[0]) ?? o.trueLabel ?? "true" : t === !1 ? ((r = o.falseValues) == null ? void 0 : r[0]) ?? o.falseLabel ?? "false" : t == null ? "" : String(t);
    }
    default:
      return t == null ? "" : String(t);
  }
}
function Tv(e) {
  return e.type === "enum" && e.typeArguments.multiple ? [] : "";
}
function wc(e, t, n) {
  return t.map((r) => {
    const o = e.find(
      (s) => s.id === r.sheetId
    );
    if (o == null)
      return r;
    const i = r.rows.map((s, l) => {
      const a = { ...s };
      return n(o.columns, a, s, l), a;
    });
    return {
      ...r,
      rows: i
    };
  });
}
function Mv(e, t) {
  return wc(
    e,
    t,
    (n, r, o, i) => {
      n.filter((s) => s.type === "reference").forEach((s) => {
        const l = t.find(
          (a) => a.sheetId === s.typeArguments.sheetId
        );
        if (l != null) {
          const c = l.rows.map(
            (u) => u[s.typeArguments.sheetColumnId]
          )[i];
          r[s.id] = c;
        }
      });
    }
  );
}
function Ov(e, t) {
  return wc(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Iv(e, t) {
  return bi(t, e ?? "");
}
function Dv(e, t, n) {
  return e.map((r) => {
    const o = [], i = t.filter(
      (s) => s.sheetId === r.id
    );
    return n.map((s) => {
      const l = {};
      r.columns.forEach((a) => {
        const c = i.find(
          (u) => u.sheetColumnId === a.id
        );
        c != null && (l[c.sheetColumnId] = Iv(
          s[c.csvColumnName],
          a
        ));
      }), o.push(l);
    }), {
      sheetId: r.id,
      rows: o
    };
  });
}
function Av(e, t, n) {
  const r = n.data, o = Dv(e, t, r), i = Ov(
    e,
    o
  );
  return Mv(e, i);
}
function Mr(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Fv(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function Pv(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!Mr(i))
        return !1;
      const s = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => sr(a)), l = sr(r);
      return s.includes(l);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const kv = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Pv(r, t);
    n.push(...o);
  }), Fv(n);
};
function Nv(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Lv(e, t) {
  const n = Vv(e, t), r = Hv(n);
  return zv(r);
}
function Vv(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, Wa);
}
function Hv(e) {
  return [
    ...e,
    ...Array(Wa - e.length).fill("")
  ];
}
function zv(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > qm && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Bv(e, t) {
  const { t: n } = ye();
  return e.flatMap(
    (o) => o.columns.filter((i) => Mr(i)).map((i) => ({
      label: `${i.label}${Tr(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => jv(o, i, n("mapper.unused")));
}
function jv(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Uv(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (Tr(r) && Mr(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Wv({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = ye();
  return t && /* @__PURE__ */ h("div", { className: "hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:m-4 hc:rounded-sm hc:border hc:px-4 hc:sm:px-6 hc:lg:px-8", children: /* @__PURE__ */ h("div", { className: "hc:mt-6 hc:flow-root", children: /* @__PURE__ */ h("div", { className: "hc:-mx-4 hc:-my-2 hc:overflow-x-auto hc:sm:-mx-6 hc:lg:-mx-8", children: /* @__PURE__ */ h("div", { className: "hc:inline-block hc:min-w-full hc:py-2 hc:align-middle", children: /* @__PURE__ */ h("table", { className: "hc:divide-hello-csv-border-strong hc:min-w-full hc:divide-y", children: [
    /* @__PURE__ */ h("thead", { children: /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h(
      "th",
      {
        scope: "col",
        className: "hc:text-hello-csv-text hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:sm:pl-6 hc:lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ h(gi, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ h("tbody", { className: "hc:divide-hello-csv-border-strong hc:divide-y", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { className: "hc:text-hello-csv-text hc:h-12 hc:py-4 hc:pr-3 hc:pl-4 hc:text-sm hc:font-medium hc:sm:pl-6 hc:lg:pl-8", children: o || i === 0 && /* @__PURE__ */ h("span", { className: "hc:text-hello-csv-text-muted hc:italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function Gv({
  csvHeader: e,
  setMapping: t,
  currentMapping: n,
  mappingSelectionOptions: r,
  onMouseEnter: o
}) {
  var s;
  const i = n == null ? null : ((s = r.find(
    (l) => l.value.sheetId === n.sheetId && l.value.sheetColumnId === n.sheetColumnId
  )) == null ? void 0 : s.value) ?? null;
  return /* @__PURE__ */ h(
    "div",
    {
      className: "hc:hover:bg-hello-csv-muted hc:rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ h("div", { className: "hc:flex hc:items-center hc:py-2.5", children: [
        /* @__PURE__ */ h("div", { className: "hc:mx-2.5 hc:flex hc:flex-1 hc:justify-between", children: [
          /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h(gi, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ h("div", { className: "hc:mx-5", children: /* @__PURE__ */ h(Hp, { className: "hc:h-4 hc:w-4" }) })
        ] }),
        /* @__PURE__ */ h("div", { className: "hc:mx-2.5 hc:flex-1", children: /* @__PURE__ */ h(
          At,
          {
            "aria-label": `column mapping for ${e}`,
            searchable: !0,
            clearable: !0,
            compareFunction: (l, a) => l == null || a == null ? !1 : l.sheetColumnId === a.sheetColumnId && l.sheetId === a.sheetId,
            value: i,
            options: r,
            onChange: (l) => t(l)
          }
        ) })
      ] })
    }
  );
}
const yc = "HelloCSV", bc = 1, ut = "state";
async function qv(e, t) {
  return new Promise((n, r) => {
    const o = xc(e, t), i = indexedDB.open(yc, bc);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const c = i.result.transaction(ut, "readonly").objectStore(ut).get(o);
      c.onerror = () => n(null), c.onsuccess = () => {
        try {
          const u = c.result;
          u.sheetDefinitions = e, n(u);
        } catch {
          n(null);
        }
      };
    }, i.onupgradeneeded = (s) => {
      const l = s.target.result;
      l.objectStoreNames.contains(ut) && l.deleteObjectStore(ut), l.createObjectStore(ut);
    };
  });
}
async function _c(e, t) {
  return new Promise((n, r) => {
    const o = xc(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(yc, bc);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const u = s.result.transaction(ut, "readwrite").objectStore(ut).put(i, o);
      u.onerror = () => r(u.error), u.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(ut) || a.createObjectStore(ut);
    };
  });
}
function xc(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${Yv(r)}`;
}
function Yv(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function Kv(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => Mr(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      Tr(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const Zv = (e) => "." + (e.split(".").pop() ?? "").toLowerCase(), wn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Xv = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Jv = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Xv(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
var Zn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Qv = Zn.exports, Ms;
function e0() {
  return Ms || (Ms = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Qv, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, c = {};
      function u(x) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(g) {
          var b = T(g);
          b.chunkSize = parseInt(b.chunkSize), g.step || g.chunk || (b.chunkSize = null), this._handle = new w(b), (this._handle.streamer = this)._config = b;
        }).call(this, x), this.parseChunk = function(g, b) {
          var C = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < C) {
            let N = this._config.newline;
            N || (R = this._config.quoteChar || '"', N = this._handle.guessLineEndings(g, R)), g = [...g.split(N).slice(C)].join(N);
          }
          this.isFirstChunk && I(this._config.beforeFirstChunk) && (R = this._config.beforeFirstChunk(g)) !== void 0 && (g = R), this.isFirstChunk = !1, this._halted = !1;
          var C = this._partialLine + g, R = (this._partialLine = "", this._handle.parse(C, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (g = R.meta.cursor, C = (this._finished || (this._partialLine = C.substring(g - this._baseIndex), this._baseIndex = g), R && R.data && (this._rowCount += R.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: R, workerId: c.WORKER_ID, finished: C });
            else if (I(this._config.chunk) && !b) {
              if (this._config.chunk(R, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = R = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(R.data), this._completeResults.errors = this._completeResults.errors.concat(R.errors), this._completeResults.meta = R.meta), this._completed || !C || !I(this._config.complete) || R && R.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), C || R && R.meta.paused || this._nextChunk(), R;
          }
          this._halted = !0;
        }, this._sendError = function(g) {
          I(this._config.error) ? this._config.error(g) : s && this._config.error && r.postMessage({ workerId: c.WORKER_ID, error: g, finished: !1 });
        };
      }
      function d(x) {
        var g;
        (x = x || {}).chunkSize || (x.chunkSize = c.RemoteChunkSize), u.call(this, x), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(b) {
          this._input = b, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (g = new XMLHttpRequest(), this._config.withCredentials && (g.withCredentials = this._config.withCredentials), i || (g.onload = P(this._chunkLoaded, this), g.onerror = P(this._chunkError, this)), g.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var b, C = this._config.downloadRequestHeaders;
              for (b in C) g.setRequestHeader(b, C[b]);
            }
            var R;
            this._config.chunkSize && (R = this._start + this._config.chunkSize - 1, g.setRequestHeader("Range", "bytes=" + this._start + "-" + R));
            try {
              g.send(this._config.downloadRequestBody);
            } catch (N) {
              this._chunkError(N.message);
            }
            i && g.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          g.readyState === 4 && (g.status < 200 || 400 <= g.status ? this._chunkError() : (this._start += this._config.chunkSize || g.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((b) => (b = b.getResponseHeader("Content-Range")) !== null ? parseInt(b.substring(b.lastIndexOf("/") + 1)) : -1)(g), this.parseChunk(g.responseText)));
        }, this._chunkError = function(b) {
          b = g.statusText || b, this._sendError(new Error(b));
        };
      }
      function p(x) {
        (x = x || {}).chunkSize || (x.chunkSize = c.LocalChunkSize), u.call(this, x);
        var g, b, C = typeof FileReader < "u";
        this.stream = function(R) {
          this._input = R, b = R.slice || R.webkitSlice || R.mozSlice, C ? ((g = new FileReader()).onload = P(this._chunkLoaded, this), g.onerror = P(this._chunkError, this)) : g = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var R = this._input, N = (this._config.chunkSize && (N = Math.min(this._start + this._config.chunkSize, this._input.size), R = b.call(R, this._start, N)), g.readAsText(R, this._config.encoding));
          C || this._chunkLoaded({ target: { result: N } });
        }, this._chunkLoaded = function(R) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(R.target.result);
        }, this._chunkError = function() {
          this._sendError(g.error);
        };
      }
      function f(x) {
        var g;
        u.call(this, x = x || {}), this.stream = function(b) {
          return g = b, this._nextChunk();
        }, this._nextChunk = function() {
          var b, C;
          if (!this._finished) return b = this._config.chunkSize, g = b ? (C = g.substring(0, b), g.substring(b)) : (C = g, ""), this._finished = !g, this.parseChunk(C);
        };
      }
      function v(x) {
        u.call(this, x = x || {});
        var g = [], b = !0, C = !1;
        this.pause = function() {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(R) {
          this._input = R, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          C && g.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), g.length ? this.parseChunk(g.shift()) : b = !0;
        }, this._streamData = P(function(R) {
          try {
            g.push(typeof R == "string" ? R : R.toString(this._config.encoding)), b && (b = !1, this._checkIsFinished(), this.parseChunk(g.shift()));
          } catch (N) {
            this._streamError(N);
          }
        }, this), this._streamError = P(function(R) {
          this._streamCleanUp(), this._sendError(R);
        }, this), this._streamEnd = P(function() {
          this._streamCleanUp(), C = !0, this._streamData("");
        }, this), this._streamCleanUp = P(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function w(x) {
        var g, b, C, R, N = Math.pow(2, 53), D = -N, k = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, $ = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, M = this, O = 0, A = 0, H = !1, V = !1, L = [], F = { data: [], errors: [], meta: {} };
        function te(z) {
          return x.skipEmptyLines === "greedy" ? z.join("").trim() === "" : z.length === 1 && z[0].length === 0;
        }
        function X() {
          if (F && C && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), C = !1), x.skipEmptyLines && (F.data = F.data.filter(function(q) {
            return !te(q);
          })), ue()) {
            let q = function(G, J) {
              I(x.transformHeader) && (G = x.transformHeader(G, J)), L.push(G);
            };
            if (F) if (Array.isArray(F.data[0])) {
              for (var z = 0; ue() && z < F.data.length; z++) F.data[z].forEach(q);
              F.data.splice(0, 1);
            } else F.data.forEach(q);
          }
          function W(q, G) {
            for (var J = x.header ? {} : [], j = 0; j < q.length; j++) {
              var Z = j, oe = q[j], oe = ((_e, ce) => ((ve) => (x.dynamicTypingFunction && x.dynamicTyping[ve] === void 0 && (x.dynamicTyping[ve] = x.dynamicTypingFunction(ve)), (x.dynamicTyping[ve] || x.dynamicTyping) === !0))(_e) ? ce === "true" || ce === "TRUE" || ce !== "false" && ce !== "FALSE" && (((ve) => {
                if (k.test(ve) && (ve = parseFloat(ve), D < ve && ve < N))
                  return 1;
              })(ce) ? parseFloat(ce) : $.test(ce) ? new Date(ce) : ce === "" ? null : ce) : ce)(Z = x.header ? j >= L.length ? "__parsed_extra" : L[j] : Z, oe = x.transform ? x.transform(oe, Z) : oe);
              Z === "__parsed_extra" ? (J[Z] = J[Z] || [], J[Z].push(oe)) : J[Z] = oe;
            }
            return x.header && (j > L.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + L.length + " fields but parsed " + j, A + G) : j < L.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + L.length + " fields but parsed " + j, A + G)), J;
          }
          var re;
          F && (x.header || x.dynamicTyping || x.transform) && (re = 1, !F.data.length || Array.isArray(F.data[0]) ? (F.data = F.data.map(W), re = F.data.length) : F.data = W(F.data, 0), x.header && F.meta && (F.meta.fields = L), A += re);
        }
        function ue() {
          return x.header && L.length === 0;
        }
        function ie(z, W, re, q) {
          z = { type: z, code: W, message: re }, q !== void 0 && (z.row = q), F.errors.push(z);
        }
        I(x.step) && (R = x.step, x.step = function(z) {
          F = z, ue() ? X() : (X(), F.data.length !== 0 && (O += z.data.length, x.preview && O > x.preview ? b.abort() : (F.data = F.data[0], R(F, M))));
        }), this.parse = function(z, W, re) {
          var q = x.quoteChar || '"', q = (x.newline || (x.newline = this.guessLineEndings(z, q)), C = !1, x.delimiter ? I(x.delimiter) && (x.delimiter = x.delimiter(z), F.meta.delimiter = x.delimiter) : ((q = ((G, J, j, Z, oe) => {
            var _e, ce, ve, ot;
            oe = oe || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var zt = 0; zt < oe.length; zt++) {
              for (var qe, ln = oe[zt], $e = 0, Ye = 0, Ee = 0, Pe = (ve = void 0, new _({ comments: Z, delimiter: ln, newline: J, preview: 10 }).parse(G)), it = 0; it < Pe.data.length; it++) j && te(Pe.data[it]) ? Ee++ : (qe = Pe.data[it].length, Ye += qe, ve === void 0 ? ve = qe : 0 < qe && ($e += Math.abs(qe - ve), ve = qe));
              0 < Pe.data.length && (Ye /= Pe.data.length - Ee), (ce === void 0 || $e <= ce) && (ot === void 0 || ot < Ye) && 1.99 < Ye && (ce = $e, _e = ln, ot = Ye);
            }
            return { successful: !!(x.delimiter = _e), bestDelimiter: _e };
          })(z, x.newline, x.skipEmptyLines, x.comments, x.delimitersToGuess)).successful ? x.delimiter = q.bestDelimiter : (C = !0, x.delimiter = c.DefaultDelimiter), F.meta.delimiter = x.delimiter), T(x));
          return x.preview && x.header && q.preview++, g = z, b = new _(q), F = b.parse(g, W, re), X(), H ? { meta: { paused: !0 } } : F || { meta: { paused: !1 } };
        }, this.paused = function() {
          return H;
        }, this.pause = function() {
          H = !0, b.abort(), g = I(x.chunk) ? "" : g.substring(b.getCharIndex());
        }, this.resume = function() {
          M.streamer._halted ? (H = !1, M.streamer.parseChunk(g, !0)) : setTimeout(M.resume, 3);
        }, this.aborted = function() {
          return V;
        }, this.abort = function() {
          V = !0, b.abort(), F.meta.aborted = !0, I(x.complete) && x.complete(F), g = "";
        }, this.guessLineEndings = function(G, q) {
          G = G.substring(0, 1048576);
          var q = new RegExp(m(q) + "([^]*?)" + m(q), "gm"), re = (G = G.replace(q, "")).split("\r"), q = G.split(`
`), G = 1 < q.length && q[0].length < re[0].length;
          if (re.length === 1 || G) return `
`;
          for (var J = 0, j = 0; j < re.length; j++) re[j][0] === `
` && J++;
          return J >= re.length / 2 ? `\r
` : "\r";
        };
      }
      function m(x) {
        return x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function _(x) {
        var g = (x = x || {}).delimiter, b = x.newline, C = x.comments, R = x.step, N = x.preview, D = x.fastMode, k = null, $ = !1, M = x.quoteChar == null ? '"' : x.quoteChar, O = M;
        if (x.escapeChar !== void 0 && (O = x.escapeChar), (typeof g != "string" || -1 < c.BAD_DELIMITERS.indexOf(g)) && (g = ","), C === g) throw new Error("Comment character same as delimiter");
        C === !0 ? C = "#" : (typeof C != "string" || -1 < c.BAD_DELIMITERS.indexOf(C)) && (C = !1), b !== `
` && b !== "\r" && b !== `\r
` && (b = `
`);
        var A = 0, H = !1;
        this.parse = function(V, L, F) {
          if (typeof V != "string") throw new Error("Input must be a string");
          var te = V.length, X = g.length, ue = b.length, ie = C.length, z = I(R), W = [], re = [], q = [], G = A = 0;
          if (!V) return $e();
          if (D || D !== !1 && V.indexOf(M) === -1) {
            for (var J = V.split(b), j = 0; j < J.length; j++) {
              if (q = J[j], A += q.length, j !== J.length - 1) A += b.length;
              else if (F) return $e();
              if (!C || q.substring(0, ie) !== C) {
                if (z) {
                  if (W = [], ot(q.split(g)), Ye(), H) return $e();
                } else ot(q.split(g));
                if (N && N <= j) return W = W.slice(0, N), $e(!0);
              }
            }
            return $e();
          }
          for (var Z = V.indexOf(g, A), oe = V.indexOf(b, A), _e = new RegExp(m(O) + m(M), "g"), ce = V.indexOf(M, A); ; ) if (V[A] === M) for (ce = A, A++; ; ) {
            if ((ce = V.indexOf(M, ce + 1)) === -1) return F || re.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: W.length, index: A }), qe();
            if (ce === te - 1) return qe(V.substring(A, ce).replace(_e, M));
            if (M === O && V[ce + 1] === O) ce++;
            else if (M === O || ce === 0 || V[ce - 1] !== O) {
              Z !== -1 && Z < ce + 1 && (Z = V.indexOf(g, ce + 1));
              var ve = zt((oe = oe !== -1 && oe < ce + 1 ? V.indexOf(b, ce + 1) : oe) === -1 ? Z : Math.min(Z, oe));
              if (V.substr(ce + 1 + ve, X) === g) {
                q.push(V.substring(A, ce).replace(_e, M)), V[A = ce + 1 + ve + X] !== M && (ce = V.indexOf(M, A)), Z = V.indexOf(g, A), oe = V.indexOf(b, A);
                break;
              }
              if (ve = zt(oe), V.substring(ce + 1 + ve, ce + 1 + ve + ue) === b) {
                if (q.push(V.substring(A, ce).replace(_e, M)), ln(ce + 1 + ve + ue), Z = V.indexOf(g, A), ce = V.indexOf(M, A), z && (Ye(), H)) return $e();
                if (N && W.length >= N) return $e(!0);
                break;
              }
              re.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: W.length, index: A }), ce++;
            }
          }
          else if (C && q.length === 0 && V.substring(A, A + ie) === C) {
            if (oe === -1) return $e();
            A = oe + ue, oe = V.indexOf(b, A), Z = V.indexOf(g, A);
          } else if (Z !== -1 && (Z < oe || oe === -1)) q.push(V.substring(A, Z)), A = Z + X, Z = V.indexOf(g, A);
          else {
            if (oe === -1) break;
            if (q.push(V.substring(A, oe)), ln(oe + ue), z && (Ye(), H)) return $e();
            if (N && W.length >= N) return $e(!0);
          }
          return qe();
          function ot(Ee) {
            W.push(Ee), G = A;
          }
          function zt(Ee) {
            var Pe = 0;
            return Pe = Ee !== -1 && (Ee = V.substring(ce + 1, Ee)) && Ee.trim() === "" ? Ee.length : Pe;
          }
          function qe(Ee) {
            return F || (Ee === void 0 && (Ee = V.substring(A)), q.push(Ee), A = te, ot(q), z && Ye()), $e();
          }
          function ln(Ee) {
            A = Ee, ot(q), q = [], oe = V.indexOf(b, A);
          }
          function $e(Ee) {
            if (x.header && !L && W.length && !$) {
              var Pe = W[0], it = {}, Ir = new Set(Pe);
              let Ci = !1;
              for (let Bt = 0; Bt < Pe.length; Bt++) {
                let Ke = Pe[Bt];
                if (it[Ke = I(x.transformHeader) ? x.transformHeader(Ke, Bt) : Ke]) {
                  let an, Ei = it[Ke];
                  for (; an = Ke + "_" + Ei, Ei++, Ir.has(an); ) ;
                  Ir.add(an), Pe[Bt] = an, it[Ke]++, Ci = !0, (k = k === null ? {} : k)[an] = Ke;
                } else it[Ke] = 1, Pe[Bt] = Ke;
                Ir.add(Ke);
              }
              Ci && console.warn("Duplicate headers found and renamed."), $ = !0;
            }
            return { data: W, errors: re, meta: { delimiter: g, linebreak: b, aborted: H, truncated: !!Ee, cursor: G + (L || 0), renamedHeaders: k } };
          }
          function Ye() {
            R($e()), W = [], re = [];
          }
        }, this.abort = function() {
          H = !0;
        }, this.getCharIndex = function() {
          return A;
        };
      }
      function y(x) {
        var g = x.data, b = l[g.workerId], C = !1;
        if (g.error) b.userError(g.error, g.file);
        else if (g.results && g.results.data) {
          var R = { abort: function() {
            C = !0, S(g.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if (I(b.userStep)) {
            for (var N = 0; N < g.results.data.length && (b.userStep({ data: g.results.data[N], errors: g.results.errors, meta: g.results.meta }, R), !C); N++) ;
            delete g.results;
          } else I(b.userChunk) && (b.userChunk(g.results, R, g.file), delete g.results);
        }
        g.finished && !C && S(g.workerId, g.results);
      }
      function S(x, g) {
        var b = l[x];
        I(b.userComplete) && b.userComplete(g), b.terminate(), delete l[x];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function T(x) {
        if (typeof x != "object" || x === null) return x;
        var g, b = Array.isArray(x) ? [] : {};
        for (g in x) b[g] = T(x[g]);
        return b;
      }
      function P(x, g) {
        return function() {
          x.apply(g, arguments);
        };
      }
      function I(x) {
        return typeof x == "function";
      }
      return c.parse = function(x, g) {
        var b = (g = g || {}).dynamicTyping || !1;
        if (I(b) && (g.dynamicTypingFunction = b, b = {}), g.dynamicTyping = b, g.transform = !!I(g.transform) && g.transform, !g.worker || !c.WORKERS_SUPPORTED) return b = null, c.NODE_STREAM_INPUT, typeof x == "string" ? (x = ((C) => C.charCodeAt(0) !== 65279 ? C : C.slice(1))(x), b = new (g.download ? d : f)(g)) : x.readable === !0 && I(x.read) && I(x.on) ? b = new v(g) : (r.File && x instanceof File || x instanceof Object) && (b = new p(g)), b.stream(x);
        (b = (() => {
          var C;
          return !!c.WORKERS_SUPPORTED && (C = (() => {
            var R = r.URL || r.webkitURL || null, N = n.toString();
            return c.BLOB_URL || (c.BLOB_URL = R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", N, ")();"], { type: "text/javascript" })));
          })(), (C = new r.Worker(C)).onmessage = y, C.id = a++, l[C.id] = C);
        })()).userStep = g.step, b.userChunk = g.chunk, b.userComplete = g.complete, b.userError = g.error, g.step = I(g.step), g.chunk = I(g.chunk), g.complete = I(g.complete), g.error = I(g.error), delete g.worker, b.postMessage({ input: x, config: g, workerId: b.id });
      }, c.unparse = function(x, g) {
        var b = !1, C = !0, R = ",", N = `\r
`, D = '"', k = D + D, $ = !1, M = null, O = !1, A = ((() => {
          if (typeof g == "object") {
            if (typeof g.delimiter != "string" || c.BAD_DELIMITERS.filter(function(L) {
              return g.delimiter.indexOf(L) !== -1;
            }).length || (R = g.delimiter), typeof g.quotes != "boolean" && typeof g.quotes != "function" && !Array.isArray(g.quotes) || (b = g.quotes), typeof g.skipEmptyLines != "boolean" && typeof g.skipEmptyLines != "string" || ($ = g.skipEmptyLines), typeof g.newline == "string" && (N = g.newline), typeof g.quoteChar == "string" && (D = g.quoteChar), typeof g.header == "boolean" && (C = g.header), Array.isArray(g.columns)) {
              if (g.columns.length === 0) throw new Error("Option columns is empty");
              M = g.columns;
            }
            g.escapeChar !== void 0 && (k = g.escapeChar + D), g.escapeFormulae instanceof RegExp ? O = g.escapeFormulae : typeof g.escapeFormulae == "boolean" && g.escapeFormulae && (O = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(m(D), "g"));
        if (typeof x == "string" && (x = JSON.parse(x)), Array.isArray(x)) {
          if (!x.length || Array.isArray(x[0])) return H(null, x, $);
          if (typeof x[0] == "object") return H(M || Object.keys(x[0]), x, $);
        } else if (typeof x == "object") return typeof x.data == "string" && (x.data = JSON.parse(x.data)), Array.isArray(x.data) && (x.fields || (x.fields = x.meta && x.meta.fields || M), x.fields || (x.fields = Array.isArray(x.data[0]) ? x.fields : typeof x.data[0] == "object" ? Object.keys(x.data[0]) : []), Array.isArray(x.data[0]) || typeof x.data[0] == "object" || (x.data = [x.data])), H(x.fields || [], x.data || [], $);
        throw new Error("Unable to serialize unrecognized input");
        function H(L, F, te) {
          var X = "", ue = (typeof L == "string" && (L = JSON.parse(L)), typeof F == "string" && (F = JSON.parse(F)), Array.isArray(L) && 0 < L.length), ie = !Array.isArray(F[0]);
          if (ue && C) {
            for (var z = 0; z < L.length; z++) 0 < z && (X += R), X += V(L[z], z);
            0 < F.length && (X += N);
          }
          for (var W = 0; W < F.length; W++) {
            var re = (ue ? L : F[W]).length, q = !1, G = ue ? Object.keys(F[W]).length === 0 : F[W].length === 0;
            if (te && !ue && (q = te === "greedy" ? F[W].join("").trim() === "" : F[W].length === 1 && F[W][0].length === 0), te === "greedy" && ue) {
              for (var J = [], j = 0; j < re; j++) {
                var Z = ie ? L[j] : j;
                J.push(F[W][Z]);
              }
              q = J.join("").trim() === "";
            }
            if (!q) {
              for (var oe = 0; oe < re; oe++) {
                0 < oe && !G && (X += R);
                var _e = ue && ie ? L[oe] : oe;
                X += V(F[W][_e], oe);
              }
              W < F.length - 1 && (!te || 0 < re && !G) && (X += N);
            }
          }
          return X;
        }
        function V(L, F) {
          var te, X;
          return L == null ? "" : L.constructor === Date ? JSON.stringify(L).slice(1, 25) : (X = !1, O && typeof L == "string" && O.test(L) && (L = "'" + L, X = !0), te = L.toString().replace(A, k), (X = X || b === !0 || typeof b == "function" && b(L, F) || Array.isArray(b) && b[F] || ((ue, ie) => {
            for (var z = 0; z < ie.length; z++) if (-1 < ue.indexOf(ie[z])) return !0;
            return !1;
          })(te, c.BAD_DELIMITERS) || -1 < te.indexOf(R) || te.charAt(0) === " " || te.charAt(te.length - 1) === " ") ? D + te + D : te);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = _, c.ParserHandle = w, c.NetworkStreamer = d, c.FileStreamer = p, c.StringStreamer = f, c.ReadableStreamStreamer = v, r.jQuery && ((o = r.jQuery).fn.parse = function(x) {
        var g = x.config || {}, b = [];
        return this.each(function(N) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var D = 0; D < this.files.length; D++) b.push({ file: this.files[D], inputElem: this, instanceConfig: o.extend({}, g) });
        }), C(), this;
        function C() {
          if (b.length === 0) I(x.complete) && x.complete();
          else {
            var N, D, k, $, M = b[0];
            if (I(x.before)) {
              var O = x.before(M.file, M.inputElem);
              if (typeof O == "object") {
                if (O.action === "abort") return N = "AbortError", D = M.file, k = M.inputElem, $ = O.reason, void (I(x.error) && x.error({ name: N }, D, k, $));
                if (O.action === "skip") return void R();
                typeof O.config == "object" && (M.instanceConfig = o.extend(M.instanceConfig, O.config));
              } else if (O === "skip") return void R();
            }
            var A = M.instanceConfig.complete;
            M.instanceConfig.complete = function(H) {
              I(A) && A(H, M.file, M.inputElem), R();
            }, c.parse(M.file, M.instanceConfig);
          }
        }
        function R() {
          b.splice(0, 1), C();
        }
      }), s && (r.onmessage = function(x) {
        x = x.data, c.WORKER_ID === void 0 && x && (c.WORKER_ID = x.workerId), typeof x.input == "string" ? r.postMessage({ workerId: c.WORKER_ID, results: c.parse(x.input, x.config), finished: !0 }) : (r.File && x.input instanceof File || x.input instanceof Object) && (x = c.parse(x.input, x.config)) && r.postMessage({ workerId: c.WORKER_ID, results: x, finished: !0 });
      }), (d.prototype = Object.create(u.prototype)).constructor = d, (p.prototype = Object.create(u.prototype)).constructor = p, (f.prototype = Object.create(f.prototype)).constructor = f, (v.prototype = Object.create(u.prototype)).constructor = v, c;
    });
  }(Zn)), Zn.exports;
}
var t0 = e0();
const Sc = /* @__PURE__ */ fi(t0);
async function n0({ file: e }) {
  return new Promise((t, n) => {
    Sc.parse(e, {
      skipEmptyLines: !0,
      header: !0,
      complete: (r) => {
        t(r);
      },
      error: (r) => {
        n(r);
      }
    });
  });
}
function r0(e, t) {
  return e === "" ? [] : Sc.parse(e, {
    delimiter: t,
    header: !1,
    skipEmptyLines: !0
  }).data;
}
class Pn {
  constructor(t) {
    be(this, "definition");
    this.definition = t;
  }
  async transform(t) {
    const n = await this.parse(t);
    return n ?? t;
  }
  parse(t) {
    throw new Error("Not Implemented");
  }
}
class o0 extends Pn {
  constructor(n) {
    super(n);
    be(this, "key");
    be(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class i0 extends Pn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class s0 extends Pn {
  parse(t) {
    if (typeof t == "string" && dc(t, "-"))
      return t.split("-")[0];
  }
}
const Os = [
  ["Arizona", "AZ"],
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arkansas", "AR"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"]
];
class l0 extends Pn {
  parse(t) {
    const n = Os.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && dc(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return Os[r][1];
    }
  }
}
class a0 extends Pn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function c0(e) {
  const t = {
    phone_number: i0,
    postal_code: s0,
    state_code: l0,
    strip: a0,
    custom: o0
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
async function u0(e, t, n, r) {
  const o = fc(
    e.columns,
    (a, c) => {
      c[a.id] = new f0(), a.transformers && a.transformers.filter((u) => (u.runOn ?? "change") === n).forEach((u) => {
        c[a.id].push(
          c0(u)
        );
      });
    }
  ), i = [];
  e.columns.forEach((a) => {
    const c = a.id, u = o[c];
    u.steps.length !== 0 && t.rows.forEach((d, p) => {
      if (!hc(d))
        return;
      const f = d[c];
      $t(f) || i.push({ rowIndex: p, columnId: c, value: f, pipeline: u });
    });
  });
  const s = await pc(
    i,
    r,
    async (a) => ({
      ...a,
      value: await a.pipeline.transform(a.value)
    })
  ), l = /* @__PURE__ */ new Map();
  return s.forEach(({ rowIndex: a, columnId: c, value: u }) => {
    const d = l.get(a) ?? {};
    d[c] = u, l.set(a, d);
  }), t.rows.map((a, c) => {
    const u = l.get(c);
    return u == null ? a : Object.keys(u).some(
      (p) => a[p] !== u[p]
    ) ? { ...a, ...u } : a;
  });
}
async function d0(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? Ua, i = [];
  for (const s of e) {
    const l = t.find(
      (a) => a.sheetId === s.id
    );
    if (l) {
      const a = await u0(
        s,
        l,
        r,
        o
      );
      i.push({ sheetId: s.id, rows: a });
    }
  }
  return i;
}
class f0 {
  // Series of transformations
  constructor(t = []) {
    be(this, "steps");
    this.steps = t;
  }
  push(t) {
    this.steps.push(t);
  }
  async transform(t) {
    let n = t;
    for (const r of this.steps)
      n = await r.transform(n);
    return n;
  }
}
let Ur = 0;
function Cc() {
  return Ur = (Ur + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${Ur}`;
}
async function h0(e, t) {
  const n = kn(e);
  try {
    return t.enabled ? await p0(e, t) : n;
  } catch {
    return n;
  }
}
function kn(e) {
  return {
    sheetDefinitions: e,
    currentSheetId: e[0].id,
    mode: "upload",
    validationErrors: [],
    processingInProgress: !1,
    sheetData: e.map((t) => ({
      sheetId: t.id,
      rows: []
    })),
    importProgress: 0
  };
}
async function p0(e, t) {
  const n = await qv(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = kn(e);
  return _c(r, t.customKey), r;
}
class Ec {
  constructor(t, n) {
    be(this, "initialState");
    be(this, "importerDefinition");
    be(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? kn(t.sheets), this.buildSteps = [];
  }
  async getState(t = "change") {
    let n = this.initialState;
    this.buildSteps.forEach((s) => {
      n = Rc(n, s);
    });
    const r = this.importerDefinition.maxConcurrentAsyncOperations, o = await d0(
      this.importerDefinition.sheets,
      n.sheetData,
      { phase: t, concurrency: r }
    ).catch(() => n.sheetData), i = await xv(
      this.importerDefinition.sheets,
      o,
      { phase: t, concurrency: r }
    ).catch(() => n.validationErrors);
    return { ...n, sheetData: o, validationErrors: i };
  }
  async uploadFile(t) {
    const n = await Jv(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await n0({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : kv(
      this.importerDefinition.sheets,
      o
    );
    this.buildSteps.push({
      type: "FILE_PARSED",
      payload: { parsed: r, rowFile: t }
    }), this.buildSteps.push({
      type: "COLUMN_MAPPING_CHANGED",
      payload: {
        mappings: i
      }
    });
  }
  setEnterDataManually(t) {
    this.buildSteps.push({
      type: "ENTER_DATA_MANUALLY",
      payload: {
        amountOfEmptyRowsToAdd: t ?? Bm
      }
    });
  }
  setMappings(t) {
    this.buildSteps.push({
      type: "COLUMN_MAPPING_CHANGED",
      payload: { mappings: t }
    });
  }
  async confirmMappings() {
    const t = await this.getState(), n = Av(
      this.importerDefinition.sheets,
      t.columnMappings ?? [],
      t.parsedFile
    ), r = this.importerDefinition.onDataColumnsMapped != null ? await this.importerDefinition.onDataColumnsMapped(n) : n;
    this.buildSteps.push({
      type: "DATA_MAPPED",
      payload: { mappedData: r }
    });
  }
  changeCell(t) {
    this.buildSteps.push({ type: "CELL_CHANGED", payload: t });
  }
  removeRows(t) {
    this.buildSteps.push({ type: "REMOVE_ROWS", payload: t });
  }
  restoreSheetData(t) {
    this.buildSteps.push({
      type: "RESTORE_SHEET_DATA",
      payload: { sheetData: t }
    });
  }
  addEmptyRow() {
    this.buildSteps.push({ type: "ADD_EMPTY_ROW" });
  }
}
class iy extends Ec {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const ar = class ar extends Ec {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => ar.actionTypesThatRequireProcessing.has(o.type)
    ), r = Cc();
    if (n && t({ type: "PROCESSING_STARTED", payload: { runId: r } }), this.buildSteps.forEach((o) => {
      t(o);
    }), n) {
      const o = await this.getState();
      t({
        type: "PROCESSING_COMPLETED",
        payload: {
          sheetData: o.sheetData,
          errors: o.validationErrors,
          runId: r
        }
      });
    }
  }
};
be(ar, "actionTypesThatRequireProcessing", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS",
  "RESTORE_SHEET_DATA",
  "ADD_EMPTY_ROW"
]));
let lr = ar;
function m0(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const Rc = (e, t) => {
  switch (t.type) {
    case "ENTER_DATA_MANUALLY": {
      const n = e.sheetDefinitions.map((r) => ({
        sheetId: r.id,
        rows: Array.from(
          { length: t.payload.amountOfEmptyRowsToAdd },
          () => ({})
        )
      }));
      return { ...e, mode: "preview", sheetData: n };
    }
    case "FILE_PARSED":
      return {
        ...e,
        parsedFile: t.payload.parsed,
        rowFile: t.payload.rowFile,
        mode: "mapping"
      };
    case "UPLOAD":
      return { ...e, mode: "upload" };
    case "COLUMN_MAPPING_CHANGED":
      return {
        ...e,
        columnMappings: t.payload.mappings
      };
    case "DATA_MAPPED":
      return {
        ...e,
        sheetData: t.payload.mappedData,
        mode: "preview"
      };
    case "CELL_CHANGED": {
      const r = e.sheetData.map((o) => {
        if (o.sheetId === t.payload.sheetId) {
          const i = [...o.rows];
          return i[t.payload.rowIndex] = m0(
            t.payload.value,
            t.payload,
            e
          ), { ...o, rows: i };
        } else
          return o;
      });
      return {
        ...e,
        sheetData: r
      };
    }
    case "REMOVE_ROWS": {
      const n = e.sheetData.map((r) => r.sheetId === t.payload.sheetId ? {
        ...r,
        rows: r.rows.filter(
          (o) => !t.payload.rows.includes(o)
        )
      } : r);
      return {
        ...e,
        sheetData: n
      };
    }
    case "ADD_EMPTY_ROW": {
      const n = e.sheetData.map((r) => r.sheetId !== e.currentSheetId ? r : {
        ...r,
        rows: [...r.rows, {}]
      });
      return { ...e, sheetData: n };
    }
    case "RESTORE_SHEET_DATA":
      return { ...e, sheetData: t.payload.sheetData };
    case "SHEET_CHANGED":
      return { ...e, currentSheetId: t.payload.sheetId };
    case "SUBMIT":
      return { ...e, mode: "submit" };
    case "PROGRESS":
      return { ...e, importProgress: t.payload.progress };
    case "COMPLETED":
      return {
        ...e,
        mode: "completed",
        importStatistics: t.payload.importStatistics
      };
    case "FAILED":
      return { ...e, mode: "failed" };
    case "PREVIEW":
      return { ...e, mode: "preview" };
    case "MAPPING":
      return { ...e, mode: "mapping" };
    case "RESET":
      return kn(e.sheetDefinitions);
    case "SET_STATE":
      return t.payload.state;
    case "PROCESSING_STARTED":
      return {
        ...e,
        processingInProgress: !0,
        processingRunId: t.payload.runId
      };
    case "PROCESSING_COMPLETED":
      return e.processingRunId !== t.payload.runId ? e : {
        ...e,
        sheetData: t.payload.sheetData,
        validationErrors: t.payload.errors,
        processingInProgress: !1,
        processingRunId: void 0
      };
    default:
      return e;
  }
}, g0 = (e, t, n) => {
  const [r, o] = tt(
    Rc,
    n ?? kn(e)
  );
  return se(() => {
    const i = async () => {
      const s = await h0(e, t);
      o({ type: "SET_STATE", payload: { state: s } });
    };
    n == null && i();
  }, []), se(() => {
    t.enabled && _c(r, t.customKey);
  }, [r, t]), [r, o];
}, $c = ge({}), Tc = ge(
  {}
);
function v0({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, s] = g0(
    e,
    t,
    n
  ), l = U(i);
  return se(() => {
    l.current !== i && (r == null || r(l.current, i), l.current = i);
  }, [i, r]), /* @__PURE__ */ h($c.Provider, { value: i, children: /* @__PURE__ */ h(Tc.Provider, { value: s, children: o }) });
}
function rt() {
  return he($c);
}
function w0() {
  return he(Tc);
}
function y0({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = rt(), { sheets: i } = ze(), { t: s } = ye(), [l, a] = Y(null), c = r ?? [], u = o, d = u.data, p = u.meta.fields, f = Bv(
    i,
    c
  ), v = Uv(
    i,
    c
  ), w = ne(() => l ? Lv(d, l) : [], [l, d]), [m, _] = Y(!1);
  async function y() {
    try {
      _(!0), await t();
    } finally {
      _(!1);
    }
  }
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex-none hc:text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ h("div", { className: "hc:min-h-0 hc:flex-auto", children: /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:justify-between hc:space-x-5", children: [
      /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-2 hc:flex-col", children: [
        /* @__PURE__ */ h("div", { className: "hc:my-5 hc:flex hc:text-sm hc:font-light hc:uppercase", children: [
          /* @__PURE__ */ h("div", { className: "hc:flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ h("div", { className: "hc:flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ h("div", { className: "hc:flex-1 hc:overflow-y-auto", children: p.map((S, E) => {
          const T = c.find(
            (P) => P.csvColumnName === S
          ) ?? null;
          return /* @__PURE__ */ h(
            Gv,
            {
              csvHeader: S,
              currentMapping: T,
              setMapping: (P) => {
                const I = Nv(
                  c,
                  S,
                  P
                );
                e(I);
              },
              mappingSelectionOptions: f,
              onMouseEnter: () => {
                a(S);
              }
            },
            E
          );
        }) })
      ] }),
      /* @__PURE__ */ h("div", { className: "hc:bg-hello-csv-muted hc:hidden hc:flex-1 hc:overflow-y-auto hc:sm:block", children: /* @__PURE__ */ h(
        Wv,
        {
          examples: w,
          csvHeader: l ?? ""
        }
      ) })
    ] }) }),
    !v && /* @__PURE__ */ h("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ h(cc, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ h("div", { className: "hc:mt-auto hc:flex-none", children: /* @__PURE__ */ h("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ h(
        Ve,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: m,
          children: s("mapper.back")
        }
      ),
      /* @__PURE__ */ h(
        Ve,
        {
          onClick: y,
          disabled: !v || m,
          children: /* @__PURE__ */ h("div", { className: "hc:flex hc:items-center", children: [
            m && /* @__PURE__ */ h(pe, { children: [
              /* @__PURE__ */ h(uc, { color: "light" }),
              /* @__PURE__ */ h("div", { className: "hc:mr-2" })
            ] }),
            s("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var b0 = { NODE_ENV: "production" };
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: yt(n, r[e])
    }));
  };
}
function Or(e) {
  return e instanceof Function;
}
function _0(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function x0(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function le(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const l = e(i);
    if (!(l.length !== r.length || l.some((u, d) => r[d] !== u)))
      return o;
    r = l;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, p = d / 16, f = (v, w) => {
        for (v = String(v); v.length < w; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${f(d, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function ae(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: b0.NODE_ENV === "development",
    onChange: r
  };
}
function S0(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: le(() => [e, n, t, i], (s, l, a, c) => ({
      table: s,
      column: l,
      row: a,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), ae(e.options, "debugCells"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function C0(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let c = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
  if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (p) => {
    let f = p;
    for (const w of a.split(".")) {
      var v;
      f = (v = f) == null ? void 0 : v[w];
    }
    return f;
  } : u = (p) => p[l.accessorKey]), !c)
    throw new Error();
  let d = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: le(() => [!0], () => {
      var p;
      return [d, ...(p = d.columns) == null ? void 0 : p.flatMap((f) => f.getFlatColumns())];
    }, ae(e.options, "debugColumns")),
    getLeafColumns: le(() => [e._getOrderColumnsFn()], (p) => {
      var f;
      if ((f = d.columns) != null && f.length) {
        let v = d.columns.flatMap((w) => w.getLeafColumns());
        return p(v);
      }
      return [d];
    }, ae(e.options, "debugColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(d, e);
  return d;
}
const Te = "debugHeaders";
function Is(e, t, n) {
  var r;
  let i = {
    id: (r = n.id) != null ? r : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], l = (a) => {
        a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), s.push(a);
      };
      return l(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const E0 = {
  createTable: (e) => {
    e.getHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const l = (i = r == null ? void 0 : r.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((d) => n.find((p) => p.id === d)).filter(Boolean)) != null ? s : [], c = n.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return jn(t, [...l, ...c, ...a], e);
    }, ae(e.options, Te)), e.getCenterHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), jn(t, n, e, "center")), ae(e.options, Te)), e.getLeftHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return jn(t, i, e, "left");
    }, ae(e.options, Te)), e.getRightHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return jn(t, i, e, "right");
    }, ae(e.options, Te)), e.getFooterGroups = le(() => [e.getHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Te)), e.getLeftFooterGroups = le(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Te)), e.getCenterFooterGroups = le(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Te)), e.getRightFooterGroups = le(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), ae(e.options, Te)), e.getFlatHeaders = le(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Te)), e.getLeftFlatHeaders = le(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Te)), e.getCenterFlatHeaders = le(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Te)), e.getRightFlatHeaders = le(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), ae(e.options, Te)), e.getCenterLeafHeaders = le(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Te)), e.getLeftLeafHeaders = le(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Te)), e.getRightLeafHeaders = le(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), ae(e.options, Te)), e.getLeafHeaders = le(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, l, a, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [], ...(a = (c = r[0]) == null ? void 0 : c.headers) != null ? a : []].map((u) => u.getLeafHeaders()).flat();
    }, ae(e.options, Te));
  }
};
function jn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(p, f) {
    f === void 0 && (f = 1), s = Math.max(s, f), p.filter((v) => v.getIsVisible()).forEach((v) => {
      var w;
      (w = v.columns) != null && w.length && l(v.columns, f + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const c = (p, f) => {
    const v = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, w = [];
    p.forEach((m) => {
      const _ = [...w].reverse()[0], y = m.column.depth === v.depth;
      let S, E = !1;
      if (y && m.column.parent ? S = m.column.parent : (S = m.column, E = !0), _ && (_ == null ? void 0 : _.column) === S)
        _.subHeaders.push(m);
      else {
        const T = Is(n, S, {
          id: [r, f, S.id, m == null ? void 0 : m.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${w.filter((P) => P.column === S).length}` : void 0,
          depth: f,
          index: w.length
        });
        T.subHeaders.push(m), w.push(T);
      }
      v.headers.push(m), m.headerGroup = v;
    }), a.push(v), f > 0 && c(w, f - 1);
  }, u = t.map((p, f) => Is(n, p, {
    depth: s,
    index: f
  }));
  c(u, s - 1), a.reverse();
  const d = (p) => p.filter((v) => v.column.getIsVisible()).map((v) => {
    let w = 0, m = 0, _ = [0];
    v.subHeaders && v.subHeaders.length ? (_ = [], d(v.subHeaders).forEach((S) => {
      let {
        colSpan: E,
        rowSpan: T
      } = S;
      w += E, _.push(T);
    })) : w = 1;
    const y = Math.min(..._);
    return m = m + y, v.colSpan = w, v.rowSpan = m, {
      colSpan: w,
      rowSpan: m
    };
  });
  return d((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const R0 = (e, t, n, r, o, i, s) => {
  let l = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (a) => {
      if (l._valuesCache.hasOwnProperty(a))
        return l._valuesCache[a];
      const c = e.getColumn(a);
      if (c != null && c.accessorFn)
        return l._valuesCache[a] = c.accessorFn(l.original, r), l._valuesCache[a];
    },
    getUniqueValues: (a) => {
      if (l._uniqueValuesCache.hasOwnProperty(a))
        return l._uniqueValuesCache[a];
      const c = e.getColumn(a);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = c.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [l.getValue(a)], l._uniqueValuesCache[a]);
    },
    renderValue: (a) => {
      var c;
      return (c = l.getValue(a)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => x0(l.subRows, (a) => a.subRows),
    getParentRow: () => l.parentId ? e.getRow(l.parentId, !0) : void 0,
    getParentRows: () => {
      let a = [], c = l;
      for (; ; ) {
        const u = c.getParentRow();
        if (!u) break;
        a.push(u), c = u;
      }
      return a.reverse();
    },
    getAllCells: le(() => [e.getAllLeafColumns()], (a) => a.map((c) => S0(e, l, c, c.id)), ae(e.options, "debugRows")),
    _getAllCellsByColumnId: le(() => [l.getAllCells()], (a) => a.reduce((c, u) => (c[u.column.id] = u, c), {}), ae(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(l, e);
  }
  return l;
}, $0 = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Mc = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Mc.autoRemove = (e) => Ue(e);
const Oc = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Oc.autoRemove = (e) => Ue(e);
const Ic = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Ic.autoRemove = (e) => Ue(e);
const Dc = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Dc.autoRemove = (e) => Ue(e);
const Ac = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Ac.autoRemove = (e) => Ue(e) || !(e != null && e.length);
const Fc = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Fc.autoRemove = (e) => Ue(e) || !(e != null && e.length);
const Pc = (e, t, n) => e.getValue(t) === n;
Pc.autoRemove = (e) => Ue(e);
const kc = (e, t, n) => e.getValue(t) == n;
kc.autoRemove = (e) => Ue(e);
const _i = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
_i.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const l = i;
    i = s, s = l;
  }
  return [i, s];
};
_i.autoRemove = (e) => Ue(e) || Ue(e[0]) && Ue(e[1]);
const st = {
  includesString: Mc,
  includesStringSensitive: Oc,
  equalsString: Ic,
  arrIncludes: Dc,
  arrIncludesAll: Ac,
  arrIncludesSome: Fc,
  equals: Pc,
  weakEquals: kc,
  inNumberRange: _i
};
function Ue(e) {
  return e == null || e === "";
}
const T0 = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: He("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? st.includesString : typeof r == "number" ? st.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? st.equals : Array.isArray(r) ? st.arrIncludes : st.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return Or(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : st[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = yt(n, i ? i.value : void 0);
        if (Ds(o, s, e)) {
          var l;
          return (l = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? l : [];
        }
        const a = {
          id: e.id,
          value: s
        };
        if (i) {
          var c;
          return (c = r == null ? void 0 : r.map((u) => u.id === e.id ? a : u)) != null ? c : [];
        }
        return r != null && r.length ? [...r, a] : [a];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = yt(t, o)) == null ? void 0 : i.filter((s) => {
          const l = n.find((a) => a.id === s.id);
          if (l) {
            const a = l.getFilterFn();
            if (Ds(a, s.value, l))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Ds(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const M0 = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), O0 = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, I0 = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, D0 = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, A0 = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, F0 = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!_0(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, P0 = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), k0 = (e, t) => new Set(t.map((n) => n.getValue(e))).size, N0 = (e, t) => t.length, Wr = {
  sum: M0,
  min: O0,
  max: I0,
  extent: D0,
  mean: A0,
  median: F0,
  unique: P0,
  uniqueCount: k0,
  count: N0
}, L0 = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: He("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return Wr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Wr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Or(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Wr[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function V0(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const H0 = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: He("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = le((n) => [yn(t, n)], (n) => n.findIndex((r) => r.id === e.id), ae(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = yn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = yn(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = le(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let i = [];
      if (!(t != null && t.length))
        i = o;
      else {
        const s = [...t], l = [...o];
        for (; l.length && s.length; ) {
          const a = s.shift(), c = l.findIndex((u) => u.id === a);
          c > -1 && i.push(l.splice(c, 1)[0]);
        }
        i = [...i, ...l];
      }
      return V0(i, n, r);
    }, ae(e.options, "debugTable"));
  }
}, Gr = () => ({
  left: [],
  right: []
}), z0 = {
  getInitialState: (e) => ({
    columnPinning: Gr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: He("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var l, a;
          return {
            left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((d) => !(r != null && r.includes(d))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((d) => !(r != null && r.includes(d))), ...r]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((d) => !(r != null && r.includes(d)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((d) => !(r != null && r.includes(d))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((d) => !(r != null && r.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((l) => l.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, i = n.some((l) => r == null ? void 0 : r.includes(l)), s = n.some((l) => o == null ? void 0 : o.includes(l));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, ae(t.options, "debugRows")), e.getLeftVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), ae(t.options, "debugRows")), e.getRightVisibleCells = le(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), ae(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? Gr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Gr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ae(e.options, "debugColumns")), e.getRightLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), ae(e.options, "debugColumns")), e.getCenterLeafColumns = le(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, ae(e.options, "debugColumns"));
  }
}, Un = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, qr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), B0 = {
  getDefaultColumnDef: () => Un,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: qr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: He("columnSizing", e),
    onColumnSizingInfoChange: He("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Un.minSize, (r = i ?? e.columnDef.size) != null ? r : Un.size), (o = e.columnDef.maxSize) != null ? o : Un.maxSize);
    }, e.getStart = le((n) => [n, yn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.getAfter = le((n) => [n, yn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          n += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), Yr(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((_) => [_.column.id, _.column.getSize()]) : [[r.id, r.getSize()]], a = Yr(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (_, y) => {
          typeof y == "number" && (t.setColumnSizingInfo((S) => {
            var E, T;
            const P = t.options.columnResizeDirection === "rtl" ? -1 : 1, I = (y - ((E = S == null ? void 0 : S.startOffset) != null ? E : 0)) * P, x = Math.max(I / ((T = S == null ? void 0 : S.startSize) != null ? T : 0), -0.999999);
            return S.columnSizingStart.forEach((g) => {
              let [b, C] = g;
              c[b] = Math.round(Math.max(C + C * x, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: I,
              deltaPercentage: x
            };
          }), (t.options.columnResizeMode === "onChange" || _ === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, d = (_) => u("move", _), p = (_) => {
          u("end", _), t.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = n || typeof document < "u" ? document : null, v = {
          moveHandler: (_) => d(_.clientX),
          upHandler: (_) => {
            f == null || f.removeEventListener("mousemove", v.moveHandler), f == null || f.removeEventListener("mouseup", v.upHandler), p(_.clientX);
          }
        }, w = {
          moveHandler: (_) => (_.cancelable && (_.preventDefault(), _.stopPropagation()), d(_.touches[0].clientX), !1),
          upHandler: (_) => {
            var y;
            f == null || f.removeEventListener("touchmove", w.moveHandler), f == null || f.removeEventListener("touchend", w.upHandler), _.cancelable && (_.preventDefault(), _.stopPropagation()), p((y = _.touches[0]) == null ? void 0 : y.clientX);
          }
        }, m = j0() ? {
          passive: !1
        } : !1;
        Yr(i) ? (f == null || f.addEventListener("touchmove", w.moveHandler, m), f == null || f.addEventListener("touchend", w.upHandler, m)) : (f == null || f.addEventListener("mousemove", v.moveHandler, m), f == null || f.addEventListener("mouseup", v.upHandler, m)), t.setColumnSizingInfo((_) => ({
          ..._,
          startOffset: a,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: l,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? qr() : (n = e.initialState.columnSizingInfo) != null ? n : qr());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let Wn = null;
function j0() {
  if (typeof Wn == "boolean") return Wn;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return Wn = e, Wn;
}
function Yr(e) {
  return e.type === "touchstart";
}
const U0 = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: He("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = le(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), ae(t.options, "debugRows")), e.getVisibleCells = le(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], ae(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => le(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), ae(e.options, "debugColumns"));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function yn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const W0 = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, G0 = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: He("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => st.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return Or(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : st[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, q0 = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: He("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
          s[l] = !0;
        }) : s = r, n = (o = n) != null ? o : !i, !i && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: l,
            ...a
          } = s;
          return a;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, Oo = 0, Io = 10, Kr = () => ({
  pageIndex: Oo,
  pageSize: Io
}), Y0 = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Kr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: He("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => yt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Kr() : (o = e.initialState.pagination) != null ? o : Kr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = yt(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Oo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Oo);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Io : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Io);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, yt(r, o.pageSize)), s = o.pageSize * o.pageIndex, l = Math.floor(s / i);
        return {
          ...o,
          pageIndex: l,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = yt(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = le(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, ae(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Zr = () => ({
  top: [],
  bottom: []
}), K0 = {
  getInitialState: (e) => ({
    rowPinning: Zr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: He("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const i = r ? e.getLeafRows().map((a) => {
        let {
          id: c
        } = a;
        return c;
      }) : [], s = o ? e.getParentRows().map((a) => {
        let {
          id: c
        } = a;
        return c;
      }) : [], l = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((a) => {
        var c, u;
        if (n === "bottom") {
          var d, p;
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((w) => !(l != null && l.has(w))),
            bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)]
          };
        }
        if (n === "top") {
          var f, v;
          return {
            top: [...((f = a == null ? void 0 : a.top) != null ? f : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)],
            bottom: ((v = a == null ? void 0 : a.bottom) != null ? v : []).filter((w) => !(l != null && l.has(w)))
          };
        }
        return {
          top: ((c = a == null ? void 0 : a.top) != null ? c : []).filter((w) => !(l != null && l.has(w))),
          bottom: ((u = a == null ? void 0 : a.bottom) != null ? u : []).filter((w) => !(l != null && l.has(w)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, i = n.some((l) => r == null ? void 0 : r.includes(l)), s = n.some((l) => o == null ? void 0 : o.includes(l));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: l
        } = s;
        return l;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? Zr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Zr());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const l = e.getRow(s, !0);
          return l.getIsAllParentsExpanded() ? l : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((l) => l.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), ae(e.options, "debugRows")), e.getBottomRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), ae(e.options, "debugRows")), e.getCenterRows = le(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, ae(e.options, "debugRows"));
  }
}, Z0 = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: He("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        Do(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = le(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Xr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getFilteredSelectedRowModel = le(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Xr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getGroupedSelectedRowModel = le(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Xr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((i) => {
        var s;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return i;
        const l = {
          ...i
        };
        return Do(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return xi(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ao(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ao(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, Do = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => Do(e, l.id, n, r, o));
};
function Xr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var c;
      const u = xi(a, n);
      if (u && (r.push(a), o[a.id] = a), (c = a.subRows) != null && c.length && (a = {
        ...a,
        subRows: i(a.subRows)
      }), u)
        return a;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function xi(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Ao(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (xi(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = Ao(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Fo = /([0-9]+)/gm, X0 = (e, t, n) => Nc(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), J0 = (e, t, n) => Nc(St(e.getValue(n)), St(t.getValue(n))), Q0 = (e, t, n) => Si(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), ew = (e, t, n) => Si(St(e.getValue(n)), St(t.getValue(n))), tw = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, nw = (e, t, n) => Si(e.getValue(n), t.getValue(n));
function Si(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function St(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Nc(e, t) {
  const n = e.split(Fo).filter(Boolean), r = t.split(Fo).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), s = parseInt(o, 10), l = parseInt(i, 10), a = [s, l].sort();
    if (isNaN(a[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(a[1]))
      return isNaN(s) ? -1 : 1;
    if (s > l)
      return 1;
    if (l > s)
      return -1;
  }
  return n.length - r.length;
}
const dn = {
  alphanumeric: X0,
  alphanumericCaseSensitive: J0,
  text: Q0,
  textCaseSensitive: ew,
  datetime: tw,
  basic: nw
}, rw = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: He("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return dn.datetime;
        if (typeof i == "string" && (r = !0, i.split(Fo).length > 1))
          return dn.alphanumeric;
      }
      return r ? dn.text : dn.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Or(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : dn[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((f) => f.id === e.id), a = s == null ? void 0 : s.findIndex((f) => f.id === e.id);
        let c = [], u, d = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var p;
          c = [...s, {
            id: e.id,
            desc: d
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = s.map((f) => f.id === e.id ? {
          ...f,
          desc: d
        } : f) : u === "remove" ? c = s.filter((f) => f.id !== e.id) : c = [{
          id: e.id,
          desc: d
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, ow = [
  E0,
  U0,
  H0,
  z0,
  $0,
  T0,
  W0,
  //depends on ColumnFaceting
  G0,
  //depends on ColumnFiltering
  rw,
  L0,
  //depends on RowSorting
  q0,
  Y0,
  K0,
  Z0,
  B0
];
function iw(e) {
  var t, n;
  const r = [...ow, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((p, f) => Object.assign(p, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), s = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : {
    ...i,
    ...p
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((p) => {
    var f;
    a = (f = p.getInitialState == null ? void 0 : p.getInitialState(a)) != null ? f : a;
  });
  const c = [];
  let u = !1;
  const d = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: a,
    _queue: (p) => {
      c.push(p), u || (u = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        u = !1;
      }).catch((f) => setTimeout(() => {
        throw f;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const f = yt(p, o.options);
      o.options = s(f);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, f, v) => {
      var w;
      return (w = o.options.getRowId == null ? void 0 : o.options.getRowId(p, f, v)) != null ? w : `${v ? [v.id, f].join(".") : f}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, f) => {
      let v = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!v && (v = o.getCoreRowModel().rowsById[p], !v))
        throw new Error();
      return v;
    },
    _getDefaultColumnDef: le(() => [o.options.defaultColumn], (p) => {
      var f;
      return p = (f = p) != null ? f : {}, {
        header: (v) => {
          const w = v.header.column.columnDef;
          return w.accessorKey ? w.accessorKey : w.accessorFn ? w.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var w, m;
          return (w = (m = v.renderValue()) == null || m.toString == null ? void 0 : m.toString()) != null ? w : null;
        },
        ...o._features.reduce((v, w) => Object.assign(v, w.getDefaultColumnDef == null ? void 0 : w.getDefaultColumnDef()), {}),
        ...p
      };
    }, ae(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: le(() => [o._getColumnDefs()], (p) => {
      const f = function(v, w, m) {
        return m === void 0 && (m = 0), v.map((_) => {
          const y = C0(o, _, m, w), S = _;
          return y.columns = S.columns ? f(S.columns, y, m + 1) : [], y;
        });
      };
      return f(p);
    }, ae(e, "debugColumns")),
    getAllFlatColumns: le(() => [o.getAllColumns()], (p) => p.flatMap((f) => f.getFlatColumns()), ae(e, "debugColumns")),
    _getAllFlatColumnsById: le(() => [o.getAllFlatColumns()], (p) => p.reduce((f, v) => (f[v.id] = v, f), {}), ae(e, "debugColumns")),
    getAllLeafColumns: le(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, f) => {
      let v = p.flatMap((w) => w.getLeafColumns());
      return f(v);
    }, ae(e, "debugColumns")),
    getColumn: (p) => o._getAllFlatColumnsById()[p]
  };
  Object.assign(o, d);
  for (let p = 0; p < o._features.length; p++) {
    const f = o._features[p];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function sw() {
  return (e) => le(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let c = 0; c < o.length; c++) {
        const u = R0(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
          var a;
          u.originalSubRows = e.options.getSubRows(o[c], c), (a = u.originalSubRows) != null && a.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return l;
    };
    return n.rows = r(t), n;
  }, ae(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function lw() {
  return (e) => le(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var c;
      return (c = e.getColumn(a.id)) == null ? void 0 : c.getCanSort();
    }), s = {};
    i.forEach((a) => {
      const c = e.getColumn(a.id);
      c && (s[a.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const l = (a) => {
      const c = a.map((u) => ({
        ...u
      }));
      return c.sort((u, d) => {
        for (let f = 0; f < i.length; f += 1) {
          var p;
          const v = i[f], w = s[v.id], m = w.sortUndefined, _ = (p = v == null ? void 0 : v.desc) != null ? p : !1;
          let y = 0;
          if (m) {
            const S = u.getValue(v.id), E = d.getValue(v.id), T = S === void 0, P = E === void 0;
            if (T || P) {
              if (m === "first") return T ? -1 : 1;
              if (m === "last") return T ? 1 : -1;
              y = T && P ? 0 : T ? m : -m;
            }
          }
          if (y === 0 && (y = w.sortingFn(u, d, v.id)), y !== 0)
            return _ && (y *= -1), w.invertSorting && (y *= -1), y;
        }
        return u.index - d.index;
      }), c.forEach((u) => {
        var d;
        o.push(u), (d = u.subRows) != null && d.length && (u.subRows = l(u.subRows));
      }), c;
    };
    return {
      rows: l(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, ae(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function As(e, t) {
  return e ? aw(e) ? /* @__PURE__ */ B(e, t) : e : null;
}
function aw(e) {
  return cw(e) || typeof e == "function" || uw(e);
}
function cw(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function uw(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function dw(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = Y(() => ({
    current: iw(t)
  })), [r, o] = Y(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
const fw = 500, Fs = 10;
function hw(e, { disabled: t = !1 } = {}) {
  const n = U(null), r = U(0), o = U(0), i = U(!1), s = ee(
    (c) => {
      if (t) return;
      const u = c.touches[0];
      r.current = u.clientX, o.current = u.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, fw);
    },
    [e, t]
  ), l = ee(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ee(
    (c) => {
      const u = c.touches[0], d = Math.abs(u.clientX - r.current), p = Math.abs(u.clientY - o.current);
      (d > Fs || p > Fs) && (i.current = !0, l());
    },
    [l]
  );
  return {
    onTouchStart: s,
    onTouchMove: a,
    onTouchEnd: l,
    onTouchCancel: l,
    onMouseLeave: l
  };
}
const Lc = ge(null);
function pw({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ h(Lc.Provider, { value: e, children: t });
}
function Vc() {
  const e = he(Lc);
  if (!e)
    throw new Error(
      "useGridSelectionContext must be used within a GridSelectionProvider"
    );
  return e;
}
function Ps(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Be(e, t) {
  return {
    row: Ps(e.row, 0, Math.max(0, t.rowCount - 1)),
    col: Ps(e.col, 0, Math.max(0, t.colCount - 1))
  };
}
const Hc = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 }
};
function Xn(e, t, n) {
  const r = Hc[t];
  return Be(
    { row: e.row + r.row, col: e.col + r.col },
    n
  );
}
function mw(e, t) {
  const n = e ?? t;
  return {
    top: Math.min(n.row, t.row),
    left: Math.min(n.col, t.col),
    bottom: Math.max(n.row, t.row),
    right: Math.max(n.col, t.col)
  };
}
function gw(e, t) {
  return e.row >= t.top && e.row <= t.bottom && e.col >= t.left && e.col <= t.right;
}
function Po(e, t) {
  return e.row >= 0 && e.row < t.rowCount && e.col >= 0 && e.col < t.colCount;
}
function vw(e, t, n, r) {
  const o = Hc[t], i = (u, d) => Po({ row: u, col: d }, n), s = { row: e.row + o.row, col: e.col + o.col };
  if (!i(s.row, s.col))
    return e;
  const l = r(s.row, s.col);
  let a = { ...e }, c = { ...s };
  for (; i(c.row, c.col); ) {
    const u = r(c.row, c.col);
    if (l) {
      if (!u)
        return c;
    } else if (u)
      return a;
    a = { ...c }, c = {
      row: c.row + o.row,
      col: c.col + o.col
    };
  }
  return a;
}
function ww(e, t) {
  return Math.max(1, Math.floor(e / t));
}
function yw(e) {
  return e.type === "boolean" || e.type === "enum" || e.type === "reference";
}
function ks(e) {
  return yw(e) || Rr(e);
}
function bw({
  coord: e,
  gridDims: t,
  widthPx: n,
  ariaColIndex: r,
  tdClassName: o,
  rowId: i,
  sheetDefinition: s,
  columnDefinition: l,
  value: a,
  onUpdated: c,
  allData: u,
  clearRowsSelection: d,
  errorsText: p,
  enumLabelDict: f
}) {
  const { t: v } = ye(), { availableActions: w } = ze(), m = Vc(), _ = m.isEditing(e), y = m.isActive(e), S = m.isSelected(e), E = U(null), T = U(null), P = U(!1), I = yi(l) || !w.includes("editRows");
  function x(z) {
    I || m.startEdit(e, z);
  }
  function g() {
    m.stopEditing();
  }
  se(() => {
    _ && (P.current = !1, d(), E.current && E.current.focus());
  }, [_]);
  const { displayValue: b, valueEmpty: C } = gc(
    s,
    l,
    a,
    f
  ), R = hw(
    () => {
      I || x("preserve");
    },
    { disabled: I }
  ), N = p ? "hc:bg-hello-csv-danger-extra-light" : I ? "hc:bg-hello-csv-muted" : "", D = y ? "hc:z-1" : "";
  function k(z) {
    P.current = !0, c(bi(l, String(z ?? ""))), g();
  }
  function $(z) {
    var W;
    if (_) {
      if (z.key === "Escape") {
        P.current = !0, g(), z.preventDefault(), z.stopPropagation();
        return;
      }
      if (!ks(l) && (z.key === "Enter" || z.key === "Tab")) {
        z.preventDefault(), z.stopPropagation(), k(((W = E.current) == null ? void 0 : W.value) ?? "");
        const re = z.key === "Tab" ? z.shiftKey ? "left" : "right" : z.shiftKey ? "up" : "down";
        m.setActive(Xn(e, re, t));
      }
    }
  }
  function M(z) {
    _ || z.button !== 0 || (z.shiftKey ? m.extendTo(e) : m.beginDrag(e), z.preventDefault());
  }
  function O() {
    _ || m.dragTo(e);
  }
  function A(z) {
    var re;
    if (!_ || !ks(l)) return;
    const W = z.relatedTarget;
    W && ((re = T.current) != null && re.contains(W)) || W instanceof Element && W.closest(`[${Ga}]`) || g();
  }
  function H(z) {
    _ || (z.detail > 1 ? x("preserve") : z.shiftKey ? m.extendTo(e) : m.setActive(e));
  }
  function V(z, { close: W = !0 } = {}) {
    P.current = !0, c(z), W && g();
  }
  const L = (() => {
    const z = m.state.editInitialValue;
    return z && typeof z == "object" && "char" in z ? z.char : void 0;
  })(), F = U(a);
  _ || (F.current = a);
  const te = L ?? F.current, X = {
    ref: T,
    role: "gridcell",
    "aria-colindex": r,
    "aria-selected": S,
    "data-cell-row": e.row,
    "data-cell-col": e.col,
    tabIndex: y ? 0 : -1,
    onKeyDown: $,
    onClick: H,
    onMouseDown: M,
    onMouseEnter: O,
    // focusout (bubbles) rather than blur (doesn't) so we catch the combobox
    // input losing focus to somewhere outside the cell.
    onFocusOut: A,
    className: `hc:relative hc:flex hc:h-full hc:w-full hc:items-stretch hc:outline-none ${D}`
  }, ue = y ? /* @__PURE__ */ h("div", { className: "hc:ring-hello-csv-primary hc:pointer-events-none hc:absolute hc:inset-0 hc:ring-2 hc:ring-inset" }) : S ? /* @__PURE__ */ h("div", { className: "hc:bg-hello-csv-primary/20 hc:pointer-events-none hc:absolute hc:inset-0" }) : null;
  function ie() {
    if (l.type === "boolean") {
      const z = [!0, !1].map((W) => {
        var re, q;
        return {
          label: W ? ((re = l.typeArguments) == null ? void 0 : re.trueLabel) ?? Ka : ((q = l.typeArguments) == null ? void 0 : q.falseLabel) ?? Za,
          value: W
        };
      });
      return /* @__PURE__ */ h(
        At,
        {
          autoFocus: !0,
          immediate: !0,
          options: z,
          value: a,
          onChange: (W) => V(W ?? "")
        }
      );
    }
    if (l.type === "reference") {
      const z = mc(
        l,
        u
      ), W = sc(l, f), re = z.map((q) => ({
        label: String(To(W, q)),
        value: q
      }));
      return /* @__PURE__ */ h(
        At,
        {
          autoFocus: !0,
          immediate: !0,
          searchable: !0,
          searchInputAsFilter: !0,
          clearable: !0,
          options: re,
          value: a,
          onChange: (q) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            V(q ?? void 0)
          )
        }
      );
    }
    if (l.type === "enum") {
      const { values: z, multiple: W } = l.typeArguments;
      if (W) {
        const re = yv(
          a,
          z,
          (q) => v("components.select.invalidOption", { value: q }),
          /* @__PURE__ */ h(
            wg,
            {
              className: "hc:text-hello-csv-danger hc:mr-2 hc:h-5 hc:w-5 hc:shrink-0",
              "aria-hidden": "true"
            }
          )
        );
        return /* @__PURE__ */ h(
          At,
          {
            autoFocus: !0,
            immediate: !0,
            searchable: !0,
            searchInputAsFilter: !0,
            clearable: !0,
            multiple: !0,
            options: re,
            value: a,
            onChange: (q) => V(q ?? [], { close: !1 })
          }
        );
      }
      return /* @__PURE__ */ h(
        At,
        {
          autoFocus: !0,
          immediate: !0,
          searchable: !0,
          searchInputAsFilter: !0,
          clearable: !0,
          options: z,
          value: a,
          onChange: (re) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            V(
              re ?? void 0
            )
          )
        }
      );
    }
    if (Rr(l)) {
      const z = l.typeArguments ?? {};
      return /* @__PURE__ */ h(
        zg,
        {
          mode: l.type,
          value: typeof a == "string" ? a : "",
          seedText: L,
          ...z,
          "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
          onCommit: (W) => k(W)
        }
      );
    }
    return /* @__PURE__ */ h(
      Ja,
      {
        "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
        type: l.type === "number" ? "number" : "text",
        classes: "hc:block hc:w-full",
        value: te,
        onBlur: (z) => {
          P.current || k(z);
        },
        ref: E
      }
    );
  }
  return _ ? /* @__PURE__ */ h(
    "td",
    {
      role: "presentation",
      className: o,
      style: { width: n },
      children: /* @__PURE__ */ h("div", { ...X, children: /* @__PURE__ */ h("div", { className: "hc:w-full", children: ie() }) })
    }
  ) : /* @__PURE__ */ h("td", { role: "presentation", className: o, style: { width: n }, children: /* @__PURE__ */ h(
    Wg,
    {
      focusable: !1,
      variant: p ? "error" : "info",
      placement: e.row > 0 && e.row >= t.rowCount - 1 ? "top" : "bottom",
      tooltipText: p || (I ? v("sheet.readOnly") : ""),
      children: /* @__PURE__ */ h("div", { ...X, children: [
        /* @__PURE__ */ h(
          "div",
          {
            "aria-label": `row ${Number(i) + 1} ${l.label} ${b}`,
            ...R,
            className: `hc:h-full hc:w-full hc:py-4 hc:pr-3 hc:pl-4 ${N} hc:touch-manipulation hc:truncate hc:overflow-hidden hc:whitespace-nowrap`,
            title: C ? void 0 : `${b}`,
            children: l.customRender ? l.customRender(a, b) : b
          }
        ),
        ue
      ] })
    }
  ) });
}
function _w({
  table: e,
  sheetDefinition: t,
  allData: n,
  sheetValidationErrors: r,
  onCellValueChanged: o,
  setSelectedRows: i,
  tableContainerRef: s,
  enumLabelDict: l,
  gridDims: a,
  hasCheckboxColumn: c
}) {
  const { t: u } = ye(), d = Vc();
  function p(g, b) {
    return r.filter(
      (C) => C.columnId === g && C.rowIndex === b
    );
  }
  const f = "hc:bg-hello-csv-muted hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:text-hello-csv-text hc:whitespace-nowrap hc:border-y hc:border-hello-csv-border-strong", v = "hc:text-sm hc:font-medium hc:whitespace-nowrap hc:text-hello-csv-text hc:border-b hc:border-hello-csv-border-strong", w = e.getRowModel().rows, m = jl({
    count: w.length,
    getScrollElement: () => s.current,
    estimateSize: () => qa,
    measureElement: (g) => g == null ? void 0 : g.getBoundingClientRect().height,
    overscan: 20
  }), _ = d.state.active, y = d.state.editing;
  se(() => {
    if (!_ || y) return;
    m.scrollToIndex(_.row, { align: "auto" });
    let g = 0, b = 0;
    const C = () => {
      const R = s.current, N = R == null ? void 0 : R.querySelector(
        `[data-cell-row="${_.row}"][data-cell-col="${_.col}"]`
      );
      N ? (document.activeElement !== N && N.focus({ preventScroll: !0 }), S(R, N)) : b++ < 5 && (g = requestAnimationFrame(C));
    };
    return g = requestAnimationFrame(C), () => cancelAnimationFrame(g);
  }, [_ == null ? void 0 : _.row, _ == null ? void 0 : _.col, y == null ? void 0 : y.row, y == null ? void 0 : y.col]);
  function S(g, b) {
    const C = g.getBoundingClientRect(), R = b.getBoundingClientRect(), N = c ? Ya : 0;
    R.left < C.left + N ? g.scrollLeft -= C.left + N - R.left : R.right > C.right && (g.scrollLeft += R.right - C.right);
  }
  const E = m.getVirtualItems().map((g) => ({
    row: w[g.index],
    index: g.index,
    start: g.start,
    end: g.end
  })), [T, P] = E.length > 0 ? [
    Math.max(
      0,
      E[0].start - m.options.scrollMargin
    ),
    Math.max(
      0,
      m.getTotalSize() - E[E.length - 1].end
    )
  ] : [0, 0], I = ee(
    (g) => {
      g && m.measureElement(g);
    },
    [m]
  ), x = t.columns.length;
  return /* @__PURE__ */ h(
    "table",
    {
      className: "hc:w-full hc:table-fixed hc:border-separate hc:border-spacing-0",
      "aria-label": u("sheet.sheetTitle"),
      role: "grid",
      "aria-multiselectable": "true",
      "aria-rowcount": w.length + 1,
      "aria-colcount": x + (c ? 1 : 0),
      children: [
        /* @__PURE__ */ h("thead", { className: "hc:bg-hello-csv-muted hc:sticky hc:top-0 hc:z-10", children: e.getHeaderGroups().map((g) => /* @__PURE__ */ h("tr", { role: "row", "aria-rowindex": 1, children: g.headers.map((b, C) => /* @__PURE__ */ h(
          "th",
          {
            role: "columnheader",
            "aria-colindex": C + 1,
            "aria-sort": b.column.getIsSorted() === "asc" ? "ascending" : b.column.getIsSorted() === "desc" ? "descending" : b.column.getCanSort() ? "none" : void 0,
            className: b.column.id === Eo ? `${f} hc:sticky hc:left-0 hc:z-20` : `hc:relative hc:z-10 ${f}`,
            colSpan: b.colSpan,
            style: { width: b.getSize() },
            children: /* @__PURE__ */ h(
              "div",
              {
                className: `hc:flex hc:w-full ${b.column.getCanSort() ? "hc:cursor-pointer hc:select-none" : ""}`,
                onClick: b.column.getToggleSortingHandler(),
                children: [
                  b.isPlaceholder ? null : /* @__PURE__ */ h("div", { children: As(
                    b.column.columnDef.header,
                    b.getContext()
                  ) }, `header-${g.id}-${b.id}`),
                  /* @__PURE__ */ h(
                    "span",
                    {
                      className: "hc:bg-hello-csv-text-muted hc:text-hello-csv-surface hc:ml-2 hc:flex-none hc:rounded-sm",
                      children: {
                        asc: /* @__PURE__ */ h(
                          pg,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        ),
                        desc: /* @__PURE__ */ h(
                          sg,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        )
                      }[b.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${g.id}-${b.id}`
                  ),
                  b.column.getCanResize() && /* @__PURE__ */ h(
                    "div",
                    {
                      onMouseDown: b.getResizeHandler(),
                      onTouchStart: b.getResizeHandler(),
                      className: "hc:bg-hello-csv-border hc:absolute hc:top-0 hc:right-0 hc:h-full hc:w-0.5 hc:cursor-col-resize hc:touch-none hc:select-none"
                    },
                    `resize-icon-${g.id}-${b.id}`
                  )
                ]
              }
            )
          },
          b.id
        )) }, g.id)) }),
        /* @__PURE__ */ h(
          "tbody",
          {
            className: "hc:divide-hello-csv-border hc:divide-y",
            style: {
              height: `${m.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ h("tr", { role: "presentation", children: /* @__PURE__ */ h("td", { style: { height: T } }) }),
              E.map(({ row: g, index: b }) => /* @__PURE__ */ h(
                "tr",
                {
                  role: "row",
                  "aria-rowindex": b + 2,
                  "data-index": b,
                  ref: I,
                  children: g.getVisibleCells().map((C, R) => {
                    if (C.column.id === Eo)
                      return /* @__PURE__ */ h(
                        "td",
                        {
                          role: "gridcell",
                          "aria-colindex": 1,
                          "aria-label": `Select row ${Number(g.id) + 1}`,
                          className: `hc:bg-hello-csv-muted ${v} hc:sticky hc:left-0 hc:z-6 hc:pr-3 hc:pl-4`,
                          style: { width: C.column.getSize() },
                          children: As(C.column.columnDef.cell, C.getContext())
                        },
                        C.id
                      );
                    const N = R - (c ? 1 : 0), D = t.columns[N].id, k = wi(
                      n,
                      t.id,
                      g.original
                    ), $ = p(D, k).map((M) => u(M.message)).join(", ");
                    return /* @__PURE__ */ h(
                      bw,
                      {
                        coord: { row: b, col: N },
                        gridDims: a,
                        widthPx: C.column.getSize(),
                        ariaColIndex: N + (c ? 2 : 1),
                        tdClassName: v,
                        rowId: g.id,
                        sheetDefinition: t,
                        columnDefinition: t.columns.find((M) => M.id === D),
                        allData: n,
                        value: C.getValue(),
                        onUpdated: (M) => o(k, D, M),
                        clearRowsSelection: () => i([]),
                        errorsText: $,
                        enumLabelDict: l
                      },
                      C.id
                    );
                  })
                },
                g.id
              )),
              /* @__PURE__ */ h("tr", { role: "presentation", children: /* @__PURE__ */ h("td", { style: { height: P } }) })
            ]
          }
        )
      ]
    }
  );
}
function xw({ column: e }) {
  const { t } = ye(), n = yi(e);
  return /* @__PURE__ */ h(
    "div",
    {
      className: "hc:flex hc:items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ h("div", { className: "hc:relative hc:mr-3 hc:h-5 hc:w-5", children: [
          /* @__PURE__ */ h(za, { className: "hc:text-hello-csv-text-subtle hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" }),
          /* @__PURE__ */ h(om, { className: "hc:text-hello-csv-text-muted hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" })
        ] }),
        e.label,
        " ",
        Tr(e) && "*"
      ]
    }
  );
}
function Sw({
  sheetDefinition: e,
  rowData: t,
  selectedRows: n,
  setSelectedRows: r,
  viewMode: o,
  setViewMode: i,
  searchPhrase: s,
  setSearchPhrase: l,
  errorColumnFilter: a,
  setErrorColumnFilter: c,
  removeRows: u,
  addEmptyRow: d,
  sheetValidationErrors: p,
  rowValidationSummary: f,
  resetState: v,
  undo: w,
  redo: m,
  canUndo: _,
  canRedo: y,
  enumLabelDict: S
}) {
  const { csvDownloadMode: E, availableActions: T } = ze(), { t: P } = ye(), { processingInProgress: I } = rt(), [x, g] = Y(!1), [b, C] = Y(!1), R = "hc:pointer-events-none hc:cursor-not-allowed hc:opacity-50";
  function N(M) {
    const O = e.columns.find(
      (H) => H.id === M
    ), A = Rs(
      p.filter((H) => H.columnId === M).map((H) => H.rowIndex)
    ).length;
    return {
      label: `${(O == null ? void 0 : O.label) || M} (${A})`,
      value: M
    };
  }
  const D = Rs(
    p.map((M) => M.columnId)
  ).map((M) => N(M));
  a != null && D.find((M) => M.value === a) == null && D.push(N(a));
  const k = [
    {
      value: "all",
      label: P("sheet.all") + ` (${f.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: P("sheet.valid") + ` (${f.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: P("sheet.invalid") + ` (${f.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function $() {
    u({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ h("div", { className: "hc:my-5 hc:flex hc:items-center", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5", children: [
      /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h(qg, { activeButton: o, buttons: k }) }),
      T.includes("search") && /* @__PURE__ */ h(
        Ja,
        {
          clearable: !0,
          value: s,
          onChange: (M) => l(M),
          placeholder: P("sheet.search"),
          iconBuilder: (M) => /* @__PURE__ */ h(nm, { ...M })
        }
      ),
      T.includes("undoRedo") && /* @__PURE__ */ h(pe, { children: [
        /* @__PURE__ */ h(at, { tooltipText: P("sheet.undoTooltip"), children: /* @__PURE__ */ h(
          Bp,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": P("sheet.undoTooltip"),
            "aria-disabled": !_,
            className: `hc:h-6 hc:w-6 ${_ ? "hc:cursor-pointer" : R}`,
            onClick: () => _ && w()
          }
        ) }),
        /* @__PURE__ */ h(at, { tooltipText: P("sheet.redoTooltip"), children: /* @__PURE__ */ h(
          Up,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": P("sheet.redoTooltip"),
            "aria-disabled": !y,
            className: `hc:h-6 hc:w-6 ${y ? "hc:cursor-pointer" : R}`,
            onClick: () => y && m()
          }
        ) })
      ] }),
      T.includes("removeRows") && /* @__PURE__ */ h(
        at,
        {
          tooltipText: P(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ h(
            am,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": P(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `hc:h-6 hc:w-6 ${n.length > 0 ? "hc:cursor-pointer" : R}`,
              onClick: () => g(!0)
            }
          )
        }
      ),
      T.includes("addRows") && /* @__PURE__ */ h(at, { tooltipText: P("sheet.addRowsTooltip"), children: /* @__PURE__ */ h(
        sm,
        {
          className: "hc:h-6 hc:w-6 hc:cursor-pointer",
          onClick: d
        }
      ) }),
      T.includes("downloadCsv") && /* @__PURE__ */ h(at, { tooltipText: P("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ h(
        Lp,
        {
          className: `hc:h-6 hc:w-6 ${t.length > 0 ? "hc:cursor-pointer" : R}`,
          onClick: () => ic(
            e,
            t,
            S,
            E
          )
        }
      ) }),
      /* @__PURE__ */ h(
        At,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: P("sheet.filterByError"),
          classes: "hc:min-w-48",
          options: D,
          value: a,
          onChange: (M) => c(M)
        }
      ),
      T.includes("removeRows") && /* @__PURE__ */ h(
        Co,
        {
          open: x,
          setOpen: g,
          onConfirm: $,
          title: P("sheet.removeConfirmationModalTitle"),
          confirmationText: P(
            "sheet.removeConfirmationModalConfirmationText"
          ),
          subTitle: P("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "hc:ml-5 hc:flex hc:items-center", children: [
      I && /* @__PURE__ */ h(pe, { children: [
        /* @__PURE__ */ h(uc, { color: "dark" }),
        /* @__PURE__ */ h("div", { className: "hc:mr-2" })
      ] }),
      T.includes("resetState") && /* @__PURE__ */ h(pe, { children: [
        /* @__PURE__ */ h(at, { tooltipText: P("sheet.resetTooltip"), children: /* @__PURE__ */ h(
          za,
          {
            className: "hc:h-6 hc:w-6 hc:cursor-pointer",
            onClick: () => C(!0)
          }
        ) }),
        /* @__PURE__ */ h(
          Co,
          {
            open: b,
            setOpen: C,
            onConfirm: v,
            title: P("sheet.resetConfirmationModalTitle"),
            confirmationText: P(
              "sheet.resetConfirmationModalConfirmationText"
            ),
            subTitle: P("sheet.resetConfirmationModalSubTitle"),
            variant: "danger"
          }
        )
      ] })
    ] })
  ] });
}
function Cw({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ h(yl, { checked: r, setChecked: o });
}
function Ew({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((s) => s !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ h(
    yl,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
const zc = {
  active: null,
  anchor: null,
  editing: null,
  editInitialValue: "preserve"
};
function Rw(e, t) {
  switch (t.type) {
    case "setActive":
      return {
        active: t.coord,
        anchor: null,
        editing: null,
        editInitialValue: "preserve"
      };
    case "extend":
      return {
        ...e,
        anchor: e.anchor ?? e.active,
        active: t.coord,
        editing: null
      };
    case "selectAll":
      return {
        ...e,
        anchor: { row: 0, col: 0 },
        active: {
          row: Math.max(0, t.dims.rowCount - 1),
          col: Math.max(0, t.dims.colCount - 1)
        },
        editing: null
      };
    case "startEdit":
      return {
        ...e,
        active: t.coord,
        anchor: null,
        editing: t.coord,
        editInitialValue: t.initialValue
      };
    case "cancelEdit":
    case "stopEditing":
      return { ...e, editing: null, editInitialValue: "preserve" };
    case "clamp": {
      if (!e.active)
        return e;
      const n = Be(e.active, t.dims), r = e.anchor ? Be(e.anchor, t.dims) : null, o = e.editing && e.editing.row < t.dims.rowCount && e.editing.col < t.dims.colCount ? e.editing : null;
      return { ...e, active: n, anchor: r, editing: o };
    }
    case "reset":
      return zc;
    default:
      return e;
  }
}
function $w() {
  const [e, t] = tt(Rw, zc), n = U(!1), r = ne(
    () => e.active ? mw(e.anchor, e.active) : null,
    [e.active, e.anchor]
  ), o = ee(
    (y) => t({ type: "setActive", coord: y }),
    []
  ), i = ee(
    (y) => t({ type: "extend", coord: y }),
    []
  ), s = ee(
    (y) => t({ type: "selectAll", dims: y }),
    []
  ), l = ee(
    (y, S) => t({ type: "startEdit", coord: y, initialValue: S }),
    []
  ), a = ee(() => t({ type: "cancelEdit" }), []), c = ee(() => t({ type: "stopEditing" }), []), u = ee(
    (y) => t({ type: "clamp", dims: y }),
    []
  ), d = ee(() => t({ type: "reset" }), []), p = ee((y) => {
    n.current = !0, t({ type: "setActive", coord: y });
  }, []), f = ee((y) => {
    n.current && t({ type: "extend", coord: y });
  }, []), v = ee(() => {
    n.current = !1;
  }, []), w = ee(
    (y) => {
      var S, E;
      return ((S = e.active) == null ? void 0 : S.row) === y.row && ((E = e.active) == null ? void 0 : E.col) === y.col;
    },
    [e.active]
  ), m = ee(
    (y) => {
      var S, E;
      return ((S = e.editing) == null ? void 0 : S.row) === y.row && ((E = e.editing) == null ? void 0 : E.col) === y.col;
    },
    [e.editing]
  ), _ = ee(
    (y) => r ? gw(y, r) : !1,
    [r]
  );
  return {
    state: e,
    range: r,
    setActive: o,
    extendTo: i,
    selectAll: s,
    startEdit: l,
    cancelEdit: a,
    stopEditing: c,
    clampToBounds: u,
    reset: d,
    beginDrag: p,
    dragTo: f,
    endDrag: v,
    isActive: w,
    isEditing: m,
    isSelected: _
  };
}
function Tw(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function Ns(e) {
  return e.ctrlKey || e.metaKey;
}
const Jr = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right"
};
function Mw(e, t, n, r) {
  if (!t.editing && Ns(e)) {
    const l = e.key.toLowerCase();
    if (l === "z")
      return e.shiftKey ? { type: "Redo" } : { type: "Undo" };
    if (l === "y")
      return { type: "Redo" };
  }
  if (n.rowCount === 0 || n.colCount === 0)
    return { type: "NoOp" };
  if (t.editing)
    switch (e.key) {
      case "Escape":
        return { type: "CancelEdit" };
      case "Enter":
        return {
          type: "CommitAndMove",
          direction: e.shiftKey ? "up" : "down"
        };
      case "Tab":
        return {
          type: "CommitAndMove",
          direction: e.shiftKey ? "left" : "right"
        };
      default:
        return { type: "NoOp" };
    }
  const o = t.active;
  if (!o)
    return Jr[e.key] || e.key === "Tab" ? { type: "MoveActive", to: Be({ row: 0, col: 0 }, n) } : { type: "NoOp" };
  const i = r(o);
  if (Ns(e)) {
    const l = Jr[e.key];
    if (l)
      return { type: "JumpEdge", direction: l };
    switch (e.key.toLowerCase()) {
      case "a":
        return { type: "SelectAll" };
      case "c":
        return { type: "Copy" };
      case "x":
        return { type: "Cut" };
      case "v":
        return { type: "Paste" };
      case "d":
        return { type: "FillDown" };
      case "home":
        return { type: "MoveActive", to: Be({ row: 0, col: 0 }, n) };
      case "end":
        return {
          type: "MoveActive",
          to: Be(
            { row: n.rowCount - 1, col: n.colCount - 1 },
            n
          )
        };
    }
    return e.key === "Home" ? { type: "MoveActive", to: Be({ row: 0, col: 0 }, n) } : e.key === "End" ? {
      type: "MoveActive",
      to: Be(
        { row: n.rowCount - 1, col: n.colCount - 1 },
        n
      )
    } : { type: "NoOp" };
  }
  const s = Jr[e.key];
  if (s) {
    const l = Xn(o, s, n);
    return e.shiftKey ? { type: "ExtendSelection", to: l } : { type: "MoveActive", to: l };
  }
  switch (e.key) {
    case "Tab":
      return {
        type: "MoveActive",
        to: Xn(o, e.shiftKey ? "left" : "right", n)
      };
    case "Enter":
      return {
        type: "MoveActive",
        to: Xn(o, e.shiftKey ? "up" : "down", n)
      };
    case "F2":
      return i ? { type: "StartEdit", initialValue: "preserve" } : { type: "NoOp" };
    case "Delete":
    case "Backspace":
      return i ? { type: "ClearCells" } : { type: "NoOp" };
    case "Home":
      return {
        type: "MoveActive",
        to: Be({ row: o.row, col: 0 }, n)
      };
    case "End":
      return {
        type: "MoveActive",
        to: Be({ row: o.row, col: n.colCount - 1 }, n)
      };
    case "PageUp":
    case "PageDown":
      return { type: "NoOp" };
    case "Escape":
      return { type: "NoOp" };
  }
  return Tw(e) ? i ? { type: "StartEdit", initialValue: { char: e.key } } : { type: "NoOp" } : { type: "NoOp" };
}
function Ow() {
  const e = U(""), t = ee((r) => {
    var o, i;
    e.current = r, (i = (o = navigator.clipboard) == null ? void 0 : o.writeText) == null || i.call(o, r).catch(() => {
    });
  }, []), n = ee(async () => {
    var o, i;
    let r = "";
    try {
      r = await ((i = (o = navigator.clipboard) == null ? void 0 : o.readText) == null ? void 0 : i.call(o)) ?? "";
    } catch {
      r = "";
    }
    return r || (r = e.current), r;
  }, []);
  return { write: t, read: n };
}
function Iw(e, t) {
  const n = e.map(
    (r) => r.map((o, i) => $v(t[i], o))
  );
  return oc(n, "	");
}
function Dw(e, t, n, r, o) {
  const i = [];
  if (e.length === 1 && e[0] && e[0].length === 1 && o) {
    const l = e[0][0];
    for (let a = o.top; a <= o.bottom; a++)
      for (let c = o.left; c <= o.right; c++)
        Po({ row: a, col: c }, n) && r(a, c) && i.push({ row: a, col: c, value: l });
    return i;
  }
  return e.forEach((l, a) => {
    l.forEach((c, u) => {
      const d = t.row + a, p = t.col + u;
      Po({ row: d, col: p }, n) && r(d, p) && i.push({ row: d, col: p, value: c });
    });
  }), i;
}
function Aw(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e) {
    let o = n.get(r.rowIndex);
    o || (o = { ...t[r.rowIndex] ?? {} }, n.set(r.rowIndex, o)), o[r.columnId] = r.value;
  }
  return Array.from(n.entries()).map(([r, o]) => ({
    rowIndex: r,
    value: o
  }));
}
function Fw({
  sheetDefinition: e,
  data: t,
  rowData: n,
  allData: r,
  canEditRows: o,
  setRowsData: i,
  undo: s,
  redo: l
}) {
  const a = $w(), c = Ow(), u = U(null), d = e.columns, p = ne(
    () => ({ rowCount: n.length, colCount: d.length }),
    [n.length, d.length]
  );
  se(() => {
    a.clampToBounds(p);
  }, [p.rowCount, p.colCount]), se(() => {
    const g = () => a.endDrag();
    return window.addEventListener("mouseup", g), () => window.removeEventListener("mouseup", g);
  }, []);
  const f = U(a);
  f.current = a, se(() => {
    const g = (b) => {
      const C = f.current;
      if (C.state.editing) return;
      const R = u.current;
      R && !R.contains(b.target) && C.reset();
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const v = (g) => {
    if (!g) return !1;
    const b = d[g.col];
    return b ? !yi(b) && o : !1;
  }, w = (g, b) => {
    var C;
    return (C = n[g]) == null ? void 0 : C[d[b].id];
  }, m = (g, b) => $t(w(g, b)), _ = (g) => wi(r, e.id, n[g]), y = (g) => {
    if (g.length === 0) return;
    const b = g.map((R) => ({
      rowIndex: _(R.row),
      columnId: d[R.col].id,
      value: R.value
    })), C = Aw(b, t.rows);
    i(
      C.map((R) => ({
        sheetId: e.id,
        rowIndex: R.rowIndex,
        value: R.value
      }))
    );
  }, S = () => {
    const g = a.range;
    if (!g) return;
    const b = [];
    for (let R = g.top; R <= g.bottom; R++) {
      const N = [];
      for (let D = g.left; D <= g.right; D++)
        N.push(w(R, D));
      b.push(N);
    }
    const C = Iw(
      b,
      d.slice(g.left, g.right + 1)
    );
    c.write(C);
  }, E = () => {
    const g = a.range;
    if (!g) return;
    const b = [];
    for (let C = g.top; C <= g.bottom; C++)
      for (let R = g.left; R <= g.right; R++)
        v({ col: R }) && b.push({
          row: C,
          col: R,
          value: Tv(d[R])
        });
    y(b);
  }, T = () => {
    S(), E();
  }, P = async () => {
    const g = a.state.active;
    if (!g) return;
    const b = await c.read();
    if (!b) return;
    const C = r0(b, "	");
    if (C.length === 0) return;
    const R = Dw(
      C,
      g,
      p,
      (N, D) => v({ col: D }),
      a.range ?? void 0
    );
    y(
      R.map((N) => ({
        row: N.row,
        col: N.col,
        value: bi(d[N.col], N.value)
      }))
    );
  }, I = () => {
    const g = a.range;
    if (!g || g.bottom === g.top) return;
    const b = [];
    for (let C = g.left; C <= g.right; C++) {
      const R = w(g.top, C);
      for (let N = g.top + 1; N <= g.bottom; N++)
        v({ col: C }) && b.push({ row: N, col: C, value: R });
    }
    y(b);
  };
  return { selection: a, dims: p, tableContainerRef: u, handleGridKeyDown: (g) => {
    if (a.state.editing) return;
    const b = a.state.active;
    if ((g.key === "PageDown" || g.key === "PageUp") && b) {
      const R = u.current, N = ww(
        (R == null ? void 0 : R.clientHeight) ?? 0,
        qa
      ), D = Be(
        {
          row: b.row + (g.key === "PageDown" ? N : -N),
          col: b.col
        },
        p
      );
      g.shiftKey ? a.extendTo(D) : a.setActive(D), g.preventDefault();
      return;
    }
    const C = Mw(
      {
        key: g.key,
        shiftKey: g.shiftKey,
        ctrlKey: g.ctrlKey,
        metaKey: g.metaKey,
        altKey: g.altKey
      },
      a.state,
      p,
      v
    );
    switch (C.type) {
      case "MoveActive":
        a.setActive(C.to), g.preventDefault();
        break;
      case "ExtendSelection":
        a.extendTo(C.to), g.preventDefault();
        break;
      case "JumpEdge": {
        if (!b) break;
        const R = vw(b, C.direction, p, m);
        g.shiftKey ? a.extendTo(R) : a.setActive(R), g.preventDefault();
        break;
      }
      case "SelectAll":
        a.selectAll(p), g.preventDefault();
        break;
      case "StartEdit":
        b && a.startEdit(b, C.initialValue), g.preventDefault();
        break;
      case "ClearCells":
        E(), g.preventDefault();
        break;
      case "Copy":
        S(), g.preventDefault();
        break;
      case "Cut":
        T(), g.preventDefault();
        break;
      case "Paste":
        P(), g.preventDefault();
        break;
      case "FillDown":
        I(), g.preventDefault();
        break;
      case "Undo":
        s && (s(), g.preventDefault());
        break;
      case "Redo":
        l && (l(), g.preventDefault());
        break;
    }
  } };
}
function Pw({
  sheetDefinition: e,
  data: t,
  sheetValidationErrors: n,
  setRowData: r,
  setRowsData: o,
  removeRows: i,
  addEmptyRow: s,
  resetState: l,
  undo: a,
  redo: c,
  canUndo: u,
  canRedo: d,
  enumLabelDict: p
}) {
  const { sheetData: f } = rt(), { availableActions: v } = ze(), [w, m] = Y([]), [_, y] = Y("all"), [S, E] = Y(""), [T, P] = Y(
    null
  ), I = vv(
    t,
    f,
    _,
    n,
    T,
    e,
    S,
    p
  ), x = v.includes("removeRows"), g = v.includes("editRows"), b = v.includes("undoRedo"), { selection: C, dims: R, tableContainerRef: N, handleGridKeyDown: D } = Fw({
    sheetDefinition: e,
    data: t,
    rowData: I,
    allData: f,
    canEditRows: g,
    setRowsData: o,
    // Gate the keyboard shortcuts on the same flag as the toolbar buttons.
    undo: b ? a : void 0,
    redo: b ? c : void 0
  });
  se(() => {
    m([]), y("all"), C.reset();
  }, [e]);
  const k = ne(() => {
    const A = t.rows, H = A.filter(
      (L, F) => !n.some((te) => te.rowIndex === F)
    ), V = A.filter(
      (L, F) => n.some((te) => te.rowIndex === F)
    );
    return {
      all: A.length,
      valid: H.length,
      errors: V.length
    };
  }, [t, n]), $ = ne(() => [
    ...v.includes(
      "removeRows"
    ) ? [
      {
        id: Eo,
        header: () => /* @__PURE__ */ h(
          Cw,
          {
            visibleData: I,
            selectedRows: w,
            setSelectedRows: m
          }
        ),
        cell: ({ row: H }) => /* @__PURE__ */ h(
          Ew,
          {
            row: H,
            selectedRows: w,
            setSelectedRows: m
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: Ya
      }
    ] : [],
    ...e.columns.map(
      (H) => ({
        id: H.id,
        accessorFn: (V) => V[H.id],
        header: () => /* @__PURE__ */ h(xw, { column: H }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: H.label },
        enableResizing: !0
      })
    )
  ], [e, w, I, v]), M = dw({
    data: I,
    columns: $,
    getCoreRowModel: sw(),
    getSortedRowModel: lw(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: Km,
      maxSize: Zm,
      size: Xm
    }
  });
  function O(A, H, V) {
    const L = { ...t.rows[A] };
    V === void 0 ? delete L[H] : L[H] = V, r({
      sheetId: e.id,
      value: L,
      rowIndex: A
    });
  }
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex-none", children: /* @__PURE__ */ h(
      Sw,
      {
        sheetDefinition: e,
        rowData: I,
        selectedRows: w,
        setSelectedRows: m,
        viewMode: _,
        setViewMode: y,
        searchPhrase: S,
        setSearchPhrase: E,
        errorColumnFilter: T,
        setErrorColumnFilter: P,
        removeRows: i,
        addEmptyRow: s,
        sheetValidationErrors: n,
        rowValidationSummary: k,
        resetState: l,
        undo: a,
        redo: c,
        canUndo: u,
        canRedo: d,
        enumLabelDict: p
      }
    ) }),
    /* @__PURE__ */ h(pw, { value: C, children: /* @__PURE__ */ h(
      "div",
      {
        className: "hc:min-h-0 hc:flex-1 hc:overflow-auto",
        ref: N,
        tabIndex: 0,
        onKeyDown: D,
        children: /* @__PURE__ */ h(
          _w,
          {
            tableContainerRef: N,
            table: M,
            sheetDefinition: e,
            allData: f,
            sheetValidationErrors: n,
            onCellValueChanged: O,
            setSelectedRows: m,
            enumLabelDict: p,
            gridDims: R,
            hasCheckboxColumn: x
          }
        )
      }
    ) })
  ] });
}
function Bc(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function kw(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && ic(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Ls = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + pi(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function Nw({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = rt(), l = mi(o), { csvDownloadMode: a } = ze(), { t: c } = ye(), u = Bc(l);
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-row hc:px-4 hc:pt-3 hc:pb-2", children: /* @__PURE__ */ h("div", { className: "hc:flex-1 hc:space-y-4", children: [
    /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ h("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: /* @__PURE__ */ h(Zp, { className: "hc:text-hello-csv-primary hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ h("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ h("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.fileInformation") }),
        /* @__PURE__ */ h("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: n ? `${c("importStatus.original")}: ${wn((n == null ? void 0 : n.size) || 0)} · ${c("importStatus.processed")}: ${wn(Ls(l, s, t, a))}` : `${c("importStatus.processed")}: ${wn(Ls(l, s, t, a))}` }),
        /* @__PURE__ */ h("div", { className: "hc:mt-5", children: /* @__PURE__ */ h(
          Ve,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => kw(
              l,
              s,
              t,
              a
            ),
            children: c("importStatus.downloadProcessedData")
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ h("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ h("div", { children: /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ h("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: r === "failed" ? /* @__PURE__ */ h(Mo, { className: "hc:text-hello-csv-danger-light hc:h-8 hc:w-8" }) : e ? /* @__PURE__ */ h(Jg, { className: "hc:text-hello-csv-warning-light hc:h-8 hc:w-8" }) : /* @__PURE__ */ h(ac, { className: "hc:text-hello-csv-success-light hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ h("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ h("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.importResults") }),
        /* @__PURE__ */ h("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: c("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          i.skipped >= 0 && /* @__PURE__ */ h("span", { children: [
            c("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ h("span", { children: [
            c("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ h("span", { children: c("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          c("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ h(gi, { variant: "error", children: c("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function jc({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = ye();
  return /* @__PURE__ */ h(wl, { withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-col hc:py-5", children: [
    /* @__PURE__ */ h("div", { className: "hc:px-4 hc:pb-2 hc:text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-muted hc:px-4 hc:pb-2 hc:text-sm", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ h("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ h(
      Nw,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function Lw({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = rt(), { onSummaryFinished: o } = ze(), { t: i } = ye(), s = mi(n), l = Bc(s), a = (r == null ? void 0 : r.imported) ?? 0, c = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex-none hc:text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ h("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ h("div", { className: "hc:mt-4", children: /* @__PURE__ */ h(
        vi,
        {
          variant: c ? "warning" : "success",
          header: i(
            `importStatus.${c ? "importSuccessfulWithErrors" : "importSuccessful"}`
          ),
          description: i(
            `importStatus.successDescription${r ? "WithStats" : ""}`,
            {
              totalRecords: l,
              recordsImported: a
            }
          )
        }
      ) }),
      /* @__PURE__ */ h("div", { className: "hc:mt-6", children: /* @__PURE__ */ h(
        jc,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ h("div", { className: "hc:flex-none", children: /* @__PURE__ */ h("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ h(Ve, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
  ] });
}
function Vw({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = ye();
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ h("div", { className: "hc:text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ h("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ h("div", { className: "hc:mt-4", children: /* @__PURE__ */ h(
        vi,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ h("div", { className: "hc:mt-6", children: /* @__PURE__ */ h(jc, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ h("div", { className: "hc:mt-6 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ h(Ve, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ h(Ve, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function Hw({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, s] = Y(!1);
  return se(() => {
    if (e === 0) {
      const l = setTimeout(() => {
        s(!0);
      }, 3e3);
      return () => clearTimeout(l);
    }
  }, [e]), i ? /* @__PURE__ */ h("div", { className: "hc:flex hc:justify-center", children: /* @__PURE__ */ h(
    "div",
    {
      className: `hc:border-hello-csv-success-light hc:h-22 hc:w-22 hc:rounded-full hc:border-10 ${t && "hc:animate-spin hc:border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ h(
    "svg",
    {
      className: "hc:mx-auto hc:h-24 hc:w-24 hc:rotate-[-90deg]",
      width: "100",
      height: "100",
      children: [
        /* @__PURE__ */ h(
          "circle",
          {
            cx: "50",
            cy: "50",
            r: 40,
            fill: "transparent",
            className: "hc:text-hello-csv-border",
            strokeWidth: "10",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ h(
          "circle",
          {
            cx: "50",
            cy: "50",
            r: 40,
            fill: "transparent",
            strokeWidth: "10",
            strokeDasharray: r,
            strokeDashoffset: o,
            className: "hc:stroke-hello-csv-success-light hc:transition-[stroke-dashoffset] hc:duration-500"
          }
        )
      ]
    }
  );
}
function zw() {
  return /* @__PURE__ */ h(Gp, { className: "hc:text-hello-csv-success hc:absolute hc:inset-0 hc:m-auto hc:h-12 hc:w-12 hc:stroke-4" });
}
function Bw({ resetState: e }) {
  const { importProgress: t, mode: n } = rt(), r = n === "submit", { t: o } = ye();
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:p-10", children: /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:w-full hc:flex-col", children: /* @__PURE__ */ h("div", { className: "hc:my-16 hc:text-center", children: [
    /* @__PURE__ */ h("div", { className: "hc:relative hc:mx-auto hc:h-24 hc:w-24", children: [
      /* @__PURE__ */ h(Hw, { progress: t, pending: r }),
      r && /* @__PURE__ */ h("div", { children: [
        /* @__PURE__ */ h("div", { className: "hc:absolute hc:inset-0 hc:flex hc:items-center hc:justify-center", children: /* @__PURE__ */ h("b", { className: "hc:text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ h("h2", { className: "hc:text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ h(zw, {})
    ] }),
    !r && /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-col hc:items-center", children: [
      /* @__PURE__ */ h("h2", { className: "hc:text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ h("div", { className: "hc:h-5" }),
      /* @__PURE__ */ h(Ve, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function jw({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = rt();
  return /* @__PURE__ */ h("div", { className: "hc:h-full hc:overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ h(Bw, { resetState: n }),
    o === "failed" && /* @__PURE__ */ h(
      Vw,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ h(Lw, { resetState: n, enumLabelDict: r })
  ] });
}
const Uw = ({ children: e }) => {
  const { theme: t } = ze();
  return se(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ h(pe, { children: e });
};
function Ww({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ B("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ B("title", {
    id: t
  }, e) : null, /* @__PURE__ */ B("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Gw = /* @__PURE__ */ fe(Ww);
function Uc() {
  const { sheets: e, preventUploadOnValidationErrors: t } = ze(), { sheetData: n, validationErrors: r, processingInProgress: o } = rt(), { t: i } = ye();
  return ne(() => {
    const s = Fg(e, n).map(
      (v) => ({
        ...v,
        tooltip: i("importer.rowLimitExceeded", {
          sheet: v.label,
          count: String(v.count),
          limit: String(v.maxRows)
        })
      })
    ), l = Object.fromEntries(
      s.map((v) => [v.sheetId, v])
    ), a = s.filter((v) => v.exceeded), c = a.length > 0;
    let u = null;
    a.length === 1 ? u = a[0].tooltip : a.length > 1 && (u = i("importer.rowLimitExceededMultiple", {
      sheets: a.map((v) => `${v.label} (${v.count}/${v.maxRows})`).join(", ")
    }));
    const p = (typeof t == "function" ? t(r) ?? !1 : t ?? !1) && r.length > 0 || c;
    return {
      limits: s,
      byId: l,
      exceeded: a,
      hasExceeded: c,
      preventUpload: p || o === !0,
      uploadBlockedTooltip: p ? u ?? i("importer.uploadBlocked") : i("importer.processing")
    };
  }, [
    e,
    n,
    r,
    o,
    t,
    i
  ]);
}
function qw({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = rt(), { sheets: i } = ze(), { byId: s } = Uc(), { t: l } = ye();
  return /* @__PURE__ */ h(
    Bg,
    {
      tabs: i.map((a) => {
        const c = s[a.id], u = c != null ? `${a.label} (${c.count} / ${c.maxRows})` : `${a.label} (${t[a.id]})`, d = o.some(
          (f) => f.sheetId === a.id
        ), p = c != null && c.exceeded ? c.tooltip : d ? l("importer.sheetValidationErrors") : void 0;
        return {
          label: u,
          value: a.id,
          icon: p != null ? /* @__PURE__ */ h(at, { className: "hc:mr-3", tooltipText: p, children: /* @__PURE__ */ h(Gw, { className: "hc:h-4 hc:w-4" }) }) : void 0
        };
      }),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function Yw({ onBackToMapping: e }) {
  const { t } = ye(), [n, r] = Y(!1);
  return /* @__PURE__ */ h(pe, { children: [
    /* @__PURE__ */ h(
      Ve,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ h(
      Co,
      {
        variant: "danger",
        onConfirm: e,
        open: n,
        setOpen: r,
        title: t("importer.backToMappingConfirmation.title"),
        subTitle: t("importer.backToMappingConfirmation.subTitle"),
        confirmationText: t(
          "importer.backToMappingConfirmation.confirmationText"
        ),
        cancelText: t("importer.backToMappingConfirmation.cancelText")
      }
    )
  ] });
}
function Kw({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ h("div", { className: "hc:h-full hc:w-full hc:space-y-5 hc:overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ h("div", { className: "hc:me-3", children: [
      /* @__PURE__ */ h("div", { className: "hc:border-hello-csv-border hc:my-3 hc:border-b hc:pb-4 hc:text-sm hc:font-light hc:uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ h("div", { className: "hc:mt-4", children: r.map((i) => /* @__PURE__ */ h(
        "div",
        {
          className: "hc:my-3 hc:flex hc:justify-between",
          children: [
            /* @__PURE__ */ h("div", { className: "hc:text-xs", children: i.columnLabel }),
            /* @__PURE__ */ h("div", { className: "hc:text-xs hc:font-light", children: /* @__PURE__ */ h(
              at,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ h(em, { className: "hc:text-hello-csv-text-muted hc:size-5" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function Zw({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-5", children: [
    /* @__PURE__ */ h("div", { className: "hc:me-3", children: /* @__PURE__ */ h(vi, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ h("div", { className: "hc:flex hc:min-h-0 hc:flex-1 hc:overflow-hidden", children: /* @__PURE__ */ h(Kw, { importerRequirements: e }) })
  ] });
}
function Xw({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = ze(), { t: i, tHtml: s } = ye(), l = U(null), [a, c] = Y(!1), [u, d] = Y(null), p = Um.concat(
    (r == null ? void 0 : r.map((y) => y.mimeType)) ?? []
  ), f = Wm, v = ["CSV", "TSV"].concat((r == null ? void 0 : r.map((y) => y.label)) ?? []).join(", "), w = (y, S) => {
    const E = Zv(y.name);
    if (!(p.includes(y.type) || f.includes(E))) {
      d(
        i("uploader.unsupportedFileType", { formats: v })
      );
      return;
    }
    if (y.size > S) {
      d(
        i("uploader.fileTooLarge", { size: wn(S) })
      );
      return;
    }
    d(null), e(y);
  }, m = (y) => {
    var E;
    const S = y.target;
    (E = S.files) != null && E.length && w(S.files[0], n);
  }, _ = (y) => {
    var S;
    y.preventDefault(), c(!1), (S = y.dataTransfer) != null && S.files.length && w(y.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ h(wl, { variant: "muted", withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ h(
    "div",
    {
      className: `hc:flex hc:h-full hc:flex-col hc:p-5 hc:transition-colors ${a ? "hc:bg-hello-csv-muted-light" : "hc:bg-hello-csv-muted"}`,
      onClick: () => {
        var y;
        return (y = l.current) == null ? void 0 : y.click();
      },
      onDragOver: (y) => {
        y.preventDefault(), c(!0);
      },
      onDragEnter: () => c(!0),
      onDragLeave: () => c(!1),
      onDrop: (y) => _(y),
      children: [
        /* @__PURE__ */ h("div", { className: "hc:flex hc:flex-1 hc:flex-col hc:items-center hc:justify-center", children: [
          /* @__PURE__ */ h(Yp, { className: "hc:text-hello-csv-primary hc:h-12 hc:w-12" }),
          /* @__PURE__ */ h("p", { className: "hc:mt-3 hc:text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ h("div", { className: "hc:text-hello-csv-text-muted hc:mt-3 hc:text-sm", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ h("b", { children: wn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((y) => y.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ h("div", { className: "hc:mt-3", children: /* @__PURE__ */ h(Ve, { children: i("uploader.browseFiles") }) }),
          u && /* @__PURE__ */ h("div", { className: "hc:mt-2", children: /* @__PURE__ */ h(cc, { children: u }) }),
          o && /* @__PURE__ */ h("div", { className: "hc:mt-3 hc:text-sm", children: /* @__PURE__ */ h(
            "p",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": i("uploader.enterManually"),
              onClick: (y) => {
                y.stopPropagation(), t == null || t();
              },
              className: "hc:text-hello-csv-primary hc:hover:text-hello-csv-primary hc:cursor-pointer hc:decoration-2 hc:opacity-90 hc:hover:underline hc:focus:underline hc:focus:outline-none",
              children: i("uploader.enterManually")
            }
          ) })
        ] }),
        /* @__PURE__ */ h(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: l,
            type: "file",
            accept: p.concat(f).join(","),
            className: "hc:sr-only",
            onChange: (y) => m(y)
          }
        )
      ]
    }
  ) });
}
function Jw({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = ze(), r = Kv(n), { t: o } = ye();
  return /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-4", children: [
    /* @__PURE__ */ h("div", { className: "hc:flex-none hc:text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ h("div", { className: "hc:flex-auto hc:md:min-h-0", children: /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col-reverse hc:gap-5 hc:md:flex-row", children: [
      /* @__PURE__ */ h("div", { className: "hc:h-full hc:flex-1 hc:lg:flex-1", children: /* @__PURE__ */ h(Zw, { importerRequirements: r }) }),
      /* @__PURE__ */ h("div", { className: "hc:flex-1 hc:lg:flex-2", children: /* @__PURE__ */ h(
        Xw,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
async function Vs(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
async function Qw({
  state: e,
  dispatch: t,
  importerDefinition: n
}) {
  const r = Cc();
  t({ type: "PROCESSING_STARTED", payload: { runId: r } });
  const i = await new lr(n, e).getState("submit"), s = [
    ...e.validationErrors,
    ...i.validationErrors
  ];
  t({
    type: "PROCESSING_COMPLETED",
    payload: { sheetData: i.sheetData, errors: s, runId: r }
  });
  const l = n.preventUploadOnValidationErrors;
  if (!((typeof l == "function" ? l(s) ?? !1 : l ?? !1) && s.length > 0)) {
    t({ type: "PROGRESS", payload: { progress: 0 } }), t({ type: "SUBMIT" });
    try {
      const c = mi(i.sheetData), u = await n.onComplete(
        { ...e, sheetData: c, validationErrors: s },
        (d) => {
          t({ type: "PROGRESS", payload: { progress: d } });
        },
        e.sheetDefinitions.map((d) => {
          var p;
          return {
            file: pi(
              d,
              ((p = c.find((f) => f.sheetId === d.id)) == null ? void 0 : p.rows) ?? [],
              {},
              "value"
            ),
            sheetId: d.id
          };
        })
      );
      await Vs(400), t({ type: "PROGRESS", payload: { progress: 100 } }), await Vs(200), t({
        type: "COMPLETED",
        payload: { importStatistics: u ?? void 0 }
      });
    } catch {
      t({ type: "FAILED" });
    }
  }
}
function Qr(e) {
  return structuredClone(e);
}
function ey() {
  const e = U([]), t = U([]), [, n] = Y(0), r = ee(() => n((a) => a + 1), []), o = ee(
    (a) => {
      e.current.push(Qr(a)), e.current.length > jm && (e.current = e.current.slice(-50)), t.current = [], r();
    },
    [r]
  ), i = ee(
    (a) => {
      if (e.current.length === 0) return null;
      const c = e.current.pop();
      return t.current.push(Qr(a)), r(), c;
    },
    [r]
  ), s = ee(
    (a) => {
      if (t.current.length === 0) return null;
      const c = t.current.pop();
      return e.current.push(Qr(a)), r(), c;
    },
    [r]
  ), l = ee(() => {
    e.current = [], t.current = [], r();
  }, [r]);
  return {
    canUndo: e.current.length > 0,
    canRedo: t.current.length > 0,
    record: o,
    undo: i,
    redo: s,
    reset: l
  };
}
function ty(e) {
  const { sheets: t, availableActions: n } = e, { t: r } = ye(), o = U(!0), i = U(null), s = rt(), l = w0(), a = Ie(), { mode: c, currentSheetId: u, sheetData: d, columnMappings: p, validationErrors: f } = s;
  se(() => {
    var L;
    if (o.current) {
      o.current = !1;
      return;
    }
    (L = i.current) == null || L.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const v = d.find(
    (L) => L.sheetId === u
  ), w = ne(() => Object.fromEntries(
    d.map((L) => [L.sheetId, L.rows.length])
  ), [d]), m = t.find(
    (L) => L.id === u
  ), _ = wv(t), { preventUpload: y, uploadBlockedTooltip: S } = Uc(), E = new lr(e, s), T = ey();
  function P() {
    T.record(d);
  }
  async function I(L) {
    await E.uploadFile(L), E.dispatchChange(l);
  }
  function x() {
    T.reset(), E.setEnterDataManually(), E.dispatchChange(l);
  }
  function g(L) {
    E.setMappings(L), E.dispatchChange(l);
  }
  async function b() {
    T.reset(), await E.confirmMappings(), E.dispatchChange(l);
  }
  function C(L) {
    P(), E.changeCell(L), E.dispatchChange(l);
  }
  function R(L) {
    L.length !== 0 && (P(), L.forEach((F) => E.changeCell(F)), E.dispatchChange(l));
  }
  function N(L) {
    P(), E.removeRows(L), E.dispatchChange(l);
  }
  function D() {
    P(), E.addEmptyRow(), E.dispatchChange(l);
  }
  function k() {
    const L = T.undo(d);
    L != null && (E.restoreSheetData(L), E.dispatchChange(l));
  }
  function $() {
    const L = T.redo(d);
    L != null && (E.restoreSheetData(L), E.dispatchChange(l));
  }
  function M() {
    T.reset(), l({ type: "RESET" });
  }
  function O() {
    return Qw({ state: s, dispatch: l, importerDefinition: e });
  }
  function A() {
    l({ type: "PREVIEW" });
  }
  function H() {
    l({ type: "UPLOAD" });
  }
  function V() {
    l({ type: "MAPPING" });
  }
  return /* @__PURE__ */ h(Uw, { children: /* @__PURE__ */ h(eg, { ref: i, children: [
    c === "upload" && /* @__PURE__ */ h(
      Jw,
      {
        onFileUploaded: I,
        onEnterDataManually: x
      }
    ),
    c === "mapping" && /* @__PURE__ */ h(
      y0,
      {
        onMappingsChanged: g,
        onMappingsSet: b,
        onBack: H
      }
    ),
    c === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ h("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
      /* @__PURE__ */ h("div", { className: "hc:flex-none", children: /* @__PURE__ */ h(
        qw,
        {
          idPrefix: a,
          sheetCountDict: w,
          onSheetChange: (L) => l({ type: "SHEET_CHANGED", payload: { sheetId: L } })
        }
      ) }),
      /* @__PURE__ */ h(
        "div",
        {
          className: "hc:flex-1 hc:overflow-auto",
          role: "tabpanel",
          id: `${a}-tabpanel-${u}`,
          "aria-labelledby": `${a}-tab-${u}`,
          tabIndex: 0,
          children: /* @__PURE__ */ h(
            Pw,
            {
              data: v,
              sheetDefinition: m,
              sheetValidationErrors: f.filter(
                (L) => L.sheetId === (m == null ? void 0 : m.id)
              ),
              setRowData: C,
              setRowsData: R,
              removeRows: N,
              addEmptyRow: D,
              resetState: M,
              undo: k,
              redo: $,
              canUndo: T.canUndo,
              canRedo: T.canRedo,
              enumLabelDict: _
            }
          )
        }
      ),
      /* @__PURE__ */ h("div", { className: "hc:flex-none", children: v.rows.length > 0 && /* @__PURE__ */ h("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
        /* @__PURE__ */ h("div", { children: p != null && n.includes("backToPreviousStep") && /* @__PURE__ */ h(
          Yw,
          {
            onBackToMapping: V
          }
        ) }),
        /* @__PURE__ */ h(
          at,
          {
            tooltipText: S,
            hidden: !y,
            children: /* @__PURE__ */ h(Ve, { onClick: O, disabled: y, children: r("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (c === "submit" || c === "failed" || c === "completed") && /* @__PURE__ */ h(
      jw,
      {
        onRetry: O,
        onBackToPreview: A,
        resetState: M,
        enumLabelDict: _
      }
    )
  ] }) });
}
function Hs(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...Dg]
  };
  return /* @__PURE__ */ h(km, { importerDefintion: t, children: /* @__PURE__ */ h(
    v0,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ h(zm, { children: /* @__PURE__ */ h(ty, { ...t }) })
    }
  ) });
}
function sy(e, t) {
  const n = gu(e);
  return n.render(B(Hs, t)), {
    render: (r) => n.render(B(Hs, r)),
    unmount: () => n.unmount()
  };
}
export {
  iy as CsvImporterStateBuilder,
  Dg as availableActionList,
  Hs as default,
  Rr as isDateLikeColumn,
  sy as renderImporter
};
