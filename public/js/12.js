(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/client/components/OriginalSeries/index.js":
/*!*******************************************************!*\
  !*** ./src/client/components/OriginalSeries/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OriginalSeries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/OriginalSeries/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BigPoster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BigPoster */ "./src/client/components/BigPoster/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function OriginalSeries(_ref) {
  var moduleData = _ref.moduleData,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'new-release' : _ref$variant;
  var title = moduleData.title,
      _moduleData$subtitle = moduleData.subtitle,
      subtitle = _moduleData$subtitle === void 0 ? '' : _moduleData$subtitle,
      posters = moduleData.contentData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "original-series-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "original-series-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "original-series-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "original-series-subtitle"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "original-series-tiles"
  }, posters.map(function (poster, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigPoster__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: "".concat(index, "-original-series")
    }, poster, {
      variant: variant
    }));
  }))));
}

/***/ }),

/***/ "./src/client/components/OriginalSeries/styles.css":
/*!*********************************************************!*\
  !*** ./src/client/components/OriginalSeries/styles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=12.js.map