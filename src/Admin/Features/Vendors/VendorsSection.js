import React from 'react'
import VendorCards from '@Admin/Features/Vendors/VendorCards'
import styled from 'styled-components'
import { VendorData } from '@Admin/Features/Vendors/VendorData'
import VendorHeader from '@Admin/Features/Vendors/VendorHeader'

const VendorsSection = () => {
	return (
		<StyledDiv>
			<VendorHeader />
			<StyledCardSection>
				{VendorData.map(vendor => (
					<VendorCards key={vendor.id} address={vendor.address} phone={vendor.phone} title={vendor.title} />
				))}
			</StyledCardSection>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px 0 40px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
const StyledCardSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	@media (max-width: 1245px) {
		justify-content: center;
	}
`

export default VendorsSection
