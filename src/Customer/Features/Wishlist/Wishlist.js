import React from 'react'
import { Text } from '@chakra-ui/react'
import { FluidContainer } from '@Components'
import { useGetWishlistQuery } from '@Customer/Redux/CustomerApi'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'

const Wishlist = () => {
	const { userData } = useCustomerAuthContext()
	const { data, isLoading } = useGetWishlistQuery({ user_id: userData.id })

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
