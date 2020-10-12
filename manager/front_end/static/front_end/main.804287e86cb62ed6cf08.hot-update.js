webpackHotUpdate("main",{

/***/ "./manager/front_end/src/context/AppReducer.js":
/*!*****************************************************!*\
  !*** ./manager/front_end/src/context/AppReducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (state, action) {\n  switch (action.type) {\n    case \"GET_RESULT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        results: action.payload,\n        loading: false\n      });\n\n    case \"CREATE_SEARCH\":\n      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), {}, {\n        results: action.payload\n      });\n\n    case \"GET_ERRORS\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.payload.error\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./manager/front_end/src/context/AppReducer.js?");

/***/ })

})