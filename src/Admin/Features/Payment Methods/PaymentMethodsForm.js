import React, { useState } from 'react'
import styled from 'styled-components'
import DragAndDropImage from '@Admin/Components/DragAndDropImage'
import { Button, Flex, FormInput, Text } from '@Components'
import { MdDone } from 'react-icons/md'
import { VscAdd, VscTrash } from 'react-icons/vsc'

const PaymentMethodsForm = ({ title, paymentMethod }) => {
	const [Active, setActive] = useState(true)

	return (
		<div>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<StyledLabel>Logo</StyledLabel>
						<DragAndDropImage value={paymentMethod ? paymentMethod.image : null} />
					</div>
					<StyledInnerContainer>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Name' required placeHolder={paymentMethod ? paymentMethod.name : ''} />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Description' value={paymentMethod ? paymentMethod.description : ''} />
						</FormGroupFlex>
					</StyledInnerContainer>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledD onClick={() => setActive(true)}>
						<StyledCheckBoxLabel>Active</StyledCheckBoxLabel>
						<CheckBoxInput />
						<StyledCheckBoxSpan>
							<StyledActiveIcon selected={Active} />
						</StyledCheckBoxSpan>
					</StyledD>
					<StyledD onClick={() => setActive(false)}>
						<StyledCheckBoxLabel>In-Active</StyledCheckBoxLabel>
						<CheckBoxInput />
						<StyledCheckBoxSpan>
							<StyledActiveIcon selected={!Active} />
						</StyledCheckBoxSpan>
					</StyledD>
				</FormGroupFlex>
				<Text fontSize={3} mb='20px'>
					Credentials
				</Text>
				{/*TODO:Refactor Dynamic Form*/}
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Key' value={paymentMethod ? paymentMethod.key : ''} />
					<FormInput label='Value' value={paymentMethod ? paymentMethod.value : ''} />
					<StyledTrashIcon />
				</FormGroupFlex>

				<AddMoreButton>
					<VscAdd />
					<Text fontSize={2} ml='5px'>
						Add More
					</Text>
				</AddMoreButton>
				<StyledButtonDiv>
					<Button width={['100%', null, '400px']} fontSize={3}>
						<StyledIcon />
						Save Payment Method
					</Button>
				</StyledButtonDiv>
			</StyledForm>
		</div>
	)
}
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
})``

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledInnerContainer = styled.div`
	width: 100%;
`

const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
`

const StyledForm = styled.form`
	margin-top: 46px;
	padding: 30px;
`

const CheckBoxInput = styled.input.attrs({
	type: 'radio',
	boxSizing: 'border-box',
	p: '0',
})`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	left: 0;
	width: 20px;
	height: 20px;
`

const StyledCheckBoxSpan = styled.span`
	position: absolute;
	left: 0;
	height: 18px;
	width: 18px;
	border: 1px solid #525676;
	margin-top: 2px;
`
const StyledD = styled.div`
	display: inline-block;
	position: relative;
	padding-left: 30px;
	cursor: pointer;
	line-height: 24px;
	margin-right: 15px;
`
const StyledActiveIcon = styled(MdDone)`
	display: ${props => (props.selected ? 'flex' : 'none')};
`
const StyledCheckBoxLabel = styled.label`
	cursor: pointer;
	color: #686868;
`

const StyledTrashIcon = styled(VscTrash)`
	margin-top: 24px;
	background: red;
	color: #fff;
	padding: 10px;
	font-size: 18px;
	border-radius: 5px;
	width: 80px;
	height: 45px;
	cursor: pointer;
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
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`
const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
`
export default PaymentMethodsForm
