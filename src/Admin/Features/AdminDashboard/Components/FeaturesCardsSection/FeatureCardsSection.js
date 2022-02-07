import FeatureCard from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCard'
import { Text } from '@Components'
import styled from 'styled-components'

const FeaturesCardsSection = () => {
	return (
		<div>
			<StyledHeader>Analytics Overview</StyledHeader>
			<StyledDiv>
				<StyledCardContainer>
					<FeatureCard
						title='7'
						subtitle='VendorsSection'
						bg='#fbf4ee'
						sizeLarge={true}
						imageSrc={require('./Assets/visitor-card.png')}
					/>

					<FeatureCard
						title='12'
						subtitle='Orders'
						bg='#f7f3f4'
						sizeLarge={true}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title='2'
						subtitle='Customers'
						bg='#ffecd3'
						sizeLarge={true}
						imageSrc={require('./Assets/handshake.png')}
					/>

					<FeatureCard
						title='EGP 0'
						subtitle='Total Sale'
						bg='#d9e2eb'
						sizeLarge={true}
						imageSrc={require('./Assets/money.png')}
					/>
				</StyledCardContainer>
				<StyledCardContainer>
					<FeatureCard
						title='11'
						subtitle='In Process'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title='0'
						subtitle='Shipped'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title='1'
						subtitle='Delivered'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title='0'
						subtitle='Cancelled'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>
				</StyledCardContainer>
			</StyledDiv>
		</div>
	)
}

const StyledDiv = styled.div`
	width: 95vw;
`

const StyledCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	margin-bottom: 20px;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	position: relative;
	@media (max-width: 750px) {
		background: #e0ecde;
		padding: 10px;
		text-align: center;
		margin-bottom: 20px;
	}
`
export default FeaturesCardsSection
