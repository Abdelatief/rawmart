import styled from 'styled-components'
import { Flex } from '@Components'
import { motion } from 'framer-motion'
import { AnimationContext } from './Carousel'

const variants = {
	enter: direction => {
		return {
			x: direction > 0 ? 400 : -400,
			opacity: 0,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: direction => {
		return {
			zIndex: 0,
			x: direction < 0 ? 400 : -400,
			opacity: 0,
		}
	},
}

const transition = {
	x: { type: 'spring', stiffness: 100, damping: 10 },
	opacity: { duration: 0.2 },
}

const CarouselItem = ({ imageSrc }) => {
	return (
		<AnimationContext.Consumer>
			{({ page, direction }) => {
				return (
					<motion.div
						key={page}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={transition}
					>
						<Flex width='110px' height='400px' justifyContent='center'>
							<Flex flexDirection='column' justifyContent='center' minWidth='505px'>
								<Title>We are very proud to present you our furniture</Title>
								<Subtitle>
									Egestas maecenas pharetra convallis posuere morbi leo. Convallis a cras semper auctor neque vitae
									tempus. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.
								</Subtitle>
								<Button>Buy Now</Button>
							</Flex>
							<Image src={imageSrc} alt='carousel item' />
						</Flex>
					</motion.div>
				)
			}}
		</AnimationContext.Consumer>
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
