import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import Table from '@Admin/Components/Table'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useGetOrdersQuery } from '@Admin/Redux/AdminApi'

const Orders = () => {
	const { data, refetch } = useGetOrdersQuery()

	return (
		<StyledContainer>
			<StyledHeader>Orders</StyledHeader>
			<Table loading={false} resultCount={5}>
				<Table.Thead>
					<Table.HeaderRow>
						<Table.Th>ID</Table.Th>
						<Table.Th>Product</Table.Th>
						<Table.Th>Attributes</Table.Th>
						<Table.Th>Photo</Table.Th>
						<Table.Th>Buyer</Table.Th>
						<Table.Th>Price</Table.Th>
						<Table.Th>Date</Table.Th>
						<Table.Th>Address</Table.Th>
						<Table.Th>Status</Table.Th>
						<Table.Th> </Table.Th>
					</Table.HeaderRow>
				</Table.Thead>
				<tbody>
					{data?.data?.map(product => (
						<Table.BodyRow key={product.id}>
							<Table.Td>#{product.id}</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.name}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.attributes}
								</Flex>
							</Table.Td>
							<Table.Td>
								<StyledImg src={product.image} />
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.buyer}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.price}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.date}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									<Text>
										{product.status_id} {product.city} {product.state} {product.country} {product.postal_code}
									</Text>
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.status === 'Progress' && <Text color='blue'>{product.status}</Text>}
									{product.status === 'Shipped' && <Text color='yellow'>{product.status}</Text>}
									{product.status === 'Delivered' && <Text color='green'>{product.status}</Text>}
									{product.status === 'Cancelled' && <Text color='red'>{product.status}</Text>}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center' fontSize={5} pl='50px' pr='50px'>
									<HiDotsHorizontal />
								</Flex>
							</Table.Td>
						</Table.BodyRow>
					))}
				</tbody>
			</Table>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	min-height: 100vh;
	margin-left: 25px;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	position: relative;
	@media (max-width: 750px) {
		background: #e0ecde;
		padding: 10px;
		text-align: center;
		margin-bottom: 20px;
	}
`

const StyledImg = styled.img`
	width: 75px;
	height: 75px;
`

export default Orders
