import styled from 'styled-components'
import { Text } from '@Components'

const FeatureCard = ({ title, subtitle, imageSrc, bg, sizeLarge }) => {
	return (
		<Card bg={bg} sizeLarge={sizeLarge}>
			<Image src={imageSrc} sizeLarge={sizeLarge} />
			<TextContainer>
				<Text fontSize='24px' mb='7px' fontWeight='bold' mt={sizeLarge ? '-30px' : '0'}>
					{title}
				</Text>
				<Text fontSize='20px'>{subtitle}</Text>
			</TextContainer>
		</Card>
	)
}

const Card = styled.div`
	position: relative;
	width: ${props => (props.sizeLarge ? `calc(25% - 60px)` : `calc(25% - 140px)`)};
	height: ${props => (props.sizeLarge ? '140px' : '125px')};
	background-color: ${props => props.bg};
	padding: 23px 19px 15px;

	&:hover {
		box-shadow: 1px 3px 10px -8px #000;
		transform: translateY(-7px);
		transition: 0.3s;
		cursor: pointer;
	}

	@media (max-width: 990px) {
		width: 44%;
		height: 140px;
	}
	@media (max-width: 750px) {
		width: 100%;
		height: 140px;
	}
`

const TextContainer = styled.div`
	position: absolute;
	top: ${props => (props.sizeLarge ? '0%' : '45%')};
`

const Image = styled.img`
	position: relative;
	top: ${props => (props.sizeLarge ? `calc(35% - 5px)` : '-18%')};
	left: ${props => (props.sizeLarge ? '80%' : '70%')};
	opacity: ${props => (props.sizeLarge ? '1' : '0.05')};
	width: ${props => (props.sizeLarge ? `calc(20% - 5px)` : `calc(40% - 10px)`)};

	@media (max-width: 990px) {
		width: ${`calc(50%-15px)`};
		height: ${props => (props.sizeLarge ? '67px' : '100px')};
		top: ${props => (props.sizeLarge ? '30%' : '0')};
		left: ${props => (props.sizeLarge ? '85%' : '68%')};
	}
	@media (max-width: 750px) {
		width: 80px;
		height: 80px;
		top: ${`calc(50%-15px)`};
		left: calc(90% - 10px);
		opacity: ${props => (props.sizeLarge ? '0.3' : '0.05')};
	}
`

export default FeatureCard
