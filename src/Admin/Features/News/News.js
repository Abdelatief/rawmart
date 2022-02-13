import React from 'react'
import styled from 'styled-components'
import NewsHeaderSection from '@Admin/Features/News/NewsHeaderSection'
import NewsTable from '@Admin/Features/News/NewsTable'

const News = () => {
	return (
		<StyledDiv>
			<NewsHeaderSection />
			<NewsTable />
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
