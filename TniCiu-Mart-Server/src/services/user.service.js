
import { slugify } from "~/utils/formatters"
import {UserModel } from "~/models/user.model"
import ApiError from "~/utils/ApiError";
import { StatusCodes } from "http-status-codes";

const createUser = async (reqBody) => {
  try {
    const existingUser = await UserModel.findOneByEmail(reqBody.email);
    if (existingUser) {
      throw new ApiError(
        StatusCodes.CONFLICT,
        "Email already exists. Please use a different email."
      );
    }

    const newUser = {
      ...reqBody,
      slug: slugify(reqBody.name),
    };
    
    const createdUser = await UserModel.createNew(newUser);
    return createdUser
  } catch (error) {
    console.error("Create user error:", error);
    throw error;
  }
};


export const UserService = {
    createUser
}