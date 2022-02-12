import styled from 'styled-components'
import { Popup, FormInput, Flex, Button, Text } from '@Components'
import { PopupDataContext } from '@Customer/Containers/Layout/Components/Header/Components/Navbar'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import * as yup from 'yup'
import LoginImage from '../Assets/auth-background.png'
import FacebookImage from '../Assets/facebook.png'
import TwitterImage from '../Assets/twitter.png'
import GoogleImage from '../Assets/google.png'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from '@Customer/Redux/CustomerApi'
import { useEffect } from 'react'

const schema = yup.object().shape({
	email: yup.string().required(),
	password: yup.string().required(),
})

const LoginPopup = ({ isOpen, setIsOpen }) => {
	const [login, result] = useLoginMutation({ fixedCacheKey: 'customer-login' })

	const handleRegisterButtonClick = value => {
		const { setShowLoginPopup, setShowRegistrationPopup } = value
		setShowLoginPopup(false)
		setShowRegistrationPopup(true)
	}

	const { register, handleSubmit, control } = useForm({
		mode: 'onTouched',
		resolver: yupResolver(schema),
	})

	useEffect(() => {
		if (result?.isSuccess && result?.data?.code === 200) setIsOpen(false)
	}, [result, setIsOpen])

	const onSubmit = data => {
		login(data)
	}

	return (
		<PopupDataContext.Consumer>
			{value => {
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
									<FormInput label='Email' {...register('email')} />
									<FormInput label='Password' type='password' {...register('password')} />
									<Text fontSize='14px' width='100%' textAlign='right' color='#212529' fontWeight={400}>
										Forgot Password?
									</Text>
									<Button width='100%' variant='secondary'>
										Login
									</Button>
									<Button
										width='100%'
										variant='tertiary'
										type='button'
										onClick={() => handleRegisterButtonClick(value)}
									>
										Register
									</Button>
									<Flex alignItems='center' gap='12px'>
										<Text>Login with Social Media</Text>
										<Flex gap='8px'>
											<StyledSocialImage src={GoogleImage} alt='google icon' />
											<StyledSocialImage src={FacebookImage} alt='facebook icon' />
											<StyledSocialImage src={TwitterImage} alt='twitter icon' />
										</Flex>
									</Flex>
								</Flex>
							</LoginForm>
						</StyledLogin>
						<DevTool control={control} />
					</Popup>
				)
			}}
		</PopupDataContext.Consumer>
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

const StyledSocialImage = styled.img`
	cursor: pointer;
`

export default LoginPopup
