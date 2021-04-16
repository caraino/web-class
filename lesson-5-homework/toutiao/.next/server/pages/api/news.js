module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yQEm");


/***/ }),

/***/ "yQEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.statusCode = 200;
  res.json({
    code: 200,
    data: [{
      'title': '潮头观澜丨新的关头 再探改革',
      'img_url': 'https://p3.pstatp.com/list/190x124/pgc-image/C6B67A952E62AC877FBCA523AEF9F3F2',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAZ-7_bvIhGk-tKa7Z4B3GUSA0d-6Rc3qMsEsMEPPUQig/',
      'tag': '时政',
      'source': '央视新闻',
      'source_img': 'https://p26-tt.byteimg.com/origin/pgc-image/6567094cd4c249a487b66a43cfcd414d',
      'source_url': 'https://www.toutiao.com/group/6943647515250000397/',
      'comments': 522,
      'time': 1616745403
    }, {
      'title': '习近平同喀麦隆总统比亚就中喀建交50周年互致贺电',
      'img_url': 'null',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAiAce5qhH31TeuB3UdpFMV8u-uwy2LnoiqI10uZHqAt8/',
      'tag': '国际',
      'source': '新华社',
      'source_img': 'https://p26-tt.byteimg.com/origin/pgc-image/21507a12df2c4e7eb2d859c6f32dd497',
      'source_url': 'https://www.toutiao.com/group/6943770469434655246/',
      'comments': 794,
      'time': 1616744953
    }, {
      'title': '外交部 不许外国企业边吃中国的饭 边砸中国的碗',
      'img_url': 'https://p1.pstatp.com/list/190x124/tos-cn-i-0004/400e1cebcbd143aa8574ef2bb4110978',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAaezOXkHVr0_i2JvWXprb4zLGpRInnKStptFm5WsXHKU/',
      'tag': '视频',
      'source': '央视网新闻',
      'source_img': 'https://p1-tt-ipv6.byteimg.com/large/bc20000b91968707dab',
      'source_url': 'https://www.toutiao.com/group/6943528766001906189/',
      'comments': 10003,
      'time': 1616744503
    }, {
      'title': '回乡种地，立志当农民！“90后”学霸夫妻的深山逐梦路',
      'img_url': 'https://p3.pstatp.com/list/190x124/pgc-image/SSXD3GU52JqFKM',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAA9Lz0MeLdJDmqpU26Xi9O_M-cYI9z530wjM7eDKvzZTw/',
      'tag': '三农',
      'source': '光明网',
      'source_img': 'https://p6-tt-ipv6.byteimg.com/large/pgc-image/1f702ff89f9e4c45a2c23c6bb607309e',
      'source_url': 'https://www.toutiao.com/group/6943036201133670920/',
      'comments': 3943,
      'time': 1616744053
    }, {
      'title': '漂来旅行箱藏无名女尸 警方抽干河水 河底银行卡揭开命案谜团',
      'img_url': 'https://p1.pstatp.com/list/190x124/tos-cn-i-0004/105d539e95914a6a9ebd9b69d413b6c5',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAaezOXkHVr0_i2JvWXprb4zLGpRInnKStptFm5WsXHKU/',
      'tag': '视频',
      'source': '央视网新闻',
      'source_img': 'https://p1-tt-ipv6.byteimg.com/large/bc20000b91968707dab',
      'source_url': 'https://www.toutiao.com/group/6943782650985316903/',
      'comments': 708,
      'time': 1616743603
    }, {
      'title': '拜登威胁：绝不允许中国超越美国！美媒：中国不再尊重美国，合情合理',
      'img_url': 'https://p1.pstatp.com/list/pgc-image/da7ff48e77654b689cb5f3a8164c7b0a',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAA8QdhBwD7b7Afs1sdZjsw9TkKaqNU1xopqIM_GZzhRSA/',
      'tag': '国际',
      'source': '中国网',
      'source_img': 'https://p6-tt-ipv6.byteimg.com/large/pgc-image/2f20f58aab044201a1008d922b7b4b18',
      'source_url': 'https://www.toutiao.com/group/6943806384500720160/',
      'comments': 2569,
      'time': 1616743153
    }, {
      'title': '这是今天最“刚”的解约声明了吧',
      'img_url': 'https://p3.pstatp.com/list/190x124/pgc-image/SSiN1bsDpwETE9',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAxvhRvfp8QotIo15bD0cWxFiKWMXaUldeG_Ep2unxBqM/',
      'tag': '娱乐',
      'source': '中国青年网',
      'source_img': 'https://p26-tt.byteimg.com/origin/pgc-image/734c776a61d74a0ba70d13c76b820e0b',
      'source_url': 'https://www.toutiao.com/group/6943733605411586596/',
      'comments': 5477,
      'time': 1616742703
    }, {
      'title': 'H&M、耐克们，对新疆棉花一无所知',
      'img_url': 'https://p1.pstatp.com/list/190x124/pgc-image/SSebrTxHvhkcc4',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAP09LrX61xFpIWrgGdBDqkp-5om9Lans_kuIZ_ipAGRE/',
      'tag': '传媒',
      'source': '新华网客户端',
      'source_img': 'https://p6-tt-ipv6.byteimg.com/large/pgc-image/03f6307ae99745119fa95747f9d9e525',
      'source_url': 'https://www.toutiao.com/group/6943501837089800718/',
      'comments': 869,
      'time': 1616742253
    }, {
      'title': 'H&M耐克都凉了，A股力挺新疆棉！棉花板块全面爆发，港股李宁半日涨近10%！王一博宋茜黄轩带头解约',
      'img_url': 'https://p3.pstatp.com/list/190x124/pgc-image/SSj9boN5pYU0vF',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAiAce5qhH31TeuB3UdpFMV8u-uwy2LnoiqI10uZHqAt8/',
      'tag': '财经',
      'source': '新华社',
      'source_img': 'https://p26-tt.byteimg.com/origin/pgc-image/21507a12df2c4e7eb2d859c6f32dd497',
      'source_url': 'https://www.toutiao.com/group/6943784813652509214/',
      'comments': 15,
      'time': 1616741803
    }, {
      'title': '南宁一小区多名女性在自家楼下被猥亵，有受害人连家都不敢回',
      'img_url': 'https://p3.pstatp.com/list/190x124/pgc-image/SSisFJ76tkCPSQ',
      'url': 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAvazHMceCo3MeM9IJbll231AC8GkJDcrd__iZFw2hi4o/',
      'tag': '社会',
      'source': '环球网',
      'source_img': 'https://p3-tt-ipv6.byteimg.com/large/pgc-image/377d80150d1d4f2498e106b97cba7995',
      'source_url': 'https://www.toutiao.com/group/6943827166391960071/',
      'comments': 37,
      'time': 1616741353
    }]
  });
});

/***/ })

/******/ });