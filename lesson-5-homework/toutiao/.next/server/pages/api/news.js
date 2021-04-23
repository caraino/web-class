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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/news.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/news.js":
/*!***************************!*\
  !*** ./pages/api/news.js ***!
  \***************************/
/*! exports provided: default */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25ld3MuanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwic3RhdHVzQ29kZSIsImpzb24iLCJjb2RlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBRWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxLQUFHLENBQUNDLFVBQUosR0FBaUIsR0FBakI7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVM7QUFDTEMsUUFBSSxFQUFFLEdBREQ7QUFFTEMsUUFBSSxFQUFFLENBQUM7QUFDQyxlQUFTLGdCQURWO0FBRUMsaUJBQVcsK0VBRlo7QUFHQyxhQUFPLCtGQUhSO0FBSUMsYUFBTyxJQUpSO0FBS0MsZ0JBQVUsTUFMWDtBQU1DLG9CQUFjLDhFQU5mO0FBT0Msb0JBQWMsb0RBUGY7QUFRQyxrQkFBWSxHQVJiO0FBU0MsY0FBUTtBQVRULEtBQUQsRUFXRjtBQUNJLGVBQVMsMEJBRGI7QUFFSSxpQkFBVyxNQUZmO0FBR0ksYUFBTywrRkFIWDtBQUlJLGFBQU8sSUFKWDtBQUtJLGdCQUFVLEtBTGQ7QUFNSSxvQkFBYyw4RUFObEI7QUFPSSxvQkFBYyxvREFQbEI7QUFRSSxrQkFBWSxHQVJoQjtBQVNJLGNBQVE7QUFUWixLQVhFLEVBc0JGO0FBQ0ksZUFBUyx5QkFEYjtBQUVJLGlCQUFXLG1GQUZmO0FBR0ksYUFBTywrRkFIWDtBQUlJLGFBQU8sSUFKWDtBQUtJLGdCQUFVLE9BTGQ7QUFNSSxvQkFBYywwREFObEI7QUFPSSxvQkFBYyxvREFQbEI7QUFRSSxrQkFBWSxLQVJoQjtBQVNJLGNBQVE7QUFUWixLQXRCRSxFQWlDRjtBQUNJLGVBQVMsNEJBRGI7QUFFSSxpQkFBVyw2REFGZjtBQUdJLGFBQU8sK0ZBSFg7QUFJSSxhQUFPLElBSlg7QUFLSSxnQkFBVSxLQUxkO0FBTUksb0JBQWMsaUZBTmxCO0FBT0ksb0JBQWMsb0RBUGxCO0FBUUksa0JBQVksSUFSaEI7QUFTSSxjQUFRO0FBVFosS0FqQ0UsRUE0Q0Y7QUFDSSxlQUFTLCtCQURiO0FBRUksaUJBQVcsbUZBRmY7QUFHSSxhQUFPLCtGQUhYO0FBSUksYUFBTyxJQUpYO0FBS0ksZ0JBQVUsT0FMZDtBQU1JLG9CQUFjLDBEQU5sQjtBQU9JLG9CQUFjLG9EQVBsQjtBQVFJLGtCQUFZLEdBUmhCO0FBU0ksY0FBUTtBQVRaLEtBNUNFLEVBdURGO0FBQ0ksZUFBUyxrQ0FEYjtBQUVJLGlCQUFXLHVFQUZmO0FBR0ksYUFBTywrRkFIWDtBQUlJLGFBQU8sSUFKWDtBQUtJLGdCQUFVLEtBTGQ7QUFNSSxvQkFBYyxpRkFObEI7QUFPSSxvQkFBYyxvREFQbEI7QUFRSSxrQkFBWSxJQVJoQjtBQVNJLGNBQVE7QUFUWixLQXZERSxFQWtFRjtBQUNJLGVBQVMsaUJBRGI7QUFFSSxpQkFBVyw2REFGZjtBQUdJLGFBQU8sK0ZBSFg7QUFJSSxhQUFPLElBSlg7QUFLSSxnQkFBVSxPQUxkO0FBTUksb0JBQWMsOEVBTmxCO0FBT0ksb0JBQWMsb0RBUGxCO0FBUUksa0JBQVksSUFSaEI7QUFTSSxjQUFRO0FBVFosS0FsRUUsRUE2RUY7QUFDSSxlQUFTLG1CQURiO0FBRUksaUJBQVcsNkRBRmY7QUFHSSxhQUFPLCtGQUhYO0FBSUksYUFBTyxJQUpYO0FBS0ksZ0JBQVUsUUFMZDtBQU1JLG9CQUFjLGlGQU5sQjtBQU9JLG9CQUFjLG9EQVBsQjtBQVFJLGtCQUFZLEdBUmhCO0FBU0ksY0FBUTtBQVRaLEtBN0VFLEVBd0ZGO0FBQ0ksZUFBUyxtREFEYjtBQUVJLGlCQUFXLDZEQUZmO0FBR0ksYUFBTywrRkFIWDtBQUlJLGFBQU8sSUFKWDtBQUtJLGdCQUFVLEtBTGQ7QUFNSSxvQkFBYyw4RUFObEI7QUFPSSxvQkFBYyxvREFQbEI7QUFRSSxrQkFBWSxFQVJoQjtBQVNJLGNBQVE7QUFUWixLQXhGRSxFQW1HRjtBQUNJLGVBQVMsOEJBRGI7QUFFSSxpQkFBVyw2REFGZjtBQUdJLGFBQU8sK0ZBSFg7QUFJSSxhQUFPLElBSlg7QUFLSSxnQkFBVSxLQUxkO0FBTUksb0JBQWMsaUZBTmxCO0FBT0ksb0JBQWMsb0RBUGxCO0FBUUksa0JBQVksRUFSaEI7QUFTSSxjQUFRO0FBVFosS0FuR0U7QUFGRCxHQUFUO0FBa0hILENBcEhELEUiLCJmaWxlIjoicGFnZXMvYXBpL25ld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9uZXdzLmpzXCIpO1xuIiwiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBjb2RlOiAyMDAsXG4gICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ+a9ruWktOingua+nOS4qOaWsOeahOWFs+WktCDlho3mjqLmlLnpnaknLFxuICAgICAgICAgICAgICAgICdpbWdfdXJsJzogJ2h0dHBzOi8vcDMucHN0YXRwLmNvbS9saXN0LzE5MHgxMjQvcGdjLWltYWdlL0M2QjY3QTk1MkU2MkFDODc3RkJDQTUyM0FFRjlGM0YyJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2MvdXNlci90b2tlbi9NUzR3TGpBQkFBQUFaLTdfYnZJaEdrLXRLYTdaNEIzR1VTQTBkLTZSYzNxTXNFc01FUFBVUWlnLycsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICfml7bmlL8nLFxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiAn5aSu6KeG5paw6Ze7JyxcbiAgICAgICAgICAgICAgICAnc291cmNlX2ltZyc6ICdodHRwczovL3AyNi10dC5ieXRlaW1nLmNvbS9vcmlnaW4vcGdjLWltYWdlLzY1NjcwOTRjZDRjMjQ5YTQ4N2I2NmE0M2NmY2Q0MTRkJyxcbiAgICAgICAgICAgICAgICAnc291cmNlX3VybCc6ICdodHRwczovL3d3dy50b3V0aWFvLmNvbS9ncm91cC82OTQzNjQ3NTE1MjUwMDAwMzk3LycsXG4gICAgICAgICAgICAgICAgJ2NvbW1lbnRzJzogNTIyLFxuICAgICAgICAgICAgICAgICd0aW1lJzogMTYxNjc0NTQwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAn5Lmg6L+R5bmz5ZCM5ZaA6bqm6ZqG5oC757uf5q+U5Lqa5bCx5Lit5ZaA5bu65LqkNTDlkajlubTkupLoh7TotLrnlLUnLFxuICAgICAgICAgICAgICAgICdpbWdfdXJsJzogJ251bGwnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQWlBY2U1cWhIMzFUZXVCM1VkcEZNVjh1LXV3eTJMbm9pcUkxMHVaSHFBdDgvJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ+WbvemZhScsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICfmlrDljY7npL4nLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfaW1nJzogJ2h0dHBzOi8vcDI2LXR0LmJ5dGVpbWcuY29tL29yaWdpbi9wZ2MtaW1hZ2UvMjE1MDdhMTJkZjJjNGU3ZWIyZDg1OWM2ZjMyZGQ0OTcnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfdXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2dyb3VwLzY5NDM3NzA0Njk0MzQ2NTUyNDYvJyxcbiAgICAgICAgICAgICAgICAnY29tbWVudHMnOiA3OTQsXG4gICAgICAgICAgICAgICAgJ3RpbWUnOiAxNjE2NzQ0OTUzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICflpJbkuqTpg6gg5LiN6K645aSW5Zu95LyB5Lia6L655ZCD5Lit5Zu955qE6aWtIOi+ueeguOS4reWbveeahOeilycsXG4gICAgICAgICAgICAgICAgJ2ltZ191cmwnOiAnaHR0cHM6Ly9wMS5wc3RhdHAuY29tL2xpc3QvMTkweDEyNC90b3MtY24taS0wMDA0LzQwMGUxY2ViY2JkMTQzYWE4NTc0ZWYyYmI0MTEwOTc4JyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2MvdXNlci90b2tlbi9NUzR3TGpBQkFBQUFhZXpPWGtIVnIwX2kySnZXWHByYjR6TEdwUklubktTdHB0Rm01V3NYSEtVLycsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICfop4bpopEnLFxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiAn5aSu6KeG572R5paw6Ze7JyxcbiAgICAgICAgICAgICAgICAnc291cmNlX2ltZyc6ICdodHRwczovL3AxLXR0LWlwdjYuYnl0ZWltZy5jb20vbGFyZ2UvYmMyMDAwMGI5MTk2ODcwN2RhYicsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZV91cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vZ3JvdXAvNjk0MzUyODc2NjAwMTkwNjE4OS8nLFxuICAgICAgICAgICAgICAgICdjb21tZW50cyc6IDEwMDAzLFxuICAgICAgICAgICAgICAgICd0aW1lJzogMTYxNjc0NDUwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAn5Zue5Lmh56eN5Zyw77yM56uL5b+X5b2T5Yac5rCR77yB4oCcOTDlkI7igJ3lrabpnLjlpKvlprvnmoTmt7HlsbHpgJDmoqbot68nLFxuICAgICAgICAgICAgICAgICdpbWdfdXJsJzogJ2h0dHBzOi8vcDMucHN0YXRwLmNvbS9saXN0LzE5MHgxMjQvcGdjLWltYWdlL1NTWEQzR1U1MkpxRktNJyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2MvdXNlci90b2tlbi9NUzR3TGpBQkFBQUE5THowTWVMZEpEbXFwVTI2WGk5T19NLWNZSTl6NTMwd2pNN2VES3Z6WlR3LycsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICfkuInlhpwnLFxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiAn5YWJ5piO572RJyxcbiAgICAgICAgICAgICAgICAnc291cmNlX2ltZyc6ICdodHRwczovL3A2LXR0LWlwdjYuYnl0ZWltZy5jb20vbGFyZ2UvcGdjLWltYWdlLzFmNzAyZmY4OWY5ZTRjNDVhMmMyM2M2YmI2MDczMDllJyxcbiAgICAgICAgICAgICAgICAnc291cmNlX3VybCc6ICdodHRwczovL3d3dy50b3V0aWFvLmNvbS9ncm91cC82OTQzMDM2MjAxMTMzNjcwOTIwLycsXG4gICAgICAgICAgICAgICAgJ2NvbW1lbnRzJzogMzk0MyxcbiAgICAgICAgICAgICAgICAndGltZSc6IDE2MTY3NDQwNTNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ+a8guadpeaXheihjOeuseiXj+aXoOWQjeWls+WwuCDorabmlrnmir3lubLmsrPmsLQg5rKz5bqV6ZO26KGM5Y2h5o+t5byA5ZG95qGI6LCc5ZuiJyxcbiAgICAgICAgICAgICAgICAnaW1nX3VybCc6ICdodHRwczovL3AxLnBzdGF0cC5jb20vbGlzdC8xOTB4MTI0L3Rvcy1jbi1pLTAwMDQvMTA1ZDUzOWU5NTkxNGE2YTllYmQ5YjY5ZDQxM2I2YzUnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQWFlek9Ya0hWcjBfaTJKdldYcHJiNHpMR3BSSW5uS1N0cHRGbTVXc1hIS1UvJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ+inhumikScsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICflpK7op4bnvZHmlrDpl7snLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfaW1nJzogJ2h0dHBzOi8vcDEtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9iYzIwMDAwYjkxOTY4NzA3ZGFiJyxcbiAgICAgICAgICAgICAgICAnc291cmNlX3VybCc6ICdodHRwczovL3d3dy50b3V0aWFvLmNvbS9ncm91cC82OTQzNzgyNjUwOTg1MzE2OTAzLycsXG4gICAgICAgICAgICAgICAgJ2NvbW1lbnRzJzogNzA4LFxuICAgICAgICAgICAgICAgICd0aW1lJzogMTYxNjc0MzYwM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAn5ouc55m75aiB6IOB77ya57ud5LiN5YWB6K645Lit5Zu96LaF6LaK576O5Zu977yB576O5aqS77ya5Lit5Zu95LiN5YaN5bCK6YeN576O5Zu977yM5ZCI5oOF5ZCI55CGJyxcbiAgICAgICAgICAgICAgICAnaW1nX3VybCc6ICdodHRwczovL3AxLnBzdGF0cC5jb20vbGlzdC9wZ2MtaW1hZ2UvZGE3ZmY0OGU3NzY1NGI2ODljYjVmM2E4MTY0YzdiMGEnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQThRZGhCd0Q3YjdBZnMxc2RaanN3OVRrS2FxTlUxeG9wcUlNX0daemhSU0EvJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ+WbvemZhScsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICfkuK3lm73nvZEnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfaW1nJzogJ2h0dHBzOi8vcDYtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9wZ2MtaW1hZ2UvMmYyMGY1OGFhYjA0NDIwMWExMDA4ZDkyMmI3YjRiMTgnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfdXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2dyb3VwLzY5NDM4MDYzODQ1MDA3MjAxNjAvJyxcbiAgICAgICAgICAgICAgICAnY29tbWVudHMnOiAyNTY5LFxuICAgICAgICAgICAgICAgICd0aW1lJzogMTYxNjc0MzE1M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAn6L+Z5piv5LuK5aSp5pyA4oCc5Yia4oCd55qE6Kej57qm5aOw5piO5LqG5ZCnJyxcbiAgICAgICAgICAgICAgICAnaW1nX3VybCc6ICdodHRwczovL3AzLnBzdGF0cC5jb20vbGlzdC8xOTB4MTI0L3BnYy1pbWFnZS9TU2lOMWJzRHB3RVRFOScsXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdodHRwczovL3d3dy50b3V0aWFvLmNvbS9jL3VzZXIvdG9rZW4vTVM0d0xqQUJBQUFBeHZoUnZmcDhRb3RJbzE1YkQwY1d4RmlLV01YYVVsZGVHX0VwMnVueEJxTS8nLFxuICAgICAgICAgICAgICAgICd0YWcnOiAn5aix5LmQJyxcbiAgICAgICAgICAgICAgICAnc291cmNlJzogJ+S4reWbvemdkuW5tOe9kScsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZV9pbWcnOiAnaHR0cHM6Ly9wMjYtdHQuYnl0ZWltZy5jb20vb3JpZ2luL3BnYy1pbWFnZS83MzRjNzc2YTYxZDc0YTBiYTcwZDEzYzc2YjgyMGUwYicsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZV91cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vZ3JvdXAvNjk0MzczMzYwNTQxMTU4NjU5Ni8nLFxuICAgICAgICAgICAgICAgICdjb21tZW50cyc6IDU0NzcsXG4gICAgICAgICAgICAgICAgJ3RpbWUnOiAxNjE2NzQyNzAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdIJk3jgIHogJDlhYvku6zvvIzlr7nmlrDnlobmo4noirHkuIDml6DmiYDnn6UnLFxuICAgICAgICAgICAgICAgICdpbWdfdXJsJzogJ2h0dHBzOi8vcDEucHN0YXRwLmNvbS9saXN0LzE5MHgxMjQvcGdjLWltYWdlL1NTZWJyVHhIdmhrY2M0JyxcbiAgICAgICAgICAgICAgICAndXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2MvdXNlci90b2tlbi9NUzR3TGpBQkFBQUFQMDlMclg2MXhGcElXcmdHZEJEcWtwLTVvbTlMYW5zX2t1SVpfaXBBR1JFLycsXG4gICAgICAgICAgICAgICAgJ3RhZyc6ICfkvKDlqpInLFxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiAn5paw5Y2O572R5a6i5oi356uvJyxcbiAgICAgICAgICAgICAgICAnc291cmNlX2ltZyc6ICdodHRwczovL3A2LXR0LWlwdjYuYnl0ZWltZy5jb20vbGFyZ2UvcGdjLWltYWdlLzAzZjYzMDdhZTk5NzQ1MTE5ZmE5NTc0N2Y5ZDllNTI1JyxcbiAgICAgICAgICAgICAgICAnc291cmNlX3VybCc6ICdodHRwczovL3d3dy50b3V0aWFvLmNvbS9ncm91cC82OTQzNTAxODM3MDg5ODAwNzE4LycsXG4gICAgICAgICAgICAgICAgJ2NvbW1lbnRzJzogODY5LFxuICAgICAgICAgICAgICAgICd0aW1lJzogMTYxNjc0MjI1M1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnSCZN6ICQ5YWL6YO95YeJ5LqG77yMQeiCoeWKm+aMuuaWsOeWhuajie+8geajieiKseadv+Wdl+WFqOmdoueIhuWPke+8jOa4r+iCoeadjuWugeWNiuaXpea2qOi/kTEwJe+8geeOi+S4gOWNmuWui+iMnOm7hOi9qeW4puWktOino+e6picsXG4gICAgICAgICAgICAgICAgJ2ltZ191cmwnOiAnaHR0cHM6Ly9wMy5wc3RhdHAuY29tL2xpc3QvMTkweDEyNC9wZ2MtaW1hZ2UvU1NqOWJvTjVwWVUwdkYnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQWlBY2U1cWhIMzFUZXVCM1VkcEZNVjh1LXV3eTJMbm9pcUkxMHVaSHFBdDgvJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ+i0oue7jycsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICfmlrDljY7npL4nLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfaW1nJzogJ2h0dHBzOi8vcDI2LXR0LmJ5dGVpbWcuY29tL29yaWdpbi9wZ2MtaW1hZ2UvMjE1MDdhMTJkZjJjNGU3ZWIyZDg1OWM2ZjMyZGQ0OTcnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfdXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2dyb3VwLzY5NDM3ODQ4MTM2NTI1MDkyMTQvJyxcbiAgICAgICAgICAgICAgICAnY29tbWVudHMnOiAxNSxcbiAgICAgICAgICAgICAgICAndGltZSc6IDE2MTY3NDE4MDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ+WNl+WugeS4gOWwj+WMuuWkmuWQjeWls+aAp+WcqOiHquWutualvOS4i+iiq+eMpeS6te+8jOacieWPl+Wus+S6uui/nuWutumDveS4jeaVouWbnicsXG4gICAgICAgICAgICAgICAgJ2ltZ191cmwnOiAnaHR0cHM6Ly9wMy5wc3RhdHAuY29tL2xpc3QvMTkweDEyNC9wZ2MtaW1hZ2UvU1Npc0ZKNzZ0a0NQU1EnLFxuICAgICAgICAgICAgICAgICd1cmwnOiAnaHR0cHM6Ly93d3cudG91dGlhby5jb20vYy91c2VyL3Rva2VuL01TNHdMakFCQUFBQXZhekhNY2VDbzNNZU05SUpibGwyMzFBQzhHa0pEY3JkX19pWkZ3MmhpNG8vJyxcbiAgICAgICAgICAgICAgICAndGFnJzogJ+ekvuS8micsXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICfnjq/nkIPnvZEnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfaW1nJzogJ2h0dHBzOi8vcDMtdHQtaXB2Ni5ieXRlaW1nLmNvbS9sYXJnZS9wZ2MtaW1hZ2UvMzc3ZDgwMTUwZDFkNGYyNDk4ZTEwNmI5N2NiYTc5OTUnLFxuICAgICAgICAgICAgICAgICdzb3VyY2VfdXJsJzogJ2h0dHBzOi8vd3d3LnRvdXRpYW8uY29tL2dyb3VwLzY5NDM4MjcxNjYzOTE5NjAwNzEvJyxcbiAgICAgICAgICAgICAgICAnY29tbWVudHMnOiAzNyxcbiAgICAgICAgICAgICAgICAndGltZSc6IDE2MTY3NDEzNTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=