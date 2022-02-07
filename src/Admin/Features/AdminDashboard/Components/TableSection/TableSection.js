import React from 'react'
import Table from '@Admin/Components/Table'
import { ProductsData } from '@Admin/Features/AdminDashboard/Components/TableSection/ProductsData'
import { Button, Flex, Text } from '@Components'
import styled from 'styled-components'
import { HiDotsHorizontal } from 'react-icons/hi'

const TableSection = () => {
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledHeader>Recent Sales</StyledHeader>
				<Button variant='tertiary' minWidth={null} width='197px'>
					View All Orders
				</Button>
			</StyledHeaderDiv>
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
					<div>
						{ProductsData.map(product => (
							<Table.BodyRow key={product.id}>
								{/*TODO:: Check*/}
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
					</div>
				</Table.Body>
			</Table>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	margin-top: 50px;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		padding: 10px;
		text-align: center;
		margin-bottom: 20px;
	}
`
const StyledHeaderDiv = styled(Flex).attrs()`
	min-height: 53px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`
const StyledImg = styled.img`
	width: 75px;
	height: 75px;
`

export default TableSection
