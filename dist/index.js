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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/start.js");
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

/***/ "./app/controllers/comments.js":
/*!*************************************!*\
  !*** ./app/controllers/comments.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comments */ \"./app/services/comments.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: function get(req, res) {\n    var organization, comments;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            organization = req.params.name;\n            _context.next = 3;\n            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getComments(organization));\n\n          case 3:\n            comments = _context.sent;\n            res.status(200).send({\n              comments: comments\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    });\n  },\n  post: function post(req, res) {\n    var organization, comment;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function post$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            organization = req.params.name;\n            _context2.next = 3;\n            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setComment(organization, req.body.comment));\n\n          case 3:\n            comment = _context2.sent;\n            res.status(201).send(comment);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    });\n  },\n  \"delete\": function _delete(req, res) {\n    var organization;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _delete$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            organization = req.params.name;\n            _context3.next = 3;\n            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteComments(organization));\n\n          case 3:\n            res.status(200).send();\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./app/controllers/comments.js?");

/***/ }),

/***/ "./app/controllers/members.js":
/*!************************************!*\
  !*** ./app/controllers/members.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/members */ \"./app/services/members.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: function get(req, res) {\n    var organization;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            organization = req.params.name;\n            _context.t0 = res.status(200);\n            _context.next = 4;\n            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_services_members__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMembers(organization));\n\n          case 4:\n            _context.t1 = _context.sent;\n            _context.t2 = {\n              members: _context.t1\n            };\n\n            _context.t0.send.call(_context.t0, _context.t2);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./app/controllers/members.js?");

/***/ }),

/***/ "./app/controllers/ping.js":
/*!*********************************!*\
  !*** ./app/controllers/ping.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar entrypoint = function entrypoint(req, res) {\n  res.send('pong');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (entrypoint);\n\n//# sourceURL=webpack:///./app/controllers/ping.js?");

/***/ }),

/***/ "./app/models/comments.js":
/*!********************************!*\
  !*** ./app/models/comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar commentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  organization: {\n    type: String,\n    required: true\n  },\n  comment: {\n    type: String,\n    required: true\n  },\n  isDeleted: {\n    type: Boolean,\n    \"default\": false\n  },\n  ctime: {\n    type: Date,\n    \"default\": new Date()\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('comments', commentSchema));\n\n//# sourceURL=webpack:///./app/models/comments.js?");

/***/ }),

/***/ "./app/models/members.js":
/*!*******************************!*\
  !*** ./app/models/members.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar memberSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  organization: {\n    type: String,\n    required: true\n  },\n  login: {\n    type: String,\n    required: true\n  },\n  avatarUrl: {\n    type: String,\n    \"default\": ''\n  },\n  followerCount: {\n    type: Number,\n    \"default\": 0\n  },\n  ctime: {\n    type: Date,\n    \"default\": new Date()\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('members', memberSchema));\n\n//# sourceURL=webpack:///./app/models/members.js?");

/***/ }),

/***/ "./app/router.js":
/*!***********************!*\
  !*** ./app/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/comments */ \"./app/controllers/comments.js\");\n/* harmony import */ var _controllers_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/members */ \"./app/controllers/members.js\");\n/* harmony import */ var _controllers_ping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ping */ \"./app/controllers/ping.js\");\n\n\n\nvar methods = Object.freeze({\n  GET: 'get',\n  POST: 'post',\n  PUT: 'put',\n  DELETE: 'delete'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  method: methods.GET,\n  route: '/ping',\n  methodFunc: _controllers_ping__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  method: methods.GET,\n  route: '/org/:name/comments',\n  methodFunc: _controllers_comments__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get\n}, {\n  method: methods.POST,\n  route: '/org/:name/comments',\n  methodFunc: _controllers_comments__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post\n}, {\n  method: methods.DELETE,\n  route: '/org/:name/comments',\n  methodFunc: _controllers_comments__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"]\n}, {\n  method: methods.GET,\n  route: '/org/:name/members',\n  methodFunc: _controllers_members__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get\n}]);\n\n//# sourceURL=webpack:///./app/router.js?");

/***/ }),

/***/ "./app/server.js":
/*!***********************!*\
  !*** ./app/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./app/router.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_constants__WEBPACK_IMPORTED_MODULE_3__[\"MONGODB_URI\"], function (err) {\n  if (err) throw err;\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (controller) {\n  app[controller.method](controller.route, controller.methodFunc);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app/server.js?");

/***/ }),

/***/ "./app/services/comments.js":
/*!**********************************!*\
  !*** ./app/services/comments.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/comments */ \"./app/models/comments.js\");\n\n\n\nvar getComments = function getComments(organization) {\n  var query;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getComments$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          query = _models_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            organization: organization,\n            isDeleted: false\n          });\n          _context.next = 3;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(query.exec());\n\n        case 3:\n          return _context.abrupt(\"return\", _context.sent);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\n\nvar setComment = function setComment(organization, comment) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setComment$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_models_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n            organization: organization,\n            comment: comment\n          }));\n\n        case 2:\n          return _context2.abrupt(\"return\", _context2.sent);\n\n        case 3:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n};\n\nvar deleteComments = function deleteComments(organization) {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deleteComments$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_models_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateMany({\n            organization: organization\n          }, {\n            isDeleted: true\n          }));\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getComments: getComments,\n  setComment: setComment,\n  deleteComments: deleteComments\n});\n\n//# sourceURL=webpack:///./app/services/comments.js?");

/***/ }),

/***/ "./app/services/members.js":
/*!*********************************!*\
  !*** ./app/services/members.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/members */ \"./app/models/members.js\");\n\n\n\nvar getMembers = function getMembers(organization) {\n  var query;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getMembers$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          query = _models_members__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            organization: organization\n          });\n          _context.next = 3;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(query.exec());\n\n        case 3:\n          return _context.abrupt(\"return\", _context.sent);\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getMembers: getMembers\n});\n\n//# sourceURL=webpack:///./app/services/members.js?");

/***/ }),

/***/ "./app/start.js":
/*!**********************!*\
  !*** ./app/start.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./app/server.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/constants.js\");\n\n\n_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(_constants__WEBPACK_IMPORTED_MODULE_1__[\"PORT\"], _constants__WEBPACK_IMPORTED_MODULE_1__[\"HOST\"]);\n\n//# sourceURL=webpack:///./app/start.js?");

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