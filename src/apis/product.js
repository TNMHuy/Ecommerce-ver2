// import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { store } from "../redux/store";
import api, { fakeApi } from "./axios";
import axios, { axiosPrivate } from "./axios";

export const getAllProducts = async () => {
    const response = await fakeApi.get('')
    // console.log(response);
    return response.data
}
// const axiosPrivate = useAxiosPrivate()

// export const createProduct = (data) => axiosPrivate.post('/product/', data)
export const getAllBrand = async () => await api.get('/brand')
// export const getAllProducts = async () => await api.get('/categories')
export const updateCategoryById = async (id) => await axiosPrivate.put(`/category/${id}`)