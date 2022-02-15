import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, FormInput, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import DragAndDropImage from '@Admin/Components/DragAndDropImage'

const VendorFormUpperSection = ({ vendor }) => {
	const [additionalAddress, setAdditionalAddress] = useState(false)
	const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState(false)

	return (
		<FormGroupFlex flexDirection={['column', null, 'row']}>
			<div>
				<StyledLabel>Image</StyledLabel>
				<DragAndDropImage />
			</div>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput
						label='Vendor Name (Brand Name)'
						required
						sizeLarge={true}
						defaultValue={vendor ? vendor.name : ''}
					/>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Phone Number' required defaultValue={vendor ? vendor.phone : ''} />
					<FormInput label='Address' required defaultValue={vendor ? vendor.address : ''} />
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
						<FormInput label='Additional Phone Number' defaultValue={vendor ? vendor.additional_phone : ''} />
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
						<FormInput label='Additional Address' defaultValue={vendor ? vendor.additional_address : ''} />
					)}
				</FormGroupFlex>
			</StyledInnerContainer>
		</FormGroupFlex>
	)
}
const StyledInnerContainer = styled.div`
	width: 100%;
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
