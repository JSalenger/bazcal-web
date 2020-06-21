webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");








var _this = undefined,
    _jsxFileName = "C:\\Users\\rsale\\Documents\\SSB\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 // Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

var getWidth = function getWidth() {
  var isSSR = false;
  return isSSR ? semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Responsive"].onlyTablet.minWidth : window.innerWidth;
};
/* eslint-disable react/no-multi-comp */

/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


var HomepageHeading = function HomepageHeading(_ref) {
  _s();

  var mobile = _ref.mobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      newId = _useState[0],
      setNewId = _useState[1];

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h1",
    content: "Money",
    inverted: true,
    style: {
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile ? '1.5em' : '3em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h2",
    content: "Make a lot ( so much ) of it.",
    inverted: true,
    style: {
      fontSize: mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile ? '0.5em' : '1.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      primary: true,
      size: "huge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, "Get Started", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      name: "right arrow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: function onChange(e) {
      return setNewId(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/personal/' + newId);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Gimme Money"))));
};

_s(HomepageHeading, "kfMYGkCC2I8bGVURjVmL+vWaZzw=");

_c = HomepageHeading;
HomepageHeading.propTypes = {
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

var DesktopContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopContainer, _Component);

  var _super = _createSuper(DesktopContainer);

  function DesktopContainer() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesktopContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "newId", {
      sampleState: 'hello world'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "hideFixedMenu", function () {
      return _this2.setState({
        fixed: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "showFixedMenu", function () {
      return _this2.setState({
        fixed: true
      });
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesktopContainer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var setNewId = function setNewId(sampleState) {
        return _this3.setState({
          sampleState: sampleState
        });
      };

      var children = this.props.children;
      var fixed = this.state.fixed;
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Responsive"], {
        getWidth: getWidth,
        minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Responsive"].onlyTablet.minWidth,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Visibility"], {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 700,
          padding: '1em 0em'
        },
        vertical: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"], {
        fixed: fixed ? 'top' : null,
        inverted: !fixed,
        pointing: !fixed,
        secondary: !fixed,
        size: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        as: "a",
        active: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 17
        }
      }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
          as: "a",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }
        }, "Adivsed Investment"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 17
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 19
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 23
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 25
        }
      }, __jsx("label", {
        style: {
          fontSize: '1.33em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 27
        }
      }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "number",
        placeholder: "Enter Your Coins",
        onChange: function onChange(e) {
          return setNewId(e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 27
        }
      }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 19
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "submit",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/personal/' + newId);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }
      }, "Gimme Money"))))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Transition"].Group, {
        animation: "fly down",
        duration: "500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, visible && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: "arrow down",
        size: "massive",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 17
        }
      })))));
    }
  }]);

  return DesktopContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

DesktopContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

var MobileContainer = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileContainer, _Component2);

  var _super2 = _createSuper(MobileContainer);

  function MobileContainer() {
    var _this4;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileContainer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this4 = _super2.call.apply(_super2, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "handleSidebarHide", function () {
      return _this4.setState({
        sidebarOpened: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "handleToggle", function () {
      return _this4.setState({
        sidebarOpened: true
      });
    });

    return _this4;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileContainer, [{
    key: "render",

    /*
      <Responsive
          as={Sidebar.Pushable}
          getWidth={getWidth}
          maxWidth={Responsive.onlyMobile.maxWidth}
        >
          <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Personal</Menu.Item>
          </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
                <HomepageHeading mobile />
            </Segment>
              {children}
          </Sidebar.Pusher>
        </Responsive>
      */
    value: function render() {
      var children = this.props.children;
      var sidebarOpened = this.state.sidebarOpened;
      var fixed = this.state.fixed;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        inverted: true,
        textAlign: "center",
        style: {
          minHeight: 350,
          padding: '1em 0em'
        },
        vertical: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 9
        }
      }, __jsx(HomepageHeading, {
        mobile: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }
      })), children);
    }
  }]);

  return MobileContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

MobileContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

var ResponsiveContainer = function ResponsiveContainer(_ref2) {
  var children = _ref2.children;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 3
    }
  }, __jsx(DesktopContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }, children), __jsx(MobileContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 5
    }
  }, children));
};

_c2 = ResponsiveContainer;
ResponsiveContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

