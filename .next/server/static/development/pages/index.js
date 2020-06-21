module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\rsale\\Documents\\SSB\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
  inverted: true,
  vertical: true,
  style: {
    padding: '5em 0em'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
  divided: true,
  inverted: true,
  stackable: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
  width: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  inverted: true,
  as: "h4",
  content: "Actual Links",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
  link: true,
  inverted: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 15
  }
}, "Flip and Craft"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 15
  }
}, "Market Crash"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }
}, "Personal Investment"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 15
  }
}, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
  width: 3,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  inverted: true,
  as: "h4",
  content: "Services",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
  link: true,
  inverted: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 15
  }
}, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 15
  }
}, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 15
  }
}, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
  as: "a",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 15
  }
}, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
  width: 7,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 11
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  as: "h4",
  inverted: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }
}, "Footer Header"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }
}, "Website built with \u2764\uFE0F by ", __jsx("a", {
  href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 40
  }
}, "ForgingMetal"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 119
  }
}), "Using Bazcal by Vent and Wykerd"))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\Users\\rsale\\Documents\\SSB\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

const getWidth = () => {
  const isSSR = true;
  return isSSR ? semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyTablet.minWidth : window.innerWidth;
};
/* eslint-disable react/no-multi-comp */

/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


const HomepageHeading = ({
  mobile
}) => {
  const {
    0: newId,
    1: setNewId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h1",
    content: "Money",
    inverted: true,
    style: {
      fontSize: mobile ? '2em' : '4em',
      fontWeight: 'normal',
      marginBottom: 0,
      marginTop: mobile ? '1.5em' : '3em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    content: "Make a lot ( so much ) of it.",
    inverted: true,
    style: {
      fontSize: mobile ? '1.5em' : '1.7em',
      fontWeight: 'normal',
      marginTop: mobile ? '0.5em' : '1.5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      primary: true,
      size: "huge",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, "Get Started", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "right arrow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: e => setNewId(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/personal/' + newId),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Gimme Money"))));
};

HomepageHeading.propTypes = {
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "newId", {
      sampleState: 'hello world'
    });

    _defineProperty(this, "hideFixedMenu", () => this.setState({
      fixed: false
    }));

    _defineProperty(this, "showFixedMenu", () => this.setState({
      fixed: true
    }));
  }

  render() {
    const setNewId = sampleState => this.setState({
      sampleState
    });

    const {
      children
    } = this.props;
    const {
      fixed
    } = this.state;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"], {
      getWidth: getWidth,
      minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Responsive"].onlyTablet.minWidth,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Visibility"], {
      once: false,
      onBottomPassed: this.showFixedMenu,
      onBottomPassedReverse: this.hideFixedMenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      as: "a",
      active: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, "Home"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
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
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
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
    }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      placeholder: "Enter Your Coins",
      onChange: e => setNewId(e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 27
      }
    }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/personal/' + newId),
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
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
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

}

DesktopContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

class MobileContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleSidebarHide", () => this.setState({
      sidebarOpened: false
    }));

    _defineProperty(this, "handleToggle", () => this.setState({
      sidebarOpened: true
    }));
  }

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
  render() {
    const {
      children
    } = this.props;
    const {
      sidebarOpened
    } = this.state;
    const {
      fixed
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
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

}

MobileContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

const ResponsiveContainer = ({
  children
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 267,
    columnNumber: 3
  }
}, __jsx(DesktopContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268,
    columnNumber: 5
  }
}, children), __jsx(MobileContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 5
  }
}, children));

ResponsiveContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

