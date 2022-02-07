import React from 'react'
import { VendorData } from '@Admin/Features/Vendors/VendorData'
import VendorCards from '@Admin/Features/Vendors/VendorCards'
import styled from 'styled-components'

const VendorCardSection = () => {
	return (
		<StyledCardSection>
			{VendorData.map(vendor => (
				<VendorCards key={vendor.id} address={vendor.address} phone={vendor.phone} title={vendor.title} />
			))}
		</StyledCardSection>
	)
}
const StyledCardSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 20px;
	@media (max-width: 1245px) {
		justify-content: center;
	}
`
export default VendorCardSection
