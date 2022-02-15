import React from 'react'
import { Button, Text } from '@Components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MiddlePartOfPage = () => {
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Recent Sales</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<StyledLink to='../orders'>
						<Button
							variant='tertiary'
							mt='-20px'
							minWidth={null}
							width='187px'
							fontSize={3}
							display='flex'
							justifyContent='center'
						>
							<Text fontSize={2} ml='5px'>
								View All Orders
							</Text>
						</Button>
					</StyledLink>
				</StyledRightContainer>
			</StyledHeaderDiv>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	margin-bottom: 40px;
	display: block;
	margin-top: 40px;
`
const StyledHeaderDiv = styled.div`
	margin-bottom: 20px;
	display: flex;
	@media (max-width: 750px) {
		display: block;
	}
	margin-top: 20px;
`

const StyledLeftContainer = styled.div`
	flex: 70%;
	justify-content: flex-start;
`
const StyledRightContainer = styled.div`
	//flex: 0%;
	justify-content: flex-end;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		text-align: center;
		width: 100%;
	}
`
const StyledLink = styled(Link)`
	text-decoration-line: none;
`
export default MiddlePartOfPage
