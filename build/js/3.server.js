exports.ids = [3];
exports.modules = {

/***/ "./src/client/components/Carousel/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/Carousel/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CarouselSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CarouselSlide */ "./src/client/components/CarouselSlide/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/Carousel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
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




function Carousel(_ref) {
  var slidesDataArray = _ref.moduleData.contentData;
  var carousel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      carouselTimmer = _useState2[0],
      setCarouselTimmer = _useState2[1];

  var timer = function timer() {
    return setCarouselTimmer(function (prevTime) {
      return prevTime + 1;
    });
  };

  var initCar = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log('change slide');
    var carouselClasses = ['first-slide', 'second-slide'];
    var carouselNode = carousel.current;

    var carouselFirstItem = _toConsumableArray(carouselNode.getElementsByClassName('first-slide'));

    var carouselSecondItem = _toConsumableArray(carouselNode.getElementsByClassName('second-slide'));

    var carouselItems = _toConsumableArray(carouselNode.children);

    if (carouselSecondItem[0] !== undefined) {
      carouselFirstItem[0].classList.remove(carouselClasses[0]);
      carouselSecondItem[0].classList.remove(carouselClasses[1]);
      carouselSecondItem[0].classList.add(carouselClasses[0]);

      if (carouselSecondItem[0].nextSibling) {
        carouselSecondItem[0].nextSibling.classList.add(carouselClasses[1]);
      } else {
        carouselItems[0].classList.add(carouselClasses[1]);
      }
    } else {// empty
    }

    setTimeout(timer, 6000);
  }, [carouselTimmer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function initCarousel() {
      var carouselClasses = ['first-slide', 'second-slide'];
      var carouselNode = carousel.current; // console.log(carouselNode);

      var carouselItems = _toConsumableArray(carouselNode.children); //   console.log(carouselItems);


      carouselItems.forEach(function (carouselItem, index) {
        if (index >= carouselClasses.length) {
          return;
        }

        carouselItem.classList.add(carouselClasses[index]);
      });
    }

    initCarousel();
  }, [initCar]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-mask",
    ref: carousel
  }, slidesDataArray && slidesDataArray.map(function (slideData, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CarouselSlide__WEBPACK_IMPORTED_MODULE_1__["default"], {
      slideData: slideData,
      key: "".concat(index, "-carousel-slide")
    });
  }))));
}

/***/ }),

/***/ "./src/client/components/Carousel/styles.css":
/*!***************************************************!*\
  !*** ./src/client/components/Carousel/styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/components/CarouselSlide/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/CarouselSlide/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/CarouselSlide/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);



function CarouselSlide(_ref) {
  var _ref$slideData = _ref.slideData,
      slideData = _ref$slideData === void 0 ? {} : _ref$slideData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-container ",
    style: {
      // eslint-disable-next-line no-underscore-dangle
      backgroundImage: "url(".concat(slideData.gist.imageGist._16x9, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-details-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "carousel-slide-feature-text"
  }, "EXCLUSIVE RELEASE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-title"
  }, slideData.gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-feature-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-age-rating"
  }, "13+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "carousel-slide-feature-list-item"
  }, slideData.gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, Math.round(slideData.gist.runtime / 60), " mins"), slideData.gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, slideData.gist.year), slideData.categories[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, slideData.categories[0].title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-cta-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "primary-button carousel-slide-cta carousel-slide-play-icon-container",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["PlayIcon"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: ""
  }, "Play Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-info-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "secondary-button carousel-slide-secondary-icon carousel-slide-info-icon",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["InfoIcon"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-add-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "secondary-button carousel-slide-secondary-icon",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__["PlusIcon"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-slide-description"
  }, "A game of tunes - or a clue to a hidden treasure? It's a", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "journey of music and riddles!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Watch the trailer of Tansener Tanpura.")));
}

/***/ }),

/***/ "./src/client/components/CarouselSlide/styles.css":
/*!********************************************************!*\
  !*** ./src/client/components/CarouselSlide/styles.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

};;
//# sourceMappingURL=3.server.js.map