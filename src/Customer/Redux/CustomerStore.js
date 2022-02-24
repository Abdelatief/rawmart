import { configureStore } from '@reduxjs/toolkit'
import { customerApi } from '@Customer/Redux/CustomerApi'
import { cartSlice } from '@Customer/Redux/CartSlice'
import { appSlice } from '@Customer/Redux/AppSlice'

export const customerStore = configureStore({
	reducer: {
		[customerApi.reducerPath]: customerApi.reducer,
		[cartSlice.name]: cartSlice.reducer,
		[appSlice.name]: appSlice.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customerApi.middleware),
})
