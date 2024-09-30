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
			/**
			 * Redux uses Immer behind the scenes
			 * current(state) is the original state
			 * state is the new state with the changes
			 * we either mutate the 'state' directly or
			 * return a new state which replaces the original state i.e; current(state)
			 */
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
			//return {restaurantTitle: '', items: []}; -> You can also return a new state here
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
