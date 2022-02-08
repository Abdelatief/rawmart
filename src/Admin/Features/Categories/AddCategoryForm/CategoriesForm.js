import React from 'react'
import styled from 'styled-components'
import { Text } from '@Components'
import CategoryFormUpperSection from '@Admin/Features/Categories/AddCategoryForm/CategoryFormUpperSection'
import CategoryFormLowerSection from '@Admin/Features/Categories/AddCategoryForm/CategoryFormLowerSection'

const CategoriesForm = () => {
	return (
		<div>
			<StyledHeader>ADD CATEGORY</StyledHeader>
			<StyledForm style>
				<CategoryFormUpperSection />
				<CategoryFormLowerSection />
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

export default CategoriesForm
