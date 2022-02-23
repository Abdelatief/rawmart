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

	useEffect(() => {
		if (categoryResult?.isSuccess) {
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

					{/*	Shop Section */}
					<Flex mt='26px' flexDirection={['column', null, null, 'row']}>
						{/*	Filters Section */}
						<Flex mr='46px' width={['100%', null, null, '310px']} flexDirection='column' gap='26px'>
							{/*	Brands Filters */}
							{Object.keys(brands).length > 0 && (
								<Flex flexDirection='column'>
									<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
										brands
									</Text>
									{Object.values(brands).map(brand => (
										<Checkbox
											onChange={e => brandChangeHandler(e, brand?.id)}
											isChecked={brand?.checked}
											key={brand?.id}
											py='6px'
											fontSize='14px'
											borderColor='gray'
											color='gray'
										>
											{brand?.name}({brand?.no_of_products})
										</Checkbox>
									))}
								</Flex>
							)}

							{/* variable data section */}
							{Object.keys(variableData).length > 0 && (
								<Flex flexDirection='column'>
									<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
										Variant Item
									</Text>
									{Object.values(variableData).map(variable => (
										<Checkbox
											onChange={e => variantChangeHandler(e, variable.variant_id)}
											isChecked={variable?.checked}
											key={variable?.variant_id}
											py='6px'
											fontSize='14px'
											borderColor='gray'
											color='gray'
										>
											{variable?.variant_name}({variable?.no_of_products})
										</Checkbox>
									))}
								</Flex>
							)}

							{/*	Price Range Section */}
							{categoryResult?.data?.min !== categoryResult?.data?.max && (
								<Flex flexDirection='column'>
									<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
										Price (EGP)
									</Text>
									<RangeSlider
										colorScheme='green'
										width='100%'
										mt='20px'
										onChange={priceRangeChangeHandler}
										min={Number(categoryResult?.data?.min)}
										max={Number(categoryResult?.data?.max)}
										defaultValue={[Number(categoryResult?.data?.min), Number(categoryResult?.data?.max)]}
									>
										<RangeSliderTrack>
											<RangeSliderFilledTrack />
										</RangeSliderTrack>
										<RangeSliderThumb bg='green.100' index={0} position='relative'>
											<Text position='absolute' top='-26px'>
												{priceRange.min}
											</Text>
										</RangeSliderThumb>
										<RangeSliderThumb bg='green.100' index={1}>
											<Text position='absolute' top='-26px'>
												{priceRange.max}
											</Text>
										</RangeSliderThumb>
									</RangeSlider>
								</Flex>
							)}
						</Flex>

						{/*	Products Section */}
						<Flex grow={1} flexDirection='column' gap='16px'>
							{/*	Products Header */}
							<Flex width='100%' justifyContent='space-between' alignItems='center' my='16px'>
								<Text>2 Products</Text>
								<Menu>
									<MenuButton
										width='200px'
										variant='unstyled'
										borderRadius={0}
										bg='black'
										color='white'
										as={Button}
										rightIcon={<ChevronDownIcon />}
									>
										Sort By
									</MenuButton>
									<MenuList>
										<MenuItem>Download</MenuItem>
										<MenuItem>Create a Copy</MenuItem>
										<MenuItem>Mark as Draft</MenuItem>
										<MenuItem>Delete</MenuItem>
										<MenuItem>Attend a Workshop</MenuItem>
									</MenuList>
								</Menu>
							</Flex>

							{/*	Products list */}
							<Flex gap='26px' flexWrap='wrap' my='16px' pb='26px' justifyContent='center'>
								{categoryResult?.data?.data?.map(product => (
									<ProductCard key={product.id} product={product} />
								))}
							</Flex>
						</Flex>
					</Flex>
				</>
			)
		}
	}
	return <FluidContainer>{renderer()}</FluidContainer>
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
