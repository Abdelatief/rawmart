import { Image, Text, Flex, Button } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { useState } from 'react'

const ProductCard = ({ product }) => {
	console.log({ product })
	const [isHoverd, setIsHovered] = useState(false)
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
			{isHoverd && (
				<Flex position='absolute' top='50%' bot='50%' width='100%' height='62px'>
					<Button width='25%' height='62px' borderRadius={0}>
						<AiOutlineHeart fontSize='26px' />
					</Button>
					<Button height='auto' bg='black' _hover={{ bg: '#AFD39A' }} width='50%' borderRadius={0} color='white'>
						Add to Cart
					</Button>
					<Button width='25%' height='62px' borderRadius={0}>
						<BsArrowRepeat fontSize='26px' />
					</Button>
				</Flex>
			)}

			<Image src={product?.image_url} objectFit='contain' width='280px' height='280px' mb='8px' alt={product.name} />
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
