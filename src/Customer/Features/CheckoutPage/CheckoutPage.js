import React from 'react'
import { FluidContainer } from '@Components'
import { Flex } from '@chakra-ui/react'
import CartCard from '@Customer/Features/CheckoutPage/CartCard'
import styled from 'styled-components'

const CheckoutPage = () => {
	return (
		<FluidContainer py='26px'>
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
	width: 40%;
	//height: 100%;
	//justify-content: flex-end;
`
const StyledLeftContainer = styled.div`
	//flex: 70%;
	width: 60%;
	//justify-content: flex-start;
`
export default CheckoutPage
