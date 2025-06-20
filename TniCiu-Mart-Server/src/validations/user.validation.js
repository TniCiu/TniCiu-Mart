import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
/* 
* Note: Mặc định chúng ta không cần phải custom message ở phía BE làm gì, vì để cho Front-end tự 
validate và custom message phía BE cho đẹp.
* Back-end chỉ cần validate Đảm Bảo Dữ Liệu Chuẩn Xác, và trả về message mặc định từ thư viện là được.
* Quan trọng: việc Validate dữ liệu Bắt Buộc phải có ở phía Back-end vì đây là điểm cuối để lưu trữ dữ liệu
vào Database.
* Và thông thường trong thực tế, điều tốt nhất cho hệ thống là hãy luôn validate dữ liệu ở cả Back-end và Front-end nhé.
*/
const createNew = async (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50).trim().strict(),
        phone: Joi.string().pattern(/^(0|\+84)(\d{9})$/).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required()
    })
    try {
        console.log(req.body)
        // Chỉ định { abortEarly: false } để trả về tất cả các lỗi thay vì dừng lại ở lỗi đầu tiên
        // Điều này sẽ giúp người dùng biết được tất cả các lỗi trong dữ liệu của họ
        await schema.validateAsync(req.body, {abortEarly: false})
        // Note: Nếu không có lỗi thì sẽ tiếp tục gọi next() để chuyển sang tầng tiếp theo
        next()
    } catch (error) {
        console.log(new Error(error))
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })

    }
}

export const userValidation = {
    createNew
}