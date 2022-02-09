import React from 'react'
import styled from 'styled-components'
import { VscAdd } from 'react-icons/vsc'
import { Text } from '@Components'
import AdditionalHomePart from '@Admin/Features/Pages/Form/AdditionalHomePart'

const HomePart = () => {
	/*TODO:Refactor*/
	const renderer = () => {
		return <AdditionalHomePart />
	}
	return (
		<StyledOuterContainer>
			<AdditionalHomePart />
			<AddMoreButton onClick={renderer}>
				<VscAdd />
				<Text fontSize={2} ml='5px'>
					Add More
				</Text>
			</AddMoreButton>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	margin: 40px 0 0 30px;
	width: 100%;
`

const AddMoreButton = styled.button`
	display: flex;
	background: transparent;
	border: 0;
	box-shadow: none !important;
	border-bottom: 2px solid #a0a0a0;
	&:hover {
		cursor: pointer;
	}
`
export default HomePart
