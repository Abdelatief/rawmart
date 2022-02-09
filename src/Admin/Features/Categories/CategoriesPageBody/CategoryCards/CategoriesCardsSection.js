import React from 'react'
import styled from 'styled-components'
import { CategoriesData } from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/CategoryData'
import CategoryCards from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/CategoryCards'

const CategoriesCardsSection = ({ newVersion }) => {
	const renderer = () => {
		if (!newVersion) {
			return CategoriesData.map(category => (
				<CategoryCards key={category.id} title={category.title} image={category.img} />
			))
		}
		return CategoriesData.filter(value => value.new).map(category => (
			<CategoryCards key={category.id} title={category.title} image={category.img} />
		))
	}
	return <StyledCardSection>{renderer()}</StyledCardSection>
}
const StyledCardSection = styled.div`
	width: 85vw;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
	margin: 100px 20px 0 20px;
	@media (max-width: 1245px) {
		justify-content: center;
	}
`

export default CategoriesCardsSection
