import styled from 'styled-components'
import { Text } from '@Components'

const FeatureCard = ({ title, subtitle, imageSrc, bg }) => {
	return (
		<Card bg={bg}>
			<Image src={imageSrc} />
			<TextContainer>
				<Text fontSize={['26px', '30px']} mb='16px'>
					{title}
				</Text>
				<Text fontSize={['18px', '22px']} color='#4b4b4b'>
					{subtitle}
				</Text>
			</TextContainer>
		</Card>
	)
}

const Card = styled.div`
	position: relative;
	width: 380px;
	height: 216px;
	background-color: ${props => props.bg};
	border-radius: 5px;
	margin-bottom: 100px;

	@media (max-width: 400px) {
		width: 100%;
	}
`

const TextContainer = styled.div`
	text-align: right;
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 0 30px;
`

const Image = styled.img`
	position: absolute;
	top: -60px;
	left: 30px;
`

export default FeatureCard
