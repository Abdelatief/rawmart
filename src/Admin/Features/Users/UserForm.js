import React from 'react'
import { Button, Flex, FormInput, Popup, Text } from '@Components'
import styled from 'styled-components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { useGetCountriesQuery, useGetRolesQuery, useUpdateUserMutation } from '@Admin/Redux/AdminApi'
import { useForm } from 'react-hook-form'

const UserForm = ({ title, user, isOpen, setIsOpen }) => {
	const [updateUser, updateUserResult] = useUpdateUserMutation()
	const { data: rolesData } = useGetRolesQuery()
	/*TODO REFACTOR*/
	const { data: countriesData } = useGetCountriesQuery()

	let Username
	if (user) Username = user.name.split(' ')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = data => {
		if (title === 'ADD USER') {
			// addUser(data)
			setIsOpen(false)
		} else if (title === 'Edit USER') {
			// updateUser({ id: user.id, identifier: data.identifier, name: data.name })
			setIsOpen(false)
		}
	}
	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen} padding='30px' minHeight='80%'>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style onSubmit={handleSubmit(onSubmit)}>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormSelectedInput
							width='280px'
							label='Role'
							required
							options={rolesData?.data}
							{...register('role', { required: true })}
						/>
						{errors.role && <StyledErrorMessage>Role is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormInput
							label='First Name'
							required
							defaultValue={user ? Username[0] : ''}
							{...register('first_name', { required: true })}
						/>
						{errors.firstName && <StyledErrorMessage>First Name is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormInput
							label='Last Name'
							required
							defaultValue={user ? Username[1] : ''}
							{...register('last_name', { required: true })}
						/>
						{errors.lastName && <StyledErrorMessage>Last Name is required!</StyledErrorMessage>}
					</div>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormInput
							label='Email'
							required
							defaultValue={user ? user.email : ''}
							{...register('email', { required: true })}
						/>
						{errors.email && <StyledErrorMessage>Email is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormInput label='Password' required {...register('password', { required: true })} />
						{errors.password && <StyledErrorMessage>Password is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormInput label='Phone' defaultValue={user ? user.phone : ''} {...register('phone')} />
					</div>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='House Number/Street' {...register('house_no')} />
					<FormInput label='City' {...register('city')} />
					<FormSelectedInput
						label='Country'
						options={countriesData?.countries}
						object={true}
						{...register('country')}
					/>
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='State' {...register('state')} />
					<FormInput label='Postal Code' {...register('postal_code')} />
				</FormGroupFlex>
				<Button width={['100%', null, '290px']}>Save User</Button>
			</StyledForm>
		</Popup>
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
const StyledErrorMessage = styled.text`
	color: red;
`
export default UserForm
