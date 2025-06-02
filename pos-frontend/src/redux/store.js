import { configureStore } from '@reduxjs/toolkit';
import customerSlice from "./slices/customerSlice.js";
import cartSlice from "./slices/cartSlice.js";

const store = configureStore({
    reducer: {
        customer: customerSlice,
        cart: cartSlice,
    },
    devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;