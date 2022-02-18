import { FluidContainer } from '@Components'
import { CloseIcon } from '@chakra-ui/icons'
import { Text, Table, Thead, Tbody, Tr, Th, Td, chakra, Image, Box, Flex } from '@chakra-ui/react'
import { useGetCartQuery } from '@Customer/Redux/CustomerApi'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Cart = () => {
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
										<CloseIcon width='26px' height='26px' color='red' />
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
					<Box maxWidth='360px'>
						<Text fontSize='24px' weight={500} borderBottom='1px solid lightgray' pb='16px'>
							Cart Summary
						</Text>
						<Flex>
							<Text lineHeight='1.938'>Sub Total</Text>
							{/*<Text>{data?.summary?.}</Text>*/}
						</Flex>
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

export default Cart
