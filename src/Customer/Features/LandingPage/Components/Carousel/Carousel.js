import React from 'react'
import styled from 'styled-components'
import CarouselItem from '@Customer/Features/LandingPage/Components/Carousel/CarouselItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { useBannerQuery } from '@Customer/Redux/CustomerApi'
import { Text } from '@Components'

const Carousel = () => {
	const { isLoading, isSuccess, data } = useBannerQuery()

	const renderer = () => {
		if (isLoading) {
			return <Text fontSize='26px'>Loading...</Text>
		}
		if (isSuccess && data?.data?.sliders) {
			return data?.data?.sliders.map((slider, index) => (
				<SwiperSlide key={index}>
					<CarouselItem
						title={slider?.title}
						description={slider?.description}
						image={`${data?.data?.base_url}/${slider?.image}`}
					/>
				</SwiperSlide>
			))
		}
	}

	return (
		<LandingSwiper
			navigation
			loop
			grabCursor
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{ delay: 2500, disableOnInteraction: false }}
		>
			{renderer()}
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
