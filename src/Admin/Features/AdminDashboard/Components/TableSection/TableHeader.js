import React from 'react'
import { Button, Text } from '@Components'
import styled from 'styled-components'

const TableHeader = () => {
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Recent Sales</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
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
				</StyledRightContainer>
			</StyledHeaderDiv>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	margin-bottom: 40px;
	display: block;
	margin-top: 30px;
`
const StyledHeaderDiv = styled.div`
	margin-bottom: 40px;
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
	flex: 10%;
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
		text-align: center;
		width: 100%;
	}
`
export default TableHeader