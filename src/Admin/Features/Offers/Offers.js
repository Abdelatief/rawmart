import React from 'react'
import OffersHeaderSection from '@Admin/Features/Offers/OffersHeaderSection'
import styled from 'styled-components'
import OffersCards from '@Admin/Features/Offers/OffersCards/OffersCards'
import { Flex } from '@Components'
import OfferCardsSection from '@Admin/Features/Offers/OffersCards/OfferCardsSection'

const Offers = () => {
	return (
		<StyledDiv>
			<OffersHeaderSection />
			<OfferCardsSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	margin: 50px 0 40px 60px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Offers