const HomepageLayout = () => {
  const {
    0: newId,
    1: setNewId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(ResponsiveContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, "Bazcal"), __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    style: {
      padding: '0em'
    },
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    celled: "internally",
    columns: "equal",
    stackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    textAlign: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, "\"best thing ever\""), __jsx("div", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 19
    }
  }, "Simon"), " | literally simon")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    style: {
      paddingBottom: '5em',
      paddingTop: '5em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, "\"very cool\""), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }
  }, "literally everyone")))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  }, "Bazaar Bots Make Big Money"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, "Got bored of IRL trading? Well, this doesn't make as much money, sorry, but its close! Very close indeed."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      as: "a",
      size: "large",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 15
      }
    }, "Get My Personal Strategy"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: e => setNewId(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/personal/' + newId),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    as: "h4",
    className: "header",
    horizontal: true,
    style: {
      margin: '3em 0em',
      textTransform: 'uppercase'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 13
    }
  }, "Case Studies")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, "Did I mention how much money you'll make?"), __jsx("p", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, "You will make so much money, so much, a lot. The amount of money you'll make is very big. I assure you that it will be very big. I'm definitely not writing this just to fill space."), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      as: "a",
      size: "large",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 15
      }
    }, "I'm Interested, Go on..."),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 21
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: e => setNewId(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/personal/' + newId),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, "Gimme Money"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
    inverted: true,
    vertical: true,
    style: {
      padding: '5em 0em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    divided: true,
    inverted: true,
    stackable: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    inverted: true,
    as: "h4",
    content: "Actual Links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
    link: true,
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Coming Soon ( Coming Soon )j"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, "Market Crash ( Coming Soon )"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
      as: "a",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 23
      }
    }, "Advised Investment"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 23
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 27
    }
  }, __jsx("label", {
    style: {
      fontSize: '1.33em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 29
    }
  }, "Coins"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "number",
    placeholder: "Enter Your Coins",
    onChange: e => setNewId(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 29
    }
  }))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/personal/' + newId),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 23
    }
  }, "Gimme Money"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, "Home"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    inverted: true,
    as: "h4",
    content: "Services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
    link: true,
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, "Banana Pre-Order"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }, "DNA FAQ"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }, "How To Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, "Favorite X-Men"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h4",
    inverted: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 17
    }
  }, "\u2764\uFE0F"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, "Website built with \u2764\uFE0F by ", __jsx("a", {
    href: "https://plancke.io/hypixel/player/stats/ForgingMetal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 44
    }
  }, "ForgingMetal"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 123
    }
  }), "Using ", __jsx("a", {
    href: "https://github.com/Wykerd/bazcal",
    __self: undefined,
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


/* harmony default export */ __webpack_exports__["default"] = (HomepageLayout);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rsale\Documents\SSB\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInBhZGRpbmciLCJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJuZXdJZCIsInNldE5ld0lkIiwidXNlU3RhdGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJDb21wb25lbnQiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsIm5vZGUiLCJNb2JpbGVDb250YWluZXIiLCJzaWRlYmFyT3BlbmVkIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkhvbWVwYWdlTGF5b3V0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0VHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7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Q0FBTSxJQUFOO0FBQVcsTUFBRSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixDQUZGLENBaENGLEVBeUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsU0FBSyxFQUFFLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsWUFBUSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FDMkI7QUFBRyxRQUFJLEVBQUMsc0RBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEM0IsRUFDMEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQxRyxZQUVRO0FBQUcsUUFBSSxFQUFDLGtDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixzQkFKRixDQXpDRixDQURGLENBREYsQ0FERixDQTVHRixDQURGO0FBd0tELENBNUtEO0FBOEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDZStCLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdmZBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBHcmlkLFxyXG4gIEhlYWRlcixcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIExpc3QsXHJcbiAgVGFibGUsXHJcbiAgTGFiZWwsXHJcbiAgTWVudSxcclxuICBSZXNwb25zaXZlLFxyXG4gIFNlZ21lbnQsXHJcbiAgU2lkZWJhcixcclxuICBWaXNpYmlsaXR5LFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICAgIDxTZWdtZW50IGludmVydGVkIHZlcnRpY2FsIHN0eWxlPXt7IHBhZGRpbmc6ICc1ZW0gMGVtJyB9fT5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGRpdmlkZWQgaW52ZXJ0ZWQgc3RhY2thYmxlPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2g0JyBjb250ZW50PSdBY3R1YWwgTGlua3MnIC8+XHJcbiAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+RmxpcCBhbmQgQ3JhZnQ8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5NYXJrZXQgQ3Jhc2g8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5QZXJzb25hbCBJbnZlc3RtZW50PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYScgaHJlZj1cIi9cIj5Ib21lPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nU2VydmljZXMnIC8+XHJcbiAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+QmFuYW5hIFByZS1PcmRlcjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkROQSBGQVE8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5Ib3cgVG8gQWNjZXNzPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+RmF2b3JpdGUgWC1NZW48L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17N30+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0JyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICBGb290ZXIgSGVhZGVyXHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBXZWJzaXRlIGJ1aWx0IHdpdGgg4p2k77iPIGJ5IDxhIGhyZWY9XCJodHRwczovL3BsYW5ja2UuaW8vaHlwaXhlbC9wbGF5ZXIvc3RhdHMvRm9yZ2luZ01ldGFsXCI+Rm9yZ2luZ01ldGFsPC9hPjxiciAvPlxyXG4gICAgICAgICAgICAgIFVzaW5nIEJhemNhbCBieSBWZW50IGFuZCBXeWtlcmRcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8L1NlZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEdyaWQsXHJcbiAgSGVhZGVyLFxyXG4gIEljb24sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNb2RhbCxcclxuICBMaXN0LFxyXG4gIE1lbnUsXHJcbiAgUmVzcG9uc2l2ZSxcclxuICBTZWdtZW50LFxyXG4gIFNpZGViYXIsXHJcbiAgVmlzaWJpbGl0eSxcclxuICBUcmFuc2l0aW9uXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcblxyXG4vLyBIZWFkcyB1cCFcclxuLy8gV2UgdXNpbmcgUmVhY3QgU3RhdGljIHRvIHByZXJlbmRlciBvdXIgZG9jcyB3aXRoIHNlcnZlciBzaWRlIHJlbmRlcmluZywgdGhpcyBpcyBhIHF1aXRlIHNpbXBsZSBzb2x1dGlvbi5cclxuLy8gRm9yIG1vcmUgYWR2YW5jZWQgdXNhZ2UgcGxlYXNlIGNoZWNrIFJlc3BvbnNpdmUgZG9jcyB1bmRlciB0aGUgXCJVc2FnZVwiIHNlY3Rpb24uXHJcbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuXHJcbiAgcmV0dXJuIGlzU1NSID8gUmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRoIDogd2luZG93LmlubmVyV2lkdGhcclxufVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG4vKiBIZWFkcyB1cCEgSG9tZXBhZ2VIZWFkaW5nIHVzZXMgaW5saW5lIHN0eWxpbmcsIGhvd2V2ZXIgaXQncyBub3QgdGhlIGJlc3QgcHJhY3RpY2UuIFVzZSBDU1Mgb3Igc3R5bGVkIGNvbXBvbmVudHMgZm9yXHJcbiAqIHN1Y2ggdGhpbmdzLlxyXG4gKi9cclxuY29uc3QgSG9tZXBhZ2VIZWFkaW5nID0gKHsgbW9iaWxlIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgY29udGVudD0nTW9uZXknXHJcbiAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcyZW0nIDogJzRlbScsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgIG1hcmdpblRvcDogbW9iaWxlID8gJzEuNWVtJyA6ICczZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBhcz0naDInXHJcbiAgICAgICAgY29udGVudD0nTWFrZSBhIGxvdCAoIHNvIG11Y2ggKSBvZiBpdC4nXHJcbiAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IG1vYmlsZSA/ICcxLjVlbScgOiAnMS43ZW0nLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcwLjVlbScgOiAnMS41ZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgPE1vZGFsIFxyXG4gICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzaXplPSdodWdlJz5cclxuICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICA8SWNvbiBuYW1lPSdyaWdodCBhcnJvdycgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG5cclxuICBcclxufVxyXG5cclxuSG9tZXBhZ2VIZWFkaW5nLnByb3BUeXBlcyA9IHtcclxuICBtb2JpbGU6IFByb3BUeXBlcy5ib29sLFxyXG59XHJcblxyXG4vKiBIZWFkcyB1cCFcclxuICogTmVpdGhlciBTZW1hbnRpYyBVSSBub3IgU2VtYW50aWMgVUkgUmVhY3Qgb2ZmZXIgYSByZXNwb25zaXZlIG5hdmJhciwgaG93ZXZlciwgaXQgY2FuIGJlIGltcGxlbWVudGVkIGVhc2lseS5cclxuICogSXQgY2FuIGJlIG1vcmUgY29tcGxpY2F0ZWQsIGJ1dCB5b3UgY2FuIGNyZWF0ZSByZWFsbHkgZmxleGlibGUgbWFya3VwLlxyXG4gKi9cclxuY2xhc3MgRGVza3RvcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fVxyXG4gIG5ld0lkID0ge3NhbXBsZVN0YXRlOiAnaGVsbG8gd29ybGQnfTtcclxuXHJcblxyXG4gIGhpZGVGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IGZhbHNlIH0pXHJcbiAgc2hvd0ZpeGVkTWVudSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmaXhlZDogdHJ1ZSB9KVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3Qgc2V0TmV3SWQgPSBzYW1wbGVTdGF0ZSA9PiB0aGlzLnNldFN0YXRlKHsgc2FtcGxlU3RhdGUgfSk7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlc3BvbnNpdmUgZ2V0V2lkdGg9e2dldFdpZHRofSBtaW5XaWR0aD17UmVzcG9uc2l2ZS5vbmx5VGFibGV0Lm1pbldpZHRofT5cclxuICAgICAgICA8VmlzaWJpbGl0eVxyXG4gICAgICAgICAgb25jZT17ZmFsc2V9XHJcbiAgICAgICAgICBvbkJvdHRvbVBhc3NlZD17dGhpcy5zaG93Rml4ZWRNZW51fVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWRSZXZlcnNlPXt0aGlzLmhpZGVGaXhlZE1lbnV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogNzAwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICBmaXhlZD17Zml4ZWQgPyAndG9wJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgaW52ZXJ0ZWQ9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBwb2ludGluZz17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeT17IWZpeGVkfVxyXG4gICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnPkFkaXZzZWQgSW52ZXN0bWVudDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEljb24gbmFtZT0nYXJyb3cgZG93bicgc2l6ZT0nbWFzc2l2ZScgLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L1Zpc2liaWxpdHk+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICA8L1Jlc3BvbnNpdmU+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5EZXNrdG9wQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNsYXNzIE1vYmlsZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7fVxyXG5cclxuICBoYW5kbGVTaWRlYmFySGlkZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3BlbmVkOiBmYWxzZSB9KVxyXG5cclxuICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogdHJ1ZSB9KVxyXG5cclxuICAvKlxyXG5cclxuICA8UmVzcG9uc2l2ZVxyXG4gICAgICAgIGFzPXtTaWRlYmFyLlB1c2hhYmxlfVxyXG4gICAgICAgIGdldFdpZHRoPXtnZXRXaWR0aH1cclxuICAgICAgICBtYXhXaWR0aD17UmVzcG9uc2l2ZS5vbmx5TW9iaWxlLm1heFdpZHRofVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgIGFzPXtNZW51fVxyXG4gICAgICAgICAgYW5pbWF0aW9uPSdwdXNoJ1xyXG4gICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVTaWRlYmFySGlkZX1cclxuICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICB2aXNpYmxlPXtzaWRlYmFyT3BlbmVkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9J2EnIGFjdGl2ZT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz5QZXJzb25hbDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU2lkZWJhcj5cclxuXHJcbiAgICAgICAgPFNpZGViYXIuUHVzaGVyIGRpbW1lZD17c2lkZWJhck9wZW5lZH0+XHJcbiAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAzNTAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyBtb2JpbGUgLz5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TaWRlYmFyLlB1c2hlcj5cclxuICAgICAgPC9SZXNwb25zaXZlPlxyXG5cclxuICAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHNpZGViYXJPcGVuZWQgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHsgZml4ZWQgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDM1MCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICA8SG9tZXBhZ2VIZWFkaW5nIG1vYmlsZS8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuTW9iaWxlQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn1cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmVDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxEZXNrdG9wQ29udGFpbmVyPntjaGlsZHJlbn08L0Rlc2t0b3BDb250YWluZXI+XHJcbiAgICA8TW9iaWxlQ29udGFpbmVyPntjaGlsZHJlbn08L01vYmlsZUNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuUmVzcG9uc2l2ZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jb25zdCBIb21lcGFnZUxheW91dCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW25ld0lkLCBzZXROZXdJZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5CYXpjYWw8L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICcwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICAgIDxHcmlkIGNlbGxlZD0naW50ZXJuYWxseScgY29sdW1ucz0nZXF1YWwnIHN0YWNrYWJsZT5cclxuICAgICAgICAgIDxHcmlkLlJvdyB0ZXh0QWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNWVtJywgcGFkZGluZ1RvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIFwiYmVzdCB0aGluZyBldmVyXCJcclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGI+U2ltb248L2I+IHwgbGl0ZXJhbGx5IHNpbW9uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnNWVtJywgcGFkZGluZ1RvcDogJzVlbScgfX0+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIFwidmVyeSBjb29sXCJcclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+bGl0ZXJhbGx5IGV2ZXJ5b25lPC9wPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnOGVtIDBlbScgfX0gdmVydGljYWw+XHJcbiAgICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgQmF6YWFyIEJvdHMgTWFrZSBCaWcgTW9uZXlcclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICBHb3QgYm9yZWQgb2YgSVJMIHRyYWRpbmc/IFdlbGwsIHRoaXMgZG9lc24ndCBtYWtlIGFzIG11Y2ggbW9uZXksIHNvcnJ5LCBidXQgaXRzIGNsb3NlISBWZXJ5IGNsb3NlIGluZGVlZC4gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICBHZXQgTXkgUGVyc29uYWwgU3RyYXRlZ3lcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuXHJcblxyXG4gICAgICAgICAgPERpdmlkZXJcclxuICAgICAgICAgICAgYXM9J2g0J1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlcidcclxuICAgICAgICAgICAgaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICczZW0gMGVtJywgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgaHJlZj0nIyc+Q2FzZSBTdHVkaWVzPC9hPlxyXG4gICAgICAgICAgPC9EaXZpZGVyPlxyXG5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIERpZCBJIG1lbnRpb24gaG93IG11Y2ggbW9uZXkgeW91J2xsIG1ha2U/XHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgWW91IHdpbGwgbWFrZSBzbyBtdWNoIG1vbmV5LCBzbyBtdWNoLCBhIGxvdC4gVGhlIGFtb3VudCBvZiBtb25leSB5b3UnbGwgbWFrZSBpcyB2ZXJ5IGJpZy4gSSBhc3N1cmUgeW91IHRoYXQgaXQgd2lsbCBiZSB2ZXJ5IGJpZy4gSSdtIGRlZmluaXRlbHkgbm90IHdyaXRpbmcgdGhpcyBqdXN0IHRvIGZpbGwgc3BhY2UuXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgSSdtIEludGVyZXN0ZWQsIEdvIG9uLi4uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgIDxTZWdtZW50IGludmVydGVkIHZlcnRpY2FsIHN0eWxlPXt7IHBhZGRpbmc6ICc1ZW0gMGVtJyB9fT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWQgZGl2aWRlZCBpbnZlcnRlZCBzdGFja2FibGU+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J0FjdHVhbCBMaW5rcycgLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0IGxpbmsgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkNvbWluZyBTb29uICggQ29taW5nIFNvb24gKWo8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+TWFya2V0IENyYXNoICggQ29taW5nIFNvb24gKTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+QWR2aXNlZCBJbnZlc3RtZW50PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJyBocmVmPVwiL1wiPkhvbWU8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nU2VydmljZXMnIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5CYW5hbmEgUHJlLU9yZGVyPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkROQSBGQVE8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+SG93IFRvIEFjY2VzczwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5GYXZvcml0ZSBYLU1lbjwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs3fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g0JyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgIOKdpO+4j1xyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBidWlsdCB3aXRoIOKdpO+4jyBieSA8YSBocmVmPVwiaHR0cHM6Ly9wbGFuY2tlLmlvL2h5cGl4ZWwvcGxheWVyL3N0YXRzL0ZvcmdpbmdNZXRhbFwiPkZvcmdpbmdNZXRhbDwvYT48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgVXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9XeWtlcmQvYmF6Y2FsXCI+QmF6Y2FsPC9hPiBieSBWZW50IGFuZCBOZXJ0XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuLypcclxuXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPE1lbnUgaW52ZXJ0ZWQgcG9pbnRpbmcgc2Vjb25kYXJ5IHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdzaWRlYmFyJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHBvc2l0aW9uPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgaW52ZXJ0ZWQgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzAuNWVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiovXHJcblxyXG4vKlxyXG4gICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3RhY2thYmxlIHZlcnRpY2FsQWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBIZWxwIENvbXBhbmllcyBhbmQgQ29tcGFuaW9uc1xyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgIFdlIGNhbiBnaXZlIHlvdXIgY29tcGFueSBzdXBlcnBvd2VycyB0byBkbyB0aGluZ3MgdGhhdCB0aGV5IG5ldmVyIHRob3VnaHQgcG9zc2libGUuXHJcbiAgICAgICAgICAgICAgTGV0IHVzIGRlbGlnaHQgeW91ciBjdXN0b21lcnMgYW5kIGVtcG93ZXIgeW91ciBuZWVkcy4uLiB0aHJvdWdoIHB1cmUgZGF0YSBhbmFseXRpY3MuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEhlYWRlciBhcz0naDMnIHN0eWxlPXt7IGZvbnRTaXplOiAnMmVtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBNYWtlIEJhbmFuYXMgVGhhdCBDYW4gRGFuY2VcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBZZXMgdGhhdCdzIHJpZ2h0LCB5b3UgdGhvdWdodCBpdCB3YXMgdGhlIHN0dWZmIG9mIGRyZWFtcywgYnV0IGV2ZW4gYmFuYW5hcyBjYW4gYmVcclxuICAgICAgICAgICAgICBiaW9lbmdpbmVlcmVkLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBib3JkZXJlZCByb3VuZGVkIHNpemU9J2xhcmdlJyBzcmM9Jy9pbWFnZXMvd2lyZWZyYW1lL3doaXRlLWltYWdlLnBuZycgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J2h1Z2UnPkNoZWNrIFRoZW0gT3V0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvU2VnbWVudD5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlTGF5b3V0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==