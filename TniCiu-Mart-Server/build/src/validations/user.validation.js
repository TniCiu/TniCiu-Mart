"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userValidation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _httpStatusCodes = require("http-status-codes");
var _joi = _interopRequireDefault(require("joi"));
var _ApiError = _interopRequireDefault(require("../utils/ApiError"));
/* 
* Note: Mặc định chúng ta không cần phải custom message ở phía BE làm gì, vì để cho Front-end tự 
validate và custom message phía BE cho đẹp.
* Back-end chỉ cần validate Đảm Bảo Dữ Liệu Chuẩn Xác, và trả về message mặc định từ thư viện là được.
* Quan trọng: việc Validate dữ liệu Bắt Buộc phải có ở phía Back-end vì đây là điểm cuối để lưu trữ dữ liệu
vào Database.
* Và thông thường trong thực tế, điều tốt nhất cho hệ thống là hãy luôn validate dữ liệu ở cả Back-end và Front-end nhé.
*/
var createNew = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var schema, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          schema = _joi["default"].object({
            name: _joi["default"].string().required().min(3).max(50).trim().strict(),
            phone: _joi["default"].string().pattern(/^(0|\+84)(\d{9})$/).required(),
            email: _joi["default"].string().email({
              tlds: {
                allow: false
              }
            }).required()
          });
          _context.prev = 1;
          console.log(req.body);
          // Chỉ định { abortEarly: false } để trả về tất cả các lỗi thay vì dừng lại ở lỗi đầu tiên
          // Điều này sẽ giúp người dùng biết được tất cả các lỗi trong dữ liệu của họ
          _context.next = 2;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 2:
          // Note: Nếu không có lỗi thì sẽ tiếp tục gọi next() để chuyển sang tầng tiếp theo
          next();
          _context.next = 4;
          break;
        case 3:
          _context.prev = 3;
          _t = _context["catch"](1);
          next(new _ApiError["default"](_httpStatusCodes.StatusCodes.UNPROCESSABLE_ENTITY, new Error(_t).message));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function createNew(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var userValidation = exports.userValidation = {
  createNew: createNew
};