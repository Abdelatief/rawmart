import styled from 'styled-components'
import { Button, Flex } from '@Components'

const CarouselItem = ({ title, description, image }) => {
	return (
		<Flex width='110px' height='400px' justifyContent='center'>
			<Flex flexDirection='column' justifyContent='center' minWidth='505px'>
				<Title>{title}</Title>
				<Subtitle>{description}</Subtitle>
				<Button>Buy Now</Button>
			</Flex>
			<Image src={image} alt='carousel item' />
		</Flex>
	)
}

const Title = styled.h3`
	font-size: 40px;
	font-family: Jost, sans-serif;
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 44px;
`

const Subtitle = styled.p`
	line-height: 1.875;
	margin-bottom: 44px;
`

const Image = styled.img`
	max-width: 505px;
`

export default CarouselItem
