import { Image, Text, Flex, Button } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '@Customer/Redux/CartSlice'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'
import { useAddToWishlistMutation } from '@Customer/Redux/CustomerApi'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ product }) => {
	const { userData } = useCustomerAuthContext()
	const dispatch = useDispatch()
	const [isHovered, setIsHovered] = useState(false)
	const [mutateWishlist, _] = useAddToWishlistMutation()
	const navigate = useNavigate()

	const addToCart = () => {
		console.log({ product })
		dispatch(addItem({ id: product?.id, variant: 'false' }))
	}

	const addToWishlist = event => {
		event.stopPropagation()
		mutateWishlist({ product_id: product.id, user_id: userData.id })
	}
	const productItemClickHandler = product => {
		navigate(`../../products/${product.slug}`, {
			state: { product },
		})
	}

	return (
		<Flex
			flexDirection='column'
			justifyContent='space-around'
			alignItems='space-between'
			width='280px'
			height='460px'
			position='relative'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			_hover={{ cursor: 'pointer' }}
		>
			{/* card action buttons */}
			{isHovered && (
				<Flex position='absolute' top='50%' bot='50%' width='100%' height='62px'>
					<Button width='25%' height='62px' borderRadius={0} onClick={addToWishlist}>
						<AiOutlineHeart fontSize='26px' />
					</Button>
					<Button
						height='auto'
						bg='black'
						_hover={{ bg: '#AFD39A' }}
						width='50%'
						borderRadius={0}
						color='white'
						onClick={addToCart}
					>
						Add to Cart
					</Button>
					<Button width='25%' height='62px' borderRadius={0}>
						<BsArrowRepeat fontSize='26px' />
					</Button>
				</Flex>
			)}

			<Image
				src={product?.image_url}
				objectFit='contain'
				width='280px'
				height='280px'
				mb='8px'
				alt={product.name}
				onClick={() => productItemClickHandler(product)}
			/>
			<Flex flexDirection='column' alignItems='center' justifyContent='center' gap='16px'>
				<Text fontWeight={600} color='#9a9a9a' fontSize='14px' textTransform='uppercase' lineHeight='1.714'>
					{product?.vendor}
				</Text>
				<Text>{product?.name}</Text>
				<Text fontSize='14px' fontWeight='600' color='red'>
					{product.cart_price} EGP
				</Text>
			</Flex>
		</Flex>
	)
}

export default ProductCard
