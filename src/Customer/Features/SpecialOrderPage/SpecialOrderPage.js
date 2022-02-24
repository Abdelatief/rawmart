import styled from 'styled-components'
import { Flex, Text, FluidContainer, FormInput, Button } from '@Components'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useAddSpecialOrderMutation, useGetBrandsQuery, useGetCategoriesQuery } from '@Customer/Redux/CustomerApi'
import { Spinner } from '@chakra-ui/react'

const SpecialOrderPage = () => {
	const { data: categoriesData, isLoading, isSuccess } = useGetCategoriesQuery()
	const { data: brandData, isLoading: brandIsLoading, isSuccess: brandIsSuccess } = useGetBrandsQuery()
	const [addSpecialOrder] = useAddSpecialOrderMutation()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		// console.log(data)
		addSpecialOrder(data)
	}

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
			{(isLoading || brandIsLoading) && (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)}
			{isSuccess && brandIsSuccess && (
				<>
					<StyledForm style onSubmit={handleSubmit(onSubmit)}>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledInnerContainer>
								<FormInput label='First Name' required {...register('first_name', { required: true })} />
								{errors.first_name && <StyledErrorMessage>First name is required!</StyledErrorMessage>}
							</StyledInnerContainer>
							<StyledInnerContainer>
								<FormInput label='Last Name' required {...register('last_name', { required: true })} />
								{errors.last_name && <StyledErrorMessage>Last name is required!</StyledErrorMessage>}
							</StyledInnerContainer>
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledInnerContainer>
								<FormInput label='Phone Number' required {...register('phone', { required: true })} />
								{errors.phone && <StyledErrorMessage>Phone number is required!</StyledErrorMessage>}
							</StyledInnerContainer>
							<StyledInnerContainer>
								<FormInput label='Email' required {...register('email', { required: true })} />
								{errors.email && <StyledErrorMessage>Email is required!</StyledErrorMessage>}
							</StyledInnerContainer>
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledInnerContainer>
								<div>
									<SelectLabel>
										Category<StyledAsterisk> *</StyledAsterisk>
									</SelectLabel>
									<SelectInput required {...register('category_id', { required: true })}>
										<StyledOption value='' disabled selected>
											Select Category
										</StyledOption>
										{categoriesData.map(category => (
											<>
												<StyledOption value={category.id} key={category.id}>
													{category.name}
												</StyledOption>
												{category.children.map(child => (
													<StyledOption value={child.id} key={child.id}>
														{child.name}
													</StyledOption>
												))}
											</>
										))}
									</SelectInput>
									{errors.category_id && <StyledErrorMessage>Category is required!</StyledErrorMessage>}
								</div>
							</StyledInnerContainer>
							<StyledInnerContainer>
								<div>
									<SelectLabel>
										Brand<StyledAsterisk> *</StyledAsterisk>
									</SelectLabel>
									<SelectInput required {...register('brand_id', { required: true })}>
										<StyledOption value='' disabled selected>
											Select Brand
										</StyledOption>
										{brandData.data.map(brand => (
											<StyledOption value={brand.id} key={brand.id}>
												{brand.name}
											</StyledOption>
										))}
									</SelectInput>
									{errors.brand_id && <StyledErrorMessage>Brand is required!</StyledErrorMessage>}
								</div>
							</StyledInnerContainer>
						</FormGroupFlex>
						<FormGroupFlex flexDirection={['column', null, 'row']}>
							<StyledInnerContainer>
								<FormInput label='Request' required {...register('request', { required: true })} />
								{errors.request && <StyledErrorMessage>Request is required!</StyledErrorMessage>}
							</StyledInnerContainer>
						</FormGroupFlex>
						<Button width={['100%', null, '290px']} mb='16px'>
							Submit
						</Button>
					</StyledForm>
				</>
			)}
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
const StyledInnerContainer = styled.div`
	width: 100%;
`
const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledErrorMessage = styled.text`
	color: red;
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

const StyledAsterisk = styled.span`
	color: red;
`
export default SpecialOrderPage
