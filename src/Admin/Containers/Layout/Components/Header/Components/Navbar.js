import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Flex } from '@Components'
import { BsPower } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
	const [extendNavbar, setExtendNavbar] = useState(false)
	const toggleExtendNavBar = () => {
		setExtendNavbar(!extendNavbar)
	}
	return (
		<StyledMainContainer>
			<Flex height='75px' alignItems='center'>
				<StyledNavbarInnerContainer>
					<StyledLeftContainer>
						<Text fontFamily='KageFreebiesBlack' fontSize={8} color='text.white'>
							Rawmart
						</Text>
						<StyledNavbarLinkContainer>
							<NavItem fontSize={3}>Welcome Admin !</NavItem>
						</StyledNavbarLinkContainer>
					</StyledLeftContainer>
					<StyledRightContainer>
						<NavItem onClick={toggleExtendNavBar}>{extendNavbar ? <CloseIcon /> : <MenuIcon />}</NavItem>
						<NavItem fontSize={2}>
							<LogoutIcon />
							<LogoutLabel>Logout</LogoutLabel>
						</NavItem>
					</StyledRightContainer>
				</StyledNavbarInnerContainer>
				{/*TODO::Add slider page here*/}
				{/*{extendNavbar && (*/}
				{/*	*/}
				{/*)}*/}
			</Flex>
		</StyledMainContainer>
	)
}
const StyledMainContainer = styled.div`
	padding-left: 35px;
	background-color: black;
	height: 85px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	@media (max-width: 1000px) {
		height: 65px;
	}
`
const StyledLeftContainer = styled.div`
	flex: 70%;
	display: flex;
	justify-content: flex-start;
	margin-left: 0;
`
const StyledRightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
`
const StyledNavbarInnerContainer = styled.div`
	width: 100%;
	display: flex;
`
const StyledNavbarLinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-left: 50px;
	float: left;
`
const NavItem = styled(Text).attrs({
	color: 'text.white',
	mr: '30px',
})`
	text-align: ${props => props?.textAlign ?? 'center'};
	display: flex;
	align-items: center;

	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.text.celadon};
	}
`
const LogoutIcon = styled(BsPower)`
	margin-right: 5px;
	font-size: 18px;
	margin-bottom: 5px;
	@media (max-width: 1000px) {
		margin-bottom: 0px;
	}
`
const MenuIcon = styled(GiHamburgerMenu)`
	font-size: 20px;
	color: white;
	margin-right: -5px;
	@media (min-width: 1000px) {
		display: none;
	}
`

const CloseIcon = styled(AiOutlineClose)`
	font-size: 22px;
	color: white;
	margin-right: -5px;
	@media (min-width: 1000px) {
		display: none;
	}
`
const LogoutLabel = styled.label`
	@media (max-width: 1000px) {
		display: none;
	}
`
const StyledNavbarExtendContainer = styled.div``

export default Navbar