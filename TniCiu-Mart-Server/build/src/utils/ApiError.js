"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/* 
Định nghĩa riêng một classs ApiError để kế thừa từ class Error của JavaScript.
Điều này giúp chúng ta có thể tạo ra các lỗi tùy chỉnh với các thuộc tính bổ sung như statusCode, message, v.v.
Chúng ta có thể sử dụng class này để tạo ra các lỗi tùy chỉnh trong ứng dụng của mình.
*/
var ApiError = /*#__PURE__*/function (_Error) {
  function ApiError(statusCode, message) {
    var _this;
    (0, _classCallCheck2["default"])(this, ApiError);
    _this = _callSuper(this, ApiError, [message]); // Gọi constructor của class Error với message
    _this.name = 'ApiError'; // Gán tên của class cho lỗi
    _this.statusCode = statusCode; // Gán statusCode cho lỗi
    Error.captureStackTrace(_this, _this.constructor); // Lưu lại stack trace của lỗi
    return _this;
  }
  (0, _inherits2["default"])(ApiError, _Error);
  return (0, _createClass2["default"])(ApiError);
}(/*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));
var _default = exports["default"] = ApiError;