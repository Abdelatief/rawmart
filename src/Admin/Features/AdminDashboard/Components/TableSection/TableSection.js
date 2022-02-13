import React from 'react'
import Table from '@Admin/Components/Table'
import { Flex, Text } from '@Components'
import styled from 'styled-components'
import { HiDotsHorizontal } from 'react-icons/hi'
import { useGetOrdersQuery } from '@Admin/Redux/AdminApi'
import moment from 'moment'

const TableSection = () => {
	const { data } = useGetOrdersQuery()
	return (
		<StyledContainer>
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
					{data?.data?.slice(0, 5).map(product => (
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
								<StyledImg src={product.image} alt={product.alt} />
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
									{moment(product.date).format('ll')}
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
								<Flex justifyContent='center' alignItems='center' color='#ecc756'>
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
	display: flex;
	margin-bottom: 30px;
`
const StyledImg = styled.img`
	width: 75px;
	height: 75px;
`

export default TableSection
