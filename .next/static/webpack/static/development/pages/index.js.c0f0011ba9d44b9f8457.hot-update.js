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
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: "arrow down",
        size: "massive",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }))));
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
          lineNumber: 245,
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
          lineNumber: 246,
          columnNumber: 9
        }
      }, __jsx(HomepageHeading, {
        mobile: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
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
      lineNumber: 267,
      columnNumber: 3
    }
  }, __jsx(DesktopContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 5
    }
  }, children), __jsx(MobileContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
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
      lineNumber: 282,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, "Bazcal"), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
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
      lineNumber: 288,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
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
      lineNumber: 291,
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
      lineNumber: 292,
      columnNumber: 15
    }
  }, "\"best thing ever\""), __jsx("div", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
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
      lineNumber: 299,
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
      lineNumber: 300,
      columnNumber: 15
    }
  }, "\"very cool\""), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
      lineNumber: 313,
      columnNumber: 11
    }
  }, "Bazaar Bots Make Big Money"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, "Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 15
      }
    }, "Get My Personal Strategy"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
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
      lineNumber: 331,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
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
      lineNumber: 341,
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
      lineNumber: 346,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 355,
      columnNumber: 11
    }
  }, "Did I mention how much money you'll make?"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, "You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 15
      }
    }, "I'm Interested, Go on..."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
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
      lineNumber: 374,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
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
      lineNumber: 384,
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
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Actual Links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Coming Soon ( Coming Soon )j"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, "Market Crash ( Coming Soon )"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
      as: "a",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 23
      }
    }, "Advised Investment"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 27
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
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
      lineNumber: 409,
      columnNumber: 29
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
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
      lineNumber: 419,
      columnNumber: 23
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h4",
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 17
    }
  }, "\u2764\uFE0F"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, "Website built with \u2764\uFE0F by ", __jsx("a", {
    href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 44
    }
  }, "ForgingMetal"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 123
    }
  }), "Using ", __jsx("a", {
    href: "https://github.com/Wykerd/bazcal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 25
    }
  }, "Bazcal"), " by Vent and Nert")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJ1c2VTdGF0ZSIsIm5ld0lkIiwic2V0TmV3SWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJub2RlIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJIb21lcGFnZUxheW91dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQU1DLEtBQUssUUFBWDtBQUVBLFNBQU9BLEtBQUssR0FBR0MsNERBQVUsQ0FBQ0MsVUFBWCxDQUFzQkMsUUFBekIsR0FBb0NDLE1BQU0sQ0FBQ0MsVUFBdkQ7QUFDRCxDQUpEO0FBTUE7O0FBQ0E7Ozs7O0FBR0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFFWkMsc0RBQVEsQ0FBQyxFQUFELENBRkk7QUFBQSxNQUUvQkMsS0FGK0I7QUFBQSxNQUV4QkMsUUFGd0I7O0FBS3RDLFNBQ0UsTUFBQywyREFBRDtBQUFXLFFBQUksTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFSixNQUFNLEdBQUcsS0FBSCxHQUFXLEtBRHRCO0FBRUxLLGdCQUFVLEVBQUUsUUFGUDtBQUdMQyxrQkFBWSxFQUFFLENBSFQ7QUFJTEMsZUFBUyxFQUFFUCxNQUFNLEdBQUcsT0FBSCxHQUFhO0FBSnpCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBWUUsTUFBQyx3REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsV0FBTyxFQUFDLCtCQUZWO0FBR0UsWUFBUSxNQUhWO0FBSUUsU0FBSyxFQUFFO0FBQ0xJLGNBQVEsRUFBRUosTUFBTSxHQUFHLE9BQUgsR0FBYSxPQUR4QjtBQUVMSyxnQkFBVSxFQUFFLFFBRlA7QUFHTEUsZUFBUyxFQUFFUCxNQUFNLEdBQUcsT0FBSCxHQUFhO0FBSHpCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBeUJFLE1BQUMsdURBQUQ7QUFDRSxXQUFPLEVBQ0wsTUFBQyx3REFBRDtBQUFRLGFBQU8sTUFBZjtBQUFnQixVQUFJLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFFQSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZBLENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sU0FBSyxFQUFFO0FBQUVJLGNBQVEsRUFBRTtBQUFaLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyx1REFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsZUFBVyxFQUFDLGtCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREYsQ0FSRixFQXNCRSxNQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRTtBQUFBLGFBQU1DLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFlVixLQUEzQixDQUFOO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQXRCRixDQXpCRixDQURGO0FBeURELENBOUREOztHQUFNSCxlOztLQUFBQSxlO0FBZ0VOQSxlQUFlLENBQUNjLFNBQWhCLEdBQTRCO0FBQzFCYixRQUFNLEVBQUVjLGlEQUFTLENBQUNDO0FBRFEsQ0FBNUI7QUFJQTs7Ozs7SUFJTUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7aU5BQ0ksRTs7aU5BQ0E7QUFBQ0MsaUJBQVcsRUFBRTtBQUFkLEs7O3lOQUdRO0FBQUEsYUFBTSxPQUFLQyxRQUFMLENBQWM7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBZCxDQUFOO0FBQUEsSzs7eU5BQ0E7QUFBQSxhQUFNLE9BQUtELFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFkLENBQU47QUFBQSxLOzs7Ozs7OzZCQUVQO0FBQUE7O0FBRVAsVUFBTWhCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFjLFdBQVc7QUFBQSxlQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELHFCQUFXLEVBQVhBO0FBQUYsU0FBZCxDQUFKO0FBQUEsT0FBNUI7O0FBRk8sVUFNQ0csUUFORCxHQU1jLEtBQUtDLEtBTm5CLENBTUNELFFBTkQ7QUFBQSxVQU9DRCxLQVBELEdBT1csS0FBS0csS0FQaEIsQ0FPQ0gsS0FQRDtBQVNQLGFBQ0UsTUFBQyw0REFBRDtBQUFZLGdCQUFRLEVBQUUzQixRQUF0QjtBQUFnQyxnQkFBUSxFQUFFRSw0REFBVSxDQUFDQyxVQUFYLENBQXNCQyxRQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRDtBQUNFLFlBQUksRUFBRSxLQURSO0FBRUUsc0JBQWMsRUFBRSxLQUFLMkIsYUFGdkI7QUFHRSw2QkFBcUIsRUFBRSxLQUFLQyxhQUg5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0UsTUFBQyx5REFBRDtBQUNFLGdCQUFRLE1BRFY7QUFFRSxpQkFBUyxFQUFDLFFBRlo7QUFHRSxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRSxHQUFiO0FBQWtCQyxpQkFBTyxFQUFFO0FBQTNCLFNBSFQ7QUFJRSxnQkFBUSxNQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRSxNQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFUCxLQUFLLEdBQUcsS0FBSCxHQUFXLElBRHpCO0FBRUUsZ0JBQVEsRUFBRSxDQUFDQSxLQUZiO0FBR0UsZ0JBQVEsRUFBRSxDQUFDQSxLQUhiO0FBSUUsaUJBQVMsRUFBRSxDQUFDQSxLQUpkO0FBS0UsWUFBSSxFQUFDLE9BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsVUFBRSxFQUFDLEdBQWQ7QUFBa0IsY0FBTSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBS0UsTUFBQyx1REFBRDtBQUNFLGVBQU8sRUFDTCxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHVEQUFELENBQU8sV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8sYUFBSyxFQUFFO0FBQUVmLGtCQUFRLEVBQUU7QUFBWixTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxtQkFBVyxFQUFDLGtCQUZkO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGlCQUFPTCxRQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxTQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGLENBREYsQ0FERixDQUxGLEVBbUJFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFlVixLQUEzQixDQUFOO0FBQUEsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQW5CRixDQUxGLENBUEYsQ0FORixFQTJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBM0NGLEVBNENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1Q0YsRUE2Q0UsTUFBQyxzREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQXdCLFlBQUksRUFBQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN0NGLENBTEYsQ0FERixDQURGO0FBMkREOzs7O0VBNUU0QnlCLCtDOztBQStFL0JYLGdCQUFnQixDQUFDSCxTQUFqQixHQUE2QjtBQUMzQk8sVUFBUSxFQUFFTixpREFBUyxDQUFDYztBQURPLENBQTdCOztJQUlNQyxlOzs7Ozs7Ozs7Ozs7Ozs7O2lOQUNJLEU7OzZOQUVZO0FBQUEsYUFBTSxPQUFLWCxRQUFMLENBQWM7QUFBRVkscUJBQWEsRUFBRTtBQUFqQixPQUFkLENBQU47QUFBQSxLOzt3TkFFTDtBQUFBLGFBQU0sT0FBS1osUUFBTCxDQUFjO0FBQUVZLHFCQUFhLEVBQUU7QUFBakIsT0FBZCxDQUFOO0FBQUEsSzs7Ozs7Ozs7QUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBc0NTO0FBQUEsVUFDQ1YsUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7QUFBQSxVQUVDVSxhQUZELEdBRW1CLEtBQUtSLEtBRnhCLENBRUNRLGFBRkQ7QUFBQSxVQUdDWCxLQUhELEdBR1csS0FBS0csS0FIaEIsQ0FHQ0gsS0FIRDtBQUtQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMseURBQUQ7QUFDRSxnQkFBUSxNQURWO0FBRUUsaUJBQVMsRUFBQyxRQUZaO0FBR0UsYUFBSyxFQUFFO0FBQUVNLG1CQUFTLEVBQUUsR0FBYjtBQUFrQkMsaUJBQU8sRUFBRTtBQUEzQixTQUhUO0FBSUUsZ0JBQVEsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0UsTUFBQyxlQUFEO0FBQWlCLGNBQU0sTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLENBREYsRUFVR04sUUFWSCxDQURGO0FBZUQ7Ozs7RUFqRTJCTywrQzs7QUFvRTlCRSxlQUFlLENBQUNoQixTQUFoQixHQUE0QjtBQUMxQk8sVUFBUSxFQUFFTixpREFBUyxDQUFDYztBQURNLENBQTVCOztBQUlBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxNQUFHWCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CQSxRQUFuQixDQURGLEVBRUUsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0JBLFFBQWxCLENBRkYsQ0FEMEI7QUFBQSxDQUE1Qjs7TUFBTVcsbUI7QUFPTkEsbUJBQW1CLENBQUNsQixTQUFwQixHQUFnQztBQUM5Qk8sVUFBUSxFQUFFTixpREFBUyxDQUFDYztBQURVLENBQWhDOztBQUlBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLG1CQUVEL0Isc0RBQVEsQ0FBQyxFQUFELENBRlA7QUFBQSxNQUVwQkMsS0FGb0I7QUFBQSxNQUViQyxRQUZhOztBQUkzQixTQUNFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLGdFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FERixFQU1FLE1BQUMseURBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRXVCLGFBQU8sRUFBRTtBQUFYLEtBQWhCO0FBQW9DLFlBQVEsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxVQUFNLEVBQUMsWUFBYjtBQUEwQixXQUFPLEVBQUMsT0FBbEM7QUFBMEMsYUFBUyxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBVSxhQUFTLEVBQUMsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFO0FBQUVPLG1CQUFhLEVBQUUsS0FBakI7QUFBd0JDLGdCQUFVLEVBQUU7QUFBcEMsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixTQUFLLEVBQUU7QUFBRTlCLGNBQVEsRUFBRTtBQUFaLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFJRTtBQUFLLFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosdUJBSkYsQ0FERixFQVNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFO0FBQUU2QixtQkFBYSxFQUFFLEtBQWpCO0FBQXdCQyxnQkFBVSxFQUFFO0FBQXBDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsU0FBSyxFQUFFO0FBQUU5QixjQUFRLEVBQUU7QUFBWixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBSUU7QUFBRyxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBSkYsQ0FURixDQURGLENBREYsQ0FORixFQTZCRSxNQUFDLHlEQUFEO0FBQVMsU0FBSyxFQUFFO0FBQUVzQixhQUFPLEVBQUU7QUFBWCxLQUFoQjtBQUF3QyxZQUFRLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsUUFBSSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsU0FBSyxFQUFFO0FBQUV0QixjQUFRLEVBQUU7QUFBWixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBSUU7QUFBRyxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlIQUpGLEVBT0UsTUFBQyx1REFBRDtBQUNFLFdBQU8sRUFDTCxNQUFDLHdEQUFEO0FBQVEsUUFBRSxFQUFDLEdBQVg7QUFBZSxVQUFJLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBTyxXQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFXLEVBQUMsa0JBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxhQUFPTCxRQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLENBREYsQ0FERixDQVBGLEVBcUJFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFO0FBQUEsYUFBTUMsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQWVWLEtBQTNCLENBQU47QUFBQSxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBckJGLENBUEYsRUFrQ0UsTUFBQyx5REFBRDtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsYUFBUyxFQUFDLFFBRlo7QUFHRSxjQUFVLE1BSFo7QUFJRSxTQUFLLEVBQUU7QUFBRWlDLFlBQU0sRUFBRSxTQUFWO0FBQXFCQyxtQkFBYSxFQUFFO0FBQXBDLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixDQWxDRixFQTJDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsU0FBSyxFQUFFO0FBQUVoQyxjQUFRLEVBQUU7QUFBWixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQTNDRixFQThDRTtBQUFHLFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNExBOUNGLEVBa0RFLE1BQUMsdURBQUQ7QUFDRSxXQUFPLEVBQ0wsTUFBQyx3REFBRDtBQUFRLFFBQUUsRUFBQyxHQUFYO0FBQWUsVUFBSSxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sV0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sU0FBSyxFQUFFO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyx1REFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsZUFBVyxFQUFDLGtCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREYsQ0FQRixFQXFCRSxNQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRTtBQUFBLGFBQU1DLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFlVixLQUEzQixDQUFOO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQXJCRixDQWxERixDQURGLENBN0JGLEVBNEdFLE1BQUMseURBQUQ7QUFBUyxZQUFRLE1BQWpCO0FBQWtCLFlBQVEsTUFBMUI7QUFBMkIsU0FBSyxFQUFFO0FBQUV3QixhQUFPLEVBQUU7QUFBWCxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLFdBQU8sTUFBYjtBQUFjLFlBQVEsTUFBdEI7QUFBdUIsYUFBUyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxNQUFoQjtBQUFpQixNQUFFLEVBQUMsSUFBcEI7QUFBeUIsV0FBTyxFQUFDLGNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxZQUFRLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLE1BQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLE1BQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBRkYsRUFHRSxNQUFDLHVEQUFEO0FBQ0UsV0FBTyxFQUNMLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBTyxXQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxTQUFLLEVBQUU7QUFBRXRCLGNBQVEsRUFBRTtBQUFaLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyx1REFBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsZUFBVyxFQUFDLGtCQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsYUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREYsQ0FMRixFQW1CRSxNQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRTtBQUFBLGFBQU1DLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFlVixLQUEzQixDQUFOO0FBQUEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQW5CRixDQUhGLEVBMEJFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBa0IsUUFBSSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsQ0FGRixDQURGLEVBZ0NFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxNQUFoQjtBQUFpQixNQUFFLEVBQUMsSUFBcEI7QUFBeUIsV0FBTyxFQUFDLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxZQUFRLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLE1BQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLE1BQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixDQUZGLENBaENGLEVBeUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsWUFBUSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FDMkI7QUFBRyxRQUFJLEVBQUMsc0RBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEM0IsRUFDMEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQxRyxZQUVRO0FBQUcsUUFBSSxFQUFDLGtDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixzQkFKRixDQXpDRixDQURGLENBREYsQ0FERixDQTVHRixDQURGO0FBd0tELENBNUtEO0FBOEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWxNTThCLGM7O01BQUFBLGM7QUFtT1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMGYwMDExYmE5ZDQ0YjlmODQ1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEdyaWQsXHJcbiAgSGVhZGVyLFxyXG4gIEljb24sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBMaXN0LFxyXG4gIE1lbnUsXHJcbiAgUmVzcG9uc2l2ZSxcclxuICBTZWdtZW50LFxyXG4gIFNpZGViYXIsXHJcbiAgVmlzaWJpbGl0eSxcclxuICBUcmFuc2l0aW9uXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG4vLyBIZWFkcyB1cCFcclxuLy8gV2UgdXNpbmcgUmVhY3QgU3RhdGljIHRvIHByZXJlbmRlciBvdXIgZG9jcyB3aXRoIHNlcnZlciBzaWRlIHJlbmRlcmluZywgdGhpcyBpcyBhIHF1aXRlIHNpbXBsZSBzb2x1dGlvbi5cclxuLy8gRm9yIG1vcmUgYWR2YW5jZWQgdXNhZ2UgcGxlYXNlIGNoZWNrIFJlc3BvbnNpdmUgZG9jcyB1bmRlciB0aGUgXCJVc2FnZVwiIHNlY3Rpb24uXHJcbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuXHJcbiAgcmV0dXJuIGlzU1NSID8gUmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRoIDogd2luZG93LmlubmVyV2lkdGhcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG4vKiBIZWFkcyB1cCEgSG9tZXBhZ2VIZWFkaW5nIHVzZXMgaW5saW5lIHN0eWxpbmcsIGhvd2V2ZXIgaXQncyBub3QgdGhlIGJlc3QgcHJhY3RpY2UuIFVzZSBDU1Mgb3Igc3R5bGVkIGNvbXBvbmVudHMgZm9yXHJcbiAqIHN1Y2ggdGhpbmdzLlxyXG4gKi9cclxuY29uc3QgSG9tZXBhZ2VIZWFkaW5nID0gKHsgbW9iaWxlIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgY29udGVudD0nTW9uZXknXHJcbiAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcyZW0nIDogJzRlbScsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzEuNWVtJyA6ICczZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBhcz0naDInXHJcbiAgICAgICAgY29udGVudD0nTWFrZSBhIGxvdCAoIHNvIG11Y2ggKSBvZiBpdC4nXHJcbiAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcxLjVlbScgOiAnMS43ZW0nLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMS41ZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgPE1vZGFsIFxyXG4gICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPSdodWdlJz5cclxuICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8SWNvbiBuYW1lPSdyaWdodCBhcnJvdycgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG5cclxuICBcclxufVxyXG5cclxuSG9tZXBhZ2VIZWFkaW5nLnByb3BUeXBlcyA9IHtcclxuICBtb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG59XHJcblxyXG4vKiBIZWFkcyB1cCFcclxuICogTmVpdGhlciBTZW1hbnRpYyBVSSBub3IgU2VtYW50aWMgVUkgUmVhY3Qgb2ZmZXIgYSByZXNwb25zaXZlIG5hdmJhciwgaG93ZXZlciwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGVhc2lseS5cclxuICogSXQgY2FuIGJlIG1vcmUgY29tcGxpY2F0ZWQsIGJ1dCB5b3UgY2FuIGNyZWF0ZSByZWFsbHkgZmxleGlibGUgbWFya3VwLlxyXG4gKi9cclxuY2xhc3MgRGVza3RvcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fVxyXG4gIG5ld0lkID0ge3NhbXBsZVN0YXRlOiAnaGVsbG8gd29ybGQnfTtcclxuXHJcblxyXG4gIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgc2hvd0ZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogdHJ1ZSB9KVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3Qgc2V0TmV3SWQgPSBzYW1wbGVTdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHsgc2FtcGxlU3RhdGUgfSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlc3BvbnNpdmUgZ2V0V2lkdGg9e2dldFdpZHRofSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cclxuICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBmaXhlZD17Zml4ZWQgPyAndG9wJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBwb2ludGluZz17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeT17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPkFkaXZzZWQgSW52ZXN0bWVudDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT0nYXJyb3cgZG93bicgc2l6ZT0nbWFzc2l2ZScgLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L1Zpc2liaWxpdHk+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8L1Jlc3BvbnNpdmU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5EZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fVxyXG5cclxuICBoYW5kbGVTaWRlYmFySGlkZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiBmYWxzZSB9KVxyXG5cclxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAvKlxyXG5cclxuICA8UmVzcG9uc2l2ZVxyXG4gICAgICAgIGFzPXtTaWRlYmFyLlB1c2hhYmxlfVxyXG4gICAgICAgIGdldFdpZHRoPXtnZXRXaWR0aH1cclxuICAgICAgICBtYXhXaWR0aD17UmVzcG9uc2l2ZS5vbmx5TW9iaWxlLm1heFdpZHRofVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgYW5pbWF0aW9uPSdwdXNoJ1xyXG4gICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICB2aXNpYmxlPXtzaWRlYmFyT3BlbmVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz5QZXJzb25hbDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XHJcbiAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAzNTAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyBtb2JpbGUgLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cclxuICAgICAgPC9SZXNwb25zaXZlPlxyXG5cclxuICAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHNpZGViYXJPcGVuZWQgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHsgZml4ZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDM1MCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIG1vYmlsZS8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuTW9iaWxlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmVDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxEZXNrdG9wQ29udGFpbmVyPntjaGlsZHJlbn08L0Rlc2t0b3BDb250YWluZXI+XHJcbiAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuUmVzcG9uc2l2ZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5CYXpjYWw8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICAgIDxHcmlkIGNlbGxlZD0naW50ZXJuYWxseScgY29sdW1ucz0nZXF1YWwnIHN0YWNrYWJsZT5cclxuICAgICAgICAgIDxHcmlkLlJvdyB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNWVtJywgcGFkZGluZ1RvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIFwiYmVzdCB0aGluZyBldmVyXCJcclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGI+U2ltb248L2I+IHwgbGl0ZXJhbGx5IHNpbW9uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNWVtJywgcGFkZGluZ1RvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIFwidmVyeSBjb29sXCJcclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+bGl0ZXJhbGx5IGV2ZXJ5b25lPC9wPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWw+XHJcbiAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgQmF6YWFyIEJvdHMgTWFrZSBCaWcgTW9uZXlcclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICBHb3QgYm9yZWQgb2YgSVJMIHRyYWRpbmc/IFdlbGwsIHRoaXMgZG9lc24ndCBtYWtlIGFzIG11Y2ggbW9uZXksIHNvcnJ5LCBidXQgaXRzIGNsb3NlISBWZXJ5IGNsb3NlIGluZGVlZC4gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICBHZXQgTXkgUGVyc29uYWwgU3RyYXRlZ3lcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAgYXM9J2g0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcclxuICAgICAgICAgICAgaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICczZW0gMGVtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIyc+Q2FzZSBTdHVkaWVzPC9hPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIERpZCBJIG1lbnRpb24gaG93IG11Y2ggbW9uZXkgeW91J2xsIG1ha2U/XHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgWW91IHdpbGwgbWFrZSBzbyBtdWNoIG1vbmV5LCBzbyBtdWNoLCBhIGxvdC4gVGhlIGFtb3VudCBvZiBtb25leSB5b3UnbGwgbWFrZSBpcyB2ZXJ5IGJpZy4gSSBhc3N1cmUgeW91IHRoYXQgaXQgd2lsbCBiZSB2ZXJ5IGJpZy4gSSdtIGRlZmluaXRlbHkgbm90IHdyaXRpbmcgdGhpcyBqdXN0IHRvIGZpbGwgc3BhY2UuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgSSdtIEludGVyZXN0ZWQsIEdvIG9uLi4uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgIDxTZWdtZW50IGludmVydGVkIHZlcnRpY2FsIHN0eWxlPXt7IHBhZGRpbmc6ICc1ZW0gMGVtJyB9fT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgZGl2aWRlZCBpbnZlcnRlZCBzdGFja2FibGU+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J0FjdHVhbCBMaW5rcycgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkNvbWluZyBTb29uICggQ29taW5nIFNvb24gKWo8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+TWFya2V0IENyYXNoICggQ29taW5nIFNvb24gKTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+QWR2aXNlZCBJbnZlc3RtZW50PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJyBocmVmPVwiL1wiPkhvbWU8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nU2VydmljZXMnIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5CYW5hbmEgUHJlLU9yZGVyPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkROQSBGQVE8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+SG93IFRvIEFjY2VzczwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5GYXZvcml0ZSBYLU1lbjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0JyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgIOKdpO+4j1xyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBidWlsdCB3aXRoIOKdpO+4jyBieSA8YSBocmVmPVwiaHR0cHM6Ly9wbGFuY2tlLmlvL2h5cGl4ZWwvcGxheWVyL3N0YXRzL0ZvcmdpbmdNZXRhbFwiPkZvcmdpbmdNZXRhbDwvYT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgVXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9XeWtlcmQvYmF6Y2FsXCI+QmF6Y2FsPC9hPiBieSBWZW50IGFuZCBOZXJ0XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuLypcclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiovXHJcblxyXG4vKlxyXG4gICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBIZWxwIENvbXBhbmllcyBhbmQgQ29tcGFuaW9uc1xyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgIFdlIGNhbiBnaXZlIHlvdXIgY29tcGFueSBzdXBlcnBvd2VycyB0byBkbyB0aGluZ3MgdGhhdCB0aGV5IG5ldmVyIHRob3VnaHQgcG9zc2libGUuXHJcbiAgICAgICAgICAgICAgTGV0IHVzIGRlbGlnaHQgeW91ciBjdXN0b21lcnMgYW5kIGVtcG93ZXIgeW91ciBuZWVkcy4uLiB0aHJvdWdoIHB1cmUgZGF0YSBhbmFseXRpY3MuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBNYWtlIEJhbmFuYXMgVGhhdCBDYW4gRGFuY2VcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBZZXMgdGhhdCdzIHJpZ2h0LCB5b3UgdGhvdWdodCBpdCB3YXMgdGhlIHN0dWZmIG9mIGRyZWFtcywgYnV0IGV2ZW4gYmFuYW5hcyBjYW4gYmVcclxuICAgICAgICAgICAgICBiaW9lbmdpbmVlcmVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBib3JkZXJlZCByb3VuZGVkIHNpemU9J2xhcmdlJyBzcmM9Jy9pbWFnZXMvd2lyZWZyYW1lL3doaXRlLWltYWdlLnBuZycgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnPkNoZWNrIFRoZW0gT3V0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvU2VnbWVudD5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==