// import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { store } from "../redux/store";
import api from "./axios";
import axios, { axiosPrivate } from "./axios";

export const getProduct = async () => {
    const formatFilterForUrl=(filter) =>{
        const filters = [];
        filters.push(`page=${filter.page}`)
        filters.push(`limit=${filter.limit}`)
        filters.push(`sortBy=${filter.sortBy}`)
        filters.push(`sortOrder=${filter.sortOrder}`)
        if(filter.category.length>0){
            filters.push(`category=${filter.category.join(',')}`)
        }
        if(filter.brand.length>0){
            filters.push(`brand=${filter.brand.join(',')}`)
        }
        if(filter.rating.length>0){
            filters.push(`rating=${filter.rating.join(',')}`)
        }
        return filters.length > 0 ?`?${filters.join('&')}` : '';
    };
    try {
        const filter = store.getState().filter
        const response = await api.get(`/products${formatFilterForUrl(filter)}`)
        return response.data
    }
    catch(error){
        throw error
    }
};
// const axiosPrivate = useAxiosPrivate()

// export const createProduct = (data) => axiosPrivate.post('/product/', data)
export const getAllBrand = async () => await api.get('/brand')
export const getAllCategories = async () => await api.get('/categories')
export const updateCategoryById = async (id) => await axiosPrivate.put(`/category/${id}`)