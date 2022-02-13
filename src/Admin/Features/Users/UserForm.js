import React from 'react'
import { Button, Flex, FormInput, Text } from '@Components'
import styled from 'styled-components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { useGetCountriesQuery, useGetRolesQuery, useUpdateUserMutation } from '@Admin/Redux/AdminApi'

const UserForm = ({ title, user }) => {
	const [updateUser, updateUserResult] = useUpdateUserMutation()
	const { data: rolesData } = useGetRolesQuery()
	const { data: countriesData } = useGetCountriesQuery()

	let Username
	if (user) Username = user.name.split(' ')
	const updateOrCreateUser = () => {
		if (user) {
			updateUser(user)
		}
	}
	return (
		<div>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormSelectedInput label='Role' required options={rolesData?.data} />
					<FormInput label='First Name' required defaultValue={user ? Username[0] : ''} />
					<FormInput label='Last Name' required defaultValue={user ? Username[1] : ''} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Email' required defaultValue={user ? user.email : ''} />
					<FormInput label='Password' required />
					<FormInput label='Phone' defaultValue={user ? user.phone : ''} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='House Number/Street' />
					<FormInput label='City' />
					<FormSelectedInput label='Country' options={countriesData?.data} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='State' />
					<FormInput label='Postal Code' />
				</FormGroupFlex>
				<Button width={['100%', null, '290px']} onClick={updateOrCreateUser}>
					Save User
				</Button>
			</StyledForm>
		</div>
	)
}
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
})`
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
const StyledForm = styled.form`
	margin-top: 46px;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

export default UserForm
