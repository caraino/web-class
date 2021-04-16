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
  }, []); // console.log(scrollPosition.scrollH-scrollPosition.clientH-scrollPosition.scrollT)

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
  } // console.log(list)


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
      children: ".center-content.jsx-4146117004{width:660px;display:inline-block;margin:0 auto;}.mode1.jsx-4146117004{padding:10px 0;border-bottom:1px solid #e8e8e8;}.news-title.jsx-4146117004{font-size:20px;margin-bottom:4px;line-height:1.3;font-weight:700;max-height:52px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.news-link.jsx-4146117004{color:#222;}.news-footer.jsx-4146117004{color:#999;margin-top:10px;height:20px;}.news-footer-left.jsx-4146117004{display:inline-block;vertical-align:middle;line-height:20px;font-size:0;}.news-footer-left.jsx-4146117004>*.jsx-4146117004{display:inline-block;vertical-align:middle;line-height:1;font-size:14px;}.news-tag.jsx-4146117004{font-size:12px;margin-right:10px;padding:1px 2px;border:1px solid #87a5b5;color:#87a5b5;}.tag-video.jsx-4146117004{border:1px solid #ff7920;color:#ff7920;}.news-media-img.jsx-4146117004{width:18px;height:18px;margin-right:2px;border-radius:50%;overflow:hidden;}.news-media-img.jsx-4146117004 img.jsx-4146117004{width:18px;height:18px;border-radius:50%;}.news-about.jsx-4146117004{font-size:14px;color:#777;}.news-time.jsx-4146117004{color:#777;}.mode2.jsx-4146117004{height:102px;padding:10px 0;border-bottom:1px solid #e8e8e8;}.mode2-left.jsx-4146117004{width:158px;height:102px;margin-right:16px;overflow:hidden;float:left;}.mode2-img.jsx-4146117004{display:inline-block;position:relative;-webkit-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;}.mode2-img.jsx-4146117004>img.jsx-4146117004{width:158px;height:102px;-webkit-transition:all 0.5s;transition:all 0.5s;}.video-tip.jsx-4146117004{position:absolute;right:8px;bottom:8px;padding:0 6px 0 18px;background-color:rgba(0,0,0,0.7);border-radius:10px;font-size:12px;color:#fff;height:22px;line-height:22px;}.video-tip.jsx-4146117004::before{content:\"\";position:absolute;top:7px;left:8px;border-style:solid;border-width:5px;border-color:transparent transparent transparent #fff;}.mode2-right.jsx-4146117004{overflow:hidden;height:100%;position:relative;}.mode2-news.jsx-4146117004{display:inline-block;width:100%;vertical-align:middle;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.news-footer-right.jsx-4146117004{float:right;}.dislike.jsx-4146117004{height:20px;width:20px;}.close.jsx-4146117004{font-size:12px;color:#ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx2c2NvZGVcXHByb2plY3RzXFxob21ld29ya1xcbGVzc29uLTUtaG9tZXdvcmtcXHRvdXRpYW9cXHBhZ2VzXFxjb21wb25lbnRzXFxNYWluXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSXdCLEFBRzZCLEFBTU8sQUFLQSxBQWFKLEFBSUEsQUFNVSxBQU9BLEFBT04sQUFRVSxBQUtkLEFBUUEsQUFNSSxBQUtKLEFBSUUsQUFNRCxBQVFTLEFBTVQsQUFNTSxBQWFQLEFBVUssQUFNSyxBQVNULEFBSUEsQUFLRyxXQXBJbkIsQUFJb0IsQUFpQ0osQUFRQSxBQVdoQixBQTJDc0IsQ0EzSEQsQUEwRkosQUFjQSxBQTRDakIsQUFJZSxDQXBFSSxFQTlFaUIsQUFLZCxBQXFDQSxBQTJCUCxBQWtGQSxDQXhCQyxFQXZCRixHQTVFWSxBQU9BLEFBeURKLEFBeUNQLEVBN0VNLEFBUUMsQUFtRnRCLEVBakdrQixBQW1DSSxBQWNFLENBN0J4QixBQWtGQSxDQWpJZ0IsQ0F3RG9CLEFBMEJyQixBQXVCTyxDQVZWLEdBZ0JjLENBM0laLEFBV00sQUFxQ0EsSUE0RVAsRUEvRmIsQUEyQkEsQUEwQ2dDLEFBYVAsQ0FqREgsQ0FRdEIsRUFwQ3FCLEFBT0gsQUFrREUsR0FrQ0csQUFTdkIsQ0FySUEsQUFLQSxFQU1vQixBQXFDUyxLQTJGUCxHQWxHSCxDQXFCQyxDQTZCTCxDQXpEQyxBQWtEaEIsQUEyQndDLEtBbkdwQixBQWlIQyxLQWpDckIsRUF6REEsQUFPQSxBQWtHWSxDQXBDWixDQXZEa0IsQUFjbEIsTUE4RStCLENBaElYLENBaUhzQyxNQTVFMUQsS0E4RHVCLElBbEdJLGVBbUdSLFFBbEdLLE9BbUdULFFBaEJmLENBNkJBLEVBWmdCLEVBbkdnQixVQW9HWCxpQkFDckIsQ0FwR3lCLEtBNkh6QixnQkE1SEEiLCJmaWxlIjoiRDpcXHZzY29kZVxccHJvamVjdHNcXGhvbWV3b3JrXFxsZXNzb24tNS1ob21ld29ya1xcdG91dGlhb1xccGFnZXNcXGNvbXBvbmVudHNcXE1haW5cXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QoIHJlc3AuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRGF0ZURpZmYoc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpIC8gMTAwMDtcclxuICAgICAgICB2YXIgdGltZURpZmYgPSBkYXRlIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCAvIDM2NSkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzY1KSArIFwi5bm05YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzApICsgXCLmnIjliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwKSArIFwi5aSp5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gMzYwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDM2MDApICsgXCLlsI/ml7bliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA2MCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDYwKSArIFwi5YiG6ZKf5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5Yia5YiaXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBtYWluUmVmPXVzZVJlZigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWFpblJlZi5jdXJyZW50KVxyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxQb3NpdGlvbih7XHJcbiAgICAgICAgICAgIHNjcm9sbEg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIFxyXG4gICAgICAgICAgICBjbGllbnRIOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICBzY3JvbGxUOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SC1zY3JvbGxQb3NpdGlvbi5zY3JvbGxUKVxyXG5cclxuICAgIGlmKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SDw9c2Nyb2xsUG9zaXRpb24uc2Nyb2xsVCs0MDApIHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QobD0+Wy4uLmwsLi4ucmVzcC5kYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpLmltZ191cmw9PT0nbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbGlua1wiIGhyZWY9e2kuc291cmNlX3VybH0+e2kudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbWVkaWEtaW1nXCIgaHJlZj17aS51cmx9PjxpbWcgc3JjPXtpLnNvdXJjZV9pbWd9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPXtpLnVybH0+Jm5ic3A7e2kuc291cmNlfSZuYnNwO8K3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdzLXRpbWVcIj4mbmJzcDt7RGF0ZURpZmYoaS50aW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2xpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZTItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9kZTItaW1nXCIgaHJlZj17aS5zb3VyY2VfdXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aS5pbWdfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1saW5rXCIgaHJlZj17aS5zb3VyY2VfdXJsfT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZm9vdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLW1lZGlhLWltZ1wiIGhyZWY9e2kudXJsfT48aW1nIHNyYz17aS5zb3VyY2VfaW1nfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9e2kudXJsfT4mbmJzcDt7aS5zb3VyY2V9Jm5ic3A7wrc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3cy10aW1lXCI+Jm5ic3A7e0RhdGVEaWZmKGkudGltZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgIC5jZW50ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdD4qIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50YWctdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLW1lZGlhLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1tZWRpYS1pbWcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2RlMi1pbWc+aW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDJweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnZpZGVvLXRpcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHggMCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC52aWRlby10aXA6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLW5ld3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3Rlci1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGlzbGlrZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\vscode\\\\projects\\\\homework\\\\lesson-5-homework\\\\toutiao\\\\pages\\\\components\\\\Main\\\\index.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9NYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VTdGF0ZSIsImxpc3QiLCJzZXRMaXN0IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3AiLCJkYXRhIiwiRGF0ZURpZmYiLCJzdGFydFRpbWUiLCJkYXRlIiwiRGF0ZSIsInZhbHVlT2YiLCJ0aW1lRGlmZiIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVyIiwic2Nyb2xsSCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SCIsImNsaWVudEhlaWdodCIsInNjcm9sbFQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsIiwibWFwIiwiaSIsImltZ191cmwiLCJzb3VyY2VfdXJsIiwidGl0bGUiLCJ0YWciLCJ1cmwiLCJzb3VyY2VfaW1nIiwic291cmNlIiwiY29tbWVudHMiLCJ0aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBRzNCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsU0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUFtQkMsSUFBbkI7QUFBQSxvVUFBd0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDREEsR0FBRyxDQUFDQyxJQUFKLEVBREM7O0FBQUE7QUFDZEMsb0JBRGM7QUFFcEJOLHVCQUFPLENBQUVNLElBQUksQ0FBQ0Ms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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBOEJIO0FBRUosU0F4REE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQXNPSDs7R0FyU3VCN0MsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZjlmMTZlMDY2ZjIyZjg1YzkxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QoIHJlc3AuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRGF0ZURpZmYoc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpIC8gMTAwMDtcclxuICAgICAgICB2YXIgdGltZURpZmYgPSBkYXRlIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCAvIDM2NSkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzY1KSArIFwi5bm05YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gODY0MDAgLyAzMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwIC8gMzApICsgXCLmnIjliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA4NjQwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2NDAwKSArIFwi5aSp5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmZsb29yKHRpbWVEaWZmIC8gMzYwMCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDM2MDApICsgXCLlsI/ml7bliY1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguZmxvb3IodGltZURpZmYgLyA2MCkgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDYwKSArIFwi5YiG6ZKf5YmNXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5Yia5YiaXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb25zdCBtYWluUmVmPXVzZVJlZigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWFpblJlZi5jdXJyZW50KVxyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxQb3NpdGlvbih7XHJcbiAgICAgICAgICAgIHNjcm9sbEg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIFxyXG4gICAgICAgICAgICBjbGllbnRIOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICBzY3JvbGxUOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SC1zY3JvbGxQb3NpdGlvbi5zY3JvbGxUKVxyXG5cclxuICAgIGlmKHNjcm9sbFBvc2l0aW9uLnNjcm9sbEgtc2Nyb2xsUG9zaXRpb24uY2xpZW50SDw9c2Nyb2xsUG9zaXRpb24uc2Nyb2xsVCs0MDApIHtcclxuICAgICAgICBmZXRjaChcIi9hcGkvbmV3c1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldExpc3QobD0+Wy4uLmwsLi4ucmVzcC5kYXRhXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpLmltZ191cmw9PT0nbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbGlua1wiIGhyZWY9e2kuc291cmNlX3VybH0+e2kudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtbWVkaWEtaW1nXCIgaHJlZj17aS51cmx9PjxpbWcgc3JjPXtpLnNvdXJjZV9pbWd9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPXtpLnVybH0+Jm5ic3A7e2kuc291cmNlfSZuYnNwO8K3PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdzLXRpbWVcIj4mbmJzcDt7RGF0ZURpZmYoaS50aW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2xpa2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIj5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZTItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW9kZTItaW1nXCIgaHJlZj17aS5zb3VyY2VfdXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aS5pbWdfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlMi1uZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1saW5rXCIgaHJlZj17aS5zb3VyY2VfdXJsfT57aS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtZm9vdGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy10YWcgdGFnLXBvbGl0aWNcIiBocmVmPVwiIyFcIj57aS50YWd9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXdzLW1lZGlhLWltZ1wiIGhyZWY9e2kudXJsfT48aW1nIHNyYz17aS5zb3VyY2VfaW1nfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV3cy1hYm91dFwiIGhyZWY9e2kudXJsfT4mbmJzcDt7aS5zb3VyY2V9Jm5ic3A7wrc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5ld3MtYWJvdXRcIiBocmVmPVwiIyFcIj4mbmJzcDt7aS5jb21tZW50c33or4TorrombmJzcDvCtzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3cy10aW1lXCI+Jm5ic3A7e0RhdGVEaWZmKGkudGltZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1mb290ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgIC5jZW50ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjYwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUxIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1mb290ZXItbGVmdD4qIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLXRhZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4N2E1YjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50YWctdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjc5MjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLW1lZGlhLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1tZWRpYS1pbWcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy1hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmV3cy10aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2RlMi1pbWc+aW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDJweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnZpZGVvLXRpcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHggMCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC52aWRlby10aXA6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kZTItcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1vZGUyLW5ld3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uZXdzLWZvb3Rlci1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZGlzbGlrZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==