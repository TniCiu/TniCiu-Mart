import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError.js";

const createNew = async (req, res, next) => {
    try {
        console.log(req.body);

        
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            data: req.body
        });
    } catch (error) {
        next(error);
    }
}
export const userController = {
    createNew
}