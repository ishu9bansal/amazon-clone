import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: products.slice(0, 4).map(ele => ({ ...ele, quantity: 1 })),
    },
    reducers: {
        addItem: (state, action) => { },
        removeItem: (state, action) => { },
        toggleItem: (state, action) => { },
    }
});

export const { addItem, removeItem, toggleItem } = cartSlice.actions;

export default cartSlice.reducer;
