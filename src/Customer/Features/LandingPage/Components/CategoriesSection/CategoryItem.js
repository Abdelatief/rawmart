import styled from 'styled-components'
import { Box, Text } from '@Components'

const CategoryItem = ({ name, imageUrl }) => {
	return (
		<Box>
			<CategoryImage src={imageUrl} alt={name} />
			<Text textAlign='center'>{name}</Text>
		</Box>
	)
}

const CategoryImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: contain;
`

export default CategoryItem
