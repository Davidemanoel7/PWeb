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
exports.id = "pages/ex03";
exports.ids = ["pages/ex03"];
exports.modules = {

/***/ "./pages/ex03.js":
/*!***********************!*\
  !*** ./pages/ex03.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MoviesEx03),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MoviesEx03({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Exerc\\xedcio 03\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"searchBox\",\n                type: \"text\",\n                placeholder: \"search here...\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>alert(\"Clicou...\"),\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" - \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n                        lineNumber: 9,\n                        columnNumber: 45\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/ex03.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const res = await fetch(\"http://www.omdbapi.com/?apikey=7e085129&s=Star wars\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leDAzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUFlLFNBQVNBLFVBQVUsQ0FBQyxFQUFDQyxJQUFJLEdBQUMsRUFBQztJQUN0QyxxQkFDUSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsaUJBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0MsT0FBSztnQkFBQ0MsRUFBRSxFQUFDLFdBQVc7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxXQUFXLEVBQUMsZ0JBQWdCOzs7OztvQkFBUzswQkFDdkUsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNQyxLQUFLLENBQUMsV0FBVyxDQUFDOzBCQUFFLFFBQU07Ozs7O29CQUFTOzBCQUMxRCw4REFBQ1IsS0FBRzswQkFDQ0QsSUFBSSxDQUFDVSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLGlCQUFLLDhEQUFDWCxLQUFHOzs0QkFBRVcsQ0FBQyxDQUFDQyxLQUFLOzRCQUFDLEtBQUc7NEJBQUNELENBQUMsQ0FBQ0UsSUFBSTs7Ozs7OzRCQUFPLENBQUM7Ozs7O29CQUN0RDs7Ozs7O1lBQ0osQ0FDVDtBQUNULENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBQzdDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMscURBQXFELENBQUM7SUFDOUUsTUFBTWxCLElBQUksR0FBRyxNQUFNaUIsR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFDN0IsT0FBTTtRQUNGQyxLQUFLLEVBQUU7WUFDSHBCLElBQUk7U0FDUDtLQUNKO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2V4MDMuanM/OTAzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc0V4MDMoe2RhdGF9KXtcbiAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5FeGVyY8OtY2lvIDAzPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hCb3hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoIGhlcmUuLi5cIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQoXCJDbGljb3UuLi5cIil9PlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0pID0+IDxkaXY+e20uVGl0bGV9IC0ge20uWWVhcn08L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT03ZTA4NTEyOSZzPVN0YXIgd2Fyc1wiKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJNb3ZpZXNFeDAzIiwiZGF0YSIsImRpdiIsImgyIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhbGVydCIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ex03.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/ex03.js"));
module.exports = __webpack_exports__;

})();