import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchQuery: '',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setSearchQuery: (state, { payload }) => {
			state.searchQuery = payload
		},
	},
})

export const { setSearchQuery } = appSlice.actions
