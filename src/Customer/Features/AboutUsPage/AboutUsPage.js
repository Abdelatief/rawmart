import styled from 'styled-components'
import { FluidContainer, Flex, Text } from '@Components'
import FeaturesCardsSection from '../../Components/FeaturesCardsSection'
import CategoriesSection from '@Customer/Features/LandingPage/Components/CategoriesSection'

const AboutUsPage = () => {
	return (
		<>
			<FluidContainer bg='#e7e7e9' py='78px'>
				<Text fontSize='34px'>All about us</Text>

				<Flex mt='82px' gap='70px'>
					<AboutUsSection
						title='Who are we'
						subtitle='Corners is a specialized online marketplace designed to be one-stop-shop for fit-out products and building materials in Egypt.'
					/>
					<AboutUsSection
						title='Our Goal'
						subtitle='Our goal is to provide a comprehensive catalog of construction products and services for consumers, professional contractors, tradesmen and design professionals.'
					/>
					<AboutUsSection
						title='Passion'
						subtitle='We are driven by a passion for helping our customers by providing a more convenient solution through a customer focused platform that is unrivaled in this part of the world.'
					/>
				</Flex>
			</FluidContainer>
			<FluidContainer pt='70px'>
				<FeaturesCardsSection />
			</FluidContainer>
			<FluidContainer>
				<CategoriesSection />
			</FluidContainer>
		</>
	)
}

const AboutUsSection = ({ title, subtitle }) => (
	<StyledAboutUsSection>
		<Title>{title}</Title>
		<Subtitle>{subtitle}</Subtitle>
	</StyledAboutUsSection>
)

const StyledAboutUsSection = styled.div``

const Title = styled(Text).attrs({
	fontSize: '30px',
})``

const Subtitle = styled(Text).attrs({})`
	margin-top: 20px;
	color: rgba(0, 0, 0, 0.6);
	line-height: 1.625;
`

export default AboutUsPage
