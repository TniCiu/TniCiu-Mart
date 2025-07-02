import { StatusCodes } from "http-status-codes";
import { UserService } from "~/services/user.service.js";

const createNew = async (req, res, next) => {
  try {
    const createdUser = await UserService.createUser(req.body);
    res.status(StatusCodes.CREATED).json(createdUser);
  } catch (error) {
    next(error)
  }
};
export const userController = {
  createNew,
};
