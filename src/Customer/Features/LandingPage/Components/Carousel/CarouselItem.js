import styled from 'styled-components'
import { Flex } from '@Components'

const CarouselItem = ({ imageSrc }) => {
	return (
		<Flex width='110px' height='400px' justifyContent='center'>
			<Flex flexDirection='column' justifyContent='center' minWidth='505px'>
				<Title>We are very proud to present you our furniture</Title>
				<Subtitle>
					Egestas maecenas pharetra convallis posuere morbi leo. Convallis a cras semper auctor neque vitae tempus. Quis
					enim lobortis scelerisque fermentum dui faucibus in ornare.
				</Subtitle>
				<Button>Buy Now</Button>
			</Flex>
			<Image src={imageSrc} alt='carousel item' />
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

const Button = styled.button`
	border: none;
	width: 180px;
	height: 55px;
	background-color: black;
	color: white;
`

const Image = styled.img`
	max-width: 505px;
`

export default CarouselItem
