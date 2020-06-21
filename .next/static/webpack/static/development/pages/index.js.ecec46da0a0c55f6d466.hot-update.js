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
      lineNumber: 44,
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
      lineNumber: 45,
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
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      primary: true,
      size: "huge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, "Get Started", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
      name: "right arrow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 17
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
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
          lineNumber: 128,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Visibility"], {
        once: false,
        onBottomPassed: this.showFixedMenu,
        onBottomPassedReverse: this.hideFixedMenu,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
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
          lineNumber: 134,
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
          lineNumber: 140,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
        as: "a",
        active: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Menu"].Item, {
          as: "a",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }
        }, "Adivsed Investment"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 19
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 23
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }
      }, __jsx("label", {
        style: {
          fontSize: '1.33em'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
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
          lineNumber: 162,
          columnNumber: 27
        }
      }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
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
          lineNumber: 172,
          columnNumber: 21
        }
      }, "Gimme Money"))))), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        name: "home",
        size: "massive",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 244,
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
          lineNumber: 245,
          columnNumber: 9
        }
      }, __jsx(HomepageHeading, {
        mobile: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
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
      lineNumber: 266,
      columnNumber: 3
    }
  }, __jsx(DesktopContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 5
    }
  }, children), __jsx(MobileContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
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
      lineNumber: 281,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, "Bazcal"), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
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
      lineNumber: 287,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
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
      lineNumber: 290,
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
      lineNumber: 291,
      columnNumber: 15
    }
  }, "\"best thing ever\""), __jsx("div", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
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
      lineNumber: 298,
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
      lineNumber: 299,
      columnNumber: 15
    }
  }, "\"very cool\""), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
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
      lineNumber: 312,
      columnNumber: 11
    }
  }, "Bazaar Bots Make Big Money"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, "Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 15
      }
    }, "Get My Personal Strategy"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
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
      lineNumber: 330,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
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
      lineNumber: 340,
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
      lineNumber: 345,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
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
      lineNumber: 354,
      columnNumber: 11
    }
  }, "Did I mention how much money you'll make?"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 11
    }
  }, "You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 15
      }
    }, "I'm Interested, Go on..."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
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
      lineNumber: 373,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
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
      lineNumber: 383,
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
      lineNumber: 389,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Actual Links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 19
    }
  }, "Coming Soon ( Coming Soon )j"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Market Crash ( Coming Soon )"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
      as: "a",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 23
      }
    }, "Advised Investment"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 27
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
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
      lineNumber: 408,
      columnNumber: 29
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
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
      lineNumber: 418,
      columnNumber: 23
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 19
    }
  }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 19
    }
  }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h4",
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 17
    }
  }, "\u2764\uFE0F"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 17
    }
  }, "Website built with \u2764\uFE0F by ", __jsx("a", {
    href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 44
    }
  }, "ForgingMetal"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJ1c2VTdGF0ZSIsIm5ld0lkIiwic2V0TmV3SWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJub2RlIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJIb21lcGFnZUxheW91dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQU1DLEtBQUssUUFBWDtBQUVBLFNBQU9BLEtBQUssR0FBR0MsNERBQVUsQ0FBQ0MsVUFBWCxDQUFzQkMsUUFBekIsR0FBb0NDLE1BQU0sQ0FBQ0MsVUFBdkQ7QUFDRCxDQUpEO0FBTUE7O0FBQ0E7Ozs7O0FBR0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFnQjtB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LENBQU0sSUFBTjtBQUFXLE1BQUUsRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixDQUZGLENBaENGLEVBeUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsWUFBUSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FDMkI7QUFBRyxRQUFJLEVBQUMsc0RBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEM0IsRUFDMEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQxRyxrQ0FKRixDQXpDRixDQURGLENBREYsQ0FERixDQTVHRixDQURGO0FBd0tELENBNUtEO0FBOEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWxNTThCLGM7O01BQUFBLGM7QUFtT1NBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lY2VjNDZkYTBhMGM1NWY2ZDQ2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEdyaWQsXHJcbiAgSGVhZGVyLFxyXG4gIEljb24sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBMaXN0LFxyXG4gIE1lbnUsXHJcbiAgUmVzcG9uc2l2ZSxcclxuICBTZWdtZW50LFxyXG4gIFNpZGViYXIsXHJcbiAgVmlzaWJpbGl0eSxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuXHJcbi8vIEhlYWRzIHVwIVxyXG4vLyBXZSB1c2luZyBSZWFjdCBTdGF0aWMgdG8gcHJlcmVuZGVyIG91ciBkb2NzIHdpdGggc2VydmVyIHNpZGUgcmVuZGVyaW5nLCB0aGlzIGlzIGEgcXVpdGUgc2ltcGxlIHNvbHV0aW9uLlxyXG4vLyBGb3IgbW9yZSBhZHZhbmNlZCB1c2FnZSBwbGVhc2UgY2hlY2sgUmVzcG9uc2l2ZSBkb2NzIHVuZGVyIHRoZSBcIlVzYWdlXCIgc2VjdGlvbi5cclxuY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5cclxuICByZXR1cm4gaXNTU1IgPyBSZXNwb25zaXZlLm9ubHlUYWJsZXQubWluV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aFxyXG59XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbi8qIEhlYWRzIHVwISBIb21lcGFnZUhlYWRpbmcgdXNlcyBpbmxpbmUgc3R5bGluZywgaG93ZXZlciBpdCdzIG5vdCB0aGUgYmVzdCBwcmFjdGljZS4gVXNlIENTUyBvciBzdHlsZWQgY29tcG9uZW50cyBmb3JcclxuICogc3VjaCB0aGluZ3MuXHJcbiAqL1xyXG5jb25zdCBIb21lcGFnZUhlYWRpbmcgPSAoeyBtb2JpbGUgfSkgPT4ge1xyXG5cclxuICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGFzPSdoMSdcclxuICAgICAgICBjb250ZW50PSdNb25leSdcclxuICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzJlbScgOiAnNGVtJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMS41ZW0nIDogJzNlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGFzPSdoMidcclxuICAgICAgICBjb250ZW50PSdNYWtlIGEgbG90ICggc28gbXVjaCApIG9mIGl0LidcclxuICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogbW9iaWxlID8gJzEuNWVtJyA6ICcxLjdlbScsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzAuNWVtJyA6ICcxLjVlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8TW9kYWwgXHJcbiAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHNpemU9J2h1Z2UnPlxyXG4gICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgIDxJY29uIG5hbWU9J3JpZ2h0IGFycm93JyAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcblxyXG4gIFxyXG59XHJcblxyXG5Ib21lcGFnZUhlYWRpbmcucHJvcFR5cGVzID0ge1xyXG4gIG1vYmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbn1cclxuXHJcbi8qIEhlYWRzIHVwIVxyXG4gKiBOZWl0aGVyIFNlbWFudGljIFVJIG5vciBTZW1hbnRpYyBVSSBSZWFjdCBvZmZlciBhIHJlc3BvbnNpdmUgbmF2YmFyLCBob3dldmVyLCBpdCBjYW4gYmUgaW1wbGVtZW50ZWQgZWFzaWx5LlxyXG4gKiBJdCBjYW4gYmUgbW9yZSBjb21wbGljYXRlZCwgYnV0IHlvdSBjYW4gY3JlYXRlIHJlYWxseSBmbGV4aWJsZSBtYXJrdXAuXHJcbiAqL1xyXG5jbGFzcyBEZXNrdG9wQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9XHJcbiAgbmV3SWQgPSB7c2FtcGxlU3RhdGU6ICdoZWxsbyB3b3JsZCd9O1xyXG5cclxuXHJcbiAgaGlkZUZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogZmFsc2UgfSlcclxuICBzaG93Rml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0cnVlIH0pXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBzZXROZXdJZCA9IHNhbXBsZVN0YXRlID0+IHRoaXMuc2V0U3RhdGUoeyBzYW1wbGVTdGF0ZSB9KTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgZml4ZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVzcG9uc2l2ZSBnZXRXaWR0aD17Z2V0V2lkdGh9IG1pbldpZHRoPXtSZXNwb25zaXZlLm9ubHlUYWJsZXQubWluV2lkdGh9PlxyXG4gICAgICAgIDxWaXNpYmlsaXR5XHJcbiAgICAgICAgICBvbmNlPXtmYWxzZX1cclxuICAgICAgICAgIG9uQm90dG9tUGFzc2VkPXt0aGlzLnNob3dGaXhlZE1lbnV9XHJcbiAgICAgICAgICBvbkJvdHRvbVBhc3NlZFJldmVyc2U9e3RoaXMuaGlkZUZpeGVkTWVudX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiA3MDAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgIGZpeGVkPXtmaXhlZCA/ICd0b3AnIDogbnVsbH1cclxuICAgICAgICAgICAgICBpbnZlcnRlZD17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHBvaW50aW5nPXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+QWRpdnNlZCBJbnZlc3RtZW50PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPSdob21lJyBzaXplPSdtYXNzaXZlJyAvPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvVmlzaWJpbGl0eT5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvUmVzcG9uc2l2ZT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkRlc2t0b3BDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY2xhc3MgTW9iaWxlQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHt9XHJcblxyXG4gIGhhbmRsZVNpZGViYXJIaWRlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IGZhbHNlIH0pXHJcblxyXG4gIGhhbmRsZVRvZ2dsZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiB0cnVlIH0pXHJcblxyXG4gIC8qXHJcblxyXG4gIDxSZXNwb25zaXZlXHJcbiAgICAgICAgYXM9e1NpZGViYXIuUHVzaGFibGV9XHJcbiAgICAgICAgZ2V0V2lkdGg9e2dldFdpZHRofVxyXG4gICAgICAgIG1heFdpZHRoPXtSZXNwb25zaXZlLm9ubHlNb2JpbGUubWF4V2lkdGh9XHJcbiAgICAgID5cclxuICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgYXM9e01lbnV9XHJcbiAgICAgICAgICBhbmltYXRpb249J3B1c2gnXHJcbiAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZVNpZGViYXJIaWRlfVxyXG4gICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgIHZpc2libGU9e3NpZGViYXJPcGVuZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYScgYWN0aXZlPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPlBlcnNvbmFsPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TaWRlYmFyPlxyXG5cclxuICAgICAgICA8U2lkZWJhci5QdXNoZXIgZGltbWVkPXtzaWRlYmFyT3BlbmVkfT5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDM1MCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIG1vYmlsZSAvPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NpZGViYXIuUHVzaGVyPlxyXG4gICAgICA8L1Jlc3BvbnNpdmU+XHJcblxyXG4gICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgc2lkZWJhck9wZW5lZCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMzUwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDxIb21lcGFnZUhlYWRpbmcgbW9iaWxlLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5Nb2JpbGVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPERlc2t0b3BDb250YWluZXI+e2NoaWxkcmVufTwvRGVza3RvcENvbnRhaW5lcj5cclxuICAgIDxNb2JpbGVDb250YWluZXI+e2NoaWxkcmVufTwvTW9iaWxlQ29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5SZXNwb25zaXZlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNvbnN0IEhvbWVwYWdlTGF5b3V0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbbmV3SWQsIHNldE5ld0lkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkJhemNhbDwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzBlbScgfX0gdmVydGljYWw+XHJcbiAgICAgICAgPEdyaWQgY2VsbGVkPSdpbnRlcm5hbGx5JyBjb2x1bW5zPSdlcXVhbCcgc3RhY2thYmxlPlxyXG4gICAgICAgICAgPEdyaWQuUm93IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc1ZW0nLCBwYWRkaW5nVG9wOiAnNWVtJyB9fT5cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgXCJiZXN0IHRoaW5nIGV2ZXJcIlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5TaW1vbjwvYj4gfCBsaXRlcmFsbHkgc2ltb25cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICc1ZW0nLCBwYWRkaW5nVG9wOiAnNWVtJyB9fT5cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgXCJ2ZXJ5IGNvb2xcIlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5saXRlcmFsbHkgZXZlcnlvbmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICBCYXphYXIgQm90cyBNYWtlIEJpZyBNb25leVxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgIEdvdCBib3JlZCBvZiBJUkwgdHJhZGluZz8gV2VsbCwgdGhpcyBkb2Vzbid0IG1ha2UgYXMgbXVjaCBtb25leSwgc29ycnksIGJ1dCBpdHMgY2xvc2UhIFZlcnkgY2xvc2UgaW5kZWVkLiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIEdldCBNeSBQZXJzb25hbCBTdHJhdGVneVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG5cclxuXHJcbiAgICAgICAgICA8RGl2aWRlclxyXG4gICAgICAgICAgICBhcz0naDQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyJ1xyXG4gICAgICAgICAgICBob3Jpem9udGFsXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzNlbSAwZW0nLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBocmVmPScjJz5DYXNlIFN0dWRpZXM8L2E+XHJcbiAgICAgICAgICA8L0RpdmlkZXI+XHJcblxyXG4gICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgRGlkIEkgbWVudGlvbiBob3cgbXVjaCBtb25leSB5b3UnbGwgbWFrZT9cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICBZb3Ugd2lsbCBtYWtlIHNvIG11Y2ggbW9uZXksIHNvIG11Y2gsIGEgbG90LiBUaGUgYW1vdW50IG9mIG1vbmV5IHlvdSdsbCBtYWtlIGlzIHZlcnkgYmlnLiBJIGFzc3VyZSB5b3UgdGhhdCBpdCB3aWxsIGJlIHZlcnkgYmlnLiBJJ20gZGVmaW5pdGVseSBub3Qgd3JpdGluZyB0aGlzIGp1c3QgdG8gZmlsbCBzcGFjZS5cclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICBJJ20gSW50ZXJlc3RlZCwgR28gb24uLi5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgPFNlZ21lbnQgaW52ZXJ0ZWQgdmVydGljYWwgc3R5bGU9e3sgcGFkZGluZzogJzVlbSAwZW0nIH19PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nQWN0dWFsIExpbmtzJyAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+Q29taW5nIFNvb24gKCBDb21pbmcgU29vbiApajwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5NYXJrZXQgQ3Jhc2ggKCBDb21pbmcgU29vbiApPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5BZHZpc2VkIEludmVzdG1lbnQ8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnIGhyZWY9XCIvXCI+SG9tZTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdTZXJ2aWNlcycgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkJhbmFuYSBQcmUtT3JkZXI8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+RE5BIEZBUTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Ib3cgVG8gQWNjZXNzPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkZhdm9yaXRlIFgtTWVuPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDQnIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAg4p2k77iPXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBXZWJzaXRlIGJ1aWx0IHdpdGgg4p2k77iPIGJ5IDxhIGhyZWY9XCJodHRwczovL3BsYW5ja2UuaW8vaHlwaXhlbC9wbGF5ZXIvc3RhdHMvRm9yZ2luZ01ldGFsXCI+Rm9yZ2luZ01ldGFsPC9hPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICBVc2luZyBCYXpjYWwgYnkgVmVudCBhbmQgTmVydFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbi8qXHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHBvaW50aW5nIHNlY29uZGFyeSBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nc2lkZWJhcicgLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4qL1xyXG5cclxuLypcclxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgSGVscCBDb21wYW5pZXMgYW5kIENvbXBhbmlvbnNcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBjYW4gZ2l2ZSB5b3VyIGNvbXBhbnkgc3VwZXJwb3dlcnMgdG8gZG8gdGhpbmdzIHRoYXQgdGhleSBuZXZlciB0aG91Z2h0IHBvc3NpYmxlLlxyXG4gICAgICAgICAgICAgIExldCB1cyBkZWxpZ2h0IHlvdXIgY3VzdG9tZXJzIGFuZCBlbXBvd2VyIHlvdXIgbmVlZHMuLi4gdGhyb3VnaCBwdXJlIGRhdGEgYW5hbHl0aWNzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgTWFrZSBCYW5hbmFzIFRoYXQgQ2FuIERhbmNlXHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgWWVzIHRoYXQncyByaWdodCwgeW91IHRob3VnaHQgaXQgd2FzIHRoZSBzdHVmZiBvZiBkcmVhbXMsIGJ1dCBldmVuIGJhbmFuYXMgY2FuIGJlXHJcbiAgICAgICAgICAgICAgYmlvZW5naW5lZXJlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgYm9yZGVyZWQgcm91bmRlZCBzaXplPSdsYXJnZScgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS93aGl0ZS1pbWFnZS5wbmcnIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJz5DaGVjayBUaGVtIE91dDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=