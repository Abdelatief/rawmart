import styled from 'styled-components'
import FluidContainer from '../../../../../../Shared/Components/FluidContainer'
import Flex from '../../../../../../Shared/Components/Flex'
import Text from '../../../../../../Shared/Components/Text'
import { RiArrowDownSLine } from 'react-icons/ri'

const Navbar = () => {
	return (
		<FluidContainer bg='background.black'>
			<Flex height='55px' alignItems='center'>
				<NavItem textAlign='left'>Home</NavItem>
				<NavItem>
					Category <RiArrowDownSLine fontSize='24px' />
				</NavItem>
				<NavItem>
					Brands <RiArrowDownSLine fontSize='24px' />
				</NavItem>
				<NavItem>Deals</NavItem>
				<NavItem>About</NavItem>
				<NavItem>News/Media</NavItem>
				<NavItem textAlign='left'>Special Order</NavItem>
				<NavItem ml='auto'>Login/Register</NavItem>
			</Flex>
		</FluidContainer>
	)
}

const NavItem = styled(Text).attrs({
	color: 'text.white',
	mr: '40px',
})`
	text-align: ${props => props?.textAlign ?? 'center'};
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.text.celadon};
	}
`

export default Navbar
