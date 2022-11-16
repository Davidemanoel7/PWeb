"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ex02";
exports.ids = ["pages/ex02"];
exports.modules = {

/***/ "./pages/ex02.js":
/*!***********************!*\
  !*** ./pages/ex02.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MoviesEx02),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MoviesEx02({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Exerc\\xedcio 02\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    m.Title,\n                                    \" \",\n                                    m.Year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                                lineNumber: 7,\n                                columnNumber: 51\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                                lineNumber: 7,\n                                columnNumber: 87\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: m.Poster\n                            }, void 0, false, {\n                                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                                lineNumber: 7,\n                                columnNumber: 93\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                        lineNumber: 7,\n                        columnNumber: 45\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex02.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const res = await fetch(\"http://www.omdbapi.com/?apikey=7e085129&s=Star Wars\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leDAyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUFlLFNBQVNBLFVBQVUsQ0FBQyxFQUFDQyxJQUFJLEdBQUMsRUFBQztJQUN0QyxxQkFDUSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsaUJBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0QsS0FBRzswQkFDQ0QsSUFBSSxDQUFDRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLGlCQUFLLDhEQUFDSixLQUFHOzs0QkFBQyxHQUFDOzBDQUFBLDhEQUFDSyxRQUFNOztvQ0FBRUQsQ0FBQyxDQUFDRSxLQUFLO29DQUFDLEdBQUM7b0NBQUNGLENBQUMsQ0FBQ0csSUFBSTs7Ozs7O29DQUFVOzRCQUFBLEdBQUM7MENBQUEsOERBQUNDLElBQUU7Ozs7b0NBQUU7NEJBQUEsR0FBQzswQ0FBQSw4REFBQ0MsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFTixDQUFDLENBQUNPLE1BQU07Ozs7O29DQUFROzs7Ozs7NEJBQU0sQ0FBQzs7Ozs7b0JBQ3ZHOzs7Ozs7WUFFSixDQUNUO0FBQ1QsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUM7SUFDN0MsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxxREFBcUQsQ0FBQztJQUM5RSxNQUFNaEIsSUFBSSxHQUFHLE1BQU1lLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU07UUFDRkMsS0FBSyxFQUFFO1lBQ0hsQixJQUFJO1NBQ1A7S0FDSjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9leDAyLmpzPzBlYzciXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXNFeDAyKHtkYXRhfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+RXhlcmPDrWNpbyAwMjwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gPGRpdj4gPHN0cm9uZz57bS5UaXRsZX0ge20uWWVhcn08L3N0cm9uZz4gPGJyLz4gPGltZyBzcmM9e20uUG9zdGVyfT48L2ltZz48L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT03ZTA4NTEyOSZzPVN0YXIgV2Fyc1wiKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJNb3ZpZXNFeDAyIiwiZGF0YSIsImRpdiIsImgyIiwiU2VhcmNoIiwibWFwIiwibSIsInN0cm9uZyIsIlRpdGxlIiwiWWVhciIsImJyIiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ex02.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ex02.js"));
module.exports = __webpack_exports__;

})();