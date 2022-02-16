import React, { useState } from 'react'
import { Button, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import styled from 'styled-components'
import RoleForm from '@Admin/Features/Roles/RoleForm'

const RolesHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Roles</StyledHeader>
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
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<VscAdd />
						<Text fontSize={2} ml='5px'>
							Add Roles
						</Text>
					</Button>

					<RoleForm title='ADD ROLE' isOpen={isOpen} setIsOpen={setIsOpen} />
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
export default RolesHeaderSection
