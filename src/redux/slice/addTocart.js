import { createSlice } from '@reduxjs/toolkit';



const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState:{
        items : []
    },
    reducers: {
        setCart: (state, action) => {
            const {product,quantity} = action.payload;
            const existingItem = state.items.find(item=>item.product._id===product._id)
            if(existingItem){
                existingItem.quantity += quantity

            }
            else{
                state.items.push({product,quantity})
            }
        },
        reduceCart: (state, action) => {
            const {product,quantity} = action.payload;
            const existingItem = state.items.find(item=>item.product._id===product._id)
            existingItem.quantity = existingItem.quantity-1
           
            
        },
        removeCart :(state,action)=>{
            const {product} = action.payload;
            const existingItem = state.items.find(item=>item.product._id===product._id)
            state.items.splice([state.items.indexOf(existingItem)],1)
        }
        
       
    },
    extraReducers :(builder) =>{
        builder.addMatcher(
            (action) => action.type.startsWith('addToCart/'),
            (state)=>{
                state.totalQuantity = state.items.reduce((total,item)=> total + item.quantity,0)
            }
        )
    }
});

export const { setCart,removeCart,reduceCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;