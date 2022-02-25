import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { LocalStorageKeys } from '@Customer/Constants'

const tagTypesMap = {
	WishlistItems: 'Wishlist-Items',
}

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://api.rawmartapp.com/public/api',
	// baseUrl: 'http://api.dussurapp.com/api',
	prepareHeaders: headers => {
		const authTokens = JSON.parse(localStorage.getItem(LocalStorageKeys.customerAuthKey) ?? '{}')
		if (authTokens?.access_token) {
			headers.set('authorization', `Bearer ${authTokens.access_token}`)
		}
		return headers
	},
})

export const customerApi = createApi({
	reducerPath: 'customer-api',
	baseQuery,
	tagTypes: Object.values(tagTypesMap),
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
			query: ({ user_id }) => ({
				url: 'web/wishlists',
				method: 'POST',
				body: { page: 0, per_page: -1, search: '', sort: 'id', dir: 'desc', user_id },
			}),
			providesTags: [tagTypesMap.WishlistItems],
		}),
		addToWishlist: builder.mutation({
			query: body => ({
				url: 'web/wishlists/add',
				method: 'POST',
				body,
			}),
			invalidatesTags: [tagTypesMap.WishlistItems],
		}),
		removeFromWishlist: builder.mutation({
			query: body => ({
				url: 'web/wishlists/remove',
				method: 'POST',
				body,
			}),
		}),
		getDeals: builder.query({
			query: () => ({
				url: 'web/collections/products',
				method: 'POST',
				body: {
					page: 1,
					per_page: 30,
					search: '',
					sort: 'id',
					dir: 'desc',
					deals: true,
					categories: [],
					brands: [],
					attributes: [],
					language: 'en',
				},
			}),
		}),
		getSearchResults: builder.query({
			query: searchQuery => ({
				url: 'web/collections/products',
				method: 'POST',
				body: {
					page: 1,
					per_page: 30,
					search: '',
					sort: 'id',
					dir: 'desc',
					categories: [],
					brands: [],
					attributes: [],
					language: 'en',
					q: searchQuery,
					type: 'product',
					min_price: 0,
					max_price: 0,
				},
			}),
		}),
		getCountries: builder.query({
			query: () => ({
				url: '/web/countries',
				method: 'POST',
			}),
		}),
		addSpecialOrder: builder.mutation({
			query: body => ({
				url: 'web/special-orders/add',
				method: 'POST',
				body,
			}),
		}),
		getSingleProduct: builder.query({
			query: body => ({
				url: 'web/products/view',
				method: 'POST',
				body,
			}),
		}),
		getProductReviews: builder.query({
			query: ({ product_id }) => ({
				url: 'web/product/reviews',
				method: 'POST',
				body: {
					page: 0,
					per_page: 100,
					search: '',
					sort: 'id',
					dir: 'desc',
					product_id: product_id,
				},
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
	useAddToWishlistMutation,
	useRemoveFromWishlistMutation,
	useGetDealsQuery,
	useGetSearchResultsQuery,
	useGetCountriesQuery,
	useAddSpecialOrderMutation,
	useGetSingleProductQuery,
	useGetProductReviewsQuery,
} = customerApi
