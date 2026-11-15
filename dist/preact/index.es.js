var gc = Object.defineProperty;
var vc = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var we = (e, t, n) => vc(e, typeof t != "symbol" ? t + "" : t, n);
import { options as Re, Component as At, createElement as B, Fragment as pe, toChildArray as vt, render as Gn, createRef as nr, createContext as me, cloneElement as wc, hydrate as yc } from "preact";
var dt, ve, _r, ui, Gt = 0, Ss = [], xe = Re, di = xe.__b, fi = xe.__r, hi = xe.diffed, pi = xe.__c, mi = xe.unmount, gi = xe.__;
function Nt(e, t) {
  xe.__h && xe.__h(ve, e, Gt || t), Gt = 0;
  var n = ve.__H || (ve.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function K(e) {
  return Gt = 1, tt(Cs, e);
}
function tt(e, t, n) {
  var r = Nt(dt++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Cs(void 0, t), function(l) {
    var a = r.__N ? r.__N[0] : r.__[0], c = r.t(a, l);
    a !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = ve, !ve.u)) {
    var o = function(l, a, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(m) {
        return !!m.__c;
      });
      if (u.every(function(m) {
        return !m.__N;
      })) return !i || i.call(this, l, a, c);
      var h = r.__c.props !== l;
      return u.forEach(function(m) {
        if (m.__N) {
          var d = m.__[0];
          m.__ = m.__N, m.__N = void 0, d !== m.__[0] && (h = !0);
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
  !xe.__s && Ro(n.__H, t) && (n.__ = e, n.i = t, ve.__H.__h.push(n));
}
function We(e, t) {
  var n = Nt(dt++, 4);
  !xe.__s && Ro(n.__H, t) && (n.__ = e, n.i = t, ve.__h.push(n));
}
function U(e) {
  return Gt = 5, ne(function() {
    return { current: e };
  }, []);
}
function _o(e, t, n) {
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
  return Ro(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__;
}
function te(e, t) {
  return Gt = 8, ne(function() {
    return e;
  }, t);
}
function fe(e) {
  var t = ve.context[e.__c], n = Nt(dt++, 9);
  return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ve)), t.props.value) : e.__;
}
function Eo(e, t) {
  xe.useDebugValue && xe.useDebugValue(t ? t(e) : e);
}
function bc(e) {
  var t = Nt(dt++, 10), n = K();
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
function xc() {
  for (var e; e = Ss.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(Hn), e.__H.__h.forEach(Gr), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], xe.__e(t, e.__v);
  }
}
xe.__b = function(e) {
  ve = null, di && di(e);
}, xe.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), gi && gi(e, t);
}, xe.__r = function(e) {
  fi && fi(e), dt = 0;
  var t = (ve = e.__c).__H;
  t && (_r === ve ? (t.__h = [], ve.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (t.__h.forEach(Hn), t.__h.forEach(Gr), t.__h = [], dt = 0)), _r = ve;
}, xe.diffed = function(e) {
  hi && hi(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Ss.push(t) !== 1 && ui === xe.requestAnimationFrame || ((ui = xe.requestAnimationFrame) || Sc)(xc)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), _r = ve = null;
}, xe.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Hn), n.__h = n.__h.filter(function(r) {
        return !r.__ || Gr(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], xe.__e(r, n.__v);
    }
  }), pi && pi(e, t);
}, xe.unmount = function(e) {
  mi && mi(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Hn(r);
    } catch (o) {
      t = o;
    }
  }), n.__H = void 0, t && xe.__e(t, n.__v));
};
var vi = typeof requestAnimationFrame == "function";
function Sc(e) {
  var t, n = function() {
    clearTimeout(r), vi && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  vi && (t = requestAnimationFrame(n));
}
function Hn(e) {
  var t = ve, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), ve = t;
}
function Gr(e) {
  var t = ve;
  e.__c = e.__(), ve = t;
}
function Ro(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _s(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function qr(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function rr(e, t) {
  var n = t(), r = K({ t: { __: n, u: t } }), o = r[0].t, i = r[1];
  return We(function() {
    o.__ = n, o.u = t, Er(o) && i({ t: o });
  }, [e, n, t]), se(function() {
    return Er(o) && i({ t: o }), e(function() {
      Er(o) && i({ t: o });
    });
  }, [e]), n;
}
function Er(e) {
  var t, n, r = e.u, o = e.__;
  try {
    var i = r();
    return !((t = o) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n);
  } catch {
    return !0;
  }
}
function $o(e) {
  e();
}
function To(e) {
  return e;
}
function Mo() {
  return [!1, $o];
}
var Oo = We;
function qn(e, t) {
  this.props = e, this.context = t;
}
function Es(e, t) {
  function n(o) {
    var i = this.props.ref, s = i == o.ref;
    return !s && i && (i.call ? i(null) : i.current = null), t ? !t(this.props, o) || !s : qr(this.props, o);
  }
  function r(o) {
    return this.shouldComponentUpdate = n, B(e, o);
  }
  return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(qn.prototype = new At()).isPureReactComponent = !0, qn.prototype.shouldComponentUpdate = function(e, t) {
  return qr(this.props, e) || qr(this.state, t);
};
var wi = Re.__b;
Re.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), wi && wi(e);
};
var Cc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function de(e) {
  function t(n) {
    var r = _s({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return t.$$typeof = Cc, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
var yi = function(e, t) {
  return e == null ? null : vt(vt(e).map(t));
}, Rs = { map: yi, forEach: yi, count: function(e) {
  return e ? vt(e).length : 0;
}, only: function(e) {
  var t = vt(e);
  if (t.length !== 1) throw "Children.only";
  return t[0];
}, toArray: vt }, _c = Re.__e;
Re.__e = function(e, t, n, r) {
  if (e.then) {
    for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
  }
  _c(e, t, n, r);
};
var bi = Re.unmount;
function $s(e, t, n) {
  return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(r) {
    typeof r.__c == "function" && r.__c();
  }), e.__c.__H = null), (e = _s({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(r) {
    return $s(r, t, n);
  })), e;
}
function Ts(e, t, n) {
  return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(r) {
    return Ts(r, t, n);
  }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function dn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Ms(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Os(e) {
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
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), bi && bi(e);
}, (dn.prototype = new At()).__c = function(e, t) {
  var n = t.__c, r = this;
  r.o == null && (r.o = []), r.o.push(n);
  var o = Ms(r.__v), i = !1, s = function() {
    i || (i = !0, n.__R = null, o ? o(l) : l());
  };
  n.__R = s;
  var l = function() {
    if (!--r.__u) {
      if (r.state.__a) {
        var a = r.state.__a;
        r.__v.__k[0] = Ts(a, a.__c.__P, a.__c.__O);
      }
      var c;
      for (r.setState({ __a: r.__b = null }); c = r.o.pop(); ) c.forceUpdate();
    }
  };
  r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(s, s);
}, dn.prototype.componentWillUnmount = function() {
  this.o = [];
}, dn.prototype.render = function(e, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), r = this.__v.__k[0].__c;
      this.__v.__k[0] = $s(this.__b, n, r.__O = r.__P);
    }
    this.__b = null;
  }
  var o = t.__a && B(pe, null, e.fallback);
  return o && (o.__u &= -33), [B(pe, null, t.__a ? null : e.children), o];
};
var xi = function(e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n; ) {
    for (; n.length > 3; ) n.pop()();
    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};
function Ec(e) {
  return this.getChildContext = function() {
    return e.context;
  }, e.children;
}
function Rc(e) {
  var t = this, n = e.h;
  t.componentWillUnmount = function() {
    Gn(null, t.v), t.v = null, t.h = null;
  }, t.h && t.h !== n && t.componentWillUnmount(), t.v || (t.h = n, t.v = { nodeType: 1, parentNode: n, childNodes: [], contains: function() {
    return !0;
  }, appendChild: function(r) {
    this.childNodes.push(r), t.h.appendChild(r);
  }, insertBefore: function(r, o) {
    this.childNodes.push(r), t.h.insertBefore(r, o);
  }, removeChild: function(r) {
    this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.h.removeChild(r);
  } }), Gn(B(Ec, { context: t.context }, e.__v), t.v);
}
function Zt(e, t) {
  var n = B(Rc, { __v: e, h: t });
  return n.containerInfo = t, n;
}
(Bt.prototype = new At()).__a = function(e) {
  var t = this, n = Ms(t.__v), r = t.l.get(e);
  return r[0]++, function(o) {
    var i = function() {
      t.props.revealOrder ? (r.push(o), xi(t, e, r)) : o();
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
    xi(e, n, t);
  });
};
var Is = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, $c = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Tc = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Mc = /[A-Z0-9]/g, Oc = typeof document < "u", Ic = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function Io(e, t, n) {
  return t.__k == null && (t.textContent = ""), Gn(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function As(e, t, n) {
  return yc(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
At.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
  Object.defineProperty(At.prototype, e, { configurable: !0, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(t) {
    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
  } });
});
var Si = Re.event;
function Ac() {
}
function Dc() {
  return this.cancelBubble;
}
function Fc() {
  return this.defaultPrevented;
}
Re.event = function(e) {
  return Si && (e = Si(e)), e.persist = Ac, e.isPropagationStopped = Dc, e.isDefaultPrevented = Fc, e.nativeEvent = e;
};
var Ao, Pc = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, Ci = Re.vnode;
Re.vnode = function(e) {
  typeof e.type == "string" && function(t) {
    var n = t.props, r = t.type, o = {}, i = r.indexOf("-") === -1;
    for (var s in n) {
      var l = n[s];
      if (!(s === "value" && "defaultValue" in n && l == null || Oc && s === "children" && r === "noscript" || s === "class" || s === "className")) {
        var a = s.toLowerCase();
        s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && l === !0 ? l = "" : a === "translate" && l === "no" ? l = !1 : a[0] === "o" && a[1] === "n" ? a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || r !== "input" && r !== "textarea" || Ic(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : Tc.test(s) && (s = a) : a = s = "oninput" : i && $c.test(s) ? s = s.replace(Mc, "-$&").toLowerCase() : l === null && (l = void 0), a === "oninput" && o[s = a] && (s = "oninputCapture"), o[s] = l;
      }
    }
    r == "select" && o.multiple && Array.isArray(o.value) && (o.value = vt(n.children).forEach(function(c) {
      c.props.selected = o.value.indexOf(c.props.value) != -1;
    })), r == "select" && o.defaultValue != null && (o.value = vt(n.children).forEach(function(c) {
      c.props.selected = o.multiple ? o.defaultValue.indexOf(c.props.value) != -1 : o.defaultValue == c.props.value;
    })), n.class && !n.className ? (o.class = n.class, Object.defineProperty(o, "className", Pc)) : (n.className && !n.class || n.class && n.className) && (o.class = o.className = n.className), t.props = o;
  }(e), e.$$typeof = Is, Ci && Ci(e);
};
var _i = Re.__r;
Re.__r = function(e) {
  _i && _i(e), Ao = e.__c;
};
var Ei = Re.diffed;
Re.diffed = function(e) {
  Ei && Ei(e);
  var t = e.props, n = e.__e;
  n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Ao = null;
};
var Ds = { ReactCurrentDispatcher: { current: { readContext: function(e) {
  return Ao.__n[e.__c].props.value;
}, useCallback: te, useContext: fe, useDebugValue: Eo, useDeferredValue: To, useEffect: se, useId: Ie, useImperativeHandle: _o, useInsertionEffect: Oo, useLayoutEffect: We, useMemo: ne, useReducer: tt, useRef: U, useState: K, useSyncExternalStore: rr, useTransition: Mo } } }, Nc = "18.3.1";
function Fs(e) {
  return B.bind(null, e);
}
function Xt(e) {
  return !!e && e.$$typeof === Is;
}
function Ps(e) {
  return Xt(e) && e.type === pe;
}
function Ns(e) {
  return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
}
function Do(e) {
  return Xt(e) ? wc.apply(null, arguments) : e;
}
function Fo(e) {
  return !!e.__k && (Gn(null, e), !0);
}
function ks(e) {
  return e && (e.base || e.nodeType === 1 && e) || null;
}
var Ls = function(e, t) {
  return e(t);
}, ke = function(e, t) {
  return e(t);
}, Vs = pe, Hs = Xt, Z = { useState: K, useId: Ie, useReducer: tt, useEffect: se, useLayoutEffect: We, useInsertionEffect: Oo, useTransition: Mo, useDeferredValue: To, useSyncExternalStore: rr, startTransition: $o, useRef: U, useImperativeHandle: _o, useMemo: ne, useCallback: te, useContext: fe, useDebugValue: Eo, version: "18.3.1", Children: Rs, render: Io, hydrate: As, unmountComponentAtNode: Fo, createPortal: Zt, createElement: B, createContext: me, createFactory: Fs, cloneElement: Do, createRef: nr, Fragment: pe, isValidElement: Xt, isElement: Hs, isFragment: Ps, isMemo: Ns, findDOMNode: ks, Component: At, PureComponent: qn, memo: Es, forwardRef: de, flushSync: ke, unstable_batchedUpdates: Ls, StrictMode: Vs, Suspense: dn, SuspenseList: Bt, lazy: Os, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ds };
const Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Rs,
  Component: At,
  Fragment: pe,
  PureComponent: qn,
  StrictMode: Vs,
  Suspense: dn,
  SuspenseList: Bt,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ds,
  cloneElement: Do,
  createContext: me,
  createElement: B,
  createFactory: Fs,
  createPortal: Zt,
  createRef: nr,
  default: Z,
  findDOMNode: ks,
  flushSync: ke,
  forwardRef: de,
  hydrate: As,
  isElement: Hs,
  isFragment: Ps,
  isMemo: Ns,
  isValidElement: Xt,
  lazy: Os,
  memo: Es,
  render: Io,
  startTransition: $o,
  unmountComponentAtNode: Fo,
  unstable_batchedUpdates: Ls,
  useCallback: te,
  useContext: fe,
  useDebugValue: Eo,
  useDeferredValue: To,
  useEffect: se,
  useErrorBoundary: bc,
  useId: Ie,
  useImperativeHandle: _o,
  useInsertionEffect: Oo,
  useLayoutEffect: We,
  useMemo: ne,
  useReducer: tt,
  useRef: U,
  useState: K,
  useSyncExternalStore: rr,
  useTransition: Mo,
  version: Nc
}, Symbol.toStringTag, { value: "Module" }));
function kc(e) {
  return {
    // eslint-disable-next-line
    render: function(t) {
      Io(t, e);
    },
    // eslint-disable-next-line
    unmount: function() {
      Fo(e);
    }
  };
}
var Lc = 0;
function f(e, t, n, r, o, i) {
  t || (t = {});
  var s, l, a = t;
  if ("ref" in a) for (l in a = {}, t) l == "ref" ? s = t[l] : a[l] = t[l];
  var c = { type: e, props: a, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Lc, __i: -1, __u: 0, __source: o, __self: i };
  if (typeof e == "function" && (s = e.defaultProps)) for (l in s) a[l] === void 0 && (a[l] = s[l]);
  return Re.vnode && Re.vnode(c), c;
}
function zs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = zs(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Vc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = zs(e)) && (r && (r += " "), r += t);
  return r;
}
const Ri = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $i = Vc, St = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return $i(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], h = i == null ? void 0 : i[c];
    if (u === null) return null;
    const m = Ri(u) || Ri(h);
    return o[c][m];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [h, m] = u;
    return m === void 0 || (c[h] = m), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: h, className: m, ...d } = u;
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
      m
    ] : c;
  }, []);
  return $i(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Hc = St(
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
  const i = `hello-csv-button hello-csv-button-${t ?? "primary"} ${Hc({ variant: t, disabled: n, withFullWidth: o })}`;
  return /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      className: i,
      onClick: r,
      disabled: n,
      children: e
    }
  );
}
const zc = St(
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
), Bs = de(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = zc({ variant: n, withPadding: r });
    return /* @__PURE__ */ f(
      "div",
      {
        ref: o,
        className: `hello-csv-card ${i} ${t ?? ""}`,
        children: e
      }
    );
  }
);
function js({ checked: e, setChecked: t, label: n }) {
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
let Bc = !1;
function Po() {
  return Bc;
}
const Us = typeof document < "u" ? Z.useLayoutEffect : () => {
};
function jc(e) {
  const t = U(null);
  return Us(() => {
    t.current = e;
  }, [
    e
  ]), te((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Ct = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Tt = (e) => e && "window" in e && e.window === e ? e : Ct(e).defaultView || window;
function Uc(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Wc(e) {
  return Uc(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function Ws(e, t) {
  if (!Po()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Wc(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Kr = (e = document) => {
  var t;
  if (!Po()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Gs(e) {
  return Po() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Gc(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function qc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function qs(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Yc = qs(function() {
  return qc(/^Mac/i);
}), Kc = qs(function() {
  return Gc(/Android/i);
});
function Ys() {
  let e = U(/* @__PURE__ */ new Map()), t = te((o, i, s, l) => {
    let a = l != null && l.once ? (...c) => {
      e.current.delete(s), s(...c);
    } : s;
    e.current.set(s, {
      type: i,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(i, a, l);
  }, []), n = te((o, i, s, l) => {
    var a;
    let c = ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
    o.removeEventListener(i, c, l), e.current.delete(s);
  }, []), r = te(() => {
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
function Zc(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Kc() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Ks(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Xc(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Zs(e) {
  let t = U({
    isFocused: !1,
    observer: null
  });
  Us(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = jc((r) => {
    e == null || e(r);
  });
  return te((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = Ks(s);
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
let Jc = !1, Cn = null, Zr = /* @__PURE__ */ new Set(), fn = /* @__PURE__ */ new Map(), Dt = !1, Xr = !1;
const Qc = {
  Tab: !0,
  Escape: !0
};
function No(e, t) {
  for (let n of Zr) n(e, t);
}
function eu(e) {
  return !(e.metaKey || !Yc() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Yn(e) {
  Dt = !0, eu(e) && (Cn = "keyboard", No("keyboard", e));
}
function Ut(e) {
  Cn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Dt = !0, No("pointer", e));
}
function Xs(e) {
  Zc(e) && (Dt = !0, Cn = "virtual");
}
function Js(e) {
  e.target === window || e.target === document || Jc || !e.isTrusted || (!Dt && !Xr && (Cn = "virtual", No("virtual", e)), Dt = !1, Xr = !1);
}
function Qs() {
  Dt = !1, Xr = !0;
}
function Jr(e) {
  if (typeof window > "u" || fn.get(Tt(e))) return;
  const t = Tt(e), n = Ct(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Dt = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Yn, !0), n.addEventListener("keyup", Yn, !0), n.addEventListener("click", Xs, !0), t.addEventListener("focus", Js, !0), t.addEventListener("blur", Qs, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Ut, !0), n.addEventListener("pointermove", Ut, !0), n.addEventListener("pointerup", Ut, !0)), t.addEventListener("beforeunload", () => {
    el(e);
  }, {
    once: !0
  }), fn.set(t, {
    focus: r
  });
}
const el = (e, t) => {
  const n = Tt(e), r = Ct(e);
  t && r.removeEventListener("DOMContentLoaded", t), fn.has(n) && (n.HTMLElement.prototype.focus = fn.get(n).focus, r.removeEventListener("keydown", Yn, !0), r.removeEventListener("keyup", Yn, !0), r.removeEventListener("click", Xs, !0), n.removeEventListener("focus", Js, !0), n.removeEventListener("blur", Qs, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Ut, !0), r.removeEventListener("pointermove", Ut, !0), r.removeEventListener("pointerup", Ut, !0)), fn.delete(n));
};
function tu(e) {
  const t = Ct(e);
  let n;
  return t.readyState !== "loading" ? Jr(e) : (n = () => {
    Jr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => el(e, n);
}
typeof document < "u" && tu();
function tl() {
  return Cn !== "pointer";
}
const nu = /* @__PURE__ */ new Set([
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
function ru(e, t, n) {
  let r = Ct(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? Tt(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? Tt(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !nu.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Qc[n.key]);
}
function ou(e, t, n) {
  Jr(), se(() => {
    let r = (o, i) => {
      ru(!!(n != null && n.isTextInput), o, i) && e(tl());
    };
    return Zr.add(r), () => {
      Zr.delete(r);
    };
  }, t);
}
function iu(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = te((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = Zs(i), l = te((a) => {
    const c = Ct(a.target), u = c ? Kr(c) : Kr();
    a.target === a.currentTarget && u === Gs(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
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
function su(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = U({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = Ys(), a = te((h) => {
    h.currentTarget.contains(h.target) && i.current.isFocusWithin && !h.currentTarget.contains(h.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(h), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), c = Zs(a), u = te((h) => {
    if (!h.currentTarget.contains(h.target)) return;
    const m = Ct(h.target), d = Kr(m);
    if (!i.current.isFocusWithin && d === Gs(h.nativeEvent)) {
      r && r(h), o && o(!0), i.current.isFocusWithin = !0, c(h);
      let v = h.currentTarget;
      s(m, "focus", (w) => {
        if (i.current.isFocusWithin && !Ws(v, w.target)) {
          let g = new m.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          Xc(g, v);
          let C = Ks(g);
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
let Qr = !1, Rr = 0;
function lu() {
  Qr = !0, setTimeout(() => {
    Qr = !1;
  }, 50);
}
function Ti(e) {
  e.pointerType === "touch" && lu();
}
function au() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", Ti), Rr++, () => {
      Rr--, !(Rr > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", Ti);
    };
}
function nl(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = K(!1), l = U({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(au, []);
  let { addGlobalListener: a, removeAllGlobalListeners: c } = Ys(), { hoverProps: u, triggerHoverEnd: h } = ne(() => {
    let m = (w, g) => {
      if (l.pointerType = g, o || g === "touch" || l.isHovered || !w.currentTarget.contains(w.target)) return;
      l.isHovered = !0;
      let C = w.currentTarget;
      l.target = C, a(Ct(w.target), "pointerover", (x) => {
        l.isHovered && l.target && !Ws(l.target, x.target) && d(x, x.pointerType);
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
      Qr && w.pointerType === "mouse" || m(w, w.pointerType);
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
function rl(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = U({
    isFocused: !1,
    isFocusVisible: t || tl()
  }), [i, s] = K(!1), [l, a] = K(() => o.current.isFocused && o.current.isFocusVisible), c = te(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = te((d) => {
    o.current.isFocused = d, s(d), c();
  }, [
    c
  ]);
  ou((d) => {
    o.current.isFocusVisible = d, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: h } = iu({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: m } = su({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? m : h
  };
}
var cu = Object.defineProperty, uu = (e, t, n) => t in e ? cu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $r = (e, t, n) => (uu(e, typeof t != "symbol" ? t + "" : t, n), n);
let du = class {
  constructor() {
    $r(this, "current", this.detect()), $r(this, "handoffState", "pending"), $r(this, "currentId", 0);
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
}, It = new du();
function Jt(e) {
  return It.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function or(e) {
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
    return or(() => {
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
function kt() {
  let [e] = K(Qe);
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
let ee = function(e) {
  let t = _t(e);
  return Z.useCallback((...n) => t.current(...n), [t]);
};
function fu(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function hu(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function pu({ disabled: e = !1 } = {}) {
  let t = U(null), [n, r] = K(!1), o = kt(), i = ee(() => {
    t.current = null, r(!1), o.dispose();
  }), s = ee((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = Jt(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (c) => {
          if (t.current) {
            let u = fu(c);
            r(hu(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let mu = me(void 0);
function ko() {
  return fe(mu);
}
function eo(...e) {
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
  let e = vu();
  return te((t) => gu({ mergeRefs: e, ...t }), [e]);
}
function gu({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? wu;
  let a = ol(t, e);
  if (i) return An(a, n, r, s, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...h } = a;
    if (u) return An(h, n, r, s, l);
  }
  if (c & 1) {
    let { unmount: u = !0, ...h } = a;
    return Ne(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return An({ ...h, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return An(a, n, r, s, l);
}
function An(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = Tr(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, u = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let h = {};
  if (t) {
    let m = !1, d = [];
    for (let [v, w] of Object.entries(t)) typeof w == "boolean" && (m = !0), w === !0 && d.push(v.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (m) {
      h["data-headlessui-state"] = d.join(" ");
      for (let v of d) h[`data-${v}`] = "";
    }
  }
  if (i === pe && (Object.keys(pt(a)).length > 0 || Object.keys(pt(h)).length > 0)) if (!Xt(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(pt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(pt(a)).concat(Object.keys(pt(h))).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
  } else {
    let m = u.props, d = m == null ? void 0 : m.className, v = typeof d == "function" ? (...C) => eo(d(...C), a.className) : eo(d, a.className), w = v ? { className: v } : {}, g = ol(u.props, pt(Tr(a, ["ref"])));
    for (let C in h) C in g && delete h[C];
    return Do(u, Object.assign({}, g, h, c, { ref: o(yu(u), c.ref) }, w));
  }
  return B(i, Object.assign({}, Tr(a, ["ref"]), i !== pe && c, i !== pe && h), u);
}
function vu() {
  let e = U([]), t = te((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function wu(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function ol(...e) {
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
function Lo(...e) {
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
function Tr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function yu(e) {
  return Z.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function bu(e, t, n) {
  let [r, o] = K(n), i = e !== void 0, s = U(i), l = U(!1), a = U(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, ee((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function xu(e) {
  let [t] = K(e);
  return t;
}
function il(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) ll(n, sl(t, r), o);
  return n;
}
function sl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ll(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) ll(e, sl(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : il(n, t, e);
}
let Su = "span";
var Yt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Yt || {});
function Cu(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ee()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Su, name: "Hidden" });
}
let wn = Ce(Cu), _u = me(null);
function Eu({ children: e }) {
  let t = fe(_u);
  if (!t) return Z.createElement(Z.Fragment, null, e);
  let { target: n } = t;
  return n ? Zt(Z.createElement(Z.Fragment, null, e), n) : null;
}
function Ru({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = K(null), l = kt();
  return se(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), Z.createElement(Eu, null, Z.createElement($u, { setForm: s, formId: t }), il(e).map(([a, c]) => Z.createElement(wn, { features: Yt.Hidden, ...pt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: c, ...o }) })));
}
function $u({ setForm: e, formId: t }) {
  return se(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : Z.createElement(wn, { features: Yt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let Tu = me(void 0);
function al() {
  return fe(Tu);
}
function Mu(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Ou(n) ? !1 : r;
}
function Ou(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let cl = Symbol();
function Iu(e, t = !0) {
  return Object.assign(e, { [cl]: t });
}
function Fe(...e) {
  let t = U(e);
  se(() => {
    t.current = e;
  }, [e]);
  let n = ee((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[cl])) ? void 0 : n;
}
let ir = me(null);
ir.displayName = "DescriptionContext";
function ul() {
  let e = fe(ir);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ul), t;
  }
  return e;
}
function Au() {
  var e, t;
  return (t = (e = fe(ir)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Du() {
  let [e, t] = K([]);
  return [e.length > 0 ? e.join(" ") : void 0, ne(() => function(n) {
    let r = ee((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ne(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return Z.createElement(ir.Provider, { value: o }, n.children);
  }, [t])];
}
let Fu = "p";
function Pu(e, t) {
  let n = Ie(), r = ko(), { id: o = `headlessui-description-${n}`, ...i } = e, s = ul(), l = Fe(t);
  he(() => s.register(o), [o, s.register]);
  let a = r || !1, c = ne(() => ({ ...s.slot, disabled: a }), [s.slot, a]), u = { ref: l, ...s.props, id: o };
  return Ee()({ ourProps: u, theirProps: i, slot: c, defaultTag: Fu, name: s.name || "Description" });
}
let Nu = Ce(Pu), ku = Object.assign(Nu, {});
var Me = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Me || {});
let sr = me(null);
sr.displayName = "LabelContext";
function dl() {
  let e = fe(sr);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, dl), t;
  }
  return e;
}
function lr(e) {
  var t, n, r;
  let o = (n = (t = fe(sr)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Lu({ inherit: e = !1 } = {}) {
  let t = lr(), [n, r] = K([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ne(() => function(i) {
    let s = ee((a) => (r((c) => [...c, a]), () => r((c) => {
      let u = c.slice(), h = u.indexOf(a);
      return h !== -1 && u.splice(h, 1), u;
    }))), l = ne(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return Z.createElement(sr.Provider, { value: l }, i.children);
  }, [r])];
}
let Vu = "label";
function Hu(e, t) {
  var n;
  let r = Ie(), o = dl(), i = al(), s = ko(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...u } = e, h = Fe(t);
  he(() => o.register(l), [l, o.register]);
  let m = ee((g) => {
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
  }), d = s || !1, v = ne(() => ({ ...o.slot, disabled: d }), [o.slot, d]), w = { ref: h, ...o.props, id: l, htmlFor: a, onClick: m };
  return c && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Ee()({ ourProps: w, theirProps: u, slot: v, defaultTag: a ? Vu : "div", name: o.name || "Label" });
}
let zu = Ce(Hu), Bu = Object.assign(zu, {}), ju = me(() => {
});
function Uu({ value: e, children: t }) {
  return Z.createElement(ju.Provider, { value: e }, t);
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
function Mi(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Wu = (e, t) => Math.abs(e - t) <= 1, Gu = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var sn = { NODE_ENV: "production" };
const Oi = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, qu = (e) => e, Yu = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Ku = (e, t) => {
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
  if (o(Oi(n)), !r.ResizeObserver)
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
      o(Oi(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Ii = {
  passive: !0
}, Ai = typeof window > "u" ? !0 : "onscrollend" in window, Zu = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && Ai ? () => {
  } : Gu(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (u) => () => {
    const { horizontal: h, isRtl: m } = e.options;
    o = h ? n.scrollLeft * (m && -1 || 1) : n.scrollTop, i(), t(o, u);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, Ii);
  const c = e.options.useScrollendEvent && Ai;
  return c && n.addEventListener("scrollend", a, Ii), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
  };
}, Xu = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Ju = (e, {
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
class Qu {
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
        getItemKey: qu,
        rangeExtractor: Yu,
        onChange: () => {
        },
        measureElement: Xu,
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
          const h = i(u), m = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), d = m ? m.end + this.options.gap : r + o, v = l.get(h), w = typeof v == "number" ? v : this.options.estimateSize(u), g = d + w, C = m ? m.lane : u % this.options.lanes;
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
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? ed({
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
        return Mi(
          r[fl(
            0,
            r.length - 1,
            (o) => Mi(r[o]).start,
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
          Wu(u, h) || this.scrollToIndex(n, { align: l, behavior: o });
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
const fl = (e, t, n, r) => {
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
function ed({
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
  let s = fl(
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
const Di = typeof document < "u" ? We : se;
function td(e) {
  const t = tt(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? ke(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = K(
    () => new Qu(n)
  );
  return r.setOptions(n), Di(() => r._didMount(), []), Di(() => r._willUpdate()), r;
}
function hl(e) {
  return td({
    observeElementRect: Ku,
    observeElementOffset: Zu,
    scrollToFn: Ju,
    ...e
  });
}
function nd(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function rd(e = nd) {
  return te((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function od(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Fi(e, t = !1) {
  let [n, r] = tt(() => ({}), {}), o = ne(() => od(e), [e, n]);
  return he(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let id = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function pl(e, t) {
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
function ml(e) {
  return rr(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let sd = new id(() => pl(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Qt(e, t) {
  let n = sd.get(t), r = Ie(), o = ml(n);
  if (he(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let to = /* @__PURE__ */ new Map(), hn = /* @__PURE__ */ new Map();
function Pi(e) {
  var t;
  let n = (t = hn.get(e)) != null ? t : 0;
  return hn.set(e, n + 1), n !== 0 ? () => Ni(e) : (to.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Ni(e));
}
function Ni(e) {
  var t;
  let n = (t = hn.get(e)) != null ? t : 1;
  if (n === 1 ? hn.delete(e) : hn.set(e, n - 1), n !== 1) return;
  let r = to.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, to.delete(e));
}
function gl(e, { allowed: t, disallowed: n } = {}) {
  let r = Qt(e, "inert-others");
  he(() => {
    var o, i;
    if (!r) return;
    let s = Qe();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(Pi(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let c = Jt(a);
      if (!c) continue;
      let u = a.parentElement;
      for (; u && u !== c.body; ) {
        for (let h of u.children) l.some((m) => h.contains(m)) || s.add(Pi(h));
        u = u.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function vl(e, t, n) {
  let r = _t((o) => {
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
let Kn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), ld = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var at = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(at || {}), no = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(no || {}), ad = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ad || {});
function cd(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Kn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ud(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ld)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var wl = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(wl || {});
function dd(e, t = 0) {
  var n;
  return e === ((n = Jt(e)) == null ? void 0 : n.body) ? !1 : Ne(t, { 0() {
    return e.matches(Kn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Kn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var fd = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(fd || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ut(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let hd = ["textarea", "input"].join(",");
function pd(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, hd)) != null ? n : !1;
}
function yl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? yl(e) : e : t & 64 ? ud(e) : cd(e);
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, u = 0, h = s.length, m;
  do {
    if (u >= h || u + h <= 0) return 0;
    let d = a + u;
    if (t & 16) d = (d + h) % h;
    else {
      if (d < 0) return 3;
      if (d >= h) return 1;
    }
    m = s[d], m == null || m.focus(c), u += l;
  } while (m !== i.activeElement);
  return t & 6 && pd(m) && m.select(), 2;
}
function bl() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function md() {
  return /Android/gi.test(window.navigator.userAgent);
}
function xl() {
  return bl() || md();
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
function Sl(e, t, n, r) {
  let o = _t(n);
  se(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const ki = 30;
function Cl(e, t, n) {
  let r = Qt(e, "outside-click"), o = _t(n), i = te(function(a, c) {
    if (a.defaultPrevented) return;
    let u = c(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let h = function m(d) {
      return typeof d == "function" ? m(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let m of h) if (m !== null && (m.contains(u) || a.composed && a.composedPath().includes(m))) return;
    return !dd(u, wl.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), s = U(null);
  ln(r, "pointerdown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), ln(r, "mousedown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), ln(r, "click", (a) => {
    xl() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = U({ x: 0, y: 0 });
  ln(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), ln(r, "touchend", (a) => {
    let c = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= ki || Math.abs(c.y - l.current.y) >= ki)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), Sl(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Lt(...e) {
  return ne(() => Jt(...e), [...e]);
}
function Vo(e, t, n, r) {
  let o = _t(n);
  se(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function _l(e) {
  let t = U({ value: "", selectionStart: null, selectionEnd: null });
  return Vo(e, "blur", (n) => {
    let r = n.target;
    r instanceof HTMLInputElement && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), ee(() => {
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
function gd(e, t) {
  return ne(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function vd() {
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
function wd() {
  return bl() ? { before({ doc: e, d: t, meta: n }) {
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
function yd() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function bd(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Mt = pl(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Qe(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: bd(n) }, o = [wd(), vd(), yd()];
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
function xd(e, t, n = () => ({ containers: [] })) {
  let r = ml(Mt), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return he(() => {
    if (!(!t || !e)) return Mt.dispatch("PUSH", t, n), () => Mt.dispatch("POP", t, n);
  }, [e, t]), i;
}
function El(e, t, n = () => [document.body]) {
  let r = Qt(e, "scroll-lock");
  xd(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Li(e) {
  return [e.screenX, e.screenY];
}
function Sd() {
  let e = U([-1, -1]);
  return { wasMoved(t) {
    let n = Li(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Li(t);
  } };
}
function Cd(e = 0) {
  let [t, n] = K(e), r = te((a) => n(a), [t]), o = te((a) => n((c) => c | a), [t]), i = te((a) => (t & a) === a, [t]), s = te((a) => n((c) => c & ~a), [n]), l = te((a) => n((c) => c ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var _d = { NODE_ENV: "production" }, Vi, Hi;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Vi = process == null ? void 0 : _d) == null ? void 0 : Vi.NODE_ENV) === "test" && typeof ((Hi = Element == null ? void 0 : Element.prototype) == null ? void 0 : Hi.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Ed = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Ed || {});
function Rl(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function $l(e, t, n, r) {
  let [o, i] = K(n), { hasFlag: s, addFlag: l, removeFlag: a } = Cd(e && o ? 3 : 0), c = U(!1), u = U(!1), h = kt();
  return he(() => {
    var m;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (m = r == null ? void 0 : r.start) == null || m.call(r, n), Rd(t, { inFlight: c, prepare() {
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
function Rd(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Qe();
  return Td(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add($d(e, r));
    });
  }), i.dispose;
}
function $d(e, t) {
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
function Td(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Md(e, { container: t, accept: n, walk: r }) {
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
function yn(e, t) {
  let n = U([]), r = ee(e);
  se(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function ar() {
  return typeof window < "u";
}
function en(e) {
  return Tl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nt(e) {
  var t;
  return (t = (Tl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Tl(e) {
  return ar() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function Ae(e) {
  return ar() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function et(e) {
  return ar() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function zi(e) {
  return !ar() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
function _n(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Od(e) {
  return ["table", "td", "th"].includes(en(e));
}
function cr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ho(e) {
  const t = zo(), n = Ae(e) ? Ue(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Id(e) {
  let t = yt(e);
  for (; et(t) && !Kt(t); ) {
    if (Ho(t))
      return t;
    if (cr(t))
      return null;
    t = yt(t);
  }
  return null;
}
function zo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(e) {
  return ["html", "body", "#document"].includes(en(e));
}
function Ue(e) {
  return Le(e).getComputedStyle(e);
}
function ur(e) {
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
    zi(e) && e.host || // Fallback.
    nt(e)
  );
  return zi(t) ? t.host : t;
}
function Ml(e) {
  const t = yt(e);
  return Kt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : et(t) && _n(t) ? t : Ml(t);
}
function bn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ml(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Le(o);
  if (i) {
    const l = ro(s);
    return t.concat(s, s.visualViewport || [], _n(o) ? o : [], l && n ? bn(l) : []);
  }
  return t.concat(o, bn(o, [], n));
}
function ro(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ad() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Ft = Math.min, Oe = Math.max, xn = Math.round, Dn = Math.floor, Je = (e) => ({
  x: e,
  y: e
}), Dd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fd = {
  start: "end",
  end: "start"
};
function Bi(e, t, n) {
  return Oe(e, Ft(t, n));
}
function tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function En(e) {
  return e.split("-")[1];
}
function Ol(e) {
  return e === "x" ? "y" : "x";
}
function Il(e) {
  return e === "y" ? "height" : "width";
}
function wt(e) {
  return ["top", "bottom"].includes(bt(e)) ? "y" : "x";
}
function Al(e) {
  return Ol(wt(e));
}
function Pd(e, t, n) {
  n === void 0 && (n = !1);
  const r = En(e), o = Al(e), i = Il(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Zn(s)), [s, Zn(s)];
}
function Nd(e) {
  const t = Zn(e);
  return [oo(e), t, oo(t)];
}
function oo(e) {
  return e.replace(/start|end/g, (t) => Fd[t]);
}
function kd(e, t, n) {
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
function Ld(e, t, n, r) {
  const o = En(e);
  let i = kd(bt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(oo)))), i;
}
function Zn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Dd[t]);
}
function Vd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hd(e) {
  return typeof e != "number" ? Vd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xn(e) {
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
function ji(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = wt(t), s = Al(t), l = Il(s), a = bt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, m = r[l] / 2 - o[l] / 2;
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
  switch (En(t)) {
    case "start":
      d[s] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const zd = async (e, t, n) => {
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
  } = ji(c, r, a), m = r, d = {}, v = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: g,
      fn: C
    } = l[w], {
      x,
      y: S,
      data: E,
      reset: M
    } = await C({
      x: u,
      y: h,
      initialPlacement: r,
      placement: m,
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
    }, M && v <= 50 && (v++, typeof M == "object" && (M.placement && (m = M.placement), M.rects && (c = M.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : M.rects), {
      x: u,
      y: h
    } = ji(c, m, a)), w = -1);
  }
  return {
    x: u,
    y: h,
    placement: m,
    strategy: o,
    middlewareData: d
  };
};
async function dr(e, t) {
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
    altBoundary: m = !1,
    padding: d = 0
  } = tn(t, e), v = Hd(d), g = l[m ? h === "floating" ? "reference" : "floating" : h], C = Xn(await i.getClippingRect({
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
  }, M = Xn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: x,
    offsetParent: S,
    strategy: a
  }) : x);
  return {
    top: (C.top - M.top + v.top) / E.y,
    bottom: (M.bottom - C.bottom + v.bottom) / E.y,
    left: (C.left - M.left + v.left) / E.x,
    right: (M.right - C.right + v.right) / E.x
  };
}
const Bd = function(e) {
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
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: w = !0,
        ...g
      } = tn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = bt(o), x = wt(l), S = bt(l) === l, E = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), M = m || (S || !w ? [Zn(l)] : Nd(l)), F = v !== "none";
      !m && F && M.push(...Ld(l, w, v, E));
      const O = [l, ...M], b = await dr(t, g), p = [];
      let y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && p.push(b[C]), h) {
        const N = Pd(o, s, E);
        p.push(b[N[0]], b[N[1]]);
      }
      if (y = [...y, {
        placement: o,
        overflows: p
      }], !p.every((N) => N <= 0)) {
        var _, R;
        const N = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1, D = O[N];
        if (D) {
          var L;
          const P = h === "alignment" ? x !== wt(D) : !1, A = ((L = y[0]) == null ? void 0 : L.overflows[0]) > 0;
          if (!P || A)
            return {
              data: {
                index: N,
                overflows: y
              },
              reset: {
                placement: D
              }
            };
        }
        let k = (R = y.filter((P) => P.overflows[0] <= 0).sort((P, A) => P.overflows[1] - A.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!k)
          switch (d) {
            case "bestFit": {
              var I;
              const P = (I = y.filter((A) => {
                if (F) {
                  const H = wt(A.placement);
                  return H === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((A, H) => A[1] - H[1])[0]) == null ? void 0 : I[0];
              P && (k = P);
              break;
            }
            case "initialPlacement":
              k = l;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function jd(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = bt(n), l = En(n), a = wt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && a ? -1 : 1, h = tn(t, e);
  let {
    mainAxis: m,
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
    y: m * c
  } : {
    x: m * c,
    y: d * u
  };
}
const Ud = function(e) {
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
      } = t, a = await jd(t, e);
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
}, Wd = function(e) {
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
      }, u = await dr(t, a), h = wt(bt(o)), m = Ol(h);
      let d = c[m], v = c[h];
      if (i) {
        const g = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", x = d + u[g], S = d - u[C];
        d = Bi(x, d, S);
      }
      if (s) {
        const g = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", x = v + u[g], S = v - u[C];
        v = Bi(x, v, S);
      }
      const w = l.fn({
        ...t,
        [m]: d,
        [h]: v
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [m]: i,
            [h]: s
          }
        }
      };
    }
  };
}, Gd = function(e) {
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
      } = tn(e, t), u = await dr(t, c), h = bt(o), m = En(o), d = wt(o) === "y", {
        width: v,
        height: w
      } = i.floating;
      let g, C;
      h === "top" || h === "bottom" ? (g = h, C = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = h, g = m === "end" ? "top" : "bottom");
      const x = w - u.top - u.bottom, S = v - u.left - u.right, E = Ft(w - u[g], x), M = Ft(v - u[C], S), F = !t.middlewareData.shift;
      let O = E, b = M;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (b = S), (r = t.middlewareData.shift) != null && r.enabled.y && (O = x), F && !m) {
        const y = Oe(u.left, 0), _ = Oe(u.right, 0), R = Oe(u.top, 0), L = Oe(u.bottom, 0);
        d ? b = v - 2 * (y !== 0 || _ !== 0 ? y + _ : Oe(u.left, u.right)) : O = w - 2 * (R !== 0 || L !== 0 ? R + L : Oe(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: b,
        availableHeight: O
      });
      const p = await s.getDimensions(l.floating);
      return v !== p.width || w !== p.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Dl(e) {
  const t = Ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = et(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = xn(n) !== i || xn(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function Bo(e) {
  return Ae(e) ? e : e.contextElement;
}
function Wt(e) {
  const t = Bo(e);
  if (!et(t))
    return Je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Dl(t);
  let s = (i ? xn(n.width) : n.width) / r, l = (i ? xn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const qd = /* @__PURE__ */ Je(0);
function Fl(e) {
  const t = Le(e);
  return !zo() || !t.visualViewport ? qd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Pt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Bo(e);
  let s = Je(1);
  t && (r ? Ae(r) && (s = Wt(r)) : s = Wt(e));
  const l = Yd(i, n, r) ? Fl(i) : Je(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, u = o.width / s.x, h = o.height / s.y;
  if (i) {
    const m = Le(i), d = r && Ae(r) ? Le(r) : r;
    let v = m, w = ro(v);
    for (; w && r && d !== v; ) {
      const g = Wt(w), C = w.getBoundingClientRect(), x = Ue(w), S = C.left + (w.clientLeft + parseFloat(x.paddingLeft)) * g.x, E = C.top + (w.clientTop + parseFloat(x.paddingTop)) * g.y;
      a *= g.x, c *= g.y, u *= g.x, h *= g.y, a += S, c += E, v = Le(w), w = ro(v);
    }
  }
  return Xn({
    width: u,
    height: h,
    x: a,
    y: c
  });
}
function jo(e, t) {
  const n = ur(e).scrollLeft;
  return t ? t.left + n : Pt(nt(e)).left + n;
}
function Pl(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    jo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Kd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = nt(r), l = t ? cr(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Je(1);
  const u = Je(0), h = et(r);
  if ((h || !h && !i) && ((en(r) !== "body" || _n(s)) && (a = ur(r)), et(r))) {
    const d = Pt(r);
    c = Wt(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  const m = s && !h && !i ? Pl(s, a, !0) : Je(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + m.y
  };
}
function Zd(e) {
  return Array.from(e.getClientRects());
}
function Xd(e) {
  const t = nt(e), n = ur(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + jo(e);
  const l = -n.scrollTop;
  return Ue(r).direction === "rtl" && (s += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Jd(e, t) {
  const n = Le(e), r = nt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = zo();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Qd(e, t) {
  const n = Pt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = et(e) ? Wt(e) : Je(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Ui(e, t, n) {
  let r;
  if (t === "viewport")
    r = Jd(e, n);
  else if (t === "document")
    r = Xd(nt(e));
  else if (Ae(t))
    r = Qd(t, n);
  else {
    const o = Fl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Xn(r);
}
function Nl(e, t) {
  const n = yt(e);
  return n === t || !Ae(n) || Kt(n) ? !1 : Ue(n).position === "fixed" || Nl(n, t);
}
function ef(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = bn(e, [], !1).filter((l) => Ae(l) && en(l) !== "body"), o = null;
  const i = Ue(e).position === "fixed";
  let s = i ? yt(e) : e;
  for (; Ae(s) && !Kt(s); ) {
    const l = Ue(s), a = Ho(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || _n(s) && !a && Nl(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = yt(s);
  }
  return t.set(e, r), r;
}
function tf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? cr(t) ? [] : ef(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, u) => {
    const h = Ui(t, u, o);
    return c.top = Oe(h.top, c.top), c.right = Ft(h.right, c.right), c.bottom = Ft(h.bottom, c.bottom), c.left = Oe(h.left, c.left), c;
  }, Ui(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function nf(e) {
  const {
    width: t,
    height: n
  } = Dl(e);
  return {
    width: t,
    height: n
  };
}
function rf(e, t, n) {
  const r = et(t), o = nt(t), i = n === "fixed", s = Pt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Je(0);
  function c() {
    a.x = jo(o);
  }
  if (r || !r && !i)
    if ((en(t) !== "body" || _n(o)) && (l = ur(t)), r) {
      const d = Pt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Pl(o, l) : Je(0), h = s.left + l.scrollLeft - a.x - u.x, m = s.top + l.scrollTop - a.y - u.y;
  return {
    x: h,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Mr(e) {
  return Ue(e).position === "static";
}
function Wi(e, t) {
  if (!et(e) || Ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return nt(e) === n && (n = n.ownerDocument.body), n;
}
function kl(e, t) {
  const n = Le(e);
  if (cr(e))
    return n;
  if (!et(e)) {
    let o = yt(e);
    for (; o && !Kt(o); ) {
      if (Ae(o) && !Mr(o))
        return o;
      o = yt(o);
    }
    return n;
  }
  let r = Wi(e, t);
  for (; r && Od(r) && Mr(r); )
    r = Wi(r, t);
  return r && Kt(r) && Mr(r) && !Ho(r) ? n : r || Id(e) || n;
}
const of = async function(e) {
  const t = this.getOffsetParent || kl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: rf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sf(e) {
  return Ue(e).direction === "rtl";
}
const lf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kd,
  getDocumentElement: nt,
  getClippingRect: tf,
  getOffsetParent: kl,
  getElementRects: of,
  getClientRects: Zd,
  getDimensions: nf,
  getScale: Wt,
  isElement: Ae,
  isRTL: sf
};
function Ll(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function af(e, t) {
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
      top: h,
      width: m,
      height: d
    } = c;
    if (l || t(), !m || !d)
      return;
    const v = Dn(h), w = Dn(o.clientWidth - (u + m)), g = Dn(o.clientHeight - (h + d)), C = Dn(u), S = {
      rootMargin: -v + "px " + -w + "px " + -g + "px " + -C + "px",
      threshold: Oe(0, Ft(1, a)) || 1
    };
    let E = !0;
    function M(F) {
      const O = F[0].intersectionRatio;
      if (O !== a) {
        if (!E)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Ll(c, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, S);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function cf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = Bo(e), u = o || i ? [...c ? bn(c) : [], ...bn(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const h = c && l ? af(c, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((C) => {
    let [x] = C;
    x && x.target === c && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = d) == null || S.observe(t);
    })), n();
  }), c && !a && d.observe(c), d.observe(t));
  let v, w = a ? Pt(e) : null;
  a && g();
  function g() {
    const C = Pt(e);
    w && !Ll(w, C) && n(), w = C, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var C;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h == null || h(), (C = d) == null || C.disconnect(), d = null, a && cancelAnimationFrame(v);
  };
}
const Or = dr, uf = Ud, df = Wd, ff = Bd, hf = Gd, pf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: lf,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return zd(e, t, {
    ...o,
    platform: i
  });
};
var zn = typeof document < "u" ? We : se;
function Jn(e, t) {
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
        if (!Jn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Jn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gi(e, t) {
  const n = Vl(e);
  return Math.round(t * n) / n;
}
function Ir(e) {
  const t = U(e);
  return zn(() => {
    t.current = e;
  }), t;
}
function mf(e) {
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
  } = e, [u, h] = K({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = K(r);
  Jn(m, r) || d(r);
  const [v, w] = K(null), [g, C] = K(null), x = te((P) => {
    P !== F.current && (F.current = P, w(P));
  }, []), S = te((P) => {
    P !== O.current && (O.current = P, C(P));
  }, []), E = i || v, M = s || g, F = U(null), O = U(null), b = U(u), p = a != null, y = Ir(a), _ = Ir(o), R = Ir(c), L = te(() => {
    if (!F.current || !O.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: m
    };
    _.current && (P.platform = _.current), pf(F.current, O.current, P).then((A) => {
      const H = {
        ...A,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      I.current && !Jn(b.current, H) && (b.current = H, ke(() => {
        h(H);
      }));
    });
  }, [m, t, n, _, R]);
  zn(() => {
    c === !1 && b.current.isPositioned && (b.current.isPositioned = !1, h((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [c]);
  const I = U(!1);
  zn(() => (I.current = !0, () => {
    I.current = !1;
  }), []), zn(() => {
    if (E && (F.current = E), M && (O.current = M), E && M) {
      if (y.current)
        return y.current(E, M, L);
      L();
    }
  }, [E, M, L, y, p]);
  const N = ne(() => ({
    reference: F,
    floating: O,
    setReference: x,
    setFloating: S
  }), [x, S]), D = ne(() => ({
    reference: E,
    floating: M
  }), [E, M]), k = ne(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return P;
    const A = Gi(D.floating, u.x), H = Gi(D.floating, u.y);
    return l ? {
      ...P,
      transform: "translate(" + A + "px, " + H + "px)",
      ...Vl(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: H
    };
  }, [n, l, D.floating, u.x, u.y]);
  return ne(() => ({
    ...u,
    update: L,
    refs: N,
    elements: D,
    floatingStyles: k
  }), [u, L, N, D, k]);
}
const Hl = (e, t) => ({
  ...uf(e),
  options: [e, t]
}), gf = (e, t) => ({
  ...df(e),
  options: [e, t]
}), vf = (e, t) => ({
  ...ff(e),
  options: [e, t]
}), wf = (e, t) => ({
  ...hf(e),
  options: [e, t]
}), zl = {
  ...Yr
}, yf = zl.useInsertionEffect, bf = yf || ((e) => e());
function Bl(e) {
  const t = U(() => {
  });
  return bf(() => {
    t.current = e;
  }), te(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var io = typeof document < "u" ? We : se;
let qi = !1, xf = 0;
const Yi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + xf++
);
function Sf() {
  const [e, t] = K(() => qi ? Yi() : void 0);
  return io(() => {
    e == null && t(Yi());
  }, []), se(() => {
    qi = !0;
  }, []), e;
}
const Cf = zl.useId, _f = Cf || Sf;
function Ef() {
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
const Rf = /* @__PURE__ */ me(null), $f = /* @__PURE__ */ me(null), Tf = () => {
  var e;
  return ((e = fe(Rf)) == null ? void 0 : e.id) || null;
}, Mf = () => fe($f), Of = "data-floating-ui-focusable";
function If(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = _f(), i = U({}), [s] = K(() => Ef()), l = Tf() != null, [a, c] = K(r.reference), u = Bl((d, v, w) => {
    i.current.openEvent = d ? v : void 0, s.emit("openchange", {
      open: d,
      event: v,
      reason: w,
      nested: l
    }), n == null || n(d, v, w);
  }), h = ne(() => ({
    setPositionReference: c
  }), []), m = ne(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return ne(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: m,
    events: s,
    floatingId: o,
    refs: h
  }), [t, u, m, s, o, h]);
}
function Af(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = If({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = K(null), [l, a] = K(null), u = (o == null ? void 0 : o.domReference) || i, h = U(null), m = Mf();
  io(() => {
    u && (h.current = u);
  }, [u]);
  const d = mf({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), v = te((S) => {
    const E = Ae(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    a(E), d.refs.setReference(E);
  }, [d.refs]), w = te((S) => {
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
  return io(() => {
    r.dataRef.current.floatingContext = x;
    const S = m == null ? void 0 : m.nodesRef.current.find((E) => E.id === t);
    S && (S.context = x);
  }), ne(() => ({
    ...d,
    context: x,
    refs: g,
    elements: C
  }), [d, g, C, x]);
}
const Ki = "active", Zi = "selected";
function Ar(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [Ki]: s,
      [Zi]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [Of]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [c, u] = a;
      if (!(o && [Ki, Zi].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var h;
            (h = r.get(c)) == null || h.push(u), s[c] = function() {
              for (var m, d = arguments.length, v = new Array(d), w = 0; w < d; w++)
                v[w] = arguments[w];
              return (m = r.get(c)) == null ? void 0 : m.map((g) => g(...v)).find((g) => g !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function Df(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = te(
    (l) => Ar(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = te(
    (l) => Ar(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = te(
    (l) => Ar(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return ne(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function Xi(e, t) {
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
const Ff = (e) => ({
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
        floating: m
      }
    } = t, d = n.current[s], v = (c == null ? void 0 : c.current) || m, w = m.clientTop || v.clientTop, g = m.clientTop !== 0, C = v.clientTop !== 0, x = m === v;
    if (!d)
      return {};
    const S = {
      ...t,
      ...await Hl(-d.offsetTop - m.clientTop - h.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, E = await Or(Xi(S, v.scrollHeight + w + m.clientTop), u), M = await Or(S, {
      ...u,
      elementContext: "reference"
    }), F = Oe(0, E.top), O = S.y + F, y = (v.scrollHeight > v.clientHeight ? (_) => _ : xn)(Oe(0, v.scrollHeight + (g && x || C ? w * 2 : 0) - F - Oe(0, E.bottom)));
    if (v.style.maxHeight = y + "px", v.scrollTop = F, o) {
      const _ = v.offsetHeight < d.offsetHeight * Ft(l, n.current.length) - 1 || M.top >= -a || M.bottom >= -a;
      ke(() => o(_));
    }
    return r && (r.current = await Or(Xi({
      ...S,
      y: O
    }, v.offsetHeight + w + m.clientTop), u)), {
      y: O
    };
  }
});
function Pf(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = Bl(l), c = U(!1), u = U(null), h = U(null);
  se(() => {
    if (!o) return;
    function d(w) {
      if (w.ctrlKey || !v || i.current == null)
        return;
      const g = w.deltaY, C = i.current.top >= -0.5, x = i.current.bottom >= -0.5, S = v.scrollHeight - v.clientHeight, E = g < 0 ? -1 : 1, M = g < 0 ? "max" : "min";
      v.scrollHeight <= v.clientHeight || (!C && g > 0 || !x && g < 0 ? (w.preventDefault(), ke(() => {
        a((F) => F + Math[M](g, S * E));
      })) : /firefox/i.test(Ad()) && (v.scrollTop += g));
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
  const m = ne(() => ({
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
    floating: m
  } : {}, [o, m]);
}
let Rn = me({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Rn.displayName = "FloatingContext";
let Uo = me(null);
Uo.displayName = "PlacementContext";
function Nf(e) {
  return ne(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function kf() {
  return fe(Rn).setReference;
}
function Lf() {
  let { getFloatingProps: e, slot: t } = fe(Rn);
  return te((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Vf(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = fe(Uo), n = ne(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  he(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = fe(Rn);
  return ne(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Ji = 4;
function Hf({ children: e, enabled: t = !0 }) {
  let [n, r] = K(null), [o, i] = K(0), s = U(null), [l, a] = K(null);
  zf(l);
  let c = t && n !== null && l !== null, { to: u = "bottom", gap: h = 0, offset: m = 0, padding: d = 0, inner: v } = Bf(n, l), [w, g = "center"] = u.split(" ");
  he(() => {
    c && i(0);
  }, [c]);
  let { refs: C, floatingStyles: x, context: S } = Af({ open: c, placement: w === "selection" ? g === "center" ? "bottom" : `bottom-${g}` : g === "center" ? `${w}` : `${w}-${g}`, strategy: "absolute", transform: !1, middleware: [Hl({ mainAxis: w === "selection" ? 0 : h, crossAxis: m }), gf({ padding: d }), w !== "selection" && vf({ padding: d }), w === "selection" && v ? Ff({ ...v, padding: d, overflowRef: s, offset: o, minItemsVisible: Ji, referenceOverflowThreshold: d, onFallbackChange(_) {
    var R, L;
    if (!_) return;
    let I = S.elements.floating;
    if (!I) return;
    let N = parseFloat(getComputedStyle(I).scrollPaddingBottom) || 0, D = Math.min(Ji, I.childElementCount), k = 0, P = 0;
    for (let A of (L = (R = S.elements.floating) == null ? void 0 : R.childNodes) != null ? L : []) if (A instanceof HTMLElement) {
      let H = A.offsetTop, V = H + A.clientHeight + N, $ = I.scrollTop, T = $ + I.clientHeight;
      if (H >= $ && V <= T) D--;
      else {
        P = Math.max(0, Math.min(V, T) - Math.max(H, $)), k = A.clientHeight;
        break;
      }
    }
    D >= 1 && i((A) => {
      let H = k * D - P + N;
      return A >= H ? A : H;
    });
  } }) : null, wf({ padding: d, apply({ availableWidth: _, availableHeight: R, elements: L }) {
    Object.assign(L.floating.style, { overflow: "auto", maxWidth: `${_}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${R}px)` });
  } })].filter(Boolean), whileElementsMounted: cf }), [E = w, M = g] = S.placement.split("-");
  w === "selection" && (E = "selection");
  let F = ne(() => ({ anchor: [E, M].filter(Boolean).join(" ") }), [E, M]), O = Pf(S, { overflowRef: s, onChange: i }), { getReferenceProps: b, getFloatingProps: p } = Df([O]), y = ee((_) => {
    a(_), C.setFloating(_);
  });
  return B(Uo.Provider, { value: r }, B(Rn.Provider, { value: { setFloating: y, setReference: C.setReference, styles: x, getReferenceProps: b, getFloatingProps: p, slot: F } }, e));
}
function zf(e) {
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
function Bf(e, t) {
  var n, r, o;
  let i = Dr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = Dr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = Dr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function Dr(e, t, n = void 0) {
  let r = kt(), o = ee((a, c) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!c) return [n, null];
      let u = Qi(a, c);
      return [u, (h) => {
        let m = jl(a);
        {
          let d = m.map((v) => window.getComputedStyle(c).getPropertyValue(v));
          r.requestAnimationFrame(function v() {
            r.nextFrame(v);
            let w = !1;
            for (let [C, x] of m.entries()) {
              let S = window.getComputedStyle(c).getPropertyValue(x);
              if (d[C] !== S) {
                d[C] = S, w = !0;
                break;
              }
            }
            if (!w) return;
            let g = Qi(a, c);
            u !== g && (h(g), u = g);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = ne(() => o(e, t)[0], [e, t]), [s = i, l] = K();
  return he(() => {
    let [a, c] = o(e, t);
    if (l(a), !!c) return c(l);
  }, [e, t]), s;
}
function jl(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...jl(o)] : [r];
  }
  return [];
}
function Qi(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function jf({ children: e, freeze: t }) {
  let n = so(t, e);
  return Z.createElement(Z.Fragment, null, n);
}
function so(e, t) {
  let [n, r] = K(t);
  return !e && n !== t && r(t), e ? n : t;
}
let fr = me(null);
fr.displayName = "OpenClosedContext";
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function $n() {
  return fe(fr);
}
function Ul({ value: e, children: t }) {
  return Z.createElement(fr.Provider, { value: e }, t);
}
function Uf({ children: e }) {
  return Z.createElement(fr.Provider, { value: null }, e);
}
function Wf(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ze = [];
Wf(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ze[0] === t.target) return;
    let n = t.target;
    n = n.closest(Kn), Ze.unshift(n ?? t.target), Ze = Ze.filter((r) => r != null && r.isConnected), Ze.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Gf(e) {
  throw new Error("Unexpected object: " + e);
}
var Se = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Se || {});
function es(e, t) {
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
      Gf(e);
  }
}
var Wo = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Wo || {});
function Wl(e) {
  let t = ee(e), n = U(!1);
  se(() => (n.current = !1, () => {
    n.current = !0, or(() => {
      n.current && t();
    });
  }), [t]);
}
function qf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Yr ? ((t) => t.useSyncExternalStore)(Yr)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Tn() {
  let e = qf(), [t, n] = K(It.isHandoffComplete);
  return t && It.isHandoffComplete === !1 && n(!1), se(() => {
    t !== !0 && n(!0);
  }, [t]), se(() => It.handoff(), []), e ? !1 : t;
}
let Gl = me(!1);
function Yf() {
  return fe(Gl);
}
function ts(e) {
  return Z.createElement(Gl.Provider, { value: e.force }, e.children);
}
function Kf(e) {
  let t = Yf(), n = fe(Yl), r = Lt(e), [o, i] = K(() => {
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
let ql = pe, Zf = Ce(function(e, t) {
  let n = e, r = U(null), o = Fe(Iu((h) => {
    r.current = h;
  }), t), i = Lt(r), s = Kf(r), [l] = K(() => {
    var h;
    return It.isServer ? null : (h = i == null ? void 0 : i.createElement("div")) != null ? h : null;
  }), a = fe(lo), c = Tn();
  he(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), he(() => {
    if (l && a) return a.register(l);
  }, [a, l]), Wl(() => {
    var h;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((h = s.parentElement) == null || h.removeChild(s)));
  });
  let u = Ee();
  return c ? !s || !l ? null : Zt(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: ql, name: "Portal" }), l) : null;
});
function Xf(e, t) {
  let n = Fe(t), { enabled: r = !0, ...o } = e, i = Ee();
  return r ? Z.createElement(Zf, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: ql, name: "Portal" });
}
let Jf = pe, Yl = me(null);
function Qf(e, t) {
  let { target: n, ...r } = e, o = { ref: Fe(t) }, i = Ee();
  return Z.createElement(Yl.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Jf, name: "Popover.Group" }));
}
let lo = me(null);
function eh() {
  let e = fe(lo), t = U([]), n = ee((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = ee((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ne(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ne(() => function({ children: i }) {
    return Z.createElement(lo.Provider, { value: o }, i);
  }, [o])];
}
let th = Ce(Xf), Kl = Ce(Qf), Zl = Object.assign(th, { Group: Kl });
var nh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(nh || {}), rh = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(rh || {}), oh = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(oh || {}), ih = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(ih || {});
function Fr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : yl(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let sh = { 1(e) {
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
    let { options: c, disabled: u } = e.virtual, h = t.focus === Se.Specific ? t.idx : es(t, { resolveItems: () => c, resolveActiveIndex: () => {
      var d, v;
      return (v = (d = e.activeOptionIndex) != null ? d : c.findIndex((w) => !u(w))) != null ? v : null;
    }, resolveDisabled: u, resolveId() {
      throw new Error("Function not implemented.");
    } }), m = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === h && e.activationTrigger === m ? e : { ...e, activeOptionIndex: h, activationTrigger: m, isTyping: !1, __demoMode: !1 };
  }
  let s = Fr(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((u) => !u.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = t.focus === Se.Specific ? t.idx : es(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = Fr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = Fr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, Go = me(null);
Go.displayName = "ComboboxActionsContext";
function Mn(e) {
  let t = fe(Go);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Mn), n;
  }
  return t;
}
let Xl = me(null);
function lh(e) {
  let t = nn("VirtualProvider"), { options: n } = t.virtual, [r, o] = ne(() => {
    let c = t.optionsElement;
    if (!c) return [0, 0];
    let u = window.getComputedStyle(c);
    return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
  }, [t.optionsElement]), i = hl({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = K(0);
  he(() => {
    l((c) => c + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : Z.createElement(Xl.Provider, { value: i }, Z.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (c) => {
    c && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((c) => {
    var u;
    return Z.createElement(pe, { key: c.key }, Z.cloneElement((u = e.children) == null ? void 0 : u.call(e, { ...e.slot, option: n[c.index] }), { key: `${s}-${c.key}`, "data-index": c.index, "aria-setsize": n.length, "aria-posinset": c.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c.start}px)`, overflowAnchor: "none" } }));
  })));
}
let Sn = me(null);
Sn.displayName = "ComboboxDataContext";
function nn(e) {
  let t = fe(Sn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nn), n;
  }
  return t;
}
function ah(e, t) {
  return Ne(t.type, sh, e, t);
}
let ch = pe;
function uh(e, t) {
  var n, r;
  let o = ko(), { value: i, defaultValue: s, onChange: l, form: a, name: c, by: u, disabled: h = o || !1, onClose: m, __demoMode: d = !1, multiple: v = !1, immediate: w = !1, virtual: g = null, nullable: C, ...x } = e, S = xu(s), [E = v ? [] : void 0, M] = bu(i, l, S), [F, O] = tt(ah, { dataRef: nr(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: g ? { options: g.options, disabled: (n = g.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), b = U(!1), p = U({ static: !1, hold: !1 }), y = rd(u), _ = ee((j) => g ? u === null ? g.options.indexOf(j) : g.options.findIndex((J) => y(J, j)) : F.options.findIndex((J) => y(J.dataRef.current.value, j))), R = te((j) => Ne(I.mode, { 1: () => E.some((J) => y(J, j)), 0: () => y(E, j) }), [E]), L = ee((j) => F.activeOptionIndex === _(j)), I = ne(() => ({ ...F, immediate: w, optionsPropsRef: p, value: E, defaultValue: S, disabled: h, mode: v ? 1 : 0, virtual: g ? F.virtual : null, get activeOptionIndex() {
    if (b.current && F.activeOptionIndex === null && (g ? g.options.length > 0 : F.options.length > 0)) {
      if (g) {
        let J = g.options.findIndex((oe) => {
          var be, ue;
          return !((ue = (be = g.disabled) == null ? void 0 : be.call(g, oe)) != null && ue);
        });
        if (J !== -1) return J;
      }
      let j = F.options.findIndex((J) => !J.dataRef.current.disabled);
      if (j !== -1) return j;
    }
    return F.activeOptionIndex;
  }, calculateIndex: _, compare: y, isSelected: R, isActive: L }), [E, S, h, v, d, F, g]);
  he(() => {
    var j;
    g && O({ type: 7, options: g.options, disabled: (j = g.disabled) != null ? j : null });
  }, [g, g == null ? void 0 : g.options, g == null ? void 0 : g.disabled]), he(() => {
    F.dataRef.current = I;
  }, [I]);
  let N = I.comboboxState === 0;
  Cl(N, [I.buttonElement, I.inputElement, I.optionsElement], () => z.closeCombobox());
  let D = ne(() => {
    var j, J, oe;
    return { open: I.comboboxState === 0, disabled: h, activeIndex: I.activeOptionIndex, activeOption: I.activeOptionIndex === null ? null : I.virtual ? I.virtual.options[(j = I.activeOptionIndex) != null ? j : 0] : (oe = (J = I.options[I.activeOptionIndex]) == null ? void 0 : J.dataRef.current.value) != null ? oe : null, value: E };
  }, [I, h, E]), k = ee(() => {
    if (I.activeOptionIndex !== null) {
      if (z.setIsTyping(!1), I.virtual) T(I.virtual.options[I.activeOptionIndex]);
      else {
        let { dataRef: j } = I.options[I.activeOptionIndex];
        T(j.current.value);
      }
      z.goToOption(Se.Specific, I.activeOptionIndex);
    }
  }), P = ee(() => {
    O({ type: 0 }), b.current = !0;
  }), A = ee(() => {
    O({ type: 1 }), b.current = !1, m == null || m();
  }), H = ee((j) => {
    O({ type: 3, isTyping: j });
  }), V = ee((j, J, oe) => (b.current = !1, j === Se.Specific ? O({ type: 2, focus: Se.Specific, idx: J, trigger: oe }) : O({ type: 2, focus: j, trigger: oe }))), $ = ee((j, J) => (O({ type: 4, payload: { id: j, dataRef: J } }), () => {
    I.isActive(J.current.value) && (b.current = !0), O({ type: 5, id: j });
  })), T = ee((j) => Ne(I.mode, { 0() {
    return M == null ? void 0 : M(j);
  }, 1() {
    let J = I.value.slice(), oe = J.findIndex((be) => y(be, j));
    return oe === -1 ? J.push(j) : J.splice(oe, 1), M == null ? void 0 : M(J);
  } })), q = ee((j) => {
    O({ type: 6, trigger: j });
  }), X = ee((j) => {
    O({ type: 8, element: j });
  }), ce = ee((j) => {
    O({ type: 9, element: j });
  }), ie = ee((j) => {
    O({ type: 10, element: j });
  }), z = ne(() => ({ onChange: T, registerOption: $, goToOption: V, setIsTyping: H, closeCombobox: A, openCombobox: P, setActivationTrigger: q, selectActiveOption: k, setInputElement: X, setButtonElement: ce, setOptionsElement: ie }), []), [G, re] = Lu(), Y = t === null ? {} : { ref: t }, W = te(() => {
    if (S !== void 0) return M == null ? void 0 : M(S);
  }, [M, S]), Q = Ee();
  return Z.createElement(re, { value: G, props: { htmlFor: (r = I.inputElement) == null ? void 0 : r.id }, slot: { open: I.comboboxState === 0, disabled: h } }, Z.createElement(Hf, null, Z.createElement(Go.Provider, { value: z }, Z.createElement(Sn.Provider, { value: I }, Z.createElement(Ul, { value: Ne(I.comboboxState, { 0: De.Open, 1: De.Closed }) }, c != null && Z.createElement(Ru, { disabled: h, data: E != null ? { [c]: E } : {}, form: a, onReset: W }), Q({ ourProps: Y, theirProps: x, slot: D, defaultTag: ch, name: "Combobox" }))))));
}
let dh = "input";
function fh(e, t) {
  var n, r, o, i, s;
  let l = nn("Combobox.Input"), a = Mn("Combobox.Input"), c = Ie(), u = al(), { id: h = u || `headlessui-combobox-input-${c}`, onChange: m, displayValue: d, disabled: v = l.disabled || !1, autoFocus: w = !1, type: g = "text", ...C } = e, x = U(null), S = Fe(x, t, kf(), a.setInputElement), E = Lt(l.inputElement), M = kt(), F = ee(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(Se.Nothing);
  }), O = ne(() => {
    var T;
    return typeof d == "function" && l.value !== void 0 ? (T = d(l.value)) != null ? T : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, d]);
  yn(([T, q], [X, ce]) => {
    if (l.isTyping) return;
    let ie = x.current;
    ie && ((ce === 0 && q === 1 || T !== X) && (ie.value = T), requestAnimationFrame(() => {
      if (l.isTyping || !ie || (E == null ? void 0 : E.activeElement) !== ie) return;
      let { selectionStart: z, selectionEnd: G } = ie;
      Math.abs((G ?? 0) - (z ?? 0)) === 0 && z === 0 && ie.setSelectionRange(ie.value.length, ie.value.length);
    }));
  }, [O, l.comboboxState, E, l.isTyping]), yn(([T], [q]) => {
    if (T === 0 && q === 1) {
      if (l.isTyping) return;
      let X = x.current;
      if (!X) return;
      let ce = X.value, { selectionStart: ie, selectionEnd: z, selectionDirection: G } = X;
      X.value = "", X.value = ce, G !== null ? X.setSelectionRange(ie, z, G) : X.setSelectionRange(ie, z);
    }
  }, [l.comboboxState]);
  let b = U(!1), p = ee(() => {
    b.current = !0;
  }), y = ee(() => {
    M.nextFrame(() => {
      b.current = !1;
    });
  }), _ = ee((T) => {
    switch (a.setIsTyping(!0), T.key) {
      case Me.Enter:
        if (l.comboboxState !== 0 || b.current) return;
        if (T.preventDefault(), T.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Me.ArrowDown:
        return T.preventDefault(), T.stopPropagation(), Ne(l.comboboxState, { 0: () => a.goToOption(Se.Next), 1: () => a.openCombobox() });
      case Me.ArrowUp:
        return T.preventDefault(), T.stopPropagation(), Ne(l.comboboxState, { 0: () => a.goToOption(Se.Previous), 1: () => {
          ke(() => a.openCombobox()), l.value || a.goToOption(Se.Last);
        } });
      case Me.Home:
        if (T.shiftKey) break;
        return T.preventDefault(), T.stopPropagation(), a.goToOption(Se.First);
      case Me.PageUp:
        return T.preventDefault(), T.stopPropagation(), a.goToOption(Se.First);
      case Me.End:
        if (T.shiftKey) break;
        return T.preventDefault(), T.stopPropagation(), a.goToOption(Se.Last);
      case Me.PageDown:
        return T.preventDefault(), T.stopPropagation(), a.goToOption(Se.Last);
      case Me.Escape:
        return l.comboboxState !== 0 ? void 0 : (T.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && T.stopPropagation(), l.mode === 0 && l.value === null && F(), a.closeCombobox());
      case Me.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), R = ee((T) => {
    m == null || m(T), l.mode === 0 && T.target.value === "" && F(), a.openCombobox();
  }), L = ee((T) => {
    var q, X, ce;
    let ie = (q = T.relatedTarget) != null ? q : Ze.find((z) => z !== T.currentTarget);
    if (!((X = l.optionsElement) != null && X.contains(ie)) && !((ce = l.buttonElement) != null && ce.contains(ie)) && l.comboboxState === 0) return T.preventDefault(), l.mode === 0 && l.value === null && F(), a.closeCombobox();
  }), I = ee((T) => {
    var q, X, ce;
    let ie = (q = T.relatedTarget) != null ? q : Ze.find((z) => z !== T.currentTarget);
    (X = l.buttonElement) != null && X.contains(ie) || (ce = l.optionsElement) != null && ce.contains(ie) || l.disabled || l.immediate && l.comboboxState !== 0 && M.microTask(() => {
      ke(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), N = lr(), D = Au(), { isFocused: k, focusProps: P } = rl({ autoFocus: w }), { isHovered: A, hoverProps: H } = nl({ isDisabled: v }), V = ne(() => ({ open: l.comboboxState === 0, disabled: v, hover: A, focus: k, autofocus: w }), [l, A, k, w, v]), $ = Lo({ ref: S, id: h, role: "combobox", type: g, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((T) => !T.dataRef.current.disabled && l.compare(T.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": N, "aria-describedby": D, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? d == null ? void 0 : d(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: v || void 0, autoFocus: w, onCompositionStart: p, onCompositionEnd: y, onKeyDown: _, onChange: R, onFocus: I, onBlur: L }, P, H);
  return Ee()({ ourProps: $, theirProps: C, slot: V, defaultTag: dh, name: "Combobox.Input" });
}
let hh = "button";
function ph(e, t) {
  var n;
  let r = nn("Combobox.Button"), o = Mn("Combobox.Button"), i = Fe(t, o.setButtonElement), s = Ie(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: c = !1, ...u } = e, h = _l(r.inputElement), m = ee((O) => {
    switch (O.key) {
      case Me.Space:
      case Me.Enter:
        O.preventDefault(), O.stopPropagation(), r.comboboxState === 1 && ke(() => o.openCombobox()), h();
        return;
      case Me.ArrowDown:
        O.preventDefault(), O.stopPropagation(), r.comboboxState === 1 && (ke(() => o.openCombobox()), r.value || o.goToOption(Se.First)), h();
        return;
      case Me.ArrowUp:
        O.preventDefault(), O.stopPropagation(), r.comboboxState === 1 && (ke(() => o.openCombobox()), r.value || o.goToOption(Se.Last)), h();
        return;
      case Me.Escape:
        if (r.comboboxState !== 0) return;
        O.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && O.stopPropagation(), ke(() => o.closeCombobox()), h();
        return;
      default:
        return;
    }
  }), d = ee((O) => {
    O.preventDefault(), !Mu(O.currentTarget) && (O.button === Wo.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), h());
  }), v = lr([l]), { isFocusVisible: w, focusProps: g } = rl({ autoFocus: c }), { isHovered: C, hoverProps: x } = nl({ isDisabled: a }), { pressed: S, pressProps: E } = pu({ disabled: a }), M = ne(() => ({ open: r.comboboxState === 0, active: S || r.comboboxState === 0, disabled: a, value: r.value, hover: C, focus: w }), [r, C, w, S, a]), F = Lo({ ref: i, id: l, type: gd(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": v, disabled: a || void 0, autoFocus: c, onMouseDown: d, onKeyDown: m }, g, x, E);
  return Ee()({ ourProps: F, theirProps: u, slot: M, defaultTag: hh, name: "Combobox.Button" });
}
let mh = "div", gh = qt.RenderStrategy | qt.Static;
function vh(e, t) {
  var n, r, o;
  let i = Ie(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: c = !1, modal: u = !0, transition: h = !1, ...m } = e, d = nn("Combobox.Options"), v = Mn("Combobox.Options"), w = Nf(a);
  w && (c = !0);
  let [g, C] = Vf(w), [x, S] = K(null), E = Lf(), M = Fe(t, w ? g : null, v.setOptionsElement, S), F = Lt(d.optionsElement), O = $n(), [b, p] = $l(h, x, O !== null ? (O & De.Open) === De.Open : d.comboboxState === 0);
  vl(b, d.inputElement, v.closeCombobox);
  let y = d.__demoMode ? !1 : u && d.comboboxState === 0;
  El(y, F);
  let _ = d.__demoMode ? !1 : u && d.comboboxState === 0;
  gl(_, { allowed: te(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), he(() => {
    var $;
    d.optionsPropsRef.current.static = ($ = e.static) != null ? $ : !1;
  }, [d.optionsPropsRef, e.static]), he(() => {
    d.optionsPropsRef.current.hold = l;
  }, [d.optionsPropsRef, l]), Md(d.comboboxState === 0, { container: d.optionsElement, accept($) {
    return $.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : $.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk($) {
    $.setAttribute("role", "none");
  } });
  let R = lr([(n = d.buttonElement) == null ? void 0 : n.id]), L = ne(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), I = ee(() => {
    v.setActivationTrigger(0);
  }), N = ee(($) => {
    $.preventDefault(), v.setActivationTrigger(0);
  }), D = Lo(w ? E() : {}, { "aria-labelledby": R, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: s, ref: M, style: { ...m.style, ...C, "--input-width": Fi(d.inputElement, !0).width, "--button-width": Fi(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : I, onMouseDown: N, ...Rl(p) }), k = b && d.comboboxState === 1, P = so(k, (r = d.virtual) == null ? void 0 : r.options), A = so(k, d.value), H = ee(($) => d.compare(A, $));
  if (d.virtual) {
    if (P === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(m, { children: Z.createElement(Sn.Provider, { value: P !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: P } } : d }, Z.createElement(lh, { slot: L }, m.children)) });
  }
  let V = Ee();
  return Z.createElement(Zl, { enabled: c ? e.static || b : !1 }, Z.createElement(Sn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: H } }, V({ ourProps: D, theirProps: { ...m, children: Z.createElement(jf, { freeze: k }, typeof m.children == "function" ? (o = m.children) == null ? void 0 : o.call(m, L) : m.children) }, slot: L, defaultTag: mh, features: gh, visible: b, name: "Combobox.Options" })));
}
let wh = "div";
function yh(e, t) {
  var n, r, o, i;
  let s = nn("Combobox.Option"), l = Mn("Combobox.Option"), a = Ie(), { id: c = `headlessui-combobox-option-${a}`, value: u, disabled: h = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? o : !1, order: m = null, ...d } = e, v = _l(s.inputElement), w = s.virtual ? s.activeOptionIndex === s.calculateIndex(u) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === c, g = s.isSelected(u), C = U(null), x = _t({ disabled: h, value: u, domRef: C, order: m }), S = fe(Xl), E = Fe(t, C, S ? S.measureElement : null), M = ee(() => {
    l.setIsTyping(!1), l.onChange(u);
  });
  he(() => l.registerOption(c, x), [x, c]);
  let F = U(!(s.virtual || s.__demoMode));
  he(() => {
    if (!s.virtual && !s.__demoMode) return Qe().requestAnimationFrame(() => {
      F.current = !0;
    });
  }, [s.virtual, s.__demoMode]), he(() => {
    if (F.current && s.comboboxState === 0 && w && s.activationTrigger !== 0) return Qe().requestAnimationFrame(() => {
      var N, D;
      (D = (N = C.current) == null ? void 0 : N.scrollIntoView) == null || D.call(N, { block: "nearest" });
    });
  }, [C, w, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let O = ee((N) => {
    N.preventDefault(), N.button === Wo.Left && (h || (M(), xl() || requestAnimationFrame(() => v()), s.mode === 0 && l.closeCombobox()));
  }), b = ee(() => {
    if (h) return l.goToOption(Se.Nothing);
    let N = s.calculateIndex(u);
    l.goToOption(Se.Specific, N);
  }), p = Sd(), y = ee((N) => p.update(N)), _ = ee((N) => {
    if (!p.wasMoved(N) || h || w) return;
    let D = s.calculateIndex(u);
    l.goToOption(Se.Specific, D, 0);
  }), R = ee((N) => {
    p.wasMoved(N) && (h || w && (s.optionsPropsRef.current.hold || l.goToOption(Se.Nothing)));
  }), L = ne(() => ({ active: w, focus: w, selected: g, disabled: h }), [w, g, h]), I = { id: c, ref: E, role: "option", tabIndex: h === !0 ? void 0 : -1, "aria-disabled": h === !0 ? !0 : void 0, "aria-selected": g, disabled: void 0, onMouseDown: O, onFocus: b, onPointerEnter: y, onMouseEnter: y, onPointerMove: _, onMouseMove: _, onPointerLeave: R, onMouseLeave: R };
  return Ee()({ ourProps: I, theirProps: d, slot: L, defaultTag: wh, name: "Combobox.Option" });
}
let bh = Ce(uh), ao = Ce(ph), Jl = Ce(fh), xh = Bu, Ql = Ce(vh), co = Ce(yh), Sh = Object.assign(bh, { Input: Jl, Button: ao, Label: xh, Options: Ql, Option: co });
function Ch(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Qt(e, "escape");
  Vo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Me.Escape && n(o));
  });
}
function _h() {
  var e;
  let [t] = K(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = K((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return he(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Eh({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Lt(n), o = ee(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((c) => a.contains(c)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: ee((i) => o().some((s) => s.contains(i))) };
}
let ea = me(null);
function ns({ children: e, node: t }) {
  let [n, r] = K(null), o = ta(t ?? n);
  return Z.createElement(ea.Provider, { value: o }, e, o === null && Z.createElement(wn, { features: Yt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = Jt(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function ta(e = null) {
  var t;
  return (t = fe(ea)) != null ? t : e;
}
function qo() {
  let e = U(!1);
  return he(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var un = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(un || {});
function Rh() {
  let e = U(0);
  return Sl(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function na(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let $h = "div";
var $t = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))($t || {});
function Th(e, t) {
  let n = U(null), r = Fe(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  Tn() || (l = 0);
  let c = Lt(n);
  Ah(l, { ownerDocument: c });
  let u = Dh(l, { ownerDocument: c, container: n, initialFocus: o, initialFocusFallback: i });
  Fh(l, { ownerDocument: c, container: n, containers: s, previousActiveElement: u });
  let h = Rh(), m = ee((x) => {
    let S = n.current;
    S && ((E) => E())(() => {
      Ne(h.current, { [un.Forwards]: () => {
        pn(S, at.First, { skipElements: [x.relatedTarget, i] });
      }, [un.Backwards]: () => {
        pn(S, at.Last, { skipElements: [x.relatedTarget, i] });
      } });
    });
  }), d = Qt(!!(l & 2), "focus-trap#tab-lock"), v = kt(), w = U(!1), g = { ref: r, onKeyDown(x) {
    x.key == "Tab" && (w.current = !0, v.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(x) {
    if (!(l & 4)) return;
    let S = na(s);
    n.current instanceof HTMLElement && S.add(n.current);
    let E = x.relatedTarget;
    E instanceof HTMLElement && E.dataset.headlessuiFocusGuard !== "true" && (ra(S, E) || (w.current ? pn(n.current, Ne(h.current, { [un.Forwards]: () => at.Next, [un.Backwards]: () => at.Previous }) | at.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && ut(x.target)));
  } }, C = Ee();
  return Z.createElement(Z.Fragment, null, d && Z.createElement(wn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Yt.Focusable }), C({ ourProps: g, theirProps: a, defaultTag: $h, name: "FocusTrap" }), d && Z.createElement(wn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Yt.Focusable }));
}
let Mh = Ce(Th), Oh = Object.assign(Mh, { features: $t });
function Ih(e = !0) {
  let t = U(Ze.slice());
  return yn(([n], [r]) => {
    r === !0 && n === !1 && or(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ze.slice());
  }, [e, Ze, t]), ee(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Ah(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Ih(n);
  yn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && ut(r());
  }, [n]), Wl(() => {
    n && ut(r());
  });
}
function Dh(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = U(null), s = Qt(!!(e & 1), "focus-trap#initial-focus"), l = qo();
  return yn(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && ut(o.current);
      return;
    }
    let a = n.current;
    a && or(() => {
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
          if (pn(a, at.First | at.AutoFocus) !== no.Error) return;
        } else if (pn(a, at.First) !== no.Error) return;
        if (o != null && o.current && (ut(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function Fh(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = qo(), s = !!(e & 4);
  Vo(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = na(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let c = o.current;
    if (!c) return;
    let u = l.target;
    u && u instanceof HTMLElement ? ra(a, u) ? (o.current = u, ut(u)) : (l.preventDefault(), l.stopPropagation(), ut(c)) : ut(o.current);
  }, !0);
}
function ra(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function oa(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : sa) !== pe || Z.Children.count(e.children) === 1;
}
let hr = me(null);
hr.displayName = "TransitionContext";
var Ph = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ph || {});
function Nh() {
  let e = fe(hr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function kh() {
  let e = fe(pr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let pr = me(null);
pr.displayName = "NestingContext";
function mr(e) {
  return "children" in e ? mr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function ia(e, t) {
  let n = _t(e), r = U([]), o = qo(), i = kt(), s = ee((d, v = mt.Hidden) => {
    let w = r.current.findIndex(({ el: g }) => g === d);
    w !== -1 && (Ne(v, { [mt.Unmount]() {
      r.current.splice(w, 1);
    }, [mt.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var g;
      !mr(r) && o.current && ((g = n.current) == null || g.call(n));
    }));
  }), l = ee((d) => {
    let v = r.current.find(({ el: w }) => w === d);
    return v ? v.state !== "visible" && (v.state = "visible") : r.current.push({ el: d, state: "visible" }), () => s(d, mt.Unmount);
  }), a = U([]), c = U(Promise.resolve()), u = U({ enter: [], leave: [] }), h = ee((d, v, w) => {
    a.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([g]) => g !== d)), t == null || t.chains.current[v].push([d, new Promise((g) => {
      a.current.push(g);
    })]), t == null || t.chains.current[v].push([d, new Promise((g) => {
      Promise.all(u.current[v].map(([C, x]) => x)).then(() => g());
    })]), v === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(v)) : w(v);
  }), m = ee((d, v, w) => {
    Promise.all(u.current[v].splice(0).map(([g, C]) => C)).then(() => {
      var g;
      (g = a.current.shift()) == null || g();
    }).then(() => w(v));
  });
  return ne(() => ({ children: r, register: l, unregister: s, onStart: h, onStop: m, wait: c, chains: u }), [l, s, r, h, m, u, c]);
}
let sa = pe, la = qt.RenderStrategy;
function Lh(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: c, enterFrom: u, enterTo: h, entered: m, leave: d, leaveFrom: v, leaveTo: w, ...g } = e, [C, x] = K(null), S = U(null), E = oa(e), M = Fe(...E ? [S, t, x] : t === null ? [] : [t]), F = (n = g.unmount) == null || n ? mt.Unmount : mt.Hidden, { show: O, appear: b, initial: p } = Nh(), [y, _] = K(O ? "visible" : "hidden"), R = kh(), { register: L, unregister: I } = R;
  he(() => L(S), [L, S]), he(() => {
    if (F === mt.Hidden && S.current) {
      if (O && y !== "visible") {
        _("visible");
        return;
      }
      return Ne(y, { hidden: () => I(S), visible: () => L(S) });
    }
  }, [y, S, L, I, O, F]);
  let N = Tn();
  he(() => {
    if (E && N && y === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [S, y, N, E]);
  let D = p && !b, k = b && O && p, P = U(!1), A = ia(() => {
    P.current || (_("hidden"), I(S));
  }, R), H = ee((ie) => {
    P.current = !0;
    let z = ie ? "enter" : "leave";
    A.onStart(S, z, (G) => {
      G === "enter" ? i == null || i() : G === "leave" && (l == null || l());
    });
  }), V = ee((ie) => {
    let z = ie ? "enter" : "leave";
    P.current = !1, A.onStop(S, z, (G) => {
      G === "enter" ? s == null || s() : G === "leave" && (a == null || a());
    }), z === "leave" && !mr(A) && (_("hidden"), I(S));
  });
  se(() => {
    E && o || (H(O), V(O));
  }, [O, E, o]);
  let $ = !(!o || !E || !N || D), [, T] = $l($, C, O, { start: H, end: V }), q = pt({ ref: M, className: ((r = eo(g.className, k && c, k && u, T.enter && c, T.enter && T.closed && u, T.enter && !T.closed && h, T.leave && d, T.leave && !T.closed && v, T.leave && T.closed && w, !T.transition && O && m)) == null ? void 0 : r.trim()) || void 0, ...Rl(T) }), X = 0;
  y === "visible" && (X |= De.Open), y === "hidden" && (X |= De.Closed), T.enter && (X |= De.Opening), T.leave && (X |= De.Closing);
  let ce = Ee();
  return Z.createElement(pr.Provider, { value: A }, Z.createElement(Ul, { value: X }, ce({ ourProps: q, theirProps: g, defaultTag: sa, features: la, visible: y === "visible", name: "Transition.Child" })));
}
function Vh(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = U(null), l = oa(e), a = Fe(...l ? [s, t] : t === null ? [] : [t]);
  Tn();
  let c = $n();
  if (n === void 0 && c !== null && (n = (c & De.Open) === De.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, h] = K(n ? "visible" : "hidden"), m = ia(() => {
    n || h("hidden");
  }), [d, v] = K(!0), w = U([n]);
  he(() => {
    d !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), v(!1));
  }, [w, n]);
  let g = ne(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  he(() => {
    n ? h("visible") : !mr(m) && s.current !== null && h("hidden");
  }, [n, m]);
  let C = { unmount: o }, x = ee(() => {
    var M;
    d && v(!1), (M = e.beforeEnter) == null || M.call(e);
  }), S = ee(() => {
    var M;
    d && v(!1), (M = e.beforeLeave) == null || M.call(e);
  }), E = Ee();
  return Z.createElement(pr.Provider, { value: m }, Z.createElement(hr.Provider, { value: g }, E({ ourProps: { ...C, as: pe, children: Z.createElement(aa, { ref: a, ...C, ...i, beforeEnter: x, beforeLeave: S }) }, theirProps: {}, defaultTag: pe, features: la, visible: u === "visible", name: "Transition" })));
}
function Hh(e, t) {
  let n = fe(hr) !== null, r = $n() !== null;
  return Z.createElement(Z.Fragment, null, !n && r ? Z.createElement(uo, { ref: t, ...e }) : Z.createElement(aa, { ref: t, ...e }));
}
let uo = Ce(Vh), aa = Ce(Lh), Yo = Ce(Hh), zh = Object.assign(uo, { Child: Yo, Root: uo });
var Bh = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bh || {}), jh = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(jh || {});
let Uh = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Ko = me(null);
Ko.displayName = "DialogContext";
function gr(e) {
  let t = fe(Ko);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, gr), n;
  }
  return t;
}
function Wh(e, t) {
  return Ne(t.type, Uh, e, t);
}
let rs = Ce(function(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: c = !1, unmount: u = !1, ...h } = e, m = U(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (m.current || (m.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = $n();
  o === void 0 && d !== null && (o = (d & De.Open) === De.Open);
  let v = U(null), w = Fe(v, t), g = Lt(v), C = o ? 0 : 1, [x, S] = tt(Wh, { titleId: null, descriptionId: null, panelRef: nr() }), E = ee(() => i(!1)), M = ee((V) => S({ type: 0, id: V })), F = Tn() ? C === 0 : !1, [O, b] = eh(), p = { get current() {
    var V;
    return (V = x.panelRef.current) != null ? V : v.current;
  } }, y = ta(), { resolveContainers: _ } = Eh({ mainTreeNode: y, portals: O, defaultContainers: [p] }), R = d !== null ? (d & De.Closing) === De.Closing : !1;
  gl(c || R ? !1 : F, { allowed: ee(() => {
    var V, $;
    return [($ = (V = v.current) == null ? void 0 : V.closest("[data-headlessui-portal]")) != null ? $ : null];
  }), disallowed: ee(() => {
    var V;
    return [(V = y == null ? void 0 : y.closest("body > *:not(#headlessui-portal-root)")) != null ? V : null];
  }) }), Cl(F, _, (V) => {
    V.preventDefault(), E();
  }), Ch(F, g == null ? void 0 : g.defaultView, (V) => {
    V.preventDefault(), V.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), E();
  }), El(c || R ? !1 : F, g, _), vl(F, v, E);
  let [L, I] = Du(), N = ne(() => [{ dialogState: C, close: E, setTitleId: M, unmount: u }, x], [C, x, E, M, u]), D = ne(() => ({ open: C === 0 }), [C]), k = { ref: w, id: r, role: l, tabIndex: -1, "aria-modal": c ? void 0 : C === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": L, unmount: u }, P = !_h(), A = $t.None;
  F && !c && (A |= $t.RestoreFocus, A |= $t.TabLock, a && (A |= $t.AutoFocus), P && (A |= $t.InitialFocus));
  let H = Ee();
  return Z.createElement(Uf, null, Z.createElement(ts, { force: !0 }, Z.createElement(Zl, null, Z.createElement(Ko.Provider, { value: N }, Z.createElement(Kl, { target: v }, Z.createElement(ts, { force: !1 }, Z.createElement(I, { slot: D }, Z.createElement(b, null, Z.createElement(Oh, { initialFocus: s, initialFocusFallback: v, containers: _, features: A }, Z.createElement(Uu, { value: E }, H({ ourProps: k, theirProps: h, slot: D, defaultTag: Gh, features: qh, visible: C === 0, name: "Dialog" })))))))))));
}), Gh = "div", qh = qt.RenderStrategy | qt.Static;
function Yh(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = $n(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? Z.createElement(ns, null, Z.createElement(zh, { show: r, transition: n, unmount: o.unmount }, Z.createElement(rs, { ref: t, ...o }))) : Z.createElement(ns, null, Z.createElement(rs, { ref: t, open: r, ...o }));
}
let Kh = "div";
function Zh(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = gr("Dialog.Panel"), c = Fe(t, a.panelRef), u = ne(() => ({ open: s === 0 }), [s]), h = ee((g) => {
    g.stopPropagation();
  }), m = { ref: c, id: r, onClick: h }, d = o ? Yo : pe, v = o ? { unmount: l } : {}, w = Ee();
  return Z.createElement(d, { ...v }, w({ ourProps: m, theirProps: i, slot: u, defaultTag: Kh, name: "Dialog.Panel" }));
}
let Xh = "div";
function Jh(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = gr("Dialog.Backdrop"), s = ne(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? Yo : pe, c = n ? { unmount: i } : {}, u = Ee();
  return Z.createElement(a, { ...c }, u({ ourProps: l, theirProps: r, slot: s, defaultTag: Xh, name: "Dialog.Backdrop" }));
}
let Qh = "h2";
function ep(e, t) {
  let n = Ie(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = gr("Dialog.Title"), l = Fe(t);
  se(() => (s(r), () => s(null)), [r, s]);
  let a = ne(() => ({ open: i === 0 }), [i]), c = { ref: l, id: r };
  return Ee()({ ourProps: c, theirProps: o, slot: a, defaultTag: Qh, name: "Dialog.Title" });
}
let tp = Ce(Yh), ca = Ce(Zh), np = Ce(Jh), ua = Ce(ep), rp = Object.assign(tp, { Panel: ca, Title: ua, Description: ku });
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
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
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
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
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
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
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
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
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
    d: "m4.5 12.75 6 6 9-13.5"
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
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
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
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
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
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
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
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const da = /* @__PURE__ */ de(bp);
function xp({
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
const Sp = /* @__PURE__ */ de(xp);
function Cp({
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
const _p = /* @__PURE__ */ de(Cp);
function Ep({
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
const Rp = /* @__PURE__ */ de(Ep);
function $p({
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
const Tp = /* @__PURE__ */ de($p);
function Mp({
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
const Op = /* @__PURE__ */ de(Mp);
function Ip({
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
const fa = /* @__PURE__ */ de(Ip), Ap = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear", invalidOption: "{{value}} (invalid)", useValue: 'Use "{{value}}"' }, input: { clear: "Clear" }, datePicker: { calendarLabel: "Choose date", pickerLabel: "Date picker", hours: "Hours", minutes: "Minutes", seconds: "Seconds", today: "Today", clear: "Clear", done: "Done", weekdays: { sun: "Su", mon: "Mo", tue: "Tu", wed: "We", thu: "Th", fri: "Fr", sat: "Sa" }, previous: "Previous", next: "Next", am: "AM", pm: "PM" } }, Dp = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", rowLimitExceeded: '"{{sheet}}" has {{count}} rows, which exceeds the maximum of {{limit}}. Remove rows to continue.', rowLimitExceededMultiple: "These sheets exceed their row limit: {{sheets}}. Remove rows to continue.", sheetValidationErrors: "This sheet has validation errors. Fix them before uploading.", processing: "Processing data, please wait…", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, Fp = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data", unsupportedFileType: "Unsupported file type. Please upload a {{formats}} file.", fileTooLarge: "File is too large. Maximum size is {{size}}." }, Pp = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, Np = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", undoTooltip: "Undo", redoTooltip: "Redo", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, kp = { boolean: "This value must be true or false", includes: "Value is not in the list of allowed values", integer: "This must be a whole number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique", date: "This is not a valid date", datetime: "This is not a valid date and time", time: "This is not a valid time", dateOutOfRange: "This date is outside the allowed range", asyncError: "This value could not be validated" }, Lp = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, Vp = {
  components: Ap,
  importer: Dp,
  uploader: Fp,
  mapper: Pp,
  sheet: Np,
  validators: kp,
  importStatus: Lp
}, Hp = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer", invalidOption: "{{value}} (invalide)", useValue: "Utiliser « {{value}} »" }, input: { clear: "Effacer" }, datePicker: { calendarLabel: "Choisir une date", pickerLabel: "Sélecteur de date", hours: "Heures", minutes: "Minutes", seconds: "Secondes", today: "Aujourd'hui", clear: "Effacer", done: "Terminé", weekdays: { sun: "Di", mon: "Lu", tue: "Ma", wed: "Me", thu: "Je", fri: "Ve", sat: "Sa" }, previous: "Précédent", next: "Suivant", am: "AM", pm: "PM" } }, zp = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", rowLimitExceeded: "« {{sheet}} » comporte {{count}} lignes, ce qui dépasse le maximum de {{limit}}. Supprimez des lignes pour continuer.", rowLimitExceededMultiple: "Ces feuilles dépassent leur limite de lignes : {{sheets}}. Supprimez des lignes pour continuer.", sheetValidationErrors: "Cette feuille comporte des erreurs de validation. Corrigez-les avant de télécharger.", processing: "Traitement des données, veuillez patienter…", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, Bp = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement", unsupportedFileType: "Type de fichier non pris en charge. Veuillez télécharger un fichier {{formats}}.", fileTooLarge: "Le fichier est trop volumineux. La taille maximale est {{size}}." }, jp = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, Up = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", undoTooltip: "Annuler", redoTooltip: "Rétablir", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, Wp = { boolean: "Cette valeur doit être vraie ou fausse", includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce doit être un nombre entier", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique", date: "Cette date n'est pas valide", datetime: "Cette date et heure ne sont pas valides", time: "Cette heure n'est pas valide", dateOutOfRange: "Cette date est en dehors de la plage autorisée", asyncError: "Cette valeur n'a pas pu être validée" }, Gp = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, qp = {
  components: Hp,
  importer: zp,
  uploader: Bp,
  mapper: jp,
  sheet: Up,
  validators: Wp,
  importStatus: Gp
}, Yp = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar", invalidOption: "{{value}} (inválido)", useValue: 'Usar "{{value}}"' }, input: { clear: "Limpar" }, datePicker: { calendarLabel: "Escolher data", pickerLabel: "Seletor de data", hours: "Horas", minutes: "Minutos", seconds: "Segundos", today: "Hoje", clear: "Limpar", done: "Concluído", weekdays: { sun: "Dom", mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb" }, previous: "Anterior", next: "Próximo", am: "AM", pm: "PM" } }, Kp = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", rowLimitExceeded: '"{{sheet}}" tem {{count}} linhas, o que excede o máximo de {{limit}}. Remova linhas para continuar.', rowLimitExceededMultiple: "Estas planilhas excedem o limite de linhas: {{sheets}}. Remova linhas para continuar.", sheetValidationErrors: "Esta planilha tem erros de validação. Corrija-os antes de enviar.", processing: "Processando dados, aguarde…", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Zp = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente", unsupportedFileType: "Tipo de arquivo não suportado. Por favor, envie um arquivo {{formats}}.", fileTooLarge: "O arquivo é muito grande. O tamanho máximo é {{size}}." }, Xp = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Jp = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", undoTooltip: "Desfazer", redoTooltip: "Refazer", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Qp = { boolean: "Este valor deve ser verdadeiro ou falso", includes: "O valor não está na lista de valores permitidos", integer: "Deve ser um número inteiro", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único", date: "Esta data não é válida", datetime: "Esta data e hora não são válidas", time: "Este horário não é válido", dateOutOfRange: "Esta data está fora do intervalo permitido", asyncError: "Não foi possível validar este valor" }, em = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, tm = {
  components: Yp,
  importer: Kp,
  uploader: Zp,
  mapper: Xp,
  sheet: Jp,
  validators: Qp,
  importStatus: em
}, ha = me(
  {}
);
function nm({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ f(ha.Provider, { value: e, children: t });
}
function ze() {
  return fe(ha);
}
const rm = {
  en: Vp,
  fr: qp,
  "pt-BR": tm
}, om = "en";
function os(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? rm[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function im(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function sm(e, t) {
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
const pa = me(
  {}
);
function lm({ children: e }) {
  const { translationResources: t, locale: n } = ze(), r = n ?? om;
  function o(s, l = {}) {
    const a = os(r, s, t);
    return im(a, l);
  }
  function i(s, l = {}) {
    const a = os(r, s, t);
    return sm(a, l);
  }
  return /* @__PURE__ */ f(pa.Provider, { value: { t: o, tHtml: i }, children: e });
}
function ye() {
  return fe(pa);
}
function fo({
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
      icon: /* @__PURE__ */ f(
        yp,
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
  }, { icon: u, btnVariant: h, bgColor: m } = c[l];
  return /* @__PURE__ */ f(rp, { open: e, onClose: t, className: "hc:relative hc:z-10", children: [
    /* @__PURE__ */ f(
      np,
      {
        transition: !0,
        className: "hc:bg-hello-csv-overlay/75 hc:fixed hc:inset-0 hc:transition-opacity hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ f("div", { className: "hc:fixed hc:inset-0 hc:z-10 hc:w-screen hc:overflow-y-auto", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:min-h-full hc:items-end hc:justify-center hc:p-4 hc:text-center hc:sm:items-center hc:sm:p-0", children: /* @__PURE__ */ f(
      ca,
      {
        transition: !0,
        className: "hc:bg-hello-csv-surface-raised hc:relative hc:transform hc:overflow-hidden hc:rounded-lg hc:px-4 hc:pt-5 hc:pb-4 hc:text-left hc:shadow-xl hc:transition-all hc:data-closed:translate-y-4 hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in hc:sm:my-8 hc:sm:w-full hc:sm:max-w-lg hc:sm:p-6 hc:data-closed:sm:translate-y-0 hc:data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ f("div", { className: "hc:sm:flex hc:sm:items-start", children: [
            u && /* @__PURE__ */ f(
              "div",
              {
                className: `hc:mx-auto hc:flex hc:size-12 hc:shrink-0 hc:items-center hc:justify-center hc:rounded-full ${m} hc:sm:mx-0 hc:sm:size-10`,
                children: u
              }
            ),
            /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:text-center hc:sm:mt-0 hc:sm:ml-4 hc:sm:text-left", children: [
              /* @__PURE__ */ f(
                ua,
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
const am = 100, ma = 8, cm = 50, ga = 5, um = [
  "text/csv",
  "text/tab-separated-values"
], dm = [".csv", ".tsv"], fm = ",", hm = 500, pm = "headlessui-portal-root", Qn = "hello-csv", va = "data-hellocsv-datepicker", vr = {
  autoComplete: "off",
  "data-bwignore": !0,
  "data-1p-ignore": !0,
  "data-lpignore": "true",
  "data-form-type": "other"
}, wa = 52.62, ho = "checkbox-column-id", ya = 110, mm = 50, gm = 500, vm = 150, ba = "Yes", xa = "No", wm = ["true", "1", "yes", "y"], ym = ["false", "0", "no", "n"], bm = de(function({ children: t }, n) {
  return se(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === pm && s.classList.add(Qn);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ f(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Qn}`,
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
function xm({
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
const Sm = /* @__PURE__ */ de(xm);
function Cm({
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
const _m = /* @__PURE__ */ de(Cm);
function Em({
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
const Rm = /* @__PURE__ */ de(Em);
function $m({
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
const Tm = /* @__PURE__ */ de($m);
function Mm({
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
const Om = /* @__PURE__ */ de(Mm);
function Im({
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
const Am = /* @__PURE__ */ de(Im);
function Dm({
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
const Fm = /* @__PURE__ */ de(Dm);
function Pm({
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
const Nm = /* @__PURE__ */ de(Pm);
function km({
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
const Lm = /* @__PURE__ */ de(km);
function Vm({
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
const Sa = /* @__PURE__ */ de(Vm), Ca = de(
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
    const { t: u } = ye(), [h, m] = K(e);
    se(() => {
      m(e);
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
          ...vr,
          "aria-label": a["aria-label"],
          ref: c,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof h == "boolean" ? h.toString() : Array.isArray(h) ? "" : h ?? "",
          onChange: (w) => (n == null ? void 0 : n(v(w))) ?? m(v(w)),
          className: `hello-csv-input ${i} ${o != null ? "hc:pl-10" : ""} ${s ? "hc:pr-10" : ""} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:col-start-1 hc:row-start-1 hc:block hc:rounded-md hc:px-3 hc:py-1.5 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6`,
          onBlur: (w) => t == null ? void 0 : t(v(w))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:ml-3 hc:size-5 hc:self-center hc:text-hello-csv-text-subtle hc:sm:size-4"
      }),
      d && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          "aria-label": u("components.input.clear"),
          onClick: (w) => {
            w.stopPropagation(), n == null || n("");
          },
          className: "hc:col-end-2 hc:row-start-1 hc:flex hc:cursor-pointer hc:items-center hc:justify-self-end hc:pr-2",
          children: /* @__PURE__ */ f(
            Sa,
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
function Hm(e, t, n) {
  return n.searchInputAsFilter && e == null ? { type: "ignore" } : e != null && t != null && n.compareFunction(e, t) ? { type: "change", value: null } : { type: "change", value: e };
}
function Ot({
  value: e,
  options: t,
  onChange: n,
  onClose: r,
  multiple: o = !1,
  compareFunction: i = (g, C) => g === C,
  clearable: s = !1,
  searchable: l = !1,
  placeholder: a,
  classes: c,
  displayPlaceholderWhenSelected: u = !1,
  autoFocus: h = !1,
  immediate: m = !1,
  searchInputAsFilter: d = !1,
  creatable: v = !1,
  ...w
}) {
  const { t: g } = ye(), [C, x] = K(""), S = U(null);
  se(() => {
    var $;
    h && (($ = S.current) == null || $.focus());
  }, []);
  const E = ($) => o && Array.isArray(e) ? e.some((T) => i(T, $)) : i(e, $), M = ($) => {
    if (x(""), o) {
      const q = Array.isArray($) ? $ : [$];
      n(q);
      return;
    }
    const T = Hm(
      $ ?? null,
      e,
      { searchInputAsFilter: d, compareFunction: i }
    );
    T.type === "change" && n(T.value);
  }, F = () => {
    x(""), n(o ? [] : null);
  }, O = C.trim(), b = ($) => t.some(
    (T) => [T.label, T.value].some(
      (q) => String(q).toLowerCase() === $.toLowerCase()
    )
  ), p = v && !o && e != null && e !== "" ? String(e) : "", y = p && !b(p) ? [{ label: p, value: e }, ...t] : t, _ = v && l && O && !b(O) && O !== p ? [
    {
      label: g("components.select.useValue", { value: O }),
      value: O
    }
  ] : [], R = y.filter(
    ($) => E($.value)
  ), L = R.map(($) => $.label).join(", "), I = [
    ...C && l ? y.filter(
      ($) => String($.label).toLowerCase().includes(C.toLowerCase())
    ) : y,
    ..._
  ], N = a ?? g("components.select.optionPlaceholder"), D = () => d ? C : l ? L : R.length > 0 ? u ? `${N}: ${L}` : L : "", P = I.some(($) => $.group) ? Object.entries(
    I.reduce(
      ($, T) => {
        const q = T.group || "ungrouped";
        return $[q] = $[q] || [], $[q].push(T), $;
      },
      {}
    )
  ).map(([$, T]) => ({
    label: $,
    items: T
  })) : [{ label: null, items: I }], A = P.every(({ items: $ }) => $.length === 0), H = d ? C.length > 0 : s && R.length > 0, V = () => {
    var $;
    d ? (x(""), S.current && (S.current.value = ""), ($ = S.current) == null || $.focus()) : F();
  };
  return /* @__PURE__ */ f(
    Sh,
    {
      value: e ?? (o ? [] : null),
      onChange: M,
      onClose: r,
      multiple: o,
      immediate: m,
      children: /* @__PURE__ */ f("div", { className: "hc:relative", children: [
        /* @__PURE__ */ f(
          ao,
          {
            className: "hc:w-full",
            "aria-label": w["aria-label"] ?? a,
            children: /* @__PURE__ */ f(
              Jl,
              {
                ...vr,
                ref: S,
                className: `hello-csv-input ${c} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:block hc:w-full hc:cursor-pointer hc:truncate hc:rounded-md hc:py-1.5 hc:focus:cursor-text ${H ? "hc:pr-12" : "hc:pr-2"} hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:pl-3 hc:text-left hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm`,
                displayValue: D,
                onChange: ($) => l && x($.target.value),
                placeholder: N,
                readOnly: !l
              }
            )
          }
        ),
        H && /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            "aria-label": g("components.select.clear"),
            onMouseDown: ($) => {
              $.preventDefault(), $.stopPropagation();
            },
            onClick: ($) => {
              $.stopPropagation(), V();
            },
            className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-6 hc:flex hc:cursor-pointer hc:items-center",
            children: /* @__PURE__ */ f(
              Sa,
              {
                className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ f(ao, { className: "hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2", children: /* @__PURE__ */ f(
          Am,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:col-start-1 hc:row-start-1 hc:size-5 hc:self-center hc:justify-self-end hc:sm:size-4"
          }
        ) }),
        /* @__PURE__ */ f(
          Ql,
          {
            anchor: "bottom",
            transition: !0,
            className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:absolute hc:z-99 hc:mt-1 hc:max-h-60 hc:w-[var(--input-width)] hc:overflow-auto hc:rounded-md hc:py-1 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:data-leave:transition hc:data-leave:duration-100 hc:data-leave:ease-in hc:data-closed:data-leave:opacity-0 hc:sm:text-sm",
            children: [
              A && /* @__PURE__ */ f(
                co,
                {
                  disabled: !0,
                  value: null,
                  className: "hc:text-hello-csv-text-subtle hc:pointer-events-none hc:relative hc:flex hc:items-center hc:justify-center hc:py-2 hc:pr-9 hc:pl-3 hc:select-none",
                  children: /* @__PURE__ */ f("span", { className: "hc:block hc:truncate hc:font-normal", children: g("components.select.noOptions") })
                },
                "no-options"
              ),
              P.map(({ label: $, items: T }) => /* @__PURE__ */ f("div", { children: [
                $ && /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-subtle hc:py-2 hc:pr-9 hc:pl-3 hc:uppercase", children: $ }),
                T.map((q) => /* @__PURE__ */ f(
                  co,
                  {
                    value: q.value,
                    className: ({ focus: X }) => `hc:cursor-default hc:items-center hc:py-2 hc:pr-9 hc:pl-3 hc:outline-hidden hc:select-none hc:relative hc:flex ${X ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text"}`,
                    children: ({ focus: X, selected: ce }) => /* @__PURE__ */ f(pe, { children: [
                      q.icon,
                      /* @__PURE__ */ f(
                        "span",
                        {
                          className: `hc:block hc:truncate ${ce ? "hc:font-semibold" : "hc:font-normal"}`,
                          children: q.label
                        }
                      ),
                      ce && /* @__PURE__ */ f(
                        "span",
                        {
                          className: `hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:items-center hc:pr-4 ${X ? "hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-primary"}`,
                          children: /* @__PURE__ */ f(
                            _m,
                            {
                              "aria-hidden": "true",
                              className: "hc:h-5 hc:w-5"
                            }
                          )
                        }
                      )
                    ] })
                  },
                  typeof q.value == "object" ? JSON.stringify(q.value) : String(q.value)
                ))
              ] }, `${$ || "all"}:${C}`))
            ]
          }
        )
      ] })
    }
  );
}
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = { exports: {} }, zm = Bn.exports, is;
function Bm() {
  return is || (is = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(zm, function() {
      var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", a = "hour", c = "day", u = "week", h = "month", m = "quarter", d = "year", v = "date", w = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
        var N = ["th", "st", "nd", "rd"], D = I % 100;
        return "[" + I + (N[(D - 20) % 10] || N[D] || N[0]) + "]";
      } }, S = function(I, N, D) {
        var k = String(I);
        return !k || k.length >= N ? I : "" + Array(N + 1 - k.length).join(D) + I;
      }, E = { s: S, z: function(I) {
        var N = -I.utcOffset(), D = Math.abs(N), k = Math.floor(D / 60), P = D % 60;
        return (N <= 0 ? "+" : "-") + S(k, 2, "0") + ":" + S(P, 2, "0");
      }, m: function I(N, D) {
        if (N.date() < D.date()) return -I(D, N);
        var k = 12 * (D.year() - N.year()) + (D.month() - N.month()), P = N.clone().add(k, h), A = D - P < 0, H = N.clone().add(k + (A ? -1 : 1), h);
        return +(-(k + (D - P) / (A ? P - H : H - P)) || 0);
      }, a: function(I) {
        return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
      }, p: function(I) {
        return { M: h, y: d, w: u, d: c, D: v, h: a, m: l, s, ms: i, Q: m }[I] || String(I || "").toLowerCase().replace(/s$/, "");
      }, u: function(I) {
        return I === void 0;
      } }, M = "en", F = {};
      F[M] = x;
      var O = "$isDayjsObject", b = function(I) {
        return I instanceof R || !(!I || !I[O]);
      }, p = function I(N, D, k) {
        var P;
        if (!N) return M;
        if (typeof N == "string") {
          var A = N.toLowerCase();
          F[A] && (P = A), D && (F[A] = D, P = A);
          var H = N.split("-");
          if (!P && H.length > 1) return I(H[0]);
        } else {
          var V = N.name;
          F[V] = N, P = V;
        }
        return !k && P && (M = P), P || !k && M;
      }, y = function(I, N) {
        if (b(I)) return I.clone();
        var D = typeof N == "object" ? N : {};
        return D.date = I, D.args = arguments, new R(D);
      }, _ = E;
      _.l = p, _.i = b, _.w = function(I, N) {
        return y(I, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset });
      };
      var R = function() {
        function I(D) {
          this.$L = p(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[O] = !0;
        }
        var N = I.prototype;
        return N.parse = function(D) {
          this.$d = function(k) {
            var P = k.date, A = k.utc;
            if (P === null) return /* @__PURE__ */ new Date(NaN);
            if (_.u(P)) return /* @__PURE__ */ new Date();
            if (P instanceof Date) return new Date(P);
            if (typeof P == "string" && !/Z$/i.test(P)) {
              var H = P.match(g);
              if (H) {
                var V = H[2] - 1 || 0, $ = (H[7] || "0").substring(0, 3);
                return A ? new Date(Date.UTC(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, $)) : new Date(H[1], V, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, $);
              }
            }
            return new Date(P);
          }(D), this.init();
        }, N.init = function() {
          var D = this.$d;
          this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
        }, N.$utils = function() {
          return _;
        }, N.isValid = function() {
          return this.$d.toString() !== w;
        }, N.isSame = function(D, k) {
          var P = y(D);
          return this.startOf(k) <= P && P <= this.endOf(k);
        }, N.isAfter = function(D, k) {
          return y(D) < this.startOf(k);
        }, N.isBefore = function(D, k) {
          return this.endOf(k) < y(D);
        }, N.$g = function(D, k, P) {
          return _.u(D) ? this[k] : this.set(P, D);
        }, N.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, N.valueOf = function() {
          return this.$d.getTime();
        }, N.startOf = function(D, k) {
          var P = this, A = !!_.u(k) || k, H = _.p(D), V = function(G, re) {
            var Y = _.w(P.$u ? Date.UTC(P.$y, re, G) : new Date(P.$y, re, G), P);
            return A ? Y : Y.endOf(c);
          }, $ = function(G, re) {
            return _.w(P.toDate()[G].apply(P.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), P);
          }, T = this.$W, q = this.$M, X = this.$D, ce = "set" + (this.$u ? "UTC" : "");
          switch (H) {
            case d:
              return A ? V(1, 0) : V(31, 11);
            case h:
              return A ? V(1, q) : V(0, q + 1);
            case u:
              var ie = this.$locale().weekStart || 0, z = (T < ie ? T + 7 : T) - ie;
              return V(A ? X - z : X + (6 - z), q);
            case c:
            case v:
              return $(ce + "Hours", 0);
            case a:
              return $(ce + "Minutes", 1);
            case l:
              return $(ce + "Seconds", 2);
            case s:
              return $(ce + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, N.endOf = function(D) {
          return this.startOf(D, !1);
        }, N.$set = function(D, k) {
          var P, A = _.p(D), H = "set" + (this.$u ? "UTC" : ""), V = (P = {}, P[c] = H + "Date", P[v] = H + "Date", P[h] = H + "Month", P[d] = H + "FullYear", P[a] = H + "Hours", P[l] = H + "Minutes", P[s] = H + "Seconds", P[i] = H + "Milliseconds", P)[A], $ = A === c ? this.$D + (k - this.$W) : k;
          if (A === h || A === d) {
            var T = this.clone().set(v, 1);
            T.$d[V]($), T.init(), this.$d = T.set(v, Math.min(this.$D, T.daysInMonth())).$d;
          } else V && this.$d[V]($);
          return this.init(), this;
        }, N.set = function(D, k) {
          return this.clone().$set(D, k);
        }, N.get = function(D) {
          return this[_.p(D)]();
        }, N.add = function(D, k) {
          var P, A = this;
          D = Number(D);
          var H = _.p(k), V = function(q) {
            var X = y(A);
            return _.w(X.date(X.date() + Math.round(q * D)), A);
          };
          if (H === h) return this.set(h, this.$M + D);
          if (H === d) return this.set(d, this.$y + D);
          if (H === c) return V(1);
          if (H === u) return V(7);
          var $ = (P = {}, P[l] = r, P[a] = o, P[s] = n, P)[H] || 1, T = this.$d.getTime() + D * $;
          return _.w(T, this);
        }, N.subtract = function(D, k) {
          return this.add(-1 * D, k);
        }, N.format = function(D) {
          var k = this, P = this.$locale();
          if (!this.isValid()) return P.invalidDate || w;
          var A = D || "YYYY-MM-DDTHH:mm:ssZ", H = _.z(this), V = this.$H, $ = this.$m, T = this.$M, q = P.weekdays, X = P.months, ce = P.meridiem, ie = function(re, Y, W, Q) {
            return re && (re[Y] || re(k, A)) || W[Y].slice(0, Q);
          }, z = function(re) {
            return _.s(V % 12 || 12, re, "0");
          }, G = ce || function(re, Y, W) {
            var Q = re < 12 ? "AM" : "PM";
            return W ? Q.toLowerCase() : Q;
          };
          return A.replace(C, function(re, Y) {
            return Y || function(W) {
              switch (W) {
                case "YY":
                  return String(k.$y).slice(-2);
                case "YYYY":
                  return _.s(k.$y, 4, "0");
                case "M":
                  return T + 1;
                case "MM":
                  return _.s(T + 1, 2, "0");
                case "MMM":
                  return ie(P.monthsShort, T, X, 3);
                case "MMMM":
                  return ie(X, T);
                case "D":
                  return k.$D;
                case "DD":
                  return _.s(k.$D, 2, "0");
                case "d":
                  return String(k.$W);
                case "dd":
                  return ie(P.weekdaysMin, k.$W, q, 2);
                case "ddd":
                  return ie(P.weekdaysShort, k.$W, q, 3);
                case "dddd":
                  return q[k.$W];
                case "H":
                  return String(V);
                case "HH":
                  return _.s(V, 2, "0");
                case "h":
                  return z(1);
                case "hh":
                  return z(2);
                case "a":
                  return G(V, $, !0);
                case "A":
                  return G(V, $, !1);
                case "m":
                  return String($);
                case "mm":
                  return _.s($, 2, "0");
                case "s":
                  return String(k.$s);
                case "ss":
                  return _.s(k.$s, 2, "0");
                case "SSS":
                  return _.s(k.$ms, 3, "0");
                case "Z":
                  return H;
              }
              return null;
            }(re) || H.replace(":", "");
          });
        }, N.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, N.diff = function(D, k, P) {
          var A, H = this, V = _.p(k), $ = y(D), T = ($.utcOffset() - this.utcOffset()) * r, q = this - $, X = function() {
            return _.m(H, $);
          };
          switch (V) {
            case d:
              A = X() / 12;
              break;
            case h:
              A = X();
              break;
            case m:
              A = X() / 3;
              break;
            case u:
              A = (q - T) / 6048e5;
              break;
            case c:
              A = (q - T) / 864e5;
              break;
            case a:
              A = q / o;
              break;
            case l:
              A = q / r;
              break;
            case s:
              A = q / n;
              break;
            default:
              A = q;
          }
          return P ? A : _.a(A);
        }, N.daysInMonth = function() {
          return this.endOf(h).$D;
        }, N.$locale = function() {
          return F[this.$L];
        }, N.locale = function(D, k) {
          if (!D) return this.$L;
          var P = this.clone(), A = p(D, k, !0);
          return A && (P.$L = A), P;
        }, N.clone = function() {
          return _.w(this.$d, this);
        }, N.toDate = function() {
          return new Date(this.valueOf());
        }, N.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, N.toISOString = function() {
          return this.$d.toISOString();
        }, N.toString = function() {
          return this.$d.toUTCString();
        }, I;
      }(), L = R.prototype;
      return y.prototype = L, [["$ms", i], ["$s", s], ["$m", l], ["$H", a], ["$W", c], ["$M", h], ["$y", d], ["$D", v]].forEach(function(I) {
        L[I[1]] = function(N) {
          return this.$g(N, I[0], I[1]);
        };
      }), y.extend = function(I, N) {
        return I.$i || (I(N, R, y), I.$i = !0), y;
      }, y.locale = p, y.isDayjs = b, y.unix = function(I) {
        return y(1e3 * I);
      }, y.en = F[M], y.Ls = F, y.p = {}, y;
    });
  }(Bn)), Bn.exports;
}
var _a = Bm();
const lt = /* @__PURE__ */ Zo(_a);
var jn = { exports: {} }, jm = jn.exports, ss;
function Um() {
  return ss || (ss = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(jm, function() {
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
      }], m = function(g) {
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
        var C = m("months"), x = (m("monthsShort") || C.map(function(S) {
          return S.slice(0, 3);
        })).indexOf(g) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], MMMM: [l, function(g) {
        var C = m("months").indexOf(g) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(g) {
        this.year = c(g);
      }], YYYY: [/\d{4}/, u("year")], Z: h, ZZ: h };
      function w(g) {
        var C, x;
        C = g, x = a && a.formats;
        for (var S = (g = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(y, _, R) {
          var L = R && R.toUpperCase();
          return _ || x[R] || n[R] || x[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, N, D) {
            return N || D.slice(1);
          });
        })).match(r), E = S.length, M = 0; M < E; M += 1) {
          var F = S[M], O = v[F], b = O && O[0], p = O && O[1];
          S[M] = p ? { regex: b, parser: p } : F.replace(/^\[|\]$/g, "");
        }
        return function(y) {
          for (var _ = {}, R = 0, L = 0; R < E; R += 1) {
            var I = S[R];
            if (typeof I == "string") L += I.length;
            else {
              var N = I.regex, D = I.parser, k = y.slice(L), P = N.exec(k)[0];
              D.call(_, P), y = y.replace(P, "");
            }
          }
          return function(A) {
            var H = A.afternoon;
            if (H !== void 0) {
              var V = A.hours;
              H ? V < 12 && (A.hours += 12) : V === 12 && (A.hours = 0), delete A.afternoon;
            }
          }(_), _;
        };
      }
      return function(g, C, x) {
        x.p.customParseFormat = !0, g && g.parseTwoDigitYear && (c = g.parseTwoDigitYear);
        var S = C.prototype, E = S.parse;
        S.parse = function(M) {
          var F = M.date, O = M.utc, b = M.args;
          this.$u = O;
          var p = b[1];
          if (typeof p == "string") {
            var y = b[2] === !0, _ = b[3] === !0, R = y || _, L = b[2];
            _ && (L = b[2]), a = this.$locale(), !y && L && (a = x.Ls[L]), this.$d = function(k, P, A, H) {
              try {
                if (["x", "X"].indexOf(P) > -1) return new Date((P === "X" ? 1e3 : 1) * k);
                var V = w(P)(k), $ = V.year, T = V.month, q = V.day, X = V.hours, ce = V.minutes, ie = V.seconds, z = V.milliseconds, G = V.zone, re = V.week, Y = /* @__PURE__ */ new Date(), W = q || ($ || T ? 1 : Y.getDate()), Q = $ || Y.getFullYear(), j = 0;
                $ && !T || (j = T > 0 ? T - 1 : Y.getMonth());
                var J, oe = X || 0, be = ce || 0, ue = ie || 0, ge = z || 0;
                return G ? new Date(Date.UTC(Q, j, W, oe, be, ue, ge + 60 * G.offset * 1e3)) : A ? new Date(Date.UTC(Q, j, W, oe, be, ue, ge)) : (J = new Date(Q, j, W, oe, be, ue, ge), re && (J = H(J).week(re).toDate()), J);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(F, p, O, x), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), R && F != this.format(p) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (p instanceof Array) for (var I = p.length, N = 1; N <= I; N += 1) {
            b[1] = p[N - 1];
            var D = x.apply(this, b);
            if (D.isValid()) {
              this.$d = D.$d, this.$L = D.$L, this.init();
              break;
            }
            N === I && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, M);
        };
      };
    });
  }(jn)), jn.exports;
}
var Wm = Um();
const Gm = /* @__PURE__ */ Zo(Wm);
_a.extend(Gm);
const Ea = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DDTHH:mm:ss",
  time: "HH:mm:ss"
};
function po(e, t = !1) {
  return e === "date" || t ? Ea[e] : e === "time" ? "HH:mm" : "YYYY-MM-DDTHH:mm";
}
function Xo(e, t = !1, n = "12h") {
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
function qm(e, t = {}) {
  const n = [
    t.outputFormat,
    t.displayFormat,
    Ea[e],
    po(e, !0),
    po(e, !1)
  ];
  for (const r of ["12h", "24h"])
    for (const o of [!0, !1])
      n.push(Xo(e, o, r));
  return n.filter((r) => !!r);
}
function Xe(e, t, n = {}) {
  if (e == null || e.trim() === "")
    return null;
  const r = lt(e.trim(), qm(t, n), !0);
  return r.isValid() ? r : null;
}
function mo(e, t, n = {}) {
  return !e || !e.isValid() ? "" : e.format(
    n.outputFormat ?? po(t, n.showSeconds)
  );
}
function Ym(e, t, n = {}) {
  if (e.trim() === "")
    return "";
  const r = Xe(e, t, n);
  return r ? mo(r, t, n) : e;
}
function Ra(e, t, n = {}) {
  if (e == null || e === "")
    return "";
  const r = Xe(e, t, n);
  return r ? r.format(
    n.displayFormat ?? Xo(
      t,
      n.showSeconds,
      n.hourFormat
    )
  ) : e;
}
function Km(e) {
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
function $a(e, t, n) {
  return !!(t && e.isBefore(t, "day") || n && e.isAfter(n, "day"));
}
function Zm(e, t, n) {
  return !!(t && e.isBefore(t) || n && e.isAfter(n));
}
function Xm({
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
  const h = { outputFormat: n, displayFormat: r, showSeconds: s, hourFormat: l }, m = l !== "24h", d = e === "date" || e === "datetime", v = e === "time" || e === "datetime", w = Xe(a ?? t, e, h), [g, C] = K(w), [x, S] = K(
    a ?? Ra(t, e, h)
  ), [E, M] = K(
    w ?? lt().startOf("month")
  ), [F, O] = K(!0), [b, p] = K("days"), y = Xe(o, e, h), _ = Xe(i, e, h);
  function R(W) {
    return W.format(
      r ?? Xo(e, s, l)
    );
  }
  function L() {
    const W = x.trim();
    if (W === "") {
      c("");
      return;
    }
    const Q = Xe(W, e, h);
    c(Q ? mo(Q, e, h) : W);
  }
  const I = U(() => {
  });
  I.current = L;
  function N(W, { commit: Q }) {
    C(W), M(W.startOf("month")), S(R(W)), Q && c(mo(W, e, h));
  }
  function D(W) {
    const Q = W.target.value;
    S(Q);
    const j = Xe(Q, e, h);
    j && (C(j), M(j.startOf("month")));
  }
  function k(W) {
    var j, J;
    const Q = W.format("YYYY-MM-DD");
    (J = (j = u.current) == null ? void 0 : j[Q]) == null || J.focus();
  }
  function P(W) {
    if (W.key === "Enter")
      W.preventDefault(), W.stopPropagation(), L();
    else if (W.key === "Escape" && F)
      W.preventDefault(), W.stopPropagation(), O(!1);
    else if (W.key === "ArrowDown" && d) {
      W.preventDefault(), O(!0);
      const Q = g ?? lt();
      M(Q.startOf("month")), requestAnimationFrame(() => k(Q));
    }
  }
  function A(W) {
    if ($a(W, y, _)) return;
    const Q = g ?? lt().startOf("day"), j = W.hour(Q.hour()).minute(Q.minute()).second(Q.second());
    N(j, { commit: e === "date" });
  }
  function H(W, Q) {
    let j = null;
    switch (W.key) {
      case "ArrowLeft":
        j = Q.subtract(1, "day");
        break;
      case "ArrowRight":
        j = Q.add(1, "day");
        break;
      case "ArrowUp":
        j = Q.subtract(1, "week");
        break;
      case "ArrowDown":
        j = Q.add(1, "week");
        break;
      case "PageUp":
        j = Q.subtract(1, "month");
        break;
      case "PageDown":
        j = Q.add(1, "month");
        break;
      case "Enter":
      case " ":
        W.preventDefault(), W.stopPropagation(), A(Q);
        return;
      default:
        return;
    }
    W.preventDefault(), W.stopPropagation(), M(j.startOf("month")), requestAnimationFrame(() => k(j));
  }
  function V(W, Q) {
    const j = Number(Q);
    if (Number.isNaN(j)) return;
    const oe = (g ?? lt().startOf("day"))[W](j);
    C(oe), S(R(oe));
  }
  const $ = (g == null ? void 0 : g.hour()) ?? 0, T = $ >= 12 ? "PM" : "AM", q = m ? $ % 12 || 12 : $;
  function X(W) {
    const Q = Number(W);
    if (Number.isNaN(Q)) return;
    const j = g ?? lt().startOf("day");
    let J = Q;
    if (m) {
      const be = (Q % 12 + 12) % 12;
      J = T === "PM" ? be + 12 : be;
    }
    const oe = j.hour(J);
    C(oe), S(R(oe));
  }
  function ce(W) {
    if (W === T) return;
    const Q = g ?? lt().startOf("day"), j = Q.hour() % 12, J = Q.hour(W === "PM" ? j + 12 : j);
    C(J), S(R(J));
  }
  function ie() {
    M(b === "days" ? E.subtract(1, "month") : b === "months" ? E.subtract(1, "year") : E.subtract(10, "year"));
  }
  function z() {
    M(b === "days" ? E.add(1, "month") : b === "months" ? E.add(1, "year") : E.add(10, "year"));
  }
  function G() {
    p(b === "days" ? "months" : "years");
  }
  function re(W) {
    M(E.month(W)), p("days");
  }
  function Y(W) {
    M(E.year(W)), p("months");
  }
  return {
    // state
    open: F,
    setOpen: O,
    text: x,
    draft: g,
    viewMonth: E,
    view: b,
    minBound: y,
    maxBound: _,
    // derived
    is12h: m,
    hasCalendar: d,
    hasTime: v,
    meridiem: T,
    hourFieldValue: q,
    commitTextRef: I,
    // trigger handlers
    handleInput: D,
    handleInputKeyDown: P,
    commitText: L,
    // calendar handlers
    handlePrev: ie,
    handleNext: z,
    handleTitleClick: G,
    selectDay: A,
    selectMonth: re,
    selectYear: Y,
    handleGridKeyDown: H,
    // time handlers
    setHour: X,
    setTimePart: V,
    setMeridiem: ce
  };
}
function wr(e) {
  return e.type === "date" || e.type === "datetime" || e.type === "time";
}
const Jm = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep",
  "undoRedo"
], Qm = (e) => e == null, Ta = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function eg(e, t) {
  return e.flatMap((n) => {
    if (n.maxRows == null)
      return [];
    const r = t.find((i) => i.sheetId === n.id), o = r != null ? Ta(r).length : 0;
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
  return Qm(e) ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
}
const ls = (e) => [...new Set(e)];
function jt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function mn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function tg(e, t) {
  if (e == null)
    return "";
  let n = String(e);
  return n = n.replace(/"/g, '""'), (n.includes('"') || n.includes(t) || /[\n\r]/.test(n)) && (n = `"${n}"`), n;
}
function Ma(e, t) {
  return e.map(
    (n) => n.map((r) => tg(r, t)).join(t)
  ).join(`
`);
}
function Jo(e, t, n, r) {
  const o = e.columns.map(
    (l) => r === "label" ? l.label : l.id
  ), i = t.map(
    (l) => e.columns.map((a) => {
      const c = l[a.id];
      return r === "value" || c == null ? Array.isArray(c) ? c.join(", ") : c : Aa(
        e,
        a,
        c,
        n
      );
    })
  ), s = Ma([o, ...i], fm);
  return new Blob([s], { type: "text/csv" });
}
function Oa(e, t, n, r) {
  const o = Jo(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function Ia(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function go(e, t) {
  return Array.isArray(t) ? t.map((n) => e[n] ?? n).join(", ") : typeof t != "string" ? t : e[t] ?? t;
}
function Aa(e, t, n, r) {
  var o, i, s;
  if (t.type === "enum")
    return go(
      ((o = r[e.id]) == null ? void 0 : o[t.id]) ?? {},
      n
    );
  if (t.type === "reference" && n != null)
    return go(
      Ia(t, r),
      n
    );
  if (t.type === "boolean") {
    if (n === !0)
      return ((i = t.typeArguments) == null ? void 0 : i.trueLabel) ?? ba;
    if (n === !1)
      return ((s = t.typeArguments) == null ? void 0 : s.falseLabel) ?? xa;
  }
  return wr(t) && typeof n == "string" ? Ra(
    n,
    t.type,
    t.typeArguments
  ) : n;
}
function Qo(e) {
  return e.map((t) => ({ ...t, rows: Ta(t) }));
}
const as = 4, Fn = 8;
function ng({
  open: e,
  inputRef: t,
  panelRef: n,
  onScrollAway: r
}) {
  const [o, i] = K({
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
      const d = a.offsetHeight, v = a.offsetWidth, w = u - c.bottom, C = w < d && c.top > w ? c.top - d - as : c.bottom + as, x = jt(
        C,
        Fn,
        u - d - Fn
      ), S = jt(
        c.left,
        Fn,
        h - v - Fn
      );
      i({ top: x + window.scrollY, left: S + window.scrollX });
    };
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [e]), o;
}
const rg = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function og({
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
  onDayKeyDown: m
}) {
  const { t: d } = ye(), v = Math.floor(t.year() / 10) * 10, w = Km(t), g = lt(), C = n ?? t.startOf("month"), x = e === "days" ? t.format("MMMM YYYY") : e === "months" ? t.format("YYYY") : `${v} - ${v + 9}`;
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
          children: /* @__PURE__ */ f(Tm, { "aria-hidden": "true", className: "hc:size-5" })
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
          children: /* @__PURE__ */ f(Om, { "aria-hidden": "true", className: "hc:size-5" })
        }
      )
    ] }),
    e === "days" && /* @__PURE__ */ f("div", { role: "grid", "aria-label": d("components.datePicker.calendarLabel"), children: [
      /* @__PURE__ */ f("div", { role: "row", className: "hc:mb-1 hc:grid hc:grid-cols-7", children: rg.map((S) => /* @__PURE__ */ f(
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
            const M = E.format("YYYY-MM-DD"), F = n != null && E.isSame(n, "day"), O = E.isSame(g, "day"), b = !E.isSame(t, "month"), p = $a(E, r, o), y = E.isSame(C, "day");
            return /* @__PURE__ */ f("div", { role: "gridcell", children: /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                ref: (_) => {
                  i.current && (i.current[M] = _);
                },
                tabIndex: y ? 0 : -1,
                disabled: p,
                "aria-label": E.format("dddd, MMMM D, YYYY"),
                "aria-selected": F,
                "aria-current": O ? "date" : void 0,
                onClick: () => c(E),
                onKeyDown: (_) => m(_, E),
                className: `hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:rounded hc:text-sm ${F ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast hc:cursor-pointer" : p ? "hc:text-hello-csv-text-subtle hc:cursor-not-allowed hc:opacity-50" : b ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted hc:cursor-pointer" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer"} ${O && !F ? "hc:ring-hello-csv-primary hc:ring-1" : ""}`,
                children: E.date()
              }
            ) }, M);
          })
        },
        S[0].format("YYYY-MM-DD")
      ))
    ] }),
    e === "months" && /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const M = E === t.month();
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onMouseDown: (F) => F.preventDefault(),
          onClick: () => u(E),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${M ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: lt().month(E).format("MMM")
        },
        E
      );
    }) }),
    e === "years" && /* @__PURE__ */ f("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, E) => {
      const M = v - 1 + E, F = M === t.year(), O = M < v || M > v + 9;
      return /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onMouseDown: (b) => b.preventDefault(),
          onClick: () => h(M),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${F ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : O ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: M
        },
        M
      );
    }) })
  ] });
}
function ig({
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
  return /* @__PURE__ */ f(
    "div",
    {
      className: `hc:flex hc:items-end hc:gap-2 ${r ? "hc:border-hello-csv-border hc:mt-3 hc:border-t hc:pt-3" : ""}`,
      children: [
        /* @__PURE__ */ f(
          Pr,
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
          Pr,
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
            Pr,
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
            onMouseDown: (m) => m.preventDefault(),
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
function Pr({ label: e, value: t, max: n, min: r = 0, onChange: o }) {
  return /* @__PURE__ */ f("label", { className: "hc:flex hc:flex-col hc:text-xs", children: [
    /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text-subtle hc:mb-1", children: e }),
    /* @__PURE__ */ f(
      "input",
      {
        ...vr,
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
const sg = "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:block hc:w-full hc:rounded-md hc:py-1.5 hc:pr-10 hc:pl-3 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6";
function lg({
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
  const { t: h } = ye(), m = U(null), d = U(null), v = U(null), w = U({}), g = Xm({
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
  }), { open: C, setOpen: x, hasCalendar: S, hasTime: E, commitTextRef: M } = g, F = ng({
    open: C,
    inputRef: d,
    panelRef: v,
    onScrollAway: () => M.current()
  });
  return se(() => {
    var b, p, y;
    (b = d.current) == null || b.focus();
    const O = ((p = d.current) == null ? void 0 : p.value.length) ?? 0;
    (y = d.current) == null || y.setSelectionRange(O, O);
  }, []), se(() => {
    const O = (p) => {
      var y, _;
      return !!p && (!!((y = m.current) != null && y.contains(p)) || !!((_ = v.current) != null && _.contains(p)));
    }, b = (p) => {
      O(p.target) && (O(p.relatedTarget) || M.current());
    };
    return document.addEventListener("focusout", b), () => document.removeEventListener("focusout", b);
  }, [M]), /* @__PURE__ */ f("div", { ref: m, className: "hc:relative hc:w-full", children: [
    /* @__PURE__ */ f("div", { className: "hc:relative", children: [
      /* @__PURE__ */ f(
        "input",
        {
          ...vr,
          ref: d,
          "aria-label": u["aria-label"],
          type: "text",
          className: sg,
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
          onClick: () => x((O) => !O),
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2 hc:outline-hidden",
          children: E && !S ? /* @__PURE__ */ f(Nm, { "aria-hidden": "true", className: "hc:size-5 hc:sm:size-4" }) : /* @__PURE__ */ f(
            Sm,
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
      /* @__PURE__ */ f("div", { className: Qn, children: /* @__PURE__ */ f(
        "div",
        {
          ref: v,
          [va]: "",
          onMouseDown: (O) => {
            O.target.closest("input, button, select, textarea") || O.preventDefault();
          },
          onKeyDown: (O) => {
            var b;
            O.key === "Escape" && (O.stopPropagation(), x(!1), (b = d.current) == null || b.focus());
          },
          style: { position: "absolute", top: F.top, left: F.left },
          className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:z-99 hc:w-max hc:rounded-md hc:p-3 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:sm:text-sm",
          role: "dialog",
          "aria-label": h("components.datePicker.pickerLabel"),
          children: [
            S && /* @__PURE__ */ f(
              og,
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
              ig,
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
function ag({
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
            className: `${o.value === t ? "hello-csv-tab hello-csv-tab-active" : "hello-csv-tab"} ${o.value === t ? "hc:border-hello-csv-primary hc:text-hello-csv-primary" : "hc:text-hello-csv-text-muted hc:hover:border-hello-csv-border-strong hc:hover:text-hello-csv-text hc:border-transparent"} hc:flex hc:cursor-pointer hc:items-center hc:border-b-2 hc:px-1 hc:py-4 hc:text-sm hc:font-medium hc:whitespace-nowrap`,
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
const cg = St(
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
), ug = St(
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
function dg({
  variant: e,
  children: t,
  tooltipText: n,
  focusable: r = !0,
  placement: o = "bottom"
}) {
  const i = cg({ variant: e, placement: o }), s = ug({
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
const fg = St(
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
function hg({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ f("span", { className: "hello-csv-button-group hc:isolate hc:inline-flex hc:rounded-md hc:shadow-xs", children: t.map((n, r) => /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: `${n.value === e ? "hello-csv-button-group-item hello-csv-button-group-item-active" : "hello-csv-button-group-item"} ${fg({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      })}`,
      children: n.label
    },
    n.value
  )) });
}
const Rt = 8, Pn = 8, ht = 8, Nn = -4, pg = St(
  "hc:absolute hc:z-50 hc:w-max hc:max-w-xs hc:whitespace-pre-line hc:rounded-md hc:bg-hello-csv-tooltip-surface hc:px-3 hc:py-2 hc:text-xs hc:text-hello-csv-tooltip-text hc:shadow-lg hc:transition-opacity hc:duration-200",
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
function Ke({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = K(!1), [s, l] = K({ top: 0, left: 0 }), [a, c] = K("bottom"), [u, h] = K(0), m = U(null), d = U(null), [v, w] = K(null);
  se(() => {
    const S = document.createElement("div");
    return S.classList.add(Qn), document.body.appendChild(S), w(S), () => {
      document.body.removeChild(S);
    };
  }, []);
  const g = () => {
    requestAnimationFrame(() => {
      if (!m.current || !d.current) return;
      const S = m.current.getBoundingClientRect(), E = d.current.getBoundingClientRect(), M = window.innerWidth, F = window.innerHeight, O = F - S.bottom, b = S.top, p = M - S.right;
      let y = "bottom";
      O >= E.height + Rt ? y = "bottom" : b >= E.height + Rt ? y = "top" : p >= E.width + Rt ? y = "right" : y = "left";
      let _ = 0, R = 0;
      switch (y) {
        case "bottom":
          _ = S.bottom + Rt + window.scrollY, R = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "top":
          _ = S.top - E.height - Rt + window.scrollY, R = S.left + S.width / 2 - E.width / 2 + window.scrollX;
          break;
        case "right":
          _ = S.top + S.height / 2 - E.height / 2 + window.scrollY, R = S.right + Rt + window.scrollX;
          break;
        case "left":
          _ = S.top + S.height / 2 - E.height / 2 + window.scrollY, R = S.left - E.width - Rt + window.scrollX;
          break;
      }
      _ = jt(
        _,
        Pn + window.scrollY,
        window.scrollY + F - E.height - Pn
      ), R = jt(
        R,
        Pn + window.scrollX,
        window.scrollX + M - E.width - Pn
      );
      const L = S.left + S.width / 2 + window.scrollX, I = S.top + S.height / 2 + window.scrollY;
      let N = 0;
      if (y === "top" || y === "bottom") {
        const D = L - R;
        N = jt(
          D,
          ht,
          E.width - ht
        );
      } else {
        const D = I - _;
        N = jt(
          D,
          ht,
          E.height - ht
        );
      }
      c(y), l({ top: _, left: R }), h(N), i(!0);
    });
  }, C = () => i(!1), x = Ie();
  return /* @__PURE__ */ f(
    "div",
    {
      ref: m,
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
              className: pg({ visible: o, hidden: r }),
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
                    style: a === "bottom" ? { top: Nn, left: u - ht / 2 } : a === "top" ? {
                      bottom: Nn,
                      left: u - ht / 2
                    } : a === "left" ? {
                      right: Nn,
                      top: u - ht / 2
                    } : {
                      left: Nn,
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
const mg = St(
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
function ei({ children: e, variant: t }) {
  const n = `hello-csv-badge ${mg({ variant: t })}`;
  return /* @__PURE__ */ f("div", { className: n, children: e });
}
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
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Da = /* @__PURE__ */ de(gg);
function vg({
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
const wg = /* @__PURE__ */ de(vg);
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
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const vo = /* @__PURE__ */ de(yg);
function bg({
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
const xg = /* @__PURE__ */ de(bg), Sg = {
  info: {
    icon: /* @__PURE__ */ f(
      xg,
      {
        className: "hc:text-hello-csv-primary-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-primary-extra-light hc:text-hello-csv-primary hc:rounded-md hc:p-4"
  },
  success: {
    icon: /* @__PURE__ */ f(
      Da,
      {
        className: "hc:text-hello-csv-success-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:rounded-md hc:p-4"
  },
  error: {
    icon: /* @__PURE__ */ f(
      vo,
      {
        className: "hc:text-hello-csv-danger-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:rounded-md hc:p-4"
  },
  warning: {
    icon: /* @__PURE__ */ f(
      vo,
      {
        className: "hc:text-hello-csv-warning-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-warning-extra-light hc:text-hello-csv-warning hc:rounded-md hc:p-4"
  }
};
function ti({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = Sg[e];
  return /* @__PURE__ */ f("div", { className: `hello-csv-alert hello-csv-alert-${e} ${o}`, children: /* @__PURE__ */ f("div", { className: "hc:flex", children: [
    /* @__PURE__ */ f("div", { className: "hc:mt-1 hc:shrink-0", children: r }),
    /* @__PURE__ */ f("div", { className: "hc:ml-3", children: [
      t && /* @__PURE__ */ f("div", { className: "hc:text-base", children: t }),
      /* @__PURE__ */ f("div", { className: "hc:text-sm", children: n })
    ] })
  ] }) });
}
function Fa({ children: e }) {
  return /* @__PURE__ */ f("div", { className: "hc:flex", children: [
    /* @__PURE__ */ f("div", { className: "hc:shrink-0", children: /* @__PURE__ */ f(
      Op,
      {
        "aria-hidden": "true",
        className: "hc:text-hello-csv-danger hc:size-5"
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "hc:ml-3 hc:flex-1 hc:md:flex hc:md:justify-between", children: /* @__PURE__ */ f("p", { className: "hc:text-hello-csv-danger hc:text-sm", children: e }) })
  ] });
}
const Cg = St(
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
function Pa({ color: e = "dark" }) {
  return /* @__PURE__ */ f("span", { className: `${Cg({ color: e })}` });
}
function Na(e, t) {
  return e.indexOf(t) !== -1;
}
function ka(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function La(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
async function Va(e, t, n) {
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
    we(this, "definition");
    // Empty cells only reach validators that opt in; presence is `required`'s job.
    we(this, "validatesEmptyValues", !1);
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class _g extends ft {
  isValid(t) {
    if (!Et(t) && typeof t != "boolean")
      return this.definition.error || "validators.boolean";
  }
}
class Eg extends ft {
  constructor(n) {
    super(n);
    we(this, "key");
    we(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn, this.validatesEmptyValues = n.validatesEmptyValues ?? !0;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
class Rg extends ft {
  constructor(n) {
    super(n);
    we(this, "dateType");
    we(this, "typeArguments");
    we(this, "min");
    we(this, "max");
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
    const r = Xe(n, this.dateType, this.typeArguments);
    if (!r)
      return this.definition.error || `validators.${this.dateType}`;
    const o = Xe(this.min, this.dateType, this.typeArguments), i = Xe(this.max, this.dateType, this.typeArguments);
    if (Zm(r, o, i))
      return this.definition.error || "validators.dateOutOfRange";
  }
}
function $g(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class yr extends ft {
  constructor(n) {
    super(n);
    we(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp($g(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class Tg extends yr {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class Mg extends ft {
  constructor(n) {
    super(n);
    we(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class Og extends ft {
  isValid(t) {
    if (!Number.isInteger(t))
      return this.definition.error || "validators.integer";
  }
}
class Ig extends ft {
  constructor(n) {
    super(n);
    we(this, "delimiter");
    we(this, "values");
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
class Ag extends yr {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class Dg extends yr {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class Fg extends ft {
  constructor(n) {
    super(n);
    we(this, "when");
    we(this, "validatesEmptyValues", !0);
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && Et(n))
      return this.definition.error || "validators.required";
  }
}
class Pg extends ft {
  constructor(n) {
    super(n);
    we(this, "seen");
    we(this, "caseInsensitive");
    we(this, "getKey");
    this.caseInsensitive = n.caseInsensitive || !1, this.getKey = n.getKey, this.seen = /* @__PURE__ */ new Set();
  }
  comparableValue(n) {
    if (Array.isArray(n)) {
      const r = [...n].sort();
      return this.caseInsensitive ? JSON.stringify(r.map((o) => o.toLocaleLowerCase())) : JSON.stringify(r);
    }
    return this.caseInsensitive && typeof n == "string" ? n.toLocaleLowerCase() : n;
  }
  isValid(n, r) {
    let o = n;
    if (this.getKey) {
      const s = this.getKey(n, r);
      if (s == null || s === "")
        return;
      o = s;
    }
    const i = this.comparableValue(o);
    if (this.seen.has(i))
      return this.definition.error || "validators.unique";
    this.seen.add(i);
  }
}
function Ng(e) {
  const t = {
    regex_matches: yr,
    required: Fg,
    unique: Pg,
    includes: Mg,
    multi_includes: Ig,
    boolean: _g,
    is_integer: Og,
    postal_code: Dg,
    phone_number: Ag,
    email: Tg,
    date: Rg,
    custom: Eg
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function Ha(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !Et(l))) == null ? void 0 : s.filter((l, a, c) => c.indexOf(l) === a)) ?? [];
}
function ni(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function kg(e, t, n, r, o, i, s, l) {
  return ne(() => {
    let c = e.rows;
    switch (n) {
      case "errors":
        c = e.rows.filter(
          (u, h) => r.some((m) => m.rowIndex === h)
        );
        break;
      case "valid":
        c = e.rows.filter(
          (u, h) => !r.some((m) => m.rowIndex === h)
        );
        break;
      case "all":
      default:
        c = e.rows;
    }
    if (o != null && (c = c.filter((u) => {
      const h = ni(t, i.id, u);
      return r.find(
        (d) => d.rowIndex === h && d.columnId === o
      ) != null;
    })), s.trim() !== "") {
      const u = mn(s);
      c = c.filter(
        (h) => i.columns.some((m) => {
          var w;
          const d = h[m.id], { displayValue: v } = za(
            i,
            m,
            d,
            l
          );
          return (w = mn(v)) == null ? void 0 : w.includes(u);
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
function ri(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function Lg(e) {
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
function Vg(e, t, n, r) {
  const o = Array.isArray(e) ? e : [], i = new Set(t.map((l) => l.value));
  return [...o.filter((l) => !i.has(l)).map((l) => ({
    label: n(String(l)),
    value: l,
    icon: r
  })), ...t];
}
function za(e, t, n, r) {
  const o = Aa(
    e,
    t,
    n,
    r
  ), i = Et(o);
  return { displayValue: i ? " " : o, valueEmpty: i };
}
function br(e) {
  if (e.validators && e.validators.length > 0) {
    const t = e.validators.find(
      (n) => n.validate === "required"
    );
    return t != null && t.when == null;
  }
  return !1;
}
function Hg(e, t) {
  const n = [];
  if (e.type === "enum") {
    const { values: r, multiple: o, allowOther: i } = e.typeArguments, s = r.map((l) => l.value);
    o ? n.push({
      values: s,
      validate: "multi_includes"
    }) : i || n.push({
      values: s,
      validate: "includes"
    });
  }
  if (e.type === "reference") {
    const r = Ha(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  if (e.type === "boolean" && n.push({ validate: "boolean" }), wr(e)) {
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
async function zg(e, t, n, r, o) {
  const i = ka(e.columns, (a, c) => {
    c[a.id] = [], [
      ...(a.validators ?? []).filter(
        (h) => (h.runOn ?? "change") === r
      ),
      ...r === "change" ? Hg(a, n) : []
    ].forEach((h) => {
      c[a.id].push(
        Ng(h)
      );
    });
  }), s = [];
  return e.columns.forEach((a) => {
    const c = i[a.id];
    c.length !== 0 && t.rows.forEach((u, h) => {
      if (!La(u))
        return;
      const m = u[a.id], d = Et(m);
      c.forEach((v) => {
        d && !v.validatesEmptyValues || s.push({
          columnId: a.id,
          rowIndex: h,
          value: m,
          row: u,
          validator: v
        });
      });
    });
  }), (await Va(
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
async function Bg(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ma, i = e.map(async (l) => {
    const a = t.find(
      (c) => c.sheetId === l.id
    );
    return a ? await zg(
      l,
      a,
      t,
      r,
      o
    ) : [];
  });
  return (await Promise.all(i)).flat();
}
const jg = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Ba = Math.pow(2, 53), Ug = -Ba;
function Wg(e) {
  if (jg.test(e)) {
    const t = parseFloat(e);
    return t > Ug && t < Ba;
  }
  return !1;
}
function Gg(e, t = {}) {
  const n = e.trim().toLowerCase(), r = [
    ...t.trueValues ?? wm,
    ...t.trueLabel ? [t.trueLabel] : []
  ].map((i) => i.toString().toLowerCase()), o = [
    ...t.falseValues ?? ym,
    ...t.falseLabel ? [t.falseLabel] : []
  ].map((i) => i.toString().toLowerCase());
  return r.includes(n) ? !0 : o.includes(n) ? !1 : e;
}
function cs(e, t) {
  const n = e.trim(), r = t.find((i) => String(i.value) === n);
  if (r)
    return String(r.value);
  const o = t.find((i) => i.label === n);
  return o ? String(o.value) : n;
}
function oi(e, t) {
  switch (e.type) {
    case "number":
      return t.trim() === "" ? t : Wg(t) ? parseFloat(t) : t;
    case "boolean":
      return Gg(t, e.typeArguments);
    case "enum": {
      const n = e.typeArguments.values;
      if (e.typeArguments.multiple) {
        const r = e.typeArguments.delimiter ?? ",";
        return t.split(r).map((o) => o.trim()).filter((o) => o !== "").map((o) => cs(o, n));
      }
      return t.trim() === "" ? t : cs(t, n);
    }
    case "date":
    case "datetime":
    case "time":
      return Ym(t, e.type, e.typeArguments);
    default:
      return t;
  }
}
function qg(e, t) {
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
function Yg(e) {
  return e.type === "enum" && e.typeArguments.multiple ? [] : "";
}
function ja(e, t, n) {
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
function Kg(e, t) {
  return ja(
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
function Zg(e, t) {
  return ja(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Xg(e, t) {
  return oi(t, e ?? "");
}
function Jg(e, t, n) {
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
        c != null && (l[c.sheetColumnId] = Xg(
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
function Qg(e, t, n) {
  const r = n.data, o = Jg(e, t, r), i = Zg(
    e,
    o
  );
  return Kg(e, i);
}
function xr(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function ev(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function tv(e, t) {
  const n = [], r = e.columns.filter(xr);
  return t.forEach((o) => {
    const i = mn(o), s = r.find(
      (l) => [l.id, ...l.suggestedMappingKeywords || []].map((a) => mn(a)).includes(i)
    ) ?? r.find(
      (l) => mn(l.label) === i
    );
    s && n.push({
      csvColumnName: o,
      sheetId: e.id,
      sheetColumnId: s.id
    });
  }), n;
}
const nv = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = tv(r, t);
    n.push(...o);
  }), ev(n);
};
function rv(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function ov(e, t) {
  const n = iv(e, t), r = sv(n);
  return lv(r);
}
function iv(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, ga);
}
function sv(e) {
  return [
    ...e,
    ...Array(ga - e.length).fill("")
  ];
}
function lv(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > hm && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function av(e, t) {
  const { t: n } = ye();
  return e.flatMap(
    (o) => o.columns.filter((i) => xr(i)).map((i) => ({
      label: `${i.label}${br(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => cv(o, i, n("mapper.unused")));
}
function cv(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function uv(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (br(r) && xr(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function dv({
  examples: e,
  csvHeader: t,
  column: n
}) {
  const { t: r, tHtml: o } = ye();
  return t && /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:m-4 hc:rounded-sm hc:border hc:px-4 hc:sm:px-6 hc:lg:px-8", children: [
    (n == null ? void 0 : n.description) && /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border-strong hc:border-b hc:py-4 hc:text-sm", children: [
      /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text hc:font-semibold", children: n.label }),
      /* @__PURE__ */ f("p", { className: "hc:text-hello-csv-text-muted hc:mt-1 hc:whitespace-pre-line", children: n.description })
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:mt-6 hc:flow-root", children: /* @__PURE__ */ f("div", { className: "hc:-mx-4 hc:-my-2 hc:overflow-x-auto hc:sm:-mx-6 hc:lg:-mx-8", children: /* @__PURE__ */ f("div", { className: "hc:inline-block hc:min-w-full hc:py-2 hc:align-middle", children: /* @__PURE__ */ f("table", { className: "hc:divide-hello-csv-border-strong hc:min-w-full hc:divide-y", children: [
      /* @__PURE__ */ f("thead", { children: /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f(
        "th",
        {
          scope: "col",
          className: "hc:text-hello-csv-text hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:sm:pl-6 hc:lg:pl-8",
          children: o("mapper.dataPreview", {
            csvHeader: /* @__PURE__ */ f(ei, { children: t })
          })
        }
      ) }) }),
      /* @__PURE__ */ f("tbody", { className: "hc:divide-hello-csv-border-strong hc:divide-y", children: e == null ? void 0 : e.map((i, s) => /* @__PURE__ */ f("tr", { children: /* @__PURE__ */ f("td", { className: "hc:text-hello-csv-text hc:h-12 hc:py-4 hc:pr-3 hc:pl-4 hc:text-sm hc:font-medium hc:sm:pl-6 hc:lg:pl-8", children: i || s === 0 && /* @__PURE__ */ f("span", { className: "hc:text-hello-csv-text-muted hc:italic", children: r("mapper.noData") }) }) }, s)) })
    ] }) }) }) })
  ] });
}
function fv({
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
          /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(ei, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ f("div", { className: "hc:mx-5", children: /* @__PURE__ */ f(lp, { className: "hc:h-4 hc:w-4" }) })
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
const Ua = "HelloCSV", Wa = 1, ct = "state";
async function hv(e, t) {
  return new Promise((n, r) => {
    const o = qa(e, t), i = indexedDB.open(Ua, Wa);
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
async function Ga(e, t) {
  return new Promise((n, r) => {
    const o = qa(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(Ua, Wa);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const u = s.result.transaction(ct, "readwrite").objectStore(ct).put(i, o);
      u.onerror = () => r(u.error), u.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(ct) || a.createObjectStore(ct);
    };
  });
}
function qa(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${pv(r)}`;
}
function pv(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function mv(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => xr(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label,
        columnDescription: r.description
      };
      br(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const gv = (e) => "." + (e.split(".").pop() ?? "").toLowerCase(), gn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, vv = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), wv = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await vv(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
var Un = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var yv = Un.exports, us;
function bv() {
  return us || (us = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(yv, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, c = {};
      function u(b) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(p) {
          var y = M(p);
          y.chunkSize = parseInt(y.chunkSize), p.step || p.chunk || (y.chunkSize = null), this._handle = new w(y), (this._handle.streamer = this)._config = y;
        }).call(this, b), this.parseChunk = function(p, y) {
          var _ = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < _) {
            let L = this._config.newline;
            L || (R = this._config.quoteChar || '"', L = this._handle.guessLineEndings(p, R)), p = [...p.split(L).slice(_)].join(L);
          }
          this.isFirstChunk && O(this._config.beforeFirstChunk) && (R = this._config.beforeFirstChunk(p)) !== void 0 && (p = R), this.isFirstChunk = !1, this._halted = !1;
          var _ = this._partialLine + p, R = (this._partialLine = "", this._handle.parse(_, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (p = R.meta.cursor, _ = (this._finished || (this._partialLine = _.substring(p - this._baseIndex), this._baseIndex = p), R && R.data && (this._rowCount += R.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: R, workerId: c.WORKER_ID, finished: _ });
            else if (O(this._config.chunk) && !y) {
              if (this._config.chunk(R, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = R = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(R.data), this._completeResults.errors = this._completeResults.errors.concat(R.errors), this._completeResults.meta = R.meta), this._completed || !_ || !O(this._config.complete) || R && R.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), _ || R && R.meta.paused || this._nextChunk(), R;
          }
          this._halted = !0;
        }, this._sendError = function(p) {
          O(this._config.error) ? this._config.error(p) : s && this._config.error && r.postMessage({ workerId: c.WORKER_ID, error: p, finished: !1 });
        };
      }
      function h(b) {
        var p;
        (b = b || {}).chunkSize || (b.chunkSize = c.RemoteChunkSize), u.call(this, b), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(y) {
          this._input = y, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (p = new XMLHttpRequest(), this._config.withCredentials && (p.withCredentials = this._config.withCredentials), i || (p.onload = F(this._chunkLoaded, this), p.onerror = F(this._chunkError, this)), p.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var y, _ = this._config.downloadRequestHeaders;
              for (y in _) p.setRequestHeader(y, _[y]);
            }
            var R;
            this._config.chunkSize && (R = this._start + this._config.chunkSize - 1, p.setRequestHeader("Range", "bytes=" + this._start + "-" + R));
            try {
              p.send(this._config.downloadRequestBody);
            } catch (L) {
              this._chunkError(L.message);
            }
            i && p.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          p.readyState === 4 && (p.status < 200 || 400 <= p.status ? this._chunkError() : (this._start += this._config.chunkSize || p.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((y) => (y = y.getResponseHeader("Content-Range")) !== null ? parseInt(y.substring(y.lastIndexOf("/") + 1)) : -1)(p), this.parseChunk(p.responseText)));
        }, this._chunkError = function(y) {
          y = p.statusText || y, this._sendError(new Error(y));
        };
      }
      function m(b) {
        (b = b || {}).chunkSize || (b.chunkSize = c.LocalChunkSize), u.call(this, b);
        var p, y, _ = typeof FileReader < "u";
        this.stream = function(R) {
          this._input = R, y = R.slice || R.webkitSlice || R.mozSlice, _ ? ((p = new FileReader()).onload = F(this._chunkLoaded, this), p.onerror = F(this._chunkError, this)) : p = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var R = this._input, L = (this._config.chunkSize && (L = Math.min(this._start + this._config.chunkSize, this._input.size), R = y.call(R, this._start, L)), p.readAsText(R, this._config.encoding));
          _ || this._chunkLoaded({ target: { result: L } });
        }, this._chunkLoaded = function(R) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(R.target.result);
        }, this._chunkError = function() {
          this._sendError(p.error);
        };
      }
      function d(b) {
        var p;
        u.call(this, b = b || {}), this.stream = function(y) {
          return p = y, this._nextChunk();
        }, this._nextChunk = function() {
          var y, _;
          if (!this._finished) return y = this._config.chunkSize, p = y ? (_ = p.substring(0, y), p.substring(y)) : (_ = p, ""), this._finished = !p, this.parseChunk(_);
        };
      }
      function v(b) {
        u.call(this, b = b || {});
        var p = [], y = !0, _ = !1;
        this.pause = function() {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(R) {
          this._input = R, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          _ && p.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), p.length ? this.parseChunk(p.shift()) : y = !0;
        }, this._streamData = F(function(R) {
          try {
            p.push(typeof R == "string" ? R : R.toString(this._config.encoding)), y && (y = !1, this._checkIsFinished(), this.parseChunk(p.shift()));
          } catch (L) {
            this._streamError(L);
          }
        }, this), this._streamError = F(function(R) {
          this._streamCleanUp(), this._sendError(R);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), _ = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function w(b) {
        var p, y, _, R, L = Math.pow(2, 53), I = -L, N = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, D = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, k = this, P = 0, A = 0, H = !1, V = !1, $ = [], T = { data: [], errors: [], meta: {} };
        function q(z) {
          return b.skipEmptyLines === "greedy" ? z.join("").trim() === "" : z.length === 1 && z[0].length === 0;
        }
        function X() {
          if (T && _ && (ie("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), _ = !1), b.skipEmptyLines && (T.data = T.data.filter(function(Y) {
            return !q(Y);
          })), ce()) {
            let Y = function(W, Q) {
              O(b.transformHeader) && (W = b.transformHeader(W, Q)), $.push(W);
            };
            if (T) if (Array.isArray(T.data[0])) {
              for (var z = 0; ce() && z < T.data.length; z++) T.data[z].forEach(Y);
              T.data.splice(0, 1);
            } else T.data.forEach(Y);
          }
          function G(Y, W) {
            for (var Q = b.header ? {} : [], j = 0; j < Y.length; j++) {
              var J = j, oe = Y[j], oe = ((be, ue) => ((ge) => (b.dynamicTypingFunction && b.dynamicTyping[ge] === void 0 && (b.dynamicTyping[ge] = b.dynamicTypingFunction(ge)), (b.dynamicTyping[ge] || b.dynamicTyping) === !0))(be) ? ue === "true" || ue === "TRUE" || ue !== "false" && ue !== "FALSE" && (((ge) => {
                if (N.test(ge) && (ge = parseFloat(ge), I < ge && ge < L))
                  return 1;
              })(ue) ? parseFloat(ue) : D.test(ue) ? new Date(ue) : ue === "" ? null : ue) : ue)(J = b.header ? j >= $.length ? "__parsed_extra" : $[j] : J, oe = b.transform ? b.transform(oe, J) : oe);
              J === "__parsed_extra" ? (Q[J] = Q[J] || [], Q[J].push(oe)) : Q[J] = oe;
            }
            return b.header && (j > $.length ? ie("FieldMismatch", "TooManyFields", "Too many fields: expected " + $.length + " fields but parsed " + j, A + W) : j < $.length && ie("FieldMismatch", "TooFewFields", "Too few fields: expected " + $.length + " fields but parsed " + j, A + W)), Q;
          }
          var re;
          T && (b.header || b.dynamicTyping || b.transform) && (re = 1, !T.data.length || Array.isArray(T.data[0]) ? (T.data = T.data.map(G), re = T.data.length) : T.data = G(T.data, 0), b.header && T.meta && (T.meta.fields = $), A += re);
        }
        function ce() {
          return b.header && $.length === 0;
        }
        function ie(z, G, re, Y) {
          z = { type: z, code: G, message: re }, Y !== void 0 && (z.row = Y), T.errors.push(z);
        }
        O(b.step) && (R = b.step, b.step = function(z) {
          T = z, ce() ? X() : (X(), T.data.length !== 0 && (P += z.data.length, b.preview && P > b.preview ? y.abort() : (T.data = T.data[0], R(T, k))));
        }), this.parse = function(z, G, re) {
          var Y = b.quoteChar || '"', Y = (b.newline || (b.newline = this.guessLineEndings(z, Y)), _ = !1, b.delimiter ? O(b.delimiter) && (b.delimiter = b.delimiter(z), T.meta.delimiter = b.delimiter) : ((Y = ((W, Q, j, J, oe) => {
            var be, ue, ge, ot;
            oe = oe || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var Vt = 0; Vt < oe.length; Vt++) {
              for (var Ge, rn = oe[Vt], $e = 0, qe = 0, _e = 0, Pe = (ge = void 0, new C({ comments: J, delimiter: rn, newline: Q, preview: 10 }).parse(W)), it = 0; it < Pe.data.length; it++) j && q(Pe.data[it]) ? _e++ : (Ge = Pe.data[it].length, qe += Ge, ge === void 0 ? ge = Ge : 0 < Ge && ($e += Math.abs(Ge - ge), ge = Ge));
              0 < Pe.data.length && (qe /= Pe.data.length - _e), (ue === void 0 || $e <= ue) && (ot === void 0 || ot < qe) && 1.99 < qe && (ue = $e, be = rn, ot = qe);
            }
            return { successful: !!(b.delimiter = be), bestDelimiter: be };
          })(z, b.newline, b.skipEmptyLines, b.comments, b.delimitersToGuess)).successful ? b.delimiter = Y.bestDelimiter : (_ = !0, b.delimiter = c.DefaultDelimiter), T.meta.delimiter = b.delimiter), M(b));
          return b.preview && b.header && Y.preview++, p = z, y = new C(Y), T = y.parse(p, G, re), X(), H ? { meta: { paused: !0 } } : T || { meta: { paused: !1 } };
        }, this.paused = function() {
          return H;
        }, this.pause = function() {
          H = !0, y.abort(), p = O(b.chunk) ? "" : p.substring(y.getCharIndex());
        }, this.resume = function() {
          k.streamer._halted ? (H = !1, k.streamer.parseChunk(p, !0)) : setTimeout(k.resume, 3);
        }, this.aborted = function() {
          return V;
        }, this.abort = function() {
          V = !0, y.abort(), T.meta.aborted = !0, O(b.complete) && b.complete(T), p = "";
        }, this.guessLineEndings = function(W, Y) {
          W = W.substring(0, 1048576);
          var Y = new RegExp(g(Y) + "([^]*?)" + g(Y), "gm"), re = (W = W.replace(Y, "")).split("\r"), Y = W.split(`
`), W = 1 < Y.length && Y[0].length < re[0].length;
          if (re.length === 1 || W) return `
`;
          for (var Q = 0, j = 0; j < re.length; j++) re[j][0] === `
` && Q++;
          return Q >= re.length / 2 ? `\r
` : "\r";
        };
      }
      function g(b) {
        return b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(b) {
        var p = (b = b || {}).delimiter, y = b.newline, _ = b.comments, R = b.step, L = b.preview, I = b.fastMode, N = null, D = !1, k = b.quoteChar == null ? '"' : b.quoteChar, P = k;
        if (b.escapeChar !== void 0 && (P = b.escapeChar), (typeof p != "string" || -1 < c.BAD_DELIMITERS.indexOf(p)) && (p = ","), _ === p) throw new Error("Comment character same as delimiter");
        _ === !0 ? _ = "#" : (typeof _ != "string" || -1 < c.BAD_DELIMITERS.indexOf(_)) && (_ = !1), y !== `
` && y !== "\r" && y !== `\r
` && (y = `
`);
        var A = 0, H = !1;
        this.parse = function(V, $, T) {
          if (typeof V != "string") throw new Error("Input must be a string");
          var q = V.length, X = p.length, ce = y.length, ie = _.length, z = O(R), G = [], re = [], Y = [], W = A = 0;
          if (!V) return $e();
          if (I || I !== !1 && V.indexOf(k) === -1) {
            for (var Q = V.split(y), j = 0; j < Q.length; j++) {
              if (Y = Q[j], A += Y.length, j !== Q.length - 1) A += y.length;
              else if (T) return $e();
              if (!_ || Y.substring(0, ie) !== _) {
                if (z) {
                  if (G = [], ot(Y.split(p)), qe(), H) return $e();
                } else ot(Y.split(p));
                if (L && L <= j) return G = G.slice(0, L), $e(!0);
              }
            }
            return $e();
          }
          for (var J = V.indexOf(p, A), oe = V.indexOf(y, A), be = new RegExp(g(P) + g(k), "g"), ue = V.indexOf(k, A); ; ) if (V[A] === k) for (ue = A, A++; ; ) {
            if ((ue = V.indexOf(k, ue + 1)) === -1) return T || re.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: G.length, index: A }), Ge();
            if (ue === q - 1) return Ge(V.substring(A, ue).replace(be, k));
            if (k === P && V[ue + 1] === P) ue++;
            else if (k === P || ue === 0 || V[ue - 1] !== P) {
              J !== -1 && J < ue + 1 && (J = V.indexOf(p, ue + 1));
              var ge = Vt((oe = oe !== -1 && oe < ue + 1 ? V.indexOf(y, ue + 1) : oe) === -1 ? J : Math.min(J, oe));
              if (V.substr(ue + 1 + ge, X) === p) {
                Y.push(V.substring(A, ue).replace(be, k)), V[A = ue + 1 + ge + X] !== k && (ue = V.indexOf(k, A)), J = V.indexOf(p, A), oe = V.indexOf(y, A);
                break;
              }
              if (ge = Vt(oe), V.substring(ue + 1 + ge, ue + 1 + ge + ce) === y) {
                if (Y.push(V.substring(A, ue).replace(be, k)), rn(ue + 1 + ge + ce), J = V.indexOf(p, A), ue = V.indexOf(k, A), z && (qe(), H)) return $e();
                if (L && G.length >= L) return $e(!0);
                break;
              }
              re.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: G.length, index: A }), ue++;
            }
          }
          else if (_ && Y.length === 0 && V.substring(A, A + ie) === _) {
            if (oe === -1) return $e();
            A = oe + ce, oe = V.indexOf(y, A), J = V.indexOf(p, A);
          } else if (J !== -1 && (J < oe || oe === -1)) Y.push(V.substring(A, J)), A = J + X, J = V.indexOf(p, A);
          else {
            if (oe === -1) break;
            if (Y.push(V.substring(A, oe)), rn(oe + ce), z && (qe(), H)) return $e();
            if (L && G.length >= L) return $e(!0);
          }
          return Ge();
          function ot(_e) {
            G.push(_e), W = A;
          }
          function Vt(_e) {
            var Pe = 0;
            return Pe = _e !== -1 && (_e = V.substring(ue + 1, _e)) && _e.trim() === "" ? _e.length : Pe;
          }
          function Ge(_e) {
            return T || (_e === void 0 && (_e = V.substring(A)), Y.push(_e), A = q, ot(Y), z && qe()), $e();
          }
          function rn(_e) {
            A = _e, ot(Y), Y = [], oe = V.indexOf(y, A);
          }
          function $e(_e) {
            if (b.header && !$ && G.length && !D) {
              var Pe = G[0], it = {}, Cr = new Set(Pe);
              let ai = !1;
              for (let Ht = 0; Ht < Pe.length; Ht++) {
                let Ye = Pe[Ht];
                if (it[Ye = O(b.transformHeader) ? b.transformHeader(Ye, Ht) : Ye]) {
                  let on, ci = it[Ye];
                  for (; on = Ye + "_" + ci, ci++, Cr.has(on); ) ;
                  Cr.add(on), Pe[Ht] = on, it[Ye]++, ai = !0, (N = N === null ? {} : N)[on] = Ye;
                } else it[Ye] = 1, Pe[Ht] = Ye;
                Cr.add(Ye);
              }
              ai && console.warn("Duplicate headers found and renamed."), D = !0;
            }
            return { data: G, errors: re, meta: { delimiter: p, linebreak: y, aborted: H, truncated: !!_e, cursor: W + ($ || 0), renamedHeaders: N } };
          }
          function qe() {
            R($e()), G = [], re = [];
          }
        }, this.abort = function() {
          H = !0;
        }, this.getCharIndex = function() {
          return A;
        };
      }
      function x(b) {
        var p = b.data, y = l[p.workerId], _ = !1;
        if (p.error) y.userError(p.error, p.file);
        else if (p.results && p.results.data) {
          var R = { abort: function() {
            _ = !0, S(p.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: E, resume: E };
          if (O(y.userStep)) {
            for (var L = 0; L < p.results.data.length && (y.userStep({ data: p.results.data[L], errors: p.results.errors, meta: p.results.meta }, R), !_); L++) ;
            delete p.results;
          } else O(y.userChunk) && (y.userChunk(p.results, R, p.file), delete p.results);
        }
        p.finished && !_ && S(p.workerId, p.results);
      }
      function S(b, p) {
        var y = l[b];
        O(y.userComplete) && y.userComplete(p), y.terminate(), delete l[b];
      }
      function E() {
        throw new Error("Not implemented.");
      }
      function M(b) {
        if (typeof b != "object" || b === null) return b;
        var p, y = Array.isArray(b) ? [] : {};
        for (p in b) y[p] = M(b[p]);
        return y;
      }
      function F(b, p) {
        return function() {
          b.apply(p, arguments);
        };
      }
      function O(b) {
        return typeof b == "function";
      }
      return c.parse = function(b, p) {
        var y = (p = p || {}).dynamicTyping || !1;
        if (O(y) && (p.dynamicTypingFunction = y, y = {}), p.dynamicTyping = y, p.transform = !!O(p.transform) && p.transform, !p.worker || !c.WORKERS_SUPPORTED) return y = null, c.NODE_STREAM_INPUT, typeof b == "string" ? (b = ((_) => _.charCodeAt(0) !== 65279 ? _ : _.slice(1))(b), y = new (p.download ? h : d)(p)) : b.readable === !0 && O(b.read) && O(b.on) ? y = new v(p) : (r.File && b instanceof File || b instanceof Object) && (y = new m(p)), y.stream(b);
        (y = (() => {
          var _;
          return !!c.WORKERS_SUPPORTED && (_ = (() => {
            var R = r.URL || r.webkitURL || null, L = n.toString();
            return c.BLOB_URL || (c.BLOB_URL = R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })));
          })(), (_ = new r.Worker(_)).onmessage = x, _.id = a++, l[_.id] = _);
        })()).userStep = p.step, y.userChunk = p.chunk, y.userComplete = p.complete, y.userError = p.error, p.step = O(p.step), p.chunk = O(p.chunk), p.complete = O(p.complete), p.error = O(p.error), delete p.worker, y.postMessage({ input: b, config: p, workerId: y.id });
      }, c.unparse = function(b, p) {
        var y = !1, _ = !0, R = ",", L = `\r
`, I = '"', N = I + I, D = !1, k = null, P = !1, A = ((() => {
          if (typeof p == "object") {
            if (typeof p.delimiter != "string" || c.BAD_DELIMITERS.filter(function($) {
              return p.delimiter.indexOf($) !== -1;
            }).length || (R = p.delimiter), typeof p.quotes != "boolean" && typeof p.quotes != "function" && !Array.isArray(p.quotes) || (y = p.quotes), typeof p.skipEmptyLines != "boolean" && typeof p.skipEmptyLines != "string" || (D = p.skipEmptyLines), typeof p.newline == "string" && (L = p.newline), typeof p.quoteChar == "string" && (I = p.quoteChar), typeof p.header == "boolean" && (_ = p.header), Array.isArray(p.columns)) {
              if (p.columns.length === 0) throw new Error("Option columns is empty");
              k = p.columns;
            }
            p.escapeChar !== void 0 && (N = p.escapeChar + I), p.escapeFormulae instanceof RegExp ? P = p.escapeFormulae : typeof p.escapeFormulae == "boolean" && p.escapeFormulae && (P = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(g(I), "g"));
        if (typeof b == "string" && (b = JSON.parse(b)), Array.isArray(b)) {
          if (!b.length || Array.isArray(b[0])) return H(null, b, D);
          if (typeof b[0] == "object") return H(k || Object.keys(b[0]), b, D);
        } else if (typeof b == "object") return typeof b.data == "string" && (b.data = JSON.parse(b.data)), Array.isArray(b.data) && (b.fields || (b.fields = b.meta && b.meta.fields || k), b.fields || (b.fields = Array.isArray(b.data[0]) ? b.fields : typeof b.data[0] == "object" ? Object.keys(b.data[0]) : []), Array.isArray(b.data[0]) || typeof b.data[0] == "object" || (b.data = [b.data])), H(b.fields || [], b.data || [], D);
        throw new Error("Unable to serialize unrecognized input");
        function H($, T, q) {
          var X = "", ce = (typeof $ == "string" && ($ = JSON.parse($)), typeof T == "string" && (T = JSON.parse(T)), Array.isArray($) && 0 < $.length), ie = !Array.isArray(T[0]);
          if (ce && _) {
            for (var z = 0; z < $.length; z++) 0 < z && (X += R), X += V($[z], z);
            0 < T.length && (X += L);
          }
          for (var G = 0; G < T.length; G++) {
            var re = (ce ? $ : T[G]).length, Y = !1, W = ce ? Object.keys(T[G]).length === 0 : T[G].length === 0;
            if (q && !ce && (Y = q === "greedy" ? T[G].join("").trim() === "" : T[G].length === 1 && T[G][0].length === 0), q === "greedy" && ce) {
              for (var Q = [], j = 0; j < re; j++) {
                var J = ie ? $[j] : j;
                Q.push(T[G][J]);
              }
              Y = Q.join("").trim() === "";
            }
            if (!Y) {
              for (var oe = 0; oe < re; oe++) {
                0 < oe && !W && (X += R);
                var be = ce && ie ? $[oe] : oe;
                X += V(T[G][be], oe);
              }
              G < T.length - 1 && (!q || 0 < re && !W) && (X += L);
            }
          }
          return X;
        }
        function V($, T) {
          var q, X;
          return $ == null ? "" : $.constructor === Date ? JSON.stringify($).slice(1, 25) : (X = !1, P && typeof $ == "string" && P.test($) && ($ = "'" + $, X = !0), q = $.toString().replace(A, N), (X = X || y === !0 || typeof y == "function" && y($, T) || Array.isArray(y) && y[T] || ((ce, ie) => {
            for (var z = 0; z < ie.length; z++) if (-1 < ce.indexOf(ie[z])) return !0;
            return !1;
          })(q, c.BAD_DELIMITERS) || -1 < q.indexOf(R) || q.charAt(0) === " " || q.charAt(q.length - 1) === " ") ? I + q + I : q);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = C, c.ParserHandle = w, c.NetworkStreamer = h, c.FileStreamer = m, c.StringStreamer = d, c.ReadableStreamStreamer = v, r.jQuery && ((o = r.jQuery).fn.parse = function(b) {
        var p = b.config || {}, y = [];
        return this.each(function(L) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var I = 0; I < this.files.length; I++) y.push({ file: this.files[I], inputElem: this, instanceConfig: o.extend({}, p) });
        }), _(), this;
        function _() {
          if (y.length === 0) O(b.complete) && b.complete();
          else {
            var L, I, N, D, k = y[0];
            if (O(b.before)) {
              var P = b.before(k.file, k.inputElem);
              if (typeof P == "object") {
                if (P.action === "abort") return L = "AbortError", I = k.file, N = k.inputElem, D = P.reason, void (O(b.error) && b.error({ name: L }, I, N, D));
                if (P.action === "skip") return void R();
                typeof P.config == "object" && (k.instanceConfig = o.extend(k.instanceConfig, P.config));
              } else if (P === "skip") return void R();
            }
            var A = k.instanceConfig.complete;
            k.instanceConfig.complete = function(H) {
              O(A) && A(H, k.file, k.inputElem), R();
            }, c.parse(k.file, k.instanceConfig);
          }
        }
        function R() {
          y.splice(0, 1), _();
        }
      }), s && (r.onmessage = function(b) {
        b = b.data, c.WORKER_ID === void 0 && b && (c.WORKER_ID = b.workerId), typeof b.input == "string" ? r.postMessage({ workerId: c.WORKER_ID, results: c.parse(b.input, b.config), finished: !0 }) : (r.File && b.input instanceof File || b.input instanceof Object) && (b = c.parse(b.input, b.config)) && r.postMessage({ workerId: c.WORKER_ID, results: b, finished: !0 });
      }), (h.prototype = Object.create(u.prototype)).constructor = h, (m.prototype = Object.create(u.prototype)).constructor = m, (d.prototype = Object.create(d.prototype)).constructor = d, (v.prototype = Object.create(u.prototype)).constructor = v, c;
    });
  }(Un)), Un.exports;
}
var xv = bv();
const Ya = /* @__PURE__ */ Zo(xv);
async function Sv({ file: e }) {
  return new Promise((t, n) => {
    Ya.parse(e, {
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
function Cv(e, t) {
  return e === "" ? [] : Ya.parse(e, {
    delimiter: t,
    header: !1,
    skipEmptyLines: !0
  }).data;
}
class On {
  constructor(t) {
    we(this, "definition");
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
class _v extends On {
  constructor(n) {
    super(n);
    we(this, "key");
    we(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class Ev extends On {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class Rv extends On {
  parse(t) {
    if (typeof t == "string" && Na(t, "-"))
      return t.split("-")[0];
  }
}
const ds = [
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
class $v extends On {
  parse(t) {
    const n = ds.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Na(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return ds[r][1];
    }
  }
}
class Tv extends On {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function Mv(e) {
  const t = {
    phone_number: Ev,
    postal_code: Rv,
    state_code: $v,
    strip: Tv,
    custom: _v
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
async function Ov(e, t, n, r) {
  const o = ka(
    e.columns,
    (a, c) => {
      c[a.id] = new Av(), a.transformers && a.transformers.filter((u) => (u.runOn ?? "change") === n).forEach((u) => {
        c[a.id].push(
          Mv(u)
        );
      });
    }
  ), i = [];
  e.columns.forEach((a) => {
    const c = a.id, u = o[c];
    u.steps.length !== 0 && t.rows.forEach((h, m) => {
      if (!La(h))
        return;
      const d = h[c];
      Et(d) || i.push({ rowIndex: m, columnId: c, value: d, pipeline: u });
    });
  });
  const s = await Va(
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
      (m) => a[m] !== u[m]
    ) ? { ...a, ...u } : a;
  });
}
async function Iv(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ma, i = [];
  for (const s of e) {
    const l = t.find(
      (a) => a.sheetId === s.id
    );
    if (l) {
      const a = await Ov(
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
class Av {
  // Series of transformations
  constructor(t = []) {
    we(this, "steps");
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
let Nr = 0;
function Ka() {
  return Nr = (Nr + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${Nr}`;
}
async function Dv(e, t) {
  const n = In(e);
  try {
    return t.enabled ? await Fv(e, t) : n;
  } catch {
    return n;
  }
}
function In(e) {
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
async function Fv(e, t) {
  const n = await hv(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = In(e);
  return Ga(r, t.customKey), r;
}
class Za {
  constructor(t, n) {
    we(this, "initialState");
    we(this, "importerDefinition");
    we(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? In(t.sheets), this.buildSteps = [];
  }
  async getState(t = "change") {
    let n = this.initialState;
    this.buildSteps.forEach((s) => {
      n = Xa(n, s);
    });
    const r = this.importerDefinition.maxConcurrentAsyncOperations, o = await Iv(
      this.importerDefinition.sheets,
      n.sheetData,
      { phase: t, concurrency: r }
    ).catch(() => n.sheetData), i = await Bg(
      this.importerDefinition.sheets,
      o,
      { phase: t, concurrency: r }
    ).catch(() => n.validationErrors);
    return { ...n, sheetData: o, validationErrors: i };
  }
  async uploadFile(t) {
    const n = await wv(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await Sv({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : nv(
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
        amountOfEmptyRowsToAdd: t ?? am
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
    const t = await this.getState(), n = Qg(
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
class Rw extends Za {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const tr = class tr extends Za {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => tr.actionTypesThatRequireProcessing.has(o.type)
    ), r = Ka();
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
we(tr, "actionTypesThatRequireProcessing", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS",
  "RESTORE_SHEET_DATA",
  "ADD_EMPTY_ROW"
]));
let er = tr;
function Pv(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const Xa = (e, t) => {
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
          return i[t.payload.rowIndex] = Pv(
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
      return In(e.sheetDefinitions);
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
}, Nv = (e, t, n) => {
  const [r, o] = tt(
    Xa,
    n ?? In(e)
  );
  return se(() => {
    const i = async () => {
      const s = await Dv(e, t);
      o({ type: "SET_STATE", payload: { state: s } });
    };
    n == null && i();
  }, []), se(() => {
    t.enabled && Ga(r, t.customKey);
  }, [r, t]), [r, o];
}, Ja = me({}), Qa = me(
  {}
);
function kv({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, s] = Nv(
    e,
    t,
    n
  ), l = U(i);
  return se(() => {
    l.current !== i && (r == null || r(l.current, i), l.current = i);
  }, [i, r]), /* @__PURE__ */ f(Ja.Provider, { value: i, children: /* @__PURE__ */ f(Qa.Provider, { value: s, children: o }) });
}
function rt() {
  return fe(Ja);
}
function Lv() {
  return fe(Qa);
}
function Vv({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  var M;
  const { columnMappings: r, parsedFile: o } = rt(), { sheets: i } = ze(), { t: s } = ye(), [l, a] = K(null), c = r ?? [], u = o, h = u.data, m = u.meta.fields, d = av(
    i,
    c
  ), v = uv(
    i,
    c
  ), w = c.find(
    (F) => F.csvColumnName === l
  ), g = w ? (M = i.find((F) => F.id === w.sheetId)) == null ? void 0 : M.columns.find((F) => F.id === w.sheetColumnId) : void 0, C = ne(() => l ? ov(h, l) : [], [l, h]), [x, S] = K(!1);
  async function E() {
    try {
      S(!0), await t();
    } finally {
      S(!1);
    }
  }
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ f("div", { className: "hc:min-h-0 hc:flex-auto", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:justify-between hc:space-x-5", children: [
      /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-2 hc:flex-col", children: [
        /* @__PURE__ */ f("div", { className: "hc:my-5 hc:flex hc:text-sm hc:font-light hc:uppercase", children: [
          /* @__PURE__ */ f("div", { className: "hc:flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ f("div", { className: "hc:flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:overflow-y-auto", children: m.map((F, O) => {
          const b = c.find(
            (p) => p.csvColumnName === F
          ) ?? null;
          return /* @__PURE__ */ f(
            fv,
            {
              csvHeader: F,
              currentMapping: b,
              setMapping: (p) => {
                const y = rv(
                  c,
                  F,
                  p
                );
                e(y);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(F);
              }
            },
            O
          );
        }) })
      ] }),
      /* @__PURE__ */ f("div", { className: "hc:bg-hello-csv-muted hc:hidden hc:flex-1 hc:overflow-y-auto hc:sm:block", children: /* @__PURE__ */ f(
        dv,
        {
          examples: C,
          csvHeader: l ?? "",
          column: g
        }
      ) })
    ] }) }),
    !v && /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ f(Fa, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ f("div", { className: "hc:mt-auto hc:flex-none", children: /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ f(
        Ve,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: x,
          children: s("mapper.back")
        }
      ),
      /* @__PURE__ */ f(
        Ve,
        {
          onClick: E,
          disabled: !v || x,
          children: /* @__PURE__ */ f("div", { className: "hc:flex hc:items-center", children: [
            x && /* @__PURE__ */ f(pe, { children: [
              /* @__PURE__ */ f(Pa, { color: "light" }),
              /* @__PURE__ */ f("div", { className: "hc:mr-2" })
            ] }),
            s("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var Hv = { NODE_ENV: "production" };
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
function Sr(e) {
  return e instanceof Function;
}
function zv(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Bv(e, t) {
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
      const u = Math.round((Date.now() - s) * 100) / 100, h = Math.round((Date.now() - c) * 100) / 100, m = h / 16, d = (v, w) => {
        for (v = String(v); v.length < w; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${d(h, 5)} /${d(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
    key: Hv.NODE_ENV === "development",
    onChange: r
  };
}
function jv(e, t, n, r) {
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
function Uv(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let c = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
  if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (m) => {
    let d = m;
    for (const w of a.split(".")) {
      var v;
      d = (v = d) == null ? void 0 : v[w];
    }
    return d;
  } : u = (m) => m[l.accessorKey]), !c)
    throw new Error();
  let h = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: le(() => [!0], () => {
      var m;
      return [h, ...(m = h.columns) == null ? void 0 : m.flatMap((d) => d.getFlatColumns())];
    }, ae(e.options, "debugColumns")),
    getLeafColumns: le(() => [e._getOrderColumnsFn()], (m) => {
      var d;
      if ((d = h.columns) != null && d.length) {
        let v = h.columns.flatMap((w) => w.getLeafColumns());
        return m(v);
      }
      return [h];
    }, ae(e.options, "debugColumns"))
  };
  for (const m of e._features)
    m.createColumn == null || m.createColumn(h, e);
  return h;
}
const Te = "debugHeaders";
function fs(e, t, n) {
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
const Wv = {
  createTable: (e) => {
    e.getHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const l = (i = r == null ? void 0 : r.map((h) => n.find((m) => m.id === h)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((h) => n.find((m) => m.id === h)).filter(Boolean)) != null ? s : [], c = n.filter((h) => !(r != null && r.includes(h.id)) && !(o != null && o.includes(h.id)));
      return kn(t, [...l, ...c, ...a], e);
    }, ae(e.options, Te)), e.getCenterHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), kn(t, n, e, "center")), ae(e.options, Te)), e.getLeftHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return kn(t, i, e, "left");
    }, ae(e.options, Te)), e.getRightHeaderGroups = le(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return kn(t, i, e, "right");
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
function kn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(m, d) {
    d === void 0 && (d = 1), s = Math.max(s, d), m.filter((v) => v.getIsVisible()).forEach((v) => {
      var w;
      (w = v.columns) != null && w.length && l(v.columns, d + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const c = (m, d) => {
    const v = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, w = [];
    m.forEach((g) => {
      const C = [...w].reverse()[0], x = g.column.depth === v.depth;
      let S, E = !1;
      if (x && g.column.parent ? S = g.column.parent : (S = g.column, E = !0), C && (C == null ? void 0 : C.column) === S)
        C.subHeaders.push(g);
      else {
        const M = fs(n, S, {
          id: [r, d, S.id, g == null ? void 0 : g.id].filter(Boolean).join("_"),
          isPlaceholder: E,
          placeholderId: E ? `${w.filter((F) => F.column === S).length}` : void 0,
          depth: d,
          index: w.length
        });
        M.subHeaders.push(g), w.push(M);
      }
      v.headers.push(g), g.headerGroup = v;
    }), a.push(v), d > 0 && c(w, d - 1);
  }, u = t.map((m, d) => fs(n, m, {
    depth: s,
    index: d
  }));
  c(u, s - 1), a.reverse();
  const h = (m) => m.filter((v) => v.column.getIsVisible()).map((v) => {
    let w = 0, g = 0, C = [0];
    v.subHeaders && v.subHeaders.length ? (C = [], h(v.subHeaders).forEach((S) => {
      let {
        colSpan: E,
        rowSpan: M
      } = S;
      w += E, C.push(M);
    })) : w = 1;
    const x = Math.min(...C);
    return g = g + x, v.colSpan = w, v.rowSpan = g, {
      colSpan: w,
      rowSpan: g
    };
  });
  return h((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Gv = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => Bv(l.subRows, (a) => a.subRows),
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
    getAllCells: le(() => [e.getAllLeafColumns()], (a) => a.map((c) => jv(e, l, c, c.id)), ae(e.options, "debugRows")),
    _getAllCellsByColumnId: le(() => [l.getAllCells()], (a) => a.reduce((c, u) => (c[u.column.id] = u, c), {}), ae(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(l, e);
  }
  return l;
}, qv = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ec = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
ec.autoRemove = (e) => je(e);
const tc = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
tc.autoRemove = (e) => je(e);
const nc = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
nc.autoRemove = (e) => je(e);
const rc = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
rc.autoRemove = (e) => je(e);
const oc = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
oc.autoRemove = (e) => je(e) || !(e != null && e.length);
const ic = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
ic.autoRemove = (e) => je(e) || !(e != null && e.length);
const sc = (e, t, n) => e.getValue(t) === n;
sc.autoRemove = (e) => je(e);
const lc = (e, t, n) => e.getValue(t) == n;
lc.autoRemove = (e) => je(e);
const ii = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
ii.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const l = i;
    i = s, s = l;
  }
  return [i, s];
};
ii.autoRemove = (e) => je(e) || je(e[0]) && je(e[1]);
const st = {
  includesString: ec,
  includesStringSensitive: tc,
  equalsString: nc,
  arrIncludes: rc,
  arrIncludesAll: oc,
  arrIncludesSome: ic,
  equals: sc,
  weakEquals: lc,
  inNumberRange: ii
};
function je(e) {
  return e == null || e === "";
}
const Yv = {
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
      return Sr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = gt(n, i ? i.value : void 0);
        if (hs(o, s, e)) {
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
            if (hs(a, s.value, l))
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
function hs(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Kv = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Zv = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Xv = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Jv = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Qv = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, e0 = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!zv(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, t0 = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), n0 = (e, t) => new Set(t.map((n) => n.getValue(e))).size, r0 = (e, t) => t.length, kr = {
  sum: Kv,
  min: Zv,
  max: Xv,
  extent: Jv,
  mean: Qv,
  median: e0,
  unique: t0,
  uniqueCount: n0,
  count: r0
}, o0 = {
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
        return kr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return kr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return Sr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : kr[e.columnDef.aggregationFn];
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
function i0(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const s0 = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: He("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = le((n) => [vn(t, n)], (n) => n.findIndex((r) => r.id === e.id), ae(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = vn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = vn(t, n);
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
      return i0(i, n, r);
    }, ae(e.options, "debugTable"));
  }
}, Lr = () => ({
  left: [],
  right: []
}), l0 = {
  getInitialState: (e) => ({
    columnPinning: Lr(),
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
      return e.setColumnPinning(t ? Lr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Lr());
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
}, Ln = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Vr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), a0 = {
  getDefaultColumnDef: () => Ln,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Vr(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Ln.minSize, (r = i ?? e.columnDef.size) != null ? r : Ln.size), (o = e.columnDef.maxSize) != null ? o : Ln.maxSize);
    }, e.getStart = le((n) => [n, vn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.getAfter = le((n) => [n, vn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), ae(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Hr(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[r.id, r.getSize()]], a = Hr(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (C, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((S) => {
            var E, M;
            const F = t.options.columnResizeDirection === "rtl" ? -1 : 1, O = (x - ((E = S == null ? void 0 : S.startOffset) != null ? E : 0)) * F, b = Math.max(O / ((M = S == null ? void 0 : S.startSize) != null ? M : 0), -0.999999);
            return S.columnSizingStart.forEach((p) => {
              let [y, _] = p;
              c[y] = Math.round(Math.max(_ + _ * b, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: O,
              deltaPercentage: b
            };
          }), (t.options.columnResizeMode === "onChange" || C === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, h = (C) => u("move", C), m = (C) => {
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
            d == null || d.removeEventListener("mousemove", v.moveHandler), d == null || d.removeEventListener("mouseup", v.upHandler), m(C.clientX);
          }
        }, w = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), h(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var x;
            d == null || d.removeEventListener("touchmove", w.moveHandler), d == null || d.removeEventListener("touchend", w.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), m((x = C.touches[0]) == null ? void 0 : x.clientX);
          }
        }, g = c0() ? {
          passive: !1
        } : !1;
        Hr(i) ? (d == null || d.addEventListener("touchmove", w.moveHandler, g), d == null || d.addEventListener("touchend", w.upHandler, g)) : (d == null || d.addEventListener("mousemove", v.moveHandler, g), d == null || d.addEventListener("mouseup", v.upHandler, g)), t.setColumnSizingInfo((C) => ({
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
      e.setColumnSizingInfo(t ? Vr() : (n = e.initialState.columnSizingInfo) != null ? n : Vr());
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
let Vn = null;
function c0() {
  if (typeof Vn == "boolean") return Vn;
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
  return Vn = e, Vn;
}
function Hr(e) {
  return e.type === "touchstart";
}
const u0 = {
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
function vn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const d0 = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, f0 = {
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
      return Sr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : st[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, h0 = {
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
}, wo = 0, yo = 10, zr = () => ({
  pageIndex: wo,
  pageSize: yo
}), p0 = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...zr(),
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
      e.setPagination(r ? zr() : (o = e.initialState.pagination) != null ? o : zr());
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
      e.setPageIndex(r ? wo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : wo);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? yo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : yo);
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
}, Br = () => ({
  top: [],
  bottom: []
}), m0 = {
  getInitialState: (e) => ({
    rowPinning: Br(),
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
          var h, m;
          return {
            top: ((h = a == null ? void 0 : a.top) != null ? h : []).filter((w) => !(l != null && l.has(w))),
            bottom: [...((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)]
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
      return e.setRowPinning(t ? Br() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Br());
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
}, g0 = {
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
        bo(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = le(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? jr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getFilteredSelectedRowModel = le(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? jr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ae(e.options, "debugTable")), e.getGroupedSelectedRowModel = le(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? jr(e, n) : {
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
        return bo(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return si(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return xo(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return xo(e, n) === "all";
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
}, bo = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => bo(e, l.id, n, r, o));
};
function jr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var c;
      const u = si(a, n);
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
function si(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function xo(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (si(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = xo(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const So = /([0-9]+)/gm, v0 = (e, t, n) => ac(xt(e.getValue(n)).toLowerCase(), xt(t.getValue(n)).toLowerCase()), w0 = (e, t, n) => ac(xt(e.getValue(n)), xt(t.getValue(n))), y0 = (e, t, n) => li(xt(e.getValue(n)).toLowerCase(), xt(t.getValue(n)).toLowerCase()), b0 = (e, t, n) => li(xt(e.getValue(n)), xt(t.getValue(n))), x0 = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, S0 = (e, t, n) => li(e.getValue(n), t.getValue(n));
function li(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function xt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ac(e, t) {
  const n = e.split(So).filter(Boolean), r = t.split(So).filter(Boolean);
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
  alphanumeric: v0,
  alphanumericCaseSensitive: w0,
  text: y0,
  textCaseSensitive: b0,
  datetime: x0,
  basic: S0
}, C0 = {
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
        if (typeof i == "string" && (r = !0, i.split(So).length > 1))
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
      return Sr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : an[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((d) => d.id === e.id), a = s == null ? void 0 : s.findIndex((d) => d.id === e.id);
        let c = [], u, h = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var m;
          c = [...s, {
            id: e.id,
            desc: h
          }], c.splice(0, c.length - ((m = t.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
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
}, _0 = [
  Wv,
  u0,
  s0,
  l0,
  qv,
  Yv,
  d0,
  //depends on ColumnFaceting
  f0,
  //depends on ColumnFiltering
  C0,
  o0,
  //depends on RowSorting
  h0,
  p0,
  m0,
  g0,
  a0
];
function E0(e) {
  var t, n;
  const r = [..._0, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((m, d) => Object.assign(m, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(o)), {}), s = (m) => o.options.mergeOptions ? o.options.mergeOptions(i, m) : {
    ...i,
    ...m
  };
  let a = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((m) => {
    var d;
    a = (d = m.getInitialState == null ? void 0 : m.getInitialState(a)) != null ? d : a;
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
    _queue: (m) => {
      c.push(m), u || (u = !0, Promise.resolve().then(() => {
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
    setOptions: (m) => {
      const d = gt(m, o.options);
      o.options = s(d);
    },
    getState: () => o.options.state,
    setState: (m) => {
      o.options.onStateChange == null || o.options.onStateChange(m);
    },
    _getRowId: (m, d, v) => {
      var w;
      return (w = o.options.getRowId == null ? void 0 : o.options.getRowId(m, d, v)) != null ? w : `${v ? [v.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, d) => {
      let v = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[m];
      if (!v && (v = o.getCoreRowModel().rowsById[m], !v))
        throw new Error();
      return v;
    },
    _getDefaultColumnDef: le(() => [o.options.defaultColumn], (m) => {
      var d;
      return m = (d = m) != null ? d : {}, {
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
        ...m
      };
    }, ae(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: le(() => [o._getColumnDefs()], (m) => {
      const d = function(v, w, g) {
        return g === void 0 && (g = 0), v.map((C) => {
          const x = Uv(o, C, g, w), S = C;
          return x.columns = S.columns ? d(S.columns, x, g + 1) : [], x;
        });
      };
      return d(m);
    }, ae(e, "debugColumns")),
    getAllFlatColumns: le(() => [o.getAllColumns()], (m) => m.flatMap((d) => d.getFlatColumns()), ae(e, "debugColumns")),
    _getAllFlatColumnsById: le(() => [o.getAllFlatColumns()], (m) => m.reduce((d, v) => (d[v.id] = v, d), {}), ae(e, "debugColumns")),
    getAllLeafColumns: le(() => [o.getAllColumns(), o._getOrderColumnsFn()], (m, d) => {
      let v = m.flatMap((w) => w.getLeafColumns());
      return d(v);
    }, ae(e, "debugColumns")),
    getColumn: (m) => o._getAllFlatColumnsById()[m]
  };
  Object.assign(o, h);
  for (let m = 0; m < o._features.length; m++) {
    const d = o._features[m];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function R0() {
  return (e) => le(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let c = 0; c < o.length; c++) {
        const u = Gv(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
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
function $0() {
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
          var m;
          const v = i[d], w = s[v.id], g = w.sortUndefined, C = (m = v == null ? void 0 : v.desc) != null ? m : !1;
          let x = 0;
          if (g) {
            const S = u.getValue(v.id), E = h.getValue(v.id), M = S === void 0, F = E === void 0;
            if (M || F) {
              if (g === "first") return M ? -1 : 1;
              if (g === "last") return M ? 1 : -1;
              x = M && F ? 0 : M ? g : -g;
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
function ps(e, t) {
  return e ? T0(e) ? /* @__PURE__ */ B(e, t) : e : null;
}
function T0(e) {
  return M0(e) || typeof e == "function" || O0(e);
}
function M0(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function O0(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function I0(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = K(() => ({
    current: E0(t)
  })), [r, o] = K(() => n.current.initialState);
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
const A0 = 500, ms = 10;
function D0(e, { disabled: t = !1 } = {}) {
  const n = U(null), r = U(0), o = U(0), i = U(!1), s = te(
    (c) => {
      if (t) return;
      const u = c.touches[0];
      r.current = u.clientX, o.current = u.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, A0);
    },
    [e, t]
  ), l = te(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = te(
    (c) => {
      const u = c.touches[0], h = Math.abs(u.clientX - r.current), m = Math.abs(u.clientY - o.current);
      (h > ms || m > ms) && (i.current = !0, l());
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
const cc = me(null);
function F0({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f(cc.Provider, { value: e, children: t });
}
function uc() {
  const e = fe(cc);
  if (!e)
    throw new Error(
      "useGridSelectionContext must be used within a GridSelectionProvider"
    );
  return e;
}
function gs(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Be(e, t) {
  return {
    row: gs(e.row, 0, Math.max(0, t.rowCount - 1)),
    col: gs(e.col, 0, Math.max(0, t.colCount - 1))
  };
}
const dc = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 }
};
function Wn(e, t, n) {
  const r = dc[t];
  return Be(
    { row: e.row + r.row, col: e.col + r.col },
    n
  );
}
function P0(e, t) {
  const n = e ?? t;
  return {
    top: Math.min(n.row, t.row),
    left: Math.min(n.col, t.col),
    bottom: Math.max(n.row, t.row),
    right: Math.max(n.col, t.col)
  };
}
function N0(e, t) {
  return e.row >= t.top && e.row <= t.bottom && e.col >= t.left && e.col <= t.right;
}
function Co(e, t) {
  return e.row >= 0 && e.row < t.rowCount && e.col >= 0 && e.col < t.colCount;
}
function k0(e, t, n, r) {
  const o = dc[t], i = (u, h) => Co({ row: u, col: h }, n), s = { row: e.row + o.row, col: e.col + o.col };
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
function L0(e, t) {
  return Math.max(1, Math.floor(e / t));
}
function V0(e) {
  return e.type === "boolean" || e.type === "enum" || e.type === "reference";
}
function vs(e) {
  return V0(e) || wr(e);
}
function H0({
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
  errorsText: m,
  enumLabelDict: d
}) {
  const { t: v } = ye(), { availableActions: w } = ze(), g = uc(), C = g.isEditing(e), x = g.isActive(e), S = g.isSelected(e), E = U(null), M = U(null), F = U(!1), O = ri(l) || !w.includes("editRows");
  function b(z) {
    O || g.startEdit(e, z);
  }
  function p() {
    g.stopEditing();
  }
  se(() => {
    C && (F.current = !1, h(), E.current && E.current.focus());
  }, [C]);
  const { displayValue: y, valueEmpty: _ } = za(
    s,
    l,
    a,
    d
  ), R = D0(
    () => {
      O || b("preserve");
    },
    { disabled: O }
  ), L = m ? "hc:bg-hello-csv-danger-extra-light" : O ? "hc:bg-hello-csv-muted" : "", I = x ? "hc:z-1" : "";
  function N(z) {
    F.current = !0, c(oi(l, String(z ?? ""))), p();
  }
  function D(z) {
    var G;
    if (C) {
      if (z.key === "Escape") {
        F.current = !0, p(), z.preventDefault(), z.stopPropagation();
        return;
      }
      if (!vs(l) && (z.key === "Enter" || z.key === "Tab")) {
        z.preventDefault(), z.stopPropagation(), N(((G = E.current) == null ? void 0 : G.value) ?? "");
        const re = z.key === "Tab" ? z.shiftKey ? "left" : "right" : z.shiftKey ? "up" : "down";
        g.setActive(Wn(e, re, t));
      }
    }
  }
  function k(z) {
    C || z.button !== 0 || (z.shiftKey ? g.extendTo(e) : g.beginDrag(e), z.preventDefault());
  }
  function P() {
    C || g.dragTo(e);
  }
  function A(z) {
    var re;
    if (!C || !vs(l)) return;
    const G = z.relatedTarget;
    G && ((re = M.current) != null && re.contains(G)) || G instanceof Element && G.closest(`[${va}]`) || p();
  }
  function H(z) {
    C || (z.detail > 1 ? b("preserve") : z.shiftKey ? g.extendTo(e) : g.setActive(e));
  }
  function V(z, { close: G = !0 } = {}) {
    F.current = !0, c(z), G && p();
  }
  const $ = (() => {
    const z = g.state.editInitialValue;
    return z && typeof z == "object" && "char" in z ? z.char : void 0;
  })(), T = U(a);
  C || (T.current = a);
  const q = $ ?? T.current, X = {
    ref: M,
    role: "gridcell",
    "aria-colindex": r,
    "aria-selected": S,
    "data-cell-row": e.row,
    "data-cell-col": e.col,
    tabIndex: x ? 0 : -1,
    onKeyDown: D,
    onClick: H,
    onMouseDown: k,
    onMouseEnter: P,
    // focusout (bubbles) rather than blur (doesn't) so we catch the combobox
    // input losing focus to somewhere outside the cell.
    onFocusOut: A,
    className: `hc:relative hc:flex hc:h-full hc:w-full hc:items-stretch hc:outline-none ${I}`
  }, ce = x ? /* @__PURE__ */ f("div", { className: "hc:ring-hello-csv-primary hc:pointer-events-none hc:absolute hc:inset-0 hc:ring-2 hc:ring-inset" }) : S ? /* @__PURE__ */ f("div", { className: "hc:bg-hello-csv-primary/20 hc:pointer-events-none hc:absolute hc:inset-0" }) : null;
  function ie() {
    if (l.type === "boolean") {
      const z = [!0, !1].map((G) => {
        var re, Y;
        return {
          label: G ? ((re = l.typeArguments) == null ? void 0 : re.trueLabel) ?? ba : ((Y = l.typeArguments) == null ? void 0 : Y.falseLabel) ?? xa,
          value: G
        };
      });
      return /* @__PURE__ */ f(
        Ot,
        {
          autoFocus: !0,
          immediate: !0,
          options: z,
          value: a,
          onChange: (G) => V(G ?? "")
        }
      );
    }
    if (l.type === "reference") {
      const z = Ha(
        l,
        u
      ), G = Ia(l, d), re = z.map((Y) => ({
        label: String(go(G, Y)),
        value: Y
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
          onChange: (Y) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            V(Y ?? void 0)
          )
        }
      );
    }
    if (l.type === "enum") {
      const { values: z, multiple: G, allowOther: re } = l.typeArguments;
      if (G) {
        const Y = Vg(
          a,
          z,
          (W) => v("components.select.invalidOption", { value: W }),
          /* @__PURE__ */ f(
            Lm,
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
            options: Y,
            value: a,
            onChange: (W) => V(W ?? [], { close: !1 })
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
          creatable: re,
          options: z,
          value: a,
          onChange: (Y) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            V(
              Y ?? void 0
            )
          )
        }
      );
    }
    if (wr(l)) {
      const z = l.typeArguments ?? {};
      return /* @__PURE__ */ f(
        lg,
        {
          mode: l.type,
          value: typeof a == "string" ? a : "",
          seedText: $,
          ...z,
          "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
          onCommit: (G) => N(G)
        }
      );
    }
    return /* @__PURE__ */ f(
      Ca,
      {
        "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
        type: l.type === "number" ? "number" : "text",
        classes: "hc:block hc:w-full",
        value: q,
        onBlur: (z) => {
          F.current || N(z);
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
    dg,
    {
      focusable: !1,
      variant: m ? "error" : "info",
      placement: e.row > 0 && e.row >= t.rowCount - 1 ? "top" : "bottom",
      tooltipText: m || (O ? v("sheet.readOnly") : ""),
      children: /* @__PURE__ */ f("div", { ...X, children: [
        /* @__PURE__ */ f(
          "div",
          {
            "aria-label": `row ${Number(i) + 1} ${l.label} ${y}`,
            ...R,
            className: `hc:h-full hc:w-full hc:py-4 hc:pr-3 hc:pl-4 ${L} hc:touch-manipulation hc:truncate hc:overflow-hidden hc:whitespace-nowrap`,
            title: _ ? void 0 : `${y}`,
            children: l.customRender ? l.customRender(a, y) : y
          }
        ),
        ce
      ] })
    }
  ) });
}
function z0({
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
  const { t: u } = ye(), h = uc();
  function m(p, y) {
    return r.filter(
      (_) => _.columnId === p && _.rowIndex === y
    );
  }
  const d = "hc:bg-hello-csv-muted hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:text-hello-csv-text hc:whitespace-nowrap hc:border-y hc:border-hello-csv-border-strong", v = "hc:text-sm hc:font-medium hc:whitespace-nowrap hc:text-hello-csv-text hc:border-b hc:border-hello-csv-border-strong", w = e.getRowModel().rows, g = hl({
    count: w.length,
    getScrollElement: () => s.current,
    estimateSize: () => wa,
    measureElement: (p) => p == null ? void 0 : p.getBoundingClientRect().height,
    overscan: 20
  }), C = h.state.active, x = h.state.editing;
  se(() => {
    if (!C || x) return;
    g.scrollToIndex(C.row, { align: "auto" });
    let p = 0, y = 0;
    const _ = () => {
      const R = s.current, L = R == null ? void 0 : R.querySelector(
        `[data-cell-row="${C.row}"][data-cell-col="${C.col}"]`
      );
      L ? (document.activeElement !== L && L.focus({ preventScroll: !0 }), S(R, L)) : y++ < 5 && (p = requestAnimationFrame(_));
    };
    return p = requestAnimationFrame(_), () => cancelAnimationFrame(p);
  }, [C == null ? void 0 : C.row, C == null ? void 0 : C.col, x == null ? void 0 : x.row, x == null ? void 0 : x.col]);
  function S(p, y) {
    const _ = p.getBoundingClientRect(), R = y.getBoundingClientRect(), L = c ? ya : 0;
    R.left < _.left + L ? p.scrollLeft -= _.left + L - R.left : R.right > _.right && (p.scrollLeft += R.right - _.right);
  }
  const E = g.getVirtualItems().map((p) => ({
    row: w[p.index],
    index: p.index,
    start: p.start,
    end: p.end
  })), [M, F] = E.length > 0 ? [
    Math.max(
      0,
      E[0].start - g.options.scrollMargin
    ),
    Math.max(
      0,
      g.getTotalSize() - E[E.length - 1].end
    )
  ] : [0, 0], O = te(
    (p) => {
      p && g.measureElement(p);
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
        /* @__PURE__ */ f("thead", { className: "hc:bg-hello-csv-muted hc:sticky hc:top-0 hc:z-10", children: e.getHeaderGroups().map((p) => /* @__PURE__ */ f("tr", { role: "row", "aria-rowindex": 1, children: p.headers.map((y, _) => /* @__PURE__ */ f(
          "th",
          {
            role: "columnheader",
            "aria-colindex": _ + 1,
            "aria-sort": y.column.getIsSorted() === "asc" ? "ascending" : y.column.getIsSorted() === "desc" ? "descending" : y.column.getCanSort() ? "none" : void 0,
            className: y.column.id === ho ? `${d} hc:sticky hc:left-0 hc:z-20` : `hc:relative hc:z-10 ${d}`,
            colSpan: y.colSpan,
            style: { width: y.getSize() },
            children: /* @__PURE__ */ f(
              "div",
              {
                className: `hc:flex hc:w-full ${y.column.getCanSort() ? "hc:cursor-pointer hc:select-none" : ""}`,
                onClick: y.column.getToggleSortingHandler(),
                children: [
                  y.isPlaceholder ? null : /* @__PURE__ */ f("div", { children: ps(
                    y.column.columnDef.header,
                    y.getContext()
                  ) }, `header-${p.id}-${y.id}`),
                  /* @__PURE__ */ f(
                    "span",
                    {
                      className: "hc:bg-hello-csv-text-muted hc:text-hello-csv-surface hc:ml-2 hc:flex-none hc:rounded-sm",
                      children: {
                        asc: /* @__PURE__ */ f(
                          Fm,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        ),
                        desc: /* @__PURE__ */ f(
                          Rm,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        )
                      }[y.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${p.id}-${y.id}`
                  ),
                  y.column.getCanResize() && /* @__PURE__ */ f(
                    "div",
                    {
                      onMouseDown: y.getResizeHandler(),
                      onTouchStart: y.getResizeHandler(),
                      className: "hc:bg-hello-csv-border hc:absolute hc:top-0 hc:right-0 hc:h-full hc:w-0.5 hc:cursor-col-resize hc:touch-none hc:select-none"
                    },
                    `resize-icon-${p.id}-${y.id}`
                  )
                ]
              }
            )
          },
          y.id
        )) }, p.id)) }),
        /* @__PURE__ */ f(
          "tbody",
          {
            className: "hc:divide-hello-csv-border hc:divide-y",
            style: {
              height: `${g.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ f("tr", { role: "presentation", children: /* @__PURE__ */ f("td", { style: { height: M } }) }),
              E.map(({ row: p, index: y }) => /* @__PURE__ */ f(
                "tr",
                {
                  role: "row",
                  "aria-rowindex": y + 2,
                  "data-index": y,
                  ref: O,
                  children: p.getVisibleCells().map((_, R) => {
                    if (_.column.id === ho)
                      return /* @__PURE__ */ f(
                        "td",
                        {
                          role: "gridcell",
                          "aria-colindex": 1,
                          "aria-label": `Select row ${Number(p.id) + 1}`,
                          className: `hc:bg-hello-csv-muted ${v} hc:sticky hc:left-0 hc:z-6 hc:pr-3 hc:pl-4`,
                          style: { width: _.column.getSize() },
                          children: ps(_.column.columnDef.cell, _.getContext())
                        },
                        _.id
                      );
                    const L = R - (c ? 1 : 0), I = t.columns[L].id, N = ni(
                      n,
                      t.id,
                      p.original
                    ), D = m(I, N).map((k) => u(k.message)).join(", ");
                    return /* @__PURE__ */ f(
                      H0,
                      {
                        coord: { row: y, col: L },
                        gridDims: a,
                        widthPx: _.column.getSize(),
                        ariaColIndex: L + (c ? 2 : 1),
                        tdClassName: v,
                        rowId: p.id,
                        sheetDefinition: t,
                        columnDefinition: t.columns.find((k) => k.id === I),
                        allData: n,
                        value: _.getValue(),
                        onUpdated: (k) => o(N, I, k),
                        clearRowsSelection: () => i([]),
                        errorsText: D,
                        enumLabelDict: l
                      },
                      _.id
                    );
                  })
                },
                p.id
              )),
              /* @__PURE__ */ f("tr", { role: "presentation", children: /* @__PURE__ */ f("td", { style: { height: F } }) })
            ]
          }
        )
      ]
    }
  );
}
function B0({ column: e }) {
  const { t } = ye(), n = ri(e);
  return /* @__PURE__ */ f(
    "div",
    {
      className: "hc:flex hc:items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ f("div", { className: "hc:relative hc:mr-3 hc:h-5 hc:w-5", children: [
          /* @__PURE__ */ f(fa, { className: "hc:text-hello-csv-text-subtle hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" }),
          /* @__PURE__ */ f(_p, { className: "hc:text-hello-csv-text-muted hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" })
        ] }),
        e.label,
        " ",
        br(e) && "*",
        e.description && /* @__PURE__ */ f(Ke, { tooltipText: e.description, className: "hc:ml-1.5", children: /* @__PURE__ */ f(
          da,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:size-4"
          }
        ) })
      ]
    }
  );
}
function j0({
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
  sheetValidationErrors: m,
  rowValidationSummary: d,
  resetState: v,
  undo: w,
  redo: g,
  canUndo: C,
  canRedo: x,
  enumLabelDict: S
}) {
  const { csvDownloadMode: E, availableActions: M } = ze(), { t: F } = ye(), { processingInProgress: O } = rt(), [b, p] = K(!1), [y, _] = K(!1);
  function R(D) {
    const k = e.columns.find(
      (A) => A.id === D
    ), P = ls(
      m.filter((A) => A.columnId === D).map((A) => A.rowIndex)
    ).length;
    return {
      label: `${(k == null ? void 0 : k.label) || D} (${P})`,
      value: D
    };
  }
  const L = ls(
    m.map((D) => D.columnId)
  ).map((D) => R(D));
  a != null && L.find((D) => D.value === a) == null && L.push(R(a));
  const I = [
    {
      value: "all",
      label: F("sheet.all") + ` (${d.all})`,
      onClick: () => {
        r([]), i("all");
      },
      variant: "default"
    },
    {
      value: "valid",
      label: F("sheet.valid") + ` (${d.valid})`,
      onClick: () => {
        r([]), i("valid");
      },
      variant: "default"
    },
    {
      value: "errors",
      label: F("sheet.invalid") + ` (${d.errors})`,
      onClick: () => {
        r([]), i("errors");
      },
      variant: "danger"
    }
  ];
  function N() {
    u({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ f("div", { className: "hc:my-5 hc:flex hc:items-center", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5", children: [
      /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f(hg, { activeButton: o, buttons: I }) }),
      M.includes("search") && /* @__PURE__ */ f(
        Ca,
        {
          clearable: !0,
          value: s,
          onChange: (D) => l(D),
          placeholder: F("sheet.search"),
          iconBuilder: (D) => /* @__PURE__ */ f(Sp, { ...D })
        }
      ),
      M.includes("undoRedo") && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Ke, { tooltipText: F("sheet.undoTooltip"), children: /* @__PURE__ */ f(
          cn,
          {
            label: F("sheet.undoTooltip"),
            disabled: !C,
            onClick: w,
            children: /* @__PURE__ */ f(cp, { "aria-hidden": "true" })
          }
        ) }),
        /* @__PURE__ */ f(Ke, { tooltipText: F("sheet.redoTooltip"), children: /* @__PURE__ */ f(
          cn,
          {
            label: F("sheet.redoTooltip"),
            disabled: !x,
            onClick: g,
            children: /* @__PURE__ */ f(dp, { "aria-hidden": "true" })
          }
        ) })
      ] }),
      M.includes("removeRows") && /* @__PURE__ */ f(
        Ke,
        {
          tooltipText: F(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ f(
            cn,
            {
              label: F(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              disabled: n.length <= 0,
              onClick: () => p(!0),
              children: /* @__PURE__ */ f(Tp, { "aria-hidden": "true" })
            }
          )
        }
      ),
      M.includes("addRows") && /* @__PURE__ */ f(Ke, { tooltipText: F("sheet.addRowsTooltip"), children: /* @__PURE__ */ f(
        cn,
        {
          label: F("sheet.addRowsTooltip"),
          onClick: h,
          children: /* @__PURE__ */ f(Rp, { "aria-hidden": "true" })
        }
      ) }),
      M.includes("downloadCsv") && /* @__PURE__ */ f(Ke, { tooltipText: F("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ f(
        cn,
        {
          label: F("sheet.downloadSheetTooltip"),
          disabled: t.length <= 0,
          onClick: () => Oa(
            e,
            t,
            S,
            E
          ),
          children: /* @__PURE__ */ f(ip, { "aria-hidden": "true" })
        }
      ) }),
      /* @__PURE__ */ f(
        Ot,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: F("sheet.filterByError"),
          classes: "hc:min-w-48",
          options: L,
          value: a,
          onChange: (D) => c(D)
        }
      ),
      M.includes("removeRows") && /* @__PURE__ */ f(
        fo,
        {
          open: b,
          setOpen: p,
          onConfirm: N,
          title: F("sheet.removeConfirmationModalTitle"),
          confirmationText: F(
            "sheet.removeConfirmationModalConfirmationText"
          ),
          subTitle: F("sheet.removeConfirmationModalSubTitle", {
            rowsCount: n.length
          }),
          variant: "danger"
        }
      )
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:ml-5 hc:flex hc:items-center", children: [
      O && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Pa, { color: "dark" }),
        /* @__PURE__ */ f("div", { className: "hc:mr-2" })
      ] }),
      M.includes("resetState") && /* @__PURE__ */ f(pe, { children: [
        /* @__PURE__ */ f(Ke, { tooltipText: F("sheet.resetTooltip"), children: /* @__PURE__ */ f(
          fa,
          {
            className: "hc:h-6 hc:w-6 hc:cursor-pointer",
            onClick: () => _(!0)
          }
        ) }),
        /* @__PURE__ */ f(
          fo,
          {
            open: y,
            setOpen: _,
            onConfirm: v,
            title: F("sheet.resetConfirmationModalTitle"),
            confirmationText: F(
              "sheet.resetConfirmationModalConfirmationText"
            ),
            subTitle: F("sheet.resetConfirmationModalSubTitle"),
            variant: "danger"
          }
        )
      ] })
    ] })
  ] });
}
function cn({
  label: e,
  disabled: t = !1,
  onClick: n,
  children: r
}) {
  return /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      "aria-label": e,
      disabled: t,
      onClick: n,
      className: `hc:block hc:h-6 hc:w-6 hc:rounded-sm hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:focus-visible:outline-hello-csv-primary ${t ? "hc:pointer-events-none hc:cursor-not-allowed hc:opacity-50" : "hc:cursor-pointer"}`,
      children: r
    }
  );
}
function U0({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ f(js, { checked: r, setChecked: o });
}
function W0({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((s) => s !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ f(
    js,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
const fc = {
  active: null,
  anchor: null,
  editing: null,
  editInitialValue: "preserve"
};
function G0(e, t) {
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
      return fc;
    default:
      return e;
  }
}
function q0() {
  const [e, t] = tt(G0, fc), n = U(!1), r = ne(
    () => e.active ? P0(e.anchor, e.active) : null,
    [e.active, e.anchor]
  ), o = te(
    (x) => t({ type: "setActive", coord: x }),
    []
  ), i = te(
    (x) => t({ type: "extend", coord: x }),
    []
  ), s = te(
    (x) => t({ type: "selectAll", dims: x }),
    []
  ), l = te(
    (x, S) => t({ type: "startEdit", coord: x, initialValue: S }),
    []
  ), a = te(() => t({ type: "cancelEdit" }), []), c = te(() => t({ type: "stopEditing" }), []), u = te(
    (x) => t({ type: "clamp", dims: x }),
    []
  ), h = te(() => t({ type: "reset" }), []), m = te((x) => {
    n.current = !0, t({ type: "setActive", coord: x });
  }, []), d = te((x) => {
    n.current && t({ type: "extend", coord: x });
  }, []), v = te(() => {
    n.current = !1;
  }, []), w = te(
    (x) => {
      var S, E;
      return ((S = e.active) == null ? void 0 : S.row) === x.row && ((E = e.active) == null ? void 0 : E.col) === x.col;
    },
    [e.active]
  ), g = te(
    (x) => {
      var S, E;
      return ((S = e.editing) == null ? void 0 : S.row) === x.row && ((E = e.editing) == null ? void 0 : E.col) === x.col;
    },
    [e.editing]
  ), C = te(
    (x) => r ? N0(x, r) : !1,
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
    beginDrag: m,
    dragTo: d,
    endDrag: v,
    isActive: w,
    isEditing: g,
    isSelected: C
  };
}
function Y0(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function ws(e) {
  return e.ctrlKey || e.metaKey;
}
const Ur = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right"
};
function K0(e, t, n, r) {
  if (!t.editing && ws(e)) {
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
    return Ur[e.key] || e.key === "Tab" ? { type: "MoveActive", to: Be({ row: 0, col: 0 }, n) } : { type: "NoOp" };
  const i = r(o);
  if (ws(e)) {
    const l = Ur[e.key];
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
  const s = Ur[e.key];
  if (s) {
    const l = Wn(o, s, n);
    return e.shiftKey ? { type: "ExtendSelection", to: l } : { type: "MoveActive", to: l };
  }
  switch (e.key) {
    case "Tab":
      return {
        type: "MoveActive",
        to: Wn(o, e.shiftKey ? "left" : "right", n)
      };
    case "Enter":
      return {
        type: "MoveActive",
        to: Wn(o, e.shiftKey ? "up" : "down", n)
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
  return Y0(e) ? i ? { type: "StartEdit", initialValue: { char: e.key } } : { type: "NoOp" } : { type: "NoOp" };
}
function Z0() {
  const e = U(""), t = te((r) => {
    var o, i;
    e.current = r, (i = (o = navigator.clipboard) == null ? void 0 : o.writeText) == null || i.call(o, r).catch(() => {
    });
  }, []), n = te(async () => {
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
function X0(e, t) {
  const n = e.map(
    (r) => r.map((o, i) => qg(t[i], o))
  );
  return Ma(n, "	");
}
function J0(e, t, n, r, o) {
  const i = [];
  if (e.length === 1 && e[0] && e[0].length === 1 && o) {
    const l = e[0][0];
    for (let a = o.top; a <= o.bottom; a++)
      for (let c = o.left; c <= o.right; c++)
        Co({ row: a, col: c }, n) && r(a, c) && i.push({ row: a, col: c, value: l });
    return i;
  }
  return e.forEach((l, a) => {
    l.forEach((c, u) => {
      const h = t.row + a, m = t.col + u;
      Co({ row: h, col: m }, n) && r(h, m) && i.push({ row: h, col: m, value: c });
    });
  }), i;
}
function Q0(e, t) {
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
function ew({
  sheetDefinition: e,
  data: t,
  rowData: n,
  allData: r,
  canEditRows: o,
  setRowsData: i,
  undo: s,
  redo: l
}) {
  const a = q0(), c = Z0(), u = U(null), h = e.columns, m = ne(
    () => ({ rowCount: n.length, colCount: h.length }),
    [n.length, h.length]
  );
  se(() => {
    a.clampToBounds(m);
  }, [m.rowCount, m.colCount]), se(() => {
    const p = () => a.endDrag();
    return window.addEventListener("mouseup", p), () => window.removeEventListener("mouseup", p);
  }, []);
  const d = U(a);
  d.current = a, se(() => {
    const p = (y) => {
      const _ = d.current;
      if (_.state.editing) return;
      const R = u.current;
      R && !R.contains(y.target) && _.reset();
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []);
  const v = (p) => {
    if (!p) return !1;
    const y = h[p.col];
    return y ? !ri(y) && o : !1;
  }, w = (p, y) => {
    var _;
    return (_ = n[p]) == null ? void 0 : _[h[y].id];
  }, g = (p, y) => Et(w(p, y)), C = (p) => ni(r, e.id, n[p]), x = (p) => {
    if (p.length === 0) return;
    const y = p.map((R) => ({
      rowIndex: C(R.row),
      columnId: h[R.col].id,
      value: R.value
    })), _ = Q0(y, t.rows);
    i(
      _.map((R) => ({
        sheetId: e.id,
        rowIndex: R.rowIndex,
        value: R.value
      }))
    );
  }, S = () => {
    const p = a.range;
    if (!p) return;
    const y = [];
    for (let R = p.top; R <= p.bottom; R++) {
      const L = [];
      for (let I = p.left; I <= p.right; I++)
        L.push(w(R, I));
      y.push(L);
    }
    const _ = X0(
      y,
      h.slice(p.left, p.right + 1)
    );
    c.write(_);
  }, E = () => {
    const p = a.range;
    if (!p) return;
    const y = [];
    for (let _ = p.top; _ <= p.bottom; _++)
      for (let R = p.left; R <= p.right; R++)
        v({ col: R }) && y.push({
          row: _,
          col: R,
          value: Yg(h[R])
        });
    x(y);
  }, M = () => {
    S(), E();
  }, F = async () => {
    const p = a.state.active;
    if (!p) return;
    const y = await c.read();
    if (!y) return;
    const _ = Cv(y, "	");
    if (_.length === 0) return;
    const R = J0(
      _,
      p,
      m,
      (L, I) => v({ col: I }),
      a.range ?? void 0
    );
    x(
      R.map((L) => ({
        row: L.row,
        col: L.col,
        value: oi(h[L.col], L.value)
      }))
    );
  }, O = () => {
    const p = a.range;
    if (!p || p.bottom === p.top) return;
    const y = [];
    for (let _ = p.left; _ <= p.right; _++) {
      const R = w(p.top, _);
      for (let L = p.top + 1; L <= p.bottom; L++)
        v({ col: _ }) && y.push({ row: L, col: _, value: R });
    }
    x(y);
  };
  return { selection: a, dims: m, tableContainerRef: u, handleGridKeyDown: (p) => {
    if (a.state.editing) return;
    const y = a.state.active;
    if ((p.key === "PageDown" || p.key === "PageUp") && y) {
      const R = u.current, L = L0(
        (R == null ? void 0 : R.clientHeight) ?? 0,
        wa
      ), I = Be(
        {
          row: y.row + (p.key === "PageDown" ? L : -L),
          col: y.col
        },
        m
      );
      p.shiftKey ? a.extendTo(I) : a.setActive(I), p.preventDefault();
      return;
    }
    const _ = K0(
      {
        key: p.key,
        shiftKey: p.shiftKey,
        ctrlKey: p.ctrlKey,
        metaKey: p.metaKey,
        altKey: p.altKey
      },
      a.state,
      m,
      v
    );
    switch (_.type) {
      case "MoveActive":
        a.setActive(_.to), p.preventDefault();
        break;
      case "ExtendSelection":
        a.extendTo(_.to), p.preventDefault();
        break;
      case "JumpEdge": {
        if (!y) break;
        const R = k0(y, _.direction, m, g);
        p.shiftKey ? a.extendTo(R) : a.setActive(R), p.preventDefault();
        break;
      }
      case "SelectAll":
        a.selectAll(m), p.preventDefault();
        break;
      case "StartEdit":
        y && a.startEdit(y, _.initialValue), p.preventDefault();
        break;
      case "ClearCells":
        E(), p.preventDefault();
        break;
      case "Copy":
        S(), p.preventDefault();
        break;
      case "Cut":
        M(), p.preventDefault();
        break;
      case "Paste":
        F(), p.preventDefault();
        break;
      case "FillDown":
        O(), p.preventDefault();
        break;
      case "Undo":
        s && (s(), p.preventDefault());
        break;
      case "Redo":
        l && (l(), p.preventDefault());
        break;
    }
  } };
}
function tw({
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
  enumLabelDict: m
}) {
  const { sheetData: d } = rt(), { availableActions: v } = ze(), [w, g] = K([]), [C, x] = K("all"), [S, E] = K(""), [M, F] = K(
    null
  ), O = kg(
    t,
    d,
    C,
    n,
    M,
    e,
    S,
    m
  ), b = v.includes("removeRows"), p = v.includes("editRows"), y = v.includes("undoRedo"), { selection: _, dims: R, tableContainerRef: L, handleGridKeyDown: I } = ew({
    sheetDefinition: e,
    data: t,
    rowData: O,
    allData: d,
    canEditRows: p,
    setRowsData: o,
    // Gate the keyboard shortcuts on the same flag as the toolbar buttons.
    undo: y ? a : void 0,
    redo: y ? c : void 0
  });
  se(() => {
    g([]), x("all"), _.reset();
  }, [e]);
  const N = ne(() => {
    const A = t.rows, H = A.filter(
      ($, T) => !n.some((q) => q.rowIndex === T)
    ), V = A.filter(
      ($, T) => n.some((q) => q.rowIndex === T)
    );
    return {
      all: A.length,
      valid: H.length,
      errors: V.length
    };
  }, [t, n]), D = ne(() => [
    ...v.includes(
      "removeRows"
    ) ? [
      {
        id: ho,
        header: () => /* @__PURE__ */ f(
          U0,
          {
            visibleData: O,
            selectedRows: w,
            setSelectedRows: g
          }
        ),
        cell: ({ row: H }) => /* @__PURE__ */ f(
          W0,
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
        size: ya
      }
    ] : [],
    ...e.columns.map(
      (H) => ({
        id: H.id,
        accessorFn: (V) => V[H.id],
        header: () => /* @__PURE__ */ f(B0, { column: H }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: H.label },
        enableResizing: !0
      })
    )
  ], [e, w, O, v]), k = I0({
    data: O,
    columns: D,
    getCoreRowModel: R0(),
    getSortedRowModel: $0(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: mm,
      maxSize: gm,
      size: vm
    }
  });
  function P(A, H, V) {
    const $ = { ...t.rows[A] };
    V === void 0 ? delete $[H] : $[H] = V, r({
      sheetId: e.id,
      value: $,
      rowIndex: A
    });
  }
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f(
      j0,
      {
        sheetDefinition: e,
        rowData: O,
        selectedRows: w,
        setSelectedRows: g,
        viewMode: C,
        setViewMode: x,
        searchPhrase: S,
        setSearchPhrase: E,
        errorColumnFilter: M,
        setErrorColumnFilter: F,
        removeRows: i,
        addEmptyRow: s,
        sheetValidationErrors: n,
        rowValidationSummary: N,
        resetState: l,
        undo: a,
        redo: c,
        canUndo: u,
        canRedo: h,
        enumLabelDict: m
      }
    ) }),
    /* @__PURE__ */ f(F0, { value: _, children: /* @__PURE__ */ f(
      "div",
      {
        className: "hc:min-h-0 hc:flex-1 hc:overflow-auto",
        ref: L,
        tabIndex: 0,
        onKeyDown: I,
        children: /* @__PURE__ */ f(
          z0,
          {
            tableContainerRef: L,
            table: k,
            sheetDefinition: e,
            allData: d,
            sheetValidationErrors: n,
            onCellValueChanged: P,
            setSelectedRows: g,
            enumLabelDict: m,
            gridDims: R,
            hasCheckboxColumn: b
          }
        )
      }
    ) })
  ] });
}
function hc(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function nw(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && Oa(
      i,
      o.rows,
      n,
      r
    );
  });
}
const ys = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + Jo(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function rw({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = rt(), l = Qo(o), { csvDownloadMode: a } = ze(), { t: c } = ye(), u = hc(l);
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-row hc:px-4 hc:pt-3 hc:pb-2", children: /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:space-y-4", children: [
    /* @__PURE__ */ f("div", { children: /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: /* @__PURE__ */ f(vp, { className: "hc:text-hello-csv-primary hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ f("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ f("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.fileInformation") }),
        /* @__PURE__ */ f("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: n ? `${c("importStatus.original")}: ${gn((n == null ? void 0 : n.size) || 0)} · ${c("importStatus.processed")}: ${gn(ys(l, s, t, a))}` : `${c("importStatus.processed")}: ${gn(ys(l, s, t, a))}` }),
        /* @__PURE__ */ f("div", { className: "hc:mt-5", children: /* @__PURE__ */ f(
          Ve,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => nw(
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
      /* @__PURE__ */ f("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: r === "failed" ? /* @__PURE__ */ f(vo, { className: "hc:text-hello-csv-danger-light hc:h-8 hc:w-8" }) : e ? /* @__PURE__ */ f(wg, { className: "hc:text-hello-csv-warning-light hc:h-8 hc:w-8" }) : /* @__PURE__ */ f(Da, { className: "hc:text-hello-csv-success-light hc:h-8 hc:w-8" }) }),
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
          /* @__PURE__ */ f(ei, { variant: "error", children: c("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function pc({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = ye();
  return /* @__PURE__ */ f(Bs, { withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-col hc:py-5", children: [
    /* @__PURE__ */ f("div", { className: "hello-csv-subtitle hc:px-4 hc:pb-2 hc:text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:px-4 hc:pb-2 hc:text-sm", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ f("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ f(
      rw,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function ow({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = rt(), { onSummaryFinished: o } = ze(), { t: i } = ye(), s = Qo(n), l = hc(s), a = (r == null ? void 0 : r.imported) ?? 0, c = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "hc:mt-4", children: /* @__PURE__ */ f(
        ti,
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
        pc,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ f(Ve, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
  ] });
}
function iw({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = ye();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ f("div", { className: "hello-csv-title hc:text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ f("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ f("div", { className: "hc:mt-4", children: /* @__PURE__ */ f(
        ti,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ f("div", { className: "hc:mt-6", children: /* @__PURE__ */ f(pc, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ f("div", { className: "hc:mt-6 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ f(Ve, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ f(Ve, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function sw({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, s] = K(!1);
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
function lw() {
  return /* @__PURE__ */ f(hp, { className: "hc:text-hello-csv-success hc:absolute hc:inset-0 hc:m-auto hc:h-12 hc:w-12 hc:stroke-4" });
}
function aw({ resetState: e }) {
  const { importProgress: t, mode: n } = rt(), r = n === "submit", { t: o } = ye();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:p-10", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:w-full hc:flex-col", children: /* @__PURE__ */ f("div", { className: "hc:my-16 hc:text-center", children: [
    /* @__PURE__ */ f("div", { className: "hc:relative hc:mx-auto hc:h-24 hc:w-24", children: [
      /* @__PURE__ */ f(sw, { progress: t, pending: r }),
      r && /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ f("div", { className: "hc:absolute hc:inset-0 hc:flex hc:items-center hc:justify-center", children: /* @__PURE__ */ f("b", { className: "hc:text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ f("h2", { className: "hello-csv-title hc:text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ f(lw, {})
    ] }),
    !r && /* @__PURE__ */ f("div", { className: "hc:flex hc:flex-col hc:items-center", children: [
      /* @__PURE__ */ f("h2", { className: "hello-csv-title hc:text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ f("div", { className: "hc:h-5" }),
      /* @__PURE__ */ f(Ve, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function cw({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = rt();
  return /* @__PURE__ */ f("div", { className: "hc:h-full hc:overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ f(aw, { resetState: n }),
    o === "failed" && /* @__PURE__ */ f(
      iw,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ f(ow, { resetState: n, enumLabelDict: r })
  ] });
}
const uw = ({ children: e }) => {
  const { theme: t } = ze();
  return se(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ f(pe, { children: e });
};
function dw({
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
const fw = /* @__PURE__ */ de(dw);
function mc() {
  const { sheets: e, preventUploadOnValidationErrors: t } = ze(), { sheetData: n, validationErrors: r, processingInProgress: o } = rt(), { t: i } = ye();
  return ne(() => {
    const s = eg(e, n).map(
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
    const m = (typeof t == "function" ? t(r) ?? !1 : t ?? !1) && r.length > 0 || c;
    return {
      limits: s,
      byId: l,
      exceeded: a,
      hasExceeded: c,
      preventUpload: m || o === !0,
      uploadBlockedTooltip: m ? u ?? i("importer.uploadBlocked") : i("importer.processing")
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
function hw({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = rt(), { sheets: i } = ze(), { byId: s } = mc(), { t: l } = ye();
  return /* @__PURE__ */ f(
    ag,
    {
      tabs: i.map((a) => {
        const c = s[a.id], u = c != null ? `${a.label} (${c.count} / ${c.maxRows})` : `${a.label} (${t[a.id]})`, h = o.some(
          (d) => d.sheetId === a.id
        ), m = c != null && c.exceeded ? c.tooltip : h ? l("importer.sheetValidationErrors") : void 0;
        return {
          label: u,
          value: a.id,
          icon: m != null ? /* @__PURE__ */ f(Ke, { className: "hc:mr-3", tooltipText: m, children: /* @__PURE__ */ f(fw, { className: "hc:h-4 hc:w-4" }) }) : void 0
        };
      }),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function pw({ onBackToMapping: e }) {
  const { t } = ye(), [n, r] = K(!1);
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
      fo,
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
function mw({ importerRequirements: e }) {
  const { t } = ye();
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
              Ke,
              {
                tooltipText: i.columnDescription ?? t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ f(da, { className: "hc:text-hello-csv-text-muted hc:size-5" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function gw({ importerRequirements: e }) {
  const { t } = ye();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-5", children: [
    /* @__PURE__ */ f("div", { className: "hc:me-3", children: /* @__PURE__ */ f(ti, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ f("div", { className: "hc:flex hc:min-h-0 hc:flex-1 hc:overflow-hidden", children: /* @__PURE__ */ f(mw, { importerRequirements: e }) })
  ] });
}
function vw({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = ze(), { t: i, tHtml: s } = ye(), l = U(null), [a, c] = K(!1), [u, h] = K(null), m = um.concat(
    (r == null ? void 0 : r.map((x) => x.mimeType)) ?? []
  ), d = dm, v = ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", "), w = (x, S) => {
    const E = gv(x.name);
    if (!(m.includes(x.type) || d.includes(E))) {
      h(
        i("uploader.unsupportedFileType", { formats: v })
      );
      return;
    }
    if (x.size > S) {
      h(
        i("uploader.fileTooLarge", { size: gn(S) })
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
  return /* @__PURE__ */ f(Bs, { variant: "muted", withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ f(
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
          /* @__PURE__ */ f(mp, { className: "hc:text-hello-csv-primary hc:h-12 hc:w-12" }),
          /* @__PURE__ */ f("p", { className: "hc:mt-3 hc:text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ f("div", { className: "hc:text-hello-csv-text-muted hc:mt-3 hc:text-sm", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ f("b", { children: gn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ f("div", { className: "hc:mt-3", children: /* @__PURE__ */ f(Ve, { children: i("uploader.browseFiles") }) }),
          u && /* @__PURE__ */ f("div", { className: "hc:mt-2", children: /* @__PURE__ */ f(Fa, { children: u }) }),
          o && /* @__PURE__ */ f("div", { className: "hc:mt-3 hc:text-sm", children: /* @__PURE__ */ f(
            "button",
            {
              type: "button",
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
            accept: m.concat(d).join(","),
            className: "hc:sr-only",
            onChange: (x) => g(x)
          }
        )
      ]
    }
  ) });
}
function ww({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = ze(), r = mv(n), { t: o } = ye();
  return /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-4", children: [
    /* @__PURE__ */ f("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ f("div", { className: "hc:flex-auto hc:md:min-h-0", children: /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col-reverse hc:gap-5 hc:md:flex-row", children: [
      /* @__PURE__ */ f("div", { className: "hc:h-full hc:flex-1 hc:lg:flex-1", children: /* @__PURE__ */ f(gw, { importerRequirements: r }) }),
      /* @__PURE__ */ f("div", { className: "hc:flex-1 hc:lg:flex-2", children: /* @__PURE__ */ f(
        vw,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
async function bs(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
async function yw({
  state: e,
  dispatch: t,
  importerDefinition: n
}) {
  const r = Ka();
  t({ type: "PROCESSING_STARTED", payload: { runId: r } });
  const i = await new er(n, e).getState("submit"), s = [
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
      const c = Qo(i.sheetData), u = await n.onComplete(
        { ...e, sheetData: c, validationErrors: s },
        (h) => {
          t({ type: "PROGRESS", payload: { progress: h } });
        },
        e.sheetDefinitions.map((h) => {
          var m;
          return {
            file: Jo(
              h,
              ((m = c.find((d) => d.sheetId === h.id)) == null ? void 0 : m.rows) ?? [],
              {},
              "value"
            ),
            sheetId: h.id
          };
        })
      );
      await bs(400), t({ type: "PROGRESS", payload: { progress: 100 } }), await bs(200), t({
        type: "COMPLETED",
        payload: { importStatistics: u ?? void 0 }
      });
    } catch {
      t({ type: "FAILED" });
    }
  }
}
function Wr(e) {
  return structuredClone(e);
}
function bw() {
  const e = U([]), t = U([]), [, n] = K(0), r = te(() => n((a) => a + 1), []), o = te(
    (a) => {
      e.current.push(Wr(a)), e.current.length > cm && (e.current = e.current.slice(-50)), t.current = [], r();
    },
    [r]
  ), i = te(
    (a) => {
      if (e.current.length === 0) return null;
      const c = e.current.pop();
      return t.current.push(Wr(a)), r(), c;
    },
    [r]
  ), s = te(
    (a) => {
      if (t.current.length === 0) return null;
      const c = t.current.pop();
      return e.current.push(Wr(a)), r(), c;
    },
    [r]
  ), l = te(() => {
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
function xw(e) {
  const { sheets: t, availableActions: n } = e, { t: r } = ye(), o = U(!0), i = U(null), s = rt(), l = Lv(), a = Ie(), { mode: c, currentSheetId: u, sheetData: h, columnMappings: m, validationErrors: d } = s;
  se(() => {
    var $;
    if (o.current) {
      o.current = !1;
      return;
    }
    ($ = i.current) == null || $.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const v = h.find(
    ($) => $.sheetId === u
  ), w = ne(() => Object.fromEntries(
    h.map(($) => [$.sheetId, $.rows.length])
  ), [h]), g = t.find(
    ($) => $.id === u
  ), C = Lg(t), { preventUpload: x, uploadBlockedTooltip: S } = mc(), E = new er(e, s), M = bw();
  function F() {
    M.record(h);
  }
  async function O($) {
    await E.uploadFile($), E.dispatchChange(l);
  }
  function b() {
    M.reset(), E.setEnterDataManually(), E.dispatchChange(l);
  }
  function p($) {
    E.setMappings($), E.dispatchChange(l);
  }
  async function y() {
    M.reset(), await E.confirmMappings(), E.dispatchChange(l);
  }
  function _($) {
    F(), E.changeCell($), E.dispatchChange(l);
  }
  function R($) {
    $.length !== 0 && (F(), $.forEach((T) => E.changeCell(T)), E.dispatchChange(l));
  }
  function L($) {
    F(), E.removeRows($), E.dispatchChange(l);
  }
  function I() {
    F(), E.addEmptyRow(), E.dispatchChange(l);
  }
  function N() {
    const $ = M.undo(h);
    $ != null && (E.restoreSheetData($), E.dispatchChange(l));
  }
  function D() {
    const $ = M.redo(h);
    $ != null && (E.restoreSheetData($), E.dispatchChange(l));
  }
  function k() {
    M.reset(), l({ type: "RESET" });
  }
  function P() {
    return yw({ state: s, dispatch: l, importerDefinition: e });
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
  return /* @__PURE__ */ f(uw, { children: /* @__PURE__ */ f(bm, { ref: i, children: [
    c === "upload" && /* @__PURE__ */ f(
      ww,
      {
        onFileUploaded: O,
        onEnterDataManually: b
      }
    ),
    c === "mapping" && /* @__PURE__ */ f(
      Vv,
      {
        onMappingsChanged: p,
        onMappingsSet: y,
        onBack: H
      }
    ),
    c === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ f("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
      /* @__PURE__ */ f("div", { className: "hc:flex-none", children: /* @__PURE__ */ f(
        hw,
        {
          idPrefix: a,
          sheetCountDict: w,
          onSheetChange: ($) => l({ type: "SHEET_CHANGED", payload: { sheetId: $ } })
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
            tw,
            {
              data: v,
              sheetDefinition: g,
              sheetValidationErrors: d.filter(
                ($) => $.sheetId === (g == null ? void 0 : g.id)
              ),
              setRowData: _,
              setRowsData: R,
              removeRows: L,
              addEmptyRow: I,
              resetState: k,
              undo: N,
              redo: D,
              canUndo: M.canUndo,
              canRedo: M.canRedo,
              enumLabelDict: C
            }
          )
        }
      ),
      /* @__PURE__ */ f("div", { className: "hc:flex-none", children: v.rows.length > 0 && /* @__PURE__ */ f("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
        /* @__PURE__ */ f("div", { children: m != null && n.includes("backToPreviousStep") && /* @__PURE__ */ f(
          pw,
          {
            onBackToMapping: V
          }
        ) }),
        /* @__PURE__ */ f(
          Ke,
          {
            tooltipText: S,
            hidden: !x,
            children: /* @__PURE__ */ f(Ve, { onClick: P, disabled: x, children: r("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (c === "submit" || c === "failed" || c === "completed") && /* @__PURE__ */ f(
      cw,
      {
        onRetry: P,
        onBackToPreview: A,
        resetState: k,
        enumLabelDict: C
      }
    )
  ] }) });
}
function xs(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...Jm]
  };
  return /* @__PURE__ */ f(nm, { importerDefintion: t, children: /* @__PURE__ */ f(
    kv,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ f(lm, { children: /* @__PURE__ */ f(xw, { ...t }) })
    }
  ) });
}
function $w(e, t) {
  const n = kc(e);
  return n.render(B(xs, t)), {
    render: (r) => n.render(B(xs, r)),
    unmount: () => n.unmount()
  };
}
export {
  Rw as CsvImporterStateBuilder,
  Jm as availableActionList,
  xs as default,
  wr as isDateLikeColumn,
  $w as renderImporter
};
