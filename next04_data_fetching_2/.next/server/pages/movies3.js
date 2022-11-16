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
exports.id = "pages/movies3";
exports.ids = ["pages/movies3"];
exports.modules = {

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": () => (/* binding */ TheLink),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"default\": () => (/* binding */ Movies3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function theFetcher(url) {\n    if (url === null || url === \"\") return {\n        Search: \"\"\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 12,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 13,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 14,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n                lineNumber: 17,\n                columnNumber: 38\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\nfunction TheLink({ url , handler  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\nfunction Movies3() {\n    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=7e085129&s=bagdad\");\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n                lineNumber: 43,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/Documentos/Workspace/Pweb/next04_data_fetching_2/pages/movies3.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFDTTtBQUU5QixlQUFlRSxVQUFVLENBQUNDLEdBQUcsRUFBQztJQUMxQixJQUFHQSxHQUFHLEtBQUssSUFBSSxJQUFJQSxHQUFHLEtBQUksRUFBRSxFQUFFLE9BQU87UUFBQ0MsTUFBTSxFQUFFLEVBQUU7S0FBQztJQUNqRCxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLENBQUM7SUFDNUIsTUFBTUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBQzdCLE9BQU9BLElBQUk7QUFDZixDQUFDO0FBRU0sU0FBU0MsU0FBUyxDQUFDLEVBQUNDLElBQUksR0FBQ0MsSUFBSSxHQUFDLEVBQUM7SUFDbEMsSUFBSSxDQUFDQSxJQUFJLEVBQUUscUJBQVEsOERBQUNDLEtBQUc7Ozs7WUFBTyxDQUFDO0lBQy9CLElBQUlGLElBQUksQ0FBQ0csS0FBSyxFQUFFLHFCQUFRLDhEQUFDRCxLQUFHO2tCQUFDLDJCQUFtQjs7Ozs7WUFBTSxDQUFDO0lBQ3ZELElBQUlGLElBQUksQ0FBQ0wsTUFBTSxLQUFLLEVBQUUsRUFBRyxxQkFBUSw4REFBQ08sS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNLENBQUM7SUFDMUQscUJBQ0ksOERBQUNBLEtBQUc7a0JBQ0NGLElBQUksQ0FBQ0wsTUFBTSxDQUFDUyxHQUFHLENBQUUsQ0FBQ0MsQ0FBQyxpQkFBSyw4REFBQ0gsS0FBRzs7b0JBQUVHLENBQUMsQ0FBQ0MsS0FBSztvQkFBQyxPQUFLO29CQUFDRCxDQUFDLENBQUNFLElBQUk7Ozs7OztvQkFBTyxDQUFFOzs7OztZQUUxRCxDQUNUO0FBQ0wsQ0FBQztBQUVNLFNBQVNDLE9BQU8sQ0FBQyxFQUFDZCxHQUFHLEdBQUVlLE9BQU8sR0FBQyxFQUFDO0lBQ25DLHFCQUNJLDhEQUFDUCxLQUFHO2tCQUNBLDRFQUFDUSxHQUFDO1lBQUNDLElBQUksRUFBQyxhQUFhO1lBQUNDLE9BQU8sRUFBRUgsT0FBTzs7Z0JBQUUsR0FBQztnQkFBQ2YsR0FBRyxLQUFLLEVBQUUsR0FBRyxTQUFTLEdBQUcsU0FBUztnQkFBQyxHQUFDOzs7Ozs7Z0JBQUk7Ozs7O1lBQ2hGLENBQ1Q7QUFDTCxDQUFDO0FBRWMsU0FBU21CLE9BQU8sR0FBRTtJQUM3QixNQUFNLEtBQUNuQixHQUFHLE1BQUVvQixNQUFNLE1BQUl0QiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxNQUFNLEVBQUNRLElBQUksR0FBR0csS0FBSyxHQUFDLEdBQUdaLCtDQUFNLENBQUNHLEdBQUcsRUFBRUQsVUFBVSxDQUFDO0lBRTlDLE1BQU1zQixjQUFjLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFLO1FBQzFCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQixJQUFJdkIsR0FBRyxLQUFLLEVBQUUsRUFBRW9CLE1BQU0sQ0FBQyxrREFBa0QsQ0FBQzthQUNyRUEsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQscUJBQ0ksOERBQUNaLEtBQUc7OzBCQUNDLDhEQUFDTSxPQUFPO2dCQUFDZCxHQUFHLEVBQUVBLEdBQUc7Z0JBQUVlLE9BQU8sRUFBRU0sY0FBYzs7Ozs7b0JBQUc7MEJBQzlDLDhEQUFDaEIsU0FBUztnQkFBQ0MsSUFBSSxFQUFHRyxLQUFLLEdBQUM7b0JBQUNBLEtBQUssRUFBQyxrQkFBa0I7aUJBQUMsR0FBRUgsSUFBSSxHQUFHQSxJQUFJLEdBQUU7b0JBQUNMLE1BQU0sRUFBQyxFQUFFO2lCQUFDO2dCQUFHTSxJQUFJLEVBQUVQLEdBQUcsS0FBSyxFQUFFOzs7OztvQkFBRzs7Ozs7O1lBQ2hHLENBQ1Q7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW92aWVzMy5qcz83YWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKXtcbiAgICBpZih1cmwgPT09IG51bGwgfHwgdXJsID09PScnKSByZXR1cm4ge1NlYXJjaDogJyd9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIGpzb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KSAgICBcbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8OjbzwvZGl2PilcbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoIChtKSA9PiA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gKX0gICAgICAgICAgIFxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoe3VybCwgaGFuZGxlcn0pe1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllczMuanNcIiBvbkNsaWNrPXtoYW5kbGVyfT4ge3VybCA9PT0gJycgPyAnTW9zdHJhcicgOiAnT2N1bHRhcid9IDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IHtkYXRhICwgZXJyb3J9ID0gdXNlU1dSKHVybCwgdGhlRmV0Y2hlcilcblxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSBzZXRVcmwoJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT03ZTA4NTEyOSZzPWJhZ2RhZCcpXG4gICAgICAgIGVsc2Ugc2V0VXJsKCcnKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXt1cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfS8+XG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9eyBlcnJvcj97ZXJyb3I6J0Vycm8gbmEgcGVzcXVpc2EnfTogZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17dXJsICE9PSAnJ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJ0aGVGZXRjaGVyIiwidXJsIiwiU2VhcmNoIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiVGhlTW92aWVzIiwiZGF0YSIsInNob3ciLCJkaXYiLCJlcnJvciIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJUaGVMaW5rIiwiaGFuZGxlciIsImEiLCJocmVmIiwib25DbGljayIsIk1vdmllczMiLCJzZXRVcmwiLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies3.js"));
module.exports = __webpack_exports__;

})();