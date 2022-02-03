import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

const PopUpPage = ({ open, children, onClose }) => {
	if (!open) return null
	return ReactDom.createPortal(
		<>
			<OverlayStyles>{children}</OverlayStyles>
			<CloseIcon onClick={onClose}>Close Modal</CloseIcon>
		</>,
		document.getElementById('portal')
	)
}

const OverlayStyles = styled.div`
	display: flex;
	position: fixed;
	top: 5%;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	@media (min-width: 1000px) {
		display: none;
	}
`
const CloseIcon = styled(AiOutlineClose)`
	//margin-right: 10px;
	cursor: pointer;
	left: 98%;
	position: relative;
	font-size: 1.5rem;
`
export default PopUpPage
