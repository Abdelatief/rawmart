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
		banner: builder.query({
			query: () => ({
				url: 'web/pages/view',
				method: 'POST',
				body: { id: 'home', language: 'en' },
			}),
		}),
		getCategories: builder.query({
			query: () => ({
				url: 'web/categories',
				method: 'POST',
				body: {
					dir: 'asc',
					language: 'en',
					page: 0,
					per_page: -1,
					search: '',
					sort: 'name',
				},
			}),
		}),
		getSingleCategory: builder.query({
			query: body => ({
				url: 'web/collections/products',
				method: 'POST',
				body: {
					page: 1,
					per_page: 30,
					search: '',
					sort: 'id',
					dir: 'desc',
					categories: [body.categoryId],
					brands: [],
					attributes: [],
					min_price: body?.min_price ?? 0,
					max_price: body?.max_price ?? 0,
					language: 'en',
				},
			}),
		}),
		getBrands: builder.query({
			query: () => ({
				url: 'web/brands',
				method: 'POST',
				body: {
					page: 0,
					per_page: -1,
					search: '',
					sort: 'name',
					dir: 'asc',
				},
			}),
		}),
		getSingleBrand: builder.query({
			query: body => ({
				url: 'web/collections/products',
				method: 'POST',
				body: {
					page: 1,
					per_page: 30,
					search: '',
					sort: 'id',
					dir: 'desc',
					categories: [],
					brands: [body.brandId],
					attributes: [],
					min_price: body?.min_price ?? 0,
					max_price: body?.max_price ?? 0,
					language: 'en',
				},
			}),
		}),
		getCart: builder.query({
			query: body => ({
				url: 'web/cart',
				method: 'POST',
				body,
			}),
		}),
		getWishlist: builder.query({
			query: body => ({
				url: 'web/wishlists',
				method: 'POST',
				body: { page: 0, per_page: -1, search: '', sort: 'id', dir: 'desc', user_id: '18' },
			}),
		}),
	}),
})

export const {
	useRegisterMutation,
	useLoginMutation,
	useBannerQuery,
	useGetCategoriesQuery,
	useGetSingleCategoryQuery,
	useGetBrandsQuery,
	useGetSingleBrandQuery,
	useGetCartQuery,
	useGetWishlistQuery,
} = customerApi
