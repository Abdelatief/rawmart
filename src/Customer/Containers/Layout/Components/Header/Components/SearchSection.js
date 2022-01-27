import styled, { css } from 'styled-components'
import FluidContainer from '../../../../../../Shared/Components/FluidContainer'
import { Flex, Text, Input } from '../../../../../../Shared/Components'
import { FiSearch, FiRepeat, FiHeart, FiShoppingBag } from 'react-icons/fi'

const SearchSection = () => {
	return (
		<FluidContainer>
			<Flex height='88px' alignItems='center'>
				<Text position='relative' bottom='4px' mr='160px' fontFamily='KageFreebiesBlack' fontSize={8}>
					Rawmart
				</Text>
				<Input width='392px' icon={<SearchIcon />} />
				<Flex ml='auto' gap='18px'>
					<CompareIcon />
					<HeartIcon />
					<CartIcon />
				</Flex>
			</Flex>
		</FluidContainer>
	)
}

const SearchIcon = styled(FiSearch)`
	display: block;
	color: ${props => props.theme.colors.text.lightBlack};
	width: 28px;
	height: 100%;
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
