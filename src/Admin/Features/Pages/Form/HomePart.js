import React, { useEffect } from 'react'
import styled from 'styled-components'
import DragAndDropImage from '@Admin/Components/DragAndDropImage'
import { useForm, useFieldArray } from 'react-hook-form'
import { VscAdd, VscTrash } from 'react-icons/vsc'
import { Flex, Text } from '@Components'

const HomePart = () => {
	const { register, control, handleSubmit } = useForm()
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'frameworks',
	})
	useEffect(() => {
		append({ value: '' })
		append({ value: '' })
	}, [])

	return (
		<StyledOuterContainer>
			{fields.map((field, index) => (
				<Flex key={field.id} flexDirection={['column', null, 'row']}>
					<div>
						<StyledLabel>Image</StyledLabel>
						<DragAndDropImage />
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
							<StyledInnerContainer onClick={() => remove(index)}>
								<StyledTrashIcon />
							</StyledInnerContainer>
						</FormGroupFlex>
					</StyledInnerContainer>
				</Flex>
			))}
			<AddMoreButton onClick={() => append({ value: '' })}>
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

const StyledInnerContainer = styled.div`
	width: 100%;
`

const StyledLabel = styled(Text)`
	color: #686868;
	margin-bottom: 10px;
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

export default HomePart
