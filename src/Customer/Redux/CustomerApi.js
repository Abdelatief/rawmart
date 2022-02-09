import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const customerApi = createApi({
	reducerPath: 'customer-api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawmartapp.com/public/api' }),
	endpoints: builder => ({
		register: builder.mutation({
			query: registrationBody => ({
				url: 'user/registration',
				method: 'POST',
				body: registrationBody,
			}),
		}),
		login: builder.mutation({
			query: loginBody => ({
				url: 'user/login',
				method: 'POST',
				body: loginBody,
			}),
		}),
	}),
})

export const { useRegisterMutation, useLoginMutation } = customerApi
