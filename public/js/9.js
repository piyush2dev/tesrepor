(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/client/components/Footer/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Footer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/client/components/Footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/client/components/Icons/index.js");



function Footer(_ref) {
  var logo = _ref.logo,
      socialLinks = _ref.socialLinks,
      links = _ref.links;
  var iconMap = {
    facebook: _Icons__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"],
    twitter: _Icons__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"],
    youtube: _Icons__WEBPACK_IMPORTED_MODULE_2__["YoutubeIcon"],
    instagram: _Icons__WEBPACK_IMPORTED_MODULE_2__["InstagramIcon"]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logo,
    alt: "",
    srcSet: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-social-media-container"
  }, socialLinks && socialLinks.map(function (socialLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: socialLink.link
    }, iconMap[socialLink.platform] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(iconMap[socialLink.platform]));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-links-list"
  }, links && links.map(function (link) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: link.anchorLink
    }, link.anchorText));
  })));
}

/***/ }),

/***/ "./src/client/components/Footer/styles.css":
/*!*************************************************!*\
  !*** ./src/client/components/Footer/styles.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=9.js.map