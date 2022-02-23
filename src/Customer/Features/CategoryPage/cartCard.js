import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useGetCartQuery } from '@Customer/Redux/CustomerApi'

const CartCard = () => {
	const products = useSelector(state => state.cart.items)
	const { data, isLoading, isSuccess } = useGetCartQuery({
		dir: 'desc',
		page: 0,
		per_page: -1,
		postalcode: '',
		products,
		search: '',
		sort: 'id',
	})
	useEffect(() => {
		console.log({ cartData: data })
	}, [data])

	return <StyledContainer bg='background.cultured'>CartCard</StyledContainer>
}
const StyledContainer = styled.div`
	background-color: #f7f7f7;
	//width: 50%;
	//height: 50%;
	//position: relative;
`
export default CartCard
