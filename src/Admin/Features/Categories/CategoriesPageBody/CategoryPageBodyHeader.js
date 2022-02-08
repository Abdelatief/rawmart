import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import SelectedInput from '@Admin/Components/SelectedInput'

const CategoryPageBodyHeader = () => {
	return (
		<div>
			<StyledHeader>ALL CATEGORIES</StyledHeader>
			<StyledFlex>
				<StyledSelectedInput
					width='770px'
					options={[{ name: 'English' }, { name: 'Arabic' }]}
					label='Select Language'
				/>
				<Flex>
					<StyledInput placeholder='Search Category or Sub-Category' />
				</Flex>
			</StyledFlex>
		</div>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
})`
	margin: 40px 0 0 40px;
	font-weight: 500;
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

const StyledFlex = styled(Flex).attrs({
	marginLeft: '35px',
})`
	justify-content: space-between;
	width: 100%;
`

const StyledSelectedInput = styled(SelectedInput)`
	color: #838282;
	border: 1px solid black;
`
const StyledInput = styled.input`
	width: 750px;
	border: 1px solid black;
	padding: 0 16px;
	font-size: ${props => props.theme.fontSizes[3]}px;
	letter-spacing: 0.3px;
	&:focus {
		outline: none;
	}
`
export default CategoryPageBodyHeader
