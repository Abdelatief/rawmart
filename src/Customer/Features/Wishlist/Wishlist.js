import React from 'react'
import { chakra, Image, Table, Tbody, Td, Text, Th, Thead, Tr, Box, Button } from '@chakra-ui/react'
import { FluidContainer } from '@Components'
import { useGetWishlistQuery, useRemoveFromWishlistMutation } from '@Customer/Redux/CustomerApi'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'
import { CloseIcon } from '@chakra-ui/icons'

const Wishlist = () => {
	const { userData } = useCustomerAuthContext()
	const { data, isLoading, isSuccess } = useGetWishlistQuery({ user_id: userData.id })
	const [mutate, mutationResult] = useRemoveFromWishlistMutation()

	React.useEffect(() => {
		console.log({ data, isLoading })
	}, [data, isLoading])

	const removeProduct = product_id => {
		mutate({ product_id, user_id: userData?.id })
	}

	return (
		<FluidContainer>
			{isSuccess && (
				<Box pb='26px'>
					<Text fontSize='34px' fontWeight={500} lineHeight='1.412' my='30px'>
						Wishlist
					</Text>

					<Box overflowX='auto' width='100%'>
						<Table variant='unstyled' textAlign='center' maxWidth='99%'>
							<Thead>
								<Tr borderBottom='0px solid lightgray'>
									<CustomTh>Actions</CustomTh>
									<CustomTh>Product</CustomTh>
									<CustomTh></CustomTh>
									<CustomTh>Price</CustomTh>
									<CustomTh>Availability</CustomTh>
									<CustomTh></CustomTh>
								</Tr>
							</Thead>
							<Tbody>
								{data?.data.map(item => (
									<Tr key={item.id} borderBottom='0px solid lightgray'>
										<CustomTd _hover={{ cursor: 'pointer' }}>
											<CloseIcon width='25px' height='26px' color='red' onClick={() => removeProduct(item.id)} />
										</CustomTd>
										<CustomTd>
											<Image
												width='63px'
												height='63px'
												src={item.image_url}
												alt={item.name}
												position='relative'
												top='25px'
												mx='auto'
											/>
										</CustomTd>
										<CustomTd>
											<Text>{item.name}</Text>
										</CustomTd>
										<CustomTd>
											<Text>{item.cart_price} EGP</Text>
										</CustomTd>
										<CustomTd>
											{/*<Text>{item.availability > -1 }</Text>*/}
											{item.availability > -1 ? (
												<Text color='green'>In Stock</Text>
											) : (
												<Text color='red'>Not In Stock</Text>
											)}
										</CustomTd>
										<CustomTd>
											<Button minWidth='114px' bg='black' color='white' borderRadius='0'>
												View
											</Button>
										</CustomTd>
									</Tr>
								))}
							</Tbody>
						</Table>
					</Box>
				</Box>
			)}
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
		pb: '26px',
		mt: '-16px',
		textAlign: 'center',
	},
})

export default Wishlist
