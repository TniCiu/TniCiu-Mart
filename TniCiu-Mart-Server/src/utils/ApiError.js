
/* 
Định nghĩa riêng một classs ApiError để kế thừa từ class Error của JavaScript.
Điều này giúp chúng ta có thể tạo ra các lỗi tùy chỉnh với các thuộc tính bổ sung như statusCode, message, v.v.
Chúng ta có thể sử dụng class này để tạo ra các lỗi tùy chỉnh trong ứng dụng của mình.
*/
class ApiError extends Error{
    constructor(statusCode, message) {
        super(message); // Gọi constructor của class Error với message
        this.name = 'ApiError'; // Gán tên của class cho lỗi
        this.statusCode = statusCode; // Gán statusCode cho lỗi
        Error.captureStackTrace(this, this.constructor); // Lưu lại stack trace của lỗi
    }

}
export default ApiError;