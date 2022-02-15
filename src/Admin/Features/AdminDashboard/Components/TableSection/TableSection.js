import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '@Admin/Components/Table'
import moment from 'moment'
import { Flex, Text } from '@Components'
import { HiOutlineEye } from 'react-icons/hi'
import { useGetOrdersQuery } from '@Admin/Redux/AdminApi'
import { CgMore } from 'react-icons/cg'

const TableSection = () => {
	const { data } = useGetOrdersQuery()
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()
	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}
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
								<Flex fontSize={5}>
									<StyledDotIcon
										onClick={() => {
											toggleExtendMenu(product.id)
										}}
									/>
								</Flex>
								<Flex>
									{extendMenu && selectedItem === product.id && (
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
	display: flex;
	margin-bottom: 30px;
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

export default TableSection
