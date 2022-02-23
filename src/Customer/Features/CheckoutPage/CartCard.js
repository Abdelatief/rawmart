import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useGetCartQuery } from '@Customer/Redux/CustomerApi'
import { Spinner, Text } from '@chakra-ui/react'
import { Button, Flex } from '@Components'

const CartCard = () => {
	const products = useSelector(state => state.cart.items)
	const { data, isLoading, isSuccess } = useGetCartQuery({
		dir: 'desc',
		page: 0,
		per_page: -1,
		postalcode: '',
		products,
		search: '',
		sort: 'id',
	})
	useEffect(() => {
		console.log({ cartData: data })
	}, [data])

	return (
		<StyledContainer bg='background.cultured'>
			{isLoading && (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)}
			{isSuccess && (
				<>
					<StyledInnerContainer>
						<StyledHeader>My Shopping Cart</StyledHeader>
					</StyledInnerContainer>

					{data.data.map(product => (
						<StyledInnerContainer key={product.id}>
							<Flex width='100%' margin='20px'>
								<StyledImage src={product.image_url} />
								<div>
									<Text>{product.name}</Text>
									<Text>EGP {product.price}</Text>
								</div>
							</Flex>
						</StyledInnerContainer>
					))}
					<StyledInnerContainer>
						<Flex width='100%' margin='20px'>
							<StyledTitle>Sub total</StyledTitle>
							<Text color='gray'>EGP {data.summary.sub_total}</Text>
						</Flex>
						<Flex width='100%' margin='20px'>
							<StyledTitle>Shipping</StyledTitle>
							<Text color='gray'>EGP {data.summary.shipping}</Text>
						</Flex>
					</StyledInnerContainer>

					<div>
						<Flex width='100%' margin='20px'>
							<StyledTitle>Total</StyledTitle>
							<Text fontSize='16px' fontWeight='bold'>
								EGP {data.summary.total}
							</Text>
						</Flex>
						<Button width='100%' mt='16px'>
							Edit Cart
						</Button>
					</div>
				</>
			)}
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	background-color: #f7f7f7;
	padding: 30px;
`
const StyledHeader = styled(Text)`
	font-size: 20px;
	font-weight: bold;
	padding-bottom: 20px;
`
const StyledInnerContainer = styled.div`
	border-bottom: 1px #d5d2d2 solid;
`

const StyledImage = styled.img`
	width: 70px;
	//height: 60px;
	margin-right: 30%;
`
const StyledTitle = styled(Text)`
	font-size: 18px;
	font-weight: bold;
	margin-right: 55%;
`

export default CartCard
