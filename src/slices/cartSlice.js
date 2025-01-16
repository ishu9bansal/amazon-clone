import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: products.slice(0, 4).map(ele => ({ ...ele, quantity: 1, selected: true })),
    },
    reducers: {
        addItem: (state, action) => { },
        removeItem: (state, action) => { },
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(ele => ele.product_id === id);
            if (item) {
                item.selected = !item.selected;
            }
        },
    }
});

export const { addItem, removeItem, toggleItem } = cartSlice.actions;

export default cartSlice.reducer;
