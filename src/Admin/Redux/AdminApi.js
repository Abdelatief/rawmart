import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { LocalStorageKeys } from '@Admin/Constants'

const baseQuery = fetchBaseQuery({
	// baseUrl: 'https://api.rawmartapp.com/api',
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
	tagTypes: ['Role'],
	endpoints: builder => ({
		login: builder.mutation({
			query: loginBody => ({
				url: 'login',
				method: 'POST',
				body: loginBody,
			}),
		}),
		getRoles: builder.query({
			query: () => ({
				url: '/roles',
				method: 'POST',
				providesTags: ['Role'],
				body: {
					dir: 'desc',
					name: '',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),
		deleteRole: builder.mutation({
			query: id => ({
				url: '/roles/delete',
				method: 'POST',
				body: { id },
				invalidateTags: ['Role'],
			}),
		}),
	}),
})

export const { useLoginMutation, useGetRolesQuery, useDeleteRoleMutation } = adminApi
