import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SideBar = () => {
	const [selectedItem, setSelectedItem] = useState()
	const [extendDropDown, setExtendDropDown] = useState(false)

	function handleUpdate(item) {
		setSelectedItem(item)
		if (item === 'Pages') setExtendDropDown(!extendDropDown)
	}

	return (
		<StyledContainer>
			<StyledLink to='./dashboard'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Dashboard')} selectedValue={selectedItem === 'Dashboard'}>
					Dashboard
				</NavItem>
			</StyledLink>
			<StyledLink to='./roles'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Roles')} selectedValue={selectedItem === 'Roles'}>
					Roles
				</NavItem>
			</StyledLink>
			<StyledLink to='./users'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Users')} selectedValue={selectedItem === 'Users'}>
					Users
				</NavItem>
			</StyledLink>
			<StyledLink to='./vendors'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Vendors')} selectedValue={selectedItem === 'Vendors'}>
					Vendors
				</NavItem>
			</StyledLink>
			<StyledLink to='./categories'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Categories')} selectedValue={selectedItem === 'Categories'}>
					Categories
				</NavItem>
			</StyledLink>
			<StyledLink to='./products'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Products')} selectedValue={selectedItem === 'Products'}>
					Products
				</NavItem>
			</StyledLink>
			<StyledLink to='./offers'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Offers')} selectedValue={selectedItem === 'Offers'}>
					Offers
				</NavItem>
			</StyledLink>
			<StyledLink to='./orders'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Orders')} selectedValue={selectedItem === 'Orders'}>
					Orders
				</NavItem>
			</StyledLink>
			<StyledLink to='./paymentMethod'>
				<NavItem
					fontSize={3}
					onClick={() => handleUpdate('Payment Methods')}
					selectedValue={selectedItem === 'Payment Methods'}
				>
					Payment Methods
				</NavItem>
			</StyledLink>
			<StyledLink to='./shippingMethod'>
				<NavItem
					fontSize={3}
					onClick={() => handleUpdate('Shipping Method')}
					selectedValue={selectedItem === 'Shipping Method'}
				>
					Shipping Method
				</NavItem>
			</StyledLink>
			<StyledLink to='./newCategories'>
				<NavItem
					fontSize={3}
					onClick={() => handleUpdate('New Categories')}
					selectedValue={selectedItem === 'New Categories'}
				>
					New Categories
				</NavItem>
			</StyledLink>
			<StyledLink to='./news'>
				<NavItem fontSize={3} onClick={() => handleUpdate('News')} selectedValue={selectedItem === 'News'}>
					News
				</NavItem>
			</StyledLink>
			<StyledLink to='./specialOrders'>
				<NavItem
					fontSize={3}
					onClick={() => handleUpdate('Special Orders')}
					selectedValue={selectedItem === 'Special Orders'}
				>
					Special Orders
				</NavItem>
			</StyledLink>
			<StyledLink to='./settings'>
				<NavItem fontSize={3} onClick={() => handleUpdate('Settings')} selectedValue={selectedItem === 'Settings'}>
					Settings
				</NavItem>
			</StyledLink>

			<NavItem fontSize={3} onClick={() => handleUpdate('Pages')} selectedValue={selectedItem === 'Pages'}>
				Pages
				<DropDownIcon>
					<BsChevronDown />
				</DropDownIcon>
			</NavItem>
			{extendDropDown && (
				<div>
					<StyledLink to='./pages/home'>
						<NavItem fontSize={3} onClick={() => handleUpdate('HomeForm')} selectedValue={selectedItem === 'HomeForm'}>
							Home
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/categories'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('CategoriesForm')}
							selectedValue={selectedItem === 'CategoriesForm'}
						>
							Categories
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/brands'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('BrandsForm')}
							selectedValue={selectedItem === 'BrandsForm'}
						>
							Brands
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/deals'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('DealsForm')}
							selectedValue={selectedItem === 'DealsForm'}
						>
							Deals
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/about'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('AboutForm')}
							selectedValue={selectedItem === 'AboutForm'}
						>
							About
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/specialOrder'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('SpecialOrderForm')}
							selectedValue={selectedItem === 'SpecialOrderForm'}
						>
							Special Order
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/collection'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('CollectionsForm')}
							selectedValue={selectedItem === 'CollectionsForm'}
						>
							Collections
						</NavItem>
					</StyledLink>
					<StyledLink to='./pages/settings'>
						<NavItem
							fontSize={3}
							onClick={() => handleUpdate('SettingsForm')}
							selectedValue={selectedItem === 'SettingsForm'}
						>
							Settings
						</NavItem>
					</StyledLink>
				</div>
			)}
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
  min-height: 100vh;
  width: 180px;
  background-color: #e0ecde;
  display: inline-block;
  align-items: center;
  top: 185px;
  z-index: 100;
  padding-bottom: 20px;

  @media (max-width: 1000px) {
    //top:180px;
    margin-top: 5px;


`

const DropDownIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: -15px;
	margin-right: 10px;
	font-size: 18px;
`
const NavItem = styled(Text).attrs({
	color: 'text.black',
	pl: '30px',
	pt: '12px',
	mt: '15px',
	mb: '-5px',
	width: '100%',
	height: '44px',
})`
	background-color: ${props => (props.selectedValue ? 'black' : 'transparent')};
	color: ${props => (props.selectedValue ? 'white' : 'black')};

	&:hover {
		cursor: pointer;
		background-color: black;
		color: ${props => props.theme.colors.text.white};
	}
`

const StyledLink = styled(Link)`
	text-decoration-line: none;
`
export default SideBar
