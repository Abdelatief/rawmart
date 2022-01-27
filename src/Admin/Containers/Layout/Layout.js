import React from 'react'
import Header from '@Admin/Containers/Layout/Components/Header/Header'
import styled from 'styled-components'
import SideBar from '@Admin/Containers/Layout/Components/SideBar/SideBar'

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<SideBar />
			<StyledPageBody></StyledPageBody>
		</StyledLayout>
	)
}
const StyledLayout = styled.div`
	display: block;
	//flex-direction: column;
	height: 100%;
`

const StyledPageBody = styled.div`
	flex-grow: 1;
`

export default Layout
