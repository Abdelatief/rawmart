import { configureStore } from '@reduxjs/toolkit'
import { customerApi } from '@Customer/Redux/CustomerApi'

export const customerStore = configureStore({
	reducer: {
		[customerApi.reducerPath]: customerApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customerApi.middleware),
})
