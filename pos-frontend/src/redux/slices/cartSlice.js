import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.push(action.payload);
        },

        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const getTotalPrice = state => state.cart.reduce((acc, item) => acc + item.price, 0);
export const { addItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;