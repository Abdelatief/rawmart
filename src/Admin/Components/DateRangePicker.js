import React from 'react'
import './DateRangePicker.css'
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars/src/daterangepicker/daterangepicker.component'
import styled from 'styled-components'

const DateRangePicker = () => {
	const startValue = new Date(new Date().getFullYear(), new Date().getMonth(), 14)
	const endValue = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15)
	const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 8)

	return (
		<StyledDiv>
			<DateRangePickerComponent
				placeholder='Enter Date Range'
				formate='Month D, Yr'
				startDate={startValue}
				endDate={endValue}
				minDate={minDate}
			/>
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	margin: 20px 0 20px;
`

export default DateRangePicker
