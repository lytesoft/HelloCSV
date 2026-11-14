var pc = Object.defineProperty;
var mc = (e, t, n) => t in e ? pc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ye = (e, t, n) => mc(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Re, Component as At, createElement as B, Fragment as pe, toChildArray as vt, render as Un, createRef as tr, createContext as me, cloneElement as gc, hydrate as vc } from "preact";
var dt, ve, Cr, ci, Gt = 0, xs = [], xe = Re, ui = xe.__b, di = xe.__r, fi = xe.diffed, hi = xe.__c, pi = xe.unmount, mi = xe.__;
function Nt(e, t) {
  xe.__h && xe.__h(ve, e, Gt || t), Gt = 0;
  var n = ve.__H || (ve.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function Y(e) {
  return Gt = 1, et(Ss, e);
}
function et(e, t, n) {
  var r = Nt(dt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Ss(void 0, t), function(l) {
    var a = r.__N ? r.__N[0] : r.__[0], c = r.t(a, l);
    a !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = ve, !ve.u)) {
    var o = function(l, a, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(p) {
        return !!p.__c;
      });
      if (u.every(function(p) {
        return !p.__N;
      })) return !i || i.call(this, l, a, c);
      var h = r.__c.props !== l;
      return u.forEach(function(p) {
        if (p.__N) {
          var d = p.__[0];
          p.__ = p.__N, p.__N = void 0, d !== p.__[0] && (h = !0);
        }
      }), i && i.call(this, l, a, c) || h;
    };
    ve.u = !0;
    var i = ve.shouldComponentUpdate, s = ve.componentWillUpdate;
    ve.componentWillUpdate = function(l, a, c) {
      if (this.__e) {
        var u = i;
        i = void 0, o(l, a, c), i = u;
      }
      s && s.call(this, l, a, c);
    }, ve.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function se(e, t) {
  var n = Nt(dt++, 3);
  !xe.__s && Eo(n.__H, t) && (n.__ = e, n.i = t, ve.__H.__h.push(n));
}
function We(e, t) {
  var n = Nt(dt++, 4);
  !xe.__s && Eo(n.__H, t) && (n.__ = e, n.i = t, ve.__h.push(n));
}
function U(e) {
  return Gt = 5, ne(function() {
    return { current: e };
  }, []);
}
function Co(e, t, n) {
  Gt = 6, We(function() {
    return typeof e == "function" ? (e(t()), function() {
      return e(null);
    }) : e ? (e.current = t(), function() {
      return e.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(e));
}
function ne(e, t) {
  var n = Nt(dt++, 7);
  return Eo(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function ee(e, t) {
  return Gt = 8, ne(function() {
    return e;
  }, t);
}
function fe(e) {
  var t = ve.context[e.__c], n = Nt(dt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ve)), t.props.value) : e.__;
}
function _o(e, t) {
  xe.useDebugValue && xe.useDebugValue(t ? t(e) : e);
}
function wc(e) {
  var t = Nt(dt++, 10), n = Y();
  return t.__ = e, ve.componentDidCatch || (ve.componentDidCatch = function(r, o) {
    t.__ && t.__(r, o), n[1](r);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function Ie() {
  var e = Nt(dt++, 11);
  if (!e.__) {
    for (var t = ve.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function yc() {
  for (var e; e = xs.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Ln), e.__H.__h.forEach(Wr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], xe.__e(t, e.__v);
  }
}
xe.__b = function(e) {
  ve = null, ui && ui(e);
}, xe.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), mi && mi(e, t);
}, xe.__r = function(e) {
  di && di(e), dt = 0;
  var t = (ve = e.__c).__H;
  t && (Cr === ve ? (t.__h = [], ve.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Ln), t.__h.forEach(Wr), t.__h = [], dt = 0)), Cr = ve;
}, xe.diffed = function(e) {
  fi && fi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (xs.push(t) !== 1 && ci === xe.requestAnimationFrame || ((ci = xe.requestAnimationFrame) || bc)(yc)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), Cr = ve = null;
}, xe.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ln), n.__h = n.__h.filter(function(r) {
        return !r.__ || Wr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], xe.__e(r, n.__v);
    }
  }), hi && hi(e, t);
}, xe.unmount = function(e) {
  pi && pi(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ln(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && xe.__e(t, n.__v));
};
var gi = typeof requestAnimationFrame == "function";
function bc(e) {
  var t, n = function() {
    clearTimeout(r), gi && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  gi && (t = requestAnimationFrame(n));
}
function Ln(e) {
  var t = ve, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ve = t;
}
function Wr(e) {
  var t = ve;
  e.__c = e.__(), ve = t;
}
function Eo(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Ss(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cs(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Gr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function nr(e, t) {
  var n = t(), r = Y({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return We(function() {
    o.__ = n, o.u = t, _r(o) && i({ t: o });
  }, [e, n, t]), se(function() {
    return _r(o) && i({ t: o }), e(function() {
      _r(o) && i({ t: o });
    });
  }, [e]), n;
}
function _r(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function Ro(e) {
  e();
}
function $o(e) {
  return e;
}
function To() {
  return [!1, Ro];
}
var Mo = We;
function Wn(e, t) {
  this.props = e, this.context = t;
}
function _s(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : Gr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, B(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(Wn.prototype = new At()).isPureReactComponent = !0, Wn.prototype.shouldComponentUpdate = function(e, t) {
  return Gr(this.props, e) || Gr(this.state, t);
};
var vi = Re.__b;
Re.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), vi && vi(e);
};
var xc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function de(e) {
  function t(n) {
    var r = Cs({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = xc, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var wi = function(e, t) {
  return e == null ? null : vt(vt(e).map(t));
}, Es = { map: wi, forEach: wi, count: function(e) {
  return e ? vt(e).length : 0;
}, only: function(e) {
  var t = vt(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: vt }, Sc = Re.__e;
Re.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  Sc(e, t, n, r);
};
var yi = Re.unmount;
function Rs(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = Cs({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return Rs(r, t, n);
  })), e;
}
function $s(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return $s(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function un() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Ts(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ms(e) {
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
function Bt() {
  this.i = null, this.l = null;
}
Re.unmount = function(e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), yi && yi(e);
}, (un.prototype = new At()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Ts(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = $s(a, a.__c.__P, a.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.o.pop(); ) c.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, un.prototype.componentWillUnmount = function() {
  this.o = [];
}, un.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = Rs(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && B(pe, null, e.fallback);
  return o && (o.__u &= -33), [B(pe, null, t.__a ? null : e.children), o];
};
var bi = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Cc(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function _c(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    Un(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), Un(B(Cc, { context: t.context }, e.__v), t.v);
}
function Zt(e, t) {
  var n = B(_c, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Bt.prototype = new At()).__a = function(e) {
  var t = this, n = Ts(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), bi(t, e, r)) : o();
    };
    n ? n(i) : i();
  };
}, Bt.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = vt(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var n = t.length; n--; ) this.l.set(t[n], this.i = [1, 0, this.i]);
  return e.children;
}, Bt.prototype.componentDidUpdate = Bt.prototype.componentDidMount = function() {
  var e = this;
  this.l.forEach(function(t, n) {
    bi(e, n, t);
  });
};
var Os = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ec = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Rc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, $c = /[A-Z0-9]/g, Tc = typeof document < "u", Mc = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Oo(e, t, n) {
  return t.__k == null && (t.textContent = ""), Un(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Is(e, t, n) {
  return vc(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
At.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(At.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var xi = Re.event;
function Oc() {
}
function Ic() {
  return this.cancelBubble;
}
function Ac() {
  return this.defaultPrevented;
}
Re.event = function(e) {
  return xi && (e = xi(e)), e.persist = Oc, e.isPropagationStopped = Ic, e.isDefaultPrevented = Ac, e.nativeEvent = e;
};
var Io, Dc = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Si = Re.vnode;
Re.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var l = n[s];
      if (!(s === "value" && "defaultValue" in n && l == null || Tc && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : a === "translate" && l === "no" ? l = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Mc(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : Rc.test(s) && (s = a) : a = s = "oninput" : i && Ec.test(s) ? s = s.replace($c, "-$&").toLowerCase() : l === null && (l = void 0), a === "oninput" && o[s = a] && (s = "oninputCapture"), o[s] = l;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = vt(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = vt(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Dc)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Os, Si && Si(e);
};
var Ci = Re.__r;
Re.__r = function(e) {
  Ci && Ci(e), Io = e.__c;
};
var _i = Re.diffed;
Re.diffed = function(e) {
  _i && _i(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Io = null;
};
var As = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Io.__n[e.__c].props.value;
}, useCallback: ee, useContext: fe, useDebugValue: _o, useDeferredValue: $o, useEffect: se, useId: Ie, useImperativeHandle: Co, useInsertionEffect: Mo, useLayoutEffect: We, useMemo: ne, useReducer: et, useRef: U, useState: Y, useSyncExternalStore: nr, useTransition: To } } }, Fc = "18.3.1";
function Ds(e) {
  return B.bind(null, e);
}
function Xt(e) {
  return !!e && e.$$typeof === Os;
}
function Fs(e) {
  return Xt(e) && e.type === pe;
}
function Ps(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Ao(e) {
  return Xt(e) ? gc.apply(null, arguments) : e;
}
function Do(e) {
  return !!e.__k && (Un(null, e), !0);
}
function Ns(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var ks = function(e, t) {
  return e(t);
}, ke = function(e, t) {
  return e(t);
}, Ls = pe, Vs = Xt, K = { useState: Y, useId: Ie, useReducer: et, useEffect: se, useLayoutEffect: We, useInsertionEffect: Mo, useTransition: To, useDeferredValue: $o, useSyncExternalStore: nr, startTransition: Ro, useRef: U, useImperativeHandle: Co, useMemo: ne, useCallback: ee, useContext: fe, useDebugValue: _o, version: "18.3.1", Children: Es, render: Oo, hydrate: Is, unmountComponentAtNode: Do, createPortal: Zt, createElement: B, createContext: me, createFactory: Ds, cloneElement: Ao, createRef: tr, Fragment: pe, isValidElement: Xt, isElement: Vs, isFragment: Fs, isMemo: Ps, findDOMNode: Ns, Component: At, PureComponent: Wn, memo: _s, forwardRef: de, flushSync: ke, unstable_batchedUpdates: ks, StrictMode: Ls, Suspense: un, SuspenseList: Bt, lazy: Ms, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: As };
const qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Es,
  Component: At,
  Fragment: pe,
  PureComponent: Wn,
  StrictMode: Ls,
  Suspense: un,
  SuspenseList: Bt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: As,
  cloneElement: Ao,
  createContext: me,
  createElement: B,
  createFactory: Ds,
  createPortal: Zt,
  createRef: tr,
  default: K,
  findDOMNode: Ns,
  flushSync: ke,
  forwardRef: de,
  hydrate: Is,
  isElement: Vs,
  isFragment: Fs,
  isMemo: Ps,
  isValidElement: Xt,
  lazy: Ms,
  memo: _s,
  render: Oo,
  startTransition: Ro,
  unmountComponentAtNode: Do,
  unstable_batchedUpdates: ks,
  useCallback: ee,
  useContext: fe,
  useDebugValue: _o,
  useDeferredValue: $o,
  useEffect: se,
  useErrorBoundary: wc,
  useId: Ie,
  useImperativeHandle: Co,
  useInsertionEffect: Mo,
  useLayoutEffect: We,
  useMemo: ne,
  useReducer: et,
  useRef: U,
  useState: Y,
  useSyncExternalStore: nr,
  useTransition: To,
  version: Fc
}, Symbol.toStringTag, { value: "Module" }));
function Pc(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      Oo(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      Do(e);
    }
  };
}
var Nc = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, l, a = t;
  if ("ref" in a) for (l in a = {}, t) l == "ref" ? s = t[l] : a[l] = t[l];
  var c = { type: e, props: a, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Nc, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) a[l] === void 0 && (a[l] = s[l]);
  return Re.vnode && Re.vnode(c), c;
}
function Hs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hs(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function kc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hs(e)) && (r && (r += " "), r += t);
  return r;
}
const Ei = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ri = kc, St = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Ri(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], h = i == null ? void 0 : i[c];
    if (u === null) return null;
    const p = Ei(u) || Ei(h);
    return o[c][p];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [h, p] = u;
    return p === void 0 || (c[h] = p), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: h, className: p, ...d } = u;
    return Object.entries(d).every((v) => {
      let [w, g] = v;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...l
      }[w]) : {
        ...i,
        ...l
      }[w] === g;
    }) ? [
      ...c,
      h,
      p
    ] : c;
  }, []);
  return Ri(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Lc = St(
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
  const i = Lc({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ f(
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
const Vc = St(
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
), zs = de(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = Vc({ variant: n, withPadding: r });
    return /* @__PURE__ */ f("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function Bs({ checked: e, setChecked: t, label: n }) {
  const r = Ie();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:gap-3", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex hc:h-6 hc:shrink-0 hc:items-center", children: /* @__PURE__ */ f("div", { className: "hc:group hc:grid hc:size-4 hc:grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "hc:checked:border-hello-csv-primary hc:checked:bg-hello-csv-primary hc:indeterminate:border-hello-csv-primary hc:indeterminate:bg-hello-csv-primary hc:focus-visible:outline-hello-csv-primary hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:disabled:border-hello-csv-border-strong hc:disabled:bg-hello-csv-surface-sunken hc:disabled:checked:bg-hello-csv-surface-sunken hc:col-start-1 hc:row-start-1 hc:appearance-none hc:rounded-sm hc:border hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ f(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "hc:stroke-hello-csv-primary-contrast hc:group-has-disabled:stroke-hello-csv-text-subtle hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:size-3.5 hc:self-center hc:justify-self-center",
          children: [
            /* @__PURE__ */ f(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "hc:opacity-0 hc:group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ f(
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
    n && /* @__PURE__ */ f("div", { className: "hc:text-sm/6", children: /* @__PURE__ */ f("label", { htmlFor: r, className: "hc:text-hello-csv-text hc:font-medium", children: n }) })
  ] });
}
let Hc = !1;
function Fo() {
  return Hc;
}
const js = typeof document < "u" ? K.useLayoutEffect : () => {
};
function zc(e) {
  const t = U(null);
  return js(() => {
    t.current = e;
  }, [
    e
  ]), ee((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Ct = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Tt = (e) => e && "window" in e && e.window === e ? e : Ct(e).defaultView || window;
function Bc(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function jc(e) {
  return Bc(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function Us(e, t) {
  if (!Fo()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : jc(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Yr = (e = document) => {
  var t;
  if (!Fo()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Ws(e) {
  return Fo() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Uc(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Wc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Gs(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Gc = Gs(function() {
  return Wc(/^Mac/i);
}), qc = Gs(function() {
  return Uc(/Android/i);
});
function qs() {
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
function Yc(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : qc() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ys(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Kc(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ks(e) {
  let t = U({
    isFocused: !1,
    observer: null
  });
  js(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = zc((r) => {
    e == null || e(r);
  });
  return ee((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = Ys(s);
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
let Zc = !1, xn = null, Kr = /* @__PURE__ */ new Set(), dn = /* @__PURE__ */ new Map(), Dt = !1, Zr = !1;
const Xc = {
  Tab: !0,
  Escape: !0
};
function Po(e, t) {
  for (let n of Kr) n(e, t);
}
function Jc(e) {
  return !(e.metaKey || !Gc() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Gn(e) {
  Dt = !0, Jc(e) && (xn = "keyboard", Po("keyboard", e));
}
function Ut(e) {
  xn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Dt = !0, Po("pointer", e));
}
function Zs(e) {
  Yc(e) && (Dt = !0, xn = "virtual");
}
function Xs(e) {
  e.target === window || e.target === document || Zc || !e.isTrusted || (!Dt && !Zr && (xn = "virtual", Po("virtual", e)), Dt = !1, Zr = !1);
}
function Js() {
  Dt = !1, Zr = !0;
}
function Xr(e) {
  if (typeof window > "u" || dn.get(Tt(e))) return;
  const t = Tt(e), n = Ct(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Dt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Gn, !0), n.addEventListener("keyup", Gn, !0), n.addEventListener("click", Zs, !0), t.addEventListener("focus", Xs, !0), t.addEventListener("blur", Js, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Ut, !0), n.addEventListener("pointermove", Ut, !0), n.addEventListener("pointerup", Ut, !0)), t.addEventListener("beforeunload", () => {
    Qs(e);
  }, {
    once: !0
  }), dn.set(t, {
    focus: r
  });
}
const Qs = (e, t) => {
  const n = Tt(e), r = Ct(e);
  t && r.removeEventListener("DOMContentLoaded", t), dn.has(n) && (n.HTMLElement.prototype.focus = dn.get(n).focus, r.removeEventListener("keydown", Gn, !0), r.removeEventListener("keyup", Gn, !0), r.removeEventListener("click", Zs, !0), n.removeEventListener("focus", Xs, !0), n.removeEventListener("blur", Js, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Ut, !0), r.removeEventListener("pointermove", Ut, !0), r.removeEventListener("pointerup", Ut, !0)), dn.delete(n));
};
function Qc(e) {
  const t = Ct(e);
  let n;
  return t.readyState !== "loading" ? Xr(e) : (n = () => {
    Xr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Qs(e, n);
}
typeof document < "u" && Qc();
function el() {
  return xn !== "pointer";
}
const eu = /* @__PURE__ */ new Set([
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
function tu(e, t, n) {
  let r = Ct(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? Tt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !eu.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Xc[n.key]);
}
function nu(e, t, n) {
  Xr(), se(() => {
    let r = (o, i) => {
      tu(!!(n != null && n.isTextInput), o, i) && e(el());
    };
    return Kr.add(r), () => {
      Kr.delete(r);
    };
  }, t);
}
function ru(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ee((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = Ks(i), l = ee((a) => {
    const c = Ct(a.target), u = c ? Yr(c) : Yr();
    a.target === a.currentTarget && u === Ws(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
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
function ou(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = U({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = qs(), a = ee((h) => {
    h.currentTarget.contains(h.target) && i.current.isFocusWithin && !h.currentTarget.contains(h.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(h), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), c = Ks(a), u = ee((h) => {
    if (!h.currentTarget.contains(h.target)) return;
    const p = Ct(h.target), d = Yr(p);
    if (!i.current.isFocusWithin && d === Ws(h.nativeEvent)) {
      r && r(h), o && o(!0), i.current.isFocusWithin = !0, c(h);
      let v = h.currentTarget;
      s(p, "focus", (w) => {
        if (i.current.isFocusWithin && !Us(v, w.target)) {
          let g = new p.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          Kc(g, v);
          let C = Ys(g);
          a(C);
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
let Jr = !1, Er = 0;
function iu() {
  Jr = !0, setTimeout(() => {
    Jr = !1;
  }, 50);
}
function $i(e) {
  e.pointerType === "touch" && iu();
}
function su() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", $i), Er++, () => {
      Er--, !(Er > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", $i);
    };
}
function tl(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = Y(!1), l = U({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(su, []);
  let { addGlobalListener: a, removeAllGlobalListeners: c } = qs(), { hoverProps: u, triggerHoverEnd: h } = ne(() => {
    let p = (w, g) => {
      if (l.pointerType = g, o || g === "touch" || l.isHovered || !w.currentTarget.contains(w.target)) return;
      l.isHovered = !0;
      let C = w.currentTarget;
      l.target = C, a(Ct(w.target), "pointerover", (x) => {
        l.isHovered && l.target && !Us(l.target, x.target) && d(x, x.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: C,
        pointerType: g
      }), n && n(!0), s(!0);
    }, d = (w, g) => {
      let C = l.target;
      l.pointerType = "", l.target = null, !(g === "touch" || !l.isHovered || !C) && (l.isHovered = !1, c(), r && r({
        type: "hoverend",
        target: C,
        pointerType: g
      }), n && n(!1), s(!1));
    }, v = {};
    return typeof PointerEvent < "u" && (v.onPointerEnter = (w) => {
      Jr && w.pointerType === "mouse" || p(w, w.pointerType);
    }, v.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && d(w, w.pointerType);
    }), {
      hoverProps: v,
      triggerHoverEnd: d
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
    o && h({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function nl(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = U({
    isFocused: !1,
    isFocusVisible: t || el()
  }), [i, s] = Y(!1), [l, a] = Y(() => o.current.isFocused && o.current.isFocusVisible), c = ee(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = ee((d) => {
    o.current.isFocused = d, s(d), c();
  }, [
    c
  ]);
  nu((d) => {
    o.current.isFocusVisible = d, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: h } = ru({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: p } = ou({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? p : h
  };
}
var lu = Object.defineProperty, au = (e, t, n) => t in e ? lu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rr = (e, t, n) => (au(e, typeof t != "symbol" ? t + "" : t, n), n);
let cu = class {
  constructor() {
    Rr(this, "current", this.detect()), Rr(this, "handoffState", "pending"), Rr(this, "currentId", 0);
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
}, It = new cu();
function Jt(e) {
  return It.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function rr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Je() {
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
    return rr(() => {
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
    let r = Je();
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
function kt() {
  let [e] = Y(Je);
  return se(() => () => e.dispose(), [e]), e;
}
let he = (e, t) => {
  It.isServer ? se(e, t) : We(e, t);
};
function _t(e) {
  let t = U(e);
  return he(() => {
    t.current = e;
  }, [e]), t;
}
let Q = function(e) {
  let t = _t(e);
  return K.useCallback((...n) => t.current(...n), [t]);
};
function uu(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function du(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function fu({ disabled: e = !1 } = {}) {
  let t = U(null), [n, r] = Y(!1), o = kt(), i = Q(() => {
    t.current = null, r(!1), o.dispose();
  }), s = Q((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = Jt(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (c) => {
          if (t.current) {
            let u = uu(c);
            r(du(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let hu = me(void 0);
function No() {
  return fe(hu);
}
function Qr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ne(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ne), r;
}
var qt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qt || {}), mt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(mt || {});
function Ee() {
  let e = mu();
  return ee((t) => pu({ mergeRefs: e, ...t }), [e]);
}
function pu({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? gu;
  let a = rl(t, e);
  if (i) return On(a, n, r, s, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...h } = a;
    if (u) return On(h, n, r, s, l);
  }
  if (c & 1) {
    let { unmount: u = !0, ...h } = a;
    return Ne(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return On({ ...h, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return On(a, n, r, s, l);
}
function On(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = $r(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, u = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let h = {};
  if (t) {
    let p = !1, d = [];
    for (let [v, w] of Object.entries(t)) typeof w == "boolean" && (p = !0), w === !0 && d.push(v.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (p) {
      h["data-headlessui-state"] = d.join(" ");
      for (let v of d) h[`data-${v}`] = "";
    }
  }
  if (i === pe && (Object.keys(pt(a)).length > 0 || Object.keys(pt(h)).length > 0)) if (!Xt(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(pt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(pt(a)).concat(Object.keys(pt(h))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = u.props, d = p == null ? void 0 : p.className, v = typeof d == "function" ? (...C) => Qr(d(...C), a.className) : Qr(d, a.className), w = v ? { className: v } : {}, g = rl(u.props, pt($r(a, ["ref"])));
    for (let C in h) C in g && delete h[C];
    return Ao(u, Object.assign({}, g, h, c, { ref: o(vu(u), c.ref) }, w));
  }
  return B(i, Object.assign({}, $r(a, ["ref"]), i !== pe && c, i !== pe && h), u);
}
function mu() {
  let e = U([]), t = ee((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function gu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function rl(...e) {
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
function ko(...e) {
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
  return Object.assign(de(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function pt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function $r(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function vu(e) {
  return K.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function wu(e, t, n) {
  let [r, o] = Y(n), i = e !== void 0, s = U(i), l = U(!1), a = U(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Q((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function yu(e) {
  let [t] = Y(e);
  return t;
}
function ol(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) sl(n, il(t, r), o);
  return n;
}
function il(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function sl(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) sl(e, il(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : ol(n, t, e);
}
let bu = "span";
var Yt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Yt || {});
function xu(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ee()({ ourProps: i, theirProps: o, slot: {}, defaultTag: bu, name: "Hidden" });
}
let gn = Ce(xu), Su = me(null);
function Cu({ children: e }) {
  let t = fe(Su);
  if (!t) return K.createElement(K.Fragment, null, e);
  let { target: n } = t;
  return n ? Zt(K.createElement(K.Fragment, null, e), n) : null;
}
function _u({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = Y(null), l = kt();
  return se(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), K.createElement(Cu, null, K.createElement(Eu, { setForm: s, formId: t }), ol(e).map(([a, c]) => K.createElement(gn, { features: Yt.Hidden, ...pt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: c, ...o }) })));
}
function Eu({ setForm: e, formId: t }) {
  return se(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : K.createElement(gn, { features: Yt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let Ru = me(void 0);
function ll() {
  return fe(Ru);
}
function $u(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Tu(n) ? !1 : r;
}
function Tu(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let al = Symbol();
function Mu(e, t = !0) {
  return Object.assign(e, { [al]: t });
}
function Fe(...e) {
  let t = U(e);
  se(() => {
    t.current = e;
  }, [e]);
  let n = Q((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[al])) ? void 0 : n;
}
let or = me(null);
or.displayName = "DescriptionContext";
function cl() {
  let e = fe(or);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, cl), t;
  }
  return e;
}
function Ou() {
  var e, t;
  return (t = (e = fe(or)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Iu() {
  let [e, t] = Y([]);
  return [e.length > 0 ? e.join(" ") : void 0, ne(() => function(n) {
    let r = Q((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ne(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return K.createElement(or.Provider, { value: o }, n.children);
  }, [t])];
}
let Au = "p";
function Du(e, t) {
  let n = Ie(), r = No(), { id: o = `headlessui-description-${n}`, ...i } = e, s = cl(), l = Fe(t);
  he(() => s.register(o), [o, s.register]);
  let a = r || !1, c = ne(() => ({ ...s.slot, disabled: a }), [s.slot, a]), u = { ref: l, ...s.props, id: o };
  return Ee()({ ourProps: u, theirProps: i, slot: c, defaultTag: Au, name: s.name || "Description" });
}
let Fu = Ce(Du), Pu = Object.assign(Fu, {});
var Me = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Me || {});
let ir = me(null);
ir.displayName = "LabelContext";
function ul() {
  let e = fe(ir);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ul), t;
  }
  return e;
}
function sr(e) {
  var t, n, r;
  let o = (n = (t = fe(ir)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Nu({ inherit: e = !1 } = {}) {
  let t = sr(), [n, r] = Y([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ne(() => function(i) {
    let s = Q((a) => (r((c) => [...c, a]), () => r((c) => {
      let u = c.slice(), h = u.indexOf(a);
      return h !== -1 && u.splice(h, 1), u;
    }))), l = ne(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return K.createElement(ir.Provider, { value: l }, i.children);
  }, [r])];
}
let ku = "label";
function Lu(e, t) {
  var n;
  let r = Ie(), o = ul(), i = ll(), s = No(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...u } = e, h = Fe(t);
  he(() => o.register(l), [l, o.register]);
  let p = Q((g) => {
    let C = g.currentTarget;
    if (C instanceof HTMLLabelElement && g.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(g), C instanceof HTMLLabelElement) {
      let x = document.getElementById(C.htmlFor);
      if (x) {
        let S = x.getAttribute("disabled");
        if (S === "true" || S === "") return;
        let E = x.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (x instanceof HTMLInputElement && (x.type === "radio" || x.type === "checkbox") || x.role === "radio" || x.role === "checkbox" || x.role === "switch") && x.click(), x.focus({ preventScroll: !0 });
      }
    }
  }), d = s || !1, v = ne(() => ({ ...o.slot, disabled: d }), [o.slot, d]), w = { ref: h, ...o.props, id: l, htmlFor: a, onClick: p };
  return c && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Ee()({ ourProps: w, theirProps: u, slot: v, defaultTag: a ? ku : "div", name: o.name || "Label" });
}
let Vu = Ce(Lu), Hu = Object.assign(Vu, {}), zu = me(() => {
});
function Bu({ value: e, children: t }) {
  return K.createElement(zu.Provider, { value: e }, t);
}
function zt(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, l, a, c;
    let u;
    n.key && ((s = n.debug) != null && s.call(n)) && (u = Date.now());
    const h = e();
    if (!(h.length !== r.length || h.some((v, w) => r[w] !== v)))
      return o;
    r = h;
    let d;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now()), o = t(...h), n.key && ((a = n.debug) != null && a.call(n))) {
      const v = Math.round((Date.now() - u) * 100) / 100, w = Math.round((Date.now() - d) * 100) / 100, g = w / 16, C = (x, S) => {
        for (x = String(x); x.length < S; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${C(w, 5)} /${C(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
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
function Ti(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ju = (e, t) => Math.abs(e - t) <= 1, Uu = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var sn = { NODE_ENV: "production" };
const Mi = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Wu = (e) => e, Gu = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, qu = (e, t) => {
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
  if (o(Mi(n)), !r.ResizeObserver)
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
      o(Mi(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Oi = {
  passive: !0
}, Ii = typeof window > "u" ? !0 : "onscrollend" in window, Yu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && Ii ? () => {
  } : Uu(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (u) => () => {
    const { horizontal: h, isRtl: p } = e.options;
    o = h ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, u);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, Oi);
  const c = e.options.useScrollendEvent && Ii;
  return c && n.addEventListener("scrollend", a, Oi), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
  };
}, Ku = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Zu = (e, {
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
class Xu {
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
        getItemKey: Wu,
        rangeExtractor: Gu,
        onChange: () => {
        },
        measureElement: Ku,
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
    }, this.maybeNotify = zt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: sn.NODE_ENV !== "production",
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
    }, this.getMeasurementOptions = zt(
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
    ), this.getMeasurements = zt(
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
          const h = i(u), p = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), d = p ? p.end + this.options.gap : r + o, v = l.get(h), w = typeof v == "number" ? v : this.options.estimateSize(u), g = d + w, C = p ? p.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: d,
            size: w,
            end: g,
            key: h,
            lane: C
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: sn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = zt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Ju({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: sn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = zt(
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
        key: sn.NODE_ENV !== "production",
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
    }, this.getVirtualItems = zt(
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
        key: sn.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Ti(
          r[dl(
            0,
            r.length - 1,
            (o) => Ti(r[o]).start,
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
          const [u] = c, h = this.getScrollOffset();
          ju(u, h) || this.scrollToIndex(n, { align: l, behavior: o });
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
const dl = (e, t, n, r) => {
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
function Ju({
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
  let s = dl(
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
const Ai = typeof document < "u" ? We : se;
function Qu(e) {
  const t = et(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? ke(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = Y(
    () => new Xu(n)
  );
  return r.setOptions(n), Ai(() => r._didMount(), []), Ai(() => r._willUpdate()), r;
}
function fl(e) {
  return Qu({
    observeElementRect: qu,
    observeElementOffset: Yu,
    scrollToFn: Zu,
    ...e
  });
}
function ed(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function td(e = ed) {
  return ee((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function nd(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Di(e, t = !1) {
  let [n, r] = et(() => ({}), {}), o = ne(() => nd(e), [e, n]);
  return he(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let rd = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function hl(e, t) {
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
function pl(e) {
  return nr(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let od = new rd(() => hl(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Qt(e, t) {
  let n = od.get(t), r = Ie(), o = pl(n);
  if (he(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let eo = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map();
function Fi(e) {
  var t;
  let n = (t = fn.get(e)) != null ? t : 0;
  return fn.set(e, n + 1), n !== 0 ? () => Pi(e) : (eo.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Pi(e));
}
function Pi(e) {
  var t;
  let n = (t = fn.get(e)) != null ? t : 1;
  if (n === 1 ? fn.delete(e) : fn.set(e, n - 1), n !== 1) return;
  let r = eo.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, eo.delete(e));
}
function ml(e, { allowed: t, disallowed: n } = {}) {
  let r = Qt(e, "inert-others");
  he(() => {
    var o, i;
    if (!r) return;
    let s = Je();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(Fi(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let c = Jt(a);
      if (!c) continue;
      let u = a.parentElement;
      for (; u && u !== c.body; ) {
        for (let h of u.children) l.some((p) => h.contains(p)) || s.add(Fi(h));
        u = u.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function gl(e, t, n) {
  let r = _t((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  se(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Je();
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
let qn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), id = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var at = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(at || {}), to = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(to || {}), sd = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(sd || {});
function ld(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ad(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(id)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var vl = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(vl || {});
function cd(e, t = 0) {
  var n;
  return e === ((n = Jt(e)) == null ? void 0 : n.body) ? !1 : Ne(t, { 0() {
    return e.matches(qn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(qn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var ud = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ud || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ut(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let dd = ["textarea", "input"].join(",");
function fd(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, dd)) != null ? n : !1;
}
function wl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function hn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? wl(e) : e : t & 64 ? ad(e) : ld(e);
  o.length > 0 && s.length > 1 && (s = s.filter((d) => !o.some((v) => v != null && "current" in v ? (v == null ? void 0 : v.current) === d : v === d))), r = r ?? i.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, u = 0, h = s.length, p;
  do {
    if (u >= h || u + h <= 0) return 0;
    let d = a + u;
    if (t & 16) d = (d + h) % h;
    else {
      if (d < 0) return 3;
      if (d >= h) return 1;
    }
    p = s[d], p == null || p.focus(c), u += l;
  } while (p !== i.activeElement);
  return t & 6 && fd(p) && p.select(), 2;
}
function yl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function hd() {
  return /Android/gi.test(window.navigator.userAgent);
}
function bl() {
  return yl() || hd();
}
function ln(e, t, n, r) {
  let o = _t(n);
  se(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function xl(e, t, n, r) {
  let o = _t(n);
  se(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Ni = 30;
function Sl(e, t, n) {
  let r = Qt(e, "outside-click"), o = _t(n), i = ee(function(a, c) {
    if (a.defaultPrevented) return;
    let u = c(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let h = function p(d) {
      return typeof d == "function" ? p(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let p of h) if (p !== null && (p.contains(u) || a.composed && a.composedPath().includes(p))) return;
    return !cd(u, vl.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), s = U(null);
  ln(r, "pointerdown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), ln(r, "mousedown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), ln(r, "click", (a) => {
    bl() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = U({ x: 0, y: 0 });
  ln(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), ln(r, "touchend", (a) => {
    let c = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= Ni || Math.abs(c.y - l.current.y) >= Ni)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), xl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Lt(...e) {
  return ne(() => Jt(...e), [...e]);
}
function Lo(e, t, n, r) {
  let o = _t(n);
  se(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Cl(e) {
  let t = U({ value: "", selectionStart: null, selectionEnd: null });
  return Lo(e, "blur", (n) => {
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
function pd(e, t) {
  return ne(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function md() {
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
function gd() {
  return yl() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = Je();
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
function vd() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function wd(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Mt = hl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Je(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: wd(n) }, o = [gd(), md(), vd()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Mt.subscribe(() => {
  let e = Mt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Mt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Mt.dispatch("TEARDOWN", n);
  }
});
function yd(e, t, n = () => ({ containers: [] })) {
  let r = pl(Mt), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return he(() => {
    if (!(!t || !e)) return Mt.dispatch("PUSH", t, n), () => Mt.dispatch("POP", t, n);
  }, [e, t]), i;
}
function _l(e, t, n = () => [document.body]) {
  let r = Qt(e, "scroll-lock");
  yd(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function ki(e) {
  return [e.screenX, e.screenY];
}
function bd() {
  let e = U([-1, -1]);
  return { wasMoved(t) {
    let n = ki(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = ki(t);
  } };
}
function xd(e = 0) {
  let [t, n] = Y(e), r = ee((a) => n(a), [t]), o = ee((a) => n((c) => c | a), [t]), i = ee((a) => (t & a) === a, [t]), s = ee((a) => n((c) => c & ~a), [n]), l = ee((a) => n((c) => c ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var Sd = { NODE_ENV: "production" }, Li, Vi;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Li = process == null ? void 0 : Sd) == null ? void 0 : Li.NODE_ENV) === "test" && typeof ((Vi = Element == null ? void 0 : Element.prototype) == null ? void 0 : Vi.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Cd = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Cd || {});
function El(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Rl(e, t, n, r) {
  let [o, i] = Y(n), { hasFlag: s, addFlag: l, removeFlag: a } = xd(e && o ? 3 : 0), c = U(!1), u = U(!1), h = kt();
  return he(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), _d(t, { inFlight: c, prepare() {
        u.current ? u.current = !1 : u.current = c.current, c.current = !0, !u.current && (n ? (l(3), a(4)) : (l(4), a(2)));
      }, run() {
        u.current ? n ? (a(3), l(4)) : (a(4), l(3)) : n ? a(1) : l(1);
      }, done() {
        var d;
        u.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (c.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, h]), e ? [o, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function _d(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Je();
  return Rd(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(Ed(e, r));
    });
  }), i.dispose;
}
function Ed(e, t) {
  var n, r;
  let o = Je();
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
function Rd(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function $d(e, { container: t, accept: n, walk: r }) {
  let o = U(n), i = U(r);
  se(() => {
    o.current = n, i.current = r;
  }, [n, r]), he(() => {
    if (!t || !e) return;
    let s = Jt(t);
    if (!s) return;
    let l = o.current, a = i.current, c = Object.assign((h) => l(h), { acceptNode: l }), u = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, c, !1);
    for (; u.nextNode(); ) a(u.currentNode);
  }, [t, e, o, i]);
}
function vn(e, t) {
  let n = U([]), r = Q(e);
  se(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function lr() {
  return typeof window < "u";
}
function en(e) {
  return $l(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function tt(e) {
  var t;
  return (t = ($l(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $l(e) {
  return lr() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Ae(e) {
  return lr() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function Qe(e) {
  return lr() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function Hi(e) {
  return !lr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function Sn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Td(e) {
  return ["table", "td", "th"].includes(en(e));
}
function ar(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Vo(e) {
  const t = Ho(), n = Ae(e) ? Ue(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Md(e) {
  let t = yt(e);
  for (; Qe(t) && !Kt(t); ) {
    if (Vo(t))
      return t;
    if (ar(t))
      return null;
    t = yt(t);
  }
  return null;
}
function Ho() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(e) {
  return ["html", "body", "#document"].includes(en(e));
}
function Ue(e) {
  return Le(e).getComputedStyle(e);
}
function cr(e) {
  return Ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yt(e) {
  if (en(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hi(e) && e.host || // Fallback.
    tt(e)
  );
  return Hi(t) ? t.host : t;
}
function Tl(e) {
  const t = yt(e);
  return Kt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qe(t) && Sn(t) ? t : Tl(t);
}
function wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tl(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Le(o);
  if (i) {
    const l = no(s);
    return t.concat(s, s.visualViewport || [], Sn(o) ? o : [], l && n ? wn(l) : []);
  }
  return t.concat(o, wn(o, [], n));
}
function no(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Od() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Ft = Math.min, Oe = Math.max, yn = Math.round, In = Math.floor, Xe = (e) => ({
  x: e,
  y: e
}), Id = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ad = {
  start: "end",
  end: "start"
};
function zi(e, t, n) {
  return Oe(e, Ft(t, n));
}
function tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function Cn(e) {
  return e.split("-")[1];
}
function Ml(e) {
  return e === "x" ? "y" : "x";
}
function Ol(e) {
  return e === "y" ? "height" : "width";
}
function wt(e) {
  return ["top", "bottom"].includes(bt(e)) ? "y" : "x";
}
function Il(e) {
  return Ml(wt(e));
}
function Dd(e, t, n) {
  n === void 0 && (n = !1);
  const r = Cn(e), o = Il(e), i = Ol(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Yn(s)), [s, Yn(s)];
}
function Fd(e) {
  const t = Yn(e);
  return [ro(e), t, ro(t)];
}
function ro(e) {
  return e.replace(/start|end/g, (t) => Ad[t]);
}
function Pd(e, t, n) {
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
function Nd(e, t, n, r) {
  const o = Cn(e);
  let i = Pd(bt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ro)))), i;
}
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Id[t]);
}
function kd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ld(e) {
  return typeof e != "number" ? kd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kn(e) {
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
function Bi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = wt(t), s = Il(t), l = Ol(s), a = bt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (Cn(t)) {
    case "start":
      d[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const Vd = async (e, t, n) => {
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
    y: h
  } = Bi(c, r, a), p = r, d = {}, v = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: g,
      fn: C
    } = l[w], {
      x,
      y: S,
      data: E,
      reset: O
    } = await C({
      x: u,
      y: h,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: d,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, h = S ?? h, d = {
      ...d,
      [g]: {
        ...d[g],
        ...E
      }
    }, O && v <= 50 && (v++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (c = O.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: u,
      y: h
    } = Bi(c, p, a)), w = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: d
  };
};
async function ur(e, t) {
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
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = tn(t, e), v = Ld(d), g = l[p ? h === "floating" ? "reference" : "floating" : h], C = Kn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), x = h === "floating" ? {
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
  }, O = Kn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: x,
    offsetParent: S,
    strategy: a
  }) : x);
  return {
    top: (C.top - O.top + v.top) / E.y,
    bottom: (O.bottom - C.bottom + v.bottom) / E.y,
    left: (C.left - O.left + v.left) / E.x,
    right: (O.right - C.right + v.right) / E.x
  };
}
const Hd = function(e) {
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
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: w = !0,
        ...g
      } = tn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = bt(o), x = wt(l), S = bt(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), O = p || (S || !w ? [Yn(l)] : Fd(l)), N = v !== "none";
      !p && N && O.push(...Nd(l, w, v, E));
      const A = [l, ...O], b = await ur(t, g), m = [];
      let y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && m.push(b[C]), h) {
        const P = Dd(o, s, E);
        m.push(b[P[0]], b[P[1]]);
      }
      if (y = [...y, {
        placement: o,
        overflows: m
      }], !m.every((P) => P <= 0)) {
        var _, $;
        const P = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1, R = A[P];
        if (R) {
          var k;
          const M = h === "alignment" ? x !== wt(R) : !1, D = ((k = y[0]) == null ? void 0 : k.overflows[0]) > 0;
          if (!M || D)
            return {
              data: {
                index: P,
                overflows: y
              },
              reset: {
                placement: R
              }
            };
        }
        let T = ($ = y.filter((M) => M.overflows[0] <= 0).sort((M, D) => M.overflows[1] - D.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!T)
          switch (d) {
            case "bestFit": {
              var I;
              const M = (I = y.filter((D) => {
                if (N) {
                  const H = wt(D.placement);
                  return H === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((D, H) => D[1] - H[1])[0]) == null ? void 0 : I[0];
              M && (T = M);
              break;
            }
            case "initialPlacement":
              T = l;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
async function zd(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = bt(n), l = Cn(n), a = wt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && a ? -1 : 1, h = tn(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: v
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return l && typeof v == "number" && (d = l === "end" ? v * -1 : v), a ? {
    x: d * u,
    y: p * c
  } : {
    x: p * c,
    y: d * u
  };
}
const Bd = function(e) {
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
      } = t, a = await zd(t, e);
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
}, jd = function(e) {
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
          fn: (g) => {
            let {
              x: C,
              y: x
            } = g;
            return {
              x: C,
              y: x
            };
          }
        },
        ...a
      } = tn(e, t), c = {
        x: n,
        y: r
      }, u = await ur(t, a), h = wt(bt(o)), p = Ml(h);
      let d = c[p], v = c[h];
      if (i) {
        const g = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", x = d + u[g], S = d - u[C];
        d = zi(x, d, S);
      }
      if (s) {
        const g = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", x = v + u[g], S = v - u[C];
        v = zi(x, v, S);
      }
      const w = l.fn({
        ...t,
        [p]: d,
        [h]: v
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [p]: i,
            [h]: s
          }
        }
      };
    }
  };
}, Ud = function(e) {
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
      } = tn(e, t), u = await ur(t, c), h = bt(o), p = Cn(o), d = wt(o) === "y", {
        width: v,
        height: w
      } = i.floating;
      let g, C;
      h === "top" || h === "bottom" ? (g = h, C = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = h, g = p === "end" ? "top" : "bottom");
      const x = w - u.top - u.bottom, S = v - u.left - u.right, E = Ft(w - u[g], x), O = Ft(v - u[C], S), N = !t.middlewareData.shift;
      let A = E, b = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (b = S), (r = t.middlewareData.shift) != null && r.enabled.y && (A = x), N && !p) {
        const y = Oe(u.left, 0), _ = Oe(u.right, 0), $ = Oe(u.top, 0), k = Oe(u.bottom, 0);
        d ? b = v - 2 * (y !== 0 || _ !== 0 ? y + _ : Oe(u.left, u.right)) : A = w - 2 * ($ !== 0 || k !== 0 ? $ + k : Oe(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: b,
        availableHeight: A
      });
      const m = await s.getDimensions(l.floating);
      return v !== m.width || w !== m.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Al(e) {
  const t = Ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Qe(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = yn(n) !== i || yn(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function zo(e) {
  return Ae(e) ? e : e.contextElement;
}
function Wt(e) {
  const t = zo(e);
  if (!Qe(t))
    return Xe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Al(t);
  let s = (i ? yn(n.width) : n.width) / r, l = (i ? yn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Wd = /* @__PURE__ */ Xe(0);
function Dl(e) {
  const t = Le(e);
  return !Ho() || !t.visualViewport ? Wd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zo(e);
  let s = Xe(1);
  t && (r ? Ae(r) && (s = Wt(r)) : s = Wt(e));
  const l = Gd(i, n, r) ? Dl(i) : Xe(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, u = o.width / s.x, h = o.height / s.y;
  if (i) {
    const p = Le(i), d = r && Ae(r) ? Le(r) : r;
    let v = p, w = no(v);
    for (; w && r && d !== v; ) {
      const g = Wt(w), C = w.getBoundingClientRect(), x = Ue(w), S = C.left + (w.clientLeft + parseFloat(x.paddingLeft)) * g.x, E = C.top + (w.clientTop + parseFloat(x.paddingTop)) * g.y;
      a *= g.x, c *= g.y, u *= g.x, h *= g.y, a += S, c += E, v = Le(w), w = no(v);
    }
  }
  return Kn({
    width: u,
    height: h,
    x: a,
    y: c
  });
}
function Bo(e, t) {
  const n = cr(e).scrollLeft;
  return t ? t.left + n : Pt(tt(e)).left + n;
}
function Fl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Bo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function qd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = tt(r), l = t ? ar(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Xe(1);
  const u = Xe(0), h = Qe(r);
  if ((h || !h && !i) && ((en(r) !== "body" || Sn(s)) && (a = cr(r)), Qe(r))) {
    const d = Pt(r);
    c = Wt(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  const p = s && !h && !i ? Fl(s, a, !0) : Xe(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + p.y
  };
}
function Yd(e) {
  return Array.from(e.getClientRects());
}
function Kd(e) {
  const t = tt(e), n = cr(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bo(e);
  const l = -n.scrollTop;
  return Ue(r).direction === "rtl" && (s += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Zd(e, t) {
  const n = Le(e), r = tt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Ho();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Xd(e, t) {
  const n = Pt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Qe(e) ? Wt(e) : Xe(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function ji(e, t, n) {
  let r;
  if (t === "viewport")
    r = Zd(e, n);
  else if (t === "document")
    r = Kd(tt(e));
  else if (Ae(t))
    r = Xd(t, n);
  else {
    const o = Dl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Kn(r);
}
function Pl(e, t) {
  const n = yt(e);
  return n === t || !Ae(n) || Kt(n) ? !1 : Ue(n).position === "fixed" || Pl(n, t);
}
function Jd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wn(e, [], !1).filter((l) => Ae(l) && en(l) !== "body"), o = null;
  const i = Ue(e).position === "fixed";
  let s = i ? yt(e) : e;
  for (; Ae(s) && !Kt(s); ) {
    const l = Ue(s), a = Vo(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Sn(s) && !a && Pl(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = yt(s);
  }
  return t.set(e, r), r;
}
function Qd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ar(t) ? [] : Jd(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, u) => {
    const h = ji(t, u, o);
    return c.top = Oe(h.top, c.top), c.right = Ft(h.right, c.right), c.bottom = Ft(h.bottom, c.bottom), c.left = Oe(h.left, c.left), c;
  }, ji(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ef(e) {
  const {
    width: t,
    height: n
  } = Al(e);
  return {
    width: t,
    height: n
  };
}
function tf(e, t, n) {
  const r = Qe(t), o = tt(t), i = n === "fixed", s = Pt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Xe(0);
  function c() {
    a.x = Bo(o);
  }
  if (r || !r && !i)
    if ((en(t) !== "body" || Sn(o)) && (l = cr(t)), r) {
      const d = Pt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Fl(o, l) : Xe(0), h = s.left + l.scrollLeft - a.x - u.x, p = s.top + l.scrollTop - a.y - u.y;
  return {
    x: h,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Tr(e) {
  return Ue(e).position === "static";
}
function Ui(e, t) {
  if (!Qe(e) || Ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return tt(e) === n && (n = n.ownerDocument.body), n;
}
function Nl(e, t) {
  const n = Le(e);
  if (ar(e))
    return n;
  if (!Qe(e)) {
    let o = yt(e);
    for (; o && !Kt(o); ) {
      if (Ae(o) && !Tr(o))
        return o;
      o = yt(o);
    }
    return n;
  }
  let r = Ui(e, t);
  for (; r && Td(r) && Tr(r); )
    r = Ui(r, t);
  return r && Kt(r) && Tr(r) && !Vo(r) ? n : r || Md(e) || n;
}
const nf = async function(e) {
  const t = this.getOffsetParent || Nl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: tf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function rf(e) {
  return Ue(e).direction === "rtl";
}
const of = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qd,
  getDocumentElement: tt,
  getClippingRect: Qd,
  getOffsetParent: Nl,
  getElementRects: nf,
  getClientRects: Yd,
  getDimensions: ef,
  getScale: Wt,
  isElement: Ae,
  isRTL: rf
};
function kl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sf(e, t) {
  let n = null, r;
  const o = tt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: h,
      width: p,
      height: d
    } = c;
    if (l || t(), !p || !d)
      return;
    const v = In(h), w = In(o.clientWidth - (u + p)), g = In(o.clientHeight - (h + d)), C = In(u), S = {
      rootMargin: -v + "px " + -w + "px " + -g + "px " + -C + "px",
      threshold: Oe(0, Ft(1, a)) || 1
    };
    let E = !0;
    function O(N) {
      const A = N[0].intersectionRatio;
      if (A !== a) {
        if (!E)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !kl(c, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(O, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(O, S);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function lf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = zo(e), u = o || i ? [...c ? wn(c) : [], ...wn(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const h = c && l ? sf(c, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((C) => {
    let [x] = C;
    x && x.target === c && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = d) == null || S.observe(t);
    })), n();
  }), c && !a && d.observe(c), d.observe(t));
  let v, w = a ? Pt(e) : null;
  a && g();
  function g() {
    const C = Pt(e);
    w && !kl(w, C) && n(), w = C, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var C;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h == null || h(), (C = d) == null || C.disconnect(), d = null, a && cancelAnimationFrame(v);
  };
}
const Mr = ur, af = Bd, cf = jd, uf = Hd, df = Ud, ff = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: of,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Vd(e, t, {
    ...o,
    platform: i
  });
};
var Vn = typeof document < "u" ? We : se;
function Zn(e, t) {
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
        if (!Zn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Zn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ll(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wi(e, t) {
  const n = Ll(e);
  return Math.round(t * n) / n;
}
function Or(e) {
  const t = U(e);
  return Vn(() => {
    t.current = e;
  }), t;
}
function hf(e) {
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
  } = e, [u, h] = Y({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = Y(r);
  Zn(p, r) || d(r);
  const [v, w] = Y(null), [g, C] = Y(null), x = ee((M) => {
    M !== N.current && (N.current = M, w(M));
  }, []), S = ee((M) => {
    M !== A.current && (A.current = M, C(M));
  }, []), E = i || v, O = s || g, N = U(null), A = U(null), b = U(u), m = a != null, y = Or(a), _ = Or(o), $ = Or(c), k = ee(() => {
    if (!N.current || !A.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: p
    };
    _.current && (M.platform = _.current), ff(N.current, A.current, M).then((D) => {
      const H = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      I.current && !Zn(b.current, H) && (b.current = H, ke(() => {
        h(H);
      }));
    });
  }, [p, t, n, _, $]);
  Vn(() => {
    c === !1 && b.current.isPositioned && (b.current.isPositioned = !1, h((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [c]);
  const I = U(!1);
  Vn(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Vn(() => {
    if (E && (N.current = E), O && (A.current = O), E && O) {
      if (y.current)
        return y.current(E, O, k);
      k();
    }
  }, [E, O, k, y, m]);
  const P = ne(() => ({
    reference: N,
    floating: A,
    setReference: x,
    setFloating: S
  }), [x, S]), R = ne(() => ({
    reference: E,
    floating: O
  }), [E, O]), T = ne(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return M;
    const D = Wi(R.floating, u.x), H = Wi(R.floating, u.y);
    return l ? {
      ...M,
      transform: "translate(" + D + "px, " + H + "px)",
      ...Ll(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: H
    };
  }, [n, l, R.floating, u.x, u.y]);
  return ne(() => ({
    ...u,
    update: k,
    refs: P,
    elements: R,
    floatingStyles: T
  }), [u, k, P, R, T]);
}
const Vl = (e, t) => ({
  ...af(e),
  options: [e, t]
}), pf = (e, t) => ({
  ...cf(e),
  options: [e, t]
}), mf = (e, t) => ({
  ...uf(e),
  options: [e, t]
}), gf = (e, t) => ({
  ...df(e),
  options: [e, t]
}), Hl = {
  ...qr
}, vf = Hl.useInsertionEffect, wf = vf || ((e) => e());
function zl(e) {
  const t = U(() => {
  });
  return wf(() => {
    t.current = e;
  }), ee(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var oo = typeof document < "u" ? We : se;
let Gi = !1, yf = 0;
const qi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + yf++
);
function bf() {
  const [e, t] = Y(() => Gi ? qi() : void 0);
  return oo(() => {
    e == null && t(qi());
  }, []), se(() => {
    Gi = !0;
  }, []), e;
}
const xf = Hl.useId, Sf = xf || bf;
function Cf() {
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
const _f = /* @__PURE__ */ me(null), Ef = /* @__PURE__ */ me(null), Rf = () => {
  var e;
  return ((e = fe(_f)) == null ? void 0 : e.id) || null;
}, $f = () => fe(Ef), Tf = "data-floating-ui-focusable";
function Mf(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Sf(), i = U({}), [s] = Y(() => Cf()), l = Rf() != null, [a, c] = Y(r.reference), u = zl((d, v, w) => {
    i.current.openEvent = d ? v : void 0, s.emit("openchange", {
      open: d,
      event: v,
      reason: w,
      nested: l
    }), n == null || n(d, v, w);
  }), h = ne(() => ({
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
    refs: h
  }), [t, u, p, s, o, h]);
}
function Of(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Mf({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = Y(null), [l, a] = Y(null), u = (o == null ? void 0 : o.domReference) || i, h = U(null), p = $f();
  oo(() => {
    u && (h.current = u);
  }, [u]);
  const d = hf({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), v = ee((S) => {
    const E = Ae(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    a(E), d.refs.setReference(E);
  }, [d.refs]), w = ee((S) => {
    (Ae(S) || S === null) && (h.current = S, s(S)), (Ae(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    S !== null && !Ae(S)) && d.refs.setReference(S);
  }, [d.refs]), g = ne(() => ({
    ...d.refs,
    setReference: w,
    setPositionReference: v,
    domReference: h
  }), [d.refs, w, v]), C = ne(() => ({
    ...d.elements,
    domReference: u
  }), [d.elements, u]), x = ne(() => ({
    ...d,
    ...r,
    refs: g,
    elements: C,
    nodeId: t
  }), [d, g, C, t, r]);
  return oo(() => {
    r.dataRef.current.floatingContext = x;
    const S = p == null ? void 0 : p.nodesRef.current.find((E) => E.id === t);
    S && (S.context = x);
  }), ne(() => ({
    ...d,
    context: x,
    refs: g,
    elements: C
  }), [d, g, C, x]);
}
const Yi = "active", Ki = "selected";
function Ir(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Yi]: s,
      [Ki]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Tf]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [c, u] = a;
      if (!(o && [Yi, Ki].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var h;
            (h = r.get(c)) == null || h.push(u), s[c] = function() {
              for (var p, d = arguments.length, v = new Array(d), w = 0; w < d; w++)
                v[w] = arguments[w];
              return (p = r.get(c)) == null ? void 0 : p.map((g) => g(...v)).find((g) => g !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function If(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = ee(
    (l) => Ir(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = ee(
    (l) => Ir(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = ee(
    (l) => Ir(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return ne(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function Zi(e, t) {
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
const Af = (e) => ({
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
    } = tn(e, t), {
      rects: h,
      elements: {
        floating: p
      }
    } = t, d = n.current[s], v = (c == null ? void 0 : c.current) || p, w = p.clientTop || v.clientTop, g = p.clientTop !== 0, C = v.clientTop !== 0, x = p === v;
    if (!d)
      return {};
    const S = {
      ...t,
      ...await Vl(-d.offsetTop - p.clientTop - h.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, E = await Mr(Zi(S, v.scrollHeight + w + p.clientTop), u), O = await Mr(S, {
      ...u,
      elementContext: "reference"
    }), N = Oe(0, E.top), A = S.y + N, y = (v.scrollHeight > v.clientHeight ? (_) => _ : yn)(Oe(0, v.scrollHeight + (g && x || C ? w * 2 : 0) - N - Oe(0, E.bottom)));
    if (v.style.maxHeight = y + "px", v.scrollTop = N, o) {
      const _ = v.offsetHeight < d.offsetHeight * Ft(l, n.current.length) - 1 || O.top >= -a || O.bottom >= -a;
      ke(() => o(_));
    }
    return r && (r.current = await Mr(Zi({
      ...S,
      y: A
    }, v.offsetHeight + w + p.clientTop), u)), {
      y: A
    };
  }
});
function Df(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = zl(l), c = U(!1), u = U(null), h = U(null);
  se(() => {
    if (!o) return;
    function d(w) {
      if (w.ctrlKey || !v || i.current == null)
        return;
      const g = w.deltaY, C = i.current.top >= -0.5, x = i.current.bottom >= -0.5, S = v.scrollHeight - v.clientHeight, E = g < 0 ? -1 : 1, O = g < 0 ? "max" : "min";
      v.scrollHeight <= v.clientHeight || (!C && g > 0 || !x && g < 0 ? (w.preventDefault(), ke(() => {
        a((N) => N + Math[O](g, S * E));
      })) : /firefox/i.test(Od()) && (v.scrollTop += g));
    }
    const v = (s == null ? void 0 : s.current) || r.floating;
    if (n && v)
      return v.addEventListener("wheel", d), requestAnimationFrame(() => {
        u.current = v.scrollTop, i.current != null && (h.current = {
          ...i.current
        });
      }), () => {
        u.current = null, h.current = null, v.removeEventListener("wheel", d);
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
      const d = (s == null ? void 0 : s.current) || r.floating;
      if (!(!i.current || !d || !c.current)) {
        if (u.current !== null) {
          const v = d.scrollTop - u.current;
          (i.current.bottom < -0.5 && v < -1 || i.current.top < -0.5 && v > 1) && ke(() => a((w) => w + v));
        }
        requestAnimationFrame(() => {
          u.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, s]);
  return ne(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let _n = me({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
_n.displayName = "FloatingContext";
let jo = me(null);
jo.displayName = "PlacementContext";
function Ff(e) {
  return ne(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Pf() {
  return fe(_n).setReference;
}
function Nf() {
  let { getFloatingProps: e, slot: t } = fe(_n);
  return ee((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function kf(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = fe(jo), n = ne(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  he(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = fe(_n);
  return ne(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Xi = 4;
function Lf({ children: e, enabled: t = !0 }) {
  let [n, r] = Y(null), [o, i] = Y(0), s = U(null), [l, a] = Y(null);
  Vf(l);
  let c = t && n !== null && l !== null, { to: u = "bottom", gap: h = 0, offset: p = 0, padding: d = 0, inner: v } = Hf(n, l), [w, g = "center"] = u.split(" ");
  he(() => {
    c && i(0);
  }, [c]);
  let { refs: C, floatingStyles: x, context: S } = Of({ open: c, placement: w === "selection" ? g === "center" ? "bottom" : `bottom-${g}` : g === "center" ? `${w}` : `${w}-${g}`, strategy: "absolute", transform: !1, middleware: [Vl({ mainAxis: w === "selection" ? 0 : h, crossAxis: p }), pf({ padding: d }), w !== "selection" && mf({ padding: d }), w === "selection" && v ? Af({ ...v, padding: d, overflowRef: s, offset: o, minItemsVisible: Xi, referenceOverflowThreshold: d, onFallbackChange(_) {
    var $, k;
    if (!_) return;
    let I = S.elements.floating;
    if (!I) return;
    let P = parseFloat(getComputedStyle(I).scrollPaddingBottom) || 0, R = Math.min(Xi, I.childElementCount), T = 0, M = 0;
    for (let D of (k = ($ = S.elements.floating) == null ? void 0 : $.childNodes) != null ? k : []) if (D instanceof HTMLElement) {
      let H = D.offsetTop, V = H + D.clientHeight + P, L = I.scrollTop, F = L + I.clientHeight;
      if (H >= L && V <= F) R--;
      else {
        M = Math.max(0, Math.min(V, F) - Math.max(H, L)), T = D.clientHeight;
        break;
      }
    }
    R >= 1 && i((D) => {
      let H = T * R - M + P;
      return D >= H ? D : H;
    });
  } }) : null, gf({ padding: d, apply({ availableWidth: _, availableHeight: $, elements: k }) {
    Object.assign(k.floating.style, { overflow: "auto", maxWidth: `${_}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${$}px)` });
  } })].filter(Boolean), whileElementsMounted: lf }), [E = w, O = g] = S.placement.split("-");
  w === "selection" && (E = "selection");
  let N = ne(() => ({ anchor: [E, O].filter(Boolean).join(" ") }), [E, O]), A = Df(S, { overflowRef: s, onChange: i }), { getReferenceProps: b, getFloatingProps: m } = If([A]), y = Q((_) => {
    a(_), C.setFloating(_);
  });
  return B(jo.Provider, { value: r }, B(_n.Provider, { value: { setFloating: y, setReference: C.setReference, styles: x, getReferenceProps: b, getFloatingProps: m, slot: N } }, e));
}
function Vf(e) {
  he(() => {
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
function Hf(e, t) {
  var n, r, o;
  let i = Ar((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = Ar((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = Ar((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function Ar(e, t, n = void 0) {
  let r = kt(), o = Q((a, c) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!c) return [n, null];
      let u = Ji(a, c);
      return [u, (h) => {
        let p = Bl(a);
        {
          let d = p.map((v) => window.getComputedStyle(c).getPropertyValue(v));
          r.requestAnimationFrame(function v() {
            r.nextFrame(v);
            let w = !1;
            for (let [C, x] of p.entries()) {
              let S = window.getComputedStyle(c).getPropertyValue(x);
              if (d[C] !== S) {
                d[C] = S, w = !0;
                break;
              }
            }
            if (!w) return;
            let g = Ji(a, c);
            u !== g && (h(g), u = g);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = ne(() => o(e, t)[0], [e, t]), [s = i, l] = Y();
  return he(() => {
    let [a, c] = o(e, t);
    if (l(a), !!c) return c(l);
  }, [e, t]), s;
}
function Bl(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Bl(o)] : [r];
  }
  return [];
}
function Ji(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function zf({ children: e, freeze: t }) {
  let n = io(t, e);
  return K.createElement(K.Fragment, null, n);
}
function io(e, t) {
  let [n, r] = Y(t);
  return !e && n !== t && r(t), e ? n : t;
}
let dr = me(null);
dr.displayName = "OpenClosedContext";
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function En() {
  return fe(dr);
}
function jl({ value: e, children: t }) {
  return K.createElement(dr.Provider, { value: e }, t);
}
function Bf({ children: e }) {
  return K.createElement(dr.Provider, { value: null }, e);
}
function jf(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ke = [];
jf(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ke[0] === t.target) return;
    let n = t.target;
    n = n.closest(qn), Ke.unshift(n ?? t.target), Ke = Ke.filter((r) => r != null && r.isConnected), Ke.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Uf(e) {
  throw new Error("Unexpected object: " + e);
}
var Se = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Se || {});
function Qi(e, t) {
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
      Uf(e);
  }
}
var Uo = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Uo || {});
function Ul(e) {
  let t = Q(e), n = U(!1);
  se(() => (n.current = !1, () => {
    n.current = !0, rr(() => {
      n.current && t();
    });
  }), [t]);
}
function Wf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in qr ? ((t) => t.useSyncExternalStore)(qr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Rn() {
  let e = Wf(), [t, n] = Y(It.isHandoffComplete);
  return t && It.isHandoffComplete === !1 && n(!1), se(() => {
    t !== !0 && n(!0);
  }, [t]), se(() => It.handoff(), []), e ? !1 : t;
}
let Wl = me(!1);
function Gf() {
  return fe(Wl);
}
function es(e) {
  return K.createElement(Wl.Provider, { value: e.force }, e.children);
}
function qf(e) {
  let t = Gf(), n = fe(ql), r = Lt(e), [o, i] = Y(() => {
    var s;
    if (!t && n !== null) return (s = n.current) != null ? s : null;
    if (It.isServer) return null;
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
let Gl = pe, Yf = Ce(function(e, t) {
  let n = e, r = U(null), o = Fe(Mu((h) => {
    r.current = h;
  }), t), i = Lt(r), s = qf(r), [l] = Y(() => {
    var h;
    return It.isServer ? null : (h = i == null ? void 0 : i.createElement("div")) != null ? h : null;
  }), a = fe(so), c = Rn();
  he(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), he(() => {
    if (l && a) return a.register(l);
  }, [a, l]), Ul(() => {
    var h;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((h = s.parentElement) == null || h.removeChild(s)));
  });
  let u = Ee();
  return c ? !s || !l ? null : Zt(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Gl, name: "Portal" }), l) : null;
});
function Kf(e, t) {
  let n = Fe(t), { enabled: r = !0, ...o } = e, i = Ee();
  return r ? K.createElement(Yf, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Gl, name: "Portal" });
}
let Zf = pe, ql = me(null);
function Xf(e, t) {
  let { target: n, ...r } = e, o = { ref: Fe(t) }, i = Ee();
  return K.createElement(ql.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Zf, name: "Popover.Group" }));
}
let so = me(null);
function Jf() {
  let e = fe(so), t = U([]), n = Q((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Q((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ne(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ne(() => function({ children: i }) {
    return K.createElement(so.Provider, { value: o }, i);
  }, [o])];
}
let Qf = Ce(Kf), Yl = Ce(Xf), Kl = Object.assign(Qf, { Group: Yl });
var eh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(eh || {}), th = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(th || {}), nh = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(nh || {}), rh = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(rh || {});
function Dr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : wl(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let oh = { 1(e) {
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
    let { options: c, disabled: u } = e.virtual, h = t.focus === Se.Specific ? t.idx : Qi(t, { resolveItems: () => c, resolveActiveIndex: () => {
      var d, v;
      return (v = (d = e.activeOptionIndex) != null ? d : c.findIndex((w) => !u(w))) != null ? v : null;
    }, resolveDisabled: u, resolveId() {
      throw new Error("Function not implemented.");
    } }), p = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === h && e.activationTrigger === p ? e : { ...e, activeOptionIndex: h, activationTrigger: p, isTyping: !1, __demoMode: !1 };
  }
  let s = Dr(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((u) => !u.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = t.focus === Se.Specific ? t.idx : Qi(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = Dr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = Dr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Wo = me(null);
Wo.displayName = "ComboboxActionsContext";
function $n(e) {
  let t = fe(Wo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, $n), n;
  }
  return t;
}
let Zl = me(null);
function ih(e) {
  let t = nn("VirtualProvider"), { options: n } = t.virtual, [r, o] = ne(() => {
    let c = t.optionsElement;
    if (!c) return [0, 0];
    let u = window.getComputedStyle(c);
    return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
  }, [t.optionsElement]), i = fl({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = Y(0);
  he(() => {
    l((c) => c + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : K.createElement(Zl.Provider, { value: i }, K.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (c) => {
    c && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((c) => {
    var u;
    return K.createElement(pe, { key: c.key }, K.cloneElement((u = e.children) == null ? void 0 : u.call(e, { ...e.slot, option: n[c.index] }), { key: `${s}-${c.key}`, "data-index": c.index, "aria-setsize": n.length, "aria-posinset": c.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c.start}px)`, overflowAnchor: "none" } }));
  })));
}
let bn = me(null);
bn.displayName = "ComboboxDataContext";
function nn(e) {
  let t = fe(bn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nn), n;
  }
  return t;
}
function sh(e, t) {
  return Ne(t.type, oh, e, t);
}
let lh = pe;
function ah(e, t) {
  var n, r;
  let o = No(), { value: i, defaultValue: s, onChange: l, form: a, name: c, by: u, disabled: h = o || !1, onClose: p, __demoMode: d = !1, multiple: v = !1, immediate: w = !1, virtual: g = null, nullable: C, ...x } = e, S = yu(s), [E = v ? [] : void 0, O] = wu(i, l, S), [N, A] = et(sh, { dataRef: tr(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: g ? { options: g.options, disabled: (n = g.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), b = U(!1), m = U({ static: !1, hold: !1 }), y = td(u), _ = Q((j) => g ? u === null ? g.options.indexOf(j) : g.options.findIndex((Z) => y(Z, j)) : N.options.findIndex((Z) => y(Z.dataRef.current.value, j))), $ = ee((j) => Ne(I.mode, { 1: () => E.some((Z) => y(Z, j)), 0: () => y(E, j) }), [E]), k = Q((j) => N.activeOptionIndex === _(j)), I = ne(() => ({ ...N, immediate: w, optionsPropsRef: m, value: E, defaultValue: S, disabled: h, mode: v ? 1 : 0, virtual: g ? N.virtual : null, get activeOptionIndex() {
    if (b.current && N.activeOptionIndex === null && (g ? g.options.length > 0 : N.options.length > 0)) {
      if (g) {
        let Z = g.options.findIndex((oe) => {
          var be, ce;
          return !((ce = (be = g.disabled) == null ? void 0 : be.call(g, oe)) != null && ce);
        });
        if (Z !== -1) return Z;
      }
      let j = N.options.findIndex((Z) => !Z.dataRef.current.disabled);
      if (j !== -1) return j;
    }
    return N.activeOptionIndex;
  }, calculateIndex: _, compare: y, isSelected: $, isActive: k }), [E, S, h, v, d, N, g]);
  he(() => {
    var j;
    g && A({ type: 7, options: g.options, disabled: (j = g.disabled) != null ? j : null });
  }, [g, g == null ? void 0 : g.options, g == null ? void 0 : g.disabled]), he(() => {
    N.dataRef.current = I;
  }, [I]);
  let P = I.comboboxState === 0;
  Sl(P, [I.buttonElement, I.inputElement, I.optionsElement], () => z.closeCombobox());
  let R = ne(() => {
    var j, Z, oe;
    return { open: I.comboboxState === 0, disabled: h, activeIndex: I.activeOptionIndex, activeOption: I.activeOptionIndex === null ? null : I.virtual ? I.virtual.options[(j = I.activeOptionIndex) != null ? j : 0] : (oe = (Z = I.options[I.activeOptionIndex]) == null ? void 0 : Z.dataRef.current.value) != null ? oe : null, value: E };
  }, [I, h, E]), T = Q(() => {
    if (I.activeOptionIndex !== null) {
      if (z.setIsTyping(!1), I.virtual) F(I.virtual.options[I.activeOptionIndex]);
      else {
        let { dataRef: j } = I.options[I.activeOptionIndex];
        F(j.current.value);
      }
      z.goToOption(Se.Specific, I.activeOptionIndex);
    }
  }), M = Q(() => {
    A({ type: 0 }), b.current = !0;
  }), D = Q(() => {
    A({ type: 1 }), b.current = !1, p == null || p();
  }), H = Q((j) => {
    A({ type: 3, isTyping: j });
  }), V = Q((j, Z, oe) => (b.current = !1, j === Se.Specific ? A({ type: 2, focus: Se.Specific, idx: Z, trigger: oe }) : A({ type: 2, focus: j, trigger: oe }))), L = Q((j, Z) => (A({ type: 4, payload: { id: j, dataRef: Z } }), () => {
    I.isActive(Z.current.value) && (b.current = !0), A({ type: 5, id: j });
  })), F = Q((j) => Ne(I.mode, { 0() {
    return O == null ? void 0 : O(j);
  }, 1() {
    let Z = I.value.slice(), oe = Z.findIndex((be) => y(be, j));
    return oe === -1 ? Z.push(j) : Z.splice(oe, 1), O == null ? void 0 : O(Z);
  } })), te = Q((j) => {
    A({ type: 6, trigger: j });
  }), X = Q((j) => {
    A({ type: 8, element: j });
  }), ue = Q((j) => {
    A({ type: 9, element: j });
  }), ie = Q((j) => {
    A({ type: 10, element: j });
  }), z = ne(() => ({ onChange: F, registerOption: L, goToOption: V, setIsTyping: H, closeCombobox: D, openCombobox: M, setActivationTrigger: te, selectActiveOption: T, setInputElement: X, setButtonElement: ue, setOptionsElement: ie }), []), [W, re] = Nu(), q = t === null ? {} : { ref: t }, G = ee(() => {
    if (S !== void 0) return O == null ? void 0 : O(S);
  }, [O, S]), J = Ee();
  return K.createElement(re, { value: W, props: { htmlFor: (r = I.inputElement) == null ? void 0 : r.id }, slot: { open: I.comboboxState === 0, disabled: h } }, K.createElement(Lf, null, K.createElement(Wo.Provider, { value: z }, K.createElement(bn.Provider, { value: I }, K.createElement(jl, { value: Ne(I.comboboxState, { 0: De.Open, 1: De.Closed }) }, c != null && K.createElement(_u, { disabled: h, data: E != null ? { [c]: E } : {}, form: a, onReset: G }), J({ ourProps: q, theirProps: x, slot: R, defaultTag: lh, name: "Combobox" }))))));
}
let ch = "input";
function uh(e, t) {
  var n, r, o, i, s;
  let l = nn("Combobox.Input"), a = $n("Combobox.Input"), c = Ie(), u = ll(), { id: h = u || `headlessui-combobox-input-${c}`, onChange: p, displayValue: d, disabled: v = l.disabled || !1, autoFocus: w = !1, type: g = "text", ...C } = e, x = U(null), S = Fe(x, t, Pf(), a.setInputElement), E = Lt(l.inputElement), O = kt(), N = Q(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(Se.Nothing);
  }), A = ne(() => {
    var F;
    return typeof d == "function" && l.value !== void 0 ? (F = d(l.value)) != null ? F : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, d]);
  vn(([F, te], [X, ue]) => {
    if (l.isTyping) return;
    let ie = x.current;
    ie && ((ue === 0 && te === 1 || F !== X) && (ie.value = F), requestAnimationFrame(() => {
      if (l.isTyping || !ie || (E == null ? void 0 : E.activeElement) !== ie) return;
      let { selectionStart: z, selectionEnd: W } = ie;
      Math.abs((W ?? 0) - (z ?? 0)) === 0 && z === 0 && ie.setSelectionRange(ie.value.length, ie.value.length);
    }));
  }, [A, l.comboboxState, E, l.isTyping]), vn(([F], [te]) => {
    if (F === 0 && te === 1) {
      if (l.isTyping) return;
      let X = x.current;
      if (!X) return;
      let ue = X.value, { selectionStart: ie, selectionEnd: z, selectionDirection: W } = X;
      X.value = "", X.value = ue, W !== null ? X.setSelectionRange(ie, z, W) : X.setSelectionRange(ie, z);
    }
  }, [l.comboboxState]);
  let b = U(!1), m = Q(() => {
    b.current = !0;
  }), y = Q(() => {
    O.nextFrame(() => {
      b.current = !1;
    });
  }), _ = Q((F) => {
    switch (a.setIsTyping(!0), F.key) {
      case Me.Enter:
        if (l.comboboxState !== 0 || b.current) return;
        if (F.preventDefault(), F.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Me.ArrowDown:
        return F.preventDefault(), F.stopPropagation(), Ne(l.comboboxState, { 0: () => a.goToOption(Se.Next), 1: () => a.openCombobox() });
      case Me.ArrowUp:
        return F.preventDefault(), F.stopPropagation(), Ne(l.comboboxState, { 0: () => a.goToOption(Se.Previous), 1: () => {
          ke(() => a.openCombobox()), l.value || a.goToOption(Se.Last);
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
        return l.comboboxState !== 0 ? void 0 : (F.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && F.stopPropagation(), l.mode === 0 && l.value === null && N(), a.closeCombobox());
      case Me.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), $ = Q((F) => {
    p == null || p(F), l.mode === 0 && F.target.value === "" && N(), a.openCombobox();
  }), k = Q((F) => {
    var te, X, ue;
    let ie = (te = F.relatedTarget) != null ? te : Ke.find((z) => z !== F.currentTarget);
    if (!((X = l.optionsElement) != null && X.contains(ie)) && !((ue = l.buttonElement) != null && ue.contains(ie)) && l.comboboxState === 0) return F.preventDefault(), l.mode === 0 && l.value === null && N(), a.closeCombobox();
  }), I = Q((F) => {
    var te, X, ue;
    let ie = (te = F.relatedTarget) != null ? te : Ke.find((z) => z !== F.currentTarget);
    (X = l.buttonElement) != null && X.contains(ie) || (ue = l.optionsElement) != null && ue.contains(ie) || l.disabled || l.immediate && l.comboboxState !== 0 && O.microTask(() => {
      ke(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), P = sr(), R = Ou(), { isFocused: T, focusProps: M } = nl({ autoFocus: w }), { isHovered: D, hoverProps: H } = tl({ isDisabled: v }), V = ne(() => ({ open: l.comboboxState === 0, disabled: v, hover: D, focus: T, autofocus: w }), [l, D, T, w, v]), L = ko({ ref: S, id: h, role: "combobox", type: g, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((F) => !F.dataRef.current.disabled && l.compare(F.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": P, "aria-describedby": R, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? d == null ? void 0 : d(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: v || void 0, autoFocus: w, onCompositionStart: m, onCompositionEnd: y, onKeyDown: _, onChange: $, onFocus: I, onBlur: k }, M, H);
  return Ee()({ ourProps: L, theirProps: C, slot: V, defaultTag: ch, name: "Combobox.Input" });
}
let dh = "button";
function fh(e, t) {
  var n;
  let r = nn("Combobox.Button"), o = $n("Combobox.Button"), i = Fe(t, o.setButtonElement), s = Ie(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: c = !1, ...u } = e, h = Cl(r.inputElement), p = Q((A) => {
    switch (A.key) {
      case Me.Space:
      case Me.Enter:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && ke(() => o.openCombobox()), h();
        return;
      case Me.ArrowDown:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && (ke(() => o.openCombobox()), r.value || o.goToOption(Se.First)), h();
        return;
      case Me.ArrowUp:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && (ke(() => o.openCombobox()), r.value || o.goToOption(Se.Last)), h();
        return;
      case Me.Escape:
        if (r.comboboxState !== 0) return;
        A.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && A.stopPropagation(), ke(() => o.closeCombobox()), h();
        return;
      default:
        return;
    }
  }), d = Q((A) => {
    A.preventDefault(), !$u(A.currentTarget) && (A.button === Uo.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), h());
  }), v = sr([l]), { isFocusVisible: w, focusProps: g } = nl({ autoFocus: c }), { isHovered: C, hoverProps: x } = tl({ isDisabled: a }), { pressed: S, pressProps: E } = fu({ disabled: a }), O = ne(() => ({ open: r.comboboxState === 0, active: S || r.comboboxState === 0, disabled: a, value: r.value, hover: C, focus: w }), [r, C, w, S, a]), N = ko({ ref: i, id: l, type: pd(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": v, disabled: a || void 0, autoFocus: c, onMouseDown: d, onKeyDown: p }, g, x, E);
  return Ee()({ ourProps: N, theirProps: u, slot: O, defaultTag: dh, name: "Combobox.Button" });
}
let hh = "div", ph = qt.RenderStrategy | qt.Static;
function mh(e, t) {
  var n, r, o;
  let i = Ie(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: c = !1, modal: u = !0, transition: h = !1, ...p } = e, d = nn("Combobox.Options"), v = $n("Combobox.Options"), w = Ff(a);
  w && (c = !0);
  let [g, C] = kf(w), [x, S] = Y(null), E = Nf(), O = Fe(t, w ? g : null, v.setOptionsElement, S), N = Lt(d.optionsElement), A = En(), [b, m] = Rl(h, x, A !== null ? (A & De.Open) === De.Open : d.comboboxState === 0);
  gl(b, d.inputElement, v.closeCombobox);
  let y = d.__demoMode ? !1 : u && d.comboboxState === 0;
  _l(y, N);
  let _ = d.__demoMode ? !1 : u && d.comboboxState === 0;
  ml(_, { allowed: ee(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), he(() => {
    var L;
    d.optionsPropsRef.current.static = (L = e.static) != null ? L : !1;
  }, [d.optionsPropsRef, e.static]), he(() => {
    d.optionsPropsRef.current.hold = l;
  }, [d.optionsPropsRef, l]), $d(d.comboboxState === 0, { container: d.optionsElement, accept(L) {
    return L.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : L.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(L) {
    L.setAttribute("role", "none");
  } });
  let $ = sr([(n = d.buttonElement) == null ? void 0 : n.id]), k = ne(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), I = Q(() => {
    v.setActivationTrigger(0);
  }), P = Q((L) => {
    L.preventDefault(), v.setActivationTrigger(0);
  }), R = ko(w ? E() : {}, { "aria-labelledby": $, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: s, ref: O, style: { ...p.style, ...C, "--input-width": Di(d.inputElement, !0).width, "--button-width": Di(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : I, onMouseDown: P, ...El(m) }), T = b && d.comboboxState === 1, M = io(T, (r = d.virtual) == null ? void 0 : r.options), D = io(T, d.value), H = Q((L) => d.compare(D, L));
  if (d.virtual) {
    if (M === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: K.createElement(bn.Provider, { value: M !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: M } } : d }, K.createElement(ih, { slot: k }, p.children)) });
  }
  let V = Ee();
  return K.createElement(Kl, { enabled: c ? e.static || b : !1 }, K.createElement(bn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: H } }, V({ ourProps: R, theirProps: { ...p, children: K.createElement(zf, { freeze: T }, typeof p.children == "function" ? (o = p.children) == null ? void 0 : o.call(p, k) : p.children) }, slot: k, defaultTag: hh, features: ph, visible: b, name: "Combobox.Options" })));
}
let gh = "div";
function vh(e, t) {
  var n, r, o, i;
  let s = nn("Combobox.Option"), l = $n("Combobox.Option"), a = Ie(), { id: c = `headlessui-combobox-option-${a}`, value: u, disabled: h = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? o : !1, order: p = null, ...d } = e, v = Cl(s.inputElement), w = s.virtual ? s.activeOptionIndex === s.calculateIndex(u) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === c, g = s.isSelected(u), C = U(null), x = _t({ disabled: h, value: u, domRef: C, order: p }), S = fe(Zl), E = Fe(t, C, S ? S.measureElement : null), O = Q(() => {
    l.setIsTyping(!1), l.onChange(u);
  });
  he(() => l.registerOption(c, x), [x, c]);
  let N = U(!(s.virtual || s.__demoMode));
  he(() => {
    if (!s.virtual && !s.__demoMode) return Je().requestAnimationFrame(() => {
      N.current = !0;
    });
  }, [s.virtual, s.__demoMode]), he(() => {
    if (N.current && s.comboboxState === 0 && w && s.activationTrigger !== 0) return Je().requestAnimationFrame(() => {
      var P, R;
      (R = (P = C.current) == null ? void 0 : P.scrollIntoView) == null || R.call(P, { block: "nearest" });
    });
  }, [C, w, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let A = Q((P) => {
    P.preventDefault(), P.button === Uo.Left && (h || (O(), bl() || requestAnimationFrame(() => v()), s.mode === 0 && l.closeCombobox()));
  }), b = Q(() => {
    if (h) return l.goToOption(Se.Nothing);
    let P = s.calculateIndex(u);
    l.goToOption(Se.Specific, P);
  }), m = bd(), y = Q((P) => m.update(P)), _ = Q((P) => {
    if (!m.wasMoved(P) || h || w) return;
    let R = s.calculateIndex(u);
    l.goToOption(Se.Specific, R, 0);
  }), $ = Q((P) => {
    m.wasMoved(P) && (h || w && (s.optionsPropsRef.current.hold || l.goToOption(Se.Nothing)));
  }), k = ne(() => ({ active: w, focus: w, selected: g, disabled: h }), [w, g, h]), I = { id: c, ref: E, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": g, disabled: void 0, onMouseDown: A, onFocus: b, onPointerEnter: y, onMouseEnter: y, onPointerMove: _, onMouseMove: _, onPointerLeave: $, onMouseLeave: $ };
  return Ee()({ ourProps: I, theirProps: d, slot: k, defaultTag: gh, name: "Combobox.Option" });
}
let wh = Ce(ah), lo = Ce(fh), Xl = Ce(uh), yh = Hu, Jl = Ce(mh), ao = Ce(vh), bh = Object.assign(wh, { Input: Xl, Button: lo, Label: yh, Options: Jl, Option: ao });
function xh(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Qt(e, "escape");
  Lo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Me.Escape && n(o));
  });
}
function Sh() {
  var e;
  let [t] = Y(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = Y((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return he(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Ch({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Lt(n), o = Q(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((c) => a.contains(c)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: Q((i) => o().some((s) => s.contains(i))) };
}
let Ql = me(null);
function ts({ children: e, node: t }) {
  let [n, r] = Y(null), o = ea(t ?? n);
  return K.createElement(Ql.Provider, { value: o }, e, o === null && K.createElement(gn, { features: Yt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = Jt(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function ea(e = null) {
  var t;
  return (t = fe(Ql)) != null ? t : e;
}
function Go() {
  let e = U(!1);
  return he(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var cn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(cn || {});
function _h() {
  let e = U(0);
  return xl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function ta(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Eh = "div";
var $t = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))($t || {});
function Rh(e, t) {
  let n = U(null), r = Fe(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  Rn() || (l = 0);
  let c = Lt(n);
  Oh(l, { ownerDocument: c });
  let u = Ih(l, { ownerDocument: c, container: n, initialFocus: o, initialFocusFallback: i });
  Ah(l, { ownerDocument: c, container: n, containers: s, previousActiveElement: u });
  let h = _h(), p = Q((x) => {
    let S = n.current;
    S && ((E) => E())(() => {
      Ne(h.current, { [cn.Forwards]: () => {
        hn(S, at.First, { skipElements: [x.relatedTarget, i] });
      }, [cn.Backwards]: () => {
        hn(S, at.Last, { skipElements: [x.relatedTarget, i] });
      } });
    });
  }), d = Qt(!!(l & 2), "focus-trap#tab-lock"), v = kt(), w = U(!1), g = { ref: r, onKeyDown(x) {
    x.key == "Tab" && (w.current = !0, v.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(x) {
    if (!(l & 4)) return;
    let S = ta(s);
    n.current instanceof HTMLElement && S.add(n.current);
    let E = x.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (na(S, E) || (w.current ? hn(n.current, Ne(h.current, { [cn.Forwards]: () => at.Next, [cn.Backwards]: () => at.Previous }) | at.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && ut(x.target)));
  } }, C = Ee();
  return K.createElement(K.Fragment, null, d && K.createElement(gn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Yt.Focusable }), C({ ourProps: g, theirProps: a, defaultTag: Eh, name: "FocusTrap" }), d && K.createElement(gn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Yt.Focusable }));
}
let $h = Ce(Rh), Th = Object.assign($h, { features: $t });
function Mh(e = !0) {
  let t = U(Ke.slice());
  return vn(([n], [r]) => {
    r === !0 && n === !1 && rr(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ke.slice());
  }, [e, Ke, t]), Q(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Oh(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Mh(n);
  vn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && ut(r());
  }, [n]), Ul(() => {
    n && ut(r());
  });
}
function Ih(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = U(null), s = Qt(!!(e & 1), "focus-trap#initial-focus"), l = Go();
  return vn(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && ut(o.current);
      return;
    }
    let a = n.current;
    a && rr(() => {
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
      if (r != null && r.current) ut(r.current);
      else {
        if (e & 16) {
          if (hn(a, at.First | at.AutoFocus) !== to.Error) return;
        } else if (hn(a, at.First) !== to.Error) return;
        if (o != null && o.current && (ut(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function Ah(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = Go(), s = !!(e & 4);
  Lo(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = ta(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let c = o.current;
    if (!c) return;
    let u = l.target;
    u && u instanceof HTMLElement ? na(a, u) ? (o.current = u, ut(u)) : (l.preventDefault(), l.stopPropagation(), ut(c)) : ut(o.current);
  }, !0);
}
function na(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function ra(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : ia) !== pe || K.Children.count(e.children) === 1;
}
let fr = me(null);
fr.displayName = "TransitionContext";
var Dh = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Dh || {});
function Fh() {
  let e = fe(fr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Ph() {
  let e = fe(hr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let hr = me(null);
hr.displayName = "NestingContext";
function pr(e) {
  return "children" in e ? pr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function oa(e, t) {
  let n = _t(e), r = U([]), o = Go(), i = kt(), s = Q((d, v = mt.Hidden) => {
    let w = r.current.findIndex(({ el: g }) => g === d);
    w !== -1 && (Ne(v, { [mt.Unmount]() {
      r.current.splice(w, 1);
    }, [mt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var g;
      !pr(r) && o.current && ((g = n.current) == null || g.call(n));
    }));
  }), l = Q((d) => {
    let v = r.current.find(({ el: w }) => w === d);
    return v ? v.state !== "visible" && (v.state = "visible") : r.current.push({ el: d, state: "visible" }), () => s(d, mt.Unmount);
  }), a = U([]), c = U(Promise.resolve()), u = U({ enter: [], leave: [] }), h = Q((d, v, w) => {
    a.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([g]) => g !== d)), t == null || t.chains.current[v].push([d, new Promise((g) => {
      a.current.push(g);
    })]), t == null || t.chains.current[v].push([d, new Promise((g) => {
      Promise.all(u.current[v].map(([C, x]) => x)).then(() => g());
    })]), v === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(v)) : w(v);
  }), p = Q((d, v, w) => {
    Promise.all(u.current[v].splice(0).map(([g, C]) => C)).then(() => {
      var g;
      (g = a.current.shift()) == null || g();
    }).then(() => w(v));
  });
  return ne(() => ({ children: r, register: l, unregister: s, onStart: h, onStop: p, wait: c, chains: u }), [l, s, r, h, p, u, c]);
}
let ia = pe, sa = qt.RenderStrategy;
function Nh(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: c, enterFrom: u, enterTo: h, entered: p, leave: d, leaveFrom: v, leaveTo: w, ...g } = e, [C, x] = Y(null), S = U(null), E = ra(e), O = Fe(...E ? [S, t, x] : t === null ? [] : [t]), N = (n = g.unmount) == null || n ? mt.Unmount : mt.Hidden, { show: A, appear: b, initial: m } = Fh(), [y, _] = Y(A ? "visible" : "hidden"), $ = Ph(), { register: k, unregister: I } = $;
  he(() => k(S), [k, S]), he(() => {
    if (N === mt.Hidden && S.current) {
      if (A && y !== "visible") {
        _("visible");
        return;
      }
      return Ne(y, { hidden: () => I(S), visible: () => k(S) });
    }
  }, [y, S, k, I, A, N]);
  let P = Rn();
  he(() => {
    if (E && P && y === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [S, y, P, E]);
  let R = m && !b, T = b && A && m, M = U(!1), D = oa(() => {
    M.current || (_("hidden"), I(S));
  }, $), H = Q((ie) => {
    M.current = !0;
    let z = ie ? "enter" : "leave";
    D.onStart(S, z, (W) => {
      W === "enter" ? i == null || i() : W === "leave" && (l == null || l());
    });
  }), V = Q((ie) => {
    let z = ie ? "enter" : "leave";
    M.current = !1, D.onStop(S, z, (W) => {
      W === "enter" ? s == null || s() : W === "leave" && (a == null || a());
    }), z === "leave" && !pr(D) && (_("hidden"), I(S));
  });
  se(() => {
    E && o || (H(A), V(A));
  }, [A, E, o]);
  let L = !(!o || !E || !P || R), [, F] = Rl(L, C, A, { start: H, end: V }), te = pt({ ref: O, className: ((r = Qr(g.className, T && c, T && u, F.enter && c, F.enter && F.closed && u, F.enter && !F.closed && h, F.leave && d, F.leave && !F.closed && v, F.leave && F.closed && w, !F.transition && A && p)) == null ? void 0 : r.trim()) || void 0, ...El(F) }), X = 0;
  y === "visible" && (X |= De.Open), y === "hidden" && (X |= De.Closed), F.enter && (X |= De.Opening), F.leave && (X |= De.Closing);
  let ue = Ee();
  return K.createElement(hr.Provider, { value: D }, K.createElement(jl, { value: X }, ue({ ourProps: te, theirProps: g, defaultTag: ia, features: sa, visible: y === "visible", name: "Transition.Child" })));
}
function kh(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = U(null), l = ra(e), a = Fe(...l ? [s, t] : t === null ? [] : [t]);
  Rn();
  let c = En();
  if (n === void 0 && c !== null && (n = (c & De.Open) === De.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, h] = Y(n ? "visible" : "hidden"), p = oa(() => {
    n || h("hidden");
  }), [d, v] = Y(!0), w = U([n]);
  he(() => {
    d !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), v(!1));
  }, [w, n]);
  let g = ne(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  he(() => {
    n ? h("visible") : !pr(p) && s.current !== null && h("hidden");
  }, [n, p]);
  let C = { unmount: o }, x = Q(() => {
    var O;
    d && v(!1), (O = e.beforeEnter) == null || O.call(e);
  }), S = Q(() => {
    var O;
    d && v(!1), (O = e.beforeLeave) == null || O.call(e);
  }), E = Ee();
  return K.createElement(hr.Provider, { value: p }, K.createElement(fr.Provider, { value: g }, E({ ourProps: { ...C, as: pe, children: K.createElement(la, { ref: a, ...C, ...i, beforeEnter: x, beforeLeave: S }) }, theirProps: {}, defaultTag: pe, features: sa, visible: u === "visible", name: "Transition" })));
}
function Lh(e, t) {
  let n = fe(fr) !== null, r = En() !== null;
  return K.createElement(K.Fragment, null, !n && r ? K.createElement(co, { ref: t, ...e }) : K.createElement(la, { ref: t, ...e }));
}
let co = Ce(kh), la = Ce(Nh), qo = Ce(Lh), Vh = Object.assign(co, { Child: qo, Root: co });
var Hh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hh || {}), zh = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(zh || {});
let Bh = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Yo = me(null);
Yo.displayName = "DialogContext";
function mr(e) {
  let t = fe(Yo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, mr), n;
  }
  return t;
}
function jh(e, t) {
  return Ne(t.type, Bh, e, t);
}
let ns = Ce(function(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: c = !1, unmount: u = !1, ...h } = e, p = U(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (p.current || (p.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = En();
  o === void 0 && d !== null && (o = (d & De.Open) === De.Open);
  let v = U(null), w = Fe(v, t), g = Lt(v), C = o ? 0 : 1, [x, S] = et(jh, { titleId: null, descriptionId: null, panelRef: tr() }), E = Q(() => i(!1)), O = Q((V) => S({ type: 0, id: V })), N = Rn() ? C === 0 : !1, [A, b] = Jf(), m = { get current() {
    var V;
    return (V = x.panelRef.current) != null ? V : v.current;
  } }, y = ea(), { resolveContainers: _ } = Ch({ mainTreeNode: y, portals: A, defaultContainers: [m] }), $ = d !== null ? (d & De.Closing) === De.Closing : !1;
  ml(c || $ ? !1 : N, { allowed: Q(() => {
    var V, L;
    return [(L = (V = v.current) == null ? void 0 : V.closest("[data-headlessui-portal]")) != null ? L : null];
  }), disallowed: Q(() => {
    var V;
    return [(V = y == null ? void 0 : y.closest("body > *:not(#headlessui-portal-root)")) != null ? V : null];
  }) }), Sl(N, _, (V) => {
    V.preventDefault(), E();
  }), xh(N, g == null ? void 0 : g.defaultView, (V) => {
    V.preventDefault(), V.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), _l(c || $ ? !1 : N, g, _), gl(N, v, E);
  let [k, I] = Iu(), P = ne(() => [{ dialogState: C, close: E, setTitleId: O, unmount: u }, x], [C, x, E, O, u]), R = ne(() => ({ open: C === 0 }), [C]), T = { ref: w, id: r, role: l, tabIndex: -1, "aria-modal": c ? void 0 : C === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": k, unmount: u }, M = !Sh(), D = $t.None;
  N && !c && (D |= $t.RestoreFocus, D |= $t.TabLock, a && (D |= $t.AutoFocus), M && (D |= $t.InitialFocus));
  let H = Ee();
  return K.createElement(Bf, null, K.createElement(es, { force: !0 }, K.createElement(Kl, null, K.createElement(Yo.Provider, { value: P }, K.createElement(Yl, { target: v }, K.createElement(es, { force: !1 }, K.createElement(I, { slot: R }, K.createElement(b, null, K.createElement(Th, { initialFocus: s, initialFocusFallback: v, containers: _, features: D }, K.createElement(Bu, { value: E }, H({ ourProps: T, theirProps: h, slot: R, defaultTag: Uh, features: Wh, visible: C === 0, name: "Dialog" })))))))))));
}), Uh = "div", Wh = qt.RenderStrategy | qt.Static;
function Gh(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = En(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? K.createElement(ts, null, K.createElement(Vh, { show: r, transition: n, unmount: o.unmount }, K.createElement(ns, { ref: t, ...o }))) : K.createElement(ts, null, K.createElement(ns, { ref: t, open: r, ...o }));
}
let qh = "div";
function Yh(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = mr("Dialog.Panel"), c = Fe(t, a.panelRef), u = ne(() => ({ open: s === 0 }), [s]), h = Q((g) => {
    g.stopPropagation();
  }), p = { ref: c, id: r, onClick: h }, d = o ? qo : pe, v = o ? { unmount: l } : {}, w = Ee();
  return K.createElement(d, { ...v }, w({ ourProps: p, theirProps: i, slot: u, defaultTag: qh, name: "Dialog.Panel" }));
}
let Kh = "div";
function Zh(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = mr("Dialog.Backdrop"), s = ne(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? qo : pe, c = n ? { unmount: i } : {}, u = Ee();
  return K.createElement(a, { ...c }, u({ ourProps: l, theirProps: r, slot: s, defaultTag: Kh, name: "Dialog.Backdrop" }));
}
let Xh = "h2";
function Jh(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = mr("Dialog.Title"), l = Fe(t);
  se(() => (s(r), () => s(null)), [r, s]);
  let a = ne(() => ({ open: i === 0 }), [i]), c = { ref: l, id: r };
  return Ee()({ ourProps: c, theirProps: o, slot: a, defaultTag: Xh, name: "Dialog.Title" });
}
let Qh = Ce(Gh), aa = Ce(Yh), ep = Ce(Zh), ca = Ce(Jh), tp = Object.assign(Qh, { Panel: aa, Title: ca, Description: Pu });
function np({
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
const rp = /* @__PURE__ */ de(np);
function op({
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
const ip = /* @__PURE__ */ de(op);
function sp({
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
const lp = /* @__PURE__ */ de(sp);
function ap({
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
const cp = /* @__PURE__ */ de(ap);
function up({
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
const dp = /* @__PURE__ */ de(up);
function fp({
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
const hp = /* @__PURE__ */ de(fp);
function pp({
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
const mp = /* @__PURE__ */ de(pp);
function gp({
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
const vp = /* @__PURE__ */ de(gp);
function wp({
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
const yp = /* @__PURE__ */ de(wp);
function bp({
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
const xp = /* @__PURE__ */ de(bp);
function Sp({
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
const Cp = /* @__PURE__ */ de(Sp);
function _p({
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
const Ep = /* @__PURE__ */ de(_p);
function Rp({
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
const $p = /* @__PURE__ */ de(Rp);
function Tp({
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
const Mp = /* @__PURE__ */ de(Tp);
function Op({
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
const ua = /* @__PURE__ */ de(Op), Ip = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear", invalidOption: "{{value}} (invalid)" }, input: { clear: "Clear" }, datePicker: { calendarLabel: "Choose date", pickerLabel: "Date picker", hours: "Hours", minutes: "Minutes", seconds: "Seconds", today: "Today", clear: "Clear", done: "Done", weekdays: { sun: "Su", mon: "Mo", tue: "Tu", wed: "We", thu: "Th", fri: "Fr", sat: "Sa" }, previous: "Previous", next: "Next", am: "AM", pm: "PM" } }, Ap = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", rowLimitExceeded: '"{{sheet}}" has {{count}} rows, which exceeds the maximum of {{limit}}. Remove rows to continue.', rowLimitExceededMultiple: "These sheets exceed their row limit: {{sheets}}. Remove rows to continue.", sheetValidationErrors: "This sheet has validation errors. Fix them before uploading.", processing: "Processing data, please wait…", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Dp = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data", unsupportedFileType: "Unsupported file type. Please upload a {{formats}} file.", fileTooLarge: "File is too large. Maximum size is {{size}}." }, Fp = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, Pp = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", undoTooltip: "Undo", redoTooltip: "Redo", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, Np = { boolean: "This value must be true or false", includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique", date: "This is not a valid date", datetime: "This is not a valid date and time", time: "This is not a valid time", dateOutOfRange: "This date is outside the allowed range", asyncError: "This value could not be validated" }, kp = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, Lp = {
  components: Ip,
  importer: Ap,
  uploader: Dp,
  mapper: Fp,
  sheet: Pp,
  validators: Np,
  importStatus: kp
}, Vp = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer", invalidOption: "{{value}} (invalide)" }, input: { clear: "Effacer" }, datePicker: { calendarLabel: "Choisir une date", pickerLabel: "Sélecteur de date", hours: "Heures", minutes: "Minutes", seconds: "Secondes", today: "Aujourd'hui", clear: "Effacer", done: "Terminé", weekdays: { sun: "Di", mon: "Lu", tue: "Ma", wed: "Me", thu: "Je", fri: "Ve", sat: "Sa" }, previous: "Précédent", next: "Suivant", am: "AM", pm: "PM" } }, Hp = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", rowLimitExceeded: "« {{sheet}} » comporte {{count}} lignes, ce qui dépasse le maximum de {{limit}}. Supprimez des lignes pour continuer.", rowLimitExceededMultiple: "Ces feuilles dépassent leur limite de lignes : {{sheets}}. Supprimez des lignes pour continuer.", sheetValidationErrors: "Cette feuille comporte des erreurs de validation. Corrigez-les avant de télécharger.", processing: "Traitement des données, veuillez patienter…", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, zp = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement", unsupportedFileType: "Type de fichier non pris en charge. Veuillez télécharger un fichier {{formats}}.", fileTooLarge: "Le fichier est trop volumineux. La taille maximale est {{size}}." }, Bp = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, jp = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", undoTooltip: "Annuler", redoTooltip: "Rétablir", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Up = { boolean: "Cette valeur doit être vraie ou fausse", includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique", date: "Cette date n'est pas valide", datetime: "Cette date et heure ne sont pas valides", time: "Cette heure n'est pas valide", dateOutOfRange: "Cette date est en dehors de la plage autorisée", asyncError: "Cette valeur n'a pas pu être validée" }, Wp = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, Gp = {
  components: Vp,
  importer: Hp,
  uploader: zp,
  mapper: Bp,
  sheet: jp,
  validators: Up,
  importStatus: Wp
}, qp = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar", invalidOption: "{{value}} (inválido)" }, input: { clear: "Limpar" }, datePicker: { calendarLabel: "Escolher data", pickerLabel: "Seletor de data", hours: "Horas", minutes: "Minutos", seconds: "Segundos", today: "Hoje", clear: "Limpar", done: "Concluído", weekdays: { sun: "Dom", mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb" }, previous: "Anterior", next: "Próximo", am: "AM", pm: "PM" } }, Yp = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", rowLimitExceeded: '"{{sheet}}" tem {{count}} linhas, o que excede o máximo de {{limit}}. Remova linhas para continuar.', rowLimitExceededMultiple: "Estas planilhas excedem o limite de linhas: {{sheets}}. Remova linhas para continuar.", sheetValidationErrors: "Esta planilha tem erros de validação. Corrija-os antes de enviar.", processing: "Processando dados, aguarde…", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Kp = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente", unsupportedFileType: "Tipo de arquivo não suportado. Por favor, envie um arquivo {{formats}}.", fileTooLarge: "O arquivo é muito grande. O tamanho máximo é {{size}}." }, Zp = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Xp = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", undoTooltip: "Desfazer", redoTooltip: "Refazer", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Jp = { boolean: "Este valor deve ser verdadeiro ou falso", includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único", date: "Esta data não é válida", datetime: "Esta data e hora não são válidas", time: "Este horário não é válido", dateOutOfRange: "Esta data está fora do intervalo permitido", asyncError: "Não foi possível validar este valor" }, Qp = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, em = {
  components: qp,
  importer: Yp,
  uploader: Kp,
  mapper: Zp,
  sheet: Xp,
  validators: Jp,
  importStatus: Qp
}, da = me(
  {}
);
function tm({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ f(da.Provider, { value: e, children: t });
}
function ze() {
  return fe(da);
}
const nm = {
  en: Lp,
  fr: Gp,
  "pt-BR": em
}, rm = "en";
function rs(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? nm[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function om(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function im(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ f("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const s = o[1];
      i = t[s] ?? `{${s}}`;
    }
    return /* @__PURE__ */ f(pe, { children: i }, r);
  }) });
}
const fa = me(
  {}
);
function sm({ children: e }) {
  const { translationResources: t, locale: n } = ze(), r = n ?? rm;
  function o(s, l = {}) {
    const a = rs(r, s, t);
    return om(a, l);
  }
  function i(s, l = {}) {
    const a = rs(r, s, t);
    return im(a, l);
  }
  return /* @__PURE__ */ f(fa.Provider, { value: { t: o, tHtml: i }, children: e });
}
function we() {
  return fe(fa);
}
function uo({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: s,
  variant: l = "default"
}) {
  const { t: a } = we(), c = {
    danger: {
      icon: /* @__PURE__ */ f(
        vp,
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
  }, { icon: u, btnVariant: h, bgColor: p } = c[l];
  return /* @__PURE__ */ f(tp, { open: e, onClose: t, className: "hc:relative hc:z-10", children: [
    /* @__PURE__ */ f(
      ep,
      {
        transition: !0,
        className: "hc:bg-hello-csv-overlay/75 hc:fixed hc:inset-0 hc:transition-opacity hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ f("div", { className: "hc:fixed hc:inset-0 hc:z-10 hc:w-screen hc:overflow-y-auto", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:min-h-full hc:items-end hc:justify-center hc:p-4 hc:text-center hc:sm:items-center hc:sm:p-0", children: /* @__PURE__ */ f(
      aa,
      {
        transition: !0,
        className: "hc:bg-hello-csv-surface-raised hc:relative hc:transform hc:overflow-hidden hc:rounded-lg hc:px-4 hc:pt-5 hc:pb-4 hc:text-left hc:shadow-xl hc:transition-all hc:data-closed:translate-y-4 hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in hc:sm:my-8 hc:sm:w-full hc:sm:max-w-lg hc:sm:p-6 hc:data-closed:sm:translate-y-0 hc:data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ f("div", { className: "hc:sm:flex hc:sm:items-start", children: [
            u && /* @__PURE__ */ f(
              "div",
              {
                className: `hc:mx-auto hc:flex hc:size-12 hc:shrink-0 hc:items-center hc:justify-center hc:rounded-full ${p} hc:sm:mx-0 hc:sm:size-10`,
                children: u
              }
            ),
            /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:text-center hc:sm:mt-0 hc:sm:ml-4 hc:sm:text-left", children: [
              /* @__PURE__ */ f(
                ca,
                {
                  as: "h3",
                  className: "hc:text-hello-csv-text hc:text-base hc:font-semibold",
                  children: n
                }
              ),
              r && /* @__PURE__ */ f("div", { className: "hc:mt-2", children: /* @__PURE__ */ f("p", { className: "hc:text-hello-csv-text-muted hc:text-sm", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:sm:mt-4 hc:sm:flex hc:sm:flex-row-reverse", children: [
            /* @__PURE__ */ f("div", { className: "hc:sm:ml-3 hc:sm:w-auto", children: /* @__PURE__ */ f(
              Ve,
              {
                variant: h,
                onClick: () => {
                  s(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:sm:mt-0 hc:sm:w-auto", children: /* @__PURE__ */ f(
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
const lm = 100, ha = 8, am = 50, pa = 5, cm = [
  "text/csv",
  "text/tab-separated-values"
], um = [".csv", ".tsv"], dm = ",", fm = 500, hm = "headlessui-portal-root", Xn = "hello-csv", ma = "data-hellocsv-datepicker", gr = {
  autoComplete: "off",
  "data-bwignore": !0,
  "data-1p-ignore": !0,
  "data-lpignore": "true",
  "data-form-type": "other"
}, ga = 52.62, fo = "checkbox-column-id", va = 110, pm = 50, mm = 500, gm = 150, wa = "Yes", ya = "No", vm = ["true", "1", "yes", "y"], wm = ["false", "0", "no", "n"], ym = de(function({ children: t }, n) {
  return se(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === hm && s.classList.add(Xn);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Xn}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ f(
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
function bm({
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
const xm = /* @__PURE__ */ de(bm);
function Sm({
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
const Cm = /* @__PURE__ */ de(Sm);
function _m({
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
const Em = /* @__PURE__ */ de(_m);
function Rm({
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
const $m = /* @__PURE__ */ de(Rm);
function Tm({
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
const Mm = /* @__PURE__ */ de(Tm);
function Om({
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
const Im = /* @__PURE__ */ de(Om);
function Am({
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
const Dm = /* @__PURE__ */ de(Am);
function Fm({
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
const Pm = /* @__PURE__ */ de(Fm);
function Nm({
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
const km = /* @__PURE__ */ de(Nm);
function Lm({
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
const ba = /* @__PURE__ */ de(Lm), xa = de(
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
    const { t: u } = we(), [h, p] = Y(e);
    se(() => {
      p(e);
    }, [e]);
    const d = s && e != null && e !== "";
    function v(w) {
      const g = w.target, C = l === "number" ? g == null ? void 0 : g.valueAsNumber : g == null ? void 0 : g.value;
      return (typeof C == "number" && isNaN(C) ? "" : C) ?? "";
    }
    return /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-1", children: [
      /* @__PURE__ */ f(
        "input",
        {
          ...gr,
          "aria-label": a["aria-label"],
          ref: c,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof h == "boolean" ? h.toString() : Array.isArray(h) ? "" : h ?? "",
          onChange: (w) => (n == null ? void 0 : n(v(w))) ?? p(v(w)),
          className: `${i} ${o != null ? "hc:pl-10" : ""} ${s ? "hc:pr-10" : ""} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:col-start-1 hc:row-start-1 hc:block hc:rounded-md hc:px-3 hc:py-1.5 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6`,
          onBlur: (w) => t == null ? void 0 : t(v(w))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:ml-3 hc:size-5 hc:self-center hc:text-hello-csv-text-subtle hc:sm:size-4"
      }),
      d && /* @__PURE__ */ f(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": u("components.input.clear"),
          onClick: (w) => {
            w.stopPropagation(), n == null || n("");
          },
          className: "hc:col-end-2 hc:row-start-1 hc:flex hc:cursor-pointer hc:items-center hc:justify-self-end hc:pr-2",
          children: /* @__PURE__ */ f(
            ba,
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
function Vm(e, t, n) {
  return n.searchInputAsFilter && e == null ? { type: "ignore" } : e != null && t != null && n.compareFunction(e, t) ? { type: "change", value: null } : { type: "change", value: e };
}
function Ot({
  value: e,
  options: t,
  onChange: n,
  onClose: r,
  multiple: o = !1,
  compareFunction: i = (w, g) => w === g,
  clearable: s = !1,
  searchable: l = !1,
  placeholder: a,
  classes: c,
  displayPlaceholderWhenSelected: u = !1,
  autoFocus: h = !1,
  immediate: p = !1,
  searchInputAsFilter: d = !1,
  ...v
}) {
  const { t: w } = we(), [g, C] = Y(""), x = U(null);
  se(() => {
    var R;
    h && ((R = x.current) == null || R.focus());
  }, []);
  const S = (R) => o && Array.isArray(e) ? e.some((T) => i(T, R)) : i(e, R), E = (R) => {
    if (C(""), o) {
      const M = Array.isArray(R) ? R : [R];
      n(M);
      return;
    }
    const T = Vm(
      R ?? null,
      e,
      { searchInputAsFilter: d, compareFunction: i }
    );
    T.type === "change" && n(T.value);
  }, O = () => {
    C(""), n(o ? [] : null);
  }, N = t.filter((R) => S(R.value)), A = N.map((R) => R.label).join(", "), b = g && l ? t.filter(
    (R) => String(R.label).toLowerCase().includes(g.toLowerCase())
  ) : t, m = a ?? w("components.select.optionPlaceholder"), y = () => d ? g : l ? A : N.length > 0 ? u ? `${m}: ${A}` : A : "", $ = b.some((R) => R.group) ? Object.entries(
    b.reduce(
      (R, T) => {
        const M = T.group || "ungrouped";
        return R[M] = R[M] || [], R[M].push(T), R;
      },
      {}
    )
  ).map(([R, T]) => ({
    label: R,
    items: T
  })) : [{ label: null, items: b }], k = $.every(({ items: R }) => R.length === 0), I = d ? g.length > 0 : s && N.length > 0, P = () => {
    var R;
    d ? (C(""), x.current && (x.current.value = ""), (R = x.current) == null || R.focus()) : O();
  };
  return /* @__PURE__ */ f(
    bh,
    {
      value: e ?? (o ? [] : null),
      onChange: E,
      onClose: r,
      multiple: o,
      immediate: p,
      children: /* @__PURE__ */ f("div", { className: "hc:relative", children: [
        /* @__PURE__ */ f(
          lo,
          {
            className: "hc:w-full",
            "aria-label": v["aria-label"] ?? a,
            children: /* @__PURE__ */ f(
              Xl,
              {
                ...gr,
                ref: x,
                className: `${c} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:block hc:w-full hc:cursor-pointer hc:truncate hc:rounded-md hc:py-1.5 hc:focus:cursor-text ${I ? "hc:pr-12" : "hc:pr-2"} hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:pl-3 hc:text-left hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm`,
                displayValue: y,
                onChange: (R) => l && C(R.target.value),
                placeholder: m,
                readOnly: !l
              }
            )
          }
        ),
        I && /* @__PURE__ */ f(
          "span",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": w("components.select.clear"),
            onMouseDown: (R) => {
              R.preventDefault(), R.stopPropagation();
            },
            onClick: (R) => {
              R.stopPropagation(), P();
            },
            className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-6 hc:flex hc:cursor-pointer hc:items-center",
            children: /* @__PURE__ */ f(
              ba,
              {
                className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ f(lo, { className: "hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2", children: /* @__PURE__ */ f(
          Im,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:col-start-1 hc:row-start-1 hc:size-5 hc:self-center hc:justify-self-end hc:sm:size-4"
          }
        ) }),
        /* @__PURE__ */ f(
          Jl,
          {
            anchor: "bottom",
            transition: !0,
            className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:absolute hc:z-99 hc:mt-1 hc:max-h-60 hc:w-[var(--input-width)] hc:overflow-auto hc:rounded-md hc:py-1 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:data-leave:transition hc:data-leave:duration-100 hc:data-leave:ease-in hc:data-closed:data-leave:opacity-0 hc:sm:text-sm",
            children: [
              k && /* @__PURE__ */ f(
                ao,
                {
                  disabled: !0,
                  value: null,
                  className: "hc:text-hello-csv-text-subtle hc:pointer-events-none hc:relative hc:flex hc:items-center hc:justify-center hc:py-2 hc:pr-9 hc:pl-3 hc:select-none",
                  children: /* @__PURE__ */ f("span", { className: "hc:block hc:truncate hc:font-normal", children: w("components.select.noOptions") })
                },
                "no-options"
              ),
              $.map(({ label: R, items: T }) => /* @__PURE__ */ f("div", { children: [
                R && /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-subtle hc:py-2 hc:pr-9 hc:pl-3 hc:uppercase", children: R }),
                T.map((M) => /* @__PURE__ */ f(
                  ao,
                  {
                    value: M.value,
                    className: ({ focus: D }) => `hc:cursor-default hc:items-center hc:py-2 hc:pr-9 hc:pl-3 hc:outline-hidden hc:select-none hc:relative hc:flex ${D ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text"}`,
                    children: ({ focus: D, selected: H }) => /* @__PURE__ */ f(pe, { children: [
                      M.icon,
                      /* @__PURE__ */ f(
                        "span",
                        {
                          className: `hc:block hc:truncate ${H ? "hc:font-semibold" : "hc:font-normal"}`,
                          children: M.label
                        }
                      ),
                      H && /* @__PURE__ */ f(
                        "span",
                        {
                          className: `hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:items-center hc:pr-4 ${D ? "hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-primary"}`,
                          children: /* @__PURE__ */ f(
                            Cm,
                            {
                              "aria-hidden": "true",
                              className: "hc:h-5 hc:w-5"
                            }
                          )
                        }
                      )
                    ] })
                  },
                  typeof M.value == "object" ? JSON.stringify(M.value) : String(M.value)
                ))
              ] }, `${R || "all"}:${g}`))
            ]
          }
        )
      ] })
    }
  );
}
function Ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} }, Hm = Hn.exports, os;
function zm() {
  return os || (os = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Hm, function() {
      var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", a = "hour", c = "day", u = "week", h = "month", p = "quarter", d = "year", v = "date", w = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
        var P = ["th", "st", "nd", "rd"], R = I % 100;
        return "[" + I + (P[(R - 20) % 10] || P[R] || P[0]) + "]";
      } }, S = function(I, P, R) {
        var T = String(I);
        return !T || T.length >= P ? I : "" + Array(P + 1 - T.length).join(R) + I;
      }, E = { s: S, z: function(I) {
        var P = -I.utcOffset(), R = Math.abs(P), T = Math.floor(R / 60), M = R % 60;
        return (P <= 0 ? "+" : "-") + S(T, 2, "0") + ":" + S(M, 2, "0");
      }, m: function I(P, R) {
        if (P.date() < R.date()) return -I(R, P);
        var T = 12 * (R.year() - P.year()) + (R.month() - P.month()), M = P.clone().add(T, h), D = R - M < 0, H = P.clone().add(T + (D ? -1 : 1), h);
        return +(-(T + (R - M) / (D ? M - H : H - M)) || 0);
      }, a: function(I) {
        return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
      }, p: function(I) {
        return { M: h, y: d, w: u, d: c, D: v, h: a, m: l, s, ms: i, Q: p }[I] || String(I || "").toLowerCase().replace(/s$/, "");
      }, u: function(I) {
        return I === void 0;
      } }, O = "en", N = {};
      N[O] = x;
      var A = "$isDayjsObject", b = function(I) {
        return I instanceof $ || !(!I || !I[A]);
      }, m = function I(P, R, T) {
        var M;
        if (!P) return O;
        if (typeof P == "string") {
          var D = P.toLowerCase();
          N[D] && (M = D), R && (N[D] = R, M = D);
          var H = P.split("-");
          if (!M && H.length > 1) return I(H[0]);
        } else {
          var V = P.name;
          N[V] = P, M = V;
        }
        return !T && M && (O = M), M || !T && O;
      }, y = function(I, P) {
        if (b(I)) return I.clone();
        var R = typeof P == "object" ? P : {};
        return R.date = I, R.args = arguments, new $(R);
      }, _ = E;
      _.l = m, _.i = b, _.w = function(I, P) {
        return y(I, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
      };
      var $ = function() {
        function I(R) {
          this.$L = m(R.locale, null, !0), this.parse(R), this.$x = this.$x || R.x || {}, this[A] = !0;
        }
        var P = I.prototype;
        return P.parse = function(R) {
          this.$d = function(T) {
            var M = T.date, D = T.utc;
            if (M === null) return /* @__PURE__ */ new Date(NaN);
            if (_.u(M)) return /* @__PURE__ */ new Date();
            if (M instanceof Date) return new Date(M);
            if (typeof M == "string" && !/Z$/i.test(M)) {
              var H = M.match(g);
              if (H) {
                var V = H[2] - 1 || 0, L = (H[7] || "0").substring(0, 3);
                return D ? new Date(Date.UTC(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, L)) : new Date(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, L);
              }
            }
            return new Date(M);
          }(R), this.init();
        }, P.init = function() {
          var R = this.$d;
          this.$y = R.getFullYear(), this.$M = R.getMonth(), this.$D = R.getDate(), this.$W = R.getDay(), this.$H = R.getHours(), this.$m = R.getMinutes(), this.$s = R.getSeconds(), this.$ms = R.getMilliseconds();
        }, P.$utils = function() {
          return _;
        }, P.isValid = function() {
          return this.$d.toString() !== w;
        }, P.isSame = function(R, T) {
          var M = y(R);
          return this.startOf(T) <= M && M <= this.endOf(T);
        }, P.isAfter = function(R, T) {
          return y(R) < this.startOf(T);
        }, P.isBefore = function(R, T) {
          return this.endOf(T) < y(R);
        }, P.$g = function(R, T, M) {
          return _.u(R) ? this[T] : this.set(M, R);
        }, P.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, P.valueOf = function() {
          return this.$d.getTime();
        }, P.startOf = function(R, T) {
          var M = this, D = !!_.u(T) || T, H = _.p(R), V = function(W, re) {
            var q = _.w(M.$u ? Date.UTC(M.$y, re, W) : new Date(M.$y, re, W), M);
            return D ? q : q.endOf(c);
          }, L = function(W, re) {
            return _.w(M.toDate()[W].apply(M.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), M);
          }, F = this.$W, te = this.$M, X = this.$D, ue = "set" + (this.$u ? "UTC" : "");
          switch (H) {
            case d:
              return D ? V(1, 0) : V(31, 11);
            case h:
              return D ? V(1, te) : V(0, te + 1);
            case u:
              var ie = this.$locale().weekStart || 0, z = (F < ie ? F + 7 : F) - ie;
              return V(D ? X - z : X + (6 - z), te);
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
        }, P.endOf = function(R) {
          return this.startOf(R, !1);
        }, P.$set = function(R, T) {
          var M, D = _.p(R), H = "set" + (this.$u ? "UTC" : ""), V = (M = {}, M[c] = H + "Date", M[v] = H + "Date", M[h] = H + "Month", M[d] = H + "FullYear", M[a] = H + "Hours", M[l] = H + "Minutes", M[s] = H + "Seconds", M[i] = H + "Milliseconds", M)[D], L = D === c ? this.$D + (T - this.$W) : T;
          if (D === h || D === d) {
            var F = this.clone().set(v, 1);
            F.$d[V](L), F.init(), this.$d = F.set(v, Math.min(this.$D, F.daysInMonth())).$d;
          } else V && this.$d[V](L);
          return this.init(), this;
        }, P.set = function(R, T) {
          return this.clone().$set(R, T);
        }, P.get = function(R) {
          return this[_.p(R)]();
        }, P.add = function(R, T) {
          var M, D = this;
          R = Number(R);
          var H = _.p(T), V = function(te) {
            var X = y(D);
            return _.w(X.date(X.date() + Math.round(te * R)), D);
          };
          if (H === h) return this.set(h, this.$M + R);
          if (H === d) return this.set(d, this.$y + R);
          if (H === c) return V(1);
          if (H === u) return V(7);
          var L = (M = {}, M[l] = r, M[a] = o, M[s] = n, M)[H] || 1, F = this.$d.getTime() + R * L;
          return _.w(F, this);
        }, P.subtract = function(R, T) {
          return this.add(-1 * R, T);
        }, P.format = function(R) {
          var T = this, M = this.$locale();
          if (!this.isValid()) return M.invalidDate || w;
          var D = R || "YYYY-MM-DDTHH:mm:ssZ", H = _.z(this), V = this.$H, L = this.$m, F = this.$M, te = M.weekdays, X = M.months, ue = M.meridiem, ie = function(re, q, G, J) {
            return re && (re[q] || re(T, D)) || G[q].slice(0, J);
          }, z = function(re) {
            return _.s(V % 12 || 12, re, "0");
          }, W = ue || function(re, q, G) {
            var J = re < 12 ? "AM" : "PM";
            return G ? J.toLowerCase() : J;
          };
          return D.replace(C, function(re, q) {
            return q || function(G) {
              switch (G) {
                case "YY":
                  return String(T.$y).slice(-2);
                case "YYYY":
                  return _.s(T.$y, 4, "0");
                case "M":
                  return F + 1;
                case "MM":
                  return _.s(F + 1, 2, "0");
                case "MMM":
                  return ie(M.monthsShort, F, X, 3);
                case "MMMM":
                  return ie(X, F);
                case "D":
                  return T.$D;
                case "DD":
                  return _.s(T.$D, 2, "0");
                case "d":
                  return String(T.$W);
                case "dd":
                  return ie(M.weekdaysMin, T.$W, te, 2);
                case "ddd":
                  return ie(M.weekdaysShort, T.$W, te, 3);
                case "dddd":
                  return te[T.$W];
                case "H":
                  return String(V);
                case "HH":
                  return _.s(V, 2, "0");
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
                  return _.s(L, 2, "0");
                case "s":
                  return String(T.$s);
                case "ss":
                  return _.s(T.$s, 2, "0");
                case "SSS":
                  return _.s(T.$ms, 3, "0");
                case "Z":
                  return H;
              }
              return null;
            }(re) || H.replace(":", "");
          });
        }, P.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, P.diff = function(R, T, M) {
          var D, H = this, V = _.p(T), L = y(R), F = (L.utcOffset() - this.utcOffset()) * r, te = this - L, X = function() {
            return _.m(H, L);
          };
          switch (V) {
            case d:
              D = X() / 12;
              break;
            case h:
              D = X();
              break;
            case p:
              D = X() / 3;
              break;
            case u:
              D = (te - F) / 6048e5;
              break;
            case c:
              D = (te - F) / 864e5;
              break;
            case a:
              D = te / o;
              break;
            case l:
              D = te / r;
              break;
            case s:
              D = te / n;
              break;
            default:
              D = te;
          }
          return M ? D : _.a(D);
        }, P.daysInMonth = function() {
          return this.endOf(h).$D;
        }, P.$locale = function() {
          return N[this.$L];
        }, P.locale = function(R, T) {
          if (!R) return this.$L;
          var M = this.clone(), D = m(R, T, !0);
          return D && (M.$L = D), M;
        }, P.clone = function() {
          return _.w(this.$d, this);
        }, P.toDate = function() {
          return new Date(this.valueOf());
        }, P.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, P.toISOString = function() {
          return this.$d.toISOString();
        }, P.toString = function() {
          return this.$d.toUTCString();
        }, I;
      }(), k = $.prototype;
      return y.prototype = k, [["$ms", i], ["$s", s], ["$m", l], ["$H", a], ["$W", c], ["$M", h], ["$y", d], ["$D", v]].forEach(function(I) {
        k[I[1]] = function(P) {
          return this.$g(P, I[0], I[1]);
        };
      }), y.extend = function(I, P) {
        return I.$i || (I(P, $, y), I.$i = !0), y;
      }, y.locale = m, y.isDayjs = b, y.unix = function(I) {
        return y(1e3 * I);
      }, y.en = N[O], y.Ls = N, y.p = {}, y;
    });
  }(Hn)), Hn.exports;
}
var Sa = zm();
const st = /* @__PURE__ */ Ko(Sa);
var zn = { exports: {} }, Bm = zn.exports, is;
function jm() {
  return is || (is = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Bm, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, s = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, a = {}, c = function(g) {
        return (g = +g) + (g > 68 ? 1900 : 2e3);
      }, u = function(g) {
        return function(C) {
          this[g] = +C;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
        (this.zone || (this.zone = {})).offset = function(C) {
          if (!C || C === "Z") return 0;
          var x = C.match(/([+-]|\d\d)/g), S = 60 * x[1] + (+x[2] || 0);
          return S === 0 ? 0 : x[0] === "+" ? -S : S;
        }(g);
      }], p = function(g) {
        var C = a[g];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, d = function(g, C) {
        var x, S = a.meridiem;
        if (S) {
          for (var E = 1; E <= 24; E += 1) if (g.indexOf(S(E, 0, C)) > -1) {
            x = E > 12;
            break;
          }
        } else x = g === (C ? "pm" : "PM");
        return x;
      }, v = { A: [l, function(g) {
        this.afternoon = d(g, !1);
      }], a: [l, function(g) {
        this.afternoon = d(g, !0);
      }], Q: [o, function(g) {
        this.month = 3 * (g - 1) + 1;
      }], S: [o, function(g) {
        this.milliseconds = 100 * +g;
      }], SS: [i, function(g) {
        this.milliseconds = 10 * +g;
      }], SSS: [/\d{3}/, function(g) {
        this.milliseconds = +g;
      }], s: [s, u("seconds")], ss: [s, u("seconds")], m: [s, u("minutes")], mm: [s, u("minutes")], H: [s, u("hours")], h: [s, u("hours")], HH: [s, u("hours")], hh: [s, u("hours")], D: [s, u("day")], DD: [i, u("day")], Do: [l, function(g) {
        var C = a.ordinal, x = g.match(/\d+/);
        if (this.day = x[0], C) for (var S = 1; S <= 31; S += 1) C(S).replace(/\[|\]/g, "") === g && (this.day = S);
      }], w: [s, u("week")], ww: [i, u("week")], M: [s, u("month")], MM: [i, u("month")], MMM: [l, function(g) {
        var C = p("months"), x = (p("monthsShort") || C.map(function(S) {
          return S.slice(0, 3);
        })).indexOf(g) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], MMMM: [l, function(g) {
        var C = p("months").indexOf(g) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(g) {
        this.year = c(g);
      }], YYYY: [/\d{4}/, u("year")], Z: h, ZZ: h };
      function w(g) {
        var C, x;
        C = g, x = a && a.formats;
        for (var S = (g = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(y, _, $) {
          var k = $ && $.toUpperCase();
          return _ || x[$] || n[$] || x[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, P, R) {
            return P || R.slice(1);
          });
        })).match(r), E = S.length, O = 0; O < E; O += 1) {
          var N = S[O], A = v[N], b = A && A[0], m = A && A[1];
          S[O] = m ? { regex: b, parser: m } : N.replace(/^\[|\]$/g, "");
        }
        return function(y) {
          for (var _ = {}, $ = 0, k = 0; $ < E; $ += 1) {
            var I = S[$];
            if (typeof I == "string") k += I.length;
            else {
              var P = I.regex, R = I.parser, T = y.slice(k), M = P.exec(T)[0];
              R.call(_, M), y = y.replace(M, "");
            }
          }
          return function(D) {
            var H = D.afternoon;
            if (H !== void 0) {
              var V = D.hours;
              H ? V < 12 && (D.hours += 12) : V === 12 && (D.hours = 0), delete D.afternoon;
            }
          }(_), _;
        };
      }
      return function(g, C, x) {
        x.p.customParseFormat = !0, g && g.parseTwoDigitYear && (c = g.parseTwoDigitYear);
        var S = C.prototype, E = S.parse;
        S.parse = function(O) {
          var N = O.date, A = O.utc, b = O.args;
          this.$u = A;
          var m = b[1];
          if (typeof m == "string") {
            var y = b[2] === !0, _ = b[3] === !0, $ = y || _, k = b[2];
            _ && (k = b[2]), a = this.$locale(), !y && k && (a = x.Ls[k]), this.$d = function(T, M, D, H) {
              try {
                if (["x", "X"].indexOf(M) > -1) return new Date((M === "X" ? 1e3 : 1) * T);
                var V = w(M)(T), L = V.year, F = V.month, te = V.day, X = V.hours, ue = V.minutes, ie = V.seconds, z = V.milliseconds, W = V.zone, re = V.week, q = /* @__PURE__ */ new Date(), G = te || (L || F ? 1 : q.getDate()), J = L || q.getFullYear(), j = 0;
                L && !F || (j = F > 0 ? F - 1 : q.getMonth());
                var Z, oe = X || 0, be = ue || 0, ce = ie || 0, ge = z || 0;
                return W ? new Date(Date.UTC(J, j, G, oe, be, ce, ge + 60 * W.offset * 1e3)) : D ? new Date(Date.UTC(J, j, G, oe, be, ce, ge)) : (Z = new Date(J, j, G, oe, be, ce, ge), re && (Z = H(Z).week(re).toDate()), Z);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(N, m, A, x), this.init(), k && k !== !0 && (this.$L = this.locale(k).$L), $ && N != this.format(m) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (m instanceof Array) for (var I = m.length, P = 1; P <= I; P += 1) {
            b[1] = m[P - 1];
            var R = x.apply(this, b);
            if (R.isValid()) {
              this.$d = R.$d, this.$L = R.$L, this.init();
              break;
            }
            P === I && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, O);
        };
      };
    });
  }(zn)), zn.exports;
}
var Um = jm();
const Wm = /* @__PURE__ */ Ko(Um);
Sa.extend(Wm);
const Ca = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DDTHH:mm:ss",
  time: "HH:mm:ss"
};
function ho(e, t = !1) {
  return e === "date" || t ? Ca[e] : e === "time" ? "HH:mm" : "YYYY-MM-DDTHH:mm";
}
function Zo(e, t = !1, n = "12h") {
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
function Gm(e, t = {}) {
  const n = [
    t.outputFormat,
    t.displayFormat,
    Ca[e],
    ho(e, !0),
    ho(e, !1)
  ];
  for (const r of ["12h", "24h"])
    for (const o of [!0, !1])
      n.push(Zo(e, o, r));
  return n.filter((r) => !!r);
}
function Ze(e, t, n = {}) {
  if (e == null || e.trim() === "")
    return null;
  const r = st(e.trim(), Gm(t, n), !0);
  return r.isValid() ? r : null;
}
function po(e, t, n = {}) {
  return !e || !e.isValid() ? "" : e.format(
    n.outputFormat ?? ho(t, n.showSeconds)
  );
}
function qm(e, t, n = {}) {
  if (e.trim() === "")
    return "";
  const r = Ze(e, t, n);
  return r ? po(r, t, n) : e;
}
function _a(e, t, n = {}) {
  if (e == null || e === "")
    return "";
  const r = Ze(e, t, n);
  return r ? r.format(
    n.displayFormat ?? Zo(
      t,
      n.showSeconds,
      n.hourFormat
    )
  ) : e;
}
function Ym(e) {
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
function Ea(e, t, n) {
  return !!(t && e.isBefore(t, "day") || n && e.isAfter(n, "day"));
}
function Km(e, t, n) {
  return !!(t && e.isBefore(t) || n && e.isAfter(n));
}
function Zm({
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
  const h = { outputFormat: n, displayFormat: r, showSeconds: s, hourFormat: l }, p = l !== "24h", d = e === "date" || e === "datetime", v = e === "time" || e === "datetime", w = Ze(a ?? t, e, h), [g, C] = Y(w), [x, S] = Y(
    a ?? _a(t, e, h)
  ), [E, O] = Y(
    w ?? st().startOf("month")
  ), [N, A] = Y(!0), [b, m] = Y("days"), y = Ze(o, e, h), _ = Ze(i, e, h);
  function $(G) {
    return G.format(
      r ?? Zo(e, s, l)
    );
  }
  function k() {
    const G = x.trim();
    if (G === "") {
      c("");
      return;
    }
    const J = Ze(G, e, h);
    c(J ? po(J, e, h) : G);
  }
  const I = U(() => {
  });
  I.current = k;
  function P(G, { commit: J }) {
    C(G), O(G.startOf("month")), S($(G)), J && c(po(G, e, h));
  }
  function R(G) {
    const J = G.target.value;
    S(J);
    const j = Ze(J, e, h);
    j && (C(j), O(j.startOf("month")));
  }
  function T(G) {
    var j, Z;
    const J = G.format("YYYY-MM-DD");
    (Z = (j = u.current) == null ? void 0 : j[J]) == null || Z.focus();
  }
  function M(G) {
    if (G.key === "Enter")
      G.preventDefault(), G.stopPropagation(), k();
    else if (G.key === "Escape" && N)
      G.preventDefault(), G.stopPropagation(), A(!1);
    else if (G.key === "ArrowDown" && d) {
      G.preventDefault(), A(!0);
      const J = g ?? st();
      O(J.startOf("month")), requestAnimationFrame(() => T(J));
    }
  }
  function D(G) {
    if (Ea(G, y, _)) return;
    const J = g ?? st().startOf("day"), j = G.hour(J.hour()).minute(J.minute()).second(J.second());
    P(j, { commit: e === "date" });
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
        G.preventDefault(), G.stopPropagation(), D(J);
        return;
      default:
        return;
    }
    G.preventDefault(), G.stopPropagation(), O(j.startOf("month")), requestAnimationFrame(() => T(j));
  }
  function V(G, J) {
    const j = Number(J);
    if (Number.isNaN(j)) return;
    const oe = (g ?? st().startOf("day"))[G](j);
    C(oe), S($(oe));
  }
  const L = (g == null ? void 0 : g.hour()) ?? 0, F = L >= 12 ? "PM" : "AM", te = p ? L % 12 || 12 : L;
  function X(G) {
    const J = Number(G);
    if (Number.isNaN(J)) return;
    const j = g ?? st().startOf("day");
    let Z = J;
    if (p) {
      const be = (J % 12 + 12) % 12;
      Z = F === "PM" ? be + 12 : be;
    }
    const oe = j.hour(Z);
    C(oe), S($(oe));
  }
  function ue(G) {
    if (G === F) return;
    const J = g ?? st().startOf("day"), j = J.hour() % 12, Z = J.hour(G === "PM" ? j + 12 : j);
    C(Z), S($(Z));
  }
  function ie() {
    O(b === "days" ? E.subtract(1, "month") : b === "months" ? E.subtract(1, "year") : E.subtract(10, "year"));
  }
  function z() {
    O(b === "days" ? E.add(1, "month") : b === "months" ? E.add(1, "year") : E.add(10, "year"));
  }
  function W() {
    m(b === "days" ? "months" : "years");
  }
  function re(G) {
    O(E.month(G)), m("days");
  }
  function q(G) {
    O(E.year(G)), m("months");
  }
  return {
    // state
    open: N,
    setOpen: A,
    text: x,
    draft: g,
    viewMonth: E,
    view: b,
    minBound: y,
    maxBound: _,
    // derived
    is12h: p,
    hasCalendar: d,
    hasTime: v,
    meridiem: F,
    hourFieldValue: te,
    commitTextRef: I,
    // trigger handlers
    handleInput: R,
    handleInputKeyDown: M,
    commitText: k,
    // calendar handlers
    handlePrev: ie,
    handleNext: z,
    handleTitleClick: W,
    selectDay: D,
    selectMonth: re,
    selectYear: q,
    handleGridKeyDown: H,
    // time handlers
    setHour: X,
    setTimePart: V,
    setMeridiem: ue
  };
}
function vr(e) {
  return e.type === "date" || e.type === "datetime" || e.type === "time";
}
const Xm = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep",
  "undoRedo"
], Jm = (e) => e == null, Ra = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Qm(e, t) {
  return e.flatMap((n) => {
    if (n.maxRows == null)
      return [];
    const r = t.find((i) => i.sheetId === n.id), o = r != null ? Ra(r).length : 0;
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
function Et(e) {
  return Jm(e) ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
}
const ss = (e) => [...new Set(e)];
function jt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Jn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function eg(e, t) {
  if (e == null)
    return "";
  let n = String(e);
  return n = n.replace(/"/g, '""'), (n.includes('"') || n.includes(t) || /[\n\r]/.test(n)) && (n = `"${n}"`), n;
}
function $a(e, t) {
  return e.map(
    (n) => n.map((r) => eg(r, t)).join(t)
  ).join(`
`);
}
function Xo(e, t, n, r) {
  const o = e.columns.map(
    (l) => r === "label" ? l.label : l.id
  ), i = t.map(
    (l) => e.columns.map((a) => {
      const c = l[a.id];
      return r === "value" || c == null ? Array.isArray(c) ? c.join(", ") : c : Oa(
        e,
        a,
        c,
        n
      );
    })
  ), s = $a([o, ...i], dm);
  return new Blob([s], { type: "text/csv" });
}
function Ta(e, t, n, r) {
  const o = Xo(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function Ma(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function mo(e, t) {
  return Array.isArray(t) ? t.map((n) => e[n] ?? n).join(", ") : typeof t != "string" ? t : e[t] ?? t;
}
function Oa(e, t, n, r) {
  var o, i, s;
  if (t.type === "enum")
    return mo(
      ((o = r[e.id]) == null ? void 0 : o[t.id]) ?? {},
      n
    );
  if (t.type === "reference" && n != null)
    return mo(
      Ma(t, r),
      n
    );
  if (t.type === "boolean") {
    if (n === !0)
      return ((i = t.typeArguments) == null ? void 0 : i.trueLabel) ?? wa;
    if (n === !1)
      return ((s = t.typeArguments) == null ? void 0 : s.falseLabel) ?? ya;
  }
  return vr(t) && typeof n == "string" ? _a(
    n,
    t.type,
    t.typeArguments
  ) : n;
}
function Jo(e) {
  return e.map((t) => ({ ...t, rows: Ra(t) }));
}
const ls = 4, An = 8;
function tg({
  open: e,
  inputRef: t,
  panelRef: n,
  onScrollAway: r
}) {
  const [o, i] = Y({
    top: 0,
    left: 0
  });
  return We(() => {
    if (!e) return;
    const s = () => {
      const l = t.current, a = n.current;
      if (!l || !a) return;
      const c = l.getBoundingClientRect(), u = window.innerHeight, h = window.innerWidth;
      if (c.bottom <= 0 || c.top >= u || c.right <= 0 || c.left >= h) {
        r();
        return;
      }
      const d = a.offsetHeight, v = a.offsetWidth, w = u - c.bottom, C = w < d && c.top > w ? c.top - d - ls : c.bottom + ls, x = jt(
        C,
        An,
        u - d - An
      ), S = jt(
        c.left,
        An,
        h - v - An
      );
      i({ top: x + window.scrollY, left: S + window.scrollX });
    };
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [e]), o;
}
const ng = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function rg({
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
  onSelectYear: h,
  onDayKeyDown: p
}) {
  const { t: d } = we(), v = Math.floor(t.year() / 10) * 10, w = Ym(t), g = st(), C = n ?? t.startOf("month"), x = e === "days" ? t.format("MMMM YYYY") : e === "months" ? t.format("YYYY") : `${v} - ${v + 9}`;
  return /* @__PURE__ */ f("div", { className: "hc:w-56", children: [
    /* @__PURE__ */ f("div", { className: "hc:mb-2 hc:flex hc:items-center hc:justify-between", children: [
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          "aria-label": d("components.datePicker.previous"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: s,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ f($m, { "aria-hidden": "true", className: "hc:size-5" })
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          "aria-live": "polite",
          onMouseDown: (S) => S.preventDefault(),
          onClick: a,
          className: "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:px-2 hc:py-1 hc:font-semibold",
          children: x
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          "aria-label": d("components.datePicker.next"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: l,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ f(Mm, { "aria-hidden": "true", className: "hc:size-5" })
        }
      )
    ] }),
    e === "days" && /* @__PURE__ */ f("div", { role: "grid", "aria-label": d("components.datePicker.calendarLabel"), children: [
      /* @__PURE__ */ f("div", { role: "row", className: "hc:mb-1 hc:grid hc:grid-cols-7", children: ng.map((S) => /* @__PURE__ */ f(
        "div",
        {
          role: "columnheader",
          className: "hc:text-hello-csv-text-subtle hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:text-xs hc:font-medium",
          children: d(`components.datePicker.weekdays.${S}`)
        },
        S
      )) }),
      w.map((S) => /* @__PURE__ */ f(
        "div",
        {
          role: "row",
          className: "hc:grid hc:grid-cols-7",
          children: S.map((E) => {
            const O = E.format("YYYY-MM-DD"), N = n != null && E.isSame(n, "day"), A = E.isSame(g, "day"), b = !E.isSame(t, "month"), m = Ea(E, r, o), y = E.isSame(C, "day");
            return /* @__PURE__ */ f("div", { role: "gridcell", children: /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                ref: (_) => {
                  i.current && (i.current[O] = _);
                },
                tabIndex: y ? 0 : -1,
                disabled: m,
                "aria-label": E.format("dddd, MMMM D, YYYY"),
                "aria-selected": N,
                "aria-current": A ? "date" : void 0,
                onClick: () => c(E),
                onKeyDown: (_) => p(_, E),
                className: `hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:rounded hc:text-sm ${N ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast hc:cursor-pointer" : m ? "hc:text-hello-csv-text-subtle hc:cursor-not-allowed hc:opacity-50" : b ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted hc:cursor-pointer" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer"} ${A && !N ? "hc:ring-hello-csv-primary hc:ring-1" : ""}`,
                children: E.date()
              }
            ) }, O);
          })
        },
        S[0].format("YYYY-MM-DD")
      ))
    ] }),
    e === "months" && /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const O = E === t.month();
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onMouseDown: (N) => N.preventDefault(),
          onClick: () => u(E),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${O ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: st().month(E).format("MMM")
        },
        E
      );
    }) }),
    e === "years" && /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const O = v - 1 + E, N = O === t.year(), A = O < v || O > v + 9;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onMouseDown: (b) => b.preventDefault(),
          onClick: () => h(O),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${N ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : A ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: O
        },
        O
      );
    }) })
  ] });
}
function og({
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
  const { t: c } = we();
  return /* @__PURE__ */ f(
    "div",
    {
      className: `hc:flex hc:items-end hc:gap-2 ${r ? "hc:border-hello-csv-border hc:mt-3 hc:border-t hc:pt-3" : ""}`,
      children: [
        /* @__PURE__ */ f(
          Fr,
          {
            label: c("components.datePicker.hours"),
            min: t ? 1 : 0,
            max: t ? 12 : 23,
            value: i,
            onChange: s
          }
        ),
        /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
        /* @__PURE__ */ f(
          Fr,
          {
            label: c("components.datePicker.minutes"),
            max: 59,
            value: (e == null ? void 0 : e.minute()) ?? 0,
            onChange: (u) => l("minute", u)
          }
        ),
        n && /* @__PURE__ */ f(pe, { children: [
          /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
          /* @__PURE__ */ f(
            Fr,
            {
              label: c("components.datePicker.seconds"),
              max: 59,
              value: (e == null ? void 0 : e.second()) ?? 0,
              onChange: (u) => l("second", u)
            }
          )
        ] }),
        t && /* @__PURE__ */ f("div", { className: "hc:ring-hello-csv-border-strong hc:ml-1 hc:flex hc:overflow-hidden hc:rounded-md hc:ring-1", children: ["AM", "PM"].map((u, h) => /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            "aria-pressed": o === u,
            onMouseDown: (p) => p.preventDefault(),
            onClick: () => a(u),
            className: `hc:cursor-pointer hc:px-2 hc:py-1 hc:text-sm ${h === 1 ? "hc:border-hello-csv-border-strong hc:border-l" : ""} ${o === u ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
            children: c(`components.datePicker.${u === "AM" ? "am" : "pm"}`)
          },
          u
        )) })
      ]
    }
  );
}
function Fr({ label: e, value: t, max: n, min: r = 0, onChange: o }) {
  return /* @__PURE__ */ f("label", { className: "hc:flex hc:flex-col hc:text-xs", children: [
    /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text-subtle hc:mb-1", children: e }),
    /* @__PURE__ */ f(
      "input",
      {
        ...gr,
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
const ig = "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:block hc:w-full hc:rounded-md hc:py-1.5 hc:pr-10 hc:pl-3 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6";
function sg({
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
  const { t: h } = we(), p = U(null), d = U(null), v = U(null), w = U({}), g = Zm({
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
  }), { open: C, setOpen: x, hasCalendar: S, hasTime: E, commitTextRef: O } = g, N = tg({
    open: C,
    inputRef: d,
    panelRef: v,
    onScrollAway: () => O.current()
  });
  return se(() => {
    var b, m, y;
    (b = d.current) == null || b.focus();
    const A = ((m = d.current) == null ? void 0 : m.value.length) ?? 0;
    (y = d.current) == null || y.setSelectionRange(A, A);
  }, []), se(() => {
    const A = (m) => {
      var y, _;
      return !!m && (!!((y = p.current) != null && y.contains(m)) || !!((_ = v.current) != null && _.contains(m)));
    }, b = (m) => {
      A(m.target) && (A(m.relatedTarget) || O.current());
    };
    return document.addEventListener("focusout", b), () => document.removeEventListener("focusout", b);
  }, [O]), /* @__PURE__ */ f("div", { ref: p, className: "hc:relative hc:w-full", children: [
    /* @__PURE__ */ f("div", { className: "hc:relative", children: [
      /* @__PURE__ */ f(
        "input",
        {
          ...gr,
          ref: d,
          "aria-label": u["aria-label"],
          type: "text",
          className: ig,
          value: g.text,
          onInput: g.handleInput,
          onKeyDown: g.handleInputKeyDown
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          "aria-label": h("components.datePicker.pickerLabel"),
          "aria-expanded": C,
          onClick: () => x((A) => !A),
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2 hc:outline-hidden",
          children: E && !S ? /* @__PURE__ */ f(Pm, { "aria-hidden": "true", className: "hc:size-5 hc:sm:size-4" }) : /* @__PURE__ */ f(
            xm,
            {
              "aria-hidden": "true",
              className: "hc:size-5 hc:sm:size-4"
            }
          )
        }
      )
    ] }),
    C && Zt(
      // Portaled out of the grid so the popover escapes the scroll
      // container's overflow clipping and the editing cell's stacking
      // context. The wrapper carries ROOT_CLASS (`hello-csv`) because the
      // library's Tailwind utilities are scoped under it — without a
      // `.hello-csv` ancestor the panel would render unstyled (the theme
      // CSS variables live on <html>, so those resolve regardless). This
      // mirrors how Root.tsx styles the headlessui portal root.
      /* @__PURE__ */ f("div", { className: Xn, children: /* @__PURE__ */ f(
        "div",
        {
          ref: v,
          [ma]: "",
          onMouseDown: (A) => {
            A.target.closest("input, button, select, textarea") || A.preventDefault();
          },
          onKeyDown: (A) => {
            var b;
            A.key === "Escape" && (A.stopPropagation(), x(!1), (b = d.current) == null || b.focus());
          },
          style: { position: "absolute", top: N.top, left: N.left },
          className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:z-99 hc:w-max hc:rounded-md hc:p-3 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:sm:text-sm",
          role: "dialog",
          "aria-label": h("components.datePicker.pickerLabel"),
          children: [
            S && /* @__PURE__ */ f(
              rg,
              {
                view: g.view,
                viewMonth: g.viewMonth,
                draft: g.draft,
                minBound: g.minBound,
                maxBound: g.maxBound,
                dayRefs: w,
                onPrev: g.handlePrev,
                onNext: g.handleNext,
                onTitleClick: g.handleTitleClick,
                onSelectDay: g.selectDay,
                onSelectMonth: g.selectMonth,
                onSelectYear: g.selectYear,
                onDayKeyDown: g.handleGridKeyDown
              }
            ),
            E && /* @__PURE__ */ f(
              og,
              {
                draft: g.draft,
                is12h: g.is12h,
                showSeconds: s,
                hasCalendar: S,
                meridiem: g.meridiem,
                hourFieldValue: g.hourFieldValue,
                onHourChange: g.setHour,
                onPartChange: g.setTimePart,
                onMeridiem: g.setMeridiem
              }
            ),
            /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:flex hc:justify-end", children: /* @__PURE__ */ f(Ve, { variant: "primary", onClick: g.commitText, children: h("components.datePicker.done") }) })
          ]
        }
      ) }),
      document.body
    )
  ] });
}
function lg({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ f("div", { children: [
    /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-1 hc:sm:hidden", children: /* @__PURE__ */ f(
      Ot,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "hc:hidden hc:sm:block", children: /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border hc:border-b", children: /* @__PURE__ */ f(
      "nav",
      {
        "aria-label": "Tabs",
        className: "hc:-mb-px hc:flex hc:space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ f(
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
const ag = St(
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
), cg = St(
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
function ug({
  variant: e,
  children: t,
  tooltipText: n,
  focusable: r = !0,
  placement: o = "bottom"
}) {
  const i = ag({ variant: e, placement: o }), s = cg({
    withOutline: !!n
  });
  return /* @__PURE__ */ f(
    "div",
    {
      className: s,
      tabIndex: r ? 0 : void 0,
      children: [
        t,
        n && /* @__PURE__ */ f("span", { className: i, children: [
          /* @__PURE__ */ f("span", { "aria-hidden": "true", className: `hc:absolute hc:left-3 hc:h-2 hc:w-2 hc:rotate-45 hc:bg-hello-csv-tooltip-surface ${o === "top" ? "hc:-bottom-1" : "hc:-top-1"}` }),
          n
        ] })
      ]
    }
  );
}
const dg = St(
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
function fg({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ f("span", { className: "hc:isolate hc:inline-flex hc:rounded-md hc:shadow-xs", children: t.map((n, r) => /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: dg({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const Rt = 8, Dn = 8, ht = 8, Fn = -4, hg = St(
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
function lt({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = Y(!1), [s, l] = Y({ top: 0, left: 0 }), [a, c] = Y("bottom"), [u, h] = Y(0), p = U(null), d = U(null), [v, w] = Y(null);
  se(() => {
    const S = document.createElement("div");
    return S.classList.add(Xn), document.body.appendChild(S), w(S), () => {
      document.body.removeChild(S);
    };
  }, []);
  const g = () => {
    requestAnimationFrame(() => {
      if (!p.current || !d.current) return;
      const S = p.current.getBoundingClientRect(), E = d.current.getBoundingClientRect(), O = window.innerWidth, N = window.innerHeight, A = N - S.bottom, b = S.top, m = O - S.right;
      let y = "bottom";
      A >= E.height + Rt ? y = "bottom" : b >= E.height + Rt ? y = "top" : m >= E.width + Rt ? y = "right" : y = "left";
      let _ = 0, $ = 0;
      switch (y) {
        case "bottom":
          _ = S.bottom + Rt + window.scrollY, $ = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "top":
          _ = S.top - E.height - Rt + window.scrollY, $ = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "right":
          _ = S.top + S.height / 2 - E.height / 2 + window.scrollY, $ = S.right + Rt + window.scrollX;
          break;
        case "left":
          _ = S.top + S.height / 2 - E.height / 2 + window.scrollY, $ = S.left - E.width - Rt + window.scrollX;
          break;
      }
      _ = jt(
        _,
        Dn + window.scrollY,
        window.scrollY + N - E.height - Dn
      ), $ = jt(
        $,
        Dn + window.scrollX,
        window.scrollX + O - E.width - Dn
      );
      const k = S.left + S.width / 2 + window.scrollX, I = S.top + S.height / 2 + window.scrollY;
      let P = 0;
      if (y === "top" || y === "bottom") {
        const R = k - $;
        P = jt(
          R,
          ht,
          E.width - ht
        );
      } else {
        const R = I - _;
        P = jt(
          R,
          ht,
          E.height - ht
        );
      }
      c(y), l({ top: _, left: $ }), h(P), i(!0);
    });
  }, C = () => i(!1), x = Ie();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: p,
      tabIndex: 0,
      className: `${n ?? ""} hc:relative hc:inline-block`,
      onMouseEnter: g,
      onMouseLeave: C,
      onFocus: g,
      onBlur: C,
      "aria-describedby": x,
      children: [
        t,
        v && Zt(
          /* @__PURE__ */ f(
            "div",
            {
              id: x,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: d,
              className: hg({ visible: o, hidden: r }),
              style: {
                top: `${s.top}px`,
                left: `${s.left}px`
              },
              children: [
                e,
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: "hc:bg-hello-csv-tooltip-surface hc:absolute hc:h-2 hc:w-2 hc:rotate-45",
                    style: a === "bottom" ? { top: Fn, left: u - ht / 2 } : a === "top" ? {
                      bottom: Fn,
                      left: u - ht / 2
                    } : a === "left" ? {
                      right: Fn,
                      top: u - ht / 2
                    } : {
                      left: Fn,
                      top: u - ht / 2
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
const pg = St(
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
function Qo({ children: e, variant: t }) {
  const n = pg({ variant: t });
  return /* @__PURE__ */ f("div", { className: n, children: e });
}
function mg({
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
const Ia = /* @__PURE__ */ de(mg);
function gg({
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
const vg = /* @__PURE__ */ de(gg);
function wg({
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
const go = /* @__PURE__ */ de(wg);
function yg({
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
const bg = /* @__PURE__ */ de(yg), xg = {
  info: {
    icon: /* @__PURE__ */ f(
      bg,
      {
        className: "hc:text-hello-csv-primary-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-primary-extra-light hc:text-hello-csv-primary hc:rounded-md hc:p-4"
  },
  success: {
    icon: /* @__PURE__ */ f(
      Ia,
      {
        className: "hc:text-hello-csv-success-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:rounded-md hc:p-4"
  },
  error: {
    icon: /* @__PURE__ */ f(
      go,
      {
        className: "hc:text-hello-csv-danger-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:rounded-md hc:p-4"
  },
  warning: {
    icon: /* @__PURE__ */ f(
      go,
      {
        className: "hc:text-hello-csv-warning-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-warning-extra-light hc:text-hello-csv-warning hc:rounded-md hc:p-4"
  }
};
function ei({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = xg[e];
  return /* @__PURE__ */ f("div", { className: o, children: /* @__PURE__ */ f("div", { className: "hc:flex", children: [
    /* @__PURE__ */ f("div", { className: "hc:mt-1 hc:shrink-0", children: r }),
    /* @__PURE__ */ f("div", { className: "hc:ml-3", children: [
      t && /* @__PURE__ */ f("div", { className: "hc:text-base", children: t }),
      /* @__PURE__ */ f("div", { className: "hc:text-sm", children: n })
    ] })
  ] }) });
}
function Aa({ children: e }) {
  return /* @__PURE__ */ f("div", { className: "hc:flex", children: [
    /* @__PURE__ */ f("div", { className: "hc:shrink-0", children: /* @__PURE__ */ f(
      Mp,
      {
        "aria-hidden": "true",
        className: "hc:text-hello-csv-danger hc:size-5"
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "hc:ml-3 hc:flex-1 hc:md:flex hc:md:justify-between", children: /* @__PURE__ */ f("p", { className: "hc:text-hello-csv-danger hc:text-sm", children: e }) })
  ] });
}
const Sg = St(
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
function Da({ color: e = "dark" }) {
  return /* @__PURE__ */ f("span", { className: `${Sg({ color: e })}` });
}
function Fa(e, t) {
  return e.indexOf(t) !== -1;
}
function Pa(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Na(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
async function ka(e, t, n) {
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
class ft {
  constructor(t) {
    ye(this, "definition");
    // Empty cells only reach validators that opt in; presence is `required`'s job.
    ye(this, "validatesEmptyValues", !1);
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class Cg extends ft {
  isValid(t) {
    if (!Et(t) && typeof t != "boolean")
      return this.definition.error || "validators.boolean";
  }
}
class _g extends ft {
  constructor(n) {
    super(n);
    ye(this, "key");
    ye(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn, this.validatesEmptyValues = n.validatesEmptyValues ?? !0;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
class Eg extends ft {
  constructor(n) {
    super(n);
    ye(this, "dateType");
    ye(this, "typeArguments");
    ye(this, "min");
    ye(this, "max");
    this.dateType = n.dateType, this.typeArguments = {
      outputFormat: n.outputFormat,
      displayFormat: n.displayFormat,
      showSeconds: n.showSeconds
    }, this.min = n.min, this.max = n.max;
  }
  isValid(n) {
    if (Et(n))
      return;
    if (typeof n != "string")
      return this.definition.error || `validators.${this.dateType}`;
    const r = Ze(n, this.dateType, this.typeArguments);
    if (!r)
      return this.definition.error || `validators.${this.dateType}`;
    const o = Ze(this.min, this.dateType, this.typeArguments), i = Ze(this.max, this.dateType, this.typeArguments);
    if (Km(r, o, i))
      return this.definition.error || "validators.dateOutOfRange";
  }
}
function Rg(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class wr extends ft {
  constructor(n) {
    super(n);
    ye(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(Rg(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class $g extends wr {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class Tg extends ft {
  constructor(n) {
    super(n);
    ye(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class Mg extends ft {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class Og extends ft {
  constructor(n) {
    super(n);
    ye(this, "delimiter");
    ye(this, "values");
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
class Ig extends wr {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class Ag extends wr {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class Dg extends ft {
  constructor(n) {
    super(n);
    ye(this, "when");
    ye(this, "validatesEmptyValues", !0);
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && Et(n))
      return this.definition.error || "validators.required";
  }
}
class Fg extends ft {
  constructor(n) {
    super(n);
    ye(this, "seen");
    ye(this, "caseInsensitive");
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
function Pg(e) {
  const t = {
    regex_matches: wr,
    required: Dg,
    unique: Fg,
    includes: Tg,
    multi_includes: Og,
    boolean: Cg,
    is_integer: Mg,
    postal_code: Ag,
    phone_number: Ig,
    email: $g,
    date: Eg,
    custom: _g
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function La(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !Et(l))) == null ? void 0 : s.filter((l, a, c) => c.indexOf(l) === a)) ?? [];
}
function ti(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function Ng(e, t, n, r, o, i, s, l) {
  return ne(() => {
    let c = e.rows;
    switch (n) {
      case "errors":
        c = e.rows.filter(
          (u, h) => r.some((p) => p.rowIndex === h)
        );
        break;
      case "valid":
        c = e.rows.filter(
          (u, h) => !r.some((p) => p.rowIndex === h)
        );
        break;
      case "all":
      default:
        c = e.rows;
    }
    if (o != null && (c = c.filter((u) => {
      const h = ti(t, i.id, u);
      return r.find(
        (d) => d.rowIndex === h && d.columnId === o
      ) != null;
    })), s.trim() !== "") {
      const u = Jn(s);
      c = c.filter(
        (h) => i.columns.some((p) => {
          var w;
          const d = h[p.id], { displayValue: v } = Va(
            i,
            p,
            d,
            l
          );
          return (w = Jn(v)) == null ? void 0 : w.includes(u);
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
function ni(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function kg(e) {
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
function Lg(e, t, n, r) {
  const o = Array.isArray(e) ? e : [], i = new Set(t.map((l) => l.value));
  return [...o.filter((l) => !i.has(l)).map((l) => ({
    label: n(String(l)),
    value: l,
    icon: r
  })), ...t];
}
function Va(e, t, n, r) {
  const o = Oa(
    e,
    t,
    n,
    r
  ), i = Et(o);
  return { displayValue: i ? " " : o, valueEmpty: i };
}
function yr(e) {
  if (e.validators && e.validators.length > 0) {
    const t = e.validators.find(
      (n) => n.validate === "required"
    );
    return t != null && t.when == null;
  }
  return !1;
}
function Vg(e, t) {
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
    const r = La(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  if (e.type === "boolean" && n.push({ validate: "boolean" }), vr(e)) {
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
async function Hg(e, t, n, r, o) {
  const i = Pa(e.columns, (a, c) => {
    c[a.id] = [], [
      ...(a.validators ?? []).filter(
        (h) => (h.runOn ?? "change") === r
      ),
      ...r === "change" ? Vg(a, n) : []
    ].forEach((h) => {
      c[a.id].push(
        Pg(h)
      );
    });
  }), s = [];
  return e.columns.forEach((a) => {
    const c = i[a.id];
    c.length !== 0 && t.rows.forEach((u, h) => {
      if (!Na(u))
        return;
      const p = u[a.id], d = Et(p);
      c.forEach((v) => {
        d && !v.validatesEmptyValues || s.push({
          columnId: a.id,
          rowIndex: h,
          value: p,
          row: u,
          validator: v
        });
      });
    });
  }), (await ka(
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
async function zg(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ha, i = e.map(async (l) => {
    const a = t.find(
      (c) => c.sheetId === l.id
    );
    return a ? await Hg(
      l,
      a,
      t,
      r,
      o
    ) : [];
  });
  return (await Promise.all(i)).flat();
}
const Bg = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Ha = Math.pow(2, 53), jg = -Ha;
function Ug(e) {
  if (Bg.test(e)) {
    const t = parseFloat(e);
    return t > jg && t < Ha;
  }
  return !1;
}
function Wg(e, t = {}) {
  const n = e.trim().toLowerCase(), r = [
    ...t.trueValues ?? vm,
    ...t.trueLabel ? [t.trueLabel] : []
  ].map((i) => i.toString().toLowerCase()), o = [
    ...t.falseValues ?? wm,
    ...t.falseLabel ? [t.falseLabel] : []
  ].map((i) => i.toString().toLowerCase());
  return r.includes(n) ? !0 : o.includes(n) ? !1 : e;
}
function as(e, t) {
  const n = e.trim(), r = t.find((i) => String(i.value) === n);
  if (r)
    return String(r.value);
  const o = t.find((i) => i.label === n);
  return o ? String(o.value) : n;
}
function ri(e, t) {
  switch (e.type) {
    case "number":
      return t.trim() === "" ? t : Ug(t) ? parseFloat(t) : t;
    case "boolean":
      return Wg(t, e.typeArguments);
    case "enum": {
      const n = e.typeArguments.values;
      if (e.typeArguments.multiple) {
        const r = e.typeArguments.delimiter ?? ",";
        return t.split(r).map((o) => o.trim()).filter((o) => o !== "").map((o) => as(o, n));
      }
      return t.trim() === "" ? t : as(t, n);
    }
    case "date":
    case "datetime":
    case "time":
      return qm(t, e.type, e.typeArguments);
    default:
      return t;
  }
}
function Gg(e, t) {
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
function qg(e) {
  return e.type === "enum" && e.typeArguments.multiple ? [] : "";
}
function za(e, t, n) {
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
function Yg(e, t) {
  return za(
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
function Kg(e, t) {
  return za(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Zg(e, t) {
  return ri(t, e ?? "");
}
function Xg(e, t, n) {
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
        c != null && (l[c.sheetColumnId] = Zg(
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
function Jg(e, t, n) {
  const r = n.data, o = Xg(e, t, r), i = Kg(
    e,
    o
  );
  return Yg(e, i);
}
function br(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Qg(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function ev(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!br(i))
        return !1;
      const s = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Jn(a)), l = Jn(r);
      return s.includes(l);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const tv = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = ev(r, t);
    n.push(...o);
  }), Qg(n);
};
function nv(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function rv(e, t) {
  const n = ov(e, t), r = iv(n);
  return sv(r);
}
function ov(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, pa);
}
function iv(e) {
  return [
    ...e,
    ...Array(pa - e.length).fill("")
  ];
}
function sv(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > fm && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function lv(e, t) {
  const { t: n } = we();
  return e.flatMap(
    (o) => o.columns.filter((i) => br(i)).map((i) => ({
      label: `${i.label}${yr(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => av(o, i, n("mapper.unused")));
}
function av(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function cv(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (yr(r) && br(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function uv({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = we();
  return t && /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:m-4 hc:rounded-sm hc:border hc:px-4 hc:sm:px-6 hc:lg:px-8", children: /* @__PURE__ */ f("div", { className: "hc:mt-6 hc:flow-root", children: /* @__PURE__ */ f("div", { className: "hc:-mx-4 hc:-my-2 hc:overflow-x-auto hc:sm:-mx-6 hc:lg:-mx-8", children: /* @__PURE__ */ f("div", { className: "hc:inline-block hc:min-w-full hc:py-2 hc:align-middle", children: /* @__PURE__ */ f("table", { className: "hc:divide-hello-csv-border-strong hc:min-w-full hc:divide-y", children: [
    /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
      "th",
      {
        scope: "col",
        className: "hc:text-hello-csv-text hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:sm:pl-6 hc:lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ f(Qo, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ f("tbody", { className: "hc:divide-hello-csv-border-strong hc:divide-y", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { className: "hc:text-hello-csv-text hc:h-12 hc:py-4 hc:pr-3 hc:pl-4 hc:text-sm hc:font-medium hc:sm:pl-6 hc:lg:pl-8", children: o || i === 0 && /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text-muted hc:italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function dv({
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
  return /* @__PURE__ */ f(
    "div",
    {
      className: "hc:hover:bg-hello-csv-muted hc:rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ f("div", { className: "hc:flex hc:items-center hc:py-2.5", children: [
        /* @__PURE__ */ f("div", { className: "hc:mx-2.5 hc:flex hc:flex-1 hc:justify-between", children: [
          /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(Qo, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ f("div", { className: "hc:mx-5", children: /* @__PURE__ */ f(ip, { className: "hc:h-4 hc:w-4" }) })
        ] }),
        /* @__PURE__ */ f("div", { className: "hc:mx-2.5 hc:flex-1", children: /* @__PURE__ */ f(
          Ot,
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
const Ba = "HelloCSV", ja = 1, ct = "state";
async function fv(e, t) {
  return new Promise((n, r) => {
    const o = Wa(e, t), i = indexedDB.open(Ba, ja);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const c = i.result.transaction(ct, "readonly").objectStore(ct).get(o);
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
      l.objectStoreNames.contains(ct) && l.deleteObjectStore(ct), l.createObjectStore(ct);
    };
  });
}
async function Ua(e, t) {
  return new Promise((n, r) => {
    const o = Wa(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(Ba, ja);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const u = s.result.transaction(ct, "readwrite").objectStore(ct).put(i, o);
      u.onerror = () => r(u.error), u.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(ct) || a.createObjectStore(ct);
    };
  });
}
function Wa(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${hv(r)}`;
}
function hv(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function pv(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => br(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      yr(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const mv = (e) => "." + (e.split(".").pop() ?? "").toLowerCase(), pn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, gv = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), vv = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await gv(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
var Bn = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var wv = Bn.exports, cs;
function yv() {
  return cs || (cs = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(wv, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, c = {};
      function u(b) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(m) {
          var y = O(m);
          y.chunkSize = parseInt(y.chunkSize), m.step || m.chunk || (y.chunkSize = null), this._handle = new w(y), (this._handle.streamer = this)._config = y;
        }).call(this, b), this.parseChunk = function(m, y) {
          var _ = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < _) {
            let k = this._config.newline;
            k || ($ = this._config.quoteChar || '"', k = this._handle.guessLineEndings(m, $)), m = [...m.split(k).slice(_)].join(k);
          }
          this.isFirstChunk && A(this._config.beforeFirstChunk) && ($ = this._config.beforeFirstChunk(m)) !== void 0 && (m = $), this.isFirstChunk = !1, this._halted = !1;
          var _ = this._partialLine + m, $ = (this._partialLine = "", this._handle.parse(_, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (m = $.meta.cursor, _ = (this._finished || (this._partialLine = _.substring(m - this._baseIndex), this._baseIndex = m), $ && $.data && (this._rowCount += $.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: $, workerId: c.WORKER_ID, finished: _ });
            else if (A(this._config.chunk) && !y) {
              if (this._config.chunk($, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = $ = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat($.data), this._completeResults.errors = this._completeResults.errors.concat($.errors), this._completeResults.meta = $.meta), this._completed || !_ || !A(this._config.complete) || $ && $.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), _ || $ && $.meta.paused || this._nextChunk(), $;
          }
          this._halted = !0;
        }, this._sendError = function(m) {
          A(this._config.error) ? this._config.error(m) : s && this._config.error && r.postMessage({ workerId: c.WORKER_ID, error: m, finished: !1 });
        };
      }
      function h(b) {
        var m;
        (b = b || {}).chunkSize || (b.chunkSize = c.RemoteChunkSize), u.call(this, b), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(y) {
          this._input = y, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (m = new XMLHttpRequest(), this._config.withCredentials && (m.withCredentials = this._config.withCredentials), i || (m.onload = N(this._chunkLoaded, this), m.onerror = N(this._chunkError, this)), m.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var y, _ = this._config.downloadRequestHeaders;
              for (y in _) m.setRequestHeader(y, _[y]);
            }
            var $;
            this._config.chunkSize && ($ = this._start + this._config.chunkSize - 1, m.setRequestHeader("Range", "bytes=" + this._start + "-" + $));
            try {
              m.send(this._config.downloadRequestBody);
            } catch (k) {
              this._chunkError(k.message);
            }
            i && m.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          m.readyState === 4 && (m.status < 200 || 400 <= m.status ? this._chunkError() : (this._start += this._config.chunkSize || m.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((y) => (y = y.getResponseHeader("Content-Range")) !== null ? parseInt(y.substring(y.lastIndexOf("/") + 1)) : -1)(m), this.parseChunk(m.responseText)));
        }, this._chunkError = function(y) {
          y = m.statusText || y, this._sendError(new Error(y));
        };
      }
      function p(b) {
        (b = b || {}).chunkSize || (b.chunkSize = c.LocalChunkSize), u.call(this, b);
        var m, y, _ = typeof FileReader < "u";
        this.stream = function($) {
          this._input = $, y = $.slice || $.webkitSlice || $.mozSlice, _ ? ((m = new FileReader()).onload = N(this._chunkLoaded, this), m.onerror = N(this._chunkError, this)) : m = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var $ = this._input, k = (this._config.chunkSize && (k = Math.min(this._start + this._config.chunkSize, this._input.size), $ = y.call($, this._start, k)), m.readAsText($, this._config.encoding));
          _ || this._chunkLoaded({ target: { result: k } });
        }, this._chunkLoaded = function($) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk($.target.result);
        }, this._chunkError = function() {
          this._sendError(m.error);
        };
      }
      function d(b) {
        var m;
        u.call(this, b = b || {}), this.stream = function(y) {
          return m = y, this._nextChunk();
        }, this._nextChunk = function() {
          var y, _;
          if (!this._finished) return y = this._config.chunkSize, m = y ? (_ = m.substring(0, y), m.substring(y)) : (_ = m, ""), this._finished = !m, this.parseChunk(_);
        };
      }
      function v(b) {
        u.call(this, b = b || {});
        var m = [], y = !0, _ = !1;
        this.pause = function() {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function($) {
          this._input = $, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          _ && m.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), m.length ? this.parseChunk(m.shift()) : y = !0;
        }, this._streamData = N(function($) {
          try {
            m.push(typeof $ == "string" ? $ : $.toString(this._config.encoding)), y && (y = !1, this._checkIsFinished(), this.parseChunk(m.shift()));
          } catch (k) {
            this._streamError(k);
          }
        }, this), this._streamError = N(function($) {
          this._streamCleanUp(), this._sendError($);
        }, this), this._streamEnd = N(function() {
          this._streamCleanUp(), _ = !0, this._streamData("");
        }, this), this._streamCleanUp = N(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function w(b) {
        var m, y, _, $, k = Math.pow(2, 53), I = -k, P = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, R = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, T = this, M = 0, D = 0, H = !1, V = !1, L = [], F = { data: [], errors: [], meta: {} };
        function te(z) {
          return b.skipEmptyLines === "greedy" ? z.join("").trim() === "" : z.length === 1 && z[0].length === 0;
        }
        function X() {
          if (F && _ && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), _ = !1), b.skipEmptyLines && (F.data = F.data.filter(function(q) {
            return !te(q);
          })), ue()) {
            let q = function(G, J) {
              A(b.transformHeader) && (G = b.transformHeader(G, J)), L.push(G);
            };
            if (F) if (Array.isArray(F.data[0])) {
              for (var z = 0; ue() && z < F.data.length; z++) F.data[z].forEach(q);
              F.data.splice(0, 1);
            } else F.data.forEach(q);
          }
          function W(q, G) {
            for (var J = b.header ? {} : [], j = 0; j < q.length; j++) {
              var Z = j, oe = q[j], oe = ((be, ce) => ((ge) => (b.dynamicTypingFunction && b.dynamicTyping[ge] === void 0 && (b.dynamicTyping[ge] = b.dynamicTypingFunction(ge)), (b.dynamicTyping[ge] || b.dynamicTyping) === !0))(be) ? ce === "true" || ce === "TRUE" || ce !== "false" && ce !== "FALSE" && (((ge) => {
                if (P.test(ge) && (ge = parseFloat(ge), I < ge && ge < k))
                  return 1;
              })(ce) ? parseFloat(ce) : R.test(ce) ? new Date(ce) : ce === "" ? null : ce) : ce)(Z = b.header ? j >= L.length ? "__parsed_extra" : L[j] : Z, oe = b.transform ? b.transform(oe, Z) : oe);
              Z === "__parsed_extra" ? (J[Z] = J[Z] || [], J[Z].push(oe)) : J[Z] = oe;
            }
            return b.header && (j > L.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + L.length + " fields but parsed " + j, D + G) : j < L.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + L.length + " fields but parsed " + j, D + G)), J;
          }
          var re;
          F && (b.header || b.dynamicTyping || b.transform) && (re = 1, !F.data.length || Array.isArray(F.data[0]) ? (F.data = F.data.map(W), re = F.data.length) : F.data = W(F.data, 0), b.header && F.meta && (F.meta.fields = L), D += re);
        }
        function ue() {
          return b.header && L.length === 0;
        }
        function ie(z, W, re, q) {
          z = { type: z, code: W, message: re }, q !== void 0 && (z.row = q), F.errors.push(z);
        }
        A(b.step) && ($ = b.step, b.step = function(z) {
          F = z, ue() ? X() : (X(), F.data.length !== 0 && (M += z.data.length, b.preview && M > b.preview ? y.abort() : (F.data = F.data[0], $(F, T))));
        }), this.parse = function(z, W, re) {
          var q = b.quoteChar || '"', q = (b.newline || (b.newline = this.guessLineEndings(z, q)), _ = !1, b.delimiter ? A(b.delimiter) && (b.delimiter = b.delimiter(z), F.meta.delimiter = b.delimiter) : ((q = ((G, J, j, Z, oe) => {
            var be, ce, ge, rt;
            oe = oe || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var Vt = 0; Vt < oe.length; Vt++) {
              for (var Ge, rn = oe[Vt], $e = 0, qe = 0, _e = 0, Pe = (ge = void 0, new C({ comments: Z, delimiter: rn, newline: J, preview: 10 }).parse(G)), ot = 0; ot < Pe.data.length; ot++) j && te(Pe.data[ot]) ? _e++ : (Ge = Pe.data[ot].length, qe += Ge, ge === void 0 ? ge = Ge : 0 < Ge && ($e += Math.abs(Ge - ge), ge = Ge));
              0 < Pe.data.length && (qe /= Pe.data.length - _e), (ce === void 0 || $e <= ce) && (rt === void 0 || rt < qe) && 1.99 < qe && (ce = $e, be = rn, rt = qe);
            }
            return { successful: !!(b.delimiter = be), bestDelimiter: be };
          })(z, b.newline, b.skipEmptyLines, b.comments, b.delimitersToGuess)).successful ? b.delimiter = q.bestDelimiter : (_ = !0, b.delimiter = c.DefaultDelimiter), F.meta.delimiter = b.delimiter), O(b));
          return b.preview && b.header && q.preview++, m = z, y = new C(q), F = y.parse(m, W, re), X(), H ? { meta: { paused: !0 } } : F || { meta: { paused: !1 } };
        }, this.paused = function() {
          return H;
        }, this.pause = function() {
          H = !0, y.abort(), m = A(b.chunk) ? "" : m.substring(y.getCharIndex());
        }, this.resume = function() {
          T.streamer._halted ? (H = !1, T.streamer.parseChunk(m, !0)) : setTimeout(T.resume, 3);
        }, this.aborted = function() {
          return V;
        }, this.abort = function() {
          V = !0, y.abort(), F.meta.aborted = !0, A(b.complete) && b.complete(F), m = "";
        }, this.guessLineEndings = function(G, q) {
          G = G.substring(0, 1048576);
          var q = new RegExp(g(q) + "([^]*?)" + g(q), "gm"), re = (G = G.replace(q, "")).split("\r"), q = G.split(`
`), G = 1 < q.length && q[0].length < re[0].length;
          if (re.length === 1 || G) return `
`;
          for (var J = 0, j = 0; j < re.length; j++) re[j][0] === `
` && J++;
          return J >= re.length / 2 ? `\r
` : "\r";
        };
      }
      function g(b) {
        return b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(b) {
        var m = (b = b || {}).delimiter, y = b.newline, _ = b.comments, $ = b.step, k = b.preview, I = b.fastMode, P = null, R = !1, T = b.quoteChar == null ? '"' : b.quoteChar, M = T;
        if (b.escapeChar !== void 0 && (M = b.escapeChar), (typeof m != "string" || -1 < c.BAD_DELIMITERS.indexOf(m)) && (m = ","), _ === m) throw new Error("Comment character same as delimiter");
        _ === !0 ? _ = "#" : (typeof _ != "string" || -1 < c.BAD_DELIMITERS.indexOf(_)) && (_ = !1), y !== `
` && y !== "\r" && y !== `\r
` && (y = `
`);
        var D = 0, H = !1;
        this.parse = function(V, L, F) {
          if (typeof V != "string") throw new Error("Input must be a string");
          var te = V.length, X = m.length, ue = y.length, ie = _.length, z = A($), W = [], re = [], q = [], G = D = 0;
          if (!V) return $e();
          if (I || I !== !1 && V.indexOf(T) === -1) {
            for (var J = V.split(y), j = 0; j < J.length; j++) {
              if (q = J[j], D += q.length, j !== J.length - 1) D += y.length;
              else if (F) return $e();
              if (!_ || q.substring(0, ie) !== _) {
                if (z) {
                  if (W = [], rt(q.split(m)), qe(), H) return $e();
                } else rt(q.split(m));
                if (k && k <= j) return W = W.slice(0, k), $e(!0);
              }
            }
            return $e();
          }
          for (var Z = V.indexOf(m, D), oe = V.indexOf(y, D), be = new RegExp(g(M) + g(T), "g"), ce = V.indexOf(T, D); ; ) if (V[D] === T) for (ce = D, D++; ; ) {
            if ((ce = V.indexOf(T, ce + 1)) === -1) return F || re.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: W.length, index: D }), Ge();
            if (ce === te - 1) return Ge(V.substring(D, ce).replace(be, T));
            if (T === M && V[ce + 1] === M) ce++;
            else if (T === M || ce === 0 || V[ce - 1] !== M) {
              Z !== -1 && Z < ce + 1 && (Z = V.indexOf(m, ce + 1));
              var ge = Vt((oe = oe !== -1 && oe < ce + 1 ? V.indexOf(y, ce + 1) : oe) === -1 ? Z : Math.min(Z, oe));
              if (V.substr(ce + 1 + ge, X) === m) {
                q.push(V.substring(D, ce).replace(be, T)), V[D = ce + 1 + ge + X] !== T && (ce = V.indexOf(T, D)), Z = V.indexOf(m, D), oe = V.indexOf(y, D);
                break;
              }
              if (ge = Vt(oe), V.substring(ce + 1 + ge, ce + 1 + ge + ue) === y) {
                if (q.push(V.substring(D, ce).replace(be, T)), rn(ce + 1 + ge + ue), Z = V.indexOf(m, D), ce = V.indexOf(T, D), z && (qe(), H)) return $e();
                if (k && W.length >= k) return $e(!0);
                break;
              }
              re.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: W.length, index: D }), ce++;
            }
          }
          else if (_ && q.length === 0 && V.substring(D, D + ie) === _) {
            if (oe === -1) return $e();
            D = oe + ue, oe = V.indexOf(y, D), Z = V.indexOf(m, D);
          } else if (Z !== -1 && (Z < oe || oe === -1)) q.push(V.substring(D, Z)), D = Z + X, Z = V.indexOf(m, D);
          else {
            if (oe === -1) break;
            if (q.push(V.substring(D, oe)), rn(oe + ue), z && (qe(), H)) return $e();
            if (k && W.length >= k) return $e(!0);
          }
          return Ge();
          function rt(_e) {
            W.push(_e), G = D;
          }
          function Vt(_e) {
            var Pe = 0;
            return Pe = _e !== -1 && (_e = V.substring(ce + 1, _e)) && _e.trim() === "" ? _e.length : Pe;
          }
          function Ge(_e) {
            return F || (_e === void 0 && (_e = V.substring(D)), q.push(_e), D = te, rt(q), z && qe()), $e();
          }
          function rn(_e) {
            D = _e, rt(q), q = [], oe = V.indexOf(y, D);
          }
          function $e(_e) {
            if (b.header && !L && W.length && !R) {
              var Pe = W[0], ot = {}, Sr = new Set(Pe);
              let li = !1;
              for (let Ht = 0; Ht < Pe.length; Ht++) {
                let Ye = Pe[Ht];
                if (ot[Ye = A(b.transformHeader) ? b.transformHeader(Ye, Ht) : Ye]) {
                  let on, ai = ot[Ye];
                  for (; on = Ye + "_" + ai, ai++, Sr.has(on); ) ;
                  Sr.add(on), Pe[Ht] = on, ot[Ye]++, li = !0, (P = P === null ? {} : P)[on] = Ye;
                } else ot[Ye] = 1, Pe[Ht] = Ye;
                Sr.add(Ye);
              }
              li && console.warn("Duplicate headers found and renamed."), R = !0;
            }
            return { data: W, errors: re, meta: { delimiter: m, linebreak: y, aborted: H, truncated: !!_e, cursor: G + (L || 0), renamedHeaders: P } };
          }
          function qe() {
            $($e()), W = [], re = [];
          }
        }, this.abort = function() {
          H = !0;
        }, this.getCharIndex = function() {
          return D;
        };
      }
      function x(b) {
        var m = b.data, y = l[m.workerId], _ = !1;
        if (m.error) y.userError(m.error, m.file);
        else if (m.results && m.results.data) {
          var $ = { abort: function() {
            _ = !0, S(m.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if (A(y.userStep)) {
            for (var k = 0; k < m.results.data.length && (y.userStep({ data: m.results.data[k], errors: m.results.errors, meta: m.results.meta }, $), !_); k++) ;
            delete m.results;
          } else A(y.userChunk) && (y.userChunk(m.results, $, m.file), delete m.results);
        }
        m.finished && !_ && S(m.workerId, m.results);
      }
      function S(b, m) {
        var y = l[b];
        A(y.userComplete) && y.userComplete(m), y.terminate(), delete l[b];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function O(b) {
        if (typeof b != "object" || b === null) return b;
        var m, y = Array.isArray(b) ? [] : {};
        for (m in b) y[m] = O(b[m]);
        return y;
      }
      function N(b, m) {
        return function() {
          b.apply(m, arguments);
        };
      }
      function A(b) {
        return typeof b == "function";
      }
      return c.parse = function(b, m) {
        var y = (m = m || {}).dynamicTyping || !1;
        if (A(y) && (m.dynamicTypingFunction = y, y = {}), m.dynamicTyping = y, m.transform = !!A(m.transform) && m.transform, !m.worker || !c.WORKERS_SUPPORTED) return y = null, c.NODE_STREAM_INPUT, typeof b == "string" ? (b = ((_) => _.charCodeAt(0) !== 65279 ? _ : _.slice(1))(b), y = new (m.download ? h : d)(m)) : b.readable === !0 && A(b.read) && A(b.on) ? y = new v(m) : (r.File && b instanceof File || b instanceof Object) && (y = new p(m)), y.stream(b);
        (y = (() => {
          var _;
          return !!c.WORKERS_SUPPORTED && (_ = (() => {
            var $ = r.URL || r.webkitURL || null, k = n.toString();
            return c.BLOB_URL || (c.BLOB_URL = $.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", k, ")();"], { type: "text/javascript" })));
          })(), (_ = new r.Worker(_)).onmessage = x, _.id = a++, l[_.id] = _);
        })()).userStep = m.step, y.userChunk = m.chunk, y.userComplete = m.complete, y.userError = m.error, m.step = A(m.step), m.chunk = A(m.chunk), m.complete = A(m.complete), m.error = A(m.error), delete m.worker, y.postMessage({ input: b, config: m, workerId: y.id });
      }, c.unparse = function(b, m) {
        var y = !1, _ = !0, $ = ",", k = `\r
`, I = '"', P = I + I, R = !1, T = null, M = !1, D = ((() => {
          if (typeof m == "object") {
            if (typeof m.delimiter != "string" || c.BAD_DELIMITERS.filter(function(L) {
              return m.delimiter.indexOf(L) !== -1;
            }).length || ($ = m.delimiter), typeof m.quotes != "boolean" && typeof m.quotes != "function" && !Array.isArray(m.quotes) || (y = m.quotes), typeof m.skipEmptyLines != "boolean" && typeof m.skipEmptyLines != "string" || (R = m.skipEmptyLines), typeof m.newline == "string" && (k = m.newline), typeof m.quoteChar == "string" && (I = m.quoteChar), typeof m.header == "boolean" && (_ = m.header), Array.isArray(m.columns)) {
              if (m.columns.length === 0) throw new Error("Option columns is empty");
              T = m.columns;
            }
            m.escapeChar !== void 0 && (P = m.escapeChar + I), m.escapeFormulae instanceof RegExp ? M = m.escapeFormulae : typeof m.escapeFormulae == "boolean" && m.escapeFormulae && (M = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(g(I), "g"));
        if (typeof b == "string" && (b = JSON.parse(b)), Array.isArray(b)) {
          if (!b.length || Array.isArray(b[0])) return H(null, b, R);
          if (typeof b[0] == "object") return H(T || Object.keys(b[0]), b, R);
        } else if (typeof b == "object") return typeof b.data == "string" && (b.data = JSON.parse(b.data)), Array.isArray(b.data) && (b.fields || (b.fields = b.meta && b.meta.fields || T), b.fields || (b.fields = Array.isArray(b.data[0]) ? b.fields : typeof b.data[0] == "object" ? Object.keys(b.data[0]) : []), Array.isArray(b.data[0]) || typeof b.data[0] == "object" || (b.data = [b.data])), H(b.fields || [], b.data || [], R);
        throw new Error("Unable to serialize unrecognized input");
        function H(L, F, te) {
          var X = "", ue = (typeof L == "string" && (L = JSON.parse(L)), typeof F == "string" && (F = JSON.parse(F)), Array.isArray(L) && 0 < L.length), ie = !Array.isArray(F[0]);
          if (ue && _) {
            for (var z = 0; z < L.length; z++) 0 < z && (X += $), X += V(L[z], z);
            0 < F.length && (X += k);
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
                0 < oe && !G && (X += $);
                var be = ue && ie ? L[oe] : oe;
                X += V(F[W][be], oe);
              }
              W < F.length - 1 && (!te || 0 < re && !G) && (X += k);
            }
          }
          return X;
        }
        function V(L, F) {
          var te, X;
          return L == null ? "" : L.constructor === Date ? JSON.stringify(L).slice(1, 25) : (X = !1, M && typeof L == "string" && M.test(L) && (L = "'" + L, X = !0), te = L.toString().replace(D, P), (X = X || y === !0 || typeof y == "function" && y(L, F) || Array.isArray(y) && y[F] || ((ue, ie) => {
            for (var z = 0; z < ie.length; z++) if (-1 < ue.indexOf(ie[z])) return !0;
            return !1;
          })(te, c.BAD_DELIMITERS) || -1 < te.indexOf($) || te.charAt(0) === " " || te.charAt(te.length - 1) === " ") ? I + te + I : te);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = C, c.ParserHandle = w, c.NetworkStreamer = h, c.FileStreamer = p, c.StringStreamer = d, c.ReadableStreamStreamer = v, r.jQuery && ((o = r.jQuery).fn.parse = function(b) {
        var m = b.config || {}, y = [];
        return this.each(function(k) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var I = 0; I < this.files.length; I++) y.push({ file: this.files[I], inputElem: this, instanceConfig: o.extend({}, m) });
        }), _(), this;
        function _() {
          if (y.length === 0) A(b.complete) && b.complete();
          else {
            var k, I, P, R, T = y[0];
            if (A(b.before)) {
              var M = b.before(T.file, T.inputElem);
              if (typeof M == "object") {
                if (M.action === "abort") return k = "AbortError", I = T.file, P = T.inputElem, R = M.reason, void (A(b.error) && b.error({ name: k }, I, P, R));
                if (M.action === "skip") return void $();
                typeof M.config == "object" && (T.instanceConfig = o.extend(T.instanceConfig, M.config));
              } else if (M === "skip") return void $();
            }
            var D = T.instanceConfig.complete;
            T.instanceConfig.complete = function(H) {
              A(D) && D(H, T.file, T.inputElem), $();
            }, c.parse(T.file, T.instanceConfig);
          }
        }
        function $() {
          y.splice(0, 1), _();
        }
      }), s && (r.onmessage = function(b) {
        b = b.data, c.WORKER_ID === void 0 && b && (c.WORKER_ID = b.workerId), typeof b.input == "string" ? r.postMessage({ workerId: c.WORKER_ID, results: c.parse(b.input, b.config), finished: !0 }) : (r.File && b.input instanceof File || b.input instanceof Object) && (b = c.parse(b.input, b.config)) && r.postMessage({ workerId: c.WORKER_ID, results: b, finished: !0 });
      }), (h.prototype = Object.create(u.prototype)).constructor = h, (p.prototype = Object.create(u.prototype)).constructor = p, (d.prototype = Object.create(d.prototype)).constructor = d, (v.prototype = Object.create(u.prototype)).constructor = v, c;
    });
  }(Bn)), Bn.exports;
}
var bv = yv();
const Ga = /* @__PURE__ */ Ko(bv);
async function xv({ file: e }) {
  return new Promise((t, n) => {
    Ga.parse(e, {
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
function Sv(e, t) {
  return e === "" ? [] : Ga.parse(e, {
    delimiter: t,
    header: !1,
    skipEmptyLines: !0
  }).data;
}
class Tn {
  constructor(t) {
    ye(this, "definition");
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
class Cv extends Tn {
  constructor(n) {
    super(n);
    ye(this, "key");
    ye(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class _v extends Tn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class Ev extends Tn {
  parse(t) {
    if (typeof t == "string" && Fa(t, "-"))
      return t.split("-")[0];
  }
}
const us = [
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
class Rv extends Tn {
  parse(t) {
    const n = us.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Fa(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return us[r][1];
    }
  }
}
class $v extends Tn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function Tv(e) {
  const t = {
    phone_number: _v,
    postal_code: Ev,
    state_code: Rv,
    strip: $v,
    custom: Cv
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
async function Mv(e, t, n, r) {
  const o = Pa(
    e.columns,
    (a, c) => {
      c[a.id] = new Iv(), a.transformers && a.transformers.filter((u) => (u.runOn ?? "change") === n).forEach((u) => {
        c[a.id].push(
          Tv(u)
        );
      });
    }
  ), i = [];
  e.columns.forEach((a) => {
    const c = a.id, u = o[c];
    u.steps.length !== 0 && t.rows.forEach((h, p) => {
      if (!Na(h))
        return;
      const d = h[c];
      Et(d) || i.push({ rowIndex: p, columnId: c, value: d, pipeline: u });
    });
  });
  const s = await ka(
    i,
    r,
    async (a) => ({
      ...a,
      value: await a.pipeline.transform(a.value)
    })
  ), l = /* @__PURE__ */ new Map();
  return s.forEach(({ rowIndex: a, columnId: c, value: u }) => {
    const h = l.get(a) ?? {};
    h[c] = u, l.set(a, h);
  }), t.rows.map((a, c) => {
    const u = l.get(c);
    return u == null ? a : Object.keys(u).some(
      (p) => a[p] !== u[p]
    ) ? { ...a, ...u } : a;
  });
}
async function Ov(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ha, i = [];
  for (const s of e) {
    const l = t.find(
      (a) => a.sheetId === s.id
    );
    if (l) {
      const a = await Mv(
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
class Iv {
  // Series of transformations
  constructor(t = []) {
    ye(this, "steps");
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
let Pr = 0;
function qa() {
  return Pr = (Pr + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${Pr}`;
}
async function Av(e, t) {
  const n = Mn(e);
  try {
    return t.enabled ? await Dv(e, t) : n;
  } catch {
    return n;
  }
}
function Mn(e) {
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
async function Dv(e, t) {
  const n = await fv(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = Mn(e);
  return Ua(r, t.customKey), r;
}
class Ya {
  constructor(t, n) {
    ye(this, "initialState");
    ye(this, "importerDefinition");
    ye(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? Mn(t.sheets), this.buildSteps = [];
  }
  async getState(t = "change") {
    let n = this.initialState;
    this.buildSteps.forEach((s) => {
      n = Ka(n, s);
    });
    const r = this.importerDefinition.maxConcurrentAsyncOperations, o = await Ov(
      this.importerDefinition.sheets,
      n.sheetData,
      { phase: t, concurrency: r }
    ).catch(() => n.sheetData), i = await zg(
      this.importerDefinition.sheets,
      o,
      { phase: t, concurrency: r }
    ).catch(() => n.validationErrors);
    return { ...n, sheetData: o, validationErrors: i };
  }
  async uploadFile(t) {
    const n = await vv(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await xv({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : tv(
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
        amountOfEmptyRowsToAdd: t ?? lm
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
    const t = await this.getState(), n = Jg(
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
class Ew extends Ya {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const er = class er extends Ya {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => er.actionTypesThatRequireProcessing.has(o.type)
    ), r = qa();
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
ye(er, "actionTypesThatRequireProcessing", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS",
  "RESTORE_SHEET_DATA",
  "ADD_EMPTY_ROW"
]));
let Qn = er;
function Fv(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const Ka = (e, t) => {
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
          return i[t.payload.rowIndex] = Fv(
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
      return Mn(e.sheetDefinitions);
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
}, Pv = (e, t, n) => {
  const [r, o] = et(
    Ka,
    n ?? Mn(e)
  );
  return se(() => {
    const i = async () => {
      const s = await Av(e, t);
      o({ type: "SET_STATE", payload: { state: s } });
    };
    n == null && i();
  }, []), se(() => {
    t.enabled && Ua(r, t.customKey);
  }, [r, t]), [r, o];
}, Za = me({}), Xa = me(
  {}
);
function Nv({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, s] = Pv(
    e,
    t,
    n
  ), l = U(i);
  return se(() => {
    l.current !== i && (r == null || r(l.current, i), l.current = i);
  }, [i, r]), /* @__PURE__ */ f(Za.Provider, { value: i, children: /* @__PURE__ */ f(Xa.Provider, { value: s, children: o }) });
}
function nt() {
  return fe(Za);
}
function kv() {
  return fe(Xa);
}
function Lv({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = nt(), { sheets: i } = ze(), { t: s } = we(), [l, a] = Y(null), c = r ?? [], u = o, h = u.data, p = u.meta.fields, d = lv(
    i,
    c
  ), v = cv(
    i,
    c
  ), w = ne(() => l ? rv(h, l) : [], [l, h]), [g, C] = Y(!1);
  async function x() {
    try {
      C(!0), await t();
    } finally {
      C(!1);
    }
  }
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex-none hc:text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ f("div", { className: "hc:min-h-0 hc:flex-auto", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:justify-between hc:space-x-5", children: [
      /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-2 hc:flex-col", children: [
        /* @__PURE__ */ f("div", { className: "hc:my-5 hc:flex hc:text-sm hc:font-light hc:uppercase", children: [
          /* @__PURE__ */ f("div", { className: "hc:flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ f("div", { className: "hc:flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:overflow-y-auto", children: p.map((S, E) => {
          const O = c.find(
            (N) => N.csvColumnName === S
          ) ?? null;
          return /* @__PURE__ */ f(
            dv,
            {
              csvHeader: S,
              currentMapping: O,
              setMapping: (N) => {
                const A = nv(
                  c,
                  S,
                  N
                );
                e(A);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(S);
              }
            },
            E
          );
        }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "hc:bg-hello-csv-muted hc:hidden hc:flex-1 hc:overflow-y-auto hc:sm:block", children: /* @__PURE__ */ f(
        uv,
        {
          examples: w,
          csvHeader: l ?? ""
        }
      ) })
    ] }) }),
    !v && /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ f(Aa, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ f("div", { className: "hc:mt-auto hc:flex-none", children: /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ f(
        Ve,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: g,
          children: s("mapper.back")
        }
      ),
      /* @__PURE__ */ f(
        Ve,
        {
          onClick: x,
          disabled: !v || g,
          children: /* @__PURE__ */ f("div", { className: "hc:flex hc:items-center", children: [
            g && /* @__PURE__ */ f(pe, { children: [
              /* @__PURE__ */ f(Da, { color: "light" }),
              /* @__PURE__ */ f("div", { className: "hc:mr-2" })
            ] }),
            s("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var Vv = { NODE_ENV: "production" };
function gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function He(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: gt(n, r[e])
    }));
  };
}
function xr(e) {
  return e instanceof Function;
}
function Hv(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function zv(e, t) {
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
    if (!(l.length !== r.length || l.some((u, h) => r[h] !== u)))
      return o;
    r = l;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, h = Math.round((Date.now() - c) * 100) / 100, p = h / 16, d = (v, w) => {
        for (v = String(v); v.length < w; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${d(h, 5)} /${d(u, 5)} ms`, `
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
    key: Vv.NODE_ENV === "development",
    onChange: r
  };
}
function Bv(e, t, n, r) {
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
function jv(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let c = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
  if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (p) => {
    let d = p;
    for (const w of a.split(".")) {
      var v;
      d = (v = d) == null ? void 0 : v[w];
    }
    return d;
  } : u = (p) => p[l.accessorKey]), !c)
    throw new Error();
  let h = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: le(() => [!0], () => {
      var p;
      return [h, ...(p = h.columns) == null ? void 0 : p.flatMap((d) => d.getFlatColumns())];
    }, ae(e.options, "debugColumns")),
    getLeafColumns: le(() => [e._getOrderColumnsFn()], (p) => {
      var d;
      if ((d = h.columns) != null && d.length) {
        let v = h.columns.flatMap((w) => w.getLeafColumns());
        return p(v);
      }
      return [h];
    }, ae(e.options, "debugColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(h, e);
  return h;
}
const Te = "debugHeaders";
function ds(e, t, n) {
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
const Uv = {
  createTable: (e) => {
    e.getHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const l = (i = r == null ? void 0 : r.map((h) => n.find((p) => p.id === h)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((h) => n.find((p) => p.id === h)).filter(Boolean)) != null ? s : [], c = n.filter((h) => !(r != null && r.includes(h.id)) && !(o != null && o.includes(h.id)));
      return Pn(t, [...l, ...c, ...a], e);
    }, ae(e.options, Te)), e.getCenterHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Pn(t, n, e, "center")), ae(e.options, Te)), e.getLeftHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Pn(t, i, e, "left");
    }, ae(e.options, Te)), e.getRightHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Pn(t, i, e, "right");
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
function Pn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(p, d) {
    d === void 0 && (d = 1), s = Math.max(s, d), p.filter((v) => v.getIsVisible()).forEach((v) => {
      var w;
      (w = v.columns) != null && w.length && l(v.columns, d + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const c = (p, d) => {
    const v = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, w = [];
    p.forEach((g) => {
      const C = [...w].reverse()[0], x = g.column.depth === v.depth;
      let S, E = !1;
      if (x && g.column.parent ? S = g.column.parent : (S = g.column, E = !0), C && (C == null ? void 0 : C.column) === S)
        C.subHeaders.push(g);
      else {
        const O = ds(n, S, {
          id: [r, d, S.id, g == null ? void 0 : g.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${w.filter((N) => N.column === S).length}` : void 0,
          depth: d,
          index: w.length
        });
        O.subHeaders.push(g), w.push(O);
      }
      v.headers.push(g), g.headerGroup = v;
    }), a.push(v), d > 0 && c(w, d - 1);
  }, u = t.map((p, d) => ds(n, p, {
    depth: s,
    index: d
  }));
  c(u, s - 1), a.reverse();
  const h = (p) => p.filter((v) => v.column.getIsVisible()).map((v) => {
    let w = 0, g = 0, C = [0];
    v.subHeaders && v.subHeaders.length ? (C = [], h(v.subHeaders).forEach((S) => {
      let {
        colSpan: E,
        rowSpan: O
      } = S;
      w += E, C.push(O);
    })) : w = 1;
    const x = Math.min(...C);
    return g = g + x, v.colSpan = w, v.rowSpan = g, {
      colSpan: w,
      rowSpan: g
    };
  });
  return h((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Wv = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => zv(l.subRows, (a) => a.subRows),
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
    getAllCells: le(() => [e.getAllLeafColumns()], (a) => a.map((c) => Bv(e, l, c, c.id)), ae(e.options, "debugRows")),
    _getAllCellsByColumnId: le(() => [l.getAllCells()], (a) => a.reduce((c, u) => (c[u.column.id] = u, c), {}), ae(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(l, e);
  }
  return l;
}, Gv = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Ja = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Ja.autoRemove = (e) => je(e);
const Qa = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Qa.autoRemove = (e) => je(e);
const ec = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ec.autoRemove = (e) => je(e);
const tc = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
tc.autoRemove = (e) => je(e);
const nc = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
nc.autoRemove = (e) => je(e) || !(e != null && e.length);
const rc = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
rc.autoRemove = (e) => je(e) || !(e != null && e.length);
const oc = (e, t, n) => e.getValue(t) === n;
oc.autoRemove = (e) => je(e);
const ic = (e, t, n) => e.getValue(t) == n;
ic.autoRemove = (e) => je(e);
const oi = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
oi.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const l = i;
    i = s, s = l;
  }
  return [i, s];
};
oi.autoRemove = (e) => je(e) || je(e[0]) && je(e[1]);
const it = {
  includesString: Ja,
  includesStringSensitive: Qa,
  equalsString: ec,
  arrIncludes: tc,
  arrIncludesAll: nc,
  arrIncludesSome: rc,
  equals: oc,
  weakEquals: ic,
  inNumberRange: oi
};
function je(e) {
  return e == null || e === "";
}
const qv = {
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
      return typeof r == "string" ? it.includesString : typeof r == "number" ? it.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? it.equals : Array.isArray(r) ? it.arrIncludes : it.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return xr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : it[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = gt(n, i ? i.value : void 0);
        if (fs(o, s, e)) {
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
        return (i = gt(t, o)) == null ? void 0 : i.filter((s) => {
          const l = n.find((a) => a.id === s.id);
          if (l) {
            const a = l.getFilterFn();
            if (fs(a, s.value, l))
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
function fs(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Yv = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Kv = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Zv = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Xv = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Jv = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Qv = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Hv(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, e0 = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), t0 = (e, t) => new Set(t.map((n) => n.getValue(e))).size, n0 = (e, t) => t.length, Nr = {
  sum: Yv,
  min: Kv,
  max: Zv,
  extent: Xv,
  mean: Jv,
  median: Qv,
  unique: e0,
  uniqueCount: t0,
  count: n0
}, r0 = {
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
        return Nr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Nr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return xr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Nr[e.columnDef.aggregationFn];
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
function o0(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const i0 = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: He("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = le((n) => [mn(t, n)], (n) => n.findIndex((r) => r.id === e.id), ae(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = mn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = mn(t, n);
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
      return o0(i, n, r);
    }, ae(e.options, "debugTable"));
  }
}, kr = () => ({
  left: [],
  right: []
}), s0 = {
  getInitialState: (e) => ({
    columnPinning: kr(),
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
            left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((h) => !(r != null && r.includes(h))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((h) => !(r != null && r.includes(h))), ...r]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((h) => !(r != null && r.includes(h))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((h) => !(r != null && r.includes(h)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((h) => !(r != null && r.includes(h))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((h) => !(r != null && r.includes(h)))
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
      return e.setColumnPinning(t ? kr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : kr());
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
}, Nn = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Lr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), l0 = {
  getDefaultColumnDef: () => Nn,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Lr(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Nn.minSize, (r = i ?? e.columnDef.size) != null ? r : Nn.size), (o = e.columnDef.maxSize) != null ? o : Nn.maxSize);
    }, e.getStart = le((n) => [n, mn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.getAfter = le((n) => [n, mn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Vr(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[r.id, r.getSize()]], a = Vr(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (C, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((S) => {
            var E, O;
            const N = t.options.columnResizeDirection === "rtl" ? -1 : 1, A = (x - ((E = S == null ? void 0 : S.startOffset) != null ? E : 0)) * N, b = Math.max(A / ((O = S == null ? void 0 : S.startSize) != null ? O : 0), -0.999999);
            return S.columnSizingStart.forEach((m) => {
              let [y, _] = m;
              c[y] = Math.round(Math.max(_ + _ * b, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: A,
              deltaPercentage: b
            };
          }), (t.options.columnResizeMode === "onChange" || C === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, h = (C) => u("move", C), p = (C) => {
          u("end", C), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, v = {
          moveHandler: (C) => h(C.clientX),
          upHandler: (C) => {
            d == null || d.removeEventListener("mousemove", v.moveHandler), d == null || d.removeEventListener("mouseup", v.upHandler), p(C.clientX);
          }
        }, w = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), h(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var x;
            d == null || d.removeEventListener("touchmove", w.moveHandler), d == null || d.removeEventListener("touchend", w.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), p((x = C.touches[0]) == null ? void 0 : x.clientX);
          }
        }, g = a0() ? {
          passive: !1
        } : !1;
        Vr(i) ? (d == null || d.addEventListener("touchmove", w.moveHandler, g), d == null || d.addEventListener("touchend", w.upHandler, g)) : (d == null || d.addEventListener("mousemove", v.moveHandler, g), d == null || d.addEventListener("mouseup", v.upHandler, g)), t.setColumnSizingInfo((C) => ({
          ...C,
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
      e.setColumnSizingInfo(t ? Lr() : (n = e.initialState.columnSizingInfo) != null ? n : Lr());
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
let kn = null;
function a0() {
  if (typeof kn == "boolean") return kn;
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
  return kn = e, kn;
}
function Vr(e) {
  return e.type === "touchstart";
}
const c0 = {
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
function mn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const u0 = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, d0 = {
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
    e.getGlobalAutoFilterFn = () => it.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return xr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : it[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, f0 = {
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
}, vo = 0, wo = 10, Hr = () => ({
  pageIndex: vo,
  pageSize: wo
}), h0 = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Hr(),
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
      const o = (i) => gt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Hr() : (o = e.initialState.pagination) != null ? o : Hr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = gt(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? vo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : vo);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? wo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : wo);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, gt(r, o.pageSize)), s = o.pageSize * o.pageIndex, l = Math.floor(s / i);
        return {
          ...o,
          pageIndex: l,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = gt(r, (i = e.options.pageCount) != null ? i : -1);
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
}, zr = () => ({
  top: [],
  bottom: []
}), p0 = {
  getInitialState: (e) => ({
    rowPinning: zr(),
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
          var h, p;
          return {
            top: ((h = a == null ? void 0 : a.top) != null ? h : []).filter((w) => !(l != null && l.has(w))),
            bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)]
          };
        }
        if (n === "top") {
          var d, v;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)],
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
      return e.setRowPinning(t ? zr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : zr());
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
}, m0 = {
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
        yo(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = le(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Br(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getFilteredSelectedRowModel = le(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Br(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getGroupedSelectedRowModel = le(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Br(e, n) : {
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
        return yo(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ii(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return bo(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return bo(e, n) === "all";
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
}, yo = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => yo(e, l.id, n, r, o));
};
function Br(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var c;
      const u = ii(a, n);
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
function ii(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function bo(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (ii(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = bo(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const xo = /([0-9]+)/gm, g0 = (e, t, n) => sc(xt(e.getValue(n)).toLowerCase(), xt(t.getValue(n)).toLowerCase()), v0 = (e, t, n) => sc(xt(e.getValue(n)), xt(t.getValue(n))), w0 = (e, t, n) => si(xt(e.getValue(n)).toLowerCase(), xt(t.getValue(n)).toLowerCase()), y0 = (e, t, n) => si(xt(e.getValue(n)), xt(t.getValue(n))), b0 = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, x0 = (e, t, n) => si(e.getValue(n), t.getValue(n));
function si(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function xt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function sc(e, t) {
  const n = e.split(xo).filter(Boolean), r = t.split(xo).filter(Boolean);
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
const an = {
  alphanumeric: g0,
  alphanumericCaseSensitive: v0,
  text: w0,
  textCaseSensitive: y0,
  datetime: b0,
  basic: x0
}, S0 = {
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
          return an.datetime;
        if (typeof i == "string" && (r = !0, i.split(xo).length > 1))
          return an.alphanumeric;
      }
      return r ? an.text : an.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return xr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : an[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((d) => d.id === e.id), a = s == null ? void 0 : s.findIndex((d) => d.id === e.id);
        let c = [], u, h = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var p;
          c = [...s, {
            id: e.id,
            desc: h
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = s.map((d) => d.id === e.id ? {
          ...d,
          desc: h
        } : d) : u === "remove" ? c = s.filter((d) => d.id !== e.id) : c = [{
          id: e.id,
          desc: h
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
}, C0 = [
  Uv,
  c0,
  i0,
  s0,
  Gv,
  qv,
  u0,
  //depends on ColumnFaceting
  d0,
  //depends on ColumnFiltering
  S0,
  r0,
  //depends on RowSorting
  f0,
  h0,
  p0,
  m0,
  l0
];
function _0(e) {
  var t, n;
  const r = [...C0, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((p, d) => Object.assign(p, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), s = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : {
    ...i,
    ...p
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((p) => {
    var d;
    a = (d = p.getInitialState == null ? void 0 : p.getInitialState(a)) != null ? d : a;
  });
  const c = [];
  let u = !1;
  const h = {
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
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (p) => {
      const d = gt(p, o.options);
      o.options = s(d);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, d, v) => {
      var w;
      return (w = o.options.getRowId == null ? void 0 : o.options.getRowId(p, d, v)) != null ? w : `${v ? [v.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, d) => {
      let v = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!v && (v = o.getCoreRowModel().rowsById[p], !v))
        throw new Error();
      return v;
    },
    _getDefaultColumnDef: le(() => [o.options.defaultColumn], (p) => {
      var d;
      return p = (d = p) != null ? d : {}, {
        header: (v) => {
          const w = v.header.column.columnDef;
          return w.accessorKey ? w.accessorKey : w.accessorFn ? w.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var w, g;
          return (w = (g = v.renderValue()) == null || g.toString == null ? void 0 : g.toString()) != null ? w : null;
        },
        ...o._features.reduce((v, w) => Object.assign(v, w.getDefaultColumnDef == null ? void 0 : w.getDefaultColumnDef()), {}),
        ...p
      };
    }, ae(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: le(() => [o._getColumnDefs()], (p) => {
      const d = function(v, w, g) {
        return g === void 0 && (g = 0), v.map((C) => {
          const x = jv(o, C, g, w), S = C;
          return x.columns = S.columns ? d(S.columns, x, g + 1) : [], x;
        });
      };
      return d(p);
    }, ae(e, "debugColumns")),
    getAllFlatColumns: le(() => [o.getAllColumns()], (p) => p.flatMap((d) => d.getFlatColumns()), ae(e, "debugColumns")),
    _getAllFlatColumnsById: le(() => [o.getAllFlatColumns()], (p) => p.reduce((d, v) => (d[v.id] = v, d), {}), ae(e, "debugColumns")),
    getAllLeafColumns: le(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, d) => {
      let v = p.flatMap((w) => w.getLeafColumns());
      return d(v);
    }, ae(e, "debugColumns")),
    getColumn: (p) => o._getAllFlatColumnsById()[p]
  };
  Object.assign(o, h);
  for (let p = 0; p < o._features.length; p++) {
    const d = o._features[p];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function E0() {
  return (e) => le(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let c = 0; c < o.length; c++) {
        const u = Wv(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
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
function R0() {
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
      return c.sort((u, h) => {
        for (let d = 0; d < i.length; d += 1) {
          var p;
          const v = i[d], w = s[v.id], g = w.sortUndefined, C = (p = v == null ? void 0 : v.desc) != null ? p : !1;
          let x = 0;
          if (g) {
            const S = u.getValue(v.id), E = h.getValue(v.id), O = S === void 0, N = E === void 0;
            if (O || N) {
              if (g === "first") return O ? -1 : 1;
              if (g === "last") return O ? 1 : -1;
              x = O && N ? 0 : O ? g : -g;
            }
          }
          if (x === 0 && (x = w.sortingFn(u, h, v.id)), x !== 0)
            return C && (x *= -1), w.invertSorting && (x *= -1), x;
        }
        return u.index - h.index;
      }), c.forEach((u) => {
        var h;
        o.push(u), (h = u.subRows) != null && h.length && (u.subRows = l(u.subRows));
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
function hs(e, t) {
  return e ? $0(e) ? /* @__PURE__ */ B(e, t) : e : null;
}
function $0(e) {
  return T0(e) || typeof e == "function" || M0(e);
}
function T0(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function M0(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function O0(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = Y(() => ({
    current: _0(t)
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
const I0 = 500, ps = 10;
function A0(e, { disabled: t = !1 } = {}) {
  const n = U(null), r = U(0), o = U(0), i = U(!1), s = ee(
    (c) => {
      if (t) return;
      const u = c.touches[0];
      r.current = u.clientX, o.current = u.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, I0);
    },
    [e, t]
  ), l = ee(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ee(
    (c) => {
      const u = c.touches[0], h = Math.abs(u.clientX - r.current), p = Math.abs(u.clientY - o.current);
      (h > ps || p > ps) && (i.current = !0, l());
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
const lc = me(null);
function D0({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f(lc.Provider, { value: e, children: t });
}
function ac() {
  const e = fe(lc);
  if (!e)
    throw new Error(
      "useGridSelectionContext must be used within a GridSelectionProvider"
    );
  return e;
}
function ms(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Be(e, t) {
  return {
    row: ms(e.row, 0, Math.max(0, t.rowCount - 1)),
    col: ms(e.col, 0, Math.max(0, t.colCount - 1))
  };
}
const cc = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 }
};
function jn(e, t, n) {
  const r = cc[t];
  return Be(
    { row: e.row + r.row, col: e.col + r.col },
    n
  );
}
function F0(e, t) {
  const n = e ?? t;
  return {
    top: Math.min(n.row, t.row),
    left: Math.min(n.col, t.col),
    bottom: Math.max(n.row, t.row),
    right: Math.max(n.col, t.col)
  };
}
function P0(e, t) {
  return e.row >= t.top && e.row <= t.bottom && e.col >= t.left && e.col <= t.right;
}
function So(e, t) {
  return e.row >= 0 && e.row < t.rowCount && e.col >= 0 && e.col < t.colCount;
}
function N0(e, t, n, r) {
  const o = cc[t], i = (u, h) => So({ row: u, col: h }, n), s = { row: e.row + o.row, col: e.col + o.col };
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
function k0(e, t) {
  return Math.max(1, Math.floor(e / t));
}
function L0(e) {
  return e.type === "boolean" || e.type === "enum" || e.type === "reference";
}
function gs(e) {
  return L0(e) || vr(e);
}
function V0({
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
  clearRowsSelection: h,
  errorsText: p,
  enumLabelDict: d
}) {
  const { t: v } = we(), { availableActions: w } = ze(), g = ac(), C = g.isEditing(e), x = g.isActive(e), S = g.isSelected(e), E = U(null), O = U(null), N = U(!1), A = ni(l) || !w.includes("editRows");
  function b(z) {
    A || g.startEdit(e, z);
  }
  function m() {
    g.stopEditing();
  }
  se(() => {
    C && (N.current = !1, h(), E.current && E.current.focus());
  }, [C]);
  const { displayValue: y, valueEmpty: _ } = Va(
    s,
    l,
    a,
    d
  ), $ = A0(
    () => {
      A || b("preserve");
    },
    { disabled: A }
  ), k = p ? "hc:bg-hello-csv-danger-extra-light" : A ? "hc:bg-hello-csv-muted" : "", I = x ? "hc:z-1" : "";
  function P(z) {
    N.current = !0, c(ri(l, String(z ?? ""))), m();
  }
  function R(z) {
    var W;
    if (C) {
      if (z.key === "Escape") {
        N.current = !0, m(), z.preventDefault(), z.stopPropagation();
        return;
      }
      if (!gs(l) && (z.key === "Enter" || z.key === "Tab")) {
        z.preventDefault(), z.stopPropagation(), P(((W = E.current) == null ? void 0 : W.value) ?? "");
        const re = z.key === "Tab" ? z.shiftKey ? "left" : "right" : z.shiftKey ? "up" : "down";
        g.setActive(jn(e, re, t));
      }
    }
  }
  function T(z) {
    C || z.button !== 0 || (z.shiftKey ? g.extendTo(e) : g.beginDrag(e), z.preventDefault());
  }
  function M() {
    C || g.dragTo(e);
  }
  function D(z) {
    var re;
    if (!C || !gs(l)) return;
    const W = z.relatedTarget;
    W && ((re = O.current) != null && re.contains(W)) || W instanceof Element && W.closest(`[${ma}]`) || m();
  }
  function H(z) {
    C || (z.detail > 1 ? b("preserve") : z.shiftKey ? g.extendTo(e) : g.setActive(e));
  }
  function V(z, { close: W = !0 } = {}) {
    N.current = !0, c(z), W && m();
  }
  const L = (() => {
    const z = g.state.editInitialValue;
    return z && typeof z == "object" && "char" in z ? z.char : void 0;
  })(), F = U(a);
  C || (F.current = a);
  const te = L ?? F.current, X = {
    ref: O,
    role: "gridcell",
    "aria-colindex": r,
    "aria-selected": S,
    "data-cell-row": e.row,
    "data-cell-col": e.col,
    tabIndex: x ? 0 : -1,
    onKeyDown: R,
    onClick: H,
    onMouseDown: T,
    onMouseEnter: M,
    // focusout (bubbles) rather than blur (doesn't) so we catch the combobox
    // input losing focus to somewhere outside the cell.
    onFocusOut: D,
    className: `hc:relative hc:flex hc:h-full hc:w-full hc:items-stretch hc:outline-none ${I}`
  }, ue = x ? /* @__PURE__ */ f("div", { className: "hc:ring-hello-csv-primary hc:pointer-events-none hc:absolute hc:inset-0 hc:ring-2 hc:ring-inset" }) : S ? /* @__PURE__ */ f("div", { className: "hc:bg-hello-csv-primary/20 hc:pointer-events-none hc:absolute hc:inset-0" }) : null;
  function ie() {
    if (l.type === "boolean") {
      const z = [!0, !1].map((W) => {
        var re, q;
        return {
          label: W ? ((re = l.typeArguments) == null ? void 0 : re.trueLabel) ?? wa : ((q = l.typeArguments) == null ? void 0 : q.falseLabel) ?? ya,
          value: W
        };
      });
      return /* @__PURE__ */ f(
        Ot,
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
      const z = La(
        l,
        u
      ), W = Ma(l, d), re = z.map((q) => ({
        label: String(mo(W, q)),
        value: q
      }));
      return /* @__PURE__ */ f(
        Ot,
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
        const re = Lg(
          a,
          z,
          (q) => v("components.select.invalidOption", { value: q }),
          /* @__PURE__ */ f(
            km,
            {
              className: "hc:text-hello-csv-danger hc:mr-2 hc:h-5 hc:w-5 hc:shrink-0",
              "aria-hidden": "true"
            }
          )
        );
        return /* @__PURE__ */ f(
          Ot,
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
      return /* @__PURE__ */ f(
        Ot,
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
    if (vr(l)) {
      const z = l.typeArguments ?? {};
      return /* @__PURE__ */ f(
        sg,
        {
          mode: l.type,
          value: typeof a == "string" ? a : "",
          seedText: L,
          ...z,
          "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
          onCommit: (W) => P(W)
        }
      );
    }
    return /* @__PURE__ */ f(
      xa,
      {
        "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
        type: l.type === "number" ? "number" : "text",
        classes: "hc:block hc:w-full",
        value: te,
        onBlur: (z) => {
          N.current || P(z);
        },
        ref: E
      }
    );
  }
  return C ? /* @__PURE__ */ f(
    "td",
    {
      role: "presentation",
      className: o,
      style: { width: n },
      children: /* @__PURE__ */ f("div", { ...X, children: /* @__PURE__ */ f("div", { className: "hc:w-full", children: ie() }) })
    }
  ) : /* @__PURE__ */ f("td", { role: "presentation", className: o, style: { width: n }, children: /* @__PURE__ */ f(
    ug,
    {
      focusable: !1,
      variant: p ? "error" : "info",
      placement: e.row > 0 && e.row >= t.rowCount - 1 ? "top" : "bottom",
      tooltipText: p || (A ? v("sheet.readOnly") : ""),
      children: /* @__PURE__ */ f("div", { ...X, children: [
        /* @__PURE__ */ f(
          "div",
          {
            "aria-label": `row ${Number(i) + 1} ${l.label} ${y}`,
            ...$,
            className: `hc:h-full hc:w-full hc:py-4 hc:pr-3 hc:pl-4 ${k} hc:touch-manipulation hc:truncate hc:overflow-hidden hc:whitespace-nowrap`,
            title: _ ? void 0 : `${y}`,
            children: l.customRender ? l.customRender(a, y) : y
          }
        ),
        ue
      ] })
    }
  ) });
}
function H0({
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
  const { t: u } = we(), h = ac();
  function p(m, y) {
    return r.filter(
      (_) => _.columnId === m && _.rowIndex === y
    );
  }
  const d = "hc:bg-hello-csv-muted hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:text-hello-csv-text hc:whitespace-nowrap hc:border-y hc:border-hello-csv-border-strong", v = "hc:text-sm hc:font-medium hc:whitespace-nowrap hc:text-hello-csv-text hc:border-b hc:border-hello-csv-border-strong", w = e.getRowModel().rows, g = fl({
    count: w.length,
    getScrollElement: () => s.current,
    estimateSize: () => ga,
    measureElement: (m) => m == null ? void 0 : m.getBoundingClientRect().height,
    overscan: 20
  }), C = h.state.active, x = h.state.editing;
  se(() => {
    if (!C || x) return;
    g.scrollToIndex(C.row, { align: "auto" });
    let m = 0, y = 0;
    const _ = () => {
      const $ = s.current, k = $ == null ? void 0 : $.querySelector(
        `[data-cell-row="${C.row}"][data-cell-col="${C.col}"]`
      );
      k ? (document.activeElement !== k && k.focus({ preventScroll: !0 }), S($, k)) : y++ < 5 && (m = requestAnimationFrame(_));
    };
    return m = requestAnimationFrame(_), () => cancelAnimationFrame(m);
  }, [C == null ? void 0 : C.row, C == null ? void 0 : C.col, x == null ? void 0 : x.row, x == null ? void 0 : x.col]);
  function S(m, y) {
    const _ = m.getBoundingClientRect(), $ = y.getBoundingClientRect(), k = c ? va : 0;
    $.left < _.left + k ? m.scrollLeft -= _.left + k - $.left : $.right > _.right && (m.scrollLeft += $.right - _.right);
  }
  const E = g.getVirtualItems().map((m) => ({
    row: w[m.index],
    index: m.index,
    start: m.start,
    end: m.end
  })), [O, N] = E.length > 0 ? [
    Math.max(
      0,
      E[0].start - g.options.scrollMargin
    ),
    Math.max(
      0,
      g.getTotalSize() - E[E.length - 1].end
    )
  ] : [0, 0], A = ee(
    (m) => {
      m && g.measureElement(m);
    },
    [g]
  ), b = t.columns.length;
  return /* @__PURE__ */ f(
    "table",
    {
      className: "hc:w-full hc:table-fixed hc:border-separate hc:border-spacing-0",
      "aria-label": u("sheet.sheetTitle"),
      role: "grid",
      "aria-multiselectable": "true",
      "aria-rowcount": w.length + 1,
      "aria-colcount": b + (c ? 1 : 0),
      children: [
        /* @__PURE__ */ f("thead", { className: "hc:bg-hello-csv-muted hc:sticky hc:top-0 hc:z-10", children: e.getHeaderGroups().map((m) => /* @__PURE__ */ f("tr", { role: "row", "aria-rowindex": 1, children: m.headers.map((y, _) => /* @__PURE__ */ f(
          "th",
          {
            role: "columnheader",
            "aria-colindex": _ + 1,
            "aria-sort": y.column.getIsSorted() === "asc" ? "ascending" : y.column.getIsSorted() === "desc" ? "descending" : y.column.getCanSort() ? "none" : void 0,
            className: y.column.id === fo ? `${d} hc:sticky hc:left-0 hc:z-20` : `hc:relative hc:z-10 ${d}`,
            colSpan: y.colSpan,
            style: { width: y.getSize() },
            children: /* @__PURE__ */ f(
              "div",
              {
                className: `hc:flex hc:w-full ${y.column.getCanSort() ? "hc:cursor-pointer hc:select-none" : ""}`,
                onClick: y.column.getToggleSortingHandler(),
                children: [
                  y.isPlaceholder ? null : /* @__PURE__ */ f("div", { children: hs(
                    y.column.columnDef.header,
                    y.getContext()
                  ) }, `header-${m.id}-${y.id}`),
                  /* @__PURE__ */ f(
                    "span",
                    {
                      className: "hc:bg-hello-csv-text-muted hc:text-hello-csv-surface hc:ml-2 hc:flex-none hc:rounded-sm",
                      children: {
                        asc: /* @__PURE__ */ f(
                          Dm,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        ),
                        desc: /* @__PURE__ */ f(
                          Em,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        )
                      }[y.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${m.id}-${y.id}`
                  ),
                  y.column.getCanResize() && /* @__PURE__ */ f(
                    "div",
                    {
                      onMouseDown: y.getResizeHandler(),
                      onTouchStart: y.getResizeHandler(),
                      className: "hc:bg-hello-csv-border hc:absolute hc:top-0 hc:right-0 hc:h-full hc:w-0.5 hc:cursor-col-resize hc:touch-none hc:select-none"
                    },
                    `resize-icon-${m.id}-${y.id}`
                  )
                ]
              }
            )
          },
          y.id
        )) }, m.id)) }),
        /* @__PURE__ */ f(
          "tbody",
          {
            className: "hc:divide-hello-csv-border hc:divide-y",
            style: {
              height: `${g.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ f("tr", { role: "presentation", children: /* @__PURE__ */ f("td", { style: { height: O } }) }),
              E.map(({ row: m, index: y }) => /* @__PURE__ */ f(
                "tr",
                {
                  role: "row",
                  "aria-rowindex": y + 2,
                  "data-index": y,
                  ref: A,
                  children: m.getVisibleCells().map((_, $) => {
                    if (_.column.id === fo)
                      return /* @__PURE__ */ f(
                        "td",
                        {
                          role: "gridcell",
                          "aria-colindex": 1,
                          "aria-label": `Select row ${Number(m.id) + 1}`,
                          className: `hc:bg-hello-csv-muted ${v} hc:sticky hc:left-0 hc:z-6 hc:pr-3 hc:pl-4`,
                          style: { width: _.column.getSize() },
                          children: hs(_.column.columnDef.cell, _.getContext())
                        },
                        _.id
                      );
                    const k = $ - (c ? 1 : 0), I = t.columns[k].id, P = ti(
                      n,
                      t.id,
                      m.original
                    ), R = p(I, P).map((T) => u(T.message)).join(", ");
                    return /* @__PURE__ */ f(
                      V0,
                      {
                        coord: { row: y, col: k },
                        gridDims: a,
                        widthPx: _.column.getSize(),
                        ariaColIndex: k + (c ? 2 : 1),
                        tdClassName: v,
                        rowId: m.id,
                        sheetDefinition: t,
                        columnDefinition: t.columns.find((T) => T.id === I),
                        allData: n,
                        value: _.getValue(),
                        onUpdated: (T) => o(P, I, T),
                        clearRowsSelection: () => i([]),
                        errorsText: R,
                        enumLabelDict: l
                      },
                      _.id
                    );
                  })
                },
                m.id
              )),
              /* @__PURE__ */ f("tr", { role: "presentation", children: /* @__PURE__ */ f("td", { style: { height: N } }) })
            ]
          }
        )
      ]
    }
  );
}
function z0({ column: e }) {
  const { t } = we(), n = ni(e);
  return /* @__PURE__ */ f(
    "div",
    {
      className: "hc:flex hc:items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ f("div", { className: "hc:relative hc:mr-3 hc:h-5 hc:w-5", children: [
          /* @__PURE__ */ f(ua, { className: "hc:text-hello-csv-text-subtle hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" }),
          /* @__PURE__ */ f(Cp, { className: "hc:text-hello-csv-text-muted hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" })
        ] }),
        e.label,
        " ",
        yr(e) && "*"
      ]
    }
  );
}
function B0({
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
  addEmptyRow: h,
  sheetValidationErrors: p,
  rowValidationSummary: d,
  resetState: v,
  undo: w,
  redo: g,
  canUndo: C,
  canRedo: x,
  enumLabelDict: S
}) {
  const { csvDownloadMode: E, availableActions: O } = ze(), { t: N } = we(), { processingInProgress: A } = nt(), [b, m] = Y(!1), [y, _] = Y(!1), $ = "hc:pointer-events-none hc:cursor-not-allowed hc:opacity-50";
  function k(T) {
    const M = e.columns.find(
      (H) => H.id === T
    ), D = ss(
      p.filter((H) => H.columnId === T).map((H) => H.rowIndex)
    ).length;
    return {
      label: `${(M == null ? void 0 : M.label) || T} (${D})`,
      value: T
    };
  }
  const I = ss(
    p.map((T) => T.columnId)
  ).map((T) => k(T));
  a != null && I.find((T) => T.value === a) == null && I.push(k(a));
  const P = [
    {
      value: "all",
      label: N("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: N("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: N("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function R() {
    u({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ f("div", { className: "hc:my-5 hc:flex hc:items-center", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5", children: [
      /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(fg, { activeButton: o, buttons: P }) }),
      O.includes("search") && /* @__PURE__ */ f(
        xa,
        {
          clearable: !0,
          value: s,
          onChange: (T) => l(T),
          placeholder: N("sheet.search"),
          iconBuilder: (T) => /* @__PURE__ */ f(xp, { ...T })
        }
      ),
      O.includes("undoRedo") && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(lt, { tooltipText: N("sheet.undoTooltip"), children: /* @__PURE__ */ f(
          lp,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": N("sheet.undoTooltip"),
            "aria-disabled": !C,
            className: `hc:h-6 hc:w-6 ${C ? "hc:cursor-pointer" : $}`,
            onClick: () => C && w()
          }
        ) }),
        /* @__PURE__ */ f(lt, { tooltipText: N("sheet.redoTooltip"), children: /* @__PURE__ */ f(
          cp,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": N("sheet.redoTooltip"),
            "aria-disabled": !x,
            className: `hc:h-6 hc:w-6 ${x ? "hc:cursor-pointer" : $}`,
            onClick: () => x && g()
          }
        ) })
      ] }),
      O.includes("removeRows") && /* @__PURE__ */ f(
        lt,
        {
          tooltipText: N(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ f(
            $p,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": N(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `hc:h-6 hc:w-6 ${n.length > 0 ? "hc:cursor-pointer" : $}`,
              onClick: () => m(!0)
            }
          )
        }
      ),
      O.includes("addRows") && /* @__PURE__ */ f(lt, { tooltipText: N("sheet.addRowsTooltip"), children: /* @__PURE__ */ f(
        Ep,
        {
          className: "hc:h-6 hc:w-6 hc:cursor-pointer",
          onClick: h
        }
      ) }),
      O.includes("downloadCsv") && /* @__PURE__ */ f(lt, { tooltipText: N("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ f(
        rp,
        {
          className: `hc:h-6 hc:w-6 ${t.length > 0 ? "hc:cursor-pointer" : $}`,
          onClick: () => Ta(
            e,
            t,
            S,
            E
          )
        }
      ) }),
      /* @__PURE__ */ f(
        Ot,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: N("sheet.filterByError"),
          classes: "hc:min-w-48",
          options: I,
          value: a,
          onChange: (T) => c(T)
        }
      ),
      O.includes("removeRows") && /* @__PURE__ */ f(
        uo,
        {
          open: b,
          setOpen: m,
          onConfirm: R,
          title: N("sheet.removeConfirmationModalTitle"),
          confirmationText: N(
            "sheet.removeConfirmationModalConfirmationText"
          ),
          subTitle: N("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:ml-5 hc:flex hc:items-center", children: [
      A && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Da, { color: "dark" }),
        /* @__PURE__ */ f("div", { className: "hc:mr-2" })
      ] }),
      O.includes("resetState") && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(lt, { tooltipText: N("sheet.resetTooltip"), children: /* @__PURE__ */ f(
          ua,
          {
            className: "hc:h-6 hc:w-6 hc:cursor-pointer",
            onClick: () => _(!0)
          }
        ) }),
        /* @__PURE__ */ f(
          uo,
          {
            open: y,
            setOpen: _,
            onConfirm: v,
            title: N("sheet.resetConfirmationModalTitle"),
            confirmationText: N(
              "sheet.resetConfirmationModalConfirmationText"
            ),
            subTitle: N("sheet.resetConfirmationModalSubTitle"),
            variant: "danger"
          }
        )
      ] })
    ] })
  ] });
}
function j0({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ f(Bs, { checked: r, setChecked: o });
}
function U0({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((s) => s !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ f(
    Bs,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
const uc = {
  active: null,
  anchor: null,
  editing: null,
  editInitialValue: "preserve"
};
function W0(e, t) {
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
      return uc;
    default:
      return e;
  }
}
function G0() {
  const [e, t] = et(W0, uc), n = U(!1), r = ne(
    () => e.active ? F0(e.anchor, e.active) : null,
    [e.active, e.anchor]
  ), o = ee(
    (x) => t({ type: "setActive", coord: x }),
    []
  ), i = ee(
    (x) => t({ type: "extend", coord: x }),
    []
  ), s = ee(
    (x) => t({ type: "selectAll", dims: x }),
    []
  ), l = ee(
    (x, S) => t({ type: "startEdit", coord: x, initialValue: S }),
    []
  ), a = ee(() => t({ type: "cancelEdit" }), []), c = ee(() => t({ type: "stopEditing" }), []), u = ee(
    (x) => t({ type: "clamp", dims: x }),
    []
  ), h = ee(() => t({ type: "reset" }), []), p = ee((x) => {
    n.current = !0, t({ type: "setActive", coord: x });
  }, []), d = ee((x) => {
    n.current && t({ type: "extend", coord: x });
  }, []), v = ee(() => {
    n.current = !1;
  }, []), w = ee(
    (x) => {
      var S, E;
      return ((S = e.active) == null ? void 0 : S.row) === x.row && ((E = e.active) == null ? void 0 : E.col) === x.col;
    },
    [e.active]
  ), g = ee(
    (x) => {
      var S, E;
      return ((S = e.editing) == null ? void 0 : S.row) === x.row && ((E = e.editing) == null ? void 0 : E.col) === x.col;
    },
    [e.editing]
  ), C = ee(
    (x) => r ? P0(x, r) : !1,
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
    reset: h,
    beginDrag: p,
    dragTo: d,
    endDrag: v,
    isActive: w,
    isEditing: g,
    isSelected: C
  };
}
function q0(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function vs(e) {
  return e.ctrlKey || e.metaKey;
}
const jr = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right"
};
function Y0(e, t, n, r) {
  if (!t.editing && vs(e)) {
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
    return jr[e.key] || e.key === "Tab" ? { type: "MoveActive", to: Be({ row: 0, col: 0 }, n) } : { type: "NoOp" };
  const i = r(o);
  if (vs(e)) {
    const l = jr[e.key];
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
  const s = jr[e.key];
  if (s) {
    const l = jn(o, s, n);
    return e.shiftKey ? { type: "ExtendSelection", to: l } : { type: "MoveActive", to: l };
  }
  switch (e.key) {
    case "Tab":
      return {
        type: "MoveActive",
        to: jn(o, e.shiftKey ? "left" : "right", n)
      };
    case "Enter":
      return {
        type: "MoveActive",
        to: jn(o, e.shiftKey ? "up" : "down", n)
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
  return q0(e) ? i ? { type: "StartEdit", initialValue: { char: e.key } } : { type: "NoOp" } : { type: "NoOp" };
}
function K0() {
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
function Z0(e, t) {
  const n = e.map(
    (r) => r.map((o, i) => Gg(t[i], o))
  );
  return $a(n, "	");
}
function X0(e, t, n, r, o) {
  const i = [];
  if (e.length === 1 && e[0] && e[0].length === 1 && o) {
    const l = e[0][0];
    for (let a = o.top; a <= o.bottom; a++)
      for (let c = o.left; c <= o.right; c++)
        So({ row: a, col: c }, n) && r(a, c) && i.push({ row: a, col: c, value: l });
    return i;
  }
  return e.forEach((l, a) => {
    l.forEach((c, u) => {
      const h = t.row + a, p = t.col + u;
      So({ row: h, col: p }, n) && r(h, p) && i.push({ row: h, col: p, value: c });
    });
  }), i;
}
function J0(e, t) {
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
function Q0({
  sheetDefinition: e,
  data: t,
  rowData: n,
  allData: r,
  canEditRows: o,
  setRowsData: i,
  undo: s,
  redo: l
}) {
  const a = G0(), c = K0(), u = U(null), h = e.columns, p = ne(
    () => ({ rowCount: n.length, colCount: h.length }),
    [n.length, h.length]
  );
  se(() => {
    a.clampToBounds(p);
  }, [p.rowCount, p.colCount]), se(() => {
    const m = () => a.endDrag();
    return window.addEventListener("mouseup", m), () => window.removeEventListener("mouseup", m);
  }, []);
  const d = U(a);
  d.current = a, se(() => {
    const m = (y) => {
      const _ = d.current;
      if (_.state.editing) return;
      const $ = u.current;
      $ && !$.contains(y.target) && _.reset();
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []);
  const v = (m) => {
    if (!m) return !1;
    const y = h[m.col];
    return y ? !ni(y) && o : !1;
  }, w = (m, y) => {
    var _;
    return (_ = n[m]) == null ? void 0 : _[h[y].id];
  }, g = (m, y) => Et(w(m, y)), C = (m) => ti(r, e.id, n[m]), x = (m) => {
    if (m.length === 0) return;
    const y = m.map(($) => ({
      rowIndex: C($.row),
      columnId: h[$.col].id,
      value: $.value
    })), _ = J0(y, t.rows);
    i(
      _.map(($) => ({
        sheetId: e.id,
        rowIndex: $.rowIndex,
        value: $.value
      }))
    );
  }, S = () => {
    const m = a.range;
    if (!m) return;
    const y = [];
    for (let $ = m.top; $ <= m.bottom; $++) {
      const k = [];
      for (let I = m.left; I <= m.right; I++)
        k.push(w($, I));
      y.push(k);
    }
    const _ = Z0(
      y,
      h.slice(m.left, m.right + 1)
    );
    c.write(_);
  }, E = () => {
    const m = a.range;
    if (!m) return;
    const y = [];
    for (let _ = m.top; _ <= m.bottom; _++)
      for (let $ = m.left; $ <= m.right; $++)
        v({ col: $ }) && y.push({
          row: _,
          col: $,
          value: qg(h[$])
        });
    x(y);
  }, O = () => {
    S(), E();
  }, N = async () => {
    const m = a.state.active;
    if (!m) return;
    const y = await c.read();
    if (!y) return;
    const _ = Sv(y, "	");
    if (_.length === 0) return;
    const $ = X0(
      _,
      m,
      p,
      (k, I) => v({ col: I }),
      a.range ?? void 0
    );
    x(
      $.map((k) => ({
        row: k.row,
        col: k.col,
        value: ri(h[k.col], k.value)
      }))
    );
  }, A = () => {
    const m = a.range;
    if (!m || m.bottom === m.top) return;
    const y = [];
    for (let _ = m.left; _ <= m.right; _++) {
      const $ = w(m.top, _);
      for (let k = m.top + 1; k <= m.bottom; k++)
        v({ col: _ }) && y.push({ row: k, col: _, value: $ });
    }
    x(y);
  };
  return { selection: a, dims: p, tableContainerRef: u, handleGridKeyDown: (m) => {
    if (a.state.editing) return;
    const y = a.state.active;
    if ((m.key === "PageDown" || m.key === "PageUp") && y) {
      const $ = u.current, k = k0(
        ($ == null ? void 0 : $.clientHeight) ?? 0,
        ga
      ), I = Be(
        {
          row: y.row + (m.key === "PageDown" ? k : -k),
          col: y.col
        },
        p
      );
      m.shiftKey ? a.extendTo(I) : a.setActive(I), m.preventDefault();
      return;
    }
    const _ = Y0(
      {
        key: m.key,
        shiftKey: m.shiftKey,
        ctrlKey: m.ctrlKey,
        metaKey: m.metaKey,
        altKey: m.altKey
      },
      a.state,
      p,
      v
    );
    switch (_.type) {
      case "MoveActive":
        a.setActive(_.to), m.preventDefault();
        break;
      case "ExtendSelection":
        a.extendTo(_.to), m.preventDefault();
        break;
      case "JumpEdge": {
        if (!y) break;
        const $ = N0(y, _.direction, p, g);
        m.shiftKey ? a.extendTo($) : a.setActive($), m.preventDefault();
        break;
      }
      case "SelectAll":
        a.selectAll(p), m.preventDefault();
        break;
      case "StartEdit":
        y && a.startEdit(y, _.initialValue), m.preventDefault();
        break;
      case "ClearCells":
        E(), m.preventDefault();
        break;
      case "Copy":
        S(), m.preventDefault();
        break;
      case "Cut":
        O(), m.preventDefault();
        break;
      case "Paste":
        N(), m.preventDefault();
        break;
      case "FillDown":
        A(), m.preventDefault();
        break;
      case "Undo":
        s && (s(), m.preventDefault());
        break;
      case "Redo":
        l && (l(), m.preventDefault());
        break;
    }
  } };
}
function ew({
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
  canRedo: h,
  enumLabelDict: p
}) {
  const { sheetData: d } = nt(), { availableActions: v } = ze(), [w, g] = Y([]), [C, x] = Y("all"), [S, E] = Y(""), [O, N] = Y(
    null
  ), A = Ng(
    t,
    d,
    C,
    n,
    O,
    e,
    S,
    p
  ), b = v.includes("removeRows"), m = v.includes("editRows"), y = v.includes("undoRedo"), { selection: _, dims: $, tableContainerRef: k, handleGridKeyDown: I } = Q0({
    sheetDefinition: e,
    data: t,
    rowData: A,
    allData: d,
    canEditRows: m,
    setRowsData: o,
    // Gate the keyboard shortcuts on the same flag as the toolbar buttons.
    undo: y ? a : void 0,
    redo: y ? c : void 0
  });
  se(() => {
    g([]), x("all"), _.reset();
  }, [e]);
  const P = ne(() => {
    const D = t.rows, H = D.filter(
      (L, F) => !n.some((te) => te.rowIndex === F)
    ), V = D.filter(
      (L, F) => n.some((te) => te.rowIndex === F)
    );
    return {
      all: D.length,
      valid: H.length,
      errors: V.length
    };
  }, [t, n]), R = ne(() => [
    ...v.includes(
      "removeRows"
    ) ? [
      {
        id: fo,
        header: () => /* @__PURE__ */ f(
          j0,
          {
            visibleData: A,
            selectedRows: w,
            setSelectedRows: g
          }
        ),
        cell: ({ row: H }) => /* @__PURE__ */ f(
          U0,
          {
            row: H,
            selectedRows: w,
            setSelectedRows: g
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: va
      }
    ] : [],
    ...e.columns.map(
      (H) => ({
        id: H.id,
        accessorFn: (V) => V[H.id],
        header: () => /* @__PURE__ */ f(z0, { column: H }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: H.label },
        enableResizing: !0
      })
    )
  ], [e, w, A, v]), T = O0({
    data: A,
    columns: R,
    getCoreRowModel: E0(),
    getSortedRowModel: R0(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: pm,
      maxSize: mm,
      size: gm
    }
  });
  function M(D, H, V) {
    const L = { ...t.rows[D] };
    V === void 0 ? delete L[H] : L[H] = V, r({
      sheetId: e.id,
      value: L,
      rowIndex: D
    });
  }
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f(
      B0,
      {
        sheetDefinition: e,
        rowData: A,
        selectedRows: w,
        setSelectedRows: g,
        viewMode: C,
        setViewMode: x,
        searchPhrase: S,
        setSearchPhrase: E,
        errorColumnFilter: O,
        setErrorColumnFilter: N,
        removeRows: i,
        addEmptyRow: s,
        sheetValidationErrors: n,
        rowValidationSummary: P,
        resetState: l,
        undo: a,
        redo: c,
        canUndo: u,
        canRedo: h,
        enumLabelDict: p
      }
    ) }),
    /* @__PURE__ */ f(D0, { value: _, children: /* @__PURE__ */ f(
      "div",
      {
        className: "hc:min-h-0 hc:flex-1 hc:overflow-auto",
        ref: k,
        tabIndex: 0,
        onKeyDown: I,
        children: /* @__PURE__ */ f(
          H0,
          {
            tableContainerRef: k,
            table: T,
            sheetDefinition: e,
            allData: d,
            sheetValidationErrors: n,
            onCellValueChanged: M,
            setSelectedRows: g,
            enumLabelDict: p,
            gridDims: $,
            hasCheckboxColumn: b
          }
        )
      }
    ) })
  ] });
}
function dc(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function tw(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && Ta(
      i,
      o.rows,
      n,
      r
    );
  });
}
const ws = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + Xo(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function nw({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = nt(), l = Jo(o), { csvDownloadMode: a } = ze(), { t: c } = we(), u = dc(l);
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-row hc:px-4 hc:pt-3 hc:pb-2", children: /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:space-y-4", children: [
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: /* @__PURE__ */ f(mp, { className: "hc:text-hello-csv-primary hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ f("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ f("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.fileInformation") }),
        /* @__PURE__ */ f("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: n ? `${c("importStatus.original")}: ${pn((n == null ? void 0 : n.size) || 0)} · ${c("importStatus.processed")}: ${pn(ws(l, s, t, a))}` : `${c("importStatus.processed")}: ${pn(ws(l, s, t, a))}` }),
        /* @__PURE__ */ f("div", { className: "hc:mt-5", children: /* @__PURE__ */ f(
          Ve,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => tw(
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
    /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: r === "failed" ? /* @__PURE__ */ f(go, { className: "hc:text-hello-csv-danger-light hc:h-8 hc:w-8" }) : e ? /* @__PURE__ */ f(vg, { className: "hc:text-hello-csv-warning-light hc:h-8 hc:w-8" }) : /* @__PURE__ */ f(Ia, { className: "hc:text-hello-csv-success-light hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ f("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ f("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.importResults") }),
        /* @__PURE__ */ f("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: c("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          i.skipped >= 0 && /* @__PURE__ */ f("span", { children: [
            c("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ f("span", { children: [
            c("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ f("span", { children: c("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          c("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ f(Qo, { variant: "error", children: c("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function fc({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = we();
  return /* @__PURE__ */ f(zs, { withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-col hc:py-5", children: [
    /* @__PURE__ */ f("div", { className: "hc:px-4 hc:pb-2 hc:text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:px-4 hc:pb-2 hc:text-sm", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ f(
      nw,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function rw({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = nt(), { onSummaryFinished: o } = ze(), { t: i } = we(), s = Jo(n), l = dc(s), a = (r == null ? void 0 : r.imported) ?? 0, c = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex-none hc:text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "hc:mt-4", children: /* @__PURE__ */ f(
        ei,
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
      /* @__PURE__ */ f("div", { className: "hc:mt-6", children: /* @__PURE__ */ f(
        fc,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ f(Ve, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
  ] });
}
function ow({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = we();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hc:text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "hc:mt-4", children: /* @__PURE__ */ f(
        ei,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ f("div", { className: "hc:mt-6", children: /* @__PURE__ */ f(fc, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:mt-6 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ f(Ve, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ f(Ve, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function iw({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, s] = Y(!1);
  return se(() => {
    if (e === 0) {
      const l = setTimeout(() => {
        s(!0);
      }, 3e3);
      return () => clearTimeout(l);
    }
  }, [e]), i ? /* @__PURE__ */ f("div", { className: "hc:flex hc:justify-center", children: /* @__PURE__ */ f(
    "div",
    {
      className: `hc:border-hello-csv-success-light hc:h-22 hc:w-22 hc:rounded-full hc:border-10 ${t && "hc:animate-spin hc:border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ f(
    "svg",
    {
      className: "hc:mx-auto hc:h-24 hc:w-24 hc:rotate-[-90deg]",
      width: "100",
      height: "100",
      children: [
        /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(
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
function sw() {
  return /* @__PURE__ */ f(dp, { className: "hc:text-hello-csv-success hc:absolute hc:inset-0 hc:m-auto hc:h-12 hc:w-12 hc:stroke-4" });
}
function lw({ resetState: e }) {
  const { importProgress: t, mode: n } = nt(), r = n === "submit", { t: o } = we();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:p-10", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:w-full hc:flex-col", children: /* @__PURE__ */ f("div", { className: "hc:my-16 hc:text-center", children: [
    /* @__PURE__ */ f("div", { className: "hc:relative hc:mx-auto hc:h-24 hc:w-24", children: [
      /* @__PURE__ */ f(iw, { progress: t, pending: r }),
      r && /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ f("div", { className: "hc:absolute hc:inset-0 hc:flex hc:items-center hc:justify-center", children: /* @__PURE__ */ f("b", { className: "hc:text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ f("h2", { className: "hc:text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ f(sw, {})
    ] }),
    !r && /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-col hc:items-center", children: [
      /* @__PURE__ */ f("h2", { className: "hc:text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ f("div", { className: "hc:h-5" }),
      /* @__PURE__ */ f(Ve, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function aw({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = nt();
  return /* @__PURE__ */ f("div", { className: "hc:h-full hc:overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ f(lw, { resetState: n }),
    o === "failed" && /* @__PURE__ */ f(
      ow,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ f(rw, { resetState: n, enumLabelDict: r })
  ] });
}
const cw = ({ children: e }) => {
  const { theme: t } = ze();
  return se(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ f(pe, { children: e });
};
function uw({
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
const dw = /* @__PURE__ */ de(uw);
function hc() {
  const { sheets: e, preventUploadOnValidationErrors: t } = ze(), { sheetData: n, validationErrors: r, processingInProgress: o } = nt(), { t: i } = we();
  return ne(() => {
    const s = Qm(e, n).map(
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
function fw({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = nt(), { sheets: i } = ze(), { byId: s } = hc(), { t: l } = we();
  return /* @__PURE__ */ f(
    lg,
    {
      tabs: i.map((a) => {
        const c = s[a.id], u = c != null ? `${a.label} (${c.count} / ${c.maxRows})` : `${a.label} (${t[a.id]})`, h = o.some(
          (d) => d.sheetId === a.id
        ), p = c != null && c.exceeded ? c.tooltip : h ? l("importer.sheetValidationErrors") : void 0;
        return {
          label: u,
          value: a.id,
          icon: p != null ? /* @__PURE__ */ f(lt, { className: "hc:mr-3", tooltipText: p, children: /* @__PURE__ */ f(dw, { className: "hc:h-4 hc:w-4" }) }) : void 0
        };
      }),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function hw({ onBackToMapping: e }) {
  const { t } = we(), [n, r] = Y(!1);
  return /* @__PURE__ */ f(pe, { children: [
    /* @__PURE__ */ f(
      Ve,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ f(
      uo,
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
function pw({ importerRequirements: e }) {
  const { t } = we();
  return /* @__PURE__ */ f("div", { className: "hc:h-full hc:w-full hc:space-y-5 hc:overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ f("div", { className: "hc:me-3", children: [
      /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border hc:my-3 hc:border-b hc:pb-4 hc:text-sm hc:font-light hc:uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ f("div", { className: "hc:mt-4", children: r.map((i) => /* @__PURE__ */ f(
        "div",
        {
          className: "hc:my-3 hc:flex hc:justify-between",
          children: [
            /* @__PURE__ */ f("div", { className: "hc:text-xs", children: i.columnLabel }),
            /* @__PURE__ */ f("div", { className: "hc:text-xs hc:font-light", children: /* @__PURE__ */ f(
              lt,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ f(yp, { className: "hc:text-hello-csv-text-muted hc:size-5" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function mw({ importerRequirements: e }) {
  const { t } = we();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-5", children: [
    /* @__PURE__ */ f("div", { className: "hc:me-3", children: /* @__PURE__ */ f(ei, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ f("div", { className: "hc:flex hc:min-h-0 hc:flex-1 hc:overflow-hidden", children: /* @__PURE__ */ f(pw, { importerRequirements: e }) })
  ] });
}
function gw({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = ze(), { t: i, tHtml: s } = we(), l = U(null), [a, c] = Y(!1), [u, h] = Y(null), p = cm.concat(
    (r == null ? void 0 : r.map((x) => x.mimeType)) ?? []
  ), d = um, v = ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", "), w = (x, S) => {
    const E = mv(x.name);
    if (!(p.includes(x.type) || d.includes(E))) {
      h(
        i("uploader.unsupportedFileType", { formats: v })
      );
      return;
    }
    if (x.size > S) {
      h(
        i("uploader.fileTooLarge", { size: pn(S) })
      );
      return;
    }
    h(null), e(x);
  }, g = (x) => {
    var E;
    const S = x.target;
    (E = S.files) != null && E.length && w(S.files[0], n);
  }, C = (x) => {
    var S;
    x.preventDefault(), c(!1), (S = x.dataTransfer) != null && S.files.length && w(x.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ f(zs, { variant: "muted", withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ f(
    "div",
    {
      className: `hc:flex hc:h-full hc:flex-col hc:p-5 hc:transition-colors ${a ? "hc:bg-hello-csv-muted-light" : "hc:bg-hello-csv-muted"}`,
      onClick: () => {
        var x;
        return (x = l.current) == null ? void 0 : x.click();
      },
      onDragOver: (x) => {
        x.preventDefault(), c(!0);
      },
      onDragEnter: () => c(!0),
      onDragLeave: () => c(!1),
      onDrop: (x) => C(x),
      children: [
        /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-1 hc:flex-col hc:items-center hc:justify-center", children: [
          /* @__PURE__ */ f(hp, { className: "hc:text-hello-csv-primary hc:h-12 hc:w-12" }),
          /* @__PURE__ */ f("p", { className: "hc:mt-3 hc:text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:mt-3 hc:text-sm", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ f("b", { children: pn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ f("div", { className: "hc:mt-3", children: /* @__PURE__ */ f(Ve, { children: i("uploader.browseFiles") }) }),
          u && /* @__PURE__ */ f("div", { className: "hc:mt-2", children: /* @__PURE__ */ f(Aa, { children: u }) }),
          o && /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:text-sm", children: /* @__PURE__ */ f(
            "p",
            {
              role: "button",
              tabIndex: 0,
              "aria-label": i("uploader.enterManually"),
              onClick: (x) => {
                x.stopPropagation(), t == null || t();
              },
              className: "hc:text-hello-csv-primary hc:hover:text-hello-csv-primary hc:cursor-pointer hc:decoration-2 hc:opacity-90 hc:hover:underline hc:focus:underline hc:focus:outline-none",
              children: i("uploader.enterManually")
            }
          ) })
        ] }),
        /* @__PURE__ */ f(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: l,
            type: "file",
            accept: p.concat(d).join(","),
            className: "hc:sr-only",
            onChange: (x) => g(x)
          }
        )
      ]
    }
  ) });
}
function vw({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = ze(), r = pv(n), { t: o } = we();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-4", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex-none hc:text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ f("div", { className: "hc:flex-auto hc:md:min-h-0", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col-reverse hc:gap-5 hc:md:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "hc:h-full hc:flex-1 hc:lg:flex-1", children: /* @__PURE__ */ f(mw, { importerRequirements: r }) }),
      /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:lg:flex-2", children: /* @__PURE__ */ f(
        gw,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
async function ys(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
async function ww({
  state: e,
  dispatch: t,
  importerDefinition: n
}) {
  const r = qa();
  t({ type: "PROCESSING_STARTED", payload: { runId: r } });
  const i = await new Qn(n, e).getState("submit"), s = [
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
      const c = Jo(i.sheetData), u = await n.onComplete(
        { ...e, sheetData: c, validationErrors: s },
        (h) => {
          t({ type: "PROGRESS", payload: { progress: h } });
        },
        e.sheetDefinitions.map((h) => {
          var p;
          return {
            file: Xo(
              h,
              ((p = c.find((d) => d.sheetId === h.id)) == null ? void 0 : p.rows) ?? [],
              {},
              "value"
            ),
            sheetId: h.id
          };
        })
      );
      await ys(400), t({ type: "PROGRESS", payload: { progress: 100 } }), await ys(200), t({
        type: "COMPLETED",
        payload: { importStatistics: u ?? void 0 }
      });
    } catch {
      t({ type: "FAILED" });
    }
  }
}
function Ur(e) {
  return structuredClone(e);
}
function yw() {
  const e = U([]), t = U([]), [, n] = Y(0), r = ee(() => n((a) => a + 1), []), o = ee(
    (a) => {
      e.current.push(Ur(a)), e.current.length > am && (e.current = e.current.slice(-50)), t.current = [], r();
    },
    [r]
  ), i = ee(
    (a) => {
      if (e.current.length === 0) return null;
      const c = e.current.pop();
      return t.current.push(Ur(a)), r(), c;
    },
    [r]
  ), s = ee(
    (a) => {
      if (t.current.length === 0) return null;
      const c = t.current.pop();
      return e.current.push(Ur(a)), r(), c;
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
function bw(e) {
  const { sheets: t, availableActions: n } = e, { t: r } = we(), o = U(!0), i = U(null), s = nt(), l = kv(), a = Ie(), { mode: c, currentSheetId: u, sheetData: h, columnMappings: p, validationErrors: d } = s;
  se(() => {
    var L;
    if (o.current) {
      o.current = !1;
      return;
    }
    (L = i.current) == null || L.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const v = h.find(
    (L) => L.sheetId === u
  ), w = ne(() => Object.fromEntries(
    h.map((L) => [L.sheetId, L.rows.length])
  ), [h]), g = t.find(
    (L) => L.id === u
  ), C = kg(t), { preventUpload: x, uploadBlockedTooltip: S } = hc(), E = new Qn(e, s), O = yw();
  function N() {
    O.record(h);
  }
  async function A(L) {
    await E.uploadFile(L), E.dispatchChange(l);
  }
  function b() {
    O.reset(), E.setEnterDataManually(), E.dispatchChange(l);
  }
  function m(L) {
    E.setMappings(L), E.dispatchChange(l);
  }
  async function y() {
    O.reset(), await E.confirmMappings(), E.dispatchChange(l);
  }
  function _(L) {
    N(), E.changeCell(L), E.dispatchChange(l);
  }
  function $(L) {
    L.length !== 0 && (N(), L.forEach((F) => E.changeCell(F)), E.dispatchChange(l));
  }
  function k(L) {
    N(), E.removeRows(L), E.dispatchChange(l);
  }
  function I() {
    N(), E.addEmptyRow(), E.dispatchChange(l);
  }
  function P() {
    const L = O.undo(h);
    L != null && (E.restoreSheetData(L), E.dispatchChange(l));
  }
  function R() {
    const L = O.redo(h);
    L != null && (E.restoreSheetData(L), E.dispatchChange(l));
  }
  function T() {
    O.reset(), l({ type: "RESET" });
  }
  function M() {
    return ww({ state: s, dispatch: l, importerDefinition: e });
  }
  function D() {
    l({ type: "PREVIEW" });
  }
  function H() {
    l({ type: "UPLOAD" });
  }
  function V() {
    l({ type: "MAPPING" });
  }
  return /* @__PURE__ */ f(cw, { children: /* @__PURE__ */ f(ym, { ref: i, children: [
    c === "upload" && /* @__PURE__ */ f(
      vw,
      {
        onFileUploaded: A,
        onEnterDataManually: b
      }
    ),
    c === "mapping" && /* @__PURE__ */ f(
      Lv,
      {
        onMappingsChanged: m,
        onMappingsSet: y,
        onBack: H
      }
    ),
    c === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
      /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f(
        fw,
        {
          idPrefix: a,
          sheetCountDict: w,
          onSheetChange: (L) => l({ type: "SHEET_CHANGED", payload: { sheetId: L } })
        }
      ) }),
      /* @__PURE__ */ f(
        "div",
        {
          className: "hc:flex-1 hc:overflow-auto",
          role: "tabpanel",
          id: `${a}-tabpanel-${u}`,
          "aria-labelledby": `${a}-tab-${u}`,
          tabIndex: 0,
          children: /* @__PURE__ */ f(
            ew,
            {
              data: v,
              sheetDefinition: g,
              sheetValidationErrors: d.filter(
                (L) => L.sheetId === (g == null ? void 0 : g.id)
              ),
              setRowData: _,
              setRowsData: $,
              removeRows: k,
              addEmptyRow: I,
              resetState: T,
              undo: P,
              redo: R,
              canUndo: O.canUndo,
              canRedo: O.canRedo,
              enumLabelDict: C
            }
          )
        }
      ),
      /* @__PURE__ */ f("div", { className: "hc:flex-none", children: v.rows.length > 0 && /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
        /* @__PURE__ */ f("div", { children: p != null && n.includes("backToPreviousStep") && /* @__PURE__ */ f(
          hw,
          {
            onBackToMapping: V
          }
        ) }),
        /* @__PURE__ */ f(
          lt,
          {
            tooltipText: S,
            hidden: !x,
            children: /* @__PURE__ */ f(Ve, { onClick: M, disabled: x, children: r("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (c === "submit" || c === "failed" || c === "completed") && /* @__PURE__ */ f(
      aw,
      {
        onRetry: M,
        onBackToPreview: D,
        resetState: T,
        enumLabelDict: C
      }
    )
  ] }) });
}
function bs(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...Xm]
  };
  return /* @__PURE__ */ f(tm, { importerDefintion: t, children: /* @__PURE__ */ f(
    Nv,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ f(sm, { children: /* @__PURE__ */ f(bw, { ...t }) })
    }
  ) });
}
function Rw(e, t) {
  const n = Pc(e);
  return n.render(B(bs, t)), {
    render: (r) => n.render(B(bs, r)),
    unmount: () => n.unmount()
  };
}
export {
  Ew as CsvImporterStateBuilder,
  Xm as availableActionList,
  bs as default,
  vr as isDateLikeColumn,
  Rw as renderImporter
};
