import { useState, createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FluidContainer, Text, Link } from '@Components'
import RegistrationPopup from '@Customer/Containers/Layout/Components/RegisterationPopup'
import LoginPopup from '@Customer/Containers/Layout/Components/LoginPopup'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'
import { useGetCategoriesQuery, useGetBrandsQuery } from '@Customer/Redux/CustomerApi'
import { useMediaQuery } from '@Hooks'
import { useNavigate } from 'react-router-dom'
import {
	IconButton,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	useDisclosure,
	Button,
} from '@chakra-ui/react'

export const PopupDataContext = createContext({})

const Navbar = () => {
	const navigate = useNavigate()
	const matches = useMediaQuery('(max-width: 900px)')
	const customerAuthContext = useContext(CustomerAuthContext)
	const [showLoginPopup, setShowLoginPopup] = useState(null)
	const [showRegistrationPopup, setShowRegistrationPopup] = useState(null)
	const [showCategories, setShowCategories] = useState(false)
	const [showBrands, setShowBrands] = useState(false)
	const { isOpen, onClose, onOpen } = useDisclosure()

	const { data, isLoading, isSuccess } = useGetCategoriesQuery()
	const brandsResult = useGetBrandsQuery()

	const brandsNavClickHandler = () => {
		setShowBrands(!showBrands)
	}

	const categoriesClickHandler = () => {
		setShowCategories(!showCategories)
	}

	const brandItemClickHandler = brand => {
		navigate(`brands/${brand.slug}`, {
			state: { brand },
		})
	}

	const categoryNavItemClickHandler = category => {
		navigate(`categories/${category.slug}`)
	}

	useEffect(() => {
		if (showBrands) {
			if (showCategories) setShowCategories(false)
		}
	}, [showBrands])

	useEffect(() => {
		if (showCategories) {
			if (showBrands) setShowBrands(false)
		}
	}, [showCategories])

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
						</Link>

						{showCategories && (
							<StyledNavMenu>
								{isSuccess &&
									data?.data &&
									data?.data?.map((category, index) => (
										<StyledNavMenuItem key={index} onClick={() => categoryNavItemClickHandler(category)}>
											{category.name}
										</StyledNavMenuItem>
									))}
								<StyledNavMenuItem>All Categories</StyledNavMenuItem>
							</StyledNavMenu>
						)}

						{showBrands && (
							<StyledNavMenu>
								{brandsResult.isSuccess &&
									brandsResult?.data?.data &&
									brandsResult.data.data.map((brand, index) => (
										<StyledNavMenuItem onClick={() => brandItemClickHandler(brand)} key={index}>
											{brand.name}
										</StyledNavMenuItem>
									))}
							</StyledNavMenu>
						)}

						<NavItem onClick={categoriesClickHandler}>
							Category <RiArrowDownSLine fontSize='24px' />
						</NavItem>
						<NavItem onClick={brandsNavClickHandler}>
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
				{matches && (
					<IconButton
						aria-label='hamburger menu'
						bg='transparent'
						_hover={{ bg: '#AFD39A' }}
						color='white'
						borderRadius={0}
						icon={<GiHamburgerMenu />}
						onClick={onOpen}
					/>
				)}
			</FluidContainer>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder='Type here...' />
					</DrawerBody>

					<DrawerFooter>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme='blue'>Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
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
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1.2rem;
`

const StyledNavMenuItem = styled.p`
	color: white;

	&:hover {
		color: ${props => props.theme.colors.text.celadon};
		cursor: pointer;
	}
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
