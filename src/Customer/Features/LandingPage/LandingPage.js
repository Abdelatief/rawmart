import Header from '@Customer/Containers/Layout/Components/Header'
import Footer from '@Customer/Containers/Layout/Components/Footer'
import Carousel from '@Customer/Features/LandingPage/Components/Carousel'
import React from 'react'
import styled from 'styled-components'

const LandingPage = () => {
	return (
		<StyledLayout>
			<Header />
			<StyledPageBody>
				<Carousel />
			</StyledPageBody>
			<Footer />
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

export default LandingPage
