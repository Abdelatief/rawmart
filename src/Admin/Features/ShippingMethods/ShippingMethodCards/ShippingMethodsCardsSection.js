import React from 'react'
import styled from 'styled-components'
import ShippingMethodsCards from '@Admin/Features/ShippingMethods/ShippingMethodCards/ShippingMethodsCards'
import { ShippingMethodsData } from '@Admin/Features/ShippingMethods/ShippingMethodCards/ShippingMethodsData'

const ShippingMethodsCardsSection = () => {
	return (
		<StyledCardSection>
			{ShippingMethodsData.map(shippingMethod => (
				<ShippingMethodsCards
					key={shippingMethod.id}
					title={shippingMethod.title}
					description={shippingMethod.description}
				/>
			))}
		</StyledCardSection>
	)
}
const StyledCardSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	background-color: #fbfbfb;
	padding: 150px 40px 150px 40px;
	@media (max-width: 1245px) {
		justify-content: center;
	}
`

export default ShippingMethodsCardsSection
