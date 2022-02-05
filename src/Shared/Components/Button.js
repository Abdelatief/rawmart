import { forwardRef } from 'react'
import styled from 'styled-components'
import { layout, space, typography, variant } from 'styled-system'

export const Button = forwardRef(({ children, variant, ...props }, ref) => {
	return (
		<StyledButton variant={variant} ref={ref} {...props}>
			{children}
		</StyledButton>
	)
})

Button.defaultProps = {
	variant: 'primary',
	padding: '20px 26px',
	minWidth: '264px',
	width: '290px',
	height: '55px',
}

const StyledButton = styled.button`
	${variant({ scale: 'button' })};
	${layout};
	${space};
	${typography};
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => props?.theme?.button[props?.variant]?._hover?.backgroundColor};
		color: ${props => props?.theme?.button[props?.variant]?._hover?.color};
		border: ${props => props?.theme?.button[props?.variant]?._hover?.border};
		border-color: ${props => props?.theme?.button[props?.variant]?._hover?.borderColor};
	}
`
