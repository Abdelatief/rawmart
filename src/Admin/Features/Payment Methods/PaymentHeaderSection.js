import React, { useState } from 'react'
import { Button, Popup, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import styled from 'styled-components'
import PaymentMethodsForm from '@Admin/Features/Payment Methods/PaymentMethodsForm'

const PaymentHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Payment Methods</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button
						variant='tertiary'
						mt='-20px'
						minWidth={null}
						width='230px'
						fontSize={3}
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<Text fontSize={2}>
							<VscAdd fontSize='15px' mr='5px' />
							Add Payment Method
						</Text>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} minHeight='80%' width='70%' padding='30px' overflow='auto'>
						{<PaymentMethodsForm title='ADD PAYMENT METHOD' />}
					</Popup>
				</StyledRightContainer>
			</StyledHeaderDiv>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	display: block;
	margin-top: -20px;
`
const StyledHeaderDiv = styled.div`
	display: flex;
	@media (max-width: 750px) {
		display: block;
	}
	margin-top: -20px;
`

const StyledLeftContainer = styled.div`
	flex: 70%;
	justify-content: flex-start;
`
const StyledRightContainer = styled.div`
	flex: 0.5%;
	justify-content: flex-end;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		margin-top: 40px;
		padding: 10px;
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		min-height: 50px;
	}
`

export default PaymentHeaderSection
