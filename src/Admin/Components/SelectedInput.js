import React, { forwardRef } from 'react'
import styled from 'styled-components'

const SelectedInput = forwardRef(
	({ required = false, label, options, width, icon, object = false, ...restProps }, ref) => {
		return (
			<StyledSelectedInput>
				<SelectInput ref={ref} width={width} icon={icon} {...restProps}>
					<StyledOption value='' disabled selected>
						Select {label}
					</StyledOption>
					{object
						? Object.entries(options)?.map(option => (
								<StyledOption value={option[0]} key={option[0]}>
									{option[1]}
								</StyledOption>
						  ))
						: options?.map(option => (
								<StyledOption value={option.id} key={option.id}>
									{option.name}
								</StyledOption>
						  ))}
				</SelectInput>
			</StyledSelectedInput>
		)
	}
)

const StyledOption = styled.option`
	color: #686868;
`

const SelectInput = styled.select`
	padding: 0 16px;
	font-size: ${props => props.theme.fontSizes[3]}px;
	letter-spacing: 0.3px;
	width: ${props => props?.width ?? '100%'};
	background-color: white;
	height: 46px;
	border: 1px solid gainsboro;

	&:focus {
		outline: none;
	}
`

const StyledSelectedInput = styled.div`
	width: 100%;
`

export default SelectedInput
