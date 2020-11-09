/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"server": 0
/******/ 	};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + chunkId + ".style.css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./js/" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path")

// cont env = 'prod';
const env = 'staging';


const client = env==='staging' ? {
  id: '57e4b76f-6168-41af-bdd8-c76a2e5bf798',
  domainName: 'staging-hoichoitv.viewlift.com',
  apiKey: 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S'
}: {
  id: '57e4b76f-6168-41af-bdd8-c76a2e5bf798',
  domainName: 'hoichoi.tv',
  apiKey: 'BkSBbok02k6RYUlCLRzI23wac0euoSfC3FP7uW2S'
}

const {id, domainName, apiKey} = client

module.exports = {
  apiProxy: `https://${env}-api.viewlift.com`,
  static: 'public',
  apiKey,
  layoutUrlBase: `https://appcms${env}.viewlift.com/`,
  siteConfigUrl: `https://appcms${env}.viewlift.com/${id}/main.json`,
  siteInfoCachedUrl: `https://${env}-api.viewlift.com/content/sites?domainName=${domainName}`,
  siteConfigWebUrl: `https://appcmsstaging.viewlift.com/${id}/web.json?version=0.11140.0`,
  pageUrl: `https://${env}-api.viewlift.com/content/pages`,
  moduleList: `https://appcms${env}.viewlift.com/${id}/web/3385ad06-ed4d-419a-a54b-1391ee7d38f2.json`,
  internalName: 'staging-hoichoitv'
} 

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyLoad */ "./src/client/lazyLoad.js");
/* harmony import */ var _tools_globalFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/globalFunc */ "./src/client/tools/globalFunc.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyLoadModules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyLoadModules */ "./src/client/LazyLoadModules.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setListenner", function () {
      window.addEventListener('wheel', Object(_tools_globalFunc__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this.handleScroll, 50), {
        passive: false
      });
      window.addEventListener('touchmove', Object(_tools_globalFunc__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this.handleScroll, 50), {
        passive: false
      });
      window.addEventListener('scroll', Object(_tools_globalFunc__WEBPACK_IMPORTED_MODULE_3__["debounce"])(_this.handleScroll, 50), {
        passive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      event && event.preventDefault();

      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight && !_this.state.loading) {
        console.log('app scroll listener');

        if (_this.state.components.length < _this.state.totalPageModules) {
          _this.setState({
            offset: _this.state.components.length + _this.state.newComponents.length,
            loading: true
          });

          _this.loadNextComponents();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadNextComponents", function () {
      return axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: 'GET',
        url: _config__WEBPACK_IMPORTED_MODULE_4___default.a.pageUrl,
        headers: {
          'x-api-key': _config__WEBPACK_IMPORTED_MODULE_4___default.a.apiKey
        },
        params: {
          path: '/vamp/home',
          site: _config__WEBPACK_IMPORTED_MODULE_4___default.a.internalName,
          includeContent: true,
          moduleOffset: _this.state.offset,
          moduleLimit: 4,
          languageCode: 'default',
          countryCode: 'IN'
        }
      }).then(function (res) {
        _this.setState(function (st) {
          return {
            newComponents: _toConsumableArray(res.data.modules)
          };
        });

        console.log('State updated.', _this.state.newComponents);
      }).then(function () {
        return _this.setState({
          loading: false
        });
      })["catch"](function (err) {
        return console.log(err.message);
      });
    });

    _this.state = {
      loading: false,
      limit: 4,
      components: [],
      offset: 0,
      totalPageModules: 0,
      newComponents: []
    };
    _this.initComp = _this.props.moduleList.moduleList.slice(0, 4);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        components: this.props.page.modules,
        totalPageModules: this.props.moduleList.moduleList.length
      });
      this.setListenner();
      console.log(this.state.components); // this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_lazyLoad__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(this.initComp, this.state.components), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LazyLoadModules__WEBPACK_IMPORTED_MODULE_5__["default"], {
        components: this.state.components,
        moduleList: this.props.moduleList.moduleList,
        offset: 4
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/client/LazyLoadModules.js":
/*!***************************************!*\
  !*** ./src/client/LazyLoadModules.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_globalFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/globalFunc */ "./src/client/tools/globalFunc.js");
/* harmony import */ var _lazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyLoad */ "./src/client/lazyLoad.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Loader */ "./src/client/components/Loader/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // custom





