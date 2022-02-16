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
	tagTypes: [
		'Role',
		'User',
		'Vendor',
		'Category',
		'Offer',
		'Order',
		'Payment',
		'Shipping',
		'BlogCategory',
		'SpecialOrder',
		'Option',
		'Bolg',
		'Country',
		'Product',
		'Review',
		'Analytics',
	],
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

		addRole: builder.mutation({
			query: body => ({
				url: 'roles/add',
				method: 'POST',
				body,
				invalidateTags: ['Role'],
			}),
		}),

		getUsers: builder.query({
			query: () => ({
				url: '/users',
				method: 'POST',
				providesTags: ['User'],
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
		// updateUser: builder.mutation({
		// 	query(data)  {
		// 		const {id, ...body} = data
		// 		return{
		// 			url: '/users/edit',
		// 			method: 'POST',
		// 			body,
		// 			invalidateTags: ['User'],
		// 		}
		//
		// 	},
		// })
		updateUser: builder.mutation({
			query: userBody => ({
				url: '/users/edit',
				method: 'POST',
				body: userBody,
			}),
		}),

		getVendors: builder.query({
			query: () => ({
				url: '/vendors',
				method: 'POST',
				providesTags: ['Vendor'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 12,
					search: '',
					sort: 'id',
				},
			}),
		}),
		getCategories: builder.query({
			query: () => ({
				url: '/categories',
				method: 'POST',
				providesTags: ['Category'],
				body: {
					dir: 'desc',
					language: 'en',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),
		getOffers: builder.query({
			query: () => ({
				url: '/offers',
				method: 'POST',
				providesTags: ['Offer'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),

		getOrders: builder.query({
			query: () => ({
				url: '/orders',
				method: 'POST',
				providesTags: ['Order'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),

		getPaymentMethods: builder.query({
			query: () => ({
				url: '/payment-methods',
				method: 'POST',
				providesTags: ['Payment'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: -1,
					search: '',
					sort: 'id',
				},
			}),
		}),
		getShippingMethods: builder.query({
			query: () => ({
				url: '/shipping-methods',
				method: 'POST',
				providesTags: ['Shipping'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),
		getBlogCategories: builder.query({
			query: () => ({
				url: '/blog-categories',
				method: 'POST',
				providesTags: ['BlogCategory'],
				body: {
					dir: 'desc',
					language: 'en',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),

		getSpecialOrders: builder.query({
			query: () => ({
				url: '/special-orders',
				method: 'POST',
				providesTags: ['SpecialOrder'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
				},
			}),
		}),

		getOptions: builder.query({
			query: () => ({
				url: '/options',
				method: 'POST',
				providesTags: ['Option'],
				body: {
					action: 'options',
				},
			}),
		}),
		getBlogs: builder.query({
			query: () => ({
				url: '/blogs',
				method: 'POST',
				providesTags: ['Blog'],
				body: {
					category: '',
					dir: 'desc',
					language: 'en',
					page: 1,
					per_page: 12,
					sort: 'id',
					title: '',
				},
			}),
		}),
		getCountries: builder.query({
			query: () => ({
				url: '/web/countries',
				method: 'POST',
				providesTags: ['Country'],
			}),
		}),
		getProducts: builder.query({
			query: () => ({
				url: '/products',
				method: 'POST',
				providesTags: ['Product'],
				body: {
					availability: '',
					category: '',
					dir: 'desc',
					language: 'en',
					name: '',
					page: 1,
					per_page: 10,
					search: '',
					sort: 'id',
					vendor: '',
				},
			}),
		}),
		getReviews: builder.query({
			query: () => ({
				url: '/reviews',
				method: 'POST',
				providesTags: ['Review'],
				body: {
					dir: 'desc',
					page: 1,
					per_page: 10,
					product_id: '6',
					sort: 'id',
				},
			}),
		}),
		getAnalytics: builder.query({
			query: () => ({
				url: '/analytics',
				method: 'POST',
				providesTags: ['Analytic'],
				body: {
					data_count: true,
				},
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useGetRolesQuery,
	useDeleteRoleMutation,
	useGetUsersQuery,
	useUpdateUserMutation,
	useGetVendorsQuery,
	useGetCategoriesQuery,
	useGetOffersQuery,
	useGetOrdersQuery,
	useGetPaymentMethodsQuery,
	useGetShippingMethodsQuery,
	useGetBlogCategoriesQuery,
	useGetSpecialOrdersQuery,
	useGetOptionsQuery,
	useGetBlogsQuery,
	useGetCountriesQuery,
	useGetProductsQuery,
	useGetReviewsQuery,
	useGetAnalyticsQuery,
	useAddRoleMutation,
} = adminApi
