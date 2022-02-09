import { useState, createContext, useContext } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FluidContainer, Text, Flex, Link } from '@Components'
import RegistrationPopup from '@Customer/Containers/Layout/Components/RegisterationPopup'
import LoginPopup from '@Customer/Containers/Layout/Components/LoginPopup'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'

export const PopupDataContext = createContext({})

const Navbar = () => {
	const customerAuthContext = useContext(CustomerAuthContext)
	const [showLoginPopup, setShowLoginPopup] = useState(null)
	const [showRegistrationPopup, setShowRegistrationPopup] = useState(null)

	const renderAuthenticationButton = () => {
		if (customerAuthContext?.authTokens?.access_token) {
			return (
				<NavItem ml='auto' onClick={() => customerAuthContext.resetAuthTokens()}>
					Logout
				</NavItem>
			)
		}
		return (
			<NavItem onClick={() => setShowLoginPopup(true)} ml='auto'>
				Login/Register
			</NavItem>
		)
	}

	return (
		<PopupDataContext.Provider value={{ setShowLoginPopup, setShowRegistrationPopup }}>
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
					<Link to='/special-order'>
						<NavItem>Special Order</NavItem>
					</Link>
					{renderAuthenticationButton()}
					{showLoginPopup && <LoginPopup isOpen={showLoginPopup} setIsOpen={setShowLoginPopup} />}
					{showRegistrationPopup && (
						<RegistrationPopup isOpen={showRegistrationPopup} setIsOpen={setShowRegistrationPopup} />
					)}
				</Flex>
			</FluidContainer>
		</PopupDataContext.Provider>
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
