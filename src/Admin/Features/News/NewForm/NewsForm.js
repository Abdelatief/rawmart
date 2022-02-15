import React from 'react'
import styled from 'styled-components'
import NewFromUpperSection from '@Admin/Features/News/NewForm/NewFromUpperSection'
import NewsFromLowerSection from '@Admin/Features/News/NewForm/NewsFromLowerSection'
import { Text } from '@Components'

const NewsForm = ({ title, news }) => {
	return (
		<div>
			<StyledHeader>{title}</StyledHeader>
			<StyledForm style>
				<NewFromUpperSection news={news} />
				<NewsFromLowerSection news={news} />
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

export default NewsForm
