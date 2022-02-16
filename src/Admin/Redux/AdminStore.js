import { configureStore } from '@reduxjs/toolkit'
import { adminApi } from '@Admin/Redux/AdminApi'

export const adminStore = configureStore({
	reducer: {
		[adminApi.reducerPath]: adminApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(adminApi.middleware),
})
