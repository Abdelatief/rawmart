import styled from 'styled-components'
import FeaturesCardsSection from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCardsSection'
import TableSection from '@Admin/Features/AdminDashboard/Components/TableSection/TableSection'
import MiddelPartOfPage from '@Admin/Features/AdminDashboard/Components/TableSection/MiddelPartOfPage'
const AdminDashboard = () => {
	return (
		<StyledDiv>
			<StyledContainer>
				<FeaturesCardsSection />
				<MiddelPartOfPage />
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
	margin: 20px;
`

export default AdminDashboard
