import React from 'react'
import styled from 'styled-components'
import VendorHeaderSection from '@Admin/Features/Vendors/VendorHeaderSection'
import VendorCardSection from '@Admin/Features/Vendors/VendorCardSection'

const Vendors = () => {
	return (
		<StyledDiv>
			<VendorHeaderSection />
			<VendorCardSection />
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
