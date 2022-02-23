import React from 'react'
import { FluidContainer } from '@Components'
import { Flex } from '@chakra-ui/react'
import CartCard from '@Customer/Features/CategoryPage/cartCard'
import styled from 'styled-components'

const CheckOutPage = () => {
	return (
		<FluidContainer>
			<Flex width='100%'>
				<StyledLeftContainer>hello</StyledLeftContainer>
				<StyledRightContainer>
					<CartCard />
				</StyledRightContainer>
			</Flex>
		</FluidContainer>
	)
}
const StyledRightContainer = styled.div`
	//flex: 20%;
	width: 30%;
	//justify-content: flex-end;
`
const StyledLeftContainer = styled.div`
	//flex: 70%;
	width: 70%;
	//justify-content: flex-start;
`
export default CheckOutPage
