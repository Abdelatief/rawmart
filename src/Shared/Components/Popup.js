import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useOnClickOutside } from '@Hooks'
import { CgClose } from 'react-icons/cg'
import { layout, borderRadius, position, space } from 'styled-system'
import { useLockBodyScroll } from '@Hooks'

export const Popup = ({
	children,
	isOpen,
	setIsOpen,
	displayCloseIcon = true,
	closeOnOutsideClick = true,
	...props
}) => {
	const popupRef = useRef(null)
	useLockBodyScroll()
	useOnClickOutside(popupRef, () => {
		if (closeOnOutsideClick) setIsOpen(false)
	})

	if (!isOpen) return null
	return ReactDOM.createPortal(
		<Overlay>
			<StyledPopup ref={popupRef} {...props}>
				{displayCloseIcon && <StyledCloseIcon onClick={() => setIsOpen(false)} />}
				{children}
			</StyledPopup>
		</Overlay>,
		document.getElementById('popup')
	)
}

const Overlay = styled.div`
	position: fixed;
	z-index: 100;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(16, 16, 16, 0.8);
	backdrop-filter: blur(2px);
`

const StyledPopup = styled.div`
	${layout};
	${borderRadius};
	${position};
	${space};
	z-index: 200;
	position: ${props => props?.position ?? 'fixed'};
	top: ${props => props?.top?.toString() ?? '50%'};
	left: ${props => props?.left?.toString() ?? '50%'};
	width: ${props => props?.width ?? '50%'};
	height: ${props => props?.height ?? '40%'};
	transform: ${props => !props?.top && !props?.left && 'translate(-50%, -50%)'};
	background-color: ${props => props.theme.colors.background.white};

	@media (max-width: 425px) {
		width: 90%;
		height: auto;
	}
`

const StyledCloseIcon = styled(CgClose)`
	position: absolute;
	top: 16px;
	right: 24px;
	font-size: 42px;
	cursor: pointer;
`
