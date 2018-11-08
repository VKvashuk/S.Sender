/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar btnSocialOpen = document.querySelector('.btn-social--open');\nvar socialBlock = document.querySelector('.social');\n\nbtnSocialOpen.addEventListener('click', onToggleOpenSocial);\n\nfunction onToggleOpenSocial() {\n  socialBlock.classList.toggle('social--open');\n\n  socialBlock.classList.contains('social--open') ? disableScrolling() : enableScrolling();\n}\n\nfunction disableScrolling() {\n  var x = window.scrollX;\n  var y = window.scrollY;\n  window.onscroll = function () {\n    window.scrollTo(x, y);\n  };\n}\n\nfunction enableScrolling() {\n  window.onscroll = function () {};\n}\n\n// $(document).ready(function() {\n//   $('.sidebar').slimScroll();\n// });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgYnRuU29jaWFsT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc29jaWFsLS1vcGVuJyk7XG52YXIgc29jaWFsQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29jaWFsJyk7XG5cbmJ0blNvY2lhbE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRvZ2dsZU9wZW5Tb2NpYWwpO1xuXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5Tb2NpYWwoKSB7XG4gIHNvY2lhbEJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ3NvY2lhbC0tb3BlbicpO1xuXG4gIHNvY2lhbEJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnc29jaWFsLS1vcGVuJykgPyBkaXNhYmxlU2Nyb2xsaW5nKCkgOiBlbmFibGVTY3JvbGxpbmcoKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbGluZygpIHtcbiAgdmFyIHg9d2luZG93LnNjcm9sbFg7XG4gIHZhciB5PXdpbmRvdy5zY3JvbGxZO1xuICB3aW5kb3cub25zY3JvbGw9ZnVuY3Rpb24oKSB7d2luZG93LnNjcm9sbFRvKHgsIHkpO307XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbGluZygpIHtcbiAgd2luZG93Lm9uc2Nyb2xsPWZ1bmN0aW9uKCkge307XG59XG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICAkKCcuc2lkZWJhcicpLnNsaW1TY3JvbGwoKTtcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);