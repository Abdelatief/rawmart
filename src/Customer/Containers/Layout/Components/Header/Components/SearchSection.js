import { useEffect, useState } from 'react'
import { useNavigate, useLocation, useSearchParams, createSearchParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import FluidContainer from '../../../../../../Shared/Components/FluidContainer'
import { Flex, Text, Input } from '../../../../../../Shared/Components'
import { Box } from '@chakra-ui/react'
import { FiSearch, FiRepeat, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@Hooks'
import { IconBadge } from './SearchSection.chakra'
import useCustomerAuthContext from '@Customer/Hooks/useAuthContext'
import { useGetWishlistQuery } from '@Customer/Redux/CustomerApi'
import { useSelector } from 'react-redux'
import useDebounce from '../../../../../../Shared/Hooks/UseDebounce'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@Customer/Redux/AppSlice'

const SearchSection = () => {
	const matches = useMediaQuery('(max-width: 900px)')
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const { userData } = useCustomerAuthContext()
	const { data, isLoading, isSuccess } = useGetWishlistQuery({ user_id: userData?.id })
	const products = useSelector(state => state.cart.items)
	const [isSearchReset, setSearchReset] = useState(false)
	const { debounceValue, setRealValue, realValue } = useDebounce({
		value: '',
		callback: async () => {
			console.log('search debounce')
			dispatch(setSearchQuery(debounceValue))
			if (debounceValue) {
				const queryParam = createSearchParams({ q: debounceValue })
				await navigate(`/search?${queryParam}`)
			} else {
				setSearchParams({})
			}
		},
	})

	console.log({ products, length: products?.length })

	const navigateToSearch = async () => {
		dispatch(setSearchQuery(debounceValue))
		if (debounceValue) {
			const queryParam = createSearchParams({ q: debounceValue })
			await navigate(`/search?${queryParam}`)
		} else {
			setSearchParams({})
		}
	}

	const searchQueryChangeHandler = event => {
		setRealValue(event.target.value)
	}

	return (
		<FluidContainer>
			<StyledFlexContainer height='88px' alignItems='center'>
				{matches && (
					<Flex width='100%' alignItems='center' justifyContent='space-between'>
						<Text fontSize={7} fontFamily='KageFreebiesBlack'>
							Rawmart
						</Text>
						<Flex gap='18px' _hover={{ cursor: 'pointer' }}>
							{/*<CompareIcon />*/}
							<HeartIcon />
							<Link to='/cart'>
								<CartIcon />
							</Link>
						</Flex>
					</Flex>
				)}
				{!matches && <StyledLogo>Rawmart</StyledLogo>}
				<Input
					width={['100%', null, null, '392px']}
					icon={<SearchIcon onClick={navigateToSearch} />}
					value={realValue}
					onChange={searchQueryChangeHandler}
				/>
				{!matches && (
					<StyledIconsFlexContainer>
						{/*<CompareIcon />*/}
						<Link to='/wishlist'>
							<Box position='relative'>
								<IconBadge>{data?.data?.length ?? 0}</IconBadge>
								<HeartIcon />
							</Box>
						</Link>
						<Link to='/cart'>
							<Box position='relative'>
								<IconBadge>{Object.keys(products)?.length}</IconBadge>
								<CartIcon />
							</Box>
						</Link>
					</StyledIconsFlexContainer>
				)}
			</StyledFlexContainer>
		</FluidContainer>
	)
}

const StyledFlexContainer = styled.div`
	display: flex;
	height: 88px;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`

const StyledLogo = styled.div`
	font-family: KageFreebiesBlack, sans-serif;
	font-size: 60px;
	margin-right: 160px;
	position: relative;
	bottom: 4px;

	@media (max-width: 900px) {
		font-size: 38px;
		margin-right: 0;
		align-self: flex-start;
	}
`

const SearchIcon = styled(FiSearch)`
	display: block;
	color: ${props => props.theme.colors.text.lightBlack};
	width: 28px;
	height: 100%;
`

const StyledIconsFlexContainer = styled.div`
	display: flex;
	margin-left: auto;
	gap: 18px;
	cursor: pointer;

	@media (max-width: 900px) {
		margin: 12px auto;
	}
`

const IconStyles = css`
	font-size: 26px;
`

const CompareIcon = styled(FiRepeat)`
	${IconStyles};
`

const HeartIcon = styled(FiHeart)`
	${IconStyles};
`

const CartIcon = styled(FiShoppingBag)`
	${IconStyles};
`

export default SearchSection
