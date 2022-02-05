import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

const PopUpPage = ({ open, children, onClose }) => {
	if (!open) return null
	return ReactDom.createPortal(
		<>
			<OverlayStyles>{children}</OverlayStyles>
		</>,
		document.getElementById('portal')
	)
}

const OverlayStyles = styled.div`
	display: flex;
	position: fixed;
	top: 60px;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	@media (min-width: 1000px) {
		display: none;
	}
	@media (max-width: 450px) {
		top: 80px;
	}
`

export default PopUpPage
