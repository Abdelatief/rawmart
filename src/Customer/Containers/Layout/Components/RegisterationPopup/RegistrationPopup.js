import { Popup } from '@Components'

const RegistrationPopup = ({ isOpen, setIsOpen }) => {
	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen}>
			<h1>RegistrationPopup</h1>
		</Popup>
	)
}

export default RegistrationPopup
