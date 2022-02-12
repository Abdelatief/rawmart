import { useState, createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { RiArrowDownSLine } from 'react-icons/ri'
import { FluidContainer, Text, Flex, Link, Button } from '@Components'
import RegistrationPopup from '@Customer/Containers/Layout/Components/RegisterationPopup'
import LoginPopup from '@Customer/Containers/Layout/Components/LoginPopup'
import { CustomerAuthContext } from '@Customer/Containers/Layout/Layout'
import { useGetCategoriesQuery, useGetBrandsQuery } from '@Customer/Redux/CustomerApi'
import { useMediaQuery } from '@Hooks'
import { useNavigate, Navigate } from 'react-router-dom'

export const PopupDataContext = createContext({})

const Navbar = () => {
	const navigate = useNavigate()
	const matches = useMediaQuery('(max-width: 900px)')
	const customerAuthContext = useContext(CustomerAuthContext)
	const [showLoginPopup, setShowLoginPopup] = useState(null)
	const [showRegistrationPopup, setShowRegistrationPopup] = useState(null)
	const [showCategories, setShowCategories] = useState(false)
	const [showBrands, setShowBrands] = useState(false)

	const { data, isLoading, isSuccess } = useGetCategoriesQuery()
	const brandsResult = useGetBrandsQuery()

	const brandsNavClickHandler = () => {
		setShowBrands(!showBrands)
	}

	const categoriesClickHandler = () => {
		setShowCategories(!showCategories)
	}

	const brandItemClickHandler = brand => {
		navigate(`brands/${brand.slug}`)
	}

	const categoryNavItemClickHandler = category => {
		// setCategoryParentId(category.parent_id)
		// navigate(`/categories/${category.slug}`, {
		// 	state: { parentId: category.parent_id}
		// })
		console.log({ category })
		navigate(`categories/${category.slug}`)
		// navigate('categories')
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
