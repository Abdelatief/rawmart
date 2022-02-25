import React from 'react'
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component'
import { Flex, FluidContainer, Text } from '@Components'
import { useGetProductReviewsQuery } from '@Customer/Redux/CustomerApi'
import { useLocation } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { MdStarRate } from 'react-icons/md'

const ReviewsView = () => {
	const {
		state: { product },
	} = useLocation()

	const { data, isLoading, isSuccess } = useGetProductReviewsQuery({ product_id: product?.id })

	return (
		<FluidContainer mt='20px'>
			{isLoading && (
				<Flex justifyContent='center' alignItems='center' minHeight='inherit' width='100%'>
					<Spinner size='lg' color='primary' />
				</Flex>
			)}
			{isSuccess && (
				<>
					<Text color='black' mb='20px' fontSize='16px' fontWeight={600}>
						Reviews
					</Text>
					{data.data.map(review => (
						<div key={review.id}>
							<Text color='#686868' fontSize='16px' mb='30px'>
								{review.rating} Ratings & {data.total} Reviews
							</Text>
							<StarRatingComponent
								name='rate'
								editing={false}
								renderStarIcon={() => (
									<span>
										<StyledStarIcon />
									</span>
								)}
								starCount={5}
								value={parseInt(review.rating)}
								emptyStarColor='#c3c3c3'
							/>
							<Text color='black' mt='10px' mb='20px' fontWeight={600}>
								{review.name}
							</Text>
							<Text color='#686868' fontSize='16px' mb='30px'>
								{review.review}
							</Text>
						</div>
					))}
				</>
			)}
		</FluidContainer>
	)
}

const StyledStarIcon = styled(MdStarRate)`
	font-size: 25px;
`

export default ReviewsView