var LazyLoadModules = function LazyLoadModules(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasLoaded = _useState4[0],
      setHasLoaded = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      newModules = _useState6[0],
      setNewModules = _useState6[1];

  var moreToloadData = true;
  var offset = props.offset;
  var moduleToLoadOnLazy = 4;
  var moduleList = props.moduleList;
  var components = props.components;

  var loadData = function loadData() {
    console.log('I will load module.');
    console.log('and also remove scroll listner to avoid multiple listners.');
    moreToloadData = false;
    setLoading(true);
    setTimeout(function () {
      ['wheel', 'touchmove', 'scroll'].forEach(function (e) {
        window.removeEventListener(e, handleScroll);
      }, 500);
      var newModuleData = moduleList.slice(parseInt(offset), parseInt(offset) + moduleToLoadOnLazy);

      if (newModuleData.length) {
        setNewModules(moduleList.slice(parseInt(offset), parseInt(offset) + moduleToLoadOnLazy));
        setLoading(false);
        setHasLoaded(true);
      } else {
        console.log('no more data');
        setHasLoaded(false);
      }
    });
  };

  var isBottomOfPage = function isBottomOfPage() {
    return window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight;
  };

  var handleScroll = function handleScroll(event) {
    event && event.preventDefault();

    if (isBottomOfPage() && moreToloadData) {
      // if (this.scrollOffset !== this.offset && this.activateScroll) {
      loadData(); // }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('Adding eventlisteners');
    ['wheel', 'touchmove', 'scroll'].forEach(function (e) {
      window.addEventListener(e, Object(_tools_globalFunc__WEBPACK_IMPORTED_MODULE_1__["debounce"])(handleScroll, 50), {
        passive: false
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null), newModules.length !== 0 ? Object(_lazyLoad__WEBPACK_IMPORTED_MODULE_2__["loadModules"])(newModules, components) : '', hasLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LazyLoadModules, {
    components: components,
    moduleList: moduleList,
    offset: offset + moduleToLoadOnLazy
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LazyLoadModules);

/***/ }),

/***/ "./src/client/components lazy recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./src/client/components lazy ^\.\/.*$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Banner": [
		"./src/client/components/Banner/index.js",
		9,
		0,
		5
	],
	"./Banner/": [
		"./src/client/components/Banner/index.js",
		9,
		0,
		5
	],
	"./Banner/index": [
		"./src/client/components/Banner/index.js",
		9,
		0,
		5
	],
	"./Banner/index.js": [
		"./src/client/components/Banner/index.js",
		9,
		0,
		5
	],
	"./Banner/styles.css": [
		"./src/client/components/Banner/styles.css",
		7,
		16
	],
	"./BigPoster": [
		"./src/client/components/BigPoster/index.js",
		9,
		0,
		1
	],
	"./BigPoster/": [
		"./src/client/components/BigPoster/index.js",
		9,
		0,
		1
	],
	"./BigPoster/index": [
		"./src/client/components/BigPoster/index.js",
		9,
		0,
		1
	],
	"./BigPoster/index.js": [
		"./src/client/components/BigPoster/index.js",
		9,
		0,
		1
	],
	"./BigPoster/styles.css": [
		"./src/client/components/BigPoster/styles.css",
		7,
		17
	],
	"./BigPosters": [
		"./src/client/components/BigPosters/index.js",
		9,
		0,
		1,
		6
	],
	"./BigPosters/": [
		"./src/client/components/BigPosters/index.js",
		9,
		0,
		1,
		6
	],
	"./BigPosters/index": [
		"./src/client/components/BigPosters/index.js",
		9,
		0,
		1,
		6
	],
	"./BigPosters/index.js": [
		"./src/client/components/BigPosters/index.js",
		9,
		0,
		1,
		6
	],
	"./BigPosters/styles.css": [
		"./src/client/components/BigPosters/styles.css",
		7,
		18
	],
	"./BottomMenuBar": [
		"./src/client/components/BottomMenuBar/index.js",
		9,
		0,
		7
	],
	"./BottomMenuBar/": [
		"./src/client/components/BottomMenuBar/index.js",
		9,
		0,
		7
	],
	"./BottomMenuBar/index": [
		"./src/client/components/BottomMenuBar/index.js",
		9,
		0,
		7
	],
	"./BottomMenuBar/index.js": [
		"./src/client/components/BottomMenuBar/index.js",
		9,
		0,
		7
	],
	"./BottomMenuBar/styles.css": [
		"./src/client/components/BottomMenuBar/styles.css",
		7,
		19
	],
	"./Carousel": [
		"./src/client/components/Carousel/index.js",
		9,
		0,
		3
	],
	"./Carousel/": [
		"./src/client/components/Carousel/index.js",
		9,
		0,
		3
	],
	"./Carousel/index": [
		"./src/client/components/Carousel/index.js",
		9,
		0,
		3
	],
	"./Carousel/index.js": [
		"./src/client/components/Carousel/index.js",
		9,
		0,
		3
	],
	"./Carousel/styles.css": [
		"./src/client/components/Carousel/styles.css",
		7,
		20
	],
	"./CarouselSlide": [
		"./src/client/components/CarouselSlide/index.js",
		9,
		0,
		8
	],
	"./CarouselSlide/": [
		"./src/client/components/CarouselSlide/index.js",
		9,
		0,
		8
	],
	"./CarouselSlide/index": [
		"./src/client/components/CarouselSlide/index.js",
		9,
		0,
		8
	],
	"./CarouselSlide/index.js": [
		"./src/client/components/CarouselSlide/index.js",
		9,
		0,
		8
	],
	"./CarouselSlide/styles.css": [
		"./src/client/components/CarouselSlide/styles.css",
		7,
		21
	],
	"./Footer": [
		"./src/client/components/Footer/index.js",
		9,
		0,
		9
	],
	"./Footer/": [
		"./src/client/components/Footer/index.js",
		9,
		0,
		9
	],
	"./Footer/index": [
		"./src/client/components/Footer/index.js",
		9,
		0,
		9
	],
	"./Footer/index.js": [
		"./src/client/components/Footer/index.js",
		9,
		0,
		9
	],
	"./Footer/styles.css": [
		"./src/client/components/Footer/styles.css",
		7,
		22
	],
	"./Icons": [
		"./src/client/components/Icons/index.js",
		9,
		0
	],
	"./Icons/": [
		"./src/client/components/Icons/index.js",
		9,
		0
	],
	"./Icons/index": [
		"./src/client/components/Icons/index.js",
		9,
		0
	],
	"./Icons/index.js": [
		"./src/client/components/Icons/index.js",
		9,
		0
	],
	"./Icons/styles.css": [
		"./src/client/components/Icons/styles.css",
		7,
		23
	],
	"./Loader": [
		"./src/client/components/Loader/index.js",
		9
	],
	"./Loader/": [
		"./src/client/components/Loader/index.js",
		9
	],
	"./Loader/index": [
		"./src/client/components/Loader/index.js",
		9
	],
	"./Loader/index.js": [
		"./src/client/components/Loader/index.js",
		9
	],
	"./Loader/styles.css": [
		"./src/client/components/Loader/styles.css",
		7
	],
	"./Login": [
		"./src/client/components/Login/index.js",
		9,
		0,
		10
	],
	"./Login/": [
		"./src/client/components/Login/index.js",
		9,
		0,
		10
	],
	"./Login/index": [
		"./src/client/components/Login/index.js",
		9,
		0,
		10
	],
	"./Login/index.js": [
		"./src/client/components/Login/index.js",
		9,
		0,
		10
	],
	"./Login/styles.css": [
		"./src/client/components/Login/styles.css",
		7,
		24
	],
	"./MoboCarousel": [
		"./src/client/components/MoboCarousel/index.js",
		9,
		0,
		11
	],
	"./MoboCarousel/": [
		"./src/client/components/MoboCarousel/index.js",
		9,
		0,
		11
	],
	"./MoboCarousel/index": [
		"./src/client/components/MoboCarousel/index.js",
		9,
		0,
		11
	],
	"./MoboCarousel/index.js": [
		"./src/client/components/MoboCarousel/index.js",
		9,
		0,
		11
	],
	"./MoboCarousel/styles.css": [
		"./src/client/components/MoboCarousel/styles.css",
		7,
		25
	],
	"./Navbar": [
		"./src/client/components/Navbar/index.js",
		9,
		0,
		4
	],
	"./Navbar/": [
		"./src/client/components/Navbar/index.js",
		9,
		0,
		4
	],
	"./Navbar/index": [
		"./src/client/components/Navbar/index.js",
		9,
		0,
		4
	],
	"./Navbar/index.js": [
		"./src/client/components/Navbar/index.js",
		9,
		0,
		4
	],
	"./Navbar/styles.css": [
		"./src/client/components/Navbar/styles.css",
		7,
		26
	],
	"./OriginalSeries": [
		"./src/client/components/OriginalSeries/index.js",
		9,
		0,
		1,
		12
	],
	"./OriginalSeries/": [
		"./src/client/components/OriginalSeries/index.js",
		9,
		0,
		1,
		12
	],
	"./OriginalSeries/index": [
		"./src/client/components/OriginalSeries/index.js",
		9,
		0,
		1,
		12
	],
	"./OriginalSeries/index.js": [
		"./src/client/components/OriginalSeries/index.js",
		9,
		0,
		1,
		12
	],
	"./OriginalSeries/styles.css": [
		"./src/client/components/OriginalSeries/styles.css",
		7,
		27
	],
	"./Slide": [
		"./src/client/components/Slide/index.js",
		7,
		15
	],
	"./Slide/": [
		"./src/client/components/Slide/index.js",
		7,
		15
	],
	"./Slide/index": [
		"./src/client/components/Slide/index.js",
		7,
		15
	],
	"./Slide/index.js": [
		"./src/client/components/Slide/index.js",
		7,
		15
	],
	"./Slide/styles.css": [
		"./src/client/components/Slide/styles.css",
		7,
		28
	],
	"./VideoBanner": [
		"./src/client/components/VideoBanner/index.js",
		9,
		0,
		13
	],
	"./VideoBanner/": [
		"./src/client/components/VideoBanner/index.js",
		9,
		0,
		13
	],
	"./VideoBanner/index": [
		"./src/client/components/VideoBanner/index.js",
		9,
		0,
		13
	],
	"./VideoBanner/index.js": [
		"./src/client/components/VideoBanner/index.js",
		9,
		0,
		13
	],
	"./VideoBanner/styles.css": [
		"./src/client/components/VideoBanner/styles.css",
		7,
		29
	],
	"./VideoTile": [
		"./src/client/components/VideoTile/index.js",
		9,
		0,
		2
	],
	"./VideoTile/": [
		"./src/client/components/VideoTile/index.js",
		9,
		0,
		2
	],
	"./VideoTile/index": [
		"./src/client/components/VideoTile/index.js",
		9,
		0,
		2
	],
	"./VideoTile/index.js": [
		"./src/client/components/VideoTile/index.js",
		9,
		0,
		2
	],
	"./VideoTile/styles.css": [
		"./src/client/components/VideoTile/styles.css",
		7,
		30
	],
	"./VideoTiles": [
		"./src/client/components/VideoTiles/index.js",
		9,
		0,
		2,
		14
	],
	"./VideoTiles/": [
		"./src/client/components/VideoTiles/index.js",
		9,
		0,
		2,
		14
	],
	"./VideoTiles/index": [
		"./src/client/components/VideoTiles/index.js",
		9,
		0,
		2,
		14
	],
	"./VideoTiles/index.js": [
		"./src/client/components/VideoTiles/index.js",
		9,
		0,
		2,
		14
	],
	"./VideoTiles/styles.css": [
		"./src/client/components/VideoTiles/styles.css",
		7,
		31
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/client/components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/client/components/Loader/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Loader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/Loader/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);


function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader-spinner"
  }));
}

