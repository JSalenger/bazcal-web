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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  }, "Gimme Money"))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }
  }));
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

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInBhZGRpbmciLCJnZXRXaWR0aCIsImlzU1NSIiwiUmVzcG9uc2l2ZSIsIm9ubHlUYWJsZXQiLCJtaW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJIb21lcGFnZUhlYWRpbmciLCJtb2JpbGUiLCJuZXdJZCIsInNldE5ld0lkIiwidXNlU3RhdGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIkRlc2t0b3BDb250YWluZXIiLCJDb21wb25lbnQiLCJzYW1wbGVTdGF0ZSIsInNldFN0YXRlIiwiZml4ZWQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzaG93Rml4ZWRNZW51IiwiaGlkZUZpeGVkTWVudSIsIm1pbkhlaWdodCIsIm5vZGUiLCJNb2JpbGVDb250YWluZXIiLCJzaWRlYmFyT3BlbmVkIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkhvbWVwYWdlTGF5b3V0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJ0ZXh0VHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7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LGtCQUZkO0FBR0UsWUFBUSxFQUFHSSxDQUFELElBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixDQURGLENBUEYsRUFxQkUsTUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsTUFBTUMsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQWVYLEtBQTNCLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FyQkYsQ0FsREYsQ0FERixDQTdCRixFQTRHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1R0YsQ0FERjtBQWlIRCxDQXJIRDtBQXVIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ2UrQiw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hjQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkZXIsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBMaXN0LFxyXG4gIFRhYmxlLFxyXG4gIExhYmVsLFxyXG4gIE1lbnUsXHJcbiAgUmVzcG9uc2l2ZSxcclxuICBTZWdtZW50LFxyXG4gIFNpZGViYXIsXHJcbiAgVmlzaWJpbGl0eSxcclxufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBwYWRkaW5nOiAnNWVtIDBlbScgfX0+XHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoNCcgY29udGVudD0nQWN0dWFsIExpbmtzJyAvPlxyXG4gICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkZsaXAgYW5kIENyYWZ0PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+TWFya2V0IENyYXNoPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+UGVyc29uYWwgSW52ZXN0bWVudDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnIGhyZWY9XCIvXCI+SG9tZTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXszfT5cclxuICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J1NlcnZpY2VzJyAvPlxyXG4gICAgICAgICAgICA8TGlzdCBsaW5rIGludmVydGVkPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkJhbmFuYSBQcmUtT3JkZXI8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFzPSdhJz5ETkEgRkFRPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcz0nYSc+SG93IFRvIEFjY2VzczwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXM9J2EnPkZhdm9yaXRlIFgtTWVuPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPSdoNCcgaW52ZXJ0ZWQ+XHJcbiAgICAgICAgICAgICAgRm9vdGVyIEhlYWRlclxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2Vic2l0ZSBidWlsdCB3aXRoIOKdpO+4jyBieSA8YSBocmVmPVwiaHR0cHM6Ly9wbGFuY2tlLmlvL2h5cGl4ZWwvcGxheWVyL3N0YXRzL0ZvcmdpbmdNZXRhbFwiPkZvcmdpbmdNZXRhbDwvYT48YnIgLz5cclxuICAgICAgICAgICAgICBVc2luZyBCYXpjYWwgYnkgVmVudCBhbmQgV3lrZXJkXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgPC9TZWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRGl2aWRlcixcclxuICBHcmlkLFxyXG4gIEhlYWRlcixcclxuICBJY29uLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgTW9kYWwsXHJcbiAgTGlzdCxcclxuICBNZW51LFxyXG4gIFJlc3BvbnNpdmUsXHJcbiAgU2VnbWVudCxcclxuICBTaWRlYmFyLFxyXG4gIFZpc2liaWxpdHksXHJcbiAgVHJhbnNpdGlvblxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5cclxuLy8gSGVhZHMgdXAhXHJcbi8vIFdlIHVzaW5nIFJlYWN0IFN0YXRpYyB0byBwcmVyZW5kZXIgb3VyIGRvY3Mgd2l0aCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIHRoaXMgaXMgYSBxdWl0ZSBzaW1wbGUgc29sdXRpb24uXHJcbi8vIEZvciBtb3JlIGFkdmFuY2VkIHVzYWdlIHBsZWFzZSBjaGVjayBSZXNwb25zaXZlIGRvY3MgdW5kZXIgdGhlIFwiVXNhZ2VcIiBzZWN0aW9uLlxyXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcclxuICBjb25zdCBpc1NTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG4gIHJldHVybiBpc1NTUiA/IFJlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuLyogSGVhZHMgdXAhIEhvbWVwYWdlSGVhZGluZyB1c2VzIGlubGluZSBzdHlsaW5nLCBob3dldmVyIGl0J3Mgbm90IHRoZSBiZXN0IHByYWN0aWNlLiBVc2UgQ1NTIG9yIHN0eWxlZCBjb21wb25lbnRzIGZvclxyXG4gKiBzdWNoIHRoaW5ncy5cclxuICovXHJcbmNvbnN0IEhvbWVwYWdlSGVhZGluZyA9ICh7IG1vYmlsZSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01vbmV5J1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMmVtJyA6ICc0ZW0nLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IG1vYmlsZSA/ICcxLjVlbScgOiAnM2VtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgYXM9J2gyJ1xyXG4gICAgICAgIGNvbnRlbnQ9J01ha2UgYSBsb3QgKCBzbyBtdWNoICkgb2YgaXQuJ1xyXG4gICAgICAgIGludmVydGVkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBtb2JpbGUgPyAnMS41ZW0nIDogJzEuN2VtJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgbWFyZ2luVG9wOiBtb2JpbGUgPyAnMC41ZW0nIDogJzEuNWVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDxNb2RhbCBcclxuICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc2l6ZT0naHVnZSc+XHJcbiAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgPEljb24gbmFtZT0ncmlnaHQgYXJyb3cnIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxuXHJcbiAgXHJcbn1cclxuXHJcbkhvbWVwYWdlSGVhZGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuLyogSGVhZHMgdXAhXHJcbiAqIE5laXRoZXIgU2VtYW50aWMgVUkgbm9yIFNlbWFudGljIFVJIFJlYWN0IG9mZmVyIGEgcmVzcG9uc2l2ZSBuYXZiYXIsIGhvd2V2ZXIsIGl0IGNhbiBiZSBpbXBsZW1lbnRlZCBlYXNpbHkuXHJcbiAqIEl0IGNhbiBiZSBtb3JlIGNvbXBsaWNhdGVkLCBidXQgeW91IGNhbiBjcmVhdGUgcmVhbGx5IGZsZXhpYmxlIG1hcmt1cC5cclxuICovXHJcbmNsYXNzIERlc2t0b3BDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge31cclxuICBuZXdJZCA9IHtzYW1wbGVTdGF0ZTogJ2hlbGxvIHdvcmxkJ307XHJcblxyXG5cclxuICBoaWRlRml4ZWRNZW51ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiBmYWxzZSB9KVxyXG4gIHNob3dGaXhlZE1lbnUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRydWUgfSlcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHNldE5ld0lkID0gc2FtcGxlU3RhdGUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNhbXBsZVN0YXRlIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBmaXhlZCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZXNwb25zaXZlIGdldFdpZHRoPXtnZXRXaWR0aH0gbWluV2lkdGg9e1Jlc3BvbnNpdmUub25seVRhYmxldC5taW5XaWR0aH0+XHJcbiAgICAgICAgPFZpc2liaWxpdHlcclxuICAgICAgICAgIG9uY2U9e2ZhbHNlfVxyXG4gICAgICAgICAgb25Cb3R0b21QYXNzZWQ9e3RoaXMuc2hvd0ZpeGVkTWVudX1cclxuICAgICAgICAgIG9uQm90dG9tUGFzc2VkUmV2ZXJzZT17dGhpcy5oaWRlRml4ZWRNZW51fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDcwMCwgcGFkZGluZzogJzFlbSAwZW0nIH19XHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgZml4ZWQ9e2ZpeGVkID8gJ3RvcCcgOiBudWxsfVxyXG4gICAgICAgICAgICAgIGludmVydGVkPXshZml4ZWR9XHJcbiAgICAgICAgICAgICAgcG9pbnRpbmc9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnk9eyFmaXhlZH1cclxuICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJz5BZGl2c2VkIEludmVzdG1lbnQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5Db2luczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIENvaW5zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0lkKGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWwuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcGVyc29uYWwvJyArIG5ld0lkKX0+R2ltbWUgTW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9J2Fycm93IGRvd24nIHNpemU9J21hc3NpdmUnIC8+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9WaXNpYmlsaXR5PlxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9SZXNwb25zaXZlPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuRGVza3RvcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jbGFzcyBNb2JpbGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge31cclxuXHJcbiAgaGFuZGxlU2lkZWJhckhpZGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW5lZDogZmFsc2UgfSlcclxuXHJcbiAgaGFuZGxlVG9nZ2xlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJPcGVuZWQ6IHRydWUgfSlcclxuXHJcbiAgLypcclxuXHJcbiAgPFJlc3BvbnNpdmVcclxuICAgICAgICBhcz17U2lkZWJhci5QdXNoYWJsZX1cclxuICAgICAgICBnZXRXaWR0aD17Z2V0V2lkdGh9XHJcbiAgICAgICAgbWF4V2lkdGg9e1Jlc3BvbnNpdmUub25seU1vYmlsZS5tYXhXaWR0aH1cclxuICAgICAgPlxyXG4gICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICBhcz17TWVudX1cclxuICAgICAgICAgIGFuaW1hdGlvbj0ncHVzaCdcclxuICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlU2lkZWJhckhpZGV9XHJcbiAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgdmlzaWJsZT17c2lkZWJhck9wZW5lZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGFzPSdhJyBhY3RpdmU+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBhcz0nYSc+UGVyc29uYWw8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1NpZGViYXI+XHJcblxyXG4gICAgICAgIDxTaWRlYmFyLlB1c2hlciBkaW1tZWQ9e3NpZGViYXJPcGVuZWR9PlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMzUwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxIb21lcGFnZUhlYWRpbmcgbW9iaWxlIC8+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvU2lkZWJhci5QdXNoZXI+XHJcbiAgICAgIDwvUmVzcG9uc2l2ZT5cclxuXHJcbiAgKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBzaWRlYmFyT3BlbmVkIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7IGZpeGVkIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAzNTAsIHBhZGRpbmc6ICcxZW0gMGVtJyB9fVxyXG4gICAgICAgICAgdmVydGljYWxcclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPEhvbWVwYWdlSGVhZGluZyBtb2JpbGUvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbk1vYmlsZUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59XHJcblxyXG5jb25zdCBSZXNwb25zaXZlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8RGVza3RvcENvbnRhaW5lcj57Y2hpbGRyZW59PC9EZXNrdG9wQ29udGFpbmVyPlxyXG4gICAgPE1vYmlsZUNvbnRhaW5lcj57Y2hpbGRyZW59PC9Nb2JpbGVDb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblJlc3BvbnNpdmVDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufVxyXG5cclxuY29uc3QgSG9tZXBhZ2VMYXlvdXQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtuZXdJZCwgc2V0TmV3SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QmF6Y2FsPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8U2VnbWVudCBzdHlsZT17eyBwYWRkaW5nOiAnMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgICA8R3JpZCBjZWxsZWQ9J2ludGVybmFsbHknIGNvbHVtbnM9J2VxdWFsJyBzdGFja2FibGU+XHJcbiAgICAgICAgICA8R3JpZC5Sb3cgdGV4dEFsaWduPSdjZW50ZXInPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzVlbScsIHBhZGRpbmdUb3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICBcImJlc3QgdGhpbmcgZXZlclwiXHJcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlNpbW9uPC9iPiB8IGxpdGVyYWxseSBzaW1vblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzVlbScsIHBhZGRpbmdUb3A6ICc1ZW0nIH19PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICBcInZlcnkgY29vbFwiXHJcbiAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PmxpdGVyYWxseSBldmVyeW9uZTwvcD5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgPFNlZ21lbnQgc3R5bGU9e3sgcGFkZGluZzogJzhlbSAwZW0nIH19IHZlcnRpY2FsPlxyXG4gICAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgIEJhemFhciBCb3RzIE1ha2UgQmlnIE1vbmV5XHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgR290IGJvcmVkIG9mIElSTCB0cmFkaW5nPyBXZWxsLCB0aGlzIGRvZXNuJ3QgbWFrZSBhcyBtdWNoIG1vbmV5LCBzb3JyeSwgYnV0IGl0cyBjbG9zZSEgVmVyeSBjbG9zZSBpbmRlZWQuIFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPE1vZGFsIFxyXG4gICAgICAgICAgICB0cmlnZ2VyPXsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBhcz0nYScgc2l6ZT0nbGFyZ2UnPlxyXG4gICAgICAgICAgICAgICAgR2V0IE15IFBlcnNvbmFsIFN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+Q29pbnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBDb2luc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdJZChlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3BlcnNvbmFsLycgKyBuZXdJZCl9PkdpbW1lIE1vbmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyXHJcbiAgICAgICAgICAgIGFzPSdoNCdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXInXHJcbiAgICAgICAgICAgIGhvcml6b250YWxcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnM2VtIDBlbScsIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPkNhc2UgU3R1ZGllczwvYT5cclxuICAgICAgICAgIDwvRGl2aWRlcj5cclxuXHJcbiAgICAgICAgICA8SGVhZGVyIGFzPSdoMycgc3R5bGU9e3sgZm9udFNpemU6ICcyZW0nIH19PlxyXG4gICAgICAgICAgICBEaWQgSSBtZW50aW9uIGhvdyBtdWNoIG1vbmV5IHlvdSdsbCBtYWtlP1xyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgIFlvdSB3aWxsIG1ha2Ugc28gbXVjaCBtb25leSwgc28gbXVjaCwgYSBsb3QuIFRoZSBhbW91bnQgb2YgbW9uZXkgeW91J2xsIG1ha2UgaXMgdmVyeSBiaWcuIEkgYXNzdXJlIHlvdSB0aGF0IGl0IHdpbGwgYmUgdmVyeSBiaWcuIEknbSBkZWZpbml0ZWx5IG5vdCB3cml0aW5nIHRoaXMganVzdCB0byBmaWxsIHNwYWNlLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxNb2RhbCBcclxuICAgICAgICAgICAgdHJpZ2dlcj17ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIHNpemU9J2xhcmdlJz5cclxuICAgICAgICAgICAgICAgIEknbSBJbnRlcmVzdGVkLCBHbyBvbi4uLlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6ICcxLjMzZW0nIH19PkNvaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgQ29pbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3SWQoZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9wZXJzb25hbC8nICsgbmV3SWQpfT5HaW1tZSBNb25leTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+IFxyXG4gICAgICBcclxuICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbi8qXHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxNZW51IGludmVydGVkIHBvaW50aW5nIHNlY29uZGFyeSBzaXplPSdsYXJnZSc+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0nc2lkZWJhcicgLz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPSdhJyBpbnZlcnRlZD5cclxuICAgICAgICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9J2EnIGludmVydGVkIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcwLjVlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4qL1xyXG5cclxuLypcclxuICAgIDxTZWdtZW50IHN0eWxlPXt7IHBhZGRpbmc6ICc4ZW0gMGVtJyB9fSB2ZXJ0aWNhbD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHN0YWNrYWJsZSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgSGVscCBDb21wYW5pZXMgYW5kIENvbXBhbmlvbnNcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4zM2VtJyB9fT5cclxuICAgICAgICAgICAgICBXZSBjYW4gZ2l2ZSB5b3VyIGNvbXBhbnkgc3VwZXJwb3dlcnMgdG8gZG8gdGhpbmdzIHRoYXQgdGhleSBuZXZlciB0aG91Z2h0IHBvc3NpYmxlLlxyXG4gICAgICAgICAgICAgIExldCB1cyBkZWxpZ2h0IHlvdXIgY3VzdG9tZXJzIGFuZCBlbXBvd2VyIHlvdXIgbmVlZHMuLi4gdGhyb3VnaCBwdXJlIGRhdGEgYW5hbHl0aWNzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2gzJyBzdHlsZT17eyBmb250U2l6ZTogJzJlbScgfX0+XHJcbiAgICAgICAgICAgICAgV2UgTWFrZSBCYW5hbmFzIFRoYXQgQ2FuIERhbmNlXHJcbiAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzEuMzNlbScgfX0+XHJcbiAgICAgICAgICAgICAgWWVzIHRoYXQncyByaWdodCwgeW91IHRob3VnaHQgaXQgd2FzIHRoZSBzdHVmZiBvZiBkcmVhbXMsIGJ1dCBldmVuIGJhbmFuYXMgY2FuIGJlXHJcbiAgICAgICAgICAgICAgYmlvZW5naW5lZXJlZC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPSdyaWdodCcgd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgYm9yZGVyZWQgcm91bmRlZCBzaXplPSdsYXJnZScgc3JjPScvaW1hZ2VzL3dpcmVmcmFtZS93aGl0ZS1pbWFnZS5wbmcnIC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdodWdlJz5DaGVjayBUaGVtIE91dDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L1NlZ21lbnQ+XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZUxheW91dCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=