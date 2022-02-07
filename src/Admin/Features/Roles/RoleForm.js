import React from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Text } from '@Components'

const RoleForm = () => {
	return (
		<div>
			<StyledHeader>ADD ROLE</StyledHeader>
			<StyledForm style>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormInput label='Role Name' required />
					<FormInput label='Identifier' required />
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

export default RoleForm
