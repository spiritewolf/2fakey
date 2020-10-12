webpackHotUpdate("main",{

/***/ "./manager/front_end/src/components/Display.js":
/*!*****************************************************!*\
  !*** ./manager/front_end/src/components/Display.js ***!
  \*****************************************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return Display; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ \"./manager/front_end/src/context/AppContext.js\");\n\n\nvar Display = function Display() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"AppContext\"]),\n      results = _useContext.results,\n      getResult = _useContext.getResult;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getResult();\n  }, []);\n  console.log(results);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, results));\n};\n\n//# sourceURL=webpack:///./manager/front_end/src/components/Display.js?");

/***/ })

})