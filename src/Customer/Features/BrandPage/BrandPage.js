import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSingleBrandQuery } from '@Customer/Redux/CustomerApi'
import { FluidContainer } from '@Components'
import { Flex, Text, Checkbox, Menu, MenuButton, Button, MenuList, MenuItem, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProductCard from '@Customer/Features/BrandPage/Components/ProductCard'

const BrandPage = () => {
	const {
		state: { brand },
	} = useLocation()
	const brandResult = useGetSingleBrandQuery(brand.id)

	console.log({ brand })

	useEffect(() => {
		console.log({ brandResult })
	}, [brandResult])

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
					{/*<StyledShopSection>*/}
					{/*	<StyledFiltersContainer></StyledFiltersContainer>*/}
					{/*	<Flex>*/}
					{/*		<StyledProductsHeader></StyledProductsHeader>*/}
					{/*		<StyledProductsSection></StyledProductsSection>*/}
					{/*	</Flex>*/}
					{/*</StyledShopSection>*/}

					{/*	Shop Section */}
					<Flex mt='26px' flexDirection={['column', null, null, 'row']}>
						{/*	Filters Section */}
						<Flex mr='46px'>
							{/*	Categories Filters */}
							<Flex flexDirection='column'>
								<Text textTransform='uppercase' lineHeight='3' fontWeight={600} mb='16px'>
									Categories
								</Text>
								<Checkbox py='6px' fontSize='14px' borderColor='gray' color='gray'>
									Plumbing(1)
								</Checkbox>
							</Flex>
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
							<Flex gap='26px' flexWrap='wrap' my='16px' bg='gray' justifyContent='center'>
								<ProductCard />
								<ProductCard />
								<ProductCard />
								<ProductCard />
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

const StyledShopSection = styled.div``

const StyledFiltersContainer = styled.div``

const StyledProductsHeader = styled.div``

const StyledProductsSection = styled.div``

export default BrandPage
