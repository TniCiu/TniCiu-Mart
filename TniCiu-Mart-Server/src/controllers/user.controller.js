import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
    try {
        console.log(req.body);
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            data: req.body
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: error.message
        })
    }
}
export const userController = {
    createNew
}