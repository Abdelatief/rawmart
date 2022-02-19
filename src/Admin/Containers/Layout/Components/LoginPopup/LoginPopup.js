import styled from 'styled-components'
import { Popup, FormInput, Flex, Button, Text } from '@Components'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from '@Admin/Redux/AdminApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginImage from './Assets/auth-background.png'

const schema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required(),
})

const LoginPopup = ({ isOpen, setIsOpen }) => {
	const navigate = useNavigate()
	const [login, result] = useLoginMutation({ fixedCacheKey: 'admin-login' })

	const { register, handleSubmit, control } = useForm({
		mode: 'onTouched',
		resolver: yupResolver(schema),
		defaultValues: {
			username: 'admin@gmail.com',
			password: 'password',
		},
	})

	useEffect(() => {
		if (result?.isSuccess && result?.data?.code === 200) {
			setIsOpen(false)
			navigate('/admin/dashboard')
		}
	}, [result, setIsOpen, navigate])

	const onSubmit = data => {
		login(data)
	}

	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen} width='1004px' height='604px' padding={null}>
			<StyledLogin>
				<StyledLoginBanner>
					<Text fontFamily='KageFreebiesBlack' fontSize='60px' mt='150px' textAlign='center' color='#212529'>
						Rawmart
					</Text>
				</StyledLoginBanner>
				<LoginForm onSubmit={handleSubmit(onSubmit)}>
					<Flex
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						height='100%'
						maxWidth='450px'
						margin='0 auto'
						gap='26px'
					>
						<FormInput label='Email' {...register('username')} />
						<FormInput label='Password' type='password' {...register('password')} />
						<Text fontSize='14px' width='100%' textAlign='right' color='#212529' fontWeight={400}>
							Forgot Password?
						</Text>
						<Button width='100%' variant='secondary'>
							Login
						</Button>
					</Flex>
				</LoginForm>
			</StyledLogin>
		</Popup>
	)
}

const StyledLogin = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`

const StyledLoginBanner = styled.div`
	background-image: url(${LoginImage});
	background-repeat: no-repeat;
	background-size: contain;
	position: relative;
	width: 358px;
	height: 100%;

	@media (max-width: 1004px) {
		display: none;
	}
`

const LoginForm = styled.form`
	padding: 86px 16px;
	flex-grow: 1;
`

export default LoginPopup
