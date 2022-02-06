import Layout from '@Admin/Containers/Layout/Layout'
import styled from 'styled-components'
import FeaturesCardsSection from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCardsSection'
import TableSection from '@Admin/Features/AdminDashboard/Components/TableSection/TableSection'
const AdminDashboard = () => {
	return (
		<StyledDiv>
			<Layout />
			<StyledContainer>
				<FeaturesCardsSection />
				<TableSection />
			</StyledContainer>
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const StyledContainer = styled.div`
	position: absolute;
	margin: 20px;
	left: 200px;
	top: 100px;
	@media (max-width: 1000px) {
		left: 0;
	}
`

export default AdminDashboard
