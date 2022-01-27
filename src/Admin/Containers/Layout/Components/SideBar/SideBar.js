import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '@Components'

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

	function handelUpdate(index) {
		for (let i = 0; i < 15; i++) {
			if (Values[i] === true) Values[i] = false
		}
		const newValue = [...Values]
		newValue[index] = true
		setValues(newValue)
	}
	// for(let i = 0;i<15;i++)
	// {
	//     console.log(Values[i])
	// }
	return (
		<StyledContainer>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(0)} selectedValue={Values[0]}>
				Dashboard
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(1)} selectedValue={Values[1]}>
				Roles
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(2)} selectedValue={Values[2]}>
				Users
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(3)} selectedValue={Values[3]}>
				Vendors
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(4)} selectedValue={Values[4]}>
				Categories
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(5)} selectedValue={Values[5]}>
				Products
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(6)} selectedValue={Values[6]}>
				Offers
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(7)} selectedValue={Values[7]}>
				Orders
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(8)} selectedValue={Values[8]}>
				Payment Methods
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(9)} selectedValue={Values[9]}>
				Shipping Method
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(10)} selectedValue={Values[10]}>
				New Categories
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(11)} selectedValue={Values[11]}>
				News
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(12)} selectedValue={Values[12]}>
				Special Orders
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(13)} selectedValue={Values[13]}>
				Settings
			</NavItem>
			<NavItem fontFamily='Jost-Regular' fontSize={3} onClick={() => handelUpdate(14)} selectedValue={Values[14]}>
				Pages
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

const NavItem = styled(Text).attrs({
	color: 'text.black',
	pl: '30px',
	pt: '10px',
	mt: '10px',
	mb: '10px',
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
