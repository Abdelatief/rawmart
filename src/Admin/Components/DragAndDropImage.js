import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import addImage from '../Assets/add-image.png'
import { Flex, Text } from '@Components'

const DragAndDropImage = ({ value, onChange }) => {
	const [loading, setLoading] = useState(false)
	const [remove, setRemove] = useState(false)

	// const onDrop = useCallback((acceptedFiles) =>{
	//     console.log(acceptedFiles)
	//     setLoading(true)
	//
	// })
	const { getRootProps, getInputProps } = useDropzone({
		// onDrop,
		multiple: false,
		accept: 'image/*',
	})

	return (
		<StyledFlex {...getRootProps({ refKey: 'innerRef' })}>
			{value ? (
				<div>
					<StyledImage src={value} />
					<StyledButton onClick={() => setRemove(true)}>Remove</StyledButton>
				</div>
			) : (
				<div>
					<input {...getInputProps()} />
					<StyledInnerDiv>
						<StyledImage src={addImage} alt='Add Image' sizeLarge={true} />
						<StyledText color='gray'>Drag files here or</StyledText>
						<StyledText fontSize={1} ml='15px'>
							Click to upload
						</StyledText>
					</StyledInnerDiv>
				</div>
			)}
		</StyledFlex>
	)
}
const StyledFlex = styled(Flex)`
	margin-right: 20px;
	width: 198px;
	height: 192px;
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
	width: ${props => (props.sizeLarge ? '50px' : '195px')};
	height: ${props => (props.sizeLarge ? '50px' : '190px')};
	margin-left: ${props => (props.sizeLarge ? '45px' : '0')}; ;
`
const StyledButton = styled.button`
	position: relative;
	bottom: 96px;
	background-color: black;
	color: white;
	width: 100px;
	height: 30px;
	margin-left: 50px;
	cursor: pointer;
`
export default DragAndDropImage
