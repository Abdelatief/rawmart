import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import { VscTrash } from 'react-icons/vsc'

const AdditionalHomePart = () => {
	return (
		<StyledOuterContainer flexDirection={['column', null, 'row']}>
			<div>
				<StyledLabel>Image</StyledLabel>
				<StyledFlex>ADD Image</StyledFlex>
			</div>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledInnerContainer>
						<StyledLabel>Title</StyledLabel>
						<StyledFormInput />
					</StyledInnerContainer>
					<StyledInnerContainer>
						<StyledLabel>Description</StyledLabel>
						<StyledFormInput />
					</StyledInnerContainer>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<StyledInnerContainer>
						<StyledLabel>Link</StyledLabel>
						<StyledFormInput />
					</StyledInnerContainer>
					<StyledInnerContainer>
						<StyledTrashIcon />
					</StyledInnerContainer>
				</FormGroupFlex>
			</StyledInnerContainer>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled(Flex)`
	width: 100%;
`
const StyledInnerContainer = styled.div`
	width: 100%;
`

const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
`

const StyledFlex = styled(Flex)`
	margin-right: 20px;
	min-width: 183px;
	min-height: 183px;
	background-color: #d9d8d8;
	border: 1px dashed black;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	width: ${props => (props.sizeLarge ? 'calc(10% - 220px)' : '100%')};

	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

const StyledFormInput = styled.input`
	border: 1px solid black;
	width: calc(100% - 20px);
	height: 55px;
	padding: 10px;
	cursor: pointer;
	&:hover {
		border: 1px solid #ced4da;
	}
`

const StyledTrashIcon = styled(VscTrash)`
	margin-top: 29px;
	background: red;
	color: #fff;
	padding: 15px;
	font-size: 18px;
	border-radius: 5px;
	width: 50px;
	height: 53px;
	cursor: pointer;
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

const StyledShowMore = styled.div`
	width: 100%;
`
export default AdditionalHomePart
