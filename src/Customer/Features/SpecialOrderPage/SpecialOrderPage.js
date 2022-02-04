import styled from 'styled-components'
import { Flex, Text, FluidContainer, FormInput } from '@Components'

const SpecialOrderPage = () => {
	return (
		<FluidContainer>
			<Text fontSize='34px' lineHeight='1.412' my='30px'>
				Make Special Order
			</Text>
			<Text lineHeight='1.625' color='rgba(0, 0, 0, 0.6)'>
				Some of the items we sell are only available by special order. You will see in the page for that particular
				product a field where you can add your email address to request a special order. When we receive this, we will
				confirm the price and availability and get back to you by email within a few days to confirm if you would like
				to proceed with the order.
			</Text>
			<StyledForm style>
				<FormGroupFlex>
					<FormInput label='First Name' required />
					<FormInput label='Last Name' required />
				</FormGroupFlex>
				<FormGroupFlex gap='16px'>
					<FormInput label='Phone Number' required />
					<FormInput label='Email' required />
				</FormGroupFlex>
				<FormGroupFlex>
					<FormInput label='Category' required />
					<FormInput label='Brand' required />
				</FormGroupFlex>
				<FormGroupFlex>
					<FormInput label='Request' required />
				</FormGroupFlex>
				<SubmitButton>Submit</SubmitButton>
			</StyledForm>

			<Text fontSize='24px' lineHeight='1.292' mb='30px'>
				Please note that special orders cannot be returned or exchanged.
			</Text>
			<Text color='rgba(0, 0, 0, 0.6)' lineHeight='1.625' mb='16px'>
				Let us know if you have any particular products that you would like to see on our site. We are constantly
				working hard to add more products and categories so we can live up to the claim that we are indeed a
				one-stop-shop for all building materials and finishing products.
			</Text>
		</FluidContainer>
	)
}

const StyledForm = styled.form`
	margin-top: 46px;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})``

const SubmitButton = styled.button`
	border: none;
	padding: 20px 26px;
	background-color: black;
	color: white;
	margin-bottom: 32px;
	min-width: 264px;
	cursor: pointer;
`

export default SpecialOrderPage