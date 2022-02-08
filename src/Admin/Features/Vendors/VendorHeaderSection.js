import React, { useState } from 'react'
import { Button, Flex, Text, Box, Popup } from '@Components'
import styled from 'styled-components'
import { VscAdd } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'
import VendorsForm from '@Admin/Features/Vendors/VendorsForm/VendorsForm'

const VendorHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Vendors</StyledHeader>
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
							Add Vendor
						</Text>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} minWidth='60%' height='98%'>
						{<VendorsForm />}
					</Popup>
				</StyledRightContainer>
			</StyledHeaderDiv>

			<Flex width='375px' height='55px' border='1px solid' borderColor='border.black' alignItems='center'>
				<IconWrapper height='100%' px='8px'>
					<SearchIcon />
				</IconWrapper>
				<StyledInput placeholder='Search Vendor' />
			</Flex>
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
		text-align: center;
		width: 100%;
	}
`
const SearchIcon = styled(FiSearch)`
	display: block;
	color: black;
	width: 25px;
	height: 100%;
`

const StyledInput = styled.input`
	padding: 0 16px;
	border: none;
	font-size: ${props => props.theme.fontSizes[2]}px;
	letter-spacing: 0.3px;
	width: ${props => props?.width ?? '100%'};

	&:focus {
		outline: none;
	}
`

const IconWrapper = styled(Box)`
	&:hover {
		background-color: #e0ecde;
		cursor: pointer;
	}
`
export default VendorHeaderSection
