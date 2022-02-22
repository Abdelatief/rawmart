import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UserForm from '@Admin/Features/Users/UserForm'
import useDebounce from '@Admin/Hooks/useDebouce'
import { Button, Flex, FormInput, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import { useGetUsersQuery } from '@Admin/Redux/AdminApi'

const UsersHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { refetch } = useGetUsersQuery()

	const { realValue, debounceValue, setRealValue } = useDebounce({
		value: '',
		delay: 2000,
		callback: () => {
			console.log({ debug: 'debounce', realValue, debounceValue })
			console.log('mock api request')
		},
	})

	useEffect(() => {
		console.log({ debug: 'value', realValue, debounceValue })
	}, [realValue])

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
					{isOpen && <UserForm title='ADD USER' isOpen={isOpen} setIsOpen={setIsOpen} />}
				</StyledRightContainer>
			</StyledHeaderDiv>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput
						label=''
						placeholder='Search'
						value={realValue}
						onChange={event => setRealValue(event.target.value)}
					/>
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
