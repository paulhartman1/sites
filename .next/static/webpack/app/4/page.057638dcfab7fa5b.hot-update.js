"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/4/page",{

/***/ "(app-client)/./src/app/4/page.tsx":
/*!****************************!*\
  !*** ./src/app/4/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PerformaceSchedule; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_nav_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/components/nav/page */ \"(app-client)/./src/app/components/nav/page.tsx\");\n/* harmony import */ var _app_components_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/components/layout/page */ \"(app-client)/./src/app/components/layout/page.tsx\");\n/* harmony import */ var _components_event_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/event/page */ \"(app-client)/./src/app/components/event/page.tsx\");\n/* harmony import */ var _public_events_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/events.json */ \"(app-client)/./public/events.json\");\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"(app-client)/./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PerformaceSchedule() {\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_public_events_json__WEBPACK_IMPORTED_MODULE_5__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_6__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_nav_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/paulhartman/Documents/repos/personal/dadz/src/app/4/page.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_layout_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"events\",\n                bodyData: events.map((event, i)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_event_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        event: event\n                    }, i, false, void 0, void 0);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paulhartman/Documents/repos/personal/dadz/src/app/4/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paulhartman/Documents/repos/personal/dadz/src/app/4/page.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(PerformaceSchedule, \"xm39LQJZ5lblJfidbN+iKd7KHGo=\");\n_c = PerformaceSchedule;\nvar _c;\n$RefreshReg$(_c, \"PerformaceSchedule\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC80L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ1U7QUFDTTtBQUNUO0FBQ0s7QUFDUTtBQUUzQyxTQUFTTzs7SUFFcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDSSxnREFBT0E7SUFDNUMscUJBQ0ksOERBQUNDLG9FQUFZQTs7MEJBQ2IsOERBQUNKLGdFQUFHQTs7Ozs7MEJBQ0osOERBQUNDLG1FQUFNQTtnQkFBQ08sV0FBVTtnQkFBUUMsVUFBVUgsT0FBT0ksR0FBRyxDQUFDLENBQUNDLE9BQU1DO29CQUNsRCxxQkFDSSw4REFBQ1YsOERBQUtBO3dCQUFTUyxPQUFPQTt1QkFBVkM7Z0JBRXBCOzs7Ozs7Ozs7Ozs7QUFHSjtHQWJvQlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC80L3BhZ2UudHN4PzM1MGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2FwcC9jb21wb25lbnRzL25hdi9wYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L3BhZ2UnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvZXZlbnQvcGFnZSc7XG5pbXBvcnQgX2V2ZW50cyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvZXZlbnRzLmpzb24nO1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMC9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJmb3JtYWNlU2NoZWR1bGUoKSB7XG5cbiAgICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoX2V2ZW50cyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVzZXJQcm92aWRlcj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0nZXZlbnRzJ2JvZHlEYXRhPXtldmVudHMubWFwKChldmVudCxpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxFdmVudCBrZXk9e2l9IGV2ZW50PXtldmVudH0vPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX0gLz5cbiAgICAgICAgPC9Vc2VyUHJvdmlkZXI+XG4gICAgKTtcbiAgICB9XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdiIsIkxheW91dCIsIkV2ZW50IiwiX2V2ZW50cyIsIlVzZXJQcm92aWRlciIsIlBlcmZvcm1hY2VTY2hlZHVsZSIsImV2ZW50cyIsInNldEV2ZW50cyIsImNsYXNzTmFtZSIsImJvZHlEYXRhIiwibWFwIiwiZXZlbnQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/4/page.tsx\n"));

/***/ })

});