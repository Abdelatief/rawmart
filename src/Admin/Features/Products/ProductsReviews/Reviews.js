import React from 'react'
import styled from 'styled-components'
import ReviewPageHeader from '@Admin/Features/Products/ProductsReviews/ReviewPageHeader'

const Reviews = () => {
	return (
		<StyledDiv>
			<ReviewPageHeader />
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px 30px 40px 30px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Reviews
