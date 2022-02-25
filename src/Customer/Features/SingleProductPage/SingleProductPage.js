import React from 'react'
import { useGetSingleProductQuery } from '@Customer/Redux/CustomerApi'
import { FluidContainer } from '@Components'
import ProductView from '@Customer/Features/SingleProductPage/ProductView'
import Reviews from '@Customer/Features/SingleProductPage/Reviews'

const SingleProductPage = () => {
	return (
		<FluidContainer py='26px' marginTop='100px'>
			<ProductView />
			<Reviews />
		</FluidContainer>
	)
}

export default SingleProductPage
