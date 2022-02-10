import React from 'react'
import { Flex, FormInput, Text } from '@Components'
import styled from 'styled-components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import DragAndDropImage from '@Admin/Components/DragAndDropImage'

const CategoryFormUpperSection = () => {
	return (
		<FormGroupFlex flexDirection={['column', null, 'row']}>
			<div>
				<StyledLabel>Image</StyledLabel>
				<DragAndDropImage />
			</div>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormSelectedInput label='Language' options={[{ name: 'English' }, { name: 'Arabic' }]} />
					<FormSelectedInput
						label='Parent Category'
						options={[{ name: 'Electric sub' }, { name: 'Electrical' }, { name: 'Painting' }]}
					/>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Category Name' required />
				</FormGroupFlex>
			</StyledInnerContainer>
		</FormGroupFlex>
	)
}
const StyledInnerContainer = styled.div`
	width: 100%;
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
const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
`

export default CategoryFormUpperSection
