import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'
import { Spinner } from '@chakra-ui/react'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { useGetCountriesQuery } from '@Customer/Redux/CustomerApi'

const ContactForm = () => {
	const { data, isLoading, isSuccess } = useGetCountriesQuery()
	// const { userData } = useCustomerAuthContext()
	// const userId = userData.id
	return (
		<StyledContainer>
			<StyledTitle>Contact Information</StyledTitle>
			{isLoading && (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)}{' '}
			{isSuccess && (
				<>
					<StyledForm style>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='First Name' disabled />
							<FormInput label='Last Name' disabled />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='Phone Number' disabled />
							<FormInput label='Email' disabled />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput label='House Number' required />
							<FormInput label='City' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormSelectedInput
								label='Country'
								options={data?.countries}
								requiredValue='country'
								object={true}
								required
							/>
							<FormInput label='State' required />
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<FormInput width='50%' label='Postal Code' required />
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

export default ContactForm
