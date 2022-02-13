import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useGetSingleBrandQuery } from '@Customer/Redux/CustomerApi'
import { FluidContainer, Text, Flex } from '@Components'

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
					<StyledShopSection>
						<StyledFiltersContainer></StyledFiltersContainer>
						<Flex>
							<StyledProductsHeader></StyledProductsHeader>
							<StyledProductsSection></StyledProductsSection>
						</Flex>
					</StyledShopSection>
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
