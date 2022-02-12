import React from 'react'
import styled from 'styled-components'
import OffersCards from '@Admin/Features/Offers/OffersCards/OffersCards'
import { useGetOffersQuery } from '@Admin/Redux/AdminApi'

const OfferCardsSection = () => {
	const { data, refetch } = useGetOffersQuery()
	return (
		<StyledCardSection>
			{data?.data?.map(offer => (
				<OffersCards key={offer.id} offer={offer} />
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
