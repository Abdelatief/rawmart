import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@Components'
import { Spinner, Table as ChakraTable, Tbody } from '@chakra-ui/react'

const Table = ({ children, loading, resultsCount }) => {
	const renderer = () => {
		if (loading) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)
		}
		if (resultsCount === 0) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Text variant='title4'>No data is found</Text>
				</Flex>
			)
		}

		/*TODO:: Check*/

		return (
			<ChakraTable variant='unstyled'>
				<StyledTable>{children}</StyledTable>
			</ChakraTable>
		)
	}
	return (
		<>
			<Box bg='white' minHeight='662px' border='1px solid #D8DDE4' borderRadius='16px'>
				{renderer()}
			</Box>
		</>
	)
}

Table.defaultProps = {
	loading: false,
}
const StyledTable = styled.table`
	width: 80vw;
`
const BodyRow = styled.tr`
	height: 150px;
	margin-left: 4px;
	margin-right: 4px;
`

const CenteredTh = styled.th`
	vertical-align: bottom;
	padding: 24px 15px;
	background: #d9e2eb;
	font-weight: 400;
`

const CenteredTd = styled.td`
	padding-top: 50px;
	text-align: center;
	line-height: 1.5rem;
	letter-spacing: 0.04rem;
	border-bottom: 2px solid #dee2e6;
	color: #616b7e;
	font-size: 14px;
`

const TableHeader = styled.thead`
	border-bottom: 1px solid #d8dde4;
`

const HeaderRow = styled.tr`
	height: 60px;
`
const Body = styled.div`
	display: table;
	border-spacing: 2px;
	border-color: grey;
	width: 100%;
`

Table.Thead = TableHeader
Table.HeaderRow = HeaderRow
Table.Th = CenteredTh
Table.BodyRow = BodyRow
Table.Td = CenteredTd
Table.Body = Body
Table.TBody = Tbody
export default Table
