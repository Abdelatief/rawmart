import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Flex, Text } from '@Components'
import addImage from '../Assets/add-image.png'
const DragAndDropImage = () => {
	const { getRootProps, getInputProps } = useDropzone()

	return (
		<StyledFlex {...getRootProps({ refKey: 'innerRef' })}>
			<input {...getInputProps()} />
			<StyledInnerDiv>
				<StyledImage src={addImage} alt='Add Image' />
				<StyledText color='gray'>Drag files here or</StyledText>
				<StyledText fontSize={1} ml='15px'>
					Click to upload
				</StyledText>
			</StyledInnerDiv>
		</StyledFlex>
	)
}
const StyledFlex = styled(Flex)`
	margin-right: 20px;
	min-width: 190px;
	min-height: 190px;
	border: 1px dashed black;
	cursor: pointer;
`
const StyledText = styled(Text)`
	color: ${prop => prop.color};
	margin-bottom: 7px;
`

const StyledInnerDiv = styled.div`
	margin-top: 50px;
	margin-left: 30px;
`
const StyledImage = styled.img`
	max-width: 100%;
	height: auto;
	width: 68px;
	margin-left: 30px;
`
export default DragAndDropImage
