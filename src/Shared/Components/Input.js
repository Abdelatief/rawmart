import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Box from './Box'
import { layout } from 'styled-system'

export const Input = React.forwardRef(({ width, icon, ...props }, ref) => {
	return (
		<Flex width={width} height='46px' border='1px solid' borderColor='border.gainsboro' alignItems='center'>
			<StyledInput icon={icon} ref={ref} {...props} />
			{icon && (
				<IconWrapper height='100%' px='8px'>
					{icon}
				</IconWrapper>
			)}
		</Flex>
	)
})

const StyledInput = styled.input`
	${layout};
	padding: 0 16px;
	border: none;
	font-size: ${props => props.theme.fontSizes[3]}px;
	letter-spacing: 0.3px;
	width: ${props => props?.width ?? '100%'};

	&:focus {
		outline: none;
	}
`

const IconWrapper = styled(Box)`
	&:hover {
		background-color: #e0ecde;
		cursor: pointer;
	}
`

export default Input
