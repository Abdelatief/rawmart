import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Box } from '@Components'
import { Spinner, Table as ChakraTable } from '@chakra-ui/react'

const Table = ({ children, loading, resultsCount }) => {
	const renderer = () => {
		if (loading) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)
		}
		if (resultsCount === 0 || !resultsCount) {
			return (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Text variant='title4'>No data is found</Text>
				</Flex>
			)
		}
		// TODO:: Check
		return <ChakraTable variant='unstyled'>{children}</ChakraTable>
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

const BodyRow = styled.tr`
	height: 52px;
	//margin-left: 4px;
	margin-right: 4px;
`

const CenteredTh = styled.th`
	text-align: center;
	color: darkgray;
	font-weight: 700;
	font-size: 1rem;
	line-height: 1.5rem;
`

const CenteredTd = styled.td`
	text-align: center;
	line-height: 1.5rem;
	letter-spacing: 0.04rem;
`

const TableHeader = styled.thead`
	border-bottom: 1px solid #d8dde4;
`

const HeaderRow = styled.tr`
	height: 60px;
`

Table.Thead = TableHeader
Table.HeaderRow = HeaderRow
Table.Th = CenteredTh
Table.BodyRow = BodyRow
Table.Td = CenteredTd

export default Table
