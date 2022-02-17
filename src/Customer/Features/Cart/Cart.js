import { FluidContainer } from '@Components'
import { CloseIcon } from '@chakra-ui/icons'
import { Text, Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'

const Cart = () => {
	return (
		<FluidContainer>
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
					<Tr>
						<CustomTd>
							<CloseIcon width='26px' height='26px' color='red' />
						</CustomTd>
						<CustomTd>
							<Text>Adam</Text>
						</CustomTd>
					</Tr>
				</Tbody>
			</Table>
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
