import { createSlice } from "@reduxjs/toolkit";

const getExistingItem = (items, currItem) => {
	return items.find((item) => item.id === currItem.id);
};

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		restaurantTitle: "",
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			const existingItem = getExistingItem(state.items, action.payload);

			existingItem
				? existingItem.quantity++
				: state.items.push({ ...action.payload, quantity: 1 });
		},
		removeItem: (state, action) => {
			const existingItem = getExistingItem(state.items, action.payload);

			existingItem && existingItem.quantity > 1
				? existingItem.quantity--
				: (state.items = state.items.filter(
						(item) => item.id !== action.payload.id,
				  ));
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
