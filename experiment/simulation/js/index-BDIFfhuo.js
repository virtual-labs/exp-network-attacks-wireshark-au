function X0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Uu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Q0 = { exports: {} },
  Ku = {},
  Y0 = { exports: {} },
  Qe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jl = Symbol.for("react.element"),
  rC = Symbol.for("react.portal"),
  oC = Symbol.for("react.fragment"),
  iC = Symbol.for("react.strict_mode"),
  aC = Symbol.for("react.profiler"),
  lC = Symbol.for("react.provider"),
  sC = Symbol.for("react.context"),
  uC = Symbol.for("react.forward_ref"),
  cC = Symbol.for("react.suspense"),
  fC = Symbol.for("react.memo"),
  dC = Symbol.for("react.lazy"),
  Om = Symbol.iterator;
function vC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Om && e[Om]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  J0 = Object.assign,
  ey = {};
function la(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ey),
    (this.updater = n || Z0);
}
la.prototype.isReactComponent = {};
la.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
la.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ty() {}
ty.prototype = la.prototype;
function Jv(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ey),
    (this.updater = n || Z0);
}
var ep = (Jv.prototype = new ty());
ep.constructor = Jv;
J0(ep, la.prototype);
ep.isPureReactComponent = !0;
var Rm = Array.isArray,
  ny = Object.prototype.hasOwnProperty,
  tp = { current: null },
  ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function oy(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ny.call(t, r) && !ry.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: jl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: tp.current,
  };
}
function pC(e, t) {
  return {
    $$typeof: jl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function np(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jl;
}
function mC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pm = /\/+/g;
function Bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? mC("" + e.key)
    : t.toString(36);
}
function Ns(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case jl:
          case rC:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Bc(a, 0) : r),
      Rm(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pm, "$&/") + "/"),
          Ns(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (np(o) &&
            (o = pC(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pm, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Rm(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Bc(i, l);
      a += Ns(i, t, n, s, o);
    }
  else if (((s = vC(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Bc(i, l++)), (a += Ns(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function rs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ns(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function hC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var bn = { current: null },
  Fs = { transition: null },
  gC = {
    ReactCurrentDispatcher: bn,
    ReactCurrentBatchConfig: Fs,
    ReactCurrentOwner: tp,
  };
function iy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Qe.Children = {
  map: rs,
  forEach: function (e, t, n) {
    rs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!np(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Qe.Component = la;
Qe.Fragment = oC;
Qe.Profiler = aC;
Qe.PureComponent = Jv;
Qe.StrictMode = iC;
Qe.Suspense = cC;
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gC;
Qe.act = iy;
Qe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = J0({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = tp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      ny.call(t, s) &&
        !ry.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: jl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Qe.createContext = function (e) {
  return (
    (e = {
      $$typeof: sC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lC, _context: e }),
    (e.Consumer = e)
  );
};
Qe.createElement = oy;
Qe.createFactory = function (e) {
  var t = oy.bind(null, e);
  return (t.type = e), t;
};
Qe.createRef = function () {
  return { current: null };
};
Qe.forwardRef = function (e) {
  return { $$typeof: uC, render: e };
};
Qe.isValidElement = np;
Qe.lazy = function (e) {
  return { $$typeof: dC, _payload: { _status: -1, _result: e }, _init: hC };
};
Qe.memo = function (e, t) {
  return { $$typeof: fC, type: e, compare: t === void 0 ? null : t };
};
Qe.startTransition = function (e) {
  var t = Fs.transition;
  Fs.transition = {};
  try {
    e();
  } finally {
    Fs.transition = t;
  }
};
Qe.unstable_act = iy;
Qe.useCallback = function (e, t) {
  return bn.current.useCallback(e, t);
};
Qe.useContext = function (e) {
  return bn.current.useContext(e);
};
Qe.useDebugValue = function () {};
Qe.useDeferredValue = function (e) {
  return bn.current.useDeferredValue(e);
};
Qe.useEffect = function (e, t) {
  return bn.current.useEffect(e, t);
};
Qe.useId = function () {
  return bn.current.useId();
};
Qe.useImperativeHandle = function (e, t, n) {
  return bn.current.useImperativeHandle(e, t, n);
};
Qe.useInsertionEffect = function (e, t) {
  return bn.current.useInsertionEffect(e, t);
};
Qe.useLayoutEffect = function (e, t) {
  return bn.current.useLayoutEffect(e, t);
};
Qe.useMemo = function (e, t) {
  return bn.current.useMemo(e, t);
};
Qe.useReducer = function (e, t, n) {
  return bn.current.useReducer(e, t, n);
};
Qe.useRef = function (e) {
  return bn.current.useRef(e);
};
Qe.useState = function (e) {
  return bn.current.useState(e);
};
Qe.useSyncExternalStore = function (e, t, n) {
  return bn.current.useSyncExternalStore(e, t, n);
};
Qe.useTransition = function () {
  return bn.current.useTransition();
};
Qe.version = "18.3.1";
Y0.exports = Qe;
var f = Y0.exports;
const ne = Uu(f),
  Ui = X0({ __proto__: null, default: ne }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yC = f,
  SC = Symbol.for("react.element"),
  bC = Symbol.for("react.fragment"),
  wC = Object.prototype.hasOwnProperty,
  CC = yC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xC = { key: !0, ref: !0, __self: !0, __source: !0 };
function ay(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) wC.call(t, r) && !xC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: SC,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: CC.current,
  };
}
Ku.Fragment = bC;
Ku.jsx = ay;
Ku.jsxs = ay;
Q0.exports = Ku;
var ee = Q0.exports,
  Wf = {},
  ly = { exports: {} },
  Gn = {},
  sy = { exports: {} },
  uy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, M) {
    var A = O.length;
    O.push(M);
    e: for (; 0 < A; ) {
      var $ = (A - 1) >>> 1,
        k = O[$];
      if (0 < o(k, M)) (O[$] = M), (O[A] = k), (A = $);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var M = O[0],
      A = O.pop();
    if (A !== M) {
      O[0] = A;
      e: for (var $ = 0, k = O.length, B = k >>> 1; $ < B; ) {
        var W = 2 * ($ + 1) - 1,
          K = O[W],
          se = W + 1,
          q = O[se];
        if (0 > o(K, A))
          se < k && 0 > o(q, K)
            ? ((O[$] = q), (O[se] = A), ($ = se))
            : ((O[$] = K), (O[W] = A), ($ = W));
        else if (se < k && 0 > o(q, A)) (O[$] = q), (O[se] = A), ($ = se);
        else break e;
      }
    }
    return M;
  }
  function o(O, M) {
    var A = O.sortIndex - M.sortIndex;
    return A !== 0 ? A : O.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    v = 3,
    g = !1,
    y = !1,
    S = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= O)
        r(u), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(u);
    }
  }
  function w(O) {
    if (((S = !1), m(O), !y))
      if (n(s) !== null) (y = !0), T(C);
      else {
        var M = n(u);
        M !== null && I(w, M.startTime - O);
      }
  }
  function C(O, M) {
    (y = !1), S && ((S = !1), h(R), (R = -1)), (g = !0);
    var A = v;
    try {
      for (
        m(M), d = n(s);
        d !== null && (!(d.expirationTime > M) || (O && !j()));

      ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          (d.callback = null), (v = d.priorityLevel);
          var k = $(d.expirationTime <= M);
          (M = e.unstable_now()),
            typeof k == "function" ? (d.callback = k) : d === n(s) && r(s),
            m(M);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var B = !0;
      else {
        var W = n(u);
        W !== null && I(w, W.startTime - M), (B = !1);
      }
      return B;
    } finally {
      (d = null), (v = A), (g = !1);
    }
  }
  var E = !1,
    x = null,
    R = -1,
    P = 5,
    _ = -1;
  function j() {
    return !(e.unstable_now() - _ < P);
  }
  function L() {
    if (x !== null) {
      var O = e.unstable_now();
      _ = O;
      var M = !0;
      try {
        M = x(!0, O);
      } finally {
        M ? D() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(L);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      V = z.port2;
    (z.port1.onmessage = L),
      (D = function () {
        V.postMessage(null);
      });
  } else
    D = function () {
      b(L, 0);
    };
  function T(O) {
    (x = O), E || ((E = !0), D());
  }
  function I(O, M) {
    R = b(function () {
      O(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), T(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = v;
      }
      var A = v;
      v = M;
      try {
        return O();
      } finally {
        v = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, M) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var A = v;
      v = O;
      try {
        return M();
      } finally {
        v = A;
      }
    }),
    (e.unstable_scheduleCallback = function (O, M, A) {
      var $ = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? $ + A : $))
          : (A = $),
        O)
      ) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return (
        (k = A + k),
        (O = {
          id: c++,
          callback: M,
          priorityLevel: O,
          startTime: A,
          expirationTime: k,
          sortIndex: -1,
        }),
        A > $
          ? ((O.sortIndex = A),
            t(u, O),
            n(s) === null &&
              O === n(u) &&
              (S ? (h(R), (R = -1)) : (S = !0), I(w, A - $)))
          : ((O.sortIndex = k), t(s, O), y || g || ((y = !0), T(C))),
        O
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (O) {
      var M = v;
      return function () {
        var A = v;
        v = M;
        try {
          return O.apply(this, arguments);
        } finally {
          v = A;
        }
      };
    });
})(uy);
sy.exports = uy;
var EC = sy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var OC = f,
  Wn = EC;
function Q(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cy = new Set(),
  tl = {};
function li(e, t) {
  Ki(e, t), Ki(e + "Capture", t);
}
function Ki(e, t) {
  for (tl[e] = t, e = 0; e < t.length; e++) cy.add(t[e]);
}
var Ur = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Uf = Object.prototype.hasOwnProperty,
  RC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Im = {},
  $m = {};
function PC(e) {
  return Uf.call($m, e)
    ? !0
    : Uf.call(Im, e)
    ? !1
    : RC.test(e)
    ? ($m[e] = !0)
    : ((Im[e] = !0), !1);
}
function IC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $C(e, t, n, r) {
  if (t === null || typeof t > "u" || IC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function wn(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var on = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    on[e] = new wn(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  on[t] = new wn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  on[e] = new wn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  on[e] = new wn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    on[e] = new wn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  on[e] = new wn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  on[e] = new wn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  on[e] = new wn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  on[e] = new wn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rp = /[\-:]([a-z])/g;
function op(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, op);
    on[t] = new wn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, op);
    on[t] = new wn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(rp, op);
  on[t] = new wn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  on[e] = new wn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
on.xlinkHref = new wn(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  on[e] = new wn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ip(e, t, n, r) {
  var o = on.hasOwnProperty(t) ? on[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($C(t, n, o, r) && (n = null),
    r || o === null
      ? PC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zr = OC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  os = Symbol.for("react.element"),
  xi = Symbol.for("react.portal"),
  Ei = Symbol.for("react.fragment"),
  ap = Symbol.for("react.strict_mode"),
  Kf = Symbol.for("react.profiler"),
  fy = Symbol.for("react.provider"),
  dy = Symbol.for("react.context"),
  lp = Symbol.for("react.forward_ref"),
  Gf = Symbol.for("react.suspense"),
  qf = Symbol.for("react.suspense_list"),
  sp = Symbol.for("react.memo"),
  lo = Symbol.for("react.lazy"),
  vy = Symbol.for("react.offscreen"),
  Tm = Symbol.iterator;
function ba(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tm && e[Tm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Et = Object.assign,
  Hc;
function _a(e) {
  if (Hc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hc = (t && t[1]) || "";
    }
  return (
    `
` +
    Hc +
    e
  );
}
var Vc = !1;
function Wc(e, t) {
  if (!e || Vc) return "";
  Vc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Vc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _a(e) : "";
}
function TC(e) {
  switch (e.tag) {
    case 5:
      return _a(e.type);
    case 16:
      return _a("Lazy");
    case 13:
      return _a("Suspense");
    case 19:
      return _a("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wc(e.type, !1)), e;
    case 11:
      return (e = Wc(e.type.render, !1)), e;
    case 1:
      return (e = Wc(e.type, !0)), e;
    default:
      return "";
  }
}
function Xf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ei:
      return "Fragment";
    case xi:
      return "Portal";
    case Kf:
      return "Profiler";
    case ap:
      return "StrictMode";
    case Gf:
      return "Suspense";
    case qf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dy:
        return (e.displayName || "Context") + ".Consumer";
      case fy:
        return (e._context.displayName || "Context") + ".Provider";
      case lp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sp:
        return (
          (t = e.displayName || null), t !== null ? t : Xf(e.type) || "Memo"
        );
      case lo:
        (t = e._payload), (e = e._init);
        try {
          return Xf(e(t));
        } catch {}
    }
  return null;
}
function MC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xf(t);
    case 8:
      return t === ap ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Oo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function py(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _C(e) {
  var t = py(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function is(e) {
  e._valueTracker || (e._valueTracker = _C(e));
}
function my(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = py(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qf(e, t) {
  var n = t.checked;
  return Et({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Oo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hy(e, t) {
  (t = t.checked), t != null && ip(e, "checked", t, !1);
}
function Yf(e, t) {
  hy(e, t);
  var n = Oo(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zf(e, t.type, Oo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _m(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zf(e, t, n) {
  (t !== "number" || Js(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Aa = Array.isArray;
function Li(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Oo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Q(91));
  return Et({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Am(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Q(92));
      if (Aa(n)) {
        if (1 < n.length) throw Error(Q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Oo(n) };
}
function gy(e, t) {
  var n = Oo(t.value),
    r = Oo(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ed(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var as,
  Sy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        as = as || document.createElement("div"),
          as.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = as.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Da = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  AC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Da).forEach(function (e) {
  AC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Da[t] = Da[e]);
  });
});
function by(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Da.hasOwnProperty(e) && Da[e])
    ? ("" + t).trim()
    : t + "px";
}
function wy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = by(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var NC = Et(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function td(e, t) {
  if (t) {
    if (NC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Q(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Q(62));
  }
}
function nd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rd = null;
function up(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var od = null,
  Di = null,
  ki = null;
function Fm(e) {
  if ((e = Dl(e))) {
    if (typeof od != "function") throw Error(Q(280));
    var t = e.stateNode;
    t && ((t = Yu(t)), od(e.stateNode, e.type, t));
  }
}
function Cy(e) {
  Di ? (ki ? ki.push(e) : (ki = [e])) : (Di = e);
}
function xy() {
  if (Di) {
    var e = Di,
      t = ki;
    if (((ki = Di = null), Fm(e), t)) for (e = 0; e < t.length; e++) Fm(t[e]);
  }
}
function Ey(e, t) {
  return e(t);
}
function Oy() {}
var Uc = !1;
function Ry(e, t, n) {
  if (Uc) return e(t, n);
  Uc = !0;
  try {
    return Ey(e, t, n);
  } finally {
    (Uc = !1), (Di !== null || ki !== null) && (Oy(), xy());
  }
}
function rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(Q(231, t, typeof n));
  return n;
}
var id = !1;
if (Ur)
  try {
    var wa = {};
    Object.defineProperty(wa, "passive", {
      get: function () {
        id = !0;
      },
    }),
      window.addEventListener("test", wa, wa),
      window.removeEventListener("test", wa, wa);
  } catch {
    id = !1;
  }
function FC(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ka = !1,
  eu = null,
  tu = !1,
  ad = null,
  jC = {
    onError: function (e) {
      (ka = !0), (eu = e);
    },
  };
function zC(e, t, n, r, o, i, a, l, s) {
  (ka = !1), (eu = null), FC.apply(jC, arguments);
}
function LC(e, t, n, r, o, i, a, l, s) {
  if ((zC.apply(this, arguments), ka)) {
    if (ka) {
      var u = eu;
      (ka = !1), (eu = null);
    } else throw Error(Q(198));
    tu || ((tu = !0), (ad = u));
  }
}
function si(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Py(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function jm(e) {
  if (si(e) !== e) throw Error(Q(188));
}
function DC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = si(e)), t === null)) throw Error(Q(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return jm(o), e;
        if (i === r) return jm(o), t;
        i = i.sibling;
      }
      throw Error(Q(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(Q(189));
      }
    }
    if (n.alternate !== r) throw Error(Q(190));
  }
  if (n.tag !== 3) throw Error(Q(188));
  return n.stateNode.current === n ? e : t;
}
function Iy(e) {
  return (e = DC(e)), e !== null ? $y(e) : null;
}
function $y(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $y(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ty = Wn.unstable_scheduleCallback,
  zm = Wn.unstable_cancelCallback,
  kC = Wn.unstable_shouldYield,
  BC = Wn.unstable_requestPaint,
  _t = Wn.unstable_now,
  HC = Wn.unstable_getCurrentPriorityLevel,
  cp = Wn.unstable_ImmediatePriority,
  My = Wn.unstable_UserBlockingPriority,
  nu = Wn.unstable_NormalPriority,
  VC = Wn.unstable_LowPriority,
  _y = Wn.unstable_IdlePriority,
  Gu = null,
  Tr = null;
function WC(e) {
  if (Tr && typeof Tr.onCommitFiberRoot == "function")
    try {
      Tr.onCommitFiberRoot(Gu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gr = Math.clz32 ? Math.clz32 : GC,
  UC = Math.log,
  KC = Math.LN2;
function GC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((UC(e) / KC) | 0)) | 0;
}
var ls = 64,
  ss = 4194304;
function Na(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ru(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Na(l)) : ((i &= a), i !== 0 && (r = Na(i)));
  } else (a = n & ~o), a !== 0 ? (r = Na(a)) : i !== 0 && (r = Na(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - gr(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function qC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function XC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - gr(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = qC(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function ld(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ay() {
  var e = ls;
  return (ls <<= 1), !(ls & 4194240) && (ls = 64), e;
}
function Kc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gr(t)),
    (e[t] = n);
}
function QC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - gr(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function fp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gr(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var at = 0;
function Ny(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fy,
  dp,
  jy,
  zy,
  Ly,
  sd = !1,
  us = [],
  go = null,
  yo = null,
  So = null,
  ol = new Map(),
  il = new Map(),
  uo = [],
  YC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      go = null;
      break;
    case "dragenter":
    case "dragleave":
      yo = null;
      break;
    case "mouseover":
    case "mouseout":
      So = null;
      break;
    case "pointerover":
    case "pointerout":
      ol.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      il.delete(t.pointerId);
  }
}
function Ca(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Dl(t)), t !== null && dp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ZC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (go = Ca(go, e, t, n, r, o)), !0;
    case "dragenter":
      return (yo = Ca(yo, e, t, n, r, o)), !0;
    case "mouseover":
      return (So = Ca(So, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ol.set(i, Ca(ol.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), il.set(i, Ca(il.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Dy(e) {
  var t = Ho(e.target);
  if (t !== null) {
    var n = si(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Py(n)), t !== null)) {
          (e.blockedOn = t),
            Ly(e.priority, function () {
              jy(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function js(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rd = r), n.target.dispatchEvent(r), (rd = null);
    } else return (t = Dl(n)), t !== null && dp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dm(e, t, n) {
  js(e) && n.delete(t);
}
function JC() {
  (sd = !1),
    go !== null && js(go) && (go = null),
    yo !== null && js(yo) && (yo = null),
    So !== null && js(So) && (So = null),
    ol.forEach(Dm),
    il.forEach(Dm);
}
function xa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sd ||
      ((sd = !0),
      Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority, JC)));
}
function al(e) {
  function t(o) {
    return xa(o, e);
  }
  if (0 < us.length) {
    xa(us[0], e);
    for (var n = 1; n < us.length; n++) {
      var r = us[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    go !== null && xa(go, e),
      yo !== null && xa(yo, e),
      So !== null && xa(So, e),
      ol.forEach(t),
      il.forEach(t),
      n = 0;
    n < uo.length;
    n++
  )
    (r = uo[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < uo.length && ((n = uo[0]), n.blockedOn === null); )
    Dy(n), n.blockedOn === null && uo.shift();
}
var Bi = Zr.ReactCurrentBatchConfig,
  ou = !0;
function ex(e, t, n, r) {
  var o = at,
    i = Bi.transition;
  Bi.transition = null;
  try {
    (at = 1), vp(e, t, n, r);
  } finally {
    (at = o), (Bi.transition = i);
  }
}
function tx(e, t, n, r) {
  var o = at,
    i = Bi.transition;
  Bi.transition = null;
  try {
    (at = 4), vp(e, t, n, r);
  } finally {
    (at = o), (Bi.transition = i);
  }
}
function vp(e, t, n, r) {
  if (ou) {
    var o = ud(e, t, n, r);
    if (o === null) nf(e, t, r, iu, n), Lm(e, r);
    else if (ZC(o, e, t, n, r)) r.stopPropagation();
    else if ((Lm(e, r), t & 4 && -1 < YC.indexOf(e))) {
      for (; o !== null; ) {
        var i = Dl(o);
        if (
          (i !== null && Fy(i),
          (i = ud(e, t, n, r)),
          i === null && nf(e, t, r, iu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else nf(e, t, r, null, n);
  }
}
var iu = null;
function ud(e, t, n, r) {
  if (((iu = null), (e = up(r)), (e = Ho(e)), e !== null))
    if (((t = si(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Py(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (iu = e), null;
}
function ky(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (HC()) {
        case cp:
          return 1;
        case My:
          return 4;
        case nu:
        case VC:
          return 16;
        case _y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fo = null,
  pp = null,
  zs = null;
function By() {
  if (zs) return zs;
  var e,
    t = pp,
    n = t.length,
    r,
    o = "value" in fo ? fo.value : fo.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (zs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ls(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cs() {
  return !0;
}
function km() {
  return !1;
}
function qn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cs
        : km),
      (this.isPropagationStopped = km),
      this
    );
  }
  return (
    Et(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cs));
      },
      persist: function () {},
      isPersistent: cs,
    }),
    t
  );
}
var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mp = qn(sa),
  Ll = Et({}, sa, { view: 0, detail: 0 }),
  nx = qn(Ll),
  Gc,
  qc,
  Ea,
  qu = Et({}, Ll, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: hp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ea &&
            (Ea && e.type === "mousemove"
              ? ((Gc = e.screenX - Ea.screenX), (qc = e.screenY - Ea.screenY))
              : (qc = Gc = 0),
            (Ea = e)),
          Gc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qc;
    },
  }),
  Bm = qn(qu),
  rx = Et({}, qu, { dataTransfer: 0 }),
  ox = qn(rx),
  ix = Et({}, Ll, { relatedTarget: 0 }),
  Xc = qn(ix),
  ax = Et({}, sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lx = qn(ax),
  sx = Et({}, sa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ux = qn(sx),
  cx = Et({}, sa, { data: 0 }),
  Hm = qn(cx),
  fx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function px(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vx[e]) ? !!t[e] : !1;
}
function hp() {
  return px;
}
var mx = Et({}, Ll, {
    key: function (e) {
      if (e.key) {
        var t = fx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hp,
    charCode: function (e) {
      return e.type === "keypress" ? Ls(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ls(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hx = qn(mx),
  gx = Et({}, qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vm = qn(gx),
  yx = Et({}, Ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hp,
  }),
  Sx = qn(yx),
  bx = Et({}, sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wx = qn(bx),
  Cx = Et({}, qu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xx = qn(Cx),
  Ex = [9, 13, 27, 32],
  gp = Ur && "CompositionEvent" in window,
  Ba = null;
Ur && "documentMode" in document && (Ba = document.documentMode);
var Ox = Ur && "TextEvent" in window && !Ba,
  Hy = Ur && (!gp || (Ba && 8 < Ba && 11 >= Ba)),
  Wm = " ",
  Um = !1;
function Vy(e, t) {
  switch (e) {
    case "keyup":
      return Ex.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Oi = !1;
function Rx(e, t) {
  switch (e) {
    case "compositionend":
      return Wy(t);
    case "keypress":
      return t.which !== 32 ? null : ((Um = !0), Wm);
    case "textInput":
      return (e = t.data), e === Wm && Um ? null : e;
    default:
      return null;
  }
}
function Px(e, t) {
  if (Oi)
    return e === "compositionend" || (!gp && Vy(e, t))
      ? ((e = By()), (zs = pp = fo = null), (Oi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ix = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Km(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ix[e.type] : t === "textarea";
}
function Uy(e, t, n, r) {
  Cy(r),
    (t = au(t, "onChange")),
    0 < t.length &&
      ((n = new mp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ha = null,
  ll = null;
function $x(e) {
  n1(e, 0);
}
function Xu(e) {
  var t = Ii(e);
  if (my(t)) return e;
}
function Tx(e, t) {
  if (e === "change") return t;
}
var Ky = !1;
if (Ur) {
  var Qc;
  if (Ur) {
    var Yc = "oninput" in document;
    if (!Yc) {
      var Gm = document.createElement("div");
      Gm.setAttribute("oninput", "return;"),
        (Yc = typeof Gm.oninput == "function");
    }
    Qc = Yc;
  } else Qc = !1;
  Ky = Qc && (!document.documentMode || 9 < document.documentMode);
}
function qm() {
  Ha && (Ha.detachEvent("onpropertychange", Gy), (ll = Ha = null));
}
function Gy(e) {
  if (e.propertyName === "value" && Xu(ll)) {
    var t = [];
    Uy(t, ll, e, up(e)), Ry($x, t);
  }
}
function Mx(e, t, n) {
  e === "focusin"
    ? (qm(), (Ha = t), (ll = n), Ha.attachEvent("onpropertychange", Gy))
    : e === "focusout" && qm();
}
function _x(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xu(ll);
}
function Ax(e, t) {
  if (e === "click") return Xu(t);
}
function Nx(e, t) {
  if (e === "input" || e === "change") return Xu(t);
}
function Fx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Cr = typeof Object.is == "function" ? Object.is : Fx;
function sl(e, t) {
  if (Cr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Uf.call(t, o) || !Cr(e[o], t[o])) return !1;
  }
  return !0;
}
function Xm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qm(e, t) {
  var n = Xm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xm(n);
  }
}
function qy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xy() {
  for (var e = window, t = Js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Js(e.document);
  }
  return t;
}
function yp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jx(e) {
  var t = Xy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Qm(n, i));
        var a = Qm(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zx = Ur && "documentMode" in document && 11 >= document.documentMode,
  Ri = null,
  cd = null,
  Va = null,
  fd = !1;
function Ym(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fd ||
    Ri == null ||
    Ri !== Js(r) ||
    ((r = Ri),
    "selectionStart" in r && yp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Va && sl(Va, r)) ||
      ((Va = r),
      (r = au(cd, "onSelect")),
      0 < r.length &&
        ((t = new mp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ri))));
}
function fs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pi = {
    animationend: fs("Animation", "AnimationEnd"),
    animationiteration: fs("Animation", "AnimationIteration"),
    animationstart: fs("Animation", "AnimationStart"),
    transitionend: fs("Transition", "TransitionEnd"),
  },
  Zc = {},
  Qy = {};
Ur &&
  ((Qy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pi.animationend.animation,
    delete Pi.animationiteration.animation,
    delete Pi.animationstart.animation),
  "TransitionEvent" in window || delete Pi.transitionend.transition);
function Qu(e) {
  if (Zc[e]) return Zc[e];
  if (!Pi[e]) return e;
  var t = Pi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qy) return (Zc[e] = t[n]);
  return e;
}
var Yy = Qu("animationend"),
  Zy = Qu("animationiteration"),
  Jy = Qu("animationstart"),
  e1 = Qu("transitionend"),
  t1 = new Map(),
  Zm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Io(e, t) {
  t1.set(e, t), li(t, [e]);
}
for (var Jc = 0; Jc < Zm.length; Jc++) {
  var ef = Zm[Jc],
    Lx = ef.toLowerCase(),
    Dx = ef[0].toUpperCase() + ef.slice(1);
  Io(Lx, "on" + Dx);
}
Io(Yy, "onAnimationEnd");
Io(Zy, "onAnimationIteration");
Io(Jy, "onAnimationStart");
Io("dblclick", "onDoubleClick");
Io("focusin", "onFocus");
Io("focusout", "onBlur");
Io(e1, "onTransitionEnd");
Ki("onMouseEnter", ["mouseout", "mouseover"]);
Ki("onMouseLeave", ["mouseout", "mouseover"]);
Ki("onPointerEnter", ["pointerout", "pointerover"]);
Ki("onPointerLeave", ["pointerout", "pointerover"]);
li(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
li(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
li(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
li(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  kx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));
function Jm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), LC(r, t, void 0, e), (e.currentTarget = null);
}
function n1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Jm(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Jm(o, l, u), (i = s);
        }
    }
  }
  if (tu) throw ((e = ad), (tu = !1), (ad = null), e);
}
function ht(e, t) {
  var n = t[hd];
  n === void 0 && (n = t[hd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (r1(t, e, 2, !1), n.add(r));
}
function tf(e, t, n) {
  var r = 0;
  t && (r |= 4), r1(n, e, r, t);
}
var ds = "_reactListening" + Math.random().toString(36).slice(2);
function ul(e) {
  if (!e[ds]) {
    (e[ds] = !0),
      cy.forEach(function (n) {
        n !== "selectionchange" && (kx.has(n) || tf(n, !1, e), tf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ds] || ((t[ds] = !0), tf("selectionchange", !1, t));
  }
}
function r1(e, t, n, r) {
  switch (ky(t)) {
    case 1:
      var o = ex;
      break;
    case 4:
      o = tx;
      break;
    default:
      o = vp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !id ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function nf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Ho(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ry(function () {
    var u = i,
      c = up(n),
      d = [];
    e: {
      var v = t1.get(e);
      if (v !== void 0) {
        var g = mp,
          y = e;
        switch (e) {
          case "keypress":
            if (Ls(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = hx;
            break;
          case "focusin":
            (y = "focus"), (g = Xc);
            break;
          case "focusout":
            (y = "blur"), (g = Xc);
            break;
          case "beforeblur":
          case "afterblur":
            g = Xc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Bm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ox;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Sx;
            break;
          case Yy:
          case Zy:
          case Jy:
            g = lx;
            break;
          case e1:
            g = wx;
            break;
          case "scroll":
            g = nx;
            break;
          case "wheel":
            g = xx;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ux;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Vm;
        }
        var S = (t & 4) !== 0,
          b = !S && e === "scroll",
          h = S ? (v !== null ? v + "Capture" : null) : v;
        S = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = rl(p, h)), w != null && S.push(cl(p, w, m)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < S.length &&
          ((v = new g(v, y, null, n, c)), d.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== rd &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ho(y) || y[Kr]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Ho(y) : null),
              y !== null &&
                ((b = si(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((S = Bm),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Vm),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (b = g == null ? v : Ii(g)),
            (m = y == null ? v : Ii(y)),
            (v = new S(w, p + "leave", g, n, c)),
            (v.target = b),
            (v.relatedTarget = m),
            (w = null),
            Ho(c) === u &&
              ((S = new S(h, p + "enter", y, n, c)),
              (S.target = m),
              (S.relatedTarget = b),
              (w = S)),
            (b = w),
            g && y)
          )
            t: {
              for (S = g, h = y, p = 0, m = S; m; m = mi(m)) p++;
              for (m = 0, w = h; w; w = mi(w)) m++;
              for (; 0 < p - m; ) (S = mi(S)), p--;
              for (; 0 < m - p; ) (h = mi(h)), m--;
              for (; p--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = mi(S)), (h = mi(h));
              }
              S = null;
            }
          else S = null;
          g !== null && eh(d, v, g, S, !1),
            y !== null && b !== null && eh(d, b, y, S, !0);
        }
      }
      e: {
        if (
          ((v = u ? Ii(u) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var C = Tx;
        else if (Km(v))
          if (Ky) C = Nx;
          else {
            C = _x;
            var E = Mx;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (C = Ax);
        if (C && (C = C(e, u))) {
          Uy(d, C, n, c);
          break e;
        }
        E && E(e, v, u),
          e === "focusout" &&
            (E = v._wrapperState) &&
            E.controlled &&
            v.type === "number" &&
            Zf(v, "number", v.value);
      }
      switch (((E = u ? Ii(u) : window), e)) {
        case "focusin":
          (Km(E) || E.contentEditable === "true") &&
            ((Ri = E), (cd = u), (Va = null));
          break;
        case "focusout":
          Va = cd = Ri = null;
          break;
        case "mousedown":
          fd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fd = !1), Ym(d, n, c);
          break;
        case "selectionchange":
          if (zx) break;
        case "keydown":
        case "keyup":
          Ym(d, n, c);
      }
      var x;
      if (gp)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Oi
          ? Vy(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Hy &&
          n.locale !== "ko" &&
          (Oi || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Oi && (x = By())
            : ((fo = c),
              (pp = "value" in fo ? fo.value : fo.textContent),
              (Oi = !0))),
        (E = au(u, R)),
        0 < E.length &&
          ((R = new Hm(R, e, null, n, c)),
          d.push({ event: R, listeners: E }),
          x ? (R.data = x) : ((x = Wy(n)), x !== null && (R.data = x)))),
        (x = Ox ? Rx(e, n) : Px(e, n)) &&
          ((u = au(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Hm("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = x)));
    }
    n1(d, t);
  });
}
function cl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function au(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = rl(e, n)),
      i != null && r.unshift(cl(e, i, o)),
      (i = rl(e, t)),
      i != null && r.push(cl(e, i, o))),
      (e = e.return);
  }
  return r;
}
function mi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eh(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = rl(n, i)), s != null && a.unshift(cl(n, s, l)))
        : o || ((s = rl(n, i)), s != null && a.push(cl(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Bx = /\r\n?/g,
  Hx = /\u0000|\uFFFD/g;
function th(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bx,
      `
`
    )
    .replace(Hx, "");
}
function vs(e, t, n) {
  if (((t = th(t)), th(e) !== t && n)) throw Error(Q(425));
}
function lu() {}
var dd = null,
  vd = null;
function pd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var md = typeof setTimeout == "function" ? setTimeout : void 0,
  Vx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  nh = typeof Promise == "function" ? Promise : void 0,
  Wx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof nh < "u"
      ? function (e) {
          return nh.resolve(null).then(e).catch(Ux);
        }
      : md;
function Ux(e) {
  setTimeout(function () {
    throw e;
  });
}
function rf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), al(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  al(t);
}
function bo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function rh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ua = Math.random().toString(36).slice(2),
  Ir = "__reactFiber$" + ua,
  fl = "__reactProps$" + ua,
  Kr = "__reactContainer$" + ua,
  hd = "__reactEvents$" + ua,
  Kx = "__reactListeners$" + ua,
  Gx = "__reactHandles$" + ua;
function Ho(e) {
  var t = e[Ir];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kr] || n[Ir])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rh(e); e !== null; ) {
          if ((n = e[Ir])) return n;
          e = rh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Dl(e) {
  return (
    (e = e[Ir] || e[Kr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Q(33));
}
function Yu(e) {
  return e[fl] || null;
}
var gd = [],
  $i = -1;
function $o(e) {
  return { current: e };
}
function gt(e) {
  0 > $i || ((e.current = gd[$i]), (gd[$i] = null), $i--);
}
function ft(e, t) {
  $i++, (gd[$i] = e.current), (e.current = t);
}
var Ro = {},
  fn = $o(Ro),
  Rn = $o(!1),
  Yo = Ro;
function Gi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ro;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Pn(e) {
  return (e = e.childContextTypes), e != null;
}
function su() {
  gt(Rn), gt(fn);
}
function oh(e, t, n) {
  if (fn.current !== Ro) throw Error(Q(168));
  ft(fn, t), ft(Rn, n);
}
function o1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(Q(108, MC(e) || "Unknown", o));
  return Et({}, n, r);
}
function uu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ro),
    (Yo = fn.current),
    ft(fn, e),
    ft(Rn, Rn.current),
    !0
  );
}
function ih(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Q(169));
  n
    ? ((e = o1(e, t, Yo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      gt(Rn),
      gt(fn),
      ft(fn, e))
    : gt(Rn),
    ft(Rn, n);
}
var Dr = null,
  Zu = !1,
  of = !1;
function i1(e) {
  Dr === null ? (Dr = [e]) : Dr.push(e);
}
function qx(e) {
  (Zu = !0), i1(e);
}
function To() {
  if (!of && Dr !== null) {
    of = !0;
    var e = 0,
      t = at;
    try {
      var n = Dr;
      for (at = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dr = null), (Zu = !1);
    } catch (o) {
      throw (Dr !== null && (Dr = Dr.slice(e + 1)), Ty(cp, To), o);
    } finally {
      (at = t), (of = !1);
    }
  }
  return null;
}
var Ti = [],
  Mi = 0,
  cu = null,
  fu = 0,
  Zn = [],
  Jn = 0,
  Zo = null,
  Br = 1,
  Hr = "";
function zo(e, t) {
  (Ti[Mi++] = fu), (Ti[Mi++] = cu), (cu = e), (fu = t);
}
function a1(e, t, n) {
  (Zn[Jn++] = Br), (Zn[Jn++] = Hr), (Zn[Jn++] = Zo), (Zo = e);
  var r = Br;
  e = Hr;
  var o = 32 - gr(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - gr(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Br = (1 << (32 - gr(t) + o)) | (n << o) | r),
      (Hr = i + e);
  } else (Br = (1 << i) | (n << o) | r), (Hr = e);
}
function Sp(e) {
  e.return !== null && (zo(e, 1), a1(e, 1, 0));
}
function bp(e) {
  for (; e === cu; )
    (cu = Ti[--Mi]), (Ti[Mi] = null), (fu = Ti[--Mi]), (Ti[Mi] = null);
  for (; e === Zo; )
    (Zo = Zn[--Jn]),
      (Zn[Jn] = null),
      (Hr = Zn[--Jn]),
      (Zn[Jn] = null),
      (Br = Zn[--Jn]),
      (Zn[Jn] = null);
}
var Vn = null,
  kn = null,
  St = !1,
  mr = null;
function l1(e, t) {
  var n = er(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ah(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Vn = e), (kn = bo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Vn = e), (kn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zo !== null ? { id: Br, overflow: Hr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = er(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Vn = e),
            (kn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sd(e) {
  if (St) {
    var t = kn;
    if (t) {
      var n = t;
      if (!ah(e, t)) {
        if (yd(e)) throw Error(Q(418));
        t = bo(n.nextSibling);
        var r = Vn;
        t && ah(e, t)
          ? l1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (St = !1), (Vn = e));
      }
    } else {
      if (yd(e)) throw Error(Q(418));
      (e.flags = (e.flags & -4097) | 2), (St = !1), (Vn = e);
    }
  }
}
function lh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Vn = e;
}
function ps(e) {
  if (e !== Vn) return !1;
  if (!St) return lh(e), (St = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !pd(e.type, e.memoizedProps))),
    t && (t = kn))
  ) {
    if (yd(e)) throw (s1(), Error(Q(418)));
    for (; t; ) l1(e, t), (t = bo(t.nextSibling));
  }
  if ((lh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kn = bo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      kn = null;
    }
  } else kn = Vn ? bo(e.stateNode.nextSibling) : null;
  return !0;
}
function s1() {
  for (var e = kn; e; ) e = bo(e.nextSibling);
}
function qi() {
  (kn = Vn = null), (St = !1);
}
function wp(e) {
  mr === null ? (mr = [e]) : mr.push(e);
}
var Xx = Zr.ReactCurrentBatchConfig;
function Oa(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Q(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(Q(284));
    if (!n._owner) throw Error(Q(290, e));
  }
  return e;
}
function ms(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Q(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sh(e) {
  var t = e._init;
  return t(e._payload);
}
function u1(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Eo(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = df(m, h.mode, w)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function s(h, p, m, w) {
    var C = m.type;
    return C === Ei
      ? c(h, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === lo &&
            sh(C) === p.type))
      ? ((w = o(p, m.props)), (w.ref = Oa(h, p, m)), (w.return = h), w)
      : ((w = Us(m.type, m.key, m.props, null, h.mode, w)),
        (w.ref = Oa(h, p, m)),
        (w.return = h),
        w);
  }
  function u(h, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = vf(m, h.mode, w)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, w, C) {
    return p === null || p.tag !== 7
      ? ((p = qo(m, h.mode, w, C)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = df("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case os:
          return (
            (m = Us(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Oa(h, null, p)),
            (m.return = h),
            m
          );
        case xi:
          return (p = vf(p, h.mode, m)), (p.return = h), p;
        case lo:
          var w = p._init;
          return d(h, w(p._payload), m);
      }
      if (Aa(p) || ba(p))
        return (p = qo(p, h.mode, m, null)), (p.return = h), p;
      ms(h, p);
    }
    return null;
  }
  function v(h, p, m, w) {
    var C = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(h, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case os:
          return m.key === C ? s(h, p, m, w) : null;
        case xi:
          return m.key === C ? u(h, p, m, w) : null;
        case lo:
          return (C = m._init), v(h, p, C(m._payload), w);
      }
      if (Aa(m) || ba(m)) return C !== null ? null : c(h, p, m, w, null);
      ms(h, m);
    }
    return null;
  }
  function g(h, p, m, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(m) || null), l(p, h, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case os:
          return (h = h.get(w.key === null ? m : w.key) || null), s(p, h, w, C);
        case xi:
          return (h = h.get(w.key === null ? m : w.key) || null), u(p, h, w, C);
        case lo:
          var E = w._init;
          return g(h, p, m, E(w._payload), C);
      }
      if (Aa(w) || ba(w)) return (h = h.get(m) || null), c(p, h, w, C, null);
      ms(p, w);
    }
    return null;
  }
  function y(h, p, m, w) {
    for (
      var C = null, E = null, x = p, R = (p = 0), P = null;
      x !== null && R < m.length;
      R++
    ) {
      x.index > R ? ((P = x), (x = null)) : (P = x.sibling);
      var _ = v(h, x, m[R], w);
      if (_ === null) {
        x === null && (x = P);
        break;
      }
      e && x && _.alternate === null && t(h, x),
        (p = i(_, p, R)),
        E === null ? (C = _) : (E.sibling = _),
        (E = _),
        (x = P);
    }
    if (R === m.length) return n(h, x), St && zo(h, R), C;
    if (x === null) {
      for (; R < m.length; R++)
        (x = d(h, m[R], w)),
          x !== null &&
            ((p = i(x, p, R)), E === null ? (C = x) : (E.sibling = x), (E = x));
      return St && zo(h, R), C;
    }
    for (x = r(h, x); R < m.length; R++)
      (P = g(x, h, R, m[R], w)),
        P !== null &&
          (e && P.alternate !== null && x.delete(P.key === null ? R : P.key),
          (p = i(P, p, R)),
          E === null ? (C = P) : (E.sibling = P),
          (E = P));
    return (
      e &&
        x.forEach(function (j) {
          return t(h, j);
        }),
      St && zo(h, R),
      C
    );
  }
  function S(h, p, m, w) {
    var C = ba(m);
    if (typeof C != "function") throw Error(Q(150));
    if (((m = C.call(m)), m == null)) throw Error(Q(151));
    for (
      var E = (C = null), x = p, R = (p = 0), P = null, _ = m.next();
      x !== null && !_.done;
      R++, _ = m.next()
    ) {
      x.index > R ? ((P = x), (x = null)) : (P = x.sibling);
      var j = v(h, x, _.value, w);
      if (j === null) {
        x === null && (x = P);
        break;
      }
      e && x && j.alternate === null && t(h, x),
        (p = i(j, p, R)),
        E === null ? (C = j) : (E.sibling = j),
        (E = j),
        (x = P);
    }
    if (_.done) return n(h, x), St && zo(h, R), C;
    if (x === null) {
      for (; !_.done; R++, _ = m.next())
        (_ = d(h, _.value, w)),
          _ !== null &&
            ((p = i(_, p, R)), E === null ? (C = _) : (E.sibling = _), (E = _));
      return St && zo(h, R), C;
    }
    for (x = r(h, x); !_.done; R++, _ = m.next())
      (_ = g(x, h, R, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? R : _.key),
          (p = i(_, p, R)),
          E === null ? (C = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        x.forEach(function (L) {
          return t(h, L);
        }),
      St && zo(h, R),
      C
    );
  }
  function b(h, p, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Ei &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case os:
          e: {
            for (var C = m.key, E = p; E !== null; ) {
              if (E.key === C) {
                if (((C = m.type), C === Ei)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (p = o(E, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === lo &&
                    sh(C) === E.type)
                ) {
                  n(h, E.sibling),
                    (p = o(E, m.props)),
                    (p.ref = Oa(h, E, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            m.type === Ei
              ? ((p = qo(m.props.children, h.mode, w, m.key)),
                (p.return = h),
                (h = p))
              : ((w = Us(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = Oa(h, p, m)),
                (w.return = h),
                (h = w));
          }
          return a(h);
        case xi:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = vf(m, h.mode, w)), (p.return = h), (h = p);
          }
          return a(h);
        case lo:
          return (E = m._init), b(h, p, E(m._payload), w);
      }
      if (Aa(m)) return y(h, p, m, w);
      if (ba(m)) return S(h, p, m, w);
      ms(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = df(m, h.mode, w)), (p.return = h), (h = p)),
        a(h))
      : n(h, p);
  }
  return b;
}
var Xi = u1(!0),
  c1 = u1(!1),
  du = $o(null),
  vu = null,
  _i = null,
  Cp = null;
function xp() {
  Cp = _i = vu = null;
}
function Ep(e) {
  var t = du.current;
  gt(du), (e._currentValue = t);
}
function bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Hi(e, t) {
  (vu = e),
    (Cp = _i = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (On = !0), (e.firstContext = null));
}
function nr(e) {
  var t = e._currentValue;
  if (Cp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _i === null)) {
      if (vu === null) throw Error(Q(308));
      (_i = e), (vu.dependencies = { lanes: 0, firstContext: e });
    } else _i = _i.next = e;
  return t;
}
var Vo = null;
function Op(e) {
  Vo === null ? (Vo = [e]) : Vo.push(e);
}
function f1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Op(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gr(e, r)
  );
}
function Gr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var so = !1;
function Rp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function d1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), tt & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Op(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gr(e, n)
  );
}
function Ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fp(e, n);
  }
}
function uh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function pu(e, t, n, r) {
  var o = e.updateQueue;
  so = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var v = l.lane,
        g = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            S = l;
          switch (((v = t), (g = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == "function")) {
                d = y.call(g, d, v);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (v = typeof y == "function" ? y.call(g, d, v) : y),
                v == null)
              )
                break e;
              d = Et({}, d, v);
              break e;
            case 2:
              so = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [l]) : v.push(l));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = d)) : (c = c.next = g),
          (a |= v);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (ei |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function ch(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(Q(191, o));
        o.call(r);
      }
    }
}
var kl = {},
  Mr = $o(kl),
  dl = $o(kl),
  vl = $o(kl);
function Wo(e) {
  if (e === kl) throw Error(Q(174));
  return e;
}
function Pp(e, t) {
  switch ((ft(vl, t), ft(dl, e), ft(Mr, kl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ed(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ed(t, e));
  }
  gt(Mr), ft(Mr, t);
}
function Qi() {
  gt(Mr), gt(dl), gt(vl);
}
function v1(e) {
  Wo(vl.current);
  var t = Wo(Mr.current),
    n = ed(t, e.type);
  t !== n && (ft(dl, e), ft(Mr, n));
}
function Ip(e) {
  dl.current === e && (gt(Mr), gt(dl));
}
var Ct = $o(0);
function mu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var af = [];
function $p() {
  for (var e = 0; e < af.length; e++)
    af[e]._workInProgressVersionPrimary = null;
  af.length = 0;
}
var ks = Zr.ReactCurrentDispatcher,
  lf = Zr.ReactCurrentBatchConfig,
  Jo = 0,
  xt = null,
  Ht = null,
  qt = null,
  hu = !1,
  Wa = !1,
  pl = 0,
  Qx = 0;
function sn() {
  throw Error(Q(321));
}
function Tp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Cr(e[n], t[n])) return !1;
  return !0;
}
function Mp(e, t, n, r, o, i) {
  if (
    ((Jo = i),
    (xt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ks.current = e === null || e.memoizedState === null ? eE : tE),
    (e = n(r, o)),
    Wa)
  ) {
    i = 0;
    do {
      if (((Wa = !1), (pl = 0), 25 <= i)) throw Error(Q(301));
      (i += 1),
        (qt = Ht = null),
        (t.updateQueue = null),
        (ks.current = nE),
        (e = n(r, o));
    } while (Wa);
  }
  if (
    ((ks.current = gu),
    (t = Ht !== null && Ht.next !== null),
    (Jo = 0),
    (qt = Ht = xt = null),
    (hu = !1),
    t)
  )
    throw Error(Q(300));
  return e;
}
function _p() {
  var e = pl !== 0;
  return (pl = 0), e;
}
function Pr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return qt === null ? (xt.memoizedState = qt = e) : (qt = qt.next = e), qt;
}
function rr() {
  if (Ht === null) {
    var e = xt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ht.next;
  var t = qt === null ? xt.memoizedState : qt.next;
  if (t !== null) (qt = t), (Ht = e);
  else {
    if (e === null) throw Error(Q(310));
    (Ht = e),
      (e = {
        memoizedState: Ht.memoizedState,
        baseState: Ht.baseState,
        baseQueue: Ht.baseQueue,
        queue: Ht.queue,
        next: null,
      }),
      qt === null ? (xt.memoizedState = qt = e) : (qt = qt.next = e);
  }
  return qt;
}
function ml(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sf(e) {
  var t = rr(),
    n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = Ht,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((Jo & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (xt.lanes |= c),
          (ei |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      Cr(r, t.memoizedState) || (On = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (xt.lanes |= i), (ei |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uf(e) {
  var t = rr(),
    n = t.queue;
  if (n === null) throw Error(Q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Cr(i, t.memoizedState) || (On = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function p1() {}
function m1(e, t) {
  var n = xt,
    r = rr(),
    o = t(),
    i = !Cr(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (On = !0)),
    (r = r.queue),
    Ap(y1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (qt !== null && qt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hl(9, g1.bind(null, n, r, o, t), void 0, null),
      Qt === null)
    )
      throw Error(Q(349));
    Jo & 30 || h1(n, t, o);
  }
  return o;
}
function h1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function g1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), S1(t) && b1(e);
}
function y1(e, t, n) {
  return n(function () {
    S1(t) && b1(e);
  });
}
function S1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Cr(e, n);
  } catch {
    return !0;
  }
}
function b1(e) {
  var t = Gr(e, 1);
  t !== null && yr(t, e, 1, -1);
}
function fh(e) {
  var t = Pr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jx.bind(null, xt, e)),
    [t.memoizedState, e]
  );
}
function hl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function w1() {
  return rr().memoizedState;
}
function Bs(e, t, n, r) {
  var o = Pr();
  (xt.flags |= e),
    (o.memoizedState = hl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ju(e, t, n, r) {
  var o = rr();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ht !== null) {
    var a = Ht.memoizedState;
    if (((i = a.destroy), r !== null && Tp(r, a.deps))) {
      o.memoizedState = hl(t, n, i, r);
      return;
    }
  }
  (xt.flags |= e), (o.memoizedState = hl(1 | t, n, i, r));
}
function dh(e, t) {
  return Bs(8390656, 8, e, t);
}
function Ap(e, t) {
  return Ju(2048, 8, e, t);
}
function C1(e, t) {
  return Ju(4, 2, e, t);
}
function x1(e, t) {
  return Ju(4, 4, e, t);
}
function E1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function O1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ju(4, 4, E1.bind(null, t, e), n)
  );
}
function Np() {}
function R1(e, t) {
  var n = rr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function P1(e, t) {
  var n = rr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Tp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function I1(e, t, n) {
  return Jo & 21
    ? (Cr(n, t) || ((n = Ay()), (xt.lanes |= n), (ei |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (On = !0)), (e.memoizedState = n));
}
function Yx(e, t) {
  var n = at;
  (at = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = lf.transition;
  lf.transition = {};
  try {
    e(!1), t();
  } finally {
    (at = n), (lf.transition = r);
  }
}
function $1() {
  return rr().memoizedState;
}
function Zx(e, t, n) {
  var r = xo(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    T1(e))
  )
    M1(t, n);
  else if (((n = f1(e, t, n, r)), n !== null)) {
    var o = yn();
    yr(n, e, r, o), _1(n, t, r);
  }
}
function Jx(e, t, n) {
  var r = xo(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (T1(e)) M1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Cr(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Op(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = f1(e, t, o, r)),
      n !== null && ((o = yn()), yr(n, e, r, o), _1(n, t, r));
  }
}
function T1(e) {
  var t = e.alternate;
  return e === xt || (t !== null && t === xt);
}
function M1(e, t) {
  Wa = hu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fp(e, n);
  }
}
var gu = {
    readContext: nr,
    useCallback: sn,
    useContext: sn,
    useEffect: sn,
    useImperativeHandle: sn,
    useInsertionEffect: sn,
    useLayoutEffect: sn,
    useMemo: sn,
    useReducer: sn,
    useRef: sn,
    useState: sn,
    useDebugValue: sn,
    useDeferredValue: sn,
    useTransition: sn,
    useMutableSource: sn,
    useSyncExternalStore: sn,
    useId: sn,
    unstable_isNewReconciler: !1,
  },
  eE = {
    readContext: nr,
    useCallback: function (e, t) {
      return (Pr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nr,
    useEffect: dh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bs(4194308, 4, E1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zx.bind(null, xt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fh,
    useDebugValue: Np,
    useDeferredValue: function (e) {
      return (Pr().memoizedState = e);
    },
    useTransition: function () {
      var e = fh(!1),
        t = e[0];
      return (e = Yx.bind(null, e[1])), (Pr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xt,
        o = Pr();
      if (St) {
        if (n === void 0) throw Error(Q(407));
        n = n();
      } else {
        if (((n = t()), Qt === null)) throw Error(Q(349));
        Jo & 30 || h1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        dh(y1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        hl(9, g1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pr(),
        t = Qt.identifierPrefix;
      if (St) {
        var n = Hr,
          r = Br;
        (n = (r & ~(1 << (32 - gr(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tE = {
    readContext: nr,
    useCallback: R1,
    useContext: nr,
    useEffect: Ap,
    useImperativeHandle: O1,
    useInsertionEffect: C1,
    useLayoutEffect: x1,
    useMemo: P1,
    useReducer: sf,
    useRef: w1,
    useState: function () {
      return sf(ml);
    },
    useDebugValue: Np,
    useDeferredValue: function (e) {
      var t = rr();
      return I1(t, Ht.memoizedState, e);
    },
    useTransition: function () {
      var e = sf(ml)[0],
        t = rr().memoizedState;
      return [e, t];
    },
    useMutableSource: p1,
    useSyncExternalStore: m1,
    useId: $1,
    unstable_isNewReconciler: !1,
  },
  nE = {
    readContext: nr,
    useCallback: R1,
    useContext: nr,
    useEffect: Ap,
    useImperativeHandle: O1,
    useInsertionEffect: C1,
    useLayoutEffect: x1,
    useMemo: P1,
    useReducer: uf,
    useRef: w1,
    useState: function () {
      return uf(ml);
    },
    useDebugValue: Np,
    useDeferredValue: function (e) {
      var t = rr();
      return Ht === null ? (t.memoizedState = e) : I1(t, Ht.memoizedState, e);
    },
    useTransition: function () {
      var e = uf(ml)[0],
        t = rr().memoizedState;
      return [e, t];
    },
    useMutableSource: p1,
    useSyncExternalStore: m1,
    useId: $1,
    unstable_isNewReconciler: !1,
  };
function fr(e, t) {
  if (e && e.defaultProps) {
    (t = Et({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Et({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ec = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? si(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = yn(),
      o = xo(e),
      i = Vr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wo(e, i, o)),
      t !== null && (yr(t, e, o, r), Ds(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = yn(),
      o = xo(e),
      i = Vr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wo(e, i, o)),
      t !== null && (yr(t, e, o, r), Ds(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = yn(),
      r = xo(e),
      o = Vr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = wo(e, o, r)),
      t !== null && (yr(t, e, r, n), Ds(t, e, r));
  },
};
function vh(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sl(n, r) || !sl(o, i)
      : !0
  );
}
function A1(e, t, n) {
  var r = !1,
    o = Ro,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nr(i))
      : ((o = Pn(t) ? Yo : fn.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gi(e, o) : Ro)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ec),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ph(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ec.enqueueReplaceState(t, t.state, null);
}
function Cd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Rp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = nr(i))
    : ((i = Pn(t) ? Yo : fn.current), (o.context = Gi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (wd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ec.enqueueReplaceState(o, o.state, null),
      pu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += TC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function cf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rE = typeof WeakMap == "function" ? WeakMap : Map;
function N1(e, t, n) {
  (n = Vr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Su || ((Su = !0), (Ad = r)), xd(e, t);
    }),
    n
  );
}
function F1(e, t, n) {
  (n = Vr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        xd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        xd(e, t),
          typeof r != "function" &&
            (Co === null ? (Co = new Set([this])) : Co.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function mh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = gE.bind(null, e, t, n)), t.then(e, e));
}
function hh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vr(-1, 1)), (t.tag = 2), wo(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var oE = Zr.ReactCurrentOwner,
  On = !1;
function gn(e, t, n, r) {
  t.child = e === null ? c1(t, null, n, r) : Xi(t, e.child, n, r);
}
function yh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Hi(t, o),
    (r = Mp(e, t, n, r, i, o)),
    (n = _p()),
    e !== null && !On
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        qr(e, t, o))
      : (St && n && Sp(t), (t.flags |= 1), gn(e, t, r, o), t.child)
  );
}
function Sh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hp(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), j1(e, t, i, r, o))
      : ((e = Us(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sl), n(a, r) && e.ref === t.ref)
    )
      return qr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Eo(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function j1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (sl(i, r) && e.ref === t.ref)
      if (((On = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (On = !0);
      else return (t.lanes = e.lanes), qr(e, t, o);
  }
  return Ed(e, t, n, r, o);
}
function z1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ft(Ni, Dn),
        (Dn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ft(Ni, Dn),
          (Dn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ft(Ni, Dn),
        (Dn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ft(Ni, Dn),
      (Dn |= r);
  return gn(e, t, o, n), t.child;
}
function L1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ed(e, t, n, r, o) {
  var i = Pn(n) ? Yo : fn.current;
  return (
    (i = Gi(t, i)),
    Hi(t, o),
    (n = Mp(e, t, n, r, i, o)),
    (r = _p()),
    e !== null && !On
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        qr(e, t, o))
      : (St && r && Sp(t), (t.flags |= 1), gn(e, t, n, o), t.child)
  );
}
function bh(e, t, n, r, o) {
  if (Pn(n)) {
    var i = !0;
    uu(t);
  } else i = !1;
  if ((Hi(t, o), t.stateNode === null))
    Hs(e, t), A1(t, n, r), Cd(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nr(u))
      : ((u = Pn(n) ? Yo : fn.current), (u = Gi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && ph(t, a, r, u)),
      (so = !1);
    var v = t.memoizedState;
    (a.state = v),
      pu(t, r, a, o),
      (s = t.memoizedState),
      l !== r || v !== s || Rn.current || so
        ? (typeof c == "function" && (wd(t, n, c, r), (s = t.memoizedState)),
          (l = so || vh(t, n, l, r, v, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      d1(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : fr(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (v = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = nr(s))
        : ((s = Pn(n) ? Yo : fn.current), (s = Gi(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || v !== s) && ph(t, a, r, s)),
      (so = !1),
      (v = t.memoizedState),
      (a.state = v),
      pu(t, r, a, o);
    var y = t.memoizedState;
    l !== d || v !== y || Rn.current || so
      ? (typeof g == "function" && (wd(t, n, g, r), (y = t.memoizedState)),
        (u = so || vh(t, n, u, r, v, y, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Od(e, t, n, r, i, o);
}
function Od(e, t, n, r, o, i) {
  L1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && ih(t, n, !1), qr(e, t, i);
  (r = t.stateNode), (oE.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Xi(t, e.child, null, i)), (t.child = Xi(t, null, l, i)))
      : gn(e, t, l, i),
    (t.memoizedState = r.state),
    o && ih(t, n, !0),
    t.child
  );
}
function D1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oh(e, t.context, !1),
    Pp(e, t.containerInfo);
}
function wh(e, t, n, r, o) {
  return qi(), wp(o), (t.flags |= 256), gn(e, t, n, r), t.child;
}
var Rd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function k1(e, t, n) {
  var r = t.pendingProps,
    o = Ct.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ft(Ct, o & 1),
    e === null)
  )
    return (
      Sd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = rc(a, r, 0, null)),
              (e = qo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pd(n)),
              (t.memoizedState = Rd),
              e)
            : Fp(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return iE(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Eo(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Eo(l, i)) : ((i = qo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Pd(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Eo(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fp(e, t) {
  return (
    (t = rc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hs(e, t, n, r) {
  return (
    r !== null && wp(r),
    Xi(t, e.child, null, n),
    (e = Fp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function iE(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = cf(Error(Q(422)))), hs(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = qo(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xi(t, e.child, null, a),
        (t.child.memoizedState = Pd(a)),
        (t.memoizedState = Rd),
        i);
  if (!(t.mode & 1)) return hs(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(Q(419))), (r = cf(i, r, void 0)), hs(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), On || l)) {
    if (((r = Qt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gr(e, o), yr(r, e, o, -1));
    }
    return Bp(), (r = cf(Error(Q(421)))), hs(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (kn = bo(o.nextSibling)),
      (Vn = t),
      (St = !0),
      (mr = null),
      e !== null &&
        ((Zn[Jn++] = Br),
        (Zn[Jn++] = Hr),
        (Zn[Jn++] = Zo),
        (Br = e.id),
        (Hr = e.overflow),
        (Zo = t)),
      (t = Fp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ch(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bd(e.return, t, n);
}
function ff(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function B1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((gn(e, t, r.children, n), (r = Ct.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ch(e, n, t);
        else if (e.tag === 19) Ch(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ft(Ct, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && mu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ff(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && mu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ff(t, !0, n, null, i);
        break;
      case "together":
        ff(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function qr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ei |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Q(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Eo(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Eo(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function aE(e, t, n) {
  switch (t.tag) {
    case 3:
      D1(t), qi();
      break;
    case 5:
      v1(t);
      break;
    case 1:
      Pn(t.type) && uu(t);
      break;
    case 4:
      Pp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ft(du, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ft(Ct, Ct.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? k1(e, t, n)
          : (ft(Ct, Ct.current & 1),
            (e = qr(e, t, n)),
            e !== null ? e.sibling : null);
      ft(Ct, Ct.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return B1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ft(Ct, Ct.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), z1(e, t, n);
  }
  return qr(e, t, n);
}
var H1, Id, V1, W1;
H1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Id = function () {};
V1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Wo(Mr.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Qf(e, o)), (r = Qf(e, r)), (i = []);
        break;
      case "select":
        (o = Et({}, o, { value: void 0 })),
          (r = Et({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Jf(e, o)), (r = Jf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = lu);
    }
    td(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (tl.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (tl.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ht("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
W1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ra(e, t) {
  if (!St)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function un(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lE(e, t, n) {
  var r = t.pendingProps;
  switch ((bp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return un(t), null;
    case 1:
      return Pn(t.type) && su(), un(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qi(),
        gt(Rn),
        gt(fn),
        $p(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ps(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mr !== null && (jd(mr), (mr = null)))),
        Id(e, t),
        un(t),
        null
      );
    case 5:
      Ip(t);
      var o = Wo(vl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        V1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Q(166));
          return un(t), null;
        }
        if (((e = Wo(Mr.current)), ps(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ir] = t), (r[fl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ht("cancel", r), ht("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ht("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Fa.length; o++) ht(Fa[o], r);
              break;
            case "source":
              ht("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ht("error", r), ht("load", r);
              break;
            case "details":
              ht("toggle", r);
              break;
            case "input":
              Mm(r, i), ht("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ht("invalid", r);
              break;
            case "textarea":
              Am(r, i), ht("invalid", r);
          }
          td(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      vs(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      vs(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : tl.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  ht("scroll", r);
            }
          switch (n) {
            case "input":
              is(r), _m(r, i, !0);
              break;
            case "textarea":
              is(r), Nm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = lu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Ir] = t),
            (e[fl] = r),
            H1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = nd(n, r)), n)) {
              case "dialog":
                ht("cancel", e), ht("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ht("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Fa.length; o++) ht(Fa[o], e);
                o = r;
                break;
              case "source":
                ht("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ht("error", e), ht("load", e), (o = r);
                break;
              case "details":
                ht("toggle", e), (o = r);
                break;
              case "input":
                Mm(e, r), (o = Qf(e, r)), ht("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Et({}, r, { value: void 0 })),
                  ht("invalid", e);
                break;
              case "textarea":
                Am(e, r), (o = Jf(e, r)), ht("invalid", e);
                break;
              default:
                o = r;
            }
            td(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? wy(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Sy(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && nl(e, s)
                    : typeof s == "number" && nl(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (tl.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ht("scroll", e)
                      : s != null && ip(e, i, s, a));
              }
            switch (n) {
              case "input":
                is(e), _m(e, r, !1);
                break;
              case "textarea":
                is(e), Nm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Oo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Li(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Li(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = lu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return un(t), null;
    case 6:
      if (e && t.stateNode != null) W1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Q(166));
        if (((n = Wo(vl.current)), Wo(Mr.current), ps(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ir] = t),
            (i = r.nodeValue !== n) && ((e = Vn), e !== null))
          )
            switch (e.tag) {
              case 3:
                vs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ir] = t),
            (t.stateNode = r);
      }
      return un(t), null;
    case 13:
      if (
        (gt(Ct),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (St && kn !== null && t.mode & 1 && !(t.flags & 128))
          s1(), qi(), (t.flags |= 98560), (i = !1);
        else if (((i = ps(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(Q(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(Q(317));
            i[Ir] = t;
          } else
            qi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          un(t), (i = !1);
        } else mr !== null && (jd(mr), (mr = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ct.current & 1 ? Vt === 0 && (Vt = 3) : Bp())),
          t.updateQueue !== null && (t.flags |= 4),
          un(t),
          null);
    case 4:
      return (
        Qi(), Id(e, t), e === null && ul(t.stateNode.containerInfo), un(t), null
      );
    case 10:
      return Ep(t.type._context), un(t), null;
    case 17:
      return Pn(t.type) && su(), un(t), null;
    case 19:
      if ((gt(Ct), (i = t.memoizedState), i === null)) return un(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Ra(i, !1);
        else {
          if (Vt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = mu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ra(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ft(Ct, (Ct.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            _t() > Zi &&
            ((t.flags |= 128), (r = !0), Ra(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ra(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !St)
            )
              return un(t), null;
          } else
            2 * _t() - i.renderingStartTime > Zi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ra(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = _t()),
          (t.sibling = null),
          (n = Ct.current),
          ft(Ct, r ? (n & 1) | 2 : n & 1),
          t)
        : (un(t), null);
    case 22:
    case 23:
      return (
        kp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Dn & 1073741824 && (un(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : un(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Q(156, t.tag));
}
function sE(e, t) {
  switch ((bp(t), t.tag)) {
    case 1:
      return (
        Pn(t.type) && su(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qi(),
        gt(Rn),
        gt(fn),
        $p(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ip(t), null;
    case 13:
      if (
        (gt(Ct), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Q(340));
        qi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return gt(Ct), null;
    case 4:
      return Qi(), null;
    case 10:
      return Ep(t.type._context), null;
    case 22:
    case 23:
      return kp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gs = !1,
  cn = !1,
  uE = typeof WeakSet == "function" ? WeakSet : Set,
  pe = null;
function Ai(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $t(e, t, r);
      }
    else n.current = null;
}
function $d(e, t, n) {
  try {
    n();
  } catch (r) {
    $t(e, t, r);
  }
}
var xh = !1;
function cE(e, t) {
  if (((dd = ou), (e = Xy()), yp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (v = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++u === o && (l = a),
                v === i && ++c === r && (s = a),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = g;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    vd = { focusedElem: e, selectionRange: n }, ou = !1, pe = t;
    pe !== null;

  )
    if (((t = pe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (pe = e);
    else
      for (; pe !== null; ) {
        t = pe;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    b = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : fr(t.type, S),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Q(163));
            }
        } catch (w) {
          $t(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (pe = e);
          break;
        }
        pe = t.return;
      }
  return (y = xh), (xh = !1), y;
}
function Ua(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && $d(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function tc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Td(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function U1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), U1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ir], delete t[fl], delete t[hd], delete t[Kx], delete t[Gx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function K1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || K1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Md(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = lu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Md(e, t, n), e = e.sibling; e !== null; ) Md(e, t, n), (e = e.sibling);
}
function _d(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_d(e, t, n), e = e.sibling; e !== null; ) _d(e, t, n), (e = e.sibling);
}
var en = null,
  dr = !1;
function oo(e, t, n) {
  for (n = n.child; n !== null; ) G1(e, t, n), (n = n.sibling);
}
function G1(e, t, n) {
  if (Tr && typeof Tr.onCommitFiberUnmount == "function")
    try {
      Tr.onCommitFiberUnmount(Gu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      cn || Ai(n, t);
    case 6:
      var r = en,
        o = dr;
      (en = null),
        oo(e, t, n),
        (en = r),
        (dr = o),
        en !== null &&
          (dr
            ? ((e = en),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : en.removeChild(n.stateNode));
      break;
    case 18:
      en !== null &&
        (dr
          ? ((e = en),
            (n = n.stateNode),
            e.nodeType === 8
              ? rf(e.parentNode, n)
              : e.nodeType === 1 && rf(e, n),
            al(e))
          : rf(en, n.stateNode));
      break;
    case 4:
      (r = en),
        (o = dr),
        (en = n.stateNode.containerInfo),
        (dr = !0),
        oo(e, t, n),
        (en = r),
        (dr = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !cn &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && $d(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      oo(e, t, n);
      break;
    case 1:
      if (
        !cn &&
        (Ai(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          $t(n, t, l);
        }
      oo(e, t, n);
      break;
    case 21:
      oo(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((cn = (r = cn) || n.memoizedState !== null), oo(e, t, n), (cn = r))
        : oo(e, t, n);
      break;
    default:
      oo(e, t, n);
  }
}
function Oh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uE()),
      t.forEach(function (r) {
        var o = SE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function sr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (en = l.stateNode), (dr = !1);
              break e;
            case 3:
              (en = l.stateNode.containerInfo), (dr = !0);
              break e;
            case 4:
              (en = l.stateNode.containerInfo), (dr = !0);
              break e;
          }
          l = l.return;
        }
        if (en === null) throw Error(Q(160));
        G1(i, a, o), (en = null), (dr = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        $t(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) q1(t, e), (t = t.sibling);
}
function q1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((sr(t, e), Rr(e), r & 4)) {
        try {
          Ua(3, e, e.return), tc(3, e);
        } catch (S) {
          $t(e, e.return, S);
        }
        try {
          Ua(5, e, e.return);
        } catch (S) {
          $t(e, e.return, S);
        }
      }
      break;
    case 1:
      sr(t, e), Rr(e), r & 512 && n !== null && Ai(n, n.return);
      break;
    case 5:
      if (
        (sr(t, e),
        Rr(e),
        r & 512 && n !== null && Ai(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          nl(o, "");
        } catch (S) {
          $t(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && hy(o, i),
              nd(l, a);
            var u = nd(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? wy(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Sy(o, d)
                : c === "children"
                ? nl(o, d)
                : ip(o, c, d, u);
            }
            switch (l) {
              case "input":
                Yf(o, i);
                break;
              case "textarea":
                gy(o, i);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Li(o, !!i.multiple, g, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Li(o, !!i.multiple, i.defaultValue, !0)
                      : Li(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[fl] = i;
          } catch (S) {
            $t(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((sr(t, e), Rr(e), r & 4)) {
        if (e.stateNode === null) throw Error(Q(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (S) {
          $t(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (sr(t, e), Rr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          al(t.containerInfo);
        } catch (S) {
          $t(e, e.return, S);
        }
      break;
    case 4:
      sr(t, e), Rr(e);
      break;
    case 13:
      sr(t, e),
        Rr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Lp = _t())),
        r & 4 && Oh(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((cn = (u = cn) || c), sr(t, e), (cn = u)) : sr(t, e),
        Rr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (pe = e, c = e.child; c !== null; ) {
            for (d = pe = c; pe !== null; ) {
              switch (((v = pe), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ua(4, v, v.return);
                  break;
                case 1:
                  Ai(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      $t(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ai(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Ph(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (pe = g)) : Ph(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = by("display", a)));
              } catch (S) {
                $t(e, e.return, S);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (S) {
                $t(e, e.return, S);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      sr(t, e), Rr(e), r & 4 && Oh(e);
      break;
    case 21:
      break;
    default:
      sr(t, e), Rr(e);
  }
}
function Rr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (K1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Q(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (nl(o, ""), (r.flags &= -33));
          var i = Eh(e);
          _d(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Eh(e);
          Md(e, l, a);
          break;
        default:
          throw Error(Q(161));
      }
    } catch (s) {
      $t(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fE(e, t, n) {
  (pe = e), X1(e);
}
function X1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; pe !== null; ) {
    var o = pe,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || gs;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || cn;
        l = gs;
        var u = cn;
        if (((gs = a), (cn = s) && !u))
          for (pe = o; pe !== null; )
            (a = pe),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Ih(o)
                : s !== null
                ? ((s.return = a), (pe = s))
                : Ih(o);
        for (; i !== null; ) (pe = i), X1(i), (i = i.sibling);
        (pe = o), (gs = l), (cn = u);
      }
      Rh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (pe = i)) : Rh(e);
  }
}
function Rh(e) {
  for (; pe !== null; ) {
    var t = pe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              cn || tc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !cn)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : fr(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ch(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ch(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && al(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(Q(163));
          }
        cn || (t.flags & 512 && Td(t));
      } catch (v) {
        $t(t, t.return, v);
      }
    }
    if (t === e) {
      pe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (pe = n);
      break;
    }
    pe = t.return;
  }
}
function Ph(e) {
  for (; pe !== null; ) {
    var t = pe;
    if (t === e) {
      pe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (pe = n);
      break;
    }
    pe = t.return;
  }
}
function Ih(e) {
  for (; pe !== null; ) {
    var t = pe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tc(4, t);
          } catch (s) {
            $t(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              $t(t, o, s);
            }
          }
          var i = t.return;
          try {
            Td(t);
          } catch (s) {
            $t(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Td(t);
          } catch (s) {
            $t(t, a, s);
          }
      }
    } catch (s) {
      $t(t, t.return, s);
    }
    if (t === e) {
      pe = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (pe = l);
      break;
    }
    pe = t.return;
  }
}
var dE = Math.ceil,
  yu = Zr.ReactCurrentDispatcher,
  jp = Zr.ReactCurrentOwner,
  tr = Zr.ReactCurrentBatchConfig,
  tt = 0,
  Qt = null,
  Lt = null,
  nn = 0,
  Dn = 0,
  Ni = $o(0),
  Vt = 0,
  gl = null,
  ei = 0,
  nc = 0,
  zp = 0,
  Ka = null,
  En = null,
  Lp = 0,
  Zi = 1 / 0,
  Lr = null,
  Su = !1,
  Ad = null,
  Co = null,
  ys = !1,
  vo = null,
  bu = 0,
  Ga = 0,
  Nd = null,
  Vs = -1,
  Ws = 0;
function yn() {
  return tt & 6 ? _t() : Vs !== -1 ? Vs : (Vs = _t());
}
function xo(e) {
  return e.mode & 1
    ? tt & 2 && nn !== 0
      ? nn & -nn
      : Xx.transition !== null
      ? (Ws === 0 && (Ws = Ay()), Ws)
      : ((e = at),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ky(e.type))),
        e)
    : 1;
}
function yr(e, t, n, r) {
  if (50 < Ga) throw ((Ga = 0), (Nd = null), Error(Q(185)));
  zl(e, n, r),
    (!(tt & 2) || e !== Qt) &&
      (e === Qt && (!(tt & 2) && (nc |= n), Vt === 4 && co(e, nn)),
      In(e, r),
      n === 1 && tt === 0 && !(t.mode & 1) && ((Zi = _t() + 500), Zu && To()));
}
function In(e, t) {
  var n = e.callbackNode;
  XC(e, t);
  var r = ru(e, e === Qt ? nn : 0);
  if (r === 0)
    n !== null && zm(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && zm(n), t === 1))
      e.tag === 0 ? qx($h.bind(null, e)) : i1($h.bind(null, e)),
        Wx(function () {
          !(tt & 6) && To();
        }),
        (n = null);
    else {
      switch (Ny(r)) {
        case 1:
          n = cp;
          break;
        case 4:
          n = My;
          break;
        case 16:
          n = nu;
          break;
        case 536870912:
          n = _y;
          break;
        default:
          n = nu;
      }
      n = rS(n, Q1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Q1(e, t) {
  if (((Vs = -1), (Ws = 0), tt & 6)) throw Error(Q(327));
  var n = e.callbackNode;
  if (Vi() && e.callbackNode !== n) return null;
  var r = ru(e, e === Qt ? nn : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wu(e, r);
  else {
    t = r;
    var o = tt;
    tt |= 2;
    var i = Z1();
    (Qt !== e || nn !== t) && ((Lr = null), (Zi = _t() + 500), Go(e, t));
    do
      try {
        mE();
        break;
      } catch (l) {
        Y1(e, l);
      }
    while (!0);
    xp(),
      (yu.current = i),
      (tt = o),
      Lt !== null ? (t = 0) : ((Qt = null), (nn = 0), (t = Vt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ld(e)), o !== 0 && ((r = o), (t = Fd(e, o)))), t === 1)
    )
      throw ((n = gl), Go(e, 0), co(e, r), In(e, _t()), n);
    if (t === 6) co(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !vE(o) &&
          ((t = wu(e, r)),
          t === 2 && ((i = ld(e)), i !== 0 && ((r = i), (t = Fd(e, i)))),
          t === 1))
      )
        throw ((n = gl), Go(e, 0), co(e, r), In(e, _t()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(Q(345));
        case 2:
          Lo(e, En, Lr);
          break;
        case 3:
          if (
            (co(e, r), (r & 130023424) === r && ((t = Lp + 500 - _t()), 10 < t))
          ) {
            if (ru(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              yn(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = md(Lo.bind(null, e, En, Lr), t);
            break;
          }
          Lo(e, En, Lr);
          break;
        case 4:
          if ((co(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - gr(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = _t() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * dE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = md(Lo.bind(null, e, En, Lr), r);
            break;
          }
          Lo(e, En, Lr);
          break;
        case 5:
          Lo(e, En, Lr);
          break;
        default:
          throw Error(Q(329));
      }
    }
  }
  return In(e, _t()), e.callbackNode === n ? Q1.bind(null, e) : null;
}
function Fd(e, t) {
  var n = Ka;
  return (
    e.current.memoizedState.isDehydrated && (Go(e, t).flags |= 256),
    (e = wu(e, t)),
    e !== 2 && ((t = En), (En = n), t !== null && jd(t)),
    e
  );
}
function jd(e) {
  En === null ? (En = e) : En.push.apply(En, e);
}
function vE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Cr(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function co(e, t) {
  for (
    t &= ~zp,
      t &= ~nc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gr(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $h(e) {
  if (tt & 6) throw Error(Q(327));
  Vi();
  var t = ru(e, 0);
  if (!(t & 1)) return In(e, _t()), null;
  var n = wu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ld(e);
    r !== 0 && ((t = r), (n = Fd(e, r)));
  }
  if (n === 1) throw ((n = gl), Go(e, 0), co(e, t), In(e, _t()), n);
  if (n === 6) throw Error(Q(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lo(e, En, Lr),
    In(e, _t()),
    null
  );
}
function Dp(e, t) {
  var n = tt;
  tt |= 1;
  try {
    return e(t);
  } finally {
    (tt = n), tt === 0 && ((Zi = _t() + 500), Zu && To());
  }
}
function ti(e) {
  vo !== null && vo.tag === 0 && !(tt & 6) && Vi();
  var t = tt;
  tt |= 1;
  var n = tr.transition,
    r = at;
  try {
    if (((tr.transition = null), (at = 1), e)) return e();
  } finally {
    (at = r), (tr.transition = n), (tt = t), !(tt & 6) && To();
  }
}
function kp() {
  (Dn = Ni.current), gt(Ni);
}
function Go(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vx(n)), Lt !== null))
    for (n = Lt.return; n !== null; ) {
      var r = n;
      switch ((bp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && su();
          break;
        case 3:
          Qi(), gt(Rn), gt(fn), $p();
          break;
        case 5:
          Ip(r);
          break;
        case 4:
          Qi();
          break;
        case 13:
          gt(Ct);
          break;
        case 19:
          gt(Ct);
          break;
        case 10:
          Ep(r.type._context);
          break;
        case 22:
        case 23:
          kp();
      }
      n = n.return;
    }
  if (
    ((Qt = e),
    (Lt = e = Eo(e.current, null)),
    (nn = Dn = t),
    (Vt = 0),
    (gl = null),
    (zp = nc = ei = 0),
    (En = Ka = null),
    Vo !== null)
  ) {
    for (t = 0; t < Vo.length; t++)
      if (((n = Vo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Vo = null;
  }
  return e;
}
function Y1(e, t) {
  do {
    var n = Lt;
    try {
      if ((xp(), (ks.current = gu), hu)) {
        for (var r = xt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        hu = !1;
      }
      if (
        ((Jo = 0),
        (qt = Ht = xt = null),
        (Wa = !1),
        (pl = 0),
        (jp.current = null),
        n === null || n.return === null)
      ) {
        (Vt = 1), (gl = t), (Lt = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = nn),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = hh(a);
          if (g !== null) {
            (g.flags &= -257),
              gh(g, a, l, i, t),
              g.mode & 1 && mh(i, u, t),
              (t = g),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              mh(i, u, t), Bp();
              break e;
            }
            s = Error(Q(426));
          }
        } else if (St && l.mode & 1) {
          var b = hh(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              gh(b, a, l, i, t),
              wp(Yi(s, l));
            break e;
          }
        }
        (i = s = Yi(s, l)),
          Vt !== 4 && (Vt = 2),
          Ka === null ? (Ka = [i]) : Ka.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = N1(i, s, t);
              uh(i, h);
              break e;
            case 1:
              l = s;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Co === null || !Co.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = F1(i, l, t);
                uh(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      eS(n);
    } catch (C) {
      (t = C), Lt === n && n !== null && (Lt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Z1() {
  var e = yu.current;
  return (yu.current = gu), e === null ? gu : e;
}
function Bp() {
  (Vt === 0 || Vt === 3 || Vt === 2) && (Vt = 4),
    Qt === null || (!(ei & 268435455) && !(nc & 268435455)) || co(Qt, nn);
}
function wu(e, t) {
  var n = tt;
  tt |= 2;
  var r = Z1();
  (Qt !== e || nn !== t) && ((Lr = null), Go(e, t));
  do
    try {
      pE();
      break;
    } catch (o) {
      Y1(e, o);
    }
  while (!0);
  if ((xp(), (tt = n), (yu.current = r), Lt !== null)) throw Error(Q(261));
  return (Qt = null), (nn = 0), Vt;
}
function pE() {
  for (; Lt !== null; ) J1(Lt);
}
function mE() {
  for (; Lt !== null && !kC(); ) J1(Lt);
}
function J1(e) {
  var t = nS(e.alternate, e, Dn);
  (e.memoizedProps = e.pendingProps),
    t === null ? eS(e) : (Lt = t),
    (jp.current = null);
}
function eS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sE(n, t)), n !== null)) {
        (n.flags &= 32767), (Lt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Vt = 6), (Lt = null);
        return;
      }
    } else if (((n = lE(n, t, Dn)), n !== null)) {
      Lt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Lt = t;
      return;
    }
    Lt = t = e;
  } while (t !== null);
  Vt === 0 && (Vt = 5);
}
function Lo(e, t, n) {
  var r = at,
    o = tr.transition;
  try {
    (tr.transition = null), (at = 1), hE(e, t, n, r);
  } finally {
    (tr.transition = o), (at = r);
  }
  return null;
}
function hE(e, t, n, r) {
  do Vi();
  while (vo !== null);
  if (tt & 6) throw Error(Q(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Q(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (QC(e, i),
    e === Qt && ((Lt = Qt = null), (nn = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ys ||
      ((ys = !0),
      rS(nu, function () {
        return Vi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = tr.transition), (tr.transition = null);
    var a = at;
    at = 1;
    var l = tt;
    (tt |= 4),
      (jp.current = null),
      cE(e, n),
      q1(n, e),
      jx(vd),
      (ou = !!dd),
      (vd = dd = null),
      (e.current = n),
      fE(n),
      BC(),
      (tt = l),
      (at = a),
      (tr.transition = i);
  } else e.current = n;
  if (
    (ys && ((ys = !1), (vo = e), (bu = o)),
    (i = e.pendingLanes),
    i === 0 && (Co = null),
    WC(n.stateNode),
    In(e, _t()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Su) throw ((Su = !1), (e = Ad), (Ad = null), e);
  return (
    bu & 1 && e.tag !== 0 && Vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Nd ? Ga++ : ((Ga = 0), (Nd = e))) : (Ga = 0),
    To(),
    null
  );
}
function Vi() {
  if (vo !== null) {
    var e = Ny(bu),
      t = tr.transition,
      n = at;
    try {
      if (((tr.transition = null), (at = 16 > e ? 16 : e), vo === null))
        var r = !1;
      else {
        if (((e = vo), (vo = null), (bu = 0), tt & 6)) throw Error(Q(331));
        var o = tt;
        for (tt |= 4, pe = e.current; pe !== null; ) {
          var i = pe,
            a = i.child;
          if (pe.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (pe = u; pe !== null; ) {
                  var c = pe;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ua(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (pe = d);
                  else
                    for (; pe !== null; ) {
                      c = pe;
                      var v = c.sibling,
                        g = c.return;
                      if ((U1(c), c === u)) {
                        pe = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (pe = v);
                        break;
                      }
                      pe = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var b = S.sibling;
                    (S.sibling = null), (S = b);
                  } while (S !== null);
                }
              }
              pe = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (pe = a);
          else
            e: for (; pe !== null; ) {
              if (((i = pe), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ua(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (pe = h);
                break e;
              }
              pe = i.return;
            }
        }
        var p = e.current;
        for (pe = p; pe !== null; ) {
          a = pe;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (pe = m);
          else
            e: for (a = p; pe !== null; ) {
              if (((l = pe), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tc(9, l);
                  }
                } catch (C) {
                  $t(l, l.return, C);
                }
              if (l === a) {
                pe = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (pe = w);
                break e;
              }
              pe = l.return;
            }
        }
        if (
          ((tt = o), To(), Tr && typeof Tr.onPostCommitFiberRoot == "function")
        )
          try {
            Tr.onPostCommitFiberRoot(Gu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (at = n), (tr.transition = t);
    }
  }
  return !1;
}
function Th(e, t, n) {
  (t = Yi(n, t)),
    (t = N1(e, t, 1)),
    (e = wo(e, t, 1)),
    (t = yn()),
    e !== null && (zl(e, 1, t), In(e, t));
}
function $t(e, t, n) {
  if (e.tag === 3) Th(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Th(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Co === null || !Co.has(r)))
        ) {
          (e = Yi(n, e)),
            (e = F1(t, e, 1)),
            (t = wo(t, e, 1)),
            (e = yn()),
            t !== null && (zl(t, 1, e), In(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = yn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qt === e &&
      (nn & n) === n &&
      (Vt === 4 || (Vt === 3 && (nn & 130023424) === nn && 500 > _t() - Lp)
        ? Go(e, 0)
        : (zp |= n)),
    In(e, t);
}
function tS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ss), (ss <<= 1), !(ss & 130023424) && (ss = 4194304))
      : (t = 1));
  var n = yn();
  (e = Gr(e, t)), e !== null && (zl(e, t, n), In(e, n));
}
function yE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tS(e, n);
}
function SE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(Q(314));
  }
  r !== null && r.delete(t), tS(e, n);
}
var nS;
nS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Rn.current) On = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (On = !1), aE(e, t, n);
      On = !!(e.flags & 131072);
    }
  else (On = !1), St && t.flags & 1048576 && a1(t, fu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hs(e, t), (e = t.pendingProps);
      var o = Gi(t, fn.current);
      Hi(t, n), (o = Mp(null, t, r, e, o, n));
      var i = _p();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pn(r) ? ((i = !0), uu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Rp(t),
            (o.updater = ec),
            (t.stateNode = o),
            (o._reactInternals = t),
            Cd(t, r, e, n),
            (t = Od(null, t, r, !0, i, n)))
          : ((t.tag = 0), St && i && Sp(t), gn(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = wE(r)),
          (e = fr(r, e)),
          o)
        ) {
          case 0:
            t = Ed(null, t, r, e, n);
            break e;
          case 1:
            t = bh(null, t, r, e, n);
            break e;
          case 11:
            t = yh(null, t, r, e, n);
            break e;
          case 14:
            t = Sh(null, t, r, fr(r.type, e), n);
            break e;
        }
        throw Error(Q(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fr(r, o)),
        Ed(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fr(r, o)),
        bh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((D1(t), e === null)) throw Error(Q(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          d1(e, t),
          pu(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Yi(Error(Q(423)), t)), (t = wh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Yi(Error(Q(424)), t)), (t = wh(e, t, r, n, o));
            break e;
          } else
            for (
              kn = bo(t.stateNode.containerInfo.firstChild),
                Vn = t,
                St = !0,
                mr = null,
                n = c1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qi(), r === o)) {
            t = qr(e, t, n);
            break e;
          }
          gn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        v1(t),
        e === null && Sd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        pd(r, o) ? (a = null) : i !== null && pd(r, i) && (t.flags |= 32),
        L1(e, t),
        gn(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Sd(t), null;
    case 13:
      return k1(e, t, n);
    case 4:
      return (
        Pp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xi(t, null, r, n)) : gn(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fr(r, o)),
        yh(e, t, r, o, n)
      );
    case 7:
      return gn(e, t, t.pendingProps, n), t.child;
    case 8:
      return gn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return gn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ft(du, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Cr(i.value, a)) {
            if (i.children === o.children && !Rn.current) {
              t = qr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Vr(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      bd(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(Q(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  bd(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        gn(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Hi(t, n),
        (o = nr(o)),
        (r = r(o)),
        (t.flags |= 1),
        gn(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = fr(r, t.pendingProps)),
        (o = fr(r.type, o)),
        Sh(e, t, r, o, n)
      );
    case 15:
      return j1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fr(r, o)),
        Hs(e, t),
        (t.tag = 1),
        Pn(r) ? ((e = !0), uu(t)) : (e = !1),
        Hi(t, n),
        A1(t, r, o),
        Cd(t, r, o, n),
        Od(null, t, r, !0, e, n)
      );
    case 19:
      return B1(e, t, n);
    case 22:
      return z1(e, t, n);
  }
  throw Error(Q(156, t.tag));
};
function rS(e, t) {
  return Ty(e, t);
}
function bE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function er(e, t, n, r) {
  return new bE(e, t, n, r);
}
function Hp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wE(e) {
  if (typeof e == "function") return Hp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lp)) return 11;
    if (e === sp) return 14;
  }
  return 2;
}
function Eo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = er(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Us(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Hp(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Ei:
        return qo(n.children, o, i, t);
      case ap:
        (a = 8), (o |= 8);
        break;
      case Kf:
        return (
          (e = er(12, n, t, o | 2)), (e.elementType = Kf), (e.lanes = i), e
        );
      case Gf:
        return (e = er(13, n, t, o)), (e.elementType = Gf), (e.lanes = i), e;
      case qf:
        return (e = er(19, n, t, o)), (e.elementType = qf), (e.lanes = i), e;
      case vy:
        return rc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fy:
              a = 10;
              break e;
            case dy:
              a = 9;
              break e;
            case lp:
              a = 11;
              break e;
            case sp:
              a = 14;
              break e;
            case lo:
              (a = 16), (r = null);
              break e;
          }
        throw Error(Q(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = er(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function qo(e, t, n, r) {
  return (e = er(7, e, r, t)), (e.lanes = n), e;
}
function rc(e, t, n, r) {
  return (
    (e = er(22, e, r, t)),
    (e.elementType = vy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function df(e, t, n) {
  return (e = er(6, e, null, t)), (e.lanes = n), e;
}
function vf(e, t, n) {
  return (
    (t = er(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function CE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Kc(0)),
    (this.expirationTimes = Kc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Kc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Vp(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new CE(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = er(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Rp(i),
    e
  );
}
function xE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function oS(e) {
  if (!e) return Ro;
  e = e._reactInternals;
  e: {
    if (si(e) !== e || e.tag !== 1) throw Error(Q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pn(n)) return o1(e, n, t);
  }
  return t;
}
function iS(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Vp(n, r, !0, e, o, i, a, l, s)),
    (e.context = oS(null)),
    (n = e.current),
    (r = yn()),
    (o = xo(n)),
    (i = Vr(r, o)),
    (i.callback = t ?? null),
    wo(n, i, o),
    (e.current.lanes = o),
    zl(e, o, r),
    In(e, r),
    e
  );
}
function oc(e, t, n, r) {
  var o = t.current,
    i = yn(),
    a = xo(o);
  return (
    (n = oS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wo(o, t, a)),
    e !== null && (yr(e, o, a, i), Ds(e, o, a)),
    a
  );
}
function Cu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wp(e, t) {
  Mh(e, t), (e = e.alternate) && Mh(e, t);
}
function EE() {
  return null;
}
var aS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Up(e) {
  this._internalRoot = e;
}
ic.prototype.render = Up.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Q(409));
  oc(e, t, null, null);
};
ic.prototype.unmount = Up.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ti(function () {
      oc(null, e, null, null);
    }),
      (t[Kr] = null);
  }
};
function ic(e) {
  this._internalRoot = e;
}
ic.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < uo.length && t !== 0 && t < uo[n].priority; n++);
    uo.splice(n, 0, e), n === 0 && Dy(e);
  }
};
function Kp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ac(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _h() {}
function OE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Cu(a);
        i.call(u);
      };
    }
    var a = iS(t, r, e, 0, null, !1, !1, "", _h);
    return (
      (e._reactRootContainer = a),
      (e[Kr] = a.current),
      ul(e.nodeType === 8 ? e.parentNode : e),
      ti(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Cu(s);
      l.call(u);
    };
  }
  var s = Vp(e, 0, !1, null, null, !1, !1, "", _h);
  return (
    (e._reactRootContainer = s),
    (e[Kr] = s.current),
    ul(e.nodeType === 8 ? e.parentNode : e),
    ti(function () {
      oc(t, s, n, r);
    }),
    s
  );
}
function lc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Cu(a);
        l.call(s);
      };
    }
    oc(t, a, e, o);
  } else a = OE(n, t, e, o, r);
  return Cu(a);
}
Fy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Na(t.pendingLanes);
        n !== 0 &&
          (fp(t, n | 1), In(t, _t()), !(tt & 6) && ((Zi = _t() + 500), To()));
      }
      break;
    case 13:
      ti(function () {
        var r = Gr(e, 1);
        if (r !== null) {
          var o = yn();
          yr(r, e, 1, o);
        }
      }),
        Wp(e, 1);
  }
};
dp = function (e) {
  if (e.tag === 13) {
    var t = Gr(e, 134217728);
    if (t !== null) {
      var n = yn();
      yr(t, e, 134217728, n);
    }
    Wp(e, 134217728);
  }
};
jy = function (e) {
  if (e.tag === 13) {
    var t = xo(e),
      n = Gr(e, t);
    if (n !== null) {
      var r = yn();
      yr(n, e, t, r);
    }
    Wp(e, t);
  }
};
zy = function () {
  return at;
};
Ly = function (e, t) {
  var n = at;
  try {
    return (at = e), t();
  } finally {
    at = n;
  }
};
od = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Yu(r);
            if (!o) throw Error(Q(90));
            my(r), Yf(r, o);
          }
        }
      }
      break;
    case "textarea":
      gy(e, n);
      break;
    case "select":
      (t = n.value), t != null && Li(e, !!n.multiple, t, !1);
  }
};
Ey = Dp;
Oy = ti;
var RE = { usingClientEntryPoint: !1, Events: [Dl, Ii, Yu, Cy, xy, Dp] },
  Pa = {
    findFiberByHostInstance: Ho,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  PE = {
    bundleType: Pa.bundleType,
    version: Pa.version,
    rendererPackageName: Pa.rendererPackageName,
    rendererConfig: Pa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Iy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pa.findFiberByHostInstance || EE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ss.isDisabled && Ss.supportsFiber)
    try {
      (Gu = Ss.inject(PE)), (Tr = Ss);
    } catch {}
}
Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = RE;
Gn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kp(t)) throw Error(Q(200));
  return xE(e, t, null, n);
};
Gn.createRoot = function (e, t) {
  if (!Kp(e)) throw Error(Q(299));
  var n = !1,
    r = "",
    o = aS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Vp(e, 1, !1, null, null, n, !1, r, o)),
    (e[Kr] = t.current),
    ul(e.nodeType === 8 ? e.parentNode : e),
    new Up(t)
  );
};
Gn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Q(188))
      : ((e = Object.keys(e).join(",")), Error(Q(268, e)));
  return (e = Iy(t)), (e = e === null ? null : e.stateNode), e;
};
Gn.flushSync = function (e) {
  return ti(e);
};
Gn.hydrate = function (e, t, n) {
  if (!ac(t)) throw Error(Q(200));
  return lc(null, e, t, !0, n);
};
Gn.hydrateRoot = function (e, t, n) {
  if (!Kp(e)) throw Error(Q(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = aS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = iS(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Kr] = t.current),
    ul(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ic(t);
};
Gn.render = function (e, t, n) {
  if (!ac(t)) throw Error(Q(200));
  return lc(null, e, t, !1, n);
};
Gn.unmountComponentAtNode = function (e) {
  if (!ac(e)) throw Error(Q(40));
  return e._reactRootContainer
    ? (ti(function () {
        lc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kr] = null);
        });
      }),
      !0)
    : !1;
};
Gn.unstable_batchedUpdates = Dp;
Gn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ac(n)) throw Error(Q(200));
  if (e == null || e._reactInternals === void 0) throw Error(Q(38));
  return lc(e, t, n, !1, r);
};
Gn.version = "18.3.1-next-f1338f8080-20240426";
function lS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lS);
    } catch (e) {
      console.error(e);
    }
}
lS(), (ly.exports = Gn);
var ni = ly.exports;
const zd = Uu(ni),
  IE = X0({ __proto__: null, default: zd }, [ni]);
var Ah = ni;
(Wf.createRoot = Ah.createRoot), (Wf.hydrateRoot = Ah.hydrateRoot);
var sS = { exports: {} },
  uS = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bl = f;
function $E(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var TE = typeof Object.is == "function" ? Object.is : $E,
  ME = Bl.useSyncExternalStore,
  _E = Bl.useRef,
  AE = Bl.useEffect,
  NE = Bl.useMemo,
  FE = Bl.useDebugValue;
uS.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = _E(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = NE(
    function () {
      function s(g) {
        if (!u) {
          if (((u = !0), (c = g), (g = r(g)), o !== void 0 && a.hasValue)) {
            var y = a.value;
            if (o(y, g)) return (d = y);
          }
          return (d = g);
        }
        if (((y = d), TE(c, g))) return y;
        var S = r(g);
        return o !== void 0 && o(y, S) ? y : ((c = g), (d = S));
      }
      var u = !1,
        c,
        d,
        v = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        v === null
          ? void 0
          : function () {
              return s(v());
            },
      ];
    },
    [t, n, r, o]
  );
  var l = ME(e, i[0], i[1]);
  return (
    AE(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l]
    ),
    FE(l),
    l
  );
};
sS.exports = uS;
var jE = sS.exports,
  Bn = "default" in Ui ? ne : Ui,
  Nh = Symbol.for("react-redux-context"),
  Fh = typeof globalThis < "u" ? globalThis : {};
function zE() {
  if (!Bn.createContext) return {};
  const e = Fh[Nh] ?? (Fh[Nh] = new Map());
  let t = e.get(Bn.createContext);
  return t || ((t = Bn.createContext(null)), e.set(Bn.createContext, t)), t;
}
var Po = zE(),
  LE = () => {
    throw new Error("uSES not initialized!");
  };
function Gp(e = Po) {
  return function () {
    return Bn.useContext(e);
  };
}
var cS = Gp(),
  fS = LE,
  DE = (e) => {
    fS = e;
  },
  kE = (e, t) => e === t;
function BE(e = Po) {
  const t = e === Po ? cS : Gp(e),
    n = (r, o = {}) => {
      const { equalityFn: i = kE, devModeChecks: a = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: l,
          subscription: s,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: d,
        } = t();
      Bn.useRef(!0);
      const v = Bn.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, c, a.stabilityCheck]
        ),
        g = fS(s.addNestedSub, l.getState, u || l.getState, v, i);
      return Bn.useDebugValue(g), g;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var ca = BE();
function HE(e) {
  e();
}
function VE() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      HE(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var jh = { notify() {}, get: () => [] };
function WE(e, t) {
  let n,
    r = jh,
    o = 0,
    i = !1;
  function a(S) {
    c();
    const b = r.subscribe(S);
    let h = !1;
    return () => {
      h || ((h = !0), b(), d());
    };
  }
  function l() {
    r.notify();
  }
  function s() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    o++, n || ((n = e.subscribe(s)), (r = VE()));
  }
  function d() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = jh));
  }
  function v() {
    i || ((i = !0), c());
  }
  function g() {
    i && ((i = !1), d());
  }
  const y = {
    addNestedSub: a,
    notifyNestedSubs: l,
    handleChangeWrapper: s,
    isSubscribed: u,
    trySubscribe: v,
    tryUnsubscribe: g,
    getListeners: () => r,
  };
  return y;
}
var UE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  KE = typeof navigator < "u" && navigator.product === "ReactNative",
  GE = UE || KE ? Bn.useLayoutEffect : Bn.useEffect;
function qE({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once",
}) {
  const a = Bn.useMemo(() => {
      const u = WE(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, r, o, i]),
    l = Bn.useMemo(() => e.getState(), [e]);
  GE(() => {
    const { subscription: u } = a;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [a, l]);
  const s = t || Po;
  return Bn.createElement(s.Provider, { value: a }, n);
}
var XE = qE;
function dS(e = Po) {
  const t = e === Po ? cS : Gp(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var QE = dS();
function YE(e = Po) {
  const t = e === Po ? QE : dS(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Hl = YE();
DE(jE.useSyncExternalStoreWithSelector);
var vS = { exports: {} },
  ZE = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  JE = ZE,
  e2 = JE;
function pS() {}
function mS() {}
mS.resetWarningCache = pS;
var t2 = function () {
  function e(r, o, i, a, l, s) {
    if (s !== e2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: mS,
    resetWarningCache: pS,
  };
  return (n.PropTypes = n), n;
};
vS.exports = t2();
var n2 = vS.exports;
const ke = Uu(n2);
var r2 = Object.getOwnPropertyNames,
  o2 = Object.getOwnPropertySymbols,
  i2 = Object.prototype.hasOwnProperty;
function zh(e, t) {
  return function (r, o, i) {
    return e(r, o, i) && t(r, o, i);
  };
}
function bs(e) {
  return function (n, r, o) {
    if (!n || !r || typeof n != "object" || typeof r != "object")
      return e(n, r, o);
    var i = o.cache,
      a = i.get(n),
      l = i.get(r);
    if (a && l) return a === r && l === n;
    i.set(n, r), i.set(r, n);
    var s = e(n, r, o);
    return i.delete(n), i.delete(r), s;
  };
}
function Lh(e) {
  return r2(e).concat(o2(e));
}
var hS =
  Object.hasOwn ||
  function (e, t) {
    return i2.call(e, t);
  };
function fa(e, t) {
  return e || t ? e === t : e === t || (e !== e && t !== t);
}
var gS = "_owner",
  Dh = Object.getOwnPropertyDescriptor,
  kh = Object.keys;
function a2(e, t, n) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
  return !0;
}
function l2(e, t) {
  return fa(e.getTime(), t.getTime());
}
function Bh(e, t, n) {
  if (e.size !== t.size) return !1;
  for (var r = {}, o = e.entries(), i = 0, a, l; (a = o.next()) && !a.done; ) {
    for (var s = t.entries(), u = !1, c = 0; (l = s.next()) && !l.done; ) {
      var d = a.value,
        v = d[0],
        g = d[1],
        y = l.value,
        S = y[0],
        b = y[1];
      !u &&
        !r[c] &&
        (u = n.equals(v, S, i, c, e, t, n) && n.equals(g, b, v, S, e, t, n)) &&
        (r[c] = !0),
        c++;
    }
    if (!u) return !1;
    i++;
  }
  return !0;
}
function s2(e, t, n) {
  var r = kh(e),
    o = r.length;
  if (kh(t).length !== o) return !1;
  for (var i; o-- > 0; )
    if (
      ((i = r[o]),
      (i === gS && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !hS(t, i) ||
        !n.equals(e[i], t[i], i, i, e, t, n))
    )
      return !1;
  return !0;
}
function Ia(e, t, n) {
  var r = Lh(e),
    o = r.length;
  if (Lh(t).length !== o) return !1;
  for (var i, a, l; o-- > 0; )
    if (
      ((i = r[o]),
      (i === gS && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof) ||
        !hS(t, i) ||
        !n.equals(e[i], t[i], i, i, e, t, n) ||
        ((a = Dh(e, i)),
        (l = Dh(t, i)),
        (a || l) &&
          (!a ||
            !l ||
            a.configurable !== l.configurable ||
            a.enumerable !== l.enumerable ||
            a.writable !== l.writable)))
    )
      return !1;
  return !0;
}
function u2(e, t) {
  return fa(e.valueOf(), t.valueOf());
}
function c2(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Hh(e, t, n) {
  if (e.size !== t.size) return !1;
  for (var r = {}, o = e.values(), i, a; (i = o.next()) && !i.done; ) {
    for (var l = t.values(), s = !1, u = 0; (a = l.next()) && !a.done; )
      !s &&
        !r[u] &&
        (s = n.equals(i.value, a.value, i.value, a.value, e, t, n)) &&
        (r[u] = !0),
        u++;
    if (!s) return !1;
  }
  return !0;
}
function f2(e, t) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (e[n] !== t[n]) return !1;
  return !0;
}
var d2 = "[object Arguments]",
  v2 = "[object Boolean]",
  p2 = "[object Date]",
  m2 = "[object Map]",
  h2 = "[object Number]",
  g2 = "[object Object]",
  y2 = "[object RegExp]",
  S2 = "[object Set]",
  b2 = "[object String]",
  w2 = Array.isArray,
  Vh =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  Wh = Object.assign,
  C2 = Object.prototype.toString.call.bind(Object.prototype.toString);
function x2(e) {
  var t = e.areArraysEqual,
    n = e.areDatesEqual,
    r = e.areMapsEqual,
    o = e.areObjectsEqual,
    i = e.arePrimitiveWrappersEqual,
    a = e.areRegExpsEqual,
    l = e.areSetsEqual,
    s = e.areTypedArraysEqual;
  return function (c, d, v) {
    if (c === d) return !0;
    if (c == null || d == null || typeof c != "object" || typeof d != "object")
      return c !== c && d !== d;
    var g = c.constructor;
    if (g !== d.constructor) return !1;
    if (g === Object) return o(c, d, v);
    if (w2(c)) return t(c, d, v);
    if (Vh != null && Vh(c)) return s(c, d, v);
    if (g === Date) return n(c, d, v);
    if (g === RegExp) return a(c, d, v);
    if (g === Map) return r(c, d, v);
    if (g === Set) return l(c, d, v);
    var y = C2(c);
    return y === p2
      ? n(c, d, v)
      : y === y2
      ? a(c, d, v)
      : y === m2
      ? r(c, d, v)
      : y === S2
      ? l(c, d, v)
      : y === g2
      ? typeof c.then != "function" && typeof d.then != "function" && o(c, d, v)
      : y === d2
      ? o(c, d, v)
      : y === v2 || y === h2 || y === b2
      ? i(c, d, v)
      : !1;
  };
}
function E2(e) {
  var t = e.circular,
    n = e.createCustomConfig,
    r = e.strict,
    o = {
      areArraysEqual: r ? Ia : a2,
      areDatesEqual: l2,
      areMapsEqual: r ? zh(Bh, Ia) : Bh,
      areObjectsEqual: r ? Ia : s2,
      arePrimitiveWrappersEqual: u2,
      areRegExpsEqual: c2,
      areSetsEqual: r ? zh(Hh, Ia) : Hh,
      areTypedArraysEqual: r ? Ia : f2,
    };
  if ((n && (o = Wh({}, o, n(o))), t)) {
    var i = bs(o.areArraysEqual),
      a = bs(o.areMapsEqual),
      l = bs(o.areObjectsEqual),
      s = bs(o.areSetsEqual);
    o = Wh({}, o, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: l,
      areSetsEqual: s,
    });
  }
  return o;
}
function O2(e) {
  return function (t, n, r, o, i, a, l) {
    return e(t, n, l);
  };
}
function R2(e) {
  var t = e.circular,
    n = e.comparator,
    r = e.createState,
    o = e.equals,
    i = e.strict;
  if (r)
    return function (s, u) {
      var c = r(),
        d = c.cache,
        v = d === void 0 ? (t ? new WeakMap() : void 0) : d,
        g = c.meta;
      return n(s, u, { cache: v, equals: o, meta: g, strict: i });
    };
  if (t)
    return function (s, u) {
      return n(s, u, {
        cache: new WeakMap(),
        equals: o,
        meta: void 0,
        strict: i,
      });
    };
  var a = { cache: void 0, equals: o, meta: void 0, strict: i };
  return function (s, u) {
    return n(s, u, a);
  };
}
var P2 = Mo();
Mo({ strict: !0 });
Mo({ circular: !0 });
Mo({ circular: !0, strict: !0 });
Mo({
  createInternalComparator: function () {
    return fa;
  },
});
Mo({
  strict: !0,
  createInternalComparator: function () {
    return fa;
  },
});
Mo({
  circular: !0,
  createInternalComparator: function () {
    return fa;
  },
});
Mo({
  circular: !0,
  createInternalComparator: function () {
    return fa;
  },
  strict: !0,
});
function Mo(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    n = t === void 0 ? !1 : t,
    r = e.createInternalComparator,
    o = e.createState,
    i = e.strict,
    a = i === void 0 ? !1 : i,
    l = E2(e),
    s = x2(l),
    u = r ? r(s) : O2(s);
  return R2({
    circular: n,
    comparator: s,
    createState: o,
    equals: u,
    strict: a,
  });
}
function I2(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Uh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = -1,
    r = function o(i) {
      n < 0 && (n = i), i - n > t ? (e(i), (n = -1)) : I2(o);
    };
  requestAnimationFrame(r);
}
function Ld(e) {
  "@babel/helpers - typeof";
  return (
    (Ld =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ld(e)
  );
}
function $2(e) {
  return A2(e) || _2(e) || M2(e) || T2();
}
function T2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M2(e, t) {
  if (e) {
    if (typeof e == "string") return Kh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Kh(e, t);
  }
}
function Kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function A2(e) {
  if (Array.isArray(e)) return e;
}
function N2() {
  var e = {},
    t = function () {
      return null;
    },
    n = !1,
    r = function o(i) {
      if (!n) {
        if (Array.isArray(i)) {
          if (!i.length) return;
          var a = i,
            l = $2(a),
            s = l[0],
            u = l.slice(1);
          if (typeof s == "number") {
            Uh(o.bind(null, u), s);
            return;
          }
          o(s), Uh(o.bind(null, u));
          return;
        }
        Ld(i) === "object" && ((e = i), t(e)), typeof i == "function" && i();
      }
    };
  return {
    stop: function () {
      n = !0;
    },
    start: function (i) {
      (n = !1), r(i);
    },
    subscribe: function (i) {
      return (
        (t = i),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function yl(e) {
  "@babel/helpers - typeof";
  return (
    (yl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yl(e)
  );
}
function Gh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gh(Object(n), !0).forEach(function (r) {
          yS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yS(e, t, n) {
  return (
    (t = F2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function F2(e) {
  var t = j2(e, "string");
  return yl(t) === "symbol" ? t : String(t);
}
function j2(e, t) {
  if (yl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (yl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var z2 = function (t, n) {
    return [Object.keys(t), Object.keys(n)].reduce(function (r, o) {
      return r.filter(function (i) {
        return o.includes(i);
      });
    });
  },
  L2 = function (t) {
    return t;
  },
  D2 = function (t) {
    return t.replace(/([A-Z])/g, function (n) {
      return "-".concat(n.toLowerCase());
    });
  },
  qa = function (t, n) {
    return Object.keys(n).reduce(function (r, o) {
      return qh(qh({}, r), {}, yS({}, o, t(o, n[o])));
    }, {});
  },
  Xh = function (t, n, r) {
    return t
      .map(function (o) {
        return "".concat(D2(o), " ").concat(n, "ms ").concat(r);
      })
      .join(",");
  };
function k2(e, t) {
  return V2(e) || H2(e, t) || SS(e, t) || B2();
}
function B2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H2(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function V2(e) {
  if (Array.isArray(e)) return e;
}
function W2(e) {
  return G2(e) || K2(e) || SS(e) || U2();
}
function U2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SS(e, t) {
  if (e) {
    if (typeof e == "string") return Dd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Dd(e, t);
  }
}
function K2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function G2(e) {
  if (Array.isArray(e)) return Dd(e);
}
function Dd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var xu = 1e-4,
  bS = function (t, n) {
    return [0, 3 * t, 3 * n - 6 * t, 3 * t - 3 * n + 1];
  },
  wS = function (t, n) {
    return t
      .map(function (r, o) {
        return r * Math.pow(n, o);
      })
      .reduce(function (r, o) {
        return r + o;
      });
  },
  Qh = function (t, n) {
    return function (r) {
      var o = bS(t, n);
      return wS(o, r);
    };
  },
  q2 = function (t, n) {
    return function (r) {
      var o = bS(t, n),
        i = [].concat(
          W2(
            o
              .map(function (a, l) {
                return a * l;
              })
              .slice(1)
          ),
          [0]
        );
      return wS(i, r);
    };
  },
  Yh = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var o = n[0],
      i = n[1],
      a = n[2],
      l = n[3];
    if (n.length === 1)
      switch (n[0]) {
        case "linear":
          (o = 0), (i = 0), (a = 1), (l = 1);
          break;
        case "ease":
          (o = 0.25), (i = 0.1), (a = 0.25), (l = 1);
          break;
        case "ease-in":
          (o = 0.42), (i = 0), (a = 1), (l = 1);
          break;
        case "ease-out":
          (o = 0.42), (i = 0), (a = 0.58), (l = 1);
          break;
        case "ease-in-out":
          (o = 0), (i = 0), (a = 0.58), (l = 1);
          break;
        default: {
          var s = n[0].split("(");
          if (
            s[0] === "cubic-bezier" &&
            s[1].split(")")[0].split(",").length === 4
          ) {
            var u = s[1]
                .split(")")[0]
                .split(",")
                .map(function (b) {
                  return parseFloat(b);
                }),
              c = k2(u, 4);
            (o = c[0]), (i = c[1]), (a = c[2]), (l = c[3]);
          }
        }
      }
    var d = Qh(o, a),
      v = Qh(i, l),
      g = q2(o, a),
      y = function (h) {
        return h > 1 ? 1 : h < 0 ? 0 : h;
      },
      S = function (h) {
        for (var p = h > 1 ? 1 : h, m = p, w = 0; w < 8; ++w) {
          var C = d(m) - p,
            E = g(m);
          if (Math.abs(C - p) < xu || E < xu) return v(m);
          m = y(m - C / E);
        }
        return v(m);
      };
    return (S.isStepper = !1), S;
  },
  X2 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.stiff,
      r = n === void 0 ? 100 : n,
      o = t.damping,
      i = o === void 0 ? 8 : o,
      a = t.dt,
      l = a === void 0 ? 17 : a,
      s = function (c, d, v) {
        var g = -(c - d) * r,
          y = v * i,
          S = v + ((g - y) * l) / 1e3,
          b = (v * l) / 1e3 + c;
        return Math.abs(b - d) < xu && Math.abs(S) < xu ? [d, 0] : [b, S];
      };
    return (s.isStepper = !0), (s.dt = l), s;
  },
  Q2 = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var o = n[0];
    if (typeof o == "string")
      switch (o) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Yh(o);
        case "spring":
          return X2();
        default:
          if (o.split("(")[0] === "cubic-bezier") return Yh(o);
      }
    return typeof o == "function" ? o : null;
  };
function Sl(e) {
  "@babel/helpers - typeof";
  return (
    (Sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sl(e)
  );
}
function Zh(e) {
  return J2(e) || Z2(e) || CS(e) || Y2();
}
function Y2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function J2(e) {
  if (Array.isArray(e)) return Bd(e);
}
function Jh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jh(Object(n), !0).forEach(function (r) {
          kd(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Jh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kd(e, t, n) {
  return (
    (t = eO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function eO(e) {
  var t = tO(e, "string");
  return Sl(t) === "symbol" ? t : String(t);
}
function tO(e, t) {
  if (Sl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Sl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nO(e, t) {
  return iO(e) || oO(e, t) || CS(e, t) || rO();
}
function rO() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CS(e, t) {
  if (e) {
    if (typeof e == "string") return Bd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Bd(e, t);
  }
}
function Bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function oO(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function iO(e) {
  if (Array.isArray(e)) return e;
}
var Eu = function (t, n, r) {
    return t + (n - t) * r;
  },
  Hd = function (t) {
    var n = t.from,
      r = t.to;
    return n !== r;
  },
  aO = function e(t, n, r) {
    var o = qa(function (i, a) {
      if (Hd(a)) {
        var l = t(a.from, a.to, a.velocity),
          s = nO(l, 2),
          u = s[0],
          c = s[1];
        return Zt(Zt({}, a), {}, { from: u, velocity: c });
      }
      return a;
    }, n);
    return r < 1
      ? qa(function (i, a) {
          return Hd(a)
            ? Zt(
                Zt({}, a),
                {},
                {
                  velocity: Eu(a.velocity, o[i].velocity, r),
                  from: Eu(a.from, o[i].from, r),
                }
              )
            : a;
        }, n)
      : e(t, o, r - 1);
  };
const lO = function (e, t, n, r, o) {
  var i = z2(e, t),
    a = i.reduce(function (b, h) {
      return Zt(Zt({}, b), {}, kd({}, h, [e[h], t[h]]));
    }, {}),
    l = i.reduce(function (b, h) {
      return Zt(
        Zt({}, b),
        {},
        kd({}, h, { from: e[h], velocity: 0, to: t[h] })
      );
    }, {}),
    s = -1,
    u,
    c,
    d = function () {
      return null;
    },
    v = function () {
      return qa(function (h, p) {
        return p.from;
      }, l);
    },
    g = function () {
      return !Object.values(l).filter(Hd).length;
    },
    y = function (h) {
      u || (u = h);
      var p = h - u,
        m = p / n.dt;
      (l = aO(n, l, m)),
        o(Zt(Zt(Zt({}, e), t), v())),
        (u = h),
        g() || (s = requestAnimationFrame(d));
    },
    S = function (h) {
      c || (c = h);
      var p = (h - c) / r,
        m = qa(function (C, E) {
          return Eu.apply(void 0, Zh(E).concat([n(p)]));
        }, a);
      if ((o(Zt(Zt(Zt({}, e), t), m)), p < 1)) s = requestAnimationFrame(d);
      else {
        var w = qa(function (C, E) {
          return Eu.apply(void 0, Zh(E).concat([n(1)]));
        }, a);
        o(Zt(Zt(Zt({}, e), t), w));
      }
    };
  return (
    (d = n.isStepper ? y : S),
    function () {
      return (
        requestAnimationFrame(d),
        function () {
          cancelAnimationFrame(s);
        }
      );
    }
  );
};
function Ji(e) {
  "@babel/helpers - typeof";
  return (
    (Ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ji(e)
  );
}
var sO = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function uO(e, t) {
  if (e == null) return {};
  var n = cO(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function cO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function pf(e) {
  return pO(e) || vO(e) || dO(e) || fO();
}
function fO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dO(e, t) {
  if (e) {
    if (typeof e == "string") return Vd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vd(e, t);
  }
}
function vO(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function pO(e) {
  if (Array.isArray(e)) return Vd(e);
}
function Vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function eg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? eg(Object(n), !0).forEach(function (r) {
          ja(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : eg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ja(e, t, n) {
  return (
    (t = xS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, xS(r.key), r);
  }
}
function gO(e, t, n) {
  return (
    t && hO(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function xS(e) {
  var t = yO(e, "string");
  return Ji(t) === "symbol" ? t : String(t);
}
function yO(e, t) {
  if (Ji(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ji(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function SO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wd(e, t);
}
function Wd(e, t) {
  return (
    (Wd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Wd(e, t)
  );
}
function bO(e) {
  var t = wO();
  return function () {
    var r = Ou(e),
      o;
    if (t) {
      var i = Ou(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return Ud(this, o);
  };
}
function Ud(e, t) {
  if (t && (Ji(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Kd(e);
}
function Kd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wO() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ou(e) {
  return (
    (Ou = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ou(e)
  );
}
var sc = (function (e) {
  SO(n, e);
  var t = bO(n);
  function n(r, o) {
    var i;
    mO(this, n), (i = t.call(this, r, o));
    var a = i.props,
      l = a.isActive,
      s = a.attributeName,
      u = a.from,
      c = a.to,
      d = a.steps,
      v = a.children,
      g = a.duration;
    if (
      ((i.handleStyleChange = i.handleStyleChange.bind(Kd(i))),
      (i.changeStyle = i.changeStyle.bind(Kd(i))),
      !l || g <= 0)
    )
      return (
        (i.state = { style: {} }),
        typeof v == "function" && (i.state = { style: c }),
        Ud(i)
      );
    if (d && d.length) i.state = { style: d[0].style };
    else if (u) {
      if (typeof v == "function") return (i.state = { style: u }), Ud(i);
      i.state = { style: s ? ja({}, s, u) : u };
    } else i.state = { style: {} };
    return i;
  }
  return (
    gO(n, [
      {
        key: "componentDidMount",
        value: function () {
          var o = this.props,
            i = o.isActive,
            a = o.canBegin;
          (this.mounted = !0), !(!i || !a) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (o) {
          var i = this.props,
            a = i.isActive,
            l = i.canBegin,
            s = i.attributeName,
            u = i.shouldReAnimate,
            c = i.to,
            d = i.from,
            v = this.state.style;
          if (l) {
            if (!a) {
              var g = { style: s ? ja({}, s, c) : c };
              this.state &&
                v &&
                ((s && v[s] !== c) || (!s && v !== c)) &&
                this.setState(g);
              return;
            }
            if (!(P2(o.to, c) && o.canBegin && o.isActive)) {
              var y = !o.canBegin || !o.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var S = y || u ? d : o.to;
              if (this.state && v) {
                var b = { style: s ? ja({}, s, S) : S };
                ((s && v[s] !== S) || (!s && v !== S)) && this.setState(b);
              }
              this.runAnimation(
                ur(ur({}, this.props), {}, { from: S, begin: 0 })
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var o = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            o && o();
        },
      },
      {
        key: "handleStyleChange",
        value: function (o) {
          this.changeStyle(o);
        },
      },
      {
        key: "changeStyle",
        value: function (o) {
          this.mounted && this.setState({ style: o });
        },
      },
      {
        key: "runJSAnimation",
        value: function (o) {
          var i = this,
            a = o.from,
            l = o.to,
            s = o.duration,
            u = o.easing,
            c = o.begin,
            d = o.onAnimationEnd,
            v = o.onAnimationStart,
            g = lO(a, l, Q2(u), s, this.changeStyle),
            y = function () {
              i.stopJSAnimation = g();
            };
          this.manager.start([v, c, y, s, d]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (o) {
          var i = this,
            a = o.steps,
            l = o.begin,
            s = o.onAnimationStart,
            u = a[0],
            c = u.style,
            d = u.duration,
            v = d === void 0 ? 0 : d,
            g = function (S, b, h) {
              if (h === 0) return S;
              var p = b.duration,
                m = b.easing,
                w = m === void 0 ? "ease" : m,
                C = b.style,
                E = b.properties,
                x = b.onAnimationEnd,
                R = h > 0 ? a[h - 1] : b,
                P = E || Object.keys(C);
              if (typeof w == "function" || w === "spring")
                return [].concat(pf(S), [
                  i.runJSAnimation.bind(i, {
                    from: R.style,
                    to: C,
                    duration: p,
                    easing: w,
                  }),
                  p,
                ]);
              var _ = Xh(P, p, w),
                j = ur(ur(ur({}, R.style), C), {}, { transition: _ });
              return [].concat(pf(S), [j, p, x]).filter(L2);
            };
          return this.manager.start(
            [s].concat(pf(a.reduce(g, [c, Math.max(v, l)])), [o.onAnimationEnd])
          );
        },
      },
      {
        key: "runAnimation",
        value: function (o) {
          this.manager || (this.manager = N2());
          var i = o.begin,
            a = o.duration,
            l = o.attributeName,
            s = o.to,
            u = o.easing,
            c = o.onAnimationStart,
            d = o.onAnimationEnd,
            v = o.steps,
            g = o.children,
            y = this.manager;
          if (
            ((this.unSubscribe = y.subscribe(this.handleStyleChange)),
            typeof u == "function" || typeof g == "function" || u === "spring")
          ) {
            this.runJSAnimation(o);
            return;
          }
          if (v.length > 1) {
            this.runStepAnimation(o);
            return;
          }
          var S = l ? ja({}, l, s) : s,
            b = Xh(Object.keys(S), a, u);
          y.start([c, i, ur(ur({}, S), {}, { transition: b }), a, d]);
        },
      },
      {
        key: "render",
        value: function () {
          var o = this.props,
            i = o.children;
          o.begin;
          var a = o.duration;
          o.attributeName, o.easing;
          var l = o.isActive;
          o.steps,
            o.from,
            o.to,
            o.canBegin,
            o.onAnimationEnd,
            o.shouldReAnimate,
            o.onAnimationReStart;
          var s = uO(o, sO),
            u = f.Children.count(i),
            c = this.state.style;
          if (typeof i == "function") return i(c);
          if (!l || u === 0 || a <= 0) return i;
          var d = function (g) {
            var y = g.props,
              S = y.style,
              b = S === void 0 ? {} : S,
              h = y.className,
              p = f.cloneElement(
                g,
                ur(ur({}, s), {}, { style: ur(ur({}, b), c), className: h })
              );
            return p;
          };
          return u === 1
            ? d(f.Children.only(i))
            : ne.createElement(
                "div",
                null,
                f.Children.map(i, function (v) {
                  return d(v);
                })
              );
        },
      },
    ]),
    n
  );
})(f.PureComponent);
sc.displayName = "Animate";
sc.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
sc.propTypes = {
  from: ke.oneOfType([ke.object, ke.string]),
  to: ke.oneOfType([ke.object, ke.string]),
  attributeName: ke.string,
  duration: ke.number,
  begin: ke.number,
  easing: ke.oneOfType([ke.string, ke.func]),
  steps: ke.arrayOf(
    ke.shape({
      duration: ke.number.isRequired,
      style: ke.object.isRequired,
      easing: ke.oneOfType([
        ke.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        ke.func,
      ]),
      properties: ke.arrayOf("string"),
      onAnimationEnd: ke.func,
    })
  ),
  children: ke.oneOfType([ke.node, ke.func]),
  isActive: ke.bool,
  canBegin: ke.bool,
  onAnimationEnd: ke.func,
  shouldReAnimate: ke.bool,
  onAnimationStart: ke.func,
  onAnimationReStart: ke.func,
};
function We() {
  return (
    (We = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    We.apply(null, arguments)
  );
}
function CO(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function bl(e, t) {
  return (
    (bl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    bl(e, t)
  );
}
function Ue(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
ke.object, ke.object, ke.object, ke.element;
ke.object, ke.object, ke.object, ke.oneOfType([ke.array, ke.element]), ke.any;
const xO = "images/display-BfKZ46GT.png",
  ES =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA0CAYAAAA5bTAhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8/SURBVHgB7VprjF1VFV7rnHvn3bkzfdAWCp1C1YSAbcFHSECrooIIEpWQEA01Mf4w0fLPRAH7x/hDTAjhjzE8VaIUSYMQa6htSYuSSnmoDCCFFvocattpZ6b3cc7Zy7X2XnuffW87pSWlQOJpz5zHfpz9rfda+yJ8iI+hFduH5AJYWQhEi1J+oARHpM2YfOP4/Ys2Hm8cwofkGLr++SEYGloKBpYA4nJ+tRQRRlxrBIOIH90zAa3hv99h8OPxXBX4AB8W6IyBFYziawxkCZAZRgZEfPBfFLAMDOyt/UvIT44EZK/XYwIv8tOqeN4PHKct0IG+5QxuJa97edmCig4DSnsITiQmhaWBZbRFHEbRm1c2b71g9erVxjd8YEA7sD0reV23MB9rlpMYYWM0wmWPxyJHZSop2+PDPxn65/hDF36S73IrIYj0vou3BdtXWcmLvIVMUcNII63A8j95tvgCF+XJNtoDncyHFj9c/pi88RI4NTbcrQB4H3VawJoeWEmYrGRTO4TKV7Ly6UTW9w0wLQUUrO0cibo+k4q60gCyN9bcOXPmzMrBgwcFsBXxMw5aJGzGDc9+lip0Hy9xBHkdgpOorRsCdYyzok3t773E2/FIgfuWAIywcWBN/dmf7asDpPrWEuiMgj7vpk3DtRu33J6wkWK5Q+GGKiMGvVT7S+AMM6ugZbv2DBbaWWcmmY4Lc/BL46QF87ee/B3fJIODg3jkyJEgOQmcoWPgm5uWH87S51iUVwKxpPGJVPCq5T63z8RXMtpmuI2YMPJsbF97LZ+N3JO+IzI5SX+ZS/pSa/LV+vO/eIU/XTBgGhkZoVWrVll6nRFOD379qVXMg9tJQKqLKcUZVY8huKOozesshi4q32QgWC33VtvcfygOvfJQd3d33mw2RZeLvr4+w6Dt2PcUdO2ax4dNV/8feRmfA5Pp8lSaiZxnxTZXUxovFdVS7MHpNMbRlz2JYqPtifrab9Yx4GxgYCCbnJzMzzrrLDM6Ovrecrp27WOLKO1ZzywZcVZKoydwSgrlU7jzFAlXghB5BSYaNwhV773oqItywxqHNtb3/P0Qv2hVKhWhttm4caPxa3tPQFvA2LWejFmI5XoVDKLzvW7RNqJ07kYjqjaXFeyWHYvOJznuSpwB3qU7V+2+hGZy53p+K2Cz8fFxNhhQ6BR2rtNuyPqvf2JpAZWtZDmcsb3JreEJxkiMljFk31vD4wyXvTf+WQyY9BHbLM+ZGjU/JrP9SA0bgjOCqHO1Xn1wnQctgJcvXy5gA6dPWxgqHOv/ymNL0zRhKhOnfEmZCZSsddFjxNn2SQCC4CuHETt7oRd01Fi7jL3lyKeebW24+VtJkkz29vZOcFDSkLcx6NPCaQE8dO0fliVo/srcGHIcyDxn5JvqmsqTLbnltutTuCvo1XLPuh/PUXFH3jXJOxQc0pe5jEjBbYFpHnmZDViepmkmURhzOSQa/jgdOo1DV967yFQHHwUsht2b8jPqaoLrgSj68L2sXkN7VEZhvOp06bPaozfH9GDQzNSuf/T09FiLzb65mDNnDmmiAacLNNa+cM8iU+lbz2Z1YaCnhpWaLrSJX2nIvdXWBiQo7ZJDABhjJW/XA4Yox/BRGhaTY2+1Gg3rm3fs2EF8mhjw6QANedL9KC9jIVkxxpgHZQLs4k1SPqF3t871Rn0gOOQ4OUYd4n2Tm8V4x6fhqv1vJlqjv5KsKtezON6a361OW1Ed+OL9d/JaljjLyapjvB66cDDocLDCeQg7ne5ai4thPHWEpPbZjXX93Fw2BHXWGv2ctn9e361AbUbF+mzp07n4U+a0Ey2E/ivv5fyXfugI6mdGZWkobWBI/AiCdfZ21I8pV+UVGCnKG30uEdSGxGGjxV7GoPK+yI/EoEWfj4fhlEEL4Nrn7zo/M8VtkQ765SOEwo0ehiCUBXxoGWjhvZJC1uqIr+1F8yBRsGJo3aEnQ9B5wxxv7mQ3VdTrdWuxuUR0XNApnMKhi0o2bx96jh/mufCJP8Ykd7wQkovoGZcRaIDNhEeXIRh0ptqgSz4MejbZqSxvXT9n5uwcKiY6p1VlUXL77CjEc1l9yyafPLp97WYuGrQuvPDCbO/eveZ4OE6J0wK474q7fkpYnIfOvKKvUJCG/XGGRJoPQ1zMi2oiJedd/7ac+Rj3pXNQpEohwiEtJBhLHfbPctJ0OE7FkGH3ZavO52/cjpHx8IaLosDDGysXYBRQBhmyKB9I2PARXUhaUGTkkEIgUpAPN9tCVhMZRZM5o+mCHx9umhtuuGFa0CfNaZ4keXzPwC/tQqzKted0kbVxwb+JQkOIk+cyBbZGEXxK4qsl7YlJMIk++ISylhZHqFYajPEfE31u+/C7AY1P7Fm2gue4TtyM+kdoK9bZT6BKKZShdjmFl0IfTyMFCQ8i25GTRd/x8Ta0twV/bjWCBgX6ggULYNeuXdOCOSnQl156aWXUJLeqry+zQdB0L7igUqnb9Q5C3OXdTkkJZU1U//IxjB8bxW1Qjg/9vUjxxQzOmDEDGTCdCM/JgE5eSq+9mQOBEW+0QpFd/pm2GBOd4PsoS2Fq+Q8jA+bnoWjvSd950UXNznxBIYTzar3U8ifBSRClCyYmJt4R0DuBlrnYreFPbASlmTpFyiYKbI2mix5JkwcM4upBlbKM4Eu31tj6cqdKtdcZTCjUdju2dGLKkxMzVwEGOkfuWbxPyO1pQXuf3HPJj1awVRwBAL/Z4ImhrkrfGYgtS5lWCFHa/JgbLpacp0cD3vhgewZl08dorvK7/q23ZXGEdG73WZ8YKordjba+JwsaXWqSEKY/trFvmd6UC6CIO9JunHwT+MgqRKWg4Es5l7CGXQx2pEBE4S+GvasOv+7uvdVAtWW6ttnLLkqP7NsLJwA9nZ+2gHsuXmm5jL4sIwpsfP1Z9sNyxxFT1qvdadAlCQZdUsDJQiF1aZs0kBsryb/Ml/tign2vJR8s/bGrjbu6doGh8ODLTxC+69oqPRdlWZacyE9PRw3kMK76RvWqdZQkVzgyB/a1KXSbK6TgRTB6xqB/qhEQF/LCQtxzSDWDw4/6lMW/tnuA6Lsmf7r54p1X81PdURaPAT+deCevF5csgipdDhKMaPqr4TTbmERiX0LvUUqnHOuXXUZpyYNDb9fdQC9fX2jTW08jCkZcvluGvzHT/GIu6l18da2+7c8NmOaYFjRUZ1znCgOgpZ3ExbZCYhv5hPX7DAjjtUaWJ7gbDV2URtDBfQybcRhNpjpuyS4Rq35SLZ8GQqh2xLGh1sJZS7jTOrUXx3C6M8uyusxnNZ3zqQe5f819wZDPiGxGZWNGn0nZNgjZkWvX4N+4sdb+aCZlJaQc79gjWZVmZxDm1LHld8HX2RoHHuG9qi1Q7V1a9iXXztckTWF+99ifeA+rOB7oTk4TVxvSv20fXsQGYqGGSgCli3KmuIwUEQIHHb80fUaIalzeW4NqY6zLZQHQkZcI4rIvxtENE2UCDr18W7Z38wuWYzM/ujadd8WdgJV5QcScYFyzq7GIy9C79vOEx9TI2qy3qCs79RT6Bq9ViwlannUWVncTnSW3V7WoBYQyrs+GwJV/ENSyBmucUTlv2HUEmyHZvNjNR8Fia1kon3oB9z39Xdr/zFbQGlhx8D+7W6P33Ej1sfshlJtseXmwa9b53xZ8Emt0MLYdtHSYmppKOXD4KjmX492GmEVxHWIQeRv08Fqa2H03A5hUVxK7KqKjbz/AC3lA3FTpYoRoduvVira02dTSpZ5E6qY8UD8f188ni4m9d5vXf/+D1sHRnXmey65F05/VarWVvbHm1zC26RuYTT0VGIL4fYHErusYD9Vp/VKuK/WMz7xqAiASNe8WrNk0+4qxZ27BqTfHqH/h3HT2khVUGbgKNN8yrUP34a61D/DiIK1dMC+dye1d/VdBrCUUqOzzy6jRewAzCa3xR8zeLQ8Xzf1HlLst0K2arq4uaLVa1v7IIQxk/2yqZ3/mYhg493uAyaeTov7lyxb8d/2GDRvyWMTTDtDVYs6Xlpskvak0VnLN96FpvGgaBx+jPU/fgc19+2VZRf3AEZx4bVPSPfw2pj0foaL5PO584g6Rbd5WMdw+UYy/vBlp6i8JJNswrQ5wG5/U5WhI4I2QK/8UU5DXt5D7zs/h8L+fKbLJuoIVF1TXs1EUhXA65z3ogsGzcBpBT9nh7TvNgX+t7u6t/TaDnnO2v7D2FTHuvGtJx3CaN6wTPruq51z+sUrW7Dd5fSDPGr1Y33GAueb7iQktePKCqWrH8z3yfZrWzp+PjfGJvHnwsPYz2p5Ku3CCt00Tmas65+OLC6gOJNX+edIpLer7zNT+fcXkjr3cR+YtuJ8sMuPxwqUmnw0mZJOLfk3wJVge2t/fX2UC9DQaDSYkVFQCWrwJf1QOJZKGgNgOGpwll4F9wg0e3M9je/U9Koi4iO4LsBUof8hitM1umPEcCc9R0T4VBiAiKODRE1JAiiqoaFPHHC09m7y53uCtGvvM2zWGx9G2bduseHMOXeWUkndzeioMPtXxreHh4aOzZs1qLFu2LH/44YeNj85ilxUMPg82Dbc10lSu+sUIe1vcLtQ3TPXEA2KAyACN/uTBboSrzkm76FyV57EEYpCJJ7gAtmJZfkOIlfH89uR1CGdbCjjjgkaxdetWX+WUcLkYHR21QTj3jRkgaxTCAIOGWKd9xiLBS8J5aJdQ7PDhw8LhKgOoMgBvYGTijMUpZwuf6QItKBallCUpiaQhYyobmZdFr8JnlXWuyouq6hgr7koo6OBwwbXrFhM0VyJn8+fPz7mc67dbi/DrwRJDytxPeUw6NjZmQXMZmLgi6ufwc0csdol/wlQT8e4f4oOvc/icp+dcPmfLe7buYoxEBXr1HGCANWnjD0mNaoCJ18uL6OH7Hu07WKvVhqM5Jdk/V04GKNcFTLiz/Xf4HJ49e/YMnb9bpSVIR8e6/SlgK4qhW88qu6wUOl1zx73vkM6dOzdhqiF/HHmv1/B9zA0rXhy9IUsGsrglixcvBhElFj/DOkZ+S4Wrkj60jU+MrqRcAf5mEX0nPoPqwfQHsiGODbP4aIh/CHvMoUm5BazUqfqTwVXknVj4joW3AYraMeaCvrec0Dm7mEjCCc8VuXbJd6SP/1Y0x0kd8TdPZWxYpC40APO/9fIb6J0fc1US8nMcd27thxGg4xExLi/9/zhdx/8A0SBG/mqbN8EAAAAASUVORK5CYII=",
  EO = ({ size: e, icon: t, title: n, onClick: r, showShadow: o = !1 }) =>
    ee.jsxs("div", {
      style: {
        width: e === "s" ? 30 : 70,
        height: e === "s" ? 30 : 70,
        boxShadow: e === "s" && o ? "white 0px 0px 4px" : "",
        marginBlock: e === "s" ? "" : "25px",
        padding: 5,
      },
      onClick: r,
      children: [
        ee.jsx("img", {
          className: "image",
          style: { width: "100%", height: "100%" },
          src: t,
        }),
        e !== "s" &&
          ee.jsx("h5", {
            style: {
              margin: 1,
              textAlign: "center",
              fontWeight: 500,
              fontSize: 12,
              color: "white",
            },
            children: n,
          }),
      ],
    });
function Jt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var OO = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  tg = OO,
  mf = () => Math.random().toString(36).substring(7).split("").join("."),
  RO = {
    INIT: `@@redux/INIT${mf()}`,
    REPLACE: `@@redux/REPLACE${mf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mf()}`,
  },
  Ru = RO;
function qp(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function OS(e, t, n) {
  if (typeof e != "function") throw new Error(Jt(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Jt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Jt(1));
    return n(OS)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    a = i,
    l = 0,
    s = !1;
  function u() {
    a === i &&
      ((a = new Map()),
      i.forEach((b, h) => {
        a.set(h, b);
      }));
  }
  function c() {
    if (s) throw new Error(Jt(3));
    return o;
  }
  function d(b) {
    if (typeof b != "function") throw new Error(Jt(4));
    if (s) throw new Error(Jt(5));
    let h = !0;
    u();
    const p = l++;
    return (
      a.set(p, b),
      function () {
        if (h) {
          if (s) throw new Error(Jt(6));
          (h = !1), u(), a.delete(p), (i = null);
        }
      }
    );
  }
  function v(b) {
    if (!qp(b)) throw new Error(Jt(7));
    if (typeof b.type > "u") throw new Error(Jt(8));
    if (typeof b.type != "string") throw new Error(Jt(17));
    if (s) throw new Error(Jt(9));
    try {
      (s = !0), (o = r(o, b));
    } finally {
      s = !1;
    }
    return (
      (i = a).forEach((p) => {
        p();
      }),
      b
    );
  }
  function g(b) {
    if (typeof b != "function") throw new Error(Jt(10));
    (r = b), v({ type: Ru.REPLACE });
  }
  function y() {
    const b = d;
    return {
      subscribe(h) {
        if (typeof h != "object" || h === null) throw new Error(Jt(11));
        function p() {
          const w = h;
          w.next && w.next(c());
        }
        return p(), { unsubscribe: b(p) };
      },
      [tg]() {
        return this;
      },
    };
  }
  return (
    v({ type: Ru.INIT }),
    { dispatch: v, subscribe: d, getState: c, replaceReducer: g, [tg]: y }
  );
}
function PO(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Ru.INIT }) > "u") throw new Error(Jt(12));
    if (typeof n(void 0, { type: Ru.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Jt(13));
  });
}
function IO(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    typeof e[a] == "function" && (n[a] = e[a]);
  }
  const r = Object.keys(n);
  let o;
  try {
    PO(n);
  } catch (i) {
    o = i;
  }
  return function (a = {}, l) {
    if (o) throw o;
    let s = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c],
        v = n[d],
        g = a[d],
        y = v(g, l);
      if (typeof y > "u") throw (l && l.type, new Error(Jt(14)));
      (u[d] = y), (s = s || y !== g);
    }
    return (s = s || r.length !== Object.keys(a).length), s ? u : a;
  };
}
function Pu(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function $O(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Jt(15));
    };
    const a = { getState: o.getState, dispatch: (s, ...u) => i(s, ...u) },
      l = e.map((s) => s(a));
    return (i = Pu(...l)(o.dispatch)), { ...o, dispatch: i };
  };
}
function TO(e) {
  return qp(e) && "type" in e && typeof e.type == "string";
}
var RS = Symbol.for("immer-nothing"),
  ng = Symbol.for("immer-draftable"),
  Un = Symbol.for("immer-state");
function hr(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ea = Object.getPrototypeOf;
function ri(e) {
  return !!e && !!e[Un];
}
function Xr(e) {
  var t;
  return e
    ? PS(e) ||
        Array.isArray(e) ||
        !!e[ng] ||
        !!((t = e.constructor) != null && t[ng]) ||
        cc(e) ||
        fc(e)
    : !1;
}
var MO = Object.prototype.constructor.toString();
function PS(e) {
  if (!e || typeof e != "object") return !1;
  const t = ea(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === MO;
}
function Iu(e, t) {
  uc(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function uc(e) {
  const t = e[Un];
  return t ? t.type_ : Array.isArray(e) ? 1 : cc(e) ? 2 : fc(e) ? 3 : 0;
}
function Gd(e, t) {
  return uc(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function IS(e, t, n) {
  const r = uc(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function _O(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function cc(e) {
  return e instanceof Map;
}
function fc(e) {
  return e instanceof Set;
}
function Do(e) {
  return e.copy_ || e.base_;
}
function qd(e, t) {
  if (cc(e)) return new Map(e);
  if (fc(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = PS(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Un];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const a = o[i],
        l = r[a];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[a] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[a],
          });
    }
    return Object.create(ea(e), r);
  } else {
    const r = ea(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Xp(e, t = !1) {
  return (
    dc(e) ||
      ri(e) ||
      !Xr(e) ||
      (uc(e) > 1 && (e.set = e.add = e.clear = e.delete = AO),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => Xp(r, !0))),
    e
  );
}
function AO() {
  hr(2);
}
function dc(e) {
  return Object.isFrozen(e);
}
var NO = {};
function oi(e) {
  const t = NO[e];
  return t || hr(0, e), t;
}
var wl;
function $S() {
  return wl;
}
function FO(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function rg(e, t) {
  t &&
    (oi("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Xd(e) {
  Qd(e), e.drafts_.forEach(jO), (e.drafts_ = null);
}
function Qd(e) {
  e === wl && (wl = e.parent_);
}
function og(e) {
  return (wl = FO(wl, e));
}
function jO(e) {
  const t = e[Un];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ig(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Un].modified_ && (Xd(t), hr(4)),
        Xr(e) && ((e = $u(t, e)), t.parent_ || Tu(t, e)),
        t.patches_ &&
          oi("Patches").generateReplacementPatches_(
            n[Un].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = $u(t, n, [])),
    Xd(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== RS ? e : void 0
  );
}
function $u(e, t, n) {
  if (dc(t)) return t;
  const r = t[Un];
  if (!r) return Iu(t, (o, i) => ag(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Tu(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      a = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (a = !0)),
      Iu(i, (l, s) => ag(e, r, o, l, s, n, a)),
      Tu(e, o, !1),
      n &&
        e.patches_ &&
        oi("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function ag(e, t, n, r, o, i, a) {
  if (ri(o)) {
    const l =
        i && t && t.type_ !== 3 && !Gd(t.assigned_, r) ? i.concat(r) : void 0,
      s = $u(e, o, l);
    if ((IS(n, r, s), ri(s))) e.canAutoFreeze_ = !1;
    else return;
  } else a && n.add(o);
  if (Xr(o) && !dc(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    $u(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Tu(e, o);
  }
}
function Tu(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Xp(t, n);
}
function zO(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : $S(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = Qp;
  n && ((o = [r]), (i = Cl));
  const { revoke: a, proxy: l } = Proxy.revocable(o, i);
  return (r.draft_ = l), (r.revoke_ = a), l;
}
var Qp = {
    get(e, t) {
      if (t === Un) return e;
      const n = Do(e);
      if (!Gd(n, t)) return LO(e, n, t);
      const r = n[t];
      return e.finalized_ || !Xr(r)
        ? r
        : r === hf(e.base_, t)
        ? (gf(e), (e.copy_[t] = Zd(r, e)))
        : r;
    },
    has(e, t) {
      return t in Do(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Do(e));
    },
    set(e, t, n) {
      const r = TS(Do(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = hf(Do(e), t),
          i = o == null ? void 0 : o[Un];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (_O(n, o) && (n !== void 0 || Gd(e.base_, t))) return !0;
        gf(e), Yd(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        hf(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), gf(e), Yd(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Do(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      hr(11);
    },
    getPrototypeOf(e) {
      return ea(e.base_);
    },
    setPrototypeOf() {
      hr(12);
    },
  },
  Cl = {};
Iu(Qp, (e, t) => {
  Cl[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Cl.deleteProperty = function (e, t) {
  return Cl.set.call(this, e, t, void 0);
};
Cl.set = function (e, t, n) {
  return Qp.set.call(this, e[0], t, n, e[0]);
};
function hf(e, t) {
  const n = e[Un];
  return (n ? Do(n) : e)[t];
}
function LO(e, t, n) {
  var o;
  const r = TS(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0;
}
function TS(e, t) {
  if (!(t in e)) return;
  let n = ea(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = ea(n);
  }
}
function Yd(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Yd(e.parent_));
}
function gf(e) {
  e.copy_ || (e.copy_ = qd(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var DO = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const a = this;
          return function (s = i, ...u) {
            return a.produce(s, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && hr(6),
          r !== void 0 && typeof r != "function" && hr(7);
        let o;
        if (Xr(t)) {
          const i = og(this),
            a = Zd(t, void 0);
          let l = !0;
          try {
            (o = n(a)), (l = !1);
          } finally {
            l ? Xd(i) : Qd(i);
          }
          return rg(i, r), ig(o, i);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === RS && (o = void 0),
            this.autoFreeze_ && Xp(o, !0),
            r)
          ) {
            const i = [],
              a = [];
            oi("Patches").generateReplacementPatches_(t, o, i, a), r(i, a);
          }
          return o;
        } else hr(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (a, ...l) => this.produceWithPatches(a, (s) => t(s, ...l));
        let r, o;
        return [
          this.produce(t, n, (a, l) => {
            (r = a), (o = l);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Xr(e) || hr(8), ri(e) && (e = kO(e));
    const t = og(this),
      n = Zd(e, void 0);
    return (n[Un].isManual_ = !0), Qd(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Un];
    (!n || !n.isManual_) && hr(9);
    const { scope_: r } = n;
    return rg(r, t), ig(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = oi("Patches").applyPatches_;
    return ri(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function Zd(e, t) {
  const n = cc(e)
    ? oi("MapSet").proxyMap_(e, t)
    : fc(e)
    ? oi("MapSet").proxySet_(e, t)
    : zO(e, t);
  return (t ? t.scope_ : $S()).drafts_.push(n), n;
}
function kO(e) {
  return ri(e) || hr(10, e), MS(e);
}
function MS(e) {
  if (!Xr(e) || dc(e)) return e;
  const t = e[Un];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = qd(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = qd(e, !0);
  return (
    Iu(n, (r, o) => {
      IS(n, r, MS(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Kn = new DO(),
  _S = Kn.produce;
Kn.produceWithPatches.bind(Kn);
Kn.setAutoFreeze.bind(Kn);
Kn.setUseStrictShallowCopy.bind(Kn);
Kn.applyPatches.bind(Kn);
Kn.createDraft.bind(Kn);
Kn.finishDraft.bind(Kn);
function AS(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : o(i);
}
var BO = AS(),
  HO = AS,
  VO =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Pu
              : Pu.apply(null, arguments);
        };
function lg(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(Sr(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => TO(r) && r.type === e),
    n
  );
}
var NS = class za extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, za.prototype);
  }
  static get [Symbol.species]() {
    return za;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new za(...t[0].concat(this))
      : new za(...t.concat(this));
  }
};
function sg(e) {
  return Xr(e) ? _S(e, () => {}) : e;
}
function ug(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Sr(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function WO(e) {
  return typeof e == "boolean";
}
var UO = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let a = new NS();
      return n && (WO(n) ? a.push(BO) : a.push(HO(n.extraArgument))), a;
    },
  KO = "RTK_autoBatch",
  FS = (e) => (t) => {
    setTimeout(t, e);
  },
  GO =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : FS(10),
  qO =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        a = !1;
      const l = new Set(),
        s =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? GO
            : e.type === "callback"
            ? e.queueNotification
            : FS(e.timeout),
        u = () => {
          (a = !1), i && ((i = !1), l.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const d = () => o && c(),
            v = r.subscribe(d);
          return (
            l.add(c),
            () => {
              v(), l.delete(c);
            }
          );
        },
        dispatch(c) {
          var d;
          try {
            return (
              (o = !((d = c == null ? void 0 : c.meta) != null && d[KO])),
              (i = !o),
              i && (a || ((a = !0), s(u))),
              r.dispatch(c)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  XO = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new NS(e);
      return r && o.push(qO(typeof r == "object" ? r : void 0)), o;
    };
function QO(e) {
  const t = UO(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: a = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (qp(n)) l = IO(n);
  else throw new Error(Sr(1));
  let s;
  typeof r == "function" ? (s = r(t)) : (s = t());
  let u = Pu;
  o && (u = VO({ trace: !1, ...(typeof o == "object" && o) }));
  const c = $O(...s),
    d = XO(c);
  let v = typeof a == "function" ? a(d) : d();
  const g = u(...v);
  return OS(l, i, g);
}
function jS(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, a) {
      const l = typeof i == "string" ? i : i.type;
      if (!l) throw new Error(Sr(28));
      if (l in t) throw new Error(Sr(29));
      return (t[l] = a), o;
    },
    addMatcher(i, a) {
      return n.push({ matcher: i, reducer: a }), o;
    },
    addDefaultCase(i) {
      return (r = i), o;
    },
  };
  return e(o), [t, n, r];
}
function YO(e) {
  return typeof e == "function";
}
function ZO(e, t) {
  let [n, r, o] = jS(t),
    i;
  if (YO(e)) i = () => sg(e());
  else {
    const l = sg(e);
    i = () => l;
  }
  function a(l = i(), s) {
    let u = [
      n[s.type],
      ...r.filter(({ matcher: c }) => c(s)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [o]),
      u.reduce((c, d) => {
        if (d)
          if (ri(c)) {
            const g = d(c, s);
            return g === void 0 ? c : g;
          } else {
            if (Xr(c)) return _S(c, (v) => d(v, s));
            {
              const v = d(c, s);
              if (v === void 0) {
                if (c === null) return c;
                throw new Error(Sr(9));
              }
              return v;
            }
          }
        return c;
      }, l)
    );
  }
  return (a.getInitialState = i), a;
}
var JO = Symbol.for("rtk-slice-createasyncthunk");
function eR(e, t) {
  return `${e}/${t}`;
}
function tR({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[JO];
  return function (o) {
    const { name: i, reducerPath: a = i } = o;
    if (!i) throw new Error(Sr(11));
    typeof process < "u";
    const l =
        (typeof o.reducers == "function" ? o.reducers(oR()) : o.reducers) || {},
      s = Object.keys(l),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(m, w) {
          const C = typeof m == "string" ? m : m.type;
          if (!C) throw new Error(Sr(12));
          if (C in u.sliceCaseReducersByType) throw new Error(Sr(13));
          return (u.sliceCaseReducersByType[C] = w), c;
        },
        addMatcher(m, w) {
          return u.sliceMatchers.push({ matcher: m, reducer: w }), c;
        },
        exposeAction(m, w) {
          return (u.actionCreators[m] = w), c;
        },
        exposeCaseReducer(m, w) {
          return (u.sliceCaseReducersByName[m] = w), c;
        },
      };
    s.forEach((m) => {
      const w = l[m],
        C = {
          reducerName: m,
          type: eR(i, m),
          createNotation: typeof o.reducers == "function",
        };
      aR(w) ? sR(C, w, c, t) : iR(C, w, c);
    });
    function d() {
      const [m = {}, w = [], C = void 0] =
          typeof o.extraReducers == "function"
            ? jS(o.extraReducers)
            : [o.extraReducers],
        E = { ...m, ...u.sliceCaseReducersByType };
      return ZO(o.initialState, (x) => {
        for (let R in E) x.addCase(R, E[R]);
        for (let R of u.sliceMatchers) x.addMatcher(R.matcher, R.reducer);
        for (let R of w) x.addMatcher(R.matcher, R.reducer);
        C && x.addDefaultCase(C);
      });
    }
    const v = (m) => m,
      g = new Map();
    let y;
    function S(m, w) {
      return y || (y = d()), y(m, w);
    }
    function b() {
      return y || (y = d()), y.getInitialState();
    }
    function h(m, w = !1) {
      function C(x) {
        let R = x[m];
        return typeof R > "u" && w && (R = b()), R;
      }
      function E(x = v) {
        const R = ug(g, w, { insert: () => new WeakMap() });
        return ug(R, x, {
          insert: () => {
            const P = {};
            for (const [_, j] of Object.entries(o.selectors ?? {}))
              P[_] = nR(j, x, b, w);
            return P;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: E,
        get selectors() {
          return E(C);
        },
        selectSlice: C,
      };
    }
    const p = {
      name: i,
      reducer: S,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: b,
      ...h(a),
      injectInto(m, { reducerPath: w, ...C } = {}) {
        const E = w ?? a;
        return (
          m.inject({ reducerPath: E, reducer: S }, C), { ...p, ...h(E, !0) }
        );
      },
    };
    return p;
  };
}
function nR(e, t, n, r) {
  function o(i, ...a) {
    let l = t(i);
    return typeof l > "u" && r && (l = n()), e(l, ...a);
  }
  return (o.unwrapped = e), o;
}
var rR = tR();
function oR() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function iR({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (n && !lR(r)) throw new Error(Sr(17));
    (i = r.reducer), (a = r.prepare);
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, a ? lg(e, a) : lg(e));
}
function aR(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function lR(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function sR({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Sr(18));
  const {
      payloadCreator: i,
      fulfilled: a,
      pending: l,
      rejected: s,
      settled: u,
      options: c,
    } = n,
    d = o(e, i, c);
  r.exposeAction(t, d),
    a && r.addCase(d.fulfilled, a),
    l && r.addCase(d.pending, l),
    s && r.addCase(d.rejected, s),
    u && r.addMatcher(d.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: a || ws,
      pending: l || ws,
      rejected: s || ws,
      settled: u || ws,
    });
}
function ws() {}
function Sr(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const uR = {
    checkedValue: "1",
    instructionIncludes: [0, 1],
    steps: ['Run the "Wireshark"'],
    runWireShark: !1,
    selectedInvesigation: 0,
    isDragStart: !1,
    showWiresharkDetails: !1,
    selectedRow: 0,
  },
  zS = rR({
    name: "expOne",
    initialState: uR,
    reducers: {
      updateCheckedValue: (e, t) => ({ ...e, checkedValue: t.payload }),
      updateInstructionIncludes: (e, t) => {
        e.instructionIncludes = [...e.instructionIncludes, t.payload];
      },
      updateSteps: (e, t) => ({ ...e, steps: [...e.steps, t.payload] }),
      updateRunWireShark: (e, t) => ({ ...e, runWireShark: t.payload }),
      updateSelectInvestigation: (e, t) => ({
        ...e,
        selectedInvesigation: t.payload,
      }),
      updateIsDragStart: (e, t) => ({ ...e, isDragStart: t.payload }),
      updateShowWireSharkDetails: (e, t) => ({
        ...e,
        showWiresharkDetails: t.payload,
      }),
      updateSelectedRow: (e, t) => ({ ...e, selectedRow: t.payload }),
      updateResetMiddle: (e, t) => ({
        ...e,
        steps: t.payload,
        isDragStart: !1,
        showWiresharkDetails: !1,
        selectedRow: 0,
      }),
      updateReset: (e, t) => ({
        ...e,
        checkedValue: "1",
        instructionIncludes: [0, 1],
        steps: ['Run the "Wireshark"'],
        runWireShark: !1,
        selectedInvesigation: 0,
        isDragStart: !1,
        showWiresharkDetails: !1,
        selectedRow: 0,
      }),
    },
  }),
  {
    updateCheckedValue: xF,
    updateSteps: LS,
    updateInstructionIncludes: EF,
    updateRunWireShark: DS,
    updateSelectInvestigation: cR,
    updateResetMiddle: fR,
    updateIsDragStart: Jd,
    updateShowWireSharkDetails: dR,
    updateSelectedRow: vR,
    updateReset: kS,
  } = zS.actions,
  pR = zS.reducer;
var Yp = f.createContext({});
function BS(e) {
  if (Array.isArray(e)) return e;
}
function mR(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (c) {
      (u = !0), (o = c);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return l;
  }
}
function ev(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zp(e, t) {
  if (e) {
    if (typeof e == "string") return ev(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(e)
        : n === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? ev(e, t)
        : void 0
    );
  }
}
function HS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return BS(e) || mR(e, t) || Zp(e, t) || HS();
}
function Ie(e) {
  "@babel/helpers - typeof";
  return (
    (Ie =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ie(e)
  );
}
function hR(e, t) {
  if (Ie(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ie(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VS(e) {
  var t = hR(e, "string");
  return Ie(t) == "symbol" ? t : t + "";
}
function N(e, t, n) {
  return (
    (t = VS(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yt(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = CO(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      (n = i[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
var WS = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var a = "";
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + " " + a : i + a) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(WS);
var gR = WS.exports;
const me = Uu(gR);
function rn(e, t) {
  yR(e) && (e = "100%");
  var n = SR(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function Cs(e) {
  return Math.min(1, Math.max(0, e));
}
function yR(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function SR(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function US(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function xs(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Uo(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function bR(e, t, n) {
  return { r: rn(e, 255) * 255, g: rn(t, 255) * 255, b: rn(n, 255) * 255 };
}
function cg(e, t, n) {
  (e = rn(e, 255)), (t = rn(t, 255)), (n = rn(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var s = r - o;
    switch (((a = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function yf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function wR(e, t, n) {
  var r, o, i;
  if (((e = rn(e, 360)), (t = rn(t, 100)), (n = rn(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = yf(l, a, e + 1 / 3)), (o = yf(l, a, e)), (i = yf(l, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function tv(e, t, n) {
  (e = rn(e, 255)), (t = rn(t, 255)), (n = rn(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    s = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function CR(e, t, n) {
  (e = rn(e, 360) * 6), (t = rn(t, 100)), (n = rn(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    s = r % 6,
    u = [n, a, i, i, l, n][s],
    c = [l, n, n, a, i, i][s],
    d = [i, i, l, n, n, a][s];
  return { r: u * 255, g: c * 255, b: d * 255 };
}
function nv(e, t, n, r) {
  var o = [
    Uo(Math.round(e).toString(16)),
    Uo(Math.round(t).toString(16)),
    Uo(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function xR(e, t, n, r, o) {
  var i = [
    Uo(Math.round(e).toString(16)),
    Uo(Math.round(t).toString(16)),
    Uo(Math.round(n).toString(16)),
    Uo(ER(r)),
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join("");
}
function ER(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function fg(e) {
  return Ln(e) / 255;
}
function Ln(e) {
  return parseInt(e, 16);
}
function OR(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var rv = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function Ci(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == "string" && (e = IR(e)),
    typeof e == "object" &&
      (jr(e.r) && jr(e.g) && jr(e.b)
        ? ((t = bR(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb"))
        : jr(e.h) && jr(e.s) && jr(e.v)
        ? ((r = xs(e.s)),
          (o = xs(e.v)),
          (t = CR(e.h, r, o)),
          (a = !0),
          (l = "hsv"))
        : jr(e.h) &&
          jr(e.s) &&
          jr(e.l) &&
          ((r = xs(e.s)),
          (i = xs(e.l)),
          (t = wR(e.h, r, i)),
          (a = !0),
          (l = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    (n = US(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var RR = "[-\\+]?\\d+%?",
  PR = "[-\\+]?\\d*\\.\\d+%?",
  po = "(?:".concat(PR, ")|(?:").concat(RR, ")"),
  Sf = "[\\s|\\(]+("
    .concat(po, ")[,|\\s]+(")
    .concat(po, ")[,|\\s]+(")
    .concat(po, ")\\s*\\)?"),
  bf = "[\\s|\\(]+("
    .concat(po, ")[,|\\s]+(")
    .concat(po, ")[,|\\s]+(")
    .concat(po, ")[,|\\s]+(")
    .concat(po, ")\\s*\\)?"),
  cr = {
    CSS_UNIT: new RegExp(po),
    rgb: new RegExp("rgb" + Sf),
    rgba: new RegExp("rgba" + bf),
    hsl: new RegExp("hsl" + Sf),
    hsla: new RegExp("hsla" + bf),
    hsv: new RegExp("hsv" + Sf),
    hsva: new RegExp("hsva" + bf),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function IR(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (rv[e]) (e = rv[e]), (t = !0);
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = cr.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = cr.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = cr.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = cr.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = cr.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = cr.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = cr.hex8.exec(e)),
                          n
                            ? {
                                r: Ln(n[1]),
                                g: Ln(n[2]),
                                b: Ln(n[3]),
                                a: fg(n[4]),
                                format: t ? "name" : "hex8",
                              }
                            : ((n = cr.hex6.exec(e)),
                              n
                                ? {
                                    r: Ln(n[1]),
                                    g: Ln(n[2]),
                                    b: Ln(n[3]),
                                    format: t ? "name" : "hex",
                                  }
                                : ((n = cr.hex4.exec(e)),
                                  n
                                    ? {
                                        r: Ln(n[1] + n[1]),
                                        g: Ln(n[2] + n[2]),
                                        b: Ln(n[3] + n[3]),
                                        a: fg(n[4] + n[4]),
                                        format: t ? "name" : "hex8",
                                      }
                                    : ((n = cr.hex3.exec(e)),
                                      n
                                        ? {
                                            r: Ln(n[1] + n[1]),
                                            g: Ln(n[2] + n[2]),
                                            b: Ln(n[3] + n[3]),
                                            format: t ? "name" : "hex",
                                          }
                                        : !1)))))))));
}
function jr(e) {
  return !!cr.CSS_UNIT.exec(String(e));
}
var tn = (function () {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == "number" && (t = OR(t)), (this.originalInput = t);
      var o = Ci(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          a = t.g / 255,
          l = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (o = l / 12.92)
            : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = US(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = tv(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = tv(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)")
          : "hsva("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(o, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHsl = function () {
        var t = cg(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = cg(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)")
          : "hsla("
              .concat(n, ", ")
              .concat(r, "%, ")
              .concat(o, "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), nv(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), xR(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")")
          : "rgba("
              .concat(t, ", ")
              .concat(n, ", ")
              .concat(r, ", ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return "".concat(Math.round(rn(n, 255) * 100), "%");
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(rn(n, 255) * 100);
        };
        return this.a === 1
          ? "rgb("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%)")
          : "rgba("
              .concat(t(this.r), "%, ")
              .concat(t(this.g), "%, ")
              .concat(t(this.b), "%, ")
              .concat(this.roundA, ")");
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (
          var t = "#" + nv(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(rv);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            a = o[1];
          if (t === a) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith("hex") || t === "name");
        return i
          ? t === "name" && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === "rgb" && (r = this.toRgbString()),
            t === "prgb" && (r = this.toPercentageRgbString()),
            (t === "hex" || t === "hex6") && (r = this.toHexString()),
            t === "hex3" && (r = this.toHexString(!0)),
            t === "hex4" && (r = this.toHex8String(!0)),
            t === "hex8" && (r = this.toHex8String()),
            t === "name" && (r = this.toName()),
            t === "hsl" && (r = this.toHslString()),
            t === "hsv" && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = Cs(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = Cs(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix("white", t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix("black", t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = Cs(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = Cs(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          a = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Es = 2,
  dg = 0.16,
  $R = 0.05,
  TR = 0.05,
  MR = 0.15,
  KS = 5,
  GS = 4,
  _R = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function vg(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = tv(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function Os(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return "#".concat(nv(t, n, r, !1));
}
function AR(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function pg(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Es * t : Math.round(e.h) + Es * t)
      : (r = n ? Math.round(e.h) + Es * t : Math.round(e.h) - Es * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function mg(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - dg * t) : t === GS ? (r = e.s + dg) : (r = e.s + $R * t),
    r > 1 && (r = 1),
    n && t === KS && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function hg(e, t, n) {
  var r;
  return (
    n ? (r = e.v + TR * t) : (r = e.v - MR * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function xl(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Ci(e),
      o = KS;
    o > 0;
    o -= 1
  ) {
    var i = vg(r),
      a = Os(Ci({ h: pg(i, o, !0), s: mg(i, o, !0), v: hg(i, o, !0) }));
    n.push(a);
  }
  n.push(Os(r));
  for (var l = 1; l <= GS; l += 1) {
    var s = vg(r),
      u = Os(Ci({ h: pg(s, l), s: mg(s, l), v: hg(s, l) }));
    n.push(u);
  }
  return t.theme === "dark"
    ? _R.map(function (c) {
        var d = c.index,
          v = c.opacity,
          g = Os(AR(Ci(t.backgroundColor || "#141414"), Ci(n[d]), v * 100));
        return g;
      })
    : n;
}
var wf = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  ov = [
    "#fff1f0",
    "#ffccc7",
    "#ffa39e",
    "#ff7875",
    "#ff4d4f",
    "#f5222d",
    "#cf1322",
    "#a8071a",
    "#820014",
    "#5c0011",
  ];
ov.primary = ov[5];
var iv = [
  "#fff2e8",
  "#ffd8bf",
  "#ffbb96",
  "#ff9c6e",
  "#ff7a45",
  "#fa541c",
  "#d4380d",
  "#ad2102",
  "#871400",
  "#610b00",
];
iv.primary = iv[5];
var av = [
  "#fff7e6",
  "#ffe7ba",
  "#ffd591",
  "#ffc069",
  "#ffa940",
  "#fa8c16",
  "#d46b08",
  "#ad4e00",
  "#873800",
  "#612500",
];
av.primary = av[5];
var lv = [
  "#fffbe6",
  "#fff1b8",
  "#ffe58f",
  "#ffd666",
  "#ffc53d",
  "#faad14",
  "#d48806",
  "#ad6800",
  "#874d00",
  "#613400",
];
lv.primary = lv[5];
var sv = [
  "#feffe6",
  "#ffffb8",
  "#fffb8f",
  "#fff566",
  "#ffec3d",
  "#fadb14",
  "#d4b106",
  "#ad8b00",
  "#876800",
  "#614700",
];
sv.primary = sv[5];
var uv = [
  "#fcffe6",
  "#f4ffb8",
  "#eaff8f",
  "#d3f261",
  "#bae637",
  "#a0d911",
  "#7cb305",
  "#5b8c00",
  "#3f6600",
  "#254000",
];
uv.primary = uv[5];
var cv = [
  "#f6ffed",
  "#d9f7be",
  "#b7eb8f",
  "#95de64",
  "#73d13d",
  "#52c41a",
  "#389e0d",
  "#237804",
  "#135200",
  "#092b00",
];
cv.primary = cv[5];
var fv = [
  "#e6fffb",
  "#b5f5ec",
  "#87e8de",
  "#5cdbd3",
  "#36cfc9",
  "#13c2c2",
  "#08979c",
  "#006d75",
  "#00474f",
  "#002329",
];
fv.primary = fv[5];
var Mu = [
  "#e6f4ff",
  "#bae0ff",
  "#91caff",
  "#69b1ff",
  "#4096ff",
  "#1677ff",
  "#0958d9",
  "#003eb3",
  "#002c8c",
  "#001d66",
];
Mu.primary = Mu[5];
var dv = [
  "#f0f5ff",
  "#d6e4ff",
  "#adc6ff",
  "#85a5ff",
  "#597ef7",
  "#2f54eb",
  "#1d39c4",
  "#10239e",
  "#061178",
  "#030852",
];
dv.primary = dv[5];
var vv = [
  "#f9f0ff",
  "#efdbff",
  "#d3adf7",
  "#b37feb",
  "#9254de",
  "#722ed1",
  "#531dab",
  "#391085",
  "#22075e",
  "#120338",
];
vv.primary = vv[5];
var pv = [
  "#fff0f6",
  "#ffd6e7",
  "#ffadd2",
  "#ff85c0",
  "#f759ab",
  "#eb2f96",
  "#c41d7f",
  "#9e1068",
  "#780650",
  "#520339",
];
pv.primary = pv[5];
var mv = [
  "#a6a6a6",
  "#999999",
  "#8c8c8c",
  "#808080",
  "#737373",
  "#666666",
  "#404040",
  "#1a1a1a",
  "#000000",
  "#000000",
];
mv.primary = mv[5];
var Cf = {
  red: ov,
  volcano: iv,
  orange: av,
  gold: lv,
  yellow: sv,
  lime: uv,
  green: cv,
  cyan: fv,
  blue: Mu,
  geekblue: dv,
  purple: vv,
  magenta: pv,
  grey: mv,
};
function gg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gg(Object(n), !0).forEach(function (r) {
          N(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Tn() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function NR(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var yg = "data-rc-order",
  Sg = "data-rc-priority",
  FR = "rc-util-key",
  hv = new Map();
function qS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith("data-") ? t : "data-".concat(t)) : FR;
}
function vc(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function jR(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Jp(e) {
  return Array.from((hv.get(e) || e).children).filter(function (t) {
    return t.tagName === "STYLE";
  });
}
function XS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Tn()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = jR(r),
    l = a === "prependQueue",
    s = document.createElement("style");
  s.setAttribute(yg, a),
    l && i && s.setAttribute(Sg, "".concat(i)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e);
  var u = vc(t),
    c = u.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || Jp(u)).filter(function (v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(yg)))
          return !1;
        var g = Number(v.getAttribute(Sg) || 0);
        return i >= g;
      });
      if (d.length) return u.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    u.insertBefore(s, c);
  } else u.appendChild(s);
  return s;
}
function QS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = vc(t);
  return (t.styles || Jp(n)).find(function (r) {
    return r.getAttribute(qS(t)) === e;
  });
}
function El(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = QS(e, t);
  if (n) {
    var r = vc(t);
    r.removeChild(n);
  }
}
function zR(e, t) {
  var n = hv.get(e);
  if (!n || !NR(document, n)) {
    var r = XS("", t),
      o = r.parentNode;
    hv.set(e, o), e.removeChild(r);
  }
}
function Wr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = vc(n),
    o = Jp(r),
    i = F(F({}, n), {}, { styles: o });
  zR(r, i);
  var a = QS(t, i);
  if (a) {
    var l, s;
    if (
      (l = i.csp) !== null &&
      l !== void 0 &&
      l.nonce &&
      a.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var u;
      a.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var c = XS(e, i);
  return c.setAttribute(qS(i), t), c;
}
function YS(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function LR(e) {
  return YS(e) instanceof ShadowRoot;
}
function _u(e) {
  return LR(e) ? YS(e) : null;
}
var gv = {},
  DR = function (t) {};
function kR(e, t) {}
function BR(e, t) {}
function HR() {
  gv = {};
}
function ZS(e, t, n) {
  !t && !gv[n] && (e(!1, n), (gv[n] = !0));
}
function $n(e, t) {
  ZS(kR, e, t);
}
function VR(e, t) {
  ZS(BR, e, t);
}
$n.preMessage = DR;
$n.resetWarned = HR;
$n.noteOnce = VR;
function WR(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function UR(e, t) {
  $n(e, "[@ant-design/icons] ".concat(t));
}
function bg(e) {
  return (
    Ie(e) === "object" &&
    typeof e.name == "string" &&
    typeof e.theme == "string" &&
    (Ie(e.icon) === "object" || typeof e.icon == "function")
  );
}
function wg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[WR(n)] = r);
    }
    return t;
  }, {});
}
function yv(e, t, n) {
  return n
    ? ne.createElement(
        e.tag,
        F(F({ key: t }, wg(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return yv(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      )
    : ne.createElement(
        e.tag,
        F({ key: t }, wg(e.attrs)),
        (e.children || []).map(function (r, o) {
          return yv(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
        })
      );
}
function JS(e) {
  return xl(e)[0];
}
function eb(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var KR = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  GR = function (t) {
    var n = f.useContext(Yp),
      r = n.csp,
      o = n.prefixCls,
      i = KR;
    o && (i = i.replace(/anticon/g, o)),
      f.useEffect(function () {
        var a = t.current,
          l = _u(a);
        Wr(i, "@ant-design-icons", { prepend: !0, csp: r, attachTo: l });
      }, []);
  },
  qR = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  Xa = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function XR(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (Xa.primaryColor = t),
    (Xa.secondaryColor = n || JS(t)),
    (Xa.calculated = !!n);
}
function QR() {
  return F({}, Xa);
}
var da = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    s = yt(t, qR),
    u = f.useRef(),
    c = Xa;
  if (
    (a && (c = { primaryColor: a, secondaryColor: l || JS(a) }),
    GR(u),
    UR(bg(n), "icon should be icon definiton, but got ".concat(n)),
    !bg(n))
  )
    return null;
  var d = n;
  return (
    d &&
      typeof d.icon == "function" &&
      (d = F(F({}, d), {}, { icon: d.icon(c.primaryColor, c.secondaryColor) })),
    yv(
      d.icon,
      "svg-".concat(d.name),
      F(
        F(
          {
            className: r,
            onClick: o,
            style: i,
            "data-icon": d.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          s
        ),
        {},
        { ref: u }
      )
    )
  );
};
da.displayName = "IconReact";
da.getTwoToneColors = QR;
da.setTwoToneColors = XR;
function tb(e) {
  var t = eb(e),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return da.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function YR() {
  var e = da.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ZR = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
tb(Mu.primary);
var xr = f.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    o = e.spin,
    i = e.rotate,
    a = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    u = yt(e, ZR),
    c = f.useContext(Yp),
    d = c.prefixCls,
    v = d === void 0 ? "anticon" : d,
    g = c.rootClassName,
    y = me(
      g,
      v,
      N(
        N({}, "".concat(v, "-").concat(r.name), !!r.name),
        "".concat(v, "-spin"),
        !!o || r.name === "loading"
      ),
      n
    ),
    S = a;
  S === void 0 && l && (S = -1);
  var b = i
      ? {
          msTransform: "rotate(".concat(i, "deg)"),
          transform: "rotate(".concat(i, "deg)"),
        }
      : void 0,
    h = eb(s),
    p = H(h, 2),
    m = p[0],
    w = p[1];
  return f.createElement(
    "span",
    We({ role: "img", "aria-label": r.name }, u, {
      ref: t,
      tabIndex: S,
      onClick: l,
      className: y,
    }),
    f.createElement(da, {
      icon: r,
      primaryColor: m,
      secondaryColor: w,
      style: b,
    })
  );
});
xr.displayName = "AntdIcon";
xr.getTwoToneColor = YR;
xr.setTwoToneColor = tb;
var JR = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
          },
        },
      ],
    },
    name: "check",
    theme: "outlined",
  },
  eP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: JR }));
  },
  tP = f.forwardRef(eP),
  nP = {
    icon: {
      tag: "svg",
      attrs: {
        "fill-rule": "evenodd",
        viewBox: "64 64 896 896",
        focusable: "false",
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
          },
        },
      ],
    },
    name: "close-circle",
    theme: "filled",
  },
  rP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: nP }));
  },
  nb = f.forwardRef(rP),
  oP = {
    icon: {
      tag: "svg",
      attrs: {
        "fill-rule": "evenodd",
        viewBox: "64 64 896 896",
        focusable: "false",
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
          },
        },
      ],
    },
    name: "close",
    theme: "outlined",
  },
  iP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: oP }));
  },
  rb = f.forwardRef(iP),
  aP = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
          },
        },
      ],
    },
    name: "down",
    theme: "outlined",
  },
  lP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: aP }));
  },
  sP = f.forwardRef(lP),
  uP = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z",
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z",
          },
        },
      ],
    },
    name: "eye-invisible",
    theme: "outlined",
  },
  cP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: uP }));
  },
  fP = f.forwardRef(cP),
  dP = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z",
          },
        },
      ],
    },
    name: "eye",
    theme: "outlined",
  },
  vP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: dP }));
  },
  pP = f.forwardRef(vP),
  mP = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
          },
        },
      ],
    },
    name: "loading",
    theme: "outlined",
  },
  hP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: mP }));
  },
  ob = f.forwardRef(hP),
  gP = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
          },
        },
      ],
    },
    name: "search",
    theme: "outlined",
  },
  yP = function (t, n) {
    return f.createElement(xr, We({}, t, { ref: n, icon: gP }));
  },
  ib = f.forwardRef(yP),
  ab = { exports: {} },
  lt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em = Symbol.for("react.element"),
  tm = Symbol.for("react.portal"),
  pc = Symbol.for("react.fragment"),
  mc = Symbol.for("react.strict_mode"),
  hc = Symbol.for("react.profiler"),
  gc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  SP = Symbol.for("react.server_context"),
  Sc = Symbol.for("react.forward_ref"),
  bc = Symbol.for("react.suspense"),
  wc = Symbol.for("react.suspense_list"),
  Cc = Symbol.for("react.memo"),
  xc = Symbol.for("react.lazy"),
  bP = Symbol.for("react.offscreen"),
  lb;
lb = Symbol.for("react.module.reference");
function ir(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case em:
        switch (((e = e.type), e)) {
          case pc:
          case hc:
          case mc:
          case bc:
          case wc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case SP:
              case yc:
              case Sc:
              case xc:
              case Cc:
              case gc:
                return e;
              default:
                return t;
            }
        }
      case tm:
        return t;
    }
  }
}
lt.ContextConsumer = yc;
lt.ContextProvider = gc;
lt.Element = em;
lt.ForwardRef = Sc;
lt.Fragment = pc;
lt.Lazy = xc;
lt.Memo = Cc;
lt.Portal = tm;
lt.Profiler = hc;
lt.StrictMode = mc;
lt.Suspense = bc;
lt.SuspenseList = wc;
lt.isAsyncMode = function () {
  return !1;
};
lt.isConcurrentMode = function () {
  return !1;
};
lt.isContextConsumer = function (e) {
  return ir(e) === yc;
};
lt.isContextProvider = function (e) {
  return ir(e) === gc;
};
lt.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === em;
};
lt.isForwardRef = function (e) {
  return ir(e) === Sc;
};
lt.isFragment = function (e) {
  return ir(e) === pc;
};
lt.isLazy = function (e) {
  return ir(e) === xc;
};
lt.isMemo = function (e) {
  return ir(e) === Cc;
};
lt.isPortal = function (e) {
  return ir(e) === tm;
};
lt.isProfiler = function (e) {
  return ir(e) === hc;
};
lt.isStrictMode = function (e) {
  return ir(e) === mc;
};
lt.isSuspense = function (e) {
  return ir(e) === bc;
};
lt.isSuspenseList = function (e) {
  return ir(e) === wc;
};
lt.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === pc ||
    e === hc ||
    e === mc ||
    e === bc ||
    e === wc ||
    e === bP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xc ||
        e.$$typeof === Cc ||
        e.$$typeof === gc ||
        e.$$typeof === yc ||
        e.$$typeof === Sc ||
        e.$$typeof === lb ||
        e.getModuleId !== void 0))
  );
};
lt.typeOf = ir;
ab.exports = lt;
var Qa = ab.exports;
function Ec(e, t, n) {
  var r = f.useRef({});
  return (
    (!("value" in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
var nm = function (t, n) {
    typeof t == "function"
      ? t(n)
      : Ie(t) === "object" && t && "current" in t && (t.current = n);
  },
  Jr = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var o = n.filter(Boolean);
    return o.length <= 1
      ? o[0]
      : function (i) {
          n.forEach(function (a) {
            nm(a, i);
          });
        };
  },
  Oc = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ec(
      function () {
        return Jr.apply(void 0, n);
      },
      n,
      function (o, i) {
        return (
          o.length !== i.length ||
          o.every(function (a, l) {
            return a !== i[l];
          })
        );
      }
    );
  },
  Vl = function (t) {
    var n,
      r,
      o = Qa.isMemo(t) ? t.type.type : t.type;
    return !(
      (typeof o == "function" &&
        !((n = o.prototype) !== null && n !== void 0 && n.render) &&
        o.$$typeof !== Qa.ForwardRef) ||
      (typeof t == "function" &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Qa.ForwardRef)
    );
  };
function Cg(e) {
  return f.isValidElement(e) && !Qa.isFragment(e);
}
Number(f.version.split(".")[0]) >= 19;
function Ol(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    ne.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(Ol(r)))
          : Qa.isFragment(r) && r.props
          ? (n = n.concat(Ol(r.props.children, t)))
          : n.push(r));
    }),
    n
  );
}
function Rl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function wP(e) {
  return e && Ie(e) === "object" && Rl(e.nativeElement)
    ? e.nativeElement
    : Rl(e)
    ? e
    : null;
}
function Ya(e) {
  var t = wP(e);
  if (t) return t;
  if (e instanceof ne.Component) {
    var n;
    return (n = zd.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(zd, e);
  }
  return null;
}
var Sv = f.createContext(null);
function CP(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = f.useRef(0),
    o = f.useRef([]),
    i = f.useContext(Sv),
    a = f.useCallback(
      function (l, s, u) {
        r.current += 1;
        var c = r.current;
        o.current.push({ size: l, element: s, data: u }),
          Promise.resolve().then(function () {
            c === r.current && (n == null || n(o.current), (o.current = []));
          }),
          i == null || i(l, s, u);
      },
      [n, i]
    );
  return f.createElement(Sv.Provider, { value: a }, t);
}
var sb = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, i) {
          return o[0] === n ? ((r = i), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  bv =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Au = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  xP = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Au)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  EP = 2;
function OP(e, t) {
  var n = !1,
    r = !1,
    o = 0;
  function i() {
    n && ((n = !1), e()), r && l();
  }
  function a() {
    xP(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < EP) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    o = s;
  }
  return l;
}
var RP = 20,
  PP = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  IP = typeof MutationObserver < "u",
  $P = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = OP(this.refresh.bind(this), RP));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !bv ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          IP
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !bv ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          o = PP.some(function (i) {
            return !!~r.indexOf(i);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  ub = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  ta = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Au;
  },
  cb = Rc(0, 0, 0, 0);
function Nu(e) {
  return parseFloat(e) || 0;
}
function xg(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    var i = e["border-" + o + "-width"];
    return r + Nu(i);
  }, 0);
}
function TP(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t;
    r < o.length;
    r++
  ) {
    var i = o[r],
      a = e["padding-" + i];
    n[i] = Nu(a);
  }
  return n;
}
function MP(e) {
  var t = e.getBBox();
  return Rc(0, 0, t.width, t.height);
}
function _P(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return cb;
  var r = ta(e).getComputedStyle(e),
    o = TP(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    l = Nu(r.width),
    s = Nu(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(l + i) !== t && (l -= xg(r, "left", "right") + i),
      Math.round(s + a) !== n && (s -= xg(r, "top", "bottom") + a)),
    !NP(e))
  ) {
    var u = Math.round(l + i) - t,
      c = Math.round(s + a) - n;
    Math.abs(u) !== 1 && (l -= u), Math.abs(c) !== 1 && (s -= c);
  }
  return Rc(o.left, o.top, l, s);
}
var AP = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof ta(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof ta(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function NP(e) {
  return e === ta(e).document.documentElement;
}
function FP(e) {
  return bv ? (AP(e) ? MP(e) : _P(e)) : cb;
}
function jP(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    ub(a, {
      x: t,
      y: n,
      width: r,
      height: o,
      top: n,
      right: t + r,
      bottom: o + n,
      left: t,
    }),
    a
  );
}
function Rc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var zP = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Rc(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = FP(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  LP = (function () {
    function e(t, n) {
      var r = jP(n);
      ub(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  DP = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new sb()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof ta(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new zP(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof ta(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new LP(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  fb = typeof WeakMap < "u" ? new WeakMap() : new sb(),
  db = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = $P.getInstance(),
        r = new DP(t, n, this);
      fb.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  db.prototype[e] = function () {
    var t;
    return (t = fb.get(this))[e].apply(t, arguments);
  };
});
var kP = (function () {
    return typeof Au.ResizeObserver < "u" ? Au.ResizeObserver : db;
  })(),
  mo = new Map();
function BP(e) {
  e.forEach(function (t) {
    var n,
      r = t.target;
    (n = mo.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (o) {
        return o(r);
      });
  });
}
var vb = new kP(BP);
function HP(e, t) {
  mo.has(e) || (mo.set(e, new Set()), vb.observe(e)), mo.get(e).add(t);
}
function VP(e, t) {
  mo.has(e) &&
    (mo.get(e).delete(t), mo.get(e).size || (vb.unobserve(e), mo.delete(e)));
}
function an(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eg(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, VS(r.key), r);
  }
}
function ln(e, t, n) {
  return (
    t && Eg(e.prototype, t),
    n && Eg(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ui(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && bl(e, t);
}
function Pl(e) {
  return (
    (Pl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Pl(e)
  );
}
function rm() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (rm = function () {
    return !!e;
  })();
}
function WP(e, t) {
  if (t && (Ie(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ue(e);
}
function ci(e) {
  var t = rm();
  return function () {
    var n,
      r = Pl(e);
    if (t) {
      var o = Pl(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return WP(this, n);
  };
}
var UP = (function (e) {
  ui(n, e);
  var t = ci(n);
  function n() {
    return an(this, n), t.apply(this, arguments);
  }
  return (
    ln(n, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(f.Component);
function KP(e, t) {
  var n = e.children,
    r = e.disabled,
    o = f.useRef(null),
    i = f.useRef(null),
    a = f.useContext(Sv),
    l = typeof n == "function",
    s = l ? n(o) : n,
    u = f.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    c = !l && f.isValidElement(s) && Vl(s),
    d = c ? s.ref : null,
    v = Oc(d, o),
    g = function () {
      var h;
      return (
        Ya(o.current) ||
        (o.current && Ie(o.current) === "object"
          ? Ya(
              (h = o.current) === null || h === void 0
                ? void 0
                : h.nativeElement
            )
          : null) ||
        Ya(i.current)
      );
    };
  f.useImperativeHandle(t, function () {
    return g();
  });
  var y = f.useRef(e);
  y.current = e;
  var S = f.useCallback(function (b) {
    var h = y.current,
      p = h.onResize,
      m = h.data,
      w = b.getBoundingClientRect(),
      C = w.width,
      E = w.height,
      x = b.offsetWidth,
      R = b.offsetHeight,
      P = Math.floor(C),
      _ = Math.floor(E);
    if (
      u.current.width !== P ||
      u.current.height !== _ ||
      u.current.offsetWidth !== x ||
      u.current.offsetHeight !== R
    ) {
      var j = { width: P, height: _, offsetWidth: x, offsetHeight: R };
      u.current = j;
      var L = x === Math.round(C) ? C : x,
        D = R === Math.round(E) ? E : R,
        z = F(F({}, j), {}, { offsetWidth: L, offsetHeight: D });
      a == null || a(z, b, m),
        p &&
          Promise.resolve().then(function () {
            p(z, b);
          });
    }
  }, []);
  return (
    f.useEffect(
      function () {
        var b = g();
        return (
          b && !r && HP(b, S),
          function () {
            return VP(b, S);
          }
        );
      },
      [o.current, r]
    ),
    f.createElement(UP, { ref: i }, c ? f.cloneElement(s, { ref: v }) : s)
  );
}
var GP = f.forwardRef(KP),
  qP = "rc-observer-key";
function XP(e, t) {
  var n = e.children,
    r = typeof n == "function" ? [n] : Ol(n);
  return r.map(function (o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(qP, "-").concat(i);
    return f.createElement(
      GP,
      We({}, e, { key: a, ref: i === 0 ? t : void 0 }),
      o
    );
  });
}
var _o = f.forwardRef(XP);
_o.Collection = CP;
function Wl(e, t) {
  var n = Object.assign({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function QP(e) {
  if (Array.isArray(e)) return ev(e);
}
function pb(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function YP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function be(e) {
  return QP(e) || pb(e) || Zp(e) || YP();
}
var mb = function (t) {
    return +setTimeout(t, 16);
  },
  hb = function (t) {
    return clearTimeout(t);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((mb = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (hb = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var Og = 0,
  om = new Map();
function gb(e) {
  om.delete(e);
}
var At = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Og += 1;
  var r = Og;
  function o(i) {
    if (i === 0) gb(r), t();
    else {
      var a = mb(function () {
        o(i - 1);
      });
      om.set(r, a);
    }
  }
  return o(n), r;
};
At.cancel = function (e) {
  var t = om.get(e);
  return gb(e), hb(t);
};
function Il(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function wv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      s = r.has(i);
    if (($n(!s, "Warning: There may be circular references"), s)) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var u = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var c = 0; c < i.length; c++) if (!o(i[c], a[c], u)) return !1;
      return !0;
    }
    if (i && a && Ie(i) === "object" && Ie(a) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length
        ? !1
        : d.every(function (v) {
            return o(i[v], a[v], u);
          });
    }
    return !1;
  }
  return o(e, t);
}
var ZP = "%";
function Cv(e) {
  return e.join(ZP);
}
var JP = (function () {
    function e(t) {
      an(this, e),
        N(this, "instanceId", void 0),
        N(this, "cache", new Map()),
        (this.instanceId = t);
    }
    return (
      ln(e, [
        {
          key: "get",
          value: function (n) {
            return this.opGet(Cv(n));
          },
        },
        {
          key: "opGet",
          value: function (n) {
            return this.cache.get(n) || null;
          },
        },
        {
          key: "update",
          value: function (n, r) {
            return this.opUpdate(Cv(n), r);
          },
        },
        {
          key: "opUpdate",
          value: function (n, r) {
            var o = this.cache.get(n),
              i = r(o);
            i === null ? this.cache.delete(n) : this.cache.set(n, i);
          },
        },
      ]),
      e
    );
  })(),
  na = "data-token-hash",
  br = "data-css-hash",
  ho = "__cssinjs_instance__";
function eI() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(br, "]")) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[ho] = o[ho] || e), o[ho] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(br, "]"))).forEach(
      function (o) {
        var i = o.getAttribute(br);
        if (r[i]) {
          if (o[ho] === e) {
            var a;
            (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
          }
        } else r[i] = !0;
      }
    );
  }
  return new JP(e);
}
var tI = f.createContext({
  hashPriority: "low",
  cache: eI(),
  defaultCache: !0,
});
const Pc = tI;
function nI(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var im = (function () {
  function e() {
    an(this, e),
      N(this, "cache", void 0),
      N(this, "keys", void 0),
      N(this, "cacheCallTimes", void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    ln(e, [
      {
        key: "size",
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: "internalGet",
        value: function (n) {
          var r,
            o,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (l) {
              if (!a) a = void 0;
              else {
                var s;
                a =
                  (s = a) === null ||
                  s === void 0 ||
                  (s = s.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(l);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (a.value[1] = this.cacheCallTimes++),
            (o = a) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: "get",
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: "has",
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: "set",
        value: function (n, r) {
          var o = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (u, c) {
                    var d = H(u, 2),
                      v = d[1];
                    return o.internalGet(c)[1] < v
                      ? [c, o.internalGet(c)[1]]
                      : u;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = H(i, 1),
                l = a[0];
              this.delete(l);
            }
            this.keys.push(n);
          }
          var s = this.cache;
          n.forEach(function (u, c) {
            if (c === n.length - 1)
              s.set(u, { value: [r, o.cacheCallTimes++] });
            else {
              var d = s.get(u);
              d ? d.map || (d.map = new Map()) : s.set(u, { map: new Map() }),
                (s = s.get(u).map);
            }
          });
        },
      },
      {
        key: "deleteByPath",
        value: function (n, r) {
          var o = n.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
              (i = o.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var a = this.deleteByPath(o.map, r.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
        },
      },
      {
        key: "delete",
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !nI(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
N(im, "MAX_CACHE_SIZE", 20);
N(im, "MAX_CACHE_OFFSET", 5);
var Rg = 0,
  yb = (function () {
    function e(t) {
      an(this, e),
        N(this, "derivatives", void 0),
        N(this, "id", void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Rg),
        t.length === 0 && (t.length > 0, void 0),
        (Rg += 1);
    }
    return (
      ln(e, [
        {
          key: "getDerivativeToken",
          value: function (n) {
            return this.derivatives.reduce(function (r, o) {
              return o(n, r);
            }, void 0);
          },
        },
      ]),
      e
    );
  })(),
  xf = new im();
function xv(e) {
  var t = Array.isArray(e) ? e : [e];
  return xf.has(t) || xf.set(t, new yb(t)), xf.get(t);
}
var rI = new WeakMap(),
  Ef = {};
function oI(e, t) {
  for (var n = rI, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
  }
  return n.has(Ef) || n.set(Ef, e()), n.get(Ef);
}
var Pg = new WeakMap();
function Za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = Pg.get(e) || "";
  return (
    n ||
      (Object.keys(e).forEach(function (r) {
        var o = e[r];
        (n += r),
          o instanceof yb
            ? (n += o.id)
            : o && Ie(o) === "object"
            ? (n += Za(o, t))
            : (n += o);
      }),
      t && (n = Il(n)),
      Pg.set(e, n)),
    n
  );
}
function Ig(e, t) {
  return Il("".concat(t, "_").concat(Za(e, !0)));
}
var Ev = Tn();
function Ne(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Fu(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o) return e;
  var i = F(F({}, r), {}, N(N({}, na, t), br, n)),
    a = Object.keys(i)
      .map(function (l) {
        var s = i[l];
        return s ? "".concat(l, '="').concat(s, '"') : null;
      })
      .filter(function (l) {
        return l;
      })
      .join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Ks = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--"
      .concat(n ? "".concat(n, "-") : "")
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
      .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
      .toLowerCase();
  },
  iI = function (t, n, r) {
    return Object.keys(t).length
      ? "."
          .concat(n)
          .concat(r != null && r.scope ? ".".concat(r.scope) : "", "{")
          .concat(
            Object.entries(t)
              .map(function (o) {
                var i = H(o, 2),
                  a = i[0],
                  l = i[1];
                return "".concat(a, ":").concat(l, ";");
              })
              .join(""),
            "}"
          )
      : "";
  },
  Sb = function (t, n, r) {
    var o = {},
      i = {};
    return (
      Object.entries(t).forEach(function (a) {
        var l,
          s,
          u = H(a, 2),
          c = u[0],
          d = u[1];
        if (r != null && (l = r.preserve) !== null && l !== void 0 && l[c])
          i[c] = d;
        else if (
          (typeof d == "string" || typeof d == "number") &&
          !(r != null && (s = r.ignore) !== null && s !== void 0 && s[c])
        ) {
          var v,
            g = Ks(c, r == null ? void 0 : r.prefix);
          (o[g] =
            typeof d == "number" &&
            !(r != null && (v = r.unitless) !== null && v !== void 0 && v[c])
              ? "".concat(d, "px")
              : String(d)),
            (i[c] = "var(".concat(g, ")"));
        }
      }),
      [i, iI(o, n, { scope: r == null ? void 0 : r.scope })]
    );
  },
  $g = Tn() ? f.useLayoutEffect : f.useEffect,
  bt = function (t, n) {
    var r = f.useRef(!0);
    $g(function () {
      return t(r.current);
    }, n),
      $g(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  Tg = function (t, n) {
    bt(function (r) {
      if (!r) return t();
    }, n);
  },
  aI = F({}, Ui),
  Mg = aI.useInsertionEffect,
  lI = function (t, n, r) {
    f.useMemo(t, r),
      bt(function () {
        return n(!0);
      }, r);
  },
  sI = Mg
    ? function (e, t, n) {
        return Mg(function () {
          return e(), t();
        }, n);
      }
    : lI;
const uI = sI;
var cI = F({}, Ui),
  fI = cI.useInsertionEffect,
  dI = function (t) {
    var n = [],
      r = !1;
    function o(i) {
      r || n.push(i);
    }
    return (
      f.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (i) {
                  return i();
                });
          }
        );
      }, t),
      o
    );
  },
  vI = function () {
    return function (t) {
      t();
    };
  },
  pI = typeof fI < "u" ? dI : vI;
const mI = pI;
function am(e, t, n, r, o) {
  var i = f.useContext(Pc),
    a = i.cache,
    l = [e].concat(be(t)),
    s = Cv(l),
    u = mI([s]),
    c = function (y) {
      a.opUpdate(s, function (S) {
        var b = S || [void 0, void 0],
          h = H(b, 2),
          p = h[0],
          m = p === void 0 ? 0 : p,
          w = h[1],
          C = w,
          E = C || n(),
          x = [m, E];
        return y ? y(x) : x;
      });
    };
  f.useMemo(
    function () {
      c();
    },
    [s]
  );
  var d = a.opGet(s),
    v = d[1];
  return (
    uI(
      function () {
        o == null || o(v);
      },
      function (g) {
        return (
          c(function (y) {
            var S = H(y, 2),
              b = S[0],
              h = S[1];
            return g && b === 0 && (o == null || o(v)), [b + 1, h];
          }),
          function () {
            a.opUpdate(s, function (y) {
              var S = y || [],
                b = H(S, 2),
                h = b[0],
                p = h === void 0 ? 0 : h,
                m = b[1],
                w = p - 1;
              return w === 0
                ? (u(function () {
                    (g || !a.opGet(s)) && (r == null || r(m, !1));
                  }),
                  null)
                : [p - 1, m];
            });
          }
        );
      },
      [s]
    ),
    v
  );
}
var hI = {},
  gI = "css",
  ko = new Map();
function yI(e) {
  ko.set(e, (ko.get(e) || 0) + 1);
}
function SI(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll(
      "style[".concat(na, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[ho] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var bI = 0;
function wI(e, t) {
  ko.set(e, (ko.get(e) || 0) - 1);
  var n = Array.from(ko.keys()),
    r = n.filter(function (o) {
      var i = ko.get(o) || 0;
      return i <= 0;
    });
  n.length - r.length > bI &&
    r.forEach(function (o) {
      SI(o, t), ko.delete(o);
    });
}
var CI = function (t, n, r, o) {
    var i = r.getDerivativeToken(t),
      a = F(F({}, i), n);
    return o && (a = o(a)), a;
  },
  bb = "token";
function xI(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = f.useContext(Pc),
    o = r.cache.instanceId,
    i = r.container,
    a = n.salt,
    l = a === void 0 ? "" : a,
    s = n.override,
    u = s === void 0 ? hI : s,
    c = n.formatToken,
    d = n.getComputedToken,
    v = n.cssVar,
    g = oI(function () {
      return Object.assign.apply(Object, [{}].concat(be(t)));
    }, t),
    y = Za(g),
    S = Za(u),
    b = v ? Za(v) : "",
    h = am(
      bb,
      [l, e.id, y, S, b],
      function () {
        var p,
          m = d ? d(g, u, e) : CI(g, u, e, c),
          w = F({}, m),
          C = "";
        if (v) {
          var E = Sb(m, v.key, {
              prefix: v.prefix,
              ignore: v.ignore,
              unitless: v.unitless,
              preserve: v.preserve,
            }),
            x = H(E, 2);
          (m = x[0]), (C = x[1]);
        }
        var R = Ig(m, l);
        (m._tokenKey = R), (w._tokenKey = Ig(w, l));
        var P =
          (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : R;
        (m._themeKey = P), yI(P);
        var _ = "".concat(gI, "-").concat(Il(R));
        return (
          (m._hashId = _), [m, _, w, C, (v == null ? void 0 : v.key) || ""]
        );
      },
      function (p) {
        wI(p[0]._themeKey, o);
      },
      function (p) {
        var m = H(p, 4),
          w = m[0],
          C = m[3];
        if (v && C) {
          var E = Wr(C, Il("css-variables-".concat(w._themeKey)), {
            mark: br,
            prepend: "queue",
            attachTo: i,
            priority: -999,
          });
          (E[ho] = o), E.setAttribute(na, w._themeKey);
        }
      }
    );
  return h;
}
var EI = function (t, n, r) {
    var o = H(t, 5),
      i = o[2],
      a = o[3],
      l = o[4],
      s = r || {},
      u = s.plain;
    if (!a) return null;
    var c = i._tokenKey,
      d = -999,
      v = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(d) },
      g = Fu(a, l, c, v, u);
    return [d, c, g];
  },
  OI = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  wb = "comm",
  Cb = "rule",
  xb = "decl",
  RI = "@import",
  PI = "@keyframes",
  II = "@layer",
  Eb = Math.abs,
  lm = String.fromCharCode;
function Ob(e) {
  return e.trim();
}
function Gs(e, t, n) {
  return e.replace(t, n);
}
function $I(e, t, n) {
  return e.indexOf(t, n);
}
function $l(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tl(e, t, n) {
  return e.slice(t, n);
}
function kr(e) {
  return e.length;
}
function TI(e) {
  return e.length;
}
function Rs(e, t) {
  return t.push(e), e;
}
var Ic = 1,
  ra = 1,
  Rb = 0,
  or = 0,
  zt = 0,
  va = "";
function sm(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ic,
    column: ra,
    length: a,
    return: "",
    siblings: l,
  };
}
function MI() {
  return zt;
}
function _I() {
  return (
    (zt = or > 0 ? $l(va, --or) : 0), ra--, zt === 10 && ((ra = 1), Ic--), zt
  );
}
function wr() {
  return (
    (zt = or < Rb ? $l(va, or++) : 0), ra++, zt === 10 && ((ra = 1), Ic++), zt
  );
}
function Xo() {
  return $l(va, or);
}
function qs() {
  return or;
}
function $c(e, t) {
  return Tl(va, e, t);
}
function Ov(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function AI(e) {
  return (Ic = ra = 1), (Rb = kr((va = e))), (or = 0), [];
}
function NI(e) {
  return (va = ""), e;
}
function Of(e) {
  return Ob($c(or - 1, Rv(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function FI(e) {
  for (; (zt = Xo()) && zt < 33; ) wr();
  return Ov(e) > 2 || Ov(zt) > 3 ? "" : " ";
}
function jI(e, t) {
  for (
    ;
    --t &&
    wr() &&
    !(zt < 48 || zt > 102 || (zt > 57 && zt < 65) || (zt > 70 && zt < 97));

  );
  return $c(e, qs() + (t < 6 && Xo() == 32 && wr() == 32));
}
function Rv(e) {
  for (; wr(); )
    switch (zt) {
      case e:
        return or;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rv(zt);
        break;
      case 40:
        e === 41 && Rv(e);
        break;
      case 92:
        wr();
        break;
    }
  return or;
}
function zI(e, t) {
  for (; wr() && e + zt !== 57; ) if (e + zt === 84 && Xo() === 47) break;
  return "/*" + $c(t, or - 1) + "*" + lm(e === 47 ? e : wr());
}
function LI(e) {
  for (; !Ov(Xo()); ) wr();
  return $c(e, or);
}
function DI(e) {
  return NI(Xs("", null, null, null, [""], (e = AI(e)), 0, [0], e));
}
function Xs(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      v = 0,
      g = 0,
      y = 0,
      S = 1,
      b = 1,
      h = 1,
      p = 0,
      m = "",
      w = o,
      C = i,
      E = r,
      x = m;
    b;

  )
    switch (((y = p), (p = wr()))) {
      case 40:
        if (y != 108 && $l(x, d - 1) == 58) {
          $I((x += Gs(Of(p), "&", "&\f")), "&\f", Eb(u ? l[u - 1] : 0)) != -1 &&
            (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Of(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += FI(y);
        break;
      case 92:
        x += jI(qs() - 1, 7);
        continue;
      case 47:
        switch (Xo()) {
          case 42:
          case 47:
            Rs(kI(zI(wr(), qs()), t, n, s), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * S:
        l[u++] = kr(x) * h;
      case 125 * S:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            h == -1 && (x = Gs(x, /\f/g, "")),
              g > 0 &&
                kr(x) - d &&
                Rs(
                  g > 32
                    ? Ag(x + ";", r, n, d - 1, s)
                    : Ag(Gs(x, " ", "") + ";", r, n, d - 2, s),
                  s
                );
            break;
          case 59:
            x += ";";
          default:
            if (
              (Rs(
                (E = _g(x, t, n, u, c, o, l, m, (w = []), (C = []), d, i)),
                i
              ),
              p === 123)
            )
              if (c === 0) Xs(x, t, E, E, w, i, d, l, C);
              else
                switch (v === 99 && $l(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xs(
                      e,
                      E,
                      E,
                      r && Rs(_g(e, E, E, 0, 0, o, l, m, o, (w = []), d, C), C),
                      o,
                      C,
                      d,
                      l,
                      r ? w : C
                    );
                    break;
                  default:
                    Xs(x, E, E, E, [""], C, 0, l, C);
                }
        }
        (u = c = g = 0), (S = h = 1), (m = x = ""), (d = a);
        break;
      case 58:
        (d = 1 + kr(x)), (g = y);
      default:
        if (S < 1) {
          if (p == 123) --S;
          else if (p == 125 && S++ == 0 && _I() == 125) continue;
        }
        switch (((x += lm(p)), p * S)) {
          case 38:
            h = c > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (l[u++] = (kr(x) - 1) * h), (h = 1);
            break;
          case 64:
            Xo() === 45 && (x += Of(wr())),
              (v = Xo()),
              (c = d = kr((m = x += LI(qs())))),
              p++;
            break;
          case 45:
            y === 45 && kr(x) == 2 && (S = 0);
        }
    }
  return i;
}
function _g(e, t, n, r, o, i, a, l, s, u, c, d) {
  for (
    var v = o - 1, g = o === 0 ? i : [""], y = TI(g), S = 0, b = 0, h = 0;
    S < r;
    ++S
  )
    for (var p = 0, m = Tl(e, v + 1, (v = Eb((b = a[S])))), w = e; p < y; ++p)
      (w = Ob(b > 0 ? g[p] + " " + m : Gs(m, /&\f/g, g[p]))) && (s[h++] = w);
  return sm(e, t, n, o === 0 ? Cb : l, s, u, c, d);
}
function kI(e, t, n, r) {
  return sm(e, t, n, wb, lm(MI()), Tl(e, 2, -2), 0, r);
}
function Ag(e, t, n, r, o) {
  return sm(e, t, n, xb, Tl(e, 0, r), Tl(e, r + 1, -1), r, o);
}
function Pv(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function BI(e, t, n, r) {
  switch (e.type) {
    case II:
      if (e.children.length) break;
    case RI:
    case xb:
      return (e.return = e.return || e.value);
    case wb:
      return "";
    case PI:
      return (e.return = e.value + "{" + Pv(e.children, r) + "}");
    case Cb:
      if (!kr((e.value = e.props.join(",")))) return "";
  }
  return kr((n = Pv(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
var Ng = "data-ant-cssinjs-cache-path",
  Pb = "_FILE_STYLE__",
  Qo,
  Ib = !0;
function HI() {
  if (!Qo && ((Qo = {}), Tn())) {
    var e = document.createElement("div");
    (e.className = Ng),
      (e.style.position = "fixed"),
      (e.style.visibility = "hidden"),
      (e.style.top = "-9999px"),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    (t = t.replace(/^"/, "").replace(/"$/, "")),
      t.split(";").forEach(function (o) {
        var i = o.split(":"),
          a = H(i, 2),
          l = a[0],
          s = a[1];
        Qo[l] = s;
      });
    var n = document.querySelector("style[".concat(Ng, "]"));
    if (n) {
      var r;
      (Ib = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function VI(e) {
  return HI(), !!Qo[e];
}
function WI(e) {
  var t = Qo[e],
    n = null;
  if (t && Tn())
    if (Ib) n = Pb;
    else {
      var r = document.querySelector(
        "style[".concat(br, '="').concat(Qo[e], '"]')
      );
      r ? (n = r.innerHTML) : delete Qo[e];
    }
  return [n, t];
}
var UI = "_skip_check_",
  $b = "_multi_value_";
function Qs(e) {
  var t = Pv(DI(e), BI);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function KI(e) {
  return Ie(e) === "object" && e && (UI in e || $b in e);
}
function GI(e, t, n) {
  if (!t) return e;
  var r = ".".concat(t),
    o = n === "low" ? ":where(".concat(r, ")") : r,
    i = e.split(",").map(function (a) {
      var l,
        s = a.trim().split(/\s+/),
        u = s[0] || "",
        c =
          ((l = u.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) ||
          "";
      return (
        (u = "".concat(c).concat(o).concat(u.slice(c.length))),
        [u].concat(be(s.slice(1))).join(" ")
      );
    });
  return i.join(",");
}
var qI = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    s = n.layer;
  n.path;
  var u = n.hashPriority,
    c = n.transformers,
    d = c === void 0 ? [] : c;
  n.linters;
  var v = "",
    g = {};
  function y(h) {
    var p = h.getName(l);
    if (!g[p]) {
      var m = e(h.style, n, { root: !1, parentSelectors: a }),
        w = H(m, 1),
        C = w[0];
      g[p] = "@keyframes ".concat(h.getName(l)).concat(C);
    }
  }
  function S(h) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      h.forEach(function (m) {
        Array.isArray(m) ? S(m, p) : m && p.push(m);
      }),
      p
    );
  }
  var b = S(Array.isArray(t) ? t : [t]);
  return (
    b.forEach(function (h) {
      var p = typeof h == "string" && !o ? {} : h;
      if (typeof p == "string")
        v += "".concat(
          p,
          `
`
        );
      else if (p._keyframe) y(p);
      else {
        var m = d.reduce(function (w, C) {
          var E;
          return (
            (C == null || (E = C.visit) === null || E === void 0
              ? void 0
              : E.call(C, w)) || w
          );
        }, p);
        Object.keys(m).forEach(function (w) {
          var C = m[w];
          if (
            Ie(C) === "object" &&
            C &&
            (w !== "animationName" || !C._keyframe) &&
            !KI(C)
          ) {
            var E = !1,
              x = w.trim(),
              R = !1;
            (o || i) && l
              ? x.startsWith("@")
                ? (E = !0)
                : (x = GI(w, l, u))
              : o && !l && (x === "&" || x === "") && ((x = ""), (R = !0));
            var P = e(C, n, {
                root: R,
                injectHash: E,
                parentSelectors: [].concat(be(a), [x]),
              }),
              _ = H(P, 2),
              j = _[0],
              L = _[1];
            (g = F(F({}, g), L)), (v += "".concat(x).concat(j));
          } else {
            let V = function (T, I) {
              var O = T.replace(/[A-Z]/g, function (A) {
                  return "-".concat(A.toLowerCase());
                }),
                M = I;
              !OI[T] &&
                typeof M == "number" &&
                M !== 0 &&
                (M = "".concat(M, "px")),
                T === "animationName" &&
                  I !== null &&
                  I !== void 0 &&
                  I._keyframe &&
                  (y(I), (M = I.getName(l))),
                (v += "".concat(O, ":").concat(M, ";"));
            };
            var D,
              z =
                (D = C == null ? void 0 : C.value) !== null && D !== void 0
                  ? D
                  : C;
            Ie(C) === "object" &&
            C !== null &&
            C !== void 0 &&
            C[$b] &&
            Array.isArray(z)
              ? z.forEach(function (T) {
                  V(w, T);
                })
              : V(w, z);
          }
        });
      }
    }),
    o
      ? s &&
        ((v = "@layer ".concat(s.name, " {").concat(v, "}")),
        s.dependencies &&
          (g["@layer ".concat(s.name)] = s.dependencies.map(function (h) {
            return "@layer ".concat(h, ", ").concat(s.name, ";");
          }).join(`
`)))
      : (v = "{".concat(v, "}")),
    [v, g]
  );
};
function Tb(e, t) {
  return Il("".concat(e.join("%")).concat(t));
}
function XI() {
  return null;
}
var Mb = "style";
function Iv(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    s = e.order,
    u = s === void 0 ? 0 : s,
    c = f.useContext(Pc),
    d = c.autoClear;
  c.mock;
  var v = c.defaultCache,
    g = c.hashPriority,
    y = c.container,
    S = c.ssrInline,
    b = c.transformers,
    h = c.linters,
    p = c.cache,
    m = c.layer,
    w = n._tokenKey,
    C = [w];
  m && C.push("layer"), C.push.apply(C, be(r));
  var E = Ev,
    x = am(
      Mb,
      C,
      function () {
        var L = C.join("|");
        if (VI(L)) {
          var D = WI(L),
            z = H(D, 2),
            V = z[0],
            T = z[1];
          if (V) return [V, w, T, {}, l, u];
        }
        var I = t(),
          O = qI(I, {
            hashId: o,
            hashPriority: g,
            layer: m ? i : void 0,
            path: r.join("-"),
            transformers: b,
            linters: h,
          }),
          M = H(O, 2),
          A = M[0],
          $ = M[1],
          k = Qs(A),
          B = Tb(C, k);
        return [k, w, B, $, l, u];
      },
      function (L, D) {
        var z = H(L, 3),
          V = z[2];
        (D || d) && Ev && El(V, { mark: br });
      },
      function (L) {
        var D = H(L, 4),
          z = D[0];
        D[1];
        var V = D[2],
          T = D[3];
        if (E && z !== Pb) {
          var I = {
              mark: br,
              prepend: m ? !1 : "queue",
              attachTo: y,
              priority: u,
            },
            O = typeof a == "function" ? a() : a;
          O && (I.csp = { nonce: O });
          var M = [],
            A = [];
          Object.keys(T).forEach(function (k) {
            k.startsWith("@layer") ? M.push(k) : A.push(k);
          }),
            M.forEach(function (k) {
              Wr(
                Qs(T[k]),
                "_layer-".concat(k),
                F(F({}, I), {}, { prepend: !0 })
              );
            });
          var $ = Wr(z, V, I);
          ($[ho] = p.instanceId),
            $.setAttribute(na, w),
            A.forEach(function (k) {
              Wr(Qs(T[k]), "_effect-".concat(k), I);
            });
        }
      }
    ),
    R = H(x, 3),
    P = R[0],
    _ = R[1],
    j = R[2];
  return function (L) {
    var D;
    return (
      !S || E || !v
        ? (D = f.createElement(XI, null))
        : (D = f.createElement(
            "style",
            We({}, N(N({}, na, _), br, j), {
              dangerouslySetInnerHTML: { __html: P },
            })
          )),
      f.createElement(f.Fragment, null, D, L)
    );
  };
}
var QI = function (t, n, r) {
    var o = H(t, 6),
      i = o[0],
      a = o[1],
      l = o[2],
      s = o[3],
      u = o[4],
      c = o[5],
      d = r || {},
      v = d.plain;
    if (u) return null;
    var g = i,
      y = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(c) };
    return (
      (g = Fu(i, a, l, y, v)),
      s &&
        Object.keys(s).forEach(function (S) {
          if (!n[S]) {
            n[S] = !0;
            var b = Qs(s[S]),
              h = Fu(b, a, "_effect-".concat(S), y, v);
            S.startsWith("@layer") ? (g = h + g) : (g += h);
          }
        }),
      [c, l, g]
    );
  },
  _b = "cssVar",
  YI = function (t, n) {
    var r = t.key,
      o = t.prefix,
      i = t.unitless,
      a = t.ignore,
      l = t.token,
      s = t.scope,
      u = s === void 0 ? "" : s,
      c = f.useContext(Pc),
      d = c.cache.instanceId,
      v = c.container,
      g = l._tokenKey,
      y = [].concat(be(t.path), [r, u, g]),
      S = am(
        _b,
        y,
        function () {
          var b = n(),
            h = Sb(b, r, { prefix: o, unitless: i, ignore: a, scope: u }),
            p = H(h, 2),
            m = p[0],
            w = p[1],
            C = Tb(y, w);
          return [m, w, C, r];
        },
        function (b) {
          var h = H(b, 3),
            p = h[2];
          Ev && El(p, { mark: br });
        },
        function (b) {
          var h = H(b, 3),
            p = h[1],
            m = h[2];
          if (p) {
            var w = Wr(p, m, {
              mark: br,
              prepend: "queue",
              attachTo: v,
              priority: -999,
            });
            (w[ho] = d), w.setAttribute(na, r);
          }
        }
      );
    return S;
  },
  ZI = function (t, n, r) {
    var o = H(t, 4),
      i = o[1],
      a = o[2],
      l = o[3],
      s = r || {},
      u = s.plain;
    if (!i) return null;
    var c = -999,
      d = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(c) },
      v = Fu(i, l, a, d, u);
    return [c, a, v];
  };
N(N(N({}, Mb, QI), bb, EI), _b, ZI);
var vn = (function () {
  function e(t, n) {
    an(this, e),
      N(this, "name", void 0),
      N(this, "style", void 0),
      N(this, "_keyframe", !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    ln(e, [
      {
        key: "getName",
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return n ? "".concat(n, "-").concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function hi(e) {
  return (e.notSplit = !0), e;
}
hi(["borderTop", "borderBottom"]),
  hi(["borderTop"]),
  hi(["borderBottom"]),
  hi(["borderLeft", "borderRight"]),
  hi(["borderLeft"]),
  hi(["borderRight"]);
function Ab(e) {
  return BS(e) || pb(e) || Zp(e) || HS();
}
function $r(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function Nb(e, t, n, r) {
  if (!t.length) return n;
  var o = Ab(t),
    i = o[0],
    a = o.slice(1),
    l;
  return (
    !e && typeof i == "number"
      ? (l = [])
      : Array.isArray(e)
      ? (l = be(e))
      : (l = F({}, e)),
    r && n === void 0 && a.length === 1
      ? delete l[i][a[0]]
      : (l[i] = Nb(l[i], a, n, r)),
    l
  );
}
function vr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !$r(e, t.slice(0, -1))
    ? e
    : Nb(e, t, n, r);
}
function JI(e) {
  return (
    Ie(e) === "object" &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function Fg(e) {
  return Array.isArray(e) ? [] : {};
}
var e$ = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Fi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Fg(t[0]);
  return (
    t.forEach(function (o) {
      function i(a, l) {
        var s = new Set(l),
          u = $r(o, a),
          c = Array.isArray(u);
        if (c || JI(u)) {
          if (!s.has(u)) {
            s.add(u);
            var d = $r(r, a);
            c
              ? (r = vr(r, a, []))
              : (!d || Ie(d) !== "object") && (r = vr(r, a, Fg(u))),
              e$(u).forEach(function (v) {
                i([].concat(be(a), [v]), s);
              });
          }
        } else r = vr(r, a, u);
      }
      i([]);
    }),
    r
  );
}
const t$ = f.createContext({}),
  n$ = f.createContext(void 0);
var r$ = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size",
  },
  o$ = {
    yearFormat: "YYYY",
    dayFormat: "D",
    cellMeridiemFormat: "A",
    monthBeforeYear: !0,
  },
  i$ = F(
    F({}, o$),
    {},
    {
      locale: "en_US",
      today: "Today",
      now: "Now",
      backToToday: "Back to today",
      ok: "OK",
      clear: "Clear",
      month: "Month",
      year: "Year",
      timeSelect: "select time",
      dateSelect: "select date",
      weekSelect: "Choose a week",
      monthSelect: "Choose a month",
      yearSelect: "Choose a year",
      decadeSelect: "Choose a decade",
      dateFormat: "M/D/YYYY",
      dateTimeFormat: "M/D/YYYY HH:mm:ss",
      previousMonth: "Previous month (PageUp)",
      nextMonth: "Next month (PageDown)",
      previousYear: "Last year (Control + left)",
      nextYear: "Next year (Control + right)",
      previousDecade: "Last decade",
      nextDecade: "Next decade",
      previousCentury: "Last century",
      nextCentury: "Next century",
    }
  );
const Fb = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"],
  },
  jg = {
    lang: Object.assign(
      {
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"],
      },
      i$
    ),
    timePickerLocale: Object.assign({}, Fb),
  },
  jn = "${label} is not a valid ${type}",
  oa = {
    locale: "en",
    Pagination: r$,
    DatePicker: jg,
    TimePicker: Fb,
    Calendar: jg,
    global: { placeholder: "Please select" },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting",
    },
    Tour: { Next: "Next", Previous: "Previous", Finish: "Finish" },
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Popconfirm: { okText: "OK", cancelText: "Cancel" },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      deselectAll: "Deselect all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page",
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file",
    },
    Empty: { description: "No data" },
    Icon: { icon: "icon" },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse",
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date",
        },
        types: {
          string: jn,
          method: jn,
          array: jn,
          object: jn,
          number: jn,
          date: jn,
          boolean: jn,
          integer: jn,
          float: jn,
          regexp: jn,
          email: jn,
          url: jn,
          hex: jn,
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters",
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}",
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}",
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
      },
    },
    Image: { preview: "Preview" },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned",
    },
    ColorPicker: {
      presetEmpty: "Empty",
      transparent: "Transparent",
      singleColor: "Single",
      gradientColor: "Gradient",
    },
  };
Object.assign({}, oa.Modal);
let Ys = [];
const zg = () =>
  Ys.reduce((e, t) => Object.assign(Object.assign({}, e), t), oa.Modal);
function a$(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      Ys.push(t),
      zg(),
      () => {
        (Ys = Ys.filter((n) => n !== t)), zg();
      }
    );
  }
  Object.assign({}, oa.Modal);
}
const um = f.createContext(void 0),
  l$ = (e, t) => {
    const n = f.useContext(um),
      r = f.useMemo(() => {
        var i;
        const a = oa[e],
          l = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
        return Object.assign(
          Object.assign({}, typeof a == "function" ? a() : a),
          l || {}
        );
      }, [e, t, n]),
      o = f.useMemo(() => {
        const i = n == null ? void 0 : n.locale;
        return n != null && n.exist && !i ? oa.locale : i;
      }, [n]);
    return [r, o];
  },
  s$ = "internalMark",
  u$ = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    f.useEffect(() => a$(t == null ? void 0 : t.Modal), [t]);
    const o = f.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return f.createElement(um.Provider, { value: o }, n);
  },
  jb = {
    blue: "#1677FF",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#EB2F96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911",
  },
  Ml = Object.assign(Object.assign({}, jb), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  });
function c$(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: l,
      colorPrimary: s,
      colorBgBase: u,
      colorTextBase: c,
    } = e,
    d = n(s),
    v = n(o),
    g = n(i),
    y = n(a),
    S = n(l),
    b = r(u, c),
    h = e.colorLink || e.colorInfo,
    p = n(h);
  return Object.assign(Object.assign({}, b), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBgActive: y[3],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: S[1],
    colorInfoBgHover: S[2],
    colorInfoBorder: S[3],
    colorInfoBorderHover: S[4],
    colorInfoHover: S[4],
    colorInfo: S[6],
    colorInfoActive: S[7],
    colorInfoTextHover: S[8],
    colorInfoText: S[9],
    colorInfoTextActive: S[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new tn("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}
const f$ = (e) => {
  let t = e,
    n = e,
    r = e,
    o = e;
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
      ? (t = e + 2)
      : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
      ? (n = 5)
      : e < 14 && e >= 8
      ? (n = 6)
      : e < 16 && e >= 14
      ? (n = 7)
      : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: o,
    }
  );
};
function d$(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    f$(r)
  );
}
const v$ = (e) => {
  const { controlHeight: t } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  };
};
function Zs(e) {
  return (e + 8) / e;
}
function p$(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(Math.E, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: Zs(n) }));
}
const m$ = (e) => {
  const t = p$(e),
    n = t.map((c) => c.size),
    r = t.map((c) => c.lineHeight),
    o = n[1],
    i = n[0],
    a = n[2],
    l = r[1],
    s = r[0],
    u = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: u,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(u * a),
    fontHeightSM: Math.round(s * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2],
  };
};
function h$(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const zr = (e, t) => new tn(e).setAlpha(t).toRgbString(),
  $a = (e, t) => new tn(e).darken(t).toHexString(),
  g$ = (e) => {
    const t = xl(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  y$ = (e, t) => {
    const n = e || "#fff",
      r = t || "#000";
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: zr(r, 0.88),
      colorTextSecondary: zr(r, 0.65),
      colorTextTertiary: zr(r, 0.45),
      colorTextQuaternary: zr(r, 0.25),
      colorFill: zr(r, 0.15),
      colorFillSecondary: zr(r, 0.06),
      colorFillTertiary: zr(r, 0.04),
      colorFillQuaternary: zr(r, 0.02),
      colorBgLayout: $a(n, 4),
      colorBgContainer: $a(n, 0),
      colorBgElevated: $a(n, 0),
      colorBgSpotlight: zr(r, 0.85),
      colorBgBlur: "transparent",
      colorBorder: $a(n, 15),
      colorBorderSecondary: $a(n, 6),
    };
  };
function S$(e) {
  (wf.pink = wf.magenta), (Cf.pink = Cf.magenta);
  const t = Object.keys(jb)
    .map((n) => {
      const r = e[n] === wf[n] ? Cf[n] : xl(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, i, a) => (
            (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            c$(e, {
              generateColorPalettes: g$,
              generateNeutralColorPalettes: y$,
            })
          ),
          m$(e.fontSize)
        ),
        h$(e)
      ),
      v$(e)
    ),
    d$(e)
  );
}
const zb = xv(S$),
  $v = { token: Ml, override: { override: Ml }, hashed: !0 },
  Lb = ne.createContext($v),
  ju = "ant",
  Db = "anticon",
  b$ = ["outlined", "borderless", "filled"],
  w$ = (e, t) => t || (e ? `${ju}-${e}` : ju),
  Dt = f.createContext({ getPrefixCls: w$, iconPrefixCls: Db }),
  C$ = `-ant-${Date.now()}-${Math.random()}`;
function x$(e, t) {
  const n = {},
    r = (a, l) => {
      let s = a.clone();
      return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString();
    },
    o = (a, l) => {
      const s = new tn(a),
        u = xl(s.toRgbString());
      (n[`${l}-color`] = r(s)),
        (n[`${l}-color-disabled`] = u[1]),
        (n[`${l}-color-hover`] = u[4]),
        (n[`${l}-color-active`] = u[6]),
        (n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
        (n[`${l}-color-deprecated-bg`] = u[0]),
        (n[`${l}-color-deprecated-border`] = u[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new tn(t.primaryColor),
      l = xl(a.toRgbString());
    l.forEach((u, c) => {
      n[`primary-${c + 1}`] = u;
    }),
      (n["primary-color-deprecated-l-35"] = r(a, (u) => u.lighten(35))),
      (n["primary-color-deprecated-l-20"] = r(a, (u) => u.lighten(20))),
      (n["primary-color-deprecated-t-20"] = r(a, (u) => u.tint(20))),
      (n["primary-color-deprecated-t-50"] = r(a, (u) => u.tint(50))),
      (n["primary-color-deprecated-f-12"] = r(a, (u) =>
        u.setAlpha(u.getAlpha() * 0.12)
      ));
    const s = new tn(l[0]);
    (n["primary-color-active-deprecated-f-30"] = r(s, (u) =>
      u.setAlpha(u.getAlpha() * 0.3)
    )),
      (n["primary-color-active-deprecated-d-02"] = r(s, (u) => u.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, "success"),
    t.warningColor && o(t.warningColor, "warning"),
    t.errorColor && o(t.errorColor, "error"),
    t.infoColor && o(t.infoColor, "info"),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function E$(e, t) {
  const n = x$(e, t);
  Tn() && Wr(n, `${C$}-dynamic-theme`);
}
const ii = f.createContext(!1),
  O$ = (e) => {
    let { children: t, disabled: n } = e;
    const r = f.useContext(ii);
    return f.createElement(ii.Provider, { value: n ?? r }, t);
  },
  ia = f.createContext(void 0),
  R$ = (e) => {
    let { children: t, size: n } = e;
    const r = f.useContext(ia);
    return f.createElement(ia.Provider, { value: n || r }, t);
  };
function P$() {
  const e = f.useContext(ii),
    t = f.useContext(ia);
  return { componentDisabled: e, componentSize: t };
}
var kb = ln(function e() {
    an(this, e);
  }),
  Bb = "CALC_UNIT",
  I$ = new RegExp(Bb, "g");
function Rf(e) {
  return typeof e == "number" ? "".concat(e).concat(Bb) : e;
}
var $$ = (function (e) {
    ui(n, e);
    var t = ci(n);
    function n(r, o) {
      var i;
      an(this, n),
        (i = t.call(this)),
        N(Ue(i), "result", ""),
        N(Ue(i), "unitlessCssVar", void 0),
        N(Ue(i), "lowPriority", void 0);
      var a = Ie(r);
      return (
        (i.unitlessCssVar = o),
        r instanceof n
          ? (i.result = "(".concat(r.result, ")"))
          : a === "number"
          ? (i.result = Rf(r))
          : a === "string" && (i.result = r),
        i
      );
    }
    return (
      ln(n, [
        {
          key: "add",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result = ""
                    .concat(this.result, " + ")
                    .concat(o.getResult()))
                : (typeof o == "number" || typeof o == "string") &&
                  (this.result = "".concat(this.result, " + ").concat(Rf(o))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: "sub",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result = ""
                    .concat(this.result, " - ")
                    .concat(o.getResult()))
                : (typeof o == "number" || typeof o == "string") &&
                  (this.result = "".concat(this.result, " - ").concat(Rf(o))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: "mul",
          value: function (o) {
            return (
              this.lowPriority && (this.result = "(".concat(this.result, ")")),
              o instanceof n
                ? (this.result = ""
                    .concat(this.result, " * ")
                    .concat(o.getResult(!0)))
                : (typeof o == "number" || typeof o == "string") &&
                  (this.result = "".concat(this.result, " * ").concat(o)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: "div",
          value: function (o) {
            return (
              this.lowPriority && (this.result = "(".concat(this.result, ")")),
              o instanceof n
                ? (this.result = ""
                    .concat(this.result, " / ")
                    .concat(o.getResult(!0)))
                : (typeof o == "number" || typeof o == "string") &&
                  (this.result = "".concat(this.result, " / ").concat(o)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: "getResult",
          value: function (o) {
            return this.lowPriority || o
              ? "(".concat(this.result, ")")
              : this.result;
          },
        },
        {
          key: "equal",
          value: function (o) {
            var i = this,
              a = o || {},
              l = a.unit,
              s = !0;
            return (
              typeof l == "boolean"
                ? (s = l)
                : Array.from(this.unitlessCssVar).some(function (u) {
                    return i.result.includes(u);
                  }) && (s = !1),
              (this.result = this.result.replace(I$, s ? "px" : "")),
              typeof this.lowPriority < "u"
                ? "calc(".concat(this.result, ")")
                : this.result
            );
          },
        },
      ]),
      n
    );
  })(kb),
  T$ = (function (e) {
    ui(n, e);
    var t = ci(n);
    function n(r) {
      var o;
      return (
        an(this, n),
        (o = t.call(this)),
        N(Ue(o), "result", 0),
        r instanceof n
          ? (o.result = r.result)
          : typeof r == "number" && (o.result = r),
        o
      );
    }
    return (
      ln(n, [
        {
          key: "add",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result += o.result)
                : typeof o == "number" && (this.result += o),
              this
            );
          },
        },
        {
          key: "sub",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result -= o.result)
                : typeof o == "number" && (this.result -= o),
              this
            );
          },
        },
        {
          key: "mul",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result *= o.result)
                : typeof o == "number" && (this.result *= o),
              this
            );
          },
        },
        {
          key: "div",
          value: function (o) {
            return (
              o instanceof n
                ? (this.result /= o.result)
                : typeof o == "number" && (this.result /= o),
              this
            );
          },
        },
        {
          key: "equal",
          value: function () {
            return this.result;
          },
        },
      ]),
      n
    );
  })(kb),
  M$ = function (t, n) {
    var r = t === "css" ? $$ : T$;
    return function (o) {
      return new r(o, n);
    };
  },
  Lg = function (t, n) {
    return "".concat(
      [
        n,
        t
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2"),
      ]
        .filter(Boolean)
        .join("-")
    );
  };
function Xt(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function _l(e) {
  var t = f.useRef(!1),
    n = f.useState(e),
    r = H(n, 2),
    o = r[0],
    i = r[1];
  f.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(l, s) {
    (s && t.current) || i(l);
  }
  return [o, a];
}
function Pf(e) {
  return e !== void 0;
}
function ai(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    l = _l(function () {
      return Pf(o)
        ? o
        : Pf(r)
        ? typeof r == "function"
          ? r()
          : r
        : typeof e == "function"
        ? e()
        : e;
    }),
    s = H(l, 2),
    u = s[0],
    c = s[1],
    d = o !== void 0 ? o : u,
    v = a ? a(d) : d,
    g = Xt(i),
    y = _l([d]),
    S = H(y, 2),
    b = S[0],
    h = S[1];
  Tg(
    function () {
      var m = b[0];
      u !== m && g(u, m);
    },
    [b]
  ),
    Tg(
      function () {
        Pf(o) || c(o);
      },
      [o]
    );
  var p = Xt(function (m, w) {
    c(m, w), h([d], w);
  });
  return [v, p];
}
function Dg(e, t, n, r) {
  var o = F({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function (l) {
      var s = H(l, 2),
        u = s[0],
        c = s[1];
      if ((o != null && o[u]) || (o != null && o[c])) {
        var d;
        ((d = o[c]) !== null && d !== void 0) ||
          (o[c] = o == null ? void 0 : o[u]);
      }
    });
  }
  var a = F(F({}, n), o);
  return (
    Object.keys(a).forEach(function (l) {
      a[l] === t[l] && delete a[l];
    }),
    a
  );
}
var Hb = typeof CSSINJS_STATISTIC < "u",
  Tv = !0;
function dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Hb) return Object.assign.apply(Object, [{}].concat(t));
  Tv = !1;
  var r = {};
  return (
    t.forEach(function (o) {
      if (Ie(o) === "object") {
        var i = Object.keys(o);
        i.forEach(function (a) {
          Object.defineProperty(r, a, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return o[a];
            },
          });
        });
      }
    }),
    (Tv = !0),
    r
  );
}
var kg = {};
function _$() {}
var A$ = function (t) {
  var n,
    r = t,
    o = _$;
  return (
    Hb &&
      typeof Proxy < "u" &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, l) {
          return Tv && n.add(l), a[l];
        },
      })),
      (o = function (a, l) {
        var s;
        kg[a] = {
          global: Array.from(n),
          component: F(
            F({}, (s = kg[a]) === null || s === void 0 ? void 0 : s.component),
            l
          ),
        };
      })),
    { token: r, keys: n, flush: o }
  );
};
function Bg(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(dn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function N$(e) {
  return e === "js"
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return "max(".concat(
            r
              .map(function (i) {
                return Ne(i);
              })
              .join(","),
            ")"
          );
        },
        min: function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return "min(".concat(
            r
              .map(function (i) {
                return Ne(i);
              })
              .join(","),
            ")"
          );
        },
      };
}
var F$ = 1e3 * 60 * 10,
  j$ = (function () {
    function e() {
      an(this, e),
        N(this, "map", new Map()),
        N(this, "objectIDMap", new WeakMap()),
        N(this, "nextID", 0),
        N(this, "lastAccessBeat", new Map()),
        N(this, "accessBeat", 0);
    }
    return (
      ln(e, [
        {
          key: "set",
          value: function (n, r) {
            this.clear();
            var o = this.getCompositeKey(n);
            this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
          },
        },
        {
          key: "get",
          value: function (n) {
            var r = this.getCompositeKey(n),
              o = this.map.get(r);
            return (
              this.lastAccessBeat.set(r, Date.now()), (this.accessBeat += 1), o
            );
          },
        },
        {
          key: "getCompositeKey",
          value: function (n) {
            var r = this,
              o = n.map(function (i) {
                return i && Ie(i) === "object"
                  ? "obj_".concat(r.getObjectID(i))
                  : "".concat(Ie(i), "_").concat(i);
              });
            return o.join("|");
          },
        },
        {
          key: "getObjectID",
          value: function (n) {
            if (this.objectIDMap.has(n)) return this.objectIDMap.get(n);
            var r = this.nextID;
            return this.objectIDMap.set(n, r), (this.nextID += 1), r;
          },
        },
        {
          key: "clear",
          value: function () {
            var n = this;
            if (this.accessBeat > 1e4) {
              var r = Date.now();
              this.lastAccessBeat.forEach(function (o, i) {
                r - o > F$ && (n.map.delete(i), n.lastAccessBeat.delete(i));
              }),
                (this.accessBeat = 0);
            }
          },
        },
      ]),
      e
    );
  })(),
  Hg = new j$();
function z$(e, t) {
  return ne.useMemo(function () {
    var n = Hg.get(t);
    if (n) return n;
    var r = e();
    return Hg.set(t, r), r;
  }, t);
}
var L$ = function () {
  return {};
};
function D$(e) {
  var t = e.useCSP,
    n = t === void 0 ? L$ : t,
    r = e.useToken,
    o = e.usePrefix,
    i = e.getResetStyles,
    a = e.getCommonStyle,
    l = e.getCompUnitless;
  function s(v, g, y, S) {
    var b = Array.isArray(v) ? v[0] : v;
    function h(R) {
      return ""
        .concat(String(b))
        .concat(R.slice(0, 1).toUpperCase())
        .concat(R.slice(1));
    }
    var p = (S == null ? void 0 : S.unitless) || {},
      m = typeof l == "function" ? l(v) : {},
      w = F(F({}, m), {}, N({}, h("zIndexPopup"), !0));
    Object.keys(p).forEach(function (R) {
      w[h(R)] = p[R];
    });
    var C = F(F({}, S), {}, { unitless: w, prefixToken: h }),
      E = c(v, g, y, C),
      x = u(b, y, C);
    return function (R) {
      var P =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R,
        _ = E(R, P),
        j = H(_, 2),
        L = j[1],
        D = x(P),
        z = H(D, 2),
        V = z[0],
        T = z[1];
      return [V, L, T];
    };
  }
  function u(v, g, y) {
    var S = y.unitless,
      b = y.injectStyle,
      h = b === void 0 ? !0 : b,
      p = y.prefixToken,
      m = y.ignore,
      w = function (x) {
        var R = x.rootCls,
          P = x.cssVar,
          _ = P === void 0 ? {} : P,
          j = r(),
          L = j.realToken;
        return (
          YI(
            {
              path: [v],
              prefix: _.prefix,
              key: _.key,
              unitless: S,
              ignore: m,
              token: L,
              scope: R,
            },
            function () {
              var D = Bg(v, L, g),
                z = Dg(v, L, D, {
                  deprecatedTokens: y == null ? void 0 : y.deprecatedTokens,
                });
              return (
                Object.keys(D).forEach(function (V) {
                  (z[p(V)] = z[V]), delete z[V];
                }),
                z
              );
            }
          ),
          null
        );
      },
      C = function (x) {
        var R = r(),
          P = R.cssVar;
        return [
          function (_) {
            return h && P
              ? ne.createElement(
                  ne.Fragment,
                  null,
                  ne.createElement(w, { rootCls: x, cssVar: P, component: v }),
                  _
                )
              : _;
          },
          P == null ? void 0 : P.key,
        ];
      };
    return C;
  }
  function c(v, g, y) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      b = Array.isArray(v) ? v : [v, v],
      h = H(b, 1),
      p = h[0],
      m = b.join("-");
    return function (w) {
      var C =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w,
        E = r(),
        x = E.theme,
        R = E.realToken,
        P = E.hashId,
        _ = E.token,
        j = E.cssVar,
        L = o(),
        D = L.rootPrefixCls,
        z = L.iconPrefixCls,
        V = n(),
        T = j ? "css" : "js",
        I = z$(
          function () {
            var B = new Set();
            return (
              j &&
                Object.keys(S.unitless || {}).forEach(function (W) {
                  B.add(Ks(W, j.prefix)), B.add(Ks(W, Lg(p, j.prefix)));
                }),
              M$(T, B)
            );
          },
          [T, p, j == null ? void 0 : j.prefix]
        ),
        O = N$(T),
        M = O.max,
        A = O.min,
        $ = {
          theme: x,
          token: _,
          hashId: P,
          nonce: function () {
            return V.nonce;
          },
          clientOnly: S.clientOnly,
          layer: { name: "antd" },
          order: S.order || -999,
        };
      Iv(F(F({}, $), {}, { clientOnly: !1, path: ["Shared", D] }), function () {
        return typeof i == "function" ? i(_) : [];
      });
      var k = Iv(F(F({}, $), {}, { path: [m, w, z] }), function () {
        if (S.injectStyle === !1) return [];
        var B = A$(_),
          W = B.token,
          K = B.flush,
          se = Bg(p, R, y),
          q = ".".concat(w),
          oe = Dg(p, R, se, { deprecatedTokens: S.deprecatedTokens });
        j &&
          Ie(se) === "object" &&
          Object.keys(se).forEach(function (Z) {
            se[Z] = "var(".concat(Ks(Z, Lg(p, j.prefix)), ")");
          });
        var Ce = dn(
            W,
            {
              componentCls: q,
              prefixCls: w,
              iconCls: ".".concat(z),
              antCls: ".".concat(D),
              calc: I,
              max: M,
              min: A,
            },
            j ? se : oe
          ),
          G = g(Ce, {
            hashId: P,
            prefixCls: w,
            rootPrefixCls: D,
            iconPrefixCls: z,
          });
        K(p, oe);
        var U = typeof a == "function" ? a(Ce, w, C, S.resetFont) : null;
        return [S.resetStyle === !1 ? null : U, G];
      });
      return [k, P];
    };
  }
  function d(v, g, y) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      b = c(v, g, y, F({ resetStyle: !1, order: -998 }, S)),
      h = function (m) {
        var w = m.prefixCls,
          C = m.rootCls,
          E = C === void 0 ? w : C;
        return b(w, E), null;
      };
    return h;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: c,
  };
}
const k$ = "5.20.0";
function If(e) {
  return e >= 0 && e <= 255;
}
function Ps(e, t) {
  const { r: n, g: r, b: o, a: i } = new tn(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: s } = new tn(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      d = Math.round((r - l * (1 - u)) / u),
      v = Math.round((o - s * (1 - u)) / u);
    if (If(c) && If(d) && If(v))
      return new tn({
        r: c,
        g: d,
        b: v,
        a: Math.round(u * 100) / 100,
      }).toRgbString();
  }
  return new tn({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var B$ = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function Vb(e) {
  const { override: t } = e,
    n = B$(e, ["override"]),
    r = Object.assign({}, t);
  Object.keys(Ml).forEach((v) => {
    delete r[v];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    l = 768,
    s = 992,
    u = 1200,
    c = 1600;
  if (o.motion === !1) {
    const v = "0s";
    (o.motionDurationFast = v),
      (o.motionDurationMid = v),
      (o.motionDurationSlow = v);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: Ps(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: Ps(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: Ps(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 4,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: Ps(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: s - 1,
      screenLG: s,
      screenLGMin: s,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new tn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new tn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new tn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    r
  );
}
var Vg = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const Wb = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0,
  },
  H$ = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  V$ = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  Ub = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: o } = t,
      i = Vg(t, ["override"]);
    let a = Object.assign(Object.assign({}, r), { override: o });
    return (
      (a = Vb(a)),
      i &&
        Object.entries(i).forEach((l) => {
          let [s, u] = l;
          const { theme: c } = u,
            d = Vg(u, ["theme"]);
          let v = d;
          c &&
            (v = Ub(
              Object.assign(Object.assign({}, a), d),
              { override: d },
              c
            )),
            (a[s] = v);
        }),
      a
    );
  };
function _r() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: o,
    } = ne.useContext(Lb),
    i = `${k$}-${t || ""}`,
    a = n || zb,
    [l, s, u] = xI(a, [Ml, e], {
      salt: i,
      override: r,
      getComputedToken: Ub,
      formatToken: Vb,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: Wb,
        ignore: H$,
        preserve: V$,
      },
    });
  return [a, u, t ? s : "", l, o];
}
const Mv = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  Ul = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: "none",
      fontFamily: t ? "inherit" : e.fontFamily,
    };
  },
  cm = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": { lineHeight: 1 },
    svg: { display: "inline-block" },
  }),
  W$ = () => ({
    "&::before": { display: "table", content: '""' },
    "&::after": { display: "table", clear: "both", content: '""' },
  }),
  U$ = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": { color: e.colorLinkHover },
      "&:active": { color: e.colorLinkActive },
      "&:active, &:hover": {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
      "&[disabled]": { color: e.colorTextDisabled, cursor: "not-allowed" },
    },
  }),
  K$ = (e, t, n, r) => {
    const o = `[class^="${t}"], [class*=" ${t}"]`,
      i = n ? `.${n}` : o,
      a = {
        boxSizing: "border-box",
        "&::before, &::after": { boxSizing: "border-box" },
      };
    let l = {};
    return (
      r !== !1 && (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
      { [i]: Object.assign(Object.assign(Object.assign({}, l), a), { [o]: a }) }
    );
  },
  G$ = (e) => ({
    outline: `${Ne(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s",
  }),
  q$ = (e) => ({ "&:focus-visible": Object.assign({}, G$(e)) }),
  Kb = (e, t) => {
    const [n, r] = _r();
    return Iv(
      {
        theme: n,
        token: r,
        hashId: "",
        path: ["ant-design-icons", e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: "antd" },
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, cm()), {
            [`.${e} .${e}-icon`]: { display: "block" },
          }),
        },
      ]
    );
  },
  {
    genStyleHooks: Kl,
    genComponentStyleHook: X$,
    genSubStyleComponent: Q$,
  } = D$({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = f.useContext(Dt);
      return { rootPrefixCls: e(), iconPrefixCls: t };
    },
    useToken: () => {
      const [e, t, n, r, o] = _r();
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: o };
    },
    useCSP: () => {
      const { csp: e, iconPrefixCls: t } = f.useContext(Dt);
      return Kb(t, e), e ?? {};
    },
    getResetStyles: (e) => [{ "&": U$(e) }],
    getCommonStyle: K$,
    getCompUnitless: () => Wb,
  }),
  Y$ = Object.assign({}, Ui),
  { useId: Wg } = Y$,
  Z$ = () => "",
  J$ = typeof Wg > "u" ? Z$ : Wg;
function eT(e, t, n) {
  var r;
  const o = e || {},
    i =
      o.inherit === !1 || !t
        ? Object.assign(Object.assign({}, $v), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : $v.hashed,
            cssVar: t == null ? void 0 : t.cssVar,
          })
        : t,
    a = J$();
  return Ec(
    () => {
      var l, s;
      if (!e) return t;
      const u = Object.assign({}, i.components);
      Object.keys(e.components || {}).forEach((v) => {
        u[v] = Object.assign(Object.assign({}, u[v]), e.components[v]);
      });
      const c = `css-var-${a.replace(/:/g, "")}`,
        d =
          ((l = o.cssVar) !== null && l !== void 0 ? l : i.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof i.cssVar == "object" ? i.cssVar : {}
              ),
              typeof o.cssVar == "object" ? o.cssVar : {}
            ),
            {
              key:
                (typeof o.cssVar == "object" &&
                  ((s = o.cssVar) === null || s === void 0 ? void 0 : s.key)) ||
                c,
            }
          );
      return Object.assign(Object.assign(Object.assign({}, i), o), {
        token: Object.assign(Object.assign({}, i.token), o.token),
        components: u,
        cssVar: d,
      });
    },
    [o, i],
    (l, s) =>
      l.some((u, c) => {
        const d = s[c];
        return !wv(u, d, !0);
      })
  );
}
var tT = ["children"],
  Gb = f.createContext({});
function nT(e) {
  var t = e.children,
    n = yt(e, tT);
  return f.createElement(Gb.Provider, { value: n }, t);
}
var rT = (function (e) {
  ui(n, e);
  var t = ci(n);
  function n() {
    return an(this, n), t.apply(this, arguments);
  }
  return (
    ln(n, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(f.Component);
function oT(e) {
  var t = f.useReducer(function (l) {
      return l + 1;
    }, 0),
    n = H(t, 2),
    r = n[1],
    o = f.useRef(e),
    i = Xt(function () {
      return o.current;
    }),
    a = Xt(function (l) {
      (o.current = typeof l == "function" ? l(o.current) : l), r();
    });
  return [i, a];
}
var ao = "none",
  Is = "appear",
  $s = "enter",
  Ts = "leave",
  Ug = "none",
  pr = "prepare",
  ji = "start",
  zi = "active",
  fm = "end",
  qb = "prepared";
function Kg(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit".concat(e)] = "webkit".concat(t)),
    (n["Moz".concat(e)] = "moz".concat(t)),
    (n["ms".concat(e)] = "MS".concat(t)),
    (n["O".concat(e)] = "o".concat(t.toLowerCase())),
    n
  );
}
function iT(e, t) {
  var n = {
    animationend: Kg("Animation", "AnimationEnd"),
    transitionend: Kg("Transition", "TransitionEnd"),
  };
  return (
    e &&
      ("AnimationEvent" in t || delete n.animationend.animation,
      "TransitionEvent" in t || delete n.transitionend.transition),
    n
  );
}
var aT = iT(Tn(), typeof window < "u" ? window : {}),
  Xb = {};
if (Tn()) {
  var lT = document.createElement("div");
  Xb = lT.style;
}
var Ms = {};
function Qb(e) {
  if (Ms[e]) return Ms[e];
  var t = aT[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Xb)
        return (Ms[e] = t[i]), Ms[e];
    }
  return "";
}
var Yb = Qb("animationend"),
  Zb = Qb("transitionend"),
  Jb = !!(Yb && Zb),
  Gg = Yb || "animationend",
  qg = Zb || "transitionend";
function Xg(e, t) {
  if (!e) return null;
  if (Ie(e) === "object") {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const sT = function (e) {
  var t = f.useRef();
  function n(o) {
    o && (o.removeEventListener(qg, e), o.removeEventListener(Gg, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current),
      o &&
        o !== t.current &&
        (o.addEventListener(qg, e), o.addEventListener(Gg, e), (t.current = o));
  }
  return (
    f.useEffect(function () {
      return function () {
        n(t.current);
      };
    }, []),
    [r, n]
  );
};
var ew = Tn() ? f.useLayoutEffect : f.useEffect;
const uT = function () {
  var e = f.useRef(null);
  function t() {
    At.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = At(function () {
      o <= 1
        ? r({
            isCanceled: function () {
              return i !== e.current;
            },
          })
        : n(r, o - 1);
    });
    e.current = i;
  }
  return (
    f.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var cT = [pr, ji, zi, fm],
  fT = [pr, qb],
  tw = !1,
  dT = !0;
function nw(e) {
  return e === zi || e === fm;
}
const vT = function (e, t, n) {
  var r = _l(Ug),
    o = H(r, 2),
    i = o[0],
    a = o[1],
    l = uT(),
    s = H(l, 2),
    u = s[0],
    c = s[1];
  function d() {
    a(pr, !0);
  }
  var v = t ? fT : cT;
  return (
    ew(
      function () {
        if (i !== Ug && i !== fm) {
          var g = v.indexOf(i),
            y = v[g + 1],
            S = n(i);
          S === tw
            ? a(y, !0)
            : y &&
              u(function (b) {
                function h() {
                  b.isCanceled() || a(y, !0);
                }
                S === !0 ? h() : Promise.resolve(S).then(h);
              });
        }
      },
      [e, i]
    ),
    f.useEffect(function () {
      return function () {
        c();
      };
    }, []),
    [d, i]
  );
};
function pT(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    l = a === void 0 ? !0 : a,
    s = r.motionLeave,
    u = s === void 0 ? !0 : s,
    c = r.motionDeadline,
    d = r.motionLeaveImmediately,
    v = r.onAppearPrepare,
    g = r.onEnterPrepare,
    y = r.onLeavePrepare,
    S = r.onAppearStart,
    b = r.onEnterStart,
    h = r.onLeaveStart,
    p = r.onAppearActive,
    m = r.onEnterActive,
    w = r.onLeaveActive,
    C = r.onAppearEnd,
    E = r.onEnterEnd,
    x = r.onLeaveEnd,
    R = r.onVisibleChanged,
    P = _l(),
    _ = H(P, 2),
    j = _[0],
    L = _[1],
    D = oT(ao),
    z = H(D, 2),
    V = z[0],
    T = z[1],
    I = _l(null),
    O = H(I, 2),
    M = O[0],
    A = O[1],
    $ = V(),
    k = f.useRef(!1),
    B = f.useRef(null);
  function W() {
    return n();
  }
  var K = f.useRef(!1);
  function se() {
    T(ao), A(null, !0);
  }
  var q = Xt(function (Oe) {
      var xe = V();
      if (xe !== ao) {
        var Le = W();
        if (!(Oe && !Oe.deadline && Oe.target !== Le)) {
          var fe = K.current,
            Y;
          xe === Is && fe
            ? (Y = C == null ? void 0 : C(Le, Oe))
            : xe === $s && fe
            ? (Y = E == null ? void 0 : E(Le, Oe))
            : xe === Ts && fe && (Y = x == null ? void 0 : x(Le, Oe)),
            fe && Y !== !1 && se();
        }
      }
    }),
    oe = sT(q),
    Ce = H(oe, 1),
    G = Ce[0],
    U = function (xe) {
      switch (xe) {
        case Is:
          return N(N(N({}, pr, v), ji, S), zi, p);
        case $s:
          return N(N(N({}, pr, g), ji, b), zi, m);
        case Ts:
          return N(N(N({}, pr, y), ji, h), zi, w);
        default:
          return {};
      }
    },
    Z = f.useMemo(
      function () {
        return U($);
      },
      [$]
    ),
    le = vT($, !e, function (Oe) {
      if (Oe === pr) {
        var xe = Z[pr];
        return xe ? xe(W()) : tw;
      }
      if (re in Z) {
        var Le;
        A(
          ((Le = Z[re]) === null || Le === void 0
            ? void 0
            : Le.call(Z, W(), null)) || null
        );
      }
      return (
        re === zi &&
          $ !== ao &&
          (G(W()),
          c > 0 &&
            (clearTimeout(B.current),
            (B.current = setTimeout(function () {
              q({ deadline: !0 });
            }, c)))),
        re === qb && se(),
        dT
      );
    }),
    X = H(le, 2),
    de = X[0],
    re = X[1],
    ge = nw(re);
  (K.current = ge),
    ew(
      function () {
        L(t);
        var Oe = k.current;
        k.current = !0;
        var xe;
        !Oe && t && l && (xe = Is),
          Oe && t && i && (xe = $s),
          ((Oe && !t && u) || (!Oe && d && !t && u)) && (xe = Ts);
        var Le = U(xe);
        xe && (e || Le[pr]) ? (T(xe), de()) : T(ao);
      },
      [t]
    ),
    f.useEffect(
      function () {
        (($ === Is && !l) || ($ === $s && !i) || ($ === Ts && !u)) && T(ao);
      },
      [l, i, u]
    ),
    f.useEffect(function () {
      return function () {
        (k.current = !1), clearTimeout(B.current);
      };
    }, []);
  var Se = f.useRef(!1);
  f.useEffect(
    function () {
      j && (Se.current = !0),
        j !== void 0 &&
          $ === ao &&
          ((Se.current || j) && (R == null || R(j)), (Se.current = !0));
    },
    [j, $]
  );
  var ce = M;
  return (
    Z[pr] && re === ji && (ce = F({ transition: "none" }, ce)),
    [$, re, ce, j ?? t]
  );
}
function mT(e) {
  var t = e;
  Ie(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = f.forwardRef(function (o, i) {
    var a = o.visible,
      l = a === void 0 ? !0 : a,
      s = o.removeOnLeave,
      u = s === void 0 ? !0 : s,
      c = o.forceRender,
      d = o.children,
      v = o.motionName,
      g = o.leavedClassName,
      y = o.eventProps,
      S = f.useContext(Gb),
      b = S.motion,
      h = n(o, b),
      p = f.useRef(),
      m = f.useRef();
    function w() {
      try {
        return p.current instanceof HTMLElement ? p.current : Ya(m.current);
      } catch {
        return null;
      }
    }
    var C = pT(h, l, w, o),
      E = H(C, 4),
      x = E[0],
      R = E[1],
      P = E[2],
      _ = E[3],
      j = f.useRef(_);
    _ && (j.current = !0);
    var L = f.useCallback(
        function (M) {
          (p.current = M), nm(i, M);
        },
        [i]
      ),
      D,
      z = F(F({}, y), {}, { visible: l });
    if (!d) D = null;
    else if (x === ao)
      _
        ? (D = d(F({}, z), L))
        : !u && j.current && g
        ? (D = d(F(F({}, z), {}, { className: g }), L))
        : c || (!u && !g)
        ? (D = d(F(F({}, z), {}, { style: { display: "none" } }), L))
        : (D = null);
    else {
      var V;
      R === pr
        ? (V = "prepare")
        : nw(R)
        ? (V = "active")
        : R === ji && (V = "start");
      var T = Xg(v, "".concat(x, "-").concat(V));
      D = d(
        F(
          F({}, z),
          {},
          {
            className: me(
              Xg(v, x),
              N(N({}, T, T && V), v, typeof v == "string")
            ),
            style: P,
          }
        ),
        L
      );
    }
    if (f.isValidElement(D) && Vl(D)) {
      var I = D,
        O = I.ref;
      O || (D = f.cloneElement(D, { ref: L }));
    }
    return f.createElement(rT, { ref: m }, D);
  });
  return (r.displayName = "CSSMotion"), r;
}
const Gl = mT(Jb);
var _v = "add",
  Av = "keep",
  Nv = "remove",
  $f = "removed";
function hT(e) {
  var t;
  return (
    e && Ie(e) === "object" && "key" in e ? (t = e) : (t = { key: e }),
    F(F({}, t), {}, { key: String(t.key) })
  );
}
function Fv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(hT);
}
function gT() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = Fv(e),
    a = Fv(t);
  i.forEach(function (u) {
    for (var c = !1, d = r; d < o; d += 1) {
      var v = a[d];
      if (v.key === u.key) {
        r < d &&
          ((n = n.concat(
            a.slice(r, d).map(function (g) {
              return F(F({}, g), {}, { status: _v });
            })
          )),
          (r = d)),
          n.push(F(F({}, v), {}, { status: Av })),
          (r += 1),
          (c = !0);
        break;
      }
    }
    c || n.push(F(F({}, u), {}, { status: Nv }));
  }),
    r < o &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return F(F({}, u), {}, { status: _v });
        })
      ));
  var l = {};
  n.forEach(function (u) {
    var c = u.key;
    l[c] = (l[c] || 0) + 1;
  });
  var s = Object.keys(l).filter(function (u) {
    return l[u] > 1;
  });
  return (
    s.forEach(function (u) {
      (n = n.filter(function (c) {
        var d = c.key,
          v = c.status;
        return d !== u || v !== Nv;
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = Av);
        });
    }),
    n
  );
}
var yT = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  ST = ["status"],
  bT = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearPrepare",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd",
  ];
function wT(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gl,
    n = (function (r) {
      ui(i, r);
      var o = ci(i);
      function i() {
        var a;
        an(this, i);
        for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
          s[u] = arguments[u];
        return (
          (a = o.call.apply(o, [this].concat(s))),
          N(Ue(a), "state", { keyEntities: [] }),
          N(Ue(a), "removeKey", function (c) {
            var d = a.state.keyEntities,
              v = d.map(function (g) {
                return g.key !== c ? g : F(F({}, g), {}, { status: $f });
              });
            return (
              a.setState({ keyEntities: v }),
              v.filter(function (g) {
                var y = g.status;
                return y !== $f;
              }).length
            );
          }),
          a
        );
      }
      return (
        ln(
          i,
          [
            {
              key: "render",
              value: function () {
                var l = this,
                  s = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  d = u.children,
                  v = u.onVisibleChanged,
                  g = u.onAllRemoved,
                  y = yt(u, yT),
                  S = c || f.Fragment,
                  b = {};
                return (
                  bT.forEach(function (h) {
                    (b[h] = y[h]), delete y[h];
                  }),
                  delete y.keys,
                  f.createElement(
                    S,
                    y,
                    s.map(function (h, p) {
                      var m = h.status,
                        w = yt(h, ST),
                        C = m === _v || m === Av;
                      return f.createElement(
                        t,
                        We({}, b, {
                          key: w.key,
                          visible: C,
                          eventProps: w,
                          onVisibleChanged: function (x) {
                            if ((v == null || v(x, { key: w.key }), !x)) {
                              var R = l.removeKey(w.key);
                              R === 0 && g && g();
                            }
                          },
                        }),
                        function (E, x) {
                          return d(F(F({}, E), {}, { index: p }), x);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (l, s) {
                var u = l.keys,
                  c = s.keyEntities,
                  d = Fv(u),
                  v = gT(c, d);
                return {
                  keyEntities: v.filter(function (g) {
                    var y = c.find(function (S) {
                      var b = S.key;
                      return g.key === b;
                    });
                    return !(y && y.status === $f && g.status === Nv);
                  }),
                };
              },
            },
          ]
        ),
        i
      );
    })(f.Component);
  return N(n, "defaultProps", { component: "div" }), n;
}
wT(Jb);
function CT(e) {
  const { children: t } = e,
    [, n] = _r(),
    { motion: r } = n,
    o = f.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? f.createElement(nT, { motion: r }, t) : t
  );
}
const xT = () => null;
var ET = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const OT = [
  "getTargetContainer",
  "getPopupContainer",
  "renderEmpty",
  "input",
  "pagination",
  "form",
  "select",
  "button",
];
let rw;
function RT() {
  return rw || ju;
}
function PT(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const IT = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: o } = e;
    t !== void 0 && (rw = t), r && PT(r) && E$(RT(), r);
  },
  $T = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: l,
        componentSize: s,
        direction: u,
        space: c,
        virtual: d,
        dropdownMatchSelectWidth: v,
        popupMatchSelectWidth: g,
        popupOverflow: y,
        legacyLocale: S,
        parentContext: b,
        iconPrefixCls: h,
        theme: p,
        componentDisabled: m,
        segmented: w,
        statistic: C,
        spin: E,
        calendar: x,
        carousel: R,
        cascader: P,
        collapse: _,
        typography: j,
        checkbox: L,
        descriptions: D,
        divider: z,
        drawer: V,
        skeleton: T,
        steps: I,
        image: O,
        layout: M,
        list: A,
        mentions: $,
        modal: k,
        progress: B,
        result: W,
        slider: K,
        breadcrumb: se,
        menu: q,
        pagination: oe,
        input: Ce,
        textArea: G,
        empty: U,
        badge: Z,
        radio: le,
        rate: X,
        switch: de,
        transfer: re,
        avatar: ge,
        message: Se,
        tag: ce,
        table: Oe,
        card: xe,
        tabs: Le,
        timeline: fe,
        timePicker: Y,
        upload: Re,
        notification: ve,
        tree: He,
        colorPicker: Fe,
        datePicker: Ae,
        rangePicker: De,
        flex: ct,
        wave: Je,
        dropdown: $e,
        warning: Te,
        tour: dt,
        floatButtonGroup: et,
        variant: rt,
        inputNumber: Ze,
        treeSelect: Nt,
      } = e,
      st = f.useCallback(
        (J, ue) => {
          const { prefixCls: ae } = e;
          if (ue) return ue;
          const Ee = ae || b.getPrefixCls("");
          return J ? `${Ee}-${J}` : Ee;
        },
        [b.getPrefixCls, e.prefixCls]
      ),
      vt = h || b.iconPrefixCls || Db,
      Ut = n || b.csp;
    Kb(vt, Ut);
    const pt = eT(p, b.theme, { prefixCls: st("") }),
      Ge = {
        csp: Ut,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || S,
        direction: u,
        space: c,
        virtual: d,
        popupMatchSelectWidth: g ?? v,
        popupOverflow: y,
        getPrefixCls: st,
        iconPrefixCls: vt,
        theme: pt,
        segmented: w,
        statistic: C,
        spin: E,
        calendar: x,
        carousel: R,
        cascader: P,
        collapse: _,
        typography: j,
        checkbox: L,
        descriptions: D,
        divider: z,
        drawer: V,
        skeleton: T,
        steps: I,
        image: O,
        input: Ce,
        textArea: G,
        layout: M,
        list: A,
        mentions: $,
        modal: k,
        progress: B,
        result: W,
        slider: K,
        breadcrumb: se,
        menu: q,
        pagination: oe,
        empty: U,
        badge: Z,
        radio: le,
        rate: X,
        switch: de,
        transfer: re,
        avatar: ge,
        message: Se,
        tag: ce,
        table: Oe,
        card: xe,
        tabs: Le,
        timeline: fe,
        timePicker: Y,
        upload: Re,
        notification: ve,
        tree: He,
        colorPicker: Fe,
        datePicker: Ae,
        rangePicker: De,
        flex: ct,
        wave: Je,
        dropdown: $e,
        warning: Te,
        tour: dt,
        floatButtonGroup: et,
        variant: rt,
        inputNumber: Ze,
        treeSelect: Nt,
      },
      je = Object.assign({}, b);
    Object.keys(Ge).forEach((J) => {
      Ge[J] !== void 0 && (je[J] = Ge[J]);
    }),
      OT.forEach((J) => {
        const ue = e[J];
        ue && (je[J] = ue);
      }),
      typeof r < "u" &&
        (je.button = Object.assign({ autoInsertSpace: r }, je.button));
    const Ve = Ec(
        () => je,
        je,
        (J, ue) => {
          const ae = Object.keys(J),
            Ee = Object.keys(ue);
          return ae.length !== Ee.length || ae.some((Be) => J[Be] !== ue[Be]);
        }
      ),
      Pe = f.useMemo(() => ({ prefixCls: vt, csp: Ut }), [vt, Ut]);
    let ie = f.createElement(
      f.Fragment,
      null,
      f.createElement(xT, { dropdownMatchSelectWidth: v }),
      t
    );
    const Ke = f.useMemo(() => {
      var J, ue, ae, Ee;
      return Fi(
        ((J = oa.Form) === null || J === void 0
          ? void 0
          : J.defaultValidateMessages) || {},
        ((ae =
          (ue = Ve.locale) === null || ue === void 0 ? void 0 : ue.Form) ===
          null || ae === void 0
          ? void 0
          : ae.defaultValidateMessages) || {},
        ((Ee = Ve.form) === null || Ee === void 0
          ? void 0
          : Ee.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      );
    }, [Ve, a == null ? void 0 : a.validateMessages]);
    Object.keys(Ke).length > 0 &&
      (ie = f.createElement(n$.Provider, { value: Ke }, ie)),
      l && (ie = f.createElement(u$, { locale: l, _ANT_MARK__: s$ }, ie)),
      (vt || Ut) && (ie = f.createElement(Yp.Provider, { value: Pe }, ie)),
      s && (ie = f.createElement(R$, { size: s }, ie)),
      (ie = f.createElement(CT, null, ie));
    const ot = f.useMemo(() => {
      const J = pt || {},
        { algorithm: ue, token: ae, components: Ee, cssVar: Be } = J,
        qe = ET(J, ["algorithm", "token", "components", "cssVar"]),
        Ot = ue && (!Array.isArray(ue) || ue.length > 0) ? xv(ue) : zb,
        mt = {};
      Object.entries(Ee || {}).forEach((nt) => {
        let [Ft, Cn] = nt;
        const Tt = Object.assign({}, Cn);
        "algorithm" in Tt &&
          (Tt.algorithm === !0
            ? (Tt.theme = Ot)
            : (Array.isArray(Tt.algorithm) ||
                typeof Tt.algorithm == "function") &&
              (Tt.theme = xv(Tt.algorithm)),
          delete Tt.algorithm),
          (mt[Ft] = Tt);
      });
      const Rt = Object.assign(Object.assign({}, Ml), ae);
      return Object.assign(Object.assign({}, qe), {
        theme: Ot,
        token: Rt,
        components: mt,
        override: Object.assign({ override: Rt }, mt),
        cssVar: Be,
      });
    }, [pt]);
    return (
      p && (ie = f.createElement(Lb.Provider, { value: ot }, ie)),
      Ve.warning &&
        (ie = f.createElement(t$.Provider, { value: Ve.warning }, ie)),
      m !== void 0 && (ie = f.createElement(O$, { disabled: m }, ie)),
      f.createElement(Dt.Provider, { value: Ve }, ie)
    );
  },
  pa = (e) => {
    const t = f.useContext(Dt),
      n = f.useContext(um);
    return f.createElement(
      $T,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
pa.ConfigContext = Dt;
pa.SizeContext = ia;
pa.config = IT;
pa.useConfig = P$;
Object.defineProperty(pa, "SizeContext", { get: () => ia });
var TT = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  MT = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  _T = ""
    .concat(TT, " ")
    .concat(MT)
    .split(/[\s\n]+/),
  AT = "aria-",
  NT = "data-";
function Qg(e, t) {
  return e.indexOf(t) === 0;
}
function Al(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
    ? (n = { aria: !0 })
    : (n = F({}, t));
  var r = {};
  return (
    Object.keys(e).forEach(function (o) {
      ((n.aria && (o === "role" || Qg(o, AT))) ||
        (n.data && Qg(o, NT)) ||
        (n.attr && _T.includes(o))) &&
        (r[o] = e[o]);
    }),
    r
  );
}
function FT(e) {
  return e && ne.isValidElement(e) && e.type === ne.Fragment;
}
const jT = (e, t, n) =>
  ne.isValidElement(e)
    ? ne.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n)
    : t;
function zu(e, t) {
  return jT(e, e, t);
}
const Tc = (e) => {
  const [, , , , t] = _r();
  return t ? `${e}-css-var` : "";
};
var te = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (t) {
    var n = t.keyCode;
    if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= te.F1 && n <= te.F12))
      return !1;
    switch (n) {
      case te.ALT:
      case te.CAPS_LOCK:
      case te.CONTEXT_MENU:
      case te.CTRL:
      case te.DOWN:
      case te.END:
      case te.ESC:
      case te.HOME:
      case te.INSERT:
      case te.LEFT:
      case te.MAC_FF_META:
      case te.META:
      case te.NUMLOCK:
      case te.NUM_CENTER:
      case te.PAGE_DOWN:
      case te.PAGE_UP:
      case te.PAUSE:
      case te.PRINT_SCREEN:
      case te.RIGHT:
      case te.SHIFT:
      case te.UP:
      case te.WIN_KEY:
      case te.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  isCharacterKey: function (t) {
    if (
      (t >= te.ZERO && t <= te.NINE) ||
      (t >= te.NUM_ZERO && t <= te.NUM_MULTIPLY) ||
      (t >= te.A && t <= te.Z) ||
      (window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
    )
      return !0;
    switch (t) {
      case te.SPACE:
      case te.QUESTION_MARK:
      case te.NUM_PLUS:
      case te.NUM_MINUS:
      case te.NUM_PERIOD:
      case te.NUM_DIVISION:
      case te.SEMICOLON:
      case te.DASH:
      case te.EQUALS:
      case te.COMMA:
      case te.PERIOD:
      case te.SLASH:
      case te.APOSTROPHE:
      case te.SINGLE_QUOTE:
      case te.OPEN_SQUARE_BRACKET:
      case te.BACKSLASH:
      case te.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  },
};
const zT = ne.createContext(void 0),
  gi = 100,
  ow = {
    Modal: gi,
    Drawer: gi,
    Popover: gi,
    Popconfirm: gi,
    Tooltip: gi,
    Tour: gi,
  },
  LT = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  };
function DT(e) {
  return e in ow;
}
function kT(e, t) {
  const [, n] = _r(),
    r = ne.useContext(zT),
    o = DT(e);
  let i;
  if (t !== void 0) i = [t, t];
  else {
    let a = r ?? 0;
    o ? (a += (r ? 0 : n.zIndexPopupBase) + ow[e]) : (a += LT[e]),
      (i = [r === void 0 ? t : a, a]);
  }
  return i;
}
function Sn() {
  Sn = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (T, I, O) {
        T[I] = O.value;
      },
    i = typeof Symbol == "function" ? Symbol : {},
    a = i.iterator || "@@iterator",
    l = i.asyncIterator || "@@asyncIterator",
    s = i.toStringTag || "@@toStringTag";
  function u(T, I, O) {
    return (
      Object.defineProperty(T, I, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      T[I]
    );
  }
  try {
    u({}, "");
  } catch {
    u = function (O, M, A) {
      return (O[M] = A);
    };
  }
  function c(T, I, O, M) {
    var A = I && I.prototype instanceof h ? I : h,
      $ = Object.create(A.prototype),
      k = new z(M || []);
    return o($, "_invoke", { value: _(T, O, k) }), $;
  }
  function d(T, I, O) {
    try {
      return { type: "normal", arg: T.call(I, O) };
    } catch (M) {
      return { type: "throw", arg: M };
    }
  }
  t.wrap = c;
  var v = "suspendedStart",
    g = "suspendedYield",
    y = "executing",
    S = "completed",
    b = {};
  function h() {}
  function p() {}
  function m() {}
  var w = {};
  u(w, a, function () {
    return this;
  });
  var C = Object.getPrototypeOf,
    E = C && C(C(V([])));
  E && E !== n && r.call(E, a) && (w = E);
  var x = (m.prototype = h.prototype = Object.create(w));
  function R(T) {
    ["next", "throw", "return"].forEach(function (I) {
      u(T, I, function (O) {
        return this._invoke(I, O);
      });
    });
  }
  function P(T, I) {
    function O(A, $, k, B) {
      var W = d(T[A], T, $);
      if (W.type !== "throw") {
        var K = W.arg,
          se = K.value;
        return se && Ie(se) == "object" && r.call(se, "__await")
          ? I.resolve(se.__await).then(
              function (q) {
                O("next", q, k, B);
              },
              function (q) {
                O("throw", q, k, B);
              }
            )
          : I.resolve(se).then(
              function (q) {
                (K.value = q), k(K);
              },
              function (q) {
                return O("throw", q, k, B);
              }
            );
      }
      B(W.arg);
    }
    var M;
    o(this, "_invoke", {
      value: function ($, k) {
        function B() {
          return new I(function (W, K) {
            O($, k, W, K);
          });
        }
        return (M = M ? M.then(B, B) : B());
      },
    });
  }
  function _(T, I, O) {
    var M = v;
    return function (A, $) {
      if (M === y) throw Error("Generator is already running");
      if (M === S) {
        if (A === "throw") throw $;
        return { value: e, done: !0 };
      }
      for (O.method = A, O.arg = $; ; ) {
        var k = O.delegate;
        if (k) {
          var B = j(k, O);
          if (B) {
            if (B === b) continue;
            return B;
          }
        }
        if (O.method === "next") O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (M === v) throw ((M = S), O.arg);
          O.dispatchException(O.arg);
        } else O.method === "return" && O.abrupt("return", O.arg);
        M = y;
        var W = d(T, I, O);
        if (W.type === "normal") {
          if (((M = O.done ? S : g), W.arg === b)) continue;
          return { value: W.arg, done: O.done };
        }
        W.type === "throw" && ((M = S), (O.method = "throw"), (O.arg = W.arg));
      }
    };
  }
  function j(T, I) {
    var O = I.method,
      M = T.iterator[O];
    if (M === e)
      return (
        (I.delegate = null),
        (O === "throw" &&
          T.iterator.return &&
          ((I.method = "return"),
          (I.arg = e),
          j(T, I),
          I.method === "throw")) ||
          (O !== "return" &&
            ((I.method = "throw"),
            (I.arg = new TypeError(
              "The iterator does not provide a '" + O + "' method"
            )))),
        b
      );
    var A = d(M, T.iterator, I.arg);
    if (A.type === "throw")
      return (I.method = "throw"), (I.arg = A.arg), (I.delegate = null), b;
    var $ = A.arg;
    return $
      ? $.done
        ? ((I[T.resultName] = $.value),
          (I.next = T.nextLoc),
          I.method !== "return" && ((I.method = "next"), (I.arg = e)),
          (I.delegate = null),
          b)
        : $
      : ((I.method = "throw"),
        (I.arg = new TypeError("iterator result is not an object")),
        (I.delegate = null),
        b);
  }
  function L(T) {
    var I = { tryLoc: T[0] };
    1 in T && (I.catchLoc = T[1]),
      2 in T && ((I.finallyLoc = T[2]), (I.afterLoc = T[3])),
      this.tryEntries.push(I);
  }
  function D(T) {
    var I = T.completion || {};
    (I.type = "normal"), delete I.arg, (T.completion = I);
  }
  function z(T) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      T.forEach(L, this),
      this.reset(!0);
  }
  function V(T) {
    if (T || T === "") {
      var I = T[a];
      if (I) return I.call(T);
      if (typeof T.next == "function") return T;
      if (!isNaN(T.length)) {
        var O = -1,
          M = function A() {
            for (; ++O < T.length; )
              if (r.call(T, O)) return (A.value = T[O]), (A.done = !1), A;
            return (A.value = e), (A.done = !0), A;
          };
        return (M.next = M);
      }
    }
    throw new TypeError(Ie(T) + " is not iterable");
  }
  return (
    (p.prototype = m),
    o(x, "constructor", { value: m, configurable: !0 }),
    o(m, "constructor", { value: p, configurable: !0 }),
    (p.displayName = u(m, s, "GeneratorFunction")),
    (t.isGeneratorFunction = function (T) {
      var I = typeof T == "function" && T.constructor;
      return (
        !!I && (I === p || (I.displayName || I.name) === "GeneratorFunction")
      );
    }),
    (t.mark = function (T) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(T, m)
          : ((T.__proto__ = m), u(T, s, "GeneratorFunction")),
        (T.prototype = Object.create(x)),
        T
      );
    }),
    (t.awrap = function (T) {
      return { __await: T };
    }),
    R(P.prototype),
    u(P.prototype, l, function () {
      return this;
    }),
    (t.AsyncIterator = P),
    (t.async = function (T, I, O, M, A) {
      A === void 0 && (A = Promise);
      var $ = new P(c(T, I, O, M), A);
      return t.isGeneratorFunction(I)
        ? $
        : $.next().then(function (k) {
            return k.done ? k.value : $.next();
          });
    }),
    R(x),
    u(x, s, "Generator"),
    u(x, a, function () {
      return this;
    }),
    u(x, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (T) {
      var I = Object(T),
        O = [];
      for (var M in I) O.push(M);
      return (
        O.reverse(),
        function A() {
          for (; O.length; ) {
            var $ = O.pop();
            if ($ in I) return (A.value = $), (A.done = !1), A;
          }
          return (A.done = !0), A;
        }
      );
    }),
    (t.values = V),
    (z.prototype = {
      constructor: z,
      reset: function (I) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(D),
          !I)
        )
          for (var O in this)
            O.charAt(0) === "t" &&
              r.call(this, O) &&
              !isNaN(+O.slice(1)) &&
              (this[O] = e);
      },
      stop: function () {
        this.done = !0;
        var I = this.tryEntries[0].completion;
        if (I.type === "throw") throw I.arg;
        return this.rval;
      },
      dispatchException: function (I) {
        if (this.done) throw I;
        var O = this;
        function M(K, se) {
          return (
            (k.type = "throw"),
            (k.arg = I),
            (O.next = K),
            se && ((O.method = "next"), (O.arg = e)),
            !!se
          );
        }
        for (var A = this.tryEntries.length - 1; A >= 0; --A) {
          var $ = this.tryEntries[A],
            k = $.completion;
          if ($.tryLoc === "root") return M("end");
          if ($.tryLoc <= this.prev) {
            var B = r.call($, "catchLoc"),
              W = r.call($, "finallyLoc");
            if (B && W) {
              if (this.prev < $.catchLoc) return M($.catchLoc, !0);
              if (this.prev < $.finallyLoc) return M($.finallyLoc);
            } else if (B) {
              if (this.prev < $.catchLoc) return M($.catchLoc, !0);
            } else {
              if (!W) throw Error("try statement without catch or finally");
              if (this.prev < $.finallyLoc) return M($.finallyLoc);
            }
          }
        }
      },
      abrupt: function (I, O) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var A = this.tryEntries[M];
          if (
            A.tryLoc <= this.prev &&
            r.call(A, "finallyLoc") &&
            this.prev < A.finallyLoc
          ) {
            var $ = A;
            break;
          }
        }
        $ &&
          (I === "break" || I === "continue") &&
          $.tryLoc <= O &&
          O <= $.finallyLoc &&
          ($ = null);
        var k = $ ? $.completion : {};
        return (
          (k.type = I),
          (k.arg = O),
          $
            ? ((this.method = "next"), (this.next = $.finallyLoc), b)
            : this.complete(k)
        );
      },
      complete: function (I, O) {
        if (I.type === "throw") throw I.arg;
        return (
          I.type === "break" || I.type === "continue"
            ? (this.next = I.arg)
            : I.type === "return"
            ? ((this.rval = this.arg = I.arg),
              (this.method = "return"),
              (this.next = "end"))
            : I.type === "normal" && O && (this.next = O),
          b
        );
      },
      finish: function (I) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var M = this.tryEntries[O];
          if (M.finallyLoc === I)
            return this.complete(M.completion, M.afterLoc), D(M), b;
        }
      },
      catch: function (I) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var M = this.tryEntries[O];
          if (M.tryLoc === I) {
            var A = M.completion;
            if (A.type === "throw") {
              var $ = A.arg;
              D(M);
            }
            return $;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (I, O, M) {
        return (
          (this.delegate = { iterator: V(I), resultName: O, nextLoc: M }),
          this.method === "next" && (this.arg = e),
          b
        );
      },
    }),
    t
  );
}
function Yg(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      s = l.value;
  } catch (u) {
    return void n(u);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o);
}
function fi(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(s) {
        Yg(i, r, o, a, l, "next", s);
      }
      function l(s) {
        Yg(i, r, o, a, l, "throw", s);
      }
      a(void 0);
    });
  };
}
var ql = F({}, IE),
  BT = ql.version,
  HT = ql.render,
  VT = ql.unmountComponentAtNode,
  Mc;
try {
  var WT = Number((BT || "").split(".")[0]);
  WT >= 18 && (Mc = ql.createRoot);
} catch {}
function Zg(e) {
  var t = ql.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ie(t) === "object" && (t.usingClientEntryPoint = e);
}
var Lu = "__rc_react_root__";
function UT(e, t) {
  Zg(!0);
  var n = t[Lu] || Mc(t);
  Zg(!1), n.render(e), (t[Lu] = n);
}
function KT(e, t) {
  HT(e, t);
}
function GT(e, t) {
  if (Mc) {
    UT(e, t);
    return;
  }
  KT(e, t);
}
function qT(e) {
  return jv.apply(this, arguments);
}
function jv() {
  return (
    (jv = fi(
      Sn().mark(function e(t) {
        return Sn().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.resolve().then(function () {
                    var o;
                    (o = t[Lu]) === null || o === void 0 || o.unmount(),
                      delete t[Lu];
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    jv.apply(this, arguments)
  );
}
function XT(e) {
  VT(e);
}
function QT(e) {
  return zv.apply(this, arguments);
}
function zv() {
  return (
    (zv = fi(
      Sn().mark(function e(t) {
        return Sn().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Mc === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return", qT(t));
              case 2:
                XT(t);
              case 3:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    zv.apply(this, arguments)
  );
}
const YT = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  iw = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  ZT = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${n})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        "&.wave-motion-appear": {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(","),
          "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
          "&.wave-quick": {
            transition: [
              `box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,
              `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
            ].join(","),
          },
        },
      },
    };
  },
  JT = X$("Wave", (e) => [ZT(e)]),
  aw = `${ju}-wave-target`;
function eM(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Tf(e) {
  return (
    e &&
    e !== "#fff" &&
    e !== "#ffffff" &&
    e !== "rgb(255, 255, 255)" &&
    e !== "rgba(255, 255, 255, 1)" &&
    eM(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== "transparent"
  );
}
function tM(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e);
  return Tf(t) ? t : Tf(n) ? n : Tf(r) ? r : null;
}
function Mf(e) {
  return Number.isNaN(e) ? 0 : e;
}
const nM = (e) => {
    const { className: t, target: n, component: r } = e,
      o = f.useRef(null),
      [i, a] = f.useState(null),
      [l, s] = f.useState([]),
      [u, c] = f.useState(0),
      [d, v] = f.useState(0),
      [g, y] = f.useState(0),
      [S, b] = f.useState(0),
      [h, p] = f.useState(!1),
      m = {
        left: u,
        top: d,
        width: g,
        height: S,
        borderRadius: l.map((E) => `${E}px`).join(" "),
      };
    i && (m["--wave-color"] = i);
    function w() {
      const E = getComputedStyle(n);
      a(tM(n));
      const x = E.position === "static",
        { borderLeftWidth: R, borderTopWidth: P } = E;
      c(x ? n.offsetLeft : Mf(-parseFloat(R))),
        v(x ? n.offsetTop : Mf(-parseFloat(P))),
        y(n.offsetWidth),
        b(n.offsetHeight);
      const {
        borderTopLeftRadius: _,
        borderTopRightRadius: j,
        borderBottomLeftRadius: L,
        borderBottomRightRadius: D,
      } = E;
      s([_, j, D, L].map((z) => Mf(parseFloat(z))));
    }
    if (
      (f.useEffect(() => {
        if (n) {
          const E = At(() => {
            w(), p(!0);
          });
          let x;
          return (
            typeof ResizeObserver < "u" &&
              ((x = new ResizeObserver(w)), x.observe(n)),
            () => {
              At.cancel(E), x == null || x.disconnect();
            }
          );
        }
      }, []),
      !h)
    )
      return null;
    const C =
      (r === "Checkbox" || r === "Radio") &&
      (n == null ? void 0 : n.classList.contains(aw));
    return f.createElement(
      Gl,
      {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd: (E, x) => {
          var R;
          if (x.deadline || x.propertyName === "opacity") {
            const P =
              (R = o.current) === null || R === void 0
                ? void 0
                : R.parentElement;
            QT(P).then(() => {
              P == null || P.remove();
            });
          }
          return !1;
        },
      },
      (E, x) => {
        let { className: R } = E;
        return f.createElement("div", {
          ref: Jr(o, x),
          className: me(t, R, { "wave-quick": C }),
          style: m,
        });
      }
    );
  },
  rM = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === "Checkbox" &&
      !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked)
    )
      return;
    const o = document.createElement("div");
    (o.style.position = "absolute"),
      (o.style.left = "0px"),
      (o.style.top = "0px"),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      GT(f.createElement(nM, Object.assign({}, t, { target: e })), o);
  },
  oM = (e, t, n) => {
    const { wave: r } = f.useContext(Dt),
      [, o, i] = _r(),
      a = Xt((u) => {
        const c = e.current;
        if ((r != null && r.disabled) || !c) return;
        const d = c.querySelector(`.${aw}`) || c,
          { showEffect: v } = r || {};
        (v || rM)(d, {
          className: t,
          token: o,
          component: n,
          event: u,
          hashId: i,
        });
      }),
      l = f.useRef();
    return (u) => {
      At.cancel(l.current),
        (l.current = At(() => {
          a(u);
        }));
    };
  },
  iM = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: o } = f.useContext(Dt),
      i = f.useRef(null),
      a = o("wave"),
      [, l] = JT(a),
      s = oM(i, me(a, l), r);
    if (
      (ne.useEffect(() => {
        const c = i.current;
        if (!c || c.nodeType !== 1 || n) return;
        const d = (v) => {
          !iw(v.target) ||
            !c.getAttribute ||
            c.getAttribute("disabled") ||
            c.disabled ||
            c.className.includes("disabled") ||
            c.className.includes("-leave") ||
            s(v);
        };
        return (
          c.addEventListener("click", d, !0),
          () => {
            c.removeEventListener("click", d, !0);
          }
        );
      }, [n]),
      !ne.isValidElement(t))
    )
      return t ?? null;
    const u = Vl(t) ? Jr(t.ref, i) : i;
    return zu(t, { ref: u });
  },
  ma = (e) => {
    const t = ne.useContext(ia);
    return ne.useMemo(
      () =>
        e
          ? typeof e == "string"
            ? e ?? t
            : e instanceof Function
            ? e(t)
            : t
          : t,
      [e, t]
    );
  },
  lw = f.createContext(null),
  _c = (e, t) => {
    const n = f.useContext(lw),
      r = f.useMemo(() => {
        if (!n) return "";
        const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
          l = o === "vertical" ? "-vertical-" : "-";
        return me(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: i,
          [`${e}-compact${l}last-item`]: a,
          [`${e}-compact${l}item-rtl`]: t === "rtl",
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  },
  aM = (e) => {
    let { children: t } = e;
    return f.createElement(lw.Provider, { value: null }, t);
  };
var lM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const sw = f.createContext(void 0),
  sM = (e) => {
    const { getPrefixCls: t, direction: n } = f.useContext(Dt),
      { prefixCls: r, size: o, className: i } = e,
      a = lM(e, ["prefixCls", "size", "className"]),
      l = t("btn-group", r),
      [, , s] = _r();
    let u = "";
    switch (o) {
      case "large":
        u = "lg";
        break;
      case "small":
        u = "sm";
        break;
    }
    const c = me(l, { [`${l}-${u}`]: u, [`${l}-rtl`]: n === "rtl" }, i, s);
    return f.createElement(
      sw.Provider,
      { value: o },
      f.createElement("div", Object.assign({}, a, { className: c }))
    );
  },
  Jg = /^[\u4e00-\u9fa5]{2}$/,
  Lv = Jg.test.bind(Jg);
function e0(e) {
  return typeof e == "string";
}
function _f(e) {
  return e === "text" || e === "link";
}
function uM(e, t) {
  if (e == null) return;
  const n = t ? " " : "";
  return typeof e != "string" &&
    typeof e != "number" &&
    e0(e.type) &&
    Lv(e.props.children)
    ? zu(e, { children: e.props.children.split("").join(n) })
    : e0(e)
    ? Lv(e)
      ? ne.createElement("span", null, e.split("").join(n))
      : ne.createElement("span", null, e)
    : FT(e)
    ? ne.createElement("span", null, e)
    : e;
}
function cM(e, t) {
  let n = !1;
  const r = [];
  return (
    ne.Children.forEach(e, (o) => {
      const i = typeof o,
        a = i === "string" || i === "number";
      if (n && a) {
        const l = r.length - 1,
          s = r[l];
        r[l] = `${s}${o}`;
      } else r.push(o);
      n = a;
    }),
    ne.Children.map(r, (o) => uM(o, t))
  );
}
const uw = f.forwardRef((e, t) => {
    const { className: n, style: r, children: o, prefixCls: i } = e,
      a = me(`${i}-icon`, n);
    return ne.createElement("span", { ref: t, className: a, style: r }, o);
  }),
  t0 = f.forwardRef((e, t) => {
    const { prefixCls: n, className: r, style: o, iconClassName: i } = e,
      a = me(`${n}-loading-icon`, r);
    return ne.createElement(
      uw,
      { prefixCls: n, className: a, style: o, ref: t },
      ne.createElement(ob, { className: i })
    );
  }),
  Af = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
  Nf = (e) => ({ width: e.scrollWidth, opacity: 1, transform: "scale(1)" }),
  fM = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: o,
        style: i,
      } = e,
      a = !!n;
    return r
      ? ne.createElement(t0, { prefixCls: t, className: o, style: i })
      : ne.createElement(
          Gl,
          {
            visible: a,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: a,
            removeOnLeave: !0,
            onAppearStart: Af,
            onAppearActive: Nf,
            onEnterStart: Af,
            onEnterActive: Nf,
            onLeaveStart: Nf,
            onLeaveActive: Af,
          },
          (l, s) => {
            let { className: u, style: c } = l;
            return ne.createElement(t0, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, i), c),
              ref: s,
              iconClassName: u,
            });
          }
        );
  },
  n0 = (e, t) => ({
    [`> span, > ${e}`]: {
      "&:not(:last-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } },
      },
      "&:not(:first-child)": {
        [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } },
      },
    },
  }),
  dM = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          [`> span, > ${t}`]: {
            "&:not(:last-child)": {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            "&:not(:first-child)": {
              marginInlineStart: e.calc(r).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: "relative",
            zIndex: 1,
            "&:hover, &:focus, &:active": { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        n0(`${t}-primary`, o),
        n0(`${t}-danger`, i),
      ],
    };
  },
  cw = (e) => {
    const { paddingInline: t, onlyIconSize: n, paddingBlock: r } = e;
    return dn(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: r,
      buttonIconOnlyFontSize: n,
    });
  },
  fw = (e) => {
    var t, n, r, o, i, a;
    const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize,
      s = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize,
      u = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG,
      c = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Zs(l),
      d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Zs(s),
      v = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : Zs(u);
    return {
      fontWeight: 400,
      defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
      primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
      dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
      primaryColor: e.colorTextLightSolid,
      dangerColor: e.colorTextLightSolid,
      borderColorDisabled: e.colorBorder,
      defaultGhostColor: e.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: e.colorBgContainer,
      paddingInline: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineSM: 8 - e.lineWidth,
      onlyIconSize: e.fontSizeLG,
      onlyIconSizeSM: e.fontSizeLG - 2,
      onlyIconSizeLG: e.fontSizeLG + 2,
      groupBorderColor: e.colorPrimaryHover,
      linkHoverBg: "transparent",
      textHoverBg: e.colorBgTextHover,
      defaultColor: e.colorText,
      defaultBg: e.colorBgContainer,
      defaultBorderColor: e.colorBorder,
      defaultBorderColorDisabled: e.colorBorder,
      defaultHoverBg: e.colorBgContainer,
      defaultHoverColor: e.colorPrimaryHover,
      defaultHoverBorderColor: e.colorPrimaryHover,
      defaultActiveBg: e.colorBgContainer,
      defaultActiveColor: e.colorPrimaryActive,
      defaultActiveBorderColor: e.colorPrimaryActive,
      contentFontSize: l,
      contentFontSizeSM: s,
      contentFontSizeLG: u,
      contentLineHeight: c,
      contentLineHeightSM: d,
      contentLineHeightLG: v,
      paddingBlock: Math.max((e.controlHeight - l * c) / 2 - e.lineWidth, 0),
      paddingBlockSM: Math.max(
        (e.controlHeightSM - s * d) / 2 - e.lineWidth,
        0
      ),
      paddingBlockLG: Math.max(
        (e.controlHeightLG - u * v) / 2 - e.lineWidth,
        0
      ),
    };
  },
  vM = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: "none",
        position: "relative",
        display: "inline-flex",
        gap: e.marginXS,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: r,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${Ne(e.lineWidth)} ${e.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: e.colorText,
        "&:disabled > *": { pointerEvents: "none" },
        "> span": { display: "inline-block" },
        [`${t}-icon`]: { lineHeight: 1 },
        "> a": { color: "currentColor" },
        "&:not(:disabled)": Object.assign({}, q$(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em",
        },
        "&-icon-end": { flexDirection: "row-reverse" },
      },
    };
  },
  Qr = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { "&:hover": t, "&:active": n },
  }),
  pM = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%",
  }),
  mM = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
    paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
  }),
  hM = (e) => ({
    cursor: "not-allowed",
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: "none",
  }),
  Nl = (e, t, n, r, o, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          background: t,
          borderColor: r || void 0,
          boxShadow: "none",
        },
        Qr(
          e,
          Object.assign({ background: t }, a),
          Object.assign({ background: t }, l)
        )
      ),
      {
        "&:disabled": {
          cursor: "not-allowed",
          color: o || void 0,
          borderColor: i || void 0,
        },
      }
    ),
  }),
  dm = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, hM(e)),
  }),
  dw = (e) => Object.assign({}, dm(e)),
  Du = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: e.colorTextDisabled,
    },
  }),
  vw = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, dw(e)), {
            background: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Qr(
            e.componentCls,
            {
              color: e.defaultHoverColor,
              borderColor: e.defaultHoverBorderColor,
              background: e.defaultHoverBg,
            },
            {
              color: e.defaultActiveColor,
              borderColor: e.defaultActiveBorderColor,
              background: e.defaultActiveBg,
            }
          )
        ),
        Nl(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              Qr(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            Nl(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          dm(e)
        ),
      }
    ),
  gM = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, dw(e)), {
            color: e.primaryColor,
            background: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Qr(
            e.componentCls,
            { color: e.colorTextLightSolid, background: e.colorPrimaryHover },
            { color: e.colorTextLightSolid, background: e.colorPrimaryActive }
          )
        ),
        Nl(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                background: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              Qr(
                e.componentCls,
                { background: e.colorErrorHover },
                { background: e.colorErrorActive }
              )
            ),
            Nl(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          dm(e)
        ),
      }
    ),
  yM = (e) =>
    Object.assign(Object.assign({}, vw(e)), { borderStyle: "dashed" }),
  SM = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Qr(
            e.componentCls,
            { color: e.colorLinkHover, background: e.linkHoverBg },
            { color: e.colorLinkActive }
          )
        ),
        Du(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Qr(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive }
            )
          ),
          Du(e)
        ),
      }
    ),
  bM = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Qr(
            e.componentCls,
            { color: e.colorText, background: e.textHoverBg },
            { color: e.colorText, background: e.colorBgTextActive }
          )
        ),
        Du(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Du(e)),
          Qr(
            e.componentCls,
            { color: e.colorErrorHover, background: e.colorErrorBg },
            { color: e.colorErrorHover, background: e.colorErrorBgActive }
          )
        ),
      }
    ),
  wM = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: vw(e),
      [`${t}-primary`]: gM(e),
      [`${t}-dashed`]: yM(e),
      [`${t}-link`]: SM(e),
      [`${t}-text`]: bM(e),
      [`${t}-ghost`]: Nl(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder
      ),
    };
  },
  vm = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: o,
        lineHeight: i,
        borderRadius: a,
        buttonPaddingHorizontal: l,
        iconCls: s,
        buttonPaddingVertical: u,
      } = e,
      c = `${n}-icon-only`;
    return [
      {
        [`${t}`]: {
          fontSize: o,
          lineHeight: i,
          height: r,
          padding: `${Ne(u)} ${Ne(l)}`,
          borderRadius: a,
          [`&${c}`]: {
            width: r,
            paddingInline: 0,
            [`&${n}-compact-item`]: { flex: "none" },
            [`&${n}-round`]: { width: "auto" },
            [s]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: "default" },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: pM(e) },
      { [`${n}${n}-round${t}`]: mM(e) },
    ];
  },
  CM = (e) => {
    const t = dn(e, {
      fontSize: e.contentFontSize,
      lineHeight: e.contentLineHeight,
    });
    return vm(t, e.componentCls);
  },
  xM = (e) => {
    const t = dn(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      lineHeight: e.contentLineHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: e.paddingBlockSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return vm(t, `${e.componentCls}-sm`);
  },
  EM = (e) => {
    const t = dn(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      lineHeight: e.contentLineHeightLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: e.paddingBlockLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return vm(t, `${e.componentCls}-lg`);
  },
  OM = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: "100%" } } };
  },
  RM = Kl(
    "Button",
    (e) => {
      const t = cw(e);
      return [vM(t), CM(t), xM(t), EM(t), OM(t), wM(t), dM(t)];
    },
    fw,
    {
      unitless: {
        fontWeight: !0,
        contentLineHeight: !0,
        contentLineHeightSM: !0,
        contentLineHeightLG: !0,
      },
    }
  );
function PM(e, t, n) {
  const { focusElCls: r, focus: o, borderElCls: i } = n,
    a = i ? "> *" : "",
    l = ["hover", o ? "focus" : null, "active"]
      .filter(Boolean)
      .map((s) => `&:${s} ${a}`)
      .join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
    },
    "&-item": Object.assign(
      Object.assign(
        { [l]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${a}`]: { zIndex: 0 } }
    ),
  };
}
function IM(e, t, n) {
  const { borderElCls: r } = n,
    o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function pm(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, PM(e, r, t)), IM(n, r, t)) };
}
function $M(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
    },
    "&-item": {
      "&:hover,&:focus,&:active": { zIndex: 2 },
      "&[disabled]": { zIndex: 0 },
    },
  };
}
function TM(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function MM(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, $M(e, t)), TM(e.componentCls, t)),
  };
}
const _M = (e) => {
    const { componentCls: t, calc: n } = e;
    return {
      [t]: {
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: n(e.lineWidth).mul(-1).equal(),
                insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: e.lineWidth,
                height: `calc(100% + ${Ne(e.lineWidth)} * 2)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        "&-compact-vertical-item": {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: n(e.lineWidth).mul(-1).equal(),
                  insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                  display: "inline-block",
                  width: `calc(100% + ${Ne(e.lineWidth)} * 2)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  AM = Q$(
    ["Button", "compact"],
    (e) => {
      const t = cw(e);
      return [pm(t), MM(t), _M(t)];
    },
    fw
  );
var NM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function FM(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return (
      (t = !Number.isNaN(t) && typeof t == "number" ? t : 0),
      { loading: t <= 0, delay: t }
    );
  }
  return { loading: !!e, delay: 0 };
}
const jM = ne.forwardRef((e, t) => {
    var n, r, o;
    const {
        loading: i = !1,
        prefixCls: a,
        type: l,
        danger: s = !1,
        shape: u = "default",
        size: c,
        styles: d,
        disabled: v,
        className: g,
        rootClassName: y,
        children: S,
        icon: b,
        iconPosition: h = "start",
        ghost: p = !1,
        block: m = !1,
        htmlType: w = "button",
        classNames: C,
        style: E = {},
        autoInsertSpace: x,
      } = e,
      R = NM(e, [
        "loading",
        "prefixCls",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "iconPosition",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
        "autoInsertSpace",
      ]),
      P = l || "default",
      { getPrefixCls: _, direction: j, button: L } = f.useContext(Dt),
      D =
        (n = x ?? (L == null ? void 0 : L.autoInsertSpace)) !== null &&
        n !== void 0
          ? n
          : !0,
      z = _("btn", a),
      [V, T, I] = RM(z),
      O = f.useContext(ii),
      M = v ?? O,
      A = f.useContext(sw),
      $ = f.useMemo(() => FM(i), [i]),
      [k, B] = f.useState($.loading),
      [W, K] = f.useState(!1),
      q = Jr(t, f.createRef()),
      oe = f.Children.count(S) === 1 && !b && !_f(P);
    f.useEffect(() => {
      let Y = null;
      $.delay > 0
        ? (Y = setTimeout(() => {
            (Y = null), B(!0);
          }, $.delay))
        : B($.loading);
      function Re() {
        Y && (clearTimeout(Y), (Y = null));
      }
      return Re;
    }, [$]),
      f.useEffect(() => {
        if (!q || !q.current || !D) return;
        const Y = q.current.textContent;
        oe && Lv(Y) ? W || K(!0) : W && K(!1);
      }, [q]);
    const Ce = (Y) => {
        const { onClick: Re } = e;
        if (k || M) {
          Y.preventDefault();
          return;
        }
        Re == null || Re(Y);
      },
      { compactSize: G, compactItemClassnames: U } = _c(z, j),
      Z = { large: "lg", small: "sm", middle: void 0 },
      le = ma((Y) => {
        var Re, ve;
        return (ve = (Re = c ?? G) !== null && Re !== void 0 ? Re : A) !==
          null && ve !== void 0
          ? ve
          : Y;
      }),
      X = (le && Z[le]) || "",
      de = k ? "loading" : b,
      re = Wl(R, ["navigate"]),
      ge = me(
        z,
        T,
        I,
        {
          [`${z}-${u}`]: u !== "default" && u,
          [`${z}-${P}`]: P,
          [`${z}-${X}`]: X,
          [`${z}-icon-only`]: !S && S !== 0 && !!de,
          [`${z}-background-ghost`]: p && !_f(P),
          [`${z}-loading`]: k,
          [`${z}-two-chinese-chars`]: W && D && !k,
          [`${z}-block`]: m,
          [`${z}-dangerous`]: s,
          [`${z}-rtl`]: j === "rtl",
          [`${z}-icon-end`]: h === "end",
        },
        U,
        g,
        y,
        L == null ? void 0 : L.className
      ),
      Se = Object.assign(Object.assign({}, L == null ? void 0 : L.style), E),
      ce = me(
        C == null ? void 0 : C.icon,
        (r = L == null ? void 0 : L.classNames) === null || r === void 0
          ? void 0
          : r.icon
      ),
      Oe = Object.assign(
        Object.assign({}, (d == null ? void 0 : d.icon) || {}),
        ((o = L == null ? void 0 : L.styles) === null || o === void 0
          ? void 0
          : o.icon) || {}
      ),
      xe =
        b && !k
          ? ne.createElement(uw, { prefixCls: z, className: ce, style: Oe }, b)
          : ne.createElement(fM, { existIcon: !!b, prefixCls: z, loading: k }),
      Le = S || S === 0 ? cM(S, oe && D) : null;
    if (re.href !== void 0)
      return V(
        ne.createElement(
          "a",
          Object.assign({}, re, {
            className: me(ge, { [`${z}-disabled`]: M }),
            href: M ? void 0 : re.href,
            style: Se,
            onClick: Ce,
            ref: q,
            tabIndex: M ? -1 : 0,
          }),
          xe,
          Le
        )
      );
    let fe = ne.createElement(
      "button",
      Object.assign({}, R, {
        type: w,
        className: ge,
        style: Se,
        onClick: Ce,
        disabled: M,
        ref: q,
      }),
      xe,
      Le,
      !!U && ne.createElement(AM, { key: "compact", prefixCls: z })
    );
    return (
      _f(P) ||
        (fe = ne.createElement(iM, { component: "Button", disabled: k }, fe)),
      V(fe)
    );
  }),
  Xl = jM;
Xl.Group = sM;
Xl.__ANT_BUTTON = !0;
var pw = f.createContext(null),
  r0 = [];
function zM(e, t) {
  var n = f.useState(function () {
      if (!Tn()) return null;
      var y = document.createElement("div");
      return y;
    }),
    r = H(n, 1),
    o = r[0],
    i = f.useRef(!1),
    a = f.useContext(pw),
    l = f.useState(r0),
    s = H(l, 2),
    u = s[0],
    c = s[1],
    d =
      a ||
      (i.current
        ? void 0
        : function (y) {
            c(function (S) {
              var b = [y].concat(be(S));
              return b;
            });
          });
  function v() {
    o.parentElement || document.body.appendChild(o), (i.current = !0);
  }
  function g() {
    var y;
    (y = o.parentElement) === null || y === void 0 || y.removeChild(o),
      (i.current = !1);
  }
  return (
    bt(
      function () {
        return e ? (a ? a(v) : v()) : g(), g;
      },
      [e]
    ),
    bt(
      function () {
        u.length &&
          (u.forEach(function (y) {
            return y();
          }),
          c(r0));
      },
      [u]
    ),
    [o, d]
  );
}
function LM(e) {
  var t = "rc-scrollbar-measure-".concat(
      Math.random().toString(36).substring(7)
    ),
    n = document.createElement("div");
  n.id = t;
  var r = n.style;
  (r.position = "absolute"),
    (r.left = "0"),
    (r.top = "0"),
    (r.width = "100px"),
    (r.height = "100px"),
    (r.overflow = "scroll");
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    (r.scrollbarColor = a.scrollbarColor),
      (r.scrollbarWidth = a.scrollbarWidth);
    var l = getComputedStyle(e, "::-webkit-scrollbar"),
      s = parseInt(l.width, 10),
      u = parseInt(l.height, 10);
    try {
      var c = s ? "width: ".concat(l.width, ";") : "",
        d = u ? "height: ".concat(l.height, ";") : "";
      Wr(
        `
#`
          .concat(
            t,
            `::-webkit-scrollbar {
`
          )
          .concat(
            c,
            `
`
          )
          .concat(
            d,
            `
}`
          ),
        t
      );
    } catch (y) {
      console.error(y), (o = s), (i = u);
    }
  }
  document.body.appendChild(n);
  var v = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth,
    g = e && i && !isNaN(i) ? i : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), El(t), { width: v, height: g };
}
function DM(e) {
  return typeof document > "u" || !e || !(e instanceof Element)
    ? { width: 0, height: 0 }
    : LM(e);
}
function kM() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var BM = "rc-util-locker-".concat(Date.now()),
  o0 = 0;
function HM(e) {
  var t = !!e,
    n = f.useState(function () {
      return (o0 += 1), "".concat(BM, "_").concat(o0);
    }),
    r = H(n, 1),
    o = r[0];
  bt(
    function () {
      if (t) {
        var i = DM(document.body).width,
          a = kM();
        Wr(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? "width: calc(100% - ".concat(i, "px);") : "",
            `
}`
          ),
          o
        );
      } else El(o);
      return function () {
        El(o);
      };
    },
    [t, o]
  );
}
var VM = !1;
function WM(e) {
  return VM;
}
var i0 = function (t) {
    return t === !1
      ? !1
      : !Tn() || !t
      ? null
      : typeof t == "string"
      ? document.querySelector(t)
      : typeof t == "function"
      ? t()
      : t;
  },
  mw = f.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 ? !0 : i,
      l = e.children,
      s = f.useState(n),
      u = H(s, 2),
      c = u[0],
      d = u[1],
      v = c || n;
    f.useEffect(
      function () {
        (a || n) && d(n);
      },
      [n, a]
    );
    var g = f.useState(function () {
        return i0(o);
      }),
      y = H(g, 2),
      S = y[0],
      b = y[1];
    f.useEffect(function () {
      var j = i0(o);
      b(j ?? null);
    });
    var h = zM(v && !S),
      p = H(h, 2),
      m = p[0],
      w = p[1],
      C = S ?? m;
    HM(r && n && Tn() && (C === m || C === document.body));
    var E = null;
    if (l && Vl(l) && t) {
      var x = l;
      E = x.ref;
    }
    var R = Oc(E, t);
    if (!v || !Tn() || S === void 0) return null;
    var P = C === !1 || WM(),
      _ = l;
    return (
      t && (_ = f.cloneElement(l, { ref: R })),
      f.createElement(pw.Provider, { value: w }, P ? _ : ni.createPortal(_, C))
    );
  });
function UM() {
  var e = F({}, Ui);
  return e.useId;
}
var a0 = 0,
  l0 = UM();
const KM = l0
  ? function (t) {
      var n = l0();
      return t || n;
    }
  : function (t) {
      var n = f.useState("ssr-id"),
        r = H(n, 2),
        o = r[0],
        i = r[1];
      return (
        f.useEffect(function () {
          var a = a0;
          (a0 += 1), i("rc_unique_".concat(a));
        }, []),
        t || o
      );
    };
var Ko = "RC_FORM_INTERNAL_HOOKS",
  ut = function () {
    $n(
      !1,
      "Can not find FormContext. Please make sure you wrap Field under Form."
    );
  },
  aa = f.createContext({
    getFieldValue: ut,
    getFieldsValue: ut,
    getFieldError: ut,
    getFieldWarning: ut,
    getFieldsError: ut,
    isFieldsTouched: ut,
    isFieldTouched: ut,
    isFieldValidating: ut,
    isFieldsValidating: ut,
    resetFields: ut,
    setFields: ut,
    setFieldValue: ut,
    setFieldsValue: ut,
    validateFields: ut,
    submit: ut,
    getInternalHooks: function () {
      return (
        ut(),
        {
          dispatch: ut,
          initEntityValue: ut,
          registerField: ut,
          useSubscribe: ut,
          setInitialValues: ut,
          destroyForm: ut,
          setCallbacks: ut,
          registerWatch: ut,
          getFields: ut,
          setValidateMessages: ut,
          setPreserve: ut,
          getInitialValue: ut,
        }
      );
    },
  }),
  ku = f.createContext(null);
function Dv(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function GM(e) {
  return e && !!e._init;
}
function kv() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid",
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s",
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters",
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s",
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length",
    },
    pattern: { mismatch: "%s value %s does not match pattern %s" },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var Bv = kv();
function qM(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function XM(e, t, n) {
  if (rm()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && bl(o, n.prototype), o;
}
function Hv(e) {
  var t = typeof Map == "function" ? new Map() : void 0;
  return (
    (Hv = function (r) {
      if (r === null || !qM(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (t !== void 0) {
        if (t.has(r)) return t.get(r);
        t.set(r, o);
      }
      function o() {
        return XM(r, arguments, Pl(this).constructor);
      }
      return (
        (o.prototype = Object.create(r.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        bl(o, r)
      );
    }),
    Hv(e)
  );
}
var QM = /%[sdj%]/g,
  YM = function () {};
function Vv(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var r = n.field;
      (t[r] = t[r] || []), t[r].push(n);
    }),
    t
  );
}
function Hn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = 0,
    i = n.length;
  if (typeof e == "function") return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(QM, function (l) {
      if (l === "%%") return "%";
      if (o >= i) return l;
      switch (l) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function ZM(e) {
  return (
    e === "string" ||
    e === "url" ||
    e === "hex" ||
    e === "email" ||
    e === "date" ||
    e === "pattern"
  );
}
function Wt(e, t) {
  return !!(
    e == null ||
    (t === "array" && Array.isArray(e) && !e.length) ||
    (ZM(t) && typeof e == "string" && !e)
  );
}
function JM(e, t, n) {
  var r = [],
    o = 0,
    i = e.length;
  function a(l) {
    r.push.apply(r, be(l || [])), o++, o === i && n(r);
  }
  e.forEach(function (l) {
    t(l, a);
  });
}
function s0(e, t, n) {
  var r = 0,
    o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    (r = r + 1), l < o ? t(e[l], i) : n([]);
  }
  i([]);
}
function e_(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, be(e[n] || []));
    }),
    t
  );
}
var u0 = (function (e) {
  ui(n, e);
  var t = ci(n);
  function n(r, o) {
    var i;
    return (
      an(this, n),
      (i = t.call(this, "Async Validation Error")),
      N(Ue(i), "errors", void 0),
      N(Ue(i), "fields", void 0),
      (i.errors = r),
      (i.fields = o),
      i
    );
  }
  return ln(n);
})(Hv(Error));
function t_(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function (v, g) {
      var y = function (h) {
          return r(h), h.length ? g(new u0(h, Vv(h))) : v(o);
        },
        S = e_(e);
      s0(S, n, y);
    });
    return (
      i.catch(function (v) {
        return v;
      }),
      i
    );
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    s = l.length,
    u = 0,
    c = [],
    d = new Promise(function (v, g) {
      var y = function (b) {
        if ((c.push.apply(c, b), u++, u === s))
          return r(c), c.length ? g(new u0(c, Vv(c))) : v(o);
      };
      l.length || (r(c), v(o)),
        l.forEach(function (S) {
          var b = e[S];
          a.indexOf(S) !== -1 ? s0(b, n, y) : JM(b, n, y);
        });
    });
  return (
    d.catch(function (v) {
      return v;
    }),
    d
  );
}
function n_(e) {
  return !!(e && e.message !== void 0);
}
function r_(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]];
  }
  return n;
}
function c0(e, t) {
  return function (n) {
    var r;
    return (
      e.fullFields
        ? (r = r_(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      n_(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == "function" ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    );
  };
}
function f0(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        Ie(r) === "object" && Ie(e[n]) === "object"
          ? (e[n] = F(F({}, e[n]), r))
          : (e[n] = r);
      }
  }
  return e;
}
var yi = "enum",
  o_ = function (t, n, r, o, i) {
    (t[yi] = Array.isArray(t[yi]) ? t[yi] : []),
      t[yi].indexOf(n) === -1 &&
        o.push(Hn(i.messages[yi], t.fullField, t[yi].join(", ")));
  },
  i_ = function (t, n, r, o, i) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            o.push(Hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == "string") {
        var a = new RegExp(t.pattern);
        a.test(n) ||
          o.push(Hn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  a_ = function (t, n, r, o, i) {
    var a = typeof t.len == "number",
      l = typeof t.min == "number",
      s = typeof t.max == "number",
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      d = null,
      v = typeof n == "number",
      g = typeof n == "string",
      y = Array.isArray(n);
    if ((v ? (d = "number") : g ? (d = "string") : y && (d = "array"), !d))
      return !1;
    y && (c = n.length),
      g && (c = n.replace(u, "_").length),
      a
        ? c !== t.len && o.push(Hn(i.messages[d].len, t.fullField, t.len))
        : l && !s && c < t.min
        ? o.push(Hn(i.messages[d].min, t.fullField, t.min))
        : s && !l && c > t.max
        ? o.push(Hn(i.messages[d].max, t.fullField, t.max))
        : l &&
          s &&
          (c < t.min || c > t.max) &&
          o.push(Hn(i.messages[d].range, t.fullField, t.min, t.max));
  },
  hw = function (t, n, r, o, i, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || Wt(n, a || t.type)) &&
      o.push(Hn(i.messages.required, t.fullField));
  },
  _s;
const l_ = function () {
  if (_s) return _s;
  var e = "[a-fA-F\\d:]",
    t = function (E) {
      return E && E.includeBoundaries
        ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))")
        : "";
    },
    n =
      "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
    r = "[a-fA-F\\d]{1,4}",
    o = [
      "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
      "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
      "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
      "(?:"
        .concat(r, ":){4}(?:(?::")
        .concat(r, "){0,1}:")
        .concat(n, "|(?::")
        .concat(r, "){1,3}|:)"),
      "(?:"
        .concat(r, ":){3}(?:(?::")
        .concat(r, "){0,2}:")
        .concat(n, "|(?::")
        .concat(r, "){1,4}|:)"),
      "(?:"
        .concat(r, ":){2}(?:(?::")
        .concat(r, "){0,3}:")
        .concat(n, "|(?::")
        .concat(r, "){1,5}|:)"),
      "(?:"
        .concat(r, ":){1}(?:(?::")
        .concat(r, "){0,4}:")
        .concat(n, "|(?::")
        .concat(r, "){1,6}|:)"),
      "(?::(?:(?::"
        .concat(r, "){0,5}:")
        .concat(n, "|(?::")
        .concat(r, "){1,7}|:))"),
    ],
    i = "(?:%[0-9a-zA-Z]{1,})?",
    a = "(?:".concat(o.join("|"), ")").concat(i),
    l = new RegExp("(?:^".concat(n, "$)|(?:^").concat(a, "$)")),
    s = new RegExp("^".concat(n, "$")),
    u = new RegExp("^".concat(a, "$")),
    c = function (E) {
      return E && E.exact
        ? l
        : new RegExp(
            "(?:"
              .concat(t(E))
              .concat(n)
              .concat(t(E), ")|(?:")
              .concat(t(E))
              .concat(a)
              .concat(t(E), ")"),
            "g"
          );
    };
  (c.v4 = function (C) {
    return C && C.exact
      ? s
      : new RegExp("".concat(t(C)).concat(n).concat(t(C)), "g");
  }),
    (c.v6 = function (C) {
      return C && C.exact
        ? u
        : new RegExp("".concat(t(C)).concat(a).concat(t(C)), "g");
    });
  var d = "(?:(?:[a-z]+:)?//)",
    v = "(?:\\S+(?::\\S*)?@)?",
    g = c.v4().source,
    y = c.v6().source,
    S = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
    b = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
    h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
    p = "(?::\\d{2,5})?",
    m = '(?:[/?#][^\\s"]*)?',
    w = "(?:"
      .concat(d, "|www\\.)")
      .concat(v, "(?:localhost|")
      .concat(g, "|")
      .concat(y, "|")
      .concat(S)
      .concat(b)
      .concat(h, ")")
      .concat(p)
      .concat(m);
  return (_s = new RegExp("(?:^".concat(w, "$)"), "i")), _s;
};
var d0 = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  La = {
    integer: function (t) {
      return La.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return La.number(t) && !La.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == "function" &&
        typeof t.getMonth == "function" &&
        typeof t.getYear == "function" &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == "number";
    },
    object: function (t) {
      return Ie(t) === "object" && !La.array(t);
    },
    method: function (t) {
      return typeof t == "function";
    },
    email: function (t) {
      return typeof t == "string" && t.length <= 320 && !!t.match(d0.email);
    },
    url: function (t) {
      return typeof t == "string" && t.length <= 2048 && !!t.match(l_());
    },
    hex: function (t) {
      return typeof t == "string" && !!t.match(d0.hex);
    },
  },
  s_ = function (t, n, r, o, i) {
    if (t.required && n === void 0) {
      hw(t, n, r, o, i);
      return;
    }
    var a = [
        "integer",
        "float",
        "array",
        "regexp",
        "object",
        "method",
        "email",
        "number",
        "date",
        "url",
        "hex",
      ],
      l = t.type;
    a.indexOf(l) > -1
      ? La[l](n) || o.push(Hn(i.messages.types[l], t.fullField, t.type))
      : l &&
        Ie(n) !== t.type &&
        o.push(Hn(i.messages.types[l], t.fullField, t.type));
  },
  u_ = function (t, n, r, o, i) {
    (/^\s+$/.test(n) || n === "") &&
      o.push(Hn(i.messages.whitespace, t.fullField));
  };
const Ye = {
  required: hw,
  whitespace: u_,
  type: s_,
  range: a_,
  enum: o_,
  pattern: i_,
};
var c_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i);
    }
    r(a);
  },
  f_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (n == null && !t.required) return r();
      Ye.required(t, n, o, a, i, "array"),
        n != null && (Ye.type(t, n, o, a, i), Ye.range(t, n, o, a, i));
    }
    r(a);
  },
  d_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i), n !== void 0 && Ye.type(t, n, o, a, i);
    }
    r(a);
  },
  v_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n, "date") && !t.required) return r();
      if ((Ye.required(t, n, o, a, i), !Wt(n, "date"))) {
        var s;
        n instanceof Date ? (s = n) : (s = new Date(n)),
          Ye.type(t, s, o, a, i),
          s && Ye.range(t, s.getTime(), o, a, i);
      }
    }
    r(a);
  },
  p_ = "enum",
  m_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i), n !== void 0 && Ye[p_](t, n, o, a, i);
    }
    r(a);
  },
  h_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i),
        n !== void 0 && (Ye.type(t, n, o, a, i), Ye.range(t, n, o, a, i));
    }
    r(a);
  },
  g_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i),
        n !== void 0 && (Ye.type(t, n, o, a, i), Ye.range(t, n, o, a, i));
    }
    r(a);
  },
  y_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i), n !== void 0 && Ye.type(t, n, o, a, i);
    }
    r(a);
  },
  S_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if ((n === "" && (n = void 0), Wt(n) && !t.required)) return r();
      Ye.required(t, n, o, a, i),
        n !== void 0 && (Ye.type(t, n, o, a, i), Ye.range(t, n, o, a, i));
    }
    r(a);
  },
  b_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i), n !== void 0 && Ye.type(t, n, o, a, i);
    }
    r(a);
  },
  w_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n, "string") && !t.required) return r();
      Ye.required(t, n, o, a, i), Wt(n, "string") || Ye.pattern(t, n, o, a, i);
    }
    r(a);
  },
  C_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n) && !t.required) return r();
      Ye.required(t, n, o, a, i), Wt(n) || Ye.type(t, n, o, a, i);
    }
    r(a);
  },
  x_ = function (t, n, r, o, i) {
    var a = [],
      l = Array.isArray(n) ? "array" : Ie(n);
    Ye.required(t, n, o, a, i, l), r(a);
  },
  E_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (Wt(n, "string") && !t.required) return r();
      Ye.required(t, n, o, a, i, "string"),
        Wt(n, "string") ||
          (Ye.type(t, n, o, a, i),
          Ye.range(t, n, o, a, i),
          Ye.pattern(t, n, o, a, i),
          t.whitespace === !0 && Ye.whitespace(t, n, o, a, i));
    }
    r(a);
  },
  Ff = function (t, n, r, o, i) {
    var a = t.type,
      l = [],
      s = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (s) {
      if (Wt(n, a) && !t.required) return r();
      Ye.required(t, n, o, l, i, a), Wt(n, a) || Ye.type(t, n, o, l, i);
    }
    r(l);
  };
const Ja = {
  string: E_,
  method: y_,
  number: S_,
  boolean: d_,
  regexp: C_,
  integer: g_,
  float: h_,
  array: f_,
  object: b_,
  enum: m_,
  pattern: w_,
  date: v_,
  url: Ff,
  hex: Ff,
  email: Ff,
  required: x_,
  any: c_,
};
var Ql = (function () {
  function e(t) {
    an(this, e),
      N(this, "rules", null),
      N(this, "_messages", Bv),
      this.define(t);
  }
  return (
    ln(e, [
      {
        key: "define",
        value: function (n) {
          var r = this;
          if (!n) throw new Error("Cannot configure a schema with no rules");
          if (Ie(n) !== "object" || Array.isArray(n))
            throw new Error("Rules must be an object");
          (this.rules = {}),
            Object.keys(n).forEach(function (o) {
              var i = n[o];
              r.rules[o] = Array.isArray(i) ? i : [i];
            });
        },
      },
      {
        key: "messages",
        value: function (n) {
          return n && (this._messages = f0(kv(), n)), this._messages;
        },
      },
      {
        key: "validate",
        value: function (n) {
          var r = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : function () {},
            a = n,
            l = o,
            s = i;
          if (
            (typeof l == "function" && ((s = l), (l = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return s && s(null, a), Promise.resolve(a);
          function u(y) {
            var S = [],
              b = {};
            function h(m) {
              if (Array.isArray(m)) {
                var w;
                S = (w = S).concat.apply(w, be(m));
              } else S.push(m);
            }
            for (var p = 0; p < y.length; p++) h(y[p]);
            S.length ? ((b = Vv(S)), s(S, b)) : s(null, a);
          }
          if (l.messages) {
            var c = this.messages();
            c === Bv && (c = kv()), f0(c, l.messages), (l.messages = c);
          } else l.messages = this.messages();
          var d = {},
            v = l.keys || Object.keys(this.rules);
          v.forEach(function (y) {
            var S = r.rules[y],
              b = a[y];
            S.forEach(function (h) {
              var p = h;
              typeof p.transform == "function" &&
                (a === n && (a = F({}, a)),
                (b = a[y] = p.transform(b)),
                b != null &&
                  (p.type = p.type || (Array.isArray(b) ? "array" : Ie(b)))),
                typeof p == "function"
                  ? (p = { validator: p })
                  : (p = F({}, p)),
                (p.validator = r.getValidationMethod(p)),
                p.validator &&
                  ((p.field = y),
                  (p.fullField = p.fullField || y),
                  (p.type = r.getType(p)),
                  (d[y] = d[y] || []),
                  d[y].push({ rule: p, value: b, source: a, field: y }));
            });
          });
          var g = {};
          return t_(
            d,
            l,
            function (y, S) {
              var b = y.rule,
                h =
                  (b.type === "object" || b.type === "array") &&
                  (Ie(b.fields) === "object" ||
                    Ie(b.defaultField) === "object");
              (h = h && (b.required || (!b.required && y.value))),
                (b.field = y.field);
              function p(x, R) {
                return F(
                  F({}, R),
                  {},
                  {
                    fullField: "".concat(b.fullField, ".").concat(x),
                    fullFields: b.fullFields
                      ? [].concat(be(b.fullFields), [x])
                      : [x],
                  }
                );
              }
              function m() {
                var x =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  R = Array.isArray(x) ? x : [x];
                !l.suppressWarning &&
                  R.length &&
                  e.warning("async-validator:", R),
                  R.length &&
                    b.message !== void 0 &&
                    (R = [].concat(b.message));
                var P = R.map(c0(b, a));
                if (l.first && P.length) return (g[b.field] = 1), S(P);
                if (!h) S(P);
                else {
                  if (b.required && !y.value)
                    return (
                      b.message !== void 0
                        ? (P = [].concat(b.message).map(c0(b, a)))
                        : l.error &&
                          (P = [l.error(b, Hn(l.messages.required, b.field))]),
                      S(P)
                    );
                  var _ = {};
                  b.defaultField &&
                    Object.keys(y.value).map(function (D) {
                      _[D] = b.defaultField;
                    }),
                    (_ = F(F({}, _), y.rule.fields));
                  var j = {};
                  Object.keys(_).forEach(function (D) {
                    var z = _[D],
                      V = Array.isArray(z) ? z : [z];
                    j[D] = V.map(p.bind(null, D));
                  });
                  var L = new e(j);
                  L.messages(l.messages),
                    y.rule.options &&
                      ((y.rule.options.messages = l.messages),
                      (y.rule.options.error = l.error)),
                    L.validate(y.value, y.rule.options || l, function (D) {
                      var z = [];
                      P && P.length && z.push.apply(z, be(P)),
                        D && D.length && z.push.apply(z, be(D)),
                        S(z.length ? z : null);
                    });
                }
              }
              var w;
              if (b.asyncValidator)
                w = b.asyncValidator(b, y.value, m, y.source, l);
              else if (b.validator) {
                try {
                  w = b.validator(b, y.value, m, y.source, l);
                } catch (x) {
                  var C, E;
                  (C = (E = console).error) === null ||
                    C === void 0 ||
                    C.call(E, x),
                    l.suppressValidatorError ||
                      setTimeout(function () {
                        throw x;
                      }, 0),
                    m(x.message);
                }
                w === !0
                  ? m()
                  : w === !1
                  ? m(
                      typeof b.message == "function"
                        ? b.message(b.fullField || b.field)
                        : b.message ||
                            "".concat(b.fullField || b.field, " fails")
                    )
                  : w instanceof Array
                  ? m(w)
                  : w instanceof Error && m(w.message);
              }
              w &&
                w.then &&
                w.then(
                  function () {
                    return m();
                  },
                  function (x) {
                    return m(x);
                  }
                );
            },
            function (y) {
              u(y);
            },
            a
          );
        },
      },
      {
        key: "getType",
        value: function (n) {
          if (
            (n.type === void 0 &&
              n.pattern instanceof RegExp &&
              (n.type = "pattern"),
            typeof n.validator != "function" &&
              n.type &&
              !Ja.hasOwnProperty(n.type))
          )
            throw new Error(Hn("Unknown rule type %s", n.type));
          return n.type || "string";
        },
      },
      {
        key: "getValidationMethod",
        value: function (n) {
          if (typeof n.validator == "function") return n.validator;
          var r = Object.keys(n),
            o = r.indexOf("message");
          return (
            o !== -1 && r.splice(o, 1),
            r.length === 1 && r[0] === "required"
              ? Ja.required
              : Ja[this.getType(n)] || void 0
          );
        },
      },
    ]),
    e
  );
})();
N(Ql, "register", function (t, n) {
  if (typeof n != "function")
    throw new Error(
      "Cannot register a validator by type, validator is not a function"
    );
  Ja[t] = n;
});
N(Ql, "warning", YM);
N(Ql, "messages", Bv);
N(Ql, "validators", Ja);
var zn = "'${name}' is not a valid ${type}",
  gw = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: zn,
      method: zn,
      array: zn,
      object: zn,
      number: zn,
      date: zn,
      boolean: zn,
      integer: zn,
      float: zn,
      regexp: zn,
      email: zn,
      url: zn,
      hex: zn,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  v0 = Ql;
function O_(e, t) {
  return e.replace(/\$\{\w+\}/g, function (n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var p0 = "CODE_LOGIC_ERROR";
function Wv(e, t, n, r, o) {
  return Uv.apply(this, arguments);
}
function Uv() {
  return (
    (Uv = fi(
      Sn().mark(function e(t, n, r, o, i) {
        var a, l, s, u, c, d, v, g, y;
        return Sn().wrap(
          function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  return (
                    (a = F({}, r)),
                    delete a.ruleIndex,
                    (v0.warning = function () {}),
                    a.validator &&
                      ((l = a.validator),
                      (a.validator = function () {
                        try {
                          return l.apply(void 0, arguments);
                        } catch (h) {
                          return console.error(h), Promise.reject(p0);
                        }
                      })),
                    (s = null),
                    a &&
                      a.type === "array" &&
                      a.defaultField &&
                      ((s = a.defaultField), delete a.defaultField),
                    (u = new v0(N({}, t, [a]))),
                    (c = Fi(gw, o.validateMessages)),
                    u.messages(c),
                    (d = []),
                    (b.prev = 10),
                    (b.next = 13),
                    Promise.resolve(u.validate(N({}, t, n), F({}, o)))
                  );
                case 13:
                  b.next = 18;
                  break;
                case 15:
                  (b.prev = 15),
                    (b.t0 = b.catch(10)),
                    b.t0.errors &&
                      (d = b.t0.errors.map(function (h, p) {
                        var m = h.message,
                          w = m === p0 ? c.default : m;
                        return f.isValidElement(w)
                          ? f.cloneElement(w, { key: "error_".concat(p) })
                          : w;
                      }));
                case 18:
                  if (!(!d.length && s)) {
                    b.next = 23;
                    break;
                  }
                  return (
                    (b.next = 21),
                    Promise.all(
                      n.map(function (h, p) {
                        return Wv("".concat(t, ".").concat(p), h, s, o, i);
                      })
                    )
                  );
                case 21:
                  return (
                    (v = b.sent),
                    b.abrupt(
                      "return",
                      v.reduce(function (h, p) {
                        return [].concat(be(h), be(p));
                      }, [])
                    )
                  );
                case 23:
                  return (
                    (g = F(
                      F({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(", ") },
                      i
                    )),
                    (y = d.map(function (h) {
                      return typeof h == "string" ? O_(h, g) : h;
                    })),
                    b.abrupt("return", y)
                  );
                case 26:
                case "end":
                  return b.stop();
              }
          },
          e,
          null,
          [[10, 15]]
        );
      })
    )),
    Uv.apply(this, arguments)
  );
}
function R_(e, t, n, r, o, i) {
  var a = e.join("."),
    l = n
      .map(function (c, d) {
        var v = c.validator,
          g = F(F({}, c), {}, { ruleIndex: d });
        return (
          v &&
            (g.validator = function (y, S, b) {
              var h = !1,
                p = function () {
                  for (
                    var C = arguments.length, E = new Array(C), x = 0;
                    x < C;
                    x++
                  )
                    E[x] = arguments[x];
                  Promise.resolve().then(function () {
                    $n(
                      !h,
                      "Your validator function has already return a promise. `callback` will be ignored."
                    ),
                      h || b.apply(void 0, E);
                  });
                },
                m = v(y, S, p);
              (h =
                m &&
                typeof m.then == "function" &&
                typeof m.catch == "function"),
                $n(
                  h,
                  "`callback` is deprecated. Please return a promise instead."
                ),
                h &&
                  m
                    .then(function () {
                      b();
                    })
                    .catch(function (w) {
                      b(w || " ");
                    });
            }),
          g
        );
      })
      .sort(function (c, d) {
        var v = c.warningOnly,
          g = c.ruleIndex,
          y = d.warningOnly,
          S = d.ruleIndex;
        return !!v == !!y ? g - S : v ? 1 : -1;
      }),
    s;
  if (o === !0)
    s = new Promise(
      (function () {
        var c = fi(
          Sn().mark(function d(v, g) {
            var y, S, b;
            return Sn().wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    y = 0;
                  case 1:
                    if (!(y < l.length)) {
                      p.next = 12;
                      break;
                    }
                    return (S = l[y]), (p.next = 5), Wv(a, t, S, r, i);
                  case 5:
                    if (((b = p.sent), !b.length)) {
                      p.next = 9;
                      break;
                    }
                    return g([{ errors: b, rule: S }]), p.abrupt("return");
                  case 9:
                    (y += 1), (p.next = 1);
                    break;
                  case 12:
                    v([]);
                  case 13:
                  case "end":
                    return p.stop();
                }
            }, d);
          })
        );
        return function (d, v) {
          return c.apply(this, arguments);
        };
      })()
    );
  else {
    var u = l.map(function (c) {
      return Wv(a, t, c, r, i).then(function (d) {
        return { errors: d, rule: c };
      });
    });
    s = (o ? I_(u) : P_(u)).then(function (c) {
      return Promise.reject(c);
    });
  }
  return (
    s.catch(function (c) {
      return c;
    }),
    s
  );
}
function P_(e) {
  return Kv.apply(this, arguments);
}
function Kv() {
  return (
    (Kv = fi(
      Sn().mark(function e(t) {
        return Sn().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  "return",
                  Promise.all(t).then(function (o) {
                    var i,
                      a = (i = []).concat.apply(i, be(o));
                    return a;
                  })
                );
              case 1:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )),
    Kv.apply(this, arguments)
  );
}
function I_(e) {
  return Gv.apply(this, arguments);
}
function Gv() {
  return (
    (Gv = fi(
      Sn().mark(function e(t) {
        var n;
        return Sn().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (n = 0),
                  o.abrupt(
                    "return",
                    new Promise(function (i) {
                      t.forEach(function (a) {
                        a.then(function (l) {
                          l.errors.length && i([l]),
                            (n += 1),
                            n === t.length && i([]);
                        });
                      });
                    })
                  )
                );
              case 2:
              case "end":
                return o.stop();
            }
        }, e);
      })
    )),
    Gv.apply(this, arguments)
  );
}
function Mt(e) {
  return Dv(e);
}
function m0(e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      var o = $r(e, r);
      n = vr(n, r, o);
    }),
    n
  );
}
function Wi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return (
    e &&
    e.some(function (r) {
      return yw(t, r, n);
    })
  );
}
function yw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, o) {
        return e[o] === r;
      });
}
function $_(e, t) {
  if (e === t) return !0;
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    Ie(e) !== "object" ||
    Ie(t) !== "object"
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    o = new Set([].concat(n, r));
  return be(o).every(function (i) {
    var a = e[i],
      l = t[i];
    return typeof a == "function" && typeof l == "function" ? !0 : a === l;
  });
}
function T_(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Ie(t.target) === "object" && e in t.target
    ? t.target[e]
    : t;
}
function h0(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    i = t - n;
  return i > 0
    ? [].concat(
        be(e.slice(0, n)),
        [o],
        be(e.slice(n, t)),
        be(e.slice(t + 1, r))
      )
    : i < 0
    ? [].concat(
        be(e.slice(0, t)),
        be(e.slice(t + 1, n + 1)),
        [o],
        be(e.slice(n + 1, r))
      )
    : e;
}
var M_ = ["name"],
  Qn = [];
function g0(e, t, n, r, o, i) {
  return typeof e == "function"
    ? e(t, n, "source" in i ? { source: i.source } : {})
    : r !== o;
}
var mm = (function (e) {
  ui(n, e);
  var t = ci(n);
  function n(r) {
    var o;
    if (
      (an(this, n),
      (o = t.call(this, r)),
      N(Ue(o), "state", { resetCount: 0 }),
      N(Ue(o), "cancelRegisterFunc", null),
      N(Ue(o), "mounted", !1),
      N(Ue(o), "touched", !1),
      N(Ue(o), "dirty", !1),
      N(Ue(o), "validatePromise", void 0),
      N(Ue(o), "prevValidating", void 0),
      N(Ue(o), "errors", Qn),
      N(Ue(o), "warnings", Qn),
      N(Ue(o), "cancelRegister", function () {
        var s = o.props,
          u = s.preserve,
          c = s.isListField,
          d = s.name;
        o.cancelRegisterFunc && o.cancelRegisterFunc(c, u, Mt(d)),
          (o.cancelRegisterFunc = null);
      }),
      N(Ue(o), "getNamePath", function () {
        var s = o.props,
          u = s.name,
          c = s.fieldContext,
          d = c.prefixName,
          v = d === void 0 ? [] : d;
        return u !== void 0 ? [].concat(be(v), be(u)) : [];
      }),
      N(Ue(o), "getRules", function () {
        var s = o.props,
          u = s.rules,
          c = u === void 0 ? [] : u,
          d = s.fieldContext;
        return c.map(function (v) {
          return typeof v == "function" ? v(d) : v;
        });
      }),
      N(Ue(o), "refresh", function () {
        o.mounted &&
          o.setState(function (s) {
            var u = s.resetCount;
            return { resetCount: u + 1 };
          });
      }),
      N(Ue(o), "metaCache", null),
      N(Ue(o), "triggerMetaEvent", function (s) {
        var u = o.props.onMetaChange;
        if (u) {
          var c = F(F({}, o.getMeta()), {}, { destroy: s });
          wv(o.metaCache, c) || u(c), (o.metaCache = c);
        } else o.metaCache = null;
      }),
      N(Ue(o), "onStoreChange", function (s, u, c) {
        var d = o.props,
          v = d.shouldUpdate,
          g = d.dependencies,
          y = g === void 0 ? [] : g,
          S = d.onReset,
          b = c.store,
          h = o.getNamePath(),
          p = o.getValue(s),
          m = o.getValue(b),
          w = u && Wi(u, h);
        switch (
          (c.type === "valueUpdate" &&
            c.source === "external" &&
            !wv(p, m) &&
            ((o.touched = !0),
            (o.dirty = !0),
            (o.validatePromise = null),
            (o.errors = Qn),
            (o.warnings = Qn),
            o.triggerMetaEvent()),
          c.type)
        ) {
          case "reset":
            if (!u || w) {
              (o.touched = !1),
                (o.dirty = !1),
                (o.validatePromise = void 0),
                (o.errors = Qn),
                (o.warnings = Qn),
                o.triggerMetaEvent(),
                S == null || S(),
                o.refresh();
              return;
            }
            break;
          case "remove": {
            if (v) {
              o.reRender();
              return;
            }
            break;
          }
          case "setField": {
            var C = c.data;
            if (w) {
              "touched" in C && (o.touched = C.touched),
                "validating" in C &&
                  !("originRCField" in C) &&
                  (o.validatePromise = C.validating
                    ? Promise.resolve([])
                    : null),
                "errors" in C && (o.errors = C.errors || Qn),
                "warnings" in C && (o.warnings = C.warnings || Qn),
                (o.dirty = !0),
                o.triggerMetaEvent(),
                o.reRender();
              return;
            } else if ("value" in C && Wi(u, h, !0)) {
              o.reRender();
              return;
            }
            if (v && !h.length && g0(v, s, b, p, m, c)) {
              o.reRender();
              return;
            }
            break;
          }
          case "dependenciesUpdate": {
            var E = y.map(Mt);
            if (
              E.some(function (x) {
                return Wi(c.relatedFields, x);
              })
            ) {
              o.reRender();
              return;
            }
            break;
          }
          default:
            if (w || ((!y.length || h.length || v) && g0(v, s, b, p, m, c))) {
              o.reRender();
              return;
            }
            break;
        }
        v === !0 && o.reRender();
      }),
      N(Ue(o), "validateRules", function (s) {
        var u = o.getNamePath(),
          c = o.getValue(),
          d = s || {},
          v = d.triggerName,
          g = d.validateOnly,
          y = g === void 0 ? !1 : g,
          S = Promise.resolve().then(
            fi(
              Sn().mark(function b() {
                var h, p, m, w, C, E, x;
                return Sn().wrap(function (P) {
                  for (;;)
                    switch ((P.prev = P.next)) {
                      case 0:
                        if (o.mounted) {
                          P.next = 2;
                          break;
                        }
                        return P.abrupt("return", []);
                      case 2:
                        if (
                          ((h = o.props),
                          (p = h.validateFirst),
                          (m = p === void 0 ? !1 : p),
                          (w = h.messageVariables),
                          (C = h.validateDebounce),
                          (E = o.getRules()),
                          v &&
                            (E = E.filter(function (_) {
                              return _;
                            }).filter(function (_) {
                              var j = _.validateTrigger;
                              if (!j) return !0;
                              var L = Dv(j);
                              return L.includes(v);
                            })),
                          !(C && v))
                        ) {
                          P.next = 10;
                          break;
                        }
                        return (
                          (P.next = 8),
                          new Promise(function (_) {
                            setTimeout(_, C);
                          })
                        );
                      case 8:
                        if (o.validatePromise === S) {
                          P.next = 10;
                          break;
                        }
                        return P.abrupt("return", []);
                      case 10:
                        return (
                          (x = R_(u, c, E, s, m, w)),
                          x
                            .catch(function (_) {
                              return _;
                            })
                            .then(function () {
                              var _ =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : Qn;
                              if (o.validatePromise === S) {
                                var j;
                                o.validatePromise = null;
                                var L = [],
                                  D = [];
                                (j = _.forEach) === null ||
                                  j === void 0 ||
                                  j.call(_, function (z) {
                                    var V = z.rule.warningOnly,
                                      T = z.errors,
                                      I = T === void 0 ? Qn : T;
                                    V
                                      ? D.push.apply(D, be(I))
                                      : L.push.apply(L, be(I));
                                  }),
                                  (o.errors = L),
                                  (o.warnings = D),
                                  o.triggerMetaEvent(),
                                  o.reRender();
                              }
                            }),
                          P.abrupt("return", x)
                        );
                      case 13:
                      case "end":
                        return P.stop();
                    }
                }, b);
              })
            )
          );
        return (
          y ||
            ((o.validatePromise = S),
            (o.dirty = !0),
            (o.errors = Qn),
            (o.warnings = Qn),
            o.triggerMetaEvent(),
            o.reRender()),
          S
        );
      }),
      N(Ue(o), "isFieldValidating", function () {
        return !!o.validatePromise;
      }),
      N(Ue(o), "isFieldTouched", function () {
        return o.touched;
      }),
      N(Ue(o), "isFieldDirty", function () {
        if (o.dirty || o.props.initialValue !== void 0) return !0;
        var s = o.props.fieldContext,
          u = s.getInternalHooks(Ko),
          c = u.getInitialValue;
        return c(o.getNamePath()) !== void 0;
      }),
      N(Ue(o), "getErrors", function () {
        return o.errors;
      }),
      N(Ue(o), "getWarnings", function () {
        return o.warnings;
      }),
      N(Ue(o), "isListField", function () {
        return o.props.isListField;
      }),
      N(Ue(o), "isList", function () {
        return o.props.isList;
      }),
      N(Ue(o), "isPreserve", function () {
        return o.props.preserve;
      }),
      N(Ue(o), "getMeta", function () {
        o.prevValidating = o.isFieldValidating();
        var s = {
          touched: o.isFieldTouched(),
          validating: o.prevValidating,
          errors: o.errors,
          warnings: o.warnings,
          name: o.getNamePath(),
          validated: o.validatePromise === null,
        };
        return s;
      }),
      N(Ue(o), "getOnlyChild", function (s) {
        if (typeof s == "function") {
          var u = o.getMeta();
          return F(
            F(
              {},
              o.getOnlyChild(s(o.getControlled(), u, o.props.fieldContext))
            ),
            {},
            { isFunction: !0 }
          );
        }
        var c = Ol(s);
        return c.length !== 1 || !f.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 };
      }),
      N(Ue(o), "getValue", function (s) {
        var u = o.props.fieldContext.getFieldsValue,
          c = o.getNamePath();
        return $r(s || u(!0), c);
      }),
      N(Ue(o), "getControlled", function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = o.props,
          c = u.name,
          d = u.trigger,
          v = u.validateTrigger,
          g = u.getValueFromEvent,
          y = u.normalize,
          S = u.valuePropName,
          b = u.getValueProps,
          h = u.fieldContext,
          p = v !== void 0 ? v : h.validateTrigger,
          m = o.getNamePath(),
          w = h.getInternalHooks,
          C = h.getFieldsValue,
          E = w(Ko),
          x = E.dispatch,
          R = o.getValue(),
          P =
            b ||
            function (z) {
              return N({}, S, z);
            },
          _ = s[d],
          j = c !== void 0 ? P(R) : {},
          L = F(F({}, s), j);
        L[d] = function () {
          (o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
          for (var z, V = arguments.length, T = new Array(V), I = 0; I < V; I++)
            T[I] = arguments[I];
          g ? (z = g.apply(void 0, T)) : (z = T_.apply(void 0, [S].concat(T))),
            y && (z = y(z, R, C(!0))),
            x({ type: "updateValue", namePath: m, value: z }),
            _ && _.apply(void 0, T);
        };
        var D = Dv(p || []);
        return (
          D.forEach(function (z) {
            var V = L[z];
            L[z] = function () {
              V && V.apply(void 0, arguments);
              var T = o.props.rules;
              T &&
                T.length &&
                x({ type: "validateField", namePath: m, triggerName: z });
            };
          }),
          L
        );
      }),
      r.fieldContext)
    ) {
      var i = r.fieldContext.getInternalHooks,
        a = i(Ko),
        l = a.initEntityValue;
      l(Ue(o));
    }
    return o;
  }
  return (
    ln(n, [
      {
        key: "componentDidMount",
        value: function () {
          var o = this.props,
            i = o.shouldUpdate,
            a = o.fieldContext;
          if (((this.mounted = !0), a)) {
            var l = a.getInternalHooks,
              s = l(Ko),
              u = s.registerField;
            this.cancelRegisterFunc = u(this);
          }
          i === !0 && this.reRender();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
        },
      },
      {
        key: "reRender",
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: "render",
        value: function () {
          var o = this.state.resetCount,
            i = this.props.children,
            a = this.getOnlyChild(i),
            l = a.child,
            s = a.isFunction,
            u;
          return (
            s
              ? (u = l)
              : f.isValidElement(l)
              ? (u = f.cloneElement(l, this.getControlled(l.props)))
              : ($n(!l, "`children` of Field is not validate ReactElement."),
                (u = l)),
            f.createElement(f.Fragment, { key: o }, u)
          );
        },
      },
    ]),
    n
  );
})(f.Component);
N(mm, "contextType", aa);
N(mm, "defaultProps", { trigger: "onChange", valuePropName: "value" });
function Sw(e) {
  var t = e.name,
    n = yt(e, M_),
    r = f.useContext(aa),
    o = f.useContext(ku),
    i = t !== void 0 ? Mt(t) : void 0,
    a = "keep";
  return (
    n.isListField || (a = "_".concat((i || []).join("_"))),
    f.createElement(
      mm,
      We({ key: a, name: i, isListField: !!o }, n, { fieldContext: r })
    )
  );
}
function __(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    o = e.rules,
    i = e.validateTrigger,
    a = e.isListField,
    l = f.useContext(aa),
    s = f.useContext(ku),
    u = f.useRef({ keys: [], id: 0 }),
    c = u.current,
    d = f.useMemo(
      function () {
        var S = Mt(l.prefixName) || [];
        return [].concat(be(S), be(Mt(t)));
      },
      [l.prefixName, t]
    ),
    v = f.useMemo(
      function () {
        return F(F({}, l), {}, { prefixName: d });
      },
      [l, d]
    ),
    g = f.useMemo(
      function () {
        return {
          getKey: function (b) {
            var h = d.length,
              p = b[h];
            return [c.keys[p], b.slice(h + 1)];
          },
        };
      },
      [d]
    );
  if (typeof r != "function")
    return $n(!1, "Form.List only accepts function as children."), null;
  var y = function (b, h, p) {
    var m = p.source;
    return m === "internal" ? !1 : b !== h;
  };
  return f.createElement(
    ku.Provider,
    { value: g },
    f.createElement(
      aa.Provider,
      { value: v },
      f.createElement(
        Sw,
        {
          name: [],
          shouldUpdate: y,
          rules: o,
          validateTrigger: i,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!s,
        },
        function (S, b) {
          var h = S.value,
            p = h === void 0 ? [] : h,
            m = S.onChange,
            w = l.getFieldValue,
            C = function () {
              var P = w(d || []);
              return P || [];
            },
            E = {
              add: function (P, _) {
                var j = C();
                _ >= 0 && _ <= j.length
                  ? ((c.keys = [].concat(
                      be(c.keys.slice(0, _)),
                      [c.id],
                      be(c.keys.slice(_))
                    )),
                    m([].concat(be(j.slice(0, _)), [P], be(j.slice(_)))))
                  : ((c.keys = [].concat(be(c.keys), [c.id])),
                    m([].concat(be(j), [P]))),
                  (c.id += 1);
              },
              remove: function (P) {
                var _ = C(),
                  j = new Set(Array.isArray(P) ? P : [P]);
                j.size <= 0 ||
                  ((c.keys = c.keys.filter(function (L, D) {
                    return !j.has(D);
                  })),
                  m(
                    _.filter(function (L, D) {
                      return !j.has(D);
                    })
                  ));
              },
              move: function (P, _) {
                if (P !== _) {
                  var j = C();
                  P < 0 ||
                    P >= j.length ||
                    _ < 0 ||
                    _ >= j.length ||
                    ((c.keys = h0(c.keys, P, _)), m(h0(j, P, _)));
                }
              },
            },
            x = p || [];
          return (
            Array.isArray(x) || (x = []),
            r(
              x.map(function (R, P) {
                var _ = c.keys[P];
                return (
                  _ === void 0 &&
                    ((c.keys[P] = c.id), (_ = c.keys[P]), (c.id += 1)),
                  { name: P, key: _, isListField: !0 }
                );
              }),
              E,
              b
            )
          );
        }
      )
    )
  );
}
function A_(e) {
  var t = !1,
    n = e.length,
    r = [];
  return e.length
    ? new Promise(function (o, i) {
        e.forEach(function (a, l) {
          a.catch(function (s) {
            return (t = !0), s;
          }).then(function (s) {
            (n -= 1), (r[l] = s), !(n > 0) && (t && i(r), o(r));
          });
        });
      })
    : Promise.resolve([]);
}
var bw = "__@field_split__";
function jf(e) {
  return e
    .map(function (t) {
      return "".concat(Ie(t), ":").concat(t);
    })
    .join(bw);
}
var Si = (function () {
    function e() {
      an(this, e), N(this, "kvs", new Map());
    }
    return (
      ln(e, [
        {
          key: "set",
          value: function (n, r) {
            this.kvs.set(jf(n), r);
          },
        },
        {
          key: "get",
          value: function (n) {
            return this.kvs.get(jf(n));
          },
        },
        {
          key: "update",
          value: function (n, r) {
            var o = this.get(n),
              i = r(o);
            i ? this.set(n, i) : this.delete(n);
          },
        },
        {
          key: "delete",
          value: function (n) {
            this.kvs.delete(jf(n));
          },
        },
        {
          key: "map",
          value: function (n) {
            return be(this.kvs.entries()).map(function (r) {
              var o = H(r, 2),
                i = o[0],
                a = o[1],
                l = i.split(bw);
              return n({
                key: l.map(function (s) {
                  var u = s.match(/^([^:]*):(.*)$/),
                    c = H(u, 3),
                    d = c[1],
                    v = c[2];
                  return d === "number" ? Number(v) : v;
                }),
                value: a,
              });
            });
          },
        },
        {
          key: "toJSON",
          value: function () {
            var n = {};
            return (
              this.map(function (r) {
                var o = r.key,
                  i = r.value;
                return (n[o.join(".")] = i), null;
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  N_ = ["name"],
  F_ = ln(function e(t) {
    var n = this;
    an(this, e),
      N(this, "formHooked", !1),
      N(this, "forceRootUpdate", void 0),
      N(this, "subscribable", !0),
      N(this, "store", {}),
      N(this, "fieldEntities", []),
      N(this, "initialValues", {}),
      N(this, "callbacks", {}),
      N(this, "validateMessages", null),
      N(this, "preserve", null),
      N(this, "lastValidatePromise", null),
      N(this, "getForm", function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      N(this, "getInternalHooks", function (r) {
        return r === Ko
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : ($n(
              !1,
              "`getInternalHooks` is internal usage. Should not call directly."
            ),
            null);
      }),
      N(this, "useSubscribe", function (r) {
        n.subscribable = r;
      }),
      N(this, "prevWithoutPreserves", null),
      N(this, "setInitialValues", function (r, o) {
        if (((n.initialValues = r || {}), o)) {
          var i,
            a = Fi(r, n.store);
          (i = n.prevWithoutPreserves) === null ||
            i === void 0 ||
            i.map(function (l) {
              var s = l.key;
              a = vr(a, s, $r(r, s));
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a);
        }
      }),
      N(this, "destroyForm", function (r) {
        if (r) n.updateStore({});
        else {
          var o = new Si();
          n.getFieldEntities(!0).forEach(function (i) {
            n.isMergedPreserve(i.isPreserve()) || o.set(i.getNamePath(), !0);
          }),
            (n.prevWithoutPreserves = o);
        }
      }),
      N(this, "getInitialValue", function (r) {
        var o = $r(n.initialValues, r);
        return r.length ? Fi(o) : o;
      }),
      N(this, "setCallbacks", function (r) {
        n.callbacks = r;
      }),
      N(this, "setValidateMessages", function (r) {
        n.validateMessages = r;
      }),
      N(this, "setPreserve", function (r) {
        n.preserve = r;
      }),
      N(this, "watchList", []),
      N(this, "registerWatch", function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (o) {
              return o !== r;
            });
          }
        );
      }),
      N(this, "notifyWatch", function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (n.watchList.length) {
          var o = n.getFieldsValue(),
            i = n.getFieldsValue(!0);
          n.watchList.forEach(function (a) {
            a(o, i, r);
          });
        }
      }),
      N(this, "timeoutId", null),
      N(this, "warningUnhooked", function () {}),
      N(this, "updateStore", function (r) {
        n.store = r;
      }),
      N(this, "getFieldEntities", function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        return r
          ? n.fieldEntities.filter(function (o) {
              return o.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      N(this, "getFieldsMap", function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          o = new Si();
        return (
          n.getFieldEntities(r).forEach(function (i) {
            var a = i.getNamePath();
            o.set(a, i);
          }),
          o
        );
      }),
      N(this, "getFieldEntitiesForNamePathList", function (r) {
        if (!r) return n.getFieldEntities(!0);
        var o = n.getFieldsMap(!0);
        return r.map(function (i) {
          var a = Mt(i);
          return o.get(a) || { INVALIDATE_NAME_PATH: Mt(i) };
        });
      }),
      N(this, "getFieldsValue", function (r, o) {
        n.warningUnhooked();
        var i, a, l;
        if (
          (r === !0 || Array.isArray(r)
            ? ((i = r), (a = o))
            : r && Ie(r) === "object" && ((l = r.strict), (a = r.filter)),
          i === !0 && !a)
        )
          return n.store;
        var s = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
          u = [];
        return (
          s.forEach(function (c) {
            var d,
              v,
              g =
                "INVALIDATE_NAME_PATH" in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath();
            if (l) {
              var y, S;
              if ((y = (S = c).isList) !== null && y !== void 0 && y.call(S))
                return;
            } else if (!i && (d = (v = c).isListField) !== null && d !== void 0 && d.call(v)) return;
            if (!a) u.push(g);
            else {
              var b = "getMeta" in c ? c.getMeta() : null;
              a(b) && u.push(g);
            }
          }),
          m0(n.store, u.map(Mt))
        );
      }),
      N(this, "getFieldValue", function (r) {
        n.warningUnhooked();
        var o = Mt(r);
        return $r(n.store, o);
      }),
      N(this, "getFieldsError", function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntitiesForNamePathList(r);
        return o.map(function (i, a) {
          return i && !("INVALIDATE_NAME_PATH" in i)
            ? {
                name: i.getNamePath(),
                errors: i.getErrors(),
                warnings: i.getWarnings(),
              }
            : { name: Mt(r[a]), errors: [], warnings: [] };
        });
      }),
      N(this, "getFieldError", function (r) {
        n.warningUnhooked();
        var o = Mt(r),
          i = n.getFieldsError([o])[0];
        return i.errors;
      }),
      N(this, "getFieldWarning", function (r) {
        n.warningUnhooked();
        var o = Mt(r),
          i = n.getFieldsError([o])[0];
        return i.warnings;
      }),
      N(this, "isFieldsTouched", function () {
        n.warningUnhooked();
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        var a = o[0],
          l = o[1],
          s,
          u = !1;
        o.length === 0
          ? (s = null)
          : o.length === 1
          ? Array.isArray(a)
            ? ((s = a.map(Mt)), (u = !1))
            : ((s = null), (u = a))
          : ((s = a.map(Mt)), (u = l));
        var c = n.getFieldEntities(!0),
          d = function (b) {
            return b.isFieldTouched();
          };
        if (!s)
          return u
            ? c.every(function (S) {
                return d(S) || S.isList();
              })
            : c.some(d);
        var v = new Si();
        s.forEach(function (S) {
          v.set(S, []);
        }),
          c.forEach(function (S) {
            var b = S.getNamePath();
            s.forEach(function (h) {
              h.every(function (p, m) {
                return b[m] === p;
              }) &&
                v.update(h, function (p) {
                  return [].concat(be(p), [S]);
                });
            });
          });
        var g = function (b) {
            return b.some(d);
          },
          y = v.map(function (S) {
            var b = S.value;
            return b;
          });
        return u ? y.every(g) : y.some(g);
      }),
      N(this, "isFieldTouched", function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r]);
      }),
      N(this, "isFieldsValidating", function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntities();
        if (!r)
          return o.some(function (a) {
            return a.isFieldValidating();
          });
        var i = r.map(Mt);
        return o.some(function (a) {
          var l = a.getNamePath();
          return Wi(i, l) && a.isFieldValidating();
        });
      }),
      N(this, "isFieldValidating", function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r]);
      }),
      N(this, "resetWithFieldInitialValue", function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o = new Si(),
          i = n.getFieldEntities(!0);
        i.forEach(function (s) {
          var u = s.props.initialValue,
            c = s.getNamePath();
          if (u !== void 0) {
            var d = o.get(c) || new Set();
            d.add({ entity: s, value: u }), o.set(c, d);
          }
        });
        var a = function (u) {
            u.forEach(function (c) {
              var d = c.props.initialValue;
              if (d !== void 0) {
                var v = c.getNamePath(),
                  g = n.getInitialValue(v);
                if (g !== void 0)
                  $n(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      v.join("."),
                      "'. Field can not overwrite it."
                    )
                  );
                else {
                  var y = o.get(v);
                  if (y && y.size > 1)
                    $n(
                      !1,
                      "Multiple Field with path '".concat(
                        v.join("."),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    );
                  else if (y) {
                    var S = n.getFieldValue(v),
                      b = c.isListField();
                    !b &&
                      (!r.skipExist || S === void 0) &&
                      n.updateStore(vr(n.store, v, be(y)[0].value));
                  }
                }
              }
            });
          },
          l;
        r.entities
          ? (l = r.entities)
          : r.namePathList
          ? ((l = []),
            r.namePathList.forEach(function (s) {
              var u = o.get(s);
              if (u) {
                var c;
                (c = l).push.apply(
                  c,
                  be(
                    be(u).map(function (d) {
                      return d.entity;
                    })
                  )
                );
              }
            }))
          : (l = i),
          a(l);
      }),
      N(this, "resetFields", function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (!r) {
          n.updateStore(Fi(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(o, null, { type: "reset" }),
            n.notifyWatch();
          return;
        }
        var i = r.map(Mt);
        i.forEach(function (a) {
          var l = n.getInitialValue(a);
          n.updateStore(vr(n.store, a, l));
        }),
          n.resetWithFieldInitialValue({ namePathList: i }),
          n.notifyObservers(o, i, { type: "reset" }),
          n.notifyWatch(i);
      }),
      N(this, "setFields", function (r) {
        n.warningUnhooked();
        var o = n.store,
          i = [];
        r.forEach(function (a) {
          var l = a.name,
            s = yt(a, N_),
            u = Mt(l);
          i.push(u),
            "value" in s && n.updateStore(vr(n.store, u, s.value)),
            n.notifyObservers(o, [u], { type: "setField", data: a });
        }),
          n.notifyWatch(i);
      }),
      N(this, "getFields", function () {
        var r = n.getFieldEntities(!0),
          o = r.map(function (i) {
            var a = i.getNamePath(),
              l = i.getMeta(),
              s = F(F({}, l), {}, { name: a, value: n.getFieldValue(a) });
            return Object.defineProperty(s, "originRCField", { value: !0 }), s;
          });
        return o;
      }),
      N(this, "initEntityValue", function (r) {
        var o = r.props.initialValue;
        if (o !== void 0) {
          var i = r.getNamePath(),
            a = $r(n.store, i);
          a === void 0 && n.updateStore(vr(n.store, i, o));
        }
      }),
      N(this, "isMergedPreserve", function (r) {
        var o = r !== void 0 ? r : n.preserve;
        return o ?? !0;
      }),
      N(this, "registerField", function (r) {
        n.fieldEntities.push(r);
        var o = r.getNamePath();
        if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
          var i = n.store;
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(i, [r.getNamePath()], {
              type: "valueUpdate",
              source: "internal",
            });
        }
        return function (a, l) {
          var s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (d) {
              return d !== r;
            })),
            !n.isMergedPreserve(l) && (!a || s.length > 1))
          ) {
            var u = a ? void 0 : n.getInitialValue(o);
            if (
              o.length &&
              n.getFieldValue(o) !== u &&
              n.fieldEntities.every(function (d) {
                return !yw(d.getNamePath(), o);
              })
            ) {
              var c = n.store;
              n.updateStore(vr(c, o, u, !0)),
                n.notifyObservers(c, [o], { type: "remove" }),
                n.triggerDependenciesUpdate(c, o);
            }
          }
          n.notifyWatch([o]);
        };
      }),
      N(this, "dispatch", function (r) {
        switch (r.type) {
          case "updateValue": {
            var o = r.namePath,
              i = r.value;
            n.updateValue(o, i);
            break;
          }
          case "validateField": {
            var a = r.namePath,
              l = r.triggerName;
            n.validateFields([a], { triggerName: l });
            break;
          }
        }
      }),
      N(this, "notifyObservers", function (r, o, i) {
        if (n.subscribable) {
          var a = F(F({}, i), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (l) {
            var s = l.onStoreChange;
            s(r, o, a);
          });
        } else n.forceRootUpdate();
      }),
      N(this, "triggerDependenciesUpdate", function (r, o) {
        var i = n.getDependencyChildrenFields(o);
        return (
          i.length && n.validateFields(i),
          n.notifyObservers(r, i, {
            type: "dependenciesUpdate",
            relatedFields: [o].concat(be(i)),
          }),
          i
        );
      }),
      N(this, "updateValue", function (r, o) {
        var i = Mt(r),
          a = n.store;
        n.updateStore(vr(n.store, i, o)),
          n.notifyObservers(a, [i], {
            type: "valueUpdate",
            source: "internal",
          }),
          n.notifyWatch([i]);
        var l = n.triggerDependenciesUpdate(a, i),
          s = n.callbacks.onValuesChange;
        if (s) {
          var u = m0(n.store, [i]);
          s(u, n.getFieldsValue());
        }
        n.triggerOnFieldsChange([i].concat(be(l)));
      }),
      N(this, "setFieldsValue", function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (r) {
          var i = Fi(n.store, r);
          n.updateStore(i);
        }
        n.notifyObservers(o, null, { type: "valueUpdate", source: "external" }),
          n.notifyWatch();
      }),
      N(this, "setFieldValue", function (r, o) {
        n.setFields([{ name: r, value: o }]);
      }),
      N(this, "getDependencyChildrenFields", function (r) {
        var o = new Set(),
          i = [],
          a = new Si();
        n.getFieldEntities().forEach(function (s) {
          var u = s.props.dependencies;
          (u || []).forEach(function (c) {
            var d = Mt(c);
            a.update(d, function () {
              var v =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set();
              return v.add(s), v;
            });
          });
        });
        var l = function s(u) {
          var c = a.get(u) || new Set();
          c.forEach(function (d) {
            if (!o.has(d)) {
              o.add(d);
              var v = d.getNamePath();
              d.isFieldDirty() && v.length && (i.push(v), s(v));
            }
          });
        };
        return l(r), i;
      }),
      N(this, "triggerOnFieldsChange", function (r, o) {
        var i = n.callbacks.onFieldsChange;
        if (i) {
          var a = n.getFields();
          if (o) {
            var l = new Si();
            o.forEach(function (u) {
              var c = u.name,
                d = u.errors;
              l.set(c, d);
            }),
              a.forEach(function (u) {
                u.errors = l.get(u.name) || u.errors;
              });
          }
          var s = a.filter(function (u) {
            var c = u.name;
            return Wi(r, c);
          });
          s.length && i(s, a);
        }
      }),
      N(this, "validateFields", function (r, o) {
        n.warningUnhooked();
        var i, a;
        Array.isArray(r) || typeof r == "string" || typeof o == "string"
          ? ((i = r), (a = o))
          : (a = r);
        var l = !!i,
          s = l ? i.map(Mt) : [],
          u = [],
          c = String(Date.now()),
          d = new Set(),
          v = a || {},
          g = v.recursive,
          y = v.dirty;
        n.getFieldEntities(!0).forEach(function (p) {
          if (
            (l || s.push(p.getNamePath()),
            !(!p.props.rules || !p.props.rules.length) &&
              !(y && !p.isFieldDirty()))
          ) {
            var m = p.getNamePath();
            if ((d.add(m.join(c)), !l || Wi(s, m, g))) {
              var w = p.validateRules(
                F({ validateMessages: F(F({}, gw), n.validateMessages) }, a)
              );
              u.push(
                w
                  .then(function () {
                    return { name: m, errors: [], warnings: [] };
                  })
                  .catch(function (C) {
                    var E,
                      x = [],
                      R = [];
                    return (
                      (E = C.forEach) === null ||
                        E === void 0 ||
                        E.call(C, function (P) {
                          var _ = P.rule.warningOnly,
                            j = P.errors;
                          _ ? R.push.apply(R, be(j)) : x.push.apply(x, be(j));
                        }),
                      x.length
                        ? Promise.reject({ name: m, errors: x, warnings: R })
                        : { name: m, errors: x, warnings: R }
                    );
                  })
              );
            }
          }
        });
        var S = A_(u);
        (n.lastValidatePromise = S),
          S.catch(function (p) {
            return p;
          }).then(function (p) {
            var m = p.map(function (w) {
              var C = w.name;
              return C;
            });
            n.notifyObservers(n.store, m, { type: "validateFinish" }),
              n.triggerOnFieldsChange(m, p);
          });
        var b = S.then(function () {
          return n.lastValidatePromise === S
            ? Promise.resolve(n.getFieldsValue(s))
            : Promise.reject([]);
        }).catch(function (p) {
          var m = p.filter(function (w) {
            return w && w.errors.length;
          });
          return Promise.reject({
            values: n.getFieldsValue(s),
            errorFields: m,
            outOfDate: n.lastValidatePromise !== S,
          });
        });
        b.catch(function (p) {
          return p;
        });
        var h = s.filter(function (p) {
          return d.has(p.join(c));
        });
        return n.triggerOnFieldsChange(h), b;
      }),
      N(this, "submit", function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var o = n.callbacks.onFinish;
              if (o)
                try {
                  o(r);
                } catch (i) {
                  console.error(i);
                }
            })
            .catch(function (r) {
              var o = n.callbacks.onFinishFailed;
              o && o(r);
            });
      }),
      (this.forceRootUpdate = t);
  });
function ww(e) {
  var t = f.useRef(),
    n = f.useState({}),
    r = H(n, 2),
    o = r[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var i = function () {
          o({});
        },
        a = new F_(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var qv = f.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  j_ = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      o = t.onFormFinish,
      i = t.children,
      a = f.useContext(qv),
      l = f.useRef({});
    return f.createElement(
      qv.Provider,
      {
        value: F(
          F({}, a),
          {},
          {
            validateMessages: F(F({}, a.validateMessages), n),
            triggerFormChange: function (u, c) {
              r && r(u, { changedFields: c, forms: l.current }),
                a.triggerFormChange(u, c);
            },
            triggerFormFinish: function (u, c) {
              o && o(u, { values: c, forms: l.current }),
                a.triggerFormFinish(u, c);
            },
            registerForm: function (u, c) {
              u && (l.current = F(F({}, l.current), {}, N({}, u, c))),
                a.registerForm(u, c);
            },
            unregisterForm: function (u) {
              var c = F({}, l.current);
              delete c[u], (l.current = c), a.unregisterForm(u);
            },
          }
        ),
      },
      i
    );
  },
  z_ = [
    "name",
    "initialValues",
    "fields",
    "form",
    "preserve",
    "children",
    "component",
    "validateMessages",
    "validateTrigger",
    "onValuesChange",
    "onFieldsChange",
    "onFinish",
    "onFinishFailed",
    "clearOnDestroy",
  ],
  L_ = function (t, n) {
    var r = t.name,
      o = t.initialValues,
      i = t.fields,
      a = t.form,
      l = t.preserve,
      s = t.children,
      u = t.component,
      c = u === void 0 ? "form" : u,
      d = t.validateMessages,
      v = t.validateTrigger,
      g = v === void 0 ? "onChange" : v,
      y = t.onValuesChange,
      S = t.onFieldsChange,
      b = t.onFinish,
      h = t.onFinishFailed,
      p = t.clearOnDestroy,
      m = yt(t, z_),
      w = f.useRef(null),
      C = f.useContext(qv),
      E = ww(a),
      x = H(E, 1),
      R = x[0],
      P = R.getInternalHooks(Ko),
      _ = P.useSubscribe,
      j = P.setInitialValues,
      L = P.setCallbacks,
      D = P.setValidateMessages,
      z = P.setPreserve,
      V = P.destroyForm;
    f.useImperativeHandle(n, function () {
      return F(F({}, R), {}, { nativeElement: w.current });
    }),
      f.useEffect(
        function () {
          return (
            C.registerForm(r, R),
            function () {
              C.unregisterForm(r);
            }
          );
        },
        [C, R, r]
      ),
      D(F(F({}, C.validateMessages), d)),
      L({
        onValuesChange: y,
        onFieldsChange: function (W) {
          if ((C.triggerFormChange(r, W), S)) {
            for (
              var K = arguments.length,
                se = new Array(K > 1 ? K - 1 : 0),
                q = 1;
              q < K;
              q++
            )
              se[q - 1] = arguments[q];
            S.apply(void 0, [W].concat(se));
          }
        },
        onFinish: function (W) {
          C.triggerFormFinish(r, W), b && b(W);
        },
        onFinishFailed: h,
      }),
      z(l);
    var T = f.useRef(null);
    j(o, !T.current),
      T.current || (T.current = !0),
      f.useEffect(function () {
        return function () {
          return V(p);
        };
      }, []);
    var I,
      O = typeof s == "function";
    if (O) {
      var M = R.getFieldsValue(!0);
      I = s(M, R);
    } else I = s;
    _(!O);
    var A = f.useRef();
    f.useEffect(
      function () {
        $_(A.current || [], i || []) || R.setFields(i || []), (A.current = i);
      },
      [i, R]
    );
    var $ = f.useMemo(
        function () {
          return F(F({}, R), {}, { validateTrigger: g });
        },
        [R, g]
      ),
      k = f.createElement(
        ku.Provider,
        { value: null },
        f.createElement(aa.Provider, { value: $ }, I)
      );
    return c === !1
      ? k
      : f.createElement(
          c,
          We({}, m, {
            ref: w,
            onSubmit: function (W) {
              W.preventDefault(), W.stopPropagation(), R.submit();
            },
            onReset: function (W) {
              var K;
              W.preventDefault(),
                R.resetFields(),
                (K = m.onReset) === null || K === void 0 || K.call(m, W);
            },
          }),
          k
        );
  };
function y0(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function D_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    o = t[1],
    i = o === void 0 ? {} : o,
    a = GM(i) ? { form: i } : i,
    l = a.form,
    s = f.useState(),
    u = H(s, 2),
    c = u[0],
    d = u[1],
    v = f.useMemo(
      function () {
        return y0(c);
      },
      [c]
    ),
    g = f.useRef(v);
  g.current = v;
  var y = f.useContext(aa),
    S = l || y,
    b = S && S._init,
    h = Mt(r),
    p = f.useRef(h);
  return (
    (p.current = h),
    f.useEffect(
      function () {
        if (b) {
          var m = S.getFieldsValue,
            w = S.getInternalHooks,
            C = w(Ko),
            E = C.registerWatch,
            x = function (j, L) {
              var D = a.preserve ? L : j;
              return typeof r == "function" ? r(D) : $r(D, p.current);
            },
            R = E(function (_, j) {
              var L = x(_, j),
                D = y0(L);
              g.current !== D && ((g.current = D), d(L));
            }),
            P = x(m(), m(!0));
          return c !== P && d(P), R;
        }
      },
      [b]
    ),
    c
  );
}
var k_ = f.forwardRef(L_),
  Yl = k_;
Yl.FormProvider = j_;
Yl.Field = Sw;
Yl.List = __;
Yl.useForm = ww;
Yl.useWatch = D_;
const Yr = f.createContext({}),
  B_ = (e) => {
    let { children: t, status: n, override: r } = e;
    const o = f.useContext(Yr),
      i = f.useMemo(() => {
        const a = Object.assign({}, o);
        return (
          r && delete a.isFormItemInput,
          n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon),
          a
        );
      }, [n, r, o]);
    return f.createElement(Yr.Provider, { value: i }, t);
  },
  H_ = f.createContext(void 0),
  S0 = (e) => {
    const { space: t, form: n, children: r } = e;
    if (r == null) return null;
    let o = r;
    return (
      n && (o = ne.createElement(B_, { override: !0, status: !0 }, o)),
      t && (o = ne.createElement(aM, null, o)),
      o
    );
  },
  V_ = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  W_ = (e) => ({ animationDuration: e, animationFillMode: "both" }),
  Cw = function (e, t, n, r) {
    const i = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? "&"
      : "";
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, V_(r)), {
        animationPlayState: "paused",
      }),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, W_(r)), {
        animationPlayState: "paused",
      }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: "running" },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: "running",
        pointerEvents: "none",
      },
    };
  },
  U_ = new vn("antMoveDownIn", {
    "0%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  K_ = new vn("antMoveDownOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, 100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  G_ = new vn("antMoveLeftIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  q_ = new vn("antMoveLeftOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(-100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  X_ = new vn("antMoveRightIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Q_ = new vn("antMoveRightOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(100%, 0, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  Y_ = new vn("antMoveUpIn", {
    "0%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
  }),
  Z_ = new vn("antMoveUpOut", {
    "0%": {
      transform: "translate3d(0, 0, 0)",
      transformOrigin: "0 0",
      opacity: 1,
    },
    "100%": {
      transform: "translate3d(0, -100%, 0)",
      transformOrigin: "0 0",
      opacity: 0,
    },
  }),
  J_ = {
    "move-up": { inKeyframes: Y_, outKeyframes: Z_ },
    "move-down": { inKeyframes: U_, outKeyframes: K_ },
    "move-left": { inKeyframes: G_, outKeyframes: q_ },
    "move-right": { inKeyframes: X_, outKeyframes: Q_ },
  },
  b0 = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = J_[t];
    return [
      Cw(r, o, i, e.motionDurationMid),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e.motionEaseOutCirc },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  },
  xw = new vn("antSlideUpIn", {
    "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  Ew = new vn("antSlideUpOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  Ow = new vn("antSlideDownIn", {
    "0%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
    "100%": {
      transform: "scaleY(1)",
      transformOrigin: "100% 100%",
      opacity: 1,
    },
  }),
  Rw = new vn("antSlideDownOut", {
    "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 },
    "100%": {
      transform: "scaleY(0.8)",
      transformOrigin: "100% 100%",
      opacity: 0,
    },
  }),
  eA = new vn("antSlideLeftIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
  }),
  tA = new vn("antSlideLeftOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 },
    "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 },
  }),
  nA = new vn("antSlideRightIn", {
    "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 },
    "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
  }),
  rA = new vn("antSlideRightOut", {
    "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 },
    "100%": {
      transform: "scaleX(0.8)",
      transformOrigin: "100% 0%",
      opacity: 0,
    },
  }),
  oA = {
    "slide-up": { inKeyframes: xw, outKeyframes: Ew },
    "slide-down": { inKeyframes: Ow, outKeyframes: Rw },
    "slide-left": { inKeyframes: eA, outKeyframes: tA },
    "slide-right": { inKeyframes: nA, outKeyframes: rA },
  },
  w0 = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = oA[t];
    return [
      Cw(r, o, i, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: "scale(0)",
          transformOrigin: "0% 0%",
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          "&-prepare": { transform: "scale(1)" },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  };
function iA(e) {
  return (t) =>
    f.createElement(
      pa,
      { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
      f.createElement(e, Object.assign({}, t))
    );
}
const aA = (e, t, n, r) =>
    iA((i) => {
      const { prefixCls: a, style: l } = i,
        s = f.useRef(null),
        [u, c] = f.useState(0),
        [d, v] = f.useState(0),
        [g, y] = ai(!1, { value: i.open }),
        { getPrefixCls: S } = f.useContext(Dt),
        b = S("select", a);
      f.useEffect(() => {
        if ((y(!0), typeof ResizeObserver < "u")) {
          const m = new ResizeObserver((C) => {
              const E = C[0].target;
              c(E.offsetHeight + 8), v(E.offsetWidth);
            }),
            w = setInterval(() => {
              var C;
              const E = `.${b}-dropdown`,
                x =
                  (C = s.current) === null || C === void 0
                    ? void 0
                    : C.querySelector(E);
              x && (clearInterval(w), m.observe(x));
            }, 10);
          return () => {
            clearInterval(w), m.disconnect();
          };
        }
      }, []);
      let h = Object.assign(Object.assign({}, i), {
        style: Object.assign(Object.assign({}, l), { margin: 0 }),
        open: g,
        visible: g,
        getPopupContainer: () => s.current,
      });
      const p = { paddingBottom: u, position: "relative", minWidth: d };
      return f.createElement(
        "div",
        { ref: s, style: p },
        f.createElement(e, Object.assign({}, h))
      );
    }),
  Pw = function () {
    if (typeof navigator > "u" || typeof window > "u") return !1;
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4)
      )
    );
  };
var Ac = function (t) {
    var n = t.className,
      r = t.customizeIcon,
      o = t.customizeIconProps,
      i = t.children,
      a = t.onMouseDown,
      l = t.onClick,
      s = typeof r == "function" ? r(o) : r;
    return f.createElement(
      "span",
      {
        className: n,
        onMouseDown: function (c) {
          c.preventDefault(), a == null || a(c);
        },
        style: { userSelect: "none", WebkitUserSelect: "none" },
        unselectable: "on",
        onClick: l,
        "aria-hidden": !0,
      },
      s !== void 0
        ? s
        : f.createElement(
            "span",
            {
              className: me(
                n.split(/\s+/).map(function (u) {
                  return "".concat(u, "-icon");
                })
              ),
            },
            i
          )
    );
  },
  lA = function (t, n, r, o, i) {
    var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1,
      l = arguments.length > 6 ? arguments[6] : void 0,
      s = arguments.length > 7 ? arguments[7] : void 0,
      u = ne.useMemo(
        function () {
          if (Ie(o) === "object") return o.clearIcon;
          if (i) return i;
        },
        [o, i]
      ),
      c = ne.useMemo(
        function () {
          return !!(
            !a &&
            o &&
            (r.length || l) &&
            !(s === "combobox" && l === "")
          );
        },
        [o, a, r.length, l, s]
      );
    return {
      allowClear: c,
      clearIcon: ne.createElement(
        Ac,
        { className: "".concat(t, "-clear"), onMouseDown: n, customizeIcon: u },
        "×"
      ),
    };
  },
  Iw = f.createContext(null);
function sA() {
  return f.useContext(Iw);
}
function uA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    t = f.useState(!1),
    n = H(t, 2),
    r = n[0],
    o = n[1],
    i = f.useRef(null),
    a = function () {
      window.clearTimeout(i.current);
    };
  f.useEffect(function () {
    return a;
  }, []);
  var l = function (u, c) {
    a(),
      (i.current = window.setTimeout(function () {
        o(u), c && c();
      }, e));
  };
  return [r, l, a];
}
function $w() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    t = f.useRef(null),
    n = f.useRef(null);
  f.useEffect(function () {
    return function () {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(o) {
    (o || t.current === null) && (t.current = o),
      window.clearTimeout(n.current),
      (n.current = window.setTimeout(function () {
        t.current = null;
      }, e));
  }
  return [
    function () {
      return t.current;
    },
    r,
  ];
}
function cA(e, t, n, r) {
  var o = f.useRef(null);
  (o.current = { open: t, triggerOpen: n, customizedTrigger: r }),
    f.useEffect(function () {
      function i(a) {
        var l;
        if (
          !((l = o.current) !== null && l !== void 0 && l.customizedTrigger)
        ) {
          var s = a.target;
          s.shadowRoot && a.composed && (s = a.composedPath()[0] || s),
            o.current.open &&
              e()
                .filter(function (u) {
                  return u;
                })
                .every(function (u) {
                  return !u.contains(s) && u !== s;
                }) &&
              o.current.triggerOpen(!1);
        }
      }
      return (
        window.addEventListener("mousedown", i),
        function () {
          return window.removeEventListener("mousedown", i);
        }
      );
    }, []);
}
function fA(e) {
  return ![
    te.ESC,
    te.SHIFT,
    te.BACKSPACE,
    te.TAB,
    te.WIN_KEY,
    te.ALT,
    te.META,
    te.WIN_KEY_RIGHT,
    te.CTRL,
    te.SEMICOLON,
    te.EQUALS,
    te.CAPS_LOCK,
    te.CONTEXT_MENU,
    te.F1,
    te.F2,
    te.F3,
    te.F4,
    te.F5,
    te.F6,
    te.F7,
    te.F8,
    te.F9,
    te.F10,
    te.F11,
    te.F12,
  ].includes(e);
}
var dA = [
    "prefixCls",
    "invalidate",
    "item",
    "renderItem",
    "responsive",
    "responsiveDisabled",
    "registerSize",
    "itemKey",
    "className",
    "style",
    "children",
    "display",
    "order",
    "component",
  ],
  bi = void 0;
function vA(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    o = e.item,
    i = e.renderItem,
    a = e.responsive,
    l = e.responsiveDisabled,
    s = e.registerSize,
    u = e.itemKey,
    c = e.className,
    d = e.style,
    v = e.children,
    g = e.display,
    y = e.order,
    S = e.component,
    b = S === void 0 ? "div" : S,
    h = yt(e, dA),
    p = a && !g;
  function m(R) {
    s(u, R);
  }
  f.useEffect(function () {
    return function () {
      m(null);
    };
  }, []);
  var w = i && o !== bi ? i(o) : v,
    C;
  r ||
    (C = {
      opacity: p ? 0 : 1,
      height: p ? 0 : bi,
      overflowY: p ? "hidden" : bi,
      order: a ? y : bi,
      pointerEvents: p ? "none" : bi,
      position: p ? "absolute" : bi,
    });
  var E = {};
  p && (E["aria-hidden"] = !0);
  var x = f.createElement(
    b,
    We({ className: me(!r && n, c), style: F(F({}, C), d) }, E, h, { ref: t }),
    w
  );
  return (
    a &&
      (x = f.createElement(
        _o,
        {
          onResize: function (P) {
            var _ = P.offsetWidth;
            m(_);
          },
          disabled: l,
        },
        x
      )),
    x
  );
}
var el = f.forwardRef(vA);
el.displayName = "Item";
function pA(e) {
  if (typeof MessageChannel > "u") At(e);
  else {
    var t = new MessageChannel();
    (t.port1.onmessage = function () {
      return e();
    }),
      t.port2.postMessage(void 0);
  }
}
function mA() {
  var e = f.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        pA(function () {
          ni.unstable_batchedUpdates(function () {
            e.current.forEach(function (o) {
              o();
            }),
              (e.current = null);
          });
        })),
        e.current.push(r);
    };
  return t;
}
function Ta(e, t) {
  var n = f.useState(t),
    r = H(n, 2),
    o = r[0],
    i = r[1],
    a = Xt(function (l) {
      e(function () {
        i(l);
      });
    });
  return [o, a];
}
var Bu = ne.createContext(null),
  hA = ["component"],
  gA = ["className"],
  yA = ["className"],
  SA = function (t, n) {
    var r = f.useContext(Bu);
    if (!r) {
      var o = t.component,
        i = o === void 0 ? "div" : o,
        a = yt(t, hA);
      return f.createElement(i, We({}, a, { ref: n }));
    }
    var l = r.className,
      s = yt(r, gA),
      u = t.className,
      c = yt(t, yA);
    return f.createElement(
      Bu.Provider,
      { value: null },
      f.createElement(el, We({ ref: n, className: me(l, u) }, s, c))
    );
  },
  Tw = f.forwardRef(SA);
Tw.displayName = "RawItem";
var bA = [
    "prefixCls",
    "data",
    "renderItem",
    "renderRawItem",
    "itemKey",
    "itemWidth",
    "ssr",
    "style",
    "className",
    "maxCount",
    "renderRest",
    "renderRawRest",
    "suffix",
    "component",
    "itemComponent",
    "onVisibleChange",
  ],
  Mw = "responsive",
  _w = "invalidate";
function wA(e) {
  return "+ ".concat(e.length, " ...");
}
function CA(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? "rc-overflow" : n,
    o = e.data,
    i = o === void 0 ? [] : o,
    a = e.renderItem,
    l = e.renderRawItem,
    s = e.itemKey,
    u = e.itemWidth,
    c = u === void 0 ? 10 : u,
    d = e.ssr,
    v = e.style,
    g = e.className,
    y = e.maxCount,
    S = e.renderRest,
    b = e.renderRawRest,
    h = e.suffix,
    p = e.component,
    m = p === void 0 ? "div" : p,
    w = e.itemComponent,
    C = e.onVisibleChange,
    E = yt(e, bA),
    x = d === "full",
    R = mA(),
    P = Ta(R, null),
    _ = H(P, 2),
    j = _[0],
    L = _[1],
    D = j || 0,
    z = Ta(R, new Map()),
    V = H(z, 2),
    T = V[0],
    I = V[1],
    O = Ta(R, 0),
    M = H(O, 2),
    A = M[0],
    $ = M[1],
    k = Ta(R, 0),
    B = H(k, 2),
    W = B[0],
    K = B[1],
    se = Ta(R, 0),
    q = H(se, 2),
    oe = q[0],
    Ce = q[1],
    G = f.useState(null),
    U = H(G, 2),
    Z = U[0],
    le = U[1],
    X = f.useState(null),
    de = H(X, 2),
    re = de[0],
    ge = de[1],
    Se = f.useMemo(
      function () {
        return re === null && x ? Number.MAX_SAFE_INTEGER : re || 0;
      },
      [re, j]
    ),
    ce = f.useState(!1),
    Oe = H(ce, 2),
    xe = Oe[0],
    Le = Oe[1],
    fe = "".concat(r, "-item"),
    Y = Math.max(A, W),
    Re = y === Mw,
    ve = i.length && Re,
    He = y === _w,
    Fe = ve || (typeof y == "number" && i.length > y),
    Ae = f.useMemo(
      function () {
        var Pe = i;
        return (
          ve
            ? j === null && x
              ? (Pe = i)
              : (Pe = i.slice(0, Math.min(i.length, D / c)))
            : typeof y == "number" && (Pe = i.slice(0, y)),
          Pe
        );
      },
      [i, c, j, y, ve]
    ),
    De = f.useMemo(
      function () {
        return ve ? i.slice(Se + 1) : i.slice(Ae.length);
      },
      [i, Ae, ve, Se]
    ),
    ct = f.useCallback(
      function (Pe, ie) {
        var Ke;
        return typeof s == "function"
          ? s(Pe)
          : (Ke = s && (Pe == null ? void 0 : Pe[s])) !== null && Ke !== void 0
          ? Ke
          : ie;
      },
      [s]
    ),
    Je = f.useCallback(
      a ||
        function (Pe) {
          return Pe;
        },
      [a]
    );
  function $e(Pe, ie, Ke) {
    (re === Pe && (ie === void 0 || ie === Z)) ||
      (ge(Pe),
      Ke || (Le(Pe < i.length - 1), C == null || C(Pe)),
      ie !== void 0 && le(ie));
  }
  function Te(Pe, ie) {
    L(ie.clientWidth);
  }
  function dt(Pe, ie) {
    I(function (Ke) {
      var ot = new Map(Ke);
      return ie === null ? ot.delete(Pe) : ot.set(Pe, ie), ot;
    });
  }
  function et(Pe, ie) {
    K(ie), $(W);
  }
  function rt(Pe, ie) {
    Ce(ie);
  }
  function Ze(Pe) {
    return T.get(ct(Ae[Pe], Pe));
  }
  bt(
    function () {
      if (D && typeof Y == "number" && Ae) {
        var Pe = oe,
          ie = Ae.length,
          Ke = ie - 1;
        if (!ie) {
          $e(0, null);
          return;
        }
        for (var ot = 0; ot < ie; ot += 1) {
          var J = Ze(ot);
          if ((x && (J = J || 0), J === void 0)) {
            $e(ot - 1, void 0, !0);
            break;
          }
          if (
            ((Pe += J),
            (Ke === 0 && Pe <= D) || (ot === Ke - 1 && Pe + Ze(Ke) <= D))
          ) {
            $e(Ke, null);
            break;
          } else if (Pe + Y > D) {
            $e(ot - 1, Pe - J - oe + W);
            break;
          }
        }
        h && Ze(0) + oe > D && le(null);
      }
    },
    [D, T, W, oe, ct, Ae]
  );
  var Nt = xe && !!De.length,
    st = {};
  Z !== null && ve && (st = { position: "absolute", left: Z, top: 0 });
  var vt = { prefixCls: fe, responsive: ve, component: w, invalidate: He },
    Ut = l
      ? function (Pe, ie) {
          var Ke = ct(Pe, ie);
          return f.createElement(
            Bu.Provider,
            {
              key: Ke,
              value: F(
                F({}, vt),
                {},
                {
                  order: ie,
                  item: Pe,
                  itemKey: Ke,
                  registerSize: dt,
                  display: ie <= Se,
                }
              ),
            },
            l(Pe, ie)
          );
        }
      : function (Pe, ie) {
          var Ke = ct(Pe, ie);
          return f.createElement(
            el,
            We({}, vt, {
              order: ie,
              key: Ke,
              item: Pe,
              renderItem: Je,
              itemKey: Ke,
              registerSize: dt,
              display: ie <= Se,
            })
          );
        },
    pt,
    Ge = {
      order: Nt ? Se : Number.MAX_SAFE_INTEGER,
      className: "".concat(fe, "-rest"),
      registerSize: et,
      display: Nt,
    };
  if (b)
    b &&
      (pt = f.createElement(Bu.Provider, { value: F(F({}, vt), Ge) }, b(De)));
  else {
    var je = S || wA;
    pt = f.createElement(
      el,
      We({}, vt, Ge),
      typeof je == "function" ? je(De) : je
    );
  }
  var Ve = f.createElement(
    m,
    We({ className: me(!He && r, g), style: v, ref: t }, E),
    Ae.map(Ut),
    Fe ? pt : null,
    h &&
      f.createElement(
        el,
        We({}, vt, {
          responsive: Re,
          responsiveDisabled: !ve,
          order: Se,
          className: "".concat(fe, "-suffix"),
          registerSize: rt,
          display: !0,
          style: st,
        }),
        h
      )
  );
  return (
    Re && (Ve = f.createElement(_o, { onResize: Te, disabled: !ve }, Ve)), Ve
  );
}
var Zl = f.forwardRef(CA);
Zl.displayName = "Overflow";
Zl.Item = Tw;
Zl.RESPONSIVE = Mw;
Zl.INVALIDATE = _w;
var xA = function (t, n) {
    var r,
      o = t.prefixCls,
      i = t.id,
      a = t.inputElement,
      l = t.disabled,
      s = t.tabIndex,
      u = t.autoFocus,
      c = t.autoComplete,
      d = t.editable,
      v = t.activeDescendantId,
      g = t.value,
      y = t.maxLength,
      S = t.onKeyDown,
      b = t.onMouseDown,
      h = t.onChange,
      p = t.onPaste,
      m = t.onCompositionStart,
      w = t.onCompositionEnd,
      C = t.open,
      E = t.attrs,
      x = a || f.createElement("input", null),
      R = x,
      P = R.ref,
      _ = R.props,
      j = _.onKeyDown,
      L = _.onChange,
      D = _.onMouseDown,
      z = _.onCompositionStart,
      V = _.onCompositionEnd,
      T = _.style;
    return (
      "maxLength" in x.props,
      (x = f.cloneElement(
        x,
        F(
          F(
            F({ type: "search" }, _),
            {},
            {
              id: i,
              ref: Jr(n, P),
              disabled: l,
              tabIndex: s,
              autoComplete: c || "off",
              autoFocus: u,
              className: me(
                "".concat(o, "-selection-search-input"),
                (r = x) === null ||
                  r === void 0 ||
                  (r = r.props) === null ||
                  r === void 0
                  ? void 0
                  : r.className
              ),
              role: "combobox",
              "aria-expanded": C || !1,
              "aria-haspopup": "listbox",
              "aria-owns": "".concat(i, "_list"),
              "aria-autocomplete": "list",
              "aria-controls": "".concat(i, "_list"),
              "aria-activedescendant": C ? v : void 0,
            },
            E
          ),
          {},
          {
            value: d ? g : "",
            maxLength: y,
            readOnly: !d,
            unselectable: d ? null : "on",
            style: F(F({}, T), {}, { opacity: d ? null : 0 }),
            onKeyDown: function (O) {
              S(O), j && j(O);
            },
            onMouseDown: function (O) {
              b(O), D && D(O);
            },
            onChange: function (O) {
              h(O), L && L(O);
            },
            onCompositionStart: function (O) {
              m(O), z && z(O);
            },
            onCompositionEnd: function (O) {
              w(O), V && V(O);
            },
            onPaste: p,
          }
        )
      )),
      x
    );
  },
  Aw = f.forwardRef(xA);
function Nw(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var EA =
    typeof window < "u" && window.document && window.document.documentElement,
  OA = EA;
function RA(e) {
  return e != null;
}
function PA(e) {
  return !e && e !== 0;
}
function C0(e) {
  return ["string", "number"].includes(Ie(e));
}
function Fw(e) {
  var t = void 0;
  return (
    e &&
      (C0(e.title)
        ? (t = e.title.toString())
        : C0(e.label) && (t = e.label.toString())),
    t
  );
}
function IA(e, t) {
  OA ? f.useLayoutEffect(e, t) : f.useEffect(e, t);
}
function $A(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var x0 = function (t) {
    t.preventDefault(), t.stopPropagation();
  },
  TA = function (t) {
    var n = t.id,
      r = t.prefixCls,
      o = t.values,
      i = t.open,
      a = t.searchValue,
      l = t.autoClearSearchValue,
      s = t.inputRef,
      u = t.placeholder,
      c = t.disabled,
      d = t.mode,
      v = t.showSearch,
      g = t.autoFocus,
      y = t.autoComplete,
      S = t.activeDescendantId,
      b = t.tabIndex,
      h = t.removeIcon,
      p = t.maxTagCount,
      m = t.maxTagTextLength,
      w = t.maxTagPlaceholder,
      C =
        w === void 0
          ? function (le) {
              return "+ ".concat(le.length, " ...");
            }
          : w,
      E = t.tagRender,
      x = t.onToggleOpen,
      R = t.onRemove,
      P = t.onInputChange,
      _ = t.onInputPaste,
      j = t.onInputKeyDown,
      L = t.onInputMouseDown,
      D = t.onInputCompositionStart,
      z = t.onInputCompositionEnd,
      V = f.useRef(null),
      T = f.useState(0),
      I = H(T, 2),
      O = I[0],
      M = I[1],
      A = f.useState(!1),
      $ = H(A, 2),
      k = $[0],
      B = $[1],
      W = "".concat(r, "-selection"),
      K = i || (d === "multiple" && l === !1) || d === "tags" ? a : "",
      se = d === "tags" || (d === "multiple" && l === !1) || (v && (i || k));
    IA(
      function () {
        M(V.current.scrollWidth);
      },
      [K]
    );
    var q = function (X, de, re, ge, Se) {
        return f.createElement(
          "span",
          {
            title: Fw(X),
            className: me(
              "".concat(W, "-item"),
              N({}, "".concat(W, "-item-disabled"), re)
            ),
          },
          f.createElement(
            "span",
            { className: "".concat(W, "-item-content") },
            de
          ),
          ge &&
            f.createElement(
              Ac,
              {
                className: "".concat(W, "-item-remove"),
                onMouseDown: x0,
                onClick: Se,
                customizeIcon: h,
              },
              "×"
            )
        );
      },
      oe = function (X, de, re, ge, Se, ce) {
        var Oe = function (Le) {
          x0(Le), x(!i);
        };
        return f.createElement(
          "span",
          { onMouseDown: Oe },
          E({
            label: de,
            value: X,
            disabled: re,
            closable: ge,
            onClose: Se,
            isMaxTag: !!ce,
          })
        );
      },
      Ce = function (X) {
        var de = X.disabled,
          re = X.label,
          ge = X.value,
          Se = !c && !de,
          ce = re;
        if (
          typeof m == "number" &&
          (typeof re == "string" || typeof re == "number")
        ) {
          var Oe = String(ce);
          Oe.length > m && (ce = "".concat(Oe.slice(0, m), "..."));
        }
        var xe = function (fe) {
          fe && fe.stopPropagation(), R(X);
        };
        return typeof E == "function"
          ? oe(ge, ce, de, Se, xe)
          : q(X, ce, de, Se, xe);
      },
      G = function (X) {
        var de = typeof C == "function" ? C(X) : C;
        return typeof E == "function"
          ? oe(void 0, de, !1, !1, void 0, !0)
          : q({ title: de }, de, !1);
      },
      U = f.createElement(
        "div",
        {
          className: "".concat(W, "-search"),
          style: { width: O },
          onFocus: function () {
            B(!0);
          },
          onBlur: function () {
            B(!1);
          },
        },
        f.createElement(Aw, {
          ref: s,
          open: i,
          prefixCls: r,
          id: n,
          inputElement: null,
          disabled: c,
          autoFocus: g,
          autoComplete: y,
          editable: se,
          activeDescendantId: S,
          value: K,
          onKeyDown: j,
          onMouseDown: L,
          onChange: P,
          onPaste: _,
          onCompositionStart: D,
          onCompositionEnd: z,
          tabIndex: b,
          attrs: Al(t, !0),
        }),
        f.createElement(
          "span",
          {
            ref: V,
            className: "".concat(W, "-search-mirror"),
            "aria-hidden": !0,
          },
          K,
          " "
        )
      ),
      Z = f.createElement(Zl, {
        prefixCls: "".concat(W, "-overflow"),
        data: o,
        renderItem: Ce,
        renderRest: G,
        suffix: U,
        itemKey: $A,
        maxCount: p,
      });
    return f.createElement(
      f.Fragment,
      null,
      Z,
      !o.length &&
        !K &&
        f.createElement("span", { className: "".concat(W, "-placeholder") }, u)
    );
  },
  MA = function (t) {
    var n = t.inputElement,
      r = t.prefixCls,
      o = t.id,
      i = t.inputRef,
      a = t.disabled,
      l = t.autoFocus,
      s = t.autoComplete,
      u = t.activeDescendantId,
      c = t.mode,
      d = t.open,
      v = t.values,
      g = t.placeholder,
      y = t.tabIndex,
      S = t.showSearch,
      b = t.searchValue,
      h = t.activeValue,
      p = t.maxLength,
      m = t.onInputKeyDown,
      w = t.onInputMouseDown,
      C = t.onInputChange,
      E = t.onInputPaste,
      x = t.onInputCompositionStart,
      R = t.onInputCompositionEnd,
      P = t.title,
      _ = f.useState(!1),
      j = H(_, 2),
      L = j[0],
      D = j[1],
      z = c === "combobox",
      V = z || S,
      T = v[0],
      I = b || "";
    z && h && !L && (I = h),
      f.useEffect(
        function () {
          z && D(!1);
        },
        [z, h]
      );
    var O = c !== "combobox" && !d && !S ? !1 : !!I,
      M = P === void 0 ? Fw(T) : P,
      A = f.useMemo(
        function () {
          return T
            ? null
            : f.createElement(
                "span",
                {
                  className: "".concat(r, "-selection-placeholder"),
                  style: O ? { visibility: "hidden" } : void 0,
                },
                g
              );
        },
        [T, O, g, r]
      );
    return f.createElement(
      f.Fragment,
      null,
      f.createElement(
        "span",
        { className: "".concat(r, "-selection-search") },
        f.createElement(Aw, {
          ref: i,
          prefixCls: r,
          id: o,
          open: d,
          inputElement: n,
          disabled: a,
          autoFocus: l,
          autoComplete: s,
          editable: V,
          activeDescendantId: u,
          value: I,
          onKeyDown: m,
          onMouseDown: w,
          onChange: function (k) {
            D(!0), C(k);
          },
          onPaste: E,
          onCompositionStart: x,
          onCompositionEnd: R,
          tabIndex: y,
          attrs: Al(t, !0),
          maxLength: z ? p : void 0,
        })
      ),
      !z && T
        ? f.createElement(
            "span",
            {
              className: "".concat(r, "-selection-item"),
              title: M,
              style: O ? { visibility: "hidden" } : void 0,
            },
            T.label
          )
        : null,
      A
    );
  },
  _A = function (t, n) {
    var r = f.useRef(null),
      o = f.useRef(!1),
      i = t.prefixCls,
      a = t.open,
      l = t.mode,
      s = t.showSearch,
      u = t.tokenWithEnter,
      c = t.disabled,
      d = t.autoClearSearchValue,
      v = t.onSearch,
      g = t.onSearchSubmit,
      y = t.onToggleOpen,
      S = t.onInputKeyDown,
      b = t.domRef;
    f.useImperativeHandle(n, function () {
      return {
        focus: function (O) {
          r.current.focus(O);
        },
        blur: function () {
          r.current.blur();
        },
      };
    });
    var h = $w(0),
      p = H(h, 2),
      m = p[0],
      w = p[1],
      C = function (O) {
        var M = O.which;
        (M === te.UP || M === te.DOWN) && O.preventDefault(),
          S && S(O),
          M === te.ENTER &&
            l === "tags" &&
            !o.current &&
            !a &&
            (g == null || g(O.target.value)),
          fA(M) && y(!0);
      },
      E = function () {
        w(!0);
      },
      x = f.useRef(null),
      R = function (O) {
        v(O, !0, o.current) !== !1 && y(!0);
      },
      P = function () {
        o.current = !0;
      },
      _ = function (O) {
        (o.current = !1), l !== "combobox" && R(O.target.value);
      },
      j = function (O) {
        var M = O.target.value;
        if (u && x.current && /[\r\n]/.test(x.current)) {
          var A = x.current
            .replace(/[\r\n]+$/, "")
            .replace(/\r\n/g, " ")
            .replace(/[\r\n]/g, " ");
          M = M.replace(A, x.current);
        }
        (x.current = null), R(M);
      },
      L = function (O) {
        var M = O.clipboardData,
          A = M == null ? void 0 : M.getData("text");
        x.current = A || "";
      },
      D = function (O) {
        var M = O.target;
        if (M !== r.current) {
          var A = document.body.style.msTouchAction !== void 0;
          A
            ? setTimeout(function () {
                r.current.focus();
              })
            : r.current.focus();
        }
      },
      z = function (O) {
        var M = m();
        O.target !== r.current &&
          !M &&
          !(l === "combobox" && c) &&
          O.preventDefault(),
          ((l !== "combobox" && (!s || !M)) || !a) &&
            (a && d !== !1 && v("", !0, !1), y());
      },
      V = {
        inputRef: r,
        onInputKeyDown: C,
        onInputMouseDown: E,
        onInputChange: j,
        onInputPaste: L,
        onInputCompositionStart: P,
        onInputCompositionEnd: _,
      },
      T =
        l === "multiple" || l === "tags"
          ? f.createElement(TA, We({}, t, V))
          : f.createElement(MA, We({}, t, V));
    return f.createElement(
      "div",
      {
        ref: b,
        className: "".concat(i, "-selector"),
        onClick: D,
        onMouseDown: z,
      },
      T
    );
  },
  AA = f.forwardRef(_A);
function NA(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    l = i.content,
    s = o.x,
    u = s === void 0 ? 0 : s,
    c = o.y,
    d = c === void 0 ? 0 : c,
    v = f.useRef();
  if (!n || !n.points) return null;
  var g = { position: "absolute" };
  if (n.autoArrow !== !1) {
    var y = n.points[0],
      S = n.points[1],
      b = y[0],
      h = y[1],
      p = S[0],
      m = S[1];
    b === p || !["t", "b"].includes(b)
      ? (g.top = d)
      : b === "t"
      ? (g.top = 0)
      : (g.bottom = 0),
      h === m || !["l", "r"].includes(h)
        ? (g.left = u)
        : h === "l"
        ? (g.left = 0)
        : (g.right = 0);
  }
  return f.createElement(
    "div",
    { ref: v, className: me("".concat(t, "-arrow"), a), style: g },
    l
  );
}
function FA(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o
    ? f.createElement(
        Gl,
        We({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var l = a.className;
          return f.createElement("div", {
            style: { zIndex: r },
            className: me("".concat(t, "-mask"), l),
          });
        }
      )
    : null;
}
var jA = f.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  zA = f.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      l = e.onVisibleChanged,
      s = e.open,
      u = e.keepDom,
      c = e.fresh,
      d = e.onClick,
      v = e.mask,
      g = e.arrow,
      y = e.arrowPos,
      S = e.align,
      b = e.motion,
      h = e.maskMotion,
      p = e.forceRender,
      m = e.getPopupContainer,
      w = e.autoDestroy,
      C = e.portal,
      E = e.zIndex,
      x = e.onMouseEnter,
      R = e.onMouseLeave,
      P = e.onPointerEnter,
      _ = e.ready,
      j = e.offsetX,
      L = e.offsetY,
      D = e.offsetR,
      z = e.offsetB,
      V = e.onAlign,
      T = e.onPrepare,
      I = e.stretch,
      O = e.targetWidth,
      M = e.targetHeight,
      A = typeof n == "function" ? n() : n,
      $ = s || u,
      k = (m == null ? void 0 : m.length) > 0,
      B = f.useState(!m || !k),
      W = H(B, 2),
      K = W[0],
      se = W[1];
    if (
      (bt(
        function () {
          !K && k && a && se(!0);
        },
        [K, k, a]
      ),
      !K)
    )
      return null;
    var q = "auto",
      oe = { left: "-1000vw", top: "-1000vh", right: q, bottom: q };
    if (_ || !s) {
      var Ce,
        G = S.points,
        U =
          S.dynamicInset ||
          ((Ce = S._experimental) === null || Ce === void 0
            ? void 0
            : Ce.dynamicInset),
        Z = U && G[0][1] === "r",
        le = U && G[0][0] === "b";
      Z ? ((oe.right = D), (oe.left = q)) : ((oe.left = j), (oe.right = q)),
        le ? ((oe.bottom = z), (oe.top = q)) : ((oe.top = L), (oe.bottom = q));
    }
    var X = {};
    return (
      I &&
        (I.includes("height") && M
          ? (X.height = M)
          : I.includes("minHeight") && M && (X.minHeight = M),
        I.includes("width") && O
          ? (X.width = O)
          : I.includes("minWidth") && O && (X.minWidth = O)),
      s || (X.pointerEvents = "none"),
      f.createElement(
        C,
        {
          open: p || $,
          getContainer:
            m &&
            function () {
              return m(a);
            },
          autoDestroy: w,
        },
        f.createElement(FA, {
          prefixCls: o,
          open: s,
          zIndex: E,
          mask: v,
          motion: h,
        }),
        f.createElement(_o, { onResize: V, disabled: !s }, function (de) {
          return f.createElement(
            Gl,
            We(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: p,
                leavedClassName: "".concat(o, "-hidden"),
              },
              b,
              {
                onAppearPrepare: T,
                onEnterPrepare: T,
                visible: s,
                onVisibleChanged: function (ge) {
                  var Se;
                  b == null ||
                    (Se = b.onVisibleChanged) === null ||
                    Se === void 0 ||
                    Se.call(b, ge),
                    l(ge);
                },
              }
            ),
            function (re, ge) {
              var Se = re.className,
                ce = re.style,
                Oe = me(o, Se, r);
              return f.createElement(
                "div",
                {
                  ref: Jr(de, t, ge),
                  className: Oe,
                  style: F(
                    F(
                      F(
                        F(
                          {
                            "--arrow-x": "".concat(y.x || 0, "px"),
                            "--arrow-y": "".concat(y.y || 0, "px"),
                          },
                          oe
                        ),
                        X
                      ),
                      ce
                    ),
                    {},
                    { boxSizing: "border-box", zIndex: E },
                    i
                  ),
                  onMouseEnter: x,
                  onMouseLeave: R,
                  onPointerEnter: P,
                  onClick: d,
                },
                g &&
                  f.createElement(NA, {
                    prefixCls: o,
                    arrow: g,
                    arrowPos: y,
                    align: S,
                  }),
                f.createElement(jA, { cache: !s && !c }, A)
              );
            }
          );
        })
      )
    );
  }),
  LA = f.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = Vl(n),
      i = f.useCallback(
        function (l) {
          nm(t, r ? r(l) : l);
        },
        [r]
      ),
      a = Oc(i, n.ref);
    return o ? f.cloneElement(n, { ref: a }) : n;
  }),
  E0 = f.createContext(null);
function O0(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function DA(e, t, n, r) {
  return f.useMemo(
    function () {
      var o = O0(n ?? t),
        i = O0(r ?? t),
        a = new Set(o),
        l = new Set(i);
      return (
        e &&
          (a.has("hover") && (a.delete("hover"), a.add("click")),
          l.has("hover") && (l.delete("hover"), l.add("click"))),
        [a, l]
      );
    },
    [e, t, n, r]
  );
}
function kA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function BA(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var l,
      s = i[a];
    if (kA((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
      return "".concat(t, "-placement-").concat(s);
  }
  return "";
}
function R0(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: "".concat(e, "-").concat(n) }
      : r
      ? { motionName: r }
      : null)
  );
}
function Jl(e) {
  return e.ownerDocument.defaultView;
}
function Xv(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ["hidden", "scroll", "clip", "auto"];
    n;

  ) {
    var o = Jl(n).getComputedStyle(n),
      i = o.overflowX,
      a = o.overflowY,
      l = o.overflow;
    [i, a, l].some(function (s) {
      return r.includes(s);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function Fl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Ma(e) {
  return Fl(parseFloat(e), 0);
}
function P0(e, t) {
  var n = F({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var o = Jl(r).getComputedStyle(r),
          i = o.overflow,
          a = o.overflowClipMargin,
          l = o.borderTopWidth,
          s = o.borderBottomWidth,
          u = o.borderLeftWidth,
          c = o.borderRightWidth,
          d = r.getBoundingClientRect(),
          v = r.offsetHeight,
          g = r.clientHeight,
          y = r.offsetWidth,
          S = r.clientWidth,
          b = Ma(l),
          h = Ma(s),
          p = Ma(u),
          m = Ma(c),
          w = Fl(Math.round((d.width / y) * 1e3) / 1e3),
          C = Fl(Math.round((d.height / v) * 1e3) / 1e3),
          E = (y - S - p - m) * w,
          x = (v - g - b - h) * C,
          R = b * C,
          P = h * C,
          _ = p * w,
          j = m * w,
          L = 0,
          D = 0;
        if (i === "clip") {
          var z = Ma(a);
          (L = z * w), (D = z * C);
        }
        var V = d.x + _ - L,
          T = d.y + R - D,
          I = V + d.width + 2 * L - _ - j - E,
          O = T + d.height + 2 * D - R - P - x;
        (n.left = Math.max(n.left, V)),
          (n.top = Math.max(n.top, T)),
          (n.right = Math.min(n.right, I)),
          (n.bottom = Math.min(n.bottom, O));
      }
    }),
    n
  );
}
function I0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = "".concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function $0(e, t) {
  var n = t || [],
    r = H(n, 2),
    o = r[0],
    i = r[1];
  return [I0(e.width, o), I0(e.height, i)];
}
function T0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function wi(e, t) {
  var n = t[0],
    r = t[1],
    o,
    i;
  return (
    n === "t"
      ? (i = e.y)
      : n === "b"
      ? (i = e.y + e.height)
      : (i = e.y + e.height / 2),
    r === "l"
      ? (o = e.x)
      : r === "r"
      ? (o = e.x + e.width)
      : (o = e.x + e.width / 2),
    { x: o, y: i }
  );
}
function io(e, t) {
  var n = { t: "b", b: "t", l: "r", r: "l" };
  return e
    .map(function (r, o) {
      return o === t ? n[r] || "c" : r;
    })
    .join("");
}
function HA(e, t, n, r, o, i, a) {
  var l = f.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[r] || {},
    }),
    s = H(l, 2),
    u = s[0],
    c = s[1],
    d = f.useRef(0),
    v = f.useMemo(
      function () {
        return t ? Xv(t) : [];
      },
      [t]
    ),
    g = f.useRef({}),
    y = function () {
      g.current = {};
    };
  e || y();
  var S = Xt(function () {
      if (t && n && e) {
        let Gt = function (es, Fr) {
            var jo =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : Oe,
              pi = A.x + es,
              Sa = A.y + Fr,
              jc = pi + Ce,
              zc = Sa + oe,
              Lc = Math.max(pi, jo.left),
              Dc = Math.max(Sa, jo.top),
              ye = Math.min(jc, jo.right),
              _e = Math.min(zc, jo.bottom);
            return Math.max(0, (ye - Lc) * (_e - Dc));
          },
          ya = function () {
            (mt = A.y + je), (Rt = mt + oe), (nt = A.x + Ge), (Ft = nt + Ce);
          };
        var Fo = Gt,
          xm = ya,
          p,
          m,
          w = t,
          C = w.ownerDocument,
          E = Jl(w),
          x = E.getComputedStyle(w),
          R = x.width,
          P = x.height,
          _ = x.position,
          j = w.style.left,
          L = w.style.top,
          D = w.style.right,
          z = w.style.bottom,
          V = w.style.overflow,
          T = F(F({}, o[r]), i),
          I = C.createElement("div");
        (p = w.parentElement) === null || p === void 0 || p.appendChild(I),
          (I.style.left = "".concat(w.offsetLeft, "px")),
          (I.style.top = "".concat(w.offsetTop, "px")),
          (I.style.position = _),
          (I.style.height = "".concat(w.offsetHeight, "px")),
          (I.style.width = "".concat(w.offsetWidth, "px")),
          (w.style.left = "0"),
          (w.style.top = "0"),
          (w.style.right = "auto"),
          (w.style.bottom = "auto"),
          (w.style.overflow = "hidden");
        var O;
        if (Array.isArray(n)) O = { x: n[0], y: n[1], width: 0, height: 0 };
        else {
          var M = n.getBoundingClientRect();
          O = { x: M.x, y: M.y, width: M.width, height: M.height };
        }
        var A = w.getBoundingClientRect(),
          $ = C.documentElement,
          k = $.clientWidth,
          B = $.clientHeight,
          W = $.scrollWidth,
          K = $.scrollHeight,
          se = $.scrollTop,
          q = $.scrollLeft,
          oe = A.height,
          Ce = A.width,
          G = O.height,
          U = O.width,
          Z = { left: 0, top: 0, right: k, bottom: B },
          le = { left: -q, top: -se, right: W - q, bottom: K - se },
          X = T.htmlRegion,
          de = "visible",
          re = "visibleFirst";
        X !== "scroll" && X !== re && (X = de);
        var ge = X === re,
          Se = P0(le, v),
          ce = P0(Z, v),
          Oe = X === de ? ce : Se,
          xe = ge ? ce : Oe;
        (w.style.left = "auto"),
          (w.style.top = "auto"),
          (w.style.right = "0"),
          (w.style.bottom = "0");
        var Le = w.getBoundingClientRect();
        (w.style.left = j),
          (w.style.top = L),
          (w.style.right = D),
          (w.style.bottom = z),
          (w.style.overflow = V),
          (m = w.parentElement) === null || m === void 0 || m.removeChild(I);
        var fe = Fl(Math.round((Ce / parseFloat(R)) * 1e3) / 1e3),
          Y = Fl(Math.round((oe / parseFloat(P)) * 1e3) / 1e3);
        if (fe === 0 || Y === 0 || (Rl(n) && !iw(n))) return;
        var Re = T.offset,
          ve = T.targetOffset,
          He = $0(A, Re),
          Fe = H(He, 2),
          Ae = Fe[0],
          De = Fe[1],
          ct = $0(O, ve),
          Je = H(ct, 2),
          $e = Je[0],
          Te = Je[1];
        (O.x -= $e), (O.y -= Te);
        var dt = T.points || [],
          et = H(dt, 2),
          rt = et[0],
          Ze = et[1],
          Nt = T0(Ze),
          st = T0(rt),
          vt = wi(O, Nt),
          Ut = wi(A, st),
          pt = F({}, T),
          Ge = vt.x - Ut.x + Ae,
          je = vt.y - Ut.y + De,
          Ve = Gt(Ge, je),
          Pe = Gt(Ge, je, ce),
          ie = wi(O, ["t", "l"]),
          Ke = wi(A, ["t", "l"]),
          ot = wi(O, ["b", "r"]),
          J = wi(A, ["b", "r"]),
          ue = T.overflow || {},
          ae = ue.adjustX,
          Ee = ue.adjustY,
          Be = ue.shiftX,
          qe = ue.shiftY,
          Ot = function (Fr) {
            return typeof Fr == "boolean" ? Fr : Fr >= 0;
          },
          mt,
          Rt,
          nt,
          Ft;
        ya();
        var Cn = Ot(Ee),
          Tt = st[0] === Nt[0];
        if (Cn && st[0] === "t" && (Rt > xe.bottom || g.current.bt)) {
          var Yt = je;
          Tt ? (Yt -= oe - G) : (Yt = ie.y - J.y - De);
          var Mn = Gt(Ge, Yt),
            he = Gt(Ge, Yt, ce);
          Mn > Ve || (Mn === Ve && (!ge || he >= Pe))
            ? ((g.current.bt = !0),
              (je = Yt),
              (De = -De),
              (pt.points = [io(st, 0), io(Nt, 0)]))
            : (g.current.bt = !1);
        }
        if (Cn && st[0] === "b" && (mt < xe.top || g.current.tb)) {
          var we = je;
          Tt ? (we += oe - G) : (we = ot.y - Ke.y - De);
          var Me = Gt(Ge, we),
            it = Gt(Ge, we, ce);
          Me > Ve || (Me === Ve && (!ge || it >= Pe))
            ? ((g.current.tb = !0),
              (je = we),
              (De = -De),
              (pt.points = [io(st, 0), io(Nt, 0)]))
            : (g.current.tb = !1);
        }
        var pn = Ot(ae),
          eo = st[1] === Nt[1];
        if (pn && st[1] === "l" && (Ft > xe.right || g.current.rl)) {
          var mn = Ge;
          eo ? (mn -= Ce - U) : (mn = ie.x - J.x - Ae);
          var to = Gt(mn, je),
            Ao = Gt(mn, je, ce);
          to > Ve || (to === Ve && (!ge || Ao >= Pe))
            ? ((g.current.rl = !0),
              (Ge = mn),
              (Ae = -Ae),
              (pt.points = [io(st, 1), io(Nt, 1)]))
            : (g.current.rl = !1);
        }
        if (pn && st[1] === "r" && (nt < xe.left || g.current.lr)) {
          var _n = Ge;
          eo ? (_n += Ce - U) : (_n = ot.x - Ke.x - Ae);
          var Er = Gt(_n, je),
            di = Gt(_n, je, ce);
          Er > Ve || (Er === Ve && (!ge || di >= Pe))
            ? ((g.current.lr = !0),
              (Ge = _n),
              (Ae = -Ae),
              (pt.points = [io(st, 1), io(Nt, 1)]))
            : (g.current.lr = !1);
        }
        ya();
        var An = Be === !0 ? 0 : Be;
        typeof An == "number" &&
          (nt < ce.left &&
            ((Ge -= nt - ce.left - Ae),
            O.x + U < ce.left + An && (Ge += O.x - ce.left + U - An)),
          Ft > ce.right &&
            ((Ge -= Ft - ce.right - Ae),
            O.x > ce.right - An && (Ge += O.x - ce.right + An)));
        var ar = qe === !0 ? 0 : qe;
        typeof ar == "number" &&
          (mt < ce.top &&
            ((je -= mt - ce.top - De),
            O.y + G < ce.top + ar && (je += O.y - ce.top + G - ar)),
          Rt > ce.bottom &&
            ((je -= Rt - ce.bottom - De),
            O.y > ce.bottom - ar && (je += O.y - ce.bottom + ar)));
        var no = A.x + Ge,
          vi = no + Ce,
          Or = A.y + je,
          Ar = Or + oe,
          No = O.x,
          Nr = No + U,
          Nn = O.y,
          Xe = Nn + G,
          ze = Math.max(no, No),
          Kt = Math.min(vi, Nr),
          kt = (ze + Kt) / 2,
          wt = kt - no,
          jt = Math.max(Or, Nn),
          Fn = Math.min(Ar, Xe),
          hn = (jt + Fn) / 2,
          lr = hn - Or;
        a == null || a(t, pt);
        var Xn = Le.right - A.x - (Ge + A.width),
          xn = Le.bottom - A.y - (je + A.height);
        fe === 1 && ((Ge = Math.round(Ge)), (Xn = Math.round(Xn))),
          Y === 1 && ((je = Math.round(je)), (xn = Math.round(xn)));
        var ro = {
          ready: !0,
          offsetX: Ge / fe,
          offsetY: je / Y,
          offsetR: Xn / fe,
          offsetB: xn / Y,
          arrowX: wt / fe,
          arrowY: lr / Y,
          scaleX: fe,
          scaleY: Y,
          align: pt,
        };
        c(ro);
      }
    }),
    b = function () {
      d.current += 1;
      var m = d.current;
      Promise.resolve().then(function () {
        d.current === m && S();
      });
    },
    h = function () {
      c(function (m) {
        return F(F({}, m), {}, { ready: !1 });
      });
    };
  return (
    bt(h, [r]),
    bt(
      function () {
        e || h();
      },
      [e]
    ),
    [
      u.ready,
      u.offsetX,
      u.offsetY,
      u.offsetR,
      u.offsetB,
      u.arrowX,
      u.arrowY,
      u.scaleX,
      u.scaleY,
      u.align,
      b,
    ]
  );
}
function VA(e, t, n, r, o) {
  bt(
    function () {
      if (e && t && n) {
        let v = function () {
          r(), o();
        };
        var d = v,
          i = t,
          a = n,
          l = Xv(i),
          s = Xv(a),
          u = Jl(a),
          c = new Set([u].concat(be(l), be(s)));
        return (
          c.forEach(function (g) {
            g.addEventListener("scroll", v, { passive: !0 });
          }),
          u.addEventListener("resize", v, { passive: !0 }),
          r(),
          function () {
            c.forEach(function (g) {
              g.removeEventListener("scroll", v),
                u.removeEventListener("resize", v);
            });
          }
        );
      }
    },
    [e, t, n]
  );
}
function WA(e, t, n, r, o, i, a, l) {
  var s = f.useRef(e);
  (s.current = e),
    f.useEffect(
      function () {
        if (t && r && (!o || i)) {
          var u = function (g) {
              var y = g.target;
              s.current && !a(y) && l(!1);
            },
            c = Jl(r);
          c.addEventListener("mousedown", u, !0),
            c.addEventListener("contextmenu", u, !0);
          var d = _u(n);
          return (
            d &&
              (d.addEventListener("mousedown", u, !0),
              d.addEventListener("contextmenu", u, !0)),
            function () {
              c.removeEventListener("mousedown", u, !0),
                c.removeEventListener("contextmenu", u, !0),
                d &&
                  (d.removeEventListener("mousedown", u, !0),
                  d.removeEventListener("contextmenu", u, !0));
            }
          );
        }
      },
      [t, n, r, o, i]
    );
}
var UA = [
  "prefixCls",
  "children",
  "action",
  "showAction",
  "hideAction",
  "popupVisible",
  "defaultPopupVisible",
  "onPopupVisibleChange",
  "afterPopupVisibleChange",
  "mouseEnterDelay",
  "mouseLeaveDelay",
  "focusDelay",
  "blurDelay",
  "mask",
  "maskClosable",
  "getPopupContainer",
  "forceRender",
  "autoDestroy",
  "destroyPopupOnHide",
  "popup",
  "popupClassName",
  "popupStyle",
  "popupPlacement",
  "builtinPlacements",
  "popupAlign",
  "zIndex",
  "stretch",
  "getPopupClassNameFromAlign",
  "fresh",
  "alignPoint",
  "onPopupClick",
  "onPopupAlign",
  "arrow",
  "popupMotion",
  "maskMotion",
  "popupTransitionName",
  "popupAnimation",
  "maskTransitionName",
  "maskAnimation",
  "className",
  "getTriggerDOMNode",
];
function KA() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mw,
    t = f.forwardRef(function (n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? "rc-trigger-popup" : o,
        a = n.children,
        l = n.action,
        s = l === void 0 ? "hover" : l,
        u = n.showAction,
        c = n.hideAction,
        d = n.popupVisible,
        v = n.defaultPopupVisible,
        g = n.onPopupVisibleChange,
        y = n.afterPopupVisibleChange,
        S = n.mouseEnterDelay,
        b = n.mouseLeaveDelay,
        h = b === void 0 ? 0.1 : b,
        p = n.focusDelay,
        m = n.blurDelay,
        w = n.mask,
        C = n.maskClosable,
        E = C === void 0 ? !0 : C,
        x = n.getPopupContainer,
        R = n.forceRender,
        P = n.autoDestroy,
        _ = n.destroyPopupOnHide,
        j = n.popup,
        L = n.popupClassName,
        D = n.popupStyle,
        z = n.popupPlacement,
        V = n.builtinPlacements,
        T = V === void 0 ? {} : V,
        I = n.popupAlign,
        O = n.zIndex,
        M = n.stretch,
        A = n.getPopupClassNameFromAlign,
        $ = n.fresh,
        k = n.alignPoint,
        B = n.onPopupClick,
        W = n.onPopupAlign,
        K = n.arrow,
        se = n.popupMotion,
        q = n.maskMotion,
        oe = n.popupTransitionName,
        Ce = n.popupAnimation,
        G = n.maskTransitionName,
        U = n.maskAnimation,
        Z = n.className,
        le = n.getTriggerDOMNode,
        X = yt(n, UA),
        de = P || _ || !1,
        re = f.useState(!1),
        ge = H(re, 2),
        Se = ge[0],
        ce = ge[1];
      bt(function () {
        ce(Pw());
      }, []);
      var Oe = f.useRef({}),
        xe = f.useContext(E0),
        Le = f.useMemo(
          function () {
            return {
              registerSubPopup: function (_e, Pt) {
                (Oe.current[_e] = Pt),
                  xe == null || xe.registerSubPopup(_e, Pt);
              },
            };
          },
          [xe]
        ),
        fe = KM(),
        Y = f.useState(null),
        Re = H(Y, 2),
        ve = Re[0],
        He = Re[1],
        Fe = f.useRef(null),
        Ae = Xt(function (ye) {
          (Fe.current = ye),
            Rl(ye) && ve !== ye && He(ye),
            xe == null || xe.registerSubPopup(fe, ye);
        }),
        De = f.useState(null),
        ct = H(De, 2),
        Je = ct[0],
        $e = ct[1],
        Te = f.useRef(null),
        dt = Xt(function (ye) {
          Rl(ye) && Je !== ye && ($e(ye), (Te.current = ye));
        }),
        et = f.Children.only(a),
        rt = (et == null ? void 0 : et.props) || {},
        Ze = {},
        Nt = Xt(function (ye) {
          var _e,
            Pt,
            Bt = Je;
          return (
            (Bt == null ? void 0 : Bt.contains(ye)) ||
            ((_e = _u(Bt)) === null || _e === void 0 ? void 0 : _e.host) ===
              ye ||
            ye === Bt ||
            (ve == null ? void 0 : ve.contains(ye)) ||
            ((Pt = _u(ve)) === null || Pt === void 0 ? void 0 : Pt.host) ===
              ye ||
            ye === ve ||
            Object.values(Oe.current).some(function (It) {
              return (It == null ? void 0 : It.contains(ye)) || ye === It;
            })
          );
        }),
        st = R0(i, se, Ce, oe),
        vt = R0(i, q, U, G),
        Ut = f.useState(v || !1),
        pt = H(Ut, 2),
        Ge = pt[0],
        je = pt[1],
        Ve = d ?? Ge,
        Pe = Xt(function (ye) {
          d === void 0 && je(ye);
        });
      bt(
        function () {
          je(d || !1);
        },
        [d]
      );
      var ie = f.useRef(Ve);
      ie.current = Ve;
      var Ke = f.useRef([]);
      Ke.current = [];
      var ot = Xt(function (ye) {
          var _e;
          Pe(ye),
            ((_e = Ke.current[Ke.current.length - 1]) !== null && _e !== void 0
              ? _e
              : Ve) !== ye && (Ke.current.push(ye), g == null || g(ye));
        }),
        J = f.useRef(),
        ue = function () {
          clearTimeout(J.current);
        },
        ae = function (_e) {
          var Pt =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          ue(),
            Pt === 0
              ? ot(_e)
              : (J.current = setTimeout(function () {
                  ot(_e);
                }, Pt * 1e3));
        };
      f.useEffect(function () {
        return ue;
      }, []);
      var Ee = f.useState(!1),
        Be = H(Ee, 2),
        qe = Be[0],
        Ot = Be[1];
      bt(
        function (ye) {
          (!ye || Ve) && Ot(!0);
        },
        [Ve]
      );
      var mt = f.useState(null),
        Rt = H(mt, 2),
        nt = Rt[0],
        Ft = Rt[1],
        Cn = f.useState([0, 0]),
        Tt = H(Cn, 2),
        Yt = Tt[0],
        Mn = Tt[1],
        he = function (_e) {
          Mn([_e.clientX, _e.clientY]);
        },
        we = HA(Ve, ve, k ? Yt : Je, z, T, I, W),
        Me = H(we, 11),
        it = Me[0],
        pn = Me[1],
        eo = Me[2],
        mn = Me[3],
        to = Me[4],
        Ao = Me[5],
        _n = Me[6],
        Er = Me[7],
        di = Me[8],
        An = Me[9],
        ar = Me[10],
        no = DA(Se, s, u, c),
        vi = H(no, 2),
        Or = vi[0],
        Ar = vi[1],
        No = Or.has("click"),
        Nr = Ar.has("click") || Ar.has("contextMenu"),
        Nn = Xt(function () {
          qe || ar();
        }),
        Xe = function () {
          ie.current && k && Nr && ae(!1);
        };
      VA(Ve, Je, ve, Nn, Xe),
        bt(
          function () {
            Nn();
          },
          [Yt, z]
        ),
        bt(
          function () {
            Ve && !(T != null && T[z]) && Nn();
          },
          [JSON.stringify(I)]
        );
      var ze = f.useMemo(
        function () {
          var ye = BA(T, i, An, k);
          return me(ye, A == null ? void 0 : A(An));
        },
        [An, A, T, i, k]
      );
      f.useImperativeHandle(r, function () {
        return {
          nativeElement: Te.current,
          popupElement: Fe.current,
          forceAlign: Nn,
        };
      });
      var Kt = f.useState(0),
        kt = H(Kt, 2),
        wt = kt[0],
        jt = kt[1],
        Fn = f.useState(0),
        hn = H(Fn, 2),
        lr = hn[0],
        Xn = hn[1],
        xn = function () {
          if (M && Je) {
            var _e = Je.getBoundingClientRect();
            jt(_e.width), Xn(_e.height);
          }
        },
        ro = function () {
          xn(), Nn();
        },
        Fo = function (_e) {
          Ot(!1), ar(), y == null || y(_e);
        },
        xm = function () {
          return new Promise(function (_e) {
            xn(),
              Ft(function () {
                return _e;
              });
          });
        };
      bt(
        function () {
          nt && (ar(), nt(), Ft(null));
        },
        [nt]
      );
      function Gt(ye, _e, Pt, Bt) {
        Ze[ye] = function (It) {
          var ts;
          Bt == null || Bt(It), ae(_e, Pt);
          for (
            var kc = arguments.length,
              Em = new Array(kc > 1 ? kc - 1 : 0),
              ns = 1;
            ns < kc;
            ns++
          )
            Em[ns - 1] = arguments[ns];
          (ts = rt[ye]) === null ||
            ts === void 0 ||
            ts.call.apply(ts, [rt, It].concat(Em));
        };
      }
      (No || Nr) &&
        (Ze.onClick = function (ye) {
          var _e;
          ie.current && Nr ? ae(!1) : !ie.current && No && (he(ye), ae(!0));
          for (
            var Pt = arguments.length,
              Bt = new Array(Pt > 1 ? Pt - 1 : 0),
              It = 1;
            It < Pt;
            It++
          )
            Bt[It - 1] = arguments[It];
          (_e = rt.onClick) === null ||
            _e === void 0 ||
            _e.call.apply(_e, [rt, ye].concat(Bt));
        }),
        WA(Ve, Nr, Je, ve, w, E, Nt, ae);
      var ya = Or.has("hover"),
        es = Ar.has("hover"),
        Fr,
        jo;
      ya &&
        (Gt("onMouseEnter", !0, S, function (ye) {
          he(ye);
        }),
        Gt("onPointerEnter", !0, S, function (ye) {
          he(ye);
        }),
        (Fr = function (_e) {
          (Ve || qe) &&
            ve !== null &&
            ve !== void 0 &&
            ve.contains(_e.target) &&
            ae(!0, S);
        }),
        k &&
          (Ze.onMouseMove = function (ye) {
            var _e;
            (_e = rt.onMouseMove) === null || _e === void 0 || _e.call(rt, ye);
          })),
        es &&
          (Gt("onMouseLeave", !1, h),
          Gt("onPointerLeave", !1, h),
          (jo = function () {
            ae(!1, h);
          })),
        Or.has("focus") && Gt("onFocus", !0, p),
        Ar.has("focus") && Gt("onBlur", !1, m),
        Or.has("contextMenu") &&
          (Ze.onContextMenu = function (ye) {
            var _e;
            ie.current && Ar.has("contextMenu") ? ae(!1) : (he(ye), ae(!0)),
              ye.preventDefault();
            for (
              var Pt = arguments.length,
                Bt = new Array(Pt > 1 ? Pt - 1 : 0),
                It = 1;
              It < Pt;
              It++
            )
              Bt[It - 1] = arguments[It];
            (_e = rt.onContextMenu) === null ||
              _e === void 0 ||
              _e.call.apply(_e, [rt, ye].concat(Bt));
          }),
        Z && (Ze.className = me(rt.className, Z));
      var pi = F(F({}, rt), Ze),
        Sa = {},
        jc = [
          "onContextMenu",
          "onClick",
          "onMouseDown",
          "onTouchStart",
          "onMouseEnter",
          "onMouseLeave",
          "onFocus",
          "onBlur",
        ];
      jc.forEach(function (ye) {
        X[ye] &&
          (Sa[ye] = function () {
            for (
              var _e, Pt = arguments.length, Bt = new Array(Pt), It = 0;
              It < Pt;
              It++
            )
              Bt[It] = arguments[It];
            (_e = pi[ye]) === null ||
              _e === void 0 ||
              _e.call.apply(_e, [pi].concat(Bt)),
              X[ye].apply(X, Bt);
          });
      });
      var zc = f.cloneElement(et, F(F({}, pi), Sa)),
        Lc = { x: Ao, y: _n },
        Dc = K ? F({}, K !== !0 ? K : {}) : null;
      return f.createElement(
        f.Fragment,
        null,
        f.createElement(
          _o,
          { disabled: !Ve, ref: dt, onResize: ro },
          f.createElement(LA, { getTriggerDOMNode: le }, zc)
        ),
        f.createElement(
          E0.Provider,
          { value: Le },
          f.createElement(zA, {
            portal: e,
            ref: Ae,
            prefixCls: i,
            popup: j,
            className: me(L, ze),
            style: D,
            target: Je,
            onMouseEnter: Fr,
            onMouseLeave: jo,
            onPointerEnter: Fr,
            zIndex: O,
            open: Ve,
            keepDom: qe,
            fresh: $,
            onClick: B,
            mask: w,
            motion: st,
            maskMotion: vt,
            onVisibleChanged: Fo,
            onPrepare: xm,
            forceRender: R,
            autoDestroy: de,
            getPopupContainer: x,
            align: An,
            arrow: Dc,
            arrowPos: Lc,
            ready: it,
            offsetX: pn,
            offsetY: eo,
            offsetR: mn,
            offsetB: to,
            onAlign: Nn,
            stretch: M,
            targetWidth: wt / Er,
            targetHeight: lr / di,
          })
        )
      );
    });
  return t;
}
const GA = KA(mw);
var qA = [
    "prefixCls",
    "disabled",
    "visible",
    "children",
    "popupElement",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "direction",
    "placement",
    "builtinPlacements",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "getPopupContainer",
    "empty",
    "getTriggerDOMNode",
    "onPopupVisibleChange",
    "onPopupMouseEnter",
  ],
  XA = function (t) {
    var n = t === !0 ? 0 : 1;
    return {
      bottomLeft: {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: "scroll",
      },
      bottomRight: {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: "scroll",
      },
      topLeft: {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: "scroll",
      },
      topRight: {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: { adjustX: n, adjustY: 1 },
        htmlRegion: "scroll",
      },
    };
  },
  QA = function (t, n) {
    var r = t.prefixCls;
    t.disabled;
    var o = t.visible,
      i = t.children,
      a = t.popupElement,
      l = t.animation,
      s = t.transitionName,
      u = t.dropdownStyle,
      c = t.dropdownClassName,
      d = t.direction,
      v = d === void 0 ? "ltr" : d,
      g = t.placement,
      y = t.builtinPlacements,
      S = t.dropdownMatchSelectWidth,
      b = t.dropdownRender,
      h = t.dropdownAlign,
      p = t.getPopupContainer,
      m = t.empty,
      w = t.getTriggerDOMNode,
      C = t.onPopupVisibleChange,
      E = t.onPopupMouseEnter,
      x = yt(t, qA),
      R = "".concat(r, "-dropdown"),
      P = a;
    b && (P = b(a));
    var _ = f.useMemo(
        function () {
          return y || XA(S);
        },
        [y, S]
      ),
      j = l ? "".concat(R, "-").concat(l) : s,
      L = typeof S == "number",
      D = f.useMemo(
        function () {
          return L ? null : S === !1 ? "minWidth" : "width";
        },
        [S, L]
      ),
      z = u;
    L && (z = F(F({}, z), {}, { width: S }));
    var V = f.useRef(null);
    return (
      f.useImperativeHandle(n, function () {
        return {
          getPopupElement: function () {
            var I;
            return (I = V.current) === null || I === void 0
              ? void 0
              : I.popupElement;
          },
        };
      }),
      f.createElement(
        GA,
        We({}, x, {
          showAction: C ? ["click"] : [],
          hideAction: C ? ["click"] : [],
          popupPlacement: g || (v === "rtl" ? "bottomRight" : "bottomLeft"),
          builtinPlacements: _,
          prefixCls: R,
          popupTransitionName: j,
          popup: f.createElement("div", { onMouseEnter: E }, P),
          ref: V,
          stretch: D,
          popupAlign: h,
          popupVisible: o,
          getPopupContainer: p,
          popupClassName: me(c, N({}, "".concat(R, "-empty"), m)),
          popupStyle: z,
          getTriggerDOMNode: w,
          onPopupVisibleChange: C,
        }),
        i
      )
    );
  },
  YA = f.forwardRef(QA);
function M0(e, t) {
  var n = e.key,
    r;
  return (
    "value" in e && (r = e.value),
    n ?? (r !== void 0 ? r : "rc-index-key-".concat(t))
  );
}
function Qv(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function jw(e, t) {
  var n = e || {},
    r = n.label,
    o = n.value,
    i = n.options,
    a = n.groupLabel,
    l = r || (t ? "children" : "label");
  return {
    label: l,
    value: o || "value",
    options: i || "options",
    groupLabel: a || l,
  };
}
function ZA(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.fieldNames,
    r = t.childrenAsData,
    o = [],
    i = jw(n, !1),
    a = i.label,
    l = i.value,
    s = i.options,
    u = i.groupLabel;
  function c(d, v) {
    Array.isArray(d) &&
      d.forEach(function (g) {
        if (v || !(s in g)) {
          var y = g[l];
          o.push({
            key: M0(g, o.length),
            groupOption: v,
            data: g,
            label: g[a],
            value: y,
          });
        } else {
          var S = g[u];
          S === void 0 && r && (S = g.label),
            o.push({ key: M0(g, o.length), group: !0, data: g, label: S }),
            c(g[s], !0);
        }
      });
  }
  return c(e, !1), o;
}
function Yv(e) {
  var t = F({}, e);
  return (
    "props" in t ||
      Object.defineProperty(t, "props", {
        get: function () {
          return (
            $n(
              !1,
              "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."
            ),
            t
          );
        },
      }),
    t
  );
}
var JA = function (t, n, r) {
    if (!n || !n.length) return null;
    var o = !1,
      i = function l(s, u) {
        var c = Ab(u),
          d = c[0],
          v = c.slice(1);
        if (!d) return [s];
        var g = s.split(d);
        return (
          (o = o || g.length > 1),
          g
            .reduce(function (y, S) {
              return [].concat(be(y), be(l(S, v)));
            }, [])
            .filter(Boolean)
        );
      },
      a = i(t, n);
    return o ? (typeof r < "u" ? a.slice(0, r) : a) : null;
  },
  hm = f.createContext(null);
function e3(e) {
  var t = e.visible,
    n = e.values;
  if (!t) return null;
  var r = 50;
  return f.createElement(
    "span",
    {
      "aria-live": "polite",
      style: {
        width: 0,
        height: 0,
        position: "absolute",
        overflow: "hidden",
        opacity: 0,
      },
    },
    "".concat(
      n
        .slice(0, r)
        .map(function (o) {
          var i = o.label,
            a = o.value;
          return ["number", "string"].includes(Ie(i)) ? i : a;
        })
        .join(", ")
    ),
    n.length > r ? ", ..." : null
  );
}
var t3 = [
    "id",
    "prefixCls",
    "className",
    "showSearch",
    "tagRender",
    "direction",
    "omitDomProps",
    "displayValues",
    "onDisplayValuesChange",
    "emptyOptions",
    "notFoundContent",
    "onClear",
    "mode",
    "disabled",
    "loading",
    "getInputElement",
    "getRawInputElement",
    "open",
    "defaultOpen",
    "onDropdownVisibleChange",
    "activeValue",
    "onActiveValueChange",
    "activeDescendantId",
    "searchValue",
    "autoClearSearchValue",
    "onSearch",
    "onSearchSplit",
    "tokenSeparators",
    "allowClear",
    "suffixIcon",
    "clearIcon",
    "OptionList",
    "animation",
    "transitionName",
    "dropdownStyle",
    "dropdownClassName",
    "dropdownMatchSelectWidth",
    "dropdownRender",
    "dropdownAlign",
    "placement",
    "builtinPlacements",
    "getPopupContainer",
    "showAction",
    "onFocus",
    "onBlur",
    "onKeyUp",
    "onKeyDown",
    "onMouseDown",
  ],
  n3 = [
    "value",
    "onChange",
    "removeIcon",
    "placeholder",
    "autoFocus",
    "maxTagCount",
    "maxTagTextLength",
    "maxTagPlaceholder",
    "choiceTransitionName",
    "onInputKeyDown",
    "onPopupScroll",
    "tabIndex",
  ],
  Zv = function (t) {
    return t === "tags" || t === "multiple";
  },
  r3 = f.forwardRef(function (e, t) {
    var n,
      r = e.id,
      o = e.prefixCls,
      i = e.className,
      a = e.showSearch,
      l = e.tagRender,
      s = e.direction,
      u = e.omitDomProps,
      c = e.displayValues,
      d = e.onDisplayValuesChange,
      v = e.emptyOptions,
      g = e.notFoundContent,
      y = g === void 0 ? "Not Found" : g,
      S = e.onClear,
      b = e.mode,
      h = e.disabled,
      p = e.loading,
      m = e.getInputElement,
      w = e.getRawInputElement,
      C = e.open,
      E = e.defaultOpen,
      x = e.onDropdownVisibleChange,
      R = e.activeValue,
      P = e.onActiveValueChange,
      _ = e.activeDescendantId,
      j = e.searchValue,
      L = e.autoClearSearchValue,
      D = e.onSearch,
      z = e.onSearchSplit,
      V = e.tokenSeparators,
      T = e.allowClear,
      I = e.suffixIcon,
      O = e.clearIcon,
      M = e.OptionList,
      A = e.animation,
      $ = e.transitionName,
      k = e.dropdownStyle,
      B = e.dropdownClassName,
      W = e.dropdownMatchSelectWidth,
      K = e.dropdownRender,
      se = e.dropdownAlign,
      q = e.placement,
      oe = e.builtinPlacements,
      Ce = e.getPopupContainer,
      G = e.showAction,
      U = G === void 0 ? [] : G,
      Z = e.onFocus,
      le = e.onBlur,
      X = e.onKeyUp,
      de = e.onKeyDown,
      re = e.onMouseDown,
      ge = yt(e, t3),
      Se = Zv(b),
      ce = (a !== void 0 ? a : Se) || b === "combobox",
      Oe = F({}, ge);
    n3.forEach(function (Xe) {
      delete Oe[Xe];
    }),
      u == null ||
        u.forEach(function (Xe) {
          delete Oe[Xe];
        });
    var xe = f.useState(!1),
      Le = H(xe, 2),
      fe = Le[0],
      Y = Le[1];
    f.useEffect(function () {
      Y(Pw());
    }, []);
    var Re = f.useRef(null),
      ve = f.useRef(null),
      He = f.useRef(null),
      Fe = f.useRef(null),
      Ae = f.useRef(null),
      De = f.useRef(!1),
      ct = uA(),
      Je = H(ct, 3),
      $e = Je[0],
      Te = Je[1],
      dt = Je[2];
    f.useImperativeHandle(t, function () {
      var Xe, ze;
      return {
        focus: (Xe = Fe.current) === null || Xe === void 0 ? void 0 : Xe.focus,
        blur: (ze = Fe.current) === null || ze === void 0 ? void 0 : ze.blur,
        scrollTo: function (kt) {
          var wt;
          return (wt = Ae.current) === null || wt === void 0
            ? void 0
            : wt.scrollTo(kt);
        },
        nativeElement: Re.current || ve.current,
      };
    });
    var et = f.useMemo(
        function () {
          var Xe;
          if (b !== "combobox") return j;
          var ze = (Xe = c[0]) === null || Xe === void 0 ? void 0 : Xe.value;
          return typeof ze == "string" || typeof ze == "number"
            ? String(ze)
            : "";
        },
        [j, b, c]
      ),
      rt = (b === "combobox" && typeof m == "function" && m()) || null,
      Ze = typeof w == "function" && w(),
      Nt = Oc(
        ve,
        Ze == null || (n = Ze.props) === null || n === void 0 ? void 0 : n.ref
      ),
      st = f.useState(!1),
      vt = H(st, 2),
      Ut = vt[0],
      pt = vt[1];
    bt(function () {
      pt(!0);
    }, []);
    var Ge = ai(!1, { defaultValue: E, value: C }),
      je = H(Ge, 2),
      Ve = je[0],
      Pe = je[1],
      ie = Ut ? Ve : !1,
      Ke = !y && v;
    (h || (Ke && ie && b === "combobox")) && (ie = !1);
    var ot = Ke ? !1 : ie,
      J = f.useCallback(
        function (Xe) {
          var ze = Xe !== void 0 ? Xe : !ie;
          h || (Pe(ze), ie !== ze && (x == null || x(ze)));
        },
        [h, ie, Pe, x]
      ),
      ue = f.useMemo(
        function () {
          return (V || []).some(function (Xe) {
            return [
              `
`,
              `\r
`,
            ].includes(Xe);
          });
        },
        [V]
      ),
      ae = f.useContext(hm) || {},
      Ee = ae.maxCount,
      Be = ae.rawValues,
      qe = function (ze, Kt, kt) {
        if (!(Se && Qv(Ee) && (Be == null ? void 0 : Be.size) >= Ee)) {
          var wt = !0,
            jt = ze;
          P == null || P(null);
          var Fn = JA(ze, V, Qv(Ee) ? Ee - Be.size : void 0),
            hn = kt ? null : Fn;
          return (
            b !== "combobox" &&
              hn &&
              ((jt = ""), z == null || z(hn), J(!1), (wt = !1)),
            D && et !== jt && D(jt, { source: Kt ? "typing" : "effect" }),
            wt
          );
        }
      },
      Ot = function (ze) {
        !ze || !ze.trim() || D(ze, { source: "submit" });
      };
    f.useEffect(
      function () {
        !ie && !Se && b !== "combobox" && qe("", !1, !1);
      },
      [ie]
    ),
      f.useEffect(
        function () {
          Ve && h && Pe(!1), h && !De.current && Te(!1);
        },
        [h]
      );
    var mt = $w(),
      Rt = H(mt, 2),
      nt = Rt[0],
      Ft = Rt[1],
      Cn = f.useRef(!1),
      Tt = function (ze) {
        var Kt = nt(),
          kt = ze.key,
          wt = kt === "Enter";
        if (
          (wt && (b !== "combobox" && ze.preventDefault(), ie || J(!0)),
          Ft(!!et),
          kt === "Backspace" && !Kt && Se && !et && c.length)
        ) {
          for (
            var jt = be(c), Fn = null, hn = jt.length - 1;
            hn >= 0;
            hn -= 1
          ) {
            var lr = jt[hn];
            if (!lr.disabled) {
              jt.splice(hn, 1), (Fn = lr);
              break;
            }
          }
          Fn && d(jt, { type: "remove", values: [Fn] });
        }
        for (
          var Xn = arguments.length,
            xn = new Array(Xn > 1 ? Xn - 1 : 0),
            ro = 1;
          ro < Xn;
          ro++
        )
          xn[ro - 1] = arguments[ro];
        if (ie && (!wt || !Cn.current)) {
          var Fo;
          (Fo = Ae.current) === null ||
            Fo === void 0 ||
            Fo.onKeyDown.apply(Fo, [ze].concat(xn));
        }
        wt && (Cn.current = !0),
          de == null || de.apply(void 0, [ze].concat(xn));
      },
      Yt = function (ze) {
        for (
          var Kt = arguments.length,
            kt = new Array(Kt > 1 ? Kt - 1 : 0),
            wt = 1;
          wt < Kt;
          wt++
        )
          kt[wt - 1] = arguments[wt];
        if (ie) {
          var jt;
          (jt = Ae.current) === null ||
            jt === void 0 ||
            jt.onKeyUp.apply(jt, [ze].concat(kt));
        }
        ze.key === "Enter" && (Cn.current = !1),
          X == null || X.apply(void 0, [ze].concat(kt));
      },
      Mn = function (ze) {
        var Kt = c.filter(function (kt) {
          return kt !== ze;
        });
        d(Kt, { type: "remove", values: [ze] });
      },
      he = f.useRef(!1),
      we = function () {
        Te(!0),
          h ||
            (Z && !he.current && Z.apply(void 0, arguments),
            U.includes("focus") && J(!0)),
          (he.current = !0);
      },
      Me = function () {
        (De.current = !0),
          Te(!1, function () {
            (he.current = !1), (De.current = !1), J(!1);
          }),
          !h &&
            (et &&
              (b === "tags"
                ? D(et, { source: "submit" })
                : b === "multiple" && D("", { source: "blur" })),
            le && le.apply(void 0, arguments));
      },
      it = [];
    f.useEffect(function () {
      return function () {
        it.forEach(function (Xe) {
          return clearTimeout(Xe);
        }),
          it.splice(0, it.length);
      };
    }, []);
    var pn = function (ze) {
        var Kt,
          kt = ze.target,
          wt =
            (Kt = He.current) === null || Kt === void 0
              ? void 0
              : Kt.getPopupElement();
        if (wt && wt.contains(kt)) {
          var jt = setTimeout(function () {
            var Xn = it.indexOf(jt);
            if (
              (Xn !== -1 && it.splice(Xn, 1),
              dt(),
              !fe && !wt.contains(document.activeElement))
            ) {
              var xn;
              (xn = Fe.current) === null || xn === void 0 || xn.focus();
            }
          });
          it.push(jt);
        }
        for (
          var Fn = arguments.length,
            hn = new Array(Fn > 1 ? Fn - 1 : 0),
            lr = 1;
          lr < Fn;
          lr++
        )
          hn[lr - 1] = arguments[lr];
        re == null || re.apply(void 0, [ze].concat(hn));
      },
      eo = f.useState({}),
      mn = H(eo, 2),
      to = mn[1];
    function Ao() {
      to({});
    }
    var _n;
    Ze &&
      (_n = function (ze) {
        J(ze);
      }),
      cA(
        function () {
          var Xe;
          return [
            Re.current,
            (Xe = He.current) === null || Xe === void 0
              ? void 0
              : Xe.getPopupElement(),
          ];
        },
        ot,
        J,
        !!Ze
      );
    var Er = f.useMemo(
        function () {
          return F(
            F({}, e),
            {},
            {
              notFoundContent: y,
              open: ie,
              triggerOpen: ot,
              id: r,
              showSearch: ce,
              multiple: Se,
              toggleOpen: J,
            }
          );
        },
        [e, y, ot, ie, r, ce, Se, J]
      ),
      di = !!I || p,
      An;
    di &&
      (An = f.createElement(Ac, {
        className: me(
          "".concat(o, "-arrow"),
          N({}, "".concat(o, "-arrow-loading"), p)
        ),
        customizeIcon: I,
        customizeIconProps: {
          loading: p,
          searchValue: et,
          open: ie,
          focused: $e,
          showSearch: ce,
        },
      }));
    var ar = function () {
        var ze;
        S == null || S(),
          (ze = Fe.current) === null || ze === void 0 || ze.focus(),
          d([], { type: "clear", values: c }),
          qe("", !1, !1);
      },
      no = lA(o, ar, c, T, O, h, et, b),
      vi = no.allowClear,
      Or = no.clearIcon,
      Ar = f.createElement(M, { ref: Ae }),
      No = me(
        o,
        i,
        N(
          N(
            N(
              N(
                N(
                  N(
                    N(
                      N(
                        N(
                          N({}, "".concat(o, "-focused"), $e),
                          "".concat(o, "-multiple"),
                          Se
                        ),
                        "".concat(o, "-single"),
                        !Se
                      ),
                      "".concat(o, "-allow-clear"),
                      T
                    ),
                    "".concat(o, "-show-arrow"),
                    di
                  ),
                  "".concat(o, "-disabled"),
                  h
                ),
                "".concat(o, "-loading"),
                p
              ),
              "".concat(o, "-open"),
              ie
            ),
            "".concat(o, "-customize-input"),
            rt
          ),
          "".concat(o, "-show-search"),
          ce
        )
      ),
      Nr = f.createElement(
        YA,
        {
          ref: He,
          disabled: h,
          prefixCls: o,
          visible: ot,
          popupElement: Ar,
          animation: A,
          transitionName: $,
          dropdownStyle: k,
          dropdownClassName: B,
          direction: s,
          dropdownMatchSelectWidth: W,
          dropdownRender: K,
          dropdownAlign: se,
          placement: q,
          builtinPlacements: oe,
          getPopupContainer: Ce,
          empty: v,
          getTriggerDOMNode: function (ze) {
            return ve.current || ze;
          },
          onPopupVisibleChange: _n,
          onPopupMouseEnter: Ao,
        },
        Ze
          ? f.cloneElement(Ze, { ref: Nt })
          : f.createElement(
              AA,
              We({}, e, {
                domRef: ve,
                prefixCls: o,
                inputElement: rt,
                ref: Fe,
                id: r,
                showSearch: ce,
                autoClearSearchValue: L,
                mode: b,
                activeDescendantId: _,
                tagRender: l,
                values: c,
                open: ie,
                onToggleOpen: J,
                activeValue: R,
                searchValue: et,
                onSearch: qe,
                onSearchSubmit: Ot,
                onRemove: Mn,
                tokenWithEnter: ue,
              })
            )
      ),
      Nn;
    return (
      Ze
        ? (Nn = Nr)
        : (Nn = f.createElement(
            "div",
            We({ className: No }, Oe, {
              ref: Re,
              onMouseDown: pn,
              onKeyDown: Tt,
              onKeyUp: Yt,
              onFocus: we,
              onBlur: Me,
            }),
            f.createElement(e3, { visible: $e && !ie, values: c }),
            Nr,
            An,
            vi && Or
          )),
      f.createElement(Iw.Provider, { value: Er }, Nn)
    );
  }),
  gm = function () {
    return null;
  };
gm.isSelectOptGroup = !0;
var ym = function () {
  return null;
};
ym.isSelectOption = !0;
var zw = f.forwardRef(function (e, t) {
  var n = e.height,
    r = e.offsetY,
    o = e.offsetX,
    i = e.children,
    a = e.prefixCls,
    l = e.onInnerResize,
    s = e.innerProps,
    u = e.rtl,
    c = e.extra,
    d = {},
    v = { display: "flex", flexDirection: "column" };
  return (
    r !== void 0 &&
      ((d = { height: n, position: "relative", overflow: "hidden" }),
      (v = F(
        F({}, v),
        {},
        N(
          N(
            N(
              N(
                N(
                  { transform: "translateY(".concat(r, "px)") },
                  u ? "marginRight" : "marginLeft",
                  -o
                ),
                "position",
                "absolute"
              ),
              "left",
              0
            ),
            "right",
            0
          ),
          "top",
          0
        )
      ))),
    f.createElement(
      "div",
      { style: d },
      f.createElement(
        _o,
        {
          onResize: function (y) {
            var S = y.offsetHeight;
            S && l && l();
          },
        },
        f.createElement(
          "div",
          We(
            {
              style: v,
              className: me(N({}, "".concat(a, "-holder-inner"), a)),
              ref: t,
            },
            s
          ),
          i,
          c
        )
      )
    )
  );
});
zw.displayName = "Filler";
function o3(e) {
  var t = e.children,
    n = e.setRef,
    r = f.useCallback(function (o) {
      n(o);
    }, []);
  return f.cloneElement(t, { ref: r });
}
function i3(e, t, n, r, o, i, a, l) {
  var s = l.getKey;
  return e.slice(t, n + 1).map(function (u, c) {
    var d = t + c,
      v = a(u, d, { style: { width: r }, offsetX: o }),
      g = s(u);
    return f.createElement(
      o3,
      {
        key: g,
        setRef: function (S) {
          return i(u, S);
        },
      },
      v
    );
  });
}
function a3(e, t, n) {
  var r = e.length,
    o = t.length,
    i,
    a;
  if (r === 0 && o === 0) return null;
  r < o ? ((i = e), (a = t)) : ((i = t), (a = e));
  var l = { __EMPTY_ITEM__: !0 };
  function s(y) {
    return y !== void 0 ? n(y) : l;
  }
  for (var u = null, c = Math.abs(r - o) !== 1, d = 0; d < a.length; d += 1) {
    var v = s(i[d]),
      g = s(a[d]);
    if (v !== g) {
      (u = d), (c = c || v !== s(a[d + 1]));
      break;
    }
  }
  return u === null ? null : { index: u, multiple: c };
}
function l3(e, t, n) {
  var r = f.useState(e),
    o = H(r, 2),
    i = o[0],
    a = o[1],
    l = f.useState(null),
    s = H(l, 2),
    u = s[0],
    c = s[1];
  return (
    f.useEffect(
      function () {
        var d = a3(i || [], e || [], t);
        (d == null ? void 0 : d.index) !== void 0 && c(e[d.index]), a(e);
      },
      [e]
    ),
    [u]
  );
}
var _0 =
  (typeof navigator > "u" ? "undefined" : Ie(navigator)) === "object" &&
  /Firefox/i.test(navigator.userAgent);
const Lw = function (e, t, n, r) {
  var o = f.useRef(!1),
    i = f.useRef(null);
  function a() {
    clearTimeout(i.current),
      (o.current = !0),
      (i.current = setTimeout(function () {
        o.current = !1;
      }, 50));
  }
  var l = f.useRef({ top: e, bottom: t, left: n, right: r });
  return (
    (l.current.top = e),
    (l.current.bottom = t),
    (l.current.left = n),
    (l.current.right = r),
    function (s, u) {
      var c =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        d = s
          ? (u < 0 && l.current.left) || (u > 0 && l.current.right)
          : (u < 0 && l.current.top) || (u > 0 && l.current.bottom);
      return (
        c && d
          ? (clearTimeout(i.current), (o.current = !1))
          : (!d || o.current) && a(),
        !o.current && d
      );
    }
  );
};
function s3(e, t, n, r, o, i, a) {
  var l = f.useRef(0),
    s = f.useRef(null),
    u = f.useRef(null),
    c = f.useRef(!1),
    d = Lw(t, n, r, o);
  function v(p, m) {
    At.cancel(s.current),
      (l.current += m),
      (u.current = m),
      !d(!1, m) &&
        (_0 || p.preventDefault(),
        (s.current = At(function () {
          var w = c.current ? 10 : 1;
          a(l.current * w), (l.current = 0);
        })));
  }
  function g(p, m) {
    a(m, !0), _0 || p.preventDefault();
  }
  var y = f.useRef(null),
    S = f.useRef(null);
  function b(p) {
    if (e) {
      At.cancel(S.current),
        (S.current = At(function () {
          y.current = null;
        }, 2));
      var m = p.deltaX,
        w = p.deltaY,
        C = p.shiftKey,
        E = m,
        x = w;
      (y.current === "sx" || (!y.current && C && w && !m)) &&
        ((E = w), (x = 0), (y.current = "sx"));
      var R = Math.abs(E),
        P = Math.abs(x);
      y.current === null && (y.current = i && R > P ? "x" : "y"),
        y.current === "y" ? v(p, x) : g(p, E);
    }
  }
  function h(p) {
    e && (c.current = p.detail === u.current);
  }
  return [b, h];
}
function u3(e, t, n, r) {
  var o = f.useMemo(
      function () {
        return [new Map(), []];
      },
      [e, n.id, r]
    ),
    i = H(o, 2),
    a = i[0],
    l = i[1],
    s = function (c) {
      var d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c,
        v = a.get(c),
        g = a.get(d);
      if (v === void 0 || g === void 0)
        for (var y = e.length, S = l.length; S < y; S += 1) {
          var b,
            h = e[S],
            p = t(h);
          a.set(p, S);
          var m = (b = n.get(p)) !== null && b !== void 0 ? b : r;
          if (
            ((l[S] = (l[S - 1] || 0) + m),
            p === c && (v = S),
            p === d && (g = S),
            v !== void 0 && g !== void 0)
          )
            break;
        }
      return { top: l[v - 1] || 0, bottom: l[g] };
    };
  return s;
}
var c3 = (function () {
  function e() {
    an(this, e),
      N(this, "maps", void 0),
      N(this, "id", 0),
      (this.maps = Object.create(null));
  }
  return (
    ln(e, [
      {
        key: "set",
        value: function (n, r) {
          (this.maps[n] = r), (this.id += 1);
        },
      },
      {
        key: "get",
        value: function (n) {
          return this.maps[n];
        },
      },
    ]),
    e
  );
})();
function f3(e, t, n) {
  var r = f.useState(0),
    o = H(r, 2),
    i = o[0],
    a = o[1],
    l = f.useRef(new Map()),
    s = f.useRef(new c3()),
    u = f.useRef();
  function c() {
    At.cancel(u.current);
  }
  function d() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    c();
    var y = function () {
      l.current.forEach(function (b, h) {
        if (b && b.offsetParent) {
          var p = Ya(b),
            m = p.offsetHeight;
          s.current.get(h) !== m && s.current.set(h, p.offsetHeight);
        }
      }),
        a(function (b) {
          return b + 1;
        });
    };
    g ? y() : (u.current = At(y));
  }
  function v(g, y) {
    var S = e(g);
    l.current.get(S), y ? (l.current.set(S, y), d()) : l.current.delete(S);
  }
  return (
    f.useEffect(function () {
      return c;
    }, []),
    [v, d, s.current, i]
  );
}
var A0 = 14 / 15;
function d3(e, t, n) {
  var r = f.useRef(!1),
    o = f.useRef(0),
    i = f.useRef(0),
    a = f.useRef(null),
    l = f.useRef(null),
    s,
    u = function (g) {
      if (r.current) {
        var y = Math.ceil(g.touches[0].pageX),
          S = Math.ceil(g.touches[0].pageY),
          b = o.current - y,
          h = i.current - S,
          p = Math.abs(b) > Math.abs(h);
        p ? (o.current = y) : (i.current = S),
          n(p, p ? b : h) && g.preventDefault(),
          clearInterval(l.current),
          (l.current = setInterval(function () {
            p ? (b *= A0) : (h *= A0);
            var m = Math.floor(p ? b : h);
            (!n(p, m, !0) || Math.abs(m) <= 0.1) && clearInterval(l.current);
          }, 16));
      }
    },
    c = function () {
      (r.current = !1), s();
    },
    d = function (g) {
      s(),
        g.touches.length === 1 &&
          !r.current &&
          ((r.current = !0),
          (o.current = Math.ceil(g.touches[0].pageX)),
          (i.current = Math.ceil(g.touches[0].pageY)),
          (a.current = g.target),
          a.current.addEventListener("touchmove", u, { passive: !1 }),
          a.current.addEventListener("touchend", c, { passive: !0 }));
    };
  (s = function () {
    a.current &&
      (a.current.removeEventListener("touchmove", u),
      a.current.removeEventListener("touchend", c));
  }),
    bt(
      function () {
        return (
          e && t.current.addEventListener("touchstart", d, { passive: !0 }),
          function () {
            var v;
            (v = t.current) === null ||
              v === void 0 ||
              v.removeEventListener("touchstart", d),
              s(),
              clearInterval(l.current);
          }
        );
      },
      [e]
    );
}
var v3 = 10;
function p3(e, t, n, r, o, i, a, l) {
  var s = f.useRef(),
    u = f.useState(null),
    c = H(u, 2),
    d = c[0],
    v = c[1];
  return (
    bt(
      function () {
        if (d && d.times < v3) {
          if (!e.current) {
            v(function (M) {
              return F({}, M);
            });
            return;
          }
          i();
          var g = d.targetAlign,
            y = d.originAlign,
            S = d.index,
            b = d.offset,
            h = e.current.clientHeight,
            p = !1,
            m = g,
            w = null;
          if (h) {
            for (
              var C = g || y,
                E = 0,
                x = 0,
                R = 0,
                P = Math.min(t.length - 1, S),
                _ = 0;
              _ <= P;
              _ += 1
            ) {
              var j = o(t[_]);
              x = E;
              var L = n.get(j);
              (R = x + (L === void 0 ? r : L)), (E = R);
            }
            for (var D = C === "top" ? b : h - b, z = P; z >= 0; z -= 1) {
              var V = o(t[z]),
                T = n.get(V);
              if (T === void 0) {
                p = !0;
                break;
              }
              if (((D -= T), D <= 0)) break;
            }
            switch (C) {
              case "top":
                w = x - b;
                break;
              case "bottom":
                w = R - h + b;
                break;
              default: {
                var I = e.current.scrollTop,
                  O = I + h;
                x < I ? (m = "top") : R > O && (m = "bottom");
              }
            }
            w !== null && a(w), w !== d.lastTop && (p = !0);
          }
          p &&
            v(
              F(
                F({}, d),
                {},
                { times: d.times + 1, targetAlign: m, lastTop: w }
              )
            );
        }
      },
      [d, e.current]
    ),
    function (g) {
      if (g == null) {
        l();
        return;
      }
      if ((At.cancel(s.current), typeof g == "number")) a(g);
      else if (g && Ie(g) === "object") {
        var y,
          S = g.align;
        "index" in g
          ? (y = g.index)
          : (y = t.findIndex(function (p) {
              return o(p) === g.key;
            }));
        var b = g.offset,
          h = b === void 0 ? 0 : b;
        v({ times: 0, index: y, offset: h, originAlign: S });
      }
    }
  );
}
function N0(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"];
}
var F0 = f.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.rtl,
      o = e.scrollOffset,
      i = e.scrollRange,
      a = e.onStartMove,
      l = e.onStopMove,
      s = e.onScroll,
      u = e.horizontal,
      c = e.spinSize,
      d = e.containerSize,
      v = e.style,
      g = e.thumbStyle,
      y = f.useState(!1),
      S = H(y, 2),
      b = S[0],
      h = S[1],
      p = f.useState(null),
      m = H(p, 2),
      w = m[0],
      C = m[1],
      E = f.useState(null),
      x = H(E, 2),
      R = x[0],
      P = x[1],
      _ = !r,
      j = f.useRef(),
      L = f.useRef(),
      D = f.useState(!1),
      z = H(D, 2),
      V = z[0],
      T = z[1],
      I = f.useRef(),
      O = function () {
        clearTimeout(I.current),
          T(!0),
          (I.current = setTimeout(function () {
            T(!1);
          }, 3e3));
      },
      M = i - d || 0,
      A = d - c || 0,
      $ = f.useMemo(
        function () {
          if (o === 0 || M === 0) return 0;
          var G = o / M;
          return G * A;
        },
        [o, M, A]
      ),
      k = function (U) {
        U.stopPropagation(), U.preventDefault();
      },
      B = f.useRef({ top: $, dragging: b, pageY: w, startTop: R });
    B.current = { top: $, dragging: b, pageY: w, startTop: R };
    var W = function (U) {
      h(!0),
        C(N0(U, u)),
        P(B.current.top),
        a(),
        U.stopPropagation(),
        U.preventDefault();
    };
    f.useEffect(function () {
      var G = function (X) {
          X.preventDefault();
        },
        U = j.current,
        Z = L.current;
      return (
        U.addEventListener("touchstart", G, { passive: !1 }),
        Z.addEventListener("touchstart", W, { passive: !1 }),
        function () {
          U.removeEventListener("touchstart", G),
            Z.removeEventListener("touchstart", W);
        }
      );
    }, []);
    var K = f.useRef();
    K.current = M;
    var se = f.useRef();
    (se.current = A),
      f.useEffect(
        function () {
          if (b) {
            var G,
              U = function (X) {
                var de = B.current,
                  re = de.dragging,
                  ge = de.pageY,
                  Se = de.startTop;
                At.cancel(G);
                var ce = j.current.getBoundingClientRect(),
                  Oe = d / (u ? ce.width : ce.height);
                if (re) {
                  var xe = (N0(X, u) - ge) * Oe,
                    Le = Se;
                  !_ && u ? (Le -= xe) : (Le += xe);
                  var fe = K.current,
                    Y = se.current,
                    Re = Y ? Le / Y : 0,
                    ve = Math.ceil(Re * fe);
                  (ve = Math.max(ve, 0)),
                    (ve = Math.min(ve, fe)),
                    (G = At(function () {
                      s(ve, u);
                    }));
                }
              },
              Z = function () {
                h(!1), l();
              };
            return (
              window.addEventListener("mousemove", U, { passive: !0 }),
              window.addEventListener("touchmove", U, { passive: !0 }),
              window.addEventListener("mouseup", Z, { passive: !0 }),
              window.addEventListener("touchend", Z, { passive: !0 }),
              function () {
                window.removeEventListener("mousemove", U),
                  window.removeEventListener("touchmove", U),
                  window.removeEventListener("mouseup", Z),
                  window.removeEventListener("touchend", Z),
                  At.cancel(G);
              }
            );
          }
        },
        [b]
      ),
      f.useEffect(
        function () {
          return (
            O(),
            function () {
              clearTimeout(I.current);
            }
          );
        },
        [o]
      ),
      f.useImperativeHandle(t, function () {
        return { delayHidden: O };
      });
    var q = "".concat(n, "-scrollbar"),
      oe = { position: "absolute", visibility: V ? null : "hidden" },
      Ce = {
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: 99,
        cursor: "pointer",
        userSelect: "none",
      };
    return (
      u
        ? ((oe.height = 8),
          (oe.left = 0),
          (oe.right = 0),
          (oe.bottom = 0),
          (Ce.height = "100%"),
          (Ce.width = c),
          _ ? (Ce.left = $) : (Ce.right = $))
        : ((oe.width = 8),
          (oe.top = 0),
          (oe.bottom = 0),
          _ ? (oe.right = 0) : (oe.left = 0),
          (Ce.width = "100%"),
          (Ce.height = c),
          (Ce.top = $)),
      f.createElement(
        "div",
        {
          ref: j,
          className: me(
            q,
            N(
              N(
                N({}, "".concat(q, "-horizontal"), u),
                "".concat(q, "-vertical"),
                !u
              ),
              "".concat(q, "-visible"),
              V
            )
          ),
          style: F(F({}, oe), v),
          onMouseDown: k,
          onMouseMove: O,
        },
        f.createElement("div", {
          ref: L,
          className: me(
            "".concat(q, "-thumb"),
            N({}, "".concat(q, "-thumb-moving"), b)
          ),
          style: F(F({}, Ce), g),
          onMouseDown: W,
        })
      )
    );
  }),
  m3 = 20;
function j0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = (e / t) * e;
  return isNaN(n) && (n = 0), (n = Math.max(n, m3)), Math.floor(n);
}
var h3 = [
    "prefixCls",
    "className",
    "height",
    "itemHeight",
    "fullHeight",
    "style",
    "data",
    "children",
    "itemKey",
    "virtual",
    "direction",
    "scrollWidth",
    "component",
    "onScroll",
    "onVirtualScroll",
    "onVisibleChange",
    "innerProps",
    "extraRender",
    "styles",
  ],
  g3 = [],
  y3 = { overflowY: "auto", overflowAnchor: "none" };
function S3(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? "rc-virtual-list" : n,
    o = e.className,
    i = e.height,
    a = e.itemHeight,
    l = e.fullHeight,
    s = l === void 0 ? !0 : l,
    u = e.style,
    c = e.data,
    d = e.children,
    v = e.itemKey,
    g = e.virtual,
    y = e.direction,
    S = e.scrollWidth,
    b = e.component,
    h = b === void 0 ? "div" : b,
    p = e.onScroll,
    m = e.onVirtualScroll,
    w = e.onVisibleChange,
    C = e.innerProps,
    E = e.extraRender,
    x = e.styles,
    R = yt(e, h3),
    P = f.useCallback(
      function (he) {
        return typeof v == "function" ? v(he) : he == null ? void 0 : he[v];
      },
      [v]
    ),
    _ = f3(P),
    j = H(_, 4),
    L = j[0],
    D = j[1],
    z = j[2],
    V = j[3],
    T = !!(g !== !1 && i && a),
    I = f.useMemo(
      function () {
        return Object.values(z.maps).reduce(function (he, we) {
          return he + we;
        }, 0);
      },
      [z.id, z.maps]
    ),
    O = T && c && (Math.max(a * c.length, I) > i || !!S),
    M = y === "rtl",
    A = me(r, N({}, "".concat(r, "-rtl"), M), o),
    $ = c || g3,
    k = f.useRef(),
    B = f.useRef(),
    W = f.useRef(),
    K = f.useState(0),
    se = H(K, 2),
    q = se[0],
    oe = se[1],
    Ce = f.useState(0),
    G = H(Ce, 2),
    U = G[0],
    Z = G[1],
    le = f.useState(!1),
    X = H(le, 2),
    de = X[0],
    re = X[1],
    ge = function () {
      re(!0);
    },
    Se = function () {
      re(!1);
    },
    ce = { getKey: P };
  function Oe(he) {
    oe(function (we) {
      var Me;
      typeof he == "function" ? (Me = he(we)) : (Me = he);
      var it = Ut(Me);
      return (k.current.scrollTop = it), it;
    });
  }
  var xe = f.useRef({ start: 0, end: $.length }),
    Le = f.useRef(),
    fe = l3($, P),
    Y = H(fe, 1),
    Re = Y[0];
  Le.current = Re;
  var ve = f.useMemo(
      function () {
        if (!T)
          return {
            scrollHeight: void 0,
            start: 0,
            end: $.length - 1,
            offset: void 0,
          };
        if (!O) {
          var he;
          return {
            scrollHeight:
              ((he = B.current) === null || he === void 0
                ? void 0
                : he.offsetHeight) || 0,
            start: 0,
            end: $.length - 1,
            offset: void 0,
          };
        }
        for (var we = 0, Me, it, pn, eo = $.length, mn = 0; mn < eo; mn += 1) {
          var to = $[mn],
            Ao = P(to),
            _n = z.get(Ao),
            Er = we + (_n === void 0 ? a : _n);
          Er >= q && Me === void 0 && ((Me = mn), (it = we)),
            Er > q + i && pn === void 0 && (pn = mn),
            (we = Er);
        }
        return (
          Me === void 0 && ((Me = 0), (it = 0), (pn = Math.ceil(i / a))),
          pn === void 0 && (pn = $.length - 1),
          (pn = Math.min(pn + 1, $.length - 1)),
          { scrollHeight: we, start: Me, end: pn, offset: it }
        );
      },
      [O, T, q, $, V, i]
    ),
    He = ve.scrollHeight,
    Fe = ve.start,
    Ae = ve.end,
    De = ve.offset;
  (xe.current.start = Fe), (xe.current.end = Ae);
  var ct = f.useState({ width: 0, height: i }),
    Je = H(ct, 2),
    $e = Je[0],
    Te = Je[1],
    dt = function (we) {
      Te({ width: we.offsetWidth, height: we.offsetHeight });
    },
    et = f.useRef(),
    rt = f.useRef(),
    Ze = f.useMemo(
      function () {
        return j0($e.width, S);
      },
      [$e.width, S]
    ),
    Nt = f.useMemo(
      function () {
        return j0($e.height, He);
      },
      [$e.height, He]
    ),
    st = He - i,
    vt = f.useRef(st);
  vt.current = st;
  function Ut(he) {
    var we = he;
    return (
      Number.isNaN(vt.current) || (we = Math.min(we, vt.current)),
      (we = Math.max(we, 0)),
      we
    );
  }
  var pt = q <= 0,
    Ge = q >= st,
    je = U <= 0,
    Ve = U >= S,
    Pe = Lw(pt, Ge, je, Ve),
    ie = function () {
      return { x: M ? -U : U, y: q };
    },
    Ke = f.useRef(ie()),
    ot = Xt(function (he) {
      if (m) {
        var we = F(F({}, ie()), he);
        (Ke.current.x !== we.x || Ke.current.y !== we.y) &&
          (m(we), (Ke.current = we));
      }
    });
  function J(he, we) {
    var Me = he;
    we
      ? (ni.flushSync(function () {
          Z(Me);
        }),
        ot())
      : Oe(Me);
  }
  function ue(he) {
    var we = he.currentTarget.scrollTop;
    we !== q && Oe(we), p == null || p(he), ot();
  }
  var ae = function (we) {
      var Me = we,
        it = S ? S - $e.width : 0;
      return (Me = Math.max(Me, 0)), (Me = Math.min(Me, it)), Me;
    },
    Ee = Xt(function (he, we) {
      we
        ? (ni.flushSync(function () {
            Z(function (Me) {
              var it = Me + (M ? -he : he);
              return ae(it);
            });
          }),
          ot())
        : Oe(function (Me) {
            var it = Me + he;
            return it;
          });
    }),
    Be = s3(T, pt, Ge, je, Ve, !!S, Ee),
    qe = H(Be, 2),
    Ot = qe[0],
    mt = qe[1];
  d3(T, k, function (he, we, Me) {
    return Pe(he, we, Me)
      ? !1
      : (Ot({
          preventDefault: function () {},
          deltaX: he ? we : 0,
          deltaY: he ? 0 : we,
        }),
        !0);
  }),
    bt(
      function () {
        function he(Me) {
          T && Me.preventDefault();
        }
        var we = k.current;
        return (
          we.addEventListener("wheel", Ot, { passive: !1 }),
          we.addEventListener("DOMMouseScroll", mt, { passive: !0 }),
          we.addEventListener("MozMousePixelScroll", he, { passive: !1 }),
          function () {
            we.removeEventListener("wheel", Ot),
              we.removeEventListener("DOMMouseScroll", mt),
              we.removeEventListener("MozMousePixelScroll", he);
          }
        );
      },
      [T]
    ),
    bt(
      function () {
        if (S) {
          var he = ae(U);
          Z(he), ot({ x: he });
        }
      },
      [$e.width, S]
    );
  var Rt = function () {
      var we, Me;
      (we = et.current) === null || we === void 0 || we.delayHidden(),
        (Me = rt.current) === null || Me === void 0 || Me.delayHidden();
    },
    nt = p3(
      k,
      $,
      z,
      a,
      P,
      function () {
        return D(!0);
      },
      Oe,
      Rt
    );
  f.useImperativeHandle(t, function () {
    return {
      nativeElement: W.current,
      getScrollInfo: ie,
      scrollTo: function (we) {
        function Me(it) {
          return it && Ie(it) === "object" && ("left" in it || "top" in it);
        }
        Me(we) ? (we.left !== void 0 && Z(ae(we.left)), nt(we.top)) : nt(we);
      },
    };
  }),
    bt(
      function () {
        if (w) {
          var he = $.slice(Fe, Ae + 1);
          w(he, $);
        }
      },
      [Fe, Ae, $]
    );
  var Ft = u3($, P, z, a),
    Cn =
      E == null
        ? void 0
        : E({
            start: Fe,
            end: Ae,
            virtual: O,
            offsetX: U,
            offsetY: De,
            rtl: M,
            getSize: Ft,
          }),
    Tt = i3($, Fe, Ae, S, U, L, d, ce),
    Yt = null;
  i &&
    ((Yt = F(N({}, s ? "height" : "maxHeight", i), y3)),
    T &&
      ((Yt.overflowY = "hidden"),
      S && (Yt.overflowX = "hidden"),
      de && (Yt.pointerEvents = "none")));
  var Mn = {};
  return (
    M && (Mn.dir = "rtl"),
    f.createElement(
      "div",
      We(
        {
          ref: W,
          style: F(F({}, u), {}, { position: "relative" }),
          className: A,
        },
        Mn,
        R
      ),
      f.createElement(
        _o,
        { onResize: dt },
        f.createElement(
          h,
          {
            className: "".concat(r, "-holder"),
            style: Yt,
            ref: k,
            onScroll: ue,
            onMouseEnter: Rt,
          },
          f.createElement(
            zw,
            {
              prefixCls: r,
              height: He,
              offsetX: U,
              offsetY: De,
              scrollWidth: S,
              onInnerResize: D,
              ref: B,
              innerProps: C,
              rtl: M,
              extra: Cn,
            },
            Tt
          )
        )
      ),
      O &&
        He > i &&
        f.createElement(F0, {
          ref: et,
          prefixCls: r,
          scrollOffset: q,
          scrollRange: He,
          rtl: M,
          onScroll: J,
          onStartMove: ge,
          onStopMove: Se,
          spinSize: Nt,
          containerSize: $e.height,
          style: x == null ? void 0 : x.verticalScrollBar,
          thumbStyle: x == null ? void 0 : x.verticalScrollBarThumb,
        }),
      O &&
        S > $e.width &&
        f.createElement(F0, {
          ref: rt,
          prefixCls: r,
          scrollOffset: U,
          scrollRange: S,
          rtl: M,
          onScroll: J,
          onStartMove: ge,
          onStopMove: Se,
          spinSize: Ze,
          containerSize: $e.width,
          horizontal: !0,
          style: x == null ? void 0 : x.horizontalScrollBar,
          thumbStyle: x == null ? void 0 : x.horizontalScrollBarThumb,
        })
    )
  );
}
var Dw = f.forwardRef(S3);
Dw.displayName = "List";
function b3() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var w3 = ["disabled", "title", "children", "style", "className"];
function z0(e) {
  return typeof e == "string" || typeof e == "number";
}
var C3 = function (t, n) {
    var r = sA(),
      o = r.prefixCls,
      i = r.id,
      a = r.open,
      l = r.multiple,
      s = r.mode,
      u = r.searchValue,
      c = r.toggleOpen,
      d = r.notFoundContent,
      v = r.onPopupScroll,
      g = f.useContext(hm),
      y = g.maxCount,
      S = g.flattenOptions,
      b = g.onActiveValue,
      h = g.defaultActiveFirstOption,
      p = g.onSelect,
      m = g.menuItemSelectedIcon,
      w = g.rawValues,
      C = g.fieldNames,
      E = g.virtual,
      x = g.direction,
      R = g.listHeight,
      P = g.listItemHeight,
      _ = g.optionRender,
      j = "".concat(o, "-item"),
      L = Ec(
        function () {
          return S;
        },
        [a, S],
        function (G, U) {
          return U[0] && G[1] !== U[1];
        }
      ),
      D = f.useRef(null),
      z = f.useMemo(
        function () {
          return l && Qv(y) && (w == null ? void 0 : w.size) >= y;
        },
        [l, y, w == null ? void 0 : w.size]
      ),
      V = function (U) {
        U.preventDefault();
      },
      T = function (U) {
        var Z;
        (Z = D.current) === null ||
          Z === void 0 ||
          Z.scrollTo(typeof U == "number" ? { index: U } : U);
      },
      I = function (U) {
        for (
          var Z =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1,
            le = L.length,
            X = 0;
          X < le;
          X += 1
        ) {
          var de = (U + X * Z + le) % le,
            re = L[de] || {},
            ge = re.group,
            Se = re.data;
          if (!ge && !(Se != null && Se.disabled) && !z) return de;
        }
        return -1;
      },
      O = f.useState(function () {
        return I(0);
      }),
      M = H(O, 2),
      A = M[0],
      $ = M[1],
      k = function (U) {
        var Z =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        $(U);
        var le = { source: Z ? "keyboard" : "mouse" },
          X = L[U];
        if (!X) {
          b(null, -1, le);
          return;
        }
        b(X.value, U, le);
      };
    f.useEffect(
      function () {
        k(h !== !1 ? I(0) : -1);
      },
      [L.length, u]
    );
    var B = f.useCallback(
      function (G) {
        return w.has(G) && s !== "combobox";
      },
      [s, be(w).toString(), w.size]
    );
    f.useEffect(
      function () {
        var G = setTimeout(function () {
          if (!l && a && w.size === 1) {
            var Z = Array.from(w)[0],
              le = L.findIndex(function (X) {
                var de = X.data;
                return de.value === Z;
              });
            le !== -1 && (k(le), T(le));
          }
        });
        if (a) {
          var U;
          (U = D.current) === null || U === void 0 || U.scrollTo(void 0);
        }
        return function () {
          return clearTimeout(G);
        };
      },
      [a, u]
    );
    var W = function (U) {
      U !== void 0 && p(U, { selected: !w.has(U) }), l || c(!1);
    };
    if (
      (f.useImperativeHandle(n, function () {
        return {
          onKeyDown: function (U) {
            var Z = U.which,
              le = U.ctrlKey;
            switch (Z) {
              case te.N:
              case te.P:
              case te.UP:
              case te.DOWN: {
                var X = 0;
                if (
                  (Z === te.UP
                    ? (X = -1)
                    : Z === te.DOWN
                    ? (X = 1)
                    : b3() &&
                      le &&
                      (Z === te.N ? (X = 1) : Z === te.P && (X = -1)),
                  X !== 0)
                ) {
                  var de = I(A + X, X);
                  T(de), k(de, !0);
                }
                break;
              }
              case te.ENTER: {
                var re,
                  ge = L[A];
                ge &&
                !(
                  ge != null &&
                  (re = ge.data) !== null &&
                  re !== void 0 &&
                  re.disabled
                ) &&
                !z
                  ? W(ge.value)
                  : W(void 0),
                  a && U.preventDefault();
                break;
              }
              case te.ESC:
                c(!1), a && U.stopPropagation();
            }
          },
          onKeyUp: function () {},
          scrollTo: function (U) {
            T(U);
          },
        };
      }),
      L.length === 0)
    )
      return f.createElement(
        "div",
        {
          role: "listbox",
          id: "".concat(i, "_list"),
          className: "".concat(j, "-empty"),
          onMouseDown: V,
        },
        d
      );
    var K = Object.keys(C).map(function (G) {
        return C[G];
      }),
      se = function (U) {
        return U.label;
      };
    function q(G, U) {
      var Z = G.group;
      return {
        role: Z ? "presentation" : "option",
        id: "".concat(i, "_list_").concat(U),
      };
    }
    var oe = function (U) {
        var Z = L[U];
        if (!Z) return null;
        var le = Z.data || {},
          X = le.value,
          de = Z.group,
          re = Al(le, !0),
          ge = se(Z);
        return Z
          ? f.createElement(
              "div",
              We(
                { "aria-label": typeof ge == "string" && !de ? ge : null },
                re,
                { key: U },
                q(Z, U),
                { "aria-selected": B(X) }
              ),
              X
            )
          : null;
      },
      Ce = { role: "listbox", id: "".concat(i, "_list") };
    return f.createElement(
      f.Fragment,
      null,
      E &&
        f.createElement(
          "div",
          We({}, Ce, { style: { height: 0, width: 0, overflow: "hidden" } }),
          oe(A - 1),
          oe(A),
          oe(A + 1)
        ),
      f.createElement(
        Dw,
        {
          itemKey: "key",
          ref: D,
          data: L,
          height: R,
          itemHeight: P,
          fullHeight: !1,
          onMouseDown: V,
          onScroll: v,
          virtual: E,
          direction: x,
          innerProps: E ? null : Ce,
        },
        function (G, U) {
          var Z = G.group,
            le = G.groupOption,
            X = G.data,
            de = G.label,
            re = G.value,
            ge = X.key;
          if (Z) {
            var Se,
              ce =
                (Se = X.title) !== null && Se !== void 0
                  ? Se
                  : z0(de)
                  ? de.toString()
                  : void 0;
            return f.createElement(
              "div",
              {
                className: me(j, "".concat(j, "-group"), X.className),
                title: ce,
              },
              de !== void 0 ? de : ge
            );
          }
          var Oe = X.disabled,
            xe = X.title;
          X.children;
          var Le = X.style,
            fe = X.className,
            Y = yt(X, w3),
            Re = Wl(Y, K),
            ve = B(re),
            He = Oe || (!ve && z),
            Fe = "".concat(j, "-option"),
            Ae = me(
              j,
              Fe,
              fe,
              N(
                N(
                  N(
                    N({}, "".concat(Fe, "-grouped"), le),
                    "".concat(Fe, "-active"),
                    A === U && !He
                  ),
                  "".concat(Fe, "-disabled"),
                  He
                ),
                "".concat(Fe, "-selected"),
                ve
              )
            ),
            De = se(G),
            ct = !m || typeof m == "function" || ve,
            Je = typeof De == "number" ? De : De || re,
            $e = z0(Je) ? Je.toString() : void 0;
          return (
            xe !== void 0 && ($e = xe),
            f.createElement(
              "div",
              We({}, Al(Re), E ? {} : q(G, U), {
                "aria-selected": ve,
                className: Ae,
                title: $e,
                onMouseMove: function () {
                  A === U || He || k(U);
                },
                onClick: function () {
                  He || W(re);
                },
                style: Le,
              }),
              f.createElement(
                "div",
                { className: "".concat(Fe, "-content") },
                typeof _ == "function" ? _(G, { index: U }) : Je
              ),
              f.isValidElement(m) || ve,
              ct &&
                f.createElement(
                  Ac,
                  {
                    className: "".concat(j, "-option-state"),
                    customizeIcon: m,
                    customizeIconProps: {
                      value: re,
                      disabled: He,
                      isSelected: ve,
                    },
                  },
                  ve ? "✓" : null
                )
            )
          );
        }
      )
    );
  },
  x3 = f.forwardRef(C3);
const E3 = function (e, t) {
  var n = f.useRef({ values: new Map(), options: new Map() }),
    r = f.useMemo(
      function () {
        var i = n.current,
          a = i.values,
          l = i.options,
          s = e.map(function (d) {
            if (d.label === void 0) {
              var v;
              return F(
                F({}, d),
                {},
                {
                  label:
                    (v = a.get(d.value)) === null || v === void 0
                      ? void 0
                      : v.label,
                }
              );
            }
            return d;
          }),
          u = new Map(),
          c = new Map();
        return (
          s.forEach(function (d) {
            u.set(d.value, d), c.set(d.value, t.get(d.value) || l.get(d.value));
          }),
          (n.current.values = u),
          (n.current.options = c),
          s
        );
      },
      [e, t]
    ),
    o = f.useCallback(
      function (i) {
        return t.get(i) || n.current.options.get(i);
      },
      [t]
    );
  return [r, o];
};
function zf(e, t) {
  return Nw(e).join("").toUpperCase().includes(t);
}
const O3 = function (e, t, n, r, o) {
  return f.useMemo(
    function () {
      if (!n || r === !1) return e;
      var i = t.options,
        a = t.label,
        l = t.value,
        s = [],
        u = typeof r == "function",
        c = n.toUpperCase(),
        d = u
          ? r
          : function (g, y) {
              return o
                ? zf(y[o], c)
                : y[i]
                ? zf(y[a !== "children" ? a : "label"], c)
                : zf(y[l], c);
            },
        v = u
          ? function (g) {
              return Yv(g);
            }
          : function (g) {
              return g;
            };
      return (
        e.forEach(function (g) {
          if (g[i]) {
            var y = d(n, v(g));
            if (y) s.push(g);
            else {
              var S = g[i].filter(function (b) {
                return d(n, v(b));
              });
              S.length && s.push(F(F({}, g), {}, N({}, i, S)));
            }
            return;
          }
          d(n, v(g)) && s.push(g);
        }),
        s
      );
    },
    [e, r, o, n, t]
  );
};
var L0 = 0,
  R3 = Tn();
function P3() {
  var e;
  return R3 ? ((e = L0), (L0 += 1)) : (e = "TEST_OR_SSR"), e;
}
function I3(e) {
  var t = f.useState(),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return (
    f.useEffect(function () {
      o("rc_select_".concat(P3()));
    }, []),
    e || r
  );
}
var $3 = ["children", "value"],
  T3 = ["children"];
function M3(e) {
  var t = e,
    n = t.key,
    r = t.props,
    o = r.children,
    i = r.value,
    a = yt(r, $3);
  return F({ key: n, value: i !== void 0 ? i : n, children: o }, a);
}
function kw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Ol(e)
    .map(function (n, r) {
      if (!f.isValidElement(n) || !n.type) return null;
      var o = n,
        i = o.type.isSelectOptGroup,
        a = o.key,
        l = o.props,
        s = l.children,
        u = yt(l, T3);
      return t || !i
        ? M3(n)
        : F(
            F(
              {
                key: "__RC_SELECT_GRP__".concat(a === null ? r : a, "__"),
                label: a,
              },
              u
            ),
            {},
            { options: kw(s) }
          );
    })
    .filter(function (n) {
      return n;
    });
}
var _3 = function (t, n, r, o, i) {
  return f.useMemo(
    function () {
      var a = t,
        l = !t;
      l && (a = kw(n));
      var s = new Map(),
        u = new Map(),
        c = function (g, y, S) {
          S && typeof S == "string" && g.set(y[S], y);
        },
        d = function v(g) {
          for (
            var y =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              S = 0;
            S < g.length;
            S += 1
          ) {
            var b = g[S];
            !b[r.options] || y
              ? (s.set(b[r.value], b), c(u, b, r.label), c(u, b, o), c(u, b, i))
              : v(b[r.options], !0);
          }
        };
      return d(a), { options: a, valueOptions: s, labelOptions: u };
    },
    [t, n, r, o, i]
  );
};
function D0(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function () {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var A3 = [
    "id",
    "mode",
    "prefixCls",
    "backfill",
    "fieldNames",
    "inputValue",
    "searchValue",
    "onSearch",
    "autoClearSearchValue",
    "onSelect",
    "onDeselect",
    "dropdownMatchSelectWidth",
    "filterOption",
    "filterSort",
    "optionFilterProp",
    "optionLabelProp",
    "options",
    "optionRender",
    "children",
    "defaultActiveFirstOption",
    "menuItemSelectedIcon",
    "virtual",
    "direction",
    "listHeight",
    "listItemHeight",
    "labelRender",
    "value",
    "defaultValue",
    "labelInValue",
    "onChange",
    "maxCount",
  ],
  N3 = ["inputValue"];
function F3(e) {
  return !e || Ie(e) !== "object";
}
var j3 = f.forwardRef(function (e, t) {
    var n = e.id,
      r = e.mode,
      o = e.prefixCls,
      i = o === void 0 ? "rc-select" : o,
      a = e.backfill,
      l = e.fieldNames,
      s = e.inputValue,
      u = e.searchValue,
      c = e.onSearch,
      d = e.autoClearSearchValue,
      v = d === void 0 ? !0 : d,
      g = e.onSelect,
      y = e.onDeselect,
      S = e.dropdownMatchSelectWidth,
      b = S === void 0 ? !0 : S,
      h = e.filterOption,
      p = e.filterSort,
      m = e.optionFilterProp,
      w = e.optionLabelProp,
      C = e.options,
      E = e.optionRender,
      x = e.children,
      R = e.defaultActiveFirstOption,
      P = e.menuItemSelectedIcon,
      _ = e.virtual,
      j = e.direction,
      L = e.listHeight,
      D = L === void 0 ? 200 : L,
      z = e.listItemHeight,
      V = z === void 0 ? 20 : z,
      T = e.labelRender,
      I = e.value,
      O = e.defaultValue,
      M = e.labelInValue,
      A = e.onChange,
      $ = e.maxCount,
      k = yt(e, A3),
      B = I3(n),
      W = Zv(r),
      K = !!(!C && x),
      se = f.useMemo(
        function () {
          return h === void 0 && r === "combobox" ? !1 : h;
        },
        [h, r]
      ),
      q = f.useMemo(
        function () {
          return jw(l, K);
        },
        [JSON.stringify(l), K]
      ),
      oe = ai("", {
        value: u !== void 0 ? u : s,
        postState: function (ue) {
          return ue || "";
        },
      }),
      Ce = H(oe, 2),
      G = Ce[0],
      U = Ce[1],
      Z = _3(C, x, q, m, w),
      le = Z.valueOptions,
      X = Z.labelOptions,
      de = Z.options,
      re = f.useCallback(
        function (J) {
          var ue = Nw(J);
          return ue.map(function (ae) {
            var Ee, Be, qe, Ot, mt;
            if (F3(ae)) Ee = ae;
            else {
              var Rt;
              (qe = ae.key),
                (Be = ae.label),
                (Ee = (Rt = ae.value) !== null && Rt !== void 0 ? Rt : qe);
            }
            var nt = le.get(Ee);
            if (nt) {
              var Ft;
              Be === void 0 && (Be = nt == null ? void 0 : nt[w || q.label]),
                qe === void 0 &&
                  (qe =
                    (Ft = nt == null ? void 0 : nt.key) !== null &&
                    Ft !== void 0
                      ? Ft
                      : Ee),
                (Ot = nt == null ? void 0 : nt.disabled),
                (mt = nt == null ? void 0 : nt.title);
            }
            return { label: Be, value: Ee, key: qe, disabled: Ot, title: mt };
          });
        },
        [q, w, le]
      ),
      ge = ai(O, { value: I }),
      Se = H(ge, 2),
      ce = Se[0],
      Oe = Se[1],
      xe = f.useMemo(
        function () {
          var J,
            ue = W && ce === null ? [] : ce,
            ae = re(ue);
          return r === "combobox" &&
            PA((J = ae[0]) === null || J === void 0 ? void 0 : J.value)
            ? []
            : ae;
        },
        [ce, re, r, W]
      ),
      Le = E3(xe, le),
      fe = H(Le, 2),
      Y = fe[0],
      Re = fe[1],
      ve = f.useMemo(
        function () {
          if (!r && Y.length === 1) {
            var J = Y[0];
            if (J.value === null && (J.label === null || J.label === void 0))
              return [];
          }
          return Y.map(function (ue) {
            var ae;
            return F(
              F({}, ue),
              {},
              {
                label:
                  (ae = typeof T == "function" ? T(ue) : ue.label) !== null &&
                  ae !== void 0
                    ? ae
                    : ue.value,
              }
            );
          });
        },
        [r, Y, T]
      ),
      He = f.useMemo(
        function () {
          return new Set(
            Y.map(function (J) {
              return J.value;
            })
          );
        },
        [Y]
      );
    f.useEffect(
      function () {
        if (r === "combobox") {
          var J,
            ue = (J = Y[0]) === null || J === void 0 ? void 0 : J.value;
          U(RA(ue) ? String(ue) : "");
        }
      },
      [Y]
    );
    var Fe = D0(function (J, ue) {
        var ae = ue ?? J;
        return N(N({}, q.value, J), q.label, ae);
      }),
      Ae = f.useMemo(
        function () {
          if (r !== "tags") return de;
          var J = be(de),
            ue = function (Ee) {
              return le.has(Ee);
            };
          return (
            be(Y)
              .sort(function (ae, Ee) {
                return ae.value < Ee.value ? -1 : 1;
              })
              .forEach(function (ae) {
                var Ee = ae.value;
                ue(Ee) || J.push(Fe(Ee, ae.label));
              }),
            J
          );
        },
        [Fe, de, le, Y, r]
      ),
      De = O3(Ae, q, G, se, m),
      ct = f.useMemo(
        function () {
          return r !== "tags" ||
            !G ||
            De.some(function (J) {
              return J[m || "value"] === G;
            }) ||
            De.some(function (J) {
              return J[q.value] === G;
            })
            ? De
            : [Fe(G)].concat(be(De));
        },
        [Fe, m, r, De, G, q]
      ),
      Je = f.useMemo(
        function () {
          return p
            ? be(ct).sort(function (J, ue) {
                return p(J, ue, { searchValue: G });
              })
            : ct;
        },
        [ct, p, G]
      ),
      $e = f.useMemo(
        function () {
          return ZA(Je, { fieldNames: q, childrenAsData: K });
        },
        [Je, q, K]
      ),
      Te = function (ue) {
        var ae = re(ue);
        if (
          (Oe(ae),
          A &&
            (ae.length !== Y.length ||
              ae.some(function (qe, Ot) {
                var mt;
                return (
                  ((mt = Y[Ot]) === null || mt === void 0
                    ? void 0
                    : mt.value) !== (qe == null ? void 0 : qe.value)
                );
              })))
        ) {
          var Ee = M
              ? ae
              : ae.map(function (qe) {
                  return qe.value;
                }),
            Be = ae.map(function (qe) {
              return Yv(Re(qe.value));
            });
          A(W ? Ee : Ee[0], W ? Be : Be[0]);
        }
      },
      dt = f.useState(null),
      et = H(dt, 2),
      rt = et[0],
      Ze = et[1],
      Nt = f.useState(0),
      st = H(Nt, 2),
      vt = st[0],
      Ut = st[1],
      pt = R !== void 0 ? R : r !== "combobox",
      Ge = f.useCallback(
        function (J, ue) {
          var ae =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            Ee = ae.source,
            Be = Ee === void 0 ? "keyboard" : Ee;
          Ut(ue),
            a &&
              r === "combobox" &&
              J !== null &&
              Be === "keyboard" &&
              Ze(String(J));
        },
        [a, r]
      ),
      je = function (ue, ae, Ee) {
        var Be = function () {
          var Mn,
            he = Re(ue);
          return [
            M
              ? {
                  label: he == null ? void 0 : he[q.label],
                  value: ue,
                  key:
                    (Mn = he == null ? void 0 : he.key) !== null &&
                    Mn !== void 0
                      ? Mn
                      : ue,
                }
              : ue,
            Yv(he),
          ];
        };
        if (ae && g) {
          var qe = Be(),
            Ot = H(qe, 2),
            mt = Ot[0],
            Rt = Ot[1];
          g(mt, Rt);
        } else if (!ae && y && Ee !== "clear") {
          var nt = Be(),
            Ft = H(nt, 2),
            Cn = Ft[0],
            Tt = Ft[1];
          y(Cn, Tt);
        }
      },
      Ve = D0(function (J, ue) {
        var ae,
          Ee = W ? ue.selected : !0;
        Ee
          ? (ae = W ? [].concat(be(Y), [J]) : [J])
          : (ae = Y.filter(function (Be) {
              return Be.value !== J;
            })),
          Te(ae),
          je(J, Ee),
          r === "combobox" ? Ze("") : (!Zv || v) && (U(""), Ze(""));
      }),
      Pe = function (ue, ae) {
        Te(ue);
        var Ee = ae.type,
          Be = ae.values;
        (Ee === "remove" || Ee === "clear") &&
          Be.forEach(function (qe) {
            je(qe.value, !1, Ee);
          });
      },
      ie = function (ue, ae) {
        if ((U(ue), Ze(null), ae.source === "submit")) {
          var Ee = (ue || "").trim();
          if (Ee) {
            var Be = Array.from(new Set([].concat(be(He), [Ee])));
            Te(Be), je(Ee, !0), U("");
          }
          return;
        }
        ae.source !== "blur" &&
          (r === "combobox" && Te(ue), c == null || c(ue));
      },
      Ke = function (ue) {
        var ae = ue;
        r !== "tags" &&
          (ae = ue
            .map(function (Be) {
              var qe = X.get(Be);
              return qe == null ? void 0 : qe.value;
            })
            .filter(function (Be) {
              return Be !== void 0;
            }));
        var Ee = Array.from(new Set([].concat(be(He), be(ae))));
        Te(Ee),
          Ee.forEach(function (Be) {
            je(Be, !0);
          });
      },
      ot = f.useMemo(
        function () {
          var J = _ !== !1 && b !== !1;
          return F(
            F({}, Z),
            {},
            {
              flattenOptions: $e,
              onActiveValue: Ge,
              defaultActiveFirstOption: pt,
              onSelect: Ve,
              menuItemSelectedIcon: P,
              rawValues: He,
              fieldNames: q,
              virtual: J,
              direction: j,
              listHeight: D,
              listItemHeight: V,
              childrenAsData: K,
              maxCount: $,
              optionRender: E,
            }
          );
        },
        [$, Z, $e, Ge, pt, Ve, P, He, q, _, b, j, D, V, K, E]
      );
    return f.createElement(
      hm.Provider,
      { value: ot },
      f.createElement(
        r3,
        We({}, k, {
          id: B,
          prefixCls: i,
          ref: t,
          omitDomProps: N3,
          mode: r,
          displayValues: ve,
          onDisplayValuesChange: Pe,
          direction: j,
          searchValue: G,
          onSearch: ie,
          autoClearSearchValue: v,
          onSearchSplit: Ke,
          dropdownMatchSelectWidth: b,
          OptionList: x3,
          emptyOptions: !$e.length,
          activeValue: rt,
          activeDescendantId: "".concat(B, "_list_").concat(vt),
        })
      )
    );
  }),
  Sm = j3;
Sm.Option = ym;
Sm.OptGroup = gm;
function Hu(e, t, n) {
  return me({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n,
  });
}
const Nc = (e, t) => t || e,
  z3 = () => {
    const [, e] = _r(),
      n = new tn(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {};
    return f.createElement(
      "svg",
      {
        style: n,
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg",
      },
      f.createElement("title", null, "empty image"),
      f.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        f.createElement(
          "g",
          { transform: "translate(24 31.67)" },
          f.createElement("ellipse", {
            fillOpacity: ".8",
            fill: "#F5F5F7",
            cx: "67.797",
            cy: "106.89",
            rx: "67.797",
            ry: "12.668",
          }),
          f.createElement("path", {
            d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
            fill: "#AEB8C2",
          }),
          f.createElement("path", {
            d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
            fill: "url(#linearGradient-1)",
            transform: "translate(13.56)",
          }),
          f.createElement("path", {
            d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
            fill: "#F5F5F7",
          }),
          f.createElement("path", {
            d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
            fill: "#DCE0E6",
          })
        ),
        f.createElement("path", {
          d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
          fill: "#DCE0E6",
        }),
        f.createElement(
          "g",
          { transform: "translate(149.65 15.383)", fill: "#FFF" },
          f.createElement("ellipse", {
            cx: "20.654",
            cy: "3.167",
            rx: "2.849",
            ry: "2.815",
          }),
          f.createElement("path", {
            d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z",
          })
        )
      )
    );
  },
  L3 = () => {
    const [, e] = _r(),
      {
        colorFill: t,
        colorFillTertiary: n,
        colorFillQuaternary: r,
        colorBgContainer: o,
      } = e,
      {
        borderColor: i,
        shadowColor: a,
        contentColor: l,
      } = f.useMemo(
        () => ({
          borderColor: new tn(t).onBackground(o).toHexShortString(),
          shadowColor: new tn(n).onBackground(o).toHexShortString(),
          contentColor: new tn(r).onBackground(o).toHexShortString(),
        }),
        [t, n, r, o]
      );
    return f.createElement(
      "svg",
      {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg",
      },
      f.createElement("title", null, "Simple Empty"),
      f.createElement(
        "g",
        { transform: "translate(0 1)", fill: "none", fillRule: "evenodd" },
        f.createElement("ellipse", {
          fill: a,
          cx: "32",
          cy: "33",
          rx: "32",
          ry: "7",
        }),
        f.createElement(
          "g",
          { fillRule: "nonzero", stroke: i },
          f.createElement("path", {
            d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z",
          }),
          f.createElement("path", {
            d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
            fill: l,
          })
        )
      )
    );
  },
  D3 = (e) => {
    const {
      componentCls: t,
      margin: n,
      marginXS: r,
      marginXL: o,
      fontSize: i,
      lineHeight: a,
    } = e;
    return {
      [t]: {
        marginInline: r,
        fontSize: i,
        lineHeight: a,
        textAlign: "center",
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: r,
          opacity: e.opacityImage,
          img: { height: "100%" },
          svg: { maxWidth: "100%", height: "100%", margin: "auto" },
        },
        [`${t}-description`]: { color: e.colorTextDescription },
        [`${t}-footer`]: { marginTop: n },
        "&-normal": {
          marginBlock: o,
          color: e.colorTextDescription,
          [`${t}-description`]: { color: e.colorTextDescription },
          [`${t}-image`]: { height: e.emptyImgHeightMD },
        },
        "&-small": {
          marginBlock: r,
          color: e.colorTextDescription,
          [`${t}-image`]: { height: e.emptyImgHeightSM },
        },
      },
    };
  },
  k3 = Kl("Empty", (e) => {
    const { componentCls: t, controlHeightLG: n, calc: r } = e,
      o = dn(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: r(n).mul(2.5).equal(),
        emptyImgHeightMD: n,
        emptyImgHeightSM: r(n).mul(0.875).equal(),
      });
    return [D3(o)];
  });
var B3 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const Bw = f.createElement(z3, null),
  Hw = f.createElement(L3, null),
  Bo = (e) => {
    var {
        className: t,
        rootClassName: n,
        prefixCls: r,
        image: o = Bw,
        description: i,
        children: a,
        imageStyle: l,
        style: s,
      } = e,
      u = B3(e, [
        "className",
        "rootClassName",
        "prefixCls",
        "image",
        "description",
        "children",
        "imageStyle",
        "style",
      ]);
    const { getPrefixCls: c, direction: d, empty: v } = f.useContext(Dt),
      g = c("empty", r),
      [y, S, b] = k3(g),
      [h] = l$("Empty"),
      p = typeof i < "u" ? i : h == null ? void 0 : h.description,
      m = typeof p == "string" ? p : "empty";
    let w = null;
    return (
      typeof o == "string"
        ? (w = f.createElement("img", { alt: m, src: o }))
        : (w = o),
      y(
        f.createElement(
          "div",
          Object.assign(
            {
              className: me(
                S,
                b,
                g,
                v == null ? void 0 : v.className,
                { [`${g}-normal`]: o === Hw, [`${g}-rtl`]: d === "rtl" },
                t,
                n
              ),
              style: Object.assign(
                Object.assign({}, v == null ? void 0 : v.style),
                s
              ),
            },
            u
          ),
          f.createElement("div", { className: `${g}-image`, style: l }, w),
          p && f.createElement("div", { className: `${g}-description` }, p),
          a && f.createElement("div", { className: `${g}-footer` }, a)
        )
      )
    );
  };
Bo.PRESENTED_IMAGE_DEFAULT = Bw;
Bo.PRESENTED_IMAGE_SIMPLE = Hw;
const H3 = (e) => {
    const { componentName: t } = e,
      { getPrefixCls: n } = f.useContext(Dt),
      r = n("empty");
    switch (t) {
      case "Table":
      case "List":
        return ne.createElement(Bo, { image: Bo.PRESENTED_IMAGE_SIMPLE });
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return ne.createElement(Bo, {
          image: Bo.PRESENTED_IMAGE_SIMPLE,
          className: `${r}-small`,
        });
      case "Table.filter":
        return null;
      default:
        return ne.createElement(Bo, null);
    }
  },
  bm = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    var r, o;
    const { variant: i, [e]: a } = f.useContext(Dt),
      l = f.useContext(H_),
      s = a == null ? void 0 : a.variant;
    let u;
    typeof t < "u"
      ? (u = t)
      : n === !1
      ? (u = "borderless")
      : (u =
          (o = (r = l ?? s) !== null && r !== void 0 ? r : i) !== null &&
          o !== void 0
            ? o
            : "outlined");
    const c = b$.includes(u);
    return [u, c];
  },
  V3 = (e) => {
    const n = {
      overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
      htmlRegion: e === "scroll" ? "scroll" : "visible",
      dynamicInset: !0,
    };
    return {
      bottomLeft: Object.assign(Object.assign({}, n), {
        points: ["tl", "bl"],
        offset: [0, 4],
      }),
      bottomRight: Object.assign(Object.assign({}, n), {
        points: ["tr", "br"],
        offset: [0, 4],
      }),
      topLeft: Object.assign(Object.assign({}, n), {
        points: ["bl", "tl"],
        offset: [0, -4],
      }),
      topRight: Object.assign(Object.assign({}, n), {
        points: ["br", "tr"],
        offset: [0, -4],
      }),
    };
  };
function W3(e, t) {
  return e || V3(t);
}
const k0 = (e) => {
    const {
      optionHeight: t,
      optionFontSize: n,
      optionLineHeight: r,
      optionPadding: o,
    } = e;
    return {
      position: "relative",
      display: "block",
      minHeight: t,
      padding: o,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: n,
      lineHeight: r,
      boxSizing: "border-box",
    };
  },
  U3 = (e) => {
    const { antCls: t, componentCls: n } = e,
      r = `${n}-item`,
      o = `&${t}-slide-up-enter${t}-slide-up-enter-active`,
      i = `&${t}-slide-up-appear${t}-slide-up-appear-active`,
      a = `&${t}-slide-up-leave${t}-slide-up-leave-active`,
      l = `${n}-dropdown-placement-`;
    return [
      {
        [`${n}-dropdown`]: Object.assign(Object.assign({}, Ul(e)), {
          position: "absolute",
          top: -9999,
          zIndex: e.zIndexPopup,
          boxSizing: "border-box",
          padding: e.paddingXXS,
          overflow: "hidden",
          fontSize: e.fontSize,
          fontVariant: "initial",
          backgroundColor: e.colorBgElevated,
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary,
          [`
          ${o}${l}bottomLeft,
          ${i}${l}bottomLeft
        `]: { animationName: xw },
          [`
          ${o}${l}topLeft,
          ${i}${l}topLeft,
          ${o}${l}topRight,
          ${i}${l}topRight
        `]: { animationName: Ow },
          [`${a}${l}bottomLeft`]: { animationName: Ew },
          [`
          ${a}${l}topLeft,
          ${a}${l}topRight
        `]: { animationName: Rw },
          "&-hidden": { display: "none" },
          [`${r}`]: Object.assign(Object.assign({}, k0(e)), {
            cursor: "pointer",
            transition: `background ${e.motionDurationSlow} ease`,
            borderRadius: e.borderRadiusSM,
            "&-group": {
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              cursor: "default",
            },
            "&-option": {
              display: "flex",
              "&-content": Object.assign({ flex: "auto" }, Mv),
              "&-state": {
                flex: "none",
                display: "flex",
                alignItems: "center",
              },
              [`&-active:not(${r}-option-disabled)`]: {
                backgroundColor: e.optionActiveBg,
              },
              [`&-selected:not(${r}-option-disabled)`]: {
                color: e.optionSelectedColor,
                fontWeight: e.optionSelectedFontWeight,
                backgroundColor: e.optionSelectedBg,
                [`${r}-option-state`]: { color: e.colorPrimary },
                [`&:has(+ ${r}-option-selected:not(${r}-option-disabled))`]: {
                  borderEndStartRadius: 0,
                  borderEndEndRadius: 0,
                  [`& + ${r}-option-selected:not(${r}-option-disabled)`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0,
                  },
                },
              },
              "&-disabled": {
                [`&${r}-option-selected`]: {
                  backgroundColor: e.colorBgContainerDisabled,
                },
                color: e.colorTextDisabled,
                cursor: "not-allowed",
              },
              "&-grouped": {
                paddingInlineStart: e
                  .calc(e.controlPaddingHorizontal)
                  .mul(2)
                  .equal(),
              },
            },
            "&-empty": Object.assign(Object.assign({}, k0(e)), {
              color: e.colorTextDisabled,
            }),
          }),
          "&-rtl": { direction: "rtl" },
        }),
      },
      w0(e, "slide-up"),
      w0(e, "slide-down"),
      b0(e, "move-up"),
      b0(e, "move-down"),
    ];
  },
  K3 = (e) => {
    const {
        multipleSelectItemHeight: t,
        paddingXXS: n,
        lineWidth: r,
        INTERNAL_FIXED_ITEM_MARGIN: o,
      } = e,
      i = e.max(e.calc(n).sub(r).equal(), 0),
      a = e.max(e.calc(i).sub(o).equal(), 0);
    return {
      basePadding: i,
      containerPadding: a,
      itemHeight: Ne(t),
      itemLineHeight: Ne(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal()),
    };
  },
  G3 = (e) => {
    const { multipleSelectItemHeight: t, selectHeight: n, lineWidth: r } = e;
    return e.calc(n).sub(t).div(2).sub(r).equal();
  },
  q3 = (e) => {
    const {
      componentCls: t,
      iconCls: n,
      borderRadiusSM: r,
      motionDurationSlow: o,
      paddingXS: i,
      multipleItemColorDisabled: a,
      multipleItemBorderColorDisabled: l,
      colorIcon: s,
      colorIconHover: u,
      INTERNAL_FIXED_ITEM_MARGIN: c,
    } = e;
    return {
      [`${t}-selection-overflow`]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex",
        },
        [`${t}-selection-item`]: {
          display: "flex",
          alignSelf: "center",
          flex: "none",
          boxSizing: "border-box",
          maxWidth: "100%",
          marginBlock: c,
          borderRadius: r,
          cursor: "default",
          transition: `font-size ${o}, line-height ${o}, height ${o}`,
          marginInlineEnd: e.calc(c).mul(2).equal(),
          paddingInlineStart: i,
          paddingInlineEnd: e.calc(i).div(2).equal(),
          [`${t}-disabled&`]: {
            color: a,
            borderColor: l,
            cursor: "not-allowed",
          },
          "&-content": {
            display: "inline-block",
            marginInlineEnd: e.calc(i).div(2).equal(),
            overflow: "hidden",
            whiteSpace: "pre",
            textOverflow: "ellipsis",
          },
          "&-remove": Object.assign(Object.assign({}, cm()), {
            display: "inline-flex",
            alignItems: "center",
            color: s,
            fontWeight: "bold",
            fontSize: 10,
            lineHeight: "inherit",
            cursor: "pointer",
            [`> ${n}`]: { verticalAlign: "-0.2em" },
            "&:hover": { color: u },
          }),
        },
      },
    };
  },
  X3 = (e, t) => {
    const { componentCls: n, INTERNAL_FIXED_ITEM_MARGIN: r } = e,
      o = `${n}-selection-overflow`,
      i = e.multipleSelectItemHeight,
      a = G3(e),
      l = t ? `${n}-${t}` : "",
      s = K3(e);
    return {
      [`${n}-multiple${l}`]: Object.assign(Object.assign({}, q3(e)), {
        [`${n}-selector`]: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          height: "100%",
          paddingInline: s.basePadding,
          paddingBlock: s.containerPadding,
          borderRadius: e.borderRadius,
          [`${n}-disabled&`]: {
            background: e.multipleSelectorBgDisabled,
            cursor: "not-allowed",
          },
          "&:after": {
            display: "inline-block",
            width: 0,
            margin: `${Ne(r)} 0`,
            lineHeight: Ne(i),
            visibility: "hidden",
            content: '"\\a0"',
          },
        },
        [`${n}-selection-item`]: {
          height: s.itemHeight,
          lineHeight: Ne(s.itemLineHeight),
        },
        [`${o}-item + ${o}-item`]: {
          [`${n}-selection-search`]: { marginInlineStart: 0 },
        },
        [`${o}-item-suffix`]: { height: "100%" },
        [`${n}-selection-search`]: {
          display: "inline-flex",
          position: "relative",
          maxWidth: "100%",
          marginInlineStart: e
            .calc(e.inputPaddingHorizontalBase)
            .sub(a)
            .equal(),
          "\n          &-input,\n          &-mirror\n        ": {
            height: i,
            fontFamily: e.fontFamily,
            lineHeight: Ne(i),
            transition: `all ${e.motionDurationSlow}`,
          },
          "&-input": { width: "100%", minWidth: 4.1 },
          "&-mirror": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: "auto",
            zIndex: 999,
            whiteSpace: "pre",
            visibility: "hidden",
          },
        },
        [`${n}-selection-placeholder`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: e.inputPaddingHorizontalBase,
          insetInlineEnd: e.inputPaddingHorizontalBase,
          transform: "translateY(-50%)",
          transition: `all ${e.motionDurationSlow}`,
        },
      }),
    };
  };
function Lf(e, t) {
  const { componentCls: n } = e,
    r = t ? `${n}-${t}` : "",
    o = {
      [`${n}-multiple${r}`]: {
        fontSize: e.fontSize,
        [`${n}-selector`]: { [`${n}-show-search&`]: { cursor: "text" } },
        [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
          paddingInlineEnd: e
            .calc(e.fontSizeIcon)
            .add(e.controlPaddingHorizontal)
            .equal(),
        },
      },
    };
  return [X3(e, t), o];
}
const Q3 = (e) => {
  const { componentCls: t } = e,
    n = dn(e, {
      selectHeight: e.controlHeightSM,
      multipleSelectItemHeight: e.multipleItemHeightSM,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    r = dn(e, {
      fontSize: e.fontSizeLG,
      selectHeight: e.controlHeightLG,
      multipleSelectItemHeight: e.multipleItemHeightLG,
      borderRadius: e.borderRadiusLG,
      borderRadiusSM: e.borderRadius,
    });
  return [
    Lf(e),
    Lf(n, "sm"),
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e
            .calc(e.controlPaddingHorizontalSM)
            .sub(e.lineWidth)
            .equal(),
        },
        [`${t}-selection-search`]: { marginInlineStart: 2 },
      },
    },
    Lf(r, "lg"),
  ];
};
function Df(e, t) {
  const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: o } = e,
    i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
    a = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${a}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      [`${n}-selector`]: Object.assign(Object.assign({}, Ul(e, !0)), {
        display: "flex",
        borderRadius: o,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": { width: "100%", WebkitAppearance: "textfield" },
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: Ne(i),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center",
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none",
        },
        [[
          "&:after",
          `${n}-selection-item:empty:after`,
          `${n}-selection-placeholder:empty:after`,
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"',
        },
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: { paddingInlineEnd: e.showArrowPaddingInlineEnd },
      [`&${n}-open ${n}-selection-item`]: { color: e.colorTextPlaceholder },
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${Ne(r)}`,
          [`${n}-selection-search-input`]: { height: i },
          "&:after": { lineHeight: Ne(i) },
        },
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": { display: "none" },
          [`${n}-selection-search`]: { position: "static", width: "100%" },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${Ne(r)}`,
            "&:after": { display: "none" },
          },
        },
      },
    },
  };
}
function Y3(e) {
  const { componentCls: t } = e,
    n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    Df(e),
    Df(
      dn(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      "sm"
    ),
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: { insetInlineStart: n, insetInlineEnd: n },
          [`${t}-selector`]: { padding: `0 ${Ne(n)}` },
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal(),
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal() },
        },
      },
    },
    Df(
      dn(e, {
        controlHeight: e.singleItemHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      "lg"
    ),
  ];
}
const Z3 = (e) => {
    const {
        fontSize: t,
        lineHeight: n,
        lineWidth: r,
        controlHeight: o,
        controlHeightSM: i,
        controlHeightLG: a,
        paddingXXS: l,
        controlPaddingHorizontal: s,
        zIndexPopupBase: u,
        colorText: c,
        fontWeightStrong: d,
        controlItemBgActive: v,
        controlItemBgHover: g,
        colorBgContainer: y,
        colorFillSecondary: S,
        colorBgContainerDisabled: b,
        colorTextDisabled: h,
      } = e,
      p = l * 2,
      m = r * 2,
      w = Math.min(o - p, o - m),
      C = Math.min(i - p, i - m),
      E = Math.min(a - p, a - m);
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
      zIndexPopup: u + 50,
      optionSelectedColor: c,
      optionSelectedFontWeight: d,
      optionSelectedBg: v,
      optionActiveBg: g,
      optionPadding: `${(o - t * n) / 2}px ${s}px`,
      optionFontSize: t,
      optionLineHeight: n,
      optionHeight: o,
      selectorBg: y,
      clearBg: y,
      singleItemHeightLG: a,
      multipleItemBg: S,
      multipleItemBorderColor: "transparent",
      multipleItemHeight: w,
      multipleItemHeightSM: C,
      multipleItemHeightLG: E,
      multipleSelectorBgDisabled: b,
      multipleItemColorDisabled: h,
      multipleItemBorderColorDisabled: "transparent",
      showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
    };
  },
  Vw = (e, t) => {
    const { componentCls: n, antCls: r, controlOutlineWidth: o } = e;
    return {
      [`&:not(${n}-customize-input) ${n}-selector`]: {
        border: `${Ne(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
        background: e.selectorBg,
      },
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]:
        {
          [`&:hover ${n}-selector`]: { borderColor: t.hoverBorderHover },
          [`${n}-focused& ${n}-selector`]: {
            borderColor: t.activeBorderColor,
            boxShadow: `0 0 0 ${Ne(o)} ${t.activeShadowColor}`,
            outline: 0,
          },
        },
    };
  },
  B0 = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Vw(e, t)),
  }),
  J3 = (e) => ({
    "&-outlined": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Vw(e, {
              borderColor: e.colorBorder,
              hoverBorderHover: e.colorPrimaryHover,
              activeBorderColor: e.colorPrimary,
              activeShadowColor: e.controlOutline,
            })
          ),
          B0(e, {
            status: "error",
            borderColor: e.colorError,
            hoverBorderHover: e.colorErrorHover,
            activeBorderColor: e.colorError,
            activeShadowColor: e.colorErrorOutline,
          })
        ),
        B0(e, {
          status: "warning",
          borderColor: e.colorWarning,
          hoverBorderHover: e.colorWarningHover,
          activeBorderColor: e.colorWarning,
          activeShadowColor: e.colorWarningOutline,
        })
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.multipleItemBg,
          border: `${Ne(e.lineWidth)} ${e.lineType} ${
            e.multipleItemBorderColor
          }`,
        },
      }
    ),
  }),
  Ww = (e, t) => {
    const { componentCls: n, antCls: r } = e;
    return {
      [`&:not(${n}-customize-input) ${n}-selector`]: {
        background: t.bg,
        border: `${Ne(e.lineWidth)} ${e.lineType} transparent`,
        color: t.color,
      },
      [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]:
        {
          [`&:hover ${n}-selector`]: { background: t.hoverBg },
          [`${n}-focused& ${n}-selector`]: {
            background: e.selectorBg,
            borderColor: t.activeBorderColor,
            outline: 0,
          },
        },
    };
  },
  H0 = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Ww(e, t)),
  }),
  eN = (e) => ({
    "&-filled": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Ww(e, {
              bg: e.colorFillTertiary,
              hoverBg: e.colorFillSecondary,
              activeBorderColor: e.colorPrimary,
              color: e.colorText,
            })
          ),
          H0(e, {
            status: "error",
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            color: e.colorError,
          })
        ),
        H0(e, {
          status: "warning",
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          color: e.colorWarning,
        })
      ),
      {
        [`&${e.componentCls}-disabled`]: {
          [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
            {
              borderColor: e.colorBorder,
              background: e.colorBgContainerDisabled,
              color: e.colorTextDisabled,
            },
        },
        [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
          background: e.colorBgContainer,
          border: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
        },
      }
    ),
  }),
  tN = (e) => ({
    "&-borderless": {
      [`${e.componentCls}-selector`]: {
        background: "transparent",
        borderColor: "transparent",
      },
      [`&${e.componentCls}-disabled`]: {
        [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]:
          { color: e.colorTextDisabled },
      },
      [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
        background: e.multipleItemBg,
        border: `${Ne(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
      },
      [`&${e.componentCls}-status-error`]: {
        [`${e.componentCls}-selection-item`]: { color: e.colorError },
      },
      [`&${e.componentCls}-status-warning`]: {
        [`${e.componentCls}-selection-item`]: { color: e.colorWarning },
      },
    },
  }),
  nN = (e) => ({
    [e.componentCls]: Object.assign(
      Object.assign(Object.assign({}, J3(e)), eN(e)),
      tN(e)
    ),
  }),
  rN = (e) => {
    const { componentCls: t } = e;
    return {
      position: "relative",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: "pointer" },
      [`${t}-show-search&`]: {
        cursor: "text",
        input: { cursor: "auto", color: "inherit", height: "100%" },
      },
      [`${t}-disabled&`]: {
        cursor: "not-allowed",
        input: { cursor: "not-allowed" },
      },
    };
  },
  oN = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        appearance: "none",
        fontFamily: "inherit",
        "&::-webkit-search-cancel-button": {
          display: "none",
          "-webkit-appearance": "none",
        },
      },
    };
  },
  iN = (e) => {
    const {
      antCls: t,
      componentCls: n,
      inputPaddingHorizontalBase: r,
      iconCls: o,
    } = e;
    return {
      [n]: Object.assign(Object.assign({}, Ul(e)), {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(
          Object.assign({}, rN(e)),
          oN(e)
        ),
        [`${n}-selection-item`]: Object.assign(
          Object.assign(
            {
              flex: 1,
              fontWeight: "normal",
              position: "relative",
              userSelect: "none",
            },
            Mv
          ),
          { [`> ${t}-typography`]: { display: "inline" } }
        ),
        [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, Mv), {
          flex: 1,
          color: e.colorTextPlaceholder,
          pointerEvents: "none",
        }),
        [`${n}-arrow`]: Object.assign(Object.assign({}, cm()), {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: r,
          height: e.fontSizeIcon,
          marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          lineHeight: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          transition: `opacity ${e.motionDurationSlow} ease`,
          [o]: {
            verticalAlign: "top",
            transition: `transform ${e.motionDurationSlow}`,
            "> svg": { verticalAlign: "top" },
            [`&:not(${n}-suffix)`]: { pointerEvents: "auto" },
          },
          [`${n}-disabled &`]: { cursor: "not-allowed" },
          "> *:not(:last-child)": { marginInlineEnd: 8 },
        }),
        [`${n}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: r,
          zIndex: 1,
          display: "inline-block",
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
          color: e.colorTextQuaternary,
          fontSize: e.fontSizeIcon,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          cursor: "pointer",
          opacity: 0,
          transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
          textRendering: "auto",
          "&:before": { display: "block" },
          "&:hover": { color: e.colorTextTertiary },
        },
        "&:hover": {
          [`${n}-clear`]: { opacity: 1 },
          [`${n}-arrow:not(:last-child)`]: { opacity: 0 },
        },
      }),
      [`${n}-has-feedback`]: {
        [`${n}-clear`]: {
          insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal(),
        },
      },
    };
  },
  aN = (e) => {
    const { componentCls: t } = e;
    return [
      { [t]: { [`&${t}-in-form-item`]: { width: "100%" } } },
      iN(e),
      Y3(e),
      Q3(e),
      U3(e),
      { [`${t}-rtl`]: { direction: "rtl" } },
      pm(e, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` }),
    ];
  },
  lN = Kl(
    "Select",
    (e, t) => {
      let { rootPrefixCls: n } = t;
      const r = dn(e, {
        rootPrefixCls: n,
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      });
      return [aN(r), nN(r)];
    },
    Z3,
    { unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } }
  );
function sN(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: o,
    loading: i,
    multiple: a,
    hasFeedback: l,
    prefixCls: s,
    showSuffixIcon: u,
    feedbackIcon: c,
    showArrow: d,
    componentName: v,
  } = e;
  const g = n ?? f.createElement(nb, null),
    y = (p) =>
      t === null && !l && !d
        ? null
        : f.createElement(f.Fragment, null, u !== !1 && p, l && c);
  let S = null;
  if (t !== void 0) S = y(t);
  else if (i) S = y(f.createElement(ob, { spin: !0 }));
  else {
    const p = `${s}-suffix`;
    S = (m) => {
      let { open: w, showSearch: C } = m;
      return y(
        w && C
          ? f.createElement(ib, { className: p })
          : f.createElement(sP, { className: p })
      );
    };
  }
  let b = null;
  r !== void 0 ? (b = r) : a ? (b = f.createElement(tP, null)) : (b = null);
  let h = null;
  return (
    o !== void 0 ? (h = o) : (h = f.createElement(rb, null)),
    { clearIcon: g, suffixIcon: S, itemIcon: b, removeIcon: h }
  );
}
function uN(e, t) {
  return t !== void 0 ? t : e !== null;
}
var cN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const Uw = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  fN = (e, t) => {
    var n;
    const {
        prefixCls: r,
        bordered: o,
        className: i,
        rootClassName: a,
        getPopupContainer: l,
        popupClassName: s,
        dropdownClassName: u,
        listHeight: c = 256,
        placement: d,
        listItemHeight: v,
        size: g,
        disabled: y,
        notFoundContent: S,
        status: b,
        builtinPlacements: h,
        dropdownMatchSelectWidth: p,
        popupMatchSelectWidth: m,
        direction: w,
        style: C,
        allowClear: E,
        variant: x,
        dropdownStyle: R,
        transitionName: P,
        tagRender: _,
        maxCount: j,
      } = e,
      L = cN(e, [
        "prefixCls",
        "bordered",
        "className",
        "rootClassName",
        "getPopupContainer",
        "popupClassName",
        "dropdownClassName",
        "listHeight",
        "placement",
        "listItemHeight",
        "size",
        "disabled",
        "notFoundContent",
        "status",
        "builtinPlacements",
        "dropdownMatchSelectWidth",
        "popupMatchSelectWidth",
        "direction",
        "style",
        "allowClear",
        "variant",
        "dropdownStyle",
        "transitionName",
        "tagRender",
        "maxCount",
      ]),
      {
        getPopupContainer: D,
        getPrefixCls: z,
        renderEmpty: V,
        direction: T,
        virtual: I,
        popupMatchSelectWidth: O,
        popupOverflow: M,
        select: A,
      } = f.useContext(Dt),
      [, $] = _r(),
      k = v ?? ($ == null ? void 0 : $.controlHeight),
      B = z("select", r),
      W = z(),
      K = w ?? T,
      { compactSize: se, compactItemClassnames: q } = _c(B, K),
      [oe, Ce] = bm("select", x, o),
      G = Tc(B),
      [U, Z, le] = lN(B, G),
      X = f.useMemo(() => {
        const { mode: rt } = e;
        if (rt !== "combobox") return rt === Uw ? "combobox" : rt;
      }, [e.mode]),
      de = X === "multiple" || X === "tags",
      re = uN(e.suffixIcon, e.showArrow),
      ge = (n = m ?? p) !== null && n !== void 0 ? n : O,
      {
        status: Se,
        hasFeedback: ce,
        isFormItemInput: Oe,
        feedbackIcon: xe,
      } = f.useContext(Yr),
      Le = Nc(Se, b);
    let fe;
    S !== void 0
      ? (fe = S)
      : X === "combobox"
      ? (fe = null)
      : (fe =
          (V == null ? void 0 : V("Select")) ||
          f.createElement(H3, { componentName: "Select" }));
    const {
        suffixIcon: Y,
        itemIcon: Re,
        removeIcon: ve,
        clearIcon: He,
      } = sN(
        Object.assign(Object.assign({}, L), {
          multiple: de,
          hasFeedback: ce,
          feedbackIcon: xe,
          showSuffixIcon: re,
          prefixCls: B,
          componentName: "Select",
        })
      ),
      Fe = E === !0 ? { clearIcon: He } : E,
      Ae = Wl(L, ["suffixIcon", "itemIcon"]),
      De = me(s || u, { [`${B}-dropdown-${K}`]: K === "rtl" }, a, le, G, Z),
      ct = ma((rt) => {
        var Ze;
        return (Ze = g ?? se) !== null && Ze !== void 0 ? Ze : rt;
      }),
      Je = f.useContext(ii),
      $e = y ?? Je,
      Te = me(
        {
          [`${B}-lg`]: ct === "large",
          [`${B}-sm`]: ct === "small",
          [`${B}-rtl`]: K === "rtl",
          [`${B}-${oe}`]: Ce,
          [`${B}-in-form-item`]: Oe,
        },
        Hu(B, Le, ce),
        q,
        A == null ? void 0 : A.className,
        i,
        a,
        le,
        G,
        Z
      ),
      dt = f.useMemo(
        () => (d !== void 0 ? d : K === "rtl" ? "bottomRight" : "bottomLeft"),
        [d, K]
      ),
      [et] = kT("SelectLike", R == null ? void 0 : R.zIndex);
    return U(
      f.createElement(
        Sm,
        Object.assign(
          { ref: t, virtual: I, showSearch: A == null ? void 0 : A.showSearch },
          Ae,
          {
            style: Object.assign(
              Object.assign({}, A == null ? void 0 : A.style),
              C
            ),
            dropdownMatchSelectWidth: ge,
            transitionName: YT(W, "slide-up", P),
            builtinPlacements: W3(h, M),
            listHeight: c,
            listItemHeight: k,
            mode: X,
            prefixCls: B,
            placement: dt,
            direction: K,
            suffixIcon: Y,
            menuItemSelectedIcon: Re,
            removeIcon: ve,
            allowClear: Fe,
            notFoundContent: fe,
            className: Te,
            getPopupContainer: l || D,
            dropdownClassName: De,
            disabled: $e,
            dropdownStyle: Object.assign(Object.assign({}, R), { zIndex: et }),
            maxCount: de ? j : void 0,
            tagRender: de ? _ : void 0,
          }
        )
      )
    );
  },
  ha = f.forwardRef(fN),
  dN = aA(ha);
ha.SECRET_COMBOBOX_MODE_DO_NOT_USE = Uw;
ha.Option = ym;
ha.OptGroup = gm;
ha._InternalPanelDoNotUseOrYouWillBeFired = dN;
function Kw(e) {
  return dn(e, { inputAffixPadding: e.paddingXXS });
}
const Gw = (e) => {
    const {
      controlHeight: t,
      fontSize: n,
      lineHeight: r,
      lineWidth: o,
      controlHeightSM: i,
      controlHeightLG: a,
      fontSizeLG: l,
      lineHeightLG: s,
      paddingSM: u,
      controlPaddingHorizontalSM: c,
      controlPaddingHorizontal: d,
      colorFillAlter: v,
      colorPrimaryHover: g,
      colorPrimary: y,
      controlOutlineWidth: S,
      controlOutline: b,
      colorErrorOutline: h,
      colorWarningOutline: p,
      colorBgContainer: m,
    } = e;
    return {
      paddingBlock: Math.max(Math.round(((t - n * r) / 2) * 10) / 10 - o, 0),
      paddingBlockSM: Math.max(Math.round(((i - n * r) / 2) * 10) / 10 - o, 0),
      paddingBlockLG: Math.ceil(((a - l * s) / 2) * 10) / 10 - o,
      paddingInline: u - o,
      paddingInlineSM: c - o,
      paddingInlineLG: d - o,
      addonBg: v,
      activeBorderColor: y,
      hoverBorderColor: g,
      activeShadow: `0 0 0 ${S}px ${b}`,
      errorActiveShadow: `0 0 0 ${S}px ${h}`,
      warningActiveShadow: `0 0 0 ${S}px ${p}`,
      hoverBg: m,
      activeBg: m,
      inputFontSize: n,
      inputFontSizeLG: l,
      inputFontSizeSM: n,
    };
  },
  vN = (e) => ({ borderColor: e.hoverBorderColor, backgroundColor: e.hoverBg }),
  wm = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 1,
    "input[disabled], textarea[disabled]": { cursor: "not-allowed" },
    "&:hover:not([disabled])": Object.assign(
      {},
      vN(
        dn(e, {
          hoverBorderColor: e.colorBorder,
          hoverBg: e.colorBgContainerDisabled,
        })
      )
    ),
  }),
  qw = (e, t) => ({
    background: e.colorBgContainer,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: t.borderColor,
    "&:hover": { borderColor: t.hoverBorderColor, backgroundColor: e.hoverBg },
    "&:focus, &:focus-within": {
      borderColor: t.activeBorderColor,
      boxShadow: t.activeShadow,
      outline: 0,
      backgroundColor: e.activeBg,
    },
  }),
  V0 = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, qw(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
    [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
      borderColor: t.borderColor,
    },
  }),
  pN = (e, t) => ({
    "&-outlined": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              qw(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.hoverBorderColor,
                activeBorderColor: e.activeBorderColor,
                activeShadow: e.activeShadow,
              })
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                wm(e)
              ),
            }
          ),
          V0(e, {
            status: "error",
            borderColor: e.colorError,
            hoverBorderColor: e.colorErrorBorderHover,
            activeBorderColor: e.colorError,
            activeShadow: e.errorActiveShadow,
            affixColor: e.colorError,
          })
        ),
        V0(e, {
          status: "warning",
          borderColor: e.colorWarning,
          hoverBorderColor: e.colorWarningBorderHover,
          activeBorderColor: e.colorWarning,
          activeShadow: e.warningActiveShadow,
          affixColor: e.colorWarning,
        })
      ),
      t
    ),
  }),
  W0 = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        borderColor: t.addonBorderColor,
        color: t.addonColor,
      },
    },
  }),
  mN = (e) => ({
    "&-outlined": Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              "&-addon": {
                background: e.addonBg,
                border: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              },
              "&-addon:first-child": { borderInlineEnd: 0 },
              "&-addon:last-child": { borderInlineStart: 0 },
            },
          },
          W0(e, {
            status: "error",
            addonBorderColor: e.colorError,
            addonColor: e.colorErrorText,
          })
        ),
        W0(e, {
          status: "warning",
          addonBorderColor: e.colorWarning,
          addonColor: e.colorWarningText,
        })
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group-addon`]: Object.assign({}, wm(e)),
        },
      }
    ),
  }),
  hN = (e, t) => {
    const { componentCls: n } = e;
    return {
      "&-borderless": Object.assign(
        {
          background: "transparent",
          border: "none",
          "&:focus, &:focus-within": { outline: "none" },
          [`&${n}-disabled, &[disabled]`]: { color: e.colorTextDisabled },
          [`&${n}-status-error`]: {
            "&, & input, & textarea": { color: e.colorError },
          },
          [`&${n}-status-warning`]: {
            "&, & input, & textarea": { color: e.colorWarning },
          },
        },
        t
      ),
    };
  },
  Xw = (e, t) => ({
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: t == null ? void 0 : t.inputColor,
    },
    "&:hover": { background: t.hoverBg },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg,
    },
  }),
  U0 = (e, t) => ({
    [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]:
      Object.assign(Object.assign({}, Xw(e, t)), {
        [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
          color: t.affixColor,
        },
      }),
  }),
  gN = (e, t) => ({
    "&-filled": Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {},
              Xw(e, {
                bg: e.colorFillTertiary,
                hoverBg: e.colorFillSecondary,
                activeBorderColor: e.activeBorderColor,
              })
            ),
            {
              [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign(
                {},
                wm(e)
              ),
            }
          ),
          U0(e, {
            status: "error",
            bg: e.colorErrorBg,
            hoverBg: e.colorErrorBgHover,
            activeBorderColor: e.colorError,
            inputColor: e.colorErrorText,
            affixColor: e.colorError,
          })
        ),
        U0(e, {
          status: "warning",
          bg: e.colorWarningBg,
          hoverBg: e.colorWarningBgHover,
          activeBorderColor: e.colorWarning,
          inputColor: e.colorWarningText,
          affixColor: e.colorWarning,
        })
      ),
      t
    ),
  }),
  K0 = (e, t) => ({
    [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
      [`${e.componentCls}-group-addon`]: {
        background: t.addonBg,
        color: t.addonColor,
      },
    },
  }),
  yN = (e) => ({
    "&-filled": Object.assign(
      Object.assign(
        Object.assign(
          {
            [`${e.componentCls}-group`]: {
              "&-addon": { background: e.colorFillTertiary },
              [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
                "&:not(:first-child)": {
                  borderInlineStart: `${Ne(e.lineWidth)} ${e.lineType} ${
                    e.colorSplit
                  }`,
                },
                "&:not(:last-child)": {
                  borderInlineEnd: `${Ne(e.lineWidth)} ${e.lineType} ${
                    e.colorSplit
                  }`,
                },
              },
            },
          },
          K0(e, {
            status: "error",
            addonBg: e.colorErrorBg,
            addonColor: e.colorErrorText,
          })
        ),
        K0(e, {
          status: "warning",
          addonBg: e.colorWarningBg,
          addonColor: e.colorWarningText,
        })
      ),
      {
        [`&${e.componentCls}-group-wrapper-disabled`]: {
          [`${e.componentCls}-group`]: {
            "&-addon": {
              background: e.colorFillTertiary,
              color: e.colorTextDisabled,
            },
            "&-addon:first-child": {
              borderInlineStart: `${Ne(e.lineWidth)} ${e.lineType} ${
                e.colorBorder
              }`,
              borderTop: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
            "&-addon:last-child": {
              borderInlineEnd: `${Ne(e.lineWidth)} ${e.lineType} ${
                e.colorBorder
              }`,
              borderTop: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderBottom: `${Ne(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            },
          },
        },
      }
    ),
  }),
  SN = (e) => ({
    "&::-moz-placeholder": { opacity: 1 },
    "&::placeholder": { color: e, userSelect: "none" },
    "&:placeholder-shown": { textOverflow: "ellipsis" },
  }),
  Qw = (e) => {
    const {
      paddingBlockLG: t,
      lineHeightLG: n,
      borderRadiusLG: r,
      paddingInlineLG: o,
    } = e;
    return {
      padding: `${Ne(t)} ${Ne(o)}`,
      fontSize: e.inputFontSizeLG,
      lineHeight: n,
      borderRadius: r,
    };
  },
  Yw = (e) => ({
    padding: `${Ne(e.paddingBlockSM)} ${Ne(e.paddingInlineSM)}`,
    fontSize: e.inputFontSizeSM,
    borderRadius: e.borderRadiusSM,
  }),
  Zw = (e) =>
    Object.assign(
      Object.assign(
        {
          position: "relative",
          display: "inline-block",
          width: "100%",
          minWidth: 0,
          padding: `${Ne(e.paddingBlock)} ${Ne(e.paddingInline)}`,
          color: e.colorText,
          fontSize: e.inputFontSize,
          lineHeight: e.lineHeight,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        SN(e.colorTextPlaceholder)
      ),
      {
        "textarea&": {
          maxWidth: "100%",
          height: "auto",
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: "bottom",
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: "vertical",
        },
        "&-lg": Object.assign({}, Qw(e)),
        "&-sm": Object.assign({}, Yw(e)),
        "&-rtl, &-textarea-rtl": { direction: "rtl" },
      }
    ),
  bN = (e) => {
    const { componentCls: t, antCls: n } = e;
    return {
      position: "relative",
      display: "table",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      "&[class*='col-']": {
        paddingInlineEnd: e.paddingXS,
        "&:last-child": { paddingInlineEnd: 0 },
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Qw(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Yw(e)),
      [`&-lg ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightLG,
      },
      [`&-sm ${n}-select-single ${n}-select-selector`]: {
        height: e.controlHeightSM,
      },
      [`> ${t}`]: {
        display: "table-cell",
        "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
      },
      [`${t}-group`]: {
        "&-addon, &-wrap": {
          display: "table-cell",
          width: 1,
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
        },
        "&-wrap > *": { display: "block !important" },
        "&-addon": {
          position: "relative",
          padding: `0 ${Ne(e.paddingInline)}`,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.inputFontSize,
          textAlign: "center",
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `${Ne(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${Ne(
              e.calc(e.paddingInline).mul(-1).equal()
            )}`,
            [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]:
              {
                [`${n}-select-selector`]: {
                  backgroundColor: "inherit",
                  border: `${Ne(e.lineWidth)} ${e.lineType} transparent`,
                  boxShadow: "none",
                },
              },
            "&-open, &-focused": {
              [`${n}-select-selector`]: { color: e.colorPrimary },
            },
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px ${Ne(e.calc(e.paddingInline).mul(-1).equal())}`,
            backgroundColor: "transparent",
            [`${n}-cascader-input`]: {
              textAlign: "start",
              border: 0,
              boxShadow: "none",
            },
          },
        },
      },
      [`${t}`]: {
        width: "100%",
        marginBottom: 0,
        textAlign: "inherit",
        "&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
        "&:hover": {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        [`&:not(:last-child) ${t}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${t}-affix-wrapper`]: {
        "&:not(:last-child)": {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${t}-group-compact`]: Object.assign(
        Object.assign({ display: "block" }, W$()),
        {
          [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
            "&:not(:first-child):not(:last-child)": {
              borderInlineEndWidth: e.lineWidth,
              "&:hover, &:focus": { zIndex: 1 },
            },
          },
          "& > *": {
            display: "inline-flex",
            float: "none",
            verticalAlign: "top",
            borderRadius: 0,
          },
          [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: { display: "inline-flex" },
          "& > *:not(:last-child)": {
            marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
            borderInlineEndWidth: e.lineWidth,
          },
          [`${t}`]: { float: "none" },
          [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderRadius: 0,
            "&:hover, &:focus": { zIndex: 1 },
          },
          [`& > ${n}-select-focused`]: { zIndex: 1 },
          [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
          [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
          [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
            borderInlineEndWidth: e.lineWidth,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
          },
          [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: "top" },
          [`${t}-group-wrapper + ${t}-group-wrapper`]: {
            marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
            [`${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`${t}-group-wrapper:not(:last-child)`]: {
            [`&${t}-search > ${t}-group`]: {
              [`& > ${t}-group-addon > ${t}-search-button`]: {
                borderRadius: 0,
              },
              [`& > ${t}`]: {
                borderStartStartRadius: e.borderRadius,
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                borderEndStartRadius: e.borderRadius,
              },
            },
          },
        }
      ),
    };
  },
  wN = (e) => {
    const { componentCls: t, controlHeightSM: n, lineWidth: r, calc: o } = e,
      a = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(Object.assign({}, Ul(e)), Zw(e)),
              pN(e)
            ),
            gN(e)
          ),
          hN(e)
        ),
        {
          '&[type="color"]': {
            height: e.controlHeight,
            [`&${t}-lg`]: { height: e.controlHeightLG },
            [`&${t}-sm`]: { height: n, paddingTop: a, paddingBottom: a },
          },
          '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
            { "-webkit-appearance": "none" },
        }
      ),
    };
  },
  CN = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "&:hover": { color: e.colorTextTertiary },
        "&:active": { color: e.colorText },
        "&-hidden": { visibility: "hidden" },
        "&-has-suffix": { margin: `0 ${Ne(e.inputAffixPadding)}` },
      },
    };
  },
  xN = (e) => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: r,
      motionDurationSlow: o,
      colorIcon: i,
      colorIconHover: a,
      iconCls: l,
    } = e;
    return {
      [`${t}-affix-wrapper`]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, Zw(e)), {
            display: "inline-flex",
            [`&:not(${t}-disabled):hover`]: {
              zIndex: 1,
              [`${t}-search-with-button &`]: { zIndex: 0 },
            },
            "&-focused, &:focus": { zIndex: 1 },
            [`> input${t}`]: { padding: 0 },
            [`> input${t}, > textarea${t}`]: {
              fontSize: "inherit",
              border: "none",
              borderRadius: 0,
              outline: "none",
              background: "transparent",
              color: "inherit",
              "&::-ms-reveal": { display: "none" },
              "&:focus": { boxShadow: "none !important" },
            },
            "&::before": {
              display: "inline-block",
              width: 0,
              visibility: "hidden",
              content: '"\\a0"',
            },
            [`${t}`]: {
              "&-prefix, &-suffix": {
                display: "flex",
                flex: "none",
                alignItems: "center",
                "> *:not(:last-child)": { marginInlineEnd: e.paddingXS },
              },
              "&-show-count-suffix": { color: r },
              "&-show-count-has-suffix": { marginInlineEnd: e.paddingXXS },
              "&-prefix": { marginInlineEnd: n },
              "&-suffix": { marginInlineStart: n },
            },
          }),
          CN(e)
        ),
        {
          [`${l}${t}-password-icon`]: {
            color: i,
            cursor: "pointer",
            transition: `all ${o}`,
            "&:hover": { color: a },
          },
        }
      ),
    };
  },
  EN = (e) => {
    const { componentCls: t, borderRadiusLG: n, borderRadiusSM: r } = e;
    return {
      [`${t}-group`]: Object.assign(
        Object.assign(Object.assign({}, Ul(e)), bN(e)),
        {
          "&-rtl": { direction: "rtl" },
          "&-wrapper": Object.assign(
            Object.assign(
              Object.assign(
                {
                  display: "inline-block",
                  width: "100%",
                  textAlign: "start",
                  verticalAlign: "top",
                  "&-rtl": { direction: "rtl" },
                  "&-lg": {
                    [`${t}-group-addon`]: {
                      borderRadius: n,
                      fontSize: e.inputFontSizeLG,
                    },
                  },
                  "&-sm": { [`${t}-group-addon`]: { borderRadius: r } },
                },
                mN(e)
              ),
              yN(e)
            ),
            {
              [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]:
                { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } },
              [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
              [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                [`${t}, ${t}-group-addon`]: {
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                },
              },
              [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
                [`${t}-affix-wrapper`]: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              },
            }
          ),
        }
      ),
    };
  },
  ON = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-search`;
    return {
      [r]: {
        [`${t}`]: {
          "&:hover, &:focus": {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover,
            },
          },
        },
        [`${t}-affix-wrapper`]: { borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal() },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${r}-button`]: {
              marginInlineEnd: -1,
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
              boxShadow: "none",
            },
            [`${r}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              "&:hover": { color: e.colorPrimaryHover },
              "&:active": { color: e.colorPrimaryActive },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0,
              },
            },
          },
        },
        [`${r}-button`]: {
          height: e.controlHeight,
          "&:hover, &:focus": { zIndex: 1 },
        },
        [`&-large ${r}-button`]: { height: e.controlHeightLG },
        [`&-small ${r}-button`]: { height: e.controlHeightSM },
        "&-rtl": { direction: "rtl" },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: {
                marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
                borderRadius: 0,
              },
            },
          },
          [`&:not(${t}-compact-first-item)`]: {
            [`${t},${t}-affix-wrapper`]: { borderRadius: 0 },
          },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { "&:hover, &:focus, &:active": { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    };
  },
  RN = (e) => {
    const { componentCls: t, paddingLG: n } = e,
      r = `${t}-textarea`;
    return {
      [r]: {
        position: "relative",
        "&-show-count": {
          [`> ${t}`]: { height: "100%" },
          [`${t}-data-count`]: {
            position: "absolute",
            bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          },
        },
        [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: { paddingInlineEnd: n },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            fontSize: "inherit",
            border: "none",
            outline: "none",
            background: "transparent",
            "&:focus": { boxShadow: "none !important" },
          },
          [`${t}-suffix`]: {
            margin: 0,
            "> *:not(:last-child)": { marginInline: 0 },
            [`${t}-clear-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingInline,
              insetBlockStart: e.paddingXS,
            },
            [`${r}-suffix`]: {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.paddingInline,
              bottom: 0,
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              margin: "auto",
              pointerEvents: "none",
            },
          },
        },
        [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
          [`${t}-suffix`]: {
            [`${t}-clear-icon`]: { insetInlineEnd: e.paddingInlineSM },
          },
        },
      },
    };
  },
  PN = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-out-of-range`]: {
        [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
          color: e.colorError,
        },
      },
    };
  },
  Cm = Kl(
    "Input",
    (e) => {
      const t = dn(e, Kw(e));
      return [wN(t), RN(t), xN(t), EN(t), ON(t), PN(t), pm(t)];
    },
    Gw,
    { resetFont: !1 }
  );
function IN(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function $N(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function G0(e, t, n) {
  var r = t.cloneNode(!0),
    o = Object.create(e, { target: { value: r }, currentTarget: { value: r } });
  return (
    (r.value = n),
    typeof t.selectionStart == "number" &&
      typeof t.selectionEnd == "number" &&
      ((r.selectionStart = t.selectionStart),
      (r.selectionEnd = t.selectionEnd)),
    (r.setSelectionRange = function () {
      t.setSelectionRange.apply(t, arguments);
    }),
    o
  );
}
function Vu(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      (o = G0(t, e, "")), n(o);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      (o = G0(t, e, r)), n(o);
      return;
    }
    n(o);
  }
}
function TN(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {},
      r = n.cursor;
    if (r) {
      var o = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var Jw = ne.forwardRef(function (e, t) {
    var n,
      r,
      o = e.inputElement,
      i = e.children,
      a = e.prefixCls,
      l = e.prefix,
      s = e.suffix,
      u = e.addonBefore,
      c = e.addonAfter,
      d = e.className,
      v = e.style,
      g = e.disabled,
      y = e.readOnly,
      S = e.focused,
      b = e.triggerFocus,
      h = e.allowClear,
      p = e.value,
      m = e.handleReset,
      w = e.hidden,
      C = e.classes,
      E = e.classNames,
      x = e.dataAttrs,
      R = e.styles,
      P = e.components,
      _ = e.onClear,
      j = i ?? o,
      L = (P == null ? void 0 : P.affixWrapper) || "span",
      D = (P == null ? void 0 : P.groupWrapper) || "span",
      z = (P == null ? void 0 : P.wrapper) || "span",
      V = (P == null ? void 0 : P.groupAddon) || "span",
      T = f.useRef(null),
      I = function (re) {
        var ge;
        (ge = T.current) !== null &&
          ge !== void 0 &&
          ge.contains(re.target) &&
          (b == null || b());
      },
      O = $N(e),
      M = f.cloneElement(j, {
        value: p,
        className:
          me(j.props.className, !O && (E == null ? void 0 : E.variant)) || null,
      }),
      A = f.useRef(null);
    if (
      (ne.useImperativeHandle(t, function () {
        return { nativeElement: A.current || T.current };
      }),
      O)
    ) {
      var $,
        k = null;
      if (h) {
        var B,
          W = !g && !y && p,
          K = "".concat(a, "-clear-icon"),
          se =
            Ie(h) === "object" && h !== null && h !== void 0 && h.clearIcon
              ? h.clearIcon
              : "✖";
        k = ne.createElement(
          "span",
          {
            onClick: function (re) {
              m == null || m(re), _ == null || _();
            },
            onMouseDown: function (re) {
              return re.preventDefault();
            },
            className: me(
              K,
              ((B = {}),
              N(B, "".concat(K, "-hidden"), !W),
              N(B, "".concat(K, "-has-suffix"), !!s),
              B)
            ),
            role: "button",
            tabIndex: -1,
          },
          se
        );
      }
      var q = "".concat(a, "-affix-wrapper"),
        oe = me(
          q,
          (($ = {}),
          N($, "".concat(a, "-disabled"), g),
          N($, "".concat(q, "-disabled"), g),
          N($, "".concat(q, "-focused"), S),
          N($, "".concat(q, "-readonly"), y),
          N($, "".concat(q, "-input-with-clear-btn"), s && h && p),
          $),
          C == null ? void 0 : C.affixWrapper,
          E == null ? void 0 : E.affixWrapper,
          E == null ? void 0 : E.variant
        ),
        Ce =
          (s || h) &&
          ne.createElement(
            "span",
            {
              className: me(
                "".concat(a, "-suffix"),
                E == null ? void 0 : E.suffix
              ),
              style: R == null ? void 0 : R.suffix,
            },
            k,
            s
          );
      M = ne.createElement(
        L,
        We(
          {
            className: oe,
            style: R == null ? void 0 : R.affixWrapper,
            onClick: I,
          },
          x == null ? void 0 : x.affixWrapper,
          { ref: T }
        ),
        l &&
          ne.createElement(
            "span",
            {
              className: me(
                "".concat(a, "-prefix"),
                E == null ? void 0 : E.prefix
              ),
              style: R == null ? void 0 : R.prefix,
            },
            l
          ),
        M,
        Ce
      );
    }
    if (IN(e)) {
      var G = "".concat(a, "-group"),
        U = "".concat(G, "-addon"),
        Z = "".concat(G, "-wrapper"),
        le = me(
          "".concat(a, "-wrapper"),
          G,
          C == null ? void 0 : C.wrapper,
          E == null ? void 0 : E.wrapper
        ),
        X = me(
          Z,
          N({}, "".concat(Z, "-disabled"), g),
          C == null ? void 0 : C.group,
          E == null ? void 0 : E.groupWrapper
        );
      M = ne.createElement(
        D,
        { className: X, ref: A },
        ne.createElement(
          z,
          { className: le },
          u && ne.createElement(V, { className: U }, u),
          M,
          c && ne.createElement(V, { className: U }, c)
        )
      );
    }
    return ne.cloneElement(M, {
      className:
        me((n = M.props) === null || n === void 0 ? void 0 : n.className, d) ||
        null,
      style: F(
        F({}, (r = M.props) === null || r === void 0 ? void 0 : r.style),
        v
      ),
      hidden: w,
    });
  }),
  MN = ["show"];
function eC(e, t) {
  return f.useMemo(
    function () {
      var n = {};
      t && (n.show = Ie(t) === "object" && t.formatter ? t.formatter : !!t),
        (n = F(F({}, n), e));
      var r = n,
        o = r.show,
        i = yt(r, MN);
      return F(
        F({}, i),
        {},
        {
          show: !!o,
          showFormatter: typeof o == "function" ? o : void 0,
          strategy:
            i.strategy ||
            function (a) {
              return a.length;
            },
        }
      );
    },
    [e, t]
  );
}
var _N = [
    "autoComplete",
    "onChange",
    "onFocus",
    "onBlur",
    "onPressEnter",
    "onKeyDown",
    "onKeyUp",
    "prefixCls",
    "disabled",
    "htmlSize",
    "className",
    "maxLength",
    "suffix",
    "showCount",
    "count",
    "type",
    "classes",
    "classNames",
    "styles",
    "onCompositionStart",
    "onCompositionEnd",
  ],
  AN = f.forwardRef(function (e, t) {
    var n = e.autoComplete,
      r = e.onChange,
      o = e.onFocus,
      i = e.onBlur,
      a = e.onPressEnter,
      l = e.onKeyDown,
      s = e.onKeyUp,
      u = e.prefixCls,
      c = u === void 0 ? "rc-input" : u,
      d = e.disabled,
      v = e.htmlSize,
      g = e.className,
      y = e.maxLength,
      S = e.suffix,
      b = e.showCount,
      h = e.count,
      p = e.type,
      m = p === void 0 ? "text" : p,
      w = e.classes,
      C = e.classNames,
      E = e.styles,
      x = e.onCompositionStart,
      R = e.onCompositionEnd,
      P = yt(e, _N),
      _ = f.useState(!1),
      j = H(_, 2),
      L = j[0],
      D = j[1],
      z = f.useRef(!1),
      V = f.useRef(!1),
      T = f.useRef(null),
      I = f.useRef(null),
      O = function (Y) {
        T.current && TN(T.current, Y);
      },
      M = ai(e.defaultValue, { value: e.value }),
      A = H(M, 2),
      $ = A[0],
      k = A[1],
      B = $ == null ? "" : String($),
      W = f.useState(null),
      K = H(W, 2),
      se = K[0],
      q = K[1],
      oe = eC(h, b),
      Ce = oe.max || y,
      G = oe.strategy(B),
      U = !!Ce && G > Ce;
    f.useImperativeHandle(t, function () {
      var fe;
      return {
        focus: O,
        blur: function () {
          var Re;
          (Re = T.current) === null || Re === void 0 || Re.blur();
        },
        setSelectionRange: function (Re, ve, He) {
          var Fe;
          (Fe = T.current) === null ||
            Fe === void 0 ||
            Fe.setSelectionRange(Re, ve, He);
        },
        select: function () {
          var Re;
          (Re = T.current) === null || Re === void 0 || Re.select();
        },
        input: T.current,
        nativeElement:
          ((fe = I.current) === null || fe === void 0
            ? void 0
            : fe.nativeElement) || T.current,
      };
    }),
      f.useEffect(
        function () {
          D(function (fe) {
            return fe && d ? !1 : fe;
          });
        },
        [d]
      );
    var Z = function (Y, Re, ve) {
      var He = Re;
      if (
        !z.current &&
        oe.exceedFormatter &&
        oe.max &&
        oe.strategy(Re) > oe.max
      ) {
        if (((He = oe.exceedFormatter(Re, { max: oe.max })), Re !== He)) {
          var Fe, Ae;
          q([
            ((Fe = T.current) === null || Fe === void 0
              ? void 0
              : Fe.selectionStart) || 0,
            ((Ae = T.current) === null || Ae === void 0
              ? void 0
              : Ae.selectionEnd) || 0,
          ]);
        }
      } else if (ve.source === "compositionEnd") return;
      k(He), T.current && Vu(T.current, Y, r, He);
    };
    f.useEffect(
      function () {
        if (se) {
          var fe;
          (fe = T.current) === null ||
            fe === void 0 ||
            fe.setSelectionRange.apply(fe, be(se));
        }
      },
      [se]
    );
    var le = function (Y) {
        Z(Y, Y.target.value, { source: "change" });
      },
      X = function (Y) {
        (z.current = !1),
          Z(Y, Y.currentTarget.value, { source: "compositionEnd" }),
          R == null || R(Y);
      },
      de = function (Y) {
        a && Y.key === "Enter" && !V.current && ((V.current = !0), a(Y)),
          l == null || l(Y);
      },
      re = function (Y) {
        Y.key === "Enter" && (V.current = !1), s == null || s(Y);
      },
      ge = function (Y) {
        D(!0), o == null || o(Y);
      },
      Se = function (Y) {
        D(!1), i == null || i(Y);
      },
      ce = function (Y) {
        k(""), O(), T.current && Vu(T.current, Y, r);
      },
      Oe = U && "".concat(c, "-out-of-range"),
      xe = function () {
        var Y = Wl(e, [
          "prefixCls",
          "onPressEnter",
          "addonBefore",
          "addonAfter",
          "prefix",
          "suffix",
          "allowClear",
          "defaultValue",
          "showCount",
          "count",
          "classes",
          "htmlSize",
          "styles",
          "classNames",
        ]);
        return ne.createElement(
          "input",
          We({ autoComplete: n }, Y, {
            onChange: le,
            onFocus: ge,
            onBlur: Se,
            onKeyDown: de,
            onKeyUp: re,
            className: me(
              c,
              N({}, "".concat(c, "-disabled"), d),
              C == null ? void 0 : C.input
            ),
            style: E == null ? void 0 : E.input,
            ref: T,
            size: v,
            type: m,
            onCompositionStart: function (ve) {
              (z.current = !0), x == null || x(ve);
            },
            onCompositionEnd: X,
          })
        );
      },
      Le = function () {
        var Y = Number(Ce) > 0;
        if (S || oe.show) {
          var Re = oe.showFormatter
            ? oe.showFormatter({ value: B, count: G, maxLength: Ce })
            : "".concat(G).concat(Y ? " / ".concat(Ce) : "");
          return ne.createElement(
            ne.Fragment,
            null,
            oe.show &&
              ne.createElement(
                "span",
                {
                  className: me(
                    "".concat(c, "-show-count-suffix"),
                    N({}, "".concat(c, "-show-count-has-suffix"), !!S),
                    C == null ? void 0 : C.count
                  ),
                  style: F({}, E == null ? void 0 : E.count),
                },
                Re
              ),
            S
          );
        }
        return null;
      };
    return ne.createElement(
      Jw,
      We({}, P, {
        prefixCls: c,
        className: me(g, Oe),
        handleReset: ce,
        value: B,
        focused: L,
        triggerFocus: O,
        suffix: Le(),
        disabled: d,
        classes: w,
        classNames: C,
        styles: E,
      }),
      xe()
    );
  });
const NN = (e) => {
    const { getPrefixCls: t, direction: n } = f.useContext(Dt),
      { prefixCls: r, className: o } = e,
      i = t("input-group", r),
      a = t("input"),
      [l, s] = Cm(a),
      u = me(
        i,
        {
          [`${i}-lg`]: e.size === "large",
          [`${i}-sm`]: e.size === "small",
          [`${i}-compact`]: e.compact,
          [`${i}-rtl`]: n === "rtl",
        },
        s,
        o
      ),
      c = f.useContext(Yr),
      d = f.useMemo(
        () => Object.assign(Object.assign({}, c), { isFormItemInput: !1 }),
        [c]
      );
    return l(
      f.createElement(
        "span",
        {
          className: u,
          style: e.style,
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          onFocus: e.onFocus,
          onBlur: e.onBlur,
        },
        f.createElement(Yr.Provider, { value: d }, e.children)
      )
    );
  },
  tC = (e) => {
    let t;
    return (
      typeof e == "object" && e != null && e.clearIcon
        ? (t = e)
        : e && (t = { clearIcon: ne.createElement(nb, null) }),
      t
    );
  };
function nC(e, t) {
  const n = f.useRef([]),
    r = () => {
      n.current.push(
        setTimeout(() => {
          var o, i, a, l;
          !((o = e.current) === null || o === void 0) &&
            o.input &&
            ((i = e.current) === null || i === void 0
              ? void 0
              : i.input.getAttribute("type")) === "password" &&
            !((a = e.current) === null || a === void 0) &&
            a.input.hasAttribute("value") &&
            ((l = e.current) === null ||
              l === void 0 ||
              l.input.removeAttribute("value"));
        })
      );
    };
  return (
    f.useEffect(
      () => (
        t && r(),
        () =>
          n.current.forEach((o) => {
            o && clearTimeout(o);
          })
      ),
      []
    ),
    r
  );
}
function FN(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var jN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function zN(e, t) {
  if (!e) return;
  e.focus(t);
  const { cursor: n } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case "start":
        e.setSelectionRange(0, 0);
        break;
      case "end":
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
    }
  }
}
const Fc = f.forwardRef((e, t) => {
    var n;
    const {
        prefixCls: r,
        bordered: o = !0,
        status: i,
        size: a,
        disabled: l,
        onBlur: s,
        onFocus: u,
        suffix: c,
        allowClear: d,
        addonAfter: v,
        addonBefore: g,
        className: y,
        style: S,
        styles: b,
        rootClassName: h,
        onChange: p,
        classNames: m,
        variant: w,
      } = e,
      C = jN(e, [
        "prefixCls",
        "bordered",
        "status",
        "size",
        "disabled",
        "onBlur",
        "onFocus",
        "suffix",
        "allowClear",
        "addonAfter",
        "addonBefore",
        "className",
        "style",
        "styles",
        "rootClassName",
        "onChange",
        "classNames",
        "variant",
      ]),
      { getPrefixCls: E, direction: x, input: R } = ne.useContext(Dt),
      P = E("input", r),
      _ = f.useRef(null),
      j = Tc(P),
      [L, D, z] = Cm(P, j),
      { compactSize: V, compactItemClassnames: T } = _c(P, x),
      I = ma((le) => {
        var X;
        return (X = a ?? V) !== null && X !== void 0 ? X : le;
      }),
      O = ne.useContext(ii),
      M = l ?? O,
      { status: A, hasFeedback: $, feedbackIcon: k } = f.useContext(Yr),
      B = Nc(A, i),
      W = FN(e) || !!$;
    f.useRef(W);
    const K = nC(_, !0),
      se = (le) => {
        K(), s == null || s(le);
      },
      q = (le) => {
        K(), u == null || u(le);
      },
      oe = (le) => {
        K(), p == null || p(le);
      },
      Ce = ($ || c) && ne.createElement(ne.Fragment, null, c, $ && k),
      G = tC(d ?? (R == null ? void 0 : R.allowClear)),
      [U, Z] = bm("input", w, o);
    return L(
      ne.createElement(
        AN,
        Object.assign(
          {
            ref: Jr(t, _),
            prefixCls: P,
            autoComplete: R == null ? void 0 : R.autoComplete,
          },
          C,
          {
            disabled: M,
            onBlur: se,
            onFocus: q,
            style: Object.assign(
              Object.assign({}, R == null ? void 0 : R.style),
              S
            ),
            styles: Object.assign(
              Object.assign({}, R == null ? void 0 : R.styles),
              b
            ),
            suffix: Ce,
            allowClear: G,
            className: me(y, h, z, j, T, R == null ? void 0 : R.className),
            onChange: oe,
            addonBefore: g && ne.createElement(S0, { form: !0, space: !0 }, g),
            addonAfter: v && ne.createElement(S0, { form: !0, space: !0 }, v),
            classNames: Object.assign(
              Object.assign(
                Object.assign({}, m),
                R == null ? void 0 : R.classNames
              ),
              {
                input: me(
                  {
                    [`${P}-sm`]: I === "small",
                    [`${P}-lg`]: I === "large",
                    [`${P}-rtl`]: x === "rtl",
                  },
                  m == null ? void 0 : m.input,
                  (n = R == null ? void 0 : R.classNames) === null ||
                    n === void 0
                    ? void 0
                    : n.input,
                  D
                ),
                variant: me({ [`${P}-${U}`]: Z }, Hu(P, B)),
                affixWrapper: me(
                  {
                    [`${P}-affix-wrapper-sm`]: I === "small",
                    [`${P}-affix-wrapper-lg`]: I === "large",
                    [`${P}-affix-wrapper-rtl`]: x === "rtl",
                  },
                  D
                ),
                wrapper: me({ [`${P}-group-rtl`]: x === "rtl" }, D),
                groupWrapper: me(
                  {
                    [`${P}-group-wrapper-sm`]: I === "small",
                    [`${P}-group-wrapper-lg`]: I === "large",
                    [`${P}-group-wrapper-rtl`]: x === "rtl",
                    [`${P}-group-wrapper-${U}`]: Z,
                  },
                  Hu(`${P}-group-wrapper`, B, $),
                  D
                ),
              }
            ),
          }
        )
      )
    );
  }),
  LN = (e) => {
    const { componentCls: t, paddingXS: n } = e;
    return {
      [`${t}`]: {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "nowrap",
        columnGap: n,
        "&-rtl": { direction: "rtl" },
        [`${t}-input`]: { textAlign: "center", paddingInline: e.paddingXXS },
        [`&${t}-sm ${t}-input`]: {
          paddingInline: e.calc(e.paddingXXS).div(2).equal(),
        },
        [`&${t}-lg ${t}-input`]: { paddingInline: e.paddingXS },
      },
    };
  },
  DN = Kl(
    ["Input", "OTP"],
    (e) => {
      const t = dn(e, Kw(e));
      return [LN(t)];
    },
    Gw
  );
var kN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const BN = f.forwardRef((e, t) => {
  const { value: n, onChange: r, onActiveChange: o, index: i, mask: a } = e,
    l = kN(e, ["value", "onChange", "onActiveChange", "index", "mask"]),
    s = n && typeof a == "string" ? a : n,
    u = (y) => {
      r(i, y.target.value);
    },
    c = f.useRef(null);
  f.useImperativeHandle(t, () => c.current);
  const d = () => {
      At(() => {
        var y;
        const S = (y = c.current) === null || y === void 0 ? void 0 : y.input;
        document.activeElement === S && S && S.select();
      });
    },
    v = (y) => {
      let { key: S } = y;
      S === "ArrowLeft" ? o(i - 1) : S === "ArrowRight" && o(i + 1), d();
    },
    g = (y) => {
      y.key === "Backspace" && !n && o(i - 1), d();
    };
  return f.createElement(
    Fc,
    Object.assign({}, l, {
      ref: c,
      value: s,
      onInput: u,
      onFocus: d,
      onKeyDown: v,
      onKeyUp: g,
      onMouseDown: d,
      onMouseUp: d,
      type: a === !0 ? "password" : "text",
    })
  );
});
var HN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function As(e) {
  return (e || "").split("");
}
const VN = f.forwardRef((e, t) => {
  const {
      prefixCls: n,
      length: r = 6,
      size: o,
      defaultValue: i,
      value: a,
      onChange: l,
      formatter: s,
      variant: u,
      disabled: c,
      status: d,
      autoFocus: v,
      mask: g,
    } = e,
    y = HN(e, [
      "prefixCls",
      "length",
      "size",
      "defaultValue",
      "value",
      "onChange",
      "formatter",
      "variant",
      "disabled",
      "status",
      "autoFocus",
      "mask",
    ]),
    { getPrefixCls: S, direction: b } = f.useContext(Dt),
    h = S("otp", n),
    p = Al(y, { aria: !0, data: !0, attr: !0 }),
    m = Tc(h),
    [w, C, E] = DN(h, m),
    x = ma(($) => o ?? $),
    R = f.useContext(Yr),
    P = Nc(R.status, d),
    _ = f.useMemo(
      () =>
        Object.assign(Object.assign({}, R), {
          status: P,
          hasFeedback: !1,
          feedbackIcon: null,
        }),
      [R, P]
    ),
    j = f.useRef(null),
    L = f.useRef({});
  f.useImperativeHandle(t, () => ({
    focus: () => {
      var $;
      ($ = L.current[0]) === null || $ === void 0 || $.focus();
    },
    blur: () => {
      var $;
      for (let k = 0; k < r; k += 1)
        ($ = L.current[k]) === null || $ === void 0 || $.blur();
    },
    nativeElement: j.current,
  }));
  const D = ($) => (s ? s($) : $),
    [z, V] = f.useState(As(D(i || "")));
  f.useEffect(() => {
    a !== void 0 && V(As(a));
  }, [a]);
  const T = Xt(($) => {
      V($),
        l &&
          $.length === r &&
          $.every((k) => k) &&
          $.some((k, B) => z[B] !== k) &&
          l($.join(""));
    }),
    I = Xt(($, k) => {
      let B = be(z);
      for (let K = 0; K < $; K += 1) B[K] || (B[K] = "");
      k.length <= 1 ? (B[$] = k) : (B = B.slice(0, $).concat(As(k))),
        (B = B.slice(0, r));
      for (let K = B.length - 1; K >= 0 && !B[K]; K -= 1) B.pop();
      const W = D(B.map((K) => K || " ").join(""));
      return (B = As(W).map((K, se) => (K === " " && !B[se] ? B[se] : K))), B;
    }),
    O = ($, k) => {
      var B;
      const W = I($, k),
        K = Math.min($ + k.length, r - 1);
      K !== $ && ((B = L.current[K]) === null || B === void 0 || B.focus()),
        T(W);
    },
    M = ($) => {
      var k;
      (k = L.current[$]) === null || k === void 0 || k.focus();
    },
    A = { variant: u, disabled: c, status: P, mask: g };
  return w(
    f.createElement(
      "div",
      Object.assign({}, p, {
        ref: j,
        className: me(
          h,
          {
            [`${h}-sm`]: x === "small",
            [`${h}-lg`]: x === "large",
            [`${h}-rtl`]: b === "rtl",
          },
          E,
          C
        ),
      }),
      f.createElement(
        Yr.Provider,
        { value: _ },
        Array.from({ length: r }).map(($, k) => {
          const B = `otp-${k}`,
            W = z[k] || "";
          return f.createElement(
            BN,
            Object.assign(
              {
                ref: (K) => {
                  L.current[k] = K;
                },
                key: B,
                index: k,
                size: x,
                htmlSize: 1,
                className: `${h}-input`,
                onChange: O,
                value: W,
                onActiveChange: M,
                autoFocus: k === 0 && v,
              },
              A
            )
          );
        })
      )
    )
  );
});
var WN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const UN = (e) => (e ? f.createElement(pP, null) : f.createElement(fP, null)),
  KN = { click: "onClick", hover: "onMouseOver" },
  GN = f.forwardRef((e, t) => {
    const {
        disabled: n,
        action: r = "click",
        visibilityToggle: o = !0,
        iconRender: i = UN,
      } = e,
      a = typeof o == "object" && o.visible !== void 0,
      [l, s] = f.useState(() => (a ? o.visible : !1)),
      u = f.useRef(null);
    f.useEffect(() => {
      a && s(o.visible);
    }, [a, o]);
    const c = nC(u),
      d = () => {
        n ||
          (l && c(),
          s((R) => {
            var P;
            const _ = !R;
            return (
              typeof o == "object" &&
                ((P = o.onVisibleChange) === null ||
                  P === void 0 ||
                  P.call(o, _)),
              _
            );
          }));
      },
      v = (R) => {
        const P = KN[r] || "",
          _ = i(l),
          j = {
            [P]: d,
            className: `${R}-icon`,
            key: "passwordIcon",
            onMouseDown: (L) => {
              L.preventDefault();
            },
            onMouseUp: (L) => {
              L.preventDefault();
            },
          };
        return f.cloneElement(
          f.isValidElement(_) ? _ : f.createElement("span", null, _),
          j
        );
      },
      { className: g, prefixCls: y, inputPrefixCls: S, size: b } = e,
      h = WN(e, ["className", "prefixCls", "inputPrefixCls", "size"]),
      { getPrefixCls: p } = f.useContext(Dt),
      m = p("input", S),
      w = p("input-password", y),
      C = o && v(w),
      E = me(w, g, { [`${w}-${b}`]: !!b }),
      x = Object.assign(
        Object.assign({}, Wl(h, ["suffix", "iconRender", "visibilityToggle"])),
        { type: l ? "text" : "password", className: E, prefixCls: m, suffix: C }
      );
    return (
      b && (x.size = b),
      f.createElement(Fc, Object.assign({ ref: Jr(t, u) }, x))
    );
  });
var qN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const XN = f.forwardRef((e, t) => {
  const {
      prefixCls: n,
      inputPrefixCls: r,
      className: o,
      size: i,
      suffix: a,
      enterButton: l = !1,
      addonAfter: s,
      loading: u,
      disabled: c,
      onSearch: d,
      onChange: v,
      onCompositionStart: g,
      onCompositionEnd: y,
    } = e,
    S = qN(e, [
      "prefixCls",
      "inputPrefixCls",
      "className",
      "size",
      "suffix",
      "enterButton",
      "addonAfter",
      "loading",
      "disabled",
      "onSearch",
      "onChange",
      "onCompositionStart",
      "onCompositionEnd",
    ]),
    { getPrefixCls: b, direction: h } = f.useContext(Dt),
    p = f.useRef(!1),
    m = b("input-search", n),
    w = b("input", r),
    { compactSize: C } = _c(m, h),
    E = ma((A) => {
      var $;
      return ($ = i ?? C) !== null && $ !== void 0 ? $ : A;
    }),
    x = f.useRef(null),
    R = (A) => {
      A != null &&
        A.target &&
        A.type === "click" &&
        d &&
        d(A.target.value, A, { source: "clear" }),
        v == null || v(A);
    },
    P = (A) => {
      var $;
      document.activeElement ===
        (($ = x.current) === null || $ === void 0 ? void 0 : $.input) &&
        A.preventDefault();
    },
    _ = (A) => {
      var $, k;
      d &&
        d(
          (k = ($ = x.current) === null || $ === void 0 ? void 0 : $.input) ===
            null || k === void 0
            ? void 0
            : k.value,
          A,
          { source: "input" }
        );
    },
    j = (A) => {
      p.current || u || _(A);
    },
    L = typeof l == "boolean" ? f.createElement(ib, null) : null,
    D = `${m}-button`;
  let z;
  const V = l || {},
    T = V.type && V.type.__ANT_BUTTON === !0;
  T || V.type === "button"
    ? (z = zu(
        V,
        Object.assign(
          {
            onMouseDown: P,
            onClick: (A) => {
              var $, k;
              (k =
                ($ = V == null ? void 0 : V.props) === null || $ === void 0
                  ? void 0
                  : $.onClick) === null ||
                k === void 0 ||
                k.call($, A),
                _(A);
            },
            key: "enterButton",
          },
          T ? { className: D, size: E } : {}
        )
      ))
    : (z = f.createElement(
        Xl,
        {
          className: D,
          type: l ? "primary" : void 0,
          size: E,
          disabled: c,
          key: "enterButton",
          onMouseDown: P,
          onClick: _,
          loading: u,
          icon: L,
        },
        l
      )),
    s && (z = [z, zu(s, { key: "addonAfter" })]);
  const I = me(
      m,
      {
        [`${m}-rtl`]: h === "rtl",
        [`${m}-${E}`]: !!E,
        [`${m}-with-button`]: !!l,
      },
      o
    ),
    O = (A) => {
      (p.current = !0), g == null || g(A);
    },
    M = (A) => {
      (p.current = !1), y == null || y(A);
    };
  return f.createElement(
    Fc,
    Object.assign({ ref: Jr(x, t), onPressEnter: j }, S, {
      size: E,
      onCompositionStart: O,
      onCompositionEnd: M,
      prefixCls: w,
      addonAfter: z,
      suffix: a,
      onChange: R,
      className: I,
      disabled: c,
    })
  );
});
var QN = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  YN = [
    "letter-spacing",
    "line-height",
    "padding-top",
    "padding-bottom",
    "font-family",
    "font-weight",
    "font-size",
    "font-variant",
    "text-rendering",
    "text-transform",
    "width",
    "text-indent",
    "padding-left",
    "padding-right",
    "border-width",
    "box-sizing",
    "word-break",
    "white-space",
  ],
  kf = {},
  Yn;
function ZN(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n =
      e.getAttribute("id") ||
      e.getAttribute("data-reactid") ||
      e.getAttribute("name");
  if (t && kf[n]) return kf[n];
  var r = window.getComputedStyle(e),
    o =
      r.getPropertyValue("box-sizing") ||
      r.getPropertyValue("-moz-box-sizing") ||
      r.getPropertyValue("-webkit-box-sizing"),
    i =
      parseFloat(r.getPropertyValue("padding-bottom")) +
      parseFloat(r.getPropertyValue("padding-top")),
    a =
      parseFloat(r.getPropertyValue("border-bottom-width")) +
      parseFloat(r.getPropertyValue("border-top-width")),
    l = YN.map(function (u) {
      return "".concat(u, ":").concat(r.getPropertyValue(u));
    }).join(";"),
    s = { sizingStyle: l, paddingSize: i, borderSize: a, boxSizing: o };
  return t && n && (kf[n] = s), s;
}
function JN(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Yn ||
    ((Yn = document.createElement("textarea")),
    Yn.setAttribute("tab-index", "-1"),
    Yn.setAttribute("aria-hidden", "true"),
    document.body.appendChild(Yn)),
    e.getAttribute("wrap")
      ? Yn.setAttribute("wrap", e.getAttribute("wrap"))
      : Yn.removeAttribute("wrap");
  var o = ZN(e, t),
    i = o.paddingSize,
    a = o.borderSize,
    l = o.boxSizing,
    s = o.sizingStyle;
  Yn.setAttribute("style", "".concat(s, ";").concat(QN)),
    (Yn.value = e.value || e.placeholder || "");
  var u = void 0,
    c = void 0,
    d,
    v = Yn.scrollHeight;
  if (
    (l === "border-box" ? (v += a) : l === "content-box" && (v -= i),
    n !== null || r !== null)
  ) {
    Yn.value = " ";
    var g = Yn.scrollHeight - i;
    n !== null &&
      ((u = g * n),
      l === "border-box" && (u = u + i + a),
      (v = Math.max(u, v))),
      r !== null &&
        ((c = g * r),
        l === "border-box" && (c = c + i + a),
        (d = v > c ? "" : "hidden"),
        (v = Math.min(c, v)));
  }
  var y = { height: v, overflowY: d, resize: "none" };
  return u && (y.minHeight = u), c && (y.maxHeight = c), y;
}
var eF = [
    "prefixCls",
    "defaultValue",
    "value",
    "autoSize",
    "onResize",
    "className",
    "style",
    "disabled",
    "onChange",
    "onInternalAutoSize",
  ],
  Bf = 0,
  Hf = 1,
  Vf = 2,
  tF = f.forwardRef(function (e, t) {
    var n = e,
      r = n.prefixCls,
      o = n.defaultValue,
      i = n.value,
      a = n.autoSize,
      l = n.onResize,
      s = n.className,
      u = n.style,
      c = n.disabled,
      d = n.onChange;
    n.onInternalAutoSize;
    var v = yt(n, eF),
      g = ai(o, {
        value: i,
        postState: function (W) {
          return W ?? "";
        },
      }),
      y = H(g, 2),
      S = y[0],
      b = y[1],
      h = function (W) {
        b(W.target.value), d == null || d(W);
      },
      p = f.useRef();
    f.useImperativeHandle(t, function () {
      return { textArea: p.current };
    });
    var m = f.useMemo(
        function () {
          return a && Ie(a) === "object" ? [a.minRows, a.maxRows] : [];
        },
        [a]
      ),
      w = H(m, 2),
      C = w[0],
      E = w[1],
      x = !!a,
      R = function () {
        try {
          if (document.activeElement === p.current) {
            var W = p.current,
              K = W.selectionStart,
              se = W.selectionEnd,
              q = W.scrollTop;
            p.current.setSelectionRange(K, se), (p.current.scrollTop = q);
          }
        } catch {}
      },
      P = f.useState(Vf),
      _ = H(P, 2),
      j = _[0],
      L = _[1],
      D = f.useState(),
      z = H(D, 2),
      V = z[0],
      T = z[1],
      I = function () {
        L(Bf);
      };
    bt(
      function () {
        x && I();
      },
      [i, C, E, x]
    ),
      bt(
        function () {
          if (j === Bf) L(Hf);
          else if (j === Hf) {
            var B = JN(p.current, !1, C, E);
            L(Vf), T(B);
          } else R();
        },
        [j]
      );
    var O = f.useRef(),
      M = function () {
        At.cancel(O.current);
      },
      A = function (W) {
        j === Vf &&
          (l == null || l(W),
          a &&
            (M(),
            (O.current = At(function () {
              I();
            }))));
      };
    f.useEffect(function () {
      return M;
    }, []);
    var $ = x ? V : null,
      k = F(F({}, u), $);
    return (
      (j === Bf || j === Hf) &&
        ((k.overflowY = "hidden"), (k.overflowX = "hidden")),
      f.createElement(
        _o,
        { onResize: A, disabled: !(a || l) },
        f.createElement(
          "textarea",
          We({}, v, {
            ref: p,
            style: k,
            className: me(r, s, N({}, "".concat(r, "-disabled"), c)),
            disabled: c,
            value: S,
            onChange: h,
          })
        )
      )
    );
  }),
  nF = [
    "defaultValue",
    "value",
    "onFocus",
    "onBlur",
    "onChange",
    "allowClear",
    "maxLength",
    "onCompositionStart",
    "onCompositionEnd",
    "suffix",
    "prefixCls",
    "showCount",
    "count",
    "className",
    "style",
    "disabled",
    "hidden",
    "classNames",
    "styles",
    "onResize",
    "onClear",
    "onPressEnter",
    "readOnly",
    "autoSize",
    "onKeyDown",
  ],
  rF = ne.forwardRef(function (e, t) {
    var n,
      r = e.defaultValue,
      o = e.value,
      i = e.onFocus,
      a = e.onBlur,
      l = e.onChange,
      s = e.allowClear,
      u = e.maxLength,
      c = e.onCompositionStart,
      d = e.onCompositionEnd,
      v = e.suffix,
      g = e.prefixCls,
      y = g === void 0 ? "rc-textarea" : g,
      S = e.showCount,
      b = e.count,
      h = e.className,
      p = e.style,
      m = e.disabled,
      w = e.hidden,
      C = e.classNames,
      E = e.styles,
      x = e.onResize,
      R = e.onClear,
      P = e.onPressEnter,
      _ = e.readOnly,
      j = e.autoSize,
      L = e.onKeyDown,
      D = yt(e, nF),
      z = ai(r, { value: o, defaultValue: r }),
      V = H(z, 2),
      T = V[0],
      I = V[1],
      O = T == null ? "" : String(T),
      M = ne.useState(!1),
      A = H(M, 2),
      $ = A[0],
      k = A[1],
      B = ne.useRef(!1),
      W = ne.useState(null),
      K = H(W, 2),
      se = K[0],
      q = K[1],
      oe = f.useRef(null),
      Ce = f.useRef(null),
      G = function () {
        var Te;
        return (Te = Ce.current) === null || Te === void 0
          ? void 0
          : Te.textArea;
      },
      U = function () {
        G().focus();
      };
    f.useImperativeHandle(t, function () {
      var $e;
      return {
        resizableTextArea: Ce.current,
        focus: U,
        blur: function () {
          G().blur();
        },
        nativeElement:
          (($e = oe.current) === null || $e === void 0
            ? void 0
            : $e.nativeElement) || G(),
      };
    }),
      f.useEffect(
        function () {
          k(function ($e) {
            return !m && $e;
          });
        },
        [m]
      );
    var Z = ne.useState(null),
      le = H(Z, 2),
      X = le[0],
      de = le[1];
    ne.useEffect(
      function () {
        if (X) {
          var $e;
          ($e = G()).setSelectionRange.apply($e, be(X));
        }
      },
      [X]
    );
    var re = eC(b, S),
      ge = (n = re.max) !== null && n !== void 0 ? n : u,
      Se = Number(ge) > 0,
      ce = re.strategy(O),
      Oe = !!ge && ce > ge,
      xe = function (Te, dt) {
        var et = dt;
        !B.current &&
          re.exceedFormatter &&
          re.max &&
          re.strategy(dt) > re.max &&
          ((et = re.exceedFormatter(dt, { max: re.max })),
          dt !== et && de([G().selectionStart || 0, G().selectionEnd || 0])),
          I(et),
          Vu(Te.currentTarget, Te, l, et);
      },
      Le = function (Te) {
        (B.current = !0), c == null || c(Te);
      },
      fe = function (Te) {
        (B.current = !1), xe(Te, Te.currentTarget.value), d == null || d(Te);
      },
      Y = function (Te) {
        xe(Te, Te.target.value);
      },
      Re = function (Te) {
        Te.key === "Enter" && P && P(Te), L == null || L(Te);
      },
      ve = function (Te) {
        k(!0), i == null || i(Te);
      },
      He = function (Te) {
        k(!1), a == null || a(Te);
      },
      Fe = function (Te) {
        I(""), U(), Vu(G(), Te, l);
      },
      Ae = v,
      De;
    re.show &&
      (re.showFormatter
        ? (De = re.showFormatter({ value: O, count: ce, maxLength: ge }))
        : (De = "".concat(ce).concat(Se ? " / ".concat(ge) : "")),
      (Ae = ne.createElement(
        ne.Fragment,
        null,
        Ae,
        ne.createElement(
          "span",
          {
            className: me(
              "".concat(y, "-data-count"),
              C == null ? void 0 : C.count
            ),
            style: E == null ? void 0 : E.count,
          },
          De
        )
      )));
    var ct = function (Te) {
        var dt;
        x == null || x(Te),
          (dt = G()) !== null && dt !== void 0 && dt.style.height && q(!0);
      },
      Je = !j && !S && !s;
    return ne.createElement(
      Jw,
      {
        ref: oe,
        value: O,
        allowClear: s,
        handleReset: Fe,
        suffix: Ae,
        prefixCls: y,
        classNames: F(
          F({}, C),
          {},
          {
            affixWrapper: me(
              C == null ? void 0 : C.affixWrapper,
              N(
                N({}, "".concat(y, "-show-count"), S),
                "".concat(y, "-textarea-allow-clear"),
                s
              )
            ),
          }
        ),
        disabled: m,
        focused: $,
        className: me(h, Oe && "".concat(y, "-out-of-range")),
        style: F(F({}, p), se && !Je ? { height: "auto" } : {}),
        dataAttrs: {
          affixWrapper: { "data-count": typeof De == "string" ? De : void 0 },
        },
        hidden: w,
        readOnly: _,
        onClear: R,
      },
      ne.createElement(
        tF,
        We({}, D, {
          autoSize: j,
          maxLength: u,
          onKeyDown: Re,
          onChange: Y,
          onFocus: ve,
          onBlur: He,
          onCompositionStart: Le,
          onCompositionEnd: fe,
          className: me(C == null ? void 0 : C.textarea),
          style: F(
            F({}, E == null ? void 0 : E.textarea),
            {},
            { resize: p == null ? void 0 : p.resize }
          ),
          disabled: m,
          prefixCls: y,
          onResize: ct,
          ref: Ce,
          readOnly: _,
        })
      )
    );
  }),
  oF = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const iF = f.forwardRef((e, t) => {
    var n, r;
    const {
        prefixCls: o,
        bordered: i = !0,
        size: a,
        disabled: l,
        status: s,
        allowClear: u,
        classNames: c,
        rootClassName: d,
        className: v,
        style: g,
        styles: y,
        variant: S,
      } = e,
      b = oF(e, [
        "prefixCls",
        "bordered",
        "size",
        "disabled",
        "status",
        "allowClear",
        "classNames",
        "rootClassName",
        "className",
        "style",
        "styles",
        "variant",
      ]),
      { getPrefixCls: h, direction: p, textArea: m } = f.useContext(Dt),
      w = ma(a),
      C = f.useContext(ii),
      E = l ?? C,
      { status: x, hasFeedback: R, feedbackIcon: P } = f.useContext(Yr),
      _ = Nc(x, s),
      j = f.useRef(null);
    f.useImperativeHandle(t, () => {
      var A;
      return {
        resizableTextArea:
          (A = j.current) === null || A === void 0
            ? void 0
            : A.resizableTextArea,
        focus: ($) => {
          var k, B;
          zN(
            (B =
              (k = j.current) === null || k === void 0
                ? void 0
                : k.resizableTextArea) === null || B === void 0
              ? void 0
              : B.textArea,
            $
          );
        },
        blur: () => {
          var $;
          return ($ = j.current) === null || $ === void 0 ? void 0 : $.blur();
        },
      };
    });
    const L = h("input", o),
      D = Tc(L),
      [z, V, T] = Cm(L, D),
      [I, O] = bm("textArea", S, i),
      M = tC(u ?? (m == null ? void 0 : m.allowClear));
    return z(
      f.createElement(
        rF,
        Object.assign(
          { autoComplete: m == null ? void 0 : m.autoComplete },
          b,
          {
            style: Object.assign(
              Object.assign({}, m == null ? void 0 : m.style),
              g
            ),
            styles: Object.assign(
              Object.assign({}, m == null ? void 0 : m.styles),
              y
            ),
            disabled: E,
            allowClear: M,
            className: me(T, D, v, d, m == null ? void 0 : m.className),
            classNames: Object.assign(
              Object.assign(
                Object.assign({}, c),
                m == null ? void 0 : m.classNames
              ),
              {
                textarea: me(
                  { [`${L}-sm`]: w === "small", [`${L}-lg`]: w === "large" },
                  V,
                  c == null ? void 0 : c.textarea,
                  (n = m == null ? void 0 : m.classNames) === null ||
                    n === void 0
                    ? void 0
                    : n.textarea
                ),
                variant: me({ [`${L}-${I}`]: O }, Hu(L, _)),
                affixWrapper: me(
                  `${L}-textarea-affix-wrapper`,
                  {
                    [`${L}-affix-wrapper-rtl`]: p === "rtl",
                    [`${L}-affix-wrapper-sm`]: w === "small",
                    [`${L}-affix-wrapper-lg`]: w === "large",
                    [`${L}-textarea-show-count`]:
                      e.showCount ||
                      ((r = e.count) === null || r === void 0
                        ? void 0
                        : r.show),
                  },
                  V
                ),
              }
            ),
            prefixCls: L,
            suffix:
              R &&
              f.createElement("span", { className: `${L}-textarea-suffix` }, P),
            ref: j,
          }
        )
      )
    );
  }),
  ga = Fc;
ga.Group = NN;
ga.Search = XN;
ga.TextArea = iF;
ga.Password = GN;
ga.OTP = VN;
const aF = () => {
    const e = Hl(),
      { selectedRow: t } = ca((i) => i.exp),
      n = (i) => {
        e(vR(i));
      },
      r = (i) => (i.length > 50 ? `${i.slice(0, 50)}...` : i),
      o = [
        {
          no: 1,
          time: "0.000000",
          source: "Microsof 00:01:20",
          destination: "Broadcast",
          protocol: "ARP",
          length: 42,
          info: "Who has 10.0.0.1? Tell 10.0.0.12",
        },
        {
          no: 2,
          time: "0.785661",
          source: "Microsof 00:01:20",
          destination: "Broadcast",
          protocol: "ARP",
          length: 42,
          info: "Who has 10.0.0.1? Tell 10.0.0.12",
        },
        {
          no: 3,
          time: "1.771737",
          source: "Microsof 00:01:20",
          destination: "Broadcast",
          protocol: "ARP",
          length: 42,
          info: "Who has 10.0.0.1? Tell 10.0.0.12",
        },
        {
          no: 4,
          time: "3.175707",
          source: "10.0.0.12",
          destination: "10.255.255.255",
          protocol: "NBNS",
          length: 92,
          info: "Name query NB WPAD<00>",
        },
        {
          no: 5,
          time: "3.175878",
          source: "fe80::d91b:8a96:eed.",
          destination: "ff02::1:3",
          protocol: "LLMNR",
          length: 84,
          info: "Standard query 0x675f A wpad",
        },
        {
          no: 6,
          time: "3.175986",
          source: "10.0.0.12",
          destination: "224.0.0.252",
          protocol: "LLMNR",
          length: 64,
          info: "Standard query 0x675f A wpad",
        },
        {
          no: 7,
          time: "3.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "LLMNR",
          length: 84,
          info: "Standard query 0x67ce AAAA wpad",
        },
        {
          no: 8,
          time: "3.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "LLMNR",
          length: 84,
          info: "Standard query 0x67ce AAAA wpad",
        },
        {
          no: 9,
          time: "5.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "HTTP",
          length: 84,
          info: "GET /wordpress/ HTTP/1.1",
        },
        {
          no: 10,
          time: "0.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "HTTP",
          length: 84,
          info: "GET /WordPress/wp-admin/load-styles.php?c=1&dir=ltr&load%5B%5D-dashicons,buttons, forms, 11ün, login&ver-4.5.2",
        },
        {
          no: 11,
          time: "3.176392",
          source: "93.580989",
          destination: "10.0.0.12",
          protocol: "LLMNR",
          length: 64,
          info: "Standard query 0x67ce AAAA wpad",
        },
        {
          no: 12,
          time: "3.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "LLMNR",
          length: 84,
          info: "Standard query 0x675f A wpad",
        },
        {
          no: 12,
          time: "3.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "LLMNR",
          length: 84,
          info: "Standard query 0x675f A wpad",
        },
        {
          no: 12,
          time: "9.176280",
          source: "fe80::d91b:8a96:eed",
          destination: "ff02::1:3",
          protocol: "HTTP",
          length: 84,
          info: "POST /WordPress/wp-login.php HTTP/1.1 (application/x-www-form-urlencoded)",
        },
      ];
    return ee.jsxs("table", {
      style: { width: "100%", borderCollapse: "collapse" },
      children: [
        ee.jsx("thead", {
          children: ee.jsxs("tr", {
            children: [
              ee.jsx("th", { children: "No." }),
              ee.jsx("th", { children: "Time" }),
              ee.jsx("th", { children: "Source" }),
              ee.jsx("th", { children: "Destination" }),
              ee.jsx("th", { children: "Protocol" }),
              ee.jsx("th", { children: "Length" }),
              ee.jsx("th", { children: "Info" }),
            ],
          }),
        }),
        ee.jsx("tbody", {
          children: o.map((i, a) =>
            ee.jsxs(
              "tr",
              {
                onClick: () => n(i.no),
                style: {
                  backgroundColor: t === i.no ? "#dfedfb" : "transparent",
                  cursor: "pointer",
                },
                children: [
                  ee.jsx("td", { children: i.no }),
                  ee.jsx("td", { children: i.time }),
                  ee.jsx("td", { children: i.source }),
                  ee.jsx("td", { children: i.destination }),
                  ee.jsx("td", { children: i.protocol }),
                  ee.jsx("td", { children: i.length }),
                  ee.jsx("td", { children: r(i.info) }),
                ],
              },
              i.no
            )
          ),
        }),
      ],
    });
  },
  lF = () => {
    const { selectedRow: e } = ca((o) => o.exp),
      [t, n] = f.useState([]),
      r = (o, i) => {
        const a = Math.floor(Math.random() * (i - o + 1)) + o,
          l = [];
        for (let s = 0; s < a; s++) {
          const u = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
          l.push(u);
        }
        n(l);
      };
    return (
      f.useEffect(() => {
        r(70, 350);
      }, [e]),
      console.log(e, "hi"),
      ee.jsxs(ee.Fragment, {
        children: [
          ee.jsxs("div", {
            style: {
              flex: 0.59,
              background: "whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "50%",
            },
            children: [
              ee.jsx("div", {
                style: { flex: 0.1 },
                children: ee.jsx(ga, {
                  placeholder: "Apply a filter...<Ctrl-/>",
                }),
              }),
              ee.jsx("div", {
                style: { overflowY: "scroll", flex: 0.9, height: "50%" },
                children: ee.jsx(aF, {}),
              }),
            ],
          }),
          ee.jsxs("div", {
            style: {
              flex: 0.4,
              background: "whitesmoke",
              display: "flex",
              justifyContent: "space-between",
            },
            children: [
              ee.jsx("div", {
                style: { flex: 0.497, background: "white" },
                children: "1",
              }),
              ee.jsx("div", {
                style: { flex: 0.5, background: "white", paddingTop: 10 },
                children: ee.jsx("div", {
                  style: { height: 250, overflow: "auto", paddingLeft: "25px" },
                  children:
                    t == null
                      ? void 0
                      : t.map((o, i) =>
                          ee.jsx(
                            "input",
                            {
                              style: {
                                color: "black",
                                margin: "2px 4px",
                                padding: "2px",
                                border: "1px solid grey",
                                cursor: "no-drop",
                                width: "50px",
                                outline: "none",
                                background: "white",
                              },
                              value: o,
                              disabled: !0,
                            },
                            i
                          )
                        ),
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
var sF = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0,
};
function uF(e) {
  if (typeof e == "number") return { value: e, unit: "px" };
  var t,
    n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return sF[r]
    ? { value: t, unit: r }
    : (console.warn(
        "React Spinners: "
          .concat(e, " is not a valid css value. Defaulting to ")
          .concat(t, "px.")
      ),
      { value: t, unit: "px" });
}
function q0(e) {
  var t = uF(e);
  return "".concat(t.value).concat(t.unit);
}
var cF = function (e, t, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document) return r;
    var o = document.createElement("style");
    document.head.appendChild(o);
    var i = o.sheet,
      a = `
    @keyframes `
        .concat(
          r,
          ` {
      `
        )
        .concat(
          t,
          `
    }
  `
        );
    return i && i.insertRule(a, 0), r;
  },
  Wu = function () {
    return (
      (Wu =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        }),
      Wu.apply(this, arguments)
    );
  },
  fF = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  },
  dF = cF(
    "ClipLoader",
    "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}",
    "clip"
  );
function vF(e) {
  var t = e.loading,
    n = t === void 0 ? !0 : t,
    r = e.color,
    o = r === void 0 ? "#000000" : r,
    i = e.speedMultiplier,
    a = i === void 0 ? 1 : i,
    l = e.cssOverride,
    s = l === void 0 ? {} : l,
    u = e.size,
    c = u === void 0 ? 35 : u,
    d = fF(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
    v = Wu(
      {
        background: "transparent !important",
        width: q0(c),
        height: q0(c),
        borderRadius: "100%",
        border: "2px solid",
        borderTopColor: o,
        borderBottomColor: "transparent",
        borderLeftColor: o,
        borderRightColor: o,
        display: "inline-block",
        animation: "".concat(dF, " ").concat(0.75 / a, "s 0s infinite linear"),
        animationFillMode: "both",
      },
      s
    );
  return n ? f.createElement("span", Wu({ style: v }, d)) : null;
}
const pF = () => {
    const e = Hl(),
      [t, n] = f.useState(!1),
      { isDragStart: r } = ca((a) => a.exp),
      o = (a) => {
        a.preventDefault();
        const l = a.dataTransfer.getData("text");
        console.log("Dropped item index:", l), e(Jd(!1)), n(!0);
      },
      i = (a) => {
        a.preventDefault();
      };
    return (
      f.useEffect(() => {
        let a;
        return (
          t &&
            (a = setTimeout(() => {
              n(!1), e(dR(!0));
            }, 3e3)),
          () => {
            clearTimeout(a);
          }
        );
      }, [t]),
      ee.jsxs("div", {
        style: {
          margin: "auto",
          width: "70%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          flex: 0.9,
        },
        children: [
          ee.jsx("div", {
            style: { flex: 0.1 },
            children: ee.jsx(Xl, {
              style: { background: "#9bc6f1", cursor: "no-drop" },
              children: "Welcome to Wireshark",
            }),
          }),
          ee.jsx("div", {
            style: {
              flex: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "grab",
              boxShadow: r ? "#00122e20 6px 1px 54px" : "",
            },
            onDrop: o,
            onDragOver: i,
            children: t
              ? ee.jsx(vF, {})
              : ee.jsx("h5", {
                  style: { color: "grey" },
                  children: "Drop the PCAP file...",
                }),
          }),
        ],
      })
    );
  },
  mF = () => {
    const e = Hl(),
      { showWiresharkDetails: t, selectedInvesigation: n } = ca((i) => i.exp),
      r = () => {
        e(DS(!1)), e(kS());
      },
      o =
        n === "1"
          ? "HTTPTraffic.pcap"
          : n === "2"
          ? "DNS.pcap"
          : n === "3"
          ? "SYN.pcap"
          : n === "4"
          ? "ARP.pcap"
          : "";
    return ee.jsx("div", {
      style: {
        width: "100%",
        height: "100%",
        background: "#ffffff",
        position: "absolute",
        zIndex: 8e3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      },
      children: ee.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
          width: "100%",
        },
        children: [
          ee.jsxs("div", {
            style: {
              height: 30,
              background: "#f0f0f0",
              display: "flex",
              justifyContent: "space-between",
              paddingRight: 2,
              alignItems: "center",
            },
            children: [
              ee.jsxs("div", {
                style: { display: "flex", paddingLeft: 3 },
                children: [
                  ee.jsx("img", {
                    style: { width: 20, height: 20, marginRight: 2 },
                    src: ES,
                  }),
                  ee.jsx("h5", {
                    style: { margin: 0 },
                    children: t ? o : "The Wireshark Network Analyser",
                  }),
                ],
              }),
              ee.jsx(rb, {
                onClick: r,
                style: {
                  color: "white",
                  background: "red",
                  fontSize: 20,
                  padding: 1,
                },
              }),
            ],
          }),
          t ? ee.jsx(lF, {}) : ee.jsx(pF, {}),
        ],
      }),
    });
  },
  hF = () => {
    const e = Hl(),
      { runWireShark: t } = ca((r) => r.exp),
      n = () => {
        e(DS(!0)),
          e(
            LS(
              "To proceed further,select the specific network attack you would like to address or analyze."
            )
          );
      };
    return ee.jsx(sc, {
      to: "1",
      from: "0.1",
      attributeName: "opacity",
      children: ee.jsx("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        },
        children: ee.jsxs("div", {
          style: {
            width: "80%",
            height: "80%",
            background: "black",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          children: [
            ee.jsxs("div", {
              style: {
                width: "95%",
                height: "95%",
                background: "red",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginInline: 10,
              },
              children: [
                ee.jsx("img", {
                  style: { width: "100%", height: "100%", zIndex: 5 },
                  src: xO,
                }),
                ee.jsxs("div", {
                  style: {
                    flex: 0.9,
                    background: "transparent",
                    position: "absolute",
                    zIndex: 5e3,
                    width: "100%",
                    height: "93%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  },
                  children: [
                    ee.jsx("div", {
                      style: {
                        background: "transparent",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 0.1,
                      },
                      children: ee.jsx("div", {
                        style: {
                          width: 80,
                          height: "35%",
                          background: "transparent",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          flex: 1,
                        },
                        children: ee.jsx(EO, {
                          onClick: n,
                          size: "md",
                          icon: ES,
                          title: "Wireshark",
                        }),
                      }),
                    }),
                    t && ee.jsx(mF, {}),
                  ],
                }),
                ee.jsx("div", {
                  style: {
                    flex: 0.1,
                    background: "transparent",
                    position: "absolute",
                    zIndex: 5e3,
                    bottom: 0,
                    width: "100%",
                    height: "7%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  children: ee.jsx("div", {
                    style: {
                      width: "25%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      background: "transparent",
                      justifyContent: "flex-start",
                    },
                    className: "toolbox",
                  }),
                }),
              ],
            }),
            ee.jsx("div", {
              style: {
                width: 50,
                height: 70,
                background: "black",
                position: "absolute",
                bottom: -55,
                left: "49%",
              },
            }),
          ],
        }),
      }),
    });
  },
  gF = () =>
    ee.jsx("div", {
      style: { flex: 0.75, background: "#00122e" },
      children: ee.jsx(hF, {}),
    });
ke.arrayOf(ke.object).isRequired;
const yF = [
    { value: "1", label: "Investigation network traffic for plain passwords." },
    { value: "2", label: "Identifying DNS anomalies" },
    { value: "3", label: "Analyzing Traffic for SYN Flooding Attempts" },
    { value: "4", label: "Analyzing ARP Poisonings attempts" },
  ],
  SF = () => {
    const { selectedInvesigation: e, steps: t } = ca((c) => c.exp),
      n = Hl(),
      r = f.useRef(null);
    f.useEffect(() => {
      r.current && (r.current.scrollTop = r.current.scrollHeight);
    }, [t]);
    const o = (c) =>
        (c == null ? void 0 : c.split(/(".*?")/).filter(Boolean)).map((v, g) =>
          v.startsWith('"') && v.endsWith('"')
            ? ee.jsx("span", { className: "highlight", children: v }, g)
            : v
        ),
      i = () => {
        n(kS());
      },
      a = (c) => {
        const d = t == null ? void 0 : t.slice(0, 2);
        t.length > 2 && n(fR(d)),
          n(LS("Drag and drop this file into Wireshark.")),
          n(cR(c));
      },
      l =
        e === "1"
          ? "HTTPTraffic.pcap"
          : e === "2"
          ? "DNS.pcap"
          : e === "3"
          ? "SYN.pcap"
          : e === "4"
          ? "ARP.pcap"
          : "",
      s = (c) => {
        c.dataTransfer.setData("text/plain", e), n(Jd(!0));
      },
      u = () => {
        n(Jd(!1));
      };
    return ee.jsxs("div", {
      style: {
        marginBlock: 10,
        marginLeft: 10,
        height: "90%",
        overflowY: "auto",
      },
      id: "scroll",
      ref: r,
      children: [
        ee.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 15,
          },
          children: ee.jsx(Xl, {
            onClick: i,
            style: { background: "#00122e", color: "white" },
            children: "Reset",
          }),
        }),
        t.map((c, d) =>
          ee.jsx(
            "div",
            {
              style: {
                width: "95%",
                marginInline: "auto",
                background: "#DFEDFB",
                borderRadius: 20,
                paddingInline: 20,
                paddingBlock: 15,
                marginBlock: 15,
              },
              children: ee.jsx("div", {
                style: { display: "flex", flexDirection: "column" },
                children: ee.jsxs(
                  "div",
                  {
                    style: {
                      marginBlock: 10,
                      display: "flex",
                      flexDirection: "column",
                    },
                    children: [
                      ee.jsxs("div", {
                        style: { display: "flex", marginBlock: 5 },
                        children: [
                          ee.jsxs("h5", {
                            style: {
                              margin: 0,
                              fontSize: 13,
                              fontWeight: 600,
                              color: "black",
                            },
                            children: [d + 1, "."],
                          }),
                          ee.jsx("h5", {
                            style: {
                              margin: 0,
                              marginLeft: 5,
                              color: "black",
                              fontWeight: 700,
                              fontSize: 14,
                            },
                            children: o(c),
                          }),
                        ],
                      }),
                      d === 1 &&
                        ee.jsx("div", {
                          style: {
                            marginBlock: 5,
                            borderRadius: 5,
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: ee.jsx(ha, {
                            onChange: a,
                            style: { width: "100%" },
                            options: yF,
                            placeholder: "Select the network attack",
                          }),
                        }),
                      d === 2 &&
                        ee.jsx("div", {
                          style: {
                            marginBlock: 5,
                            background: "white",
                            height: 40,
                            width: "30%",
                            borderRadius: 5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "grabbing",
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            userSelect: "none",
                          },
                          draggable: !0,
                          onDragStart: s,
                          onDragEnd: u,
                          children: ee.jsx("h5", { children: l }),
                        }),
                    ],
                  },
                  d
                ),
              }),
            },
            d
          )
        ),
      ],
    });
  },
  bF = () =>
    ee.jsxs("div", {
      style: {
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
      children: [
        ee.jsx(gF, {}),
        ee.jsxs("div", {
          style: { flex: 0.25 },
          children: [
            ee.jsx("div", {
              style: {
                background: "#0c2136",
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: ee.jsx("h5", {
                style: { color: "white", margin: 0 },
                children: "Operations",
              }),
            }),
            ee.jsx(SF, {}),
          ],
        }),
      ],
    }),
  wF = QO({ reducer: { exp: pR } });
function CF() {
  return ee.jsx(XE, { store: wF, children: ee.jsx(bF, {}) });
}
Wf.createRoot(document.getElementById("root")).render(
  ee.jsx(ne.StrictMode, { children: ee.jsx(CF, {}) })
);
