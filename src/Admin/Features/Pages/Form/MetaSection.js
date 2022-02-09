import React from 'react'
import { Button, Flex, Text } from '@Components'
import styled from 'styled-components'
import { MdDone } from 'react-icons/md'

const MetaSection = () => {
	return (
		<StyledDiv>
			<StyledHeader>META SECTION</StyledHeader>
			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<StyledLabel>
					Meta Title<StyledAsterisk> *</StyledAsterisk>
				</StyledLabel>
				<StyledFormInput />
			</FormGroupFlex>

			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<div>
					<StyledLabel>
						Meta Description<StyledAsterisk> *</StyledAsterisk>
					</StyledLabel>
					<TextArea />
				</div>
			</FormGroupFlex>
			<StyledButtonDiv>
				<Button width={['100%', null, '290px']} fontSize={3}>
					<StyledIcon />
					Save Page
				</Button>
			</StyledButtonDiv>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 40px 0 0 30px;
	width: 100%;
`

const StyledHeader = styled(Text).attrs({
	fontSize: '18px',
})`
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 20px;
	color: #212529;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	display: block;
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
const StyledLabel = styled(Text)`
	color: #838282;
	margin-bottom: 20px;
`
const StyledAsterisk = styled.span`
	color: red;
`

const TextArea = styled.textarea`
	height: 450px;
	border: 1px solid black;
	padding: 10px;
	width: calc(100% - 20px);
	cursor: pointer;
	&:hover {
		border: 1px solid #ced4da;
	}
`

const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
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
export default MetaSection
