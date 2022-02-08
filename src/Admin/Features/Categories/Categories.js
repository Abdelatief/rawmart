import React from 'react'
import CategoriesHeaderSection from '@Admin/Features/Categories/CategoriesHeaderSection'
import styled from 'styled-components'

const Categories = () => {
	return (
		<StyledDiv>
			<CategoriesHeaderSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 50px 0 40px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
export default Categories
