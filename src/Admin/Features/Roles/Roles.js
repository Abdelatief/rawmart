import React from 'react'
import styled from 'styled-components'
import RolesHeaderSection from '@Admin/Features/Roles/RolesHeaderSection'
import RolesTableSection from '@Admin/Features/Roles/RolesTableSection'

const Roles = () => {
	return (
		<StyledDiv>
			<RolesHeaderSection />
			<RolesTableSection />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	margin: 50px 0 40px 60px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Roles
