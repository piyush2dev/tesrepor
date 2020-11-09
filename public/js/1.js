(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/client/components/BigPoster/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/BigPoster/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BigPoster; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/BigPoster/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function BigPoster(_ref) {
  var gist = _ref.gist,
      feturedText = _ref.feturedText,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;
  var variantToSize = {
    "default": '_9x16',
    'new-release': '_32x9',
    series: '_16x9',
    'original-series': '_16x9'
  };
  var imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55
  };
  var imageUrl = gist && gist.imageGist[variantToSize[variant]]; // const placeholderWidth = 20;
  // const placeholderImage = imageUrl
  //   ? `${imageUrl}?impolicy=resize&w=${placeholderWidth}&h=${
  //       placeholderWidth / imageRatioForSmallSizeLoading[variantToSize[variant]]
  //     }`
  //   : '';
  // const [imageSrc, setImageSrc] = useState(placeholderImage);
  // const [imageRef, setImageRef] = useState();
  // const setProgressiveImage = (src) => {
  //   const img = new Image();
  //   img.src = src;
  //   img.onload = () => setImageSrc(src);
  // };
  // useEffect(() => {
  //   let observer;
  //   let didCancel = false;
  //   if (imageRef && imageSrc === placeholderImage) {
  //     if (IntersectionObserver) {
  //       observer = new IntersectionObserver(
  //         (entries) => {
  //           entries.forEach((entry) => {
  //             // when image is visible in the viewport + rootMargin
  //             if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
  //               setProgressiveImage(imageUrl);
  //               // setImageSrc(imageSrc);
  //             }
  //           });
  //         },
  //         {
  //           threshold: 0.01,
  //           rootMargin: '20%',
  //         }
  //       );
  //       observer.observe(imageRef);
  //     } else {
  //       // Old browsers fallback
  //       setImageSrc(imageUrl);
  //     }
  //   }
  //   return () => {
  //     didCancel = true;
  //     // on component unmount, we remove the listner
  //     if (observer && observer.unobserve) {
  //       observer.unobserve(imageRef);
  //     }
  //   };
  // });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-container ".concat("big-poster-".concat(variant))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-img-container",
    style: {
      backgroundImage: "url(".concat(imageUrl, "), linear-gradient(#212121, #212121)")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-info-container"
  }, feturedText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-featured-text primary-gradient"
  }, feturedText), gist && gist.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-title"
  }, gist.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big -poster-feature"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "big-poster-feature-list"
  }, gist && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, gist && Math.round(gist.runtime / 60), " mins"), gist && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, gist.primaryCategory.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-additional-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-play-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-play-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlayIcon"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-play-text"
  }, "Play Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-info-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-info-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["InfoIcon"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-plus-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-plus-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlusIcon"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-poster-description"
  }, "A love story amdist agitation and crime... Find out about the fight to survive, during the Bangladesh freedom struggle."))))));
}

/***/ }),

/***/ "./src/client/components/BigPoster/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/BigPoster/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=1.js.map