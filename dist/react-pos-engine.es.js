import I, { memo as T, forwardRef as oe, createElement as Z, useCallback as de } from "react";
var q = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function me() {
  if (ne) return H;
  ne = 1;
  var t = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function l(r, n, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      i = {};
      for (var x in n)
        x !== "key" && (i[x] = n[x]);
    } else i = n;
    return n = i.ref, {
      $$typeof: t,
      type: r,
      key: d,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return H.Fragment = s, H.jsx = l, H.jsxs = l, H;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function he() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === M ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case k:
          return "Fragment";
        case v:
          return "Profiler";
        case L:
          return "StrictMode";
        case R:
          return "Suspense";
        case P:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case _:
            return "Portal";
          case p:
            return a.displayName || "Context";
          case m:
            return (a._context.displayName || "Context") + ".Consumer";
          case C:
            var c = a.render;
            return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case F:
            return c = a.displayName || null, c !== null ? c : t(a.type) || "Memo";
          case z:
            c = a._payload, a = a._init;
            try {
              return t(a(c));
            } catch {
            }
        }
      return null;
    }
    function s(a) {
      return "" + a;
    }
    function l(a) {
      try {
        s(a);
        var c = !1;
      } catch {
        c = !0;
      }
      if (c) {
        c = console;
        var f = c.error, g = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return f.call(
          c,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), s(a);
      }
    }
    function r(a) {
      if (a === k) return "<>";
      if (typeof a == "object" && a !== null && a.$$typeof === z)
        return "<...>";
      try {
        var c = t(a);
        return c ? "<" + c + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var a = j.A;
      return a === null ? null : a.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(a) {
      if ($.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function x(a, c) {
      function f() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          c
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: f,
        configurable: !0
      });
    }
    function w() {
      var a = t(this.type);
      return ee[a] || (ee[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function E(a, c, f, g, U, K) {
      var u = f.ref;
      return a = {
        $$typeof: b,
        type: a,
        key: c,
        props: f,
        _owner: g
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(a, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.defineProperty(a, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function S(a, c, f, g, U, K) {
      var u = c.children;
      if (u !== void 0)
        if (g)
          if (W(u)) {
            for (g = 0; g < u.length; g++)
              O(u[g]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(u);
      if ($.call(c, "key")) {
        u = t(a);
        var D = Object.keys(c).filter(function(pe) {
          return pe !== "key";
        });
        g = 0 < D.length ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}", ae[u + g] || (D = 0 < D.length ? "{" + D.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          u,
          D,
          u
        ), ae[u + g] = !0);
      }
      if (u = null, f !== void 0 && (l(f), u = "" + f), d(c) && (l(c.key), u = "" + c.key), "key" in c) {
        f = {};
        for (var X in c)
          X !== "key" && (f[X] = c[X]);
      } else f = c;
      return u && x(
        f,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), E(
        a,
        u,
        f,
        n(),
        U,
        K
      );
    }
    function O(a) {
      h(a) ? a._store && (a._store.validated = 1) : typeof a == "object" && a !== null && a.$$typeof === z && (a._payload.status === "fulfilled" ? h(a._payload.value) && a._payload.value._store && (a._payload.value._store.validated = 1) : a._store && (a._store.validated = 1));
    }
    function h(a) {
      return typeof a == "object" && a !== null && a.$$typeof === b;
    }
    var y = I, b = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), p = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), j = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, W = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(a) {
        return a();
      }
    };
    var Q, ee = {}, te = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), se = J(r(i)), ae = {};
    Y.Fragment = k, Y.jsx = function(a, c, f) {
      var g = 1e4 > j.recentlyCreatedOwnerStacks++;
      return S(
        a,
        c,
        f,
        !1,
        g ? Error("react-stack-top-frame") : te,
        g ? J(r(a)) : se
      );
    }, Y.jsxs = function(a, c, f) {
      var g = 1e4 > j.recentlyCreatedOwnerStacks++;
      return S(
        a,
        c,
        f,
        !0,
        g ? Error("react-stack-top-frame") : te,
        g ? J(r(a)) : se
      );
    };
  })()), Y;
}
var ie;
function fe() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? q.exports = me() : q.exports = he()), q.exports;
}
var e = fe();
const V = {
  "58mm": { width: "58mm", name: "POS (58mm)" }
}, N = I.memo(
  ({ items: t, formatItemTotal: s, borderColor: l, hidePrice: r = !1 }) => /* @__PURE__ */ e.jsxs(
    "table",
    {
      style: {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        marginBottom: "10px",
        fontSize: "inherit"
      },
      children: [
        /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs(
          "tr",
          {
            style: {
              borderTop: `1px dashed ${l}`,
              borderBottom: `1px dashed ${l}`
            },
            children: [
              /* @__PURE__ */ e.jsx("th", { style: { textAlign: "left", padding: "3px 0", width: "15%" }, children: "QTY" }),
              /* @__PURE__ */ e.jsx(
                "th",
                {
                  style: {
                    textAlign: "left",
                    padding: "3px 0",
                    width: r ? "85%" : "60%"
                  },
                  children: "ITEM"
                }
              ),
              !r && /* @__PURE__ */ e.jsx("th", { style: { textAlign: "right", padding: "3px 0", width: "25%" }, children: "TOTAL" })
            ]
          }
        ) }),
        /* @__PURE__ */ e.jsx("tbody", { children: t.map((n, i) => /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left", padding: "2px 0" }, children: n.quantity }),
          /* @__PURE__ */ e.jsx("td", { style: { textAlign: "left", padding: "2px 0" }, children: n.name }),
          !r && /* @__PURE__ */ e.jsx("td", { style: { textAlign: "right", padding: "2px 0" }, children: s(n) })
        ] }, i)) })
      ]
    }
  )
), be = I.memo(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("header", { style: { backgroundColor: "transparent", padding: "5px 0" }, children: [
      /* @__PURE__ */ e.jsx(
        "h1",
        {
          style: {
            fontSize: "1.4em",
            margin: "5px 0",
            color: s,
            textTransform: "uppercase"
          },
          children: r || "The React Store"
        }
      ),
      /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
        "Order #: ",
        t.id
      ] }),
      /* @__PURE__ */ e.jsxs(
        "p",
        {
          style: {
            margin: "5px 0 10px 0",
            borderBottom: `1px dashed ${l}`,
            paddingBottom: "5px"
          },
          children: [
            "Date: ",
            new Date(t.date).toLocaleDateString()
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs(
      "footer",
      {
        style: {
          borderTop: `1px dashed ${l}`,
          paddingTop: "5px",
          textAlign: d
        },
        children: [
          /* @__PURE__ */ e.jsxs(
            "p",
            {
              style: {
                margin: "2px 0",
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: o(t.subtotal) })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "p",
            {
              style: {
                margin: "2px 0",
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
                /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: o(t.tax) })
              ]
            }
          )
        ]
      }
    )
  ] })
), ge = I.memo(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    borderColor: r,
    headerBgColor: n,
    formatItemTotal: i,
    sellerName: d,
    showSignature: x,
    textColor: w
  }) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        padding: "15mm 10mm",
        fontSize: "12px",
        minHeight: "270mm",
        border: `1px solid ${r}`,
        boxSizing: "border-box",
        color: w
      },
      children: [
        /* @__PURE__ */ e.jsxs(
          "header",
          {
            style: {
              borderBottom: `3px solid ${s}`,
              paddingBottom: "10px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: n
            },
            children: [
              /* @__PURE__ */ e.jsx("h1", { style: { fontSize: "24px", margin: 0, color: s }, children: "INVOICE" }),
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "right" }, children: [
                /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontWeight: "bold" }, children: l || "React Solutions Ltd." }),
                /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontSize: "10px" }, children: t.customer.address }),
                /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0", fontSize: "10px" }, children: [
                  "Invoice ID: ",
                  t.id
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs("section", { style: { marginBottom: "20px" }, children: [
          /* @__PURE__ */ e.jsx(
            "h2",
            {
              style: {
                fontSize: "16px",
                borderBottom: `1px solid ${r}`,
                paddingBottom: "5px",
                marginBottom: "10px",
                color: s
              },
              children: "Bill To:"
            }
          ),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0", fontWeight: "bold" }, children: t.customer.name }),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0" }, children: t.customer.address }),
          /* @__PURE__ */ e.jsx("p", { style: { margin: "2px 0" }, children: t.customer.phone })
        ] }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            items: t.items,
            formatItemTotal: i,
            borderColor: r
          }
        ),
        x && /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              marginTop: "30px",
              borderTop: "1px dashed #ccc",
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "10px"
            },
            children: [
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "30px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "150px"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsx("p", { children: "Customer Signature" })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "30px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "150px"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsxs("p", { children: [
                  "Authorized by: ",
                  d
                ] })
              ] })
            ]
          }
        )
      ]
    }
  )
), ue = I.memo(
  ({ order: t, primaryColor: s, borderColor: l }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        style: {
          borderBottom: `2px solid ${s}`,
          paddingBottom: "5px",
          marginBottom: "10px"
        },
        children: [
          /* @__PURE__ */ e.jsx("h1", { style: { fontSize: "1.6em", margin: "5px 0", color: s }, children: "KITCHEN ORDER TICKET" }),
          /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
            "Order #:",
            " ",
            /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold", fontSize: "1.2em" }, children: t.id })
          ] }),
          /* @__PURE__ */ e.jsxs("p", { style: { margin: "2px 0" }, children: [
            "Time: ",
            (/* @__PURE__ */ new Date()).toLocaleTimeString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: () => "",
        borderColor: l,
        hidePrice: !0
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "p",
      {
        style: {
          fontSize: "1.2em",
          marginTop: "20px",
          borderTop: `1px solid ${s}`,
          paddingTop: "5px"
        },
        children: [
          /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold", color: "red" }, children: "NOTES:" }),
          " COOK WELL"
        ]
      }
    )
  ] })
), je = I.memo(
  ({
    layoutNum: t,
    order: s,
    primaryColor: l,
    borderColor: r,
    headerBgColor: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        padding: "10px",
        border: `1px dashed ${r}`,
        textAlign: "center",
        margin: "10px 0",
        backgroundColor: n
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "h3",
          {
            style: { margin: "5px 0", color: l },
            children: `Layout ${t} - Modern POS Style`
          }
        ),
        /* @__PURE__ */ e.jsx(
          "p",
          {
            style: { margin: "2px 0", fontSize: "0.8em" },
            children: `Description for Layout ${t} goes here...`
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            items: s.items.slice(0, 2),
            formatItemTotal: (x) => o(x.price * x.quantity),
            borderColor: r
          }
        ),
        i && /* @__PURE__ */ e.jsx(
          "footer",
          {
            style: {
              borderTop: `1px dashed ${r}`,
              paddingTop: "5px",
              textAlign: d
            },
            children: /* @__PURE__ */ e.jsxs(
              "p",
              {
                style: {
                  margin: "2px 0",
                  display: "flex",
                  justifyContent: "space-between"
                },
                children: [
                  /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                  /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "bold" }, children: o(s.subtotal) })
                ]
              }
            )
          }
        )
      ]
    }
  )
), ye = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-4 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `pb-4 border-b-4 ${s.replace(
          "text-",
          "border-"
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: `text-3xl font-extrabold ${s}`, children: r || "Modern Retail Co." }),
          /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between", children: [
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Order ID: ",
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: t.id })
            ] }),
            /* @__PURE__ */ e.jsxs("p", { children: [
              "Date: ",
              new Date(t.date).toLocaleDateString()
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs("footer", { className: "grid grid-cols-2 gap-4 pt-4 border-t border-solid border-gray-200", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "col-span-1 p-2 bg-gray-50 rounded-lg text-sm space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `col-span-1 p-3 rounded-lg ${s.replace(
            "text-",
            "bg-"
          )} text-white font-bold flex flex-col items-center justify-center`,
          children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-xs opacity-80", children: "TOTAL DUE" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl", children: o(t.total) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "text-xs pt-4 text-center text-gray-500", children: "Thank you for choosing us! Visit us at example.com" })
  ] })
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ne = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (s, l, r) => r ? r.toUpperCase() : l.toLowerCase()
), re = (t) => {
  const s = Ne(t);
  return s.charAt(0).toUpperCase() + s.slice(1);
}, ce = (...t) => t.filter((s, l, r) => !!s && s.trim() !== "" && r.indexOf(s) === l).join(" ").trim(), we = (t) => {
  for (const s in t)
    if (s.startsWith("aria-") || s === "role" || s === "title")
      return !0;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = oe(
  ({
    color: t = "currentColor",
    size: s = 24,
    strokeWidth: l = 2,
    absoluteStrokeWidth: r,
    className: n = "",
    children: i,
    iconNode: d,
    ...x
  }, w) => Z(
    "svg",
    {
      ref: w,
      ...ve,
      width: s,
      height: s,
      stroke: t,
      strokeWidth: r ? Number(l) * 24 / Number(s) : l,
      className: ce("lucide", n),
      ...!i && !we(x) && { "aria-hidden": "true" },
      ...x
    },
    [
      ...d.map(([E, S]) => Z(E, S)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = (t, s) => {
  const l = oe(
    ({ className: r, ...n }, i) => Z(Te, {
      ref: i,
      iconNode: s,
      className: ce(
        `lucide-${$e(re(t))}`,
        `lucide-${t}`,
        r
      ),
      ...n
    })
  );
  return l.displayName = re(t), l;
};
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], ke = xe("calendar", Se);
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], Re = xe("shopping-cart", Ee), Ae = T(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: r,
    showTaxBreakdown: n,
    borderColor: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "max-w-md w-full mx-auto p-6 space-y-5 font-mono text-gray-100 bg-gray-900/90 border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-sm transition duration-300 hover:shadow-emerald-900/50", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b-2 border-gray-700", children: [
      /* @__PURE__ */ e.jsxs(
        "h1",
        {
          className: `text-2xl font-black text-center tracking-wider ${s} drop-shadow-lg`,
          children: [
            /* @__PURE__ */ e.jsx(Re, { className: "inline w-6 h-6 mr-2 mb-1" }),
            "-- ",
            l || "SYNTHETIC RECEIPT",
            " --"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-xs mt-3 text-gray-400", children: [
        /* @__PURE__ */ e.jsxs("span", { className: "flex items-center", children: [
          "ID:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "ml-1 font-semibold text-gray-200", children: t.id })
        ] }),
        /* @__PURE__ */ e.jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ e.jsx(ke, { className: "inline w-3 h-3 mr-1" }),
          new Date(t.date).toLocaleDateString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: r,
        borderColor: "border-gray-700"
      }
    ),
    n && /* @__PURE__ */ e.jsxs("footer", { className: "pt-4 border-t-2 border-gray-700", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 text-sm text-gray-300", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-100", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-100", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-between mt-3 text-2xl font-extrabold ${s} pt-3 border-t border-gray-700`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
            /* @__PURE__ */ e.jsx("span", { children: o(t.total) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `text-center text-xs pt-3 border-t border-dashed border-gray-700 ${s} uppercase tracking-widest`,
        children: "*** transaction complete ***"
      }
    )
  ] })
), Oe = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-4 font-serif text-gray-700 text-left border-2 border-gray-100", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-3xl font-light ${s} uppercase`, children: r || "Invoice Copy" }),
      /* @__PURE__ */ e.jsxs(
        "p",
        {
          className: `text-sm mt-1 pb-3 border-b-4 ${s.replace(
            "text-",
            "border-"
          )}`,
          children: [
            "Order Reference: ",
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.id })
          ]
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg border border-gray-200", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-base font-semibold mb-2 border-b pb-1", children: "Payment Summary" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between text-sm mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-between text-xl font-bold mt-3 pt-2 border-t-2 ${s.replace(
            "text-",
            "border-"
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL DUE:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold pt-2", children: [
      "Order Details (",
      t.items.length,
      " items)"
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("footer", { className: "text-sm pt-4 text-center italic text-gray-500", children: [
      "Processed on: ",
      new Date(t.date).toLocaleString()
    ] })
  ] })
), _e = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-3 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `pb-3 border-b-2 ${s.replace(
          "text-",
          "border-"
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: `text-4xl font-black ${s} text-center`, children: r || "Flash Sale Receipt" }),
          /* @__PURE__ */ e.jsxs("p", { className: "mt-1 text-sm text-center", children: [
            "Order #: ",
            t.id,
            " | ",
            new Date(t.date).toLocaleDateString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    i && /* @__PURE__ */ e.jsxs("footer", { className: "pt-3 text-sm", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "Subtotal:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4 text-right", children: o(t.subtotal) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end items-center mt-1", children: [
        /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "Tax:" }),
        /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4 text-right", children: o(t.tax) })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `flex justify-end items-center mt-3 text-xl font-extrabold pt-2 border-t-4 border-double ${s.replace(
            "text-",
            "border-"
          )} space-x-4`,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: "TOTAL PAID:" }),
            /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-right", children: o(t.total) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "mt-5 p-3 text-center bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800",
        children: [
          /* @__PURE__ */ e.jsx("p", { className: "font-bold text-lg", children: "20% OFF YOUR NEXT ORDER!" }),
          /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: "Use code: SAVE20NOW" })
        ]
      }
    )
  ] })
), Le = T(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: r,
    showTaxBreakdown: n,
    borderColor: i,
    alignStyle: d
  }) => {
    const x = t.subtotal > 0 ? (t.tax / t.subtotal * 100).toFixed(1) : "0.0";
    return /* @__PURE__ */ e.jsxs("div", { className: "p-8 space-y-4 font-serif text-gray-900 text-right bg-white border border-gray-300 shadow-md", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "pb-4", children: [
        /* @__PURE__ */ e.jsx("h1", { className: `text-4xl font-bold ${s}`, children: l || "PURCHASE INVOICE" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "font-semibold", children: [
            "ID: ",
            t.id
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
            "Issued: ",
            new Date(t.date).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        N,
        {
          items: t.items,
          formatItemTotal: r,
          borderColor: "border-gray-300"
        }
      ),
      n && /* @__PURE__ */ e.jsxs("footer", { className: "pt-4 text-base", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end mt-1 space-x-12", children: [
          /* @__PURE__ */ e.jsx("span", { className: "font-normal w-1/4 text-left", children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-end mt-1 space-x-12", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-normal w-1/4 text-left", children: [
            "Tax (",
            x,
            "%):"
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium w-1/4", children: o(t.tax) })
        ] }),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "flex justify-end mt-3 text-2xl font-extrabold pt-3 border-t-8 border-b-2 border-gray-900 space-x-12",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "w-1/4 text-left", children: "AMOUNT DUE:" }),
              /* @__PURE__ */ e.jsx("span", { className: "w-1/4", children: o(t.total) })
            ]
          }
        )
      ] })
    ] });
  }
), A = (t, s = "border") => t.replace("text-", `${s}-`), G = (t) => t.replace("text-", "bg-"), ze = T(
  ({
    order: t,
    primaryColor: s,
    headerText: l,
    formatItemTotal: r,
    showTaxBreakdown: n,
    alignStyle: i
  }) => {
    const d = i === "left" ? "text-left" : i === "right" ? "text-right" : "text-center";
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `p-6 space-y-5 font-sans text-gray-800 ${d}`,
        children: [
          /* @__PURE__ */ e.jsxs(
            "header",
            {
              className: `pb-3 ${A(
                s,
                "border-b-4"
              )} border-solid`,
              children: [
                /* @__PURE__ */ e.jsx(
                  "h1",
                  {
                    className: `text-3xl font-bold ${s} tracking-tight uppercase`,
                    children: l || "Modern Commerce"
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between font-medium text-gray-500", children: [
                  /* @__PURE__ */ e.jsxs("span", { className: "text-left", children: [
                    "Order #: ",
                    t.id
                  ] }),
                  /* @__PURE__ */ e.jsx("span", { className: "text-right", children: new Date(t.date).toLocaleDateString() })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            N,
            {
              items: t.items,
              formatItemTotal: r,
              borderColor: "border-gray-200"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-4 border-t border-dashed border-gray-300 text-base flex flex-col items-${i}`,
              children: [
                n && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-4", children: [
                    /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Subtotal:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: o(t.subtotal) })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-4 mt-1", children: [
                    /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Tax:" }),
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: o(t.tax) })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs(
                  "div",
                  {
                    className: `flex justify-between w-full max-w-xs mt-3 text-2xl font-bold pt-3 ${A(
                      s,
                      "border-t-2"
                    )}`,
                    children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "TOTAL:" }),
                      /* @__PURE__ */ e.jsx("span", { className: `text-right ${s}`, children: o(t.total) })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
), Ie = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => {
    const x = d === "left" ? "text-left" : d === "right" ? "text-right" : "text-center";
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `p-4 space-y-4 font-sans text-gray-800 ${x}`,
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `inline-block px-6 py-2 text-xl font-bold uppercase rounded-full ${G(
                s
              )} text-white shadow-md mb-4`,
              children: r || "Checkout Receipt"
            }
          ),
          /* @__PURE__ */ e.jsxs("header", { className: "pb-4 space-y-1 border-b border-dashed", children: [
            /* @__PURE__ */ e.jsxs("p", { className: "font-semibold text-lg", children: [
              "Transaction ID: ",
              /* @__PURE__ */ e.jsxs("span", { className: s, children: [
                "#",
                t.id
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500", children: [
              "Date: ",
              new Date(t.date).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            N,
            {
              items: t.items,
              formatItemTotal: n,
              borderColor: l
            }
          ),
          i && /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-4 border-t border-solid ${l} text-sm flex flex-col items-${d} w-full`,
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-8", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Subtotal:" }),
                  /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: o(t.subtotal) })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between w-full max-w-xs space-x-8 mt-1", children: [
                  /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "Tax:" }),
                  /* @__PURE__ */ e.jsx("span", { className: "font-medium text-right", children: o(t.tax) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `pt-3 mt-3 text-2xl font-extrabold ${A(
                s,
                "border-t-4"
              )} border-double flex justify-between w-full max-w-xs mx-auto`,
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "text-left", children: "AMOUNT:" }),
                /* @__PURE__ */ e.jsx("span", { className: `text-right ${s}`, children: o(t.total) })
              ]
            }
          )
        ]
      }
    );
  }
), Ce = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-4 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-gray-300", children: [
      /* @__PURE__ */ e.jsx(
        "h1",
        {
          className: `text-2xl font-extrabold ${s} uppercase mb-2`,
          children: r || "Purchase Order"
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `grid grid-cols-2 gap-4 text-sm font-medium border-t-2 border-b-2 ${A(
            s
          )} py-2`,
          children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: "Ref:" }),
              " ",
              t.id
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: "Date:" }),
              " ",
              new Date(t.date).toLocaleDateString()
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `pt-4 border-t-2 ${l} text-base flex justify-end`,
        children: /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md space-y-2", children: [
          i && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: `flex justify-between pt-2 mt-2 text-2xl font-bold border-t ${A(
                s
              )}`,
              children: [
                /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
                /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
              ]
            }
          )
        ] })
      }
    )
  ] })
), Pe = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i,
    alignStyle: d
  }) => /* @__PURE__ */ e.jsxs("div", { className: `p-4 space-y-4 font-sans text-gray-800 text-${d}`, children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-xl font-bold ${s} uppercase`, children: r || "SALES RECEIPT" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Invoice: ",
        t.id
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `mt-6 p-4 rounded-lg shadow-inner ${G(
          s
        ).replace("text-", "bg-")} bg-opacity-10 border ${A(
          s
        )}`,
        children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-gray-600 mb-2", children: "SUMMARY" }),
          i && /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 border-b pb-2 mb-2 border-gray-300", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between pt-1 text-2xl font-extrabold", children: [
            /* @__PURE__ */ e.jsx("span", { children: "AMOUNT DUE:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ] })
        ]
      }
    )
  ] })
), De = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-2 border-b-2 border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-2xl font-extrabold ${s} uppercase`, children: r || "Order Confirmation" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm mt-1 flex justify-between", children: [
        /* @__PURE__ */ e.jsxs("p", { children: [
          "Customer:",
          " ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.customer.name })
        ] }),
        /* @__PURE__ */ e.jsxs("p", { children: [
          "Ref: ",
          /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: t.id })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: t.items.map((d, x) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `py-2 border-b border-dashed ${l}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold w-1/2", children: d.name }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-base font-bold w-1/4 text-right", children: [
              d.quantity,
              "x"
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold w-1/4 text-right", children: n(d) })
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 italic", children: [
            "@ ",
            o(d.price),
            " each"
          ] })
        ]
      },
      x
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-base space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `mt-3 pt-3 flex justify-between text-3xl font-extrabold ${A(
            s,
            "border-t-4"
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "FINAL:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ]
        }
      )
    ] })
  ] })
), Fe = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs(
      "header",
      {
        className: `py-3 px-4 ${G(
          s
        )} text-white rounded-t-lg`,
        children: [
          /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-extrabold", children: r || "Online Order Invoice" }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-light mt-1", children: [
            "Order Date: ",
            new Date(t.date).toLocaleDateString()
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "p-3 border border-gray-300 rounded-md bg-gray-50 text-sm", children: [
      /* @__PURE__ */ e.jsx("p", { className: "font-bold mb-1 border-b border-gray-200 pb-1", children: "Shipping Details" }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Recipient: ",
        t.customer.name
      ] }),
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Address: ",
        t.customer.address
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "font-medium", children: [
        "Tracking ID:",
        " ",
        /* @__PURE__ */ e.jsx("span", { className: s, children: t.id.slice(0, 8).toUpperCase() })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-base space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mt-3 pt-3 flex justify-between text-2xl font-extrabold border-t-2 border-gray-400",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL CHARGED:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ]
        }
      )
    ] })
  ] })
), Be = T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-800 text-left", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-4 border-b border-gray-300", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-xl font-normal ${s}`, children: r || "Receipt" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
        "Date: ",
        new Date(t.date).toLocaleDateString(),
        " | Ref: ",
        t.id
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        items: t.items,
        formatItemTotal: n,
        borderColor: l
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-sm space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "mt-3 pt-3 flex justify-between text-xl font-bold border-t-2 border-gray-400",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "Total:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ]
        }
      )
    ] })
  ] })
), Me = T(
  ({ order: t, primaryColor: s, headerText: l, formatItemTotal: r, showTaxBreakdown: n }) => {
    const i = "text-amber-500";
    return /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-5 font-sans text-gray-900 text-center", children: [
      /* @__PURE__ */ e.jsxs(
        "header",
        {
          className: `py-4 px-4 ${G(
            s
          )} text-white shadow-lg rounded-b-xl`,
          children: [
            /* @__PURE__ */ e.jsx("h1", { className: "text-3xl font-black uppercase tracking-wider", children: l || "Tropical Sales" }),
            /* @__PURE__ */ e.jsxs(
              "p",
              {
                className: `text-sm mt-1 font-bold ${i.replace(
                  "text-",
                  "text-"
                )}`,
                children: [
                  "Order ID: ",
                  t.id
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 pt-4 border-t-4 border-double border-gray-300", children: t.items.map((d, x) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "flex justify-between items-center bg-white p-2 rounded-md shadow-sm border border-gray-200",
          children: [
            /* @__PURE__ */ e.jsxs("span", { className: "text-base font-bold text-left w-1/2", children: [
              d.quantity,
              "x ",
              d.name
            ] }),
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: `text-lg font-extrabold w-1/2 text-right ${s}`,
                children: r(d)
              }
            )
          ]
        },
        x
      )) }),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
        n && /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `text-base space-y-1 border-t pt-2 border-dashed ${i.replace(
              "text-",
              "border-"
            )}`,
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
                /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.subtotal) })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
                /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: o(t.tax) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `mt-3 pt-3 flex justify-between text-3xl font-black ${A(
              s,
              "border-t-8"
            )} border-double`,
            children: [
              /* @__PURE__ */ e.jsx("span", { children: "TOTAL:" }),
              /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
            ]
          }
        )
      ] })
    ] });
  }
);
T(
  ({
    order: t,
    primaryColor: s,
    borderColor: l,
    headerText: r,
    formatItemTotal: n,
    showTaxBreakdown: i
  }) => /* @__PURE__ */ e.jsxs("div", { className: "p-2 space-y-2 font-mono text-gray-900 text-center text-sm", children: [
    /* @__PURE__ */ e.jsxs("header", { className: "pb-2 border-b-2 border-dashed border-gray-400", children: [
      /* @__PURE__ */ e.jsx("h1", { className: `text-lg font-extrabold ${s} uppercase`, children: r || "Quick Receipt" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-xs mt-1", children: [
        "TID: ",
        t.id,
        " | ",
        new Date(t.date).toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "space-y-1", children: t.items.map((d, x) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: `flex justify-between border-b border-dashed ${l}`,
        children: [
          /* @__PURE__ */ e.jsxs("span", { className: "w-1/2 text-left", children: [
            d.quantity,
            "x ",
            d.name
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "w-1/2 text-right font-medium", children: n(d) })
        ]
      },
      x
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "pt-2", children: [
      i && /* @__PURE__ */ e.jsxs("div", { className: "text-xs space-y-1", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Subtotal:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: o(t.subtotal) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ e.jsx("span", { children: "Tax:" }),
          /* @__PURE__ */ e.jsx("span", { className: "font-normal", children: o(t.tax) })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: `mt-2 pt-2 flex justify-between text-base font-bold border-t border-solid ${A(
            s
          )}`,
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "TOTAL PAID:" }),
            /* @__PURE__ */ e.jsx("span", { className: s, children: o(t.total) })
          ]
        }
      )
    ] })
  ] })
);
const We = ({
  order: t,
  layout: s = 1,
  alignment: l = "center",
  primaryColor: r = "#007BFF",
  textColor: n = "#000000",
  borderColor: i = "#CCCCCC",
  headerBgColor: d = "transparent",
  baseFontSize: x = 9,
  paperSize: w = "58mm",
  fontFamily: E = "Consolas, monospace",
  logoUrl: S = "",
  headerText: O = "",
  footerText: h = "",
  sellerName: y = "",
  showSignature: b = !1,
  showTaxBreakdown: _ = !1
}) => {
  const k = l === "start" ? "left" : l === "end" ? "right" : "center", L = V["58mm"] || V["58mm"], v = de(
    (R) => o(R.price * R.quantity),
    []
  ), m = {
    order: t,
    alignStyle: k,
    primaryColor: r,
    borderColor: i,
    headerBgColor: d,
    formatItemTotal: v,
    headerText: O,
    footerText: h,
    sellerName: y,
    showSignature: b,
    textColor: n,
    layout: s,
    alignment: l,
    baseFontSize: x,
    paperSize: w,
    fontFamily: E,
    logoUrl: S,
    showTaxBreakdown: _,
    customCss: ""
  };
  let p;
  switch (s) {
    case 1:
      p = /* @__PURE__ */ e.jsx(be, { ...m });
      break;
    case 2:
      p = /* @__PURE__ */ e.jsx(ye, { ...m });
      break;
    case 3:
      p = /* @__PURE__ */ e.jsx(Ae, { ...m });
      break;
    case 4:
      p = /* @__PURE__ */ e.jsx(ge, { ...m });
      break;
    case 5:
      p = /* @__PURE__ */ e.jsx(Oe, { ...m });
      break;
    case 6:
      p = /* @__PURE__ */ e.jsx(ue, { ...m });
      break;
    case 7:
      p = /* @__PURE__ */ e.jsx(_e, { ...m });
      break;
    case 8:
      p = /* @__PURE__ */ e.jsx(Le, { ...m });
      break;
    case 9:
      p = /* @__PURE__ */ e.jsx(ze, { ...m });
      break;
    case 10:
      p = /* @__PURE__ */ e.jsx(Ie, { ...m });
      break;
    case 11:
      p = /* @__PURE__ */ e.jsx(Ce, { ...m });
      break;
    case 12:
      p = /* @__PURE__ */ e.jsx(Pe, { ...m });
      break;
    case 13:
      p = /* @__PURE__ */ e.jsx(De, { ...m });
      break;
    case 14:
      p = /* @__PURE__ */ e.jsx(Fe, { ...m });
      break;
    case 15:
      p = /* @__PURE__ */ e.jsx(Be, { ...m });
      break;
    case 16:
      p = /* @__PURE__ */ e.jsx(Me, { ...m });
      break;
    default:
      p = /* @__PURE__ */ e.jsx(je, { layoutNum: s, ...m });
      break;
  }
  const C = s === 4 ? p : /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        ...L,
        // { width: '58mm' }
        fontFamily: E,
        fontSize: `${x}px`,
        color: n,
        lineHeight: "1.2",
        padding: "5px",
        margin: "0 auto",
        textAlign: k,
        boxSizing: "content-box"
      },
      children: [
        S && /* @__PURE__ */ e.jsx(
          "img",
          {
            src: S,
            alt: "Logo",
            style: {
              maxWidth: "100%",
              maxHeight: "50px",
              margin: "5px auto",
              display: "block"
            },
            onError: (R) => R.currentTarget.style.display = "none"
          }
        ),
        p,
        s !== 4 && s !== 6 && /* @__PURE__ */ e.jsxs(
          "h2",
          {
            style: {
              fontSize: "1.222em",
              margin: "5px 0",
              display: "flex",
              justifyContent: "space-between",
              borderTop: `1px solid ${r}`,
              borderBottom: `1px solid ${r}`,
              padding: "4px 0",
              color: r
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { children: "GRAND TOTAL:" }),
              /* @__PURE__ */ e.jsx("span", { style: { fontWeight: "900" }, children: o(t.total) })
            ]
          }
        ),
        s !== 4 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("p", { style: { marginTop: "10px" }, children: h || "Thank you for shopping!" }),
          b && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                marginTop: "20px",
                borderTop: "1px dashed #ccc",
                paddingTop: "10px",
                textAlign: "center",
                fontSize: "0.8em"
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      height: "15px",
                      borderBottom: "1px solid #000",
                      marginBottom: "5px",
                      width: "80%",
                      margin: "0 auto"
                    }
                  }
                ),
                /* @__PURE__ */ e.jsxs("p", { children: [
                  "Authorized: ",
                  y || "N/A"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx("p", { style: { fontSize: "0.777em", margin: "5px 0" }, children: (/* @__PURE__ */ new Date()).toLocaleString() })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      id: "receipt-content-target-wrapper",
      style: { minWidth: "58mm", margin: "0 auto" },
      children: C
    }
  );
}, o = (t) => `$${(t / 100).toFixed(2)}`, He = I.memo(We), Ye = (t, s, l) => {
  const r = l ? "" : '<th style="text-align: right; padding: 3px 0; width: 25%;">TOTAL</th>', n = t.map(
    (i) => `
    <tr>
        <td style="text-align: left; padding: 2px 0;">${i.quantity}</td>
        <td style="text-align: left; padding: 2px 0;">${i.name}</td>
        ${l ? "" : `<td style="text-align: right; padding: 2px 0;">${o(
      i.price * i.quantity
    )}</td>`}
    </tr>
  `
  ).join("");
  return `
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: inherit; color: inherit;">
        <thead>
            <tr style="border-top: 1px dashed ${s}; border-bottom: 1px dashed ${s};">
                <th style="text-align: left; padding: 3px 0; width: 15%;">QTY</th>
                <th style="text-align: left; padding: 3px 0; width: ${l ? "85%" : "60%"};">ITEM</th>
                ${r}
            </tr>
        </thead>
        <tbody>${n}</tbody>
    </table>
  `;
}, Ue = (t, s, l) => {
  const {
    layout: r,
    primaryColor: n,
    borderColor: i,
    headerText: d,
    headerBgColor: x,
    sellerName: w,
    showSignature: E,
    showTaxBreakdown: S
  } = s, O = r === 6, h = Ye(
    t.items,
    i,
    O
  ), y = (_, k) => `
    <h1 style="font-size: 1.4em; margin: 5px 0; color: ${k}; text-transform: uppercase;">${_ || "The Store Name"}</h1>
  `, b = S ? `
    <footer style="border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Subtotal:</span><span style="font-weight: bold;">${o(
    t.subtotal
  )}</span></p>
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Tax:</span><span style="font-weight: bold;">${o(
    t.tax
  )}</span></p>
    </footer>
  ` : "";
  switch (r) {
    case 1:
    // Classic POS
    case 2:
    // Detailed POS
    case 3:
      const _ = r === 2 ? t.customFields.map(
        (j) => `<p style="font-size: 0.9em;">${j.key}: ${j.value}</p>`
      ).join("") : "";
      return `
        <header style="background-color: ${x}; padding: 5px 0;">
          ${y(d, n)}
          <p style="margin: 2px 0;">Order #: ${t.id}</p>
          <p style="margin: 5px 0 10px 0; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
          ${_}
        </header>
        ${h}
        ${b}
      `;
    case 4: {
      const j = `
        <section style="margin-bottom: 20px;">
          <h2 style="font-size: 16px; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; color: ${n};">Bill To:</h2>
          <p style="margin: 2px 0; font-weight: bold;">${t.customer.name}</p>
          <p style="margin: 2px 0;">${t.customer.address}</p>
        </section>
      `, $ = `
        <div style="margin-top: 50px; text-align: right; border-top: 1px solid ${i}; padding-top: 10px;">
          <p style="margin: 2px 0;">Subtotal: ${o(
        t.subtotal
      )}</p>
          <p style="margin: 2px 0;">Tax: ${o(t.tax)}</p>
          <h3 style="margin: 5px 0; color: ${n};">GRAND TOTAL: ${o(
        t.total
      )}</h3>
        </div>
      `, W = E ? `
        <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-around; font-size: 10px;">
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Customer Signature</p>
          </div>
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Authorized by: ${w || "N/A"}</p>
          </div>
        </div>
      ` : "";
      return `
        <div style="padding: 15mm 10mm; font-size: 12px; min-height: 270mm; box-sizing: border-box; text-align: left;">
          <header style="border-bottom: 3px solid ${n}; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; background-color: ${x}; color: ${n};">
            <h1 style="font-size: 24px; margin: 0;">INVOICE</h1>
            <div style="text-align: right; color: #000;">
                <p style="margin: 2px 0; font-weight: bold;">${d || "React Solutions Ltd."}</p>
                <p style="margin: 2px 0; font-size: 10px;">${t.customer.address}</p>
                <p style="margin: 2px 0; font-size: 10px;">Invoice ID: ${t.id}</p>
            </div>
          </header>
          ${j}
          ${h}
          ${$}
          ${W}
        </div>
      `;
    }
    case 5:
      const k = `
        <div style="border: 2px solid ${n}; padding: 10px; margin: 10px 0; text-align: ${l};">
            <h2 style="margin: 0 0 5px 0; font-size: 1.1em; color: ${n};">ORDER SUMMARY</h2>
            ${b}
        </div>
      `, L = `
        <h2 
          style="font-size: 1.6em; margin: 10px 0; padding: 5px 0; border-top: 3px double ${n}; text-align: ${l}; color: ${n}; font-weight: 900;"
        >
            TOTAL: ${o(t.total)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${x};">
          ${y(d, n)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction ID: ${t.id}</p>
          <p style="margin: 2px 0; font-size: 0.9em;">Customer: ${t.customer.name}</p>
        </header>
        ${k}
        ${h}
        ${L}
      `;
    case 6: {
      const j = t.items.map(
        ($) => `
        <tr style="border-bottom: 1px dashed ${i};">
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em; width: 10%;">${$.quantity}X</td>
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em;">${$.name}</td>
        </tr>
      `
      ).join("");
      return `
        <header style="border-bottom: 2px solid ${n}; padding-bottom: 5px; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 5px 0; color: ${n};">KITCHEN ORDER TICKET</h1>
          <p style="margin: 2px 0;">Order #: <span style="font-weight: bold; font-size: 1.2em;">${t.id}</span></p>
        </header>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: 1em;">
          <tbody>${j}</tbody>
        </table>
        <p style="font-size: 1.2em; margin-top: 20px; border-top: 1px solid ${n}; padding-top: 5px;">
          <span style="font-weight: bold; color: red;">NOTES:</span> COOK WELL
        </p>
      `;
    }
    case 7:
      const v = `
        <div style="background-color: #F0FFF0; border: 1px solid ${n}; padding: 8px; margin-bottom: 10px;">
            <h3 style="margin: 0; font-size: 1.1em; color: green;">🎉 SPECIAL OFFER! 🎉</h3>
            <p style="margin: 2px 0; font-size: 0.9em;">You saved ${o(
        t.tax / 2
      )} today!</p>
        </div>
      `;
      return `
        <header style="padding: 5px 0; border-bottom: 1px solid ${i}; margin-bottom: 10px;">
            ${y(d, n)}
            <p style="margin: 2px 0; font-size: 0.9em;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${v}
        ${h}
        ${b}
        <h2 style="font-size: 1.5em; margin: 10px 0; color: ${n};">TOTAL: ${o(
        t.total
      )}</h2>
        <p style="font-size: 0.8em; margin-top: 10px;">Visit us online at example.com!</p>
      `;
    case 8:
      const m = `
        <div style="display: flex; justify-content: space-between; margin: 10px 0; font-size: 0.9em; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">
            <div style="text-align: left;">
                <p style="margin: 2px 0;">Customer: ${t.customer.name}</p>
                <p style="margin: 2px 0;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
            </div>
            <div style="text-align: right; font-weight: bold;">
                <p style="margin: 2px 0; color: ${n};">Order Ref: ${t.id}</p>
            </div>
        </div>
      `;
      return `
        <header style="background-color: ${x}; padding: 10px 5px; border-bottom: 3px solid ${n};">
          <p style="margin: 0; font-size: 0.9em; text-transform: uppercase; color: ${n};">${d || "INVOICE"}</p>
          <h1 style="font-size: 1.8em; margin: 5px 0 0 0; color: #000;">${w || "Finance Tracker"}</h1>
        </header>
        ${m}
        ${h}
        ${b}
      `;
    case 9:
      const p = `
        <h2 style="font-size: 1.5em; margin: 10px 0; padding-bottom: 5px; border-bottom: 3px double ${n}; color: ${n};">
            GRAND TOTAL: ${o(t.total)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 3px solid ${n}; margin-bottom: 15px;">
            ${y(d, n)}
            <p style="margin: 2px 0; font-size: 0.9em;">Ref: ${t.id}</p>
        </header>
        <section style="margin-bottom: 15px;">
            <h3 style="font-size: 1em; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 5px;">ITEMS</h3>
            ${h}
        </section>
        <section style="margin-top: 15px; border-top: 1px solid ${i}; padding-top: 5px;">
            ${b}
        </section>
        ${p}
      `;
    case 10:
      return `
        ${`
        <div style="padding: 10px; background-color: ${n}; border-radius: 10px 10px 0 0; text-align: ${l};">
          <p style="margin: 0; font-size: 0.8em; color: #fff;">TICKET NUMBER:</p>
          <h1 style="font-size: 1.6em; margin: 5px 0 0 0; color: #fff;">#${t.id}</h1>
        </div>
      `}
        <header style="padding: 10px 0; border-bottom: 2px solid ${i}; margin-bottom: 10px; text-align: ${l};">
          ${y(d, n)}
          <p style="margin: 2px 0;">Date: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${h}
        ${b}
      `;
    case 11:
      return `
        ${`
        <header style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid ${n}; margin-bottom: 10px;">
            <div style="text-align: left;">
                <h1 style="font-size: 1.2em; margin: 0; color: ${n};">${d || "The Shop"}</h1>
                <p style="margin: 2px 0; font-size: 0.8em;">Receipt</p>
            </div>
            <div style="text-align: right;">
                <p style="margin: 2px 0; font-weight: bold;">Order: ${t.id}</p>
                <p style="margin: 2px 0; font-size: 0.8em;">${new Date(
        t.date
      ).toLocaleTimeString()}</p>
            </div>
        </header>
      `}
        ${h}
        ${b}
      `;
    case 12:
      const P = `
        <div style="border: 1px solid ${n}; padding: 8px; margin: 10px 0; background-color: ${x};">
            ${b}
        </div>
        <h2 style="font-size: 1.5em; margin: 5px 0; color: ${n}; text-align: ${l};">TOTAL: ${o(
        t.total
      )}</h2>
      `;
      return `
        <header style="padding: 5px 0; margin-bottom: 10px; border-bottom: 1px dashed ${i};">
          ${y(d, n)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction: ${t.id}</p>
        </header>
        ${h}
        ${P}
      `;
    case 13:
      const F = `
        <div style="margin-top: 10px; padding: 5px 0; border-top: 1px solid ${i}; text-align: ${l};">
          <p style="font-weight: bold; font-size: 1.1em; color: ${n};">Total Payable:</p>
          <h2 style="font-size: 2em; margin: 2px 0; color: ${n};">${o(
        t.total
      )}</h2>
        </div>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 5px double ${n}; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 0; color: ${n};">${d || "Item Focus Receipt"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.8em;">Order: ${t.id} | Date: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        <p style="margin: 5px 0; font-weight: bold; text-align: left;">Items Purchased:</p>
        ${h}
        ${b}
        ${F}
      `;
    case 14:
      const z = `
        <section style="margin-bottom: 15px; border: 1px dashed ${i}; padding: 8px; text-align: left;">
            <p style="margin: 2px 0; font-weight: bold;">Shipping To:</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.name}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.address}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">Tracking ID: ${t.id.slice(0, 8).toUpperCase()}</p>
        </section>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${n}; color: #fff; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.5em; margin: 0;">${d || "Online Order Receipt"}</h1>
          <p style="margin: 2px 0; font-size: 0.9em;">Order placed: ${new Date(
        t.date
      ).toLocaleDateString()}</p>
        </header>
        ${z}
        ${h}
        ${b}
      `;
    case 15:
      const B = `
        <header style="padding: 10px 0; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.2em; margin: 0; text-transform: none;">${d || "Receipt"}</h1>
          <p style="margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; font-size: 0.9em;">
            TID: ${t.id} | ${new Date(
        t.date
      ).toLocaleDateString()}
          </p>
        </header>
      `, M = `
        <h2 style="font-size: 1.4em; margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
            Total: ${o(t.total)}
        </h2>
      `;
      return `
        ${B}
        ${h}
        <section style="margin-top: 10px; border-top: 1px dashed ${i}; padding-top: 5px;">
            ${b}
        </section>
        ${M}
      `;
    case 16: {
      const j = "#FF9800", $ = `
        <header style="padding: 15px 0; background-color: ${n}; color: #fff; border-bottom: 3px solid ${j}; text-align: ${l};">
          <h1 style="font-size: 1.6em; margin: 0; text-transform: uppercase; letter-spacing: 2px;">${d || "TROPICAL SALES"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.9em; font-weight: bold;">Order: ${t.id}</p>
        </header>
        <div style="background-color: ${j}20; padding: 5px; margin: 10px 0; text-align: ${l};">
            <p style="margin: 0; font-size: 0.9em; color: ${j}; font-weight: bold;">Thank You, ${t.customer.name}!</p>
        </div>
      `, W = `
        <div style="margin-top: 10px; padding: 8px; background-color: ${j}; color: #fff;">
            <h2 style="font-size: 1.8em; margin: 0; display: flex; justify-content: space-between;">
                <span>GRAND TOTAL</span>
                <span>${o(t.total)}</span>
            </h2>
        </div>
      `;
      return `
        ${$}
        ${h}
        ${b}
        ${W}
      `;
    }
    default:
      return `
        <header style="border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; background-color: ${x}; text-align: ${l};">
          <h1 style="font-size: 1.4em; margin: 5px 0; color: ${n};">Layout ${r} - Custom Type</h1>
          <p style="margin: 2px 0;">(Fallback: No specific HTML structure defined.)</p>
        </header>
        ${h}
        ${b}
      `;
  }
}, Ve = (t, s) => {
  const {
    layout: l,
    alignment: r,
    primaryColor: n,
    textColor: i,
    borderColor: d,
    baseFontSize: x,
    paperSize: w,
    fontFamily: E,
    logoUrl: S,
    footerText: O,
    sellerName: h,
    showSignature: y,
    customCss: b
  } = s;
  return { printReceipt: de(() => {
    if (!t || !t.items.length) {
      console.error("Cannot print: Order data is missing or empty.");
      return;
    }
    const k = r === "start" ? "left" : r === "end" ? "right" : "center", L = V["58mm"] || V["58mm"], v = w === "a4" || w === "letter", m = window.screen.width, p = window.screen.height, C = Math.max(700, Math.floor(m * 0.5)), R = Math.max(600, Math.floor(p * 0.7)), P = Ue(t, s, k), F = S && !v ? `<img src="${S}" alt="Logo" style="max-width: 100%; max-height: 50px; margin: 5px auto; display: block;" onerror="this.style.display='none';">` : "", z = !v && l !== 6 ? `
        <!-- Consistent Total -->
        <h2 class="grand-total-style">
            <span>GRAND TOTAL:</span>
            <span style="font-weight: 900;">${o(
      t.total
    )}</span>
        </h2>
    ` : "", B = v ? "" : `
      <p style="margin-top: 10px;">${O || "Thank you for shopping!"}</p>
      ${y ? `
        <div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px; text-align: center; font-size: 0.8em;">
          <div style="height: 15px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 80%; margin: 0 auto;"></div>
          <p>Authorized: ${h || "N/A"}</p>
        </div>
      ` : ""}
      <p style="font-size: 0.777em; margin: 5px 0;">${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
    `, M = v ? P : `
        <div id="receipt-content-target">
            ${F}
            ${P}
            ${z}
            ${B}
        </div>
    `, j = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Receipt Print</title>
          <style>
              @page { 
                size: ${v ? w : "auto"}; 
                margin: ${v ? "15mm" : "0"}; 
              }
              body { 
                margin: 0; 
                padding: 0; 
                font-family: ${E};
                color: ${i}; /* Global text color */
              }
              #receipt-content-target {
                  width: ${L.width};
                  max-width: ${L.width}; /* Crucial fix for big window stretching on POS sizes */
                  font-size: ${x}px;
                  line-height: 1.2;
                  padding: 5px;
                  margin: 0 auto;
                  text-align: ${k};
                  box-sizing: content-box;
              }
              /* Ensure A4/Letter size uses 100% width and default document margins */
              ${v ? `
                #receipt-content-target { 
                    width: 100%; 
                    max-width: 100%;
                    padding: 0;
                    margin: 0;
                    text-align: left; /* Default for documents */
                }
              ` : ""}
              
              table { width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; }
              th, td { padding: 2px 0; }
              
              /* Apply dynamic color to the Grand Total section */
              .grand-total-style {
                font-size: 1.222em; 
                margin: 5px 0; 
                display: flex; 
                justify-content: space-between; 
                border-top: 1px solid ${n}; 
                border-bottom: 1px solid ${n}; 
                padding: 4px 0; 
                color: ${n};
              }

              @media print {
                  html, body { height: auto; overflow: hidden; }
              }

              /* --- Custom CSS Injection --- */
              ${b}
          </style>
      </head>
      <body>
        ${M}
      </body>
      </html>
    `, $ = window.open(
      "",
      "_blank",
      `height=${R},width=${C}`
    );
    $ ? ($.document.write(j), $.document.close(), $.onload = () => {
      $.print(), v || setTimeout(() => $.close(), 1e3);
    }) : console.warn(
      "Could not open print window. Check pop-up blocker settings."
    );
  }, [t, s]), ReceiptContent: He };
}, Ge = {
  "58mm": { width: "58mm", name: "POS (58mm)" },
  "80mm": { width: "80mm", name: "POS (80mm)" },
  "100mm": { width: "100mm", name: "Wide POS (100mm)" },
  a4: { width: "210mm", name: "Standard (A4)" },
  letter: { width: "216mm", name: "Letter (8.5in)" }
};
export {
  Ge as PAPER_SIZES,
  Ve as useReceiptPrint
};
