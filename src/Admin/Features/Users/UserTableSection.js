import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '@Admin/Components/Table'
import UserForm from '@Admin/Features/Users/UserForm'
import { Flex, Popup, Text } from '@Components'
import { CgMore } from 'react-icons/cg'
import { MdOutlineEdit } from 'react-icons/md'
import { useGetUsersQuery } from '@Admin/Redux/AdminApi'

const UserTableSection = () => {
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()
	const [userValue, setUserValue] = useState()
	const [isOpen, setIsOpen] = useState(false)
	const { data } = useGetUsersQuery()

	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}

	return (
		<StyledContainer>
			<Table loading={false} resultCount={data?.data.length}>
				<Table.Thead>
					<Table.HeaderRow>
						<Table.Th>ID</Table.Th>
						<Table.Th>Name</Table.Th>
						<Table.Th>Role</Table.Th>
						<Table.Th>Email</Table.Th>
						<Table.Th>Phone Number</Table.Th>
						<Table.Th>Address</Table.Th>
						<Table.Th> </Table.Th>
					</Table.HeaderRow>
				</Table.Thead>
				<tbody>
					{data?.data?.map(user => (
						<Table.BodyRow key={user.id}>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.id}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.name}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.role}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.email}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.phone}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{user.address}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex fontSize={5}>
									<StyledDotIcon
										onClick={() => {
											toggleExtendMenu(user.id)
										}}
									/>
								</Flex>
								<Flex>
									{extendMenu && selectedItem === user.id && (
										<StyledDropDown>
											<StyledFlex
												pt='10px'
												onClick={() => {
													setIsOpen(true)
													setUserValue(user)
												}}
											>
												<StyledEditIcon />
												<Text fontSize={2} mb='2px'>
													Edit
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

			{isOpen && userValue && <UserForm title='EDIT USER' user={userValue} isOpen={isOpen} setIsOpen={setIsOpen} />}
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

const StyledEditIcon = styled(MdOutlineEdit)`
	background: #5284e7;
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

export default UserTableSection
