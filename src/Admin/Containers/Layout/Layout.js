import React, { createContext, useEffect, useState } from 'react'
import { useImmer } from 'use-immer'
import Header from '@Admin/Containers/Layout/Components/Header/Header'
import styled from 'styled-components'
import SideBar from '@Admin/Containers/Layout/Components/SideBar/SideBar'
import LoginPopup from '@Admin/Containers/Layout/Components/LoginPopup'
import { Flex, Text } from '@Components'
import { Outlet } from 'react-router-dom'
import { LocalStorageKeys } from '@Admin/Constants'
import { useLoginMutation } from '@Admin/Redux/AdminApi'

export const AdminAuthContext = createContext({})

const Layout = () => {
	const [authTokens, setAuthTokens] = useImmer({})
	const [isAuthChecked, setIsAuthChecked] = useState(false)
	const [showLoginPopup, setShowLoginPopup] = useState(false)
	// eslint-disable-next-line no-unused-vars
	const [_, { isSuccess, data }] = useLoginMutation({ fixedCacheKey: 'admin-login' })

	const logout = () => {
		setAuthTokens(draft => {
			delete draft.access_token
			delete draft.refresh_token
		})
		localStorage.removeItem(LocalStorageKeys.adminAuthKey)
		setShowLoginPopup(true)
	}

	useEffect(() => {
		const localStorageTokens = JSON.parse(localStorage.getItem(LocalStorageKeys.adminAuthKey) ?? '{}')
		if (localStorageTokens?.access_token && localStorageTokens?.refresh_token) {
			setAuthTokens(draft => {
				draft.access_token = localStorageTokens.access_token
				draft.refresh_token = localStorageTokens.refresh_tokens
			})
		} else {
			setShowLoginPopup(true)
		}
		setIsAuthChecked(true)
	}, [setAuthTokens])

	useEffect(() => {
		if (isSuccess && data?.access_token && data?.refresh_token) {
			setAuthTokens({
				access_token: data.access_token,
				refresh_token: data.refresh_token,
			})
			localStorage.setItem(
				LocalStorageKeys.adminAuthKey,
				JSON.stringify({
					access_token: data.access_token,
					refresh_token: data.refresh_token,
				})
			)
		}
	}, [data, isSuccess, setAuthTokens])

	const renderer = () => {
		if (isAuthChecked) {
			if (authTokens?.access_token) {
				return (
					<StyledLayout>
						<Header />
						<Flex>
							<StyledLeftPart>
								<SideBar />
							</StyledLeftPart>

							<StyledPageBody>
								<Outlet />
							</StyledPageBody>
						</Flex>
					</StyledLayout>
				)
			}
			return <LoginPopup isOpen={showLoginPopup} setIsOpen={setShowLoginPopup} />
		}
		return <Text fontSize='26px'>Loading...</Text>
	}

	return <AdminAuthContext.Provider value={{ authTokens, logout }}>{renderer()}</AdminAuthContext.Provider>
}
const StyledLayout = styled.div`
	height: 100%;
`

const StyledLeftPart = styled.div`
	@media (max-width: 1000px) {
		display: none;
	}
`
const StyledPageBody = styled.div`
	flex-grow: 1;
	overflow: auto;
	padding: 16px 0;
`

export default Layout
