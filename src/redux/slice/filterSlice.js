import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'all',
    sortOrder: '',
    rating:''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            // console.log(state.category);    
        },
        setSortOrder: (state, action) => {
            state.list = action.payload;
        },
       
    },
});


export const { setCategory,setSortOrder  } = filterSlice.actions;
export default filterSlice.reducer;