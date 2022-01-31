import styled from 'styled-components'
import { Text } from '@Components'

const FeatureCard = ({ title, subtitle, imageSrc, bg, sizeLarge }) => {
	return (
		<Card bg={bg} sizeLarge={sizeLarge}>
			<Image src={imageSrc} sizeLarge={sizeLarge} />

			<TextContainer>
				<Text fontSize='24px' mb='7px' fontWeight='bold'>
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
	//border-radius: 5px;
	//margin-bottom: 100px;
	padding: 23px 19px 15px;

	&:hover {
		box-shadow: 1px 3px 10px -8px #000;
		transform: translateY(-7px);
		transition: 0.3s;
		cursor: pointer;
	}

	@media (max-width: 1008px) {
		width: 550px;
		height: 160px;
	}
	@media (max-width: 640px) {
		width: 288px;
		height: 140px;
	}
`

const TextContainer = styled.div`
	//text-align: right;
	//position: absolute;
	//bottom: 20px;
	//right: 20px;
	//padding: 0 30px;
	//font-weight: bold;
	position: absolute;
	top: ${props => (props.sizeLarge ? '0%' : '45%')};
`

const Image = styled.img`
	position: absolute;
	top: ${props => (props.sizeLarge ? '40%' : '0%')};
	left: ${props => (props.sizeLarge ? '80%' : '67%')};
	opacity: ${props => (props.sizeLarge ? '1' : '0.05')};
	width: ${props => (props.sizeLarge ? '60px' : '100px')};
`

export default FeatureCard
