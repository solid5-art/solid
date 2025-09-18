!(function () {
  "use strict";
  var t,
    e,
    n = Object.defineProperty,
    i = Object.defineProperties,
    r = Object.getOwnPropertyDescriptors,
    a = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    s = Object.prototype.propertyIsEnumerable,
    h = (t, e, i) =>
      e in t
        ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
        : (t[e] = i),
    l = (t, e) => {
      for (var n in e || (e = {})) o.call(e, n) && h(t, n, e[n]);
      if (a) for (var n of a(e)) s.call(e, n) && h(t, n, e[n]);
      return t;
    },
    d = (t, e) => i(t, r(e)),
    u = (t, e) => {
      var n = {};
      for (var i in t) o.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (null != t && a)
        for (var i of a(t)) e.indexOf(i) < 0 && s.call(t, i) && (n[i] = t[i]);
      return n;
    },
    c = (t, e, n) => h(t, "symbol" != typeof e ? e + "" : e, n),
    v = (t, e, n) =>
      new Promise((i, r) => {
        var a = (t) => {
            try {
              s(n.next(t));
            } catch (t) {
              r(t);
            }
          },
          o = (t) => {
            try {
              s(n.throw(t));
            } catch (t) {
              r(t);
            }
          },
          s = (t) =>
            t.done ? i(t.value) : Promise.resolve(t.value).then(a, o);
        s((n = n.apply(t, e)).next());
      }),
    _ = class {
      requestAnimationFrame(t) {
        return requestAnimationFrame(t);
      }
      cancelAnimationFrame(t) {
        cancelAnimationFrame(t);
      }
    },
    f = class {
      constructor() {
        c(this, "_lastHandleId", 0), c(this, "_lastImmediate", null);
      }
      requestAnimationFrame(t) {
        return (
          this._lastHandleId >= Number.MAX_SAFE_INTEGER &&
            (this._lastHandleId = 0),
          (this._lastHandleId += 1),
          (this._lastImmediate = setImmediate(() => {
            t(Date.now());
          })),
          this._lastHandleId
        );
      }
      cancelAnimationFrame(t) {
        this._lastImmediate && clearImmediate(this._lastImmediate);
      }
    },
    p = class {
      constructor() {
        c(this, "_strategy"),
          (this._strategy =
            "function" == typeof requestAnimationFrame ? new _() : new f());
      }
      requestAnimationFrame(t) {
        return this._strategy.requestAnimationFrame(t);
      }
      cancelAnimationFrame(t) {
        this._strategy.cancelAnimationFrame(t);
      }
    },
    m = "undefined" != typeof window && void 0 !== window.document,
    g = new Uint8Array([80, 75, 3, 4]),
    y = ["v", "ip", "op", "layers", "fr", "w", "h"],
    w = "0.39.0",
    L = "@lottiefiles/dotlottie-web",
    C =
      ((e =
        "undefined" != typeof document
          ? null == (t = document.currentScript)
            ? void 0
            : t.src
          : void 0),
      function (t = {}) {
        var n,
          i,
          r,
          a = t,
          o = new Promise((t, e) => {
            (n = t), (i = e);
          }),
          s = Object.assign({}, a),
          h = "./this.program",
          l = "";
        "undefined" != typeof document &&
          document.currentScript &&
          (l = document.currentScript.src),
          e && (l = e),
          (l = l.startsWith("blob:")
            ? ""
            : l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
          (r = (t) =>
            fetch(t, { credentials: "same-origin" }).then((t) =>
              t.ok
                ? t.arrayBuffer()
                : Promise.reject(Error(t.status + " : " + t.url)),
            ));
        var d = a.print || function () {}.bind(),
          u = a.printErr || function () {}.bind();
        Object.assign(a, s), (s = null), a.thisProgram && (h = a.thisProgram);
        var v,
          _,
          f,
          p,
          m,
          g,
          y,
          w,
          L,
          C,
          M = a.wasmBinary,
          b = !1;
        function I() {
          var t = v.buffer;
          (a.HEAP8 = f = new Int8Array(t)),
            (a.HEAP16 = m = new Int16Array(t)),
            (a.HEAPU8 = p = new Uint8Array(t)),
            (a.HEAPU16 = g = new Uint16Array(t)),
            (a.HEAP32 = y = new Int32Array(t)),
            (a.HEAPU32 = w = new Uint32Array(t)),
            (a.HEAPF32 = L = new Float32Array(t)),
            (a.HEAPF64 = C = new Float64Array(t));
        }
        var E = [],
          S = [],
          P = [];
        function F() {
          var t = a.preRun.shift();
          E.unshift(t);
        }
        var A = 0,
          D = null;
        function x(t) {
          var e;
          throw (
            (null == (e = a.onAbort) || e.call(a, t),
            u((t = "Aborted(" + t + ")")),
            (b = !0),
            (t = new WebAssembly.RuntimeError(
              t + ". Build with -sASSERTIONS for more info.",
            )),
            i(t),
            t)
          );
        }
        var T,
          k = (t) => t.startsWith("data:application/octet-stream;base64,");
        function O(t) {
          if (t == T && M) return new Uint8Array(M);
          throw "both async and sync fetching of the wasm failed";
        }
        function z(t, e, n) {
          return (function (t) {
            return M
              ? Promise.resolve().then(() => O(t))
              : r(t).then(
                  (t) => new Uint8Array(t),
                  () => O(t),
                );
          })(t)
            .then((t) => WebAssembly.instantiate(t, e))
            .then(n, (t) => {
              u(`failed to asynchronously prepare wasm: ${t}`), x(t);
            });
        }
        class $ {
          constructor(t) {
            c(this, "name", "ExitStatus"),
              (this.message = `Program terminated with exit(${t})`),
              (this.status = t);
          }
        }
        var R = (t) => {
            for (; 0 < t.length; ) t.shift()(a);
          },
          W = a.noExitRuntime || !0,
          j = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0,
          U = (t, e = 0, n = NaN) => {
            var i = e + n;
            for (n = e; t[n] && !(n >= i); ) ++n;
            if (16 < n - e && t.buffer && j) return j.decode(t.subarray(e, n));
            for (i = ""; e < n; ) {
              var r = t[e++];
              if (128 & r) {
                var a = 63 & t[e++];
                if (192 == (224 & r))
                  i += String.fromCharCode(((31 & r) << 6) | a);
                else {
                  var o = 63 & t[e++];
                  65536 >
                  (r =
                    224 == (240 & r)
                      ? ((15 & r) << 12) | (a << 6) | o
                      : ((7 & r) << 18) | (a << 12) | (o << 6) | (63 & t[e++]))
                    ? (i += String.fromCharCode(r))
                    : ((r -= 65536),
                      (i += String.fromCharCode(
                        55296 | (r >> 10),
                        56320 | (1023 & r),
                      )));
                }
              } else i += String.fromCharCode(r);
            }
            return i;
          };
        class B {
          constructor(t) {
            this.wa = t - 24;
          }
        }
        var H = (t, e, n) => {
            var i = p;
            if (0 < n) {
              n = e + n - 1;
              for (var r = 0; r < t.length; ++r) {
                var a = t.charCodeAt(r);
                if (
                  (55296 <= a &&
                    57343 >= a &&
                    (a =
                      (65536 + ((1023 & a) << 10)) |
                      (1023 & t.charCodeAt(++r))),
                  127 >= a)
                ) {
                  if (e >= n) break;
                  i[e++] = a;
                } else {
                  if (2047 >= a) {
                    if (e + 1 >= n) break;
                    i[e++] = 192 | (a >> 6);
                  } else {
                    if (65535 >= a) {
                      if (e + 2 >= n) break;
                      i[e++] = 224 | (a >> 12);
                    } else {
                      if (e + 3 >= n) break;
                      (i[e++] = 240 | (a >> 18)),
                        (i[e++] = 128 | ((a >> 12) & 63));
                    }
                    i[e++] = 128 | ((a >> 6) & 63);
                  }
                  i[e++] = 128 | (63 & a);
                }
              }
              i[e] = 0;
            }
          },
          N = {},
          V = (t) => {
            for (; t.length; ) {
              var e = t.pop();
              t.pop()(e);
            }
          };
        function q(t) {
          return this.fromWireType(w[t >> 2]);
        }
        var J,
          G,
          K,
          X = {},
          Y = {},
          Q = {},
          Z = (t, e, n) => {
            function i(e) {
              if ((e = n(e)).length !== t.length)
                throw new J("Mismatched type converter count");
              for (var i = 0; i < t.length; ++i) et(t[i], e[i]);
            }
            t.forEach((t) => (Q[t] = e));
            var r = Array(e.length),
              a = [],
              o = 0;
            e.forEach((t, e) => {
              Y.hasOwnProperty(t)
                ? (r[e] = Y[t])
                : (a.push(t),
                  X.hasOwnProperty(t) || (X[t] = []),
                  X[t].push(() => {
                    (r[e] = Y[t]), ++o === a.length && i(r);
                  }));
            }),
              0 === a.length && i(r);
          },
          tt = (t) => {
            for (var e = ""; p[t]; ) e += G[p[t++]];
            return e;
          };
        function et(t, e, n = {}) {
          return (function (t, e, n = {}) {
            var i = e.name;
            if (!t)
              throw new K(
                `type "${i}" must have a positive integer typeid pointer`,
              );
            if (Y.hasOwnProperty(t)) {
              if (n.ab) return;
              throw new K(`Cannot register type '${i}' twice`);
            }
            (Y[t] = e),
              delete Q[t],
              X.hasOwnProperty(t) &&
                ((e = X[t]), delete X[t], e.forEach((t) => t()));
          })(t, e, n);
        }
        var nt = (t) => {
            throw new K(t.ua.xa.va.name + " instance already deleted");
          },
          it = !1,
          rt = () => {},
          at = (t, e, n) =>
            e === n
              ? t
              : void 0 === n.Aa || null === (t = at(t, e, n.Aa))
                ? null
                : n.Ua(t),
          ot = {},
          st = {},
          ht = (t, e) => {
            if (!e.xa || !e.wa)
              throw new J("makeClassHandle requires ptr and ptrType");
            if (!!e.Ba != !!e.za)
              throw new J("Both smartPtrType and smartPtr must be specified");
            return (
              (e.count = { value: 1 }),
              lt(Object.create(t, { ua: { value: e, writable: !0 } }))
            );
          },
          lt = (t) =>
            "undefined" == typeof FinalizationRegistry
              ? ((lt = (t) => t), t)
              : ((it = new FinalizationRegistry((t) => {
                  --(t = t.ua).count.value,
                    0 === t.count.value &&
                      (t.za ? t.Ba.Ea(t.za) : t.xa.va.Ea(t.wa));
                })),
                (rt = (t) => {
                  it.unregister(t);
                }),
                (lt = (t) => {
                  var e = t.ua;
                  return e.za && it.register(t, { ua: e }, t), t;
                })(t));
        function dt() {}
        var ut = (t, e) => Object.defineProperty(e, "name", { value: t }),
          ct = (t, e, n) => {
            if (void 0 === t[e].ya) {
              var i = t[e];
              (t[e] = function (...i) {
                if (!t[e].ya.hasOwnProperty(i.length))
                  throw new K(
                    `Function '${n}' called with an invalid number of arguments (${i.length}) - expects one of (${t[e].ya})!`,
                  );
                return t[e].ya[i.length].apply(this, i);
              }),
                (t[e].ya = []),
                (t[e].ya[i.Ha] = i);
            }
          },
          vt = (t, e, n) => {
            if (a.hasOwnProperty(t)) {
              if (void 0 === n || (void 0 !== a[t].ya && void 0 !== a[t].ya[n]))
                throw new K(`Cannot register public name '${t}' twice`);
              if ((ct(a, t, t), a[t].ya.hasOwnProperty(n)))
                throw new K(
                  `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                );
              a[t].ya[n] = e;
            } else (a[t] = e), (a[t].Ha = n);
          };
        function _t(t, e, n, i, r, a, o, s) {
          (this.name = t),
            (this.constructor = e),
            (this.Ga = n),
            (this.Ea = i),
            (this.Aa = r),
            (this.Wa = a),
            (this.Ka = o),
            (this.Ua = s),
            (this.cb = []);
        }
        var ft = (t, e, n) => {
          for (; e !== n; ) {
            if (!e.Ka)
              throw new K(
                `Expected null or instance of ${n.name}, got an instance of ${e.name}`,
              );
            (t = e.Ka(t)), (e = e.Aa);
          }
          return t;
        };
        function pt(t, e) {
          if (null === e) {
            if (this.Na) throw new K(`null is not a valid ${this.name}`);
            return 0;
          }
          if (!e.ua) throw new K(`Cannot pass "${Bt(e)}" as a ${this.name}`);
          if (!e.ua.wa)
            throw new K(
              `Cannot pass deleted object as a pointer of type ${this.name}`,
            );
          return ft(e.ua.wa, e.ua.xa.va, this.va);
        }
        function mt(t, e) {
          if (null === e) {
            if (this.Na) throw new K(`null is not a valid ${this.name}`);
            if (this.Ma) {
              var n = this.Oa();
              return null !== t && t.push(this.Ea, n), n;
            }
            return 0;
          }
          if (!e || !e.ua)
            throw new K(`Cannot pass "${Bt(e)}" as a ${this.name}`);
          if (!e.ua.wa)
            throw new K(
              `Cannot pass deleted object as a pointer of type ${this.name}`,
            );
          if (!this.La && e.ua.xa.La)
            throw new K(
              `Cannot convert argument of type ${e.ua.Ba ? e.ua.Ba.name : e.ua.xa.name} to parameter type ${this.name}`,
            );
          if (((n = ft(e.ua.wa, e.ua.xa.va, this.va)), this.Ma)) {
            if (void 0 === e.ua.za)
              throw new K("Passing raw pointer to smart pointer is illegal");
            switch (this.ib) {
              case 0:
                if (e.ua.Ba !== this)
                  throw new K(
                    `Cannot convert argument of type ${e.ua.Ba ? e.ua.Ba.name : e.ua.xa.name} to parameter type ${this.name}`,
                  );
                n = e.ua.za;
                break;
              case 1:
                n = e.ua.za;
                break;
              case 2:
                if (e.ua.Ba === this) n = e.ua.za;
                else {
                  var i = e.clone();
                  (n = this.eb(
                    n,
                    Rt(() => i.delete()),
                  )),
                    null !== t && t.push(this.Ea, n);
                }
                break;
              default:
                throw new K("Unsupporting sharing policy");
            }
          }
          return n;
        }
        function gt(t, e) {
          if (null === e) {
            if (this.Na) throw new K(`null is not a valid ${this.name}`);
            return 0;
          }
          if (!e.ua) throw new K(`Cannot pass "${Bt(e)}" as a ${this.name}`);
          if (!e.ua.wa)
            throw new K(
              `Cannot pass deleted object as a pointer of type ${this.name}`,
            );
          if (e.ua.xa.La)
            throw new K(
              `Cannot convert argument of type ${e.ua.xa.name} to parameter type ${this.name}`,
            );
          return ft(e.ua.wa, e.ua.xa.va, this.va);
        }
        function yt(t, e, n, i, r, a, o, s, h, l, d) {
          (this.name = t),
            (this.va = e),
            (this.Na = n),
            (this.La = i),
            (this.Ma = r),
            (this.bb = a),
            (this.ib = o),
            (this.Sa = s),
            (this.Oa = h),
            (this.eb = l),
            (this.Ea = d),
            r || void 0 !== e.Aa
              ? (this.toWireType = mt)
              : ((this.toWireType = i ? pt : gt), (this.Da = null));
        }
        var wt,
          Lt,
          Ct = (t, e, n) => {
            if (!a.hasOwnProperty(t))
              throw new J("Replacing nonexistent public symbol");
            void 0 !== a[t].ya && void 0 !== n
              ? (a[t].ya[n] = e)
              : ((a[t] = e), (a[t].Ha = n));
          },
          Mt =
            (t, e) =>
            (...n) =>
              ((t, e, n = []) => (
                t.includes("j")
                  ? ((t = t.replace(/p/g, "i")),
                    (e = (0, a["dynCall_" + t])(e, ...n)))
                  : (e = wt.get(e)(...n)),
                e
              ))(t, e, n),
          bt = (t, e) => {
            var n = (t = tt(t)).includes("j") ? Mt(t, e) : wt.get(e);
            if ("function" != typeof n)
              throw new K(`unknown function pointer with signature ${t}: ${e}`);
            return n;
          },
          It = (t) => {
            t = fe(t);
            var e = tt(t);
            return pe(t), e;
          },
          Et = (t, e) => {
            var n = [],
              i = {};
            throw (
              (e.forEach(function t(e) {
                i[e] ||
                  Y[e] ||
                  (Q[e] ? Q[e].forEach(t) : (n.push(e), (i[e] = !0)));
              }),
              new Lt(`${t}: ` + n.map(It).join([", "])))
            );
          },
          St = (t, e) => {
            for (var n = [], i = 0; i < t; i++) n.push(w[(e + 4 * i) >> 2]);
            return n;
          };
        function Pt(t, e, n, i, r) {
          var a = e.length;
          if (2 > a)
            throw new K(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          var o = null !== e[1] && null !== n,
            s = (function (t) {
              for (var e = 1; e < t.length; ++e)
                if (null !== t[e] && void 0 === t[e].Da) return !0;
              return !1;
            })(e),
            h = "void" !== e[0].name,
            l = a - 2,
            d = Array(l),
            u = [],
            c = [];
          return ut(t, function (...t) {
            if (((c.length = 0), (u.length = o ? 2 : 1), (u[0] = r), o)) {
              var n = e[1].toWireType(c, this);
              u[1] = n;
            }
            for (var a = 0; a < l; ++a)
              (d[a] = e[a + 2].toWireType(c, t[a])), u.push(d[a]);
            if (((t = i(...u)), s)) V(c);
            else
              for (a = o ? 1 : 2; a < e.length; a++) {
                var v = 1 === a ? n : d[a - 2];
                null !== e[a].Da && e[a].Da(v);
              }
            return (n = h ? e[0].fromWireType(t) : void 0);
          });
        }
        var Ft,
          At,
          Dt,
          xt,
          Tt = (t) => {
            let e = (t = t.trim()).indexOf("(");
            return -1 !== e ? t.substr(0, e) : t;
          },
          kt = [],
          Ot = [],
          zt = (t) => {
            9 < t && 0 == --Ot[t + 1] && ((Ot[t] = void 0), kt.push(t));
          },
          $t = (t) => {
            if (!t) throw new K("Cannot use deleted val. handle = " + t);
            return Ot[t];
          },
          Rt = (t) => {
            switch (t) {
              case void 0:
                return 2;
              case null:
                return 4;
              case !0:
                return 6;
              case !1:
                return 8;
              default:
                let e = kt.pop() || Ot.length;
                return (Ot[e] = t), (Ot[e + 1] = 1), e;
            }
          },
          Wt = {
            name: "emscripten::val",
            fromWireType: (t) => {
              var e = $t(t);
              return zt(t), e;
            },
            toWireType: (t, e) => Rt(e),
            Ca: 8,
            readValueFromPointer: q,
            Da: null,
          },
          jt = (t, e, n) => {
            switch (e) {
              case 1:
                return n
                  ? function (t) {
                      return this.fromWireType(f[t]);
                    }
                  : function (t) {
                      return this.fromWireType(p[t]);
                    };
              case 2:
                return n
                  ? function (t) {
                      return this.fromWireType(m[t >> 1]);
                    }
                  : function (t) {
                      return this.fromWireType(g[t >> 1]);
                    };
              case 4:
                return n
                  ? function (t) {
                      return this.fromWireType(y[t >> 2]);
                    }
                  : function (t) {
                      return this.fromWireType(w[t >> 2]);
                    };
              default:
                throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
          },
          Ut = (t, e) => {
            var n = Y[t];
            if (void 0 === n)
              throw ((t = `${e} has unknown type ${It(t)}`), new K(t));
            return n;
          },
          Bt = (t) => {
            if (null === t) return "null";
            var e = typeof t;
            return "object" === e || "array" === e || "function" === e
              ? t.toString()
              : "" + t;
          },
          Ht = (t, e) => {
            switch (e) {
              case 4:
                return function (t) {
                  return this.fromWireType(L[t >> 2]);
                };
              case 8:
                return function (t) {
                  return this.fromWireType(C[t >> 3]);
                };
              default:
                throw new TypeError(`invalid float width (${e}): ${t}`);
            }
          },
          Nt = (t, e, n) => {
            switch (e) {
              case 1:
                return n ? (t) => f[t] : (t) => p[t];
              case 2:
                return n ? (t) => m[t >> 1] : (t) => g[t >> 1];
              case 4:
                return n ? (t) => y[t >> 2] : (t) => w[t >> 2];
              default:
                throw new TypeError(`invalid integer width (${e}): ${t}`);
            }
          },
          Vt = Object.assign({ optional: !0 }, Wt),
          qt =
            "undefined" != typeof TextDecoder
              ? new TextDecoder("utf-16le")
              : void 0,
          Jt = (t, e) => {
            for (var n = t >> 1, i = n + e / 2; !(n >= i) && g[n]; ) ++n;
            if (32 < (n <<= 1) - t && qt) return qt.decode(p.subarray(t, n));
            for (n = "", i = 0; !(i >= e / 2); ++i) {
              var r = m[(t + 2 * i) >> 1];
              if (0 == r) break;
              n += String.fromCharCode(r);
            }
            return n;
          },
          Gt = (t, e, n) => {
            if ((null != n || (n = 2147483647), 2 > n)) return 0;
            var i = e;
            n = (n -= 2) < 2 * t.length ? n / 2 : t.length;
            for (var r = 0; r < n; ++r) (m[e >> 1] = t.charCodeAt(r)), (e += 2);
            return (m[e >> 1] = 0), e - i;
          },
          Kt = (t) => 2 * t.length,
          Xt = (t, e) => {
            for (var n = 0, i = ""; !(n >= e / 4); ) {
              var r = y[(t + 4 * n) >> 2];
              if (0 == r) break;
              ++n,
                65536 <= r
                  ? ((r -= 65536),
                    (i += String.fromCharCode(
                      55296 | (r >> 10),
                      56320 | (1023 & r),
                    )))
                  : (i += String.fromCharCode(r));
            }
            return i;
          },
          Yt = (t, e, n) => {
            if ((null != n || (n = 2147483647), 4 > n)) return 0;
            var i = e;
            n = i + n - 4;
            for (var r = 0; r < t.length; ++r) {
              var a = t.charCodeAt(r);
              if (
                (55296 <= a &&
                  57343 >= a &&
                  (a =
                    (65536 + ((1023 & a) << 10)) | (1023 & t.charCodeAt(++r))),
                (y[e >> 2] = a),
                (e += 4) + 4 > n)
              )
                break;
            }
            return (y[e >> 2] = 0), e - i;
          },
          Qt = (t) => {
            for (var e = 0, n = 0; n < t.length; ++n) {
              var i = t.charCodeAt(n);
              55296 <= i && 57343 >= i && ++n, (e += 4);
            }
            return e;
          },
          Zt = 0,
          te = [],
          ee = Reflect.construct,
          ne = {},
          ie = (t) => {
            if (!(t instanceof $ || "unwind" == t)) throw t;
          },
          re = (t) => {
            var e;
            throw (
              ((_ = t),
              W || 0 < Zt || (null == (e = a.onExit) || e.call(a, t), (b = !0)),
              new $(t))
            );
          },
          ae = {},
          oe = () => {
            if (!Ft) {
              var t,
                e = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      ("object" == typeof navigator &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: h || "./this.program",
                };
              for (t in ae) void 0 === ae[t] ? delete e[t] : (e[t] = ae[t]);
              var n = [];
              for (t in e) n.push(`${t}=${e[t]}`);
              Ft = n;
            }
            return Ft;
          },
          se = [null, [], []],
          he = (t) =>
            (he = (() => {
              if (
                "object" == typeof crypto &&
                "function" == typeof crypto.getRandomValues
              )
                return (t) => crypto.getRandomValues(t);
              x("initRandomDevice");
            })())(t);
        J = a.InternalError = class extends Error {
          constructor(t) {
            super(t), (this.name = "InternalError");
          }
        };
        for (var le = Array(256), de = 0; 256 > de; ++de)
          le[de] = String.fromCharCode(de);
        (G = le),
          (K = a.BindingError =
            class extends Error {
              constructor(t) {
                super(t), (this.name = "BindingError");
              }
            }),
          Object.assign(dt.prototype, {
            isAliasOf: function (t) {
              if (!(this instanceof dt && t instanceof dt)) return !1;
              var e = this.ua.xa.va,
                n = this.ua.wa;
              t.ua = t.ua;
              var i = t.ua.xa.va;
              for (t = t.ua.wa; e.Aa; ) (n = e.Ka(n)), (e = e.Aa);
              for (; i.Aa; ) (t = i.Ka(t)), (i = i.Aa);
              return e === i && n === t;
            },
            clone: function () {
              if ((this.ua.wa || nt(this), this.ua.Ja))
                return (this.ua.count.value += 1), this;
              var t = lt,
                e = Object,
                n = e.create,
                i = Object.getPrototypeOf(this),
                r = this.ua;
              return (
                ((t = t(
                  n.call(e, i, {
                    ua: {
                      value: {
                        count: r.count,
                        Ia: r.Ia,
                        Ja: r.Ja,
                        wa: r.wa,
                        xa: r.xa,
                        za: r.za,
                        Ba: r.Ba,
                      },
                    },
                  }),
                )).ua.count.value += 1),
                (t.ua.Ia = !1),
                t
              );
            },
            delete() {
              if ((this.ua.wa || nt(this), this.ua.Ia && !this.ua.Ja))
                throw new K("Object already scheduled for deletion");
              rt(this);
              var t = this.ua;
              --t.count.value,
                0 === t.count.value &&
                  (t.za ? t.Ba.Ea(t.za) : t.xa.va.Ea(t.wa)),
                this.ua.Ja || ((this.ua.za = void 0), (this.ua.wa = void 0));
            },
            isDeleted: function () {
              return !this.ua.wa;
            },
            deleteLater: function () {
              if ((this.ua.wa || nt(this), this.ua.Ia && !this.ua.Ja))
                throw new K("Object already scheduled for deletion");
              return (this.ua.Ia = !0), this;
            },
          }),
          Object.assign(yt.prototype, {
            Xa(t) {
              return this.Sa && (t = this.Sa(t)), t;
            },
            Qa(t) {
              var e;
              null == (e = this.Ea) || e.call(this, t);
            },
            Ca: 8,
            readValueFromPointer: q,
            fromWireType: function (t) {
              function e() {
                return this.Ma
                  ? ht(this.va.Ga, { xa: this.bb, wa: n, Ba: this, za: t })
                  : ht(this.va.Ga, { xa: this, wa: t });
              }
              var n = this.Xa(t);
              if (!n) return this.Qa(t), null;
              var i = ((t, e) => {
                if (void 0 === e) throw new K("ptr should not be undefined");
                for (; t.Aa; ) (e = t.Ka(e)), (t = t.Aa);
                return st[e];
              })(this.va, n);
              if (void 0 !== i)
                return 0 === i.ua.count.value
                  ? ((i.ua.wa = n), (i.ua.za = t), i.clone())
                  : ((i = i.clone()), this.Qa(t), i);
              if (((i = this.va.Wa(n)), !(i = ot[i]))) return e.call(this);
              i = this.La ? i.Ta : i.pointerType;
              var r = at(n, this.va, i.va);
              return null === r
                ? e.call(this)
                : this.Ma
                  ? ht(i.va.Ga, { xa: i, wa: r, Ba: this, za: t })
                  : ht(i.va.Ga, { xa: i, wa: r });
            },
          }),
          (Lt = a.UnboundTypeError =
            ((At = Error),
            ((xt = ut((Dt = "UnboundTypeError"), function (t) {
              (this.name = Dt),
                (this.message = t),
                void 0 !== (t = Error(t).stack) &&
                  (this.stack =
                    this.toString() +
                    "\n" +
                    t.replace(/^Error(:[^\n]*)?\n/, ""));
            })).prototype = Object.create(At.prototype)),
            (xt.prototype.constructor = xt),
            (xt.prototype.toString = function () {
              return void 0 === this.message
                ? this.name
                : `${this.name}: ${this.message}`;
            }),
            xt)),
          Ot.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1),
          (a.count_emval_handles = () => Ot.length / 2 - 5 - kt.length);
        var ue,
          ce = {
            c: (t, e, n, i) =>
              x(
                `Assertion failed: ${t ? U(p, t) : ""}, at: ` +
                  [
                    e ? (e ? U(p, e) : "") : "unknown filename",
                    n,
                    i ? (i ? U(p, i) : "") : "unknown function",
                  ],
              ),
            m: (t, e, n) => {
              var i = new B(t);
              throw (
                ((w[(i.wa + 16) >> 2] = 0),
                (w[(i.wa + 4) >> 2] = e),
                (w[(i.wa + 8) >> 2] = n),
                t)
              );
            },
            M: () => {},
            J: () => {},
            K: () => {},
            P: function () {},
            L: () => {},
            R: () => x(""),
            v: (t) => {
              var e = N[t];
              delete N[t];
              var n = e.Oa,
                i = e.Ea,
                r = e.Ra,
                a = r.map((t) => t.$a).concat(r.map((t) => t.gb));
              Z([t], a, (t) => {
                var a = {};
                return (
                  r.forEach((e, n) => {
                    var i = t[n],
                      o = e.Ya,
                      s = e.Za,
                      h = t[n + r.length],
                      l = e.fb,
                      d = e.hb;
                    a[e.Va] = {
                      read: (t) => i.fromWireType(o(s, t)),
                      write: (t, e) => {
                        var n = [];
                        l(d, t, h.toWireType(n, e)), V(n);
                      },
                    };
                  }),
                  [
                    {
                      name: e.name,
                      fromWireType: (t) => {
                        var e,
                          n = {};
                        for (e in a) n[e] = a[e].read(t);
                        return i(t), n;
                      },
                      toWireType: (t, e) => {
                        for (var r in a)
                          if (!(r in e))
                            throw new TypeError(`Missing field: "${r}"`);
                        var o = n();
                        for (r in a) a[r].write(o, e[r]);
                        return null !== t && t.push(i, o), o;
                      },
                      Ca: 8,
                      readValueFromPointer: q,
                      Da: i,
                    },
                  ]
                );
              });
            },
            C: () => {},
            W: (t, e, n, i) => {
              et(t, {
                name: (e = tt(e)),
                fromWireType: function (t) {
                  return !!t;
                },
                toWireType: function (t, e) {
                  return e ? n : i;
                },
                Ca: 8,
                readValueFromPointer: function (t) {
                  return this.fromWireType(p[t]);
                },
                Da: null,
              });
            },
            r: (t, e, n, i, r, a, o, s, h, l, d, u, c) => {
              (d = tt(d)),
                (a = bt(r, a)),
                s && (s = bt(o, s)),
                l && (l = bt(h, l)),
                (c = bt(u, c));
              var v = ((t) => {
                var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return 48 <= e && 57 >= e ? `_${t}` : t;
              })(d);
              vt(v, function () {
                Et(`Cannot construct ${d} due to unbound types`, [i]);
              }),
                Z([t, e, n], i ? [i] : [], (e) => {
                  if (((e = e[0]), i))
                    var n = e.va,
                      r = n.Ga;
                  else r = dt.prototype;
                  e = ut(d, function (...t) {
                    if (Object.getPrototypeOf(this) !== o)
                      throw new K("Use 'new' to construct " + d);
                    if (void 0 === u.Fa)
                      throw new K(d + " has no accessible constructor");
                    var e = u.Fa[t.length];
                    if (void 0 === e)
                      throw new K(
                        `Tried to invoke ctor of ${d} with invalid number of parameters (${t.length}) - expected (${Object.keys(u.Fa).toString()}) parameters instead!`,
                      );
                    return e.apply(this, t);
                  });
                  var o = Object.create(r, { constructor: { value: e } });
                  e.prototype = o;
                  var h,
                    u = new _t(d, e, o, c, n, a, s, l);
                  return (
                    u.Aa &&
                      (null != (h = u.Aa).Pa || (h.Pa = []), u.Aa.Pa.push(u)),
                    (n = new yt(d, u, !0, !1, !1)),
                    (h = new yt(d + "*", u, !1, !1, !1)),
                    (r = new yt(d + " const*", u, !1, !0, !1)),
                    (ot[t] = { pointerType: h, Ta: r }),
                    Ct(v, e),
                    [n, h, r]
                  );
                });
            },
            q: (t, e, n, i, r, a) => {
              var o = St(e, n);
              (r = bt(i, r)),
                Z([], [t], (t) => {
                  var n = `constructor ${(t = t[0]).name}`;
                  if (
                    (void 0 === t.va.Fa && (t.va.Fa = []),
                    void 0 !== t.va.Fa[e - 1])
                  )
                    throw new K(
                      `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${t.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                    );
                  return (
                    (t.va.Fa[e - 1] = () => {
                      Et(`Cannot construct ${t.name} due to unbound types`, o);
                    }),
                    Z(
                      [],
                      o,
                      (i) => (
                        i.splice(1, 0, null),
                        (t.va.Fa[e - 1] = Pt(n, i, null, r, a)),
                        []
                      ),
                    ),
                    []
                  );
                });
            },
            f: (t, e, n, i, r, a, o, s) => {
              var h = St(n, i);
              (e = tt(e)),
                (e = Tt(e)),
                (a = bt(r, a)),
                Z([], [t], (t) => {
                  function i() {
                    Et(`Cannot call ${r} due to unbound types`, h);
                  }
                  var r = `${(t = t[0]).name}.${e}`;
                  e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                    s && t.va.cb.push(e);
                  var l = t.va.Ga,
                    d = l[e];
                  return (
                    void 0 === d ||
                    (void 0 === d.ya &&
                      d.className !== t.name &&
                      d.Ha === n - 2)
                      ? ((i.Ha = n - 2), (i.className = t.name), (l[e] = i))
                      : (ct(l, e, r), (l[e].ya[n - 2] = i)),
                    Z(
                      [],
                      h,
                      (i) => (
                        (i = Pt(r, i, t, a, o)),
                        void 0 === l[e].ya
                          ? ((i.Ha = n - 2), (l[e] = i))
                          : (l[e].ya[n - 2] = i),
                        []
                      ),
                    ),
                    []
                  );
                });
            },
            V: (t) => et(t, Wt),
            x: (t, e, n, i) => {
              function r() {}
              (e = tt(e)),
                (r.values = {}),
                et(t, {
                  name: e,
                  constructor: r,
                  fromWireType: function (t) {
                    return this.constructor.values[t];
                  },
                  toWireType: (t, e) => e.value,
                  Ca: 8,
                  readValueFromPointer: jt(e, n, i),
                  Da: null,
                }),
                vt(e, r);
            },
            k: (t, e, n) => {
              var i = Ut(t, "enum");
              (e = tt(e)),
                (t = i.constructor),
                (i = Object.create(i.constructor.prototype, {
                  value: { value: n },
                  constructor: { value: ut(`${i.name}_${e}`, function () {}) },
                })),
                (t.values[n] = i),
                (t[e] = i);
            },
            z: (t, e, n) => {
              et(t, {
                name: (e = tt(e)),
                fromWireType: (t) => t,
                toWireType: (t, e) => e,
                Ca: 8,
                readValueFromPointer: Ht(e, n),
                Da: null,
              });
            },
            u: (t, e, n, i, r, a) => {
              var o = St(e, n);
              (t = tt(t)),
                (t = Tt(t)),
                (r = bt(i, r)),
                vt(
                  t,
                  function () {
                    Et(`Cannot call ${t} due to unbound types`, o);
                  },
                  e - 1,
                ),
                Z(
                  [],
                  o,
                  (n) => (
                    Ct(
                      t,
                      Pt(t, [n[0], null].concat(n.slice(1)), null, r, a),
                      e - 1,
                    ),
                    []
                  ),
                );
            },
            l: (t, e, n, i, r) => {
              if (
                ((e = tt(e)),
                -1 === r && (r = 4294967295),
                (r = (t) => t),
                0 === i)
              ) {
                var a = 32 - 8 * n;
                r = (t) => (t << a) >>> a;
              }
              var o = e.includes("unsigned")
                ? function (t, e) {
                    return e >>> 0;
                  }
                : function (t, e) {
                    return e;
                  };
              et(t, {
                name: e,
                fromWireType: r,
                toWireType: o,
                Ca: 8,
                readValueFromPointer: Nt(e, n, 0 !== i),
                Da: null,
              });
            },
            h: (t, e, n) => {
              function i(t) {
                return new r(f.buffer, w[(t + 4) >> 2], w[t >> 2]);
              }
              var r = [
                Int8Array,
                Uint8Array,
                Int16Array,
                Uint16Array,
                Int32Array,
                Uint32Array,
                Float32Array,
                Float64Array,
              ][e];
              et(
                t,
                {
                  name: (n = tt(n)),
                  fromWireType: i,
                  Ca: 8,
                  readValueFromPointer: i,
                },
                { ab: !0 },
              );
            },
            t: (t) => {
              et(t, Vt);
            },
            aa: (t, e, n, i, r, a, o, s, h, l, d, u) => {
              (n = tt(n)),
                (a = bt(r, a)),
                (s = bt(o, s)),
                (l = bt(h, l)),
                (u = bt(d, u)),
                Z(
                  [t],
                  [e],
                  (t) => (
                    (t = t[0]), [new yt(n, t.va, !1, !1, !0, t, i, a, s, l, u)]
                  ),
                );
            },
            A: (t, e) => {
              var n = "std::string" === (e = tt(e));
              et(t, {
                name: e,
                fromWireType: function (t) {
                  var e = w[t >> 2],
                    i = t + 4;
                  if (n)
                    for (var r = i, a = 0; a <= e; ++a) {
                      var o = i + a;
                      if (a == e || 0 == p[o]) {
                        if (((r = r ? U(p, r, o - r) : ""), void 0 === s))
                          var s = r;
                        else (s += "\0"), (s += r);
                        r = o + 1;
                      }
                    }
                  else {
                    for (s = Array(e), a = 0; a < e; ++a)
                      s[a] = String.fromCharCode(p[i + a]);
                    s = s.join("");
                  }
                  return pe(t), s;
                },
                toWireType: function (t, e) {
                  e instanceof ArrayBuffer && (e = new Uint8Array(e));
                  var i,
                    r = "string" == typeof e;
                  if (
                    !(
                      r ||
                      e instanceof Uint8Array ||
                      e instanceof Uint8ClampedArray ||
                      e instanceof Int8Array
                    )
                  )
                    throw new K("Cannot pass non-string to std::string");
                  if (n && r)
                    for (var a = (i = 0); a < e.length; ++a) {
                      var o = e.charCodeAt(a);
                      127 >= o
                        ? i++
                        : 2047 >= o
                          ? (i += 2)
                          : 55296 <= o && 57343 >= o
                            ? ((i += 4), ++a)
                            : (i += 3);
                    }
                  else i = e.length;
                  if (((o = (a = _e(4 + i + 1)) + 4), (w[a >> 2] = i), n && r))
                    H(e, o, i + 1);
                  else if (r)
                    for (r = 0; r < i; ++r) {
                      var s = e.charCodeAt(r);
                      if (255 < s)
                        throw (
                          (pe(o),
                          new K(
                            "String has UTF-16 code units that do not fit in 8 bits",
                          ))
                        );
                      p[o + r] = s;
                    }
                  else for (r = 0; r < i; ++r) p[o + r] = e[r];
                  return null !== t && t.push(pe, a), a;
                },
                Ca: 8,
                readValueFromPointer: q,
                Da(t) {
                  pe(t);
                },
              });
            },
            s: (t, e, n) => {
              if (((n = tt(n)), 2 === e))
                var i = Jt,
                  r = Gt,
                  a = Kt,
                  o = (t) => g[t >> 1];
              else
                4 === e &&
                  ((i = Xt), (r = Yt), (a = Qt), (o = (t) => w[t >> 2]));
              et(t, {
                name: n,
                fromWireType: (t) => {
                  for (var n, r = w[t >> 2], a = t + 4, s = 0; s <= r; ++s) {
                    var h = t + 4 + s * e;
                    (s == r || 0 == o(h)) &&
                      ((a = i(a, h - a)),
                      void 0 === n ? (n = a) : ((n += "\0"), (n += a)),
                      (a = h + e));
                  }
                  return pe(t), n;
                },
                toWireType: (t, i) => {
                  if ("string" != typeof i)
                    throw new K(
                      `Cannot pass non-string to C++ string type ${n}`,
                    );
                  var o = a(i),
                    s = _e(4 + o + e);
                  return (
                    (w[s >> 2] = o / e),
                    r(i, s + 4, o + e),
                    null !== t && t.push(pe, s),
                    s
                  );
                },
                Ca: 8,
                readValueFromPointer: q,
                Da(t) {
                  pe(t);
                },
              });
            },
            w: (t, e, n, i, r, a) => {
              N[t] = { name: tt(e), Oa: bt(n, i), Ea: bt(r, a), Ra: [] };
            },
            j: (t, e, n, i, r, a, o, s, h, l) => {
              N[t].Ra.push({
                Va: tt(e),
                $a: n,
                Ya: bt(i, r),
                Za: a,
                gb: o,
                fb: bt(s, h),
                hb: l,
              });
            },
            X: (t, e) => {
              et(t, {
                jb: !0,
                name: (e = tt(e)),
                Ca: 0,
                fromWireType: () => {},
                toWireType: () => {},
              });
            },
            H: () => {
              (W = !1), (Zt = 0);
            },
            D: () => {
              throw 1 / 0;
            },
            _: (t, e, n, i) => (t = te[t])(null, (e = $t(e)), n, i),
            B: zt,
            Z: (t, e, n) => {
              var i = ((t, e) => {
                  for (var n = Array(t), i = 0; i < t; ++i)
                    n[i] = Ut(w[(e + 4 * i) >> 2], "parameter " + i);
                  return n;
                })(t, e),
                r = i.shift();
              t--;
              var a = Array(t);
              return (
                (e = `methodCaller<(${i.map((t) => t.name).join(", ")}) => ${r.name}>`),
                ((t) => {
                  var e = te.length;
                  return te.push(t), e;
                })(
                  ut(e, (e, o, s, h) => {
                    for (var l = 0, d = 0; d < t; ++d)
                      (a[d] = i[d].readValueFromPointer(h + l)), (l += i[d].Ca);
                    return (
                      (o = 1 === n ? ee(o, a) : o.apply(e, a)),
                      (e = []),
                      (o = r.toWireType(e, o)),
                      e.length && (w[s >> 2] = Rt(e)),
                      o
                    );
                  }),
                )
              );
            },
            $: (t) => {
              9 < t && (Ot[t + 1] += 1);
            },
            Y: (t) => {
              var e = $t(t);
              V(e), zt(t);
            },
            o: (t, e) => (
              (t = (t = Ut(t, "_emval_take_value")).readValueFromPointer(e)),
              Rt(t)
            ),
            E: (t, e) => {
              if ((ne[t] && (clearTimeout(ne[t].id), delete ne[t]), !e))
                return 0;
              var n = setTimeout(() => {
                delete ne[t],
                  ((t) => {
                    if (!b)
                      try {
                        if ((t(), !(W || 0 < Zt)))
                          try {
                            (_ = t = _), re(t);
                          } catch (t) {
                            ie(t);
                          }
                      } catch (t) {
                        ie(t);
                      }
                  })(() => me(t, performance.now()));
              }, e);
              return (ne[t] = { id: n, kb: e }), 0;
            },
            F: (t, e, n, i) => {
              var r = new Date().getFullYear(),
                a = new Date(r, 0, 1).getTimezoneOffset();
              (r = new Date(r, 6, 1).getTimezoneOffset()),
                (w[t >> 2] = 60 * Math.max(a, r)),
                (y[e >> 2] = +(a != r)),
                (t = (e = (t) => {
                  var e = Math.abs(t);
                  return `UTC${0 <= t ? "-" : "+"}${String(Math.floor(e / 60)).padStart(2, "0")}${String(e % 60).padStart(2, "0")}`;
                })(a)),
                (e = e(r)),
                r < a ? (H(t, n, 17), H(e, i, 17)) : (H(t, i, 17), H(e, n, 17));
            },
            ba: () => performance.now(),
            G: (t) => {
              var e = p.length;
              if (2147483648 < (t >>>= 0)) return !1;
              for (var n = 1; 4 >= n; n *= 2) {
                var i = e * (1 + 0.2 / n);
                i = Math.min(i, t + 100663296);
                t: {
                  i =
                    ((Math.min(
                      2147483648,
                      65536 * Math.ceil(Math.max(t, i) / 65536),
                    ) -
                      v.buffer.byteLength +
                      65535) /
                      65536) |
                    0;
                  try {
                    v.grow(i), I();
                    var r = 1;
                    break t;
                  } catch (t) {}
                  r = void 0;
                }
                if (r) return !0;
              }
              return !1;
            },
            T: (t, e) => {
              var n = 0;
              return (
                oe().forEach((i, r) => {
                  var a = e + n;
                  for (r = w[(t + 4 * r) >> 2] = a, a = 0; a < i.length; ++a)
                    f[r++] = i.charCodeAt(a);
                  (f[r] = 0), (n += i.length + 1);
                }),
                0
              );
            },
            U: (t, e) => {
              var n = oe();
              w[t >> 2] = n.length;
              var i = 0;
              return n.forEach((t) => (i += t.length + 1)), (w[e >> 2] = i), 0;
            },
            Q: () => 52,
            O: () => 52,
            N: (t, e, n, i) => {
              for (var r = 0, a = 0; a < n; a++) {
                var o = w[e >> 2],
                  s = w[(e + 4) >> 2];
                e += 8;
                for (var h = 0; h < s; h++) {
                  var l = t,
                    c = p[o + h],
                    v = se[l];
                  0 === c || 10 === c
                    ? ((1 === l ? d : u)(U(v)), (v.length = 0))
                    : v.push(c);
                }
                r += s;
              }
              return (w[i >> 2] = r), 0;
            },
            i: function (t, e) {
              var n = we();
              try {
                return wt.get(t)(e);
              } catch (t) {
                if ((ye(n), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            d: function (t, e, n) {
              var i = we();
              try {
                return wt.get(t)(e, n);
              } catch (t) {
                if ((ye(i), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            e: function (t, e, n, i) {
              var r = we();
              try {
                return wt.get(t)(e, n, i);
              } catch (t) {
                if ((ye(r), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            p: function (t, e, n, i, r, a) {
              var o = we();
              try {
                return wt.get(t)(e, n, i, r, a);
              } catch (t) {
                if ((ye(o), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            y: function (t) {
              var e = we();
              try {
                wt.get(t)();
              } catch (t) {
                if ((ye(e), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            b: function (t, e) {
              var n = we();
              try {
                wt.get(t)(e);
              } catch (t) {
                if ((ye(n), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            a: function (t, e, n) {
              var i = we();
              try {
                wt.get(t)(e, n);
              } catch (t) {
                if ((ye(i), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            g: function (t, e, n, i) {
              var r = we();
              try {
                wt.get(t)(e, n, i);
              } catch (t) {
                if ((ye(r), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            n: function (t, e, n, i, r) {
              var a = we();
              try {
                wt.get(t)(e, n, i, r);
              } catch (t) {
                if ((ye(a), t !== t + 0)) throw t;
                ge(1, 0);
              }
            },
            S: re,
            I: (t, e) => (he(p.subarray(t, t + e)), 0),
          },
          ve = (function () {
            var t;
            function e(t) {
              var e;
              return (
                (ve = t.exports),
                (v = ve.ca),
                I(),
                (wt = ve.ga),
                S.unshift(ve.da),
                A--,
                null == (e = a.monitorRunDependencies) || e.call(a, A),
                0 == A && D && ((t = D), (D = null), t()),
                ve
              );
            }
            A++, null == (t = a.monitorRunDependencies) || t.call(a, A);
            var n = { a: ce };
            if (a.instantiateWasm)
              try {
                return a.instantiateWasm(n, e);
              } catch (t) {
                u(`Module.instantiateWasm callback failed with error: ${t}`),
                  i(t);
              }
            return (
              null != T ||
                (T = k("DotLottiePlayer.wasm")
                  ? "DotLottiePlayer.wasm"
                  : a.locateFile
                    ? a.locateFile("DotLottiePlayer.wasm", l)
                    : l + "DotLottiePlayer.wasm"),
              (function (t, e) {
                var n = T;
                return M ||
                  "function" != typeof WebAssembly.instantiateStreaming ||
                  k(n) ||
                  "function" != typeof fetch
                  ? z(n, t, e)
                  : fetch(n, { credentials: "same-origin" }).then((i) =>
                      WebAssembly.instantiateStreaming(i, t).then(
                        e,
                        function (i) {
                          return (
                            u(`wasm streaming compile failed: ${i}`),
                            u("falling back to ArrayBuffer instantiation"),
                            z(n, t, e)
                          );
                        },
                      ),
                    );
              })(n, function (t) {
                e(t.instance);
              }).catch(i),
              {}
            );
          })(),
          _e = (t) => (_e = ve.ea)(t),
          fe = (t) => (fe = ve.fa)(t),
          pe = (t) => (pe = ve.ha)(t),
          me = (t, e) => (me = ve.ia)(t, e),
          ge = (t, e) => (ge = ve.ja)(t, e),
          ye = (t) => (ye = ve.ka)(t),
          we = () => (we = ve.la)();
        function Le() {
          function t() {
            var t;
            if (!ue && ((ue = !0), (a.calledRun = !0), !b)) {
              if (
                (R(S),
                n(a),
                null == (t = a.onRuntimeInitialized) || t.call(a),
                a.postRun)
              )
                for (
                  "function" == typeof a.postRun && (a.postRun = [a.postRun]);
                  a.postRun.length;

                ) {
                  var e = a.postRun.shift();
                  P.unshift(e);
                }
              R(P);
            }
          }
          if (!(0 < A)) {
            if (a.preRun)
              for (
                "function" == typeof a.preRun && (a.preRun = [a.preRun]);
                a.preRun.length;

              )
                F();
            R(E),
              0 < A ||
                (a.setStatus
                  ? (a.setStatus("Running..."),
                    setTimeout(() => {
                      setTimeout(() => a.setStatus(""), 1), t();
                    }, 1))
                  : t());
          }
        }
        if (
          ((a.dynCall_iijj = (t, e, n, i, r, o) =>
            (a.dynCall_iijj = ve.ma)(t, e, n, i, r, o)),
          (a.dynCall_vijj = (t, e, n, i, r, o) =>
            (a.dynCall_vijj = ve.na)(t, e, n, i, r, o)),
          (a.dynCall_jiii = (t, e, n, i) =>
            (a.dynCall_jiii = ve.oa)(t, e, n, i)),
          (a.dynCall_jii = (t, e, n) => (a.dynCall_jii = ve.pa)(t, e, n)),
          (a.dynCall_viijii = (t, e, n, i, r, o, s) =>
            (a.dynCall_viijii = ve.qa)(t, e, n, i, r, o, s)),
          (a.dynCall_iiiiij = (t, e, n, i, r, o, s) =>
            (a.dynCall_iiiiij = ve.ra)(t, e, n, i, r, o, s)),
          (a.dynCall_iiiiijj = (t, e, n, i, r, o, s, h, l) =>
            (a.dynCall_iiiiijj = ve.sa)(t, e, n, i, r, o, s, h, l)),
          (a.dynCall_iiiiiijj = (t, e, n, i, r, o, s, h, l, d) =>
            (a.dynCall_iiiiiijj = ve.ta)(t, e, n, i, r, o, s, h, l, d)),
          (D = function t() {
            ue || Le(), ue || (D = t);
          }),
          a.preInit)
        )
          for (
            "function" == typeof a.preInit && (a.preInit = [a.preInit]);
            0 < a.preInit.length;

          )
            a.preInit.pop()();
        return Le(), o;
      }),
    M = class {
      constructor() {
        throw new Error(
          "RendererLoader is a static class and cannot be instantiated.",
        );
      }
      static _tryLoad(t) {
        return v(this, null, function* () {
          return yield C({ locateFile: () => t });
        });
      }
      static _loadWithBackup() {
        return v(this, null, function* () {
          return (
            this._ModulePromise ||
              (this._ModulePromise = this._tryLoad(this._wasmURL).catch((t) =>
                v(this, null, function* () {
                  let t = `https://unpkg.com/${L}@${w}/dist/dotlottie-player.wasm`;
                  try {
                    return yield this._tryLoad(t);
                  } catch (t) {
                    throw new Error("WASM loading failed from all sources.");
                  }
                }),
              )),
            this._ModulePromise
          );
        });
      }
      static load() {
        return v(this, null, function* () {
          return this._loadWithBackup();
        });
      }
      static setWasmUrl(t) {
        t !== this._wasmURL &&
          ((this._wasmURL = t), (this._ModulePromise = null));
      }
    };
  c(M, "_ModulePromise", null),
    c(
      M,
      "_wasmURL",
      `https://cdn.jsdelivr.net/npm/${L}@${w}/dist/dotlottie-player.wasm`,
    );
  var b = class {
      constructor() {
        c(this, "_eventListeners", new Map());
      }
      addEventListener(t, e) {
        let n = this._eventListeners.get(t);
        n || ((n = new Set()), this._eventListeners.set(t, n)), n.add(e);
      }
      removeEventListener(t, e) {
        let n = this._eventListeners.get(t);
        n &&
          (e
            ? (n.delete(e), 0 === n.size && this._eventListeners.delete(t))
            : this._eventListeners.delete(t));
      }
      dispatch(t) {
        let e = this._eventListeners.get(t.type);
        null == e || e.forEach((e) => e(t));
      }
      removeAllEventListeners() {
        this._eventListeners.clear();
      }
    },
    I = class {
      static _initializeObserver() {
        if (this._observer) return;
        this._observer = new IntersectionObserver(
          (t) => {
            t.forEach((t) => {
              let e = this._observedCanvases.get(t.target);
              e && (t.isIntersecting ? e.unfreeze() : e.freeze());
            });
          },
          { threshold: 0 },
        );
      }
      static observe(t, e) {
        var n;
        this._initializeObserver(),
          !this._observedCanvases.has(t) &&
            (this._observedCanvases.set(t, e),
            null == (n = this._observer) || n.observe(t));
      }
      static unobserve(t) {
        var e, n;
        null == (e = this._observer) || e.unobserve(t),
          this._observedCanvases.delete(t),
          0 === this._observedCanvases.size &&
            (null == (n = this._observer) || n.disconnect(),
            (this._observer = null));
      }
    };
  c(I, "_observer", null), c(I, "_observedCanvases", new Map());
  var E = class {
    static _initializeObserver() {
      if (this._observer) return;
      this._observer = new ResizeObserver((t) => {
        t.forEach((t) => {
          let e = this._observedCanvases.get(t.target);
          if (!e) return;
          let [n, i] = e;
          clearTimeout(i);
          let r = setTimeout(() => {
            n.resize();
          }, 100);
          this._observedCanvases.set(t.target, [n, r]);
        });
      });
    }
    static observe(t, e) {
      var n;
      this._initializeObserver(),
        !this._observedCanvases.has(t) &&
          (this._observedCanvases.set(t, [e, 0]),
          null == (n = this._observer) || n.observe(t));
    }
    static unobserve(t) {
      var e, n;
      null == (e = this._observer) || e.unobserve(t),
        this._observedCanvases.delete(t),
        0 === this._observedCanvases.size &&
          (null == (n = this._observer) || n.disconnect(),
          (this._observer = null));
    }
  };
  function S(t) {
    if (
      !(function (t) {
        return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(t);
      })(t)
    )
      return 0;
    let e = t.replace("#", "");
    return (e = 6 === e.length ? `${e}ff` : e), parseInt(e, 16);
  }
  function P(t) {
    if (t.byteLength < 4) return !1;
    let e = new Uint8Array(t.slice(0, g.byteLength));
    for (let t = 0; t < g.length; t += 1) if (g[t] !== e[t]) return !1;
    return !0;
  }
  function F(t) {
    return y.every((e) => Object.prototype.hasOwnProperty.call(t, e));
  }
  function A(t) {
    if ("string" != typeof t) return F(t);
    try {
      return F(JSON.parse(t));
    } catch (t) {
      return !1;
    }
  }
  function D() {
    return 1 + 0.75 * ((m ? window.devicePixelRatio : 1) - 1);
  }
  function x(t) {
    let e = t.getBoundingClientRect();
    return (
      e.top >= 0 &&
      e.left >= 0 &&
      e.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      e.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  c(E, "_observer", null), c(E, "_observedCanvases", new Map());
  var T = (t, e) =>
      "reverse" === t
        ? e.Mode.Reverse
        : "bounce" === t
          ? e.Mode.Bounce
          : "reverse-bounce" === t
            ? e.Mode.ReverseBounce
            : e.Mode.Forward,
    k = (t, e) =>
      "contain" === t
        ? e.Fit.Contain
        : "cover" === t
          ? e.Fit.Cover
          : "fill" === t
            ? e.Fit.Fill
            : "fit-height" === t
              ? e.Fit.FitHeight
              : "fit-width" === t
                ? e.Fit.FitWidth
                : e.Fit.None,
    O = (t, e) => {
      let n = new e.VectorFloat();
      return n.push_back(t[0]), n.push_back(t[1]), n;
    },
    z = (t, e) => {
      let n = new e.VectorFloat();
      return 2 !== t.length || (n.push_back(t[0]), n.push_back(t[1])), n;
    },
    $ = class t {
      constructor(e) {
        var n, i, r;
        c(this, "_canvas"),
          c(this, "_context", null),
          c(this, "_eventManager"),
          c(this, "_animationFrameId", null),
          c(this, "_frameManager"),
          c(this, "_dotLottieCore", null),
          c(this, "_renderConfig", {}),
          c(this, "_isFrozen", !1),
          c(this, "_backgroundColor", null),
          c(this, "_pointerUpMethod"),
          c(this, "_pointerDownMethod"),
          c(this, "_pointerMoveMethod"),
          c(this, "_pointerEnterMethod"),
          c(this, "_pointerExitMethod"),
          (this._canvas = e.canvas),
          (this._context = this._canvas.getContext("2d")),
          (this._eventManager = new b()),
          (this._frameManager = new p()),
          (this._renderConfig = d(l({}, e.renderConfig), {
            devicePixelRatio:
              (null == (n = e.renderConfig) ? void 0 : n.devicePixelRatio) ||
              D(),
            freezeOnOffscreen:
              null ==
                (r =
                  null == (i = e.renderConfig)
                    ? void 0
                    : i.freezeOnOffscreen) || r,
          })),
          M.load()
            .then((n) => {
              var i, r, a, o, s, h, l, d;
              (t._wasmModule = n),
                (this._dotLottieCore = new n.DotLottiePlayer({
                  themeId: null != (i = e.themeId) ? i : "",
                  autoplay: null != (r = e.autoplay) && r,
                  backgroundColor: 0,
                  loopAnimation: null != (a = e.loop) && a,
                  mode: T(null != (o = e.mode) ? o : "forward", n),
                  segment: z(null != (s = e.segment) ? s : [], n),
                  speed: null != (h = e.speed) ? h : 1,
                  useFrameInterpolation:
                    null == (l = e.useFrameInterpolation) || l,
                  marker: null != (d = e.marker) ? d : "",
                  layout: e.layout
                    ? { align: O(e.layout.align, n), fit: k(e.layout.fit, n) }
                    : n.createDefaultLayout(),
                })),
                this._eventManager.dispatch({ type: "ready" }),
                e.data
                  ? this._loadFromData(e.data)
                  : e.src && this._loadFromSrc(e.src),
                e.backgroundColor && this.setBackgroundColor(e.backgroundColor);
            })
            .catch((t) => {
              this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to load wasm module: ${t}`),
              });
            }),
          (this._pointerUpMethod = this._onPointerUp.bind(this)),
          (this._pointerDownMethod = this._onPointerDown.bind(this)),
          (this._pointerMoveMethod = this._onPointerMove.bind(this)),
          (this._pointerEnterMethod = this._onPointerEnter.bind(this)),
          (this._pointerExitMethod = this._onPointerLeave.bind(this));
      }
      _dispatchError(t) {
        this._eventManager.dispatch({ type: "loadError", error: new Error(t) });
      }
      _fetchData(t) {
        return v(this, null, function* () {
          let e = yield fetch(t);
          if (!e.ok)
            throw new Error(
              `Failed to fetch animation data from URL: ${t}. ${e.status}: ${e.statusText}`,
            );
          let n = yield e.arrayBuffer();
          return P(n) ? n : new TextDecoder().decode(n);
        });
      }
      _loadFromData(t) {
        if (null === this._dotLottieCore) return;
        let e = this._canvas.width,
          n = this._canvas.height,
          i = !1;
        if ("string" == typeof t) {
          if (!A(t))
            return void this._dispatchError(
              "Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.",
            );
          i = this._dotLottieCore.loadAnimationData(t, e, n);
        } else if (t instanceof ArrayBuffer) {
          if (!P(t))
            return void this._dispatchError(
              "Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.",
            );
          i = this._dotLottieCore.loadDotLottieData(t, e, n);
        } else {
          if ("object" != typeof t)
            return void this._dispatchError(
              "Unsupported data type for animation data. Expected: \n          - string (Lottie JSON),\n          - ArrayBuffer (dotLottie),\n          - object (Lottie JSON). \n          Received: " +
                typeof t,
            );
          if (!A(t))
            return void this._dispatchError(
              "Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.",
            );
          i = this._dotLottieCore.loadAnimationData(JSON.stringify(t), e, n);
        }
        i
          ? (this._eventManager.dispatch({ type: "load" }),
            m && this.resize(),
            this._eventManager.dispatch({
              type: "frame",
              currentFrame: this.currentFrame,
            }),
            this._render(),
            this._dotLottieCore.config().autoplay &&
              (this._dotLottieCore.play(),
              this._dotLottieCore.isPlaying() &&
                (this._eventManager.dispatch({ type: "play" }),
                (this._animationFrameId =
                  this._frameManager.requestAnimationFrame(
                    this._draw.bind(this),
                  )))),
            m &&
              this._canvas instanceof HTMLCanvasElement &&
              (this._renderConfig.freezeOnOffscreen &&
                I.observe(this._canvas, this),
              this._renderConfig.autoResize && E.observe(this._canvas, this)))
          : this._dispatchError("Failed to load animation data");
      }
      _loadFromSrc(t) {
        this._fetchData(t)
          .then((t) => this._loadFromData(t))
          .catch((e) =>
            this._dispatchError(
              `Failed to load animation data from URL: ${t}. ${e}`,
            ),
          );
      }
      get activeAnimationId() {
        var t;
        return null == (t = this._dotLottieCore)
          ? void 0
          : t.activeAnimationId();
      }
      get activeThemeId() {
        var t;
        return null == (t = this._dotLottieCore) ? void 0 : t.activeThemeId();
      }
      get layout() {
        var e;
        let n = null == (e = this._dotLottieCore) ? void 0 : e.config().layout;
        if (n)
          return {
            align: [n.align.get(0), n.align.get(1)],
            fit: (() => {
              var e, i, r, a, o, s;
              switch (n.fit) {
                case null == (e = t._wasmModule) ? void 0 : e.Fit.Contain:
                  return "contain";
                case null == (i = t._wasmModule) ? void 0 : i.Fit.Cover:
                  return "cover";
                case null == (r = t._wasmModule) ? void 0 : r.Fit.Fill:
                  return "fill";
                case null == (a = t._wasmModule) ? void 0 : a.Fit.FitHeight:
                  return "fit-height";
                case null == (o = t._wasmModule) ? void 0 : o.Fit.FitWidth:
                  return "fit-width";
                case null == (s = t._wasmModule) ? void 0 : s.Fit.None:
                  return "none";
                default:
                  return "contain";
              }
            })(),
          };
      }
      get marker() {
        var t;
        return null == (t = this._dotLottieCore) ? void 0 : t.config().marker;
      }
      get manifest() {
        var t;
        try {
          let e =
            null == (t = this._dotLottieCore) ? void 0 : t.manifestString();
          if (null === this._dotLottieCore || !e) return null;
          let n = JSON.parse(e);
          return 0 === Object.keys(n).length ? null : n;
        } catch (t) {
          return null;
        }
      }
      get renderConfig() {
        return this._renderConfig;
      }
      get segment() {
        var t;
        let e = null == (t = this._dotLottieCore) ? void 0 : t.config().segment;
        if (e && 2 === e.size()) return [e.get(0), e.get(1)];
      }
      get loop() {
        var t, e;
        return (
          null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.config().loopAnimation) && e
        );
      }
      get mode() {
        var e, n, i, r;
        let a = null == (e = this._dotLottieCore) ? void 0 : e.config().mode;
        return a === (null == (n = t._wasmModule) ? void 0 : n.Mode.Reverse)
          ? "reverse"
          : a === (null == (i = t._wasmModule) ? void 0 : i.Mode.Bounce)
            ? "bounce"
            : a ===
                (null == (r = t._wasmModule) ? void 0 : r.Mode.ReverseBounce)
              ? "reverse-bounce"
              : "forward";
      }
      get isFrozen() {
        return this._isFrozen;
      }
      get backgroundColor() {
        var t;
        return null != (t = this._backgroundColor) ? t : "";
      }
      get autoplay() {
        var t, e;
        return (
          null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.config().autoplay) && e
        );
      }
      get useFrameInterpolation() {
        var t, e;
        return (
          null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.config().useFrameInterpolation) && e
        );
      }
      get speed() {
        var t, e;
        return null !=
          (e = null == (t = this._dotLottieCore) ? void 0 : t.config().speed)
          ? e
          : 0;
      }
      get isReady() {
        return null !== this._dotLottieCore;
      }
      get isLoaded() {
        var t, e;
        return (
          null !=
            (e = null == (t = this._dotLottieCore) ? void 0 : t.isLoaded()) && e
        );
      }
      get isPlaying() {
        var t, e;
        return (
          null !=
            (e = null == (t = this._dotLottieCore) ? void 0 : t.isPlaying()) &&
          e
        );
      }
      get isPaused() {
        var t, e;
        return (
          null !=
            (e = null == (t = this._dotLottieCore) ? void 0 : t.isPaused()) && e
        );
      }
      get isStopped() {
        var t, e;
        return (
          null !=
            (e = null == (t = this._dotLottieCore) ? void 0 : t.isStopped()) &&
          e
        );
      }
      get currentFrame() {
        return this._dotLottieCore
          ? Math.round(100 * this._dotLottieCore.currentFrame()) / 100
          : 0;
      }
      get loopCount() {
        var t, e;
        return null !=
          (e = null == (t = this._dotLottieCore) ? void 0 : t.loopCount())
          ? e
          : 0;
      }
      get totalFrames() {
        var t, e;
        return null !=
          (e = null == (t = this._dotLottieCore) ? void 0 : t.totalFrames())
          ? e
          : 0;
      }
      get duration() {
        var t, e;
        return null !=
          (e = null == (t = this._dotLottieCore) ? void 0 : t.duration())
          ? e
          : 0;
      }
      get segmentDuration() {
        var t, e;
        return null !=
          (e = null == (t = this._dotLottieCore) ? void 0 : t.segmentDuration())
          ? e
          : 0;
      }
      get canvas() {
        return this._canvas;
      }
      load(e) {
        var n, i, r, a, o, s, h, l, d;
        null === this._dotLottieCore ||
          null === t._wasmModule ||
          (null !== this._animationFrameId &&
            (this._frameManager.cancelAnimationFrame(this._animationFrameId),
            (this._animationFrameId = null)),
          this._dotLottieCore.setConfig({
            themeId: null != (n = e.themeId) ? n : "",
            autoplay: null != (i = e.autoplay) && i,
            backgroundColor: 0,
            loopAnimation: null != (r = e.loop) && r,
            mode: T(null != (a = e.mode) ? a : "forward", t._wasmModule),
            segment: z(null != (o = e.segment) ? o : [], t._wasmModule),
            speed: null != (s = e.speed) ? s : 1,
            useFrameInterpolation: null == (h = e.useFrameInterpolation) || h,
            marker: null != (l = e.marker) ? l : "",
            layout: e.layout
              ? {
                  align: O(e.layout.align, t._wasmModule),
                  fit: k(e.layout.fit, t._wasmModule),
                }
              : t._wasmModule.createDefaultLayout(),
          }),
          e.data
            ? this._loadFromData(e.data)
            : e.src && this._loadFromSrc(e.src),
          this.setBackgroundColor(null != (d = e.backgroundColor) ? d : ""));
      }
      _render() {
        if (null === this._dotLottieCore || null === this._context) return !1;
        if (this._dotLottieCore.render()) {
          let t = this._dotLottieCore.buffer(),
            e = new Uint8ClampedArray(
              t,
              0,
              this._canvas.width * this._canvas.height * 4,
            ),
            n = null;
          return (
            "undefined" == typeof ImageData
              ? ((n = this._context.createImageData(
                  this._canvas.width,
                  this._canvas.height,
                )),
                n.data.set(e))
              : (n = new ImageData(e, this._canvas.width, this._canvas.height)),
            this._context.putImageData(n, 0, 0),
            this._eventManager.dispatch({
              type: "render",
              currentFrame: this.currentFrame,
            }),
            !0
          );
        }
        return !1;
      }
      _draw() {
        if (
          null === this._dotLottieCore ||
          null === this._context ||
          !this._dotLottieCore.isPlaying()
        )
          return;
        let t = Math.round(100 * this._dotLottieCore.requestFrame()) / 100;
        this._dotLottieCore.setFrame(t) &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this.currentFrame,
          }),
          this._render() &&
            this._dotLottieCore.isComplete() &&
            (this._dotLottieCore.config().loopAnimation
              ? this._eventManager.dispatch({
                  type: "loop",
                  loopCount: this._dotLottieCore.loopCount(),
                })
              : this._eventManager.dispatch({ type: "complete" }))),
          (this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this),
          ));
      }
      play() {
        null !== this._dotLottieCore &&
          ((this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) &&
            ((this._isFrozen = !1),
            this._eventManager.dispatch({ type: "play" }),
            (this._animationFrameId = this._frameManager.requestAnimationFrame(
              this._draw.bind(this),
            ))),
          m &&
            this._canvas instanceof HTMLCanvasElement &&
            this._renderConfig.freezeOnOffscreen &&
            !x(this._canvas) &&
            this.freeze());
      }
      pause() {
        null !== this._dotLottieCore &&
          (this._dotLottieCore.pause() || this._dotLottieCore.isPaused()) &&
          this._eventManager.dispatch({ type: "pause" });
      }
      stop() {
        null !== this._dotLottieCore &&
          this._dotLottieCore.stop() &&
          (this._eventManager.dispatch({
            type: "frame",
            currentFrame: this.currentFrame,
          }),
          this._render(),
          this._eventManager.dispatch({ type: "stop" }));
      }
      setFrame(t) {
        null === this._dotLottieCore ||
          t < 0 ||
          t > this._dotLottieCore.totalFrames() ||
          (this._dotLottieCore.seek(t) &&
            (this._eventManager.dispatch({
              type: "frame",
              currentFrame: this.currentFrame,
            }),
            this._render()));
      }
      setSpeed(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), { speed: t }),
          );
      }
      setBackgroundColor(t) {
        null !== this._dotLottieCore &&
          (m && this._canvas instanceof HTMLCanvasElement
            ? (this._canvas.style.backgroundColor = t)
            : this._dotLottieCore.setConfig(
                d(l({}, this._dotLottieCore.config()), {
                  backgroundColor: S(t),
                }),
              ),
          (this._backgroundColor = t));
      }
      setLoop(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), { loopAnimation: t }),
          );
      }
      setUseFrameInterpolation(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), {
              useFrameInterpolation: t,
            }),
          );
      }
      addEventListener(t, e) {
        this._eventManager.addEventListener(t, e);
      }
      removeEventListener(t, e) {
        this._eventManager.removeEventListener(t, e);
      }
      destroy() {
        var t;
        m &&
          this._canvas instanceof HTMLCanvasElement &&
          (I.unobserve(this._canvas), E.unobserve(this._canvas)),
          null == (t = this._dotLottieCore) || t.delete(),
          (this._dotLottieCore = null),
          (this._context = null),
          this._eventManager.dispatch({ type: "destroy" }),
          this._eventManager.removeAllEventListeners(),
          this._cleanupStateMachineListeners();
      }
      freeze() {
        null !== this._animationFrameId &&
          (this._frameManager.cancelAnimationFrame(this._animationFrameId),
          (this._animationFrameId = null),
          (this._isFrozen = !0),
          this._eventManager.dispatch({ type: "freeze" }));
      }
      unfreeze() {
        null === this._animationFrameId &&
          ((this._animationFrameId = this._frameManager.requestAnimationFrame(
            this._draw.bind(this),
          )),
          (this._isFrozen = !1),
          this._eventManager.dispatch({ type: "unfreeze" }));
      }
      resize() {
        if (this._dotLottieCore && this.isLoaded) {
          if (m && this._canvas instanceof HTMLCanvasElement) {
            let t =
                this._renderConfig.devicePixelRatio ||
                window.devicePixelRatio ||
                1,
              { height: e, width: n } = this._canvas.getBoundingClientRect();
            (this._canvas.width = n * t), (this._canvas.height = e * t);
          }
          this._dotLottieCore.resize(this._canvas.width, this._canvas.height) &&
            this._render();
        }
      }
      setSegment(e, n) {
        null === this._dotLottieCore ||
          null === t._wasmModule ||
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), {
              segment: z([e, n], t._wasmModule),
            }),
          );
      }
      setMode(e) {
        null === this._dotLottieCore ||
          null === t._wasmModule ||
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), {
              mode: T(e, t._wasmModule),
            }),
          );
      }
      setRenderConfig(t) {
        let e = t,
          { devicePixelRatio: n, freezeOnOffscreen: i } = e,
          r = u(e, ["devicePixelRatio", "freezeOnOffscreen"]);
        (this._renderConfig = d(l(l({}, this._renderConfig), r), {
          devicePixelRatio: n || D(),
          freezeOnOffscreen: null == i || i,
        })),
          m &&
            this._canvas instanceof HTMLCanvasElement &&
            (this._renderConfig.autoResize
              ? E.observe(this._canvas, this)
              : E.unobserve(this._canvas),
            this._renderConfig.freezeOnOffscreen
              ? I.observe(this._canvas, this)
              : (I.unobserve(this._canvas), this._isFrozen && this.unfreeze()));
      }
      loadAnimation(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.activeAnimationId() !== t &&
          (this._dotLottieCore.loadAnimation(
            t,
            this._canvas.width,
            this._canvas.height,
          )
            ? (this._eventManager.dispatch({ type: "load" }), this.resize())
            : this._eventManager.dispatch({
                type: "loadError",
                error: new Error(`Failed to animation :${t}`),
              }));
      }
      setMarker(t) {
        null !== this._dotLottieCore &&
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), { marker: t }),
          );
      }
      markers() {
        var t;
        let e = null == (t = this._dotLottieCore) ? void 0 : t.markers();
        if (e) {
          let t = [];
          for (let n = 0; n < e.size(); n += 1) {
            let i = e.get(n);
            t.push({ name: i.name, time: i.time, duration: i.duration });
          }
          return t;
        }
        return [];
      }
      setTheme(t) {
        if (null === this._dotLottieCore) return !1;
        let e = this._dotLottieCore.setTheme(t);
        return this._render(), e;
      }
      resetTheme() {
        return null !== this._dotLottieCore && this._dotLottieCore.resetTheme();
      }
      setThemeData(t) {
        if (null === this._dotLottieCore) return !1;
        let e = this._dotLottieCore.setThemeData(t);
        return this._render(), e;
      }
      setSlots(t) {
        null !== this._dotLottieCore && this._dotLottieCore.setSlots(t);
      }
      setLayout(e) {
        null === this._dotLottieCore ||
          null === t._wasmModule ||
          this._dotLottieCore.setConfig(
            d(l({}, this._dotLottieCore.config()), {
              layout: {
                align: O(e.align, t._wasmModule),
                fit: k(e.fit, t._wasmModule),
              },
            }),
          );
      }
      setViewport(t, e, n, i) {
        return (
          null !== this._dotLottieCore &&
          this._dotLottieCore.setViewport(t, e, n, i)
        );
      }
      static setWasmUrl(t) {
        M.setWasmUrl(t);
      }
      loadStateMachine(t) {
        var e, n;
        return (
          null !=
            (n =
              null == (e = this._dotLottieCore)
                ? void 0
                : e.loadStateMachine(t)) && n
        );
      }
      startStateMachine() {
        var t, e;
        let n =
          null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.startStateMachine()) && e;
        return n && this._setupStateMachineListeners(), n;
      }
      stopStateMachine() {
        var t, e;
        let n =
          null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.stopStateMachine()) && e;
        return n && this._cleanupStateMachineListeners(), n;
      }
      _getPointerPosition(t) {
        let e = this._canvas.getBoundingClientRect(),
          n = this._canvas.width / e.width,
          i = this._canvas.height / e.height,
          r =
            this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1;
        return {
          x: ((t.clientX - e.left) * n) / r,
          y: ((t.clientY - e.top) * i) / r,
        };
      }
      _onPointerUp(t) {
        let { x: e, y: n } = this._getPointerPosition(t);
        this.postPointerUpEvent(e, n);
      }
      _onPointerDown(t) {
        let { x: e, y: n } = this._getPointerPosition(t);
        this.postPointerDownEvent(e, n);
      }
      _onPointerMove(t) {
        let { x: e, y: n } = this._getPointerPosition(t);
        this.postPointerMoveEvent(e, n);
      }
      _onPointerEnter(t) {
        let { x: e, y: n } = this._getPointerPosition(t);
        this.postPointerEnterEvent(e, n);
      }
      _onPointerLeave(t) {
        let { x: e, y: n } = this._getPointerPosition(t);
        this.postPointerExitEvent(e, n);
      }
      postPointerUpEvent(t, e) {
        var n;
        return null == (n = this._dotLottieCore)
          ? void 0
          : n.postPointerUpEvent(t, e);
      }
      postPointerDownEvent(t, e) {
        var n;
        return null == (n = this._dotLottieCore)
          ? void 0
          : n.postPointerDownEvent(t, e);
      }
      postPointerMoveEvent(t, e) {
        var n;
        return null == (n = this._dotLottieCore)
          ? void 0
          : n.postPointerMoveEvent(t, e);
      }
      postPointerEnterEvent(t, e) {
        var n;
        return null == (n = this._dotLottieCore)
          ? void 0
          : n.postPointerEnterEvent(t, e);
      }
      postPointerExitEvent(t, e) {
        var n;
        return null == (n = this._dotLottieCore)
          ? void 0
          : n.postPointerExitEvent(t, e);
      }
      getStateMachineListeners() {
        if (!this._dotLottieCore) return [];
        let t = this._dotLottieCore.stateMachineFrameworkSetup(),
          e = [];
        for (let n = 0; n < t.size(); n += 1) e.push(t.get(n));
        return e;
      }
      _setupStateMachineListeners() {
        if (
          m &&
          this._canvas instanceof HTMLCanvasElement &&
          null !== this._dotLottieCore &&
          this.isLoaded
        ) {
          let t = this.getStateMachineListeners();
          t.includes("PointerUp") &&
            this._canvas.addEventListener("pointerup", this._pointerUpMethod),
            t.includes("PointerDown") &&
              this._canvas.addEventListener(
                "pointerdown",
                this._pointerDownMethod,
              ),
            t.includes("PointerMove") &&
              this._canvas.addEventListener(
                "pointermove",
                this._pointerMoveMethod,
              ),
            t.includes("PointerEnter") &&
              this._canvas.addEventListener(
                "pointerenter",
                this._pointerEnterMethod,
              ),
            t.includes("PointerExit") &&
              this._canvas.addEventListener(
                "pointerleave",
                this._pointerExitMethod,
              );
        }
      }
      _cleanupStateMachineListeners() {
        m &&
          this._canvas instanceof HTMLCanvasElement &&
          (this._canvas.removeEventListener("pointerup", this._pointerUpMethod),
          this._canvas.removeEventListener(
            "pointerdown",
            this._pointerDownMethod,
          ),
          this._canvas.removeEventListener(
            "pointermove",
            this._pointerMoveMethod,
          ),
          this._canvas.removeEventListener(
            "pointerenter",
            this._pointerEnterMethod,
          ),
          this._canvas.removeEventListener(
            "pointerleave",
            this._pointerExitMethod,
          ));
      }
      loadStateMachineData(t) {
        var e, n;
        return (
          null !=
            (n =
              null == (e = this._dotLottieCore)
                ? void 0
                : e.loadStateMachineData(t)) && n
        );
      }
      animationSize() {
        var t, e, n, i;
        return {
          width:
            null !=
            (e =
              null == (t = this._dotLottieCore)
                ? void 0
                : t.animationSize().get(0))
              ? e
              : 0,
          height:
            null !=
            (i =
              null == (n = this._dotLottieCore)
                ? void 0
                : n.animationSize().get(1))
              ? i
              : 0,
        };
      }
      setStateMachineBooleanContext(t, e) {
        var n, i;
        return (
          null !=
            (i =
              null == (n = this._dotLottieCore)
                ? void 0
                : n.setStateMachineBooleanContext(t, e)) && i
        );
      }
      setStateMachineNumericContext(t, e) {
        var n, i;
        return (
          null !=
            (i =
              null == (n = this._dotLottieCore)
                ? void 0
                : n.setStateMachineNumericContext(t, e)) && i
        );
      }
      setStateMachineStringContext(t, e) {
        var n, i;
        return (
          null !=
            (i =
              null == (n = this._dotLottieCore)
                ? void 0
                : n.setStateMachineStringContext(t, e)) && i
        );
      }
      getLayerBoundingBox(t) {
        var e;
        let n =
          null == (e = this._dotLottieCore) ? void 0 : e.getLayerBounds(t);
        if (n && 4 === n.size())
          return {
            x: n.get(0),
            y: n.get(1),
            width: n.get(2),
            height: n.get(3),
          };
      }
      static transformThemeToLottieSlots(e, n) {
        var i, r;
        return null !=
          (r =
            null == (i = t._wasmModule)
              ? void 0
              : i.transformThemeToLottieSlots(e, n))
          ? r
          : "";
      }
    };
  c($, "_wasmModule", null);
  var R = $,
    W = class {
      constructor() {
        if ("undefined" == typeof Worker)
          throw new Error("Worker is not supported in this environment.");
        let t = new Blob(
            [
              new Uint8Array([
                34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10,
                40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98,
                106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114,
                111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 32, 61, 32, 79,
                98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80,
                114, 111, 112, 101, 114, 116, 105, 101, 115, 59, 10, 32, 32,
                118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114,
                111, 112, 68, 101, 115, 99, 115, 32, 61, 32, 79, 98, 106, 101,
                99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112,
                101, 114, 116, 121, 68, 101, 115, 99, 114, 105, 112, 116, 111,
                114, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101,
                116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111,
                108, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101,
                116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 83,
                121, 109, 98, 111, 108, 115, 59, 10, 32, 32, 118, 97, 114, 32,
                95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 32, 61,
                32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111,
                112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95,
                95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 32, 61, 32,
                79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 46, 112, 114, 111, 112, 101, 114, 116, 121, 73,
                115, 69, 110, 117, 109, 101, 114, 97, 98, 108, 101, 59, 10, 32,
                32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109,
                97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44,
                32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61,
                62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63,
                32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106,
                44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101,
                114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99,
                111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32,
                116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108,
                101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101,
                32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93,
                32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97,
                114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117,
                101, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114,
                32, 112, 114, 111, 112, 32, 105, 110, 32, 98, 32, 124, 124, 32,
                40, 98, 32, 61, 32, 123, 125, 41, 41, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80,
                114, 111, 112, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114,
                111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95,
                100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112,
                40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114,
                111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 95,
                95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121,
                109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111,
                102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112,
                83, 121, 109, 98, 111, 108, 115, 40, 98, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 112,
                114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108,
                40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114,
                109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111,
                112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 97, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97,
                114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112,
                115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 95, 95,
                100, 101, 102, 80, 114, 111, 112, 115, 40, 97, 44, 32, 95, 95,
                103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115,
                99, 115, 40, 98, 41, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95,
                95, 111, 98, 106, 82, 101, 115, 116, 32, 61, 32, 40, 115, 111,
                117, 114, 99, 101, 44, 32, 101, 120, 99, 108, 117, 100, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 116,
                97, 114, 103, 101, 116, 32, 61, 32, 123, 125, 59, 10, 32, 32,
                32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111,
                112, 32, 105, 110, 32, 115, 111, 117, 114, 99, 101, 41, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79,
                119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 115, 111,
                117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 32, 38, 38,
                32, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101,
                120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116,
                91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99,
                101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 111, 117, 114, 99, 101, 32, 33, 61, 32, 110,
                117, 108, 108, 32, 38, 38, 32, 95, 95, 103, 101, 116, 79, 119,
                110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10,
                32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32,
                112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79,
                119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115,
                40, 115, 111, 117, 114, 99, 101, 41, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 120, 99, 108,
                117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112,
                114, 111, 112, 41, 32, 60, 32, 48, 32, 38, 38, 32, 95, 95, 112,
                114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108,
                40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114,
                103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111,
                117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 125,
                59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108,
                105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106,
                44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32,
                61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108,
                80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101,
                111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121,
                109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32,
                34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117,
                101, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 97, 115, 121,
                110, 99, 32, 61, 32, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95,
                95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 44, 32, 103,
                101, 110, 101, 114, 97, 116, 111, 114, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101,
                119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 114, 101,
                115, 111, 108, 118, 101, 44, 32, 114, 101, 106, 101, 99, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 117, 108, 102, 105, 108, 108, 101, 100, 32, 61,
                32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103,
                101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 120, 116,
                40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106,
                101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 114, 101, 106, 101, 99, 116, 101,
                100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112,
                40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 116, 104,
                114, 111, 119, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32,
                40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 115, 116, 101,
                112, 32, 61, 32, 40, 120, 41, 32, 61, 62, 32, 120, 46, 100, 111,
                110, 101, 32, 63, 32, 114, 101, 115, 111, 108, 118, 101, 40,
                120, 46, 118, 97, 108, 117, 101, 41, 32, 58, 32, 80, 114, 111,
                109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40,
                120, 46, 118, 97, 108, 117, 101, 41, 46, 116, 104, 101, 110, 40,
                102, 117, 108, 102, 105, 108, 108, 101, 100, 44, 32, 114, 101,
                106, 101, 99, 116, 101, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 116, 101, 112, 40, 40, 103, 101, 110, 101, 114, 97, 116,
                111, 114, 32, 61, 32, 103, 101, 110, 101, 114, 97, 116, 111,
                114, 46, 97, 112, 112, 108, 121, 40, 95, 95, 116, 104, 105, 115,
                44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41,
                41, 46, 110, 101, 120, 116, 40, 41, 41, 59, 10, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32,
                115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45,
                102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46,
                116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83,
                116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115,
                115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115,
                116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97,
                109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98,
                97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105,
                100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10,
                32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109,
                97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97,
                116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123,
                10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110,
                100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101,
                108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115,
                116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110,
                117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108,
                98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72,
                97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109,
                98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78,
                84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110,
                100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32,
                43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97,
                116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100,
                105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40,
                68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108,
                97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116,
                73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109,
                101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95,
                108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97,
                110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32,
                123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99,
                116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95,
                95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103,
                121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111,
                110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83,
                116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101,
                119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101,
                103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108,
                98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115,
                116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101,
                115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114,
                97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101,
                108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97,
                109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103,
                121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47,
                47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116,
                115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66,
                82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111,
                102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34,
                117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32,
                116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119,
                46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32,
                34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32,
                32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84,
                85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116,
                56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44,
                32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32,
                76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68,
                65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91,
                34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34,
                44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102,
                114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10,
                32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86,
                69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 51, 57, 46, 48,
                34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71,
                69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116,
                105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111,
                116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118,
                97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70,
                65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 10, 32,
                32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100,
                111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121,
                101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114,
                101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61,
                32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 118, 97, 114, 32,
                95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32,
                116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101,
                110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110,
                101, 100, 34, 32, 63, 32, 40, 95, 97, 32, 61, 32, 100, 111, 99,
                117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116,
                83, 99, 114, 105, 112, 116, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59,
                10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101,
                65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82,
                116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107,
                32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32,
                97, 97, 44, 32, 98, 97, 44, 32, 99, 97, 32, 61, 32, 110, 101,
                119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32,
                98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41,
                44, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97,
                115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 107, 41, 44, 32,
                104, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112,
                114, 111, 103, 114, 97, 109, 34, 44, 32, 112, 32, 61, 32, 34,
                34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117,
                110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110,
                116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46,
                99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116,
                32, 38, 38, 32, 40, 112, 32, 61, 32, 100, 111, 99, 117, 109,
                101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99,
                114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101,
                32, 38, 38, 32, 40, 112, 32, 61, 32, 95, 115, 99, 114, 105, 112,
                116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 112,
                46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98,
                108, 111, 98, 58, 34, 41, 32, 63, 32, 112, 32, 61, 32, 34, 34,
                32, 58, 32, 112, 32, 61, 32, 112, 46, 115, 117, 98, 115, 116,
                114, 40, 48, 44, 32, 112, 46, 114, 101, 112, 108, 97, 99, 101,
                40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108,
                97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34,
                41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97,
                32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 102, 101, 116, 99, 104,
                40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105,
                97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105,
                103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 98,
                46, 111, 107, 32, 63, 32, 98, 46, 97, 114, 114, 97, 121, 66,
                117, 102, 102, 101, 114, 40, 41, 32, 58, 32, 80, 114, 111, 109,
                105, 115, 101, 46, 114, 101, 106, 101, 99, 116, 40, 69, 114,
                114, 111, 114, 40, 98, 46, 115, 116, 97, 116, 117, 115, 32, 43,
                32, 34, 32, 58, 32, 34, 32, 43, 32, 98, 46, 117, 114, 108, 41,
                41, 10, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 106, 97, 32, 61, 32, 107, 46, 112, 114,
                105, 110, 116, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108,
                101, 46, 108, 111, 103, 46, 98, 105, 110, 100, 40, 99, 111, 110,
                115, 111, 108, 101, 41, 44, 32, 116, 32, 61, 32, 107, 46, 112,
                114, 105, 110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111,
                110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98,
                105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115,
                115, 105, 103, 110, 40, 107, 44, 32, 102, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 102, 97, 32, 61, 32, 110, 117, 108, 108, 59,
                10, 32, 32, 32, 32, 32, 32, 107, 46, 116, 104, 105, 115, 80,
                114, 111, 103, 114, 97, 109, 32, 38, 38, 32, 40, 104, 97, 32,
                61, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97,
                109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107,
                97, 32, 61, 32, 107, 46, 119, 97, 115, 109, 66, 105, 110, 97,
                114, 121, 44, 32, 108, 97, 44, 32, 109, 97, 32, 61, 32, 102, 97,
                108, 115, 101, 44, 32, 110, 97, 44, 32, 119, 44, 32, 120, 44,
                32, 121, 44, 32, 122, 44, 32, 67, 44, 32, 68, 44, 32, 111, 97,
                44, 32, 112, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 113, 97, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32,
                108, 97, 46, 98, 117, 102, 102, 101, 114, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 56, 32, 61, 32,
                119, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 56, 65, 114,
                114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 107, 46, 72, 69, 65, 80, 49, 54, 32, 61, 32, 121, 32, 61,
                32, 110, 101, 119, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97,
                121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107,
                46, 72, 69, 65, 80, 85, 56, 32, 61, 32, 120, 32, 61, 32, 110,
                101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69,
                65, 80, 85, 49, 54, 32, 61, 32, 122, 32, 61, 32, 110, 101, 119,
                32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65,
                80, 51, 50, 32, 61, 32, 67, 32, 61, 32, 110, 101, 119, 32, 73,
                110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 51, 50,
                32, 61, 32, 68, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110,
                116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 51, 50, 32,
                61, 32, 111, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111,
                97, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 54, 52,
                32, 61, 32, 112, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108,
                111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32, 115, 97, 32,
                61, 32, 91, 93, 44, 32, 116, 97, 32, 61, 32, 91, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                117, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 97, 32, 61, 32, 107, 46, 112, 114, 101, 82,
                117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 97, 46, 117, 110, 115, 104, 105,
                102, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 48,
                44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108, 44, 32, 71, 32,
                61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 32, 119, 97, 40, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50,
                32, 61, 32, 107, 46, 111, 110, 65, 98, 111, 114, 116, 41, 32,
                61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100,
                32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107,
                44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32,
                61, 32, 34, 65, 98, 111, 114, 116, 101, 100, 40, 34, 32, 43, 32,
                97, 32, 43, 32, 34, 41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 97, 32, 61, 32, 110, 101, 119, 32, 87, 101, 98,
                65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116,
                105, 109, 101, 69, 114, 114, 111, 114, 40, 97, 32, 43, 32, 34,
                46, 32, 66, 117, 105, 108, 100, 32, 119, 105, 116, 104, 32, 45,
                115, 65, 83, 83, 69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114,
                32, 109, 111, 114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 120, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40,
                34, 100, 97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116,
                105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114,
                101, 97, 109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32,
                121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 122, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 121,
                97, 32, 38, 38, 32, 107, 97, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114,
                97, 121, 40, 107, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97,
                115, 121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32,
                102, 101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116,
                104, 101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101,
                100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 65, 97,
                40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 107, 97, 32, 63, 32, 80, 114, 111,
                109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40,
                41, 46, 116, 104, 101, 110, 40, 40, 41, 32, 61, 62, 32, 122, 97,
                40, 97, 41, 41, 32, 58, 32, 105, 97, 40, 97, 41, 46, 116, 104,
                101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
                98, 41, 32, 61, 62, 32, 110, 101, 119, 32, 85, 105, 110, 116,
                56, 65, 114, 114, 97, 121, 40, 98, 41, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 40, 41, 32, 61, 62, 32, 122, 97, 40, 97,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 66, 97, 40, 97, 44, 32, 98, 44, 32, 99,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 65, 97, 40, 97, 41, 46, 116, 104, 101, 110,
                40, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101,
                109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105,
                97, 116, 101, 40, 100, 44, 32, 98, 41, 41, 46, 116, 104, 101,
                110, 40, 99, 44, 32, 40, 100, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105,
                108, 101, 100, 32, 116, 111, 32, 97, 115, 121, 110, 99, 104,
                114, 111, 110, 111, 117, 115, 108, 121, 32, 112, 114, 101, 112,
                97, 114, 101, 32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125,
                96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97,
                40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 67, 97, 40, 97, 44,
                32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 99, 32, 61, 32, 121, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 97, 32,
                124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32,
                33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 87, 101, 98, 65,
                115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97,
                110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105,
                110, 103, 32, 124, 124, 32, 120, 97, 40, 99, 41, 32, 124, 124,
                32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61,
                32, 116, 121, 112, 101, 111, 102, 32, 102, 101, 116, 99, 104,
                32, 63, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 32, 58,
                32, 102, 101, 116, 99, 104, 40, 99, 44, 32, 123, 32, 99, 114,
                101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97,
                109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46,
                116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101,
                109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105,
                97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40,
                100, 44, 32, 97, 41, 46, 116, 104, 101, 110, 40, 98, 44, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96,
                119, 97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110,
                103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105,
                108, 101, 100, 58, 32, 36, 123, 101, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 34, 102,
                97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111,
                32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105,
                110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32,
                98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115,
                32, 68, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112,
                117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104,
                105, 115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69,
                120, 105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109,
                101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103,
                114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101,
                100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36,
                123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32,
                61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 69, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59,
                32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59,
                32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 107,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 97, 32, 61,
                32, 107, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116,
                105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 71,
                97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100,
                34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101,
                120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101,
                119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40,
                41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 72, 32, 61,
                32, 40, 97, 44, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32,
                78, 97, 78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 43, 32, 99,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                99, 32, 61, 32, 98, 59, 32, 97, 91, 99, 93, 32, 38, 38, 32, 33,
                40, 99, 32, 62, 61, 32, 100, 41, 59, 32, 41, 32, 43, 43, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 54,
                32, 60, 32, 99, 32, 45, 32, 98, 32, 38, 38, 32, 97, 46, 98, 117,
                102, 102, 101, 114, 32, 38, 38, 32, 71, 97, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 71, 97, 46, 100, 101, 99, 111, 100, 101,
                40, 97, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 98, 44, 32,
                99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111,
                114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32, 98, 32, 60, 32,
                99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 101, 32, 61, 32, 97, 91, 98, 43, 43, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32,
                61, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 50, 52, 41,
                41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 40,
                101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32, 54, 32, 124, 32,
                102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97,
                91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 50, 50,
                52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 52, 48, 41, 32, 63,
                32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60, 60, 32, 49, 50, 32,
                124, 32, 102, 32, 60, 60, 32, 54, 32, 124, 32, 104, 32, 58, 32,
                40, 101, 32, 38, 32, 55, 41, 32, 60, 60, 32, 49, 56, 32, 124,
                32, 102, 32, 60, 60, 32, 49, 50, 32, 124, 32, 104, 32, 60, 60,
                32, 54, 32, 124, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                54, 53, 53, 51, 54, 32, 62, 32, 101, 32, 63, 32, 100, 32, 43,
                61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67,
                104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 32, 58, 32, 40,
                101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43,
                61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67,
                104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32,
                124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50,
                48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102,
                114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                108, 97, 115, 115, 32, 72, 97, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114,
                40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 119, 97, 32, 61, 32, 97, 32, 45, 32, 50,
                52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                73, 97, 32, 61, 32, 48, 44, 32, 74, 97, 32, 61, 32, 48, 44, 32,
                73, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                100, 32, 61, 32, 120, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 48, 32, 60, 32, 99, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 32, 43, 32,
                99, 32, 45, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32,
                48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116,
                104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32,
                97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38,
                38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 104, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111,
                100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53,
                53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51,
                41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 104, 32, 38, 32,
                49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 49, 50, 55, 32, 62, 61, 32, 102, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 98, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97,
                107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 102, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 50, 48, 52, 55, 32, 62, 61, 32,
                102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 49,
                32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100,
                91, 98, 43, 43, 93, 32, 61, 32, 49, 57, 50, 32, 124, 32, 102,
                32, 62, 62, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 54, 53, 53, 51, 53, 32, 62, 61, 32, 102, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 50, 32,
                62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 50, 52, 32, 124, 32,
                102, 32, 62, 62, 32, 49, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 51, 32,
                62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 52, 48, 32, 124, 32,
                102, 32, 62, 62, 32, 49, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43,
                93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32,
                49, 50, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43,
                93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32,
                54, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49,
                50, 56, 32, 124, 32, 102, 32, 38, 32, 54, 51, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 91, 98, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                75, 97, 32, 61, 32, 123, 125, 44, 32, 76, 97, 32, 61, 32, 40,
                97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 59, 32, 97, 46, 108, 101, 110, 103, 116,
                104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46,
                112, 111, 112, 40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32,
                32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                74, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91,
                97, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 75, 32, 61,
                32, 123, 125, 44, 32, 76, 32, 61, 32, 123, 125, 44, 32, 77, 97,
                32, 61, 32, 123, 125, 44, 32, 77, 44, 32, 79, 32, 61, 32, 40,
                97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                32, 100, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 103, 32, 61, 32, 99, 40, 103, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 46, 108,
                101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 97, 46, 108, 101,
                110, 103, 116, 104, 41, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 77, 40, 34, 77, 105, 115, 109, 97, 116, 99, 104,
                101, 100, 32, 116, 121, 112, 101, 32, 99, 111, 110, 118, 101,
                114, 116, 101, 114, 32, 99, 111, 117, 110, 116, 34, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32,
                97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 108, 41,
                32, 78, 40, 97, 91, 108, 93, 44, 32, 103, 91, 108, 93, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103,
                41, 32, 61, 62, 32, 77, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32,
                61, 32, 65, 114, 114, 97, 121, 40, 98, 46, 108, 101, 110, 103,
                116, 104, 41, 44, 32, 102, 32, 61, 32, 91, 93, 44, 32, 104, 32,
                61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102,
                111, 114, 69, 97, 99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 46,
                104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116,
                121, 40, 103, 41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 76,
                91, 103, 93, 32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40,
                103, 41, 44, 32, 75, 46, 104, 97, 115, 79, 119, 110, 80, 114,
                111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40,
                75, 91, 103, 93, 32, 61, 32, 91, 93, 41, 44, 32, 75, 91, 103,
                93, 46, 112, 117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108,
                93, 32, 61, 32, 76, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 43, 43, 104, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 61, 61, 32, 102, 46,
                108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101,
                110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 78, 97, 44, 32, 80, 32, 61,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32,
                34, 34, 59, 32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61,
                32, 78, 97, 91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81, 59, 10, 32, 32, 32,
                32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 80, 97,
                40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                32, 61, 32, 98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 81, 40, 96, 116, 121, 112, 101,
                32, 34, 36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104,
                97, 118, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118,
                101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112,
                101, 105, 100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 76,
                46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114,
                116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 99, 46, 97, 98, 41, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115,
                116, 101, 114, 32, 116, 121, 112, 101, 32, 39, 36, 123, 100,
                125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76,
                91, 97, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 100, 101, 108, 101, 116, 101, 32, 77, 97, 91, 97, 93, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 46, 104, 97, 115, 79,
                119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 32,
                38, 38, 32, 40, 98, 32, 61, 32, 75, 91, 97, 93, 44, 32, 100,
                101, 108, 101, 116, 101, 32, 75, 91, 97, 93, 44, 32, 98, 46,
                102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32,
                101, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                32, 78, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 80, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 81, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 81, 40, 97, 46, 117, 97, 46, 120,
                97, 46, 118, 97, 46, 110, 97, 109, 101, 32, 43, 32, 34, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 97, 108, 114, 101, 97, 100,
                121, 32, 100, 101, 108, 101, 116, 101, 100, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 82, 97, 32, 61, 32, 102, 97,
                108, 115, 101, 44, 32, 83, 97, 32, 61, 32, 40, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 97, 32,
                61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32,
                61, 61, 61, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 46, 65, 97,
                41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 84, 97,
                40, 97, 44, 32, 98, 44, 32, 99, 46, 65, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110,
                117, 108, 108, 32, 61, 61, 61, 32, 97, 32, 63, 32, 110, 117,
                108, 108, 32, 58, 32, 99, 46, 85, 97, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 85, 97, 32, 61, 32, 123, 125,
                44, 32, 86, 97, 32, 61, 32, 123, 125, 44, 32, 87, 97, 32, 61,
                32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32,
                48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 81, 40, 34, 112, 116, 114, 32, 115, 104, 111,
                117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 117, 110,
                100, 101, 102, 105, 110, 101, 100, 34, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 65,
                97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46, 75, 97, 40, 98, 41,
                44, 32, 97, 32, 61, 32, 97, 46, 65, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 86, 97, 91,
                98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 88, 97, 32,
                61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 120, 97,
                32, 124, 124, 32, 33, 98, 46, 119, 97, 41, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 77, 40, 34, 109, 97, 107, 101,
                67, 108, 97, 115, 115, 72, 97, 110, 100, 108, 101, 32, 114, 101,
                113, 117, 105, 114, 101, 115, 32, 112, 116, 114, 32, 97, 110,
                100, 32, 112, 116, 114, 84, 121, 112, 101, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 33, 98, 46,
                66, 97, 32, 33, 61, 61, 32, 33, 33, 98, 46, 122, 97, 41, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 77, 40, 34, 66,
                111, 116, 104, 32, 115, 109, 97, 114, 116, 80, 116, 114, 84,
                121, 112, 101, 32, 97, 110, 100, 32, 115, 109, 97, 114, 116, 80,
                116, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 112,
                101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116, 32, 61, 32,
                123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 82, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97,
                116, 101, 40, 97, 44, 32, 123, 32, 117, 97, 58, 32, 123, 32,
                118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114, 105, 116,
                97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125, 32, 125,
                41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 32, 61,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101, 102, 105, 110,
                101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112, 101, 111, 102,
                32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82,
                101, 103, 105, 115, 116, 114, 121, 41, 32, 114, 101, 116, 117,
                114, 110, 32, 82, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 98,
                44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 97, 32,
                61, 32, 110, 101, 119, 32, 70, 105, 110, 97, 108, 105, 122, 97,
                116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 40,
                40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 32, 61, 32, 98, 46, 117, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46, 99, 111, 117, 110,
                116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98, 46, 99, 111, 117,
                110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 98,
                46, 122, 97, 32, 63, 32, 98, 46, 66, 97, 46, 69, 97, 40, 98, 46,
                122, 97, 41, 32, 58, 32, 98, 46, 120, 97, 46, 118, 97, 46, 69,
                97, 40, 98, 46, 119, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 32,
                61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46,
                117, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46,
                122, 97, 32, 38, 38, 32, 82, 97, 46, 114, 101, 103, 105, 115,
                116, 101, 114, 40, 98, 44, 32, 123, 32, 117, 97, 58, 32, 99, 32,
                125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                83, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 82, 97, 46, 117, 110, 114, 101,
                103, 105, 115, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 82, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 89, 97, 32, 61, 32, 91, 93, 59,
                10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 32, 90, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 36, 97, 32,
                61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79, 98, 106,
                101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111,
                112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97, 109, 101,
                34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 97, 32,
                125, 41, 44, 32, 97, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61,
                32, 97, 91, 98, 93, 46, 121, 97, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32,
                97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91, 98,
                93, 46, 121, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111,
                112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103, 116,
                104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39, 36, 123,
                99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116,
                104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110,
                117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117,
                109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46, 108, 101,
                110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99,
                116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40, 36, 123, 97,
                91, 98, 93, 46, 121, 97, 125, 41, 33, 96, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 97, 91, 98, 93, 46, 121, 97, 91, 101, 46, 108, 101,
                110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121, 40, 116,
                104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 91, 98, 93, 46, 121, 97, 32, 61, 32, 91, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 121, 97,
                91, 100, 46, 72, 97, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44,
                32, 98, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112,
                101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100,
                32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118, 111, 105,
                100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 121, 97,
                32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32,
                107, 91, 97, 93, 46, 121, 97, 91, 99, 93, 41, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 81, 40, 96, 67, 97, 110, 110, 111, 116, 32,
                114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117, 98, 108,
                105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97, 125, 39,
                32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 97, 98, 40, 107, 44, 32, 97, 44, 32, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 107, 91, 97, 93, 46, 121, 97, 46, 104, 97, 115, 79, 119,
                110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 81, 40, 96, 67, 97, 110, 110,
                111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109,
                117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114, 108,
                111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101,
                32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111,
                102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36,
                123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 107, 91, 97, 93, 46, 121, 97, 91, 99, 93, 32,
                61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32,
                101, 108, 115, 101, 32, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32,
                107, 91, 97, 93, 46, 72, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 99, 98, 32, 61, 32, 40, 97, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32,
                97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97, 45,
                122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34, 36,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101,
                65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32, 98,
                32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96, 95,
                36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 100, 98, 40, 97, 44, 32, 98, 44, 32, 99,
                44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115,
                116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 71, 97, 32,
                61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 69, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 65, 97, 32, 61, 32, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                87, 97, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 75, 97, 32, 61, 32, 104, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 85, 97, 32, 61,
                32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 99, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 98,
                32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98,
                46, 75, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 81, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110,
                117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97, 109, 101,
                125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46, 110, 97,
                109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 32, 61, 32, 98, 46, 75, 97, 40, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 65,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 98, 40, 97, 44,
                32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 78, 97, 41, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 81, 40, 96, 110, 117, 108, 108, 32,
                105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100,
                32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                33, 98, 46, 117, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 81, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112,
                97, 115, 115, 32, 34, 36, 123, 103, 98, 40, 98, 41, 125, 34, 32,
                97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97,
                109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 33, 98, 46, 117, 97, 46, 119, 97, 41, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 96, 67, 97,
                110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108,
                101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115,
                32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32,
                116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110,
                97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 101, 98, 40, 98, 46, 117,
                97, 46, 119, 97, 44, 32, 98, 46, 117, 97, 46, 120, 97, 46, 118,
                97, 44, 32, 116, 104, 105, 115, 46, 118, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 104, 98, 40, 97, 44, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110,
                117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 78, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 81, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110,
                111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116,
                104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 77, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116,
                104, 105, 115, 46, 79, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61,
                32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116,
                104, 105, 115, 46, 69, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                98, 32, 124, 124, 32, 33, 98, 46, 117, 97, 41, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 96, 67, 97, 110,
                110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 103, 98,
                40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 117, 97,
                46, 119, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 81, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115,
                115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106,
                101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116,
                101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123,
                116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104,
                105, 115, 46, 76, 97, 32, 38, 38, 32, 98, 46, 117, 97, 46, 120,
                97, 46, 76, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110,
                110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97,
                114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121,
                112, 101, 32, 36, 123, 98, 46, 117, 97, 46, 66, 97, 32, 63, 32,
                98, 46, 117, 97, 46, 66, 97, 46, 110, 97, 109, 101, 32, 58, 32,
                98, 46, 117, 97, 46, 120, 97, 46, 110, 97, 109, 101, 125, 32,
                116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32,
                116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110,
                97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32,
                101, 98, 40, 98, 46, 117, 97, 46, 119, 97, 44, 32, 98, 46, 117,
                97, 46, 120, 97, 46, 118, 97, 44, 32, 116, 104, 105, 115, 46,
                118, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 116, 104, 105, 115, 46, 77, 97, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105,
                100, 32, 48, 32, 61, 61, 61, 32, 98, 46, 117, 97, 46, 122, 97,
                41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                34, 80, 97, 115, 115, 105, 110, 103, 32, 114, 97, 119, 32, 112,
                111, 105, 110, 116, 101, 114, 32, 116, 111, 32, 115, 109, 97,
                114, 116, 32, 112, 111, 105, 110, 116, 101, 114, 32, 105, 115,
                32, 105, 108, 108, 101, 103, 97, 108, 34, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32,
                40, 116, 104, 105, 115, 46, 105, 98, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32,
                48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 98, 46, 117, 97, 46, 66, 97, 32, 61, 61,
                61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 117,
                97, 46, 122, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 81, 40, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110,
                110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97,
                114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121,
                112, 101, 32, 36, 123, 98, 46, 117, 97, 46, 66, 97, 32, 63, 32,
                98, 46, 117, 97, 46, 66, 97, 46, 110, 97, 109, 101, 32, 58, 32,
                98, 46, 117, 97, 46, 120, 97, 46, 110, 97, 109, 101, 125, 32,
                116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32,
                116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110,
                97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115,
                101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 32, 61, 32, 98, 46, 117, 97, 46, 122, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98,
                114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98,
                46, 117, 97, 46, 66, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115,
                41, 32, 99, 32, 61, 32, 98, 46, 117, 97, 46, 122, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32,
                98, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32,
                116, 104, 105, 115, 46, 101, 98, 40, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 98, 40, 40, 41, 32, 61, 62, 32, 100, 91, 34, 100, 101,
                108, 101, 116, 101, 34, 93, 40, 41, 41, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110,
                117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46,
                112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 69, 97, 44, 32,
                99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 34, 85, 110,
                115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 32, 115, 104,
                97, 114, 105, 110, 103, 32, 112, 111, 108, 105, 99, 121, 34, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 106, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108,
                108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115,
                46, 78, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119,
                32, 81, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111,
                116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 117, 97,
                41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34,
                36, 123, 103, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32,
                36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                98, 46, 117, 97, 46, 119, 97, 41, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 81, 40, 96, 67, 97, 110, 110, 111, 116,
                32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100,
                32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112,
                111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112,
                101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101,
                125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 98, 46, 117, 97, 46, 120, 97, 46, 76, 97, 41, 32, 116,
                104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 96, 67, 97,
                110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32,
                97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116,
                121, 112, 101, 32, 36, 123, 98, 46, 117, 97, 46, 120, 97, 46,
                110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109,
                101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116,
                104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                101, 98, 40, 98, 46, 117, 97, 46, 119, 97, 44, 32, 98, 46, 117,
                97, 46, 120, 97, 46, 118, 97, 44, 32, 116, 104, 105, 115, 46,
                118, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107,
                98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101,
                44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109,
                44, 32, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 118,
                97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 78, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 76, 97, 32, 61, 32,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 77, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 98, 98, 32, 61, 32, 102, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 105, 98, 32,
                61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 83, 97, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 79, 97, 32, 61, 32, 108,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                101, 98, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 69, 97, 32, 61, 32, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 101, 32, 124, 124, 32, 118, 111,
                105, 100, 32, 48, 32, 33, 61, 61, 32, 98, 46, 65, 97, 32, 63,
                32, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84,
                121, 112, 101, 32, 61, 32, 104, 98, 32, 58, 32, 40, 116, 104,
                105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101,
                32, 61, 32, 100, 32, 63, 32, 102, 98, 32, 58, 32, 106, 98, 44,
                32, 116, 104, 105, 115, 46, 68, 97, 32, 61, 32, 110, 117, 108,
                108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 108, 98, 32, 61, 32, 40, 97, 44,
                32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 107, 46, 104, 97, 115, 79,
                119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 77, 40, 34,
                82, 101, 112, 108, 97, 99, 105, 110, 103, 32, 110, 111, 110,
                101, 120, 105, 115, 116, 101, 110, 116, 32, 112, 117, 98, 108,
                105, 99, 32, 115, 121, 109, 98, 111, 108, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33,
                61, 61, 32, 107, 91, 97, 93, 46, 121, 97, 32, 38, 38, 32, 118,
                111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 99, 32, 63, 32, 107,
                91, 97, 93, 46, 121, 97, 91, 99, 93, 32, 61, 32, 98, 32, 58, 32,
                40, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32, 107, 91, 97, 93,
                46, 72, 97, 32, 61, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 83, 44, 32, 109, 98, 32, 61, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 32, 61, 32, 91, 93, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 105, 110, 99, 108, 117,
                100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 40, 97, 32, 61,
                32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 112, 47,
                103, 44, 32, 34, 105, 34, 41, 44, 32, 98, 32, 61, 32, 40, 48,
                44, 32, 107, 91, 34, 100, 121, 110, 67, 97, 108, 108, 95, 34,
                32, 43, 32, 97, 93, 41, 40, 98, 44, 32, 46, 46, 46, 99, 41, 41,
                32, 58, 32, 98, 32, 61, 32, 83, 46, 103, 101, 116, 40, 98, 41,
                40, 46, 46, 46, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 44, 32, 110, 98, 32, 61, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 40, 46, 46, 46, 99, 41, 32, 61, 62, 32, 109,
                98, 40, 97, 44, 32, 98, 44, 32, 99, 41, 44, 32, 84, 32, 61, 32,
                40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 97, 32, 61, 32, 80, 40, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97,
                46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41,
                32, 63, 32, 110, 98, 40, 97, 44, 32, 98, 41, 32, 58, 32, 83, 46,
                103, 101, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110,
                34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 41,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40, 96,
                117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 112, 111, 105, 110, 116, 101, 114, 32, 119,
                105, 116, 104, 32, 115, 105, 103, 110, 97, 116, 117, 114, 101,
                32, 36, 123, 97, 125, 58, 32, 36, 123, 98, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 111, 98,
                44, 32, 113, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 112, 98, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 98, 32, 61, 32, 80, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 85, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 114, 98, 32, 61, 32, 40, 97, 44, 32,
                98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 40, 102, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 102,
                93, 32, 124, 124, 32, 76, 91, 102, 93, 32, 124, 124, 32, 40, 77,
                97, 91, 102, 93, 32, 63, 32, 77, 97, 91, 102, 93, 46, 102, 111,
                114, 69, 97, 99, 104, 40, 99, 41, 32, 58, 32, 40, 100, 46, 112,
                117, 115, 104, 40, 102, 41, 44, 32, 101, 91, 102, 93, 32, 61,
                32, 116, 114, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 100, 32, 61, 32, 91, 93, 44, 32, 101, 32, 61, 32, 123, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114,
                69, 97, 99, 104, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 111, 98, 40,
                96, 36, 123, 97, 125, 58, 32, 96, 32, 43, 32, 100, 46, 109, 97,
                112, 40, 113, 98, 41, 46, 106, 111, 105, 110, 40, 91, 34, 44,
                32, 34, 93, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                115, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 44, 32, 100, 32, 61,
                32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 100, 43, 43, 41,
                32, 99, 46, 112, 117, 115, 104, 40, 68, 91, 98, 32, 43, 32, 52,
                32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 98, 40, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 118, 97, 114, 32, 98, 32, 61, 32, 49, 59, 32, 98, 32, 60,
                32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 98,
                41, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61,
                32, 97, 91, 98, 93, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48,
                32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 68, 97, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102,
                97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                117, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 98, 46, 108, 101, 110, 103, 116, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50,
                32, 62, 32, 102, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 81, 40, 34, 97, 114, 103, 84, 121, 112, 101, 115, 32,
                97, 114, 114, 97, 121, 32, 115, 105, 122, 101, 32, 109, 105,
                115, 109, 97, 116, 99, 104, 33, 32, 77, 117, 115, 116, 32, 97,
                116, 32, 108, 101, 97, 115, 116, 32, 103, 101, 116, 32, 114,
                101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 97,
                110, 100, 32, 39, 116, 104, 105, 115, 39, 32, 116, 121, 112,
                101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 104, 32, 61, 32, 110, 117, 108, 108, 32, 33,
                61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110, 117, 108, 108,
                32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32, 116, 98, 40,
                98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105, 100, 34, 32,
                33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109, 101, 44, 32,
                109, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 110, 32, 61, 32,
                65, 114, 114, 97, 121, 40, 109, 41, 44, 32, 113, 32, 61, 32, 91,
                93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 36, 97, 40, 97,
                44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46,
                65, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 46, 108, 101, 110,
                103, 116, 104, 32, 61, 32, 104, 32, 63, 32, 50, 32, 58, 32, 49,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 48, 93,
                32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 117, 32, 61, 32, 98,
                91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101,
                40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 113, 91, 49, 93, 32, 61, 32,
                117, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 118, 32, 61, 32, 48, 59, 32, 118, 32, 60, 32,
                109, 59, 32, 43, 43, 118, 41, 32, 110, 91, 118, 93, 32, 61, 32,
                98, 91, 118, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114,
                101, 84, 121, 112, 101, 40, 114, 44, 32, 65, 91, 118, 93, 41,
                44, 32, 113, 46, 112, 117, 115, 104, 40, 110, 91, 118, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 32, 61, 32,
                100, 40, 46, 46, 46, 113, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 76, 97, 40, 114,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108,
                115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 32, 61, 32, 104, 32, 63, 32, 49, 32,
                58, 32, 50, 59, 32, 118, 32, 60, 32, 98, 46, 108, 101, 110, 103,
                116, 104, 59, 32, 118, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69,
                32, 61, 32, 49, 32, 61, 61, 61, 32, 118, 32, 63, 32, 117, 32,
                58, 32, 110, 91, 118, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108,
                32, 33, 61, 61, 32, 98, 91, 118, 93, 46, 68, 97, 32, 38, 38, 32,
                98, 91, 118, 93, 46, 68, 97, 40, 69, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48,
                93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 40, 65, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 117, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 118, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97,
                46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105,
                110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45,
                49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98,
                115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 120, 98, 32, 61, 32, 91,
                93, 44, 32, 86, 32, 61, 32, 91, 93, 44, 32, 121, 98, 32, 61, 32,
                40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32,
                45, 45, 86, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 86,
                91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 120,
                98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 122, 98, 32, 61, 32, 40, 97, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 81, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115,
                101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108,
                46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 86, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 44, 32, 105, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116,
                99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32,
                48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                98, 32, 61, 32, 120, 98, 46, 112, 111, 112, 40, 41, 32, 124,
                124, 32, 86, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 93, 32, 61,
                32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                86, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32,
                34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58,
                118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40,
                97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 122, 98, 40, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 121, 98, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87,
                105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 105, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 67, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114,
                111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 74, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32, 110, 117, 108,
                108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 66, 98, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32,
                40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32,
                63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 119,
                91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104,
                105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121,
                112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104,
                105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121,
                112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114,
                111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91,
                100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105,
                115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 40, 67, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114,
                111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 68, 91, 100,
                32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114,
                40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116,
                101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36,
                123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                125, 44, 32, 67, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 99, 32, 61, 32, 76, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32,
                61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32,
                61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110,
                107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123,
                113, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 81, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44,
                32, 103, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108,
                108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112,
                101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99,
                116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114,
                114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34,
                102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32,
                98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103,
                40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 68, 98, 32, 61, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52,
                58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84,
                121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101,
                32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101,
                84, 121, 112, 101, 40, 112, 97, 91, 99, 32, 62, 62, 32, 51, 93,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102,
                97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118,
                97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105,
                100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123,
                97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 69, 98, 32, 61, 32, 40,
                97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97,
                115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32,
                40, 100, 41, 32, 61, 62, 32, 119, 91, 100, 93, 32, 58, 32, 40,
                100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32,
                121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41,
                32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32,
                52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32,
                61, 62, 32, 67, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40,
                100, 41, 32, 61, 62, 32, 68, 91, 100, 32, 62, 62, 32, 50, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102,
                97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118,
                97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32,
                119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32,
                36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 98, 32,
                61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103,
                110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32,
                116, 114, 117, 101, 32, 125, 44, 32, 65, 98, 41, 44, 32, 71, 98,
                32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34,
                32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120,
                116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119,
                32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 34,
                117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32, 118,
                111, 105, 100, 32, 48, 44, 32, 72, 98, 32, 61, 32, 40, 97, 44,
                32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32, 49,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32, 47,
                32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38, 38,
                32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32, 60,
                32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 71, 98, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 71, 98, 46, 100, 101, 99, 111, 100,
                101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97,
                44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32,
                62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32,
                100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32,
                98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49,
                52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42,
                32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32,
                47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32,
                99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32,
                49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101,
                65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49,
                93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 74, 98, 32, 61, 32, 40, 97, 41,
                32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116,
                104, 44, 32, 75, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32,
                61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47,
                32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 67, 91, 97, 32,
                43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32,
                61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32,
                101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54,
                44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53,
                53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44,
                32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48,
                50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114,
                105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67,
                111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                76, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61,
                32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43,
                32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48,
                59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104,
                59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99,
                104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53,
                53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51,
                52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61,
                32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40,
                43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40,
                102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41,
                32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32,
                102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43,
                61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98,
                114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 91, 98, 32, 62, 62, 32,
                50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 40, 97,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44,
                32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108,
                101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65,
                116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55,
                51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32,
                52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 78, 98, 32, 61, 32, 48,
                44, 32, 79, 98, 32, 61, 32, 91, 93, 44, 32, 80, 98, 32, 61, 32,
                40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 98, 32, 61, 32, 79, 98, 46, 108, 101, 110,
                103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 98,
                46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 44, 32, 81, 98, 32, 61, 32, 40, 97, 44,
                32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65,
                114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59,
                32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91,
                100, 93, 32, 61, 32, 67, 98, 40, 68, 91, 98, 32, 43, 32, 52, 32,
                42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114,
                97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82,
                98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 44, 32, 83, 98, 32, 61, 32,
                123, 125, 44, 32, 84, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102,
                32, 68, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100,
                34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 98, 32, 61,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 110, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 70, 97, 32, 124, 124, 32, 48, 32, 60, 32, 78,
                98, 32, 124, 124, 32, 40, 40, 95, 97, 50, 32, 61, 32, 107, 46,
                111, 110, 69, 120, 105, 116, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 44, 32, 109,
                97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                68, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                86, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 109, 97, 41, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 97, 40, 41, 44, 32, 33, 40, 70, 97, 32, 124, 124, 32,
                48, 32, 60, 32, 78, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97,
                32, 61, 32, 97, 32, 61, 32, 110, 97, 44, 32, 85, 98, 40, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84,
                98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 98, 40, 98, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 44, 32, 87, 98, 32, 61, 32, 123, 125, 44,
                32, 89, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 88, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117,
                115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101,
                98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68,
                58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101,
                47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32,
                40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116,
                121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116,
                111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111,
                114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38,
                32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110,
                103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34,
                67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41,
                32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 104, 97, 32,
                124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111,
                103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 87, 98, 41, 32,
                118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 87, 98, 91, 98,
                93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98,
                93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 87, 98, 91, 98, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41,
                32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61,
                36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 88, 98, 32, 61, 32, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 88, 98, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 44, 32, 88, 98, 44, 32, 90, 98, 32, 61, 32, 91,
                110, 117, 108, 108, 44, 32, 91, 93, 44, 32, 91, 93, 93, 44, 32,
                36, 98, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 111, 98, 106, 101, 99,
                116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99,
                114, 121, 112, 116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99,
                116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111,
                102, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97,
                110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46,
                103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117,
                101, 115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                119, 97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109,
                68, 101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 44, 32, 97, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32,
                40, 97, 99, 32, 61, 32, 36, 98, 40, 41, 41, 40, 97, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 77, 32, 61, 32, 107, 46, 73, 110, 116,
                101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99,
                108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32,
                69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32,
                61, 32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114,
                111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 99, 32, 61, 32, 65,
                114, 114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 99, 99, 32, 61,
                32, 48, 59, 32, 50, 53, 54, 32, 62, 32, 99, 99, 59, 32, 43, 43,
                99, 99, 41, 32, 98, 99, 91, 99, 99, 93, 32, 61, 32, 83, 116,
                114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114,
                67, 111, 100, 101, 40, 99, 99, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 78, 97, 32, 61, 32, 98, 99, 59, 10, 32, 32, 32, 32, 32, 32,
                81, 32, 61, 32, 107, 46, 66, 105, 110, 100, 105, 110, 103, 69,
                114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101,
                120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110,
                100, 105, 110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46,
                97, 115, 115, 105, 103, 110, 40, 90, 97, 46, 112, 114, 111, 116,
                111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                40, 116, 104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 111, 102, 32, 90, 97, 32, 38, 38, 32, 97, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 111, 102, 32, 90, 97, 41, 41, 32,
                114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                98, 32, 61, 32, 116, 104, 105, 115, 46, 117, 97, 46, 120, 97,
                46, 118, 97, 44, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46,
                117, 97, 46, 119, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 46, 117, 97, 32, 61, 32, 97, 46, 117, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                32, 61, 32, 97, 46, 117, 97, 46, 120, 97, 46, 118, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                97, 32, 61, 32, 97, 46, 117, 97, 46, 119, 97, 59, 32, 98, 46,
                65, 97, 59, 32, 41, 32, 99, 32, 61, 32, 98, 46, 75, 97, 40, 99,
                41, 44, 32, 98, 32, 61, 32, 98, 46, 65, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 100,
                46, 65, 97, 59, 32, 41, 32, 97, 32, 61, 32, 100, 46, 75, 97, 40,
                97, 41, 44, 32, 100, 32, 61, 32, 100, 46, 65, 97, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 98, 32, 61, 61, 61, 32, 100, 32, 38, 38, 32, 99, 32,
                61, 61, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 111, 110, 101,
                58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 117, 97, 46, 119, 97, 32, 124, 124, 32, 81, 97, 40, 116,
                104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 117, 97, 46, 74,
                97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105,
                115, 46, 117, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108,
                117, 101, 32, 43, 61, 32, 49, 44, 32, 116, 104, 105, 115, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                97, 32, 61, 32, 82, 44, 32, 98, 32, 61, 32, 79, 98, 106, 101,
                99, 116, 44, 32, 99, 32, 61, 32, 98, 46, 99, 114, 101, 97, 116,
                101, 44, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46,
                103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79,
                102, 40, 116, 104, 105, 115, 41, 44, 32, 101, 32, 61, 32, 116,
                104, 105, 115, 46, 117, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 32, 61, 32, 97, 40, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 46, 99, 97, 108, 108, 40, 98, 44,
                32, 100, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 117, 97, 58, 32, 123, 32, 118, 97, 108, 117,
                101, 58, 32, 123, 32, 99, 111, 117, 110, 116, 58, 32, 101, 46,
                99, 111, 117, 110, 116, 44, 32, 73, 97, 58, 32, 101, 46, 73, 97,
                44, 32, 74, 97, 58, 32, 101, 46, 74, 97, 44, 32, 119, 97, 58,
                32, 101, 46, 119, 97, 44, 32, 120, 97, 58, 32, 101, 46, 120, 97,
                44, 32, 122, 97, 58, 32, 101, 46, 122, 97, 44, 32, 66, 97, 58,
                32, 101, 46, 66, 97, 32, 125, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 46, 117, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97,
                108, 117, 101, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 97, 46, 117, 97, 46, 73, 97, 32, 61, 32,
                102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 117, 97, 46, 119, 97, 32, 124, 124, 32, 81, 97, 40,
                116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 117, 97, 46,
                73, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 117, 97, 46,
                74, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                81, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101,
                97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100,
                32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 97,
                40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 116, 104, 105,
                115, 46, 117, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 45, 45, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108,
                117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48,
                32, 61, 61, 61, 32, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97,
                108, 117, 101, 32, 38, 38, 32, 40, 97, 46, 122, 97, 32, 63, 32,
                97, 46, 66, 97, 46, 69, 97, 40, 97, 46, 122, 97, 41, 32, 58, 32,
                97, 46, 120, 97, 46, 118, 97, 46, 69, 97, 40, 97, 46, 119, 97,
                41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 117, 97, 46, 74, 97, 32, 124, 124, 32, 40,
                116, 104, 105, 115, 46, 117, 97, 46, 122, 97, 32, 61, 32, 118,
                111, 105, 100, 32, 48, 44, 32, 116, 104, 105, 115, 46, 117, 97,
                46, 119, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 115, 68, 101, 108, 101, 116, 101, 100, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 33, 116, 104, 105, 115, 46, 117, 97, 46, 119, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 76, 97, 116, 101,
                114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 117, 97, 46, 119, 97, 32, 124, 124, 32, 81, 97, 40,
                116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 117, 97, 46,
                73, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 117, 97, 46,
                74, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                81, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101,
                97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100,
                32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 97,
                46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 117,
                97, 46, 73, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105,
                103, 110, 40, 107, 98, 46, 112, 114, 111, 116, 111, 116, 121,
                112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88,
                97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 83, 97, 32, 38, 38, 32, 40, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 83, 97, 40, 97, 41, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 97, 40, 97, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40,
                95, 97, 50, 32, 61, 32, 116, 104, 105, 115, 46, 69, 97, 41, 32,
                61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100,
                32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 116,
                104, 105, 115, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58,
                32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97,
                100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105,
                110, 116, 101, 114, 58, 32, 74, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 98, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 77, 97, 32, 63, 32, 88,
                97, 40, 116, 104, 105, 115, 46, 118, 97, 46, 71, 97, 44, 32,
                123, 32, 120, 97, 58, 32, 116, 104, 105, 115, 46, 98, 98, 44,
                32, 119, 97, 58, 32, 99, 44, 32, 66, 97, 58, 32, 116, 104, 105,
                115, 44, 32, 122, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 88,
                97, 40, 116, 104, 105, 115, 46, 118, 97, 46, 71, 97, 44, 32,
                123, 32, 120, 97, 58, 32, 116, 104, 105, 115, 44, 32, 119, 97,
                58, 32, 97, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 88, 97, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32,
                116, 104, 105, 115, 46, 81, 97, 40, 97, 41, 44, 32, 110, 117,
                108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 100, 32, 61, 32, 87, 97, 40, 116, 104, 105, 115,
                46, 118, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32,
                33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61,
                32, 100, 46, 117, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97,
                108, 117, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 100,
                46, 117, 97, 46, 119, 97, 32, 61, 32, 99, 44, 32, 100, 46, 117,
                97, 46, 122, 97, 32, 61, 32, 97, 44, 32, 100, 46, 99, 108, 111,
                110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108, 111, 110, 101,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 81, 97, 40, 97, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61,
                32, 116, 104, 105, 115, 46, 118, 97, 46, 87, 97, 40, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 85,
                97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110,
                32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32,
                116, 104, 105, 115, 46, 76, 97, 32, 63, 32, 100, 46, 84, 97, 32,
                58, 32, 100, 46, 112, 111, 105, 110, 116, 101, 114, 84, 121,
                112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 101, 32, 61, 32, 84, 97, 40, 99, 44, 32, 116, 104,
                105, 115, 46, 118, 97, 44, 32, 100, 46, 118, 97, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 101, 32, 63,
                32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 32,
                58, 32, 116, 104, 105, 115, 46, 77, 97, 32, 63, 32, 88, 97, 40,
                100, 46, 118, 97, 46, 71, 97, 44, 32, 123, 32, 120, 97, 58, 32,
                100, 44, 32, 119, 97, 58, 32, 101, 44, 32, 66, 97, 58, 32, 116,
                104, 105, 115, 44, 32, 122, 97, 58, 32, 97, 32, 125, 41, 32, 58,
                32, 88, 97, 40, 100, 46, 118, 97, 46, 71, 97, 44, 32, 123, 32,
                120, 97, 58, 32, 100, 44, 32, 119, 97, 58, 32, 101, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 111, 98, 32,
                61, 32, 107, 46, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112,
                101, 69, 114, 114, 111, 114, 32, 61, 32, 40, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 99, 32, 61, 32, 36, 97, 40, 98, 44, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110,
                97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97,
                103, 101, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 32, 61, 32, 69, 114, 114, 111, 114, 40, 100,
                41, 46, 115, 116, 97, 99, 107, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32,
                100, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 115, 116, 97,
                99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 116, 111, 83, 116,
                114, 105, 110, 103, 40, 41, 32, 43, 32, 34, 92, 110, 34, 32, 43,
                32, 100, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 69,
                114, 114, 111, 114, 40, 58, 91, 94, 92, 110, 93, 42, 41, 63, 92,
                110, 47, 44, 32, 34, 34, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46,
                112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 79, 98,
                106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 46,
                112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                111, 114, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46,
                116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 116, 104, 105,
                115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 63, 32, 116, 104,
                105, 115, 46, 110, 97, 109, 101, 32, 58, 32, 96, 36, 123, 116,
                104, 105, 115, 46, 110, 97, 109, 101, 125, 58, 32, 36, 123, 116,
                104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 69, 114, 114, 111, 114,
                44, 32, 34, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101,
                69, 114, 114, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                86, 46, 112, 117, 115, 104, 40, 48, 44, 32, 49, 44, 32, 118,
                111, 105, 100, 32, 48, 44, 32, 49, 44, 32, 110, 117, 108, 108,
                44, 32, 49, 44, 32, 116, 114, 117, 101, 44, 32, 49, 44, 32, 102,
                97, 108, 115, 101, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 107, 46, 99, 111, 117, 110, 116, 95, 101, 109, 118, 97, 108,
                95, 104, 97, 110, 100, 108, 101, 115, 32, 61, 32, 40, 41, 32,
                61, 62, 32, 86, 46, 108, 101, 110, 103, 116, 104, 32, 47, 32,
                50, 32, 45, 32, 53, 32, 45, 32, 120, 98, 46, 108, 101, 110, 103,
                116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 111,
                99, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 58,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62,
                32, 119, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96,
                65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105,
                108, 101, 100, 58, 32, 36, 123, 97, 32, 63, 32, 72, 40, 120, 44,
                32, 97, 41, 32, 58, 32, 34, 34, 125, 44, 32, 97, 116, 58, 32,
                96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32, 63, 32, 72, 40, 120,
                44, 32, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110,
                107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110, 97, 109,
                101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32, 63, 32,
                72, 40, 120, 44, 32, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32,
                34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97,
                44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32,
                110, 101, 119, 32, 72, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 119, 97, 32, 43, 32,
                49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 119, 97, 32,
                43, 32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 46, 119, 97,
                32, 43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 97, 32, 61, 32, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 74, 97, 43, 43,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 80, 58, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32,
                40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 40, 41,
                32, 61, 62, 32, 119, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                98, 32, 61, 32, 75, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 75, 97,
                91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 99, 32, 61, 32, 98, 46, 79, 97, 44, 32, 100, 32,
                61, 32, 98, 46, 69, 97, 44, 32, 101, 32, 61, 32, 98, 46, 82, 97,
                44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 104, 41,
                32, 61, 62, 32, 104, 46, 36, 97, 41, 46, 99, 111, 110, 99, 97,
                116, 40, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32,
                104, 46, 103, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 79, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 104,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102,
                111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 109, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 104, 91, 109, 93, 44,
                32, 113, 32, 61, 32, 108, 46, 89, 97, 44, 32, 114, 32, 61, 32,
                108, 46, 90, 97, 44, 32, 65, 32, 61, 32, 104, 91, 109, 32, 43,
                32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 117, 32,
                61, 32, 108, 46, 102, 98, 44, 32, 118, 32, 61, 32, 108, 46, 104,
                98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 103, 91, 108, 46, 86, 97, 93, 32, 61, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 97, 100, 58, 32, 40, 69, 41, 32, 61, 62, 32, 110, 46, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 113,
                40, 114, 44, 32, 69, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58,
                32, 40, 69, 44, 32, 100, 97, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 66, 32, 61, 32, 91, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                117, 40, 118, 44, 32, 69, 44, 32, 65, 46, 116, 111, 87, 105,
                114, 101, 84, 121, 112, 101, 40, 66, 44, 32, 100, 97, 41, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 76, 97, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112,
                101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 109, 32, 61, 32, 123, 125, 44, 32, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32,
                109, 91, 110, 93, 32, 61, 32, 103, 91, 110, 93, 46, 114, 101,
                97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 105, 110, 32, 103,
                41, 32, 105, 102, 32, 40, 33, 40, 110, 32, 105, 110, 32, 109,
                41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84,
                121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115,
                115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36,
                123, 110, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                113, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32,
                40, 110, 32, 105, 110, 32, 103, 41, 32, 103, 91, 110, 93, 46,
                119, 114, 105, 116, 101, 40, 113, 44, 32, 109, 91, 110, 93, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32,
                38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 113,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 113, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 67, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100,
                86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110,
                116, 101, 114, 58, 32, 74, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32, 100, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32,
                80, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                78, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58,
                32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111,
                109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87,
                105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32,
                110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104,
                44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 113,
                44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 110, 32, 61, 32, 80, 40, 110, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40,
                101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 84, 40, 104,
                44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 32, 38, 38, 32, 40, 109, 32, 61, 32, 84, 40, 108, 44,
                32, 109, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 32, 61, 32, 84, 40, 113, 44, 32, 114, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 65, 32, 61,
                32, 99, 98, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 98, 98, 40, 65, 44, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 110,
                125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111,
                117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100,
                93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 91, 97,
                44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100,
                93, 32, 58, 32, 91, 93, 44, 32, 40, 117, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 32, 61, 32, 117, 91, 48, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 117, 46, 118,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 69, 32, 61, 32, 118, 46, 71, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 69, 32, 61, 32, 90, 97, 46, 112, 114, 111,
                116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 117, 32, 61, 32, 36, 97, 40, 110, 44,
                32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 79,
                97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46,
                103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79,
                102, 40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 100, 97,
                41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                34, 85, 115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32,
                110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61,
                61, 61, 32, 66, 46, 70, 97, 41, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 81, 40, 110, 32, 43, 32, 34, 32, 104, 97,
                115, 32, 110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108,
                101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 119, 98, 32, 61, 32, 66, 46, 70, 97,
                91, 79, 97, 46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 119, 98,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 81, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105,
                110, 118, 111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102,
                32, 36, 123, 110, 125, 32, 119, 105, 116, 104, 32, 105, 110,
                118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32,
                111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115,
                32, 40, 36, 123, 79, 97, 46, 108, 101, 110, 103, 116, 104, 125,
                41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 40,
                36, 123, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40,
                66, 46, 70, 97, 41, 46, 116, 111, 83, 116, 114, 105, 110, 103,
                40, 41, 125, 41, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114,
                115, 32, 105, 110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 119, 98, 46, 97, 112, 112, 108,
                121, 40, 116, 104, 105, 115, 44, 32, 79, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97,
                116, 101, 40, 69, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114,
                117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101,
                58, 32, 117, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 117, 46, 112, 114, 111, 116, 111,
                116, 121, 112, 101, 32, 61, 32, 100, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 66, 32, 61,
                32, 110, 101, 119, 32, 100, 98, 40, 110, 44, 32, 117, 44, 32,
                100, 97, 44, 32, 114, 44, 32, 118, 44, 32, 102, 44, 32, 103, 44,
                32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 66, 46, 65, 97, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 101, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 40, 101, 97, 32, 61, 32,
                66, 46, 65, 97, 41, 46, 80, 97, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 101, 97, 46, 80,
                97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 66, 46, 65, 97, 46, 80, 97, 46, 112,
                117, 115, 104, 40, 66, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 32, 61, 32, 110, 101, 119, 32, 107, 98, 40,
                110, 44, 32, 66, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97,
                108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 32, 61, 32,
                110, 101, 119, 32, 107, 98, 40, 110, 32, 43, 32, 34, 42, 34, 44,
                32, 66, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108,
                115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 32, 61, 32, 110,
                101, 119, 32, 107, 98, 40, 110, 32, 43, 32, 34, 32, 99, 111,
                110, 115, 116, 42, 34, 44, 32, 66, 44, 32, 102, 97, 108, 115,
                101, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85,
                97, 91, 97, 93, 32, 61, 32, 123, 32, 112, 111, 105, 110, 116,
                101, 114, 84, 121, 112, 101, 58, 32, 101, 97, 44, 32, 84, 97,
                58, 32, 69, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 108, 98, 40, 65, 44, 32, 117, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 91, 118, 44, 32, 101, 97, 44, 32, 69, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                113, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44,
                32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32,
                115, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 91, 93,
                44, 32, 91, 97, 93, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61,
                32, 103, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 96, 99, 111, 110,
                115, 116, 114, 117, 99, 116, 111, 114, 32, 36, 123, 103, 46,
                110, 97, 109, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61,
                32, 103, 46, 118, 97, 46, 70, 97, 32, 38, 38, 32, 40, 103, 46,
                118, 97, 46, 70, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111,
                105, 100, 32, 48, 32, 33, 61, 61, 32, 103, 46, 118, 97, 46, 70,
                97, 91, 98, 32, 45, 32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 81, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116,
                32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108,
                116, 105, 112, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117,
                99, 116, 111, 114, 115, 32, 119, 105, 116, 104, 32, 105, 100,
                101, 110, 116, 105, 99, 97, 108, 32, 110, 117, 109, 98, 101,
                114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101,
                114, 115, 32, 40, 36, 123, 98, 32, 45, 32, 49, 125, 41, 32, 102,
                111, 114, 32, 99, 108, 97, 115, 115, 32, 39, 36, 123, 103, 46,
                110, 97, 109, 101, 125, 39, 33, 32, 79, 118, 101, 114, 108, 111,
                97, 100, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110,
                32, 105, 115, 32, 99, 117, 114, 114, 101, 110, 116, 108, 121,
                32, 111, 110, 108, 121, 32, 112, 101, 114, 102, 111, 114, 109,
                101, 100, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32,
                112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 99, 111, 117,
                110, 116, 44, 32, 110, 111, 116, 32, 97, 99, 116, 117, 97, 108,
                32, 116, 121, 112, 101, 32, 105, 110, 102, 111, 33, 96, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 118,
                97, 46, 70, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 40, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32,
                99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 103, 46,
                110, 97, 109, 101, 125, 32, 100, 117, 101, 32, 116, 111, 32,
                117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115,
                96, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 79, 40, 91, 93, 44, 32, 104, 44, 32, 40, 109, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 46, 115, 112, 108, 105, 99, 101, 40, 49, 44,
                32, 48, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 118, 97, 46,
                70, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 117, 98, 40,
                108, 44, 32, 109, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44,
                32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 58, 32, 40,
                97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32,
                102, 44, 32, 104, 44, 32, 103, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32,
                61, 32, 115, 98, 40, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 80, 40, 98, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 118,
                98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 91, 93, 44, 32, 91, 97,
                93, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 98, 40, 96, 67, 97, 110,
                110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 113, 125, 32,
                100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110,
                100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 108, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 109,
                91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 113, 32, 61, 32, 96, 36, 123, 109, 46,
                110, 97, 109, 101, 125, 46, 36, 123, 98, 125, 96, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 115, 116,
                97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 64, 64, 34, 41,
                32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121, 109, 98, 111, 108,
                91, 98, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 50,
                41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 103, 32, 38, 38, 32, 109, 46, 118, 97, 46, 99, 98, 46, 112,
                117, 115, 104, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 109, 46,
                118, 97, 46, 71, 97, 44, 32, 65, 32, 61, 32, 114, 91, 98, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 32, 124, 124, 32,
                118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 65, 46, 121, 97,
                32, 38, 38, 32, 65, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101,
                32, 33, 61, 61, 32, 109, 46, 110, 97, 109, 101, 32, 38, 38, 32,
                65, 46, 72, 97, 32, 61, 61, 61, 32, 99, 32, 45, 32, 50, 32, 63,
                32, 40, 110, 46, 72, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32,
                110, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 61, 32,
                109, 46, 110, 97, 109, 101, 44, 32, 114, 91, 98, 93, 32, 61, 32,
                110, 41, 32, 58, 32, 40, 97, 98, 40, 114, 44, 32, 98, 44, 32,
                113, 41, 44, 32, 114, 91, 98, 93, 46, 121, 97, 91, 99, 32, 45,
                32, 50, 93, 32, 61, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 79, 40, 91, 93, 44, 32, 108, 44, 32, 40,
                117, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 117, 32, 61, 32, 117, 98, 40, 113,
                44, 32, 117, 44, 32, 109, 44, 32, 102, 44, 32, 104, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 114, 91, 98, 93, 46,
                121, 97, 32, 63, 32, 40, 117, 46, 72, 97, 32, 61, 32, 99, 32,
                45, 32, 50, 44, 32, 114, 91, 98, 93, 32, 61, 32, 117, 41, 32,
                58, 32, 114, 91, 98, 93, 46, 121, 97, 91, 99, 32, 45, 32, 50,
                93, 32, 61, 32, 117, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32, 40,
                97, 41, 32, 61, 62, 32, 78, 40, 97, 44, 32, 65, 98, 41, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 120, 58, 32, 40, 97, 44, 32, 98,
                44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                98, 32, 61, 32, 80, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 46, 118, 97, 108, 117, 101, 115, 32, 61,
                32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                78, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114,
                117, 99, 116, 111, 114, 58, 32, 101, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114,
                101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99,
                116, 111, 114, 46, 118, 97, 108, 117, 101, 115, 91, 102, 93, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87,
                105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 102, 44, 32, 104,
                41, 32, 61, 62, 32, 104, 46, 118, 97, 108, 117, 101, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 56,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111,
                105, 110, 116, 101, 114, 58, 32, 66, 98, 40, 98, 44, 32, 99, 44,
                32, 100, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 68, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 98, 40, 98, 44, 32, 101, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                107, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 100, 32, 61, 32, 67, 98, 40, 97, 44, 32, 34, 101, 110, 117,
                109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98,
                32, 61, 32, 80, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 32, 61, 32, 100, 46, 99, 111, 110, 115, 116,
                114, 117, 99, 116, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99,
                114, 101, 97, 116, 101, 40, 100, 46, 99, 111, 110, 115, 116,
                114, 117, 99, 116, 111, 114, 46, 112, 114, 111, 116, 111, 116,
                121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 118,
                97, 108, 117, 101, 58, 32, 99, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114,
                117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101,
                58, 32, 36, 97, 40, 96, 36, 123, 100, 46, 110, 97, 109, 101,
                125, 95, 36, 123, 98, 125, 96, 44, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 46, 118, 97, 108, 117, 101, 115, 91, 99, 93, 32,
                61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                91, 98, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 122, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 80, 40, 98,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 97,
                44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101,
                84, 121, 112, 101, 58, 32, 40, 100, 41, 32, 61, 62, 32, 100, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111,
                87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 44, 32,
                101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 56, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97,
                108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101,
                114, 58, 32, 68, 98, 40, 98, 44, 32, 99, 41, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32, 110, 117,
                108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 117, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99,
                44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                104, 32, 61, 32, 115, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 80, 40, 97,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61,
                32, 118, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 98, 40, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 98, 40, 96, 67, 97, 110, 110, 111,
                116, 32, 99, 97, 108, 108, 32, 36, 123, 97, 125, 32, 100, 117,
                101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32,
                116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45, 32, 49, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 79, 40, 91, 93, 44, 32, 104, 44, 32, 40,
                103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 108, 98, 40, 97, 44, 32, 117, 98, 40, 97,
                44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117, 108, 108, 93, 46,
                99, 111, 110, 99, 97, 116, 40, 103, 46, 115, 108, 105, 99, 101,
                40, 49, 41, 41, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32,
                102, 41, 44, 32, 98, 32, 45, 32, 49, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 108, 58, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 80, 40, 98,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 49, 32,
                61, 61, 61, 32, 101, 32, 38, 38, 32, 40, 101, 32, 61, 32, 52,
                50, 57, 52, 57, 54, 55, 50, 57, 53, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61,
                62, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 102, 32, 61, 32, 51, 50, 32, 45, 32, 56, 32, 42, 32, 99, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61,
                32, 40, 103, 41, 32, 61, 62, 32, 103, 32, 60, 60, 32, 102, 32,
                62, 62, 62, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 104, 32, 61, 32, 98, 46, 105, 110, 99, 108, 117, 100,
                101, 115, 40, 34, 117, 110, 115, 105, 103, 110, 101, 100, 34,
                41, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103,
                44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 32, 62,
                62, 62, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103,
                44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 78, 40, 97, 44, 32, 123, 32, 110,
                97, 109, 101, 58, 32, 98, 44, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 101, 44, 32, 116, 111, 87,
                105, 114, 101, 84, 121, 112, 101, 58, 32, 104, 44, 32, 67, 97,
                58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101,
                70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 69,
                98, 40, 98, 44, 32, 99, 44, 32, 48, 32, 33, 61, 61, 32, 100, 41,
                44, 32, 68, 97, 58, 32, 110, 117, 108, 108, 32, 125, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 104, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 102, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 101, 40, 119,
                46, 98, 117, 102, 102, 101, 114, 44, 32, 68, 91, 102, 32, 43,
                32, 52, 32, 62, 62, 32, 50, 93, 44, 32, 68, 91, 102, 32, 62, 62,
                32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 101, 32, 61, 32, 91, 73, 110, 116, 56, 65, 114, 114, 97,
                121, 44, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 44,
                32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 85,
                105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 73, 110,
                116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116,
                51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116,
                51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116,
                54, 52, 65, 114, 114, 97, 121, 93, 91, 98, 93, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 80, 40, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40, 97, 44,
                32, 123, 32, 110, 97, 109, 101, 58, 32, 99, 44, 32, 102, 114,
                111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 100, 44,
                32, 67, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108,
                117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114,
                58, 32, 100, 32, 125, 44, 32, 123, 32, 97, 98, 58, 32, 116, 114,
                117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 58, 32, 40,
                97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 78, 40, 97, 44, 32, 70, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32,
                101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32,
                109, 44, 32, 110, 44, 32, 113, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 80, 40, 99,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61,
                32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 103, 32, 61, 32, 84, 40, 104, 44, 32, 103,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61,
                32, 84, 40, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 113, 32, 61, 32, 84, 40, 110, 44, 32, 113,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 91,
                97, 93, 44, 32, 91, 98, 93, 44, 32, 40, 114, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                32, 61, 32, 114, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 110,
                101, 119, 32, 107, 98, 40, 99, 44, 32, 114, 46, 118, 97, 44, 32,
                102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32,
                116, 114, 117, 101, 44, 32, 114, 44, 32, 100, 44, 32, 102, 44,
                32, 103, 44, 32, 109, 44, 32, 113, 41, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 58,
                32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 80, 40, 98, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                99, 32, 61, 32, 34, 115, 116, 100, 58, 58, 115, 116, 114, 105,
                110, 103, 34, 32, 61, 61, 61, 32, 98, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 78, 40, 97, 44, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32,
                98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 101, 32, 61, 32, 68, 91, 100, 32, 62, 62, 32, 50, 93,
                44, 32, 102, 32, 61, 32, 100, 32, 43, 32, 52, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 99, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 104,
                32, 61, 32, 102, 44, 32, 103, 32, 61, 32, 48, 59, 32, 103, 32,
                60, 61, 32, 101, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 108, 32, 61, 32, 102, 32, 43, 32, 103, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 103, 32, 61, 61, 32, 101, 32, 124,
                124, 32, 48, 32, 61, 61, 32, 120, 91, 108, 93, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 104, 32, 61, 32, 104, 32, 63, 32, 72, 40, 120,
                44, 32, 104, 44, 32, 108, 32, 45, 32, 104, 41, 32, 58, 32, 34,
                34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105,
                100, 32, 48, 32, 61, 61, 61, 32, 109, 41, 32, 118, 97, 114, 32,
                109, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115,
                101, 32, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46,
                102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48,
                41, 44, 32, 109, 32, 43, 61, 32, 104, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                104, 32, 61, 32, 108, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 65, 114, 114,
                97, 121, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 103, 32,
                61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 59, 32, 43, 43, 103,
                41, 32, 109, 91, 103, 93, 32, 61, 32, 83, 116, 114, 105, 110,
                103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100,
                101, 40, 120, 91, 102, 32, 43, 32, 103, 93, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32,
                61, 32, 109, 46, 106, 111, 105, 110, 40, 34, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84,
                121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102,
                102, 101, 114, 32, 38, 38, 32, 40, 101, 32, 61, 32, 110, 101,
                119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 101,
                41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 102, 44, 32, 104, 32, 61, 32, 34, 115,
                116, 114, 105, 110, 103, 34, 32, 61, 61, 32, 116, 121, 112, 101,
                111, 102, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 104, 32, 124, 124,
                32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32,
                85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 32, 124, 124, 32,
                101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85,
                105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114,
                114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 111, 102, 32, 73, 110, 116, 56, 65, 114, 114, 97,
                121, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                81, 40, 34, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115,
                32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116,
                111, 32, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103,
                34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 103, 32, 61, 32, 102, 32,
                61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 46, 108, 101, 110,
                103, 116, 104, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 108, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67,
                111, 100, 101, 65, 116, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55,
                32, 62, 61, 32, 108, 32, 63, 32, 102, 43, 43, 32, 58, 32, 50,
                48, 52, 55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 32, 43, 61,
                32, 50, 32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 108, 32,
                38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 108, 32, 63, 32,
                40, 102, 32, 43, 61, 32, 52, 44, 32, 43, 43, 103, 41, 32, 58,
                32, 102, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102,
                32, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61,
                32, 100, 99, 40, 52, 32, 43, 32, 102, 32, 43, 32, 49, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108,
                32, 61, 32, 103, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 103, 32, 62, 62, 32, 50,
                93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104,
                41, 32, 73, 40, 101, 44, 32, 108, 44, 32, 102, 32, 43, 32, 49,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 104, 41, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32,
                102, 59, 32, 43, 43, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 109, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111,
                100, 101, 65, 116, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 50, 53, 53, 32, 60, 32, 109, 41, 32, 116, 104, 114, 111,
                119, 32, 85, 40, 108, 41, 44, 32, 110, 101, 119, 32, 81, 40, 34,
                83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70,
                45, 49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115,
                32, 116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102,
                105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32,
                109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 104,
                32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43,
                104, 41, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 101,
                91, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 100, 32, 38,
                38, 32, 100, 46, 112, 117, 115, 104, 40, 85, 44, 32, 103, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 56, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86,
                97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116,
                101, 114, 58, 32, 74, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 68, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32,
                80, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 100, 32, 61, 32, 72, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 73, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 74, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32,
                40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49,
                93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32,
                101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38,
                32, 40, 100, 32, 61, 32, 75, 98, 44, 32, 101, 32, 61, 32, 76,
                98, 44, 32, 102, 32, 61, 32, 77, 98, 44, 32, 104, 32, 61, 32,
                40, 103, 41, 32, 61, 62, 32, 68, 91, 103, 32, 62, 62, 32, 50,
                93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 40,
                97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114,
                101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 68,
                91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 109, 44, 32, 110, 32,
                61, 32, 103, 32, 43, 32, 52, 44, 32, 113, 32, 61, 32, 48, 59,
                32, 113, 32, 60, 61, 32, 108, 59, 32, 43, 43, 113, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32,
                43, 32, 113, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 113, 32,
                61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 104, 40,
                114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 100, 40, 110, 44, 32,
                114, 32, 45, 32, 110, 41, 44, 32, 118, 111, 105, 100, 32, 48,
                32, 61, 61, 61, 32, 109, 32, 63, 32, 109, 32, 61, 32, 110, 32,
                58, 32, 40, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103,
                46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40,
                48, 41, 44, 32, 109, 32, 43, 61, 32, 110, 41, 44, 32, 110, 32,
                61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32,
                40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121,
                112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119,
                32, 110, 101, 119, 32, 81, 40, 96, 67, 97, 110, 110, 111, 116,
                32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114,
                105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114,
                105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 109, 32, 61, 32, 102, 40, 108, 41, 44, 32,
                110, 32, 61, 32, 100, 99, 40, 52, 32, 43, 32, 109, 32, 43, 32,
                98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 68, 91, 110, 32, 62, 62, 32, 50, 93, 32, 61, 32, 109,
                32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 40, 108, 44, 32, 110, 32, 43, 32, 52, 44,
                32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61,
                32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 85,
                44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 58, 32, 56,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111,
                105, 110, 116, 101, 114, 58, 32, 74, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 68, 97, 40, 103, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40,
                103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 119, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 91, 97, 93, 32,
                61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 80, 40, 98, 41, 44,
                32, 79, 97, 58, 32, 84, 40, 99, 44, 32, 100, 41, 44, 32, 69, 97,
                58, 32, 84, 40, 101, 44, 32, 102, 41, 44, 32, 82, 97, 58, 32,
                91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44,
                32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 91,
                97, 93, 46, 82, 97, 46, 112, 117, 115, 104, 40, 123, 32, 86, 97,
                58, 32, 80, 40, 98, 41, 44, 32, 36, 97, 58, 32, 99, 44, 32, 89,
                97, 58, 32, 84, 40, 100, 44, 32, 101, 41, 44, 32, 90, 97, 58,
                32, 102, 44, 32, 103, 98, 58, 32, 104, 44, 32, 102, 98, 58, 32,
                84, 40, 103, 44, 32, 108, 41, 44, 32, 104, 98, 58, 32, 109, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 88, 58, 32, 40, 97, 44, 32, 98,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 98, 32, 61, 32, 80, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 78, 40, 97, 44, 32, 123, 32, 106, 98, 58,
                32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98,
                44, 32, 67, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105,
                114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70,
                97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 78, 98, 32, 61, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 68, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110,
                102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32,
                79, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 98, 32, 61, 32, 122, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97,
                40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 66, 58, 32, 121, 98, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 90, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 81, 98, 40, 97, 44, 32, 98,
                41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45,
                45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96,
                109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60,
                40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62,
                32, 104, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40,
                34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46,
                110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 80, 98, 40,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 97, 40,
                98, 44, 32, 40, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110,
                32, 61, 32, 48, 44, 32, 113, 32, 61, 32, 48, 59, 32, 113, 32,
                60, 32, 97, 59, 32, 43, 43, 113, 41, 32, 102, 91, 113, 93, 32,
                61, 32, 100, 91, 113, 93, 46, 114, 101, 97, 100, 86, 97, 108,
                117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114,
                40, 109, 32, 43, 32, 110, 41, 44, 32, 110, 32, 43, 61, 32, 100,
                91, 113, 93, 46, 67, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 49, 32, 61, 61, 61, 32,
                99, 32, 63, 32, 82, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32,
                103, 46, 97, 112, 112, 108, 121, 40, 104, 44, 32, 102, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104,
                32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 103, 32, 61, 32, 101, 46, 116, 111, 87, 105,
                114, 101, 84, 121, 112, 101, 40, 104, 44, 32, 103, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46,
                108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 68, 91, 108,
                32, 62, 62, 32, 50, 93, 32, 61, 32, 105, 98, 40, 104, 41, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 86, 91, 97, 32, 43,
                32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 89, 58,
                32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 122, 98, 40,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97,
                40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 121,
                98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32,
                98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 32, 61, 32, 67, 98, 40, 97, 44, 32, 34, 95, 101,
                109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117,
                101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97,
                32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101,
                70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 105, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69,
                58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 83, 98, 91, 97, 93, 32, 38, 38,
                32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116,
                40, 83, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108,
                101, 116, 101, 32, 83, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32,
                114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115,
                101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 101, 108, 101, 116, 101, 32, 83, 98, 91, 97, 93, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 40, 40,
                41, 32, 61, 62, 32, 101, 99, 40, 97, 44, 32, 112, 101, 114, 102,
                111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32,
                98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 98,
                91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32,
                107, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 70, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32,
                100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32,
                64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101,
                119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70,
                117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61,
                32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48,
                44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111,
                110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119,
                32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46,
                103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102,
                102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54,
                48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44,
                32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98,
                101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 104, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98,
                115, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67,
                36, 123, 48, 32, 60, 61, 32, 104, 32, 63, 32, 34, 45, 34, 32,
                58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103,
                40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32,
                47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116,
                40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105,
                110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83,
                116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102,
                32, 63, 32, 40, 73, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44,
                32, 73, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32,
                40, 73, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 73, 40,
                98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98,
                97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111,
                114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 40, 97, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116,
                104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62,
                62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56,
                32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102,
                97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49,
                59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32,
                43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116,
                104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48,
                48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97,
                116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54,
                52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116,
                104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97,
                120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54,
                41, 41, 32, 45, 32, 108, 97, 46, 98, 117, 102, 102, 101, 114,
                46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32,
                54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124,
                32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 46, 103, 114, 111,
                119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107,
                32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101,
                116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115,
                101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 84, 58, 32, 40, 97, 44, 32, 98, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 89, 98, 40, 41, 46, 102, 111, 114, 69,
                97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 68, 91,
                97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32,
                61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32,
                60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43,
                102, 41, 32, 119, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99,
                104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 91, 101,
                93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103,
                116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                85, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32,
                61, 32, 89, 98, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 68, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46,
                108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114,
                69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43,
                61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 98,
                32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 81, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 40, 41, 32,
                61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78,
                58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 44, 32,
                102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 99, 59, 32, 102,
                43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 68, 91, 98, 32, 62,
                62, 32, 50, 93, 44, 32, 103, 32, 61, 32, 68, 91, 98, 32, 43, 32,
                52, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 56, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118,
                97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 103,
                59, 32, 108, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61,
                32, 97, 44, 32, 110, 32, 61, 32, 120, 91, 104, 32, 43, 32, 108,
                93, 44, 32, 113, 32, 61, 32, 90, 98, 91, 109, 93, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61,
                61, 61, 32, 110, 32, 124, 124, 32, 49, 48, 32, 61, 61, 61, 32,
                110, 32, 63, 32, 40, 40, 49, 32, 61, 61, 61, 32, 109, 32, 63,
                32, 106, 97, 32, 58, 32, 116, 41, 40, 72, 40, 113, 41, 41, 44,
                32, 113, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 41,
                32, 58, 32, 113, 46, 112, 117, 115, 104, 40, 110, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 43, 61, 32,
                103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 91, 100, 32, 62, 62,
                32, 50, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 58, 32, 102, 99, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 100, 58, 32, 103, 99, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 101, 58, 32, 104, 99, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 112, 58, 32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 121, 58, 32, 106, 99, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 98, 58, 32, 107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 58, 32, 108, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                103, 58, 32, 109, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                110, 58, 32, 110, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                83, 58, 32, 85, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73,
                58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 40, 120, 46, 115, 117,
                98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98,
                41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 32,
                61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 51, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 99,
                46, 101, 120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32, 87, 46, 99, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 32, 61, 32, 87,
                46, 103, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 100,
                97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 45,
                45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97,
                51, 32, 61, 32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82,
                117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101,
                115, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 51, 46, 99, 97, 108,
                108, 40, 107, 44, 32, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 48, 32, 61, 61, 32, 70, 32, 38, 38, 32, 40, 110,
                117, 108, 108, 32, 33, 61, 61, 32, 118, 97, 32, 38, 38, 32, 40,
                99, 108, 101, 97, 114, 73, 110, 116, 101, 114, 118, 97, 108, 40,
                118, 97, 41, 44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108,
                41, 44, 32, 71, 32, 38, 38, 32, 40, 99, 32, 61, 32, 71, 44, 32,
                71, 32, 61, 32, 110, 117, 108, 108, 44, 32, 99, 40, 41, 41, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 43, 43, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46,
                109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112,
                101, 110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32,
                58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 70,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                98, 32, 61, 32, 123, 32, 97, 58, 32, 111, 99, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 105,
                110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115,
                109, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114,
                121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 107, 46, 105, 110, 115,
                116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98,
                44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77,
                111, 100, 117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116,
                105, 97, 116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98,
                97, 99, 107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116,
                104, 32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 99, 125, 96,
                41, 44, 32, 98, 97, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121,
                97, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 121, 97, 32,
                58, 32, 121, 97, 32, 61, 32, 120, 97, 40, 34, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119,
                97, 115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111,
                116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97,
                115, 109, 34, 32, 58, 32, 107, 46, 108, 111, 99, 97, 116, 101,
                70, 105, 108, 101, 32, 63, 32, 107, 46, 108, 111, 99, 97, 116,
                101, 70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34,
                44, 32, 112, 41, 32, 58, 32, 112, 32, 43, 32, 34, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46,
                119, 97, 115, 109, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                67, 97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                97, 40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116,
                99, 104, 40, 98, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 125, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 40, 41, 44, 32, 100, 99, 32, 61, 32, 40, 97,
                41, 32, 61, 62, 32, 40, 100, 99, 32, 61, 32, 87, 46, 101, 97,
                41, 40, 97, 41, 44, 32, 112, 98, 32, 61, 32, 40, 97, 41, 32, 61,
                62, 32, 40, 112, 98, 32, 61, 32, 87, 46, 102, 97, 41, 40, 97,
                41, 44, 32, 85, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 85,
                32, 61, 32, 87, 46, 104, 97, 41, 40, 97, 41, 44, 32, 101, 99,
                32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 101, 99,
                32, 61, 32, 87, 46, 105, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32,
                88, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88,
                32, 61, 32, 87, 46, 106, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32,
                89, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32,
                87, 46, 107, 97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41,
                32, 61, 62, 32, 40, 90, 32, 61, 32, 87, 46, 108, 97, 41, 40, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97,
                108, 108, 95, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32,
                61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95,
                105, 105, 106, 106, 32, 61, 32, 87, 46, 109, 97, 41, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97,
                108, 108, 95, 118, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32,
                61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95,
                118, 105, 106, 106, 32, 61, 32, 87, 46, 110, 97, 41, 40, 97, 44,
                32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97,
                108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 107, 46,
                100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61,
                32, 87, 46, 111, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32,
                100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110,
                67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32,
                98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110,
                67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 112,
                97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118,
                105, 105, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32,
                99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32,
                61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95,
                118, 105, 105, 106, 105, 105, 32, 61, 32, 87, 46, 113, 97, 41,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44,
                32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107,
                46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105,
                105, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32,
                100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32,
                40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105,
                105, 105, 106, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 44, 32,
                98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32,
                104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110,
                67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61,
                32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101,
                44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 32, 61,
                62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105,
                105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 115, 97, 41,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44,
                32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108,
                95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97,
                44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102,
                44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61,
                62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105,
                105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 116, 97,
                41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101,
                44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 108, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116,
                99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101,
                32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32,
                48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 107, 99, 40, 97, 44, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32,
                40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32,
                48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 104, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44,
                32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83,
                46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97,
                116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32,
                102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44,
                32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 103, 99, 40, 97, 44, 32, 98,
                44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99,
                104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32,
                43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99,
                116, 105, 111, 110, 32, 102, 99, 40, 97, 44, 32, 98, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40,
                97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33,
                61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111,
                119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 99, 40,
                97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32,
                102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46,
                103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44,
                32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103,
                32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114,
                111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 99,
                40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99,
                44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104,
                114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109,
                99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32,
                61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32,
                100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99,
                97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61,
                32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32,
                102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49,
                44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 32, 106, 99, 40, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98,
                32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40,
                99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89,
                40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32,
                116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 112, 99, 59, 10, 32,
                32, 32, 32, 32, 32, 71, 32, 61, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 113, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 112, 99, 32, 124, 124, 32, 114, 99, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 112, 99, 32, 124, 124, 32, 40,
                71, 32, 61, 32, 113, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116,
                105, 111, 110, 32, 114, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 112, 99, 32, 38, 38, 32,
                40, 112, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 107, 46,
                99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114,
                117, 101, 44, 32, 33, 109, 97, 41, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 115, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40,
                107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 82, 117, 110,
                116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122,
                101, 100, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97,
                108, 108, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 111, 115, 116,
                82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99,
                116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111,
                102, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38,
                32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32,
                91, 107, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32,
                107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110,
                103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98,
                32, 61, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115,
                104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 46, 117, 110, 115,
                104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 69, 97, 40, 116, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 40, 48, 32, 60, 32, 70, 41, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114,
                101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117,
                110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112,
                101, 111, 102, 32, 107, 46, 112, 114, 101, 82, 117, 110, 32, 38,
                38, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32,
                91, 107, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 107,
                46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116,
                104, 59, 32, 41, 32, 117, 97, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 69, 97, 40, 114, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 70, 32, 124,
                124, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115,
                32, 63, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117,
                115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34,
                41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40,
                40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116,
                40, 40, 41, 32, 61, 62, 32, 107, 46, 115, 101, 116, 83, 116, 97,
                116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32,
                58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116,
                41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40,
                34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32,
                116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 73,
                110, 105, 116, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 73,
                110, 105, 116, 32, 61, 32, 91, 107, 46, 112, 114, 101, 73, 110,
                105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 107, 46, 112, 114,
                101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59,
                32, 41, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112,
                111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117,
                108, 101, 82, 116, 110, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100,
                117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59,
                10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32,
                100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97,
                121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32,
                99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108,
                101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111,
                114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45,
                119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116,
                115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32,
                61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110,
                100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105,
                115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97,
                115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32,
                98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116,
                101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 116, 114, 121, 76,
                111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115,
                121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108,
                108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 121,
                105, 101, 108, 100, 32, 100, 111, 116, 108, 111, 116, 116, 105,
                101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97,
                117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105,
                108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114,
                105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116,
                104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101,
                32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105,
                109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108,
                105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32,
                98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32,
                110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32,
                32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32,
                101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104,
                32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32,
                108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117,
                108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116,
                117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60,
                77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114,
                111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101,
                115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101,
                32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108,
                101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32,
                115, 116, 97, 116, 105, 99, 32, 95, 108, 111, 97, 100, 87, 105,
                116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95,
                97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117,
                108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108,
                101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77,
                111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97,
                100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82,
                76, 41, 46, 99, 97, 116, 99, 104, 40, 40, 105, 110, 105, 116,
                105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 95,
                95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110,
                117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117,
                112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58,
                47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123,
                80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36,
                123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78,
                125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116,
                116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97,
                115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110,
                40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32,
                108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102,
                114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97,
                115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58,
                32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114,
                111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116,
                116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108,
                111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32,
                98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98,
                97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 121, 105, 101, 108, 100, 32,
                116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40,
                98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99,
                104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114,
                111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65,
                83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32,
                36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111,
                114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96,
                66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76,
                32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99,
                107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115,
                97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110,
                101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77,
                32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108,
                101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115,
                111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117,
                108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98,
                108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111,
                32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65,
                115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108,
                101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105,
                122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32,
                97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32,
                102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115,
                115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117,
                114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77,
                111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111,
                109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115,
                111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32,
                108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101,
                46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32,
                110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111,
                110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46,
                95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117,
                112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32,
                32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101,
                119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32,
                87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32,
                105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116,
                104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111,
                100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46,
                10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64,
                112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45,
                32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32,
                102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102,
                105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97,
                115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61,
                61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82,
                76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85,
                82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80,
                114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32,
                47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97,
                98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101,
                32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45,
                101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103,
                45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76,
                111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108,
                101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102,
                111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105,
                108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116,
                101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97,
                103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111,
                110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105,
                101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95,
                119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116,
                112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108,
                105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36,
                123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64,
                36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79,
                78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111,
                116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119,
                97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114,
                99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101,
                114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108,
                97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105,
                101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34,
                44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42,
                47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101,
                110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121,
                112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82,
                69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108,
                105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116,
                121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116,
                121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32,
                114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40,
                108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101,
                110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32,
                48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116,
                101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101,
                110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116,
                121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97,
                116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115,
                116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116,
                46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 102, 111,
                114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101,
                114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108,
                108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101,
                114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32,
                47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101,
                101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116,
                115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114,
                101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32,
                99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116,
                97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105,
                122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99,
                116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67,
                97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116,
                114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111,
                114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114,
                118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103,
                101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103,
                101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110,
                116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101,
                101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111,
                110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116,
                101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101,
                114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101,
                115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32,
                125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40,
                99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110,
                105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114,
                118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115,
                40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118,
                97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97,
                115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73,
                110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114,
                118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98,
                115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100,
                67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32,
                61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98,
                46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117,
                108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98,
                108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44,
                32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32,
                110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98,
                108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44,
                32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110,
                118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80,
                85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97,
                112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99,
                47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114,
                118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82,
                69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84,
                73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97,
                114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101,
                79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97,
                115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105,
                99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79,
                98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100,
                108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101,
                115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69,
                97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101,
                116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32,
                116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108,
                101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116,
                40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110,
                101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115,
                101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116,
                97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69,
                83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73,
                77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100,
                67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101,
                110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116,
                97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111,
                117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122,
                101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115,
                105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99,
                32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97,
                115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73,
                110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97,
                108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97,
                110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110,
                118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32,
                91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115,
                116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97,
                110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115,
                101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32,
                95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101,
                114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111,
                98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111,
                98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115,
                101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110,
                118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118,
                101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105,
                122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101,
                99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114,
                32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98,
                115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101,
                114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10,
                32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108,
                100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101,
                79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98,
                115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101,
                115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95,
                32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59,
                10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105,
                108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114,
                40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100,
                97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102,
                93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116,
                40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32,
                102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83,
                116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116,
                40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32,
                32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67,
                111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120,
                41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108,
                111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40,
                34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104,
                101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103,
                116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104,
                101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114,
                115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41,
                59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105,
                111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10,
                32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97,
                116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32,
                60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101,
                32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114,
                114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115,
                108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71,
                78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110,
                103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32,
                60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46,
                108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90,
                73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32,
                33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116,
                117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115,
                101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110,
                99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105,
                101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84,
                84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79,
                82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121,
                40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98,
                106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112,
                101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101,
                114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44,
                32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10,
                32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76,
                111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116,
                97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121,
                112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32,
                61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74,
                83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101,
                68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115,
                76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108,
                101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32,
                103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41,
                32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70,
                65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117,
                110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109,
                101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116,
                40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61,
                32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66,
                111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116,
                82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62,
                61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 108, 101,
                102, 116, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116,
                46, 98, 111, 116, 116, 111, 109, 32, 60, 61, 32, 40, 119, 105,
                110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105,
                103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101,
                110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108,
                101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72,
                101, 105, 103, 104, 116, 41, 32, 38, 38, 32, 114, 101, 99, 116,
                46, 114, 105, 103, 104, 116, 32, 60, 61, 32, 40, 119, 105, 110,
                100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116,
                104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116,
                46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109,
                101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100,
                116, 104, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32,
                115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101,
                46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40,
                109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114,
                115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77,
                111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40,
                109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110,
                99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77,
                111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114,
                115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109,
                111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101,
                118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100,
                117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97,
                114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10,
                32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111,
                114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32,
                109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32,
                34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111,
                100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97,
                105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99,
                111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101,
                46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102,
                105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70,
                105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32,
                34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105,
                116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125,
                32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32,
                61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104,
                34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116,
                46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32,
                32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117,
                108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114,
                32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105,
                103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109,
                111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108,
                105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100,
                117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97,
                116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108,
                105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40,
                97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32,
                99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115,
                104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49,
                93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32,
                125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116,
                101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32,
                61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111,
                100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103,
                109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111,
                100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108,
                111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40,
                115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116,
                104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116,
                59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109,
                101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40,
                115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32,
                32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110,
                116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101,
                103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101,
                103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32,
                118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110,
                102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108,
                105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32,
                34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117,
                98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105,
                115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117,
                108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117,
                98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105,
                115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97,
                103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105,
                99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34,
                95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103,
                34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95,
                95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101,
                110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101,
                108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99,
                107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34,
                44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116,
                101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70,
                105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112,
                111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116,
                104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95,
                112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116,
                104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101,
                114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 34, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99,
                70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95,
                112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77,
                101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40,
                116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116,
                101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 34,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                44, 32, 95, 98, 44, 32, 95, 99, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61,
                32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115,
                59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111,
                110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32,
                61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111,
                110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32,
                61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112,
                115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117,
                101, 115, 40, 123, 125, 44, 32, 99, 111, 110, 102, 105, 103, 46,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41,
                44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58,
                32, 40, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 118, 105, 99,
                101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 41, 32, 124,
                124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80,
                82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32,
                102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99,
                114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32,
                98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32,
                112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99,
                101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114,
                105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32,
                99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115,
                99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114,
                101, 101, 110, 58, 32, 40, 95, 99, 32, 61, 32, 40, 95, 98, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 98, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102,
                102, 115, 99, 114, 101, 101, 110, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 116, 114, 117, 101,
                10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109,
                76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46,
                116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 50, 44, 32, 95, 99, 50,
                44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95,
                103, 44, 32, 95, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111,
                100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111,
                100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105,
                101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58,
                32, 40, 95, 97, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112,
                108, 97, 121, 58, 32, 40, 95, 98, 50, 32, 61, 32, 99, 111, 110,
                102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32,
                33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 50, 32, 58,
                32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67,
                111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 58, 32, 40, 95, 99, 50, 32, 61, 32, 99, 111, 110,
                102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 95, 99, 50, 32, 58, 32, 102, 97, 108,
                115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114,
                101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111,
                110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102,
                111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117,
                108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116,
                40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 109,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101,
                100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95,
                102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101,
                114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103,
                32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70,
                114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97,
                116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58,
                32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46,
                109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58,
                32, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117,
                116, 32, 63, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97,
                116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 99,
                111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 46,
                97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102,
                105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101,
                70, 105, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121,
                111, 117, 116, 46, 102, 105, 116, 44, 32, 109, 111, 100, 117,
                108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                32, 58, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97,
                116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111,
                117, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99,
                111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40,
                99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83,
                114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103,
                46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108,
                111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111,
                110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46,
                99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58,
                32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114,
                58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70,
                97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32,
                119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36,
                123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104,
                111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68,
                111, 119, 110, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101,
                114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104,
                105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77,
                111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77,
                101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101,
                114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111,
                105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104,
                111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98,
                105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116,
                99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97,
                103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101,
                115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69,
                114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115,
                115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97,
                40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40,
                116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102,
                117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114,
                101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 121, 105, 101,
                108, 100, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114,
                101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70,
                97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99,
                104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97,
                116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36,
                123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112,
                111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58,
                32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115,
                116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61,
                32, 121, 105, 101, 108, 100, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40,
                100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101,
                119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40,
                41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111,
                109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101,
                105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101,
                116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108,
                115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61,
                32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76,
                111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111,
                114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105,
                101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58,
                32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100,
                32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116,
                111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74,
                83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32,
                119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101,
                32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117,
                102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114,
                40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73,
                110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102,
                101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105,
                100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102,
                101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99,
                111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101,
                32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111,
                114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101,
                100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97,
                100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97,
                40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32,
                104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121,
                112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32,
                34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111,
                116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111,
                114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105,
                101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32,
                84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32,
                111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111,
                32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83,
                79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116,
                114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44,
                32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114,
                111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96,
                85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100,
                97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46,
                32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110,
                103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65,
                114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116,
                32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46,
                32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99,
                101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101,
                111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100,
                101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34,
                32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97,
                103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112,
                101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116,
                70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117,
                114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105,
                103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103,
                40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77,
                97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97,
                121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109,
                97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97,
                110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98,
                105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40,
                34, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 119, 101,
                110, 116, 32, 119, 114, 111, 110, 103, 44, 32, 116, 104, 101,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 119, 97, 115,
                32, 115, 117, 112, 112, 111, 115, 101, 32, 116, 111, 32, 97,
                117, 116, 111, 112, 108, 97, 121, 34, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67,
                97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101,
                79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102,
                102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118,
                101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104,
                105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104,
                105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101,
                115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115,
                105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111,
                98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69,
                114, 114, 111, 114, 40, 34, 70, 97, 105, 108, 101, 100, 32, 116,
                111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 32, 100, 97, 116, 97, 34, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95,
                108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114,
                99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114,
                99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41,
                32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100,
                70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41,
                41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114,
                41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115,
                112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97,
                105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32,
                102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114,
                99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41,
                41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101,
                116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116,
                105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84,
                104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101,
                73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97,
                121, 111, 117, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97,
                121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108,
                97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103,
                101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46,
                97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58,
                32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32,
                95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44,
                32, 95, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117,
                116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40,
                95, 97, 50, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108,
                101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 70, 105, 116,
                46, 67, 111, 110, 116, 97, 105, 110, 41, 58, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                97, 115, 101, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 70,
                105, 116, 46, 67, 111, 118, 101, 114, 41, 58, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97,
                115, 101, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 70,
                105, 116, 46, 70, 105, 108, 108, 41, 58, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101,
                32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 70, 105,
                116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 41, 58, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104,
                101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95,
                101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101,
                46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32,
                61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100,
                32, 48, 32, 58, 32, 95, 101, 46, 70, 105, 116, 46, 70, 105, 116,
                87, 105, 100, 116, 104, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                97, 115, 101, 32, 40, 40, 95, 102, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 102, 46, 70,
                105, 116, 46, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97,
                117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34,
                99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100,
                32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103,
                101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114,
                107, 101, 114, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101,
                114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105,
                102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32,
                61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 110, 105, 102,
                101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124,
                124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114,
                101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97,
                110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74,
                83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105,
                102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121,
                115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111,
                110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32,
                48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108,
                108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117,
                114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115,
                111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116,
                99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117,
                108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110,
                100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116,
                104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111,
                110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101,
                103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32,
                115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40,
                41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103,
                109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115,
                101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116,
                32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98,
                32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102,
                105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97,
                116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109,
                111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                109, 111, 100, 101, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46,
                99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100,
                101, 32, 61, 61, 61, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68,
                111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115,
                109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 98, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115,
                101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115,
                101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115,
                101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61,
                32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 77, 111,
                100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109,
                111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 100, 32, 61, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 100, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114,
                115, 101, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110,
                99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108,
                115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100,
                34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114,
                111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95,
                105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107,
                103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 98, 97,
                99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32,
                58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117,
                116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32,
                117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114,
                112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97,
                109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105,
                111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101,
                101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46,
                115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97,
                100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61,
                61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101,
                100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121,
                105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 108, 97, 121, 105,
                110, 103, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105,
                115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105,
                115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97,
                108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32,
                95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40,
                41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101,
                110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97,
                116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97,
                109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49,
                48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103,
                101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109,
                101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 116, 111, 116, 97, 108, 70, 114, 97,
                109, 101, 115, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116,
                105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 100, 117, 114, 97, 116, 105, 111,
                110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115,
                101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111,
                110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114,
                110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97,
                100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44,
                32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102,
                44, 32, 95, 103, 44, 32, 95, 104, 44, 32, 95, 105, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110,
                117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46,
                99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111,
                110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97,
                110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101,
                73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110,
                102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32,
                58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117,
                116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97,
                121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67,
                111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 58, 32, 40, 95, 99, 32, 61, 32, 99, 111, 110, 102,
                105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 102, 97, 108, 115,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101,
                58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111,
                100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105,
                103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119,
                97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108,
                101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103,
                109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111,
                114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109,
                101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99,
                111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32,
                33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32,
                49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70,
                114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97,
                116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111,
                110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101,
                73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32,
                58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61,
                32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101,
                114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95,
                104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                108, 97, 121, 111, 117, 116, 58, 32, 99, 111, 110, 102, 105,
                103, 46, 108, 97, 121, 111, 117, 116, 32, 63, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58,
                32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105,
                103, 110, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121,
                111, 117, 116, 46, 97, 108, 105, 103, 110, 44, 32, 95, 68, 111,
                116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 70, 105, 116, 40, 99, 111, 110, 102, 105,
                103, 46, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 44, 32,
                95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97,
                115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 32, 58, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117,
                108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97,
                40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99,
                40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 40, 95, 105, 32,
                61, 32, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 95, 105, 32, 58, 32, 34, 34,
                41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 114,
                101, 110, 100, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61,
                32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100,
                101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117,
                102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46,
                98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112,
                101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101,
                119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100,
                65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32,
                48, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103,
                104, 116, 32, 42, 32, 52, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116,
                97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32,
                73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34,
                117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103,
                101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116,
                101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116,
                97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97,
                109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97,
                103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73,
                109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112,
                101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116,
                46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40,
                105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114,
                46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34,
                114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114,
                97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114,
                101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108,
                32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116,
                101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124,
                124, 32, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108,
                97, 121, 105, 110, 103, 40, 41, 41, 32, 114, 101, 116, 117, 114,
                110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                110, 101, 120, 116, 70, 114, 97, 109, 101, 32, 61, 32, 77, 97,
                116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97,
                109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49,
                48, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 117, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40,
                110, 101, 120, 116, 70, 114, 97, 109, 101, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 117, 112, 100, 97, 116, 101,
                100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58,
                32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114,
                97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114,
                101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 46, 105, 115, 67, 111, 109, 112, 108,
                101, 116, 101, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111,
                111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111,
                111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110,
                116, 58, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 111, 112,
                67, 111, 117, 110, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109,
                112, 108, 101, 116, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103,
                101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116,
                104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103,
                40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110,
                32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108,
                97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105,
                111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103,
                101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116,
                104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100,
                40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95,
                66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118,
                97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111,
                110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110,
                79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33,
                105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105,
                101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95,
                99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122,
                101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124,
                124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 97,
                117, 115, 101, 100, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97,
                117, 115, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111,
                112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117,
                108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101,
                114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116,
                121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32,
                99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32,
                116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70,
                114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103,
                101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32,
                116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 32, 125,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101,
                40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61,
                32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97,
                109, 101, 32, 60, 32, 48, 32, 124, 124, 32, 102, 114, 97, 109,
                101, 32, 62, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 111, 116,
                97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99,
                117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32,
                116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70,
                114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101,
                114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101,
                101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103,
                40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115,
                40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101,
                115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99,
                111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32,
                32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108,
                41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108,
                101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111,
                108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101,
                108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105,
                101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102,
                105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111,
                112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108,
                117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103,
                114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104,
                101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65,
                73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98,
                97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111,
                114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40,
                108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32,
                110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46,
                115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115,
                112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115,
                112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123,
                125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102,
                105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105,
                111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32,
                32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32,
                61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117,
                114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115,
                40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111,
                110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76,
                105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101,
                114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114,
                101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108,
                105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118,
                101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101,
                114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101,
                110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87,
                83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97,
                110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69,
                108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79,
                98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115,
                101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67,
                97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115,
                101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114,
                118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 108, 101,
                116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116,
                101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110,
                116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97,
                116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121,
                34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77,
                97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101,
                65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101,
                110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108,
                108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101,
                77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108,
                65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109,
                101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116,
                105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105,
                109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32,
                61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110,
                32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97,
                110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99,
                104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101,
                101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70,
                114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108,
                108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110,
                97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65,
                110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101,
                40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105,
                110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111,
                122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101,
                110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115,
                112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32,
                34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105,
                122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33,
                116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100,
                41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69,
                82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111,
                102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108,
                101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114,
                67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101,
                80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32,
                119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101,
                80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32,
                49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108,
                105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119,
                105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87,
                105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117,
                110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101,
                99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105,
                100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105,
                100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110,
                118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 99,
                108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 42,
                32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 105, 122,
                101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115,
                116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100,
                70, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32,
                110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111,
                116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100,
                117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32,
                114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110,
                102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114,
                111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97,
                108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109,
                101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114,
                101, 83, 101, 103, 109, 101, 110, 116, 40, 91, 115, 116, 97,
                114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114,
                97, 109, 101, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108,
                101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111,
                100, 101, 40, 109, 111, 100, 101, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32,
                61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68,
                111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115,
                109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117,
                108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76,
                111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116,
                67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97,
                100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97,
                100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41,
                44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100,
                101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77,
                111, 100, 101, 40, 109, 111, 100, 101, 44, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41,
                59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116,
                82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40,
                99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 95, 97, 32, 61, 32, 99, 111,
                110, 102, 105, 103, 44, 32, 123, 32, 100, 101, 118, 105, 99,
                101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 44, 32, 102,
                114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114,
                101, 101, 110, 32, 125, 32, 61, 32, 95, 97, 44, 32, 114, 101,
                115, 116, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 111,
                98, 106, 82, 101, 115, 116, 40, 95, 97, 44, 32, 91, 34, 100,
                101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116,
                105, 111, 34, 44, 32, 34, 102, 114, 101, 101, 122, 101, 79, 110,
                79, 102, 102, 115, 99, 114, 101, 101, 110, 34, 93, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101,
                110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95,
                95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95,
                95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40,
                95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115,
                40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110,
                100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 44, 32, 114,
                101, 115, 116, 67, 111, 110, 102, 105, 103, 41, 44, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105,
                99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105,
                115, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97,
                115, 101, 44, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100,
                32, 98, 101, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101,
                32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117,
                101, 32, 105, 102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32,
                112, 114, 111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108,
                82, 97, 116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80,
                105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32,
                103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101,
                122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110,
                58, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102,
                115, 99, 114, 101, 101, 110, 32, 33, 61, 32, 110, 117, 108, 108,
                32, 63, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102,
                115, 99, 114, 101, 101, 110, 32, 58, 32, 116, 114, 117, 101, 10,
                32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32,
                38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72,
                84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101,
                110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111,
                82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115,
                105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111,
                98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110,
                118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101,
                114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118,
                101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103,
                46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115,
                99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79,
                98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114,
                118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97,
                115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101,
                101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110,
                111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46,
                95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105,
                109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32,
                114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65,
                110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109,
                97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46,
                95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44,
                32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46,
                104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95,
                101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46,
                100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121,
                112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114,
                101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116,
                77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116,
                99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111,
                32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 58, 36, 123,
                97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 125, 96, 41,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114,
                107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110,
                117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32,
                32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101,
                116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114,
                101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114,
                101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103,
                40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125,
                41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109,
                97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114,
                115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46,
                95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114,
                101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118,
                111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 114,
                107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114,
                101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32,
                105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107,
                101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32,
                43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114,
                32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116,
                40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97,
                109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109,
                101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46,
                116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109,
                97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111,
                110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115,
                117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84,
                104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108,
                111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101,
                109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104,
                105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108,
                111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116,
                84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97,
                116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108,
                111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40,
                116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100,
                101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111,
                116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40,
                115, 108, 111, 116, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40,
                108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61,
                61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41,
                32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111,
                110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80,
                114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86,
                97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111,
                117, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 108, 97, 121,
                111, 117, 116, 46, 97, 108, 105, 103, 110, 44, 32, 95, 68, 111,
                116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77,
                111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101,
                67, 111, 114, 101, 70, 105, 116, 40, 108, 97, 121, 111, 117,
                116, 46, 102, 105, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111,
                114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104,
                44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105,
                115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67,
                111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111,
                114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104,
                44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32,
                115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114,
                108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76,
                111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100,
                101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40,
                117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105,
                110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 41, 32, 33, 61, 32,
                110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97,
                108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118,
                97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101,
                100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32,
                116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116,
                105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97,
                46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114,
                116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116,
                101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                116, 111, 112, 112, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 111, 112, 83,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41,
                32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115,
                40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112,
                112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111,
                115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 99, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110,
                100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99,
                116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116,
                104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                99, 97, 108, 101, 89, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100,
                101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116,
                105, 111, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110,
                100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118,
                105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32,
                124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46,
                99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116,
                46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101,
                88, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101,
                108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110,
                116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101,
                99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108,
                101, 89, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120,
                101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 120, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101,
                114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120,
                44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115,
                105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118,
                101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116,
                101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105,
                115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114,
                80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110,
                116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46,
                112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111,
                119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80,
                111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118,
                101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105,
                110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40,
                101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40,
                120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110,
                116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120,
                44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115,
                105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101,
                114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111,
                105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118,
                101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61,
                32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105,
                110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40,
                101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40,
                120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114,
                85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59,
                10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32,
                40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111,
                116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61,
                61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32,
                48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105,
                110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68,
                111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116,
                101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32,
                118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101,
                69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118,
                101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101,
                114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120,
                44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69,
                120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100,
                111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41,
                32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105,
                100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77,
                97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101,
                114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114,
                115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115,
                46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111,
                114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116,
                117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32,
                61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114,
                32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32,
                60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101,
                99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105,
                32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117,
                115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86,
                101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115,
                40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40,
                73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116,
                104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67,
                97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38,
                38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117,
                108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76,
                111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101,
                110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 103,
                101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101,
                76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115,
                116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100,
                101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34,
                41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97,
                100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112,
                34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114,
                115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111,
                105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115,
                46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118,
                101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34,
                112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44,
                32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101,
                114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101,
                114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80,
                111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105,
                115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34,
                44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110,
                101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40,
                34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114,
                34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97,
                100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110,
                101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110,
                116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111,
                105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116,
                104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105,
                115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117,
                100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69,
                120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101,
                114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46,
                95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77,
                101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112,
                83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105,
                115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87,
                83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97,
                110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69,
                108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110,
                116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111,
                105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77,
                101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46,
                114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105,
                115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116,
                101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115,
                46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110,
                77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115,
                46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76,
                105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110,
                116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105,
                115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118,
                97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110,
                116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111,
                105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32,
                116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114,
                69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99,
                97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69,
                118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40,
                34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101,
                34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116,
                101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116,
                101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 41,
                32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58,
                32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105,
                122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                119, 105, 100, 116, 104, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 97, 110, 105, 109, 97, 116, 105, 111,
                110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 40, 95, 100,
                32, 61, 32, 40, 95, 99, 32, 61, 32, 116, 104, 105, 115, 46, 95,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101,
                41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111,
                105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101,
                116, 40, 49, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63,
                32, 95, 100, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32,
                115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101,
                120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95,
                97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32,
                61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116,
                116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117,
                108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32,
                95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111,
                110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97,
                108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32,
                32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97,
                116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101,
                114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97,
                109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104,
                105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101,
                67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115,
                101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101,
                78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120,
                116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41,
                41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32,
                58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111,
                110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97,
                108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97,
                114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40,
                95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116,
                76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61,
                32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48,
                32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67,
                111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32,
                118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108,
                108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59,
                10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32,
                32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 98,
                111, 117, 110, 100, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121,
                101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101,
                10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32,
                108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104,
                101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32,
                108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114,
                101, 116, 117, 114, 110, 115, 32, 84, 104, 101, 32, 98, 111,
                117, 110, 100, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108,
                97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32,
                32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32,
                32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99,
                114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32,
                68, 114, 97, 119, 32, 97, 32, 114, 101, 99, 116, 97, 110, 103,
                108, 101, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101,
                32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32,
                49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116,
                76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110,
                100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98,
                111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 32, 61, 32,
                100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116,
                76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103,
                66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59,
                10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32,
                32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 105, 110, 103, 66,
                111, 120, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121,
                44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103,
                104, 116, 32, 125, 32, 61, 32, 98, 111, 117, 110, 100, 105, 110,
                103, 66, 111, 120, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32,
                32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114,
                111, 107, 101, 82, 101, 99, 116, 40, 120, 44, 32, 121, 44, 32,
                119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116,
                41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32,
                96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32,
                103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100,
                105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97,
                109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114,
                32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 40, 95, 97,
                32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111,
                116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110,
                117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58,
                32, 95, 97, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111,
                117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109,
                101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114,
                110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105,
                122, 101, 40, 41, 32, 33, 61, 61, 32, 52, 41, 32, 114, 101, 116,
                117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 98,
                111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 48, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61,
                32, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 49, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119,
                105, 100, 116, 104, 32, 61, 32, 98, 111, 117, 110, 100, 115, 46,
                103, 101, 116, 40, 50, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61,
                32, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 51, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 121, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115,
                116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111,
                114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116,
                105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101,
                44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10,
                32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40,
                95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 95, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111,
                100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32,
                63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116,
                114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101,
                84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115,
                40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115,
                41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98,
                32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70,
                105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116,
                105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117,
                108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32,
                118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32,
                61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10,
                10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107,
                101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46,
                119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97,
                114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112,
                32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32,
                42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32,
                32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100,
                108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32,
                114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110,
                116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101,
                32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100,
                58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100,
                121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115,
                117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116,
                101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100,
                41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108,
                116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97,
                100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111,
                97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101,
                110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104,
                111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110,
                116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118,
                101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115,
                101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97,
                103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111,
                112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100,
                41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101,
                118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101,
                116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108,
                116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32,
                108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115,
                116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112,
                111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32,
                32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101,
                110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112,
                111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110,
                80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101,
                110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101,
                58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101,
                118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101,
                116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117,
                108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58,
                32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125,
                59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112,
                111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101,
                115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111,
                112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110,
                116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100,
                58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114,
                97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116,
                32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114,
                97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114,
                101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118,
                101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101,
                110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100,
                101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116,
                32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110,
                115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101,
                110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69,
                118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10,
                32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114,
                101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101,
                110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112,
                111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110,
                70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
                101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101,
                69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125,
                10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32,
                115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115,
                97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110,
                102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118,
                101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101,
                122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101,
                110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34,
                34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104,
                111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101,
                122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101,
                115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110,
                116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118,
                101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115,
                101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97,
                103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115,
                116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118,
                101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115,
                112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34,
                111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115,
                116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115,
                116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112,
                111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32,
                125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97,
                110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 103, 101,
                116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115,
                116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113,
                117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116,
                40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100,
                101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105,
                115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108,
                97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112,
                101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105,
                115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114,
                111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108,
                111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109,
                111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109,
                101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117,
                114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97,
                109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111,
                110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117,
                114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101,
                114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109,
                101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111,
                110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100,
                101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67,
                111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110,
                100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40,
                41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105,
                118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100,
                58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116,
                105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73,
                100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105,
                118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84,
                104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101,
                110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115,
                101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116,
                68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100,
                121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105,
                102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32,
                32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97,
                121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121,
                111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111,
                117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58,
                32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 83,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115,
                116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101,
                116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105,
                110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111,
                115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110,
                69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115,
                116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69,
                118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118,
                101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111,
                105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101,
                110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110,
                116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40,
                114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114,
                69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121,
                41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112,
                111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118,
                101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115,
                116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69,
                118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80,
                111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116,
                40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101,
                114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41,
                59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116,
                97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 114, 116, 83, 116,
                97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112,
                83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114,
                101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101,
                77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115,
                116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99,
                104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104,
                105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77,
                97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 114, 101, 113,
                117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68,
                97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97,
                99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115,
                77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97,
                116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40,
                115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97,
                116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117,
                101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111,
                110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32,
                32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32,
                32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32,
                69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99,
                101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114,
                101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116,
                116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110,
                118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32,
                61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111,
                109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114,
                111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108,
                111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34,
                112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122,
                101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110,
                102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 10,
                32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101,
                118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40,
                40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115,
                116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32,
                101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77,
                97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101,
                113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101,
                116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111,
                121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116,
                101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101,
                101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116,
                97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122,
                101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115,
                116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99,
                111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112,
                97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101,
                73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110,
                102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110,
                115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103,
                101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110,
                115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101,
                32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101,
                115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40,
                99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109,
                97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116,
                97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32,
                32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110,
                105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97,
                116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125,
                44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101,
                58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101,
                109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104,
                101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10,
                32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97,
                116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116,
                104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116,
                104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101,
                109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97,
                116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114,
                101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114,
                101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59,
                10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115,
                105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101,
                115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100,
                116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101,
                113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46,
                104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32,
                61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110,
                118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105,
                100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41,
                59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99,
                101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32,
                32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110,
                100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117,
                101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111,
                108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117,
                110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114,
                111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32,
                32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97,
                109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102,
                114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109,
                101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101,
                58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100,
                101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111,
                100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32,
                32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110,
                102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116,
                41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32,
                61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102,
                105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101,
                116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59,
                10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115,
                116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114,
                114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32,
                119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32,
                110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10,
                32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101,
                110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101,
                110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101,
                103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101,
                115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32,
                99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32,
                32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115,
                77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110,
                99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102,
                32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123,
                10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101,
                103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109,
                101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58,
                32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101,
                101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114,
                40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116,
                104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116,
                32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40,
                115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44,
                10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97,
                109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105,
                111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61,
                32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97,
                109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77,
                97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32,
                40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10,
                32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32,
                110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115,
                116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32,
                36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32,
                100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115,
                116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32,
                32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46,
                115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110,
                116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117,
                115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112,
                111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109,
                85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116,
                76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115,
                109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58,
                32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115,
                116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32,
                32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114,
                111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96,
                73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32,
                125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122,
                101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32,
                114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109,
                115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10,
                32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110,
                115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99,
                101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104,
                114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114,
                40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116,
                104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116,
                32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32,
                32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40,
                41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115,
                101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101,
                113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99,
                101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115,
                116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46,
                112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32,
                32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113,
                117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59,
                10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119,
                105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115,
                116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116,
                104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117,
                101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101,
                105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61,
                32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46,
                103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33,
                105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32,
                32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101,
                119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97,
                110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100,
                111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116,
                46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32,
                32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115,
                116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119,
                112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100,
                116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32,
                32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97,
                114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41,
                32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114,
                107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116,
                46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114,
                59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105,
                110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116,
                97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105,
                110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97,
                110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32,
                116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114,
                111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119,
                105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116,
                97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110,
                111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32,
                32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110,
                115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107,
                101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32,
                32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58,
                32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10,
                32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76,
                111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114,
                101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115,
                46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111,
                112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97,
                114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32,
                32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97,
                110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101,
                115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97,
                110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105,
                102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32,
                123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111,
                119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73,
                110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32,
                105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73,
                100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101,
                120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32,
                125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110,
                99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111,
                111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116,
                117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115,
                117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32,
                32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32,
                32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110,
                32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97,
                110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116,
                41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32,
                109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101,
                113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59,
                10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111,
                102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101,
                116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110,
                99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32,
                32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97,
                110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114,
                112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32,
                32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32,
                32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69,
                114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36,
                123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110,
                111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101,
                100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46,
                96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32,
                32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97,
                103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61,
                62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32,
                32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115,
                117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67,
                111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46,
                100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111,
                110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32,
                61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58,
                32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100,
                44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111,
                100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46,
                109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32,
                32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32,
                32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46,
                112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114,
                101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32,
                125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114,
                41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116,
                32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115,
                101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105,
                100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46,
                105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116,
                104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97,
                116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32,
                32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114,
                114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32,
                32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101,
                108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103,
                101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110,
                115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59,
                10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61,
                32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116,
                108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114,
                95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109,
                109, 121, 59, 10, 125, 41, 40, 41, 59, 10,
              ]),
            ],
            { type: "application/javascript" },
          ),
          e = URL.createObjectURL(t),
          n = new Worker(e);
        return URL.revokeObjectURL(e), n;
      }
    };
  function j(t, e) {
    if (t instanceof OffscreenCanvas)
      return { width: t.width, height: t.height };
    let { height: n, width: i } = t.getBoundingClientRect();
    return { width: i * e, height: n * e };
  }
  function U() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
  var B = class t {
    constructor(e) {
      var n, i, r;
      c(this, "_eventManager", new b()),
        c(this, "_id"),
        c(this, "_worker"),
        c(this, "_canvas"),
        c(this, "_dotLottieInstanceState", {
          markers: [],
          autoplay: !1,
          backgroundColor: "",
          currentFrame: 0,
          duration: 0,
          loop: !1,
          mode: "forward",
          segment: [0, 0],
          segmentDuration: 0,
          speed: 1,
          totalFrames: 0,
          isLoaded: !1,
          isPlaying: !1,
          isPaused: !1,
          isStopped: !0,
          isFrozen: !1,
          useFrameInterpolation: !1,
          renderConfig: { devicePixelRatio: D() },
          activeAnimationId: "",
          activeThemeId: "",
          layout: void 0,
          marker: void 0,
          isReady: !1,
          manifest: null,
        }),
        c(this, "_created", !1),
        c(this, "_pointerUpMethod"),
        c(this, "_pointerDownMethod"),
        c(this, "_pointerMoveMethod"),
        c(this, "_pointerEnterMethod"),
        c(this, "_pointerExitMethod"),
        (this._canvas = e.canvas),
        (this._id = `dotlottie-${U()}`);
      let a = e.workerId || "defaultWorker";
      (this._worker = t._workerManager.getWorker(a)),
        t._workerManager.assignAnimationToWorker(this._id, a),
        t._wasmUrl && this._sendMessage("setWasmUrl", { url: t._wasmUrl }),
        this._create(
          d(l({}, e), {
            renderConfig: d(l({}, e.renderConfig), {
              devicePixelRatio:
                (null == (n = e.renderConfig) ? void 0 : n.devicePixelRatio) ||
                D(),
              freezeOnOffscreen:
                null ==
                  (r =
                    null == (i = e.renderConfig)
                      ? void 0
                      : i.freezeOnOffscreen) || r,
            }),
          }),
        ),
        this._worker.addEventListener(
          "message",
          this._handleWorkerEvent.bind(this),
        ),
        (this._pointerUpMethod = this._onPointerUp.bind(this)),
        (this._pointerDownMethod = this._onPointerDown.bind(this)),
        (this._pointerMoveMethod = this._onPointerMove.bind(this)),
        (this._pointerEnterMethod = this._onPointerEnter.bind(this)),
        (this._pointerExitMethod = this._onPointerLeave.bind(this));
    }
    _handleWorkerEvent(t) {
      return v(this, null, function* () {
        let e = t.data;
        e.id ||
          ("onLoad" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event),
            m &&
              this._canvas instanceof HTMLCanvasElement &&
              (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen &&
                I.observe(this._canvas, this),
              this._dotLottieInstanceState.renderConfig.autoResize &&
                E.observe(this._canvas, this))),
          "onComplete" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onDestroy" === e.method &&
            e.result.instanceId === this._id &&
            this._eventManager.dispatch(e.result.event),
          "onUnfreeze" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            (this._dotLottieInstanceState.isFrozen = !1),
            this._eventManager.dispatch(e.result.event)),
          "onFrame" === e.method &&
            e.result.instanceId === this._id &&
            ((this._dotLottieInstanceState.currentFrame =
              e.result.event.currentFrame),
            this._eventManager.dispatch(e.result.event)),
          "onRender" === e.method &&
            e.result.instanceId === this._id &&
            this._eventManager.dispatch(e.result.event),
          "onFreeze" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onPause" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onPlay" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onStop" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onLoadError" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)),
          "onReady" === e.method &&
            e.result.instanceId === this._id &&
            (yield this._updateDotLottieInstanceState(),
            this._eventManager.dispatch(e.result.event)));
      });
    }
    _create(t) {
      return v(this, null, function* () {
        var e;
        let n;
        n =
          this._canvas instanceof HTMLCanvasElement
            ? this._canvas.transferControlToOffscreen()
            : this._canvas;
        let { instanceId: i } = yield this._sendMessage(
          "create",
          l(
            { instanceId: this._id, config: d(l({}, t), { canvas: n }) },
            j(
              this._canvas,
              (null == (e = t.renderConfig) ? void 0 : e.devicePixelRatio) ||
                D(),
            ),
          ),
          [n],
        );
        if (i !== this._id) throw new Error("Instance ID mismatch");
        (this._created = !0), yield this._updateDotLottieInstanceState();
      });
    }
    get isLoaded() {
      return this._dotLottieInstanceState.isLoaded;
    }
    get isPlaying() {
      return this._dotLottieInstanceState.isPlaying;
    }
    get isPaused() {
      return this._dotLottieInstanceState.isPaused;
    }
    get isStopped() {
      return this._dotLottieInstanceState.isStopped;
    }
    get currentFrame() {
      return this._dotLottieInstanceState.currentFrame;
    }
    get isFrozen() {
      return this._dotLottieInstanceState.isFrozen;
    }
    get segmentDuration() {
      return this._dotLottieInstanceState.segmentDuration;
    }
    get totalFrames() {
      return this._dotLottieInstanceState.totalFrames;
    }
    get segment() {
      return this._dotLottieInstanceState.segment;
    }
    get speed() {
      return this._dotLottieInstanceState.speed;
    }
    get duration() {
      return this._dotLottieInstanceState.duration;
    }
    get isReady() {
      return this._dotLottieInstanceState.isReady;
    }
    get mode() {
      return this._dotLottieInstanceState.mode;
    }
    get canvas() {
      return this._canvas;
    }
    get autoplay() {
      return this._dotLottieInstanceState.autoplay;
    }
    get backgroundColor() {
      return this._dotLottieInstanceState.backgroundColor;
    }
    get loop() {
      return this._dotLottieInstanceState.loop;
    }
    get useFrameInterpolation() {
      return this._dotLottieInstanceState.useFrameInterpolation;
    }
    get renderConfig() {
      return this._dotLottieInstanceState.renderConfig;
    }
    get manifest() {
      return this._dotLottieInstanceState.manifest;
    }
    get activeAnimationId() {
      return this._dotLottieInstanceState.activeAnimationId;
    }
    get marker() {
      return this._dotLottieInstanceState.marker;
    }
    get activeThemeId() {
      return this._dotLottieInstanceState.activeThemeId;
    }
    get layout() {
      return this._dotLottieInstanceState.layout;
    }
    play() {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("play", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState(),
          m &&
            this._canvas instanceof HTMLCanvasElement &&
            this._dotLottieInstanceState.renderConfig.freezeOnOffscreen &&
            !x(this._canvas) &&
            (yield this.freeze()));
      });
    }
    pause() {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("pause", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    stop() {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("stop", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setSpeed(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setSpeed", {
            instanceId: this._id,
            speed: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setMode(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setMode", {
            instanceId: this._id,
            mode: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setFrame(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setFrame", {
            frame: t,
            instanceId: this._id,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setSegment(t, e) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setSegment", {
            instanceId: this._id,
            segment: [t, e],
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setRenderConfig(t) {
      return v(this, null, function* () {
        if (!this._created) return;
        let e = t,
          { devicePixelRatio: n, freezeOnOffscreen: i } = e,
          r = u(e, ["devicePixelRatio", "freezeOnOffscreen"]);
        yield this._sendMessage("setRenderConfig", {
          instanceId: this._id,
          renderConfig: d(
            l(l({}, this._dotLottieInstanceState.renderConfig), r),
            { devicePixelRatio: n || D(), freezeOnOffscreen: null == i || i },
          ),
        }),
          yield this._updateDotLottieInstanceState(),
          m &&
            this._canvas instanceof HTMLCanvasElement &&
            (this._dotLottieInstanceState.renderConfig.autoResize
              ? E.observe(this._canvas, this)
              : E.unobserve(this._canvas),
            this._dotLottieInstanceState.renderConfig.freezeOnOffscreen
              ? I.observe(this._canvas, this)
              : (I.unobserve(this._canvas),
                this._dotLottieInstanceState.isFrozen &&
                  (yield this.unfreeze())));
      });
    }
    setUseFrameInterpolation(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setUseFrameInterpolation", {
            instanceId: this._id,
            useFrameInterpolation: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setTheme(t) {
      return v(this, null, function* () {
        if (!this._created) return !1;
        let e = this._sendMessage("setTheme", {
          instanceId: this._id,
          themeId: t,
        });
        return yield this._updateDotLottieInstanceState(), e;
      });
    }
    load(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("load", { config: t, instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setLoop(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setLoop", {
            instanceId: this._id,
            loop: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    resize() {
      return v(this, null, function* () {
        if (!this._created) return;
        let { height: t, width: e } = j(
          this._canvas,
          this._dotLottieInstanceState.renderConfig.devicePixelRatio || D(),
        );
        yield this._sendMessage("resize", {
          height: t,
          instanceId: this._id,
          width: e,
        }),
          yield this._updateDotLottieInstanceState();
      });
    }
    destroy() {
      return v(this, null, function* () {
        this._created &&
          ((this._created = !1),
          yield this._sendMessage("destroy", { instanceId: this._id }),
          this._cleanupStateMachineListeners(),
          t._workerManager.unassignAnimationFromWorker(this._id),
          this._eventManager.removeAllEventListeners(),
          m &&
            this._canvas instanceof HTMLCanvasElement &&
            (I.unobserve(this._canvas), E.unobserve(this._canvas)));
      });
    }
    freeze() {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("freeze", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    unfreeze() {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("unfreeze", { instanceId: this._id }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setBackgroundColor(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setBackgroundColor", {
            instanceId: this._id,
            backgroundColor: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    loadAnimation(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("loadAnimation", {
            animationId: t,
            instanceId: this._id,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setLayout(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setLayout", {
            instanceId: this._id,
            layout: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    _updateDotLottieInstanceState() {
      return v(this, null, function* () {
        if (!this._created) return;
        let t = yield this._sendMessage("getDotLottieInstanceState", {
          instanceId: this._id,
        });
        this._dotLottieInstanceState = t.state;
      });
    }
    markers() {
      return this._dotLottieInstanceState.markers;
    }
    setMarker(t) {
      return v(this, null, function* () {
        this._created &&
          (yield this._sendMessage("setMarker", {
            instanceId: this._id,
            marker: t,
          }),
          yield this._updateDotLottieInstanceState());
      });
    }
    setThemeData(t) {
      return v(this, null, function* () {
        if (!this._created) return !1;
        let e = yield this._sendMessage("setThemeData", {
          instanceId: this._id,
          themeData: t,
        });
        return yield this._updateDotLottieInstanceState(), e;
      });
    }
    setViewport(t, e, n, i) {
      return v(this, null, function* () {
        return (
          !!this._created &&
          this._sendMessage("setViewport", {
            x: t,
            y: e,
            width: n,
            height: i,
            instanceId: this._id,
          })
        );
      });
    }
    _sendMessage(t, e, n) {
      return v(this, null, function* () {
        let i = { id: `dotlottie-request-${U()}`, method: t, params: e };
        return (
          this._worker.postMessage(i, n || []),
          new Promise((e, n) => {
            let r = (a) => {
              let o = a.data;
              o.id === i.id &&
                (this._worker.removeEventListener("message", r),
                o.error
                  ? n(new Error(`Failed to execute method ${t}: ${o.error}`))
                  : e(o.result));
            };
            this._worker.addEventListener("message", r);
          })
        );
      });
    }
    addEventListener(t, e) {
      this._eventManager.addEventListener(t, e);
    }
    removeEventListener(t, e) {
      this._eventManager.removeEventListener(t, e);
    }
    static setWasmUrl(e) {
      t._wasmUrl = e;
    }
    loadStateMachine(t) {
      return v(this, null, function* () {
        if (!this._created) return !1;
        let e = yield this._sendMessage("loadStateMachine", {
          instanceId: this._id,
          stateMachineId: t,
        });
        return yield this._updateDotLottieInstanceState(), e;
      });
    }
    loadStateMachineData(t) {
      return v(this, null, function* () {
        if (!this._created) return !1;
        let e = yield this._sendMessage("loadStateMachineData", {
          instanceId: this._id,
          stateMachineData: t,
        });
        return yield this._updateDotLottieInstanceState(), e;
      });
    }
    startStateMachine() {
      return v(this, null, function* () {
        if (!this._created) return !1;
        this._setupStateMachineListeners();
        let t = yield this._sendMessage("startStateMachine", {
          instanceId: this._id,
        });
        return yield this._updateDotLottieInstanceState(), t;
      });
    }
    stopStateMachine() {
      return v(this, null, function* () {
        return (
          !!this._created &&
          (this._cleanupStateMachineListeners(),
          this._sendMessage("stopStateMachine", { instanceId: this._id }))
        );
      });
    }
    getStateMachineListeners() {
      return v(this, null, function* () {
        return this._created
          ? this._sendMessage("getStateMachineListeners", {
              instanceId: this._id,
            })
          : [];
      });
    }
    _getPointerPosition(t) {
      let e = this._canvas.getBoundingClientRect(),
        n = this._canvas.width / e.width,
        i = this._canvas.height / e.height,
        r =
          this._dotLottieInstanceState.renderConfig.devicePixelRatio ||
          window.devicePixelRatio ||
          1;
      return {
        x: ((t.clientX - e.left) * n) / r,
        y: ((t.clientY - e.top) * i) / r,
      };
    }
    _onPointerUp(t) {
      let { x: e, y: n } = this._getPointerPosition(t);
      this._sendMessage("postPointerUpEvent", {
        instanceId: this._id,
        x: e,
        y: n,
      });
    }
    _onPointerDown(t) {
      let { x: e, y: n } = this._getPointerPosition(t);
      this._sendMessage("postPointerDownEvent", {
        instanceId: this._id,
        x: e,
        y: n,
      });
    }
    _onPointerMove(t) {
      let { x: e, y: n } = this._getPointerPosition(t);
      this._sendMessage("postPointerMoveEvent", {
        instanceId: this._id,
        x: e,
        y: n,
      });
    }
    _onPointerEnter(t) {
      let { x: e, y: n } = this._getPointerPosition(t);
      this._sendMessage("postPointerEnterEvent", {
        instanceId: this._id,
        x: e,
        y: n,
      });
    }
    _onPointerLeave(t) {
      let { x: e, y: n } = this._getPointerPosition(t);
      this._sendMessage("postPointerExitEvent", {
        instanceId: this._id,
        x: e,
        y: n,
      });
    }
    _setupStateMachineListeners() {
      return v(this, null, function* () {
        if (m && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
          let t = yield this._sendMessage("getStateMachineListeners", {
            instanceId: this._id,
          });
          t.includes("PointerUp") &&
            this._canvas.addEventListener("pointerup", this._pointerUpMethod),
            t.includes("PointerDown") &&
              this._canvas.addEventListener(
                "pointerdown",
                this._pointerDownMethod,
              ),
            t.includes("PointerMove") &&
              this._canvas.addEventListener(
                "pointermove",
                this._pointerMoveMethod,
              ),
            t.includes("PointerEnter") &&
              this._canvas.addEventListener(
                "pointerenter",
                this._pointerEnterMethod,
              ),
            t.includes("PointerExit") &&
              this._canvas.addEventListener(
                "pointerleave",
                this._pointerExitMethod,
              );
        }
      });
    }
    _cleanupStateMachineListeners() {
      m &&
        this._canvas instanceof HTMLCanvasElement &&
        (this._canvas.removeEventListener("pointerup", this._pointerUpMethod),
        this._canvas.removeEventListener(
          "pointerdown",
          this._pointerDownMethod,
        ),
        this._canvas.removeEventListener(
          "pointermove",
          this._pointerMoveMethod,
        ),
        this._canvas.removeEventListener(
          "pointerenter",
          this._pointerEnterMethod,
        ),
        this._canvas.removeEventListener(
          "pointerleave",
          this._pointerExitMethod,
        ));
    }
  };
  c(
    B,
    "_workerManager",
    new (class {
      constructor() {
        c(this, "_workers", new Map()),
          c(this, "_animationWorkerMap", new Map());
      }
      getWorker(t) {
        return (
          this._workers.has(t) || this._workers.set(t, new W()),
          this._workers.get(t)
        );
      }
      assignAnimationToWorker(t, e) {
        this._animationWorkerMap.set(t, e);
      }
      unassignAnimationFromWorker(t) {
        this._animationWorkerMap.delete(t);
      }
      sendMessage(t, e, n) {
        this.getWorker(t).postMessage(e, n || []);
      }
      terminateWorker(t) {
        let e = this._workers.get(t);
        e && (e.terminate(), this._workers.delete(t));
      }
    })(),
  ),
    c(B, "_wasmUrl", "");
  const H = {
    el: null,
    init() {
      const t = this;
      (t.el = document.querySelectorAll(".lottie-animation")),
        t.el.length &&
          setTimeout(() => {
            t.el.forEach((t) => {
              const e = t.dataset.pace || 1;
              let n = t.dataset.loop;
              n = !!n;
              const i = t.dataset.anim;
              t.dataset.once;
              let r,
                a = !1,
                o = !1,
                s = !1;
              const h = () => {
                (s = !0),
                  (r = new R({ canvas: t, loop: n, autoplay: !0, src: i })),
                  r.setSpeed(e),
                  r.addEventListener("load", () => {
                    a = !0;
                  }),
                  r.addEventListener("play", () => {}),
                  r.addEventListener("stop", () => {});
              };
              ScrollTrigger.create({
                trigger: t,
                start: "top 95%",
                end: "bottom top",
                invalidateOnRefresh: !0,
                once: !0,
                onEnter() {
                  s || h(), r?.play(), (o = !0);
                },
                onLeave() {},
                onEnterBack() {
                  s || h(), (o = !0);
                },
                onLeaveBack() {},
              }),
                (t._cbd_animation = r);
            });
          }, 1e3);
    },
  };
  var N = H;
  (window.dotLottie = R),
    document.addEventListener("DOMContentLoaded", function () {
      N.init();
    });
})();
