import React from 'react'
import Header from '@Admin/Containers/Layout/Components/Header/Header'
import styled from 'styled-components'
import SideBar from '@Admin/Containers/Layout/Components/SideBar/SideBar'

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledLeftPart>
				<SideBar />
			</StyledLeftPart>

			<StyledPageBody></StyledPageBody>
		</StyledLayout>
	)
}
const StyledLayout = styled.div`
	display: block;
	//flex-direction: column;
	height: 100%;
`

const StyledLeftPart = styled.div`
	@media (max-width: 1000px) {
		display: none;
	}
`
const StyledPageBody = styled.div`
	flex-grow: 1;
`

export default Layout
