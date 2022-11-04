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
exports.id = "pages/ex01";
exports.ids = ["pages/ex01"];
exports.modules = {

/***/ "./pages/ex01.js":
/*!***********************!*\
  !*** ./pages/ex01.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MoviesEx01),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MoviesEx01({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Exerc\\xedcio 01\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex01.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" - \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex01.js\",\n                        lineNumber: 7,\n                        columnNumber: 45\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex01.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next03_data_fetching_1/pages/ex01.js\",\n        lineNumber: 4,\n        columnNumber: 13\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const res = await fetch(\"http://www.omdbapi.com/?apikey=7e085129&s=Star Wars\");\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9leDAxLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUFlLFNBQVNBLFVBQVUsQ0FBQyxFQUFDQyxJQUFJLEdBQUMsRUFBQztJQUN0QyxxQkFDUSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsaUJBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0QsS0FBRzswQkFDQ0QsSUFBSSxDQUFDRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLGlCQUFLLDhEQUFDSixLQUFHOzs0QkFBRUksQ0FBQyxDQUFDQyxLQUFLOzRCQUFDLEtBQUc7NEJBQUNELENBQUMsQ0FBQ0UsSUFBSTs7Ozs7OzRCQUFPLENBQUM7Ozs7O29CQUN0RDs7Ozs7O1lBQ0osQ0FDVDtBQUNULENBQUM7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBQzdDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMscURBQXFELENBQUM7SUFDOUUsTUFBTVgsSUFBSSxHQUFHLE1BQU1VLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU07UUFDRkMsS0FBSyxFQUFFO1lBQ0hiLElBQUk7U0FDUDtLQUNKO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2V4MDEuanM/NGI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllc0V4MDEoe2RhdGF9KXtcbiAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5FeGVyY8OtY2lvIDAxPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtKSA9PiA8ZGl2PnttLlRpdGxlfSAtIHttLlllYXJ9PC9kaXY+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9N2UwODUxMjkmcz1TdGFyIFdhcnNcIilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTW92aWVzRXgwMSIsImRhdGEiLCJkaXYiLCJoMiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ex01.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/ex01.js"));
module.exports = __webpack_exports__;

})();