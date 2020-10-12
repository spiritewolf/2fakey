webpackHotUpdate("main",{

/***/ "./manager/front_end/src/components/Dashboard.js":
/*!*******************************************************!*\
  !*** ./manager/front_end/src/components/Dashboard.js ***!
  \*******************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dashboard\", function() { return Dashboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./manager/front_end/src/context/AppContext.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ \"./manager/front_end/src/components/Search.js\");\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Display */ \"./manager/front_end/src/components/Display.js\");\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"AppContext\"]),\n      results = _useContext.results,\n      getResult = _useContext.getResult;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getResult();\n  }, [results]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__[\"Search\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Display__WEBPACK_IMPORTED_MODULE_4__[\"Display\"], null));\n};\n\n//# sourceURL=webpack:///./manager/front_end/src/components/Dashboard.js?");

/***/ })

})