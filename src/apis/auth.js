import api from "./axios";

// đăng nhập data={email,password}
export const loginUser = async (data) => {
    const response = await api.post('/auth/login', data)
    return response.data
}

// cấp lại accessToken data={refreshToken}
export const refresh = async (data) => {
    const response = await api.post('/auth/refresh', data)
    return response.data
}

//quên mật khẩu data={email,url}  
//lưu ý url là route dẫn tới page reset-password
// ví dụ http://localhost:3000/reset-password/:id thì url:http://localhost:3000/reset-password
export const forgotPassword = async (data) => {
    const response = await api.post('/auth/forgot-password', data)
    return response.data
}
// reset mật khẩu data= { resetToken, password }
export const resetPassword = async (data) => {
    const response = await api.post('/auth/reset-password', data)
    return response.data
}