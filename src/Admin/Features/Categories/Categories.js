import React from 'react'
import CategoriesHeaderSection from '@Admin/Features/Categories/CategoriesHeaderSection'
import styled from 'styled-components'
import CategoryPageBody from '@Admin/Features/Categories/CategoriesPageBody/CategoryPageBody'

const Categories = ({ newVersion, headerLabel, labelValue }) => {
	return (
		<StyledDiv>
			<CategoriesHeaderSection headerLabel={headerLabel} />
			<CategoryPageBody newVersion={newVersion} labelValue={labelValue} />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 50px 50px 10px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
export default Categories
