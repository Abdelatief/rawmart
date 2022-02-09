import React from 'react'
import CategoryPageBodyHeader from '@Admin/Features/Categories/CategoriesPageBody/CategoryPageBodyHeader'
import styled from 'styled-components'
import CategoriesCardsSection from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/CategoriesCardsSection'

const CategoryPageBody = ({ newVersion, labelValue }) => {
	return (
		<StyledContainer>
			<CategoryPageBodyHeader labelValue={labelValue} />
			<CategoriesCardsSection newVersion={newVersion} />
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
	padding-bottom: 100px;
	margin-bottom: 60px;
`

export default CategoryPageBody
