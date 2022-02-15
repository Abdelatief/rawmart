import React, { useState } from 'react'
import styled from 'styled-components'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'
import { Button, Flex, FormInput, Popup, Text } from '@Components'
import { VscAdd } from 'react-icons/vsc'
import { useGetCategoriesQuery, useGetVendorsQuery } from '@Admin/Redux/AdminApi'

const ProductsHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { data: vendorsData } = useGetVendorsQuery()
	const { data: categoriesData } = useGetCategoriesQuery()
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>Products</StyledHeader>
				</StyledLeftContainer>
				<StyledRightContainer>
					<Button
						variant='tertiary'
						minWidth={null}
						width='187px'
						fontSize={3}
						display='flex'
						justifyContent='center'
						onClick={() => {
							setIsOpen(true)
						}}
					>
						<VscAdd />
						<Text fontSize={2} ml='5px'>
							Add Product
						</Text>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} minWidth='80%' height='98%' padding='30px' overflow='scroll'>
						{<div />}
					</Popup>
				</StyledRightContainer>
			</StyledHeaderDiv>
			<StyledInnerContainer>
				<FormGroupFlex flexDirection={['column', null, 'row']}>
					<FormSelectedInput
						label='Language'
						options={[
							{ id: 1, name: 'English' },
							{ id: 2, name: 'Arabic' },
						]}
					/>
					<FormInput label='Products' placeholder='Search Products' />
					<FormSelectedInput label='Category' options={categoriesData?.data} />
					<FormSelectedInput label='Vendor' options={vendorsData?.data} />
					<FormSelectedInput label='Availability' options={[{ name: 'In Stock' }, { name: 'Out of Stock' }]} />
				</FormGroupFlex>
			</StyledInnerContainer>
		</StyledOuterContainer>
	)
}

const StyledOuterContainer = styled.div`
	display: block;
	margin-right: 20px;
`
const StyledHeaderDiv = styled.div`
	display: flex;
	@media (max-width: 750px) {
		display: block;
	}
	margin-top: -20px;
`

const StyledLeftContainer = styled.div`
	flex: 70%;
	justify-content: flex-start;
`
const StyledRightContainer = styled.div`
	justify-content: flex-end;
`
const StyledHeader = styled(Text).attrs({
	fontSize: '22px',
	mb: '10px',
	fontWeight: 'bold',
})`
	min-height: 50px;
	@media (max-width: 750px) {
		background: #e0ecde;
		margin-top: 40px;
		padding: 10px;
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		min-height: 50px;
	}
`
const StyledInnerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #fbfbfb;
	padding: 20px;
	margin: 30px 0 30px 0;
`
const FormGroupFlex = styled(Flex)`
	width: 100%;
	gap: 30px;
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

export default ProductsHeaderSection
