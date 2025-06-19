import express from "express";
import { StatusCodes } from "http-status-codes";
import { userValidation } from "~/validations/user.validation"
const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Note: API get list users" });
  })
  .post(userValidation.createNew)

export const UserRoute = router;
