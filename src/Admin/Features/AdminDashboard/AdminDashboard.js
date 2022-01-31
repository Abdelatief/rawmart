import Layout from '@Admin/Containers/Layout/Layout'
import styled from 'styled-components'
import FeaturesCardsSection from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCardsSection'

const AdminDashboard = () => {
	return (
		<StyledDiv>
			<Layout />
			<StyledContainer>
				<FeaturesCardsSection />
			</StyledContainer>
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	//display: block;
	//position: relative;
`
const StyledContainer = styled.div`
	//display: flex;
	position: absolute;
	margin: 20px;
	left: 200px;
	top: 100px;
	@media (max-width: 1000px) {
		left: 0;
	}
`

export default AdminDashboard
