import React from 'react'
import styled from 'styled-components'
import VendorHeaderSection from '@Admin/Features/Vendors/VendorHeaderSection'
import VendorTableSection from '@Admin/Features/Vendors/VendorTableSection'

const Vendors = () => {
	return (
		<StyledDiv>
			<VendorHeaderSection />
			<VendorTableSection />
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px 0 40px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Vendors
