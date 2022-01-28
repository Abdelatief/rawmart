import { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import ArrowBackImage from './Assets/left-ar-new.png'
import ArrowForwardImage from './Assets/right-ar-new.png'
import CarouselItem from '@Customer/Features/LandingPage/Components/Carousel/CarouselItem'

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

const testArr = []
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585180.png' />)
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585181.png' />)

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity
}

const Carousel = () => {
	const [[page, direction], setPage] = useState([0, 0])
	const itemIndex = wrap(0, testArr.length, page)

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<CarouselContainer>
			<AnimatePresence initial={false} custom={direction}>
				{testArr[itemIndex] && (
					<motion.div
						id='item'
						key={page}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 500, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x)
							if (swipe < -swipeConfidenceThreshold) {
								paginate(1)
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1)
							}
						}}
					>
						{testArr[itemIndex]}
					</motion.div>
				)}
			</AnimatePresence>
			<PreviousButton src={ArrowBackImage} onClick={() => paginate(-1)} />
			<NextButton src={ArrowForwardImage} onClick={() => paginate(1)} />
		</CarouselContainer>
	)
}

const CarouselContainer = styled.div`
	height: 30rem;
	margin: 0 auto;
	position: relative;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #e7e7e9;
`

const NextPreviousCss = css`
	position: absolute;
	background-color: transparent;
	top: calc(50%, -20px);
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	cursor: pointer;
	z-index: 2;
`

const PreviousButton = styled.img`
	${NextPreviousCss};
	left: 100px;
`

const NextButton = styled.img`
	${NextPreviousCss};
	right: 100px;
`

export default Carousel