/***/ }),

/***/ "./src/client/components/Loader/styles.css":
/*!*************************************************!*\
  !*** ./src/client/components/Loader/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/lazyLoad.js":
/*!********************************!*\
  !*** ./src/client/lazyLoad.js ***!
  \********************************/
/*! exports provided: loadModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModules", function() { return loadModules; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/client/map.js");



var variant = ['', '', '', '', '', 'long', '', 'cube', '', 'extra-wide', '', 'circle', '', 'genre', 'series', 'new-release', 'original-series', '', ''];
var loadModules = function loadModules(layout, modules) {
  // return null;
  var contentData = {};
  var CarouselData = modules.find(function (_ref) {
    var id = _ref.id;
    return id === '3f0f4c42-b040-4fab-9b3c-ab2135b107db';
  });
  var VideoTileData = modules.find(function (_ref2) {
    var id = _ref2.id;
    return id === 'aa967100-0b45-458c-853a-7963292fe3ca';
  }); // const VideoTileData2 = modules.find(({ id }) => id === 'acb52d48-40b2-46d8-a519-9e385cb3b4ee')

  var VideoTileData2 = modules.find(function (_ref3) {
    var id = _ref3.id;
    return id === 'aa967100-0b45-458c-853a-7963292fe3ca';
  });
  console.log({
    CarouselData: CarouselData,
    VideoTileData: VideoTileData,
    VideoTileData2: VideoTileData2
  });
  return layout.map(function (layoutData, idx) {
    console.log('idx', idx);
    var id = layoutData.id,
        blockName = layoutData.blockName;
    console.log({
      id: id
    });
    var moduleName = _map__WEBPACK_IMPORTED_MODULE_2__["default"][blockName];
    console.log(moduleName);
    if (!moduleName) return null;

    if (moduleName === 'Carousel' || moduleName === 'MoboCarousel') {
      contentData = CarouselData;
    } else if (moduleName === 'VideoTiles') {
      contentData = VideoTileData2;
    } else {
      contentData = VideoTileData;
    }

    var Module = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()(function (props) {
      return __webpack_require__("./src/client/components lazy recursive ^\\.\\/.*$")("./".concat(props.moduleName));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Module, {
      moduleData: contentData,
      moduleName: moduleName,
      key: "".concat(idx, "-modules")
    });
  });
}; // const videoBannerData = {
//   title: 'Kedara',
//   duration: '99 mins',
//   year: '9999',
//   genre: 'Drama',
//   ageRestriction: '13+',
//   description:
//     'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
//   backgroundImage: videoTite3,
//   videoBannerThumb,
// };
// const footerData = {
//   logo: hoichoiLogo,
//   socialLinks: [
//     {
//       platform: 'facebook',
//       link: '#',
//     },
//     {
//       platform: 'twitter',
//       link: '#',
//     },
//     {
//       platform: 'youtube',
//       link: '#',
//     },
//     {
//       platform: 'instagram',
//       link: '#',
//     },
//   ],
//   links: [
//     {
//       anchorText: 'Report a Bug',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Movie Report',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Submit Your Story',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Request a Movie',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Privacy Policy',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Terms of Service',
//       anchorLink: '#',
//     },
//     {
//       anchorText: 'Copyright © 2020 hoichoi',
//       anchorLink: '#',
//     },
//   ],
// };

/***/ }),

