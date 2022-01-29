import styled from 'styled-components'
import { Box, Text } from '@Components'

const CategoryItem = () => {
	return (
		<Box>
			<CategoryImage src='http://api.dussurapp.com/uploads/categories/3/1638652463.jpg' />
			<Text textAlign='center'>Plumbing</Text>
		</Box>
	)
}

const CategoryImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: contain;
`

export default CategoryItem
