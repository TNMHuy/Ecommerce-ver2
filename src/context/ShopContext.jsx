import { createContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

export const ShopContext = createContext(initialState)
export default ShopProvider = ({children})=>{
    const [state,dispatch] = useReducer(shopReducer,initialState)
    const addToCart = (product) =>{
        const updatedCart = state.products.concat(product)
        dispatch({
            type:'ADD_TO_CART',
            payload: {
                products: updatedCart
            }
        })
    }
    const value = {
        total: state.total,
        products: state.products,
        addToCart,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}