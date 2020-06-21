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
      }, "Gimme Money"))))), __jsx(HomepageHeading, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }))), children);
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
          lineNumber: 242,
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
          lineNumber: 243,
          columnNumber: 9
        }
      }, __jsx(HomepageHeading, {
        mobile: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
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
      lineNumber: 264,
      columnNumber: 3
    }
  }, __jsx(DesktopContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }, children), __jsx(MobileContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
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
      lineNumber: 279,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, "Bazcal"), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    textAlign: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
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
      lineNumber: 288,
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
      lineNumber: 289,
      columnNumber: 15
    }
  }, "\"best thing ever\""), __jsx("div", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
      lineNumber: 296,
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
      lineNumber: 297,
      columnNumber: 15
    }
  }, "\"very cool\""), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 308,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    text: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
      lineNumber: 310,
      columnNumber: 11
    }
  }, "Bazaar Bots Make Big Money"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, "Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 15
      }
    }, "Get My Personal Strategy"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
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
      lineNumber: 328,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
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
      lineNumber: 338,
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
      lineNumber: 343,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
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
      lineNumber: 352,
      columnNumber: 11
    }
  }, "Did I mention how much money you'll make?"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, "You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      as: "a",
      size: "large",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 15
      }
    }, "I'm Interested, Go on..."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
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
      lineNumber: 371,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
      lineNumber: 381,
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
      lineNumber: 387,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Actual Links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 19
    }
  }, "Coming Soon ( Coming Soon )j"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 19
    }
  }, "Market Crash ( Coming Soon )"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
      as: "a",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 23
      }
    }, "Advised Investment"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Form"].Field, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 27
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
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
      lineNumber: 406,
      columnNumber: 29
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
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
      lineNumber: 416,
      columnNumber: 23
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 19
    }
  }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"], {
    link: true,
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 19
    }
  }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 19
    }
  }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 19
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
    as: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    width: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
    as: "h4",
    inverted: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, "\u2764\uFE0F"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 17
    }
  }, "Website built with \u2764\uFE0F by ", __jsx("a", {
    href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 44
    }
  }, "ForgingMetal"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJ1c2VTdGF0ZSIsIm5ld0lkIiwic2V0TmV3SWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJDb21wb25lbnQiLCJub2RlIiwiTW9iaWxlQ29udGFpbmVyIiwic2lkZWJhck9wZW5lZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJIb21lcGFnZUxheW91dCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwibWFyZ2luIiwidGV4dFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQU1DLEtBQUssUUFBWDtBQUVBLFNBQU9BLEtBQUssR0FBR0MsNERBQVUsQ0FBQ0MsVUFBWCxDQUFzQkMsUUFBekIsR0FBb0NDLE1BQU0sQ0FBQ0MsVUFBdkQ7QUFDRCxDQUpEO0FBTUE7O0FBQ0E7Ozs7O0FBR0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFnQjtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUUsTUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxNQUFFLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLENBRkYsQ0FoQ0YsRUF5Q0UsTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxTQUFLLEVBQUUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixZQUFRLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUMyQjtBQUFHLFFBQUksRUFBQyxzREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUQzQixFQUMwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDFHLGtDQUpGLENBekNGLENBREYsQ0FERixDQURGLENBNUdGLENBREY7QUF3S0QsQ0E1S0Q7QUE4S0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbE1NOEIsYzs7TUFBQUEsYztBQW1PU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY2NmJlZmQyNjUxYTFhNWRkMDA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkZXIsXHJcbiAgSWNvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1vZGFsLFxyXG4gIExpc3QsXHJcbiAgTWVudSxcclxuICBSZXNwb25zaXZlLFxyXG4gIFNlZ21lbnQsXHJcbiAgU2lkZWJhcixcclxuICBWaXNpYmlsaXR5LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5cclxuLy8gSGVhZHMgdXAhXHJcbi8vIFdlIHVzaW5nIFJlYWN0IFN0YXRpYyB0byBwcmVyZW5kZXIgb3VyIGRvY3Mgd2l0aCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIHRoaXMgaXMgYSBxdWl0ZSBzaW1wbGUgc29sdXRpb24uXHJcbi8vIEZvciBtb3JlIGFkdmFuY2VkIHVzYWdlIHBsZWFzZSBjaGVjayBSZXNwb25zaXZlIGRvY3MgdW5kZXIgdGhlIFwiVXNhZ2VcIiBzZWN0aW9uLlxyXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcclxuICBjb25zdCBpc1NTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG4gIHJldHVybiBpc1NTUiA/IFJlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuLyogSGVhZHMgdXAhIEhvbWVwYWdlSGVhZGluZyB1c2VzIGlubGluZSBzdHlsaW5nLCBob3dldmVyIGl0J3Mgbm90IHRoZSBiZXN0IHByYWN0aWNlLiBVc2UgQ1NTIG9yIHN0eWxlZCBjb21wb25lbnRzIGZvclxyXG4gKiBzdWNoIHRoaW5ncy5cclxuICovXHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZyA9ICh7IG1vYmlsZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01vbmV5J1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcxLjVlbScgOiAnM2VtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01ha2UgYSBsb3QgKCBzbyBtdWNoICkgb2YgaXQuJ1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMS41ZW0nIDogJzEuN2VtJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzEuNWVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDxNb2RhbCBcclxuICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT0naHVnZSc+XHJcbiAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgPEljb24gbmFtZT0ncmlnaHQgYXJyb3cnIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxuXHJcbiAgXHJcbn1cclxuXHJcbkhvbWVwYWdlSGVhZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuLyogSGVhZHMgdXAhXHJcbiAqIE5laXRoZXIgU2VtYW50aWMgVUkgbm9yIFNlbWFudGljIFVJIFJlYWN0IG9mZmVyIGEgcmVzcG9uc2l2ZSBuYXZiYXIsIGhvd2V2ZXIsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBlYXNpbHkuXHJcbiAqIEl0IGNhbiBiZSBtb3JlIGNvbXBsaWNhdGVkLCBidXQgeW91IGNhbiBjcmVhdGUgcmVhbGx5IGZsZXhpYmxlIG1hcmt1cC5cclxuICovXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge31cclxuICBuZXdJZCA9IHtzYW1wbGVTdGF0ZTogJ2hlbGxvIHdvcmxkJ307XHJcblxyXG5cclxuICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxyXG4gIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNldE5ld0lkID0gc2FtcGxlU3RhdGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhbXBsZVN0YXRlIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXNwb25zaXZlIGdldFdpZHRoPXtnZXRXaWR0aH0gbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XHJcbiAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgZml4ZWQ9e2ZpeGVkID8gJ3RvcCcgOiBudWxsfVxyXG4gICAgICAgICAgICAgIGludmVydGVkPXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgcG9pbnRpbmc9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnk9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz5BZGl2c2VkIEludmVzdG1lbnQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L1Zpc2liaWxpdHk+XHJcblxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9SZXNwb25zaXZlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuRGVza3RvcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge31cclxuXHJcbiAgaGFuZGxlU2lkZWJhckhpZGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogZmFsc2UgfSlcclxuXHJcbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IHRydWUgfSlcclxuXHJcbiAgLypcclxuXHJcbiAgPFJlc3BvbnNpdmVcclxuICAgICAgICBhcz17U2lkZWJhci5QdXNoYWJsZX1cclxuICAgICAgICBnZXRXaWR0aD17Z2V0V2lkdGh9XHJcbiAgICAgICAgbWF4V2lkdGg9e1Jlc3BvbnNpdmUub25seU1vYmlsZS5tYXhXaWR0aH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICBhcz17TWVudX1cclxuICAgICAgICAgIGFuaW1hdGlvbj0ncHVzaCdcclxuICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlU2lkZWJhckhpZGV9XHJcbiAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmU+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+UGVyc29uYWw8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1NpZGViYXI+XHJcblxyXG4gICAgICAgIDxTaWRlYmFyLlB1c2hlciBkaW1tZWQ9e3NpZGViYXJPcGVuZWR9PlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMzUwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxIb21lcGFnZUhlYWRpbmcgbW9iaWxlIC8+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgIDwvUmVzcG9uc2l2ZT5cclxuXHJcbiAgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAzNTAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgdmVydGljYWxcclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyBtb2JpbGUvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jb25zdCBSZXNwb25zaXZlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblJlc3BvbnNpdmVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QmF6Y2FsPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgICA8R3JpZCBjZWxsZWQ9J2ludGVybmFsbHknIGNvbHVtbnM9J2VxdWFsJyBzdGFja2FibGU+XHJcbiAgICAgICAgICA8R3JpZC5Sb3cgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzVlbScsIHBhZGRpbmdUb3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICBcImJlc3QgdGhpbmcgZXZlclwiXHJcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlNpbW9uPC9iPiB8IGxpdGVyYWxseSBzaW1vblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzVlbScsIHBhZGRpbmdUb3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICBcInZlcnkgY29vbFwiXHJcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PmxpdGVyYWxseSBldmVyeW9uZTwvcD5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIEJhemFhciBCb3RzIE1ha2UgQmlnIE1vbmV5XHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgR290IGJvcmVkIG9mIElSTCB0cmFkaW5nPyBXZWxsLCB0aGlzIGRvZXNuJ3QgbWFrZSBhcyBtdWNoIG1vbmV5LCBzb3JyeSwgYnV0IGl0cyBjbG9zZSEgVmVyeSBjbG9zZSBpbmRlZWQuIFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgR2V0IE15IFBlcnNvbmFsIFN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyXHJcbiAgICAgICAgICAgIGFzPSdoNCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXHJcbiAgICAgICAgICAgIGhvcml6b250YWxcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnM2VtIDBlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPkNhc2UgU3R1ZGllczwvYT5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuXHJcbiAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICBEaWQgSSBtZW50aW9uIGhvdyBtdWNoIG1vbmV5IHlvdSdsbCBtYWtlP1xyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgIFlvdSB3aWxsIG1ha2Ugc28gbXVjaCBtb25leSwgc28gbXVjaCwgYSBsb3QuIFRoZSBhbW91bnQgb2YgbW9uZXkgeW91J2xsIG1ha2UgaXMgdmVyeSBiaWcuIEkgYXNzdXJlIHlvdSB0aGF0IGl0IHdpbGwgYmUgdmVyeSBiaWcuIEknbSBkZWZpbml0ZWx5IG5vdCB3cml0aW5nIHRoaXMganVzdCB0byBmaWxsIHNwYWNlLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIEknbSBJbnRlcmVzdGVkLCBHbyBvbi4uLlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nOiAnNWVtIDBlbScgfX0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkIGRpdmlkZWQgaW52ZXJ0ZWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdBY3R1YWwgTGlua3MnIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Db21pbmcgU29vbiAoIENvbWluZyBTb29uIClqPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPk1hcmtldCBDcmFzaCAoIENvbWluZyBTb29uICk8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkFkdmlzZWQgSW52ZXN0bWVudDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYScgaHJlZj1cIi9cIj5Ib21lPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J1NlcnZpY2VzJyAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QgbGluayBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+QmFuYW5hIFByZS1PcmRlcjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5ETkEgRkFRPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkhvdyBUbyBBY2Nlc3M8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+RmF2b3JpdGUgWC1NZW48L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPSdoNCcgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICDinaTvuI9cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFdlYnNpdGUgYnVpbHQgd2l0aCDinaTvuI8gYnkgPGEgaHJlZj1cImh0dHBzOi8vcGxhbmNrZS5pby9oeXBpeGVsL3BsYXllci9zdGF0cy9Gb3JnaW5nTWV0YWxcIj5Gb3JnaW5nTWV0YWw8L2E+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIFVzaW5nIEJhemNhbCBieSBWZW50IGFuZCBOZXJ0XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuLypcclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiovXHJcblxyXG4vKlxyXG4gICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBIZWxwIENvbXBhbmllcyBhbmQgQ29tcGFuaW9uc1xyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgIFdlIGNhbiBnaXZlIHlvdXIgY29tcGFueSBzdXBlcnBvd2VycyB0byBkbyB0aGluZ3MgdGhhdCB0aGV5IG5ldmVyIHRob3VnaHQgcG9zc2libGUuXHJcbiAgICAgICAgICAgICAgTGV0IHVzIGRlbGlnaHQgeW91ciBjdXN0b21lcnMgYW5kIGVtcG93ZXIgeW91ciBuZWVkcy4uLiB0aHJvdWdoIHB1cmUgZGF0YSBhbmFseXRpY3MuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBNYWtlIEJhbmFuYXMgVGhhdCBDYW4gRGFuY2VcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBZZXMgdGhhdCdzIHJpZ2h0LCB5b3UgdGhvdWdodCBpdCB3YXMgdGhlIHN0dWZmIG9mIGRyZWFtcywgYnV0IGV2ZW4gYmFuYW5hcyBjYW4gYmVcclxuICAgICAgICAgICAgICBiaW9lbmdpbmVlcmVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBib3JkZXJlZCByb3VuZGVkIHNpemU9J2xhcmdlJyBzcmM9Jy9pbWFnZXMvd2lyZWZyYW1lL3doaXRlLWltYWdlLnBuZycgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnPkNoZWNrIFRoZW0gT3V0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvU2VnbWVudD5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==