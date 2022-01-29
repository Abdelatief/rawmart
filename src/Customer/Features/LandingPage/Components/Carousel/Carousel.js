import React from 'react'
import styled from 'styled-components'
import CarouselItem from '@Customer/Features/LandingPage/Components/Carousel/CarouselItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

const testArr = []
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585180.png' />)
testArr.push(<CarouselItem imageSrc='http://api.dussurapp.com/uploads/pages/home/slider/16305585181.png' />)

const Carousel = () => {
	return (
		<LandingSwiper
			navigation
			loop
			grabCursor
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{ delay: 2500, disableOnInteraction: false }}
		>
			{testArr.map((item, index) => (
				<SwiperSlide key={index}>{item}</SwiperSlide>
			))}
		</LandingSwiper>
	)
}

const LandingSwiper = styled(Swiper)`
	background-color: #e7e7e9;
	height: 30rem;

	.swiper-button-prev,
	.swiper-button-next {
		color: black;
	}

	.swiper-button-prev {
		margin-left: 100px;
	}

	.swiper-button-next {
		margin-right: 100px;
	}

	.swiper-slide {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
`

export default Carousel
