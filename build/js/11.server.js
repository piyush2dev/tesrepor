exports.ids = [11];
exports.modules = {

/***/ "./src/client/components/MoboCarousel/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/MoboCarousel/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoboCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/MoboCarousel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function MoboCarousel(_ref) {
  var slidesDataArray = _ref.moduleData.contentData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      currentActiveImage = _useState2[0],
      setCurrentActiveImage = _useState2[1];

  var handleMoboCarousel = function handleMoboCarousel(e) {
    e.persist();
    var allIndicatorElements = document.getElementsByClassName('mobo-carousel-indicator-list-item');

    _toConsumableArray(allIndicatorElements).forEach(function (element) {
      element.classList.remove('active');
    });

    e.currentTarget.classList.add('active');
    var currentImageFromData = e.target.dataset.activeImage;
    setCurrentActiveImage(currentImageFromData);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // eslint-disable-next-line no-underscore-dangle
    if (slidesDataArray[0] && slidesDataArray[0].gist.imageGist._9x16) {
      // eslint-disable-next-line no-underscore-dangle
      setCurrentActiveImage(slidesDataArray[0].gist.imageGist._9x16);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-active-image-container",
    style: {
      backgroundImage: "linear-gradient(180deg, rgb(0 0 0 / 0.9) 10%, transparent 40%), linear-gradient(360deg, #000000 30%, transparent 40%), url(".concat(currentActiveImage, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-active-image-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-active-play-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlayIcon"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-active-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-heading"
  }, "Byomkesh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobo-carousel-feature-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobo-carousel-feature-item"
  }, "2 Seasons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobo-carousel-feature-item"
  }, "12 Episodes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobo-carousel-feature-item"
  }, "Thriller"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-active-plus-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlusIcon"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobo-carousel-indicator-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobo-carousel-indicator-list"
  }, slidesDataArray && slidesDataArray.map(function (slideData, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: new Date().getTime() + index,
        className: "mobo-carousel-indicator-list-item ".concat(index === 0 ? 'active' : ''),
        onClick: handleMoboCarousel,
        role: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        // eslint-disable-next-line no-underscore-dangle
        src: slideData.gist.imageGist._16x9,
        alt: "",
        className: "mobo-carousel-indicator-image" // eslint-disable-next-line no-underscore-dangle
        ,
        "data-active-image": slideData.gist.imageGist._9x16
      }))
    );
  })))))));
}

/***/ }),

/***/ "./src/client/components/MoboCarousel/styles.css":
/*!*******************************************************!*\
  !*** ./src/client/components/MoboCarousel/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

};;
//# sourceMappingURL=11.server.js.map