import FluidContainer from '../../../../../Shared/Components/FluidContainer'
import Flex from '../../../../../Shared/Components/Flex'
import Text from '../../../../../Shared/Components/Text'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter, FiFacebook } from 'react-icons/fi'

const Footer = () => {
	return (
		<FluidContainer bg='background.black'>
			<Flex minHeight='296px' pt='80px' pb='30px' justifyContent='space-between' color='text.white' flexWrap='wrap'>
				{/*  Logo  */}
				<Flex minWidth='240px' flexDirection='column' alignItems='center'>
					<Text fontFamily='KageFreebiesBlack' fontSize={8} color='text.white' mb='32px'>
						Rawmart
					</Text>

					<Flex gap='15px'>
						<FiTwitter />
						<FiFacebook />
						<AiOutlineInstagram />
					</Flex>
				</Flex>

				{/*  contact us */}
				<Flex minWidth='240px' flexDirection='column' gap='20px'>
					<Text textTransform='uppercase'>Contact</Text>
					<Text>98746321000</Text>
					<Text>Dussur@gmail.com</Text>
					<Text color='text.whiteDimmed'>9.00 AM to 6.00 PM</Text>
				</Flex>

				{/*  site map  */}
				<Flex minWidth='240px' flexDirection='column' gap='32px'>
					<Text textTransform='uppercase'>SiteMap</Text>
					<Text>News & Media</Text>
				</Flex>

				{/*  special order  */}
				<Flex minWidth='240px' flexDirection='column' gap='32px'>
					<Text textTransform='uppercase'>Special Offer</Text>
					<Text>Make Special Offer</Text>
					<Text color='text.whiteDimmed'>© 2021 - All rights reserved</Text>
				</Flex>
			</Flex>
		</FluidContainer>
	)
}

export default Footer
