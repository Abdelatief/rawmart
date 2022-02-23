import { FluidContainer } from '@Components'
import { CloseIcon } from '@chakra-ui/icons'
import { Text, Table, Thead, Tbody, Tr, Th, Td, chakra, Image, Box, Flex, Button } from '@chakra-ui/react'
import { useGetCartQuery } from '@Customer/Redux/CustomerApi'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { removeItem } from '@Customer/Redux/CartSlice'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Cart = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.items)
	const { data, isLoading, isSuccess } = useGetCartQuery({
		dir: 'desc',
		page: 0,
		per_page: -1,
		products,
		search: '',
		sort: 'id',
	})

	useEffect(() => {
		console.log({ cartData: data })
	}, [data])

	const removeProduct = id => {
		dispatch(removeItem(id))
	}

	return (
		<FluidContainer py='26px'>
			{isSuccess && (
				<>
					<Text fontSize='34px' fontWeight={500} lineHeight='1.412' my='30px'>
						Cart
					</Text>

					<Table variant='unstyled' textAlign='center'>
						<Thead>
							<Tr borderBottom='1px solid lightgray'>
								<CustomTh>Actions</CustomTh>
								<CustomTh>Product</CustomTh>
								<CustomTh></CustomTh>
								<CustomTh>Unit Price</CustomTh>
								<CustomTh>Quantity</CustomTh>
								<CustomTh>Sub Total</CustomTh>
							</Tr>
						</Thead>
						<Tbody>
							{data?.data.map(item => (
								<Tr key={item.id}>
									<CustomTd _hover={{ cursor: 'pointer' }}>
										<CloseIcon width='26px' height='26px' color='red' onClick={() => removeProduct(item.id)} />
									</CustomTd>
									<CustomTd>
										<Image src={item.image_url} alt={item.name} />
									</CustomTd>
									<CustomTd>
										<Text>{item.name}</Text>
									</CustomTd>
									<CustomTd>
										<Text>{item.cart_price}</Text>
									</CustomTd>
									<CustomTd>
										<Text>{item.quantity}</Text>
									</CustomTd>
									<CustomTd>
										<Text>{item.sub_total}</Text>
									</CustomTd>
								</Tr>
							))}
						</Tbody>
					</Table>
					<Box maxWidth='360px' mx='auto' my='26px'>
						<Text fontSize='24px' weight={500} borderBottom='1px solid lightgray' pb='16px'>
							Cart Summary
						</Text>
						<SummaryFlex mt='26px'>
							<Text lineHeight='1.938' fontWeight={600}>
								Sub Total
							</Text>
							<Text>{data?.summary?.sub_total} EGP</Text>
						</SummaryFlex>
						<SummaryFlex mb='26px'>
							<Text lineHeight='1.938' fontWeight={600}>
								Shipping
							</Text>
							<Text>{data?.summary?.shipping} EGP</Text>
						</SummaryFlex>
						<SummaryFlex py='26px' borderY='1px solid lightgray'>
							<Text fontSize='18px' lineHeight='1.938' fontWeight={600}>
								Total
							</Text>
							<Text fontSize='18px' fontWeight={600}>
								{data?.summary?.total} EGP
							</Text>
						</SummaryFlex>
						<StyledLink to='../check-out'>
							<Button bg='#AFD39A' color='black' borderRadius={0} width='100%' my='16px'>
								Proceed to Checkout
							</Button>
						</StyledLink>
					</Box>
				</>
			)}

			{isLoading && <Text fontSize='26px'>Loading...</Text>}
		</FluidContainer>
	)
}

const CustomTh = chakra(Th, {
	baseStyle: {
		textAlign: 'center',
	},
})

const CustomTd = chakra(Td, {
	baseStyle: {
		py: '26px',
		textAlign: 'center',
	},
})

const SummaryFlex = chakra(Flex, {
	baseStyle: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
const StyledLink = styled(Link)`
	text-decoration-line: none;
`

export default Cart
