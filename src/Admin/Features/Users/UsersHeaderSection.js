import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Popup, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import UserForm from '@Admin/Features/Users/UserForm'

const UsersHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Users</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button
						variant='tertiary'
						mt='-20px'
						minWidth={null}
						width='187px'
						fontSize={3}
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<Flex fontSize={2} justifyContent='center'>
							<VscAdd fontSize='15px' mr='5px' />
							Add User
						</Flex>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} height='80%' width='70%' padding='30px' overflow='auto'>
						{<UserForm title='ADD USER' />}
					</Popup>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='' placeholder='Search' />
				</FormGroupFlex>
			</StyledInnerContainer>
		</StyledOuterContainer>
	)
}
const StyledOuterContainer = styled.div`
	display: block;
	margin-right: 45px;
`
const StyledHeaderDiv = styled.div`
	display: flex;
	@media (max-width: 750px) {
		display: block;
	}
	margin-top: -20px;
`

const StyledLeftContainer = styled.div`
	flex: 80%;
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

const StyledInnerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
	padding: 20px;
	margin: 30px 0 30px 0;
`
const FormGroupFlex = styled(Flex)`
	width: 100%;
	gap: 30px;
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`
export default UsersHeaderSection
