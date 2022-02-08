import React from 'react'
import styled from 'styled-components'
import { Text } from '@Components'

const Orders = () => {
	return (
		<StyledContainer>
			<StyledHeader>Orders</StyledHeader>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	min-height: 100vh;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
	ml: '15px',
})`
	min-height: 50px;
	position: relative;
	@media (max-width: 750px) {
		background: #e0ecde;
		padding: 10px;
		text-align: center;
		margin-bottom: 20px;
	}
`

export default Orders
