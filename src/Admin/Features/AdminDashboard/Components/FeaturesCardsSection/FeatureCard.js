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
	width: ${props => (props.sizeLarge ? '400px' : '300px')};
	height: ${props => (props.sizeLarge ? '140px' : '125px')};
	background-color: ${props => props.bg};
	padding: 23px 19px 15px;

	&:hover {
		box-shadow: 1px 3px 10px -8px #000;
		transform: translateY(-7px);
		transition: 0.3s;
		cursor: pointer;
	}

	@media (max-width: 986px) {
		width: 450px;
		height: 140px;
	}
	@media (max-width: 750px) {
		width: 600px;
		height: 140px;
	}
`

const TextContainer = styled.div`
	position: absolute;
	top: ${props => (props.sizeLarge ? '0%' : '45%')};
`

const Image = styled.img`
	position: relative;
	top: ${props => (props.sizeLarge ? '40%' : '0%')};
	left: ${props => (props.sizeLarge ? '80%' : '67%')};
	opacity: ${props => (props.sizeLarge ? '1' : '0.05')};
	width: ${props => (props.sizeLarge ? '60px' : '100px')};
	@media (max-width: 986px) {
		width: ${props => (props.sizeLarge ? '67px' : '100px')};
		height: ${props => (props.sizeLarge ? '67px' : '100px')};
		top: ${props => (props.sizeLarge ? '30%' : '0')};
		left: ${props => (props.sizeLarge ? '85%' : '80%')};
	}
	@media (max-width: 750px) {
		width: 50px;
		height: 50px;
		top: ${props => (props.sizeLarge ? '50%' : '-10%')};
		left: ${props => (props.sizeLarge ? '80%' : '85%')};
		opacity: ${props => (props.sizeLarge ? '0.3' : '0.05')};
	}
`

export default FeatureCard
