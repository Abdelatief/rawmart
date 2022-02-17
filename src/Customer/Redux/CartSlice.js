import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
	items: {},
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		addItem: (state, { payload }) => {
			const item = state.items[payload?.id]
			if (item) {
				item.quantity += 1
			} else {
				state.items[payload?.id] = { id: payload?.id, quantity: 1, variant: payload?.variant }
			}
		},
	},
})

export const { addItem } = cartSlice.actions
