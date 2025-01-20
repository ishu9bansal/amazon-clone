import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
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

export const { addItem, removeItem, toggleItem, changeQuantity, setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
