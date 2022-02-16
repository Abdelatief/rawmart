import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Button, Flex, FormInput, Text, Popup } from '@Components'
import { MdDone } from 'react-icons/md'
import { useAddRoleMutation, useGetRolesQuery } from '@Admin/Redux/AdminApi'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'

const RoleForm = ({ title, role, isOpen, setIsOpen }) => {
	const [addRole, addRoleResult] = useAddRoleMutation()
	const { refetch } = useGetRolesQuery()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	console.log({ refetchForm: refetch })
	const onSubmit = data => {
		if (title === 'ADD ROLE') {
			console.log({ dataValue: data })
			// addRole({data[name], data[identifier]})
			addRole(data)
			// onClose()
			setIsOpen(false)
		}
	}
	useEffect(() => {
		console.log({ addRoleResponse: addRoleResult })
		if (addRoleResult?.isSuccess) refetch()
	}, [addRoleResult])

	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen} padding='30px'>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style onSubmit={handleSubmit(onSubmit)}>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<div>
						<FormInput
							label='Role Name'
							required
							defaultValue={role ? role.name : ''}
							{...register('name', { required: true })}
						/>
						{errors.name && <StyledErrorMessage>Role name is required!</StyledErrorMessage>}
					</div>
					<div>
						<FormInput
							label='Identifier'
							required
							defaultValue={role ? role.identifier : ''}
							{...register('identifier', { required: true })}
						/>
						{errors.identifier && <StyledErrorMessage>Role Identifier is required!</StyledErrorMessage>}
					</div>
				</FormGroupFlex>
				<StyledButtonDiv>
					<Button width={['100%', null, '290px']} fontSize={3}>
						<Flex justifyContent='center'>
							<StyledIcon />
							Save Role
						</Flex>
					</Button>
				</StyledButtonDiv>
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
const StyledIcon = styled(MdDone)`
	margin-right: 5px;
`

const FormGroupFlex = styled(Flex).attrs({
	gap: '16px',
	mb: '32px',
})`
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`

export const StyledErrorMessage = styled.text`
	color: red;
	//margin-left:42px;
	//display: block;
`
export default RoleForm