/***/ "./src/client/map.js":
/*!***************************!*\
  !*** ./src/client/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _masthead01$carousel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// map module
// export default {
//     "AC Masthead 01_0": 'Navbar',
//     "AC Carousel 01_1": 'Carousel',
//     "AC Tray 01_2":'BigPosters',
//     "AC Tray 01_3":"VideoTiles",
//     "AC Tray 01_4":"VideoTiles",
//     "955064d5-67b2-41b0-b2a9-b636d770ae84_5":"VideoBanner",
//     "444d92ae-1a0f-4d09-a048-c2329ed0a12c_6":"VideoTiles"
//   }
// export default {
//   "0": "Navbar",       // a
//   "1": "Carousel",     // b
//   "2": "MoboCarousel", // c
//   "3": "VideoTiles",   // d
//   "4": "VideoTiles",   // d
//   "3": "VideoTiles",   // d
//   "5": "BigPosters",   // e
//   "6": "VideoTiles",   // d
//   // "10": "VideoBanner",
//   "10": "VideoTiles",  // d
//   "": "banner",        // f
//   "3": "VideoTiles",   //d
//   "4": "VideoTiles",   //d
//   "5": "BigPosters",   //e
//   "5": "BigPosters",   // e
//   "13": "OriginalSeries", // g
//   "6": "VideoTiles",   // d
//   "14": "BottomMenuBar", // i
//   // "16": "Footer" // j
// }
/* harmony default export */ __webpack_exports__["default"] = (_masthead01$carousel = {
  masthead01: 'Navbar',
  carousel01: 'Carousel',
  carousel05: 'MoboCarousel',
  tray02: 'VideoTiles'
}, _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "tray01", 'VideoTiles'), _defineProperty(_masthead01$carousel, "tray04", 'BigPosters'), _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "banner01", 'Banner'), _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "tray04", 'BigPosters'), _defineProperty(_masthead01$carousel, "tray04", 'BigPosters'), _defineProperty(_masthead01$carousel, "carousel03", 'OriginalSeries'), _defineProperty(_masthead01$carousel, "tray02", 'VideoTiles'), _defineProperty(_masthead01$carousel, "footer02", 'BottomMenuBar'), _defineProperty(_masthead01$carousel, "footer04", 'Footer'), _masthead01$carousel);

