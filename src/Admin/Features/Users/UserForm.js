import React from 'react'
import { Button, Flex, FormInput, Text } from '@Components'
import styled from 'styled-components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { RolesData } from '@Admin/Features/Roles/RolesData'

const UserForm = () => {
	return (
		<div>
			<StyledHeader>ADD USER</StyledHeader>
			<StyledForm style>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormSelectedInput label='Role' required options={RolesData} />
					<FormInput label='First Name' required />
					<FormInput label='Last Name' required />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Email' required />
					<FormInput label='Password' required />
					<FormInput label='Phone' />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='House Number/Street' />
					<FormInput label='City' />
					<FormSelectedInput label='Country' options={[{ name: 'Cairo' }, { name: 'Alex' }]} />
				</FormGroupFlex>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='State' />
					<FormInput label='Postal Code' />
				</FormGroupFlex>
				<Button width={['100%', null, '290px']}>Submit</Button>
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
