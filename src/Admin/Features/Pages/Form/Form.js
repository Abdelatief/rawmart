import React from 'react'
import styled from 'styled-components'
import BannerSection from '@Admin/Features/Pages/Form/BannerSection'
import MetaSection from '@Admin/Features/Pages/Form/MetaSection'
import HomePart from '@Admin/Features/Pages/Form/HomePart'

const Form = ({ Name }) => {
	return (
		<StyledContainer>
			<BannerSection />
			{Name === 'HOME' && <HomePart />}
			<MetaSection />
		</StyledContainer>
	)
}

const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
	padding-bottom: 100px;
	margin: 30px 0 60px;
	min-height: 80vh;
`
export default Form
