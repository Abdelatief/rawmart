import React from 'react'
import styled from 'styled-components'
import { Flex, FluidContainer, Text } from '@Components'
import { BsPower } from 'react-icons/bs'

const Navbar = () => {
	return (
		<StyledMainContainer>
			<Flex height='85px' alignItems='center'>
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
						<NavItem fontSize={2}>
							<LogoutIcon />
							Logout
						</NavItem>
					</StyledRightContainer>
				</StyledNavbarInnerContainer>
				<StyledNavbarExtendContainer></StyledNavbarExtendContainer>
			</Flex>
		</StyledMainContainer>
	)
}
const StyledMainContainer = styled.div`
	padding-left: 35px;
	background-color: black;
	min-height: 85px;
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
const LogoutIcon = styled(BsPower)`
	margin-right: 5px;
	font-size: 18px;
	margin-bottom: 5px;
`
const StyledNavbarExtendContainer = styled.div``

export default Navbar
