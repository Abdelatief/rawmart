import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSingleCategoryQuery } from '@Customer/Redux/CustomerApi'
import { FluidContainer } from '@Components'
import { useImmer } from 'use-immer'
import {
	Flex,
	Text,
	Checkbox,
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProductCard from '@Customer/Features/BrandPage/Components/ProductCard'

const CategoryPage = () => {
	const {
		state: { category },
	} = useLocation()
	const [brands, setbrands] = useImmer({})
	const [variableData, setVariableData] = useImmer({})
	const [priceRange, setPriceRange] = useImmer({})
	const [body, setBody] = useImmer({
		categoryId: category.id,
		brands: [],
	})
	const categoryResult = useGetSingleCategoryQuery(body)
	console.log({ category })

	useEffect(() => {
		console.log({ body })
	}, [body])

	useEffect(() => {
		console.log({ categoryResult })
		if (categoryResult?.isSuccess) {
			console.log({ brands: categoryResult?.data?.brands })
			setbrands(draft => {
				categoryResult?.data?.brands.forEach(brand => {
					draft[brand?.id] = { ...brand, checked: false }
				})
			})
			setVariableData(draft => {
				categoryResult?.data?.variable_data?.forEach(variable => {
					draft[variable.variant_id] = { ...variable, checked: false }
				})
			})
			setPriceRange(draft => {
				draft.min = Number(categoryResult?.data?.min)
				draft.max = Number(categoryResult?.data?.max)
			})
		}
	}, [categoryResult, setbrands])

	const brandChangeHandler = (event, id) => {
		setbrands(draft => {
			draft[id].checked = event.target.checked
		})
		setBody(draft => {
			draft.brands = Object.values(brands)
				.filter(value => value.checked)
				.map(brand => brand?.id)
		})
	}

	const variantChangeHandler = (event, id) => {
		setVariableData(draft => {
			draft[id].checked = event.target.checked
		})
	}

	const priceRangeChangeHandler = ([val1, val2]) => {
		setPriceRange(draft => {
			draft.min = val1
			draft.max = val2
		})
	}
	const renderer = () => {
		if (categoryResult.isLoading) {
			return <Text fontSize='26px'>Loading...</Text>
		}
		if (categoryResult.isSuccess && categoryResult?.data?.data) {
			return (
				<>
					<Text fontSize='34px' lineHeight='1.412' my='36px'>
						{category.name}
					</Text>
					<StyledBrandsContainer>
						{categoryResult.data?.brands?.map(brand => (
							<Flex key={brand?.id} flexDirection='column' gap='16px' width='164px'>
								<StyledBrandImage src={brand?.image_url} alt={brand?.name} />
								<Text>{brand?.name}</Text>
							</Flex>
						))}
					</StyledBrandsContainer>
				</>
			)
		}
	}
	return (
		<div>
			<h1>CategoryPage</h1>
		</div>
	)
}
const StyledBrandsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 26px 0;
`

const StyledBrandImage = styled.img`
	width: 164px;
	height: 164px;
`
export default CategoryPage
