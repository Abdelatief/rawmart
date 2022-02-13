import React from 'react'
import styled from 'styled-components'
import NewsHeaderSection from '@Admin/Features/News/NewsHeaderSection'

const News = () => {
	return (
		<StyledDiv>
			<NewsHeaderSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 40px 30px 10px 30px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
export default News
