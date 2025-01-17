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
            const itemInCart = state.items.find(ele => item.product_id === ele.product_id);
            if (itemInCart) return;
            state.items.push({
                ...item,
                quantity: 1,
                selected: true,
            });
        },
        toggleItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.product_id === id);
            if (item) {
                item.selected = !item.selected;
            }
        },
        changeQuantity: (state, action) => {
            const { id, increament } = action.payload;
            const item = state.items.find(item => item.product_id === id);
            if (item) {
                item.quantity += increament;
                if (item.quantity === 0) {
                    state.items = state.items.filter(item => item.product_id !== id)
                }
            }
        },
    },
});

export const { toggleItem, changeQuantity, addItem } = cartSlice.actions;



export default cartSlice.reducer;
