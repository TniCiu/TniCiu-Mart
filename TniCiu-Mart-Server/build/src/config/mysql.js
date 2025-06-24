"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONNECT_DB = exports.CLOSE_DB = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _environment = require("./environment");
var _promise = _interopRequireDefault(require("mysql2/promise"));
var connection;
var CONNECT_DB = exports.CONNECT_DB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return _promise["default"].createConnection({
            host: _environment.env.DB_HOST,
            user: _environment.env.DB_USER,
            password: _environment.env.DB_PASSWORD,
            database: _environment.env.DB_NAME
          });
        case 1:
          connection = _context.sent;
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function CONNECT_DB() {
    return _ref.apply(this, arguments);
  };
}();
var CLOSE_DB = exports.CLOSE_DB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!connection) {
            _context2.next = 1;
            break;
          }
          _context2.next = 1;
          return connection.end();
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function CLOSE_DB() {
    return _ref2.apply(this, arguments);
  };
}();