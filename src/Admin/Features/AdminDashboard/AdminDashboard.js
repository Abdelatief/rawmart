import styled from 'styled-components'
import FeaturesCardsSection from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCardsSection'
import TableSection from '@Admin/Features/AdminDashboard/Components/TableSection/TableSection'
import MiddlePartOfPage from '@Admin/Features/AdminDashboard/Components/TableSection/MiddlePartOfPage'
const AdminDashboard = () => {
	return (
		<StyledDiv>
			<StyledContainer>
				<FeaturesCardsSection />
				<MiddlePartOfPage />
				<TableSection />
			</StyledContainer>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-height: 100%;
`
const StyledContainer = styled.div`
	margin: 30px;
`

export default AdminDashboard
