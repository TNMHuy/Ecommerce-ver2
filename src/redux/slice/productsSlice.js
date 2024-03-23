import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    products: [],
    filters:{
        category:null,
        rating:null,
        sort:null
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProducts:(state,action) => {
            state.products = action.payload
        },
        setFilter:(state,action) => {
            const {type,value} = action.payload
            state.filters[type] = value
        },
       
       
    }
})

export const {setProducts, setFilter,setRating} = productsSlice.actions;
export const selectProducts = state => state.products.products
export const selectFilters = state => state.products.filters
export const selectRating = state => state.products.rating
export const selectFilteredProducts = state=> {
    const {products,filters} = state.products
    let filteredProducts = [...products]
    if(filters.category){
        if(filters.category==='all'){
            filteredProducts = filteredProducts
        }
        else{

            filteredProducts = filteredProducts.filter(products=>products.category === filters.category)
        }
        
    }
    if(filters.rating){
        if(filters.rating==='all'){
            filteredProducts = filteredProducts
        }
        else{
            filteredProducts = filteredProducts.filter(
                products=>products.rating.rate >= Number(filters.rating) && products.rating.rate < Number(filters.rating)+1
                )

        }
        
    }
    if(filters.sort ){
        if(filters.sort==='none'){
            filteredProducts =filteredProducts
        }
        if(filters.sort==='A-Z'){
            filteredProducts.sort((a,b)=> a.title.localeCompare(b.title))

        }
        if(filters.sort==='Z-A'){
            filteredProducts.sort((a,b)=> b.title.localeCompare(a.title))

        }
        if(filters.sort==='Price'){
            filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

        }
    }
    return filteredProducts
}

export default productsSlice.reducer;
