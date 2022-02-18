import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSingleBrandQuery } from '@Customer/Redux/CustomerApi'
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
	useRangeSlider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProductCard from '@Customer/Features/BrandPage/Components/ProductCard'

const BrandPage = () => {
	const {
		state: { brand },
	} = useLocation()
	const [categories, setCategories] = useImmer({})
	const [variableData, setVariableData] = useImmer({})
	const brandResult = useGetSingleBrandQuery(brand.id)
	const [priceRange, setPriceRange] = useImmer({})
	const rangeSlider = useRangeSlider({
		min: brandResult?.data?.min,
		max: brandResult?.data?.max,
		defaultValue: [brandResult?.data?.min, brandResult?.data?.max],
		onChange: ([val1, val2]) => {
			console.log({ val1, val2 })
		},
	})

	console.log({ brand })

	useEffect(() => {
		console.log({ brandResult })
		if (brandResult?.isSuccess) {
			console.log({ categories: brandResult?.data?.categories })
			setCategories(draft => {
				brandResult?.data?.categories.forEach(category => {
					draft[category?.id] = { ...category, checked: false }
				})
			})
			setVariableData(draft => {
				brandResult?.data?.variable_data?.forEach(variable => {
					draft[variable.variant_id] = { ...variable, checked: false }
				})
			})
			setPriceRange(draft => {
				draft.min = Number(brandResult?.data?.min)
				draft.max = Number(brandResult?.data?.max)
			})
		}
	}, [brandResult, setCategories])

	useEffect(() => {
		console.log({ priceRange })
	}, [priceRange])

	const categoryChangeHandler = (event, id) => {
		setCategories(draft => {
			draft[id].checked = event.target.checked
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
		if (brandResult.isLoading) {
			return <Text fontSize='26px'>Loading...</Text>
		}

		if (brandResult.isSuccess && brandResult?.data?.data) {
			return (
				<>
					<Text fontSize='34px' lineHeight='1.412' my='36px'>
						{brand.name}
					</Text>
					<StyledCategoriesContainer>
						{brandResult.data?.categories?.map(category => (
							<Flex key={category?.id} flexDirection='column' gap='16px' width='164px'>
								<StyledCategoryImage src={category?.image_url} alt={category?.name} />
								<Text>{category?.name}</Text>
							</Flex>
						))}
					</StyledCategoriesContainer>

					{/*	Shop Section */}
					<Flex mt='26px' flexDirection={['column', null, null, 'row']}>
						{/*	Filters Section */}
						<Flex mr='46px' width={['100%', null, null, '310px']} flexDirection='column' gap='26px'>
							{/*	Categories Filters */}
							{Object.keys(categories).length > 0 && (
								<Flex flexDirection='column'>
									<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
										Categories
									</Text>
									{Object.values(categories).map(category => (
										<Checkbox
											onChange={e => categoryChangeHandler(e, category?.id)}
											isChecked={category?.checked}
											key={category?.id}
											py='6px'
											fontSize='14px'
											borderColor='gray'
											color='gray'
										>
											{category?.name}({category?.no_of_products})
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
							{brandResult?.data?.min !== brandResult?.data?.max && (
								<Flex flexDirection='column'>
									<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
										Price (EGP)
									</Text>
									<RangeSlider
										colorScheme='green'
										width='100%'
										mt='20px'
										onChange={priceRangeChangeHandler}
										min={Number(brandResult?.data?.min)}
										max={Number(brandResult?.data?.max)}
										defaultValue={[Number(brandResult?.data?.min), Number(brandResult?.data?.max)]}
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
								{brandResult?.data?.data?.map(product => (
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

const StyledCategoriesContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 26px 0;
`

const StyledCategoryImage = styled.img`
	width: 164px;
	height: 164px;
`

export default BrandPage
