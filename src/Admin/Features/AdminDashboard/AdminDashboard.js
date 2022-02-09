import styled from 'styled-components'
import FeaturesCardsSection from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCardsSection'
import TableSection from '@Admin/Features/AdminDashboard/Components/TableSection/TableSection'
import TableHeader from '@Admin/Features/AdminDashboard/Components/TableSection/TableHeader'
const AdminDashboard = () => {
	return (
		<StyledDiv>
			<StyledContainer>
				<FeaturesCardsSection />
				<TableHeader />
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
