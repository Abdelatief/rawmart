import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '@Admin/Components/Table'
import { Flex, Popup, Text } from '@Components'
import { CgMore } from 'react-icons/cg'
import { MdOutlineEdit } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { useGetBlogsQuery } from '@Admin/Redux/AdminApi'
import NewsForm from '@Admin/Features/News/NewForm/NewsForm'

const NewsTable = () => {
	const { data, refetch } = useGetBlogsQuery()
	const [extendMenu, setExtendMenu] = useState(false)
	const [selectedItem, setSelectedItem] = useState()
	const [isOpen, setIsOpen] = useState(false)
	const [blog, setBlog] = useState()
	const toggleExtendMenu = item => {
		setExtendMenu(!extendMenu)
		setSelectedItem(item)
	}
	return (
		<StyledContainer>
			<Table loading={false} resultCount={5}>
				<Table.Thead>
					<Table.HeaderRow>
						<Table.Th>Title</Table.Th>
						<Table.Th>Image</Table.Th>
						<Table.Th> </Table.Th>
					</Table.HeaderRow>
				</Table.Thead>
				<tbody>
					{data?.data?.map(blog => (
						<Table.BodyRow key={blog.id}>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									{blog.title}
								</Flex>
							</Table.Td>
							<Table.Td>
								<Flex justifyContent='center' alignItems='center'>
									<StyledImage src={blog.image_url} />
								</Flex>
							</Table.Td>

							<Table.Td>
								<Flex fontSize={5}>
									<StyledDotIcon
										onClick={() => {
											toggleExtendMenu(blog.id)
										}}
									/>
								</Flex>
								<Flex>
									{extendMenu && selectedItem === blog.id && (
										<StyledDropDown>
											<StyledFlex
												onClick={() => {
													setIsOpen(true)
													setBlog(blog)
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
			<Popup isOpen={isOpen} setIsOpen={setIsOpen} minWidth='80%' height='98%' padding='30px' overflow='scroll'>
				{<NewsForm title='EDIT NEWS' news={blog} />}
			</Popup>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	display: flex;
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

const StyledFlex = styled(Flex)`
	&:hover {
		cursor: pointer;
	}
`

const StyledImage = styled.img`
	width: 70px;
	height: 50px;
`
export default NewsTable
