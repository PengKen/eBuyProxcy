webpackJsonp([1], {
  "+IAf": function (t, e) {
  }, "/kga": function (t, e, i) {
    "use strict";
    var n = i("JkZY"), a = (n.a, Boolean, String, String, Number, String, String, Boolean, Object, Boolean, {
      mixins: [n.a],
      name: "x-dialog",
      model: {prop: "show", event: "change"},
      props: {
        show: {type: Boolean, default: !1},
        maskTransition: {type: String, default: "vux-mask"},
        maskZIndex: [String, Number],
        dialogTransition: {type: String, default: "vux-dialog"},
        dialogClass: {type: String, default: "weui-dialog"},
        hideOnBlur: Boolean,
        dialogStyle: Object,
        scroll: {
          type: Boolean, default: !0, validator: function (t) {
            return !0
          }
        }
      },
      computed: {
        maskStyle: function () {
          if (void 0 !== this.maskZIndex) return {zIndex: this.maskZIndex}
        }
      },
      mounted: function () {
        "undefined" != typeof window && window.VUX_CONFIG && "VIEW_BOX" === window.VUX_CONFIG.$layout && (this.layout = "VIEW_BOX")
      },
      watch: {
        show: function (t) {
          this.$emit("update:show", t), this.$emit(t ? "on-show" : "on-hide"), t ? this.addModalClassName() : this.removeModalClassName()
        }
      },
      methods: {
        shouldPreventScroll: function () {
          var t = /iPad|iPhone|iPod/i.test(window.navigator.userAgent),
            e = this.$el.querySelector("input") || this.$el.querySelector("textarea");
          if (t && e) return !0
        }, hide: function () {
          this.hideOnBlur && (this.$emit("update:show", !1), this.$emit("change", !1), this.$emit("on-click-mask"))
        }
      },
      data: function () {
        return {layout: ""}
      }
    }), s = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {
          staticClass: "vux-x-dialog",
          class: {"vux-x-dialog-absolute": "VIEW_BOX" === t.layout}
        }, [i("transition", {attrs: {name: t.maskTransition}}, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.show,
            expression: "show"
          }], staticClass: "weui-mask", style: t.maskStyle, on: {click: t.hide}
        })]), t._v(" "), i("transition", {attrs: {name: t.dialogTransition}}, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.show,
            expression: "show"
          }], class: t.dialogClass, style: t.dialogStyle
        }, [t._t("default")], 2)])], 1)
      }, staticRenderFns: []
    };
    var r = i("VU/8")(a, s, !1, function (t) {
      i("HgrL")
    }, null, null);
    e.a = r.exports
  }, 0: function (t, e) {
  }, "1Nsc": function (t, e, i) {
    t.exports = i.p + "static/img/expert-click.bfd5083.jpg"
  }, "2l9w": function (t, e) {
  }, "37g4": function (t, e) {
  }, "5Rj2": function (t, e) {
  }, "62KO": function (t, e, i) {
    "use strict";
    var n = i("/kga"),
      a = (n.a, Boolean, Boolean, String, String, Boolean, String, String, String, String, Number, String, String, String, Boolean, Object, Boolean, String, Boolean, Boolean, {
        name: "confirm",
        components: {XDialog: n.a},
        props: {
          value: {type: Boolean, default: !1},
          showInput: {type: Boolean, default: !1},
          placeholder: {type: String, default: ""},
          theme: {type: String, default: "ios"},
          hideOnBlur: {type: Boolean, default: !1},
          title: String,
          confirmText: String,
          cancelText: String,
          maskTransition: {type: String, default: "vux-fade"},
          maskZIndex: [Number, String],
          dialogTransition: {type: String, default: "vux-dialog"},
          content: String,
          closeOnConfirm: {type: Boolean, default: !0},
          inputAttrs: Object,
          showContent: {type: Boolean, default: !0},
          confirmType: {type: String, default: "primary"},
          showCancelButton: {type: Boolean, default: !0},
          showConfirmButton: {type: Boolean, default: !0}
        },
        created: function () {
          this.showValue = this.show, this.value && (this.showValue = this.value)
        },
        watch: {
          value: function (t) {
            this.showValue = t
          }, showValue: function (t) {
            var e = this;
            this.$emit("input", t), t && (this.showInput && (this.msg = "", setTimeout(function () {
              e.$refs.input && e.setInputFocus()
            }, 300)), this.$emit("on-show"))
          }
        },
        data: function () {
          return {msg: "", showValue: !1}
        },
        methods: {
          getInputAttrs: function () {
            return this.inputAttrs || {type: "text"}
          }, setInputValue: function (t) {
            this.msg = t
          }, setInputFocus: function (t) {
            t && t.preventDefault(), this.$refs.input.focus()
          }, _onConfirm: function () {
            this.showValue && (this.closeOnConfirm && (this.showValue = !1), this.$emit("on-confirm", this.msg))
          }, _onCancel: function () {
            this.showValue && (this.showValue = !1, this.$emit("on-cancel"))
          }
        }
      }), s = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {staticClass: "vux-confirm"}, [i("x-dialog", {
            attrs: {
              "dialog-class": "android" === t.theme ? "weui-dialog weui-skin_android" : "weui-dialog",
              "mask-transition": t.maskTransition,
              "dialog-transition": "android" === t.theme ? "vux-fade" : t.dialogTransition,
              "hide-on-blur": t.hideOnBlur,
              "mask-z-index": t.maskZIndex
            }, on: {
              "on-hide": function (e) {
                t.$emit("on-hide")
              }
            }, model: {
              value: t.showValue, callback: function (e) {
                t.showValue = e
              }, expression: "showValue"
            }
          }, [t.title ? i("div", {
            staticClass: "weui-dialog__hd",
            class: {"with-no-content": !t.showContent}
          }, [i("strong", {staticClass: "weui-dialog__title"}, [t._v(t._s(t.title))])]) : t._e(), t._v(" "), t.showContent ? [t.showInput ? i("div", {staticClass: "vux-prompt"}, ["checkbox" === t.getInputAttrs().type ? i("input", t._b({
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.msg,
              expression: "msg"
            }],
            ref: "input",
            staticClass: "vux-prompt-msgbox",
            attrs: {placeholder: t.placeholder, type: "checkbox"},
            domProps: {checked: Array.isArray(t.msg) ? t._i(t.msg, null) > -1 : t.msg},
            on: {
              touchend: t.setInputFocus, change: function (e) {
                var i = t.msg, n = e.target, a = !!n.checked;
                if (Array.isArray(i)) {
                  var s = t._i(i, null);
                  n.checked ? s < 0 && (t.msg = i.concat([null])) : s > -1 && (t.msg = i.slice(0, s).concat(i.slice(s + 1)))
                } else t.msg = a
              }
            }
          }, "input", t.getInputAttrs(), !1)) : "radio" === t.getInputAttrs().type ? i("input", t._b({
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.msg,
              expression: "msg"
            }],
            ref: "input",
            staticClass: "vux-prompt-msgbox",
            attrs: {placeholder: t.placeholder, type: "radio"},
            domProps: {checked: t._q(t.msg, null)},
            on: {
              touchend: t.setInputFocus, change: function (e) {
                t.msg = null
              }
            }
          }, "input", t.getInputAttrs(), !1)) : i("input", t._b({
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.msg,
              expression: "msg"
            }],
            ref: "input",
            staticClass: "vux-prompt-msgbox",
            attrs: {placeholder: t.placeholder, type: t.getInputAttrs().type},
            domProps: {value: t.msg},
            on: {
              touchend: t.setInputFocus, input: function (e) {
                e.target.composing || (t.msg = e.target.value)
              }
            }
          }, "input", t.getInputAttrs(), !1))]) : i("div", {staticClass: "weui-dialog__bd"}, [t._t("default", [i("div", {domProps: {innerHTML: t._s(t.content)}})])], 2)] : t._e(), t._v(" "), i("div", {staticClass: "weui-dialog__ft"}, [t.showCancelButton ? i("a", {
            staticClass: "weui-dialog__btn weui-dialog__btn_default",
            attrs: {href: "javascript:;"},
            on: {click: t._onCancel}
          }, [t._v(t._s(t.cancelText || "取消"))]) : t._e(), t._v(" "), t.showConfirmButton ? i("a", {
            staticClass: "weui-dialog__btn",
            class: "weui-dialog__btn_" + t.confirmType,
            attrs: {href: "javascript:;"},
            on: {click: t._onConfirm}
          }, [t._v(t._s(t.confirmText || "确定"))]) : t._e()])], 2)], 1)
        }, staticRenderFns: []
      };
    var r = i("VU/8")(a, s, !1, function (t) {
      i("uqU7")
    }, null, null);
    e.a = r.exports
  }, "72cZ": function (t, e) {
  }, "7feK": function (t, e) {
  }, "8Etr": function (t, e) {
  }, "8jW6": function (t, e) {
  }, "8rH6": function (t, e) {
  }, "9J5q": function (t, e) {
  }, "9dZf": function (t, e) {
  }, B99f: function (t, e) {
  }, Bfwr: function (t, e, i) {
    "use strict";
    Boolean, String, String, String;
    var n = {
      name: "loading",
      model: {prop: "show", event: "change"},
      props: {show: Boolean, text: String, position: String, transition: {type: String, default: "vux-mask"}},
      watch: {
        show: function (t) {
          this.$emit("update:show", t)
        }
      }
    }, a = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("transition", {attrs: {name: t.transition}}, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.show,
            expression: "show"
          }], staticClass: "weui-loading_toast vux-loading", class: t.text ? "" : "vux-loading-no-text"
        }, [i("div", {staticClass: "weui-mask_transparent"}), t._v(" "), i("div", {
          staticClass: "weui-toast",
          style: {position: t.position}
        }, [i("i", {staticClass: "weui-loading weui-icon_toast"}), t._v(" "), t.text ? i("p", {staticClass: "weui-toast__content"}, [t._v(t._s(t.text || "加载中")), t._t("default")], 2) : t._e()])])])
      }, staticRenderFns: []
    };
    var s = i("VU/8")(n, a, !1, function (t) {
      i("aRsN")
    }, null, null);
    e.a = s.exports
  }, BtvU: function (t, e) {
  }, CbdW: function (t, e) {
  }, HgrL: function (t, e) {
  }, HlIM: function (t, e) {
  }, "I+l+": function (t, e) {
  }, JJVs: function (t, e) {
  }, JRgG: function (t, e) {
  }, K0cg: function (t, e) {
  }, LHec: function (t, e) {
  }, "N+zL": function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("div", {class: this.slideClass}, [this._t("default")], 2)
      }, staticRenderFns: []
    }, a = i("VU/8")({
      name: "swiper-slide", data: function () {
        return {slideClass: "swiper-slide"}
      }, ready: function () {
        this.update()
      }, mounted: function () {
        this.update(), this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
      }, updated: function () {
        this.update()
      }, attached: function () {
        this.update()
      }, methods: {
        update: function () {
          this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop())
        }
      }
    }, n, !1, null, null, null);
    e.default = a.exports
  }, NHnr: function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = i("7+uW"), a = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "button-bar"}}, [i("ul", {staticClass: "wrapper"}, [i("router-link", {
          attrs: {
            to: {
              name: "Home",
              params: {}
            }
          }
        }, [i("li", [i("i", {staticClass: "icon iconfont icon-home-copy"}), t._v(" "), i("div", {staticClass: "name"}, [t._v("首页")])])]), t._v(" "), i("router-link", {
          attrs: {
            to: {
              name: "Battle",
              params: {}
            }
          }
        }, [i("li", [i("i", {staticClass: "icon iconfont icon-duizhanpingtai"}), t._v(" "), i("div", {staticClass: "name"}, [t._v("对战平台")])])]), t._v(" "), i("router-link", {
          attrs: {
            to: {
              path: "/battlehall",
              params: {}
            }
          }
        }, [i("li", [i("i", {staticClass: "icon iconfont icon-youxidating"}), t._v(" "), i("div", {staticClass: "name"}, [t._v("游戏大厅")])])]), t._v(" "), i("router-link", {
          attrs: {
            to: {
              name: "My",
              params: {}
            }
          }
        }, [i("li", [i("i", {staticClass: "icon iconfont icon-profile"}), t._v(" "), i("div", {staticClass: "name"}, [t._v("我 的")])])])], 1)])
      }, staticRenderFns: []
    };
    var s = i("VU/8")({name: "button-bar"}, a, !1, function (t) {
      i("B99f")
    }, "data-v-0674208a", null).exports, r = i("NXWw");
    n.a.use(r.a);
    n.a.use(r.a);
    var o = {
      name: "App", data: function () {
        return {isShow: !0}
      }, created: function () {
        var t = this;
        this.$vux.confirm.prompt("UserId", {
          onCancel: function () {
          }, onConfirm: function (e) {
            t.$store.dispatch("setUserInfo", e)
          }
        })
      }, components: {ButtonBar: s}, watch: {
        $route: function (t, e, i) {
          t.meta.index > e.meta.index ? this.isShow = !1 : this.isShow = !0
        }
      }
    }, l = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "app"}}, [e("router-view"), this._v(" "), e("transition", {attrs: {name: "silde-hide"}}, [this.isShow ? e("button-bar", {staticClass: "button"}) : this._e()], 1)], 1)
      }, staticRenderFns: []
    };
    var c = i("VU/8")(o, l, !1, function (t) {
      i("OPbj")
    }, null, null).exports, u = i("/ocq"), d = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("transition", {attrs: {name: this.rotate}}, [e("router-view")], 1)
      }, staticRenderFns: []
    };
    var h = i("VU/8")({
        name: "index", data: function () {
          return {rotate: ""}
        }, watch: {
          $route: function (t, e, i) {
            "home" === t.meta.transform ? this.rotate = "home" : this.rotate = "battle"
          }
        }
      }, d, !1, function (t) {
        i("2l9w")
      }, "data-v-20bddc0e", null).exports, p = i("bOdI"), v = i.n(p), m = i("Dd8w"), f = i.n(m), g = i("Xxa5"),
      _ = i.n(g), b = i("exGp"), w = i.n(b), x = i("NYxO"), y = i("//Fk"), S = i.n(y), C = i("mtWM"), B = i.n(C),
      k = (i("mw3O"), i("Y+qm")), $ = i("3BeM");
    n.a.use($.a), n.a.use(k.a);
    var T = {type: "text", position: "bottom", text: "胸得，你的网络不太行哦～～", width: "80%", time: 3e3};
    B.a.interceptors.request.use(function (t) {
      return t.noShowLoading || n.a.$vux.loading.show({text: "Loading"}), t
    }, function (t) {
      return S.a.reject(t)
    });
    B.a.defaults.headers.post["Content-Type"] = "application/json", B.a.interceptors.response.use(function (t) {
      return n.a.$vux.loading.hide(), t
    }, function (t) {
      return n.a.$vux.loading.hide(), function (t) {
        try {
          console.log(t)
        } catch (t) {
          console.log(t)
        }
        if (t && (200 === t.status || 304 === t.status || 400 === t.status)) return t.data;
        t && t.status >= 500 ? n.a.$vux.toast.show(f()({}, T, {text: "服务器异常，请等待修复"})) : n.a.$vux.toast.show(f()({}, T))
      }(t), S.a.reject(t)
    });
    var I = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET", e = {
        method: t,
        baseURL: "http://192.168.43.118:3000" + arguments[1],
        timeout: 1e4,
        data: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        headers: {},
        noShowLoading: arguments[3] || !1
      };
      return "GET" == t ? delete e.data : delete e.params, new S.a(function (t, i) {
        B()(e).then(function (e) {
          t(e.data)
        }).catch(function (t) {
          i(t)
        })
      })
    };

    function D(t) {
      return I("POST", "/api/v1/eBuy/battle", t)
    }

    function V(t, e) {
      return I("Get", "/api/v1/eBuy/userBattles/" + t + "?selectTime=" + e)
    }

    function F(t) {
      return I("Get", "/api/v1/eBuy/userInfo/" + t)
    }

    var N = {
      namespaced: !0,
      state: {boardList: [{userId: "", name: "", winRate: 0, challengeState: "", honor: ""}], fuck: "aaa"},
      getters: {
        allBoardList: function (t, e, i) {
          return t.boardList
        }
      },
      actions: {
        getBoardList: function (t) {
          var e = this, i = t.commit, n = t.state;
          return w()(_.a.mark(function t() {
            var a;
            return _.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, I("GET", "/api/v1/eBuy/boardList");
                case 2:
                  return a = t.sent, i("setBoardList", a), t.abrupt("return", n);
                case 5:
                case"end":
                  return t.stop()
              }
            }, t, e)
          }))()
        }, setBoardListUserState: function (t) {
          var e = this, i = (t.commit, t.state);
          return w()(_.a.mark(function t() {
            return _.a.wrap(function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  return t.abrupt("return", i);
                case 1:
                case"end":
                  return t.stop()
              }
            }, t, e)
          }))()
        }
      },
      mutations: {
        setBoardList: function (t, e) {
          t.boardList = e
        }, setBoardListUserState: function (t, e) {
          var i = e.userId, n = e.challenState;
          t.boardList.find(function (t) {
            return t.userId === i
          }).challenState = n
        }
      }
    }, R = i("ODCk"), P = function (t) {
      return Object(R.a)(new Date(t), "YYYY-MM-DD HH") + ":00"
    }, H = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (new Date).getTime();
      return Object(R.a)(t, "YYYY-MM-DD")
    }, O = {
      namespaced: !0,
      state: {KLineRawData: ["obj", "name", "time", "open", "height", "low", "close"]},
      getters: {
        KLineData: function (t, e, i) {
          return t.KLineRawData.map(function (t) {
            return [t[3], t[4], t[5], t[6]]
          })
        }, KLineTime: function (t, e, i) {
          return t.KLineRawData.map(function (t) {
            return H(1e3 * t[2])
          })
        }
      },
      actions: {
        setKLineData: function (t, e) {
          var i = t.commit, n = t.state;
          return i("setBoardList", e), n
        }
      },
      mutations: {
        setKLineData: function (t, e) {
          t.boardList = e
        }
      }
    };
    n.a.use(x.a);
    var E = new x.a.Store({
        modules: {boardList: N, battle: O},
        state: {
          userInfo: {
            userId: 0,
            honor: {url: "", title: ""},
            challengeState: 0,
            name: "",
            portrait: "",
            winRate: 1,
            expiredTime: void 0
          }, isShowPopup: !1
        },
        actions: {
          setShowPopup: function (t, e) {
            var i = t.commit, n = t.state;
            return i("setShowPopup", e), n
          }, setUserInfo: function (t, e) {
            var i = this, n = t.commit, a = t.state;
            return w()(_.a.mark(function t() {
              var s;
              return _.a.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                  case 0:
                    if (0 === e) {
                      t.next = 7;
                      break
                    }
                    return t.next = 3, F(e);
                  case 3:
                    return s = t.sent, console.log(s), n("setUserInfo", s), t.abrupt("return", a);
                  case 7:
                  case"end":
                    return t.stop()
                }
              }, t, i)
            }))()
          }
        },
        mutations: {
          setShowPopup: function (t, e) {
            t.isShowPopup = e
          }, setUserInfo: function (t, e) {
            t.userInfo = e
          }
        },
        getters: {
          isShowPopup: function (t) {
            return t.isShowPopup
          }, userId: function (t) {
            return t.userInfo.userId
          }, userInfo: function (t) {
            return t.userInfo
          }, challengeState: function (t) {
            return t.userInfo.challengeState
          }
        }
      }), j = (i("v2ns"), i("F3EI")), A = i("fZjL"), M = i.n(A), L = i("+v63"), U = i("te2A"),
      q = (Boolean, String, String, Boolean, Boolean, Boolean, String, String, Object, Boolean, Boolean, Boolean, {
        name: "popup",
        props: {
          value: Boolean,
          height: {type: String, default: "auto"},
          width: {type: String, default: "auto"},
          showMask: {type: Boolean, default: !0},
          isTransparent: Boolean,
          hideOnBlur: {type: Boolean, default: !0},
          position: {type: String, default: "bottom"},
          maxHeight: String,
          popupStyle: Object,
          hideOnDeactivated: {type: Boolean, default: !0},
          shouldRerenderOnShow: {type: Boolean, default: !1},
          shouldScrollTopOnShow: {type: Boolean, default: !1}
        },
        created: function () {
          this.$vux && this.$vux.config && "VIEW_BOX" === this.$vux.config.$layout && (this.layout = "VIEW_BOX")
        },
        mounted: function () {
          var t = this;
          this.$overflowScrollingList = document.querySelectorAll(".vux-fix-safari-overflow-scrolling"), this.$nextTick(function () {
            var e = t;
            t.popup = new L.a({
              showMask: e.showMask, container: e.$el, hideOnBlur: e.hideOnBlur, onOpen: function () {
                e.fixSafariOverflowScrolling("auto"), e.show = !0
              }, onClose: function () {
                e.show = !1, window.__$vuxPopups && M()(window.__$vuxPopups).length > 1 || document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled") || setTimeout(function () {
                  e.fixSafariOverflowScrolling("touch")
                }, 300)
              }
            }), t.value && t.popup.show(), t.initialShow = !1
          })
        },
        deactivated: function () {
          this.hideOnDeactivated && (this.show = !1), this.removeModalClassName()
        },
        methods: {
          fixSafariOverflowScrolling: function (t) {
            if (this.$overflowScrollingList.length) for (var e = 0; e < this.$overflowScrollingList.length; e++) this.$overflowScrollingList[e].style.webkitOverflowScrolling = t
          }, removeModalClassName: function () {
            "VIEW_BOX" === this.layout && U.a.removeClass(document.body, "vux-modal-open")
          }, doShow: function () {
            this.popup && this.popup.show(), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), "VIEW_BOX" === this.layout && U.a.addClass(document.body, "vux-modal-open"), this.hasFirstShow || (this.$emit("on-first-show"), this.hasFirstShow = !0)
          }, scrollTop: function () {
            var t = this;
            this.$nextTick(function () {
              t.$el.scrollTop = 0;
              var e = t.$el.querySelectorAll(".vux-scrollable");
              if (e.length) for (var i = 0; i < e.length; i++) e[i].scrollTop = 0
            })
          }
        },
        data: function () {
          return {layout: "", initialShow: !0, hasFirstShow: !1, shouldRenderBody: !0, show: this.value}
        },
        computed: {
          styles: function () {
            var t = {};
            if (this.position && "bottom" !== this.position && "top" !== this.position ? t.width = this.width : t.height = this.height, this.maxHeight && (t["max-height"] = this.maxHeight), this.isTransparent && (t.background = "transparent"), this.popupStyle) for (var e in this.popupStyle) t[e] = this.popupStyle[e];
            return t
          }
        },
        watch: {
          value: function (t) {
            this.show = t
          }, show: function (t) {
            var e = this;
            this.$emit("input", t), t ? this.shouldRerenderOnShow ? (this.shouldRenderBody = !1, this.$nextTick(function () {
              e.scrollTop(), e.shouldRenderBody = !0, e.doShow()
            })) : (this.shouldScrollTopOnShow && this.scrollTop(), this.doShow()) : (this.$emit("on-hide"), this.show = !1, this.popup.hide(!1), setTimeout(function () {
              document.querySelector(".vux-popup-dialog.vux-popup-show") || e.fixSafariOverflowScrolling("touch"), e.removeModalClassName()
            }, 200))
          }
        },
        beforeDestroy: function () {
          this.popup && this.popup.destroy(), this.fixSafariOverflowScrolling("touch"), this.removeModalClassName()
        }
      }), W = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("transition", {attrs: {name: "vux-popup-animate-" + t.position}}, [i("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.show && !t.initialShow,
              expression: "show && !initialShow"
            }],
            staticClass: "vux-popup-dialog",
            class: ["vux-popup-" + t.position, t.show ? "vux-popup-show" : ""],
            style: t.styles
          }, [t.shouldRenderBody ? t._t("default") : t._e()], 2)])
        }, staticRenderFns: []
      };
    var z = i("VU/8")(q, W, !1, function (t) {
      i("8jW6")
    }, null, null).exports, K = (Boolean, Boolean, Boolean, f()({}, Object(x.b)(["isShowPopup"])), {
      name: "popupTop",
      props: {
        isShow: {type: Boolean, default: !1},
        autoClose: {type: Boolean, default: !1},
        showClose: {type: Boolean, default: !1}
      },
      data: function () {
        return {status: this.isShowPopup}
      },
      components: {Popup: z},
      watch: {
        isShowPopup: function (t) {
          this.status = t
        }, status: function (t) {
          this.$store.dispatch("setShowPopup", t)
        }
      },
      methods: {
        handleHide: function () {
          this.$emit("notifySetting", !1)
        }
      },
      computed: f()({}, Object(x.b)(["isShowPopup"]))
    }), Y = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "popup"}}, [i("popup", {
          staticClass: "content",
          attrs: {width: "90%", position: "top", height: "75%"},
          on: {"on-hide": t.handleHide},
          model: {
            value: t.status, callback: function (e) {
              t.status = e
            }, expression: "status"
          }
        }, [t._t("content"), t._v(" "), i("div", {staticStyle: {width: "100%"}}), t._v(" "), t.showClose ? i("div", {
          staticClass: "close",
          on: {click: t.handleHide}
        }, [i("i", {staticClass: "icon iconfont icon-close"})]) : t._e()], 2)], 1)
      }, staticRenderFns: []
    };
    var X = i("VU/8")(K, Y, !1, function (t) {
        i("n6RF")
      }, "data-v-5f2d308d", null).exports, G = i("wmxo"),
      Z = (G.a, String, String, String, String, String, String, Number, String, String, {
        name: "group",
        methods: {cleanStyle: G.a},
        props: {
          title: String,
          titleColor: String,
          labelWidth: String,
          labelAlign: String,
          labelMarginRight: String,
          gutter: [String, Number],
          footerTitle: String,
          footerTitleColor: String
        }
      }), J = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", [t.title ? i("div", {
            staticClass: "weui-cells__title",
            style: t.cleanStyle({color: t.titleColor}),
            domProps: {innerHTML: t._s(t.title)}
          }) : t._e(), t._v(" "), t._t("title"), t._v(" "), i("div", {
            staticClass: "weui-cells",
            class: {"vux-no-group-title": !t.title},
            style: t.cleanStyle({marginTop: "number" == typeof t.gutter ? t.gutter + "px" : t.gutter})
          }, [t._t("after-title"), t._v(" "), t._t("default")], 2), t._v(" "), t.footerTitle ? i("div", {
            staticClass: "weui-cells__title vux-group-footer-title",
            style: t.cleanStyle({color: t.footerTitleColor}),
            domProps: {innerHTML: t._s(t.footerTitle)}
          }) : t._e()], 2)
        }, staticRenderFns: []
      };
    var Q = i("VU/8")(Z, J, !1, function (t) {
      i("HlIM")
    }, null, null).exports, tt = i("Peep"), et = (String, Boolean, {
      name: "icon", props: {type: String, isMsg: Boolean}, computed: {
        className: function () {
          return "weui-icon weui_icon_" + this.type + " weui-icon-" + this.type.replace(/_/g, "-")
        }
      }
    }), it = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("i", {class: [this.className, this.isMsg ? "weui-icon_msg" : ""]})
      }, staticRenderFns: []
    };
    var nt = i("VU/8")(et, it, !1, function (t) {
      i("nXGe")
    }, null, null).exports, at = i("zV4+"), st = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("span", {staticClass: "vux-label-desc"}, [this._t("default")], 2)
      }, staticRenderFns: []
    };
    var rt = i("VU/8")({name: "inline-desc"}, st, !1, function (t) {
        i("VASZ")
      }, null, null).exports, ot = i("KRg4"),
      lt = (ot.a, String, String, String, String, String, Number, Number, String, String, String, String, String, String, String, String, Boolean, Number, Number, String, String, String, Function, Boolean, Array, Array, Boolean, String, Function, Function, Object, {
        name: "datetime",
        mixins: [ot.a],
        components: {Group: Q, InlineDesc: rt, Icon: nt},
        props: {
          format: {
            type: String, default: "YYYY-MM-DD", validator: function (t) {
              return !0
            }
          },
          title: String,
          value: {type: String, default: ""},
          inlineDesc: String,
          placeholder: String,
          minYear: Number,
          maxYear: Number,
          confirmText: String,
          cancelText: String,
          clearText: String,
          yearRow: {type: String, default: "{value}"},
          monthRow: {type: String, default: "{value}"},
          dayRow: {type: String, default: "{value}"},
          hourRow: {type: String, default: "{value}"},
          minuteRow: {type: String, default: "{value}"},
          required: {type: Boolean, default: !1},
          minHour: {type: Number, default: 0},
          maxHour: {type: Number, default: 23},
          startDate: {
            type: String, validator: function (t) {
              return !t || 10 === t.length
            }
          },
          endDate: {
            type: String, validator: function (t) {
              return !t || 10 === t.length
            }
          },
          valueTextAlign: String,
          displayFormat: Function,
          readonly: Boolean,
          hourList: Array,
          minuteList: Array,
          show: Boolean,
          defaultSelectedValue: String,
          computeHoursFunction: Function,
          computeDaysFunction: Function,
          orderMap: Object
        },
        created: function () {
          this.isFirstSetValue = !1, this.currentValue = this.value
        },
        data: function () {
          return {currentShow: !1, currentValue: null, valid: !0, errors: {}}
        },
        mounted: function () {
          var t = this, e = this.uuid;
          this.$el.setAttribute("id", "vux-datetime-" + e), this.readonly || this.$nextTick(function () {
            t.render(), t.show && t.$nextTick(function () {
              t.picker && t.picker.show(t.currentValue)
            })
          })
        },
        computed: {
          styles: function () {
            return this.$parent ? {
              width: this.$parent.labelWidth,
              textAlign: this.$parent.labelAlign,
              marginRight: this.$parent.labelMarginRight
            } : {}
          }, pickerOptions: function () {
            var t = this, e = {
              trigger: "#vux-datetime-" + this.uuid,
              format: this.format,
              value: this.currentValue,
              output: ".vux-datetime-value",
              confirmText: t.getButtonText("confirm"),
              cancelText: t.getButtonText("cancel"),
              clearText: t.clearText,
              yearRow: this.yearRow,
              monthRow: this.monthRow,
              dayRow: this.dayRow,
              hourRow: this.hourRow,
              minuteRow: this.minuteRow,
              minHour: this.minHour,
              maxHour: this.maxHour,
              startDate: this.startDate,
              endDate: this.endDate,
              hourList: this.hourList,
              minuteList: this.minuteList,
              defaultSelectedValue: this.defaultSelectedValue,
              computeHoursFunction: this.computeHoursFunction,
              computeDaysFunction: this.computeDaysFunction,
              orderMap: this.orderMap || {},
              onSelect: function (e, i, n) {
                t.picker && t.picker.config.renderInline && (t.$emit("input", n), t.$emit("on-change", n))
              },
              onConfirm: function (e) {
                t.currentValue = e
              },
              onClear: function (e) {
                t.$emit("on-clear", e)
              },
              onHide: function (e) {
                t.currentShow = !1, t.$emit("update:show", !1), t.validate(), t.$emit("on-hide", e), "cancel" === e && t.$emit("on-cancel"), "confirm" === e && setTimeout(function () {
                  t.$nextTick(function () {
                    t.$emit("on-confirm", t.value)
                  })
                })
              },
              onShow: function () {
                t.currentShow = !0, t.$emit("update:show", !0), t.$emit("on-show")
              }
            };
            return this.minYear && (e.minYear = this.minYear), this.maxYear && (e.maxYear = this.maxYear), e
          }, firstError: function () {
            var t = M()(this.errors)[0];
            return this.errors[t]
          }, labelClass: function () {
            return this.$parent ? {"vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign} : {}
          }
        },
        methods: {
          getButtonText: function (t) {
            return "cancel" === t && this.cancelText ? this.cancelText : "confirm" === t && this.confirmText ? this.confirmText : this.$el.getAttribute("data-" + t + "-text")
          }, render: function () {
            var t = this;
            this.$nextTick(function () {
              t.picker && t.picker.destroy(), t.picker = new at.a(t.pickerOptions)
            })
          }, validate: function () {
            if (!this.currentValue && this.required) return this.valid = !1, void(this.errors.required = "必填");
            this.valid = !0, this.errors = {}
          }
        },
        watch: {
          readonly: function (t) {
            t ? this.picker && this.picker.destroy() : this.render()
          }, show: function (t) {
            t !== this.currentShow && (t ? this.picker && this.picker.show(this.currentValue) : this.picker && this.picker.hide(this.currentValue))
          }, currentValue: function (t, e) {
            this.$emit("input", t), this.isFirstSetValue ? this.$emit("on-change", t) : (this.isFirstSetValue = !0, e && this.$emit("on-change", t)), this.validate()
          }, startDate: function () {
            this.render()
          }, endDate: function () {
            this.render()
          }, format: function (t) {
            this.currentValue && (this.currentValue = Object(R.a)(this.currentValue, t)), this.render()
          }, value: function (t) {
            this.readonly || this.picker && this.picker.config.renderInline ? this.currentValue = t : this.currentValue !== t && (this.currentValue = t, this.render())
          }
        },
        beforeDestroy: function () {
          this.picker && this.picker.destroy()
        }
      }), ct = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("a", {
            staticClass: "vux-datetime weui-cell",
            class: {"weui-cell_access": !t.readonly},
            attrs: {"data-cancel-text": "取消", "data-confirm-text": "确定", href: "javascript:"}
          }, [t._t("default", [i("div", [t._t("title", [i("p", {
            class: t.labelClass,
            style: t.styles,
            domProps: {innerHTML: t._s(t.title)}
          })]), t._v(" "), t.inlineDesc ? i("inline-desc", [t._v(t._s(t.inlineDesc))]) : t._e()], 2), t._v(" "), i("div", {
            staticClass: "weui-cell__ft vux-cell-primary vux-datetime-value",
            style: {textAlign: t.valueTextAlign}
          }, [!t.currentValue && t.placeholder ? i("span", {staticClass: "vux-cell-placeholder"}, [t._v(t._s(t.placeholder))]) : t._e(), t._v(" "), t.currentValue ? i("span", {staticClass: "vux-cell-value"}, [t._v(t._s(t.displayFormat ? t.displayFormat(t.currentValue) : t.currentValue))]) : t._e(), t._v(" "), i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.valid,
              expression: "!valid"
            }], staticClass: "vux-input-icon", attrs: {type: "warn", title: t.firstError}
          })], 1)])], 2)
        }, staticRenderFns: []
      };
    var ut = i("VU/8")(lt, ct, !1, function (t) {
        i("h1S5")
      }, null, null).exports,
      dt = (i("gaXx"), Number, Number, Boolean, Number, String, String, Boolean, String, String, String, i("gaXx")),
      ht = {
        name: "x-number",
        props: {
          min: Number,
          max: Number,
          readonly: Boolean,
          step: {type: Number, default: 1},
          value: {
            validator: function (t) {
              return "number" == typeof t || "string" == typeof t && "" === t
            }, default: 0
          },
          name: String,
          title: String,
          fillable: {type: Boolean, default: !1},
          width: {type: String, default: "50px"},
          buttonStyle: {type: String, default: "square"},
          align: {type: String, default: "right"}
        },
        created: function () {
          this.currentValue = this.value
        },
        data: function () {
          return {currentValue: 0}
        },
        computed: {
          disabledMin: function () {
            return void 0 !== this.min && ("" === this.currentValue || this.currentValue <= this.min)
          }, disabledMax: function () {
            return void 0 !== this.max && ("" === this.currentValue || this.currentValue >= this.max)
          }, labelClass: function () {
            return {"vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign}
          }
        },
        watch: {
          currentValue: function (t, e) {
            "" !== t && (void 0 !== this.min && this.currentValue < this.min && (this.currentValue = this.min), this.max && this.currentValue > this.max && (this.currentValue = this.max)), this.$emit("input", this.currentValue)
          }, value: function (t) {
            this.currentValue = t, this.$emit("on-change", t)
          }
        },
        methods: {
          add: function () {
            if (!this.disabledMax) {
              var t = new dt(this.currentValue);
              this.currentValue = 1 * t.plus(this.step)
            }
          }, sub: function () {
            if (!this.disabledMin) {
              var t = new dt(this.currentValue);
              this.currentValue = 1 * t.minus(this.step)
            }
          }, blur: function () {
            "" === this.currentValue && (this.currentValue = 0)
          }
        }
      }, pt = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {staticClass: "weui-cell"}, [i("div", [i("p", {
            class: t.labelClass,
            style: {
              width: t.$parent.labelWidth,
              textAlign: t.$parent.labelAlign,
              marginRight: t.$parent.labelMarginRight
            },
            domProps: {innerHTML: t._s(t.title)}
          })]), t._v(" "), i("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.readonly,
              expression: "!readonly"
            }],
            staticClass: "weui-cell__ft vux-cell-primary",
            class: {"vux-number-round": "round" === t.buttonStyle},
            staticStyle: {"font-size": "0"}
          }, [i("div", {style: {float: t.align}}, [i("a", {
            staticClass: "vux-number-selector vux-number-selector-sub",
            class: {"vux-number-disabled": t.disabledMin},
            on: {click: t.sub}
          }, [i("svg", {
            attrs: {
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "15",
              height: "15"
            }
          }, [i("defs"), i("path", {attrs: {d: "M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"}})])]), t._v(" "), i("input", {
            directives: [{
              name: "model",
              rawName: "v-model.number",
              value: t.currentValue,
              expression: "currentValue",
              modifiers: {number: !0}
            }],
            staticClass: "vux-number-input",
            style: {width: t.width},
            attrs: {name: t.name, readonly: !t.fillable, pattern: "[0-9]*", type: "number"},
            domProps: {value: t.currentValue},
            on: {
              blur: [t.blur, function (e) {
                t.$forceUpdate()
              }], input: function (e) {
                e.target.composing || (t.currentValue = t._n(e.target.value))
              }
            }
          }), t._v(" "), i("a", {
            staticClass: "vux-number-selector vux-number-selector-plus",
            class: {"vux-number-disabled": t.disabledMax},
            on: {click: t.add}
          }, [i("svg", {
            attrs: {
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "18",
              height: "18"
            }
          }, [i("defs"), i("path", {attrs: {d: "M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"}})])])])]), t._v(" "), i("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.readonly,
              expression: "readonly"
            }], staticClass: "weui-cell__ft vux-cell-primary"
          }, [t._v("\n    " + t._s(t.value) + "\n  ")])])
        }, staticRenderFns: []
      };
    var vt = i("VU/8")(ht, pt, !1, function (t) {
        i("BtvU")
      }, null, null).exports, mt = i("f6Hi"), ft = i("JnrT"), gt = i.n(ft),
      _t = (mt.a, String, String, Boolean, Number, String, String, String, Boolean, Boolean, Number, Number, Number, String, String, String, String, Boolean, {
        name: "x-textarea",
        minxins: [mt.a],
        mounted: function () {
          var t = this;
          this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0), this.$nextTick(function () {
            t.autosize && t.bindAutosize()
          })
        },
        components: {InlineDesc: rt},
        props: {
          title: String,
          inlineDesc: String,
          showCounter: {type: Boolean, default: !0},
          max: Number,
          value: String,
          name: String,
          placeholder: String,
          readonly: Boolean,
          disabled: Boolean,
          rows: {type: Number, default: 3},
          cols: {type: Number, default: 30},
          height: Number,
          autocomplete: {type: String, default: "off"},
          autocapitalize: {type: String, default: "off"},
          autocorrect: {type: String, default: "off"},
          spellcheck: {type: String, default: "false"},
          autosize: Boolean
        },
        created: function () {
          this.currentValue = this.value
        },
        watch: {
          autosize: function (t) {
            this.unbindAutosize(), t && this.bindAutosize()
          }, value: function (t) {
            this.currentValue = t
          }, currentValue: function (t) {
            this.max && t && t.length > this.max && (this.currentValue = t.slice(0, this.max)), this.$emit("input", this.currentValue), this.$emit("on-change", this.currentValue)
          }
        },
        data: function () {
          return {hasRestrictedLabel: !1, currentValue: ""}
        },
        computed: {
          count: function () {
            var t = 0;
            return this.currentValue && (t = this.currentValue.replace(/\n/g, "aa").length), t > this.max ? this.max : t
          }, textareaStyle: function () {
            if (this.height) return {height: this.height + "px"}
          }, labelStyles: function () {
            return {
              width: this.$parent.labelWidth || this.labelWidth + "em",
              textAlign: this.$parent.labelAlign,
              marginRight: this.$parent.labelMarginRight
            }
          }, labelWidth: function () {
            return this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1
          }, labelClass: function () {
            return {"vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign}
          }
        },
        methods: {
          updateAutosize: function () {
            gt.a.update(this.$refs.textarea)
          }, bindAutosize: function () {
            gt()(this.$refs.textarea)
          }, unbindAutosize: function () {
            gt.a.destroy(this.$refs.textarea)
          }, focus: function () {
            this.$refs.textarea.focus()
          }
        },
        beforeDestroy: function () {
          this.unbindAutosize()
        }
      }), bt = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {staticClass: "weui-cell vux-x-textarea"}, [i("div", {staticClass: "weui-cell__hd"}, [t.hasRestrictedLabel ? i("div", {style: t.labelStyles}, [t._t("restricted-label")], 2) : t._e(), t._v(" "), t._t("label", [t.title ? i("label", {
            staticClass: "weui-label",
            class: t.labelClass,
            style: {
              width: t.$parent.labelWidth || t.labelWidth + "em",
              textAlign: t.$parent.labelAlign,
              marginRight: t.$parent.labelMarginRight
            },
            domProps: {innerHTML: t._s(t.title)}
          }) : t._e(), t._v(" "), t.inlineDesc ? i("inline-desc", [t._v(t._s(t.inlineDesc))]) : t._e()])], 2), t._v(" "), i("div", {staticClass: "weui-cell__bd"}, [i("textarea", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "textarea",
            staticClass: "weui-textarea",
            style: t.textareaStyle,
            attrs: {
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled,
              name: t.name,
              rows: t.rows,
              cols: t.cols,
              maxlength: t.max
            },
            domProps: {value: t.currentValue},
            on: {
              focus: function (e) {
                t.$emit("on-focus")
              }, blur: function (e) {
                t.$emit("on-blur")
              }, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }), t._v(" "), i("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.showCounter && t.max,
              expression: "showCounter && max"
            }], staticClass: "weui-textarea-counter", on: {click: t.focus}
          }, [i("span", [t._v(t._s(t.count))]), t._v("/" + t._s(t.max) + "\n    ")])])])
        }, staticRenderFns: []
      };
    var wt = i("VU/8")(_t, bt, !1, function (t) {
        i("NMCO")
      }, null, null).exports, xt = i("0FxO"),
      yt = (Boolean, Boolean, Boolean, String, String, Boolean, String, Object, Array, {
        name: "x-button",
        props: {
          type: {default: "default"},
          disabled: Boolean,
          mini: Boolean,
          plain: Boolean,
          text: String,
          actionType: String,
          showLoading: Boolean,
          link: [String, Object],
          gradients: {
            type: Array, validator: function (t) {
              return 2 === t.length
            }
          }
        },
        methods: {
          onClick: function () {
            !this.disabled && Object(xt.a)(this.link, this.$router)
          }
        },
        computed: {
          noBorder: function () {
            return Array.isArray(this.gradients)
          }, buttonStyle: function () {
            if (this.gradients) return {
              background: "linear-gradient(90deg, " + this.gradients[0] + ", " + this.gradients[1] + ")",
              color: "#FFFFFF"
            }
          }, classes: function () {
            return [{
              "weui-btn_disabled": !this.plain && this.disabled,
              "weui-btn_plain-disabled": this.plain && this.disabled,
              "weui-btn_mini": this.mini,
              "vux-x-button-no-border": this.noBorder
            }, this.plain ? "" : "weui-btn_" + this.type, this.plain ? "weui-btn_plain-" + this.type : "", this.showLoading ? "weui-btn_loading" : ""]
          }
        }
      }), St = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("button", {
            staticClass: "weui-btn",
            class: t.classes,
            style: t.buttonStyle,
            attrs: {disabled: t.disabled, type: t.actionType},
            on: {click: t.onClick}
          }, [t.showLoading ? i("i", {staticClass: "weui-loading"}) : t._e(), t._v(" "), t._t("default", [t._v(t._s(t.text))])], 2)
        }, staticRenderFns: []
      };
    var Ct = i("VU/8")(yt, St, !1, function (t) {
      i("mdm3")
    }, null, null).exports;
    n.a.use(tt.a);
    f()({}, Object(x.b)(["userId"])), String, Number;
    n.a.use(tt.a);
    var Bt = {
      name: "battle-setting",
      data: function () {
        return {
          battleDetail: v()({
            duringTime: 6,
            initialMoney: 5,
            content: null,
            expiredTime: "",
            currentTime: H(),
            invitee: "NumberFormatException"
          }, "content", ""), currentTim: H, showPopup: !1, step: .5, minHour: (new Date).getHours()
        }
      },
      components: {popup: X, Group: Q, XButton: Ct, Datetime: ut, XNumber: vt, XTextarea: wt},
      computed: f()({}, Object(x.b)(["userId"])),
      props: {situation: {default: "BattleHall", type: String}, curUser: {type: Number, default: 0}},
      created: function () {
      },
      methods: {
        postNewBattle: function () {
          var t = this;
          if (this.battleDetail.expiredTime) {
            "Home" !== this.situation ? D(f()({}, this.battleDetail, {
              founder: this.userId,
              content: "NumberFormatException",
              initialMoney: 1e4 * this.battleDetail.initialMoney,
              expiredTime: new Date(this.battleDetail.expiredTime + ":00:00").getTime(),
              duringTime: 1e3 * this.battleDetail.duringTime * 60
            })).then(function () {
              t.$vux.alert.show({
                title: "恭喜", content: "擂台已摆好，请等待应战！", onShow: function () {
                }, onHide: function () {
                  t.$store.dispatch("setShowPopup", !1)
                }
              })
            }) : D(f()({}, this.battleDetail, {
              invitee: this.curUser,
              founder: this.userId,
              initialMoney: 1e4 * this.battleDetail.initialMoney,
              expiredTime: new Date(this.battleDetail.expiredTime + ":00:00").getTime(),
              duringTime: 1e3 * this.battleDetail.duringTime * 60
            })).then(function () {
              t.$vux.alert.show({
                title: "恭喜", content: "战书已下达，请等待应战！", onShow: function () {
                }, onHide: function () {
                  t.$store.dispatch("setShowPopup", !1)
                }
              })
            })
          } else this.$vux.alert.show({
            title: "系统提示", content: "<br>请设置摆擂时间", onShow: function () {
            }, onHide: function () {
            }
          })
        }
      }
    }, kt = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "battle-setting"}}, [i("popup", {
          staticClass: "pupup",
          attrs: {showClose: !1}
        }, [i("div", {
          staticClass: "content",
          attrs: {slot: "content"},
          slot: "content"
        }, [i("h2", [t._v("擂台设置")]), t._v(" "), i("group", {
          attrs: {
            "label-width": "5em",
            "label-margin-right": "2em",
            "label-align": "center"
          }
        }, [i("x-number", {
          attrs: {
            fillable: !0,
            step: t.step,
            title: "初始资金(万元)",
            align: "center",
            "button-style": "round",
            min: 1,
            max: 20
          }, model: {
            value: t.battleDetail.initialMoney, callback: function (e) {
              t.$set(t.battleDetail, "initialMoney", e)
            }, expression: "battleDetail.initialMoney"
          }
        }, [i("span", [t._v("aaa")])]), t._v(" "), i("x-number", {
          attrs: {
            fillable: !0,
            step: t.step,
            title: "PKS时长(分钟)",
            align: "center",
            "button-style": "round",
            min: 1,
            max: 20
          }, model: {
            value: t.battleDetail.duringTime, callback: function (e) {
              t.$set(t.battleDetail, "duringTime", e)
            }, expression: "battleDetail.duringTime"
          }
        }, [i("span", [t._v("aaa")])]), t._v(" "), i("datetime", {
          attrs: {
            required: !0,
            title: "摆擂时长",
            placeholder: "擂台失效时间",
            "value-text-align": "left",
            format: "YYYY-MM-DD HH",
            "min-hour": t.minHour,
            "start-date": t.battleDetail.currentTime
          }, model: {
            value: t.battleDetail.expiredTime, callback: function (e) {
              t.$set(t.battleDetail, "expiredTime", e)
            }, expression: "battleDetail.expiredTime"
          }
        }), t._v(" "), "Home" === t.situation ? i("x-textarea", {
          attrs: {
            title: "捎话",
            placeholder: "呛他两句？",
            "show-counter": !1,
            rows: 1
          }, model: {
            value: t.battleDetail.content, callback: function (e) {
              t.$set(t.battleDetail, "content", e)
            }, expression: "battleDetail.content"
          }
        }) : t._e(), t._v(" "), i("button", {
          staticClass: "comfirm-button",
          attrs: {type: "submit"},
          on: {click: t.postNewBattle}
        }, [t._v("确定")])], 1)], 1)])], 1)
      }, staticRenderFns: []
    };
    var $t = i("VU/8")(Bt, kt, !1, function (t) {
      i("i6hi")
    }, "data-v-d7b88472", null).exports;

    function Tt(t, e) {
      return I("Get", "/api/v1/eBuy/battleList?state=" + t + "&userId=" + e)
    }

    function It(t) {
      return I("POST", "/api/v1/eBuy/insertFocus", t)
    }

    function Dt(t, e) {
      return I("POST", "/api/v1/eBuy/deleteFocus/" + t + "?battleId=" + e)
    }

    function Vt(t) {
      return I("GET", "/api/v1/eBuy/receiveMessageList/" + t)
    }

    function Ft(t) {
      return I("GET", "/api/v1/eBuy/sendMessageList/" + t)
    }

    function Nt(t) {
      return I("POST", "/api/v1/eBuy/startBattle/", t)
    }

    function Rt(t, e) {
      return I("GET", "/api/v1/eBuy/myBattles/" + t + "?selectTime=" + e)
    }

    function Pt(t) {
      return I("GET", "/api/v1/eBuy/selectFocus/" + t)
    }

    var Ht = i("rLAy"), Ot = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("p", {staticClass: "vux-divider"}, [this._t("default")], 2)
      }, staticRenderFns: []
    };
    var Et = i("VU/8")({name: "divider"}, Ot, !1, function (t) {
      i("TEJr")
    }, null, null).exports, jt = (Array, Boolean, Boolean, f()({
      curTime: function () {
        return H
      }
    }, Object(x.b)(["userId"])), Ht.a, {
      name: "record-list",
      props: {records: {type: Array}, showStamp: {type: Boolean, default: !0}, showBtn: {type: Boolean, default: !0}},
      data: function () {
        return {}
      },
      created: function () {
      },
      computed: f()({
        curTime: function () {
          return H
        }
      }, Object(x.b)(["userId"])),
      methods: {
        spanItem: function (t) {
          this.records[t].collapsed ? n.a.set(this.records[t], "collapsed", !1) : n.a.set(this.records[t], "collapsed", !0)
        }, focus: function (t, e) {
          var i = this;
          0 == t ? It({userId: this.userId, battleId: this.records[e].battleId}).then(function () {
            n.a.set(i.records[e], "isFocus", 1), i.$vux.toast.text("关注成功", "top")
          }) : Dt(this.userId, this.records[e].battleId).then(function () {
            n.a.set(i.records[e], "isFocus", 0), i.$vux.toast.text("取消关注成功", "top")
          })
        }, acceptBattle: function (t) {
          var e = this;
          this.records[t].founderId == this.curUser ? this.$vux.alert.show({
            title: "失败",
            content: "这是您自己摆的擂台哦",
            onShow: function () {
            },
            onHide: function () {
            }
          }) : Nt({invitee: this.curUser, battleId: this.records[t].battleId}).then(function (i) {
            switch (i.userState) {
              case 0:
                e.records.splice(t, 1), e.$vux.alert.show({
                  title: "成功", content: "您已接受挑战，开始比赛吧", onShow: function () {
                  }, onHide: function () {
                    e.showPopup = !1
                  }
                });
                break;
              case 1:
                e.$vux.alert.show({
                  title: "失败", content: "您有未完成的比赛，晚点再来吧", onShow: function () {
                  }, onHide: function () {
                    e.showPopup = !1
                  }
                });
                break;
              case 2:
                e.$vux.alert.show({
                  title: "失败", content: "对方正在比赛中，晚点再来吧", onShow: function () {
                  }, onHide: function () {
                    e.showPopup = !1
                  }
                })
            }
          })
        }, collapsedClass: function (t) {
          return this.records[t].collapsed ? this.showBtn && (!this.records[t].startTime || H <= this.msToDate(this.records[t].endTime.time)) ? "item-collapsed-long" : "item-collapsed-short" : ""
        }, msToDate: function (t) {
          return P(t)
        }
      },
      components: {Toast: Ht.a, Divider: Et}
    }), At = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "record-list"}}, [i("div", {attrs: {id: "records"}}, t._l(t.records, function (e, n) {
          return i("div", {
            staticClass: "record-item", class: t.collapsedClass(n), on: {
              click: function (e) {
                t.spanItem(n)
              }
            }
          }, [i("div", {staticClass: "item-body"}, [t.showStamp && 0 == e.state ? i("div", {staticClass: "stamp"}, [t._v("待接受")]) : t._e(), t._v(" "), t.showStamp && 1 == e.state ? i("div", {staticClass: "stamp"}, [t._v("待应战")]) : t._e(), t._v(" "), t.showStamp && 2 == e.state ? i("div", {staticClass: "stamp"}, [t._v("已失效")]) : t._e(), t._v(" "), t.showStamp && 4 == e.state ? i("div", {staticClass: "stamp"}, [t._v("已结束")]) : t._e(), t._v(" "), t.showStamp && 3 == e.state ? i("div", {staticClass: "stamp stamp-red"}, [t._v("进行中")]) : t._e(), t._v(" "), i("table", [i("tr", [i("td", [i("img", {
            staticClass: "avatar",
            attrs: {src: e.founderPortrait}
          }), t._v(" "), i("img", {
            staticClass: "medal",
            attrs: {src: e.founderHonor.url}
          }), t._v(" "), i("div", {
            staticClass: "item-username",
            class: ["null" != e.inviteeName && e.founderRate >= e.inviteeRate ? "winner" : ""]
          }, [t._v(t._s(e.founderName))])]), t._v(" "), i("td", {staticClass: "versus"}, [t._v("VS")]), t._v(" "), i("td", [i("div", {
            staticClass: "item-username",
            class: ["null" != e.inviteeName && e.inviteeRate >= e.founderRate ? "winner" : ""]
          }, [t._v(t._s(e.inviteeName ? e.inviteeName : "??"))]), t._v(" "), i("img", {
            staticClass: "medal",
            attrs: {src: e.inviteeHonor ? e.inviteeHonor.url : "/static/icon-img/icons8-question-mark-filled-50.png"}
          }), t._v(" "), i("img", {
            staticClass: "avatar",
            attrs: {src: e.inviteePortrait ? e.inviteePortrait : "/static/icon-img/icons8-question-mark-64.png"}
          })])]), t._v(" "), i("tr", [i("td", [t._v(t._s(e.founderHonor.title))]), t._v(" "), i("td", [t._v("称号")]), t._v(" "), i("td", [t._v(t._s(e.inviteeHonor ? e.inviteeHonor.title : "- -"))])]), t._v(" "), i("tr", [i("td", [t._v(t._s(e.initialMoney))]), t._v(" "), i("td", [t._v("初始资金")]), t._v(" "), i("td", [t._v(t._s(e.initialMoney))])]), t._v(" "), i("tr", [i("td", [t._v(t._s(void 0 == e.founderBalance ? "- -" : e.founderBalance))]), t._v(" "), i("td", [t.curTime < e.endTime || !e.endTime ? i("span", [t._v("当前资金")]) : t._e(), t._v(" "), t.curTime > e.endTime ? i("span", [t._v("结束资金")]) : t._e()]), t._v(" "), i("td", [t._v(t._s(void 0 == e.inviteeBalance ? "- -" : e.inviteeBalance))])]), t._v(" "), i("tr", [i("td", [t._v(t._s(void 0 == e.founderRate ? "- -" : (100 * e.founderRate).toFixed(2)) + "%")]), t._v(" "), i("td", [t._v("收益率")]), t._v(" "), i("td", [t._v(t._s(void 0 == e.inviteeRate ? "- -" : (100 * e.inviteeRate).toFixed(2)) + "%")])])]), t._v(" "), e.startTime ? i("div", {staticClass: "time"}, [i("span", [t._v("开始：" + t._s(e.startTime ? t.msToDate(e.startTime.time) : "- -"))]), t._v(" "), i("span", [t._v("结束：" + t._s(e.endTime ? t.msToDate(e.endTime.time) : "- -"))])]) : t._e(), t._v(" "), e.startTime ? t._e() : i("div", {staticClass: "time"}, [i("span", [t._v("PK时长：" + t._s(e.duringTime.time / 864e5) + "天")]), t._v(" "), i("span", [t._v("失效时间：" + t._s(t.msToDate(e.expiredTime.time)))])]), t._v(" "), t.showBtn ? i("div", [e.startTime && t.curTime <= t.msToDate(e.endTime.time) ? i("div", {
            staticClass: "focus",
            class: 1 == e.isFocus ? "btn-grey" : "",
            on: {
              click: function (i) {
                i.stopPropagation(), t.focus(e.isFocus, n)
              }
            }
          }, [t._v(t._s(1 == e.isFocus ? "已关注" : "关注比赛进程"))]) : t._e(), t._v(" "), e.startTime ? t._e() : i("div", {
            staticClass: "battle-btn",
            on: {
              click: function (e) {
                e.stopPropagation(), t.acceptBattle(n)
              }
            }
          }, [t._v("应战")])]) : t._e()])])
        })), t._v(" "), 0 == t.records.length ? i("divider", [t._v("暂时没有记录哦")]) : t._e()], 1)
      }, staticRenderFns: []
    };
    var Mt = i("VU/8")(jt, At, !1, function (t) {
      i("8rH6")
    }, null, null).exports, Lt = (Boolean, String, {
      name: "back-arrow",
      props: {common: {type: Boolean, default: !1}, color: {type: String, default: "red"}},
      methods: {
        back: function () {
          this.common ? this.$emit("selfHandle") : this.$router.go(-1)
        }, getSrc: function (t) {
          return "red" == t ? "/static/icon-img/icons8-back-26.png" : "/static/icon-img/icons8-back-26-white.png"
        }
      }
    }), Ut = {
      render: function () {
        var t = this, e = t.$createElement;
        return (t._self._c || e)("img", {
          staticClass: "back-arrow",
          attrs: {src: t.getSrc(t.color)},
          on: {
            click: function (e) {
              t.back()
            }
          }
        })
      }, staticRenderFns: []
    };
    var qt = i("VU/8")(Lt, Ut, !1, function (t) {
      i("tzbi")
    }, null, null).exports, Wt = (Number, f()({}, Object(x.b)(["userInfo"])), {
      name: "personal-battle",
      props: {curUser: {type: Number, default: 0}},
      data: function () {
        return {
          curUserInfo: null,
          collapsed: {height: "1.5rem"},
          userId: "1",
          name: "投资家",
          portrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          honor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
          winRate: .8,
          selectTime: "all",
          filterOp: [{id: "all", content: "全部", active: !0}, {id: "1", content: "1天内", active: !1}, {
            id: "3",
            content: "3天内",
            active: !1
          }, {id: "7", content: "7天内", active: !1}],
          records: [{
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-25",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }, {
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-29",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }]
        }
      },
      created: function () {
      },
      watch: {
        curUser: function (t) {
          0 !== t && this.getUserRecords(this.curUser, "all")
        }
      },
      methods: {
        back: function () {
          this.$emit("notifyHome", "")
        }, tapFilter: function (t) {
          for (var e = 0; e < this.filterOp.length; e++) this.filterOp[e].id == t ? (this.filterOp[e].active = !0, this.selectTime = t) : this.filterOp[e].active = !1;
          this.records = [], this.getUserRecords(this.curUser, this.selectTime)
        }, getUserRecords: function (t, e) {
          var i = this;
          return w()(_.a.mark(function a() {
            return _.a.wrap(function (a) {
              for (; ;) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, F(t);
                case 2:
                  i.curUserInfo = a.sent, V(t, e).then(function (t) {
                    i.records = t, i.records.length > 0 && n.a.set(i.records[0], "collapsed", !0)
                  });
                case 4:
                case"end":
                  return a.stop()
              }
            }, a, i)
          }))()
        }
      },
      components: {RecordList: Mt, BackArrow: qt},
      computed: f()({}, Object(x.b)(["userInfo"]))
    }), zt = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return null != t.curUserInfo ? i("div", {attrs: {id: "personal-battle"}}, [i("back-arrow", {
          attrs: {
            common: !0,
            color: "white"
          }, on: {selfHandle: t.back}
        }), t._v(" "), i("div", {attrs: {id: "user-info"}}, [i("div", {attrs: {id: "portrait"}}, [i("img", {
          staticClass: "portrait",
          attrs: {src: t.curUserInfo.portrait}
        })]), t._v(" "), i("div", {attrs: {id: "data"}}, [i("div", {attrs: {id: "name"}}, [t._v(t._s(t.curUserInfo.name)), i("img", {
          staticClass: "medal",
          attrs: {src: t.curUserInfo.honor.url}
        })]), t._v(" "), i("span", {staticClass: "win-rate"}, [t._v("胜率：" + t._s((100 * t.curUserInfo.winRate).toFixed(2) + "%") + "    ")]), t._v(" "), i("span", {staticClass: "honor"}, [t._v(t._s(t.userInfo.honor.title))])])]), t._v(" "), i("div", {attrs: {id: "filter"}}, t._l(t.filterOp, function (e) {
          return i("span", {
            staticClass: "filter-button",
            class: [e.active ? "selected" : ""],
            on: {
              click: function (i) {
                t.tapFilter(e.id)
              }
            }
          }, [t._v(t._s(e.content))])
        })), t._v(" "), i("record-list", {
          attrs: {
            id: "record-list",
            records: t.records,
            showBtn: !1
          }
        }, [t._v('\n      :curUser="curUser"\n    ')])], 1) : t._e()
      }, staticRenderFns: []
    };
    var Kt = i("VU/8")(Wt, zt, !1, function (t) {
        i("TlZt")
      }, "data-v-4bda7f1b", null).exports,
      Yt = (ot.a, Boolean, String, String, String, Array, Boolean, String, String, Boolean, {
        name: "search",
        mixins: [ot.a],
        props: {
          required: {type: Boolean, default: !1},
          placeholder: String,
          cancelText: String,
          value: {type: String, default: ""},
          results: {
            type: Array, default: function () {
              return []
            }
          },
          autoFixed: {type: Boolean, default: !0},
          top: {type: String, default: "0px"},
          position: {type: String, default: "fixed"},
          autoScrollToTop: Boolean
        },
        created: function () {
          this.value && (this.currentValue = this.value)
        },
        computed: {
          fixPosition: function () {
            return this.isFixed ? "absolute" === this.position ? "absolute" : "fixed" : "static"
          }
        },
        methods: {
          emitEvent: function () {
            var t = this;
            this.$nextTick(function () {
              t.$emit("input", t.currentValue), t.$emit("on-change", t.currentValue)
            })
          }, onComposition: function (t, e) {
            "start" === e && (this.onInput = !0), "end" === e && (this.onInput = !1, this.emitEvent()), "input" === e && (this.onInput || this.emitEvent())
          }, clear: function () {
            this.currentValue = "", this.emitEvent(), this.isFocus = !0, this.setFocus(), this.autoFixed && !this.isFixed && (this.isFixed = !0), this.$emit("on-clear")
          }, cancel: function () {
            this.isCancel = !0, this.currentValue = "", this.emitEvent(), this.isFixed = !1, this.$emit("on-cancel")
          }, handleResultClick: function (t) {
            this.$emit("result-click", t), this.$emit("on-result-click", t), this.isCancel = !0, this.isFixed = !1
          }, touch: function () {
            this.isCancel = !1, this.autoFixed && (this.isFixed = !0), this.$emit("on-touch")
          }, setFocus: function () {
            this.$refs.input.focus()
          }, setBlur: function () {
            this.$refs.input.blur()
          }, onFocus: function () {
            this.isFocus = !0, this.$emit("on-focus"), this.touch()
          }, onBlur: function () {
            this.isFocus = !1, this.$emit("on-blur")
          }
        },
        data: function () {
          return {onInput: !1, currentValue: "", isCancel: !0, isFocus: !1, isFixed: !1}
        },
        watch: {
          isFixed: function (t) {
            !0 === t && (this.setFocus(), this.isFocus = !0, this.autoScrollToTop && setTimeout(function () {
              window.scrollTo(0, 0)
            }, 150))
          }, value: function (t) {
            this.currentValue = t
          }
        }
      }), Xt = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {
            staticClass: "vux-search-box",
            class: {"vux-search-fixed": t.isFixed},
            style: {top: t.isFixed ? t.top : "", position: t.fixPosition}
          }, [i("div", {
            staticClass: "weui-search-bar",
            class: {"weui-search-bar_focusing": !t.isCancel || t.currentValue}
          }, [t._t("left"), t._v(" "), i("form", {
            staticClass: "weui-search-bar__form",
            attrs: {action: "."},
            on: {
              submit: function (e) {
                e.preventDefault(), t.$emit("on-submit", t.value)
              }
            }
          }, [i("label", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.isFixed && t.autoFixed,
              expression: "!isFixed && autoFixed"
            }], staticClass: "vux-search-mask", attrs: {for: "search_input_" + t.uuid}, on: {click: t.touch}
          }), t._v(" "), i("div", {staticClass: "weui-search-bar__box"}, [i("i", {staticClass: "weui-icon-search"}), t._v(" "), i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-search-bar__input",
            attrs: {
              type: "search",
              autocomplete: "off",
              id: "search_input_" + t.uuid,
              placeholder: t.placeholder,
              required: t.required
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.onFocus, blur: t.onBlur, compositionstart: function (e) {
                t.onComposition(e, "start")
              }, compositionend: function (e) {
                t.onComposition(e, "end")
              }, input: [function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }, function (e) {
                t.onComposition(e, "input")
              }]
            }
          }), t._v(" "), i("a", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.currentValue,
              expression: "currentValue"
            }], staticClass: "weui-icon-clear", attrs: {href: "javascript:"}, on: {click: t.clear}
          })]), t._v(" "), i("label", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.isFocus && !t.value,
              expression: "!isFocus && !value"
            }], staticClass: "weui-search-bar__label", attrs: {for: "search_input_" + t.uuid}
          }, [i("i", {staticClass: "weui-icon-search"}), t._v(" "), i("span", [t._v(t._s(t.placeholder || "搜索"))])])]), t._v(" "), i("a", {
            staticClass: "weui-search-bar__cancel-btn",
            attrs: {href: "javascript:"},
            on: {click: t.cancel}
          }, [t._v(t._s(t.cancelText || "取消") + "\n    ")]), t._v(" "), t._t("right")], 2), t._v(" "), i("div", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.isFixed,
              expression: "isFixed"
            }], staticClass: "weui-cells vux-search_show"
          }, [t._t("default"), t._v(" "), t._l(t.results, function (e) {
            return i("div", {
              staticClass: "weui-cell weui-cell_access", on: {
                click: function (i) {
                  t.handleResultClick(e)
                }
              }
            }, [i("div", {staticClass: "weui-cell__bd weui-cell_primary"}, [i("p", [t._v(t._s(e.title))])])])
          })], 2)])
        }, staticRenderFns: []
      };
    var Gt = i("VU/8")(Yt, Xt, !1, function (t) {
      i("JRgG")
    }, null, null).exports, Zt = {
      components: {Search: Gt}, data: function () {
        return {results: [{title: "aaa"}]}
      }
    }, Jt = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "search-box"}}, [e("search", {
          attrs: {
            placeholder: "搜索用户",
            results: this.results
          }
        })], 1)
      }, staticRenderFns: []
    };
    var Qt = i("VU/8")(Zt, Jt, !1, function (t) {
      i("CbdW")
    }, "data-v-1b4f32e1", null).exports;
    n.a.use(tt.a);
    v()({
      name: "home",
      created: function () {
        this.$store.dispatch("boardList/getBoardList").then(function (t) {
          return console.log(t)
        })
      },
      computed: f()({}, Object(x.b)(["userId"])),
      data: function () {
        return {
          swipers: ["http://localhost:3000/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg", "http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg"],
          showPopup: !1,
          curUser: 0,
          showPersonal: !1,
          ulBoradStyle: {},
          swiperOption: {
            autoplay: 3e3,
            grabCursor: !0,
            setWrapperSize: !0,
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next",
            scrollbar: ".swiper-scrollbar",
            mousewheelControl: !0,
            observeParents: !0,
            debugger: !0
          }
        }
      },
      mounted: function () {
        var t = parseFloat(document.documentElement.style.fontSize), e = this.$refs.board.clientHeight / t - 1;
        n.a.set(this.ulBoradStyle, "height", 1.8 * Math.floor(e / 1.8) * t + "px")
      },
      components: {swiper: j.swiper, swiperSlide: j.swiperSlide, PersonalBattle: Kt, BattleSetting: $t, SearchBox: Qt},
      methods: {
        expertDetail: function () {
          this.$router.push({path: "/home/expertDetail", query: {}})
        }, rule: function () {
          this.$router.push({path: "/home/rule", query: {}})
        }, personalBattle: function (t) {
          t ? (this.showPersonal = !0, this.curUser = t) : this.showPersonal = !1
        }, challenge: function (t) {
          t == this.userId ? this.$vux.alert.show({
            title: "提示", content: "不可以挑战自己哦", onShow: function () {
            }, onHide: function () {
            }
          }) : (this.curUser = t, this.$store.dispatch("setShowPopup", !0))
        }, hidePopUp: function () {
          this.$store.dispatch("setShowPopup", !1)
        }, postNewBattle: function () {
          var t = this;
          this.battleDetail.expiredTime ? D(f()({}, this.battleDetail, v()({
            founder: this.userId,
            duringTime: 123,
            initialMoney: 1e4 * this.battleDetail.initialMoney,
            expiredTime: new Date(this.battleDetail.expiredTime + ":00:00").getTime()
          }, "duringTime", 864e5 * this.battleDetail.duringTime))).then(function () {
            t.$vux.alert.show({
              title: "恭喜", content: "战书已下达，请等待对方应战！", onShow: function () {
              }, onHide: function () {
                t.showPopup = !1
              }
            })
          }) : this.$vux.alert.show({
            title: "系统提示", content: "<br>请设置摆擂时间", onShow: function () {
            }, onHide: function () {
            }
          })
        }
      }
    }, "computed", f()({
      expiredTime: function () {
        return this.getNormalTime + " " + this.minHour
      }
    }, Object(x.b)({boardListUser: "boardList/allBoardList", userId: "userId"})));
    n.a.use(tt.a);
    var te = v()({
      name: "home",
      created: function () {
        this.$store.dispatch("boardList/getBoardList").then(function (t) {
          return console.log(t)
        })
      },
      computed: f()({}, Object(x.b)(["userId"])),
      data: function () {
        return {
          swipers: ["http://localhost:3000/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg", "http://localhost:3000/static/img/6d21c5fa5f66f8f31469320ec1123458.jpeg"],
          showPopup: !1,
          curUser: 0,
          showPersonal: !1,
          ulBoradStyle: {},
          swiperOption: {
            autoplay: 3e3,
            grabCursor: !0,
            setWrapperSize: !0,
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next",
            scrollbar: ".swiper-scrollbar",
            mousewheelControl: !0,
            observeParents: !0,
            debugger: !0
          }
        }
      },
      mounted: function () {
        var t = parseFloat(document.documentElement.style.fontSize), e = this.$refs.board.clientHeight / t - 1;
        n.a.set(this.ulBoradStyle, "height", 1.8 * Math.floor(e / 1.8) * t + "px")
      },
      components: {swiper: j.swiper, swiperSlide: j.swiperSlide, PersonalBattle: Kt, BattleSetting: $t, SearchBox: Qt},
      methods: {
        expertDetail: function () {
          this.$router.push({path: "/home/expertDetail", query: {}})
        }, rule: function () {
          this.$router.push({path: "/home/rule", query: {}})
        }, personalBattle: function (t) {
          t ? (this.showPersonal = !0, this.curUser = t) : this.showPersonal = !1
        }, challenge: function (t) {
          t == this.userId ? this.$vux.alert.show({
            title: "提示", content: "不可以挑战自己哦", onShow: function () {
            }, onHide: function () {
            }
          }) : (this.curUser = t, this.$store.dispatch("setShowPopup", !0))
        }, hidePopUp: function () {
          this.$store.dispatch("setShowPopup", !1)
        }, postNewBattle: function () {
          var t = this;
          this.battleDetail.expiredTime ? D(f()({}, this.battleDetail, v()({
            founder: this.userId,
            duringTime: 123,
            initialMoney: 1e4 * this.battleDetail.initialMoney,
            expiredTime: new Date(this.battleDetail.expiredTime + ":00:00").getTime()
          }, "duringTime", 864e5 * this.battleDetail.duringTime))).then(function () {
            t.$vux.alert.show({
              title: "恭喜", content: "战书已下达，请等待对方应战！", onShow: function () {
              }, onHide: function () {
                t.showPopup = !1
              }
            })
          }) : this.$vux.alert.show({
            title: "系统提示", content: "<br>请设置摆擂时间", onShow: function () {
            }, onHide: function () {
            }
          })
        }
      }
    }, "computed", f()({
      expiredTime: function () {
        return this.getNormalTime + " " + this.minHour
      }
    }, Object(x.b)({boardListUser: "boardList/allBoardList", userId: "userId"}))), ee = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {attrs: {id: "home"}}, [n("search-box"), t._v(" "), n("div", {attrs: {id: "swiper"}}, [n("swiper", {
          ref: "mySwiper",
          attrs: {options: t.swiperOption},
          on: {
            someSwiperEvent: function (t) {
            }
          }
        }, [n("swiper-slide", [n("img", {
          staticClass: "img",
          attrs: {src: i("cgYH"), alt: ""},
          on: {
            click: function (e) {
              return e.target !== e.currentTarget ? null : t.rule(e)
            }
          }
        })]), t._v(" "), n("swiper-slide", [n("img", {
          staticClass: "img",
          attrs: {src: i("1Nsc"), alt: ""},
          on: {
            click: function (e) {
              return e.target !== e.currentTarget ? null : t.expertDetail(e)
            }
          }
        })]), t._v(" "), n("div", {
          staticClass: "swiper-pagination",
          attrs: {slot: "pagination"},
          slot: "pagination"
        }), t._v(" "), n("div", {
          staticClass: "swiper-scrollbar",
          attrs: {slot: "scrollbar"},
          slot: "scrollbar"
        })], 1)], 1), t._v(" "), n("div", {
          ref: "board",
          attrs: {id: "board"}
        }, [n("h2", [t._v("排行榜")]), t._v(" "), t.boardListUser ? n("ul", {
          ref: "ulBorad",
          style: t.ulBoradStyle
        }, t._l(t.boardListUser, function (e, i) {
          return n("li", {
            key: i, on: {
              click: function (i) {
                t.personalBattle(e.userId)
              }
            }
          }, [n("img", {
            attrs: {
              src: e.portrait,
              alt: ""
            }
          }), t._v(" "), n("span", [t._v(t._s(e.name))]), t._v(" "), n("span", [n("em", [t._v("胜率/")]), t._v(t._s(100 * e.winRate.toFixed(2) + "%"))]), t._v(" "), n("button", {
            staticClass: "challenge",
            on: {
              click: function (i) {
                i.stopPropagation(), t.challenge(e.userId)
              }
            }
          }, [t._v("挑战")])])
        })) : t._e()]), t._v(" "), n("personal-battle", {
          class: [t.showPersonal ? "rotate-start" : "rotate-finish"],
          attrs: {curUser: t.curUser},
          on: {
            notifyHome: function (e) {
              t.personalBattle(!1)
            }
          }
        }), t._v(" "), n("keep-alive", [n("battle-setting", {attrs: {situation: "Home", curUser: t.curUser}})], 1)], 1)
      }, staticRenderFns: []
    };
    var ie = i("VU/8")(te, ee, !1, function (t) {
        i("9J5q")
      }, "data-v-253bceaa", null).exports, ne = i("piuB"),
      ae = (ne.b, Number, String, String, String, String, Boolean, Function, String, Boolean, Number, String, {
        name: "tab",
        mixins: [ne.b],
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            setTimeout(function () {
              t.hasReady = !0
            }, 0)
          })
        },
        props: {
          lineWidth: {type: Number, default: 3},
          activeColor: String,
          barActiveColor: String,
          defaultColor: String,
          disabledColor: String,
          animate: {type: Boolean, default: !0},
          customBarWidth: [Function, String],
          preventDefault: Boolean,
          scrollThreshold: {type: Number, default: 4},
          barPosition: {
            type: String, default: "bottom", validator: function (t) {
              return -1 !== ["bottom", "top"].indexOf(t)
            }
          }
        },
        computed: {
          barLeft: function () {
            if (this.hasReady) {
              var t = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
              return this.currentIndex * (100 / t) + "%"
            }
          }, barRight: function () {
            if (this.hasReady) {
              var t = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
              return (t - this.currentIndex - 1) * (100 / t) + "%"
            }
          }, innerBarStyle: function () {
            return {
              width: "function" == typeof this.customBarWidth ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
              backgroundColor: this.barActiveColor || this.activeColor
            }
          }, barStyle: function () {
            var t = {
              left: this.barLeft,
              right: this.barRight,
              display: "block",
              height: this.lineWidth + "px",
              transition: this.hasReady ? null : "none"
            };
            return this.customBarWidth ? t.backgroundColor = "transparent" : t.backgroundColor = this.barActiveColor || this.activeColor, t
          }, barClass: function () {
            return {
              "vux-tab-ink-bar-transition-forward": "forward" === this.direction,
              "vux-tab-ink-bar-transition-backward": "backward" === this.direction
            }
          }, scrollable: function () {
            return this.number > this.scrollThreshold
          }
        },
        watch: {
          currentIndex: function (t, e) {
            this.direction = t > e ? "forward" : "backward", this.$emit("on-index-change", t, e), this.hasReady && this.scrollToActiveTab()
          }
        },
        data: function () {
          return {direction: "forward", right: "100%", hasReady: !1}
        },
        methods: {
          scrollToActiveTab: function () {
            var t = this;
            if (this.scrollable && this.$children && this.$children.length) {
              var e = this.$children[this.currentIndex].$el, i = 0;
              window.requestAnimationFrame(function n() {
                var a = t.$refs.nav;
                a.scrollLeft += (e.offsetLeft - (a.offsetWidth - e.offsetWidth) / 2 - a.scrollLeft) / 15, ++i < 15 && window.requestAnimationFrame(n)
              })
            }
          }
        }
      }), se = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {
            staticClass: "vux-tab-wrap",
            class: "top" === t.barPosition ? "vux-tab-bar-top" : ""
          }, [i("div", {staticClass: "vux-tab-container"}, [i("div", {
            ref: "nav",
            staticClass: "vux-tab",
            class: [{"vux-tab-no-animate": !t.animate}, {scrollable: t.scrollable}]
          }, [t._t("default"), t._v(" "), t.animate ? i("div", {
            staticClass: "vux-tab-ink-bar",
            class: t.barClass,
            style: t.barStyle
          }, [t.customBarWidth ? i("span", {
            staticClass: "vux-tab-bar-inner",
            style: t.innerBarStyle
          }) : t._e()]) : t._e()], 2)])])
        }, staticRenderFns: []
      };
    var re = i("VU/8")(ae, se, !1, function (t) {
      i("iPux")
    }, null, null).exports, oe = (ne.a, String, Boolean, String, String, String, {
      name: "tab-item",
      mixins: [ne.a],
      props: {
        activeClass: String,
        disabled: Boolean,
        badgeBackground: {type: String, default: "#f74c31"},
        badgeColor: {type: String, default: "#fff"},
        badgeLabel: String
      },
      computed: {
        style: function () {
          return {
            borderWidth: this.$parent.lineWidth + "px",
            borderColor: this.$parent.activeColor,
            color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
            border: this.$parent.animate ? "none" : "auto"
          }
        }
      }
    }), le = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {
          staticClass: "vux-tab-item",
          class: [t.currentSelected ? t.activeClass : "", {
            "vux-tab-selected": t.currentSelected,
            "vux-tab-disabled": t.disabled
          }],
          style: t.style,
          on: {click: t.onItemClick}
        }, [t._t("default"), t._v(" "), void 0 !== t.badgeLabel && "" !== t.badgeLabel ? i("span", {
          staticClass: "vux-tab-item-badge",
          style: {background: t.badgeBackground, color: t.badgeColor}
        }, [t._v("\n  " + t._s(t.badgeLabel))]) : t._e()], 2)
      }, staticRenderFns: []
    }, ce = i("VU/8")(oe, le, !1, null, null, null).exports, ue = (f()({}, Object(x.b)(["userId"])), {
      name: "battle-hall",
      data: function () {
        return {
          active: 1,
          out: !1,
          showInvite: "show-invite",
          showBattle: "show-battle",
          records: [{
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            battleId: "1",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-25",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2,
            isFocus: 1
          }, {
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "null",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "null",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: {url: "null", title: "null"},
            battleId: "1",
            founderCardId: "",
            inviteeCardId: "null",
            startTime: "null",
            endTime: "null",
            duringTime: "3天",
            expireTime: "2018-08-02",
            initialMoney: "",
            founderBalance: "null",
            inviteeBalance: "null",
            founderRate: "null",
            inviteeRate: "null",
            isFocus: 0
          }, {
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            battleId: "1",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-31",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2,
            isFocus: 0
          }],
          showBattleSetting: !1
        }
      },
      components: {BattleSetting: $t, Tab: re, TabItem: ce, RecordList: Mt},
      computed: f()({}, Object(x.b)(["userId"])),
      methods: {
        battle: function () {
          this.out ? this.out = !1 : this.out = !0
        }, onItemClick: function (t) {
          this.active = t;
          var e = 1 == t ? 3 : 2 == t ? 4 : 1;
          this.getBattleList(e, this.userId)
        }, getBattleList: function (t, e) {
          var i = this;
          Tt(t, e).then(function (t) {
            i.records = t, i.records.length > 0 && n.a.set(i.records[0], "collapsed", !0)
          })
        }, setBattle: function (t) {
          this.$store.dispatch("setShowPopup", !0)
        }
      },
      created: function () {
        this.getBattleList(3, this.userId)
      }
    }), de = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "battle-hall"}}, [i("div", {staticClass: "header"}, [i("div", {staticClass: "button-tab"}, [i("tab", [i("tab-item", {
          attrs: {selected: ""},
          on: {
            "on-item-click": function (e) {
              t.onItemClick(1)
            }
          }
        }, [t._v("正在进行")]), t._v(" "), i("tab-item", {
          on: {
            "on-item-click": function (e) {
              t.onItemClick(2)
            }
          }
        }, [t._v("已结束")]), t._v(" "), i("tab-item", {
          on: {
            "on-item-click": function (e) {
              t.onItemClick(3)
            }
          }
        }, [t._v("等待应战")])], 1)], 1)]), t._v(" "), i("div", {staticClass: "records"}, [i("record-list", {
          attrs: {
            id: "record-list",
            records: t.records,
            showBtn: 2 != t.active,
            showStamp: !1
          }
        })], 1), t._v(" "), i("div", {staticClass: "battle-ball"}, [i("div", {
          staticClass: "battle",
          on: {
            click: function (e) {
              return e.stopPropagation(), t.battle(e)
            }
          }
        }, [t._v("对战")]), t._v(" "), i("div", {
          staticClass: "invite",
          class: [t.out ? t.showInvite : ""]
        }, [t._v("邀请")]), t._v(" "), i("div", {
          staticClass: "set-battle",
          class: [t.out ? t.showBattle : ""],
          on: {
            click: function (e) {
              return e.stopPropagation(), t.setBattle(e)
            }
          }
        }, [t._v("摆擂台")])]), t._v(" "), i("battle-setting")], 1)
      }, staticRenderFns: []
    };
    var he = i("VU/8")(ue, de, !1, function (t) {
      i("8Etr")
    }, null, null).exports, pe = {name: "rule", components: {BackArrow: qt}}, ve = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "rule"}}, [e("back-arrow"), this._v(" "), this._m(0), this._v(" "), this._m(1)], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "img"}, [e("img", {attrs: {src: "/src/views/Home/img/eBuyPoster.jpg", alt: ""}})])
      }, function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "article"}, [i("h1", [t._v("活动规则")]), t._v(" "), i("div", {staticClass: "content"}, [i("p", [t._v(" 1. 活动时间：2018年7月30日-2018年10月31日")]), t._v(" "), i("p", [t._v(" 2. 活动范围：中国工商银行用户即可参与")]), t._v(" "), i("p", [t._v(" 3. 参与方式：在游戏大厅页面摆擂台等待挑战者或邀请用户进行PK。在对战平台查看行情并进行模拟交易行为。每场对战根据收益率决出胜者，胜率越高就能获得更高的称号，还将有机会出现在首页的排行榜。")]), t._v(" "), i("p", [t._v(" 4. 活动奖励：说不定就有了")]), t._v(" "), i("p", [t._v(" 5. 活动主办方：中国工商银行")])])])
      }]
    };
    var me = i("VU/8")(pe, ve, !1, function (t) {
      i("NhnN")
    }, "data-v-af71a240", null).exports, fe = {name: "expert-detail", components: {BackArrow: qt}}, ge = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "expert-detail"}}, [e("back-arrow"), this._v(" "), this._m(0), this._v(" "), this._m(1)], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "img"}, [e("img", {attrs: {src: "/src/views/Home/img/expert.jpg", alt: ""}})])
      }, function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "article"}, [i("h1", [t._v("专家为您讲解股票交易")]), t._v(" "), i("div", {staticClass: "content"}, [i("p", {staticClass: "subtitle"}, [t._v("一、观察股只曲线，判断股票买点")]), t._v(" "), i("p", [t._v("1.第一阶段盘底完成以大成交量（越大越好，说明庄家彻底扫盘的决心越大）支撑5日均线以中大阳线≥3％的陡峭角度向上进行突破，当日盘中的任何一次回调低点都是坚决买进的点位。操作中切忌患得患失计较价位高低，必须确保一定能够买进。有条件者以30分钟分时图表的均线系统的金叉向上为最佳买点。")]), t._v(" "), i("p", [t._v("2.第二阶段上涨阶段的初中期每一次回档缩量≤5日均量后，5日均线再次带量上扬均是理想买点。有条件者以60分钟分时均线系统的向上金叉为最佳买点。")]), t._v(" "), i("p", [t._v("3.中线只要30日均线没有走平，它的方向仍然向上，就坚决持仓，千万不要为庄家短线展开的凶狠洗盘恐吓动作所吓倒。在你的操作水平提高以后，短线操作可以5日均线的方向作为进出依据。5日均线的方向是每个股票上涨下跌已经开始的信号弹，留意信号，做出准确判断。")]), t._v(" "), i("p", {staticClass: "subtitle"}, [t._v("二、把握股票股只卖点，谨慎小心操作")]), t._v(" "), i("p", [t._v("1、绝对不能简单地认为一只股票涨的高了就应该卖出。涨的高说明它表现好。你的任何一次临盘操作都必须具备技术上的充分依据，避免随意卖出处于强烈涨升加速期的大黑马股票。")]), t._v(" "), i("p", [t._v("2、精彩卖点：在第三阶段盘头阶段30日均线走平，成交量的放大和萎缩没有规则，阶段性天量出现。此时一旦5日均线走平，朝下的信号一旦发出就必须立即出货。均线系统的向下死叉更是普通人都知道的必杀信号。")]), t._v(" "), i("p", [t._v("3、逃命卖点：第四阶段下跌阶段30日均线一旦朝下必须全线清仓离场去舞厅跳舞。在下降通道中每一次股价反弹到30日均线掉头向下时均是套牢盘最后的逃命机会。")]), t._v(" "), i("p", [t._v("综上，在操作动作的展开中你的心态能够做到执行计划有决心，临盘进出操作有狠心。耐心、细心、决心、狠心四心具备，你可以纵横驰奔，征战沙场去夺取最大的胜利了。")])])])
      }]
    };
    var _e = i("VU/8")(fe, ge, !1, function (t) {
      i("xgAP")
    }, "data-v-56d53302", null).exports, be = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "my"}, [e("router-view")], 1)
      }, staticRenderFns: []
    };
    var we = i("VU/8")({
        name: "my", data: function () {
          return {}
        }
      }, be, !1, function (t) {
        i("+IAf")
      }, "data-v-7029ff9a", null).exports,
      xe = (ne.b, Number, {name: "button-tab", mixins: [ne.b], props: {height: Number}}), ye = {
        render: function () {
          var t = this.$createElement;
          return (this._self._c || t)("div", {staticClass: "vux-button-group"}, [this._t("default")], 2)
        }, staticRenderFns: []
      };
    var Se = i("VU/8")(xe, ye, !1, function (t) {
        i("K0cg")
      }, null, null).exports, Ce = (ne.a, {
        name: "button-tab-item", mixins: [ne.a], computed: {
          classes: function () {
            return {
              "vux-button-group-current": this.currentIndex === this.$parent.currentIndex,
              "vux-button-tab-item-first": 0 === this.currentIndex,
              "vux-button-tab-item-last": this.currentIndex === this.$parent.$children.length - 1,
              "vux-button-tab-item-middle": this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
            }
          }, style: function () {
            if (this.$parent.height) return {height: this.$parent.height + "px", lineHeight: this.$parent.height + "px"}
          }
        }
      }), Be = {
        render: function () {
          var t = this.$createElement;
          return (this._self._c || t)("a", {
            staticClass: "vux-button-tab-item",
            class: this.classes,
            style: this.style,
            attrs: {href: "javascript:"},
            on: {click: this.onItemClick}
          }, [this._t("default")], 2)
        }, staticRenderFns: []
      }, ke = i("VU/8")(Ce, Be, !1, null, null, null).exports, $e = i("mzja"),
      Te = ($e.a, f()({}, Object(x.b)(["userId"])), {
        name: "myMessage",
        data: function () {
          return {
            tab: 1,
            showPopup: !1,
            messages: [],
            msgDetail: {
              index: 0,
              senderId: 111,
              receiver: 222,
              name: "",
              portrait: "",
              content: "",
              messageTime: "",
              battleId: "",
              initialMoney: "",
              duringTime: "",
              expiredTime: "",
              ifAccepted: 1
            }
          }
        },
        components: {BackArrow: qt, ButtonTab: Se, ButtonTabItem: ke, Divider: Et, popup: X, Alert: $e.a},
        methods: {
          hidePopUp: function () {
            this.$store.dispatch("setShowPopup", !1)
          }, showDetail: function (t) {
            this.$store.dispatch("setShowPopup", !0), this.msgDetail = this.messages[t], this.msgDetail.state = this.getState(t), this.msgDetail.index = t
          }, clickTab: function (t) {
            var e = this;
            this.tab = t, 1 == t ? Vt(this.userId).then(function (t) {
              e.messages = t
            }) : Ft(this.userId).then(function (t) {
              e.messages = t
            })
          }, getState: function (t) {
            return this.msToDate(this.messages[t].expiredTime.time) < H ? "已失效" : 1 == this.messages[t].ifAccepted ? "已接受" : "待接受"
          }, msToDate: function (t) {
            return P(t)
          }, onAccept: function () {
            var t = this;
            console.log("accept challenge" + this.msgDetail.battleId), Nt({
              invitee: this.userId,
              battleId: this.msgDetail.battleId
            }).then(function (e) {
              switch (e.userState) {
                case 0:
                  t.msgDetail.ifAccepted = !0, t.messages[t.msgDetail.index].ifAccepted = !0, t.$vux.alert.show({
                    title: "成功",
                    content: "您已接受挑战，开始比赛吧",
                    onShow: function () {
                    },
                    onHide: function () {
                      t.$store.dispatch("setShowPopup", !1)
                    }
                  });
                  break;
                case 1:
                  t.$vux.alert.show({
                    title: "失败", content: "您有未完成的比赛，晚点再来吧", onShow: function () {
                    }, onHide: function () {
                      t.$store.dispatch("setShowPopup", !1)
                    }
                  });
                  break;
                case 2:
                  t.$vux.alert.show({
                    title: "失败", content: "对方正在比赛中，晚点再来吧", onShow: function () {
                    }, onHide: function () {
                      t.$store.dispatch("setShowPopup", !1)
                    }
                  })
              }
            })
          }
        },
        created: function () {
          var t = this;
          Vt(this.userId).then(function (e) {
            t.messages = e
          })
        },
        computed: f()({}, Object(x.b)(["userId"]))
      }), Ie = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {attrs: {id: "my-message"}}, [i("back-arrow"), t._v(" "), i("button-tab", [i("button-tab-item", {
            attrs: {selected: ""},
            on: {
              "on-item-click": function (e) {
                t.clickTab(1)
              }
            }
          }, [t._v("收到")]), t._v(" "), i("button-tab-item", {
            on: {
              "on-item-click": function (e) {
                t.clickTab(2)
              }
            }
          }, [i("span", {staticClass: "vux-reddot-s"}, [t._v("发出")])])], 1), t._v(" "), i("div", {attrs: {id: "msg-list"}}, [t._l(t.messages, function (e, n) {
            return i("div", {
              staticClass: "msg-item", on: {
                click: function (e) {
                  t.showDetail(n)
                }
              }
            }, [i("div", {staticClass: "head"}, [i("img", {attrs: {src: e.portrait}})]), t._v(" "), i("div", {staticClass: "body"}, [i("div", {staticClass: "name"}, [t._v(t._s(e.name))]), t._v(" "), i("div", {staticClass: "content"}, [t._v(t._s(e.content))])]), t._v(" "), i("div", {staticClass: "foot"}, [i("div", {staticClass: "time"}, [t._v(t._s(t.msToDate(e.messageTime.time)))]), t._v(" "), i("div", {staticClass: "state"}, [t._v(t._s(t.getState(n)))])])])
          }), t._v(" "), 0 == t.messages.length ? i("divider", [t._v("这里什么也没有，快去对战大厅看看吧")]) : t._e()], 2), t._v(" "), i("popup", {staticClass: "popup"}, [i("div", {
            staticClass: "content",
            attrs: {slot: "content"},
            slot: "content"
          }, [i("h1", [t._v("挑战书")]), t._v(" "), i("div", [i("p", {staticClass: "info"}, [i("span", [t._v(t._s(1 == t.tab ? "来自：" : "发给："))]), t._v(" "), i("span", {staticClass: "name"}, [t._v(t._s(t.msgDetail.name))])]), t._v(" "), i("p", {staticClass: "info"}, [i("span", [t._v("捎话：")]), t._v(" "), i("span", [t._v(t._s(t.msgDetail.content))])])]), t._v(" "), i("divider", [t._v("挑战内容")]), t._v(" "), i("div", [i("p", {staticClass: "detail"}, [i("span", {staticClass: "title"}, [t._v("初始资产")]), t._v(" "), i("span", [t._v(t._s(t.msgDetail.initialMoney))])]), t._v(" "), i("p", {staticClass: "detail"}, [i("span", {staticClass: "title"}, [t._v("PK时长")]), t._v(" "), i("span", [t._v(t._s(t.msgDetail.duringTime.time / 1e3 / 60) + "分钟")])]), t._v(" "), i("p", {staticClass: "detail"}, [i("span", {staticClass: "title"}, [t._v("失效时间")]), t._v(" "), i("span", [t._v(t._s(t.msToDate(t.msgDetail.expiredTime.time)))])])]), t._v(" "), 1 == t.tab && 0 == t.msgDetail.ifAccepted && "已失效" != t.msgDetail.state ? i("div", {
            staticClass: "btn accept-btn",
            on: {
              click: function (e) {
                t.onAccept()
              }
            }
          }, [t._v("\n\t\t\t 接受挑战\n\t\t\t")]) : t._e(), t._v(" "), 1 == t.tab && 1 == t.msgDetail.ifAccepted && "已失效" != t.msgDetail.state ? i("div", {staticClass: "btn accepted-btn"}, [t._v("\n\t\t\t 已接受\n\t\t\t")]) : t._e(), t._v(" "), 2 == t.tab || "已失效" == t.msgDetail.state ? i("div", {staticClass: "btn state"}, [t._v("\n\t\t\t\t\t" + t._s(t.msgDetail.state) + "\n\t\t\t")]) : t._e()], 1)])], 1)
        }, staticRenderFns: []
      };
    var De = i("VU/8")(Te, Ie, !1, function (t) {
      i("72cZ")
    }, "data-v-3b618b9a", null).exports, Ve = (String, String, {
      name: "nav-bar",
      components: {BackArrow: qt},
      props: {color: {type: String, default: "red"}, title: {type: String, default: ""}}
    }), Fe = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          staticClass: "nav-bar",
          class: "red" == this.color ? "red" : "white"
        }, [e("back-arrow", {attrs: {color: "red" == this.color ? "white" : "red"}}), this._v(" "), e("div", {
          staticClass: "title",
          class: "red" == this.color ? "font-white" : "font-red"
        }, [this._v(this._s(this.title))])], 1)
      }, staticRenderFns: []
    };
    var Ne = i("VU/8")(Ve, Fe, !1, function (t) {
      i("LHec")
    }, null, null).exports, Re = (f()({}, Object(x.b)(["userId"])), {
      name: "myBattles", data: function () {
        return {
          selectTime: "all",
          filterOp: [{id: "all", content: "全部", active: !0}, {id: "1", content: "1天内", active: !1}, {
            id: "3",
            content: "3天内",
            active: !1
          }, {id: "7", content: "7天内", active: !1}],
          records: [{
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-25",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }, {
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-29",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }]
        }
      }, created: function () {
        this.getUserRecords(this.userId, "all")
      }, methods: {
        tapFilter: function (t) {
          for (var e = 0; e < this.filterOp.length; e++) this.filterOp[e].id == t ? (this.filterOp[e].active = !0, this.selectTime = t) : this.filterOp[e].active = !1;
          this.records = [], this.getUserRecords(this.userId, this.selectTime)
        }, getUserRecords: function (t, e) {
          var i = this;
          Rt(t, e).then(function (t) {
            i.records = t, i.records.length > 0 && n.a.set(i.records[0], "collapsed", !0)
          })
        }
      }, components: {RecordList: Mt, NavBar: Ne}, computed: f()({}, Object(x.b)(["userId"]))
    }), Pe = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "my-battles"}}, [i("nav-bar", {attrs: {title: "我的比赛"}}), t._v(" "), i("div", {attrs: {id: "filter"}}, t._l(t.filterOp, function (e) {
          return i("span", {
            staticClass: "filter-button",
            class: [e.active ? "selected" : ""],
            on: {
              click: function (i) {
                t.tapFilter(e.id)
              }
            }
          }, [t._v(t._s(e.content))])
        })), t._v(" "), i("div", {staticClass: "records"}, [i("record-list", {
          attrs: {
            id: "record-list",
            records: t.records,
            showBtn: !1
          }
        })], 1)], 1)
      }, staticRenderFns: []
    };
    var He = i("VU/8")(Re, Pe, !1, function (t) {
      i("vlRK")
    }, null, null).exports, Oe = (f()({}, Object(x.b)(["userId"])), {
      name: "myFocus", data: function () {
        return {
          records: [{
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-25",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }, {
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: "初出茅庐",
            founderCardId: "",
            inviteeCardId: "",
            startTime: "2018-07-20",
            endTime: "2018-07-29",
            initialMoney: "",
            founderBalance: "",
            inviteeBalance: "",
            founderRate: 1.1,
            inviteeRate: 1.2
          }]
        }
      }, created: function () {
        this.getMyFocus(this.userId)
      }, methods: {
        getMyFocus: function (t) {
          var e = this;
          Pt(t).then(function (t) {
            e.records = t, e.records.length > 0 && n.a.set(e.records[0], "collapsed", !0);
            for (var i = 0; i < e.records.length; i++) n.a.set(e.records[i], "isFocus", 1)
          })
        }
      }, components: {RecordList: Mt, NavBar: Ne}, computed: f()({}, Object(x.b)(["userId"]))
    }), Ee = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "my-focus"}}, [e("nav-bar", {attrs: {title: "我的关注"}}), this._v(" "), e("div", {staticClass: "records"}, [e("record-list", {
          attrs: {
            id: "record-list",
            records: this.records,
            showBtn: !0,
            showStamp: !0
          }
        })], 1)], 1)
      }, staticRenderFns: []
    };
    var je = i("VU/8")(Oe, Ee, !1, function (t) {
      i("PSGb")
    }, null, null).exports, Ae = (f()({}, Object(x.b)(["userInfo"])), {
      name: "my", data: function () {
        return {
          userId: 111,
          name: "投资家",
          portrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
          honor: {title: "吃鸡达人", url: "/static/icon-img/honor.png"},
          winRate: .8
        }
      }, computed: f()({}, Object(x.b)(["userInfo"]))
    }), Me = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "my"}}, [i("div", {attrs: {id: "user-info"}}, [i("div", {attrs: {id: "portrait"}}, [i("img", {
          staticClass: "portrait",
          attrs: {src: t.userInfo.portrait}
        })]), t._v(" "), i("div", {attrs: {id: "data"}}, [i("div", {attrs: {id: "name"}}, [t._v(t._s(t.userInfo.name)), i("img", {
          staticClass: "medal",
          attrs: {src: t.honor.url}
        })]), t._v(" "), i("span", {staticClass: "win-rate"}, [t._v("胜率：" + t._s((100 * t.userInfo.winRate).toFixed(2) + "%") + "    ")]), t._v(" "), i("span", {staticClass: "honor"}, [t._v(t._s(t.userInfo.honor.title))])])]), t._v(" "), i("div", {attrs: {id: "menu"}}, [i("div", {staticClass: "list"}, [i("router-link", {
          attrs: {
            to: {
              name: "MyBattles",
              params: {}
            }
          }
        }, [i("div", {staticClass: "list-item"}, [i("img", {
          staticClass: "item-head",
          attrs: {src: "/static/icon-img/clock.png"}
        }), t._v(" "), i("span", {staticClass: "item-body"}, [t._v("我的比赛")]), t._v(" "), i("img", {
          staticClass: "item-foot",
          attrs: {src: "/static/icon-img/icons8-chevron-right-26.png"}
        })])]), t._v(" "), i("router-link", {
          attrs: {
            to: {
              name: "MyMessage",
              params: {}
            }
          }
        }, [i("div", {staticClass: "list-item"}, [i("img", {
          staticClass: "item-head",
          attrs: {src: "/static/icon-img/message.png"}
        }), t._v(" "), i("span", {staticClass: "item-body"}, [t._v("我的消息")]), t._v(" "), i("img", {
          staticClass: "item-foot",
          attrs: {src: "/static/icon-img/icons8-chevron-right-26.png"}
        })])]), t._v(" "), i("router-link", {
          attrs: {
            to: {
              name: "MyFocus",
              params: {}
            }
          }
        }, [i("div", {staticClass: "list-item"}, [i("img", {
          staticClass: "item-head",
          attrs: {src: "/static/icon-img/star.png"}
        }), t._v(" "), i("span", {staticClass: "item-body"}, [t._v("我的关注")]), t._v(" "), i("img", {
          staticClass: "item-foot",
          attrs: {src: "/static/icon-img/icons8-chevron-right-26.png"}
        })])])], 1)])])
      }, staticRenderFns: []
    };
    var Le = i("VU/8")(Ae, Me, !1, function (t) {
      i("gRJq")
    }, "data-v-c81426ea", null).exports;
    i("4UDB");
    i("9cSo");
    i("XLwt"), f()({}, Object(x.b)({values: "battle/KLineData", categoryData: "battle/KLineTime"}));
    i("9cSo");
    var Ue = i("XLwt"), qe = {
      name: "k-line",
      computed: f()({}, Object(x.b)({values: "battle/KLineData", categoryData: "battle/KLineTime"})),
      data: function () {
        return {
          option: {
            tooltip: {trigger: "axis", axisPointer: {type: "cross"}, show: !0},
            legend: {data: ["日K"]},
            grid: {left: "10%", right: "10%", bottom: "15%"},
            xAxis: {
              type: "category",
              data: this.categoryData,
              scale: !0,
              boundaryGap: !1,
              axisLine: {onZero: !1},
              splitLine: {show: !1},
              splitNumber: 20,
              min: "dataMin",
              max: "dataMax"
            },
            yAxis: {scale: !0, splitArea: {show: !0}},
            dataZoom: [{type: "inside", start: 50, end: 100}, {
              show: !0,
              type: "slider",
              y: "90%",
              start: 50,
              end: 100
            }],
            series: [{
              name: "日K",
              type: "candlestick",
              data: this.values,
              itemStyle: {
                normal: {
                  color: "#ec0000",
                  color0: "#00da3c",
                  borderColor: "#8A0000",
                  borderColor0: "#008F28"
                }
              },
              markPoint: {
                label: {
                  normal: {
                    formatter: function (t) {
                      return null != t ? Math.round(t.value) : ""
                    }
                  }
                },
                data: [{
                  name: "XX标点",
                  coord: ["2013/5/31", 2300],
                  value: 2300,
                  itemStyle: {normal: {color: "rgb(41,60,85)"}}
                }, {name: "highest value", type: "max", valueDim: "highest"}, {
                  name: "lowest value",
                  type: "min",
                  valueDim: "lowest"
                }, {name: "average value on close", type: "average", valueDim: "close"}],
                tooltip: {
                  formatter: function (t) {
                    return t.name + "<br>" + (t.data.coord || "")
                  }
                }
              },
              markLine: {
                symbol: ["none", "none"],
                data: [[{
                  name: "from lowest to highest",
                  type: "min",
                  valueDim: "lowest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {normal: {show: !1}, emphasis: {show: !1}}
                }, {
                  type: "max",
                  valueDim: "highest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {normal: {show: !1}, emphasis: {show: !1}}
                }], {name: "min line on close", type: "min", valueDim: "close"}, {
                  name: "max line on close",
                  type: "max",
                  valueDim: "close"
                }]
              }
            }]
          }
        }
      },
      mounted: function () {
        var t = this;
        this.$nextTick(function () {
          var e = document.getElementById("k-lines"), i = Ue.init(e, "light");
          console.log(t.option), i.setOption(t.option, !0)
        })
      },
      methods: {}
    }, We = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("div", {attrs: {id: "k-lines"}})
      }, staticRenderFns: []
    };
    var ze = i("VU/8")(qe, We, !1, function (t) {
      i("wV29")
    }, "data-v-43bdc2b1", null).exports, Ke = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "battle-index"}, [e("router-view")], 1)
      }, staticRenderFns: []
    };
    var Ye = i("VU/8")({
      name: "index", data: function () {
        return {}
      }
    }, Ke, !1, function (t) {
      i("g/W3")
    }, "data-v-4c2df797", null).exports;

    function Xe(t) {
      return I("Get", "/api/v1/eBuy/currentBattle/" + t, null, !0)
    }

    function Ge(t) {
      return I("Get", "/api/v1/eBuy/singleProduct/" + t)
    }

    function Ze(t, e) {
      return I("Get", "/api/v1/eBuy/singleProductAccount/" + t + "?productId=" + e)
    }

    function Je(t) {
      return I("Post", "/api/v1/eBuy/buyProduct", t)
    }

    function Qe(t) {
      return I("Post", "/api/v1/eBuy/sellProduct", t)
    }

    function ti(t) {
      return I("Get", "/api/v1/eBuy/myAccounts/" + t)
    }

    Array;
    var ei = {
      name: "product-list", props: {products: {type: Array}}, data: function () {
        return {}
      }, methods: {
        toProduct: function (t) {
          this.$router.push({path: "/battle/productdetail", query: {obj: this.products[t].obj}})
        }
      }
    }, ii = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "product-list"}}, [t._m(0), t._v(" "), t._l(t.products, function (e, n) {
          return i("div", {
            staticClass: "product", on: {
              click: function (e) {
                t.toProduct(n)
              }
            }
          }, [i("span", {staticClass: "name"}, [t._v(t._s(e.name))]), t._v(" "), i("span", {
            staticClass: "price",
            class: e.bankbuyp >= e.openbankbuyp ? "red" : "green"
          }, [t._v("\n\t\t\t" + t._s(parseFloat(e.bankbuyp).toFixed(4)))]), t._v(" "), i("span", {
            staticClass: "price",
            class: e.banksellp >= e.openbanksellp ? "red" : "green"
          }, [t._v("\n\t\t\t" + t._s(parseFloat(e.banksellp).toFixed(4)))])])
        })], 2)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "title"}, [e("span", {staticClass: "flex-4"}, [this._v("产品")]), this._v(" "), e("span", {staticClass: "flex-3"}, [this._v("银行买入价")]), this._v(" "), e("span", {staticClass: "flex-3"}, [this._v("银行卖出价")])])
      }]
    };
    var ni = i("VU/8")(ei, ii, !1, function (t) {
      i("9dZf")
    }, "data-v-36cea116", null).exports, ai = i("162o"), si = (i("1nuA"), Number, {
      name: "time-count", props: {endTime: {type: Number}}, data: function () {
        return {day: "00", hour: "00", min: "00", sec: "00", flag: !1}
      }, mounted: function () {
        var t = this, e = Object(ai.setInterval)(function () {
          1 == t.flag && Object(ai.clearInterval)(e), t.timeDown()
        }, 500)
      }, methods: {
        timeDown: function () {
          var t = (new Date).getTime(), e = parseInt((this.endTime - t) / 1e3);
          this.day = parseInt(e / 86400), this.hour = this.formate(parseInt(e / 3600 % 24)), this.min = this.formate(parseInt(e / 60 % 60)), this.sec = this.formate(e % 60), e <= 0 && (this.flag = !0)
        }, formate: function (t) {
          return t >= 10 ? t : "0" + t
        }
      }
    }), ri = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {
          staticClass: "cnt",
          attrs: {id: "cnt-down"}
        }, [i("span", {staticClass: "num"}, [t._v(t._s(t.day))]), i("span", [t._v("天")]), t._v(" "), i("span", {staticClass: "num"}, [t._v(t._s(t.hour))]), i("span", [t._v("时")]), t._v(" "), i("span", {staticClass: "num"}, [t._v(t._s(t.min))]), i("span", [t._v("分")]), t._v(" "), i("span", {staticClass: "num"}, [t._v(t._s(t.sec))]), i("span", [t._v("秒")])])
      }, staticRenderFns: []
    };
    var oi = i("VU/8")(si, ri, !1, function (t) {
      i("VNHH")
    }, "data-v-130e921a", null).exports, li = (f()({}, Object(x.b)(["userId"])), {
      name: "battle",
      components: {ProductList: ni, TimeCount: oi},
      data: function () {
        return {
          curTime: (new Date).getTime(),
          battleDetail: {
            played: 1,
            battleId: 0,
            startTime: {time: 864e5},
            endTime: {time: 864e5},
            initialMoney: 1e5,
            founderId: 111,
            inviteeId: 222,
            founderName: "我是长长的用户名hhhhhhhhhhhhhhhhhh",
            inviteeName: "userB",
            founderPortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            inviteePortrait: "/static/img/5f236c10dc4d2e83d386048aedf9e50c.jpg",
            founderHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            inviteeHonor: {url: "/static/icon-img/honor-初出茅庐.png", title: "迷你鸡王"},
            founderAllMoney: 123123,
            inviteeAllMoney: 312321,
            founderBalance: 123123,
            inviteeBalance: 32321,
            founderRate: .1122,
            inviteeRate: .2321
          },
          products: [{
            obj: 1,
            name: "白金啊啊啊啊啊啊啊啊啊啊",
            bankbuyp: 200.8927,
            banksellp: 203.2198,
            openbankbuyp: 200.8922,
            openbanksellp: 203.8922
          }, {
            obj: 2,
            name: "美元账户黄金",
            bankbuyp: 200.8927,
            banksellp: 203.2198,
            openbankbuyp: 200.8933,
            openbanksellp: 203.0567
          }, {
            obj: 3,
            name: "人民币账户白金",
            bankbuyp: 200.8927,
            banksellp: 203.2198,
            openbankbuyp: 200.8922,
            openbanksellp: 203.8922
          }],
          intervalId: 0,
          flag: !0,
          flagId: 0
        }
      },
      methods: {
        msToDate: function (t) {
          return P(t)
        }, clickFresh: function () {
          var t = this;
          1 == this.flag && (this.getCurrentBattle(this.userId), this.flag = !1, Object(ai.clearInterval)(this.flagId), this.flagId = Object(ai.setInterval)(function () {
            t.flag = !0
          }, 5e3))
        }, refresh: function () {
          var t = this;
          this.intervalId = Object(ai.setInterval)(function () {
            t.getCurrentBattle(t.userId)
          }, 1e4)
        }, getCurrentBattle: function (t) {
          var e = this;
          Xe(t).then(function (t) {
            1 == t.played ? e.battleDetail = t : e.battleDetail.played = 0
          })
        }, toHold: function (t) {
          var e = 1 == t ? this.battleDetail.founderId : this.battleDetail.inviteeId,
            i = 1 == t ? this.battleDetail.founderName : this.battleDetail.inviteeName;
          this.$router.push({path: "/battle/accountinfo", query: {userId: e, name: i}})
        }
      },
      computed: f()({}, Object(x.b)(["userId"])),
      mounted: function () {
        this.refresh()
      },
      beforeDestroy: function () {
        Object(ai.clearInterval)(this.intervalId)
      },
      created: function () {
        var t = this;
        this.getCurrentBattle(this.userId);
        var e = i("DmT9")("http://192.168.43.118:3000");
        e.on("connect", function (i) {
          e.on("message", function (e) {
            try {
              console.log(e), t.products = JSON.parse(e.productDetail)
            } catch (t) {
              console.log("parse error")
            }
          })
        })
      }
    }), ci = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "battle"}}, [0 == t.battleDetail.played ? i("div", {staticClass: "no-battle"}, [t._v("您还没有参加过比赛，快去大厅看看吧")]) : t._e(), t._v(" "), 1 == t.battleDetail.played ? i("div", {staticClass: "current"}, [i("div", {staticClass: "count-down-wrapper"}, [i("div", [t._v(t._s(t.battleDetail.endTime.time > (new Date).getTime() ? "距离比赛结束还有" : "本场比赛已结束"))]), t._v(" "), t.battleDetail.endTime.time > (new Date).getTime() ? i("time-count", {attrs: {endTime: t.battleDetail.endTime.time}}) : t._e()], 1), t._v(" "), i("div", {staticClass: "battle-info"}, [i("div", {staticClass: "time"}, [i("span", [t._v("开始：" + t._s(t.msToDate(t.battleDetail.startTime.time)))]), t._v(" "), i("span", [t._v("结束：" + t._s(t.msToDate(t.battleDetail.endTime.time)))])]), t._v(" "), i("div", {staticClass: "init"}, [t._v("初始资金：" + t._s(t.battleDetail.initialMoney) + "元")])]), t._v(" "), i("div", {staticClass: "user-wrapper"}, [i("div", {
          staticClass: "refresh",
          style: t.flag ? "color: #666" : "",
          on: {
            click: function (e) {
              t.clickFresh()
            }
          }
        }, [t._v("刷新")]), t._v(" "), i("div", {staticClass: "user"}, [i("div", [i("img", {
          staticClass: "portrait",
          attrs: {src: t.battleDetail.founderPortrait}
        })]), t._v(" "), i("div", {staticClass: "name"}, [t._v(t._s(t.battleDetail.founderName))]), t._v(" "), i("div", {staticClass: "honor"}, [i("img", {
          staticClass: "medal",
          attrs: {src: t.battleDetail.founderHonor.url}
        }), t._v(" "), i("span", [t._v(t._s(t.battleDetail.founderHonor.title))])]), t._v(" "), i("div", {staticClass: "all-money"}, [t._v("总资产：" + t._s(t.battleDetail.founderAllMoney.toFixed(2)))]), t._v(" "), i("div", {staticClass: "rate"}, [t._v("收益率：\n        "), i("span", {class: t.battleDetail.founderRate >= 0 ? "red-font" : "green-font"}, [t._v(t._s((100 * t.battleDetail.founderRate).toFixed(2)) + "%")])]), t._v(" "), i("div", {staticClass: "balance"}, [t._v("余额：\n        "), i("span", [t._v(t._s(t.battleDetail.founderBalance.toFixed(2)))])]), t._v(" "), i("div", {
          staticClass: "hold",
          on: {
            click: function (e) {
              t.toHold(1)
            }
          }
        }, [t._v("持仓情况")])]), t._v(" "), i("div", {staticClass: "vs"}, [t._v("VS")]), t._v(" "), i("div", {staticClass: "user"}, [i("div", [i("img", {
          staticClass: "portrait",
          attrs: {src: t.battleDetail.inviteePortrait}
        })]), t._v(" "), i("div", {staticClass: "name"}, [t._v(t._s(t.battleDetail.inviteeName))]), t._v(" "), i("div", {staticClass: "honor"}, [i("span", [t._v(t._s(t.battleDetail.inviteeHonor.title))]), t._v(" "), i("img", {
          staticClass: "medal",
          attrs: {src: t.battleDetail.inviteeHonor.url}
        })]), t._v(" "), i("div", {staticClass: "all-money"}, [t._v("总资产：" + t._s(t.battleDetail.inviteeAllMoney.toFixed(2)))]), t._v(" "), i("div", {staticClass: "rate"}, [t._v("收益率：\n        "), i("span", {class: t.battleDetail.inviteeRate >= 0 ? "red-font" : "green-font"}, [t._v(t._s((100 * t.battleDetail.inviteeRate).toFixed(2)) + "%")])]), t._v(" "), i("div", {staticClass: "balance"}, [t._v("余额：\n        "), i("span", [t._v(t._s(t.battleDetail.inviteeBalance.toFixed(2)))])]), t._v(" "), i("div", {
          staticClass: "hold",
          on: {
            click: function (e) {
              t.toHold(2)
            }
          }
        }, [t._v("持仓情况")])])])]) : t._e(), t._v(" "), i("product-list", {
          attrs: {
            id: "product-list",
            products: t.products
          }
        })], 1)
      }, staticRenderFns: []
    };
    var ui = i("VU/8")(li, ci, !1, function (t) {
      i("I+l+")
    }, "data-v-64da024a", null).exports, di = (f()({}, Object(x.b)(["challengeState"]), {
      price: function () {
        return ((this.productDetail.bankSellp + this.productDetail.bankBuyp) / 2).toFixed(2)
      }, openprice: function () {
        return ((this.productDetail.startSell + this.productDetail.startBuy) / 2).toFixed(2)
      }, closeprice: function () {
        return ((this.productDetail.endSell + this.productDetail.endBuy) / 2).toFixed(2)
      }, change: function () {
        return (this.price - this.openprice).toFixed(2)
      }, changepct: function () {
        return (this.change / this.openprice * 100).toFixed(2) + "%"
      }
    }), {
      name: "product-detail", data: function () {
        return {
          productDetail: {
            productId: 1,
            productName: "白金啊啊啊啊啊啊啊啊啊啊",
            bankBuyp: 200.8927,
            bankSellp: 203.2198,
            startSell: 200.8922,
            startBuy: 203.8922,
            endSell: 200.8922,
            endBuy: 203.8922
          }
        }
      }, created: function () {
        this.productDetail.productId = this.$route.query.obj, this.getDetail(this.$route.query.obj)
      }, computed: f()({}, Object(x.b)(["challengeState"]), {
        price: function () {
          return ((this.productDetail.bankSellp + this.productDetail.bankBuyp) / 2).toFixed(2)
        }, openprice: function () {
          return ((this.productDetail.startSell + this.productDetail.startBuy) / 2).toFixed(2)
        }, closeprice: function () {
          return ((this.productDetail.endSell + this.productDetail.endBuy) / 2).toFixed(2)
        }, change: function () {
          return (this.price - this.openprice).toFixed(2)
        }, changepct: function () {
          return (this.change / this.openprice * 100).toFixed(2) + "%"
        }
      }), components: {NavBar: Ne, KLine: ze}, methods: {
        transaction: function (t) {
          2 == this.challengeState ? this.$router.push({
            name: "transaction",
            params: {productId: this.productDetail.productId, operation: t}
          }) : this.$vux.alert.show({
            title: "失败", content: "您当前没有正在进行的比赛", onShow: function () {
            }, onHide: function () {
            }
          })
        }, getDetail: function (t) {
          var e = this;
          Ge(t).then(function (t) {
            e.productDetail = t
          })
        }
      }
    }), hi = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "product-detail"}}, [i("nav-bar", {
          attrs: {
            color: "red",
            title: "产品详情"
          }
        }), t._v(" "), i("div", {staticClass: "detail"}, [i("div", {staticClass: "name"}, [t._v(t._s(t.productDetail.productName))]), t._v(" "), i("div", {staticClass: "num"}, [i("div", {staticClass: "left"}, [i("div", {
          staticClass: "price",
          class: t.change >= 0 ? "color-red" : "color-green"
        }, [t._v(t._s(t.price))]), t._v(" "), i("div", {staticClass: "change"}, [i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("涨跌值")]), t._v(" "), i("div", {
          staticClass: "number",
          class: t.change >= 0 ? "color-red" : "color-green"
        }, [t._v(t._s(t.change))])]), t._v(" "), i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("涨跌幅")]), t._v(" "), i("div", {
          staticClass: "number",
          class: t.change >= 0 ? "color-red" : "color-green"
        }, [t._v(t._s(t.changepct))])])])]), t._v(" "), i("div", {staticClass: "right"}, [i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("银行买入价")]), t._v(" "), i("div", {staticClass: "number"}, [t._v(t._s(t.productDetail.bankBuyp.toFixed(2)))])]), t._v(" "), i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("银行卖出价")]), t._v(" "), i("div", {staticClass: "number"}, [t._v(t._s(t.productDetail.bankSellp.toFixed(2)))])]), t._v(" "), i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("今开价")]), t._v(" "), i("div", {staticClass: "number"}, [t._v(t._s(t.openprice))])]), t._v(" "), i("div", {staticClass: "item"}, [i("div", {staticClass: "title"}, [t._v("昨收价")]), t._v(" "), i("div", {staticClass: "number"}, [t._v(t._s(t.closeprice))])])])])]), t._v(" "), i("div", {staticClass: "kline"}, [i("K-line")], 1), t._v(" "), i("div", {staticClass: "operation"}, [i("div", {
          staticClass: "btn",
          on: {
            click: function (e) {
              t.transaction(0)
            }
          }
        }, [t._v("买入")]), t._v(" "), i("div", {
          staticClass: "btn", on: {
            click: function (e) {
              t.transaction(1)
            }
          }
        }, [t._v("卖出")])])], 1)
      }, staticRenderFns: []
    };
    var pi = i("VU/8")(di, hi, !1, function (t) {
      i("UoHo")
    }, "data-v-2aad7747", null).exports, vi = i("2IIR"), mi = i("vLYD"), fi = (Object(vi.a)(), {
      name: "cell", components: {InlineDesc: rt}, props: Object(vi.a)(), created: function () {
        0
      }, beforeMount: function () {
        this.hasTitleSlot = !!this.$slots.title, this.$slots.value
      }, computed: {
        labelStyles: function () {
          return Object(G.a)({
            width: Object(mi.a)(this, "labelWidth"),
            textAlign: Object(mi.a)(this, "labelAlign"),
            marginRight: Object(mi.a)(this, "labelMarginRight")
          })
        }, valueClass: function () {
          return {
            "vux-cell-primary": "content" === this.primary || "left" === this.valueAlign,
            "vux-cell-align-left": "left" === this.valueAlign,
            "vux-cell-arrow-transition": !!this.arrowDirection,
            "vux-cell-arrow-up": "up" === this.arrowDirection,
            "vux-cell-arrow-down": "down" === this.arrowDirection
          }
        }, labelClass: function () {
          return {"vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign}
        }, style: function () {
          if (this.alignItems) return {alignItems: this.alignItems}
        }
      }, methods: {
        onClick: function () {
          !this.disabled && Object(xt.a)(this.link, this.$router)
        }
      }, data: function () {
        return {hasTitleSlot: !0, hasMounted: !1}
      }
    }), gi = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {
          staticClass: "weui-cell",
          class: {
            "vux-tap-active": t.isLink || !!t.link,
            "weui-cell_access": t.isLink || !!t.link,
            "vux-cell-no-border-intent": !t.borderIntent,
            "vux-cell-disabled": t.disabled
          },
          style: t.style,
          on: {click: t.onClick}
        }, [i("div", {staticClass: "weui-cell__hd"}, [t._t("icon")], 2), t._v(" "), i("div", {
          staticClass: "vux-cell-bd",
          class: {"vux-cell-primary": "title" === t.primary && "left" !== t.valueAlign}
        }, [i("p", [t.title || t.hasTitleSlot ? i("label", {
          staticClass: "vux-label",
          class: t.labelClass,
          style: t.labelStyles
        }, [t._t("title", [t._v(t._s(t.title))])], 2) : t._e(), t._v(" "), t._t("after-title")], 2), t._v(" "), i("inline-desc", [t._t("inline-desc", [t._v(t._s(t.inlineDesc))])], 2)], 1), t._v(" "), i("div", {
          staticClass: "weui-cell__ft",
          class: t.valueClass
        }, [t._t("value"), t._v(" "), t._t("default", [t._v(t._s(t.value))]), t._v(" "), t.isLoading ? i("i", {staticClass: "weui-loading"}) : t._e()], 2), t._v(" "), t._t("child")], 2)
      }, staticRenderFns: []
    };
    var _i = i("VU/8")(fi, gi, !1, function (t) {
        i("37g4")
      }, null, null).exports, bi = i("2LX0"), wi = i.n(bi), xi = i("Ewe+"), yi = i.n(xi), Si = i("nror"), Ci = i("lFEC"),
      Bi = i.n(Ci),
      ki = (wi.a, mt.a, Ht.a, String, String, String, String, Number, String, Boolean, Boolean, String, String, String, Function, Number, Number, Boolean, String, String, String, String, String, String, Boolean, String, Number, String, String, String, Boolean, {
        email: {
          fn: wi.a,
          msg: "邮箱格式"
        }, "china-mobile": {
          fn: function (t) {
            return yi()(t, "zh-CN")
          }, msg: "手机号码"
        }, "china-name": {
          fn: function (t) {
            return t.length >= 2 && t.length <= 6
          }, msg: "中文姓名"
        }
      }), $i = {
        name: "x-input",
        created: function () {
          var t = this;
          this.currentValue = void 0 === this.value || null === this.value ? "" : this.mask ? this.maskValue(this.value) : this.value, !this.required || void 0 !== this.currentValue && "" !== this.currentValue || (this.valid = !1), this.handleChangeEvent = !0, this.debounce && (this._debounce = Object(Si.a)(function () {
            t.$emit("on-change", t.currentValue)
          }, this.debounce))
        },
        beforeMount: function () {
          this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0), this.$slots && this.$slots["right-full-height"] && (this.hasRightFullHeightSlot = !0)
        },
        beforeDestroy: function () {
          this._debounce && this._debounce.cancel(), window.removeEventListener("resize", this.scrollIntoView)
        },
        mixins: [mt.a],
        components: {Icon: nt, InlineDesc: rt, Toast: Ht.a},
        props: {
          title: {type: String, default: ""},
          type: {type: String, default: "text"},
          placeholder: String,
          value: [String, Number],
          name: String,
          readonly: Boolean,
          disabled: Boolean,
          keyboard: String,
          inlineDesc: String,
          isType: [String, Function],
          min: Number,
          max: Number,
          showClear: {type: Boolean, default: !0},
          equalWith: String,
          textAlign: String,
          autocomplete: {type: String, default: "off"},
          autocapitalize: {type: String, default: "off"},
          autocorrect: {type: String, default: "off"},
          spellcheck: {type: String, default: "false"},
          novalidate: {type: Boolean, default: !1},
          iconType: String,
          debounce: Number,
          placeholderAlign: String,
          labelWidth: String,
          mask: String,
          shouldToastError: {type: Boolean, default: !0}
        },
        computed: {
          labelStyles: function () {
            return {
              width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
              textAlign: this.$parent.labelAlign,
              marginRight: this.$parent.labelMarginRight
            }
          }, labelClass: function () {
            return {"vux-cell-justify": "justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign}
          }, pattern: function () {
            if ("number" === this.keyboard || "china-mobile" === this.isType) return "[0-9]*"
          }, labelWidthComputed: function () {
            var t = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;
            if (t < 10) return t + "em"
          }, hasErrors: function () {
            return M()(this.errors).length > 0
          }, inputStyle: function () {
            if (this.textAlign) return {textAlign: this.textAlign}
          }, showWarn: function () {
            return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError)
          }
        },
        mounted: function () {
          window.addEventListener("resize", this.scrollIntoView)
        },
        methods: {
          scrollIntoView: function () {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            /iphone/i.test(navigator.userAgent), "INPUT" !== document.activeElement.tagName && "TEXTAREA" !== document.activeElement.tagName || setTimeout(function () {
              t.$refs.input.scrollIntoViewIfNeeded(!0)
            }, e)
          }, onClickErrorIcon: function () {
            this.shouldToastError && this.firstError && (this.showErrorToast = !0), this.$emit("on-click-error-icon", this.firstError)
          }, maskValue: function (t) {
            return this.mask ? Bi.a.toPattern(t, this.mask) : t
          }, reset: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            this.dirty = !1, this.currentValue = t, this.firstError = "", this.valid = !0
          }, clear: function () {
            this.currentValue = "", this.focus(), this.$emit("on-click-clear-icon")
          }, focus: function () {
            this.$refs.input.focus()
          }, blur: function () {
            this.$refs.input.blur()
          }, focusHandler: function (t) {
            var e = this;
            this.$emit("on-focus", this.currentValue, t), this.isFocus = !0, setTimeout(function () {
              e.$refs.input.scrollIntoViewIfNeeded(!1)
            }, 1e3)
          }, onBlur: function (t) {
            this.setTouched(), this.validate(), this.isFocus = !1, this.$emit("on-blur", this.currentValue, t)
          }, onKeyUp: function (t) {
            "Enter" === t.key && (t.target.blur(), this.$emit("on-enter", this.currentValue, t))
          }, getError: function () {
            var t = M()(this.errors)[0];
            this.firstError = this.errors[t]
          }, validate: function () {
            if (void 0 === this.equalWith) if (this.errors = {}, this.currentValue || this.required) {
              if (!this.currentValue && this.required) return this.valid = !1, this.errors.required = "必填哦", void this.getError();
              if ("string" == typeof this.isType) {
                var t = ki[this.isType];
                if (t) {
                  var e = this.currentValue;
                  if ("china-mobile" === this.isType && "999 9999 9999" === this.mask && (e = this.currentValue.replace(/\s+/g, "")), this.valid = t.fn(e), !this.valid) return this.forceShowError = !0, this.errors.format = t.msg + "格式不对哦~", void this.getError();
                  delete this.errors.format
                }
              }
              if ("function" == typeof this.isType) {
                var i = this.isType(this.currentValue);
                if (this.valid = i.valid, !this.valid) return this.errors.format = i.msg, this.forceShowError = !0, void this.getError();
                delete this.errors.format
              }
              if (this.min) {
                if (this.currentValue.length < this.min) return this.errors.min = "最少应该输入" + this.min + "个字符哦", this.valid = !1, void this.getError();
                delete this.errors.min
              }
              if (this.max) {
                if (this.currentValue.length > this.max) return this.errors.max = "最多可以输入" + this.max + "个字符哦", this.valid = !1, void(this.forceShowError = !0);
                this.forceShowError = !1, delete this.errors.max
              }
              this.valid = !0
            } else this.valid = !0; else this.validateEqual()
          }, validateEqual: function () {
            return !this.equalWith && this.currentValue ? (this.valid = !1, void(this.errors.equal = "输入不一致")) : (this.dirty || this.currentValue.length >= this.equalWith.length) && this.currentValue !== this.equalWith ? (this.valid = !1, void(this.errors.equal = "输入不一致")) : void(!this.currentValue && this.required ? this.valid = !1 : (this.valid = !0, delete this.errors.equal))
          }, _getInputMaskSelection: function (t, e, i, n) {
            if (!this.mask || n && 0 === e) return t;
            if ((0 === e && (e = this.lastDirection), e > 0) && !this.mask.substr(t - e, 1).match(/[9SA]/)) return this._getInputMaskSelection(t + 1, e, i, !0);
            return t
          }
        },
        data: function () {
          return {
            hasRightFullHeightSlot: !1,
            hasRestrictedLabel: !1,
            firstError: "",
            forceShowError: !1,
            hasLengthEqual: !1,
            valid: !0,
            currentValue: "",
            showErrorToast: !1,
            isFocus: !1
          }
        },
        watch: {
          mask: function (t) {
            t && this.currentValue && (this.currentValue = this.maskValue(this.currentValue))
          }, valid: function () {
            this.getError()
          }, value: function (t) {
            this.currentValue = t
          }, equalWith: function (t) {
            t && this.equalWith ? (t.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate()
          }, currentValue: function (t, e) {
            var i = this;
            !this.equalWith && t && this.validateEqual(), t && this.equalWith ? (t.length === this.equalWith.length && (this.hasLengthEqual = !0), this.validateEqual()) : this.validate();
            var n = this.$refs.input.selectionStart, a = t.length - e.length;
            n = this._getInputMaskSelection(n, a, this.maskValue(t)), this.lastDirection = a, this.$emit("input", this.maskValue(t)), this.$nextTick(function () {
              i.$refs.input.selectionStart !== n && (i.$refs.input.selectionStart = n, i.$refs.input.selectionEnd = n), i.currentValue !== i.maskValue(t) && (i.currentValue = i.maskValue(t))
            }), this._debounce ? this._debounce() : this.$emit("on-change", t)
          }
        }
      }, Ti = {
        render: function () {
          var t = this, e = t.$createElement, i = t._self._c || e;
          return i("div", {
            staticClass: "vux-x-input weui-cell",
            class: {
              "weui-cell_warn": t.showWarn,
              disabled: t.disabled,
              "vux-x-input-has-right-full": t.hasRightFullHeightSlot
            }
          }, [i("div", {staticClass: "weui-cell__hd"}, [t.hasRestrictedLabel ? i("div", {style: t.labelStyles}, [t._t("restricted-label")], 2) : t._e(), t._v(" "), t._t("label", [t.title ? i("label", {
            staticClass: "weui-label",
            class: t.labelClass,
            style: {
              width: t.labelWidth || t.$parent.labelWidth || t.labelWidthComputed,
              textAlign: t.$parent.labelAlign,
              marginRight: t.$parent.labelMarginRight
            },
            attrs: {for: "vux-x-input-" + t.uuid},
            domProps: {innerHTML: t._s(t.title)}
          }) : t._e(), t._v(" "), t.inlineDesc ? i("inline-desc", [t._v(t._s(t.inlineDesc))]) : t._e()])], 2), t._v(" "), i("div", {
            staticClass: "weui-cell__bd weui-cell__primary",
            class: t.placeholderAlign ? "vux-x-input-placeholder-" + t.placeholderAlign : ""
          }, [t.type && "text" !== t.type ? t._e() : i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: t.inputStyle,
            attrs: {
              id: "vux-x-input-" + t.uuid,
              maxlength: t.max,
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              type: "text",
              name: t.name,
              pattern: t.pattern,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }), t._v(" "), "number" === t.type ? i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: t.inputStyle,
            attrs: {
              id: "vux-x-input-" + t.uuid,
              maxlength: t.max,
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              type: "number",
              name: t.name,
              pattern: t.pattern,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }) : t._e(), t._v(" "), "email" === t.type ? i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: t.inputStyle,
            attrs: {
              id: "vux-x-input-" + t.uuid,
              maxlength: t.max,
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              type: "email",
              name: t.name,
              pattern: t.pattern,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }) : t._e(), t._v(" "), "password" === t.type ? i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: t.inputStyle,
            attrs: {
              id: "vux-x-input-" + t.uuid,
              maxlength: t.max,
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              type: "password",
              name: t.name,
              pattern: t.pattern,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }) : t._e(), t._v(" "), "tel" === t.type ? i("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: t.currentValue,
              expression: "currentValue"
            }],
            ref: "input",
            staticClass: "weui-input",
            style: t.inputStyle,
            attrs: {
              id: "vux-x-input-" + t.uuid,
              maxlength: t.max,
              autocomplete: t.autocomplete,
              autocapitalize: t.autocapitalize,
              autocorrect: t.autocorrect,
              spellcheck: t.spellcheck,
              type: "tel",
              name: t.name,
              pattern: t.pattern,
              placeholder: t.placeholder,
              readonly: t.readonly,
              disabled: t.disabled
            },
            domProps: {value: t.currentValue},
            on: {
              focus: t.focusHandler, blur: t.onBlur, keyup: t.onKeyUp, input: function (e) {
                e.target.composing || (t.currentValue = e.target.value)
              }
            }
          }) : t._e()]), t._v(" "), i("div", {staticClass: "weui-cell__ft"}, [i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.hasRightFullHeightSlot && !t.equalWith && t.showClear && "" !== t.currentValue && !t.readonly && !t.disabled && t.isFocus,
              expression: "!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"
            }], attrs: {type: "clear"}, nativeOn: {
              click: function (e) {
                return t.clear(e)
              }
            }
          }), t._v(" "), i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.showWarn,
              expression: "showWarn"
            }],
            staticClass: "vux-input-icon",
            attrs: {type: "warn", title: t.valid ? "" : t.firstError},
            nativeOn: {
              click: function (e) {
                return t.onClickErrorIcon(e)
              }
            }
          }), t._v(" "), !t.novalidate && t.hasLengthEqual && t.dirty && t.equalWith && !t.valid ? i("icon", {
            staticClass: "vux-input-icon",
            attrs: {type: "warn"},
            nativeOn: {
              click: function (e) {
                return t.onClickErrorIcon(e)
              }
            }
          }) : t._e(), t._v(" "), i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !t.novalidate && t.equalWith && t.equalWith === t.currentValue && t.valid,
              expression: "!novalidate && equalWith && equalWith === currentValue && valid"
            }], attrs: {type: "success"}
          }), t._v(" "), i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.novalidate && "success" === t.iconType,
              expression: "novalidate && iconType === 'success'"
            }], staticClass: "vux-input-icon", attrs: {type: "success"}
          }), t._v(" "), i("icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.novalidate && "error" === t.iconType,
              expression: "novalidate && iconType === 'error'"
            }], staticClass: "vux-input-icon", attrs: {type: "warn"}
          }), t._v(" "), t._t("right"), t._v(" "), t.hasRightFullHeightSlot ? i("div", {staticClass: "vux-x-input-right-full"}, [t._t("right-full-height")], 2) : t._e()], 2), t._v(" "), i("toast", {
            attrs: {
              type: "text",
              width: "auto",
              time: 600
            }, model: {
              value: t.showErrorToast, callback: function (e) {
                t.showErrorToast = e
              }, expression: "showErrorToast"
            }
          }, [t._v(t._s(t.firstError))])], 1)
        }, staticRenderFns: []
      };
    var Ii = i("VU/8")($i, Ti, !1, function (t) {
      i("7feK")
    }, null, null).exports, Di = (f()({}, Object(x.b)(["userId"]), {
      curTime: function () {
        return Object(R.a)(new Date, "HH:mm:ss")
      }, mostAmount: function () {
        return Math.floor(this.accountInfo.balance / this.productDetail.bankSellp)
      }, value: function () {
        return 0 == this.operation ? (this.input * this.productDetail.bankSellp).toFixed(4) : (this.input * this.productDetail.bankBuyp).toFixed(4)
      }
    }), {
      components: {NavBar: Ne, Group: Q, Cell: _i, XInput: Ii, XNumber: vt}, data: function () {
        return {
          operation: 1,
          productDetail: {
            productId: 1,
            productName: "白金啊啊啊啊啊啊啊啊啊啊",
            bankBuyp: 200.8927,
            bankSellp: 203.2198,
            startSell: 200.8922,
            startBuy: 203.8922,
            endSell: 200.8922,
            endBuy: 203.8922
          },
          accountInfo: {balance: 1e4, amount: 1e3},
          input: 1
        }
      }, created: function () {
        var t = this;
        this.operation = this.$route.params.operation, this.productDetail.productId = this.$route.params.productId, this.getProductAccount(), Ge(this.productDetail.productId).then(function (e) {
          t.productDetail = e
        })
      }, computed: f()({}, Object(x.b)(["userId"]), {
        curTime: function () {
          return Object(R.a)(new Date, "HH:mm:ss")
        }, mostAmount: function () {
          return Math.floor(this.accountInfo.balance / this.productDetail.bankSellp)
        }, value: function () {
          return 0 == this.operation ? (this.input * this.productDetail.bankSellp).toFixed(4) : (this.input * this.productDetail.bankBuyp).toFixed(4)
        }
      }), methods: {
        submit: function () {
          0 == this.operation ? this.input > this.mostAmount ? this.$vux.alert.show({
            title: "失败",
            content: "输入数量不能大于可买数量",
            onShow: function () {
            },
            onHide: function () {
            }
          }) : this.postBuyProduct() : this.input > this.accountInfo.amount ? this.$vux.alert.show({
            title: "失败",
            content: "输入数量不能大于持仓数量",
            onShow: function () {
            },
            onHide: function () {
            }
          }) : this.postSellProduct()
        }, getProductAccount: function () {
          var t = this;
          Ze(this.userId, this.productDetail.productId).then(function (e) {
            t.accountInfo = e
          })
        }, postSellProduct: function () {
          var t = this;
          Qe({
            userId: this.userId,
            productId: this.productDetail.productId,
            amount: this.input,
            lockPrice: this.productDetail.bankBuyp
          }).then(function (e) {
            if (0 == e.code) {
              var i = t;
              t.$vux.alert.show({
                title: "成功", content: "交易成功", onShow: function () {
                }, onHide: function () {
                  console.log(i.$router), i.$router.go(-1)
                }
              })
            } else t.$vux.alert.show({
              title: "失败", content: e.data, onShow: function () {
              }, onHide: function () {
              }
            })
          })
        }, postBuyProduct: function () {
          var t = this;
          Je({
            userId: this.userId,
            productId: this.productDetail.productId,
            amount: this.input,
            lockPrice: this.productDetail.bankSellp
          }).then(function (e) {
            if (0 == e.code) {
              var i = t;
              t.$vux.alert.show({
                title: "成功", content: "交易成功", onShow: function () {
                }, onHide: function () {
                  console.log(i.$router), i.$router.go(-1)
                }
              })
            } else t.$vux.alert.show({
              title: "失败", content: e.data, onShow: function () {
              }, onHide: function () {
              }
            })
          })
        }
      }
    }), Vi = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {attrs: {id: "transaction"}}, [i("nav-bar", {
          attrs: {
            color: "red",
            title: 0 == t.operation ? "买入交易" : "卖出交易"
          }
        }), t._v(" "), i("div", {staticClass: "wrapper"}, [i("div", {staticClass: "top"}, [i("div", {staticClass: "name"}, [t._v(t._s(t.productDetail.productName))]), t._v(" "), i("div", {staticClass: "p"}, [i("span", {staticClass: "price"}, [t._v(t._s(0 == t.operation ? t.productDetail.bankSellp.toFixed(4) : t.productDetail.bankBuyp.toFixed(4)))]), t._v(" "), i("span", {staticClass: "time"}, [t._v(t._s(t.curTime))])])]), t._v(" "), i("div", {staticClass: "middle"}, [i("group", [i("cell", {
          attrs: {
            title: "账户余额",
            value: t.accountInfo.balance
          }
        }), t._v(" "), i("cell", {
          attrs: {
            title: "当前持仓",
            value: t.accountInfo.amount
          }
        }), t._v(" "), 0 == t.operation ? i("cell", {
          attrs: {
            title: "最多可买数量",
            value: t.mostAmount
          }
        }) : t._e()], 1), t._v(" "), i("group", [i("x-number", {
          attrs: {
            title: "交易数量",
            width: "100px",
            min: 1,
            fillable: ""
          }, model: {
            value: t.input, callback: function (e) {
              t.input = e
            }, expression: "input"
          }
        }), t._v(" "), i("cell", {
          attrs: {
            title: "市值",
            value: t.value
          }
        })], 1)], 1), t._v(" "), i("div", {
          staticClass: "btn", on: {
            click: function (e) {
              t.submit()
            }
          }
        }, [t._v("确认")])])], 1)
      }, staticRenderFns: []
    };
    var Fi = i("VU/8")(Di, Vi, !1, function (t) {
      i("iDDo")
    }, "data-v-07ba0fba", null).exports, Ni = {
      name: "account-info", data: function () {
        return {
          userInfo: this.$route.query,
          accountInfo: {
            cardId: 1,
            balance: 323,
            rate: .3231,
            accounts: [{productId: 323, productName: "人民币账户白金", amount: 323}, {
              productId: 323,
              productName: "人民币账户白金",
              amount: 323
            }, {productId: 323, productName: "人民币账户白金", amount: 323}, {
              productId: 323,
              productName: "人民币账户白金",
              amount: 323
            }, {productId: 323, productName: "人民币账户白金", amount: 323}]
          }
        }
      }, components: {NavBar: Ne}, methods: {
        getAccounts: function () {
          var t = this;
          console.log("get"), ti(this.userInfo.userId).then(function (e) {
            t.accountInfo = e
          })
        }, toProduct: function (t) {
          this.$router.push({path: "/battle/productdetail", query: {obj: this.accountInfo.accounts[t].productId}})
        }
      }, created: function () {
        this.getAccounts()
      }
    }, Ri = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("keep-alive", [i("div", {attrs: {id: "account-info"}}, [i("nav-bar", {
          attrs: {
            color: "red",
            title: "持仓情况"
          }
        }), t._v(" "), i("div", {staticClass: "wrapper"}, [i("div", {staticClass: "user"}, [i("div", {staticClass: "name"}, [t._v(t._s(t.userInfo.name))]), t._v(" "), i("div", {staticClass: "data"}, [i("p", {staticClass: "balance"}, [i("span", {staticClass: "title"}, [t._v("账户余额")]), t._v(" "), i("span", {staticClass: "num"}, [t._v(t._s(t.accountInfo.balance))])]), t._v(" "), i("p", {staticClass: "rate"}, [i("span", {staticClass: "title"}, [t._v("收益率")]), t._v(" "), i("span", {staticClass: "num"}, [t._v(t._s((100 * t.accountInfo.rate).toFixed(2)) + "%")])])])]), t._v(" "), i("div", {staticClass: "table"}, [i("div", {staticClass: "head"}, [i("span", [t._v("产品")]), t._v(" "), i("span", [t._v("持仓量")])]), t._v(" "), i("div", {staticClass: "body"}, [t._l(t.accountInfo.accounts, function (e, n) {
          return i("div", {
            staticClass: "item", on: {
              click: function (e) {
                t.toProduct(n)
              }
            }
          }, [i("span", [t._v(t._s(e.productName))]), t._v(" "), i("span", [t._v(t._s(e.amount))])])
        }), t._v(" "), 0 == t.accountInfo.accounts.length ? i("div", {staticClass: "no-record"}, [t._v("暂无持仓")]) : t._e()], 2)])])], 1)])
      }, staticRenderFns: []
    };
    var Pi = i("VU/8")(Ni, Ri, !1, function (t) {
      i("5Rj2")
    }, "data-v-582ed7ac", null).exports;
    n.a.use(u.a);
    var Hi = new u.a({
      routes: [{path: "/", redirect: "/home"}, {
        path: "/home",
        name: "Home",
        component: h,
        redirect: "/home/home",
        meta: {index: 0},
        children: [{
          path: "personalbattle",
          name: "personalBattle",
          component: Kt,
          meta: {index: 1, transform: "battle"}
        }, {path: "home", name: "Home", component: ie, meta: {index: 0, transform: "home"}}, {
          path: "expertDetail",
          name: "expertDetail",
          component: _e,
          meta: {index: 1}
        }, {path: "rule", name: "rule", component: me, meta: {index: 1}}]
      }, {
        path: "/battlehall",
        name: "BattleHall",
        component: he,
        children: [{path: "battlesetting", name: "BattleSetting", component: $t}]
      }, {
        path: "/battle",
        name: "BattleIndex",
        component: Ye,
        redirect: "/battle/battle",
        meta: {index: 0},
        children: [{path: "battle", name: "Battle", component: ui, meta: {index: 0}}, {
          path: "productdetail",
          name: "ProductDetail",
          component: pi,
          meta: {index: 1}
        }, {path: "accountinfo", name: "AccountInfo", component: Pi, meta: {index: 1}}, {
          path: "transaction",
          name: "transaction",
          component: Fi,
          meta: {index: 2}
        }]
      }, {
        path: "/my",
        name: "My",
        component: we,
        redirect: "/my/menu",
        meta: {index: 0},
        children: [{path: "message", name: "MyMessage", component: De, meta: {index: 1}}, {
          path: "menu",
          name: "menu",
          component: Le,
          meta: {index: 0}
        }, {path: "battles", name: "MyBattles", component: He, meta: {index: 1}}, {
          path: "focus",
          name: "MyFocus",
          component: je,
          meta: {index: 1}
        }]
      }]
    }), Oi = i("63CM");
    n.a.directive("transfer-dom", Oi.a), n.a.config.productionTip = !1, new n.a({
      el: "#app",
      router: Hi,
      store: E,
      components: {App: c},
      template: "<App/>",
      mounted: function () {
      }
    })
  }, NMCO: function (t, e) {
  }, NhnN: function (t, e) {
  }, NlUi: function (t, e) {
  }, OPbj: function (t, e) {
  }, PSGb: function (t, e) {
  }, TEJr: function (t, e) {
  }, TlZt: function (t, e) {
  }, UoHo: function (t, e) {
  }, VASZ: function (t, e) {
  }, VNHH: function (t, e) {
  }, aRsN: function (t, e) {
  }, cgYH: function (t, e, i) {
    t.exports = i.p + "static/img/eBuyPoster.50360a3.jpg"
  }, "g/W3": function (t, e) {
  }, gRJq: function (t, e) {
  }, h1S5: function (t, e) {
  }, i6hi: function (t, e) {
  }, iDDo: function (t, e) {
  }, iPux: function (t, e) {
  }, mdm3: function (t, e) {
  }, mzja: function (t, e, i) {
    "use strict";
    var n = i("/kga"), a = (n.a, Boolean, String, String, String, Boolean, String, String, Number, String, {
      name: "alert",
      components: {XDialog: n.a},
      created: function () {
        void 0 !== this.value && (this.showValue = this.value)
      },
      props: {
        value: Boolean,
        title: String,
        content: String,
        buttonText: String,
        hideOnBlur: {type: Boolean, default: !1},
        maskTransition: {type: String, default: "vux-mask"},
        dialogTransition: {type: String, default: "vux-dialog"},
        maskZIndex: [Number, String]
      },
      data: function () {
        return {showValue: !1}
      },
      methods: {
        _onHide: function () {
          this.showValue = !1
        }
      },
      watch: {
        value: function (t) {
          this.showValue = t
        }, showValue: function (t) {
          this.$emit("input", t)
        }
      }
    }), s = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "vux-alert"}, [i("x-dialog", {
          attrs: {
            "mask-transition": t.maskTransition,
            "dialog-transition": t.dialogTransition,
            "hide-on-blur": t.hideOnBlur,
            "mask-z-index": t.maskZIndex
          }, on: {
            "on-hide": function (e) {
              t.$emit("on-hide")
            }, "on-show": function (e) {
              t.$emit("on-show")
            }
          }, model: {
            value: t.showValue, callback: function (e) {
              t.showValue = e
            }, expression: "showValue"
          }
        }, [i("div", {staticClass: "weui-dialog__hd"}, [i("strong", {staticClass: "weui-dialog__title"}, [t._v(t._s(t.title))])]), t._v(" "), i("div", {staticClass: "weui-dialog__bd"}, [t._t("default", [i("div", {domProps: {innerHTML: t._s(t.content)}})])], 2), t._v(" "), i("div", {staticClass: "weui-dialog__ft"}, [i("a", {
          staticClass: "weui-dialog__btn weui-dialog__btn_primary",
          attrs: {href: "javascript:;"},
          on: {click: t._onHide}
        }, [t._v(t._s(t.buttonText || "确定"))])])])], 1)
      }, staticRenderFns: []
    };
    var r = i("VU/8")(a, s, !1, function (t) {
      i("NlUi")
    }, null, null);
    e.a = r.exports
  }, n6RF: function (t, e) {
  }, nXGe: function (t, e) {
  }, pYmz: function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = "undefined" != typeof window;
    n && (window.Swiper = i("gsqX"));
    Object, Boolean;
    var a = "undefined" != typeof window;
    a && (window.Swiper = i("gsqX"));
    var s = {
      name: "swiper", props: {
        options: {
          type: Object, default: function () {
            return {autoplay: 3500}
          }
        }, notNextTick: {
          type: Boolean, default: function () {
            return !1
          }
        }
      }, data: function () {
        return {defaultSwiperClasses: {wrapperClass: "swiper-wrapper"}}
      }, ready: function () {
        !this.swiper && a && (this.swiper = new Swiper(this.$el, this.options))
      }, mounted: function () {
        var t = this, e = function () {
          if (!t.swiper && a) {
            delete t.options.notNextTick;
            var e = !1;
            for (var i in t.defaultSwiperClasses) t.defaultSwiperClasses.hasOwnProperty(i) && t.options[i] && (e = !0, t.defaultSwiperClasses[i] = t.options[i]);
            var n = function () {
              t.swiper = new Swiper(t.$el, t.options)
            };
            e ? t.$nextTick(n) : n()
          }
        }(this.options.notNextTick || this.notNextTick) ? e() : this.$nextTick(e)
      }, updated: function () {
        this.swiper && this.swiper.update()
      }, beforeDestroy: function () {
        this.swiper && (this.swiper.destroy(), delete this.swiper)
      }
    }, r = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "swiper-container"}, [t._t("parallax-bg"), t._v(" "), i("div", {class: t.defaultSwiperClasses.wrapperClass}, [t._t("default")], 2), t._v(" "), t._t("pagination"), t._v(" "), t._t("button-prev"), t._v(" "), t._t("button-next"), t._v(" "), t._t("scrollbar")], 2)
      }, staticRenderFns: []
    }, o = i("VU/8")(s, r, !1, null, null, null);
    e.default = o.exports
  }, rLAy: function (t, e, i) {
    "use strict";
    var n = i("xNvf"), a = (n.a, Boolean, Number, String, String, String, Boolean, String, String, {
      name: "toast",
      mixins: [n.a],
      props: {
        value: Boolean,
        time: {type: Number, default: 2e3},
        type: {type: String, default: "success"},
        transition: String,
        width: {type: String, default: "7.6em"},
        isShowMask: {type: Boolean, default: !1},
        text: String,
        position: String
      },
      data: function () {
        return {show: !1}
      },
      created: function () {
        this.value && (this.show = !0)
      },
      computed: {
        currentTransition: function () {
          return this.transition ? this.transition : "top" === this.position ? "vux-slide-from-top" : "bottom" === this.position ? "vux-slide-from-bottom" : "vux-fade"
        }, toastClass: function () {
          return {
            "weui-toast_forbidden": "warn" === this.type,
            "weui-toast_cancel": "cancel" === this.type,
            "weui-toast_success": "success" === this.type,
            "weui-toast_text": "text" === this.type,
            "vux-toast-top": "top" === this.position,
            "vux-toast-bottom": "bottom" === this.position,
            "vux-toast-middle": "middle" === this.position
          }
        }, style: function () {
          if ("text" === this.type && "auto" === this.width) return {padding: "10px"}
        }
      },
      watch: {
        show: function (t) {
          var e = this;
          t && (this.$emit("input", !0), this.$emit("on-show"), this.fixSafariOverflowScrolling("auto"), clearTimeout(this.timeout), this.timeout = setTimeout(function () {
            e.show = !1, e.$emit("input", !1), e.$emit("on-hide"), e.fixSafariOverflowScrolling("touch")
          }, this.time))
        }, value: function (t) {
          this.show = t
        }
      }
    }), s = {
      render: function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", {staticClass: "vux-toast"}, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowMask && t.show,
            expression: "isShowMask && show"
          }], staticClass: "weui-mask_transparent"
        }), t._v(" "), i("transition", {attrs: {name: t.currentTransition}}, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.show,
            expression: "show"
          }], staticClass: "weui-toast", class: t.toastClass, style: {width: t.width}
        }, [i("i", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "text" !== t.type,
            expression: "type !== 'text'"
          }], staticClass: "weui-icon-success-no-circle weui-icon_toast"
        }), t._v(" "), t.text ? i("p", {
          staticClass: "weui-toast__content",
          style: t.style,
          domProps: {innerHTML: t._s(t.text)}
        }) : i("p", {staticClass: "weui-toast__content", style: t.style}, [t._t("default")], 2)])])], 1)
      }, staticRenderFns: []
    };
    var r = i("VU/8")(a, s, !1, function (t) {
      i("JJVs")
    }, null, null);
    e.a = r.exports
  }, tzbi: function (t, e) {
  }, uqU7: function (t, e) {
  }, v2ns: function (t, e) {
  }, vlRK: function (t, e) {
  }, wV29: function (t, e) {
  }, xgAP: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.8345ce55e0128fc7c731.js.map