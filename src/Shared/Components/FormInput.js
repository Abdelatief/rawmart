import { forwardRef } from 'react'
import styled from 'styled-components'
import { Input } from '@Components'

export const FormInput = forwardRef(({ required = false, label, width, icon, ...restProps }, ref) => {
	return (
		<StyledFormInput>
			<FormLabel required={required}>
				{label}
				<FormInput.RequiredAsterisk required={required} />
			</FormLabel>
			<Input ref={ref} width={width} icon={icon} {...restProps} />
		</StyledFormInput>
	)
})

FormInput.RequiredAsterisk = ({ required }) => {
	if (required) {
		return <StyledAsterisk> *</StyledAsterisk>
	} else return null
}

const FormLabel = styled.p`
	color: #686868;
	margin-bottom: 8px;
`

const StyledAsterisk = styled.span`
	color: red;
`

const StyledFormInput = styled.div`
	width: 100%;
`
