import api, { axiosPrivate } from "./axios";

//user
export const updateCurrentUser = async (data) => {
    const response = await api.put('/users/me', data)
    return response.data
}
export const viewCurrentUserProfile = async () => {
    const response = await api.get('/users/profile')
    return response.data
}
export const changePassword = async (data) => { //data={ currentPassword, newPassword }
    const response = await api.put('/users/change-password', data)
    return response.data
}
export const getAllUsers = async () => await axiosPrivate.get('/user')