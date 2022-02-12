import React from 'react'
import styled from 'styled-components'
import PaymentCards from '@Admin/Features/Payment Methods/Payment Cards/PaymentCards'
import { useGetPaymentMethodsQuery } from '@Admin/Redux/AdminApi'

const PaymentsCardsSection = () => {
	const { data, refetch } = useGetPaymentMethodsQuery()
	console.log(useGetPaymentMethodsQuery)
	return (
		<StyledCardSection>
			{data?.data?.map(paymentMethod => (
				<PaymentCards key={paymentMethod.id} paymentMethod={paymentMethod} />
			))}
		</StyledCardSection>
	)
}
const StyledCardSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	background-color: #fbfbfb;
	padding: 50px 40px 150px 0;
	margin-right: 250px;
	@media (max-width: 1245px) {
		justify-content: center;
	}
`

export default PaymentsCardsSection
