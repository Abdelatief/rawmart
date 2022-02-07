import React, { useState } from 'react'
import Table from '@Admin/Components/Table'
import { VendorData } from '@Admin/Features/Vendors/VendorData'
import { Flex, Text } from '@Components'
import { HiOutlineEye } from 'react-icons/hi'
import styled from 'styled-components'
import { CgMore } from 'react-icons/cg'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'

const VendorTableSection = () => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()

	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}

	return (
		<StyledContainer>
			<Table loading={false} resultCount={5}>
				<Table.Body>
					<Table.Thead>
						<Table.HeaderRow>
							<Table.Th>Address</Table.Th>
							<Table.Th>Phone</Table.Th>
							<Table.Th>Title</Table.Th>
							<Table.Th> </Table.Th>
						</Table.HeaderRow>
					</Table.Thead>
					<Table.TBody>
						{VendorData.map(vendor => (
							<Table.BodyRow key={vendor.id}>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center'>
										{vendor.address}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center'>
										{vendor.phone}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex justifyContent='center' alignItems='center'>
										{vendor.title}
									</Flex>
								</Table.Td>
								<Table.Td>
									<Flex fontSize={5}>
										<StyledDotIcon
											onClick={() => {
												toggleExtendMenu(vendor.id)
											}}
										/>
									</Flex>
									<Flex>
										{extendMenu && selectedItem === vendor.id && (
											<StyledDropDown>
												<StyledFlex>
													<StyledViewIcon />
													<Text fontSize={2} mb='2px' cursor='pointer'>
														View
													</Text>
												</StyledFlex>
												<StyledFlex>
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
					</Table.TBody>
				</Table.Body>
			</Table>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-left: -20px;
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

const StyledViewIcon = styled(HiOutlineEye)`
	background-color: green;
	color: white;
	border-radius: 10px;
	font-size: 18px;
	margin-right: 5px;
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

const StyledFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`
export default VendorTableSection
