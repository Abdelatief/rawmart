import React, { forwardRef } from 'react'
import styled from 'styled-components'

const FormSelectedInput = forwardRef(
	({ required = false, label, options, width, icon, object = false, requiredValue, ...restProps }, ref) => {
		return (
			<StyledFormInput>
				<FormLabel required={required}>
					{label}
					<FormSelectedInput.RequiredAsterisk required={required} />
				</FormLabel>
				<SelectInput ref={ref} width={width} object={object} icon={icon} {...restProps}>
					<StyledOption value='' disabled selected>
						Select {label}
					</StyledOption>
					{object
						? Object.entries(options)?.map(option => (
								<StyledOption value={option[requiredValue]} key={option[0]}>
									{option[1]}
								</StyledOption>
						  ))
						: options?.map(option => (
								<StyledOption value={option[requiredValue]} key={option.id}>
									{option.name}
								</StyledOption>
						  ))}
				</SelectInput>
			</StyledFormInput>
		)
	}
)
FormSelectedInput.RequiredAsterisk = ({ required }) => {
	if (required) {
		return <StyledAsterisk> *</StyledAsterisk>
	} else return null
}

const FormLabel = styled.p`
	color: #686868;
	margin-bottom: 8px;
`

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

const StyledAsterisk = styled.span`
	color: red;
`

const StyledFormInput = styled.div`
	width: 100%;
`
export default FormSelectedInput
