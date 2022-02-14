import React from 'react'
import FeatureCard from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCard'
import { Text } from '@Components'
import styled from 'styled-components'
import { useGetAnalyticsQuery } from '@Admin/Redux/AdminApi'

const FeaturesCardsSection = () => {
	const { data } = useGetAnalyticsQuery()

	return (
		<div>
			<StyledHeader>Analytics Overview</StyledHeader>
			<StyledDiv>
				<StyledCardContainer>
					<FeatureCard
						title={data?.data['vendors']}
						subtitle='Vendors'
						bg='#fbf4ee'
						sizeLarge={true}
						imageSrc={require('./Assets/visitor-card.png')}
					/>

					<FeatureCard
						title={data?.data['orders']}
						subtitle='Orders'
						bg='#f7f3f4'
						sizeLarge={true}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title={data?.data['users']}
						subtitle='Customers'
						bg='#ffecd3'
						sizeLarge={true}
						imageSrc={require('./Assets/handshake.png')}
					/>

					<FeatureCard
						title={'EGP ' + data?.data['total_sale']}
						subtitle='Total Sale'
						bg='#d9e2eb'
						sizeLarge={true}
						imageSrc={require('./Assets/money.png')}
					/>
				</StyledCardContainer>
				<StyledCardContainer>
					<FeatureCard
						title={data?.data['placed_orders']}
						subtitle='In Process'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title={data?.data['shipped_orders']}
						subtitle='Shipped'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title={data?.data['delivered_orders']}
						subtitle='Delivered'
						bg='#d9e2eb'
						sizeLarge={false}
						imageSrc={require('./Assets/shopping-cart.png')}
					/>

					<FeatureCard
						title={data?.data['cancelled_orders']}
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
	//width: 95vw;
`

const StyledCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 22px;
	margin-bottom: 20px;
	@media (max-width: 990px) {
		justify-content: center;
	}
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
