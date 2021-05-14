self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Recommend.js":
/*!*********************************!*\
  !*** ./components/Recommend.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Recommend; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Recommend.module.css */ "./styles/Recommend.module.css");
/* harmony import */ var _styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\vscode\\projects\\homework\\lesson-7-homework\\taobao\\components\\Recommend.js";




function SingleItem(item, i) {
  var router = {
    pathname: '/detail',
    query: {
      id: item.nid
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().recommendItem),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: router,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgBox),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: item.pict_url
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 46
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/detail.js",
      as: "/".concat(item.nid),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().info),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleBox),
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().priceBox),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),
            children: "\uFFE5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),
            children: item.real_wap_price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().buyer),
            children: item.month_sale
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_c = SingleItem;
function Recommend(_ref) {
  var _this = this;

  var goods = _ref.goods;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().recommend),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Recommend_module_css__WEBPACK_IMPORTED_MODULE_3___default().like),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/images/like.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), goods.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: SingleItem(item)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 34
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}
_c2 = Recommend;

var _c, _c2;

$RefreshReg$(_c, "SingleItem");
$RefreshReg$(_c2, "Recommend");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNvbW1lbmQuanMiXSwibmFtZXMiOlsiU2luZ2xlSXRlbSIsIml0ZW0iLCJpIiwicm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwibmlkIiwic3R5bGVzIiwicGljdF91cmwiLCJ0aXRsZSIsInJlYWxfd2FwX3ByaWNlIiwibW9udGhfc2FsZSIsIlJlY29tbWVuZCIsImdvb2RzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBS0EsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLE1BQUlDLE1BQU0sR0FBQztBQUNQQyxZQUFRLEVBQUUsU0FESDtBQUVQQyxTQUFLLEVBQUU7QUFDSEMsUUFBRSxFQUFFTCxJQUFJLENBQUNNO0FBRE47QUFGQSxHQUFYO0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLG1GQUFoQjtBQUFBLDRCQUVJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFFTCxNQUFaO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFFSyw0RUFBZDtBQUFBLCtCQUE2QjtBQUFLLGFBQUcsRUFBRVAsSUFBSSxDQUFDUTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUtJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBd0IsUUFBRSxhQUFNUixJQUFJLENBQUNNLEdBQVgsQ0FBMUI7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUVDLDBFQUFkO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSw4RUFBaEI7QUFBQSxvQkFBa0NQLElBQUksQ0FBQ1M7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRUYsOEVBQWhCO0FBQUEsa0NBQ0k7QUFBTSxxQkFBUyxFQUFFQSwwRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFNLHFCQUFTLEVBQUVBLDJFQUFqQjtBQUFBLHNCQUFnQ1AsSUFBSSxDQUFDVTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0k7QUFBTSxxQkFBUyxFQUFFSCwyRUFBakI7QUFBQSxzQkFBZ0NQLElBQUksQ0FBQ1c7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztLQXpCUVosVTtBQTJCTSxTQUFTYSxTQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUkMsS0FBUSxRQUFSQSxLQUFRO0FBQ3ZDLHNCQUNJO0FBQUssYUFBUyxFQUFFTiwrRUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsMEVBQWhCO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBSUtNLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNkLElBQUQsRUFBTUMsQ0FBTjtBQUFBLDBCQUFVO0FBQUEsa0JBQWNGLFVBQVUsQ0FBQ0MsSUFBRDtBQUF4QixTQUFVQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjtBQUFBLEtBQVYsQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIO01BVHVCVyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmOGNjODdjMjU5YjkwY2ExNTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1JlY29tbWVuZC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU2luZ2xlSXRlbShpdGVtLGkpIHtcclxuICAgIGxldCByb3V0ZXI9e1xyXG4gICAgICAgIHBhdGhuYW1lOiAnL2RldGFpbCcsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0ubmlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY29tbWVuZEl0ZW19PlxyXG4gICAgICAgICAgICB7Lyog55So6Lev55Sx6YGu55uW77yIUm91dGUgTWFza2luZ++8ieeahOW5suWHgOeahFVSTCAqL31cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cm91dGVyfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmltZ0JveH0+PGltZyBzcmM9e2l0ZW0ucGljdF91cmx9IC8+PC9hPiAgXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2RldGFpbC5qcycgYXM9e2AvJHtpdGVtLm5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVCb3h9PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT7vv6U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlfT57aXRlbS5yZWFsX3dhcF9wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJ1eWVyfT57aXRlbS5tb250aF9zYWxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNvbW1lbmQoe2dvb2RzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlY29tbWVuZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9saWtlLnBuZycgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtnb29kcy5tYXAoKGl0ZW0saSk9PjxkaXYga2V5PXtpfT57U2luZ2xlSXRlbShpdGVtKX08L2Rpdj4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==