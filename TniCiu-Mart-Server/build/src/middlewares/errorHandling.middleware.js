"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorhandlingMiddleware = void 0;
var _httpStatusCodes = require("http-status-codes");
var _environment = require("../config/environment");
var errorhandlingMiddleware = exports.errorhandlingMiddleware = function errorhandlingMiddleware(err, req, res, next) {
  // Nếu err không có thuộc tính StatusCodes thì gán giá trị mặc định là INTERNAL_SERVER_ERROR
  if (!err.StatusCodes) err.StatusCodes = _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR;

  // Tao một đối tượng responseError để kiểm soát thông tin lỗi trả về
  var responseError = {
    statusCode: err.StatusCodes,
    message: err.message || _httpStatusCodes.StatusCodes[err.StatusCodes] || "Internal Server Error",
    // Mặc định là "Internal Server Error" nếu không có message
    // Stack để thu nhỏ phạm vi lỗi, giúp dễ dàng xác định vị trí lỗi trong mã nguồn
    // Chỉ nên sử dụng trong môi trường phát triển, không nên trả về trong môi trường sản xuất
    // Note: Không nên trả về stack trace trong môi trường sản xuất để tránh lộ thông tin nhạy cảm
    stack: err.stack
  };
  // Nếu môi trường là production thì không trả về stack trace
  if (_environment.env.BUILD_MODE !== 'dev') delete responseError.stack;
  console.error(responseError);
  res.status(responseError.statusCode).json(responseError);
};