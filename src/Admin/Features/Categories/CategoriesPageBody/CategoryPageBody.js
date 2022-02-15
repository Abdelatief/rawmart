import styled from 'styled-components'
import CategoriesCardsSection from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/CategoriesCardsSection'
import BlogCategoriesCardSection from '@Admin/Features/Categories/CategoriesPageBody/CategoryCards/BlogCategoriesCardSection'
import CategoryPageBodyHeader from '@Admin/Features/Categories/CategoriesPageBody/CategoryPageBodyHeader'

const CategoryPageBody = ({ newVersion, labelValue }) => {
	const renderer = () => {
		if (!newVersion) {
			return <CategoriesCardsSection />
		}
		return <BlogCategoriesCardSection />
	}
	return (
		<StyledContainer>
			<CategoryPageBodyHeader labelValue={labelValue} />
			{renderer()}
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
