var aa = Object.defineProperty;
var ca = (e, t, n) => t in e ? aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ge = (e, t, n) => ca(e, typeof t != "symbol" ? t + "" : t, n);
import { createRoot as ua } from "react-dom/client";
import * as M from "react";
import K, { forwardRef as Bn, useId as ke, useRef as q, useCallback as ie, useEffect as de, useState as re, useMemo as ue, useLayoutEffect as jn, useContext as he, createContext as ve, Fragment as Ie, isValidElement as da, cloneElement as fa, createElement as Ir, useReducer as un, useSyncExternalStore as ha, createRef as Ai } from "react";
import { jsx as v, jsxs as U, Fragment as ut } from "react/jsx-runtime";
import * as Dn from "react-dom";
import { createPortal as Un, flushSync as xt } from "react-dom";
function Di(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Di(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function pa() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Di(e)) && (r && (r += " "), r += t);
  return r;
}
const ko = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, No = pa, mt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return No(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((c) => {
    const u = n == null ? void 0 : n[c], f = i == null ? void 0 : i[c];
    if (u === null) return null;
    const p = ko(u) || ko(f);
    return o[c][p];
  }), l = n && Object.entries(n).reduce((c, u) => {
    let [f, p] = u;
    return p === void 0 || (c[f] = p), c;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: f, className: p, ...d } = u;
    return Object.entries(d).every((g) => {
      let [w, m] = g;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...l
      }[w]) : {
        ...i,
        ...l
      }[w] === m;
    }) ? [
      ...c,
      f,
      p
    ] : c;
  }, []);
  return No(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ma = mt(
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
function Fe({
  children: e,
  variant: t,
  disabled: n,
  onClick: r,
  withFullWidth: o
}) {
  const i = `hello-csv-button hello-csv-button-${t ?? "primary"} ${ma({ variant: t, disabled: n, withFullWidth: o })}`;
  return /* @__PURE__ */ v(
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
const ga = mt(
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
), Fi = Bn(
  ({ children: e, className: t, variant: n, withPadding: r = !0 }, o) => {
    const i = ga({ variant: n, withPadding: r });
    return /* @__PURE__ */ v(
      "div",
      {
        ref: o,
        className: `hello-csv-card ${i} ${t ?? ""}`,
        children: e
      }
    );
  }
);
function Pi({ checked: e, setChecked: t, label: n }) {
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
let va = !1;
function so() {
  return va;
}
const ki = typeof document < "u" ? K.useLayoutEffect : () => {
};
function wa(e) {
  const t = q(null);
  return ki(() => {
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
function ba(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function ya(e) {
  return ba(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function Ni(e, t) {
  if (!so()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : ya(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Ar = (e = document) => {
  var t;
  if (!so()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Li(e) {
  return so() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function xa(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Sa(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Vi(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Ca = Vi(function() {
  return Sa(/^Mac/i);
}), Ea = Vi(function() {
  return xa(/Android/i);
});
function Hi() {
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
function Ra(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ea() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function zi(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function $a(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Bi(e) {
  let t = q({
    isFocused: !1,
    observer: null
  });
  ki(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = wa((r) => {
    e == null || e(r);
  });
  return ie((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (s) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = zi(s);
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
let Ma = !1, dn = null, Dr = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Map(), $t = !1, Fr = !1;
const Ta = {
  Tab: !0,
  Escape: !0
};
function lo(e, t) {
  for (let n of Dr) n(e, t);
}
function Oa(e) {
  return !(e.metaKey || !Ca() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Fn(e) {
  $t = !0, Oa(e) && (dn = "keyboard", lo("keyboard", e));
}
function Pt(e) {
  dn = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && ($t = !0, lo("pointer", e));
}
function ji(e) {
  Ra(e) && ($t = !0, dn = "virtual");
}
function Ui(e) {
  e.target === window || e.target === document || Ma || !e.isTrusted || (!$t && !Fr && (dn = "virtual", lo("virtual", e)), $t = !1, Fr = !1);
}
function Gi() {
  $t = !1, Fr = !0;
}
function Pr(e) {
  if (typeof window > "u" || Jt.get(St(e))) return;
  const t = St(e), n = gt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    $t = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Fn, !0), n.addEventListener("keyup", Fn, !0), n.addEventListener("click", ji, !0), t.addEventListener("focus", Ui, !0), t.addEventListener("blur", Gi, !1), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Pt, !0), n.addEventListener("pointermove", Pt, !0), n.addEventListener("pointerup", Pt, !0)), t.addEventListener("beforeunload", () => {
    Wi(e);
  }, {
    once: !0
  }), Jt.set(t, {
    focus: r
  });
}
const Wi = (e, t) => {
  const n = St(e), r = gt(e);
  t && r.removeEventListener("DOMContentLoaded", t), Jt.has(n) && (n.HTMLElement.prototype.focus = Jt.get(n).focus, r.removeEventListener("keydown", Fn, !0), r.removeEventListener("keyup", Fn, !0), r.removeEventListener("click", ji, !0), n.removeEventListener("focus", Ui, !0), n.removeEventListener("blur", Gi, !1), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Pt, !0), r.removeEventListener("pointermove", Pt, !0), r.removeEventListener("pointerup", Pt, !0)), Jt.delete(n));
};
function _a(e) {
  const t = gt(e);
  let n;
  return t.readyState !== "loading" ? Pr(e) : (n = () => {
    Pr(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Wi(e, n);
}
typeof document < "u" && _a();
function qi() {
  return dn !== "pointer";
}
const Ia = /* @__PURE__ */ new Set([
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
function Aa(e, t, n) {
  let r = gt(n == null ? void 0 : n.target);
  const o = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? St(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? St(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !Ia.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof s && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Ta[n.key]);
}
function Da(e, t, n) {
  Pr(), de(() => {
    let r = (o, i) => {
      Aa(!!(n != null && n.isTextInput), o, i) && e(qi());
    };
    return Dr.add(r), () => {
      Dr.delete(r);
    };
  }, t);
}
function Fa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = ie((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), s = Bi(i), l = ie((a) => {
    const c = gt(a.target), u = c ? Ar(c) : Ar();
    a.target === a.currentTarget && u === Li(a.nativeEvent) && (n && n(a), o && o(!0), s(a));
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
function Pa(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = q({
    isFocusWithin: !1
  }), { addGlobalListener: s, removeAllGlobalListeners: l } = Hi(), a = ie((f) => {
    f.currentTarget.contains(f.target) && i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(f), o && o(!1));
  }, [
    n,
    o,
    i,
    l
  ]), c = Bi(a), u = ie((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const p = gt(f.target), d = Ar(p);
    if (!i.current.isFocusWithin && d === Li(f.nativeEvent)) {
      r && r(f), o && o(!0), i.current.isFocusWithin = !0, c(f);
      let g = f.currentTarget;
      s(p, "focus", (w) => {
        if (i.current.isFocusWithin && !Ni(g, w.target)) {
          let m = new p.defaultView.FocusEvent("blur", {
            relatedTarget: w.target
          });
          $a(m, g);
          let C = zi(m);
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
let kr = !1, dr = 0;
function ka() {
  kr = !0, setTimeout(() => {
    kr = !1;
  }, 50);
}
function Lo(e) {
  e.pointerType === "touch" && ka();
}
function Na() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" && document.addEventListener("pointerup", Lo), dr++, () => {
      dr--, !(dr > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", Lo);
    };
}
function Yi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, s] = re(!1), l = q({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  de(Na, []);
  let { addGlobalListener: a, removeAllGlobalListeners: c } = Hi(), { hoverProps: u, triggerHoverEnd: f } = ue(() => {
    let p = (w, m) => {
      if (l.pointerType = m, o || m === "touch" || l.isHovered || !w.currentTarget.contains(w.target)) return;
      l.isHovered = !0;
      let C = w.currentTarget;
      l.target = C, a(gt(w.target), "pointerover", (x) => {
        l.isHovered && l.target && !Ni(l.target, x.target) && d(x, x.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: C,
        pointerType: m
      }), n && n(!0), s(!0);
    }, d = (w, m) => {
      let C = l.target;
      l.pointerType = "", l.target = null, !(m === "touch" || !l.isHovered || !C) && (l.isHovered = !1, c(), r && r({
        type: "hoverend",
        target: C,
        pointerType: m
      }), n && n(!1), s(!1));
    }, g = {};
    return typeof PointerEvent < "u" && (g.onPointerEnter = (w) => {
      kr && w.pointerType === "mouse" || p(w, w.pointerType);
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
function Ki(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = q({
    isFocused: !1,
    isFocusVisible: t || qi()
  }), [i, s] = re(!1), [l, a] = re(() => o.current.isFocused && o.current.isFocusVisible), c = ie(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = ie((d) => {
    o.current.isFocused = d, s(d), c();
  }, [
    c
  ]);
  Da((d) => {
    o.current.isFocusVisible = d, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Fa({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: p } = Pa({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? p : f
  };
}
var La = Object.defineProperty, Va = (e, t, n) => t in e ? La(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fr = (e, t, n) => (Va(e, typeof t != "symbol" ? t + "" : t, n), n);
let Ha = class {
  constructor() {
    fr(this, "current", this.detect()), fr(this, "handoffState", "pending"), fr(this, "currentId", 0);
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
}, Rt = new Ha();
function Ht(e) {
  return Rt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Gn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ye() {
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
    return Gn(() => {
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
    let r = Ye();
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
  let [e] = re(Ye);
  return de(() => () => e.dispose(), [e]), e;
}
let fe = (e, t) => {
  Rt.isServer ? de(e, t) : jn(e, t);
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
function za(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Ba(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ja({ disabled: e = !1 } = {}) {
  let t = q(null), [n, r] = re(!1), o = Ot(), i = Q(() => {
    t.current = null, r(!1), o.dispose();
  }), s = Q((l) => {
    if (o.dispose(), t.current === null) {
      t.current = l.currentTarget, r(!0);
      {
        let a = Ht(l.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (c) => {
          if (t.current) {
            let u = za(c);
            r(Ba(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: s, onPointerUp: i, onClick: i } };
}
let Ua = ve(void 0);
function ao() {
  return he(Ua);
}
function Nr(...e) {
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
  let e = Wa();
  return ie((t) => Ga({ mergeRefs: e, ...t }), [e]);
}
function Ga({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s, mergeRefs: l }) {
  l = l ?? qa;
  let a = Zi(t, e);
  if (i) return yn(a, n, r, s, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...f } = a;
    if (u) return yn(f, n, r, s, l);
  }
  if (c & 1) {
    let { unmount: u = !0, ...f } = a;
    return Ae(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return yn({ ...f, hidden: !0, style: { display: "none" } }, n, r, s, l);
    } });
  }
  return yn(a, n, r, s, l);
}
function yn(e, t = {}, n, r, o) {
  let { as: i = n, children: s, refName: l = "ref", ...a } = hr(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, u = typeof s == "function" ? s(t) : s;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let p = !1, d = [];
    for (let [g, w] of Object.entries(t)) typeof w == "boolean" && (p = !0), w === !0 && d.push(g.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`));
    if (p) {
      f["data-headlessui-state"] = d.join(" ");
      for (let g of d) f[`data-${g}`] = "";
    }
  }
  if (i === Ie && (Object.keys(lt(a)).length > 0 || Object.keys(lt(f)).length > 0)) if (!da(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(lt(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(lt(a)).concat(Object.keys(lt(f))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = u.props, d = p == null ? void 0 : p.className, g = typeof d == "function" ? (...C) => Nr(d(...C), a.className) : Nr(d, a.className), w = g ? { className: g } : {}, m = Zi(u.props, lt(hr(a, ["ref"])));
    for (let C in f) C in m && delete f[C];
    return fa(u, Object.assign({}, m, f, c, { ref: o(Ya(u), c.ref) }, w));
  }
  return Ir(i, Object.assign({}, hr(a, ["ref"]), i !== Ie && c, i !== Ie && f), u);
}
function Wa() {
  let e = q([]), t = ie((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function qa(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Zi(...e) {
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
function co(...e) {
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
function ye(e) {
  var t;
  return Object.assign(Bn(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function lt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function hr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ya(e) {
  return K.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Ka(e, t, n) {
  let [r, o] = re(n), i = e !== void 0, s = q(i), l = q(!1), a = q(!1);
  return i && !s.current && !l.current ? (l.current = !0, s.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && s.current && !a.current && (a.current = !0, s.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Q((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function Za(e) {
  let [t] = re(e);
  return t;
}
function Xi(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Qi(n, Ji(t, r), o);
  return n;
}
function Ji(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Qi(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Qi(e, Ji(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Xi(n, t, e);
}
let Xa = "span";
var Lt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Lt || {});
function Ja(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Se()({ ourProps: i, theirProps: o, slot: {}, defaultTag: Xa, name: "Hidden" });
}
let on = ye(Ja), Qa = ve(null);
function ec({ children: e }) {
  let t = he(Qa);
  if (!t) return K.createElement(K.Fragment, null, e);
  let { target: n } = t;
  return n ? Un(K.createElement(K.Fragment, null, e), n) : null;
}
function tc({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, s] = re(null), l = Ot();
  return de(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), K.createElement(ec, null, K.createElement(nc, { setForm: s, formId: t }), Xi(e).map(([a, c]) => K.createElement(on, { features: Lt.Hidden, ...lt({ key: a, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: a, value: c, ...o }) })));
}
function nc({ setForm: e, formId: t }) {
  return de(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : K.createElement(on, { features: Lt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let rc = ve(void 0);
function es() {
  return he(rc);
}
function oc(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && ic(n) ? !1 : r;
}
function ic(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let ts = Symbol();
function sc(e, t = !0) {
  return Object.assign(e, { [ts]: t });
}
function Oe(...e) {
  let t = q(e);
  de(() => {
    t.current = e;
  }, [e]);
  let n = Q((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[ts])) ? void 0 : n;
}
let Wn = ve(null);
Wn.displayName = "DescriptionContext";
function ns() {
  let e = he(Wn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ns), t;
  }
  return e;
}
function lc() {
  var e, t;
  return (t = (e = he(Wn)) == null ? void 0 : e.value) != null ? t : void 0;
}
function ac() {
  let [e, t] = re([]);
  return [e.length > 0 ? e.join(" ") : void 0, ue(() => function(n) {
    let r = Q((i) => (t((s) => [...s, i]), () => t((s) => {
      let l = s.slice(), a = l.indexOf(i);
      return a !== -1 && l.splice(a, 1), l;
    }))), o = ue(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return K.createElement(Wn.Provider, { value: o }, n.children);
  }, [t])];
}
let cc = "p";
function uc(e, t) {
  let n = ke(), r = ao(), { id: o = `headlessui-description-${n}`, ...i } = e, s = ns(), l = Oe(t);
  fe(() => s.register(o), [o, s.register]);
  let a = r || !1, c = ue(() => ({ ...s.slot, disabled: a }), [s.slot, a]), u = { ref: l, ...s.props, id: o };
  return Se()({ ourProps: u, theirProps: i, slot: c, defaultTag: cc, name: s.name || "Description" });
}
let dc = ye(uc), fc = Object.assign(dc, {});
var Re = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Re || {});
let qn = ve(null);
qn.displayName = "LabelContext";
function rs() {
  let e = he(qn);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, rs), t;
  }
  return e;
}
function Yn(e) {
  var t, n, r;
  let o = (n = (t = he(qn)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function hc({ inherit: e = !1 } = {}) {
  let t = Yn(), [n, r] = re([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, ue(() => function(i) {
    let s = Q((a) => (r((c) => [...c, a]), () => r((c) => {
      let u = c.slice(), f = u.indexOf(a);
      return f !== -1 && u.splice(f, 1), u;
    }))), l = ue(() => ({ register: s, slot: i.slot, name: i.name, props: i.props, value: i.value }), [s, i.slot, i.name, i.props, i.value]);
    return K.createElement(qn.Provider, { value: l }, i.children);
  }, [r])];
}
let pc = "label";
function mc(e, t) {
  var n;
  let r = ke(), o = rs(), i = es(), s = ao(), { id: l = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...u } = e, f = Oe(t);
  fe(() => o.register(l), [l, o.register]);
  let p = Q((m) => {
    let C = m.currentTarget;
    if (C instanceof HTMLLabelElement && m.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(m), C instanceof HTMLLabelElement) {
      let x = document.getElementById(C.htmlFor);
      if (x) {
        let S = x.getAttribute("disabled");
        if (S === "true" || S === "") return;
        let R = x.getAttribute("aria-disabled");
        if (R === "true" || R === "") return;
        (x instanceof HTMLInputElement && (x.type === "radio" || x.type === "checkbox") || x.role === "radio" || x.role === "checkbox" || x.role === "switch") && x.click(), x.focus({ preventScroll: !0 });
      }
    }
  }), d = s || !1, g = ue(() => ({ ...o.slot, disabled: d }), [o.slot, d]), w = { ref: f, ...o.props, id: l, htmlFor: a, onClick: p };
  return c && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Se()({ ourProps: w, theirProps: u, slot: g, defaultTag: a ? pc : "div", name: o.name || "Label" });
}
let gc = ye(mc), vc = Object.assign(gc, {}), wc = ve(() => {
});
function bc({ value: e, children: t }) {
  return K.createElement(wc.Provider, { value: e }, t);
}
function Dt(e, t, n) {
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
      const g = Math.round((Date.now() - u) * 100) / 100, w = Math.round((Date.now() - d) * 100) / 100, m = w / 16, C = (x, S) => {
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
function Vo(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const yc = (e, t) => Math.abs(e - t) <= 1, xc = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
};
var qt = { NODE_ENV: "production" };
const Ho = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Sc = (e) => e, Cc = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++)
    r.push(o);
  return r;
}, Ec = (e, t) => {
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
  if (o(Ho(n)), !r.ResizeObserver)
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
      o(Ho(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, zo = {
  passive: !0
}, Bo = typeof window > "u" ? !0 : "onscrollend" in window, Rc = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const i = e.options.useScrollendEvent && Bo ? () => {
  } : xc(
    r,
    () => {
      t(o, !1);
    },
    e.options.isScrollingResetDelay
  ), s = (u) => () => {
    const { horizontal: f, isRtl: p } = e.options;
    o = f ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, u);
  }, l = s(!0), a = s(!1);
  a(), n.addEventListener("scroll", l, zo);
  const c = e.options.useScrollendEvent && Bo;
  return c && n.addEventListener("scrollend", a, zo), () => {
    n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", a);
  };
}, $c = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, Mc = (e, {
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
class Tc {
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
        getItemKey: Sc,
        rangeExtractor: Cc,
        onChange: () => {
        },
        measureElement: $c,
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
    }, this.maybeNotify = Dt(
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
    }, this.getMeasurementOptions = Dt(
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
    ), this.getMeasurements = Dt(
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
          const f = i(u), p = this.options.lanes === 1 ? c[u - 1] : this.getFurthestMeasurement(c, u), d = p ? p.end + this.options.gap : r + o, g = l.get(f), w = typeof g == "number" ? g : this.options.estimateSize(u), m = d + w, C = p ? p.lane : u % this.options.lanes;
          c[u] = {
            index: u,
            start: d,
            size: w,
            end: m,
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
    ), this.calculateRange = Dt(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Oc({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: i
      }) : null,
      {
        key: qt.NODE_ENV !== "production",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = Dt(
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
    }, this.getVirtualItems = Dt(
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
        return Vo(
          r[os(
            0,
            r.length - 1,
            (o) => Vo(r[o]).start,
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
          yc(u, f) || this.scrollToIndex(n, { align: l, behavior: o });
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
const os = (e, t, n, r) => {
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
function Oc({
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
  let s = os(
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
const jo = typeof document < "u" ? M.useLayoutEffect : M.useEffect;
function _c(e) {
  const t = M.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (o, i) => {
      var s;
      i ? xt(t) : t(), (s = e.onChange) == null || s.call(e, o, i);
    }
  }, [r] = M.useState(
    () => new Tc(n)
  );
  return r.setOptions(n), jo(() => r._didMount(), []), jo(() => r._willUpdate()), r;
}
function is(e) {
  return _c({
    observeElementRect: Ec,
    observeElementOffset: Rc,
    scrollToFn: Mc,
    ...e
  });
}
function Ic(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Ac(e = Ic) {
  return ie((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Dc(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Uo(e, t = !1) {
  let [n, r] = un(() => ({}), {}), o = ue(() => Dc(e), [e, n]);
  return fe(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let Fc = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function ss(e, t) {
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
function ls(e) {
  return ha(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Pc = new Fc(() => ss(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function zt(e, t) {
  let n = Pc.get(t), r = ke(), o = ls(n);
  if (fe(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), s = o.length;
  return i === -1 && (i = s, s += 1), i === s - 1;
}
let Lr = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map();
function Go(e) {
  var t;
  let n = (t = Qt.get(e)) != null ? t : 0;
  return Qt.set(e, n + 1), n !== 0 ? () => Wo(e) : (Lr.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Wo(e));
}
function Wo(e) {
  var t;
  let n = (t = Qt.get(e)) != null ? t : 1;
  if (n === 1 ? Qt.delete(e) : Qt.set(e, n - 1), n !== 1) return;
  let r = Lr.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Lr.delete(e));
}
function as(e, { allowed: t, disallowed: n } = {}) {
  let r = zt(e, "inert-others");
  fe(() => {
    var o, i;
    if (!r) return;
    let s = Ye();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && s.add(Go(a));
    let l = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of l) {
      if (!a) continue;
      let c = Ht(a);
      if (!c) continue;
      let u = a.parentElement;
      for (; u && u !== c.body; ) {
        for (let f of u.children) l.some((p) => f.contains(p)) || s.add(Go(f));
        u = u.parentElement;
      }
    }
    return s.dispose;
  }, [r, t, n]);
}
function cs(e, t, n) {
  let r = vt((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  de(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Ye();
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
let Pn = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), kc = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(nt || {}), Vr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Vr || {}), Nc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Nc || {});
function Lc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Pn)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Vc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(kc)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var us = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(us || {});
function Hc(e, t = 0) {
  var n;
  return e === ((n = Ht(e)) == null ? void 0 : n.body) ? !1 : Ae(t, { 0() {
    return e.matches(Pn);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Pn)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var zc = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(zc || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function ot(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Bc = ["textarea", "input"].join(",");
function jc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Bc)) != null ? n : !1;
}
function ds(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function en(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? ds(e) : e : t & 64 ? Vc(e) : Lc(e);
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, u = 0, f = s.length, p;
  do {
    if (u >= f || u + f <= 0) return 0;
    let d = a + u;
    if (t & 16) d = (d + f) % f;
    else {
      if (d < 0) return 3;
      if (d >= f) return 1;
    }
    p = s[d], p == null || p.focus(c), u += l;
  } while (p !== i.activeElement);
  return t & 6 && jc(p) && p.select(), 2;
}
function fs() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Uc() {
  return /Android/gi.test(window.navigator.userAgent);
}
function hs() {
  return fs() || Uc();
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
function ps(e, t, n, r) {
  let o = vt(n);
  de(() => {
    if (!e) return;
    function i(s) {
      o.current(s);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const qo = 30;
function ms(e, t, n) {
  let r = zt(e, "outside-click"), o = vt(n), i = ie(function(a, c) {
    if (a.defaultPrevented) return;
    let u = c(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let f = function p(d) {
      return typeof d == "function" ? p(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(t);
    for (let p of f) if (p !== null && (p.contains(u) || a.composed && a.composedPath().includes(p))) return;
    return !Hc(u, us.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), s = q(null);
  Yt(r, "pointerdown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), Yt(r, "mousedown", (a) => {
    var c, u;
    s.current = ((u = (c = a.composedPath) == null ? void 0 : c.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), Yt(r, "click", (a) => {
    hs() || s.current && (i(a, () => s.current), s.current = null);
  }, !0);
  let l = q({ x: 0, y: 0 });
  Yt(r, "touchstart", (a) => {
    l.current.x = a.touches[0].clientX, l.current.y = a.touches[0].clientY;
  }, !0), Yt(r, "touchend", (a) => {
    let c = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(c.x - l.current.x) >= qo || Math.abs(c.y - l.current.y) >= qo)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), ps(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function _t(...e) {
  return ue(() => Ht(...e), [...e]);
}
function uo(e, t, n, r) {
  let o = vt(n);
  de(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function gs(e) {
  let t = q({ value: "", selectionStart: null, selectionEnd: null });
  return uo(e, "blur", (n) => {
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
function Gc(e, t) {
  return ue(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function Wc() {
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
function qc() {
  return fs() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let l = Ye();
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
function Yc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Kc(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Ct = ss(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: Ye(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Kc(n) }, o = [qc(), Wc(), Yc()];
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
function Zc(e, t, n = () => ({ containers: [] })) {
  let r = ls(Ct), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return fe(() => {
    if (!(!t || !e)) return Ct.dispatch("PUSH", t, n), () => Ct.dispatch("POP", t, n);
  }, [e, t]), i;
}
function vs(e, t, n = () => [document.body]) {
  let r = zt(e, "scroll-lock");
  Zc(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Yo(e) {
  return [e.screenX, e.screenY];
}
function Xc() {
  let e = q([-1, -1]);
  return { wasMoved(t) {
    let n = Yo(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Yo(t);
  } };
}
function Jc(e = 0) {
  let [t, n] = re(e), r = ie((a) => n(a), [t]), o = ie((a) => n((c) => c | a), [t]), i = ie((a) => (t & a) === a, [t]), s = ie((a) => n((c) => c & ~a), [n]), l = ie((a) => n((c) => c ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: s, toggleFlag: l };
}
var Qc = { NODE_ENV: "production" }, Ko, Zo;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Ko = process == null ? void 0 : Qc) == null ? void 0 : Ko.NODE_ENV) === "test" && typeof ((Zo = Element == null ? void 0 : Element.prototype) == null ? void 0 : Zo.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var eu = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(eu || {});
function ws(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function bs(e, t, n, r) {
  let [o, i] = re(n), { hasFlag: s, addFlag: l, removeFlag: a } = Jc(e && o ? 3 : 0), c = q(!1), u = q(!1), f = Ot();
  return fe(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && l(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), tu(t, { inFlight: c, prepare() {
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
function tu(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = Ye();
  return ru(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(nu(e, r));
    });
  }), i.dispose;
}
function nu(e, t) {
  var n, r;
  let o = Ye();
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
function ru(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function ou(e, { container: t, accept: n, walk: r }) {
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
function sn(e, t) {
  let n = q([]), r = Q(e);
  de(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries()) if (n.current[i] !== s) {
      let l = r(t, o);
      return n.current = t, l;
    }
  }, [r, ...t]);
}
function Kn() {
  return typeof window < "u";
}
function Bt(e) {
  return ys(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function De(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ze(e) {
  var t;
  return (t = (ys(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ys(e) {
  return Kn() ? e instanceof Node || e instanceof De(e).Node : !1;
}
function Me(e) {
  return Kn() ? e instanceof Element || e instanceof De(e).Element : !1;
}
function Ke(e) {
  return Kn() ? e instanceof HTMLElement || e instanceof De(e).HTMLElement : !1;
}
function Xo(e) {
  return !Kn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof De(e).ShadowRoot;
}
function fn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = He(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function iu(e) {
  return ["table", "td", "th"].includes(Bt(e));
}
function Zn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fo(e) {
  const t = ho(), n = Me(e) ? He(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function su(e) {
  let t = ft(e);
  for (; Ke(t) && !Vt(t); ) {
    if (fo(t))
      return t;
    if (Zn(t))
      return null;
    t = ft(t);
  }
  return null;
}
function ho() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vt(e) {
  return ["html", "body", "#document"].includes(Bt(e));
}
function He(e) {
  return De(e).getComputedStyle(e);
}
function Xn(e) {
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
    Xo(e) && e.host || // Fallback.
    Ze(e)
  );
  return Xo(t) ? t.host : t;
}
function xs(e) {
  const t = ft(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(t) && fn(t) ? t : xs(t);
}
function ln(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = De(o);
  if (i) {
    const l = Hr(s);
    return t.concat(s, s.visualViewport || [], fn(o) ? o : [], l && n ? ln(l) : []);
  }
  return t.concat(o, ln(o, [], n));
}
function Hr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function lu() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Mt = Math.min, $e = Math.max, an = Math.round, xn = Math.floor, qe = (e) => ({
  x: e,
  y: e
}), au = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cu = {
  start: "end",
  end: "start"
};
function Jo(e, t, n) {
  return $e(e, Mt(t, n));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ht(e) {
  return e.split("-")[0];
}
function hn(e) {
  return e.split("-")[1];
}
function Ss(e) {
  return e === "x" ? "y" : "x";
}
function Cs(e) {
  return e === "y" ? "height" : "width";
}
function dt(e) {
  return ["top", "bottom"].includes(ht(e)) ? "y" : "x";
}
function Es(e) {
  return Ss(dt(e));
}
function uu(e, t, n) {
  n === void 0 && (n = !1);
  const r = hn(e), o = Es(e), i = Cs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = kn(s)), [s, kn(s)];
}
function du(e) {
  const t = kn(e);
  return [zr(e), t, zr(t)];
}
function zr(e) {
  return e.replace(/start|end/g, (t) => cu[t]);
}
function fu(e, t, n) {
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
function hu(e, t, n, r) {
  const o = hn(e);
  let i = fu(ht(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(zr)))), i;
}
function kn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => au[t]);
}
function pu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mu(e) {
  return typeof e != "number" ? pu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nn(e) {
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
function Qo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = dt(t), s = Es(t), l = Cs(s), a = ht(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
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
  switch (hn(t)) {
    case "start":
      d[s] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const gu = async (e, t, n) => {
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
  } = Qo(c, r, a), p = r, d = {}, g = 0;
  for (let w = 0; w < l.length; w++) {
    const {
      name: m,
      fn: C
    } = l[w], {
      x,
      y: S,
      data: R,
      reset: O
    } = await C({
      x: u,
      y: f,
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
    u = x ?? u, f = S ?? f, d = {
      ...d,
      [m]: {
        ...d[m],
        ...R
      }
    }, O && g <= 50 && (g++, typeof O == "object" && (O.placement && (p = O.placement), O.rects && (c = O.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : O.rects), {
      x: u,
      y: f
    } = Qo(c, p, a)), w = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: d
  };
};
async function Jn(e, t) {
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
    altBoundary: p = !1,
    padding: d = 0
  } = jt(t, e), g = mu(d), m = l[p ? f === "floating" ? "reference" : "floating" : f], C = Nn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
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
  }, O = Nn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: x,
    offsetParent: S,
    strategy: a
  }) : x);
  return {
    top: (C.top - O.top + g.top) / R.y,
    bottom: (O.bottom - C.bottom + g.bottom) / R.y,
    left: (C.left - O.left + g.left) / R.x,
    right: (O.right - C.right + g.right) / R.x
  };
}
const vu = function(e) {
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
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: w = !0,
        ...m
      } = jt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = ht(o), x = dt(l), S = ht(l) === l, R = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), O = p || (S || !w ? [kn(l)] : du(l)), F = g !== "none";
      !p && F && O.push(...hu(l, w, g, R));
      const A = [l, ...O], y = await Jn(t, m), h = [];
      let b = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && h.push(y[C]), f) {
        const N = uu(o, s, R);
        h.push(y[N[0]], y[N[1]]);
      }
      if (b = [...b, {
        placement: o,
        overflows: h
      }], !h.every((N) => N <= 0)) {
        var E, T;
        const N = (((E = i.flip) == null ? void 0 : E.index) || 0) + 1, $ = A[N];
        if ($) {
          var L;
          const _ = f === "alignment" ? x !== dt($) : !1, I = ((L = b[0]) == null ? void 0 : L.overflows[0]) > 0;
          if (!_ || I)
            return {
              data: {
                index: N,
                overflows: b
              },
              reset: {
                placement: $
              }
            };
        }
        let k = (T = b.filter((_) => _.overflows[0] <= 0).sort((_, I) => _.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!k)
          switch (d) {
            case "bestFit": {
              var D;
              const _ = (D = b.filter((I) => {
                if (F) {
                  const z = dt(I.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((z) => z > 0).reduce((z, H) => z + H, 0)]).sort((I, z) => I[1] - z[1])[0]) == null ? void 0 : D[0];
              _ && (k = _);
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
async function wu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ht(n), l = hn(n), a = dt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && a ? -1 : 1, f = jt(t, e);
  let {
    mainAxis: p,
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
    y: p * c
  } : {
    x: p * c,
    y: d * u
  };
}
const bu = function(e) {
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
      } = t, a = await wu(t, e);
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
}, yu = function(e) {
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
              x: C,
              y: x
            } = m;
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
      }, u = await Jn(t, a), f = dt(ht(o)), p = Ss(f);
      let d = c[p], g = c[f];
      if (i) {
        const m = p === "y" ? "top" : "left", C = p === "y" ? "bottom" : "right", x = d + u[m], S = d - u[C];
        d = Jo(x, d, S);
      }
      if (s) {
        const m = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", x = g + u[m], S = g - u[C];
        g = Jo(x, g, S);
      }
      const w = l.fn({
        ...t,
        [p]: d,
        [f]: g
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
}, xu = function(e) {
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
      } = jt(e, t), u = await Jn(t, c), f = ht(o), p = hn(o), d = dt(o) === "y", {
        width: g,
        height: w
      } = i.floating;
      let m, C;
      f === "top" || f === "bottom" ? (m = f, C = p === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = f, m = p === "end" ? "top" : "bottom");
      const x = w - u.top - u.bottom, S = g - u.left - u.right, R = Mt(w - u[m], x), O = Mt(g - u[C], S), F = !t.middlewareData.shift;
      let A = R, y = O;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (y = S), (r = t.middlewareData.shift) != null && r.enabled.y && (A = x), F && !p) {
        const b = $e(u.left, 0), E = $e(u.right, 0), T = $e(u.top, 0), L = $e(u.bottom, 0);
        d ? y = g - 2 * (b !== 0 || E !== 0 ? b + E : $e(u.left, u.right)) : A = w - 2 * (T !== 0 || L !== 0 ? T + L : $e(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: y,
        availableHeight: A
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
function Rs(e) {
  const t = He(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ke(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = an(n) !== i || an(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function po(e) {
  return Me(e) ? e : e.contextElement;
}
function kt(e) {
  const t = po(e);
  if (!Ke(t))
    return qe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Rs(t);
  let s = (i ? an(n.width) : n.width) / r, l = (i ? an(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Su = /* @__PURE__ */ qe(0);
function $s(e) {
  const t = De(e);
  return !ho() || !t.visualViewport ? Su : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Cu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== De(e) ? !1 : t;
}
function Tt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = po(e);
  let s = qe(1);
  t && (r ? Me(r) && (s = kt(r)) : s = kt(e));
  const l = Cu(i, n, r) ? $s(i) : qe(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = De(i), d = r && Me(r) ? De(r) : r;
    let g = p, w = Hr(g);
    for (; w && r && d !== g; ) {
      const m = kt(w), C = w.getBoundingClientRect(), x = He(w), S = C.left + (w.clientLeft + parseFloat(x.paddingLeft)) * m.x, R = C.top + (w.clientTop + parseFloat(x.paddingTop)) * m.y;
      a *= m.x, c *= m.y, u *= m.x, f *= m.y, a += S, c += R, g = De(w), w = Hr(g);
    }
  }
  return Nn({
    width: u,
    height: f,
    x: a,
    y: c
  });
}
function mo(e, t) {
  const n = Xn(e).scrollLeft;
  return t ? t.left + n : Tt(Ze(e)).left + n;
}
function Ms(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    mo(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Eu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Ze(r), l = t ? Zn(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = qe(1);
  const u = qe(0), f = Ke(r);
  if ((f || !f && !i) && ((Bt(r) !== "body" || fn(s)) && (a = Xn(r)), Ke(r))) {
    const d = Tt(r);
    c = kt(r), u.x = d.x + r.clientLeft, u.y = d.y + r.clientTop;
  }
  const p = s && !f && !i ? Ms(s, a, !0) : qe(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y + p.y
  };
}
function Ru(e) {
  return Array.from(e.getClientRects());
}
function $u(e) {
  const t = Ze(e), n = Xn(e), r = e.ownerDocument.body, o = $e(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = $e(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + mo(e);
  const l = -n.scrollTop;
  return He(r).direction === "rtl" && (s += $e(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Mu(e, t) {
  const n = De(e), r = Ze(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = ho();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Tu(e, t) {
  const n = Tt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ke(e) ? kt(e) : qe(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function ei(e, t, n) {
  let r;
  if (t === "viewport")
    r = Mu(e, n);
  else if (t === "document")
    r = $u(Ze(e));
  else if (Me(t))
    r = Tu(t, n);
  else {
    const o = $s(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Nn(r);
}
function Ts(e, t) {
  const n = ft(e);
  return n === t || !Me(n) || Vt(n) ? !1 : He(n).position === "fixed" || Ts(n, t);
}
function Ou(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ln(e, [], !1).filter((l) => Me(l) && Bt(l) !== "body"), o = null;
  const i = He(e).position === "fixed";
  let s = i ? ft(e) : e;
  for (; Me(s) && !Vt(s); ) {
    const l = He(s), a = fo(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || fn(s) && !a && Ts(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = ft(s);
  }
  return t.set(e, r), r;
}
function _u(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Zn(t) ? [] : Ou(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, u) => {
    const f = ei(t, u, o);
    return c.top = $e(f.top, c.top), c.right = Mt(f.right, c.right), c.bottom = Mt(f.bottom, c.bottom), c.left = $e(f.left, c.left), c;
  }, ei(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Iu(e) {
  const {
    width: t,
    height: n
  } = Rs(e);
  return {
    width: t,
    height: n
  };
}
function Au(e, t, n) {
  const r = Ke(t), o = Ze(t), i = n === "fixed", s = Tt(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = qe(0);
  function c() {
    a.x = mo(o);
  }
  if (r || !r && !i)
    if ((Bt(t) !== "body" || fn(o)) && (l = Xn(t)), r) {
      const d = Tt(t, !0, i, t);
      a.x = d.x + t.clientLeft, a.y = d.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Ms(o, l) : qe(0), f = s.left + l.scrollLeft - a.x - u.x, p = s.top + l.scrollTop - a.y - u.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function pr(e) {
  return He(e).position === "static";
}
function ti(e, t) {
  if (!Ke(e) || He(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ze(e) === n && (n = n.ownerDocument.body), n;
}
function Os(e, t) {
  const n = De(e);
  if (Zn(e))
    return n;
  if (!Ke(e)) {
    let o = ft(e);
    for (; o && !Vt(o); ) {
      if (Me(o) && !pr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = ti(e, t);
  for (; r && iu(r) && pr(r); )
    r = ti(r, t);
  return r && Vt(r) && pr(r) && !fo(r) ? n : r || su(e) || n;
}
const Du = async function(e) {
  const t = this.getOffsetParent || Os, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Au(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Fu(e) {
  return He(e).direction === "rtl";
}
const Pu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Eu,
  getDocumentElement: Ze,
  getClippingRect: _u,
  getOffsetParent: Os,
  getElementRects: Du,
  getClientRects: Ru,
  getDimensions: Iu,
  getScale: kt,
  isElement: Me,
  isRTL: Fu
};
function _s(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ku(e, t) {
  let n = null, r;
  const o = Ze(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: p,
      height: d
    } = c;
    if (l || t(), !p || !d)
      return;
    const g = xn(f), w = xn(o.clientWidth - (u + p)), m = xn(o.clientHeight - (f + d)), C = xn(u), S = {
      rootMargin: -g + "px " + -w + "px " + -m + "px " + -C + "px",
      threshold: $e(0, Mt(1, a)) || 1
    };
    let R = !0;
    function O(F) {
      const A = F[0].intersectionRatio;
      if (A !== a) {
        if (!R)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !_s(c, e.getBoundingClientRect()) && s(), R = !1;
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
function Nu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = po(e), u = o || i ? [...c ? ln(c) : [], ...ln(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const f = c && l ? ku(c, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((C) => {
    let [x] = C;
    x && x.target === c && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = d) == null || S.observe(t);
    })), n();
  }), c && !a && d.observe(c), d.observe(t));
  let g, w = a ? Tt(e) : null;
  a && m();
  function m() {
    const C = Tt(e);
    w && !_s(w, C) && n(), w = C, g = requestAnimationFrame(m);
  }
  return n(), () => {
    var C;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), f == null || f(), (C = d) == null || C.disconnect(), d = null, a && cancelAnimationFrame(g);
  };
}
const mr = Jn, Lu = bu, Vu = yu, Hu = vu, zu = xu, Bu = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Pu,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return gu(e, t, {
    ...o,
    platform: i
  });
};
var Tn = typeof document < "u" ? jn : de;
function Ln(e, t) {
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
        if (!Ln(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ln(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Is(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ni(e, t) {
  const n = Is(e);
  return Math.round(t * n) / n;
}
function gr(e) {
  const t = M.useRef(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
function ju(e) {
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
  } = e, [u, f] = M.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = M.useState(r);
  Ln(p, r) || d(r);
  const [g, w] = M.useState(null), [m, C] = M.useState(null), x = M.useCallback((_) => {
    _ !== F.current && (F.current = _, w(_));
  }, []), S = M.useCallback((_) => {
    _ !== A.current && (A.current = _, C(_));
  }, []), R = i || g, O = s || m, F = M.useRef(null), A = M.useRef(null), y = M.useRef(u), h = a != null, b = gr(a), E = gr(o), T = gr(c), L = M.useCallback(() => {
    if (!F.current || !A.current)
      return;
    const _ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    E.current && (_.platform = E.current), Bu(F.current, A.current, _).then((I) => {
      const z = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      D.current && !Ln(y.current, z) && (y.current = z, Dn.flushSync(() => {
        f(z);
      }));
    });
  }, [p, t, n, E, T]);
  Tn(() => {
    c === !1 && y.current.isPositioned && (y.current.isPositioned = !1, f((_) => ({
      ..._,
      isPositioned: !1
    })));
  }, [c]);
  const D = M.useRef(!1);
  Tn(() => (D.current = !0, () => {
    D.current = !1;
  }), []), Tn(() => {
    if (R && (F.current = R), O && (A.current = O), R && O) {
      if (b.current)
        return b.current(R, O, L);
      L();
    }
  }, [R, O, L, b, h]);
  const N = M.useMemo(() => ({
    reference: F,
    floating: A,
    setReference: x,
    setFloating: S
  }), [x, S]), $ = M.useMemo(() => ({
    reference: R,
    floating: O
  }), [R, O]), k = M.useMemo(() => {
    const _ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return _;
    const I = ni($.floating, u.x), z = ni($.floating, u.y);
    return l ? {
      ..._,
      transform: "translate(" + I + "px, " + z + "px)",
      ...Is($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: z
    };
  }, [n, l, $.floating, u.x, u.y]);
  return M.useMemo(() => ({
    ...u,
    update: L,
    refs: N,
    elements: $,
    floatingStyles: k
  }), [u, L, N, $, k]);
}
const As = (e, t) => ({
  ...Lu(e),
  options: [e, t]
}), Uu = (e, t) => ({
  ...Vu(e),
  options: [e, t]
}), Gu = (e, t) => ({
  ...Hu(e),
  options: [e, t]
}), Wu = (e, t) => ({
  ...zu(e),
  options: [e, t]
}), Ds = {
  ...M
}, qu = Ds.useInsertionEffect, Yu = qu || ((e) => e());
function Fs(e) {
  const t = M.useRef(() => {
  });
  return Yu(() => {
    t.current = e;
  }), M.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Br = typeof document < "u" ? jn : de;
let ri = !1, Ku = 0;
const oi = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ku++
);
function Zu() {
  const [e, t] = M.useState(() => ri ? oi() : void 0);
  return Br(() => {
    e == null && t(oi());
  }, []), M.useEffect(() => {
    ri = !0;
  }, []), e;
}
const Xu = Ds.useId, Ju = Xu || Zu;
function Qu() {
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
const ed = /* @__PURE__ */ M.createContext(null), td = /* @__PURE__ */ M.createContext(null), nd = () => {
  var e;
  return ((e = M.useContext(ed)) == null ? void 0 : e.id) || null;
}, rd = () => M.useContext(td), od = "data-floating-ui-focusable";
function id(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Ju(), i = M.useRef({}), [s] = M.useState(() => Qu()), l = nd() != null, [a, c] = M.useState(r.reference), u = Fs((d, g, w) => {
    i.current.openEvent = d ? g : void 0, s.emit("openchange", {
      open: d,
      event: g,
      reason: w,
      nested: l
    }), n == null || n(d, g, w);
  }), f = M.useMemo(() => ({
    setPositionReference: c
  }), []), p = M.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return M.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: p,
    events: s,
    floatingId: o,
    refs: f
  }), [t, u, p, s, o, f]);
}
function sd(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = id({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = M.useState(null), [l, a] = M.useState(null), u = (o == null ? void 0 : o.domReference) || i, f = M.useRef(null), p = rd();
  Br(() => {
    u && (f.current = u);
  }, [u]);
  const d = ju({
    ...e,
    elements: {
      ...o,
      ...l && {
        reference: l
      }
    }
  }), g = M.useCallback((S) => {
    const R = Me(S) ? {
      getBoundingClientRect: () => S.getBoundingClientRect(),
      contextElement: S
    } : S;
    a(R), d.refs.setReference(R);
  }, [d.refs]), w = M.useCallback((S) => {
    (Me(S) || S === null) && (f.current = S, s(S)), (Me(d.refs.reference.current) || d.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    S !== null && !Me(S)) && d.refs.setReference(S);
  }, [d.refs]), m = M.useMemo(() => ({
    ...d.refs,
    setReference: w,
    setPositionReference: g,
    domReference: f
  }), [d.refs, w, g]), C = M.useMemo(() => ({
    ...d.elements,
    domReference: u
  }), [d.elements, u]), x = M.useMemo(() => ({
    ...d,
    ...r,
    refs: m,
    elements: C,
    nodeId: t
  }), [d, m, C, t, r]);
  return Br(() => {
    r.dataRef.current.floatingContext = x;
    const S = p == null ? void 0 : p.nodesRef.current.find((R) => R.id === t);
    S && (S.context = x);
  }), M.useMemo(() => ({
    ...d,
    context: x,
    refs: m,
    elements: C
  }), [d, m, C, x]);
}
const ii = "active", si = "selected";
function vr(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [ii]: s,
      [si]: l,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [od]: ""
    },
    ...i,
    ...t.map((s) => {
      const l = s ? s[n] : null;
      return typeof l == "function" ? e ? l(e) : null : l;
    }).concat(e).reduce((s, l) => (l && Object.entries(l).forEach((a) => {
      let [c, u] = a;
      if (!(o && [ii, si].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var f;
            (f = r.get(c)) == null || f.push(u), s[c] = function() {
              for (var p, d = arguments.length, g = new Array(d), w = 0; w < d; w++)
                g[w] = arguments[w];
              return (p = r.get(c)) == null ? void 0 : p.map((m) => m(...g)).find((m) => m !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function ld(e) {
  e === void 0 && (e = []);
  const t = e.map((l) => l == null ? void 0 : l.reference), n = e.map((l) => l == null ? void 0 : l.floating), r = e.map((l) => l == null ? void 0 : l.item), o = M.useCallback(
    (l) => vr(l, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = M.useCallback(
    (l) => vr(l, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = M.useCallback(
    (l) => vr(l, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return M.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
function li(e, t) {
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
const ad = (e) => ({
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
        floating: p
      }
    } = t, d = n.current[s], g = (c == null ? void 0 : c.current) || p, w = p.clientTop || g.clientTop, m = p.clientTop !== 0, C = g.clientTop !== 0, x = p === g;
    if (!d)
      return {};
    const S = {
      ...t,
      ...await As(-d.offsetTop - p.clientTop - f.reference.height / 2 - d.offsetHeight / 2 - i).fn(t)
    }, R = await mr(li(S, g.scrollHeight + w + p.clientTop), u), O = await mr(S, {
      ...u,
      elementContext: "reference"
    }), F = $e(0, R.top), A = S.y + F, b = (g.scrollHeight > g.clientHeight ? (E) => E : an)($e(0, g.scrollHeight + (m && x || C ? w * 2 : 0) - F - $e(0, R.bottom)));
    if (g.style.maxHeight = b + "px", g.scrollTop = F, o) {
      const E = g.offsetHeight < d.offsetHeight * Mt(l, n.current.length) - 1 || O.top >= -a || O.bottom >= -a;
      Dn.flushSync(() => o(E));
    }
    return r && (r.current = await mr(li({
      ...S,
      y: A
    }, g.offsetHeight + w + p.clientTop), u)), {
      y: A
    };
  }
});
function cd(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: s,
    onChange: l
  } = t, a = Fs(l), c = M.useRef(!1), u = M.useRef(null), f = M.useRef(null);
  M.useEffect(() => {
    if (!o) return;
    function d(w) {
      if (w.ctrlKey || !g || i.current == null)
        return;
      const m = w.deltaY, C = i.current.top >= -0.5, x = i.current.bottom >= -0.5, S = g.scrollHeight - g.clientHeight, R = m < 0 ? -1 : 1, O = m < 0 ? "max" : "min";
      g.scrollHeight <= g.clientHeight || (!C && m > 0 || !x && m < 0 ? (w.preventDefault(), Dn.flushSync(() => {
        a((F) => F + Math[O](m, S * R));
      })) : /firefox/i.test(lu()) && (g.scrollTop += m));
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
  const p = M.useMemo(() => ({
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
          (i.current.bottom < -0.5 && g < -1 || i.current.top < -0.5 && g > 1) && Dn.flushSync(() => a((w) => w + g));
        }
        requestAnimationFrame(() => {
          u.current = d.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, s]);
  return M.useMemo(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let pn = ve({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
pn.displayName = "FloatingContext";
let go = ve(null);
go.displayName = "PlacementContext";
function ud(e) {
  return ue(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function dd() {
  return he(pn).setReference;
}
function fd() {
  let { getFloatingProps: e, slot: t } = he(pn);
  return ie((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function hd(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = he(go), n = ue(() => e, [JSON.stringify(e, (o, i) => {
    var s;
    return (s = i == null ? void 0 : i.outerHTML) != null ? s : i;
  })]);
  fe(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = he(pn);
  return ue(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let ai = 4;
function pd({ children: e, enabled: t = !0 }) {
  let [n, r] = re(null), [o, i] = re(0), s = q(null), [l, a] = re(null);
  md(l);
  let c = t && n !== null && l !== null, { to: u = "bottom", gap: f = 0, offset: p = 0, padding: d = 0, inner: g } = gd(n, l), [w, m = "center"] = u.split(" ");
  fe(() => {
    c && i(0);
  }, [c]);
  let { refs: C, floatingStyles: x, context: S } = sd({ open: c, placement: w === "selection" ? m === "center" ? "bottom" : `bottom-${m}` : m === "center" ? `${w}` : `${w}-${m}`, strategy: "absolute", transform: !1, middleware: [As({ mainAxis: w === "selection" ? 0 : f, crossAxis: p }), Uu({ padding: d }), w !== "selection" && Gu({ padding: d }), w === "selection" && g ? ad({ ...g, padding: d, overflowRef: s, offset: o, minItemsVisible: ai, referenceOverflowThreshold: d, onFallbackChange(E) {
    var T, L;
    if (!E) return;
    let D = S.elements.floating;
    if (!D) return;
    let N = parseFloat(getComputedStyle(D).scrollPaddingBottom) || 0, $ = Math.min(ai, D.childElementCount), k = 0, _ = 0;
    for (let I of (L = (T = S.elements.floating) == null ? void 0 : T.childNodes) != null ? L : []) if (I instanceof HTMLElement) {
      let z = I.offsetTop, H = z + I.clientHeight + N, V = D.scrollTop, P = V + D.clientHeight;
      if (z >= V && H <= P) $--;
      else {
        _ = Math.max(0, Math.min(H, P) - Math.max(z, V)), k = I.clientHeight;
        break;
      }
    }
    $ >= 1 && i((I) => {
      let z = k * $ - _ + N;
      return I >= z ? I : z;
    });
  } }) : null, Wu({ padding: d, apply({ availableWidth: E, availableHeight: T, elements: L }) {
    Object.assign(L.floating.style, { overflow: "auto", maxWidth: `${E}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${T}px)` });
  } })].filter(Boolean), whileElementsMounted: Nu }), [R = w, O = m] = S.placement.split("-");
  w === "selection" && (R = "selection");
  let F = ue(() => ({ anchor: [R, O].filter(Boolean).join(" ") }), [R, O]), A = cd(S, { overflowRef: s, onChange: i }), { getReferenceProps: y, getFloatingProps: h } = ld([A]), b = Q((E) => {
    a(E), C.setFloating(E);
  });
  return M.createElement(go.Provider, { value: r }, M.createElement(pn.Provider, { value: { setFloating: b, setReference: C.setReference, styles: x, getReferenceProps: y, getFloatingProps: h, slot: F } }, e));
}
function md(e) {
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
function gd(e, t) {
  var n, r, o;
  let i = wr((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), s = wr((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), l = wr((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: s, padding: l };
}
function wr(e, t, n = void 0) {
  let r = Ot(), o = Q((a, c) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!c) return [n, null];
      let u = ci(a, c);
      return [u, (f) => {
        let p = Ps(a);
        {
          let d = p.map((g) => window.getComputedStyle(c).getPropertyValue(g));
          r.requestAnimationFrame(function g() {
            r.nextFrame(g);
            let w = !1;
            for (let [C, x] of p.entries()) {
              let S = window.getComputedStyle(c).getPropertyValue(x);
              if (d[C] !== S) {
                d[C] = S, w = !0;
                break;
              }
            }
            if (!w) return;
            let m = ci(a, c);
            u !== m && (f(m), u = m);
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
function Ps(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Ps(o)] : [r];
  }
  return [];
}
function ci(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function vd({ children: e, freeze: t }) {
  let n = jr(t, e);
  return K.createElement(K.Fragment, null, n);
}
function jr(e, t) {
  let [n, r] = re(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Qn = ve(null);
Qn.displayName = "OpenClosedContext";
var Te = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Te || {});
function mn() {
  return he(Qn);
}
function ks({ value: e, children: t }) {
  return K.createElement(Qn.Provider, { value: e }, t);
}
function wd({ children: e }) {
  return K.createElement(Qn.Provider, { value: null }, e);
}
function bd(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Ge = [];
bd(() => {
  function e(t) {
    if (!(t.target instanceof HTMLElement) || t.target === document.body || Ge[0] === t.target) return;
    let n = t.target;
    n = n.closest(Pn), Ge.unshift(n ?? t.target), Ge = Ge.filter((r) => r != null && r.isConnected), Ge.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function yd(e) {
  throw new Error("Unexpected object: " + e);
}
var be = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(be || {});
function ui(e, t) {
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
      yd(e);
  }
}
var vo = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(vo || {});
function Ns(e) {
  let t = Q(e), n = q(!1);
  de(() => (n.current = !1, () => {
    n.current = !0, Gn(() => {
      n.current && t();
    });
  }), [t]);
}
function xd() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in M ? ((t) => t.useSyncExternalStore)(M)(() => () => {
  }, () => !1, () => !e) : !1;
}
function gn() {
  let e = xd(), [t, n] = M.useState(Rt.isHandoffComplete);
  return t && Rt.isHandoffComplete === !1 && n(!1), M.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), M.useEffect(() => Rt.handoff(), []), e ? !1 : t;
}
let Ls = ve(!1);
function Sd() {
  return he(Ls);
}
function di(e) {
  return K.createElement(Ls.Provider, { value: e.force }, e.children);
}
function Cd(e) {
  let t = Sd(), n = he(Hs), r = _t(e), [o, i] = re(() => {
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
let Vs = Ie, Ed = ye(function(e, t) {
  let n = e, r = q(null), o = Oe(sc((f) => {
    r.current = f;
  }), t), i = _t(r), s = Cd(r), [l] = re(() => {
    var f;
    return Rt.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
  }), a = he(Ur), c = gn();
  fe(() => {
    !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l));
  }, [s, l]), fe(() => {
    if (l && a) return a.register(l);
  }, [a, l]), Ns(() => {
    var f;
    !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((f = s.parentElement) == null || f.removeChild(s)));
  });
  let u = Se();
  return c ? !s || !l ? null : Un(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Vs, name: "Portal" }), l) : null;
});
function Rd(e, t) {
  let n = Oe(t), { enabled: r = !0, ...o } = e, i = Se();
  return r ? K.createElement(Ed, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Vs, name: "Portal" });
}
let $d = Ie, Hs = ve(null);
function Md(e, t) {
  let { target: n, ...r } = e, o = { ref: Oe(t) }, i = Se();
  return K.createElement(Hs.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: $d, name: "Popover.Group" }));
}
let Ur = ve(null);
function Td() {
  let e = he(Ur), t = q([]), n = Q((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Q((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = ue(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, ue(() => function({ children: i }) {
    return K.createElement(Ur.Provider, { value: o }, i);
  }, [o])];
}
let Od = ye(Rd), zs = ye(Md), Bs = Object.assign(Od, { Group: zs });
var _d = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_d || {}), Id = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Id || {}), Ad = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Ad || {}), Dd = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e[e.SetInputElement = 8] = "SetInputElement", e[e.SetButtonElement = 9] = "SetButtonElement", e[e.SetOptionsElement = 10] = "SetOptionsElement", e))(Dd || {});
function br(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), o = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((s, l) => s.dataRef.current.order - l.dataRef.current.order) : ds(r, (s) => s.dataRef.current.domRef.current), i = n ? o.indexOf(n) : null;
  return i === -1 && (i = null), { options: o, activeOptionIndex: i };
}
let Fd = { 1(e) {
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
    let { options: c, disabled: u } = e.virtual, f = t.focus === be.Specific ? t.idx : ui(t, { resolveItems: () => c, resolveActiveIndex: () => {
      var d, g;
      return (g = (d = e.activeOptionIndex) != null ? d : c.findIndex((w) => !u(w))) != null ? g : null;
    }, resolveDisabled: u, resolveId() {
      throw new Error("Function not implemented.");
    } }), p = (o = t.trigger) != null ? o : 2;
    return e.activeOptionIndex === f && e.activationTrigger === p ? e : { ...e, activeOptionIndex: f, activationTrigger: p, isTyping: !1, __demoMode: !1 };
  }
  let s = br(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((u) => !u.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = t.focus === be.Specific ? t.idx : ui(t, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), a = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === l && e.activationTrigger === a ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: a, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, o;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let i = t.payload, s = br(e, (a) => (a.push(i), a));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(t.payload.dataRef.current.value) && (s.activeOptionIndex = s.options.indexOf(i));
  let l = { ...e, ...s, activationTrigger: 2 };
  return (o = e.dataRef.current) != null && o.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((o) => o.id !== t.id) };
  let r = br(e, (o) => {
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
}, 8: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 9: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 10: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element } }, wo = ve(null);
wo.displayName = "ComboboxActionsContext";
function vn(e) {
  let t = he(wo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, vn), n;
  }
  return t;
}
let js = ve(null);
function Pd(e) {
  let t = Ut("VirtualProvider"), { options: n } = t.virtual, [r, o] = ue(() => {
    let c = t.optionsElement;
    if (!c) return [0, 0];
    let u = window.getComputedStyle(c);
    return [parseFloat(u.paddingBlockStart || u.paddingTop), parseFloat(u.paddingBlockEnd || u.paddingBottom)];
  }, [t.optionsElement]), i = is({ enabled: n.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: o, count: n.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.optionsElement;
  }, overscan: 12 }), [s, l] = re(0);
  fe(() => {
    l((c) => c + 1);
  }, [n]);
  let a = i.getVirtualItems();
  return a.length === 0 ? null : K.createElement(js.Provider, { value: i }, K.createElement("div", { style: { position: "relative", width: "100%", height: `${i.getTotalSize()}px` }, ref: (c) => {
    c && t.activationTrigger !== 0 && t.activeOptionIndex !== null && n.length > t.activeOptionIndex && i.scrollToIndex(t.activeOptionIndex);
  } }, a.map((c) => {
    var u;
    return K.createElement(Ie, { key: c.key }, K.cloneElement((u = e.children) == null ? void 0 : u.call(e, { ...e.slot, option: n[c.index] }), { key: `${s}-${c.key}`, "data-index": c.index, "aria-setsize": n.length, "aria-posinset": c.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c.start}px)`, overflowAnchor: "none" } }));
  })));
}
let cn = ve(null);
cn.displayName = "ComboboxDataContext";
function Ut(e) {
  let t = he(cn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ut), n;
  }
  return t;
}
function kd(e, t) {
  return Ae(t.type, Fd, e, t);
}
let Nd = Ie;
function Ld(e, t) {
  var n, r;
  let o = ao(), { value: i, defaultValue: s, onChange: l, form: a, name: c, by: u, disabled: f = o || !1, onClose: p, __demoMode: d = !1, multiple: g = !1, immediate: w = !1, virtual: m = null, nullable: C, ...x } = e, S = Za(s), [R = g ? [] : void 0, O] = Ka(i, l, S), [F, A] = un(kd, { dataRef: Ai(), comboboxState: d ? 0 : 1, isTyping: !1, options: [], virtual: m ? { options: m.options, disabled: (n = m.disabled) != null ? n : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: d }), y = q(!1), h = q({ static: !1, hold: !1 }), b = Ac(u), E = Q((j) => m ? u === null ? m.options.indexOf(j) : m.options.findIndex((Z) => b(Z, j)) : F.options.findIndex((Z) => b(Z.dataRef.current.value, j))), T = ie((j) => Ae(D.mode, { 1: () => R.some((Z) => b(Z, j)), 0: () => b(R, j) }), [R]), L = Q((j) => F.activeOptionIndex === E(j)), D = ue(() => ({ ...F, immediate: w, optionsPropsRef: h, value: R, defaultValue: S, disabled: f, mode: g ? 1 : 0, virtual: m ? F.virtual : null, get activeOptionIndex() {
    if (y.current && F.activeOptionIndex === null && (m ? m.options.length > 0 : F.options.length > 0)) {
      if (m) {
        let Z = m.options.findIndex((ne) => {
          var we, ae;
          return !((ae = (we = m.disabled) == null ? void 0 : we.call(m, ne)) != null && ae);
        });
        if (Z !== -1) return Z;
      }
      let j = F.options.findIndex((Z) => !Z.dataRef.current.disabled);
      if (j !== -1) return j;
    }
    return F.activeOptionIndex;
  }, calculateIndex: E, compare: b, isSelected: T, isActive: L }), [R, S, f, g, d, F, m]);
  fe(() => {
    var j;
    m && A({ type: 7, options: m.options, disabled: (j = m.disabled) != null ? j : null });
  }, [m, m == null ? void 0 : m.options, m == null ? void 0 : m.disabled]), fe(() => {
    F.dataRef.current = D;
  }, [D]);
  let N = D.comboboxState === 0;
  ms(N, [D.buttonElement, D.inputElement, D.optionsElement], () => B.closeCombobox());
  let $ = ue(() => {
    var j, Z, ne;
    return { open: D.comboboxState === 0, disabled: f, activeIndex: D.activeOptionIndex, activeOption: D.activeOptionIndex === null ? null : D.virtual ? D.virtual.options[(j = D.activeOptionIndex) != null ? j : 0] : (ne = (Z = D.options[D.activeOptionIndex]) == null ? void 0 : Z.dataRef.current.value) != null ? ne : null, value: R };
  }, [D, f, R]), k = Q(() => {
    if (D.activeOptionIndex !== null) {
      if (B.setIsTyping(!1), D.virtual) P(D.virtual.options[D.activeOptionIndex]);
      else {
        let { dataRef: j } = D.options[D.activeOptionIndex];
        P(j.current.value);
      }
      B.goToOption(be.Specific, D.activeOptionIndex);
    }
  }), _ = Q(() => {
    A({ type: 0 }), y.current = !0;
  }), I = Q(() => {
    A({ type: 1 }), y.current = !1, p == null || p();
  }), z = Q((j) => {
    A({ type: 3, isTyping: j });
  }), H = Q((j, Z, ne) => (y.current = !1, j === be.Specific ? A({ type: 2, focus: be.Specific, idx: Z, trigger: ne }) : A({ type: 2, focus: j, trigger: ne }))), V = Q((j, Z) => (A({ type: 4, payload: { id: j, dataRef: Z } }), () => {
    D.isActive(Z.current.value) && (y.current = !0), A({ type: 5, id: j });
  })), P = Q((j) => Ae(D.mode, { 0() {
    return O == null ? void 0 : O(j);
  }, 1() {
    let Z = D.value.slice(), ne = Z.findIndex((we) => b(we, j));
    return ne === -1 ? Z.push(j) : Z.splice(ne, 1), O == null ? void 0 : O(Z);
  } })), ee = Q((j) => {
    A({ type: 6, trigger: j });
  }), X = Q((j) => {
    A({ type: 8, element: j });
  }), ce = Q((j) => {
    A({ type: 9, element: j });
  }), oe = Q((j) => {
    A({ type: 10, element: j });
  }), B = ue(() => ({ onChange: P, registerOption: V, goToOption: H, setIsTyping: z, closeCombobox: I, openCombobox: _, setActivationTrigger: ee, selectActiveOption: k, setInputElement: X, setButtonElement: ce, setOptionsElement: oe }), []), [G, te] = hc(), Y = t === null ? {} : { ref: t }, W = ie(() => {
    if (S !== void 0) return O == null ? void 0 : O(S);
  }, [O, S]), J = Se();
  return K.createElement(te, { value: G, props: { htmlFor: (r = D.inputElement) == null ? void 0 : r.id }, slot: { open: D.comboboxState === 0, disabled: f } }, K.createElement(pd, null, K.createElement(wo.Provider, { value: B }, K.createElement(cn.Provider, { value: D }, K.createElement(ks, { value: Ae(D.comboboxState, { 0: Te.Open, 1: Te.Closed }) }, c != null && K.createElement(tc, { disabled: f, data: R != null ? { [c]: R } : {}, form: a, onReset: W }), J({ ourProps: Y, theirProps: x, slot: $, defaultTag: Nd, name: "Combobox" }))))));
}
let Vd = "input";
function Hd(e, t) {
  var n, r, o, i, s;
  let l = Ut("Combobox.Input"), a = vn("Combobox.Input"), c = ke(), u = es(), { id: f = u || `headlessui-combobox-input-${c}`, onChange: p, displayValue: d, disabled: g = l.disabled || !1, autoFocus: w = !1, type: m = "text", ...C } = e, x = q(null), S = Oe(x, t, dd(), a.setInputElement), R = _t(l.inputElement), O = Ot(), F = Q(() => {
    a.onChange(null), l.optionsElement && (l.optionsElement.scrollTop = 0), a.goToOption(be.Nothing);
  }), A = ue(() => {
    var P;
    return typeof d == "function" && l.value !== void 0 ? (P = d(l.value)) != null ? P : "" : typeof l.value == "string" ? l.value : "";
  }, [l.value, d]);
  sn(([P, ee], [X, ce]) => {
    if (l.isTyping) return;
    let oe = x.current;
    oe && ((ce === 0 && ee === 1 || P !== X) && (oe.value = P), requestAnimationFrame(() => {
      if (l.isTyping || !oe || (R == null ? void 0 : R.activeElement) !== oe) return;
      let { selectionStart: B, selectionEnd: G } = oe;
      Math.abs((G ?? 0) - (B ?? 0)) === 0 && B === 0 && oe.setSelectionRange(oe.value.length, oe.value.length);
    }));
  }, [A, l.comboboxState, R, l.isTyping]), sn(([P], [ee]) => {
    if (P === 0 && ee === 1) {
      if (l.isTyping) return;
      let X = x.current;
      if (!X) return;
      let ce = X.value, { selectionStart: oe, selectionEnd: B, selectionDirection: G } = X;
      X.value = "", X.value = ce, G !== null ? X.setSelectionRange(oe, B, G) : X.setSelectionRange(oe, B);
    }
  }, [l.comboboxState]);
  let y = q(!1), h = Q(() => {
    y.current = !0;
  }), b = Q(() => {
    O.nextFrame(() => {
      y.current = !1;
    });
  }), E = Q((P) => {
    switch (a.setIsTyping(!0), P.key) {
      case Re.Enter:
        if (l.comboboxState !== 0 || y.current) return;
        if (P.preventDefault(), P.stopPropagation(), l.activeOptionIndex === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), l.mode === 0 && a.closeCombobox();
        break;
      case Re.ArrowDown:
        return P.preventDefault(), P.stopPropagation(), Ae(l.comboboxState, { 0: () => a.goToOption(be.Next), 1: () => a.openCombobox() });
      case Re.ArrowUp:
        return P.preventDefault(), P.stopPropagation(), Ae(l.comboboxState, { 0: () => a.goToOption(be.Previous), 1: () => {
          xt(() => a.openCombobox()), l.value || a.goToOption(be.Last);
        } });
      case Re.Home:
        if (P.shiftKey) break;
        return P.preventDefault(), P.stopPropagation(), a.goToOption(be.First);
      case Re.PageUp:
        return P.preventDefault(), P.stopPropagation(), a.goToOption(be.First);
      case Re.End:
        if (P.shiftKey) break;
        return P.preventDefault(), P.stopPropagation(), a.goToOption(be.Last);
      case Re.PageDown:
        return P.preventDefault(), P.stopPropagation(), a.goToOption(be.Last);
      case Re.Escape:
        return l.comboboxState !== 0 ? void 0 : (P.preventDefault(), l.optionsElement && !l.optionsPropsRef.current.static && P.stopPropagation(), l.mode === 0 && l.value === null && F(), a.closeCombobox());
      case Re.Tab:
        if (l.comboboxState !== 0) return;
        l.mode === 0 && l.activationTrigger !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }), T = Q((P) => {
    p == null || p(P), l.mode === 0 && P.target.value === "" && F(), a.openCombobox();
  }), L = Q((P) => {
    var ee, X, ce;
    let oe = (ee = P.relatedTarget) != null ? ee : Ge.find((B) => B !== P.currentTarget);
    if (!((X = l.optionsElement) != null && X.contains(oe)) && !((ce = l.buttonElement) != null && ce.contains(oe)) && l.comboboxState === 0) return P.preventDefault(), l.mode === 0 && l.value === null && F(), a.closeCombobox();
  }), D = Q((P) => {
    var ee, X, ce;
    let oe = (ee = P.relatedTarget) != null ? ee : Ge.find((B) => B !== P.currentTarget);
    (X = l.buttonElement) != null && X.contains(oe) || (ce = l.optionsElement) != null && ce.contains(oe) || l.disabled || l.immediate && l.comboboxState !== 0 && O.microTask(() => {
      xt(() => a.openCombobox()), a.setActivationTrigger(1);
    });
  }), N = Yn(), $ = lc(), { isFocused: k, focusProps: _ } = Ki({ autoFocus: w }), { isHovered: I, hoverProps: z } = Yi({ isDisabled: g }), H = ue(() => ({ open: l.comboboxState === 0, disabled: g, hover: I, focus: k, autofocus: w }), [l, I, k, w, g]), V = co({ ref: S, id: f, role: "combobox", type: m, "aria-controls": (n = l.optionsElement) == null ? void 0 : n.id, "aria-expanded": l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null ? void 0 : l.virtual ? (r = l.options.find((P) => !P.dataRef.current.disabled && l.compare(P.dataRef.current.value, l.virtual.options[l.activeOptionIndex]))) == null ? void 0 : r.id : (o = l.options[l.activeOptionIndex]) == null ? void 0 : o.id, "aria-labelledby": N, "aria-describedby": $, "aria-autocomplete": "list", defaultValue: (s = (i = e.defaultValue) != null ? i : l.defaultValue !== void 0 ? d == null ? void 0 : d(l.defaultValue) : null) != null ? s : l.defaultValue, disabled: g || void 0, autoFocus: w, onCompositionStart: h, onCompositionEnd: b, onKeyDown: E, onChange: T, onFocus: D, onBlur: L }, _, z);
  return Se()({ ourProps: V, theirProps: C, slot: H, defaultTag: Vd, name: "Combobox.Input" });
}
let zd = "button";
function Bd(e, t) {
  var n;
  let r = Ut("Combobox.Button"), o = vn("Combobox.Button"), i = Oe(t, o.setButtonElement), s = ke(), { id: l = `headlessui-combobox-button-${s}`, disabled: a = r.disabled || !1, autoFocus: c = !1, ...u } = e, f = gs(r.inputElement), p = Q((A) => {
    switch (A.key) {
      case Re.Space:
      case Re.Enter:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && xt(() => o.openCombobox()), f();
        return;
      case Re.ArrowDown:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && (xt(() => o.openCombobox()), r.value || o.goToOption(be.First)), f();
        return;
      case Re.ArrowUp:
        A.preventDefault(), A.stopPropagation(), r.comboboxState === 1 && (xt(() => o.openCombobox()), r.value || o.goToOption(be.Last)), f();
        return;
      case Re.Escape:
        if (r.comboboxState !== 0) return;
        A.preventDefault(), r.optionsElement && !r.optionsPropsRef.current.static && A.stopPropagation(), xt(() => o.closeCombobox()), f();
        return;
      default:
        return;
    }
  }), d = Q((A) => {
    A.preventDefault(), !oc(A.currentTarget) && (A.button === vo.Left && (r.comboboxState === 0 ? o.closeCombobox() : o.openCombobox()), f());
  }), g = Yn([l]), { isFocusVisible: w, focusProps: m } = Ki({ autoFocus: c }), { isHovered: C, hoverProps: x } = Yi({ isDisabled: a }), { pressed: S, pressProps: R } = ja({ disabled: a }), O = ue(() => ({ open: r.comboboxState === 0, active: S || r.comboboxState === 0, disabled: a, value: r.value, hover: C, focus: w }), [r, C, w, S, a]), F = co({ ref: i, id: l, type: Gc(e, r.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (n = r.optionsElement) == null ? void 0 : n.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": g, disabled: a || void 0, autoFocus: c, onMouseDown: d, onKeyDown: p }, m, x, R);
  return Se()({ ourProps: F, theirProps: u, slot: O, defaultTag: zd, name: "Combobox.Button" });
}
let jd = "div", Ud = Nt.RenderStrategy | Nt.Static;
function Gd(e, t) {
  var n, r, o;
  let i = ke(), { id: s = `headlessui-combobox-options-${i}`, hold: l = !1, anchor: a, portal: c = !1, modal: u = !0, transition: f = !1, ...p } = e, d = Ut("Combobox.Options"), g = vn("Combobox.Options"), w = ud(a);
  w && (c = !0);
  let [m, C] = hd(w), [x, S] = re(null), R = fd(), O = Oe(t, w ? m : null, g.setOptionsElement, S), F = _t(d.optionsElement), A = mn(), [y, h] = bs(f, x, A !== null ? (A & Te.Open) === Te.Open : d.comboboxState === 0);
  cs(y, d.inputElement, g.closeCombobox);
  let b = d.__demoMode ? !1 : u && d.comboboxState === 0;
  vs(b, F);
  let E = d.__demoMode ? !1 : u && d.comboboxState === 0;
  as(E, { allowed: ie(() => [d.inputElement, d.buttonElement, d.optionsElement], [d.inputElement, d.buttonElement, d.optionsElement]) }), fe(() => {
    var V;
    d.optionsPropsRef.current.static = (V = e.static) != null ? V : !1;
  }, [d.optionsPropsRef, e.static]), fe(() => {
    d.optionsPropsRef.current.hold = l;
  }, [d.optionsPropsRef, l]), ou(d.comboboxState === 0, { container: d.optionsElement, accept(V) {
    return V.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  let T = Yn([(n = d.buttonElement) == null ? void 0 : n.id]), L = ue(() => ({ open: d.comboboxState === 0, option: void 0 }), [d.comboboxState]), D = Q(() => {
    g.setActivationTrigger(0);
  }), N = Q((V) => {
    V.preventDefault(), g.setActivationTrigger(0);
  }), $ = co(w ? R() : {}, { "aria-labelledby": T, role: "listbox", "aria-multiselectable": d.mode === 1 ? !0 : void 0, id: s, ref: O, style: { ...p.style, ...C, "--input-width": Uo(d.inputElement, !0).width, "--button-width": Uo(d.buttonElement, !0).width }, onWheel: d.activationTrigger === 0 ? void 0 : D, onMouseDown: N, ...ws(h) }), k = y && d.comboboxState === 1, _ = jr(k, (r = d.virtual) == null ? void 0 : r.options), I = jr(k, d.value), z = Q((V) => d.compare(I, V));
  if (d.virtual) {
    if (_ === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: K.createElement(cn.Provider, { value: _ !== d.virtual.options ? { ...d, virtual: { ...d.virtual, options: _ } } : d }, K.createElement(Pd, { slot: L }, p.children)) });
  }
  let H = Se();
  return K.createElement(Bs, { enabled: c ? e.static || y : !1 }, K.createElement(cn.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: z } }, H({ ourProps: $, theirProps: { ...p, children: K.createElement(vd, { freeze: k }, typeof p.children == "function" ? (o = p.children) == null ? void 0 : o.call(p, L) : p.children) }, slot: L, defaultTag: jd, features: Ud, visible: y, name: "Combobox.Options" })));
}
let Wd = "div";
function qd(e, t) {
  var n, r, o, i;
  let s = Ut("Combobox.Option"), l = vn("Combobox.Option"), a = ke(), { id: c = `headlessui-combobox-option-${a}`, value: u, disabled: f = (o = (r = (n = s.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? o : !1, order: p = null, ...d } = e, g = gs(s.inputElement), w = s.virtual ? s.activeOptionIndex === s.calculateIndex(u) : s.activeOptionIndex === null ? !1 : ((i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id) === c, m = s.isSelected(u), C = q(null), x = vt({ disabled: f, value: u, domRef: C, order: p }), S = he(js), R = Oe(t, C, S ? S.measureElement : null), O = Q(() => {
    l.setIsTyping(!1), l.onChange(u);
  });
  fe(() => l.registerOption(c, x), [x, c]);
  let F = q(!(s.virtual || s.__demoMode));
  fe(() => {
    if (!s.virtual && !s.__demoMode) return Ye().requestAnimationFrame(() => {
      F.current = !0;
    });
  }, [s.virtual, s.__demoMode]), fe(() => {
    if (F.current && s.comboboxState === 0 && w && s.activationTrigger !== 0) return Ye().requestAnimationFrame(() => {
      var N, $;
      ($ = (N = C.current) == null ? void 0 : N.scrollIntoView) == null || $.call(N, { block: "nearest" });
    });
  }, [C, w, s.comboboxState, s.activationTrigger, s.activeOptionIndex]);
  let A = Q((N) => {
    N.preventDefault(), N.button === vo.Left && (f || (O(), hs() || requestAnimationFrame(() => g()), s.mode === 0 && l.closeCombobox()));
  }), y = Q(() => {
    if (f) return l.goToOption(be.Nothing);
    let N = s.calculateIndex(u);
    l.goToOption(be.Specific, N);
  }), h = Xc(), b = Q((N) => h.update(N)), E = Q((N) => {
    if (!h.wasMoved(N) || f || w) return;
    let $ = s.calculateIndex(u);
    l.goToOption(be.Specific, $, 0);
  }), T = Q((N) => {
    h.wasMoved(N) && (f || w && (s.optionsPropsRef.current.hold || l.goToOption(be.Nothing)));
  }), L = ue(() => ({ active: w, focus: w, selected: m, disabled: f }), [w, m, f]), D = { id: c, ref: R, role: "option", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, "aria-selected": m, disabled: void 0, onMouseDown: A, onFocus: y, onPointerEnter: b, onMouseEnter: b, onPointerMove: E, onMouseMove: E, onPointerLeave: T, onMouseLeave: T };
  return Se()({ ourProps: D, theirProps: d, slot: L, defaultTag: Wd, name: "Combobox.Option" });
}
let Yd = ye(Ld), Gr = ye(Bd), Us = ye(Hd), Kd = vc, Gs = ye(Gd), Wr = ye(qd), Zd = Object.assign(Yd, { Input: Us, Button: Gr, Label: Kd, Options: Gs, Option: Wr });
function Xd(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = zt(e, "escape");
  uo(t, "keydown", (o) => {
    r && (o.defaultPrevented || o.key === Re.Escape && n(o));
  });
}
function Jd() {
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
function Qd({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = _t(n), o = Q(() => {
    var i, s;
    let l = [];
    for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
    if (t != null && t.current) for (let a of t.current) l.push(a);
    for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some((c) => a.contains(c)) || l.push(a));
    return l;
  });
  return { resolveContainers: o, contains: Q((i) => o().some((s) => s.contains(i))) };
}
let Ws = ve(null);
function fi({ children: e, node: t }) {
  let [n, r] = re(null), o = qs(t ?? n);
  return K.createElement(Ws.Provider, { value: o }, e, o === null && K.createElement(on, { features: Lt.Hidden, ref: (i) => {
    var s, l;
    if (i) {
      for (let a of (l = (s = Ht(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : []) if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
        r(a);
        break;
      }
    }
  } }));
}
function qs(e = null) {
  var t;
  return (t = he(Ws)) != null ? t : e;
}
function bo() {
  let e = q(!1);
  return fe(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var Xt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Xt || {});
function ef() {
  let e = q(0);
  return ps(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Ys(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let tf = "div";
var yt = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(yt || {});
function nf(e, t) {
  let n = q(null), r = Oe(n, t), { initialFocus: o, initialFocusFallback: i, containers: s, features: l = 15, ...a } = e;
  gn() || (l = 0);
  let c = _t(n);
  lf(l, { ownerDocument: c });
  let u = af(l, { ownerDocument: c, container: n, initialFocus: o, initialFocusFallback: i });
  cf(l, { ownerDocument: c, container: n, containers: s, previousActiveElement: u });
  let f = ef(), p = Q((x) => {
    let S = n.current;
    S && ((R) => R())(() => {
      Ae(f.current, { [Xt.Forwards]: () => {
        en(S, nt.First, { skipElements: [x.relatedTarget, i] });
      }, [Xt.Backwards]: () => {
        en(S, nt.Last, { skipElements: [x.relatedTarget, i] });
      } });
    });
  }), d = zt(!!(l & 2), "focus-trap#tab-lock"), g = Ot(), w = q(!1), m = { ref: r, onKeyDown(x) {
    x.key == "Tab" && (w.current = !0, g.requestAnimationFrame(() => {
      w.current = !1;
    }));
  }, onBlur(x) {
    if (!(l & 4)) return;
    let S = Ys(s);
    n.current instanceof HTMLElement && S.add(n.current);
    let R = x.relatedTarget;
    R instanceof HTMLElement && R.dataset.headlessuiFocusGuard !== "true" && (Ks(S, R) || (w.current ? en(n.current, Ae(f.current, { [Xt.Forwards]: () => nt.Next, [Xt.Backwards]: () => nt.Previous }) | nt.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && ot(x.target)));
  } }, C = Se();
  return K.createElement(K.Fragment, null, d && K.createElement(on, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Lt.Focusable }), C({ ourProps: m, theirProps: a, defaultTag: tf, name: "FocusTrap" }), d && K.createElement(on, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: Lt.Focusable }));
}
let rf = ye(nf), of = Object.assign(rf, { features: yt });
function sf(e = !0) {
  let t = q(Ge.slice());
  return sn(([n], [r]) => {
    r === !0 && n === !1 && Gn(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Ge.slice());
  }, [e, Ge, t]), Q(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function lf(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = sf(n);
  sn(() => {
    n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && ot(r());
  }, [n]), Ns(() => {
    n && ot(r());
  });
}
function af(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: o }) {
  let i = q(null), s = zt(!!(e & 1), "focus-trap#initial-focus"), l = bo();
  return sn(() => {
    if (e === 0) return;
    if (!s) {
      o != null && o.current && ot(o.current);
      return;
    }
    let a = n.current;
    a && Gn(() => {
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
          if (en(a, nt.First | nt.AutoFocus) !== Vr.Error) return;
        } else if (en(a, nt.First) !== Vr.Error) return;
        if (o != null && o.current && (ot(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [o, s, e]), i;
}
function cf(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: o }) {
  let i = bo(), s = !!(e & 4);
  uo(t == null ? void 0 : t.defaultView, "focus", (l) => {
    if (!s || !i.current) return;
    let a = Ys(r);
    n.current instanceof HTMLElement && a.add(n.current);
    let c = o.current;
    if (!c) return;
    let u = l.target;
    u && u instanceof HTMLElement ? Ks(a, u) ? (o.current = u, ot(u)) : (l.preventDefault(), l.stopPropagation(), ot(c)) : ot(o.current);
  }, !0);
}
function Ks(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Zs(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Js) !== Ie || K.Children.count(e.children) === 1;
}
let er = ve(null);
er.displayName = "TransitionContext";
var uf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(uf || {});
function df() {
  let e = he(er);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ff() {
  let e = he(tr);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let tr = ve(null);
tr.displayName = "NestingContext";
function nr(e) {
  return "children" in e ? nr(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Xs(e, t) {
  let n = vt(e), r = q([]), o = bo(), i = Ot(), s = Q((d, g = at.Hidden) => {
    let w = r.current.findIndex(({ el: m }) => m === d);
    w !== -1 && (Ae(g, { [at.Unmount]() {
      r.current.splice(w, 1);
    }, [at.Hidden]() {
      r.current[w].state = "hidden";
    } }), i.microTask(() => {
      var m;
      !nr(r) && o.current && ((m = n.current) == null || m.call(n));
    }));
  }), l = Q((d) => {
    let g = r.current.find(({ el: w }) => w === d);
    return g ? g.state !== "visible" && (g.state = "visible") : r.current.push({ el: d, state: "visible" }), () => s(d, at.Unmount);
  }), a = q([]), c = q(Promise.resolve()), u = q({ enter: [], leave: [] }), f = Q((d, g, w) => {
    a.current.splice(0), t && (t.chains.current[g] = t.chains.current[g].filter(([m]) => m !== d)), t == null || t.chains.current[g].push([d, new Promise((m) => {
      a.current.push(m);
    })]), t == null || t.chains.current[g].push([d, new Promise((m) => {
      Promise.all(u.current[g].map(([C, x]) => x)).then(() => m());
    })]), g === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(g)) : w(g);
  }), p = Q((d, g, w) => {
    Promise.all(u.current[g].splice(0).map(([m, C]) => C)).then(() => {
      var m;
      (m = a.current.shift()) == null || m();
    }).then(() => w(g));
  });
  return ue(() => ({ children: r, register: l, unregister: s, onStart: f, onStop: p, wait: c, chains: u }), [l, s, r, f, p, u, c]);
}
let Js = Ie, Qs = Nt.RenderStrategy;
function hf(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: s, beforeLeave: l, afterLeave: a, enter: c, enterFrom: u, enterTo: f, entered: p, leave: d, leaveFrom: g, leaveTo: w, ...m } = e, [C, x] = re(null), S = q(null), R = Zs(e), O = Oe(...R ? [S, t, x] : t === null ? [] : [t]), F = (n = m.unmount) == null || n ? at.Unmount : at.Hidden, { show: A, appear: y, initial: h } = df(), [b, E] = re(A ? "visible" : "hidden"), T = ff(), { register: L, unregister: D } = T;
  fe(() => L(S), [L, S]), fe(() => {
    if (F === at.Hidden && S.current) {
      if (A && b !== "visible") {
        E("visible");
        return;
      }
      return Ae(b, { hidden: () => D(S), visible: () => L(S) });
    }
  }, [b, S, L, D, A, F]);
  let N = gn();
  fe(() => {
    if (R && N && b === "visible" && S.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [S, b, N, R]);
  let $ = h && !y, k = y && A && h, _ = q(!1), I = Xs(() => {
    _.current || (E("hidden"), D(S));
  }, T), z = Q((oe) => {
    _.current = !0;
    let B = oe ? "enter" : "leave";
    I.onStart(S, B, (G) => {
      G === "enter" ? i == null || i() : G === "leave" && (l == null || l());
    });
  }), H = Q((oe) => {
    let B = oe ? "enter" : "leave";
    _.current = !1, I.onStop(S, B, (G) => {
      G === "enter" ? s == null || s() : G === "leave" && (a == null || a());
    }), B === "leave" && !nr(I) && (E("hidden"), D(S));
  });
  de(() => {
    R && o || (z(A), H(A));
  }, [A, R, o]);
  let V = !(!o || !R || !N || $), [, P] = bs(V, C, A, { start: z, end: H }), ee = lt({ ref: O, className: ((r = Nr(m.className, k && c, k && u, P.enter && c, P.enter && P.closed && u, P.enter && !P.closed && f, P.leave && d, P.leave && !P.closed && g, P.leave && P.closed && w, !P.transition && A && p)) == null ? void 0 : r.trim()) || void 0, ...ws(P) }), X = 0;
  b === "visible" && (X |= Te.Open), b === "hidden" && (X |= Te.Closed), P.enter && (X |= Te.Opening), P.leave && (X |= Te.Closing);
  let ce = Se();
  return K.createElement(tr.Provider, { value: I }, K.createElement(ks, { value: X }, ce({ ourProps: ee, theirProps: m, defaultTag: Js, features: Qs, visible: b === "visible", name: "Transition.Child" })));
}
function pf(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, s = q(null), l = Zs(e), a = Oe(...l ? [s, t] : t === null ? [] : [t]);
  gn();
  let c = mn();
  if (n === void 0 && c !== null && (n = (c & Te.Open) === Te.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, f] = re(n ? "visible" : "hidden"), p = Xs(() => {
    n || f("hidden");
  }), [d, g] = re(!0), w = q([n]);
  fe(() => {
    d !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), g(!1));
  }, [w, n]);
  let m = ue(() => ({ show: n, appear: r, initial: d }), [n, r, d]);
  fe(() => {
    n ? f("visible") : !nr(p) && s.current !== null && f("hidden");
  }, [n, p]);
  let C = { unmount: o }, x = Q(() => {
    var O;
    d && g(!1), (O = e.beforeEnter) == null || O.call(e);
  }), S = Q(() => {
    var O;
    d && g(!1), (O = e.beforeLeave) == null || O.call(e);
  }), R = Se();
  return K.createElement(tr.Provider, { value: p }, K.createElement(er.Provider, { value: m }, R({ ourProps: { ...C, as: Ie, children: K.createElement(el, { ref: a, ...C, ...i, beforeEnter: x, beforeLeave: S }) }, theirProps: {}, defaultTag: Ie, features: Qs, visible: u === "visible", name: "Transition" })));
}
function mf(e, t) {
  let n = he(er) !== null, r = mn() !== null;
  return K.createElement(K.Fragment, null, !n && r ? K.createElement(qr, { ref: t, ...e }) : K.createElement(el, { ref: t, ...e }));
}
let qr = ye(pf), el = ye(hf), yo = ye(mf), gf = Object.assign(qr, { Child: yo, Root: qr });
var vf = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vf || {}), wf = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(wf || {});
let bf = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, xo = ve(null);
xo.displayName = "DialogContext";
function rr(e) {
  let t = he(xo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, rr), n;
  }
  return t;
}
function yf(e, t) {
  return Ae(t.type, bf, e, t);
}
let hi = ye(function(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-${n}`, open: o, onClose: i, initialFocus: s, role: l = "dialog", autoFocus: a = !0, __demoMode: c = !1, unmount: u = !1, ...f } = e, p = q(!1);
  l = function() {
    return l === "dialog" || l === "alertdialog" ? l : (p.current || (p.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let d = mn();
  o === void 0 && d !== null && (o = (d & Te.Open) === Te.Open);
  let g = q(null), w = Oe(g, t), m = _t(g), C = o ? 0 : 1, [x, S] = un(yf, { titleId: null, descriptionId: null, panelRef: Ai() }), R = Q(() => i(!1)), O = Q((H) => S({ type: 0, id: H })), F = gn() ? C === 0 : !1, [A, y] = Td(), h = { get current() {
    var H;
    return (H = x.panelRef.current) != null ? H : g.current;
  } }, b = qs(), { resolveContainers: E } = Qd({ mainTreeNode: b, portals: A, defaultContainers: [h] }), T = d !== null ? (d & Te.Closing) === Te.Closing : !1;
  as(c || T ? !1 : F, { allowed: Q(() => {
    var H, V;
    return [(V = (H = g.current) == null ? void 0 : H.closest("[data-headlessui-portal]")) != null ? V : null];
  }), disallowed: Q(() => {
    var H;
    return [(H = b == null ? void 0 : b.closest("body > *:not(#headlessui-portal-root)")) != null ? H : null];
  }) }), ms(F, E, (H) => {
    H.preventDefault(), R();
  }), Xd(F, m == null ? void 0 : m.defaultView, (H) => {
    H.preventDefault(), H.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), R();
  }), vs(c || T ? !1 : F, m, E), cs(F, g, R);
  let [L, D] = ac(), N = ue(() => [{ dialogState: C, close: R, setTitleId: O, unmount: u }, x], [C, x, R, O, u]), $ = ue(() => ({ open: C === 0 }), [C]), k = { ref: w, id: r, role: l, tabIndex: -1, "aria-modal": c ? void 0 : C === 0 ? !0 : void 0, "aria-labelledby": x.titleId, "aria-describedby": L, unmount: u }, _ = !Jd(), I = yt.None;
  F && !c && (I |= yt.RestoreFocus, I |= yt.TabLock, a && (I |= yt.AutoFocus), _ && (I |= yt.InitialFocus));
  let z = Se();
  return K.createElement(wd, null, K.createElement(di, { force: !0 }, K.createElement(Bs, null, K.createElement(xo.Provider, { value: N }, K.createElement(zs, { target: g }, K.createElement(di, { force: !1 }, K.createElement(D, { slot: $ }, K.createElement(y, null, K.createElement(of, { initialFocus: s, initialFocusFallback: g, containers: E, features: I }, K.createElement(bc, { value: R }, z({ ourProps: k, theirProps: f, slot: $, defaultTag: xf, features: Sf, visible: C === 0, name: "Dialog" })))))))))));
}), xf = "div", Sf = Nt.RenderStrategy | Nt.Static;
function Cf(e, t) {
  let { transition: n = !1, open: r, ...o } = e, i = mn(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
  if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !o.static ? K.createElement(fi, null, K.createElement(gf, { show: r, transition: n, unmount: o.unmount }, K.createElement(hi, { ref: t, ...o }))) : K.createElement(fi, null, K.createElement(hi, { ref: t, open: r, ...o }));
}
let Ef = "div";
function Rf(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-panel-${n}`, transition: o = !1, ...i } = e, [{ dialogState: s, unmount: l }, a] = rr("Dialog.Panel"), c = Oe(t, a.panelRef), u = ue(() => ({ open: s === 0 }), [s]), f = Q((m) => {
    m.stopPropagation();
  }), p = { ref: c, id: r, onClick: f }, d = o ? yo : Ie, g = o ? { unmount: l } : {}, w = Se();
  return K.createElement(d, { ...g }, w({ ourProps: p, theirProps: i, slot: u, defaultTag: Ef, name: "Dialog.Panel" }));
}
let $f = "div";
function Mf(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: o, unmount: i }] = rr("Dialog.Backdrop"), s = ue(() => ({ open: o === 0 }), [o]), l = { ref: t, "aria-hidden": !0 }, a = n ? yo : Ie, c = n ? { unmount: i } : {}, u = Se();
  return K.createElement(a, { ...c }, u({ ourProps: l, theirProps: r, slot: s, defaultTag: $f, name: "Dialog.Backdrop" }));
}
let Tf = "h2";
function Of(e, t) {
  let n = ke(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = rr("Dialog.Title"), l = Oe(t);
  de(() => (s(r), () => s(null)), [r, s]);
  let a = ue(() => ({ open: i === 0 }), [i]), c = { ref: l, id: r };
  return Se()({ ourProps: c, theirProps: o, slot: a, defaultTag: Tf, name: "Dialog.Title" });
}
let _f = ye(Cf), tl = ye(Rf), If = ye(Mf), nl = ye(Of), Af = Object.assign(_f, { Panel: tl, Title: nl, Description: fc });
function Df({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  }));
}
const Ff = /* @__PURE__ */ M.forwardRef(Df);
function Pf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const kf = /* @__PURE__ */ M.forwardRef(Pf);
function Nf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
  }));
}
const Lf = /* @__PURE__ */ M.forwardRef(Nf);
function Vf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
  }));
}
const Hf = /* @__PURE__ */ M.forwardRef(Vf);
function zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m4.5 12.75 6 6 9-13.5"
  }));
}
const Bf = /* @__PURE__ */ M.forwardRef(zf);
function jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
  }));
}
const Uf = /* @__PURE__ */ M.forwardRef(jf);
function Gf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Wf = /* @__PURE__ */ M.forwardRef(Gf);
function qf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));
}
const Yf = /* @__PURE__ */ M.forwardRef(qf);
function Kf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));
}
const rl = /* @__PURE__ */ M.forwardRef(Kf);
function Zf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const Xf = /* @__PURE__ */ M.forwardRef(Zf);
function Jf({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
  }));
}
const Qf = /* @__PURE__ */ M.forwardRef(Jf);
function eh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}
const th = /* @__PURE__ */ M.forwardRef(eh);
function nh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
  }));
}
const rh = /* @__PURE__ */ M.forwardRef(nh);
function oh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
const ih = /* @__PURE__ */ M.forwardRef(oh);
function sh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const ol = /* @__PURE__ */ M.forwardRef(sh), lh = { confirmationModal: { defaultConfirm: "Confirm", cancel: "Cancel" }, select: { optionPlaceholder: "Select an option", noOptions: "No options", clear: "Clear", invalidOption: "{{value}} (invalid)" }, input: { clear: "Clear" }, datePicker: { calendarLabel: "Choose date", pickerLabel: "Date picker", hours: "Hours", minutes: "Minutes", seconds: "Seconds", today: "Today", clear: "Clear", done: "Done", weekdays: { sun: "Su", mon: "Mo", tue: "Tu", wed: "We", thu: "Th", fri: "Fr", sat: "Sa" }, previous: "Previous", next: "Next", am: "AM", pm: "PM" } }, ah = { upload: "Upload", uploadBlocked: "Your data has validation errors. Fix them before uploading.", rowLimitExceeded: '"{{sheet}}" has {{count}} rows, which exceeds the maximum of {{limit}}. Remove rows to continue.', rowLimitExceededMultiple: "These sheets exceed their row limit: {{sheets}}. Remove rows to continue.", sheetValidationErrors: "This sheet has validation errors. Fix them before uploading.", processing: "Processing data, please wait…", back: "Back", loader: { failed: "Something went wrong", uploading: "Uploading", success: "Success", retry: "Try again", backToPreview: "Back to edit" }, backToMappingConfirmation: { title: "Are you sure?", subTitle: "This will discard all changes made after the data was mapped", confirmationText: "Yes, go back", cancelText: "No, stay here" } }, ch = { uploadAFile: "Upload a file", requiredColumns: "Required columns", optionalColumns: "Optional columns", requiredColumnsTooltip: "This column is required for the import", optionalColumnsTooltip: "This column is optional for the import", importerInformation: "Make sure your file includes all the required columns.", dragAndDrop: "Drag and drop your file here", maxFileSizeInBytes: "Limit {{size}}", browseFiles: "Browse Files", enterManually: "Or just manually enter your data", unsupportedFileType: "Unsupported file type. Please upload a {{formats}} file.", fileTooLarge: "File is too large. Maximum size is {{size}}." }, uh = { numberRowsImported: "{{count}} Rows Imported", back: "Back", confirm: "Confirm", noData: "No preview data", used: "Used", unused: "Unused", importedColumn: "Imported column", destinationColumn: "Destination column", dataPreview: "Data preview for {{csvHeader}}", mappingsNotValid: "Please set all required mappings", reviewAndConfirm: "Review and confirm each mapping" }, dh = { sheetTitle: "Uploaded data", validationPassed: "All rows pass validation!", removeConfirmationModalTitle: "Remove rows", removeConfirmationModalConfirmationText: "Remove", removeConfirmationModalSubTitle: "Are you sure you want to remove {{rowsCount}} rows?", readOnly: "Read Only", editTooltip: "Double click to edit", all: "All", valid: "Valid", invalid: "Invalid", filterByError: "Filter by error", search: "Search", removeRowsTooltip: "Remove rows", removeRowsTooltipNoRowsSelected: "Please select at least one record in order to delete it", addRowsTooltip: "Add a new row", downloadSheetTooltip: "Download this sheet", undoTooltip: "Undo", redoTooltip: "Redo", reset: "Start over", resetTooltip: "Start over", resetConfirmationModalTitle: "Start over", resetConfirmationModalConfirmationText: "Start over", resetConfirmationModalSubTitle: "Are you sure you want to start over? This will remove all data and reset the sheet to its initial state." }, fh = { boolean: "This value must be true or false", includes: "Value is not in the list of allowed values", integer: "This must be a whole number", multiIncludes: "This value is not valid", regex: "This value is invalid", required: "This value is required", unique: "This value is not unique", date: "This is not a valid date", datetime: "This is not a valid date and time", time: "This is not a valid time", dateOutOfRange: "This date is outside the allowed range", asyncError: "This value could not be validated" }, hh = { success: "Success", importSuccessful: "Import successful", importSuccessfulWithErrors: "Import successful with errors", successDescription: "{{totalRecords}} records were processed in your import", successDescriptionWithStats: "{{recordsImported}} out of {{totalRecords}} records were imported and are now available in your database", error: "Error", importFailed: "Import failed", failedDescription: "An error occurred while importing your data. Please try again", importDetails: "Import details", importDetailsDescription: "Details about your recent data import", fileInformation: "File information", dataEnteredManually: "Data entered manually", original: "Original", processed: "Processed", downloadProcessedData: "Download processed data", importResults: "Import results", totalRows: "{{totalRows}} rows", status: "Status", failed: "Failed", dataImport: "Data import", statisticsSkipped: "{{skipped}} skipped", statisticsFailed: "{{failed}} failed", statisticsImported: "{{imported}} imported", continue: "Continue" }, ph = {
  components: lh,
  importer: ah,
  uploader: ch,
  mapper: uh,
  sheet: dh,
  validators: fh,
  importStatus: hh
}, mh = { confirmationModal: { defaultConfirm: "Confirmer", cancel: "Annuler" }, select: { optionPlaceholder: "Sélectionnez une option", noOptions: "Pas d'options", clear: "Effacer", invalidOption: "{{value}} (invalide)" }, input: { clear: "Effacer" }, datePicker: { calendarLabel: "Choisir une date", pickerLabel: "Sélecteur de date", hours: "Heures", minutes: "Minutes", seconds: "Secondes", today: "Aujourd'hui", clear: "Effacer", done: "Terminé", weekdays: { sun: "Di", mon: "Lu", tue: "Ma", wed: "Me", thu: "Je", fri: "Ve", sat: "Sa" }, previous: "Précédent", next: "Suivant", am: "AM", pm: "PM" } }, gh = { upload: "Télécharger", uploadBlocked: "Vos données comportent des erreurs de validation. Corrigez-les avant de les télécharger.", rowLimitExceeded: "« {{sheet}} » comporte {{count}} lignes, ce qui dépasse le maximum de {{limit}}. Supprimez des lignes pour continuer.", rowLimitExceededMultiple: "Ces feuilles dépassent leur limite de lignes : {{sheets}}. Supprimez des lignes pour continuer.", sheetValidationErrors: "Cette feuille comporte des erreurs de validation. Corrigez-les avant de télécharger.", processing: "Traitement des données, veuillez patienter…", back: "Retour", loader: { failed: "Quelque chose a mal tourné", uploading: "Téléchargement en cours", success: "Succès", retry: "Réessayer", backToPreview: "Retour à modifier" }, backToMappingConfirmation: { title: "Êtes-vous sûr ?", subTitle: "Cela annulera toutes les modifications effectuées après le mappage des données", confirmationText: "Oui, revenir en arrière", cancelText: "Non, rester ici" } }, vh = { uploadAFile: "Télécharger un fichier", requiredColumns: "Colonnes requises", optionalColumns: "Colonnes optionnelles", requiredColumnsTooltip: "Cette colonne est requise pour l'importation", optionalColumnsTooltip: "Cette colonne est optionnelle pour l'importation", importerInformation: "Assurez-vous que votre fichier inclut toutes les colonnes requises.", dragAndDrop: "Glissez et déposez votre fichier ici", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Parcourir les fichiers", enterManually: "Ou saisissez vos données manuellement", unsupportedFileType: "Type de fichier non pris en charge. Veuillez télécharger un fichier {{formats}}.", fileTooLarge: "Le fichier est trop volumineux. La taille maximale est {{size}}." }, wh = { numberRowsImported: "{{count}} lignes importées", back: "Retour", confirm: "Confirmer", noData: "Aucune donnée prévue", unused: "Non utilisées", used: "Utilisées", importedColumn: "Colonne importée", destinationColumn: "Colonne de destination", dataPreview: "Aperçu des données pour {{csvHeader}}", mappingsNotValid: "Veuillez définir toutes les mappings requis", reviewAndConfirm: "Revoir et confirmer chaque mapping" }, bh = { sheetTitle: "Données importées", validationPassed: "Toutes les lignes passent la validation !", removeConfirmationModalTitle: "Supprimer les lignes", removeConfirmationModalConfirmationText: "Supprimer", removeConfirmationModalSubTitle: "Êtes-vous sûr de vouloir supprimer {{rowsCount}} lignes ?", readOnly: "Lecture seule", editTooltip: "Double-cliquez pour modifier", all: "Toutes", valid: "Valides", invalid: "Invalides", filterByError: "Filtrer par erreur", search: "Recherche", removeRowsTooltip: "Supprimer les lignes", removeRowsTooltipNoRowsSelected: "Veuillez sélectionner au moins un enregistrement avant de le supprimer", addRowsTooltip: "Ajouter une nouvelle ligne", downloadSheetTooltip: "Télécharger cette feuille", undoTooltip: "Annuler", redoTooltip: "Rétablir", reset: "Recommencer", resetTooltip: "Recommencer", resetConfirmationModalTitle: "Recommencer", resetConfirmationModalConfirmationText: "Recommencer", resetConfirmationModalSubTitle: "Êtes-vous sûr de vouloir recommencer ? Cela supprimera toutes les données et réinitialisera la feuille à son état initial." }, yh = { boolean: "Cette valeur doit être vraie ou fausse", includes: "La valeur n'est pas dans la liste des valeurs autorisées", integer: "Ce doit être un nombre entier", multiIncludes: "Cette valeur n'est pas valide", regex: "Cette valeur est invalide", required: "Cette valeur est obligatoire", unique: "Cette valeur n'est pas unique", date: "Cette date n'est pas valide", datetime: "Cette date et heure ne sont pas valides", time: "Cette heure n'est pas valide", dateOutOfRange: "Cette date est en dehors de la plage autorisée", asyncError: "Cette valeur n'a pas pu être validée" }, xh = { success: "Importation réussie", importSuccessful: "Importation réussie", importSuccessfulWithErrors: "Importation réussie avec erreurs", successDescription: "{{count}} enregistrements ont été importés avec succès", successDescriptionWithStats: "{{recordsImported}} sur {{totalRecords}} enregistrements ont été importés avec succès", error: "Importation échouée", errorDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importFailed: "Importation échouée", failedDescription: "Une erreur est survenue lors de l'importation. Veuillez réessayer", importDetails: "Détails de l'importation", importDetailsDescription: "Détails sur votre dernière importation", fileInformation: "Informations sur le fichier", dataEnteredManually: "Données saisies manuellement", original: "Original", processed: "Traité", downloadProcessedData: "Télécharger les données traitées", importResults: "Résultats de l'importation", totalRows: "{{totalRows}} enregistrements", status: "Statut", failed: "Échoué", dataImport: "Importation de données", statisticsSkipped: "{{skipped}} ignorés", statisticsFailed: "{{failed}} échoués", statisticsImported: "{{imported}} importés", continue: "Continuer" }, Sh = {
  components: mh,
  importer: gh,
  uploader: vh,
  mapper: wh,
  sheet: bh,
  validators: yh,
  importStatus: xh
}, Ch = { confirmationModal: { defaultConfirm: "Confirmar", cancel: "Cancelar" }, select: { optionPlaceholder: "Selecione uma opção", noOptions: "Sem opções", clear: "Limpar", invalidOption: "{{value}} (inválido)" }, input: { clear: "Limpar" }, datePicker: { calendarLabel: "Escolher data", pickerLabel: "Seletor de data", hours: "Horas", minutes: "Minutos", seconds: "Segundos", today: "Hoje", clear: "Limpar", done: "Concluído", weekdays: { sun: "Dom", mon: "Seg", tue: "Ter", wed: "Qua", thu: "Qui", fri: "Sex", sat: "Sáb" }, previous: "Anterior", next: "Próximo", am: "AM", pm: "PM" } }, Eh = { upload: "Enviar", uploadBlocked: "Seus dados têm erros de validação. Corrija-os antes de enviar.", rowLimitExceeded: '"{{sheet}}" tem {{count}} linhas, o que excede o máximo de {{limit}}. Remova linhas para continuar.', rowLimitExceededMultiple: "Estas planilhas excedem o limite de linhas: {{sheets}}. Remova linhas para continuar.", sheetValidationErrors: "Esta planilha tem erros de validação. Corrija-os antes de enviar.", processing: "Processando dados, aguarde…", back: "Voltar", loader: { failed: "Algo deu errado", uploading: "Enviando", success: "Sucesso", retry: "Tentar novamente", backToPreview: "Voltar para editar" }, backToMappingConfirmation: { title: "Tem certeza?", subTitle: "Isso descartará todas as alterações feitas após o mapeamento dos dados", confirmationText: "Sim, voltar", cancelText: "Não, permanecer aqui" } }, Rh = { uploadAFile: "Enviar um arquivo", requiredColumns: "Colunas obrigatórias", optionalColumns: "Colunas opcionais", requiredColumnsTooltip: "Esta coluna é obrigatória para a importação", optionalColumnsTooltip: "Esta coluna é opcional para a importação", importerInformation: "Certifique-se de que seu arquivo inclua todas as colunas obrigatórias.", dragAndDrop: "Arraste e solte seu arquivo aqui", maxFileSizeInBytes: "Limite {{size}}", browseFiles: "Procurar arquivos", enterManually: "Ou apenas insira seus dados manualmente", unsupportedFileType: "Tipo de arquivo não suportado. Por favor, envie um arquivo {{formats}}.", fileTooLarge: "O arquivo é muito grande. O tamanho máximo é {{size}}." }, $h = { numberRowsImported: "{{count}} linhas importadas", back: "Voltar", confirm: "Confirmar", noData: "Nenhum dado de pré-visualização", used: "Usado", unused: "Não usado", importedColumn: "Coluna importada", destinationColumn: "Coluna de destino", dataPreview: "Pré-visualização de dados para {{csvHeader}}", mappingsNotValid: "Por favor, defina todos os mapeamentos obrigatórios", reviewAndConfirm: "Revise e confirme cada mapeamento" }, Mh = { sheetTitle: "Dados enviados", validationPassed: "Todas as linhas passaram na validação!", removeConfirmationModalTitle: "Remover linhas", removeConfirmationModalConfirmationText: "Remover", removeConfirmationModalSubTitle: "Tem certeza que deseja remover {{rowsCount}} linhas?", readOnly: "Somente leitura", editTooltip: "Clique duas vezes para editar", all: "Todas", valid: "Válido", invalid: "Inválido", filterByError: "Filtrar por erro", search: "Buscar", removeRowsTooltip: "Remover linhas", removeRowsTooltipNoRowsSelected: "Selecione pelo menos um registro para deletá-lo", addRowsTooltip: "Adicionar nova linha", downloadSheetTooltip: "Baixar esta planilha", undoTooltip: "Desfazer", redoTooltip: "Refazer", reset: "Recomeçar", resetTooltip: "Recomeçar", resetConfirmationModalTitle: "Recomeçar", resetConfirmationModalConfirmationText: "Recomeçar", resetConfirmationModalSubTitle: "Tem certeza que deseja recomeçar? Isso removerá todos os dados e resetará a planilha ao seu estado inicial." }, Th = { boolean: "Este valor deve ser verdadeiro ou falso", includes: "O valor não está na lista de valores permitidos", integer: "Deve ser um número inteiro", multiIncludes: "Este valor não é válido", regex: "Este valor é inválido", required: "Este valor é obrigatório", unique: "Este valor não é único", date: "Esta data não é válida", datetime: "Esta data e hora não são válidas", time: "Este horário não é válido", dateOutOfRange: "Esta data está fora do intervalo permitido", asyncError: "Não foi possível validar este valor" }, Oh = { success: "Sucesso", importSuccessful: "Importação bem-sucedida", importSuccessfulWithErrors: "Importação concluída com erros", successDescription: "{{totalRecords}} registros foram processados na sua importação", successDescriptionWithStats: "{{recordsImported}} de {{totalRecords}} registros foram importados e estão disponíveis na sua base de dados", error: "Erro", importFailed: "Falha na importação", failedDescription: "Ocorreu um erro ao importar seus dados. Tente novamente", importDetails: "Detalhes da importação", importDetailsDescription: "Detalhes sobre sua importação recente de dados", fileInformation: "Informações do arquivo", dataEnteredManually: "Dados inseridos manualmente", original: "Original", processed: "Processado", downloadProcessedData: "Baixar dados processados", importResults: "Resultados da importação", totalRows: "{{totalRows}} linhas", status: "Status", failed: "Falhou", dataImport: "Importação de dados", statisticsSkipped: "{{skipped}} ignoradas", statisticsFailed: "{{failed}} falharam", statisticsImported: "{{imported}} importadas", continue: "Continuar" }, _h = {
  components: Ch,
  importer: Eh,
  uploader: Rh,
  mapper: $h,
  sheet: Mh,
  validators: Th,
  importStatus: Oh
}, il = ve(
  {}
);
function Ih({
  importerDefintion: e,
  children: t
}) {
  return /* @__PURE__ */ v(il.Provider, { value: e, children: t });
}
function Ne() {
  return he(il);
}
const Ah = {
  en: ph,
  fr: Sh,
  "pt-BR": _h
}, Dh = "en";
function pi(e, t, n) {
  const r = t.split(".");
  let o = (n == null ? void 0 : n[e]) ?? Ah[e];
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
function Ph(e, t) {
  const n = e.split(/({{[^}]+}})/g);
  return /* @__PURE__ */ v("span", { children: n.map((r) => {
    const o = r.match(/{{([^}]+)}}/);
    let i = r;
    if (o) {
      const s = o[1];
      i = t[s] ?? `{${s}}`;
    }
    return /* @__PURE__ */ v(Ie, { children: i }, r);
  }) });
}
const sl = ve(
  {}
);
function kh({ children: e }) {
  const { translationResources: t, locale: n } = Ne(), r = n ?? Dh;
  function o(s, l = {}) {
    const a = pi(r, s, t);
    return Fh(a, l);
  }
  function i(s, l = {}) {
    const a = pi(r, s, t);
    return Ph(a, l);
  }
  return /* @__PURE__ */ v(sl.Provider, { value: { t: o, tHtml: i }, children: e });
}
function me() {
  return he(sl);
}
function Yr({
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
        Yf,
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
  }, { icon: u, btnVariant: f, bgColor: p } = c[l];
  return /* @__PURE__ */ U(Af, { open: e, onClose: t, className: "hc:relative hc:z-10", children: [
    /* @__PURE__ */ v(
      If,
      {
        transition: !0,
        className: "hc:bg-hello-csv-overlay/75 hc:fixed hc:inset-0 hc:transition-opacity hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ v("div", { className: "hc:fixed hc:inset-0 hc:z-10 hc:w-screen hc:overflow-y-auto", children: /* @__PURE__ */ v("div", { className: "hc:flex hc:min-h-full hc:items-end hc:justify-center hc:p-4 hc:text-center hc:sm:items-center hc:sm:p-0", children: /* @__PURE__ */ U(
      tl,
      {
        transition: !0,
        className: "hc:bg-hello-csv-surface-raised hc:relative hc:transform hc:overflow-hidden hc:rounded-lg hc:px-4 hc:pt-5 hc:pb-4 hc:text-left hc:shadow-xl hc:transition-all hc:data-closed:translate-y-4 hc:data-closed:opacity-0 hc:data-enter:duration-300 hc:data-enter:ease-out hc:data-leave:duration-200 hc:data-leave:ease-in hc:sm:my-8 hc:sm:w-full hc:sm:max-w-lg hc:sm:p-6 hc:data-closed:sm:translate-y-0 hc:data-closed:sm:scale-95",
        children: [
          /* @__PURE__ */ U("div", { className: "hc:sm:flex hc:sm:items-start", children: [
            u && /* @__PURE__ */ v(
              "div",
              {
                className: `hc:mx-auto hc:flex hc:size-12 hc:shrink-0 hc:items-center hc:justify-center hc:rounded-full ${p} hc:sm:mx-0 hc:sm:size-10`,
                children: u
              }
            ),
            /* @__PURE__ */ U("div", { className: "hc:mt-3 hc:text-center hc:sm:mt-0 hc:sm:ml-4 hc:sm:text-left", children: [
              /* @__PURE__ */ v(
                nl,
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
              Fe,
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
              Fe,
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
const Nh = 100, ll = 8, Lh = 50, al = 5, Vh = [
  "text/csv",
  "text/tab-separated-values"
], Hh = [".csv", ".tsv"], zh = ",", Bh = 500, jh = "headlessui-portal-root", Vn = "hello-csv", cl = "data-hellocsv-datepicker", or = {
  autoComplete: "off",
  "data-bwignore": !0,
  "data-1p-ignore": !0,
  "data-lpignore": "true",
  "data-form-type": "other"
}, ul = 52.62, Kr = "checkbox-column-id", dl = 110, Uh = 50, Gh = 500, Wh = 150, fl = "Yes", hl = "No", qh = ["true", "1", "yes", "y"], Yh = ["false", "0", "no", "n"], Kh = Bn(function({ children: t }, n) {
  return de(() => {
    const r = new MutationObserver((o) => {
      for (const i of o)
        i.addedNodes.forEach((s) => {
          s.nodeType === Node.ELEMENT_NODE && s.id === jh && s.classList.add(Vn);
        });
    });
    return r.observe(document.body, { childList: !0, subtree: !1 }), () => r.disconnect();
  }, []), /* @__PURE__ */ v(
    "div",
    {
      role: "group",
      "aria-label": "Hello CSV",
      className: `${Vn}`,
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
function Zh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    d: "M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z"
  }), /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z",
    clipRule: "evenodd"
  }));
}
const Xh = /* @__PURE__ */ M.forwardRef(Zh);
function Jh({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
    clipRule: "evenodd"
  }));
}
const Qh = /* @__PURE__ */ M.forwardRef(Jh);
function ep({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const tp = /* @__PURE__ */ M.forwardRef(ep);
function np({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
const rp = /* @__PURE__ */ M.forwardRef(np);
function op({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ip = /* @__PURE__ */ M.forwardRef(op);
function sp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",
    clipRule: "evenodd"
  }));
}
const lp = /* @__PURE__ */ M.forwardRef(sp);
function ap({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const cp = /* @__PURE__ */ M.forwardRef(ap);
function up({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z",
    clipRule: "evenodd"
  }));
}
const dp = /* @__PURE__ */ M.forwardRef(up);
function fp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const hp = /* @__PURE__ */ M.forwardRef(fp);
function pp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const pl = /* @__PURE__ */ M.forwardRef(pp), ml = Bn(
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
    const { t: u } = me(), [f, p] = re(e);
    de(() => {
      p(e);
    }, [e]);
    const d = s && e != null && e !== "";
    function g(w) {
      const m = w.target, C = l === "number" ? m == null ? void 0 : m.valueAsNumber : m == null ? void 0 : m.value;
      return (typeof C == "number" && isNaN(C) ? "" : C) ?? "";
    }
    return /* @__PURE__ */ U("div", { className: "hc:grid hc:grid-cols-1", children: [
      /* @__PURE__ */ v(
        "input",
        {
          ...or,
          "aria-label": a["aria-label"],
          ref: c,
          type: l,
          inputMode: l === "number" ? "numeric" : "text",
          placeholder: r,
          value: typeof f == "boolean" ? f.toString() : Array.isArray(f) ? "" : f ?? "",
          onChange: (w) => (n == null ? void 0 : n(g(w))) ?? p(g(w)),
          className: `hello-csv-input ${i} ${o != null ? "hc:pl-10" : ""} ${s ? "hc:pr-10" : ""} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:col-start-1 hc:row-start-1 hc:block hc:rounded-md hc:px-3 hc:py-1.5 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6`,
          onBlur: (w) => t == null ? void 0 : t(g(w))
        }
      ),
      o == null ? void 0 : o({
        "aria-hidden": "true",
        className: "hc:pointer-events-none hc:col-start-1 hc:row-start-1 hc:ml-3 hc:size-5 hc:self-center hc:text-hello-csv-text-subtle hc:sm:size-4"
      }),
      d && /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          "aria-label": u("components.input.clear"),
          onClick: (w) => {
            w.stopPropagation(), n == null || n("");
          },
          className: "hc:col-end-2 hc:row-start-1 hc:flex hc:cursor-pointer hc:items-center hc:justify-self-end hc:pr-2",
          children: /* @__PURE__ */ v(
            pl,
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
function mp(e, t, n) {
  return n.searchInputAsFilter && e == null ? { type: "ignore" } : e != null && t != null && n.compareFunction(e, t) ? { type: "change", value: null } : { type: "change", value: e };
}
function Et({
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
  autoFocus: f = !1,
  immediate: p = !1,
  searchInputAsFilter: d = !1,
  ...g
}) {
  const { t: w } = me(), [m, C] = re(""), x = q(null);
  de(() => {
    var $;
    f && (($ = x.current) == null || $.focus());
  }, []);
  const S = ($) => o && Array.isArray(e) ? e.some((k) => i(k, $)) : i(e, $), R = ($) => {
    if (C(""), o) {
      const _ = Array.isArray($) ? $ : [$];
      n(_);
      return;
    }
    const k = mp(
      $ ?? null,
      e,
      { searchInputAsFilter: d, compareFunction: i }
    );
    k.type === "change" && n(k.value);
  }, O = () => {
    C(""), n(o ? [] : null);
  }, F = t.filter(($) => S($.value)), A = F.map(($) => $.label).join(", "), y = m && l ? t.filter(
    ($) => String($.label).toLowerCase().includes(m.toLowerCase())
  ) : t, h = a ?? w("components.select.optionPlaceholder"), b = () => d ? m : l ? A : F.length > 0 ? u ? `${h}: ${A}` : A : "", T = y.some(($) => $.group) ? Object.entries(
    y.reduce(
      ($, k) => {
        const _ = k.group || "ungrouped";
        return $[_] = $[_] || [], $[_].push(k), $;
      },
      {}
    )
  ).map(([$, k]) => ({
    label: $,
    items: k
  })) : [{ label: null, items: y }], L = T.every(({ items: $ }) => $.length === 0), D = d ? m.length > 0 : s && F.length > 0, N = () => {
    var $;
    d ? (C(""), x.current && (x.current.value = ""), ($ = x.current) == null || $.focus()) : O();
  };
  return /* @__PURE__ */ v(
    Zd,
    {
      value: e ?? (o ? [] : null),
      onChange: R,
      onClose: r,
      multiple: o,
      immediate: p,
      children: /* @__PURE__ */ U("div", { className: "hc:relative", children: [
        /* @__PURE__ */ v(
          Gr,
          {
            className: "hc:w-full",
            "aria-label": g["aria-label"] ?? a,
            children: /* @__PURE__ */ v(
              Us,
              {
                ...or,
                ref: x,
                className: `hello-csv-input ${c} hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:block hc:w-full hc:cursor-pointer hc:truncate hc:rounded-md hc:py-1.5 hc:focus:cursor-text ${D ? "hc:pr-12" : "hc:pr-2"} hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:pl-3 hc:text-left hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm`,
                displayValue: b,
                onChange: ($) => l && C($.target.value),
                placeholder: h,
                readOnly: !l
              }
            )
          }
        ),
        D && /* @__PURE__ */ v(
          "button",
          {
            type: "button",
            "aria-label": w("components.select.clear"),
            onMouseDown: ($) => {
              $.preventDefault(), $.stopPropagation();
            },
            onClick: ($) => {
              $.stopPropagation(), N();
            },
            className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-6 hc:flex hc:cursor-pointer hc:items-center",
            children: /* @__PURE__ */ v(
              pl,
              {
                className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:h-5 hc:w-5",
                "aria-hidden": "true"
              }
            )
          }
        ),
        /* @__PURE__ */ v(Gr, { className: "hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2", children: /* @__PURE__ */ v(
          lp,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:col-start-1 hc:row-start-1 hc:size-5 hc:self-center hc:justify-self-end hc:sm:size-4"
          }
        ) }),
        /* @__PURE__ */ U(
          Gs,
          {
            anchor: "bottom",
            transition: !0,
            className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:absolute hc:z-99 hc:mt-1 hc:max-h-60 hc:w-[var(--input-width)] hc:overflow-auto hc:rounded-md hc:py-1 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:data-leave:transition hc:data-leave:duration-100 hc:data-leave:ease-in hc:data-closed:data-leave:opacity-0 hc:sm:text-sm",
            children: [
              L && /* @__PURE__ */ v(
                Wr,
                {
                  disabled: !0,
                  value: null,
                  className: "hc:text-hello-csv-text-subtle hc:pointer-events-none hc:relative hc:flex hc:items-center hc:justify-center hc:py-2 hc:pr-9 hc:pl-3 hc:select-none",
                  children: /* @__PURE__ */ v("span", { className: "hc:block hc:truncate hc:font-normal", children: w("components.select.noOptions") })
                },
                "no-options"
              ),
              T.map(({ label: $, items: k }) => /* @__PURE__ */ U("div", { children: [
                $ && /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-subtle hc:py-2 hc:pr-9 hc:pl-3 hc:uppercase", children: $ }),
                k.map((_) => /* @__PURE__ */ v(
                  Wr,
                  {
                    value: _.value,
                    className: ({ focus: I }) => `hc:cursor-default hc:items-center hc:py-2 hc:pr-9 hc:pl-3 hc:outline-hidden hc:select-none hc:relative hc:flex ${I ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text"}`,
                    children: ({ focus: I, selected: z }) => /* @__PURE__ */ U(ut, { children: [
                      _.icon,
                      /* @__PURE__ */ v(
                        "span",
                        {
                          className: `hc:block hc:truncate ${z ? "hc:font-semibold" : "hc:font-normal"}`,
                          children: _.label
                        }
                      ),
                      z && /* @__PURE__ */ v(
                        "span",
                        {
                          className: `hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:items-center hc:pr-4 ${I ? "hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-primary"}`,
                          children: /* @__PURE__ */ v(
                            Qh,
                            {
                              "aria-hidden": "true",
                              className: "hc:h-5 hc:w-5"
                            }
                          )
                        }
                      )
                    ] })
                  },
                  typeof _.value == "object" ? JSON.stringify(_.value) : String(_.value)
                ))
              ] }, `${$ || "all"}:${m}`))
            ]
          }
        )
      ] })
    }
  );
}
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var On = { exports: {} }, gp = On.exports, mi;
function vp() {
  return mi || (mi = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(gp, function() {
      var n = 1e3, r = 6e4, o = 36e5, i = "millisecond", s = "second", l = "minute", a = "hour", c = "day", u = "week", f = "month", p = "quarter", d = "year", g = "date", w = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
        var N = ["th", "st", "nd", "rd"], $ = D % 100;
        return "[" + D + (N[($ - 20) % 10] || N[$] || N[0]) + "]";
      } }, S = function(D, N, $) {
        var k = String(D);
        return !k || k.length >= N ? D : "" + Array(N + 1 - k.length).join($) + D;
      }, R = { s: S, z: function(D) {
        var N = -D.utcOffset(), $ = Math.abs(N), k = Math.floor($ / 60), _ = $ % 60;
        return (N <= 0 ? "+" : "-") + S(k, 2, "0") + ":" + S(_, 2, "0");
      }, m: function D(N, $) {
        if (N.date() < $.date()) return -D($, N);
        var k = 12 * ($.year() - N.year()) + ($.month() - N.month()), _ = N.clone().add(k, f), I = $ - _ < 0, z = N.clone().add(k + (I ? -1 : 1), f);
        return +(-(k + ($ - _) / (I ? _ - z : z - _)) || 0);
      }, a: function(D) {
        return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
      }, p: function(D) {
        return { M: f, y: d, w: u, d: c, D: g, h: a, m: l, s, ms: i, Q: p }[D] || String(D || "").toLowerCase().replace(/s$/, "");
      }, u: function(D) {
        return D === void 0;
      } }, O = "en", F = {};
      F[O] = x;
      var A = "$isDayjsObject", y = function(D) {
        return D instanceof T || !(!D || !D[A]);
      }, h = function D(N, $, k) {
        var _;
        if (!N) return O;
        if (typeof N == "string") {
          var I = N.toLowerCase();
          F[I] && (_ = I), $ && (F[I] = $, _ = I);
          var z = N.split("-");
          if (!_ && z.length > 1) return D(z[0]);
        } else {
          var H = N.name;
          F[H] = N, _ = H;
        }
        return !k && _ && (O = _), _ || !k && O;
      }, b = function(D, N) {
        if (y(D)) return D.clone();
        var $ = typeof N == "object" ? N : {};
        return $.date = D, $.args = arguments, new T($);
      }, E = R;
      E.l = h, E.i = y, E.w = function(D, N) {
        return b(D, { locale: N.$L, utc: N.$u, x: N.$x, $offset: N.$offset });
      };
      var T = function() {
        function D($) {
          this.$L = h($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[A] = !0;
        }
        var N = D.prototype;
        return N.parse = function($) {
          this.$d = function(k) {
            var _ = k.date, I = k.utc;
            if (_ === null) return /* @__PURE__ */ new Date(NaN);
            if (E.u(_)) return /* @__PURE__ */ new Date();
            if (_ instanceof Date) return new Date(_);
            if (typeof _ == "string" && !/Z$/i.test(_)) {
              var z = _.match(m);
              if (z) {
                var H = z[2] - 1 || 0, V = (z[7] || "0").substring(0, 3);
                return I ? new Date(Date.UTC(z[1], H, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, V)) : new Date(z[1], H, z[3] || 1, z[4] || 0, z[5] || 0, z[6] || 0, V);
              }
            }
            return new Date(_);
          }($), this.init();
        }, N.init = function() {
          var $ = this.$d;
          this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
        }, N.$utils = function() {
          return E;
        }, N.isValid = function() {
          return this.$d.toString() !== w;
        }, N.isSame = function($, k) {
          var _ = b($);
          return this.startOf(k) <= _ && _ <= this.endOf(k);
        }, N.isAfter = function($, k) {
          return b($) < this.startOf(k);
        }, N.isBefore = function($, k) {
          return this.endOf(k) < b($);
        }, N.$g = function($, k, _) {
          return E.u($) ? this[k] : this.set(_, $);
        }, N.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, N.valueOf = function() {
          return this.$d.getTime();
        }, N.startOf = function($, k) {
          var _ = this, I = !!E.u(k) || k, z = E.p($), H = function(G, te) {
            var Y = E.w(_.$u ? Date.UTC(_.$y, te, G) : new Date(_.$y, te, G), _);
            return I ? Y : Y.endOf(c);
          }, V = function(G, te) {
            return E.w(_.toDate()[G].apply(_.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), _);
          }, P = this.$W, ee = this.$M, X = this.$D, ce = "set" + (this.$u ? "UTC" : "");
          switch (z) {
            case d:
              return I ? H(1, 0) : H(31, 11);
            case f:
              return I ? H(1, ee) : H(0, ee + 1);
            case u:
              var oe = this.$locale().weekStart || 0, B = (P < oe ? P + 7 : P) - oe;
              return H(I ? X - B : X + (6 - B), ee);
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
        }, N.endOf = function($) {
          return this.startOf($, !1);
        }, N.$set = function($, k) {
          var _, I = E.p($), z = "set" + (this.$u ? "UTC" : ""), H = (_ = {}, _[c] = z + "Date", _[g] = z + "Date", _[f] = z + "Month", _[d] = z + "FullYear", _[a] = z + "Hours", _[l] = z + "Minutes", _[s] = z + "Seconds", _[i] = z + "Milliseconds", _)[I], V = I === c ? this.$D + (k - this.$W) : k;
          if (I === f || I === d) {
            var P = this.clone().set(g, 1);
            P.$d[H](V), P.init(), this.$d = P.set(g, Math.min(this.$D, P.daysInMonth())).$d;
          } else H && this.$d[H](V);
          return this.init(), this;
        }, N.set = function($, k) {
          return this.clone().$set($, k);
        }, N.get = function($) {
          return this[E.p($)]();
        }, N.add = function($, k) {
          var _, I = this;
          $ = Number($);
          var z = E.p(k), H = function(ee) {
            var X = b(I);
            return E.w(X.date(X.date() + Math.round(ee * $)), I);
          };
          if (z === f) return this.set(f, this.$M + $);
          if (z === d) return this.set(d, this.$y + $);
          if (z === c) return H(1);
          if (z === u) return H(7);
          var V = (_ = {}, _[l] = r, _[a] = o, _[s] = n, _)[z] || 1, P = this.$d.getTime() + $ * V;
          return E.w(P, this);
        }, N.subtract = function($, k) {
          return this.add(-1 * $, k);
        }, N.format = function($) {
          var k = this, _ = this.$locale();
          if (!this.isValid()) return _.invalidDate || w;
          var I = $ || "YYYY-MM-DDTHH:mm:ssZ", z = E.z(this), H = this.$H, V = this.$m, P = this.$M, ee = _.weekdays, X = _.months, ce = _.meridiem, oe = function(te, Y, W, J) {
            return te && (te[Y] || te(k, I)) || W[Y].slice(0, J);
          }, B = function(te) {
            return E.s(H % 12 || 12, te, "0");
          }, G = ce || function(te, Y, W) {
            var J = te < 12 ? "AM" : "PM";
            return W ? J.toLowerCase() : J;
          };
          return I.replace(C, function(te, Y) {
            return Y || function(W) {
              switch (W) {
                case "YY":
                  return String(k.$y).slice(-2);
                case "YYYY":
                  return E.s(k.$y, 4, "0");
                case "M":
                  return P + 1;
                case "MM":
                  return E.s(P + 1, 2, "0");
                case "MMM":
                  return oe(_.monthsShort, P, X, 3);
                case "MMMM":
                  return oe(X, P);
                case "D":
                  return k.$D;
                case "DD":
                  return E.s(k.$D, 2, "0");
                case "d":
                  return String(k.$W);
                case "dd":
                  return oe(_.weekdaysMin, k.$W, ee, 2);
                case "ddd":
                  return oe(_.weekdaysShort, k.$W, ee, 3);
                case "dddd":
                  return ee[k.$W];
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
                  return String(k.$s);
                case "ss":
                  return E.s(k.$s, 2, "0");
                case "SSS":
                  return E.s(k.$ms, 3, "0");
                case "Z":
                  return z;
              }
              return null;
            }(te) || z.replace(":", "");
          });
        }, N.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, N.diff = function($, k, _) {
          var I, z = this, H = E.p(k), V = b($), P = (V.utcOffset() - this.utcOffset()) * r, ee = this - V, X = function() {
            return E.m(z, V);
          };
          switch (H) {
            case d:
              I = X() / 12;
              break;
            case f:
              I = X();
              break;
            case p:
              I = X() / 3;
              break;
            case u:
              I = (ee - P) / 6048e5;
              break;
            case c:
              I = (ee - P) / 864e5;
              break;
            case a:
              I = ee / o;
              break;
            case l:
              I = ee / r;
              break;
            case s:
              I = ee / n;
              break;
            default:
              I = ee;
          }
          return _ ? I : E.a(I);
        }, N.daysInMonth = function() {
          return this.endOf(f).$D;
        }, N.$locale = function() {
          return F[this.$L];
        }, N.locale = function($, k) {
          if (!$) return this.$L;
          var _ = this.clone(), I = h($, k, !0);
          return I && (_.$L = I), _;
        }, N.clone = function() {
          return E.w(this.$d, this);
        }, N.toDate = function() {
          return new Date(this.valueOf());
        }, N.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, N.toISOString = function() {
          return this.$d.toISOString();
        }, N.toString = function() {
          return this.$d.toUTCString();
        }, D;
      }(), L = T.prototype;
      return b.prototype = L, [["$ms", i], ["$s", s], ["$m", l], ["$H", a], ["$W", c], ["$M", f], ["$y", d], ["$D", g]].forEach(function(D) {
        L[D[1]] = function(N) {
          return this.$g(N, D[0], D[1]);
        };
      }), b.extend = function(D, N) {
        return D.$i || (D(N, T, b), D.$i = !0), b;
      }, b.locale = h, b.isDayjs = y, b.unix = function(D) {
        return b(1e3 * D);
      }, b.en = F[O], b.Ls = F, b.p = {}, b;
    });
  }(On)), On.exports;
}
var gl = vp();
const tt = /* @__PURE__ */ So(gl);
var _n = { exports: {} }, wp = _n.exports, gi;
function bp() {
  return gi || (gi = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(wp, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, i = /\d\d/, s = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, a = {}, c = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, u = function(m) {
        return function(C) {
          this[m] = +C;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = function(C) {
          if (!C || C === "Z") return 0;
          var x = C.match(/([+-]|\d\d)/g), S = 60 * x[1] + (+x[2] || 0);
          return S === 0 ? 0 : x[0] === "+" ? -S : S;
        }(m);
      }], p = function(m) {
        var C = a[m];
        return C && (C.indexOf ? C : C.s.concat(C.f));
      }, d = function(m, C) {
        var x, S = a.meridiem;
        if (S) {
          for (var R = 1; R <= 24; R += 1) if (m.indexOf(S(R, 0, C)) > -1) {
            x = R > 12;
            break;
          }
        } else x = m === (C ? "pm" : "PM");
        return x;
      }, g = { A: [l, function(m) {
        this.afternoon = d(m, !1);
      }], a: [l, function(m) {
        this.afternoon = d(m, !0);
      }], Q: [o, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [o, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [i, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [s, u("seconds")], ss: [s, u("seconds")], m: [s, u("minutes")], mm: [s, u("minutes")], H: [s, u("hours")], h: [s, u("hours")], HH: [s, u("hours")], hh: [s, u("hours")], D: [s, u("day")], DD: [i, u("day")], Do: [l, function(m) {
        var C = a.ordinal, x = m.match(/\d+/);
        if (this.day = x[0], C) for (var S = 1; S <= 31; S += 1) C(S).replace(/\[|\]/g, "") === m && (this.day = S);
      }], w: [s, u("week")], ww: [i, u("week")], M: [s, u("month")], MM: [i, u("month")], MMM: [l, function(m) {
        var C = p("months"), x = (p("monthsShort") || C.map(function(S) {
          return S.slice(0, 3);
        })).indexOf(m) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], MMMM: [l, function(m) {
        var C = p("months").indexOf(m) + 1;
        if (C < 1) throw new Error();
        this.month = C % 12 || C;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(m) {
        this.year = c(m);
      }], YYYY: [/\d{4}/, u("year")], Z: f, ZZ: f };
      function w(m) {
        var C, x;
        C = m, x = a && a.formats;
        for (var S = (m = C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(b, E, T) {
          var L = T && T.toUpperCase();
          return E || x[T] || n[T] || x[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, N, $) {
            return N || $.slice(1);
          });
        })).match(r), R = S.length, O = 0; O < R; O += 1) {
          var F = S[O], A = g[F], y = A && A[0], h = A && A[1];
          S[O] = h ? { regex: y, parser: h } : F.replace(/^\[|\]$/g, "");
        }
        return function(b) {
          for (var E = {}, T = 0, L = 0; T < R; T += 1) {
            var D = S[T];
            if (typeof D == "string") L += D.length;
            else {
              var N = D.regex, $ = D.parser, k = b.slice(L), _ = N.exec(k)[0];
              $.call(E, _), b = b.replace(_, "");
            }
          }
          return function(I) {
            var z = I.afternoon;
            if (z !== void 0) {
              var H = I.hours;
              z ? H < 12 && (I.hours += 12) : H === 12 && (I.hours = 0), delete I.afternoon;
            }
          }(E), E;
        };
      }
      return function(m, C, x) {
        x.p.customParseFormat = !0, m && m.parseTwoDigitYear && (c = m.parseTwoDigitYear);
        var S = C.prototype, R = S.parse;
        S.parse = function(O) {
          var F = O.date, A = O.utc, y = O.args;
          this.$u = A;
          var h = y[1];
          if (typeof h == "string") {
            var b = y[2] === !0, E = y[3] === !0, T = b || E, L = y[2];
            E && (L = y[2]), a = this.$locale(), !b && L && (a = x.Ls[L]), this.$d = function(k, _, I, z) {
              try {
                if (["x", "X"].indexOf(_) > -1) return new Date((_ === "X" ? 1e3 : 1) * k);
                var H = w(_)(k), V = H.year, P = H.month, ee = H.day, X = H.hours, ce = H.minutes, oe = H.seconds, B = H.milliseconds, G = H.zone, te = H.week, Y = /* @__PURE__ */ new Date(), W = ee || (V || P ? 1 : Y.getDate()), J = V || Y.getFullYear(), j = 0;
                V && !P || (j = P > 0 ? P - 1 : Y.getMonth());
                var Z, ne = X || 0, we = ce || 0, ae = oe || 0, pe = B || 0;
                return G ? new Date(Date.UTC(J, j, W, ne, we, ae, pe + 60 * G.offset * 1e3)) : I ? new Date(Date.UTC(J, j, W, ne, we, ae, pe)) : (Z = new Date(J, j, W, ne, we, ae, pe), te && (Z = z(Z).week(te).toDate()), Z);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(F, h, A, x), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), T && F != this.format(h) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (h instanceof Array) for (var D = h.length, N = 1; N <= D; N += 1) {
            y[1] = h[N - 1];
            var $ = x.apply(this, y);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            N === D && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else R.call(this, O);
        };
      };
    });
  }(_n)), _n.exports;
}
var yp = bp();
const xp = /* @__PURE__ */ So(yp);
gl.extend(xp);
const vl = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DDTHH:mm:ss",
  time: "HH:mm:ss"
};
function Zr(e, t = !1) {
  return e === "date" || t ? vl[e] : e === "time" ? "HH:mm" : "YYYY-MM-DDTHH:mm";
}
function Co(e, t = !1, n = "12h") {
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
function Sp(e, t = {}) {
  const n = [
    t.outputFormat,
    t.displayFormat,
    vl[e],
    Zr(e, !0),
    Zr(e, !1)
  ];
  for (const r of ["12h", "24h"])
    for (const o of [!0, !1])
      n.push(Co(e, o, r));
  return n.filter((r) => !!r);
}
function We(e, t, n = {}) {
  if (e == null || e.trim() === "")
    return null;
  const r = tt(e.trim(), Sp(t, n), !0);
  return r.isValid() ? r : null;
}
function Xr(e, t, n = {}) {
  return !e || !e.isValid() ? "" : e.format(
    n.outputFormat ?? Zr(t, n.showSeconds)
  );
}
function Cp(e, t, n = {}) {
  if (e.trim() === "")
    return "";
  const r = We(e, t, n);
  return r ? Xr(r, t, n) : e;
}
function wl(e, t, n = {}) {
  if (e == null || e === "")
    return "";
  const r = We(e, t, n);
  return r ? r.format(
    n.displayFormat ?? Co(
      t,
      n.showSeconds,
      n.hourFormat
    )
  ) : e;
}
function Ep(e) {
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
function bl(e, t, n) {
  return !!(t && e.isBefore(t, "day") || n && e.isAfter(n, "day"));
}
function Rp(e, t, n) {
  return !!(t && e.isBefore(t) || n && e.isAfter(n));
}
function $p({
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
  const f = { outputFormat: n, displayFormat: r, showSeconds: s, hourFormat: l }, p = l !== "24h", d = e === "date" || e === "datetime", g = e === "time" || e === "datetime", w = We(a ?? t, e, f), [m, C] = re(w), [x, S] = re(
    a ?? wl(t, e, f)
  ), [R, O] = re(
    w ?? tt().startOf("month")
  ), [F, A] = re(!0), [y, h] = re("days"), b = We(o, e, f), E = We(i, e, f);
  function T(W) {
    return W.format(
      r ?? Co(e, s, l)
    );
  }
  function L() {
    const W = x.trim();
    if (W === "") {
      c("");
      return;
    }
    const J = We(W, e, f);
    c(J ? Xr(J, e, f) : W);
  }
  const D = q(() => {
  });
  D.current = L;
  function N(W, { commit: J }) {
    C(W), O(W.startOf("month")), S(T(W)), J && c(Xr(W, e, f));
  }
  function $(W) {
    const J = W.target.value;
    S(J);
    const j = We(J, e, f);
    j && (C(j), O(j.startOf("month")));
  }
  function k(W) {
    var j, Z;
    const J = W.format("YYYY-MM-DD");
    (Z = (j = u.current) == null ? void 0 : j[J]) == null || Z.focus();
  }
  function _(W) {
    if (W.key === "Enter")
      W.preventDefault(), W.stopPropagation(), L();
    else if (W.key === "Escape" && F)
      W.preventDefault(), W.stopPropagation(), A(!1);
    else if (W.key === "ArrowDown" && d) {
      W.preventDefault(), A(!0);
      const J = m ?? tt();
      O(J.startOf("month")), requestAnimationFrame(() => k(J));
    }
  }
  function I(W) {
    if (bl(W, b, E)) return;
    const J = m ?? tt().startOf("day"), j = W.hour(J.hour()).minute(J.minute()).second(J.second());
    N(j, { commit: e === "date" });
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
        W.preventDefault(), W.stopPropagation(), I(J);
        return;
      default:
        return;
    }
    W.preventDefault(), W.stopPropagation(), O(j.startOf("month")), requestAnimationFrame(() => k(j));
  }
  function H(W, J) {
    const j = Number(J);
    if (Number.isNaN(j)) return;
    const ne = (m ?? tt().startOf("day"))[W](j);
    C(ne), S(T(ne));
  }
  const V = (m == null ? void 0 : m.hour()) ?? 0, P = V >= 12 ? "PM" : "AM", ee = p ? V % 12 || 12 : V;
  function X(W) {
    const J = Number(W);
    if (Number.isNaN(J)) return;
    const j = m ?? tt().startOf("day");
    let Z = J;
    if (p) {
      const we = (J % 12 + 12) % 12;
      Z = P === "PM" ? we + 12 : we;
    }
    const ne = j.hour(Z);
    C(ne), S(T(ne));
  }
  function ce(W) {
    if (W === P) return;
    const J = m ?? tt().startOf("day"), j = J.hour() % 12, Z = J.hour(W === "PM" ? j + 12 : j);
    C(Z), S(T(Z));
  }
  function oe() {
    O(y === "days" ? R.subtract(1, "month") : y === "months" ? R.subtract(1, "year") : R.subtract(10, "year"));
  }
  function B() {
    O(y === "days" ? R.add(1, "month") : y === "months" ? R.add(1, "year") : R.add(10, "year"));
  }
  function G() {
    h(y === "days" ? "months" : "years");
  }
  function te(W) {
    O(R.month(W)), h("days");
  }
  function Y(W) {
    O(R.year(W)), h("months");
  }
  return {
    // state
    open: F,
    setOpen: A,
    text: x,
    draft: m,
    viewMonth: R,
    view: y,
    minBound: b,
    maxBound: E,
    // derived
    is12h: p,
    hasCalendar: d,
    hasTime: g,
    meridiem: P,
    hourFieldValue: ee,
    commitTextRef: D,
    // trigger handlers
    handleInput: $,
    handleInputKeyDown: _,
    commitText: L,
    // calendar handlers
    handlePrev: oe,
    handleNext: B,
    handleTitleClick: G,
    selectDay: I,
    selectMonth: te,
    selectYear: Y,
    handleGridKeyDown: z,
    // time handlers
    setHour: X,
    setTimePart: H,
    setMeridiem: ce
  };
}
function ir(e) {
  return e.type === "date" || e.type === "datetime" || e.type === "time";
}
const Mp = [
  "addRows",
  "removeRows",
  "editRows",
  "downloadCsv",
  "search",
  "resetState",
  "backToPreviousStep",
  "undoRedo"
], Tp = (e) => e == null, yl = (e) => e.rows.filter((t) => Object.keys(t).length > 0);
function Op(e, t) {
  return e.flatMap((n) => {
    if (n.maxRows == null)
      return [];
    const r = t.find((i) => i.sheetId === n.id), o = r != null ? yl(r).length : 0;
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
  return Tp(e) ? !0 : typeof e == "string" ? e.trim() === "" : Array.isArray(e) ? e.length === 0 : !1;
}
const vi = (e) => [...new Set(e)];
function Ft(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function tn(e) {
  if (e == null)
    return null;
  const t = ["_", " ", ".", "-", "/"];
  return e.toString().toLowerCase().replace(
    new RegExp(t.map((n) => `\\${n}`).join("|"), "g"),
    ""
  );
}
function _p(e, t) {
  if (e == null)
    return "";
  let n = String(e);
  return n = n.replace(/"/g, '""'), (n.includes('"') || n.includes(t) || /[\n\r]/.test(n)) && (n = `"${n}"`), n;
}
function xl(e, t) {
  return e.map(
    (n) => n.map((r) => _p(r, t)).join(t)
  ).join(`
`);
}
function Eo(e, t, n, r) {
  const o = e.columns.map(
    (l) => r === "label" ? l.label : l.id
  ), i = t.map(
    (l) => e.columns.map((a) => {
      const c = l[a.id];
      return r === "value" || c == null ? Array.isArray(c) ? c.join(", ") : c : El(
        e,
        a,
        c,
        n
      );
    })
  ), s = xl([o, ...i], zh);
  return new Blob([s], { type: "text/csv" });
}
function Sl(e, t, n, r) {
  const o = Eo(
    e,
    t,
    n,
    r
  ), i = URL.createObjectURL(o), s = document.createElement("a");
  s.href = i, s.download = `${e.label}.csv`, s.click(), URL.revokeObjectURL(i);
}
function Cl(e, t) {
  const { sheetId: n, sheetColumnId: r } = e.typeArguments;
  return t[n][r] ?? {};
}
function Jr(e, t) {
  return Array.isArray(t) ? t.map((n) => e[n] ?? n).join(", ") : typeof t != "string" ? t : e[t] ?? t;
}
function El(e, t, n, r) {
  var o, i, s;
  if (t.type === "enum")
    return Jr(
      ((o = r[e.id]) == null ? void 0 : o[t.id]) ?? {},
      n
    );
  if (t.type === "reference" && n != null)
    return Jr(
      Cl(t, r),
      n
    );
  if (t.type === "boolean") {
    if (n === !0)
      return ((i = t.typeArguments) == null ? void 0 : i.trueLabel) ?? fl;
    if (n === !1)
      return ((s = t.typeArguments) == null ? void 0 : s.falseLabel) ?? hl;
  }
  return ir(t) && typeof n == "string" ? wl(
    n,
    t.type,
    t.typeArguments
  ) : n;
}
function Ro(e) {
  return e.map((t) => ({ ...t, rows: yl(t) }));
}
const wi = 4, Sn = 8;
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
  return jn(() => {
    if (!e) return;
    const s = () => {
      const l = t.current, a = n.current;
      if (!l || !a) return;
      const c = l.getBoundingClientRect(), u = window.innerHeight, f = window.innerWidth;
      if (c.bottom <= 0 || c.top >= u || c.right <= 0 || c.left >= f) {
        r();
        return;
      }
      const d = a.offsetHeight, g = a.offsetWidth, w = u - c.bottom, C = w < d && c.top > w ? c.top - d - wi : c.bottom + wi, x = Ft(
        C,
        Sn,
        u - d - Sn
      ), S = Ft(
        c.left,
        Sn,
        f - g - Sn
      );
      i({ top: x + window.scrollY, left: S + window.scrollX });
    };
    return s(), window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
      window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
    };
  }, [e]), o;
}
const Ap = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
function Dp({
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
  onDayKeyDown: p
}) {
  const { t: d } = me(), g = Math.floor(t.year() / 10) * 10, w = Ep(t), m = tt(), C = n ?? t.startOf("month"), x = e === "days" ? t.format("MMMM YYYY") : e === "months" ? t.format("YYYY") : `${g} - ${g + 9}`;
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
          children: /* @__PURE__ */ v(rp, { "aria-hidden": "true", className: "hc:size-5" })
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
          children: /* @__PURE__ */ v(ip, { "aria-hidden": "true", className: "hc:size-5" })
        }
      )
    ] }),
    e === "days" && /* @__PURE__ */ U("div", { role: "grid", "aria-label": d("components.datePicker.calendarLabel"), children: [
      /* @__PURE__ */ v("div", { role: "row", className: "hc:mb-1 hc:grid hc:grid-cols-7", children: Ap.map((S) => /* @__PURE__ */ v(
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
            const O = R.format("YYYY-MM-DD"), F = n != null && R.isSame(n, "day"), A = R.isSame(m, "day"), y = !R.isSame(t, "month"), h = bl(R, r, o), b = R.isSame(C, "day");
            return /* @__PURE__ */ v("div", { role: "gridcell", children: /* @__PURE__ */ v(
              "button",
              {
                type: "button",
                ref: (E) => {
                  i.current && (i.current[O] = E);
                },
                tabIndex: b ? 0 : -1,
                disabled: h,
                "aria-label": R.format("dddd, MMMM D, YYYY"),
                "aria-selected": F,
                "aria-current": A ? "date" : void 0,
                onClick: () => c(R),
                onKeyDown: (E) => p(E, R),
                className: `hc:flex hc:h-8 hc:w-8 hc:items-center hc:justify-center hc:rounded hc:text-sm ${F ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast hc:cursor-pointer" : h ? "hc:text-hello-csv-text-subtle hc:cursor-not-allowed hc:opacity-50" : y ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted hc:cursor-pointer" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted hc:cursor-pointer"} ${A && !F ? "hc:ring-hello-csv-primary hc:ring-1" : ""}`,
                children: R.date()
              }
            ) }, O);
          })
        },
        S[0].format("YYYY-MM-DD")
      ))
    ] }),
    e === "months" && /* @__PURE__ */ v("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, R) => {
      const O = R === t.month();
      return /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onMouseDown: (F) => F.preventDefault(),
          onClick: () => u(R),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${O ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: tt().month(R).format("MMM")
        },
        R
      );
    }) }),
    e === "years" && /* @__PURE__ */ v("div", { className: "hc:grid hc:grid-cols-3 hc:gap-1", children: Array.from({ length: 12 }, (S, R) => {
      const O = g - 1 + R, F = O === t.year(), A = O < g || O > g + 9;
      return /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onMouseDown: (y) => y.preventDefault(),
          onClick: () => f(O),
          className: `hc:cursor-pointer hc:rounded hc:px-2 hc:py-2 hc:text-sm ${F ? "hc:bg-hello-csv-primary hc:text-hello-csv-primary-contrast" : A ? "hc:text-hello-csv-text-subtle hc:hover:bg-hello-csv-muted" : "hc:text-hello-csv-text hc:hover:bg-hello-csv-muted"}`,
          children: O
        },
        O
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
            onMouseDown: (p) => p.preventDefault(),
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
        ...or,
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
const Pp = "hc:focus:outline-hello-csv-primary hc:bg-hello-csv-surface hc:text-hello-csv-text hc:outline-hello-csv-border-strong hc:placeholder:text-hello-csv-text-subtle hc:block hc:w-full hc:rounded-md hc:py-1.5 hc:pr-10 hc:pl-3 hc:text-base hc:outline-1 hc:-outline-offset-1 hc:focus:outline-2 hc:focus:-outline-offset-2 hc:sm:text-sm/6";
function kp({
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
  const { t: f } = me(), p = q(null), d = q(null), g = q(null), w = q({}), m = $p({
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
  }), { open: C, setOpen: x, hasCalendar: S, hasTime: R, commitTextRef: O } = m, F = Ip({
    open: C,
    inputRef: d,
    panelRef: g,
    onScrollAway: () => O.current()
  });
  return de(() => {
    var y, h, b;
    (y = d.current) == null || y.focus();
    const A = ((h = d.current) == null ? void 0 : h.value.length) ?? 0;
    (b = d.current) == null || b.setSelectionRange(A, A);
  }, []), de(() => {
    const A = (h) => {
      var b, E;
      return !!h && (!!((b = p.current) != null && b.contains(h)) || !!((E = g.current) != null && E.contains(h)));
    }, y = (h) => {
      A(h.target) && (A(h.relatedTarget) || O.current());
    };
    return document.addEventListener("focusout", y), () => document.removeEventListener("focusout", y);
  }, [O]), /* @__PURE__ */ U("div", { ref: p, className: "hc:relative hc:w-full", children: [
    /* @__PURE__ */ U("div", { className: "hc:relative", children: [
      /* @__PURE__ */ v(
        "input",
        {
          ...or,
          ref: d,
          "aria-label": u["aria-label"],
          type: "text",
          className: Pp,
          value: m.text,
          onInput: m.handleInput,
          onKeyDown: m.handleInputKeyDown
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          "aria-label": f("components.datePicker.pickerLabel"),
          "aria-expanded": C,
          onClick: () => x((A) => !A),
          className: "hc:text-hello-csv-text-muted hc:hover:text-hello-csv-text hc:absolute hc:inset-y-0 hc:right-0 hc:flex hc:cursor-pointer hc:items-center hc:pr-2 hc:outline-hidden",
          children: R && !S ? /* @__PURE__ */ v(dp, { "aria-hidden": "true", className: "hc:size-5 hc:sm:size-4" }) : /* @__PURE__ */ v(
            Xh,
            {
              "aria-hidden": "true",
              className: "hc:size-5 hc:sm:size-4"
            }
          )
        }
      )
    ] }),
    C && Un(
      // Portaled out of the grid so the popover escapes the scroll
      // container's overflow clipping and the editing cell's stacking
      // context. The wrapper carries ROOT_CLASS (`hello-csv`) because the
      // library's Tailwind utilities are scoped under it — without a
      // `.hello-csv` ancestor the panel would render unstyled (the theme
      // CSS variables live on <html>, so those resolve regardless). This
      // mirrors how Root.tsx styles the headlessui portal root.
      /* @__PURE__ */ v("div", { className: Vn, children: /* @__PURE__ */ U(
        "div",
        {
          ref: g,
          [cl]: "",
          onMouseDown: (A) => {
            A.target.closest("input, button, select, textarea") || A.preventDefault();
          },
          onKeyDown: (A) => {
            var y;
            A.key === "Escape" && (A.stopPropagation(), x(!1), (y = d.current) == null || y.focus());
          },
          style: { position: "absolute", top: F.top, left: F.left },
          className: "hc:bg-hello-csv-surface-raised hc:ring-hello-csv-border hc:z-99 hc:w-max hc:rounded-md hc:p-3 hc:text-base hc:ring-1 hc:shadow-lg hc:focus:outline-hidden hc:sm:text-sm",
          role: "dialog",
          "aria-label": f("components.datePicker.pickerLabel"),
          children: [
            S && /* @__PURE__ */ v(
              Dp,
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
            R && /* @__PURE__ */ v(
              Fp,
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
            /* @__PURE__ */ v("div", { className: "hc:mt-3 hc:flex hc:justify-end", children: /* @__PURE__ */ v(Fe, { variant: "primary", onClick: m.commitText, children: f("components.datePicker.done") }) })
          ]
        }
      ) }),
      document.body
    )
  ] });
}
function Np({
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
const Lp = mt(
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
), Vp = mt(
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
function Hp({
  variant: e,
  children: t,
  tooltipText: n,
  focusable: r = !0,
  placement: o = "bottom"
}) {
  const i = Lp({ variant: e, placement: o }), s = Vp({
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
const zp = mt(
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
function Bp({ activeButton: e, buttons: t }) {
  return /* @__PURE__ */ v("span", { className: "hello-csv-button-group hc:isolate hc:inline-flex hc:rounded-md hc:shadow-xs", children: t.map((n, r) => /* @__PURE__ */ v(
    "button",
    {
      type: "button",
      onClick: n.onClick,
      "aria-current": n.value === e,
      className: `${n.value === e ? "hello-csv-button-group-item hello-csv-button-group-item-active" : "hello-csv-button-group-item"} ${zp({
        active: n.value === e,
        variant: n.variant,
        location: r === 0 ? "left" : r === t.length - 1 ? "right" : "center"
      })}`,
      children: n.label
    },
    n.value
  )) });
}
const bt = 8, Cn = 8, st = 8, En = -4, jp = mt(
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
function Ue({
  tooltipText: e,
  children: t,
  className: n,
  hidden: r
}) {
  const [o, i] = re(!1), [s, l] = re({ top: 0, left: 0 }), [a, c] = re("bottom"), [u, f] = re(0), p = q(null), d = q(null), [g, w] = re(null);
  de(() => {
    const S = document.createElement("div");
    return S.classList.add(Vn), document.body.appendChild(S), w(S), () => {
      document.body.removeChild(S);
    };
  }, []);
  const m = () => {
    requestAnimationFrame(() => {
      if (!p.current || !d.current) return;
      const S = p.current.getBoundingClientRect(), R = d.current.getBoundingClientRect(), O = window.innerWidth, F = window.innerHeight, A = F - S.bottom, y = S.top, h = O - S.right;
      let b = "bottom";
      A >= R.height + bt ? b = "bottom" : y >= R.height + bt ? b = "top" : h >= R.width + bt ? b = "right" : b = "left";
      let E = 0, T = 0;
      switch (b) {
        case "bottom":
          E = S.bottom + bt + window.scrollY, T = S.left + S.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "top":
          E = S.top - R.height - bt + window.scrollY, T = S.left + S.width / 2 - R.width / 2 + window.scrollX;
          break;
        case "right":
          E = S.top + S.height / 2 - R.height / 2 + window.scrollY, T = S.right + bt + window.scrollX;
          break;
        case "left":
          E = S.top + S.height / 2 - R.height / 2 + window.scrollY, T = S.left - R.width - bt + window.scrollX;
          break;
      }
      E = Ft(
        E,
        Cn + window.scrollY,
        window.scrollY + F - R.height - Cn
      ), T = Ft(
        T,
        Cn + window.scrollX,
        window.scrollX + O - R.width - Cn
      );
      const L = S.left + S.width / 2 + window.scrollX, D = S.top + S.height / 2 + window.scrollY;
      let N = 0;
      if (b === "top" || b === "bottom") {
        const $ = L - T;
        N = Ft(
          $,
          st,
          R.width - st
        );
      } else {
        const $ = D - E;
        N = Ft(
          $,
          st,
          R.height - st
        );
      }
      c(b), l({ top: E, left: T }), f(N), i(!0);
    });
  }, C = () => i(!1), x = ke();
  return /* @__PURE__ */ U(
    "div",
    {
      ref: p,
      tabIndex: 0,
      className: `${n ?? ""} hc:relative hc:inline-block`,
      onMouseEnter: m,
      onMouseLeave: C,
      onFocus: m,
      onBlur: C,
      "aria-describedby": x,
      children: [
        t,
        g && Un(
          /* @__PURE__ */ U(
            "div",
            {
              id: x,
              role: "tooltip",
              "aria-label": e,
              "aria-hidden": !o,
              ref: d,
              className: jp({ visible: o, hidden: r }),
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
                    style: a === "bottom" ? { top: En, left: u - st / 2 } : a === "top" ? {
                      bottom: En,
                      left: u - st / 2
                    } : a === "left" ? {
                      right: En,
                      top: u - st / 2
                    } : {
                      left: En,
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
const Up = mt(
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
function $o({ children: e, variant: t }) {
  const n = `hello-csv-badge ${Up({ variant: t })}`;
  return /* @__PURE__ */ v("div", { className: n, children: e });
}
function Gp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Rl = /* @__PURE__ */ M.forwardRef(Gp);
function Wp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const qp = /* @__PURE__ */ M.forwardRef(Wp);
function Yp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Qr = /* @__PURE__ */ M.forwardRef(Yp);
function Kp({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Zp = /* @__PURE__ */ M.forwardRef(Kp), Xp = {
  info: {
    icon: /* @__PURE__ */ v(
      Zp,
      {
        className: "hc:text-hello-csv-primary-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-primary-extra-light hc:text-hello-csv-primary hc:rounded-md hc:p-4"
  },
  success: {
    icon: /* @__PURE__ */ v(
      Rl,
      {
        className: "hc:text-hello-csv-success-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-success-extra-light hc:text-hello-csv-success hc:rounded-md hc:p-4"
  },
  error: {
    icon: /* @__PURE__ */ v(
      Qr,
      {
        className: "hc:text-hello-csv-danger-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-danger-extra-light hc:text-hello-csv-danger hc:rounded-md hc:p-4"
  },
  warning: {
    icon: /* @__PURE__ */ v(
      Qr,
      {
        className: "hc:text-hello-csv-warning-light hc:size-5",
        "aria-hidden": "true"
      }
    ),
    classes: "hc:bg-hello-csv-warning-extra-light hc:text-hello-csv-warning hc:rounded-md hc:p-4"
  }
};
function Mo({
  variant: e = "info",
  header: t,
  description: n
}) {
  const { icon: r, classes: o } = Xp[e];
  return /* @__PURE__ */ v("div", { className: `hello-csv-alert hello-csv-alert-${e} ${o}`, children: /* @__PURE__ */ U("div", { className: "hc:flex", children: [
    /* @__PURE__ */ v("div", { className: "hc:mt-1 hc:shrink-0", children: r }),
    /* @__PURE__ */ U("div", { className: "hc:ml-3", children: [
      t && /* @__PURE__ */ v("div", { className: "hc:text-base", children: t }),
      /* @__PURE__ */ v("div", { className: "hc:text-sm", children: n })
    ] })
  ] }) });
}
function $l({ children: e }) {
  return /* @__PURE__ */ U("div", { className: "hc:flex", children: [
    /* @__PURE__ */ v("div", { className: "hc:shrink-0", children: /* @__PURE__ */ v(
      ih,
      {
        "aria-hidden": "true",
        className: "hc:text-hello-csv-danger hc:size-5"
      }
    ) }),
    /* @__PURE__ */ v("div", { className: "hc:ml-3 hc:flex-1 hc:md:flex hc:md:justify-between", children: /* @__PURE__ */ v("p", { className: "hc:text-hello-csv-danger hc:text-sm", children: e }) })
  ] });
}
const Jp = mt(
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
function Ml({ color: e = "dark" }) {
  return /* @__PURE__ */ v("span", { className: `${Jp({ color: e })}` });
}
function Tl(e, t) {
  return e.indexOf(t) !== -1;
}
function Ol(e, t) {
  const n = {};
  return e.forEach((r) => {
    t(r, n);
  }), n;
}
function _l(e) {
  const t = { ...e };
  return delete t.rowIndex, Object.values(t).length > 0;
}
async function Il(e, t, n) {
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
class Qp extends it {
  isValid(t) {
    if (!wt(t) && typeof t != "boolean")
      return this.definition.error || "validators.boolean";
  }
}
class em extends it {
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
class tm extends it {
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
    const r = We(n, this.dateType, this.typeArguments);
    if (!r)
      return this.definition.error || `validators.${this.dateType}`;
    const o = We(this.min, this.dateType, this.typeArguments), i = We(this.max, this.dateType, this.typeArguments);
    if (Rp(r, o, i))
      return this.definition.error || "validators.dateOutOfRange";
  }
}
function nm(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
class sr extends it {
  constructor(n) {
    super(n);
    ge(this, "regexp");
    typeof n.regex == "object" ? this.regexp = n.regex : this.regexp = new RegExp(nm(n.regex));
  }
  isValid(n) {
    if (!this.regexp.test((n == null ? void 0 : n.toString()) ?? ""))
      return this.definition.error || "validators.regex";
  }
}
class rm extends sr {
  constructor(t) {
    super({
      ...t,
      regex: /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i
    });
  }
}
class om extends it {
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
class im extends it {
  isValid(t) {
    if (!Number.isInteger(t))
      return this.definition.error || "validators.integer";
  }
}
class sm extends it {
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
class lm extends sr {
  constructor(t) {
    super({
      ...t,
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
    });
  }
}
class am extends sr {
  constructor(t) {
    super({
      ...t,
      regex: /^\d{5}(-\d{4})?$/
    });
  }
}
class cm extends it {
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
class um extends it {
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
function dm(e) {
  const t = {
    regex_matches: sr,
    required: cm,
    unique: um,
    includes: om,
    multi_includes: sm,
    boolean: Qp,
    is_integer: im,
    postal_code: am,
    phone_number: lm,
    email: rm,
    date: tm,
    custom: em
  };
  if (!(e.validate in t))
    throw new Error(
      `Missing validator for ${e.validate}. Valid validator options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.validate];
  return new n(e);
}
function Al(e, t) {
  var o, i, s;
  const n = e.typeArguments, r = t.find(
    (l) => l.sheetId === n.sheetId
  );
  return ((s = (i = (o = r == null ? void 0 : r.rows) == null ? void 0 : o.map((l) => l[n.sheetColumnId])) == null ? void 0 : i.filter((l) => !wt(l))) == null ? void 0 : s.filter((l, a, c) => c.indexOf(l) === a)) ?? [];
}
function To(e, t, n) {
  return e.find((r) => r.sheetId === t).rows.indexOf(n);
}
function fm(e, t, n, r, o, i, s, l) {
  return ue(() => {
    let c = e.rows;
    switch (n) {
      case "errors":
        c = e.rows.filter(
          (u, f) => r.some((p) => p.rowIndex === f)
        );
        break;
      case "valid":
        c = e.rows.filter(
          (u, f) => !r.some((p) => p.rowIndex === f)
        );
        break;
      case "all":
      default:
        c = e.rows;
    }
    if (o != null && (c = c.filter((u) => {
      const f = To(t, i.id, u);
      return r.find(
        (d) => d.rowIndex === f && d.columnId === o
      ) != null;
    })), s.trim() !== "") {
      const u = tn(s);
      c = c.filter(
        (f) => i.columns.some((p) => {
          var w;
          const d = f[p.id], { displayValue: g } = Dl(
            i,
            p,
            d,
            l
          );
          return (w = tn(g)) == null ? void 0 : w.includes(u);
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
function Oo(e) {
  return e.type === "calculated" ? !0 : !!e.isReadOnly;
}
function hm(e) {
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
function pm(e, t, n, r) {
  const o = Array.isArray(e) ? e : [], i = new Set(t.map((l) => l.value));
  return [...o.filter((l) => !i.has(l)).map((l) => ({
    label: n(String(l)),
    value: l,
    icon: r
  })), ...t];
}
function Dl(e, t, n, r) {
  const o = El(
    e,
    t,
    n,
    r
  ), i = wt(o);
  return { displayValue: i ? " " : o, valueEmpty: i };
}
function lr(e) {
  if (e.validators && e.validators.length > 0) {
    const t = e.validators.find(
      (n) => n.validate === "required"
    );
    return t != null && t.when == null;
  }
  return !1;
}
function mm(e, t) {
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
    const r = Al(
      e,
      t
    );
    n.push({
      values: r,
      validate: "includes"
    });
  }
  if (e.type === "boolean" && n.push({ validate: "boolean" }), ir(e)) {
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
async function gm(e, t, n, r, o) {
  const i = Ol(e.columns, (a, c) => {
    c[a.id] = [], [
      ...(a.validators ?? []).filter(
        (f) => (f.runOn ?? "change") === r
      ),
      ...r === "change" ? mm(a, n) : []
    ].forEach((f) => {
      c[a.id].push(
        dm(f)
      );
    });
  }), s = [];
  return e.columns.forEach((a) => {
    const c = i[a.id];
    c.length !== 0 && t.rows.forEach((u, f) => {
      if (!_l(u))
        return;
      const p = u[a.id], d = wt(p);
      c.forEach((g) => {
        d && !g.validatesEmptyValues || s.push({
          columnId: a.id,
          rowIndex: f,
          value: p,
          row: u,
          validator: g
        });
      });
    });
  }), (await Il(
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
async function vm(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ll, i = e.map(async (l) => {
    const a = t.find(
      (c) => c.sheetId === l.id
    );
    return a ? await gm(
      l,
      a,
      t,
      r,
      o
    ) : [];
  });
  return (await Promise.all(i)).flat();
}
const wm = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Fl = Math.pow(2, 53), bm = -Fl;
function ym(e) {
  if (wm.test(e)) {
    const t = parseFloat(e);
    return t > bm && t < Fl;
  }
  return !1;
}
function xm(e, t = {}) {
  const n = e.trim().toLowerCase(), r = [
    ...t.trueValues ?? qh,
    ...t.trueLabel ? [t.trueLabel] : []
  ].map((i) => i.toString().toLowerCase()), o = [
    ...t.falseValues ?? Yh,
    ...t.falseLabel ? [t.falseLabel] : []
  ].map((i) => i.toString().toLowerCase());
  return r.includes(n) ? !0 : o.includes(n) ? !1 : e;
}
function bi(e, t) {
  const n = e.trim(), r = t.find((i) => String(i.value) === n);
  if (r)
    return String(r.value);
  const o = t.find((i) => i.label === n);
  return o ? String(o.value) : n;
}
function _o(e, t) {
  switch (e.type) {
    case "number":
      return t.trim() === "" ? t : ym(t) ? parseFloat(t) : t;
    case "boolean":
      return xm(t, e.typeArguments);
    case "enum": {
      const n = e.typeArguments.values;
      if (e.typeArguments.multiple) {
        const r = e.typeArguments.delimiter ?? ",";
        return t.split(r).map((o) => o.trim()).filter((o) => o !== "").map((o) => bi(o, n));
      }
      return t.trim() === "" ? t : bi(t, n);
    }
    case "date":
    case "datetime":
    case "time":
      return Cp(t, e.type, e.typeArguments);
    default:
      return t;
  }
}
function Sm(e, t) {
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
function Cm(e) {
  return e.type === "enum" && e.typeArguments.multiple ? [] : "";
}
function Pl(e, t, n) {
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
function Em(e, t) {
  return Pl(
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
function Rm(e, t) {
  return Pl(
    e,
    t,
    (n, r, o) => {
      n.filter((i) => i.type === "calculated").forEach((i) => {
        r[i.id] = i.typeArguments.getValue(o);
      });
    }
  );
}
function $m(e, t) {
  return _o(t, e ?? "");
}
function Mm(e, t, n) {
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
        c != null && (l[c.sheetColumnId] = $m(
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
function Tm(e, t, n) {
  const r = n.data, o = Mm(e, t, r), i = Rm(
    e,
    o
  );
  return Em(e, i);
}
function ar(e) {
  return e.type !== "reference" && e.type !== "calculated";
}
function Om(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.has(n.csvColumnName) || t.set(n.csvColumnName, n);
  }), Array.from(t.values());
}
function _m(e, t) {
  const n = [], r = e.columns.filter(ar);
  return t.forEach((o) => {
    const i = tn(o), s = r.find(
      (l) => [l.id, ...l.suggestedMappingKeywords || []].map((a) => tn(a)).includes(i)
    ) ?? r.find(
      (l) => tn(l.label) === i
    );
    s && n.push({
      csvColumnName: o,
      sheetId: e.id,
      sheetColumnId: s.id
    });
  }), n;
}
const Im = (e, t) => {
  const n = [];
  return e.forEach((r) => {
    const o = _m(r, t);
    n.push(...o);
  }), Om(n);
};
function Am(e, t, n) {
  return n == null ? e.filter((o) => o.csvColumnName !== t) : [...e.filter(
    (o) => (o.sheetId !== n.sheetId || o.sheetColumnId !== n.sheetColumnId) && o.csvColumnName !== t
  ), { ...n, csvColumnName: t }];
}
function Dm(e, t) {
  const n = Fm(e, t), r = Pm(n);
  return km(r);
}
function Fm(e, t) {
  return e.map((n) => n[t]).filter((n) => n != null && n.trim() !== "").slice(0, al);
}
function Pm(e) {
  return [
    ...e,
    ...Array(al - e.length).fill("")
  ];
}
function km(e) {
  const t = [...e];
  let n = t.reduce(
    (r, o) => r + o.length,
    0
  );
  for (; n > Bh && t.length > 1; )
    t.pop(), n = t.reduce(
      (r, o) => r + o.length,
      0
    );
  return t;
}
function Nm(e, t) {
  const { t: n } = me();
  return e.flatMap(
    (o) => o.columns.filter((i) => ar(i)).map((i) => ({
      label: `${i.label}${lr(i) ? " *" : ""}`,
      value: {
        sheetId: o.id,
        sheetColumnId: i.id
      },
      group: t.some(
        (s) => s.sheetId === o.id && s.sheetColumnId === i.id
      ) ? n("mapper.used") : n("mapper.unused")
    }))
  ).sort((o, i) => Lm(o, i, n("mapper.unused")));
}
function Lm(e, t, n) {
  return e.group === n && t.group !== n ? -1 : e.group !== n && t.group === n ? 1 : e.label.localeCompare(t.label);
}
function Vm(e, t) {
  for (const n of e)
    for (const r of n.columns)
      if (lr(r) && ar(r) && t.find(
        (i) => i.sheetId === n.id && i.sheetColumnId === r.id
      ) == null)
        return !1;
  return !0;
}
function Hm({
  examples: e,
  csvHeader: t,
  column: n
}) {
  const { t: r, tHtml: o } = me();
  return t && /* @__PURE__ */ U("div", { className: "hc:border-hello-csv-border-strong hc:bg-hello-csv-surface hc:m-4 hc:rounded-sm hc:border hc:px-4 hc:sm:px-6 hc:lg:px-8", children: [
    (n == null ? void 0 : n.description) && /* @__PURE__ */ U("div", { className: "hc:border-hello-csv-border-strong hc:border-b hc:py-4 hc:text-sm", children: [
      /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text hc:font-semibold", children: n.label }),
      /* @__PURE__ */ v("p", { className: "hc:text-hello-csv-text-muted hc:mt-1 hc:whitespace-pre-line", children: n.description })
    ] }),
    /* @__PURE__ */ v("div", { className: "hc:mt-6 hc:flow-root", children: /* @__PURE__ */ v("div", { className: "hc:-mx-4 hc:-my-2 hc:overflow-x-auto hc:sm:-mx-6 hc:lg:-mx-8", children: /* @__PURE__ */ v("div", { className: "hc:inline-block hc:min-w-full hc:py-2 hc:align-middle", children: /* @__PURE__ */ U("table", { className: "hc:divide-hello-csv-border-strong hc:min-w-full hc:divide-y", children: [
      /* @__PURE__ */ v("thead", { children: /* @__PURE__ */ v("tr", { children: /* @__PURE__ */ v(
        "th",
        {
          scope: "col",
          className: "hc:text-hello-csv-text hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:sm:pl-6 hc:lg:pl-8",
          children: o("mapper.dataPreview", {
            csvHeader: /* @__PURE__ */ v($o, { children: t })
          })
        }
      ) }) }),
      /* @__PURE__ */ v("tbody", { className: "hc:divide-hello-csv-border-strong hc:divide-y", children: e == null ? void 0 : e.map((i, s) => /* @__PURE__ */ v("tr", { children: /* @__PURE__ */ v("td", { className: "hc:text-hello-csv-text hc:h-12 hc:py-4 hc:pr-3 hc:pl-4 hc:text-sm hc:font-medium hc:sm:pl-6 hc:lg:pl-8", children: i || s === 0 && /* @__PURE__ */ v("span", { className: "hc:text-hello-csv-text-muted hc:italic", children: r("mapper.noData") }) }) }, s)) })
    ] }) }) }) })
  ] });
}
function zm({
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
          /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v($o, { children: e.slice(0, 30) }) }),
          /* @__PURE__ */ v("div", { className: "hc:mx-5", children: /* @__PURE__ */ v(kf, { className: "hc:h-4 hc:w-4" }) })
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
const kl = "HelloCSV", Nl = 1, rt = "state";
async function Bm(e, t) {
  return new Promise((n, r) => {
    const o = Vl(e, t), i = indexedDB.open(kl, Nl);
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
async function Ll(e, t) {
  return new Promise((n, r) => {
    const o = Vl(e.sheetDefinitions, t), i = { ...e };
    delete i.sheetDefinitions;
    const s = indexedDB.open(kl, Nl);
    s.onerror = () => r(s.error), s.onsuccess = () => {
      const u = s.result.transaction(rt, "readwrite").objectStore(rt).put(i, o);
      u.onerror = () => r(u.error), u.onsuccess = () => n();
    }, s.onupgradeneeded = (l) => {
      const a = l.target.result;
      a.objectStoreNames.contains(rt) || a.createObjectStore(rt);
    };
  });
}
function Vl(e, t) {
  const n = t ? `importer-state-${t}` : "importer-state", r = JSON.stringify(e);
  return `${n}-${jm(r)}`;
}
function jm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return t;
}
function Um(e) {
  const t = {
    required: [],
    optional: []
  };
  return e.forEach((n) => {
    n.columns.filter((r) => ar(r)).forEach((r) => {
      const o = {
        sheetId: n.id,
        columnId: r.id,
        columnLabel: r.label,
        columnDescription: r.description
      };
      lr(r) ? t.required.push(o) : t.optional.push(o);
    });
  }), t;
}
const Gm = (e) => "." + (e.split(".").pop() ?? "").toLowerCase(), nn = (e) => {
  const t = ["B", "KB", "MB", "GB"];
  let n = e, r = 0;
  for (; n >= 1024 && r < t.length - 1; )
    n /= 1024, r++;
  return `${Math.round(n)} ${t[r]}`;
}, Wm = async (e) => new Promise((t) => {
  const n = new FileReader();
  n.onload = (r) => {
    t(r);
  }, n.readAsArrayBuffer(e);
}), qm = async (e, t) => {
  const n = t == null ? void 0 : t.find(
    (r) => r.mimeType === e.type
  );
  if (n) {
    const r = await Wm(e), { fileName: o, csvData: i } = await n.convert(
      r,
      e
    ), s = new Blob([i], { type: "text/csv" });
    return new File([s], o, {
      type: "text/csv"
    });
  }
  return e;
};
var In = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var Ym = In.exports, yi;
function Km() {
  return yi || (yi = 1, function(e, t) {
    ((n, r) => {
      e.exports = r();
    })(Ym, function n() {
      var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {}, o, i = !r.document && !!r.postMessage, s = r.IS_PAPA_WORKER || !1, l = {}, a = 0, c = {};
      function u(y) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(h) {
          var b = O(h);
          b.chunkSize = parseInt(b.chunkSize), h.step || h.chunk || (b.chunkSize = null), this._handle = new w(b), (this._handle.streamer = this)._config = b;
        }).call(this, y), this.parseChunk = function(h, b) {
          var E = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < E) {
            let L = this._config.newline;
            L || (T = this._config.quoteChar || '"', L = this._handle.guessLineEndings(h, T)), h = [...h.split(L).slice(E)].join(L);
          }
          this.isFirstChunk && A(this._config.beforeFirstChunk) && (T = this._config.beforeFirstChunk(h)) !== void 0 && (h = T), this.isFirstChunk = !1, this._halted = !1;
          var E = this._partialLine + h, T = (this._partialLine = "", this._handle.parse(E, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (h = T.meta.cursor, E = (this._finished || (this._partialLine = E.substring(h - this._baseIndex), this._baseIndex = h), T && T.data && (this._rowCount += T.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) r.postMessage({ results: T, workerId: c.WORKER_ID, finished: E });
            else if (A(this._config.chunk) && !b) {
              if (this._config.chunk(T, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = T = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(T.data), this._completeResults.errors = this._completeResults.errors.concat(T.errors), this._completeResults.meta = T.meta), this._completed || !E || !A(this._config.complete) || T && T.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), E || T && T.meta.paused || this._nextChunk(), T;
          }
          this._halted = !0;
        }, this._sendError = function(h) {
          A(this._config.error) ? this._config.error(h) : s && this._config.error && r.postMessage({ workerId: c.WORKER_ID, error: h, finished: !1 });
        };
      }
      function f(y) {
        var h;
        (y = y || {}).chunkSize || (y.chunkSize = c.RemoteChunkSize), u.call(this, y), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(b) {
          this._input = b, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (h = new XMLHttpRequest(), this._config.withCredentials && (h.withCredentials = this._config.withCredentials), i || (h.onload = F(this._chunkLoaded, this), h.onerror = F(this._chunkError, this)), h.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var b, E = this._config.downloadRequestHeaders;
              for (b in E) h.setRequestHeader(b, E[b]);
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
          h.readyState === 4 && (h.status < 200 || 400 <= h.status ? this._chunkError() : (this._start += this._config.chunkSize || h.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((b) => (b = b.getResponseHeader("Content-Range")) !== null ? parseInt(b.substring(b.lastIndexOf("/") + 1)) : -1)(h), this.parseChunk(h.responseText)));
        }, this._chunkError = function(b) {
          b = h.statusText || b, this._sendError(new Error(b));
        };
      }
      function p(y) {
        (y = y || {}).chunkSize || (y.chunkSize = c.LocalChunkSize), u.call(this, y);
        var h, b, E = typeof FileReader < "u";
        this.stream = function(T) {
          this._input = T, b = T.slice || T.webkitSlice || T.mozSlice, E ? ((h = new FileReader()).onload = F(this._chunkLoaded, this), h.onerror = F(this._chunkError, this)) : h = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var T = this._input, L = (this._config.chunkSize && (L = Math.min(this._start + this._config.chunkSize, this._input.size), T = b.call(T, this._start, L)), h.readAsText(T, this._config.encoding));
          E || this._chunkLoaded({ target: { result: L } });
        }, this._chunkLoaded = function(T) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(T.target.result);
        }, this._chunkError = function() {
          this._sendError(h.error);
        };
      }
      function d(y) {
        var h;
        u.call(this, y = y || {}), this.stream = function(b) {
          return h = b, this._nextChunk();
        }, this._nextChunk = function() {
          var b, E;
          if (!this._finished) return b = this._config.chunkSize, h = b ? (E = h.substring(0, b), h.substring(b)) : (E = h, ""), this._finished = !h, this.parseChunk(E);
        };
      }
      function g(y) {
        u.call(this, y = y || {});
        var h = [], b = !0, E = !1;
        this.pause = function() {
          u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(T) {
          this._input = T, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          E && h.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), h.length ? this.parseChunk(h.shift()) : b = !0;
        }, this._streamData = F(function(T) {
          try {
            h.push(typeof T == "string" ? T : T.toString(this._config.encoding)), b && (b = !1, this._checkIsFinished(), this.parseChunk(h.shift()));
          } catch (L) {
            this._streamError(L);
          }
        }, this), this._streamError = F(function(T) {
          this._streamCleanUp(), this._sendError(T);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), E = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function w(y) {
        var h, b, E, T, L = Math.pow(2, 53), D = -L, N = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, $ = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, k = this, _ = 0, I = 0, z = !1, H = !1, V = [], P = { data: [], errors: [], meta: {} };
        function ee(B) {
          return y.skipEmptyLines === "greedy" ? B.join("").trim() === "" : B.length === 1 && B[0].length === 0;
        }
        function X() {
          if (P && E && (oe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), E = !1), y.skipEmptyLines && (P.data = P.data.filter(function(Y) {
            return !ee(Y);
          })), ce()) {
            let Y = function(W, J) {
              A(y.transformHeader) && (W = y.transformHeader(W, J)), V.push(W);
            };
            if (P) if (Array.isArray(P.data[0])) {
              for (var B = 0; ce() && B < P.data.length; B++) P.data[B].forEach(Y);
              P.data.splice(0, 1);
            } else P.data.forEach(Y);
          }
          function G(Y, W) {
            for (var J = y.header ? {} : [], j = 0; j < Y.length; j++) {
              var Z = j, ne = Y[j], ne = ((we, ae) => ((pe) => (y.dynamicTypingFunction && y.dynamicTyping[pe] === void 0 && (y.dynamicTyping[pe] = y.dynamicTypingFunction(pe)), (y.dynamicTyping[pe] || y.dynamicTyping) === !0))(we) ? ae === "true" || ae === "TRUE" || ae !== "false" && ae !== "FALSE" && (((pe) => {
                if (N.test(pe) && (pe = parseFloat(pe), D < pe && pe < L))
                  return 1;
              })(ae) ? parseFloat(ae) : $.test(ae) ? new Date(ae) : ae === "" ? null : ae) : ae)(Z = y.header ? j >= V.length ? "__parsed_extra" : V[j] : Z, ne = y.transform ? y.transform(ne, Z) : ne);
              Z === "__parsed_extra" ? (J[Z] = J[Z] || [], J[Z].push(ne)) : J[Z] = ne;
            }
            return y.header && (j > V.length ? oe("FieldMismatch", "TooManyFields", "Too many fields: expected " + V.length + " fields but parsed " + j, I + W) : j < V.length && oe("FieldMismatch", "TooFewFields", "Too few fields: expected " + V.length + " fields but parsed " + j, I + W)), J;
          }
          var te;
          P && (y.header || y.dynamicTyping || y.transform) && (te = 1, !P.data.length || Array.isArray(P.data[0]) ? (P.data = P.data.map(G), te = P.data.length) : P.data = G(P.data, 0), y.header && P.meta && (P.meta.fields = V), I += te);
        }
        function ce() {
          return y.header && V.length === 0;
        }
        function oe(B, G, te, Y) {
          B = { type: B, code: G, message: te }, Y !== void 0 && (B.row = Y), P.errors.push(B);
        }
        A(y.step) && (T = y.step, y.step = function(B) {
          P = B, ce() ? X() : (X(), P.data.length !== 0 && (_ += B.data.length, y.preview && _ > y.preview ? b.abort() : (P.data = P.data[0], T(P, k))));
        }), this.parse = function(B, G, te) {
          var Y = y.quoteChar || '"', Y = (y.newline || (y.newline = this.guessLineEndings(B, Y)), E = !1, y.delimiter ? A(y.delimiter) && (y.delimiter = y.delimiter(B), P.meta.delimiter = y.delimiter) : ((Y = ((W, J, j, Z, ne) => {
            var we, ae, pe, Je;
            ne = ne || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var It = 0; It < ne.length; It++) {
              for (var ze, Gt = ne[It], Ce = 0, Be = 0, xe = 0, _e = (pe = void 0, new C({ comments: Z, delimiter: Gt, newline: J, preview: 10 }).parse(W)), Qe = 0; Qe < _e.data.length; Qe++) j && ee(_e.data[Qe]) ? xe++ : (ze = _e.data[Qe].length, Be += ze, pe === void 0 ? pe = ze : 0 < ze && (Ce += Math.abs(ze - pe), pe = ze));
              0 < _e.data.length && (Be /= _e.data.length - xe), (ae === void 0 || Ce <= ae) && (Je === void 0 || Je < Be) && 1.99 < Be && (ae = Ce, we = Gt, Je = Be);
            }
            return { successful: !!(y.delimiter = we), bestDelimiter: we };
          })(B, y.newline, y.skipEmptyLines, y.comments, y.delimitersToGuess)).successful ? y.delimiter = Y.bestDelimiter : (E = !0, y.delimiter = c.DefaultDelimiter), P.meta.delimiter = y.delimiter), O(y));
          return y.preview && y.header && Y.preview++, h = B, b = new C(Y), P = b.parse(h, G, te), X(), z ? { meta: { paused: !0 } } : P || { meta: { paused: !1 } };
        }, this.paused = function() {
          return z;
        }, this.pause = function() {
          z = !0, b.abort(), h = A(y.chunk) ? "" : h.substring(b.getCharIndex());
        }, this.resume = function() {
          k.streamer._halted ? (z = !1, k.streamer.parseChunk(h, !0)) : setTimeout(k.resume, 3);
        }, this.aborted = function() {
          return H;
        }, this.abort = function() {
          H = !0, b.abort(), P.meta.aborted = !0, A(y.complete) && y.complete(P), h = "";
        }, this.guessLineEndings = function(W, Y) {
          W = W.substring(0, 1048576);
          var Y = new RegExp(m(Y) + "([^]*?)" + m(Y), "gm"), te = (W = W.replace(Y, "")).split("\r"), Y = W.split(`
`), W = 1 < Y.length && Y[0].length < te[0].length;
          if (te.length === 1 || W) return `
`;
          for (var J = 0, j = 0; j < te.length; j++) te[j][0] === `
` && J++;
          return J >= te.length / 2 ? `\r
` : "\r";
        };
      }
      function m(y) {
        return y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function C(y) {
        var h = (y = y || {}).delimiter, b = y.newline, E = y.comments, T = y.step, L = y.preview, D = y.fastMode, N = null, $ = !1, k = y.quoteChar == null ? '"' : y.quoteChar, _ = k;
        if (y.escapeChar !== void 0 && (_ = y.escapeChar), (typeof h != "string" || -1 < c.BAD_DELIMITERS.indexOf(h)) && (h = ","), E === h) throw new Error("Comment character same as delimiter");
        E === !0 ? E = "#" : (typeof E != "string" || -1 < c.BAD_DELIMITERS.indexOf(E)) && (E = !1), b !== `
` && b !== "\r" && b !== `\r
` && (b = `
`);
        var I = 0, z = !1;
        this.parse = function(H, V, P) {
          if (typeof H != "string") throw new Error("Input must be a string");
          var ee = H.length, X = h.length, ce = b.length, oe = E.length, B = A(T), G = [], te = [], Y = [], W = I = 0;
          if (!H) return Ce();
          if (D || D !== !1 && H.indexOf(k) === -1) {
            for (var J = H.split(b), j = 0; j < J.length; j++) {
              if (Y = J[j], I += Y.length, j !== J.length - 1) I += b.length;
              else if (P) return Ce();
              if (!E || Y.substring(0, oe) !== E) {
                if (B) {
                  if (G = [], Je(Y.split(h)), Be(), z) return Ce();
                } else Je(Y.split(h));
                if (L && L <= j) return G = G.slice(0, L), Ce(!0);
              }
            }
            return Ce();
          }
          for (var Z = H.indexOf(h, I), ne = H.indexOf(b, I), we = new RegExp(m(_) + m(k), "g"), ae = H.indexOf(k, I); ; ) if (H[I] === k) for (ae = I, I++; ; ) {
            if ((ae = H.indexOf(k, ae + 1)) === -1) return P || te.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: G.length, index: I }), ze();
            if (ae === ee - 1) return ze(H.substring(I, ae).replace(we, k));
            if (k === _ && H[ae + 1] === _) ae++;
            else if (k === _ || ae === 0 || H[ae - 1] !== _) {
              Z !== -1 && Z < ae + 1 && (Z = H.indexOf(h, ae + 1));
              var pe = It((ne = ne !== -1 && ne < ae + 1 ? H.indexOf(b, ae + 1) : ne) === -1 ? Z : Math.min(Z, ne));
              if (H.substr(ae + 1 + pe, X) === h) {
                Y.push(H.substring(I, ae).replace(we, k)), H[I = ae + 1 + pe + X] !== k && (ae = H.indexOf(k, I)), Z = H.indexOf(h, I), ne = H.indexOf(b, I);
                break;
              }
              if (pe = It(ne), H.substring(ae + 1 + pe, ae + 1 + pe + ce) === b) {
                if (Y.push(H.substring(I, ae).replace(we, k)), Gt(ae + 1 + pe + ce), Z = H.indexOf(h, I), ae = H.indexOf(k, I), B && (Be(), z)) return Ce();
                if (L && G.length >= L) return Ce(!0);
                break;
              }
              te.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: G.length, index: I }), ae++;
            }
          }
          else if (E && Y.length === 0 && H.substring(I, I + oe) === E) {
            if (ne === -1) return Ce();
            I = ne + ce, ne = H.indexOf(b, I), Z = H.indexOf(h, I);
          } else if (Z !== -1 && (Z < ne || ne === -1)) Y.push(H.substring(I, Z)), I = Z + X, Z = H.indexOf(h, I);
          else {
            if (ne === -1) break;
            if (Y.push(H.substring(I, ne)), Gt(ne + ce), B && (Be(), z)) return Ce();
            if (L && G.length >= L) return Ce(!0);
          }
          return ze();
          function Je(xe) {
            G.push(xe), W = I;
          }
          function It(xe) {
            var _e = 0;
            return _e = xe !== -1 && (xe = H.substring(ae + 1, xe)) && xe.trim() === "" ? xe.length : _e;
          }
          function ze(xe) {
            return P || (xe === void 0 && (xe = H.substring(I)), Y.push(xe), I = ee, Je(Y), B && Be()), Ce();
          }
          function Gt(xe) {
            I = xe, Je(Y), Y = [], ne = H.indexOf(b, I);
          }
          function Ce(xe) {
            if (y.header && !V && G.length && !$) {
              var _e = G[0], Qe = {}, ur = new Set(_e);
              let Fo = !1;
              for (let At = 0; At < _e.length; At++) {
                let je = _e[At];
                if (Qe[je = A(y.transformHeader) ? y.transformHeader(je, At) : je]) {
                  let Wt, Po = Qe[je];
                  for (; Wt = je + "_" + Po, Po++, ur.has(Wt); ) ;
                  ur.add(Wt), _e[At] = Wt, Qe[je]++, Fo = !0, (N = N === null ? {} : N)[Wt] = je;
                } else Qe[je] = 1, _e[At] = je;
                ur.add(je);
              }
              Fo && console.warn("Duplicate headers found and renamed."), $ = !0;
            }
            return { data: G, errors: te, meta: { delimiter: h, linebreak: b, aborted: z, truncated: !!xe, cursor: W + (V || 0), renamedHeaders: N } };
          }
          function Be() {
            T(Ce()), G = [], te = [];
          }
        }, this.abort = function() {
          z = !0;
        }, this.getCharIndex = function() {
          return I;
        };
      }
      function x(y) {
        var h = y.data, b = l[h.workerId], E = !1;
        if (h.error) b.userError(h.error, h.file);
        else if (h.results && h.results.data) {
          var T = { abort: function() {
            E = !0, S(h.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: R, resume: R };
          if (A(b.userStep)) {
            for (var L = 0; L < h.results.data.length && (b.userStep({ data: h.results.data[L], errors: h.results.errors, meta: h.results.meta }, T), !E); L++) ;
            delete h.results;
          } else A(b.userChunk) && (b.userChunk(h.results, T, h.file), delete h.results);
        }
        h.finished && !E && S(h.workerId, h.results);
      }
      function S(y, h) {
        var b = l[y];
        A(b.userComplete) && b.userComplete(h), b.terminate(), delete l[y];
      }
      function R() {
        throw new Error("Not implemented.");
      }
      function O(y) {
        if (typeof y != "object" || y === null) return y;
        var h, b = Array.isArray(y) ? [] : {};
        for (h in y) b[h] = O(y[h]);
        return b;
      }
      function F(y, h) {
        return function() {
          y.apply(h, arguments);
        };
      }
      function A(y) {
        return typeof y == "function";
      }
      return c.parse = function(y, h) {
        var b = (h = h || {}).dynamicTyping || !1;
        if (A(b) && (h.dynamicTypingFunction = b, b = {}), h.dynamicTyping = b, h.transform = !!A(h.transform) && h.transform, !h.worker || !c.WORKERS_SUPPORTED) return b = null, c.NODE_STREAM_INPUT, typeof y == "string" ? (y = ((E) => E.charCodeAt(0) !== 65279 ? E : E.slice(1))(y), b = new (h.download ? f : d)(h)) : y.readable === !0 && A(y.read) && A(y.on) ? b = new g(h) : (r.File && y instanceof File || y instanceof Object) && (b = new p(h)), b.stream(y);
        (b = (() => {
          var E;
          return !!c.WORKERS_SUPPORTED && (E = (() => {
            var T = r.URL || r.webkitURL || null, L = n.toString();
            return c.BLOB_URL || (c.BLOB_URL = T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })));
          })(), (E = new r.Worker(E)).onmessage = x, E.id = a++, l[E.id] = E);
        })()).userStep = h.step, b.userChunk = h.chunk, b.userComplete = h.complete, b.userError = h.error, h.step = A(h.step), h.chunk = A(h.chunk), h.complete = A(h.complete), h.error = A(h.error), delete h.worker, b.postMessage({ input: y, config: h, workerId: b.id });
      }, c.unparse = function(y, h) {
        var b = !1, E = !0, T = ",", L = `\r
`, D = '"', N = D + D, $ = !1, k = null, _ = !1, I = ((() => {
          if (typeof h == "object") {
            if (typeof h.delimiter != "string" || c.BAD_DELIMITERS.filter(function(V) {
              return h.delimiter.indexOf(V) !== -1;
            }).length || (T = h.delimiter), typeof h.quotes != "boolean" && typeof h.quotes != "function" && !Array.isArray(h.quotes) || (b = h.quotes), typeof h.skipEmptyLines != "boolean" && typeof h.skipEmptyLines != "string" || ($ = h.skipEmptyLines), typeof h.newline == "string" && (L = h.newline), typeof h.quoteChar == "string" && (D = h.quoteChar), typeof h.header == "boolean" && (E = h.header), Array.isArray(h.columns)) {
              if (h.columns.length === 0) throw new Error("Option columns is empty");
              k = h.columns;
            }
            h.escapeChar !== void 0 && (N = h.escapeChar + D), h.escapeFormulae instanceof RegExp ? _ = h.escapeFormulae : typeof h.escapeFormulae == "boolean" && h.escapeFormulae && (_ = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(m(D), "g"));
        if (typeof y == "string" && (y = JSON.parse(y)), Array.isArray(y)) {
          if (!y.length || Array.isArray(y[0])) return z(null, y, $);
          if (typeof y[0] == "object") return z(k || Object.keys(y[0]), y, $);
        } else if (typeof y == "object") return typeof y.data == "string" && (y.data = JSON.parse(y.data)), Array.isArray(y.data) && (y.fields || (y.fields = y.meta && y.meta.fields || k), y.fields || (y.fields = Array.isArray(y.data[0]) ? y.fields : typeof y.data[0] == "object" ? Object.keys(y.data[0]) : []), Array.isArray(y.data[0]) || typeof y.data[0] == "object" || (y.data = [y.data])), z(y.fields || [], y.data || [], $);
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
          return V == null ? "" : V.constructor === Date ? JSON.stringify(V).slice(1, 25) : (X = !1, _ && typeof V == "string" && _.test(V) && (V = "'" + V, X = !0), ee = V.toString().replace(I, N), (X = X || b === !0 || typeof b == "function" && b(V, P) || Array.isArray(b) && b[P] || ((ce, oe) => {
            for (var B = 0; B < oe.length; B++) if (-1 < ce.indexOf(oe[B])) return !0;
            return !1;
          })(ee, c.BAD_DELIMITERS) || -1 < ee.indexOf(T) || ee.charAt(0) === " " || ee.charAt(ee.length - 1) === " ") ? D + ee + D : ee);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !i && !!r.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = C, c.ParserHandle = w, c.NetworkStreamer = f, c.FileStreamer = p, c.StringStreamer = d, c.ReadableStreamStreamer = g, r.jQuery && ((o = r.jQuery).fn.parse = function(y) {
        var h = y.config || {}, b = [];
        return this.each(function(L) {
          if (!(o(this).prop("tagName").toUpperCase() === "INPUT" && o(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var D = 0; D < this.files.length; D++) b.push({ file: this.files[D], inputElem: this, instanceConfig: o.extend({}, h) });
        }), E(), this;
        function E() {
          if (b.length === 0) A(y.complete) && y.complete();
          else {
            var L, D, N, $, k = b[0];
            if (A(y.before)) {
              var _ = y.before(k.file, k.inputElem);
              if (typeof _ == "object") {
                if (_.action === "abort") return L = "AbortError", D = k.file, N = k.inputElem, $ = _.reason, void (A(y.error) && y.error({ name: L }, D, N, $));
                if (_.action === "skip") return void T();
                typeof _.config == "object" && (k.instanceConfig = o.extend(k.instanceConfig, _.config));
              } else if (_ === "skip") return void T();
            }
            var I = k.instanceConfig.complete;
            k.instanceConfig.complete = function(z) {
              A(I) && I(z, k.file, k.inputElem), T();
            }, c.parse(k.file, k.instanceConfig);
          }
        }
        function T() {
          b.splice(0, 1), E();
        }
      }), s && (r.onmessage = function(y) {
        y = y.data, c.WORKER_ID === void 0 && y && (c.WORKER_ID = y.workerId), typeof y.input == "string" ? r.postMessage({ workerId: c.WORKER_ID, results: c.parse(y.input, y.config), finished: !0 }) : (r.File && y.input instanceof File || y.input instanceof Object) && (y = c.parse(y.input, y.config)) && r.postMessage({ workerId: c.WORKER_ID, results: y, finished: !0 });
      }), (f.prototype = Object.create(u.prototype)).constructor = f, (p.prototype = Object.create(u.prototype)).constructor = p, (d.prototype = Object.create(d.prototype)).constructor = d, (g.prototype = Object.create(u.prototype)).constructor = g, c;
    });
  }(In)), In.exports;
}
var Zm = Km();
const Hl = /* @__PURE__ */ So(Zm);
async function Xm({ file: e }) {
  return new Promise((t, n) => {
    Hl.parse(e, {
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
function Jm(e, t) {
  return e === "" ? [] : Hl.parse(e, {
    delimiter: t,
    header: !1,
    skipEmptyLines: !0
  }).data;
}
class wn {
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
class Qm extends wn {
  constructor(n) {
    super(n);
    ge(this, "key");
    ge(this, "parse");
    const { key: r, transformFn: o } = n;
    this.key = r, this.parse = o;
  }
}
class eg extends wn {
  parse(t) {
    if (typeof t == "string")
      return t.replace(/[^0-9]/g, "");
  }
}
class tg extends wn {
  parse(t) {
    if (typeof t == "string" && Tl(t, "-"))
      return t.split("-")[0];
  }
}
const xi = [
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
class ng extends wn {
  parse(t) {
    const n = xi.map((r) => r[0].toLowerCase());
    if (typeof t == "string" && Tl(n, t.toLowerCase())) {
      const r = n.indexOf(t.toLowerCase());
      return xi[r][1];
    }
  }
}
class rg extends wn {
  parse(t) {
    if (typeof t == "string")
      return t.trim();
  }
}
function og(e) {
  const t = {
    phone_number: eg,
    postal_code: tg,
    state_code: ng,
    strip: rg,
    custom: Qm
  };
  if (!(e.transformer in t))
    throw new Error(
      `Missing transformer for ${e.transformer}. Valid transformer options are ${Object.keys(t).join(", ")}`
    );
  const n = t[e.transformer];
  return new n(e);
}
async function ig(e, t, n, r) {
  const o = Ol(
    e.columns,
    (a, c) => {
      c[a.id] = new lg(), a.transformers && a.transformers.filter((u) => (u.runOn ?? "change") === n).forEach((u) => {
        c[a.id].push(
          og(u)
        );
      });
    }
  ), i = [];
  e.columns.forEach((a) => {
    const c = a.id, u = o[c];
    u.steps.length !== 0 && t.rows.forEach((f, p) => {
      if (!_l(f))
        return;
      const d = f[c];
      wt(d) || i.push({ rowIndex: p, columnId: c, value: d, pipeline: u });
    });
  });
  const s = await Il(
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
      (p) => a[p] !== u[p]
    ) ? { ...a, ...u } : a;
  });
}
async function sg(e, t, n = {}) {
  const r = n.phase ?? "change", o = n.concurrency ?? ll, i = [];
  for (const s of e) {
    const l = t.find(
      (a) => a.sheetId === s.id
    );
    if (l) {
      const a = await ig(
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
class lg {
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
let xr = 0;
function zl() {
  return xr = (xr + 1) % Number.MAX_SAFE_INTEGER, `${Date.now()}-${xr}`;
}
async function ag(e, t) {
  const n = bn(e);
  try {
    return t.enabled ? await cg(e, t) : n;
  } catch {
    return n;
  }
}
function bn(e) {
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
async function cg(e, t) {
  const n = await Bm(
    e,
    t.customKey
  );
  if (n != null)
    return n;
  const r = bn(e);
  return Ll(r, t.customKey), r;
}
class Bl {
  constructor(t, n) {
    ge(this, "initialState");
    ge(this, "importerDefinition");
    ge(this, "buildSteps");
    this.importerDefinition = t, this.initialState = n ?? bn(t.sheets), this.buildSteps = [];
  }
  async getState(t = "change") {
    let n = this.initialState;
    this.buildSteps.forEach((s) => {
      n = jl(n, s);
    });
    const r = this.importerDefinition.maxConcurrentAsyncOperations, o = await sg(
      this.importerDefinition.sheets,
      n.sheetData,
      { phase: t, concurrency: r }
    ).catch(() => n.sheetData), i = await vm(
      this.importerDefinition.sheets,
      o,
      { phase: t, concurrency: r }
    ).catch(() => n.validationErrors);
    return { ...n, sheetData: o, validationErrors: i };
  }
  async uploadFile(t) {
    const n = await qm(
      t,
      this.importerDefinition.customFileLoaders
    ), r = await Xm({ file: n }), o = r.meta.fields, i = this.importerDefinition.customSuggestedMapper != null ? await this.importerDefinition.customSuggestedMapper(
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
        amountOfEmptyRowsToAdd: t ?? Nh
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
    const t = await this.getState(), n = Tm(
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
class o0 extends Bl {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
}
const zn = class zn extends Bl {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t, n) {
    super(t, n);
  }
  async dispatchChange(t) {
    const n = this.buildSteps.some(
      (o) => zn.actionTypesThatRequireProcessing.has(o.type)
    ), r = zl();
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
ge(zn, "actionTypesThatRequireProcessing", /* @__PURE__ */ new Set([
  "DATA_MAPPED",
  "CELL_CHANGED",
  "REMOVE_ROWS",
  "RESTORE_SHEET_DATA",
  "ADD_EMPTY_ROW"
]));
let Hn = zn;
function ug(e, t, n) {
  const r = n.sheetDefinitions.find(
    (o) => o.id === t.sheetId
  );
  return r != null && r.columns.filter(
    (i) => i.type === "calculated"
  ).forEach((i) => {
    e[i.id] = i.typeArguments.getValue(e);
  }), e;
}
const jl = (e, t) => {
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
          return i[t.payload.rowIndex] = ug(
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
      return bn(e.sheetDefinitions);
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
}, dg = (e, t, n) => {
  const [r, o] = un(
    jl,
    n ?? bn(e)
  );
  return de(() => {
    const i = async () => {
      const s = await ag(e, t);
      o({ type: "SET_STATE", payload: { state: s } });
    };
    n == null && i();
  }, []), de(() => {
    t.enabled && Ll(r, t.customKey);
  }, [r, t]), [r, o];
}, Ul = ve({}), Gl = ve(
  {}
);
function fg({
  sheets: e,
  persistenceConfig: t,
  initialState: n,
  onStateChanged: r,
  children: o
}) {
  const [i, s] = dg(
    e,
    t,
    n
  ), l = q(i);
  return de(() => {
    l.current !== i && (r == null || r(l.current, i), l.current = i);
  }, [i, r]), /* @__PURE__ */ v(Ul.Provider, { value: i, children: /* @__PURE__ */ v(Gl.Provider, { value: s, children: o }) });
}
function Xe() {
  return he(Ul);
}
function hg() {
  return he(Gl);
}
function pg({
  onMappingsChanged: e,
  onMappingsSet: t,
  onBack: n
}) {
  var O;
  const { columnMappings: r, parsedFile: o } = Xe(), { sheets: i } = Ne(), { t: s } = me(), [l, a] = re(null), c = r ?? [], u = o, f = u.data, p = u.meta.fields, d = Nm(
    i,
    c
  ), g = Vm(
    i,
    c
  ), w = c.find(
    (F) => F.csvColumnName === l
  ), m = w ? (O = i.find((F) => F.id === w.sheetId)) == null ? void 0 : O.columns.find((F) => F.id === w.sheetColumnId) : void 0, C = ue(() => l ? Dm(f, l) : [], [l, f]), [x, S] = re(!1);
  async function R() {
    try {
      S(!0), await t();
    } finally {
      S(!1);
    }
  }
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: s("mapper.reviewAndConfirm") }),
    /* @__PURE__ */ v("div", { className: "hc:min-h-0 hc:flex-auto", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:justify-between hc:space-x-5", children: [
      /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-2 hc:flex-col", children: [
        /* @__PURE__ */ U("div", { className: "hc:my-5 hc:flex hc:text-sm hc:font-light hc:uppercase", children: [
          /* @__PURE__ */ v("div", { className: "hc:flex-1", children: s("mapper.importedColumn") }),
          /* @__PURE__ */ v("div", { className: "hc:flex-1", children: s("mapper.destinationColumn") })
        ] }),
        /* @__PURE__ */ v("div", { className: "hc:flex-1 hc:overflow-y-auto", children: p.map((F, A) => {
          const y = c.find(
            (h) => h.csvColumnName === F
          ) ?? null;
          return /* @__PURE__ */ v(
            zm,
            {
              csvHeader: F,
              currentMapping: y,
              setMapping: (h) => {
                const b = Am(
                  c,
                  F,
                  h
                );
                e(b);
              },
              mappingSelectionOptions: d,
              onMouseEnter: () => {
                a(F);
              }
            },
            A
          );
        }) })
      ] }),
      /* @__PURE__ */ v("div", { className: "hc:bg-hello-csv-muted hc:hidden hc:flex-1 hc:overflow-y-auto hc:sm:block", children: /* @__PURE__ */ v(
        Hm,
        {
          examples: C,
          csvHeader: l ?? "",
          column: m
        }
      ) })
    ] }) }),
    !g && /* @__PURE__ */ v("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ v($l, { children: s("mapper.mappingsNotValid") }) }),
    /* @__PURE__ */ v("div", { className: "hc:mt-auto hc:flex-none", children: /* @__PURE__ */ U("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ v(
        Fe,
        {
          variant: "secondary",
          outline: !0,
          onClick: n,
          disabled: x,
          children: s("mapper.back")
        }
      ),
      /* @__PURE__ */ v(
        Fe,
        {
          onClick: R,
          disabled: !g || x,
          children: /* @__PURE__ */ U("div", { className: "hc:flex hc:items-center", children: [
            x && /* @__PURE__ */ U(ut, { children: [
              /* @__PURE__ */ v(Ml, { color: "light" }),
              /* @__PURE__ */ v("div", { className: "hc:mr-2" })
            ] }),
            s("mapper.confirm")
          ] })
        }
      )
    ] }) })
  ] });
}
var mg = { NODE_ENV: "production" };
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
function cr(e) {
  return e instanceof Function;
}
function gg(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function vg(e, t) {
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
      const u = Math.round((Date.now() - s) * 100) / 100, f = Math.round((Date.now() - c) * 100) / 100, p = f / 16, d = (g, w) => {
        for (g = String(g); g.length < w; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${d(f, 5)} /${d(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
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
    key: mg.NODE_ENV === "development",
    onChange: r
  };
}
function wg(e, t, n, r) {
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
function bg(e, t, n, r) {
  var o, i;
  const l = {
    ...e._getDefaultColumnDef(),
    ...t
  }, a = l.accessorKey;
  let c = (o = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
  if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (p) => {
    let d = p;
    for (const w of a.split(".")) {
      var g;
      d = (g = d) == null ? void 0 : g[w];
    }
    return d;
  } : u = (p) => p[l.accessorKey]), !c)
    throw new Error();
  let f = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: n,
    columnDef: l,
    columns: [],
    getFlatColumns: se(() => [!0], () => {
      var p;
      return [f, ...(p = f.columns) == null ? void 0 : p.flatMap((d) => d.getFlatColumns())];
    }, le(e.options, "debugColumns")),
    getLeafColumns: se(() => [e._getOrderColumnsFn()], (p) => {
      var d;
      if ((d = f.columns) != null && d.length) {
        let g = f.columns.flatMap((w) => w.getLeafColumns());
        return p(g);
      }
      return [f];
    }, le(e.options, "debugColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(f, e);
  return f;
}
const Ee = "debugHeaders";
function Si(e, t, n) {
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
      const l = (i = r == null ? void 0 : r.map((f) => n.find((p) => p.id === f)).filter(Boolean)) != null ? i : [], a = (s = o == null ? void 0 : o.map((f) => n.find((p) => p.id === f)).filter(Boolean)) != null ? s : [], c = n.filter((f) => !(r != null && r.includes(f.id)) && !(o != null && o.includes(f.id)));
      return Rn(t, [...l, ...c, ...a], e);
    }, le(e.options, Ee)), e.getCenterHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Rn(t, n, e, "center")), le(e.options, Ee)), e.getLeftHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Rn(t, i, e, "left");
    }, le(e.options, Ee)), e.getRightHeaderGroups = se(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? o : [];
      return Rn(t, i, e, "right");
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
function Rn(e, t, n, r) {
  var o, i;
  let s = 0;
  const l = function(p, d) {
    d === void 0 && (d = 1), s = Math.max(s, d), p.filter((g) => g.getIsVisible()).forEach((g) => {
      var w;
      (w = g.columns) != null && w.length && l(g.columns, d + 1);
    }, 0);
  };
  l(e);
  let a = [];
  const c = (p, d) => {
    const g = {
      depth: d,
      id: [r, `${d}`].filter(Boolean).join("_"),
      headers: []
    }, w = [];
    p.forEach((m) => {
      const C = [...w].reverse()[0], x = m.column.depth === g.depth;
      let S, R = !1;
      if (x && m.column.parent ? S = m.column.parent : (S = m.column, R = !0), C && (C == null ? void 0 : C.column) === S)
        C.subHeaders.push(m);
      else {
        const O = Si(n, S, {
          id: [r, d, S.id, m == null ? void 0 : m.id].filter(Boolean).join("_"),
          isPlaceholder: R,
          placeholderId: R ? `${w.filter((F) => F.column === S).length}` : void 0,
          depth: d,
          index: w.length
        });
        O.subHeaders.push(m), w.push(O);
      }
      g.headers.push(m), m.headerGroup = g;
    }), a.push(g), d > 0 && c(w, d - 1);
  }, u = t.map((p, d) => Si(n, p, {
    depth: s,
    index: d
  }));
  c(u, s - 1), a.reverse();
  const f = (p) => p.filter((g) => g.column.getIsVisible()).map((g) => {
    let w = 0, m = 0, C = [0];
    g.subHeaders && g.subHeaders.length ? (C = [], f(g.subHeaders).forEach((S) => {
      let {
        colSpan: R,
        rowSpan: O
      } = S;
      w += R, C.push(O);
    })) : w = 1;
    const x = Math.min(...C);
    return m = m + x, g.colSpan = w, g.rowSpan = m, {
      colSpan: w,
      rowSpan: m
    };
  });
  return f((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const xg = (e, t, n, r, o, i, s) => {
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
    getLeafRows: () => vg(l.subRows, (a) => a.subRows),
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
    getAllCells: se(() => [e.getAllLeafColumns()], (a) => a.map((c) => wg(e, l, c, c.id)), le(e.options, "debugRows")),
    _getAllCellsByColumnId: se(() => [l.getAllCells()], (a) => a.reduce((c, u) => (c[u.column.id] = u, c), {}), le(e.options, "debugRows"))
  };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(l, e);
  }
  return l;
}, Sg = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Wl = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Wl.autoRemove = (e) => Ve(e);
const ql = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
ql.autoRemove = (e) => Ve(e);
const Yl = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Yl.autoRemove = (e) => Ve(e);
const Kl = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
Kl.autoRemove = (e) => Ve(e);
const Zl = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Zl.autoRemove = (e) => Ve(e) || !(e != null && e.length);
const Xl = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Xl.autoRemove = (e) => Ve(e) || !(e != null && e.length);
const Jl = (e, t, n) => e.getValue(t) === n;
Jl.autoRemove = (e) => Ve(e);
const Ql = (e, t, n) => e.getValue(t) == n;
Ql.autoRemove = (e) => Ve(e);
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
const et = {
  includesString: Wl,
  includesStringSensitive: ql,
  equalsString: Yl,
  arrIncludes: Kl,
  arrIncludesAll: Zl,
  arrIncludesSome: Xl,
  equals: Jl,
  weakEquals: Ql,
  inNumberRange: Io
};
function Ve(e) {
  return e == null || e === "";
}
const Cg = {
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
      return typeof r == "string" ? et.includesString : typeof r == "number" ? et.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? et.equals : Array.isArray(r) ? et.arrIncludes : et.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return cr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : et[e.columnDef.filterFn]
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
        if (Ci(o, s, e)) {
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
            if (Ci(a, s.value, l))
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
function Ci(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Eg = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Rg = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, $g = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Mg = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Tg = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Og = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!gg(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, _g = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ig = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Ag = (e, t) => t.length, Sr = {
  sum: Eg,
  min: Rg,
  max: $g,
  extent: Mg,
  mean: Tg,
  median: Og,
  unique: _g,
  uniqueCount: Ig,
  count: Ag
}, Dg = {
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
        return Sr.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Sr.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return cr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : Sr[e.columnDef.aggregationFn];
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
const Pg = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Pe("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = se((n) => [rn(t, n)], (n) => n.findIndex((r) => r.id === e.id), le(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = rn(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = rn(t, n);
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
}, Cr = () => ({
  left: [],
  right: []
}), kg = {
  getInitialState: (e) => ({
    columnPinning: Cr(),
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
      return e.setColumnPinning(t ? Cr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : Cr());
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
}, $n = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Er = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Ng = {
  getDefaultColumnDef: () => $n,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Er(),
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
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : $n.minSize, (r = i ?? e.columnDef.size) != null ? r : $n.size), (o = e.columnDef.maxSize) != null ? o : $n.maxSize);
    }, e.getStart = se((n) => [n, rn(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), le(t.options, "debugColumns")), e.getAfter = se((n) => [n, rn(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), le(t.options, "debugColumns")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Rr(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), l = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[r.id, r.getSize()]], a = Rr(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (C, x) => {
          typeof x == "number" && (t.setColumnSizingInfo((S) => {
            var R, O;
            const F = t.options.columnResizeDirection === "rtl" ? -1 : 1, A = (x - ((R = S == null ? void 0 : S.startOffset) != null ? R : 0)) * F, y = Math.max(A / ((O = S == null ? void 0 : S.startSize) != null ? O : 0), -0.999999);
            return S.columnSizingStart.forEach((h) => {
              let [b, E] = h;
              c[b] = Math.round(Math.max(E + E * y, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: A,
              deltaPercentage: y
            };
          }), (t.options.columnResizeMode === "onChange" || C === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, f = (C) => u("move", C), p = (C) => {
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
            d == null || d.removeEventListener("mousemove", g.moveHandler), d == null || d.removeEventListener("mouseup", g.upHandler), p(C.clientX);
          }
        }, w = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), f(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var x;
            d == null || d.removeEventListener("touchmove", w.moveHandler), d == null || d.removeEventListener("touchend", w.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), p((x = C.touches[0]) == null ? void 0 : x.clientX);
          }
        }, m = Lg() ? {
          passive: !1
        } : !1;
        Rr(i) ? (d == null || d.addEventListener("touchmove", w.moveHandler, m), d == null || d.addEventListener("touchend", w.upHandler, m)) : (d == null || d.addEventListener("mousemove", g.moveHandler, m), d == null || d.addEventListener("mouseup", g.upHandler, m)), t.setColumnSizingInfo((C) => ({
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
      e.setColumnSizingInfo(t ? Er() : (n = e.initialState.columnSizingInfo) != null ? n : Er());
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
let Mn = null;
function Lg() {
  if (typeof Mn == "boolean") return Mn;
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
  return Mn = e, Mn;
}
function Rr(e) {
  return e.type === "touchstart";
}
const Vg = {
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
function rn(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Hg = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, zg = {
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
    e.getGlobalAutoFilterFn = () => et.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return cr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : et[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, Bg = {
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
}, eo = 0, to = 10, $r = () => ({
  pageIndex: eo,
  pageSize: to
}), jg = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...$r(),
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
      e.setPagination(r ? $r() : (o = e.initialState.pagination) != null ? o : $r());
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
      e.setPageIndex(r ? eo : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : eo);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? to : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : to);
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
}, Mr = () => ({
  top: [],
  bottom: []
}), Ug = {
  getInitialState: (e) => ({
    rowPinning: Mr(),
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
          var f, p;
          return {
            top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((w) => !(l != null && l.has(w))),
            bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((w) => !(l != null && l.has(w))), ...Array.from(l)]
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
      return e.setRowPinning(t ? Mr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Mr());
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
}, Gg = {
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
        no(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = se(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Tr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, le(e.options, "debugTable")), e.getFilteredSelectedRowModel = se(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Tr(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, le(e.options, "debugTable")), e.getGroupedSelectedRowModel = se(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Tr(e, n) : {
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
        return no(l, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), l;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Ao(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ro(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return ro(e, n) === "all";
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
}, no = (e, t, n, r, o) => {
  var i;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => no(e, l.id, n, r, o));
};
function Tr(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(s, l) {
    return s.map((a) => {
      var c;
      const u = Ao(a, n);
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
function Ao(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function ro(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Ao(s, t) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const l = ro(s, t);
      l === "all" ? i = !0 : (l === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const oo = /([0-9]+)/gm, Wg = (e, t, n) => ea(pt(e.getValue(n)).toLowerCase(), pt(t.getValue(n)).toLowerCase()), qg = (e, t, n) => ea(pt(e.getValue(n)), pt(t.getValue(n))), Yg = (e, t, n) => Do(pt(e.getValue(n)).toLowerCase(), pt(t.getValue(n)).toLowerCase()), Kg = (e, t, n) => Do(pt(e.getValue(n)), pt(t.getValue(n))), Zg = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Xg = (e, t, n) => Do(e.getValue(n), t.getValue(n));
function Do(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function pt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ea(e, t) {
  const n = e.split(oo).filter(Boolean), r = t.split(oo).filter(Boolean);
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
  alphanumeric: Wg,
  alphanumericCaseSensitive: qg,
  text: Yg,
  textCaseSensitive: Kg,
  datetime: Zg,
  basic: Xg
}, Jg = {
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
        if (typeof i == "string" && (r = !0, i.split(oo).length > 1))
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
      return cr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Kt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const l = s == null ? void 0 : s.find((d) => d.id === e.id), a = s == null ? void 0 : s.findIndex((d) => d.id === e.id);
        let c = [], u, f = i ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var p;
          c = [...s, {
            id: e.id,
            desc: f
          }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
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
}, Qg = [
  yg,
  Vg,
  Pg,
  kg,
  Sg,
  Cg,
  Hg,
  //depends on ColumnFaceting
  zg,
  //depends on ColumnFiltering
  Jg,
  Dg,
  //depends on RowSorting
  Bg,
  jg,
  Ug,
  Gg,
  Ng
];
function ev(e) {
  var t, n;
  const r = [...Qg, ...(t = e._features) != null ? t : []];
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
  const f = {
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
      const d = ct(p, o.options);
      o.options = s(d);
    },
    getState: () => o.options.state,
    setState: (p) => {
      o.options.onStateChange == null || o.options.onStateChange(p);
    },
    _getRowId: (p, d, g) => {
      var w;
      return (w = o.options.getRowId == null ? void 0 : o.options.getRowId(p, d, g)) != null ? w : `${g ? [g.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, d) => {
      let g = (d ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
      if (!g && (g = o.getCoreRowModel().rowsById[p], !g))
        throw new Error();
      return g;
    },
    _getDefaultColumnDef: se(() => [o.options.defaultColumn], (p) => {
      var d;
      return p = (d = p) != null ? d : {}, {
        header: (g) => {
          const w = g.header.column.columnDef;
          return w.accessorKey ? w.accessorKey : w.accessorFn ? w.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var w, m;
          return (w = (m = g.renderValue()) == null || m.toString == null ? void 0 : m.toString()) != null ? w : null;
        },
        ...o._features.reduce((g, w) => Object.assign(g, w.getDefaultColumnDef == null ? void 0 : w.getDefaultColumnDef()), {}),
        ...p
      };
    }, le(e, "debugColumns")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: se(() => [o._getColumnDefs()], (p) => {
      const d = function(g, w, m) {
        return m === void 0 && (m = 0), g.map((C) => {
          const x = bg(o, C, m, w), S = C;
          return x.columns = S.columns ? d(S.columns, x, m + 1) : [], x;
        });
      };
      return d(p);
    }, le(e, "debugColumns")),
    getAllFlatColumns: se(() => [o.getAllColumns()], (p) => p.flatMap((d) => d.getFlatColumns()), le(e, "debugColumns")),
    _getAllFlatColumnsById: se(() => [o.getAllFlatColumns()], (p) => p.reduce((d, g) => (d[g.id] = g, d), {}), le(e, "debugColumns")),
    getAllLeafColumns: se(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, d) => {
      let g = p.flatMap((w) => w.getLeafColumns());
      return d(g);
    }, le(e, "debugColumns")),
    getColumn: (p) => o._getAllFlatColumnsById()[p]
  };
  Object.assign(o, f);
  for (let p = 0; p < o._features.length; p++) {
    const d = o._features[p];
    d == null || d.createTable == null || d.createTable(o);
  }
  return o;
}
function tv() {
  return (e) => se(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const l = [];
      for (let c = 0; c < o.length; c++) {
        const u = xg(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
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
function nv() {
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
          var p;
          const g = i[d], w = s[g.id], m = w.sortUndefined, C = (p = g == null ? void 0 : g.desc) != null ? p : !1;
          let x = 0;
          if (m) {
            const S = u.getValue(g.id), R = f.getValue(g.id), O = S === void 0, F = R === void 0;
            if (O || F) {
              if (m === "first") return O ? -1 : 1;
              if (m === "last") return O ? 1 : -1;
              x = O && F ? 0 : O ? m : -m;
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
function Ei(e, t) {
  return e ? rv(e) ? /* @__PURE__ */ M.createElement(e, t) : e : null;
}
function rv(e) {
  return ov(e) || typeof e == "function" || iv(e);
}
function ov(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function iv(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function sv(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = M.useState(() => ({
    current: ev(t)
  })), [r, o] = M.useState(() => n.current.initialState);
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
const lv = 500, Ri = 10;
function av(e, { disabled: t = !1 } = {}) {
  const n = q(null), r = q(0), o = q(0), i = q(!1), s = ie(
    (c) => {
      if (t) return;
      const u = c.touches[0];
      r.current = u.clientX, o.current = u.clientY, i.current = !1, n.current = setTimeout(() => {
        i.current || e();
      }, lv);
    },
    [e, t]
  ), l = ie(() => {
    n.current && (clearTimeout(n.current), n.current = null);
  }, []), a = ie(
    (c) => {
      const u = c.touches[0], f = Math.abs(u.clientX - r.current), p = Math.abs(u.clientY - o.current);
      (f > Ri || p > Ri) && (i.current = !0, l());
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
const ta = ve(null);
function cv({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ v(ta.Provider, { value: e, children: t });
}
function na() {
  const e = he(ta);
  if (!e)
    throw new Error(
      "useGridSelectionContext must be used within a GridSelectionProvider"
    );
  return e;
}
function $i(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Le(e, t) {
  return {
    row: $i(e.row, 0, Math.max(0, t.rowCount - 1)),
    col: $i(e.col, 0, Math.max(0, t.colCount - 1))
  };
}
const ra = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 }
};
function An(e, t, n) {
  const r = ra[t];
  return Le(
    { row: e.row + r.row, col: e.col + r.col },
    n
  );
}
function uv(e, t) {
  const n = e ?? t;
  return {
    top: Math.min(n.row, t.row),
    left: Math.min(n.col, t.col),
    bottom: Math.max(n.row, t.row),
    right: Math.max(n.col, t.col)
  };
}
function dv(e, t) {
  return e.row >= t.top && e.row <= t.bottom && e.col >= t.left && e.col <= t.right;
}
function io(e, t) {
  return e.row >= 0 && e.row < t.rowCount && e.col >= 0 && e.col < t.colCount;
}
function fv(e, t, n, r) {
  const o = ra[t], i = (u, f) => io({ row: u, col: f }, n), s = { row: e.row + o.row, col: e.col + o.col };
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
function hv(e, t) {
  return Math.max(1, Math.floor(e / t));
}
function pv(e) {
  return e.type === "boolean" || e.type === "enum" || e.type === "reference";
}
function Mi(e) {
  return pv(e) || ir(e);
}
function mv({
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
  errorsText: p,
  enumLabelDict: d
}) {
  const { t: g } = me(), { availableActions: w } = Ne(), m = na(), C = m.isEditing(e), x = m.isActive(e), S = m.isSelected(e), R = q(null), O = q(null), F = q(!1), A = Oo(l) || !w.includes("editRows");
  function y(B) {
    A || m.startEdit(e, B);
  }
  function h() {
    m.stopEditing();
  }
  de(() => {
    C && (F.current = !1, f(), R.current && R.current.focus());
  }, [C]);
  const { displayValue: b, valueEmpty: E } = Dl(
    s,
    l,
    a,
    d
  ), T = av(
    () => {
      A || y("preserve");
    },
    { disabled: A }
  ), L = p ? "hc:bg-hello-csv-danger-extra-light" : A ? "hc:bg-hello-csv-muted" : "", D = x ? "hc:z-1" : "";
  function N(B) {
    F.current = !0, c(_o(l, String(B ?? ""))), h();
  }
  function $(B) {
    var G;
    if (C) {
      if (B.key === "Escape") {
        F.current = !0, h(), B.preventDefault(), B.stopPropagation();
        return;
      }
      if (!Mi(l) && (B.key === "Enter" || B.key === "Tab")) {
        B.preventDefault(), B.stopPropagation(), N(((G = R.current) == null ? void 0 : G.value) ?? "");
        const te = B.key === "Tab" ? B.shiftKey ? "left" : "right" : B.shiftKey ? "up" : "down";
        m.setActive(An(e, te, t));
      }
    }
  }
  function k(B) {
    C || B.button !== 0 || (B.shiftKey ? m.extendTo(e) : m.beginDrag(e), B.preventDefault());
  }
  function _() {
    C || m.dragTo(e);
  }
  function I(B) {
    var te;
    if (!C || !Mi(l)) return;
    const G = B.relatedTarget;
    G && ((te = O.current) != null && te.contains(G)) || G instanceof Element && G.closest(`[${cl}]`) || h();
  }
  function z(B) {
    C || (B.detail > 1 ? y("preserve") : B.shiftKey ? m.extendTo(e) : m.setActive(e));
  }
  function H(B, { close: G = !0 } = {}) {
    F.current = !0, c(B), G && h();
  }
  const V = (() => {
    const B = m.state.editInitialValue;
    return B && typeof B == "object" && "char" in B ? B.char : void 0;
  })(), P = q(a);
  C || (P.current = a);
  const ee = V ?? P.current, X = {
    ref: O,
    role: "gridcell",
    "aria-colindex": r,
    "aria-selected": S,
    "data-cell-row": e.row,
    "data-cell-col": e.col,
    tabIndex: x ? 0 : -1,
    onKeyDown: $,
    onClick: z,
    onMouseDown: k,
    onMouseEnter: _,
    // focusout (bubbles) rather than blur (doesn't) so we catch the combobox
    // input losing focus to somewhere outside the cell.
    onFocusOut: I,
    className: `hc:relative hc:flex hc:h-full hc:w-full hc:items-stretch hc:outline-none ${D}`
  }, ce = x ? /* @__PURE__ */ v("div", { className: "hc:ring-hello-csv-primary hc:pointer-events-none hc:absolute hc:inset-0 hc:ring-2 hc:ring-inset" }) : S ? /* @__PURE__ */ v("div", { className: "hc:bg-hello-csv-primary/20 hc:pointer-events-none hc:absolute hc:inset-0" }) : null;
  function oe() {
    if (l.type === "boolean") {
      const B = [!0, !1].map((G) => {
        var te, Y;
        return {
          label: G ? ((te = l.typeArguments) == null ? void 0 : te.trueLabel) ?? fl : ((Y = l.typeArguments) == null ? void 0 : Y.falseLabel) ?? hl,
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
      const B = Al(
        l,
        u
      ), G = Cl(l, d), te = B.map((Y) => ({
        label: String(Jr(G, Y)),
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
        const te = pm(
          a,
          B,
          (Y) => g("components.select.invalidOption", { value: Y }),
          /* @__PURE__ */ v(
            hp,
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
    if (ir(l)) {
      const B = l.typeArguments ?? {};
      return /* @__PURE__ */ v(
        kp,
        {
          mode: l.type,
          value: typeof a == "string" ? a : "",
          seedText: V,
          ...B,
          "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
          onCommit: (G) => N(G)
        }
      );
    }
    return /* @__PURE__ */ v(
      ml,
      {
        "aria-label": `edit row ${Number(i) + 1}'s ${l.label}`,
        type: l.type === "number" ? "number" : "text",
        classes: "hc:block hc:w-full",
        value: ee,
        onBlur: (B) => {
          F.current || N(B);
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
    Hp,
    {
      focusable: !1,
      variant: p ? "error" : "info",
      placement: e.row > 0 && e.row >= t.rowCount - 1 ? "top" : "bottom",
      tooltipText: p || (A ? g("sheet.readOnly") : ""),
      children: /* @__PURE__ */ U("div", { ...X, children: [
        /* @__PURE__ */ v(
          "div",
          {
            "aria-label": `row ${Number(i) + 1} ${l.label} ${b}`,
            ...T,
            className: `hc:h-full hc:w-full hc:py-4 hc:pr-3 hc:pl-4 ${L} hc:touch-manipulation hc:truncate hc:overflow-hidden hc:whitespace-nowrap`,
            title: E ? void 0 : `${b}`,
            children: l.customRender ? l.customRender(a, b) : b
          }
        ),
        ce
      ] })
    }
  ) });
}
function gv({
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
  const { t: u } = me(), f = na();
  function p(h, b) {
    return r.filter(
      (E) => E.columnId === h && E.rowIndex === b
    );
  }
  const d = "hc:bg-hello-csv-muted hc:py-3.5 hc:pr-3 hc:pl-4 hc:text-left hc:text-sm hc:font-semibold hc:text-hello-csv-text hc:whitespace-nowrap hc:border-y hc:border-hello-csv-border-strong", g = "hc:text-sm hc:font-medium hc:whitespace-nowrap hc:text-hello-csv-text hc:border-b hc:border-hello-csv-border-strong", w = e.getRowModel().rows, m = is({
    count: w.length,
    getScrollElement: () => s.current,
    estimateSize: () => ul,
    measureElement: (h) => h == null ? void 0 : h.getBoundingClientRect().height,
    overscan: 20
  }), C = f.state.active, x = f.state.editing;
  de(() => {
    if (!C || x) return;
    m.scrollToIndex(C.row, { align: "auto" });
    let h = 0, b = 0;
    const E = () => {
      const T = s.current, L = T == null ? void 0 : T.querySelector(
        `[data-cell-row="${C.row}"][data-cell-col="${C.col}"]`
      );
      L ? (document.activeElement !== L && L.focus({ preventScroll: !0 }), S(T, L)) : b++ < 5 && (h = requestAnimationFrame(E));
    };
    return h = requestAnimationFrame(E), () => cancelAnimationFrame(h);
  }, [C == null ? void 0 : C.row, C == null ? void 0 : C.col, x == null ? void 0 : x.row, x == null ? void 0 : x.col]);
  function S(h, b) {
    const E = h.getBoundingClientRect(), T = b.getBoundingClientRect(), L = c ? dl : 0;
    T.left < E.left + L ? h.scrollLeft -= E.left + L - T.left : T.right > E.right && (h.scrollLeft += T.right - E.right);
  }
  const R = m.getVirtualItems().map((h) => ({
    row: w[h.index],
    index: h.index,
    start: h.start,
    end: h.end
  })), [O, F] = R.length > 0 ? [
    Math.max(
      0,
      R[0].start - m.options.scrollMargin
    ),
    Math.max(
      0,
      m.getTotalSize() - R[R.length - 1].end
    )
  ] : [0, 0], A = ie(
    (h) => {
      h && m.measureElement(h);
    },
    [m]
  ), y = t.columns.length;
  return /* @__PURE__ */ U(
    "table",
    {
      className: "hc:w-full hc:table-fixed hc:border-separate hc:border-spacing-0",
      "aria-label": u("sheet.sheetTitle"),
      role: "grid",
      "aria-multiselectable": "true",
      "aria-rowcount": w.length + 1,
      "aria-colcount": y + (c ? 1 : 0),
      children: [
        /* @__PURE__ */ v("thead", { className: "hc:bg-hello-csv-muted hc:sticky hc:top-0 hc:z-10", children: e.getHeaderGroups().map((h) => /* @__PURE__ */ v("tr", { role: "row", "aria-rowindex": 1, children: h.headers.map((b, E) => /* @__PURE__ */ v(
          "th",
          {
            role: "columnheader",
            "aria-colindex": E + 1,
            "aria-sort": b.column.getIsSorted() === "asc" ? "ascending" : b.column.getIsSorted() === "desc" ? "descending" : b.column.getCanSort() ? "none" : void 0,
            className: b.column.id === Kr ? `${d} hc:sticky hc:left-0 hc:z-20` : `hc:relative hc:z-10 ${d}`,
            colSpan: b.colSpan,
            style: { width: b.getSize() },
            children: /* @__PURE__ */ U(
              "div",
              {
                className: `hc:flex hc:w-full ${b.column.getCanSort() ? "hc:cursor-pointer hc:select-none" : ""}`,
                onClick: b.column.getToggleSortingHandler(),
                children: [
                  b.isPlaceholder ? null : /* @__PURE__ */ v("div", { children: Ei(
                    b.column.columnDef.header,
                    b.getContext()
                  ) }, `header-${h.id}-${b.id}`),
                  /* @__PURE__ */ v(
                    "span",
                    {
                      className: "hc:bg-hello-csv-text-muted hc:text-hello-csv-surface hc:ml-2 hc:flex-none hc:rounded-sm",
                      children: {
                        asc: /* @__PURE__ */ v(
                          cp,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        ),
                        desc: /* @__PURE__ */ v(
                          tp,
                          {
                            "aria-hidden": "true",
                            className: "hc:size-5"
                          }
                        )
                      }[b.column.getIsSorted()] ?? null
                    },
                    `sort-icon-${h.id}-${b.id}`
                  ),
                  b.column.getCanResize() && /* @__PURE__ */ v(
                    "div",
                    {
                      onMouseDown: b.getResizeHandler(),
                      onTouchStart: b.getResizeHandler(),
                      className: "hc:bg-hello-csv-border hc:absolute hc:top-0 hc:right-0 hc:h-full hc:w-0.5 hc:cursor-col-resize hc:touch-none hc:select-none"
                    },
                    `resize-icon-${h.id}-${b.id}`
                  )
                ]
              }
            )
          },
          b.id
        )) }, h.id)) }),
        /* @__PURE__ */ U(
          "tbody",
          {
            className: "hc:divide-hello-csv-border hc:divide-y",
            style: {
              height: `${m.getTotalSize()}px`
            },
            children: [
              /* @__PURE__ */ v("tr", { role: "presentation", children: /* @__PURE__ */ v("td", { style: { height: O } }) }),
              R.map(({ row: h, index: b }) => /* @__PURE__ */ v(
                "tr",
                {
                  role: "row",
                  "aria-rowindex": b + 2,
                  "data-index": b,
                  ref: A,
                  children: h.getVisibleCells().map((E, T) => {
                    if (E.column.id === Kr)
                      return /* @__PURE__ */ v(
                        "td",
                        {
                          role: "gridcell",
                          "aria-colindex": 1,
                          "aria-label": `Select row ${Number(h.id) + 1}`,
                          className: `hc:bg-hello-csv-muted ${g} hc:sticky hc:left-0 hc:z-6 hc:pr-3 hc:pl-4`,
                          style: { width: E.column.getSize() },
                          children: Ei(E.column.columnDef.cell, E.getContext())
                        },
                        E.id
                      );
                    const L = T - (c ? 1 : 0), D = t.columns[L].id, N = To(
                      n,
                      t.id,
                      h.original
                    ), $ = p(D, N).map((k) => u(k.message)).join(", ");
                    return /* @__PURE__ */ v(
                      mv,
                      {
                        coord: { row: b, col: L },
                        gridDims: a,
                        widthPx: E.column.getSize(),
                        ariaColIndex: L + (c ? 2 : 1),
                        tdClassName: g,
                        rowId: h.id,
                        sheetDefinition: t,
                        columnDefinition: t.columns.find((k) => k.id === D),
                        allData: n,
                        value: E.getValue(),
                        onUpdated: (k) => o(N, D, k),
                        clearRowsSelection: () => i([]),
                        errorsText: $,
                        enumLabelDict: l
                      },
                      E.id
                    );
                  })
                },
                h.id
              )),
              /* @__PURE__ */ v("tr", { role: "presentation", children: /* @__PURE__ */ v("td", { style: { height: F } }) })
            ]
          }
        )
      ]
    }
  );
}
function vv({ column: e }) {
  const { t } = me(), n = Oo(e);
  return /* @__PURE__ */ U(
    "div",
    {
      className: "hc:flex hc:items-center",
      title: n ? t("sheet.readOnly") : void 0,
      children: [
        n && /* @__PURE__ */ U("div", { className: "hc:relative hc:mr-3 hc:h-5 hc:w-5", children: [
          /* @__PURE__ */ v(ol, { className: "hc:text-hello-csv-text-subtle hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" }),
          /* @__PURE__ */ v(Qf, { className: "hc:text-hello-csv-text-muted hc:absolute hc:top-0 hc:left-0 hc:h-5 hc:w-5" })
        ] }),
        e.label,
        " ",
        lr(e) && "*",
        e.description && /* @__PURE__ */ v(Ue, { tooltipText: e.description, className: "hc:ml-1.5", children: /* @__PURE__ */ v(
          rl,
          {
            "aria-hidden": "true",
            className: "hc:text-hello-csv-text-muted hc:size-4"
          }
        ) })
      ]
    }
  );
}
function wv({
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
  sheetValidationErrors: p,
  rowValidationSummary: d,
  resetState: g,
  undo: w,
  redo: m,
  canUndo: C,
  canRedo: x,
  enumLabelDict: S
}) {
  const { csvDownloadMode: R, availableActions: O } = Ne(), { t: F } = me(), { processingInProgress: A } = Xe(), [y, h] = re(!1), [b, E] = re(!1);
  function T($) {
    const k = e.columns.find(
      (I) => I.id === $
    ), _ = vi(
      p.filter((I) => I.columnId === $).map((I) => I.rowIndex)
    ).length;
    return {
      label: `${(k == null ? void 0 : k.label) || $} (${_})`,
      value: $
    };
  }
  const L = vi(
    p.map(($) => $.columnId)
  ).map(($) => T($));
  a != null && L.find(($) => $.value === a) == null && L.push(T(a));
  const D = [
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
  return /* @__PURE__ */ U("div", { className: "hc:my-5 hc:flex hc:items-center", children: [
    /* @__PURE__ */ U("div", { className: "hc:flex hc:grow hc:flex-wrap hc:items-center hc:gap-5", children: [
      /* @__PURE__ */ v("div", { children: /* @__PURE__ */ v(Bp, { activeButton: o, buttons: D }) }),
      O.includes("search") && /* @__PURE__ */ v(
        ml,
        {
          clearable: !0,
          value: s,
          onChange: ($) => l($),
          placeholder: F("sheet.search"),
          iconBuilder: ($) => /* @__PURE__ */ v(Xf, { ...$ })
        }
      ),
      O.includes("undoRedo") && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(Ue, { tooltipText: F("sheet.undoTooltip"), children: /* @__PURE__ */ v(
          Zt,
          {
            label: F("sheet.undoTooltip"),
            disabled: !C,
            onClick: w,
            children: /* @__PURE__ */ v(Lf, { "aria-hidden": "true" })
          }
        ) }),
        /* @__PURE__ */ v(Ue, { tooltipText: F("sheet.redoTooltip"), children: /* @__PURE__ */ v(
          Zt,
          {
            label: F("sheet.redoTooltip"),
            disabled: !x,
            onClick: m,
            children: /* @__PURE__ */ v(Hf, { "aria-hidden": "true" })
          }
        ) })
      ] }),
      O.includes("removeRows") && /* @__PURE__ */ v(
        Ue,
        {
          tooltipText: F(
            n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
          ),
          children: /* @__PURE__ */ v(
            Zt,
            {
              label: F(
                n.length <= 0 ? "sheet.removeRowsTooltipNoRowsSelected" : "sheet.removeRowsTooltip"
              ),
              disabled: n.length <= 0,
              onClick: () => h(!0),
              children: /* @__PURE__ */ v(rh, { "aria-hidden": "true" })
            }
          )
        }
      ),
      O.includes("addRows") && /* @__PURE__ */ v(Ue, { tooltipText: F("sheet.addRowsTooltip"), children: /* @__PURE__ */ v(
        Zt,
        {
          label: F("sheet.addRowsTooltip"),
          onClick: f,
          children: /* @__PURE__ */ v(th, { "aria-hidden": "true" })
        }
      ) }),
      O.includes("downloadCsv") && /* @__PURE__ */ v(Ue, { tooltipText: F("sheet.downloadSheetTooltip"), children: /* @__PURE__ */ v(
        Zt,
        {
          label: F("sheet.downloadSheetTooltip"),
          disabled: t.length <= 0,
          onClick: () => Sl(
            e,
            t,
            S,
            R
          ),
          children: /* @__PURE__ */ v(Ff, { "aria-hidden": "true" })
        }
      ) }),
      /* @__PURE__ */ v(
        Et,
        {
          clearable: !0,
          displayPlaceholderWhenSelected: !0,
          placeholder: F("sheet.filterByError"),
          classes: "hc:min-w-48",
          options: L,
          value: a,
          onChange: ($) => c($)
        }
      ),
      O.includes("removeRows") && /* @__PURE__ */ v(
        Yr,
        {
          open: y,
          setOpen: h,
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
    /* @__PURE__ */ U("div", { className: "hc:ml-5 hc:flex hc:items-center", children: [
      A && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(Ml, { color: "dark" }),
        /* @__PURE__ */ v("div", { className: "hc:mr-2" })
      ] }),
      O.includes("resetState") && /* @__PURE__ */ U(ut, { children: [
        /* @__PURE__ */ v(Ue, { tooltipText: F("sheet.resetTooltip"), children: /* @__PURE__ */ v(
          ol,
          {
            className: "hc:h-6 hc:w-6 hc:cursor-pointer",
            onClick: () => E(!0)
          }
        ) }),
        /* @__PURE__ */ v(
          Yr,
          {
            open: b,
            setOpen: E,
            onConfirm: g,
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
function Zt({
  label: e,
  disabled: t = !1,
  onClick: n,
  children: r
}) {
  return /* @__PURE__ */ v(
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
function bv({
  visibleData: e,
  selectedRows: t,
  setSelectedRows: n
}) {
  const r = t.length === e.length && e.length > 0;
  function o() {
    n(r ? [] : e);
  }
  return /* @__PURE__ */ v(Pi, { checked: r, setChecked: o });
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
    Pi,
    {
      checked: t.includes(e.original),
      setChecked: () => r(e.original),
      label: `${Number(e.id) + 1}`
    }
  );
}
const oa = {
  active: null,
  anchor: null,
  editing: null,
  editInitialValue: "preserve"
};
function xv(e, t) {
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
      return oa;
    default:
      return e;
  }
}
function Sv() {
  const [e, t] = un(xv, oa), n = q(!1), r = ue(
    () => e.active ? uv(e.anchor, e.active) : null,
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
  ), f = ie(() => t({ type: "reset" }), []), p = ie((x) => {
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
  ), m = ie(
    (x) => {
      var S, R;
      return ((S = e.editing) == null ? void 0 : S.row) === x.row && ((R = e.editing) == null ? void 0 : R.col) === x.col;
    },
    [e.editing]
  ), C = ie(
    (x) => r ? dv(x, r) : !1,
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
    beginDrag: p,
    dragTo: d,
    endDrag: g,
    isActive: w,
    isEditing: m,
    isSelected: C
  };
}
function Cv(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
}
function Ti(e) {
  return e.ctrlKey || e.metaKey;
}
const Or = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right"
};
function Ev(e, t, n, r) {
  if (!t.editing && Ti(e)) {
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
    return Or[e.key] || e.key === "Tab" ? { type: "MoveActive", to: Le({ row: 0, col: 0 }, n) } : { type: "NoOp" };
  const i = r(o);
  if (Ti(e)) {
    const l = Or[e.key];
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
  const s = Or[e.key];
  if (s) {
    const l = An(o, s, n);
    return e.shiftKey ? { type: "ExtendSelection", to: l } : { type: "MoveActive", to: l };
  }
  switch (e.key) {
    case "Tab":
      return {
        type: "MoveActive",
        to: An(o, e.shiftKey ? "left" : "right", n)
      };
    case "Enter":
      return {
        type: "MoveActive",
        to: An(o, e.shiftKey ? "up" : "down", n)
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
  return Cv(e) ? i ? { type: "StartEdit", initialValue: { char: e.key } } : { type: "NoOp" } : { type: "NoOp" };
}
function Rv() {
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
function $v(e, t) {
  const n = e.map(
    (r) => r.map((o, i) => Sm(t[i], o))
  );
  return xl(n, "	");
}
function Mv(e, t, n, r, o) {
  const i = [];
  if (e.length === 1 && e[0] && e[0].length === 1 && o) {
    const l = e[0][0];
    for (let a = o.top; a <= o.bottom; a++)
      for (let c = o.left; c <= o.right; c++)
        io({ row: a, col: c }, n) && r(a, c) && i.push({ row: a, col: c, value: l });
    return i;
  }
  return e.forEach((l, a) => {
    l.forEach((c, u) => {
      const f = t.row + a, p = t.col + u;
      io({ row: f, col: p }, n) && r(f, p) && i.push({ row: f, col: p, value: c });
    });
  }), i;
}
function Tv(e, t) {
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
function Ov({
  sheetDefinition: e,
  data: t,
  rowData: n,
  allData: r,
  canEditRows: o,
  setRowsData: i,
  undo: s,
  redo: l
}) {
  const a = Sv(), c = Rv(), u = q(null), f = e.columns, p = ue(
    () => ({ rowCount: n.length, colCount: f.length }),
    [n.length, f.length]
  );
  de(() => {
    a.clampToBounds(p);
  }, [p.rowCount, p.colCount]), de(() => {
    const h = () => a.endDrag();
    return window.addEventListener("mouseup", h), () => window.removeEventListener("mouseup", h);
  }, []);
  const d = q(a);
  d.current = a, de(() => {
    const h = (b) => {
      const E = d.current;
      if (E.state.editing) return;
      const T = u.current;
      T && !T.contains(b.target) && E.reset();
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const g = (h) => {
    if (!h) return !1;
    const b = f[h.col];
    return b ? !Oo(b) && o : !1;
  }, w = (h, b) => {
    var E;
    return (E = n[h]) == null ? void 0 : E[f[b].id];
  }, m = (h, b) => wt(w(h, b)), C = (h) => To(r, e.id, n[h]), x = (h) => {
    if (h.length === 0) return;
    const b = h.map((T) => ({
      rowIndex: C(T.row),
      columnId: f[T.col].id,
      value: T.value
    })), E = Tv(b, t.rows);
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
    const b = [];
    for (let T = h.top; T <= h.bottom; T++) {
      const L = [];
      for (let D = h.left; D <= h.right; D++)
        L.push(w(T, D));
      b.push(L);
    }
    const E = $v(
      b,
      f.slice(h.left, h.right + 1)
    );
    c.write(E);
  }, R = () => {
    const h = a.range;
    if (!h) return;
    const b = [];
    for (let E = h.top; E <= h.bottom; E++)
      for (let T = h.left; T <= h.right; T++)
        g({ col: T }) && b.push({
          row: E,
          col: T,
          value: Cm(f[T])
        });
    x(b);
  }, O = () => {
    S(), R();
  }, F = async () => {
    const h = a.state.active;
    if (!h) return;
    const b = await c.read();
    if (!b) return;
    const E = Jm(b, "	");
    if (E.length === 0) return;
    const T = Mv(
      E,
      h,
      p,
      (L, D) => g({ col: D }),
      a.range ?? void 0
    );
    x(
      T.map((L) => ({
        row: L.row,
        col: L.col,
        value: _o(f[L.col], L.value)
      }))
    );
  }, A = () => {
    const h = a.range;
    if (!h || h.bottom === h.top) return;
    const b = [];
    for (let E = h.left; E <= h.right; E++) {
      const T = w(h.top, E);
      for (let L = h.top + 1; L <= h.bottom; L++)
        g({ col: E }) && b.push({ row: L, col: E, value: T });
    }
    x(b);
  };
  return { selection: a, dims: p, tableContainerRef: u, handleGridKeyDown: (h) => {
    if (a.state.editing) return;
    const b = a.state.active;
    if ((h.key === "PageDown" || h.key === "PageUp") && b) {
      const T = u.current, L = hv(
        (T == null ? void 0 : T.clientHeight) ?? 0,
        ul
      ), D = Le(
        {
          row: b.row + (h.key === "PageDown" ? L : -L),
          col: b.col
        },
        p
      );
      h.shiftKey ? a.extendTo(D) : a.setActive(D), h.preventDefault();
      return;
    }
    const E = Ev(
      {
        key: h.key,
        shiftKey: h.shiftKey,
        ctrlKey: h.ctrlKey,
        metaKey: h.metaKey,
        altKey: h.altKey
      },
      a.state,
      p,
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
        if (!b) break;
        const T = fv(b, E.direction, p, m);
        h.shiftKey ? a.extendTo(T) : a.setActive(T), h.preventDefault();
        break;
      }
      case "SelectAll":
        a.selectAll(p), h.preventDefault();
        break;
      case "StartEdit":
        b && a.startEdit(b, E.initialValue), h.preventDefault();
        break;
      case "ClearCells":
        R(), h.preventDefault();
        break;
      case "Copy":
        S(), h.preventDefault();
        break;
      case "Cut":
        O(), h.preventDefault();
        break;
      case "Paste":
        F(), h.preventDefault();
        break;
      case "FillDown":
        A(), h.preventDefault();
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
function _v({
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
  enumLabelDict: p
}) {
  const { sheetData: d } = Xe(), { availableActions: g } = Ne(), [w, m] = re([]), [C, x] = re("all"), [S, R] = re(""), [O, F] = re(
    null
  ), A = fm(
    t,
    d,
    C,
    n,
    O,
    e,
    S,
    p
  ), y = g.includes("removeRows"), h = g.includes("editRows"), b = g.includes("undoRedo"), { selection: E, dims: T, tableContainerRef: L, handleGridKeyDown: D } = Ov({
    sheetDefinition: e,
    data: t,
    rowData: A,
    allData: d,
    canEditRows: h,
    setRowsData: o,
    // Gate the keyboard shortcuts on the same flag as the toolbar buttons.
    undo: b ? a : void 0,
    redo: b ? c : void 0
  });
  de(() => {
    m([]), x("all"), E.reset();
  }, [e]);
  const N = ue(() => {
    const I = t.rows, z = I.filter(
      (V, P) => !n.some((ee) => ee.rowIndex === P)
    ), H = I.filter(
      (V, P) => n.some((ee) => ee.rowIndex === P)
    );
    return {
      all: I.length,
      valid: z.length,
      errors: H.length
    };
  }, [t, n]), $ = ue(() => [
    ...g.includes(
      "removeRows"
    ) ? [
      {
        id: Kr,
        header: () => /* @__PURE__ */ v(
          bv,
          {
            visibleData: A,
            selectedRows: w,
            setSelectedRows: m
          }
        ),
        cell: ({ row: z }) => /* @__PURE__ */ v(
          yv,
          {
            row: z,
            selectedRows: w,
            setSelectedRows: m
          }
        ),
        enableResizing: !1,
        enableSorting: !1,
        enableColumnFilter: !1,
        enableMultiSort: !1,
        enableGlobalFilter: !1,
        size: dl
      }
    ] : [],
    ...e.columns.map(
      (z) => ({
        id: z.id,
        accessorFn: (H) => H[z.id],
        header: () => /* @__PURE__ */ v(vv, { column: z }),
        sortUndefined: "last",
        sortingFn: "auto",
        meta: { columnLabel: z.label },
        enableResizing: !0
      })
    )
  ], [e, w, A, g]), k = sv({
    data: A,
    columns: $,
    getCoreRowModel: tv(),
    getSortedRowModel: nv(),
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    defaultColumn: {
      minSize: Uh,
      maxSize: Gh,
      size: Wh
    }
  });
  function _(I, z, H) {
    const V = { ...t.rows[I] };
    H === void 0 ? delete V[z] : V[z] = H, r({
      sheetId: e.id,
      value: V,
      rowIndex: I
    });
  }
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v(
      wv,
      {
        sheetDefinition: e,
        rowData: A,
        selectedRows: w,
        setSelectedRows: m,
        viewMode: C,
        setViewMode: x,
        searchPhrase: S,
        setSearchPhrase: R,
        errorColumnFilter: O,
        setErrorColumnFilter: F,
        removeRows: i,
        addEmptyRow: s,
        sheetValidationErrors: n,
        rowValidationSummary: N,
        resetState: l,
        undo: a,
        redo: c,
        canUndo: u,
        canRedo: f,
        enumLabelDict: p
      }
    ) }),
    /* @__PURE__ */ v(cv, { value: E, children: /* @__PURE__ */ v(
      "div",
      {
        className: "hc:min-h-0 hc:flex-1 hc:overflow-auto",
        ref: L,
        tabIndex: 0,
        onKeyDown: D,
        children: /* @__PURE__ */ v(
          gv,
          {
            tableContainerRef: L,
            table: k,
            sheetDefinition: e,
            allData: d,
            sheetValidationErrors: n,
            onCellValueChanged: _,
            setSelectedRows: m,
            enumLabelDict: p,
            gridDims: T,
            hasCheckboxColumn: y
          }
        )
      }
    ) })
  ] });
}
function ia(e) {
  return e.reduce((t, n) => t + n.rows.length, 0);
}
function Iv(e, t, n, r) {
  e.forEach((o) => {
    const i = t.find(
      (s) => s.id === o.sheetId
    );
    i && Sl(
      i,
      o.rows,
      n,
      r
    );
  });
}
const Oi = (e, t, n, r) => e.length ? e.reduce((o, i) => {
  const s = t.find(
    (l) => l.id === i.sheetId
  );
  return s ? o + Eo(
    s,
    i.rows,
    n,
    r
  ).size : o;
}, 0) : 0;
function Av({
  completedWithErrors: e,
  enumLabelDict: t
}) {
  const {
    rowFile: n,
    mode: r,
    sheetData: o,
    importStatistics: i,
    sheetDefinitions: s
  } = Xe(), l = Ro(o), { csvDownloadMode: a } = Ne(), { t: c } = me(), u = ia(l);
  return /* @__PURE__ */ v("div", { className: "hc:flex hc:flex-row hc:px-4 hc:pt-3 hc:pb-2", children: /* @__PURE__ */ U("div", { className: "hc:flex-1 hc:space-y-4", children: [
    /* @__PURE__ */ v("div", { children: /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-row", children: [
      /* @__PURE__ */ v("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: /* @__PURE__ */ v(Wf, { className: "hc:text-hello-csv-primary hc:h-8 hc:w-8" }) }),
      /* @__PURE__ */ U("div", { className: "hc:flex-1", children: [
        /* @__PURE__ */ v("div", { className: "hc:my-2 hc:text-sm hc:font-light hc:uppercase", children: c("importStatus.fileInformation") }),
        /* @__PURE__ */ v("div", { className: "hc:text-base hc:my-2 hc:font-medium", children: (n == null ? void 0 : n.name) || "Data entered manually" }),
        /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-muted hc:my-2 hc:text-sm", children: n ? `${c("importStatus.original")}: ${nn((n == null ? void 0 : n.size) || 0)} · ${c("importStatus.processed")}: ${nn(Oi(l, s, t, a))}` : `${c("importStatus.processed")}: ${nn(Oi(l, s, t, a))}` }),
        /* @__PURE__ */ v("div", { className: "hc:mt-5", children: /* @__PURE__ */ v(
          Fe,
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
      /* @__PURE__ */ v("div", { className: "hc:my-2 hc:mr-5 hc:text-center", children: r === "failed" ? /* @__PURE__ */ v(Qr, { className: "hc:text-hello-csv-danger-light hc:h-8 hc:w-8" }) : e ? /* @__PURE__ */ v(qp, { className: "hc:text-hello-csv-warning-light hc:h-8 hc:w-8" }) : /* @__PURE__ */ v(Rl, { className: "hc:text-hello-csv-success-light hc:h-8 hc:w-8" }) }),
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
          /* @__PURE__ */ v($o, { variant: "error", children: c("importStatus.failed") })
        ] })
      ] })
    ] }) })
  ] }) });
}
function sa({ completedWithErrors: e, enumLabelDict: t }) {
  const { t: n } = me();
  return /* @__PURE__ */ v(Fi, { withPadding: !1, className: "hc:h-full", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-col hc:py-5", children: [
    /* @__PURE__ */ v("div", { className: "hello-csv-subtitle hc:px-4 hc:pb-2 hc:text-xl", children: n("importStatus.importDetails") }),
    /* @__PURE__ */ v("div", { className: "hc:text-hello-csv-text-muted hc:px-4 hc:pb-2 hc:text-sm", children: n("importStatus.importDetailsDescription") }),
    /* @__PURE__ */ v("div", { className: "hc:border-hello-csv-border hc:border-b hc:pb-2" }),
    /* @__PURE__ */ v(
      Av,
      {
        completedWithErrors: e,
        enumLabelDict: t
      }
    )
  ] }) });
}
function Dv({ resetState: e, enumLabelDict: t }) {
  const { sheetData: n, importStatistics: r } = Xe(), { onSummaryFinished: o } = Ne(), { t: i } = me(), s = Ro(n), l = ia(s), a = (r == null ? void 0 : r.imported) ?? 0, c = !!(r != null && r.failed) || !!(r != null && r.skipped);
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: i("importStatus.dataImport") }),
    /* @__PURE__ */ U("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ v("div", { className: "hc:mt-4", children: /* @__PURE__ */ v(
        Mo,
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
        sa,
        {
          completedWithErrors: c,
          enumLabelDict: t
        }
      ) })
    ] }),
    /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v("div", { className: "hc:mt-5 hc:flex hc:justify-end", children: /* @__PURE__ */ v(Fe, { variant: "primary", onClick: o || e, children: i("importStatus.continue") }) }) })
  ] });
}
function Fv({
  onRetry: e,
  onBackToPreview: t,
  enumLabelDict: n
}) {
  const { t: r } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
    /* @__PURE__ */ v("div", { className: "hello-csv-title hc:text-2xl", children: r("importStatus.dataImport") }),
    /* @__PURE__ */ U("div", { className: "hc:grow hc:overflow-auto", children: [
      /* @__PURE__ */ v("div", { className: "hc:mt-4", children: /* @__PURE__ */ v(
        Mo,
        {
          variant: "error",
          header: r("importStatus.importFailed"),
          description: r("importStatus.failedDescription")
        }
      ) }),
      /* @__PURE__ */ v("div", { className: "hc:mt-6", children: /* @__PURE__ */ v(sa, { completedWithErrors: !1, enumLabelDict: n }) })
    ] }),
    /* @__PURE__ */ U("div", { className: "hc:mt-6 hc:flex hc:justify-between", children: [
      /* @__PURE__ */ v(Fe, { onClick: t, variant: "secondary", outline: !0, children: r("importer.loader.backToPreview") }),
      /* @__PURE__ */ v(Fe, { onClick: e, variant: "primary", children: r("importer.loader.retry") })
    ] })
  ] });
}
function Pv({ progress: e, pending: t }) {
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
function kv() {
  return /* @__PURE__ */ v(Bf, { className: "hc:text-hello-csv-success hc:absolute hc:inset-0 hc:m-auto hc:h-12 hc:w-12 hc:stroke-4" });
}
function Nv({ resetState: e }) {
  const { importProgress: t, mode: n } = Xe(), r = n === "submit", { t: o } = me();
  return /* @__PURE__ */ v("div", { className: "hc:flex hc:h-full hc:p-10", children: /* @__PURE__ */ v("div", { className: "hc:flex hc:h-full hc:w-full hc:flex-col", children: /* @__PURE__ */ U("div", { className: "hc:my-16 hc:text-center", children: [
    /* @__PURE__ */ U("div", { className: "hc:relative hc:mx-auto hc:h-24 hc:w-24", children: [
      /* @__PURE__ */ v(Pv, { progress: t, pending: r }),
      r && /* @__PURE__ */ U("div", { children: [
        /* @__PURE__ */ v("div", { className: "hc:absolute hc:inset-0 hc:flex hc:items-center hc:justify-center", children: /* @__PURE__ */ U("b", { className: "hc:text-lg", children: [
          t,
          "%"
        ] }) }),
        /* @__PURE__ */ v("h2", { className: "hello-csv-title hc:text-2xl", children: o("importer.loader.uploading") })
      ] }),
      !r && /* @__PURE__ */ v(kv, {})
    ] }),
    !r && /* @__PURE__ */ U("div", { className: "hc:flex hc:flex-col hc:items-center", children: [
      /* @__PURE__ */ v("h2", { className: "hello-csv-title hc:text-2xl", children: o("importer.loader.success") }),
      /* @__PURE__ */ v("div", { className: "hc:h-5" }),
      /* @__PURE__ */ v(Fe, { variant: "secondary", onClick: e, children: o("sheet.reset") })
    ] })
  ] }) }) });
}
function Lv({
  onRetry: e,
  onBackToPreview: t,
  resetState: n,
  enumLabelDict: r
}) {
  const { mode: o } = Xe();
  return /* @__PURE__ */ U("div", { className: "hc:h-full hc:overflow-auto", children: [
    o === "submit" && /* @__PURE__ */ v(Nv, { resetState: n }),
    o === "failed" && /* @__PURE__ */ v(
      Fv,
      {
        onRetry: e,
        onBackToPreview: t,
        enumLabelDict: r
      }
    ),
    o === "completed" && /* @__PURE__ */ v(Dv, { resetState: n, enumLabelDict: r })
  ] });
}
const Vv = ({ children: e }) => {
  const { theme: t } = Ne();
  return de(() => {
    t && document.documentElement.setAttribute("hello-csv-data-theme", t);
  }, [t]), /* @__PURE__ */ v(ut, { children: e });
};
function Hv({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));
}
const zv = /* @__PURE__ */ M.forwardRef(Hv);
function la() {
  const { sheets: e, preventUploadOnValidationErrors: t } = Ne(), { sheetData: n, validationErrors: r, processingInProgress: o } = Xe(), { t: i } = me();
  return ue(() => {
    const s = Op(e, n).map(
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
function Bv({
  onSheetChange: e,
  sheetCountDict: t,
  idPrefix: n
}) {
  const { currentSheetId: r, validationErrors: o } = Xe(), { sheets: i } = Ne(), { byId: s } = la(), { t: l } = me();
  return /* @__PURE__ */ v(
    Np,
    {
      tabs: i.map((a) => {
        const c = s[a.id], u = c != null ? `${a.label} (${c.count} / ${c.maxRows})` : `${a.label} (${t[a.id]})`, f = o.some(
          (d) => d.sheetId === a.id
        ), p = c != null && c.exceeded ? c.tooltip : f ? l("importer.sheetValidationErrors") : void 0;
        return {
          label: u,
          value: a.id,
          icon: p != null ? /* @__PURE__ */ v(Ue, { className: "hc:mr-3", tooltipText: p, children: /* @__PURE__ */ v(zv, { className: "hc:h-4 hc:w-4" }) }) : void 0
        };
      }),
      activeTab: r,
      onTabChange: e,
      idPrefix: n
    }
  );
}
function jv({ onBackToMapping: e }) {
  const { t } = me(), [n, r] = re(!1);
  return /* @__PURE__ */ U(ut, { children: [
    /* @__PURE__ */ v(
      Fe,
      {
        onClick: () => r(!0),
        variant: "secondary",
        children: t("importer.back")
      }
    ),
    /* @__PURE__ */ v(
      Yr,
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
function Uv({ importerRequirements: e }) {
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
              Ue,
              {
                tooltipText: i.columnDescription ?? t(`uploader.${o}ColumnsTooltip`),
                children: /* @__PURE__ */ v(rl, { className: "hc:text-hello-csv-text-muted hc:size-5" })
              }
            ) })
          ]
        },
        `${i.sheetId}-${i.columnId}`
      )) })
    ] }, n);
  }) });
}
function Gv({ importerRequirements: e }) {
  const { t } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-5", children: [
    /* @__PURE__ */ v("div", { className: "hc:me-3", children: /* @__PURE__ */ v(Mo, { variant: "info", description: t("uploader.importerInformation") }) }),
    /* @__PURE__ */ v("div", { className: "hc:flex hc:min-h-0 hc:flex-1 hc:overflow-hidden", children: /* @__PURE__ */ v(Uv, { importerRequirements: e }) })
  ] });
}
function Wv({ setFile: e, onEnterDataManually: t }) {
  const { maxFileSizeInBytes: n, customFileLoaders: r, allowManualDataEntry: o } = Ne(), { t: i, tHtml: s } = me(), l = q(null), [a, c] = re(!1), [u, f] = re(null), p = Vh.concat(
    (r == null ? void 0 : r.map((x) => x.mimeType)) ?? []
  ), d = Hh, g = ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", "), w = (x, S) => {
    const R = Gm(x.name);
    if (!(p.includes(x.type) || d.includes(R))) {
      f(
        i("uploader.unsupportedFileType", { formats: g })
      );
      return;
    }
    if (x.size > S) {
      f(
        i("uploader.fileTooLarge", { size: nn(S) })
      );
      return;
    }
    f(null), e(x);
  }, m = (x) => {
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
          /* @__PURE__ */ v(Uf, { className: "hc:text-hello-csv-primary hc:h-12 hc:w-12" }),
          /* @__PURE__ */ v("p", { className: "hc:mt-3 hc:text-center", children: i("uploader.dragAndDrop") }),
          /* @__PURE__ */ U("div", { className: "hc:text-hello-csv-text-muted hc:mt-3 hc:text-sm", children: [
            s("uploader.maxFileSizeInBytes", {
              size: /* @__PURE__ */ v("b", { children: nn(n) })
            }),
            " ",
            "•",
            " ",
            ["CSV", "TSV"].concat((r == null ? void 0 : r.map((x) => x.label)) ?? []).join(", ")
          ] }),
          /* @__PURE__ */ v("div", { className: "hc:mt-3", children: /* @__PURE__ */ v(Fe, { children: i("uploader.browseFiles") }) }),
          u && /* @__PURE__ */ v("div", { className: "hc:mt-2", children: /* @__PURE__ */ v($l, { children: u }) }),
          o && /* @__PURE__ */ v("div", { className: "hc:mt-3 hc:text-sm", children: /* @__PURE__ */ v(
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
        /* @__PURE__ */ v(
          "input",
          {
            "aria-label": i("uploader.uploadAFile"),
            ref: l,
            type: "file",
            accept: p.concat(d).join(","),
            className: "hc:sr-only",
            onChange: (x) => m(x)
          }
        )
      ]
    }
  ) });
}
function qv({
  onFileUploaded: e,
  onEnterDataManually: t
}) {
  const { sheets: n } = Ne(), r = Um(n), { t: o } = me();
  return /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col hc:space-y-4", children: [
    /* @__PURE__ */ v("div", { className: "hello-csv-title hc:flex-none hc:text-2xl", children: o("uploader.uploadAFile") }),
    /* @__PURE__ */ v("div", { className: "hc:flex-auto hc:md:min-h-0", children: /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col-reverse hc:gap-5 hc:md:flex-row", children: [
      /* @__PURE__ */ v("div", { className: "hc:h-full hc:flex-1 hc:lg:flex-1", children: /* @__PURE__ */ v(Gv, { importerRequirements: r }) }),
      /* @__PURE__ */ v("div", { className: "hc:flex-1 hc:lg:flex-2", children: /* @__PURE__ */ v(
        Wv,
        {
          setFile: e,
          onEnterDataManually: t
        }
      ) })
    ] }) })
  ] });
}
async function _i(e) {
  await new Promise((t) => {
    setTimeout(t, e);
  });
}
async function Yv({
  state: e,
  dispatch: t,
  importerDefinition: n
}) {
  const r = zl();
  t({ type: "PROCESSING_STARTED", payload: { runId: r } });
  const i = await new Hn(n, e).getState("submit"), s = [
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
      const c = Ro(i.sheetData), u = await n.onComplete(
        { ...e, sheetData: c, validationErrors: s },
        (f) => {
          t({ type: "PROGRESS", payload: { progress: f } });
        },
        e.sheetDefinitions.map((f) => {
          var p;
          return {
            file: Eo(
              f,
              ((p = c.find((d) => d.sheetId === f.id)) == null ? void 0 : p.rows) ?? [],
              {},
              "value"
            ),
            sheetId: f.id
          };
        })
      );
      await _i(400), t({ type: "PROGRESS", payload: { progress: 100 } }), await _i(200), t({
        type: "COMPLETED",
        payload: { importStatistics: u ?? void 0 }
      });
    } catch {
      t({ type: "FAILED" });
    }
  }
}
function _r(e) {
  return structuredClone(e);
}
function Kv() {
  const e = q([]), t = q([]), [, n] = re(0), r = ie(() => n((a) => a + 1), []), o = ie(
    (a) => {
      e.current.push(_r(a)), e.current.length > Lh && (e.current = e.current.slice(-50)), t.current = [], r();
    },
    [r]
  ), i = ie(
    (a) => {
      if (e.current.length === 0) return null;
      const c = e.current.pop();
      return t.current.push(_r(a)), r(), c;
    },
    [r]
  ), s = ie(
    (a) => {
      if (t.current.length === 0) return null;
      const c = t.current.pop();
      return e.current.push(_r(a)), r(), c;
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
function Zv(e) {
  const { sheets: t, availableActions: n } = e, { t: r } = me(), o = q(!0), i = q(null), s = Xe(), l = hg(), a = ke(), { mode: c, currentSheetId: u, sheetData: f, columnMappings: p, validationErrors: d } = s;
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
  ), [f]), m = t.find(
    (V) => V.id === u
  ), C = hm(t), { preventUpload: x, uploadBlockedTooltip: S } = la(), R = new Hn(e, s), O = Kv();
  function F() {
    O.record(f);
  }
  async function A(V) {
    await R.uploadFile(V), R.dispatchChange(l);
  }
  function y() {
    O.reset(), R.setEnterDataManually(), R.dispatchChange(l);
  }
  function h(V) {
    R.setMappings(V), R.dispatchChange(l);
  }
  async function b() {
    O.reset(), await R.confirmMappings(), R.dispatchChange(l);
  }
  function E(V) {
    F(), R.changeCell(V), R.dispatchChange(l);
  }
  function T(V) {
    V.length !== 0 && (F(), V.forEach((P) => R.changeCell(P)), R.dispatchChange(l));
  }
  function L(V) {
    F(), R.removeRows(V), R.dispatchChange(l);
  }
  function D() {
    F(), R.addEmptyRow(), R.dispatchChange(l);
  }
  function N() {
    const V = O.undo(f);
    V != null && (R.restoreSheetData(V), R.dispatchChange(l));
  }
  function $() {
    const V = O.redo(f);
    V != null && (R.restoreSheetData(V), R.dispatchChange(l));
  }
  function k() {
    O.reset(), l({ type: "RESET" });
  }
  function _() {
    return Yv({ state: s, dispatch: l, importerDefinition: e });
  }
  function I() {
    l({ type: "PREVIEW" });
  }
  function z() {
    l({ type: "UPLOAD" });
  }
  function H() {
    l({ type: "MAPPING" });
  }
  return /* @__PURE__ */ v(Vv, { children: /* @__PURE__ */ U(Kh, { ref: i, children: [
    c === "upload" && /* @__PURE__ */ v(
      qv,
      {
        onFileUploaded: A,
        onEnterDataManually: y
      }
    ),
    c === "mapping" && /* @__PURE__ */ v(
      pg,
      {
        onMappingsChanged: h,
        onMappingsSet: b,
        onBack: z
      }
    ),
    c === "preview" && // TODO: Move these to separate component in future PR
    /* @__PURE__ */ U("div", { className: "hc:flex hc:h-full hc:flex-col", children: [
      /* @__PURE__ */ v("div", { className: "hc:flex-none", children: /* @__PURE__ */ v(
        Bv,
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
            _v,
            {
              data: g,
              sheetDefinition: m,
              sheetValidationErrors: d.filter(
                (V) => V.sheetId === (m == null ? void 0 : m.id)
              ),
              setRowData: E,
              setRowsData: T,
              removeRows: L,
              addEmptyRow: D,
              resetState: k,
              undo: N,
              redo: $,
              canUndo: O.canUndo,
              canRedo: O.canRedo,
              enumLabelDict: C
            }
          )
        }
      ),
      /* @__PURE__ */ v("div", { className: "hc:flex-none", children: g.rows.length > 0 && /* @__PURE__ */ U("div", { className: "hc:mt-5 hc:flex hc:justify-between", children: [
        /* @__PURE__ */ v("div", { children: p != null && n.includes("backToPreviousStep") && /* @__PURE__ */ v(
          jv,
          {
            onBackToMapping: H
          }
        ) }),
        /* @__PURE__ */ v(
          Ue,
          {
            tooltipText: S,
            hidden: !x,
            children: /* @__PURE__ */ v(Fe, { onClick: _, disabled: x, children: r("importer.upload") })
          }
        )
      ] }) })
    ] }),
    (c === "submit" || c === "failed" || c === "completed") && /* @__PURE__ */ v(
      Lv,
      {
        onRetry: _,
        onBackToPreview: I,
        resetState: k,
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
    availableActions: e.availableActions ?? [...Mp]
  };
  return /* @__PURE__ */ v(Ih, { importerDefintion: t, children: /* @__PURE__ */ v(
    fg,
    {
      sheets: t.sheets,
      persistenceConfig: t.persistenceConfig,
      initialState: t.initialState,
      onStateChanged: t.onStateChanged,
      children: /* @__PURE__ */ v(kh, { children: /* @__PURE__ */ v(Zv, { ...t }) })
    }
  ) });
}
function i0(e, t) {
  const n = ua(e);
  return n.render(Ir(Ii, t)), {
    render: (r) => n.render(Ir(Ii, r)),
    unmount: () => n.unmount()
  };
}
export {
  o0 as CsvImporterStateBuilder,
  Mp as availableActionList,
  Ii as default,
  ir as isDateLikeColumn,
  i0 as renderImporter
};
