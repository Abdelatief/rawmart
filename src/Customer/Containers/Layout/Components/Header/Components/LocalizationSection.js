import { Flex, Text, FluidContainer } from '@Components'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const LocalizationSection = () => {
	return (
		<FluidContainer bg='background.cultured'>
			<Flex height='45px' alignItems='center' justifyContent={['space-between', null, 'unset']} gap='56px'>
				<Text width='138px' fontFamily='Jost' fontSize={1}>
					Corners/Egypt
				</Text>

				<Flex gap='15px'>
					<FaTwitter />
					<FaFacebookF />
					<AiFillInstagram />
				</Flex>
			</Flex>
		</FluidContainer>
	)
}

export default LocalizationSection
