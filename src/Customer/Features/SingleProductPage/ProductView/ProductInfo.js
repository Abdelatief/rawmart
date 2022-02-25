import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flex, Text } from '@Components'
import StarRatingComponent from 'react-star-rating-component'
import { MdStarRate } from 'react-icons/md'
import styled from 'styled-components'
import { Button } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { addItem } from '@Customer/Redux/CartSlice'
import { useDispatch } from 'react-redux'
import { useAddToWishlistMutation } from '@Customer/Redux/CustomerApi'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'

const ProductInfo = () => {
	const {
		state: { product },
	} = useLocation()
	console.log({ product: product })
	const { userData } = useCustomerAuthContext()
	const dispatch = useDispatch()
	const [mutateWishlist, _] = useAddToWishlistMutation()
	const addToCart = () => {
		dispatch(addItem({ id: product?.id, variant: 'false' }))
	}

	const addToWishlist = event => {
		event.stopPropagation()
		mutateWishlist({ product_id: product.id, user_id: userData.id })
	}
	return (
		<div>
			<Text color='#9a9a9a' textTransform='uppercase' fontWeight={600} fontSize='14px' mb='10px'>
				{product.vendor}
			</Text>
			<Text fontSize='25px' mb='10px'>
				{product.name}
			</Text>
			<StarRatingComponent
				name='rate'
				editing={false}
				renderStarIcon={() => (
					<span>
						<StyledStarIcon />
					</span>
				)}
				starCount={5}
				value={parseInt(product.ratings)}
				emptyStarColor='#c3c3c3'
			/>
			<Text color='#686868' fontSize='16px' mb='10px' mt='5px'>
				{product.reviews} Reviews
			</Text>
			<Text color='#eb3030' fontSize='18px' fontWeight={600} mt='15px'>
				EGP {parseInt(product.price) - parseInt(product.discount)}{' '}
			</Text>
			<StyledText fontWeight={600} mb='20px'>
				EGP {parseInt(product.price)}{' '}
			</StyledText>
			<Flex fontSize='16px'>
				<Text color='#686868' mr='5px'>
					SKU:
				</Text>
				<Text fontWeight={600}>{product.sku}</Text>
			</Flex>
			<Flex fontSize='16px' mb='10px'>
				<Text color='#686868' mr='5px'>
					Availability:
				</Text>
				{product.availability ? <Text color='green'>In Stock</Text> : <Text color='red'>Out of Stock</Text>}
			</Flex>
			<StyledInnerContainer>
				<Text color='#686868' fontSize='16px'>
					Made in {product.made_in}
				</Text>
				<Text color='#686868' fontSize='16px'>
					Warranty : {product.warranty}
				</Text>
			</StyledInnerContainer>
			<Flex position='absolute' pt='20px' width='100%' height='62px'>
				<StyledQuantityInput min='1' defaultValue={1} />
				<Button
					height='55px'
					bg='black'
					_hover={{ bg: '#AFD39A' }}
					width='30%'
					borderRadius={0}
					color='white'
					onClick={addToCart}
					margin='5px'
				>
					Add to Cart
				</Button>
				<StyledLink to='../../checkout'>
					<Button height='55px' bg='#AFD39A' borderRadius={0} color='black' width='100%'>
						Buy Now
					</Button>
				</StyledLink>
				<Button
					width='10%'
					color='white'
					bg='#ed677a'
					margin='5px'
					height='55px'
					borderRadius={0}
					onClick={addToWishlist}
					_hover={{ bg: '#AFD39A' }}
				>
					<AiOutlineHeart fontSize='26px' />
				</Button>

				<Button
					width='10%'
					color='white'
					bg='#ffb85b'
					margin='5px'
					height='55px'
					borderRadius={0}
					_hover={{ bg: '#AFD39A' }}
				>
					<BsArrowRepeat fontSize='26px' />
				</Button>
			</Flex>
		</div>
	)
}
const StyledStarIcon = styled(MdStarRate)`
	font-size: 25px;
`
const StyledText = styled(Text)`
	text-decoration-line: line-through;
`
const StyledInnerContainer = styled.div`
	width: 100%;
	padding: 20px 0;
	border-bottom: 1px solid #aeaeae;
	border-top: 1px solid #aeaeae;
`
const StyledQuantityInput = styled.input.attrs({
	type: 'number',
})`
	width: 15%;
	border: 1px solid;
	height: 55px;
	margin: 5px;
	text-align: center;
	font-size: 16px;
	font-weight: bold;

	::-webkit-outer-spin-button {
		opacity: 1;
	}
`
const StyledLink = styled(Link)`
	text-decoration-line: none;
	width: 30%;
	margin: 5px;
`
export default ProductInfo