var HomepageLayout = function HomepageLayout() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      newId = _useState2[0],
      setNewId = _useState2[1];

  return __jsx(ResponsiveContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, "Bazcal"), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
    style: {
      padding: '0em'
    },
    vertical: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, "\"best thing ever\""), __jsx("div", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, "Simon"), " | literally simon")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 15
    }
  }, "\"very cool\""), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, "literally everyone")))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  }, "Bazaar Bots Make Big Money"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 11
    }
  }, "Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 15
      }
    }, "Get My Personal Strategy"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: function onChange(e) {
      return setNewId(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/personal/' + newId);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 15
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, "Case Studies")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, "Did I mention how much money you'll make?"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 11
    }
  }, "You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 15
      }
    }, "I'm Interested, Go on..."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: function onChange(e) {
      return setNewId(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/personal/' + newId);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  }, "Gimme Money"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: '5em 0em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Actual Links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 19
    }
  }, "Coming Soon ( Coming Soon )j"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 19
    }
  }, "Market Crash ( Coming Soon )"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
      as: "a",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 23
      }
    }, "Advised Investment"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 27
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 29
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: function onChange(e) {
      return setNewId(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 29
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/personal/' + newId);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 23
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 19
    }
  }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 19
    }
  }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 19
    }
  }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 19
    }
  }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h4",
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 17
    }
  }, "\u2764\uFE0F"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 17
    }
  }, "Website built with \u2764\uFE0F by ", __jsx("a", {
    href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 44
    }
  }, "ForgingMetal"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 123
    }
  }), "Using Bazcal by Vent and Nert")))))));
};
/*

            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>

*/

/*
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
*/


_s2(HomepageLayout, "kfMYGkCC2I8bGVURjVmL+vWaZzw=");

_c3 = HomepageLayout;
/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

var _c, _c2, _c3;

