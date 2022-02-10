import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { LocalStorageKeys } from '@Admin/Constants'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://api.dussurapp.com/api',
	prepareHeaders: headers => {
		const authTokens = JSON.parse(localStorage.getItem(LocalStorageKeys.adminAuthKey) ?? '{}')
		if (authTokens?.access_token) {
			headers.set('authorization', `Bearer ${authTokens.access_token}`)
		}
		return headers
	},
})

export const adminApi = createApi({
	reducerPath: 'admin-api',
	baseQuery,
	endpoints: builder => ({
		login: builder.mutation({
			query: loginBody => ({
				url: 'login',
				method: 'POST',
				body: loginBody,
			}),
		}),
	}),
})

export const { useLoginMutation } = adminApi
