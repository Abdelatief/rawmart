import React from 'react'
import { Button, Input, Text } from '@Components'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const VendorHeader = () => {
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Vendors</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button variant='tertiary' minWidth={null} width='187px' fontSize={3}>
						<AiOutlinePlus mb='20px' />
						Add Vendor
					</Button>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<Input width='392px' icon={<SearchIcon />} placeHolder='jjj' />
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	margin-bottom: 40px;
	display: block;
	margin-top: -20px;
`
const StyledHeaderDiv = styled.div`
	margin-bottom: 40px;
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
	flex: 0%;
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
		//padding: 10px;
		text-align: center;

		width: 100%;
	}
`
const SearchIcon = styled(FiSearch)`
	display: block;
	color: ${props => props.theme.colors.text.lightBlack};
	width: 28px;
	height: 100%;
`

export default VendorHeader
