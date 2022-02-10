import React, { useState } from 'react'
import { Button, Popup, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import styled from 'styled-components'
import OfferForm from '@Admin/Features/Offers/OfferForm'

const OffersHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledMainHeader>Offers</StyledMainHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button
						variant='tertiary'
						mt='-20px'
						minWidth={null}
						width='187px'
						fontSize={3}
						display='flex'
						justifyContent='center'
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<VscAdd />
						<Text fontSize={2} ml='5px'>
							Add Offer
						</Text>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} padding='30px' minHeight='60%'>
						{<OfferForm />}
					</Popup>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<StyledHeader>ALL OFFERS</StyledHeader>
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
	margin-top: 20px;
`

const StyledLeftContainer = styled.div`
	flex: 70%;
	justify-content: flex-start;
`
const StyledRightContainer = styled.div`
	flex: 0.5%;
	justify-content: flex-end;
`
const StyledMainHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	color: #212529;
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

const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
	mb: '10px',
	fontWeight: 500,
})`
	color: #212529;
	margin-top: 20px;
`

export default OffersHeaderSection
