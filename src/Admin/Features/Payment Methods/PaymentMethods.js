import React from 'react'
import styled from 'styled-components'
import PaymentHeaderSection from '@Admin/Features/Payment Methods/PaymentHeaderSection'
import PaymentsCardsSection from '@Admin/Features/Payment Methods/Payment Cards/PaymentsCardsSection'

const PaymentMethods = () => {
	return (
		<StyledDiv>
			<PaymentHeaderSection />
			<PaymentsCardsSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	margin: 50px 30px 40px 30px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default PaymentMethods
