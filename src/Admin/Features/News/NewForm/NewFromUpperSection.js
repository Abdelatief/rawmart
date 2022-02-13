import React from 'react'
import styled from 'styled-components'
import DragAndDropImage from '@Admin/Components/DragAndDropImage'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { Flex, FormInput, Text } from '@Components'

const NewFromUpperSection = ({ news }) => {
	return (
		<FormGroupFlex flexDirection={['column', null, 'row']}>
			<div>
				<StyledLabel>Image</StyledLabel>
				<DragAndDropImage value={news ? news.image_url : ''} />
			</div>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormSelectedInput label='Language' options={[{ name: 'English' }, { name: 'Arabic' }]} />
					<FormSelectedInput label='Category' required options={[{ name: 'Electrical' }, { name: 'Lighting' }]} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Title' required defaultValue={news ? news.title : ''} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormLabel>
							Description<StyledAsterisk> *</StyledAsterisk>
						</FormLabel>
						<TextArea defaultValue={news ? news.description : ''} />
					</div>
				</FormGroupFlex>
			</StyledInnerContainer>
		</FormGroupFlex>
	)
}
const StyledInnerContainer = styled.div`
	width: 100%;
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
const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
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
	padding: 10px;
`

export default NewFromUpperSection