/***/ }),

/***/ "./src/client/tools/globalFunc.js":
/*!****************************************!*\
  !*** ./src/client/tools/globalFunc.js ***!
  \****************************************/
/*! exports provided: debounce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// global functions
var debounce = function debounce(callback, delay) {
  var timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};
/* harmony default export */ __webpack_exports__["default"] = ([debounce]);

/***/ }),

/***/ "./src/page/Html.js":
/*!**************************!*\
  !*** ./src/page/Html.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Html = function Html(_ref) {
  var children = _ref.children,
      initialState = _ref.initialState,
      scripts = _ref.scripts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Hoichoi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "css/style.css"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: children
    }
  }), initialState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.APP_STATE=".concat(JSON.stringify(initialState))
    }
  }), scripts.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      key: idx,
      src: item
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/page/helper.js":
/*!****************************!*\
  !*** ./src/page/helper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(/*! axios */ "axios");

var config = __webpack_require__(/*! ../../config */ "./config.js");

var page = function page() {
  console.log('fetching pageapi....');
  return axios({
    method: 'GET',
    url: config.pageUrl,
    headers: {
      'x-api-key': config.apiKey
    },
    params: {
      path: '/vamp/home',
      site: config.internalName,
      includeContent: true,
      moduleOffset: 0,
      moduleLimit: 4,
      languageCode: 'default',
      countryCode: 'IN'
    }
  })["catch"](function (err) {
    return console.log(err.message);
  });
};

