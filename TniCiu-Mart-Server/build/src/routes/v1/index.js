"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIs_V1 = void 0;
var _express = _interopRequireDefault(require("express"));
var _httpStatusCodes = require("http-status-codes");
var _user = require("./user.route");
var router = _express["default"].Router();
router.get('/status', function (req, res) {
  res.status(_httpStatusCodes.StatusCodes.OK).json({
    message: "APIs V1 are ready to use."
  });
});
router.use('/users', _user.UserRoute);
var APIs_V1 = exports.APIs_V1 = router;