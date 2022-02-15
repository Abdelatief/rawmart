import React from 'react'
import { Button, Text } from '@Components'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const SettingsPageHeader = () => {
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Settings</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<StyledLink to='../products'>
						<Button variant='tertiary' mt='-20px' minWidth={null} width='187px' fontSize={3} display='flex'>
							<MenuIcon />
							<Text fontSize={2} ml='5px'>
								All Products
							</Text>
						</Button>
					</StyledLink>
				</StyledRightContainer>
			</StyledHeaderDiv>
		</StyledOuterContainer>
	)
}

const StyledOuterContainer = styled.div`
	display: block;
	margin-top: -20px;
`
const StyledHeaderDiv = styled.div`
	display: flex;
	@media (max-width: 750px) {
		display: block;
	}
	margin-top: -20px;
	margin-bottom: 20px;
`

const StyledLeftContainer = styled.div`
	flex: 70%;
	justify-content: flex-start;
`
const StyledRightContainer = styled.div`
	flex: 0.5%;
	justify-content: flex-end;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		margin-top: 40px;
		padding: 10px;
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		min-height: 50px;
	}
`
const MenuIcon = styled(GiHamburgerMenu)`
	margin-left: 20px;
`
const StyledLink = styled(Link)`
	text-decoration-line: none;
`

export default SettingsPageHeader
