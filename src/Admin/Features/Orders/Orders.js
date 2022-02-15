import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import Table from '@Admin/Components/Table'
import { HiOutlineEye } from 'react-icons/hi'
import { useGetOrdersQuery } from '@Admin/Redux/AdminApi'
import { CgMore } from 'react-icons/cg'

const Orders = () => {
	const { data, refetch } = useGetOrdersQuery()
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()
	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}
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
					{data?.data?.map(order => (
						<Table.BodyRow key={order.id}>
							<Table.Td>#{order.id}</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.name}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.attributes}
								</Flex>
							</Table.Td>
							<Table.Td>
								<StyledImg src={order.image} />
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.buyer}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.price}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.date}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									<Text>
										{order.status_id} {order.city} {order.state} {order.country} {order.postal_code}
									</Text>
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{order.status === 'Progress' && <Text color='blue'>{order.status}</Text>}
									{order.status === 'Shipped' && <Text color='yellow'>{order.status}</Text>}
									{order.status === 'Delivered' && <Text color='green'>{order.status}</Text>}
									{order.status === 'Cancelled' && <Text color='red'>{order.status}</Text>}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex fontSize={5}>
									<StyledDotIcon
										onClick={() => {
											toggleExtendMenu(order.id)
										}}
									/>
								</Flex>
								<Flex>
									{extendMenu && selectedItem === order.id && (
										<StyledDropDown>
											<StyledFlex>
												<StyledViewIcon />
												<Text fontSize={2} mb='2px' cursor='pointer'>
													View
												</Text>
											</StyledFlex>
										</StyledDropDown>
									)}
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
const StyledDropDown = styled.div`
	position: absolute;
	background: #d9e2eb;
	box-shadow: 1px 1px 7px -6px #fff;
	padding: 1px 5px 1px;
	color: #000;
	border-radius: 7px;
	margin-top: -5px;
	min-width: 100px;
`

const StyledViewIcon = styled(HiOutlineEye)`
	background-color: green;
	color: white;
	border-radius: 10px;
	font-size: 18px;
	margin-right: 5px;
`

const StyledDotIcon = styled(CgMore)`
	font-size: 24px;

	&:hover {
		cursor: pointer;
	}
`

const StyledFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`

export default Orders
