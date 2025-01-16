import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: products.slice(0, 4).map(ele => ({ ...ele, quantity: 1, selected: true })),
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            state.items.push({ ...item, selected: true, quantity: 1 });
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(ele => ele.product_id !== id);
        },
        changeQuantity: (state, action) => {
            const { id, increament } = action.payload;
            const item = state.items.find(ele => ele.product_id === id);
            if (item) {
                item.quantity += increament;
                if (item.quantity === 0) {
                    state.items = state.items.filter(ele => ele.product_id !== id);
                }
            }
        },
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(ele => ele.product_id === id);
            if (item) {
                item.selected = !item.selected;
            }
        },
    }
});

export const { addItem, removeItem, toggleItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
