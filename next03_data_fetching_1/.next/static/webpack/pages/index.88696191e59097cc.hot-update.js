"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/ex02.js":
/*!***********************!*\
  !*** ./pages/ex02.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MoviesEx02; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MoviesEx02(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map(function(m) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                m.Title,\n                                \" \",\n                                m.Year\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n                            lineNumber: 6,\n                            columnNumber: 51\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n                            lineNumber: 6,\n                            columnNumber: 87\n                        }, _this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n                            lineNumber: 6,\n                            columnNumber: 93\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n                    lineNumber: 6,\n                    columnNumber: 45\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n            lineNumber: 5,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex02.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\n_c = MoviesEx02;\nvar _c;\n$RefreshReg$(_c, \"MoviesEx02\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leDAyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQWUsU0FBU0EsVUFBVSxDQUFDLEtBQU0sRUFBQztRQUFQLElBQUssR0FBTCxLQUFNLENBQUxDLElBQUk7O0lBQ3BDLHFCQUNRLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHO3NCQUNDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLENBQUM7cUNBQUssOERBQUNILEtBQUc7O3dCQUFDLEdBQUM7c0NBQUEsOERBQUNJLFFBQU07O2dDQUFFRCxDQUFDLENBQUNFLEtBQUs7Z0NBQUMsR0FBQztnQ0FBQ0YsQ0FBQyxDQUFDRyxJQUFJOzs7Ozs7aUNBQVU7d0JBQUEsR0FBQztzQ0FBQSw4REFBQ0MsSUFBRTs7OztpQ0FBRTt3QkFBQSxHQUFDO3NDQUFBLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVOLENBQUMsQ0FBQ08sTUFBTTs7Ozs7aUNBQVE7Ozs7Ozt5QkFBTTthQUFBLENBQUM7Ozs7O2dCQUN2Rzs7Ozs7WUFFSixDQUNUO0FBQ1QsQ0FBQztBQVR1QlosS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9leDAyLmpzPzBlYzciXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXNFeDAyKHtkYXRhfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtKSA9PiA8ZGl2PiA8c3Ryb25nPnttLlRpdGxlfSB7bS5ZZWFyfTwvc3Ryb25nPiA8YnIvPiA8aW1nIHNyYz17bS5Qb3N0ZXJ9PjwvaW1nPjwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufSJdLCJuYW1lcyI6WyJNb3ZpZXNFeDAyIiwiZGF0YSIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJzdHJvbmciLCJUaXRsZSIsIlllYXIiLCJiciIsImltZyIsInNyYyIsIlBvc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ex02.js\n"));

/***/ })

});