import React from 'react'
import Table from '@Admin/Components/Table'
import { ProductsData } from '@Admin/Features/AdminDashboard/Components/TableSection/ProductsData'
import { Flex } from '@Components'
import styled from 'styled-components'
import { HiDotsHorizontal } from 'react-icons/hi'

const TableSection = () => {
	return (
		<StyledContainer>
			<Table loading={false} resultCount={5}>
				<Table.Body>
					<Table.Thead>
						<Table.HeaderRow>
							<Table.Th>ID</Table.Th>
							<Table.Th>Product</Table.Th>
							<Table.Th>Attributes</Table.Th>
							{/*<Table.SortingHeader header='Amount' sortingField='amount' sortBy={sortBy} setSortBy={setSortBy} />*/}
							<Table.Th>Photo</Table.Th>
							<Table.Th>Buyer</Table.Th>
							<Table.Th>Price</Table.Th>
							<Table.Th>Date</Table.Th>
							<Table.Th>Address</Table.Th>
							<Table.Th>Status</Table.Th>
							<Table.Th> </Table.Th>
						</Table.HeaderRow>
					</Table.Thead>
					<Table.TBody>
						{ProductsData.map(product => (
							<Table.BodyRow key={product.id}>
								<Table.Td>#{product.id}</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center'>
										{product.product}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center'>
										{product.attributes}
									</Flex>
								</Table.Td>
								<Table.Td>
									<StyledImg src={product.img} alt={product.alt} />
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
										{product.address}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center' color='#ecc756'>
										{product.status}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center' fontSize={5} pl='50px' pr='50px'>
										<HiDotsHorizontal />
									</Flex>
								</Table.Td>
							</Table.BodyRow>
						))}
					</Table.TBody>
				</Table.Body>
			</Table>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	display: flex;
`
const StyledImg = styled.img`
	width: 75px;
	height: 75px;
`

export default TableSection
