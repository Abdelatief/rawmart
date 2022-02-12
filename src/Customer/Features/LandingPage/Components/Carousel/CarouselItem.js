import styled from 'styled-components'
import { Button, Flex } from '@Components'

const CarouselItem = ({ title, description, image }) => {
	return (
		<StyledFlexContainer>
			<Flex flexDirection='column' height='auto' justifyContent='center' minWidth={['100%', null, null, '505px']}>
				<Title>{title}</Title>
				<Subtitle>{description}</Subtitle>
				<Button>Buy Now</Button>
			</Flex>
			<Image src={image} alt='carousel item' />
		</StyledFlexContainer>
	)
}

const StyledFlexContainer = styled.div`
	display: flex;
	width: 110px;
	height: 400px;
	justify-content: center;

	@media (max-width: 1250px) {
		flex-direction: column;
		align-items: center;
		height: auto;
	}
`

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

	@media (max-width: 1250px) {
		order: -1;
	}
`

export default CarouselItem
