import React from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text, Popup } from '@Components'
import { MdDone } from 'react-icons/md'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { useForm } from 'react-hook-form'

const ShippingMethodsForm = ({ title, shippingMethod, isOpen, setIsOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		if (shippingMethod) {
			setIsOpen(false)
		} else {
			setIsOpen(false)
		}
	}

	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen} padding='30px' minHeight='80%'>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style onSubmit={handleSubmit(onSubmit)}>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormInput
							label='Name'
							required
							defaultValue={shippingMethod ? shippingMethod.name : ''}
							{...register('name', { required: true })}
						/>
						{errors.name && <StyledErrorMessage>Name is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormSelectedInput
							label='Type'
							required
							options={[
								{ id: 1, name: 'Flat Rate' },
								// { id: 2, name: 'Free Shipping' },
								// { id: 3, name: 'Price Based' },
							]}
							defaultValue={shippingMethod ? shippingMethod.shipping_method : ''}
							{...register('shipping_method', { required: true })}
						/>
						{errors.shipping_method && <StyledErrorMessage>Shipping method is required!</StyledErrorMessage>}
					</div>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormInput
							label='Shipping Price'
							required
							defaultValue={shippingMethod ? shippingMethod.shipping_price : ''}
							{...register('flat_rate_price', { required: true }, { number: true })}
						/>
						{errors.flat_rate_price && <StyledErrorMessage>Flat rate price is required!</StyledErrorMessage>}
					</div>
				</FormGroupFlex>
				{/*{shippingMethod && (*/}
				{/*    <FormGroupFlex flexDirection={['column', null, 'row']}>*/}
				{/*        <FormInput*/}
				{/*            label='Shipping Price'*/}
				{/*            required*/}
				{/*            defaultValue={shippingMethod ? shippingMethod.shipping_price : ''}*/}
				{/*        />*/}
				{/*    </FormGroupFlex>*/}
				{/*)}*/}
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledInnerContainer>
						<StyledLabel>
							Zip codes<StyledAsterisk> *</StyledAsterisk>
						</StyledLabel>
						<TextArea
							defaultValue={shippingMethod ? shippingMethod.zip_codes : ''}
							{...register('zip_codes', { required: true })}
						/>
						{errors.zip_codes && <StyledErrorMessage>zip_codes are required!</StyledErrorMessage>}
					</StyledInnerContainer>
				</FormGroupFlex>
				<StyledButtonDiv>
					<Button width={['100%', null, '290px']} fontSize={3}>
						<StyledIcon />
						Save Shipping Method
					</Button>
				</StyledButtonDiv>
			</StyledForm>
		</Popup>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
})`
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
const StyledForm = styled.form`
	margin-top: 46px;
`
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`
const StyledLabel = styled(Text)`
	color: #838282;
	margin-bottom: 20px;
`
const StyledAsterisk = styled.span`
	color: red;
`

const TextArea = styled.textarea`
	height: 300px;
	border: 1px solid #ced4da;
	padding: 10px;
	width: calc(100% - 10px);
	cursor: pointer;
`
const StyledInnerContainer = styled.div`
	width: 100%;
`
const StyledErrorMessage = styled.text`
	color: red;
`
export default ShippingMethodsForm
