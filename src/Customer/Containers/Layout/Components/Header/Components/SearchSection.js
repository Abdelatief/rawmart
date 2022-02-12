import styled, { css } from 'styled-components'
import FluidContainer from '../../../../../../Shared/Components/FluidContainer'
import { Flex, Text, Input } from '../../../../../../Shared/Components'
import { FiSearch, FiRepeat, FiHeart, FiShoppingBag } from 'react-icons/fi'
import { useMediaQuery } from '@Hooks'

const SearchSection = () => {
	const matches = useMediaQuery('(max-width: 900px)')

	return (
		<FluidContainer>
			<StyledFlexContainer height='88px' alignItems='center'>
				{matches && (
					<Flex width='100%' my='12px' alignItems='center' justifyContent='space-between'>
						<Text fontSize={7} fontFamily='KageFreebiesBlack'>
							Rawmart
						</Text>
						<Flex gap='18px'>
							<CompareIcon />
							<HeartIcon />
							<CartIcon />
						</Flex>
					</Flex>
				)}
				{!matches && <StyledLogo>Rawmart</StyledLogo>}
				<Input width={['100%', null, null, '392px']} icon={<SearchIcon />} />
				{!matches && (
					<StyledIconsFlexContainer>
						<CompareIcon />
						<HeartIcon />
						<CartIcon />
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
