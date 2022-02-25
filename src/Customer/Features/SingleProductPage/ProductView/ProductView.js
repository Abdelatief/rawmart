import React from 'react'
import styled from 'styled-components'
import ProductInfo from '@Customer/Features/SingleProductPage/ProductView/ProductInfo'
import { FluidContainer, Flex } from '@Components'

const ProductView = () => {
	return (
		<FluidContainer>
			<Flex width='100%' flexDirection={['column', null, 'row']}>
				<StyledLeftContainer>right</StyledLeftContainer>
				<StyledRightContainer>
					<ProductInfo />
				</StyledRightContainer>
			</Flex>
		</FluidContainer>
	)
}
const StyledRightContainer = styled.div`
	width: 50%;
`
const StyledLeftContainer = styled.div`
	width: 50%;
`

export default ProductView
