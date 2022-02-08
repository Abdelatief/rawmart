import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, FormInput, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'

const VendorFormUpperSection = () => {
	const [additionalAddress, setAdditionalAddress] = useState(false)
	const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState(false)

	return (
		<FormGroupFlex flexDirection={['column', null, 'row']}>
			{/*TODO:Add image upload */}
			<div>
				<StyledLabel>Image</StyledLabel>
				<StyledFlex>ADD Image</StyledFlex>
			</div>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Vendor Name (Brand Name)' required sizeLarge={true} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Phone Number' required />
					<FormInput label='Address' required />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					{!additionalPhoneNumber ? (
						<StyledFormInput>
							<AddMoreButton onClick={() => setAdditionalPhoneNumber(true)}>
								<VscAdd />
								<Text fontSize={2} ml='5px'>
									Add Additional Phone number
								</Text>
							</AddMoreButton>
						</StyledFormInput>
					) : (
						<FormInput label='Additional Phone Number' />
					)}
					{!additionalAddress ? (
						<StyledFormInput>
							<AddMoreButton onClick={() => setAdditionalAddress(true)}>
								<VscAdd />
								<Text fontSize={2} ml='5px'>
									Add Additional Address
								</Text>
							</AddMoreButton>
						</StyledFormInput>
					) : (
						<FormInput label='Additional Address' />
					)}
				</FormGroupFlex>
			</StyledInnerContainer>
		</FormGroupFlex>
	)
}
const StyledInnerContainer = styled.div`
	width: 100%;
`
const StyledFlex = styled(Flex)`
	margin-right: 20px;
	min-width: 183px;
	min-height: 183px;
	background-color: #d9d8d8;
	border: 1px dashed black;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	width: ${props => (props.sizeLarge ? 'calc(10% - 220px)' : '100%')};

	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
`
const AddMoreButton = styled.button`
	display: flex;
	background: transparent;
	border: 0;
	box-shadow: none !important;
	border-bottom: 2px solid #a0a0a0;
	&:hover {
		cursor: pointer;
	}
`
const StyledFormInput = styled.div`
	width: 100%;
`

export default VendorFormUpperSection
