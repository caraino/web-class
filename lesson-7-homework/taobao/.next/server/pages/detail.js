(function() {
var exports = {};
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 8853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ detail; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./styles/Detail.module.css
var Detail_module = __webpack_require__(4250);
var Detail_module_default = /*#__PURE__*/__webpack_require__.n(Detail_module);
;// CONCATENATED MODULE: ./pages/detail.js






function Detail({
  goods,
  router
}) {
  const item = goods.find(item => item.nid === router.query.id);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Detail_module_default()).detail,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Detail_module_default()).goodsContain,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Detail_module_default()).picsBox,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Detail_module_default()).pics,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item.pict_url
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Detail_module_default()).msg,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Detail_module_default()).priceSection,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).section1,
            children: "\uFFE5"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).section2,
            children: item.real_wap_price
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Detail_module_default()).sales,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Detail_module_default()).salesMsg,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\uFF08\u5546\u54C1\u4F18\u60E0\u4FE1\u606F\uFF09"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (Detail_module_default()).salesDetail,
            children: "\u67E5\u770B >"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Detail_module_default()).buys,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).tag,
            children: "\uFF08\u5546\u54C1\u76F8\u5173tag\uFF09"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).buyer,
            children: item.month_sale
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Detail_module_default()).titleSection,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).title,
            children: item.title
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Detail_module_default()).msg,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "\u9009\u62E9"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Detail_module_default()).msg,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "\u8BC4\u4EF7"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Detail_module_default()).msg,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "\u5E97\u94FA\u4FE1\u606F"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Detail_module_default()).buy,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Detail_module_default()).others,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#!",
          className: (Detail_module_default()).tab,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).iconfont,
            children: "\uE604"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).font3,
            children: "\u5E97\u94FA"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#!",
          className: (Detail_module_default()).tab,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).iconfont,
            children: "\uE60D"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).font3,
            children: "\u5BA2\u670D"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#!",
          className: (Detail_module_default()).tab,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).iconfont,
            children: "\uE602"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).font3,
            children: "\u6536\u85CF"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Detail_module_default()).buyBtn,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Detail_module_default()).btn1,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).text,
            children: "\u52A0\u5165\u8D2D\u7269\u8F66"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Detail_module_default()).btn2,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Detail_module_default()).text,
            children: "\u7ACB\u5373\u8D2D\u4E70"
          })
        })]
      })]
    })]
  });
}

const getServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/goods");
  let data = await res.json();
  return {
    props: {
      goods: data.data
    }
  };
};
/* harmony default export */ var detail = ((0,router_namespaceObject.withRouter)(Detail));

/***/ }),

/***/ 4250:
/***/ (function(module) {

// Exports
module.exports = {
	"detail": "Detail_detail__XhK57",
	"goodsContain": "Detail_goodsContain__15ENn",
	"pics": "Detail_pics__1jAqf",
	"msg": "Detail_msg__2e5GG",
	"priceSection": "Detail_priceSection__fepjY",
	"section1": "Detail_section1__1LHx0",
	"section2": "Detail_section2__1k0N4",
	"sales": "Detail_sales__twRL4",
	"salesMsg": "Detail_salesMsg__MU5Pc",
	"salesDetail": "Detail_salesDetail__1CS_c",
	"buys": "Detail_buys__MgmBh",
	"tag": "Detail_tag__3yzFT",
	"buyer": "Detail_buyer__SsWPu",
	"titleSection": "Detail_titleSection__3p6wU",
	"title": "Detail_title__3fQ_D",
	"buy": "Detail_buy__2s87s",
	"others": "Detail_others__1XpAr",
	"tab": "Detail_tab__1wJ8k",
	"iconfont": "Detail_iconfont__1g6nU",
	"font3": "Detail_font3__1VJ7Z",
	"buyBtn": "Detail_buyBtn__34itp",
	"btn1": "Detail_btn1__1-zXD",
	"btn2": "Detail_btn2__1q4rB",
	"text": "Detail_text__307Dy"
};


/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8853));
module.exports = __webpack_exports__;

})();