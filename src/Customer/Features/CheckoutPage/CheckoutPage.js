import React from 'react'
import { FluidContainer } from '@Components'
import { Flex } from '@chakra-ui/react'
import CartCard from '@Customer/Features/CheckoutPage/CartCard'
import styled from 'styled-components'
import ContactForm from '@Customer/Features/CheckoutPage/ContactForm'

const CheckoutPage = () => {
	return (
		<FluidContainer py='26px' marginTop='100px'>
			<Flex width='100%'>
				<StyledLeftContainer>
					<ContactForm />
				</StyledLeftContainer>
				<StyledRightContainer>
					<CartCard />
				</StyledRightContainer>
			</Flex>
		</FluidContainer>
	)
}
const StyledRightContainer = styled.div`
	width: 40%;
`
const StyledLeftContainer = styled.div`
	width: 60%;
`
export default CheckoutPage
