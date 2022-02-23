import React from 'react'
import { Text } from '@chakra-ui/react'
import { FluidContainer } from '@Components'
import { useGetWishlistQuery } from '@Customer/Redux/CustomerApi'

const Wishlist = () => {
	const { data, isLoading } = useGetWishlistQuery()

	React.useEffect(() => {
		console.log({ data, isLoading })
	}, [data, isLoading])

	return (
		<FluidContainer>
			<h1>Wishlist</h1>
		</FluidContainer>
	)
}

export default Wishlist
