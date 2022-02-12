import styled from 'styled-components'
import { FluidContainer, Text } from '@Components'
import FeatureCard from '@Customer/Components/FeaturesCardsSection/FeatureCard'

const FeaturesCardsSection = () => {
	return (
		<FluidContainer>
			<Text fontSize='34px' textAlign='center' mb='100px'>
				Why People Choose Us
			</Text>
			<StyledFlexWrapper>
				<FeatureCard
					bg='#fbf4ee'
					title='Free Delivery'
					subtitle='To Great Cairo'
					imageSrc={require('./Assets/choose1.png')}
				/>
				<FeatureCard
					title='14 Day Free Return'
					subtitle='Conditions Apply'
					imageSrc={require('./Assets/choose2.png')}
					bg='#d9e2eb'
				/>
				<FeatureCard
					title='Secure Payment'
					subtitle='Safe & Convenient'
					imageSrc={require('./Assets/choose3.png')}
					bg='#f7e6c8'
				/>
			</StyledFlexWrapper>
		</FluidContainer>
	)
}

const StyledFlexWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 22px;

	@media (max-width: 1250px) {
		flex-direction: column;
		gap: 16px;
	}
`

export default FeaturesCardsSection
