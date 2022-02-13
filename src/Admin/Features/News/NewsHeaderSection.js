import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Flex, FormInput, Popup, Text } from '@Components'
import SelectedInput from '@Admin/Components/SelectedInput'
import { VscAdd } from 'react-icons/vsc'
import FormSelectedInput from '@Admin/Components/FormSelectedInput'

const NewsHeaderSection = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<StyledOuterContainer>
			<StyledHeaderDiv>
				<StyledLeftContainer>
					<StyledHeader>News</StyledHeader>
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
							Add News
						</Text>
					</Button>
					<Popup isOpen={isOpen} setIsOpen={setIsOpen} minWidth='60%' height='98%' padding='30px'>
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
					<FormInput label='News' placeholder='Search News' />
					<FormSelectedInput
						label='Category'
						options={[
							{ id: 1, name: 'Electrical' },
							{ id: 2, name: 'Lighting' },
						]}
					/>
				</FormGroupFlex>
			</StyledInnerContainer>
		</StyledOuterContainer>
	)
}

const StyledOuterContainer = styled.div`
	display: block;
	margin-top: -20px;
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
	margin: 30px;
`
const FormGroupFlex = styled(Flex)`
	width: 100%;
	gap: 30px;
	@media (max-width: 832px) {
		margin-bottom: 16px;
	}
`

export default NewsHeaderSection
