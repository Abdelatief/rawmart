import React from 'react'
import styled from 'styled-components'
import { Flex, FluidContainer, Text } from '@Components'
import ReviewsView from '@Customer/Features/SingleProductPage/Reviews/ReviewsView'

const Reviews = () => {
	return (
		<FluidContainer mt='100px'>
			<StyledInnerContainer>
				<Text color='black' ml='80px' mb='20px' fontWeight={600}>
					Reviews
				</Text>
			</StyledInnerContainer>
			<Flex width='100%' flexDirection={['column', null, 'row']} p='20px'>
				<StyledLeftContainer>
					<ReviewsView />
				</StyledLeftContainer>
				<StyledRightContainer>right</StyledRightContainer>
			</Flex>
		</FluidContainer>
	)
}

const StyledInnerContainer = styled.div`
	border-bottom: 1px solid #dee2e6;
`
const StyledRightContainer = styled.div`
	width: 50%;
`
const StyledLeftContainer = styled.div`
	width: 50%;
`
export default Reviews
