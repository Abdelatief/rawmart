import React from 'react'
import Table from '@Admin/Components/Table'
import styled from 'styled-components'
import { Text, Flex } from '@Components'
import { useGetSpecialOrdersQuery } from '@Admin/Redux/AdminApi'

const SpecialOrders = () => {
	const { data, refetch } = useGetSpecialOrdersQuery()

	return (
		<StyledContainer>
			<StyledHeader>Special Orders</StyledHeader>
			<Table loading={false} resultCount={5}>
				<Table.Thead>
					<Table.HeaderRow>
						<Table.Th>Date</Table.Th>
						<Table.Th>Name</Table.Th>
						<Table.Th>Email</Table.Th>
						<Table.Th>Phone</Table.Th>
						<Table.Th>Category</Table.Th>
						<Table.Th>Brand</Table.Th>
					</Table.HeaderRow>
				</Table.Thead>
				<tbody>
					{data?.data?.map(specialOrder => (
						<Table.BodyRow key={specialOrder.id}>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.date}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.name}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.email}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.phone}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.category}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{specialOrder.brand}
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
	margin: 25px;
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

export default SpecialOrders
