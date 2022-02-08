import styled from 'styled-components'
import { Popup, FormInput, Flex, Button, Text } from '@Components'
import { PopupDataContext } from '@Customer/Containers/Layout/Components/Header/Components/Navbar'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LoginImage from '../Assets/auth-background.png'
import FacebookImage from '../Assets/facebook.png'
import TwitterImage from '../Assets/twitter.png'
import GoogleImage from '../Assets/google.png'

const schema = yup.object().shape({
	first_name: yup.string().required(),
	last_name: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password confirmation does not match password')
		.required(),
})

const RegistrationPopup = ({ isOpen, setIsOpen }) => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			confirm_password: '',
		},
	})

	const handleSignInButtonClick = value => {
		const { setShowLoginPopup, setShowRegistrationPopup } = value
		setShowRegistrationPopup(false)
		setShowLoginPopup(true)
	}

	return (
		<PopupDataContext.Consumer>
			{value => {
				return (
					<Popup
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						width={['90%', null, '1004px']}
						height={['99%', null, '604px']}
						padding={null}
						maxHeight='99%'
						overflowY='auto'
					>
						<StyledLogin>
							<StyledLoginBanner>
								<Text fontFamily='KageFreebiesBlack' fontSize='60px' mt='150px' textAlign='center' color='#212529'>
									Rawmart
								</Text>
							</StyledLoginBanner>
							<LoginForm>
								<Flex
									flexDirection='column'
									alignItems='center'
									justifyContent='center'
									height='100%'
									maxWidth={['100%', '450px']}
									margin='0 auto'
									gap='26px'
								>
									<Text fontSize={['26px', '34px']} lineHeight='1.412'>
										Create New Account
									</Text>
									<FormGroup>
										<FormInput label='First Name' />
										<FormInput label='Last Name' />
									</FormGroup>

									<FormGroup>
										<FormInput label='Phone Number' />
										<FormInput label='Email' />
									</FormGroup>

									<FormGroup>
										<FormInput label='Password' />
										<FormInput label='Confirm Password' />
									</FormGroup>
									<Button width='100%' variant='secondary'>
										Sign up
									</Button>
									<Button width='100%' variant='tertiary' type='button' onClick={() => handleSignInButtonClick(value)}>
										Login
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
	padding: 16px 16px;
	flex-grow: 1;

	@media (max-width: 830px) {
		padding-top: 66px;
		padding-bottom: 30px;
	}
`

const StyledSocialImage = styled.img`
	cursor: pointer;
`

const FormGroup = styled(Flex).attrs({
	flexDirection: ['column', null, 'row'],
})`
	gap: 16px;
	width: 100%;
`

export default RegistrationPopup
