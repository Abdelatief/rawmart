import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '@Admin/Components/Table'
import { Flex, Text, Popup } from '@Components'
import { CgMore } from 'react-icons/cg'
import { MdOutlineEdit } from 'react-icons/md'
import { BsChatLeftText } from 'react-icons/bs'
import { useGetProductsQuery } from '@Admin/Redux/AdminApi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ProductsTable = () => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()
	const [product, setProduct] = useState()
	const [isOpen, setIsOpen] = useState(false)
	const { data } = useGetProductsQuery()

	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}

	return (
		<StyledContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>{data?.data?.length} Products</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Flex>
						<Text>Show </Text>
						<StyledSelectedInput>
							<option value='10' selected>
								10
							</option>
							<option value='25'>25</option>
							<option value='50'>50</option>
							<option value='100'>100</option>
						</StyledSelectedInput>
						<Text> Products</Text>
					</Flex>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<Table loading={false} resultCount={5}>
				<Table.Thead>
					<Table.HeaderRow>
						<Table.Th>ID</Table.Th>
						<Table.Th>Product</Table.Th>
						<Table.Th>Photo</Table.Th>
						<Table.Th>Category</Table.Th>
						<Table.Th>Price</Table.Th>
						<Table.Th>Vendor(Brand)</Table.Th>
						<Table.Th>Availability</Table.Th>
						<Table.Th> </Table.Th>
					</Table.HeaderRow>
				</Table.Thead>
				<tbody>
					{data?.data?.map(product => (
						<Table.BodyRow key={product.id}>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.id}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.name}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									<StyledImg src={product.image_url} />
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.category}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.price}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.vendor}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{product.availability ? <Text color='yellow'>In Stock</Text> : <Text color='red'>Out of Stock</Text>}
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
											<StyledLink to='../reviews'>
												<StyledFlex pt='10px'>
													<StyledReviewIcon />
													<Text fontSize={2} mb='2px'>
														Review
													</Text>
												</StyledFlex>
											</StyledLink>
											<StyledFlex
												onClick={() => {
													setProduct(product)
													setIsOpen(true)
												}}
											>
												<StyledEditIcon />
												<Text fontSize={2} mb='2px'>
													Edit
												</Text>
											</StyledFlex>

											<StyledFlex>
												<StyledDeleteIcon />
												<Text fontSize={2}>Delete</Text>
											</StyledFlex>
										</StyledDropDown>
									)}
								</Flex>
							</Table.Td>
						</Table.BodyRow>
					))}
				</tbody>
			</Table>
			<Popup isOpen={isOpen} setIsOpen={setIsOpen} height='80%' width='70%' padding='30px'>
				{<div />}
			</Popup>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	width: 100%;
	justify-content: center;
`
const StyledDotIcon = styled(CgMore)`
	font-size: 24px;

	&:hover {
		cursor: pointer;
	}
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

const StyledEditIcon = styled(MdOutlineEdit)`
	background: #5284e7;
	color: white;
	border-radius: 10px;
	font-size: 18px;
	margin-right: 5px;
`
const StyledDeleteIcon = styled(AiOutlineDelete)`
	background-color: #f78770;
	color: white;
	border-radius: 10px;
	font-size: 18px;
	margin-right: 5px;
`
const StyledReviewIcon = styled(BsChatLeftText)`
	background: #5284e7;
	color: white;
	border-radius: 10px;
	font-size: 18px;
	margin-right: 5px;
	padding: 2px;
`

const StyledFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`

const StyledImg = styled.img`
	width: 75px;
	height: 75px;
`
const StyledHeaderDiv = styled.div`
	margin-bottom: 20px;
	display: flex;

	margin-top: 20px;
`

const StyledLeftContainer = styled.div`
	flex: 80%;
	justify-content: flex-start;
`

const StyledRightContainer = styled.div`
	flex: 5%;
	justify-content: flex-end;
`

const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
})`
	min-height: 50px;
`

const StyledSelectedInput = styled.select`
	position: relative;
	width: 80px;
	margin: 0 5px 0 5px;
	bottom: 5px;
`

const StyledLink = styled(Link)`
	text-decoration-line: none;
	color: black;
`
export default ProductsTable
