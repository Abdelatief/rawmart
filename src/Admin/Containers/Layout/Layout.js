import React from 'react'
import Header from '@Admin/Containers/Layout/Components/Header/Header'
import styled from 'styled-components'
import SideBar from '@Admin/Containers/Layout/Components/SideBar/SideBar'
import { Flex } from '@Components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
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
