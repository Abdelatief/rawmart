import { useState, createContext } from 'react'
import styled, { css } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import ArrowBackImage from './Assets/left-ar-new.png'
import ArrowForwardImage from './Assets/right-ar-new.png'
import CarouselItem from '@Customer/Features/LandingPage/Components/Carousel/CarouselItem'

const testArr = []
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585180.png' />)
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585181.png' />)

export const AnimationContext = createContext({})

const Carousel = () => {
	const [[page, direction], setPage] = useState([0, 0])
	const itemIndex = wrap(0, testArr.length, page)

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<CarouselContainer>
			<AnimationContext.Provider value={{ page, direction }}>
				<AnimatePresence initial={false} custom={direction}>
					{testArr[itemIndex]}
				</AnimatePresence>
				<PreviousButton src={ArrowBackImage} onClick={() => paginate(-1)} />
				<NextButton src={ArrowForwardImage} onClick={() => paginate(1)} />
			</AnimationContext.Provider>
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
