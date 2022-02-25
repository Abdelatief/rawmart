import React from 'react'
import { useGetSingleProductQuery } from '@Customer/Redux/CustomerApi'
import { FluidContainer } from '@Components'
import ProductView from '@Customer/Features/SingleProductPage/ProductView'

const SingleProductPage = () => {
	return (
		<FluidContainer py='26px' marginTop='100px'>
			<ProductView />
		</FluidContainer>
	)
}

export default SingleProductPage
