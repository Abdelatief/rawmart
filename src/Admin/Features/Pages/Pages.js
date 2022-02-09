import React from 'react'
import PagesHeader from '@Admin/Features/Pages/PagesHeader'
import styled from 'styled-components'

const Pages = ({ HeaderLabel }) => {
	return (
		<StyledDiv>
			<PagesHeader HeaderLabel={HeaderLabel} />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 50px 50px 10px 60px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
export default Pages
