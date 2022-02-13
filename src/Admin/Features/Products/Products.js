import React from 'react'
import styled from 'styled-components'
import ProductsHeaderSection from '@Admin/Features/Products/ProductsHeaderSection'

const Products = () => {
	return (
		<StyledDiv>
			<ProductsHeaderSection />
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	margin: 50px 30px 40px 30px;
	min-height: 100vh;
	@media (max-width: 750px) {
		justify-content: center;
	}
`

export default Products
