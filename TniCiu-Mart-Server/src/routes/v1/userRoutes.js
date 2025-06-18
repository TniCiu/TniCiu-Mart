import express from "express";
import { StatusCodes } from "http-status-codes";
const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Note: API get list users" });
  })
  .post((req, res) => {
    res.status(StatusCodes.CREATED).json({ message: "Note: API create new user" });
  });

export const UserRoutes = router;
