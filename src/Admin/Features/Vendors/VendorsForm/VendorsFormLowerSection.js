import React from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'
import { MdDone } from 'react-icons/md'

const VendorsFormLowerSection = () => {
	return (
		<div>
			<StyledHeader>META SECTION</StyledHeader>
			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<FormInput label='Meta Title' required sizeLarge={true} />
			</FormGroupFlex>

			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<div>
					<FormLabel>
						Meta Description<StyledAsterisk> *</StyledAsterisk>
					</FormLabel>
					<TextArea />
				</div>
			</FormGroupFlex>
			<FormGroupFlex flexDirection={['column', null, 'row']}>
				<FormInput label='Meta Slug' required />
			</FormGroupFlex>
			<StyledButtonDiv>
				<Button width={['100%', null, '290px']} fontSize={3}>
					<StyledIcon />
					Save Vendor
				</Button>
			</StyledButtonDiv>
		</div>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '20px',
})`
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

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	width: ${props => (props.sizeLarge ? 'calc(10% - 220px)' : '100%')};

	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

const FormLabel = styled.p`
	color: #686868;
	margin-bottom: 8px;
`

const StyledAsterisk = styled.span`
	color: red;
`

const TextArea = styled.textarea`
	height: 150px;
	width: 57.5vw;
	border: 1px solid gainsboro;
`
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`
export default VendorsFormLowerSection
