import { createContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { useImmer } from 'use-immer'
import { LocalStorageKeys } from '@Customer/Constants'
import { useLoginMutation, useRegisterMutation } from '@Customer/Redux/CustomerApi'
import { Text } from '@Components'
import jwt_decode from 'jwt-decode'
export const CustomerAuthContext = createContext({})

const Layout = () => {
	const [authTokens, setAuthTokens] = useImmer({})
	const [isAuthChecked, setIsAuthChecked] = useState(false)
	const [userData, setUserData] = useState()
	// eslint-disable-next-line no-unused-vars
	const [_, { data, isLoading, isSuccess }] = useRegisterMutation({ fixedCacheKey: 'customer-registration' })
	// eslint-disable-next-line no-unused-vars
	const [__, loginResult] = useLoginMutation({ fixedCacheKey: 'customer-login' })

	const logout = () => {
		setAuthTokens(draft => {
			if (draft.access_token) delete draft.access_token
			if (draft.refresh_token) delete draft.refresh_token
		})
		localStorage.removeItem(LocalStorageKeys.customerAuthKey)
	}

	const isAuthenticated = () => isAuthenticated() && !!authTokens?.access_token

	// check for authentication tokens in local storage side effect
	useEffect(() => {
		const authTokens = JSON.parse(localStorage.getItem(LocalStorageKeys.customerAuthKey) ?? '{}')
		if (authTokens.access_token && authTokens.refresh_token) {
			setAuthTokens(draft => {
				draft.access_token = authTokens.access_token
				draft.refresh_token = authTokens.refresh_token
			})
		}
		setIsAuthChecked(true)
	}, [setAuthTokens])

	// set authentication tokens if user registers side effect
	useEffect(() => {
		if (isSuccess && data) {
			const { code, access_token, refresh_token } = data
			if (code === 200 && access_token && refresh_token) {
				setAuthTokens(draft => {
					draft.access_token = access_token
					draft.refresh_token = refresh_token
				})
				localStorage.setItem(LocalStorageKeys.customerAuthKey, JSON.stringify({ access_token, refresh_token }))
			}
		}
	}, [data, isLoading, isSuccess, setAuthTokens])

	useEffect(() => {
		if (loginResult?.isSuccess && loginResult?.data && loginResult?.data?.code === 200) {
			setAuthTokens(draft => {
				draft.access_token = loginResult.data.access_token
				draft.refresh_token = loginResult.data.refresh_token
			})
			localStorage.setItem(
				LocalStorageKeys.customerAuthKey,
				JSON.stringify({
					access_token: loginResult.data.access_token,
					refresh_token: loginResult.data.refresh_token,
				})
			)
		}
	}, [loginResult, setAuthTokens])

	useEffect(() => {
		if (authTokens.access_token) {
			const decodedToken = jwt_decode(authTokens.access_token)
			setUserData(decodedToken.data)
		}
	}, [authTokens])

	return (
		<CustomerAuthContext.Provider
			value={{ authTokens, isAuthChecked, resetAuthTokens: logout, isAuthenticated, userData }}
		>
			{isAuthChecked ? (
				<StyledLayout>
					<Header />
					<StyledPageBody>
						<Outlet />
					</StyledPageBody>
					<Footer />
				</StyledLayout>
			) : (
				<Text fontSize='26px'>Loading...</Text>
			)}
		</CustomerAuthContext.Provider>
	)
}

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const StyledPageBody = styled.div`
	flex-grow: 1;
`

export default Layout
