import { useState, createContext, useContext } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FluidContainer, Text, Flex, Link, Button } from '@Components'
import RegistrationPopup from '@Customer/Containers/Layout/Components/RegisterationPopup'
import LoginPopup from '@Customer/Containers/Layout/Components/LoginPopup'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'
import { useMediaQuery } from '@Hooks'

export const PopupDataContext = createContext({})

const Navbar = () => {
	const matches = useMediaQuery('(max-width: 900px)')
	const customerAuthContext = useContext(CustomerAuthContext)
	const [showLoginPopup, setShowLoginPopup] = useState(null)
	const [showRegistrationPopup, setShowRegistrationPopup] = useState(null)
	const [showNavMenu, setShowNavMenu] = useState(false)

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
			<FluidContainer bg='background.black' mt={['10px', null, null, '0']}>
				{!matches && (
					<StyledFlexContainer height='55px' alignItems='center'>
						<Link to='/'>
							<NavItem textAlign='left'>Home</NavItem>
							{showNavMenu && (
								<StyledNavMenu>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
									<Text color='white'>Test</Text>
								</StyledNavMenu>
							)}
						</Link>
						<NavItem
							onClick={() => {
								setShowNavMenu(!showNavMenu)
							}}
						>
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
					</StyledFlexContainer>
				)}
				{matches && <Button>show sidebar</Button>}
			</FluidContainer>
		</PopupDataContext.Provider>
	)
}

const StyledNavMenu = styled.div`
	width: 100%;
	position: absolute;
	top: 55px;
	background-color: #686868;
	z-index: 3;
	padding: 20px;
	border-radius: 0 0 10px 10px;
	//display: flex;
	//flex-wrap: wrap;
	//gap: 206px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1.2rem;
`

const StyledFlexContainer = styled.div`
	position: relative;
	display: flex;
	height: 55px;
	align-items: center;
`

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
