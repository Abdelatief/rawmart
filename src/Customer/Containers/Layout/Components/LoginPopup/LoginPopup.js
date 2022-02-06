import styled from 'styled-components'
import { Popup, Text } from '@Components'
import LoginImage from './Assets/login-background.png'

const LoginPopup = ({ isOpen, setIsOpen }) => {
	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen} width='1004px' height='611px' padding={null}>
			<StyledLogin>
				<StyledLoginBanner></StyledLoginBanner>
				<LoginForm>
					<Text color='text.black'>Login</Text>
				</LoginForm>
			</StyledLogin>
		</Popup>
	)
}

const StyledLogin = styled.div`
	display: flex;
	height: 100%;
`

const StyledLoginBanner = styled.div`
	background-image: url(${LoginImage});
	background-repeat: no-repeat;
	background-position: -5%;
	background-size: contain;
	position: relative;
	width: 100%;
	height: 100%;
`

const LoginForm = styled.form`
	padding: 0 16px;
	background-color: lightgray;
`

export default LoginPopup
