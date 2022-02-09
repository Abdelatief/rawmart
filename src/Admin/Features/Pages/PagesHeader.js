import React from 'react'
import styled from 'styled-components'
import { Text } from '@Components'

const PagesHeader = ({ HeaderLabel }) => {
	return (
		<div>
			<StyledMainHeader>Pages</StyledMainHeader>
			<StyledHeader>{HeaderLabel}</StyledHeader>
		</div>
	)
}
const StyledMainHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	color: #212529;
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		margin-top: 40px;
		padding: 10px;
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		min-height: 50px;
	}
`
const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
	mb: '10px',
	fontWeight: 500,
})`
	color: #212529;
`

export default PagesHeader
