import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import Table from '@Admin/Components/Table'
import { ProductsData } from '@Admin/Features/AdminDashboard/Components/TableSection/ProductsData'
import { HiDotsHorizontal } from 'react-icons/hi'
// import TableSection from "@Admin/Features/AdminDashboard/Components/TableSection/TableSection"

const Orders = () => {
	return (
		<StyledContainer>
			<StyledHeader>Orders</StyledHeader>
			{/*<TableSection/>*/}
			<Table loading={false} resultCount={5}>
				<Table.Body>
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
