import React from 'react'
import Header from '@Admin/Containers/Layout/Components/Header/Header'
import styled from 'styled-components'

const Layout = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledPageBody></StyledPageBody>
		</StyledLayout>
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