var moduleList = function moduleList() {
  console.log('url', config.moduleList);
  return axios({
    method: 'GET',
    url: config.moduleList
  })["catch"](function () {
    return console.log('err');
  });
}; //


module.exports = [moduleList, page];

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/helper */ "./src/page/helper.js");
/* harmony import */ var _page_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_helper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_Html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/Html */ "./src/page/Html.js");
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/App */ "./src/client/App.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// server side starting point




 // import Page from './page';



var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var PORT = process.env.PORT || 3000;
var REDIS_PORT = process.env.REDIS_PORT || 6397; // ====== middlewares ======

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]('public')); // ====== DB-cache ========

var client = redis__WEBPACK_IMPORTED_MODULE_3___default.a.createClient({
  host: 'redis-cache'
}); //

var renderApp = function renderApp(data) {
  var scripts = ['js/vendor.js', 'js/client.js']; //  const initialState  = data

  var appMarkup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], data));
  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToStaticMarkup"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_Html__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: appMarkup,
    scripts: scripts,
    initialState: data
  }));
  return "<!DOCTYPE html>".concat(html);
}; // Cache middleware/invaildation


var cache = function cache(req, res, next) {
  // const promises  = initialApiResponse.map(key => {
  //     return new Promise((resolve, reject) => {
  //       client.get(key.name, (err, data) => {
  //         if(err) reject(err);
  //         resolve(data);
  //       })
  //     })
  // })
  // Promise
  // .all(promises)
  // .then(data => res.send(renderApp({...data})))
  // .catch(() => next())
  try {
    client.get('moduleList', function (err, moduleList) {
      client.get('page', function (err, page) {
        res.send(renderApp({
          moduleList: JSON.parse(moduleList),
          page: JSON.parse(page)
        }));
      });
    });
  } catch (err) {
    next();
  }
}; // Intial api-calls


var getIntialData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var promises;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('Fetching Data...');
            _context.next = 4;
            return Promise.all(_page_helper__WEBPACK_IMPORTED_MODULE_4___default.a.map(function (apiCall) {
              return apiCall();
            }));

          case 4:
            promises = _context.sent;
            _page_helper__WEBPACK_IMPORTED_MODULE_4___default.a.forEach(function (key, idx) {
              client.set(key.name, JSON.stringify(promises[idx].data));
            });
            client.get('moduleList', function (err, moduleList) {
              client.get('page', function (err, page) {
                res.send(renderApp({
                  moduleList: moduleList,
                  page: page
                }));
              });
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            // console.error(err);
            res.status(500);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getIntialData(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // routes


app.get('*', cache, getIntialData); // app.get("*", renderReactApp)
// listenner

app.listen(PORT, function () {
  console.log("Server is listening on ".concat(PORT));
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/server.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! /app/src/server.js */"./src/server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map