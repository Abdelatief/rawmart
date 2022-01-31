import FeatureCard from '@Admin/Features/AdminDashboard/Components/FeaturesCardsSection/FeatureCard'
import { Text, Flex } from '@Components'
import styled from 'styled-components'

const FeaturesCardsSection = () => {
	return (
		<StyledOuterContianer>
			<Text fontSize='22px' mb='50px' fontWeight='bold'>
				Analytics Overview
			</Text>
			<StyledInnerContianer>
				<Flex gap='22px' mb='20px'>
					<FeatureCard
						title='7'
						subtitle='Vendors'
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
				</Flex>
				<Flex gap='22px'>
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
				</Flex>
			</StyledInnerContianer>
		</StyledOuterContianer>
	)
}
const StyledOuterContianer = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const StyledInnerContianer = styled.div`
	//display: flex;
	//width:800px;
	//display: block;
	//flex-wrap:wrap;
	//position: relative;
	//width: 500px;
	//padding-right: 15px;
	//padding-left: 15px;
`
export default FeaturesCardsSection
