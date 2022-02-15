import React, { forwardRef } from 'react'
import styled from 'styled-components'
import DateRangePicker from '@Admin/Components/DateRangePicker'

const FormDateRangePicker = forwardRef(({ required = false, label, width, icon, ...restProps }, ref) => {
	return (
		<StyledFormInput>
			<FormLabel required={required}>
				{label}
				<FormDateRangePicker.RequiredAsterisk required={required} />
			</FormLabel>
			<DateRangePicker />
		</StyledFormInput>
	)
})
FormDateRangePicker.RequiredAsterisk = ({ required }) => {
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
export default FormDateRangePicker
