exports.ids = [2];
exports.modules = {

/***/ "./src/client/components/VideoTile/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/VideoTile/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/VideoTile/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function VideoTile(_ref) {
  var gist = _ref.gist,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'short' : _ref$variant,
      ageRestriction = _ref.ageRestriction,
      featureText = _ref.featureText,
      color = _ref.color;
  var variantToSize = {
    "short": '_16x9',
    "long": '_9x16',
    cube: '_1x1',
    circle: '_1x1',
    genre: '_16x9',
    'extra-wide': '_32x9'
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
  //   if (!src) return '';
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
    className: "video-tile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-wrapper video-tile-".concat(variant)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-parent",
    style: {
      backgroundImage: "url(".concat(imageUrl, "), linear-gradient(#212121, #212121)")
    }
  }, featureText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-new-label"
  }, featureText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-progress"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-title-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-title ".concat(gist ? gist.title : '')
  }, gist ? gist.title : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-play-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlayIcon"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-long-hover-plus-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlusIcon"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "video-tile-long-hover-feature-list"
  }, ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "video-tile-long-hover-feature-item video-tile-age-rating"
  }, ageRestriction), gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "video-tile-long-hover-feature-item"
  }, gist.primaryCategory.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-action-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-title",
    style: {
      '--genre-color': color ? "".concat(color, "6b") : '#b71c1c6b'
    }
  }, gist ? gist.title : '', ageRestriction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-age-rating"
  }, ageRestriction)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-icon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-play-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlayIcon"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-plus-icon video-tile-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__["PlusIcon"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "video-tile-feature-list"
  }, gist && gist.runtime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, Math.round(gist.runtime / 60), " mins"), gist && gist.year && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, gist.year), gist && gist.primaryCategory && gist.primaryCategory.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, gist.primaryCategory.title)), gist && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-tile-description"
  }, gist.description))));
}

/***/ }),

/***/ "./src/client/components/VideoTile/styles.css":
/*!****************************************************!*\
  !*** ./src/client/components/VideoTile/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

};;
//# sourceMappingURL=2.server.js.map