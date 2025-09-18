/*! For license information please see core.bundle.js.LICENSE.txt */
(function () {
  var __webpack_modules__ = {
      2: function (e, t) {
        var i, n, r;
        (n = []),
          void 0 ===
            (r =
              "function" ==
              typeof (i = function () {
                "use strict";
                let e = 0;
                class t {
                  constructor(e, t) {
                    (this.element = e),
                      (this.selector = t.selector),
                      (this.speed = e.dataset.speed || 0.25),
                      (this.pausable = e.dataset.pausable),
                      (this.reverse = e.dataset.reverse),
                      (this.paused = !1),
                      (this.parent = e.parentElement),
                      (this.parentProps = this.parent.getBoundingClientRect()),
                      (this.content = e.children[0]),
                      (this.innerContent = this.content.innerHTML),
                      (this.wrapStyles = ""),
                      (this.offset = 0),
                      this._setupWrapper(),
                      this._setupContent(),
                      this._setupEvents(),
                      this.wrapper.appendChild(this.content),
                      this.element.appendChild(this.wrapper);
                  }
                  _setupWrapper() {
                    (this.wrapper = document.createElement("div")),
                      this.wrapper.classList.add("marquee3k__wrapper"),
                      (this.wrapper.style.whiteSpace = "nowrap");
                  }
                  _setupContent() {
                    this.content.classList.add(`${this.selector}__copy`),
                      (this.content.style.display = "inline-block"),
                      (this.contentWidth = this.content.offsetWidth),
                      (this.requiredReps =
                        this.contentWidth > this.parentProps.width
                          ? 2
                          : Math.ceil(
                              (this.parentProps.width - this.contentWidth) /
                                this.contentWidth,
                            ) + 1);
                    for (let e = 0; e < this.requiredReps; e++)
                      this._createClone();
                    this.reverse && (this.offset = -1 * this.contentWidth),
                      this.element.classList.add("is-init");
                  }
                  _setupEvents() {
                    this.element.addEventListener("mouseenter", () => {
                      this.pausable && (this.paused = !0);
                    }),
                      this.element.addEventListener("mouseleave", () => {
                        this.pausable && (this.paused = !1);
                      });
                  }
                  _createClone() {
                    const e = this.content.cloneNode(!0);
                    (e.style.display = "inline-block"),
                      e.classList.add(`${this.selector}__copy`),
                      this.wrapper.appendChild(e);
                  }
                  animate() {
                    if (!this.paused) {
                      const e = this.reverse
                          ? this.offset < 0
                          : this.offset > -1 * this.contentWidth,
                        t = this.reverse ? -1 : 1,
                        i = this.reverse ? -1 * this.contentWidth : 0;
                      e ? (this.offset -= this.speed * t) : (this.offset = i),
                        (this.wrapper.style.whiteSpace = "nowrap"),
                        (this.wrapper.style.transform = `translate(${this.offset}px, 0) translateZ(0)`);
                    }
                  }
                  _refresh() {
                    this.contentWidth = this.content.offsetWidth;
                  }
                  repopulate(e, t) {
                    if (((this.contentWidth = this.content.offsetWidth), t)) {
                      const t = Math.ceil(e / this.contentWidth) + 1;
                      for (let e = 0; e < t; e++) this._createClone();
                    }
                  }
                  static refresh(e) {
                    MARQUEES[e]._refresh();
                  }
                  static pause(e) {
                    MARQUEES[e].paused = !0;
                  }
                  static play(e) {
                    MARQUEES[e].paused = !1;
                  }
                  static toggle(e) {
                    MARQUEES[e].paused = !MARQUEES[e].paused;
                  }
                  static refreshAll() {
                    for (let e = 0; e < MARQUEES.length; e++)
                      MARQUEES[e]._refresh();
                  }
                  static pauseAll() {
                    for (let e = 0; e < MARQUEES.length; e++)
                      MARQUEES[e].paused = !0;
                  }
                  static playAll() {
                    for (let e = 0; e < MARQUEES.length; e++)
                      MARQUEES[e].paused = !1;
                  }
                  static toggleAll() {
                    for (let e = 0; e < MARQUEES.length; e++)
                      MARQUEES[e].paused = !MARQUEES[e].paused;
                  }
                  static init(i = { selector: "marquee3k" }) {
                    e && window.cancelAnimationFrame(e), (window.MARQUEES = []);
                    const n = Array.from(
                      document.querySelectorAll(`.${i.selector}`),
                    );
                    let r,
                      s = window.innerWidth;
                    for (let e = 0; e < n.length; e++) {
                      const r = n[e],
                        s = new t(r, i);
                      MARQUEES.push(s);
                    }
                    function o() {
                      for (let e = 0; e < MARQUEES.length; e++)
                        MARQUEES[e].animate();
                      e = window.requestAnimationFrame(o);
                    }
                    o(),
                      window.addEventListener("resize", () => {
                        clearTimeout(r),
                          (r = setTimeout(() => {
                            const e = s < window.innerWidth,
                              t = window.innerWidth - s;
                            for (let i = 0; i < MARQUEES.length; i++)
                              MARQUEES[i].repopulate(t, e);
                            s = this.innerWidth;
                          }, 250));
                      });
                  }
                }
                return t;
              })
                ? i.apply(t, n)
                : i) || (e.exports = r);
      },
      4: function () {
        "use strict";
        !(function () {
          var e,
            t = {};
          function i(e) {
            var i = e.element,
              n = e.slideSpeed,
              r = e.direction,
              s = e.easing,
              o = e.delay,
              a = void 0 === o ? 0 : o,
              l = e.visibleDisplayValue,
              u = void 0 === l ? "block" : l,
              c =
                i.dataset.domSliderId ||
                (Date.now() * Math.random()).toFixed(0);
            i.dataset.domSliderId || (i.dataset.domSliderId = c),
              t[c] || (t[c] = {});
            var d = t[c],
              h = window.getComputedStyle(i),
              p = "none" === h.getPropertyValue("display"),
              f =
                r ||
                (p || i.classList.contains("DOM-slider-hidden")
                  ? "down"
                  : "up"),
              m = n || (0 === n ? 0 : 300),
              g = h.getPropertyValue("box-sizing"),
              v = parseInt(h.getPropertyValue("padding-top").split("px")[0]),
              y = parseInt(h.getPropertyValue("padding-bottom").split("px")[0]),
              D = Math.max(i.scrollHeight - v - y, 0);
            return (
              "border-box" === g && (D = Math.max(i.scrollHeight, 0)),
              i.dataset.sliding
                ? Promise.resolve(i)
                : "down" !== f || p || i.classList.contains("DOM-slider-hidden")
                  ? "up" === f && i.classList.contains("DOM-slider-hidden")
                    ? Promise.resolve(i)
                    : ((i.dataset.sliding = !0),
                      i.setAttribute(
                        "aria-hidden",
                        "down" === f ? "false" : "true",
                      ),
                      "down" === f &&
                        p &&
                        (i.classList.add("DOM-slider-hidden"),
                        (i.style.display = u),
                        (D = i.scrollHeight)),
                      (i.style.height = "".concat(
                        d.height ? d.height : D,
                        "px",
                      )),
                      (i.style.transition = "all "
                        .concat(m, "ms ")
                        .concat(s || "")),
                      (i.style.overflow = "hidden"),
                      new Promise(function (e) {
                        setTimeout(
                          function () {
                            i.classList.toggle("DOM-slider-hidden"), e();
                          },
                          +a > 20 ? +a : 20,
                        );
                      }).then(function () {
                        return new Promise(function (e) {
                          setTimeout(function () {
                            i.style.removeProperty("height"),
                              i.style.removeProperty("transition"),
                              i.style.removeProperty("overflow"),
                              i.removeAttribute("data-sliding"),
                              (t[c].height = D),
                              e(i);
                          }, m);
                        });
                      }))
                  : Promise.resolve(i)
            );
          }
          ((e = document.createElement("style")).id = "dom-slider"),
            (e.innerHTML =
              "\n      .DOM-slider-hidden {\n        height: 0 !important;\n        padding-top: 0 !important;\n        padding-bottom: 0 !important;\n        border-top-width: 0 !important;\n        border-bottom-width: 0 !important;\n        margin-top: 0 !important;\n        margin-bottom: 0 !important;\n        overflow: hidden !important;\n      }\n    "),
            document.head.appendChild(e),
            (window.domSlider = {
              slideDown: function (e) {
                return i({
                  element: e.element,
                  slideSpeed: e.slideSpeed,
                  direction: "down",
                  easing: e.easing,
                  delay: e.delay,
                  visibleDisplayValue: e.visibleDisplayValue,
                });
              },
              slideUp: function (e) {
                return i({
                  element: e.element,
                  slideSpeed: e.slideSpeed,
                  direction: "up",
                  easing: e.easing,
                  delay: e.delay,
                });
              },
              slideToggle: function (e) {
                return i({
                  element: e.element,
                  slideSpeed: e.slideSpeed,
                  easing: e.easing,
                  delay: e.delay,
                  visibleDisplayValue: e.visibleDisplayValue,
                });
              },
            }),
            (function () {
              var e;
              function t() {
                (e = document.querySelectorAll(".DOM-slider-hidden")).forEach(
                  function (e) {
                    e.classList.remove("DOM-slider-hidden");
                  },
                );
              }
              function i() {
                e.forEach(function (e) {
                  e.classList.add("DOM-slider-hidden");
                });
              }
              (window.onbeforeprint = t),
                (window.onafterprint = i),
                window.matchMedia("print").addListener(function (e) {
                  e.matches && (t(), setTimeout(i, 500));
                });
            })();
        })();
      },
      137: function (e) {
        var t, i;
        (t = "undefined" != typeof window ? window : this),
          (i = function () {
            function e() {}
            let t = e.prototype;
            return (
              (t.on = function (e, t) {
                if (!e || !t) return this;
                let i = (this._events = this._events || {}),
                  n = (i[e] = i[e] || []);
                return n.includes(t) || n.push(t), this;
              }),
              (t.once = function (e, t) {
                if (!e || !t) return this;
                this.on(e, t);
                let i = (this._onceEvents = this._onceEvents || {});
                return ((i[e] = i[e] || {})[t] = !0), this;
              }),
              (t.off = function (e, t) {
                let i = this._events && this._events[e];
                if (!i || !i.length) return this;
                let n = i.indexOf(t);
                return -1 != n && i.splice(n, 1), this;
              }),
              (t.emitEvent = function (e, t) {
                let i = this._events && this._events[e];
                if (!i || !i.length) return this;
                (i = i.slice(0)), (t = t || []);
                let n = this._onceEvents && this._onceEvents[e];
                for (let r of i)
                  n && n[r] && (this.off(e, r), delete n[r]), r.apply(this, t);
                return this;
              }),
              (t.allOff = function () {
                return delete this._events, delete this._onceEvents, this;
              }),
              e
            );
          }),
          e.exports ? (e.exports = i()) : (t.EvEmitter = i());
      },
      139: function (e) {
        e.exports = (function () {
          "use strict";
          var e = {
            en: {
              required: "This field is required",
              email: "This field requires a valid e-mail address",
              number: "This field requires a number",
              integer: "This field requires an integer value",
              url: "This field requires a valid website URL",
              tel: "This field requires a valid telephone number",
              maxlength: "This fields length must be < ${1}",
              minlength: "This fields length must be > ${1}",
              min: "Minimum value for this field is ${1}",
              max: "Maximum value for this field is ${1}",
              pattern: "Please match the requested format",
              equals: "The two fields do not match",
              default: "Please enter a correct value",
            },
          };
          function t(e, t) {
            for (; (e = e.parentElement) && !e.classList.contains(t); );
            return e;
          }
          function i(e) {
            var t = arguments;
            return this.replace(/\${([^{}]*)}/g, function (e, i) {
              return t[i];
            });
          }
          function n(e) {
            return e.pristine.self.form.querySelectorAll(
              'input[name="' + e.getAttribute("name") + '"]:checked',
            ).length;
          }
          function r(e, t) {
            for (var i in t) i in e || (e[i] = t[i]);
            return e;
          }
          var s = {
              classTo: "form-group",
              errorClass: "has-danger",
              successClass: "has-success",
              errorTextParent: "form-group",
              errorTextTag: "div",
              errorTextClass: "text-help",
            },
            o = "pristine-error",
            a =
              "input:not([type^=hidden]):not([type^=submit]), select, textarea",
            l = ["required", "min", "max", "minlength", "maxlength", "pattern"],
            u =
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            c = /-message(?:-([a-z]{2}(?:_[A-Z]{2})?))?/,
            d = "en",
            h = {},
            p = function (e, t) {
              (t.name = e),
                void 0 === t.priority && (t.priority = 1),
                (h[e] = t);
            };
          function f(n, u, p) {
            var f = this;
            function m(e, t, i) {
              e.setAttribute("novalidate", "true"),
                (f.form = e),
                (f.config = r(t || {}, s)),
                (f.live = !(!1 === i)),
                (f.fields = Array.from(e.querySelectorAll(a)).map(
                  function (e) {
                    var t = [],
                      i = {},
                      n = {};
                    return (
                      [].forEach.call(e.attributes, function (e) {
                        if (/^data-pristine-/.test(e.name)) {
                          var r = e.name.substr(14),
                            s = r.match(c);
                          if (null !== s) {
                            var o = void 0 === s[1] ? "en" : s[1];
                            return (
                              n.hasOwnProperty(o) || (n[o] = {}),
                              void (n[o][r.slice(0, r.length - s[0].length)] =
                                e.value)
                            );
                          }
                          "type" === r && (r = e.value), g(t, i, r, e.value);
                        } else
                          ~l.indexOf(e.name)
                            ? g(t, i, e.name, e.value)
                            : "type" === e.name && g(t, i, e.value);
                      }),
                      t.sort(function (e, t) {
                        return t.priority - e.priority;
                      }),
                      f.live &&
                        e.addEventListener(
                          ~["radio", "checkbox"].indexOf(e.getAttribute("type"))
                            ? "change"
                            : "input",
                          function (e) {
                            f.validate(e.target);
                          }.bind(f),
                        ),
                      (e.pristine = {
                        input: e,
                        validators: t,
                        params: i,
                        messages: n,
                        self: f,
                      })
                    );
                  }.bind(f),
                ));
            }
            function g(e, t, i, n) {
              var r = h[i];
              if (r && (e.push(r), n)) {
                var s = "pattern" === i ? [n] : n.split(",");
                s.unshift(null), (t[i] = s);
              }
            }
            function v(t) {
              for (var n = [], r = !0, s = 0; t.validators[s]; s++) {
                var o = t.validators[s],
                  a = t.params[o.name] ? t.params[o.name] : [];
                if (
                  ((a[0] = t.input.value),
                  !o.fn.apply(t.input, a) &&
                    ((r = !1),
                    "function" == typeof o.msg
                      ? n.push(o.msg(t.input.value, a))
                      : "string" == typeof o.msg
                        ? n.push(i.apply(o.msg, a))
                        : o.msg === Object(o.msg) && o.msg[d]
                          ? n.push(i.apply(o.msg[d], a))
                          : t.messages[d] && t.messages[d][o.name]
                            ? n.push(i.apply(t.messages[d][o.name], a))
                            : e[d] && e[d][o.name]
                              ? n.push(i.apply(e[d][o.name], a))
                              : n.push(i.apply(e[d].default, a)),
                    !0 === o.halt))
                )
                  break;
              }
              return (t.errors = n), r;
            }
            function y(e) {
              if (e.errorElements) return e.errorElements;
              var i = t(e.input, f.config.classTo),
                n = null,
                r = null;
              return (
                (n =
                  f.config.classTo === f.config.errorTextParent
                    ? i
                    : i.querySelector("." + f.config.errorTextParent)) &&
                  ((r = n.querySelector("." + o)) ||
                    (((r = document.createElement(
                      f.config.errorTextTag,
                    )).className = o + " " + f.config.errorTextClass),
                    n.appendChild(r),
                    (r.pristineDisplay = r.style.display))),
                (e.errorElements = [i, r])
              );
            }
            function D(e) {
              var t = y(e),
                i = t[0],
                n = t[1],
                r = e.input,
                s =
                  "error-" +
                  (r.id || Math.floor(new Date().valueOf() * Math.random()));
              i &&
                (i.classList.remove(f.config.successClass),
                i.classList.add(f.config.errorClass),
                r.setAttribute("aria-describedby", s),
                r.setAttribute("aria-invalid", "true")),
                n &&
                  (n.setAttribute("id", s),
                  n.setAttribute("role", "alert"),
                  (n.innerHTML = e.errors.join("<br/>")),
                  (n.style.display = n.pristineDisplay || ""));
            }
            function w(e) {
              var t = y(e),
                i = t[0],
                n = t[1],
                r = e.input;
              return (
                i &&
                  (i.classList.remove(f.config.errorClass),
                  i.classList.remove(f.config.successClass),
                  r.removeAttribute("aria-describedby"),
                  r.removeAttribute("aria-invalid")),
                n &&
                  (n.removeAttribute("id"),
                  n.removeAttribute("role"),
                  (n.innerHTML = ""),
                  (n.style.display = "none")),
                t
              );
            }
            function _(e) {
              var t = w(e)[0];
              t && t.classList.add(f.config.successClass);
            }
            return (
              m(n, u, p),
              (f.validate = function (e, t) {
                t = (e && !0 === t) || !0 === e;
                var i = f.fields;
                !0 !== e &&
                  !1 !== e &&
                  (e instanceof HTMLElement
                    ? (i = [e.pristine])
                    : (e instanceof NodeList ||
                        e instanceof (window.$ || Array) ||
                        e instanceof Array) &&
                      (i = Array.from(e).map(function (e) {
                        return e.pristine;
                      })));
                for (var n = !0, r = 0; i[r]; r++) {
                  var s = i[r];
                  v(s) ? !t && _(s) : ((n = !1), !t && D(s));
                }
                return n;
              }),
              (f.getErrors = function (e) {
                if (!e) {
                  for (var t = [], i = 0; i < f.fields.length; i++) {
                    var n = f.fields[i];
                    n.errors.length &&
                      t.push({ input: n.input, errors: n.errors });
                  }
                  return t;
                }
                return e.tagName && "select" === e.tagName.toLowerCase()
                  ? e.pristine.errors
                  : e.length
                    ? e[0].pristine.errors
                    : e.pristine.errors;
              }),
              (f.addValidator = function (e, t, i, n, r) {
                e instanceof HTMLElement &&
                  (e.pristine.validators.push({
                    fn: t,
                    msg: i,
                    priority: n,
                    halt: r,
                  }),
                  e.pristine.validators.sort(function (e, t) {
                    return t.priority - e.priority;
                  }));
              }),
              (f.addError = function (e, t) {
                (e = e.length ? e[0] : e).pristine.errors.push(t),
                  D(e.pristine);
              }),
              (f.reset = function () {
                for (var e = 0; f.fields[e]; e++)
                  f.fields[e].errorElements = null;
                Array.from(f.form.querySelectorAll("." + o)).map(function (e) {
                  e.parentNode.removeChild(e);
                }),
                  Array.from(
                    f.form.querySelectorAll("." + f.config.classTo),
                  ).map(function (e) {
                    e.classList.remove(f.config.successClass),
                      e.classList.remove(f.config.errorClass);
                  });
              }),
              (f.destroy = function () {
                f.reset(),
                  f.fields.forEach(function (e) {
                    delete e.input.pristine;
                  }),
                  (f.fields = []);
              }),
              (f.setGlobalConfig = function (e) {
                s = e;
              }),
              f
            );
          }
          return (
            p("text", {
              fn: function (e) {
                return !0;
              },
              priority: 0,
            }),
            p("required", {
              fn: function (e) {
                return "radio" === this.type || "checkbox" === this.type
                  ? n(this)
                  : void 0 !== e && "" !== e.trim();
              },
              priority: 99,
              halt: !0,
            }),
            p("email", {
              fn: function (e) {
                return !e || u.test(e);
              },
            }),
            p("number", {
              fn: function (e) {
                return !e || !isNaN(parseFloat(e));
              },
              priority: 2,
            }),
            p("integer", {
              fn: function (e) {
                return !e || /^\d+$/.test(e);
              },
            }),
            p("minlength", {
              fn: function (e, t) {
                return !e || e.length >= parseInt(t);
              },
            }),
            p("maxlength", {
              fn: function (e, t) {
                return !e || e.length <= parseInt(t);
              },
            }),
            p("min", {
              fn: function (e, t) {
                return (
                  !e ||
                  ("checkbox" === this.type
                    ? n(this) >= parseInt(t)
                    : parseFloat(e) >= parseFloat(t))
                );
              },
            }),
            p("max", {
              fn: function (e, t) {
                return (
                  !e ||
                  ("checkbox" === this.type
                    ? n(this) <= parseInt(t)
                    : parseFloat(e) <= parseFloat(t))
                );
              },
            }),
            p("pattern", {
              fn: function (e, t) {
                var i = t.match(new RegExp("^/(.*?)/([gimy]*)$"));
                return !e || new RegExp(i[1], i[2]).test(e);
              },
            }),
            p("equals", {
              fn: function (e, t) {
                var i = document.querySelector(t);
                return i && ((!e && !i.value) || i.value === e);
              },
            }),
            (f.addValidator = function (e, t, i, n, r) {
              p(e, { fn: t, msg: i, priority: n, halt: r });
            }),
            (f.addMessages = function (t, i) {
              var n = e.hasOwnProperty(t) ? e[t] : (e[t] = {});
              Object.keys(i).forEach(function (e, t) {
                n[e] = i[e];
              });
            }),
            (f.setLocale = function (e) {
              d = e;
            }),
            f
          );
        })();
      },
      247: function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            return (
              !(
                "undefined" == typeof window ||
                !(
                  "ontouchstart" in window ||
                  (window.DocumentTouch &&
                    "undefined" != typeof document &&
                    document instanceof window.DocumentTouch)
                )
              ) ||
              !(
                "undefined" == typeof navigator ||
                (!navigator.maxTouchPoints && !navigator.msMaxTouchPoints)
              )
            );
          }),
          (e.exports = t.default);
      },
      440: function (e) {
        e.exports = function (e, t, i) {
          return e * (1 - i) + t * i;
        };
      },
      896: function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        "use strict";
        const ELEMENT = document.getElementById("cursor"),
          BASE_CLASS = "cursor",
          lerp = (e, t, i) => (1 - i) * e + i * t,
          getMousePos = (e) => {
            let t = 0,
              i = 0;
            return (
              e || (e = window.event),
              (t = e.clientX),
              (i = e.clientY),
              { x: t, y: i }
            );
          },
          Cursor = {
            init(e = {}) {
              (this.DOM = { el: ELEMENT }),
                (this.$options = Object.freeze({ defaultLerp: 0.15, ...e })),
                (this.mode = "default"),
                this.createHTML(),
                (this.lastMousePos = {}),
                (this.bounds = {}),
                (this.DOM.layers = this.DOM.el.querySelectorAll(
                  `.${BASE_CLASS}-layer`,
                )),
                (this.mousePos = { x: 0, y: 0 }),
                Array.from(this.DOM.layers).forEach((e) => {
                  const t = e.getAttribute("data-layer");
                  (this.lastMousePos[t] = e.getBoundingClientRect()),
                    (this.bounds[t] = e.getBoundingClientRect()),
                    (this.DOM[t] = e);
                }),
                this.initEvents(),
                requestAnimationFrame(() => this.render());
            },
            setMouseMove(e) {
              this.mousePos = getMousePos(e);
            },
            initEvents() {
              const e = (e) => this.setMouseMove(e);
              window.removeEventListener("mousemove", e),
                window.addEventListener("mousemove", e, !1),
                document.addEventListener("mouseover", (e) => {
                  const t = e.target.closest("a, button, input, [data-cursor]");
                  t &&
                    (t.matches("a, button, input") &&
                    !t.matches("[data-cursor]")
                      ? this.enter(null, "hover")
                      : t.matches("[data-cursor]") && this.enter(t));
                }),
                document.addEventListener("mouseout", (e) => {
                  const t = e.target.closest("a, button, input, [data-cursor]");
                  t &&
                    (t.matches("a, button, input") &&
                    !t.matches("[data-cursor]")
                      ? this.leave(null, "hover")
                      : t.matches("[data-cursor]") && this.leave(t));
                }),
                document.addEventListener("mousedown", (e) => {
                  e.target.closest("[data-cursor]") && this.touchStart();
                }),
                document.addEventListener("mouseup", (e) => {
                  e.target.closest("[data-cursor]") && this.touchEnd();
                });
            },
            reset() {
              this.DOM.el.classList.remove(`${BASE_CLASS}-${this.mode}-active`);
            },
            createHTML() {
              const e = `\n      <div data-layer="dot" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-dot"></div>\n      <div data-layer="bg" data-lerp="0.1" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-bg"></div>\n      <div data-layer="arrow" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-arrow"></div>\n      <div data-layer="prev" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-prev"></div>\n      <div data-layer="next" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-next"></div>\n      <div data-layer="collapse" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-collapse"></div>\n      <div data-layer="drag" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-drag"></div>\n      <div data-layer="play" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-play">Play</div>\n      <div data-layer="cta" class="${BASE_CLASS}-layer ${BASE_CLASS}-layer-cta"><span></span></div>\n    `;
              this.DOM.el.innerHTML = e;
            },
            render() {
              requestAnimationFrame(() => this.render());
              const { defaultLerp: e } = this.$options;
              Array.from(this.DOM.layers).forEach((t) => {
                const i = t.getAttribute("data-layer"),
                  n = t.getAttribute("data-lerp")
                    ? Number(t.getAttribute("data-lerp"))
                    : e;
                (this.bounds[i] = t.getBoundingClientRect()),
                  (this.lastMousePos[i].x = lerp(
                    this.lastMousePos[i].x,
                    this.mousePos.x - this.bounds[i].width / 2,
                    n,
                  )),
                  (this.lastMousePos[i].y = lerp(
                    this.lastMousePos[i].y,
                    this.mousePos.y - this.bounds[i].height / 2,
                    n,
                  )),
                  (t.style.transform = `translateX(${this.lastMousePos[i].x}px) translateY(${this.lastMousePos[i].y}px)`);
              });
            },
            touchStart() {
              this.DOM.el.classList.add("touching");
            },
            touchEnd() {
              this.DOM.el.classList.remove("touching");
            },
            enter(el, mode) {
              if (
                ((this.mode = el
                  ? el.getAttribute("data-cursor")
                  : mode || "default"),
                this.DOM.el.classList.add(`${BASE_CLASS}-${this.mode}-active`),
                "collapse" === this.mode)
              ) {
                const isCollapsed = eval(el.getAttribute("data-collapsed"));
                isCollapsed
                  ? this.DOM.collapse.classList.remove("open")
                  : this.DOM.collapse.classList.add("open");
              }
              if ("cta" === this.mode) {
                const e = el.getAttribute("data-cursor-text"),
                  t = this.DOM.cta.querySelector("span");
                t.innerHTML = e;
              }
            },
            leave(e, t) {
              (this.mode = e ? e.getAttribute("data-cursor") : t || "default"),
                this.DOM.el.classList.remove(
                  `${BASE_CLASS}-${this.mode}-active`,
                ),
                "collapse" === this.mode &&
                  this.DOM.collapse.classList.remove("open"),
                "cta" === this.mode &&
                  (this.DOM.cta.querySelector("span").innerHTML = "");
            },
          };
        __webpack_exports__.A = Cursor;
      },
      943: function (e, t, i) {
        !(function (t, n) {
          e.exports
            ? (e.exports = n(t, i(137)))
            : (t.imagesLoaded = n(t, t.EvEmitter));
        })("undefined" != typeof window ? window : this, function (e, t) {
          let i = e.jQuery,
            n = e.console;
          function r(e, t, s) {
            if (!(this instanceof r)) return new r(e, t, s);
            let o = e;
            var a;
            ("string" == typeof e && (o = document.querySelectorAll(e)), o)
              ? ((this.elements =
                  ((a = o),
                  Array.isArray(a)
                    ? a
                    : "object" == typeof a && "number" == typeof a.length
                      ? [...a]
                      : [a])),
                (this.options = {}),
                "function" == typeof t
                  ? (s = t)
                  : Object.assign(this.options, t),
                s && this.on("always", s),
                this.getImages(),
                i && (this.jqDeferred = new i.Deferred()),
                setTimeout(this.check.bind(this)))
              : n.error(`Bad element for imagesLoaded ${o || e}`);
          }
          (r.prototype = Object.create(t.prototype)),
            (r.prototype.getImages = function () {
              (this.images = []),
                this.elements.forEach(this.addElementImages, this);
            });
          const s = [1, 9, 11];
          r.prototype.addElementImages = function (e) {
            "IMG" === e.nodeName && this.addImage(e),
              !0 === this.options.background &&
                this.addElementBackgroundImages(e);
            let { nodeType: t } = e;
            if (!t || !s.includes(t)) return;
            let i = e.querySelectorAll("img");
            for (let e of i) this.addImage(e);
            if ("string" == typeof this.options.background) {
              let t = e.querySelectorAll(this.options.background);
              for (let e of t) this.addElementBackgroundImages(e);
            }
          };
          const o = /url\((['"])?(.*?)\1\)/gi;
          function a(e) {
            this.img = e;
          }
          function l(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
          }
          return (
            (r.prototype.addElementBackgroundImages = function (e) {
              let t = getComputedStyle(e);
              if (!t) return;
              let i = o.exec(t.backgroundImage);
              for (; null !== i; ) {
                let n = i && i[2];
                n && this.addBackground(n, e), (i = o.exec(t.backgroundImage));
              }
            }),
            (r.prototype.addImage = function (e) {
              let t = new a(e);
              this.images.push(t);
            }),
            (r.prototype.addBackground = function (e, t) {
              let i = new l(e, t);
              this.images.push(i);
            }),
            (r.prototype.check = function () {
              if (
                ((this.progressedCount = 0),
                (this.hasAnyBroken = !1),
                !this.images.length)
              )
                return void this.complete();
              let e = (e, t, i) => {
                setTimeout(() => {
                  this.progress(e, t, i);
                });
              };
              this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              });
            }),
            (r.prototype.progress = function (e, t, i) {
              this.progressedCount++,
                (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                this.emitEvent("progress", [this, e, t]),
                this.jqDeferred &&
                  this.jqDeferred.notify &&
                  this.jqDeferred.notify(this, e),
                this.progressedCount === this.images.length && this.complete(),
                this.options.debug && n && n.log(`progress: ${i}`, e, t);
            }),
            (r.prototype.complete = function () {
              let e = this.hasAnyBroken ? "fail" : "done";
              if (
                ((this.isComplete = !0),
                this.emitEvent(e, [this]),
                this.emitEvent("always", [this]),
                this.jqDeferred)
              ) {
                let e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this);
              }
            }),
            (a.prototype = Object.create(t.prototype)),
            (a.prototype.check = function () {
              this.getIsImageComplete()
                ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                : ((this.proxyImage = new Image()),
                  this.img.crossOrigin &&
                    (this.proxyImage.crossOrigin = this.img.crossOrigin),
                  this.proxyImage.addEventListener("load", this),
                  this.proxyImage.addEventListener("error", this),
                  this.img.addEventListener("load", this),
                  this.img.addEventListener("error", this),
                  (this.proxyImage.src = this.img.currentSrc || this.img.src));
            }),
            (a.prototype.getIsImageComplete = function () {
              return this.img.complete && this.img.naturalWidth;
            }),
            (a.prototype.confirm = function (e, t) {
              this.isLoaded = e;
              let { parentNode: i } = this.img,
                n = "PICTURE" === i.nodeName ? i : this.img;
              this.emitEvent("progress", [this, n, t]);
            }),
            (a.prototype.handleEvent = function (e) {
              let t = "on" + e.type;
              this[t] && this[t](e);
            }),
            (a.prototype.onload = function () {
              this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (a.prototype.onerror = function () {
              this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (a.prototype.unbindEvents = function () {
              this.proxyImage.removeEventListener("load", this),
                this.proxyImage.removeEventListener("error", this),
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this);
            }),
            (l.prototype = Object.create(a.prototype)),
            (l.prototype.check = function () {
              this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                (this.img.src = this.url),
                this.getIsImageComplete() &&
                  (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                  this.unbindEvents());
            }),
            (l.prototype.unbindEvents = function () {
              this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this);
            }),
            (l.prototype.confirm = function (e, t) {
              (this.isLoaded = e),
                this.emitEvent("progress", [this, this.element, t]);
            }),
            (r.makeJQueryPlugin = function (t) {
              (t = t || e.jQuery) &&
                ((i = t),
                (i.fn.imagesLoaded = function (e, t) {
                  return new r(this, e, t).jqDeferred.promise(i(this));
                }));
            }),
            r.makeJQueryPlugin(),
            r
          );
        });
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var i = (__webpack_module_cache__[e] = { exports: {} });
    return (
      __webpack_modules__[e].call(i.exports, i, i.exports, __webpack_require__),
      i.exports
    );
  }
  (__webpack_require__.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = function (e, t) {
      for (var i in t)
        __webpack_require__.o(t, i) &&
          !__webpack_require__.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (__webpack_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    });
  var __webpack_exports__ = {};
  !(function () {
    "use strict";
    function e(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function t(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    var i,
      n,
      r,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      p,
      f,
      m,
      g,
      v,
      y,
      D = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      w = { duration: 0.5, overwrite: !1, delay: 0 },
      _ = 1e8,
      x = 1e-8,
      b = 2 * Math.PI,
      E = b / 4,
      S = 0,
      T = Math.sqrt,
      C = Math.cos,
      M = Math.sin,
      A = function (e) {
        return "string" == typeof e;
      },
      F = function (e) {
        return "function" == typeof e;
      },
      k = function (e) {
        return "number" == typeof e;
      },
      L = function (e) {
        return void 0 === e;
      },
      P = function (e) {
        return "object" == typeof e;
      },
      O = function (e) {
        return !1 !== e;
      },
      I = function () {
        return "undefined" != typeof window;
      },
      B = function (e) {
        return F(e) || A(e);
      },
      N =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      R = Array.isArray,
      z = /(?:-?\.?\d|\.)+/gi,
      q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      H = /[+-]=-?[.\d]+/,
      X = /[^,'"\[\]\s]+/gi,
      W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      $ = {},
      G = {},
      j = function (e) {
        return (G = xe(e, $)) && bi;
      },
      U = function (e, t) {
        return !t && void 0;
      },
      Q = function (e, t) {
        return (e && ($[e] = t) && G && (G[e] = t)) || $;
      },
      K = function () {
        return 0;
      },
      Z = { suppressEvents: !0, isStart: !0, kill: !1 },
      J = { suppressEvents: !0, kill: !1 },
      ee = { suppressEvents: !0 },
      te = {},
      ie = [],
      ne = {},
      re = {},
      se = {},
      oe = 30,
      ae = [],
      le = "",
      ue = function (e) {
        var t,
          i,
          n = e[0];
        if ((P(n) || F(n) || (e = [e]), !(t = (n._gsap || {}).harness))) {
          for (i = ae.length; i-- && !ae[i].targetTest(n); );
          t = ae[i];
        }
        for (i = e.length; i--; )
          (e[i] && (e[i]._gsap || (e[i]._gsap = new Nt(e[i], t)))) ||
            e.splice(i, 1);
        return e;
      },
      ce = function (e) {
        return e._gsap || ue(et(e))[0]._gsap;
      },
      de = function (e, t, i) {
        return (i = e[t]) && F(i)
          ? e[t]()
          : (L(i) && e.getAttribute && e.getAttribute(t)) || i;
      },
      he = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
      },
      pe = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      fe = function (e) {
        return Math.round(1e7 * e) / 1e7 || 0;
      },
      me = function (e, t) {
        var i = t.charAt(0),
          n = parseFloat(t.substr(2));
        return (
          (e = parseFloat(e)),
          "+" === i ? e + n : "-" === i ? e - n : "*" === i ? e * n : e / n
        );
      },
      ge = function (e, t) {
        for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i; );
        return n < i;
      },
      ve = function () {
        var e,
          t,
          i = ie.length,
          n = ie.slice(0);
        for (ne = {}, ie.length = 0, e = 0; e < i; e++)
          (t = n[e]) &&
            t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      ye = function (e, t, i, r) {
        ie.length && !n && ve(),
          e.render(t, i, r || (n && t < 0 && (e._initted || e._startAt))),
          ie.length && !n && ve();
      },
      De = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(X).length < 2
          ? t
          : A(e)
            ? e.trim()
            : e;
      },
      we = function (e) {
        return e;
      },
      _e = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
      },
      xe = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      },
      be = function e(t, i) {
        for (var n in i)
          "__proto__" !== n &&
            "constructor" !== n &&
            "prototype" !== n &&
            (t[n] = P(i[n]) ? e(t[n] || (t[n] = {}), i[n]) : i[n]);
        return t;
      },
      Ee = function (e, t) {
        var i,
          n = {};
        for (i in e) i in t || (n[i] = e[i]);
        return n;
      },
      Se = function (e) {
        var t,
          i = e.parent || s,
          n = e.keyframes
            ? ((t = R(e.keyframes)),
              function (e, i) {
                for (var n in i)
                  n in e ||
                    ("duration" === n && t) ||
                    "ease" === n ||
                    (e[n] = i[n]);
              })
            : _e;
        if (O(e.inherit))
          for (; i; ) n(e, i.vars.defaults), (i = i.parent || i._dp);
        return e;
      },
      Te = function (e, t, i, n, r) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s,
          o = e[n];
        if (r) for (s = t[r]; o && o[r] > s; ) o = o._prev;
        return (
          o
            ? ((t._next = o._next), (o._next = t))
            : ((t._next = e[i]), (e[i] = t)),
          t._next ? (t._next._prev = t) : (e[n] = t),
          (t._prev = o),
          (t.parent = t._dp = e),
          t
        );
      },
      Ce = function (e, t, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var r = t._prev,
          s = t._next;
        r ? (r._next = s) : e[i] === t && (e[i] = s),
          s ? (s._prev = r) : e[n] === t && (e[n] = r),
          (t._next = t._prev = t.parent = null);
      },
      Me = function (e, t) {
        e.parent &&
          (!t || e.parent.autoRemoveChildren) &&
          e.parent.remove &&
          e.parent.remove(e),
          (e._act = 0);
      },
      Ae = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
        return e;
      },
      Fe = function (e, t, i, r) {
        return (
          e._startAt &&
          (n
            ? e._startAt.revert(J)
            : (e.vars.immediateRender && !e.vars.autoRevert) ||
              e._startAt.render(t, !0, r))
        );
      },
      ke = function e(t) {
        return !t || (t._ts && e(t.parent));
      },
      Le = function (e) {
        return e._repeat ? Pe(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      Pe = function (e, t) {
        var i = Math.floor((e = fe(e / t)));
        return e && i === e ? i - 1 : i;
      },
      Oe = function (e, t) {
        return (
          (e - t._start) * t._ts +
          (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
      },
      Ie = function (e) {
        return (e._end = fe(
          e._start + (e._tDur / Math.abs(e._ts || e._rts || x) || 0),
        ));
      },
      Be = function (e, t) {
        var i = e._dp;
        return (
          i &&
            i.smoothChildTiming &&
            e._ts &&
            ((e._start = fe(
              i._time -
                (e._ts > 0
                  ? t / e._ts
                  : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
            )),
            Ie(e),
            i._dirty || Ae(i, e)),
          e
        );
      },
      Ne = function (e, t) {
        var i;
        if (
          ((t._time ||
            (!t._dur && t._initted) ||
            (t._start < e._time && (t._dur || !t.add))) &&
            ((i = Oe(e.rawTime(), t)),
            (!t._dur || Ue(0, t.totalDuration(), i) - t._tTime > x) &&
              t.render(i, !0)),
          Ae(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (i = e; i._dp; )
              i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
          e._zTime = -1e-8;
        }
      },
      Re = function (e, t, i, n) {
        return (
          t.parent && Me(t),
          (t._start = fe(
            (k(i) ? i : i || e !== s ? $e(e, i, t) : e._time) + t._delay,
          )),
          (t._end = fe(
            t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
          )),
          Te(e, t, "_first", "_last", e._sort ? "_start" : 0),
          Ye(t) || (e._recent = t),
          n || Ne(e, t),
          e._ts < 0 && Be(e, e._tTime),
          e
        );
      },
      ze = function (e, t) {
        return $.ScrollTrigger ? $.ScrollTrigger.create(t, e) : void 0;
      },
      qe = function (e, t, i, r, s) {
        return (
          Wt(e, t, s),
          e._initted
            ? !i &&
              e._pt &&
              !n &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              c !== Et.frame
              ? (ie.push(e), (e._lazy = [s, r]), 1)
              : void 0
            : 1
        );
      },
      Ve = function e(t) {
        var i = t.parent;
        return (
          i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e(i))
        );
      },
      Ye = function (e) {
        var t = e.data;
        return "isFromStart" === t || "isStart" === t;
      },
      He = function (e, t, i, n) {
        var r = e._repeat,
          s = fe(t) || 0,
          o = e._tTime / e._tDur;
        return (
          o && !n && (e._time *= s / e._dur),
          (e._dur = s),
          (e._tDur = r ? (r < 0 ? 1e10 : fe(s * (r + 1) + e._rDelay * r)) : s),
          o > 0 && !n && Be(e, (e._tTime = e._tDur * o)),
          e.parent && Ie(e),
          i || Ae(e.parent, e),
          e
        );
      },
      Xe = function (e) {
        return e instanceof zt ? Ae(e) : He(e, e._dur);
      },
      We = { _start: 0, endTime: K, totalDuration: K },
      $e = function e(t, i, n) {
        var r,
          s,
          o,
          a = t.labels,
          l = t._recent || We,
          u = t.duration() >= _ ? l.endTime(!1) : t._dur;
        return A(i) && (isNaN(i) || i in a)
          ? ((s = i.charAt(0)),
            (o = "%" === i.substr(-1)),
            (r = i.indexOf("=")),
            "<" === s || ">" === s
              ? (r >= 0 && (i = i.replace(/=/, "")),
                ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                  (parseFloat(i.substr(1)) || 0) *
                    (o ? (r < 0 ? l : n).totalDuration() / 100 : 1))
              : r < 0
                ? (i in a || (a[i] = u), a[i])
                : ((s = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
                  o && n && (s = (s / 100) * (R(n) ? n[0] : n).totalDuration()),
                  r > 1 ? e(t, i.substr(0, r - 1), n) + s : u + s))
          : null == i
            ? u
            : +i;
      },
      Ge = function (e, t, i) {
        var n,
          r,
          s = k(t[1]),
          o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
          a = t[o];
        if ((s && (a.duration = t[1]), (a.parent = i), e)) {
          for (n = a, r = i; r && !("immediateRender" in n); )
            (n = r.vars.defaults || {}), (r = O(r.vars.inherit) && r.parent);
          (a.immediateRender = O(n.immediateRender)),
            e < 2 ? (a.runBackwards = 1) : (a.startAt = t[o - 1]);
        }
        return new Qt(t[0], a, t[o + 1]);
      },
      je = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      Ue = function (e, t, i) {
        return i < e ? e : i > t ? t : i;
      },
      Qe = function (e, t) {
        return A(e) && (t = W.exec(e)) ? t[1] : "";
      },
      Ke = [].slice,
      Ze = function (e, t) {
        return (
          e &&
          P(e) &&
          "length" in e &&
          ((!t && !e.length) || (e.length - 1 in e && P(e[0]))) &&
          !e.nodeType &&
          e !== o
        );
      },
      Je = function (e, t, i) {
        return (
          void 0 === i && (i = []),
          e.forEach(function (e) {
            var n;
            return (A(e) && !t) || Ze(e, 1)
              ? (n = i).push.apply(n, et(e))
              : i.push(e);
          }) || i
        );
      },
      et = function (e, t, i) {
        return r && !t && r.selector
          ? r.selector(e)
          : !A(e) || i || (!a && St())
            ? R(e)
              ? Je(e, i)
              : Ze(e)
                ? Ke.call(e, 0)
                : e
                  ? [e]
                  : []
            : Ke.call((t || l).querySelectorAll(e), 0);
      },
      tt = function (e) {
        return (
          (e = et(e)[0] || U() || {}),
          function (t) {
            var i = e.current || e.nativeElement || e;
            return et(
              t,
              i.querySelectorAll
                ? i
                : i === e
                  ? U() || l.createElement("div")
                  : e,
            );
          }
        );
      },
      it = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      nt = function (e) {
        if (F(e)) return e;
        var t = P(e) ? e : { each: e },
          i = Lt(t.ease),
          n = t.from || 0,
          r = parseFloat(t.base) || 0,
          s = {},
          o = n > 0 && n < 1,
          a = isNaN(n) || o,
          l = t.axis,
          u = n,
          c = n;
        return (
          A(n)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
            : !o && a && ((u = n[0]), (c = n[1])),
          function (e, o, d) {
            var h,
              p,
              f,
              m,
              g,
              v,
              y,
              D,
              w,
              x = (d || t).length,
              b = s[x];
            if (!b) {
              if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, _])[1])) {
                for (
                  y = -_;
                  y < (y = d[w++].getBoundingClientRect().left) && w < x;

                );
                w < x && w--;
              }
              for (
                b = s[x] = [],
                  h = a ? Math.min(w, x) * u - 0.5 : n % w,
                  p = w === _ ? 0 : a ? (x * c) / w - 0.5 : (n / w) | 0,
                  y = 0,
                  D = _,
                  v = 0;
                v < x;
                v++
              )
                (f = (v % w) - h),
                  (m = p - ((v / w) | 0)),
                  (b[v] = g =
                    l ? Math.abs("y" === l ? m : f) : T(f * f + m * m)),
                  g > y && (y = g),
                  g < D && (D = g);
              "random" === n && it(b),
                (b.max = y - D),
                (b.min = D),
                (b.v = x =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (w > x
                        ? x - 1
                        : l
                          ? "y" === l
                            ? x / w
                            : w
                          : Math.max(w, x / w)) ||
                    0) * ("edges" === n ? -1 : 1)),
                (b.b = x < 0 ? r - x : r),
                (b.u = Qe(t.amount || t.each) || 0),
                (i = i && x < 0 ? Ft(i) : i);
            }
            return (
              (x = (b[e] - b.min) / b.max || 0),
              fe(b.b + (i ? i(x) : x) * b.v) + b.u
            );
          }
        );
      },
      rt = function (e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function (i) {
          var n = fe(Math.round(parseFloat(i) / e) * e * t);
          return (n - (n % 1)) / t + (k(i) ? 0 : Qe(i));
        };
      },
      st = function (e, t) {
        var i,
          n,
          r = R(e);
        return (
          !r &&
            P(e) &&
            ((i = r = e.radius || _),
            e.values
              ? ((e = et(e.values)), (n = !k(e[0])) && (i *= i))
              : (e = rt(e.increment))),
          je(
            t,
            r
              ? F(e)
                ? function (t) {
                    return (n = e(t)), Math.abs(n - t) <= i ? n : t;
                  }
                : function (t) {
                    for (
                      var r,
                        s,
                        o = parseFloat(n ? t.x : t),
                        a = parseFloat(n ? t.y : 0),
                        l = _,
                        u = 0,
                        c = e.length;
                      c--;

                    )
                      (r = n
                        ? (r = e[c].x - o) * r + (s = e[c].y - a) * s
                        : Math.abs(e[c] - o)) < l && ((l = r), (u = c));
                    return (
                      (u = !i || l <= i ? e[u] : t),
                      n || u === t || k(t) ? u : u + Qe(t)
                    );
                  }
              : rt(e),
          )
        );
      },
      ot = function (e, t, i, n) {
        return je(R(e) ? !t : !0 === i ? !!(i = 0) : !n, function () {
          return R(e)
            ? e[~~(Math.random() * e.length)]
            : (i = i || 1e-5) &&
                (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i,
                  ) *
                    i *
                    n,
                ) / n;
        });
      },
      at = function (e, t, i) {
        return je(i, function (i) {
          return e[~~t(i)];
        });
      },
      lt = function (e) {
        for (var t, i, n, r, s = 0, o = ""; ~(t = e.indexOf("random(", s)); )
          (n = e.indexOf(")", t)),
            (r = "[" === e.charAt(t + 7)),
            (i = e.substr(t + 7, n - t - 7).match(r ? X : z)),
            (o +=
              e.substr(s, t - s) +
              ot(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
            (s = n + 1);
        return o + e.substr(s, e.length - s);
      },
      ut = function (e, t, i, n, r) {
        var s = t - e,
          o = n - i;
        return je(r, function (t) {
          return i + (((t - e) / s) * o || 0);
        });
      },
      ct = function (e, t, i) {
        var n,
          r,
          s,
          o = e.labels,
          a = _;
        for (n in o)
          (r = o[n] - t) < 0 == !!i &&
            r &&
            a > (r = Math.abs(r)) &&
            ((s = n), (a = r));
        return s;
      },
      dt = function (e, t, i) {
        var n,
          s,
          o,
          a = e.vars,
          l = a[t],
          u = r,
          c = e._ctx;
        if (l)
          return (
            (n = a[t + "Params"]),
            (s = a.callbackScope || e),
            i && ie.length && ve(),
            c && (r = c),
            (o = n ? l.apply(s, n) : l.call(s)),
            (r = u),
            o
          );
      },
      ht = function (e) {
        return (
          Me(e),
          e.scrollTrigger && e.scrollTrigger.kill(!!n),
          e.progress() < 1 && dt(e, "onInterrupt"),
          e
        );
      },
      pt = [],
      ft = function (e) {
        if (e)
          if (((e = (!e.name && e.default) || e), I() || e.headless)) {
            var t = e.name,
              i = F(e),
              n =
                t && !i && e.init
                  ? function () {
                      this._props = [];
                    }
                  : e,
              r = {
                init: K,
                render: si,
                add: Ht,
                kill: ai,
                modifier: oi,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: ti,
                aliases: {},
                register: 0,
              };
            if ((St(), e !== n)) {
              if (re[t]) return;
              _e(n, _e(Ee(e, r), s)),
                xe(n.prototype, xe(r, Ee(e, s))),
                (re[(n.prop = t)] = n),
                e.targetTest && (ae.push(n), (te[t] = 1)),
                (t =
                  ("css" === t
                    ? "CSS"
                    : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
            }
            Q(t, n), e.register && e.register(bi, n, ci);
          } else pt.push(e);
      },
      mt = 255,
      gt = {
        aqua: [0, mt, mt],
        lime: [0, mt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, mt],
        navy: [0, 0, 128],
        white: [mt, mt, mt],
        olive: [128, 128, 0],
        yellow: [mt, mt, 0],
        orange: [mt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [mt, 0, 0],
        pink: [mt, 192, 203],
        cyan: [0, mt, mt],
        transparent: [mt, mt, mt, 0],
      },
      vt = function (e, t, i) {
        return (
          ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
            ? t + (i - t) * e * 6
            : e < 0.5
              ? i
              : 3 * e < 2
                ? t + (i - t) * (2 / 3 - e) * 6
                : t) *
            mt +
            0.5) |
          0
        );
      },
      yt = function (e, t, i) {
        var n,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          p = e ? (k(e) ? [e >> 16, (e >> 8) & mt, e & mt] : 0) : gt.black;
        if (!p) {
          if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gt[e]))
            p = gt[e];
          else if ("#" === e.charAt(0)) {
            if (
              (e.length < 6 &&
                ((n = e.charAt(1)),
                (r = e.charAt(2)),
                (s = e.charAt(3)),
                (e =
                  "#" +
                  n +
                  n +
                  r +
                  r +
                  s +
                  s +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
              9 === e.length)
            )
              return [
                (p = parseInt(e.substr(1, 6), 16)) >> 16,
                (p >> 8) & mt,
                p & mt,
                parseInt(e.substr(7), 16) / 255,
              ];
            p = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & mt, e & mt];
          } else if ("hsl" === e.substr(0, 3))
            if (((p = h = e.match(z)), t)) {
              if (~e.indexOf("="))
                return (p = e.match(q)), i && p.length < 4 && (p[3] = 1), p;
            } else
              (o = (+p[0] % 360) / 360),
                (a = +p[1] / 100),
                (n =
                  2 * (l = +p[2] / 100) -
                  (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                p.length > 3 && (p[3] *= 1),
                (p[0] = vt(o + 1 / 3, n, r)),
                (p[1] = vt(o, n, r)),
                (p[2] = vt(o - 1 / 3, n, r));
          else p = e.match(z) || gt.transparent;
          p = p.map(Number);
        }
        return (
          t &&
            !h &&
            ((n = p[0] / mt),
            (r = p[1] / mt),
            (s = p[2] / mt),
            (l = ((u = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2),
            u === c
              ? (o = a = 0)
              : ((d = u - c),
                (a = l > 0.5 ? d / (2 - u - c) : d / (u + c)),
                (o =
                  u === n
                    ? (r - s) / d + (r < s ? 6 : 0)
                    : u === r
                      ? (s - n) / d + 2
                      : (n - r) / d + 4),
                (o *= 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * l + 0.5))),
          i && p.length < 4 && (p[3] = 1),
          p
        );
      },
      Dt = function (e) {
        var t = [],
          i = [],
          n = -1;
        return (
          e.split(_t).forEach(function (e) {
            var r = e.match(V) || [];
            t.push.apply(t, r), i.push((n += r.length + 1));
          }),
          (t.c = i),
          t
        );
      },
      wt = function (e, t, i) {
        var n,
          r,
          s,
          o,
          a = "",
          l = (e + a).match(_t),
          u = t ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return e;
        if (
          ((l = l.map(function (e) {
            return (
              (e = yt(e, t, 1)) &&
              u +
                (t
                  ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                  : e.join(",")) +
                ")"
            );
          })),
          i && ((s = Dt(e)), (n = i.c).join(a) !== s.c.join(a)))
        )
          for (o = (r = e.replace(_t, "1").split(V)).length - 1; c < o; c++)
            a +=
              r[c] +
              (~n.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (s.length ? s : l.length ? l : i).shift());
        if (!r)
          for (o = (r = e.split(_t)).length - 1; c < o; c++) a += r[c] + l[c];
        return a + r[o];
      },
      _t = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in gt) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      xt = /hsl[a]?\(/,
      bt = function (e) {
        var t,
          i = e.join(" ");
        if (((_t.lastIndex = 0), _t.test(i)))
          return (
            (t = xt.test(i)),
            (e[1] = wt(e[1], t)),
            (e[0] = wt(e[0], t, Dt(e[1]))),
            !0
          );
      },
      Et = (function () {
        var e,
          t,
          i,
          n,
          r,
          s,
          c = Date.now,
          d = 500,
          p = 33,
          f = c(),
          m = f,
          g = 1e3 / 240,
          v = g,
          y = [],
          D = function i(o) {
            var a,
              l,
              u,
              h,
              D = c() - m,
              w = !0 === o;
            if (
              ((D > d || D < 0) && (f += D - p),
              ((a = (u = (m += D) - f) - v) > 0 || w) &&
                ((h = ++n.frame),
                (r = u - 1e3 * n.time),
                (n.time = u /= 1e3),
                (v += a + (a >= g ? 4 : g - a)),
                (l = 1)),
              w || (e = t(i)),
              l)
            )
              for (s = 0; s < y.length; s++) y[s](u, r, h, o);
          };
        return (
          (n = {
            time: 0,
            frame: 0,
            tick: function () {
              D(!0);
            },
            deltaRatio: function (e) {
              return r / (1e3 / (e || 60));
            },
            wake: function () {
              u &&
                (!a &&
                  I() &&
                  ((o = a = window),
                  (l = o.document || {}),
                  ($.gsap = bi),
                  (o.gsapVersions || (o.gsapVersions = [])).push(bi.version),
                  j(G || o.GreenSockGlobals || (!o.gsap && o) || {}),
                  pt.forEach(ft)),
                (i =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                e && n.sleep(),
                (t =
                  i ||
                  function (e) {
                    return setTimeout(e, (v - 1e3 * n.time + 1) | 0);
                  }),
                (h = 1),
                D(2));
            },
            sleep: function () {
              (i ? cancelAnimationFrame : clearTimeout)(e), (h = 0), (t = K);
            },
            lagSmoothing: function (e, t) {
              (d = e || 1 / 0), (p = Math.min(t || 33, d));
            },
            fps: function (e) {
              (g = 1e3 / (e || 240)), (v = 1e3 * n.time + g);
            },
            add: function (e, t, i) {
              var r = t
                ? function (t, i, s, o) {
                    e(t, i, s, o), n.remove(r);
                  }
                : e;
              return n.remove(e), y[i ? "unshift" : "push"](r), St(), r;
            },
            remove: function (e, t) {
              ~(t = y.indexOf(e)) && y.splice(t, 1) && s >= t && s--;
            },
            _listeners: y,
          }),
          n
        );
      })(),
      St = function () {
        return !h && Et.wake();
      },
      Tt = {},
      Ct = /^[\d.\-M][\d.\-,\s]/,
      Mt = /["']/g,
      At = function (e) {
        for (
          var t,
            i,
            n,
            r = {},
            s = e.substr(1, e.length - 3).split(":"),
            o = s[0],
            a = 1,
            l = s.length;
          a < l;
          a++
        )
          (i = s[a]),
            (t = a !== l - 1 ? i.lastIndexOf(",") : i.length),
            (n = i.substr(0, t)),
            (r[o] = isNaN(n) ? n.replace(Mt, "").trim() : +n),
            (o = i.substr(t + 1).trim());
        return r;
      },
      Ft = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      kt = function e(t, i) {
        for (var n, r = t._first; r; )
          r instanceof zt
            ? e(r, i)
            : !r.vars.yoyoEase ||
              (r._yoyo && r._repeat) ||
              r._yoyo === i ||
              (r.timeline
                ? e(r.timeline, i)
                : ((n = r._ease),
                  (r._ease = r._yEase),
                  (r._yEase = n),
                  (r._yoyo = i))),
            (r = r._next);
      },
      Lt = function (e, t) {
        return (
          (e &&
            (F(e)
              ? e
              : Tt[e] ||
                (function (e) {
                  var t,
                    i,
                    n,
                    r,
                    s = (e + "").split("("),
                    o = Tt[s[0]];
                  return o && s.length > 1 && o.config
                    ? o.config.apply(
                        null,
                        ~e.indexOf("{")
                          ? [At(s[1])]
                          : ((t = e),
                            (i = t.indexOf("(") + 1),
                            (n = t.indexOf(")")),
                            (r = t.indexOf("(", i)),
                            t.substring(
                              i,
                              ~r && r < n ? t.indexOf(")", n + 1) : n,
                            ))
                              .split(",")
                              .map(De),
                      )
                    : Tt._CE && Ct.test(e)
                      ? Tt._CE("", e)
                      : o;
                })(e))) ||
          t
        );
      },
      Pt = function (e, t, i, n) {
        void 0 === i &&
          (i = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === n &&
            (n = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
        var r,
          s = { easeIn: t, easeOut: i, easeInOut: n };
        return (
          he(e, function (e) {
            for (var t in ((Tt[e] = $[e] = s),
            (Tt[(r = e.toLowerCase())] = i),
            s))
              Tt[
                r +
                  ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
              ] = Tt[e + "." + t] = s[t];
          }),
          s
        );
      },
      Ot = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      },
      It = function e(t, i, n) {
        var r = i >= 1 ? i : 1,
          s = (n || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1),
          o = (s / b) * (Math.asin(1 / r) || 0),
          a = function (e) {
            return 1 === e ? 1 : r * Math.pow(2, -10 * e) * M((e - o) * s) + 1;
          },
          l =
            "out" === t
              ? a
              : "in" === t
                ? function (e) {
                    return 1 - a(1 - e);
                  }
                : Ot(a);
        return (
          (s = b / s),
          (l.config = function (i, n) {
            return e(t, i, n);
          }),
          l
        );
      },
      Bt = function e(t, i) {
        void 0 === i && (i = 1.70158);
        var n = function (e) {
            return e ? --e * e * ((i + 1) * e + i) + 1 : 0;
          },
          r =
            "out" === t
              ? n
              : "in" === t
                ? function (e) {
                    return 1 - n(1 - e);
                  }
                : Ot(n);
        return (
          (r.config = function (i) {
            return e(t, i);
          }),
          r
        );
      };
    he("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var i = t < 5 ? t + 1 : t;
      Pt(
        e + ",Power" + (i - 1),
        t
          ? function (e) {
              return Math.pow(e, i);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, i);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, i) / 2
            : 1 - Math.pow(2 * (1 - e), i) / 2;
        },
      );
    }),
      (Tt.Linear.easeNone = Tt.none = Tt.Linear.easeIn),
      Pt("Elastic", It("in"), It("out"), It()),
      (p = 7.5625),
      (g = 2 * (m = 1 / (f = 2.75))),
      (v = 2.5 * m),
      Pt(
        "Bounce",
        function (e) {
          return 1 - y(1 - e);
        },
        (y = function (e) {
          return e < m
            ? p * e * e
            : e < g
              ? p * Math.pow(e - 1.5 / f, 2) + 0.75
              : e < v
                ? p * (e -= 2.25 / f) * e + 0.9375
                : p * Math.pow(e - 2.625 / f, 2) + 0.984375;
        }),
      ),
      Pt("Expo", function (e) {
        return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
      }),
      Pt("Circ", function (e) {
        return -(T(1 - e * e) - 1);
      }),
      Pt("Sine", function (e) {
        return 1 === e ? 1 : 1 - C(e * E);
      }),
      Pt("Back", Bt("in"), Bt("out"), Bt()),
      (Tt.SteppedEase =
        Tt.steps =
        $.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var i = 1 / e,
                n = e + (t ? 0 : 1),
                r = t ? 1 : 0;
              return function (e) {
                return (((n * Ue(0, 0.99999999, e)) | 0) + r) * i;
              };
            },
          }),
      (w.ease = Tt["quad.out"]),
      he(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (le += e + "," + e + "Params,");
        },
      );
    var Nt = function (e, t) {
        (this.id = S++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : de),
          (this.set = t ? t.getSetter : ti);
      },
      Rt = (function () {
        function e(e) {
          (this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0),
              (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            He(this, +e.duration, 1, 1),
            (this.data = e.data),
            r && ((this._ctx = r), r.data.push(this)),
            h || Et.wake();
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                He(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((St(), !arguments.length)) return this._tTime;
            var i = this._dp;
            if (i && i.smoothChildTiming && this._ts) {
              for (
                Be(this, e), !i._dp || i.parent || Ne(i, this);
                i && i.parent;

              )
                i.parent._time !==
                  i._start +
                    (i._ts >= 0
                      ? i._tTime / i._ts
                      : (i.totalDuration() - i._tTime) / -i._ts) &&
                  i.totalTime(i._tTime, !0),
                  (i = i.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Re(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === x) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), ye(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + Le(this)) %
                    (this._dur + this._rDelay) || (e ? this._dur : 0),
                  t,
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                  ? 1
                  : 0;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                    Le(this),
                  t,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                  ? 1
                  : 0;
          }),
          (t.iteration = function (e, t) {
            var i = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * i, t)
              : this._repeat
                ? Pe(this._tTime, i) + 1
                : 1;
          }),
          (t.timeScale = function (e, t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === e) return this;
            var i =
              this.parent && this._ts
                ? Oe(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
              this.totalTime(
                Ue(-Math.abs(this._delay), this._tDur, i),
                !1 !== t,
              ),
              Ie(this),
              (function (e) {
                for (var t = e.parent; t && t.parent; )
                  (t._dirty = 1), t.totalDuration(), (t = t.parent);
                return e;
              })(this)
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (St(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          Math.abs(this._zTime) !== x &&
                          (this._tTime -= x),
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && Re(t, this, e - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (O(e) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? Oe(t.rawTime(e), this)
                  : this._tTime
              : this._tTime;
          }),
          (t.revert = function (e) {
            void 0 === e && (e = ee);
            var t = n;
            return (
              (n = e),
              (this._initted || this._startAt) &&
                (this.timeline && this.timeline.revert(e),
                this.totalTime(-0.01, e.suppressEvents)),
              "nested" !== this.data && !1 !== e.kill && this.kill(),
              (n = t),
              this
            );
          }),
          (t.globalTime = function (e) {
            for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
              (i = t._start + i / (Math.abs(t._ts) || 1)), (t = t._dp);
            return !this.parent && this._sat ? this._sat.globalTime(e) : i;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Xe(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            if (arguments.length) {
              var t = this._time;
              return (this._rDelay = e), Xe(this), t ? this.time(t) : this;
            }
            return this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime($e(this, e), O(t));
          }),
          (t.restart = function (e, t) {
            return (
              this.play().totalTime(e ? -this._delay : 0, O(t)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() &&
                  this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              i = this._start;
            return !(
              t &&
              !(
                this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= i &&
                e < this.endTime(!0) - x
              )
            );
          }),
          (t.eventCallback = function (e, t, i) {
            var n = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((n[e] = t),
                    i && (n[e + "Params"] = i),
                    "onUpdate" === e && (this._onUpdate = t))
                  : delete n[e],
                this)
              : n[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (i) {
              var n = F(e) ? e : we,
                r = function () {
                  var e = t.then;
                  (t.then = null),
                    F(n) && (n = n(t)) && (n.then || n === t) && (t.then = e),
                    i(n),
                    (t.then = e);
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
              (!t._tTime && t._ts < 0)
                ? r()
                : (t._prom = r);
            });
          }),
          (t.kill = function () {
            ht(this);
          }),
          e
        );
      })();
    _e(Rt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var zt = (function (i) {
      function r(t, n) {
        var r;
        return (
          void 0 === t && (t = {}),
          ((r = i.call(this, t) || this).labels = {}),
          (r.smoothChildTiming = !!t.smoothChildTiming),
          (r.autoRemoveChildren = !!t.autoRemoveChildren),
          (r._sort = O(t.sortChildren)),
          s && Re(t.parent || s, e(r), n),
          t.reversed && r.reverse(),
          t.paused && r.paused(!0),
          t.scrollTrigger && ze(e(r), t.scrollTrigger),
          r
        );
      }
      t(r, i);
      var o = r.prototype;
      return (
        (o.to = function (e, t, i) {
          return Ge(0, arguments, this), this;
        }),
        (o.from = function (e, t, i) {
          return Ge(1, arguments, this), this;
        }),
        (o.fromTo = function (e, t, i, n) {
          return Ge(2, arguments, this), this;
        }),
        (o.set = function (e, t, i) {
          return (
            (t.duration = 0),
            (t.parent = this),
            Se(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new Qt(e, t, $e(this, i), 1),
            this
          );
        }),
        (o.call = function (e, t, i) {
          return Re(this, Qt.delayedCall(0, e, t), i);
        }),
        (o.staggerTo = function (e, t, i, n, r, s, o) {
          return (
            (i.duration = t),
            (i.stagger = i.stagger || n),
            (i.onComplete = s),
            (i.onCompleteParams = o),
            (i.parent = this),
            new Qt(e, i, $e(this, r)),
            this
          );
        }),
        (o.staggerFrom = function (e, t, i, n, r, s, o) {
          return (
            (i.runBackwards = 1),
            (Se(i).immediateRender = O(i.immediateRender)),
            this.staggerTo(e, t, i, n, r, s, o)
          );
        }),
        (o.staggerFromTo = function (e, t, i, n, r, s, o, a) {
          return (
            (n.startAt = i),
            (Se(n).immediateRender = O(n.immediateRender)),
            this.staggerTo(e, t, n, r, s, o, a)
          );
        }),
        (o.render = function (e, t, i) {
          var r,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            m,
            g,
            v = this._time,
            y = this._dirty ? this.totalDuration() : this._tDur,
            D = this._dur,
            w = e <= 0 ? 0 : fe(e),
            _ = this._zTime < 0 != e < 0 && (this._initted || !D);
          if (
            (this !== s && w > y && e >= 0 && (w = y),
            w !== this._tTime || i || _)
          ) {
            if (
              (v !== this._time &&
                D &&
                ((w += this._time - v), (e += this._time - v)),
              (r = w),
              (p = this._start),
              (c = !(h = this._ts)),
              _ && (D || (v = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((m = this._yoyo),
                (u = D + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * u + e, t, i);
              if (
                ((r = fe(w % u)),
                w === y
                  ? ((l = this._repeat), (r = D))
                  : ((l = ~~(f = fe(w / u))) && l === f && ((r = D), l--),
                    r > D && (r = D)),
                (f = Pe(this._tTime, u)),
                !v &&
                  this._tTime &&
                  f !== l &&
                  this._tTime - f * u - this._dur <= 0 &&
                  (f = l),
                m && 1 & l && ((r = D - r), (g = 1)),
                l !== f && !this._lock)
              ) {
                var b = m && 1 & f,
                  E = b === (m && 1 & l);
                if (
                  (l < f && (b = !b),
                  (v = b ? 0 : w % D ? D : w),
                  (this._lock = 1),
                  (this.render(v || (g ? 0 : fe(l * u)), t, !D)._lock = 0),
                  (this._tTime = w),
                  !t && this.parent && dt(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                  (v && v !== this._time) ||
                    c !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((D = this._dur),
                  (y = this._tDur),
                  E &&
                    ((this._lock = 2),
                    (v = b ? D : -1e-4),
                    this.render(v, !0),
                    this.vars.repeatRefresh && !g && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !c)
                )
                  return this;
                kt(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                ((d = (function (e, t, i) {
                  var n;
                  if (i > t)
                    for (n = e._first; n && n._start <= i; ) {
                      if ("isPause" === n.data && n._start > t) return n;
                      n = n._next;
                    }
                  else
                    for (n = e._last; n && n._start >= i; ) {
                      if ("isPause" === n.data && n._start < t) return n;
                      n = n._prev;
                    }
                })(this, fe(v), fe(r))),
                d && (w -= r - (r = d._start))),
              (this._tTime = w),
              (this._time = r),
              (this._act = !h),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (v = 0)),
              !v && r && !t && !l && (dt(this, "onStart"), this._tTime !== w))
            )
              return this;
            if (r >= v && e >= 0)
              for (o = this._first; o; ) {
                if (
                  ((a = o._next), (o._act || r >= o._start) && o._ts && d !== o)
                ) {
                  if (o.parent !== this) return this.render(e, t, i);
                  if (
                    (o.render(
                      o._ts > 0
                        ? (r - o._start) * o._ts
                        : (o._dirty ? o.totalDuration() : o._tDur) +
                            (r - o._start) * o._ts,
                      t,
                      i,
                    ),
                    r !== this._time || (!this._ts && !c))
                  ) {
                    (d = 0), a && (w += this._zTime = -1e-8);
                    break;
                  }
                }
                o = a;
              }
            else {
              o = this._last;
              for (var S = e < 0 ? e : r; o; ) {
                if (
                  ((a = o._prev), (o._act || S <= o._end) && o._ts && d !== o)
                ) {
                  if (o.parent !== this) return this.render(e, t, i);
                  if (
                    (o.render(
                      o._ts > 0
                        ? (S - o._start) * o._ts
                        : (o._dirty ? o.totalDuration() : o._tDur) +
                            (S - o._start) * o._ts,
                      t,
                      i || (n && (o._initted || o._startAt)),
                    ),
                    r !== this._time || (!this._ts && !c))
                  ) {
                    (d = 0), a && (w += this._zTime = S ? -1e-8 : x);
                    break;
                  }
                }
                o = a;
              }
            }
            if (
              d &&
              !t &&
              (this.pause(),
              (d.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1),
              this._ts)
            )
              return (this._start = p), Ie(this), this.render(e, t, i);
            this._onUpdate && !t && dt(this, "onUpdate", !0),
              ((w === y && this._tTime >= this.totalDuration()) || (!w && v)) &&
                ((p !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !D) &&
                    ((w === y && this._ts > 0) || (!w && this._ts < 0)) &&
                    Me(this, 1),
                  t ||
                    (e < 0 && !v) ||
                    (!w && !v && y) ||
                    (dt(
                      this,
                      w === y && e >= 0 ? "onComplete" : "onReverseComplete",
                      !0,
                    ),
                    this._prom &&
                      !(w < y && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (o.add = function (e, t) {
          var i = this;
          if ((k(t) || (t = $e(this, t, e)), !(e instanceof Rt))) {
            if (R(e))
              return (
                e.forEach(function (e) {
                  return i.add(e, t);
                }),
                this
              );
            if (A(e)) return this.addLabel(e, t);
            if (!F(e)) return this;
            e = Qt.delayedCall(0, e);
          }
          return this !== e ? Re(this, e, t) : this;
        }),
        (o.getChildren = function (e, t, i, n) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === i && (i = !0),
            void 0 === n && (n = -_);
          for (var r = [], s = this._first; s; )
            s._start >= n &&
              (s instanceof Qt
                ? t && r.push(s)
                : (i && r.push(s),
                  e && r.push.apply(r, s.getChildren(!0, t, i)))),
              (s = s._next);
          return r;
        }),
        (o.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
            if (t[i].vars.id === e) return t[i];
        }),
        (o.remove = function (e) {
          return A(e)
            ? this.removeLabel(e)
            : F(e)
              ? this.killTweensOf(e)
              : (e.parent === this && Ce(this, e),
                e === this._recent && (this._recent = this._last),
                Ae(this));
        }),
        (o.totalTime = function (e, t) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = fe(
                  Et.time -
                    (this._ts > 0
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              i.prototype.totalTime.call(this, e, t),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (o.addLabel = function (e, t) {
          return (this.labels[e] = $e(this, t)), this;
        }),
        (o.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (o.addPause = function (e, t, i) {
          var n = Qt.delayedCall(0, t || K, i);
          return (
            (n.data = "isPause"), (this._hasPause = 1), Re(this, n, $e(this, e))
          );
        }),
        (o.removePause = function (e) {
          var t = this._first;
          for (e = $e(this, e); t; )
            t._start === e && "isPause" === t.data && Me(t), (t = t._next);
        }),
        (o.killTweensOf = function (e, t, i) {
          for (var n = this.getTweensOf(e, i), r = n.length; r--; )
            qt !== n[r] && n[r].kill(e, t);
          return this;
        }),
        (o.getTweensOf = function (e, t) {
          for (var i, n = [], r = et(e), s = this._first, o = k(t); s; )
            s instanceof Qt
              ? ge(s._targets, r) &&
                (o
                  ? (!qt || (s._initted && s._ts)) &&
                    s.globalTime(0) <= t &&
                    s.globalTime(s.totalDuration()) > t
                  : !t || s.isActive()) &&
                n.push(s)
              : (i = s.getTweensOf(r, t)).length && n.push.apply(n, i),
              (s = s._next);
          return n;
        }),
        (o.tweenTo = function (e, t) {
          t = t || {};
          var i,
            n = this,
            r = $e(n, e),
            s = t,
            o = s.startAt,
            a = s.onStart,
            l = s.onStartParams,
            u = s.immediateRender,
            c = Qt.to(
              n,
              _e(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: r,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs(
                      (r - (o && "time" in o ? o.time : n._time)) /
                        n.timeScale(),
                    ) ||
                    x,
                  onStart: function () {
                    if ((n.pause(), !i)) {
                      var e =
                        t.duration ||
                        Math.abs(
                          (r - (o && "time" in o ? o.time : n._time)) /
                            n.timeScale(),
                        );
                      c._dur !== e && He(c, e, 0, 1).render(c._time, !0, !0),
                        (i = 1);
                    }
                    a && a.apply(c, l || []);
                  },
                },
                t,
              ),
            );
          return u ? c.render(0) : c;
        }),
        (o.tweenFromTo = function (e, t, i) {
          return this.tweenTo(t, _e({ startAt: { time: $e(this, e) } }, i));
        }),
        (o.recent = function () {
          return this._recent;
        }),
        (o.nextLabel = function (e) {
          return void 0 === e && (e = this._time), ct(this, $e(this, e));
        }),
        (o.previousLabel = function (e) {
          return void 0 === e && (e = this._time), ct(this, $e(this, e), 1);
        }),
        (o.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + x);
        }),
        (o.shiftChildren = function (e, t, i) {
          void 0 === i && (i = 0);
          for (var n, r = this._first, s = this.labels; r; )
            r._start >= i && ((r._start += e), (r._end += e)), (r = r._next);
          if (t) for (n in s) s[n] >= i && (s[n] += e);
          return Ae(this);
        }),
        (o.invalidate = function (e) {
          var t = this._first;
          for (this._lock = 0; t; ) t.invalidate(e), (t = t._next);
          return i.prototype.invalidate.call(this, e);
        }),
        (o.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, i = this._first; i; )
            (t = i._next), this.remove(i), (i = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            Ae(this)
          );
        }),
        (o.totalDuration = function (e) {
          var t,
            i,
            n,
            r = 0,
            o = this,
            a = o._last,
            l = _;
          if (arguments.length)
            return o.timeScale(
              (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                (o.reversed() ? -e : e),
            );
          if (o._dirty) {
            for (n = o.parent; a; )
              (t = a._prev),
                a._dirty && a.totalDuration(),
                (i = a._start) > l && o._sort && a._ts && !o._lock
                  ? ((o._lock = 1), (Re(o, a, i - a._delay, 1)._lock = 0))
                  : (l = i),
                i < 0 &&
                  a._ts &&
                  ((r -= i),
                  ((!n && !o._dp) || (n && n.smoothChildTiming)) &&
                    ((o._start += i / o._ts), (o._time -= i), (o._tTime -= i)),
                  o.shiftChildren(-i, !1, -Infinity),
                  (l = 0)),
                a._end > r && a._ts && (r = a._end),
                (a = t);
            He(o, o === s && o._time > r ? o._time : r, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (r.updateRoot = function (e) {
          if ((s._ts && (ye(s, Oe(e, s)), (c = Et.frame)), Et.frame >= oe)) {
            oe += D.autoSleep || 120;
            var t = s._first;
            if ((!t || !t._ts) && D.autoSleep && Et._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || Et.sleep();
            }
          }
        }),
        r
      );
    })(Rt);
    _e(zt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var qt,
      Vt,
      Yt = function (e, t, i, n, r, s, o) {
        var a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m = new ci(this._pt, e, t, 0, 1, ri, null, r),
          g = 0,
          v = 0;
        for (
          m.b = i,
            m.e = n,
            i += "",
            (p = ~(n += "").indexOf("random(")) && (n = lt(n)),
            s && (s((f = [i, n]), e, t), (i = f[0]), (n = f[1])),
            l = i.match(Y) || [];
          (a = Y.exec(n));

        )
          (c = a[0]),
            (d = n.substring(g, a.index)),
            u ? (u = (u + 1) % 5) : "rgba(" === d.substr(-5) && (u = 1),
            c !== l[v++] &&
              ((h = parseFloat(l[v - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: d || 1 === v ? d : ",",
                s: h,
                c: "=" === c.charAt(1) ? me(h, c) - h : parseFloat(c) - h,
                m: u && u < 4 ? Math.round : 0,
              }),
              (g = Y.lastIndex));
        return (
          (m.c = g < n.length ? n.substring(g, n.length) : ""),
          (m.fp = o),
          (H.test(n) || p) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      Ht = function (e, t, i, n, r, s, o, a, l, u) {
        F(n) && (n = n(r || 0, e, s));
        var c,
          d = e[t],
          h =
            "get" !== i
              ? i
              : F(d)
                ? l
                  ? e[
                      t.indexOf("set") || !F(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](l)
                  : e[t]()
                : d,
          p = F(d) ? (l ? Jt : Zt) : Kt;
        if (
          (A(n) &&
            (~n.indexOf("random(") && (n = lt(n)),
            "=" === n.charAt(1) &&
              ((c = me(h, n) + (Qe(h) || 0)) || 0 === c) &&
              (n = c)),
          !u || h !== n || Vt)
        )
          return isNaN(h * n) || "" === n
            ? Yt.call(this, e, t, h, n, p, a || D.stringFilter, l)
            : ((c = new ci(
                this._pt,
                e,
                t,
                +h || 0,
                n - (h || 0),
                "boolean" == typeof d ? ni : ii,
                0,
                p,
              )),
              l && (c.fp = l),
              o && c.modifier(o, this, e),
              (this._pt = c));
      },
      Xt = function (e, t, i, n, r, s) {
        var o, a, l, u;
        if (
          re[e] &&
          !1 !==
            (o = new re[e]()).init(
              r,
              o.rawVars
                ? t[e]
                : (function (e, t, i, n, r) {
                    if (
                      (F(e) && (e = Gt(e, r, t, i, n)),
                      !P(e) || (e.style && e.nodeType) || R(e) || N(e))
                    )
                      return A(e) ? Gt(e, r, t, i, n) : e;
                    var s,
                      o = {};
                    for (s in e) o[s] = Gt(e[s], r, t, i, n);
                    return o;
                  })(t[e], n, r, s, i),
              i,
              n,
              s,
            ) &&
          ((i._pt = a = new ci(i._pt, r, e, 0, 1, o.render, o, 0, o.priority)),
          i !== d)
        )
          for (
            l = i._ptLookup[i._targets.indexOf(r)], u = o._props.length;
            u--;

          )
            l[o._props[u]] = a;
        return o;
      },
      Wt = function e(t, r, o) {
        var a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          D,
          b = t.vars,
          E = b.ease,
          S = b.startAt,
          T = b.immediateRender,
          C = b.lazy,
          M = b.onUpdate,
          A = b.runBackwards,
          F = b.yoyoEase,
          k = b.keyframes,
          L = b.autoRevert,
          P = t._dur,
          I = t._startAt,
          B = t._targets,
          N = t.parent,
          R = N && "nested" === N.data ? N.vars.targets : B,
          z = "auto" === t._overwrite && !i,
          q = t.timeline;
        if (
          (q && (!k || !E) && (E = "none"),
          (t._ease = Lt(E, w.ease)),
          (t._yEase = F ? Ft(Lt(!0 === F ? E : F, w.ease)) : 0),
          F &&
            t._yoyo &&
            !t._repeat &&
            ((F = t._yEase), (t._yEase = t._ease), (t._ease = F)),
          (t._from = !q && !!b.runBackwards),
          !q || (k && !b.stagger))
        ) {
          if (
            ((y = (f = B[0] ? ce(B[0]).harness : 0) && b[f.prop]),
            (a = Ee(b, te)),
            I &&
              (I._zTime < 0 && I.progress(1),
              r < 0 && A && T && !L
                ? I.render(-1, !0)
                : I.revert(A && P ? J : Z),
              (I._lazy = 0)),
            S)
          ) {
            if (
              (Me(
                (t._startAt = Qt.set(
                  B,
                  _e(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: N,
                      immediateRender: !0,
                      lazy: !I && O(C),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        M &&
                        function () {
                          return dt(t, "onUpdate");
                        },
                      stagger: 0,
                    },
                    S,
                  ),
                )),
              ),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              r < 0 && (n || (!T && !L)) && t._startAt.revert(J),
              T && P && r <= 0 && o <= 0)
            )
              return void (r && (t._zTime = r));
          } else if (A && P && !I)
            if (
              (r && (T = !1),
              (u = _e(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: T && !I && O(C),
                  immediateRender: T,
                  stagger: 0,
                  parent: N,
                },
                a,
              )),
              y && (u[f.prop] = y),
              Me((t._startAt = Qt.set(B, u))),
              (t._startAt._dp = 0),
              (t._startAt._sat = t),
              r < 0 && (n ? t._startAt.revert(J) : t._startAt.render(-1, !0)),
              (t._zTime = r),
              T)
            ) {
              if (!r) return;
            } else e(t._startAt, x, x);
          for (
            t._pt = t._ptCache = 0, C = (P && O(C)) || (C && !P), l = 0;
            l < B.length;
            l++
          ) {
            if (
              ((p = (d = B[l])._gsap || ue(B)[l]._gsap),
              (t._ptLookup[l] = g = {}),
              ne[p.id] && ie.length && ve(),
              (v = R === B ? l : R.indexOf(d)),
              f &&
                !1 !== (m = new f()).init(d, y || a, t, v, R) &&
                ((t._pt = c =
                  new ci(t._pt, d, m.name, 0, 1, m.render, m, 0, m.priority)),
                m._props.forEach(function (e) {
                  g[e] = c;
                }),
                m.priority && (h = 1)),
              !f || y)
            )
              for (u in a)
                re[u] && (m = Xt(u, a, t, v, d, R))
                  ? m.priority && (h = 1)
                  : (g[u] = c =
                      Ht.call(t, d, u, "get", a[u], v, R, 0, b.stringFilter));
            t._op && t._op[l] && t.kill(d, t._op[l]),
              z &&
                t._pt &&
                ((qt = t),
                s.killTweensOf(d, g, t.globalTime(r)),
                (D = !t.parent),
                (qt = 0)),
              t._pt && C && (ne[p.id] = 1);
          }
          h && ui(t), t._onInit && t._onInit(t);
        }
        (t._onUpdate = M),
          (t._initted = (!t._op || t._pt) && !D),
          k && r <= 0 && q.render(_, !0, !0);
      },
      $t = function (e, t, i, n) {
        var r,
          s,
          o = t.ease || n || "power1.inOut";
        if (R(t))
          (s = i[e] || (i[e] = [])),
            t.forEach(function (e, i) {
              return s.push({ t: (i / (t.length - 1)) * 100, v: e, e: o });
            });
        else
          for (r in t)
            (s = i[r] || (i[r] = [])),
              "ease" === r || s.push({ t: parseFloat(e), v: t[r], e: o });
      },
      Gt = function (e, t, i, n, r) {
        return F(e)
          ? e.call(t, i, n, r)
          : A(e) && ~e.indexOf("random(")
            ? lt(e)
            : e;
      },
      jt = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Ut = {};
    he(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
      return (Ut[e] = 1);
    });
    var Qt = (function (r) {
      function o(t, n, o, a) {
        var l;
        "number" == typeof n && ((o.duration = n), (n = o), (o = null));
        var u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v = (l = r.call(this, a ? n : Se(n)) || this).vars,
          y = v.duration,
          w = v.delay,
          _ = v.immediateRender,
          x = v.stagger,
          b = v.overwrite,
          E = v.keyframes,
          S = v.defaults,
          T = v.scrollTrigger,
          C = v.yoyoEase,
          M = n.parent || s,
          A = (R(t) || N(t) ? k(t[0]) : "length" in n) ? [t] : et(t);
        if (
          ((l._targets = A.length ? ue(A) : U(0, !D.nullTargetWarn) || []),
          (l._ptLookup = []),
          (l._overwrite = b),
          E || x || B(y) || B(w))
        ) {
          if (
            ((n = l.vars),
            (u = l.timeline =
              new zt({
                data: "nested",
                defaults: S || {},
                targets: M && "nested" === M.data ? M.vars.targets : A,
              })).kill(),
            (u.parent = u._dp = e(l)),
            (u._start = 0),
            x || B(y) || B(w))
          ) {
            if (((h = A.length), (m = x && nt(x)), P(x)))
              for (p in x) ~jt.indexOf(p) && (g || (g = {}), (g[p] = x[p]));
            for (c = 0; c < h; c++)
              ((d = Ee(n, Ut)).stagger = 0),
                C && (d.yoyoEase = C),
                g && xe(d, g),
                (f = A[c]),
                (d.duration = +Gt(y, e(l), c, f, A)),
                (d.delay = (+Gt(w, e(l), c, f, A) || 0) - l._delay),
                !x &&
                  1 === h &&
                  d.delay &&
                  ((l._delay = w = d.delay), (l._start += w), (d.delay = 0)),
                u.to(f, d, m ? m(c, f, A) : 0),
                (u._ease = Tt.none);
            u.duration() ? (y = w = 0) : (l.timeline = 0);
          } else if (E) {
            Se(_e(u.vars.defaults, { ease: "none" })),
              (u._ease = Lt(E.ease || n.ease || "none"));
            var F,
              L,
              I,
              z = 0;
            if (R(E))
              E.forEach(function (e) {
                return u.to(A, e, ">");
              }),
                u.duration();
            else {
              for (p in ((d = {}), E))
                "ease" === p || "easeEach" === p || $t(p, E[p], d, E.easeEach);
              for (p in d)
                for (
                  F = d[p].sort(function (e, t) {
                    return e.t - t.t;
                  }),
                    z = 0,
                    c = 0;
                  c < F.length;
                  c++
                )
                  ((I = {
                    ease: (L = F[c]).e,
                    duration: ((L.t - (c ? F[c - 1].t : 0)) / 100) * y,
                  })[p] = L.v),
                    u.to(A, I, z),
                    (z += I.duration);
              u.duration() < y && u.to({}, { duration: y - u.duration() });
            }
          }
          y || l.duration((y = u.duration()));
        } else l.timeline = 0;
        return (
          !0 !== b || i || ((qt = e(l)), s.killTweensOf(A), (qt = 0)),
          Re(M, e(l), o),
          n.reversed && l.reverse(),
          n.paused && l.paused(!0),
          (_ ||
            (!y &&
              !E &&
              l._start === fe(M._time) &&
              O(_) &&
              ke(e(l)) &&
              "nested" !== M.data)) &&
            ((l._tTime = -1e-8), l.render(Math.max(0, -w) || 0)),
          T && ze(e(l), T),
          l
        );
      }
      t(o, r);
      var a = o.prototype;
      return (
        (a.render = function (e, t, i) {
          var r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p = this._time,
            f = this._tDur,
            m = this._dur,
            g = e < 0,
            v = e > f - x && !g ? f : e < x ? 0 : e;
          if (m) {
            if (
              v !== this._tTime ||
              !e ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== g) ||
              this._lazy
            ) {
              if (((r = v), (d = this.timeline), this._repeat)) {
                if (((a = m + this._rDelay), this._repeat < -1 && g))
                  return this.totalTime(100 * a + e, t, i);
                if (
                  ((r = fe(v % a)),
                  v === f
                    ? ((o = this._repeat), (r = m))
                    : (o = ~~(l = fe(v / a))) && o === l
                      ? ((r = m), o--)
                      : r > m && (r = m),
                  (u = this._yoyo && 1 & o) && ((h = this._yEase), (r = m - r)),
                  (l = Pe(this._tTime, a)),
                  r === p && !i && this._initted && o === l)
                )
                  return (this._tTime = v), this;
                o !== l &&
                  (d && this._yEase && kt(d, u),
                  this.vars.repeatRefresh &&
                    !u &&
                    !this._lock &&
                    r !== a &&
                    this._initted &&
                    ((this._lock = i = 1),
                    (this.render(fe(a * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (qe(this, g ? e : r, i, t, v))
                  return (this._tTime = 0), this;
                if (
                  !(
                    p === this._time ||
                    (i && this.vars.repeatRefresh && o !== l)
                  )
                )
                  return this;
                if (m !== this._dur) return this.render(e, t, i);
              }
              if (
                ((this._tTime = v),
                (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = c = (h || this._ease)(r / m)),
                this._from && (this.ratio = c = 1 - c),
                r && !p && !t && !o && (dt(this, "onStart"), this._tTime !== v))
              )
                return this;
              for (s = this._pt; s; ) s.r(c, s.d), (s = s._next);
              (d &&
                d.render(e < 0 ? e : d._dur * d._ease(r / this._dur), t, i)) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (g && Fe(this, e, 0, i), dt(this, "onUpdate")),
                this._repeat &&
                  o !== l &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  dt(this, "onRepeat"),
                (v !== this._tDur && v) ||
                  this._tTime !== v ||
                  (g && !this._onUpdate && Fe(this, e, 0, !0),
                  (e || !m) &&
                    ((v === this._tDur && this._ts > 0) ||
                      (!v && this._ts < 0)) &&
                    Me(this, 1),
                  t ||
                    (g && !p) ||
                    !(v || p || u) ||
                    (dt(this, v === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(v < f && this.timeScale() > 0) &&
                      this._prom()));
            }
          } else
            !(function (e, t, i, r) {
              var s,
                o,
                a,
                l = e.ratio,
                u =
                  t < 0 ||
                  (!t &&
                    ((!e._start && Ve(e) && (e._initted || !Ye(e))) ||
                      ((e._ts < 0 || e._dp._ts < 0) && !Ye(e))))
                    ? 0
                    : 1,
                c = e._rDelay,
                d = 0;
              if (
                (c &&
                  e._repeat &&
                  ((d = Ue(0, e._tDur, t)),
                  (o = Pe(d, c)),
                  e._yoyo && 1 & o && (u = 1 - u),
                  o !== Pe(e._tTime, c) &&
                    ((l = 1 - u),
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
                u !== l || n || r || e._zTime === x || (!t && e._zTime))
              ) {
                if (!e._initted && qe(e, t, r, i, d)) return;
                for (
                  a = e._zTime,
                    e._zTime = t || (i ? x : 0),
                    i || (i = t && !a),
                    e.ratio = u,
                    e._from && (u = 1 - u),
                    e._time = 0,
                    e._tTime = d,
                    s = e._pt;
                  s;

                )
                  s.r(u, s.d), (s = s._next);
                t < 0 && Fe(e, t, 0, !0),
                  e._onUpdate && !i && dt(e, "onUpdate"),
                  d && e._repeat && !i && e.parent && dt(e, "onRepeat"),
                  (t >= e._tDur || t < 0) &&
                    e.ratio === u &&
                    (u && Me(e, 1),
                    i ||
                      n ||
                      (dt(e, u ? "onComplete" : "onReverseComplete", !0),
                      e._prom && e._prom()));
              } else e._zTime || (e._zTime = t);
            })(this, e, t, i);
          return this;
        }),
        (a.targets = function () {
          return this._targets;
        }),
        (a.invalidate = function (e) {
          return (
            (!e || !this.vars.runBackwards) && (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            r.prototype.invalidate.call(this, e)
          );
        }),
        (a.resetTo = function (e, t, i, n, r) {
          h || Et.wake(), this._ts || this.play();
          var s = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (
            this._initted || Wt(this, s),
            (function (e, t, i, n, r, s, o, a) {
              var l,
                u,
                c,
                d,
                h = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!h)
                for (
                  h = e._ptCache[t] = [],
                    c = e._ptLookup,
                    d = e._targets.length;
                  d--;

                ) {
                  if ((l = c[d][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                      l = l._next;
                  if (!l)
                    return (
                      (Vt = 1),
                      (e.vars[t] = "+=0"),
                      Wt(e, o),
                      (Vt = 0),
                      a ? U() : 1
                    );
                  h.push(l);
                }
              for (d = h.length; d--; )
                ((l = (u = h[d])._pt || u).s =
                  (!n && 0 !== n) || r ? l.s + (n || 0) + s * l.c : n),
                  (l.c = i - l.s),
                  u.e && (u.e = pe(i) + Qe(u.e)),
                  u.b && (u.b = l.s + Qe(u.b));
            })(this, e, t, i, n, this._ease(s / this._dur), s, r)
              ? this.resetTo(e, t, i, n, 1)
              : (Be(this, 0),
                this.parent ||
                  Te(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0,
                  ),
                this.render(0))
          );
        }),
        (a.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? ht(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!n),
              this
            );
          if (this.timeline) {
            var i = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(e, t, qt && !0 !== qt.vars.overwrite)
                ._first || ht(this),
              this.parent &&
                i !== this.timeline.totalDuration() &&
                He(this, (this._dur * this.timeline._tDur) / i, 0, 1),
              this
            );
          }
          var r,
            s,
            o,
            a,
            l,
            u,
            c,
            d = this._targets,
            h = e ? et(e) : d,
            p = this._ptLookup,
            f = this._pt;
          if (
            (!t || "all" === t) &&
            (function (e, t) {
              for (
                var i = e.length, n = i === t.length;
                n && i-- && e[i] === t[i];

              );
              return i < 0;
            })(d, h)
          )
            return "all" === t && (this._pt = 0), ht(this);
          for (
            r = this._op = this._op || [],
              "all" !== t &&
                (A(t) &&
                  ((l = {}),
                  he(t, function (e) {
                    return (l[e] = 1);
                  }),
                  (t = l)),
                (t = (function (e, t) {
                  var i,
                    n,
                    r,
                    s,
                    o = e[0] ? ce(e[0]).harness : 0,
                    a = o && o.aliases;
                  if (!a) return t;
                  for (n in ((i = xe({}, t)), a))
                    if ((n in i))
                      for (r = (s = a[n].split(",")).length; r--; )
                        i[s[r]] = i[n];
                  return i;
                })(d, t))),
              c = d.length;
            c--;

          )
            if (~h.indexOf(d[c]))
              for (l in ((s = p[c]),
              "all" === t
                ? ((r[c] = t), (a = s), (o = {}))
                : ((o = r[c] = r[c] || {}), (a = t)),
              a))
                (u = s && s[l]) &&
                  (("kill" in u.d && !0 !== u.d.kill(l)) || Ce(this, u, "_pt"),
                  delete s[l]),
                  "all" !== o && (o[l] = 1);
          return this._initted && !this._pt && f && ht(this), this;
        }),
        (o.to = function (e, t) {
          return new o(e, t, arguments[2]);
        }),
        (o.from = function (e, t) {
          return Ge(1, arguments);
        }),
        (o.delayedCall = function (e, t, i, n) {
          return new o(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n,
          });
        }),
        (o.fromTo = function (e, t, i) {
          return Ge(2, arguments);
        }),
        (o.set = function (e, t) {
          return (t.duration = 0), t.repeatDelay || (t.repeat = 0), new o(e, t);
        }),
        (o.killTweensOf = function (e, t, i) {
          return s.killTweensOf(e, t, i);
        }),
        o
      );
    })(Rt);
    _e(Qt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      he("staggerTo,staggerFrom,staggerFromTo", function (e) {
        Qt[e] = function () {
          var t = new zt(),
            i = Ke.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
          );
        };
      });
    var Kt = function (e, t, i) {
        return (e[t] = i);
      },
      Zt = function (e, t, i) {
        return e[t](i);
      },
      Jt = function (e, t, i, n) {
        return e[t](n.fp, i);
      },
      ei = function (e, t, i) {
        return e.setAttribute(t, i);
      },
      ti = function (e, t) {
        return F(e[t]) ? Zt : L(e[t]) && e.setAttribute ? ei : Kt;
      },
      ii = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      ni = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      ri = function (e, t) {
        var i = t._pt,
          n = "";
        if (!e && t.b) n = t.b;
        else if (1 === e && t.e) n = t.e;
        else {
          for (; i; )
            (n =
              i.p +
              (i.m
                ? i.m(i.s + i.c * e)
                : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
              n),
              (i = i._next);
          n += t.c;
        }
        t.set(t.t, t.p, n, t);
      },
      si = function (e, t) {
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      },
      oi = function (e, t, i, n) {
        for (var r, s = this._pt; s; )
          (r = s._next), s.p === n && s.modifier(e, t, i), (s = r);
      },
      ai = function (e) {
        for (var t, i, n = this._pt; n; )
          (i = n._next),
            (n.p === e && !n.op) || n.op === e
              ? Ce(this, n, "_pt")
              : n.dep || (t = 1),
            (n = i);
        return !t;
      },
      li = function (e, t, i, n) {
        n.mSet(e, t, n.m.call(n.tween, i, n.mt), n);
      },
      ui = function (e) {
        for (var t, i, n, r, s = e._pt; s; ) {
          for (t = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
          (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
            (s._next = i) ? (i._prev = s) : (r = s),
            (s = t);
        }
        e._pt = n;
      },
      ci = (function () {
        function e(e, t, i, n, r, s, o, a, l) {
          (this.t = t),
            (this.s = n),
            (this.c = r),
            (this.p = i),
            (this.r = s || ii),
            (this.d = o || this),
            (this.set = a || Kt),
            (this.pr = l || 0),
            (this._next = e),
            e && (e._prev = this);
        }
        return (
          (e.prototype.modifier = function (e, t, i) {
            (this.mSet = this.mSet || this.set),
              (this.set = li),
              (this.m = e),
              (this.mt = i),
              (this.tween = t);
          }),
          e
        );
      })();
    he(
      le +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (te[e] = 1);
      },
    ),
      ($.TweenMax = $.TweenLite = Qt),
      ($.TimelineLite = $.TimelineMax = zt),
      (s = new zt({
        sortChildren: !1,
        defaults: w,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (D.stringFilter = bt);
    var di = [],
      hi = {},
      pi = [],
      fi = 0,
      mi = 0,
      gi = function (e) {
        return (hi[e] || pi).map(function (e) {
          return e();
        });
      },
      vi = function () {
        var e = Date.now(),
          t = [];
        e - fi > 2 &&
          (gi("matchMediaInit"),
          di.forEach(function (e) {
            var i,
              n,
              r,
              s,
              a = e.queries,
              l = e.conditions;
            for (n in a)
              (i = o.matchMedia(a[n]).matches) && (r = 1),
                i !== l[n] && ((l[n] = i), (s = 1));
            s && (e.revert(), r && t.push(e));
          }),
          gi("matchMediaRevert"),
          t.forEach(function (e) {
            return e.onMatch(e, function (t) {
              return e.add(null, t);
            });
          }),
          (fi = e),
          gi("matchMedia"));
      },
      yi = (function () {
        function e(e, t) {
          (this.selector = t && tt(t)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = mi++),
            e && this.add(e);
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, i) {
            F(e) && ((i = t), (t = e), (e = F));
            var n = this,
              s = function () {
                var e,
                  s = r,
                  o = n.selector;
                return (
                  s && s !== n && s.data.push(n),
                  i && (n.selector = tt(i)),
                  (r = n),
                  (e = t.apply(n, arguments)),
                  F(e) && n._r.push(e),
                  (r = s),
                  (n.selector = o),
                  (n.isReverted = !1),
                  e
                );
              };
            return (
              (n.last = s),
              e === F
                ? s(n, function (e) {
                    return n.add(null, e);
                  })
                : e
                  ? (n[e] = s)
                  : s
            );
          }),
          (t.ignore = function (e) {
            var t = r;
            (r = null), e(this), (r = t);
          }),
          (t.getTweens = function () {
            var t = [];
            return (
              this.data.forEach(function (i) {
                return i instanceof e
                  ? t.push.apply(t, i.getTweens())
                  : i instanceof Qt &&
                      !(i.parent && "nested" === i.parent.data) &&
                      t.push(i);
              }),
              t
            );
          }),
          (t.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (t.kill = function (e, t) {
            var i = this;
            if (
              (e
                ? (function () {
                    for (var t, n = i.getTweens(), r = i.data.length; r--; )
                      "isFlip" === (t = i.data[r]).data &&
                        (t.revert(),
                        t.getChildren(!0, !0, !1).forEach(function (e) {
                          return n.splice(n.indexOf(e), 1);
                        }));
                    for (
                      n
                        .map(function (e) {
                          return {
                            g:
                              e._dur ||
                              e._delay ||
                              (e._sat && !e._sat.vars.immediateRender)
                                ? e.globalTime(0)
                                : -1 / 0,
                            t: e,
                          };
                        })
                        .sort(function (e, t) {
                          return t.g - e.g || -1 / 0;
                        })
                        .forEach(function (t) {
                          return t.t.revert(e);
                        }),
                        r = i.data.length;
                      r--;

                    )
                      (t = i.data[r]) instanceof zt
                        ? "nested" !== t.data &&
                          (t.scrollTrigger && t.scrollTrigger.revert(),
                          t.kill())
                        : !(t instanceof Qt) && t.revert && t.revert(e);
                    i._r.forEach(function (t) {
                      return t(e, i);
                    }),
                      (i.isReverted = !0);
                  })()
                : this.data.forEach(function (e) {
                    return e.kill && e.kill();
                  }),
              this.clear(),
              t)
            )
              for (var n = di.length; n--; )
                di[n].id === this.id && di.splice(n, 1);
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          e
        );
      })(),
      Di = (function () {
        function e(e) {
          (this.contexts = []), (this.scope = e), r && r.data.push(this);
        }
        var t = e.prototype;
        return (
          (t.add = function (e, t, i) {
            P(e) || (e = { matches: e });
            var n,
              s,
              a,
              l = new yi(0, i || this.scope),
              u = (l.conditions = {});
            for (s in (r && !l.selector && (l.selector = r.selector),
            this.contexts.push(l),
            (t = l.add("onMatch", t)),
            (l.queries = e),
            e))
              "all" === s
                ? (a = 1)
                : (n = o.matchMedia(e[s])) &&
                  (di.indexOf(l) < 0 && di.push(l),
                  (u[s] = n.matches) && (a = 1),
                  n.addListener
                    ? n.addListener(vi)
                    : n.addEventListener("change", vi));
            return (
              a &&
                t(l, function (e) {
                  return l.add(null, e);
                }),
              this
            );
          }),
          (t.revert = function (e) {
            this.kill(e || {});
          }),
          (t.kill = function (e) {
            this.contexts.forEach(function (t) {
              return t.kill(e, !0);
            });
          }),
          e
        );
      })(),
      wi = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          t.forEach(function (e) {
            return ft(e);
          });
        },
        timeline: function (e) {
          return new zt(e);
        },
        getTweensOf: function (e, t) {
          return s.getTweensOf(e, t);
        },
        getProperty: function (e, t, i, n) {
          A(e) && (e = et(e)[0]);
          var r = ce(e || {}).get,
            s = i ? we : De;
          return (
            "native" === i && (i = ""),
            e
              ? t
                ? s(((re[t] && re[t].get) || r)(e, t, i, n))
                : function (t, i, n) {
                    return s(((re[t] && re[t].get) || r)(e, t, i, n));
                  }
              : e
          );
        },
        quickSetter: function (e, t, i) {
          if ((e = et(e)).length > 1) {
            var n = e.map(function (e) {
                return bi.quickSetter(e, t, i);
              }),
              r = n.length;
            return function (e) {
              for (var t = r; t--; ) n[t](e);
            };
          }
          e = e[0] || {};
          var s = re[t],
            o = ce(e),
            a = (o.harness && (o.harness.aliases || {})[t]) || t,
            l = s
              ? function (t) {
                  var n = new s();
                  (d._pt = 0),
                    n.init(e, i ? t + i : t, d, 0, [e]),
                    n.render(1, n),
                    d._pt && si(1, d);
                }
              : o.set(e, a);
          return s
            ? l
            : function (t) {
                return l(e, a, i ? t + i : t, o, 1);
              };
        },
        quickTo: function (e, t, i) {
          var n,
            r = bi.to(
              e,
              _e(
                (((n = {})[t] = "+=0.1"), (n.paused = !0), (n.stagger = 0), n),
                i || {},
              ),
            ),
            s = function (e, i, n) {
              return r.resetTo(t, e, i, n);
            };
          return (s.tween = r), s;
        },
        isTweening: function (e) {
          return s.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = Lt(e.ease, w.ease)), be(w, e || {});
        },
        config: function (e) {
          return be(D, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            i = e.effect,
            n = e.plugins,
            r = e.defaults,
            s = e.extendTimeline;
          (n || "").split(",").forEach(function (e) {
            return e && !re[e] && !$[e] && U();
          }),
            (se[t] = function (e, t, n) {
              return i(et(e), _e(t || {}, r), n);
            }),
            s &&
              (zt.prototype[t] = function (e, i, n) {
                return this.add(se[t](e, P(i) ? i : (n = i) && {}, this), n);
              });
        },
        registerEase: function (e, t) {
          Tt[e] = Lt(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? Lt(e, t) : Tt;
        },
        getById: function (e) {
          return s.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var i,
            n,
            r = new zt(e);
          for (
            r.smoothChildTiming = O(e.smoothChildTiming),
              s.remove(r),
              r._dp = 0,
              r._time = r._tTime = s._time,
              i = s._first;
            i;

          )
            (n = i._next),
              (!t &&
                !i._dur &&
                i instanceof Qt &&
                i.vars.onComplete === i._targets[0]) ||
                Re(r, i, i._start - i._delay),
              (i = n);
          return Re(s, r, 0), r;
        },
        context: function (e, t) {
          return e ? new yi(e, t) : r;
        },
        matchMedia: function (e) {
          return new Di(e);
        },
        matchMediaRefresh: function () {
          return (
            di.forEach(function (e) {
              var t,
                i,
                n = e.conditions;
              for (i in n) n[i] && ((n[i] = !1), (t = 1));
              t && e.revert();
            }) || vi()
          );
        },
        addEventListener: function (e, t) {
          var i = hi[e] || (hi[e] = []);
          ~i.indexOf(t) || i.push(t);
        },
        removeEventListener: function (e, t) {
          var i = hi[e],
            n = i && i.indexOf(t);
          n >= 0 && i.splice(n, 1);
        },
        utils: {
          wrap: function e(t, i, n) {
            var r = i - t;
            return R(t)
              ? at(t, e(0, t.length), i)
              : je(n, function (e) {
                  return ((r + ((e - t) % r)) % r) + t;
                });
          },
          wrapYoyo: function e(t, i, n) {
            var r = i - t,
              s = 2 * r;
            return R(t)
              ? at(t, e(0, t.length - 1), i)
              : je(n, function (e) {
                  return (
                    t + ((e = (s + ((e - t) % s)) % s || 0) > r ? s - e : e)
                  );
                });
          },
          distribute: nt,
          random: ot,
          snap: st,
          normalize: function (e, t, i) {
            return ut(e, t, 0, 1, i);
          },
          getUnit: Qe,
          clamp: function (e, t, i) {
            return je(i, function (i) {
              return Ue(e, t, i);
            });
          },
          splitColor: yt,
          toArray: et,
          selector: tt,
          mapRange: ut,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
              t[i] = arguments[i];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (i) {
              return e(parseFloat(i)) + (t || Qe(i));
            };
          },
          interpolate: function e(t, i, n, r) {
            var s = isNaN(t + i)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * i;
                };
            if (!s) {
              var o,
                a,
                l,
                u,
                c,
                d = A(t),
                h = {};
              if ((!0 === n && (r = 1) && (n = null), d))
                (t = { p: t }), (i = { p: i });
              else if (R(t) && !R(i)) {
                for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++)
                  l.push(e(t[a - 1], t[a]));
                u--,
                  (s = function (e) {
                    e *= u;
                    var t = Math.min(c, ~~e);
                    return l[t](e - t);
                  }),
                  (n = i);
              } else r || (t = xe(R(t) ? [] : {}, t));
              if (!l) {
                for (o in i) Ht.call(h, t, o, "get", i[o]);
                s = function (e) {
                  return si(e, h) || (d ? t.p : t);
                };
              }
            }
            return je(n, s);
          },
          shuffle: it,
        },
        install: j,
        effects: se,
        ticker: Et,
        updateRoot: zt.updateRoot,
        plugins: re,
        globalTimeline: s,
        core: {
          PropTween: ci,
          globals: Q,
          Tween: Qt,
          Timeline: zt,
          Animation: Rt,
          getCache: ce,
          _removeLinkedListItem: Ce,
          reverting: function () {
            return n;
          },
          context: function (e) {
            return e && r && (r.data.push(e), (e._ctx = r)), r;
          },
          suppressOverwrites: function (e) {
            return (i = e);
          },
        },
      };
    he("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (wi[e] = Qt[e]);
    }),
      Et.add(zt.updateRoot),
      (d = wi.to({}, { duration: 0 }));
    var _i = function (e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
          i = i._next;
        return i;
      },
      xi = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, i, n) {
            n._onInit = function (e) {
              var n, r;
              if (
                (A(i) &&
                  ((n = {}),
                  he(i, function (e) {
                    return (n[e] = 1);
                  }),
                  (i = n)),
                t)
              ) {
                for (r in ((n = {}), i)) n[r] = t(i[r]);
                i = n;
              }
              !(function (e, t) {
                var i,
                  n,
                  r,
                  s = e._targets;
                for (i in t)
                  for (n = s.length; n--; )
                    (r = e._ptLookup[n][i]) &&
                      (r = r.d) &&
                      (r._pt && (r = _i(r, i)),
                      r && r.modifier && r.modifier(t[i], e, s[n], i));
              })(e, i);
            };
          },
        };
      },
      bi =
        wi.registerPlugin(
          {
            name: "attr",
            init: function (e, t, i, n, r) {
              var s, o, a;
              for (s in ((this.tween = i), t))
                (a = e.getAttribute(s) || ""),
                  ((o = this.add(
                    e,
                    "setAttribute",
                    (a || 0) + "",
                    t[s],
                    n,
                    r,
                    0,
                    0,
                    s,
                  )).op = s),
                  (o.b = a),
                  this._props.push(s);
            },
            render: function (e, t) {
              for (var i = t._pt; i; )
                n ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
            },
          },
          {
            name: "endArray",
            init: function (e, t) {
              for (var i = t.length; i--; )
                this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
            },
          },
          xi("roundProps", rt),
          xi("modifiers"),
          xi("snap", st),
        ) || wi;
    (Qt.version = zt.version = bi.version = "3.12.7"), (u = 1), I() && St();
    Tt.Power0,
      Tt.Power1,
      Tt.Power2,
      Tt.Power3,
      Tt.Power4,
      Tt.Linear,
      Tt.Quad,
      Tt.Cubic,
      Tt.Quart,
      Tt.Quint,
      Tt.Strong,
      Tt.Elastic,
      Tt.Back,
      Tt.SteppedEase,
      Tt.Bounce,
      Tt.Sine,
      Tt.Expo,
      Tt.Circ;
    var Ei,
      Si,
      Ti,
      Ci,
      Mi,
      Ai,
      Fi,
      ki,
      Li = {},
      Pi = 180 / Math.PI,
      Oi = Math.PI / 180,
      Ii = Math.atan2,
      Bi = /([A-Z])/g,
      Ni = /(left|right|width|margin|padding|x)/i,
      Ri = /[\s,\(]\S/,
      zi = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      qi = function (e, t) {
        return t.set(
          t.t,
          t.p,
          Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t,
        );
      },
      Vi = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t,
        );
      },
      Yi = function (e, t) {
        return t.set(
          t.t,
          t.p,
          e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
          t,
        );
      },
      Hi = function (e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      Xi = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      Wi = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      $i = function (e, t, i) {
        return (e.style[t] = i);
      },
      Gi = function (e, t, i) {
        return e.style.setProperty(t, i);
      },
      ji = function (e, t, i) {
        return (e._gsap[t] = i);
      },
      Ui = function (e, t, i) {
        return (e._gsap.scaleX = e._gsap.scaleY = i);
      },
      Qi = function (e, t, i, n, r) {
        var s = e._gsap;
        (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
      },
      Ki = function (e, t, i, n, r) {
        var s = e._gsap;
        (s[t] = i), s.renderTransform(r, s);
      },
      Zi = "transform",
      Ji = Zi + "Origin",
      en = function e(t, i) {
        var n = this,
          r = this.target,
          s = r.style,
          o = r._gsap;
        if (t in Li && s) {
          if (((this.tfm = this.tfm || {}), "transform" === t))
            return zi.transform.split(",").forEach(function (t) {
              return e.call(n, t, i);
            });
          if (
            (~(t = zi[t] || t).indexOf(",")
              ? t.split(",").forEach(function (e) {
                  return (n.tfm[e] = Dn(r, e));
                })
              : (this.tfm[t] = o.x ? o[t] : Dn(r, t)),
            t === Ji && (this.tfm.zOrigin = o.zOrigin),
            this.props.indexOf(Zi) >= 0)
          )
            return;
          o.svg &&
            ((this.svgo = r.getAttribute("data-svg-origin")),
            this.props.push(Ji, i, "")),
            (t = Zi);
        }
        (s || i) && this.props.push(t, i, s[t]);
      },
      tn = function (e) {
        e.translate &&
          (e.removeProperty("translate"),
          e.removeProperty("scale"),
          e.removeProperty("rotate"));
      },
      nn = function () {
        var e,
          t,
          i = this.props,
          n = this.target,
          r = n.style,
          s = n._gsap;
        for (e = 0; e < i.length; e += 3)
          i[e + 1]
            ? 2 === i[e + 1]
              ? n[i[e]](i[e + 2])
              : (n[i[e]] = i[e + 2])
            : i[e + 2]
              ? (r[i[e]] = i[e + 2])
              : r.removeProperty(
                  "--" === i[e].substr(0, 2)
                    ? i[e]
                    : i[e].replace(Bi, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (t in this.tfm) s[t] = this.tfm[t];
          s.svg &&
            (s.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            ((e = Fi()) && e.isStart) ||
              r[Zi] ||
              (tn(r),
              s.zOrigin &&
                r[Ji] &&
                ((r[Ji] += " " + s.zOrigin + "px"),
                (s.zOrigin = 0),
                s.renderTransform()),
              (s.uncache = 1));
        }
      },
      rn = function (e, t) {
        var i = { target: e, props: [], revert: nn, save: en };
        return (
          e._gsap || bi.core.getCache(e),
          t &&
            e.style &&
            e.nodeType &&
            t.split(",").forEach(function (e) {
              return i.save(e);
            }),
          i
        );
      },
      sn = function (e, t) {
        var i = Si.createElementNS
          ? Si.createElementNS(
              (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              e,
            )
          : Si.createElement(e);
        return i && i.style ? i : Si.createElement(e);
      },
      on = function e(t, i, n) {
        var r = getComputedStyle(t);
        return (
          r[i] ||
          r.getPropertyValue(i.replace(Bi, "-$1").toLowerCase()) ||
          r.getPropertyValue(i) ||
          (!n && e(t, ln(i) || i, 1)) ||
          ""
        );
      },
      an = "O,Moz,ms,Ms,Webkit".split(","),
      ln = function (e, t, i) {
        var n = (t || Mi).style,
          r = 5;
        if (e in n && !i) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          r-- && !(an[r] + e in n);

        );
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? an[r] : "") + e;
      },
      un = function () {
        "undefined" != typeof window &&
          window.document &&
          ((Ei = window),
          (Si = Ei.document),
          (Ti = Si.documentElement),
          (Mi = sn("div") || { style: {} }),
          sn("div"),
          (Zi = ln(Zi)),
          (Ji = Zi + "Origin"),
          (Mi.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (ki = !!ln("perspective")),
          (Fi = bi.core.reverting),
          (Ci = 1));
      },
      cn = function (e) {
        var t,
          i = e.ownerSVGElement,
          n = sn(
            "svg",
            (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
          ),
          r = e.cloneNode(!0);
        (r.style.display = "block"), n.appendChild(r), Ti.appendChild(n);
        try {
          t = r.getBBox();
        } catch (e) {}
        return n.removeChild(r), Ti.removeChild(n), t;
      },
      dn = function (e, t) {
        for (var i = t.length; i--; )
          if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
      },
      hn = function (e) {
        var t, i;
        try {
          t = e.getBBox();
        } catch (n) {
          (t = cn(e)), (i = 1);
        }
        return (
          (t && (t.width || t.height)) || i || (t = cn(e)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +dn(e, ["x", "cx", "x1"]) || 0,
                y: +dn(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      pn = function (e) {
        return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !hn(e));
      },
      fn = function (e, t) {
        if (t) {
          var i,
            n = e.style;
          t in Li && t !== Ji && (t = Zi),
            n.removeProperty
              ? (("ms" !== (i = t.substr(0, 2)) &&
                  "webkit" !== t.substr(0, 6)) ||
                  (t = "-" + t),
                n.removeProperty(
                  "--" === i ? t : t.replace(Bi, "-$1").toLowerCase(),
                ))
              : n.removeAttribute(t);
        }
      },
      mn = function (e, t, i, n, r, s) {
        var o = new ci(e._pt, t, i, 0, 1, s ? Wi : Xi);
        return (e._pt = o), (o.b = n), (o.e = r), e._props.push(i), o;
      },
      gn = { deg: 1, rad: 1, turn: 1 },
      vn = { grid: 1, flex: 1 },
      yn = function e(t, i, n, r) {
        var s,
          o,
          a,
          l,
          u = parseFloat(n) || 0,
          c = (n + "").trim().substr((u + "").length) || "px",
          d = Mi.style,
          h = Ni.test(i),
          p = "svg" === t.tagName.toLowerCase(),
          f = (p ? "client" : "offset") + (h ? "Width" : "Height"),
          m = 100,
          g = "px" === r,
          v = "%" === r;
        if (r === c || !u || gn[r] || gn[c]) return u;
        if (
          ("px" !== c && !g && (u = e(t, i, n, "px")),
          (l = t.getCTM && pn(t)),
          (v || "%" === c) && (Li[i] || ~i.indexOf("adius")))
        )
          return (
            (s = l ? t.getBBox()[h ? "width" : "height"] : t[f]),
            pe(v ? (u / s) * m : (u / 100) * s)
          );
        if (
          ((d[h ? "width" : "height"] = m + (g ? c : r)),
          (o =
            ("rem" !== r && ~i.indexOf("adius")) ||
            ("em" === r && t.appendChild && !p)
              ? t
              : t.parentNode),
          l && (o = (t.ownerSVGElement || {}).parentNode),
          (o && o !== Si && o.appendChild) || (o = Si.body),
          (a = o._gsap) &&
            v &&
            a.width &&
            h &&
            a.time === Et.time &&
            !a.uncache)
        )
          return pe((u / a.width) * m);
        if (!v || ("height" !== i && "width" !== i))
          (v || "%" === c) &&
            !vn[on(o, "display")] &&
            (d.position = on(t, "position")),
            o === t && (d.position = "static"),
            o.appendChild(Mi),
            (s = Mi[f]),
            o.removeChild(Mi),
            (d.position = "absolute");
        else {
          var y = t.style[i];
          (t.style[i] = m + r), (s = t[f]), y ? (t.style[i] = y) : fn(t, i);
        }
        return (
          h && v && (((a = ce(o)).time = Et.time), (a.width = o[f])),
          pe(g ? (s * u) / m : s && u ? (m / s) * u : 0)
        );
      },
      Dn = function (e, t, i, n) {
        var r;
        return (
          Ci || un(),
          t in zi &&
            "transform" !== t &&
            ~(t = zi[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          Li[t] && "transform" !== t
            ? ((r = Fn(e, n)),
              (r =
                "transformOrigin" !== t
                  ? r[t]
                  : r.svg
                    ? r.origin
                    : kn(on(e, Ji)) + " " + r.zOrigin + "px"))
            : (!(r = e.style[t]) ||
                "auto" === r ||
                n ||
                ~(r + "").indexOf("calc(")) &&
              (r =
                (bn[t] && bn[t](e, t, i)) ||
                on(e, t) ||
                de(e, t) ||
                ("opacity" === t ? 1 : 0)),
          i && !~(r + "").trim().indexOf(" ") ? yn(e, t, r, i) + i : r
        );
      },
      wn = function (e, t, i, n) {
        if (!i || "none" === i) {
          var r = ln(t, e, 1),
            s = r && on(e, r, 1);
          s && s !== i
            ? ((t = r), (i = s))
            : "borderColor" === t && (i = on(e, "borderTopColor"));
        }
        var o,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v = new ci(this._pt, e.style, t, 0, 1, ri),
          y = 0,
          w = 0;
        if (
          ((v.b = i),
          (v.e = n),
          (i += ""),
          "auto" === (n += "") &&
            ((d = e.style[t]),
            (e.style[t] = n),
            (n = on(e, t) || n),
            d ? (e.style[t] = d) : fn(e, t)),
          bt((o = [i, n])),
          (n = o[1]),
          (l = (i = o[0]).match(V) || []),
          (n.match(V) || []).length)
        ) {
          for (; (a = V.exec(n)); )
            (h = a[0]),
              (f = n.substring(y, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                  (c = 1),
              h !== (d = l[w++] || "") &&
                ((u = parseFloat(d) || 0),
                (g = d.substr((u + "").length)),
                "=" === h.charAt(1) && (h = me(u, h) + g),
                (p = parseFloat(h)),
                (m = h.substr((p + "").length)),
                (y = V.lastIndex - m.length),
                m ||
                  ((m = m || D.units[t] || g),
                  y === n.length && ((n += m), (v.e += m))),
                g !== m && (u = yn(e, t, d, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: f || 1 === w ? f : ",",
                  s: u,
                  c: p - u,
                  m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                }));
          v.c = y < n.length ? n.substring(y, n.length) : "";
        } else v.r = "display" === t && "none" === n ? Wi : Xi;
        return H.test(n) && (v.e = 0), (this._pt = v), v;
      },
      _n = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      xn = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var i,
            n,
            r,
            s = t.t,
            o = s.style,
            a = t.u,
            l = s._gsap;
          if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
          else
            for (r = (a = a.split(",")).length; --r > -1; )
              (i = a[r]),
                Li[i] && ((n = 1), (i = "transformOrigin" === i ? Ji : Zi)),
                fn(s, i);
          n &&
            (fn(s, Zi),
            l &&
              (l.svg && s.removeAttribute("transform"),
              (o.scale = o.rotate = o.translate = "none"),
              Fn(s, 1),
              (l.uncache = 1),
              tn(o)));
        }
      },
      bn = {
        clearProps: function (e, t, i, n, r) {
          if ("isFromStart" !== r.data) {
            var s = (e._pt = new ci(e._pt, t, i, 0, 0, xn));
            return (s.u = n), (s.pr = -10), (s.tween = r), e._props.push(i), 1;
          }
        },
      },
      En = [1, 0, 0, 1, 0, 0],
      Sn = {},
      Tn = function (e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
      },
      Cn = function (e) {
        var t = on(e, Zi);
        return Tn(t) ? En : t.substr(7).match(q).map(pe);
      },
      Mn = function (e, t) {
        var i,
          n,
          r,
          s,
          o = e._gsap || ce(e),
          a = e.style,
          l = Cn(e);
        return o.svg && e.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (r = e.transform.baseVal.consolidate().matrix).a,
              r.b,
              r.c,
              r.d,
              r.e,
              r.f,
            ]).join(",")
            ? En
            : l
          : (l !== En ||
              e.offsetParent ||
              e === Ti ||
              o.svg ||
              ((r = a.display),
              (a.display = "block"),
              ((i = e.parentNode) &&
                (e.offsetParent || e.getBoundingClientRect().width)) ||
                ((s = 1), (n = e.nextElementSibling), Ti.appendChild(e)),
              (l = Cn(e)),
              r ? (a.display = r) : fn(e, "display"),
              s &&
                (n
                  ? i.insertBefore(e, n)
                  : i
                    ? i.appendChild(e)
                    : Ti.removeChild(e))),
            t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      An = function (e, t, i, n, r, s) {
        var o,
          a,
          l,
          u = e._gsap,
          c = r || Mn(e, !0),
          d = u.xOrigin || 0,
          h = u.yOrigin || 0,
          p = u.xOffset || 0,
          f = u.yOffset || 0,
          m = c[0],
          g = c[1],
          v = c[2],
          y = c[3],
          D = c[4],
          w = c[5],
          _ = t.split(" "),
          x = parseFloat(_[0]) || 0,
          b = parseFloat(_[1]) || 0;
        i
          ? c !== En &&
            (a = m * y - g * v) &&
            ((l = x * (-g / a) + b * (m / a) - (m * w - g * D) / a),
            (x = x * (y / a) + b * (-v / a) + (v * w - y * D) / a),
            (b = l))
          : ((x =
              (o = hn(e)).x + (~_[0].indexOf("%") ? (x / 100) * o.width : x)),
            (b =
              o.y + (~(_[1] || _[0]).indexOf("%") ? (b / 100) * o.height : b))),
          n || (!1 !== n && u.smooth)
            ? ((D = x - d),
              (w = b - h),
              (u.xOffset = p + (D * m + w * v) - D),
              (u.yOffset = f + (D * g + w * y) - w))
            : (u.xOffset = u.yOffset = 0),
          (u.xOrigin = x),
          (u.yOrigin = b),
          (u.smooth = !!n),
          (u.origin = t),
          (u.originIsAbsolute = !!i),
          (e.style[Ji] = "0px 0px"),
          s &&
            (mn(s, u, "xOrigin", d, x),
            mn(s, u, "yOrigin", h, b),
            mn(s, u, "xOffset", p, u.xOffset),
            mn(s, u, "yOffset", f, u.yOffset)),
          e.setAttribute("data-svg-origin", x + " " + b);
      },
      Fn = function (e, t) {
        var i = e._gsap || new Nt(e);
        if ("x" in i && !t && !i.uncache) return i;
        var n,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          w,
          _,
          x,
          b,
          E,
          S,
          T,
          C,
          M,
          A,
          F,
          k,
          L,
          P,
          O,
          I,
          B = e.style,
          N = i.scaleX < 0,
          R = "px",
          z = "deg",
          q = getComputedStyle(e),
          V = on(e, Ji) || "0";
        return (
          (n = r = s = l = u = c = d = h = p = 0),
          (o = a = 1),
          (i.svg = !(!e.getCTM || !pn(e))),
          q.translate &&
            (("none" === q.translate &&
              "none" === q.scale &&
              "none" === q.rotate) ||
              (B[Zi] =
                ("none" !== q.translate
                  ? "translate3d(" +
                    (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                ("none" !== q.scale
                  ? "scale(" + q.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== q[Zi] ? q[Zi] : "")),
            (B.scale = B.rotate = B.translate = "none")),
          (g = Mn(e, i.svg)),
          i.svg &&
            (i.uncache
              ? ((M = e.getBBox()),
                (V = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px"),
                (C = ""))
              : (C = !t && e.getAttribute("data-svg-origin")),
            An(e, C || V, !!C || i.originIsAbsolute, !1 !== i.smooth, g)),
          (f = i.xOrigin || 0),
          (m = i.yOrigin || 0),
          g !== En &&
            ((_ = g[0]),
            (x = g[1]),
            (b = g[2]),
            (E = g[3]),
            (n = S = g[4]),
            (r = T = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(_ * _ + x * x)),
                (a = Math.sqrt(E * E + b * b)),
                (l = _ || x ? Ii(x, _) * Pi : 0),
                (d = b || E ? Ii(b, E) * Pi + l : 0) &&
                  (a *= Math.abs(Math.cos(d * Oi))),
                i.svg &&
                  ((n -= f - (f * _ + m * b)), (r -= m - (f * x + m * E))))
              : ((I = g[6]),
                (P = g[7]),
                (F = g[8]),
                (k = g[9]),
                (L = g[10]),
                (O = g[11]),
                (n = g[12]),
                (r = g[13]),
                (s = g[14]),
                (u = (v = Ii(I, L)) * Pi),
                v &&
                  ((C = S * (y = Math.cos(-v)) + F * (w = Math.sin(-v))),
                  (M = T * y + k * w),
                  (A = I * y + L * w),
                  (F = S * -w + F * y),
                  (k = T * -w + k * y),
                  (L = I * -w + L * y),
                  (O = P * -w + O * y),
                  (S = C),
                  (T = M),
                  (I = A)),
                (c = (v = Ii(-b, L)) * Pi),
                v &&
                  ((y = Math.cos(-v)),
                  (O = E * (w = Math.sin(-v)) + O * y),
                  (_ = C = _ * y - F * w),
                  (x = M = x * y - k * w),
                  (b = A = b * y - L * w)),
                (l = (v = Ii(x, _)) * Pi),
                v &&
                  ((C = _ * (y = Math.cos(v)) + x * (w = Math.sin(v))),
                  (M = S * y + T * w),
                  (x = x * y - _ * w),
                  (T = T * y - S * w),
                  (_ = C),
                  (S = M)),
                u &&
                  Math.abs(u) + Math.abs(l) > 359.9 &&
                  ((u = l = 0), (c = 180 - c)),
                (o = pe(Math.sqrt(_ * _ + x * x + b * b))),
                (a = pe(Math.sqrt(T * T + I * I))),
                (v = Ii(S, T)),
                (d = Math.abs(v) > 2e-4 ? v * Pi : 0),
                (p = O ? 1 / (O < 0 ? -O : O) : 0)),
            i.svg &&
              ((C = e.getAttribute("transform")),
              (i.forceCSS = e.setAttribute("transform", "") || !Tn(on(e, Zi))),
              C && e.setAttribute("transform", C))),
          Math.abs(d) > 90 &&
            Math.abs(d) < 270 &&
            (N
              ? ((o *= -1),
                (d += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (d += d <= 0 ? 180 : -180))),
          (t = t || i.uncache),
          (i.x =
            n -
            ((i.xPercent =
              n &&
              ((!t && i.xPercent) ||
                (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
              ? (e.offsetWidth * i.xPercent) / 100
              : 0) +
            R),
          (i.y =
            r -
            ((i.yPercent =
              r &&
              ((!t && i.yPercent) ||
                (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetHeight * i.yPercent) / 100
              : 0) +
            R),
          (i.z = s + R),
          (i.scaleX = pe(o)),
          (i.scaleY = pe(a)),
          (i.rotation = pe(l) + z),
          (i.rotationX = pe(u) + z),
          (i.rotationY = pe(c) + z),
          (i.skewX = d + z),
          (i.skewY = h + z),
          (i.transformPerspective = p + R),
          (i.zOrigin = parseFloat(V.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
            (B[Ji] = kn(V)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = D.force3D),
          (i.renderTransform = i.svg ? Rn : ki ? Nn : Pn),
          (i.uncache = 0),
          i
        );
      },
      kn = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      Ln = function (e, t, i) {
        var n = Qe(t);
        return pe(parseFloat(t) + parseFloat(yn(e, "x", i + "px", n))) + n;
      },
      Pn = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          Nn(e, t);
      },
      On = "0deg",
      In = "0px",
      Bn = ") ",
      Nn = function (e, t) {
        var i = t || this,
          n = i.xPercent,
          r = i.yPercent,
          s = i.x,
          o = i.y,
          a = i.z,
          l = i.rotation,
          u = i.rotationY,
          c = i.rotationX,
          d = i.skewX,
          h = i.skewY,
          p = i.scaleX,
          f = i.scaleY,
          m = i.transformPerspective,
          g = i.force3D,
          v = i.target,
          y = i.zOrigin,
          D = "",
          w = ("auto" === g && e && 1 !== e) || !0 === g;
        if (y && (c !== On || u !== On)) {
          var _,
            x = parseFloat(u) * Oi,
            b = Math.sin(x),
            E = Math.cos(x);
          (x = parseFloat(c) * Oi),
            (_ = Math.cos(x)),
            (s = Ln(v, s, b * _ * -y)),
            (o = Ln(v, o, -Math.sin(x) * -y)),
            (a = Ln(v, a, E * _ * -y + y));
        }
        m !== In && (D += "perspective(" + m + Bn),
          (n || r) && (D += "translate(" + n + "%, " + r + "%) "),
          (w || s !== In || o !== In || a !== In) &&
            (D +=
              a !== In || w
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + Bn),
          l !== On && (D += "rotate(" + l + Bn),
          u !== On && (D += "rotateY(" + u + Bn),
          c !== On && (D += "rotateX(" + c + Bn),
          (d === On && h === On) || (D += "skew(" + d + ", " + h + Bn),
          (1 === p && 1 === f) || (D += "scale(" + p + ", " + f + Bn),
          (v.style[Zi] = D || "translate(0, 0)");
      },
      Rn = function (e, t) {
        var i,
          n,
          r,
          s,
          o,
          a = t || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          d = a.y,
          h = a.rotation,
          p = a.skewX,
          f = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          D = a.yOrigin,
          w = a.xOffset,
          _ = a.yOffset,
          x = a.forceCSS,
          b = parseFloat(c),
          E = parseFloat(d);
        (h = parseFloat(h)),
          (p = parseFloat(p)),
          (f = parseFloat(f)) && ((p += f = parseFloat(f)), (h += f)),
          h || p
            ? ((h *= Oi),
              (p *= Oi),
              (i = Math.cos(h) * m),
              (n = Math.sin(h) * m),
              (r = Math.sin(h - p) * -g),
              (s = Math.cos(h - p) * g),
              p &&
                ((f *= Oi),
                (o = Math.tan(p - f)),
                (r *= o = Math.sqrt(1 + o * o)),
                (s *= o),
                f &&
                  ((o = Math.tan(f)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (n *= o))),
              (i = pe(i)),
              (n = pe(n)),
              (r = pe(r)),
              (s = pe(s)))
            : ((i = m), (s = g), (n = r = 0)),
          ((b && !~(c + "").indexOf("px")) ||
            (E && !~(d + "").indexOf("px"))) &&
            ((b = yn(v, "x", c, "px")), (E = yn(v, "y", d, "px"))),
          (y || D || w || _) &&
            ((b = pe(b + y - (y * i + D * r) + w)),
            (E = pe(E + D - (y * n + D * s) + _))),
          (l || u) &&
            ((o = v.getBBox()),
            (b = pe(b + (l / 100) * o.width)),
            (E = pe(E + (u / 100) * o.height))),
          (o =
            "matrix(" +
            i +
            "," +
            n +
            "," +
            r +
            "," +
            s +
            "," +
            b +
            "," +
            E +
            ")"),
          v.setAttribute("transform", o),
          x && (v.style[Zi] = o);
      },
      zn = function (e, t, i, n, r) {
        var s,
          o,
          a = 360,
          l = A(r),
          u = parseFloat(r) * (l && ~r.indexOf("rad") ? Pi : 1) - n,
          c = n + u + "deg";
        return (
          l &&
            ("short" === (s = r.split("_")[1]) &&
              (u %= a) !== u % 180 &&
              (u += u < 0 ? a : -360),
            "cw" === s && u < 0
              ? (u = ((u + 36e9) % a) - ~~(u / a) * a)
              : "ccw" === s && u > 0 && (u = ((u - 36e9) % a) - ~~(u / a) * a)),
          (e._pt = o = new ci(e._pt, t, i, n, u, Vi)),
          (o.e = c),
          (o.u = "deg"),
          e._props.push(i),
          o
        );
      },
      qn = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e;
      },
      Vn = function (e, t, i) {
        var n,
          r,
          s,
          o,
          a,
          l,
          u,
          c = qn({}, i._gsap),
          d = i.style;
        for (r in (c.svg
          ? ((s = i.getAttribute("transform")),
            i.setAttribute("transform", ""),
            (d[Zi] = t),
            (n = Fn(i, 1)),
            fn(i, Zi),
            i.setAttribute("transform", s))
          : ((s = getComputedStyle(i)[Zi]),
            (d[Zi] = t),
            (n = Fn(i, 1)),
            (d[Zi] = s)),
        Li))
          (s = c[r]) !== (o = n[r]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
            ((a = Qe(s) !== (u = Qe(o)) ? yn(i, r, s, u) : parseFloat(s)),
            (l = parseFloat(o)),
            (e._pt = new ci(e._pt, n, r, a, l - a, qi)),
            (e._pt.u = u || 0),
            e._props.push(r));
        qn(n, c);
      };
    he("padding,margin,Width,Radius", function (e, t) {
      var i = "Top",
        n = "Right",
        r = "Bottom",
        s = "Left",
        o = (t < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(
          function (i) {
            return t < 2 ? e + i : "border" + i + e;
          },
        );
      bn[t > 1 ? "border" + e : e] = function (e, t, i, n, r) {
        var s, a;
        if (arguments.length < 4)
          return (
            (s = o.map(function (t) {
              return Dn(e, t, i);
            })),
            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
          );
        (s = (n + "").split(" ")),
          (a = {}),
          o.forEach(function (e, t) {
            return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
          }),
          e.init(t, a, r);
      };
    });
    var Yn,
      Hn,
      Xn,
      Wn = {
        name: "css",
        register: un,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, i, n, r) {
          var s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            w,
            _,
            x,
            b,
            E,
            S,
            T = this._props,
            C = e.style,
            M = i.vars.startAt;
          for (d in (Ci || un(),
          (this.styles = this.styles || rn(e)),
          (_ = this.styles.props),
          (this.tween = i),
          t))
            if (
              "autoRound" !== d &&
              ((o = t[d]), !re[d] || !Xt(d, t, i, n, e, r))
            )
              if (
                ((u = typeof o),
                (c = bn[d]),
                "function" === u && (u = typeof (o = o.call(i, n, e, r))),
                "string" === u && ~o.indexOf("random(") && (o = lt(o)),
                c)
              )
                c(this, e, d, o, i) && (w = 1);
              else if ("--" === d.substr(0, 2))
                (s = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (o += ""),
                  (_t.lastIndex = 0),
                  _t.test(s) || ((h = Qe(s)), (p = Qe(o))),
                  p ? h !== p && (s = yn(e, d, s, p) + p) : h && (o += h),
                  this.add(C, "setProperty", s, o, n, r, 0, 0, d),
                  T.push(d),
                  _.push(d, 0, C[d]);
              else if ("undefined" !== u) {
                if (
                  (M && d in M
                    ? ((s =
                        "function" == typeof M[d]
                          ? M[d].call(i, n, e, r)
                          : M[d]),
                      A(s) && ~s.indexOf("random(") && (s = lt(s)),
                      Qe(s + "") ||
                        "auto" === s ||
                        (s += D.units[d] || Qe(Dn(e, d)) || ""),
                      "=" === (s + "").charAt(1) && (s = Dn(e, d)))
                    : (s = Dn(e, d)),
                  (l = parseFloat(s)),
                  (f =
                    "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (a = parseFloat(o)),
                  d in zi &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === Dn(e, "visibility") &&
                        a &&
                        (l = 0),
                      _.push("visibility", 0, C.visibility),
                      mn(
                        this,
                        C,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a,
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = zi[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (m = d in Li))
                )
                  if (
                    (this.styles.save(d),
                    g ||
                      (((v = e._gsap).renderTransform && !t.parseTransform) ||
                        Fn(e, t.parseTransform),
                      (y = !1 !== t.smoothOrigin && v.smooth),
                      ((g = this._pt =
                        new ci(
                          this._pt,
                          C,
                          Zi,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new ci(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      (f ? me(v.scaleY, f + a) : a) - v.scaleY || 0,
                      qi,
                    )),
                      (this._pt.u = 0),
                      T.push("scaleY", d),
                      (d += "X");
                  else {
                    if ("transformOrigin" === d) {
                      _.push(Ji, 0, C[Ji]),
                        (b = void 0),
                        (E = void 0),
                        (S = void 0),
                        (b = (x = o).split(" ")),
                        (E = b[0]),
                        (S = b[1] || "50%"),
                        ("top" !== E &&
                          "bottom" !== E &&
                          "left" !== S &&
                          "right" !== S) ||
                          ((x = E), (E = S), (S = x)),
                        (b[0] = _n[E] || E),
                        (b[1] = _n[S] || S),
                        (o = b.join(" ")),
                        v.svg
                          ? An(e, o, 0, y, 0, this)
                          : ((p = parseFloat(o.split(" ")[2]) || 0) !==
                              v.zOrigin && mn(this, v, "zOrigin", v.zOrigin, p),
                            mn(this, C, d, kn(s), kn(o)));
                      continue;
                    }
                    if ("svgOrigin" === d) {
                      An(e, o, 1, y, 0, this);
                      continue;
                    }
                    if (d in Sn) {
                      zn(this, v, d, l, f ? me(l, f + o) : o);
                      continue;
                    }
                    if ("smoothOrigin" === d) {
                      mn(this, v, "smooth", v.smooth, o);
                      continue;
                    }
                    if ("force3D" === d) {
                      v[d] = o;
                      continue;
                    }
                    if ("transform" === d) {
                      Vn(this, o, e);
                      continue;
                    }
                  }
                else d in C || (d = ln(d) || d);
                if (
                  m ||
                  ((a || 0 === a) && (l || 0 === l) && !Ri.test(o) && d in C)
                )
                  a || (a = 0),
                    (h = (s + "").substr((l + "").length)) !==
                      (p = Qe(o) || (d in D.units ? D.units[d] : h)) &&
                      (l = yn(e, d, s, p)),
                    (this._pt = new ci(
                      this._pt,
                      m ? v : C,
                      d,
                      l,
                      (f ? me(l, f + a) : a) - l,
                      m || ("px" !== p && "zIndex" !== d) || !1 === t.autoRound
                        ? qi
                        : Hi,
                    )),
                    (this._pt.u = p || 0),
                    h !== p &&
                      "%" !== p &&
                      ((this._pt.b = s), (this._pt.r = Yi));
                else if (d in C) wn.call(this, e, d, s, f ? f + o : o);
                else if (d in e) this.add(e, d, s || e[d], f ? f + o : o, n, r);
                else if ("parseTransform" !== d) continue;
                m ||
                  (d in C
                    ? _.push(d, 0, C[d])
                    : "function" == typeof e[d]
                      ? _.push(d, 2, e[d]())
                      : _.push(d, 1, s || e[d])),
                  T.push(d);
              }
          w && ui(this);
        },
        render: function (e, t) {
          if (t.tween._time || !Fi())
            for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
          else t.styles.revert();
        },
        get: Dn,
        aliases: zi,
        getSetter: function (e, t, i) {
          var n = zi[t];
          return (
            n && n.indexOf(",") < 0 && (t = n),
            t in Li && t !== Ji && (e._gsap.x || Dn(e, "x"))
              ? i && Ai === i
                ? "scale" === t
                  ? Ui
                  : ji
                : (Ai = i || {}) && ("scale" === t ? Qi : Ki)
              : e.style && !L(e.style[t])
                ? $i
                : ~t.indexOf("-")
                  ? Gi
                  : ti(e, t)
          );
        },
        core: { _removeProperty: fn, _getMatrix: Mn },
      };
    (bi.utils.checkPrefix = ln),
      (bi.core.getStyleSaver = rn),
      (Xn = he(
        (Yn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
          "," +
          (Hn = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          Li[e] = 1;
        },
      )),
      he(Hn, function (e) {
        (D.units[e] = "deg"), (Sn[e] = 1);
      }),
      (zi[Xn[13]] = Yn + "," + Hn),
      he(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          zi[t[1]] = Xn[t[0]];
        },
      ),
      he(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          D.units[e] = "px";
        },
      ),
      bi.registerPlugin(Wn);
    var $n = bi.registerPlugin(Wn) || bi,
      Gn = ($n.core.Tween, __webpack_require__(943)),
      jn = __webpack_require__.n(Gn),
      Un = __webpack_require__(440),
      Qn = __webpack_require__.n(Un);
    var Kn = class {
      constructor(e) {
        (this.DOM = {}),
          (this.bounds = {}),
          (this.pos = { x: 0, y: 0 }),
          (this.hover = !1),
          (this.req = null),
          (this.DOM.el = e),
          (this.DOM.items = e.querySelectorAll("[data-mp-item]")),
          (this.bounds.el = this.DOM.el.getBoundingClientRect()),
          (this.bounds.items = Array.from(this.DOM.items).map((e) =>
            e.getBoundingClientRect(),
          )),
          (this.itemsProps = this.bounds.items.map((e) => ({
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          }))),
          (this.lastItemsProps = this.itemsProps),
          (this.target = e.getAttribute("data-mp-target") || "self"),
          (this.wait = e.getAttribute("data-mp-wait")),
          "self" === this.target
            ? (this.DOM.el.addEventListener(
                "mouseenter",
                () => this.enter(),
                !1,
              ),
              this.DOM.el.addEventListener(
                "mouseleave",
                () => this.leave(),
                !1,
              ),
              this.DOM.el.addEventListener(
                "mousemove",
                (e) => this.move(e),
                !1,
              ))
            : (window.addEventListener("mouseenter", () => this.enter(), !1),
              window.addEventListener("mouseleave", () => this.leave(), !1),
              window.addEventListener("mousemove", (e) => this.move(e), !1)),
          this.render();
      }
      enter() {
        this.DOM.el.classList.add("hover");
      }
      leave() {
        this.DOM.el.classList.remove("hover"),
          this.DOM.el.hasAttribute("data-mp-persist") ||
            (this.itemsProps = this.bounds.items.map((e) => ({
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
            })));
      }
      move(e) {
        (!this.wait ||
          (this.wait &&
            "true" === this.DOM.el.getAttribute("data-mp-ready"))) &&
          ((this.bounds.el = this.DOM.el.getBoundingClientRect()),
          (this.bounds.items = Array.from(this.DOM.items).map((e) =>
            e.getBoundingClientRect(),
          )),
          (this.itemsProps = this.bounds.items.map((t, i) => {
            const n =
                Number(this.DOM.items[i].getAttribute("data-mp-scale")) || 1,
              r = Number(this.DOM.items[i].getAttribute("data-mp-d")) || 0.1;
            return {
              x: (e.clientX - t.x - t.width / 2) * r,
              y: (e.clientY - t.y - t.height / 2) * r,
              rotateX: (e.clientY - t.y - t.height / 2) * r * 0.6 * -1,
              rotateY: (e.clientX - t.x - t.width / 2) * r * 0.2,
              scale: n,
            };
          })),
          (this.pos.x = e.clientX - this.bounds.el.width / 2),
          (this.pos.y = e.clientY - this.bounds.el.height / 2));
      }
      render(e) {
        (this.req = requestAnimationFrame((e) => this.render(e))),
          (this.lastItemsProps = this.itemsProps.map((e, t) => {
            const i =
              Number(this.DOM.items[t].getAttribute("data-mp-lerp")) || 0.1;
            return {
              x: Qn()(this.lastItemsProps[t].x, e.x, i).toFixed(1),
              y: Qn()(this.lastItemsProps[t].y, e.y, i).toFixed(1),
              rotateX: Qn()(
                this.lastItemsProps[t].rotateX,
                e.rotateX,
                i,
              ).toFixed(1),
              rotateY: Qn()(
                this.lastItemsProps[t].rotateY,
                e.rotateY,
                i,
              ).toFixed(1),
              scale: Qn()(this.lastItemsProps[t].scale, e.scale, i),
            };
          })),
          this.DOM.items.forEach((e, t) => {
            const i = e.hasAttribute("data-mp-rotate");
            e.style.transform = i
              ? `rotateX(${this.lastItemsProps[t].rotateX}deg) rotateY(${this.lastItemsProps[t].rotateY}deg)`
              : `translate3d(${this.lastItemsProps[t].x}px, ${this.lastItemsProps[t].y}px, 0) scale(${this.lastItemsProps[t].scale})`;
          });
      }
    };
    var Zn,
      Jn,
      er,
      tr,
      ir,
      nr,
      rr,
      sr,
      or,
      ar = {
        init() {
          document.querySelectorAll("[data-mp]").forEach((e) => {
            new Kn(e);
          });
        },
      },
      lr = "transform",
      ur = lr + "Origin",
      cr = function (e) {
        var t = e.ownerDocument || e;
        !(lr in e.style) &&
          "msTransform" in e.style &&
          (ur = (lr = "msTransform") + "Origin");
        for (; t.parentNode && (t = t.parentNode); );
        if (((Jn = window), (rr = new _r()), t)) {
          (Zn = t),
            (er = t.documentElement),
            (tr = t.body),
            ((sr = Zn.createElementNS(
              "http://www.w3.org/2000/svg",
              "g",
            )).style.transform = "none");
          var i = t.createElement("div"),
            n = t.createElement("div"),
            r = t && (t.body || t.firstElementChild);
          r &&
            r.appendChild &&
            (r.appendChild(i),
            i.appendChild(n),
            i.setAttribute(
              "style",
              "position:static;transform:translate3d(0,0,1px)",
            ),
            (or = n.offsetParent !== i),
            r.removeChild(i));
        }
        return t;
      },
      dr = [],
      hr = [],
      pr = function () {
        return (
          Jn.pageYOffset || Zn.scrollTop || er.scrollTop || tr.scrollTop || 0
        );
      },
      fr = function () {
        return (
          Jn.pageXOffset || Zn.scrollLeft || er.scrollLeft || tr.scrollLeft || 0
        );
      },
      mr = function (e) {
        return (
          e.ownerSVGElement ||
          ("svg" === (e.tagName + "").toLowerCase() ? e : null)
        );
      },
      gr = function e(t) {
        return (
          "fixed" === Jn.getComputedStyle(t).position ||
          ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
        );
      },
      vr = function e(t, i) {
        if (t.parentNode && (Zn || cr(t))) {
          var n = mr(t),
            r = n
              ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
              : "http://www.w3.org/1999/xhtml",
            s = n ? (i ? "rect" : "g") : "div",
            o = 2 !== i ? 0 : 100,
            a = 3 === i ? 100 : 0,
            l =
              "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
            u = Zn.createElementNS
              ? Zn.createElementNS(r.replace(/^https/, "http"), s)
              : Zn.createElement(s);
          return (
            i &&
              (n
                ? (nr || (nr = e(t)),
                  u.setAttribute("width", 0.01),
                  u.setAttribute("height", 0.01),
                  u.setAttribute("transform", "translate(" + o + "," + a + ")"),
                  nr.appendChild(u))
                : (ir || ((ir = e(t)).style.cssText = l),
                  (u.style.cssText =
                    l +
                    "width:0.1px;height:0.1px;top:" +
                    a +
                    "px;left:" +
                    o +
                    "px"),
                  ir.appendChild(u))),
            u
          );
        }
        throw "Need document and parent.";
      },
      yr = function (e) {
        var t,
          i = e.getCTM();
        return (
          i ||
            ((t = e.style[lr]),
            (e.style[lr] = "none"),
            e.appendChild(sr),
            (i = sr.getCTM()),
            e.removeChild(sr),
            t
              ? (e.style[lr] = t)
              : e.style.removeProperty(
                  lr.replace(/([A-Z])/g, "-$1").toLowerCase(),
                )),
          i || rr.clone()
        );
      },
      Dr = function (e, t) {
        var i,
          n,
          r,
          s,
          o,
          a,
          l = mr(e),
          u = e === l,
          c = l ? dr : hr,
          d = e.parentNode;
        if (e === Jn) return e;
        if (
          (c.length || c.push(vr(e, 1), vr(e, 2), vr(e, 3)),
          (i = l ? nr : ir),
          l)
        )
          u
            ? ((s = -(r = yr(e)).e / r.a), (o = -r.f / r.d), (n = rr))
            : e.getBBox
              ? ((r = e.getBBox()),
                (n = (n = e.transform ? e.transform.baseVal : {}).numberOfItems
                  ? n.numberOfItems > 1
                    ? (function (e) {
                        for (var t = new _r(), i = 0; i < e.numberOfItems; i++)
                          t.multiply(e.getItem(i).matrix);
                        return t;
                      })(n)
                    : n.getItem(0).matrix
                  : rr),
                (s = n.a * r.x + n.c * r.y),
                (o = n.b * r.x + n.d * r.y))
              : ((n = new _r()), (s = o = 0)),
            t && "g" === e.tagName.toLowerCase() && (s = o = 0),
            (u ? l : d).appendChild(i),
            i.setAttribute(
              "transform",
              "matrix(" +
                n.a +
                "," +
                n.b +
                "," +
                n.c +
                "," +
                n.d +
                "," +
                (n.e + s) +
                "," +
                (n.f + o) +
                ")",
            );
        else {
          if (((s = o = 0), or))
            for (
              n = e.offsetParent, r = e;
              r && (r = r.parentNode) && r !== n && r.parentNode;

            )
              (Jn.getComputedStyle(r)[lr] + "").length > 4 &&
                ((s = r.offsetLeft), (o = r.offsetTop), (r = 0));
          if (
            "absolute" !== (a = Jn.getComputedStyle(e)).position &&
            "fixed" !== a.position
          )
            for (n = e.offsetParent; d && d !== n; )
              (s += d.scrollLeft || 0),
                (o += d.scrollTop || 0),
                (d = d.parentNode);
          ((r = i.style).top = e.offsetTop - o + "px"),
            (r.left = e.offsetLeft - s + "px"),
            (r[lr] = a[lr]),
            (r[ur] = a[ur]),
            (r.position = "fixed" === a.position ? "fixed" : "absolute"),
            e.parentNode.appendChild(i);
        }
        return i;
      },
      wr = function (e, t, i, n, r, s, o) {
        return (
          (e.a = t), (e.b = i), (e.c = n), (e.d = r), (e.e = s), (e.f = o), e
        );
      },
      _r = (function () {
        function e(e, t, i, n, r, s) {
          void 0 === e && (e = 1),
            void 0 === t && (t = 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0),
            void 0 === s && (s = 0),
            wr(this, e, t, i, n, r, s);
        }
        var t = e.prototype;
        return (
          (t.inverse = function () {
            var e = this.a,
              t = this.b,
              i = this.c,
              n = this.d,
              r = this.e,
              s = this.f,
              o = e * n - t * i || 1e-10;
            return wr(
              this,
              n / o,
              -t / o,
              -i / o,
              e / o,
              (i * s - n * r) / o,
              -(e * s - t * r) / o,
            );
          }),
          (t.multiply = function (e) {
            var t = this.a,
              i = this.b,
              n = this.c,
              r = this.d,
              s = this.e,
              o = this.f,
              a = e.a,
              l = e.c,
              u = e.b,
              c = e.d,
              d = e.e,
              h = e.f;
            return wr(
              this,
              a * t + u * n,
              a * i + u * r,
              l * t + c * n,
              l * i + c * r,
              s + d * t + h * n,
              o + d * i + h * r,
            );
          }),
          (t.clone = function () {
            return new e(this.a, this.b, this.c, this.d, this.e, this.f);
          }),
          (t.equals = function (e) {
            var t = this.a,
              i = this.b,
              n = this.c,
              r = this.d,
              s = this.e,
              o = this.f;
            return (
              t === e.a &&
              i === e.b &&
              n === e.c &&
              r === e.d &&
              s === e.e &&
              o === e.f
            );
          }),
          (t.apply = function (e, t) {
            void 0 === t && (t = {});
            var i = e.x,
              n = e.y,
              r = this.a,
              s = this.b,
              o = this.c,
              a = this.d,
              l = this.e,
              u = this.f;
            return (
              (t.x = i * r + n * o + l || 0), (t.y = i * s + n * a + u || 0), t
            );
          }),
          e
        );
      })();
    function xr(e, t, i, n) {
      if (!e || !e.parentNode || (Zn || cr(e)).documentElement === e)
        return new _r();
      var r = (function (e) {
          for (var t, i; e && e !== tr; )
            (i = e._gsap) && i.uncache && i.get(e, "x"),
              i &&
                !i.scaleX &&
                !i.scaleY &&
                i.renderTransform &&
                ((i.scaleX = i.scaleY = 1e-4),
                i.renderTransform(1, i),
                t ? t.push(i) : (t = [i])),
              (e = e.parentNode);
          return t;
        })(e),
        s = mr(e) ? dr : hr,
        o = Dr(e, i),
        a = s[0].getBoundingClientRect(),
        l = s[1].getBoundingClientRect(),
        u = s[2].getBoundingClientRect(),
        c = o.parentNode,
        d = !n && gr(e),
        h = new _r(
          (l.left - a.left) / 100,
          (l.top - a.top) / 100,
          (u.left - a.left) / 100,
          (u.top - a.top) / 100,
          a.left + (d ? 0 : fr()),
          a.top + (d ? 0 : pr()),
        );
      if ((c.removeChild(o), r))
        for (a = r.length; a--; )
          ((l = r[a]).scaleX = l.scaleY = 0), l.renderTransform(1, l);
      return t ? h.inverse() : h;
    }
    function br(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    var Er,
      Sr,
      Tr,
      Cr,
      Mr,
      Ar,
      Fr,
      kr,
      Lr,
      Pr,
      Or,
      Ir,
      Br,
      Nr,
      Rr,
      zr,
      qr,
      Vr,
      Yr,
      Hr,
      Xr,
      Wr,
      $r = 0,
      Gr = function () {
        return "undefined" != typeof window;
      },
      jr = function () {
        return Er || (Gr() && (Er = window.gsap) && Er.registerPlugin && Er);
      },
      Ur = function (e) {
        return "function" == typeof e;
      },
      Qr = function (e) {
        return "object" == typeof e;
      },
      Kr = function (e) {
        return void 0 === e;
      },
      Zr = function () {
        return !1;
      },
      Jr = "transform",
      es = "transformOrigin",
      ts = function (e) {
        return Math.round(1e4 * e) / 1e4;
      },
      is = Array.isArray,
      ns = function (e, t) {
        var i = Tr.createElementNS
          ? Tr.createElementNS(
              (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              e,
            )
          : Tr.createElement(e);
        return i.style ? i : Tr.createElement(e);
      },
      rs = 180 / Math.PI,
      ss = 1e20,
      os = new _r(),
      as =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      ls = [],
      us = {},
      cs = 0,
      ds = /^(?:a|input|textarea|button|select)$/i,
      hs = 0,
      ps = {},
      fs = {},
      ms = function (e, t) {
        var i,
          n = {};
        for (i in e) n[i] = t ? e[i] * t : e[i];
        return n;
      },
      gs = function e(t, i) {
        for (var n, r = t.length; r--; )
          i
            ? (t[r].style.touchAction = i)
            : t[r].style.removeProperty("touch-action"),
            (n = t[r].children) && n.length && e(n, i);
      },
      vs = function () {
        return ls.forEach(function (e) {
          return e();
        });
      },
      ys = function () {
        return !ls.length && Er.ticker.remove(vs);
      },
      Ds = function (e) {
        for (var t = ls.length; t--; ) ls[t] === e && ls.splice(t, 1);
        Er.to(ys, {
          overwrite: !0,
          delay: 15,
          duration: 0,
          onComplete: ys,
          data: "_draggable",
        });
      },
      ws = function (e, t, i, n) {
        if (e.addEventListener) {
          var r = Br[t];
          (n = n || (Or ? { passive: !1 } : null)),
            e.addEventListener(r || t, i, n),
            r && t !== r && e.addEventListener(t, i, n);
        }
      },
      _s = function (e, t, i, n) {
        if (e.removeEventListener) {
          var r = Br[t];
          e.removeEventListener(r || t, i, n),
            r && t !== r && e.removeEventListener(t, i, n);
        }
      },
      xs = function (e) {
        e.preventDefault && e.preventDefault(),
          e.preventManipulation && e.preventManipulation();
      },
      bs = function e(t) {
        (Nr = t.touches && $r < t.touches.length), _s(t.target, "touchend", e);
      },
      Es = function (e) {
        (Nr = e.touches && $r < e.touches.length), ws(e.target, "touchend", bs);
      },
      Ss = function (e) {
        return (
          Sr.pageYOffset ||
          e.scrollTop ||
          e.documentElement.scrollTop ||
          e.body.scrollTop ||
          0
        );
      },
      Ts = function (e) {
        return (
          Sr.pageXOffset ||
          e.scrollLeft ||
          e.documentElement.scrollLeft ||
          e.body.scrollLeft ||
          0
        );
      },
      Cs = function e(t, i) {
        ws(t, "scroll", i), As(t.parentNode) || e(t.parentNode, i);
      },
      Ms = function e(t, i) {
        _s(t, "scroll", i), As(t.parentNode) || e(t.parentNode, i);
      },
      As = function (e) {
        return !(
          e &&
          e !== Cr &&
          9 !== e.nodeType &&
          e !== Tr.body &&
          e !== Sr &&
          e.nodeType &&
          e.parentNode
        );
      },
      Fs = function (e, t) {
        var i = "x" === t ? "Width" : "Height",
          n = "scroll" + i,
          r = "client" + i;
        return Math.max(
          0,
          As(e)
            ? Math.max(Cr[n], Mr[n]) - (Sr["inner" + i] || Cr[r] || Mr[r])
            : e[n] - e[r],
        );
      },
      ks = function e(t, i) {
        var n = Fs(t, "x"),
          r = Fs(t, "y");
        As(t) ? (t = fs) : e(t.parentNode, i),
          (t._gsMaxScrollX = n),
          (t._gsMaxScrollY = r),
          i ||
            ((t._gsScrollX = t.scrollLeft || 0),
            (t._gsScrollY = t.scrollTop || 0));
      },
      Ls = function (e, t, i) {
        var n = e.style;
        n &&
          (Kr(n[t]) && (t = Lr(t, e) || t),
          null == i
            ? n.removeProperty &&
              n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
            : (n[t] = i));
      },
      Ps = function (e) {
        return Sr.getComputedStyle(
          e instanceof Element ? e : e.host || (e.parentNode || {}).host || e,
        );
      },
      Os = {},
      Is = function (e) {
        if (e === Sr)
          return (
            (Os.left = Os.top = 0),
            (Os.width = Os.right =
              Cr.clientWidth || e.innerWidth || Mr.clientWidth || 0),
            (Os.height = Os.bottom =
              (e.innerHeight || 0) - 20 < Cr.clientHeight
                ? Cr.clientHeight
                : e.innerHeight || Mr.clientHeight || 0),
            Os
          );
        var t = e.ownerDocument || Tr,
          i = Kr(e.pageX)
            ? e.nodeType || Kr(e.left) || Kr(e.top)
              ? Pr(e)[0].getBoundingClientRect()
              : e
            : {
                left: e.pageX - Ts(t),
                top: e.pageY - Ss(t),
                right: e.pageX - Ts(t) + 1,
                bottom: e.pageY - Ss(t) + 1,
              };
        return (
          Kr(i.right) && !Kr(i.width)
            ? ((i.right = i.left + i.width), (i.bottom = i.top + i.height))
            : Kr(i.width) &&
              (i = {
                width: i.right - i.left,
                height: i.bottom - i.top,
                right: i.right,
                left: i.left,
                bottom: i.bottom,
                top: i.top,
              }),
          i
        );
      },
      Bs = function (e, t, i) {
        var n,
          r = e.vars,
          s = r[i],
          o = e._listeners[t];
        return (
          Ur(s) &&
            (n = s.apply(
              r.callbackScope || e,
              r[i + "Params"] || [e.pointerEvent],
            )),
          o && !1 === e.dispatchEvent(t) && (n = !1),
          n
        );
      },
      Ns = function (e, t) {
        var i,
          n,
          r,
          s = Pr(e)[0];
        return s.nodeType || s === Sr
          ? zs(s, t)
          : Kr(e.left)
            ? {
                left: (n = e.min || e.minX || e.minRotation || 0),
                top: (i = e.min || e.minY || 0),
                width: (e.max || e.maxX || e.maxRotation || 0) - n,
                height: (e.max || e.maxY || 0) - i,
              }
            : ((r = { x: 0, y: 0 }),
              {
                left: e.left - r.x,
                top: e.top - r.y,
                width: e.width,
                height: e.height,
              });
      },
      Rs = {},
      zs = function (e, t) {
        t = Pr(t)[0];
        var i,
          n,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m = e.getBBox && e.ownerSVGElement,
          g = e.ownerDocument || Tr;
        if (e === Sr)
          (r = Ss(g)),
            (n =
              (i = Ts(g)) +
              (g.documentElement.clientWidth ||
                e.innerWidth ||
                g.body.clientWidth ||
                0)),
            (s =
              r +
              ((e.innerHeight || 0) - 20 < g.documentElement.clientHeight
                ? g.documentElement.clientHeight
                : e.innerHeight || g.body.clientHeight || 0));
        else {
          if (t === Sr || Kr(t)) return e.getBoundingClientRect();
          (i = r = 0),
            m
              ? ((h = (d = e.getBBox()).width), (p = d.height))
              : (e.viewBox &&
                  (d = e.viewBox.baseVal) &&
                  ((i = d.x || 0),
                  (r = d.y || 0),
                  (h = d.width),
                  (p = d.height)),
                h ||
                  ((d = "border-box" === (f = Ps(e)).boxSizing),
                  (h =
                    (parseFloat(f.width) || e.clientWidth || 0) +
                    (d
                      ? 0
                      : parseFloat(f.borderLeftWidth) +
                        parseFloat(f.borderRightWidth))),
                  (p =
                    (parseFloat(f.height) || e.clientHeight || 0) +
                    (d
                      ? 0
                      : parseFloat(f.borderTopWidth) +
                        parseFloat(f.borderBottomWidth))))),
            (n = h),
            (s = p);
        }
        return e === t
          ? { left: i, top: r, width: n - i, height: s - r }
          : ((a = (o = xr(t, !0).multiply(xr(e))).apply({ x: i, y: r })),
            (l = o.apply({ x: n, y: r })),
            (u = o.apply({ x: n, y: s })),
            (c = o.apply({ x: i, y: s })),
            {
              left: (i = Math.min(a.x, l.x, u.x, c.x)),
              top: (r = Math.min(a.y, l.y, u.y, c.y)),
              width: Math.max(a.x, l.x, u.x, c.x) - i,
              height: Math.max(a.y, l.y, u.y, c.y) - r,
            });
      },
      qs = function (e, t, i, n, r, s) {
        var o,
          a,
          l,
          u = {};
        if (t)
          if (1 !== r && t instanceof Array) {
            if (((u.end = o = []), (l = t.length), Qr(t[0])))
              for (a = 0; a < l; a++) o[a] = ms(t[a], r);
            else for (a = 0; a < l; a++) o[a] = t[a] * r;
            (i += 1.1), (n -= 1.1);
          } else
            Ur(t)
              ? (u.end = function (i) {
                  var n,
                    s,
                    o = t.call(e, i);
                  if (1 !== r)
                    if (Qr(o)) {
                      for (s in ((n = {}), o)) n[s] = o[s] * r;
                      o = n;
                    } else o *= r;
                  return o;
                })
              : (u.end = t);
        return (
          (i || 0 === i) && (u.max = i),
          (n || 0 === n) && (u.min = n),
          s && (u.velocity = 0),
          u
        );
      },
      Vs = function e(t) {
        var i;
        return (
          !(!t || !t.getAttribute || t === Mr) &&
          (!(
            "true" !== (i = t.getAttribute("data-clickable")) &&
            ("false" === i ||
              (!ds.test(t.nodeName + "") &&
                "true" !== t.getAttribute("contentEditable")))
          ) ||
            e(t.parentNode))
        );
      },
      Ys = function (e, t) {
        for (var i, n = e.length; n--; )
          ((i = e[n]).ondragstart = i.onselectstart = t ? null : Zr),
            Er.set(i, { lazy: !0, userSelect: t ? "text" : "none" });
      },
      Hs = function e(t) {
        return (
          "fixed" === Ps(t).position ||
          ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
        );
      },
      Xs = function (e, t) {
        (e = Er.utils.toArray(e)[0]), (t = t || {});
        var i,
          n,
          r,
          s,
          o,
          a,
          l = document.createElement("div"),
          u = l.style,
          c = e.firstChild,
          d = 0,
          h = 0,
          p = e.scrollTop,
          f = e.scrollLeft,
          m = e.scrollWidth,
          g = e.scrollHeight,
          v = 0,
          y = 0,
          D = 0;
        Xr && !1 !== t.force3D
          ? ((o = "translate3d("), (a = "px,0px)"))
          : Jr && ((o = "translate("), (a = "px)")),
          (this.scrollTop = function (e, t) {
            if (!arguments.length) return -this.top();
            this.top(-e, t);
          }),
          (this.scrollLeft = function (e, t) {
            if (!arguments.length) return -this.left();
            this.left(-e, t);
          }),
          (this.left = function (i, n) {
            if (!arguments.length) return -(e.scrollLeft + h);
            var r = e.scrollLeft - f,
              s = h;
            if ((r > 2 || r < -2) && !n)
              return (
                (f = e.scrollLeft),
                Er.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                this.left(-f),
                void (t.onKill && t.onKill())
              );
            (i = -i) < 0
              ? ((h = (i - 0.5) | 0), (i = 0))
              : i > y
                ? ((h = (i - y) | 0), (i = y))
                : (h = 0),
              (h || s) &&
                (this._skip || (u[Jr] = o + -h + "px," + -d + a),
                h + v >= 0 && (u.paddingRight = h + v + "px")),
              (e.scrollLeft = 0 | i),
              (f = e.scrollLeft);
          }),
          (this.top = function (i, n) {
            if (!arguments.length) return -(e.scrollTop + d);
            var r = e.scrollTop - p,
              s = d;
            if ((r > 2 || r < -2) && !n)
              return (
                (p = e.scrollTop),
                Er.killTweensOf(this, { top: 1, scrollTop: 1 }),
                this.top(-p),
                void (t.onKill && t.onKill())
              );
            (i = -i) < 0
              ? ((d = (i - 0.5) | 0), (i = 0))
              : i > D
                ? ((d = (i - D) | 0), (i = D))
                : (d = 0),
              (d || s) && (this._skip || (u[Jr] = o + -h + "px," + -d + a)),
              (e.scrollTop = 0 | i),
              (p = e.scrollTop);
          }),
          (this.maxScrollTop = function () {
            return D;
          }),
          (this.maxScrollLeft = function () {
            return y;
          }),
          (this.disable = function () {
            for (c = l.firstChild; c; )
              (s = c.nextSibling), e.appendChild(c), (c = s);
            e === l.parentNode && e.removeChild(l);
          }),
          (this.enable = function () {
            if ((c = e.firstChild) !== l) {
              for (; c; ) (s = c.nextSibling), l.appendChild(c), (c = s);
              e.appendChild(l), this.calibrate();
            }
          }),
          (this.calibrate = function (t) {
            var s,
              o,
              a,
              c = e.clientWidth === i;
            (p = e.scrollTop),
              (f = e.scrollLeft),
              (c &&
                e.clientHeight === n &&
                l.offsetHeight === r &&
                m === e.scrollWidth &&
                g === e.scrollHeight &&
                !t) ||
                ((d || h) &&
                  ((o = this.left()),
                  (a = this.top()),
                  this.left(-e.scrollLeft),
                  this.top(-e.scrollTop)),
                (s = Ps(e)),
                (c && !t) ||
                  ((u.display = "block"),
                  (u.width = "auto"),
                  (u.paddingRight = "0px"),
                  (v = Math.max(0, e.scrollWidth - e.clientWidth)) &&
                    (v +=
                      parseFloat(s.paddingLeft) +
                      (Wr ? parseFloat(s.paddingRight) : 0))),
                (u.display = "inline-block"),
                (u.position = "relative"),
                (u.overflow = "visible"),
                (u.verticalAlign = "top"),
                (u.boxSizing = "content-box"),
                (u.width = "100%"),
                (u.paddingRight = v + "px"),
                Wr && (u.paddingBottom = s.paddingBottom),
                (i = e.clientWidth),
                (n = e.clientHeight),
                (m = e.scrollWidth),
                (g = e.scrollHeight),
                (y = e.scrollWidth - i),
                (D = e.scrollHeight - n),
                (r = l.offsetHeight),
                (u.display = "block"),
                (o || a) && (this.left(o), this.top(a)));
          }),
          (this.content = l),
          (this.element = e),
          (this._skip = !1),
          this.enable();
      },
      Ws = function (e) {
        if (Gr() && document.body) {
          var t = window && window.navigator;
          (Sr = window),
            (Tr = document),
            (Cr = Tr.documentElement),
            (Mr = Tr.body),
            (Ar = ns("div")),
            (Vr = !!window.PointerEvent),
            ((Fr = ns("div")).style.cssText =
              "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
            (qr = "grab" === Fr.style.cursor ? "grab" : "move"),
            (Rr = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
            (Ir =
              ("ontouchstart" in Cr && "orientation" in Sr) ||
              (t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0))),
            (n = ns("div")),
            (r = ns("div")),
            (s = r.style),
            (o = Mr),
            (s.display = "inline-block"),
            (s.position = "relative"),
            (n.style.cssText =
              "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
            n.appendChild(r),
            o.appendChild(n),
            (i = r.offsetHeight + 18 > n.scrollHeight),
            o.removeChild(n),
            (Wr = i),
            (Br = (function (e) {
              for (
                var t = e.split(","),
                  i = (
                    ("onpointerdown" in Ar)
                      ? "pointerdown,pointermove,pointerup,pointercancel"
                      : ("onmspointerdown" in Ar)
                        ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                        : e
                  ).split(","),
                  n = {},
                  r = 4;
                --r > -1;

              )
                (n[t[r]] = i[r]), (n[i[r]] = t[r]);
              try {
                Cr.addEventListener(
                  "test",
                  null,
                  Object.defineProperty({}, "passive", {
                    get: function () {
                      Or = 1;
                    },
                  }),
                );
              } catch (e) {}
              return n;
            })("touchstart,touchmove,touchend,touchcancel")),
            ws(Tr, "touchcancel", Zr),
            ws(Sr, "touchmove", Zr),
            Mr && Mr.addEventListener("touchstart", Zr),
            ws(Tr, "contextmenu", function () {
              for (var e in us) us[e].isPressed && us[e].endDrag();
            }),
            (Er = kr = jr());
        }
        var i, n, r, s, o;
        Er &&
          ((zr = Er.plugins.inertia),
          (Yr = Er.core.context || function () {}),
          (Lr = Er.utils.checkPrefix),
          (Jr = Lr(Jr)),
          (es = Lr(es)),
          (Pr = Er.utils.toArray),
          (Hr = Er.core.getStyleSaver),
          (Xr = !!Lr("perspective")));
      },
      $s = (function () {
        function e(e) {
          (this._listeners = {}), (this.target = e || this);
        }
        var t = e.prototype;
        return (
          (t.addEventListener = function (e, t) {
            var i = this._listeners[e] || (this._listeners[e] = []);
            ~i.indexOf(t) || i.push(t);
          }),
          (t.removeEventListener = function (e, t) {
            var i = this._listeners[e],
              n = i && i.indexOf(t);
            n >= 0 && i.splice(n, 1);
          }),
          (t.dispatchEvent = function (e) {
            var t,
              i = this;
            return (
              (this._listeners[e] || []).forEach(function (n) {
                return (
                  !1 === n.call(i, { type: e, target: i.target }) && (t = !1)
                );
              }),
              t
            );
          }),
          e
        );
      })(),
      Gs = (function (e) {
        var t, i;
        function n(t, i) {
          var r;
          (r = e.call(this) || this),
            kr || Ws(),
            (t = Pr(t)[0]),
            (r.styles = Hr && Hr(t, "transform,left,top")),
            zr || (zr = Er.plugins.inertia),
            (r.vars = i = ms(i || {})),
            (r.target = t),
            (r.x = r.y = r.rotation = 0),
            (r.dragResistance = parseFloat(i.dragResistance) || 0),
            (r.edgeResistance = isNaN(i.edgeResistance)
              ? 1
              : parseFloat(i.edgeResistance) || 0),
            (r.lockAxis = i.lockAxis),
            (r.autoScroll = i.autoScroll || 0),
            (r.lockedAxis = null),
            (r.allowEventDefault = !!i.allowEventDefault),
            Er.getProperty(t, "x");
          var s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            D,
            w,
            _,
            x,
            b,
            E,
            S,
            T,
            C,
            M,
            A,
            F,
            k,
            L,
            P,
            O,
            I,
            B,
            N,
            R = (i.type || "x,y").toLowerCase(),
            z = ~R.indexOf("x") || ~R.indexOf("y"),
            q = -1 !== R.indexOf("rotation"),
            V = q ? "rotation" : z ? "x" : "left",
            Y = z ? "y" : "top",
            H = !(!~R.indexOf("x") && !~R.indexOf("left") && "scroll" !== R),
            X = !(!~R.indexOf("y") && !~R.indexOf("top") && "scroll" !== R),
            W = i.minimumMovement || 2,
            $ = br(r),
            G = Pr(i.trigger || i.handle || t),
            j = {},
            U = 0,
            Q = !1,
            K = i.autoScrollMarginTop || 40,
            Z = i.autoScrollMarginRight || 40,
            J = i.autoScrollMarginBottom || 40,
            ee = i.autoScrollMarginLeft || 40,
            te = i.clickableTest || Vs,
            ie = 0,
            ne = t._gsap || Er.core.getCache(t),
            re = Hs(t),
            se = function (e, i) {
              return parseFloat(ne.get(t, e, i));
            },
            oe = t.ownerDocument || Tr,
            ae = function (e) {
              return (
                xs(e),
                e.stopImmediatePropagation && e.stopImmediatePropagation(),
                !1
              );
            },
            le = function e(i) {
              if ($.autoScroll && $.isDragging && (Q || _)) {
                var n,
                  r,
                  s,
                  a,
                  l,
                  u,
                  c,
                  d,
                  p = t,
                  f = 15 * $.autoScroll;
                for (
                  Q = !1,
                    fs.scrollTop =
                      null != Sr.pageYOffset
                        ? Sr.pageYOffset
                        : null != oe.documentElement.scrollTop
                          ? oe.documentElement.scrollTop
                          : oe.body.scrollTop,
                    fs.scrollLeft =
                      null != Sr.pageXOffset
                        ? Sr.pageXOffset
                        : null != oe.documentElement.scrollLeft
                          ? oe.documentElement.scrollLeft
                          : oe.body.scrollLeft,
                    a = $.pointerX - fs.scrollLeft,
                    l = $.pointerY - fs.scrollTop;
                  p && !r;

                )
                  (n = (r = As(p.parentNode)) ? fs : p.parentNode),
                    (s = r
                      ? {
                          bottom: Math.max(
                            Cr.clientHeight,
                            Sr.innerHeight || 0,
                          ),
                          right: Math.max(Cr.clientWidth, Sr.innerWidth || 0),
                          left: 0,
                          top: 0,
                        }
                      : n.getBoundingClientRect()),
                    (u = c = 0),
                    X &&
                      ((d = n._gsMaxScrollY - n.scrollTop) < 0
                        ? (c = d)
                        : l > s.bottom - J && d
                          ? ((Q = !0),
                            (c = Math.min(
                              d,
                              (f * (1 - Math.max(0, s.bottom - l) / J)) | 0,
                            )))
                          : l < s.top + K &&
                            n.scrollTop &&
                            ((Q = !0),
                            (c = -Math.min(
                              n.scrollTop,
                              (f * (1 - Math.max(0, l - s.top) / K)) | 0,
                            ))),
                      c && (n.scrollTop += c)),
                    H &&
                      ((d = n._gsMaxScrollX - n.scrollLeft) < 0
                        ? (u = d)
                        : a > s.right - Z && d
                          ? ((Q = !0),
                            (u = Math.min(
                              d,
                              (f * (1 - Math.max(0, s.right - a) / Z)) | 0,
                            )))
                          : a < s.left + ee &&
                            n.scrollLeft &&
                            ((Q = !0),
                            (u = -Math.min(
                              n.scrollLeft,
                              (f * (1 - Math.max(0, a - s.left) / ee)) | 0,
                            ))),
                      u && (n.scrollLeft += u)),
                    r &&
                      (u || c) &&
                      (Sr.scrollTo(n.scrollLeft, n.scrollTop),
                      _e($.pointerX + u, $.pointerY + c)),
                    (p = n);
              }
              if (_) {
                var m = $.x,
                  g = $.y;
                q
                  ? (($.deltaX = m - parseFloat(ne.rotation)),
                    ($.rotation = m),
                    (ne.rotation = m + "deg"),
                    ne.renderTransform(1, ne))
                  : o
                    ? (X && (($.deltaY = g - o.top()), o.top(g)),
                      H && (($.deltaX = m - o.left()), o.left(m)))
                    : z
                      ? (X &&
                          (($.deltaY = g - parseFloat(ne.y)),
                          (ne.y = g + "px")),
                        H &&
                          (($.deltaX = m - parseFloat(ne.x)),
                          (ne.x = m + "px")),
                        ne.renderTransform(1, ne))
                      : (X &&
                          (($.deltaY = g - parseFloat(t.style.top || 0)),
                          (t.style.top = g + "px")),
                        H &&
                          (($.deltaX = m - parseFloat(t.style.left || 0)),
                          (t.style.left = m + "px"))),
                  !h ||
                    i ||
                    L ||
                    ((L = !0),
                    !1 === Bs($, "drag", "onDrag") &&
                      (H && ($.x -= $.deltaX), X && ($.y -= $.deltaY), e(!0)),
                    (L = !1));
              }
              _ = !1;
            },
            ue = function (e, i) {
              var n,
                r,
                s = $.x,
                a = $.y;
              t._gsap || (ne = Er.core.getCache(t)),
                ne.uncache && Er.getProperty(t, "x"),
                z
                  ? (($.x = parseFloat(ne.x)), ($.y = parseFloat(ne.y)))
                  : q
                    ? ($.x = $.rotation = parseFloat(ne.rotation))
                    : o
                      ? (($.y = o.top()), ($.x = o.left()))
                      : (($.y =
                          parseFloat(t.style.top || ((r = Ps(t)) && r.top)) ||
                          0),
                        ($.x =
                          parseFloat(t.style.left || (r || {}).left) || 0)),
                (b || E || S) &&
                  !i &&
                  ($.isDragging || $.isThrowing) &&
                  (S &&
                    ((ps.x = $.x),
                    (ps.y = $.y),
                    (n = S(ps)).x !== $.x && (($.x = n.x), (_ = !0)),
                    n.y !== $.y && (($.y = n.y), (_ = !0))),
                  b &&
                    (n = b($.x)) !== $.x &&
                    (($.x = n), q && ($.rotation = n), (_ = !0)),
                  E && ((n = E($.y)) !== $.y && ($.y = n), (_ = !0))),
                _ && le(!0),
                e ||
                  (($.deltaX = $.x - s),
                  ($.deltaY = $.y - a),
                  Bs($, "throwupdate", "onThrowUpdate"));
            },
            ce = function (e, t, i, n) {
              return (
                null == t && (t = -ss),
                null == i && (i = ss),
                Ur(e)
                  ? function (r) {
                      var s = $.isPressed ? 1 - $.edgeResistance : 1;
                      return (
                        e.call(
                          $,
                          (r > i
                            ? i + (r - i) * s
                            : r < t
                              ? t + (r - t) * s
                              : r) * n,
                        ) * n
                      );
                    }
                  : is(e)
                    ? function (n) {
                        for (var r, s, o = e.length, a = 0, l = ss; --o > -1; )
                          (s = (r = e[o]) - n) < 0 && (s = -s),
                            s < l && r >= t && r <= i && ((a = o), (l = s));
                        return e[a];
                      }
                    : isNaN(e)
                      ? function (e) {
                          return e;
                        }
                      : function () {
                          return e * n;
                        }
              );
            },
            de = function () {
              var e, n, r, s;
              (d = !1),
                o
                  ? (o.calibrate(),
                    ($.minX = m = -o.maxScrollLeft()),
                    ($.minY = v = -o.maxScrollTop()),
                    ($.maxX = f = $.maxY = g = 0),
                    (d = !0))
                  : i.bounds &&
                    ((e = Ns(i.bounds, t.parentNode)),
                    q
                      ? (($.minX = m = e.left),
                        ($.maxX = f = e.left + e.width),
                        ($.minY = v = $.maxY = g = 0))
                      : Kr(i.bounds.maxX) && Kr(i.bounds.maxY)
                        ? ((n = Ns(t, t.parentNode)),
                          ($.minX = m =
                            Math.round(se(V, "px") + e.left - n.left)),
                          ($.minY = v =
                            Math.round(se(Y, "px") + e.top - n.top)),
                          ($.maxX = f = Math.round(m + (e.width - n.width))),
                          ($.maxY = g = Math.round(v + (e.height - n.height))))
                        : ((e = i.bounds),
                          ($.minX = m = e.minX),
                          ($.minY = v = e.minY),
                          ($.maxX = f = e.maxX),
                          ($.maxY = g = e.maxY)),
                    m > f && (($.minX = f), ($.maxX = f = m), (m = $.minX)),
                    v > g && (($.minY = g), ($.maxY = g = v), (v = $.minY)),
                    q && (($.minRotation = m), ($.maxRotation = f)),
                    (d = !0)),
                i.liveSnap &&
                  ((r = !0 === i.liveSnap ? i.snap || {} : i.liveSnap),
                  (s = is(r) || Ur(r)),
                  q
                    ? ((b = ce(s ? r : r.rotation, m, f, 1)), (E = null))
                    : r.points
                      ? (S = (function (e, t, i, n, r, s, o) {
                          return (
                            (s = s && s < ss ? s * s : ss),
                            Ur(e)
                              ? function (a) {
                                  var l,
                                    u,
                                    c,
                                    d = $.isPressed ? 1 - $.edgeResistance : 1,
                                    h = a.x,
                                    p = a.y;
                                  return (
                                    (a.x = h =
                                      h > i
                                        ? i + (h - i) * d
                                        : h < t
                                          ? t + (h - t) * d
                                          : h),
                                    (a.y = p =
                                      p > r
                                        ? r + (p - r) * d
                                        : p < n
                                          ? n + (p - n) * d
                                          : p),
                                    (l = e.call($, a)) !== a &&
                                      ((a.x = l.x), (a.y = l.y)),
                                    1 !== o && ((a.x *= o), (a.y *= o)),
                                    s < ss &&
                                      (u = a.x - h) * u + (c = a.y - p) * c >
                                        s &&
                                      ((a.x = h), (a.y = p)),
                                    a
                                  );
                                }
                              : is(e)
                                ? function (t) {
                                    for (
                                      var i,
                                        n,
                                        r,
                                        o,
                                        a = e.length,
                                        l = 0,
                                        u = ss;
                                      --a > -1;

                                    )
                                      (o =
                                        (i = (r = e[a]).x - t.x) * i +
                                        (n = r.y - t.y) * n) < u &&
                                        ((l = a), (u = o));
                                    return u <= s ? e[l] : t;
                                  }
                                : function (e) {
                                    return e;
                                  }
                          );
                        })(s ? r : r.points, m, f, v, g, r.radius, o ? -1 : 1))
                      : (H &&
                          (b = ce(
                            s ? r : r.x || r.left || r.scrollLeft,
                            m,
                            f,
                            o ? -1 : 1,
                          )),
                        X &&
                          (E = ce(
                            s ? r : r.y || r.top || r.scrollTop,
                            v,
                            g,
                            o ? -1 : 1,
                          ))));
            },
            he = function () {
              ($.isThrowing = !1), Bs($, "throwcomplete", "onThrowComplete");
            },
            pe = function () {
              $.isThrowing = !1;
            },
            fe = function (e, n) {
              var r, s, a, l;
              e && zr
                ? (!0 === e &&
                    ((r = i.snap || i.liveSnap || {}),
                    (s = is(r) || Ur(r)),
                    (e = {
                      resistance:
                        (i.throwResistance || i.resistance || 1e3) /
                        (q ? 10 : 1),
                    }),
                    q
                      ? (e.rotation = qs($, s ? r : r.rotation, f, m, 1, n))
                      : (H &&
                          (e[V] = qs(
                            $,
                            s ? r : r.points || r.x || r.left,
                            f,
                            m,
                            o ? -1 : 1,
                            n || "x" === $.lockedAxis,
                          )),
                        X &&
                          (e[Y] = qs(
                            $,
                            s ? r : r.points || r.y || r.top,
                            g,
                            v,
                            o ? -1 : 1,
                            n || "y" === $.lockedAxis,
                          )),
                        (r.points || (is(r) && Qr(r[0]))) &&
                          ((e.linkedProps = V + "," + Y),
                          (e.radius = r.radius)))),
                  ($.isThrowing = !0),
                  (l = isNaN(i.overshootTolerance)
                    ? 1 === i.edgeResistance
                      ? 0
                      : 1 - $.edgeResistance + 0.2
                    : i.overshootTolerance),
                  e.duration ||
                    (e.duration = {
                      max: Math.max(
                        i.minDuration || 0,
                        "maxDuration" in i ? i.maxDuration : 2,
                      ),
                      min: isNaN(i.minDuration)
                        ? 0 === l || (Qr(e) && e.resistance > 1e3)
                          ? 0
                          : 0.5
                        : i.minDuration,
                      overshoot: l,
                    }),
                  ($.tween = a =
                    Er.to(o || t, {
                      inertia: e,
                      data: "_draggable",
                      inherit: !1,
                      onComplete: he,
                      onInterrupt: pe,
                      onUpdate: i.fastMode ? Bs : ue,
                      onUpdateParams: i.fastMode
                        ? [$, "onthrowupdate", "onThrowUpdate"]
                        : r && r.radius
                          ? [!1, !0]
                          : [],
                    })),
                  i.fastMode ||
                    (o && (o._skip = !0),
                    a.render(1e9, !0, !0),
                    ue(!0, !0),
                    ($.endX = $.x),
                    ($.endY = $.y),
                    q && ($.endRotation = $.x),
                    a.play(0),
                    ue(!0, !0),
                    o && (o._skip = !1)))
                : d && $.applyBounds();
            },
            me = function (e) {
              var i,
                n = M;
              (M = xr(t.parentNode, !0)),
                e &&
                  $.isPressed &&
                  !M.equals(n || new _r()) &&
                  ((i = n.inverse().apply({ x: a, y: l })),
                  M.apply(i, i),
                  (a = i.x),
                  (l = i.y)),
                M.equals(os) && (M = null);
            },
            ge = function () {
              var e,
                i,
                n,
                r = 1 - $.edgeResistance,
                s = re ? Ts(oe) : 0,
                h = re ? Ss(oe) : 0;
              z &&
                ((ne.x = se(V, "px") + "px"),
                (ne.y = se(Y, "px") + "px"),
                ne.renderTransform()),
                me(!1),
                (Rs.x = $.pointerX - s),
                (Rs.y = $.pointerY - h),
                M && M.apply(Rs, Rs),
                (a = Rs.x),
                (l = Rs.y),
                _ && (_e($.pointerX, $.pointerY), le(!0)),
                (B = xr(t)),
                o
                  ? (de(), (c = o.top()), (u = o.left()))
                  : (ve() ? (ue(!0, !0), de()) : $.applyBounds(),
                    q
                      ? ((e = t.ownerSVGElement
                          ? [
                              ne.xOrigin - t.getBBox().x,
                              ne.yOrigin - t.getBBox().y,
                            ]
                          : (Ps(t)[es] || "0 0").split(" ")),
                        (w = $.rotationOrigin =
                          xr(t).apply({
                            x: parseFloat(e[0]) || 0,
                            y: parseFloat(e[1]) || 0,
                          })),
                        ue(!0, !0),
                        (i = $.pointerX - w.x - s),
                        (n = w.y - $.pointerY + h),
                        (u = $.x),
                        (c = $.y = Math.atan2(n, i) * rs))
                      : ((c = se(Y, "px")), (u = se(V, "px")))),
                d &&
                  r &&
                  (u > f
                    ? (u = f + (u - f) / r)
                    : u < m && (u = m - (m - u) / r),
                  q ||
                    (c > g
                      ? (c = g + (c - g) / r)
                      : c < v && (c = v - (v - c) / r))),
                ($.startX = u = ts(u)),
                ($.startY = c = ts(c));
            },
            ve = function () {
              return $.tween && $.tween.isActive();
            },
            ye = function () {
              !Fr.parentNode ||
                ve() ||
                $.isDragging ||
                Fr.parentNode.removeChild(Fr);
            },
            De = function (e, r) {
              var u;
              if (
                !s ||
                $.isPressed ||
                !e ||
                (!(("mousedown" !== e.type && "pointerdown" !== e.type) || r) &&
                  as() - ie < 30 &&
                  Br[$.pointerEvent.type])
              )
                I && e && s && xs(e);
              else {
                if (
                  ((A = ve()),
                  (N = !1),
                  ($.pointerEvent = e),
                  Br[e.type]
                    ? ((C = ~e.type.indexOf("touch")
                        ? e.currentTarget || e.target
                        : oe),
                      ws(C, "touchend", xe),
                      ws(C, "touchmove", we),
                      ws(C, "touchcancel", xe),
                      ws(oe, "touchstart", Es))
                    : ((C = null), ws(oe, "mousemove", we)),
                  (k = null),
                  (Vr && C) ||
                    (ws(oe, "mouseup", xe),
                    e && e.target && ws(e.target, "mouseup", xe)),
                  (T = te.call($, e.target) && !1 === i.dragClickables && !r))
                )
                  return (
                    ws(e.target, "change", xe),
                    Bs($, "pressInit", "onPressInit"),
                    Bs($, "press", "onPress"),
                    Ys(G, !0),
                    void (I = !1)
                  );
                var c;
                if (
                  ((F =
                    !(
                      !C ||
                      H === X ||
                      !1 === $.vars.allowNativeTouchScrolling ||
                      ($.vars.allowContextMenu &&
                        e &&
                        (e.ctrlKey || e.which > 2))
                    ) && (H ? "y" : "x")),
                  (I = !F && !$.allowEventDefault) &&
                    (xs(e), ws(Sr, "touchforcechange", xs)),
                  e.changedTouches
                    ? ((e = y = e.changedTouches[0]), (D = e.identifier))
                    : e.pointerId
                      ? (D = e.pointerId)
                      : (y = D = null),
                  $r++,
                  (c = le),
                  ls.push(c),
                  1 === ls.length && Er.ticker.add(vs),
                  (l = $.pointerY = e.pageY),
                  (a = $.pointerX = e.pageX),
                  Bs($, "pressInit", "onPressInit"),
                  (F || $.autoScroll) && ks(t.parentNode),
                  !t.parentNode ||
                    !$.autoScroll ||
                    o ||
                    q ||
                    !t.parentNode._gsMaxScrollX ||
                    Fr.parentNode ||
                    t.getBBox ||
                    ((Fr.style.width = t.parentNode.scrollWidth + "px"),
                    t.parentNode.appendChild(Fr)),
                  ge(),
                  $.tween && $.tween.kill(),
                  ($.isThrowing = !1),
                  Er.killTweensOf(o || t, j, !0),
                  o && Er.killTweensOf(t, { scrollTo: 1 }, !0),
                  ($.tween = $.lockedAxis = null),
                  (i.zIndexBoost || (!q && !o && !1 !== i.zIndexBoost)) &&
                    (t.style.zIndex = n.zIndex++),
                  ($.isPressed = !0),
                  (h = !(!i.onDrag && !$._listeners.drag)),
                  (p = !(!i.onMove && !$._listeners.move)),
                  !1 !== i.cursor || i.activeCursor)
                )
                  for (u = G.length; --u > -1; )
                    Er.set(G[u], {
                      cursor:
                        i.activeCursor ||
                        i.cursor ||
                        ("grab" === qr ? "grabbing" : qr),
                    });
                Bs($, "press", "onPress");
              }
            },
            we = function (e) {
              var i,
                n,
                r,
                o,
                u,
                c,
                d = e;
              if (s && !Nr && $.isPressed && e) {
                if ((($.pointerEvent = e), (i = e.changedTouches))) {
                  if ((e = i[0]) !== y && e.identifier !== D) {
                    for (
                      o = i.length;
                      --o > -1 && (e = i[o]).identifier !== D && e.target !== t;

                    );
                    if (o < 0) return;
                  }
                } else if (e.pointerId && D && e.pointerId !== D) return;
                C &&
                F &&
                !k &&
                ((Rs.x = e.pageX - (re ? Ts(oe) : 0)),
                (Rs.y = e.pageY - (re ? Ss(oe) : 0)),
                M && M.apply(Rs, Rs),
                (n = Rs.x),
                (r = Rs.y),
                (((u = Math.abs(n - a)) !== (c = Math.abs(r - l)) &&
                  (u > W || c > W)) ||
                  (Rr && F === k)) &&
                  ((k = u > c && H ? "x" : "y"),
                  F && k !== F && ws(Sr, "touchforcechange", xs),
                  !1 !== $.vars.lockAxisOnTouchScroll &&
                    H &&
                    X &&
                    (($.lockedAxis = "x" === k ? "y" : "x"),
                    Ur($.vars.onLockAxis) && $.vars.onLockAxis.call($, d)),
                  Rr && F === k))
                  ? xe(d)
                  : ($.allowEventDefault ||
                    (F && (!k || F === k)) ||
                    !1 === d.cancelable
                      ? I && (I = !1)
                      : (xs(d), (I = !0)),
                    $.autoScroll && (Q = !0),
                    _e(e.pageX, e.pageY, p));
              } else I && e && s && xs(e);
            },
            _e = function (e, t, i) {
              var n,
                r,
                s,
                o,
                h,
                p,
                y = 1 - $.dragResistance,
                D = 1 - $.edgeResistance,
                x = $.pointerX,
                T = $.pointerY,
                C = c,
                A = $.x,
                F = $.y,
                k = $.endX,
                L = $.endY,
                P = $.endRotation,
                O = _;
              ($.pointerX = e),
                ($.pointerY = t),
                re && ((e -= Ts(oe)), (t -= Ss(oe))),
                q
                  ? ((o = Math.atan2(w.y - t, e - w.x) * rs),
                    (h = $.y - o) > 180
                      ? ((c -= 360), ($.y = o))
                      : h < -180 && ((c += 360), ($.y = o)),
                    $.x !== u || Math.max(Math.abs(a - e), Math.abs(l - t)) > W
                      ? (($.y = o), (s = u + (c - o) * y))
                      : (s = u))
                  : (M &&
                      ((p = e * M.a + t * M.c + M.e),
                      (t = e * M.b + t * M.d + M.f),
                      (e = p)),
                    (r = t - l) < W && r > -W && (r = 0),
                    (n = e - a) < W && n > -W && (n = 0),
                    ($.lockAxis || $.lockedAxis) &&
                      (n || r) &&
                      ((p = $.lockedAxis) ||
                        (($.lockedAxis = p =
                          H && Math.abs(n) > Math.abs(r)
                            ? "y"
                            : X
                              ? "x"
                              : null),
                        p &&
                          Ur($.vars.onLockAxis) &&
                          $.vars.onLockAxis.call($, $.pointerEvent)),
                      "y" === p ? (r = 0) : "x" === p && (n = 0)),
                    (s = ts(u + n * y)),
                    (o = ts(c + r * y))),
                (b || E || S) &&
                  ($.x !== s || ($.y !== o && !q)) &&
                  (S &&
                    ((ps.x = s),
                    (ps.y = o),
                    (p = S(ps)),
                    (s = ts(p.x)),
                    (o = ts(p.y))),
                  b && (s = ts(b(s))),
                  E && (o = ts(E(o)))),
                d &&
                  (s > f
                    ? (s = f + Math.round((s - f) * D))
                    : s < m && (s = m + Math.round((s - m) * D)),
                  q ||
                    (o > g
                      ? (o = Math.round(g + (o - g) * D))
                      : o < v && (o = Math.round(v + (o - v) * D)))),
                ($.x !== s || ($.y !== o && !q)) &&
                  (q
                    ? (($.endRotation = $.x = $.endX = s), (_ = !0))
                    : (X && (($.y = $.endY = o), (_ = !0)),
                      H && (($.x = $.endX = s), (_ = !0))),
                  i && !1 === Bs($, "move", "onMove")
                    ? (($.pointerX = x),
                      ($.pointerY = T),
                      (c = C),
                      ($.x = A),
                      ($.y = F),
                      ($.endX = k),
                      ($.endY = L),
                      ($.endRotation = P),
                      (_ = O))
                    : !$.isDragging &&
                      $.isPressed &&
                      (($.isDragging = N = !0),
                      Bs($, "dragstart", "onDragStart")));
            },
            xe = function e(n, r) {
              if (
                s &&
                $.isPressed &&
                (!n ||
                  null == D ||
                  r ||
                  !(
                    (n.pointerId && n.pointerId !== D && n.target !== t) ||
                    (n.changedTouches &&
                      !(function (e, t) {
                        for (var i = e.length; i--; )
                          if (e[i].identifier === t) return !0;
                      })(n.changedTouches, D))
                  ))
              ) {
                $.isPressed = !1;
                var o,
                  a,
                  l,
                  u,
                  c,
                  d = n,
                  h = $.isDragging,
                  p =
                    $.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                  f = Er.delayedCall(0.001, ye);
                if (
                  (C
                    ? (_s(C, "touchend", e),
                      _s(C, "touchmove", we),
                      _s(C, "touchcancel", e),
                      _s(oe, "touchstart", Es))
                    : _s(oe, "mousemove", we),
                  _s(Sr, "touchforcechange", xs),
                  (Vr && C) ||
                    (_s(oe, "mouseup", e),
                    n && n.target && _s(n.target, "mouseup", e)),
                  (_ = !1),
                  h && ((U = hs = as()), ($.isDragging = !1)),
                  Ds(le),
                  T && !p)
                )
                  return (
                    n && (_s(n.target, "change", e), ($.pointerEvent = d)),
                    Ys(G, !1),
                    Bs($, "release", "onRelease"),
                    Bs($, "click", "onClick"),
                    void (T = !1)
                  );
                for (a = G.length; --a > -1; )
                  Ls(G[a], "cursor", i.cursor || (!1 !== i.cursor ? qr : null));
                if (($r--, n)) {
                  if (
                    (o = n.changedTouches) &&
                    (n = o[0]) !== y &&
                    n.identifier !== D
                  ) {
                    for (
                      a = o.length;
                      --a > -1 && (n = o[a]).identifier !== D && n.target !== t;

                    );
                    if (a < 0 && !r) return;
                  }
                  ($.pointerEvent = d),
                    ($.pointerX = n.pageX),
                    ($.pointerY = n.pageY);
                }
                return (
                  p && d
                    ? (xs(d), (I = !0), Bs($, "release", "onRelease"))
                    : d && !h
                      ? ((I = !1),
                        A &&
                          (i.snap || i.bounds) &&
                          fe(i.inertia || i.throwProps),
                        Bs($, "release", "onRelease"),
                        (Rr && "touchmove" === d.type) ||
                          -1 !== d.type.indexOf("cancel") ||
                          (Bs($, "click", "onClick"),
                          as() - ie < 300 &&
                            Bs($, "doubleclick", "onDoubleClick"),
                          (u = d.target || t),
                          (ie = as()),
                          (c = function () {
                            ie === P ||
                              !$.enabled() ||
                              $.isPressed ||
                              d.defaultPrevented ||
                              (u.click
                                ? u.click()
                                : oe.createEvent &&
                                  ((l =
                                    oe.createEvent(
                                      "MouseEvents",
                                    )).initMouseEvent(
                                    "click",
                                    !0,
                                    !0,
                                    Sr,
                                    1,
                                    $.pointerEvent.screenX,
                                    $.pointerEvent.screenY,
                                    $.pointerX,
                                    $.pointerY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null,
                                  ),
                                  u.dispatchEvent(l)));
                          }),
                          Rr || d.defaultPrevented || Er.delayedCall(0.05, c)))
                      : (fe(i.inertia || i.throwProps),
                        $.allowEventDefault ||
                        !d ||
                        (!1 === i.dragClickables && te.call($, d.target)) ||
                        !h ||
                        (F && (!k || F !== k)) ||
                        !1 === d.cancelable
                          ? (I = !1)
                          : ((I = !0), xs(d)),
                        Bs($, "release", "onRelease")),
                  ve() && f.duration($.tween.duration()),
                  h && Bs($, "dragend", "onDragEnd"),
                  !0
                );
              }
              I && n && s && xs(n);
            },
            be = function (e) {
              if (e && $.isDragging && !o) {
                var i = e.target || t.parentNode,
                  n = i.scrollLeft - i._gsScrollX,
                  r = i.scrollTop - i._gsScrollY;
                (n || r) &&
                  (M
                    ? ((a -= n * M.a + r * M.c), (l -= r * M.d + n * M.b))
                    : ((a -= n), (l -= r)),
                  (i._gsScrollX += n),
                  (i._gsScrollY += r),
                  _e($.pointerX, $.pointerY));
              }
            },
            Ee = function (e) {
              var t = as(),
                i = t - ie < 100,
                n = t - U < 50,
                r = i && P === ie,
                s = $.pointerEvent && $.pointerEvent.defaultPrevented,
                o = i && O === ie,
                a = e.isTrusted || (null == e.isTrusted && i && r);
              if (
                ((r || (n && !1 !== $.vars.suppressClickOnDrag)) &&
                  e.stopImmediatePropagation &&
                  e.stopImmediatePropagation(),
                i &&
                  (!$.pointerEvent || !$.pointerEvent.defaultPrevented) &&
                  (!r || (a && !o)))
              )
                return a && r && (O = ie), void (P = ie);
              ($.isPressed || n || i) && ((a && e.detail && i && !s) || xs(e)),
                i ||
                  n ||
                  N ||
                  (e && e.target && ($.pointerEvent = e),
                  Bs($, "click", "onClick"));
            },
            Se = function (e) {
              return M
                ? {
                    x: e.x * M.a + e.y * M.c + M.e,
                    y: e.x * M.b + e.y * M.d + M.f,
                  }
                : { x: e.x, y: e.y };
            };
          return (
            (x = n.get(t)) && x.kill(),
            (r.startDrag = function (e, i) {
              var n, r, s, o;
              De(e || $.pointerEvent, !0),
                i &&
                  !$.hitTest(e || $.pointerEvent) &&
                  ((n = Is(e || $.pointerEvent)),
                  (r = Is(t)),
                  (s = Se({
                    x: n.left + n.width / 2,
                    y: n.top + n.height / 2,
                  })),
                  (o = Se({
                    x: r.left + r.width / 2,
                    y: r.top + r.height / 2,
                  })),
                  (a -= s.x - o.x),
                  (l -= s.y - o.y)),
                $.isDragging ||
                  (($.isDragging = N = !0), Bs($, "dragstart", "onDragStart"));
            }),
            (r.drag = we),
            (r.endDrag = function (e) {
              return xe(e || $.pointerEvent, !0);
            }),
            (r.timeSinceDrag = function () {
              return $.isDragging ? 0 : (as() - U) / 1e3;
            }),
            (r.timeSinceClick = function () {
              return (as() - ie) / 1e3;
            }),
            (r.hitTest = function (e, t) {
              return n.hitTest($.target, e, t);
            }),
            (r.getDirection = function (e, i) {
              var n,
                r,
                s,
                o,
                a,
                l,
                d =
                  "velocity" === e && zr
                    ? e
                    : Qr(e) && !q
                      ? "element"
                      : "start";
              return (
                "element" === d && ((a = Is($.target)), (l = Is(e))),
                (n =
                  "start" === d
                    ? $.x - u
                    : "velocity" === d
                      ? zr.getVelocity(t, V)
                      : a.left + a.width / 2 - (l.left + l.width / 2)),
                q
                  ? n < 0
                    ? "counter-clockwise"
                    : "clockwise"
                  : ((i = i || 2),
                    (r =
                      "start" === d
                        ? $.y - c
                        : "velocity" === d
                          ? zr.getVelocity(t, Y)
                          : a.top + a.height / 2 - (l.top + l.height / 2)),
                    (o =
                      (s = Math.abs(n / r)) < 1 / i
                        ? ""
                        : n < 0
                          ? "left"
                          : "right"),
                    s < i &&
                      ("" !== o && (o += "-"), (o += r < 0 ? "up" : "down")),
                    o)
              );
            }),
            (r.applyBounds = function (e, n) {
              var r, s, o, a, l, u;
              if (e && i.bounds !== e) return (i.bounds = e), $.update(!0, n);
              if ((ue(!0), de(), d && !ve())) {
                if (
                  ((r = $.x),
                  (s = $.y),
                  r > f ? (r = f) : r < m && (r = m),
                  s > g ? (s = g) : s < v && (s = v),
                  ($.x !== r || $.y !== s) &&
                    ((o = !0),
                    ($.x = $.endX = r),
                    q ? ($.endRotation = r) : ($.y = $.endY = s),
                    (_ = !0),
                    le(!0),
                    $.autoScroll && !$.isDragging))
                )
                  for (
                    ks(t.parentNode),
                      a = t,
                      fs.scrollTop =
                        null != Sr.pageYOffset
                          ? Sr.pageYOffset
                          : null != oe.documentElement.scrollTop
                            ? oe.documentElement.scrollTop
                            : oe.body.scrollTop,
                      fs.scrollLeft =
                        null != Sr.pageXOffset
                          ? Sr.pageXOffset
                          : null != oe.documentElement.scrollLeft
                            ? oe.documentElement.scrollLeft
                            : oe.body.scrollLeft;
                    a && !u;

                  )
                    (l = (u = As(a.parentNode)) ? fs : a.parentNode),
                      X &&
                        l.scrollTop > l._gsMaxScrollY &&
                        (l.scrollTop = l._gsMaxScrollY),
                      H &&
                        l.scrollLeft > l._gsMaxScrollX &&
                        (l.scrollLeft = l._gsMaxScrollX),
                      (a = l);
                $.isThrowing &&
                  (o || $.endX > f || $.endX < m || $.endY > g || $.endY < v) &&
                  fe(i.inertia || i.throwProps, o);
              }
              return $;
            }),
            (r.update = function (e, i, n) {
              if (i && $.isPressed) {
                var r = xr(t),
                  s = B.apply({ x: $.x - u, y: $.y - c }),
                  o = xr(t.parentNode, !0);
                o.apply({ x: r.e - s.x, y: r.f - s.y }, s),
                  ($.x -= s.x - o.e),
                  ($.y -= s.y - o.f),
                  le(!0),
                  ge();
              }
              var a = $.x,
                l = $.y;
              return (
                me(!i),
                e ? $.applyBounds() : (_ && n && le(!0), ue(!0)),
                i && (_e($.pointerX, $.pointerY), _ && le(!0)),
                $.isPressed &&
                  !i &&
                  ((H && Math.abs(a - $.x) > 0.01) ||
                    (X && Math.abs(l - $.y) > 0.01 && !q)) &&
                  ge(),
                $.autoScroll &&
                  (ks(t.parentNode, $.isDragging),
                  (Q = $.isDragging),
                  le(!0),
                  Ms(t, be),
                  Cs(t, be)),
                $
              );
            }),
            (r.enable = function (e) {
              var n,
                r,
                a,
                l = { lazy: !0 };
              if (
                (!1 !== i.cursor && (l.cursor = i.cursor || qr),
                Er.utils.checkPrefix("touchCallout") &&
                  (l.touchCallout = "none"),
                "soft" !== e)
              ) {
                for (
                  gs(
                    G,
                    H === X
                      ? "none"
                      : (i.allowNativeTouchScrolling &&
                            (t.scrollHeight === t.clientHeight) ==
                              (t.scrollWidth === t.clientHeight)) ||
                          i.allowEventDefault
                        ? "manipulation"
                        : H
                          ? "pan-y"
                          : "pan-x",
                  ),
                    r = G.length;
                  --r > -1;

                )
                  (a = G[r]),
                    Vr || ws(a, "mousedown", De),
                    ws(a, "touchstart", De),
                    ws(a, "click", Ee, !0),
                    Er.set(a, l),
                    a.getBBox &&
                      a.ownerSVGElement &&
                      H !== X &&
                      Er.set(a.ownerSVGElement, {
                        touchAction:
                          i.allowNativeTouchScrolling || i.allowEventDefault
                            ? "manipulation"
                            : H
                              ? "pan-y"
                              : "pan-x",
                      }),
                    i.allowContextMenu || ws(a, "contextmenu", ae);
                Ys(G, !1);
              }
              return (
                Cs(t, be),
                (s = !0),
                zr &&
                  "soft" !== e &&
                  zr.track(o || t, z ? "x,y" : q ? "rotation" : "top,left"),
                (t._gsDragID = n = t._gsDragID || "d" + cs++),
                (us[n] = $),
                o && (o.enable(), (o.element._gsDragID = n)),
                (i.bounds || q) && ge(),
                i.bounds && $.applyBounds(),
                $
              );
            }),
            (r.disable = function (e) {
              for (var i, n = $.isDragging, r = G.length; --r > -1; )
                Ls(G[r], "cursor", null);
              if ("soft" !== e) {
                for (gs(G, null), r = G.length; --r > -1; )
                  (i = G[r]),
                    Ls(i, "touchCallout", null),
                    _s(i, "mousedown", De),
                    _s(i, "touchstart", De),
                    _s(i, "click", Ee, !0),
                    _s(i, "contextmenu", ae);
                Ys(G, !0),
                  C &&
                    (_s(C, "touchcancel", xe),
                    _s(C, "touchend", xe),
                    _s(C, "touchmove", we)),
                  _s(oe, "mouseup", xe),
                  _s(oe, "mousemove", we);
              }
              return (
                Ms(t, be),
                (s = !1),
                zr &&
                  "soft" !== e &&
                  (zr.untrack(o || t, z ? "x,y" : q ? "rotation" : "top,left"),
                  $.tween && $.tween.kill()),
                o && o.disable(),
                Ds(le),
                ($.isDragging = $.isPressed = T = !1),
                n && Bs($, "dragend", "onDragEnd"),
                $
              );
            }),
            (r.enabled = function (e, t) {
              return arguments.length ? (e ? $.enable(t) : $.disable(t)) : s;
            }),
            (r.kill = function () {
              return (
                ($.isThrowing = !1),
                $.tween && $.tween.kill(),
                $.disable(),
                Er.set(G, { clearProps: "userSelect" }),
                delete us[t._gsDragID],
                $
              );
            }),
            (r.revert = function () {
              this.kill(), this.styles && this.styles.revert();
            }),
            ~R.indexOf("scroll") &&
              ((o = r.scrollProxy =
                new Xs(
                  t,
                  (function (e, t) {
                    for (var i in t) i in e || (e[i] = t[i]);
                    return e;
                  })(
                    {
                      onKill: function () {
                        $.isPressed && xe(null);
                      },
                    },
                    i,
                  ),
                )),
              (t.style.overflowY = X && !Ir ? "auto" : "hidden"),
              (t.style.overflowX = H && !Ir ? "auto" : "hidden"),
              (t = o.content)),
            q ? (j.rotation = 1) : (H && (j[V] = 1), X && (j[Y] = 1)),
            (ne.force3D = !("force3D" in i) || i.force3D),
            Yr(br(r)),
            r.enable(),
            r
          );
        }
        return (
          (i = e),
          ((t = n).prototype = Object.create(i.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = i),
          (n.register = function (e) {
            (Er = e), Ws();
          }),
          (n.create = function (e, t) {
            return (
              kr || Ws(),
              Pr(e).map(function (e) {
                return new n(e, t);
              })
            );
          }),
          (n.get = function (e) {
            return us[(Pr(e)[0] || {})._gsDragID];
          }),
          (n.timeSinceDrag = function () {
            return (as() - hs) / 1e3;
          }),
          (n.hitTest = function (e, t, i) {
            if (e === t) return !1;
            var n,
              r,
              s,
              o = Is(e),
              a = Is(t),
              l = o.top,
              u = o.left,
              c = o.right,
              d = o.bottom,
              h = o.width,
              p = o.height,
              f = a.left > c || a.right < u || a.top > d || a.bottom < l;
            return f || !i
              ? !f
              : ((s = -1 !== (i + "").indexOf("%")),
                (i = parseFloat(i) || 0),
                ((n = {
                  left: Math.max(u, a.left),
                  top: Math.max(l, a.top),
                }).width = Math.min(c, a.right) - n.left),
                (n.height = Math.min(d, a.bottom) - n.top),
                !(n.width < 0 || n.height < 0) &&
                  (s
                    ? ((i *= 0.01),
                      (r = n.width * n.height) >= h * p * i ||
                        r >= a.width * a.height * i)
                    : n.width > i && n.height > i));
          }),
          n
        );
      })($s);
    !(function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
    })(Gs.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1,
    }),
      (Gs.zIndex = 1e3),
      (Gs.version = "3.12.7"),
      jr() && Er.registerPlugin(Gs);
    var js,
      Us,
      Qs,
      Ks,
      Zs,
      Js,
      eo,
      to,
      io = function () {
        return js || ("undefined" != typeof window && (js = window.gsap));
      },
      no = {},
      ro = function (e) {
        return to(e).id;
      },
      so = function (e) {
        return no[ro("string" == typeof e ? Qs(e)[0] : e)];
      },
      oo = function (e) {
        var t,
          i = Zs;
        if (e - eo >= 0.05)
          for (eo = e; i; )
            ((t = i.g(i.t, i.p)) !== i.v1 || e - i.t1 > 0.2) &&
              ((i.v2 = i.v1), (i.v1 = t), (i.t2 = i.t1), (i.t1 = e)),
              (i = i._next);
      },
      ao = { deg: 360, rad: 2 * Math.PI },
      lo = function () {
        (js = io()) &&
          ((Qs = js.utils.toArray),
          (Ks = js.utils.getUnit),
          (to = js.core.getCache),
          (Js = js.ticker),
          (Us = 1));
      },
      uo = function (e, t, i, n) {
        (this.t = e),
          (this.p = t),
          (this.g = e._gsap.get),
          (this.rCap = ao[i || Ks(this.g(e, t))]),
          (this.v1 = this.v2 = 0),
          (this.t1 = this.t2 = Js.time),
          n && ((this._next = n), (n._prev = this));
      },
      co = (function () {
        function e(e, t) {
          Us || lo(),
            (this.target = Qs(e)[0]),
            (no[ro(this.target)] = this),
            (this._props = {}),
            t && this.add(t);
        }
        e.register = function (e) {
          (js = e), lo();
        };
        var t = e.prototype;
        return (
          (t.get = function (e, t) {
            var i,
              n,
              r,
              s = this._props[e] || void 0;
            return (
              (i = parseFloat(t ? s.v1 : s.g(s.t, s.p)) - parseFloat(s.v2)),
              (n = s.rCap) &&
                (i %= n) !== i % (n / 2) &&
                (i = i < 0 ? i + n : i - n),
              (r = i / ((t ? s.t1 : Js.time) - s.t2)),
              Math.round(1e4 * r) / 1e4
            );
          }),
          (t.getAll = function () {
            var e,
              t = {},
              i = this._props;
            for (e in i) t[e] = this.get(e);
            return t;
          }),
          (t.isTracking = function (e) {
            return e in this._props;
          }),
          (t.add = function (e, t) {
            e in this._props ||
              (Zs || (Js.add(oo), (eo = Js.time)),
              (Zs = this._props[e] = new uo(this.target, e, t, Zs)));
          }),
          (t.remove = function (e) {
            var t,
              i,
              n = this._props[e];
            n &&
              ((t = n._prev),
              (i = n._next),
              t && (t._next = i),
              i ? (i._prev = t) : Zs === n && (Js.remove(oo), (Zs = 0)),
              delete this._props[e]);
          }),
          (t.kill = function (e) {
            for (var t in this._props) this.remove(t);
            e || delete no[ro(this.target)];
          }),
          (e.track = function (t, i, n) {
            Us || lo();
            for (
              var r,
                s,
                o = [],
                a = Qs(t),
                l = i.split(","),
                u = (n || "").split(","),
                c = a.length;
              c--;

            ) {
              for (r = so(a[c]) || new e(a[c]), s = l.length; s--; )
                r.add(l[s], u[s] || u[0]);
              o.push(r);
            }
            return o;
          }),
          (e.untrack = function (e, t) {
            var i = (t || "").split(",");
            Qs(e).forEach(function (e) {
              var t = so(e);
              t &&
                (i.length
                  ? i.forEach(function (e) {
                      return t.remove(e);
                    })
                  : t.kill(1));
            });
          }),
          (e.isTracking = function (e, t) {
            var i = so(e);
            return i && i.isTracking(t);
          }),
          (e.getVelocity = function (e, t) {
            var i = so(e);
            return i && i.isTracking(t) ? i.get(t) : void 0;
          }),
          e
        );
      })();
    (co.getByTarget = so), io() && js.registerPlugin(co);
    var ho,
      po,
      fo,
      mo,
      go,
      vo,
      yo,
      Do,
      wo,
      _o,
      xo,
      bo,
      Eo,
      So,
      To = co.getByTarget,
      Co = function () {
        return (
          ho ||
          ("undefined" != typeof window &&
            (ho = window.gsap) &&
            ho.registerPlugin &&
            ho)
        );
      },
      Mo = function (e) {
        return "number" == typeof e;
      },
      Ao = function (e) {
        return "object" == typeof e;
      },
      Fo = function (e) {
        return "function" == typeof e;
      },
      ko = Array.isArray,
      Lo = function (e) {
        return e;
      },
      Po = 1e10,
      Oo = function (e, t, i) {
        for (var n in t) n in e || n === i || (e[n] = t[n]);
        return e;
      },
      Io = function e(t) {
        var i,
          n,
          r = {};
        for (i in t) r[i] = Ao((n = t[i])) && !ko(n) ? e(n) : n;
        return r;
      },
      Bo = function (e, t, i, n, r) {
        var s,
          o,
          a,
          l,
          u = t.length,
          c = 0,
          d = Po;
        if (Ao(e)) {
          for (; u--; ) {
            for (a in ((s = t[u]), (o = 0), e)) o += (l = s[a] - e[a]) * l;
            o < d && ((c = u), (d = o));
          }
          if ((r || Po) < Po && r < Math.sqrt(d)) return e;
        } else
          for (; u--; )
            (o = (s = t[u]) - e) < 0 && (o = -o),
              o < d && s >= n && s <= i && ((c = u), (d = o));
        return t[c];
      },
      No = function (e, t, i, n, r, s, o) {
        if ("auto" === e.end) return e;
        var a,
          l,
          u = e.end;
        if (((i = isNaN(i) ? Po : i), (n = isNaN(n) ? -1e10 : n), Ao(t))) {
          if (
            ((a = t.calculated
              ? t
              : (Fo(u) ? u(t, o) : Bo(t, u, i, n, s)) || t),
            !t.calculated)
          ) {
            for (l in a) t[l] = a[l];
            t.calculated = !0;
          }
          a = a[r];
        } else a = Fo(u) ? u(t, o) : ko(u) ? Bo(t, u, i, n, s) : parseFloat(u);
        return (
          a > i ? (a = i) : a < n && (a = n),
          { max: a, min: a, unitFactor: e.unitFactor }
        );
      },
      Ro = function (e, t, i) {
        return isNaN(e[t]) ? i : +e[t];
      },
      zo = function (e, t) {
        return (0.05 * t * e) / _o;
      },
      qo = function (e, t, i) {
        return Math.abs(((t - e) * _o) / i / 0.05);
      },
      Vo = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1,
      },
      Yo = function (e, t, i, n) {
        if (t.linkedProps) {
          var r,
            s,
            o,
            a,
            l,
            u,
            c = t.linkedProps.split(","),
            d = {};
          for (r = 0; r < c.length; r++)
            (o = t[(s = c[r])]) &&
              ((a = Mo(o.velocity)
                ? o.velocity
                : (l = l || To(e)) && l.isTracking(s)
                  ? l.get(s)
                  : 0),
              (u = Math.abs(a / Ro(o, "resistance", n))),
              (d[s] = parseFloat(i(e, s)) + zo(a, u)));
          return d;
        }
      },
      Ho = function () {
        (ho = Co()) &&
          ((fo = ho.parseEase),
          (mo = ho.utils.toArray),
          (yo = ho.utils.getUnit),
          (wo = ho.core.getCache),
          (xo = ho.utils.clamp),
          (Eo = ho.core.getStyleSaver),
          (So = ho.core.reverting || function () {}),
          (go = fo("power3")),
          (_o = go(0.05)),
          (Do = ho.core.PropTween),
          ho.config({
            resistance: 100,
            unitFactors: {
              time: 1e3,
              totalTime: 1e3,
              progress: 1e3,
              totalProgress: 1e3,
            },
          }),
          (vo = ho.config()),
          ho.registerPlugin(co),
          (po = 1));
      },
      Xo = {
        version: "3.12.7",
        name: "inertia",
        register: function (e) {
          (ho = e), Ho();
        },
        init: function (e, t, i, n, r) {
          po || Ho();
          var s = To(e);
          if ("auto" === t) {
            if (!s) return;
            t = s.getAll();
          }
          (this.styles = Eo && "object" == typeof e.style && Eo(e)),
            (this.target = e),
            (this.tween = i),
            (bo = t);
          var o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            m = e._gsap,
            g = m.get,
            v = t.duration,
            y = Ao(v),
            D = t.preventOvershoot || (y && 0 === v.overshoot),
            w = Ro(t, "resistance", vo.resistance),
            _ = Mo(v)
              ? v
              : (function (e, t, i, n, r, s) {
                  if (
                    (void 0 === i && (i = 10),
                    void 0 === n && (n = 0.2),
                    void 0 === r && (r = 1),
                    void 0 === s && (s = 0),
                    "string" == typeof e && (e = mo(e)[0]),
                    !e)
                  )
                    return 0;
                  var o,
                    a,
                    l,
                    u,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g = 0,
                    v = Po,
                    y = t.inertia || t,
                    D = wo(e).get,
                    w = Ro(y, "resistance", vo.resistance);
                  for (o in ((m = Yo(e, y, D, w)), y))
                    Vo[o] ||
                      ((a = y[o]),
                      Ao(a) ||
                        ((p = p || To(e)) && p.isTracking(o)
                          ? (a = Mo(a)
                              ? { velocity: a }
                              : { velocity: p.get(o) })
                          : ((u = +a || 0), (l = Math.abs(u / w)))),
                      Ao(a) &&
                        ((u = Mo(a.velocity)
                          ? a.velocity
                          : (p = p || To(e)) && p.isTracking(o)
                            ? p.get(o)
                            : 0),
                        (l = xo(n, i, Math.abs(u / Ro(a, "resistance", w)))),
                        (d = (c = parseFloat(D(e, o)) || 0) + zo(u, l)),
                        "end" in a &&
                          ((a = No(
                            a,
                            m && o in m ? m : d,
                            a.max,
                            a.min,
                            o,
                            y.radius,
                            u,
                          )),
                          s &&
                            (bo === t && (bo = y = Io(t)),
                            (y[o] = Oo(a, y[o], "end")))),
                        "max" in a && d > +a.max + 1e-10
                          ? ((f = a.unitFactor || vo.unitFactors[o] || 1),
                            (h =
                              (c > a.max && a.min !== a.max) ||
                              (u * f > -15 && u * f < 45)
                                ? n + 0.1 * (i - n)
                                : qo(c, a.max, u)) +
                              r <
                              v && (v = h + r))
                          : "min" in a &&
                            d < +a.min - 1e-10 &&
                            ((f = a.unitFactor || vo.unitFactors[o] || 1),
                            (h =
                              (c < a.min && a.min !== a.max) ||
                              (u * f > -45 && u * f < 15)
                                ? n + 0.1 * (i - n)
                                : qo(c, a.min, u)) +
                              r <
                              v && (v = h + r)),
                        h > g && (g = h)),
                      l > g && (g = l));
                  return g > v && (g = v), g > i ? i : g < n ? n : g;
                })(
                  e,
                  t,
                  (y && v.max) || 10,
                  (y && v.min) || 0.2,
                  y && "overshoot" in v ? +v.overshoot : D ? 0 : 1,
                  !0,
                );
          for (o in ((t = bo), (bo = 0), (f = Yo(e, t, g, w)), t))
            Vo[o] ||
              ((a = t[o]),
              Fo(a) && (a = a(n, e, r)),
              Mo(a)
                ? (c = a)
                : Ao(a) && !isNaN(a.velocity)
                  ? (c = +a.velocity)
                  : s && s.isTracking(o) && (c = s.get(o)),
              (d = zo(c, _)),
              (p = 0),
              (l = g(e, o)),
              (u = yo(l)),
              (l = parseFloat(l)),
              Ao(a) &&
                ((h = l + d),
                "end" in a &&
                  (a = No(
                    a,
                    f && o in f ? f : h,
                    a.max,
                    a.min,
                    o,
                    t.radius,
                    c,
                  )),
                "max" in a && +a.max < h
                  ? D || a.preventOvershoot
                    ? (d = a.max - l)
                    : (p = a.max - l - d)
                  : "min" in a &&
                    +a.min > h &&
                    (D || a.preventOvershoot
                      ? (d = a.min - l)
                      : (p = a.min - l - d))),
              this._props.push(o),
              this.styles && this.styles.save(o),
              (this._pt = new Do(
                this._pt,
                e,
                o,
                l,
                0,
                Lo,
                0,
                m.set(e, o, this),
              )),
              (this._pt.u = u || 0),
              (this._pt.c1 = d),
              (this._pt.c2 = p));
          return i.duration(_), 1;
        },
        render: function (e, t) {
          var i,
            n = t._pt;
          if ((e = go(t.tween._time / t.tween._dur)) || !So())
            for (; n; )
              n.set(
                n.t,
                n.p,
                ((i = n.s + n.c1 * e + n.c2 * e * e),
                Math.round(1e4 * i) / 1e4 + n.u),
                n.d,
                e,
              ),
                (n = n._next);
          else t.styles.revert();
        },
      };
    "track,untrack,isTracking,getVelocity,getByTarget"
      .split(",")
      .forEach(function (e) {
        return (Xo[e] = co[e]);
      }),
      Co() && ho.registerPlugin(Xo),
      $n.registerPlugin(Gs),
      $n.registerPlugin(Xo);
    var Wo = function (e, t) {
      e = $n.utils.toArray(e);
      let i,
        n,
        r,
        s = (t = t || {}).onChange,
        o = 0,
        a = $n.timeline({
          repeat: t.repeat,
          onUpdate:
            s &&
            function () {
              const t = a.closestIndex();
              o !== t && ((o = t), s(e[t], t));
            },
          paused: t.paused,
          defaults: { ease: "none" },
          onReverseComplete: () => a.totalTime(a.rawTime() + 10 * a.duration()),
        }),
        l = e.length,
        u = e[0].offsetLeft,
        c = [],
        d = [],
        h = [],
        p = [],
        f = 0,
        m = t.center,
        g = 10 * (t.speed || 1),
        v = !1 === t.snap ? (e) => e : $n.utils.snap(t.snap || 1),
        y = 0,
        D =
          !0 === m
            ? e[0].parentNode
            : $n.utils.toArray(m)[0] || e[0].parentNode,
        w = () => {
          let n,
            r = D.getBoundingClientRect();
          e.forEach((e, t) => {
            (d[t] = parseFloat($n.getProperty(e, "width", "px"))),
              (p[t] = v(
                (parseFloat($n.getProperty(e, "x", "px")) / d[t]) * 100 +
                  $n.getProperty(e, "xPercent"),
              )),
              (n = e.getBoundingClientRect()),
              (h[t] = n.left - (t ? r.right : r.left)),
              (r = n);
          }),
            $n.set(e, { xPercent: (e) => p[e] }),
            (i =
              e[l - 1].offsetLeft +
              (p[l - 1] / 100) * d[l - 1] -
              u +
              h[0] +
              e[l - 1].offsetWidth * $n.getProperty(e[l - 1], "scaleX") +
              (parseFloat(t.paddingRight) || 0));
        },
        _ = () => {
          (y = m ? (a.duration() * (D.offsetWidth / 2)) / i : 0),
            m &&
              c.forEach((e, t) => {
                c[t] = n(
                  a.labels["label" + t] + (a.duration() * d[t]) / 2 / i - y,
                );
              });
        },
        x = () => {
          let t, r, s, o, f;
          for (a.clear(), t = 0; t < l; t++)
            (r = e[t]),
              (s = (p[t] / 100) * d[t]),
              (o = r.offsetLeft + s - u + h[0]),
              (f = o + d[t] * $n.getProperty(r, "scaleX")),
              a
                .to(
                  r,
                  { xPercent: v(((s - f) / d[t]) * 100), duration: f / g },
                  0,
                )
                .fromTo(
                  r,
                  { xPercent: v(((s - f + i) / d[t]) * 100) },
                  {
                    xPercent: p[t],
                    duration: (s - f + i - s) / g,
                    immediateRender: !1,
                  },
                  f / g,
                )
                .add("label" + t, o / g),
              (c[t] = o / g);
          n = $n.utils.wrap(0, a.duration());
        },
        b = (e) => {
          const t = a.progress();
          a.progress(0, !0),
            w(),
            e && x(),
            _(),
            e && a.draggable ? a.time(c[f], !0) : a.progress(t, !0);
        };
      function E(e, t) {
        (t = t || {}), Math.abs(e - f) > l / 2 && (e += e > f ? -l : l);
        let i = $n.utils.wrap(0, l, e),
          s = c[i];
        return (
          s > a.time() != e > f && (s += a.duration() * (e > f ? 1 : -1)),
          (s < 0 || s > a.duration()) && (t.modifiers = { time: n }),
          (f = i),
          (t.overwrite = !0),
          $n.killTweensOf(r),
          a.tweenTo(s, t)
        );
      }
      if (
        ($n.set(e, { x: 0 }),
        w(),
        x(),
        _(),
        window.addEventListener("resize", () => b(!0)),
        (a.next = (e) => E(f + 1, e)),
        (a.previous = (e) => E(f - 1, e)),
        (a.current = () => f),
        (a.toIndex = (e, t) => E(e, t)),
        (a.closestIndex = (e) => {
          const t = ((e, t, i) => {
            let n,
              r = e.length,
              s = 1e10,
              o = 0;
            for (; r--; )
              (n = Math.abs(e[r] - t)),
                n > i / 2 && (n = i - n),
                n < s && ((s = n), (o = r));
            return o;
          })(c, a.time(), a.duration());
          return e && (f = t), t;
        }),
        (a.times = c),
        a.progress(1, !0).progress(0, !0),
        t.reversed && (a.vars.onReverseComplete(), a.reverse()),
        t.draggable && "function" == typeof Gs)
      ) {
        r = document.createElement("div");
        let t,
          n,
          s,
          o = $n.utils.wrap(0, 1),
          l = () => a.progress(o(n + (s.startX - s.x) * t)),
          u = () => a.closestIndex(!0);
        (s = Gs.create(r, {
          trigger: e[0].parentNode,
          type: "x",
          onPressInit() {
            $n.killTweensOf(a),
              (n = a.progress()),
              b(),
              (t = 1 / i),
              $n.set(r, { x: n / -t });
          },
          onDrag: l,
          onThrowUpdate: l,
          inertia: !0,
          onRelease: u,
          onThrowComplete: u,
        })[0]),
          (a.draggable = s);
      }
      return a.closestIndex(!0), s && s(e[f], f), a;
    };
    const $o = {
      init() {
        document.querySelectorAll(".clients-marquee").forEach((e) => {
          const t = e.querySelectorAll(".clients-marquee-item");
          for (let i = 0; i < 2; i++)
            t.forEach((t) => {
              const i = t.cloneNode(!0);
              e.appendChild(i);
            });
          Wo(e.querySelectorAll(".clients-marquee-item"), {
            paused: !1,
            draggable: !0,
            speed: 2,
            center: !1,
          });
        });
      },
    };
    var Go = $o;
    function jo(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    var Uo,
      Qo,
      Ko,
      Zo,
      Jo,
      ea,
      ta,
      ia,
      na,
      ra,
      sa,
      oa,
      aa,
      la = function () {
        return (
          Uo ||
          ("undefined" != typeof window &&
            (Uo = window.gsap) &&
            Uo.registerPlugin &&
            Uo)
        );
      },
      ua = 1,
      ca = [],
      da = [],
      ha = [],
      pa = Date.now,
      fa = function (e, t) {
        return t;
      },
      ma = function (e, t) {
        return ~ha.indexOf(e) && ha[ha.indexOf(e) + 1][t];
      },
      ga = function (e) {
        return !!~ra.indexOf(e);
      },
      va = function (e, t, i, n, r) {
        return e.addEventListener(t, i, { passive: !1 !== n, capture: !!r });
      },
      ya = function (e, t, i, n) {
        return e.removeEventListener(t, i, !!n);
      },
      Da = "scrollLeft",
      wa = "scrollTop",
      _a = function () {
        return (sa && sa.isPressed) || da.cache++;
      },
      xa = function (e, t) {
        var i = function i(n) {
          if (n || 0 === n) {
            ua && (Ko.history.scrollRestoration = "manual");
            var r = sa && sa.isPressed;
            (n = i.v = Math.round(n) || (sa && sa.iOS ? 1 : 0)),
              e(n),
              (i.cacheID = da.cache),
              r && fa("ss", n);
          } else
            (t || da.cache !== i.cacheID || fa("ref")) &&
              ((i.cacheID = da.cache), (i.v = e()));
          return i.v + i.offset;
        };
        return (i.offset = 0), e && i;
      },
      ba = {
        s: Da,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: xa(function (e) {
          return arguments.length
            ? Ko.scrollTo(e, Ea.sc())
            : Ko.pageXOffset || Zo[Da] || Jo[Da] || ea[Da] || 0;
        }),
      },
      Ea = {
        s: wa,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ba,
        sc: xa(function (e) {
          return arguments.length
            ? Ko.scrollTo(ba.sc(), e)
            : Ko.pageYOffset || Zo[wa] || Jo[wa] || ea[wa] || 0;
        }),
      },
      Sa = function (e, t) {
        return (
          ((t && t._ctx && t._ctx.selector) || Uo.utils.toArray)(e)[0] ||
          ("string" == typeof e && !1 !== Uo.config().nullTargetWarn
            ? void 0
            : null)
        );
      },
      Ta = function (e, t) {
        var i = t.s,
          n = t.sc;
        ga(e) && (e = Zo.scrollingElement || Jo);
        var r = da.indexOf(e),
          s = n === Ea.sc ? 1 : 2;
        !~r && (r = da.push(e) - 1), da[r + s] || va(e, "scroll", _a);
        var o = da[r + s],
          a =
            o ||
            (da[r + s] =
              xa(ma(e, i), !0) ||
              (ga(e)
                ? n
                : xa(function (t) {
                    return arguments.length ? (e[i] = t) : e[i];
                  })));
        return (
          (a.target = e),
          o || (a.smooth = "smooth" === Uo.getProperty(e, "scrollBehavior")),
          a
        );
      },
      Ca = function (e, t, i) {
        var n = e,
          r = e,
          s = pa(),
          o = s,
          a = t || 50,
          l = Math.max(500, 3 * a),
          u = function (e, t) {
            var l = pa();
            t || l - s > a
              ? ((r = n), (n = e), (o = s), (s = l))
              : i
                ? (n += e)
                : (n = r + ((e - r) / (l - o)) * (s - o));
          };
        return {
          update: u,
          reset: function () {
            (r = n = i ? 0 : n), (o = s = 0);
          },
          getVelocity: function (e) {
            var t = o,
              a = r,
              c = pa();
            return (
              (e || 0 === e) && e !== n && u(e),
              s === o || c - o > l
                ? 0
                : ((n + (i ? a : -a)) / ((i ? c : s) - t)) * 1e3
            );
          },
        };
      },
      Ma = function (e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      },
      Aa = function (e) {
        var t = Math.max.apply(Math, e),
          i = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(i) ? t : i;
      },
      Fa = function () {
        var e, t, i, n;
        (na = Uo.core.globals().ScrollTrigger) &&
          na.core &&
          ((e = na.core),
          (t = e.bridge || {}),
          (i = e._scrollers),
          (n = e._proxies),
          i.push.apply(i, da),
          n.push.apply(n, ha),
          (da = i),
          (ha = n),
          (fa = function (e, i) {
            return t[e](i);
          }));
      },
      ka = function (e) {
        return (
          (Uo = e || la()),
          !Qo &&
            Uo &&
            "undefined" != typeof document &&
            document.body &&
            ((Ko = window),
            (Zo = document),
            (Jo = Zo.documentElement),
            (ea = Zo.body),
            (ra = [Ko, Zo, Jo, ea]),
            Uo.utils.clamp,
            (aa = Uo.core.context || function () {}),
            (ia = "onpointerenter" in ea ? "pointer" : "mouse"),
            (ta = La.isTouch =
              Ko.matchMedia &&
              Ko.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in Ko ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
            (oa = La.eventTypes =
              (
                "ontouchstart" in Jo
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in Jo
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (ua = 0);
            }, 500),
            Fa(),
            (Qo = 1)),
          Qo
        );
      };
    (ba.op = Ea), (da.cache = 0);
    var La = (function () {
      function e(e) {
        this.init(e);
      }
      var t, i, n;
      return (
        (e.prototype.init = function (e) {
          Qo || ka(Uo), na || Fa();
          var t = e.tolerance,
            i = e.dragMinimum,
            n = e.type,
            r = e.target,
            s = e.lineHeight,
            o = e.debounce,
            a = e.preventDefault,
            l = e.onStop,
            u = e.onStopDelay,
            c = e.ignore,
            d = e.wheelSpeed,
            h = e.event,
            p = e.onDragStart,
            f = e.onDragEnd,
            m = e.onDrag,
            g = e.onPress,
            v = e.onRelease,
            y = e.onRight,
            D = e.onLeft,
            w = e.onUp,
            _ = e.onDown,
            x = e.onChangeX,
            b = e.onChangeY,
            E = e.onChange,
            S = e.onToggleX,
            T = e.onToggleY,
            C = e.onHover,
            M = e.onHoverEnd,
            A = e.onMove,
            F = e.ignoreCheck,
            k = e.isNormalizer,
            L = e.onGestureStart,
            P = e.onGestureEnd,
            O = e.onWheel,
            I = e.onEnable,
            B = e.onDisable,
            N = e.onClick,
            R = e.scrollSpeed,
            z = e.capture,
            q = e.allowClicks,
            V = e.lockAxis,
            Y = e.onLockAxis;
          (this.target = r = Sa(r) || Jo),
            (this.vars = e),
            c && (c = Uo.utils.toArray(c)),
            (t = t || 1e-9),
            (i = i || 0),
            (d = d || 1),
            (R = R || 1),
            (n = n || "wheel,touch,pointer"),
            (o = !1 !== o),
            s || (s = parseFloat(Ko.getComputedStyle(ea).lineHeight) || 22);
          var H,
            X,
            W,
            $,
            G,
            j,
            U,
            Q = this,
            K = 0,
            Z = 0,
            J = e.passive || (!a && !1 !== e.passive),
            ee = Ta(r, ba),
            te = Ta(r, Ea),
            ie = ee(),
            ne = te(),
            re =
              ~n.indexOf("touch") &&
              !~n.indexOf("pointer") &&
              "pointerdown" === oa[0],
            se = ga(r),
            oe = r.ownerDocument || Zo,
            ae = [0, 0, 0],
            le = [0, 0, 0],
            ue = 0,
            ce = function () {
              return (ue = pa());
            },
            de = function (e, t) {
              return (
                ((Q.event = e) && c && ~c.indexOf(e.target)) ||
                (t && re && "touch" !== e.pointerType) ||
                (F && F(e, t))
              );
            },
            he = function () {
              var e = (Q.deltaX = Aa(ae)),
                i = (Q.deltaY = Aa(le)),
                n = Math.abs(e) >= t,
                r = Math.abs(i) >= t;
              E && (n || r) && E(Q, e, i, ae, le),
                n &&
                  (y && Q.deltaX > 0 && y(Q),
                  D && Q.deltaX < 0 && D(Q),
                  x && x(Q),
                  S && Q.deltaX < 0 != K < 0 && S(Q),
                  (K = Q.deltaX),
                  (ae[0] = ae[1] = ae[2] = 0)),
                r &&
                  (_ && Q.deltaY > 0 && _(Q),
                  w && Q.deltaY < 0 && w(Q),
                  b && b(Q),
                  T && Q.deltaY < 0 != Z < 0 && T(Q),
                  (Z = Q.deltaY),
                  (le[0] = le[1] = le[2] = 0)),
                ($ || W) &&
                  (A && A(Q),
                  W && (p && 1 === W && p(Q), m && m(Q), (W = 0)),
                  ($ = !1)),
                j && !(j = !1) && Y && Y(Q),
                G && (O(Q), (G = !1)),
                (H = 0);
            },
            pe = function (e, t, i) {
              (ae[i] += e),
                (le[i] += t),
                Q._vx.update(e),
                Q._vy.update(t),
                o ? H || (H = requestAnimationFrame(he)) : he();
            },
            fe = function (e, t) {
              V &&
                !U &&
                ((Q.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                (j = !0)),
                "y" !== U && ((ae[2] += e), Q._vx.update(e, !0)),
                "x" !== U && ((le[2] += t), Q._vy.update(t, !0)),
                o ? H || (H = requestAnimationFrame(he)) : he();
            },
            me = function (e) {
              if (!de(e, 1)) {
                var t = (e = Ma(e, a)).clientX,
                  n = e.clientY,
                  r = t - Q.x,
                  s = n - Q.y,
                  o = Q.isDragging;
                (Q.x = t),
                  (Q.y = n),
                  (o ||
                    ((r || s) &&
                      (Math.abs(Q.startX - t) >= i ||
                        Math.abs(Q.startY - n) >= i))) &&
                    ((W = o ? 2 : 1), o || (Q.isDragging = !0), fe(r, s));
              }
            },
            ge = (Q.onPress = function (e) {
              de(e, 1) ||
                (e && e.button) ||
                ((Q.axis = U = null),
                X.pause(),
                (Q.isPressed = !0),
                (e = Ma(e)),
                (K = Z = 0),
                (Q.startX = Q.x = e.clientX),
                (Q.startY = Q.y = e.clientY),
                Q._vx.reset(),
                Q._vy.reset(),
                va(k ? r : oe, oa[1], me, J, !0),
                (Q.deltaX = Q.deltaY = 0),
                g && g(Q));
            }),
            ve = (Q.onRelease = function (e) {
              if (!de(e, 1)) {
                ya(k ? r : oe, oa[1], me, !0);
                var t = !isNaN(Q.y - Q.startY),
                  i = Q.isDragging,
                  n =
                    i &&
                    (Math.abs(Q.x - Q.startX) > 3 ||
                      Math.abs(Q.y - Q.startY) > 3),
                  s = Ma(e);
                !n &&
                  t &&
                  (Q._vx.reset(),
                  Q._vy.reset(),
                  a &&
                    q &&
                    Uo.delayedCall(0.08, function () {
                      if (pa() - ue > 300 && !e.defaultPrevented)
                        if (e.target.click) e.target.click();
                        else if (oe.createEvent) {
                          var t = oe.createEvent("MouseEvents");
                          t.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            Ko,
                            1,
                            s.screenX,
                            s.screenY,
                            s.clientX,
                            s.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            e.target.dispatchEvent(t);
                        }
                    })),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                  l && i && !k && X.restart(!0),
                  W && he(),
                  f && i && f(Q),
                  v && v(Q, n);
              }
            }),
            ye = function (e) {
              return (
                e.touches &&
                e.touches.length > 1 &&
                (Q.isGesturing = !0) &&
                L(e, Q.isDragging)
              );
            },
            De = function () {
              return (Q.isGesturing = !1) || P(Q);
            },
            we = function (e) {
              if (!de(e)) {
                var t = ee(),
                  i = te();
                pe((t - ie) * R, (i - ne) * R, 1),
                  (ie = t),
                  (ne = i),
                  l && X.restart(!0);
              }
            },
            _e = function (e) {
              if (!de(e)) {
                (e = Ma(e, a)), O && (G = !0);
                var t =
                  (1 === e.deltaMode
                    ? s
                    : 2 === e.deltaMode
                      ? Ko.innerHeight
                      : 1) * d;
                pe(e.deltaX * t, e.deltaY * t, 0), l && !k && X.restart(!0);
              }
            },
            xe = function (e) {
              if (!de(e)) {
                var t = e.clientX,
                  i = e.clientY,
                  n = t - Q.x,
                  r = i - Q.y;
                (Q.x = t),
                  (Q.y = i),
                  ($ = !0),
                  l && X.restart(!0),
                  (n || r) && fe(n, r);
              }
            },
            be = function (e) {
              (Q.event = e), C(Q);
            },
            Ee = function (e) {
              (Q.event = e), M(Q);
            },
            Se = function (e) {
              return de(e) || (Ma(e, a) && N(Q));
            };
          (X = Q._dc =
            Uo.delayedCall(u || 0.25, function () {
              Q._vx.reset(), Q._vy.reset(), X.pause(), l && l(Q);
            }).pause()),
            (Q.deltaX = Q.deltaY = 0),
            (Q._vx = Ca(0, 50, !0)),
            (Q._vy = Ca(0, 50, !0)),
            (Q.scrollX = ee),
            (Q.scrollY = te),
            (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
            aa(this),
            (Q.enable = function (e) {
              return (
                Q.isEnabled ||
                  (va(se ? oe : r, "scroll", _a),
                  n.indexOf("scroll") >= 0 &&
                    va(se ? oe : r, "scroll", we, J, z),
                  n.indexOf("wheel") >= 0 && va(r, "wheel", _e, J, z),
                  ((n.indexOf("touch") >= 0 && ta) ||
                    n.indexOf("pointer") >= 0) &&
                    (va(r, oa[0], ge, J, z),
                    va(oe, oa[2], ve),
                    va(oe, oa[3], ve),
                    q && va(r, "click", ce, !0, !0),
                    N && va(r, "click", Se),
                    L && va(oe, "gesturestart", ye),
                    P && va(oe, "gestureend", De),
                    C && va(r, ia + "enter", be),
                    M && va(r, ia + "leave", Ee),
                    A && va(r, ia + "move", xe)),
                  (Q.isEnabled = !0),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = $ = W = !1),
                  Q._vx.reset(),
                  Q._vy.reset(),
                  (ie = ee()),
                  (ne = te()),
                  e && e.type && ge(e),
                  I && I(Q)),
                Q
              );
            }),
            (Q.disable = function () {
              Q.isEnabled &&
                (ca.filter(function (e) {
                  return e !== Q && ga(e.target);
                }).length || ya(se ? oe : r, "scroll", _a),
                Q.isPressed &&
                  (Q._vx.reset(), Q._vy.reset(), ya(k ? r : oe, oa[1], me, !0)),
                ya(se ? oe : r, "scroll", we, z),
                ya(r, "wheel", _e, z),
                ya(r, oa[0], ge, z),
                ya(oe, oa[2], ve),
                ya(oe, oa[3], ve),
                ya(r, "click", ce, !0),
                ya(r, "click", Se),
                ya(oe, "gesturestart", ye),
                ya(oe, "gestureend", De),
                ya(r, ia + "enter", be),
                ya(r, ia + "leave", Ee),
                ya(r, ia + "move", xe),
                (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                B && B(Q));
            }),
            (Q.kill = Q.revert =
              function () {
                Q.disable();
                var e = ca.indexOf(Q);
                e >= 0 && ca.splice(e, 1), sa === Q && (sa = 0);
              }),
            ca.push(Q),
            k && ga(r) && (sa = Q),
            Q.enable(h);
        }),
        (t = e),
        (i = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]) && jo(t.prototype, i),
        n && jo(t, n),
        e
      );
    })();
    (La.version = "3.12.7"),
      (La.create = function (e) {
        return new La(e);
      }),
      (La.register = ka),
      (La.getAll = function () {
        return ca.slice();
      }),
      (La.getById = function (e) {
        return ca.filter(function (t) {
          return t.vars.id === e;
        })[0];
      }),
      la() && Uo.registerPlugin(La);
    var Pa,
      Oa,
      Ia,
      Ba,
      Na,
      Ra,
      za,
      qa,
      Va,
      Ya,
      Ha,
      Xa,
      Wa,
      $a,
      Ga,
      ja,
      Ua,
      Qa,
      Ka,
      Za,
      Ja,
      el,
      tl,
      il,
      nl,
      rl,
      sl,
      ol,
      al,
      ll,
      ul,
      cl,
      dl,
      hl,
      pl,
      fl,
      ml,
      gl,
      vl = 1,
      yl = Date.now,
      Dl = yl(),
      wl = 0,
      _l = 0,
      xl = function (e, t, i) {
        var n = Bl(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return (i["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
      },
      bl = function (e, t) {
        return !t || (Bl(e) && "clamp(" === e.substr(0, 6))
          ? e
          : "clamp(" + e + ")";
      },
      El = function e() {
        return _l && requestAnimationFrame(e);
      },
      Sl = function () {
        return ($a = 1);
      },
      Tl = function () {
        return ($a = 0);
      },
      Cl = function (e) {
        return e;
      },
      Ml = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      Al = function () {
        return "undefined" != typeof window;
      },
      Fl = function () {
        return Pa || (Al() && (Pa = window.gsap) && Pa.registerPlugin && Pa);
      },
      kl = function (e) {
        return !!~za.indexOf(e);
      },
      Ll = function (e) {
        return (
          ("Height" === e ? ul : Ia["inner" + e]) ||
          Na["client" + e] ||
          Ra["client" + e]
        );
      },
      Pl = function (e) {
        return (
          ma(e, "getBoundingClientRect") ||
          (kl(e)
            ? function () {
                return ($u.width = Ia.innerWidth), ($u.height = ul), $u;
              }
            : function () {
                return su(e);
              })
        );
      },
      Ol = function (e, t) {
        var i = t.s,
          n = t.d2,
          r = t.d,
          s = t.a;
        return Math.max(
          0,
          (i = "scroll" + n) && (s = ma(e, i))
            ? s() - Pl(e)()[r]
            : kl(e)
              ? (Na[i] || Ra[i]) - Ll(n)
              : e[i] - e["offset" + n],
        );
      },
      Il = function (e, t) {
        for (var i = 0; i < Ka.length; i += 3)
          (!t || ~t.indexOf(Ka[i + 1])) && e(Ka[i], Ka[i + 1], Ka[i + 2]);
      },
      Bl = function (e) {
        return "string" == typeof e;
      },
      Nl = function (e) {
        return "function" == typeof e;
      },
      Rl = function (e) {
        return "number" == typeof e;
      },
      zl = function (e) {
        return "object" == typeof e;
      },
      ql = function (e, t, i) {
        return e && e.progress(t ? 0 : 1) && i && e.pause();
      },
      Vl = function (e, t) {
        if (e.enabled) {
          var i = e._ctx
            ? e._ctx.add(function () {
                return t(e);
              })
            : t(e);
          i && i.totalTime && (e.callbackAnimation = i);
        }
      },
      Yl = Math.abs,
      Hl = "left",
      Xl = "right",
      Wl = "bottom",
      $l = "width",
      Gl = "height",
      jl = "Right",
      Ul = "Left",
      Ql = "Top",
      Kl = "Bottom",
      Zl = "padding",
      Jl = "margin",
      eu = "Width",
      tu = "Height",
      iu = "px",
      nu = function (e) {
        return Ia.getComputedStyle(e);
      },
      ru = function (e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
      },
      su = function (e, t) {
        var i =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== nu(e)[Ga] &&
            Pa.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1),
          n = e.getBoundingClientRect();
        return i && i.progress(0).kill(), n;
      },
      ou = function (e, t) {
        var i = t.d2;
        return e["offset" + i] || e["client" + i] || 0;
      },
      au = function (e) {
        var t,
          i = [],
          n = e.labels,
          r = e.duration();
        for (t in n) i.push(n[t] / r);
        return i;
      },
      lu = function (e) {
        var t = Pa.utils.snap(e),
          i =
            Array.isArray(e) &&
            e.slice(0).sort(function (e, t) {
              return e - t;
            });
        return i
          ? function (e, n, r) {
              var s;
              if ((void 0 === r && (r = 0.001), !n)) return t(e);
              if (n > 0) {
                for (e -= r, s = 0; s < i.length; s++)
                  if (i[s] >= e) return i[s];
                return i[s - 1];
              }
              for (s = i.length, e += r; s--; ) if (i[s] <= e) return i[s];
              return i[0];
            }
          : function (i, n, r) {
              void 0 === r && (r = 0.001);
              var s = t(i);
              return !n || Math.abs(s - i) < r || s - i < 0 == n < 0
                ? s
                : t(n < 0 ? i - e : i + e);
            };
      },
      uu = function (e, t, i, n) {
        return i.split(",").forEach(function (i) {
          return e(t, i, n);
        });
      },
      cu = function (e, t, i, n, r) {
        return e.addEventListener(t, i, { passive: !n, capture: !!r });
      },
      du = function (e, t, i, n) {
        return e.removeEventListener(t, i, !!n);
      },
      hu = function (e, t, i) {
        (i = i && i.wheelHandler) && (e(t, "wheel", i), e(t, "touchmove", i));
      },
      pu = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      fu = { toggleActions: "play", anticipatePin: 0 },
      mu = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      gu = function (e, t) {
        if (Bl(e)) {
          var i = e.indexOf("="),
            n = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
          ~i &&
            (e.indexOf("%") > i && (n *= t / 100), (e = e.substr(0, i - 1))),
            (e =
              n +
              (e in mu
                ? mu[e] * t
                : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
        }
        return e;
      },
      vu = function (e, t, i, n, r, s, o, a) {
        var l = r.startColor,
          u = r.endColor,
          c = r.fontSize,
          d = r.indent,
          h = r.fontWeight,
          p = Ba.createElement("div"),
          f = kl(i) || "fixed" === ma(i, "pinType"),
          m = -1 !== e.indexOf("scroller"),
          g = f ? Ra : i,
          v = -1 !== e.indexOf("start"),
          y = v ? l : u,
          D =
            "border-color:" +
            y +
            ";font-size:" +
            c +
            ";color:" +
            y +
            ";font-weight:" +
            h +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (D += "position:" + ((m || a) && f ? "fixed;" : "absolute;")),
          (m || a || !f) &&
            (D += (n === Ea ? Xl : Wl) + ":" + (s + parseFloat(d)) + "px;"),
          o &&
            (D +=
              "box-sizing:border-box;text-align:left;width:" +
              o.offsetWidth +
              "px;"),
          (p._isStart = v),
          p.setAttribute(
            "class",
            "gsap-marker-" + e + (t ? " marker-" + t : ""),
          ),
          (p.style.cssText = D),
          (p.innerText = t || 0 === t ? e + "-" + t : e),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p["offset" + n.op.d2]),
          yu(p, 0, n, v),
          p
        );
      },
      yu = function (e, t, i, n) {
        var r = { display: "block" },
          s = i[n ? "os2" : "p2"],
          o = i[n ? "p2" : "os2"];
        (e._isFlipped = n),
          (r[i.a + "Percent"] = n ? -100 : 0),
          (r[i.a] = n ? "1px" : 0),
          (r["border" + s + eu] = 1),
          (r["border" + o + eu] = 0),
          (r[i.p] = t + "px"),
          Pa.set(e, r);
      },
      Du = [],
      wu = {},
      _u = function () {
        return yl() - wl > 34 && (pl || (pl = requestAnimationFrame(zu)));
      },
      xu = function () {
        (!tl || !tl.isPressed || tl.startX > Ra.clientWidth) &&
          (da.cache++,
          tl ? pl || (pl = requestAnimationFrame(zu)) : zu(),
          wl || Mu("scrollStart"),
          (wl = yl()));
      },
      bu = function () {
        (rl = Ia.innerWidth), (nl = Ia.innerHeight);
      },
      Eu = function (e) {
        da.cache++,
          (!0 === e ||
            (!Wa &&
              !el &&
              !Ba.fullscreenElement &&
              !Ba.webkitFullscreenElement &&
              (!il ||
                rl !== Ia.innerWidth ||
                Math.abs(Ia.innerHeight - nl) > 0.25 * Ia.innerHeight))) &&
            qa.restart(!0);
      },
      Su = {},
      Tu = [],
      Cu = function e() {
        return du(Ju, "scrollEnd", e) || Bu(!0);
      },
      Mu = function (e) {
        return (
          (Su[e] &&
            Su[e].map(function (e) {
              return e();
            })) ||
          Tu
        );
      },
      Au = [],
      Fu = function (e) {
        for (var t = 0; t < Au.length; t += 5)
          (!e || (Au[t + 4] && Au[t + 4].query === e)) &&
            ((Au[t].style.cssText = Au[t + 1]),
            Au[t].getBBox && Au[t].setAttribute("transform", Au[t + 2] || ""),
            (Au[t + 3].uncache = 1));
      },
      ku = function (e, t) {
        var i;
        for (ja = 0; ja < Du.length; ja++)
          !(i = Du[ja]) ||
            (t && i._ctx !== t) ||
            (e ? i.kill(1) : i.revert(!0, !0));
        (cl = !0), t && Fu(t), t || Mu("revert");
      },
      Lu = function (e, t) {
        da.cache++,
          (t || !fl) &&
            da.forEach(function (e) {
              return Nl(e) && e.cacheID++ && (e.rec = 0);
            }),
          Bl(e) && (Ia.history.scrollRestoration = al = e);
      },
      Pu = 0,
      Ou = function () {
        Ra.appendChild(ll),
          (ul = (!tl && ll.offsetHeight) || Ia.innerHeight),
          Ra.removeChild(ll);
      },
      Iu = function (e) {
        return Va(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (t) {
          return (t.style.display = e ? "none" : "block");
        });
      },
      Bu = function (e, t) {
        if (
          ((Na = Ba.documentElement),
          (Ra = Ba.body),
          (za = [Ia, Ba, Na, Ra]),
          !wl || e || cl)
        ) {
          Ou(),
            (fl = Ju.isRefreshing = !0),
            da.forEach(function (e) {
              return Nl(e) && ++e.cacheID && (e.rec = e());
            });
          var i = Mu("refreshInit");
          Za && Ju.sort(),
            t || ku(),
            da.forEach(function (e) {
              Nl(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            Du.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (cl = !1),
            Du.forEach(function (e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  i = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - i), e.refresh();
              }
            }),
            (dl = 1),
            Iu(!0),
            Du.forEach(function (e) {
              var t = Ol(e.scroller, e._dir),
                i = "max" === e.vars.end || (e._endClamp && e.end > t),
                n = e._startClamp && e.start >= t;
              (i || n) &&
                e.setPositions(
                  n ? t - 1 : e.start,
                  i ? Math.max(n ? t : e.start + 1, t) : e.end,
                  !0,
                );
            }),
            Iu(!1),
            (dl = 0),
            i.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            da.forEach(function (e) {
              Nl(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            Lu(al, 1),
            qa.pause(),
            Pu++,
            (fl = 2),
            zu(2),
            Du.forEach(function (e) {
              return Nl(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (fl = Ju.isRefreshing = !1),
            Mu("refresh");
        } else cu(Ju, "scrollEnd", Cu);
      },
      Nu = 0,
      Ru = 1,
      zu = function (e) {
        if (2 === e || (!fl && !cl)) {
          (Ju.isUpdating = !0), gl && gl.update(0);
          var t = Du.length,
            i = yl(),
            n = i - Dl >= 50,
            r = t && Du[0].scroll();
          if (
            ((Ru = Nu > r ? -1 : 1),
            fl || (Nu = r),
            n &&
              (wl && !$a && i - wl > 200 && ((wl = 0), Mu("scrollEnd")),
              (Ha = Dl),
              (Dl = i)),
            Ru < 0)
          ) {
            for (ja = t; ja-- > 0; ) Du[ja] && Du[ja].update(0, n);
            Ru = 1;
          } else for (ja = 0; ja < t; ja++) Du[ja] && Du[ja].update(0, n);
          Ju.isUpdating = !1;
        }
        pl = 0;
      },
      qu = [
        Hl,
        "top",
        Wl,
        Xl,
        Jl + Kl,
        Jl + jl,
        Jl + Ql,
        Jl + Ul,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      Vu = qu.concat([
        $l,
        Gl,
        "boxSizing",
        "max" + eu,
        "max" + tu,
        "position",
        Jl,
        Zl,
        Zl + Ql,
        Zl + jl,
        Zl + Kl,
        Zl + Ul,
      ]),
      Yu = function (e, t, i, n) {
        if (!e._gsap.swappedIn) {
          for (var r, s = qu.length, o = t.style, a = e.style; s--; )
            o[(r = qu[s])] = i[r];
          (o.position = "absolute" === i.position ? "absolute" : "relative"),
            "inline" === i.display && (o.display = "inline-block"),
            (a[Wl] = a[Xl] = "auto"),
            (o.flexBasis = i.flexBasis || "auto"),
            (o.overflow = "visible"),
            (o.boxSizing = "border-box"),
            (o[$l] = ou(e, ba) + iu),
            (o[Gl] = ou(e, Ea) + iu),
            (o[Zl] = a[Jl] = a.top = a[Hl] = "0"),
            Xu(n),
            (a[$l] = a["max" + eu] = i[$l]),
            (a[Gl] = a["max" + tu] = i[Gl]),
            (a[Zl] = i[Zl]),
            e.parentNode !== t &&
              (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      },
      Hu = /([A-Z])/g,
      Xu = function (e) {
        if (e) {
          var t,
            i,
            n = e.t.style,
            r = e.length,
            s = 0;
          for ((e.t._gsap || Pa.core.getCache(e.t)).uncache = 1; s < r; s += 2)
            (i = e[s + 1]),
              (t = e[s]),
              i
                ? (n[t] = i)
                : n[t] && n.removeProperty(t.replace(Hu, "-$1").toLowerCase());
        }
      },
      Wu = function (e) {
        for (var t = Vu.length, i = e.style, n = [], r = 0; r < t; r++)
          n.push(Vu[r], i[Vu[r]]);
        return (n.t = e), n;
      },
      $u = { left: 0, top: 0 },
      Gu = function (e, t, i, n, r, s, o, a, l, u, c, d, h, p) {
        Nl(e) && (e = e(a)),
          Bl(e) &&
            "max" === e.substr(0, 3) &&
            (e = d + ("=" === e.charAt(4) ? gu("0" + e.substr(3), i) : 0));
        var f,
          m,
          g,
          v = h ? h.time() : 0;
        if ((h && h.seek(0), isNaN(e) || (e = +e), Rl(e)))
          h &&
            (e = Pa.utils.mapRange(
              h.scrollTrigger.start,
              h.scrollTrigger.end,
              0,
              d,
              e,
            )),
            o && yu(o, i, n, !0);
        else {
          Nl(t) && (t = t(a));
          var y,
            D,
            w,
            _,
            x = (e || "0").split(" ");
          (g = Sa(t, a) || Ra),
            ((y = su(g) || {}) && (y.left || y.top)) ||
              "none" !== nu(g).display ||
              ((_ = g.style.display),
              (g.style.display = "block"),
              (y = su(g)),
              _ ? (g.style.display = _) : g.style.removeProperty("display")),
            (D = gu(x[0], y[n.d])),
            (w = gu(x[1] || "0", i)),
            (e = y[n.p] - l[n.p] - u + D + r - w),
            o && yu(o, w, n, i - w < 20 || (o._isStart && w > 20)),
            (i -= i - w);
        }
        if ((p && ((a[p] = e || -0.001), e < 0 && (e = 0)), s)) {
          var b = e + i,
            E = s._isStart;
          (f = "scroll" + n.d2),
            yu(
              s,
              b,
              n,
              (E && b > 20) ||
                (!E && (c ? Math.max(Ra[f], Na[f]) : s.parentNode[f]) <= b + 1),
            ),
            c &&
              ((l = su(o)),
              c && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + iu));
        }
        return (
          h &&
            g &&
            ((f = su(g)),
            h.seek(d),
            (m = su(g)),
            (h._caScrollDist = f[n.p] - m[n.p]),
            (e = (e / h._caScrollDist) * d)),
          h && h.seek(v),
          h ? e : Math.round(e)
        );
      },
      ju = /(webkit|moz|length|cssText|inset)/i,
      Uu = function (e, t, i, n) {
        if (e.parentNode !== t) {
          var r,
            s,
            o = e.style;
          if (t === Ra) {
            for (r in ((e._stOrig = o.cssText), (s = nu(e))))
              +r ||
                ju.test(r) ||
                !s[r] ||
                "string" != typeof o[r] ||
                "0" === r ||
                (o[r] = s[r]);
            (o.top = i), (o.left = n);
          } else o.cssText = e._stOrig;
          (Pa.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      },
      Qu = function (e, t, i) {
        var n = t,
          r = n;
        return function (t) {
          var s = Math.round(e());
          return (
            s !== n &&
              s !== r &&
              Math.abs(s - n) > 3 &&
              Math.abs(s - r) > 3 &&
              ((t = s), i && i()),
            (r = n),
            (n = Math.round(t))
          );
        };
      },
      Ku = function (e, t, i) {
        var n = {};
        (n[t.p] = "+=" + i), Pa.set(e, n);
      },
      Zu = function (e, t) {
        var i = Ta(e, t),
          n = "_scroll" + t.p2,
          r = function t(r, s, o, a, l) {
            var u = t.tween,
              c = s.onComplete,
              d = {};
            o = o || i();
            var h = Qu(i, o, function () {
              u.kill(), (t.tween = 0);
            });
            return (
              (l = (a && l) || 0),
              (a = a || r - o),
              u && u.kill(),
              (s[n] = r),
              (s.inherit = !1),
              (s.modifiers = d),
              (d[n] = function () {
                return h(o + a * u.ratio + l * u.ratio * u.ratio);
              }),
              (s.onUpdate = function () {
                da.cache++, t.tween && zu();
              }),
              (s.onComplete = function () {
                (t.tween = 0), c && c.call(u);
              }),
              (u = t.tween = Pa.to(e, s))
            );
          };
        return (
          (e[n] = i),
          (i.wheelHandler = function () {
            return r.tween && r.tween.kill() && (r.tween = 0);
          }),
          cu(e, "wheel", i.wheelHandler),
          Ju.isTouch && cu(e, "touchmove", i.wheelHandler),
          r
        );
      },
      Ju = (function () {
        function e(t, i) {
          Oa || e.register(Pa), ol(this), this.init(t, i);
        }
        return (
          (e.prototype.init = function (t, i) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              _l)
            ) {
              var n,
                r,
                s,
                o,
                a,
                l,
                u,
                c,
                d,
                h,
                p,
                f,
                m,
                g,
                v,
                y,
                D,
                w,
                _,
                x,
                b,
                E,
                S,
                T,
                C,
                M,
                A,
                F,
                k,
                L,
                P,
                O,
                I,
                B,
                N,
                R,
                z,
                q,
                V,
                Y,
                H,
                X,
                W = (t = ru(
                  Bl(t) || Rl(t) || t.nodeType ? { trigger: t } : t,
                  fu,
                )),
                $ = W.onUpdate,
                G = W.toggleClass,
                j = W.id,
                U = W.onToggle,
                Q = W.onRefresh,
                K = W.scrub,
                Z = W.trigger,
                J = W.pin,
                ee = W.pinSpacing,
                te = W.invalidateOnRefresh,
                ie = W.anticipatePin,
                ne = W.onScrubComplete,
                re = W.onSnapComplete,
                se = W.once,
                oe = W.snap,
                ae = W.pinReparent,
                le = W.pinSpacer,
                ue = W.containerAnimation,
                ce = W.fastScrollEnd,
                de = W.preventOverlaps,
                he =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? ba
                    : Ea,
                pe = !K && 0 !== K,
                fe = Sa(t.scroller || Ia),
                me = Pa.core.getCache(fe),
                ge = kl(fe),
                ve =
                  "fixed" ===
                  ("pinType" in t
                    ? t.pinType
                    : ma(fe, "pinType") || (ge && "fixed")),
                ye = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                De = pe && t.toggleActions.split(" "),
                we = "markers" in t ? t.markers : fu.markers,
                _e = ge ? 0 : parseFloat(nu(fe)["border" + he.p2 + eu]) || 0,
                xe = this,
                be =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(xe);
                  },
                Ee = (function (e, t, i) {
                  var n = i.d,
                    r = i.d2,
                    s = i.a;
                  return (s = ma(e, "getBoundingClientRect"))
                    ? function () {
                        return s()[n];
                      }
                    : function () {
                        return (t ? Ll(r) : e["client" + r]) || 0;
                      };
                })(fe, ge, he),
                Se = (function (e, t) {
                  return !t || ~ha.indexOf(e)
                    ? Pl(e)
                    : function () {
                        return $u;
                      };
                })(fe, ge),
                Te = 0,
                Ce = 0,
                Me = 0,
                Ae = Ta(fe, he);
              if (
                ((xe._startClamp = xe._endClamp = !1),
                (xe._dir = he),
                (ie *= 45),
                (xe.scroller = fe),
                (xe.scroll = ue ? ue.time.bind(ue) : Ae),
                (o = Ae()),
                (xe.vars = t),
                (i = i || t.animation),
                "refreshPriority" in t &&
                  ((Za = 1), -9999 === t.refreshPriority && (gl = xe)),
                (me.tweenScroll = me.tweenScroll || {
                  top: Zu(fe, Ea),
                  left: Zu(fe, ba),
                }),
                (xe.tweenTo = n = me.tweenScroll[he.p]),
                (xe.scrubDuration = function (e) {
                  (I = Rl(e) && e)
                    ? O
                      ? O.duration(e)
                      : (O = Pa.to(i, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: I,
                          paused: !0,
                          onComplete: function () {
                            return ne && ne(xe);
                          },
                        }))
                    : (O && O.progress(1).kill(), (O = 0));
                }),
                i &&
                  ((i.vars.lazy = !1),
                  (i._initted && !xe.isReverted) ||
                    (!1 !== i.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      i.duration() &&
                      i.render(0, !0, !0)),
                  (xe.animation = i.pause()),
                  (i.scrollTrigger = xe),
                  xe.scrubDuration(K),
                  (L = 0),
                  j || (j = i.vars.id)),
                oe &&
                  ((zl(oe) && !oe.push) || (oe = { snapTo: oe }),
                  "scrollBehavior" in Ra.style &&
                    Pa.set(ge ? [Ra, Na] : fe, { scrollBehavior: "auto" }),
                  da.forEach(function (e) {
                    return (
                      Nl(e) &&
                      e.target === (ge ? Ba.scrollingElement || Na : fe) &&
                      (e.smooth = !1)
                    );
                  }),
                  (s = Nl(oe.snapTo)
                    ? oe.snapTo
                    : "labels" === oe.snapTo
                      ? (function (e) {
                          return function (t) {
                            return Pa.utils.snap(au(e), t);
                          };
                        })(i)
                      : "labelsDirectional" === oe.snapTo
                        ? ((Y = i),
                          function (e, t) {
                            return lu(au(Y))(e, t.direction);
                          })
                        : !1 !== oe.directional
                          ? function (e, t) {
                              return lu(oe.snapTo)(
                                e,
                                yl() - Ce < 500 ? 0 : t.direction,
                              );
                            }
                          : Pa.utils.snap(oe.snapTo)),
                  (B = oe.duration || { min: 0.1, max: 2 }),
                  (B = zl(B) ? Ya(B.min, B.max) : Ya(B, B)),
                  (N = Pa.delayedCall(oe.delay || I / 2 || 0.1, function () {
                    var e = Ae(),
                      t = yl() - Ce < 500,
                      r = n.tween;
                    if (
                      !(t || Math.abs(xe.getVelocity()) < 10) ||
                      r ||
                      $a ||
                      Te === e
                    )
                      xe.isActive && Te !== e && N.restart(!0);
                    else {
                      var o,
                        a,
                        c = (e - l) / g,
                        d = i && !pe ? i.totalProgress() : c,
                        h = t ? 0 : ((d - P) / (yl() - Ha)) * 1e3 || 0,
                        p = Pa.utils.clamp(-c, 1 - c, (Yl(h / 2) * h) / 0.185),
                        f = c + (!1 === oe.inertia ? 0 : p),
                        m = oe,
                        v = m.onStart,
                        y = m.onInterrupt,
                        D = m.onComplete;
                      if (
                        ((o = s(f, xe)),
                        Rl(o) || (o = f),
                        (a = Math.max(0, Math.round(l + o * g))),
                        e <= u && e >= l && a !== e)
                      ) {
                        if (r && !r._initted && r.data <= Yl(a - e)) return;
                        !1 === oe.inertia && (p = o - c),
                          n(
                            a,
                            {
                              duration: B(
                                Yl(
                                  (0.185 * Math.max(Yl(f - d), Yl(o - d))) /
                                    h /
                                    0.05 || 0,
                                ),
                              ),
                              ease: oe.ease || "power3",
                              data: Yl(a - e),
                              onInterrupt: function () {
                                return N.restart(!0) && y && y(xe);
                              },
                              onComplete: function () {
                                xe.update(),
                                  (Te = Ae()),
                                  i &&
                                    !pe &&
                                    (O
                                      ? O.resetTo(
                                          "totalProgress",
                                          o,
                                          i._tTime / i._tDur,
                                        )
                                      : i.progress(o)),
                                  (L = P =
                                    i && !pe ? i.totalProgress() : xe.progress),
                                  re && re(xe),
                                  D && D(xe);
                              },
                            },
                            e,
                            p * g,
                            a - e - p * g,
                          ),
                          v && v(xe, n.tween);
                      }
                    }
                  }).pause())),
                j && (wu[j] = xe),
                (V =
                  (Z = xe.trigger = Sa(Z || (!0 !== J && J))) &&
                  Z._gsap &&
                  Z._gsap.stRevert) && (V = V(xe)),
                (J = !0 === J ? Z : Sa(J)),
                Bl(G) && (G = { targets: Z, className: G }),
                J &&
                  (!1 === ee ||
                    ee === Jl ||
                    (ee =
                      !(
                        !ee &&
                        J.parentNode &&
                        J.parentNode.style &&
                        "flex" === nu(J.parentNode).display
                      ) && Zl),
                  (xe.pin = J),
                  (r = Pa.core.getCache(J)).spacer
                    ? (v = r.pinState)
                    : (le &&
                        ((le = Sa(le)) &&
                          !le.nodeType &&
                          (le = le.current || le.nativeElement),
                        (r.spacerIsNative = !!le),
                        le && (r.spacerState = Wu(le))),
                      (r.spacer = w = le || Ba.createElement("div")),
                      w.classList.add("pin-spacer"),
                      j && w.classList.add("pin-spacer-" + j),
                      (r.pinState = v = Wu(J))),
                  !1 !== t.force3D && Pa.set(J, { force3D: !0 }),
                  (xe.spacer = w = r.spacer),
                  (k = nu(J)),
                  (T = k[ee + he.os2]),
                  (x = Pa.getProperty(J)),
                  (b = Pa.quickSetter(J, he.a, iu)),
                  Yu(J, w, k),
                  (D = Wu(J))),
                we)
              ) {
                (f = zl(we) ? ru(we, pu) : pu),
                  (h = vu("scroller-start", j, fe, he, f, 0)),
                  (p = vu("scroller-end", j, fe, he, f, 0, h)),
                  (_ = h["offset" + he.op.d2]);
                var Fe = Sa(ma(fe, "content") || fe);
                (c = this.markerStart = vu("start", j, Fe, he, f, _, 0, ue)),
                  (d = this.markerEnd = vu("end", j, Fe, he, f, _, 0, ue)),
                  ue && (q = Pa.quickSetter([c, d], he.a, iu)),
                  ve ||
                    (ha.length && !0 === ma(fe, "fixedMarkers")) ||
                    ((X = nu((H = ge ? Ra : fe)).position),
                    (H.style.position =
                      "absolute" === X || "fixed" === X ? X : "relative"),
                    Pa.set([h, p], { force3D: !0 }),
                    (M = Pa.quickSetter(h, he.a, iu)),
                    (F = Pa.quickSetter(p, he.a, iu)));
              }
              if (ue) {
                var ke = ue.vars.onUpdate,
                  Le = ue.vars.onUpdateParams;
                ue.eventCallback("onUpdate", function () {
                  xe.update(0, 0, 1), ke && ke.apply(ue, Le || []);
                });
              }
              if (
                ((xe.previous = function () {
                  return Du[Du.indexOf(xe) - 1];
                }),
                (xe.next = function () {
                  return Du[Du.indexOf(xe) + 1];
                }),
                (xe.revert = function (e, t) {
                  if (!t) return xe.kill(!0);
                  var n = !1 !== e || !xe.enabled,
                    r = Wa;
                  n !== xe.isReverted &&
                    (n &&
                      ((R = Math.max(Ae(), xe.scroll.rec || 0)),
                      (Me = xe.progress),
                      (z = i && i.progress())),
                    c &&
                      [c, d, h, p].forEach(function (e) {
                        return (e.style.display = n ? "none" : "block");
                      }),
                    n && ((Wa = xe), xe.update(n)),
                    !J ||
                      (ae && xe.isActive) ||
                      (n
                        ? (function (e, t, i) {
                            Xu(i);
                            var n = e._gsap;
                            if (n.spacerIsNative) Xu(n.spacerState);
                            else if (e._gsap.swappedIn) {
                              var r = t.parentNode;
                              r && (r.insertBefore(e, t), r.removeChild(t));
                            }
                            e._gsap.swappedIn = !1;
                          })(J, w, v)
                        : Yu(J, w, nu(J), C)),
                    n || xe.update(n),
                    (Wa = r),
                    (xe.isReverted = n));
                }),
                (xe.refresh = function (r, s, f, _) {
                  if ((!Wa && xe.enabled) || s)
                    if (J && r && wl) cu(e, "scrollEnd", Cu);
                    else {
                      !fl && be && be(xe),
                        (Wa = xe),
                        n.tween && !f && (n.tween.kill(), (n.tween = 0)),
                        O && O.pause(),
                        te && i && i.revert({ kill: !1 }).invalidate(),
                        xe.isReverted || xe.revert(!0, !0),
                        (xe._subPinOffset = !1);
                      var b,
                        T,
                        M,
                        F,
                        k,
                        L,
                        P,
                        I,
                        B,
                        q,
                        V,
                        Y,
                        H,
                        X = Ee(),
                        W = Se(),
                        $ = ue ? ue.duration() : Ol(fe, he),
                        G = g <= 0.01,
                        j = 0,
                        U = _ || 0,
                        K = zl(f) ? f.end : t.end,
                        ie = t.endTrigger || Z,
                        ne = zl(f)
                          ? f.start
                          : t.start ||
                            (0 !== t.start && Z ? (J ? "0 0" : "0 100%") : 0),
                        re = (xe.pinnedContainer =
                          t.pinnedContainer && Sa(t.pinnedContainer, xe)),
                        se = (Z && Math.max(0, Du.indexOf(xe))) || 0,
                        oe = se;
                      for (
                        we &&
                        zl(f) &&
                        ((Y = Pa.getProperty(h, he.p)),
                        (H = Pa.getProperty(p, he.p)));
                        oe-- > 0;

                      )
                        (L = Du[oe]).end || L.refresh(0, 1) || (Wa = xe),
                          !(P = L.pin) ||
                            (P !== Z && P !== J && P !== re) ||
                            L.isReverted ||
                            (q || (q = []), q.unshift(L), L.revert(!0, !0)),
                          L !== Du[oe] && (se--, oe--);
                      for (
                        Nl(ne) && (ne = ne(xe)),
                          ne = xl(ne, "start", xe),
                          l =
                            Gu(
                              ne,
                              Z,
                              X,
                              he,
                              Ae(),
                              c,
                              h,
                              xe,
                              W,
                              _e,
                              ve,
                              $,
                              ue,
                              xe._startClamp && "_startClamp",
                            ) || (J ? -0.001 : 0),
                          Nl(K) && (K = K(xe)),
                          Bl(K) &&
                            !K.indexOf("+=") &&
                            (~K.indexOf(" ")
                              ? (K = (Bl(ne) ? ne.split(" ")[0] : "") + K)
                              : ((j = gu(K.substr(2), X)),
                                (K = Bl(ne)
                                  ? ne
                                  : (ue
                                      ? Pa.utils.mapRange(
                                          0,
                                          ue.duration(),
                                          ue.scrollTrigger.start,
                                          ue.scrollTrigger.end,
                                          l,
                                        )
                                      : l) + j),
                                (ie = Z))),
                          K = xl(K, "end", xe),
                          u =
                            Math.max(
                              l,
                              Gu(
                                K || (ie ? "100% 0" : $),
                                ie,
                                X,
                                he,
                                Ae() + j,
                                d,
                                p,
                                xe,
                                W,
                                _e,
                                ve,
                                $,
                                ue,
                                xe._endClamp && "_endClamp",
                              ),
                            ) || -0.001,
                          j = 0,
                          oe = se;
                        oe--;

                      )
                        (P = (L = Du[oe]).pin) &&
                          L.start - L._pinPush <= l &&
                          !ue &&
                          L.end > 0 &&
                          ((b =
                            L.end -
                            (xe._startClamp ? Math.max(0, L.start) : L.start)),
                          ((P === Z && L.start - L._pinPush < l) || P === re) &&
                            isNaN(ne) &&
                            (j += b * (1 - L.progress)),
                          P === J && (U += b));
                      if (
                        ((l += j),
                        (u += j),
                        xe._startClamp && (xe._startClamp += j),
                        xe._endClamp &&
                          !fl &&
                          ((xe._endClamp = u || -0.001),
                          (u = Math.min(u, Ol(fe, he)))),
                        (g = u - l || ((l -= 0.01) && 0.001)),
                        G &&
                          (Me = Pa.utils.clamp(
                            0,
                            1,
                            Pa.utils.normalize(l, u, R),
                          )),
                        (xe._pinPush = U),
                        c &&
                          j &&
                          (((b = {})[he.a] = "+=" + j),
                          re && (b[he.p] = "-=" + Ae()),
                          Pa.set([c, d], b)),
                        !J || (dl && xe.end >= Ol(fe, he)))
                      ) {
                        if (Z && Ae() && !ue)
                          for (T = Z.parentNode; T && T !== Ra; )
                            T._pinOffset &&
                              ((l -= T._pinOffset), (u -= T._pinOffset)),
                              (T = T.parentNode);
                      } else
                        (b = nu(J)),
                          (F = he === Ea),
                          (M = Ae()),
                          (E = parseFloat(x(he.a)) + U),
                          !$ &&
                            u > 1 &&
                            ((V = {
                              style: (V = (ge ? Ba.scrollingElement || Na : fe)
                                .style),
                              value: V["overflow" + he.a.toUpperCase()],
                            }),
                            ge &&
                              "scroll" !==
                                nu(Ra)["overflow" + he.a.toUpperCase()] &&
                              (V.style["overflow" + he.a.toUpperCase()] =
                                "scroll")),
                          Yu(J, w, b),
                          (D = Wu(J)),
                          (T = su(J, !0)),
                          (I = ve && Ta(fe, F ? ba : Ea)()),
                          ee
                            ? (((C = [ee + he.os2, g + U + iu]).t = w),
                              (oe = ee === Zl ? ou(J, he) + g + U : 0) &&
                                (C.push(he.d, oe + iu),
                                "auto" !== w.style.flexBasis &&
                                  (w.style.flexBasis = oe + iu)),
                              Xu(C),
                              re &&
                                Du.forEach(function (e) {
                                  e.pin === re &&
                                    !1 !== e.vars.pinSpacing &&
                                    (e._subPinOffset = !0);
                                }),
                              ve && Ae(R))
                            : (oe = ou(J, he)) &&
                              "auto" !== w.style.flexBasis &&
                              (w.style.flexBasis = oe + iu),
                          ve &&
                            (((k = {
                              top: T.top + (F ? M - l : I) + iu,
                              left: T.left + (F ? I : M - l) + iu,
                              boxSizing: "border-box",
                              position: "fixed",
                            })[$l] = k["max" + eu] =
                              Math.ceil(T.width) + iu),
                            (k[Gl] = k["max" + tu] = Math.ceil(T.height) + iu),
                            (k[Jl] =
                              k[Jl + Ql] =
                              k[Jl + jl] =
                              k[Jl + Kl] =
                              k[Jl + Ul] =
                                "0"),
                            (k[Zl] = b[Zl]),
                            (k[Zl + Ql] = b[Zl + Ql]),
                            (k[Zl + jl] = b[Zl + jl]),
                            (k[Zl + Kl] = b[Zl + Kl]),
                            (k[Zl + Ul] = b[Zl + Ul]),
                            (y = (function (e, t, i) {
                              for (
                                var n, r = [], s = e.length, o = i ? 8 : 0;
                                o < s;
                                o += 2
                              )
                                (n = e[o]), r.push(n, n in t ? t[n] : e[o + 1]);
                              return (r.t = e.t), r;
                            })(v, k, ae)),
                            fl && Ae(0)),
                          i
                            ? ((B = i._initted),
                              Ja(1),
                              i.render(i.duration(), !0, !0),
                              (S = x(he.a) - E + g + U),
                              (A = Math.abs(g - S) > 1),
                              ve && A && y.splice(y.length - 2, 2),
                              i.render(0, !0, !0),
                              B || i.invalidate(!0),
                              i.parent || i.totalTime(i.totalTime()),
                              Ja(0))
                            : (S = g),
                          V &&
                            (V.value
                              ? (V.style["overflow" + he.a.toUpperCase()] =
                                  V.value)
                              : V.style.removeProperty("overflow-" + he.a));
                      q &&
                        q.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (xe.start = l),
                        (xe.end = u),
                        (o = a = fl ? R : Ae()),
                        ue || fl || (o < R && Ae(R), (xe.scroll.rec = 0)),
                        xe.revert(!1, !0),
                        (Ce = yl()),
                        N && ((Te = -1), N.restart(!0)),
                        (Wa = 0),
                        i &&
                          pe &&
                          (i._initted || z) &&
                          i.progress() !== z &&
                          i.progress(z || 0, !0).render(i.time(), !0, !0),
                        (G ||
                          Me !== xe.progress ||
                          ue ||
                          te ||
                          (i && !i._initted)) &&
                          (i &&
                            !pe &&
                            i.totalProgress(
                              ue && l < -0.001 && !Me
                                ? Pa.utils.normalize(l, u, 0)
                                : Me,
                              !0,
                            ),
                          (xe.progress = G || (o - l) / g === Me ? 0 : Me)),
                        J && ee && (w._pinOffset = Math.round(xe.progress * S)),
                        O && O.invalidate(),
                        isNaN(Y) ||
                          ((Y -= Pa.getProperty(h, he.p)),
                          (H -= Pa.getProperty(p, he.p)),
                          Ku(h, he, Y),
                          Ku(c, he, Y - (_ || 0)),
                          Ku(p, he, H),
                          Ku(d, he, H - (_ || 0))),
                        G && !fl && xe.update(),
                        !Q || fl || m || ((m = !0), Q(xe), (m = !1));
                    }
                }),
                (xe.getVelocity = function () {
                  return ((Ae() - a) / (yl() - Ha)) * 1e3 || 0;
                }),
                (xe.endAnimation = function () {
                  ql(xe.callbackAnimation),
                    i &&
                      (O
                        ? O.progress(1)
                        : i.paused()
                          ? pe || ql(i, xe.direction < 0, 1)
                          : ql(i, i.reversed()));
                }),
                (xe.labelToScroll = function (e) {
                  return (
                    (i &&
                      i.labels &&
                      (l || xe.refresh() || l) +
                        (i.labels[e] / i.duration()) * g) ||
                    0
                  );
                }),
                (xe.getTrailing = function (e) {
                  var t = Du.indexOf(xe),
                    i =
                      xe.direction > 0
                        ? Du.slice(0, t).reverse()
                        : Du.slice(t + 1);
                  return (
                    Bl(e)
                      ? i.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : i
                  ).filter(function (e) {
                    return xe.direction > 0 ? e.end <= l : e.start >= u;
                  });
                }),
                (xe.update = function (e, t, r) {
                  if (!ue || r || e) {
                    var s,
                      c,
                      d,
                      p,
                      f,
                      m,
                      v,
                      _ = !0 === fl ? R : xe.scroll(),
                      x = e ? 0 : (_ - l) / g,
                      C = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                      k = xe.progress;
                    if (
                      (t &&
                        ((a = o),
                        (o = ue ? Ae() : _),
                        oe &&
                          ((P = L), (L = i && !pe ? i.totalProgress() : C))),
                      ie &&
                        J &&
                        !Wa &&
                        !vl &&
                        wl &&
                        (!C && l < _ + ((_ - a) / (yl() - Ha)) * ie
                          ? (C = 1e-4)
                          : 1 === C &&
                            u > _ + ((_ - a) / (yl() - Ha)) * ie &&
                            (C = 0.9999)),
                      C !== k && xe.enabled)
                    ) {
                      if (
                        ((p =
                          (f =
                            (s = xe.isActive = !!C && C < 1) !==
                            (!!k && k < 1)) || !!C != !!k),
                        (xe.direction = C > k ? 1 : -1),
                        (xe.progress = C),
                        p &&
                          !Wa &&
                          ((c = C && !k ? 0 : 1 === C ? 1 : 1 === k ? 2 : 3),
                          pe &&
                            ((d =
                              (!f && "none" !== De[c + 1] && De[c + 1]) ||
                              De[c]),
                            (v =
                              i &&
                              ("complete" === d || "reset" === d || d in i)))),
                        de &&
                          (f || v) &&
                          (v || K || !i) &&
                          (Nl(de)
                            ? de(xe)
                            : xe.getTrailing(de).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        pe ||
                          (!O || Wa || vl
                            ? i && i.totalProgress(C, !(!Wa || (!Ce && !e)))
                            : (O._dp._time - O._start !== O._time &&
                                O.render(O._dp._time - O._start),
                              O.resetTo
                                ? O.resetTo(
                                    "totalProgress",
                                    C,
                                    i._tTime / i._tDur,
                                  )
                                : ((O.vars.totalProgress = C),
                                  O.invalidate().restart()))),
                        J)
                      )
                        if ((e && ee && (w.style[ee + he.os2] = T), ve)) {
                          if (p) {
                            if (
                              ((m =
                                !e &&
                                C > k &&
                                u + 1 > _ &&
                                _ + 1 >= Ol(fe, he)),
                              ae)
                            )
                              if (e || (!s && !m)) Uu(J, w);
                              else {
                                var I = su(J, !0),
                                  B = _ - l;
                                Uu(
                                  J,
                                  Ra,
                                  I.top + (he === Ea ? B : 0) + iu,
                                  I.left + (he === Ea ? 0 : B) + iu,
                                );
                              }
                            Xu(s || m ? y : D),
                              (A && C < 1 && s) ||
                                b(E + (1 !== C || m ? 0 : S));
                          }
                        } else b(Ml(E + S * C));
                      oe && !n.tween && !Wa && !vl && N.restart(!0),
                        G &&
                          (f || (se && C && (C < 1 || !hl))) &&
                          Va(G.targets).forEach(function (e) {
                            return e.classList[s || se ? "add" : "remove"](
                              G.className,
                            );
                          }),
                        $ && !pe && !e && $(xe),
                        p && !Wa
                          ? (pe &&
                              (v &&
                                ("complete" === d
                                  ? i.pause().totalProgress(1)
                                  : "reset" === d
                                    ? i.restart(!0).pause()
                                    : "restart" === d
                                      ? i.restart(!0)
                                      : i[d]()),
                              $ && $(xe)),
                            (!f && hl) ||
                              (U && f && Vl(xe, U),
                              ye[c] && Vl(xe, ye[c]),
                              se && (1 === C ? xe.kill(!1, 1) : (ye[c] = 0)),
                              f ||
                                (ye[(c = 1 === C ? 1 : 3)] && Vl(xe, ye[c]))),
                            ce &&
                              !s &&
                              Math.abs(xe.getVelocity()) >
                                (Rl(ce) ? ce : 2500) &&
                              (ql(xe.callbackAnimation),
                              O
                                ? O.progress(1)
                                : ql(i, "reverse" === d ? 1 : !C, 1)))
                          : pe && $ && !Wa && $(xe);
                    }
                    if (F) {
                      var z = ue
                        ? (_ / ue.duration()) * (ue._caScrollDist || 0)
                        : _;
                      M(z + (h._isFlipped ? 1 : 0)), F(z);
                    }
                    q && q((-_ / ue.duration()) * (ue._caScrollDist || 0));
                  }
                }),
                (xe.enable = function (t, i) {
                  xe.enabled ||
                    ((xe.enabled = !0),
                    cu(fe, "resize", Eu),
                    ge || cu(fe, "scroll", xu),
                    be && cu(e, "refreshInit", be),
                    !1 !== t && ((xe.progress = Me = 0), (o = a = Te = Ae())),
                    !1 !== i && xe.refresh());
                }),
                (xe.getTween = function (e) {
                  return e && n ? n.tween : O;
                }),
                (xe.setPositions = function (e, t, i, n) {
                  if (ue) {
                    var r = ue.scrollTrigger,
                      s = ue.duration(),
                      o = r.end - r.start;
                    (e = r.start + (o * e) / s), (t = r.start + (o * t) / s);
                  }
                  xe.refresh(
                    !1,
                    !1,
                    {
                      start: bl(e, i && !!xe._startClamp),
                      end: bl(t, i && !!xe._endClamp),
                    },
                    n,
                  ),
                    xe.update();
                }),
                (xe.adjustPinSpacing = function (e) {
                  if (C && e) {
                    var t = C.indexOf(he.d) + 1;
                    (C[t] = parseFloat(C[t]) + e + iu),
                      (C[1] = parseFloat(C[1]) + e + iu),
                      Xu(C);
                  }
                }),
                (xe.disable = function (t, i) {
                  if (
                    xe.enabled &&
                    (!1 !== t && xe.revert(!0, !0),
                    (xe.enabled = xe.isActive = !1),
                    i || (O && O.pause()),
                    (R = 0),
                    r && (r.uncache = 1),
                    be && du(e, "refreshInit", be),
                    N &&
                      (N.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                    !ge)
                  ) {
                    for (var s = Du.length; s--; )
                      if (Du[s].scroller === fe && Du[s] !== xe) return;
                    du(fe, "resize", Eu), ge || du(fe, "scroll", xu);
                  }
                }),
                (xe.kill = function (e, n) {
                  xe.disable(e, n), O && !n && O.kill(), j && delete wu[j];
                  var s = Du.indexOf(xe);
                  s >= 0 && Du.splice(s, 1),
                    s === ja && Ru > 0 && ja--,
                    (s = 0),
                    Du.forEach(function (e) {
                      return e.scroller === xe.scroller && (s = 1);
                    }),
                    s || fl || (xe.scroll.rec = 0),
                    i &&
                      ((i.scrollTrigger = null),
                      e && i.revert({ kill: !1 }),
                      n || i.kill()),
                    c &&
                      [c, d, h, p].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    gl === xe && (gl = 0),
                    J &&
                      (r && (r.uncache = 1),
                      (s = 0),
                      Du.forEach(function (e) {
                        return e.pin === J && s++;
                      }),
                      s || (r.spacer = 0)),
                    t.onKill && t.onKill(xe);
                }),
                Du.push(xe),
                xe.enable(!1, !1),
                V && V(xe),
                i && i.add && !g)
              ) {
                var Pe = xe.update;
                (xe.update = function () {
                  (xe.update = Pe), da.cache++, l || u || xe.refresh();
                }),
                  Pa.delayedCall(0.01, xe.update),
                  (g = 0.01),
                  (l = u = 0);
              } else xe.refresh();
              J &&
                (function () {
                  if (ml !== Pu) {
                    var e = (ml = Pu);
                    requestAnimationFrame(function () {
                      return e === Pu && Bu(!0);
                    });
                  }
                })();
            } else this.update = this.refresh = this.kill = Cl;
          }),
          (e.register = function (t) {
            return (
              Oa ||
                ((Pa = t || Fl()),
                Al() && window.document && e.enable(),
                (Oa = _l)),
              Oa
            );
          }),
          (e.defaults = function (e) {
            if (e) for (var t in e) fu[t] = e[t];
            return fu;
          }),
          (e.disable = function (e, t) {
            (_l = 0),
              Du.forEach(function (i) {
                return i[t ? "kill" : "disable"](e);
              }),
              du(Ia, "wheel", xu),
              du(Ba, "scroll", xu),
              clearInterval(Xa),
              du(Ba, "touchcancel", Cl),
              du(Ra, "touchstart", Cl),
              uu(du, Ba, "pointerdown,touchstart,mousedown", Sl),
              uu(du, Ba, "pointerup,touchend,mouseup", Tl),
              qa.kill(),
              Il(du);
            for (var i = 0; i < da.length; i += 3)
              hu(du, da[i], da[i + 1]), hu(du, da[i], da[i + 2]);
          }),
          (e.enable = function () {
            if (
              ((Ia = window),
              (Ba = document),
              (Na = Ba.documentElement),
              (Ra = Ba.body),
              Pa &&
                ((Va = Pa.utils.toArray),
                (Ya = Pa.utils.clamp),
                (ol = Pa.core.context || Cl),
                (Ja = Pa.core.suppressOverwrites || Cl),
                (al = Ia.history.scrollRestoration || "auto"),
                (Nu = Ia.pageYOffset || 0),
                Pa.core.globals("ScrollTrigger", e),
                Ra))
            ) {
              (_l = 1),
                ((ll = document.createElement("div")).style.height = "100vh"),
                (ll.style.position = "absolute"),
                Ou(),
                El(),
                La.register(Pa),
                (e.isTouch = La.isTouch),
                (sl =
                  La.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (il = 1 === La.isTouch),
                cu(Ia, "wheel", xu),
                (za = [Ia, Ba, Na, Ra]),
                Pa.matchMedia &&
                  ((e.matchMedia = function (e) {
                    var t,
                      i = Pa.matchMedia();
                    for (t in e) i.add(t, e[t]);
                    return i;
                  }),
                  Pa.addEventListener("matchMediaInit", function () {
                    return ku();
                  }),
                  Pa.addEventListener("matchMediaRevert", function () {
                    return Fu();
                  }),
                  Pa.addEventListener("matchMedia", function () {
                    Bu(0, 1), Mu("matchMedia");
                  }),
                  Pa.matchMedia().add("(orientation: portrait)", function () {
                    return bu(), bu;
                  })),
                bu(),
                cu(Ba, "scroll", xu);
              var t,
                i,
                n = Ra.hasAttribute("style"),
                r = Ra.style,
                s = r.borderTopStyle,
                o = Pa.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  r.borderTopStyle = "solid",
                  t = su(Ra),
                  Ea.m = Math.round(t.top + Ea.sc()) || 0,
                  ba.m = Math.round(t.left + ba.sc()) || 0,
                  s
                    ? (r.borderTopStyle = s)
                    : r.removeProperty("border-top-style"),
                  n ||
                    (Ra.setAttribute("style", ""), Ra.removeAttribute("style")),
                  Xa = setInterval(_u, 250),
                  Pa.delayedCall(0.5, function () {
                    return (vl = 0);
                  }),
                  cu(Ba, "touchcancel", Cl),
                  cu(Ra, "touchstart", Cl),
                  uu(cu, Ba, "pointerdown,touchstart,mousedown", Sl),
                  uu(cu, Ba, "pointerup,touchend,mouseup", Tl),
                  Ga = Pa.utils.checkPrefix("transform"),
                  Vu.push(Ga),
                  Oa = yl(),
                  qa = Pa.delayedCall(0.2, Bu).pause(),
                  Ka = [
                    Ba,
                    "visibilitychange",
                    function () {
                      var e = Ia.innerWidth,
                        t = Ia.innerHeight;
                      Ba.hidden
                        ? ((Ua = e), (Qa = t))
                        : (Ua === e && Qa === t) || Eu();
                    },
                    Ba,
                    "DOMContentLoaded",
                    Bu,
                    Ia,
                    "load",
                    Bu,
                    Ia,
                    "resize",
                    Eu,
                  ],
                  Il(cu),
                  Du.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  i = 0;
                i < da.length;
                i += 3
              )
                hu(du, da[i], da[i + 1]), hu(du, da[i], da[i + 2]);
            }
          }),
          (e.config = function (t) {
            "limitCallbacks" in t && (hl = !!t.limitCallbacks);
            var i = t.syncInterval;
            (i && clearInterval(Xa)) || ((Xa = i) && setInterval(_u, i)),
              "ignoreMobileResize" in t &&
                (il = 1 === e.isTouch && t.ignoreMobileResize),
              "autoRefreshEvents" in t &&
                (Il(du) || Il(cu, t.autoRefreshEvents || "none"),
                (el = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
          }),
          (e.scrollerProxy = function (e, t) {
            var i = Sa(e),
              n = da.indexOf(i),
              r = kl(i);
            ~n && da.splice(n, r ? 6 : 2),
              t && (r ? ha.unshift(Ia, t, Ra, t, Na, t) : ha.unshift(i, t));
          }),
          (e.clearMatchMedia = function (e) {
            Du.forEach(function (t) {
              return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
            });
          }),
          (e.isInViewport = function (e, t, i) {
            var n = (Bl(e) ? Sa(e) : e).getBoundingClientRect(),
              r = n[i ? $l : Gl] * t || 0;
            return i
              ? n.right - r > 0 && n.left + r < Ia.innerWidth
              : n.bottom - r > 0 && n.top + r < Ia.innerHeight;
          }),
          (e.positionInViewport = function (e, t, i) {
            Bl(e) && (e = Sa(e));
            var n = e.getBoundingClientRect(),
              r = n[i ? $l : Gl],
              s =
                null == t
                  ? r / 2
                  : t in mu
                    ? mu[t] * r
                    : ~t.indexOf("%")
                      ? (parseFloat(t) * r) / 100
                      : parseFloat(t) || 0;
            return i
              ? (n.left + s) / Ia.innerWidth
              : (n.top + s) / Ia.innerHeight;
          }),
          (e.killAll = function (e) {
            if (
              (Du.slice(0).forEach(function (e) {
                return "ScrollSmoother" !== e.vars.id && e.kill();
              }),
              !0 !== e)
            ) {
              var t = Su.killAll || [];
              (Su = {}),
                t.forEach(function (e) {
                  return e();
                });
            }
          }),
          e
        );
      })();
    (Ju.version = "3.12.7"),
      (Ju.saveStyles = function (e) {
        return e
          ? Va(e).forEach(function (e) {
              if (e && e.style) {
                var t = Au.indexOf(e);
                t >= 0 && Au.splice(t, 5),
                  Au.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    Pa.core.getCache(e),
                    ol(),
                  );
              }
            })
          : Au;
      }),
      (Ju.revert = function (e, t) {
        return ku(!e, t);
      }),
      (Ju.create = function (e, t) {
        return new Ju(e, t);
      }),
      (Ju.refresh = function (e) {
        return e ? Eu(!0) : (Oa || Ju.register()) && Bu(!0);
      }),
      (Ju.update = function (e) {
        return ++da.cache && zu(!0 === e ? 2 : 0);
      }),
      (Ju.clearScrollMemory = Lu),
      (Ju.maxScroll = function (e, t) {
        return Ol(e, t ? ba : Ea);
      }),
      (Ju.getScrollFunc = function (e, t) {
        return Ta(Sa(e), t ? ba : Ea);
      }),
      (Ju.getById = function (e) {
        return wu[e];
      }),
      (Ju.getAll = function () {
        return Du.filter(function (e) {
          return "ScrollSmoother" !== e.vars.id;
        });
      }),
      (Ju.isScrolling = function () {
        return !!wl;
      }),
      (Ju.snapDirectional = lu),
      (Ju.addEventListener = function (e, t) {
        var i = Su[e] || (Su[e] = []);
        ~i.indexOf(t) || i.push(t);
      }),
      (Ju.removeEventListener = function (e, t) {
        var i = Su[e],
          n = i && i.indexOf(t);
        n >= 0 && i.splice(n, 1);
      }),
      (Ju.batch = function (e, t) {
        var i,
          n = [],
          r = {},
          s = t.interval || 0.016,
          o = t.batchMax || 1e9,
          a = function (e, t) {
            var i = [],
              n = [],
              r = Pa.delayedCall(s, function () {
                t(i, n), (i = []), (n = []);
              }).pause();
            return function (e) {
              i.length || r.restart(!0),
                i.push(e.trigger),
                n.push(e),
                o <= i.length && r.progress(1);
            };
          };
        for (i in t)
          r[i] =
            "on" === i.substr(0, 2) && Nl(t[i]) && "onRefreshInit" !== i
              ? a(0, t[i])
              : t[i];
        return (
          Nl(o) &&
            ((o = o()),
            cu(Ju, "refresh", function () {
              return (o = t.batchMax());
            })),
          Va(e).forEach(function (e) {
            var t = {};
            for (i in r) t[i] = r[i];
            (t.trigger = e), n.push(Ju.create(t));
          }),
          n
        );
      });
    var ec,
      tc = function (e, t, i, n) {
        return (
          t > n ? e(n) : t < 0 && e(0),
          i > n ? (n - t) / (i - t) : i < 0 ? t / (t - i) : 1
        );
      },
      ic = function e(t, i) {
        !0 === i
          ? t.style.removeProperty("touch-action")
          : (t.style.touchAction =
              !0 === i
                ? "auto"
                : i
                  ? "pan-" + i + (La.isTouch ? " pinch-zoom" : "")
                  : "none"),
          t === Na && e(Ra, i);
      },
      nc = { auto: 1, scroll: 1 },
      rc = function (e) {
        var t,
          i = e.event,
          n = e.target,
          r = e.axis,
          s = (i.changedTouches ? i.changedTouches[0] : i).target,
          o = s._gsap || Pa.core.getCache(s),
          a = yl();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
          for (
            ;
            s &&
            s !== Ra &&
            ((s.scrollHeight <= s.clientHeight &&
              s.scrollWidth <= s.clientWidth) ||
              (!nc[(t = nu(s)).overflowY] && !nc[t.overflowX]));

          )
            s = s.parentNode;
          (o._isScroll =
            s &&
            s !== n &&
            !kl(s) &&
            (nc[(t = nu(s)).overflowY] || nc[t.overflowX])),
            (o._isScrollT = a);
        }
        (o._isScroll || "x" === r) &&
          (i.stopPropagation(), (i._gsapAllow = !0));
      },
      sc = function (e, t, i, n) {
        return La.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (n = n && rc),
          onPress: n,
          onDrag: n,
          onScroll: n,
          onEnable: function () {
            return i && cu(Ba, La.eventTypes[0], ac, !1, !0);
          },
          onDisable: function () {
            return du(Ba, La.eventTypes[0], ac, !0);
          },
        });
      },
      oc = /(input|label|select|textarea)/i,
      ac = function (e) {
        var t = oc.test(e.target.tagName);
        (t || ec) && ((e._gsapAllow = !0), (ec = t));
      },
      lc = function (e) {
        zl(e) || (e = {}),
          (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var t,
          i,
          n,
          r,
          s,
          o,
          a,
          l,
          u = e,
          c = u.normalizeScrollX,
          d = u.momentum,
          h = u.allowNestedScroll,
          p = u.onRelease,
          f = Sa(e.target) || Na,
          m = Pa.core.globals().ScrollSmoother,
          g = m && m.get(),
          v =
            sl &&
            ((e.content && Sa(e.content)) ||
              (g && !1 !== e.content && !g.smooth() && g.content())),
          y = Ta(f, Ea),
          D = Ta(f, ba),
          w = 1,
          _ =
            (La.isTouch && Ia.visualViewport
              ? Ia.visualViewport.scale * Ia.visualViewport.width
              : Ia.outerWidth) / Ia.innerWidth,
          x = 0,
          b = Nl(d)
            ? function () {
                return d(t);
              }
            : function () {
                return d || 2.8;
              },
          E = sc(f, e.type, !0, h),
          S = function () {
            return (r = !1);
          },
          T = Cl,
          C = Cl,
          M = function () {
            (i = Ol(f, Ea)),
              (C = Ya(sl ? 1 : 0, i)),
              c && (T = Ya(0, Ol(f, ba))),
              (n = Pu);
          },
          A = function () {
            (v._gsap.y = Ml(parseFloat(v._gsap.y) + y.offset) + "px"),
              (v.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(v._gsap.y) +
                ", 0, 1)"),
              (y.offset = y.cacheID = 0);
          },
          F = function () {
            M(),
              s.isActive() &&
                s.vars.scrollY > i &&
                (y() > i ? s.progress(1) && y(i) : s.resetTo("scrollY", i));
          };
        return (
          v && Pa.set(v, { y: "+=0" }),
          (e.ignoreCheck = function (e) {
            return (
              (sl &&
                "touchmove" === e.type &&
                (function () {
                  if (r) {
                    requestAnimationFrame(S);
                    var e = Ml(t.deltaY / 2),
                      i = C(y.v - e);
                    if (v && i !== y.v + y.offset) {
                      y.offset = i - y.v;
                      var n = Ml((parseFloat(v && v._gsap.y) || 0) - y.offset);
                      (v.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        n +
                        ", 0, 1)"),
                        (v._gsap.y = n + "px"),
                        (y.cacheID = da.cache),
                        zu();
                    }
                    return !0;
                  }
                  y.offset && A(), (r = !0);
                })()) ||
              (w > 1.05 && "touchstart" !== e.type) ||
              t.isGesturing ||
              (e.touches && e.touches.length > 1)
            );
          }),
          (e.onPress = function () {
            r = !1;
            var e = w;
            (w = Ml(((Ia.visualViewport && Ia.visualViewport.scale) || 1) / _)),
              s.pause(),
              e !== w && ic(f, w > 1.01 || (!c && "x")),
              (o = D()),
              (a = y()),
              M(),
              (n = Pu);
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              if ((y.offset && A(), t)) {
                da.cache++;
                var n,
                  r,
                  o = b();
                c &&
                  ((r = (n = D()) + (0.05 * o * -e.velocityX) / 0.227),
                  (o *= tc(D, n, r, Ol(f, ba))),
                  (s.vars.scrollX = T(r))),
                  (r = (n = y()) + (0.05 * o * -e.velocityY) / 0.227),
                  (o *= tc(y, n, r, Ol(f, Ea))),
                  (s.vars.scrollY = C(r)),
                  s.invalidate().duration(o).play(0.01),
                  ((sl && s.vars.scrollY >= i) || n >= i - 1) &&
                    Pa.to({}, { onUpdate: F, duration: o });
              } else l.restart(!0);
              p && p(e);
            }),
          (e.onWheel = function () {
            s._ts && s.pause(), yl() - x > 1e3 && ((n = 0), (x = yl()));
          }),
          (e.onChange = function (e, t, i, r, s) {
            if (
              (Pu !== n && M(),
              t &&
                c &&
                D(T(r[2] === t ? o + (e.startX - e.x) : D() + t - r[1])),
              i)
            ) {
              y.offset && A();
              var l = s[2] === i,
                u = l ? a + e.startY - e.y : y() + i - s[1],
                d = C(u);
              l && u !== d && (a += d - u), y(d);
            }
            (i || t) && zu();
          }),
          (e.onEnable = function () {
            ic(f, !c && "x"),
              Ju.addEventListener("refresh", F),
              cu(Ia, "resize", F),
              y.smooth &&
                ((y.target.style.scrollBehavior = "auto"),
                (y.smooth = D.smooth = !1)),
              E.enable();
          }),
          (e.onDisable = function () {
            ic(f, !0),
              du(Ia, "resize", F),
              Ju.removeEventListener("refresh", F),
              E.kill();
          }),
          (e.lockAxis = !1 !== e.lockAxis),
          ((t = new La(e)).iOS = sl),
          sl && !y() && y(1),
          sl && Pa.ticker.add(Cl),
          (l = t._dc),
          (s = Pa.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: Qu(y, y(), function () {
                return s.pause();
              }),
            },
            onUpdate: zu,
            onComplete: l.vars.onComplete,
          })),
          t
        );
      };
    (Ju.sort = function (e) {
      if (Nl(e)) return Du.sort(e);
      var t = Ia.pageYOffset || 0;
      return (
        Ju.getAll().forEach(function (e) {
          return (e._sortY = e.trigger
            ? t + e.trigger.getBoundingClientRect().top
            : e.start + Ia.innerHeight);
        }),
        Du.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                (e.vars.containerAnimation ? 1e6 : e._sortY) -
                ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                  -1e6 * (t.vars.refreshPriority || 0))
              );
            },
        )
      );
    }),
      (Ju.observe = function (e) {
        return new La(e);
      }),
      (Ju.normalizeScroll = function (e) {
        if (void 0 === e) return tl;
        if (!0 === e && tl) return tl.enable();
        if (!1 === e) return tl && tl.kill(), void (tl = e);
        var t = e instanceof La ? e : lc(e);
        return (
          tl && tl.target === t.target && tl.kill(), kl(t.target) && (tl = t), t
        );
      }),
      (Ju.core = {
        _getVelocityProp: Ca,
        _inputObserver: sc,
        _scrollers: da,
        _proxies: ha,
        bridge: {
          ss: function () {
            wl || Mu("scrollStart"), (wl = yl());
          },
          ref: function () {
            return Wa;
          },
        },
      }),
      Fl() && Pa.registerPlugin(Ju);
    var uc,
      cc,
      dc,
      hc,
      pc,
      fc,
      mc,
      gc,
      vc = function () {
        return "undefined" != typeof window;
      },
      yc = function () {
        return uc || (vc() && (uc = window.gsap) && uc.registerPlugin && uc);
      },
      Dc = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      wc = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      _c = function (e) {
        return Math.round(1e4 * e) / 1e4;
      },
      xc = function (e) {
        return parseFloat(e) || 0;
      },
      bc = function (e, t) {
        var i = xc(e);
        return ~e.indexOf("%") ? (i / 100) * t : i;
      },
      Ec = function (e, t) {
        return xc(e.getAttribute(t));
      },
      Sc = Math.sqrt,
      Tc = function (e, t, i, n, r, s) {
        return Sc(
          Math.pow((xc(i) - xc(e)) * r, 2) + Math.pow((xc(n) - xc(t)) * s, 2),
        );
      },
      Cc = function (e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect");
      },
      Mc = function (e) {
        if (!(e = cc(e)[0])) return 0;
        var t,
          i,
          n,
          r,
          s,
          o,
          a,
          l = e.tagName.toLowerCase(),
          u = e.style,
          c = 1,
          d = 1;
        Cc(e) &&
          ((d = e.getScreenCTM()),
          (c = Sc(d.a * d.a + d.b * d.b)),
          (d = Sc(d.d * d.d + d.c * d.c)));
        try {
          i = e.getBBox();
        } catch (e) {}
        var h = i || { x: 0, y: 0, width: 0, height: 0 },
          p = h.x,
          f = h.y,
          m = h.width,
          g = h.height;
        if (
          ((i && (m || g)) ||
            !wc[l] ||
            ((m = Ec(e, wc[l][0])),
            (g = Ec(e, wc[l][1])),
            "rect" !== l && "line" !== l && ((m *= 2), (g *= 2)),
            "line" === l &&
              ((p = Ec(e, "x1")),
              (f = Ec(e, "y1")),
              (m = Math.abs(m - p)),
              (g = Math.abs(g - f)))),
          "path" === l)
        )
          (r = u.strokeDasharray),
            (u.strokeDasharray = "none"),
            (t = e.getTotalLength() || 0),
            _c(c) !== _c(d) && !fc && (fc = 1),
            (t *= (c + d) / 2),
            (u.strokeDasharray = r);
        else if ("rect" === l) t = 2 * m * c + 2 * g * d;
        else if ("line" === l) t = Tc(p, f, p + m, f + g, c, d);
        else if ("polyline" === l || "polygon" === l)
          for (
            n = e.getAttribute("points").match(Dc) || [],
              "polygon" === l && n.push(n[0], n[1]),
              t = 0,
              s = 2;
            s < n.length;
            s += 2
          )
            t += Tc(n[s - 2], n[s - 1], n[s], n[s + 1], c, d) || 0;
        else
          ("circle" !== l && "ellipse" !== l) ||
            ((o = (m / 2) * c),
            (a = (g / 2) * d),
            (t = Math.PI * (3 * (o + a) - Sc((3 * o + a) * (o + 3 * a)))));
        return t || 0;
      },
      Ac = function (e, t) {
        if (!(e = cc(e)[0])) return [0, 0];
        t || (t = Mc(e) + 1);
        var i = dc.getComputedStyle(e),
          n = i.strokeDasharray || "",
          r = xc(i.strokeDashoffset),
          s = n.indexOf(",");
        return (
          s < 0 && (s = n.indexOf(" ")),
          (n = s < 0 ? t : xc(n.substr(0, s))) > t && (n = t),
          [-r || 0, n - r || 0]
        );
      },
      Fc = function () {
        vc() &&
          (document,
          (dc = window),
          (pc = uc = yc()),
          (cc = uc.utils.toArray),
          (mc = uc.core.getStyleSaver),
          (gc = uc.core.reverting || function () {}),
          (hc = -1 !== ((dc.navigator || {}).userAgent || "").indexOf("Edge")));
      },
      kc = {
        version: "3.12.7",
        name: "drawSVG",
        register: function (e) {
          (uc = e), Fc();
        },
        init: function (e, t, i, n, r) {
          if (!e.getBBox) return !1;
          pc || Fc();
          var s,
            o,
            a,
            l = Mc(e);
          return (
            (this.styles =
              mc && mc(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
            (this.tween = i),
            (this._style = e.style),
            (this._target = e),
            t + "" == "true"
              ? (t = "0 100%")
              : t
                ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
                : (t = "0 0"),
            (o = (function (e, t, i) {
              var n,
                r,
                s = e.indexOf(" ");
              return (
                s < 0
                  ? ((n = void 0 !== i ? i + "" : e), (r = e))
                  : ((n = e.substr(0, s)), (r = e.substr(s + 1))),
                (n = bc(n, t)) > (r = bc(r, t)) ? [r, n] : [n, r]
              );
            })(t, l, (s = Ac(e, l))[0])),
            (this._length = _c(l)),
            (this._dash = _c(s[1] - s[0])),
            (this._offset = _c(-s[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              _c(o[1] - o[0]),
              0,
              0,
              0,
              0,
              0,
              1,
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              _c(-o[0]),
              0,
              0,
              0,
              0,
              0,
              1,
            )),
            hc &&
              (a = dc.getComputedStyle(e)).strokeLinecap !== a.strokeLinejoin &&
              ((o = xc(a.strokeMiterlimit)),
              this.add(e.style, "strokeMiterlimit", o, o + 0.01)),
            (this._live = Cc(e) || ~(t + "").indexOf("live")),
            (this._nowrap = ~(t + "").indexOf("nowrap")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (e, t) {
          if (t.tween._time || !gc()) {
            var i,
              n,
              r,
              s,
              o = t._pt,
              a = t._style;
            if (o) {
              for (
                t._live &&
                (i = Mc(t._target)) !== t._length &&
                ((n = i / t._length),
                (t._length = i),
                t._offsetPT && ((t._offsetPT.s *= n), (t._offsetPT.c *= n)),
                t._dashPT
                  ? ((t._dashPT.s *= n), (t._dashPT.c *= n))
                  : (t._dash *= n));
                o;

              )
                o.r(e, o.d), (o = o._next);
              (r = t._dash || (e && 1 !== e && 1e-4) || 0),
                (i = t._length - r + 0.1),
                (s = t._offset),
                r &&
                  s &&
                  r + Math.abs(s % t._length) > t._length - 0.2 &&
                  (s += s < 0 ? 0.1 : -0.1) &&
                  (i += 0.1),
                (a.strokeDashoffset = r ? s : s + 0.001),
                (a.strokeDasharray =
                  i < 0.2
                    ? "none"
                    : r
                      ? r + "px," + (t._nowrap ? 999999 : i) + "px"
                      : "0px, 999999px");
            }
          } else t.styles.revert();
        },
        getLength: Mc,
        getPosition: Ac,
      };
    yc() && uc.registerPlugin(kc);
    var Lc = /(?:^\s+|\s+$)/g,
      Pc =
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function Oc(e) {
      var t = e.nodeType,
        i = "";
      if (1 === t || 9 === t || 11 === t) {
        if ("string" == typeof e.textContent) return e.textContent;
        for (e = e.firstChild; e; e = e.nextSibling) i += Oc(e);
      } else if (3 === t || 4 === t) return e.nodeValue;
      return i;
    }
    function Ic(e, t, i, n, r) {
      if (
        ((e += ""),
        i && (e = e.trim ? e.trim() : e.replace(Lc, "")),
        t && "" !== t)
      )
        return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(t);
      for (var s, o, a = [], l = e.length, u = 0; u < l; u++)
        (((o = e.charAt(u)).charCodeAt(0) >= 55296 &&
          o.charCodeAt(0) <= 56319) ||
          (e.charCodeAt(u + 1) >= 65024 && e.charCodeAt(u + 1) <= 65039)) &&
          ((s = ((e.substr(u, 12).split(Pc) || [])[1] || "").length || 2),
          (o = e.substr(u, s)),
          (a.emoji = 1),
          (u += s - 1)),
          a.push(
            r
              ? o
              : ">" === o
                ? "&gt;"
                : "<" === o
                  ? "&lt;"
                  : !n ||
                      " " !== o ||
                      (" " !== e.charAt(u - 1) && " " !== e.charAt(u + 1))
                    ? o
                    : "&nbsp;",
          );
      return a;
    }
    var Bc,
      Nc,
      Rc,
      zc,
      qc,
      Vc,
      Yc = /(?:\r|\n|\t\t)/g,
      Hc = /(?:\s\s+)/g,
      Xc = String.fromCharCode(160),
      Wc = function (e) {
        (Bc = document),
          (Nc = window),
          (zc = zc || e || Nc.gsap || void 0) &&
            ((Vc = zc.utils.toArray),
            (qc = zc.core.context || function () {}),
            (Rc = 1));
      },
      $c = function (e) {
        return Nc.getComputedStyle(e);
      },
      Gc = function (e) {
        return "absolute" === e.position || !0 === e.absolute;
      },
      jc = function (e, t) {
        for (var i, n = t.length; --n > -1; )
          if (((i = t[n]), e.substr(0, i.length) === i)) return i.length;
      },
      Uc = function (e, t) {
        void 0 === e && (e = "");
        var i = ~e.indexOf("++"),
          n = 1;
        return (
          i && (e = e.split("++").join("")),
          function () {
            return (
              "<" +
              t +
              " style='position:relative;display:inline-block;'" +
              (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
            );
          }
        );
      },
      Qc = function e(t, i, n) {
        var r = t.nodeType;
        if (1 === r || 9 === r || 11 === r)
          for (t = t.firstChild; t; t = t.nextSibling) e(t, i, n);
        else
          (3 !== r && 4 !== r) || (t.nodeValue = t.nodeValue.split(i).join(n));
      },
      Kc = function (e, t) {
        for (var i = t.length; --i > -1; ) e.push(t[i]);
      },
      Zc = function (e, t, i) {
        for (var n; e && e !== t; ) {
          if ((n = e._next || e.nextSibling))
            return n.textContent.charAt(0) === i;
          e = e.parentNode || e._parent;
        }
      },
      Jc = function e(t) {
        var i,
          n,
          r = Vc(t.childNodes),
          s = r.length;
        for (i = 0; i < s; i++)
          (n = r[i])._isSplit
            ? e(n)
            : i && n.previousSibling && 3 === n.previousSibling.nodeType
              ? ((n.previousSibling.nodeValue +=
                  3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue),
                t.removeChild(n))
              : 3 !== n.nodeType &&
                (t.insertBefore(n.firstChild, n), t.removeChild(n));
      },
      ed = function (e, t) {
        return parseFloat(t[e]) || 0;
      },
      td = function (e, t, i, n, r, s, o) {
        var a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          D = $c(e),
          w = ed("paddingLeft", D),
          _ = -999,
          x = ed("borderBottomWidth", D) + ed("borderTopWidth", D),
          b = ed("borderLeftWidth", D) + ed("borderRightWidth", D),
          E = ed("paddingTop", D) + ed("paddingBottom", D),
          S = ed("paddingLeft", D) + ed("paddingRight", D),
          T = ed("fontSize", D) * (t.lineThreshold || 0.2),
          C = D.textAlign,
          M = [],
          A = [],
          F = [],
          k = t.wordDelimiter || " ",
          L = t.tag ? t.tag : t.span ? "span" : "div",
          P = t.type || t.split || "chars,words,lines",
          O = r && ~P.indexOf("lines") ? [] : null,
          I = ~P.indexOf("words"),
          B = ~P.indexOf("chars"),
          N = Gc(t),
          R = t.linesClass,
          z = ~(R || "").indexOf("++"),
          q = [],
          V = "flex" === D.display,
          Y = e.style.display;
        for (
          z && (R = R.split("++").join("")),
            V && (e.style.display = "block"),
            u = (l = e.getElementsByTagName("*")).length,
            d = [],
            a = 0;
          a < u;
          a++
        )
          d[a] = l[a];
        if (O || N)
          for (a = 0; a < u; a++)
            ((h = (c = d[a]).parentNode === e) || N || (B && !I)) &&
              ((y = c.offsetTop),
              O &&
                h &&
                Math.abs(y - _) > T &&
                ("BR" !== c.nodeName || 0 === a) &&
                ((p = []), O.push(p), (_ = y)),
              N &&
                ((c._x = c.offsetLeft),
                (c._y = y),
                (c._w = c.offsetWidth),
                (c._h = c.offsetHeight)),
              O &&
                (((c._isSplit && h) ||
                  (!B && h) ||
                  (I && h) ||
                  (!I &&
                    c.parentNode.parentNode === e &&
                    !c.parentNode._isSplit)) &&
                  (p.push(c), (c._x -= w), Zc(c, e, k) && (c._wordEnd = !0)),
                "BR" === c.nodeName &&
                  ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                    0 === a) &&
                  O.push([])));
        for (a = 0; a < u; a++)
          if (((h = (c = d[a]).parentNode === e), "BR" !== c.nodeName))
            if (
              (N &&
                ((m = c.style),
                I ||
                  h ||
                  ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                (m.left = c._x + "px"),
                (m.top = c._y + "px"),
                (m.position = "absolute"),
                (m.display = "block"),
                (m.width = c._w + 1 + "px"),
                (m.height = c._h + "px")),
              !I && B)
            )
              if (c._isSplit)
                for (
                  c._next = l = c.nextSibling, c.parentNode.appendChild(c);
                  l && 3 === l.nodeType && " " === l.textContent;

                )
                  (c._next = l.nextSibling),
                    c.parentNode.appendChild(l),
                    (l = l.nextSibling);
              else
                c.parentNode._isSplit
                  ? ((c._parent = c.parentNode),
                    !c.previousSibling &&
                      c.firstChild &&
                      (c.firstChild._isFirst = !0),
                    c.nextSibling &&
                      " " === c.nextSibling.textContent &&
                      !c.nextSibling.nextSibling &&
                      q.push(c.nextSibling),
                    (c._next =
                      c.nextSibling && c.nextSibling._isFirst
                        ? null
                        : c.nextSibling),
                    c.parentNode.removeChild(c),
                    d.splice(a--, 1),
                    u--)
                  : h ||
                    ((y = !c.nextSibling && Zc(c.parentNode, e, k)),
                    c.parentNode._parent && c.parentNode._parent.appendChild(c),
                    y && c.parentNode.appendChild(Bc.createTextNode(" ")),
                    "span" === L && (c.style.display = "inline"),
                    M.push(c));
            else
              c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML
                ? A.push(c)
                : B &&
                  !c._isSplit &&
                  ("span" === L && (c.style.display = "inline"), M.push(c));
          else
            O || N
              ? (c.parentNode && c.parentNode.removeChild(c),
                d.splice(a--, 1),
                u--)
              : I || e.appendChild(c);
        for (a = q.length; --a > -1; ) q[a].parentNode.removeChild(q[a]);
        if (O) {
          for (
            N &&
              ((g = Bc.createElement(L)),
              e.appendChild(g),
              (v = g.offsetWidth + "px"),
              (y = g.offsetParent === e ? 0 : e.offsetLeft),
              e.removeChild(g)),
              m = e.style.cssText,
              e.style.cssText = "display:none;";
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (f = " " === k && (!N || (!I && !B)), a = 0; a < O.length; a++) {
            for (
              p = O[a],
                (g = Bc.createElement(L)).style.cssText =
                  "display:block;text-align:" +
                  C +
                  ";position:" +
                  (N ? "absolute;" : "relative;"),
                R && (g.className = R + (z ? a + 1 : "")),
                F.push(g),
                u = p.length,
                l = 0;
              l < u;
              l++
            )
              "BR" !== p[l].nodeName &&
                ((c = p[l]),
                g.appendChild(c),
                f && c._wordEnd && g.appendChild(Bc.createTextNode(" ")),
                N &&
                  (0 === l &&
                    ((g.style.top = c._y + "px"),
                    (g.style.left = w + y + "px")),
                  (c.style.top = "0px"),
                  y && (c.style.left = c._x - y + "px")));
            0 === u
              ? (g.innerHTML = "&nbsp;")
              : I || B || (Jc(g), Qc(g, String.fromCharCode(160), " ")),
              N && ((g.style.width = v), (g.style.height = c._h + "px")),
              e.appendChild(g);
          }
          e.style.cssText = m;
        }
        N &&
          (o > e.clientHeight &&
            ((e.style.height = o - E + "px"),
            e.clientHeight < o && (e.style.height = o + x + "px")),
          s > e.clientWidth &&
            ((e.style.width = s - S + "px"),
            e.clientWidth < s && (e.style.width = s + b + "px"))),
          V && (Y ? (e.style.display = Y) : e.style.removeProperty("display")),
          Kc(i, M),
          I && Kc(n, A),
          Kc(r, F);
      },
      id = function e(t, i, n, r) {
        var s,
          o,
          a = Vc(t.childNodes),
          l = a.length,
          u = Gc(i);
        if (3 !== t.nodeType || l > 1) {
          for (i.absolute = !1, s = 0; s < l; s++)
            ((o = a[s])._next = o._isFirst = o._parent = o._wordEnd = null),
              (3 !== o.nodeType || /\S+/.test(o.nodeValue)) &&
                (u &&
                  3 !== o.nodeType &&
                  "inline" === $c(o).display &&
                  ((o.style.display = "inline-block"),
                  (o.style.position = "relative")),
                (o._isSplit = !0),
                e(o, i, n, r));
          return (i.absolute = u), void (t._isSplit = !0);
        }
        !(function (e, t, i, n) {
          var r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h = t.tag ? t.tag : t.span ? "span" : "div",
            p = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            f = Gc(t),
            m = t.wordDelimiter || " ",
            g = function (e) {
              return e === m || (e === Xc && " " === m);
            },
            v = " " !== m ? "" : f ? "&#173; " : " ",
            y = "</" + h + ">",
            D = 1,
            w = t.specialChars
              ? "function" == typeof t.specialChars
                ? t.specialChars
                : jc
              : null,
            _ = Bc.createElement("div"),
            x = e.parentNode;
          for (
            x.insertBefore(_, e),
              _.textContent = e.nodeValue,
              x.removeChild(e),
              c = -1 !== (r = Oc((e = _))).indexOf("<"),
              !1 !== t.reduceWhiteSpace &&
                (r = r.replace(Hc, " ").replace(Yc, "")),
              c && (r = r.split("<").join("{{LT}}")),
              l = r.length,
              s = (" " === r.charAt(0) ? v : "") + i(),
              o = 0;
            o < l;
            o++
          )
            if (((u = r.charAt(o)), w && (d = w(r.substr(o), t.specialChars))))
              (u = r.substr(o, d || 1)),
                (s += p && " " !== u ? n() + u + "</" + h + ">" : u),
                (o += d - 1);
            else if (g(u) && !g(r.charAt(o - 1)) && o) {
              for (s += D ? y : "", D = 0; g(r.charAt(o + 1)); ) (s += v), o++;
              o === l - 1
                ? (s += v)
                : ")" !== r.charAt(o + 1) && ((s += v + i()), (D = 1));
            } else
              "{" === u && "{{LT}}" === r.substr(o, 6)
                ? ((s += p ? n() + "{{LT}}</" + h + ">" : "{{LT}}"), (o += 5))
                : (u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319) ||
                    (r.charCodeAt(o + 1) >= 65024 &&
                      r.charCodeAt(o + 1) <= 65039)
                  ? ((a =
                      ((r.substr(o, 12).split(Pc) || [])[1] || "").length || 2),
                    (s +=
                      p && " " !== u
                        ? n() + r.substr(o, a) + "</" + h + ">"
                        : r.substr(o, a)),
                    (o += a - 1))
                  : (s += p && " " !== u ? n() + u + "</" + h + ">" : u);
          (e.outerHTML = s + (D ? y : "")), c && Qc(x, "{{LT}}", "<");
        })(t, i, n, r);
      },
      nd = (function () {
        function e(e, t) {
          Rc || Wc(),
            (this.elements = Vc(e)),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = t || {}),
            qc(this),
            this.split(t);
        }
        var t = e.prototype;
        return (
          (t.split = function (e) {
            this.isSplit && this.revert(),
              (this.vars = e = e || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var t,
                i,
                n,
                r = this.elements.length,
                s = e.tag ? e.tag : e.span ? "span" : "div",
                o = Uc(e.wordsClass, s),
                a = Uc(e.charsClass, s);
              --r > -1;

            )
              (n = this.elements[r]),
                (this._originals[r] = {
                  html: n.innerHTML,
                  style: n.getAttribute("style"),
                }),
                (t = n.clientHeight),
                (i = n.clientWidth),
                id(n, e, o, a),
                td(n, e, this.chars, this.words, this.lines, i, t);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (t.revert = function () {
            var e = this._originals;
            if (!e) throw "revert() call wasn't scoped properly.";
            return (
              this.elements.forEach(function (t, i) {
                (t.innerHTML = e[i].html),
                  t.setAttribute("style", e[i].style || "");
              }),
              (this.chars = []),
              (this.words = []),
              (this.lines = []),
              (this.isSplit = !1),
              this
            );
          }),
          (e.create = function (t, i) {
            return new e(t, i);
          }),
          e
        );
      })();
    (nd.version = "3.12.7"), (nd.register = Wc);
    var rd,
      sd,
      od = (function () {
        function e(e) {
          (this.chars = Ic(e)), (this.sets = []), (this.length = 50);
          for (var t = 0; t < 20; t++) this.sets[t] = ud(80, this.chars);
        }
        return (
          (e.prototype.grow = function (e) {
            for (var t = 0; t < 20; t++)
              this.sets[t] += ud(e - this.length, this.chars);
            this.length = e;
          }),
          e
        );
      })(),
      ad = function () {
        return (
          rd ||
          ("undefined" != typeof window &&
            (rd = window.gsap) &&
            rd.registerPlugin &&
            rd)
        );
      },
      ld = /\s+/g,
      ud = function (e, t) {
        for (var i = t.length, n = ""; --e > -1; )
          n += t[~~(Math.random() * i)];
        return n;
      },
      cd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      dd = cd.toLowerCase(),
      hd = {
        upperCase: new od(cd),
        lowerCase: new od(dd),
        upperAndLowerCase: new od(cd + dd),
      },
      pd = function () {
        sd = rd = ad();
      },
      fd = {
        version: "3.12.7",
        name: "scrambleText",
        register: function (e, t, i) {
          (rd = e), pd();
        },
        init: function (e, t, i, n, r) {
          if (
            (sd || pd(),
            (this.prop =
              "innerHTML" in e
                ? "innerHTML"
                : "textContent" in e
                  ? "textContent"
                  : 0),
            this.prop)
          ) {
            (this.target = e), "object" != typeof t && (t = { text: t });
            var s,
              o,
              a,
              l,
              u = t.text || t.value || "",
              c = !1 !== t.trim,
              d = this;
            return (
              (d.delimiter = s = t.delimiter || ""),
              (d.original = Ic(
                Oc(e).replace(ld, " ").split("&nbsp;").join(""),
                s,
                c,
              )),
              ("{original}" !== u && !0 !== u && null != u) ||
                (u = d.original.join(s)),
              (d.text = Ic((u || "").replace(ld, " "), s, c)),
              (d.hasClass = !(!t.newClass && !t.oldClass)),
              (d.newClass = t.newClass),
              (d.oldClass = t.oldClass),
              (l = "" === s),
              (d.textHasEmoji = l && !!d.text.emoji),
              (d.charsHaveEmoji = !!t.chars && !!Ic(t.chars).emoji),
              (d.length = l ? d.original.length : d.original.join(s).length),
              (d.lengthDif =
                (l ? d.text.length : d.text.join(s).length) - d.length),
              (d.fillChar =
                t.fillChar || (t.chars && ~t.chars.indexOf(" "))
                  ? "&nbsp;"
                  : ""),
              (d.charSet = a = hd[t.chars || "upperCase"] || new od(t.chars)),
              (d.speed = 0.05 / (t.speed || 1)),
              (d.prevScrambleTime = 0),
              (d.setIndex = (20 * Math.random()) | 0),
              (o = d.length + Math.max(d.lengthDif, 0)) > a.length && a.grow(o),
              (d.chars = a.sets[d.setIndex]),
              (d.revealDelay = t.revealDelay || 0),
              (d.tweenLength = !1 !== t.tweenLength),
              (d.tween = i),
              (d.rightToLeft = !!t.rightToLeft),
              d._props.push("scrambleText", "text"),
              1
            );
          }
        },
        render: function (e, t) {
          var i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p = t.target,
            f = t.prop,
            m = t.text,
            g = t.delimiter,
            v = t.tween,
            y = t.prevScrambleTime,
            D = t.revealDelay,
            w = t.setIndex,
            _ = t.chars,
            x = t.charSet,
            b = t.length,
            E = t.textHasEmoji,
            S = t.charsHaveEmoji,
            T = t.lengthDif,
            C = t.tweenLength,
            M = t.oldClass,
            A = t.newClass,
            F = t.rightToLeft,
            k = t.fillChar,
            L = t.speed,
            P = t.original,
            O = t.hasClass,
            I = m.length,
            B = v._time,
            N = B - y;
          D &&
            (v._from && (B = v._dur - B),
            (e =
              0 === B
                ? 0
                : B < D
                  ? 1e-6
                  : B === v._dur
                    ? 1
                    : v._ease((B - D) / (v._dur - D)))),
            e < 0 ? (e = 0) : e > 1 && (e = 1),
            F && (e = 1 - e),
            (i = ~~(e * I + 0.5)),
            e
              ? ((N > L || N < -L) &&
                  ((t.setIndex = w = (w + ((19 * Math.random()) | 0)) % 20),
                  (t.chars = x.sets[w]),
                  (t.prevScrambleTime += N)),
                (s = _))
              : (s = P.join(g)),
            (h = v._from ? e : 1 - e),
            (d = b + (C ? (v._from ? h * h * h : 1 - h * h * h) : 1) * T),
            F
              ? 1 !== e || (!v._from && "isFromStart" !== v.data)
                ? ((l = m.slice(i).join(g)),
                  (r = S
                    ? Ic(s)
                        .slice(0, (d - (E ? Ic(l) : l).length + 0.5) | 0)
                        .join("")
                    : s.substr(0, (d - (E ? Ic(l) : l).length + 0.5) | 0)),
                  (s = l))
                : ((r = ""), (s = P.join(g)))
              : ((r = m.slice(0, i).join(g)),
                (n = (E ? Ic(r) : r).length),
                (s = S
                  ? Ic(s)
                      .slice(n, (d + 0.5) | 0)
                      .join("")
                  : s.substr(n, (d - n + 0.5) | 0))),
            (l = O
              ? ((o = (u = F ? M : A) && 0 !== i)
                  ? "<span class='" + u + "'>"
                  : "") +
                r +
                (o ? "</span>" : "") +
                ((a = (c = F ? A : M) && i !== I)
                  ? "<span class='" + c + "'>"
                  : "") +
                g +
                s +
                (a ? "</span>" : "")
              : r + g + s),
            (p[f] =
              "&nbsp;" === k && ~l.indexOf("  ")
                ? l.split("  ").join("&nbsp;&nbsp;")
                : l);
        },
      };
    (fd.emojiSafeSplit = Ic), (fd.getText = Oc), ad() && rd.registerPlugin(fd);
    var md,
      gd,
      vd,
      yd,
      Dd,
      wd,
      _d,
      xd,
      bd = 1,
      Ed = function (e, t) {
        return e.actions.forEach(function (e) {
          return e.vars[t] && e.vars[t](e);
        });
      },
      Sd = {},
      Td = 180 / Math.PI,
      Cd = Math.PI / 180,
      Md = {},
      Ad = {},
      Fd = {},
      kd = function (e) {
        return "string" == typeof e ? e.split(" ").join("").split(",") : e;
      },
      Ld = kd("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
      Pd = kd(
        "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight",
      ),
      Od = function (e) {
        return md(e)[0] || void 0;
      },
      Id = function (e) {
        return Math.round(1e4 * e) / 1e4 || 0;
      },
      Bd = function (e, t, i) {
        return e.forEach(function (e) {
          return e.classList[i](t);
        });
      },
      Nd = {
        zIndex: 1,
        kill: 1,
        simple: 1,
        spin: 1,
        clearProps: 1,
        targets: 1,
        toggleClass: 1,
        onComplete: 1,
        onUpdate: 1,
        onInterrupt: 1,
        onStart: 1,
        delay: 1,
        repeat: 1,
        repeatDelay: 1,
        yoyo: 1,
        scale: 1,
        fade: 1,
        absolute: 1,
        props: 1,
        onEnter: 1,
        onLeave: 1,
        custom: 1,
        paused: 1,
        nested: 1,
        prune: 1,
        absoluteOnLeave: 1,
      },
      Rd = {
        zIndex: 1,
        simple: 1,
        clearProps: 1,
        scale: 1,
        absolute: 1,
        fitChild: 1,
        getVars: 1,
        props: 1,
      },
      zd = function (e) {
        return e.replace(/([A-Z])/g, "-$1").toLowerCase();
      },
      qd = function (e, t) {
        var i,
          n = {};
        for (i in e) t[i] || (n[i] = e[i]);
        return n;
      },
      Vd = {},
      Yd = function (e) {
        var t = (Vd[e] = kd(e));
        return (Fd[e] = t.concat(Pd)), t;
      },
      Hd = function e(t, i, n) {
        void 0 === n && (n = 0);
        for (
          var r = t.parentNode,
            s = 1e3 * Math.pow(10, n) * (i ? -1 : 1),
            o = i ? 900 * -s : 0;
          t;

        )
          (o += s), (t = t.previousSibling);
        return r ? o + e(r, i, n + 1) : o;
      },
      Xd = function (e, t, i) {
        return (
          e.forEach(function (e) {
            return (e.d = Hd(i ? e.element : e.t, t));
          }),
          e.sort(function (e, t) {
            return e.d - t.d;
          }),
          e
        );
      },
      Wd = function (e, t) {
        for (
          var i,
            n,
            r = e.element.style,
            s = (e.css = e.css || []),
            o = t.length;
          o--;

        )
          (n = r[(i = t[o])] || r.getPropertyValue(i)),
            s.push(n ? i : Ad[i] || (Ad[i] = zd(i)), n);
        return r;
      },
      $d = function (e) {
        var t = e.css,
          i = e.element.style,
          n = 0;
        for (e.cache.uncache = 1; n < t.length; n += 2)
          t[n + 1] ? (i[t[n]] = t[n + 1]) : i.removeProperty(t[n]);
        !t[t.indexOf("transform") + 1] &&
          i.translate &&
          (i.removeProperty("translate"),
          i.removeProperty("scale"),
          i.removeProperty("rotate"));
      },
      Gd = function (e, t) {
        e.forEach(function (e) {
          return (e.a.cache.uncache = 1);
        }),
          t || e.finalStates.forEach($d);
      },
      jd =
        "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
          ",",
        ),
      Ud = function (e, t, i) {
        var n,
          r,
          s,
          o = e.element,
          a = e.width,
          l = e.height,
          u = e.uncache,
          c = e.getProp,
          d = o.style,
          h = 4;
        if (("object" != typeof t && (t = e), vd && 1 !== i))
          return (
            vd._abs.push({ t: o, b: e, a: e, sd: 0 }),
            vd._final.push(function () {
              return (e.cache.uncache = 1) && $d(e);
            }),
            o
          );
        for (
          r = "none" === c("display"),
            (e.isVisible && !r) ||
              (r && (Wd(e, ["display"]).display = t.display),
              (e.matrix = t.matrix),
              (e.width = a = e.width || t.width),
              (e.height = l = e.height || t.height)),
            Wd(e, jd),
            s = window.getComputedStyle(o);
          h--;

        )
          d[jd[h]] = s[jd[h]];
        if (
          ((d.gridArea = "1 / 1 / 1 / 1"),
          (d.transition = "none"),
          (d.position = "absolute"),
          (d.width = a + "px"),
          (d.height = l + "px"),
          d.top || (d.top = "0px"),
          d.left || (d.left = "0px"),
          u)
        )
          n = new fh(o);
        else if ((((n = qd(e, Md)).position = "absolute"), e.simple)) {
          var p = o.getBoundingClientRect();
          n.matrix = new _r(1, 0, 0, 1, p.left + fr(), p.top + pr());
        } else n.matrix = xr(o, !1, !1, !0);
        return (
          (n = nh(n, e, !0)), (e.x = wd(n.x, 0.01)), (e.y = wd(n.y, 0.01)), o
        );
      },
      Qd = function (e, t) {
        return (
          !0 !== t &&
            ((t = md(t)),
            (e = e.filter(function (e) {
              if (-1 !== t.indexOf((e.sd < 0 ? e.b : e.a).element)) return !0;
              e.t._gsap.renderTransform(1),
                e.b.isVisible &&
                  ((e.t.style.width = e.b.width + "px"),
                  (e.t.style.height = e.b.height + "px"));
            }))),
          e
        );
      },
      Kd = function (e) {
        return Xd(e, !0).forEach(function (e) {
          return (
            (e.a.isVisible || e.b.isVisible) && Ud(e.sd < 0 ? e.b : e.a, e.b, 1)
          );
        });
      },
      Zd = function (e, t) {
        return (t && e.idLookup[Jd(t).id]) || e.elementStates[0];
      },
      Jd = function (e, t, i, n) {
        return e instanceof fh
          ? e
          : e instanceof ph
            ? Zd(e, n)
            : new fh("string" == typeof e ? Od(e) || void 0 : e, t, i);
      },
      eh = function (e, t) {
        var i,
          n = e.style || e;
        for (i in t) n[i] = t[i];
      },
      th = function (e) {
        return e.map(function (e) {
          return e.element;
        });
      },
      ih = function (e, t, i) {
        return e && t.length && i.add(e(th(t), i, new ph(t, 0, !0)), 0);
      },
      nh = function (e, t, i, n, r, s) {
        var o,
          a,
          l,
          u,
          c,
          d,
          h,
          p = e.element,
          f = e.cache,
          m = e.parent,
          g = e.x,
          v = e.y,
          y = t.width,
          D = t.height,
          w = t.scaleX,
          _ = t.scaleY,
          x = t.rotation,
          b = t.bounds,
          E = s && _d && _d(p, "transform,width,height"),
          S = e,
          T = t.matrix,
          C = T.e,
          M = T.f,
          A =
            e.bounds.width !== b.width ||
            e.bounds.height !== b.height ||
            e.scaleX !== w ||
            e.scaleY !== _ ||
            e.rotation !== x,
          F = !A && e.simple && t.simple && !r;
        return (
          F || !m
            ? ((w = _ = 1), (x = o = 0))
            : ((c = (function (e) {
                var t = e._gsap || gd.core.getCache(e);
                return t.gmCache === gd.ticker.frame
                  ? t.gMatrix
                  : ((t.gmCache = gd.ticker.frame),
                    (t.gMatrix = xr(e, !0, !1, !0)));
              })(m)),
              (d = c
                .clone()
                .multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix)),
              (x = Id(Math.atan2(d.b, d.a) * Td)),
              (o = Id(Math.atan2(d.c, d.d) * Td + x) % 360),
              (w = Math.sqrt(Math.pow(d.a, 2) + Math.pow(d.b, 2))),
              (_ =
                Math.sqrt(Math.pow(d.c, 2) + Math.pow(d.d, 2)) *
                Math.cos(o * Cd)),
              r &&
                ((r = md(r)[0]),
                (u = gd.getProperty(r)),
                (h =
                  r.getBBox && "function" == typeof r.getBBox && r.getBBox()),
                (S = {
                  scaleX: u("scaleX"),
                  scaleY: u("scaleY"),
                  width: h ? h.width : Math.ceil(parseFloat(u("width", "px"))),
                  height: h ? h.height : parseFloat(u("height", "px")),
                })),
              (f.rotation = x + "deg"),
              (f.skewX = o + "deg")),
          i
            ? ((w *= y !== S.width && S.width ? y / S.width : 1),
              (_ *= D !== S.height && S.height ? D / S.height : 1),
              (f.scaleX = w),
              (f.scaleY = _))
            : ((y = wd((y * w) / S.scaleX, 0)),
              (D = wd((D * _) / S.scaleY, 0)),
              (p.style.width = y + "px"),
              (p.style.height = D + "px")),
          n && eh(p, t.props),
          F || !m
            ? ((g += C - e.matrix.e), (v += M - e.matrix.f))
            : A || m !== t.parent
              ? (f.renderTransform(1, f),
                (d = xr(r || p, !1, !1, !0)),
                (a = c.apply({ x: d.e, y: d.f })),
                (g += (l = c.apply({ x: C, y: M })).x - a.x),
                (v += l.y - a.y))
              : ((c.e = c.f = 0),
                (g += (l = c.apply({ x: C - e.matrix.e, y: M - e.matrix.f }))
                  .x),
                (v += l.y)),
          (g = wd(g, 0.02)),
          (v = wd(v, 0.02)),
          !s || s instanceof fh
            ? ((f.x = g + "px"), (f.y = v + "px"), f.renderTransform(1, f))
            : E && E.revert(),
          s &&
            ((s.x = g),
            (s.y = v),
            (s.rotation = x),
            (s.skewX = o),
            i
              ? ((s.scaleX = w), (s.scaleY = _))
              : ((s.width = y), (s.height = D))),
          s || f
        );
      },
      rh = function (e, t) {
        return e instanceof ph ? e : new ph(e, t);
      },
      sh = function (e, t, i) {
        var n = e.idLookup[i],
          r = e.alt[i];
        return !r.isVisible ||
          ((t.getElementState(r.element) || r).isVisible && n.isVisible)
          ? n
          : r;
      },
      oh = [],
      ah = "width,height,overflowX,overflowY".split(","),
      lh = function (e) {
        if (e !== xd) {
          var t = Dd.style,
            i = Dd.clientWidth === window.outerWidth,
            n = Dd.clientHeight === window.outerHeight,
            r = 4;
          if (e && (i || n)) {
            for (; r--; ) oh[r] = t[ah[r]];
            i && ((t.width = Dd.clientWidth + "px"), (t.overflowY = "hidden")),
              n &&
                ((t.height = Dd.clientHeight + "px"), (t.overflowX = "hidden")),
              (xd = e);
          } else if (xd) {
            for (; r--; )
              oh[r] ? (t[ah[r]] = oh[r]) : t.removeProperty(zd(ah[r]));
            xd = e;
          }
        }
      },
      uh = function (e, t, i, n) {
        var r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          D = (i = i || {}),
          w = D.clearProps,
          _ = D.onEnter,
          x = D.onLeave,
          b = D.absolute,
          E = D.absoluteOnLeave,
          S = D.custom,
          T = D.delay,
          C = D.paused,
          M = D.repeat,
          A = D.repeatDelay,
          F = D.yoyo,
          k = D.toggleClass,
          L = D.nested,
          P = D.zIndex,
          O = D.scale,
          I = D.fade,
          B = D.stagger,
          N = D.spin,
          R = D.prune,
          z = ("props" in i ? i : e).props,
          q = qd(i, Nd),
          V = gd.timeline({
            delay: T,
            paused: C,
            repeat: M,
            repeatDelay: A,
            yoyo: F,
            data: "isFlip",
          }),
          Y = q,
          H = [],
          X = [],
          W = [],
          $ = [],
          G = !0 === N ? 1 : N || 0,
          j =
            "function" == typeof N
              ? N
              : function () {
                  return G;
                },
          U = e.interrupted || t.interrupted,
          Q = V[1 !== n ? "to" : "from"];
        for (s in t.idLookup)
          (f = t.alt[s] ? sh(t, e, s) : t.idLookup[s]),
            (l = f.element),
            (p = e.idLookup[s]),
            e.alt[s] &&
              l === p.element &&
              (e.alt[s].isVisible || !f.isVisible) &&
              (p = e.alt[s]),
            p
              ? ((u = {
                  t: l,
                  b: p,
                  a: f,
                  sd: p.element === l ? 0 : f.isVisible ? 1 : -1,
                }),
                W.push(u),
                u.sd &&
                  (u.sd < 0 && ((u.b = f), (u.a = p)),
                  U && Wd(u.b, z ? Fd[z] : Pd),
                  I &&
                    W.push(
                      (u.swap = {
                        t: p.element,
                        b: u.b,
                        a: u.a,
                        sd: -u.sd,
                        swap: u,
                      }),
                    )),
                (l._flip = p.element._flip = vd ? vd.timeline : V))
              : f.isVisible &&
                (W.push({
                  t: l,
                  b: qd(f, { isVisible: 1 }),
                  a: f,
                  sd: 0,
                  entering: 1,
                }),
                (l._flip = vd ? vd.timeline : V));
        (z &&
          (Vd[z] || Yd(z)).forEach(function (e) {
            return (q[e] = function (t) {
              return W[t].a.props[e];
            });
          }),
        (W.finalStates = h = []),
        (m = function () {
          for (Xd(W), lh(!0), a = 0; a < W.length; a++)
            (u = W[a]),
              (g = u.a),
              (v = u.b),
              !R || g.isDifferent(v) || u.entering
                ? ((l = u.t),
                  L && !(u.sd < 0) && a && (g.matrix = xr(l, !1, !1, !0)),
                  v.isVisible && g.isVisible
                    ? (u.sd < 0
                        ? ((c = new fh(l, z, e.simple)),
                          nh(c, g, O, 0, 0, c),
                          (c.matrix = xr(l, !1, !1, !0)),
                          (c.css = u.b.css),
                          (u.a = g = c),
                          I && (l.style.opacity = U ? v.opacity : g.opacity),
                          B && $.push(l))
                        : u.sd > 0 &&
                          I &&
                          (l.style.opacity = U ? g.opacity - v.opacity : "0"),
                      nh(g, v, O, z))
                    : v.isVisible !== g.isVisible &&
                      (v.isVisible
                        ? g.isVisible ||
                          ((v.css = g.css),
                          X.push(v),
                          W.splice(a--, 1),
                          b && L && nh(g, v, O, z))
                        : (g.isVisible && H.push(g), W.splice(a--, 1))),
                  O ||
                    ((l.style.maxWidth = Math.max(g.width, v.width) + "px"),
                    (l.style.maxHeight = Math.max(g.height, v.height) + "px"),
                    (l.style.minWidth = Math.min(g.width, v.width) + "px"),
                    (l.style.minHeight = Math.min(g.height, v.height) + "px")),
                  L && k && l.classList.add(k))
                : W.splice(a--, 1),
              h.push(g);
          var t;
          if (
            (k &&
              ((t = h.map(function (e) {
                return e.element;
              })),
              L &&
                t.forEach(function (e) {
                  return e.classList.remove(k);
                })),
            lh(!1),
            O
              ? ((q.scaleX = function (e) {
                  return W[e].a.scaleX;
                }),
                (q.scaleY = function (e) {
                  return W[e].a.scaleY;
                }))
              : ((q.width = function (e) {
                  return W[e].a.width + "px";
                }),
                (q.height = function (e) {
                  return W[e].a.height + "px";
                }),
                (q.autoRound = i.autoRound || !1)),
            (q.x = function (e) {
              return W[e].a.x + "px";
            }),
            (q.y = function (e) {
              return W[e].a.y + "px";
            }),
            (q.rotation = function (e) {
              return W[e].a.rotation + (N ? 360 * j(e, d[e], d) : 0);
            }),
            (q.skewX = function (e) {
              return W[e].a.skewX;
            }),
            (d = W.map(function (e) {
              return e.t;
            })),
            (P || 0 === P) &&
              ((q.modifiers = {
                zIndex: function () {
                  return P;
                },
              }),
              (q.zIndex = P),
              (q.immediateRender = !1 !== i.immediateRender)),
            I &&
              (q.opacity = function (e) {
                return W[e].sd < 0 ? 0 : W[e].sd > 0 ? W[e].a.opacity : "+=0";
              }),
            $.length)
          ) {
            B = gd.utils.distribute(B);
            var n = d.slice($.length);
            q.stagger = function (e, t) {
              return B(~$.indexOf(t) ? d.indexOf(W[e].swap.t) : e, t, n);
            };
          }
          if (
            (Ld.forEach(function (e) {
              return i[e] && V.eventCallback(e, i[e], i[e + "Params"]);
            }),
            S && d.length)
          )
            for (s in ((Y = qd(q, Nd)),
            "scale" in S && ((S.scaleX = S.scaleY = S.scale), delete S.scale),
            S))
              ((r = qd(S[s], Rd))[s] = q[s]),
                !("duration" in r) &&
                  "duration" in q &&
                  (r.duration = q.duration),
                (r.stagger = q.stagger),
                Q.call(V, d, r, 0),
                delete Y[s];
          (d.length || X.length || H.length) &&
            (k &&
              V.add(function () {
                return Bd(t, k, V._zTime < 0 ? "remove" : "add");
              }, 0) &&
              !C &&
              Bd(t, k, "add"),
            d.length && Q.call(V, d, Y, 0)),
            ih(_, H, V),
            ih(x, X, V);
          var p = vd && vd.timeline;
          p &&
            (p.add(V, 0),
            vd._final.push(function () {
              return Gd(W, !w);
            })),
            (o = V.duration()),
            V.call(function () {
              var e = V.time() >= o;
              e && !p && Gd(W, !w), k && Bd(t, k, e ? "remove" : "add");
            });
        }),
        E &&
          (b = W.filter(function (e) {
            return !e.sd && !e.a.isVisible && e.b.isVisible;
          }).map(function (e) {
            return e.a.element;
          })),
        vd)
          ? (b && (y = vd._abs).push.apply(y, Qd(W, b)), vd._run.push(m))
          : (b && Kd(Qd(W, b)), m());
        var K = vd ? vd.timeline : V;
        return (
          (K.revert = function () {
            return dh(K, 1, 1);
          }),
          K
        );
      },
      ch = function e(t) {
        t.vars.onInterrupt &&
          t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []),
          t.getChildren(!0, !1, !0).forEach(e);
      },
      dh = function (e, t, i) {
        if (e && e.progress() < 1 && (!e.paused() || i))
          return t && (ch(e), t < 2 && e.progress(1), e.kill()), !0;
      },
      hh = function (e) {
        for (
          var t,
            i = (e.idLookup = {}),
            n = (e.alt = {}),
            r = e.elementStates,
            s = r.length;
          s--;

        )
          i[(t = r[s]).id] ? (n[t.id] = t) : (i[t.id] = t);
      },
      ph = (function () {
        function e(e, t, i) {
          if (
            ((this.props = t && t.props), (this.simple = !(!t || !t.simple)), i)
          )
            (this.targets = th(e)), (this.elementStates = e), hh(this);
          else {
            this.targets = md(e);
            var n = t && (!1 === t.kill || (t.batch && !t.kill));
            vd && !n && vd._kill.push(this), this.update(n || !!vd);
          }
        }
        var t = e.prototype;
        return (
          (t.update = function (e) {
            var t = this;
            return (
              (this.elementStates = this.targets.map(function (e) {
                return new fh(e, t.props, t.simple);
              })),
              hh(this),
              this.interrupt(e),
              this.recordInlineStyles(),
              this
            );
          }),
          (t.clear = function () {
            return (
              (this.targets.length = this.elementStates.length = 0),
              hh(this),
              this
            );
          }),
          (t.fit = function (e, t, i) {
            for (
              var n,
                r,
                s = Xd(this.elementStates.slice(0), !1, !0),
                o = (e || this).idLookup,
                a = 0;
              a < s.length;
              a++
            )
              (n = s[a]),
                i && (n.matrix = xr(n.element, !1, !1, !0)),
                (r = o[n.id]) && nh(n, r, t, !0, 0, n),
                (n.matrix = xr(n.element, !1, !1, !0));
            return this;
          }),
          (t.getProperty = function (e, t) {
            var i = this.getElementState(e) || Md;
            return (t in i ? i : i.props || Md)[t];
          }),
          (t.add = function (e) {
            for (
              var t,
                i,
                n,
                r = e.targets.length,
                s = this.idLookup,
                o = this.alt;
              r--;

            )
              (n = s[(i = e.elementStates[r]).id]) &&
              (i.element === n.element ||
                (o[i.id] && o[i.id].element === i.element))
                ? ((t = this.elementStates.indexOf(
                    i.element === n.element ? n : o[i.id],
                  )),
                  this.targets.splice(t, 1, e.targets[r]),
                  this.elementStates.splice(t, 1, i))
                : (this.targets.push(e.targets[r]), this.elementStates.push(i));
            return (
              e.interrupted && (this.interrupted = !0),
              e.simple || (this.simple = !1),
              hh(this),
              this
            );
          }),
          (t.compare = function (e) {
            var t,
              i,
              n,
              r,
              s,
              o,
              a,
              l,
              u = e.idLookup,
              c = this.idLookup,
              d = [],
              h = [],
              p = [],
              f = [],
              m = [],
              g = e.alt,
              v = this.alt,
              y = function (e, t, i) {
                return (
                  (e.isVisible !== t.isVisible
                    ? e.isVisible
                      ? p
                      : f
                    : e.isVisible
                      ? h
                      : d
                  ).push(i) && m.push(i)
                );
              },
              D = function (e, t, i) {
                return m.indexOf(i) < 0 && y(e, t, i);
              };
            for (n in u)
              (s = g[n]),
                (o = v[n]),
                (r = (t = s ? sh(e, this, n) : u[n]).element),
                (i = c[n]),
                o
                  ? ((l =
                      i.isVisible || (!o.isVisible && r === i.element) ? i : o),
                    (a =
                      !s ||
                      t.isVisible ||
                      s.isVisible ||
                      l.element !== s.element
                        ? t
                        : s).isVisible &&
                    l.isVisible &&
                    a.element !== l.element
                      ? ((a.isDifferent(l) ? h : d).push(a.element, l.element),
                        m.push(a.element, l.element))
                      : y(a, l, a.element),
                    s && a.element === s.element && (s = u[n]),
                    D(a.element !== i.element && s ? s : a, i, i.element),
                    D(s && s.element === o.element ? s : a, o, o.element),
                    s && D(s, o.element === s.element ? o : i, s.element))
                  : (i
                      ? i.isDifferent(t)
                        ? y(t, i, r)
                        : d.push(r)
                      : p.push(r),
                    s && D(s, i, s.element));
            for (n in c)
              u[n] || (f.push(c[n].element), v[n] && f.push(v[n].element));
            return { changed: h, unchanged: d, enter: p, leave: f };
          }),
          (t.recordInlineStyles = function () {
            for (
              var e = Fd[this.props] || Pd, t = this.elementStates.length;
              t--;

            )
              Wd(this.elementStates[t], e);
          }),
          (t.interrupt = function (e) {
            var t = this,
              i = [];
            this.targets.forEach(function (n) {
              var r = n._flip,
                s = dh(r, e ? 0 : 1);
              e &&
                s &&
                i.indexOf(r) < 0 &&
                r.add(function () {
                  return t.updateVisibility();
                }),
                s && i.push(r);
            }),
              !e && i.length && this.updateVisibility(),
              this.interrupted || (this.interrupted = !!i.length);
          }),
          (t.updateVisibility = function () {
            this.elementStates.forEach(function (e) {
              var t = e.element.getBoundingClientRect();
              (e.isVisible = !!(t.width || t.height || t.top || t.left)),
                (e.uncache = 1);
            });
          }),
          (t.getElementState = function (e) {
            return this.elementStates[this.targets.indexOf(Od(e))];
          }),
          (t.makeAbsolute = function () {
            return Xd(this.elementStates.slice(0), !0, !0).map(Ud);
          }),
          e
        );
      })(),
      fh = (function () {
        function e(e, t, i) {
          (this.element = e), this.update(t, i);
        }
        var t = e.prototype;
        return (
          (t.isDifferent = function (e) {
            var t = this.bounds,
              i = e.bounds;
            return (
              t.top !== i.top ||
              t.left !== i.left ||
              t.width !== i.width ||
              t.height !== i.height ||
              !this.matrix.equals(e.matrix) ||
              this.opacity !== e.opacity ||
              (this.props &&
                e.props &&
                JSON.stringify(this.props) !== JSON.stringify(e.props))
            );
          }),
          (t.update = function (e, t) {
            var i,
              n,
              r = this,
              s = r.element,
              o = gd.getProperty(s),
              a = gd.core.getCache(s),
              l = s.getBoundingClientRect(),
              u =
                s.getBBox &&
                "function" == typeof s.getBBox &&
                "svg" !== s.nodeName.toLowerCase() &&
                s.getBBox(),
              c = t
                ? new _r(1, 0, 0, 1, l.left + fr(), l.top + pr())
                : xr(s, !1, !1, !0);
            (r.getProp = o),
              (r.element = s),
              (r.id =
                ((n = (i = s).getAttribute("data-flip-id")) ||
                  i.setAttribute("data-flip-id", (n = "auto-" + bd++)),
                n)),
              (r.matrix = c),
              (r.cache = a),
              (r.bounds = l),
              (r.isVisible = !!(l.width || l.height || l.left || l.top)),
              (r.display = o("display")),
              (r.position = o("position")),
              (r.parent = s.parentNode),
              (r.x = o("x")),
              (r.y = o("y")),
              (r.scaleX = a.scaleX),
              (r.scaleY = a.scaleY),
              (r.rotation = o("rotation")),
              (r.skewX = o("skewX")),
              (r.opacity = o("opacity")),
              (r.width = u ? u.width : wd(o("width", "px"), 0.04)),
              (r.height = u ? u.height : wd(o("height", "px"), 0.04)),
              e &&
                (function (e, t) {
                  for (
                    var i = gd.getProperty(e.element, null, "native"),
                      n = (e.props = {}),
                      r = t.length;
                    r--;

                  )
                    n[t[r]] = (i(t[r]) + "").trim();
                  n.zIndex && (n.zIndex = parseFloat(n.zIndex) || 0);
                })(r, Vd[e] || Yd(e)),
              (r.ctm =
                s.getCTM &&
                "svg" === s.nodeName.toLowerCase() &&
                yr(s).inverse()),
              (r.simple =
                t || (1 === Id(c.a) && !Id(c.b) && !Id(c.c) && 1 === Id(c.d))),
              (r.uncache = 0);
          }),
          e
        );
      })(),
      mh = (function () {
        function e(e, t) {
          (this.vars = e),
            (this.batch = t),
            (this.states = []),
            (this.timeline = t.timeline);
        }
        var t = e.prototype;
        return (
          (t.getStateById = function (e) {
            for (var t = this.states.length; t--; )
              if (this.states[t].idLookup[e]) return this.states[t];
          }),
          (t.kill = function () {
            this.batch.remove(this);
          }),
          e
        );
      })(),
      gh = (function () {
        function e(e) {
          (this.id = e),
            (this.actions = []),
            (this._kill = []),
            (this._final = []),
            (this._abs = []),
            (this._run = []),
            (this.data = {}),
            (this.state = new ph()),
            (this.timeline = gd.timeline());
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this.actions.filter(function (t) {
              return t.vars === e;
            });
            return t.length
              ? t[0]
              : ((t = new mh(
                  "function" == typeof e ? { animate: e } : e,
                  this,
                )),
                this.actions.push(t),
                t);
          }),
          (t.remove = function (e) {
            var t = this.actions.indexOf(e);
            return t >= 0 && this.actions.splice(t, 1), this;
          }),
          (t.getState = function (e) {
            var t = this,
              i = vd,
              n = yd;
            return (
              (vd = this),
              this.state.clear(),
              (this._kill.length = 0),
              this.actions.forEach(function (i) {
                i.vars.getState &&
                  ((i.states.length = 0),
                  (yd = i),
                  (i.state = i.vars.getState(i))),
                  e &&
                    i.states.forEach(function (e) {
                      return t.state.add(e);
                    });
              }),
              (yd = n),
              (vd = i),
              this.killConflicts(),
              this
            );
          }),
          (t.animate = function () {
            var e,
              t,
              i = this,
              n = vd,
              r = this.timeline,
              s = this.actions.length;
            for (
              vd = this,
                r.clear(),
                this._abs.length = this._final.length = this._run.length = 0,
                this.actions.forEach(function (e) {
                  e.vars.animate && e.vars.animate(e);
                  var t,
                    i,
                    n = e.vars.onEnter,
                    r = e.vars.onLeave,
                    s = e.targets;
                  s &&
                    s.length &&
                    (n || r) &&
                    ((t = new ph()),
                    e.states.forEach(function (e) {
                      return t.add(e);
                    }),
                    (i = t.compare(vh.getState(s))).enter.length &&
                      n &&
                      n(i.enter),
                    i.leave.length && r && r(i.leave));
                }),
                Kd(this._abs),
                this._run.forEach(function (e) {
                  return e();
                }),
                t = r.duration(),
                e = this._final.slice(0),
                r.add(function () {
                  t <= r.time() &&
                    (e.forEach(function (e) {
                      return e();
                    }),
                    Ed(i, "onComplete"));
                }),
                vd = n;
              s--;

            )
              this.actions[s].vars.once && this.actions[s].kill();
            return Ed(this, "onStart"), r.restart(), this;
          }),
          (t.loadState = function (e) {
            e ||
              (e = function () {
                return 0;
              });
            var t = [];
            return (
              this.actions.forEach(function (i) {
                if (i.vars.loadState) {
                  var n,
                    r = function r(s) {
                      s && (i.targets = s),
                        ~(n = t.indexOf(r)) &&
                          (t.splice(n, 1), t.length || e());
                    };
                  t.push(r), i.vars.loadState(r);
                }
              }),
              t.length || e(),
              this
            );
          }),
          (t.setState = function () {
            return (
              this.actions.forEach(function (e) {
                return (e.targets = e.vars.setState && e.vars.setState(e));
              }),
              this
            );
          }),
          (t.killConflicts = function (e) {
            return (
              this.state.interrupt(e),
              this._kill.forEach(function (t) {
                return t.interrupt(e);
              }),
              this
            );
          }),
          (t.run = function (e, t) {
            var i = this;
            return (
              this !== vd &&
                (e || this.getState(t),
                this.loadState(function () {
                  i._killed || (i.setState(), i.animate());
                })),
              this
            );
          }),
          (t.clear = function (e) {
            this.state.clear(), e || (this.actions.length = 0);
          }),
          (t.getStateById = function (e) {
            for (var t, i = this.actions.length; i--; )
              if ((t = this.actions[i].getStateById(e))) return t;
            return this.state.idLookup[e] && this.state;
          }),
          (t.kill = function () {
            (this._killed = 1), this.clear(), delete Sd[this.id];
          }),
          e
        );
      })(),
      vh = (function () {
        function e() {}
        return (
          (e.getState = function (t, i) {
            var n = rh(t, i);
            return (
              yd && yd.states.push(n),
              i && i.batch && e.batch(i.batch).state.add(n),
              n
            );
          }),
          (e.from = function (e, t) {
            return (
              "clearProps" in (t = t || {}) || (t.clearProps = !0),
              uh(
                e,
                rh(t.targets || e.targets, {
                  props: t.props || e.props,
                  simple: t.simple,
                  kill: !!t.kill,
                }),
                t,
                -1,
              )
            );
          }),
          (e.to = function (e, t) {
            return uh(
              e,
              rh(t.targets || e.targets, {
                props: t.props || e.props,
                simple: t.simple,
                kill: !!t.kill,
              }),
              t,
              1,
            );
          }),
          (e.fromTo = function (e, t, i) {
            return uh(e, t, i);
          }),
          (e.fit = function (e, t, i) {
            var n = i ? qd(i, Rd) : {},
              r = i || n,
              s = r.absolute,
              o = r.scale,
              a = r.getVars,
              l = r.props,
              u = r.runBackwards,
              c = r.onComplete,
              d = r.simple,
              h = i && i.fitChild && Od(i.fitChild),
              p = Jd(t, l, d, e),
              f = Jd(e, 0, d, p),
              m = l ? Fd[l] : Pd,
              g = gd.context();
            return (
              l && eh(n, p.props),
              Wd(f, m),
              u &&
                ("immediateRender" in n || (n.immediateRender = !0),
                (n.onComplete = function () {
                  $d(f), c && c.apply(this, arguments);
                })),
              s && Ud(f, p),
              (n = nh(f, p, o || h, l, h, n.duration || a ? n : 0)),
              "object" == typeof i && "zIndex" in i && (n.zIndex = i.zIndex),
              g &&
                !a &&
                g.add(function () {
                  return function () {
                    return $d(f);
                  };
                }),
              a ? n : n.duration ? gd.to(f.element, n) : null
            );
          }),
          (e.makeAbsolute = function (e, t) {
            return (e instanceof ph ? e : new ph(e, t)).makeAbsolute();
          }),
          (e.batch = function (e) {
            return e || (e = "default"), Sd[e] || (Sd[e] = new gh(e));
          }),
          (e.killFlipsOf = function (e, t) {
            (e instanceof ph ? e.targets : md(e)).forEach(function (e) {
              return e && dh(e._flip, !1 !== t ? 1 : 2);
            });
          }),
          (e.isFlipping = function (t) {
            var i = e.getByTarget(t);
            return !!i && i.isActive();
          }),
          (e.getByTarget = function (e) {
            return (Od(e) || Md)._flip;
          }),
          (e.getElementState = function (e, t) {
            return new fh(Od(e), t);
          }),
          (e.convertCoordinates = function (e, t, i) {
            var n = xr(t, !0, !0).multiply(xr(e));
            return i ? n.apply(i) : n;
          }),
          (e.register = function (e) {
            if ((Dd = "undefined" != typeof document && document.body)) {
              (gd = e),
                cr(Dd),
                (md = gd.utils.toArray),
                (_d = gd.core.getStyleSaver);
              var t = gd.utils.snap(0.1);
              wd = function (e, i) {
                return t(parseFloat(e) + i);
              };
            }
          }),
          e
        );
      })();
    (vh.version = "3.12.7"),
      "undefined" != typeof window &&
        window.gsap &&
        window.gsap.registerPlugin(vh);
    var yh = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      Dh = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      wh = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      _h = /(^[#\.][a-z]|[a-y][a-z])/i,
      xh = Math.PI / 180,
      bh = (Math.PI, Math.sin),
      Eh = Math.cos,
      Sh = Math.abs,
      Th = Math.sqrt,
      Ch =
        (Math.atan2,
        function (e) {
          return "string" == typeof e;
        }),
      Mh = function (e) {
        return "number" == typeof e;
      },
      Ah = 1e5,
      Fh = function (e) {
        return Math.round(e * Ah) / Ah || 0;
      };
    function kh(e) {
      var t,
        i = 0;
      for (e.reverse(); i < e.length; i += 2)
        (t = e[i]), (e[i] = e[i + 1]), (e[i + 1] = t);
      e.reversed = !e.reversed;
    }
    var Lh = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2",
    };
    function Ph(e, t) {
      var i,
        n,
        r,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        h,
        p,
        f,
        m,
        g,
        v,
        y,
        D,
        w,
        _,
        x,
        b,
        E = e.tagName.toLowerCase(),
        S = 0.552284749831;
      return "path" !== E && e.getBBox
        ? ((a = (function (e, t) {
            var i,
              n = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
              ),
              r = [].slice.call(e.attributes),
              s = r.length;
            for (t = "," + t + ","; --s > -1; )
              (i = r[s].nodeName.toLowerCase()),
                t.indexOf("," + i + ",") < 0 &&
                  n.setAttributeNS(null, i, r[s].nodeValue);
            return n;
          })(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
          (b = (function (e, t) {
            for (
              var i = t ? t.split(",") : [], n = {}, r = i.length;
              --r > -1;

            )
              n[i[r]] = +e.getAttribute(i[r]) || 0;
            return n;
          })(e, Lh[E])),
          "rect" === E
            ? ((s = b.rx),
              (o = b.ry || s),
              (n = b.x),
              (r = b.y),
              (d = b.width - 2 * s),
              (h = b.height - 2 * o),
              (i =
                s || o
                  ? "M" +
                    (v = (m = (f = n + s) + d) + s) +
                    "," +
                    (D = r + o) +
                    " V" +
                    (w = D + h) +
                    " C" +
                    [
                      v,
                      (_ = w + o * S),
                      (g = m + s * S),
                      (x = w + o),
                      m,
                      x,
                      m - (m - f) / 3,
                      x,
                      f + (m - f) / 3,
                      x,
                      f,
                      x,
                      (p = n + s * (1 - S)),
                      x,
                      n,
                      _,
                      n,
                      w,
                      n,
                      w - (w - D) / 3,
                      n,
                      D + (w - D) / 3,
                      n,
                      D,
                      n,
                      (y = r + o * (1 - S)),
                      p,
                      r,
                      f,
                      r,
                      f + (m - f) / 3,
                      r,
                      m - (m - f) / 3,
                      r,
                      m,
                      r,
                      g,
                      r,
                      v,
                      y,
                      v,
                      D,
                    ].join(",") +
                    "z"
                  : "M" +
                    (n + d) +
                    "," +
                    r +
                    " v" +
                    h +
                    " h" +
                    -d +
                    " v" +
                    -h +
                    " h" +
                    d +
                    "z"))
            : "circle" === E || "ellipse" === E
              ? ("circle" === E
                  ? (u = (s = o = b.r) * S)
                  : ((s = b.rx), (u = (o = b.ry) * S)),
                (i =
                  "M" +
                  ((n = b.cx) + s) +
                  "," +
                  (r = b.cy) +
                  " C" +
                  [
                    n + s,
                    r + u,
                    n + (l = s * S),
                    r + o,
                    n,
                    r + o,
                    n - l,
                    r + o,
                    n - s,
                    r + u,
                    n - s,
                    r,
                    n - s,
                    r - u,
                    n - l,
                    r - o,
                    n,
                    r - o,
                    n + l,
                    r - o,
                    n + s,
                    r - u,
                    n + s,
                    r,
                  ].join(",") +
                  "z"))
              : "line" === E
                ? (i = "M" + b.x1 + "," + b.y1 + " L" + b.x2 + "," + b.y2)
                : ("polyline" !== E && "polygon" !== E) ||
                  ((i =
                    "M" +
                    (n = (c =
                      (e.getAttribute("points") + "").match(Dh) ||
                      []).shift()) +
                    "," +
                    (r = c.shift()) +
                    " L" +
                    c.join(",")),
                  "polygon" === E && (i += "," + n + "," + r + "z")),
          a.setAttribute("d", Bh((a._gsRawPath = Ih(i)))),
          t &&
            e.parentNode &&
            (e.parentNode.insertBefore(a, e), e.parentNode.removeChild(e)),
          a)
        : e;
    }
    function Oh(e, t, i, n, r, s, o, a, l) {
      if (e !== a || t !== l) {
        (i = Sh(i)), (n = Sh(n));
        var u = (r % 360) * xh,
          c = Eh(u),
          d = bh(u),
          h = Math.PI,
          p = 2 * h,
          f = (e - a) / 2,
          m = (t - l) / 2,
          g = c * f + d * m,
          v = -d * f + c * m,
          y = g * g,
          D = v * v,
          w = y / (i * i) + D / (n * n);
        w > 1 && ((i = Th(w) * i), (n = Th(w) * n));
        var _ = i * i,
          x = n * n,
          b = (_ * x - _ * D - x * y) / (_ * D + x * y);
        b < 0 && (b = 0);
        var E = (s === o ? -1 : 1) * Th(b),
          S = E * ((i * v) / n),
          T = E * ((-n * g) / i),
          C = (e + a) / 2 + (c * S - d * T),
          M = (t + l) / 2 + (d * S + c * T),
          A = (g - S) / i,
          F = (v - T) / n,
          k = (-g - S) / i,
          L = (-v - T) / n,
          P = A * A + F * F,
          O = (F < 0 ? -1 : 1) * Math.acos(A / Th(P)),
          I =
            (A * L - F * k < 0 ? -1 : 1) *
            Math.acos((A * k + F * L) / Th(P * (k * k + L * L)));
        isNaN(I) && (I = h),
          !o && I > 0 ? (I -= p) : o && I < 0 && (I += p),
          (O %= p),
          (I %= p);
        var B,
          N = Math.ceil(Sh(I) / (p / 4)),
          R = [],
          z = I / N,
          q = ((4 / 3) * bh(z / 2)) / (1 + Eh(z / 2)),
          V = c * i,
          Y = d * i,
          H = d * -n,
          X = c * n;
        for (B = 0; B < N; B++)
          (g = Eh((r = O + B * z))),
            (v = bh(r)),
            (A = Eh((r += z))),
            (F = bh(r)),
            R.push(g - q * v, v + q * g, A + q * F, F - q * A, A, F);
        for (B = 0; B < R.length; B += 2)
          (g = R[B]),
            (v = R[B + 1]),
            (R[B] = g * V + v * H + C),
            (R[B + 1] = g * Y + v * X + M);
        return (R[B - 2] = a), (R[B - 1] = l), R;
      }
    }
    function Ih(e) {
      var t,
        i,
        n,
        r,
        s,
        o,
        a,
        l,
        u,
        c,
        d,
        h,
        p,
        f,
        m,
        g =
          (e + "")
            .replace(wh, function (e) {
              var t = +e;
              return t < 1e-4 && t > -1e-4 ? 0 : t;
            })
            .match(yh) || [],
        v = [],
        y = 0,
        D = 0,
        w = 2 / 3,
        _ = g.length,
        x = 0,
        b = function (e, t, i, n) {
          (c = (i - e) / 3),
            (d = (n - t) / 3),
            a.push(e + c, t + d, i - c, n - d, i, n);
        };
      if (!e || !isNaN(g[0]) || isNaN(g[1])) return v;
      for (t = 0; t < _; t++)
        if (
          ((p = s),
          isNaN(g[t]) ? (o = (s = g[t].toUpperCase()) !== g[t]) : t--,
          (n = +g[t + 1]),
          (r = +g[t + 2]),
          o && ((n += y), (r += D)),
          t || ((l = n), (u = r)),
          "M" === s)
        )
          a && (a.length < 8 ? (v.length -= 1) : (x += a.length)),
            (y = l = n),
            (D = u = r),
            (a = [n, r]),
            v.push(a),
            (t += 2),
            (s = "L");
        else if ("C" === s)
          a || (a = [0, 0]),
            o || (y = D = 0),
            a.push(
              n,
              r,
              y + 1 * g[t + 3],
              D + 1 * g[t + 4],
              (y += 1 * g[t + 5]),
              (D += 1 * g[t + 6]),
            ),
            (t += 6);
        else if ("S" === s)
          (c = y),
            (d = D),
            ("C" !== p && "S" !== p) ||
              ((c += y - a[a.length - 4]), (d += D - a[a.length - 3])),
            o || (y = D = 0),
            a.push(c, d, n, r, (y += 1 * g[t + 3]), (D += 1 * g[t + 4])),
            (t += 4);
        else if ("Q" === s)
          (c = y + (n - y) * w),
            (d = D + (r - D) * w),
            o || (y = D = 0),
            (y += 1 * g[t + 3]),
            (D += 1 * g[t + 4]),
            a.push(c, d, y + (n - y) * w, D + (r - D) * w, y, D),
            (t += 4);
        else if ("T" === s)
          (c = y - a[a.length - 4]),
            (d = D - a[a.length - 3]),
            a.push(
              y + c,
              D + d,
              n + (y + 1.5 * c - n) * w,
              r + (D + 1.5 * d - r) * w,
              (y = n),
              (D = r),
            ),
            (t += 2);
        else if ("H" === s) b(y, D, (y = n), D), (t += 1);
        else if ("V" === s) b(y, D, y, (D = n + (o ? D - y : 0))), (t += 1);
        else if ("L" === s || "Z" === s)
          "Z" === s && ((n = l), (r = u), (a.closed = !0)),
            ("L" === s || Sh(y - n) > 0.5 || Sh(D - r) > 0.5) &&
              (b(y, D, n, r), "L" === s && (t += 2)),
            (y = n),
            (D = r);
        else if ("A" === s) {
          if (
            ((f = g[t + 4]),
            (m = g[t + 5]),
            (c = g[t + 6]),
            (d = g[t + 7]),
            (i = 7),
            f.length > 1 &&
              (f.length < 3
                ? ((d = c), (c = m), i--)
                : ((d = m), (c = f.substr(2)), (i -= 2)),
              (m = f.charAt(1)),
              (f = f.charAt(0))),
            (h = Oh(
              y,
              D,
              +g[t + 1],
              +g[t + 2],
              +g[t + 3],
              +f,
              +m,
              (o ? y : 0) + 1 * c,
              (o ? D : 0) + 1 * d,
            )),
            (t += i),
            h)
          )
            for (i = 0; i < h.length; i++) a.push(h[i]);
          (y = a[a.length - 2]), (D = a[a.length - 1]);
        }
      return (
        (t = a.length) < 6
          ? (v.pop(), (t = 0))
          : a[0] === a[t - 2] && a[1] === a[t - 1] && (a.closed = !0),
        (v.totalPoints = x + t),
        v
      );
    }
    function Bh(e) {
      Mh(e[0]) && (e = [e]);
      var t,
        i,
        n,
        r,
        s = "",
        o = e.length;
      for (i = 0; i < o; i++) {
        for (
          r = e[i],
            s += "M" + Fh(r[0]) + "," + Fh(r[1]) + " C",
            t = r.length,
            n = 2;
          n < t;
          n++
        )
          s +=
            Fh(r[n++]) +
            "," +
            Fh(r[n++]) +
            " " +
            Fh(r[n++]) +
            "," +
            Fh(r[n++]) +
            " " +
            Fh(r[n++]) +
            "," +
            Fh(r[n]) +
            " ";
        r.closed && (s += "z");
      }
      return s;
    }
    var Nh,
      Rh,
      zh,
      qh,
      Vh,
      Yh = function () {
        return (
          Nh ||
          ("undefined" != typeof window &&
            (Nh = window.gsap) &&
            Nh.registerPlugin &&
            Nh)
        );
      },
      Hh = function (e) {
        return "function" == typeof e;
      },
      Xh = Math.atan2,
      Wh = Math.cos,
      $h = Math.sin,
      Gh = Math.sqrt,
      jh = Math.PI,
      Uh = 2 * jh,
      Qh = 0.3 * jh,
      Kh = 0.7 * jh,
      Zh = 1e20,
      Jh = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      ep = /(^[#\.][a-z]|[a-y][a-z])/i,
      tp = /[achlmqstvz]/i,
      ip = function (e) {
        return console && void 0;
      },
      np = function (e) {
        var t,
          i = e.length,
          n = 0,
          r = 0;
        for (t = 0; t < i; t++) (n += e[t++]), (r += e[t]);
        return [n / (i / 2), r / (i / 2)];
      },
      rp = function (e) {
        var t,
          i,
          n,
          r = e.length,
          s = e[0],
          o = s,
          a = e[1],
          l = a;
        for (n = 6; n < r; n += 6)
          (t = e[n]) > s ? (s = t) : t < o && (o = t),
            (i = e[n + 1]) > a ? (a = i) : i < l && (l = i);
        return (
          (e.centerX = (s + o) / 2),
          (e.centerY = (a + l) / 2),
          (e.size = (s - o) * (a - l))
        );
      },
      sp = function (e, t) {
        void 0 === t && (t = 3);
        for (
          var i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y = e.length,
            D = e[0][0],
            w = D,
            _ = e[0][1],
            x = _,
            b = 1 / t;
          --y > -1;

        )
          for (i = (o = e[y]).length, s = 6; s < i; s += 6)
            for (
              c = o[s],
                d = o[s + 1],
                h = o[s + 2] - c,
                m = o[s + 3] - d,
                p = o[s + 4] - c,
                g = o[s + 5] - d,
                f = o[s + 6] - c,
                v = o[s + 7] - d,
                a = t;
              --a > -1;

            )
              (n =
                ((l = b * a) * l * f + 3 * (u = 1 - l) * (l * p + u * h)) * l +
                c) > D
                ? (D = n)
                : n < w && (w = n),
                (r = (l * l * v + 3 * u * (l * g + u * m)) * l + d) > _
                  ? (_ = r)
                  : r < x && (x = r);
        return (
          (e.centerX = (D + w) / 2),
          (e.centerY = (_ + x) / 2),
          (e.left = w),
          (e.width = D - w),
          (e.top = x),
          (e.height = _ - x),
          (e.size = (D - w) * (_ - x))
        );
      },
      op = function (e, t) {
        return t.length - e.length;
      },
      ap = function (e, t) {
        var i = e.size || rp(e),
          n = t.size || rp(t);
        return Math.abs(n - i) < (i + n) / 20
          ? t.centerX - e.centerX || t.centerY - e.centerY
          : n - i;
      },
      lp = function (e, t) {
        var i,
          n,
          r = e.slice(0),
          s = e.length,
          o = s - 2;
        for (t |= 0, i = 0; i < s; i++)
          (n = (i + t) % o), (e[i++] = r[n]), (e[i] = r[n + 1]);
      },
      up = function (e, t, i, n, r) {
        var s,
          o,
          a,
          l,
          u = e.length,
          c = 0,
          d = u - 2;
        for (i *= 6, o = 0; o < u; o += 6)
          (l = e[(s = (o + i) % d)] - (t[o] - n)),
            (a = e[s + 1] - (t[o + 1] - r)),
            (c += Gh(a * a + l * l));
        return c;
      },
      cp = function (e, t, i) {
        var n,
          r,
          s,
          o = e.length,
          a = np(e),
          l = np(t),
          u = l[0] - a[0],
          c = l[1] - a[1],
          d = up(e, t, 0, u, c),
          h = 0;
        for (s = 6; s < o; s += 6)
          (r = up(e, t, s / 6, u, c)) < d && ((d = r), (h = s));
        if (i)
          for (kh((n = e.slice(0))), s = 6; s < o; s += 6)
            (r = up(n, t, s / 6, u, c)) < d && ((d = r), (h = -s));
        return h / 6;
      },
      dp = function (e, t, i) {
        for (
          var n, r, s, o, a, l, u = e.length, c = Zh, d = 0, h = 0;
          --u > -1;

        )
          for (l = (n = e[u]).length, a = 0; a < l; a += 6)
            (r = n[a] - t),
              (s = n[a + 1] - i),
              (o = Gh(r * r + s * s)) < c &&
                ((c = o), (d = n[a]), (h = n[a + 1]));
        return [d, h];
      },
      hp = function (e, t, i, n, r, s) {
        var o,
          a,
          l,
          u,
          c = t.length,
          d = 0,
          h = Math.min(e.size || rp(e), t[i].size || rp(t[i])) * n,
          p = Zh,
          f = e.centerX + r,
          m = e.centerY + s;
        for (o = i; o < c && !((t[o].size || rp(t[o])) < h); o++)
          (a = t[o].centerX - f),
            (l = t[o].centerY - m),
            (u = Gh(a * a + l * l)) < p && ((d = o), (p = u));
        return (u = t[d]), t.splice(d, 1), u;
      },
      pp = function (e, t) {
        var i,
          n,
          r,
          s,
          o,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g = 0,
          v = e.length,
          y = t / ((v - 2) / 6);
        for (f = 2; f < v; f += 6)
          for (g += y; g > 0.999999; )
            (i = e[f - 2]),
              (n = e[f - 1]),
              (r = e[f]),
              (s = e[f + 1]),
              (o = e[f + 2]),
              (a = e[f + 3]),
              (l = e[f + 4]),
              (u = e[f + 5]),
              (c = i + (r - i) * (m = 1 / ((Math.floor(g) || 1) + 1))),
              (c += ((h = r + (o - r) * m) - c) * m),
              (h += (o + (l - o) * m - h) * m),
              (d = n + (s - n) * m),
              (d += ((p = s + (a - s) * m) - d) * m),
              (p += (a + (u - a) * m - p) * m),
              e.splice(
                f,
                4,
                i + (r - i) * m,
                n + (s - n) * m,
                c,
                d,
                c + (h - c) * m,
                d + (p - d) * m,
                h,
                p,
                o + (l - o) * m,
                a + (u - a) * m,
              ),
              (f += 6),
              (v += 6),
              g--;
        return e;
      },
      fp = function (e, t, i, n, r) {
        var s,
          o,
          a,
          l,
          u,
          c,
          d,
          h = t.length - e.length,
          p = h > 0 ? t : e,
          f = h > 0 ? e : t,
          m = 0,
          g = "complexity" === n ? op : ap,
          v = "position" === n ? 0 : "number" == typeof n ? n : 0.8,
          y = f.length,
          D = "object" == typeof i && i.push ? i.slice(0) : [i],
          w = "reverse" === D[0] || D[0] < 0,
          _ = "log" === i;
        if (f[0]) {
          if (
            p.length > 1 &&
            (e.sort(g),
            t.sort(g),
            p.size || sp(p),
            f.size || sp(f),
            (c = p.centerX - f.centerX),
            (d = p.centerY - f.centerY),
            g === ap)
          )
            for (y = 0; y < f.length; y++)
              p.splice(y, 0, hp(f[y], p, y, v, c, d));
          if (h)
            for (
              h < 0 && (h = -h),
                p[0].length > f[0].length &&
                  pp(f[0], ((p[0].length - f[0].length) / 6) | 0),
                y = f.length;
              m < h;

            )
              p[y].size || rp(p[y]),
                (l = (a = dp(f, p[y].centerX, p[y].centerY))[0]),
                (u = a[1]),
                (f[y++] = [l, u, l, u, l, u, l, u]),
                (f.totalPoints += 8),
                m++;
          for (y = 0; y < e.length; y++)
            (s = t[y]),
              (o = e[y]),
              (h = s.length - o.length) < 0
                ? pp(s, (-h / 6) | 0)
                : h > 0 && pp(o, (h / 6) | 0),
              w && !1 !== r && !o.reversed && kh(o),
              (i = D[y] || 0 === D[y] ? D[y] : "auto") &&
                (o.closed ||
                (Math.abs(o[0] - o[o.length - 2]) < 0.5 &&
                  Math.abs(o[1] - o[o.length - 1]) < 0.5)
                  ? "auto" === i || "log" === i
                    ? ((D[y] = i = cp(o, s, !y || !1 === r)),
                      i < 0 && ((w = !0), kh(o), (i = -i)),
                      lp(o, 6 * i))
                    : "reverse" !== i &&
                      (y && i < 0 && kh(o), lp(o, 6 * (i < 0 ? -i : i)))
                  : !w &&
                      (("auto" === i &&
                        Math.abs(s[0] - o[0]) +
                          Math.abs(s[1] - o[1]) +
                          Math.abs(s[s.length - 2] - o[o.length - 2]) +
                          Math.abs(s[s.length - 1] - o[o.length - 1]) >
                          Math.abs(s[0] - o[o.length - 2]) +
                            Math.abs(s[1] - o[o.length - 1]) +
                            Math.abs(s[s.length - 2] - o[0]) +
                            Math.abs(s[s.length - 1] - o[1])) ||
                        i % 2)
                    ? (kh(o), (D[y] = -1), (w = !0))
                    : "auto" === i
                      ? (D[y] = 0)
                      : "reverse" === i && (D[y] = -1),
                o.closed !== s.closed && (o.closed = s.closed = !1));
          return _ && ip(D.join(",")), (e.shapeIndex = D), D;
        }
      },
      mp = function (e, t, i, n, r) {
        var s = Ih(e[0]),
          o = Ih(e[1]);
        fp(s, o, t || 0 === t ? t : "auto", i, r) &&
          ((e[0] = Bh(s)),
          (e[1] = Bh(o)),
          ("log" !== n && !0 !== n) || ip((e[0], e[1])));
      },
      gp = function (e, t) {
        var i,
          n,
          r,
          s,
          o,
          a,
          l,
          u = 0,
          c = parseFloat(e[0]),
          d = parseFloat(e[1]),
          h = c + "," + d + " ",
          p = 0.999999;
        for (
          i = (0.5 * t) / (0.5 * (r = e.length) - 1), n = 0;
          n < r - 2;
          n += 2
        ) {
          if (
            ((u += i),
            (a = parseFloat(e[n + 2])),
            (l = parseFloat(e[n + 3])),
            u > p)
          )
            for (o = 1 / (Math.floor(u) + 1), s = 1; u > p; )
              (h +=
                (c + (a - c) * o * s).toFixed(2) +
                "," +
                (d + (l - d) * o * s).toFixed(2) +
                " "),
                u--,
                s++;
          (h += a + "," + l + " "), (c = a), (d = l);
        }
        return h;
      },
      vp = function (e) {
        var t = e[0].match(Jh) || [],
          i = e[1].match(Jh) || [],
          n = i.length - t.length;
        n > 0 ? (e[0] = gp(t, n)) : (e[1] = gp(i, -n));
      },
      yp = function (e) {
        return isNaN(e)
          ? vp
          : function (t) {
              vp(t),
                (t[1] = (function (e, t) {
                  if (!t) return e;
                  var i,
                    n,
                    r,
                    s = e.match(Jh) || [],
                    o = s.length,
                    a = "";
                  for (
                    "reverse" === t
                      ? ((n = o - 1), (i = -2))
                      : ((n = (2 * (parseInt(t, 10) || 0) + 1 + 100 * o) % o),
                        (i = 2)),
                      r = 0;
                    r < o;
                    r += 2
                  )
                    (a += s[n - 1] + "," + s[n] + " "), (n = (n + i) % o);
                  return a;
                })(t[1], parseInt(e, 10)));
            };
      },
      Dp = function (e, t) {
        for (
          var i,
            n,
            r,
            s,
            o,
            a,
            l,
            u,
            c,
            d,
            h,
            p,
            f = e.length,
            m = 0.2 * (t || 1);
          --f > -1;

        ) {
          for (
            h = (n = e[f]).isSmooth = n.isSmooth || [0, 0, 0, 0],
              p = n.smoothData = n.smoothData || [0, 0, 0, 0],
              h.length = 4,
              u = n.length - 2,
              l = 6;
            l < u;
            l += 6
          )
            (r = n[l] - n[l - 2]),
              (s = n[l + 1] - n[l - 1]),
              (o = n[l + 2] - n[l]),
              (a = n[l + 3] - n[l + 1]),
              (c = Xh(s, r)),
              (d = Xh(a, o)),
              (i = Math.abs(c - d) < m) &&
                ((p[l - 2] = c),
                (p[l + 2] = d),
                (p[l - 1] = Gh(r * r + s * s)),
                (p[l + 3] = Gh(o * o + a * a))),
              h.push(i, i, 0, 0, i, i);
          n[u] === n[0] &&
            n[u + 1] === n[1] &&
            ((r = n[0] - n[u - 2]),
            (s = n[1] - n[u - 1]),
            (o = n[2] - n[0]),
            (a = n[3] - n[1]),
            (c = Xh(s, r)),
            (d = Xh(a, o)),
            Math.abs(c - d) < m &&
              ((p[u - 2] = c),
              (p[2] = d),
              (p[u - 1] = Gh(r * r + s * s)),
              (p[3] = Gh(o * o + a * a)),
              (h[u - 2] = h[u - 1] = !0)));
        }
        return e;
      },
      wp = function (e) {
        var t = e.trim().split(" ");
        return {
          x:
            (~e.indexOf("left")
              ? 0
              : ~e.indexOf("right")
                ? 100
                : isNaN(parseFloat(t[0]))
                  ? 50
                  : parseFloat(t[0])) / 100,
          y:
            (~e.indexOf("top")
              ? 0
              : ~e.indexOf("bottom")
                ? 100
                : isNaN(parseFloat(t[1]))
                  ? 50
                  : parseFloat(t[1])) / 100,
        };
      },
      _p = function (e, t, i, n) {
        var r,
          s,
          o,
          a = this._origin,
          l = this._eOrigin,
          u = e[i] - a.x,
          c = e[i + 1] - a.y,
          d = Gh(u * u + c * c),
          h = Xh(c, u);
        return (
          (u = t[i] - l.x),
          (c = t[i + 1] - l.y),
          (r = Xh(c, u) - h),
          (s = (o = r) !== o % jh ? o + (o < 0 ? Uh : -Uh) : o),
          !n && zh && Math.abs(s + zh.ca) < Qh && (n = zh),
          (this._anchorPT = zh =
            {
              _next: this._anchorPT,
              t: e,
              sa: h,
              ca: n && s * n.ca < 0 && Math.abs(s) > Kh ? r : s,
              sl: d,
              cl: Gh(u * u + c * c) - d,
              i: i,
            })
        );
      },
      xp = function (e) {
        (Nh = Yh()),
          (Vh = Vh || (Nh && Nh.plugins.morphSVG)),
          Nh && Vh
            ? ((Rh = Nh.utils.toArray),
              document,
              (Vh.prototype._tweenRotation = _p),
              (qh = 1))
            : e && ip();
      },
      bp = {
        version: "3.12.7",
        name: "morphSVG",
        rawVars: 1,
        register: function (e, t) {
          (Nh = e), (Vh = t), xp();
        },
        init: function (e, t, i, n, r) {
          if ((qh || xp(1), !t)) return ip(), !1;
          var s, o, a, l, u, c, d, h, p, f, m, g, v, y, D, w, _, x, b, E, S, T;
          if (
            (Hh(t) && (t = t.call(i, n, e, r)),
            "string" == typeof t || t.getBBox || t[0])
          )
            t = { shape: t };
          else if ("object" == typeof t) {
            for (o in ((s = {}), t))
              s[o] = Hh(t[o]) && "render" !== o ? t[o].call(i, n, e, r) : t[o];
            t = s;
          }
          var C = e.nodeType ? window.getComputedStyle(e) : {},
            M = C.fill + "",
            A = !(
              "none" === M ||
              "0" === (M.match(Jh) || [])[3] ||
              "evenodd" === C.fillRule
            ),
            F = (t.origin || "50 50").split(",");
          if (
            ((u =
              "POLYLINE" === (s = (e.nodeName + "").toUpperCase()) ||
              "POLYGON" === s),
            "PATH" !== s && !u && !t.prop)
          )
            return ip(), !1;
          if (
            ((o = "PATH" === s ? "d" : "points"),
            !t.prop && !Hh(e.setAttribute))
          )
            return !1;
          if (
            ((l = (function (e, t, i) {
              var n, r;
              return (
                (!("string" == typeof e) ||
                  ep.test(e) ||
                  (e.match(Jh) || []).length < 3) &&
                  ((n = Rh(e)[0])
                    ? ((r = (n.nodeName + "").toUpperCase()),
                      t && "PATH" !== r && ((n = Ph(n, !1)), (r = "PATH")),
                      (e = n.getAttribute("PATH" === r ? "d" : "points") || ""),
                      n === i &&
                        (e = n.getAttributeNS(null, "data-original") || e))
                    : (ip(), (e = !1))),
                e
              );
            })(t.shape || t.d || t.points || "", "d" === o, e)),
            u && tp.test(l))
          )
            return ip(), !1;
          if (
            ((c = t.shapeIndex || 0 === t.shapeIndex ? t.shapeIndex : "auto"),
            (d = t.map || bp.defaultMap),
            (this._prop = t.prop),
            (this._render = t.render || bp.defaultRender),
            (this._apply =
              "updateTarget" in t ? t.updateTarget : bp.defaultUpdateTarget),
            (this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision)),
            (this._tween = i),
            l)
          ) {
            if (
              ((this._target = e),
              (_ = "object" == typeof t.precompile),
              (f = this._prop ? e[this._prop] : e.getAttribute(o)),
              this._prop ||
                e.getAttributeNS(null, "data-original") ||
                e.setAttributeNS(null, "data-original", f),
              "d" === o || this._prop)
            ) {
              if (
                ((f = Ih(_ ? t.precompile[0] : f)),
                (m = Ih(_ ? t.precompile[1] : l)),
                !_ && !fp(f, m, c, d, A))
              )
                return !1;
              for (
                ("log" !== t.precompile && !0 !== t.precompile) ||
                  ip((Bh(f), Bh(m))),
                  (S = "linear" !== (t.type || bp.defaultType)) &&
                    ((f = Dp(f, t.smoothTolerance)),
                    (m = Dp(m, t.smoothTolerance)),
                    f.size || sp(f),
                    m.size || sp(m),
                    (E = wp(F[0])),
                    (this._origin = f.origin =
                      { x: f.left + E.x * f.width, y: f.top + E.y * f.height }),
                    F[1] && (E = wp(F[1])),
                    (this._eOrigin = {
                      x: m.left + E.x * m.width,
                      y: m.top + E.y * m.height,
                    })),
                  this._rawPath = e._gsRawPath = f,
                  v = f.length;
                --v > -1;

              )
                for (
                  D = f[v],
                    w = m[v],
                    h = D.isSmooth || [],
                    p = w.isSmooth || [],
                    y = D.length,
                    zh = 0,
                    g = 0;
                  g < y;
                  g += 2
                )
                  (w[g] === D[g] && w[g + 1] === D[g + 1]) ||
                    (S
                      ? h[g] && p[g]
                        ? ((x = D.smoothData),
                          (b = w.smoothData),
                          (T = g + (g === y - 4 ? 7 - y : 5)),
                          (this._controlPT = {
                            _next: this._controlPT,
                            i: g,
                            j: v,
                            l1s: x[g + 1],
                            l1c: b[g + 1] - x[g + 1],
                            l2s: x[T],
                            l2c: b[T] - x[T],
                          }),
                          (a = this._tweenRotation(D, w, g + 2)),
                          this._tweenRotation(D, w, g, a),
                          this._tweenRotation(D, w, T - 1, a),
                          (g += 4))
                        : this._tweenRotation(D, w, g)
                      : ((a = this.add(D, g, D[g], w[g], 0, 0, 0, 0, 0, 1)),
                        (a =
                          this.add(
                            D,
                            g + 1,
                            D[g + 1],
                            w[g + 1],
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                          ) || a)));
            } else
              a = this.add(
                e,
                "setAttribute",
                e.getAttribute(o) + "",
                l + "",
                n,
                r,
                0,
                yp(c),
                o,
              );
            S &&
              (this.add(
                this._origin,
                "x",
                this._origin.x,
                this._eOrigin.x,
                0,
                0,
                0,
                0,
                0,
                1,
              ),
              (a = this.add(
                this._origin,
                "y",
                this._origin.y,
                this._eOrigin.y,
                0,
                0,
                0,
                0,
                0,
                1,
              ))),
              a && (this._props.push("morphSVG"), (a.end = l), (a.endProp = o));
          }
          return 1;
        },
        render: function (e, t) {
          for (
            var i,
              n,
              r,
              s,
              o,
              a,
              l,
              u,
              c,
              d,
              h,
              p,
              f = t._rawPath,
              m = t._controlPT,
              g = t._anchorPT,
              v = t._rnd,
              y = t._target,
              D = t._pt;
            D;

          )
            D.r(e, D.d), (D = D._next);
          if (1 === e && t._apply)
            for (D = t._pt; D; )
              D.end &&
                (t._prop
                  ? (y[t._prop] = D.end)
                  : y.setAttribute(D.endProp, D.end)),
                (D = D._next);
          else if (f) {
            for (; g; )
              (o = g.sa + e * g.ca),
                (s = g.sl + e * g.cl),
                (g.t[g.i] = t._origin.x + Wh(o) * s),
                (g.t[g.i + 1] = t._origin.y + $h(o) * s),
                (g = g._next);
            for (n = e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1; m; )
              (p =
                (a = m.i) + (a === (r = f[m.j]).length - 4 ? 7 - r.length : 5)),
                (o = Xh(r[p] - r[a + 1], r[p - 1] - r[a])),
                (d = $h(o)),
                (h = Wh(o)),
                (u = r[a + 2]),
                (c = r[a + 3]),
                (s = m.l1s + n * m.l1c),
                (r[a] = u - h * s),
                (r[a + 1] = c - d * s),
                (s = m.l2s + n * m.l2c),
                (r[p - 1] = u + h * s),
                (r[p] = c + d * s),
                (m = m._next);
            if (((y._gsRawPath = f), t._apply)) {
              for (i = "", l = 0; l < f.length; l++)
                for (
                  s = (r = f[l]).length,
                    i +=
                      "M" +
                      ((r[0] * v) | 0) / v +
                      " " +
                      ((r[1] * v) | 0) / v +
                      " C",
                    a = 2;
                  a < s;
                  a++
                )
                  i += ((r[a] * v) | 0) / v + " ";
              t._prop ? (y[t._prop] = i) : y.setAttribute("d", i);
            }
          }
          t._render && f && t._render.call(t._tween, f, y);
        },
        kill: function (e) {
          this._pt = this._rawPath = 0;
        },
        getRawPath: function (e) {
          var t,
            i = (e = (Ch(e) && _h.test(e) && document.querySelector(e)) || e)
              .getAttribute
              ? e
              : 0;
          return i && (e = e.getAttribute("d"))
            ? (i._gsPath || (i._gsPath = {}),
              (t = i._gsPath[e]) && !t._dirty ? t : (i._gsPath[e] = Ih(e)))
            : e
              ? Ch(e)
                ? Ih(e)
                : Mh(e[0])
                  ? [e]
                  : e
              : void 0;
        },
        stringToRawPath: Ih,
        rawPathToString: Bh,
        normalizeStrings: function (e, t, i) {
          var n = i.shapeIndex,
            r = i.map,
            s = [e, t];
          return mp(s, n, r), s;
        },
        pathFilter: mp,
        pointsFilter: vp,
        getTotalSize: sp,
        equalizeSegmentQuantity: fp,
        convertToPath: function (e, t) {
          return Rh(e).map(function (e) {
            return Ph(e, !1 !== t);
          });
        },
        defaultType: "linear",
        defaultUpdateTarget: !0,
        defaultMap: "size",
      };
    Yh() && Nh.registerPlugin(bp);
    var Ep = __webpack_require__(139),
      Sp = __webpack_require__.n(Ep);
    const Tp = {
      init() {
        const e = document
          .querySelector("#footer")
          .querySelector(".footer-form");
        if (!e) return;
        const t = e?.querySelectorAll(".form-selector input");
        t.forEach((t) => {
          t.addEventListener("change", () => {
            $n.to(e, {
              duration: 0.5,
              height: "auto",
              maskImage: "none",
              opacity: 1,
              display: "block",
              ease: "power3.inOut",
              onComplete: () => {
                e.style.overflow = "visible";
              },
            });
          });
        });
      },
    };
    var Cp = Tp;
    const Mp = {
      init() {
        const e = document.querySelectorAll(".awards-marquee");
        e.length &&
          e.forEach((e) => {
            const t = e.querySelectorAll(".awards-marquee-item"),
              i = () => {
                t.forEach((e, t) => {
                  e.style.width = `${e.querySelector(".award-badge, img").offsetWidth}px`;
                });
              };
            imagesLoaded(e, () => {
              if ((i(), window.innerWidth <= 1199)) {
                for (let i = 0; i < 2; i++)
                  t.forEach((t) => {
                    const i = t.cloneNode(!0);
                    e.appendChild(i);
                  });
                Wo(e.querySelectorAll(".awards-marquee-item"), {
                  paused: !1,
                  draggable: !0,
                  speed: 2,
                  center: !1,
                });
              }
            }),
              i();
          });
      },
    };
    var Ap = Mp;
    function Fp(e, t, i) {
      return Math.max(e, Math.min(t, i));
    }
    var kp = class {
      isRunning = !1;
      value = 0;
      from = 0;
      to = 0;
      currentTime = 0;
      lerp;
      duration;
      easing;
      onUpdate;
      advance(e) {
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
          this.currentTime += e;
          const i = Fp(0, this.currentTime / this.duration, 1);
          t = i >= 1;
          const n = t ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * n;
        } else
          this.lerp
            ? ((this.value = (function (e, t, i, n) {
                return (function (e, t, i) {
                  return (1 - i) * e + i * t;
                })(e, t, 1 - Math.exp(-i * n));
              })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)))
            : ((this.value = this.to), (t = !0));
        t && this.stop(), this.onUpdate?.(this.value, t);
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        e,
        t,
        { lerp: i, duration: n, easing: r, onStart: s, onUpdate: o },
      ) {
        (this.from = this.value = e),
          (this.to = t),
          (this.lerp = i),
          (this.duration = n),
          (this.easing = r),
          (this.currentTime = 0),
          (this.isRunning = !0),
          s?.(),
          (this.onUpdate = o);
      }
    };
    var Lp = class {
        constructor(e, t, { autoResize: i = !0, debounce: n = 250 } = {}) {
          (this.wrapper = e),
            (this.content = t),
            i &&
              ((this.debouncedResize = (function (e, t) {
                let i;
                return function (...n) {
                  let r = this;
                  clearTimeout(i),
                    (i = setTimeout(() => {
                      (i = void 0), e.apply(r, n);
                    }, t));
                };
              })(this.resize, n)),
              this.wrapper instanceof Window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize();
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window &&
              this.debouncedResize &&
              window.removeEventListener("resize", this.debouncedResize, !1);
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      },
      Pp = class {
        events = {};
        emit(e, ...t) {
          let i = this.events[e] || [];
          for (let e = 0, n = i.length; e < n; e++) i[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      },
      Op = 100 / 6,
      Ip = { passive: !1 },
      Bp = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          (this.element = e),
            (this.options = t),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, Ip),
            this.element.addEventListener("touchstart", this.onTouchStart, Ip),
            this.element.addEventListener("touchmove", this.onTouchMove, Ip),
            this.element.addEventListener("touchend", this.onTouchEnd, Ip);
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new Pp();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, Ip),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              Ip,
            ),
            this.element.removeEventListener("touchmove", this.onTouchMove, Ip),
            this.element.removeEventListener("touchend", this.onTouchEnd, Ip);
        }
        onTouchStart = (e) => {
          const { clientX: t, clientY: i } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        };
        onTouchMove = (e) => {
          const { clientX: t, clientY: i } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            n = -(t - this.touchStart.x) * this.options.touchMultiplier,
            r = -(i - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: n, y: r }),
            this.emitter.emit("scroll", { deltaX: n, deltaY: r, event: e });
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: i, deltaMode: n } = e;
          (t *= 1 === n ? Op : 2 === n ? this.window.width : 1),
            (i *= 1 === n ? Op : 2 === n ? this.window.height : 1),
            (t *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        };
      },
      Np = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new kp();
        emitter = new Pp();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = window,
          content: t = document.documentElement,
          eventsTarget: i = e,
          smoothWheel: n = !0,
          syncTouch: r = !1,
          syncTouchLerp: s = 0.075,
          touchInertiaMultiplier: o = 35,
          duration: a,
          easing: l = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          lerp: u = 0.1,
          infinite: c = !1,
          orientation: d = "vertical",
          gestureOrientation: h = "vertical",
          touchMultiplier: p = 1,
          wheelMultiplier: f = 1,
          autoResize: m = !0,
          prevent: g,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: D = !1,
          anchors: w = !1,
          __experimental__naiveDimensions: _ = !1,
        } = {}) {
          (window.lenisVersion = "1.1.20"),
            (e && e !== document.documentElement) || (e = window),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: i,
              smoothWheel: n,
              syncTouch: r,
              syncTouchLerp: s,
              touchInertiaMultiplier: o,
              duration: a,
              easing: l,
              lerp: u,
              infinite: c,
              gestureOrientation: h,
              orientation: d,
              touchMultiplier: p,
              wheelMultiplier: f,
              autoResize: m,
              prevent: g,
              virtualScroll: v,
              overscroll: y,
              autoRaf: D,
              anchors: w,
              __experimental__naiveDimensions: _,
            }),
            (this.dimensions = new Lp(e, t, { autoResize: m })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.addEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.addEventListener("click", this.onClick, !1),
            this.options.wrapper.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            (this.virtualScroll = new Bp(i, {
              touchMultiplier: p,
              wheelMultiplier: f,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.removeEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.removeEventListener(
                "click",
                this.onClick,
                !1,
              ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this.__rafID && cancelAnimationFrame(this.__rafID);
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
            e.stopPropagation();
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
            : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
        }
        onClick = (e) => {
          const t = e
            .composedPath()
            .find(
              (e) =>
                e instanceof HTMLAnchorElement &&
                e.getAttribute("href")?.startsWith("#"),
            );
          if (t) {
            const e = t.getAttribute("href");
            if (e) {
              const t =
                "object" == typeof this.options.anchors && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(e, t);
            }
          }
        };
        onPointerDown = (e) => {
          1 === e.button && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            "function" == typeof this.options.virtualScroll &&
            !1 === this.options.virtualScroll(e)
          )
            return;
          const { deltaX: t, deltaY: i, event: n } = e;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: i,
              event: n,
            }),
            n.ctrlKey)
          )
            return;
          if (n.lenisStopPropagation) return;
          const r = n.type.includes("touch"),
            s = n.type.includes("wheel");
          this.isTouching = "touchstart" === n.type || "touchmove" === n.type;
          const o = 0 === t && 0 === i;
          if (
            this.options.syncTouch &&
            r &&
            "touchstart" === n.type &&
            o &&
            !this.isStopped &&
            !this.isLocked
          )
            return void this.reset();
          const a =
            ("vertical" === this.options.gestureOrientation && 0 === i) ||
            ("horizontal" === this.options.gestureOrientation && 0 === t);
          if (o || a) return;
          let l = n.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          const u = this.options.prevent;
          if (
            l.find(
              (e) =>
                e instanceof HTMLElement &&
                (("function" == typeof u && u?.(e)) ||
                  e.hasAttribute?.("data-lenis-prevent") ||
                  (r && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (s && e.hasAttribute?.("data-lenis-prevent-wheel"))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) return void n.preventDefault();
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          )
            return (
              (this.isScrolling = "native"),
              this.animate.stop(),
              void (n.lenisStopPropagation = !0)
            );
          let c = i;
          "both" === this.options.gestureOrientation
            ? (c = Math.abs(i) > Math.abs(t) ? i : t)
            : "horizontal" === this.options.gestureOrientation && (c = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (0 === this.animatedScroll && i > 0) ||
                  (this.animatedScroll === this.limit && i < 0)))) &&
              (n.lenisStopPropagation = !0),
            n.preventDefault();
          const d = r && this.options.syncTouch,
            h = r && "touchend" === n.type && Math.abs(c) > 5;
          h && (c = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + c, {
              programmatic: !1,
              ...(d
                ? { lerp: h ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        };
        resize() {
          this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (
            (null !== this._resetVelocityTimeout &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          )
            this._preventNextNativeScrollEvent = !1;
          else if (!1 === this.isScrolling || "native" === this.isScrolling) {
            const e = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              0 !== this.velocity &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        };
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop();
        }
        start() {
          this.isStopped && (this.reset(), (this.isStopped = !1));
        }
        stop() {
          this.isStopped || (this.reset(), (this.isStopped = !0));
        }
        raf = (e) => {
          const t = e - (this.time || e);
          (this.time = e),
            this.animate.advance(0.001 * t),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: i = !1,
            lock: n = !1,
            duration: r = this.options.duration,
            easing: s = this.options.easing,
            lerp: o = this.options.lerp,
            onStart: a,
            onComplete: l,
            force: u = !1,
            programmatic: c = !0,
            userData: d,
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || u) {
            if ("string" == typeof e && ["top", "left", "start"].includes(e))
              e = 0;
            else if (
              "string" == typeof e &&
              ["bottom", "right", "end"].includes(e)
            )
              e = this.limit;
            else {
              let i;
              if (
                ("string" == typeof e
                  ? (i = document.querySelector(e))
                  : e instanceof HTMLElement && e?.nodeType && (i = e),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  const e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                const n = i.getBoundingClientRect();
                e = (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof e) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = Fp(0, e, this.limit)),
                e === this.targetScroll)
              )
                return a?.(this), void l?.(this);
              if (((this.userData = d ?? {}), i))
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  void requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  })
                );
              c || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: r,
                  easing: s,
                  lerp: o,
                  onStart: () => {
                    n && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      a?.(this);
                  },
                  onUpdate: (e, t) => {
                    (this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      c && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        l?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent());
                  },
                });
            }
          }
        }
        preventNextNativeScrollEvent() {
          (this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            });
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          const e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let e = "lenis";
          return (
            this.isStopped && (e += " lenis-stopped"),
            this.isLocked && (e += " lenis-locked"),
            this.isScrolling && (e += " lenis-scrolling"),
            "smooth" === this.isScrolling && (e += " lenis-smooth"),
            e
          );
        }
        updateClassName() {
          this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim());
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      };
    var Rp = {
      scrolled: 0,
      direction: "DOWN",
      scroller: null,
      disableEvents: !1,
      lenis: null,
      init() {
        const e = this;
        (e.lenis = new Np()),
          e.lenis.on("scroll", Ju.update),
          $n.ticker.add((t) => {
            e.lenis.raf(1e3 * t);
          }),
          $n.ticker.lagSmoothing(0),
          e.lenis.on("scroll", e.handle),
          document.querySelectorAll("[data-scroll-top]").forEach((t) => {
            t.addEventListener("click", (t) => {
              t.preventDefault(), e.scrollTop(!0);
            });
          });
      },
      handle(e) {
        const t = this;
        (t.scrolled = e?.targetScroll || window.scrollY),
          (t.direction = 1 === e?.direction ? "DOWN" : "UP"),
          "UP" === t.direction
            ? (document.body.classList.add("scrolling-up"),
              document.body.classList.remove("scrolling-down"))
            : (document.body.classList.add("scrolling-down"),
              document.body.classList.remove("scrolling-up")),
          t.scrolled > window.innerHeight
            ? document.body.classList.add("viewport-scrolled")
            : document.body.classList.remove("viewport-scrolled"),
          t.scrolled > 100
            ? document.body.classList.add("scrolled")
            : document.body.classList.remove("scrolled"),
          (t.lastScrollPos = t.scrolled <= 0 ? 0 : t.scrolled);
      },
      disable() {
        this.lenis?.stop();
      },
      enable() {
        this.lenis?.start();
      },
      scrollTo(e) {
        this.lenis?.scrollTo(e, {
          offset: -1 * document.querySelector("#header").offsetHeight,
        });
      },
      scrollTop() {
        this.lenis?.scrollTo(0);
      },
      kill() {
        Ju.killAll();
      },
      refresh() {
        Ju.refresh();
      },
    };
    __webpack_require__(4);
    const { slideDown: zp, slideUp: qp, slideToggle: Vp } = window.domSlider,
      Yp = {
        init() {
          const e = this;
          (e.el = document.querySelectorAll(".accordion-item")),
            e.el.length &&
              e.el.forEach((e) => {
                e.querySelector(".accordion-item-title").addEventListener(
                  "click",
                  function () {
                    const t = this;
                    if (!e.classList.contains("blocked")) {
                      const i = e;
                      if (i.classList.contains("open"))
                        i.classList.remove("open"),
                          t.setAttribute("data-collapsed", !0),
                          qp({
                            element: t.parentElement.querySelector(
                              ".accordion-item-content",
                            ),
                            slideSpeed: 300,
                          }).then(() => {
                            Rp.refresh();
                          });
                      else {
                        if (t.dataset.collapseSiblings) {
                          const e = t.closest(".accordion-item");
                          e.parentElement
                            .querySelectorAll(".accordion-item.open")
                            .forEach((t) => {
                              if (t !== e) {
                                t.classList.remove("open"),
                                  t
                                    .querySelector(".accordion-item-title")
                                    .setAttribute("data-collapsed", "true");
                                const e = t.querySelector(
                                  ".accordion-item-content",
                                );
                                e &&
                                  qp({ element: e, slideSpeed: 300 }).then(
                                    () => {
                                      Rp.refresh();
                                    },
                                  );
                              }
                            });
                        }
                        i.classList.add("open"),
                          t.setAttribute("data-collapsed", !1),
                          zp({
                            element: t.parentElement.querySelector(
                              ".accordion-item-content",
                            ),
                            slideSpeed: 300,
                          }).then(() => {
                            Rp.refresh();
                          });
                      }
                      const n = new MouseEvent("mouseover", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                      });
                      t.dispatchEvent(n);
                    }
                  },
                );
              });
        },
      };
    var Hp = Yp;
    function Xp(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function Wp(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {});
      const i = ["__proto__", "constructor", "prototype"];
      Object.keys(t)
        .filter((e) => i.indexOf(e) < 0)
        .forEach((i) => {
          void 0 === e[i]
            ? (e[i] = t[i])
            : Xp(t[i]) &&
              Xp(e[i]) &&
              Object.keys(t[i]).length > 0 &&
              Wp(e[i], t[i]);
        });
    }
    const $p = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return { initEvent() {} };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          },
        };
      },
      createElementNS() {
        return {};
      },
      importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Gp() {
      const e = "undefined" != typeof document ? document : {};
      return Wp(e, $p), e;
    }
    const jp = {
      document: $p,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return "";
          },
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia() {
        return {};
      },
      requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout
          ? (e(), null)
          : setTimeout(e, 0);
      },
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function Up() {
      const e = "undefined" != typeof window ? window : {};
      return Wp(e, jp), e;
    }
    function Qp(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function Kp() {
      return Date.now();
    }
    function Zp(e, t) {
      void 0 === t && (t = "x");
      const i = Up();
      let n, r, s;
      const o = (function (e) {
        const t = Up();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (s = new i.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((s =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = s.toString().split(","))),
        "x" === t &&
          (r = i.WebKitCSSMatrix
            ? s.m41
            : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
        "y" === t &&
          (r = i.WebKitCSSMatrix
            ? s.m42
            : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
        r || 0
      );
    }
    function Jp(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function ef() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const i = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = i.length; t < n; t += 1) {
            const n = i[t],
              s = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== s &&
              s.enumerable &&
              (Jp(e[n]) && Jp(r[n])
                ? r[n].__swiper__
                  ? (e[n] = r[n])
                  : ef(e[n], r[n])
                : !Jp(e[n]) && Jp(r[n])
                  ? ((e[n] = {}),
                    r[n].__swiper__ ? (e[n] = r[n]) : ef(e[n], r[n]))
                  : (e[n] = r[n]));
          }
        }
      }
      var i;
      return e;
    }
    function tf(e, t, i) {
      e.style.setProperty(t, i);
    }
    function nf(e) {
      let { swiper: t, targetPosition: i, side: n } = e;
      const r = Up(),
        s = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const u = i > s ? "next" : "prev",
        c = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
        d = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            u = 0.5 - Math.cos(e * Math.PI) / 2;
          let h = s + u * (i - s);
          if ((c(h, i) && (h = i), t.wrapperEl.scrollTo({ [n]: h }), c(h, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [n]: h });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(d);
        };
      d();
    }
    function rf(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowRoot &&
          e.shadowRoot.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function sf(e, t) {
      void 0 === t && (t = "");
      const i = Up(),
        n = [...e.children];
      return (
        i.HTMLSlotElement &&
          e instanceof HTMLSlotElement &&
          n.push(...e.assignedElements()),
        t ? n.filter((e) => e.matches(t)) : n
      );
    }
    function of(e) {
      try {
        return;
      } catch (e) {}
    }
    function af(e, t) {
      void 0 === t && (t = []);
      const i = document.createElement(e);
      return (
        i.classList.add(
          ...(Array.isArray(t)
            ? t
            : (function (e) {
                return (
                  void 0 === e && (e = ""),
                  e
                    .trim()
                    .split(" ")
                    .filter((e) => !!e.trim())
                );
              })(t)),
        ),
        i
      );
    }
    function lf(e, t) {
      return Up().getComputedStyle(e, null).getPropertyValue(t);
    }
    function uf(e) {
      let t,
        i = e;
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    }
    function cf(e, t) {
      t &&
        e.addEventListener("transitionend", function i(n) {
          n.target === e &&
            (t.call(e, n), e.removeEventListener("transitionend", i));
        });
    }
    function df(e, t, i) {
      const n = Up();
      return i
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              n
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-right" : "margin-top",
                ),
            ) +
            parseFloat(
              n
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom",
                ),
            )
        : e.offsetWidth;
    }
    function hf(e) {
      return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
    }
    let pf, ff, mf;
    function gf() {
      return (
        pf ||
          (pf = (function () {
            const e = Up(),
              t = Gp();
            return {
              smoothScroll:
                t.documentElement &&
                t.documentElement.style &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        pf
      );
    }
    function vf(e) {
      return (
        void 0 === e && (e = {}),
        ff ||
          (ff = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = gf(),
              n = Up(),
              r = n.navigator.platform,
              s = t || n.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = n.screen.width,
              l = n.screen.height,
              u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = s.match(/(iPad).*OS\s([\d_]+)/);
            const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === r;
            let f = "MacIntel" === r;
            return (
              !c &&
                f &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((c = s.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              u && !p && ((o.os = "android"), (o.android = !0)),
              (c || h || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        ff
      );
    }
    function yf() {
      return (
        mf ||
          (mf = (function () {
            const e = Up(),
              t = vf();
            let i = !1;
            function n() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (n()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, n] = t
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                i = e < 16 || (16 === e && n < 2);
              }
            }
            const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent,
              ),
              s = n();
            return {
              isSafari: i || s,
              needPerspectiveFix: i,
              need3dFix: s || (r && t.ios),
              isWebView: r,
            };
          })()),
        mf
      );
    }
    var Df = {
      on(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const r = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][r](t);
          }),
          n
        );
      },
      once(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function r() {
          n.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
          t.apply(n, s);
        }
        return (r.__emitterProxy = t), n.on(e, r, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const n = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((n, r) => {
                      (n === t ||
                        (n.__emitterProxy && n.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(r, 1);
                    });
              }),
              i)
            : i;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, i, n;
        for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
          s[o] = arguments[o];
        "string" == typeof s[0] || Array.isArray(s[0])
          ? ((t = s[0]), (i = s.slice(1, s.length)), (n = e))
          : ((t = s[0].events), (i = s[0].data), (n = s[0].context || e)),
          i.unshift(n);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(n, [t, ...i]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          e
        );
      },
    };
    const wf = (e, t, i) => {
      t && !e.classList.contains(i)
        ? e.classList.add(i)
        : !t && e.classList.contains(i) && e.classList.remove(i);
    };
    const _f = (e, t, i) => {
      t && !e.classList.contains(i)
        ? e.classList.add(i)
        : !t && e.classList.contains(i) && e.classList.remove(i);
    };
    const xf = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const i = t.closest(
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        );
        if (i) {
          let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
          !t &&
            e.isElement &&
            (i.shadowRoot
              ? (t = i.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                ))
              : requestAnimationFrame(() => {
                  i.shadowRoot &&
                    ((t = i.shadowRoot.querySelector(
                      `.${e.params.lazyPreloaderClass}`,
                    )),
                    t && t.remove());
                })),
            t && t.remove();
        }
      },
      bf = (e, t) => {
        if (!e.slides[t]) return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading");
      },
      Ef = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0) return;
        t = Math.min(t, i);
        const n =
            "auto" === e.params.slidesPerView
              ? e.slidesPerViewDynamic()
              : Math.ceil(e.params.slidesPerView),
          r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
          const i = r,
            s = [i - t];
          return (
            s.push(...Array.from({ length: t }).map((e, t) => i + n + t)),
            void e.slides.forEach((t, i) => {
              s.includes(t.column) && bf(e, i);
            })
          );
        }
        const s = r + n - 1;
        if (e.params.rewind || e.params.loop)
          for (let n = r - t; n <= s + t; n += 1) {
            const t = ((n % i) + i) % i;
            (t < r || t > s) && bf(e, t);
          }
        else
          for (let n = Math.max(r - t, 0); n <= Math.min(s + t, i - 1); n += 1)
            n !== r && (n > s || n < r) && bf(e, n);
      };
    var Sf = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(lf(n, "padding-left") || 0, 10) -
              parseInt(lf(n, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(lf(n, "padding-top") || 0, 10) -
              parseInt(lf(n, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t, i) {
          return parseFloat(t.getPropertyValue(e.getDirectionLabel(i)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: s,
            rtlTranslate: o,
            wrongRTL: a,
          } = e,
          l = e.virtual && i.virtual.enabled,
          u = l ? e.virtual.slides.length : e.slides.length,
          c = sf(r, `.${e.params.slideClass}, swiper-slide`),
          d = l ? e.virtual.slides.length : c.length;
        let h = [];
        const p = [],
          f = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let D = i.spaceBetween,
          w = -m,
          _ = 0,
          x = 0;
        if (void 0 === s) return;
        "string" == typeof D && D.indexOf("%") >= 0
          ? (D = (parseFloat(D.replace("%", "")) / 100) * s)
          : "string" == typeof D && (D = parseFloat(D)),
          (e.virtualSize = -D),
          c.forEach((e) => {
            o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (tf(n, "--swiper-centered-offset-before", ""),
            tf(n, "--swiper-centered-offset-after", ""));
        const b = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        b ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const S =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView,
          ).length > 0;
        for (let n = 0; n < d; n += 1) {
          let r;
          if (
            ((E = 0),
            c[n] && (r = c[n]),
            b && e.grid.updateSlide(n, r, c),
            !c[n] || "none" !== lf(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              S && (c[n].style[e.getDirectionLabel("width")] = "");
              const s = getComputedStyle(r),
                o = r.style.transform,
                a = r.style.webkitTransform;
              if (
                (o && (r.style.transform = "none"),
                a && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? df(r, "width", !0) : df(r, "height", !0);
              else {
                const e = t(s, "width"),
                  i = t(s, "padding-left"),
                  n = t(s, "padding-right"),
                  o = t(s, "margin-left"),
                  a = t(s, "margin-right"),
                  l = s.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + o + a;
                else {
                  const { clientWidth: t, offsetWidth: s } = r;
                  E = e + i + n + o + a + (s - t);
                }
              }
              o && (r.style.transform = o),
                a && (r.style.webkitTransform = a),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (s - (i.slidesPerView - 1) * D) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                c[n] && (c[n].style[e.getDirectionLabel("width")] = `${E}px`);
            c[n] && (c[n].swiperSlideSize = E),
              f.push(E),
              i.centeredSlides
                ? ((w = w + E / 2 + _ / 2 + D),
                  0 === _ && 0 !== n && (w = w - s / 2 - D),
                  0 === n && (w = w - s / 2 - D),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && h.push(w),
                  p.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  p.push(w),
                  (w = w + E + D)),
              (e.virtualSize += E + D),
              (_ = E),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + g),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + D}px`),
          i.setWrapperSize &&
            (n.style[e.getDirectionLabel("width")] = `${e.virtualSize + D}px`),
          b && e.grid.updateWrapperSize(E, h),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < h.length; n += 1) {
            let r = h[n];
            i.roundLengths && (r = Math.floor(r)),
              h[n] <= e.virtualSize - s && t.push(r);
          }
          (h = t),
            Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - s);
        }
        if (l && i.loop) {
          const t = f[0] + D;
          if (i.slidesPerGroup > 1) {
            const n = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup,
              ),
              r = t * i.slidesPerGroup;
            for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + r);
          }
          for (
            let n = 0;
            n < e.virtual.slidesBefore + e.virtual.slidesAfter;
            n += 1
          )
            1 === i.slidesPerGroup && h.push(h[h.length - 1] + t),
              p.push(p[p.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === h.length && (h = [0]), 0 !== D)) {
          const t =
            e.isHorizontal() && o
              ? "marginLeft"
              : e.getDirectionLabel("marginRight");
          c.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== c.length - 1,
          ).forEach((e) => {
            e.style[t] = `${D}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (D || 0);
          }),
            (e -= D);
          const t = e > s ? e - s : 0;
          h = h.map((e) => (e <= 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          f.forEach((t) => {
            e += t + (D || 0);
          }),
            (e -= D);
          const t = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
          if (e + t < s) {
            const i = (s - e - t) / 2;
            h.forEach((e, t) => {
              h[t] = e - i;
            }),
              p.forEach((e, t) => {
                p[t] = e + i;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          tf(n, "--swiper-centered-offset-before", -h[0] + "px"),
            tf(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px",
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (d !== u && e.emit("slidesLengthChange"),
          h.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          e.emit("slidesUpdated"),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.el.classList.contains(t);
          d <= i.maxBackfaceHiddenSlides
            ? n || e.el.classList.add(t)
            : n && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          n = t.virtual && t.params.virtual.enabled;
        let r,
          s = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) => (n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !n) break;
              i.push(o(e));
            }
        else i.push(o(t.activeIndex));
        for (r = 0; r < i.length; r += 1)
          if (void 0 !== i[r]) {
            const e = i[r].offsetHeight;
            s = e > s ? e : s;
          }
        (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset =
            (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: r, snapGrid: s } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        r && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
        let a = i.spaceBetween;
        "string" == typeof a && a.indexOf("%") >= 0
          ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
          : "string" == typeof a && (a = parseFloat(a));
        for (let e = 0; e < n.length; e += 1) {
          const l = n[e];
          let u = l.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (u -= n[0].swiperSlideOffset);
          const c =
              (o + (i.centeredSlides ? t.minTranslate() : 0) - u) /
              (l.swiperSlideSize + a),
            d =
              (o - s[0] + (i.centeredSlides ? t.minTranslate() : 0) - u) /
              (l.swiperSlideSize + a),
            h = -(o - u),
            p = h + t.slidesSizesGrid[e],
            f = h >= 0 && h <= t.size - t.slidesSizesGrid[e],
            m =
              (h >= 0 && h < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (h <= 0 && p >= t.size);
          m && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)),
            wf(l, m, i.slideVisibleClass),
            wf(l, f, i.slideFullyVisibleClass),
            (l.progress = r ? -c : c),
            (l.originalProgress = r ? -d : d);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = t;
        const l = s,
          u = o;
        if (0 === n) (r = 0), (s = !0), (o = !0);
        else {
          r = (e - t.minTranslate()) / n;
          const i = Math.abs(e - t.minTranslate()) < 1,
            a = Math.abs(e - t.maxTranslate()) < 1;
          (s = i || r <= 0), (o = a || r >= 1), i && (r = 0), a && (r = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            n = t.getSlideIndexByData(t.slides.length - 1),
            r = t.slidesGrid[i],
            s = t.slidesGrid[n],
            o = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (a = l >= r ? (l - r) / o : (l + o - s) / o), a > 1 && (a -= 1);
        }
        Object.assign(t, {
          progress: r,
          progressLoop: a,
          isBeginning: s,
          isEnd: o,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          s && !l && t.emit("reachBeginning toEdge"),
          o && !u && t.emit("reachEnd toEdge"),
          ((l && !s) || (u && !o)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: n, activeIndex: r } = e,
          s = e.virtual && i.virtual.enabled,
          o = e.grid && i.grid && i.grid.rows > 1,
          a = (e) => sf(n, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let l, u, c;
        if (s)
          if (i.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (l = a(`[data-swiper-slide-index="${t}"]`));
          } else l = a(`[data-swiper-slide-index="${r}"]`);
        else
          o
            ? ((l = t.find((e) => e.column === r)),
              (c = t.find((e) => e.column === r + 1)),
              (u = t.find((e) => e.column === r - 1)))
            : (l = t[r]);
        l &&
          (o ||
            ((c = (function (e, t) {
              const i = [];
              for (; e.nextElementSibling; ) {
                const n = e.nextElementSibling;
                t ? n.matches(t) && i.push(n) : i.push(n), (e = n);
              }
              return i;
            })(l, `.${i.slideClass}, swiper-slide`)[0]),
            i.loop && !c && (c = t[0]),
            (u = (function (e, t) {
              const i = [];
              for (; e.previousElementSibling; ) {
                const n = e.previousElementSibling;
                t ? n.matches(t) && i.push(n) : i.push(n), (e = n);
              }
              return i;
            })(l, `.${i.slideClass}, swiper-slide`)[0]),
            i.loop && 0 === !u && (u = t[t.length - 1]))),
          t.forEach((e) => {
            _f(e, e === l, i.slideActiveClass),
              _f(e, e === c, i.slideNextClass),
              _f(e, e === u, i.slidePrevClass);
          }),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: n,
            params: r,
            activeIndex: s,
            realIndex: o,
            snapIndex: a,
          } = t;
        let l,
          u = e;
        const c = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === u &&
            (u = (function (e) {
              const { slidesGrid: t, params: i } = e,
                n = e.rtlTranslate ? e.translate : -e.translate;
              let r;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (r = e)
                    : n >= t[e] && n < t[e + 1] && (r = e + 1)
                  : n >= t[e] && (r = e);
              return (
                i.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
              );
            })(t)),
          n.indexOf(i) >= 0)
        )
          l = n.indexOf(i);
        else {
          const e = Math.min(r.slidesPerGroupSkip, u);
          l = e + Math.floor((u - e) / r.slidesPerGroup);
        }
        if ((l >= n.length && (l = n.length - 1), u === s && !t.params.loop))
          return void (
            l !== a && ((t.snapIndex = l), t.emit("snapIndexChange"))
          );
        if (u === s && t.params.loop && t.virtual && t.params.virtual.enabled)
          return void (t.realIndex = c(u));
        const d = t.grid && r.grid && r.grid.rows > 1;
        let h;
        if (t.virtual && r.virtual.enabled && r.loop) h = c(u);
        else if (d) {
          const e = t.slides.find((e) => e.column === u);
          let i = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(i) && (i = Math.max(t.slides.indexOf(e), 0)),
            (h = Math.floor(i / r.grid.rows));
        } else if (t.slides[u]) {
          const e = t.slides[u].getAttribute("data-swiper-slide-index");
          h = e ? parseInt(e, 10) : u;
        } else h = u;
        Object.assign(t, {
          previousSnapIndex: a,
          snapIndex: l,
          previousRealIndex: o,
          realIndex: h,
          previousIndex: s,
          activeIndex: u,
        }),
          t.initialized && Ef(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (o !== h && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const i = this,
          n = i.params;
        let r = e.closest(`.${n.slideClass}, swiper-slide`);
        !r &&
          i.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !r &&
              e.matches &&
              e.matches(`.${n.slideClass}, swiper-slide`) &&
              (r = e);
          });
        let s,
          o = !1;
        if (r)
          for (let e = 0; e < i.slides.length; e += 1)
            if (i.slides[e] === r) {
              (o = !0), (s = e);
              break;
            }
        if (!r || !o)
          return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
        (i.clickedSlide = r),
          i.virtual && i.params.virtual.enabled
            ? (i.clickedIndex = parseInt(
                r.getAttribute("data-swiper-slide-index"),
                10,
              ))
            : (i.clickedIndex = s),
          n.slideToClickedSlide &&
            void 0 !== i.clickedIndex &&
            i.clickedIndex !== i.activeIndex &&
            i.slideToClickedSlide();
      },
    };
    var Tf = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: n, wrapperEl: r } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let s = Zp(r, e);
        return (s += this.cssOverflowAdjustment()), i && (s = -s), s || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: n, params: r, wrapperEl: s, progress: o } = i;
        let a,
          l = 0,
          u = 0;
        i.isHorizontal() ? (l = n ? -e : e) : (u = e),
          r.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? l : u),
          r.cssMode
            ? (s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -l : -u)
            : r.virtualTranslate ||
              (i.isHorizontal()
                ? (l -= i.cssOverflowAdjustment())
                : (u -= i.cssOverflowAdjustment()),
              (s.style.transform = `translate3d(${l}px, ${u}px, 0px)`));
        const c = i.maxTranslate() - i.minTranslate();
        (a = 0 === c ? 0 : (e - i.minTranslate()) / c),
          a !== o && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, n, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === n && (n = !0);
        const s = this,
          { params: o, wrapperEl: a } = s;
        if (s.animating && o.preventInteractionOnTransition) return !1;
        const l = s.minTranslate(),
          u = s.maxTranslate();
        let c;
        if (
          ((c = n && e > l ? l : n && e < u ? u : e),
          s.updateProgress(c),
          o.cssMode)
        ) {
          const e = s.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!s.support.smoothScroll)
              return (
                nf({ swiper: s, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(c),
              i &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionEnd")))
            : (s.setTransition(t),
              s.setTranslate(c),
              i &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionStart")),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.wrapperEl.removeEventListener(
                        "transitionend",
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      (s.animating = !1),
                      i && s.emit("transitionEnd"));
                  }),
                s.wrapperEl.addEventListener(
                  "transitionend",
                  s.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      },
    };
    function Cf(e) {
      let { swiper: t, runCallbacks: i, direction: n, step: r } = e;
      const { activeIndex: s, previousIndex: o } = t;
      let a = n;
      if (
        (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
        t.emit(`transition${r}`),
        i && s !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === a
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    var Mf = {
      slideTo: function (e, t, i, n, r) {
        void 0 === e && (e = 0),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const s = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: u,
          previousIndex: c,
          activeIndex: d,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: f,
        } = s;
        if (
          (!f && !n && !r) ||
          s.destroyed ||
          (s.animating && a.preventInteractionOnTransition)
        )
          return !1;
        void 0 === t && (t = s.params.speed);
        const m = Math.min(s.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / s.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < u.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * u[e]),
              n = Math.floor(100 * u[e + 1]);
            void 0 !== u[e + 1]
              ? t >= i && t < n - (n - i) / 2
                ? (o = e)
                : t >= i && t < n && (o = e + 1)
              : t >= i && (o = e);
          }
        if (s.initialized && o !== d) {
          if (
            !s.allowSlideNext &&
            (h
              ? v > s.translate && v > s.minTranslate()
              : v < s.translate && v < s.minTranslate())
          )
            return !1;
          if (
            !s.allowSlidePrev &&
            v > s.translate &&
            v > s.maxTranslate() &&
            (d || 0) !== o
          )
            return !1;
        }
        let y;
        o !== (c || 0) && i && s.emit("beforeSlideChangeStart"),
          s.updateProgress(v),
          (y = o > d ? "next" : o < d ? "prev" : "reset");
        const D = s.virtual && s.params.virtual.enabled;
        if (
          !(D && r) &&
          ((h && -v === s.translate) || (!h && v === s.translate))
        )
          return (
            s.updateActiveIndex(o),
            a.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== a.effect && s.setTranslate(v),
            "reset" !== y && (s.transitionStart(i, y), s.transitionEnd(i, y)),
            !1
          );
        if (a.cssMode) {
          const e = s.isHorizontal(),
            i = h ? v : -v;
          if (0 === t)
            D &&
              ((s.wrapperEl.style.scrollSnapType = "none"),
              (s._immediateVirtual = !0)),
              D && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
                ? ((s._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    p[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (p[e ? "scrollLeft" : "scrollTop"] = i),
              D &&
                requestAnimationFrame(() => {
                  (s.wrapperEl.style.scrollSnapType = ""),
                    (s._immediateVirtual = !1);
                });
          else {
            if (!s.support.smoothScroll)
              return (
                nf({ swiper: s, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        const w = yf().isSafari;
        return (
          D && !r && w && s.isElement && s.virtual.update(!1, !1, o),
          s.setTransition(t),
          s.setTranslate(v),
          s.updateActiveIndex(o),
          s.updateSlidesClasses(),
          s.emit("beforeTransitionStart", t, n),
          s.transitionStart(i, y),
          0 === t
            ? s.transitionEnd(i, y)
            : s.animating ||
              ((s.animating = !0),
              s.onSlideToWrapperTransitionEnd ||
                (s.onSlideToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onSlideToWrapperTransitionEnd,
                    ),
                    (s.onSlideToWrapperTransitionEnd = null),
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(i, y));
                }),
              s.wrapperEl.addEventListener(
                "transitionend",
                s.onSlideToWrapperTransitionEnd,
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === i && (i = !0),
          "string" == typeof e)
        ) {
          e = parseInt(e, 10);
        }
        const r = this;
        if (r.destroyed) return;
        void 0 === t && (t = r.params.speed);
        const s = r.grid && r.params.grid && r.params.grid.rows > 1;
        let o = e;
        if (r.params.loop)
          if (r.virtual && r.params.virtual.enabled)
            o += r.virtual.slidesBefore;
          else {
            let e;
            if (s) {
              const t = o * r.params.grid.rows;
              e = r.slides.find(
                (e) => 1 * e.getAttribute("data-swiper-slide-index") === t,
              ).column;
            } else e = r.getSlideIndexByData(o);
            const t = s
                ? Math.ceil(r.slides.length / r.params.grid.rows)
                : r.slides.length,
              { centeredSlides: i } = r.params;
            let a = r.params.slidesPerView;
            "auto" === a
              ? (a = r.slidesPerViewDynamic())
              : ((a = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                i && a % 2 == 0 && (a += 1));
            let l = t - e < a;
            if (
              (i && (l = l || e < Math.ceil(a / 2)),
              n && i && "auto" !== r.params.slidesPerView && !s && (l = !1),
              l)
            ) {
              const n = i
                ? e < r.activeIndex
                  ? "prev"
                  : "next"
                : e - r.activeIndex - 1 < r.params.slidesPerView
                  ? "next"
                  : "prev";
              r.loopFix({
                direction: n,
                slideTo: !0,
                activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                slideRealIndex: "next" === n ? r.realIndex : void 0,
              });
            }
            if (s) {
              const e = o * r.params.grid.rows;
              o = r.slides.find(
                (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
              ).column;
            } else o = r.getSlideIndexByData(o);
          }
        return (
          requestAnimationFrame(() => {
            r.slideTo(o, t, i, n);
          }),
          r
        );
      },
      slideNext: function (e, t, i) {
        void 0 === t && (t = !0);
        const n = this,
          { enabled: r, params: s, animating: o } = n;
        if (!r || n.destroyed) return n;
        void 0 === e && (e = n.params.speed);
        let a = s.slidesPerGroup;
        "auto" === s.slidesPerView &&
          1 === s.slidesPerGroup &&
          s.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : a,
          u = n.virtual && s.virtual.enabled;
        if (s.loop) {
          if (o && !u && s.loopPreventsSliding) return !1;
          if (
            (n.loopFix({ direction: "next" }),
            (n._clientLeft = n.wrapperEl.clientLeft),
            n.activeIndex === n.slides.length - 1 && s.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                n.slideTo(n.activeIndex + l, e, t, i);
              }),
              !0
            );
        }
        return s.rewind && n.isEnd
          ? n.slideTo(0, e, t, i)
          : n.slideTo(n.activeIndex + l, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === t && (t = !0);
        const n = this,
          {
            params: r,
            snapGrid: s,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: l,
            animating: u,
          } = n;
        if (!l || n.destroyed) return n;
        void 0 === e && (e = n.params.speed);
        const c = n.virtual && r.virtual.enabled;
        if (r.loop) {
          if (u && !c && r.loopPreventsSliding) return !1;
          n.loopFix({ direction: "prev" }),
            (n._clientLeft = n.wrapperEl.clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = d(a ? n.translate : -n.translate),
          p = s.map((e) => d(e)),
          f = r.freeMode && r.freeMode.enabled;
        let m = s[p.indexOf(h) - 1];
        if (void 0 === m && (r.cssMode || f)) {
          let e;
          s.forEach((t, i) => {
            h >= t && (e = i);
          }),
            void 0 !== e && (m = f ? s[e] : s[e > 0 ? e - 1 : e]);
        }
        let g = 0;
        if (
          (void 0 !== m &&
            ((g = o.indexOf(m)),
            g < 0 && (g = n.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((g = g - n.slidesPerViewDynamic("previous", !0) + 1),
              (g = Math.max(g, 0)))),
          r.rewind && n.isBeginning)
        ) {
          const r =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(r, e, t, i);
        }
        return r.loop && 0 === n.activeIndex && r.cssMode
          ? (requestAnimationFrame(() => {
              n.slideTo(g, e, t, i);
            }),
            !0)
          : n.slideTo(g, e, t, i);
      },
      slideReset: function (e, t, i) {
        void 0 === t && (t = !0);
        const n = this;
        if (!n.destroyed)
          return (
            void 0 === e && (e = n.params.speed),
            n.slideTo(n.activeIndex, e, t, i)
          );
      },
      slideToClosest: function (e, t, i, n) {
        void 0 === t && (t = !0), void 0 === n && (n = 0.5);
        const r = this;
        if (r.destroyed) return;
        void 0 === e && (e = r.params.speed);
        let s = r.activeIndex;
        const o = Math.min(r.params.slidesPerGroupSkip, s),
          a = o + Math.floor((s - o) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[a]) {
          const e = r.snapGrid[a];
          l - e > (r.snapGrid[a + 1] - e) * n && (s += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[a - 1];
          l - e <= (r.snapGrid[a] - e) * n && (s -= r.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)),
          (s = Math.min(s, r.slidesGrid.length - 1)),
          r.slideTo(s, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this;
        if (e.destroyed) return;
        const { params: t, slidesEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          s = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10,
          )),
            t.centeredSlides
              ? s < e.loopedSlides - n / 2 ||
                s > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (s = e.getSlideIndex(
                    sf(i, `${o}[data-swiper-slide-index="${r}"]`)[0],
                  )),
                  Qp(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s)
              : s > e.slides.length - n
                ? (e.loopFix(),
                  (s = e.getSlideIndex(
                    sf(i, `${o}[data-swiper-slide-index="${r}"]`)[0],
                  )),
                  Qp(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
        } else e.slideTo(s);
      },
    };
    var Af = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: n } = t;
        if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
        const r = () => {
            sf(n, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
              e.setAttribute("data-swiper-slide-index", t);
            });
          },
          s = t.grid && i.grid && i.grid.rows > 1,
          o = i.slidesPerGroup * (s ? i.grid.rows : 1),
          a = t.slides.length % o != 0,
          l = s && t.slides.length % i.grid.rows != 0,
          u = (e) => {
            for (let n = 0; n < e; n += 1) {
              const e = t.isElement
                ? af("swiper-slide", [i.slideBlankClass])
                : af("div", [i.slideClass, i.slideBlankClass]);
              t.slidesEl.append(e);
            }
          };
        if (a) {
          if (i.loopAddBlankSlides) {
            u(o - (t.slides.length % o)), t.recalcSlides(), t.updateSlides();
          } else of();
          r();
        } else if (l) {
          if (i.loopAddBlankSlides) {
            u(i.grid.rows - (t.slides.length % i.grid.rows)),
              t.recalcSlides(),
              t.updateSlides();
          } else of();
          r();
        } else r();
        t.loopFix({
          slideRealIndex: e,
          direction: i.centeredSlides ? void 0 : "next",
        });
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: n,
          setTranslate: r,
          activeSlideIndex: s,
          byController: o,
          byMousewheel: a,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
            slides: u,
            allowSlidePrev: c,
            allowSlideNext: d,
            slidesEl: h,
            params: p,
          } = l,
          { centeredSlides: f } = p;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && p.virtual.enabled)
        )
          return (
            i &&
              (p.centeredSlides || 0 !== l.snapIndex
                ? p.centeredSlides && l.snapIndex < p.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = c),
            (l.allowSlideNext = d),
            void l.emit("loopFix")
          );
        let m = p.slidesPerView;
        "auto" === m
          ? (m = l.slidesPerViewDynamic())
          : ((m = Math.ceil(parseFloat(p.slidesPerView, 10))),
            f && m % 2 == 0 && (m += 1));
        const g = p.slidesPerGroupAuto ? m : p.slidesPerGroup;
        let v = g;
        v % g != 0 && (v += g - (v % g)),
          (v += p.loopAdditionalSlides),
          (l.loopedSlides = v);
        const y = l.grid && p.grid && p.grid.rows > 1;
        (u.length < m + v || (y && "row" === p.grid.fill)) && of();
        const D = [],
          w = [];
        let _ = l.activeIndex;
        void 0 === s
          ? (s = l.getSlideIndex(
              u.find((e) => e.classList.contains(p.slideActiveClass)),
            ))
          : (_ = s);
        const x = "next" === n || !n,
          b = "prev" === n || !n;
        let E = 0,
          S = 0;
        const T = y ? Math.ceil(u.length / p.grid.rows) : u.length,
          C = (y ? u[s].column : s) + (f && void 0 === r ? -m / 2 + 0.5 : 0);
        if (C < v) {
          E = Math.max(v - C, g);
          for (let e = 0; e < v - C; e += 1) {
            const t = e - Math.floor(e / T) * T;
            if (y) {
              const e = T - t - 1;
              for (let t = u.length - 1; t >= 0; t -= 1)
                u[t].column === e && D.push(t);
            } else D.push(T - t - 1);
          }
        } else if (C + m > T - v) {
          S = Math.max(C - (T - 2 * v), g);
          for (let e = 0; e < S; e += 1) {
            const t = e - Math.floor(e / T) * T;
            y
              ? u.forEach((e, i) => {
                  e.column === t && w.push(i);
                })
              : w.push(t);
          }
        }
        if (
          ((l.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            l.__preventObserver__ = !1;
          }),
          b &&
            D.forEach((e) => {
              (u[e].swiperLoopMoveDOM = !0),
                h.prepend(u[e]),
                (u[e].swiperLoopMoveDOM = !1);
            }),
          x &&
            w.forEach((e) => {
              (u[e].swiperLoopMoveDOM = !0),
                h.append(u[e]),
                (u[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === p.slidesPerView
            ? l.updateSlides()
            : y &&
              ((D.length > 0 && b) || (w.length > 0 && x)) &&
              l.slides.forEach((e, t) => {
                l.grid.updateSlide(t, e, l.slides);
              }),
          p.watchSlidesProgress && l.updateSlidesOffset(),
          i)
        )
          if (D.length > 0 && b) {
            if (void 0 === t) {
              const e = l.slidesGrid[_],
                t = l.slidesGrid[_ + E] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(_ + Math.ceil(E), 0, !1, !0),
                  r &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else if (r) {
              const e = y ? D.length / p.grid.rows : D.length;
              l.slideTo(l.activeIndex + e, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate);
            }
          } else if (w.length > 0 && x)
            if (void 0 === t) {
              const e = l.slidesGrid[_],
                t = l.slidesGrid[_ - S] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(_ - S, 0, !1, !0),
                  r &&
                    ((l.touchEventsData.startTranslate =
                      l.touchEventsData.startTranslate - t),
                    (l.touchEventsData.currentTranslate =
                      l.touchEventsData.currentTranslate - t)));
            } else {
              const e = y ? w.length / p.grid.rows : w.length;
              l.slideTo(l.activeIndex - e, 0, !1, !0);
            }
        if (
          ((l.allowSlidePrev = c),
          (l.allowSlideNext = d),
          l.controller && l.controller.control && !o)
        ) {
          const e = {
            slideRealIndex: t,
            direction: n,
            setTranslate: r,
            activeSlideIndex: s,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === p.slidesPerView && i,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    p.slidesPerView && i,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const n = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          n[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          n.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function Ff(e, t, i) {
      const n = Up(),
        { params: r } = e,
        s = r.edgeSwipeDetection,
        o = r.edgeSwipeThreshold;
      return (
        !s ||
        !(i <= o || i >= n.innerWidth - o) ||
        ("prevent" === s && (t.preventDefault(), !0))
      );
    }
    function kf(e) {
      const t = this,
        i = Gp();
      let n = e;
      n.originalEvent && (n = n.originalEvent);
      const r = t.touchEventsData;
      if ("pointerdown" === n.type) {
        if (null !== r.pointerId && r.pointerId !== n.pointerId) return;
        r.pointerId = n.pointerId;
      } else
        "touchstart" === n.type &&
          1 === n.targetTouches.length &&
          (r.touchId = n.targetTouches[0].identifier);
      if ("touchstart" === n.type)
        return void Ff(t, n, n.targetTouches[0].pageX);
      const { params: s, touches: o, enabled: a } = t;
      if (!a) return;
      if (!s.simulateTouch && "mouse" === n.pointerType) return;
      if (t.animating && s.preventInteractionOnTransition) return;
      !t.animating && s.cssMode && s.loop && t.loopFix();
      let l = n.target;
      if (
        "wrapper" === s.touchEventsTarget &&
        !(function (e, t) {
          const i = Up();
          let n = t.contains(e);
          !n &&
            i.HTMLSlotElement &&
            t instanceof HTMLSlotElement &&
            ((n = [...t.assignedElements()].includes(e)),
            n ||
              (n = (function (e, t) {
                const i = [t];
                for (; i.length > 0; ) {
                  const t = i.shift();
                  if (e === t) return !0;
                  i.push(
                    ...t.children,
                    ...(t.shadowRoot ? t.shadowRoot.children : []),
                    ...(t.assignedElements ? t.assignedElements() : []),
                  );
                }
              })(e, t)));
          return n;
        })(l, t.wrapperEl)
      )
        return;
      if ("which" in n && 3 === n.which) return;
      if ("button" in n && n.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const u = !!s.noSwipingClass && "" !== s.noSwipingClass,
        c = n.composedPath ? n.composedPath() : n.path;
      u && n.target && n.target.shadowRoot && c && (l = c[0]);
      const d = s.noSwipingSelector
          ? s.noSwipingSelector
          : `.${s.noSwipingClass}`,
        h = !(!n.target || !n.target.shadowRoot);
      if (
        s.noSwiping &&
        (h
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === Gp() || i === Up()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const n = i.closest(e);
                  return n || i.getRootNode
                    ? n || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(d, l)
          : l.closest(d))
      )
        return void (t.allowClick = !0);
      if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
      (o.currentX = n.pageX), (o.currentY = n.pageY);
      const p = o.currentX,
        f = o.currentY;
      if (!Ff(t, n, p)) return;
      Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (o.startX = p),
        (o.startY = f),
        (r.touchStartTime = Kp()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        s.threshold > 0 && (r.allowThresholdMove = !1);
      let m = !0;
      l.matches(r.focusableElements) &&
        ((m = !1), "SELECT" === l.nodeName && (r.isTouched = !1)),
        i.activeElement &&
          i.activeElement.matches(r.focusableElements) &&
          i.activeElement !== l &&
          ("mouse" === n.pointerType ||
            ("mouse" !== n.pointerType && !l.matches(r.focusableElements))) &&
          i.activeElement.blur();
      const g = m && t.allowTouchMove && s.touchStartPreventDefault;
      (!s.touchStartForcePreventDefault && !g) ||
        l.isContentEditable ||
        n.preventDefault(),
        s.freeMode &&
          s.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", n);
    }
    function Lf(e) {
      const t = Gp(),
        i = this,
        n = i.touchEventsData,
        { params: r, touches: s, rtlTranslate: o, enabled: a } = i;
      if (!a) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      let l,
        u = e;
      if (
        (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type)
      ) {
        if (null !== n.touchId) return;
        if (u.pointerId !== n.pointerId) return;
      }
      if ("touchmove" === u.type) {
        if (
          ((l = [...u.changedTouches].find((e) => e.identifier === n.touchId)),
          !l || l.identifier !== n.touchId)
        )
          return;
      } else l = u;
      if (!n.isTouched)
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", u)
        );
      const c = l.pageX,
        d = l.pageY;
      if (u.preventedByNestedSwiper) return (s.startX = c), void (s.startY = d);
      if (!i.allowTouchMove)
        return (
          u.target.matches(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(s, {
              startX: c,
              startY: d,
              currentX: c,
              currentY: d,
            }),
            (n.touchStartTime = Kp()))
          )
        );
      if (r.touchReleaseOnEdges && !r.loop)
        if (i.isVertical()) {
          if (
            (d < s.startY && i.translate <= i.maxTranslate()) ||
            (d > s.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (c < s.startX && i.translate <= i.maxTranslate()) ||
          (c > s.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        (t.activeElement &&
          t.activeElement.matches(n.focusableElements) &&
          t.activeElement !== u.target &&
          "mouse" !== u.pointerType &&
          t.activeElement.blur(),
        t.activeElement &&
          u.target === t.activeElement &&
          u.target.matches(n.focusableElements))
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      n.allowTouchCallbacks && i.emit("touchMove", u),
        (s.previousX = s.currentX),
        (s.previousY = s.currentY),
        (s.currentX = c),
        (s.currentY = d);
      const h = s.currentX - s.startX,
        p = s.currentY - s.startY;
      if (i.params.threshold && Math.sqrt(h ** 2 + p ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && s.currentY === s.startY) ||
        (i.isVertical() && s.currentX === s.startX)
          ? (n.isScrolling = !1)
          : h * h + p * p >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", u),
        void 0 === n.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (n.startMoving = !0)),
        n.isScrolling ||
          ("touchmove" === u.type && n.preventTouchMoveFromPointerMove))
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !r.cssMode && u.cancelable && u.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && u.stopPropagation();
      let f = i.isHorizontal() ? h : p,
        m = i.isHorizontal()
          ? s.currentX - s.previousX
          : s.currentY - s.previousY;
      r.oneWayMovement &&
        ((f = Math.abs(f) * (o ? 1 : -1)), (m = Math.abs(m) * (o ? 1 : -1))),
        (s.diff = f),
        (f *= r.touchRatio),
        o && ((f = -f), (m = -m));
      const g = i.touchesDirection;
      (i.swipeDirection = f > 0 ? "prev" : "next"),
        (i.touchesDirection = m > 0 ? "prev" : "next");
      const v = i.params.loop && !r.cssMode,
        y =
          ("next" === i.touchesDirection && i.allowSlideNext) ||
          ("prev" === i.touchesDirection && i.allowSlidePrev);
      if (!n.isMoved) {
        if (
          (v && y && i.loopFix({ direction: i.swipeDirection }),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
            detail: { bySwiperTouchMove: !0 },
          });
          i.wrapperEl.dispatchEvent(e);
        }
        (n.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", u);
      }
      if (
        (new Date().getTime(),
        !1 !== r._loopSwapReset &&
          n.isMoved &&
          n.allowThresholdMove &&
          g !== i.touchesDirection &&
          v &&
          y &&
          Math.abs(f) >= 1)
      )
        return (
          Object.assign(s, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d,
            startTranslate: n.currentTranslate,
          }),
          (n.loopSwapReset = !0),
          void (n.startTranslate = n.currentTranslate)
        );
      i.emit("sliderMove", u),
        (n.isMoved = !0),
        (n.currentTranslate = f + n.startTranslate);
      let D = !0,
        w = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (w = 0),
        f > 0
          ? (v &&
              y &&
              n.allowThresholdMove &&
              n.currentTranslate >
                (r.centeredSlides
                  ? i.minTranslate() -
                    i.slidesSizesGrid[i.activeIndex + 1] -
                    ("auto" !== r.slidesPerView &&
                    i.slides.length - r.slidesPerView >= 2
                      ? i.slidesSizesGrid[i.activeIndex + 1] +
                        i.params.spaceBetween
                      : 0) -
                    i.params.spaceBetween
                  : i.minTranslate()) &&
              i.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            n.currentTranslate > i.minTranslate() &&
              ((D = !1),
              r.resistance &&
                (n.currentTranslate =
                  i.minTranslate() -
                  1 +
                  (-i.minTranslate() + n.startTranslate + f) ** w)))
          : f < 0 &&
            (v &&
              y &&
              n.allowThresholdMove &&
              n.currentTranslate <
                (r.centeredSlides
                  ? i.maxTranslate() +
                    i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                    i.params.spaceBetween +
                    ("auto" !== r.slidesPerView &&
                    i.slides.length - r.slidesPerView >= 2
                      ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                        i.params.spaceBetween
                      : 0)
                  : i.maxTranslate()) &&
              i.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  i.slides.length -
                  ("auto" === r.slidesPerView
                    ? i.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(r.slidesPerView, 10))),
              }),
            n.currentTranslate < i.maxTranslate() &&
              ((D = !1),
              r.resistance &&
                (n.currentTranslate =
                  i.maxTranslate() +
                  1 -
                  (i.maxTranslate() - n.startTranslate - f) ** w))),
        D && (u.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(f) > r.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (n.currentTranslate = n.startTranslate),
            void (s.diff = i.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
          r.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        r.freeMode &&
          r.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function Pf(e) {
      const t = this,
        i = t.touchEventsData;
      let n,
        r = e;
      r.originalEvent && (r = r.originalEvent);
      if ("touchend" === r.type || "touchcancel" === r.type) {
        if (
          ((n = [...r.changedTouches].find((e) => e.identifier === i.touchId)),
          !n || n.identifier !== i.touchId)
        )
          return;
      } else {
        if (null !== i.touchId) return;
        if (r.pointerId !== i.pointerId) return;
        n = r;
      }
      if (
        ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
          r.type,
        )
      ) {
        if (
          !(
            ["pointercancel", "contextmenu"].includes(r.type) &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      (i.pointerId = null), (i.touchId = null);
      const {
        params: s,
        touches: o,
        rtlTranslate: a,
        slidesGrid: l,
        enabled: u,
      } = t;
      if (!u) return;
      if (!s.simulateTouch && "mouse" === r.pointerType) return;
      if (
        (i.allowTouchCallbacks && t.emit("touchEnd", r),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = Kp(),
        d = c - i.touchStartTime;
      if (t.allowClick) {
        const e = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((e && e[0]) || r.target, e),
          t.emit("tap click", r),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", r);
      }
      if (
        ((i.lastClickTime = Kp()),
        Qp(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          (0 === o.diff && !i.loopSwapReset) ||
          (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = s.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (s.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      const p = h >= -t.maxTranslate() && !t.params.loop;
      let f = 0,
        m = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < l.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== l[e + t]
          ? (p || (h >= l[e] && h < l[e + t])) &&
            ((f = e), (m = l[e + t] - l[e]))
          : (p || h >= l[e]) &&
            ((f = e), (m = l[l.length - 1] - l[l.length - 2]));
      }
      let g = null,
        v = null;
      s.rewind &&
        (t.isBeginning
          ? (v =
              s.virtual && s.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (g = 0));
      const y = (h - l[f]) / m,
        D = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (y >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? g : f + D)
            : t.slideTo(f)),
          "prev" === t.swipeDirection &&
            (y > 1 - s.longSwipesRatio
              ? t.slideTo(f + D)
              : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(f));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
          ? r.target === t.navigation.nextEl
            ? t.slideTo(f + D)
            : t.slideTo(f)
          : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + D),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : f));
      }
    }
    function Of() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: r, snapGrid: s } = e,
        o = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const a = o && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      a
        ? e.params.loop && !o
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(e.autoplay.resizeTimeout),
          (e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = n),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
    }
    function If(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Bf() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
      if (!n) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        r !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    function Nf(e) {
      const t = this;
      xf(t, e.target),
        t.params.cssMode ||
          ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
          t.update();
    }
    function Rf() {
      const e = this;
      e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
    }
    const zf = (e, t) => {
      const i = Gp(),
        { params: n, el: r, wrapperEl: s, device: o } = e,
        a = !!n.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      r &&
        "string" != typeof r &&
        (i[l]("touchstart", e.onDocumentTouchStart, {
          passive: !1,
          capture: a,
        }),
        r[l]("touchstart", e.onTouchStart, { passive: !1 }),
        r[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[l]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
        i[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
        i[l]("touchend", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        i[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (n.preventClicks || n.preventClicksPropagation) &&
          r[l]("click", e.onClick, !0),
        n.cssMode && s[l]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Of,
              !0,
            )
          : e[u]("observerUpdate", Of, !0),
        r[l]("load", e.onLoad, { capture: !0 }));
    };
    const qf = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var Vf = {
      setBreakpoint: function () {
        const e = this,
          { realIndex: t, initialized: i, params: n, el: r } = e,
          s = n.breakpoints;
        if (!s || (s && 0 === Object.keys(s).length)) return;
        const o = Gp(),
          a =
            "window" !== n.breakpointsBase && n.breakpointsBase
              ? "container"
              : n.breakpointsBase,
          l =
            ["window", "container"].includes(n.breakpointsBase) ||
            !n.breakpointsBase
              ? e.el
              : o.querySelector(n.breakpointsBase),
          u = e.getBreakpoint(s, a, l);
        if (!u || e.currentBreakpoint === u) return;
        const c = (u in s ? s[u] : void 0) || e.originalParams,
          d = qf(e, n),
          h = qf(e, c),
          p = e.params.grabCursor,
          f = c.grabCursor,
          m = n.enabled;
        d && !h
          ? (r.classList.remove(
              `${n.containerModifierClass}grid`,
              `${n.containerModifierClass}grid-column`,
            ),
            e.emitContainerClasses())
          : !d &&
            h &&
            (r.classList.add(`${n.containerModifierClass}grid`),
            ((c.grid.fill && "column" === c.grid.fill) ||
              (!c.grid.fill && "column" === n.grid.fill)) &&
              r.classList.add(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          p && !f ? e.unsetGrabCursor() : !p && f && e.setGrabCursor(),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            if (void 0 === c[t]) return;
            const i = n[t] && n[t].enabled,
              r = c[t] && c[t].enabled;
            i && !r && e[t].disable(), !i && r && e[t].enable();
          });
        const g = c.direction && c.direction !== n.direction,
          v = n.loop && (c.slidesPerView !== n.slidesPerView || g),
          y = n.loop;
        g && i && e.changeDirection(), ef(e.params, c);
        const D = e.params.enabled,
          w = e.params.loop;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          m && !D ? e.disable() : !m && D && e.enable(),
          (e.currentBreakpoint = u),
          e.emit("_beforeBreakpoint", c),
          i &&
            (v
              ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
              : !y && w
                ? (e.loopCreate(t), e.updateSlides())
                : y && !w && e.loopDestroy()),
          e.emit("breakpoint", c);
      },
      getBreakpoint: function (e, t, i) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
          return;
        let n = !1;
        const r = Up(),
          s = "window" === t ? r.innerHeight : i.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: s * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: s, value: a } = o[e];
          "window" === t
            ? r.matchMedia(`(min-width: ${a}px)`).matches && (n = s)
            : a <= i.clientWidth && (n = s);
        }
        return n || "max";
      },
    };
    var Yf = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function Hf(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const n = Object.keys(i)[0],
          r = i[n];
        "object" == typeof r && null !== r
          ? (!0 === e[n] && (e[n] = { enabled: !0 }),
            "navigation" === n &&
              e[n] &&
              e[n].enabled &&
              !e[n].prevEl &&
              !e[n].nextEl &&
              (e[n].auto = !0),
            ["pagination", "scrollbar"].indexOf(n) >= 0 &&
              e[n] &&
              e[n].enabled &&
              !e[n].el &&
              (e[n].auto = !0),
            n in e && "enabled" in r
              ? ("object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                ef(t, i))
              : ef(t, i))
          : ef(t, i);
      };
    }
    const Xf = {
        eventsEmitter: Df,
        update: Sf,
        translate: Tf,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode ||
              ((i.wrapperEl.style.transitionDuration = `${e}ms`),
              (i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: n } = i;
            n.cssMode ||
              (n.autoHeight && i.updateAutoHeight(),
              Cf({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: n } = i;
            (i.animating = !1),
              n.cssMode ||
                (i.setTransition(0),
                Cf({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Mf,
        loop: Af,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              { params: t } = e;
            (e.onTouchStart = kf.bind(e)),
              (e.onTouchMove = Lf.bind(e)),
              (e.onTouchEnd = Pf.bind(e)),
              (e.onDocumentTouchStart = Rf.bind(e)),
              t.cssMode && (e.onScroll = Bf.bind(e)),
              (e.onClick = If.bind(e)),
              (e.onLoad = Nf.bind(e)),
              zf(e, "on");
          },
          detachEvents: function () {
            zf(this, "off");
          },
        },
        breakpoints: Vf,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: n } = i;
            if (n) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: i, rtl: n, el: r, device: s } = e,
              o = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((n) => {
                          e[n] && i.push(t + n);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  i.direction,
                  { "free-mode": e.params.freeMode && i.freeMode.enabled },
                  { autoheight: i.autoHeight },
                  { rtl: n },
                  { grid: i.grid && i.grid.rows > 1 },
                  {
                    "grid-column":
                      i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                  },
                  { android: s.android },
                  { ios: s.ios },
                  { "css-mode": i.cssMode },
                  { centered: i.cssMode && i.centeredSlides },
                  { "watch-progress": i.watchSlidesProgress },
                ],
                i.containerModifierClass,
              );
            t.push(...o), r.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e &&
              "string" != typeof e &&
              (e.classList.remove(...t), this.emitContainerClasses());
          },
        },
      },
      Wf = {};
    class $f {
      constructor() {
        let e, t;
        for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++)
          n[r] = arguments[r];
        1 === n.length &&
        n[0].constructor &&
        "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
          ? (t = n[0])
          : ([e, t] = n),
          t || (t = {}),
          (t = ef({}, t)),
          e && !t.el && (t.el = e);
        const s = Gp();
        if (
          t.el &&
          "string" == typeof t.el &&
          s.querySelectorAll(t.el).length > 1
        ) {
          const e = [];
          return (
            s.querySelectorAll(t.el).forEach((i) => {
              const n = ef({}, t, { el: i });
              e.push(new $f(n));
            }),
            e
          );
        }
        const o = this;
        (o.__swiper__ = !0),
          (o.support = gf()),
          (o.device = vf({ userAgent: t.userAgent })),
          (o.browser = yf()),
          (o.eventsListeners = {}),
          (o.eventsAnyListeners = []),
          (o.modules = [...o.__modules__]),
          t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const a = {};
        o.modules.forEach((e) => {
          e({
            params: t,
            swiper: o,
            extendParams: Hf(t, a),
            on: o.on.bind(o),
            once: o.once.bind(o),
            off: o.off.bind(o),
            emit: o.emit.bind(o),
          });
        });
        const l = ef({}, Yf, a);
        return (
          (o.params = ef({}, l, Wf, t)),
          (o.originalParams = ef({}, o.params)),
          (o.passedParams = ef({}, t)),
          o.params &&
            o.params.on &&
            Object.keys(o.params.on).forEach((e) => {
              o.on(e, o.params.on[e]);
            }),
          o.params && o.params.onAny && o.onAny(o.params.onAny),
          Object.assign(o, {
            enabled: o.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return "horizontal" === o.params.direction;
            },
            isVertical() {
              return "vertical" === o.params.direction;
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: o.params.allowSlideNext,
            allowSlidePrev: o.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: o.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null,
            },
            allowClick: !0,
            allowTouchMove: o.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          o.emit("_swiper"),
          o.params.init && o.init(),
          o
        );
      }
      getDirectionLabel(e) {
        return this.isHorizontal()
          ? e
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[e];
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: i } = this,
          n = uf(sf(t, `.${i.slideClass}, swiper-slide`)[0]);
        return uf(e) - n;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.find(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e,
          ),
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = sf(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
          r = (i.maxTranslate() - n) * e + n;
        i.translateTo(r, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass),
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass),
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((i) => {
          const n = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: n,
          slidesGrid: r,
          slidesSizesGrid: s,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if ("number" == typeof i.slidesPerView) return i.slidesPerView;
        if (i.centeredSlides) {
          let e,
            t = n[a] ? Math.ceil(n[a].swiperSlideSize) : 0;
          for (let i = a + 1; i < n.length; i += 1)
            n[i] &&
              !e &&
              ((t += Math.ceil(n[i].swiperSlideSize)),
              (l += 1),
              t > o && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1) {
            (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            r[a] - r[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
          (i.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && xf(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          i.freeMode && i.freeMode.enabled && !i.cssMode)
        )
          n(), i.autoHeight && e.updateAutoHeight();
        else {
          if (
            ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
            e.isEnd &&
            !i.centeredSlides
          ) {
            const t =
              e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(t.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || n();
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
            i.el.classList.add(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let i = e || t.params.el;
        if (("string" == typeof i && (i = document.querySelector(i)), !i))
          return !1;
        (i.swiper = t),
          i.parentNode &&
            i.parentNode.host &&
            i.parentNode.host.nodeName ===
              t.params.swiperElementNodeName.toUpperCase() &&
            (t.isElement = !0);
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (i && i.shadowRoot && i.shadowRoot.querySelector) {
            return i.shadowRoot.querySelector(n());
          }
          return sf(i, n())[0];
        })();
        return (
          !r &&
            t.params.createElements &&
            ((r = af("div", t.params.wrapperClass)),
            i.append(r),
            sf(i, `.${t.params.slideClass}`).forEach((e) => {
              r.append(e);
            })),
          Object.assign(t, {
            el: i,
            wrapperEl: r,
            slidesEl:
              t.isElement && !i.parentNode.host.slideSlots
                ? i.parentNode.host
                : r,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: "rtl" === i.dir.toLowerCase() || "rtl" === lf(i, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === i.dir.toLowerCase() || "rtl" === lf(i, "direction")),
            wrongRTL: "-webkit-box" === lf(r, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0,
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents();
        const i = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
          t.isElement &&
            i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
          i.forEach((e) => {
            e.complete
              ? xf(t, e)
              : e.addEventListener("load", (e) => {
                  xf(t, e.target);
                });
          }),
          Ef(t),
          (t.initialized = !0),
          Ef(t),
          t.emit("init"),
          t.emit("afterInit"),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: n, el: r, wrapperEl: s, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              r && "string" != typeof r && r.removeAttribute("style"),
              s && s.removeAttribute("style"),
              o &&
                o.length &&
                o.forEach((e) => {
                  e.classList.remove(
                    n.slideVisibleClass,
                    n.slideFullyVisibleClass,
                    n.slideActiveClass,
                    n.slideNextClass,
                    n.slidePrevClass,
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              (i.el && "string" != typeof i.el && (i.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        ef(Wf, e);
      }
      static get extendedDefaults() {
        return Wf;
      }
      static get defaults() {
        return Yf;
      }
      static installModule(e) {
        $f.prototype.__modules__ || ($f.prototype.__modules__ = []);
        const t = $f.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => $f.installModule(e)), $f)
          : ($f.installModule(e), $f);
      }
    }
    Object.keys(Xf).forEach((e) => {
      Object.keys(Xf[e]).forEach((t) => {
        $f.prototype[t] = Xf[e][t];
      });
    }),
      $f.use([
        function (e) {
          let { swiper: t, on: i, emit: n } = e;
          const r = Up();
          let s = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (n("beforeResize"), n("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && n("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((s = new ResizeObserver((e) => {
                  o = r.requestAnimationFrame(() => {
                    const { width: i, height: n } = t;
                    let r = i,
                      s = n;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: n, target: o } = e;
                      (o && o !== t.el) ||
                        ((r = n ? n.width : (i[0] || i).inlineSize),
                        (s = n ? n.height : (i[0] || i).blockSize));
                    }),
                      (r === i && s === n) || a();
                  });
                })),
                s.observe(t.el))
              : (r.addEventListener("resize", a),
                r.addEventListener("orientationchange", l));
          }),
            i("destroy", () => {
              o && r.cancelAnimationFrame(o),
                s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                r.removeEventListener("resize", a),
                r.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: n, emit: r } = e;
          const s = [],
            o = Up(),
            a = function (e, i) {
              void 0 === i && (i = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const i = function () {
                    r("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(i)
                    : o.setTimeout(i, 0);
                },
              );
              n.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList:
                  t.isElement || (void 0 === i.childList || i).childList,
                characterData: void 0 === i.characterData || i.characterData,
              }),
                s.push(n);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = (function (e, t) {
                    const i = [];
                    let n = e.parentElement;
                    for (; n; )
                      t ? n.matches(t) && i.push(n) : i.push(n),
                        (n = n.parentElement);
                    return i;
                  })(t.hostEl);
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.hostEl, { childList: t.params.observeSlideChildren }),
                  a(t.wrapperEl, { attributes: !1 });
              }
            }),
            n("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const Gf = $n.matchMedia();
    $n.registerPlugin(bp, kc);
    const jf = {
      init() {
        const e = this;
        e.mediaParallax(),
          e.blobWatermark(),
          e.portfolioPage(),
          e.itemParallax(),
          e.fadeInChilds(),
          e.fadeIn(),
          e.counters(),
          e.singleArticle();
      },
      itemParallax() {
        document.querySelectorAll("[data-speed]").forEach((e, t) => {
          if (e.__initialied) return;
          e.__initialied = !0;
          const i = e.getAttribute("data-speed"),
            n = e.closest(".section"),
            r = $n.timeline({
              scrollTrigger: {
                trigger: n,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
                invalidateOnRefresh: !0,
                markers: !1,
              },
            }),
            s = e.clientHeight,
            o = "path" === e.tagName ? e.getBBox().height : 0,
            a = s || o;
          r.fromTo(
            e,
            { y: () => 0.15 * a * Number(i) * -1 },
            { y: () => 0.15 * a * Number(i), ease: "none" },
          );
        });
      },
      portfolioPage() {
        const e = document.querySelector(
          ".portfolio-page, section.work-tiles-list",
        );
        if (!e) return;
        e.querySelectorAll(".item").forEach((e, t) => {
          e.__initialied ||
            ((e.__initialied = !0),
            $n.fromTo(
              e,
              { opacity: 0, scale: 0.9 },
              {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                  trigger: e,
                  start: "top 90%",
                  end: "top 25%",
                  scrub: 1,
                  invalidateOnRefresh: !0,
                  markers: !1,
                },
              },
            ));
        });
      },
      mediaParallax() {
        document.querySelectorAll(".add-parallax").forEach((e) => {
          if (e.__initialied) return;
          e.__initialied = !0;
          const t = e.querySelector("video, img");
          if (!t) return;
          const i = () => t.clientHeight / 15;
          $n.timeline({
            scrollTrigger: {
              trigger: e,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
              invalidateOnRefresh: !0,
              markers: !1,
            },
          }).fromTo(
            t,
            { y: () => -i(), scale: 1.15 },
            { y: () => i(), scale: 1.15 },
          );
        });
      },
      blobWatermark() {
        document
          .querySelectorAll(".blob-watermark[data-draw-in]")
          .forEach((e) => {
            if (e.__initialied) return;
            e.__initialied = !0;
            const t = e.querySelectorAll("path"),
              i = e.closest(".section");
            $n.timeline({
              scrollTrigger: {
                trigger: i,
                start: "top 80%",
                end: "top 0%",
                scrub: 0.5,
                markers: !1,
              },
            }).fromTo(
              t,
              { scale: 1.2, opacity: 0 },
              { scale: 1, opacity: 1, stagger: 0.3, ease: "back" },
            );
          });
        document
          .querySelectorAll(".blob-watermark[data-draw-out]")
          .forEach((e) => {
            if (e.__initialied) return;
            e.__initialied = !0;
            const t = e.querySelectorAll("path"),
              i = e.closest(".section");
            $n.timeline({
              scrollTrigger: {
                trigger: i,
                start: "top 0%",
                end: `+=${window.innerHeight}`,
                scrub: 0.5,
              },
            })
              .fromTo(
                e,
                { y: 0, opacity: 1, scale: 1 },
                {
                  y: () => 0.25 * window.innerHeight,
                  scale: 0,
                  opacity: 0,
                  duration: 1,
                  ease: "back",
                },
                0,
              )
              .fromTo(
                t,
                { drawSVG: "100%" },
                { drawSVG: "0%", duration: 1, stagger: 0.1, ease: "none" },
                0,
              );
          });
        document
          .querySelectorAll(".blob-watermark[data-blob-animate]")
          .forEach((e) => {
            if (e.__initialied) return;
            e.__initialied = !0;
            const t = e.closest(".section"),
              i = e.querySelectorAll("path"),
              n = $n.timeline({
                scrollTrigger: {
                  trigger: t,
                  start: "top bottom",
                  end: () => "+=" + 2 * window.innerHeight,
                  scrub: 0.5,
                  invalidateOnRefresh: !0,
                },
              });
            n.to(e, { rotate: 90, ease: "none" }, 0),
              n.to(
                i,
                { scale: 0.8, transformOrigin: "center center", ease: "none" },
                0,
              );
          });
      },
      fadeInChilds() {
        const e = document.querySelectorAll("[data-fade-in-childs]");
        e &&
          e.forEach((e, t) => {
            if (e.__initialied) return;
            e.__initialied = !0;
            const i = e.children;
            Ju.create({
              trigger: e,
              start: "top 85%",
              invalidateOnRefresh: !1,
              markers: !1,
              onEnter: () => {
                $n.fromTo(
                  i,
                  { y: 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    stagger: 0.1,
                  },
                );
              },
              onLeaveBack: () => {
                $n.to(i, {
                  y: 40,
                  opacity: 0,
                  duration: 1.5,
                  ease: "power4.out",
                  stagger: 0.1,
                });
              },
            });
          });
      },
      fadeIn() {
        const e = document.querySelectorAll("[data-fade-in]");
        e &&
          e.forEach((e, t) => {
            e.__initialied ||
              ((e.__initialied = !0),
              Ju.create({
                trigger: e,
                start: "top 85%",
                invalidateOnRefresh: !1,
                markers: !1,
                onEnter: () => {
                  $n.fromTo(
                    e,
                    { y: 40, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1.5,
                      ease: "power4.out",
                      delay: 0.05 * t,
                    },
                  );
                },
                onLeaveBack: () => {
                  $n.to(e, {
                    y: 40,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power4.out",
                  });
                },
              }));
          });
      },
      counters() {
        const e = document.querySelectorAll("[data-count-to]");
        e.length &&
          e.forEach((e) => {
            e.__initialied ||
              ((e.__initialied = !0),
              Ju.create({
                trigger: e,
                start: "top 80%",
                end: "bottom 20%",
                invalidateOnRefresh: !0,
                markers: !1,
                onEnter: () => {
                  e.counter?.start();
                },
              }));
          });
      },
      singleArticle() {
        document.querySelectorAll(".article-title").forEach((e) => {
          const t = e.querySelector(".article-media");
          Gf.add("(max-width: 768px)", () => {
            Ju.create({
              trigger: t,
              start: "top top",
              end: "bottom top",
              pin: !0,
              pinSpacing: !1,
              invalidateOnRefresh: !0,
            });
          });
        });
      },
    };
    var Uf = jf,
      Qf = __webpack_require__(247),
      Kf = __webpack_require__.n(Qf);
    const Zf = {
      el: [],
      init() {
        (this.el = document.querySelectorAll(".video-hover")),
          this.el.forEach((e) => {
            if (!e.__initialied)
              if (((e.__initialied = !0), Kf()())) {
              } else
                e.addEventListener("mouseenter", () => {
                  e.classList.add("hover");
                  const t = e.querySelector("video");
                  t?.paused && t?.play();
                }),
                  e.addEventListener("mouseleave", () => {
                    e.classList.remove("hover");
                    const t = e.querySelector("video");
                    t?.paused || t?.pause();
                  });
          });
      },
    };
    var Jf = Zf,
      em = __webpack_require__(896);
    var tm = !1;
    if ("undefined" != typeof window) {
      var im = {
        get passive() {
          tm = !0;
        },
      };
      window.addEventListener("testPassive", null, im),
        window.removeEventListener("testPassive", null, im);
    }
    var nm =
        "undefined" != typeof window &&
        window.navigator &&
        window.navigator.platform &&
        (/iP(ad|hone|od)/.test(window.navigator.platform) ||
          ("MacIntel" === window.navigator.platform &&
            window.navigator.maxTouchPoints > 1)),
      rm = [],
      sm = !1,
      om = -1,
      am = void 0,
      lm = void 0,
      um = void 0,
      cm = function (e) {
        return rm.some(function (t) {
          return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
        });
      },
      dm = function (e) {
        var t = e || window.event;
        return (
          !!cm(t.target) ||
          t.touches.length > 1 ||
          (t.preventDefault && t.preventDefault(), !1)
        );
      },
      hm = function () {
        void 0 !== um &&
          ((document.body.style.paddingRight = um), (um = void 0)),
          void 0 !== am && ((document.body.style.overflow = am), (am = void 0));
      },
      pm = function () {
        if (void 0 !== lm) {
          var e = -parseInt(document.body.style.top, 10),
            t = -parseInt(document.body.style.left, 10);
          (document.body.style.position = lm.position),
            (document.body.style.top = lm.top),
            (document.body.style.left = lm.left),
            window.scrollTo(t, e),
            (lm = void 0);
        }
      },
      fm = function (e, t) {
        if (
          e &&
          !rm.some(function (t) {
            return t.targetElement === e;
          })
        ) {
          var i = { targetElement: e, options: t || {} };
          (rm = [].concat(
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, i = Array(e.length); t < e.length; t++)
                  i[t] = e[t];
                return i;
              }
              return Array.from(e);
            })(rm),
            [i],
          )),
            nm
              ? window.requestAnimationFrame(function () {
                  if (void 0 === lm) {
                    lm = {
                      position: document.body.style.position,
                      top: document.body.style.top,
                      left: document.body.style.left,
                    };
                    var e = window,
                      t = e.scrollY,
                      i = e.scrollX,
                      n = e.innerHeight;
                    (document.body.style.position = "fixed"),
                      (document.body.style.top = -t),
                      (document.body.style.left = -i),
                      setTimeout(function () {
                        return window.requestAnimationFrame(function () {
                          var e = n - window.innerHeight;
                          e && t >= n && (document.body.style.top = -(t + e));
                        });
                      }, 300);
                  }
                })
              : (function (e) {
                  if (void 0 === um) {
                    var t = !!e && !0 === e.reserveScrollBarGap,
                      i =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    if (t && i > 0) {
                      var n = parseInt(
                        window
                          .getComputedStyle(document.body)
                          .getPropertyValue("padding-right"),
                        10,
                      );
                      (um = document.body.style.paddingRight),
                        (document.body.style.paddingRight = n + i + "px");
                    }
                  }
                  void 0 === am &&
                    ((am = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                })(t),
            nm &&
              ((e.ontouchstart = function (e) {
                1 === e.targetTouches.length &&
                  (om = e.targetTouches[0].clientY);
              }),
              (e.ontouchmove = function (t) {
                1 === t.targetTouches.length &&
                  (function (e, t) {
                    var i = e.targetTouches[0].clientY - om;
                    !cm(e.target) &&
                      ((t && 0 === t.scrollTop && i > 0) ||
                      ((function (e) {
                        return (
                          !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                        );
                      })(t) &&
                        i < 0)
                        ? dm(e)
                        : e.stopPropagation());
                  })(t, e);
              }),
              sm ||
                (document.addEventListener(
                  "touchmove",
                  dm,
                  tm ? { passive: !1 } : void 0,
                ),
                (sm = !0)));
        }
      };
    const mm = document.getElementById("header"),
      gm = document.body,
      vm = $n.matchMedia(),
      ym = {
        $navigation: null,
        $toggler: null,
        init() {
          const e = this;
          if (
            ((e.$navigation = document.getElementById("header")),
            (e.$toggler = document.querySelector('[data-toggle="navigation"]')),
            (e.$menu = document.querySelector(".menu-overlay")),
            (e.$box = document.querySelector(".menu-overlay .box")),
            (e.$boxBg = document.querySelector(".menu-overlay .box-bg")),
            (e.$inner = document.querySelector(".menu-overlay .inner")),
            (e.$overlay = document.querySelector(".menu-overlay .overlay")),
            document
              .querySelectorAll("#header .menu:not(.secondary) a")
              .forEach(function (e) {
                e.setAttribute("aria-label", e.textContent),
                  (e.innerHTML =
                    "<span>" +
                    e.textContent +
                    '</span><span aria-hidden="true">' +
                    e.textContent +
                    "</span>");
              }),
            e.$menu)
          ) {
            e.$toggler?.addEventListener("click", function (t) {
              if (
                (t.preventDefault(), gm.classList.contains("navigation-open"))
              )
                e.hide();
              else {
                gm.classList.add("navigation-open");
                const t = $n.timeline();
                vm.add("(min-width: 768px)", () => {
                  t.fromTo(
                    e.$boxBg,
                    { width: 0, height: 0, opacity: 0 },
                    {
                      width: "100%",
                      height: "100%",
                      opacity: 1,
                      duration: 1,
                      ease: "power4.out",
                    },
                    0.15,
                  );
                });
                const i = [
                    e.$inner.querySelector(".left .title"),
                    ...e.$inner.querySelectorAll(".left .menu > li"),
                  ],
                  n = [
                    ...e.$inner.querySelectorAll(".right .contact .item"),
                    e.$inner.querySelector(".right .menu "),
                  ];
                t.fromTo(
                  [...i, ...n],
                  { y: 50, autoAlpha: 0, filter: "blur(30px)" },
                  {
                    stagger: 0.075,
                    y: 0,
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: 0.9,
                    ease: "power4.inOut",
                    clearProps: "all",
                    onComplete: (e) => {},
                  },
                  window.innerWidth <= 768 ? 0 : 0.3,
                ),
                  e.$toggler.classList.add("open"),
                  fm(e.$inner),
                  Rp.disable();
              }
            });
            const t = document.querySelectorAll(
                ".menu-overlay .menu:not(.secondary) .sub-menu",
              ),
              i = document.querySelector(".menu-overlay .back");
            Array.prototype.forEach.call(t, function (t) {
              const n = t.closest("li").querySelector("a"),
                r = document.createElement("div");
              r.classList.add("sub-toggle"),
                (r.innerHTML =
                  '<svg class="size-12 fill-white"><use href="#i-arrow-right"></use></svg>'),
                n.appendChild(r),
                n.addEventListener("click", (n) => {
                  n.preventDefault(),
                    t.classList.toggle("open"),
                    t.classList.contains("open")
                      ? ($n.set(t, { autoAlpha: 1 }),
                        $n.fromTo(
                          t.querySelectorAll("li"),
                          { autoAlpha: 0, x: 50 },
                          {
                            autoAlpha: 1,
                            x: 0,
                            stagger: 0.05,
                            duration: 0.6,
                            delay: 0.2,
                            ease: "power4.out",
                          },
                        ),
                        $n.to(
                          e.$inner.querySelectorAll(
                            ".menu:not(.secondary) > li > a",
                          ),
                          {
                            autoAlpha: 0,
                            x: -50,
                            stagger: 0.05,
                            duration: 0.6,
                            ease: "power4.out",
                          },
                        ),
                        i &&
                          (i.classList.add("has-arrow"),
                          (i.innerHTML = "Back")))
                      : ($n.to(t, 0.2, { autoAlpha: 0 }),
                        i &&
                          (i.classList.remove("has-arrow"),
                          (i.innerHTML = "Menu")));
                });
              const s = () => {
                t.classList.contains("open") &&
                  (t.classList.remove("open"),
                  $n.to(t, 0.2, { autoAlpha: 0 }),
                  i.classList.remove("has-arrow"),
                  (i.innerHTML = "Menu"),
                  $n.to(t.querySelectorAll("li"), {
                    autoAlpha: 0,
                    x: 50,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: "power4.out",
                  }),
                  $n.to(
                    e.$inner.querySelectorAll(".menu:not(.secondary) > li > a"),
                    {
                      autoAlpha: 1,
                      x: 0,
                      stagger: 0.05,
                      duration: 0.6,
                      delay: 0.2,
                      ease: "power4.out",
                    },
                  ));
              };
              i && i.addEventListener("click", s);
            }),
              document
                .querySelector(".menu-overlay")
                .addEventListener("click", function (t) {
                  t.target.closest(".box") || e.hide();
                }),
              gm.querySelectorAll("a").forEach((e) => {
                e.addEventListener("click", function (t) {
                  mm.offsetHeight;
                  const i = e.getAttribute("href"),
                    n = window.location.href
                      .replace("https:", "")
                      .replace("http:", "")
                      .split("#")[0];
                  if (!i) return;
                  const r = i.split("/"),
                    s = r[r.length - 1].match(/#(.+)/);
                  if (s && s[0]) {
                    t.preventDefault();
                    let r = i
                      .replace("https:", "")
                      .replace("http:", "")
                      .split("#")[0];
                    const o = document.querySelector(s[0]);
                    if (
                      ("/" !== r[r.length - 1] && (r += "/"),
                      n === r || "/" === r)
                    ) {
                      if (!o) return !1;
                      Rp.scrollTo(o),
                        e.blur(),
                        gm.classList.contains("navigation-open") && ym.hide(e),
                        t.preventDefault();
                    }
                  }
                });
              });
          }
        },
        scrollTo(e) {
          const t = this,
            i = document.querySelector(e);
          if (((t.scrollOffset = mm.offsetHeight), i)) {
            var n = i.offsetTop - t.scrollOffset + 1;
            window.scrollTo({ top: n, behavior: "smooth" });
          }
        },
        hide() {
          const e = this;
          if (
            (gm.classList.remove("navigation-open"),
            e.$toggler && e.$toggler.classList.remove("open"),
            e.$box)
          ) {
            $n.timeline();
            vm.add("(min-width: 768px)", () => {});
          }
          var t;
          (t = e.$inner) &&
            ((rm = rm.filter(function (e) {
              return e.targetElement !== t;
            })),
            nm &&
              ((t.ontouchstart = null),
              (t.ontouchmove = null),
              sm &&
                0 === rm.length &&
                (document.removeEventListener(
                  "touchmove",
                  dm,
                  tm ? { passive: !1 } : void 0,
                ),
                (sm = !1))),
            nm ? pm() : hm()),
            Rp.enable(),
            setTimeout(() => {
              const t = document.querySelectorAll(
                  ".menu-overlay .menu:not(.secondary) .sub-menu",
                ),
                i = document.querySelector(".menu-overlay .back");
              Array.prototype.forEach.call(t, function (t) {
                t.classList.contains("open") &&
                  (t.classList.remove("open"),
                  $n.to(t, 0.2, { autoAlpha: 0 }),
                  i.classList.remove("has-arrow"),
                  (i.innerHTML = "Menu"),
                  $n.set(t.querySelectorAll("li"), { autoAlpha: 0, x: 50 }),
                  $n.set(
                    e.$inner.querySelectorAll(".menu:not(.secondary) > li > a"),
                    { autoAlpha: 1, x: 0 },
                  ));
              });
            }, 600);
        },
      };
    var Dm = ym;
    $n.registerPlugin(Ju);
    var wm = {
      init: function () {
        this.initSplitText();
      },
      initSplitText() {
        document.querySelectorAll("[data-split-text]").forEach((e) => {
          e.innerHTML = `<div class="base">${e.innerHTML}</div><div class="clone">${e.innerHTML}</div>`;
          const t = e.querySelector(".base"),
            i = e.querySelector(".clone"),
            n =
              (new SplitText(t, { type: "words" }),
              new SplitText(i, { type: "words" })),
            r = !1;
          $n.fromTo(
            n.words,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.3,
              stagger: 0.1,
              ease: "power1.out",
              scrollTrigger: {
                pin: r,
                trigger: e,
                scrub: 0.5,
                invalidateOnRefresh: !0,
                start: () => "top 85%",
                end: () => "bottom 50%",
              },
            },
          );
        });
      },
    };
    function _m(e) {
      let { swiper: t, extendParams: i, on: n, emit: r } = e;
      function s(e) {
        let i;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((i = t.el.querySelector(e) || t.hostEl.querySelector(e)), i)
          ? i
          : (e &&
              ("string" == typeof e && (i = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
              "string" == typeof e &&
              i &&
              i.length > 1 &&
              1 === t.el.querySelectorAll(e).length
                ? (i = t.el.querySelector(e))
                : i && 1 === i.length && (i = i[0])),
            e && !i ? e : i);
      }
      function o(e, i) {
        const n = t.params.navigation;
        (e = hf(e)).forEach((e) => {
          e &&
            (e.classList[i ? "add" : "remove"](...n.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](n.lockClass));
        });
      }
      function a() {
        const { nextEl: e, prevEl: i } = t.navigation;
        if (t.params.loop) return o(i, !1), void o(e, !1);
        o(i, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), r("navigationPrev"));
      }
      function u(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), r("navigationNext"));
      }
      function c() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = (function (e, t, i, n) {
            return (
              e.params.createElements &&
                Object.keys(n).forEach((r) => {
                  if (!i[r] && !0 === i.auto) {
                    let s = sf(e.el, `.${n[r]}`)[0];
                    s ||
                      ((s = af("div", n[r])),
                      (s.className = n[r]),
                      e.el.append(s)),
                      (i[r] = s),
                      (t[r] = s);
                  }
                }),
              i
            );
          })(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !e.nextEl && !e.prevEl)
        )
          return;
        let i = s(e.nextEl),
          n = s(e.prevEl);
        Object.assign(t.navigation, { nextEl: i, prevEl: n }),
          (i = hf(i)),
          (n = hf(n));
        const r = (i, n) => {
          i && i.addEventListener("click", "next" === n ? u : l),
            !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
        };
        i.forEach((e) => r(e, "next")), n.forEach((e) => r(e, "prev"));
      }
      function d() {
        let { nextEl: e, prevEl: i } = t.navigation;
        (e = hf(e)), (i = hf(i));
        const n = (e, i) => {
          e.removeEventListener("click", "next" === i ? u : l),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
      }
      i({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null }),
        n("init", () => {
          !1 === t.params.navigation.enabled ? h() : (c(), a());
        }),
        n("toEdge fromEdge lock unlock", () => {
          a();
        }),
        n("destroy", () => {
          d();
        }),
        n("enable disable", () => {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = hf(e)),
            (i = hf(i)),
            t.enabled
              ? a()
              : [...e, ...i]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass),
                  );
        }),
        n("click", (e, i) => {
          let { nextEl: n, prevEl: s } = t.navigation;
          (n = hf(n)), (s = hf(s));
          const o = i.target;
          let a = s.includes(o) || n.includes(o);
          if (t.isElement && !a) {
            const e = i.path || (i.composedPath && i.composedPath());
            e && (a = e.find((e) => n.includes(e) || s.includes(e)));
          }
          if (t.params.navigation.hideOnClick && !a) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            n.length
              ? (e = n[0].classList.contains(t.params.navigation.hiddenClass))
              : s.length &&
                (e = s[0].classList.contains(t.params.navigation.hiddenClass)),
              r(!0 === e ? "navigationShow" : "navigationHide"),
              [...n, ...s]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass),
                );
          }
        });
      const h = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" "),
        ),
          d();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" "),
          ),
            c(),
            a();
        },
        disable: h,
        update: a,
        init: c,
        destroy: d,
      });
    }
    function xm(e, t) {
      const i = rf(t);
      return (
        i !== t &&
          ((i.style.backfaceVisibility = "hidden"),
          (i.style["-webkit-backface-visibility"] = "hidden")),
        i
      );
    }
    function bm(e) {
      let { swiper: t, duration: i, transformElements: n, allSlides: r } = e;
      const { activeIndex: s } = t;
      if (t.params.virtualTranslate && 0 !== i) {
        let e,
          i = !1;
        (e = r
          ? n
          : n.filter((e) => {
              const i = e.classList.contains("swiper-slide-transform")
                ? ((e) => {
                    if (!e.parentElement)
                      return t.slides.find(
                        (t) => t.shadowRoot && t.shadowRoot === e.parentNode,
                      );
                    return e.parentElement;
                  })(e)
                : e;
              return t.getSlideIndex(i) === s;
            })),
          e.forEach((e) => {
            cf(e, () => {
              if (i) return;
              if (!t || t.destroyed) return;
              (i = !0), (t.animating = !1);
              const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              t.wrapperEl.dispatchEvent(e);
            });
          });
      }
    }
    __webpack_require__(2);
    const Em = {
      init() {
        const e = this;
        e.initBlobButton(),
          e.initFeaturedNewsSwiper(),
          e.galleryBg(),
          e.formLinks();
      },
      initBlobButton() {
        window.innerWidth > 991 &&
          document.querySelector(".gravity-button") &&
          document.querySelectorAll(".gravity-button").forEach((e) => {
            const t = e.querySelector(".gravity-button-bg"),
              i = e.querySelector(".gravity-button-label"),
              n = gsap.quickTo(t, "x", { duration: 0.4, ease: "power1.out" }),
              r = gsap.quickTo(t, "y", { duration: 0.4, ease: "power1.out" }),
              s = gsap.quickTo(i, "x", { duration: 0.4, ease: "power1.out" }),
              o = gsap.quickTo(i, "y", { duration: 0.4, ease: "power1.out" });
            e.addEventListener("mousemove", (t) => {
              const i = e.getBoundingClientRect(),
                a = i.width / 2,
                l = t.clientX - i.left - a,
                u = t.clientY - i.top - a,
                c = Math.sqrt(l * l + u * u),
                d = (1 - c / a) * c,
                h = Math.atan2(u, l),
                p = Math.round(Math.cos(h) * d * 100) / 100,
                f = Math.round(Math.sin(h) * d * 100) / 100;
              r(f), n(p), o(0.5 * f), s(0.5 * p);
            }),
              e.addEventListener("mouseleave", (e) => {
                n(0), r(0), s(0), o(0);
              });
          });
      },
      initFeaturedNewsSwiper() {
        const e = document.querySelectorAll(".featured-news-swiper");
        e.length &&
          e.forEach((e) => {
            new $f(e, {
              modules: [_m],
              loop: !1,
              slidesPerView: 1,
              spaceBetween: 15,
              speed: 600,
              navigation: {
                nextEl: ".swiper-area-next",
                prevEl: ".swiper-area-prev",
              },
              breakpoints: { 768: { spaceBetween: 30 } },
            });
          });
      },
      galleryBg() {
        const e = document.querySelectorAll(".bg .gallery-row");
        e &&
          e.forEach((e) => {
            const t = e.querySelectorAll(".gallery-item"),
              i = e.querySelector(".gallery-row-inner"),
              n = e.querySelectorAll("img, video");
            let r = null;
            for (let e = 0; e < 2; e++)
              t.forEach((e) => {
                const t = e.cloneNode(!0);
                i.appendChild(t);
              });
            imagesLoaded(n, () => {
              r = Wo(t, { paused: !1, draggable: !0, speed: 2, center: !1 });
            });
          });
      },
      formLinks() {
        const e = document.querySelectorAll('a[href*="?form-link="]');
        e.length &&
          e.forEach((e) => {
            const t = new URL(e.href).searchParams.get("form-link");
            if (!t) return;
            const i = t.split(",");
            e.addEventListener("click", (e) => {
              e.preventDefault(), e.stopPropagation();
              const t = document.querySelector(".footer-form");
              t && t.scrollIntoView({ behavior: "smooth" }),
                i.forEach((e) => {
                  const t = document.querySelector(
                    `input[type="checkbox"]#${CSS.escape(e.trim())}`,
                  );
                  t &&
                    ((t.checked = !0),
                    t.dispatchEvent(new Event("change", { bubbles: !0 })));
                });
            });
          });
      },
      newsCard() {
        document.querySelectorAll(".news-card").forEach((e) => {
          if (e.querySelector("video")) {
            const t = e.querySelector("video");
            e.addEventListener("mouseenter", function () {
              document.body.click(), t.play();
            }),
              e.addEventListener("mouseleave", function () {
                setTimeout(() => {
                  t.pause(), (t.currentTime = 0);
                }, 300);
              });
          }
        });
      },
    };
    var Sm = Em,
      Tm = function () {
        return (
          (Tm =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          Tm.apply(this, arguments)
        );
      },
      Cm = (function () {
        function e(e, t, i) {
          var n = this;
          (this.endVal = t),
            (this.options = i),
            (this.version = "2.8.0"),
            (this.defaults = {
              startVal: 0,
              decimalPlaces: 0,
              duration: 2,
              useEasing: !0,
              useGrouping: !0,
              useIndianSeparators: !1,
              smartEasingThreshold: 999,
              smartEasingAmount: 333,
              separator: ",",
              decimal: ".",
              prefix: "",
              suffix: "",
              enableScrollSpy: !1,
              scrollSpyDelay: 200,
              scrollSpyOnce: !1,
            }),
            (this.finalEndVal = null),
            (this.useEasing = !0),
            (this.countDown = !1),
            (this.error = ""),
            (this.startVal = 0),
            (this.paused = !0),
            (this.once = !1),
            (this.count = function (e) {
              n.startTime || (n.startTime = e);
              var t = e - n.startTime;
              (n.remaining = n.duration - t),
                n.useEasing
                  ? n.countDown
                    ? (n.frameVal =
                        n.startVal -
                        n.easingFn(t, 0, n.startVal - n.endVal, n.duration))
                    : (n.frameVal = n.easingFn(
                        t,
                        n.startVal,
                        n.endVal - n.startVal,
                        n.duration,
                      ))
                  : (n.frameVal =
                      n.startVal + (n.endVal - n.startVal) * (t / n.duration));
              var i = n.countDown
                ? n.frameVal < n.endVal
                : n.frameVal > n.endVal;
              (n.frameVal = i ? n.endVal : n.frameVal),
                (n.frameVal = Number(
                  n.frameVal.toFixed(n.options.decimalPlaces),
                )),
                n.printValue(n.frameVal),
                t < n.duration
                  ? (n.rAF = requestAnimationFrame(n.count))
                  : null !== n.finalEndVal
                    ? n.update(n.finalEndVal)
                    : n.options.onCompleteCallback &&
                      n.options.onCompleteCallback();
            }),
            (this.formatNumber = function (e) {
              var t,
                i,
                r,
                s,
                o = e < 0 ? "-" : "";
              t = Math.abs(e).toFixed(n.options.decimalPlaces);
              var a = (t += "").split(".");
              if (
                ((i = a[0]),
                (r = a.length > 1 ? n.options.decimal + a[1] : ""),
                n.options.useGrouping)
              ) {
                s = "";
                for (var l = 3, u = 0, c = 0, d = i.length; c < d; ++c)
                  n.options.useIndianSeparators &&
                    4 === c &&
                    ((l = 2), (u = 1)),
                    0 !== c && u % l == 0 && (s = n.options.separator + s),
                    u++,
                    (s = i[d - c - 1] + s);
                i = s;
              }
              return (
                n.options.numerals &&
                  n.options.numerals.length &&
                  ((i = i.replace(/[0-9]/g, function (e) {
                    return n.options.numerals[+e];
                  })),
                  (r = r.replace(/[0-9]/g, function (e) {
                    return n.options.numerals[+e];
                  }))),
                o + n.options.prefix + i + r + n.options.suffix
              );
            }),
            (this.easeOutExpo = function (e, t, i, n) {
              return (i * (1 - Math.pow(2, (-10 * e) / n)) * 1024) / 1023 + t;
            }),
            (this.options = Tm(Tm({}, this.defaults), i)),
            (this.formattingFn = this.options.formattingFn
              ? this.options.formattingFn
              : this.formatNumber),
            (this.easingFn = this.options.easingFn
              ? this.options.easingFn
              : this.easeOutExpo),
            (this.startVal = this.validateValue(this.options.startVal)),
            (this.frameVal = this.startVal),
            (this.endVal = this.validateValue(t)),
            (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
            this.resetDuration(),
            (this.options.separator = String(this.options.separator)),
            (this.useEasing = this.options.useEasing),
            "" === this.options.separator && (this.options.useGrouping = !1),
            (this.el = "string" == typeof e ? document.getElementById(e) : e),
            this.el
              ? this.printValue(this.startVal)
              : (this.error = "[CountUp] target is null or undefined"),
            "undefined" != typeof window &&
              this.options.enableScrollSpy &&
              (this.error ||
                ((window.onScrollFns = window.onScrollFns || []),
                window.onScrollFns.push(function () {
                  return n.handleScroll(n);
                }),
                (window.onscroll = function () {
                  window.onScrollFns.forEach(function (e) {
                    return e();
                  });
                }),
                this.handleScroll(this)));
        }
        return (
          (e.prototype.handleScroll = function (e) {
            if (e && window && !e.once) {
              var t = window.innerHeight + window.scrollY,
                i = e.el.getBoundingClientRect(),
                n = i.top + window.pageYOffset,
                r = i.top + i.height + window.pageYOffset;
              r < t && r > window.scrollY && e.paused
                ? ((e.paused = !1),
                  setTimeout(function () {
                    return e.start();
                  }, e.options.scrollSpyDelay),
                  e.options.scrollSpyOnce && (e.once = !0))
                : (window.scrollY > r || n > t) && !e.paused && e.reset();
            }
          }),
          (e.prototype.determineDirectionAndSmartEasing = function () {
            var e = this.finalEndVal ? this.finalEndVal : this.endVal;
            this.countDown = this.startVal > e;
            var t = e - this.startVal;
            if (
              Math.abs(t) > this.options.smartEasingThreshold &&
              this.options.useEasing
            ) {
              this.finalEndVal = e;
              var i = this.countDown ? 1 : -1;
              (this.endVal = e + i * this.options.smartEasingAmount),
                (this.duration = this.duration / 2);
            } else (this.endVal = e), (this.finalEndVal = null);
            null !== this.finalEndVal
              ? (this.useEasing = !1)
              : (this.useEasing = this.options.useEasing);
          }),
          (e.prototype.start = function (e) {
            this.error ||
              (this.options.onStartCallback && this.options.onStartCallback(),
              e && (this.options.onCompleteCallback = e),
              this.duration > 0
                ? (this.determineDirectionAndSmartEasing(),
                  (this.paused = !1),
                  (this.rAF = requestAnimationFrame(this.count)))
                : this.printValue(this.endVal));
          }),
          (e.prototype.pauseResume = function () {
            this.paused
              ? ((this.startTime = null),
                (this.duration = this.remaining),
                (this.startVal = this.frameVal),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)))
              : cancelAnimationFrame(this.rAF),
              (this.paused = !this.paused);
          }),
          (e.prototype.reset = function () {
            cancelAnimationFrame(this.rAF),
              (this.paused = !0),
              this.resetDuration(),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              this.printValue(this.startVal);
          }),
          (e.prototype.update = function (e) {
            cancelAnimationFrame(this.rAF),
              (this.startTime = null),
              (this.endVal = this.validateValue(e)),
              this.endVal !== this.frameVal &&
                ((this.startVal = this.frameVal),
                null == this.finalEndVal && this.resetDuration(),
                (this.finalEndVal = null),
                this.determineDirectionAndSmartEasing(),
                (this.rAF = requestAnimationFrame(this.count)));
          }),
          (e.prototype.printValue = function (e) {
            var t;
            if (this.el) {
              var i = this.formattingFn(e);
              (
                null === (t = this.options.plugin) || void 0 === t
                  ? void 0
                  : t.render
              )
                ? this.options.plugin.render(this.el, i)
                : "INPUT" === this.el.tagName
                  ? (this.el.value = i)
                  : "text" === this.el.tagName || "tspan" === this.el.tagName
                    ? (this.el.textContent = i)
                    : (this.el.innerHTML = i);
            }
          }),
          (e.prototype.ensureNumber = function (e) {
            return "number" == typeof e && !isNaN(e);
          }),
          (e.prototype.validateValue = function (e) {
            var t = Number(e);
            return this.ensureNumber(t)
              ? t
              : ((this.error = "[CountUp] invalid start or end value: ".concat(
                  e,
                )),
                null);
          }),
          (e.prototype.resetDuration = function () {
            (this.startTime = null),
              (this.duration = 1e3 * Number(this.options.duration)),
              (this.remaining = this.duration);
          }),
          e
        );
      })();
    const Mm = {
      init() {
        (this.el = document.querySelectorAll("[data-count-to]")),
          this.el.forEach((e) => {
            const t = (e.innerHTML.split(".")[1] || []).length,
              i = new Cm(e, e.getAttribute("data-count-to"), {
                startVal: e.innerHTML,
                duration: 2,
                decimalPlaces: t,
              });
            Ju.create({
              trigger: e,
              start: "top 80%",
              onEnter: () => {
                i.start();
              },
            }),
              Ju.create({
                trigger: e,
                start: "top bottom",
                onLeaveBack: () => {
                  i.reset();
                },
              });
          });
      },
    };
    var Am = Mm;
    var Fm = {
      el: null,
      init() {
        const e = this;
        (e.el = document.querySelector("#page-overlay")),
          e.el
            ? (e.hide(),
              document.body.addEventListener("click", (t) => {
                const i = t.target.closest('a:not([target="_blank"])');
                if (i) {
                  const n = i.getAttribute("href");
                  if (!n) return;
                  "#" === n[0] ||
                    n.includes("mailto:") ||
                    n.includes("tel:") ||
                    (t.preventDefault(),
                    (e.el.style.display = "block"),
                    $n.to(e.el, {
                      duration: 0.4,
                      autoAlpha: 1,
                      ease: "power2.inOut",
                      onComplete() {
                        window.location.href = n;
                      },
                    }));
                }
              }),
              window.addEventListener("pageshow", () => {
                e.loaded && e.hide(0);
              }))
            : dispatchEvent(new Event("pageTransitionEnd"));
      },
      hide() {
        const e = this;
        $n.to(e.el, {
          duration: 0.4,
          autoAlpha: 0,
          ease: "power2.inOut",
          onComplete() {
            (e.el.style.display = "none"),
              e.loaded || dispatchEvent(new Event("pageTransitionEnd")),
              (e.loaded = !0);
          },
        });
      },
    };
    const km = document.body,
      Lm = {
        init() {
          document
            .querySelectorAll('[data-toggle="video-modal"]')
            .forEach(function (e) {
              e.__initialied ||
                ((e.__initialied = !0),
                e.addEventListener("click", function () {
                  const t = e.closest(".media"),
                    i = t.querySelector(".play"),
                    n = "true" === i.getAttribute("data-audio"),
                    r = t.querySelector("video"),
                    s = window.innerWidth < 768;
                  (t.style.width = t.offsetWidth + "px"),
                    (t.style.height = t.offsetHeight + "px");
                  const o = document.createElement("div");
                  (o.className = "video-modal"),
                    (o.innerHTML =
                      '<button class="video-modal-close close" data-dismiss="video-modal"></button>');
                  const a = o.querySelector(".video-modal-close");
                  gsap.to(i, {
                    autoAlpha: 0,
                    scale: 0.8,
                    ease: "power2.out",
                    duration: 0.3,
                    onComplete: () => {
                      o.style.position = "fixed";
                      const e = t.getBoundingClientRect();
                      (o.style.top = e.top + "px"),
                        (o.style.left = e.left + "px"),
                        (o.style.width = e.width + "px"),
                        (o.style.height = e.height + "px"),
                        o.prepend(r),
                        km.appendChild(o),
                        (r.controls = !0),
                        (r.muted = n),
                        gsap.to(o, {
                          top: s ? 0 : "15px",
                          left: s ? 0 : "15px",
                          width: s ? "100%" : "calc(100vw - 30px)",
                          height: s ? "100%" : "calc(100vh - 30px)",
                          duration: 0.8,
                          ease: "power4.out",
                          onComplete: () => {
                            gsap.fromTo(
                              a,
                              { opacity: 0, scale: 0.8 },
                              { opacity: 1, scale: 1, duration: 0.2 },
                            );
                          },
                        });
                    },
                  });
                  o
                    .querySelector('[data-dismiss="video-modal"]')
                    .addEventListener("click", function () {
                      (r.controls = !1),
                        (r.muted = !0),
                        gsap.to(a, { opacity: 0, scale: 0.8, duration: 0.2 });
                      const e = t.getBoundingClientRect();
                      gsap.to(o, {
                        top: e.top + "px",
                        left: e.left + "px",
                        width: e.width + "px",
                        height: e.height + "px",
                        duration: 0.8,
                        ease: "power4.out",
                        onComplete: () => {
                          t.prepend(r),
                            Rp.enable(),
                            o.remove(),
                            gsap.to(i, {
                              autoAlpha: 1,
                              scale: 1,
                              ease: "power4.out",
                              duration: 0.5,
                            });
                        },
                      });
                    }),
                    Rp.disable();
                }));
            });
        },
      };
    var Pm = Lm;
    var Om = {
      init() {
        const e = this;
        e.initFileUpload(), e.initTile(), e.initShowIf();
      },
      initFileUpload() {
        document.querySelectorAll(".form-upload").forEach((e) => {
          const t = e.querySelector('input[type="file"]'),
            i = e.querySelector(".flex.flex-col span"),
            n = i.innerHTML,
            r = e.querySelector(".flex.flex-col small"),
            s = r.innerHTML;
          e.addEventListener("click", () => {
            t.click();
          }),
            t.addEventListener("change", () => {
              if (t.files.length > 0) {
                e.classList.add("file-selected");
                const n = t.files[0].name,
                  s = t.files[0].size;
                (i.innerHTML = n),
                  (r.innerHTML = `${(s / 1024).toFixed(2)} KB`);
              } else
                e.classList.remove("file-selected"),
                  (i.innerHTML = n),
                  (r.innerHTML = s);
            });
        });
      },
      initTile() {
        document.querySelectorAll(".form-tile").forEach((e) => {
          const t = e.querySelector("input");
          t.checked && e.classList.add("checked"),
            e.addEventListener("click", () => {
              t.click();
            }),
            t.addEventListener("change", () => {
              t.checked && e.classList.add("checked"),
                document
                  .querySelectorAll(`input[name="${t.name}"]`)
                  .forEach((e) => {
                    e !== t &&
                      e.closest(".form-tile").classList.remove("checked");
                  });
            });
        });
      },
      initShowIf() {
        document.querySelectorAll("[data-show-if-field]").forEach((e) => {
          const t = document.querySelectorAll(
              `[name="${e.getAttribute("data-show-if-field")}"]`,
            ),
            i = e.getAttribute("data-show-if-value");
          t.forEach((t) => {
            t.addEventListener("change", () => {
              t.value === i
                ? e.classList.remove("hidden")
                : e.classList.add("hidden");
            });
          });
        });
      },
    };
    var Im = {
        init() {
          function e() {
            if (windowWidth >= 600) {
              const e = document.querySelectorAll(".article-content");
              Array.prototype.forEach.call(e, function (e) {
                const t = e,
                  i = e.querySelectorAll(
                    ".content h1, .content h2, .content h3, .content h4, .content h5, .content h6",
                  );
                Array.prototype.forEach.call(i, function (e) {
                  const i = document.createElement("li");
                  i.setAttribute("data-cursor", "hover"),
                    (i.innerHTML = `<span>${e.innerHTML}</span>`),
                    t.querySelector(".article-nav ul").appendChild(i),
                    i.addEventListener("click", function (t) {
                      Scroller.lenis.scrollTo(e, { offset: -150, lerp: 0.1 });
                    });
                });
                const n = t.querySelector(".nav-container"),
                  r = t.querySelector(".progress-bar .progress"),
                  s = n.offsetHeight,
                  o = document.querySelector("header").offsetHeight + 30;
                ScrollTrigger.create({
                  trigger: n,
                  start: `top ${o}`,
                  endTrigger: t,
                  end: `bottom ${o + s + 15}`,
                  pin: n,
                  pinType: "transform",
                  onUpdate({ progress: e, direction: t, isActive: i }) {
                    e < 0.1 && (e = 0.1), (r.style.width = 100 * e + "%");
                  },
                });
              });
            }
          }
          document.querySelector(".article-content") &&
            (e(),
            screen.orientation &&
              screen.orientation.addEventListener("change", e),
            window.addEventListener("resize", function () {
              window.innerWidth !== windowWidth && e();
            }));
        },
      },
      Bm = bi.registerPlugin(Wn) || bi;
    Bm.core.Tween;
    var Nm = class {
      constructor(e) {
        const t = this;
        (t.DOM = {}),
          (t.bounds = {}),
          (t.DOM.el = e),
          (t.DOM.container = e.querySelector(".carousel-container")),
          (t.DOM.wrapper = e.querySelector(".carousel-wrapper")),
          (t.DOM.items = [...t.DOM.wrapper.children]),
          (t.DOM.btnNext = e.querySelector(".carousel-next")),
          (t.DOM.btnPrev = e.querySelector(".carousel-prev")),
          (t.prevIndex = 0),
          (t.activeIndex = 0),
          (t.offset = 0),
          (t.count = t.DOM.items.length),
          (t.expandedContent = !1),
          t.resize(),
          t.DOM.items[t.activeIndex].classList.add("active"),
          (t.DOM.items[t.activeIndex].style.width = `${t.activeWidth}px`),
          t.setActiveItem(),
          (t.DOM.wrapper.style.width = `${t.DOM.items.reduce((e, t) => e + t.getBoundingClientRect().width, 0)}px`),
          t.DOM.btnNext.addEventListener("click", t.next.bind(t)),
          t.DOM.btnPrev.addEventListener("click", t.prev.bind(t)),
          window.addEventListener("resize", t.resize.bind(t)),
          t.DOM.wrapper.querySelectorAll("video").forEach((e) => {
            e.closest(".media");
            e.addEventListener("ended", () => {
              t.expandedContent || t.next();
            });
          }),
          t.DOM.items.forEach((e) => {
            const i = e.querySelector(".carousel-item-content");
            i.addEventListener("click", () => {
              t.toggleContent(i);
            });
          }),
          window.innerWidth > 1199 &&
            setTimeout(() => {
              Ju.create({
                trigger: t.DOM.el,
                invalidateOnRefresh: !0,
                start: "top 50%",
                onEnter: () => {
                  const e = t.DOM.activeItem.querySelector("video");
                  e?.play()
                    .then(() => {})
                    .catch((e) => {});
                },
                onLeave: () => {
                  const e = t.DOM.activeItem.querySelector("video");
                  e && ((e.currentTime = 0), e?.pause());
                },
                onEnterBack: () => {
                  const e = t.DOM.activeItem.querySelector("video");
                  e?.play();
                },
                onLeaveBack: () => {
                  const e = t.DOM.activeItem.querySelector("video");
                  e && ((e.currentTime = 0), e?.pause());
                },
              });
            }, 1e3);
      }
      resize() {
        const e = this;
        (e.bounds.el = e.DOM.el.getBoundingClientRect()),
          (e.bounds.wrapper = e.DOM.wrapper.getBoundingClientRect()),
          (e.bounds.container = e.DOM.container.getBoundingClientRect()),
          (e.activeWidth = e.bounds.container.width),
          (e.defaultWidth = e.DOM.wrapper
            .querySelector(".carousel-item:not(.active)")
            .getBoundingClientRect().width),
          (e.DOM.wrapper.style.height = `${e.DOM.items[e.activeIndex].offsetHeight}px`);
      }
      setActiveItem() {
        const e = this;
        (e.DOM.activeItem = e.DOM.items[e.activeIndex]),
          (e.DOM.prevItem = e.DOM.items[e.prevIndex]);
        const t = e.DOM.activeItem.querySelector(".carousel-item-content");
        if (
          (Bm.to(e.DOM.activeItem, {
            duration: 0.3,
            width: e.activeWidth,
            ease: "power2.out",
            onComplete: () => {
              Bm.to(t, { duration: 0.2, autoAlpha: 1, ease: "power2.out" });
              const i = e.DOM.activeItem.querySelector("video");
              i?.play();
            },
          }),
          e.prevIndex !== e.activeIndex)
        ) {
          const t = e.DOM.prevItem.querySelector(".carousel-item-content");
          Bm.to(t, {
            duration: 0.2,
            autoAlpha: 0,
            ease: "power2.out",
            onComplete: () => {},
          }),
            Bm.to(e.DOM.prevItem, {
              duration: 0.3,
              width: e.defaultWidth,
              ease: "power2.out",
              onComplete: () => {
                const t = e.DOM.prevItem.querySelector("video");
                t && ((t.currentTime = 0), t.pause());
              },
            });
        }
        e.DOM.prevItem.classList.remove("active"),
          e.DOM.activeItem.classList.add("active"),
          e.DOM.btnPrev.classList.toggle("disabled", 0 === e.activeIndex),
          e.DOM.btnNext.classList.toggle(
            "disabled",
            e.activeIndex === e.count - 1,
          );
      }
      toggleContent(e) {
        const t = this,
          i = e.querySelector("[data-short-text]"),
          n = e.querySelector("[data-long-text]"),
          r = e.closest(".carousel-item");
        e.classList.contains("expanded")
          ? ((t.expandedContent = !1),
            t.DOM.el.classList.remove("expanded-content"),
            e.setAttribute("data-collapsed", !0),
            t.DOM.items.forEach((e) => {
              Bm.to(e, { autoAlpha: 1, duration: 0.2, ease: "power2.out" });
            }),
            Bm.to(e, {
              opacity: 0,
              duration: 0.15,
              onComplete: () => {
                i.classList.remove("hidden"),
                  n.classList.add("hidden"),
                  e.classList.remove("expanded"),
                  Bm.to(e, { opacity: 1, duration: 0.15 });
              },
            }))
          : ((t.expandedContent = !0),
            t.DOM.el.classList.add("expanded-content"),
            e.setAttribute("data-collapsed", !1),
            t.DOM.items.forEach((e) => {
              e !== r &&
                Bm.to(e, { autoAlpha: 0, duration: 0.2, ease: "power2.out" });
            }),
            Bm.to(e, {
              opacity: 0,
              duration: 0.15,
              onComplete: () => {
                i.classList.add("hidden"),
                  n.classList.remove("hidden"),
                  e.classList.add("expanded"),
                  Bm.to(e, { opacity: 1, duration: 0.15 });
              },
            })),
          e.dispatchEvent(new Event("mouseenter"));
      }
      next() {
        const e = this;
        e.activeIndex < e.count - 1 &&
          ((e.prevIndex = e.activeIndex),
          e.activeIndex++,
          (e.offset -= e.defaultWidth),
          Bm.to(e.DOM.wrapper, {
            duration: 0.5,
            x: () => e.offset,
            ease: "power2.out",
            onComplete: () => {},
          }),
          e.setActiveItem());
      }
      prev() {
        const e = this;
        e.activeIndex > 0 &&
          ((e.prevIndex = e.activeIndex),
          e.activeIndex--,
          (e.offset += e.defaultWidth),
          Bm.to(e.DOM.wrapper, {
            duration: 0.5,
            x: () => e.offset,
            ease: "power2.out",
          }),
          e.setActiveItem());
      }
    };
    const Rm = {
      init() {
        if (document.querySelector(".media")) {
          document.querySelectorAll(".mute").forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.closest(".media").querySelector("video");
              t.muted = !t.muted;
            });
          }),
            document.querySelectorAll(".media video").forEach((e) => {
              const t = e.closest(".media");
              e.addEventListener("pause", () => {
                t.classList.remove("playing");
              }),
                e.addEventListener("play", () => {
                  t.classList.add("playing");
                }),
                e.addEventListener("playing", () => {
                  t.classList.add("playing");
                }),
                e.addEventListener("volumechange", () => {
                  e.muted
                    ? (t.classList.add("muted"), t.classList.remove("unmuted"))
                    : (t.classList.add("unmuted"), t.classList.remove("muted"));
                });
            });
        }
        document
          .querySelectorAll("video[data-src], video source[data-src]")
          .forEach((e) => {
            const t = "SOURCE" === e.tagName ? e.closest("video") : e,
              i = "true" === t.dataset.disablePause,
              n = "true" === t.dataset.autoplayInViewport,
              r = t.getAttribute("poster"),
              o = () => {
                const a = e.dataset.src,
                  s = a.split(".").pop().toLowerCase(),
                  c = t.canPlayType(`video/${s}`);
                c
                  ? e.src
                    ? n && t.play().catch(() => {})
                    : ((e.src = a),
                      t.load(),
                      t.addEventListener("loadeddata", () => {
                        Rp.refresh(), n && t.play().catch(() => {});
                      }))
                  : ((t.src = ""),
                    t.load(),
                    r &&
                      ((t.style.backgroundImage = `url('${r}')`),
                      (t.style.backgroundSize = "cover"),
                      (t.style.backgroundPosition = "center")));
              };
            ScrollTrigger.create({
              trigger: t,
              start: "top bottom",
              end: "bottom top",
              invalidateOnRefresh: !0,
              refreshPriority: -1,
              onEnter: () => {
                o();
              },
              onLeaveBack: () => {
                i || t.pause();
              },
              onLeave: () => {
                i || t.pause();
              },
              onEnterBack: () => {
                o(), t.play().catch(() => {});
              },
            });
          });
      },
    };
    var zm = Rm;
    var qm = {
      init() {
        const e = document.querySelectorAll(".contact-form");
        e &&
          e.forEach((e) => {
            const t = e.querySelectorAll("input[required]"),
              i = new (Sp())(e, { errorTextClass: "form-error" });
            e.addEventListener("submit", function (n) {
              n.preventDefault();
              i.validate() && e.submit(),
                t.forEach((e) => {
                  const t = e.closest(
                    ".form-group, .form-selectors-group, .form-selectors-list",
                  );
                  if (!t) return;
                  const n = t.querySelector(".form-error");
                  i.getErrors(e).length
                    ? ("radio" !== e.type && "checkbox" !== e.type) ||
                      (t &&
                        !n &&
                        t.appendChild(
                          ((e) => {
                            const t = document.createElement("span");
                            return (
                              (t.className = "form-error"),
                              (t.innerText = i.getErrors(e).join(", ")),
                              t
                            );
                          })(e),
                        ))
                    : ("radio" !== e.type && "checkbox" !== e.type) ||
                      (n && n.remove());
                }),
                Scroller.refresh();
            });
          });
      },
    };
    (window.gsap = $n),
      (window.imagesLoaded = jn()),
      (window.ScrollTrigger = Ju),
      (window.DrawSVGPlugin = kc),
      (window.SplitText = nd),
      (window.ScrambleTextPlugin = fd),
      (window.Swiper = $f),
      (window.SwiperModules = {
        Autoplay: function (e) {
          let t,
            i,
            { swiper: n, extendParams: r, on: s, emit: o, params: a } = e;
          (n.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
            r({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            });
          let l,
            u,
            c,
            d,
            h,
            p,
            f,
            m,
            g = a && a.autoplay ? a.autoplay.delay : 3e3,
            v = a && a.autoplay ? a.autoplay.delay : 3e3,
            y = new Date().getTime();
          function D(e) {
            n &&
              !n.destroyed &&
              n.wrapperEl &&
              e.target === n.wrapperEl &&
              (n.wrapperEl.removeEventListener("transitionend", D),
              m || (e.detail && e.detail.bySwiperTouchMove) || S());
          }
          const w = () => {
              if (n.destroyed || !n.autoplay.running) return;
              n.autoplay.paused ? (u = !0) : u && ((v = l), (u = !1));
              const e = n.autoplay.paused ? l : y + v - new Date().getTime();
              (n.autoplay.timeLeft = e),
                o("autoplayTimeLeft", e, e / g),
                (i = requestAnimationFrame(() => {
                  w();
                }));
            },
            _ = (e) => {
              if (n.destroyed || !n.autoplay.running) return;
              cancelAnimationFrame(i), w();
              let r = void 0 === e ? n.params.autoplay.delay : e;
              (g = n.params.autoplay.delay), (v = n.params.autoplay.delay);
              const s = (() => {
                let e;
                if (
                  ((e =
                    n.virtual && n.params.virtual.enabled
                      ? n.slides.find((e) =>
                          e.classList.contains("swiper-slide-active"),
                        )
                      : n.slides[n.activeIndex]),
                  !e)
                )
                  return;
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
              })();
              !Number.isNaN(s) &&
                s > 0 &&
                void 0 === e &&
                ((r = s), (g = s), (v = s)),
                (l = r);
              const a = n.params.speed,
                u = () => {
                  n &&
                    !n.destroyed &&
                    (n.params.autoplay.reverseDirection
                      ? !n.isBeginning || n.params.loop || n.params.rewind
                        ? (n.slidePrev(a, !0, !0), o("autoplay"))
                        : n.params.autoplay.stopOnLastSlide ||
                          (n.slideTo(n.slides.length - 1, a, !0, !0),
                          o("autoplay"))
                      : !n.isEnd || n.params.loop || n.params.rewind
                        ? (n.slideNext(a, !0, !0), o("autoplay"))
                        : n.params.autoplay.stopOnLastSlide ||
                          (n.slideTo(0, a, !0, !0), o("autoplay")),
                    n.params.cssMode &&
                      ((y = new Date().getTime()),
                      requestAnimationFrame(() => {
                        _();
                      })));
                };
              return (
                r > 0
                  ? (clearTimeout(t),
                    (t = setTimeout(() => {
                      u();
                    }, r)))
                  : requestAnimationFrame(() => {
                      u();
                    }),
                r
              );
            },
            x = () => {
              (y = new Date().getTime()),
                (n.autoplay.running = !0),
                _(),
                o("autoplayStart");
            },
            b = () => {
              (n.autoplay.running = !1),
                clearTimeout(t),
                cancelAnimationFrame(i),
                o("autoplayStop");
            },
            E = (e, i) => {
              if (n.destroyed || !n.autoplay.running) return;
              clearTimeout(t), e || (f = !0);
              const r = () => {
                o("autoplayPause"),
                  n.params.autoplay.waitForTransition
                    ? n.wrapperEl.addEventListener("transitionend", D)
                    : S();
              };
              if (((n.autoplay.paused = !0), i))
                return p && (l = n.params.autoplay.delay), (p = !1), void r();
              const s = l || n.params.autoplay.delay;
              (l = s - (new Date().getTime() - y)),
                (n.isEnd && l < 0 && !n.params.loop) || (l < 0 && (l = 0), r());
            },
            S = () => {
              (n.isEnd && l < 0 && !n.params.loop) ||
                n.destroyed ||
                !n.autoplay.running ||
                ((y = new Date().getTime()),
                f ? ((f = !1), _(l)) : _(),
                (n.autoplay.paused = !1),
                o("autoplayResume"));
            },
            T = () => {
              if (n.destroyed || !n.autoplay.running) return;
              const e = Gp();
              "hidden" === e.visibilityState && ((f = !0), E(!0)),
                "visible" === e.visibilityState && S();
            },
            C = (e) => {
              "mouse" === e.pointerType &&
                ((f = !0), (m = !0), n.animating || n.autoplay.paused || E(!0));
            },
            M = (e) => {
              "mouse" === e.pointerType && ((m = !1), n.autoplay.paused && S());
            };
          s("init", () => {
            n.params.autoplay.enabled &&
              (n.params.autoplay.pauseOnMouseEnter &&
                (n.el.addEventListener("pointerenter", C),
                n.el.addEventListener("pointerleave", M)),
              Gp().addEventListener("visibilitychange", T),
              x());
          }),
            s("destroy", () => {
              n.el &&
                "string" != typeof n.el &&
                (n.el.removeEventListener("pointerenter", C),
                n.el.removeEventListener("pointerleave", M)),
                Gp().removeEventListener("visibilitychange", T),
                n.autoplay.running && b();
            }),
            s("_freeModeStaticRelease", () => {
              (d || f) && S();
            }),
            s("_freeModeNoMomentumRelease", () => {
              n.params.autoplay.disableOnInteraction ? b() : E(!0, !0);
            }),
            s("beforeTransitionStart", (e, t, i) => {
              !n.destroyed &&
                n.autoplay.running &&
                (i || !n.params.autoplay.disableOnInteraction
                  ? E(!0, !0)
                  : b());
            }),
            s("sliderFirstMove", () => {
              !n.destroyed &&
                n.autoplay.running &&
                (n.params.autoplay.disableOnInteraction
                  ? b()
                  : ((c = !0),
                    (d = !1),
                    (f = !1),
                    (h = setTimeout(() => {
                      (f = !0), (d = !0), E(!0);
                    }, 200))));
            }),
            s("touchEnd", () => {
              if (!n.destroyed && n.autoplay.running && c) {
                if (
                  (clearTimeout(h),
                  clearTimeout(t),
                  n.params.autoplay.disableOnInteraction)
                )
                  return (d = !1), void (c = !1);
                d && n.params.cssMode && S(), (d = !1), (c = !1);
              }
            }),
            s("slideChange", () => {
              !n.destroyed && n.autoplay.running && (p = !0);
            }),
            Object.assign(n.autoplay, {
              start: x,
              stop: b,
              pause: E,
              resume: S,
            });
        },
        EffectFade: function (e) {
          let { swiper: t, extendParams: i, on: n } = e;
          i({ fadeEffect: { crossFade: !1 } }),
            (function (e) {
              const {
                effect: t,
                swiper: i,
                on: n,
                setTranslate: r,
                setTransition: s,
                overwriteParams: o,
                perspective: a,
                recreateShadows: l,
                getEffectParams: u,
              } = e;
              let c;
              n("beforeInit", () => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`),
                  a &&
                    a() &&
                    i.classNames.push(`${i.params.containerModifierClass}3d`);
                const e = o ? o() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e);
              }),
                n("setTranslate", () => {
                  i.params.effect === t && r();
                }),
                n("setTransition", (e, n) => {
                  i.params.effect === t && s(n);
                }),
                n("transitionEnd", () => {
                  if (i.params.effect === t && l) {
                    if (!u || !u().slideShadows) return;
                    i.slides.forEach((e) => {
                      e.querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
                      ).forEach((e) => e.remove());
                    }),
                      l();
                  }
                }),
                n("virtualUpdate", () => {
                  i.params.effect === t &&
                    (i.slides.length || (c = !0),
                    requestAnimationFrame(() => {
                      c && i.slides && i.slides.length && (r(), (c = !1));
                    }));
                });
            })({
              effect: "fade",
              swiper: t,
              on: n,
              setTranslate: () => {
                const { slides: e } = t;
                t.params.fadeEffect;
                for (let i = 0; i < e.length; i += 1) {
                  const e = t.slides[i];
                  let n = -e.swiperSlideOffset;
                  t.params.virtualTranslate || (n -= t.translate);
                  let r = 0;
                  t.isHorizontal() || ((r = n), (n = 0));
                  const s = t.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(e.progress), 0)
                      : 1 + Math.min(Math.max(e.progress, -1), 0),
                    o = xm(0, e);
                  (o.style.opacity = s),
                    (o.style.transform = `translate3d(${n}px, ${r}px, 0px)`);
                }
              },
              setTransition: (e) => {
                const i = t.slides.map((e) => rf(e));
                i.forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                }),
                  bm({
                    swiper: t,
                    duration: e,
                    transformElements: i,
                    allSlides: !0,
                  });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode,
              }),
            });
        },
        FreeMode: function (e) {
          let { swiper: t, extendParams: i, emit: n, once: r } = e;
          i({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(t, {
              freeMode: {
                onTouchStart: function () {
                  if (t.params.cssMode) return;
                  const e = t.getTranslate();
                  t.setTranslate(e),
                    t.setTransition(0),
                    (t.touchEventsData.velocities.length = 0),
                    t.freeMode.onTouchEnd({
                      currentPos: t.rtl ? t.translate : -t.translate,
                    });
                },
                onTouchMove: function () {
                  if (t.params.cssMode) return;
                  const { touchEventsData: e, touches: i } = t;
                  0 === e.velocities.length &&
                    e.velocities.push({
                      position: i[t.isHorizontal() ? "startX" : "startY"],
                      time: e.touchStartTime,
                    }),
                    e.velocities.push({
                      position: i[t.isHorizontal() ? "currentX" : "currentY"],
                      time: Kp(),
                    });
                },
                onTouchEnd: function (e) {
                  let { currentPos: i } = e;
                  if (t.params.cssMode) return;
                  const {
                      params: s,
                      wrapperEl: o,
                      rtlTranslate: a,
                      snapGrid: l,
                      touchEventsData: u,
                    } = t,
                    c = Kp() - u.touchStartTime;
                  if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                  else if (i > -t.maxTranslate())
                    t.slides.length < l.length
                      ? t.slideTo(l.length - 1)
                      : t.slideTo(t.slides.length - 1);
                  else {
                    if (s.freeMode.momentum) {
                      if (u.velocities.length > 1) {
                        const e = u.velocities.pop(),
                          i = u.velocities.pop(),
                          n = e.position - i.position,
                          r = e.time - i.time;
                        (t.velocity = n / r),
                          (t.velocity /= 2),
                          Math.abs(t.velocity) < s.freeMode.minimumVelocity &&
                            (t.velocity = 0),
                          (r > 150 || Kp() - e.time > 300) && (t.velocity = 0);
                      } else t.velocity = 0;
                      (t.velocity *= s.freeMode.momentumVelocityRatio),
                        (u.velocities.length = 0);
                      let e = 1e3 * s.freeMode.momentumRatio;
                      const i = t.velocity * e;
                      let c = t.translate + i;
                      a && (c = -c);
                      let d,
                        h = !1;
                      const p =
                        20 *
                        Math.abs(t.velocity) *
                        s.freeMode.momentumBounceRatio;
                      let f;
                      if (c < t.maxTranslate())
                        s.freeMode.momentumBounce
                          ? (c + t.maxTranslate() < -p &&
                              (c = t.maxTranslate() - p),
                            (d = t.maxTranslate()),
                            (h = !0),
                            (u.allowMomentumBounce = !0))
                          : (c = t.maxTranslate()),
                          s.loop && s.centeredSlides && (f = !0);
                      else if (c > t.minTranslate())
                        s.freeMode.momentumBounce
                          ? (c - t.minTranslate() > p &&
                              (c = t.minTranslate() + p),
                            (d = t.minTranslate()),
                            (h = !0),
                            (u.allowMomentumBounce = !0))
                          : (c = t.minTranslate()),
                          s.loop && s.centeredSlides && (f = !0);
                      else if (s.freeMode.sticky) {
                        let e;
                        for (let t = 0; t < l.length; t += 1)
                          if (l[t] > -c) {
                            e = t;
                            break;
                          }
                        (c =
                          Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) ||
                          "next" === t.swipeDirection
                            ? l[e]
                            : l[e - 1]),
                          (c = -c);
                      }
                      if (
                        (f &&
                          r("transitionEnd", () => {
                            t.loopFix();
                          }),
                        0 !== t.velocity)
                      ) {
                        if (
                          ((e = a
                            ? Math.abs((-c - t.translate) / t.velocity)
                            : Math.abs((c - t.translate) / t.velocity)),
                          s.freeMode.sticky)
                        ) {
                          const i = Math.abs((a ? -c : c) - t.translate),
                            n = t.slidesSizesGrid[t.activeIndex];
                          e =
                            i < n
                              ? s.speed
                              : i < 2 * n
                                ? 1.5 * s.speed
                                : 2.5 * s.speed;
                        }
                      } else if (s.freeMode.sticky)
                        return void t.slideToClosest();
                      s.freeMode.momentumBounce && h
                        ? (t.updateProgress(d),
                          t.setTransition(e),
                          t.setTranslate(c),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          cf(o, () => {
                            t &&
                              !t.destroyed &&
                              u.allowMomentumBounce &&
                              (n("momentumBounce"),
                              t.setTransition(s.speed),
                              setTimeout(() => {
                                t.setTranslate(d),
                                  cf(o, () => {
                                    t && !t.destroyed && t.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : t.velocity
                          ? (n("_freeModeNoMomentumRelease"),
                            t.updateProgress(c),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating ||
                              ((t.animating = !0),
                              cf(o, () => {
                                t && !t.destroyed && t.transitionEnd();
                              })))
                          : t.updateProgress(c),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                    } else {
                      if (s.freeMode.sticky) return void t.slideToClosest();
                      s.freeMode && n("_freeModeNoMomentumRelease");
                    }
                    (!s.freeMode.momentum || c >= s.longSwipesMs) &&
                      (n("_freeModeStaticRelease"),
                      t.updateProgress(),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses());
                  }
                },
              },
            });
        },
        Navigation: _m,
      }),
      (window.Scroller = Rp),
      (window.windowWidth = window.innerWidth),
      (window.Flip = vh),
      (window.Pristine = Sp()),
      (window.MediaCarousel = Nm),
      $n.registerPlugin(Ju, kc, nd, fd, vh, bp),
      $n.config({ nullTargetWarn: !1 }),
      document.addEventListener("DOMContentLoaded", function () {
        Fm.init(),
          Im.init(),
          Am.init(),
          Rp.init(),
          ar.init(),
          Go.init(),
          Cp.init(),
          Om.init(),
          Ap.init(),
          Hp.init(),
          Jf.init(),
          zm.init(),
          Dm.init(),
          wm.init(),
          Sm.init(),
          Pm.init(),
          Am.init(),
          Uf.init(),
          qm.init(),
          Kf()() || em.A.init();
      }),
      window.addEventListener("pageTransitionEnd", function () {
        Uf.init();
      }),
      document.addEventListener("portfolioLoadMore", function () {
        Uf.init(), Jf.init(), Pm.init();
      }),
      window.addEventListener("resize", function () {
        window.windowWidth = window.innerWidth;
      });
  })();
})();
