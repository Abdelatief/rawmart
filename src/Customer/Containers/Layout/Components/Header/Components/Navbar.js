import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FluidContainer, Text, Flex, Link } from '@Components'

const Navbar = () => {
	return (
		<FluidContainer bg='background.black'>
			<Flex height='55px' alignItems='center'>
				<Link to='/'>
					<NavItem textAlign='left'>Home</NavItem>
				</Link>
				<NavItem>
					Category <RiArrowDownSLine fontSize='24px' />
				</NavItem>
				<NavItem>
					Brands <RiArrowDownSLine fontSize='24px' />
				</NavItem>
				<NavItem>Deals</NavItem>
				<Link to='/about-us'>
					<NavItem>About Us</NavItem>
				</Link>
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
