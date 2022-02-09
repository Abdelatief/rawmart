import React from 'react'
import PagesHeader from '@Admin/Features/Pages/PagesHeader'
import styled from 'styled-components'
import Form from '@Admin/Features/Pages/Form/Form'

const Pages = ({ HeaderLabel }) => {
	return (
		<StyledDiv>
			<PagesHeader HeaderLabel={HeaderLabel} />
			<Form />
		</StyledDiv>
	)
}
const StyledDiv = styled.div`
	min-height: 100vh;
	margin: 10px 40px 10px 40px;
	@media (max-width: 750px) {
		justify-content: center;
	}
`
export default Pages
