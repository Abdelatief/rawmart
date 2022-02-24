import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'
import { Spinner } from '@chakra-ui/react'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { useGetCountriesQuery } from '@Customer/Redux/CustomerApi'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'
import { MdDone } from 'react-icons/md'

const ContactForm = () => {
	const { data, isLoading, isSuccess } = useGetCountriesQuery()
	const { userData } = useCustomerAuthContext()
	const [anotherPerson, setAnotherPerson] = useState(false)

	//Create Time Array
	var x = 30 //minutes interval
	var times = [] // time array
	var tt = 540 // start time
	var ap = ['AM', 'PM'] // AM-PM

	//loop to increment the time and push results in array
	for (var i = 0; tt < 21.5 * 60; i++) {
		var hh = Math.floor(tt / 60) // getting hours of day in 0-24 format
		var mm = tt % 60 // getting minutes of the hour in 0-55 format
		times[i] = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ap[Math.floor(hh / 12)] // pushing data in array in [00:00 - 12:00 AM/PM format]
		tt = tt + x
	}

	return (
		<StyledContainer>
			<StyledTitle>Contact Information</StyledTitle>
			{isLoading && (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)}
			{isSuccess && (
				<>
					<StyledForm style>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='First Name' disabled value={userData.first_name} />
							<FormInput label='Last Name' disabled value={userData.last_name} />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Phone Number' disabled value={userData.phone} />
							<FormInput label='Email' disabled value={userData.email} />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='House Number' required />
							<FormInput label='Postal Code' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='City' required />
							<FormInput label='Governorate' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormSelectedInput
								label='Country'
								options={data?.countries}
								requiredValue='country'
								object={true}
								required
							/>
							<FormInput label='Apartment' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Floor' required />
							<FormInput label='Street' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Building Number' required />
							<FormInput label='Landmark' />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledFormInput>
								<div>
									<SelectLabel>Time of day for delivery</SelectLabel>
									<SelectInput>
										{times.map(time => (
											<StyledOption value={time} key={time.id}>
												{time}
											</StyledOption>
										))}
									</SelectInput>
								</div>
							</StyledFormInput>
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledD onClick={() => setAnotherPerson(!anotherPerson)}>
								<StyledCheckBoxLabel>Order will be received by another person</StyledCheckBoxLabel>
								<CheckBoxInput />
								<StyledCheckBoxSpan>
									<StyledActiveIcon selected={anotherPerson} />
								</StyledCheckBoxSpan>
							</StyledD>
						</FormGroupFlex>

						{anotherPerson && (
							<FormGroupFlex flexDirection={['column', null, 'row']}>
								<FormInput label='Full Name' required />
								<FormInput label='Phone Number' required />
							</FormGroupFlex>
						)}
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledFormInput>
								<div>
									<SelectLabel>Payment Method</SelectLabel>
									<SelectInput>
										<StyledOption value='Cash' selected>
											Cash
										</StyledOption>
									</SelectInput>
								</div>
							</StyledFormInput>
						</FormGroupFlex>
						<Button width={['100%', null, '290px']} mb='16px'>
							Proceed to Checkout
						</Button>
					</StyledForm>
				</>
			)}
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	margin-right: 30px;
`
const StyledTitle = styled(Text)`
	font-size: 35px;
	font-weight: 400;
`
const StyledForm = styled.form`
	margin-top: 46px;
`
const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
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
const SelectLabel = styled.p`
	color: #686868;
	margin-bottom: 8px;
`
const StyledOption = styled.option`
	color: #686868;
`
const SelectInput = styled.select`
	padding: 0 16px;
	font-size: ${props => props.theme.fontSizes[3]}px;
	letter-spacing: 0.3px;
	width: ${props => props?.width ?? '100%'};
	background-color: white;
	height: 46px;
	border: 1px solid gainsboro;

	&:focus {
		outline: none;
	}
`
const StyledFormInput = styled.div`
	width: 100%;
`
export default ContactForm
