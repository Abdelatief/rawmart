import { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Flex, FluidContainer, Text } from '@Components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import CategoryItem from '@Customer/Features/LandingPage/Components/CategoriesSection/CategoryItem'
import { useGetCategoriesQuery } from '@Customer/Redux/CustomerApi'

const CategoriesSection = () => {
	const { data, isLoading, isSuccess } = useGetCategoriesQuery()
	const categoriesContainerRef = useRef(null)

	useEffect(() => {
		console.log({ data, isLoading, isSuccess })
	}, [data, isLoading, isSuccess])

	const scroll = direction => {
		const scrollDistance = 166 * 2
		const totalScrollDistance =
			categoriesContainerRef?.current?.scrollLeft + (direction === 'left' ? -1 : 1) * scrollDistance
		categoriesContainerRef?.current?.scrollTo({ left: totalScrollDistance, behavior: 'smooth' })
	}

	return (
		<FluidContainer>
			<StyledCategoriesSection>
				<Flex justifyContent='space-between'>
					<Text fontSize='34px'>Categories</Text>
					<Flex gap='8px'>
						<LeftArrowIcon onClick={() => scroll('left')} />
						<RightArrowIcon onClick={() => scroll('right')} />
					</Flex>
				</Flex>
				<CategoriesContainer ref={categoriesContainerRef}>
					{isSuccess &&
						data &&
						data.map(category => (
							<CategoryItem key={category.id} name={category?.name} imageUrl={category.image_url} />
						))}
				</CategoriesContainer>
			</StyledCategoriesSection>
		</FluidContainer>
	)
}

const StyledCategoriesSection = styled.div`
	margin: 124px 0;
`

const NavigationIconsCss = css`
	font-size: 36px;
	border-radius: 50%;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
	color: #a2a2a2;

	&:hover {
		cursor: pointer;
		background-color: #ddd;
	}
`

const LeftArrowIcon = styled(MdKeyboardArrowLeft)`
	${NavigationIconsCss};
`

const RightArrowIcon = styled(MdKeyboardArrowRight)`
	${NavigationIconsCss};
`

const CategoriesContainer = styled.div`
	display: flex;
	margin-top: 68px;
	gap: 32px;
	overflow-y: hidden;
	overflow-x: auto;
	scrollbar-width: none; // hide scroll bar for firefox

	&::-webkit-scrollbar {
		// hide scroll bar for chrome
		width: 0;
		background-color: transparent;
	}
`

export default CategoriesSection
