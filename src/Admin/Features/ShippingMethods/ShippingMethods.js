import React from 'react'
import styled from 'styled-components'
import ShippingMethodHeaderSection from '@Admin/Features/ShippingMethods/ShippingMethodHeaderSection'
import ShippingMethodsCardsSection from '@Admin/Features/ShippingMethods/ShippingMethodCards/ShippingMethodsCardsSection'

const ShippingMethods = () => {
	return (
		<StyledDiv>
			<ShippingMethodHeaderSection />
			<ShippingMethodsCardsSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 50px 50px 10px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default ShippingMethods
