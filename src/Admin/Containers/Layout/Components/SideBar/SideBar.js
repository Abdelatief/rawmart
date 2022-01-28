import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import { BsChevronDown } from 'react-icons/bs'

const SideBar = () => {
	const [Values, setValues] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	])
	//   const [Values, setValues] = useState([])
	// for(let i = 0; i<15; i++){
	//     const value = [...Values]
	//     value.push(false)
	//     setValues(value)
	// }

	function handleUpdate(index) {
		for (let i = 0; i < 15; i++) {
			if (Values[i] === true) Values[i] = false
		}
		const newValue = [...Values]
		newValue[index] = true
		setValues(newValue)
	}

	return (
		<StyledContainer>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(0)} selectedValue={Values[0]}>
				Dashboard
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(1)} selectedValue={Values[1]}>
				Roles
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(2)} selectedValue={Values[2]}>
				Users
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(3)} selectedValue={Values[3]}>
				Vendors
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(4)} selectedValue={Values[4]}>
				Categories
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(5)} selectedValue={Values[5]}>
				Products
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(6)} selectedValue={Values[6]}>
				Offers
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(7)} selectedValue={Values[7]}>
				Orders
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(8)} selectedValue={Values[8]}>
				Payment Methods
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(9)} selectedValue={Values[9]}>
				Shipping Method
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(10)} selectedValue={Values[10]}>
				New Categories
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(11)} selectedValue={Values[11]}>
				News
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(12)} selectedValue={Values[12]}>
				Special Orders
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(13)} selectedValue={Values[13]}>
				Settings
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handleUpdate(14)} selectedValue={Values[14]}>
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
