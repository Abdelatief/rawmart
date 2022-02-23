import { useState, createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FluidContainer, Link } from '@Components'
import RegistrationPopup from '@Customer/Containers/Layout/Components/RegisterationPopup'
import LoginPopup from '@Customer/Containers/Layout/Components/LoginPopup'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'
import { useGetCategoriesQuery, useGetBrandsQuery } from '@Customer/Redux/CustomerApi'
import { useMediaQuery } from '@Hooks'
import { useNavigate } from 'react-router-dom'
import {
	Text,
	IconButton,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
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
	const [extendCategoryMenu, setExtendCategoryMenu] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState()
	const [extendBrandMenu, setExtendBrandMenu] = useState(false)
	const [selectedBrand, setSelectedBrand] = useState()

	const { data, isLoading, isSuccess } = useGetCategoriesQuery()
	const brandsResult = useGetBrandsQuery()

	// useEffect(() => {
	// 	console.log({ data, isSuccess })
	// 	data.map(category=>(
	// 		console.log({children: category.children})
	// 	))
	// }, [data, isSuccess])

	const toggleExtendCategoryMenu = item => {
		setExtendCategoryMenu(!extendCategoryMenu)
		setSelectedCategory(item)
	}
	const toggleExtendBrandMenu = item => {
		setExtendBrandMenu(!extendBrandMenu)
		setSelectedBrand(item)
	}
	const brandsNavClickHandler = () => {
		setShowBrands(!showBrands)
	}

	const categoriesNavClickHandler = () => {
		setShowCategories(!showCategories)
	}

	const brandItemClickHandler = brand => {
		navigate(`brands/${brand.slug}`, {
			state: { brand },
		})
		setShowBrands(false)
	}

	const categoryItemClickHandler = category => {
		navigate(`categories/${category.slug}`, {
			state: { category },
		})
		setShowCategories(false)
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
									data &&
									data?.map((category, index) => (
										<StyledNavMenuItem key={index}>
											<NavItem onClick={() => toggleExtendCategoryMenu(category.id)} mb='20px'>
												<Text
													color='white'
													_hover={{ color: '#AFD39A' }}
													onClick={() => categoryItemClickHandler(category)}
												>
													{category.name}
												</Text>
												<RiArrowDownSLine fontSize='24px' />
											</NavItem>
											{extendCategoryMenu &&
												selectedCategory === category.id &&
												category.children.map(subCategory => (
													<Text onClick={() => categoryItemClickHandler(subCategory)} key={subCategory.id}>
														{subCategory.name}
													</Text>
												))}
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
											<NavItem onClick={() => toggleExtendBrandMenu(brand.id)} mb='20px'>
												{brand.name}
											</NavItem>
										</StyledNavMenuItem>
									))}
							</StyledNavMenu>
						)}

						<NavItem onClick={categoriesNavClickHandler}>
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
			{matches && (
				<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent background='black'>
						<DrawerCloseButton color='white' />

						<DrawerBody mt='50px' justifyContent='center'>
							<Link to='/'>
								<NavItem textAlign='left' mb='20px'>
									Home
								</NavItem>
							</Link>

							<NavItem onClick={categoriesNavClickHandler} mb='20px'>
								Category <RiArrowDownSLine fontSize='24px' />
							</NavItem>
							{showCategories && (
								<StyledInnerContainer>
									{isSuccess &&
										data &&
										data?.map((category, index) => (
											<StyledInnerContainerItem key={index}>
												<NavItem onClick={() => toggleExtendCategoryMenu(category.id)} mb='20px'>
													<Text
														color='white'
														_hover={{ color: '#AFD39A' }}
														onClick={() => categoryItemClickHandler(category)}
													>
														{category.name}
													</Text>
													<RiArrowDownSLine fontSize='24px' />
												</NavItem>
												{extendCategoryMenu &&
													selectedCategory === category.id &&
													category.children.map(subCategory => (
														<Text onClick={() => categoryItemClickHandler(subCategory)} key={subCategory.id}>
															{subCategory.name}
														</Text>
													))}
											</StyledInnerContainerItem>
										))}
									<StyledInnerContainerItem>All Categories</StyledInnerContainerItem>
								</StyledInnerContainer>
							)}
							<NavItem onClick={brandsNavClickHandler} mb='20px'>
								Brands <RiArrowDownSLine fontSize='24px' />
							</NavItem>
							{showBrands && (
								<StyledInnerContainer>
									{brandsResult.isSuccess &&
										brandsResult?.data?.data &&
										brandsResult.data.data.map((brand, index) => (
											<StyledInnerContainerItem onClick={() => brandItemClickHandler(brand)} key={index}>
												<NavItem onClick={() => toggleExtendBrandMenu(brand.id)} mb='20px'>
													{brand.name}
												</NavItem>
											</StyledInnerContainerItem>
										))}
								</StyledInnerContainer>
							)}
							<NavItem mb='20px'>Deals</NavItem>
							<Link to='/about-us'>
								<NavItem mb='20px'>About Us</NavItem>
							</Link>
							<NavItem mb='20px'>News/Media</NavItem>
							<Link to='/special-order'>
								<NavItem mb='20px'>Special Order</NavItem>
							</Link>
							{renderAuthenticationButton()}
							{showLoginPopup && <LoginPopup isOpen={showLoginPopup} setIsOpen={setShowLoginPopup} />}
							{showRegistrationPopup && (
								<RegistrationPopup isOpen={showRegistrationPopup} setIsOpen={setShowRegistrationPopup} />
							)}
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			)}
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

const StyledNavMenuItem = styled.div`
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
	color: ${props => props.theme.colors.text.white};
	text-align: ${props => props?.textAlign ?? 'center'};
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.text.celadon};
	}
`
const StyledInnerContainer = styled.div`
	background-color: #686868;
	padding: 10px 0 10px;
	margin-bottom: 20px;
`

const StyledInnerContainerItem = styled.p`
	color: white;
	border-bottom: solid 1px white;
	margin: 10px;
	padding: 5px;
	&:hover {
		color: ${props => props.theme.colors.text.celadon};
		cursor: pointer;
	}
`
export default Navbar
