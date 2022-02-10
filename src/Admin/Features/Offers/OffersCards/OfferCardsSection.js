import React from 'react'
import styled from 'styled-components'
import OffersCards from '@Admin/Features/Offers/OffersCards/OffersCards'
import { OffersData } from '@Admin/Features/Offers/OffersCards/OffersData'

const OfferCardsSection = () => {
	return (
		<StyledCardSection>
			{OffersData.map(offer => (
				<OffersCards key={offer.id} title={offer.title} startDate={offer.startDate} endDate={offer.endDate} />
			))}
		</StyledCardSection>
	)
}
const StyledCardSection = styled.div`
	width: 85vw;
	display: flex;
	flex-wrap: wrap;
	gap: 25px;
	margin-top: 50px;
	@media (max-width: 1245px) {
		justify-content: center;
	}
`

export default OfferCardsSection
