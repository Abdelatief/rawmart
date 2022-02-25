import { createSlice } from '@reduxjs/toolkit'
import { LocalStorageKeys } from '@Customer/Constants'

const cartInitialState = {
	items: JSON.parse(localStorage.getItem(LocalStorageKeys.customerCart)) ?? {},
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
			localStorage.setItem(LocalStorageKeys.customerCart, JSON.stringify(state.items))
		},
		removeItem: (state, { payload }) => {
			delete state.items[payload]
		},
	},
})

export const { addItem, removeItem } = cartSlice.actions