$RefreshReg$(_c, "HomepageHeading");
$RefreshReg$(_c2, "ResponsiveContainer");
$RefreshReg$(_c3, "HomepageLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJ1c2VTdGF0ZSIsIm5ld0lkIiwic2V0TmV3SWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJ2aXNpYmxlIiwiQ29tcG9uZW50Iiwibm9kZSIsIk1vYmlsZUNvbnRhaW5lciIsInNpZGViYXJPcGVuZWQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiSG9tZXBhZ2VMYXlvdXQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNQyxLQUFLLFFBQVg7QUFFQSxTQUFPQSxLQUFLLEdBQUdDLDREQUFVLENBQUNDLFVBQVgsQ0FBc0JDLFFBQXpCLEdBQW9DQyxNQUFNLENBQUNDLFVBQXZEO0FBQ0QsQ0FKRDtBQU1BOztBQUNBOzs7OztBQUdBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFB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XGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTA4MTE5MmUyNzY1MzliOWFjOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBHcmlkLFxyXG4gIEhlYWRlcixcclxuICBJY29uLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgTW9kYWwsXHJcbiAgTGlzdCxcclxuICBNZW51LFxyXG4gIFJlc3BvbnNpdmUsXHJcbiAgU2VnbWVudCxcclxuICBTaWRlYmFyLFxyXG4gIFZpc2liaWxpdHksXHJcbiAgVHJhbnNpdGlvblxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5cclxuLy8gSGVhZHMgdXAhXHJcbi8vIFdlIHVzaW5nIFJlYWN0IFN0YXRpYyB0byBwcmVyZW5kZXIgb3VyIGRvY3Mgd2l0aCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIHRoaXMgaXMgYSBxdWl0ZSBzaW1wbGUgc29sdXRpb24uXHJcbi8vIEZvciBtb3JlIGFkdmFuY2VkIHVzYWdlIHBsZWFzZSBjaGVjayBSZXNwb25zaXZlIGRvY3MgdW5kZXIgdGhlIFwiVXNhZ2VcIiBzZWN0aW9uLlxyXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcclxuICBjb25zdCBpc1NTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG4gIHJldHVybiBpc1NTUiA/IFJlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuLyogSGVhZHMgdXAhIEhvbWVwYWdlSGVhZGluZyB1c2VzIGlubGluZSBzdHlsaW5nLCBob3dldmVyIGl0J3Mgbm90IHRoZSBiZXN0IHByYWN0aWNlLiBVc2UgQ1NTIG9yIHN0eWxlZCBjb21wb25lbnRzIGZvclxyXG4gKiBzdWNoIHRoaW5ncy5cclxuICovXHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZyA9ICh7IG1vYmlsZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01vbmV5J1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcxLjVlbScgOiAnM2VtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01ha2UgYSBsb3QgKCBzbyBtdWNoICkgb2YgaXQuJ1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMS41ZW0nIDogJzEuN2VtJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzEuNWVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDxNb2RhbCBcclxuICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT0naHVnZSc+XHJcbiAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgPEljb24gbmFtZT0ncmlnaHQgYXJyb3cnIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxuXHJcbiAgXHJcbn1cclxuXHJcbkhvbWVwYWdlSGVhZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuLyogSGVhZHMgdXAhXHJcbiAqIE5laXRoZXIgU2VtYW50aWMgVUkgbm9yIFNlbWFudGljIFVJIFJlYWN0IG9mZmVyIGEgcmVzcG9uc2l2ZSBuYXZiYXIsIGhvd2V2ZXIsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBlYXNpbHkuXHJcbiAqIEl0IGNhbiBiZSBtb3JlIGNvbXBsaWNhdGVkLCBidXQgeW91IGNhbiBjcmVhdGUgcmVhbGx5IGZsZXhpYmxlIG1hcmt1cC5cclxuICovXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge31cclxuICBuZXdJZCA9IHtzYW1wbGVTdGF0ZTogJ2hlbGxvIHdvcmxkJ307XHJcblxyXG5cclxuICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxyXG4gIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNldE5ld0lkID0gc2FtcGxlU3RhdGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhbXBsZVN0YXRlIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXNwb25zaXZlIGdldFdpZHRoPXtnZXRXaWR0aH0gbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XHJcbiAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgZml4ZWQ9e2ZpeGVkID8gJ3RvcCcgOiBudWxsfVxyXG4gICAgICAgICAgICAgIGludmVydGVkPXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgcG9pbnRpbmc9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnk9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz5BZGl2c2VkIEludmVzdG1lbnQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkdyb3VwIGFuaW1hdGlvbj0nZmx5IGRvd24nIGR1cmF0aW9uPSc1MDAnPlxyXG4gICAgICAgICAgICAgIHt2aXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2Fycm93IGRvd24nIHNpemU9J21hc3NpdmUnIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkdyb3VwPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eT5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvUmVzcG9uc2l2ZT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkRlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9XHJcblxyXG4gIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcblxyXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pXHJcblxyXG4gIC8qXHJcblxyXG4gIDxSZXNwb25zaXZlXHJcbiAgICAgICAgYXM9e1NpZGViYXIuUHVzaGFibGV9XHJcbiAgICAgICAgZ2V0V2lkdGg9e2dldFdpZHRofVxyXG4gICAgICAgIG1heFdpZHRoPXtSZXNwb25zaXZlLm9ubHlNb2JpbGUubWF4V2lkdGh9XHJcbiAgICAgID5cclxuICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgYXM9e01lbnV9XHJcbiAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZVNpZGViYXJIaWRlfVxyXG4gICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPlBlcnNvbmFsPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TaWRlYmFyPlxyXG5cclxuICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDM1MCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIG1vYmlsZSAvPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxyXG4gICAgICA8L1Jlc3BvbnNpdmU+XHJcblxyXG4gICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMzUwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDxIb21lcGFnZUhlYWRpbmcgbW9iaWxlLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5Nb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgIDxNb2JpbGVDb250YWluZXI+e2NoaWxkcmVufTwvTW9iaWxlQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5SZXNwb25zaXZlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkJhemNhbDwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzBlbScgfX0gdmVydGljYWw+XHJcbiAgICAgICAgPEdyaWQgY2VsbGVkPSdpbnRlcm5hbGx5JyBjb2x1bW5zPSdlcXVhbCcgc3RhY2thYmxlPlxyXG4gICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc1ZW0nLCBwYWRkaW5nVG9wOiAnNWVtJyB9fT5cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgXCJiZXN0IHRoaW5nIGV2ZXJcIlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TaW1vbjwvYj4gfCBsaXRlcmFsbHkgc2ltb25cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc1ZW0nLCBwYWRkaW5nVG9wOiAnNWVtJyB9fT5cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgXCJ2ZXJ5IGNvb2xcIlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5saXRlcmFsbHkgZXZlcnlvbmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICBCYXphYXIgQm90cyBNYWtlIEJpZyBNb25leVxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgIEdvdCBib3JlZCBvZiBJUkwgdHJhZGluZz8gV2VsbCwgdGhpcyBkb2Vzbid0IG1ha2UgYXMgbXVjaCBtb25leSwgc29ycnksIGJ1dCBpdHMgY2xvc2UhIFZlcnkgY2xvc2UgaW5kZWVkLiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIEdldCBNeSBQZXJzb25hbCBTdHJhdGVneVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlclxyXG4gICAgICAgICAgICBhcz0naDQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xyXG4gICAgICAgICAgICBob3Jpem9udGFsXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzNlbSAwZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5DYXNlIFN0dWRpZXM8L2E+XHJcbiAgICAgICAgICA8L0RpdmlkZXI+XHJcblxyXG4gICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgRGlkIEkgbWVudGlvbiBob3cgbXVjaCBtb25leSB5b3UnbGwgbWFrZT9cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICBZb3Ugd2lsbCBtYWtlIHNvIG11Y2ggbW9uZXksIHNvIG11Y2gsIGEgbG90LiBUaGUgYW1vdW50IG9mIG1vbmV5IHlvdSdsbCBtYWtlIGlzIHZlcnkgYmlnLiBJIGFzc3VyZSB5b3UgdGhhdCBpdCB3aWxsIGJlIHZlcnkgYmlnLiBJJ20gZGVmaW5pdGVseSBub3Qgd3JpdGluZyB0aGlzIGp1c3QgdG8gZmlsbCBzcGFjZS5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICBJJ20gSW50ZXJlc3RlZCwgR28gb24uLi5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdmVydGljYWwgc3R5bGU9e3sgcGFkZGluZzogJzVlbSAwZW0nIH19PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nQWN0dWFsIExpbmtzJyAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+Q29taW5nIFNvb24gKCBDb21pbmcgU29vbiApajwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5NYXJrZXQgQ3Jhc2ggKCBDb21pbmcgU29vbiApPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5BZHZpc2VkIEludmVzdG1lbnQ8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnIGhyZWY9XCIvXCI+SG9tZTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdTZXJ2aWNlcycgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkJhbmFuYSBQcmUtT3JkZXI8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+RE5BIEZBUTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Ib3cgVG8gQWNjZXNzPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkZhdm9yaXRlIFgtTWVuPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDQnIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAg4p2k77iPXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBXZWJzaXRlIGJ1aWx0IHdpdGgg4p2k77iPIGJ5IDxhIGhyZWY9XCJodHRwczovL3BsYW5ja2UuaW8vaHlwaXhlbC9wbGF5ZXIvc3RhdHMvRm9yZ2luZ01ldGFsXCI+Rm9yZ2luZ01ldGFsPC9hPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICBVc2luZyBCYXpjYWwgYnkgVmVudCBhbmQgTmVydFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbi8qXHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHBvaW50aW5nIHNlY29uZGFyeSBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nc2lkZWJhcicgLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4qL1xyXG5cclxuLypcclxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgSGVscCBDb21wYW5pZXMgYW5kIENvbXBhbmlvbnNcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBjYW4gZ2l2ZSB5b3VyIGNvbXBhbnkgc3VwZXJwb3dlcnMgdG8gZG8gdGhpbmdzIHRoYXQgdGhleSBuZXZlciB0aG91Z2h0IHBvc3NpYmxlLlxyXG4gICAgICAgICAgICAgIExldCB1cyBkZWxpZ2h0IHlvdXIgY3VzdG9tZXJzIGFuZCBlbXBvd2VyIHlvdXIgbmVlZHMuLi4gdGhyb3VnaCBwdXJlIGRhdGEgYW5hbHl0aWNzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgTWFrZSBCYW5hbmFzIFRoYXQgQ2FuIERhbmNlXHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgWWVzIHRoYXQncyByaWdodCwgeW91IHRob3VnaHQgaXQgd2FzIHRoZSBzdHVmZiBvZiBkcmVhbXMsIGJ1dCBldmVuIGJhbmFuYXMgY2FuIGJlXHJcbiAgICAgICAgICAgICAgYmlvZW5naW5lZXJlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgYm9yZGVyZWQgcm91bmRlZCBzaXplPSdsYXJnZScgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS93aGl0ZS1pbWFnZS5wbmcnIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJz5DaGVjayBUaGVtIE91dDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=