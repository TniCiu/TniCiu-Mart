"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoute = void 0;
var _express = _interopRequireDefault(require("express"));
var _httpStatusCodes = require("http-status-codes");
var _user = require("../../validations/user.validation");
var _user2 = require("../../controllers/user.controller");
var router = _express["default"].Router();
router.route("/").get(function (req, res) {
  res.status(_httpStatusCodes.StatusCodes.OK).json({
    message: "Note: API get list users"
  });
}).post(_user.userValidation.createNew, _user2.userController.createNew);
var UserRoute = exports.UserRoute = router;