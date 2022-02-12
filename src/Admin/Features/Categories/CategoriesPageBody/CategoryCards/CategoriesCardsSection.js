import React from 'react'
import styled from 'styled-components'
import CategoryCards from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/CategoryCards'
import { useGetCategoriesQuery } from '@Admin/Redux/AdminApi'

const CategoriesCardsSection = ({ newVersion }) => {
	const { data, refetch } = useGetCategoriesQuery()
	const renderer = () => {
		if (!newVersion) {
			return data?.data?.map(category => <CategoryCards key={category.id} category={category} />)
		}
		return data?.data
			?.filter(value => value.new)
			.map(category => <CategoryCards key={category.id} category={category} />)
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
