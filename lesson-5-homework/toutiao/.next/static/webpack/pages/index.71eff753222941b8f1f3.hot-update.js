webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/Main/index.js":
/*!****************************************!*\
  !*** ./pages/components/Main/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var _jsxFileName = "D:\\vscode\\projects\\homework\\lesson-5-homework\\toutiao\\pages\\components\\Main\\index.js",
    _s = $RefreshSig$();



function Main() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      list = _useState[0],
      setList = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetch("/api/news").then( /*#__PURE__*/function () {
      var _ref = Object(D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(res) {
        var resp;
        return D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return res.json();

              case 2:
                resp = _context.sent;
                setList(resp.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, []);

  function DateDiff(startTime) {
    var date = new Date().valueOf() / 1000;
    var timeDiff = date - startTime;

    if (Math.floor(timeDiff / 86400 / 365) >= 1) {
      return Math.floor(timeDiff / 86400 / 365) + "年前";
    } else if (Math.floor(timeDiff / 86400 / 30) >= 1) {
      return Math.floor(timeDiff / 86400 / 30) + "月前";
    } else if (Math.floor(timeDiff / 86400) >= 1) {
      return Math.floor(timeDiff / 86400) + "天前";
    } else if (Math.floor(timeDiff / 3600) >= 1) {
      return Math.floor(timeDiff / 3600) + "小时前";
    } else if (Math.floor(timeDiff / 60) >= 1) {
      return Math.floor(timeDiff / 60) + "分钟前";
    } else {
      return "刚刚";
    }
  } // const mainRef=useRef();
  // console.log(mainRef.current)


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      scrollPosition = _useState2[0],
      setScrollPosition = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var handler = function handler() {
      setScrollPosition({
        scrollH: document.documentElement.scrollHeight,
        clientH: document.documentElement.clientHeight,
        scrollT: document.documentElement.scrollTop
      });
    };

    window.addEventListener('scroll', handler, {
      passive: true
    });
    return function () {
      window.removeEventListener('scroll', handler);
    };
  }, []);
  console.log(scrollPosition.scrollH - scrollPosition.clientH - scrollPosition.scrollT);

  if (scrollPosition.scrollH - scrollPosition.clientH <= scrollPosition.scrollT + 400) {
    fetch("/api/news").then( /*#__PURE__*/function () {
      var _ref2 = Object(D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(res) {
        var resp;
        return D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return res.json();

              case 2:
                resp = _context2.sent;
                setList(function (l) {
                  return [].concat(Object(D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(l), Object(D_vscode_projects_homework_lesson_5_homework_toutiao_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(resp.data));
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  console.log(list);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-4146117004" + " " + "center-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-4146117004" + " " + "msg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-4146117004" + " " + "news-list",
        children: list.map(function (i) {
          if (i.img_url === 'null') {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-4146117004" + " " + "mode1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-4146117004" + " " + "news-title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: i.source_url,
                  className: "jsx-4146117004" + " " + "news-link",
                  children: i.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-4146117004" + " " + "news-footer",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-4146117004" + " " + "news-footer-left",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#!",
                    className: "jsx-4146117004" + " " + "news-tag tag-politic",
                    children: i.tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: i.url,
                    className: "jsx-4146117004" + " " + "news-media-img",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: i.source_img,
                      className: "jsx-4146117004"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 88
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: i.url,
                    className: "jsx-4146117004" + " " + "news-about",
                    children: ["\xA0", i.source, "\xA0\xB7"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#!",
                    className: "jsx-4146117004" + " " + "news-about",
                    children: ["\xA0", i.comments, "\u8BC4\u8BBA\xA0\xB7"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "jsx-4146117004" + " " + "news-time",
                    children: ["\xA0", DateDiff(i.time)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-4146117004" + " " + "news-footer-right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-4146117004" + " " + "dislike",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "jsx-4146117004" + " " + "close",
                      children: "X"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, _this);
          } else {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-4146117004" + " " + "mode2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-4146117004" + " " + "mode2-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: i.source_url,
                  className: "jsx-4146117004" + " " + "mode2-img",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: i.img_url,
                    className: "jsx-4146117004"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-4146117004" + " " + "mode2-right",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-4146117004" + " " + "mode2-news",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-4146117004" + " " + "news-title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: i.source_url,
                      className: "jsx-4146117004" + " " + "news-link",
                      children: i.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-4146117004" + " " + "news-footer",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-4146117004" + " " + "news-footer-left",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#!",
                        className: "jsx-4146117004" + " " + "news-tag tag-politic",
                        children: i.tag
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: i.url,
                        className: "jsx-4146117004" + " " + "news-media-img",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: i.source_img,
                          className: "jsx-4146117004"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 92
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: i.url,
                        className: "jsx-4146117004" + " " + "news-about",
                        children: ["\xA0", i.source, "\xA0\xB7"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#!",
                        className: "jsx-4146117004" + " " + "news-about",
                        children: ["\xA0", i.comments, "\u8BC4\u8BBA\xA0\xB7"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "jsx-4146117004" + " " + "news-time",
                        children: ["\xA0", DateDiff(i.time)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-4146117004" + " " + "news-footer-right",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-4146117004" + " " + "dislike",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "jsx-4146117004" + " " + "close",
                          children: "X"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, _this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "4146117004",
      children: ".center-content.jsx-4146117004{width:660px;display:inline-block;margin:0 auto;}.mode1.jsx-4146117004{padding:10px 0;border-bottom:1px solid #e8e8e8;}.news-title.jsx-4146117004{font-size:20px;margin-bottom:4px;line-height:1.3;font-weight:700;max-height:52px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.news-link.jsx-4146117004{color:#222;}.news-footer.jsx-4146117004{color:#999;margin-top:10px;height:20px;}.news-footer-left.jsx-4146117004{display:inline-block;vertical-align:middle;line-height:20px;font-size:0;}.news-footer-left.jsx-4146117004>*.jsx-4146117004{display:inline-block;vertical-align:middle;line-height:1;font-size:14px;}.news-tag.jsx-4146117004{font-size:12px;margin-right:10px;padding:1px 2px;border:1px solid #87a5b5;color:#87a5b5;}.tag-video.jsx-4146117004{border:1px solid #ff7920;color:#ff7920;}.news-media-img.jsx-4146117004{width:18px;height:18px;margin-right:2px;border-radius:50%;overflow:hidden;}.news-media-img.jsx-4146117004 img.jsx-4146117004{width:18px;height:18px;border-radius:50%;}.news-about.jsx-4146117004{font-size:14px;color:#777;}.news-time.jsx-4146117004{color:#777;}.mode2.jsx-4146117004{height:102px;padding:10px 0;border-bottom:1px solid #e8e8e8;}.mode2-left.jsx-4146117004{width:158px;height:102px;margin-right:16px;overflow:hidden;float:left;}.mode2-img.jsx-4146117004{display:inline-block;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;}.mode2-img.jsx-4146117004>img.jsx-4146117004{width:158px;height:102px;-webkit-transition:all 0.5s;transition:all 0.5s;}.video-tip.jsx-4146117004{position:absolute;right:8px;bottom:8px;padding:0 6px 0 18px;background-color:rgba(0,0,0,0.7);border-radius:10px;font-size:12px;color:#fff;height:22px;line-height:22px;}.video-tip.jsx-4146117004::before{content:\"\";position:absolute;top:7px;left:8px;border-style:solid;border-width:5px;border-color:transparent transparent transparent #fff;}.mode2-right.jsx-4146117004{overflow:hidden;height:100%;position:relative;}.mode2-news.jsx-4146117004{display:inline-block;width:100%;vertical-align:middle;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.news-footer-right.jsx-4146117004{float:right;}.dislike.jsx-4146117004{height:20px;width:20px;}.close.jsx-4146117004{font-size:12px;color:#ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx2c2NvZGVcXHByb2plY3RzXFxob21ld29ya1xcbGVzc29uLTUtaG9tZXdvcmtcXHRvdXRpYW9cXHBhZ2VzXFxjb21wb25lbnRzXFxNYWluXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSXdCLEFBRzZCLEFBTU8sQUFLQSxBQWFKLEFBSUEsQUFNVSxBQU9BLEFBT04sQUFRVSxBQUtkLEFBUUEsQUFNSSxBQUtKLEFBSUUsQUFNRCxBQVFTLEFBTVQsQUFNTSxBQWFQLEFBVUssQUFNSyxBQVNULEFBSUEsQUFLRyxXQXBJbkIsQUFJb0IsQUFpQ0osQUFRQSxBQVdoQixBQTJDc0IsQ0EzSEQsQUEwRkosQUFjQSxBQTRDakIsQUFJZSxDQXBFSSxFQTlFaUIsQUFLZCxBQXFDQSxBQTJCUCxBQWtGQSxDQXhCQyxFQXZCRixHQTVFWSxBQU9BLEFBeURKLEFBeUNQLEVBN0VNLEFBUUMsQUFtRnRCLEVBakdrQixBQW1DSSxBQWNFLENBN0J4QixBQWtGQSxDQWpJZ0IsQ0F3RG9CLEFBMEJyQixBQXVCTyxDQVZWLEdBZ0JjLENBM0laLEFBV00sQUFxQ0EsSUE0RVAsRUEvRmIsQUEyQkEsQUEwQ2dDLEFBYVAsQ0FqREgsQ0FRdEIsRUFwQ3FCLEFBT0gsQUFrREUsR0FrQ0csQUFTdkIsQ0FySUEsQUFLQSxFQU1vQixBQXFDUyxLQTJGUCxHQWxHSCxDQXFCQyxDQTZCTCxDQXpEQyxBQWtEaEIsQUEyQndDLEtBbkdwQixBQWlIQyxLQWpDckIsRUF6REEsQUFPQSxBQWtHWSxDQXBDWixDQXZEa0IsQUFjbEIsTUE4RStCLENBaElYLENBaUhzQyxNQTVFMUQsS0E4RHVCLElBbEdJLGVBbUdSLFFBbEdLLE9BbUdULFFBaEJmLENBNkJBLEVBWmdCLEVBbkdnQixVQW9HWCxpQkFDckIsQ0FwR3lCLEtBNkh6QixnQkE1SEEiLCJmaWxlIjoiRDpcXHZzY29kZVxccHJvamVjdHNcXGhvbWV3b3JrXFxsZXNzb24tNS1ob21ld29ya1xcdG91dGlhb1xccGFnZXNcXGNvbXBvbmVudHNcXE1haW5cXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QoIHJlc3AuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRGF0ZURpZmYoc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpIC8gMTAwMDtcclxuICAgICAgICB2YXIgdGltZURpZmYgPSBkYXRlIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCAvIDM2NSkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzY1KSArIFwi5bm05YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzApICsgXCLmnIjliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwKSArIFwi5aSp5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gMzYwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDM2MDApICsgXCLlsI/ml7bliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA2MCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDYwKSArIFwi5YiG6ZKf5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5Yia5YiaXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBtYWluUmVmPXVzZVJlZigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWFpblJlZi5jdXJyZW50KVxyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxQb3NpdGlvbih7XHJcbiAgICAgICAgICAgIHNjcm9sbEg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIFxyXG4gICAgICAgICAgICBjbGllbnRIOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICBzY3JvbGxUOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SC1zY3JvbGxQb3NpdGlvbi5zY3JvbGxUKVxyXG5cclxuICAgIGlmKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SDw9c2Nyb2xsUG9zaXRpb24uc2Nyb2xsVCs0MDApIHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QobD0+Wy4uLmwsLi4ucmVzcC5kYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpLmltZ191cmw9PT0nbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbGlua1wiIGhyZWY9e2kuc291cmNlX3VybH0+e2kudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbWVkaWEtaW1nXCIgaHJlZj17aS51cmx9PjxpbWcgc3JjPXtpLnNvdXJjZV9pbWd9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPXtpLnVybH0+Jm5ic3A7e2kuc291cmNlfSZuYnNwO8K3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdzLXRpbWVcIj4mbmJzcDt7RGF0ZURpZmYoaS50aW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2xpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZTItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9kZTItaW1nXCIgaHJlZj17aS5zb3VyY2VfdXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aS5pbWdfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1saW5rXCIgaHJlZj17aS5zb3VyY2VfdXJsfT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZm9vdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLW1lZGlhLWltZ1wiIGhyZWY9e2kudXJsfT48aW1nIHNyYz17aS5zb3VyY2VfaW1nfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9e2kudXJsfT4mbmJzcDt7aS5zb3VyY2V9Jm5ic3A7wrc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3cy10aW1lXCI+Jm5ic3A7e0RhdGVEaWZmKGkudGltZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgIC5jZW50ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdD4qIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50YWctdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLW1lZGlhLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1tZWRpYS1pbWcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2RlMi1pbWc+aW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDJweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnZpZGVvLXRpcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHggMCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC52aWRlby10aXA6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLW5ld3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3Rlci1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGlzbGlrZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\vscode\\\\projects\\\\homework\\\\lesson-5-homework\\\\toutiao\\\\pages\\\\components\\\\Main\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(Main, "0AjOnM4bPXQk1Jz5VjtM/YwejhI=");

_c = Main;

var _c;

$RefreshReg$(_c, "Main");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3AiLCJkYXRhIiwiRGF0ZURpZmYiLCJzdGFydFRpbWUiLCJkYXRlIiwiRGF0ZSIsInZhbHVlT2YiLCJ0aW1lRGlmZiIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVyIiwic2Nyb2xsSCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SCIsImNsaWVudEhlaWdodCIsInNjcm9sbFQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibCIsIm1hcCIsImkiLCJpbWdfdXJsIiwic291cmNlX3VybCIsInRpdGxlIiwidGFnIiwidXJsIiwic291cmNlX2ltZyIsInNvdXJjZSIsImNvbW1lbnRzIiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUczQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssQ0FBQyxXQUFELENBQUwsQ0FBbUJDLElBQW5CO0FBQUEsb1VBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0RBLEdBQUcsQ0FBQ0MsSUFBSixFQURDOztBQUFBO0FBQ2RDLG9CQURjO0FBRXBCTix1QkFBTyxD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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFRSTtBQUFBLDBEQUFlLG1CQUFmO0FBQUEsNkNBQ0k7QUFBQSw0REFBZSxTQUFmO0FBQUEsK0NBQ0k7QUFBQSw4REFBZ0IsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUE4Qkg7QUFFSixTQXhEQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBc09IOztHQXJTdUIvQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcxZWZmNzUzMjIyOTQxYjhmMWYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKFwiL2FwaS9uZXdzXCIpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0TGlzdCggcmVzcC5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBEYXRlRGlmZihzdGFydFRpbWUpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IChuZXcgRGF0ZSgpKS52YWx1ZU9mKCkgLyAxMDAwO1xyXG4gICAgICAgIHZhciB0aW1lRGlmZiA9IGRhdGUgLSBzdGFydFRpbWVcclxuICAgICAgICBpZiAoTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzY1KSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzNjUpICsgXCLlubTliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCAvIDMwKSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzMCkgKyBcIuaciOWJjVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwKSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDApICsgXCLlpKnliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyAzNjAwKSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVEaWZmIC8gMzYwMCkgKyBcIuWwj+aXtuWJjVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5mbG9vcih0aW1lRGlmZiAvIDYwKSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRpbWVEaWZmIC8gNjApICsgXCLliIbpkp/liY1cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLliJrliJpcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IG1haW5SZWY9dXNlUmVmKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYWluUmVmLmN1cnJlbnQpXHJcblxyXG4gICAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgIHNldFNjcm9sbFBvc2l0aW9uKHtcclxuICAgICAgICAgICAgc2Nyb2xsSDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgXHJcbiAgICAgICAgICAgIGNsaWVudEg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgIHNjcm9sbFQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2Nyb2xsUG9zaXRpb24uc2Nyb2xsSC1zY3JvbGxQb3NpdGlvbi5jbGllbnRILXNjcm9sbFBvc2l0aW9uLnNjcm9sbFQpXHJcblxyXG4gICAgaWYoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsSC1zY3JvbGxQb3NpdGlvbi5jbGllbnRIPD1zY3JvbGxQb3NpdGlvbi5zY3JvbGxUKzQwMCkge1xyXG4gICAgICAgIGZldGNoKFwiL2FwaS9uZXdzXCIpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0TGlzdChsPT5bLi4ubCwuLi5yZXNwLmRhdGFdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cobGlzdClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3QubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkuaW1nX3VybD09PSdudWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1saW5rXCIgaHJlZj17aS5zb3VyY2VfdXJsfT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZm9vdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLXRhZyB0YWctcG9saXRpY1wiIGhyZWY9XCIjIVwiPntpLnRhZ308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1tZWRpYS1pbWdcIiBocmVmPXtpLnVybH0+PGltZyBzcmM9e2kuc291cmNlX2ltZ30gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9e2kudXJsfT4mbmJzcDt7aS5zb3VyY2V9Jm5ic3A7wrc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9XCIjIVwiPiZuYnNwO3tpLmNvbW1lbnRzfeivhOiuuiZuYnNwO8K3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ld3MtdGltZVwiPiZuYnNwO3tEYXRlRGlmZihpLnRpbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3Rlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzbGlrZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtb2RlMi1pbWdcIiBocmVmPXtpLnNvdXJjZV91cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpLmltZ191cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUyLW5ld3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLWxpbmtcIiBocmVmPXtpLnNvdXJjZV91cmx9PntpLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLXRhZyB0YWctcG9saXRpY1wiIGhyZWY9XCIjIVwiPntpLnRhZ308L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbWVkaWEtaW1nXCIgaHJlZj17aS51cmx9PjxpbWcgc3JjPXtpLnNvdXJjZV9pbWd9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLWFib3V0XCIgaHJlZj17aS51cmx9PiZuYnNwO3tpLnNvdXJjZX0mbmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9XCIjIVwiPiZuYnNwO3tpLmNvbW1lbnRzfeivhOiuuiZuYnNwO8K3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdzLXRpbWVcIj4mbmJzcDt7RGF0ZURpZmYoaS50aW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3Rlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2xpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCI+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5ld3MtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5ld3MtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3Rlci1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3Rlci1sZWZ0Pioge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5ld3MtdGFnIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg3YTViNTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg3YTViNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRhZy12aWRlbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNzkyMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNzkyMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5ld3MtbWVkaWEtaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLW1lZGlhLWltZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWFib3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2RlMi1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLWltZz5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudmlkZW8tdGlwIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDZweCAwIDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnZpZGVvLXRpcDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2RlMi1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItbmV3cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5ld3MtZm9vdGVyLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kaXNsaWtlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9