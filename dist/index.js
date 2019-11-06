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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/constants.js":
/*!**************************!*\
  !*** ./app/constants.js ***!
  \**************************/
/*! exports provided: HOST, PORT, MONGODB_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOST\", function() { return HOST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PORT\", function() { return PORT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MONGODB_URI\", function() { return MONGODB_URI; });\nvar _process$env = process.env,\n    user = _process$env.MONGODB_USERNAME,\n    password = _process$env.MONGODB_PASSWORD,\n    host = _process$env.MONGODB_HOST,\n    port = _process$env.MONGODB_PORT,\n    database = _process$env.MONGODB_DATABASE;\nvar HOST = '0.0.0.0';\nvar PORT = 8080;\nvar MONGODB_URI = \"mongodb://\".concat(user, \":\").concat(password, \"@\").concat(host, \":\").concat(port, \"/\").concat(database);\n\n//# sourceURL=webpack:///./app/constants.js?");

/***/ }),

/***/ "./app/controllers/ping.js":
/*!*********************************!*\
  !*** ./app/controllers/ping.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/comments */ \"./app/models/comments.js\");\n\n\n\nvar entrypoint = function entrypoint(req, res) {\n  var temp;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function entrypoint$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_models_comments__WEBPACK_IMPORTED_MODULE_1__[\"get_comments\"])('sample'));\n\n        case 2:\n          temp = _context.sent;\n          res.send(temp);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (entrypoint);\n\n//# sourceURL=webpack:///./app/controllers/ping.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! exports provided: app */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./app/router.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (controller) {\n  app[controller.method](controller.route, controller.method_func);\n});\napp.listen(_constants__WEBPACK_IMPORTED_MODULE_2__[\"PORT\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"HOST\"]);\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/models/comments.js":
/*!********************************!*\
  !*** ./app/models/comments.js ***!
  \********************************/
/*! exports provided: get_comments, set_comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_comments\", function() { return get_comments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set_comment\", function() { return set_comment; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./app/models/db.js\");\n\n\n\nvar Comment = _db__WEBPACK_IMPORTED_MODULE_2__[\"connection\"].model('comments', new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({\n  organization: String,\n  comment: String,\n  ctime: Date\n}));\nvar get_comments = function get_comments(organization) {\n  var query;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get_comments$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          query = Comment.find({\n            organization: organization\n          });\n          _context.next = 3;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(query.exec());\n\n        case 3:\n          return _context.abrupt(\"return\", _context.sent);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\nvar set_comment = function set_comment(organization, comment) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function set_comment$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Comment.insertMany([{\n            organization: organization,\n            comment: comment,\n            ctime: new Date()\n          }]));\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack:///./app/models/comments.js?");

/***/ }),

/***/ "./app/models/db.js":
/*!**************************!*\
  !*** ./app/models/db.js ***!
  \**************************/
/*! exports provided: connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connection\", function() { return connection; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./app/constants.js\");\n\n\nvar connection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MONGODB_URI\"]);\n\n//# sourceURL=webpack:///./app/models/db.js?");

/***/ }),

/***/ "./app/router.js":
/*!***********************!*\
  !*** ./app/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_ping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/ping */ \"./app/controllers/ping.js\");\n\nvar methods = Object.freeze({\n  GET: 'get',\n  POST: 'post',\n  PUT: 'put',\n  DELETE: 'delete'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  method: methods.GET,\n  route: '/ping',\n  method_func: _controllers_ping__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}]);\n\n//# sourceURL=webpack:///./app/router.js?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });