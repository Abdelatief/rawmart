import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import { BsChevronDown } from 'react-icons/bs'

const SideBar = () => {
	const [selectedItem, setSelectedItem] = useState()

	function handleUpdate(item) {
		setSelectedItem(item)
	}

	return (
		<StyledContainer>
			<NavItem fontSize={3} onClick={() => handleUpdate('Dashboard')} selectedValue={selectedItem === 'Dashboard'}>
				Dashboard
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Roles')} selectedValue={selectedItem === 'Roles'}>
				Roles
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Users')} selectedValue={selectedItem === 'Users'}>
				Users
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Vendors')} selectedValue={selectedItem === 'Vendors'}>
				Vendors
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Categories')} selectedValue={selectedItem === 'Categories'}>
				Categories
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Products')} selectedValue={selectedItem === 'Products'}>
				Products
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Offers')} selectedValue={selectedItem === 'Offers'}>
				Offers
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Orders')} selectedValue={selectedItem === 'Orders'}>
				Orders
			</NavItem>
			<NavItem
				fontSize={3}
				onClick={() => handleUpdate('Payment Methods')}
				selectedValue={selectedItem === 'Payment Methods'}
			>
				Payment Methods
			</NavItem>
			<NavItem
				fontSize={3}
				onClick={() => handleUpdate('Shipping Method')}
				selectedValue={selectedItem === 'Shipping Method'}
			>
				Shipping Method
			</NavItem>
			<NavItem
				fontSize={3}
				onClick={() => handleUpdate('New Categories')}
				selectedValue={selectedItem === 'New Categories'}
			>
				New Categories
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('News')} selectedValue={selectedItem === 'News'}>
				News
			</NavItem>
			<NavItem
				fontSize={3}
				onClick={() => handleUpdate('Special Orders')}
				selectedValue={selectedItem === 'Special Orders'}
			>
				Special Orders
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Settings')} selectedValue={selectedItem === 'Settings'}>
				Settings
			</NavItem>
			<NavItem fontSize={3} onClick={() => handleUpdate('Pages')} selectedValue={selectedItem === 'Pages'}>
				Pages
				<DropDownIcon>
					<BsChevronDown />
				</DropDownIcon>
			</NavItem>
		</StyledContainer>
	)
}
const StyledContainer = styled.div`
	height: 100vh;
	width: 180px;
	background-color: ${props => props.theme.colors.background.gainsboro};
	position: fixed;
	display: inline-block;
	align-items: center;
	top: 8.5%;
	@media (max-width: 1000px) {
		top: 6.5%;
	}
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

export default SideBar