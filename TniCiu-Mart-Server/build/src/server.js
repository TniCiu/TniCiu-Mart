"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _environment = require("./config/environment");
var _mysql = require("./config/mysql");
var _asyncExitHook = _interopRequireDefault(require("async-exit-hook"));
var _v = require("./routes/v1");
var _errorHandling = require("./middlewares/errorHandling.middleware");
var START_SERVER = function START_SERVER() {
  var app = (0, _express["default"])();
  app.use(_express["default"].json());
  app.use("/".concat(_environment.env.VERSION), _v.APIs_V1);
  // Error handling middleware
  app.use(_errorHandling.errorhandlingMiddleware);
  app.listen(_environment.env.APP_PORT, _environment.env.APP_HOST, function () {
    console.log("3. Server running at http://".concat(_environment.env.APP_HOST, ":").concat(_environment.env.APP_PORT));
  });
  (0, _asyncExitHook["default"])(function () {
    console.log("4. Disconnecting from Database with Mysql...");
    (0, _mysql.CLOSE_DB)();
    console.log("5. Disconnected from Database with Mysql! ");
  });
};
(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var _t;
  return _regenerator["default"].wrap(function (_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        console.log("1. connecting from Database with Mysql...");
        _context.next = 1;
        return (0, _mysql.CONNECT_DB)();
      case 1:
        console.log("2. connected to mysql with Mysql2/Promise succsessfully!");
        _context.next = 2;
        return START_SERVER();
      case 2:
        _context.next = 4;
        break;
      case 3:
        _context.prev = 3;
        _t = _context["catch"](0);
        console.error("Error connecting to Mysql: ", _t);
        process.exit(0);
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 3]]);
}))();