(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/client/components/BigPosters/index.js":
/*!***************************************************!*\
  !*** ./src/client/components/BigPosters/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BigPosters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/BigPosters/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BigPoster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BigPoster */ "./src/client/components/BigPoster/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function BigPosters(_ref) {
  var moduleData = _ref.moduleData,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;
  if (!moduleData) return null;
  var title = moduleData.title,
      subtitle = moduleData.subtitle,
      posters = moduleData.contentData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-posters-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-posters-heading"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-posters-subheading"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "big-posters"
  }, posters.map(function (poster, index) {
    if (variant === 'new-release' && index > 0) return;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BigPoster__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: new Date().getTime() + index
    }, poster, {
      variant: variant
    }));
  })));
}

/***/ }),

/***/ "./src/client/components/BigPosters/styles.css":
/*!*****************************************************!*\
  !*** ./src/client/components/BigPosters/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.js.map