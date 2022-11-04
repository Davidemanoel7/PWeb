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
exports.id = "pages/movies2";
exports.ids = ["pages/movies2"];
exports.modules = {

/***/ "./pages/movies2.js":
/*!**************************!*\
  !*** ./pages/movies2.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=7e085129&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Tivemos uma falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies2.js\",\n        lineNumber: 5,\n        columnNumber: 22\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies2.js\",\n        lineNumber: 6,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" -- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies2.js\",\n                lineNumber: 9,\n                columnNumber: 37\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies2.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUVULFNBQVNDLE9BQU8sR0FBRTtJQUM3QixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdILCtDQUFNLENBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxFQUFFSSxPQUFPLENBQUM7SUFDekYsSUFBR0QsS0FBSyxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLDBDQUFrQzs7Ozs7WUFBTTtJQUM5RCxJQUFHLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNO0lBQ3pDLHFCQUNJLDhEQUFDQSxLQUFHO2tCQUNDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLENBQUMsaUJBQUssOERBQUNILEtBQUc7O29CQUFFRyxDQUFDLENBQUNDLEtBQUs7b0JBQUMsTUFBSTtvQkFBQ0QsQ0FBQyxDQUFDRSxJQUFJOzs7Ozs7b0JBQU8sQ0FBQzs7Ozs7WUFDdkQsQ0FDVDtBQUNMLENBQUM7QUFFRCxlQUFlTixPQUFPLENBQUNPLEdBQUcsRUFBRTtJQUN4QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFDNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU9BLElBQUk7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW92aWVzMi5qcz84M2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMyKCl7XG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTdlMDg1MTI5JnM9YmFnZGFkYCwgZmV0Y2hlcilcbiAgICBpZihlcnJvcikgcmV0dXJuIDxkaXY+VGl2ZW1vcyB1bWEgZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG4gICAgaWYoIWRhdGEpIHJldHVybiA8ZGl2PkNhcnJlZ2FuZG8uLi48L2Rpdj5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtKSA9PiA8ZGl2PnttLlRpdGxlfSAtLSB7bS5ZZWFyfTwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4ganNvblxufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJNb3ZpZXMyIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies2.js"));
module.exports = __webpack_exports__;

})();