var sa = Object.defineProperty;
var la = (e, t, n) => t in e ? sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ge = (e, t, n) => la(e, typeof t != "symbol" ? t + "" : t, n);
import { createRoot as aa } from "react-dom/client";
import * as $ from "react";
import K, { forwardRef as zn, useId as ke, useRef as q, useCallback as ie, useEffect as de, useState as re, useMemo as ue, useLayoutEffect as Bn, useContext as he, createContext as ve, Fragment as _e, isValidElement as ca, cloneElement as ua, createElement as Ir, useReducer as an, useSyncExternalStore as da, createRef as _i } from "react";
import { jsx as v, jsxs as U, Fragment as ut } from "react/jsx-runtime";
import * as _n from "react-dom";
import { createPortal as jn, flushSync as xt } from "react-dom";
function Ai(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ai(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function fa() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ai(e)) && (r && (r += " "), r += t);
  return r;
}
const Po = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ko = fa, mt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return ko(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], f = i == null ? void 0 : i[c];
    if (u === null) return null;
    const m = Po(u) || Po(f);
    return o[c][m];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [f, m] = u;
    return m === void 0 || (c[f] = m), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: f, className: m, ...d } = u;
    return Object.entries(d).every((g) => {
      let [w, p] = g;
      return Array.isArray(p) ? p.includes({
        ...i,
        ...l
      }[w]) : {
        ...i,
        ...l
      }[w] === p;
    }) ? [
      ...c,
      f,
      m
    ] : c;
  }, []);
  return ko(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ha = mt(
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
function De({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = ha({ variant: t, disabled: n, withFullWidth: o });
  return /* @__PURE__ */ v(
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
const pa = mt(
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
), Fi = zn(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = pa({ variant: n, withPadding: r });
    return /* @__PURE__ */ v("div", { ref: o, className: `${i} ${t}`, children: e });
  }
);
function Di({ checked: e, setChecked: t, label: n }) {
  const r = ke();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:gap-3", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex hc:h-6 hc:shrink-0 hc:items-center", children: /* @__PURE__ */ U("div", { className: "hc:group hc:grid hc:size-4 hc:grid-cols-1", children: [
      /* @__PURE__ */ v(
        "input",
        {
          checked: e,
          onChange: (o) => t(o.target.checked),
          id: r,
          type: "checkbox",
          className: "hc:checked:border-hello-csv-primary hc:checked:bg-hello-csv-primary hc:indeterminate:border-hello-csv-primary hc:indeterminate:bg-hello-csv-primary hc:focus-visible:outline-hello-csv-primary hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:disabled:border-hello-csv-border-strong hc:disabled:bg-hello-csv-surface-sunken hc:disabled:checked:bg-hello-csv-surface-sunken hc:col-start-1 hc:row-start-1 hc:appearance-none hc:rounded-sm hc:border hc:focus-visible:outline-2 hc:focus-visible:outline-offset-2 hc:forced-colors:appearance-auto"
        }
      ),
      /* @__PURE__ */ U(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 14 14",
          className: "hc:stroke-hello-csv-primary-contrast hc:group-has-disabled:stroke-hello-csv-text-subtle hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:size-3.5 hc:self-center hc:justify-self-center",
          children: [
            /* @__PURE__ */ v(
              "path",
              {
                d: "M3 8L6 11L11 3.5",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "hc:opacity-0 hc:group-has-checked:opacity-100"
              }
            ),
            /* @__PURE__ */ v(
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
    n && /* @__PURE__ */ v("div", { className: "hc:text-sm/6", children: /* @__PURE__ */ v("label", { htmlFor: r, className: "hc:text-hello-csv-text hc:font-medium", children: n }) })
  ] });
}
let ma = !1;
function io() {
  return ma;
}
const Pi = typeof document < "u" ? K.useLayoutEffect : () => {
};
function ga(e) {
  const t = q(null);
  return Pi(() => {
    t.current = e;
  }, [
    e
  ]), ie((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const gt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, St = (e) => e && "window" in e && e.window === e ? e : gt(e).defaultView || window;
function va(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function wa(e) {
  return va(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function ki(e, t) {
  if (!io()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : wa(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const _r = (e = document) => {
  var t;
  if (!io()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Ni(e) {
  return io() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function ya(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ba(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Li(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const xa = Li(function() {
  return ba(/^Mac/i);
}), Sa = Li(function() {
  return ya(/Android/i);
});
function Vi() {
  let e = q(/* @__PURE__ */ new Map()), t = ie((o, i, s, l) => {
    let a = l != null && l.once ? (...c) => {
      e.current.delete(s), s(...c);
    } : s;
    e.current.set(s, {
      type: i,
      eventTarget: o,
      fn: a,
      options: l
    }), o.addEventListener(i, a, l);
  }, []), n = ie((o, i, s, l) => {
    var a;
    let c = ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
    o.removeEventListener(i, c, l), e.current.delete(s);
  }, []), r = ie(() => {
    e.current.forEach((o, i) => {
      n(o.eventTarget, o.type, i, o.options);
    });
  }, [
    n
  ]);
  return de(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Ca(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Sa() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Hi(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ea(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function zi(e) {
  let t = q({
    isFocused: !1,
    observer: null
  });
  Pi(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ga((r) => {
    e == null || e(r);
  });
  return ie((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = Hi(s);
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
let Ra = !1, cn = null, Ar = /* @__PURE__ */ new Set(), Xt = /* @__PURE__ */ new Map(), $t = !1, Fr = !1;
const $a = {
  Tab: !0,
  Escape: !0
};
function so(e, t) {
  for (let n of Ar) n(e, t);
}
function Ma(e) {
  return !(e.metaKey || !xa() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function An(e) {
  $t = !0, Ma(e) && (cn = "keyboard", so("keyboard", e));
}
function Pt(e) {
  cn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && ($t = !0, so("pointer", e));
}
function Bi(e) {
  Ca(e) && ($t = !0, cn = "virtual");
}
function ji(e) {
  e.target === window || e.target === document || Ra || !e.isTrusted || (!$t && !Fr && (cn = "virtual", so("virtual", e)), $t = !1, Fr = !1);
}
function Ui() {
  $t = !1, Fr = !0;
}
function Dr(e) {
  if (typeof window > "u" || Xt.get(St(e))) return;
  const t = St(e), n = gt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    $t = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", An, !0), n.addEventListener("keyup", An, !0), n.addEventListener("click", Bi, !0), t.addEventListener("focus", ji, !0), t.addEventListener("blur", Ui, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Pt, !0), n.addEventListener("pointermove", Pt, !0), n.addEventListener("pointerup", Pt, !0)), t.addEventListener("beforeunload", () => {
    Gi(e);
  }, {
    once: !0
  }), Xt.set(t, {
    focus: r
  });
}
const Gi = (e, t) => {
  const n = St(e), r = gt(e);
  t && r.removeEventListener("DOMContentLoaded", t), Xt.has(n) && (n.HTMLElement.prototype.focus = Xt.get(n).focus, r.removeEventListener("keydown", An, !0), r.removeEventListener("keyup", An, !0), r.removeEventListener("click", Bi, !0), n.removeEventListener("focus", ji, !0), n.removeEventListener("blur", Ui, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Pt, !0), r.removeEventListener("pointermove", Pt, !0), r.removeEventListener("pointerup", Pt, !0)), Xt.delete(n));
};
function Ta(e) {
  const t = gt(e);
  let n;
  return t.readyState !== "loading" ? Dr(e) : (n = () => {
    Dr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Gi(e, n);
}
typeof document < "u" && Ta();
function Wi() {
  return cn !== "pointer";
}
const Oa = /* @__PURE__ */ new Set([
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
function Ia(e, t, n) {
  let r = gt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? St(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Oa.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !$a[n.key]);
}
function _a(e, t, n) {
  Dr(), de(() => {
    let r = (o, i) => {
      Ia(!!(n != null && n.isTextInput), o, i) && e(Wi());
    };
    return Ar.add(r), () => {
      Ar.delete(r);
    };
  }, t);
}
function Aa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ie((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = zi(i), l = ie((a) => {
    const c = gt(a.target), u = c ? _r(c) : _r();
    a.target === a.currentTarget && u === Ni(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
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
function Fa(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = q({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = Vi(), a = ie((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(f), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), c = zi(a), u = ie((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const m = gt(f.target), d = _r(m);
    if (!i.current.isFocusWithin && d === Ni(f.nativeEvent)) {
      r && r(f), o && o(!0), i.current.isFocusWithin = !0, c(f);
      let g = f.currentTarget;
      s(m, "focus", (w) => {
        if (i.current.isFocusWithin && !ki(g, w.target)) {
          let p = new m.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          Ea(p, g);
          let C = Hi(p);
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
let Pr = !1, ur = 0;
function Da() {
  Pr = !0, setTimeout(() => {
    Pr = !1;
  }, 50);
}
function No(e) {
  e.pointerType === "touch" && Da();
}
function Pa() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", No), ur++, () => {
      ur--, !(ur > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", No);
    };
}
function qi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = re(!1), l = q({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(Pa, []);
  let { addGlobalListener: a, removeAllGlobalListeners: c } = Vi(), { hoverProps: u, triggerHoverEnd: f } = ue(() => {
    let m = (w, p) => {
      if (l.pointerType = p, o || p === "touch" || l.isHovered || !w.currentTarget.contains(w.target)) return;
      l.isHovered = !0;
      let C = w.currentTarget;
      l.target = C, a(gt(w.target), "pointerover", (x) => {
        l.isHovered && l.target && !ki(l.target, x.target) && d(x, x.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: C,
        pointerType: p
      }), n && n(!0), s(!0);
    }, d = (w, p) => {
      let C = l.target;
      l.pointerType = "", l.target = null, !(p === "touch" || !l.isHovered || !C) && (l.isHovered = !1, c(), r && r({
        type: "hoverend",
        target: C,
        pointerType: p
      }), n && n(!1), s(!1));
    }, g = {};
    return typeof PointerEvent < "u" && (g.onPointerEnter = (w) => {
      Pr && w.pointerType === "mouse" || m(w, w.pointerType);
    }, g.onPointerLeave = (w) => {
      !o && w.currentTarget.contains(w.target) && d(w, w.pointerType);
    }), {
      hoverProps: g,
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
  return de(() => {
    o && f({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function Yi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = q({
    isFocused: !1,
    isFocusVisible: t || Wi()
  }), [i, s] = re(!1), [l, a] = re(() => o.current.isFocused && o.current.isFocusVisible), c = ie(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = ie((d) => {
    o.current.isFocused = d, s(d), c();
  }, [
    c
  ]);
  _a((d) => {
    o.current.isFocusVisible = d, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Aa({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: m } = Fa({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? m : f
  };
}
var ka = Object.defineProperty, Na = (e, t, n) => t in e ? ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dr = (e, t, n) => (Na(e, typeof t != "symbol" ? t + "" : t, n), n);
let La = class {
  constructor() {
    dr(this, "current", this.detect()), dr(this, "handoffState", "pending"), dr(this, "currentId", 0);
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
}, Rt = new La();
function Ht(e) {
  return Rt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Un(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function qe() {
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
    return Un(() => {
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
    let r = qe();
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
function Ot() {
  let [e] = re(qe);
  return de(() => () => e.dispose(), [e]), e;
}
let fe = (e, t) => {
  Rt.isServer ? de(e, t) : Bn(e, t);
};
function vt(e) {
  let t = q(e);
  return fe(() => {
    t.current = e;
  }, [e]), t;
}
let Q = function(e) {
  let t = vt(e);
  return K.useCallback((...n) => t.current(...n), [t]);
};
function Va(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Ha(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function za({ disabled: e = !1 } = {}) {
  let t = q(null), [n, r] = re(!1), o = Ot(), i = Q(() => {
    t.current = null, r(!1), o.dispose();
  }), s = Q((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = Ht(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (c) => {
          if (t.current) {
            let u = Va(c);
            r(Ha(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let Ba = ve(void 0);
function lo() {
  return he(Ba);
}
function kr(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ae(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ae), r;
}
var Nt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Nt || {}), at = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(at || {});
function Se() {
  let e = Ua();
  return ie((t) => ja({ mergeRefs: e, ...t }), [e]);
}
function ja({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? Ga;
  let a = Ki(t, e);
  if (i) return wn(a, n, r, s, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...f } = a;
    if (u) return wn(f, n, r, s, l);
  }
  if (c & 1) {
    let { unmount: u = !0, ...f } = a;
    return Ae(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return wn({ ...f, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return wn(a, n, r, s, l);
}
function wn(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = fr(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, u = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let m = !1, d = [];
    for (let [g, w] of Object.entries(t)) typeof w == "boolean" && (m = !0), w === !0 && d.push(g.replace(/([A-Z])/g, (p) => `-${p.toLowerCase()}`));
    if (m) {
      f["data-headlessui-state"] = d.join(" ");
      for (let g of d) f[`data-${g}`] = "";
    }
  }
  if (i === _e && (Object.keys(lt(a)).length > 0 || Object.keys(lt(f)).length > 0)) if (!ca(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(lt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(lt(a)).concat(Object.keys(lt(f))).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
  } else {
    let m = u.props, d = m == null ? void 0 : m.className, g = typeof d == "function" ? (...C) => kr(d(...C), a.className) : kr(d, a.className), w = g ? { className: g } : {}, p = Ki(u.props, lt(fr(a, ["ref"])));
    for (let C in f) C in p && delete f[C];
    return ua(u, Object.assign({}, p, f, c, { ref: o(Wa(u), c.ref) }, w));
  }
  return Ir(i, Object.assign({}, fr(a, ["ref"]), i !== _e && c, i !== _e && f), u);
}
function Ua() {
  let e = q([]), t = ie((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Ga(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Ki(...e) {
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
function ao(...e) {
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
function be(e) {
  var t;
  return Object.assign(zn(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function lt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function fr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Wa(e) {
  return K.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function qa(e, t, n) {
  let [r, o] = re(n), i = e !== void 0, s = q(i), l = q(!1), a = q(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Q((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function Ya(e) {
  let [t] = re(e);
  return t;
}
function Zi(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Ji(n, Xi(t, r), o);
  return n;
}
function Xi(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ji(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Ji(e, Xi(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Zi(n, t, e);
}
let Ka = "span";
var Lt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Lt || {});
function Za(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Ka, name: "Hidden" });
}
let nn = be(Za), Xa = ve(null);
function Ja({ children: e }) {
  let t = he(Xa);
  if (!t) return K.createElement(K.Fragment, null, e);
  let { target: n } = t;
  return n ? jn(K.createElement(K.Fragment, null, e), n) : null;
}
function Qa({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = re(null), l = Ot();
  return de(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), K.createElement(Ja, null, K.createElement(ec, { setForm: s, formId: t }), Zi(e).map(([a, c]) => K.createElement(nn, { features: Lt.Hidden, ...lt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: c, ...o }) })));
}
function ec({ setForm: e, formId: t }) {
  return de(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : K.createElement(nn, { features: Lt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let tc = ve(void 0);
function Qi() {
  return he(tc);
}
function nc(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && rc(n) ? !1 : r;
}
function rc(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let es = Symbol();
function oc(e, t = !0) {
  return Object.assign(e, { [es]: t });
}
function Oe(...e) {
  let t = q(e);
  de(() => {
    t.current = e;
  }, [e]);
  let n = Q((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[es])) ? void 0 : n;
}
let Gn = ve(null);
Gn.displayName = "DescriptionContext";
function ts() {
  let e = he(Gn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ts), t;
  }
  return e;
}
function ic() {
  var e, t;
  return (t = (e = he(Gn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function sc() {
  let [e, t] = re([]);
  return [e.length > 0 ? e.join(" ") : void 0, ue(() => function(n) {
    let r = Q((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ue(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return K.createElement(Gn.Provider, { value: o }, n.children);
  }, [t])];
}
let lc = "p";
function ac(e, t) {
  let n = ke(), r = lo(), { id: o = `headlessui-description-${n}`, ...i } = e, s = ts(), l = Oe(t);
  fe(() => s.register(o), [o, s.register]);
  let a = r || !1, c = ue(() => ({ ...s.slot, disabled: a }), [s.slot, a]), u = { ref: l, ...s.props, id: o };
  return Se()({ ourProps: u, theirProps: i, slot: c, defaultTag: lc, name: s.name || "Description" });
}
let cc = be(ac), uc = Object.assign(cc, {});
var Re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Re || {});
let Wn = ve(null);
Wn.displayName = "LabelContext";
function ns() {
  let e = he(Wn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ns), t;
  }
  return e;
}
function qn(e) {
  var t, n, r;
  let o = (n = (t = he(Wn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function dc({ inherit: e = !1 } = {}) {
  let t = qn(), [n, r] = re([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ue(() => function(i) {
    let s = Q((a) => (r((c) => [...c, a]), () => r((c) => {
      let u = c.slice(), f = u.indexOf(a);
      return f !== -1 && u.splice(f, 1), u;
    }))), l = ue(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return K.createElement(Wn.Provider, { value: l }, i.children);
  }, [r])];
}
let fc = "label";
function hc(e, t) {
  var n;
  let r = ke(), o = ns(), i = Qi(), s = lo(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...u } = e, f = Oe(t);
  fe(() => o.register(l), [l, o.register]);
  let m = Q((p) => {
    let C = p.currentTarget;
    if (C instanceof HTMLLabelElement && p.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(p), C instanceof HTMLLabelElement) {
      let x = document.getElementById(C.htmlFor);
      if (x) {
        let S = x.getAttribute("disabled");
        if (S === "true" || S === "") return;
        let R = x.getAttribute("aria-disabled");
        if (R === "true" || R === "") return;
        (x instanceof HTMLInputElement && (x.type === "radio" || x.type === "checkbox") || x.role === "radio" || x.role === "checkbox" || x.role === "switch") && x.click(), x.focus({ preventScroll: !0 });
      }
    }
  }), d = s || !1, g = ue(() => ({ ...o.slot, disabled: d }), [o.slot, d]), w = { ref: f, ...o.props, id: l, htmlFor: a, onClick: m };
  return c && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Se()({ ourProps: w, theirProps: u, slot: g, defaultTag: a ? fc : "div", name: o.name || "Label" });
}
let pc = be(hc), mc = Object.assign(pc, {}), gc = ve(() => {
});
function vc({ value: e, children: t }) {
  return K.createElement(gc.Provider, { value: e }, t);
}
function Ft(e, t, n) {
  let r = n.initialDeps ?? [], o;
  function i() {
    var s, l, a, c;
    let u;
    n.key && ((s = n.debug) != null && s.call(n)) && (u = Date.now());
    const f = e();
    if (!(f.length !== r.length || f.some((g, w) => r[w] !== g)))
      return o;
    r = f;
    let d;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now()), o = t(...f), n.key && ((a = n.debug) != null && a.call(n))) {
      const g = Math.round((Date.now() - u) * 100) / 100, w = Math.round((Date.now() - d) * 100) / 100, p = w / 16, C = (x, S) => {
        for (x = String(x); x.length < S; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${C(w, 5)} /${C(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * p, 120)
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
function Lo(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const wc = (e, t) => Math.abs(e - t) <= 1, yc = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var qt = { NODE_ENV: "production" };
const Vo = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, bc = (e) => e, xc = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Sc = (e, t) => {
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
  if (o(Vo(n)), !r.ResizeObserver)
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
      o(Vo(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Ho = {
  passive: !0
}, zo = typeof window > "u" ? !0 : "onscrollend" in window, Cc = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && zo ? () => {
  } : yc(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (u) => () => {
    const { horizontal: f, isRtl: m } = e.options;
    o = f ? n.scrollLeft * (m && -1 || 1) : n.scrollTop, i(), t(o, u);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, Ho);
  const c = e.options.useScrollendEvent && zo;
  return c && n.addEventListener("scrollend", a, Ho), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
  };
}, Ec = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Rc = (e, {
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
class $c {
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
        getItemKey: bc,
        rangeExtractor: xc,
        onChange: () => {
        },
        measureElement: Ec,
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
    }, this.maybeNotify = Ft(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: qt.NODE_ENV !== "production",
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
    }, this.getMeasurementOptions = Ft(
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
    ), this.getMeasurements = Ft(
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
          const f = i(u), m = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), d = m ? m.end + this.options.gap : r + o, g = l.get(f), w = typeof g == "number" ? g : this.options.estimateSize(u), p = d + w, C = m ? m.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: d,
            size: w,
            end: p,
            key: f,
            lane: C
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Ft(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Mc({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Ft(
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
        key: qt.NODE_ENV !== "production",
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
    }, this.getVirtualItems = Ft(
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
        key: qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Lo(
          r[rs(
            0,
            r.length - 1,
            (o) => Lo(r[o]).start,
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
          const [u] = c, f = this.getScrollOffset();
          wc(u, f) || this.scrollToIndex(n, { align: l, behavior: o });
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
const rs = (e, t, n, r) => {
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
function Mc({
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
  let s = rs(
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
const Bo = typeof document < "u" ? $.useLayoutEffect : $.useEffect;
function Tc(e) {
  const t = $.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? xt(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = $.useState(
    () => new $c(n)
  );
  return r.setOptions(n), Bo(() => r._didMount(), []), Bo(() => r._willUpdate()), r;
}
function os(e) {
  return Tc({
    observeElementRect: Sc,
    observeElementOffset: Cc,
    scrollToFn: Rc,
    ...e
  });
}
function Oc(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Ic(e = Oc) {
  return ie((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function _c(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function jo(e, t = !1) {
  let [n, r] = an(() => ({}), {}), o = ue(() => _c(e), [e, n]);
  return fe(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let Ac = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function is(e, t) {
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
function ss(e) {
  return da(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Fc = new Ac(() => is(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function zt(e, t) {
  let n = Fc.get(t), r = ke(), o = ss(n);
  if (fe(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let Nr = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map();
function Uo(e) {
  var t;
  let n = (t = Jt.get(e)) != null ? t : 0;
  return Jt.set(e, n + 1), n !== 0 ? () => Go(e) : (Nr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Go(e));
}
function Go(e) {
  var t;
  let n = (t = Jt.get(e)) != null ? t : 1;
  if (n === 1 ? Jt.delete(e) : Jt.set(e, n - 1), n !== 1) return;
  let r = Nr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Nr.delete(e));
}
function ls(e, { allowed: t, disallowed: n } = {}) {
  let r = zt(e, "inert-others");
  fe(() => {
    var o, i;
    if (!r) return;
    let s = qe();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(Uo(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let c = Ht(a);
      if (!c) continue;
      let u = a.parentElement;
      for (; u && u !== c.body; ) {
        for (let f of u.children) l.some((m) => f.contains(m)) || s.add(Uo(f));
        u = u.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function as(e, t, n) {
  let r = vt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  de(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = qe();
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
let Fn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Dc = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(nt || {}), Lr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lr || {}), Pc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Pc || {});
function kc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Fn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Nc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Dc)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var cs = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(cs || {});
function Lc(e, t = 0) {
  var n;
  return e === ((n = Ht(e)) == null ? void 0 : n.body) ? !1 : Ae(t, { 0() {
    return e.matches(Fn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Fn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Vc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Vc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ot(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Hc = ["textarea", "input"].join(",");
function zc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Hc)) != null ? n : !1;
}
function us(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qt(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? us(e) : e : t & 64 ? Nc(e) : kc(e);
  o.length > 0 && s.length > 1 && (s = s.filter((d) => !o.some((g) => g != null && "current" in g ? (g == null ? void 0 : g.current) === d : g === d))), r = r ?? i.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, u = 0, f = s.length, m;
  do {
    if (u >= f || u + f <= 0) return 0;
    let d = a + u;
    if (t & 16) d = (d + f) % f;
    else {
      if (d < 0) return 3;
      if (d >= f) return 1;
    }
    m = s[d], m == null || m.focus(c), u += l;
  } while (m !== i.activeElement);
  return t & 6 && zc(m) && m.select(), 2;
}
function ds() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Bc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function fs() {
  return ds() || Bc();
}
function Yt(e, t, n, r) {
  let o = vt(n);
  de(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function hs(e, t, n, r) {
  let o = vt(n);
  de(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Wo = 30;
function ps(e, t, n) {
  let r = zt(e, "outside-click"), o = vt(n), i = ie(function(a, c) {
    if (a.defaultPrevented) return;
    let u = c(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let f = function m(d) {
      return typeof d == "function" ? m(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let m of f) if (m !== null && (m.contains(u) || a.composed && a.composedPath().includes(m))) return;
    return !Lc(u, cs.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), s = q(null);
  Yt(r, "pointerdown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), Yt(r, "mousedown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), Yt(r, "click", (a) => {
    fs() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = q({ x: 0, y: 0 });
  Yt(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), Yt(r, "touchend", (a) => {
    let c = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= Wo || Math.abs(c.y - l.current.y) >= Wo)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), hs(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function It(...e) {
  return ue(() => Ht(...e), [...e]);
}
function co(e, t, n, r) {
  let o = vt(n);
  de(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ms(e) {
  let t = q({ value: "", selectionStart: null, selectionEnd: null });
  return co(e, "blur", (n) => {
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
function jc(e, t) {
  return ue(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Uc() {
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
function Gc() {
  return ds() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = qe();
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
function Wc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function qc(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Ct = is(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: qe(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: qc(n) }, o = [Gc(), Uc(), Wc()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Ct.subscribe(() => {
  let e = Ct.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Ct.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ct.dispatch("TEARDOWN", n);
  }
});
function Yc(e, t, n = () => ({ containers: [] })) {
  let r = ss(Ct), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return fe(() => {
    if (!(!t || !e)) return Ct.dispatch("PUSH", t, n), () => Ct.dispatch("POP", t, n);
  }, [e, t]), i;
}
function gs(e, t, n = () => [document.body]) {
  let r = zt(e, "scroll-lock");
  Yc(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function qo(e) {
  return [e.screenX, e.screenY];
}
function Kc() {
  let e = q([-1, -1]);
  return { wasMoved(t) {
    let n = qo(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = qo(t);
  } };
}
function Zc(e = 0) {
  let [t, n] = re(e), r = ie((a) => n(a), [t]), o = ie((a) => n((c) => c | a), [t]), i = ie((a) => (t & a) === a, [t]), s = ie((a) => n((c) => c & ~a), [n]), l = ie((a) => n((c) => c ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var Xc = { NODE_ENV: "production" }, Yo, Ko;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Yo = process == null ? void 0 : Xc) == null ? void 0 : Yo.NODE_ENV) === "test" && typeof ((Ko = Element == null ? void 0 : Element.prototype) == null ? void 0 : Ko.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Jc = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Jc || {});
function vs(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ws(e, t, n, r) {
  let [o, i] = re(n), { hasFlag: s, addFlag: l, removeFlag: a } = Zc(e && o ? 3 : 0), c = q(!1), u = q(!1), f = Ot();
  return fe(() => {
    var m;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (m = r == null ? void 0 : r.start) == null || m.call(r, n), Qc(t, { inFlight: c, prepare() {
        u.current ? u.current = !1 : u.current = c.current, c.current = !0, !u.current && (n ? (l(3), a(4)) : (l(4), a(2)));
      }, run() {
        u.current ? n ? (a(3), l(4)) : (a(4), l(3)) : n ? a(1) : l(1);
      }, done() {
        var d;
        u.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (c.current = !1, a(7), n || i(!1), (d = r == null ? void 0 : r.end) == null || d.call(r, n));
      } });
    }
  }, [e, n, t, f]), e ? [o, { closed: s(1), enter: s(2), leave: s(4), transition: s(2) || s(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Qc(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = qe();
  return tu(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(eu(e, r));
    });
  }), i.dispose;
}
function eu(e, t) {
  var n, r;
  let o = qe();
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
function tu(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function nu(e, { container: t, accept: n, walk: r }) {
  let o = q(n), i = q(r);
  de(() => {
    o.current = n, i.current = r;
  }, [n, r]), fe(() => {
    if (!t || !e) return;
    let s = Ht(t);
    if (!s) return;
    let l = o.current, a = i.current, c = Object.assign((f) => l(f), { acceptNode: l }), u = s.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, c, !1);
    for (; u.nextNode(); ) a(u.currentNode);
  }, [t, e, o, i]);
}
function rn(e, t) {
  let n = q([]), r = Q(e);
  de(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function Yn() {
  return typeof window < "u";
}
function Bt(e) {
  return ys(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ke(e) {
  var t;
  return (t = (ys(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ys(e) {
  return Yn() ? e instanceof Node || e instanceof Fe(e).Node : !1;
}
function Me(e) {
  return Yn() ? e instanceof Element || e instanceof Fe(e).Element : !1;
}
function Ye(e) {
  return Yn() ? e instanceof HTMLElement || e instanceof Fe(e).HTMLElement : !1;
}
function Zo(e) {
  return !Yn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fe(e).ShadowRoot;
}
function un(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = He(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ru(e) {
  return ["table", "td", "th"].includes(Bt(e));
}
function Kn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function uo(e) {
  const t = fo(), n = Me(e) ? He(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ou(e) {
  let t = ft(e);
  for (; Ye(t) && !Vt(t); ) {
    if (uo(t))
      return t;
    if (Kn(t))
      return null;
    t = ft(t);
  }
  return null;
}
function fo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes(Bt(e));
}
function He(e) {
  return Fe(e).getComputedStyle(e);
}
function Zn(e) {
  return Me(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Bt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zo(e) && e.host || // Fallback.
    Ke(e)
  );
  return Zo(t) ? t.host : t;
}
function bs(e) {
  const t = ft(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ye(t) && un(t) ? t : bs(t);
}
function on(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Fe(o);
  if (i) {
    const l = Vr(s);
    return t.concat(s, s.visualViewport || [], un(o) ? o : [], l && n ? on(l) : []);
  }
  return t.concat(o, on(o, [], n));
}
function Vr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function iu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Mt = Math.min, $e = Math.max, sn = Math.round, yn = Math.floor, We = (e) => ({
  x: e,
  y: e
}), su = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, lu = {
  start: "end",
  end: "start"
};
function Xo(e, t, n) {
  return $e(e, Mt(t, n));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ht(e) {
  return e.split("-")[0];
}
function dn(e) {
  return e.split("-")[1];
}
function xs(e) {
  return e === "x" ? "y" : "x";
}
function Ss(e) {
  return e === "y" ? "height" : "width";
}
function dt(e) {
  return ["top", "bottom"].includes(ht(e)) ? "y" : "x";
}
function Cs(e) {
  return xs(dt(e));
}
function au(e, t, n) {
  n === void 0 && (n = !1);
  const r = dn(e), o = Cs(e), i = Ss(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Dn(s)), [s, Dn(s)];
}
function cu(e) {
  const t = Dn(e);
  return [Hr(e), t, Hr(t)];
}
function Hr(e) {
  return e.replace(/start|end/g, (t) => lu[t]);
}
function uu(e, t, n) {
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
function du(e, t, n, r) {
  const o = dn(e);
  let i = uu(ht(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Hr)))), i;
}
function Dn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => su[t]);
}
function fu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hu(e) {
  return typeof e != "number" ? fu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pn(e) {
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
function Jo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = dt(t), s = Cs(t), l = Ss(s), a = ht(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[l] / 2 - o[l] / 2;
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
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (dn(t)) {
    case "start":
      d[s] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const pu = async (e, t, n) => {
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
    y: f
  } = Jo(c, r, a), m = r, d = {}, g = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: p,
      fn: C
    } = l[w], {
      x,
      y: S,
      data: R,
      reset: _
    } = await C({
      x: u,
      y: f,
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
    u = x ?? u, f = S ?? f, d = {
      ...d,
      [p]: {
        ...d[p],
        ...R
      }
    }, _ && g <= 50 && (g++, typeof _ == "object" && (_.placement && (m = _.placement), _.rects && (c = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: u,
      y: f
    } = Jo(c, m, a)), w = -1);
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: d
  };
};
async function Xn(e, t) {
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
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = jt(t, e), g = hu(d), p = l[m ? f === "floating" ? "reference" : "floating" : f], C = Pn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(p))) == null || n ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), x = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), R = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Pn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: x,
    offsetParent: S,
    strategy: a
  }) : x);
  return {
    top: (C.top - _.top + g.top) / R.y,
    bottom: (_.bottom - C.bottom + g.bottom) / R.y,
    left: (C.left - _.left + g.left) / R.x,
    right: (_.right - C.right + g.right) / R.x
  };
}
const mu = function(e) {
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
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: w = !0,
        ...p
      } = jt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = ht(o), x = dt(l), S = ht(l) === l, R = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), _ = m || (S || !w ? [Dn(l)] : cu(l)), N = g !== "none";
      !m && N && _.push(...du(l, w, g, R));
      const F = [l, ..._], b = await Xn(t, p), h = [];
      let y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && h.push(b[C]), f) {
        const k = au(o, s, R);
        h.push(b[k[0]], b[k[1]]);
      }
      if (y = [...y, {
        placement: o,
        overflows: h
      }], !h.every((k) => k <= 0)) {
        var E, T;
        const k = (((E = i.flip) == null ? void 0 : E.index) || 0) + 1, M = F[k];
        if (M) {
          var L;
          const I = f === "alignment" ? x !== dt(M) : !1, D = ((L = y[0]) == null ? void 0 : L.overflows[0]) > 0;
          if (!I || D)
            return {
              data: {
                index: k,
                overflows: y
              },
              reset: {
                placement: M
              }
            };
        }
        let O = (T = y.filter((I) => I.overflows[0] <= 0).sort((I, D) => I.overflows[1] - D.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var A;
              const I = (A = y.filter((D) => {
                if (N) {
                  const z = dt(D.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((z) => z > 0).reduce((z, H) => z + H, 0)]).sort((D, z) => D[1] - z[1])[0]) == null ? void 0 : A[0];
              I && (O = I);
              break;
            }
            case "initialPlacement":
              O = l;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
async function gu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ht(n), l = dn(n), a = dt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && a ? -1 : 1, f = jt(t, e);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return l && typeof g == "number" && (d = l === "end" ? g * -1 : g), a ? {
    x: d * u,
    y: m * c
  } : {
    x: m * c,
    y: d * u
  };
}
const vu = function(e) {
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
      } = t, a = await gu(t, e);
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
}, wu = function(e) {
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
          fn: (p) => {
            let {
              x: C,
              y: x
            } = p;
            return {
              x: C,
              y: x
            };
          }
        },
        ...a
      } = jt(e, t), c = {
        x: n,
        y: r
      }, u = await Xn(t, a), f = dt(ht(o)), m = xs(f);
      let d = c[m], g = c[f];
      if (i) {
        const p = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", x = d + u[p], S = d - u[C];
        d = Xo(x, d, S);
      }
      if (s) {
        const p = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", x = g + u[p], S = g - u[C];
        g = Xo(x, g, S);
      }
      const w = l.fn({
        ...t,
        [m]: d,
        [f]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [m]: i,
            [f]: s
          }
        }
      };
    }
  };
}, yu = function(e) {
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
      } = jt(e, t), u = await Xn(t, c), f = ht(o), m = dn(o), d = dt(o) === "y", {
        width: g,
        height: w
      } = i.floating;
      let p, C;
      f === "top" || f === "bottom" ? (p = f, C = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = f, p = m === "end" ? "top" : "bottom");
      const x = w - u.top - u.bottom, S = g - u.left - u.right, R = Mt(w - u[p], x), _ = Mt(g - u[C], S), N = !t.middlewareData.shift;
      let F = R, b = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (b = S), (r = t.middlewareData.shift) != null && r.enabled.y && (F = x), N && !m) {
        const y = $e(u.left, 0), E = $e(u.right, 0), T = $e(u.top, 0), L = $e(u.bottom, 0);
        d ? b = g - 2 * (y !== 0 || E !== 0 ? y + E : $e(u.left, u.right)) : F = w - 2 * (T !== 0 || L !== 0 ? T + L : $e(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: b,
        availableHeight: F
      });
      const h = await s.getDimensions(l.floating);
      return g !== h.width || w !== h.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Es(e) {
  const t = He(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ye(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = sn(n) !== i || sn(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function ho(e) {
  return Me(e) ? e : e.contextElement;
}
function kt(e) {
  const t = ho(e);
  if (!Ye(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Es(t);
  let s = (i ? sn(n.width) : n.width) / r, l = (i ? sn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const bu = /* @__PURE__ */ We(0);
function Rs(e) {
  const t = Fe(e);
  return !fo() || !t.visualViewport ? bu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fe(e) ? !1 : t;
}
function Tt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ho(e);
  let s = We(1);
  t && (r ? Me(r) && (s = kt(r)) : s = kt(e));
  const l = xu(i, n, r) ? Rs(i) : We(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (i) {
    const m = Fe(i), d = r && Me(r) ? Fe(r) : r;
    let g = m, w = Vr(g);
    for (; w && r && d !== g; ) {
      const p = kt(w), C = w.getBoundingClientRect(), x = He(w), S = C.left + (w.clientLeft + parseFloat(x.paddingLeft)) * p.x, R = C.top + (w.clientTop + parseFloat(x.paddingTop)) * p.y;
      a *= p.x, c *= p.y, u *= p.x, f *= p.y, a += S, c += R, g = Fe(w), w = Vr(g);
    }
  }
  return Pn({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
function po(e, t) {
  const n = Zn(e).scrollLeft;
  return t ? t.left + n : Tt(Ke(e)).left + n;
}
function $s(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    po(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Su(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ke(r), l = t ? Kn(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = We(1);
  const u = We(0), f = Ye(r);
  if ((f || !f && !i) && ((Bt(r) !== "body" || un(s)) && (a = Zn(r)), Ye(r))) {
    const d = Tt(r);
    c = kt(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  const m = s && !f && !i ? $s(s, a, !0) : We(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + m.y
  };
}
function Cu(e) {
  return Array.from(e.getClientRects());
}
function Eu(e) {
  const t = Ke(e), n = Zn(e), r = e.ownerDocument.body, o = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + po(e);
  const l = -n.scrollTop;
  return He(r).direction === "rtl" && (s += $e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Ru(e, t) {
  const n = Fe(e), r = Ke(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = fo();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function $u(e, t) {
  const n = Tt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ye(e) ? kt(e) : We(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function Qo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ru(e, n);
  else if (t === "document")
    r = Eu(Ke(e));
  else if (Me(t))
    r = $u(t, n);
  else {
    const o = Rs(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pn(r);
}
function Ms(e, t) {
  const n = ft(e);
  return n === t || !Me(n) || Vt(n) ? !1 : He(n).position === "fixed" || Ms(n, t);
}
function Mu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = on(e, [], !1).filter((l) => Me(l) && Bt(l) !== "body"), o = null;
  const i = He(e).position === "fixed";
  let s = i ? ft(e) : e;
  for (; Me(s) && !Vt(s); ) {
    const l = He(s), a = uo(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || un(s) && !a && Ms(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = ft(s);
  }
  return t.set(e, r), r;
}
function Tu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Kn(t) ? [] : Mu(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, u) => {
    const f = Qo(t, u, o);
    return c.top = $e(f.top, c.top), c.right = Mt(f.right, c.right), c.bottom = Mt(f.bottom, c.bottom), c.left = $e(f.left, c.left), c;
  }, Qo(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Ou(e) {
  const {
    width: t,
    height: n
  } = Es(e);
  return {
    width: t,
    height: n
  };
}
function Iu(e, t, n) {
  const r = Ye(t), o = Ke(t), i = n === "fixed", s = Tt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = We(0);
  function c() {
    a.x = po(o);
  }
  if (r || !r && !i)
    if ((Bt(t) !== "body" || un(o)) && (l = Zn(t)), r) {
      const d = Tt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? $s(o, l) : We(0), f = s.left + l.scrollLeft - a.x - u.x, m = s.top + l.scrollTop - a.y - u.y;
  return {
    x: f,
    y: m,
    width: s.width,
    height: s.height
  };
}
function hr(e) {
  return He(e).position === "static";
}
function ei(e, t) {
  if (!Ye(e) || He(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ke(e) === n && (n = n.ownerDocument.body), n;
}
function Ts(e, t) {
  const n = Fe(e);
  if (Kn(e))
    return n;
  if (!Ye(e)) {
    let o = ft(e);
    for (; o && !Vt(o); ) {
      if (Me(o) && !hr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = ei(e, t);
  for (; r && ru(r) && hr(r); )
    r = ei(r, t);
  return r && Vt(r) && hr(r) && !uo(r) ? n : r || ou(e) || n;
}
const _u = async function(e) {
  const t = this.getOffsetParent || Ts, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Iu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Au(e) {
  return He(e).direction === "rtl";
}
const Fu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Su,
  getDocumentElement: Ke,
  getClippingRect: Tu,
  getOffsetParent: Ts,
  getElementRects: _u,
  getClientRects: Cu,
  getDimensions: Ou,
  getScale: kt,
  isElement: Me,
  isRTL: Au
};
function Os(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Du(e, t) {
  let n = null, r;
  const o = Ke(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: m,
      height: d
    } = c;
    if (l || t(), !m || !d)
      return;
    const g = yn(f), w = yn(o.clientWidth - (u + m)), p = yn(o.clientHeight - (f + d)), C = yn(u), S = {
      rootMargin: -g + "px " + -w + "px " + -p + "px " + -C + "px",
      threshold: $e(0, Mt(1, a)) || 1
    };
    let R = !0;
    function _(N) {
      const F = N[0].intersectionRatio;
      if (F !== a) {
        if (!R)
          return s();
        F ? s(!1, F) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      F === 1 && !Os(c, e.getBoundingClientRect()) && s(), R = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, S);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Pu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = ho(e), u = o || i ? [...c ? on(c) : [], ...on(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const f = c && l ? Du(c, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((C) => {
    let [x] = C;
    x && x.target === c && d && (d.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = d) == null || S.observe(t);
    })), n();
  }), c && !a && d.observe(c), d.observe(t));
  let g, w = a ? Tt(e) : null;
  a && p();
  function p() {
    const C = Tt(e);
    w && !Os(w, C) && n(), w = C, g = requestAnimationFrame(p);
  }
  return n(), () => {
    var C;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), f == null || f(), (C = d) == null || C.disconnect(), d = null, a && cancelAnimationFrame(g);
  };
}
const pr = Xn, ku = vu, Nu = wu, Lu = mu, Vu = yu, Hu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Fu,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return pu(e, t, {
    ...o,
    platform: i
  });
};
var $n = typeof document < "u" ? Bn : de;
function kn(e, t) {
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
        if (!kn(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !kn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Is(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ti(e, t) {
  const n = Is(e);
  return Math.round(t * n) / n;
}
function mr(e) {
  const t = $.useRef(e);
  return $n(() => {
    t.current = e;
  }), t;
}
function zu(e) {
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
  } = e, [u, f] = $.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, d] = $.useState(r);
  kn(m, r) || d(r);
  const [g, w] = $.useState(null), [p, C] = $.useState(null), x = $.useCallback((I) => {
    I !== N.current && (N.current = I, w(I));
  }, []), S = $.useCallback((I) => {
    I !== F.current && (F.current = I, C(I));
  }, []), R = i || g, _ = s || p, N = $.useRef(null), F = $.useRef(null), b = $.useRef(u), h = a != null, y = mr(a), E = mr(o), T = mr(c), L = $.useCallback(() => {
    if (!N.current || !F.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: m
    };
    E.current && (I.platform = E.current), Hu(N.current, F.current, I).then((D) => {
      const z = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      A.current && !kn(b.current, z) && (b.current = z, _n.flushSync(() => {
        f(z);
      }));
    });
  }, [m, t, n, E, T]);
  $n(() => {
    c === !1 && b.current.isPositioned && (b.current.isPositioned = !1, f((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [c]);
  const A = $.useRef(!1);
  $n(() => (A.current = !0, () => {
    A.current = !1;
  }), []), $n(() => {
    if (R && (N.current = R), _ && (F.current = _), R && _) {
      if (y.current)
        return y.current(R, _, L);
      L();
    }
  }, [R, _, L, y, h]);
  const k = $.useMemo(() => ({
    reference: N,
    floating: F,
    setReference: x,
    setFloating: S
  }), [x, S]), M = $.useMemo(() => ({
    reference: R,
    floating: _
  }), [R, _]), O = $.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return I;
    const D = ti(M.floating, u.x), z = ti(M.floating, u.y);
    return l ? {
      ...I,
      transform: "translate(" + D + "px, " + z + "px)",
      ...Is(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: z
    };
  }, [n, l, M.floating, u.x, u.y]);
  return $.useMemo(() => ({
    ...u,
    update: L,
    refs: k,
    elements: M,
    floatingStyles: O
  }), [u, L, k, M, O]);
}
const _s = (e, t) => ({
  ...ku(e),
  options: [e, t]
}), Bu = (e, t) => ({
  ...Nu(e),
  options: [e, t]
}), ju = (e, t) => ({
  ...Lu(e),
  options: [e, t]
}), Uu = (e, t) => ({
  ...Vu(e),
  options: [e, t]
}), As = {
  ...$
}, Gu = As.useInsertionEffect, Wu = Gu || ((e) => e());
function Fs(e) {
  const t = $.useRef(() => {
  });
  return Wu(() => {
    t.current = e;
  }), $.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var zr = typeof document < "u" ? Bn : de;
let ni = !1, qu = 0;
const ri = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + qu++
);
function Yu() {
  const [e, t] = $.useState(() => ni ? ri() : void 0);
  return zr(() => {
    e == null && t(ri());
  }, []), $.useEffect(() => {
    ni = !0;
  }, []), e;
}
const Ku = As.useId, Zu = Ku || Yu;
function Xu() {
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
const Ju = /* @__PURE__ */ $.createContext(null), Qu = /* @__PURE__ */ $.createContext(null), ed = () => {
  var e;
  return ((e = $.useContext(Ju)) == null ? void 0 : e.id) || null;
}, td = () => $.useContext(Qu), nd = "data-floating-ui-focusable";
function rd(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Zu(), i = $.useRef({}), [s] = $.useState(() => Xu()), l = ed() != null, [a, c] = $.useState(r.reference), u = Fs((d, g, w) => {
    i.current.openEvent = d ? g : void 0, s.emit("openchange", {
      open: d,
      event: g,
      reason: w,
      nested: l
    }), n == null || n(d, g, w);
  }), f = $.useMemo(() => ({
    setPositionReference: c
  }), []), m = $.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return $.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: m,
    events: s,
    floatingId: o,
    refs: f
  }), [t, u, m, s, o, f]);
}
function od(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = rd({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = $.useState(null), [l, a] = $.useState(null), u = (o == null ? void 0 : o.domReference) || i, f = $.useRef(null), m = td();
  zr(() => {
    u && (f.current = u);
  }, [u]);
  const d = zu({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), g = $.useCallback((S) => {
    const R = Me(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    a(R), d.refs.setReference(R);
  }, [d.refs]), w = $.useCallback((S) => {
    (Me(S) || S === null) && (f.current = S, s(S)), (Me(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    S !== null && !Me(S)) && d.refs.setReference(S);
  }, [d.refs]), p = $.useMemo(() => ({
    ...d.refs,
    setReference: w,
    setPositionReference: g,
    domReference: f
  }), [d.refs, w, g]), C = $.useMemo(() => ({
    ...d.elements,
    domReference: u
  }), [d.elements, u]), x = $.useMemo(() => ({
    ...d,
    ...r,
    refs: p,
    elements: C,
    nodeId: t
  }), [d, p, C, t, r]);
  return zr(() => {
    r.dataRef.current.floatingContext = x;
    const S = m == null ? void 0 : m.nodesRef.current.find((R) => R.id === t);
    S && (S.context = x);
  }), $.useMemo(() => ({
    ...d,
    context: x,
    refs: p,
    elements: C
  }), [d, p, C, x]);
}
const oi = "active", ii = "selected";
function gr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [oi]: s,
      [ii]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [nd]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [c, u] = a;
      if (!(o && [oi, ii].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var f;
            (f = r.get(c)) == null || f.push(u), s[c] = function() {
              for (var m, d = arguments.length, g = new Array(d), w = 0; w < d; w++)
                g[w] = arguments[w];
              return (m = r.get(c)) == null ? void 0 : m.map((p) => p(...g)).find((p) => p !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function id(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = $.useCallback(
    (l) => gr(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = $.useCallback(
    (l) => gr(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = $.useCallback(
    (l) => gr(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return $.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function si(e, t) {
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
const sd = (e) => ({
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
    } = jt(e, t), {
      rects: f,
      elements: {
        floating: m
      }
    } = t, d = n.current[s], g = (c == null ? void 0 : c.current) || m, w = m.clientTop || g.clientTop, p = m.clientTop !== 0, C = g.clientTop !== 0, x = m === g;
    if (!d)
      return {};
    const S = {
      ...t,
      ...await _s(-d.offsetTop - m.clientTop - f.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, R = await pr(si(S, g.scrollHeight + w + m.clientTop), u), _ = await pr(S, {
      ...u,
      elementContext: "reference"
    }), N = $e(0, R.top), F = S.y + N, y = (g.scrollHeight > g.clientHeight ? (E) => E : sn)($e(0, g.scrollHeight + (p && x || C ? w * 2 : 0) - N - $e(0, R.bottom)));
    if (g.style.maxHeight = y + "px", g.scrollTop = N, o) {
      const E = g.offsetHeight < d.offsetHeight * Mt(l, n.current.length) - 1 || _.top >= -a || _.bottom >= -a;
      _n.flushSync(() => o(E));
    }
    return r && (r.current = await pr(si({
      ...S,
      y: F
    }, g.offsetHeight + w + m.clientTop), u)), {
      y: F
    };
  }
});
function ld(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = Fs(l), c = $.useRef(!1), u = $.useRef(null), f = $.useRef(null);
  $.useEffect(() => {
    if (!o) return;
    function d(w) {
      if (w.ctrlKey || !g || i.current == null)
        return;
      const p = w.deltaY, C = i.current.top >= -0.5, x = i.current.bottom >= -0.5, S = g.scrollHeight - g.clientHeight, R = p < 0 ? -1 : 1, _ = p < 0 ? "max" : "min";
      g.scrollHeight <= g.clientHeight || (!C && p > 0 || !x && p < 0 ? (w.preventDefault(), _n.flushSync(() => {
        a((N) => N + Math[_](p, S * R));
      })) : /firefox/i.test(iu()) && (g.scrollTop += p));
    }
    const g = (s == null ? void 0 : s.current) || r.floating;
    if (n && g)
      return g.addEventListener("wheel", d), requestAnimationFrame(() => {
        u.current = g.scrollTop, i.current != null && (f.current = {
          ...i.current
        });
      }), () => {
        u.current = null, f.current = null, g.removeEventListener("wheel", d);
      };
  }, [o, n, r.floating, i, s, a]);
  const m = $.useMemo(() => ({
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
          const g = d.scrollTop - u.current;
          (i.current.bottom < -0.5 && g < -1 || i.current.top < -0.5 && g > 1) && _n.flushSync(() => a((w) => w + g));
        }
        requestAnimationFrame(() => {
          u.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, s]);
  return $.useMemo(() => o ? {
    floating: m
  } : {}, [o, m]);
}
let fn = ve({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
fn.displayName = "FloatingContext";
let mo = ve(null);
mo.displayName = "PlacementContext";
function ad(e) {
  return ue(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function cd() {
  return he(fn).setReference;
}
function ud() {
  let { getFloatingProps: e, slot: t } = he(fn);
  return ie((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function dd(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = he(mo), n = ue(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  fe(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = he(fn);
  return ue(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let li = 4;
function fd({ children: e, enabled: t = !0 }) {
  let [n, r] = re(null), [o, i] = re(0), s = q(null), [l, a] = re(null);
  hd(l);
  let c = t && n !== null && l !== null, { to: u = "bottom", gap: f = 0, offset: m = 0, padding: d = 0, inner: g } = pd(n, l), [w, p = "center"] = u.split(" ");
  fe(() => {
    c && i(0);
  }, [c]);
  let { refs: C, floatingStyles: x, context: S } = od({ open: c, placement: w === "selection" ? p === "center" ? "bottom" : `bottom-${p}` : p === "center" ? `${w}` : `${w}-${p}`, strategy: "absolute", transform: !1, middleware: [_s({ mainAxis: w === "selection" ? 0 : f, crossAxis: m }), Bu({ padding: d }), w !== "selection" && ju({ padding: d }), w === "selection" && g ? sd({ ...g, padding: d, overflowRef: s, offset: o, minItemsVisible: li, referenceOverflowThreshold: d, onFallbackChange(E) {
    var T, L;
    if (!E) return;
    let A = S.elements.floating;
    if (!A) return;
    let k = parseFloat(getComputedStyle(A).scrollPaddingBottom) || 0, M = Math.min(li, A.childElementCount), O = 0, I = 0;
    for (let D of (L = (T = S.elements.floating) == null ? void 0 : T.childNodes) != null ? L : []) if (D instanceof HTMLElement) {
      let z = D.offsetTop, H = z + D.clientHeight + k, V = A.scrollTop, P = V + A.clientHeight;
      if (z >= V && H <= P) M--;
      else {
        I = Math.max(0, Math.min(H, P) - Math.max(z, V)), O = D.clientHeight;
        break;
      }
    }
    M >= 1 && i((D) => {
      let z = O * M - I + k;
      return D >= z ? D : z;
    });
  } }) : null, Uu({ padding: d, apply({ availableWidth: E, availableHeight: T, elements: L }) {
    Object.assign(L.floating.style, { overflow: "auto", maxWidth: `${E}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${T}px)` });
  } })].filter(Boolean), whileElementsMounted: Pu }), [R = w, _ = p] = S.placement.split("-");
  w === "selection" && (R = "selection");
  let N = ue(() => ({ anchor: [R, _].filter(Boolean).join(" ") }), [R, _]), F = ld(S, { overflowRef: s, onChange: i }), { getReferenceProps: b, getFloatingProps: h } = id([F]), y = Q((E) => {
    a(E), C.setFloating(E);
  });
  return $.createElement(mo.Provider, { value: r }, $.createElement(fn.Provider, { value: { setFloating: y, setReference: C.setReference, styles: x, getReferenceProps: b, getFloatingProps: h, slot: N } }, e));
}
function hd(e) {
  fe(() => {
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
function pd(e, t) {
  var n, r, o;
  let i = vr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = vr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = vr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function vr(e, t, n = void 0) {
  let r = Ot(), o = Q((a, c) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!c) return [n, null];
      let u = ai(a, c);
      return [u, (f) => {
        let m = Ds(a);
        {
          let d = m.map((g) => window.getComputedStyle(c).getPropertyValue(g));
          r.requestAnimationFrame(function g() {
            r.nextFrame(g);
            let w = !1;
            for (let [C, x] of m.entries()) {
              let S = window.getComputedStyle(c).getPropertyValue(x);
              if (d[C] !== S) {
                d[C] = S, w = !0;
                break;
              }
            }
            if (!w) return;
            let p = ai(a, c);
            u !== p && (f(p), u = p);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = ue(() => o(e, t)[0], [e, t]), [s = i, l] = re();
  return fe(() => {
    let [a, c] = o(e, t);
    if (l(a), !!c) return c(l);
  }, [e, t]), s;
}
function Ds(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Ds(o)] : [r];
  }
  return [];
}
function ai(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function md({ children: e, freeze: t }) {
  let n = Br(t, e);
  return K.createElement(K.Fragment, null, n);
}
function Br(e, t) {
  let [n, r] = re(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Jn = ve(null);
Jn.displayName = "OpenClosedContext";
var Te = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Te || {});
function hn() {
  return he(Jn);
}
function Ps({ value: e, children: t }) {
  return K.createElement(Jn.Provider, { value: e }, t);
}
function gd({ children: e }) {
  return K.createElement(Jn.Provider, { value: null }, e);
}
function vd(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ue = [];
vd(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ue[0] === t.target) return;
    let n = t.target;
    n = n.closest(Fn), Ue.unshift(n ?? t.target), Ue = Ue.filter((r) => r != null && r.isConnected), Ue.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function wd(e) {
  throw new Error("Unexpected object: " + e);
}
var ye = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ye || {});
function ci(e, t) {
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
      wd(e);
  }
}
var go = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(go || {});
function ks(e) {
  let t = Q(e), n = q(!1);
  de(() => (n.current = !1, () => {
    n.current = !0, Un(() => {
      n.current && t();
    });
  }), [t]);
}
function yd() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in $ ? ((t) => t.useSyncExternalStore)($)(() => () => {
  }, () => !1, () => !e) : !1;
}
function pn() {
  let e = yd(), [t, n] = $.useState(Rt.isHandoffComplete);
  return t && Rt.isHandoffComplete === !1 && n(!1), $.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), $.useEffect(() => Rt.handoff(), []), e ? !1 : t;
}
let Ns = ve(!1);
function bd() {
  return he(Ns);
}
function ui(e) {
  return K.createElement(Ns.Provider, { value: e.force }, e.children);
}
function xd(e) {
  let t = bd(), n = he(Vs), r = It(e), [o, i] = re(() => {
    var s;
    if (!t && n !== null) return (s = n.current) != null ? s : null;
    if (Rt.isServer) return null;
    let l = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (l) return l;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return de(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), de(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Ls = _e, Sd = be(function(e, t) {
  let n = e, r = q(null), o = Oe(oc((f) => {
    r.current = f;
  }), t), i = It(r), s = xd(r), [l] = re(() => {
    var f;
    return Rt.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
  }), a = he(jr), c = pn();
  fe(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), fe(() => {
    if (l && a) return a.register(l);
  }, [a, l]), ks(() => {
    var f;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((f = s.parentElement) == null || f.removeChild(s)));
  });
  let u = Se();
  return c ? !s || !l ? null : jn(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Ls, name: "Portal" }), l) : null;
});
function Cd(e, t) {
  let n = Oe(t), { enabled: r = !0, ...o } = e, i = Se();
  return r ? K.createElement(Sd, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Ls, name: "Portal" });
}
let Ed = _e, Vs = ve(null);
function Rd(e, t) {
  let { target: n, ...r } = e, o = { ref: Oe(t) }, i = Se();
  return K.createElement(Vs.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Ed, name: "Popover.Group" }));
}
let jr = ve(null);
function $d() {
  let e = he(jr), t = q([]), n = Q((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Q((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ue(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ue(() => function({ children: i }) {
    return K.createElement(jr.Provider, { value: o }, i);
  }, [o])];
}
let Md = be(Cd), Hs = be(Rd), zs = Object.assign(Md, { Group: Hs });
var Td = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Td || {}), Od = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Od || {}), Id = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Id || {}), _d = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(_d || {});
function wr(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : us(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Ad = { 1(e) {
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
    let { options: c, disabled: u } = e.virtual, f = t.focus === ye.Specific ? t.idx : ci(t, { resolveItems: () => c, resolveActiveIndex: () => {
      var d, g;
      return (g = (d = e.activeOptionIndex) != null ? d : c.findIndex((w) => !u(w))) != null ? g : null;
    }, resolveDisabled: u, resolveId() {
      throw new Error("Function not implemented.");
    } }), m = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === f && e.activationTrigger === m ? e : { ...e, activeOptionIndex: f, activationTrigger: m, isTyping: !1, __demoMode: !1 };
  }
  let s = wr(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((u) => !u.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = t.focus === ye.Specific ? t.idx : ci(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = wr(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = wr(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, vo = ve(null);
vo.displayName = "ComboboxActionsContext";
function mn(e) {
  let t = he(vo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, mn), n;
  }
  return t;
}
let Bs = ve(null);
function Fd(e) {
  let t = Ut("VirtualProvider"), { options: n } = t.virtual, [r, o] = ue(() => {
    let c = t.optionsElement;
    if (!c) return [0, 0];
    let u = window.getComputedStyle(c);
    return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
  }, [t.optionsElement]), i = os({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = re(0);
  fe(() => {
    l((c) => c + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : K.createElement(Bs.Provider, { value: i }, K.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (c) => {
    c && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((c) => {
    var u;
    return K.createElement(_e, { key: c.key }, K.cloneElement((u = e.children) == null ? void 0 : u.call(e, { ...e.slot, option: n[c.index] }), { key: `${s}-${c.key}`, "data-index": c.index, "aria-setsize": n.length, "aria-posinset": c.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c.start}px)`, overflowAnchor: "none" } }));
  })));
}
let ln = ve(null);
ln.displayName = "ComboboxDataContext";
function Ut(e) {
  let t = he(ln);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ut), n;
  }
  return t;
}
function Dd(e, t) {
  return Ae(t.type, Ad, e, t);
}
let Pd = _e;
function kd(e, t) {
  var n, r;
  let o = lo(), { value: i, defaultValue: s, onChange: l, form: a, name: c, by: u, disabled: f = o || !1, onClose: m, __demoMode: d = !1, multiple: g = !1, immediate: w = !1, virtual: p = null, nullable: C, ...x } = e, S = Ya(s), [R = g ? [] : void 0, _] = qa(i, l, S), [N, F] = an(Dd, { dataRef: _i(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: p ? { options: p.options, disabled: (n = p.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), b = q(!1), h = q({ static: !1, hold: !1 }), y = Ic(u), E = Q((j) => p ? u === null ? p.options.indexOf(j) : p.options.findIndex((Z) => y(Z, j)) : N.options.findIndex((Z) => y(Z.dataRef.current.value, j))), T = ie((j) => Ae(A.mode, { 1: () => R.some((Z) => y(Z, j)), 0: () => y(R, j) }), [R]), L = Q((j) => N.activeOptionIndex === E(j)), A = ue(() => ({ ...N, immediate: w, optionsPropsRef: h, value: R, defaultValue: S, disabled: f, mode: g ? 1 : 0, virtual: p ? N.virtual : null, get activeOptionIndex() {
    if (b.current && N.activeOptionIndex === null && (p ? p.options.length > 0 : N.options.length > 0)) {
      if (p) {
        let Z = p.options.findIndex((ne) => {
          var we, ae;
          return !((ae = (we = p.disabled) == null ? void 0 : we.call(p, ne)) != null && ae);
        });
        if (Z !== -1) return Z;
      }
      let j = N.options.findIndex((Z) => !Z.dataRef.current.disabled);
      if (j !== -1) return j;
    }
    return N.activeOptionIndex;
  }, calculateIndex: E, compare: y, isSelected: T, isActive: L }), [R, S, f, g, d, N, p]);
  fe(() => {
    var j;
    p && F({ type: 7, options: p.options, disabled: (j = p.disabled) != null ? j : null });
  }, [p, p == null ? void 0 : p.options, p == null ? void 0 : p.disabled]), fe(() => {
    N.dataRef.current = A;
  }, [A]);
  let k = A.comboboxState === 0;
  ps(k, [A.buttonElement, A.inputElement, A.optionsElement], () => B.closeCombobox());
  let M = ue(() => {
    var j, Z, ne;
    return { open: A.comboboxState === 0, disabled: f, activeIndex: A.activeOptionIndex, activeOption: A.activeOptionIndex === null ? null : A.virtual ? A.virtual.options[(j = A.activeOptionIndex) != null ? j : 0] : (ne = (Z = A.options[A.activeOptionIndex]) == null ? void 0 : Z.dataRef.current.value) != null ? ne : null, value: R };
  }, [A, f, R]), O = Q(() => {
    if (A.activeOptionIndex !== null) {
      if (B.setIsTyping(!1), A.virtual) P(A.virtual.options[A.activeOptionIndex]);
      else {
        let { dataRef: j } = A.options[A.activeOptionIndex];
        P(j.current.value);
      }
      B.goToOption(ye.Specific, A.activeOptionIndex);
    }
  }), I = Q(() => {
    F({ type: 0 }), b.current = !0;
  }), D = Q(() => {
    F({ type: 1 }), b.current = !1, m == null || m();
  }), z = Q((j) => {
    F({ type: 3, isTyping: j });
  }), H = Q((j, Z, ne) => (b.current = !1, j === ye.Specific ? F({ type: 2, focus: ye.Specific, idx: Z, trigger: ne }) : F({ type: 2, focus: j, trigger: ne }))), V = Q((j, Z) => (F({ type: 4, payload: { id: j, dataRef: Z } }), () => {
    A.isActive(Z.current.value) && (b.current = !0), F({ type: 5, id: j });
  })), P = Q((j) => Ae(A.mode, { 0() {
    return _ == null ? void 0 : _(j);
  }, 1() {
    let Z = A.value.slice(), ne = Z.findIndex((we) => y(we, j));
    return ne === -1 ? Z.push(j) : Z.splice(ne, 1), _ == null ? void 0 : _(Z);
  } })), ee = Q((j) => {
    F({ type: 6, trigger: j });
  }), X = Q((j) => {
    F({ type: 8, element: j });
  }), ce = Q((j) => {
    F({ type: 9, element: j });
  }), oe = Q((j) => {
    F({ type: 10, element: j });
  }), B = ue(() => ({ onChange: P, registerOption: V, goToOption: H, setIsTyping: z, closeCombobox: D, openCombobox: I, setActivationTrigger: ee, selectActiveOption: O, setInputElement: X, setButtonElement: ce, setOptionsElement: oe }), []), [G, te] = dc(), Y = t === null ? {} : { ref: t }, W = ie(() => {
    if (S !== void 0) return _ == null ? void 0 : _(S);
  }, [_, S]), J = Se();
  return K.createElement(te, { value: G, props: { htmlFor: (r = A.inputElement) == null ? void 0 : r.id }, slot: { open: A.comboboxState === 0, disabled: f } }, K.createElement(fd, null, K.createElement(vo.Provider, { value: B }, K.createElement(ln.Provider, { value: A }, K.createElement(Ps, { value: Ae(A.comboboxState, { 0: Te.Open, 1: Te.Closed }) }, c != null && K.createElement(Qa, { disabled: f, data: R != null ? { [c]: R } : {}, form: a, onReset: W }), J({ ourProps: Y, theirProps: x, slot: M, defaultTag: Pd, name: "Combobox" }))))));
}
let Nd = "input";
function Ld(e, t) {
  var n, r, o, i, s;
  let l = Ut("Combobox.Input"), a = mn("Combobox.Input"), c = ke(), u = Qi(), { id: f = u || `headlessui-combobox-input-${c}`, onChange: m, displayValue: d, disabled: g = l.disabled || !1, autoFocus: w = !1, type: p = "text", ...C } = e, x = q(null), S = Oe(x, t, cd(), a.setInputElement), R = It(l.inputElement), _ = Ot(), N = Q(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(ye.Nothing);
  }), F = ue(() => {
    var P;
    return typeof d == "function" && l.value !== void 0 ? (P = d(l.value)) != null ? P : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, d]);
  rn(([P, ee], [X, ce]) => {
    if (l.isTyping) return;
    let oe = x.current;
    oe && ((ce === 0 && ee === 1 || P !== X) && (oe.value = P), requestAnimationFrame(() => {
      if (l.isTyping || !oe || (R == null ? void 0 : R.activeElement) !== oe) return;
      let { selectionStart: B, selectionEnd: G } = oe;
      Math.abs((G ?? 0) - (B ?? 0)) === 0 && B === 0 && oe.setSelectionRange(oe.value.length, oe.value.length);
    }));
  }, [F, l.comboboxState, R, l.isTyping]), rn(([P], [ee]) => {
    if (P === 0 && ee === 1) {
      if (l.isTyping) return;
      let X = x.current;
      if (!X) return;
      let ce = X.value, { selectionStart: oe, selectionEnd: B, selectionDirection: G } = X;
      X.value = "", X.value = ce, G !== null ? X.setSelectionRange(oe, B, G) : X.setSelectionRange(oe, B);
    }
  }, [l.comboboxState]);
  let b = q(!1), h = Q(() => {
    b.current = !0;
  }), y = Q(() => {
    _.nextFrame(() => {
      b.current = !1;
    });
  }), E = Q((P) => {
    switch (a.setIsTyping(!0), P.key) {
      case Re.Enter:
        if (l.comboboxState !== 0 || b.current) return;
        if (P.preventDefault(), P.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Re.ArrowDown:
        return P.preventDefault(), P.stopPropagation(), Ae(l.comboboxState, { 0: () => a.goToOption(ye.Next), 1: () => a.openCombobox() });
      case Re.ArrowUp:
        return P.preventDefault(), P.stopPropagation(), Ae(l.comboboxState, { 0: () => a.goToOption(ye.Previous), 1: () => {
          xt(() => a.openCombobox()), l.value || a.goToOption(ye.Last);
        } });
      case Re.Home:
        if (P.shiftKey) break;
        return P.preventDefault(), P.stopPropagation(), a.goToOption(ye.First);
      case Re.PageUp:
        return P.preventDefault(), P.stopPropagation(), a.goToOption(ye.First);
      case Re.End:
        if (P.shiftKey) break;
        return P.preventDefault(), P.stopPropagation(), a.goToOption(ye.Last);
      case Re.PageDown:
        return P.preventDefault(), P.stopPropagation(), a.goToOption(ye.Last);
      case Re.Escape:
        return l.comboboxState !== 0 ? void 0 : (P.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && P.stopPropagation(), l.mode === 0 && l.value === null && N(), a.closeCombobox());
      case Re.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), T = Q((P) => {
    m == null || m(P), l.mode === 0 && P.target.value === "" && N(), a.openCombobox();
  }), L = Q((P) => {
    var ee, X, ce;
    let oe = (ee = P.relatedTarget) != null ? ee : Ue.find((B) => B !== P.currentTarget);
    if (!((X = l.optionsElement) != null && X.contains(oe)) && !((ce = l.buttonElement) != null && ce.contains(oe)) && l.comboboxState === 0) return P.preventDefault(), l.mode === 0 && l.value === null && N(), a.closeCombobox();
  }), A = Q((P) => {
    var ee, X, ce;
    let oe = (ee = P.relatedTarget) != null ? ee : Ue.find((B) => B !== P.currentTarget);
    (X = l.buttonElement) != null && X.contains(oe) || (ce = l.optionsElement) != null && ce.contains(oe) || l.disabled || l.immediate && l.comboboxState !== 0 && _.microTask(() => {
      xt(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), k = qn(), M = ic(), { isFocused: O, focusProps: I } = Yi({ autoFocus: w }), { isHovered: D, hoverProps: z } = qi({ isDisabled: g }), H = ue(() => ({ open: l.comboboxState === 0, disabled: g, hover: D, focus: O, autofocus: w }), [l, D, O, w, g]), V = ao({ ref: S, id: f, role: "combobox", type: p, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((P) => !P.dataRef.current.disabled && l.compare(P.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": k, "aria-describedby": M, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? d == null ? void 0 : d(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: g || void 0, autoFocus: w, onCompositionStart: h, onCompositionEnd: y, onKeyDown: E, onChange: T, onFocus: A, onBlur: L }, I, z);
  return Se()({ ourProps: V, theirProps: C, slot: H, defaultTag: Nd, name: "Combobox.Input" });
}
let Vd = "button";
function Hd(e, t) {
  var n;
  let r = Ut("Combobox.Button"), o = mn("Combobox.Button"), i = Oe(t, o.setButtonElement), s = ke(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: c = !1, ...u } = e, f = ms(r.inputElement), m = Q((F) => {
    switch (F.key) {
      case Re.Space:
      case Re.Enter:
        F.preventDefault(), F.stopPropagation(), r.comboboxState === 1 && xt(() => o.openCombobox()), f();
        return;
      case Re.ArrowDown:
        F.preventDefault(), F.stopPropagation(), r.comboboxState === 1 && (xt(() => o.openCombobox()), r.value || o.goToOption(ye.First)), f();
        return;
      case Re.ArrowUp:
        F.preventDefault(), F.stopPropagation(), r.comboboxState === 1 && (xt(() => o.openCombobox()), r.value || o.goToOption(ye.Last)), f();
        return;
      case Re.Escape:
        if (r.comboboxState !== 0) return;
        F.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && F.stopPropagation(), xt(() => o.closeCombobox()), f();
        return;
      default:
        return;
    }
  }), d = Q((F) => {
    F.preventDefault(), !nc(F.currentTarget) && (F.button === go.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), f());
  }), g = qn([l]), { isFocusVisible: w, focusProps: p } = Yi({ autoFocus: c }), { isHovered: C, hoverProps: x } = qi({ isDisabled: a }), { pressed: S, pressProps: R } = za({ disabled: a }), _ = ue(() => ({ open: r.comboboxState === 0, active: S || r.comboboxState === 0, disabled: a, value: r.value, hover: C, focus: w }), [r, C, w, S, a]), N = ao({ ref: i, id: l, type: jc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": g, disabled: a || void 0, autoFocus: c, onMouseDown: d, onKeyDown: m }, p, x, R);
  return Se()({ ourProps: N, theirProps: u, slot: _, defaultTag: Vd, name: "Combobox.Button" });
}
let zd = "div", Bd = Nt.RenderStrategy | Nt.Static;
function jd(e, t) {
  var n, r, o;
  let i = ke(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: c = !1, modal: u = !0, transition: f = !1, ...m } = e, d = Ut("Combobox.Options"), g = mn("Combobox.Options"), w = ad(a);
  w && (c = !0);
  let [p, C] = dd(w), [x, S] = re(null), R = ud(), _ = Oe(t, w ? p : null, g.setOptionsElement, S), N = It(d.optionsElement), F = hn(), [b, h] = ws(f, x, F !== null ? (F & Te.Open) === Te.Open : d.comboboxState === 0);
  as(b, d.inputElement, g.closeCombobox);
  let y = d.__demoMode ? !1 : u && d.comboboxState === 0;
  gs(y, N);
  let E = d.__demoMode ? !1 : u && d.comboboxState === 0;
  ls(E, { allowed: ie(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), fe(() => {
    var V;
    d.optionsPropsRef.current.static = (V = e.static) != null ? V : !1;
  }, [d.optionsPropsRef, e.static]), fe(() => {
    d.optionsPropsRef.current.hold = l;
  }, [d.optionsPropsRef, l]), nu(d.comboboxState === 0, { container: d.optionsElement, accept(V) {
    return V.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  let T = qn([(n = d.buttonElement) == null ? void 0 : n.id]), L = ue(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), A = Q(() => {
    g.setActivationTrigger(0);
  }), k = Q((V) => {
    V.preventDefault(), g.setActivationTrigger(0);
  }), M = ao(w ? R() : {}, { "aria-labelledby": T, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: s, ref: _, style: { ...m.style, ...C, "--input-width": jo(d.inputElement, !0).width, "--button-width": jo(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : A, onMouseDown: k, ...vs(h) }), O = b && d.comboboxState === 1, I = Br(O, (r = d.virtual) == null ? void 0 : r.options), D = Br(O, d.value), z = Q((V) => d.compare(D, V));
  if (d.virtual) {
    if (I === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(m, { children: K.createElement(ln.Provider, { value: I !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: I } } : d }, K.createElement(Fd, { slot: L }, m.children)) });
  }
  let H = Se();
  return K.createElement(zs, { enabled: c ? e.static || b : !1 }, K.createElement(ln.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: z } }, H({ ourProps: M, theirProps: { ...m, children: K.createElement(md, { freeze: O }, typeof m.children == "function" ? (o = m.children) == null ? void 0 : o.call(m, L) : m.children) }, slot: L, defaultTag: zd, features: Bd, visible: b, name: "Combobox.Options" })));
}
let Ud = "div";
function Gd(e, t) {
  var n, r, o, i;
  let s = Ut("Combobox.Option"), l = mn("Combobox.Option"), a = ke(), { id: c = `headlessui-combobox-option-${a}`, value: u, disabled: f = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? o : !1, order: m = null, ...d } = e, g = ms(s.inputElement), w = s.virtual ? s.activeOptionIndex === s.calculateIndex(u) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === c, p = s.isSelected(u), C = q(null), x = vt({ disabled: f, value: u, domRef: C, order: m }), S = he(Bs), R = Oe(t, C, S ? S.measureElement : null), _ = Q(() => {
    l.setIsTyping(!1), l.onChange(u);
  });
  fe(() => l.registerOption(c, x), [x, c]);
  let N = q(!(s.virtual || s.__demoMode));
  fe(() => {
    if (!s.virtual && !s.__demoMode) return qe().requestAnimationFrame(() => {
      N.current = !0;
    });
  }, [s.virtual, s.__demoMode]), fe(() => {
    if (N.current && s.comboboxState === 0 && w && s.activationTrigger !== 0) return qe().requestAnimationFrame(() => {
      var k, M;
      (M = (k = C.current) == null ? void 0 : k.scrollIntoView) == null || M.call(k, { block: "nearest" });
    });
  }, [C, w, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let F = Q((k) => {
    k.preventDefault(), k.button === go.Left && (f || (_(), fs() || requestAnimationFrame(() => g()), s.mode === 0 && l.closeCombobox()));
  }), b = Q(() => {
    if (f) return l.goToOption(ye.Nothing);
    let k = s.calculateIndex(u);
    l.goToOption(ye.Specific, k);
  }), h = Kc(), y = Q((k) => h.update(k)), E = Q((k) => {
    if (!h.wasMoved(k) || f || w) return;
    let M = s.calculateIndex(u);
    l.goToOption(ye.Specific, M, 0);
  }), T = Q((k) => {
    h.wasMoved(k) && (f || w && (s.optionsPropsRef.current.hold || l.goToOption(ye.Nothing)));
  }), L = ue(() => ({ active: w, focus: w, selected: p, disabled: f }), [w, p, f]), A = { id: c, ref: R, role: "option", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, "aria-selected": p, disabled: void 0, onMouseDown: F, onFocus: b, onPointerEnter: y, onMouseEnter: y, onPointerMove: E, onMouseMove: E, onPointerLeave: T, onMouseLeave: T };
  return Se()({ ourProps: A, theirProps: d, slot: L, defaultTag: Ud, name: "Combobox.Option" });
}
let Wd = be(kd), Ur = be(Hd), js = be(Ld), qd = mc, Us = be(jd), Gr = be(Gd), Yd = Object.assign(Wd, { Input: js, Button: Ur, Label: qd, Options: Us, Option: Gr });
function Kd(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = zt(e, "escape");
  co(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Re.Escape && n(o));
  });
}
function Zd() {
  var e;
  let [t] = re(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = re((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return fe(() => {
    if (!t) return;
    function o(i) {
      r(i.matches);
    }
    return t.addEventListener("change", o), () => t.removeEventListener("change", o);
  }, [t]), n;
}
function Xd({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = It(n), o = Q(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((c) => a.contains(c)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: Q((i) => o().some((s) => s.contains(i))) };
}
let Gs = ve(null);
function di({ children: e, node: t }) {
  let [n, r] = re(null), o = Ws(t ?? n);
  return K.createElement(Gs.Provider, { value: o }, e, o === null && K.createElement(nn, { features: Lt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = Ht(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function Ws(e = null) {
  var t;
  return (t = he(Gs)) != null ? t : e;
}
function wo() {
  let e = q(!1);
  return fe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Zt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Zt || {});
function Jd() {
  let e = q(0);
  return hs(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function qs(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Qd = "div";
var bt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(bt || {});
function ef(e, t) {
  let n = q(null), r = Oe(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  pn() || (l = 0);
  let c = It(n);
  of(l, { ownerDocument: c });
  let u = sf(l, { ownerDocument: c, container: n, initialFocus: o, initialFocusFallback: i });
  lf(l, { ownerDocument: c, container: n, containers: s, previousActiveElement: u });
  let f = Jd(), m = Q((x) => {
    let S = n.current;
    S && ((R) => R())(() => {
      Ae(f.current, { [Zt.Forwards]: () => {
        Qt(S, nt.First, { skipElements: [x.relatedTarget, i] });
      }, [Zt.Backwards]: () => {
        Qt(S, nt.Last, { skipElements: [x.relatedTarget, i] });
      } });
    });
  }), d = zt(!!(l & 2), "focus-trap#tab-lock"), g = Ot(), w = q(!1), p = { ref: r, onKeyDown(x) {
    x.key == "Tab" && (w.current = !0, g.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(x) {
    if (!(l & 4)) return;
    let S = qs(s);
    n.current instanceof HTMLElement && S.add(n.current);
    let R = x.relatedTarget;
    R instanceof HTMLElement && R.dataset.headlessuiFocusGuard !== "true" && (Ys(S, R) || (w.current ? Qt(n.current, Ae(f.current, { [Zt.Forwards]: () => nt.Next, [Zt.Backwards]: () => nt.Previous }) | nt.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && ot(x.target)));
  } }, C = Se();
  return K.createElement(K.Fragment, null, d && K.createElement(nn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Lt.Focusable }), C({ ourProps: p, theirProps: a, defaultTag: Qd, name: "FocusTrap" }), d && K.createElement(nn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: m, features: Lt.Focusable }));
}
let tf = be(ef), nf = Object.assign(tf, { features: bt });
function rf(e = !0) {
  let t = q(Ue.slice());
  return rn(([n], [r]) => {
    r === !0 && n === !1 && Un(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ue.slice());
  }, [e, Ue, t]), Q(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function of(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = rf(n);
  rn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && ot(r());
  }, [n]), ks(() => {
    n && ot(r());
  });
}
function sf(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = q(null), s = zt(!!(e & 1), "focus-trap#initial-focus"), l = wo();
  return rn(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && ot(o.current);
      return;
    }
    let a = n.current;
    a && Un(() => {
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
      if (r != null && r.current) ot(r.current);
      else {
        if (e & 16) {
          if (Qt(a, nt.First | nt.AutoFocus) !== Lr.Error) return;
        } else if (Qt(a, nt.First) !== Lr.Error) return;
        if (o != null && o.current && (ot(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function lf(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = wo(), s = !!(e & 4);
  co(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = qs(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let c = o.current;
    if (!c) return;
    let u = l.target;
    u && u instanceof HTMLElement ? Ys(a, u) ? (o.current = u, ot(u)) : (l.preventDefault(), l.stopPropagation(), ot(c)) : ot(o.current);
  }, !0);
}
function Ys(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Ks(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Xs) !== _e || K.Children.count(e.children) === 1;
}
let Qn = ve(null);
Qn.displayName = "TransitionContext";
var af = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(af || {});
function cf() {
  let e = he(Qn);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function uf() {
  let e = he(er);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let er = ve(null);
er.displayName = "NestingContext";
function tr(e) {
  return "children" in e ? tr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Zs(e, t) {
  let n = vt(e), r = q([]), o = wo(), i = Ot(), s = Q((d, g = at.Hidden) => {
    let w = r.current.findIndex(({ el: p }) => p === d);
    w !== -1 && (Ae(g, { [at.Unmount]() {
      r.current.splice(w, 1);
    }, [at.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var p;
      !tr(r) && o.current && ((p = n.current) == null || p.call(n));
    }));
  }), l = Q((d) => {
    let g = r.current.find(({ el: w }) => w === d);
    return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({ el: d, state: "visible" }), () => s(d, at.Unmount);
  }), a = q([]), c = q(Promise.resolve()), u = q({ enter: [], leave: [] }), f = Q((d, g, w) => {
    a.current.splice(0), t && (t.chains.current[g] = t.chains.current[g].filter(([p]) => p !== d)), t == null || t.chains.current[g].push([d, new Promise((p) => {
      a.current.push(p);
    })]), t == null || t.chains.current[g].push([d, new Promise((p) => {
      Promise.all(u.current[g].map(([C, x]) => x)).then(() => p());
    })]), g === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(g)) : w(g);
  }), m = Q((d, g, w) => {
    Promise.all(u.current[g].splice(0).map(([p, C]) => C)).then(() => {
      var p;
      (p = a.current.shift()) == null || p();
    }).then(() => w(g));
  });
  return ue(() => ({ children: r, register: l, unregister: s, onStart: f, onStop: m, wait: c, chains: u }), [l, s, r, f, m, u, c]);
}
let Xs = _e, Js = Nt.RenderStrategy;
function df(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: c, enterFrom: u, enterTo: f, entered: m, leave: d, leaveFrom: g, leaveTo: w, ...p } = e, [C, x] = re(null), S = q(null), R = Ks(e), _ = Oe(...R ? [S, t, x] : t === null ? [] : [t]), N = (n = p.unmount) == null || n ? at.Unmount : at.Hidden, { show: F, appear: b, initial: h } = cf(), [y, E] = re(F ? "visible" : "hidden"), T = uf(), { register: L, unregister: A } = T;
  fe(() => L(S), [L, S]), fe(() => {
    if (N === at.Hidden && S.current) {
      if (F && y !== "visible") {
        E("visible");
        return;
      }
      return Ae(y, { hidden: () => A(S), visible: () => L(S) });
    }
  }, [y, S, L, A, F, N]);
  let k = pn();
  fe(() => {
    if (R && k && y === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [S, y, k, R]);
  let M = h && !b, O = b && F && h, I = q(!1), D = Zs(() => {
    I.current || (E("hidden"), A(S));
  }, T), z = Q((oe) => {
    I.current = !0;
    let B = oe ? "enter" : "leave";
    D.onStart(S, B, (G) => {
      G === "enter" ? i == null || i() : G === "leave" && (l == null || l());
    });
  }), H = Q((oe) => {
    let B = oe ? "enter" : "leave";
    I.current = !1, D.onStop(S, B, (G) => {
      G === "enter" ? s == null || s() : G === "leave" && (a == null || a());
    }), B === "leave" && !tr(D) && (E("hidden"), A(S));
  });
  de(() => {
    R && o || (z(F), H(F));
  }, [F, R, o]);
  let V = !(!o || !R || !k || M), [, P] = ws(V, C, F, { start: z, end: H }), ee = lt({ ref: _, className: ((r = kr(p.className, O && c, O && u, P.enter && c, P.enter && P.closed && u, P.enter && !P.closed && f, P.leave && d, P.leave && !P.closed && g, P.leave && P.closed && w, !P.transition && F && m)) == null ? void 0 : r.trim()) || void 0, ...vs(P) }), X = 0;
  y === "visible" && (X |= Te.Open), y === "hidden" && (X |= Te.Closed), P.enter && (X |= Te.Opening), P.leave && (X |= Te.Closing);
  let ce = Se();
  return K.createElement(er.Provider, { value: D }, K.createElement(Ps, { value: X }, ce({ ourProps: ee, theirProps: p, defaultTag: Xs, features: Js, visible: y === "visible", name: "Transition.Child" })));
}
function ff(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = q(null), l = Ks(e), a = Oe(...l ? [s, t] : t === null ? [] : [t]);
  pn();
  let c = hn();
  if (n === void 0 && c !== null && (n = (c & Te.Open) === Te.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, f] = re(n ? "visible" : "hidden"), m = Zs(() => {
    n || f("hidden");
  }), [d, g] = re(!0), w = q([n]);
  fe(() => {
    d !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), g(!1));
  }, [w, n]);
  let p = ue(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  fe(() => {
    n ? f("visible") : !tr(m) && s.current !== null && f("hidden");
  }, [n, m]);
  let C = { unmount: o }, x = Q(() => {
    var _;
    d && g(!1), (_ = e.beforeEnter) == null || _.call(e);
  }), S = Q(() => {
    var _;
    d && g(!1), (_ = e.beforeLeave) == null || _.call(e);
  }), R = Se();
  return K.createElement(er.Provider, { value: m }, K.createElement(Qn.Provider, { value: p }, R({ ourProps: { ...C, as: _e, children: K.createElement(Qs, { ref: a, ...C, ...i, beforeEnter: x, beforeLeave: S }) }, theirProps: {}, defaultTag: _e, features: Js, visible: u === "visible", name: "Transition" })));
}
function hf(e, t) {
  let n = he(Qn) !== null, r = hn() !== null;
  return K.createElement(K.Fragment, null, !n && r ? K.createElement(Wr, { ref: t, ...e }) : K.createElement(Qs, { ref: t, ...e }));
}
let Wr = be(ff), Qs = be(df), yo = be(hf), pf = Object.assign(Wr, { Child: yo, Root: Wr });
var mf = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(mf || {}), gf = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(gf || {});
let vf = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, bo = ve(null);
bo.displayName = "DialogContext";
function nr(e) {
  let t = he(bo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nr), n;
  }
  return t;
}
function wf(e, t) {
  return Ae(t.type, vf, e, t);
}
let fi = be(function(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: c = !1, unmount: u = !1, ...f } = e, m = q(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (m.current || (m.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = hn();
  o === void 0 && d !== null && (o = (d & Te.Open) === Te.Open);
  let g = q(null), w = Oe(g, t), p = It(g), C = o ? 0 : 1, [x, S] = an(wf, { titleId: null, descriptionId: null, panelRef: _i() }), R = Q(() => i(!1)), _ = Q((H) => S({ type: 0, id: H })), N = pn() ? C === 0 : !1, [F, b] = $d(), h = { get current() {
    var H;
    return (H = x.panelRef.current) != null ? H : g.current;
  } }, y = Ws(), { resolveContainers: E } = Xd({ mainTreeNode: y, portals: F, defaultContainers: [h] }), T = d !== null ? (d & Te.Closing) === Te.Closing : !1;
  ls(c || T ? !1 : N, { allowed: Q(() => {
    var H, V;
    return [(V = (H = g.current) == null ? void 0 : H.closest("[data-headlessui-portal]")) != null ? V : null];
  }), disallowed: Q(() => {
    var H;
    return [(H = y == null ? void 0 : y.closest("body > *:not(#headlessui-portal-root)")) != null ? H : null];
  }) }), ps(N, E, (H) => {
    H.preventDefault(), R();
  }), Kd(N, p == null ? void 0 : p.defaultView, (H) => {
    H.preventDefault(), H.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), R();
  }), gs(c || T ? !1 : N, p, E), as(N, g, R);
  let [L, A] = sc(), k = ue(() => [{ dialogState: C, close: R, setTitleId: _, unmount: u }, x], [C, x, R, _, u]), M = ue(() => ({ open: C === 0 }), [C]), O = { ref: w, id: r, role: l, tabIndex: -1, "aria-modal": c ? void 0 : C === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": L, unmount: u }, I = !Zd(), D = bt.None;
  N && !c && (D |= bt.RestoreFocus, D |= bt.TabLock, a && (D |= bt.AutoFocus), I && (D |= bt.InitialFocus));
  let z = Se();
  return K.createElement(gd, null, K.createElement(ui, { force: !0 }, K.createElement(zs, null, K.createElement(bo.Provider, { value: k }, K.createElement(Hs, { target: g }, K.createElement(ui, { force: !1 }, K.createElement(A, { slot: M }, K.createElement(b, null, K.createElement(nf, { initialFocus: s, initialFocusFallback: g, containers: E, features: D }, K.createElement(vc, { value: R }, z({ ourProps: O, theirProps: f, slot: M, defaultTag: yf, features: bf, visible: C === 0, name: "Dialog" })))))))))));
}), yf = "div", bf = Nt.RenderStrategy | Nt.Static;
function xf(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = hn(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? K.createElement(di, null, K.createElement(pf, { show: r, transition: n, unmount: o.unmount }, K.createElement(fi, { ref: t, ...o }))) : K.createElement(di, null, K.createElement(fi, { ref: t, open: r, ...o }));
}
let Sf = "div";
function Cf(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = nr("Dialog.Panel"), c = Oe(t, a.panelRef), u = ue(() => ({ open: s === 0 }), [s]), f = Q((p) => {
    p.stopPropagation();
  }), m = { ref: c, id: r, onClick: f }, d = o ? yo : _e, g = o ? { unmount: l } : {}, w = Se();
  return K.createElement(d, { ...g }, w({ ourProps: m, theirProps: i, slot: u, defaultTag: Sf, name: "Dialog.Panel" }));
}
let Ef = "div";
function Rf(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = nr("Dialog.Backdrop"), s = ue(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? yo : _e, c = n ? { unmount: i } : {}, u = Se();
  return K.createElement(a, { ...c }, u({ ourProps: l, theirProps: r, slot: s, defaultTag: Ef, name: "Dialog.Backdrop" }));
}
let $f = "h2";
function Mf(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = nr("Dialog.Title"), l = Oe(t);
  de(() => (s(r), () => s(null)), [r, s]);
  let a = ue(() => ({ open: i === 0 }), [i]), c = { ref: l, id: r };
  return Se()({ ourProps: c, theirProps: o, slot: a, defaultTag: $f, name: "Dialog.Title" });
}
let Tf = be(xf), el = be(Cf), Of = be(Rf), tl = be(Mf), If = Object.assign(Tf, { Panel: el, Title: tl, Description: uc });
function _f({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const Af = /* @__PURE__ */ $.forwardRef(_f);
function Ff({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Df = /* @__PURE__ */ $.forwardRef(Ff);
function Pf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
  }));
}
const kf = /* @__PURE__ */ $.forwardRef(Pf);
function Nf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const Lf = /* @__PURE__ */ $.forwardRef(Nf);
function Vf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Hf = /* @__PURE__ */ $.forwardRef(Vf);
function zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const Bf = /* @__PURE__ */ $.forwardRef(zf);
function jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Uf = /* @__PURE__ */ $.forwardRef(jf);
function Gf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Wf = /* @__PURE__ */ $.forwardRef(Gf);
function qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const Yf = /* @__PURE__ */ $.forwardRef(qf);
function Kf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const Zf = /* @__PURE__ */ $.forwardRef(Kf);
function Xf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Jf = /* @__PURE__ */ $.forwardRef(Xf);
function Qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const eh = /* @__PURE__ */ $.forwardRef(Qf);
function th({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const nh = /* @__PURE__ */ $.forwardRef(th);
function rh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const oh = /* @__PURE__ */ $.forwardRef(rh);
function ih({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const nl = /* @__PURE__ */ $.forwardRef(ih), sh = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear", invalidOption: "{{value}} (invalid)" }, input: { clear: "Clear" }, datePicker: { calendarLabel: "Choose date", pickerLabel: "Date picker", hours: "Hours", minutes: "Minutes", seconds: "Seconds", today: "Today", clear: "Clear", done: "Done", weekdays: { sun: "Su", mon: "Mo", tue: "Tu", wed: "We", thu: "Th", fri: "Fr", sat: "Sa" }, previous: "Previous", next: "Next", am: "AM", pm: "PM" } }, lh = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", rowLimitExceeded: '"{{sheet}}" has {{count}} rows, which exceeds the maximum of {{limit}}. Remove rows to continue.', rowLimitExceededMultiple: "These sheets exceed their row limit: {{sheets}}. Remove rows to continue.", sheetValidationErrors: "This sheet has validation errors. Fix them before uploading.", processing: "Processing data, please wait…", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, ah = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data", unsupportedFileType: "Unsupported file type. Please upload a {{formats}} file.", fileTooLarge: "File is too large. Maximum size is {{size}}." }, ch = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, uh = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", undoTooltip: "Undo", redoTooltip: "Redo", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, dh = { boolean: "This value must be true or false", includes: "Value is not in the list of allowed values", integer: "This is not a valid number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique", date: "This is not a valid date", datetime: "This is not a valid date and time", time: "This is not a valid time", dateOutOfRange: "This date is outside the allowed range", asyncError: "This value could not be validated" }, fh = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, hh = {
  components: sh,
  importer: lh,
  uploader: ah,
  mapper: ch,
  sheet: uh,
  validators: dh,
  importStatus: fh
}, ph = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer", invalidOption: "{{value}} (invalide)" }, input: { clear: "Effacer" }, datePicker: { calendarLabel: "Choisir une date", pickerLabel: "Sélecteur de date", hours: "Heures", minutes: "Minutes", seconds: "Secondes", today: "Aujourd'hui", clear: "Effacer", done: "Terminé", weekdays: { sun: "Di", mon: "Lu", tue: "Ma", wed: "Me", thu: "Je", fri: "Ve", sat: "Sa" }, previous: "Précédent", next: "Suivant", am: "AM", pm: "PM" } }, mh = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", rowLimitExceeded: "« {{sheet}} » comporte {{count}} lignes, ce qui dépasse le maximum de {{limit}}. Supprimez des lignes pour continuer.", rowLimitExceededMultiple: "Ces feuilles dépassent leur limite de lignes : {{sheets}}. Supprimez des lignes pour continuer.", sheetValidationErrors: "Cette feuille comporte des erreurs de validation. Corrigez-les avant de télécharger.", processing: "Traitement des données, veuillez patienter…", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, gh = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement", unsupportedFileType: "Type de fichier non pris en charge. Veuillez télécharger un fichier {{formats}}.", fileTooLarge: "Le fichier est trop volumineux. La taille maximale est {{size}}." }, vh = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, wh = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", undoTooltip: "Annuler", redoTooltip: "Rétablir", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, yh = { boolean: "Cette valeur doit être vraie ou fausse", includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce n'est pas un nombre valide", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique", date: "Cette date n'est pas valide", datetime: "Cette date et heure ne sont pas valides", time: "Cette heure n'est pas valide", dateOutOfRange: "Cette date est en dehors de la plage autorisée", asyncError: "Cette valeur n'a pas pu être validée" }, bh = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, xh = {
  components: ph,
  importer: mh,
  uploader: gh,
  mapper: vh,
  sheet: wh,
  validators: yh,
  importStatus: bh
}, Sh = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar", invalidOption: "{{value}} (inválido)" }, input: { clear: "Limpar" }, datePicker: { calendarLabel: "Escolher data", pickerLabel: "Seletor de data", hours: "Horas", minutes: "Minutos", seconds: "Segundos", today: "Hoje", clear: "Limpar", done: "Concluído", weekdays: { sun: "Dom", mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb" }, previous: "Anterior", next: "Próximo", am: "AM", pm: "PM" } }, Ch = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", rowLimitExceeded: '"{{sheet}}" tem {{count}} linhas, o que excede o máximo de {{limit}}. Remova linhas para continuar.', rowLimitExceededMultiple: "Estas planilhas excedem o limite de linhas: {{sheets}}. Remova linhas para continuar.", sheetValidationErrors: "Esta planilha tem erros de validação. Corrija-os antes de enviar.", processing: "Processando dados, aguarde…", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Eh = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente", unsupportedFileType: "Tipo de arquivo não suportado. Por favor, envie um arquivo {{formats}}.", fileTooLarge: "O arquivo é muito grande. O tamanho máximo é {{size}}." }, Rh = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, $h = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", undoTooltip: "Desfazer", redoTooltip: "Refazer", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Mh = { boolean: "Este valor deve ser verdadeiro ou falso", includes: "O valor não está na lista de valores permitidos", integer: "Este não é um número válido", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único", date: "Esta data não é válida", datetime: "Esta data e hora não são válidas", time: "Este horário não é válido", dateOutOfRange: "Esta data está fora do intervalo permitido", asyncError: "Não foi possível validar este valor" }, Th = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, Oh = {
  components: Sh,
  importer: Ch,
  uploader: Eh,
  mapper: Rh,
  sheet: $h,
  validators: Mh,
  importStatus: Th
}, rl = ve(
  {}
);
function Ih({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ v(rl.Provider, { value: e, children: t });
}
function Ne() {
  return he(rl);
}
const _h = {
  en: hh,
  fr: xh,
  "pt-BR": Oh
}, Ah = "en";
function hi(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? _h[e];
  for (const i of r)
    if (o && typeof o == "object")
      o = o[i];
    else
      return t;
  return typeof o == "string" ? o : t;
}
function Fh(e, t) {
  return e.replace(/{{([^}]+)}}/g, (n, r) => `${t[r] ?? `{${r}}`}`);
}
function Dh(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ v("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const s = o[1];
      i = t[s] ?? `{${s}}`;
    }
    return /* @__PURE__ */ v(_e, { children: i }, r);
  }) });
}
const ol = ve(
  {}
);
function Ph({ children: e }) {
  const { translationResources: t, locale: n } = Ne(), r = n ?? Ah;
  function o(s, l = {}) {
    const a = hi(r, s, t);
    return Fh(a, l);
  }
  function i(s, l = {}) {
    const a = hi(r, s, t);
    return Dh(a, l);
  }
  return /* @__PURE__ */ v(ol.Provider, { value: { t: o, tHtml: i }, children: e });
}
function me() {
  return he(ol);
}
function qr({
  open: e,
  setOpen: t,
  title: n,
  subTitle: r,
  confirmationText: o,
  cancelText: i,
  onConfirm: s,
  variant: l = "default"
}) {
  const { t: a } = me(), c = {
    danger: {
      icon: /* @__PURE__ */ v(
        Wf,
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
  }, { icon: u, btnVariant: f, bgColor: m } = c[l];
  return /* @__PURE__ */ U(If, { open: e, onClose: t, className: "hc:relative hc:z-10", children: [
    /* @__PURE__ */ v(
      Of,
      {
        transition: !0,
        className: "hc:bg-hello-csv-overlay/75 hc:fixed hc:inset-0 hc:transition-opacity hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ v("div", { className: "hc:fixed hc:inset-0 hc:z-10 hc:w-screen hc:overflow-y-auto", children: /* @__PURE__ */ v("div", { className: "hc:flex hc:min-h-full hc:items-end hc:justify-center hc:p-4 hc:text-center hc:sm:items-center hc:sm:p-0", children: /* @__PURE__ */ U(
      el,
      {
        transition: !0,
        className: "hc:bg-hello-csv-surface-raised hc:relative hc:transform hc:overflow-hidden hc:rounded-lg hc:px-4 hc:pt-5 hc:pb-4 hc:text-left hc:shadow-xl hc:transition-all hc:data-closed:translate-y-4 hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in hc:sm:my-8 hc:sm:w-full hc:sm:max-w-lg hc:sm:p-6 hc:data-closed:sm:translate-y-0 hc:data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ U("div", { className: "hc:sm:flex hc:sm:items-start", children: [
            u && /* @__PURE__ */ v(
              "div",
              {
                className: `hc:mx-auto hc:flex hc:size-12 hc:shrink-0 hc:items-center hc:justify-center hc:rounded-full ${m} hc:sm:mx-0 hc:sm:size-10`,
                children: u
              }
            ),
            /* @__PURE__ */ U("div", { className: "hc:mt-3 hc:text-center hc:sm:mt-0 hc:sm:ml-4 hc:sm:text-left", children: [
              /* @__PURE__ */ v(
                tl,
                {
                  as: "h3",
                  className: "hc:text-hello-csv-text hc:text-base hc:font-semibold",
                  children: n
                }
              ),
              r && /* @__PURE__ */ v("div", { className: "hc:mt-2", children: /* @__PURE__ */ v("p", { className: "hc:text-hello-csv-text-muted hc:text-sm", children: r }) })
            ] })
          ] }),
          /* @__PURE__ */ U("div", { className: "hc:mt-5 hc:sm:mt-4 hc:sm:flex hc:sm:flex-row-reverse", children: [
            /* @__PURE__ */ v("div", { className: "hc:sm:ml-3 hc:sm:w-auto", children: /* @__PURE__ */ v(
              De,
              {
                variant: f,
                onClick: () => {
                  s(), t(!1);
                },
                withFullWidth: !0,
                children: o ?? a("components.confirmationModal.defaultConfirm")
              }
            ) }),
            /* @__PURE__ */ v("div", { className: "hc:mt-3 hc:sm:mt-0 hc:sm:w-auto", children: /* @__PURE__ */ v(
              De,
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
const kh = 100, il = 8, Nh = 50, sl = 5, Lh = [
  "text/csv",
  "text/tab-separated-values"
], Vh = [".csv", ".tsv"], Hh = ",", zh = 500, Bh = "headlessui-portal-root", Nn = "hello-csv", ll = "data-hellocsv-datepicker", rr = {
  autoComplete: "off",
  "data-bwignore": !0,
  "data-1p-ignore": !0,
  "data-lpignore": "true",
  "data-form-type": "other"
}, al = 52.62, Yr = "checkbox-column-id", cl = 110, jh = 50, Uh = 500, Gh = 150, ul = "Yes", dl = "No", Wh = ["true", "1", "yes", "y"], qh = ["false", "0", "no", "n"], Yh = zn(function({ children: t }, n) {
  return de(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === Bh && s.classList.add(Nn);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ v(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Nn}`,
      style: { display: "contents" },
      children: /* @__PURE__ */ v(
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
function Kh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    d: "M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"
  }), /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z",
    clipRule: "evenodd"
  }));
}
const Zh = /* @__PURE__ */ $.forwardRef(Kh);
function Xh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Jh = /* @__PURE__ */ $.forwardRef(Xh);
function Qh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ep = /* @__PURE__ */ $.forwardRef(Qh);
function tp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const np = /* @__PURE__ */ $.forwardRef(tp);
function rp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const op = /* @__PURE__ */ $.forwardRef(rp);
function ip({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const sp = /* @__PURE__ */ $.forwardRef(ip);
function lp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const ap = /* @__PURE__ */ $.forwardRef(lp);
function cp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z",
    clipRule: "evenodd"
  }));
}
const up = /* @__PURE__ */ $.forwardRef(cp);
function dp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const fp = /* @__PURE__ */ $.forwardRef(dp);
function hp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const fl = /* @__PURE__ */ $.forwardRef(hp), hl = zn(
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
    const { t: u } = me(), [f, m] = re(e);
    de(() => {
      m(e);
    }, [e]);
    const d = s && e != null && e !== "";
    function g(w) {
      const p = w.target, C = l === "number" ? p == null ? void 0 : p.valueAsNumber : p == null ? void 0 : p.value;
      return (typeof C == "number" && isNaN(C) ? "" : C) ?? "";
    }
    return /* @__PURE__ */ U("div", { className: "hc:grid hc:grid-cols-1", children: [
      /* @__PURE__ */ v(
        "input",
        {
          ...rr,
          "aria-label": a["aria-label"],
          ref: c,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof f == "boolean" ? f.toString() : Array.isArray(f) ? "" : f ?? "",
          onChange: (w) => (n == null ? void 0 : n(g(w))) ?? m(g(w)),
          className: `${i} ${o != null ? "hc:pl-10" : ""} ${s ? "hc:pr-10" : ""} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:col-start-1 hc:row-start-1 hc:block hc:rounded-md hc:px-3 hc:py-1.5 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6`,
          onBlur: (w) => t == null ? void 0 : t(g(w))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:ml-3 hc:size-5 hc:self-center hc:text-hello-csv-text-subtle hc:sm:size-4"
      }),
      d && /* @__PURE__ */ v(
        "span",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": u("components.input.clear"),
          onClick: (w) => {
            w.stopPropagation(), n == null || n("");
          },
          className: "hc:col-end-2 hc:row-start-1 hc:flex hc:cursor-pointer hc:items-center hc:justify-self-end hc:pr-2",
          children: /* @__PURE__ */ v(
            fl,
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
function pp(e, t, n) {
  return n.searchInputAsFilter && e == null ? { type: "ignore" } : e != null && t != null && n.compareFunction(e, t) ? { type: "change", value: null } : { type: "change", value: e };
}
function Et({
  value: e,
  options: t,
  onChange: n,
  onClose: r,
  multiple: o = !1,
  compareFunction: i = (w, p) => w === p,
  clearable: s = !1,
  searchable: l = !1,
  placeholder: a,
  classes: c,
  displayPlaceholderWhenSelected: u = !1,
  autoFocus: f = !1,
  immediate: m = !1,
  searchInputAsFilter: d = !1,
  ...g
}) {
  const { t: w } = me(), [p, C] = re(""), x = q(null);
  de(() => {
    var M;
    f && ((M = x.current) == null || M.focus());
  }, []);
  const S = (M) => o && Array.isArray(e) ? e.some((O) => i(O, M)) : i(e, M), R = (M) => {
    if (C(""), o) {
      const I = Array.isArray(M) ? M : [M];
      n(I);
      return;
    }
    const O = pp(
      M ?? null,
      e,
      { searchInputAsFilter: d, compareFunction: i }
    );
    O.type === "change" && n(O.value);
  }, _ = () => {
    C(""), n(o ? [] : null);
  }, N = t.filter((M) => S(M.value)), F = N.map((M) => M.label).join(", "), b = p && l ? t.filter(
    (M) => String(M.label).toLowerCase().includes(p.toLowerCase())
  ) : t, h = a ?? w("components.select.optionPlaceholder"), y = () => d ? p : l ? F : N.length > 0 ? u ? `${h}: ${F}` : F : "", T = b.some((M) => M.group) ? Object.entries(
    b.reduce(
      (M, O) => {
        const I = O.group || "ungrouped";
        return M[I] = M[I] || [], M[I].push(O), M;
      },
      {}
    )
  ).map(([M, O]) => ({
    label: M,
    items: O
  })) : [{ label: null, items: b }], L = T.every(({ items: M }) => M.length === 0), A = d ? p.length > 0 : s && N.length > 0, k = () => {
    var M;
    d ? (C(""), x.current && (x.current.value = ""), (M = x.current) == null || M.focus()) : _();
  };
  return /* @__PURE__ */ v(
    Yd,
    {
      value: e ?? (o ? [] : null),
      onChange: R,
      onClose: r,
      multiple: o,
      immediate: m,
      children: /* @__PURE__ */ U("div", { className: "hc:relative", children: [
        /* @__PURE__ */ v(
          Ur,
          {
            className: "hc:w-full",
            "aria-label": g["aria-label"] ?? a,
            children: /* @__PURE__ */ v(
              js,
              {
                ...rr,
                ref: x,
                className: `${c} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:block hc:w-full hc:cursor-pointer hc:truncate hc:rounded-md hc:py-1.5 hc:focus:cursor-text ${A ? "hc:pr-12" : "hc:pr-2"} hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:pl-3 hc:text-left hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm`,
                displayValue: y,
                onChange: (M) => l && C(M.target.value),
                placeholder: h,
                readOnly: !l
              }
            )
          }
        ),
        A && /* @__PURE__ */ v(
          "span",
          {
            role: "button",
            tabIndex: 0,
            "aria-label": w("components.select.clear"),
            onMouseDown: (M) => {
              M.preventDefault(), M.stopPropagation();
            },
            onClick: (M) => {
              M.stopPropagation(), k();
            },
            className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-6 hc:flex hc:cursor-pointer hc:items-center",
            children: /* @__PURE__ */ v(
              fl,
              {
                className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ v(Ur, { className: "hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2", children: /* @__PURE__ */ v(
          sp,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:col-start-1 hc:row-start-1 hc:size-5 hc:self-center hc:justify-self-end hc:sm:size-4"
          }
        ) }),
        /* @__PURE__ */ U(
          Us,
          {
            anchor: "bottom",
            transition: !0,
            className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:absolute hc:z-99 hc:mt-1 hc:max-h-60 hc:w-[var(--input-width)] hc:overflow-auto hc:rounded-md hc:py-1 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:data-leave:transition hc:data-leave:duration-100 hc:data-leave:ease-in hc:data-closed:data-leave:opacity-0 hc:sm:text-sm",
            children: [
              L && /* @__PURE__ */ v(
                Gr,
                {
                  disabled: !0,
                  value: null,
                  className: "hc:text-hello-csv-text-subtle hc:pointer-events-none hc:relative hc:flex hc:items-center hc:justify-center hc:py-2 hc:pr-9 hc:pl-3 hc:select-none",
                  children: /* @__PURE__ */ v("span", { className: "hc:block hc:truncate hc:font-normal", children: w("components.select.noOptions") })
                },
                "no-options"
              ),
              T.map(({ label: M, items: O }) => /* @__PURE__ */ U("div", { children: [
                M && /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-subtle hc:py-2 hc:pr-9 hc:pl-3 hc:uppercase", children: M }),
                O.map((I) => /* @__PURE__ */ v(
                  Gr,
                  {
                    value: I.value,
                    className: ({ focus: D }) => `hc:cursor-default hc:items-center hc:py-2 hc:pr-9 hc:pl-3 hc:outline-hidden hc:select-none hc:relative hc:flex ${D ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text"}`,
                    children: ({ focus: D, selected: z }) => /* @__PURE__ */ U(ut, { children: [
                      I.icon,
                      /* @__PURE__ */ v(
                        "span",
                        {
                          className: `hc:block hc:truncate ${z ? "hc:font-semibold" : "hc:font-normal"}`,
                          children: I.label
                        }
                      ),
                      z && /* @__PURE__ */ v(
                        "span",
                        {
                          className: `hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:items-center hc:pr-4 ${D ? "hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-primary"}`,
                          children: /* @__PURE__ */ v(
                            Jh,
                            {
                              "aria-hidden": "true",
                              className: "hc:h-5 hc:w-5"
                            }
                          )
                        }
                      )
                    ] })
                  },
                  typeof I.value == "object" ? JSON.stringify(I.value) : String(I.value)
                ))
              ] }, `${M || "all"}:${p}`))
            ]
          }
        )
      ] })
    }
  );
}
function xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mn = { exports: {} }, mp = Mn.exports, pi;
function gp() {
  return pi || (pi = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(mp, function() {
      var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", a = "hour", c = "day", u = "week", f = "month", m = "quarter", d = "year", g = "date", w = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
        var k = ["th", "st", "nd", "rd"], M = A % 100;
        return "[" + A + (k[(M - 20) % 10] || k[M] || k[0]) + "]";
      } }, S = function(A, k, M) {
        var O = String(A);
        return !O || O.length >= k ? A : "" + Array(k + 1 - O.length).join(M) + A;
      }, R = { s: S, z: function(A) {
        var k = -A.utcOffset(), M = Math.abs(k), O = Math.floor(M / 60), I = M % 60;
        return (k <= 0 ? "+" : "-") + S(O, 2, "0") + ":" + S(I, 2, "0");
      }, m: function A(k, M) {
        if (k.date() < M.date()) return -A(M, k);
        var O = 12 * (M.year() - k.year()) + (M.month() - k.month()), I = k.clone().add(O, f), D = M - I < 0, z = k.clone().add(O + (D ? -1 : 1), f);
        return +(-(O + (M - I) / (D ? I - z : z - I)) || 0);
      }, a: function(A) {
        return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
      }, p: function(A) {
        return { M: f, y: d, w: u, d: c, D: g, h: a, m: l, s, ms: i, Q: m }[A] || String(A || "").toLowerCase().replace(/s$/, "");
      }, u: function(A) {
        return A === void 0;
      } }, _ = "en", N = {};
      N[_] = x;
      var F = "$isDayjsObject", b = function(A) {
        return A instanceof T || !(!A || !A[F]);
      }, h = function A(k, M, O) {
        var I;
        if (!k) return _;
        if (typeof k == "string") {
          var D = k.toLowerCase();
          N[D] && (I = D), M && (N[D] = M, I = D);
          var z = k.split("-");
          if (!I && z.length > 1) return A(z[0]);
        } else {
          var H = k.name;
          N[H] = k, I = H;
        }
        return !O && I && (_ = I), I || !O && _;
      }, y = function(A, k) {
        if (b(A)) return A.clone();
        var M = typeof k == "object" ? k : {};
        return M.date = A, M.args = arguments, new T(M);
      }, E = R;
      E.l = h, E.i = b, E.w = function(A, k) {
        return y(A, { locale: k.$L, utc: k.$u, x: k.$x, $offset: k.$offset });
      };
      var T = function() {
        function A(M) {
          this.$L = h(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[F] = !0;
        }
        var k = A.prototype;
        return k.parse = function(M) {
          this.$d = function(O) {
            var I = O.date, D = O.utc;
            if (I === null) return /* @__PURE__ */ new Date(NaN);
            if (E.u(I)) return /* @__PURE__ */ new Date();
            if (I instanceof Date) return new Date(I);
            if (typeof I == "string" && !/Z$/i.test(I)) {
              var z = I.match(p);
              if (z) {
                var H = z[2] - 1 || 0, V = (z[7] || "0").substring(0, 3);
                return D ? new Date(Date.UTC(z[1], H, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, V)) : new Date(z[1], H, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, V);
              }
            }
            return new Date(I);
          }(M), this.init();
        }, k.init = function() {
          var M = this.$d;
          this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
        }, k.$utils = function() {
          return E;
        }, k.isValid = function() {
          return this.$d.toString() !== w;
        }, k.isSame = function(M, O) {
          var I = y(M);
          return this.startOf(O) <= I && I <= this.endOf(O);
        }, k.isAfter = function(M, O) {
          return y(M) < this.startOf(O);
        }, k.isBefore = function(M, O) {
          return this.endOf(O) < y(M);
        }, k.$g = function(M, O, I) {
          return E.u(M) ? this[O] : this.set(I, M);
        }, k.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, k.valueOf = function() {
          return this.$d.getTime();
        }, k.startOf = function(M, O) {
          var I = this, D = !!E.u(O) || O, z = E.p(M), H = function(G, te) {
            var Y = E.w(I.$u ? Date.UTC(I.$y, te, G) : new Date(I.$y, te, G), I);
            return D ? Y : Y.endOf(c);
          }, V = function(G, te) {
            return E.w(I.toDate()[G].apply(I.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), I);
          }, P = this.$W, ee = this.$M, X = this.$D, ce = "set" + (this.$u ? "UTC" : "");
          switch (z) {
            case d:
              return D ? H(1, 0) : H(31, 11);
            case f:
              return D ? H(1, ee) : H(0, ee + 1);
            case u:
              var oe = this.$locale().weekStart || 0, B = (P < oe ? P + 7 : P) - oe;
              return H(D ? X - B : X + (6 - B), ee);
            case c:
            case g:
              return V(ce + "Hours", 0);
            case a:
              return V(ce + "Minutes", 1);
            case l:
              return V(ce + "Seconds", 2);
            case s:
              return V(ce + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, k.endOf = function(M) {
          return this.startOf(M, !1);
        }, k.$set = function(M, O) {
          var I, D = E.p(M), z = "set" + (this.$u ? "UTC" : ""), H = (I = {}, I[c] = z + "Date", I[g] = z + "Date", I[f] = z + "Month", I[d] = z + "FullYear", I[a] = z + "Hours", I[l] = z + "Minutes", I[s] = z + "Seconds", I[i] = z + "Milliseconds", I)[D], V = D === c ? this.$D + (O - this.$W) : O;
          if (D === f || D === d) {
            var P = this.clone().set(g, 1);
            P.$d[H](V), P.init(), this.$d = P.set(g, Math.min(this.$D, P.daysInMonth())).$d;
          } else H && this.$d[H](V);
          return this.init(), this;
        }, k.set = function(M, O) {
          return this.clone().$set(M, O);
        }, k.get = function(M) {
          return this[E.p(M)]();
        }, k.add = function(M, O) {
          var I, D = this;
          M = Number(M);
          var z = E.p(O), H = function(ee) {
            var X = y(D);
            return E.w(X.date(X.date() + Math.round(ee * M)), D);
          };
          if (z === f) return this.set(f, this.$M + M);
          if (z === d) return this.set(d, this.$y + M);
          if (z === c) return H(1);
          if (z === u) return H(7);
          var V = (I = {}, I[l] = r, I[a] = o, I[s] = n, I)[z] || 1, P = this.$d.getTime() + M * V;
          return E.w(P, this);
        }, k.subtract = function(M, O) {
          return this.add(-1 * M, O);
        }, k.format = function(M) {
          var O = this, I = this.$locale();
          if (!this.isValid()) return I.invalidDate || w;
          var D = M || "YYYY-MM-DDTHH:mm:ssZ", z = E.z(this), H = this.$H, V = this.$m, P = this.$M, ee = I.weekdays, X = I.months, ce = I.meridiem, oe = function(te, Y, W, J) {
            return te && (te[Y] || te(O, D)) || W[Y].slice(0, J);
          }, B = function(te) {
            return E.s(H % 12 || 12, te, "0");
          }, G = ce || function(te, Y, W) {
            var J = te < 12 ? "AM" : "PM";
            return W ? J.toLowerCase() : J;
          };
          return D.replace(C, function(te, Y) {
            return Y || function(W) {
              switch (W) {
                case "YY":
                  return String(O.$y).slice(-2);
                case "YYYY":
                  return E.s(O.$y, 4, "0");
                case "M":
                  return P + 1;
                case "MM":
                  return E.s(P + 1, 2, "0");
                case "MMM":
                  return oe(I.monthsShort, P, X, 3);
                case "MMMM":
                  return oe(X, P);
                case "D":
                  return O.$D;
                case "DD":
                  return E.s(O.$D, 2, "0");
                case "d":
                  return String(O.$W);
                case "dd":
                  return oe(I.weekdaysMin, O.$W, ee, 2);
                case "ddd":
                  return oe(I.weekdaysShort, O.$W, ee, 3);
                case "dddd":
                  return ee[O.$W];
                case "H":
                  return String(H);
                case "HH":
                  return E.s(H, 2, "0");
                case "h":
                  return B(1);
                case "hh":
                  return B(2);
                case "a":
                  return G(H, V, !0);
                case "A":
                  return G(H, V, !1);
                case "m":
                  return String(V);
                case "mm":
                  return E.s(V, 2, "0");
                case "s":
                  return String(O.$s);
                case "ss":
                  return E.s(O.$s, 2, "0");
                case "SSS":
                  return E.s(O.$ms, 3, "0");
                case "Z":
                  return z;
              }
              return null;
            }(te) || z.replace(":", "");
          });
        }, k.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, k.diff = function(M, O, I) {
          var D, z = this, H = E.p(O), V = y(M), P = (V.utcOffset() - this.utcOffset()) * r, ee = this - V, X = function() {
            return E.m(z, V);
          };
          switch (H) {
            case d:
              D = X() / 12;
              break;
            case f:
              D = X();
              break;
            case m:
              D = X() / 3;
              break;
            case u:
              D = (ee - P) / 6048e5;
              break;
            case c:
              D = (ee - P) / 864e5;
              break;
            case a:
              D = ee / o;
              break;
            case l:
              D = ee / r;
              break;
            case s:
              D = ee / n;
              break;
            default:
              D = ee;
          }
          return I ? D : E.a(D);
        }, k.daysInMonth = function() {
          return this.endOf(f).$D;
        }, k.$locale = function() {
          return N[this.$L];
        }, k.locale = function(M, O) {
          if (!M) return this.$L;
          var I = this.clone(), D = h(M, O, !0);
          return D && (I.$L = D), I;
        }, k.clone = function() {
          return E.w(this.$d, this);
        }, k.toDate = function() {
          return new Date(this.valueOf());
        }, k.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, k.toISOString = function() {
          return this.$d.toISOString();
        }, k.toString = function() {
          return this.$d.toUTCString();
        }, A;
      }(), L = T.prototype;
      return y.prototype = L, [["$ms", i], ["$s", s], ["$m", l], ["$H", a], ["$W", c], ["$M", f], ["$y", d], ["$D", g]].forEach(function(A) {
        L[A[1]] = function(k) {
          return this.$g(k, A[0], A[1]);
        };
      }), y.extend = function(A, k) {
        return A.$i || (A(k, T, y), A.$i = !0), y;
      }, y.locale = h, y.isDayjs = b, y.unix = function(A) {
        return y(1e3 * A);
      }, y.en = N[_], y.Ls = N, y.p = {}, y;
    });
  }(Mn)), Mn.exports;
}
var pl = gp();
const et = /* @__PURE__ */ xo(pl);
var Tn = { exports: {} }, vp = Tn.exports, mi;
function wp() {
  return mi || (mi = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(vp, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, s = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, a = {}, c = function(p) {
        return (p = +p) + (p > 68 ? 1900 : 2e3);
      }, u = function(p) {
        return function(C) {
          this[p] = +C;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
        (this.zone || (this.zone = {})).offset = function(C) {
          if (!C || C === "Z") return 0;
          var x = C.match(/([+-]|\d\d)/g), S = 60 * x[1] + (+x[2] || 0);
          return S === 0 ? 0 : x[0] === "+" ? -S : S;
        }(p);
      }], m = function(p) {
        var C = a[p];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, d = function(p, C) {
        var x, S = a.meridiem;
        if (S) {
          for (var R = 1; R <= 24; R += 1) if (p.indexOf(S(R, 0, C)) > -1) {
            x = R > 12;
            break;
          }
        } else x = p === (C ? "pm" : "PM");
        return x;
      }, g = { A: [l, function(p) {
        this.afternoon = d(p, !1);
      }], a: [l, function(p) {
        this.afternoon = d(p, !0);
      }], Q: [o, function(p) {
        this.month = 3 * (p - 1) + 1;
      }], S: [o, function(p) {
        this.milliseconds = 100 * +p;
      }], SS: [i, function(p) {
        this.milliseconds = 10 * +p;
      }], SSS: [/\d{3}/, function(p) {
        this.milliseconds = +p;
      }], s: [s, u("seconds")], ss: [s, u("seconds")], m: [s, u("minutes")], mm: [s, u("minutes")], H: [s, u("hours")], h: [s, u("hours")], HH: [s, u("hours")], hh: [s, u("hours")], D: [s, u("day")], DD: [i, u("day")], Do: [l, function(p) {
        var C = a.ordinal, x = p.match(/\d+/);
        if (this.day = x[0], C) for (var S = 1; S <= 31; S += 1) C(S).replace(/\[|\]/g, "") === p && (this.day = S);
      }], w: [s, u("week")], ww: [i, u("week")], M: [s, u("month")], MM: [i, u("month")], MMM: [l, function(p) {
        var C = m("months"), x = (m("monthsShort") || C.map(function(S) {
          return S.slice(0, 3);
        })).indexOf(p) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], MMMM: [l, function(p) {
        var C = m("months").indexOf(p) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(p) {
        this.year = c(p);
      }], YYYY: [/\d{4}/, u("year")], Z: f, ZZ: f };
      function w(p) {
        var C, x;
        C = p, x = a && a.formats;
        for (var S = (p = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(y, E, T) {
          var L = T && T.toUpperCase();
          return E || x[T] || n[T] || x[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, k, M) {
            return k || M.slice(1);
          });
        })).match(r), R = S.length, _ = 0; _ < R; _ += 1) {
          var N = S[_], F = g[N], b = F && F[0], h = F && F[1];
          S[_] = h ? { regex: b, parser: h } : N.replace(/^\[|\]$/g, "");
        }
        return function(y) {
          for (var E = {}, T = 0, L = 0; T < R; T += 1) {
            var A = S[T];
            if (typeof A == "string") L += A.length;
            else {
              var k = A.regex, M = A.parser, O = y.slice(L), I = k.exec(O)[0];
              M.call(E, I), y = y.replace(I, "");
            }
          }
          return function(D) {
            var z = D.afternoon;
            if (z !== void 0) {
              var H = D.hours;
              z ? H < 12 && (D.hours += 12) : H === 12 && (D.hours = 0), delete D.afternoon;
            }
          }(E), E;
        };
      }
      return function(p, C, x) {
        x.p.customParseFormat = !0, p && p.parseTwoDigitYear && (c = p.parseTwoDigitYear);
        var S = C.prototype, R = S.parse;
        S.parse = function(_) {
          var N = _.date, F = _.utc, b = _.args;
          this.$u = F;
          var h = b[1];
          if (typeof h == "string") {
            var y = b[2] === !0, E = b[3] === !0, T = y || E, L = b[2];
            E && (L = b[2]), a = this.$locale(), !y && L && (a = x.Ls[L]), this.$d = function(O, I, D, z) {
              try {
                if (["x", "X"].indexOf(I) > -1) return new Date((I === "X" ? 1e3 : 1) * O);
                var H = w(I)(O), V = H.year, P = H.month, ee = H.day, X = H.hours, ce = H.minutes, oe = H.seconds, B = H.milliseconds, G = H.zone, te = H.week, Y = /* @__PURE__ */ new Date(), W = ee || (V || P ? 1 : Y.getDate()), J = V || Y.getFullYear(), j = 0;
                V && !P || (j = P > 0 ? P - 1 : Y.getMonth());
                var Z, ne = X || 0, we = ce || 0, ae = oe || 0, pe = B || 0;
                return G ? new Date(Date.UTC(J, j, W, ne, we, ae, pe + 60 * G.offset * 1e3)) : D ? new Date(Date.UTC(J, j, W, ne, we, ae, pe)) : (Z = new Date(J, j, W, ne, we, ae, pe), te && (Z = z(Z).week(te).toDate()), Z);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(N, h, F, x), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), T && N != this.format(h) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (h instanceof Array) for (var A = h.length, k = 1; k <= A; k += 1) {
            b[1] = h[k - 1];
            var M = x.apply(this, b);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            k === A && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else R.call(this, _);
        };
      };
    });
  }(Tn)), Tn.exports;
}
var yp = wp();
const bp = /* @__PURE__ */ xo(yp);
pl.extend(bp);
const ml = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DDTHH:mm:ss",
  time: "HH:mm:ss"
};
function Kr(e, t = !1) {
  return e === "date" || t ? ml[e] : e === "time" ? "HH:mm" : "YYYY-MM-DDTHH:mm";
}
function So(e, t = !1, n = "12h") {
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
function xp(e, t = {}) {
  const n = [
    t.outputFormat,
    t.displayFormat,
    ml[e],
    Kr(e, !0),
    Kr(e, !1)
  ];
  for (const r of ["12h", "24h"])
    for (const o of [!0, !1])
      n.push(So(e, o, r));
  return n.filter((r) => !!r);
}
function Ge(e, t, n = {}) {
  if (e == null || e.trim() === "")
    return null;
  const r = et(e.trim(), xp(t, n), !0);
  return r.isValid() ? r : null;
}
function Zr(e, t, n = {}) {
  return !e || !e.isValid() ? "" : e.format(
    n.outputFormat ?? Kr(t, n.showSeconds)
  );
}
function Sp(e, t, n = {}) {
  if (e.trim() === "")
    return "";
  const r = Ge(e, t, n);
  return r ? Zr(r, t, n) : e;
}
function gl(e, t, n = {}) {
  if (e == null || e === "")
    return "";
  const r = Ge(e, t, n);
  return r ? r.format(
    n.displayFormat ?? So(
      t,
      n.showSeconds,
      n.hourFormat
    )
  ) : e;
}
function Cp(e) {
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
function vl(e, t, n) {
  return !!(t && e.isBefore(t, "day") || n && e.isAfter(n, "day"));
}
function Ep(e, t, n) {
  return !!(t && e.isBefore(t) || n && e.isAfter(n));
}
function Rp({
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
  const f = { outputFormat: n, displayFormat: r, showSeconds: s, hourFormat: l }, m = l !== "24h", d = e === "date" || e === "datetime", g = e === "time" || e === "datetime", w = Ge(a ?? t, e, f), [p, C] = re(w), [x, S] = re(
    a ?? gl(t, e, f)
  ), [R, _] = re(
    w ?? et().startOf("month")
  ), [N, F] = re(!0), [b, h] = re("days"), y = Ge(o, e, f), E = Ge(i, e, f);
  function T(W) {
    return W.format(
      r ?? So(e, s, l)
    );
  }
  function L() {
    const W = x.trim();
    if (W === "") {
      c("");
      return;
    }
    const J = Ge(W, e, f);
    c(J ? Zr(J, e, f) : W);
  }
  const A = q(() => {
  });
  A.current = L;
  function k(W, { commit: J }) {
    C(W), _(W.startOf("month")), S(T(W)), J && c(Zr(W, e, f));
  }
  function M(W) {
    const J = W.target.value;
    S(J);
    const j = Ge(J, e, f);
    j && (C(j), _(j.startOf("month")));
  }
  function O(W) {
    var j, Z;
    const J = W.format("YYYY-MM-DD");
    (Z = (j = u.current) == null ? void 0 : j[J]) == null || Z.focus();
  }
  function I(W) {
    if (W.key === "Enter")
      W.preventDefault(), W.stopPropagation(), L();
    else if (W.key === "Escape" && N)
      W.preventDefault(), W.stopPropagation(), F(!1);
    else if (W.key === "ArrowDown" && d) {
      W.preventDefault(), F(!0);
      const J = p ?? et();
      _(J.startOf("month")), requestAnimationFrame(() => O(J));
    }
  }
  function D(W) {
    if (vl(W, y, E)) return;
    const J = p ?? et().startOf("day"), j = W.hour(J.hour()).minute(J.minute()).second(J.second());
    k(j, { commit: e === "date" });
  }
  function z(W, J) {
    let j = null;
    switch (W.key) {
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
        W.preventDefault(), W.stopPropagation(), D(J);
        return;
      default:
        return;
    }
    W.preventDefault(), W.stopPropagation(), _(j.startOf("month")), requestAnimationFrame(() => O(j));
  }
  function H(W, J) {
    const j = Number(J);
    if (Number.isNaN(j)) return;
    const ne = (p ?? et().startOf("day"))[W](j);
    C(ne), S(T(ne));
  }
  const V = (p == null ? void 0 : p.hour()) ?? 0, P = V >= 12 ? "PM" : "AM", ee = m ? V % 12 || 12 : V;
  function X(W) {
    const J = Number(W);
    if (Number.isNaN(J)) return;
    const j = p ?? et().startOf("day");
    let Z = J;
    if (m) {
      const we = (J % 12 + 12) % 12;
      Z = P === "PM" ? we + 12 : we;
    }
    const ne = j.hour(Z);
    C(ne), S(T(ne));
  }
  function ce(W) {
    if (W === P) return;
    const J = p ?? et().startOf("day"), j = J.hour() % 12, Z = J.hour(W === "PM" ? j + 12 : j);
    C(Z), S(T(Z));
  }
  function oe() {
    _(b === "days" ? R.subtract(1, "month") : b === "months" ? R.subtract(1, "year") : R.subtract(10, "year"));
  }
  function B() {
    _(b === "days" ? R.add(1, "month") : b === "months" ? R.add(1, "year") : R.add(10, "year"));
  }
  function G() {
    h(b === "days" ? "months" : "years");
  }
  function te(W) {
    _(R.month(W)), h("days");
  }
  function Y(W) {
    _(R.year(W)), h("months");
  }
  return {
    // state
    open: N,
    setOpen: F,
    text: x,
    draft: p,
    viewMonth: R,
    view: b,
    minBound: y,
    maxBound: E,
    // derived
    is12h: m,
    hasCalendar: d,
    hasTime: g,
    meridiem: P,
    hourFieldValue: ee,
    commitTextRef: A,
    // trigger handlers
    handleInput: M,
    handleInputKeyDown: I,
    commitText: L,
    // calendar handlers
    handlePrev: oe,
    handleNext: B,
    handleTitleClick: G,
    selectDay: D,
    selectMonth: te,
    selectYear: Y,
    handleGridKeyDown: z,
    // time handlers
    setHour: X,
    setTimePart: H,
    setMeridiem: ce
  };
}
function or(e) {
  return e.type === "date" || e.type === "datetime" || e.type === "time";
}
const $p = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep",
  "undoRedo"
], Mp = (e) => e == null, wl = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Tp(e, t) {
  return e.flatMap((n) => {
    if (n.maxRows == null)
      return [];
    const r = t.find((i) => i.sheetId === n.id), o = r != null ? wl(r).length : 0;
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
function wt(e) {
  return Mp(e) ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
}
const gi = (e) => [...new Set(e)];
function Dt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ln(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function Op(e, t) {
  if (e == null)
    return "";
  let n = String(e);
  return n = n.replace(/"/g, '""'), (n.includes('"') || n.includes(t) || /[\n\r]/.test(n)) && (n = `"${n}"`), n;
}
function yl(e, t) {
  return e.map(
    (n) => n.map((r) => Op(r, t)).join(t)
  ).join(`
`);
}
function Co(e, t, n, r) {
  const o = e.columns.map(
    (l) => r === "label" ? l.label : l.id
  ), i = t.map(
    (l) => e.columns.map((a) => {
      const c = l[a.id];
      return r === "value" || c == null ? Array.isArray(c) ? c.join(", ") : c : Sl(
        e,
        a,
        c,
        n
      );
    })
  ), s = yl([o, ...i], Hh);
  return new Blob([s], { type: "text/csv" });
}
function bl(e, t, n, r) {
  const o = Co(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function xl(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Xr(e, t) {
  return Array.isArray(t) ? t.map((n) => e[n] ?? n).join(", ") : typeof t != "string" ? t : e[t] ?? t;
}
function Sl(e, t, n, r) {
  var o, i, s;
  if (t.type === "enum")
    return Xr(
      ((o = r[e.id]) == null ? void 0 : o[t.id]) ?? {},
      n
    );
  if (t.type === "reference" && n != null)
    return Xr(
      xl(t, r),
      n
    );
  if (t.type === "boolean") {
    if (n === !0)
      return ((i = t.typeArguments) == null ? void 0 : i.trueLabel) ?? ul;
    if (n === !1)
      return ((s = t.typeArguments) == null ? void 0 : s.falseLabel) ?? dl;
  }
  return or(t) && typeof n == "string" ? gl(
    n,
    t.type,
    t.typeArguments
  ) : n;
}
function Eo(e) {
  return e.map((t) => ({ ...t, rows: wl(t) }));
}
const vi = 4, bn = 8;
function Ip({
  open: e,
  inputRef: t,
  panelRef: n,
  onScrollAway: r
}) {
  const [o, i] = re({
    top: 0,
    left: 0
  });
  return Bn(() => {
    if (!e) return;
    const s = () => {
      const l = t.current, a = n.current;
      if (!l || !a) return;
      const c = l.getBoundingClientRect(), u = window.innerHeight, f = window.innerWidth;
      if (c.bottom <= 0 || c.top >= u || c.right <= 0 || c.left >= f) {
        r();
        return;
      }
      const d = a.offsetHeight, g = a.offsetWidth, w = u - c.bottom, C = w < d && c.top > w ? c.top - d - vi : c.bottom + vi, x = Dt(
        C,
        bn,
        u - d - bn
      ), S = Dt(
        c.left,
        bn,
        f - g - bn
      );
      i({ top: x + window.scrollY, left: S + window.scrollX });
    };
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [e]), o;
}
const _p = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Ap({
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
  onSelectYear: f,
  onDayKeyDown: m
}) {
  const { t: d } = me(), g = Math.floor(t.year() / 10) * 10, w = Cp(t), p = et(), C = n ?? t.startOf("month"), x = e === "days" ? t.format("MMMM YYYY") : e === "months" ? t.format("YYYY") : `${g} - ${g + 9}`;
  return /* @__PURE__ */ U("div", { className: "hc:w-56", children: [
    /* @__PURE__ */ U("div", { className: "hc:mb-2 hc:flex hc:items-center hc:justify-between", children: [
      /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          "aria-label": d("components.datePicker.previous"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: s,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ v(np, { "aria-hidden": "true", className: "hc:size-5" })
        }
      ),
      /* @__PURE__ */ v(
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
      /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          "aria-label": d("components.datePicker.next"),
          onMouseDown: (S) => S.preventDefault(),
          onClick: l,
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer hc:rounded hc:p-1",
          children: /* @__PURE__ */ v(op, { "aria-hidden": "true", className: "hc:size-5" })
        }
      )
    ] }),
    e === "days" && /* @__PURE__ */ U("div", { role: "grid", "aria-label": d("components.datePicker.calendarLabel"), children: [
      /* @__PURE__ */ v("div", { role: "row", className: "hc:mb-1 hc:grid hc:grid-cols-7", children: _p.map((S) => /* @__PURE__ */ v(
        "div",
        {
          role: "columnheader",
          className: "hc:text-hello-csv-text-subtle hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:text-xs hc:font-medium",
          children: d(`components.datePicker.weekdays.${S}`)
        },
        S
      )) }),
      w.map((S) => /* @__PURE__ */ v(
        "div",
        {
          role: "row",
          className: "hc:grid hc:grid-cols-7",
          children: S.map((R) => {
            const _ = R.format("YYYY-MM-DD"), N = n != null && R.isSame(n, "day"), F = R.isSame(p, "day"), b = !R.isSame(t, "month"), h = vl(R, r, o), y = R.isSame(C, "day");
            return /* @__PURE__ */ v("div", { role: "gridcell", children: /* @__PURE__ */ v(
              "button",
              {
                type: "button",
                ref: (E) => {
                  i.current && (i.current[_] = E);
                },
                tabIndex: y ? 0 : -1,
                disabled: h,
                "aria-label": R.format("dddd, MMMM D, YYYY"),
                "aria-selected": N,
                "aria-current": F ? "date" : void 0,
                onClick: () => c(R),
                onKeyDown: (E) => m(E, R),
                className: `hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:rounded hc:text-sm ${N ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast hc:cursor-pointer" : h ? "hc:text-hello-csv-text-subtle hc:cursor-not-allowed hc:opacity-50" : b ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted hc:cursor-pointer" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer"} ${F && !N ? "hc:ring-hello-csv-primary hc:ring-1" : ""}`,
                children: R.date()
              }
            ) }, _);
          })
        },
        S[0].format("YYYY-MM-DD")
      ))
    ] }),
    e === "months" && /* @__PURE__ */ v("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, R) => {
      const _ = R === t.month();
      return /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onMouseDown: (N) => N.preventDefault(),
          onClick: () => u(R),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${_ ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: et().month(R).format("MMM")
        },
        R
      );
    }) }),
    e === "years" && /* @__PURE__ */ v("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, R) => {
      const _ = g - 1 + R, N = _ === t.year(), F = _ < g || _ > g + 9;
      return /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onMouseDown: (b) => b.preventDefault(),
          onClick: () => f(_),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${N ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : F ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: _
        },
        _
      );
    }) })
  ] });
}
function Fp({
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
  const { t: c } = me();
  return /* @__PURE__ */ U(
    "div",
    {
      className: `hc:flex hc:items-end hc:gap-2 ${r ? "hc:border-hello-csv-border hc:mt-3 hc:border-t hc:pt-3" : ""}`,
      children: [
        /* @__PURE__ */ v(
          yr,
          {
            label: c("components.datePicker.hours"),
            min: t ? 1 : 0,
            max: t ? 12 : 23,
            value: i,
            onChange: s
          }
        ),
        /* @__PURE__ */ v("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
        /* @__PURE__ */ v(
          yr,
          {
            label: c("components.datePicker.minutes"),
            max: 59,
            value: (e == null ? void 0 : e.minute()) ?? 0,
            onChange: (u) => l("minute", u)
          }
        ),
        n && /* @__PURE__ */ U(ut, { children: [
          /* @__PURE__ */ v("span", { className: "hc:text-hello-csv-text hc:pb-1.5", children: ":" }),
          /* @__PURE__ */ v(
            yr,
            {
              label: c("components.datePicker.seconds"),
              max: 59,
              value: (e == null ? void 0 : e.second()) ?? 0,
              onChange: (u) => l("second", u)
            }
          )
        ] }),
        t && /* @__PURE__ */ v("div", { className: "hc:ring-hello-csv-border-strong hc:ml-1 hc:flex hc:overflow-hidden hc:rounded-md hc:ring-1", children: ["AM", "PM"].map((u, f) => /* @__PURE__ */ v(
          "button",
          {
            type: "button",
            "aria-pressed": o === u,
            onMouseDown: (m) => m.preventDefault(),
            onClick: () => a(u),
            className: `hc:cursor-pointer hc:px-2 hc:py-1 hc:text-sm ${f === 1 ? "hc:border-hello-csv-border-strong hc:border-l" : ""} ${o === u ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
            children: c(`components.datePicker.${u === "AM" ? "am" : "pm"}`)
          },
          u
        )) })
      ]
    }
  );
}
function yr({ label: e, value: t, max: n, min: r = 0, onChange: o }) {
  return /* @__PURE__ */ U("label", { className: "hc:flex hc:flex-col hc:text-xs", children: [
    /* @__PURE__ */ v("span", { className: "hc:text-hello-csv-text-subtle hc:mb-1", children: e }),
    /* @__PURE__ */ v(
      "input",
      {
        ...rr,
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
const Dp = "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:block hc:w-full hc:rounded-md hc:py-1.5 hc:pr-10 hc:pl-3 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6";
function Pp({
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
  const { t: f } = me(), m = q(null), d = q(null), g = q(null), w = q({}), p = Rp({
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
  }), { open: C, setOpen: x, hasCalendar: S, hasTime: R, commitTextRef: _ } = p, N = Ip({
    open: C,
    inputRef: d,
    panelRef: g,
    onScrollAway: () => _.current()
  });
  return de(() => {
    var b, h, y;
    (b = d.current) == null || b.focus();
    const F = ((h = d.current) == null ? void 0 : h.value.length) ?? 0;
    (y = d.current) == null || y.setSelectionRange(F, F);
  }, []), de(() => {
    const F = (h) => {
      var y, E;
      return !!h && (!!((y = m.current) != null && y.contains(h)) || !!((E = g.current) != null && E.contains(h)));
    }, b = (h) => {
      F(h.target) && (F(h.relatedTarget) || _.current());
    };
    return document.addEventListener("focusout", b), () => document.removeEventListener("focusout", b);
  }, [_]), /* @__PURE__ */ U("div", { ref: m, className: "hc:relative hc:w-full", children: [
    /* @__PURE__ */ U("div", { className: "hc:relative", children: [
      /* @__PURE__ */ v(
        "input",
        {
          ...rr,
          ref: d,
          "aria-label": u["aria-label"],
          type: "text",
          className: Dp,
          value: p.text,
          onInput: p.handleInput,
          onKeyDown: p.handleInputKeyDown
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          "aria-label": f("components.datePicker.pickerLabel"),
          "aria-expanded": C,
          onClick: () => x((F) => !F),
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2 hc:outline-hidden",
          children: R && !S ? /* @__PURE__ */ v(up, { "aria-hidden": "true", className: "hc:size-5 hc:sm:size-4" }) : /* @__PURE__ */ v(
            Zh,
            {
              "aria-hidden": "true",
              className: "hc:size-5 hc:sm:size-4"
            }
          )
        }
      )
    ] }),
    C && jn(
      // Portaled out of the grid so the popover escapes the scroll
      // container's overflow clipping and the editing cell's stacking
      // context. The wrapper carries ROOT_CLASS (`hello-csv`) because the
      // library's Tailwind utilities are scoped under it — without a
      // `.hello-csv` ancestor the panel would render unstyled (the theme
      // CSS variables live on <html>, so those resolve regardless). This
      // mirrors how Root.tsx styles the headlessui portal root.
      /* @__PURE__ */ v("div", { className: Nn, children: /* @__PURE__ */ U(
        "div",
        {
          ref: g,
          [ll]: "",
          onMouseDown: (F) => {
            F.target.closest("input, button, select, textarea") || F.preventDefault();
          },
          onKeyDown: (F) => {
            var b;
            F.key === "Escape" && (F.stopPropagation(), x(!1), (b = d.current) == null || b.focus());
          },
          style: { position: "absolute", top: N.top, left: N.left },
          className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:z-99 hc:w-max hc:rounded-md hc:p-3 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:sm:text-sm",
          role: "dialog",
          "aria-label": f("components.datePicker.pickerLabel"),
          children: [
            S && /* @__PURE__ */ v(
              Ap,
              {
                view: p.view,
                viewMonth: p.viewMonth,
                draft: p.draft,
                minBound: p.minBound,
                maxBound: p.maxBound,
                dayRefs: w,
                onPrev: p.handlePrev,
                onNext: p.handleNext,
                onTitleClick: p.handleTitleClick,
                onSelectDay: p.selectDay,
                onSelectMonth: p.selectMonth,
                onSelectYear: p.selectYear,
                onDayKeyDown: p.handleGridKeyDown
              }
            ),
            R && /* @__PURE__ */ v(
              Fp,
              {
                draft: p.draft,
                is12h: p.is12h,
                showSeconds: s,
                hasCalendar: S,
                meridiem: p.meridiem,
                hourFieldValue: p.hourFieldValue,
                onHourChange: p.setHour,
                onPartChange: p.setTimePart,
                onMeridiem: p.setMeridiem
              }
            ),
            /* @__PURE__ */ v("div", { className: "hc:mt-3 hc:flex hc:justify-end", children: /* @__PURE__ */ v(De, { variant: "primary", onClick: p.commitText, children: f("components.datePicker.done") }) })
          ]
        }
      ) }),
      document.body
    )
  ] });
}
function kp({
  tabs: e,
  activeTab: t,
  onTabChange: n,
  idPrefix: r
}) {
  return /* @__PURE__ */ U("div", { children: [
    /* @__PURE__ */ v("div", { className: "hc:grid hc:grid-cols-1 hc:sm:hidden", children: /* @__PURE__ */ v(
      Et,
      {
        options: e,
        value: t,
        onChange: (o) => n(o)
      }
    ) }),
    /* @__PURE__ */ v("div", { className: "hc:hidden hc:sm:block", children: /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border hc:border-b", children: /* @__PURE__ */ v(
      "nav",
      {
        "aria-label": "Tabs",
        className: "hc:-mb-px hc:flex hc:space-x-8",
        role: "tablist",
        children: e.map((o) => /* @__PURE__ */ U(
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
const Np = mt(
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
), Lp = mt(
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
function Vp({
  variant: e,
  children: t,
  tooltipText: n,
  focusable: r = !0,
  placement: o = "bottom"
}) {
  const i = Np({ variant: e, placement: o }), s = Lp({
    withOutline: !!n
  });
  return /* @__PURE__ */ U(
    "div",
    {
      className: s,
      tabIndex: r ? 0 : void 0,
      children: [
        t,
        n && /* @__PURE__ */ U("span", { className: i, children: [
          /* @__PURE__ */ v("span", { "aria-hidden": "true", className: `hc:absolute hc:left-3 hc:h-2 hc:w-2 hc:rotate-45 hc:bg-hello-csv-tooltip-surface ${o === "top" ? "hc:-bottom-1" : "hc:-top-1"}` }),
          n
        ] })
      ]
    }
  );
}
const Hp = mt(
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
function zp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ v("span", { className: "hc:isolate hc:inline-flex hc:rounded-md hc:shadow-xs", children: t.map((n, r) => /* @__PURE__ */ v(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: Hp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      }),
      children: n.label
    },
    n.value
  )) });
}
const yt = 8, xn = 8, st = 8, Sn = -4, Bp = mt(
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
function tt({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = re(!1), [s, l] = re({ top: 0, left: 0 }), [a, c] = re("bottom"), [u, f] = re(0), m = q(null), d = q(null), [g, w] = re(null);
  de(() => {
    const S = document.createElement("div");
    return S.classList.add(Nn), document.body.appendChild(S), w(S), () => {
      document.body.removeChild(S);
    };
  }, []);
  const p = () => {
    requestAnimationFrame(() => {
      if (!m.current || !d.current) return;
      const S = m.current.getBoundingClientRect(), R = d.current.getBoundingClientRect(), _ = window.innerWidth, N = window.innerHeight, F = N - S.bottom, b = S.top, h = _ - S.right;
      let y = "bottom";
      F >= R.height + yt ? y = "bottom" : b >= R.height + yt ? y = "top" : h >= R.width + yt ? y = "right" : y = "left";
      let E = 0, T = 0;
      switch (y) {
        case "bottom":
          E = S.bottom + yt + window.scrollY, T = S.left + S.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "top":
          E = S.top - R.height - yt + window.scrollY, T = S.left + S.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "right":
          E = S.top + S.height / 2 - R.height / 2 + window.scrollY, T = S.right + yt + window.scrollX;
          break;
        case "left":
          E = S.top + S.height / 2 - R.height / 2 + window.scrollY, T = S.left - R.width - yt + window.scrollX;
          break;
      }
      E = Dt(
        E,
        xn + window.scrollY,
        window.scrollY + N - R.height - xn
      ), T = Dt(
        T,
        xn + window.scrollX,
        window.scrollX + _ - R.width - xn
      );
      const L = S.left + S.width / 2 + window.scrollX, A = S.top + S.height / 2 + window.scrollY;
      let k = 0;
      if (y === "top" || y === "bottom") {
        const M = L - T;
        k = Dt(
          M,
          st,
          R.width - st
        );
      } else {
        const M = A - E;
        k = Dt(
          M,
          st,
          R.height - st
        );
      }
      c(y), l({ top: E, left: T }), f(k), i(!0);
    });
  }, C = () => i(!1), x = ke();
  return /* @__PURE__ */ U(
    "div",
    {
      ref: m,
      tabIndex: 0,
      className: `${n ?? ""} hc:relative hc:inline-block`,
      onMouseEnter: p,
      onMouseLeave: C,
      onFocus: p,
      onBlur: C,
      "aria-describedby": x,
      children: [
        t,
        g && jn(
          /* @__PURE__ */ U(
            "div",
            {
              id: x,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: d,
              className: Bp({ visible: o, hidden: r }),
              style: {
                top: `${s.top}px`,
                left: `${s.left}px`
              },
              children: [
                e,
                /* @__PURE__ */ v(
                  "div",
                  {
                    className: "hc:bg-hello-csv-tooltip-surface hc:absolute hc:h-2 hc:w-2 hc:rotate-45",
                    style: a === "bottom" ? { top: Sn, left: u - st / 2 } : a === "top" ? {
                      bottom: Sn,
                      left: u - st / 2
                    } : a === "left" ? {
                      right: Sn,
                      top: u - st / 2
                    } : {
                      left: Sn,
                      top: u - st / 2
                    }
                  }
                )
              ]
            }
          ),
          g
        )
      ]
    }
  );
}
const jp = mt(
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
function Ro({ children: e, variant: t }) {
  const n = jp({ variant: t });
  return /* @__PURE__ */ v("div", { className: n, children: e });
}
function Up({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Cl = /* @__PURE__ */ $.forwardRef(Up);
function Gp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Wp = /* @__PURE__ */ $.forwardRef(Gp);
function qp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Jr = /* @__PURE__ */ $.forwardRef(qp);
function Yp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Kp = /* @__PURE__ */ $.forwardRef(Yp), Zp = {
  info: {
    icon: /* @__PURE__ */ v(
      Kp,
      {
        className: "hc:text-hello-csv-primary-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-primary-extra-light hc:text-hello-csv-primary hc:rounded-md hc:p-4"
  },
  success: {
    icon: /* @__PURE__ */ v(
      Cl,
      {
        className: "hc:text-hello-csv-success-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:rounded-md hc:p-4"
  },
  error: {
    icon: /* @__PURE__ */ v(
      Jr,
      {
        className: "hc:text-hello-csv-danger-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:rounded-md hc:p-4"
  },
  warning: {
    icon: /* @__PURE__ */ v(
      Jr,
      {
        className: "hc:text-hello-csv-warning-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-warning-extra-light hc:text-hello-csv-warning hc:rounded-md hc:p-4"
  }
};
function $o({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = Zp[e];
  return /* @__PURE__ */ v("div", { className: o, children: /* @__PURE__ */ U("div", { className: "hc:flex", children: [
    /* @__PURE__ */ v("div", { className: "hc:mt-1 hc:shrink-0", children: r }),
    /* @__PURE__ */ U("div", { className: "hc:ml-3", children: [
      t && /* @__PURE__ */ v("div", { className: "hc:text-base", children: t }),
      /* @__PURE__ */ v("div", { className: "hc:text-sm", children: n })
    ] })
  ] }) });
}
function El({ children: e }) {
  return /* @__PURE__ */ U("div", { className: "hc:flex", children: [
    /* @__PURE__ */ v("div", { className: "hc:shrink-0", children: /* @__PURE__ */ v(
      oh,
      {
        "aria-hidden": "true",
        className: "hc:text-hello-csv-danger hc:size-5"
      }
    ) }),
    /* @__PURE__ */ v("div", { className: "hc:ml-3 hc:flex-1 hc:md:flex hc:md:justify-between", children: /* @__PURE__ */ v("p", { className: "hc:text-hello-csv-danger hc:text-sm", children: e }) })
  ] });
}
const Xp = mt(
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
function Rl({ color: e = "dark" }) {
  return /* @__PURE__ */ v("span", { className: `${Xp({ color: e })}` });
}
function $l(e, t) {
  return e.indexOf(t) !== -1;
}
function Ml(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function Tl(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
async function Ol(e, t, n) {
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
class it {
  constructor(t) {
    ge(this, "definition");
    // Empty cells only reach validators that opt in; presence is `required`'s job.
    ge(this, "validatesEmptyValues", !1);
    this.definition = t;
  }
  isValid(t, n) {
    throw new Error("Not Implemented");
  }
}
class Jp extends it {
  isValid(t) {
    if (!wt(t) && typeof t != "boolean")
      return this.definition.error || "validators.boolean";
  }
}
class Qp extends it {
  constructor(n) {
    super(n);
    ge(this, "key");
    ge(this, "validateFn");
    this.key = n.key, this.validateFn = n.validateFn, this.validatesEmptyValues = n.validatesEmptyValues ?? !0;
  }
  isValid(n, r) {
    return this.validateFn(n, r);
  }
}
class em extends it {
  constructor(n) {
    super(n);
    ge(this, "dateType");
    ge(this, "typeArguments");
    ge(this, "min");
    ge(this, "max");
    this.dateType = n.dateType, this.typeArguments = {
      outputFormat: n.outputFormat,
      displayFormat: n.displayFormat,
      showSeconds: n.showSeconds
    }, this.min = n.min, this.max = n.max;
  }
  isValid(n) {
    if (wt(n))
      return;
    if (typeof n != "string")
      return this.definition.error || `validators.${this.dateType}`;
    const r = Ge(n, this.dateType, this.typeArguments);
    if (!r)
      return this.definition.error || `validators.${this.dateType}`;
    const o = Ge(this.min, this.dateType, this.typeArguments), i = Ge(this.max, this.dateType, this.typeArguments);
    if (Ep(r, o, i))
      return this.definition.error || "validators.dateOutOfRange";
  }
}
function tm(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class ir extends it {
  constructor(n) {
    super(n);
    ge(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(tm(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class nm extends ir {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class rm extends it {
  constructor(n) {
    super(n);
    ge(this, "values");
    if (this.values = n.values, !this.values)
      throw new Error("Missing `values` for `includes` validator");
  }
  isValid(n) {
    if (n == null || !this.values.includes(n))
      return this.definition.error || "validators.includes";
  }
}
class om extends it {
  isValid(t) {
    if (!(typeof t == "number" && Number.isFinite(t)))
      return this.definition.error || "validators.integer";
  }
}
class im extends it {
  constructor(n) {
    super(n);
    ge(this, "delimiter");
    ge(this, "values");
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
class sm extends ir {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class lm extends ir {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class am extends it {
  constructor(n) {
    super(n);
    ge(this, "when");
    ge(this, "validatesEmptyValues", !0);
    this.when = n.when ?? (() => !0);
  }
  isValid(n, r) {
    if (this.when(r) && wt(n))
      return this.definition.error || "validators.required";
  }
}
class cm extends it {
  constructor(n) {
    super(n);
    ge(this, "seen");
    ge(this, "caseInsensitive");
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
function um(e) {
  const t = {
    regex_matches: ir,
    required: am,
    unique: cm,
    includes: rm,
    multi_includes: im,
    boolean: Jp,
    is_integer: om,
    postal_code: lm,
    phone_number: sm,
    email: nm,
    date: em,
    custom: Qp
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function Il(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !wt(l))) == null ? void 0 : s.filter((l, a, c) => c.indexOf(l) === a)) ?? [];
}
function Mo(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function dm(e, t, n, r, o, i, s, l) {
  return ue(() => {
    let c = e.rows;
    switch (n) {
      case "errors":
        c = e.rows.filter(
          (u, f) => r.some((m) => m.rowIndex === f)
        );
        break;
      case "valid":
        c = e.rows.filter(
          (u, f) => !r.some((m) => m.rowIndex === f)
        );
        break;
      case "all":
      default:
        c = e.rows;
    }
    if (o != null && (c = c.filter((u) => {
      const f = Mo(t, i.id, u);
      return r.find(
        (d) => d.rowIndex === f && d.columnId === o
      ) != null;
    })), s.trim() !== "") {
      const u = Ln(s);
      c = c.filter(
        (f) => i.columns.some((m) => {
          var w;
          const d = f[m.id], { displayValue: g } = _l(
            i,
            m,
            d,
            l
          );
          return (w = Ln(g)) == null ? void 0 : w.includes(u);
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
function To(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function fm(e) {
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
function hm(e, t, n, r) {
  const o = Array.isArray(e) ? e : [], i = new Set(t.map((l) => l.value));
  return [...o.filter((l) => !i.has(l)).map((l) => ({
    label: n(String(l)),
    value: l,
    icon: r
  })), ...t];
}
function _l(e, t, n, r) {
  const o = Sl(
    e,
    t,
    n,
    r
  ), i = wt(o);
  return { displayValue: i ? " " : o, valueEmpty: i };
}
function sr(e) {
  if (e.validators && e.validators.length > 0) {
    const t = e.validators.find(
      (n) => n.validate === "required"
    );
    return t != null && t.when == null;
  }
  return !1;
}
function pm(e, t) {
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
    const r = Il(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  if (e.type === "boolean" && n.push({ validate: "boolean" }), or(e)) {
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
async function mm(e, t, n, r, o) {
  const i = Ml(e.columns, (a, c) => {
    c[a.id] = [], [
      ...(a.validators ?? []).filter(
        (f) => (f.runOn ?? "change") === r
      ),
      ...r === "change" ? pm(a, n) : []
    ].forEach((f) => {
      c[a.id].push(
        um(f)
      );
    });
  }), s = [];
  return e.columns.forEach((a) => {
    const c = i[a.id];
    c.length !== 0 && t.rows.forEach((u, f) => {
      if (!Tl(u))
        return;
      const m = u[a.id], d = wt(m);
      c.forEach((g) => {
        d && !g.validatesEmptyValues || s.push({
          columnId: a.id,
          rowIndex: f,
          value: m,
          row: u,
          validator: g
        });
      });
    });
  }), (await Ol(
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
async function gm(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? il, i = e.map(async (l) => {
    const a = t.find(
      (c) => c.sheetId === l.id
    );
    return a ? await mm(
      l,
      a,
      t,
      r,
      o
    ) : [];
  });
  return (await Promise.all(i)).flat();
}
const vm = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Al = Math.pow(2, 53), wm = -Al;
function ym(e) {
  if (vm.test(e)) {
    const t = parseFloat(e);
    return t > wm && t < Al;
  }
  return !1;
}
function bm(e, t = {}) {
  const n = e.trim().toLowerCase(), r = [
    ...t.trueValues ?? Wh,
    ...t.trueLabel ? [t.trueLabel] : []
  ].map((i) => i.toString().toLowerCase()), o = [
    ...t.falseValues ?? qh,
    ...t.falseLabel ? [t.falseLabel] : []
  ].map((i) => i.toString().toLowerCase());
  return r.includes(n) ? !0 : o.includes(n) ? !1 : e;
}
function wi(e, t) {
  const n = e.trim(), r = t.find((i) => String(i.value) === n);
  if (r)
    return String(r.value);
  const o = t.find((i) => i.label === n);
  return o ? String(o.value) : n;
}
function Oo(e, t) {
  switch (e.type) {
    case "number":
      return t.trim() === "" ? t : ym(t) ? parseFloat(t) : t;
    case "boolean":
      return bm(t, e.typeArguments);
    case "enum": {
      const n = e.typeArguments.values;
      if (e.typeArguments.multiple) {
        const r = e.typeArguments.delimiter ?? ",";
        return t.split(r).map((o) => o.trim()).filter((o) => o !== "").map((o) => wi(o, n));
      }
      return t.trim() === "" ? t : wi(t, n);
    }
    case "date":
    case "datetime":
    case "time":
      return Sp(t, e.type, e.typeArguments);
    default:
      return t;
  }
}
function xm(e, t) {
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
function Sm(e) {
  return e.type === "enum" && e.typeArguments.multiple ? [] : "";
}
function Fl(e, t, n) {
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
function Cm(e, t) {
  return Fl(
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
function Em(e, t) {
  return Fl(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function Rm(e, t) {
  return Oo(t, e ?? "");
}
function $m(e, t, n) {
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
        c != null && (l[c.sheetColumnId] = Rm(
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
function Mm(e, t, n) {
  const r = n.data, o = $m(e, t, r), i = Em(
    e,
    o
  );
  return Cm(e, i);
}
function lr(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Tm(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function Om(e, t) {
  const n = [];
  return t.forEach((r) => {
    const o = e.columns.find((i) => {
      if (!lr(i))
        return !1;
      const s = [
        i.id,
        ...i.suggestedMappingKeywords || []
      ].map((a) => Ln(a)), l = Ln(r);
      return s.includes(l);
    });
    o && n.push({
      csvColumnName: r,
      sheetId: e.id,
      sheetColumnId: o.id
    });
  }), n;
}
const Im = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = Om(r, t);
    n.push(...o);
  }), Tm(n);
};
function _m(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Am(e, t) {
  const n = Fm(e, t), r = Dm(n);
  return Pm(r);
}
function Fm(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, sl);
}
function Dm(e) {
  return [
    ...e,
    ...Array(sl - e.length).fill("")
  ];
}
function Pm(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > zh && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function km(e, t) {
  const { t: n } = me();
  return e.flatMap(
    (o) => o.columns.filter((i) => lr(i)).map((i) => ({
      label: `${i.label}${sr(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Nm(o, i, n("mapper.unused")));
}
function Nm(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Lm(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (sr(r) && lr(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Vm({
  examples: e,
  csvHeader: t
}) {
  const { t: n, tHtml: r } = me();
  return t && /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:m-4 hc:rounded-sm hc:border hc:px-4 hc:sm:px-6 hc:lg:px-8", children: /* @__PURE__ */ v("div", { className: "hc:mt-6 hc:flow-root", children: /* @__PURE__ */ v("div", { className: "hc:-mx-4 hc:-my-2 hc:overflow-x-auto hc:sm:-mx-6 hc:lg:-mx-8", children: /* @__PURE__ */ v("div", { className: "hc:inline-block hc:min-w-full hc:py-2 hc:align-middle", children: /* @__PURE__ */ U("table", { className: "hc:divide-hello-csv-border-strong hc:min-w-full hc:divide-y", children: [
    /* @__PURE__ */ v("thead", { children: /* @__PURE__ */ v("tr", { children: /* @__PURE__ */ v(
      "th",
      {
        scope: "col",
        className: "hc:text-hello-csv-text hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:sm:pl-6 hc:lg:pl-8",
        children: r("mapper.dataPreview", {
          csvHeader: /* @__PURE__ */ v(Ro, { children: t })
        })
      }
    ) }) }),
    /* @__PURE__ */ v("tbody", { className: "hc:divide-hello-csv-border-strong hc:divide-y", children: e == null ? void 0 : e.map((o, i) => /* @__PURE__ */ v("tr", { children: /* @__PURE__ */ v("td", { className: "hc:text-hello-csv-text hc:h-12 hc:py-4 hc:pr-3 hc:pl-4 hc:text-sm hc:font-medium hc:sm:pl-6 hc:lg:pl-8", children: o || i === 0 && /* @__PURE__ */ v("span", { className: "hc:text-hello-csv-text-muted hc:italic", children: n("mapper.noData") }) }) }, i)) })
  ] }) }) }) }) });
}
function Hm({
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
  return /* @__PURE__ */ v(
    "div",
    {
      className: "hc:hover:bg-hello-csv-muted hc:rounded-sm",
      onMouseEnter: o,
      children: /* @__PURE__ */ U("div", { className: "hc:flex hc:items-center hc:py-2.5", children: [
        /* @__PURE__ */ U("div", { className: "hc:mx-2.5 hc:flex hc:flex-1 hc:justify-between", children: [
          /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(Ro, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ v("div", { className: "hc:mx-5", children: /* @__PURE__ */ v(Df, { className: "hc:h-4 hc:w-4" }) })
        ] }),
        /* @__PURE__ */ v("div", { className: "hc:mx-2.5 hc:flex-1", children: /* @__PURE__ */ v(
          Et,
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
const Dl = "HelloCSV", Pl = 1, rt = "state";
async function zm(e, t) {
  return new Promise((n, r) => {
    const o = Nl(e, t), i = indexedDB.open(Dl, Pl);
    i.onerror = () => r(i.error), i.onsuccess = () => {
      const c = i.result.transaction(rt, "readonly").objectStore(rt).get(o);
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
      l.objectStoreNames.contains(rt) && l.deleteObjectStore(rt), l.createObjectStore(rt);
    };
  });
}
async function kl(e, t) {
  return new Promise((n, r) => {
    const o = Nl(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(Dl, Pl);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const u = s.result.transaction(rt, "readwrite").objectStore(rt).put(i, o);
      u.onerror = () => r(u.error), u.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(rt) || a.createObjectStore(rt);
    };
  });
}
function Nl(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${Bm(r)}`;
}
function Bm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function jm(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => lr(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label
      };
      sr(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const Um = (e) => "." + (e.split(".").pop() ?? "").toLowerCase(), en = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Gm = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), Wm = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Gm(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
var On = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var qm = On.exports, yi;
function Ym() {
  return yi || (yi = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(qm, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, c = {};
      function u(b) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(h) {
          var y = _(h);
          y.chunkSize = parseInt(y.chunkSize), h.step || h.chunk || (y.chunkSize = null), this._handle = new w(y), (this._handle.streamer = this)._config = y;
        }).call(this, b), this.parseChunk = function(h, y) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let L = this._config.newline;
            L || (T = this._config.quoteChar || '"', L = this._handle.guessLineEndings(h, T)), h = [...h.split(L).slice(E)].join(L);
          }
          this.isFirstChunk && F(this._config.beforeFirstChunk) && (T = this._config.beforeFirstChunk(h)) !== void 0 && (h = T), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + h, T = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (h = T.meta.cursor, E = (this._finished || (this._partialLine = E.substring(h - this._baseIndex), this._baseIndex = h), T && T.data && (this._rowCount += T.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: T, workerId: c.WORKER_ID, finished: E });
            else if (F(this._config.chunk) && !y) {
              if (this._config.chunk(T, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = T = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(T.data), this._completeResults.errors = this._completeResults.errors.concat(T.errors), this._completeResults.meta = T.meta), this._completed || !E || !F(this._config.complete) || T && T.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || T && T.meta.paused || this._nextChunk(), T;
          }
          this._halted = !0;
        }, this._sendError = function(h) {
          F(this._config.error) ? this._config.error(h) : s && this._config.error && r.postMessage({ workerId: c.WORKER_ID, error: h, finished: !1 });
        };
      }
      function f(b) {
        var h;
        (b = b || {}).chunkSize || (b.chunkSize = c.RemoteChunkSize), u.call(this, b), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(y) {
          this._input = y, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (h = new XMLHttpRequest(), this._config.withCredentials && (h.withCredentials = this._config.withCredentials), i || (h.onload = N(this._chunkLoaded, this), h.onerror = N(this._chunkError, this)), h.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var y, E = this._config.downloadRequestHeaders;
              for (y in E) h.setRequestHeader(y, E[y]);
            }
            var T;
            this._config.chunkSize && (T = this._start + this._config.chunkSize - 1, h.setRequestHeader("Range", "bytes=" + this._start + "-" + T));
            try {
              h.send(this._config.downloadRequestBody);
            } catch (L) {
              this._chunkError(L.message);
            }
            i && h.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          h.readyState === 4 && (h.status < 200 || 400 <= h.status ? this._chunkError() : (this._start += this._config.chunkSize || h.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((y) => (y = y.getResponseHeader("Content-Range")) !== null ? parseInt(y.substring(y.lastIndexOf("/") + 1)) : -1)(h), this.parseChunk(h.responseText)));
        }, this._chunkError = function(y) {
          y = h.statusText || y, this._sendError(new Error(y));
        };
      }
      function m(b) {
        (b = b || {}).chunkSize || (b.chunkSize = c.LocalChunkSize), u.call(this, b);
        var h, y, E = typeof FileReader < "u";
        this.stream = function(T) {
          this._input = T, y = T.slice || T.webkitSlice || T.mozSlice, E ? ((h = new FileReader()).onload = N(this._chunkLoaded, this), h.onerror = N(this._chunkError, this)) : h = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var T = this._input, L = (this._config.chunkSize && (L = Math.min(this._start + this._config.chunkSize, this._input.size), T = y.call(T, this._start, L)), h.readAsText(T, this._config.encoding));
          E || this._chunkLoaded({ target: { result: L } });
        }, this._chunkLoaded = function(T) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(T.target.result);
        }, this._chunkError = function() {
          this._sendError(h.error);
        };
      }
      function d(b) {
        var h;
        u.call(this, b = b || {}), this.stream = function(y) {
          return h = y, this._nextChunk();
        }, this._nextChunk = function() {
          var y, E;
          if (!this._finished) return y = this._config.chunkSize, h = y ? (E = h.substring(0, y), h.substring(y)) : (E = h, ""), this._finished = !h, this.parseChunk(E);
        };
      }
      function g(b) {
        u.call(this, b = b || {});
        var h = [], y = !0, E = !1;
        this.pause = function() {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(T) {
          this._input = T, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && h.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), h.length ? this.parseChunk(h.shift()) : y = !0;
        }, this._streamData = N(function(T) {
          try {
            h.push(typeof T == "string" ? T : T.toString(this._config.encoding)), y && (y = !1, this._checkIsFinished(), this.parseChunk(h.shift()));
          } catch (L) {
            this._streamError(L);
          }
        }, this), this._streamError = N(function(T) {
          this._streamCleanUp(), this._sendError(T);
        }, this), this._streamEnd = N(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = N(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function w(b) {
        var h, y, E, T, L = Math.pow(2, 53), A = -L, k = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, M = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, O = this, I = 0, D = 0, z = !1, H = !1, V = [], P = { data: [], errors: [], meta: {} };
        function ee(B) {
          return b.skipEmptyLines === "greedy" ? B.join("").trim() === "" : B.length === 1 && B[0].length === 0;
        }
        function X() {
          if (P && E && (oe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), E = !1), b.skipEmptyLines && (P.data = P.data.filter(function(Y) {
            return !ee(Y);
          })), ce()) {
            let Y = function(W, J) {
              F(b.transformHeader) && (W = b.transformHeader(W, J)), V.push(W);
            };
            if (P) if (Array.isArray(P.data[0])) {
              for (var B = 0; ce() && B < P.data.length; B++) P.data[B].forEach(Y);
              P.data.splice(0, 1);
            } else P.data.forEach(Y);
          }
          function G(Y, W) {
            for (var J = b.header ? {} : [], j = 0; j < Y.length; j++) {
              var Z = j, ne = Y[j], ne = ((we, ae) => ((pe) => (b.dynamicTypingFunction && b.dynamicTyping[pe] === void 0 && (b.dynamicTyping[pe] = b.dynamicTypingFunction(pe)), (b.dynamicTyping[pe] || b.dynamicTyping) === !0))(we) ? ae === "true" || ae === "TRUE" || ae !== "false" && ae !== "FALSE" && (((pe) => {
                if (k.test(pe) && (pe = parseFloat(pe), A < pe && pe < L))
                  return 1;
              })(ae) ? parseFloat(ae) : M.test(ae) ? new Date(ae) : ae === "" ? null : ae) : ae)(Z = b.header ? j >= V.length ? "__parsed_extra" : V[j] : Z, ne = b.transform ? b.transform(ne, Z) : ne);
              Z === "__parsed_extra" ? (J[Z] = J[Z] || [], J[Z].push(ne)) : J[Z] = ne;
            }
            return b.header && (j > V.length ? oe("FieldMismatch", "TooManyFields", "Too many fields: expected " + V.length + " fields but parsed " + j, D + W) : j < V.length && oe("FieldMismatch", "TooFewFields", "Too few fields: expected " + V.length + " fields but parsed " + j, D + W)), J;
          }
          var te;
          P && (b.header || b.dynamicTyping || b.transform) && (te = 1, !P.data.length || Array.isArray(P.data[0]) ? (P.data = P.data.map(G), te = P.data.length) : P.data = G(P.data, 0), b.header && P.meta && (P.meta.fields = V), D += te);
        }
        function ce() {
          return b.header && V.length === 0;
        }
        function oe(B, G, te, Y) {
          B = { type: B, code: G, message: te }, Y !== void 0 && (B.row = Y), P.errors.push(B);
        }
        F(b.step) && (T = b.step, b.step = function(B) {
          P = B, ce() ? X() : (X(), P.data.length !== 0 && (I += B.data.length, b.preview && I > b.preview ? y.abort() : (P.data = P.data[0], T(P, O))));
        }), this.parse = function(B, G, te) {
          var Y = b.quoteChar || '"', Y = (b.newline || (b.newline = this.guessLineEndings(B, Y)), E = !1, b.delimiter ? F(b.delimiter) && (b.delimiter = b.delimiter(B), P.meta.delimiter = b.delimiter) : ((Y = ((W, J, j, Z, ne) => {
            var we, ae, pe, Xe;
            ne = ne || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var _t = 0; _t < ne.length; _t++) {
              for (var ze, Gt = ne[_t], Ce = 0, Be = 0, xe = 0, Ie = (pe = void 0, new C({ comments: Z, delimiter: Gt, newline: J, preview: 10 }).parse(W)), Je = 0; Je < Ie.data.length; Je++) j && ee(Ie.data[Je]) ? xe++ : (ze = Ie.data[Je].length, Be += ze, pe === void 0 ? pe = ze : 0 < ze && (Ce += Math.abs(ze - pe), pe = ze));
              0 < Ie.data.length && (Be /= Ie.data.length - xe), (ae === void 0 || Ce <= ae) && (Xe === void 0 || Xe < Be) && 1.99 < Be && (ae = Ce, we = Gt, Xe = Be);
            }
            return { successful: !!(b.delimiter = we), bestDelimiter: we };
          })(B, b.newline, b.skipEmptyLines, b.comments, b.delimitersToGuess)).successful ? b.delimiter = Y.bestDelimiter : (E = !0, b.delimiter = c.DefaultDelimiter), P.meta.delimiter = b.delimiter), _(b));
          return b.preview && b.header && Y.preview++, h = B, y = new C(Y), P = y.parse(h, G, te), X(), z ? { meta: { paused: !0 } } : P || { meta: { paused: !1 } };
        }, this.paused = function() {
          return z;
        }, this.pause = function() {
          z = !0, y.abort(), h = F(b.chunk) ? "" : h.substring(y.getCharIndex());
        }, this.resume = function() {
          O.streamer._halted ? (z = !1, O.streamer.parseChunk(h, !0)) : setTimeout(O.resume, 3);
        }, this.aborted = function() {
          return H;
        }, this.abort = function() {
          H = !0, y.abort(), P.meta.aborted = !0, F(b.complete) && b.complete(P), h = "";
        }, this.guessLineEndings = function(W, Y) {
          W = W.substring(0, 1048576);
          var Y = new RegExp(p(Y) + "([^]*?)" + p(Y), "gm"), te = (W = W.replace(Y, "")).split("\r"), Y = W.split(`
`), W = 1 < Y.length && Y[0].length < te[0].length;
          if (te.length === 1 || W) return `
`;
          for (var J = 0, j = 0; j < te.length; j++) te[j][0] === `
` && J++;
          return J >= te.length / 2 ? `\r
` : "\r";
        };
      }
      function p(b) {
        return b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(b) {
        var h = (b = b || {}).delimiter, y = b.newline, E = b.comments, T = b.step, L = b.preview, A = b.fastMode, k = null, M = !1, O = b.quoteChar == null ? '"' : b.quoteChar, I = O;
        if (b.escapeChar !== void 0 && (I = b.escapeChar), (typeof h != "string" || -1 < c.BAD_DELIMITERS.indexOf(h)) && (h = ","), E === h) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < c.BAD_DELIMITERS.indexOf(E)) && (E = !1), y !== `
` && y !== "\r" && y !== `\r
` && (y = `
`);
        var D = 0, z = !1;
        this.parse = function(H, V, P) {
          if (typeof H != "string") throw new Error("Input must be a string");
          var ee = H.length, X = h.length, ce = y.length, oe = E.length, B = F(T), G = [], te = [], Y = [], W = D = 0;
          if (!H) return Ce();
          if (A || A !== !1 && H.indexOf(O) === -1) {
            for (var J = H.split(y), j = 0; j < J.length; j++) {
              if (Y = J[j], D += Y.length, j !== J.length - 1) D += y.length;
              else if (P) return Ce();
              if (!E || Y.substring(0, oe) !== E) {
                if (B) {
                  if (G = [], Xe(Y.split(h)), Be(), z) return Ce();
                } else Xe(Y.split(h));
                if (L && L <= j) return G = G.slice(0, L), Ce(!0);
              }
            }
            return Ce();
          }
          for (var Z = H.indexOf(h, D), ne = H.indexOf(y, D), we = new RegExp(p(I) + p(O), "g"), ae = H.indexOf(O, D); ; ) if (H[D] === O) for (ae = D, D++; ; ) {
            if ((ae = H.indexOf(O, ae + 1)) === -1) return P || te.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: G.length, index: D }), ze();
            if (ae === ee - 1) return ze(H.substring(D, ae).replace(we, O));
            if (O === I && H[ae + 1] === I) ae++;
            else if (O === I || ae === 0 || H[ae - 1] !== I) {
              Z !== -1 && Z < ae + 1 && (Z = H.indexOf(h, ae + 1));
              var pe = _t((ne = ne !== -1 && ne < ae + 1 ? H.indexOf(y, ae + 1) : ne) === -1 ? Z : Math.min(Z, ne));
              if (H.substr(ae + 1 + pe, X) === h) {
                Y.push(H.substring(D, ae).replace(we, O)), H[D = ae + 1 + pe + X] !== O && (ae = H.indexOf(O, D)), Z = H.indexOf(h, D), ne = H.indexOf(y, D);
                break;
              }
              if (pe = _t(ne), H.substring(ae + 1 + pe, ae + 1 + pe + ce) === y) {
                if (Y.push(H.substring(D, ae).replace(we, O)), Gt(ae + 1 + pe + ce), Z = H.indexOf(h, D), ae = H.indexOf(O, D), B && (Be(), z)) return Ce();
                if (L && G.length >= L) return Ce(!0);
                break;
              }
              te.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: G.length, index: D }), ae++;
            }
          }
          else if (E && Y.length === 0 && H.substring(D, D + oe) === E) {
            if (ne === -1) return Ce();
            D = ne + ce, ne = H.indexOf(y, D), Z = H.indexOf(h, D);
          } else if (Z !== -1 && (Z < ne || ne === -1)) Y.push(H.substring(D, Z)), D = Z + X, Z = H.indexOf(h, D);
          else {
            if (ne === -1) break;
            if (Y.push(H.substring(D, ne)), Gt(ne + ce), B && (Be(), z)) return Ce();
            if (L && G.length >= L) return Ce(!0);
          }
          return ze();
          function Xe(xe) {
            G.push(xe), W = D;
          }
          function _t(xe) {
            var Ie = 0;
            return Ie = xe !== -1 && (xe = H.substring(ae + 1, xe)) && xe.trim() === "" ? xe.length : Ie;
          }
          function ze(xe) {
            return P || (xe === void 0 && (xe = H.substring(D)), Y.push(xe), D = ee, Xe(Y), B && Be()), Ce();
          }
          function Gt(xe) {
            D = xe, Xe(Y), Y = [], ne = H.indexOf(y, D);
          }
          function Ce(xe) {
            if (b.header && !V && G.length && !M) {
              var Ie = G[0], Je = {}, cr = new Set(Ie);
              let Fo = !1;
              for (let At = 0; At < Ie.length; At++) {
                let je = Ie[At];
                if (Je[je = F(b.transformHeader) ? b.transformHeader(je, At) : je]) {
                  let Wt, Do = Je[je];
                  for (; Wt = je + "_" + Do, Do++, cr.has(Wt); ) ;
                  cr.add(Wt), Ie[At] = Wt, Je[je]++, Fo = !0, (k = k === null ? {} : k)[Wt] = je;
                } else Je[je] = 1, Ie[At] = je;
                cr.add(je);
              }
              Fo && console.warn("Duplicate headers found and renamed."), M = !0;
            }
            return { data: G, errors: te, meta: { delimiter: h, linebreak: y, aborted: z, truncated: !!xe, cursor: W + (V || 0), renamedHeaders: k } };
          }
          function Be() {
            T(Ce()), G = [], te = [];
          }
        }, this.abort = function() {
          z = !0;
        }, this.getCharIndex = function() {
          return D;
        };
      }
      function x(b) {
        var h = b.data, y = l[h.workerId], E = !1;
        if (h.error) y.userError(h.error, h.file);
        else if (h.results && h.results.data) {
          var T = { abort: function() {
            E = !0, S(h.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: R, resume: R };
          if (F(y.userStep)) {
            for (var L = 0; L < h.results.data.length && (y.userStep({ data: h.results.data[L], errors: h.results.errors, meta: h.results.meta }, T), !E); L++) ;
            delete h.results;
          } else F(y.userChunk) && (y.userChunk(h.results, T, h.file), delete h.results);
        }
        h.finished && !E && S(h.workerId, h.results);
      }
      function S(b, h) {
        var y = l[b];
        F(y.userComplete) && y.userComplete(h), y.terminate(), delete l[b];
      }
      function R() {
        throw new Error("Not implemented.");
      }
      function _(b) {
        if (typeof b != "object" || b === null) return b;
        var h, y = Array.isArray(b) ? [] : {};
        for (h in b) y[h] = _(b[h]);
        return y;
      }
      function N(b, h) {
        return function() {
          b.apply(h, arguments);
        };
      }
      function F(b) {
        return typeof b == "function";
      }
      return c.parse = function(b, h) {
        var y = (h = h || {}).dynamicTyping || !1;
        if (F(y) && (h.dynamicTypingFunction = y, y = {}), h.dynamicTyping = y, h.transform = !!F(h.transform) && h.transform, !h.worker || !c.WORKERS_SUPPORTED) return y = null, c.NODE_STREAM_INPUT, typeof b == "string" ? (b = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(b), y = new (h.download ? f : d)(h)) : b.readable === !0 && F(b.read) && F(b.on) ? y = new g(h) : (r.File && b instanceof File || b instanceof Object) && (y = new m(h)), y.stream(b);
        (y = (() => {
          var E;
          return !!c.WORKERS_SUPPORTED && (E = (() => {
            var T = r.URL || r.webkitURL || null, L = n.toString();
            return c.BLOB_URL || (c.BLOB_URL = T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })));
          })(), (E = new r.Worker(E)).onmessage = x, E.id = a++, l[E.id] = E);
        })()).userStep = h.step, y.userChunk = h.chunk, y.userComplete = h.complete, y.userError = h.error, h.step = F(h.step), h.chunk = F(h.chunk), h.complete = F(h.complete), h.error = F(h.error), delete h.worker, y.postMessage({ input: b, config: h, workerId: y.id });
      }, c.unparse = function(b, h) {
        var y = !1, E = !0, T = ",", L = `\r
`, A = '"', k = A + A, M = !1, O = null, I = !1, D = ((() => {
          if (typeof h == "object") {
            if (typeof h.delimiter != "string" || c.BAD_DELIMITERS.filter(function(V) {
              return h.delimiter.indexOf(V) !== -1;
            }).length || (T = h.delimiter), typeof h.quotes != "boolean" && typeof h.quotes != "function" && !Array.isArray(h.quotes) || (y = h.quotes), typeof h.skipEmptyLines != "boolean" && typeof h.skipEmptyLines != "string" || (M = h.skipEmptyLines), typeof h.newline == "string" && (L = h.newline), typeof h.quoteChar == "string" && (A = h.quoteChar), typeof h.header == "boolean" && (E = h.header), Array.isArray(h.columns)) {
              if (h.columns.length === 0) throw new Error("Option columns is empty");
              O = h.columns;
            }
            h.escapeChar !== void 0 && (k = h.escapeChar + A), h.escapeFormulae instanceof RegExp ? I = h.escapeFormulae : typeof h.escapeFormulae == "boolean" && h.escapeFormulae && (I = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(p(A), "g"));
        if (typeof b == "string" && (b = JSON.parse(b)), Array.isArray(b)) {
          if (!b.length || Array.isArray(b[0])) return z(null, b, M);
          if (typeof b[0] == "object") return z(O || Object.keys(b[0]), b, M);
        } else if (typeof b == "object") return typeof b.data == "string" && (b.data = JSON.parse(b.data)), Array.isArray(b.data) && (b.fields || (b.fields = b.meta && b.meta.fields || O), b.fields || (b.fields = Array.isArray(b.data[0]) ? b.fields : typeof b.data[0] == "object" ? Object.keys(b.data[0]) : []), Array.isArray(b.data[0]) || typeof b.data[0] == "object" || (b.data = [b.data])), z(b.fields || [], b.data || [], M);
        throw new Error("Unable to serialize unrecognized input");
        function z(V, P, ee) {
          var X = "", ce = (typeof V == "string" && (V = JSON.parse(V)), typeof P == "string" && (P = JSON.parse(P)), Array.isArray(V) && 0 < V.length), oe = !Array.isArray(P[0]);
          if (ce && E) {
            for (var B = 0; B < V.length; B++) 0 < B && (X += T), X += H(V[B], B);
            0 < P.length && (X += L);
          }
          for (var G = 0; G < P.length; G++) {
            var te = (ce ? V : P[G]).length, Y = !1, W = ce ? Object.keys(P[G]).length === 0 : P[G].length === 0;
            if (ee && !ce && (Y = ee === "greedy" ? P[G].join("").trim() === "" : P[G].length === 1 && P[G][0].length === 0), ee === "greedy" && ce) {
              for (var J = [], j = 0; j < te; j++) {
                var Z = oe ? V[j] : j;
                J.push(P[G][Z]);
              }
              Y = J.join("").trim() === "";
            }
            if (!Y) {
              for (var ne = 0; ne < te; ne++) {
                0 < ne && !W && (X += T);
                var we = ce && oe ? V[ne] : ne;
                X += H(P[G][we], ne);
              }
              G < P.length - 1 && (!ee || 0 < te && !W) && (X += L);
            }
          }
          return X;
        }
        function H(V, P) {
          var ee, X;
          return V == null ? "" : V.constructor === Date ? JSON.stringify(V).slice(1, 25) : (X = !1, I && typeof V == "string" && I.test(V) && (V = "'" + V, X = !0), ee = V.toString().replace(D, k), (X = X || y === !0 || typeof y == "function" && y(V, P) || Array.isArray(y) && y[P] || ((ce, oe) => {
            for (var B = 0; B < oe.length; B++) if (-1 < ce.indexOf(oe[B])) return !0;
            return !1;
          })(ee, c.BAD_DELIMITERS) || -1 < ee.indexOf(T) || ee.charAt(0) === " " || ee.charAt(ee.length - 1) === " ") ? A + ee + A : ee);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = C, c.ParserHandle = w, c.NetworkStreamer = f, c.FileStreamer = m, c.StringStreamer = d, c.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(b) {
        var h = b.config || {}, y = [];
        return this.each(function(L) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var A = 0; A < this.files.length; A++) y.push({ file: this.files[A], inputElem: this, instanceConfig: o.extend({}, h) });
        }), E(), this;
        function E() {
          if (y.length === 0) F(b.complete) && b.complete();
          else {
            var L, A, k, M, O = y[0];
            if (F(b.before)) {
              var I = b.before(O.file, O.inputElem);
              if (typeof I == "object") {
                if (I.action === "abort") return L = "AbortError", A = O.file, k = O.inputElem, M = I.reason, void (F(b.error) && b.error({ name: L }, A, k, M));
                if (I.action === "skip") return void T();
                typeof I.config == "object" && (O.instanceConfig = o.extend(O.instanceConfig, I.config));
              } else if (I === "skip") return void T();
            }
            var D = O.instanceConfig.complete;
            O.instanceConfig.complete = function(z) {
              F(D) && D(z, O.file, O.inputElem), T();
            }, c.parse(O.file, O.instanceConfig);
          }
        }
        function T() {
          y.splice(0, 1), E();
        }
      }), s && (r.onmessage = function(b) {
        b = b.data, c.WORKER_ID === void 0 && b && (c.WORKER_ID = b.workerId), typeof b.input == "string" ? r.postMessage({ workerId: c.WORKER_ID, results: c.parse(b.input, b.config), finished: !0 }) : (r.File && b.input instanceof File || b.input instanceof Object) && (b = c.parse(b.input, b.config)) && r.postMessage({ workerId: c.WORKER_ID, results: b, finished: !0 });
      }), (f.prototype = Object.create(u.prototype)).constructor = f, (m.prototype = Object.create(u.prototype)).constructor = m, (d.prototype = Object.create(d.prototype)).constructor = d, (g.prototype = Object.create(u.prototype)).constructor = g, c;
    });
  }(On)), On.exports;
}
var Km = Ym();
const Ll = /* @__PURE__ */ xo(Km);
async function Zm({ file: e }) {
  return new Promise((t, n) => {
    Ll.parse(e, {
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
function Xm(e, t) {
  return e === "" ? [] : Ll.parse(e, {
    delimiter: t,
    header: !1,
    skipEmptyLines: !0
  }).data;
}
class gn {
  constructor(t) {
    ge(this, "definition");
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
class Jm extends gn {
  constructor(n) {
    super(n);
    ge(this, "key");
    ge(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class Qm extends gn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class eg extends gn {
  parse(t) {
    if (typeof t == "string" && $l(t, "-"))
      return t.split("-")[0];
  }
}
const bi = [
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
class tg extends gn {
  parse(t) {
    const n = bi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && $l(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return bi[r][1];
    }
  }
}
class ng extends gn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function rg(e) {
  const t = {
    phone_number: Qm,
    postal_code: eg,
    state_code: tg,
    strip: ng,
    custom: Jm
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
async function og(e, t, n, r) {
  const o = Ml(
    e.columns,
    (a, c) => {
      c[a.id] = new sg(), a.transformers && a.transformers.filter((u) => (u.runOn ?? "change") === n).forEach((u) => {
        c[a.id].push(
          rg(u)
        );
      });
    }
  ), i = [];
  e.columns.forEach((a) => {
    const c = a.id, u = o[c];
    u.steps.length !== 0 && t.rows.forEach((f, m) => {
      if (!Tl(f))
        return;
      const d = f[c];
      wt(d) || i.push({ rowIndex: m, columnId: c, value: d, pipeline: u });
    });
  });
  const s = await Ol(
    i,
    r,
    async (a) => ({
      ...a,
      value: await a.pipeline.transform(a.value)
    })
  ), l = /* @__PURE__ */ new Map();
  return s.forEach(({ rowIndex: a, columnId: c, value: u }) => {
    const f = l.get(a) ?? {};
    f[c] = u, l.set(a, f);
  }), t.rows.map((a, c) => {
    const u = l.get(c);
    return u == null ? a : Object.keys(u).some(
      (m) => a[m] !== u[m]
    ) ? { ...a, ...u } : a;
  });
}
async function ig(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? il, i = [];
  for (const s of e) {
    const l = t.find(
      (a) => a.sheetId === s.id
    );
    if (l) {
      const a = await og(
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
class sg {
  // Series of transformations
  constructor(t = []) {
    ge(this, "steps");
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
let br = 0;
function Vl() {
  return br = (br + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${br}`;
}
async function lg(e, t) {
  const n = vn(e);
  try {
    return t.enabled ? await ag(e, t) : n;
  } catch {
    return n;
  }
}
function vn(e) {
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
async function ag(e, t) {
  const n = await zm(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = vn(e);
  return kl(r, t.customKey), r;
}
class Hl {
  constructor(t, n) {
    ge(this, "initialState");
    ge(this, "importerDefinition");
    ge(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? vn(t.sheets), this.buildSteps = [];
  }
  async getState(t = "change") {
    let n = this.initialState;
    this.buildSteps.forEach((s) => {
      n = zl(n, s);
    });
    const r = this.importerDefinition.maxConcurrentAsyncOperations, o = await ig(
      this.importerDefinition.sheets,
      n.sheetData,
      { phase: t, concurrency: r }
    ).catch(() => n.sheetData), i = await gm(
      this.importerDefinition.sheets,
      o,
      { phase: t, concurrency: r }
    ).catch(() => n.validationErrors);
    return { ...n, sheetData: o, validationErrors: i };
  }
  async uploadFile(t) {
    const n = await Wm(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await Zm({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
      this.importerDefinition.sheets,
      o
    ) : Im(
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
        amountOfEmptyRowsToAdd: t ?? kh
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
    const t = await this.getState(), n = Mm(
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
class r0 extends Hl {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const Hn = class Hn extends Hl {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => Hn.actionTypesThatRequireProcessing.has(o.type)
    ), r = Vl();
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
ge(Hn, "actionTypesThatRequireProcessing", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS",
  "RESTORE_SHEET_DATA",
  "ADD_EMPTY_ROW"
]));
let Vn = Hn;
function cg(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const zl = (e, t) => {
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
          return i[t.payload.rowIndex] = cg(
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
      return vn(e.sheetDefinitions);
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
}, ug = (e, t, n) => {
  const [r, o] = an(
    zl,
    n ?? vn(e)
  );
  return de(() => {
    const i = async () => {
      const s = await lg(e, t);
      o({ type: "SET_STATE", payload: { state: s } });
    };
    n == null && i();
  }, []), de(() => {
    t.enabled && kl(r, t.customKey);
  }, [r, t]), [r, o];
}, Bl = ve({}), jl = ve(
  {}
);
function dg({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, s] = ug(
    e,
    t,
    n
  ), l = q(i);
  return de(() => {
    l.current !== i && (r == null || r(l.current, i), l.current = i);
  }, [i, r]), /* @__PURE__ */ v(Bl.Provider, { value: i, children: /* @__PURE__ */ v(jl.Provider, { value: s, children: o }) });
}
function Ze() {
  return he(Bl);
}
function fg() {
  return he(jl);
}
function hg({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  const { columnMappings: r, parsedFile: o } = Ze(), { sheets: i } = Ne(), { t: s } = me(), [l, a] = re(null), c = r ?? [], u = o, f = u.data, m = u.meta.fields, d = km(
    i,
    c
  ), g = Lm(
    i,
    c
  ), w = ue(() => l ? Am(f, l) : [], [l, f]), [p, C] = re(!1);
  async function x() {
    try {
      C(!0), await t();
    } finally {
      C(!1);
    }
  }
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex-none hc:text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ v("div", { className: "hc:min-h-0 hc:flex-auto", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:justify-between hc:space-x-5", children: [
      /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-2 hc:flex-col", children: [
        /* @__PURE__ */ U("div", { className: "hc:my-5 hc:flex hc:text-sm hc:font-light hc:uppercase", children: [
          /* @__PURE__ */ v("div", { className: "hc:flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ v("div", { className: "hc:flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ v("div", { className: "hc:flex-1 hc:overflow-y-auto", children: m.map((S, R) => {
          const _ = c.find(
            (N) => N.csvColumnName === S
          ) ?? null;
          return /* @__PURE__ */ v(
            Hm,
            {
              csvHeader: S,
              currentMapping: _,
              setMapping: (N) => {
                const F = _m(
                  c,
                  S,
                  N
                );
                e(F);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(S);
              }
            },
            R
          );
        }) })
      ] }),
      /* @__PURE__ */ v("div", { className: "hc:bg-hello-csv-muted hc:hidden hc:flex-1 hc:overflow-y-auto hc:sm:block", children: /* @__PURE__ */ v(
        Vm,
        {
          examples: w,
          csvHeader: l ?? ""
        }
      ) })
    ] }) }),
    !g && /* @__PURE__ */ v("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ v(El, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ v("div", { className: "hc:mt-auto hc:flex-none", children: /* @__PURE__ */ U("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ v(
        De,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: p,
          children: s("mapper.back")
        }
      ),
      /* @__PURE__ */ v(
        De,
        {
          onClick: x,
          disabled: !g || p,
          children: /* @__PURE__ */ U("div", { className: "hc:flex hc:items-center", children: [
            p && /* @__PURE__ */ U(ut, { children: [
              /* @__PURE__ */ v(Rl, { color: "light" }),
              /* @__PURE__ */ v("div", { className: "hc:mr-2" })
            ] }),
            s("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var pg = { NODE_ENV: "production" };
function ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: ct(n, r[e])
    }));
  };
}
function ar(e) {
  return e instanceof Function;
}
function mg(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function gg(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function se(e, t, n) {
  let r = [], o;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const l = e(i);
    if (!(l.length !== r.length || l.some((u, f) => r[f] !== u)))
      return o;
    r = l;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, f = Math.round((Date.now() - c) * 100) / 100, m = f / 16, d = (g, w) => {
        for (g = String(g); g.length < w; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${d(f, 5)} /${d(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * m, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function le(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: pg.NODE_ENV === "development",
    onChange: r
  };
}
function vg(e, t, n, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: se(() => [e, n, t, i], (s, l, a, c) => ({
      table: s,
      column: l,
      row: a,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), le(e.options, "debugCells"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function wg(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let c = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
  if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (m) => {
    let d = m;
    for (const w of a.split(".")) {
      var g;
      d = (g = d) == null ? void 0 : g[w];
    }
    return d;
  } : u = (m) => m[l.accessorKey]), !c)
    throw new Error();
  let f = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: se(() => [!0], () => {
      var m;
      return [f, ...(m = f.columns) == null ? void 0 : m.flatMap((d) => d.getFlatColumns())];
    }, le(e.options, "debugColumns")),
    getLeafColumns: se(() => [e._getOrderColumnsFn()], (m) => {
      var d;
      if ((d = f.columns) != null && d.length) {
        let g = f.columns.flatMap((w) => w.getLeafColumns());
        return m(g);
      }
      return [f];
    }, le(e.options, "debugColumns"))
  };
  for (const m of e._features)
    m.createColumn == null || m.createColumn(f, e);
  return f;
}
const Ee = "debugHeaders";
function xi(e, t, n) {
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
const yg = {
  createTable: (e) => {
    e.getHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var i, s;
      const l = (i = r == null ? void 0 : r.map((f) => n.find((m) => m.id === f)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((f) => n.find((m) => m.id === f)).filter(Boolean)) != null ? s : [], c = n.filter((f) => !(r != null && r.includes(f.id)) && !(o != null && o.includes(f.id)));
      return Cn(t, [...l, ...c, ...a], e);
    }, le(e.options, Ee)), e.getCenterHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Cn(t, n, e, "center")), le(e.options, Ee)), e.getLeftHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Cn(t, i, e, "left");
    }, le(e.options, Ee)), e.getRightHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Cn(t, i, e, "right");
    }, le(e.options, Ee)), e.getFooterGroups = se(() => [e.getHeaderGroups()], (t) => [...t].reverse(), le(e.options, Ee)), e.getLeftFooterGroups = se(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), le(e.options, Ee)), e.getCenterFooterGroups = se(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), le(e.options, Ee)), e.getRightFooterGroups = se(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), le(e.options, Ee)), e.getFlatHeaders = se(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), le(e.options, Ee)), e.getLeftFlatHeaders = se(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), le(e.options, Ee)), e.getCenterFlatHeaders = se(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), le(e.options, Ee)), e.getRightFlatHeaders = se(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), le(e.options, Ee)), e.getCenterLeafHeaders = se(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), le(e.options, Ee)), e.getLeftLeafHeaders = se(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), le(e.options, Ee)), e.getRightLeafHeaders = se(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), le(e.options, Ee)), e.getLeafHeaders = se(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, i, s, l, a, c;
      return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [], ...(a = (c = r[0]) == null ? void 0 : c.headers) != null ? a : []].map((u) => u.getLeafHeaders()).flat();
    }, le(e.options, Ee));
  }
};
function Cn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(m, d) {
    d === void 0 && (d = 1), s = Math.max(s, d), m.filter((g) => g.getIsVisible()).forEach((g) => {
      var w;
      (w = g.columns) != null && w.length && l(g.columns, d + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const c = (m, d) => {
    const g = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, w = [];
    m.forEach((p) => {
      const C = [...w].reverse()[0], x = p.column.depth === g.depth;
      let S, R = !1;
      if (x && p.column.parent ? S = p.column.parent : (S = p.column, R = !0), C && (C == null ? void 0 : C.column) === S)
        C.subHeaders.push(p);
      else {
        const _ = xi(n, S, {
          id: [r, d, S.id, p == null ? void 0 : p.id].filter(Boolean).join("_"),
          isPlaceholder: R,
          placeholderId: R ? `${w.filter((N) => N.column === S).length}` : void 0,
          depth: d,
          index: w.length
        });
        _.subHeaders.push(p), w.push(_);
      }
      g.headers.push(p), p.headerGroup = g;
    }), a.push(g), d > 0 && c(w, d - 1);
  }, u = t.map((m, d) => xi(n, m, {
    depth: s,
    index: d
  }));
  c(u, s - 1), a.reverse();
  const f = (m) => m.filter((g) => g.column.getIsVisible()).map((g) => {
    let w = 0, p = 0, C = [0];
    g.subHeaders && g.subHeaders.length ? (C = [], f(g.subHeaders).forEach((S) => {
      let {
        colSpan: R,
        rowSpan: _
      } = S;
      w += R, C.push(_);
    })) : w = 1;
    const x = Math.min(...C);
    return p = p + x, g.colSpan = w, g.rowSpan = p, {
      colSpan: w,
      rowSpan: p
    };
  });
  return f((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const bg = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => gg(l.subRows, (a) => a.subRows),
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
    getAllCells: se(() => [e.getAllLeafColumns()], (a) => a.map((c) => vg(e, l, c, c.id)), le(e.options, "debugRows")),
    _getAllCellsByColumnId: se(() => [l.getAllCells()], (a) => a.reduce((c, u) => (c[u.column.id] = u, c), {}), le(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(l, e);
  }
  return l;
}, xg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Ul = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Ul.autoRemove = (e) => Ve(e);
const Gl = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
Gl.autoRemove = (e) => Ve(e);
const Wl = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Wl.autoRemove = (e) => Ve(e);
const ql = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ql.autoRemove = (e) => Ve(e);
const Yl = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Yl.autoRemove = (e) => Ve(e) || !(e != null && e.length);
const Kl = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Kl.autoRemove = (e) => Ve(e) || !(e != null && e.length);
const Zl = (e, t, n) => e.getValue(t) === n;
Zl.autoRemove = (e) => Ve(e);
const Xl = (e, t, n) => e.getValue(t) == n;
Xl.autoRemove = (e) => Ve(e);
const Io = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Io.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const l = i;
    i = s, s = l;
  }
  return [i, s];
};
Io.autoRemove = (e) => Ve(e) || Ve(e[0]) && Ve(e[1]);
const Qe = {
  includesString: Ul,
  includesStringSensitive: Gl,
  equalsString: Wl,
  arrIncludes: ql,
  arrIncludesAll: Yl,
  arrIncludesSome: Kl,
  equals: Zl,
  weakEquals: Xl,
  inNumberRange: Io
};
function Ve(e) {
  return e == null || e === "";
}
const Sg = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Pe("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? Qe.includesString : typeof r == "number" ? Qe.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Qe.equals : Array.isArray(r) ? Qe.arrIncludes : Qe.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return ar(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Qe[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = ct(n, i ? i.value : void 0);
        if (Si(o, s, e)) {
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
        return (i = ct(t, o)) == null ? void 0 : i.filter((s) => {
          const l = n.find((a) => a.id === s.id);
          if (l) {
            const a = l.getFilterFn();
            if (Si(a, s.value, l))
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
function Si(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Cg = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Eg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Rg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, $g = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Mg = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Tg = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!mg(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Og = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ig = (e, t) => new Set(t.map((n) => n.getValue(e))).size, _g = (e, t) => t.length, xr = {
  sum: Cg,
  min: Eg,
  max: Rg,
  extent: $g,
  mean: Mg,
  median: Tg,
  unique: Og,
  uniqueCount: Ig,
  count: _g
}, Ag = {
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
    onGroupingChange: Pe("grouping", e),
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
        return xr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return xr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return ar(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : xr[e.columnDef.aggregationFn];
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
function Fg(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Dg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Pe("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = se((n) => [tn(t, n)], (n) => n.findIndex((r) => r.id === e.id), le(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = tn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = tn(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = se(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
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
      return Fg(i, n, r);
    }, le(e.options, "debugTable"));
  }
}, Sr = () => ({
  left: [],
  right: []
}), Pg = {
  getInitialState: (e) => ({
    columnPinning: Sr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Pe("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var i, s;
        if (n === "right") {
          var l, a;
          return {
            left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((f) => !(r != null && r.includes(f))),
            right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((f) => !(r != null && r.includes(f))), ...r]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((f) => !(r != null && r.includes(f))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((f) => !(r != null && r.includes(f)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((f) => !(r != null && r.includes(f))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((f) => !(r != null && r.includes(f)))
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
    e.getCenterVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, le(t.options, "debugRows")), e.getLeftVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), le(t.options, "debugRows")), e.getRightVisibleCells = se(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), le(t.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? Sr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Sr());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), le(e.options, "debugColumns")), e.getRightLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), le(e.options, "debugColumns")), e.getCenterLeafColumns = se(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((i) => !o.includes(i.id));
    }, le(e.options, "debugColumns"));
  }
}, En = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Cr = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), kg = {
  getDefaultColumnDef: () => En,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Cr(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Pe("columnSizing", e),
    onColumnSizingInfoChange: Pe("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : En.minSize, (r = i ?? e.columnDef.size) != null ? r : En.size), (o = e.columnDef.maxSize) != null ? o : En.maxSize);
    }, e.getStart = se((n) => [n, tn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), le(t.options, "debugColumns")), e.getAfter = se((n) => [n, tn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), le(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Er(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[r.id, r.getSize()]], a = Er(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (C, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((S) => {
            var R, _;
            const N = t.options.columnResizeDirection === "rtl" ? -1 : 1, F = (x - ((R = S == null ? void 0 : S.startOffset) != null ? R : 0)) * N, b = Math.max(F / ((_ = S == null ? void 0 : S.startSize) != null ? _ : 0), -0.999999);
            return S.columnSizingStart.forEach((h) => {
              let [y, E] = h;
              c[y] = Math.round(Math.max(E + E * b, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: F,
              deltaPercentage: b
            };
          }), (t.options.columnResizeMode === "onChange" || C === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, f = (C) => u("move", C), m = (C) => {
          u("end", C), t.setColumnSizingInfo((x) => ({
            ...x,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, d = n || typeof document < "u" ? document : null, g = {
          moveHandler: (C) => f(C.clientX),
          upHandler: (C) => {
            d == null || d.removeEventListener("mousemove", g.moveHandler), d == null || d.removeEventListener("mouseup", g.upHandler), m(C.clientX);
          }
        }, w = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), f(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var x;
            d == null || d.removeEventListener("touchmove", w.moveHandler), d == null || d.removeEventListener("touchend", w.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), m((x = C.touches[0]) == null ? void 0 : x.clientX);
          }
        }, p = Ng() ? {
          passive: !1
        } : !1;
        Er(i) ? (d == null || d.addEventListener("touchmove", w.moveHandler, p), d == null || d.addEventListener("touchend", w.upHandler, p)) : (d == null || d.addEventListener("mousemove", g.moveHandler, p), d == null || d.addEventListener("mouseup", g.upHandler, p)), t.setColumnSizingInfo((C) => ({
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
      e.setColumnSizingInfo(t ? Cr() : (n = e.initialState.columnSizingInfo) != null ? n : Cr());
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
let Rn = null;
function Ng() {
  if (typeof Rn == "boolean") return Rn;
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
  return Rn = e, Rn;
}
function Er(e) {
  return e.type === "touchstart";
}
const Lg = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Pe("columnVisibility", e)
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
    e._getAllVisibleCells = se(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), le(t.options, "debugRows")), e.getVisibleCells = se(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], le(t.options, "debugRows"));
  },
  createTable: (e) => {
    const t = (n, r) => se(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), le(e.options, "debugColumns"));
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
function tn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Vg = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Hg = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Pe("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => Qe.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return ar(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Qe[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, zg = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Pe("expanded", e),
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
}, Qr = 0, eo = 10, Rr = () => ({
  pageIndex: Qr,
  pageSize: eo
}), Bg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Rr(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Pe("pagination", e)
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
      const o = (i) => ct(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Rr() : (o = e.initialState.pagination) != null ? o : Rr());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = ct(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? Qr : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Qr);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? eo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : eo);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, ct(r, o.pageSize)), s = o.pageSize * o.pageIndex, l = Math.floor(s / i);
        return {
          ...o,
          pageIndex: l,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = ct(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = se(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, le(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, $r = () => ({
  top: [],
  bottom: []
}), jg = {
  getInitialState: (e) => ({
    rowPinning: $r(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Pe("rowPinning", e)
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
          var f, m;
          return {
            top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((w) => !(l != null && l.has(w))),
            bottom: [...((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)]
          };
        }
        if (n === "top") {
          var d, g;
          return {
            top: [...((d = a == null ? void 0 : a.top) != null ? d : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)],
            bottom: ((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((w) => !(l != null && l.has(w)))
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
      return e.setRowPinning(t ? $r() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : $r());
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
    }, e.getTopRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), le(e.options, "debugRows")), e.getBottomRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), le(e.options, "debugRows")), e.getCenterRows = se(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((i) => !o.has(i.id));
    }, le(e.options, "debugRows"));
  }
}, Ug = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Pe("rowSelection", e),
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
        to(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = se(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Mr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, le(e.options, "debugTable")), e.getFilteredSelectedRowModel = se(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Mr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, le(e.options, "debugTable")), e.getGroupedSelectedRowModel = se(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Mr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, le(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
        return to(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return _o(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return no(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return no(e, n) === "all";
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
}, to = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => to(e, l.id, n, r, o));
};
function Mr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var c;
      const u = _o(a, n);
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
function _o(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function no(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (_o(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = no(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const ro = /([0-9]+)/gm, Gg = (e, t, n) => Jl(pt(e.getValue(n)).toLowerCase(), pt(t.getValue(n)).toLowerCase()), Wg = (e, t, n) => Jl(pt(e.getValue(n)), pt(t.getValue(n))), qg = (e, t, n) => Ao(pt(e.getValue(n)).toLowerCase(), pt(t.getValue(n)).toLowerCase()), Yg = (e, t, n) => Ao(pt(e.getValue(n)), pt(t.getValue(n))), Kg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Zg = (e, t, n) => Ao(e.getValue(n), t.getValue(n));
function Ao(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function pt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Jl(e, t) {
  const n = e.split(ro).filter(Boolean), r = t.split(ro).filter(Boolean);
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
const Kt = {
  alphanumeric: Gg,
  alphanumericCaseSensitive: Wg,
  text: qg,
  textCaseSensitive: Yg,
  datetime: Kg,
  basic: Zg
}, Xg = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Pe("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Kt.datetime;
        if (typeof i == "string" && (r = !0, i.split(ro).length > 1))
          return Kt.alphanumeric;
      }
      return r ? Kt.text : Kt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return ar(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Kt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((d) => d.id === e.id), a = s == null ? void 0 : s.findIndex((d) => d.id === e.id);
        let c = [], u, f = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var m;
          c = [...s, {
            id: e.id,
            desc: f
          }], c.splice(0, c.length - ((m = t.options.maxMultiSortColCount) != null ? m : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = s.map((d) => d.id === e.id ? {
          ...d,
          desc: f
        } : d) : u === "remove" ? c = s.filter((d) => d.id !== e.id) : c = [{
          id: e.id,
          desc: f
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
}, Jg = [
  yg,
  Lg,
  Dg,
  Pg,
  xg,
  Sg,
  Vg,
  //depends on ColumnFaceting
  Hg,
  //depends on ColumnFiltering
  Xg,
  Ag,
  //depends on RowSorting
  zg,
  Bg,
  jg,
  Ug,
  kg
];
function Qg(e) {
  var t, n;
  const r = [...Jg, ...(t = e._features) != null ? t : []];
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
  const f = {
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
      const d = ct(m, o.options);
      o.options = s(d);
    },
    getState: () => o.options.state,
    setState: (m) => {
      o.options.onStateChange == null || o.options.onStateChange(m);
    },
    _getRowId: (m, d, g) => {
      var w;
      return (w = o.options.getRowId == null ? void 0 : o.options.getRowId(m, d, g)) != null ? w : `${g ? [g.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (m, d) => {
      let g = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[m];
      if (!g && (g = o.getCoreRowModel().rowsById[m], !g))
        throw new Error();
      return g;
    },
    _getDefaultColumnDef: se(() => [o.options.defaultColumn], (m) => {
      var d;
      return m = (d = m) != null ? d : {}, {
        header: (g) => {
          const w = g.header.column.columnDef;
          return w.accessorKey ? w.accessorKey : w.accessorFn ? w.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var w, p;
          return (w = (p = g.renderValue()) == null || p.toString == null ? void 0 : p.toString()) != null ? w : null;
        },
        ...o._features.reduce((g, w) => Object.assign(g, w.getDefaultColumnDef == null ? void 0 : w.getDefaultColumnDef()), {}),
        ...m
      };
    }, le(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: se(() => [o._getColumnDefs()], (m) => {
      const d = function(g, w, p) {
        return p === void 0 && (p = 0), g.map((C) => {
          const x = wg(o, C, p, w), S = C;
          return x.columns = S.columns ? d(S.columns, x, p + 1) : [], x;
        });
      };
      return d(m);
    }, le(e, "debugColumns")),
    getAllFlatColumns: se(() => [o.getAllColumns()], (m) => m.flatMap((d) => d.getFlatColumns()), le(e, "debugColumns")),
    _getAllFlatColumnsById: se(() => [o.getAllFlatColumns()], (m) => m.reduce((d, g) => (d[g.id] = g, d), {}), le(e, "debugColumns")),
    getAllLeafColumns: se(() => [o.getAllColumns(), o._getOrderColumnsFn()], (m, d) => {
      let g = m.flatMap((w) => w.getLeafColumns());
      return d(g);
    }, le(e, "debugColumns")),
    getColumn: (m) => o._getAllFlatColumnsById()[m]
  };
  Object.assign(o, f);
  for (let m = 0; m < o._features.length; m++) {
    const d = o._features[m];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function ev() {
  return (e) => se(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let c = 0; c < o.length; c++) {
        const u = bg(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
          var a;
          u.originalSubRows = e.options.getSubRows(o[c], c), (a = u.originalSubRows) != null && a.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return l;
    };
    return n.rows = r(t), n;
  }, le(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function tv() {
  return (e) => se(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
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
      return c.sort((u, f) => {
        for (let d = 0; d < i.length; d += 1) {
          var m;
          const g = i[d], w = s[g.id], p = w.sortUndefined, C = (m = g == null ? void 0 : g.desc) != null ? m : !1;
          let x = 0;
          if (p) {
            const S = u.getValue(g.id), R = f.getValue(g.id), _ = S === void 0, N = R === void 0;
            if (_ || N) {
              if (p === "first") return _ ? -1 : 1;
              if (p === "last") return _ ? 1 : -1;
              x = _ && N ? 0 : _ ? p : -p;
            }
          }
          if (x === 0 && (x = w.sortingFn(u, f, g.id)), x !== 0)
            return C && (x *= -1), w.invertSorting && (x *= -1), x;
        }
        return u.index - f.index;
      }), c.forEach((u) => {
        var f;
        o.push(u), (f = u.subRows) != null && f.length && (u.subRows = l(u.subRows));
      }), c;
    };
    return {
      rows: l(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, le(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Ci(e, t) {
  return e ? nv(e) ? /* @__PURE__ */ $.createElement(e, t) : e : null;
}
function nv(e) {
  return rv(e) || typeof e == "function" || ov(e);
}
function rv(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function ov(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function iv(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = $.useState(() => ({
    current: Qg(t)
  })), [r, o] = $.useState(() => n.current.initialState);
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
const sv = 500, Ei = 10;
function lv(e, { disabled: t = !1 } = {}) {
  const n = q(null), r = q(0), o = q(0), i = q(!1), s = ie(
    (c) => {
      if (t) return;
      const u = c.touches[0];
      r.current = u.clientX, o.current = u.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, sv);
    },
    [e, t]
  ), l = ie(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ie(
    (c) => {
      const u = c.touches[0], f = Math.abs(u.clientX - r.current), m = Math.abs(u.clientY - o.current);
      (f > Ei || m > Ei) && (i.current = !0, l());
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
const Ql = ve(null);
function av({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ v(Ql.Provider, { value: e, children: t });
}
function ea() {
  const e = he(Ql);
  if (!e)
    throw new Error(
      "useGridSelectionContext must be used within a GridSelectionProvider"
    );
  return e;
}
function Ri(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Le(e, t) {
  return {
    row: Ri(e.row, 0, Math.max(0, t.rowCount - 1)),
    col: Ri(e.col, 0, Math.max(0, t.colCount - 1))
  };
}
const ta = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 }
};
function In(e, t, n) {
  const r = ta[t];
  return Le(
    { row: e.row + r.row, col: e.col + r.col },
    n
  );
}
function cv(e, t) {
  const n = e ?? t;
  return {
    top: Math.min(n.row, t.row),
    left: Math.min(n.col, t.col),
    bottom: Math.max(n.row, t.row),
    right: Math.max(n.col, t.col)
  };
}
function uv(e, t) {
  return e.row >= t.top && e.row <= t.bottom && e.col >= t.left && e.col <= t.right;
}
function oo(e, t) {
  return e.row >= 0 && e.row < t.rowCount && e.col >= 0 && e.col < t.colCount;
}
function dv(e, t, n, r) {
  const o = ta[t], i = (u, f) => oo({ row: u, col: f }, n), s = { row: e.row + o.row, col: e.col + o.col };
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
function fv(e, t) {
  return Math.max(1, Math.floor(e / t));
}
function hv(e) {
  return e.type === "boolean" || e.type === "enum" || e.type === "reference";
}
function $i(e) {
  return hv(e) || or(e);
}
function pv({
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
  clearRowsSelection: f,
  errorsText: m,
  enumLabelDict: d
}) {
  const { t: g } = me(), { availableActions: w } = Ne(), p = ea(), C = p.isEditing(e), x = p.isActive(e), S = p.isSelected(e), R = q(null), _ = q(null), N = q(!1), F = To(l) || !w.includes("editRows");
  function b(B) {
    F || p.startEdit(e, B);
  }
  function h() {
    p.stopEditing();
  }
  de(() => {
    C && (N.current = !1, f(), R.current && R.current.focus());
  }, [C]);
  const { displayValue: y, valueEmpty: E } = _l(
    s,
    l,
    a,
    d
  ), T = lv(
    () => {
      F || b("preserve");
    },
    { disabled: F }
  ), L = m ? "hc:bg-hello-csv-danger-extra-light" : F ? "hc:bg-hello-csv-muted" : "", A = x ? "hc:z-1" : "";
  function k(B) {
    N.current = !0, c(Oo(l, String(B ?? ""))), h();
  }
  function M(B) {
    var G;
    if (C) {
      if (B.key === "Escape") {
        N.current = !0, h(), B.preventDefault(), B.stopPropagation();
        return;
      }
      if (!$i(l) && (B.key === "Enter" || B.key === "Tab")) {
        B.preventDefault(), B.stopPropagation(), k(((G = R.current) == null ? void 0 : G.value) ?? "");
        const te = B.key === "Tab" ? B.shiftKey ? "left" : "right" : B.shiftKey ? "up" : "down";
        p.setActive(In(e, te, t));
      }
    }
  }
  function O(B) {
    C || B.button !== 0 || (B.shiftKey ? p.extendTo(e) : p.beginDrag(e), B.preventDefault());
  }
  function I() {
    C || p.dragTo(e);
  }
  function D(B) {
    var te;
    if (!C || !$i(l)) return;
    const G = B.relatedTarget;
    G && ((te = _.current) != null && te.contains(G)) || G instanceof Element && G.closest(`[${ll}]`) || h();
  }
  function z(B) {
    C || (B.detail > 1 ? b("preserve") : B.shiftKey ? p.extendTo(e) : p.setActive(e));
  }
  function H(B, { close: G = !0 } = {}) {
    N.current = !0, c(B), G && h();
  }
  const V = (() => {
    const B = p.state.editInitialValue;
    return B && typeof B == "object" && "char" in B ? B.char : void 0;
  })(), P = q(a);
  C || (P.current = a);
  const ee = V ?? P.current, X = {
    ref: _,
    role: "gridcell",
    "aria-colindex": r,
    "aria-selected": S,
    "data-cell-row": e.row,
    "data-cell-col": e.col,
    tabIndex: x ? 0 : -1,
    onKeyDown: M,
    onClick: z,
    onMouseDown: O,
    onMouseEnter: I,
    // focusout (bubbles) rather than blur (doesn't) so we catch the combobox
    // input losing focus to somewhere outside the cell.
    onFocusOut: D,
    className: `hc:relative hc:flex hc:h-full hc:w-full hc:items-stretch hc:outline-none ${A}`
  }, ce = x ? /* @__PURE__ */ v("div", { className: "hc:ring-hello-csv-primary hc:pointer-events-none hc:absolute hc:inset-0 hc:ring-2 hc:ring-inset" }) : S ? /* @__PURE__ */ v("div", { className: "hc:bg-hello-csv-primary/20 hc:pointer-events-none hc:absolute hc:inset-0" }) : null;
  function oe() {
    if (l.type === "boolean") {
      const B = [!0, !1].map((G) => {
        var te, Y;
        return {
          label: G ? ((te = l.typeArguments) == null ? void 0 : te.trueLabel) ?? ul : ((Y = l.typeArguments) == null ? void 0 : Y.falseLabel) ?? dl,
          value: G
        };
      });
      return /* @__PURE__ */ v(
        Et,
        {
          autoFocus: !0,
          immediate: !0,
          options: B,
          value: a,
          onChange: (G) => H(G ?? "")
        }
      );
    }
    if (l.type === "reference") {
      const B = Il(
        l,
        u
      ), G = xl(l, d), te = B.map((Y) => ({
        label: String(Xr(G, Y)),
        value: Y
      }));
      return /* @__PURE__ */ v(
        Et,
        {
          autoFocus: !0,
          immediate: !0,
          searchable: !0,
          searchInputAsFilter: !0,
          clearable: !0,
          options: te,
          value: a,
          onChange: (Y) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            H(Y ?? void 0)
          )
        }
      );
    }
    if (l.type === "enum") {
      const { values: B, multiple: G } = l.typeArguments;
      if (G) {
        const te = hm(
          a,
          B,
          (Y) => g("components.select.invalidOption", { value: Y }),
          /* @__PURE__ */ v(
            fp,
            {
              className: "hc:text-hello-csv-danger hc:mr-2 hc:h-5 hc:w-5 hc:shrink-0",
              "aria-hidden": "true"
            }
          )
        );
        return /* @__PURE__ */ v(
          Et,
          {
            autoFocus: !0,
            immediate: !0,
            searchable: !0,
            searchInputAsFilter: !0,
            clearable: !0,
            multiple: !0,
            options: te,
            value: a,
            onChange: (Y) => H(Y ?? [], { close: !1 })
          }
        );
      }
      return /* @__PURE__ */ v(
        Et,
        {
          autoFocus: !0,
          immediate: !0,
          searchable: !0,
          searchInputAsFilter: !0,
          clearable: !0,
          options: B,
          value: a,
          onChange: (te) => (
            // null (deselect) -> undefined so the field is unset, not empty.
            H(
              te ?? void 0
            )
          )
        }
      );
    }
    if (or(l)) {
      const B = l.typeArguments ?? {};
      return /* @__PURE__ */ v(
        Pp,
        {
          mode: l.type,
          value: typeof a == "string" ? a : "",
          seedText: V,
          ...B,
          "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
          onCommit: (G) => k(G)
        }
      );
    }
    return /* @__PURE__ */ v(
      hl,
      {
        "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
        type: l.type === "number" ? "number" : "text",
        classes: "hc:block hc:w-full",
        value: ee,
        onBlur: (B) => {
          N.current || k(B);
        },
        ref: R
      }
    );
  }
  return C ? /* @__PURE__ */ v(
    "td",
    {
      role: "presentation",
      className: o,
      style: { width: n },
      children: /* @__PURE__ */ v("div", { ...X, children: /* @__PURE__ */ v("div", { className: "hc:w-full", children: oe() }) })
    }
  ) : /* @__PURE__ */ v("td", { role: "presentation", className: o, style: { width: n }, children: /* @__PURE__ */ v(
    Vp,
    {
      focusable: !1,
      variant: m ? "error" : "info",
      placement: e.row > 0 && e.row >= t.rowCount - 1 ? "top" : "bottom",
      tooltipText: m || (F ? g("sheet.readOnly") : ""),
      children: /* @__PURE__ */ U("div", { ...X, children: [
        /* @__PURE__ */ v(
          "div",
          {
            "aria-label": `row ${Number(i) + 1} ${l.label} ${y}`,
            ...T,
            className: `hc:h-full hc:w-full hc:py-4 hc:pr-3 hc:pl-4 ${L} hc:touch-manipulation hc:truncate hc:overflow-hidden hc:whitespace-nowrap`,
            title: E ? void 0 : `${y}`,
            children: l.customRender ? l.customRender(a, y) : y
          }
        ),
        ce
      ] })
    }
  ) });
}
function mv({
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
  const { t: u } = me(), f = ea();
  function m(h, y) {
    return r.filter(
      (E) => E.columnId === h && E.rowIndex === y
    );
  }
  const d = "hc:bg-hello-csv-muted hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:text-hello-csv-text hc:whitespace-nowrap hc:border-y hc:border-hello-csv-border-strong", g = "hc:text-sm hc:font-medium hc:whitespace-nowrap hc:text-hello-csv-text hc:border-b hc:border-hello-csv-border-strong", w = e.getRowModel().rows, p = os({
    count: w.length,
    getScrollElement: () => s.current,
    estimateSize: () => al,
    measureElement: (h) => h == null ? void 0 : h.getBoundingClientRect().height,
    overscan: 20
  }), C = f.state.active, x = f.state.editing;
  de(() => {
    if (!C || x) return;
    p.scrollToIndex(C.row, { align: "auto" });
    let h = 0, y = 0;
    const E = () => {
      const T = s.current, L = T == null ? void 0 : T.querySelector(
        `[data-cell-row="${C.row}"][data-cell-col="${C.col}"]`
      );
      L ? (document.activeElement !== L && L.focus({ preventScroll: !0 }), S(T, L)) : y++ < 5 && (h = requestAnimationFrame(E));
    };
    return h = requestAnimationFrame(E), () => cancelAnimationFrame(h);
  }, [C == null ? void 0 : C.row, C == null ? void 0 : C.col, x == null ? void 0 : x.row, x == null ? void 0 : x.col]);
  function S(h, y) {
    const E = h.getBoundingClientRect(), T = y.getBoundingClientRect(), L = c ? cl : 0;
    T.left < E.left + L ? h.scrollLeft -= E.left + L - T.left : T.right > E.right && (h.scrollLeft += T.right - E.right);
  }
  const R = p.getVirtualItems().map((h) => ({
    row: w[h.index],
    index: h.index,
    start: h.start,
    end: h.end
  })), [_, N] = R.length > 0 ? [
    Math.max(
      0,
      R[0].start - p.options.scrollMargin
    ),
    Math.max(
      0,
      p.getTotalSize() - R[R.length - 1].end
    )
  ] : [0, 0], F = ie(
    (h) => {
      h && p.measureElement(h);
    },
    [p]
  ), b = t.columns.length;
  return /* @__PURE__ */ U(
    "table",
    {
      className: "hc:w-full hc:table-fixed hc:border-separate hc:border-spacing-0",
      "aria-label": u("sheet.sheetTitle"),
      role: "grid",
      "aria-multiselectable": "true",
      "aria-rowcount": w.length + 1,
      "aria-colcount": b + (c ? 1 : 0),
      children: [
        /* @__PURE__ */ v("thead", { className: "hc:bg-hello-csv-muted hc:sticky hc:top-0 hc:z-10", children: e.getHeaderGroups().map((h) => /* @__PURE__ */ v("tr", { role: "row", "aria-rowindex": 1, children: h.headers.map((y, E) => /* @__PURE__ */ v(
          "th",
          {
            role: "columnheader",
            "aria-colindex": E + 1,
            "aria-sort": y.column.getIsSorted() === "asc" ? "ascending" : y.column.getIsSorted() === "desc" ? "descending" : y.column.getCanSort() ? "none" : void 0,
            className: y.column.id === Yr ? `${d} hc:sticky hc:left-0 hc:z-20` : `hc:relative hc:z-10 ${d}`,
            colSpan: y.colSpan,
            style: { width: y.getSize() },
            children: /* @__PURE__ */ U(
              "div",
              {
                className: `hc:flex hc:w-full ${y.column.getCanSort() ? "hc:cursor-pointer hc:select-none" : ""}`,
                onClick: y.column.getToggleSortingHandler(),
                children: [
                  y.isPlaceholder ? null : /* @__PURE__ */ v("div", { children: Ci(
                    y.column.columnDef.header,
                    y.getContext()
                  ) }, `header-${h.id}-${y.id}`),
                  /* @__PURE__ */ v(
                    "span",
                    {
                      className: "hc:bg-hello-csv-text-muted hc:text-hello-csv-surface hc:ml-2 hc:flex-none hc:rounded-sm",
                      children: {
                        asc: /* @__PURE__ */ v(
                          ap,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        ),
                        desc: /* @__PURE__ */ v(
                          ep,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        )
                      }[y.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${h.id}-${y.id}`
                  ),
                  y.column.getCanResize() && /* @__PURE__ */ v(
                    "div",
                    {
                      onMouseDown: y.getResizeHandler(),
                      onTouchStart: y.getResizeHandler(),
                      className: "hc:bg-hello-csv-border hc:absolute hc:top-0 hc:right-0 hc:h-full hc:w-0.5 hc:cursor-col-resize hc:touch-none hc:select-none"
                    },
                    `resize-icon-${h.id}-${y.id}`
                  )
                ]
              }
            )
          },
          y.id
        )) }, h.id)) }),
        /* @__PURE__ */ U(
          "tbody",
          {
            className: "hc:divide-hello-csv-border hc:divide-y",
            style: {
              height: `${p.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ v("tr", { role: "presentation", children: /* @__PURE__ */ v("td", { style: { height: _ } }) }),
              R.map(({ row: h, index: y }) => /* @__PURE__ */ v(
                "tr",
                {
                  role: "row",
                  "aria-rowindex": y + 2,
                  "data-index": y,
                  ref: F,
                  children: h.getVisibleCells().map((E, T) => {
                    if (E.column.id === Yr)
                      return /* @__PURE__ */ v(
                        "td",
                        {
                          role: "gridcell",
                          "aria-colindex": 1,
                          "aria-label": `Select row ${Number(h.id) + 1}`,
                          className: `hc:bg-hello-csv-muted ${g} hc:sticky hc:left-0 hc:z-6 hc:pr-3 hc:pl-4`,
                          style: { width: E.column.getSize() },
                          children: Ci(E.column.columnDef.cell, E.getContext())
                        },
                        E.id
                      );
                    const L = T - (c ? 1 : 0), A = t.columns[L].id, k = Mo(
                      n,
                      t.id,
                      h.original
                    ), M = m(A, k).map((O) => u(O.message)).join(", ");
                    return /* @__PURE__ */ v(
                      pv,
                      {
                        coord: { row: y, col: L },
                        gridDims: a,
                        widthPx: E.column.getSize(),
                        ariaColIndex: L + (c ? 2 : 1),
                        tdClassName: g,
                        rowId: h.id,
                        sheetDefinition: t,
                        columnDefinition: t.columns.find((O) => O.id === A),
                        allData: n,
                        value: E.getValue(),
                        onUpdated: (O) => o(k, A, O),
                        clearRowsSelection: () => i([]),
                        errorsText: M,
                        enumLabelDict: l
                      },
                      E.id
                    );
                  })
                },
                h.id
              )),
              /* @__PURE__ */ v("tr", { role: "presentation", children: /* @__PURE__ */ v("td", { style: { height: N } }) })
            ]
          }
        )
      ]
    }
  );
}
function gv({ column: e }) {
  const { t } = me(), n = To(e);
  return /* @__PURE__ */ U(
    "div",
    {
      className: "hc:flex hc:items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ U("div", { className: "hc:relative hc:mr-3 hc:h-5 hc:w-5", children: [
          /* @__PURE__ */ v(nl, { className: "hc:text-hello-csv-text-subtle hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" }),
          /* @__PURE__ */ v(Jf, { className: "hc:text-hello-csv-text-muted hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" })
        ] }),
        e.label,
        " ",
        sr(e) && "*"
      ]
    }
  );
}
function vv({
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
  addEmptyRow: f,
  sheetValidationErrors: m,
  rowValidationSummary: d,
  resetState: g,
  undo: w,
  redo: p,
  canUndo: C,
  canRedo: x,
  enumLabelDict: S
}) {
  const { csvDownloadMode: R, availableActions: _ } = Ne(), { t: N } = me(), { processingInProgress: F } = Ze(), [b, h] = re(!1), [y, E] = re(!1), T = "hc:pointer-events-none hc:cursor-not-allowed hc:opacity-50";
  function L(O) {
    const I = e.columns.find(
      (z) => z.id === O
    ), D = gi(
      m.filter((z) => z.columnId === O).map((z) => z.rowIndex)
    ).length;
    return {
      label: `${(I == null ? void 0 : I.label) || O} (${D})`,
      value: O
    };
  }
  const A = gi(
    m.map((O) => O.columnId)
  ).map((O) => L(O));
  a != null && A.find((O) => O.value === a) == null && A.push(L(a));
  const k = [
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
  function M() {
    u({ rows: n, sheetId: e.id }), r([]);
  }
  return /* @__PURE__ */ U("div", { className: "hc:my-5 hc:flex hc:items-center", children: [
    /* @__PURE__ */ U("div", { className: "hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5", children: [
      /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(zp, { activeButton: o, buttons: k }) }),
      _.includes("search") && /* @__PURE__ */ v(
        hl,
        {
          clearable: !0,
          value: s,
          onChange: (O) => l(O),
          placeholder: N("sheet.search"),
          iconBuilder: (O) => /* @__PURE__ */ v(Zf, { ...O })
        }
      ),
      _.includes("undoRedo") && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(tt, { tooltipText: N("sheet.undoTooltip"), children: /* @__PURE__ */ v(
          kf,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": N("sheet.undoTooltip"),
            "aria-disabled": !C,
            className: `hc:h-6 hc:w-6 ${C ? "hc:cursor-pointer" : T}`,
            onClick: () => C && w()
          }
        ) }),
        /* @__PURE__ */ v(tt, { tooltipText: N("sheet.redoTooltip"), children: /* @__PURE__ */ v(
          Lf,
          {
            role: "button",
            tabIndex: 0,
            "aria-label": N("sheet.redoTooltip"),
            "aria-disabled": !x,
            className: `hc:h-6 hc:w-6 ${x ? "hc:cursor-pointer" : T}`,
            onClick: () => x && p()
          }
        ) })
      ] }),
      _.includes("removeRows") && /* @__PURE__ */ v(
        tt,
        {
          tooltipText: N(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ v(
            nh,
            {
              role: "button",
              tabIndex: 0,
              "aria-label": N(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              className: `hc:h-6 hc:w-6 ${n.length > 0 ? "hc:cursor-pointer" : T}`,
              onClick: () => h(!0)
            }
          )
        }
      ),
      _.includes("addRows") && /* @__PURE__ */ v(tt, { tooltipText: N("sheet.addRowsTooltip"), children: /* @__PURE__ */ v(
        eh,
        {
          className: "hc:h-6 hc:w-6 hc:cursor-pointer",
          onClick: f
        }
      ) }),
      _.includes("downloadCsv") && /* @__PURE__ */ v(tt, { tooltipText: N("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ v(
        Af,
        {
          className: `hc:h-6 hc:w-6 ${t.length > 0 ? "hc:cursor-pointer" : T}`,
          onClick: () => bl(
            e,
            t,
            S,
            R
          )
        }
      ) }),
      /* @__PURE__ */ v(
        Et,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: N("sheet.filterByError"),
          classes: "hc:min-w-48",
          options: A,
          value: a,
          onChange: (O) => c(O)
        }
      ),
      _.includes("removeRows") && /* @__PURE__ */ v(
        qr,
        {
          open: b,
          setOpen: h,
          onConfirm: M,
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
    /* @__PURE__ */ U("div", { className: "hc:ml-5 hc:flex hc:items-center", children: [
      F && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(Rl, { color: "dark" }),
        /* @__PURE__ */ v("div", { className: "hc:mr-2" })
      ] }),
      _.includes("resetState") && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(tt, { tooltipText: N("sheet.resetTooltip"), children: /* @__PURE__ */ v(
          nl,
          {
            className: "hc:h-6 hc:w-6 hc:cursor-pointer",
            onClick: () => E(!0)
          }
        ) }),
        /* @__PURE__ */ v(
          qr,
          {
            open: y,
            setOpen: E,
            onConfirm: g,
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
function wv({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ v(Di, { checked: r, setChecked: o });
}
function yv({
  row: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  function r(o) {
    t.includes(o) ? n((i) => i.filter((s) => s !== o)) : n((i) => [...i, o]);
  }
  return /* @__PURE__ */ v(
    Di,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
const na = {
  active: null,
  anchor: null,
  editing: null,
  editInitialValue: "preserve"
};
function bv(e, t) {
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
      const n = Le(e.active, t.dims), r = e.anchor ? Le(e.anchor, t.dims) : null, o = e.editing && e.editing.row < t.dims.rowCount && e.editing.col < t.dims.colCount ? e.editing : null;
      return { ...e, active: n, anchor: r, editing: o };
    }
    case "reset":
      return na;
    default:
      return e;
  }
}
function xv() {
  const [e, t] = an(bv, na), n = q(!1), r = ue(
    () => e.active ? cv(e.anchor, e.active) : null,
    [e.active, e.anchor]
  ), o = ie(
    (x) => t({ type: "setActive", coord: x }),
    []
  ), i = ie(
    (x) => t({ type: "extend", coord: x }),
    []
  ), s = ie(
    (x) => t({ type: "selectAll", dims: x }),
    []
  ), l = ie(
    (x, S) => t({ type: "startEdit", coord: x, initialValue: S }),
    []
  ), a = ie(() => t({ type: "cancelEdit" }), []), c = ie(() => t({ type: "stopEditing" }), []), u = ie(
    (x) => t({ type: "clamp", dims: x }),
    []
  ), f = ie(() => t({ type: "reset" }), []), m = ie((x) => {
    n.current = !0, t({ type: "setActive", coord: x });
  }, []), d = ie((x) => {
    n.current && t({ type: "extend", coord: x });
  }, []), g = ie(() => {
    n.current = !1;
  }, []), w = ie(
    (x) => {
      var S, R;
      return ((S = e.active) == null ? void 0 : S.row) === x.row && ((R = e.active) == null ? void 0 : R.col) === x.col;
    },
    [e.active]
  ), p = ie(
    (x) => {
      var S, R;
      return ((S = e.editing) == null ? void 0 : S.row) === x.row && ((R = e.editing) == null ? void 0 : R.col) === x.col;
    },
    [e.editing]
  ), C = ie(
    (x) => r ? uv(x, r) : !1,
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
    reset: f,
    beginDrag: m,
    dragTo: d,
    endDrag: g,
    isActive: w,
    isEditing: p,
    isSelected: C
  };
}
function Sv(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function Mi(e) {
  return e.ctrlKey || e.metaKey;
}
const Tr = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right"
};
function Cv(e, t, n, r) {
  if (!t.editing && Mi(e)) {
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
    return Tr[e.key] || e.key === "Tab" ? { type: "MoveActive", to: Le({ row: 0, col: 0 }, n) } : { type: "NoOp" };
  const i = r(o);
  if (Mi(e)) {
    const l = Tr[e.key];
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
        return { type: "MoveActive", to: Le({ row: 0, col: 0 }, n) };
      case "end":
        return {
          type: "MoveActive",
          to: Le(
            { row: n.rowCount - 1, col: n.colCount - 1 },
            n
          )
        };
    }
    return e.key === "Home" ? { type: "MoveActive", to: Le({ row: 0, col: 0 }, n) } : e.key === "End" ? {
      type: "MoveActive",
      to: Le(
        { row: n.rowCount - 1, col: n.colCount - 1 },
        n
      )
    } : { type: "NoOp" };
  }
  const s = Tr[e.key];
  if (s) {
    const l = In(o, s, n);
    return e.shiftKey ? { type: "ExtendSelection", to: l } : { type: "MoveActive", to: l };
  }
  switch (e.key) {
    case "Tab":
      return {
        type: "MoveActive",
        to: In(o, e.shiftKey ? "left" : "right", n)
      };
    case "Enter":
      return {
        type: "MoveActive",
        to: In(o, e.shiftKey ? "up" : "down", n)
      };
    case "F2":
      return i ? { type: "StartEdit", initialValue: "preserve" } : { type: "NoOp" };
    case "Delete":
    case "Backspace":
      return i ? { type: "ClearCells" } : { type: "NoOp" };
    case "Home":
      return {
        type: "MoveActive",
        to: Le({ row: o.row, col: 0 }, n)
      };
    case "End":
      return {
        type: "MoveActive",
        to: Le({ row: o.row, col: n.colCount - 1 }, n)
      };
    case "PageUp":
    case "PageDown":
      return { type: "NoOp" };
    case "Escape":
      return { type: "NoOp" };
  }
  return Sv(e) ? i ? { type: "StartEdit", initialValue: { char: e.key } } : { type: "NoOp" } : { type: "NoOp" };
}
function Ev() {
  const e = q(""), t = ie((r) => {
    var o, i;
    e.current = r, (i = (o = navigator.clipboard) == null ? void 0 : o.writeText) == null || i.call(o, r).catch(() => {
    });
  }, []), n = ie(async () => {
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
function Rv(e, t) {
  const n = e.map(
    (r) => r.map((o, i) => xm(t[i], o))
  );
  return yl(n, "	");
}
function $v(e, t, n, r, o) {
  const i = [];
  if (e.length === 1 && e[0] && e[0].length === 1 && o) {
    const l = e[0][0];
    for (let a = o.top; a <= o.bottom; a++)
      for (let c = o.left; c <= o.right; c++)
        oo({ row: a, col: c }, n) && r(a, c) && i.push({ row: a, col: c, value: l });
    return i;
  }
  return e.forEach((l, a) => {
    l.forEach((c, u) => {
      const f = t.row + a, m = t.col + u;
      oo({ row: f, col: m }, n) && r(f, m) && i.push({ row: f, col: m, value: c });
    });
  }), i;
}
function Mv(e, t) {
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
function Tv({
  sheetDefinition: e,
  data: t,
  rowData: n,
  allData: r,
  canEditRows: o,
  setRowsData: i,
  undo: s,
  redo: l
}) {
  const a = xv(), c = Ev(), u = q(null), f = e.columns, m = ue(
    () => ({ rowCount: n.length, colCount: f.length }),
    [n.length, f.length]
  );
  de(() => {
    a.clampToBounds(m);
  }, [m.rowCount, m.colCount]), de(() => {
    const h = () => a.endDrag();
    return window.addEventListener("mouseup", h), () => window.removeEventListener("mouseup", h);
  }, []);
  const d = q(a);
  d.current = a, de(() => {
    const h = (y) => {
      const E = d.current;
      if (E.state.editing) return;
      const T = u.current;
      T && !T.contains(y.target) && E.reset();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const g = (h) => {
    if (!h) return !1;
    const y = f[h.col];
    return y ? !To(y) && o : !1;
  }, w = (h, y) => {
    var E;
    return (E = n[h]) == null ? void 0 : E[f[y].id];
  }, p = (h, y) => wt(w(h, y)), C = (h) => Mo(r, e.id, n[h]), x = (h) => {
    if (h.length === 0) return;
    const y = h.map((T) => ({
      rowIndex: C(T.row),
      columnId: f[T.col].id,
      value: T.value
    })), E = Mv(y, t.rows);
    i(
      E.map((T) => ({
        sheetId: e.id,
        rowIndex: T.rowIndex,
        value: T.value
      }))
    );
  }, S = () => {
    const h = a.range;
    if (!h) return;
    const y = [];
    for (let T = h.top; T <= h.bottom; T++) {
      const L = [];
      for (let A = h.left; A <= h.right; A++)
        L.push(w(T, A));
      y.push(L);
    }
    const E = Rv(
      y,
      f.slice(h.left, h.right + 1)
    );
    c.write(E);
  }, R = () => {
    const h = a.range;
    if (!h) return;
    const y = [];
    for (let E = h.top; E <= h.bottom; E++)
      for (let T = h.left; T <= h.right; T++)
        g({ col: T }) && y.push({
          row: E,
          col: T,
          value: Sm(f[T])
        });
    x(y);
  }, _ = () => {
    S(), R();
  }, N = async () => {
    const h = a.state.active;
    if (!h) return;
    const y = await c.read();
    if (!y) return;
    const E = Xm(y, "	");
    if (E.length === 0) return;
    const T = $v(
      E,
      h,
      m,
      (L, A) => g({ col: A }),
      a.range ?? void 0
    );
    x(
      T.map((L) => ({
        row: L.row,
        col: L.col,
        value: Oo(f[L.col], L.value)
      }))
    );
  }, F = () => {
    const h = a.range;
    if (!h || h.bottom === h.top) return;
    const y = [];
    for (let E = h.left; E <= h.right; E++) {
      const T = w(h.top, E);
      for (let L = h.top + 1; L <= h.bottom; L++)
        g({ col: E }) && y.push({ row: L, col: E, value: T });
    }
    x(y);
  };
  return { selection: a, dims: m, tableContainerRef: u, handleGridKeyDown: (h) => {
    if (a.state.editing) return;
    const y = a.state.active;
    if ((h.key === "PageDown" || h.key === "PageUp") && y) {
      const T = u.current, L = fv(
        (T == null ? void 0 : T.clientHeight) ?? 0,
        al
      ), A = Le(
        {
          row: y.row + (h.key === "PageDown" ? L : -L),
          col: y.col
        },
        m
      );
      h.shiftKey ? a.extendTo(A) : a.setActive(A), h.preventDefault();
      return;
    }
    const E = Cv(
      {
        key: h.key,
        shiftKey: h.shiftKey,
        ctrlKey: h.ctrlKey,
        metaKey: h.metaKey,
        altKey: h.altKey
      },
      a.state,
      m,
      g
    );
    switch (E.type) {
      case "MoveActive":
        a.setActive(E.to), h.preventDefault();
        break;
      case "ExtendSelection":
        a.extendTo(E.to), h.preventDefault();
        break;
      case "JumpEdge": {
        if (!y) break;
        const T = dv(y, E.direction, m, p);
        h.shiftKey ? a.extendTo(T) : a.setActive(T), h.preventDefault();
        break;
      }
      case "SelectAll":
        a.selectAll(m), h.preventDefault();
        break;
      case "StartEdit":
        y && a.startEdit(y, E.initialValue), h.preventDefault();
        break;
      case "ClearCells":
        R(), h.preventDefault();
        break;
      case "Copy":
        S(), h.preventDefault();
        break;
      case "Cut":
        _(), h.preventDefault();
        break;
      case "Paste":
        N(), h.preventDefault();
        break;
      case "FillDown":
        F(), h.preventDefault();
        break;
      case "Undo":
        s && (s(), h.preventDefault());
        break;
      case "Redo":
        l && (l(), h.preventDefault());
        break;
    }
  } };
}
function Ov({
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
  canRedo: f,
  enumLabelDict: m
}) {
  const { sheetData: d } = Ze(), { availableActions: g } = Ne(), [w, p] = re([]), [C, x] = re("all"), [S, R] = re(""), [_, N] = re(
    null
  ), F = dm(
    t,
    d,
    C,
    n,
    _,
    e,
    S,
    m
  ), b = g.includes("removeRows"), h = g.includes("editRows"), y = g.includes("undoRedo"), { selection: E, dims: T, tableContainerRef: L, handleGridKeyDown: A } = Tv({
    sheetDefinition: e,
    data: t,
    rowData: F,
    allData: d,
    canEditRows: h,
    setRowsData: o,
    // Gate the keyboard shortcuts on the same flag as the toolbar buttons.
    undo: y ? a : void 0,
    redo: y ? c : void 0
  });
  de(() => {
    p([]), x("all"), E.reset();
  }, [e]);
  const k = ue(() => {
    const D = t.rows, z = D.filter(
      (V, P) => !n.some((ee) => ee.rowIndex === P)
    ), H = D.filter(
      (V, P) => n.some((ee) => ee.rowIndex === P)
    );
    return {
      all: D.length,
      valid: z.length,
      errors: H.length
    };
  }, [t, n]), M = ue(() => [
    ...g.includes(
      "removeRows"
    ) ? [
      {
        id: Yr,
        header: () => /* @__PURE__ */ v(
          wv,
          {
            visibleData: F,
            selectedRows: w,
            setSelectedRows: p
          }
        ),
        cell: ({ row: z }) => /* @__PURE__ */ v(
          yv,
          {
            row: z,
            selectedRows: w,
            setSelectedRows: p
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: cl
      }
    ] : [],
    ...e.columns.map(
      (z) => ({
        id: z.id,
        accessorFn: (H) => H[z.id],
        header: () => /* @__PURE__ */ v(gv, { column: z }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: z.label },
        enableResizing: !0
      })
    )
  ], [e, w, F, g]), O = iv({
    data: F,
    columns: M,
    getCoreRowModel: ev(),
    getSortedRowModel: tv(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: jh,
      maxSize: Uh,
      size: Gh
    }
  });
  function I(D, z, H) {
    const V = { ...t.rows[D] };
    H === void 0 ? delete V[z] : V[z] = H, r({
      sheetId: e.id,
      value: V,
      rowIndex: D
    });
  }
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v(
      vv,
      {
        sheetDefinition: e,
        rowData: F,
        selectedRows: w,
        setSelectedRows: p,
        viewMode: C,
        setViewMode: x,
        searchPhrase: S,
        setSearchPhrase: R,
        errorColumnFilter: _,
        setErrorColumnFilter: N,
        removeRows: i,
        addEmptyRow: s,
        sheetValidationErrors: n,
        rowValidationSummary: k,
        resetState: l,
        undo: a,
        redo: c,
        canUndo: u,
        canRedo: f,
        enumLabelDict: m
      }
    ) }),
    /* @__PURE__ */ v(av, { value: E, children: /* @__PURE__ */ v(
      "div",
      {
        className: "hc:min-h-0 hc:flex-1 hc:overflow-auto",
        ref: L,
        tabIndex: 0,
        onKeyDown: A,
        children: /* @__PURE__ */ v(
          mv,
          {
            tableContainerRef: L,
            table: O,
            sheetDefinition: e,
            allData: d,
            sheetValidationErrors: n,
            onCellValueChanged: I,
            setSelectedRows: p,
            enumLabelDict: m,
            gridDims: T,
            hasCheckboxColumn: b
          }
        )
      }
    ) })
  ] });
}
function ra(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function Iv(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && bl(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Ti = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + Co(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function _v({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = Ze(), l = Eo(o), { csvDownloadMode: a } = Ne(), { t: c } = me(), u = ra(l);
  return /* @__PURE__ */ v("div", { className: "hc:flex hc:flex-row hc:px-4 hc:pt-3 hc:pb-2", children: /* @__PURE__ */ U("div", { className: "hc:flex-1 hc:space-y-4", children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ v("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: /* @__PURE__ */ v(Uf, { className: "hc:text-hello-csv-primary hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ U("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ v("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.fileInformation") }),
        /* @__PURE__ */ v("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: n ? `${c("importStatus.original")}: ${en((n == null ? void 0 : n.size) || 0)} · ${c("importStatus.processed")}: ${en(Ti(l, s, t, a))}` : `${c("importStatus.processed")}: ${en(Ti(l, s, t, a))}` }),
        /* @__PURE__ */ v("div", { className: "hc:mt-5", children: /* @__PURE__ */ v(
          De,
          {
            variant: "tertiary",
            outline: !0,
            onClick: () => Iv(
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
    /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ v("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: r === "failed" ? /* @__PURE__ */ v(Jr, { className: "hc:text-hello-csv-danger-light hc:h-8 hc:w-8" }) : e ? /* @__PURE__ */ v(Wp, { className: "hc:text-hello-csv-warning-light hc:h-8 hc:w-8" }) : /* @__PURE__ */ v(Cl, { className: "hc:text-hello-csv-success-light hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ U("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ v("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.importResults") }),
        /* @__PURE__ */ v("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: c("importStatus.totalRows", { totalRows: u }) }),
        i && /* @__PURE__ */ U("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          i.skipped >= 0 && /* @__PURE__ */ U("span", { children: [
            c("importStatus.statisticsSkipped", {
              skipped: i.skipped
            }),
            " · "
          ] }),
          i.failed >= 0 && /* @__PURE__ */ U("span", { children: [
            c("importStatus.statisticsFailed", {
              failed: i.failed
            }),
            " · "
          ] }),
          i.imported >= 0 && /* @__PURE__ */ v("span", { children: c("importStatus.statisticsImported", {
            imported: i.imported
          }) })
        ] }),
        r === "failed" && /* @__PURE__ */ U("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: [
          c("importStatus.status"),
          ":",
          " ",
          /* @__PURE__ */ v(Ro, { variant: "error", children: c("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function oa({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = me();
  return /* @__PURE__ */ v(Fi, { withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-col hc:py-5", children: [
    /* @__PURE__ */ v("div", { className: "hc:px-4 hc:pb-2 hc:text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-muted hc:px-4 hc:pb-2 hc:text-sm", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ v(
      _v,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function Av({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = Ze(), { onSummaryFinished: o } = Ne(), { t: i } = me(), s = Eo(n), l = ra(s), a = (r == null ? void 0 : r.imported) ?? 0, c = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex-none hc:text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ U("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ v("div", { className: "hc:mt-4", children: /* @__PURE__ */ v(
        $o,
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
      /* @__PURE__ */ v("div", { className: "hc:mt-6", children: /* @__PURE__ */ v(
        oa,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ v(De, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
  ] });
}
function Fv({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hc:text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ U("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ v("div", { className: "hc:mt-4", children: /* @__PURE__ */ v(
        $o,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ v("div", { className: "hc:mt-6", children: /* @__PURE__ */ v(oa, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ U("div", { className: "hc:mt-6 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ v(De, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ v(De, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function Dv({ progress: e, pending: t }) {
  const r = 2 * Math.PI * 40, o = r - e / 100 * r, [i, s] = re(!1);
  return de(() => {
    if (e === 0) {
      const l = setTimeout(() => {
        s(!0);
      }, 3e3);
      return () => clearTimeout(l);
    }
  }, [e]), i ? /* @__PURE__ */ v("div", { className: "hc:flex hc:justify-center", children: /* @__PURE__ */ v(
    "div",
    {
      className: `hc:border-hello-csv-success-light hc:h-22 hc:w-22 hc:rounded-full hc:border-10 ${t && "hc:animate-spin hc:border-t-transparent"}`
    }
  ) }) : /* @__PURE__ */ U(
    "svg",
    {
      className: "hc:mx-auto hc:h-24 hc:w-24 hc:rotate-[-90deg]",
      width: "100",
      height: "100",
      children: [
        /* @__PURE__ */ v(
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
        /* @__PURE__ */ v(
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
function Pv() {
  return /* @__PURE__ */ v(Hf, { className: "hc:text-hello-csv-success hc:absolute hc:inset-0 hc:m-auto hc:h-12 hc:w-12 hc:stroke-4" });
}
function kv({ resetState: e }) {
  const { importProgress: t, mode: n } = Ze(), r = n === "submit", { t: o } = me();
  return /* @__PURE__ */ v("div", { className: "hc:flex hc:h-full hc:p-10", children: /* @__PURE__ */ v("div", { className: "hc:flex hc:h-full hc:w-full hc:flex-col", children: /* @__PURE__ */ U("div", { className: "hc:my-16 hc:text-center", children: [
    /* @__PURE__ */ U("div", { className: "hc:relative hc:mx-auto hc:h-24 hc:w-24", children: [
      /* @__PURE__ */ v(Dv, { progress: t, pending: r }),
      r && /* @__PURE__ */ U("div", { children: [
        /* @__PURE__ */ v("div", { className: "hc:absolute hc:inset-0 hc:flex hc:items-center hc:justify-center", children: /* @__PURE__ */ U("b", { className: "hc:text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ v("h2", { className: "hc:text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ v(Pv, {})
    ] }),
    !r && /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-col hc:items-center", children: [
      /* @__PURE__ */ v("h2", { className: "hc:text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ v("div", { className: "hc:h-5" }),
      /* @__PURE__ */ v(De, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Nv({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = Ze();
  return /* @__PURE__ */ U("div", { className: "hc:h-full hc:overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ v(kv, { resetState: n }),
    o === "failed" && /* @__PURE__ */ v(
      Fv,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ v(Av, { resetState: n, enumLabelDict: r })
  ] });
}
const Lv = ({ children: e }) => {
  const { theme: t } = Ne();
  return de(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ v(ut, { children: e });
};
function Vv({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ $.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ $.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ $.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const Hv = /* @__PURE__ */ $.forwardRef(Vv);
function ia() {
  const { sheets: e, preventUploadOnValidationErrors: t } = Ne(), { sheetData: n, validationErrors: r, processingInProgress: o } = Ze(), { t: i } = me();
  return ue(() => {
    const s = Tp(e, n).map(
      (g) => ({
        ...g,
        tooltip: i("importer.rowLimitExceeded", {
          sheet: g.label,
          count: String(g.count),
          limit: String(g.maxRows)
        })
      })
    ), l = Object.fromEntries(
      s.map((g) => [g.sheetId, g])
    ), a = s.filter((g) => g.exceeded), c = a.length > 0;
    let u = null;
    a.length === 1 ? u = a[0].tooltip : a.length > 1 && (u = i("importer.rowLimitExceededMultiple", {
      sheets: a.map((g) => `${g.label} (${g.count}/${g.maxRows})`).join(", ")
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
function zv({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = Ze(), { sheets: i } = Ne(), { byId: s } = ia(), { t: l } = me();
  return /* @__PURE__ */ v(
    kp,
    {
      tabs: i.map((a) => {
        const c = s[a.id], u = c != null ? `${a.label} (${c.count} / ${c.maxRows})` : `${a.label} (${t[a.id]})`, f = o.some(
          (d) => d.sheetId === a.id
        ), m = c != null && c.exceeded ? c.tooltip : f ? l("importer.sheetValidationErrors") : void 0;
        return {
          label: u,
          value: a.id,
          icon: m != null ? /* @__PURE__ */ v(tt, { className: "hc:mr-3", tooltipText: m, children: /* @__PURE__ */ v(Hv, { className: "hc:h-4 hc:w-4" }) }) : void 0
        };
      }),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function Bv({ onBackToMapping: e }) {
  const { t } = me(), [n, r] = re(!1);
  return /* @__PURE__ */ U(ut, { children: [
    /* @__PURE__ */ v(
      De,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ v(
      qr,
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
function jv({ importerRequirements: e }) {
  const { t } = me();
  return /* @__PURE__ */ v("div", { className: "hc:h-full hc:w-full hc:space-y-5 hc:overflow-y-auto", children: Object.entries(e).filter(([, n]) => n.length > 0).map(([n, r]) => {
    const o = n === "required" ? "required" : "optional";
    return /* @__PURE__ */ U("div", { className: "hc:me-3", children: [
      /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border hc:my-3 hc:border-b hc:pb-4 hc:text-sm hc:font-light hc:uppercase", children: t(`uploader.${o}Columns`) }),
      /* @__PURE__ */ v("div", { className: "hc:mt-4", children: r.map((i) => /* @__PURE__ */ U(
        "div",
        {
          className: "hc:my-3 hc:flex hc:justify-between",
          children: [
            /* @__PURE__ */ v("div", { className: "hc:text-xs", children: i.columnLabel }),
            /* @__PURE__ */ v("div", { className: "hc:text-xs hc:font-light", children: /* @__PURE__ */ v(
              tt,
              {
                tooltipText: t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ v(Yf, { className: "hc:text-hello-csv-text-muted hc:size-5" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function Uv({ importerRequirements: e }) {
  const { t } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-5", children: [
    /* @__PURE__ */ v("div", { className: "hc:me-3", children: /* @__PURE__ */ v($o, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ v("div", { className: "hc:flex hc:min-h-0 hc:flex-1 hc:overflow-hidden", children: /* @__PURE__ */ v(jv, { importerRequirements: e }) })
  ] });
}
function Gv({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = Ne(), { t: i, tHtml: s } = me(), l = q(null), [a, c] = re(!1), [u, f] = re(null), m = Lh.concat(
    (r == null ? void 0 : r.map((x) => x.mimeType)) ?? []
  ), d = Vh, g = ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", "), w = (x, S) => {
    const R = Um(x.name);
    if (!(m.includes(x.type) || d.includes(R))) {
      f(
        i("uploader.unsupportedFileType", { formats: g })
      );
      return;
    }
    if (x.size > S) {
      f(
        i("uploader.fileTooLarge", { size: en(S) })
      );
      return;
    }
    f(null), e(x);
  }, p = (x) => {
    var R;
    const S = x.target;
    (R = S.files) != null && R.length && w(S.files[0], n);
  }, C = (x) => {
    var S;
    x.preventDefault(), c(!1), (S = x.dataTransfer) != null && S.files.length && w(x.dataTransfer.files[0], n);
  };
  return /* @__PURE__ */ v(Fi, { variant: "muted", withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ U(
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
        /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-1 hc:flex-col hc:items-center hc:justify-center", children: [
          /* @__PURE__ */ v(Bf, { className: "hc:text-hello-csv-primary hc:h-12 hc:w-12" }),
          /* @__PURE__ */ v("p", { className: "hc:mt-3 hc:text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ U("div", { className: "hc:text-hello-csv-text-muted hc:mt-3 hc:text-sm", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ v("b", { children: en(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ v("div", { className: "hc:mt-3", children: /* @__PURE__ */ v(De, { children: i("uploader.browseFiles") }) }),
          u && /* @__PURE__ */ v("div", { className: "hc:mt-2", children: /* @__PURE__ */ v(El, { children: u }) }),
          o && /* @__PURE__ */ v("div", { className: "hc:mt-3 hc:text-sm", children: /* @__PURE__ */ v(
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
        /* @__PURE__ */ v(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: l,
            type: "file",
            accept: m.concat(d).join(","),
            className: "hc:sr-only",
            onChange: (x) => p(x)
          }
        )
      ]
    }
  ) });
}
function Wv({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = Ne(), r = jm(n), { t: o } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-4", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex-none hc:text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ v("div", { className: "hc:flex-auto hc:md:min-h-0", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col-reverse hc:gap-5 hc:md:flex-row", children: [
      /* @__PURE__ */ v("div", { className: "hc:h-full hc:flex-1 hc:lg:flex-1", children: /* @__PURE__ */ v(Uv, { importerRequirements: r }) }),
      /* @__PURE__ */ v("div", { className: "hc:flex-1 hc:lg:flex-2", children: /* @__PURE__ */ v(
        Gv,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
async function Oi(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
async function qv({
  state: e,
  dispatch: t,
  importerDefinition: n
}) {
  const r = Vl();
  t({ type: "PROCESSING_STARTED", payload: { runId: r } });
  const i = await new Vn(n, e).getState("submit"), s = [
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
      const c = Eo(i.sheetData), u = await n.onComplete(
        { ...e, sheetData: c, validationErrors: s },
        (f) => {
          t({ type: "PROGRESS", payload: { progress: f } });
        },
        e.sheetDefinitions.map((f) => {
          var m;
          return {
            file: Co(
              f,
              ((m = c.find((d) => d.sheetId === f.id)) == null ? void 0 : m.rows) ?? [],
              {},
              "value"
            ),
            sheetId: f.id
          };
        })
      );
      await Oi(400), t({ type: "PROGRESS", payload: { progress: 100 } }), await Oi(200), t({
        type: "COMPLETED",
        payload: { importStatistics: u ?? void 0 }
      });
    } catch {
      t({ type: "FAILED" });
    }
  }
}
function Or(e) {
  return structuredClone(e);
}
function Yv() {
  const e = q([]), t = q([]), [, n] = re(0), r = ie(() => n((a) => a + 1), []), o = ie(
    (a) => {
      e.current.push(Or(a)), e.current.length > Nh && (e.current = e.current.slice(-50)), t.current = [], r();
    },
    [r]
  ), i = ie(
    (a) => {
      if (e.current.length === 0) return null;
      const c = e.current.pop();
      return t.current.push(Or(a)), r(), c;
    },
    [r]
  ), s = ie(
    (a) => {
      if (t.current.length === 0) return null;
      const c = t.current.pop();
      return e.current.push(Or(a)), r(), c;
    },
    [r]
  ), l = ie(() => {
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
function Kv(e) {
  const { sheets: t, availableActions: n } = e, { t: r } = me(), o = q(!0), i = q(null), s = Ze(), l = fg(), a = ke(), { mode: c, currentSheetId: u, sheetData: f, columnMappings: m, validationErrors: d } = s;
  de(() => {
    var V;
    if (o.current) {
      o.current = !1;
      return;
    }
    (V = i.current) == null || V.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const g = f.find(
    (V) => V.sheetId === u
  ), w = ue(() => Object.fromEntries(
    f.map((V) => [V.sheetId, V.rows.length])
  ), [f]), p = t.find(
    (V) => V.id === u
  ), C = fm(t), { preventUpload: x, uploadBlockedTooltip: S } = ia(), R = new Vn(e, s), _ = Yv();
  function N() {
    _.record(f);
  }
  async function F(V) {
    await R.uploadFile(V), R.dispatchChange(l);
  }
  function b() {
    _.reset(), R.setEnterDataManually(), R.dispatchChange(l);
  }
  function h(V) {
    R.setMappings(V), R.dispatchChange(l);
  }
  async function y() {
    _.reset(), await R.confirmMappings(), R.dispatchChange(l);
  }
  function E(V) {
    N(), R.changeCell(V), R.dispatchChange(l);
  }
  function T(V) {
    V.length !== 0 && (N(), V.forEach((P) => R.changeCell(P)), R.dispatchChange(l));
  }
  function L(V) {
    N(), R.removeRows(V), R.dispatchChange(l);
  }
  function A() {
    N(), R.addEmptyRow(), R.dispatchChange(l);
  }
  function k() {
    const V = _.undo(f);
    V != null && (R.restoreSheetData(V), R.dispatchChange(l));
  }
  function M() {
    const V = _.redo(f);
    V != null && (R.restoreSheetData(V), R.dispatchChange(l));
  }
  function O() {
    _.reset(), l({ type: "RESET" });
  }
  function I() {
    return qv({ state: s, dispatch: l, importerDefinition: e });
  }
  function D() {
    l({ type: "PREVIEW" });
  }
  function z() {
    l({ type: "UPLOAD" });
  }
  function H() {
    l({ type: "MAPPING" });
  }
  return /* @__PURE__ */ v(Lv, { children: /* @__PURE__ */ U(Yh, { ref: i, children: [
    c === "upload" && /* @__PURE__ */ v(
      Wv,
      {
        onFileUploaded: F,
        onEnterDataManually: b
      }
    ),
    c === "mapping" && /* @__PURE__ */ v(
      hg,
      {
        onMappingsChanged: h,
        onMappingsSet: y,
        onBack: z
      }
    ),
    c === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
      /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v(
        zv,
        {
          idPrefix: a,
          sheetCountDict: w,
          onSheetChange: (V) => l({ type: "SHEET_CHANGED", payload: { sheetId: V } })
        }
      ) }),
      /* @__PURE__ */ v(
        "div",
        {
          className: "hc:flex-1 hc:overflow-auto",
          role: "tabpanel",
          id: `${a}-tabpanel-${u}`,
          "aria-labelledby": `${a}-tab-${u}`,
          tabIndex: 0,
          children: /* @__PURE__ */ v(
            Ov,
            {
              data: g,
              sheetDefinition: p,
              sheetValidationErrors: d.filter(
                (V) => V.sheetId === (p == null ? void 0 : p.id)
              ),
              setRowData: E,
              setRowsData: T,
              removeRows: L,
              addEmptyRow: A,
              resetState: O,
              undo: k,
              redo: M,
              canUndo: _.canUndo,
              canRedo: _.canRedo,
              enumLabelDict: C
            }
          )
        }
      ),
      /* @__PURE__ */ v("div", { className: "hc:flex-none", children: g.rows.length > 0 && /* @__PURE__ */ U("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
        /* @__PURE__ */ v("div", { children: m != null && n.includes("backToPreviousStep") && /* @__PURE__ */ v(
          Bv,
          {
            onBackToMapping: H
          }
        ) }),
        /* @__PURE__ */ v(
          tt,
          {
            tooltipText: S,
            hidden: !x,
            children: /* @__PURE__ */ v(De, { onClick: I, disabled: x, children: r("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (c === "submit" || c === "failed" || c === "completed") && /* @__PURE__ */ v(
      Nv,
      {
        onRetry: I,
        onBackToPreview: D,
        resetState: O,
        enumLabelDict: C
      }
    )
  ] }) });
}
function Ii(e) {
  const t = {
    ...e,
    maxFileSizeInBytes: e.maxFileSizeInBytes ?? 20971520,
    // 20MB,
    persistenceConfig: e.persistenceConfig ?? { enabled: !1 },
    csvDownloadMode: e.csvDownloadMode ?? "value",
    allowManualDataEntry: e.allowManualDataEntry ?? !1,
    availableActions: e.availableActions ?? [...$p]
  };
  return /* @__PURE__ */ v(Ih, { importerDefintion: t, children: /* @__PURE__ */ v(
    dg,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ v(Ph, { children: /* @__PURE__ */ v(Kv, { ...t }) })
    }
  ) });
}
function o0(e, t) {
  const n = aa(e);
  return n.render(Ir(Ii, t)), {
    render: (r) => n.render(Ir(Ii, r)),
    unmount: () => n.unmount()
  };
}
export {
  r0 as CsvImporterStateBuilder,
  $p as availableActionList,
  Ii as default,
  or as isDateLikeColumn,
  o0 as renderImporter
};
