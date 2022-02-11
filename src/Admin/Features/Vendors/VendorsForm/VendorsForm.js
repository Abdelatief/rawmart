import React from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import VendorFormUpperSection from '@Admin/Features/Vendors/VendorsForm/VendorFormUpperSection'
import VendorsFormLowerSection from '@Admin/Features/Vendors/VendorsForm/VendorsFormLowerSection'

const VendorsForm = ({ title, vendor }) => {
	return (
		<div>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style>
				<VendorFormUpperSection vendor={vendor} />
				<VendorsFormLowerSection vendor={vendor} />
			</StyledForm>
		</div>
	)
}

const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
})`
	@media (max-width: 750px) {
		background: #e0ecde;
		margin-top: 40px;
		padding: 10px;
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		min-height: 50px;
	}
`

const StyledForm = styled.form`
	margin-top: 46px;
`
export default VendorsForm
